# PROMPT-PACK.md — ChatGPT prompts, copy‑paste ready

Every prompt below is a **single continuous block of natural language**, written for
ChatGPT's image generation (GPT‑Image / DALL·E / whichever current model the chat surface
uses). No `--` parameters, no special syntax — paste the whole block into a chat, hit enter,
get an image. Pair‑read with `ART-DIRECTION.md` (the doctrine these encode) and
`ASSET-MANIFEST.md` (the asset list and filenames).

> **The single biggest consistency lever**: pick ONE approved image as your reference
> and reuse it across every batch. The workflow: generate your first image from the
> §3 anchor alone (no reference attached), approve it, then for every subsequent batch
> **start a new ChatGPT conversation, upload that approved image as the first
> attachment**, and prefix with: *"Match the wet-wash watercolor surface, fountain-pen
> ink line, paper-showing-through feel, palette, and Mediterranean atmosphere of the
> reference image exactly. Generate the next image in the same illustrated series."*

---

## 1. Workflow

1. **Pilot trio (§4)** — three separate ChatGPT conversations, one per pilot. Paste, generate.
2. **Wall test** — put the three images side by side (download them, drag them into one
   window). If they feel like the same game, lock the style and move on. If not, tweak the
   style anchor (§3) and re‑roll the affected pilot.
3. **Style reference lock (§5)** — save `pilot-01-hero-alani.png` locally. From now on,
   every new batch starts a new conversation with pilot‑01 uploaded as the first attachment.
4. **Batch by tier** — Tier A → Tier B (10 heroes, *one conversation*) → Tier E (10 places,
   *one conversation*) → Tier F → Tier G → Tier C/D (glyphs — see §11, ChatGPT is fine for
   reference but a vector tool is faster for icons).
5. **Within a conversation**, just ask for "the next image in the same series" — ChatGPT
   keeps the style consistent across turns of a single chat much better than across separate
   chats.
6. **Save** with the filename from each prompt's header. Drop into the matching
   `assets/<tier>/` subfolder.
7. **Wire it up**: add one line `id → path` to the `ASSETS` map in `index.html` (around
   line ~470). The pre‑wired slots pick it up automatically.

---

## 2. How ChatGPT image generation works

No `--` parameters or special syntax: everything goes in the prompt body as plain
language. The conventions these prompts rely on:

| Goal | How to express it in the prompt |
|---|---|
| Aspect ratio | "as a wide landscape composition, about 20:9 ratio, with critical content in the central 16:9 safe zone" |
| Negative prompt | "Do not include X, Y, Z" sentences in the prompt body |
| Style reference | upload the reference image into the chat + a text instruction to match it |
| Character reference | upload the face + "give this person the same face" |
| Literal rendering | "render this in a literal, illustrated style, not stylised toward your house aesthetic" |
| Consistency within a batch | stay in the same conversation; ask for "the next image in the same series" |
| Legible text | reliable -- you can ask for legible signs, labels, or handwriting |

ChatGPT is **literal and reverent**: it follows long, structured, detailed prompts
faithfully. Lean into specificity -- the prompts below are long because length is the
cost of getting exactly what you want.

---

## 3. The locked style anchor — *ink‑and‑watercolor travel*

Every prompt opens with this paragraph, **verbatim**. The desk metaphor, the five UI
surfaces, the bubble-flow pattern, the five-colour palette, and the Greek specificity
all live downstream of it; this paragraph fixes *how the pigment sits on paper*.

> *Render this as an ink‑and‑watercolor travel illustration — the visual register of a
> Moleskine travel‑journal page or a mid‑century Mediterranean travel‑guidebook plate.
> Wet, translucent watercolor washes with natural soft edges, gentle bleeds at wash
> boundaries, and visible granulated pigment pooling where the brush lifted. Loose
> hand‑drawn ink line work in warm sepia‑black, made with a fountain pen on paper —
> confident but slightly wobbly, with varying line weight from the pen's natural pressure;
> never a uniform machine‑precise stroke. White‑of‑paper gaps where the watercolor wash
> didn't reach: the warm limestone bone‑cream paper surface is part of the image, not a
> continuous fill, and several passages of every frame are simply the paper showing
> through. Limited five‑colour palette, each colour applied as a wet wash (translucent,
> not opaque): warm terracotta clay, sun‑bleached olive sage, deep Ionian sea blue, warm
> limestone bone (the paper itself), and warm near‑black ink for the line work — plus
> exactly one seasonal accent specified per asset, also as a wash. Bright Mediterranean
> afternoon light: warm bone‑cream paper holds the bright passages; a single saturated
> wash holds the shadow. Loose, hand‑made, observed sketch energy — opinionated but
> never tightly rendered or overworked. In the spirit of Liz Steel's travel watercolors,
> Lapin's Mediterranean sketchbooks, David Hockney's travel sketches, and mid‑century
> European travel‑guidebook illustration. This is INK and WATERCOLOR on paper — NOT
> gouache, NOT digital flat‑design, NOT a vector graphic, NOT photographic, NOT 3D
> rendered, NOT a cartoon, NOT anime, NOT chibi, NOT a CG render.*

---

## 4. The pilot trio — DO THESE FIRST

Each block below is one prompt. Open a new ChatGPT conversation. Paste the **entire** code
fence content. Generate. If you re‑roll, send: *"Try again — same prompt, same style, just
a fresh take."*

### `pilot-01-hero-alani` — comic default register · noon‑gold accent
Save to: `assets/heroes/hero-09-alani.png`

```
Render this as an ink-and-watercolor travel illustration — the visual register of a Moleskine travel-journal page or a mid-century Mediterranean travel-guidebook plate. Wet, translucent watercolor washes with natural soft edges, gentle bleeds at wash boundaries, and visible granulated pigment pooling where the brush lifted. Loose hand-drawn ink line work in warm sepia-black, made with a fountain pen on paper — confident but slightly wobbly, with varying line weight from the pen's natural pressure; never a uniform machine-precise stroke. White-of-paper gaps where the watercolor wash didn't reach: the warm limestone bone-cream paper surface is part of the image, not a continuous fill, and several passages of every frame are simply the paper showing through. Limited five-colour palette, each colour applied as a wet wash (translucent, not opaque): warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone (the paper itself), and warm near-black ink for the line work — plus exactly one seasonal accent of noon gold, also as a wash. Bright Mediterranean afternoon light: warm bone-cream paper holds the bright passages; a single saturated wash holds the shadow. Loose, hand-made, observed sketch energy — opinionated but never tightly rendered or overworked. In the spirit of Liz Steel's travel watercolors, Lapin's Mediterranean sketchbooks, David Hockney's travel sketches, and mid-century European travel-guidebook illustration. This is INK and WATERCOLOR on paper — NOT gouache, NOT digital flat-design, NOT a vector graphic, NOT photographic, NOT 3D rendered, NOT a cartoon, NOT anime, NOT chibi, NOT a CG render.

Frame this as a wide landscape composition, about 20:9 ratio (most modern phones in landscape), with the figure in the LEFT third of the frame and the rest of the canvas given to his Messinian context — the kafeneío door, the moped, the dusty road. The right portion of the frame should leave breathing room (could be a wash of bone-cream paper, partial wash of terracotta dust, or quiet middle-distance) — this is where the game UI will sit. Keep the figure and any key context detail within the central 16:9 SAFE ZONE so they survive on narrower desktop viewports. The whole image must read as a landscape painting from a travel sketchbook, not a portrait crop.

Subject: A Greek man in his early thirties leaning back against the seat of a cheap two-stroke moped parked outside a village kafeneio in Messinia, mainland southern Greece. He wears a faded olive button-down shirt with sleeves rolled to the elbow, jeans, dusty boots, and a worn leather wristband on his right wrist. An unlit cigarette is tucked behind his right ear. He has a half-knowing smirk, and his eyes glance off-frame to the left as if greeting someone just outside the frame. The kafeneio doorway is in deep Ionian shadow behind him, with a hand-painted Greek sign above it (the lettering should be an undecipherable hand-painted shape, not legible text). Late afternoon light, terracotta dust on the road. Compose him as a mid-shot, waist-up, single figure positioned slightly off-axis in the frame. The noon-gold accent should appear in exactly one place: catching the moped tank's chrome and the painted sign's lettering — nothing else.

Do not include: any legible text, captions, labels, watermarks or signatures; no emoji, drop shadow, glow, gradient, sparkle, motion blur, or lens flare; no anime, chibi, mascot, cute, or cartoon styling; no photorealism, 3D render, octane render, or HDR look; no vector or flat-design graphic look; no corporate-Memphis illustration style; no Santorini whitewash, no blue domes; no decorative ornamental borders; no AI artefacts (no extra fingers, no fused limbs, no melted faces). The man should have realistic adult human proportions, not stylised toward cute.
```

### `pilot-02-place-voidokilia` — place silhouette · noon‑gold accent
Save to: `assets/places/place-voidokilia.png`

```
Render this as an ink-and-watercolor travel illustration — the visual register of a Moleskine travel-journal page or a mid-century Mediterranean travel-guidebook plate. Wet, translucent watercolor washes with natural soft edges, gentle bleeds at wash boundaries, and visible granulated pigment pooling where the brush lifted. Loose hand-drawn ink line work in warm sepia-black, made with a fountain pen on paper — confident but slightly wobbly, with varying line weight from the pen's natural pressure; never a uniform machine-precise stroke. White-of-paper gaps where the watercolor wash didn't reach: the warm limestone bone-cream paper surface is part of the image, not a continuous fill, and several passages of every frame are simply the paper showing through. Limited five-colour palette, each colour applied as a wet wash (translucent, not opaque): warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone (the paper itself), and warm near-black ink for the line work — plus exactly one seasonal accent of noon gold, also as a wash. Bright Mediterranean afternoon light: warm bone-cream paper holds the bright passages; a single saturated wash holds the shadow. Loose, hand-made, observed sketch energy — opinionated but never tightly rendered or overworked. In the spirit of Liz Steel's travel watercolors, Lapin's Mediterranean sketchbooks, David Hockney's travel sketches, and mid-century European travel-guidebook illustration. This is INK and WATERCOLOR on paper — NOT gouache, NOT digital flat-design, NOT a vector graphic, NOT photographic, NOT 3D rendered, NOT a cartoon, NOT anime, NOT chibi, NOT a CG render.

Frame this in wide landscape orientation, about 20:9 ratio (modern phone landscape). Keep critical compositional elements within the central 16:9 safe zone so they survive narrower viewports.

Subject: Voidokilia Bay in Messinia, mainland southern Greece — the famous perfect crescent dune, seen from the elevation of the Pylos fort side at mid-afternoon. The crescent of pale bone-cream sand curves left to right across the lower third of the frame. Deep Ionian sea blue fills the bay. Sun-bleached olive sage scrub clings to the dunes. The inland Gialova lagoon is visible behind the dune ridge, with three small flamingo silhouettes far in the distance. On the far right, the silhouette of a Venetian fortress sits on a low promontory. Two small human-scale figures walk the dune edge mid-frame for scale, drawn with ink linework. The horizon is very slightly sloped right-to-left, implying a light meltemi wind off the gulf. The noon-gold accent should appear in exactly two small places: catching the fortress wall in afternoon light, and one of the figures' hats — nothing else.

This is mainland Messinia in southern Greece, NOT the Cycladic islands. Critically important: do not include any whitewashed buildings, no blue-domed churches, no infinity-pool aesthetic, no cruise-port look. Do not include: any legible text, watermarks or signatures; no emoji, drop shadow, glow, gradient, sparkle, or lens flare; no anime, chibi, mascot, cute, or cartoon styling; no photorealism, 3D render, or HDR look; no vector or flat-design graphic look; no decorative ornamental borders; no AI artefacts.
```

### `pilot-03-scene-hilux-dawn` — pathos still · rain‑grey accent · NO FIGURES
Save to: `assets/scenes/scene-hilux-dawn.png`

```
Render this as an ink-and-watercolor travel illustration — the visual register of a Moleskine travel-journal page or a mid-century Mediterranean travel-guidebook plate. Wet, translucent watercolor washes with natural soft edges, gentle bleeds at wash boundaries, and visible granulated pigment pooling where the brush lifted. Loose hand-drawn ink line work in warm sepia-black, made with a fountain pen on paper — confident but slightly wobbly, with varying line weight from the pen's natural pressure; never a uniform machine-precise stroke. White-of-paper gaps where the watercolor wash didn't reach: the warm limestone bone-cream paper surface is part of the image, not a continuous fill, and several passages of every frame are simply the paper showing through. Limited five-colour palette, each colour applied as a wet wash (translucent, not opaque): warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone (the paper itself), and warm near-black ink for the line work — plus exactly one seasonal accent of rain grey, also as a wash. Bright Mediterranean afternoon light: warm bone-cream paper holds the bright passages; a single saturated wash holds the shadow. Loose, hand-made, observed sketch energy — opinionated but never tightly rendered or overworked. In the spirit of Liz Steel's travel watercolors, Lapin's Mediterranean sketchbooks, David Hockney's travel sketches, and mid-century European travel-guidebook illustration. This is INK and WATERCOLOR on paper — NOT gouache, NOT digital flat-design, NOT a vector graphic, NOT photographic, NOT 3D rendered, NOT a cartoon, NOT anime, NOT chibi, NOT a CG render. Pull the palette saturation down a notch for this pathos beat — washes thinner and more grey-leaning than usual.

Frame this as a wide cinematic landscape, about 20:9 ratio (modern phone landscape). Keep critical compositional elements within the central 16:9 safe zone so they survive narrower viewports.

Subject: A battered dark-olive Toyota Hilux pickup truck, alone in a rural Kalamata village yard at first light. The truck is shown side-on, positioned slightly off-centre, the only object that carries weight in the frame. It is a working farm vehicle: dust on the headlights, a steel roof rack overhead, a small dent on the rear bumper, an aftermarket tow bar. Pale bone-cream pre-dawn sky fills the upper two thirds of the frame. Terracotta dust on the dirt yard fills the lower third. A low fieldstone wall sits behind the truck, rendered in rain-grey shadow. The rain-grey accent appears only in the wall and the truck's underside shadow.

Critically important: this image must be completely empty of any people, any animals, any birds, any movement. No human figures of any kind. No protagonist. No mother in a doorway. No silhouettes in a window. The Hilux is alone. This is a quiet, still, pathos beat — the morning after a mother said "It runs. That is enough." The stillness is the entire point. Do not add any figures.

Also do not include: any legible text or labels (no number plate text, no sign text); no emoji, drop shadow (other than the truck's own ground shadow), glow, gradient, sparkle, lens flare, or motion blur; no anime, chibi, mascot, cute, or cartoon styling; no photorealism, 3D render, octane render, or HDR look; no vector or flat-design graphic look; no decorative ornament; no AI artefacts.
```

---

## 5. The style reference image lock (after pilot‑01 approval)

This is the most important step for keeping 43 assets feeling like the same game.

1. Approve `pilot-01-hero-alani`. Right‑click → **Save image as…** to your computer.
2. For every subsequent batch (heroes, places, scenes), **start a new ChatGPT conversation**.
3. **Drag pilot‑01 into the chat as an attachment.** Send it as the first message.
4. With the image attached, send this exact preface:

   > *"Use the visual style of the attached reference image as the locked style for this
   > entire conversation. Match its palette, line weight, surface texture, lighting
   > direction, and overall illustrated feel exactly. We are producing a series of
   > illustrations that all need to feel like the same game. I'll give you a series of
   > subjects in subsequent messages — each one should be rendered in this same style. Do
   > not drift toward your default illustration aesthetic; stay anchored to the reference.
   > Acknowledge and I'll send the first subject."*

5. ChatGPT acknowledges. **Then** paste the next prompt from below.
6. After that image generates, just send the next prompt — ChatGPT will keep the reference's
   style locked across the whole conversation.

For **hero portraits** specifically, also append to each prompt: *"Use the same face style
and rendering approach as the reference image — adult Mediterranean Greek features,
realistic proportions, illustrated not photorealistic."*

---

## 6. Tier A — cover & opening (3)

### `scene-kitchen` — opening scene · oleander‑pink accent
Save to: `assets/scenes/scene-kitchen.png`

```
Render this as an ink-and-watercolor travel illustration — the visual register of a Moleskine travel-journal page or a mid-century Mediterranean travel-guidebook plate. Wet, translucent watercolor washes with natural soft edges, gentle bleeds at wash boundaries, and visible granulated pigment pooling where the brush lifted. Loose hand-drawn ink line work in warm sepia-black, made with a fountain pen on paper — confident but slightly wobbly, with varying line weight from the pen's natural pressure; never a uniform machine-precise stroke. White-of-paper gaps where the watercolor wash didn't reach: the warm limestone bone-cream paper surface is part of the image, not a continuous fill, and several passages of every frame are simply the paper showing through. Limited five-colour palette, each colour applied as a wet wash (translucent, not opaque): warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone (the paper itself), and warm near-black ink for the line work — plus exactly one seasonal accent of oleander pink, also as a wash. Bright Mediterranean afternoon light: warm bone-cream paper holds the bright passages; a single saturated wash holds the shadow. Loose, hand-made, observed sketch energy — opinionated but never tightly rendered or overworked. In the spirit of Liz Steel's travel watercolors, Lapin's Mediterranean sketchbooks, David Hockney's travel sketches, and mid-century European travel-guidebook illustration. This is INK and WATERCOLOR on paper — NOT gouache, NOT digital flat-design, NOT a vector graphic, NOT photographic, NOT 3D rendered, NOT a cartoon, NOT anime, NOT chibi, NOT a CG render.

Frame this as a wide cinematic landscape, about 20:9 ratio (modern phone landscape). Keep critical compositional elements within the central 16:9 safe zone so they survive narrower viewports.

Subject: The interior of a working-class Greek mother's kitchen in Kalamata, southern Greece. The kitchen table sits in the foreground covered with an oilcloth painted with cheerful yellow lemons, set with the good plates for guests, four place settings out. A worn wooden spoon rests on a small saucer. The soft warm glow of an oven mid-bake lights the back of the room. The mother is visible only from behind, working dough at the counter — we see her apron strings, her grey hair pinned up, her weathered hands at work. We never see her face. An open doorway at the back of the room leads to a small sun-drenched courtyard, with the late afternoon Mediterranean light spilling across the kitchen floor in warm bands. Intimate, warm, domestic atmosphere. The oleander-pink accent appears only in the painted lemons on the oilcloth and in the apron ties — nothing else.

Critically: the mother must be seen from behind only — no face visible to the viewer. Do not include any other people. Do not include: any legible text or labels; no emoji, drop shadow (beyond the natural floor shadow), glow, gradient, sparkle, or lens flare; no anime, chibi, mascot, cute, or cartoon styling; no photorealism, 3D render, or HDR look; no vector or flat-design graphic look; no decorative ornament beyond the painted oilcloth lemons; no AI artefacts.
```

### `title-cover` — cover plate background only (composite type separately)
Save to: `assets/title/title-cover.png` (background layer; wordmark added separately)

> **Note**: For the actual game title wordmark, generate the background below in ChatGPT
> and composite the type (*A Guide's Life* in serif, *or no Life* in italic noon gold)
> in Figma or Affinity Designer. ChatGPT can do legible text in images, but for a
> brand-critical wordmark, vector typography in a design tool gives sharper results.

```
Render this as an ink-and-watercolor travel illustration — the visual register of a Moleskine travel-journal page or a mid-century Mediterranean travel-guidebook endpaper. Wet, translucent watercolor washes with natural soft edges and gentle bleeds; loose hand-drawn ink line in warm sepia-black ONLY on the rooftop silhouette and the cypress; the sky is a soft single-wash dawn glow with substantial white-of-paper showing through. Limited five-colour palette as wet washes: warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone (the paper itself), and warm near-black ink. Hand-made, opinionated, sketch-energy — never tightly rendered. In the spirit of Liz Steel's travel watercolors, Lapin's Mediterranean sketchbooks, and mid-century European travel-guidebook illustration. This is INK and WATERCOLOR on paper — NOT gouache, NOT digital flat-design, NOT a vector graphic, NOT photographic.

Frame this as a wide cinematic landscape, about 20:9 ratio (modern phone landscape). Keep critical compositional elements within the central 16:9 safe zone so they survive narrower viewports.

Subject: A simple, quiet Mediterranean horizon. The bottom fifth of the frame is a single low strip of terracotta-tiled village rooftops in soft silhouette. The upper four-fifths is a pale bone-cream pre-dawn sky, with one band of warmer terracotta-tinged cloud near the horizon. In the lower right corner, a single thin cypress tree silhouette. This is a quiet establishing shot — the background for a book cover, with text to be added separately later. Leave most of the frame as open sky.

Critically: no people, no figures of any kind, no text, no logo, no wordmark, no buildings other than the rooftop silhouette strip. Do not include: any text, watermark, or signature; no emoji, drop shadow, glow, gradient, sparkle; no anime or cartoon styling; no photorealism or 3D render; no vector or flat-design look; no Santorini whitewash, no blue domes; no decorative ornament.
```

### `title-wordmark` — SKIP in ChatGPT, use a design tool
Use Affinity Designer / Figma / Illustrator. Two lines: *A Guide's Life* in a serif
(Fraunces or Spectral), in ink `#1B1B1F`; *or no Life* in italic, in noon gold `#E0A951`,
slightly off‑axis below. Export as SVG to `assets/title/title-wordmark.svg`.

---

## 7. Tier B — heroes (10)

Open one chat, attach `pilot-01-hero-alani`, send the style‑lock preface from §5, then send
each hero prompt in sequence. Each is a **wide landscape composition, about 20:9 ratio, with the figure in the LEFT third (kept within the central 16:9 safe zone)** and the rest of the canvas given to their natural Messinian context. The right portion leaves breathing room for the game UI to overlay.

### `hero-01-medic` — The almost‑doctor (♂) · rain‑grey accent
Save to: `assets/heroes/hero-01-medic.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is rain grey.

Frame as a wide landscape composition, about 20:9 ratio (most modern phones in landscape), with the figure in the LEFT third and the rest of the canvas given to their natural Messinian context (where they would be found — see subject for the where). The right portion of the frame should leave breathing room — partial wash of context, paper showing through — for the game UI to sit on top. Keep all critical compositional elements (the figure, any key context detail) within the central 16:9 SAFE ZONE so they survive when the image is shown on narrower 16:9 desktop viewports. Landscape composition, not a portrait crop.

Subject: A Greek man in his early thirties, the almost-doctor. He holds a small green canvas medic kit with a white cross, taped at one corner where the seam is wearing. His right thumb runs along a kit strap, checking and re-checking. He wears a worn faded outdoor button-down and trekking trousers. Short dark hair. Kind, concerned eyes glancing down at the kit. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background with a hint of cloud and the quiet light of a hospital corridor at the edge. Gentle, cautious posture. The rain-grey accent appears only in the medic kit's webbing straps and in the corridor shadow behind him.

Greek man, adult realistic proportions, illustrated not photographic. Do not include scrubs, hospital uniform, surgical mask, or stethoscope around the neck. Do not include any text or labels on the kit. No emoji, drop shadow, glow, gradient, sparkle. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts (no extra fingers, no fused limbs, no melted face).
```

### `hero-02-chef` — The Mykonos chef (♂) · noon‑gold accent
Save to: `assets/heroes/hero-02-chef.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is noon gold.

Frame as a wide landscape composition, about 20:9 ratio (most modern phones in landscape), with the figure in the LEFT third and the rest of the canvas given to their natural Messinian context (where they would be found — see subject for the where). The right portion of the frame should leave breathing room — partial wash of context, paper showing through — for the game UI to sit on top. Keep all critical compositional elements (the figure, any key context detail) within the central 16:9 SAFE ZONE so they survive when the image is shown on narrower 16:9 desktop viewports. Landscape composition, not a portrait crop.

Subject: A Greek man in his early thirties, the once-celebrated Mykonos chef. He is passing a foil-wrapped parcel of food forward with both hands to someone just off-frame. A small sea bream fish tattoo on his right forearm. A weathered chef's apron tied loose over a faded t-shirt. A slight half-smile — not quite hungry himself, the kind who feeds others first. Dark hair pushed back from his forehead. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background with a hint of warm taverna kitchen depth behind him. Generous, welcoming gesture. The noon-gold accent appears only in the foil of the food parcel and in the apron's stitching.

Greek man, adult realistic proportions, illustrated not photographic. Do not include a tall white chef's toque or restaurant uniform. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-03-soldier` — The army washout (♀) · rain‑grey accent
Save to: `assets/heroes/hero-03-soldier.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is rain grey.

Frame as a wide landscape composition, about 20:9 ratio (most modern phones in landscape), with the figure in the LEFT third and the rest of the canvas given to their natural Messinian context (where they would be found — see subject for the where). The right portion of the frame should leave breathing room — partial wash of context, paper showing through — for the game UI to sit on top. Keep all critical compositional elements (the figure, any key context detail) within the central 16:9 SAFE ZONE so they survive when the image is shown on narrower 16:9 desktop viewports. Landscape composition, not a portrait crop.

Subject: A Greek woman in her early thirties, cut on the final day of special-forces selection. She holds a windworn topographic map with curled edges in both hands, but her eyes are off-frame upward, reading the sky like a sentence. Short, pragmatic dark hair. A technical olive softshell jacket. Alert, calm posture with the wind moving in her clothes. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream sky background with bruise-coloured weather forming in the upper right corner. The rain-grey accent appears only in the gathering storm clouds and in the map's well-worn creases.

Greek woman, adult realistic proportions, illustrated not photographic. Do not include military uniform, camouflage, or any weapon. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-04-sailor` — The deckhand (♀) · noon‑gold accent
Save to: `assets/heroes/hero-04-sailor.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is noon gold.

Frame as a wide landscape composition, about 20:9 ratio (most modern phones in landscape), with the figure in the LEFT third and the rest of the canvas given to their natural Messinian context (where they would be found — see subject for the where). The right portion of the frame should leave breathing room — partial wash of context, paper showing through — for the game UI to sit on top. Keep all critical compositional elements (the figure, any key context detail) within the central 16:9 SAFE ZONE so they survive when the image is shown on narrower 16:9 desktop viewports. Landscape composition, not a portrait crop.

Subject: A Greek woman in her early thirties, years on cargo ships and caïques now over. She is coiling a thick wet bow line in calloused, capable hands. One hand rests on the bow of a sit-on-top sea kayak beached on flat rocks. A dry bag at her feet. She is eyeing a calm bay off-frame to her right. Salt-bleached t-shirt, rolled cargo shorts, hair tied back, sun-tanned forearms. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background with the calm deep Ionian sea visible behind. Working, unhurried posture. The noon-gold accent appears only on the wet rope catching the sun and on the kayak's deck rigging.

Greek woman, adult realistic proportions, illustrated not photographic. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-05-influencer` — The influencer (♀) · oleander‑pink accent
Save to: `assets/heroes/hero-05-influencer.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is oleander pink.

Frame as a wide landscape composition, about 20:9 ratio (most modern phones in landscape), with the figure in the LEFT third and the rest of the canvas given to their natural Messinian context (where they would be found — see subject for the where). The right portion of the frame should leave breathing room — partial wash of context, paper showing through — for the game UI to sit on top. Keep all critical compositional elements (the figure, any key context detail) within the central 16:9 SAFE ZONE so they survive when the image is shown on narrower 16:9 desktop viewports. Landscape composition, not a portrait crop.

Subject: A Greek woman in her late twenties. She is half a step ahead of an unseen group, framing a shot with her phone mounted on a small handheld tripod gimbal. A folded ring light is clipped to her small pack. A light breeze in her hair. Golden afternoon light. The trail is visible a step behind her. Focused expression, chasing the shot. Fashionable but practical outdoor clothing. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background with a hint of golden coast visible behind. The oleander-pink accent appears only in her scarf and on her phone case.

Greek woman, adult realistic proportions, illustrated not photographic. Do not show her taking a selfie — she is framing a shot of the scene ahead of her, the phone is pointed away from her face. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-06-engineer` — The startup engineer (♂) · noon‑gold accent
Save to: `assets/heroes/hero-06-engineer.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is noon gold.

Frame as a wide landscape composition, about 20:9 ratio (most modern phones in landscape), with the figure in the LEFT third and the rest of the canvas given to their natural Messinian context (where they would be found — see subject for the where). The right portion of the frame should leave breathing room — partial wash of context, paper showing through — for the game UI to sit on top. Keep all critical compositional elements (the figure, any key context detail) within the central 16:9 SAFE ZONE so they survive when the image is shown on narrower 16:9 desktop viewports. Landscape composition, not a portrait crop.

Subject: A Greek man in his early thirties, the startup engineer whose company ran out of runway at eleven users. He holds a small clipboard with careful pencil notes. A Leatherman multi-tool is clipped to his belt. Simple wire-frame glasses. A focused, counting expression — as if mentally calculating the throughput of something. A casual button-down rolled to the forearms. Dark hair. The corner of a taverna is visible in the background. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background. Methodical, careful posture. The noon-gold accent appears only on the multi-tool's casing and on the clipboard's metal clip.

Greek man, adult realistic proportions, illustrated not photographic. Do not include a laptop, a startup hoodie, or any tech-bro signifier — he is past that life now. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-07-scholar` — The philologist (♀) · cypress‑green accent
Save to: `assets/heroes/hero-07-scholar.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is cypress green-black.

Frame as a wide landscape composition, about 20:9 ratio (most modern phones in landscape), with the figure in the LEFT third and the rest of the canvas given to their natural Messinian context (where they would be found — see subject for the where). The right portion of the frame should leave breathing room — partial wash of context, paper showing through — for the game UI to sit on top. Keep all critical compositional elements (the figure, any key context detail) within the central 16:9 SAFE ZONE so they survive when the image is shown on narrower 16:9 desktop viewports. Landscape composition, not a portrait crop.

Subject: A Greek woman in her early thirties, the philologist with four languages and no permanent post. She is mid-sentence, holding a slim leather notebook open in one hand showing handwritten lines in four different scripts (Greek, Latin, Arabic, and a Cyrillic script). Her other hand makes a gentle didactic gesture. A small group of unseen listeners is implied just out of frame, leaning in to hear her. Library-warm afternoon light. Simple linen dress, hair tied with a ribbon, intelligent warm expression. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background with a hint of book spines behind. The cypress-green accent appears only in her hair ribbon and the book spines behind her.

Greek woman, adult realistic proportions, illustrated not photographic. Do not include glasses on a chain, an owl, an academic gown, or any "wise teacher" cliché props. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-08-fasaia` — The Fasaia (♀) · oleander‑pink accent
Save to: `assets/heroes/hero-08-fasaia.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is oleander pink.

Frame as a wide landscape composition, about 20:9 ratio (most modern phones in landscape), with the figure in the LEFT third and the rest of the canvas given to their natural Messinian context (where they would be found — see subject for the where). The right portion of the frame should leave breathing room — partial wash of context, paper showing through — for the game UI to sit on top. Keep all critical compositional elements (the figure, any key context detail) within the central 16:9 SAFE ZONE so they survive when the image is shown on narrower 16:9 desktop viewports. Landscape composition, not a portrait crop.

Subject: A Greek woman in her late twenties, returned from Goa speaking of "energy" and "alignment". Her breath is drawn in, eyes half-closed, a small composed half-smile. A hand-woven shawl-scarf over her shoulders in earthy patterns. Beaded jewelry at her wrists. The warm blurred strung-bulb lights of a distant August panigiri village festival glow behind her at far depth. Her hair is loose and full. Calm, centred posture. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background. The oleander-pink accent appears only in the scarf's pattern and in the festival lights behind her.

Greek woman, adult realistic proportions, illustrated not photographic. Do not include a lotus pose, a yoga mat, mandala motifs, or visible halo / aura — she is a person, not an icon. No emoji, drop shadow, glow, gradient (other than the soft blurred lights behind her). No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-09-alani` — covered by pilot‑01 above.

### `hero-10-villager` — The Greek Villager (♂) · cypress‑green accent
Save to: `assets/heroes/hero-10-villager.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is cypress green-black.

Frame as a wide landscape composition, about 20:9 ratio (most modern phones in landscape), with the figure in the LEFT third and the rest of the canvas given to their natural Messinian context (where they would be found — see subject for the where). The right portion of the frame should leave breathing room — partial wash of context, paper showing through — for the game UI to sit on top. Keep all critical compositional elements (the figure, any key context detail) within the central 16:9 SAFE ZONE so they survive when the image is shown on narrower 16:9 desktop viewports. Landscape composition, not a portrait crop.

Subject: A Greek man in his mid forties, the villager who ran the family flock and olive grove until a subsidy cut and a beach bar finished it off. One hand rests flat on a fieldstone wall that used to be his. A worn, curved olive-pruning blade hangs at his belt. A younger cousin is half-visible in the frame behind him, also working at the wall. An old olive grove fades inland under afternoon light. His sun-darkened, weathered face. Square, stoic posture. A simple work shirt and old trousers. Mid-shot, waist-up, single foreground figure positioned off-axis on a bone-cream sky background. The cypress-green accent appears only in the distant olive grove and on the pruning blade's wooden handle.

Greek man, adult realistic proportions, illustrated not photographic. Do not include any traditional Greek costume (no fustanella, no folk dress) — this is a working modern villager. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

---

## 8. Tier E — places (10)

Open a new chat, attach `pilot-01-hero-alani` (or `pilot-02-place-voidokilia` if you prefer
a place reference), send the style‑lock preface from §5, then send each place prompt. Each
is **wide landscape, about 20:9 ratio (modern phone landscape), with the recognisable place silhouette kept in the central 16:9 safe zone**.

### `place-kalamata` — Kalamata harbour · noon‑gold accent
Save to: `assets/places/place-kalamata.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is noon gold.

Frame in wide landscape orientation, about 20:9 ratio (modern phone landscape). Keep the recognisable place silhouette within the central 16:9 safe zone so it survives both the full-screen trailhead and the narrower route-card crop.

Subject: The stone quay harbour of Kalamata in southern Greece at golden afternoon. A curved line of small waterfront cafés with chairs out on the pavement. A single working caïque (Greek fishing boat) tied up against the quay. The distant inland silhouette of the Taygetos mountain range fading purple-blue in the far background. Two small human-scale figures walking the quay mid-frame. A café table with two coffee glasses in the near right corner. Mid-distance landscape composition. The noon-gold accent appears only on the boat's mast and on a cluster of the café tablecloths.

This is mainland Messinia in southern Greece, NOT the Cycladic islands — no whitewashed buildings, no blue domes, no cruise ships, no yachts. Do not include any legible text or signage. No emoji, drop shadow, glow, gradient, sparkle, lens flare. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-polylimnio` — Polylimnio waterfalls · cypress‑green accent
Save to: `assets/places/place-polylimnio.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is cypress green-black.

Frame in wide landscape orientation, about 20:9 ratio (modern phone landscape). Keep the recognisable place silhouette within the central 16:9 safe zone so it survives both the full-screen trailhead and the narrower route-card crop.

Subject: The Polylimnio tiered waterfall pools in Messinia, southern Greece. Multiple stacked emerald pools cascade down slick green stone in deep forested shade, viewed from mid-slope above one of the lower pools. Dense fig and plane tree canopy above. One single human-scale figure swimming in the lowest pool for scale. Dappled forest light. Cool water atmosphere. Mid-distance landscape composition. The cypress-green accent appears only in the deepest forest shadows and in the pool depths.

This is the Greek mainland, not a tropical jungle. Do not include exotic tropical plants, bright flowers, or rainforest density — it is a Mediterranean canyon forest of figs, planes, and oleander. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-voidokilia` — covered by pilot‑02 above.

### `place-pylos-methoni` — Pylos / Methóni Venetian fortress · noon‑gold accent
Save to: `assets/places/place-pylos-methoni.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is noon gold.

Frame in wide landscape orientation, about 20:9 ratio (modern phone landscape). Keep the recognisable place silhouette within the central 16:9 safe zone so it survives both the full-screen trailhead and the narrower route-card crop.

Subject: The Venetian fortress of Methoni in Messinia, southern Greece, seen from sea level. A low promontory of weathered stone walls and a single square tower projects into the deep Ionian. A small mainland Greek fishing harbour at the foot of the fortress, with two or three caïques tied up. The bay opens wide to the right. Late afternoon warm light. Two small figures fishing from the harbour mole for scale. Mid-distance landscape composition. The noon-gold accent appears only on the fortress wall at golden hour and on the boat masts.

This is mainland Greece, not the Cyclades. Do not include any whitewashed buildings, blue domes, infinity-pool aesthetic, or cruise port — this is a working historic Venetian-era fortress harbour. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-mavromati` — Ancient Messene at Mavromáti · noon‑gold accent
Save to: `assets/places/place-mavromati.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is noon gold.

Frame in wide landscape orientation, about 20:9 ratio (modern phone landscape). Keep the recognisable place silhouette within the central 16:9 safe zone so it survives both the full-screen trailhead and the narrower route-card crop.

Subject: The archaeological site of Ancient Messene at Mavromati village in the Peloponnese, Greece. Broken Greek classical columns and tumbled stone blocks under low golden-hour afternoon light. The village spring at the edge of the site with a small stone basin. One small human-scale figure standing among the columns for scale. Ancient olive trees framing the scene. Open countryside opening toward distant mountains. The deep timelessness of a Greek archaeological site, but rendered as a quiet illustrated scene — not fantasy ruins. The noon-gold accent appears only on the column tops catching the golden-hour light.

Do not include dramatic clouds, lightning, mythological figures, or any "fantasy ruins" aesthetic. This is a real, quiet, archaeological site. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-neda` — Neda gorge · cypress‑green accent
Save to: `assets/places/place-neda.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is cypress green-black.

Frame in wide landscape orientation, about 20:9 ratio (modern phone landscape). Keep the recognisable place silhouette within the central 16:9 safe zone so it survives both the full-screen trailhead and the narrower route-card crop.

Subject: The Neda gorge in the Peloponnese, Greece. Narrow ribs of cold grey limestone close in to form a deep slot canyon. A single emerald pool sits at the canyon floor below. A hairline human figure traverses the high rim for scale. Deep cool blue-green shade with one shaft of warm light reaching the pool. Mossy wet rock walls. The sound of water implied. Vertical, narrow, mid-distance landscape composition. The cypress-green accent appears only in the deepest canyon shadows and on the mossy rock.

This is southern Greece, not the American Southwest — no Antelope Canyon sandstone red, no desert palette. The stone is cold grey limestone, the moss is European green. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-lousios` — Lousios gorge with monastery · cypress‑green accent
Save to: `assets/places/place-lousios.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is cypress green-black.

Frame in wide landscape orientation, about 20:9 ratio (modern phone landscape). Keep the recognisable place silhouette within the central 16:9 safe zone so it survives both the full-screen trailhead and the narrower route-card crop.

Subject: The Lousios gorge in Arcadia, mainland Greece. A forested gorge with a small medieval Byzantine Orthodox monastery clinging to a ledge midway up the cliff face. A wooden suspension bridge crosses the gorge at the bottom over a green river. Two small human-scale figures cross the bridge for scale. Dense fir and chestnut canopy on both sides. The deep cool shadow of the gorge below. The monastery is painted in white-and-red with a small dome roof. Mid-distance landscape composition. The cypress-green accent appears only in the gorge shadows and in the forest depth.

This is a real Greek Byzantine monastery, not a fantasy castle or a tropical scene. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-taygetos` — Taygetos alpine ridge · noon‑gold accent
Save to: `assets/places/place-taygetos.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is noon gold.

Frame in wide landscape orientation, about 20:9 ratio (modern phone landscape). Keep the recognisable place silhouette within the central 16:9 safe zone so it survives both the full-screen trailhead and the narrower route-card crop.

Subject: The alpine summit ridge of Mount Taygetos in the Peloponnese, Greece, in mid-summer with streaks of unmelted snow in the north-facing couloirs. The tiny stone cell-chapel of Profitis Ilias is silhouetted on the highest peak. A single human-scale figure stands on the ridge below the summit for scale. Cold, thin, clear high-altitude light. The Peloponnese opens below in fading olive and sea blue toward the horizon. Austere alpine atmosphere. Mid-distance landscape composition. The noon-gold accent appears only on the chapel walls catching altitude light.

This is the Greek Peloponnese — not the Swiss Alps. The mountain is rocky and exposed, not Alpine-meadow lush. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-mani` — Mani peninsula tower houses · rain‑grey accent
Save to: `assets/places/place-mani.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is rain grey.

Frame in wide landscape orientation, about 20:9 ratio (modern phone landscape). Keep the recognisable place silhouette within the central 16:9 safe zone so it survives both the full-screen trailhead and the narrower route-card crop.

Subject: The Mani peninsula in the southern Peloponnese, Greece. A cluster of austere slate-grey stone tower houses (the famous Maniote pyrgoi defensive towers) rises vertically up a barren rocky hillside. Salt-scoured prickly scrub and aloe in the foreground. An empty unpaved road bends south toward distant Cape Tainaron. No trees, no greenery — this is the dry, hard, austere Mani. Hard afternoon light. The sea barely visible far right as a thin blue band. One single human-scale figure walks the road for scale. The wind in the scrub is implied by a slightly sloped horizon. Mid-distance landscape composition. The rain-grey accent appears only in the tower stone and in the road.

This is the dry austere Mani — no lush vegetation, no tropical look, no Santorini whitewash, no blue domes. The towers are slate-grey stone, sun-bleached, severe. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-kardamyli` — Kardamyli stone harbour · noon‑gold accent
Save to: `assets/places/place-kardamyli.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is noon gold.

Frame in wide landscape orientation, about 20:9 ratio (modern phone landscape). Keep the recognisable place silhouette within the central 16:9 safe zone so it survives both the full-screen trailhead and the narrower route-card crop.

Subject: The small stone fishing harbour of Kardamyli on the Messinian Mani coast, Greece. Ancient plane trees shade a stone-paved waterfront. A stone-built quay with one or two caïques tied up. The old cobbled mule path turns uphill behind the village toward the Taygetos foothills. Two figures share afternoon coffee at a café table under the plane trees. Warm late golden light. Mid-distance landscape composition. The noon-gold accent appears only on the boat masts and on the café lanterns above the tables.

This is mainland Greece, not the Cyclades — no whitewashed buildings, no blue domes. Kardamyli is honey-coloured stone and plane-tree green. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

---

## 9. Tier F — set pieces (4)

### `scene-hilux-dawn` — covered by pilot‑03 above.

### `scene-panigiri` — August village festival · noon‑gold accent · parody‑lift density
Save to: `assets/scenes/scene-panigiri.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is noon gold.

Frame as a wide cinematic landscape, about 20:9 ratio (modern phone landscape). Keep critical compositional elements within the central 16:9 safe zone so they survive narrower viewports.

Subject: A Greek village panigiri summer festival at full swing in the village square at evening. A long communal table runs through the foreground, laden with shared bottles of tsipouro and ouzo and plates of food. Strung bulb lights criss-cross the square overhead. A small wooden stage stands in the back with a three-piece band mid-song — bouzouki, violin, and laouto. The village dancers form a half-circle, hand-in-hand, mid-step. An old man pours tsipouro for a stranger. A small child runs between legs. Three or four villagers in their seventies are seated at the table. An unlit church lantern stands at the side. The silhouette of terracotta-tiled village rooftops sits behind. Maximum comic density — the crowd is the protagonist. Joyful, warm, slightly chaotic. The noon-gold accent appears throughout the strung bulb lights and on the brass instruments.

This is a real Greek panigiri — traditional acoustic instruments only, no electric guitar, no modern band setup. Do not include: any legible text (no readable signs, no band name); no emoji; no drop shadow, glow, gradient (other than the natural glow from the strung bulbs); no anime, chibi, mascot, or cute styling; no photorealism, 3D, or HDR; no vector or flat-design look; no decorative ornament; no AI artefacts.
```

### `scene-radio-crisis` — Phase 2 management beat · rain‑grey accent
Save to: `assets/scenes/scene-radio-crisis.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is rain grey.

Frame as a wide cinematic landscape, about 20:9 ratio (modern phone landscape). Keep critical compositional elements within the central 16:9 safe zone so they survive narrower viewports.

Subject: A Greek woman guide stands on a high mountain trail in the Peloponnese, shown mid-shot. She holds a black plastic two-way handheld radio handset to her ear with one hand. Her other hand points off-frame to the bruise-coloured weather closing in behind her in the upper third of the frame. A small group of four clients waits twenty meters behind her on the trail, looking up at her. Her face is calm but reading the sky. A technical jacket and a small pack. Single protagonist figure off-axis, with the storm and the clients as supporting cast. A decision moment. The rain-grey accent appears only in the gathering storm clouds.

Critically: she is using an analogue two-way radio handset — not a modern smartphone, not a smartwatch. The technology should look professional and slightly worn. Do not include lightning bolts, dramatic rain streaks, or weather drama beyond the cloud colour. No emoji, drop shadow, glow, gradient, sparkle. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `scene-first-hire` — phase transition pathos · oleander‑pink accent
Save to: `assets/scenes/scene-first-hire.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is oleander pink. This is a pathos beat — drop saturation a notch, hold the frame still.

Frame as a wide cinematic landscape, about 20:9 ratio (modern phone landscape). Keep critical compositional elements within the central 16:9 safe zone so they survive narrower viewports.

Subject: Two figures stand side by side at the doorstep of an old Kalamata family stone house at first light — the protagonist and the new young woman hire named Maria. Both hold small ceramic mugs of coffee. Both look off into the next day, to the right of frame. We do not see either of their faces — they are both looking away. The kitchen door behind them is ajar, with the silhouette of an older woman (the protagonist's mother) glimpsed inside, still working at the stove with the warm orange oven glow behind her. The soft pale dawn light catches the door frame and the worn flagstone step. Two figures in shared quiet companionship — a pathos beat. The oleander-pink accent appears only in the dawn sky and on the rim of one of the coffee mugs.

Critically: no faces visible to the camera — both foreground figures look away, the mother is a silhouette inside. No hugging, no embrace, no overt emotion — this is restrained quiet. No emoji, drop shadow (other than the natural step shadow), glow, gradient (other than the soft dawn sky). No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

---

## 10. Tier C / D — glyphs (7 disciplines + 6 weather)

**Honest caveat**: ChatGPT can generate icon‑like images, but the result is rasterised
and won't match the cleanliness of a hand‑drawn vector glyph. Three paths:

1. **Best**: hand‑draw the 13 glyphs in Figma or Affinity Designer in the same loose
   ink‑line style as the scenes — single fountain‑pen weight in warm sepia‑black,
   slight wobble, no fill. Twenty minutes of vector work beats fifty ChatGPT rolls for
   diagrammatic icons.
2. **Hybrid**: use ChatGPT to generate a reference, trace it into SVG in Figma.
3. **ChatGPT only**: accept raster PNG at small display size (32px), use the template below.

If going path 3, use this template — change only the `{ICON SUBJECT}`:

```
Render a small icon as a loose hand-drawn fountain-pen sketch — a single warm sepia-black ink line drawing on warm limestone bone-cream paper, with the natural slight wobble of pen on paper. Diagrammatic and reduced — like a margin sketch in a travel journal or a mid-century European travel pictogram. Centred composition. Square 1:1 framing. No watercolor wash, no fill, no shading, no border, no text, no label — just the ink line on bone-cream paper.

Subject: {ICON SUBJECT}

Do not include: any text or label; any other icons in the frame; any colour beyond the ink line on the bone background; any photorealism, 3D, or rendered look; any shading, gradient, drop shadow, or glow; any decorative frame or border; any watermark or signature.
```

Substitute `{ICON SUBJECT}`:

| ID | Subject |
|---|---|
| `glyph-discipline-hike` | a single hiking boot in profile resting on a contour line |
| `glyph-discipline-seakayak` | a kayak paddle blade with a single water drop falling beneath it |
| `glyph-discipline-canyon` | a coiled climbing rope with a figure-eight knot at the centre |
| `glyph-discipline-raft` | a rafting oar with a single water curl at the blade |
| `glyph-discipline-cycle` | a bicycle pedal crank in side profile |
| `glyph-discipline-sup` | a stand-up paddleboard edge with a T-grip paddle above it |
| `glyph-discipline-climb` | a spring-loaded climbing cam clipped to a karabiner |
| `glyph-weather-clear` | a simple rayed sun disc with eight straight rays |
| `glyph-weather-hot` | a heavier sun disc with three short horizontal heat waves beneath it |
| `glyph-weather-wind` | a single bent blade of grass on a sloped ground line, and a small flag pulled tight in the wind |
| `glyph-weather-mist` | three horizontal bands suggesting a low cloud ceiling over a ridge silhouette |
| `glyph-weather-storm` | a stylised storm cloud with a single restrained zigzag bolt beneath |
| `glyph-weather-unstable` | half a sun on the left side of the frame and half a cloud on the right side, vertically split composition |

**Recommendation**: do the glyphs in Figma. Faster, cleaner, vector‑native, and they'll scale
from 16px to 64px without artefacts.

---

## 11. Tier G — chrome (3)

### `chrome-logbook`
Save to: `assets/chrome/chrome-logbook.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. No seasonal accent — keep this in the core five colours only.

Frame as a wide landscape composition, about 20:9 ratio (modern phone landscape) -- the document/object lying on a surface, with the document itself in the central 16:9 safe zone and the surrounding desk surface (wood grain, the corner of a notebook, a pencil, soft paper shadow) filling out to 20:9.

Subject: A linen-bound notebook lying slightly open on an old wooden taverna table, viewed from a three-quarter slightly top-down angle. The day's entry is handwritten in dark serif ink on the visible page (the handwriting itself should be indecipherable hand-drawn shapes rather than legible text). A fountain pen rests beside it. Soft warm late-afternoon window light from the upper left. The notebook's linen cover is bone-cream. No other objects in frame. Quiet, intimate, object-as-subject composition.

Do not make the handwriting legible — it should suggest text without being readable. No emoji, drop shadow, glow, gradient, sparkle. No anime, chibi, or cute styling. No 3D, no photorealism. No vector or flat-design look. No decorative ornament. No AI artefacts.
```

### `chrome-certificate`
Save to: `assets/chrome/chrome-certificate.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is terra red (used only in the wax stamp).

Frame as a wide landscape composition, about 20:9 ratio (modern phone landscape) -- the document/object lying on a surface, with the document itself in the central 16:9 safe zone and the surrounding desk surface (wood grain, the corner of a notebook, a pencil, soft paper shadow) filling out to 20:9.

Subject: An official Greek HATEOA (Hellenic Outdoor Trainers and Educators Association) hiking guide certificate document on cream paper. A red rubber wax-style stamp is in the lower right corner. A signature line in ink at the bottom. A simple official border line in ink around the document edge. Viewed from a three-quarter slightly top-down angle on a plain bone-cream background. A deadpan, official, period-correct look. The body text should be simulated illegible serif text (shapes that look like type, not actually legible). Three-quarter view, single object as subject.

Do not make the body text legible. Do not include any modern logos, modern fonts, or contemporary corporate-association look — this should feel like a real, slightly old-fashioned Greek hiking certification. No emoji, drop shadow, glow, gradient, sparkle. No anime, chibi, or cute styling. No 3D, no photorealism. No vector or flat-design look. No decorative ornament beyond a simple official border. No AI artefacts.
```

### `chrome-loan-papers`
Save to: `assets/chrome/chrome-loan-papers.png`

```
Same ink-and-watercolor travel style as the reference image — wet translucent washes, loose hand-drawn ink line in warm sepia-black, paper showing through where the wash didn't reach, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is terra red (only in the bank stamp).

Frame as a wide landscape composition, about 20:9 ratio (modern phone landscape) -- the document/object lying on a surface, with the document itself in the central 16:9 safe zone and the surrounding desk surface (wood grain, the corner of a notebook, a pencil, soft paper shadow) filling out to 20:9.

Subject: Three different financial documents laid out side by side on a wooden table top-down. Left: a formal bank loan form on white paper with a red rubber stamp. Centre: a handwritten note on torn lined yellow notepaper from a friend. Right: a small printed-receipt-style document on cheap brown paper from a less-official lender, no header. Three financing sources made physical objects. Top-down, slightly three-quarter view. Soft window light from upper left. Plain wooden background. All text on all three documents should be simulated illegible (shapes that look like writing, not actually legible).

Do not make any text legible. Do not include any modern brand logos. No emoji, drop shadow, glow, gradient, sparkle. No anime, chibi, or cute styling. No 3D, no photorealism. No vector or flat-design look. No decorative ornament. No AI artefacts.
```

---

## 12. Generation log

Record each shipped asset so you can re‑generate cleanly when the model improves. Suggested
location: append a small table at the bottom of `ASSET-MANIFEST.md` once production starts.

```
| asset id              | model        | conversation        | reference image used     | date       | notes |
|-----------------------|--------------|---------------------|--------------------------|------------|-------|
| pilot-01-hero-alani   | ChatGPT GPT-Image | new                 | (this image itself)      | 2026-05-28 | locked the style |
| pilot-02-place-voidokilia | ChatGPT GPT-Image | new                 | pilot-01 attached        | 2026-05-28 | place lock |
| pilot-03-scene-hilux-dawn | ChatGPT GPT-Image | new                 | pilot-01 attached        | 2026-05-28 | no figures held |
| hero-01-medic         | ChatGPT GPT-Image | "heroes batch 1"    | pilot-01 attached        | 2026-05-29 | seq 1 of 9 in single chat |
```

---

## 13. Troubleshooting

| Problem | Fix |
|---|---|
| Drift toward "stock illustration" / vector flat-design | Re-emphasise "ink-and-watercolor on paper, wet washes, fountain-pen line, paper showing through" earlier in the prompt; cite Liz Steel + Lapin + Hockney again at the end |
| Faces look generic / not specifically Greek | Add "Greek Mediterranean features, dark hair, olive skin" explicitly in the subject line |
| Faces look like mascots / cute | Add "adult realistic proportions, serious illustrated portrait, not stylised toward cute"; never say "character" — say "figure" or "person" |
| Outlines appearing on hills/sea/sky | Re-emphasise "landscape masses read as flat colour blocks ONLY, no outlines on hills sea or sky" |
| Six+ colours leaking in | Trim the accent description to one or two specific objects only; reinforce "limited five-colour palette of ONLY terracotta, olive, sea blue, bone, and ink" |
| Santorini whitewash leaking | Add place name twice; explicitly call out "this is mainland Messinia, NOT the Cycladic islands" |
| Hilux scene grows people anyway | Restate "completely empty of any people, animals, or birds — the truck must be alone in the frame. Do not add any figures." three times if needed |
| Text appearing where it shouldn't | Say "no readable text — any signs or papers should show indecipherable hand-painted shapes only" |
| Style drift across batch | Always upload your approved pilot-01 as reference, always send the §5 style-lock preface, always stay in the same conversation for a whole batch |
| Hero faces inconsistent across batch | After hero-01 generates well, upload IT also as a second reference for the rest of the heroes batch |
| Aspect ratio not respected | Re-send the prompt with the aspect line at the very TOP, then re-state at the bottom: "Final reminder: wide landscape composition, about 20:9 ratio, with the figure within the central 16:9 safe zone, NOT a portrait crop" |
| Image too dark / desaturated overall | Drop the words "shadow" and "dust" by one each; emphasise "warm afternoon light" |

---

## 14. The desk-hub — Phase 1: the childhood bedroom (build this first)

The diegetic UI tier (see `DESK-HUB.md`). One large base scene of the Phase 1
childhood bedroom + 13 transparent‑background object overlays that composite on
top at runtime. Different state = different overlay swapped in; the base never
changes.

**Production order:**
1. Base scene first (`bedroom-p1-base`) — once approved, becomes the reference
   for all overlays.
2. Overlays second, in a single ChatGPT conversation with the approved base
   uploaded as the reference. Critical: every overlay must match the base's line
   weight, wash discipline, and lighting direction or it won't sit cleanly.

**For overlays, attach the approved base scene** as the reference image and tell
ChatGPT: *"Match the visual style, line weight, wash colours, and lighting of the
attached reference image exactly. The object must look like it was painted on the
same page as the reference scene. Output with a fully transparent background — no
sky, no paper, no surface around the object."*

---

### `bedroom-p1-base` — the Phase 1 childhood bedroom (no objects on the desk)

Save to: `assets/hub/bedroom-p1-base.webp`

```
Render this as an ink-and-watercolor travel illustration — the visual register of a Moleskine travel-journal page or a mid-century Mediterranean travel-guidebook plate. Wet, translucent watercolor washes with natural soft edges, gentle bleeds at wash boundaries, and visible granulated pigment pooling where the brush lifted. Loose hand-drawn ink line work in warm sepia-black, made with a fountain pen on paper — confident but slightly wobbly, with varying line weight from the pen's natural pressure; never a uniform machine-precise stroke. White-of-paper gaps where the watercolor wash didn't reach: the warm limestone bone-cream paper surface is part of the image, not a continuous fill, and several passages of every frame are simply the paper showing through. Limited five-colour palette, each colour applied as a wet wash (translucent, not opaque): warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone (the paper itself), and warm near-black ink for the line work — plus exactly one seasonal accent of noon gold, also as a wash. Bright Mediterranean afternoon light: warm bone-cream paper holds the bright passages; a single saturated wash holds the shadow. Loose, hand-made, observed sketch energy — opinionated but never tightly rendered or overworked. In the spirit of Liz Steel's travel watercolors, Lapin's Mediterranean sketchbooks, David Hockney's travel sketches, and mid-century European travel-guidebook illustration. This is INK and WATERCOLOR on paper — NOT gouache, NOT digital flat-design, NOT a vector graphic, NOT photographic, NOT 3D rendered, NOT a cartoon, NOT anime, NOT chibi, NOT a CG render.

Frame as a wide landscape composition, about 20:9 ratio (most modern phones in landscape). Keep critical compositional elements within the central 16:9 SAFE ZONE so they survive narrower viewports.

Subject: The childhood bedroom of a Greek thirty-something who has just moved back home with his mother in Kalamáta, Messinia. We see the room from the chair-perspective of someone about to sit at the desk — three-quarter view, slightly above the desk surface, looking forward into the room. The dominant feature is a WIDE WINDOW filling the back wall, opening onto Kalamáta harbour in mid-afternoon summer light — terracotta rooftops, the curve of the bay, and the Taygetos mountain range rising deep blue-green behind. Below the window: an old wooden school desk, bare surface (the day's objects will be added later as overlays — leave the desk surface clear). In front of the desk, a simple wooden chair (we see the back of it from our angle). To the LEFT of frame: a single bed pushed against the wall, with an old patterned blanket folded at its foot. To the RIGHT side wall: a small bedroom door, slightly ajar, with a coat hanging on a hook beside it. On the windowsill: a single terracotta pot with a geranium in flower. Pinned to the wall above the desk: a panigíri poster (faded, from August 2017), and a small framed black-and-white print of Mistras. On the side wall: a small round mirror. The atmosphere is teenage time-capsule meets adult disappointment — dusty trophies on a shelf, a faded football team photo, posters from a decade ago. The watercolor light coming through the window is warm and quiet. Critical: the DESK SURFACE is empty. The PHONE, NOTEBOOK, BACKPACK, CATALOGUE, WALLET will be added as separate overlay assets later — do not paint them in.

Mainland Greece, Messinia, NOT the Cycladic islands. No whitewashed buildings, no blue domes. Do not include any people, any text on the poster beyond an indecipherable "ΠΑΝΗΓΥΡΙ" shape. No emoji, drop shadow, glow, gradient, sparkle. No anime, chibi, cartoon, photoreal, 3D render, vector flat-design, or "watercolor filter" look. Loose hand-made sketch energy throughout — watercolor over ink on paper, never digital.
```

---

### Object overlays — template

For each overlay below, **attach `bedroom-p1-base.webp` as the reference image
first**, then send this preface in a single ChatGPT conversation:

> *"Use this attached image as the locked style and lighting reference for an
> entire series of small object overlays. Match the line weight, wash discipline,
> bone-cream paper feel, and lighting direction exactly. Each overlay I describe
> must look like the object was painted ON the same page as the reference scene,
> but I need it on a fully transparent background so I can composite it onto the
> base at runtime. Output: transparent PNG, no surface beneath the object, no
> sky, no paper, no shadow of any surrounding context — just the object as a
> watercolor cutout. Acknowledge and I'll send the first object."*

Then send each prompt below in sequence.

### `bedroom-p1-phone-dark`
Save to: `assets/hub/bedroom-p1-phone-dark.webp`
```
Subject: An old smartphone lying face-up on a wooden desk, screen off and dark, slight reflection on the dark glass. Worn black case, a small scratch on one corner. Mid-shot from slightly above. Loose ink line for the device outline; the dark screen as a single restrained wash of near-black ink with the faintest watercolor sheen. Fully transparent background — only the phone itself, no desk surface, no shadow except a small soft watercolor under-shadow directly beneath the phone for grounding. Match the reference image's line, wash, and afternoon light exactly.
```

### `bedroom-p1-phone-lit`
Save to: `assets/hub/bedroom-p1-phone-lit.webp`
```
Subject: Same old smartphone as the reference, same position face-up on the desk, but the SCREEN IS LIT — a notification banner visible on the lock-screen reads "NEW BOOKING" in small text (legible), with a small icon, and beneath it "Sea Kayaking — tomorrow 09:30". The screen glows with a soft noon-gold tint that warms the air just above the phone. Same worn black case, same loose ink outline. Fully transparent background — only the phone and its tiny pool of glow light beneath. Match the reference image's line weight, wash discipline, and lighting exactly. The screen-glow should look like a wet wash of noon-gold pooled on the screen surface, not a digital LED.
```

### `bedroom-p1-notebook`
Save to: `assets/hub/bedroom-p1-notebook.webp`
```
Subject: A closed spiral-bound notebook with a worn brown cover, sitting on the desk. A pencil resting alongside the notebook, parallel to its long edge. The spiral binding visible along the top edge as small loops of warm sepia-black ink line. The cover shows the faint suggestion of a handwritten label, illegible (just shapes that read as writing). Loose ink line for the cover edges and spiral; warm terracotta-brown wash for the cover with a streak of paper showing through where the wash thinned. Soft watercolor shadow under the notebook for grounding. Fully transparent background. Match the reference image exactly.
```

### `bedroom-p1-backpack-empty`
Save to: `assets/hub/bedroom-p1-backpack-empty.webp`
```
Subject: A small worn outdoor backpack, dusty olive canvas, leather straps, slightly deflated and slumped against the leg of a wooden desk chair on a wooden floor (left of frame in the composition). Approximately 35-40 litre size, made for day hikes. Open zip on top, the inside dark and empty. A small clip dangles from one strap. Loose ink line; wet wash of sun-bleached olive sage with one warm terracotta accent on a fabric tag. Soft watercolor under-shadow on the floor for grounding. Fully transparent background — only the pack and a small floor-shadow patch beneath it. Match the reference image's style exactly.
```

### `bedroom-p1-backpack-packed`
Save to: `assets/hub/bedroom-p1-backpack-packed.webp`
```
Subject: Same worn outdoor backpack as the empty version, but now PACKED — the pack stands upright on the wooden floor, fully strapped closed, with a visible swell from contents inside, a water bottle peeking from the side pocket, a small bundle of trail food clipped to the top. The whole thing reads as "ready to leave the house in five minutes." Loose ink line, olive sage wash with terracotta accents. Soft watercolor under-shadow on the floor for grounding. Fully transparent background. Match the reference image's style exactly.
```

### `bedroom-p1-catalogue`
Save to: `assets/hub/bedroom-p1-catalogue.webp`
```
Subject: A folded outdoor-sports shop catalogue / promotional flyer lying on the corner of the wooden desk, slightly folded open so we glimpse a hint of cover imagery (a mountain silhouette in terra wash, "ΕΞΟΠΛΙΣΜΟΣ" — equipment — in faded Greek block lettering on the cover; the lettering should look like real shapes but not be precisely legible). Paper with a slight crease. Loose ink line; wash of warm terracotta on the cover with bone-cream paper showing through where the wash didn't reach. Soft watercolor shadow under the flyer for grounding. Fully transparent background. Match the reference image's style exactly.
```

### `bedroom-p1-wallet-thin`
Save to: `assets/hub/bedroom-p1-wallet-thin.webp`
```
Subject: A worn leather wallet, open on the wooden desk, showing just a few coins inside the change pocket (2-3 euro coins as small disks of warm sepia-black ink line + olive wash). The wallet looks thin and disappointing. Brown leather with visible wear on the corners. Loose ink line for the wallet outline, wet wash of warm terracotta-brown for the leather with paper showing through on the worn corners. Soft watercolor under-shadow for grounding. Fully transparent background. Match the reference image's style exactly.
```

### `bedroom-p1-wallet-thick`
Save to: `assets/hub/bedroom-p1-wallet-thick.webp`
```
Subject: Same worn leather wallet, open on the desk, but now THICKER — coins in the change pocket PLUS a small folded paper banknote visible peeking from the bill pocket. The wallet sits with a sense of weight. Same brown leather, same loose ink line, same wash treatment with paper showing through on the corners. Soft watercolor under-shadow for grounding. Fully transparent background. Match the reference image's style exactly.
```

### `bedroom-p1-corkboard-empty`
Save to: `assets/hub/bedroom-p1-corkboard-empty.webp`
```
Subject: A small cork pinboard mounted on the side wall of the bedroom, with the Phase 1 starting contents: an old strip of black-and-white photo-booth photos pinned at the top corner, a faded postcard of Voidokiliá Bay below it, a yellowed ticket stub from "ΠΑΝΗΓΥΡΙ 2017" (legible-shape but not crisp), a single drawing pin holding everything in place. Cork texture suggested by stippled ink line on a warm terracotta-tan wash. Loose ink line throughout; soft watercolor for each pinned item. The whole board reads as "things from before, frozen on the wall." Fully transparent background — only the cork board and its pinned items, no surrounding wall. Match the reference image's style exactly.
```

### `bedroom-p1-window-spring`
Save to: `assets/hub/bedroom-p1-window-spring.webp`
```
Subject: The VIEW through the wide bedroom window only — designed to sit BEHIND the window frame painted in the base scene. Kalamáta harbour in early spring afternoon, with oleander pink in flower on the verge that leads down to the quay; the harbour bay curving to the right; Taygetos mountain range deep blue-green behind. Mid-afternoon light, soft and warm. The view should be slightly atmospheric — distant haze, soft watercolor washes for the mountain layers. Loose ink line for the harbour quay edge, the boats; pure watercolor wash for the sea and sky. Oleander pink as a single concentrated wash in the verge. Bone-cream paper showing through generously in the sky. Fully transparent background — designed to fill ONLY the rectangle that will sit behind the window frame in the base scene. Match the reference image's overall watercolor approach to the window view, with the season-appropriate accent of oleander pink.
```

### `bedroom-p1-window-summer`
Save to: `assets/hub/bedroom-p1-window-summer.webp`
```
Subject: Same view as the spring variant — Kalamáta harbour from the bedroom window — but in HIGH SUMMER mid-afternoon. The light is brighter, the noon-gold accent washes catch the harbour walls and the rooftiles below. Cicadas implied. Distant mountains slightly hazier in the heat. Same composition, same loose ink line for the quay and boats; noon gold as the seasonal accent — a single concentrated wash on the lit harbour walls, the boat masts, one fishing-net buoy. Bone-cream paper showing through generously in the bright sky. Fully transparent background. This is the DEFAULT window view that ships with the base scene — production version, match the base image style closely.
```

### `bedroom-p1-window-autumn`
Save to: `assets/hub/bedroom-p1-window-autumn.webp`
```
Subject: Same view — Kalamáta harbour from the bedroom window — but in AUTUMN, late afternoon. Cooler light, cypress green-black as the seasonal accent in the late vines and a row of cypress trees along the inland edge of the harbour road. The sea slightly darker, the sky a softer wash. Same loose ink line, same wash discipline. Cypress green-black as one concentrated wash on the cypresses. Fully transparent background. Match the reference image's window-view treatment.
```

### `bedroom-p1-window-winter`
Save to: `assets/hub/bedroom-p1-window-winter.webp`
```
Subject: Same view — Kalamáta harbour from the bedroom window — but in WINTER. Rain-grey as the seasonal accent: wet harbour stone, low cloud across the upper part of the view, a sheen of wet on the quay. The mountains barely visible through the haze. Atmosphere: damp, quiet, the off-season. Same loose ink line; the palette shifts cooler and slightly desaturated. Rain grey as the single concentrated wash in the wet harbour walls and the low cloud. Fully transparent background. Match the reference image's window-view treatment.
```

### `bedroom-p1-window-hilux`
Save to: `assets/hub/bedroom-p1-window-hilux.webp`
```
Subject: A SINGLE small element — a battered dark-olive Toyota Hilux pickup truck parked in the harbour-side parking, seen at moderate distance through the bedroom window. The truck is small in frame (it's a distant element in the wider window view, not a close-up). Side-on, with dust on its lower body, a steel roof rack visible. The truck has the same loose ink line and olive wash as the rest of the imagery; one small accent of noon gold on the chrome trim. Fully transparent background — ONLY the truck and a tiny watercolor under-shadow on the asphalt, nothing else. This overlay composites on top of any seasonal window view so the Hilux appears parked in the visible harbour-side lot once the player has bought it. The truck's footprint on the image should sit in roughly the lower-right third of the window-view rectangle.
```

---

### Wall test for the hub batch

After producing the base + first 3 overlays (phone-lit, backpack-empty,
notebook), composite them in any image editor at the same scale. If the overlays
look like they were painted ON the base scene (same line weight, same wet-wash
discipline, same lighting), the batch is locked. If any overlay looks
"pasted on" (cleaner line, denser wash, different paper feel), tweak the prompt
and re-roll BEFORE producing the rest.

This wall-test is the same discipline as the original pilot trio — get the
visual relationship right before scaling.

---


## 15. The desk-hub — Phases 2-4: the later rooms (deferred)

Same diegetic method as Phase 1 (§14): each later room is a base scene + transparent
object overlays, NOT a single static painting. The briefs below describe each room's
CONTENTS — when you produce them, split each like Phase 1: paint the room + furniture
as the base (leave the desk surface clear), and make the interactive objects (staff
cards, radios, laptop, contracts, map pins) into separate transparent overlays.
Production deferred until the Phase 1 hub ships (`DESK-HUB.md §3`).

> Reference image: attach your approved ink-and-watercolor image at the start of the
> batch. And there is no `desk-phase1-*` -- Phase 1 IS the bedroom hub above.

### The Phase 2-4 room briefs

#### `desk-phase2-working` — the working desk · summer accent (noon gold)
Save to: `assets/desk/desk-phase2-working.webp`

```
[§3 style anchor — verbatim]

Frame this as a wide cinematic landscape, about 20:9 ratio (modern phone landscape). Keep critical compositional elements within the central 16:9 safe zone so they survive narrower viewports.

Subject: A working desk in Kalamata at late afternoon, viewed slightly from above and to the side — the angle a person at the desk would see it. On the surface: two staff cards laid out (one labelled "Maria", one "Nikos", with small painted portrait icons and a stat strip in mono type), a small cork route board pinned with three index cards naming day-routes (Voidokilia, Polylimnio, Mavromati) in Greek and English, two handheld guide radios sitting on small black chargers with status lights on, a gear-checklist clipboard with hand-written ticks, a manila folder labelled "REPAIR" with a few invoices peeking out, an open cash ledger book with neat handwritten entries and a column of euro figures. The same kitchen of the reference image — Kalamata harbour visible through the window at sunset, terracotta rooftops, the sea. The table has organised itself; the chaos of solo guiding has become coordination. Noon-gold accent appears on the radio status lights and one route-card edge catching the window light.

Greek text where it naturally appears (route names on cards, "REPAIR" stamp, ledger column headers), but illegible "writing shapes" for any actual narrative text. Do not include any people in the frame, only the desk and its objects. Match the warm dusk light, the open window onto Messinia, and the physical-objects-on-a-table register of the reference image. No people, no anime, no cartoon, no photoreal, no 3D, no vector flat design, no dashboard UI elements.
```

#### `desk-phase3-office` — the company desk · summer accent (noon gold)
Save to: `assets/desk/desk-phase3-office.webp`

```
[§3 style anchor — verbatim]

Frame this as a wide cinematic landscape, about 20:9 ratio (modern phone landscape). Keep critical compositional elements within the central 16:9 safe zone so they survive narrower viewports.

Subject: A small Greek outdoor-tourism company office desk in Kalamata, slightly elevated angle from the seat. On the surface: a modern but unflashy laptop screen showing a booking platform with three rows of upcoming trips (place names, dates, party size — in Greek and English), a stack of printed Google/TripAdvisor reviews with five-star rows visible, two package brochures (one labelled "Mani Coast Week", one "Taygetos Traverse") in glossy folded form, a stapled sheet of hotel partner notes from a Kardamyli hotel, a branded rubber stamp with the company logo and an ink pad, a wall calendar pinned above the desk with red-marked busy days, a tray with signed contracts in folders. The same window onto Kalamata harbour at sunset. The table has become an office. The atmosphere is "this is becoming a real business, and that is both exciting and dangerous."

Greek + English where natural; readable section headings on the laptop, illegible body text. No people in frame. Match the warm dusk register and Messinian window-view of the reference image. No people, no anime, no cartoon, no photoreal, no 3D, no vector flat design, no glossy plastic dashboard UI on the laptop — the laptop screen looks like real paper-textured editorial illustration of a software window.
```

#### `desk-phase4-regional` — the regional operations board · autumn accent (cypress green)
Save to: `assets/desk/desk-phase4-regional.webp`

```
[§3 style anchor — verbatim, with the seasonal accent specified as cypress green-black]

Frame this as a wide cinematic landscape, about 20:9 ratio (modern phone landscape). Keep critical compositional elements within the central 16:9 safe zone so they survive narrower viewports.

Subject: A regional operations board — a wider working surface, almost a war-room corner. On a wall above: a large hand-painted map of the Peloponnese with red pins for each base (one over Kalamata, one over Areopoli in the Mani, one over Stemnitsa in Arcadia, one over the Achaia coast). On the surface below: stacked base folders each labelled in Greek (ΚΑΛΑΜΑΤΑ, ΜΑΝΗ, ΑΡΚΑΔΙΑ, ΑΧΑΪΑ), framed portraits of three regional managers with their names handwritten under each, a corkboard with crisis notes pinned (one with a small red CRISIS stamp), a tall pile of legal documents with green ribbon ties, a thick financial-report binder, a roll of brand-materials posters tied with twine, an expansion-plans architectural roll on the far edge. A higher-floor window now — looking down on the town's rooftops at dusk, the harbour smaller and farther below. The desk has become a war-room. Atmosphere: "you built the machine; the question now is whether you still belong to the life that started it."

Cypress green accent appears in the manager portrait frames and on the legal-document ribbons. No people in the frame, only their portraits on the desk. Match the reference image's physical-objects-on-a-table register but at a slightly more elevated, larger-table scale. No people, no anime, no cartoon, no photoreal, no 3D, no vector flat design.
```


## 16. Detail-view assets (reached from the hub)

These are the screens you reach by tapping a hub object: the backpack interior (tap
the pack), client people-cards (tap the corkboard), the day-report surfaces (shown
after a trip). Style: the **§3 ink-and-watercolor anchor**. Reference image: your
approved ink-and-watercolor image, attached at the start of the batch.

### Tier I — Backpack screen (3)

#### `backpack-phase1` — small worn pack
Save to: `assets/backpack/backpack-phase1.webp`

```
[§3 style anchor — verbatim]

Frame as a wide landscape composition, about 20:9 ratio (modern phone landscape) -- the document/object lying on a surface, with the document itself in the central 16:9 safe zone and the surrounding desk surface (wood grain, the corner of a notebook, a pencil, soft paper shadow) filling out to 20:9.

Subject: A small worn outdoor backpack, about 40 litres, laid open on a wooden taverna table from the same kitchen as the reference image. The pack is dusty olive canvas with leather straps, faded from sun and salt. Inside are four roughly defined packing slots, partially packed: a water bottle in one, a small bag of trail snacks in another, a thin first-aid pouch, a folded paper map. A pencil and a small notebook sit beside the pack. The kitchen window is visible in the background showing the harbour at evening. This is the solo guide's pack — small, well-worn, every slot mattering.

No people in the frame. Match the warm Mediterranean register, the layered-objects-on-a-surface physicality, and the open-window-onto-Messinia atmosphere of the reference image. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `backpack-phase2-depot` — the gear depot
Save to: `assets/backpack/backpack-phase2-depot.webp`

```
[§3 style anchor — verbatim]

Frame as wide landscape (about 16:9 ratio).

Subject: A small gear depot in a back room of a Kalamata outdoor-guide outfit. On the walls: a row of climbing helmets hanging on pegs, coils of rope on hooks, three sit-on-top sea kayaks stacked on a wall rack, life-jackets folded on a high shelf. On a low workbench: a crate of labelled water bottles, a row of named gear bins (each with a guide's initials on a paper tag — M., N., A.), a clipboard tally on a chain, a small box of headlamps. Through a small high window: a glimpse of olive trees and the sea, late afternoon. The supply line that lives behind a working guide team.

No people in frame. Match the warm working-shed register and Mediterranean physicality of the reference image. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `backpack-phase3-cache` — the organised company cache
Save to: `assets/backpack/backpack-phase3-cache.webp`

```
[§3 style anchor — verbatim]

Frame as wide landscape (about 16:9 ratio).

Subject: An organised company gear cache — a proper outfitter's storeroom. Floor-to-ceiling labelled storage bins by discipline (HIKE / KAYAK / CANYON / RAFT / CYCLE / SUP / CLIMB written in stencilled Greek + English), folded stacks of branded company buffs in three colours, a small workshop bench with hanging tools (a sewing awl, a rope-end cutter, a multi-tool), a wall of named gear lockers each with a guide's initial-tag, a small printed inventory sheet on a clipboard with a worn pencil. Daylight from a high industrial window, the slate-grey sea visible far in the distance. The atmosphere of a small company that has its act together.

No people in frame. Match the same warm Mediterranean register and physical surface feel as the reference. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

### Tier J — Client people cards (9)

Heroes are illustrated already (see §7). Clients are noun phrases that have lived in
prose; now each becomes a small people card. Same conversation, same style ref. Frame
each in **wide landscape composition, about 20:9 ratio, figure-left (figure kept within central 16:9 safe zone)** — these slot into card UI.

For each client below, use this template (replace the SUBJECT line):

```
[§3 style anchor — verbatim]

Frame this as a wide landscape composition, about 20:9 ratio (modern phone landscape), with the client(s) positioned LEFT of frame and the rest given to context or paper-showing space — same landscape-first treatment as the heroes. Keep critical content within the central 16:9 safe zone so it survives narrower viewports.

Subject: <CLIENT SUBJECT — see table>

The card sits visually on the same warm Mediterranean surface as the reference image, with subtle suggestion of being a printed/laminated card on the desk. Single client(s) mid-shot or full-shot off-axis, on a bone-cream background, no scene behind them beyond a hint of context. Adult realistic proportions; never cute or anime. Match the surface and palette of the reference image exactly.

No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

| ID | Subject for `<CLIENT SUBJECT>` |
|---|---|
| `client-family` | A family of four: one parent with a heavily overstuffed pack, the other parent holding the hand of a four-year-old in a sun hat, a six-year-old child riding on the first parent's shoulders. All in worn outdoor clothes. Cheerful, slightly chaotic |
| `client-cruise` | A line of six cruise tourists from a coach trip, identical lanyards around their necks reading "EXCURSION", water bottles still capped, sensible shoes, slightly bewildered, mid-morning light |
| `client-photographers` | Three serious-looking photographers in their forties with telephoto lenses and tripods, two carrying coffee cups, all glancing impatiently at the same off-frame horizon. Practical outdoor clothes |
| `client-corporate` | A male corporate team-lead in a branded fleece with a small company logo, looking down at a smartphone, a small group of five colleagues standing slightly behind him also in matching fleeces. He looks at his watch |
| `client-k2` | A single male tourist in his fifties in absurdly over-specified full alpine kit — mountaineering boots, four trekking poles strapped to a 70-litre pack, an altimeter watch, a serious expression — standing in front of an olive grove on a flat valley floor. Completely the wrong kit for the terrain |
| `client-german-goat` | A German couple in their forties, sun-hatted, both gently weeping with sincere emotion at a single Greek mountain goat standing calmly in front of them. One of them is filming the goat on a phone. The goat is unimpressed |
| `client-bouzouki` | A Greek man in his sixties with a bouzouki musical instrument in a worn black case visible on his back, a slightly too-small daypack hanging from his other shoulder, walking ahead of an unseen group, a warm half-smile |
| `client-kyria-voula` | A small dignified Greek woman in her seventies, kyría Voúla, in modest dark clothing with a head scarf and a leather handbag from which a small blood-pressure diary peeks, a walking cane in her right hand, looking ahead with composure |
| `client-cousin-mitsos` | A wiry Greek man in his fifties, cousin Mitsos, in oily mechanic's overalls and a faded baseball cap, holding a large spanner in one hand, a smear of grease on his cheek, leaning slightly against an unseen vehicle, a knowing slight smile |

### Tier K — Day report surfaces (4)

These are *backgrounds* the day's verdict prints onto — the canvas, not the data.

#### `report-blank` — ledger page (no accent — core five hues only)
Save to: `assets/reports/report-blank.webp`

```
[§3 style anchor — verbatim, no seasonal accent on this one]

Frame as a wide landscape composition, about 20:9 ratio (modern phone landscape) -- the document/object lying on a surface, with the document itself in the central 16:9 safe zone and the surrounding desk surface (wood grain, the corner of a notebook, a pencil, soft paper shadow) filling out to 20:9.

Subject: A clean ledger page with faint horizontal blue rules, viewed slightly from above on the same warm wooden taverna table from the reference image. A worn pencil rests at the margin. The corner of the page is slightly turned. A small wax stamp impression sits at the bottom right corner in a faint terra colour. The page is mostly empty — this is the canvas the day's verdict will be typed onto. Warm window light from the upper left.

No text on the page beyond the column header shapes (illegible). No people. Match the reference image's surface and lighting exactly. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `report-review-good` — five-star review card · noon gold accent
Save to: `assets/reports/report-review-good.webp`

```
[§3 style anchor — verbatim]

Frame as a wide landscape composition, about 20:9 ratio (modern phone landscape) -- the document/object lying on a surface, with the document itself in the central 16:9 safe zone and the surrounding desk surface (wood grain, the corner of a notebook, a pencil, soft paper shadow) filling out to 20:9.

Subject: A small printed Google / TripAdvisor-style review card lying on the wooden table from the reference image, viewed slightly from above. The card shows a row of five filled stars (★★★★★) in noon-gold, a one-line illegible headline shape suggesting praise, a short paragraph of illegible-but-readable-shape body text below, and a small reviewer-name footer. Warm dusk light catching the gold of the stars. The card looks like it was printed from a printer onto cardstock.

No legible text — the type should look like real type at a glance but not be decipherable. No people. Match the reference image's surface, palette, and warm Mediterranean lighting. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `report-review-bad` — three-star review card · rain grey accent (drop saturation)
Save to: `assets/reports/report-review-bad.webp`

```
[§3 style anchor — verbatim, with rain grey as the seasonal accent and the palette pulled down a notch in saturation]

Frame as a wide landscape composition, about 20:9 ratio (modern phone landscape) -- the document/object lying on a surface, with the document itself in the central 16:9 safe zone and the surrounding desk surface (wood grain, the corner of a notebook, a pencil, soft paper shadow) filling out to 20:9.

Subject: A small printed Google / TripAdvisor-style review card lying on the wooden table from the reference image, viewed slightly from above. The card shows three filled stars and two empty stars (★★★☆☆), a short headline shape suggesting disappointment, an illegible body paragraph below, and a small reviewer footer. There is a faint ink smudge along the lower edge and a fingerprint mark in one corner — the day didn't go well. Slightly cooler and more desaturated than the good-review variant, light coming through cloud.

No legible text. No people. Match the reference surface and palette but at the desaturated end of the register. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `report-gear-damage` — gear-damage notation page · rain grey accent
Save to: `assets/reports/report-gear-damage.webp`

```
[§3 style anchor — verbatim, with rain grey as the seasonal accent]

Frame as a wide landscape composition, about 20:9 ratio (modern phone landscape) -- the document/object lying on a surface, with the document itself in the central 16:9 safe zone and the surrounding desk surface (wood grain, the corner of a notebook, a pencil, soft paper shadow) filling out to 20:9.

Subject: A small notation page from the gear logbook, lying on the wooden table from the reference image, viewed slightly from above. On the page: a pencil sketch of a snapped trekking pole at the centre, a wear-score margin with check-boxes (handwritten ticks against a small list), and at the bottom a small red "NEEDS REPLACEMENT" rubber-stamp impression. A pencil rests alongside. The light is more diffuse — cloudy day mood, suggesting the trip went hard.

No legible text — the handwritten check-list and headers are real-shape but illegible. No people. Match the reference's surface and palette, just slightly cooler with the rain-grey accent in the stamp ink. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

### Tier M — Detail-view backdrops (3)

The phone / shop / backpack detail views render their *interface* in code now (a real
phone screen, a slot grid, a shop counter). These three paintings are the **surface
behind that UI** — they bring the hub's hand-painted register into the screens you tap
into. The in-engine UI is layered on top, so each prompt below reserves a quiet zone for
it. Wiring is already live (`detailBg()`); save the file, add the id to `ASSETS`, done.

#### `phone-desk-p1` — the desk the phone lies on · noon-gold accent
Save to: `assets/hub/phone-desk-p1.webp`

```
[§3 style anchor — verbatim]

Frame as a wide landscape composition, about 20:9 ratio (modern phone landscape). A close, slightly-from-above view of a desk surface in the central 16:9 safe zone, the surrounding wood and window light filling out to 20:9.

Subject: A close-up of the same worn wooden school desk from the Phase 1 bedroom (match the bedroom hub reference) in soft morning light — visible wood grain, the corner of a spiral notebook and a pencil at one edge, a faint cold-coffee mug ring, a scrap of paper. The wide window onto Kalamata harbour sits soft-focus in the upper background. IMPORTANT: leave the CENTRE of the frame an empty, uncluttered patch of desk — a clear rectangular space where a phone would lie. Do NOT paint a phone, screen, or any rectangular device in the frame; that empty desk space is where the interface is composited on top in code.

No people. No phone, no screen, no tablet. Match the warm Mediterranean register, the layered-objects-on-a-surface physicality, and the morning light of the reference image. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `shop-emporium-p1` — inside Geo's outdoor shop · noon-gold accent
Save to: `assets/hub/shop-emporium-p1.webp`

```
[§3 style anchor — verbatim]

Frame as a wide landscape composition, about 20:9 ratio (modern phone landscape), with the busy gear wall to the LEFT and centre and the RIGHT THIRD kept quieter (open counter, a patch of wall) — a UI panel is composited over the right third, so leave it visually calm.

Subject: The cluttered, friendly interior of Geo's small outdoor shop in Kalamata. A worn wooden sales counter runs along the foreground. Behind and around it, walls of gear: hiking boots paired on a shelf, coils of climbing rope on pegs, a row of head-torches hanging, folded buffs and base-layers stacked, a sea-kayak paddle leaning in a corner, a hand-lettered chalk price board, a dusty potted basil on the counter. Warm afternoon light through a shopfront window. The shop of a man who owes your father a favour — generous, slightly chaotic, well-loved.

No people. Keep the right third calm and uncluttered for the overlaid panel. Match the warm Mediterranean register and physical surface feel of the reference image. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `backpack-phase1-rich` — the open pack, slots readable · noon-gold accent
Save to: `assets/backpack/backpack-phase1-rich.webp`

```
[§3 style anchor — verbatim]

Frame as a wide landscape composition, about 20:9 ratio (modern phone landscape) — the open pack in the central 16:9 safe zone, the surrounding taverna table filling out to 20:9.

Subject: A richer re-paint of the small worn ~40-litre outdoor backpack, laid OPEN on the wooden taverna table from the reference image, viewed slightly from above. The pack's interior reads clearly as a set of DISTINCT pockets/compartments — four or so defined slots, so it visually matches a slot grid laid over it. A few items are half-tucked into slots: a water bottle, a small bag of trail snacks, a thin first-aid pouch, a folded paper map; one or two slots left visibly empty. Dusty olive canvas, sun-and-salt-faded leather straps. A pencil and small notebook beside it. The window shows the harbour at evening.

No people. Match the warm Mediterranean register and the layered-objects-on-a-surface physicality of the reference image. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

---

## 17. Tier N — shop item icons (58) — one painted object per item

The Phase 1 shop becomes **shelves of real objects you browse**: a generic shelf plus one per
discipline (hike, sea kayak, canyon, raft, cycle, SUP, climb), each ~80% of the screen tall,
scrolled vertically; locked shelves dimmed. You tap an item, then a panel offers the three
**tiers** (cheap / standard / pro). So we need **one illustration per item** — the tier is a
buy choice, not a separate picture.

These are **painted objects**, not the line-only pictograms of Tier C/D — "the usual style of
the game" (ink-and-watercolor with wash), a single object on bone-cream paper so it cuts out
cleanly onto a shelf card. Consistency across the 58 is everything: same eye-level, same light,
same scale-on-the-page, so a shelf of them reads as one set. Use the **reference-image lock**
(§5) and generate in batches per shelf within one conversation so the style holds.

**Framing template — change only the `Subject:` line.**

```
[§3 style anchor — verbatim]

Frame as a single product object, centred, on warm limestone bone-cream paper with the paper showing through around it (no scene, no background fill, no shelf, no surface line). Square-ish 1:1 composition. Slight three-quarter view at a steady eye level, the object filling most of the frame with a little breathing room. One soft wash shadow directly beneath. The same observed sketch energy as the reference image — loose ink line, wet translucent wash, never tightly rendered.

Subject: <ITEM SUBJECT — see table>

No text, no label, no price tag, no other objects in the frame, no border or card edge, no hands or people. This is ONE object, ink and watercolor on bone-cream paper — not a photo, not 3D, not a flat vector icon, not a cartoon.
```

Naming: `item-<id>` → `assets/items/item-<id>.webp`. The ids match `ITEMS` in `index.html`, so
the shop wires up by id with no mapping table. **Pilot first:** do the 4 generic items as the
style test (they appear for every player); once they sit together as a set, batch the rest.

### Generic shelf (every discipline)

| ID | Subject |
|---|---|
| `item-water` | a battered aluminium water bottle, lightly scratched, the screw cap on a short cord |
| `item-snacks` | a small paper bag of trail food spilling a few almonds, dried figs, and a wrapped cereal bar |
| `item-sunscreen` | a well-used tube of sun cream, cap off, a smear of white at the nozzle |
| `item-firstaid` | a small soft first-aid pouch with a faded cross on the front, zip half open |

### Hiking shelf

| ID | Subject |
|---|---|
| `item-repellent` | a small pump-spray bottle of insect repellent, the paper label peeling at one corner |
| `item-poles` | a pair of telescoping aluminium trekking poles crossed in an X, cork grips, worn baskets |
| `item-map` | a folded topographic map with a small brass baseplate compass resting on top |
| `item-shell` | a packable hooded rain shell, half-stuffed, lightweight nylon catching the light |
| `item-lamp` | a head-torch with an elastic head strap looped beside it, lens facing forward |

### Sea-kayak shelf

| ID | Subject |
|---|---|
| `item-pfd` | a paddling buoyancy-aid lifejacket, sun-faded red, side buckles hanging open |
| `item-paddle` | a sea-kayak paddle with asymmetric blades, a black drip-ring on the shaft |
| `item-sprayskirt` | a neoprene kayak spray-skirt, the grab-loop at the front, deck cord around the rim |
| `item-drybag` | a roll-top dry bag rolled closed with the buckle clipped, air valve on the side |
| `item-bilgepump` | a hand bilge pump with a yellow foam float collar near the top |
| `item-towline` | a kayak tow-line coiled into a small deck bag, a carabiner clipped to the tail |
| `item-vhf` | a chunky handheld marine VHF radio, stubby rubber antenna, waterproof seams |
| `item-sparepaddle` | a two-piece split spare paddle, the join ferrule visible at the centre |
| `item-paddleleash` | a coiled stretchy paddle leash with a velcro cuff and a small clip |
| `item-cag` | a paddling cag (light neoprene-cuffed splash top), folded loosely |
| `item-compass` | a round deck-mount boat compass sitting beside a folded nautical chart |

### Canyoning shelf

| ID | Subject |
|---|---|
| `item-wetsuit` | a folded canyoning wetsuit with reinforced patches at the knees and seat |
| `item-canyonHarness` | a canyoning harness with a thick protective seat patch, leg loops open |
| `item-canyonHelmet` | a vented white water-sports helmet with a chin strap |
| `item-rope` | a neatly coiled static rope (warm sand colour) with a butterfly coil tie *(shared: the climbing shelf reuses `item-rope`)* |
| `item-descender` | a figure-eight / canyon descender device clipped to a screwgate carabiner |
| `item-throwline` | a small throw-bag with the rope tail poking out of the drawstring top |
| `item-canyonBag` | a small barrel-shaped canyon keg / dry bag with a clip lid |
| `item-canyonShoes` | a pair of wet canyoning shoes, deep-lugged soles, drainage mesh |
| `item-cowstails` | a pair of cowstail lanyards of webbing, each with a carabiner at the end |

### Rafting shelf

| ID | Subject |
|---|---|
| `item-raftThrow` | a river throw-bag, drawstring top, a loop of rope coiled inside |
| `item-raftPump` | a barrel foot-pump with a small patch-and-glue repair kit beside it |
| `item-raftFlip` | a flip line — a loop of flat webbing with a carabiner |
| `item-raftBail` | a cut-down plastic bailing bucket on a short cord |
| `item-raftSparePaddle` | a spare raft paddle with a T-grip handle and a scuffed blade |

### Cycling shelf

| ID | Subject |
|---|---|
| `item-bikeRepair` | a small unrolled bike repair kit — tyre levers, patches, quick-link chain pieces |
| `item-bikeTubes` | a coiled spare inner tube beside a folded spare tyre |
| `item-bikePump` | a mini frame pump lying next to a folding multitool |
| `item-bikeGPS` | a handlebar GPS cycle computer, a faint route line on the small screen |

### SUP shelf

| ID | Subject |
|---|---|
| `item-supPump` | a tall double-action SUP hand pump with a coiled inflation hose |
| `item-supFin` | a single spare SUP fin beside a small repair patch |
| `item-supAnchor` | a small folding grapnel anchor with a coil of line |

### Climbing shelf

| ID | Subject |
|---|---|
| `item-quickdraws` | a rack of quickdraws (sling + two carabiners each) hung on a gear sling |
| `item-beladevice` | a tube-style belay device on a pear-shaped screwgate carabiner |
| `item-climbChalk` | a climbing chalk bag dusted white at the rim, a small brush tucked in |
| `item-slings` | two nylon slings looped together with a couple of spare carabiners |
| `item-climbShoesOwn` | a pair of approach shoes, sticky rubber rand, laces loose |

*(Climbing also uses `item-rope` from the canyoning shelf — paint it once.)*

### Fleet items (per-client kit; sold in ones — these set the group-size cap)

Paint these to read as *client* / spare kit — a single clean rental object, or a small grouped
set where the item is "a set."

| ID | Shelf | Subject |
|---|---|---|
| `item-clientkayak` | sea kayak | a sit-on-top client kayak seen at a three-quarter angle, moulded seat, scupper holes, a carry handle |
| `item-clientpfd` | sea kayak | a client paddle-and-buoyancy-aid set — a lifejacket with a paddle laid across it |
| `item-clientwetsuit` | canyon | a client wetsuit, plain, folded neatly as rental stock |
| `item-clientharnessset` | canyon | a client harness with a white helmet nested inside the leg loops |
| `item-raft` | raft | a grey-and-yellow inflatable river raft at a three-quarter angle, thwarts and grab-lines visible |
| `item-raftkitset` | raft | a raft kit set grouped together — a T-grip paddle, a PFD, and a helmet |
| `item-clientbike` | cycle | a hardtail client mountain bike in clean side profile |
| `item-clientbikehelmet` | cycle | a vented cycling helmet, straps buckled |
| `item-clientboard` | SUP | an inflatable stand-up paddleboard with a paddle laid diagonally across it |
| `item-clientsupkit` | SUP | a SUP kit grouped — a paddle, a coiled ankle leash, and a buoyancy aid |
| `item-clientclimbkit` | climb | a client climbing harness with a helmet resting beside it |
| `item-clientclimbshoes` | climb | a pair of velcro rental climbing shoes, downturned toes |

**Wall test (per §767 ethos):** lay the 4 generic items in a row first. If they look like one
shop's stock — same light, same scale, same hand — proceed shelf by shelf. If any one looks
like a different game, re-roll it before batching the rest.

---

## Cross‑references

- `ART-DIRECTION.md` — the doctrine these prompts encode.
- `ASSET-MANIFEST.md` — the list of what to make, where each file lives, and (now) the
  generation log appendix.
- `LANGUAGE.md` — the voice the picture sits beside.
- `assets/` — file destinations (per‑tier subfolders).
- `index.html` — `imgFor(id)` auto‑detects shipped assets; add `id → path` to `ASSETS` map
  in the script section as each file lands.
