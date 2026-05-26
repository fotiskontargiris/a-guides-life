# HEROES.md — The Ten Fallen Heroes (locked)

The ten character profiles chosen in the kitchen scene (see `INTRO-KITCHEN.md`). Each is a
fixed person with a fixed gender, so mum's diminutive and the portrait are set per hero (no
gender toggle). Each maps to a `background` id in `initGame(name, background, items)` and
carries a distinct mechanical model.

Diminutive: **♂ → *yie mou / yióka mou*** ("my son"), **♀ → *kóri mou / korítsi mou*** ("my daughter").

Faces: **48×48 pixel busts**, locked palette (PIXEL-ART.md §2), top-left light, dark-teal
outline, facing slightly left. Each needs a strong silhouette + one or two signifiers that
read at thumbnail size. Ready-to-use generation prompt under each (prepend the §7 preamble).

---

### ① The almost-doctor — ♂ *(yie mou)* — `medic`
Three years of medical school in Ioannina, undone by an anatomy exam he sat four times.
**Model:** medical crises and frightened/older clients are safe in his hands; but he
over-diagnoses, scrubbing a risky day a braver guide would run. *Cautious-but-trusted.*
**Face:** neat short dark hair, a pen still tucked behind one ear, a small cross pin on the
collar, tired-but-kind eyes. Accent: sand cream.
**Prompt:** *"…a young man, neat short dark hair, a pen tucked behind his ear, a small medical-cross pin, calm tired kind expression, sand-cream collar."*

### ② The Mykonos chef — ♂ *(yie mou)* — `chef`
A restaurant in the magazines for one summer; then the rent tripled and the head waiter took
the Instagram password. **Model:** feed the group and the tips and reviews follow; mind the
provisions or they eat the margin. *Generous-but-leaky.*
**Face:** hair knotted under a bandana, stubble, a sea-bream tattoo showing at the forearm,
a confident smirk, sun-darkened. Accent: terracotta.
**Prompt:** *"…a sun-darkened man with a bandana over knotted hair, stubble, a small fish tattoo on the forearm, a confident smirk, terracotta collar."*

### ③ The army washout — ♀ *(kóri mou)* — `soldier`
Special-forces selection, cut on the final day. **Model:** thrives in storms and the diff-3
alpine others cancel, unlocking premium bad-weather pay; but her intensity frightens gentle
groups, so they tip low. *High-risk, high-reward.*
**Face:** tight ponytail or close crop, jaw set, a faded camo buff at the neck, eyes scanning.
Accent: olive.
**Prompt:** *"…a woman with a tight ponytail, set jaw, faded camo buff at the neck, alert scanning eyes, olive-green collar."*

### ④ The deckhand — ♀ *(kóri mou)* — `sailor`
Years on cargo ships and caïques, now seasick of the open sea. **Model:** coast and river
routes are safer and richer in her hands, and she carries a head start into Phase 3 water
activities; the dry high alpine is her weak spot. *Sea-leaning.*
**Face:** weathered, salt-streaked hair under a knit cap, deep squint lines, a small rope or
anchor motif on the collar. Accent: sea-teal.
**Prompt:** *"…a weathered woman in a knit cap, salt-streaked hair, deep squint lines, a small anchor on her collar, sea-teal tones."*

### ⑤ The influencer — ♀ *(kóri mou)* — `influencer`
Two hundred thousand followers, zero euros; brand deals and the algorithm died the same week.
**Model:** reputation climbs fast and good trips spawn extra reviews and booking momentum; but
she chases the shot over the schedule, and a bad day goes viral too. *Volatile fame.*
**Face:** flawless hair, oversized sunglasses pushed up onto the head, a bright too-white
smile, one earbud in. Accent: gold.
**Prompt:** *"…a polished young woman, flawless hair, oversized sunglasses pushed up on her head, bright wide smile, one earbud, gold accents."*

### ⑥ The startup engineer — ♂ *(yie mou)* — `engineer`
Built something clever in Berlin; the runway ran out at eleven users. **Model:** gear lasts,
repairs cost less, and off-season infrastructure projects are cheaper and pay more — a slow
start that snowballs; but no people skills early, so tips lag until reputation builds.
*Compounding systems.*
**Face:** glasses, hoodie collar up, slightly unkempt hair, a conference lanyard he forgot to
remove. Accent: stone grey-teal.
**Prompt:** *"…a man with glasses and a hoodie collar up, slightly messy hair, a conference lanyard around his neck, stone grey-teal tones."*

### ⑦ The philologist — ♀ *(kóri mou)* — `scholar`
Four languages, no permanent post, lost the exam lottery to a man named Babis. **Model:**
foreign clients understood perfectly, unlocking premium international groups and the tips that
come with being understood; but she over-explains and the cultural lecture eats the day.
*Languages as currency.*
**Face:** round spectacles, hair in a neat bun, a light scarf, one eyebrow raised mid-correction.
Accent: olive/sand.
**Prompt:** *"…a woman in round spectacles, hair in a neat bun, a light scarf, one eyebrow raised, sand and olive tones."*

### ⑧ The Fasaia — ♀ *(kóri mou)* — `fasaia`
Goa, a 200-hour yoga teacher training, home glowing and broke, speaking of "energy" and
"alignment" — until the August *panigíri* tests the inner peace for real. **Model:** stays
calm when the day doesn't (crises de-escalate, the group keeps its cool, rest restores more);
but her serenity is slow to push for the upsell or the hard route. *Composure.*
**Face:** loose sun-bleached hair or a soft topknot, mala beads, linen collar, serene
half-closed eyes and a faint blissful smile. Accent: sage/olive.
**Prompt:** *"…a serene woman with loose sun-bleached hair, mala beads, linen collar, half-closed peaceful eyes and a faint smile, sage-green tones."*

### ⑨ The Alani — ♂ *(yie mou)* — `alani`
Half the *kafeneío* greets him by name; the other half he owes. A colourful past, possibly a
colourful present. **Model:** knows a guy — cheap gear, easy deals, the village opens doors;
but the merchandise is sometimes of uncertain provenance, a small recurring reputation risk.
*Cheap-and-connected, slightly dodgy.*
**Face:** buzzed or slicked hair, a gold chain, a cocky grin, a toothpick behind the ear.
Accent: terracotta/gold.
**Prompt:** *"…a streetwise man with slicked-back hair, a gold chain, a cocky grin, a toothpick behind his ear, terracotta and gold tones."*

### ⑩ The Greek Villager — ♂ *(yie mou)* — `villager`
Ran the family flock and olive grove until a subsidy cut, a bad frost, and a beach bar where
the *kafeneío* used to be finished it off. **Model:** every route cheaper and safer, every
village deal and supply through a cousin at a discount, the *panigíri* circuit as free
marketing; but no foreign instinct and no languages, so international tips and reviews suffer
until he learns hospitality (the inverse of the philologist). *Grounded local.*
**Face:** older man, a traditional flat cap, a white moustache, a sun-creased face, sharp
knowing eyes, *kombolói* (worry beads) hinted at the collar. Accent: stone/olive.
**Prompt:** *"…an older weathered man in a flat cap, white moustache, deeply sun-creased face, sharp knowing eyes, earthy stone and olive tones."*

---

## Implementation notes
- `background` ids above extend today's `BACKGROUNDS` (only `medic` exists now). Each id stores
  its `perk`/`spec` (the model) and a `gender` field (`'m'|'f'`) so mum's lines and the portrait
  pick correctly.
- Portraits become 10 `portrait_player_<id>_48.png`, inlined as data URIs / one sheet per
  PIXEL-ART.md §3. The earlier `portrait_guide_a…f` set can still serve NPC guides.
- Skin tones aren't an explicit palette ramp — derive warm skin from the sand↔terracotta range
  and vary two-three steps so the cast isn't uniform. Flag in review.
