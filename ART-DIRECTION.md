# ART-DIRECTION.md — The visual doctrine

The canonical home for *how the game looks*. Style, palette, composition, subject matter,
typography, locked decisions, worked references and anti‑patterns. The visual sibling of
`LANGUAGE.md` — read both before you make a single asset.

LANGUAGE sets the voice; ART-DIRECTION sets the surface. They are written to be cross‑
referenced — if a line in `LANGUAGE.md` permits a beat, a frame in this doc should be able
to carry it without translation. Mum addressing the icon over the door, the German couple
weeping gently at a goat, the Hilux on the morning it lands — the prose and the picture
have to feel like the same world.

---

## 1. The thesis

**Editorial Mediterranean — gouache colour, woodcut bones.**

A composed, hand‑made surface. Warm matte colour blocks pulled from the Messinian palette
(terracotta, sun‑olive, deep Ionian, limestone bone, ink), laid over disciplined line work
that holds at thumbnail size. Closer to a New Yorker travel spot or a 1960s shipping‑line
poster than to game‑art conventions. Folkloric grounding without kitsch; illustrated, never
photographed; opinionated, never neutral.

The picture does what the prose does: it carries the **comic by default, ache where earned,
parody where the moment lifts** register from `LANGUAGE.md §2`. A goat in the foreground
of a serious dawn ridgeline is *allowed*. The K2‑geared client among the olive trees is
*allowed*. The Hilux at first light, alone in the yard, is *quiet on purpose*.

---

## 2. The visual ratio (mirroring the prose)

The prose runs comic by default, pathos rationed to four spots, parody welcome elsewhere.
The image follows the same dial.

- **Default register: warm, dry, populated.** Mid‑distance, a person or a group, a place
  doing its work. Comedy lives in the *gesture* (the over‑packed pack, the cousin's
  spanner, the influencer's tripod, the goat) — not in faces mugging at camera.
- **Parody‑lifted register: heightened, additive, never mean.** One more figure than the
  joke needs. The English podcaster filming the German couple filming the goat. The bouzouki
  busker on the bus. Lean in, but the line work stays clean — the joke is the composition,
  not the rendering.
- **Pathos register: still, single, low‑contrast.** Reserved for the same four beats prose
  reserves it for — phase transitions, a named guide's arc, the trail‑days drift, the
  ending. Drop figures. Drop saturation a notch. Hold the frame longer. The Hilux in the
  yard at first light is *one shape* — the truck, the dust, the door.

Never milk a pathos frame. The contrast against the comic baseline does the work; if you
soak the image in mood, you have lost the contrast and you have lost the beat.

---

## 3. Style rules

### Surface
- **Matte gouache feel** — opaque, slightly chalky, no glossy gradients, no airbrush, no
  drop shadow. Texture is permitted (paper grain, ink bleed at line ends) but stays subtle;
  the picture is *illustrated*, not *distressed*.
- **Limited palette per frame** — never more than the five core hues plus one seasonal
  accent (see §4). A frame that needs a sixth colour is a frame with a composition problem.
- **Flat lighting, directional shade.** A single warm sun source, shadows as a single
  block of a darker neighbour hue — never a black drop. The midday Messinian sun is *hard*
  but the rendering does not melodramatise it.

### Line
- **Woodcut bones underneath.** Every silhouette reads at 24px. The line is the spine; the
  colour is the warmth. Think Tassos (the Greek folk woodcut tradition), Hugo Pratt's
  Mediterranean panels, Edward Bawden's travel posters — that family of mark‑making.
- **One weight per figure tier.** Foreground figure: a confident ~2px line. Mid‑ground
  village/landscape: ~1.25px. Background ridge: a hairline or no line at all, carried by
  colour shape only.
- **No outlines on landscape masses.** Hills, sea, sky are colour blocks; line is for
  figures, structures, and tools.

### Form
- **Slightly stylised, never cute.** Heads sized right, hands a touch larger than naturalism
  to carry gesture, feet planted. No chibi proportions. No anime eyes. No big‑head/small‑
  body. Characters are *adults with backstories*, not mascots.
- **Gesture over expression.** Reading a sky, lacing a boot, handing over a bottle, leaning
  on a moped, opening a thermos — the *action* tells you who they are. Faces stay legible
  but unstrained; the smirk is in the posture.
- **Composed asymmetry.** No centred, postcard symmetry. Place the figure off‑axis, let the
  ridge lead the eye, give the frame somewhere to breathe.

### Motion
- **The frame is still.** No motion lines, no speed streaks, no sparkles, no glow. If a
  moment needs to feel kinetic, do it with diagonal composition and a leaning figure — not
  with effects.

---

## 4. Palette

Five locked core hues plus one rotating seasonal accent. The token names are deliberately
chosen so we can move them into CSS variables when the time comes (`--terra`, `--olive`,
`--sea`, `--bone`, `--ink`, `--accent` — see existing variables in `index.html`).

### Core (always available)
| Token | Hex | Sample meaning |
|---|---|---|
| **Terra** — roof‑tile clay, dusk hill | `#C8633D` | Kalamáta rooftops, the moped tank, the trail dust at four o'clock |
| **Olive** — dry sun‑olive, sage | `#7E8A4B` | Olive groves, hillside scrub, the Hilux paint after a season |
| **Sea** — deep Ionian, evening Aegean | `#1F4A56` | Voidokiliá in shadow, the kayak hull, the kafeneío door |
| **Bone** — warm limestone, taverna wall | `#EEE5D2` | Page ground, plate, oilcloth, low cloud, Mum's apron |
| **Ink** — warm near‑black | `#1B1B1F` | Line work, type, the iron skillet, the meltémi sky at its worst |

### Seasonal accent (one at a time, ~10–15% of the frame)
| Season | Accent | Hex | Where it shows up |
|---|---|---|---|
| Spring (pre‑season, March) | **Oleander** — soft pink | `#D87596` | Flowering verge, scarf, a tin's painted lid |
| Summer (April – Oct) | **Noon gold** — sun on stone | `#E0A951` | Trophy light on a wall, the harvest, a beer label |
| Autumn (post‑season, Nov) | **Cypress** — black‑green | `#2E3A2C` | Cemetery cypresses, late vines, a guide's wool jumper |
| Winter (cert school, Dec – Mar) | **Rain grey** — wet stone | `#7A8088` | Wet road, the office window, a soaked tarp |

### Palette rules
- **Never six.** If you need a sixth hue you are doing two pictures in one frame — split it.
- **Accent is supporting cast.** Bone, terra, olive, sea, ink do 85% of the work. The
  accent earns the eye — one shape, one moment.
- **Sea and Ink can sit on each other** for nocturnes; everything else needs a bone buffer.
- **No pure white, no pure black.** The bone and ink tokens are the limits.

---

## 5. Composition principles

Things that make a frame ours instead of generic Mediterranean illustration.

- **Mid‑distance figure, named place.** The dominant unit is a person at full body, not a
  portrait crop and not a postcard landscape. The place is recognisable (Voidokiliá's
  crescent, Polylímnio's tiered pools, the Mani tower) but the *person* is the subject.
- **One protagonist, one antagonist (often weather).** A guide and a sky. A guide and a
  goat. A guide and a coach. The frame has a tension; it is not a tableau.
- **The horizon is doing work.** A sloped horizon implies wind. A high horizon presses the
  figure. A low horizon makes the day bigger than the problem. Pick.
- **Tools, named.** Map, rope, paddle, ouzo glass, kombolói, thermos, head torch. A frame
  with the right tool in the right hand says more than any caption. Tools are drawn
  *specifically* — not "a rope," *a Beal Industrie 9.8mm in the canyon kit.*
- **Greek specificity over Mediterranean default.** Whitewashed and blue is *the Cyclades*.
  Messinia is **rooftiles, sun‑bleached plaster, dusty olive, deep stone harbours, slate‑
  grey Mani towers, eucalyptus.** Get this right; it is the whole credibility move.
- **Nothing decorative.** Every object in the frame is doing one of three jobs: telling us
  where, telling us who, or telling us what just happened.

---

## 6. Subject matter inventory

What we will actually need to draw. This is the asset list this doc is written to brief.

### A. The ten heroes (locked — see `HEROES.md`)
Each has a fixed gender so Mum's diminutive lands; each has a *signature object* that should
recur across their card, their reveal, and any panigíri send‑off frame.

| # | Hero | Signature object | Locked gesture |
|---|---|---|---|
| ① | The almost‑doctor (♂) | a small green medic kit, taped at the corner | running a thumb along a strap, checking, checking again |
| ② | The Mykonos chef (♂) | a foil parcel from the kitchen, a sea‑bream tattoo on the forearm | passing food, never quite hungry himself |
| ③ | The army washout (♀) | a windworn map, edges curled | reading a sky like a sentence |
| ④ | The deckhand (♀) | a coiled bow line, calloused knuckles | hand on a kayak, eyeing the bay |
| ⑤ | The influencer (♀) | a phone on a small tripod, ring light folded | half a step ahead of the group, framing |
| ⑥ | The startup engineer (♂) | a clipboard, a multi‑tool clipped to the belt | counting the souvláki throughput |
| ⑦ | The philologist (♀) | a slim notebook in four scripts | mid‑sentence, the group leaning in |
| ⑧ | The Fasaia (♀) | a hand‑woven scarf, beads | breath in, group settling, panigíri behind |
| ⑨ | The Alani (♂) | a leather wristband, cigarette unlit | leaning on a moped, *knowing* a guy |
| ⑩ | The Greek Villager (♂) | a worn olive‑prune blade, a cousin in the frame | hand on a wall that used to be his |

Mum is **never the hero**. She recurs (kitchen, callbacks) and is drawn from **the back, or
the hands, or the back of the head** — never face‑on. Her presence is the oven light and
the wooden spoon.

### B. The places (real, accurate)
The route cards and transition frames. Accents preserved (see `LANGUAGE.md §4`).

- **Kalamata** — the kitchen, the harbour, the KTEL bus station, the kafeneío door
- **Polylímnio** — the tiered waterfall pools, slick green stone
- **Voidokiliá / Gialova** — the crescent dune, the lagoon flamingoes, Pylos's fort behind
- **Methóni / Koróni / Finikoúnda** — Venetian castle silhouettes, fishing‑port harbours
- **Ancient Messene & Mavromáti** — broken columns at low‑angle light, the spring
- **Neda gorge** — narrow ribs of stone, the green pools
- **Menalon / Lousios** — forested gorge, monastery on a ledge, suspension bridge
- **Taygetos** — alpine ridge, snow into June, the cell of Profítis Ilías at the summit
- **Mani — Cape Tainaron, Areopoli, Vathiá** — slate‑grey towers, salt scrub, the long road
- **Kardamýli / Stoúpa** — Patrick Leigh Fermor country, plane trees, a stone harbour
- **The panigíri** — strung lights, a long table, the band on a wooden stage

Each place earns **one** locked composition that recurs across menu, route card, and trip
header — so the player learns the place by silhouette.

### C. The companions (noun phrases, never types)
The clients are individuals, not categories. Each gets a *stock pose* the artist can return
to without it becoming a sprite sheet.

- A **family with two young children** — child on shoulders, parent's pack overstuffed
- A **coachload of cruise tourists** — line snaking from a bus, identical lanyards
- **Three photographers chasing the light** — tripods, no patience
- A **corporate team‑lead with a schedule** — branded fleece, phone in hand
- The **over‑equipped K2 client** — full alpine in the olive grove
- A **German couple weeping at a goat** — quietly, sincerely, on cue
- The **English podcaster filming the German couple** — earnestness compounding
- The **bouzouki busker** — instrument case taking a pack slot
- **Kyría Voúla** — small woman, blood‑pressure diary, magnificent dignity
- **Cousin Mitsos** — overalls, spanner, knows where the part is
- **Stelios's brother** — the one with the gear
- **Kostas's boy** — never on screen; the implied threat over every coffee

### D. Vehicles (the transport ladder is plot)
- The **KTEL bus** — yellow‑and‑white, diesel halo, a small dent on the rear bumper
- The **moped** — a cheap two‑stroke, mirror missing, helmet on the seat
- The **Hilux** — the protagonist (see Mum's "It runs," pathos beat) — a single battered
  dark‑olive truck, a roof rack, dust on the headlights
- The **rack / trailer** — the SUP/bike capacity unlock — frame‑accurate, no sparkle

### E. Disciplines (the seven activity glyphs)
For the day‑screen instrument strip and the discipline pick. **Diagrammatic, no text,
~32×32 woodcut‑clean.** Drawn as if etched into a brass plate.

- Hike — a boot on a contour
- Sea kayak — a paddle blade, dripping
- Canyon — a knotted rope
- Raft — an oar, water curl
- Cycle — a pedal crank
- SUP — a board edge, paddle T‑grip
- Climb — a cam, a karabiner

(Phase 3 future: sail, snorkel, paraglide.)

### F. Weather (the day's drama)
Five core states + one instability marker. Drawn as **iconographic glyphs** in the forecast
strip, and as **full skies** in trip headers.

- **Clear** — `☼` and a clean horizon
- **Hot** — a heavier sun, heat shimmer above the rock
- **Windy (meltémi)** — bent grass, sloped horizon, a flag at the dock
- **Drizzle / mist** — a low ceiling on the ridge, slick stone
- **Storm** — bruise‑coloured horizon, the meltémi at its worst
- **Unstable** — a half‑sun / half‑cloud composite glyph, the *turn* marker

### G. UI chrome (deferential)
- **Logbook** — a real linen‑bound notebook, never a UI panel
- **Pack** — a flat lay of items, gouache style, on bone ground
- **Certificate** — a real HATEOA / Paddle UK / EU rope‑access stamp aesthetic, deadpan
- **Loan paperwork** — bank stamp red, friend's note on a torn page, dark loan on bar‑receipt paper

### H. Title plate & cover
- **"Outdoor Guide Life"** — serif, large, in ink on bone
- **"or no Life"** — italic, smaller, in **noon gold**, slightly off‑axis below
- **Kicker** — `A CAREER IN THE OUTDOORS, MONEY, AND MINOR CATASTROPHES.` — Spline Sans Mono
  small caps, wide‑tracked, in ink

---

## 7. Typography & dingbats

Type rules live in `LANGUAGE.md §5`; this section adds only the *visual* extensions.

- **Serif** for narrative and long copy — Fraunces or Spectral, the existing pairing. Cut
  with the gouache surface as if printed; ink token, never coloured.
- **Spline Sans Mono** for instruments and `ALL‑CAPS WIDE‑TRACKED` chrome labels — laser
  etched into brass, ink on bone, slightly squarer than the body face.
- **Sanctioned dingbats** `▸ ▶ ✓ ✦ ▦ ☼ ❧ ⌂ ✕ ≡ · — ☾ ⚒ ◈ ✂ +` are the only icon
  language. They are rendered at the type weight, not enlarged into glyph art. **Never
  emoji.** Ever.
- **Negative space is a tool.** Bone is allowed to do nothing. A frame with one figure and
  a wide bone field beats a frame with three figures fighting for it.

---

## 8. Locked decisions

These are settled. Treat as canonical; do not re‑open without flagging.

- **Pixel art is RETIRED.** The earlier 2D pixel‑art direction has been removed from the
  repo (commit `7b27416`). No 8/16/32‑bit references, no chunky pixels, no scanlines, no
  dithering. Editorial gouache is the line.
- **No emoji.** Mirrors `LANGUAGE.md §5`. Dingbats only, from the sanctioned set.
- **No drop shadows, no glow, no gradients, no glass.** Matte surface, always.
- **No motion FX.** No streaks, sparkles, particle bursts. Movement is implied by
  composition.
- **Five core hues plus one seasonal accent.** Hard rule. See §4.
- **One protagonist per frame** — exceptions are *parody‑lift* frames where the joke needs
  the extra figure, and *crowd* frames (panigíri, the coach) where the *crowd is the
  protagonist*.
- **Mum is drawn from behind**, never face‑on. The icon over the door does the face work.
- **Hero gender is locked** per character (see `HEROES.md`). No swap; no neutral version.
  The signature object and gesture in §6 carry across every frame they appear in.
- **Places are real.** No invented place names, no composite "Mediterranean village." If we
  cannot draw it, we draw a different real place.
- **The Hilux is the only sentimental object.** Other tools are tools.

---

## 9. Worked example — one beat, three angles

A trip‑complete frame, end of a hard‑weather day at **Polylímnio**.

### Reverent (avoid — drains the room)
A wide landscape: the green pools, low evening sun, the silhouette of the guide alone on
the rock, head bowed. Sea token, bone sky, no figures beyond the silhouette. A poster.

This is technically Messinian and chromatically correct and *says nothing.* It is what an
AI thinks the game looks like.

### Comic‑heightened (the baseline target)
Mid‑shot, evening. The guide on the rock by the lower pool, drying a paddle on their thigh.
In the mid‑ground, the German couple is photographing a goat. Behind them, the English
podcaster is filming the couple. The sky is the *unstable* glyph come true — half clear,
half bruise. Five hues at work — terra (rock), olive (scrub), sea (pool), bone (sky),
ink (line). Accent gold catches the paddle blade. The guide's expression is barely there;
the *shoulders* carry it. Comedy lives in the staging; the guide is the ache.

### Parody‑pushed (acceptable for non‑pathos beats)
Same composition, one more figure: a coach has appeared on the upper road, a line of
identical lanyards spilling out of it, the first one already filming. The goat has had
enough and is walking off. The podcaster turns, sensing competition. The guide has not
moved. The accent gold now hits the coach's chrome trim — the joke has acquired a hat.

(Reserve the **single‑shape Hilux at first light** for the pathos register. Do not put it
here.)

---

## 10. Anti‑patterns

Things that have been tried in adjacent genres and would visibly clash here.

- **Pixel art / 16‑bit nostalgia surface.** Retired. See §8.
- **Anime / chibi / mascot character art.** Big heads, small bodies, sparkly eyes — the
  whole "cute" vector. The heroes are *adults with backstories*; draw them as such.
- **Vector flat‑design / corporate Memphis / Notion illustration.** The blobby beanstalks,
  the floating laptops, the disembodied hands. Reads as marketing site, kills the world.
- **Photoreal / 3D / rendered.** No CGI surface, no octane glow, no HDR sky. The picture is
  illustrated.
- **Santorini cliché.** Whitewashed buildings, blue domes, infinity sea. That is the
  *Cyclades*. Messinia is *terracotta, sun‑olive, slate Mani grey, deep harbour stone.*
- **Generic Mediterranean.** A composite village that could be Tuscany, Provence, or
  Croatia. Either it is a *real Messinian place* (§6B), or it does not appear.
- **AI slop tells.** Six fingers, mush in the background, glossy plasticky surface, ten
  hues no one chose. If a frame looks like prompt output, it does not ship.
- **Cute weather characters.** Smiling clouds, winking suns, sad‑face rain. The weather
  is a *force*; it does not have a personality.
- **Drop shadows, gradients, glow.** See §3 and §8.
- **Emoji.** See §7 and `LANGUAGE.md §5`.
- **Decorative ornament.** Floral borders, ouzo‑bottle filigree, evil‑eye motifs as
  spacers. If an object is not telling us where / who / what, it is not in the frame.

---

## 11. When in doubt

Stand the frame next to a line from `LANGUAGE.md §7` and ask: *do they sound like the same
game?* If the prose is dry and the picture is precious, the picture is wrong. If the prose
is parody‑pushed and the picture is reverent, the picture is wrong. If the prose is quiet
and the picture is busy, the picture is *very* wrong.

**The compass**: editorial Mediterranean — matte colour, woodcut bones, five hues plus one.
A person doing a thing in a real place under a sky that has its own opinion. Comic by
default. Parody where the line earns it. Still and single when the ache lands.

Warm. Hand‑made. Peloponnese.
