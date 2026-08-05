"use client";

/**
 * Synthesized paper-page flip sound using the Web Audio API.
 * No audio assets required — a short filtered noise burst with a
 * quick amplitude envelope mimics the swish of a turning page.
 */
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!audioCtx) audioCtx = new Ctor();
  return audioCtx;
}

export function playFlipSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Resume if the browser suspended the context (autoplay policy).
  if (ctx.state === "suspended") void ctx.resume();

  const now = ctx.currentTime;

  // White-noise buffer for the paper swish.
  const duration = 0.18;
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  // Band-pass filter to shape it into a soft "whoosh".
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 1400;
  filter.Q.value = 0.8;

  // Fast attack, medium decay envelope.
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(now);
  noise.stop(now + duration);
}
