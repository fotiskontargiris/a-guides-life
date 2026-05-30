# EQUIPMENT.md — the gear bible, all disciplines

The single source of truth for **every piece of equipment in the game**: what it is,
what it costs, how long it lasts, which discipline it belongs to, and when the engine
thinks you need it. It reconciles two existing sources:

- **`index.html`** — the *implemented* constants (`ITEMS`, `ITEM_COST`, `ITEM_LIFETIME`,
  `ITEM_ACTIVITY`, `CON`/`DUR`, `FLEET_ITEMS`, `TIER_MULT`, `recommended()`, `CERTS`,
  `INFRA`). These numbers are **authoritative** — if this doc and the code disagree, the
  code wins and this doc is stale.
- **`DISCIPLINES.md`** — the *design* gear lines (roles, the in-voice intent, and a longer
  wishlist of items not yet wired). Items present there but not in the code are marked
  **◐ designed** below.

Status legend: **✓ in the build** (live in `index.html`) · **◐ designed** (in
`DISCIPLINES.md`, not yet coded). All prices are euros at **standard** tier; multiply by the
tier table (§3) for basic/pro.

Read alongside `DISCIPLINES.md` (routes, weather rules, events) and `PHASE-ARCHITECTURE.md`
(§15 financing, §16 client-comfort). For the shop *screen*, see `index.html → openShop()`.

---

## 1. The three kinds of equipment

Every item is exactly one of:

- **Consumable** (`CON`) — used up a little each trip; when its `trips` counter hits 0 it's
  gone and must be re-bought. Water, snacks, sunscreen, repellent.
- **Durable** (`DUR`) — reusable; wears over many trips, then breaks and is removed. Most
  safety kit. In Phase 2 a durable also *limits how many trips can run concurrently* (you
  can't lend the same first-aid kit to three guides at once).
- **Fleet** (`FLEET_ITEMS`) — a per-client durable that **caps group size**. You can only
  take as many clients as you own boats/bikes/boards/harness-sets for. Hiking has no fleet
  (legs are free); every other discipline does.

Phase 1 you **own** kit personally (`S.owned = { id: {tier, trips} }`). Phase 2 the company
runs a **depot** (`S.depot`, flat counts) plus the **fleet** (`S.fleet`, flat counts).

---

## 2. How wear, ownership and "recommended" work

- **Ownership.** `S.owned[id] = {tier, trips}` — one instance per id at a time. Re-buying any
  tier **replaces and refills** to a fresh full lifetime at that tier (`freshOwned`).
- **Wear.** `finishPlayerTrip()` decrements `trips` on every packed item. At 0 it breaks, is
  removed from `S.owned`, and you're told. Packing only offers items with `ownedTrips > 0`.
- **Capacity (Phase 1).** The pack carries `S.packSize` items per trip (4 → 6 → 8). You load
  it at the trailhead from what you own.
- **`recommended(route, weather)`** returns the set of items that *matter* for that route and
  sky. Packing the recommended kit drives `prepScore()` → reputation & tips at trip end;
  missing a key item swings events against you. The per-discipline "when you need it" columns
  in §5 are a plain-language read of this function.
- **Fleet capacity.** `fleetCapacity(act)` = the minimum, across that discipline's fleet
  items, of `count × capPer`. Own 4 client kayaks **and** 4 paddle/PFD sets → cap 4. Own 4
  kayaks but 2 sets → cap 2. Hiking and any discipline with no fleet items = `Infinity`.
- **Alani discount.** If the hero is **Alani**, every gear/fleet/vehicle/upgrade price is ×0.75
  (`alaniPrice`), with a small chance any item is "of uncertain provenance." Certs and loans
  are exempt.

---

## 3. Quality tiers (the cost/lifetime dial)

Every owned item comes in three qualities (`TIER_MULT`). Fleet items are **tier-blind for now**
(◐ tiered fleet is designed — a battered sit-on-top vs a proper touring kayak — not yet coded).

| Tier | Cost × | Lifetime × | Feel |
|---|---|---|---|
| basic | 0.5 | 0.5 | cheap, short life |
| standard | 1.0 | 1.0 | reliable (all §5 numbers are this tier) |
| pro | 2.5 | 4.0 | dear; lasts and lasts |

`itemCost = round(ITEM_COST × tierCost)` (then Alani ×0.75 if applicable).
`itemLifetime = max(1, round(ITEM_LIFETIME × tierLife))`.

**Worked example — first-aid kit (std €70, 25 trips):** basic €35 / 13 trips · standard €70 /
25 trips · pro €175 / 100 trips. Pro is 2.5× the price for 4× the life — cheaper per trip if
you'll use it, dead money if you won't.

---

## 4. Shared catalogue (any discipline)

### Essentials — ✓ in the build

| Item | id | Kind | €(std) | Life(std) | Role |
|---|---|---|---|---|---|
| Water | `water` | consumable | 25 | 4 | hydration; heat outcomes. Always recommended, every discipline |
| Snacks | `snacks` | consumable | 20 | 4 | energy, morale, the nervous-client settler; long/hard trips |
| Sunscreen | `sunscreen` | consumable | 25 | 8 | exposed & hot trips (and *always* on SUP) |
| Insect repellent | `repellent` | consumable | 25 | 8 | river & forest hiking |
| First-aid kit | `firstaid` | durable | 70 | 25 | injuries, every discipline; harder/remote trips |
| Walking poles | `poles` | durable | 55 | 50 | long/steep descents; lent to the wobbly (hiking) |
| Map & compass | `map` | durable | 40 | 80 | navigation; mist/storm/remote (hiking) |
| Rain shell | `shell` | durable | 60 | 30 | the weather-turn; wind/mist/storm/alpine (hiking) |
| Headlamp | `lamp` | durable | 35 | 40 | late finishes, dark slots; long alpine days |

`firstaid` is shared by every discipline; the rest of this table is the **hiking** kit but
several (snacks, sunscreen) recur everywhere via `recommended()`.

### Phase 2 depot prices — ✓ in the build

The depot (`GEAR`) currently stocks the shared essentials / hiking line at bulk unit prices:
water €4 (batch 5) · snacks €4 (5) · sunscreen €6 (3) · repellent €6 (3) · first-aid €45 ·
poles €35 · map €25 · shell €30 · lamp €20. **◐ Discipline-specific depot stock and tiered
depot are designed, not yet wired** — Phase 2 gear is tier-blind today.

### Comfort & delight — ◐ designed (no safety effect; lift tips/reviews/social)

Premium local picnic · mountain-tea/coffee flask · action camera (GoPro) · branded buffs/merch
· field binoculars. These pay off the empathy/storytelling guide traits and feed the direct
booking channel. Not yet in the build.

### Shared kit designed but not yet built — ◐

Sun hat & buff · sunglasses · blister & tape kit · group shelter (bothy bag) · thermos/flask ·
whistle/signalling · daypack upgrade (distinct from the pack-size upgrade) · scrambling helmet
for diff-3 hiking ground.

---

## 5. By discipline

Each discipline lists its **own** kit (beyond the shared essentials). Numbers are standard tier
from the code. The "When recommended" column paraphrases `recommended()`. Fleet items set the
group-size cap. Cert ladder per discipline from `CERTS`.

### 5.1 Hiking — `hike` (the floor discipline)

Identity: the entry discipline; no fleet cap, legs are free. Defining variable: the weather-turn
and the long alpine day.

Personal kit = the shared essentials table (§4) — `repellent`, `poles`, `map`, `shell`, `lamp`
are hiking-scoped; `water`/`snacks`/`sunscreen`/`firstaid` are cross-cutting.

When `recommended()` adds them: sunscreen (heat/exposed) · repellent (river/forest/gorge) ·
poles (diff ≥ 2 / rock / alpine / gorge) · map (mist/storm/remote) · shell
(mist/storm/wind/alpine) · snacks (diff ≥ 2 / long) · first-aid (diff ≥ 3 / remote) · lamp
(long **and** alpine).

Fleet: none. Cert ladder (HATEOA):

| Cert | id | Rung | € | wks | rep req | Effect |
|---|---|---|---|---|---|---|
| Basic Hiking Guide | `basic` | 1 (gate) | 120 | 2 | 0 | accreditation — clients trust you; unlocks the rest |
| Canyon & Gorge Leader | `gorge` | 2 | 160 | 3 | 0 | shine on river & gorge hiking routes |
| Mountain Leader | `mountain` | 3 | 300 | 4 | 60 | unlocks the hardest summit routes (Taÿgetos) |

Cross-cutting: **Wilderness First Aid** (`firstaid` cert, HATEOA, €180 / 3 wks, prereq `basic`)
improves injury outcomes in *every* discipline.

### 5.2 Sea kayak — `seakayak`

Identity: the pattern slice. Defining constraint **wind (the meltemi)**; defining twist **the
fleet**. ✓ in the build.

| Item | id | Kind | €(std) | Life(std) | When recommended |
|---|---|---|---|---|---|
| PFD (lifejacket) | `pfd` | durable | 35 | 35 | always |
| Paddle | `paddle` | durable | 40 | 40 | always |
| Dry bag | `drybag` | durable | 20 | 50 | always |
| Spray-skirt | `sprayskirt` | durable | 30 | 25 | exposed / open-water |
| Bilge pump | `bilgepump` | durable | 15 | 60 | exposed / open-water |
| Tow-line | `towline` | durable | 25 | 60 | open-water / remote |
| VHF radio | `vhf` | durable | 40 | 30 | open-water / remote |
| Spare split paddle | `sparepaddle` | durable | 40 | 60 | open-water / remote |
| Paddle leash | `paddleleash` | durable | 12 | 20 | (owned-utility; keeps paddle with boat) |
| Cag / wetsuit | `cag` | durable | 60 | 25 | mist / storm / wind on open water |
| Compass & chart | `compass` | durable | 25 | 80 | mist / open-water |

Plus `water` always, `sunscreen` (heat/exposed/open-water), `firstaid` (diff ≥ 2 / remote),
`snacks` (long).

Fleet (cap = min across both): **Client kayak** `clientkayak` €220, capPer 1 · **Client paddle
+ PFD set** `clientpfd` €70, capPer 1.

Cert ladder (Paddle UK): `kayakBasic` Sea Kayak Award (1, €140/2wk, rep 0, the gate) →
`kayakLeader` Sea Kayak Leader (2, €220/3wk, rep 30, exposed water) → `kayakAdvanced` Advanced
Sea Kayak Leader (3, €320/4wk, rep 60, open crossings: Proti, Tainaron, Sapientza).

◐ designed: kayak trolley; touring kayaks as a pro fleet tier.

### 5.3 Canyoning — `canyon`

Identity: the second slice; reuses the kayak template. Defining hazard **flash flood / cold
water**. ✓ in the build.

| Item | id | Kind | €(std) | Life(std) | When recommended |
|---|---|---|---|---|---|
| Wetsuit | `wetsuit` | durable | 60 | 30 | always |
| Canyoning harness | `canyonHarness` | durable | 45 | 50 | always |
| Canyoning helmet | `canyonHelmet` | durable | 30 | 60 | always |
| Rope | `rope` | durable | 80 | 40 | always (shared with climbing) |
| Canyon dry bag | `canyonBag` | durable | 25 | 50 | always |
| Throw-line | `throwline` | durable | 30 | 60 | diff ≥ 2 / river |
| Descender / belay device | `descender` | durable | 25 | 80 | diff ≥ 2 / technical |
| Cowstails / lanyards | `cowstails` | durable | 30 | 60 | technical / abseil |
| Canyoning shoes | `canyonShoes` | durable | 50 | 30 | technical / abseil / remote |

Plus `water` always, `firstaid` (diff ≥ 2 / remote), `snacks` (long / diff 3).

Fleet: **Client wetsuit** `clientwetsuit` €70 · **Client harness + helmet set**
`clientharnessset` €60 (both capPer 1).

Cert ladder (ICOpro): `canyonBasic` Canyon Guide (1, €150/2wk, rep 0, gentle gorges) →
`canyonLeader` Canyon Leader (2, €230/3wk, rep 30, Neda/Vyros/Lousios) → `canyonAdvanced`
Advanced Canyon Leader (3, €340/4wk, rep 60, technical/abseil + flash-flood judgement).

◐ designed: spare rope, rescue pulley kit, neoprene socks & gloves, dry suit.

### 5.4 Rafting — `raft`

Identity: a reach beyond the home patch (Arcadia/north-Peloponnese rivers). Defining variable
**river flow**; the **raft itself** caps a whole crew. ✓ in the build.

| Item | id | Kind | €(std) | Life(std) | When recommended |
|---|---|---|---|---|---|
| Throw-bag | `raftThrow` | durable | 30 | 60 | always — the key rescue tool |
| Pump + repair kit | `raftPump` | durable | 40 | 80 | always |
| Spare raft paddle | `raftSparePaddle` | durable | 25 | 60 | always |
| Flip line | `raftFlip` | durable | 20 | 80 | always (re-right a flipped raft) |
| Bailing bucket | `raftBail` | durable | 10 | 120 | diff ≥ 2 (a swamped boat) |

Plus `water` always, `sunscreen` (heat), `firstaid` (diff ≥ 2 / remote), `snacks` (long).

Fleet: **Raft** `raft` €900, **capPer 6** (one crew per boat — buy a second raft to double
capacity) · **Raft kit set** `raftkitset` €90, capPer 1 (paddle + PFD + helmet per paddler).

Cert ladder (IRF): `raftBasic` Raft Guide (1, €140/2wk, rep 0, gentle/family — Alfeios) →
`raftLeader` Trip Leader (2, €220/3wk, rep 30, grade-2 — Lousios, Ladonas) → `raftAdvanced`
Raft Instructor (3, €320/4wk, rep 60, high-water + rescue leadership).

**Transport note:** raft needs a **trailer** (§6) to leave the depot at all.

◐ designed: dry box, safety/guide kayak (pro), client booties & splash cags as a separate line.

### 5.5 Cycling / e-bike — `cycle`

Identity: road & trail; the family + hotel market. Defining hazard the **mechanical** and the
**heat climb**. ✓ in the build.

| Item | id | Kind | €(std) | Life(std) | When recommended |
|---|---|---|---|---|---|
| Bike repair kit | `bikeRepair` | durable | 40 | 40 | always |
| Spare tubes & tyres | `bikeTubes` | consumable-ish | 15 | 8 | always (the inevitable puncture) |
| Pump & multitool | `bikePump` | durable | 20 | 60 | always |
| GPS computer | `bikeGPS` | durable | 90 | 120 | backcountry / long / mountain |

Plus `water` always, `sunscreen` (heat/exposed), `snacks` (diff ≥ 2 / long), `firstaid`
(diff ≥ 2 / mountain).

Fleet: **Client bike** `clientbike` €250 · **Cycling helmet** `clientbikehelmet` €30 (both
capPer 1).

Cert ladder (IMBA): `cycleBasic` Trail Cycle Leader (1, €130/2wk, rep 0, lanes & coast loops) →
`cycleLeader` Mountain Bike Leader (2, €210/3wk, rep 30, Mani coast, Messene lanes) →
`cycleAdvanced` Advanced MTB Guide (3, €300/4wk, rep 60, Taÿgetos foothills).

◐ designed: client e-bikes (premium fleet tier), spare e-bike battery, kids' bikes/tag-alongs,
van/bike rack as a gear item (rack exists as transport infra, §6), gloves & hi-vis,
long-range pro e-bikes.

### 5.6 SUP — `sup`

Identity: the niche; flat sheltered water, SUP-yoga, the dawn product. Defining hazard the
**offshore drift**; sun **always**. ✓ in the build.

| Item | id | Kind | €(std) | Life(std) | When recommended |
|---|---|---|---|---|---|
| SUP pump | `supPump` | durable | 25 | 80 | always (a deflated board is a swim) |
| Spare fin & patch | `supFin` | consumable-ish | 15 | 8 | always |
| Anchor | `supAnchor` | durable | 20 | 100 | eco / calm (holds station for SUP-yoga) |

Plus `water` + `sunscreen` **always**, `vhf` & `cag` (open/exposed), `firstaid` (diff ≥ 2 /
open). (`vhf`/`cag` are shared with sea kayak.)

Fleet: **Client SUP board** `clientboard` €350 · **SUP kit (paddle + leash + PFD)**
`clientsupkit` €75 (both capPer 1).

Cert ladder (Paddle UK SUP): `supBasic` SUP Award (1, €130/2wk, rep 0, flat sheltered) →
`supLeader` SUP Leader (2, €200/3wk, rep 30, livelier water + bigger groups) → `supAdvanced`
Advanced/Coastal SUP Leader (3, €300/4wk, rep 60, the Navarino crossing).

◐ designed: rashguard/wetsuit fleet line, waterproof speaker (comfort), touring boards (pro
fleet).

### 5.7 Climbing — `climb`

Identity: the niche fear-management discipline. Defining variable **exposure**; first-aid is
*always* recommended. ✓ in the build.

| Item | id | Kind | €(std) | Life(std) | When recommended |
|---|---|---|---|---|---|
| Rope | `rope` | durable | 80 | 40 | always (shared with canyon) |
| Quickdraws & rack | `quickdraws` | durable | 120 | 120 | always |
| Belay device | `beladevice` | durable | 90 | 100 | always |
| Chalk & chalk bags | `climbChalk` | consumable-ish | 12 | 15 | always |
| Slings & carabiners | `slings` | durable | 40 | 80 | multi-pitch / diff 3 |
| Approach shoes | `climbShoesOwn` | durable | 70 | 50 | multi-pitch / exposed |

Plus `water` & `firstaid` **always**, `snacks` (long / diff ≥ 2), `sunscreen` (heat/exposed).

Fleet: **Client harness + helmet** `clientclimbkit` €75 · **Client climbing shoes**
`clientclimbshoes` €60 (both capPer 1).

Cert ladder (UIAA / Mountain Training): `climbBasic` Single-Pitch Award (1, €160/2wk, rep 0,
bolted single-pitch) → `climbLeader` Rock Climbing Instructor (2, €240/3wk, rep 30, exposed
sport crags — Mani) → `climbAdvanced` Multi-Pitch / Mountaineering Instructor (3, €360/4wk,
rep 60, multi-pitch & alpine — Taÿgetos).

◐ designed: spare rope, crash pad (unlocks bouldering), belay glasses (comfort), trad rack (pro).

---

## 6. Transport — the gate on where equipment can go

Fleet kit can't teleport. Transport (`INFRA`, `scope:'transport'`) gates both route region and
the ability to carry boats/bikes/boards out of the local zone (`bookingLock`). ✓ in the build.

| Item | id | € | wks | Effect |
|---|---|---|---|---|
| Second-hand moped | `moped` | 400 | 1 | reaches mid-region routes; no more bus fare |
| Battered Hilux | `pickup` | 1800 | 3 | full regional access (hike/climb/canyon); +€10 every fee on trips you guide; fleet kit still needs a rack/trailer |
| Roof rack | `rack` | 150 | 1 | (needs `pickup`) carry 2 clients' worth of kit to regional put-ins |
| Trailer | `trailer` | 400 | 1 | (needs `pickup`) carry the full fleet; **required** for raft to leave the depot |

Region tiers: local 0 (free, always) · near 1 (bus, €8 fare) · mid 2 (needs moped+) · far 3
(needs Hilux). The moped/Hilux fire their own purchase scenes (`VEHICLE_SCENES`).

Non-transport infra that touches earnings (winter-only): **booking website** `website`
(€2200/6wk, +1 booking choice/morning, better clients) · **Costa Navarino hotel partnership**
`hotelDeal` (€1500/4wk, +€20 on tourist/family trips).

---

## 7. Quick cross-discipline notes

- **Shared items.** `firstaid` is universal. `rope` serves canyon **and** climb (`ITEM_ACTIVITY`
  array). `vhf` and `cag` serve sea kayak **and** SUP. Items absent from `ITEM_ACTIVITY`
  (`water`, `snacks`, `sunscreen`, `firstaid`) are shared by all.
- **Consumables to watch.** Short-life items churn cash: water/snacks (4 trips), `bikeTubes`/
  `supFin` (8), `climbChalk` (15). Pro tier rarely pays off on these — buy basic/standard and
  refill.
- **Capacity is a fleet problem, not a pack problem.** Pack size (4/6/8) limits what *you*
  carry; fleet count limits how many *clients* you take. Two different ceilings.
- **The economics dial** lives in §3 (tier math) + the cost/lifetime columns. To rebalance a
  discipline, change `ITEM_COST` / `ITEM_LIFETIME` / `FLEET_ITEMS[...].cost` in `index.html`,
  then update §4–§5 here.

---

## 8. Cross-references

- `index.html` — `ITEMS`, `ITEM_COST`, `ITEM_LIFETIME`, `ITEM_ACTIVITY`, `CON`/`DUR`,
  `FLEET_ITEMS`, `TIER_MULT`, `recommended()`, `CERTS`, `INFRA`. The authoritative numbers.
- `DISCIPLINES.md` — routes, weather rules, put-in/on-route events, and the longer designed
  gear wishlist (the ◐ items above).
- `PHASE-ARCHITECTURE.md` — §15 financing (loans fund big fleet buys), §16 client-comfort.
- `CLAUDE.md` §4–§5 — the in-engine gear models and the tunable balance surface.
