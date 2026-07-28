# Handoff — Beat Relay drum machine, Sampler mic

Written for a session running on a real computer (with Safari, a working mic, and
unrestricted network) picking up work done in a sandboxed container that had none
of those. Written 2026-07-27.

---

## The one open question — RESOLVED (2026-07-27)

**Does the Sampler microphone work on an iPhone at `build 3`? → Yes.**

Confirmed on real hardware: the repo owner ran the live site
(`https://chi-65.github.io/CTW-projects/?v=4`) on an iPhone in Safari and the Sampler
recorded and played back end-to-end ("It worked"). This is the first real-hardware
confirmation — every prior "verified" claim was Chromium-only and one was wrong (see
*The mistake worth not repeating*).

Corroborating (but NOT a substitute for the above): build 3 passes the Safari-shim
regression test below in Chromium — `getUserMedia` runs under `play-and-record`, the
session transitions `play-and-record → playback`, and the flow reaches "Got it!".

Everything below is the context that led here; kept for history.

---

## What this project is

`CTW-projects` is a workshop kit for **Compton Tech Week**, not a product. The session
is called *The Beat Relay*: a group of 6–8 people passes **one AI chat** around, each
person adding **one feature** to a drum machine with **one prompt**. The lesson is that
the conversation *is* the project — sharing the chat shares the whole app.

| File | Role |
| --- | --- |
| `index.html` | The drum machine. Landing page so GitHub Pages serves it at the repo root. |
| `drum-machine.html` | Byte-identical copy under a descriptive name. **Keep these two in sync.** |
| `build-relay-kit.html` | Printable facilitator guide (Part 1) + attendee take-home handout (Part 2). |
| `launcher/*.html`, `assets/*.png` | Home-screen launchers redirecting to Claude artifacts. **Parallel work from another machine — not mine, do not clobber.** |

Live site: **https://chi-65.github.io/CTW-projects/** (Pages, classic deploy from
`main` / root — there is no `.github/workflows`).

---

## Repo state at handoff

- `main` = `7424478`
- `claude/ctw-app-build-1-tzv5tc` = `6a646b4`

The branch is **3 commits behind `main`**. Those three (`90d9ae2`, `0bae619`,
`7424478`) came from a different machine (committer `CHItest`) and only add
`launcher/` and `assets/`. They do **not** touch the drum machine. Either work
directly on `main` or fast-forward the branch first — but do not revert the launcher
work.

All mic work is already merged into `main`:

| Commit | What it did |
| --- | --- |
| `bde2afd` | Mic hardening: silent-switch handling, count-in, raw mic constraints |
| `7cb31b6` | Build stamp in header + environment diagnostics on mic errors |
| `6a646b4` | **Fix for the bug `bde2afd` introduced** (see below) |

---

## The mic saga, honestly

### Starting point
The Sampler was **not broken**. Verified end-to-end in Chromium with a fake capture
device: `getUserMedia` → `MediaRecorder` → `decodeAudioData` → trim/normalize →
playback all completed, producing real audio (peak normalized to 0.98, RMS 0.14).

### Three changes made (`bde2afd`)
1. **Silent switch** — iPhones route Web Audio through the "ambient" session, which the
   physical ring/silent switch mutes. Declared the session as `"playback"` to opt out,
   with a runtime-generated silent WAV loop as a fallback for older iOS.
2. **Count-in** — `startRec` awaited the permission prompt and then *immediately*
   started both the recorder and the 2-second auto-stop, so an attendee's first take
   burned while they were reading the "Allow" dialog. Now counts 3-2-1, tap to cancel.
   Silent on purpose: a beep would land in the recording.
3. **Raw mic constraints** — `getUserMedia({audio: true})` accepted echo cancellation,
   noise suppression, and auto gain by default. Those are tuned for speech and duck
   exactly what people record here (claps, mouth clicks, beatbox hits), and auto gain
   fights the normalizer. Now requests all three off.

### What change 1 broke
`"playback"` declares an **output-only** audio session. Requesting the mic while it is
set makes `getUserMedia` reject with **`InvalidStateError`**. Tapping **Sampler** set
the session; tapping **Record** then failed every time. Confirmed from a user
screenshot on an iPhone:

```
Couldn't open the mic (InvalidStateError). Try again or use a different browser.
[https ok · own tab · mic api ok · recorder ok · build 2]
```

### The fix (`6a646b4`, build 3)
`setSession()` (`index.html:634`) switches to `"play-and-record"` before capture
(`:1305`) and hands back to `"playback"` when capture ends, cancels, or fails
(`:1337`, `:1389`, `:1403`, `:1427`). If `InvalidStateError` still comes back it drops
the declaration to `"auto"` and retries once (`:1312`). The in-app-browser case is now
named explicitly in the error text, since a webview that refuses capture is
indistinguishable to a user.

---

## The mistake worth not repeating

`navigator.audioSession` **does not exist in Chromium.** It is Safari-only, backed by
Apple's audio session. So `unmuteIOS()` was a **no-op in every test run against build
2** — the tests passed, and the one code path that actually executes on an iPhone was
never exercised. The container session reported this as verified. It was not.

**Any change touching `navigator.audioSession`, `getUserMedia`, or `MediaRecorder`
must be tested in real Safari, or against the shim below. Chromium passing means
nothing for these paths.**

---

## What you can do that the container session could not

The container was blocked on all of these. If you have them, use them — they are the
whole reason for this handoff.

1. **Real Safari** (macOS or iOS). The only engine implementing `navigator.audioSession`.
2. **A real microphone.** Note: Chrome Remote Desktop does *not* forward a local mic —
   already documented in `README.md`. Test on the machine itself.
3. **The live site.** `chi-65.github.io` was 403 through the container's proxy, so the
   deployed page was never actually loaded from there.
4. **GitHub Pages build status.** The `/pages` API was blocked (403 "not permitted
   through this proxy"). Repo Settings → Pages, or the Actions/Pages tab, was invisible.

For reference, the container *could* reach: the GitHub API (commits, files, branches,
PRs), `github.com`, and `raw.githubusercontent.com`. Repo state was never the blind
spot — only the Pages layer and the live site.

---

## Verification checklist

Load **https://chi-65.github.io/CTW-projects/?v=4** (query string defeats caching).

1. **Header reads `build 3`** — next to "Pocket Drum Machine". If not, you are on a
   cached or unbuilt page and nothing below is meaningful.
2. **Play a beat.** Confirms audio output works at all.
3. **Ring switch ON SILENT** — does the beat still play? This is the original
   silent-switch fix, and the case never confirmed on hardware.
4. **Sampler → Record.** Expect a silent 3-2-1 count-in, then "Recording… make a
   sound!", then "Got it!" plus a waveform.
5. **Tap the purple Sample row**, press Play — your sound should sequence in.
6. **Is the clap crisp?** The raw-mic constraints exist so noise suppression does not
   swallow percussive sounds. If it sounds ducked, the constraints are not taking
   effect on Safari.

On any failure, the error text now ends with a bracket including `session=<type>` —
that is the state of the audio session at the moment of failure, and is the single
most diagnostic thing to capture.

---

## Reusable regression test (Safari shim)

This reproduces the build 2 bug in Chromium by simulating Safari's rule that capture
is rejected while the session is output-only. Build 2 fails it; build 3 passes.
Run against a local server (`python3 -m http.server`).

```js
const SHIM = () => {
  let current = 'auto';
  window.__sessionLog = [];
  Object.defineProperty(navigator, 'audioSession', {
    configurable: true,
    value: {
      get type() { return current; },
      set type(v) { current = v; window.__sessionLog.push(v); },
    },
  });
  const real = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = (c) => {
    if (current === 'playback' || current === 'ambient') {
      return Promise.reject(Object.assign(new Error('output-only session'),
        { name: 'InvalidStateError' }));
    }
    return real(c);
  };
};
// page.addInitScript(SHIM) before goto; launch Chromium with
// --use-fake-ui-for-media-stream --use-fake-device-for-media-stream
// PASS = session transitions ["playback","play-and-record","playback"] and status "Got it!"
```

This is a stand-in, not a substitute for Safari. It encodes one assumed rule.

---

## Open items

- **Relay leg 10 is not implemented.** `build-relay-kit.html` documents a 10-leg relay
  ("Let me save and share my beat as a link that reopens the exact pattern"), but the
  app has no share/permalink/hash-state/clipboard code at all. Legs 1–9 are all
  present. This matters because leg 10 is one of the two hosted-only legs the guide's
  closing teaching moment depends on.
- **`index.html` and `drum-machine.html` must stay byte-identical.** Currently in sync.
- **Silent-switch behavior on iOS < 16.4** relies on the silent-WAV loop fallback,
  which is unverified on hardware. The facilitator guide already tells facilitators to
  check the ring switch.
