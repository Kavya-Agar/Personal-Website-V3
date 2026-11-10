"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/*
 * Christmas-only background tune. Always rendered (deterministic) but `display: none` unless
 * <html data-season="christmas"> — see globals.css, same pattern as <Snowfall />.
 *
 * No audio file: "Jingle Bells" (public domain, 1857) is synthesized as a music box with the
 * Web Audio API. Browsers block sound until a user gesture, so it starts OFF; the reader taps the
 * toggle. The choice is remembered in localStorage['ka-music'] — if they left it on, it resumes
 * on their first click/keypress on the next page load.
 */

const BEAT = 0.3; // seconds per quarter note
const GAP = 4; // silence between loops, seconds
const HZ = { C: 261.63, D: 293.66, E: 329.63, F: 349.23, G: 392.0 } as const;
type Note = [keyof typeof HZ, number]; // [pitch, beats]

const TUNE: Note[] = [
  // Jin-gle bells, jin-gle bells, jin-gle all the way
  ["E", 1], ["E", 1], ["E", 2], ["E", 1], ["E", 1], ["E", 2],
  ["E", 1], ["G", 1], ["C", 1.5], ["D", 0.5], ["E", 4],
  // Oh what fun it is to ride in a one-horse open sleigh
  ["F", 1], ["F", 1], ["F", 1.5], ["F", 0.5], ["F", 1], ["E", 1], ["E", 1], ["E", 0.5], ["E", 0.5],
  ["E", 1], ["D", 1], ["D", 1], ["E", 1], ["D", 2], ["G", 2],
  // Jin-gle bells (again), then the finish
  ["E", 1], ["E", 1], ["E", 2], ["E", 1], ["E", 1], ["E", 2],
  ["E", 1], ["G", 1], ["C", 1.5], ["D", 0.5], ["E", 4],
  ["F", 1], ["F", 1], ["F", 1.5], ["F", 0.5], ["F", 1], ["E", 1], ["E", 1], ["E", 0.5], ["E", 0.5],
  ["G", 1], ["G", 1], ["F", 1], ["D", 1], ["C", 4],
];

// One music-box "ping": a sine plus two quiet overtones, fast attack, long soft decay.
function pluck(ctx: AudioContext, out: AudioNode, freq: number, t: number, len: number) {
  const end = t + Math.max(len, 0.5) + 0.9;
  const env = ctx.createGain();
  env.gain.setValueAtTime(0.0001, t);
  env.gain.exponentialRampToValueAtTime(0.5, t + 0.01);
  env.gain.exponentialRampToValueAtTime(0.0001, end);
  env.connect(out);
  for (const [mult, amp] of [[1, 1], [2, 0.25], [3.01, 0.08]]) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq * mult;
    const g = ctx.createGain();
    g.gain.value = amp;
    osc.connect(g);
    g.connect(env);
    osc.start(t);
    osc.stop(end + 0.1);
  }
}

export function ChristmasMusic() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const btnRef = useRef<HTMLButtonElement>(null);

  const stop = useCallback(() => {
    window.clearTimeout(timerRef.current);
    const ctx = ctxRef.current;
    const master = masterRef.current;
    ctxRef.current = null;
    masterRef.current = null;
    if (ctx && master) {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
      window.setTimeout(() => ctx.close().catch(() => {}), 500);
    }
  }, []);

  const start = useCallback(() => {
    if (ctxRef.current) return;
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    const ctx = new Ctor();
    const master = ctx.createGain();
    master.gain.value = 0.18;
    master.connect(ctx.destination);
    ctxRef.current = ctx;
    masterRef.current = master;

    const loop = (t0: number) => {
      let t = t0;
      for (const [n, beats] of TUNE) {
        pluck(ctx, master, HZ[n], t, beats * BEAT);
        t += beats * BEAT;
      }
      timerRef.current = window.setTimeout(
        () => ctxRef.current === ctx && loop(ctx.currentTime + 0.1),
        (t - ctx.currentTime + GAP) * 1000,
      );
    };
    void ctx.resume();
    loop(ctx.currentTime + 0.1);
    setPlaying(true);
  }, []);

  const toggle = () => {
    if (playing) {
      stop();
      setPlaying(false);
      try { localStorage.setItem("ka-music", "off"); } catch {}
    } else {
      start();
      try { localStorage.setItem("ka-music", "on"); } catch {}
    }
  };

  // Resume on the first gesture if the reader left music on last time (autoplay needs a gesture).
  useEffect(() => {
    let wanted = false;
    try { wanted = localStorage.getItem("ka-music") === "on"; } catch {}
    if (!wanted) return;
    const resume = (e: Event) => {
      if (btnRef.current?.contains(e.target as Node)) return; // the button handles its own click
      if (document.documentElement.dataset.season === "christmas") start();
      cleanup();
    };
    const cleanup = () => {
      window.removeEventListener("pointerdown", resume, true);
      window.removeEventListener("keydown", resume, true);
    };
    window.addEventListener("pointerdown", resume, true);
    window.addEventListener("keydown", resume, true);
    return cleanup;
  }, [start]);

  // Don't play to an empty room: stop when the tab is hidden, pick back up when it returns.
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) stop();
      else if (playing) start();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [playing, start, stop]);

  useEffect(() => stop, [stop]);

  return (
    <button
      ref={btnRef}
      type="button"
      className="xmas-music"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? "Mute Christmas music" : "Play Christmas music"}
      title={playing ? "Mute Christmas music" : "Play Christmas music"}
    >
      <span aria-hidden>{playing ? "♪" : "♪̸"}</span>
      <span>{playing ? "Music on" : "Music off"}</span>
    </button>
  );
}
