# ASSET-MANIFEST.md — what to ship, in what order

The bridge from `ART-DIRECTION.md` (the doctrine) to actual production. Every asset the game
needs is listed here once: with a stable ID, a filename, a one‑line subject, a composition
hook from the doctrine, and a status. Folders already exist under `assets/`.

**Read before producing anything**: `ART-DIRECTION.md` (look) + `LANGUAGE.md` (voice the
picture has to sit beside). This manifest only answers *what / when / where / what to call
it.* It does not relitigate style.

---

## 1. How this works

- Each asset has a **stable ID** (e.g. `hero-01-medic`) and a **filename** (e.g.
  `assets/heroes/hero-01-medic.png`). The ID never changes once chosen; renaming breaks
  the in‑game `<img>` hooks.
- **Tiers** group by impact. Tier A is the highest‑leverage work (cover + opening — every
  player sees it). Tier G is the last polish. Do tiers in order.
- **Pilot trio** (§2) jumps the queue — three assets chosen to prove the style across the
  three registers (comic default · place silhouette · pathos still). Ship those first;
  if they don't feel like the same game, fix the style before producing tier B+.
- **Status** uses four flags: `planned` (in this doc only), `briefed` (prompt or commission
  written), `draft` (artwork delivered, not approved), `shipped` (in `assets/` + wired into
  `index.html`). Update inline.

---

## 2. Pilot trio — make these first

Three assets that together exercise the whole doctrine. If they feel like the same game,
the style is locked and we can scale. If any one feels off, we caught it before committing
to 40+ assets.

| ID | Subject | Register | Why this one |
|---|---|---|---|
| `pilot-01-hero-alani` | The Alani, leaning on his moped, kafeneío door behind, cigarette unlit | **Comic default** | Maximum character voice; instantly tests whether the gouache/woodcut combo carries a heightened hero without going cartoon. |
| `pilot-02-place-voidokilia` | The Voidokiliá crescent at mid‑afternoon, lagoon on the inland side, Pylos fort silhouette far right | **Place silhouette** | Most iconic landscape in the Peloponnese; locks the *not Santorini* move. Tests palette discipline (terra/olive/sea/bone, no whitewash). |
| `pilot-03-scene-hilux-dawn` | The Hilux, alone in the yard, at first light. One shape. Bone sky, terra dust, ink truck | **Pathos still** | The locked sentimental object. Tests whether the matte surface can carry a quiet beat without milking. *No figures.* |

If those three sit on a wall together and feel like the same game — proceed to Tier A.

---

## 3. Tier A — Cover & opening (3)

The frames every player sees on every new game.

| ID | File | Subject | Composition hook |
|---|---|---|---|
| `title-cover` | `assets/title/title-cover.png` | Full cover plate — *Outdoor Guide Life* in serif ink on bone; *or no Life* italic noon‑gold below, off‑axis. Beneath: the kicker line in Spline Sans Mono small caps | Bone field, terra horizon strip at the bottom (the Messinian rooftiles), ink type, one gold accent on *or no Life*. No illustration above — type carries it. |
| `title-wordmark` | `assets/title/title-wordmark.svg` | Wordmark alone, the same two‑line treatment, transparent background | For HUD use, header chrome, browser tab. SVG so it scales. |
| `scene-kitchen` | `assets/scenes/scene-kitchen.png` | The kitchen table, lemons‑on‑oilcloth, oven light, a wooden spoon. *Mum from behind* at the counter | The opening shot. Five hues at work — terra (lemons + oven glow), olive (Mum's housedress), sea (the open door at the back), bone (oilcloth + plates), ink (line). No accent yet — accent enters at hero pick. |

---

## 4. Tier B — Heroes (10)

The ten locked characters from `HEROES.md` / `ART-DIRECTION.md §6A`. Each portrait is a
**mid‑shot** (waist‑up) with the signature object in frame and the locked gesture caught.
**Portrait crop**, 5:4 vertical (e.g. 512 × 640).

| ID | File | Subject (signature object + gesture) |
|---|---|---|
| `hero-01-medic` | `assets/heroes/hero-01-medic.png` | The almost‑doctor ♂ — small green medic kit taped at the corner, thumb running along a strap, checking |
| `hero-02-chef` | `assets/heroes/hero-02-chef.png` | The Mykonos chef ♂ — foil parcel from the kitchen, sea‑bream tattoo on the forearm, passing food |
| `hero-03-soldier` | `assets/heroes/hero-03-soldier.png` | The army washout ♀ — windworn map, edges curled, reading the sky |
| `hero-04-sailor` | `assets/heroes/hero-04-sailor.png` | The deckhand ♀ — coiled bow line, calloused knuckles, hand on a kayak, eyeing the bay |
| `hero-05-influencer` | `assets/heroes/hero-05-influencer.png` | The influencer ♀ — phone on a small tripod, ring light folded, half a step ahead of the group |
| `hero-06-engineer` | `assets/heroes/hero-06-engineer.png` | The startup engineer ♂ — clipboard, multi‑tool on the belt, counting throughput |
| `hero-07-scholar` | `assets/heroes/hero-07-scholar.png` | The philologist ♀ — slim notebook in four scripts, mid‑sentence, group leaning in |
| `hero-08-fasaia` | `assets/heroes/hero-08-fasaia.png` | The Fasaia ♀ — hand‑woven scarf, beads, breath in, panigíri behind |
| `hero-09-alani` | `assets/heroes/hero-09-alani.png` | The Alani ♂ — leather wristband, cigarette unlit, leaning on the moped |
| `hero-10-villager` | `assets/heroes/hero-10-villager.png` | The Greek Villager ♂ — worn olive‑prune blade, cousin in frame, hand on a wall |

Reference frames live in `ART-DIRECTION.md §6A`. Gender is locked per hero — no swap.

---

## 5. Tier C — Disciplines (7 glyphs)

Diagrammatic, no‑text, woodcut‑clean. **SVG, 64×64 source, displayed at 32×32 typically.**
Drawn as if etched into a brass plate (ink on bone, with negative space inside the figure
where the contour reads it). Ship with `currentColor` for `stroke` and `fill` so they
recolour to the active palette token via CSS.

| ID | File | Subject |
|---|---|---|
| `glyph-discipline-hike` | `assets/disciplines/glyph-discipline-hike.svg` | A boot, profile, on a contour line |
| `glyph-discipline-seakayak` | `assets/disciplines/glyph-discipline-seakayak.svg` | A paddle blade, dripping, single drop |
| `glyph-discipline-canyon` | `assets/disciplines/glyph-discipline-canyon.svg` | A knotted rope, figure‑eight knot at centre |
| `glyph-discipline-raft` | `assets/disciplines/glyph-discipline-raft.svg` | An oar, water curl at the blade |
| `glyph-discipline-cycle` | `assets/disciplines/glyph-discipline-cycle.svg` | A pedal crank, side view |
| `glyph-discipline-sup` | `assets/disciplines/glyph-discipline-sup.svg` | A board edge, paddle T‑grip above |
| `glyph-discipline-climb` | `assets/disciplines/glyph-discipline-climb.svg` | A cam and a karabiner, hooked |

(Phase 3 reserves: `sail`, `snorkel`, `paraglide` — produce when those disciplines ship.)

---

## 6. Tier D — Weather (5 + 1 glyphs)

Iconographic, same SVG / `currentColor` treatment as disciplines. **64×64 source.** These
appear in the forecast strip; the *full sky* versions for trip headers come later as Tier F
backdrops.

| ID | File | Subject |
|---|---|---|
| `glyph-weather-clear` | `assets/weather/glyph-weather-clear.svg` | The `☼` rendered as a clean rayed disc, simplified |
| `glyph-weather-hot` | `assets/weather/glyph-weather-hot.svg` | A heavier sun, three short heat waves beneath |
| `glyph-weather-wind` | `assets/weather/glyph-weather-wind.svg` | Bent grass on a sloped horizon, a flag pulled |
| `glyph-weather-mist` | `assets/weather/glyph-weather-mist.svg` | A low ceiling on a ridge, three horizontal bands |
| `glyph-weather-storm` | `assets/weather/glyph-weather-storm.svg` | Bruise horizon, a single zigzag — restrained |
| `glyph-weather-unstable` | `assets/weather/glyph-weather-unstable.svg` | Half‑sun / half‑cloud composite — the *turn* marker, the new mechanic |

---

## 7. Tier E — Places (10 silhouettes)

One locked silhouette per major place. **Landscape crop**, 8:5 (e.g. 1024 × 640). These are
the route‑card headers and the menu transition frames; each place earns *one* composition
that recurs across menu / route card / trip header so the player learns the place by shape.

| ID | File | Place | Locked composition |
|---|---|---|---|
| `place-kalamata` | `assets/places/place-kalamata.png` | Kalamata harbour | Quay, the line of cafés, a single caïque, Taygetos shadow far inland |
| `place-polylimnio` | `assets/places/place-polylimnio.png` | Polylímnio waterfalls | The tiered pools from a mid‑slope angle, slick green stone, one figure for scale |
| `place-voidokilia` | `assets/places/place-voidokilia.png` | Voidokiliá + Gialova | The crescent dune from the Pylos fort side, lagoon on the inland edge, flamingoes far |
| `place-pylos-methoni` | `assets/places/place-pylos-methoni.png` | Pylos / Methóni / Koróni | Venetian castle silhouette at sea level, fishing port at the foot |
| `place-mavromati` | `assets/places/place-mavromati.png` | Ancient Messene + Mavromáti | Broken columns at low‑angle light, the spring at the village edge |
| `place-neda` | `assets/places/place-neda.png` | Neda gorge | Narrow stone ribs, a green pool below, a hairline figure on the rim |
| `place-lousios` | `assets/places/place-lousios.png` | Lousios / Menalon / monasteries | Forested gorge, monastery on a ledge, suspension bridge across |
| `place-taygetos` | `assets/places/place-taygetos.png` | Taygetos | Alpine ridge, snow into June, the Profítis Ilías cell at the summit |
| `place-mani` | `assets/places/place-mani.png` | Mani — Areopoli / Vathiá / Tainaron | Slate‑grey tower silhouettes, salt scrub, the long road south |
| `place-kardamyli` | `assets/places/place-kardamyli.png` | Kardamýli / Stoúpa | Plane trees, the stone harbour, mule path turning uphill |

---

## 8. Tier F — Set pieces & pathos (4)

The frames that carry the emotional beats. Larger frames (1280 × 800). These are slower to
produce; commit to them only after the pilot trio and Tier B–C land.

| ID | File | Subject | Register |
|---|---|---|---|
| `scene-hilux-dawn` | `assets/scenes/scene-hilux-dawn.png` | The Hilux, alone in the yard, at first light. One shape. No figures | Pathos (Mum's *"It runs"* beat — see `LANGUAGE.md §6`) |
| `scene-panigiri` | `assets/scenes/scene-panigiri.png` | The August village festival — strung lights, long table, band on a wooden stage, *the crowd is the protagonist* | Parody‑lifted (max comic density) |
| `scene-radio-crisis` | `assets/scenes/scene-radio-crisis.png` | Guide on the trail, holding the handset, weather closing in. Mid‑shot, single figure | Comic default — the Phase 2 management beat |
| `scene-first-hire` | `assets/scenes/scene-first-hire.png` | The protagonist + Maria, side by side, looking off at the next day. Kitchen door behind. *Mum's callback line lives here* | Pathos (phase transition — see `LANGUAGE.md §2` spot #1) |

---

## 9. Tier G — Chrome (3)

UI flat‑lays. Same matte gouache surface, but the *object* is the subject — no figures.

| ID | File | Subject |
|---|---|---|
| `chrome-logbook` | `assets/chrome/chrome-logbook.png` | A real linen‑bound notebook, slightly open, the day's entry handwritten |
| `chrome-certificate` | `assets/chrome/chrome-certificate.png` | A HATEOA / Paddle UK certificate, deadpan official, stamped |
| `chrome-loan-papers` | `assets/chrome/chrome-loan-papers.png` | Three side‑by‑side: bank form (stamp red), friend's note on torn paper, dark loan on bar‑receipt paper. The three financing sources made physical |

---

## 10. File specs (one table to rule them all)

| Tier | Asset type | Format | Source size | In‑game size | Background |
|---|---|---|---|---|---|
| A — Cover | Title cover | PNG (24‑bit) | 1280 × 800 | responsive | opaque bone |
| A — Cover | Wordmark | SVG | — | scales | transparent |
| A — Opening | Kitchen scene | PNG | 1280 × 800 | responsive | opaque |
| B — Heroes | Portrait | PNG | 512 × 640 | ~256 × 320 | bone, opaque |
| C — Disciplines | Glyph | SVG | 64 × 64 | 32 × 32 typical | transparent, `currentColor` |
| D — Weather | Glyph | SVG | 64 × 64 | 32 × 32 typical | transparent, `currentColor` |
| E — Places | Silhouette | PNG | 1024 × 640 | ~640 × 400 card | opaque |
| F — Scenes | Set piece | PNG | 1280 × 800 | responsive | opaque |
| G — Chrome | Flat lay | PNG | 800 × 600 | ~480 × 360 | bone, opaque |

**Naming**: `tier-slug.ext` where `tier` is `hero / place / glyph‑discipline / glyph‑weather
/ title / scene / chrome` and `slug` is the stable id from §3–9.

**Compression**: PNG at default; if file size becomes a concern (the page loads everything
on first paint right now), convert to WebP at 85% quality and keep PNG as source. The
`<img>` helper (to be added — see §12) will pick the right one.

---

## 11. Status legend

```
planned   — listed in this manifest, nothing produced
briefed   — generation prompt or commission brief written; awaiting artwork
draft     — artwork delivered, not yet approved against doctrine
shipped   — approved, file in assets/, wired into index.html, harness green
```

All assets are `planned` right now. The pilot trio (§2) is the first to move to `briefed`.

---

## 12. Open production questions

These need a decision before we move past the pilot trio.

1. **Production path** — AI‑generated (Midjourney / Sora / Nano Banana / Reve), commissioned
   illustrator, hand‑drawn by Fotis, or hybrid (e.g. AI for places, commissioned for heroes).
   *This decides whether the next doc is `PROMPT-PACK.md` (locked AI prompts per asset,
   with style‑reference image and palette hex) or `COMMISSION-BRIEF.md` (illustrator‑facing
   moodboard + per‑asset brief sheet).*
2. **Image loader in `index.html`** — add a small `imgFor(id)` helper that returns an
   `<img>` element (or graceful nothing) so we can wire assets into existing scenes without
   surgery later. Lift when the pilot trio ships, not before.
3. **Seasonal accent rotation** — `ART-DIRECTION.md §4` rotates the accent hue by season
   (oleander / noon gold / cypress / rain grey). Decide if `--accent` becomes a seasonal CSS
   variable (`document.documentElement.style.setProperty` at season change) or if each
   season ships its own asset variant. The first is cheaper; the second is richer.
4. **Asset host** — ship in‑repo (current GitHub Pages serves everything from `/assets/`)
   or move to a CDN once total weight crosses, say, 5MB.

---

## Cross‑references

- `ART-DIRECTION.md` — the look these assets must hit.
- `LANGUAGE.md` — the voice the assets sit beside.
- `HEROES.md` — the canonical hero data; gender, perk, model.
- `INTRO-KITCHEN.md` — the opening scene script; `scene-kitchen` and the per‑hero reveals.
- `index.html` — the live game; the asset loader and `<img>` wiring will land here.
