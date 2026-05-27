"""
optimize-assets.py — one-off asset weight pass.

For each PNG under assets/<tier>/, resize to a sensible 2x retina max width
for the slot it lands in, then save as WebP (quality 88) and delete the
PNG. The .gitkeep files and the assets/pilot-*.png originals at root are
left alone.

Caller is expected to update the ASSETS map in index.html afterwards to
point at .webp paths (the loader treats the path as opaque).

Usage:  python scripts/optimize-assets.py
"""
from PIL import Image
from pathlib import Path

# 2x the in-game display max-width per .art-* class in index.html.
# Display width is the .art-* CSS max-width; doubled for retina.
TIER_MAX_WIDTH = {
    'disciplines':  96,   # display 36px → 72 retina → 96 generous
    'weather':      96,   # display 22px → 44 retina → 96 generous
    'heroes':       720,  # display 280px max → 560 retina → 720 generous
    'chrome':      1200,  # display 480px max → 960 retina
    'places':      1600,  # display 560px max → 1120 retina → keep native ~1586
    'scenes':      1600,  # display 720px max → 1440 retina → keep native ~1586
    'title':       1600,  # cover image
}

WEBP_QUALITY = 88

assets = Path('assets')
rows = []
total_before = 0
total_after = 0

for png in sorted(assets.rglob('*.png')):
    rel = png.relative_to(assets)
    parts = rel.parts
    # pilot originals at root (assets/pilot-*.png) — leave them as PNG
    if len(parts) == 1:
        continue
    tier = parts[0]
    if tier not in TIER_MAX_WIDTH:
        continue

    size_before = png.stat().st_size
    img = Image.open(png).convert('RGB')
    orig_w, orig_h = img.size

    max_w = TIER_MAX_WIDTH[tier]
    if img.width > max_w:
        new_h = round(img.height * max_w / img.width)
        img = img.resize((max_w, new_h), Image.LANCZOS)

    webp_path = png.with_suffix('.webp')
    img.save(webp_path, 'WEBP', quality=WEBP_QUALITY, method=6)
    size_after = webp_path.stat().st_size

    png.unlink()  # delete original PNG

    rows.append((str(rel), orig_w, orig_h, img.width, img.height, size_before, size_after))
    total_before += size_before
    total_after += size_after

# Report
print(f'{"file":50s} {"orig":>11s}   {"new":>10s}   {"saved":>8s}')
print('-' * 88)
for r in rows:
    rel, ow, oh, nw, nh, sb, sa = r
    saved = (1 - sa / sb) * 100
    print(f'{rel:50s} {ow:4d}x{oh:<4d}  {nw:4d}x{nh:<4d}  '
          f'{sb//1024:4d}KB  {sa//1024:4d}KB  {saved:5.1f}%')

print('-' * 88)
print(f'\nTotal: {total_before/1024/1024:.1f} MB  ->  {total_after/1024/1024:.1f} MB'
      f'   ({(1 - total_after/total_before)*100:.1f}% saved, '
      f'{(total_before - total_after)/1024/1024:.1f} MB freed)')
