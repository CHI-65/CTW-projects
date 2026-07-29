// Shared prompt data for the Beat Relay.
// FLAT model: Step 1 = base machine. Every other entry is ONE self-contained upgrade
// with its 3 simplest refinements already baked into a single prompt — no sub-choices,
// no dependencies. Each upgrade assumes only the base machine exists, so any order works.
// (Advanced refinements were set aside; add them later as new standalone upgrades.)
window.RELAY_TREE = [
  { id:"1", em:"🌳", name:"STEP 1 — Base machine", everyone:true, branches:[
    { id:"1", name:"Base machine", badges:"~4m", prompt:"Build me a 16-step drum machine as a single self-contained HTML page. Four instrument rows — kick, snare, hi-hat, clap — each a row of 16 tap buttons that toggle on and off. Add a Play/Stop button and a tempo slider from 60 to 180 BPM (default 96). Generate every sound with the Web Audio API — no audio files. Make it work with touch on a phone. Important: make the sound play on iPhones even when the phone's ring/silent switch is set to silent — on the very first tap, resume the AudioContext and also briefly play a short silent clip through a normal HTML5 <audio> element, so the audio routes to the media channel that silent mode doesn't mute." },
  ]},

  { id:"A", em:"🎤", name:"Sampler", branches:[
    { id:"A", name:"Sampler", badges:"~7m · needs mic", prompt:"Add a Sampler, with everything in one panel: a 'Sampler' button opens it, and a big Record button captures up to 2 seconds from the microphone and turns it into a new 'Sample' row I sequence like the drums (if the mic is blocked, show a short plain-English message). In the same panel also include: (1) the sample drawn as a waveform where I can drag the left and right ends to trim it, plus a 'Reverse' button to play it backwards; (2) a Transpose slider in semitones from -12 to +12 (default 0); and (3) a 'Normalize' button that lifts the trimmed sample to full volume without clipping." },
  ]},

  { id:"B", em:"🎛️", name:"Effects — echo, reverb, filter", branches:[
    { id:"B", name:"Effects", badges:"~7m", prompt:"Add a creative Effects panel with three effects, each with its own on/off so it's transparent when off: (1) a tempo-synced Echo with a note value (1/4, 1/8, 1/16), a feedback amount, a wet level, and a per-drum send amount (default 0); (2) a Reverb send with a per-drum reverb amount (default 0) that returns in parallel, plus one size/decay control; (3) a Filter with a low-pass/high-pass toggle, a resonance knob, and a 16-step lane I draw on with my finger to sweep the cutoff across the pattern in time with the beat." },
  ]},

  { id:"M", em:"🔊", name:"Mastering", branches:[
    { id:"M", name:"Mastering", badges:"~5m", prompt:"Add a Mastering section at the very end of the audio chain that treats the whole mix (the 'glue'), with three controls that leave the mix unchanged at their defaults: (1) a 'Squeeze' compressor (0–100%, default 0) with a little makeup gain; (2) an always-on, transparent Limiter as the very last thing before the speakers so the mix never clips no matter how loud it gets; and (3) a 'Warmth' knob (0–100%, default 0) that gently saturates the whole mix for analog-style warmth." },
  ]},

  { id:"C", em:"🥁", name:"Groove — accent, swing, humanize", branches:[
    { id:"C", name:"Groove", badges:"~5m", prompt:"Add three groove controls that leave the beat straight and even at their defaults: (1) tapping a step cycles it off → normal hit → accent (louder, about 1.8×) → off, with the accent clearly shown; (2) a 'Swing' slider (0–60%, default 0) that delays every other 16th step for a shuffle feel; and (3) a 'Humanize' slider (0–100%, default 0) that adds small random timing and volume variation so it feels less robotic." },
  ]},

  { id:"E", em:"🎚️", name:"Sequencer — 32 steps, A/B, direction", branches:[
    { id:"E", name:"Sequencer", badges:"~6m", prompt:"Upgrade the sequencer three ways: (1) expand it to 32 steps shown as two pages of 16 with a button to flip pages — when I turn on page 2, copy page 1 into it and let me edit it, and the playhead follows whichever page is playing (use pages, not a scrolling row); (2) keep two full patterns, A and B, that I can switch between while it plays; and (3) add play directions: forward, reverse, and ping-pong." },
  ]},

  { id:"F", em:"🎹", name:"Melody — bass, keys, scale", branches:[
    { id:"F", name:"Melody", badges:"~6m", prompt:"Add a melodic voice with three parts: (1) a bass row where each step can play a synth note locked to the tempo; (2) a small piano keyboard I can play by tapping; and (3) a scale selector so the bass and keyboard notes always stay in a chosen musical scale and sound right together." },
  ]},

  { id:"G", em:"🎛️", name:"Performance — volume, mute/solo, tap tempo", branches:[
    { id:"G", name:"Performance", badges:"~4m", prompt:"Add live-performance controls: (1) a master volume knob for the whole machine; (2) mute and solo buttons on each track; and (3) a 'Tap' button I can tap a few times to set the tempo by feel." },
  ]},

  { id:"H", em:"💾", name:"Save & Share", branches:[
    { id:"H", name:"Save & Share", badges:"~5m", prompt:"Add save and share, three ways: (1) save and share my beat as a link that reopens the exact pattern when someone else clicks it; (2) remember my beat on this device so it's still here when I come back; and (3) let me export my beat as an audio file I can download." },
  ]},

  { id:"I", em:"📊", name:"Visualizer", branches:[
    { id:"I", name:"Visualizer", badges:"~4m", prompt:"Add three visuals that react to the sound: (1) a moving waveform display of the output; (2) a background that flashes and pulses in time with the hits; and (3) a bar spectrum analyzer that dances to the music." },
  ]},
];
window.RELAY_FINAL = { prompt:"Let me save and share my beat as a link that reopens the exact pattern when someone else clicks it." };
window.RELAY_GOBACK = "Whoa — that last change broke my drum machine. Undo it completely and give me back the exact version from right before that change, which was working. Don't add anything new or fix anything else — just restore the previous working version.";
