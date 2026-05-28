# PROMPT-PACK.md — ChatGPT prompts, copy‑paste ready

Every prompt below is a **single continuous block of natural language**, written for
ChatGPT's image generation (GPT‑Image / DALL·E / whichever current model the chat surface
uses). No `--` parameters, no special syntax — paste the whole block into a chat, hit enter,
get an image. Pair‑read with `ART-DIRECTION.md` (the doctrine these encode) and
`ASSET-MANIFEST.md` (the asset list and filenames).

> **Doctrine version note (2026-05-28)**: the doctrine evolved to *"the changing guide's
> desk + stylized illustrated realism"*. The earlier prompts in §3–§11 produced the 43
> assets already shipped under the earlier *"editorial gouache + woodcut bones"*
> direction; they're kept here for re‑generation parity. **For new production (Tier H/I/J/K
> — desks, backpacks, clients, reports — see §14)**, use the new style anchor in §3a and
> the new reference image, `assets/title/title-cover.webp` (*The First Booking*).

> **The single biggest consistency lever**: once *The First Booking* (`title-cover.webp`)
> is your reference, **start a new ChatGPT conversation** for each batch, **upload that
> image as the first attachment**, and prefix with: *"Match the visual style, palette,
> surface, and physical-objects-on-a-table feel of the reference image exactly. Generate
> the next image in the same illustrated series."*

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

## 2. What ChatGPT does differently from Midjourney

| | Midjourney | ChatGPT |
|---|---|---|
| Aspect ratio | `--ar 5:4` flag | "in portrait orientation, about 4:5 ratio" in the prompt body |
| Negative prompt | `--no <list>` flag | "Do not include X, Y, Z" sentences in the prompt body |
| Style reference | `--sref <url>` flag | Upload the reference image into the chat + text instruction |
| Character reference | `--cref <url>` flag | Upload + "give this person the same face" |
| Stylization control | `--style raw --s 150` | "Render this in a literal, illustrated style — not stylised toward your house aesthetic" |
| Consistency within batch | `--seed N` | Stay in the same conversation; ask for "the next image in the same series" |
| Text in image | Unreliable | Reliable; can ask for legible signs / labels / handwriting |

ChatGPT is **more literal and reverent** than Midjourney. It will follow long, structured,
detailed prompts faithfully. Lean into specificity — the prompts below are long because
length is the cost of getting exactly what you want.

---

## 3. The locked style anchor — *editorial gouache* (used for shipped 43; kept for re-generation)

Every legacy prompt (§4–§11) opens with the same style anchor paragraph, **verbatim**:

> *Render this as an editorial Mediterranean illustration in a matte gouache style — opaque
> chalky paint, no gradients, no glow, no drop shadows, no airbrush surface. Use
> woodcut‑style ink linework: confident ~2px lines on foreground figures, hairline ~1px on
> mid‑ground structures, and no outlines at all on landscape masses (hills, sea, sky read
> as flat colour blocks only). Flat lighting from a single warm sun direction; shadows are
> single blocks of a darker neighbour hue, never pure black. Use only this limited
> five‑colour palette: warm terracotta clay, sun‑bleached olive sage, deep Ionian sea blue,
> warm limestone bone cream, and warm near‑black ink — plus exactly one seasonal accent
> specified per asset. Hand‑made and opinionated, in the spirit of Edward Bawden travel
> posters, Hugo Pratt's Mediterranean comics, mid‑century New Yorker editorial
> illustration, and Greek folk woodcuts by A. Tassos. This is illustrated, NOT
> photographic, NOT 3D rendered, NOT a vector flat‑design graphic.*

---

## 3a. The current style anchor — *stylized illustrated realism + the desk* (USE THIS FOR NEW WORK)

Every new prompt (Tier H/I/J/K — see §14) opens with this paragraph, **verbatim**. The
shift: physical, layered, warm‑realist; objects on a real surface; a window onto Messinia
in the background; "indie‑game editorial illustration" rather than gouache woodcut.

> *Render this as a stylized illustrated realism scene in the warm Mediterranean register
> of the reference image — paper, sun, sea, stone, old gear, warm evening shadows, hand‑
> made depth. Objects sit on a real surface (wood table, ledger paper, organised desk),
> layered with believable overlap and slight perspective foreshortening. Subtle paper /
> linen / metal textures, but never noisy. No gradients, no glow, no drop shadows beyond
> the natural ground shadow of each object, no airbrush, no 3D render, no photoreal, no
> vector flat‑design, no cartoon, no anime, no cute. Limited five‑colour palette: warm
> terracotta clay #C8633D, sun‑bleached olive sage #7E8A4B, deep Ionian sea blue #1F4A56,
> warm limestone bone cream #EEE5D2, and warm near‑black ink #1B1B1F — plus exactly one
> seasonal accent specified per asset. Whenever the camera composition allows, an open
> window or doorway shows the outside — Kalamáta harbour at sunset, an olive grove, a
> mountain ridge. The world is in Messinia, mainland southern Greece, never the Cycladic
> islands (no whitewashed buildings, no blue domes). Mid‑close camera angle, foreshortened
> from a person's seat at the table, not top‑down and not straight‑on. Every object is
> doing one of three jobs: telling us where, telling us who, or telling us what just
> happened — nothing is decorative. Match the visual feel of the attached reference image
> (The First Booking) exactly.*

---

## 4. The pilot trio — DO THESE FIRST

Each block below is one prompt. Open a new ChatGPT conversation. Paste the **entire** code
fence content. Generate. If you re‑roll, send: *"Try again — same prompt, same style, just
a fresh take."*

### `pilot-01-hero-alani` — comic default register · noon‑gold accent
Save to: `assets/heroes/hero-09-alani.png`

```
Render this as an editorial Mediterranean illustration in a matte gouache style — opaque chalky paint, no gradients, no glow, no drop shadows, no airbrush surface. Use woodcut-style ink linework: confident ~2px lines on foreground figures, hairline ~1px on mid-ground structures, and no outlines at all on landscape masses (hills, sea, sky read as flat colour blocks only). Flat lighting from a single warm sun direction; shadows are single blocks of a darker neighbour hue, never pure black. Use only this limited five-colour palette: warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, and warm near-black ink — plus exactly one seasonal accent of noon gold. Hand-made and opinionated, in the spirit of Edward Bawden travel posters, Hugo Pratt's Mediterranean comics, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos. This is illustrated, NOT photographic, NOT 3D rendered, NOT a vector flat-design graphic.

Frame this in portrait orientation, slightly taller than wide (about 4:5 ratio).

Subject: A Greek man in his early thirties leaning back against the seat of a cheap two-stroke moped parked outside a village kafeneio in Messinia, mainland southern Greece. He wears a faded olive button-down shirt with sleeves rolled to the elbow, jeans, dusty boots, and a worn leather wristband on his right wrist. An unlit cigarette is tucked behind his right ear. He has a half-knowing smirk, and his eyes glance off-frame to the left as if greeting someone just outside the frame. The kafeneio doorway is in deep Ionian shadow behind him, with a hand-painted Greek sign above it (the lettering should be an undecipherable hand-painted shape, not legible text). Late afternoon light, terracotta dust on the road. Compose him as a mid-shot, waist-up, single figure positioned slightly off-axis in the frame. The noon-gold accent should appear in exactly one place: catching the moped tank's chrome and the painted sign's lettering — nothing else.

Do not include: any legible text, captions, labels, watermarks or signatures; no emoji, drop shadow, glow, gradient, sparkle, motion blur, or lens flare; no anime, chibi, mascot, cute, or cartoon styling; no photorealism, 3D render, octane render, or HDR look; no vector or flat-design graphic look; no corporate-Memphis illustration style; no Santorini whitewash, no blue domes; no decorative ornamental borders; no AI artefacts (no extra fingers, no fused limbs, no melted faces). The man should have realistic adult human proportions, not stylised toward cute.
```

### `pilot-02-place-voidokilia` — place silhouette · noon‑gold accent
Save to: `assets/places/place-voidokilia.png`

```
Render this as an editorial Mediterranean illustration in a matte gouache style — opaque chalky paint, no gradients, no glow, no drop shadows, no airbrush surface. Use woodcut-style ink linework: confident ~2px lines on foreground figures, hairline ~1px on mid-ground structures, and no outlines at all on landscape masses (hills, sea, sky read as flat colour blocks only). Flat lighting from a single warm sun direction; shadows are single blocks of a darker neighbour hue, never pure black. Use only this limited five-colour palette: warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, and warm near-black ink — plus exactly one seasonal accent of noon gold. Hand-made and opinionated, in the spirit of Edward Bawden travel posters, Hugo Pratt's Mediterranean comics, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos. This is illustrated, NOT photographic, NOT 3D rendered, NOT a vector flat-design graphic.

Frame this in wide landscape orientation (about 8:5 or 16:10 ratio).

Subject: Voidokilia Bay in Messinia, mainland southern Greece — the famous perfect crescent dune, seen from the elevation of the Pylos fort side at mid-afternoon. The crescent of pale bone-cream sand curves left to right across the lower third of the frame. Deep Ionian sea blue fills the bay. Sun-bleached olive sage scrub clings to the dunes. The inland Gialova lagoon is visible behind the dune ridge, with three small flamingo silhouettes far in the distance. On the far right, the silhouette of a Venetian fortress sits on a low promontory. Two small human-scale figures walk the dune edge mid-frame for scale, drawn with ink linework. The horizon is very slightly sloped right-to-left, implying a light meltemi wind off the gulf. The noon-gold accent should appear in exactly two small places: catching the fortress wall in afternoon light, and one of the figures' hats — nothing else.

This is mainland Messinia in southern Greece, NOT the Cycladic islands. Critically important: do not include any whitewashed buildings, no blue-domed churches, no infinity-pool aesthetic, no cruise-port look. Do not include: any legible text, watermarks or signatures; no emoji, drop shadow, glow, gradient, sparkle, or lens flare; no anime, chibi, mascot, cute, or cartoon styling; no photorealism, 3D render, or HDR look; no vector or flat-design graphic look; no decorative ornamental borders; no AI artefacts.
```

### `pilot-03-scene-hilux-dawn` — pathos still · rain‑grey accent · NO FIGURES
Save to: `assets/scenes/scene-hilux-dawn.png`

```
Render this as an editorial Mediterranean illustration in a matte gouache style — opaque chalky paint, no gradients, no glow, no drop shadows, no airbrush surface. Use woodcut-style ink linework: confident ~2px lines on the vehicle, no outlines at all on sky or ground (which read as flat colour blocks only). Flat lighting from a single soft warm dawn sun direction; shadows are single blocks of a darker neighbour hue, never pure black. Use only this limited five-colour palette, slightly desaturated for the pathos register: warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, and warm near-black ink — plus exactly one seasonal accent of rain grey. Hand-made and opinionated, in the spirit of Edward Bawden travel posters, Hugo Pratt's Mediterranean comics, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos. This is illustrated, NOT photographic, NOT 3D rendered, NOT a vector flat-design graphic.

Frame this as a wide cinematic landscape (about 16:10 ratio).

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
Render this as an editorial Mediterranean illustration in a matte gouache style — opaque chalky paint, no gradients, no glow, no drop shadows, no airbrush surface. Use woodcut-style ink linework: confident ~2px lines on figures and objects, hairline on mid-ground structures, and no outlines on landscape masses (which read as flat colour blocks only). Flat lighting from a single warm sun direction; shadows are single blocks of a darker neighbour hue, never pure black. Use only this limited five-colour palette: warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, and warm near-black ink — plus exactly one seasonal accent of oleander pink. Hand-made and opinionated, in the spirit of Edward Bawden travel posters, Hugo Pratt's Mediterranean comics, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos. This is illustrated, NOT photographic, NOT 3D rendered, NOT a vector flat-design graphic.

Frame this as a wide cinematic landscape (about 16:10 ratio).

Subject: The interior of a working-class Greek mother's kitchen in Kalamata, southern Greece. The kitchen table sits in the foreground covered with an oilcloth painted with cheerful yellow lemons, set with the good plates for guests, four place settings out. A worn wooden spoon rests on a small saucer. The soft warm glow of an oven mid-bake lights the back of the room. The mother is visible only from behind, working dough at the counter — we see her apron strings, her grey hair pinned up, her weathered hands at work. We never see her face. An open doorway at the back of the room leads to a small sun-drenched courtyard, with the late afternoon Mediterranean light spilling across the kitchen floor in warm bands. Intimate, warm, domestic atmosphere. The oleander-pink accent appears only in the painted lemons on the oilcloth and in the apron ties — nothing else.

Critically: the mother must be seen from behind only — no face visible to the viewer. Do not include any other people. Do not include: any legible text or labels; no emoji, drop shadow (beyond the natural floor shadow), glow, gradient, sparkle, or lens flare; no anime, chibi, mascot, cute, or cartoon styling; no photorealism, 3D render, or HDR look; no vector or flat-design graphic look; no decorative ornament beyond the painted oilcloth lemons; no AI artefacts.
```

### `title-cover` — cover plate background only (composite type separately)
Save to: `assets/title/title-cover.png` (background layer; wordmark added separately)

> **Note**: For the actual game title wordmark, generate the background below in ChatGPT
> and composite the type (*Outdoor Guide Life* in serif, *or no Life* in italic noon gold)
> in Figma or Affinity Designer. ChatGPT can do legible text in images, but for a
> brand-critical wordmark, vector typography in a design tool gives sharper results.

```
Render this as an editorial Mediterranean illustration in a matte gouache style — opaque chalky paint, no gradients, no glow, no drop shadows. Use woodcut-style ink linework only on the rooftop silhouette and the cypress, with the sky as a completely flat colour block. Flat lighting. Use only this limited five-colour palette: warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, and warm near-black ink. Hand-made and opinionated, in the spirit of Edward Bawden travel posters and Greek folk woodcuts by A. Tassos.

Frame this as a wide cinematic landscape (about 16:10 ratio).

Subject: A simple, quiet Mediterranean horizon. The bottom fifth of the frame is a single low strip of terracotta-tiled village rooftops in soft silhouette. The upper four-fifths is a pale bone-cream pre-dawn sky, with one band of warmer terracotta-tinged cloud near the horizon. In the lower right corner, a single thin cypress tree silhouette. This is a quiet establishing shot — the background for a book cover, with text to be added separately later. Leave most of the frame as open sky.

Critically: no people, no figures of any kind, no text, no logo, no wordmark, no buildings other than the rooftop silhouette strip. Do not include: any text, watermark, or signature; no emoji, drop shadow, glow, gradient, sparkle; no anime or cartoon styling; no photorealism or 3D render; no vector or flat-design look; no Santorini whitewash, no blue domes; no decorative ornament.
```

### `title-wordmark` — SKIP in ChatGPT, use a design tool
Use Affinity Designer / Figma / Illustrator. Two lines: *Outdoor Guide Life* in a serif
(Fraunces or Spectral), in ink `#1B1B1F`; *or no Life* in italic, in noon gold `#E0A951`,
slightly off‑axis below. Export as SVG to `assets/title/title-wordmark.svg`.

---

## 7. Tier B — heroes (10)

Open one chat, attach `pilot-01-hero-alani`, send the style‑lock preface from §5, then send
each hero prompt in sequence. Each portrait is **portrait orientation, about 4:5 ratio**.

### `hero-01-medic` — The almost‑doctor (♂) · rain‑grey accent
Save to: `assets/heroes/hero-01-medic.png`

```
Same editorial Mediterranean illustration style as the reference image — matte gouache, woodcut linework, flat lighting, five-colour palette of terracotta, olive, sea blue, bone, and ink. The seasonal accent for this image is rain grey.

Frame in portrait orientation (about 4:5 ratio).

Subject: A Greek man in his early thirties, the almost-doctor. He holds a small green canvas medic kit with a white cross, taped at one corner where the seam is wearing. His right thumb runs along a kit strap, checking and re-checking. He wears a worn faded outdoor button-down and trekking trousers. Short dark hair. Kind, concerned eyes glancing down at the kit. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background with a hint of cloud and the quiet light of a hospital corridor at the edge. Gentle, cautious posture. The rain-grey accent appears only in the medic kit's webbing straps and in the corridor shadow behind him.

Greek man, adult realistic proportions, illustrated not photographic. Do not include scrubs, hospital uniform, surgical mask, or stethoscope around the neck. Do not include any text or labels on the kit. No emoji, drop shadow, glow, gradient, sparkle. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts (no extra fingers, no fused limbs, no melted face).
```

### `hero-02-chef` — The Mykonos chef (♂) · noon‑gold accent
Save to: `assets/heroes/hero-02-chef.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is noon gold.

Frame in portrait orientation (about 4:5 ratio).

Subject: A Greek man in his early thirties, the once-celebrated Mykonos chef. He is passing a foil-wrapped parcel of food forward with both hands to someone just off-frame. A small sea bream fish tattoo on his right forearm. A weathered chef's apron tied loose over a faded t-shirt. A slight half-smile — not quite hungry himself, the kind who feeds others first. Dark hair pushed back from his forehead. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background with a hint of warm taverna kitchen depth behind him. Generous, welcoming gesture. The noon-gold accent appears only in the foil of the food parcel and in the apron's stitching.

Greek man, adult realistic proportions, illustrated not photographic. Do not include a tall white chef's toque or restaurant uniform. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-03-soldier` — The army washout (♀) · rain‑grey accent
Save to: `assets/heroes/hero-03-soldier.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is rain grey.

Frame in portrait orientation (about 4:5 ratio).

Subject: A Greek woman in her early thirties, cut on the final day of special-forces selection. She holds a windworn topographic map with curled edges in both hands, but her eyes are off-frame upward, reading the sky like a sentence. Short, pragmatic dark hair. A technical olive softshell jacket. Alert, calm posture with the wind moving in her clothes. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream sky background with bruise-coloured weather forming in the upper right corner. The rain-grey accent appears only in the gathering storm clouds and in the map's well-worn creases.

Greek woman, adult realistic proportions, illustrated not photographic. Do not include military uniform, camouflage, or any weapon. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-04-sailor` — The deckhand (♀) · noon‑gold accent
Save to: `assets/heroes/hero-04-sailor.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is noon gold.

Frame in portrait orientation (about 4:5 ratio).

Subject: A Greek woman in her early thirties, years on cargo ships and caïques now over. She is coiling a thick wet bow line in calloused, capable hands. One hand rests on the bow of a sit-on-top sea kayak beached on flat rocks. A dry bag at her feet. She is eyeing a calm bay off-frame to her right. Salt-bleached t-shirt, rolled cargo shorts, hair tied back, sun-tanned forearms. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background with the calm deep Ionian sea visible behind. Working, unhurried posture. The noon-gold accent appears only on the wet rope catching the sun and on the kayak's deck rigging.

Greek woman, adult realistic proportions, illustrated not photographic. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-05-influencer` — The influencer (♀) · oleander‑pink accent
Save to: `assets/heroes/hero-05-influencer.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is oleander pink.

Frame in portrait orientation (about 4:5 ratio).

Subject: A Greek woman in her late twenties. She is half a step ahead of an unseen group, framing a shot with her phone mounted on a small handheld tripod gimbal. A folded ring light is clipped to her small pack. A light breeze in her hair. Golden afternoon light. The trail is visible a step behind her. Focused expression, chasing the shot. Fashionable but practical outdoor clothing. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background with a hint of golden coast visible behind. The oleander-pink accent appears only in her scarf and on her phone case.

Greek woman, adult realistic proportions, illustrated not photographic. Do not show her taking a selfie — she is framing a shot of the scene ahead of her, the phone is pointed away from her face. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-06-engineer` — The startup engineer (♂) · noon‑gold accent
Save to: `assets/heroes/hero-06-engineer.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is noon gold.

Frame in portrait orientation (about 4:5 ratio).

Subject: A Greek man in his early thirties, the startup engineer whose company ran out of runway at eleven users. He holds a small clipboard with careful pencil notes. A Leatherman multi-tool is clipped to his belt. Simple wire-frame glasses. A focused, counting expression — as if mentally calculating the throughput of something. A casual button-down rolled to the forearms. Dark hair. The corner of a taverna is visible in the background. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background. Methodical, careful posture. The noon-gold accent appears only on the multi-tool's casing and on the clipboard's metal clip.

Greek man, adult realistic proportions, illustrated not photographic. Do not include a laptop, a startup hoodie, or any tech-bro signifier — he is past that life now. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-07-scholar` — The philologist (♀) · cypress‑green accent
Save to: `assets/heroes/hero-07-scholar.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is cypress green-black.

Frame in portrait orientation (about 4:5 ratio).

Subject: A Greek woman in her early thirties, the philologist with four languages and no permanent post. She is mid-sentence, holding a slim leather notebook open in one hand showing handwritten lines in four different scripts (Greek, Latin, Arabic, and a Cyrillic script). Her other hand makes a gentle didactic gesture. A small group of unseen listeners is implied just out of frame, leaning in to hear her. Library-warm afternoon light. Simple linen dress, hair tied with a ribbon, intelligent warm expression. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background with a hint of book spines behind. The cypress-green accent appears only in her hair ribbon and the book spines behind her.

Greek woman, adult realistic proportions, illustrated not photographic. Do not include glasses on a chain, an owl, an academic gown, or any "wise teacher" cliché props. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-08-fasaia` — The Fasaia (♀) · oleander‑pink accent
Save to: `assets/heroes/hero-08-fasaia.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is oleander pink.

Frame in portrait orientation (about 4:5 ratio).

Subject: A Greek woman in her late twenties, returned from Goa speaking of "energy" and "alignment". Her breath is drawn in, eyes half-closed, a small composed half-smile. A hand-woven shawl-scarf over her shoulders in earthy patterns. Beaded jewelry at her wrists. The warm blurred strung-bulb lights of a distant August panigiri village festival glow behind her at far depth. Her hair is loose and full. Calm, centred posture. Mid-shot, waist-up, single figure positioned off-axis on a bone-cream background. The oleander-pink accent appears only in the scarf's pattern and in the festival lights behind her.

Greek woman, adult realistic proportions, illustrated not photographic. Do not include a lotus pose, a yoga mat, mandala motifs, or visible halo / aura — she is a person, not an icon. No emoji, drop shadow, glow, gradient (other than the soft blurred lights behind her). No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `hero-09-alani` — covered by pilot‑01 above.

### `hero-10-villager` — The Greek Villager (♂) · cypress‑green accent
Save to: `assets/heroes/hero-10-villager.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is cypress green-black.

Frame in portrait orientation (about 4:5 ratio).

Subject: A Greek man in his mid forties, the villager who ran the family flock and olive grove until a subsidy cut and a beach bar finished it off. One hand rests flat on a fieldstone wall that used to be his. A worn, curved olive-pruning blade hangs at his belt. A younger cousin is half-visible in the frame behind him, also working at the wall. An old olive grove fades inland under afternoon light. His sun-darkened, weathered face. Square, stoic posture. A simple work shirt and old trousers. Mid-shot, waist-up, single foreground figure positioned off-axis on a bone-cream sky background. The cypress-green accent appears only in the distant olive grove and on the pruning blade's wooden handle.

Greek man, adult realistic proportions, illustrated not photographic. Do not include any traditional Greek costume (no fustanella, no folk dress) — this is a working modern villager. No emoji, drop shadow, glow, gradient. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

---

## 8. Tier E — places (10)

Open a new chat, attach `pilot-01-hero-alani` (or `pilot-02-place-voidokilia` if you prefer
a place reference), send the style‑lock preface from §5, then send each place prompt. Each
is **wide landscape, about 8:5 ratio**.

### `place-kalamata` — Kalamata harbour · noon‑gold accent
Save to: `assets/places/place-kalamata.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is noon gold.

Frame in wide landscape orientation (about 8:5 ratio).

Subject: The stone quay harbour of Kalamata in southern Greece at golden afternoon. A curved line of small waterfront cafés with chairs out on the pavement. A single working caïque (Greek fishing boat) tied up against the quay. The distant inland silhouette of the Taygetos mountain range fading purple-blue in the far background. Two small human-scale figures walking the quay mid-frame. A café table with two coffee glasses in the near right corner. Mid-distance landscape composition. The noon-gold accent appears only on the boat's mast and on a cluster of the café tablecloths.

This is mainland Messinia in southern Greece, NOT the Cycladic islands — no whitewashed buildings, no blue domes, no cruise ships, no yachts. Do not include any legible text or signage. No emoji, drop shadow, glow, gradient, sparkle, lens flare. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-polylimnio` — Polylimnio waterfalls · cypress‑green accent
Save to: `assets/places/place-polylimnio.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is cypress green-black.

Frame in wide landscape orientation (about 8:5 ratio).

Subject: The Polylimnio tiered waterfall pools in Messinia, southern Greece. Multiple stacked emerald pools cascade down slick green stone in deep forested shade, viewed from mid-slope above one of the lower pools. Dense fig and plane tree canopy above. One single human-scale figure swimming in the lowest pool for scale. Dappled forest light. Cool water atmosphere. Mid-distance landscape composition. The cypress-green accent appears only in the deepest forest shadows and in the pool depths.

This is the Greek mainland, not a tropical jungle. Do not include exotic tropical plants, bright flowers, or rainforest density — it is a Mediterranean canyon forest of figs, planes, and oleander. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-voidokilia` — covered by pilot‑02 above.

### `place-pylos-methoni` — Pylos / Methóni Venetian fortress · noon‑gold accent
Save to: `assets/places/place-pylos-methoni.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is noon gold.

Frame in wide landscape orientation (about 8:5 ratio).

Subject: The Venetian fortress of Methoni in Messinia, southern Greece, seen from sea level. A low promontory of weathered stone walls and a single square tower projects into the deep Ionian. A small mainland Greek fishing harbour at the foot of the fortress, with two or three caïques tied up. The bay opens wide to the right. Late afternoon warm light. Two small figures fishing from the harbour mole for scale. Mid-distance landscape composition. The noon-gold accent appears only on the fortress wall at golden hour and on the boat masts.

This is mainland Greece, not the Cyclades. Do not include any whitewashed buildings, blue domes, infinity-pool aesthetic, or cruise port — this is a working historic Venetian-era fortress harbour. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-mavromati` — Ancient Messene at Mavromáti · noon‑gold accent
Save to: `assets/places/place-mavromati.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is noon gold.

Frame in wide landscape orientation (about 8:5 ratio).

Subject: The archaeological site of Ancient Messene at Mavromati village in the Peloponnese, Greece. Broken Greek classical columns and tumbled stone blocks under low golden-hour afternoon light. The village spring at the edge of the site with a small stone basin. One small human-scale figure standing among the columns for scale. Ancient olive trees framing the scene. Open countryside opening toward distant mountains. The deep timelessness of a Greek archaeological site, but rendered as a quiet illustrated scene — not fantasy ruins. The noon-gold accent appears only on the column tops catching the golden-hour light.

Do not include dramatic clouds, lightning, mythological figures, or any "fantasy ruins" aesthetic. This is a real, quiet, archaeological site. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-neda` — Neda gorge · cypress‑green accent
Save to: `assets/places/place-neda.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is cypress green-black.

Frame in wide landscape orientation (about 8:5 ratio).

Subject: The Neda gorge in the Peloponnese, Greece. Narrow ribs of cold grey limestone close in to form a deep slot canyon. A single emerald pool sits at the canyon floor below. A hairline human figure traverses the high rim for scale. Deep cool blue-green shade with one shaft of warm light reaching the pool. Mossy wet rock walls. The sound of water implied. Vertical, narrow, mid-distance landscape composition. The cypress-green accent appears only in the deepest canyon shadows and on the mossy rock.

This is southern Greece, not the American Southwest — no Antelope Canyon sandstone red, no desert palette. The stone is cold grey limestone, the moss is European green. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-lousios` — Lousios gorge with monastery · cypress‑green accent
Save to: `assets/places/place-lousios.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is cypress green-black.

Frame in wide landscape orientation (about 8:5 ratio).

Subject: The Lousios gorge in Arcadia, mainland Greece. A forested gorge with a small medieval Byzantine Orthodox monastery clinging to a ledge midway up the cliff face. A wooden suspension bridge crosses the gorge at the bottom over a green river. Two small human-scale figures cross the bridge for scale. Dense fir and chestnut canopy on both sides. The deep cool shadow of the gorge below. The monastery is painted in white-and-red with a small dome roof. Mid-distance landscape composition. The cypress-green accent appears only in the gorge shadows and in the forest depth.

This is a real Greek Byzantine monastery, not a fantasy castle or a tropical scene. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-taygetos` — Taygetos alpine ridge · noon‑gold accent
Save to: `assets/places/place-taygetos.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is noon gold.

Frame in wide landscape orientation (about 8:5 ratio).

Subject: The alpine summit ridge of Mount Taygetos in the Peloponnese, Greece, in mid-summer with streaks of unmelted snow in the north-facing couloirs. The tiny stone cell-chapel of Profitis Ilias is silhouetted on the highest peak. A single human-scale figure stands on the ridge below the summit for scale. Cold, thin, clear high-altitude light. The Peloponnese opens below in fading olive and sea blue toward the horizon. Austere alpine atmosphere. Mid-distance landscape composition. The noon-gold accent appears only on the chapel walls catching altitude light.

This is the Greek Peloponnese — not the Swiss Alps. The mountain is rocky and exposed, not Alpine-meadow lush. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-mani` — Mani peninsula tower houses · rain‑grey accent
Save to: `assets/places/place-mani.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is rain grey.

Frame in wide landscape orientation (about 8:5 ratio).

Subject: The Mani peninsula in the southern Peloponnese, Greece. A cluster of austere slate-grey stone tower houses (the famous Maniote pyrgoi defensive towers) rises vertically up a barren rocky hillside. Salt-scoured prickly scrub and aloe in the foreground. An empty unpaved road bends south toward distant Cape Tainaron. No trees, no greenery — this is the dry, hard, austere Mani. Hard afternoon light. The sea barely visible far right as a thin blue band. One single human-scale figure walks the road for scale. The wind in the scrub is implied by a slightly sloped horizon. Mid-distance landscape composition. The rain-grey accent appears only in the tower stone and in the road.

This is the dry austere Mani — no lush vegetation, no tropical look, no Santorini whitewash, no blue domes. The towers are slate-grey stone, sun-bleached, severe. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

### `place-kardamyli` — Kardamyli stone harbour · noon‑gold accent
Save to: `assets/places/place-kardamyli.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is noon gold.

Frame in wide landscape orientation (about 8:5 ratio).

Subject: The small stone fishing harbour of Kardamyli on the Messinian Mani coast, Greece. Ancient plane trees shade a stone-paved waterfront. A stone-built quay with one or two caïques tied up. The old cobbled mule path turns uphill behind the village toward the Taygetos foothills. Two figures share afternoon coffee at a café table under the plane trees. Warm late golden light. Mid-distance landscape composition. The noon-gold accent appears only on the boat masts and on the café lanterns above the tables.

This is mainland Greece, not the Cyclades — no whitewashed buildings, no blue domes. Kardamyli is honey-coloured stone and plane-tree green. No emoji, drop shadow, glow, gradient, sparkle. No anime, photorealism, 3D, vector, or flat-design look. No decorative ornament. No AI artefacts.
```

---

## 9. Tier F — set pieces (4)

### `scene-hilux-dawn` — covered by pilot‑03 above.

### `scene-panigiri` — August village festival · noon‑gold accent · parody‑lift density
Save to: `assets/scenes/scene-panigiri.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is noon gold.

Frame as a wide cinematic landscape (about 16:10 ratio).

Subject: A Greek village panigiri summer festival at full swing in the village square at evening. A long communal table runs through the foreground, laden with shared bottles of tsipouro and ouzo and plates of food. Strung bulb lights criss-cross the square overhead. A small wooden stage stands in the back with a three-piece band mid-song — bouzouki, violin, and laouto. The village dancers form a half-circle, hand-in-hand, mid-step. An old man pours tsipouro for a stranger. A small child runs between legs. Three or four villagers in their seventies are seated at the table. An unlit church lantern stands at the side. The silhouette of terracotta-tiled village rooftops sits behind. Maximum comic density — the crowd is the protagonist. Joyful, warm, slightly chaotic. The noon-gold accent appears throughout the strung bulb lights and on the brass instruments.

This is a real Greek panigiri — traditional acoustic instruments only, no electric guitar, no modern band setup. Do not include: any legible text (no readable signs, no band name); no emoji; no drop shadow, glow, gradient (other than the natural glow from the strung bulbs); no anime, chibi, mascot, or cute styling; no photorealism, 3D, or HDR; no vector or flat-design look; no decorative ornament; no AI artefacts.
```

### `scene-radio-crisis` — Phase 2 management beat · rain‑grey accent
Save to: `assets/scenes/scene-radio-crisis.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is rain grey.

Frame as a wide cinematic landscape (about 16:10 ratio).

Subject: A Greek woman guide stands on a high mountain trail in the Peloponnese, shown mid-shot. She holds a black plastic two-way handheld radio handset to her ear with one hand. Her other hand points off-frame to the bruise-coloured weather closing in behind her in the upper third of the frame. A small group of four clients waits twenty meters behind her on the trail, looking up at her. Her face is calm but reading the sky. A technical jacket and a small pack. Single protagonist figure off-axis, with the storm and the clients as supporting cast. A decision moment. The rain-grey accent appears only in the gathering storm clouds.

Critically: she is using an analogue two-way radio handset — not a modern smartphone, not a smartwatch. The technology should look professional and slightly worn. Do not include lightning bolts, dramatic rain streaks, or weather drama beyond the cloud colour. No emoji, drop shadow, glow, gradient, sparkle. No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

### `scene-first-hire` — phase transition pathos · oleander‑pink accent
Save to: `assets/scenes/scene-first-hire.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is oleander pink. This is a pathos beat — drop saturation a notch, hold the frame still.

Frame as a wide cinematic landscape (about 16:10 ratio).

Subject: Two figures stand side by side at the doorstep of an old Kalamata family stone house at first light — the protagonist and the new young woman hire named Maria. Both hold small ceramic mugs of coffee. Both look off into the next day, to the right of frame. We do not see either of their faces — they are both looking away. The kitchen door behind them is ajar, with the silhouette of an older woman (the protagonist's mother) glimpsed inside, still working at the stove with the warm orange oven glow behind her. The soft pale dawn light catches the door frame and the worn flagstone step. Two figures in shared quiet companionship — a pathos beat. The oleander-pink accent appears only in the dawn sky and on the rim of one of the coffee mugs.

Critically: no faces visible to the camera — both foreground figures look away, the mother is a silhouette inside. No hugging, no embrace, no overt emotion — this is restrained quiet. No emoji, drop shadow (other than the natural step shadow), glow, gradient (other than the soft dawn sky). No anime, chibi, mascot, or cute styling. No 3D, no photorealism. No AI artefacts.
```

---

## 10. Tier C / D — glyphs (7 disciplines + 6 weather)

**Honest caveat**: ChatGPT can generate icon‑like images, but the result is rasterised
and won't match the cleanliness of a hand‑drawn vector glyph. Three paths:

1. **Best**: hand‑draw the 13 glyphs in Figma or Affinity Designer in the woodcut style.
   Twenty minutes of vector work beats fifty ChatGPT rolls for diagrammatic icons.
2. **Hybrid**: use ChatGPT to generate a reference, trace it into SVG in Figma.
3. **ChatGPT only**: accept raster PNG at small display size (32px), use the template below.

If going path 3, use this template — change only the `{ICON SUBJECT}`:

```
Render a small icon in the style of a vintage etched brass plaque — a single warm-near-black ink line drawing on a warm limestone bone cream background. Single confident woodcut-style line weight throughout. Diagrammatic and reduced — like a mid-century European travel pictogram or a Greek folk woodcut by A. Tassos. Centred composition. Square 1:1 framing. No text, no label, no border, no shading, no gradient, no colour fill — just the line drawing on the bone background.

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
Same editorial Mediterranean illustration style as the reference image. No seasonal accent — keep this in the core five colours only.

Frame in landscape orientation (about 4:3 ratio).

Subject: A linen-bound notebook lying slightly open on an old wooden taverna table, viewed from a three-quarter slightly top-down angle. The day's entry is handwritten in dark serif ink on the visible page (the handwriting itself should be indecipherable hand-drawn shapes rather than legible text). A fountain pen rests beside it. Soft warm late-afternoon window light from the upper left. The notebook's linen cover is bone-cream. No other objects in frame. Quiet, intimate, object-as-subject composition.

Do not make the handwriting legible — it should suggest text without being readable. No emoji, drop shadow, glow, gradient, sparkle. No anime, chibi, or cute styling. No 3D, no photorealism. No vector or flat-design look. No decorative ornament. No AI artefacts.
```

### `chrome-certificate`
Save to: `assets/chrome/chrome-certificate.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is terra red (used only in the wax stamp).

Frame in landscape orientation (about 4:3 ratio).

Subject: An official Greek HATEOA (Hellenic Outdoor Trainers and Educators Association) hiking guide certificate document on cream paper. A red rubber wax-style stamp is in the lower right corner. A signature line in ink at the bottom. A simple official border line in ink around the document edge. Viewed from a three-quarter slightly top-down angle on a plain bone-cream background. A deadpan, official, period-correct look. The body text should be simulated illegible serif text (shapes that look like type, not actually legible). Three-quarter view, single object as subject.

Do not make the body text legible. Do not include any modern logos, modern fonts, or contemporary corporate-association look — this should feel like a real, slightly old-fashioned Greek hiking certification. No emoji, drop shadow, glow, gradient, sparkle. No anime, chibi, or cute styling. No 3D, no photorealism. No vector or flat-design look. No decorative ornament beyond a simple official border. No AI artefacts.
```

### `chrome-loan-papers`
Save to: `assets/chrome/chrome-loan-papers.png`

```
Same editorial Mediterranean illustration style as the reference image. The seasonal accent for this image is terra red (only in the bank stamp).

Frame in landscape orientation (about 4:3 ratio).

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
| Drift toward "stock illustration" / vector flat-design | Re-emphasise "matte gouache, hand-made, illustrated NOT vector" earlier in the prompt; cite Bawden + Tassos again at the end |
| Faces look generic / not specifically Greek | Add "Greek Mediterranean features, dark hair, olive skin" explicitly in the subject line |
| Faces look like mascots / cute | Add "adult realistic proportions, serious illustrated portrait, not stylised toward cute"; never say "character" — say "figure" or "person" |
| Outlines appearing on hills/sea/sky | Re-emphasise "landscape masses read as flat colour blocks ONLY, no outlines on hills sea or sky" |
| Six+ colours leaking in | Trim the accent description to one or two specific objects only; reinforce "limited five-colour palette of ONLY terracotta, olive, sea blue, bone, and ink" |
| Santorini whitewash leaking | Add place name twice; explicitly call out "this is mainland Messinia, NOT the Cycladic islands" |
| Hilux scene grows people anyway | Restate "completely empty of any people, animals, or birds — the truck must be alone in the frame. Do not add any figures." three times if needed |
| Text appearing where it shouldn't | Say "no readable text — any signs or papers should show indecipherable hand-painted shapes only" |
| Style drift across batch | Always upload pilot-01 as reference, always send the §5 style-lock preface, always stay in the same conversation for a whole batch |
| Hero faces inconsistent across batch | After hero-01 generates well, upload IT also as a second reference for the rest of the heroes batch |
| Aspect ratio not respected | Re-send the prompt with the aspect line at the very TOP, then re-state at the bottom: "Final reminder: portrait orientation, about 4:5 ratio" |
| Image too dark / desaturated overall | Drop the words "shadow" and "dust" by one each; emphasise "warm afternoon light" |

---

## 14. NEW TIERS — the changing desk doctrine (use §3a, not §3)

For the surfaces added in the 2026-05-28 doctrine evolution. Use **§3a** style anchor
(stylized illustrated realism, desk‑physicality). **Always attach `title-cover.webp`
(*The First Booking*) as the reference image and instruct ChatGPT to match it exactly.**

Workflow:
1. Open a new ChatGPT conversation per batch.
2. Drag `assets/title/title-cover.webp` into the chat. First message: *"This is the locked
   style reference for an entire series I'm producing. Match its surface, palette, lighting,
   physical-objects-on-a-table feel, and Mediterranean atmosphere exactly. I'll send you
   subjects in subsequent messages."*
3. ChatGPT acknowledges. Then paste the prompt blocks below in sequence.

### Tier H — Phase 2/3/4 desks (3)

#### `desk-phase2-working` — the working desk · summer accent (noon gold)
Save to: `assets/desk/desk-phase2-working.webp`

```
[§3a style anchor — verbatim]

Frame this as a wide cinematic landscape (about 16:10 ratio).

Subject: A working desk in Kalamata at late afternoon, viewed slightly from above and to the side — the angle a person at the desk would see it. On the surface: two staff cards laid out (one labelled "Maria", one "Nikos", with small painted portrait icons and a stat strip in mono type), a small cork route board pinned with three index cards naming day-routes (Voidokilia, Polylimnio, Mavromati) in Greek and English, two handheld guide radios sitting on small black chargers with status lights on, a gear-checklist clipboard with hand-written ticks, a manila folder labelled "REPAIR" with a few invoices peeking out, an open cash ledger book with neat handwritten entries and a column of euro figures. The same kitchen of the reference image — Kalamata harbour visible through the window at sunset, terracotta rooftops, the sea. The table has organised itself; the chaos of solo guiding has become coordination. Noon-gold accent appears on the radio status lights and one route-card edge catching the window light.

Greek text where it naturally appears (route names on cards, "REPAIR" stamp, ledger column headers), but illegible "writing shapes" for any actual narrative text. Do not include any people in the frame, only the desk and its objects. Match the warm dusk light, the open window onto Messinia, and the physical-objects-on-a-table register of the reference image. No people, no anime, no cartoon, no photoreal, no 3D, no vector flat design, no dashboard UI elements.
```

#### `desk-phase3-office` — the company desk · summer accent (noon gold)
Save to: `assets/desk/desk-phase3-office.webp`

```
[§3a style anchor — verbatim]

Frame this as a wide cinematic landscape (about 16:10 ratio).

Subject: A small Greek outdoor-tourism company office desk in Kalamata, slightly elevated angle from the seat. On the surface: a modern but unflashy laptop screen showing a booking platform with three rows of upcoming trips (place names, dates, party size — in Greek and English), a stack of printed Google/TripAdvisor reviews with five-star rows visible, two package brochures (one labelled "Mani Coast Week", one "Taygetos Traverse") in glossy folded form, a stapled sheet of hotel partner notes from a Kardamyli hotel, a branded rubber stamp with the company logo and an ink pad, a wall calendar pinned above the desk with red-marked busy days, a tray with signed contracts in folders. The same window onto Kalamata harbour at sunset. The table has become an office. The atmosphere is "this is becoming a real business, and that is both exciting and dangerous."

Greek + English where natural; readable section headings on the laptop, illegible body text. No people in frame. Match the warm dusk register and Messinian window-view of the reference image. No people, no anime, no cartoon, no photoreal, no 3D, no vector flat design, no glossy plastic dashboard UI on the laptop — the laptop screen looks like real paper-textured editorial illustration of a software window.
```

#### `desk-phase4-regional` — the regional operations board · autumn accent (cypress green)
Save to: `assets/desk/desk-phase4-regional.webp`

```
[§3a style anchor — verbatim with seasonal accent CYPRESS GREEN]

Frame this as a wide cinematic landscape (about 16:10 ratio).

Subject: A regional operations board — a wider working surface, almost a war-room corner. On a wall above: a large hand-painted map of the Peloponnese with red pins for each base (one over Kalamata, one over Areopoli in the Mani, one over Stemnitsa in Arcadia, one over the Achaia coast). On the surface below: stacked base folders each labelled in Greek (ΚΑΛΑΜΑΤΑ, ΜΑΝΗ, ΑΡΚΑΔΙΑ, ΑΧΑΪΑ), framed portraits of three regional managers with their names handwritten under each, a corkboard with crisis notes pinned (one with a small red CRISIS stamp), a tall pile of legal documents with green ribbon ties, a thick financial-report binder, a roll of brand-materials posters tied with twine, an expansion-plans architectural roll on the far edge. A higher-floor window now — looking down on the town's rooftops at dusk, the harbour smaller and farther below. The desk has become a war-room. Atmosphere: "you built the machine; the question now is whether you still belong to the life that started it."

Cypress green accent appears in the manager portrait frames and on the legal-document ribbons. No people in the frame, only their portraits on the desk. Match the reference image's physical-objects-on-a-table register but at a slightly more elevated, larger-table scale. No people, no anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

### Tier I — Backpack screen (3)

#### `backpack-phase1` — small worn pack
Save to: `assets/backpack/backpack-phase1.webp`

```
[§3a style anchor — verbatim]

Frame in landscape orientation, about 4:3 ratio.

Subject: A small worn outdoor backpack, about 40 litres, laid open on a wooden taverna table from the same kitchen as the reference image. The pack is dusty olive canvas with leather straps, faded from sun and salt. Inside are four roughly defined packing slots, partially packed: a water bottle in one, a small bag of trail snacks in another, a thin first-aid pouch, a folded paper map. A pencil and a small notebook sit beside the pack. The kitchen window is visible in the background showing the harbour at evening. This is the solo guide's pack — small, well-worn, every slot mattering.

No people in the frame. Match the warm Mediterranean register, the layered-objects-on-a-surface physicality, and the open-window-onto-Messinia atmosphere of the reference image. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `backpack-phase2-depot` — the gear depot
Save to: `assets/backpack/backpack-phase2-depot.webp`

```
[§3a style anchor — verbatim]

Frame as wide landscape (about 16:9 ratio).

Subject: A small gear depot in a back room of a Kalamata outdoor-guide outfit. On the walls: a row of climbing helmets hanging on pegs, coils of rope on hooks, three sit-on-top sea kayaks stacked on a wall rack, life-jackets folded on a high shelf. On a low workbench: a crate of labelled water bottles, a row of named gear bins (each with a guide's initials on a paper tag — M., N., A.), a clipboard tally on a chain, a small box of headlamps. Through a small high window: a glimpse of olive trees and the sea, late afternoon. The supply line that lives behind a working guide team.

No people in frame. Match the warm working-shed register and Mediterranean physicality of the reference image. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `backpack-phase3-cache` — the organised company cache
Save to: `assets/backpack/backpack-phase3-cache.webp`

```
[§3a style anchor — verbatim]

Frame as wide landscape (about 16:9 ratio).

Subject: An organised company gear cache — a proper outfitter's storeroom. Floor-to-ceiling labelled storage bins by discipline (HIKE / KAYAK / CANYON / RAFT / CYCLE / SUP / CLIMB written in stencilled Greek + English), folded stacks of branded company buffs in three colours, a small workshop bench with hanging tools (a sewing awl, a rope-end cutter, a multi-tool), a wall of named gear lockers each with a guide's initial-tag, a small printed inventory sheet on a clipboard with a worn pencil. Daylight from a high industrial window, the slate-grey sea visible far in the distance. The atmosphere of a small company that has its act together.

No people in frame. Match the same warm Mediterranean register and physical surface feel as the reference. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

### Tier J — Client people cards (9)

Heroes are illustrated already (see §7). Clients are noun phrases that have lived in
prose; now each becomes a small people card. Same conversation, same style ref. Frame
each in **portrait orientation, about 4:5 ratio** — these slot into card UI.

For each client below, use this template (replace the SUBJECT line):

```
[§3a style anchor — verbatim]

Frame this in portrait orientation, about 4:5 ratio, as a people card composition.

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
[§3a style anchor — verbatim, no seasonal accent]

Frame in landscape orientation, about 4:3 ratio.

Subject: A clean ledger page with faint horizontal blue rules, viewed slightly from above on the same warm wooden taverna table from the reference image. A worn pencil rests at the margin. The corner of the page is slightly turned. A small wax stamp impression sits at the bottom right corner in a faint terra colour. The page is mostly empty — this is the canvas the day's verdict will be typed onto. Warm window light from the upper left.

No text on the page beyond the column header shapes (illegible). No people. Match the reference image's surface and lighting exactly. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `report-review-good` — five-star review card · noon gold accent
Save to: `assets/reports/report-review-good.webp`

```
[§3a style anchor — verbatim]

Frame in landscape orientation, about 4:3 ratio.

Subject: A small printed Google / TripAdvisor-style review card lying on the wooden table from the reference image, viewed slightly from above. The card shows a row of five filled stars (★★★★★) in noon-gold, a one-line illegible headline shape suggesting praise, a short paragraph of illegible-but-readable-shape body text below, and a small reviewer-name footer. Warm dusk light catching the gold of the stars. The card looks like it was printed from a printer onto cardstock.

No legible text — the type should look like real type at a glance but not be decipherable. No people. Match the reference image's surface, palette, and warm Mediterranean lighting. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `report-review-bad` — three-star review card · rain grey accent (drop saturation)
Save to: `assets/reports/report-review-bad.webp`

```
[§3a style anchor — verbatim, rain grey accent and slightly desaturated palette]

Frame in landscape orientation, about 4:3 ratio.

Subject: A small printed Google / TripAdvisor-style review card lying on the wooden table from the reference image, viewed slightly from above. The card shows three filled stars and two empty stars (★★★☆☆), a short headline shape suggesting disappointment, an illegible body paragraph below, and a small reviewer footer. There is a faint ink smudge along the lower edge and a fingerprint mark in one corner — the day didn't go well. Slightly cooler and more desaturated than the good-review variant, light coming through cloud.

No legible text. No people. Match the reference surface and palette but at the desaturated end of the register. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

#### `report-gear-damage` — gear-damage notation page · rain grey accent
Save to: `assets/reports/report-gear-damage.webp`

```
[§3a style anchor — verbatim, rain grey accent]

Frame in landscape orientation, about 4:3 ratio.

Subject: A small notation page from the gear logbook, lying on the wooden table from the reference image, viewed slightly from above. On the page: a pencil sketch of a snapped trekking pole at the centre, a wear-score margin with check-boxes (handwritten ticks against a small list), and at the bottom a small red "NEEDS REPLACEMENT" rubber-stamp impression. A pencil rests alongside. The light is more diffuse — cloudy day mood, suggesting the trip went hard.

No legible text — the handwritten check-list and headers are real-shape but illegible. No people. Match the reference's surface and palette, just slightly cooler with the rain-grey accent in the stamp ink. No anime, no cartoon, no photoreal, no 3D, no vector flat design.
```

---

## Cross‑references

- `ART-DIRECTION.md` — the doctrine these prompts encode.
- `ASSET-MANIFEST.md` — the list of what to make, where each file lives, and (now) the
  generation log appendix.
- `LANGUAGE.md` — the voice the picture sits beside.
- `assets/` — file destinations (per‑tier subfolders).
- `index.html` — `imgFor(id)` auto‑detects shipped assets; add `id → path` to `ASSETS` map
  in the script section as each file lands.
