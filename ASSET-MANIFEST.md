# ASSET-MANIFEST.md — what to ship, in what order

The bridge from `ART-DIRECTION.md` (the doctrine) to actual production. Every asset the game
needs is listed here once: with a stable ID, a filename, a one‑line subject, a composition
hook from the doctrine, and a status. Folders already exist under `assets/`.

**Read before producing anything**: `ART-DIRECTION.md` (look) + `LANGUAGE.md` (voice the
picture has to sit beside). This manifest only answers *what / when / where / what to call
it.* It does not relitigate style.

---

## 0. Status

Doctrine: **ink-and-watercolor travel** (`ART-DIRECTION.md §4`). Every asset is **20:9
with a 16:9 safe zone**. Home base is the **diegetic desk hub** (`DESK-HUB.md`). This
manifest lists every asset to produce, by tier.

The currently-shipped assets predate the ink-and-watercolor style and stand in as
placeholders; a regeneration pass is queued, starting with the Phase 1 bedroom hub base.

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
| `pilot-01-hero-alani` | The Alani, leaning on his moped, kafeneío door behind, cigarette unlit | **Comic default** | Maximum character voice; instantly tests whether the ink-and-watercolor register carries a heightened hero without going cartoon. |
| `pilot-02-place-voidokilia` | The Voidokiliá crescent at mid‑afternoon, lagoon on the inland side, Pylos fort silhouette far right | **Place silhouette** | Most iconic landscape in the Peloponnese; locks the *not Santorini* move. Tests palette discipline (terra/olive/sea/bone, no whitewash). |
| `pilot-03-scene-hilux-dawn` | The Hilux, alone in the yard, at first light. One shape. Bone sky, terra dust, ink truck | **Pathos still** | The locked sentimental object. Tests whether the wet-wash surface can carry a quiet beat without milking. *No figures.* |

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

Diagrammatic, no-text, loose ink line. **WebP, ~96×96 source, displayed at 22–36px.**
The figure reads through negative space on bone paper. Ship as transparent-background WebP.

| ID | File | Subject |
|---|---|---|
| `glyph-discipline-hike` | `assets/disciplines/glyph-discipline-hike.webp` | A boot, profile, on a contour line |
| `glyph-discipline-seakayak` | `assets/disciplines/glyph-discipline-seakayak.webp` | A paddle blade, dripping, single drop |
| `glyph-discipline-canyon` | `assets/disciplines/glyph-discipline-canyon.webp` | A knotted rope, figure‑eight knot at centre |
| `glyph-discipline-raft` | `assets/disciplines/glyph-discipline-raft.webp` | An oar, water curl at the blade |
| `glyph-discipline-cycle` | `assets/disciplines/glyph-discipline-cycle.webp` | A pedal crank, side view |
| `glyph-discipline-sup` | `assets/disciplines/glyph-discipline-sup.webp` | A board edge, paddle T‑grip above |
| `glyph-discipline-climb` | `assets/disciplines/glyph-discipline-climb.webp` | A cam and a karabiner, hooked |

(Phase 3 reserves: `sail`, `snorkel`, `paraglide` — produce when those disciplines ship.)

---

## 6. Tier D — Weather (5 + 1 glyphs)

Iconographic, same loose ink-line treatment as disciplines. **~96×96 source.** These
appear in the forecast strip; the *full sky* versions for trip headers come later as Tier F
backdrops.

| ID | File | Subject |
|---|---|---|
| `glyph-weather-clear` | `assets/weather/glyph-weather-clear.webp` | The `☼` rendered as a clean rayed disc, simplified |
| `glyph-weather-hot` | `assets/weather/glyph-weather-hot.webp` | A heavier sun, three short heat waves beneath |
| `glyph-weather-wind` | `assets/weather/glyph-weather-wind.webp` | Bent grass on a sloped horizon, a flag pulled |
| `glyph-weather-mist` | `assets/weather/glyph-weather-mist.webp` | A low ceiling on a ridge, three horizontal bands |
| `glyph-weather-storm` | `assets/weather/glyph-weather-storm.webp` | Bruise horizon, a single zigzag — restrained |
| `glyph-weather-unstable` | `assets/weather/glyph-weather-unstable.webp` | Half‑sun / half‑cloud composite — the *turn* marker, the new mechanic |

---

## 7. Tier E — Places (10 silhouettes)

One locked silhouette per major place. **Wide landscape**, 20:9 (e.g. 1920 × 864), with the recognisable place silhouette kept in the central 16:9 safe zone so it survives both the full-screen trailhead and the narrower route-card crop. These are
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

UI flat-lays. Same ink-and-watercolor surface, but the *object* is the subject — no figures.

| ID | File | Subject |
|---|---|---|
| `chrome-logbook` | `assets/chrome/chrome-logbook.png` | A real linen‑bound notebook, slightly open, the day's entry handwritten |
| `chrome-certificate` | `assets/chrome/chrome-certificate.png` | A HATEOA / Paddle UK certificate, deadpan official, stamped |
| `chrome-loan-papers` | `assets/chrome/chrome-loan-papers.png` | Three side‑by‑side: bank form (stamp red), friend's note on torn paper, dark loan on bar‑receipt paper. The three financing sources made physical |

---

## 10. File specs (current — post‑optimisation)

After the weight pass (`scripts/optimize-assets.py`) every illustrated asset
is **WebP at quality 88**, resized to 2× retina max for its slot. The title wordmark stays
SVG. Total `assets/` is **~22 MB** (down from ~115 MB, a 93 MB save).

| Tier | Asset type | Format | Resized to | Display size | Notes |
|---|---|---|---|---|---|
| A — Cover | Title cover | WebP | 1586 × 992 (native) | responsive, max 560px | opaque bone |
| A — Cover | Wordmark | SVG | — | scales | not used live (HTML text overlay instead) |
| A — Opening | Kitchen scene | WebP | 1586 × 992 (native) | responsive, max 720px | opaque |
| B — Heroes | Wide landscape composition | WebP | 1920 × 864 (20:9; safe zone 16:9) | full-bleed scene-full | figure-left, context-right |
| C — Disciplines | Glyph | WebP | 96 × 96 | 36px display | opaque, was wildly oversized at 1254×1254 |
| D — Weather | Glyph | WebP | 96 × 96 | 22px display | opaque, same story |
| E — Places | Silhouette | WebP | 1920 × 864 (20:9; safe zone 16:9) | full-bleed scene / route card | opaque |
| F — Scenes | Set piece | WebP | ~1586 × ~992 (native) | max 720px | opaque |
| G - Chrome | Flat lay on a surface | WebP | 1920x864 (20:9; doc in 16:9 safe zone) | full-bleed detail view | opaque |

**Naming**: `tier-slug.webp` where `tier` is `hero / place / glyph‑discipline / glyph‑weather
/ title / scene / chrome` and `slug` is the stable id from §3–9.

**Pilot originals at `assets/pilot-0[1-3]-*.png`** are kept as PNG for reference / future
re-generation comparisons (~10 MB; not loaded by the game).

---

## 10½. New surfaces (the next production tier)

Four asset surfaces beyond the original set form the next production tier. Existing wire‑ups in
`index.html` will pick these up automatically once they're in `assets/` and added to the
`ASSETS` map. Render every one against your approved ink-and-watercolor reference image.

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

### Tier M — Detail-view backdrops (3) — the painted surface behind the in-engine UI

The phone / shop / backpack detail views now render proper **in-engine interfaces**
(a real phone screen, a slot grid, a shop counter) in code. These three painted
*backdrops* sit behind that UI to match the hub's hand-painted register. Wiring is
already live via `detailBg()` in `index.html`: each view prefers the new id below and
falls back to an existing asset (`report-blank` / `backpack-phase1`) until it ships, so
adding the file + `ASSETS` entry upgrades the scene automatically — no code change.

| ID | File | Subject |
|---|---|---|
| `phone-desk-p1` | `assets/hub/phone-desk-p1.webp` | The bedroom desk surface in close-up at morning — wood grain, a corner of the spiral notebook, a pencil, a cold coffee mug ring, the harbour soft-focus through the window beyond. **An empty clear space in the centre** where the CSS phone screen floats on top. No phone painted in (the UI is the phone); this is just the desk it lies on. 20:9 |
| `shop-emporium-p1` | `assets/hub/shop-emporium-p1.webp` | Inside Geo's outdoor shop in Kalamata — a worn wooden counter foreground, walls of gear behind: boots on a shelf, coiled rope, hanging head-torches, folded buffs, a paddle leaning in a corner, a hand-lettered price board. Warm, cluttered, friendly. The shop UI panel sits to the right, so **keep the right third quieter** (counter / open space). 20:9 |
| `backpack-phase1-rich` | `assets/backpack/backpack-phase1-rich.webp` | A richer re-paint of `backpack-phase1` — the small worn ~40L pack laid open on the taverna table, its compartments clearly readable as **distinct pockets/slots** (so the slot-grid UI reads as the same object), a few items half-tucked (bottle, snack bag, folded map), evening harbour in the window. 20:9 |

### Tier N — Shop item icons (58) — one painted object per item

The Phase 1 shop becomes a **shelf-shop**: a vertical scroll of 8 shelves (generic + the 7
disciplines), each ~80% of the viewport tall, locked shelves dimmed. Each shelf is a row of
painted item objects; tap one → a tier panel (cheap / standard / pro). One illustration per
item — the tier is the buy choice, not separate art. Prompts + framing template in
`PROMPT-PACK.md §17`. Ids match `ITEMS` in `index.html`, so the shop wires up by id (no mapping
table). **Style:** painted single object (ink-and-watercolor with wash, not the Tier C/D line
glyph), centred on bone-cream, consistent eye-level/scale across all 58. **Pilot:** the 4
generic items first as the style test, then batch shelf by shelf.

Files: `assets/items/item-<id>.webp`.

| Shelf | Items (`item-<id>`) |
|---|---|
| Generic | water · snacks · sunscreen · firstaid |
| Hiking | repellent · poles · map · shell · lamp |
| Sea kayak | pfd · paddle · sprayskirt · drybag · bilgepump · towline · vhf · sparepaddle · paddleleash · cag · compass |
| Canyoning | wetsuit · canyonHarness · canyonHelmet · rope · descender · throwline · canyonBag · canyonShoes · cowstails |
| Rafting | raftThrow · raftPump · raftFlip · raftBail · raftSparePaddle |
| Cycling | bikeRepair · bikeTubes · bikePump · bikeGPS |
| SUP | supPump · supFin · supAnchor |
| Climbing | quickdraws · beladevice · climbChalk · slings · climbShoesOwn *(reuses `item-rope`)* |
| Fleet | clientkayak · clientpfd · clientwetsuit · clientharnessset · raft · raftkitset · clientbike · clientbikehelmet · clientboard · clientsupkit · clientclimbkit · clientclimbshoes |

Counts: 46 personal + 12 fleet = **58** (`item-rope` shared canyon/climb, painted once → 57
unique files).

---

## 10¾. Tier L — desk hub (see DESK-HUB.md)

The diegetic UI tier. The game's home base becomes a *room you tap*. For Phase 1:
the childhood bedroom in Kalamata, school desk by a wide window onto the harbour
with Taygetos behind. ~9 interactive objects on/around the desk; tap any of them
to enter a detail view (phone screen, backpack interior, logbook, shop, etc.).

**Architecture**: one large base scene + many transparent object overlays. The
overlays composite onto the base at runtime, so state changes (booking notifications,
backpack packed/empty, wallet thin/thick, etc.) just swap the relevant overlay —
no need for a whole new scene painting per state. See `DESK-HUB.md §5`.

### Phase 1 — base scene (1 asset)

| ID | File | Subject |
|---|---|---|
| `bedroom-p1-base` | `assets/hub/bedroom-p1-base.webp` | The full Phase 1 bedroom in ink-and-watercolor: school desk by a wide window onto Kalamáta harbour with Taygetos rising behind; single bed in the corner; bedroom door, mirror, geranium on the windowsill, panigíri poster on the wall, a mug of cold coffee, a Mistras print. The WINDOW shows the default summer harbour view. The desk surface is EMPTY — the phone, notebook, catalogue, wallet etc. are overlay assets that composite on top. 20:9 (1920×864), 16:9 safe zone for the desk + window. |

### Phase 1 — object overlays (13 assets, transparent PNG/WebP)

Each overlay is a single object on a transparent background, painted in the same
ink-and-watercolor register as the base scene, with the same line weight and wash
discipline so it sits on the base without looking pasted on.

| ID | File | Subject | State |
|---|---|---|---|
| `bedroom-p1-phone-dark` | `assets/hub/bedroom-p1-phone-dark.webp` | An old phone, screen off, sitting face-up on the desk near the centre | no bookings |
| `bedroom-p1-phone-lit` | `assets/hub/bedroom-p1-phone-lit.webp` | Same phone, screen glowing with a `NEW BOOKING` notification visible on the lock-screen, one or two pills of unread | bookings present |
| `bedroom-p1-notebook` | `assets/hub/bedroom-p1-notebook.webp` | A closed spiral notebook with a worn cover, a pencil resting alongside, on the desk surface | always |
| `bedroom-p1-backpack-empty` | `assets/hub/bedroom-p1-backpack-empty.webp` | A small worn outdoor backpack leaning deflated against the desk chair on the floor (left of frame) | empty |
| `bedroom-p1-backpack-packed` | `assets/hub/bedroom-p1-backpack-packed.webp` | Same pack but standing upright on the floor, strapped closed, ready for the day | loaded |
| `bedroom-p1-catalogue` | `assets/hub/bedroom-p1-catalogue.webp` | A folded outdoor-shop catalogue / flyer with a glimpse of cover illustration, on the desk corner | always |
| `bedroom-p1-wallet-thin` | `assets/hub/bedroom-p1-wallet-thin.webp` | A worn leather wallet open on the desk, just a few coins visible | broke |
| `bedroom-p1-wallet-thick` | `assets/hub/bedroom-p1-wallet-thick.webp` | Same wallet, thicker — coins plus a folded note visible | flush |
| `bedroom-p1-corkboard-empty` | `assets/hub/bedroom-p1-corkboard-empty.webp` | A cork pinboard on the side wall with an old photo strip, a faded postcard, a pinned ticket stub from a 2017 panigíri | Phase 1 start |
| `bedroom-p1-window-spring` | `assets/hub/bedroom-p1-window-spring.webp` | The window VIEW only (sits behind the window frame in the base) — Kalamáta harbour in spring with oleander pink on the verge | spring |
| `bedroom-p1-window-summer` | `assets/hub/bedroom-p1-window-summer.webp` | Same view in summer — bright noon gold on stone, harbour lights ready for evening | summer (default) |
| `bedroom-p1-window-autumn` | `assets/hub/bedroom-p1-window-autumn.webp` | Autumn — cypress green-black on the late vines, the light cooler | autumn |
| `bedroom-p1-window-winter` | `assets/hub/bedroom-p1-window-winter.webp` | Winter — wet rain-grey harbour, low cloud | winter |
| `bedroom-p1-window-hilux` | `assets/hub/bedroom-p1-window-hilux.webp` | A transparent overlay adding the Hilux parked in the harbour-side parking, visible through the window. Composites on top of any season variant | post-pickup-purchase |

### Phase 2/3/4 — deferred

The same pattern applies. Each later phase needs its own base scene (~1 asset) and
~10–15 overlays. Locked in `DESK-HUB.md §3`. Production deferred until Phase 1 hub
ships.

### Wire-up

A new `assets/hub/` folder holds these. Add to the `ASSETS` map in `index.html`
as each one ships. A new `renderBedroomHub()` function (deferred) reads the
overlays and composites them per state. The existing utility screens
(`renderLog`, `openShop`, `renderForecast`, `openHire`, etc.) become DETAIL views
entered from the hub.

---

## 11. Status legend

```
planned   — listed in this manifest, nothing produced
briefed   — generation prompt or commission brief written; awaiting artwork
draft     — artwork delivered, not yet approved against doctrine
shipped   — approved, file in assets/, wired into index.html, harness green
```

**All 43 assets are `shipped`** — produced via ChatGPT (GPT‑Image) using
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
4. ~~**Asset weight / CDN**~~ — **RESOLVED**: weight pass via
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
