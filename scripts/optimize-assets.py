"""
optimize-assets.py - asset weight pass (alpha-safe, .png + oversized .webp).

For each image under assets/<tier>/, resize down to a 2x-retina max width for its
slot, then (re-)save as WebP quality 88. PNG sources are converted and the PNG is
deleted. Transparency is PRESERVED (hub overlays + glyphs composite on a base, so
flattening to RGB would wreck them) -- images keep RGBA when they have an alpha
channel.

Already-optimised WebPs (small + within max width) are left untouched so we don't
re-encode them generationally. The assets/pilot-*.png originals at root and the
.gitkeep / .svg files are left alone.

Usage:
    python scripts/optimize-assets.py            # do the pass
    python scripts/optimize-assets.py --dry-run  # report only, change nothing
"""
from PIL import Image
from pathlib import Path
import sys

# 2x the in-game display max-width per slot. Full-bleed 20:9 surfaces (hub, heroes,
# places, chrome, detail views) target 1920; classic set-piece scenes ~1600; the
# tiny forecast/discipline glyphs 96.
TIER_MAX_WIDTH = {
    'hub':          1920,  # bedroom base + transparent object/season overlays
    'heroes':       1920,  # 20:9 figure-left scene-full
    'places':       1920,  # 20:9 route-card / trailhead silhouette
    'chrome':       1920,  # 20:9 flat-lay detail view
    'backpack':     1920,  # packing detail view
    'clients':      1920,  # people-card detail view
    'reports':      1920,  # day-report detail view
    'desk':         1920,  # phase 2-4 desk hubs
    'scenes':       1600,  # kitchen / panigiri / hilux / hire / radio set pieces
    'title':        1600,  # cover image
    'disciplines':    96,  # display ~36px
    'weather':        96,  # display ~22px
}
WEBP_QUALITY = 88
SKIP_BYTES = 1_000_000  # a webp this small and within max width is already optimised

DRY = '--dry-run' in sys.argv
assets = Path('assets')

rows = []
total_before = 0
total_after = 0

imgs = [p for p in sorted(assets.rglob('*'))
        if p.is_file() and p.suffix.lower() in ('.png', '.webp')]

for p in imgs:
    rel = p.relative_to(assets)
    parts = rel.parts
    if len(parts) == 1:        # assets/pilot-*.png originals at root
        continue
    tier = parts[0]
    if tier not in TIER_MAX_WIDTH:
        print('  SKIP (unknown tier): ' + str(rel).replace('\\', '/'))
        continue

    size_before = p.stat().st_size
    img = Image.open(p)
    has_alpha = (img.mode in ('RGBA', 'LA', 'PA')
                 or (img.mode == 'P' and 'transparency' in img.info))
    img = img.convert('RGBA' if has_alpha else 'RGB')
    ow, oh = img.size
    max_w = TIER_MAX_WIDTH[tier]

    needs_resize = ow > max_w
    is_png = p.suffix.lower() == '.png'
    # leave already-small in-spec webps alone (don't re-encode generationally)
    if not is_png and not needs_resize and size_before < SKIP_BYTES:
        continue

    nw, nh = (max_w, round(oh * max_w / ow)) if needs_resize else (ow, oh)

    if DRY:
        size_after = -1
    else:
        out = img.resize((nw, nh), Image.LANCZOS) if needs_resize else img
        webp_path = p.with_suffix('.webp')
        out.save(webp_path, 'WEBP', quality=WEBP_QUALITY, method=6)
        if is_png:
            p.unlink()         # drop the PNG source; .webp replaces it
        size_after = webp_path.stat().st_size

    rows.append((str(rel).replace('\\', '/'), ow, oh, nw, nh,
                 size_before, size_after, has_alpha))
    total_before += size_before
    total_after += size_after if size_after > 0 else size_before

# ---- report (ASCII only) ----
hdr = '%-46s %-1s %11s %11s %9s %9s' % ('file', 'A', 'orig', 'new', 'before', 'after')
print(hdr)
print('-' * len(hdr))
for rel, ow, oh, nw, nh, sb, sa, a in rows:
    aflag = '*' if a else ' '
    after = '   (dry)' if sa < 0 else ('%6dKB' % (sa // 1024))
    print('%-46s %s %5dx%-5d %5dx%-5d %6dKB %s'
          % (rel[:46], aflag, ow, oh, nw, nh, sb // 1024, after))
print('-' * len(hdr))
n = len(rows)
if DRY:
    print('DRY RUN: %d files would be processed (A* = has alpha, preserved). '
          'Current total of those: %.1f MB.' % (n, total_before / 1048576))
else:
    saved = (1 - total_after / total_before) * 100 if total_before else 0
    print('Processed %d files. %.1f MB -> %.1f MB (%.1f%% saved, %.1f MB freed).'
          % (n, total_before / 1048576, total_after / 1048576, saved,
             (total_before - total_after) / 1048576))
