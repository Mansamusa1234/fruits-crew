import { Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { songAudioUrl, songPack } from "@/lib/content/song-i18n";
import type { SongRecord } from "@/lib/content/schema";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { LanguagePicker } from "@/components/i18n/LanguagePicker";

export function KaraokePlayer({ song }: { song: SongRecord }) {
  const { locale, t } = useLanguage();
  const pack = songPack(song.slug, locale);
  const src = songAudioUrl(song.slug, locale);
  const lyrics = pack?.lyrics ?? song.lyrics;
  const title = pack?.title ?? song.title;
  const durationSec = lyrics[lyrics.length - 1]?.t + 8 || song.durationSec;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [tnow, setTnow] = useState(0);
  const [error, setError] = useState("");

  const current = useMemo(() => {
    let line = lyrics[0];
    for (const l of lyrics) {
      if (l.t <= tnow) line = l;
    }
    return line;
  }, [lyrics, tnow]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
    setTnow(0);
    setError("");
  }, [src]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => {
      const dur = el.duration;
      if (Number.isFinite(dur) && dur > 0) setTnow((el.currentTime / dur) * durationSec);
      else setTnow(el.currentTime);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnd = () => {
      setPlaying(false);
      setTnow(0);
    };
    const onErr = () => setError("Sound file did not load. Tap the grey bar below.");
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnd);
    el.addEventListener("error", onErr);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnd);
      el.removeEventListener("error", onErr);
    };
  }, [src, durationSec]);

  async function toggle() {
    const el = audioRef.current;
    if (!el) {
      setError("Player is not ready. Refresh the right side.");
      return;
    }
    setError("");
    try {
      if (el.paused) {
        el.volume = 1;
        await el.play();
      } else {
        el.pause();
      }
    } catch {
      setError("Tap the triangle on the grey sound bar below.");
    }
  }

  return (
    <section className="rounded-[28px] border border-border bg-bg-elevated p-5 shadow-soft">
      <LanguagePicker />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">{t("karaoke")}</p>
          <h2 className="font-display text-2xl">{title}</h2>
        </div>
        <Button type="button" size="lg" onClick={() => void toggle()} aria-pressed={playing}>
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          {playing ? t("pause") : t("play")}
        </Button>
      </div>

      <p className="mt-3 rounded-2xl bg-bg-subtle px-4 py-6 text-center font-display text-xl" aria-live="polite">
        {current?.text}
      </p>
      <p className="mt-2 text-center text-xs uppercase tracking-wide text-subtle">{current?.role}</p>

      <audio
        key={src}
        ref={audioRef}
        src={src}
        controls
        preload="auto"
        className="mt-5 w-full"
        aria-label={title}
      />

      {error ? <p className="mt-2 text-sm font-semibold text-primary">{error}</p> : null}

      <ol className="mt-4 space-y-1 text-sm">
        {lyrics.map((line) => (
          <li
            key={`${line.t}-${line.text}`}
            className={cn("rounded-xl px-3 py-2", current === line ? "bg-bg-subtle font-semibold" : "text-muted")}
          >
            <span className="mr-2 text-xs uppercase text-subtle">{line.role}</span>
            {line.text}
          </li>
        ))}
      </ol>
      <p className="mt-4 flex items-center gap-2 text-xs text-subtle">
        <Volume2 className="size-4" aria-hidden />
        {t("speakerHint")}
      </p>
    </section>
  );
}
