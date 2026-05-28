# ASSET-MANIFEST.md — what to ship, in what order

The bridge from `ART-DIRECTION.md` (the doctrine) to actual production. Every asset the game
needs is listed here once: with a stable ID, a filename, a one‑line subject, a composition
hook from the doctrine, and a status. Folders already exist under `assets/`.

**Read before producing anything**: `ART-DIRECTION.md` (look) + `LANGUAGE.md` (voice the
picture has to sit beside). This manifest only answers *what / when / where / what to call
it.* It does not relitigate style.

---

## 0. Status of the world (2026-05-28)

**43 assets shipped** under the earlier *"editorial gouache + woodcut bones"* direction.
They live in‑game and work. Folders + filenames are stable.

**The doctrine evolved** on 2026-05-28 in two passes:
1. **Desk metaphor + speech‑bubble flow** (what we draw + how scenes are used) — see
   `ART-DIRECTION.md §1-3, §12`.
2. **Style register reset** from the earlier "editorial gouache + woodcut bones" to
   **"ink‑and‑watercolor travel"** (Moleskine‑sketchbook / Mediterranean travel‑guidebook
   energy — wet translucent washes, loose hand‑drawn ink, paper‑white showing through).
   See `ART-DIRECTION.md §4` and `PROMPT-PACK.md §3`.

The 43 shipped assets (heroes, places, scenes, chrome, glyphs, title cover) were
generated under the earlier gouache + woodcut register. They remain in‑game and work
visually for now. A **re‑generation pass** against the new ink‑and‑watercolor register
is queued; the new First Booking would be the first job, becoming the new canonical
reference image. The current `title-cover.webp` is the worked example of the *previous*
register.

**The remaining production** (Phases ↓) covers the surfaces the doctrine added that
weren't shipped yet — Phase 2/3/4 desks, the backpack screen variants, client cards, and
day‑report surfaces. The original tiers (heroes, places, glyphs, scenes, chrome, title)
are complete.

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
| `title-cover` | `assets/title/title-cover.png` | Full cover plate — *A Guide's Life* in serif ink on bone; *or no Life* italic noon‑gold below, off‑axis. Beneath: the kicker line in Spline Sans Mono small caps | Bone field, terra horizon strip at the bottom (the Messinian rooftiles), ink type, one gold accent on *or no Life*. No illustration above — type carries it. |
| `title-wordmark` | `assets/title/title-wordmark.svg` | Wordmark alone, the same two‑line treatment, transparent background | For HUD use, header chrome, browser tab. SVG so it scales. |
| `scene-kitchen` | `assets/scenes/scene-kitchen.png` | The kitchen table, lemons‑on‑oilcloth, oven light, a wooden spoon. *Mum from behind* at the counter | The opening shot. Five hues at work — terra (lemons + oven glow), olive (Mum's housedress), sea (the open door at the back), bone (oilcloth + plates), ink (line). No accent yet — accent enters at hero pick. |

---

## 4. Tier B — Heroes (10)

The ten locked characters from `HEROES.md` / `ART-DIRECTION.md §6A`. Each portrait is a
**mid‑shot** (waist‑up) with the signature object in frame and the locked gesture caught.
**Wide landscape composition**, about 20:9 (e.g. 1920 × 864), with the figure in the LEFT third and the rest of the canvas given to their natural Messinian context. The right portion leaves breathing room for the game UI to overlay. Keep critical content (figure, key compositional elements) within the central **16:9 safe zone** so they survive when shown on narrower viewports.

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

The frames that carry the emotional beats. Wide landscape frames (1920 × 864, 20:9; safe zone 16:9). These are slower to
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

## 10. File specs (current — post‑optimisation)

After the weight pass (`scripts/optimize-assets.py`, 2026-05-28) every illustrated asset
is **WebP at quality 88**, resized to 2× retina max for its slot. The title wordmark stays
SVG. Total `assets/` is **~22 MB** (down from ~115 MB, a 93 MB save).

| Tier | Asset type | Format | Resized to | Display size | Notes |
|---|---|---|---|---|---|
| A — Cover | Title cover | WebP | 1586 × 992 (native) | responsive, max 560px | opaque bone |
| A — Cover | Wordmark | SVG | — | scales | not used live (HTML text overlay instead) |
| A — Opening | Kitchen scene | WebP | 1586 × 992 (native) | responsive, max 720px | opaque |
| B — Heroes | Wide landscape composition | WebP | 1920 × 864 (20:9; safe zone 16:9) | full-bleed scene-full | figure-left, context-right; current 720×1082 portrait shipped under old spec |
| C — Disciplines | Glyph | WebP | 96 × 96 | 36px display | opaque, was wildly oversized at 1254×1254 |
| D — Weather | Glyph | WebP | 96 × 96 | 22px display | opaque, same story |
| E — Places | Silhouette | WebP | ~1586 × ~1005 (native) | max 560px | opaque |
| F — Scenes | Set piece | WebP | ~1586 × ~992 (native) | max 720px | opaque |
| G — Chrome | Flat lay | WebP | 1200 × 900 | max 480px | opaque |

**Naming**: `tier-slug.webp` where `tier` is `hero / place / glyph‑discipline / glyph‑weather
/ title / scene / chrome` and `slug` is the stable id from §3–9.

**Pilot originals at `assets/pilot-0[1-3]-*.png`** are kept as PNG for reference / future
re-generation comparisons (~10 MB; not loaded by the game).

---

## 10½. New surfaces from the doctrine evolution (the next production tier)

The doctrine evolution of 2026-05-28 added four new asset surfaces. Existing wire‑ups in
`index.html` will pick these up automatically once they're in `assets/` and added to the
`ASSETS` map. Render every one against *The First Booking* as the locked reference.

### Tier H — Phase 2/3/4 desks (3)
The desk *changes* across phases. Phase 1 is shipped (= title‑cover, the first booking).
Phase 2/3/4 are new.

| ID | File | Subject |
|---|---|---|
| `desk-phase2-working` | `assets/desk/desk-phase2-working.webp` | The working desk — staff cards laid out (Maria, Nikos), a small route board pinned with the day's assignments, two handheld guide radios on chargers, a gear‑checklist clipboard, a folder of repair bills, a cash ledger open. Same kitchen→office register; harbour still in the window, but the table is busier now |
| `desk-phase3-office` | `assets/desk/desk-phase3-office.webp` | The company desk — a laptop with a booking platform on screen, printed Google reviews stacked, package brochures, hotel partner notes, a branded company stamp, a wall calendar with marked days, signed contracts in a tray. Same window onto Messinia; the table has grown into an office |
| `desk-phase4-regional` | `assets/desk/desk-phase4-regional.webp` | The regional board — a wall map of the Peloponnese with pins for each base, base folders stacked (Kalamata, Mani, Arcadia), manager portraits in frames, a crisis‑notes board, legal/financial document piles, brand materials, expansion plans rolled up. The desk has become a war room. Window now shows a higher view — town below |

### Tier I — Backpack screen (3)
The packing screen is *physical*. Pack changes with phase.

| ID | File | Subject |
|---|---|---|
| `backpack-phase1` | `assets/backpack/backpack-phase1.webp` | A small worn outdoor backpack, ~40L, dust on the strap, 4 packing slots visible. Solo guide, can carry the bare essentials. Photographic table corner under it |
| `backpack-phase2-depot` | `assets/backpack/backpack-phase2-depot.webp` | The depot view — a wall of gear: rope coils, helmets on pegs, water bottles in a crate, life‑jackets stacked, a row of named gear bins, a clipboard tally on a chain. The supply line behind the team |
| `backpack-phase3-cache` | `assets/backpack/backpack-phase3-cache.webp` | The organised company cache — labelled containers by discipline, branded buffs in folded stacks, a small workshop bench, a wall of named gear bins with guide initials on each, fluorescent strip lighting overhead |

### Tier J — Client people cards (9)
Clients have been noun‑phrases in prose since day one (`LANGUAGE §3 People in the prose`).
Now they're people cards on the desk. Reuse the noun phrases verbatim; the picture turns
them into recognisable individuals.

| ID | File | Subject |
|---|---|---|
| `client-family` | `assets/clients/client-family.webp` | *A family with two young children* — one parent's pack overstuffed, child on shoulders, sun hats |
| `client-cruise` | `assets/clients/client-cruise.webp` | *A coachload of cruise tourists* — line snaking from a bus, identical lanyards, water bottles still capped |
| `client-photographers` | `assets/clients/client-photographers.webp` | *Three photographers chasing the light* — tripods, telephoto lenses, no patience |
| `client-corporate` | `assets/clients/client-corporate.webp` | *A corporate team‑lead with a schedule* — branded fleece, phone in hand, slightly impatient |
| `client-k2` | `assets/clients/client-k2.webp` | *The over‑equipped K2 client* — full alpine kit in the olive grove, four trekking poles, an altimeter watch |
| `client-german-goat` | `assets/clients/client-german-goat.webp` | *A German couple weeping, gently, at a goat* — earnest tears, a phone filming, the goat unimpressed |
| `client-bouzouki` | `assets/clients/client-bouzouki.webp` | *The bouzouki busker whose instrument eats a pack slot* — case visible on his back, smaller pack as a result |
| `client-kyria-voula` | `assets/clients/client-kyria-voula.webp` | *Kyría Voúla* — small woman, blood‑pressure diary in her bag, magnificent dignity, a cane |
| `client-cousin-mitsos` | `assets/clients/client-cousin-mitsos.webp` | *Cousin Mitsos in the yard with the spanner* — overalls, oil on his hands, knows where the part is |

### Tier K — Day report surfaces (4)
The day report is *concrete*: receipt + notebook + review + ledger. Backgrounds + tokens
the renderer composes against.

| ID | File | Subject |
|---|---|---|
| `report-blank` | `assets/reports/report-blank.webp` | A ledger page with faint horizontal rules, a pencil resting at the margin, a wax‑sealed corner. The canvas the day's verdict types onto |
| `report-review-good` | `assets/reports/report-review-good.webp` | A small Google/TripAdvisor‑style review card with five‑star marks, a one‑line "The family left glowing" headline, deadpan official trim |
| `report-review-bad` | `assets/reports/report-review-bad.webp` | The bad‑review variant — three stars, slight ink smudge, a thumb mark in the corner |
| `report-gear-damage` | `assets/reports/report-gear-damage.webp` | A small gear‑damage notation page — pencil sketch of a snapped pole, a wear‑score margin, the inventory's "needs replacement" stamp |

---

## 11. Status legend

```
planned   — listed in this manifest, nothing produced
briefed   — generation prompt or commission brief written; awaiting artwork
draft     — artwork delivered, not yet approved against doctrine
shipped   — approved, file in assets/, wired into index.html, harness green
```

**All 43 assets are `shipped`** as of 2026-05-28 — produced via ChatGPT (GPT‑Image) using
the ChatGPT‑specific prompts in `PROMPT-PACK.md`; the title wordmark was produced in a
vector tool as recommended. Files live in `assets/<tier>/`; the `ASSETS` map in
`index.html` (around line 470) maps every id to its path. Harness clean (0 exceptions
over 100 runs).

**Live wire‑up surface** in `index.html` after this batch:
- Title screen — cover + wordmark in `renderTitle`
- Kitchen opening — `scene-kitchen` in `renderKitchen`
- Hero portraits — auto‑resolved by `HERO_ASSET[b.id]` in `renderKitchenReveal`
- Discipline picker — `glyph-discipline-{id}` in `renderSetup` discChips
- Loan source picker — `chrome-loan-papers` in `renderSetup` loan section
- Panigíri opening — `scene-panigiri` in `renderSetup`
- Trailhead — place silhouettes auto‑resolved by `placeAssetFor(b.route)` in `startTrailhead`
- Forecast strip — weather glyphs in `weatherChip` (per `WEATHER_GLYPH` map, plus the
  dedicated `unstable` glyph when `stability < 50`)
- Logbook — `chrome-logbook` in `renderLog`
- Hilux purchase — `scene-hilux-dawn` in `renderVehicleScene` for `id==='pickup'` only
- Hire trigger — `scene-first-hire` in `renderHireScene`
- Radio crisis (Phase 2) — `scene-radio-crisis` in `runGuideTrip` radio branch
- Cert school (winter office) — `chrome-certificate` in `renderOffSeason`

---

## 12. Open production questions

1. ~~**Production path**~~ — **RESOLVED: AI‑generated.** See `PROMPT-PACK.md` for the locked
   style anchor, palette hex, per‑tier composition rules, negative prompt, the pilot trio's
   full ready‑to‑paste prompts, per‑tier templates for the rest, consistency tactics, and
   engine notes.
2. ~~**Image loader in `index.html`**~~ — **RESOLVED: shipped.** `ASSETS` map + `imgFor(id,
   opts)` helper live in `index.html`; `HERO_ASSET` maps background id → hero asset id;
   `placeAssetFor(routeName)` maps route → place silhouette by regex. Three pilot slots are
   wired live (hero portrait in `renderKitchenReveal`, place silhouette in `startTrailhead`,
   the Hilux pathos still in `renderVehicleScene`). As each asset ships, add `id → path` to
   `ASSETS`; nothing else changes.
3. **Seasonal accent rotation** — `ART-DIRECTION.md §4` rotates the accent hue by season
   (oleander / noon gold / cypress / rain grey). With assets shipped at the standard noon
   accent for most cards, the CSS‑variable approach (`document.documentElement.style.
   setProperty('--accent', …)` at season change) is now the cheaper next step — would tint
   chrome and instrument labels seasonally without re‑shipping art variants. **Open.**
4. ~~**Asset weight / CDN**~~ — **RESOLVED 2026-05-28**: weight pass via
   `scripts/optimize-assets.py` (Pillow). Resized each asset per‑tier to 2× retina max +
   converted to WebP at quality 88. **Total `assets/` 115 MB → 22 MB (93 MB saved,
   88.3% reduction).** Biggest wins: glyphs went from ~1 MB each at 1254×1254 to ~1 KB at
   96×96 (display is 22-36px, the originals were ~1300× oversized); heroes from ~3.3 MB
   at 1023×1537 to ~300 KB at 720×1082. The pilot originals at root stay PNG for archival.
   CDN no longer needed at this size — GitHub Pages serves it cleanly.

---

## Cross‑references

- `ART-DIRECTION.md` — the look these assets must hit.
- `LANGUAGE.md` — the voice the assets sit beside.
- `HEROES.md` — the canonical hero data; gender, perk, model.
- `INTRO-KITCHEN.md` — the opening scene script; `scene-kitchen` and the per‑hero reveals.
- `index.html` — the live game; the asset loader and `<img>` wiring will land here.
