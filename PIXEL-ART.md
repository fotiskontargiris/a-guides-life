# PIXEL-ART.md — Art Direction & Asset Brief for *Messinia Guide*

A spec for creating consistent pixel-art graphics for the game. Place alongside `index.html` and `CLAUDE.md`. Goal: a cohesive set of crisp, readable pixel sprites that match the game's existing "Aegean/Mediterranean dusk field-journal" look and can be dropped into the HTML incrementally.

---

## 1. Art direction

- **Vibe:** warm Mediterranean dusk — sun-baked stone, olive hills, deep teal sea, terracotta light. Calm, handcrafted, "field journal," not neon/arcade.
- **Style:** clean limited-palette pixel art. Chunky but legible. Strong silhouettes that read at small sizes. Flat shading with **dithering** instead of gradients.
- **Light source:** top-left, consistent across every asset. Highlights top-left, shadows bottom-right.
- **Outlines:** selective dark outline (use the darkest teal `#061a1f`) on the outer silhouette; interior detail can be outline-less. No pure-black (#000) — it clashes with the warm palette.
- **No anti-aliasing.** Pixels stay on the grid. Display scaled by integer factors only (2×, 3×, 4×) with `image-rendering: pixelated`.
- **Mood discipline:** muted, slightly desaturated. Reserve the brightest gold/terracotta for emphasis (rewards, highlights), and red only for danger/alerts.

---

## 2. Palette (locked — matches the game's CSS variables)

Use **only** these. Each hue has dark / mid / light steps for shading. Hexes are drawn from the game's `:root` theme so sprites sit naturally on the UI.

| Role | Dark | Mid (base) | Light |
|---|---|---|---|
| Background teal | `#061a1f` | `#0c252b` | `#143a40` |
| Panel teal | `#0a2026` | `#12343a` | `#1c4a52` |
| Sand / ink (text, paper, light surfaces) | `#b9a87f` | `#ecdcc0` | `#f7eed8` |
| Terracotta (accent, clay, warm wood) | `#a4502f` | `#d2754a` | `#e88a5c` |
| Gold (sun, reward, brass, highlights) | `#b98a36` | `#e3b863` | `#f3d68a` |
| Sea / sky teal (water, cool accents) | `#3f7e7e` | `#6fb0ad` | `#9fd0cd` |
| Olive / sage (foliage, vegetation) | `#6f7d49` | `#aebd7e` | `#c8d39a` |
| Stone grey-teal (rock, paths) | `#5a6b6a` | `#8a9a98` | `#b4c0bd` |
| Danger red (alerts, blood, storms) | `#9c3a2c` | `#e0664c` | `#f08a72` |

That's ~27 colours; a real working set of **16 mid+dark tones** is plenty for any single sprite. Don't introduce new hues — recolour within this ramp.

---

## 3. Technical conventions

- **Format:** PNG, transparent background (except full scenes). RGBA, no premultiplied edges.
- **Grid:** design at native pixel resolution; never scale up *inside* the source.
- **Base sizes** (native px):
  - Tiny stat/UI icons: **16×16**
  - Item / gear / weather / client icons: **24×24** (or 32×32 for more detail)
  - Certification badges: **32×32**
  - Character portraits (player & guides): **48×48**
  - Route banner illustrations: **320×96** (wide header strip)
  - Title / landscape scene: **640×240** (or any 8:3 ratio)
- **Naming:** `category_name_WxH.png`, lowercase, underscores. Examples: `weather_storm_24.png`, `item_firstaid_24.png`, `route_taygetos_320x96.png`, `cert_mountain_32.png`, `icon_cash_16.png`, `portrait_guide_a_48.png`.
- **Folder:** `/assets/weather/`, `/assets/items/`, `/assets/routes/`, `/assets/certs/`, `/assets/ui/`, `/assets/portraits/`, `/assets/scenes/`.
- **Delivery for the single-file artifact:** the game is one self-contained HTML file, so final sprites should be **base64-inlined** (data URIs) or packed into one **sprite sheet** referenced by CSS `background-position`. Keep individual icons tiny (well under a few KB). During Claude Code dev you can keep loose PNGs in `/assets` and inline them as a build step.

---

## 4. Asset list (what the game needs)

Mapped to where each appears in `index.html`.

### Weather — 24×24 (replaces the coloured dots in the forecast card / `weatherChip`)
1. `weather_clear` — bright sun, gold rays on teal.
2. `weather_hot` — large sun + heat shimmer, terracotta tint.
3. `weather_windy` — cloud with wind streak lines (sea tone).
4. `weather_drizzle` — grey-teal cloud, a few light rain dashes.
5. `weather_storm` — dark cloud + danger-red lightning bolt.

### Gear / items — 24×24 (small icon before each name in the shop, packing, depot)
`item_water`, `item_firstaid` (red cross on sand box), `item_snacks`, `item_sunscreen`, `item_repellent`, `item_poles` (crossed trekking poles), `item_map` (folded map + compass), `item_shell` (rain jacket), `item_lamp` (headlamp).

### Routes — 320×96 banner (header at the top of packing / trip screens)
1. `route_polylimnio` — turquoise waterfall pools, green gorge.
2. `route_voidokilia` — the famous Ω-shaped beach + dunes.
3. `route_messene` — ancient stone ruins on golden hills.
4. `route_neda` — narrow river canyon, falls.
5. `route_menalon` — forested Lousios gorge, monastery on a cliff.
6. `route_taygetos` — high grey peak, snow-streaked, big sky.

### Certifications — 32×32 badge/medal (the HATEOA courses)
`cert_basic`, `cert_firstaid` (cross), `cert_gorge` (water/canyon motif), `cert_mountain` (peak + rope). Brass/gold rim, ribbon optional.

### Clients — 16×16 (next to bookings)
`client_family`, `client_tourist` (camera/sunhat), `client_thrill` (helmet/rope), `client_corporate` (briefcase/lanyard).

### Portraits — 48×48 (player + guides; make ~6 varied so guides differ)
`portrait_player`, `portrait_guide_a`…`portrait_guide_f`. Bust shots: sunhat, buff, beanie, sunglasses, varied skin/hair within palette. Friendly, weathered, outdoorsy.

### UI / stats — 16×16
`icon_cash` (euro coin, gold), `icon_rep` (laurel or star), `icon_energy` (boot or spark), `icon_gear` (gear-cog or carabiner), `icon_pack` (backpack), `icon_day` (sun-over-horizon), `icon_tip` (small coins), `star_full` / `star_empty` (review stars, gold/`#b9a87f`), `icon_menu`.

### Phase 3 (future) activity-type icons — 24×24
`type_ground` (boot), `type_water` (paddle/wave), `type_air` (paraglider). Plus water/air gear (kayak, paddle, life vest, wing) when Phase 3 lands.

### Scenes — wide
`scene_title` (640×240 Messinian landscape: Taygetos behind a curve of coast at dusk) for the title screen; optional `scene_dusk`/`scene_dawn` strips for headers.

---

## 5. Consistency checklist (apply to every sprite)

- [ ] Only palette colours from §2.
- [ ] Top-left light source; bottom-right shadow.
- [ ] Reads clearly as a 1× thumbnail (squint test).
- [ ] Selective dark-teal outline on the silhouette; no pure black.
- [ ] Dithering, not gradients, for shading.
- [ ] Transparent background (icons/sprites).
- [ ] Sits on `#0c252b`/`#12343a` panels without vibrating (check contrast).

---

## 6. Integrating into the game

The game currently uses text + coloured chips + a contour-SVG backdrop. Add art progressively — nothing breaks if a sprite is missing.

- **Weather:** in `weatherChip(w,...)`, swap the coloured `<div>` dot for an `<img>`/CSS sprite keyed off `w.short` (or add `w.icon`). Keep `w.col` as a tint/fallback.
- **Items:** prepend a 24×24 icon to each name in `openShop`, `renderPacking`, `openDepot` (a `ITEM_ICON[id]` map).
- **Routes:** render the 320×96 banner at the top of the packing/trip screens using `b.route` → image map.
- **Certs / clients / portraits:** icon maps keyed by id (`cert.id`, `client.type`, guide index).
- **Add `image-rendering: pixelated;`** to any `<img>`/element showing a sprite, and size with integer multiples.
- Keep everything **inlined** (data URIs) or one sprite sheet to preserve the single-file artifact. Mention to the user if a sheet is used.

---

## 7. Generating the art (AI image tools / Claude)

True grid-perfect pixel art usually needs hand-cleanup (e.g. in Aseprite) or a pixel-art-tuned model; AI output often needs downscaling to the native size and palette-quantising to §2. Workflow: generate at small size → nearest-neighbour downscale to native → snap colours to the locked palette → tidy stray pixels.

**Reusable style preamble** (prepend to every prompt):

> Pixel art, [WxH] native resolution, limited palette of warm Mediterranean dusk colours (deep teal, sand cream, terracotta, gold, sea-teal, olive), top-left light source, selective dark-teal outline, dithered shading, no anti-aliasing, transparent background, crisp clean pixels, flat retro style.

**Per-asset examples:**
- *weather_storm (24×24):* "…a dark storm cloud with a bright danger-red lightning bolt, small and iconic, centered."
- *item_firstaid (24×24):* "…a sand-cream first-aid kit box with a red cross, simple and bold."
- *route_taygetos (320×96):* "…a wide landscape banner of a high grey-teal rocky mountain peak with snow streaks under a dusk gold-and-teal sky, layered hills, no text."
- *portrait_guide_a (48×48):* "…a friendly weathered outdoor mountain guide bust portrait, sunhat and buff, warm skin tones within the palette, facing slightly left."
- *cert_mountain (32×32):* "…a brass-gold circular badge showing a mountain peak and a coil of rope, small ribbon below."

Generate one category at a time so the set stays consistent; reuse the exact preamble each time.

---

## 8. Suggested first batch (highest impact, smallest effort)

1. The **5 weather icons** (24×24) — they replace dots already on screen, instant visual lift.
2. The **9 item icons** (24×24) — appear all over the shop/packing/depot.
3. The **review star** pair (16×16).
4. The **6 route banners** (320×96) — biggest "wow" per screen.

Do those four and the game already feels illustrated. Portraits, certs, clients, and the title scene follow.
