# Relay Build Log — feature list, prompts & time budget

Planning doc for *The Beat Relay*. One row per relay leg. The **Build time** column is a
rough estimate of how long that leg takes **during the live relay on an average phone** —
i.e. read the prompt → type/paste it into the AI chat → wait for the app to regenerate →
open & quickly test → hand the phone on. These are estimates, not stopwatch numbers.

**Estimation assumptions**
- Average phone + average mobile data, using an AI chat app (e.g. Claude) that rebuilds the
  whole single-file app each turn.
- The app is one self-contained HTML file. **It regenerates in full every leg**, so as the
  file grows (~60 KB by the end) the *later* legs cost a little more wall-clock than the
  early ones even when the feature itself is simple. Baked into the numbers below.
- "Build time" includes a quick on-device test, not a deep one. Mic legs cost extra because
  someone has to grant the permission and actually make a sound.

**Mobile-risk key:** 🟢 safe on iPhone/Android · 🟡 works but watch it · 🔴 risks the phone demo.

| # | Feature | One-prompt (attendee voice) | Build time | Mobile risk | Status |
|---|---------|------------------------------|-----------:|:-----------:|--------|
| 1 | 16-step machine (kick/snare/hat/clap, Play, tempo) | "Build a 16-step drum machine…Web Audio, no sound files." | ~4.0 min | 🟢 | ✅ built |
| 2 | Presets (Boom Bap / Four-on-Floor / Trap) | "Add three preset buttons that fill in the grid." | ~2.0 min | 🟢 | ✅ built |
| 3 | Delay/echo + per-drum send sliders | "Add a delay effect with a panel and a send slider per drum." | ~3.0 min | 🟢 | ✅ built |
| 4 | Tempo-synced delay (1/4, 1/8, 1/16) | "Change delay time to note values synced to the tempo." | ~2.0 min | 🟢 | ✅ built |
| 5 | Draw-able low/high-pass filter lane | "Add a filter on the mix with a lane I can draw on across the 16 steps." | ~3.5 min | 🟢 | ✅ built |
| 6 | Swing + Reverb sliders | "Add a Swing slider and a Reverb slider." | ~2.5 min | 🟢 | ✅ built |
| 7 | Open hat + cowbell | "Add two more drum rows — open hi-hat and cowbell." | ~2.0 min | 🟢 | ✅ built |
| 8 | Surprise Me randomizer | "Add a Surprise Me button that makes a random but musical beat." | ~2.0 min | 🟢 | ✅ built |
| 9 | Sampler (mic record + pitch) | "Add a sampler that records from the mic as a new track, with a pitch slider." | ~4.0 min | 🟡 mic/permission | ✅ built (hardware-confirmed) |
| 10 | **Shape your sample (trim + reverse)** | "Let me trim my recorded sample by dragging the ends of the waveform, and add a Reverse button that plays it backwards." | ~3.0 min | 🟢 | ✅ built (build 4) |
| 11 | Share beat as a link | "Let me save and share my beat as a link that reopens the exact pattern." | ~3.0 min | 🟢 | ⬜ not built |

**Running total (11 legs): ≈ 31 min** of hands-on relay time. Add ~10–15 min for intro,
passing the phone, and the closing teaching moment → **a ~45 min session.**

---

## Headroom & the 20-step ceiling

- We're at **11 legs**. You mentioned pairing if we approach ~20. There's real headroom, but
  wall-clock is the true limit, not step count — every extra leg is another full regeneration.
  Budget roughly **~3 min/leg**; ~16–17 legs is about the ceiling for a tidy 45-min session.
- **If we push toward 20, pair small/related legs into one prompt** (two features, one turn).
  Natural pairs:
  - Presets **+** Surprise Me (both "fill the grid for me").
  - Swing **+** Reverb (already one leg — precedent for doubling up).
  - Open hat **+** cowbell (already one leg).
  - Master volume **+** per-track mute (if we add them).
- Pairing keeps the relay moving but means fewer people each get a "solo" feature — a
  workshop-flow tradeoff, your call per the room size.

## Candidate next features (not yet legs) — pre-rated

| Idea | Build time | Mobile risk | Note |
|------|-----------:|:-----------:|------|
| Save to phone (localStorage, reopens last beat) | ~2 min | 🟢 | Pairs well with #11 (Share). |
| Mute / solo per track | ~2.5 min | 🟢 | Good solo leg. |
| Piano keyboard (tap to play) | ~3.5 min | 🟡 | The kit's take-home bonus; more UI on a small screen. |
| Song mode (chain A/B patterns) | ~4+ min | 🟡 | Real complexity jump. |
| Export beat as an audio file | ~3.5 min | 🟡 | Renders fine; **download is clunky on iOS Safari.** |
| Realtime multiplayer / live collab | — | 🔴 | Needs a server — breaks the single-file model. Don't. |
| WebMIDI / hardware controller | — | 🔴 | **Not supported in iOS Safari.** Breaks the phone demo. |

*Times are per-leg live-relay estimates on an average phone, ±1 min. Update this row-by-row as legs are built or reordered.*
