# Outdoor Guide Tycoon

A text-driven outdoor-activities tycoon game set in the Peloponnese. Start as a solo hiking guide in Messinia, build a team, and grow into the region's leading outdoor company — eventually expanding into water and air activities in Navarino Bay and over Taygetos.

## Status

**v0 — prototype.** Single self-contained HTML file (`aegean-guide.html`), vanilla JS, no build step. Playable end-to-end through Phase 1 (solo guiding) and Phase 2 (team management).

## Roadmap

1. **Polish** the current build — low-stock warnings, season summary, richer logbook.
2. **Seasons** — restructure days into seasons with off-season cert school.
3. **Migrate** to Vite + TypeScript + Phaser 3 for a proper engine.
4. **Pixel art** rollout per [PIXEL-ART.md](./PIXEL-ART.md).
5. **Depth pass** — more routes, events, NPCs.
6. **Phase 3** — water & air activities.

See [CLAUDE.md](./CLAUDE.md) for the working notes and project bible.

## Run the prototype

Open `aegean-guide.html` in any modern browser. No build step. Save/continue uses `window.storage` when available (Claude.ai artifact context) and falls back to in-memory otherwise.

## Test (headless harness)

```
node scripts/harness.mjs
```

Drives hundreds of random playthroughs of the current build and reports any thrown exceptions. Target: 0.
