# ART-DIRECTION.md — The visual doctrine

The canonical home for *how the game looks* — visual metaphor, interface surfaces, style,
palette, composition, subject matter, typography, locked decisions, worked references and
anti‑patterns. The visual sibling of `LANGUAGE.md` — read both before you make a single
asset.

LANGUAGE sets the voice; ART-DIRECTION sets the surface. They are written to be cross‑
referenced: prose and picture written to feel like the same world.

> **Doctrine versioning**:
> - The **style register** is and remains **"editorial Mediterranean — gouache colour,
>   woodcut bones"** (locked at launch; never changed). Every shipped asset and every new
>   asset uses the same matte gouache surface + woodcut linework + flat lighting + five‑
>   colour palette. See §4 below.
> - The **visual metaphor** evolved on 2026-05-28 to **"the changing guide's desk"** with
>   five locked UI surfaces. That governs *what we draw and where it sits*. See §1–§3.
> - The **scene‑use pattern** evolved on the same date to **persistent scene image with
>   overlaid speech bubbles** for any moment a character speaks. See §12.

---

## 1. The visual metaphor — *the changing guide's desk*

The whole game is shown through the surface where the guide's life is organised:

> **first a kitchen table, then a messy work desk, then a small company office, then a
> regional operations board.**

The table is *the protagonist of the interface*. Routes, weather, clients, gear, money,
catastrophes — all of it arrives on this surface and is acted on from this surface.

**The core sentence the whole game is designed around:**

> *You are at the table where outdoor life becomes a business.*

That sentence contains the entire game:

- **Outdoor life** gives the world its content — routes, weather, gear, mountains, sea,
  clients, adventure.
- **Business** gives the world its pressure — bookings, money, reviews, staff, debt,
  equipment, growth.
- **The table** gives the world its **interface** — folded maps, route cards, a phone, a
  notebook, a backpack, staff cards, receipts, reports.

A normal tycoon would degenerate into a dashboard (cold). A full adventure would forget
the business (un‑pressured). The changing desk is what keeps the game personal, visual,
expandable, mobile‑friendly, and connected to both adventure and decision‑making.

---

## 2. Phase evolution of the desk

The desk **changes as the player's life changes**. Whatever phase you're in, the desk
should *be the kind of desk that life provides*.

### Phase 1 — Solo guide
The "desk" is barely a desk. A kitchen table, or a cheap small table by the window.

On the surface: a folded outdoor map, an old phone, a small notebook, a backpack strap, a
water bottle, a few euro coins, a single weather card, one or two booking requests, maybe
a foiled food parcel from home.

**Feeling**: *I have one bag, one route, and tomorrow someone expects me to know what
I'm doing.* Intimate, warm, nervous, physical.

### Phase 2 — First guides
The table becomes a working desk. The player has hires and can't carry everything alone.

On the surface: staff cards (Maria, Nikos, …), a small route board, guide radios on
chargers, a gear-checklist clipboard, daily assignment notes, a folder of repair bills,
a cash ledger.

**Feeling**: *I cannot do everything myself anymore.* Coordination has replaced
improvisation; the table has organised itself.

### Phase 3 — Real company
The desk becomes a proper office.

On the surface: a laptop with the booking platform open, printed reviews, package
brochures, hotel partner notes, a branded company stamp, a wall calendar, signed contracts.

**Feeling**: *This is becoming a real business, and that is both exciting and dangerous.*

### Phase 4+ — Regional operations
The desk becomes strategic. Multiple bases. Manager portraits.

On the surface: a regional map of the Peloponnese with pins, base folders for each
location, manager portraits, crisis notes from the field, legal documents, financial
reports, brand materials, expansion plans.

**Feeling**: *You built the machine. Now the question is whether you still belong to the
life that started it.*

---

## 3. The five locked UI surfaces

Every screen the player meets is one of these five things. Lock them; reuse them.

### A. The desk screen — *home base*
The main daily screen. It shows the current state of the player's life and the day's
choices. Phase 1 = morning kitchen table; Phase 2 = assignment desk; Phase 3 = company
desk; Phase 4 = regional board.

The desk is the **frame**; everything else (route cards, people cards, the backpack) sits
on the desk when you're on it.

### B. The route card — *bookings as physical cards*
Every trip is a card. Picking a trip should feel like *accepting a real booking*, not
clicking a text option.

A route card carries:
- route name (e.g. *Voidokiliá Bay & the lagoon*),
- small route image (the place silhouette),
- client type (a noun phrase, never a number),
- difficulty,
- expected pay,
- weather warning,
- required gear,
- risk level.

### C. The backpack screen — *physical packing*
The player sees a backpack with limited slots. Gear is visual items. Early game: small
pack, few slots, hard decisions. Later game: better pack, better gear, depot equipment
behind the scenes.

Packing is **satisfying** because it's physical. You feel the weight of choosing what
goes in.

### D. The people card — *humans, not types*
Both guides and clients are shown as cards. A people card can include:
- portrait or silhouette,
- name (guides) or noun‑phrase (clients),
- mood,
- skill,
- fatigue,
- trust,
- current task.

Guides are named individuals — Maria, Nikos, Alexios, Thalia, Petros (see
`LANGUAGE.md §3 People`). Clients are noun phrases — *a family with two young children*,
*the over‑equipped K2 client*, *the German couple weeping at a goat*. Never `Client
(Family)`, never `Tourists × 6`.

### E. The day report — *concrete results, not metrics*
After a trip or day, the result appears like a mix of a **receipt**, a **notebook entry**,
a **review card**, a **gear damage report**, and a **cash ledger**. The day report makes
success and failure concrete.

Not just `+€60, +2 reputation`. Instead:

> *The family left happy. The poles took a beating. One review came in before sunset.*

This is where `LANGUAGE.md §3 Verdicts, not metrics` shows up most.

---

## 4. Style register — *editorial gouache + woodcut bones* (locked at launch — unchanged)

The rendering register that has always governed how images are made, and continues to.
The **desk metaphor** (§1–§3) changed *what we draw*; this section keeps locking *how
we draw it*.

- **Matte gouache surface** — opaque colour blocks, chalky paper texture, no gradients,
  no airbrush, no drop shadow, no glow.
- **Woodcut bones underneath.** Every silhouette reads at 24px. Confident ~2px line on
  foreground figures, ~1.25px on mid‑ground structures, no outlines at all on landscape
  masses (hills, sea, sky read as colour blocks only). The line is the spine; the colour
  is the warmth. Reference family: A. Tassos folk woodcuts, Edward Bawden travel posters,
  Hugo Pratt Mediterranean panels, mid‑century New Yorker editorial illustration.
- **Flat lighting, directional shade.** Single warm sun source; shadows are single blocks
  of a darker neighbour hue, never pure black.
- **Limited five‑hue palette + one seasonal accent.** See §5.
- **Hand‑made, opinionated, illustrated.** Never photographic, never 3D rendered, never
  vector flat‑design.
- **Stylised, never cute.** Adult proportions, never chibi / anime / mascot.
- **Composed asymmetry, mid‑close camera.** Slightly off‑axis, not stagey symmetry.

The **canonical reference image** is *The First Booking* (`assets/title/title-cover.webp`)
— a kitchen table at dusk, foiled food parcel from mum, folded Messinia map, old phone
with a `NEW BOOKING — Sea Kayaking — Voidokilia & the Lagoon` notification, coins,
notebook, backpack strap, water bottle with a *Taygetos* sticker, Kalamáta olive tin, an
open window onto the harbour at sunset. The image is in editorial gouache + woodcut
bones, applied to the *desk subject* — same surface as the earlier hero and place
batches, just a new compositional subject. Judge new assets against it.

---

## 5. Palette

Five core hues. The seasonal accent rotation still applies; the desk metaphor doesn't
change colour, only what the colour wraps.

### Core (always available)
| Token | Hex | Sample meaning on the desk |
|---|---|---|
| **Terra** — roof‑tile clay, dusk hill | `#C8633D` | The Kalamáta rooftops out the window, the dust on a map's spine, the painted oilcloth lemons |
| **Olive** — sun‑bleached olive, sage | `#7E8A4B` | The water bottle, the olive‑grove view, a backpack canvas |
| **Sea** — deep Ionian, evening Aegean | `#1F4A56` | The sea outside the window at dusk, the kafeneío door, a kayak hull on the route card |
| **Bone** — warm limestone, paper, plate | `#EEE5D2` | Paper map, notebook page, oilcloth, the cover sky, taverna walls |
| **Ink** — warm near‑black | `#1B1B1F` | Pencil marks on the map, phone bezel, text, the iron skillet |

### Seasonal accent (one at a time, ~10–15% of the frame)
| Season / mood | Accent | Hex | Where it shows up on the desk |
|---|---|---|---|
| Spring (pre‑season, March) | **Oleander** — soft pink | `#D87596` | Flowering verge in the window, a scarf draped on the chair |
| Summer (April – Oct) | **Noon gold** — sun on stone | `#E0A951` | Phone screen glow, the harbour lights through the window, a beer label |
| Autumn (post‑season, Nov) | **Cypress** — black‑green | `#2E3A2C` | Late vines, a guide's wool jumper, a cemetery cypress on a route card |
| Winter (cert school, Dec – Mar) | **Rain grey** — wet stone | `#7A8088` | Wet street outside, the office window, a soaked tarp on a chair |

### Palette rules
- **Never six.** A frame that needs a sixth hue is a frame with a composition problem.
- **Accent is supporting cast.** The five core hues do 85% of the work; the accent
  earns the eye in one specific shape.
- **No pure white, no pure black.** The bone and ink tokens are the limits.

---

## 6. Composition principles

What makes a frame land *as a desk*, not as a generic illustration.

- **The desk is the frame.** Whether the screen is the main desk view or a single
  zoomed‑in card, the underlying physicality is *paper, wood, table edge, sunlight from a
  window*. Floating elements in empty space read as flat‑design — banned.
- **Layered objects, with depth.** Items overlap. The phone partly covers the map. The
  food parcel sits on the corner of the notebook. The coins rest on a single page. Depth
  is *physical*, not via drop shadows — via geometry, perspective, and slight texture.
- **A window onto Messinia.** Whenever the camera composition allows, an open window or
  doorway carries the *outside* — harbour, olive grove, mountain ridge, sea at sunset.
  The desk is *in Messinia*, never in an abstract space.
- **Tools, named.** Every object is doing one of three jobs: telling us where, telling us
  who, or telling us what just happened. A water bottle isn't generic — it has a *Taygetos*
  sticker. A map isn't generic — it says *MEΣΣHNIA ROUTES* with real place names. A food
  parcel isn't generic — it has mum's note on it in Greek: *Φάε καλά. Και πρόσεχε. Η μαμά
  ♥*. Cultural specificity is the credibility move.
- **Greek over Mediterranean default.** Whitewashed and blue is the *Cyclades*. Messinia
  is **rooftiles, sun‑bleached plaster, dusty olive, deep harbour stone, slate Mani towers,
  eucalyptus.** Get this right; it is the whole *not‑generic* move.
- **Mid‑close camera.** The desk is shot at the angle a person sitting at it would see it
  — slightly above and slightly to the side, foreshortened. Not top‑down (cold), not
  straight‑on (stagey).

---

## 7. Subject matter inventory

What we draw, organised by UI surface.

### A. Desk screen (`assets/desk/`)
One canonical image per phase. The Phase 1 desk is *The First Booking* (currently saved
to `assets/title/title-cover.webp` because it also serves as the title cover).

- `desk-phase1-first-booking` — kitchen table at dusk, the locked Phase 1 reference image
- `desk-phase2-working` — *(to make)* working desk with staff cards, route board, radios
- `desk-phase3-office` — *(to make)* office with laptop, contracts, brochures
- `desk-phase4-regional` — *(to make)* regional map with pins, manager portraits, base folders

### B. Route cards — place silhouettes (`assets/places/`)
The ~10 named places (Polylimnio, Voidokilia, Pylos‑Methoni, Mavromati, Neda, Lousios,
Taygetos, Mani, Kardamyli, Kalamata). Each is the *small image inside a route card*. The
existing 10 are shipped under the earlier doctrine; they work as route‑card thumbnails.

### C. Backpack screen (`assets/backpack/`)
- `backpack-phase1` — *(to make)* small worn pack, 4 slots, dust on the strap
- `backpack-phase2-depot` — *(to make)* gear depot view — racks, boxes, the inventory wall
- `backpack-phase3-cache` — *(to make)* organised cache with branded buffs, named bins

### D. People cards (`assets/heroes/` + `assets/clients/`)
- **Heroes** — the 10 fixed founder characters (shipped: hero-01-medic … hero-10-villager)
- **Clients** — *(to make)*, noun phrases:
  - `client-family` — *a family with two young children*
  - `client-cruise` — *a coachload of cruise tourists*
  - `client-photographers` — *three photographers chasing the light*
  - `client-corporate` — *a corporate team‑lead with a schedule*
  - `client-k2` — *the over‑equipped K2 client in the olive grove*
  - `client-german-goat` — *a German couple weeping, gently, at a goat*
  - `client-bouzouki` — *the bouzouki busker whose instrument eats a pack slot*
  - `client-kyria-voula` — *Kyría Voúla* (recurring villager, named in LANGUAGE §3)
  - `client-cousin-mitsos` — *Cousin Mitsos in the yard with the spanner*

### E. Day report (`assets/reports/`)
- `report-blank` — *(to make)* a generic report background (paper, ledger lines, a
  pencil) — the canvas the day's verdict prints onto
- `report-review-good` / `report-review-bad` — *(to make)* review card variants
- `report-gear-damage` — *(to make)* gear damage notation page

### F. Scene set pieces (`assets/scenes/`)
Special moments that aren't bound to a single surface. Shipped:
- `scene-kitchen` — the opening *pre‑desk* moment (before you sit down to your first day)
- `scene-hilux-dawn` — the pathos still
- `scene-panigiri` — the parody‑lift density frame
- `scene-first-hire` — the Phase 2 transition pathos
- `scene-radio-crisis` — the Phase 2 management beat

### G. Chrome (`assets/chrome/`)
Single‑object flat‑lays placed inside other surfaces. Shipped:
- `chrome-logbook`, `chrome-certificate`, `chrome-loan-papers`

### H. Glyphs (`assets/disciplines/` + `assets/weather/`)
Small icons for the forecast strip + the discipline picker. Shipped: 7 discipline + 6
weather glyphs. These are the only non‑desk‑metaphor visual elements and they stay as
small woodcut icons — they read as *brass plaque tokens on the desk*, not as separate UI.

### I. Title (`assets/title/`)
`title-cover.webp` (the first‑booking desk view, doubles as the canonical Phase 1 desk
reference) + `title-wordmark.svg` (kept as the typographic source; live game renders the
wordmark as HTML text).

---

## 8. Typography & dingbats

Type rules live in `LANGUAGE.md §5`; this section only adds the visual extensions.

- **Serif** for narrative and long copy — Fraunces or Spectral, the existing pairing. On
  illustrated surfaces, the type is *part of the picture*: it sits on paper, looks
  printed, has the right ink colour for the bone background.
- **Spline Sans Mono** for instruments and chrome labels — `ALL‑CAPS WIDE‑TRACKED`,
  laser‑etched into brass on the desk's instrument strip.
- **Sanctioned dingbats** `▸ ▶ ✓ ✦ ▦ ☼ ❧ ⌂ ✕ ≡ · — ☾ ⚒ ◈ ✂ +` — the only icon
  vocabulary. Rendered at the type weight, not enlarged into glyph art. **Never emoji.**
- **Greek in the world.** Signs, notebooks, food‑parcel notes, posters can carry Greek
  text — and *should*, where the metaphor calls for it (mum's note, route map labels,
  panigíri posters). It anchors the world.

---

## 9. Locked decisions

These are settled. Do not reopen without flagging.

- **Visual metaphor**: *the changing guide's desk.* Every UI surface is something on or
  about the desk.
- **Core sentence**: *You are at the table where outdoor life becomes a business.*
- **Style register**: *editorial gouache + woodcut bones.* Locked at launch, unchanged. Warm Mediterranean. Paper, sun,
  sea, stone, old gear, warm shadows. Closer to indie‑game editorial illustration than
  to photographic, vector, 3D, or cartoon.
- **Canonical reference image**: *The First Booking* at `assets/title/title-cover.webp`.
  Judge every new asset against it. If they don't sit on the same shelf, fix the new one.
- **Five UI surfaces**: Desk · Route card · Backpack · People card · Day report. Every
  new screen must be one of these (or a justified scene set‑piece).
- **Pixel art is RETIRED.** No 8/16/32‑bit references, no chunky pixels.
- **No emoji.** Dingbats only, from the sanctioned set.
- **No drop shadows, no glow, no gradients, no glass, no motion FX.** Depth is geometry,
  not effects.
- **Five core hues plus one seasonal accent.** Hard rule.
- **Greek specificity over generic Mediterranean.** Real places, real language, real
  signage, real food. Never Cycladic whitewash.
- **The Hilux is the only sentimental object.** Other tools are tools.
- **Mum is drawn from behind, never face‑on.** The icon over the door does the face work.
- **Hero gender is locked** per character (see `HEROES.md`). No swap; no neutral version.
- **Landscape only.** One design, optimised for ~1100×700 desktop / phone-rotated. No
  portrait fallback. Touch devices in portrait get a *"Sideways, please. The Peloponnese
  is wider than it is tall."* prompt overlay until they rotate. This frees the layout
  from responsive compromise and the assets from having to work at two aspects.
- **Fixed-viewport game UX.** The page never scrolls. Top chrome (appbar / HUD / goal /
  forecast) anchors at top; the scene area fills the rest. Two-col scenes: the image is
  fixed in the left column, only the right panel scrolls internally. Utility screens
  (shop, cert school, logbook): the scene area itself scrolls internally. The "browser
  document" feeling is out; this is a game.

---

## 10. Worked example — *The First Booking*

The locked Phase 1 desk view. Use it as the standard for every new asset.

What lands in the frame:
- **Surface**: a worn wooden kitchen table, dusk light, foreshortened from the seat where
  you'd sit. The table edge runs across the bottom of the frame.
- **The booking** (the dramatic centre): an old phone, screen lit with a single
  notification — *NEW BOOKING · Sea Kayaking · Tomorrow 09:30 · 2 Adults · Voidokiliá &
  the Lagoon · VIEW DETAILS*. The phone catches noon‑gold accent.
- **The journey** (the world): a folded paper map, *MEΣΣHNIA ROUTES*, with real towns
  labelled in Greek — Kalamata, Methoni, Gialova, Kardamyli, Stoupa. A compass rose at
  the corner.
- **Home** (the warmth): a foiled food parcel from mum with her note —
  *Φάε καλά. Και πρόσεχε. Η μαμά ♥* — sitting next to it.
- **The bag** (the work): a small backpack strap and buckle in the corner.
- **The grit** (the money): a small handful of euro coins — €2 pieces and 50 cent — by
  the pencil.
- **The water** (the discipline): a metal water bottle with a *Taygetos* mountain
  sticker.
- **The memory** (the journal): a small spiral notebook with *Ο καλός οδηγός / δεν τρέχει.
  / διαβάζει τη μέρα.* on the cover (*"The good guide doesn't run. He reads the day."*).
- **The room** (the home): a panigíri poster on the wall (*Παν*η*γύρι Αρφαρών · 15
  Αυγούστου*), a tin of *Kalamata Eλιές*, a plant on the chair, the back of the wooden
  chair itself.
- **The world** (Messinia): an open window onto the Kalamáta harbour at sunset — the
  curve of the bay, distant mountains, the harbour lights coming on, terra rooftops below.

Every object is *doing* something: telling us where we are (Messinia), who we are (broke,
home, mum is worried), what just happened (the first booking arrived), and where we're
going (Voidokiliá tomorrow). No object is decorative.

---

## 11. Anti‑patterns

Things that have been tried in adjacent genres and would visibly clash here.

- **Dashboard tycoon UI.** Floating cards, no surface beneath, generic icon library,
  +€60 floating in space. The whole point of the desk metaphor is *not this*.
- **Pure adventure game.** Full landscapes with no interface, "you are here" markers,
  third‑person character on a map. The business pressure disappears in this register.
- **Pixel art / 16‑bit nostalgia.** Retired. Hard rule.
- **Anime / chibi / mascot.** Big heads, small bodies, sparkly eyes. Heroes are
  *adults with backstories*, drawn as such.
- **Vector flat‑design / corporate Memphis / Notion illustration.** Blobby beanstalks,
  disembodied hands, floating laptops. Reads as marketing site; kills the world.
- **Photoreal / 3D / rendered.** No CGI surface, no octane glow, no HDR sky. The
  picture is illustrated.
- **Santorini cliché.** Whitewashed buildings, blue domes, infinity pool sea. That is the
  *Cyclades*. Messinia is *terracotta, sun‑olive, slate Mani grey, deep harbour stone*.
- **Generic Mediterranean.** A composite village that could be Tuscany, Provence, or
  Croatia. Real Messinian places, or it does not appear.
- **AI‑slop tells.** Six fingers, mush in the background, glossy plasticky surface, ten
  hues no one chose, melted faces. If a frame looks like prompt output, it does not ship.
- **Cute weather characters.** Smiling clouds, winking suns, sad‑face rain. The weather
  is a *force*.
- **Drop shadows, gradients, glow, motion FX.** Depth is geometry.
- **Emoji.** See `LANGUAGE.md §5`.
- **Decorative ornament.** Floral borders, evil‑eye motifs as spacers, ouzo‑bottle
  filigree. Every element does where/who/what or it isn't in the frame.

---

## 12. Scene flow + speech bubbles

How images are *used* in the live game. Pictures aren't decoration with text underneath
— pictures are the stage, and characters speak inside them. This section locks the
narrative pattern that makes the intro (and any character‑speaks moment) flow.

### The persistent‑scene pattern

Whenever a moment is **a conversation** rather than a single‑frame illustration:

1. **The scene image stays put** as the visual anchor across the full conversation.
   The kitchen image holds across Beat 0 → Beat 4 of the intro. The panigíri image
   holds across the discipline / loan / kit pick. The doorstep image holds across the
   first‑hire conversation. *One stage, many beats.*
2. **Characters speak in speech bubbles overlaid on the scene** — never in paragraphs
   below the image. Where the character stands in the painting is where their bubble
   points. Mum's bubbles emerge from her counter; the radio handset's bubbles emerge
   from the device; the panigíri elder's bubbles emerge from the long table.
3. **The narrator speaks in italic below the image** — short, low‑contrast, atmospheric.
   The narrator handles what cannot be in a bubble (mood, what the player‑character is
   thinking, what is unsaid).
4. **Choices and inputs sit below the narrator** — same button styling as everywhere
   else. The choice is the player's voice in the conversation.
5. **Beats advance by replacing the bubbles** — not by replacing the image. The scene
   image is cached; only the overlay text changes between beats. Visually this reads as
   *the conversation moving forward in the same room.*

### Speech bubble visual style

Every bubble is editorial gouache + woodcut bones (§4), applied at small scale.

- **Shape**: rounded rectangle (12–18px radius). Slight imperfection is OK; computed
  perfection is not — these are *hand‑painted speech bubbles*, not chat UI.
- **Fill**: bone cream `#EEE5D2` (or `var(--bone)` token if we add it). Slightly
  translucent (≈92% opacity) so the scene shows faintly behind.
- **Outline**: ink `#1B1B1F` (`var(--ink-dark)` token), ~2px confident line — the
  woodcut bone. Never a thin grey hairline.
- **Tail**: a short 8–10px ink line pointing to the speaker's position in the image.
  Geometric, woodcut‑clean — not the cartoon "wobbly oval tail."
- **Type inside**: serif (Fraunces or Spectral), ink, 14–16px, line‑height ~1.35.
  Greek diction renders here (§4 of `LANGUAGE.md` glossary), including curly quotes,
  em dashes, italics for emphasis.
- **No drop shadow, no glow, no gradient, no glass.** Same anti‑patterns as §11.

### Bubble variants

| Variant | When | Style delta |
|---|---|---|
| **Speech** (default) | A character speaks aloud — mum, a guide, a client | as above |
| **Thought** | A character's inner voice — the player‑character noticing, hesitating | bubble outline becomes dashed 2px ink; type italic |
| **Off‑frame** | Speaker isn't visible in the scene (a phone call, mum from the kitchen behind a door) | bubble has no tail, sits in the upper‑right of the frame, slightly smaller |
| **Icon** | The icon over the door, the radio handset, the phone notification — non‑human speakers | bubble fill stays bone but type is mono (Spline Sans Mono), small caps |

### When NOT to use the bubble pattern

- **Pure narration scenes** — no character speaking aloud, just the world being
  described. (E.g. the day's weather rolling in mid‑trip — narrator italic over the
  scene, no bubbles.)
- **The day report** — concrete results, no live dialogue.
- **The desk screen** — a working surface, not a conversation.
- **The trailhead event with a single decision** — if it's "you / the situation"
  prose, narrator is the right voice; bubbles would feel staged.

### Implementation note

In `index.html`: the `sceneStage(assetId, bubbles, opts)` helper renders the scene image
with bubble overlays positioned via the `kind` field (mum / mum-2 / thought / off-frame
/ icon). CSS classes `.scene-stage` (the wrapper), `.bubble`, `.bubble.mum`,
`.bubble.thought`, `.narrator` carry the look. Beats re‑render the same wrapper with
different bubbles — image stays cached, conversation moves.

---

## 13. When in doubt

Put the new frame next to `assets/title/title-cover.webp` (*The First Booking*) and ask:
*do they sit on the same shelf?*

If the new picture is **cold** where the reference is warm — wrong.
If the new picture has **floating elements** where the reference has objects on a surface — wrong.
If the new picture is **generic Mediterranean** where the reference is *Messinia* — wrong.
If the new picture is **clean dashboard** where the reference is *paper, dust, an open window* — wrong.

**The compass**: editorial gouache + woodcut bones, on a real surface, in Messinia, with
real objects doing real work. The desk. Warm. Hand‑made. Mediterranean. The world is
*outside* through a window the whole time. Characters speak in bubbles inside the scene;
the narrator stays quiet underneath in italic.
