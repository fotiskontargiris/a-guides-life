# assets/ — illustration & glyph home

All shipped art lives here. Read `ART-DIRECTION.md` (root) before producing anything;
read `ASSET-MANIFEST.md` (root) for the prioritised list, filenames, and per-asset specs.

## Folder map

| Folder | What | Format | Naming |
|---|---|---|---|
| `heroes/` | The ten hero portraits | PNG | `hero-NN-slug.png` (e.g. `hero-01-medic.png`) |
| `places/` | Route silhouettes (the ~10 named locations) | PNG | `place-slug.png` (e.g. `place-voidokilia.png`) |
| `disciplines/` | The seven discipline glyphs | SVG | `glyph-discipline-slug.svg` |
| `weather/` | The five weather states plus the unstable marker | SVG | `glyph-weather-slug.svg` |
| `title/` | Cover plate, wordmark, kicker treatment | PNG + SVG | `title-cover.png`, `title-wordmark.svg` |
| `scenes/` | Set‑piece illustrations (kitchen, Hilux dawn, panigíri) | PNG | `scene-slug.png` |
| `chrome/` | UI flat‑lays (logbook, certificate, loan paperwork) | PNG | `chrome-slug.png` |

## Format rules

- **SVG** for glyphs — vector, recolourable via CSS, scales clean from 16px to 64px.
- **PNG** for everything illustrated — the matte gouache surface does not vector well. 24‑bit
  PNG with a transparent background where the asset is figure‑on‑page, opaque rectangle where
  the asset is a full scene.
- Source files (Procreate, Affinity, Photoshop, Figma) live elsewhere — only export ships here.

## Status

Empty for now. Asset production has not started; folders exist so the manifest filenames are
real paths. See `ASSET-MANIFEST.md` for the order to make things in and which three pilot
assets prove the style.
