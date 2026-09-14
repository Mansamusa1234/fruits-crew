import { Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import type { SongRecord } from "@/lib/content/schema";
import { cn } from "@/lib/cn";

/** Original pentatonic sketch around A4 = 432 Hz (artistic tuning, not medical). */
const A4 = 432;
function note(n: number) {
  return A4 * Math.pow(2, n / 12);
}

export function KaraokePlayer({ song }: { song: SongRecord }) {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [vol, setVol] = useState(0.35);
  const started = useRef(0);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const timer = useRef<number | null>(null);

  const current = useMemo(() => {
    let line = song.lyrics[0];
    for (const l of song.lyrics) {
      if (l.t <= t) line = l;
    }
    return line;
  }, [song.lyrics, t]);

  useEffect(() => {
    return () => stopAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function stopAll() {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
    ctxRef.current?.close().catch(() => undefined);
    ctxRef.current = null;
    setPlaying(false);
  }

  async function toggle() {
    if (playing) {
      stopAll();
      return;
    }
    const ctx = new AudioContext();
    const gain = ctx.createGain();
    gain.gain.value = vol * 0.12;
    gain.connect(ctx.destination);
    ctxRef.current = ctx;
    gainRef.current = gain;
    started.current = ctx.currentTime;
    const pattern = [0, 3, 5, 7, 5, 3, 0, -2];
    for (let bar = 0; bar < 8; bar++) {
      pattern.forEach((step, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = note(step);
        const start = ctx.currentTime + bar * 4 + i * 0.45;
        g.gain.setValueAtTime(0, start);
        g.gain.linearRampToValueAtTime(1, start + 0.04);
        g.gain.exponentialRampToValueAtTime(0.001, start + 0.4);
        osc.connect(g);
        g.connect(gain);
        osc.start(start);
        osc.stop(start + 0.42);
      });
    }
    setPlaying(true);
    timer.current = window.setInterval(() => {
      const elapsed = ctx.currentTime - started.current;
      setT(elapsed);
      if (elapsed >= song.durationSec) stopAll();
    }, 120);
  }

  useEffect(() => {
    if (gainRef.current) gainRef.current.gain.value = vol * 0.12;
  }, [vol]);

  return (
    <section className="rounded-[28px] border border-border bg-bg-elevated p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Karaoke</p>
          <h2 className="font-display text-2xl">{song.title}</h2>
        </div>
        <Button onClick={() => void toggle()} aria-pressed={playing}>
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          {playing ? "Pause" : "Play original sketch"}
        </Button>
      </div>
      <p className="mt-3 rounded-2xl bg-bg-subtle px-4 py-6 text-center font-display text-xl" aria-live="polite">
        {current?.text}
      </p>
      <p className="mt-2 text-center text-xs uppercase tracking-wide text-subtle">{current?.role}</p>
      <ol className="mt-4 space-y-1 text-sm">
        {song.lyrics.map((line) => (
          <li
            key={`${line.t}-${line.text}`}
            className={cn("rounded-xl px-3 py-2", current === line ? "bg-bg-subtle font-semibold" : "text-muted")}
          >
            <span className="mr-2 text-xs uppercase text-subtle">{line.role}</span>
            {line.text}
          </li>
        ))}
      </ol>
      <label className="mt-5 flex items-center gap-3 text-sm text-muted">
        <Volume2 className="size-4" aria-hidden />
        <span className="sr-only">Volume</span>
        <input
          type="range"
          min={0}
          max={0.6}
          step={0.01}
          value={vol}
          onChange={(e) => setVol(Number(e.target.value))}
          className="w-full accent-primary"
        />
      </label>
      <p className="mt-2 text-xs text-subtle">
        Keep volume comfortable. This is an original in-browser melody sketch, not a studio track. {song.tuningNote}
      </p>
    </section>
  );
}
