# PHASE-ARCHITECTURE.md — the reasoning

The north star for *A Guide's Life — or no Life*. `OUTLINE.md` is the map (the six
phases at a glance); `CLAUDE.md` is the build manual (how the current code works and how to
test it); **this document is the *why*** — the theory every phase, system, and line of prose
should be able to point back to.

> **Status.** v1 draft, 2026-05-25. Cornerstone decisions in §1 are locked with Fotis.
> Everything below them is a proposal to be argued with, not settled doctrine. Sections
> flagged **[OPEN]** need Fotis's real Messinia domain knowledge before they harden.

---

## 1. The four cornerstones (locked)

Everything in this document is downstream of four decisions:

1. **Tone — comic-heightened.** Greek-village farce on the surface; the writing stays
   genuinely good. Not a jokey skin over a sim — the comedy *is* the texture.
2. **Summit — Balance is mastery.** The game offers three good endings; *Balance* (you
   scaled and kept your soul) is the hardest to reach and the one the design quietly aims at.
3. **Cost — felt but gentle.** Climbing away from the trail is never *punished*. It is made
   *seductive*. You feel what you're giving up as an opportunity cost, not a tax.
4. **Process — theory first.** This doc exists before we deepen any single phase, so each
   phase has something to be faithful to.

The rest of §2–§3 is the engine that makes those four cohere.

---

## 2. The thesis — "or no Life"

The title is the whole game in four words. **The "Life" you're after is a single, narrow
thing — and almost every path misses it.** Climb too hard and you end up running a region from
a desk in Kalamata, rich and respected and unable to recall the smell of thyme on a ridgeline:
a life, of a kind, but not *the* life. Refuse to climb at all and you're sixty, still walking
the same day you walked at twenty-five, telling yourself you stayed true when really you were
afraid: also not the life. The pun cuts both ways — there are many ways to end up with *no
Life*, and only one way to keep it.

So this is **not** a story about the evils of ambition; it is the opposite. **You are
*supposed* to climb.** Building something is the point, and the Institution is a real
achievement, not a sin. The game's only quiet insistence is that there are two ways to lose
yourself and they look nothing alike: the obvious one, where scale slowly eats the thing you
loved, and the sneaky one, where the fear of growing disguises itself as loving the trail. The
second is the more dangerous, because it feels like integrity. Balance — climbing *and*
keeping the trail — is the single path that is neither, and it is meant to be hard.

### Why this thesis and not "get rich"

A "build the biggest company" game has a finish line and gets boring once you've optimised
the curve. A game about *what success costs* never resolves, because the tension lives inside
the player's own choices rather than against a number. It is also the only frame under which
all six phases are emotionally the same story instead of six escalating spreadsheets.

---

## 3. The two structural principles (from OUTLINE)

These are load-bearing. Break either and the game stops being this game.

### 3.1 Layer, don't replace

Nothing you could do in an earlier phase ever *disappears*. It **recedes** — becomes
optional, delegated, or automated, but is always reachable. A Phase 6 regional director can
still, on any given morning, choose to grab a pack and personally guide the Taygetos summit
route. The game should make that not just possible but *occasionally, achingly tempting* —
because the reachability of the trail is exactly what gives "or no Life" its bite. If we
amputate Phase 1 the moment Phase 2 starts, the cost becomes abstract. It must stay
*walkable-back-to*.

Practical consequence: the codebase accretes systems, it doesn't swap them. Phase 1's
packing/trailhead/event loop is still the atom of "guiding personally" in Phase 6.

### 3.2 The unit of play is a human situation under a clock — never a dashboard

This is the hardest promise in the design and the one most likely to be quietly broken as we
scale. Every phase, no matter how high, must present itself as **specific people in a
specific bind with the day running out**, not as gauges to optimise.

- Phase 1: *"Two of them brought nothing to drink and the day ahead is dry."*
- Phase 6 (the danger zone): NOT "Regional utilisation: 64%." Instead — *"Your best manager
  in Nafplio is on the phone, quietly. She's been offered her own franchise by a competitor.
  She'd like you to talk her out of it. You have until she hangs up."*

The numbers exist and drive outcomes, but they are **never the surface**. The surface is
always a face, a voice, a deadline. By Phase 6 the "clock" is often a relationship or a
season rather than a literal day — but it is always *something running out*. Solving how to
keep this true at the top of the ladder is most of the back-half design work (§7.5–7.6).

---

## 4. The four through-lines

Four threads ride all six phases. They are how the game stays one continuous life instead of
six mini-games. Each phase *re-expresses* all four at a higher altitude rather than introducing
new ones.

### 4.1 Reputation

The oxygen. Already in the game as `rep` (0–100) plus the reviews system. Across phases both
its *meaning* and what reviews *do* change:

- **Phases 1–2: reviews are feedback.** Your name on the trail; the stars and comments signal
  how you're doing and move reputation, but you don't yet *manage* them.
- **Phase 3 onward: reviews become a job.** Once you're a company with a brand, **answering
  and managing reviews matters** — response rate, tone, turning a furious 1-star around. The
  tyranny of the star average becomes an operational surface, not just a mood.

By Phase 4 reputation is a *brand* that can outshine or outlive you; by Phase 6 it's regional
standing that opens doors before you walk through them. The reviews/platform economy (Google /
TripAdvisor / GetYourGuide / Booking) is the ground truth of reputation and is tightly bound to
the **commission-vs-direct-channel** mechanic in §7.3.

### 4.2 Your named guides

The heart. People you recruit, mentor, and watch grow into who they become — Maria is already
the first. This is the through-line that makes "or no Life" land emotionally, because the
people are how you both *escape* the trail (they do the guiding now) and *stay connected* to
it (they are your trail, secondhand). A great guide who started as your nervous trainee and is
now better than you ever were, threatening to leave and start their own outfit, is the single
strongest dramatic beat the architecture can produce. Guides must be **named, remembered, and
changed by their history with you** — never interchangeable units.

### 4.3 The catastrophe heartbeat

The pulse. Weather is the Phase 1 form: a storm cancels the high routes, an ankle turns on
the scree. Across phases the catastrophes *scale with you* — a guide quits mid-season, a
ferry strike strands a multi-day group, a wildfire closes a whole region, a pandemic erases a
year. These are not random punishment; they are the **regular heartbeat** that makes every
phase a survival story and keeps the human-situation-under-a-clock promise alive even when
the business is humming. Rhythm matters: small tremors often, a genuine earthquake rarely.
The growing seedbank of specific disasters (tiered, in-voice) lives in `CATASTROPHES.md`.

### 4.4 The trail-vs-desk choice

The thesis, made playable — "or no Life" as a recurring decision rather than a lecture. And
crucially **two-sided**: the desk can hollow you out, but the trail can also become a hiding
place (§5.1). The game never frames it as *trail = good, desk = bad*; both directions, taken
to the limit, are a way of losing the life. See §5 — it's important enough to get its own
section.

---

## 5. The cost model — seductive, not punishing

This is the reconciliation of cornerstones 2 and 3, and the most delicate mechanic in the
game. Get it wrong in either direction and the whole point collapses: too punishing and it's
a nag; too weightless and Balance means nothing.

**The rule: the game never charges you for either choice. It makes *both* comfortable — it
pays you, generously, for climbing, and it wraps you in warm familiarity for staying — and
lets you notice, slowly, what each comfort quietly cost.**

### 5.1 How it works mechanically (felt but gentle)

**Two comforts pull at you, in opposite directions. Neither is punished. Both feel good in
the moment. Balance is refusing to fully surrender to either.**

- *The pull of scale.* Every phase transition is a genuine upgrade — more income, reach,
  power. The player should *want* to climb; climbing is the fun. Its cost is never a penalty,
  only **quiet drift**: a soft *trail-days* counter (how recently you personally guided)
  never docks a stat, but as it grows the prose, the reviews, and your guides' lines shift —
  clients ask for "the famous founder" and get someone else; a route you used to know gets
  rerouted and you realise you didn't know. Nothing breaks. Something fades.
- *The pull of staying.* The trail is always one tap away (§3.1), and going back for a day is
  the best day you've had in months — warm, familiar, low-risk. Its cost is also never a
  penalty: it is the empire-day you didn't spend, the growth you waved off. Indulge it
  *occasionally* and you're threading the needle. Indulge it *always* — never climbing,
  always retreating to the comfortable thing — and you haven't stayed true, you've stayed
  *small*. The game won't say so until the end. Then it will, gently.
- **No stat ever punishes you for succeeding, and none for resting.** If we ever write "−5
  soul because you hired a third manager," we've broken the rule. The traps are made of
  comfort, not penalty; the drift is atmospheric and relational; the choice is always yours.

### 5.2 Why Balance is therefore the hardest ending

Because both comforts are genuinely tempting and the game rewards surrender to either — climb
and you're paid, rest and you're soothed. Balance is the only path that requires saying *no*
to both, again and again: no to the empire-day when it pays more, and no to the comfortable
retreat when growth is what's actually needed. The game never tells you which to refuse when;
it just makes both lives available and lets the ending reflect the one you actually lived.
**Balance is hard not because it's gated, but because it means resisting two temptations the
game has spent fifteen years making delicious — one that feels like winning, one that feels
like staying true.** That is the entire design in one sentence.

---

## 6. Tone doctrine — see `LANGUAGE.md`

The full canonical treatment now lives in **`LANGUAGE.md`** (root). It carries the
comic‑heightened thesis, the ratio rule with the playtest "almost parody sometimes" lift,
the voice rules, the Greek diction glossary, typography & punctuation, the locked decisions
(title, kicker, slacker register, hero diminutives), worked examples up the comedy register,
and the anti‑patterns. Read that before writing a single line of game copy.

Brief stub kept here so this doc still scans cleanly:

- Surface: **Greek‑village farce**. Substrate: the genuine ache of *or no Life*.
- **Comedy is the default register; pathos is rationed and always earned.** Lean into
  parody where the line carries it; pull back at the four pathos spots (phase transitions,
  named‑guide arcs, the trail‑days drift, the ending).
- Second person, present tense for the world, past tense for resolved actions. No emojis.
  Greek specificity is a comedy engine and a credibility engine at once.

---

## 7. The six phases at theory level

Each phase is one continuous life one rung higher. For each: the **verb it adds**, its
**essence**, what **recedes**, the **transition** (emotional + mechanical trigger), its **new
unit of play**, its **comedy seam**, and the **cost it quietly extracts**. Full mechanics live
in per-phase docs we write later; this is the brief each must honour.

### 7.1 Phase 1 — Solo guide · adds **GUIDE**
- **Essence.** You *are* the guide. Learn the craft; earn certs; master multiple activities.
- **Recedes.** Nothing — this is the floor, the thing all later phases are nostalgic for.
- **Unit of play.** The day: forecast → pick a trip → pack → meet the group → walk the trail
  → trip complete. (Already built.)
- **Comedy seam.** The clients (families, cruise coachloads, thrill-seekers) and your own
  absurd backstory colliding with real mountains.
- **Cost extracted.** None yet — but Phase 1 is where we *establish what the trail feels
  like* so its later loss can register. Every sensory detail banked here is collateral for
  the ache later. Make the trail genuinely lovable.
- **[OPEN] to develop:** how each new activity unlocks; the cert ladder; how a season grows
  into the next. (First deep-dive target.)

**Starting discipline & the activity system (new — core to the Phase 1 deepening).** You no
longer begin as "a hiker." At profile creation you choose a **starting discipline**, and each
is a distinct way of guiding with its own gear line, routes, hazards, certs, and seasonality:

- **Hiking** — the generalist floor; mountains, gorges, historical paths.
- **Sea kayaking** — Navarino Bay, sea caves, the Mani coast; kayak, paddle, PFD, spray-skirt,
  dry bag.
- **Rafting** — spring rivers; raft, paddles, PFDs, helmets, wetsuits, throw-bag.
- **SUP** — calm bays and sunrise tours; board, paddle, leash, PFD.
- **Climbing** — crags and via ferrata; rope, harness, helmet, quickdraws, belay device, shoes.
- **Canyoning** — gorges with water (Polylimnio, Neda, Vyros); wetsuit, harness, rope, helmet,
  descender.
- **Cycling / e-bike** — coast and backcountry; bikes, helmets, repair kit, spares.

**Season & role (validated with Fotis, 2026-05-25).** Roles are confirmed; canyoning and
rafting running the full season is confirmed; the other seasons are still assumptions to
verify.

| Discipline | Runs | Role |
|---|---|---|
| Hiking | spring + autumn peak; summer high-altitude only *(assumed)* | Core — the floor |
| Canyoning | **April–October (full season)** | Core / signature |
| Rafting | **April–October (full season)** | Core |
| Sea kayaking | **April–October (all season)** | Core |
| Cycling / e-bike | spring–autumn *(assumed)* | Core, tourist-friendly |
| SUP | late spring–early autumn, calm mornings *(assumed)* | Niche / add-on |
| Climbing | spring + autumn; summer alpine *(assumed)* | Niche / specialist |

Each discipline reshapes the whole Phase 1 loop: the **gear shop** carries that discipline's
items (extending today's hiking-only `ITEM_COST` lines), **routes gain an activity type** (the
Neda gorge can host *hiking, rafting, and canyoning* — different trips, kit, and weather
sensitivities), the **trailhead and trail events specialise** (a capsized kayak is not a
turned ankle), and **certs become discipline-aware** (water-safety, climbing, canyoning
leader). You start with one discipline and **add others over the years** — via winter cert
school and unlocked as new winter *products* (§9, winter) — which is precisely what "master
multiple activities" (Essence, above) means in play. This activity dimension **spans every
phase**, not just Phase 1; it supersedes the old CLAUDE.md roadmap that quarantined water &
air activities into a single "Phase 3." **[OPEN]** the per-discipline gear lists, which real
routes support which activities, and the seasonality of each are a Fotis domain vein (§11).

### 7.2 Phase 2 — Mentor · adds **DEVELOP PEOPLE**
- **Essence.** Take guides under you and shape them. They become named, remembered people.
- **Recedes.** Every day being *yours* — you start assigning instead of always walking.
- **Unit of play.** The morning assignment + the radio crises (already built) — but
  re-centred on *the guide as a person*, not a skill bar. Mentoring choices that change who
  they become.
- **Comedy seam.** Training montages gone wrong; the trainee who's a disaster on day one;
  the over-confident one; the village politics of who you hire.
- **Cost extracted.** The first taste: some days you don't guide at all. Trail-days counter
  is born here.
- **Equipment becomes capacity.** Where Phase 1 gear is *your personal kit*, the company
  **depot** (already in the engine: `S.depot`, `allocateGear`) now scales the business: buying
  more discipline-specific durables — more **kayaks**, more **trekking poles**, more
  **harnesses and wetsuits** for canyoning — raises how many clients you can serve at once.
  Capacity ≈ equipment owned × guides you can field; stocking up is the Phase 2 growth lever
  (and a low-stock morning is a self-inflicted catastrophe).
- **[OPEN] to develop:** mentoring mechanics; guide identity/arcs; the depot capacity curve;
  the secondary-role training tree (§14); the trigger to incorporate.

### 7.3 Phase 3 — Outdoor-activities company · adds **PRODUCTIZE & SELL**
- **Essence.** You incorporate: **the player names the brand** and gives it an identity, then
  builds packaged programmes and sells them. You become a thing that *sells experiences*, not
  just a person who guides them.
- **Recedes.** Ad-hoc bookings — you now guide by choice, not necessity.
- **Unit of play.** Designing a product is a human situation: *what do you promise a stranger
  sight-unseen, and can your people deliver it on the worst-weather day?* The B2B sale is a
  negotiation with a face across the table.
- **Reviews become management (not just feedback).** From here on, answering and managing
  reviews is real work that feeds reputation and platform ranking (§4.1).
- **The commission-vs-channel mechanic — the heart of Phase 3 economics.** The OTAs —
  **GetYourGuide, TripAdvisor, Booking** — will resell your activities, bringing volume, but
  they take **commission** on every booking they send. With **no website of your own, every
  client arrives through the platforms and you are commissioned on all of them** — a steady
  bleed. Building your **own website, social media, and booking system** is the better
  long-term investment: real money and effort up front, but it wins back direct bookings and
  the commission on them. A slow compounding bet against a fast easy one — thematically the
  same shape as the whole game's seductive-cost model (§5).
- **Guides become more than guides.** You can train your people into the direct channel: a
  guide who learns **photography**, a **social-media specialist**, a booking handler. This is
  where Phase 2's mentoring (§7.2) pays a new dividend — your named people become the
  marketing engine that frees you from the platforms.
- **Comedy seam.** The platform algorithm; the absurd things tourists expect from a brochure;
  the travel agent who wants the moon at half price; the guide who's a genius on the rock and
  catastrophic on Instagram.
- **Cost extracted.** Your name becomes a *product* name. Clients book "the experience," not
  you. The first quiet drift.
- **[OPEN] to develop:** product design; the B2B sales loop; the commission/website economy
  *numbers* (§11.1); the partnership channel (§12); sustainability (§13); scheduling guides
  onto products; the marketing-role training tree.

### 7.4 Phase 4 — Brand / multi-base · adds **EXPAND & BRAND**
- **Essence.** Still a **day-trip** business — but you expand beyond the Peloponnese into
  other parts of Greece, opening bases run by your mentees under one recognised brand. The
  product doesn't change; the map does.
- **Recedes.** Hands-on running of any single base.
- **Unit of play.** You visit a base and it's a person-under-a-clock: the manager (your former
  trainee) is struggling, or thriving and restless, or quietly building their own fiefdom.
- **Comedy seam.** Regional rivalries; the base that goes rogue with its own "improved"
  methods; brand mishaps.
- **Cost extracted.** You can no longer be everywhere. The trail at the far base is one you'll
  never walk. Geography itself becomes a form of the loss.
- **[OPEN] to develop:** base/region system; manager arcs; brand reputation mechanics.

### 7.5 Phase 5 — Tour operator · adds **ORCHESTRATE TRIPS** · *ship light first*
- **Essence.** The leap beyond day-trips: you **conceive and run multi-day tours** — designing
  itineraries and surviving the logistics cascades. Everything through Phase 4 was a single
  day; this is the first product that spans many.
- **Recedes.** Single operations auto-run; surface only as exceptions.
- **Unit of play (the puzzle).** Keep it human: a multi-day itinerary is *a busload of real
  people whose ferry just got cancelled and whose hotel won't refund*. The "clock" is the
  trip timeline; the situation is a cascade of small human disasters you triage.
- **Comedy seam.** The cascade itself — ferry strike → rebooked hotel → the one client with
  the dietary requirement from hell → the group's self-appointed spokesman.
- **Cost extracted.** You are now a logistics brain. When did you last *see* the gorge you're
  routing people through?
- **[OPEN] to develop:** itinerary builder; the ferry/transfer crisis loop. Ship as a light
  narrative layer first; promote to full sim only if the game has earned it.

### 7.6 Phase 6 — Regional travel-management company · adds **STRATEGY** · *ship light first*
- **Essence.** Run the region as a portfolio — meetings, offers, dilemmas, systemic shocks.
- **Recedes.** Everything operational.
- **Unit of play (the hardest promise).** Strategy must still be *people in a bind*. A
  systemic shock arrives as a phone call from a named person you've known for fifteen years. A
  buyout offer is a lunch with a charming stranger. The "dashboard" stays off-screen; the
  portfolio is felt through the handful of people who run it.
- **Comedy seam.** Boardroom farce; the consultant; the rival who's now an old frenemy; the
  region's politics.
- **Cost extracted.** The full reckoning. You have everything and you are as far from a
  trailhead as the architecture can put you. This is where "or no Life" is answered.
- **[OPEN] to develop:** the decision/dilemma set; systemic shocks; the final reckoning.

### 7.7 Development order
Deepen **1 → 2 → 3 → 4** in sequence (they evolve one engine; each builds on the last). Treat
**5 and 6** as light narrative layers first and only sim them out if the game earns it. Design
everything engine-agnostic; decide the TS + Phaser migration *before* building 5–6 (§9).

---

## 8. Success and the endings system

### 8.1 Retire the cash win

The current win condition (€5000 + rep 70 + 3 guides → "ready for Phase III") is removed as a
*win* and demoted to a *phase transition trigger*. There is no score to beat. The game ends
when a life is lived to its shape.

### 8.2 What the game reads

The ending is determined by **how you lived across the through-lines**, primarily two axes:

- **Scale** — how high you climbed (which phase you reached, how big you got).
- **Trail-connection** — your trail-days history, how many tempting detours you took, how
  close you stayed to the people and the ground.

Plus the *state of your named guides* as the emotional colour on whichever ending you land.

### 8.3 The endings

- **The Institution.** High scale, low trail-connection. A genuine achievement — you built
  something that will outlast you — written with real pride *and* one clean, un-joked sentence
  about the ridgeline whose smell you can no longer recall. Not a failure: a half-life, but a
  monumental one. You won the world and mislaid the trail.
- **The Guide Who Stayed.** Low scale, high trail-connection — and *not* a success. You never
  built anything; you are sixty, still walking the same groups up Taygetos, telling yourself
  you kept it pure. The game doesn't sneer, but it gently and unmistakably names the bluff:
  this wasn't integrity, it was the fear of growing, and the larger life went unlived. It sits
  *below* the Institution (which at least built something lasting) and just *above* the
  outright failure ends. The hardest line in the game to write well — honest without cruelty.
- **Balance.** High scale *and* maintained trail-connection — the rare, hard one (§5.2). You
  scaled and kept your soul. The intended summit, and the only ending that is a *whole* life;
  reachable only by refusing both comforts, over and over — the empire-day *and* the easy
  retreat.
- **Failure ends** (from OUTLINE): **burnout** (you ran yourself empty), **bankruptcy** (cash
  < 0), **sold out** (you took the buyout and regret it), **ruined** (reputation collapse),
  and **Ran off with a client** — you fell for someone on a trip and vanished with them, the
  business left to rot behind you. A *fun* bad end, played for warmth and farce rather than
  doom: the one failure that might, secretly, have been the right call. These are real endings
  too — a comic-heightened game can have a great bad ending.

### 8.4 Design implication

Because Balance is high-scale, the game must remain fully playable and rewarding all the way
up — you can't reach Balance by stopping early (that's the Stayer's trap — §8.3). The whole ladder
must be good, and the trail must stay reachable *at the top*. This re-validates §3.1: layer,
never replace.

---

## 9. Time, career structure, and engine

- **One career ≈ 15+ years**, ~2–3 seasons per phase, six phases.
- **Season cycle** (refined into four movements, not two):
  1. **Pre-season (one month, ~March).** A short setup window before the daily grind: lock
     your **roster** (which guides are signed, on what terms), confirm gear, set the opening
     product line-up. Certain things *must* be decided here — the season won't start until
     they are.
  2. **Summer (April 1 → Oct 31, 214 days).** The core loop, played day-by-day (built).
  3. **Post-season (one month, ~November).** Wind-down: settle wages, read the season's
     verdict, handle the guides who are leaving or renegotiating, count what the year cost in
     trail-days.
  4. **Winter (the long planning screen, ~22 weeks).** Spend weeks on **certs**, **infra
     projects**, and — new — **designing next year's products and activities** (§7.1, §7.3):
     a canyoning programme, a sunrise SUP tour, a new multi-day route. Spring arrives when you
     commit.

  This four-beat rhythm is the catastrophe heartbeat's metronome and persists across all
  phases, even as "the day" abstracts upward. The two shoulder months are where roster, money,
  and product decisions get *forced* — the structural reason you can't simply coast.
- **Engine.** Stay single-file vanilla HTML/JS through Phases 1–4 (zero-dependency, runs as a
  Claude.ai artifact and on a phone — a real constraint worth keeping for as long as it
  holds). Phases 5–6 may justify a **TS + Phaser** migration; that decision is made
  *before* building them, not now. All design stays engine-agnostic so the migration is a
  port, not a redesign.

---

## 10. Non-negotiables (don't regress)

1. **Layer, don't replace** (§3.1) — earlier play always remains reachable.
2. **Human situation under a clock** (§3.2) — never ship a dashboard as the surface.
3. **Both comforts seduce; neither is punished** (§5) — no stat docks you for succeeding *or*
   for resting. Ambition is required: staying small is the sneaky failure, not a safe haven.
4. **Comedy default, pathos rationed and earned** (§6.2).
5. **Voice:** second person, literary, no emojis, Greek-specific, never self-aware.
6. **Balance must stay reachable at full scale** (§8.4).
7. All the technical gotchas in `CLAUDE.md §7` (two-backend storage, lazy dynamic text,
   `advanceDay()` discipline, HUD refresh, the `</script>` trap) still bind.

---

## 11. Open questions — where we go next, and where I need Fotis

**Process.** Next deep-dive target is **Phase 1** (per §7.7). Before that, this doc needs your
red pen — especially §5 (the cost model) and §8 (endings), since those are the most opinionated
and the easiest for me to have guessed wrong.

**Domain knowledge I can't invent — the [OPEN] veins:**

1. **The platforms & reviews economy** (§4.1, §7.3) — *core mechanic now captured*: OTAs
   resell for commission, no-website = full commissioning of all clients, the direct channel
   (website + social + booking system, built by trained guides) is the compounding long-term
   play, and reviews shift from feedback to management at Phase 3. **Still needed:** the rough
   *numbers* — typical commission %, what a website/booking system costs vs. what it wins back,
   how fast the direct channel compounds — so the bet can be balanced.
2. **Real catastrophes** (§4.3) — the specific shocks a Messinia operator dreads (wildfire
   closures, ferry/transfer strikes, a heatwave that kills bookings, the cruise schedule
   changing, overtourism, a bad-press incident). Give me the real ones and the funny ones.
3. **Hotels, resorts, and partnerships** — *drafted with best-guess assumptions in §12*
   (concierge economy, marquee-resort requirements, the commission ladder, win/lose dynamics).
   **Needs your yes/no** on each `[ASSUMED]` line.
4. **The guide labour market** (§4.2) — *drafted with best-guess assumptions in §14* (sourcing,
   contracts vs the grey economy, the off-season retainer, loyalty/flight-risk, the equity
   path). **Needs your yes/no** on each `[ASSUMED]` / `[CONFIRM]` line.
5. **The activities — gear, routes, and seasonality.** The starting-discipline list is now set
   (§7.1): hiking, sea kayaking, rafting, SUP, climbing, canyoning, cycling/e-bike. What
   remains is the *truth* of each: the real equipment list and rough costs, which actual
   Peloponnese spots host which activity, the season each runs in (rafting and canyoning run
   the full April–October season; climbing prefers the cooler shoulder months; SUP wants calm
   summer mornings), and which are *signature* to the real business
   vs. occasional. This is the richest input for the Phase 1 deep-dive.

6. **Sustainability — certification & performance** *(new — Fotis's ask)* — drafted in §13 as
   both a performance rating and an earned certification. **[CONFIRM]** the real scheme to
   reference, and whether it should be a rating, a cert, or both.

Answering even one of these turns a phase from plausible to *true*.

---

## 12. The booking channels & partnerships

> The commission-vs-direct core lives in §7.3; this expands the **third channel** and folds in
> the hotel/resort vein. Everything below the archetype table is **[ASSUMED — Fotis to confirm
> yes/no]**.

Three channels feed the calendar, and the strategic game is the *mix*:

1. **OTAs** — GetYourGuide / TripAdvisor / Booking. Instant volume and reach; highest
   commission *(assume ~20–30%)*; zero loyalty; algorithm-dependent. The fast, easy money.
2. **Direct** — your website / social / booking system, built by trained guides (§7.3). No
   commission, full margin and the client data; but you pay to build and feed it, and it
   compounds slowly. The patient bet.
3. **Partnerships** — hotels, resorts, concierges, DMCs. *Relationship capital*: lower
   commission than the OTAs, premium and pre-sold clients, paid for in trust, standards, and
   maintenance rather than in cash. A named relationship you build and can lose (§4.2's cousin).

**Partner archetypes:**

| Partner | Brings | Pays | Demands | Risk |
|---|---|---|---|---|
| Luxury resort (Costa Navarino) | Premium, high-spend guests | Top rates | Insurance, certs, multilingual guides, clean branded vehicles, sustainability creds (§13), total reliability | Slow to win; one incident and you're out |
| Boutique hotel | Steady mid-market referrals | Good | The owner must like and trust you | Moves with the owner |
| Big package hotel | Volume | Thin | Price competitiveness | Commodity; easily undercut |
| Concierge (a person) | A warm, pre-sold guest | Referral fee / gifts | Their personal trust | They change jobs; the channel goes with them |
| DMC / travel agent | Contracted groups | Net rates | Contracts, capacity, paperwork | Big but impersonal; drops you for cheaper |

**[ASSUMED] The concierge economy.** Relationship *plus* commission: a concierge or hotel takes
a cut on activities they book (assume ~10–20%, below the OTAs), sometimes as a personal
kickback to the concierge, sometimes to the house. **Fam trips** matter — you take the
concierge on the tour for free so they can sell it with conviction. Bigger partners may ask for
exclusivity or "preferred supplier" status. Trust is everything: they're staking their own
guest relationship on you.

**[ASSUMED] What a marquee resort requires** before letting you near its guests: high public
-liability insurance, accredited guides (HATEOA / activity-specific), clean and ideally branded
vehicles, multilingual service, impeccable presentation and punctuality, an approved-supplier
vetting process — and, increasingly, **sustainability certification (§13)**. They guard the
brand ferociously; the bar is high and the fall is instant.

**[ASSUMED] The economics.** Rough commission ladder, cheapest to dearest: **direct ~0%** (you
pay marketing instead) < **partnerships ~10–20%** < **OTAs ~20–30%**. DMCs work on **net
rates** you quote, which they mark up to the client. The whole point of building partnerships
and direct is to claw the OTA commission back over time.

**[ASSUMED] Winning and losing them.** Won slowly, over seasons — reliability, fam trips, guest
care, responsiveness, the personal relationship. Lost fast: a safety incident, a bad guest
experience, going quiet, or a rival with a fatter kickback or slicker service. Losing a marquee
partner is an earthquake (cousin to "The cruise blinks").

**Phase fit.** A single warm hotel intro can exist in Phase 1–2; partnerships become a real
system in **Phase 3–4** (the company now has a brand and standards worth a resort's trust); a
regional web of them by Phase 6.

---

## 13. Sustainability — certification & performance

A real and growing force in Greek outdoor tourism, and a natural fit for this game's thesis:
doing the right thing usually costs short-term money and pays long-term brand — the same
seductive-cost shape as §5.

**Two distinct things, deliberately separable:**

- **Performance** — what you actually do: single-use plastic vs refillable bottles; vehicle
  emissions (the battered pickup vs a minibus vs an electric van or e-bikes); group-size caps
  that spare the trails; respecting protected areas (Voidokilia's turtles, Natura 2000);
  sourcing local (village tavernas, local guides); giving back. Tracked as a **Sustainability
  rating** (tiers, say Bronze → Silver → Gold).
- **Certification** — a formal, earned badge (assume a real scheme — Travelife / a
  GSTC-recognised standard), won off-season like a cert or infra project, but **you can't simply
  buy it; you must meet the performance thresholds.** It unlocks an eco-platform badge
  (visibility/ranking), an eco-premium client segment, and eligibility with partners that demand
  it (§12).

**The gap between them is the drama.** Hold the badge but perform badly and you're
**greenwashing** — a live reputation risk if exposed (a catastrophe seed). Perform well without
the badge and you leave money and visibility on the table. The honest, expensive middle —
genuine performance *and* certification — is, fittingly, the rewarding-but-hard path.

**Interactions.** Feeds reputation/brand (§4.1); gates premium partners (§12); lifts platform
ranking; appeals to a distinct, well-paying eco-conscious client type; and at the top of the
ladder (Phase 6) becomes something you can set as a **regional standard**.

**Phase expression** (layer, don't replace — §3.1):
- *Phase 1:* small habits — Leave No Trace, refillable water, refusing the single-use case —
  worth a quiet rep nudge.
- *Phase 3:* formal **certification** as a brand asset and a partner key.
- *Phase 4–6:* a competitive differentiator, then a standard you impose across bases and region.

**Comedy seam.** Carbon-offset theatre; the eco-tourist who arrives by private jet and lectures
you on plastic; the "reusable" merch nobody reuses; the certification audit and its glorious
forms; the rival whose "eco" is entirely a logo.

**Spawns catastrophes** (for `CATASTROPHES.md`): greenwashing exposed; a failed re-certification
audit; a protected-area violation fine.

**[CONFIRM]** the real scheme(s) to reference (Travelife? Green Key? a Greek/GSTC standard?),
and whether sustainability should be a *rating*, a *cert*, or both (this draft assumes both).

---

## 14. The guide labour market

> The mechanical heart of the **named-guides** through-line (§4.2) and the **DEVELOP PEOPLE**
> verb of Phase 2 (§7.2). Real-world economics below are **[ASSUMED — confirm yes/no]**.

Builds on the existing engine (`S.guides[]` with `skill`, `morale`, `wage`, `spec`; `openHire`;
`stats.hires / wagesPaid / retainersPaid`). Adds a market, contracts, loyalty, and a
development tree.

**[ASSUMED] Where guides come from** — a small, contested seasonal pool:
- *Raw locals* — know the land and the language, cheap, need the craft and certs taught from
  scratch. Highest upside, highest effort.
- *Ready-made pros* — experienced, often **foreign seasonal workers** who chase summers (Greece
  in our season, the Alps or the southern hemisphere in winter). Expensive, excellent,
  rootless — the hardest to keep past one season.
- *Loyal returners* — guides who came back. The backbone, if you can earn it.

**[ASSUMED] How you reach them — recruitment is its own marketing problem.** Beyond the pools
above, candidates arrive through **word of mouth** ("a friend who knows a friend" — cheap,
pre-vouched, variable), and through **paid Facebook / Instagram ads** for seasonal staff
(costs money, brings volume and strangers you must vet). The same channel trade-off as the
client side (§12): free-but-slow networks vs paid-but-shallow reach.

**[ASSUMED] Contracts & the grey economy.** Guides work the **April–October** season on day
rates or a seasonal salary plus tips. The honest path is a real contract with ΕΦΚΑ social-
security cost and paperwork (the §12 bureaucracy); the tempting path is cash-in-hand and a
blind eye — cheaper now, an audit risk later (a catastrophe). Housing is often part of the deal
(see "Nowhere to sleep" in `CATASTROPHES.md`).

**The off-season retainer** *(ties to the pre-season roster month — §9, movement 1).* A good
guide scatters for the winter. Pay a **retainer** over the off-season and they're far likelier
to return next spring (the existing `retainersPaid` stat); skip it and you gamble they'll come
back — and the best ones won't, if something better turns up.

**Loyalty & flight risk — the engine of the drama.** Each named guide carries loyalty/morale
that responds to **pay, respect (backing their calls in `RADIO` crises), growth, and
conditions.** The dangerous combination is **high skill + low loyalty = flight risk**, which
matures into the earthquake: the star who is **poached, or goes independent and becomes a
rival** ("Eleni hands in her radio"). You counter with money, with growth, or — the deepest
lever — with **a stake**: a mentee made partner, eventually a base of their own to run (§7.4),
which is the road to the **legacy** colour on the endings (§8).

**The bittersweet core (the §4.2 heart).** Training someone well makes them *more* likely to
outgrow you. Losing your best to their own ambition is failure and success at once — they
*became someone*, because of you. Let this recur as a gentle, earned ache, never a punishment:
the cost of being a good mentor is that good mentees leave.

**Development tree (three branches).** You grow a guide along any of three lines — and every
investment raises their value *and* their poachability:

- *Craft & certs* — discipline mastery and HATEOA certifications (water-safety, climbing,
  canyoning leader); better outcomes on hard routes and crises.
- *People skills* — **storytelling** (richer trips → better reviews and tips), **empathy**
  (nervous first-timers, families, the anxious), **multicultural fluency** (reading the
  expectations and customs of different nationalities — the cruise coach vs the German couple
  vs the corporate group), and languages.
- *Functional roles* — the specialists who run the business behind the guiding:
  **photographer** and **social-media specialist** (build the direct channel, §7.3),
  **sustainability manager** (drives the §13 rating/cert), **IT specialist** (website and
  booking system, lowers OTA dependence), **equipment-repair hand** (mends kit in the field and
  at base — fewer breakages, lower gear spend), and more.

A guide need not be only one thing — the joy *and* the management puzzle is that your people
become a roster of overlapping talents. The indispensable all-rounder is also the one most
likely to be poached or to leave for their own outfit (§4.2).

**Comedy seam.** Hungover Kostas; the beloved foreign guide who never learns a word of Greek;
the prima-donna star; the useless cousin hired for peace at home; the guide whose personal
Instagram eclipses the company's.

**Phase fit.** Phase 1: none — you're solo. Phase 2: this *is* the loop (find → train → keep).
Phase 3–4: the roster scales, mentees become base managers, retention turns strategic. Phase
5–6: a regional talent system — and the partners you made, or the rivals you created.

**[CONFIRM]** the real pay norms (seasonal salary vs day rate, rough numbers), how much is grey
vs contracted in practice, where you genuinely source guides, and whether the equity/partnership
path matches how good people are really kept.

---

## 15. Financing & debt (reusable)

A leverage system **introduced in Phase 1** (to afford a gear-heavy discipline's fleet — see
`PHASE-1 §8` / `DISCIPLINES.md`) and **reused at every later scale**: a vehicle, a second
discipline's kit, a base, a fleet of minibuses. Debt speeds the climb and adds a cost and a
risk — the seductive-cost shape (§5). **Who you borrow from is a character choice**, and the
source's *personality* drives what happens when you slip.

| Source | Cost | Repayment | Default consequence | Feel |
|---|---|---|---|---|
| **The bank** | interest (~10%/season), forms, needs a shred of standing (a cert or some rep) | fixed instalment at the post-season wind-down | letters, a credit black mark — future loans dearer or blocked | safe, slow, dull |
| **A friend** | 0%, a handshake | flexible, "whenever you can" | you lose the friendship (a *named* person, maybe a future guide) + a morale/standing hit; awkward visits meanwhile | flexible, emotionally expensive |
| **Messier money** | brutal (~25%/season or a per-trip skim), no questions | rigid, no mercy | escalating menace — "the visit," "accidental" gear damage — maturing into a catastrophe | fast, available, funny until it isn't |

**Mechanic.** Principal lands as cash immediately; repayment is an instalment at the post-season
wind-down (the dark option can also skim per trip). Early repayment is allowed and smart.
**Amounts scale with the phase** — a few thousand to bootstrap a Phase 1 fleet; far more to fund
a Phase 4 base. Spawns catastrophes for `CATASTROPHES.md` (the missed bank payment; the friend
who calls it in at the worst moment; the visit). **[ASSUMED]** rates/amounts; **[CONFIRM]** how
dark the dark option gets, and whether a "friend" lender can later become a guide or partner (a
lovely thread if so — ties to §14 and the legacy ending).

---

## 16. Client comfort — conditions × client type (reusable)

A modifier that sits *on top of* danger. Some conditions aren't hazardous, just
**uncomfortable** — and comfort is **group-specific**. The choppy sea or midday heat a
thrill-seeker enjoys makes a family queasy and a cruise-coach mutinous, dragging reviews and
tips even when no one is ever at risk. It rewards *reading the room*.

- *Conditions:* choppy water, midday heat, cold/wet, wind, long/strenuous, exposure/height.
- *Client types* (existing `CLIENTS`: family, tourist, thrill, corporate) — each with a comfort
  tolerance per condition.
- *Effect:* a mismatch costs **satisfaction → reviews and tips** (and, ignored repeatedly,
  reputation), but adds **no danger**. Examples: choppy + family = queasy; heat + family/tourist
  = misery on an exposed hike; long/strenuous + cruise coach = grumbling; **gentle + thrill =
  boredom** (the reverse mismatch — under-delivering to people who came for an edge).

This makes the trailhead "read the group" choices (turn the family back to the lagoon, pick the
kinder line, give the climbers their edge) genuinely meaningful, and it's the natural payoff for
the **empathy** and **multicultural fluency** guide skills (§14) — a skilled guide softens a
mismatch. **[ASSUMED]** the tolerance grid; tune in the balance pass.
