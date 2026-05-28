# assets/ — illustration & glyph home

All shipped art lives here. Read `ART-DIRECTION.md` (root) before producing anything;
read `ASSET-MANIFEST.md` (root) for the prioritised list, filenames, and per-asset specs.

The folder structure mirrors the **five locked UI surfaces** from `ART-DIRECTION.md`
(desk · route card · backpack · people card · day report), plus glyph subfolders and
standalone scene illustrations that don't sit on a single surface.

## Folder map

| Folder | UI surface | What | Format | Naming |
|---|---|---|---|---|
| `desk/` | **Desk screen** | Per-phase desk views — the changing table. Phase 1 first-booking, Phase 2 working desk, Phase 3 company office, Phase 4 regional board | WebP | `desk-phase{1-4}-{slug}.webp` |
| `places/` | **Route card** background | Route silhouettes — the ~10 named Messinian/Peloponnese places that anchor each route card | WebP | `place-{slug}.webp` |
| `backpack/` | **Backpack screen** | Backpack illustrations per phase (small Phase 1, fuller Phase 2 depot, organised Phase 3 cache) | WebP | `backpack-{phase|slug}.webp` |
| `heroes/` | **People card** (player heroes) | The ten fixed player-character portraits | WebP | `hero-NN-{slug}.webp` |
| `clients/` | **People card** (clients) | Client noun-phrase illustrations (family, cruise coach, photographers, K2 tourist, bouzouki busker, etc.) | WebP | `client-{slug}.webp` |
| `reports/` | **Day report** | Day-report backgrounds and surfaces — receipts, review cards, ledger pages | WebP | `report-{slug}.webp` |
| `scenes/` | special set pieces | Moments that aren't bound to one surface — kitchen (the *pre-desk* opening), Hilux dawn (pathos), panigíri (parody-lift), first-hire (transition), radio-crisis (Phase 2 beat) | WebP | `scene-{slug}.webp` |
| `chrome/` | UI flat-lays | Single-object flat-lays placed inside other screens — logbook, certificate, loan papers | WebP | `chrome-{slug}.webp` |
| `disciplines/` | glyph chrome | The seven discipline icons (woodcut-style) | WebP | `glyph-discipline-{slug}.webp` |
| `weather/` | glyph chrome | The six weather state icons | WebP | `glyph-weather-{slug}.webp` |
| `title/` | cover / wordmark | Title screen cover image + wordmark | WebP + SVG | `title-cover.webp`, `title-wordmark.svg` |

## Format rules

- **WebP at quality 88** for every illustrated asset. The 2026-05-28 weight pass converted
  the entire PNG ship (115 MB) to WebP and resized per-tier to 2× retina max. New assets
  should follow the same convention — see `scripts/optimize-assets.py`.
- **SVG** for the wordmark only. Not used live (HTML text overlay renders cleaner) but
  kept as the canonical typographic source.
- Source files (Procreate, Affinity, Photoshop, Figma, ChatGPT exports) live elsewhere —
  only the optimised export ships here.

## Status

The original 43 shipped assets (heroes, places, disciplines, weather, scenes, chrome,
title) landed 2026-05-28 under the earlier "editorial gouache + woodcut bones" direction.
They work in-game. New assets follow `ART-DIRECTION.md`'s current **"changing guide's
desk + stylized illustrated realism"** doctrine. The `assets/pilot-0[1-3]-*.png` originals
at root are archival reference for the earlier batch.
