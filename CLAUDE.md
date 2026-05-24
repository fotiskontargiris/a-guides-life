# CLAUDE.md — Messinia Guide (Outdoor Activities Tycoon)

Project context for continuing development in Claude Code. Read this first, then read `aegean-guide.html`.

---

## 1. What this is

A text-driven **outdoor-activities tycoon game**, set in the **Peloponnese (Messinia and its neighbours)**. You start as a solo hiking guide with almost nothing and grow into the region's leading outdoor company. It is one self-contained HTML file (`aegean-guide.html`) — vanilla HTML/CSS/JS, no build step, no dependencies except Google Fonts via `<link>`. It is designed to be played on a phone and to run as a Claude.ai artifact.

**Tone & aesthetic:** an "Aegean/Mediterranean dusk field-journal" look — warm sand text on deep teal, a faint topographic-contour SVG backdrop, a serif narrative voice (Fraunces / Spectral) paired with a monospace "instruments" font (Spline Sans Mono) for stats. Second-person, literary, concise prose. No emojis (dingbat symbols like ▸ ▶ ✓ ☾ are fine).

**The design arc:** the player shifts from *doing* the work (Phase 1, hands-on guiding) to *leading people who do it* (Phase 2, managing guides). That shift is the emotional core; keep it central in any new feature.

---

## 2. How to run and test (IMPORTANT — this method caught every real bug)

There is no framework. To test, **extract the script and check it, then drive it headlessly.**

```bash
# 1. Extract the inline script and syntax-check it exactly as a browser would parse it
python3 -c "
import re
html=open('aegean-guide.html').read()
m=re.search(r'<script>(.*)</script>', html, re.S)
open('/tmp/core.js','w').write(m.group(1))
"
node --check /tmp/core.js   # MUST pass

# 2. Then run a headless simulation harness (see below) that drives random playthroughs
```

**Headless harness approach** (write to `/tmp/h.js`, run with `node`):
- Stub a fake DOM: `globalThis.document = { getElementById: id => els[id] || (els[id] = fakeEl()) }`, where `fakeEl()` has settable `innerHTML`, a `style` object, `value`, `offsetWidth`, and a `classList` stub (add/remove/contains/toggle backed by a `Set`).
- Stub `globalThis.setTimeout = () => {}` and a fake `globalThis.window.storage` (async `get`/`set`/`delete`; `get` throws on a missing key, mirroring the real API).
- Load the script with **indirect eval** after two substitutions so globals are reachable from the harness scope: `src.replace('boot();','').replace('let S, gCounter=0;','var S; var gCounter=0;')` then `(0,eval)(src)`.
- Drive the game by regex-parsing `onclick="..."` out of `els['scene'].innerHTML` and `(0,eval)`-ing the calls. Bias toward progression calls (`runDay`, `processNext`, `setOff`, `resolve*`, `advanceDay`) so games reach an end; cap steps; loop hundreds of games; count thrown exceptions (target: 0).
- Call `initGame('Name','medic',['water'])` directly to start a game (bypasses the title/profile UI).

**Scope gotcha for the harness:** top-level `const` tables (`ROUTES`, `WEATHER`, `ITEM_COST`, `CON`, `DUR`, `GEAR`, `CERTS`, …) are **not** reachable by bare name from the harness module scope. But `var S` and every `function` declaration **are** global. So in tests: reference `S`, call functions (`allocateGear`, `recommended`, `buyItem`, …), and inspect `S.*` for assertions — never reference the const tables directly.

Always run both checks before handing a build back. Several bugs only surface this way (see §7).

---

## 3. Architecture

**Single global state object `S`** (created in `initGame`). Fields:
`phase` (1|2), `day`, `cash`, `rep` (0–100), `energy` (0–100, the player), `gear` (0–100, equipment condition), `packSize` (4/6/8), `loadout` (item ids packed for the current trip), `owned` (item ids the player owns — Phase 1), `depot` (`{itemId: count}` — Phase 2 company stock), `certs` (cert ids), `weather` (current, = `forecast[0]`), `forecast` (array of upcoming weather), `bookings`, `history` (logbook entries `{d, t}`), `stats` (`{earned, fees, tips, wagesPaid, tripsYou, tripsGuides, hires, bestRep}`), `you` (`{id:'you', name, isYou:true, skill, morale, wage:0, spec, perk, task}`), `guides[]`, `queue`, `dayReports[]`, `trip` (active trip working object).

**Rendering:** everything draws into `#scene` via `setScene(html)` (which also clears the `#fcast` forecast card and replays a CSS rise animation). The persistent chrome lives outside `#scene`:
- `.appbar` — title + a `≡` menu button (`toggleMenu`).
- `#hud` — the stat strip; `renderHUD()` fills it and `#goal`, and shows the menu button. **Call `renderHUD()` after any cash/stat change on a sub-screen** (a missed call is what made shop purchases look free — see §7).
- `#goal` — the current objective line.
- `#fcast` — the **forecast card** (its own square); `paintForecast()` fills it; `setScene` clears it, so the day screens repaint it after rendering.
- `#scene` — the interactive content.
- `#drawer`/`#sheet` — the slide-up menu (Season summary, 5-day forecast, Logbook, Main menu).

**Day screens:** `renderMorning()` (Phase 1) and `renderAssign()` (Phase 2), dispatched by `renderCurrent()`. `startDay()` rolls the day (sets weather from `forecast[0]`, generates bookings, resets tasks), renders, and autosaves. `advanceDay()` increments the day, shifts the forecast, and calls `startDay()`. **Every day-advance must go through `advanceDay()`** so the forecast stays in sync.

**Style:** options the player chooses use `.opt` / `.opt.primary`. The single confirm action is visually separated in an `.actionbar` with a solid `.go` button. Keep that distinction (choices vs. the one action).

---

## 4. Game systems (current)

**Core loop (Phase 1):** see the forecast → pick a trip (or shop / certify / rest) → **pack** from owned gear → **meet the group** (a trailhead situation) → walk the **trail** (1–2 event decisions) → **trip complete** (reviews + fee/tip + preparedness verdict) → next day.

**Phase 1 → Phase 2 trigger:** `cash >= 1500 && rep >= 70` → `enterPhase2()` (hires Maria, seeds the depot from owned gear).
**Phase 2 goal:** `cash >= 5000 && rep >= 70 && guides.length >= 3` → win.
**Lose:** `cash < 0` (bankrupt) or `rep <= 10` (ruined). Checked in `checkEnd()`.

**Weather & forecast:** `WEATHER` (5 types: Clear, Hot, Windy, Drizzle/mist, Storm) each with `risk`, `drain`, and flags (`heat`/`wind`/`mist`/`storm`), plus `short`/`col`/`note` for display. `forecast` is a real `FORECAST_DAYS=5` window that **drives** the weather (not random per-day) so the player can plan; storms cancel hard (diff-3) routes.

**Routes (`ROUTES`, Peloponnese):** Polylimnio waterfalls (d1, river/forest), Voidokilia & Navarino dunes (d1, coast/exposed), Ancient Messene & Mavromati (d2, exposed/long), Neda Gorge & waterfalls (d2, river/remote), Menalon Trail — Lousios Gorge (d3, forest/remote/long), Taygetos summit (d3, alpine/exposed/hard). `base` pay 55–205. Tags drive gear recommendations and conditions text.

**Clients (`CLIENTS`):** family, tourist, thrill, corporate — different group sizes, pay multipliers, and event reactions.

**Gear — two models:**
- *Phase 1 (personal ownership):* you **own** items (`S.owned`); packing only offers owned gear. Buy more in the **shop** (`openShop` → `buyItem`, one-time `ITEM_COST` prices). `recommended(route, weather)` returns the items that matter; `prepScore()`/preparedness drives reputation & tips at trip end.
- *Phase 2 (company depot):* `S.depot` of `CON` consumables (water, snacks, sunscreen, repellent — used up per trip) and `DUR` durables (firstaid, poles, map, shell, lamp — reusable, limit concurrent trips). `allocateGear(trips)` distributes kit across the day's trips; coverage modifies guide outcomes. Stock it via `openDepot`/`buyGear` (`GEAR` unit costs).

**Certifications (`CERTS`, "HATEOA"):** Basic Hiking Guide (€120) → unlocks the rest; Wilderness First Aid (€180) improves injuries; Canyon & Gorge Leader (€160) boosts river/forest routes; Mountain Leader (€300, needs rep ≥ 60) **unlocks diff-3 routes**. Each costs a fee **and a day** (`enrollCert` → `advanceDay`). `hasCert(id)` gates routes and modifies event odds.

**Backgrounds (`BACKGROUNDS`, chosen at profile):** medic (injuries go well), charmer (`charm()` boosts rep & tips), outfitter (starts with 6-slot pack, +€150, extra owned items), navigator (better weather/nav outcomes).

**Pay split:** every trip yields a **fee** (`round(pay * payMul)`) and a **tip** (from going above and beyond), shown separately and tallied separately in `stats.fees` / `stats.tips`. Accumulated season tips are the "great job" signal.

**Reviews:** `makeReviews(score, tips, n)` + `reviewsHTML()` produce star-rated client reviews (Google / TripAdvisor / GetYourGuide / Booking.com) at trip end, tiered by trip quality (`tierFor`). Player trips show 2; guide trips show 1.

**Phase 2 management:** assign each person (you + guides) to a trip / rest / training; `runDay()` → `processNext()` queue. Guides auto-resolve (`autoResolve`, skill + gear coverage) or **radio in a crisis** (`RADIO` events) for your management decision. Daily **wages**, **morale** (quit at 0), **fatigue**, training, and hiring (`openHire`). The player still personally guides via the same packing/trailhead/event flow.

**Save/continue:** `window.storage` (async, artifact-only; guarded by `typeof window!=='undefined' && window.storage`). Autosaves at the start of each day under `SAVE_KEY` (currently `aegean_save_v4`). Title screen offers Continue / New game; `doContinue()` applies defensive defaults for older saves.

**Content arrays:** `EVENTS` (trail events), `TRAILHEAD` (meet-the-group), `RADIO` (delegated crises). Each entry has `when(b,w)` eligibility and `choices` with `run(b,S)` returning deltas (`rep`, `cash`, `energy`, `gear`, `payMul`, `tips`, `morale`, `line`/`lines`).

---

## 5. Key tunable numbers (the balance surface)

- Pack: 4 (start) → 6 (€250) → 8 (€600, rep ≥ 65).
- `ITEM_COST` (own, Phase 1): water 25, snacks 20, sunscreen 25, repellent 25, firstaid 70, poles 55, map 40, shell 60, lamp 35.
- `GEAR` (depot unit, Phase 2): water 4, snacks 4, sunscreen 6, repellent 6, firstaid 45, poles 35, map 25, shell 30, lamp 20 (with `batch` sizes).
- Certs: 120 / 180 / 160 / 300; Mountain Leader needs rep ≥ 60.
- Starting cash €200 (+€150 outfitter); start rep 50; goal rep 70.
- Energy drain per trip ≈ 20/28/36 by difficulty (+weather `drain`); rest +55.
- Phase-1 goal €1500 & rep 70; Phase-2 goal €5000, rep 70, 3 guides.

Balance is a **first pass** — these are the dials to turn for a balance feature.

---

## 6. Conventions

- Plain functions in one `<script>`; no modules. Keep it dependency-free and single-file.
- Theme via CSS variables (`--ink`, `--terra`, `--gold`, `--sea`, `--olive`, `--danger`, `--panel`…). Reuse them; don't hardcode colours.
- Prose is terse, second-person, literary. No emojis.
- After mutating cash/rep/etc. on a sub-screen, call `renderHUD()` (and re-render the sub-screen).
- Bump `SAVE_KEY` whenever the `S` schema changes, and add a defensive default in `doContinue()`.

---

## 7. Gotchas that have already bitten (do not regress)

1. **No `localStorage`/`sessionStorage`** — they fail in Claude.ai artifacts. Use `window.storage` (async) with the `typeof window` guard.
2. **Lazy evaluation of dynamic text.** Any string in a data array that interpolates a *runtime* value (e.g. a guide's name) **must be a function**, not a bare template literal — bare ones evaluate at script load and throw `ReferenceError`. Example: `RADIO` choice labels are `(g) => \`Trust ${g.name}...\``, rendered via `typeof c.label === 'function' ? c.label(g,b) : c.label`.
3. **Never put `</script>` inside a JS string** — the HTML parser would truncate the script. (`node --check` on the extracted file won't catch this; grep for it.)
4. **HUD must refresh after stat changes** on sub-screens (shop/depot/certs) or values look stale ("my money didn't go down").
5. **Day advance only via `advanceDay()`** so the forecast window shifts correctly.
6. **Apostrophes/quotes inside single-quoted JS strings** inside template literals will break parsing (e.g. "today's" broke a build once). Reword or escape.
7. Stale browser cache after edits — a hard refresh / new tab is sometimes needed; not a code bug.

---

## 8. Roadmap / what's next

- **Phase 3 — water & air activities** (the big one). Kayaking, SUP, sailing, snorkelling in Navarino Bay; paragliding off Taygetos. Implies new activity categories beyond hiking, specialist gear lines, guide skill specialisations, possibly new certs (water safety), and seasonality. The Peloponnese setting was chosen precisely because these cluster geographically.
- **Balance pass** across the Phase 1 economy (shop prices, cert fees/gates, reputation curve, tip frequency, wage pressure in Phase 2).
- **Polish:** low-stock warning before committing a Phase 2 day; a season-end summary; optional sound; difficulty settings; richer logbook.

---

## 9. Files

- `aegean-guide.html` — the entire game.
- `CLAUDE.md` — this document.

Run `claude` in this folder; it will read both. When you make changes, re-run the extract + `node --check` and the headless simulation before considering them done.
