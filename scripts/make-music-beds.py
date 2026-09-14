#!/usr/bin/env python3
"""Original Fruits Crew kids-music beds (not copied from any other show)."""
from __future__ import annotations

import math
import os
import shutil
import subprocess
from pathlib import Path

import numpy as np

SR = 44100
OUT = Path("/workspace/public/audio")
DRY = OUT / "_dry"
BEDS = Path("/tmp/fruits-crew-beds")
FFMPEG = "ffmpeg"

# MIDI-ish: A4 = 440
def hz(midi: float) -> float:
    return 440.0 * (2 ** ((midi - 69) / 12))


def env_mallet(t: np.ndarray, decay: float = 9.0) -> np.ndarray:
    return np.exp(-t * decay) * (1 - np.exp(-t * 80))


def mallet(freq: float, dur: float, bright: float = 1.0) -> np.ndarray:
    n = int(SR * dur)
    t = np.arange(n) / SR
    e = env_mallet(t, 7.5 + bright)
    wave = (
        0.55 * np.sin(2 * np.pi * freq * t)
        + 0.28 * np.sin(2 * np.pi * freq * 2 * t) * np.exp(-t * 14)
        + 0.12 * np.sin(2 * np.pi * freq * 3 * t) * np.exp(-t * 18)
        + 0.05 * np.sin(2 * np.pi * freq * 6 * t) * np.exp(-t * 22)
    )
    return (e * wave * bright).astype(np.float32)


def bass(freq: float, dur: float) -> np.ndarray:
    n = int(SR * dur)
    t = np.arange(n) / SR
    e = np.minimum(t * 50, 1) * np.exp(-t * 4.2)
    wave = 0.7 * np.sin(2 * np.pi * freq * t) + 0.18 * np.sin(2 * np.pi * freq * 2 * t)
    return (e * wave).astype(np.float32)


def kick(dur: float = 0.22) -> np.ndarray:
    n = int(SR * dur)
    t = np.arange(n) / SR
    freq = 120 * np.exp(-t * 18) + 38
    e = np.exp(-t * 14)
    return (e * np.sin(2 * np.pi * freq * t)).astype(np.float32)


def clap(dur: float = 0.16) -> np.ndarray:
    n = int(SR * dur)
    noise = np.random.default_rng(3).standard_normal(n).astype(np.float32)
    t = np.arange(n) / SR
    e = np.exp(-t * 28)
    # crude band emphasis
    return (noise * e * 0.35).astype(np.float32)


def shaker(dur: float = 0.07) -> np.ndarray:
    n = int(SR * dur)
    noise = np.random.default_rng(7).standard_normal(n).astype(np.float32)
    t = np.arange(n) / SR
    e = np.exp(-t * 55)
    return (noise * e * 0.12).astype(np.float32)


def pad_chord(freqs: list[float], dur: float) -> np.ndarray:
    n = int(SR * dur)
    t = np.arange(n) / SR
    e = np.minimum(t * 8, 1) * np.minimum((dur - t) * 6, 1)
    e = np.clip(e, 0, 1)
    wave = np.zeros(n, dtype=np.float32)
    for f in freqs:
        wave += (0.12 * np.sin(2 * np.pi * f * t) + 0.04 * np.sin(2 * np.pi * f * 2 * t)).astype(np.float32)
    return wave * e.astype(np.float32)


def place(buf: np.ndarray, sound: np.ndarray, t: float, gain: float = 1.0, pan: float = 0.0) -> None:
    i = int(t * SR)
    if i >= buf.shape[1]:
        return
    s = sound * gain
    end = min(i + s.shape[0], buf.shape[1])
    sl = s[: end - i]
    l = sl * (1 - max(pan, 0)) * (1 + min(pan, 0) * 0)
    # pan -1 left, +1 right
    left = sl * (1 - (pan + 1) / 2 * 0.7)
    right = sl * (1 - (1 - pan) / 2 * 0.7)
    buf[0, i:end] += left
    buf[1, i:end] += right


def groove(seconds: float, bpm: float, melody: list[int], bass_notes: list[int], sparkle: bool) -> np.ndarray:
    beat = 60.0 / bpm
    n = int(SR * seconds) + SR
    buf = np.zeros((2, n), dtype=np.float32)
    rng = np.random.default_rng(11)

    t = 0.0
    step = 0
    while t < seconds:
        # kick on 1 and 3, clap on 2 and 4
        b = step % 4
        if b in (0, 2):
            place(buf, kick(), t, 0.9)
        if b in (1, 3):
            place(buf, clap(), t, 0.55 if sparkle else 0.4)
        # shaker 8ths
        place(buf, shaker(), t, 0.7)
        place(buf, shaker(), t + beat * 0.5, 0.45)
        # bass
        bn = bass_notes[(step // 4) % len(bass_notes)]
        place(buf, bass(hz(bn), beat * 1.6), t, 0.55)
        # chord each bar
        if b == 0:
            root = bass_notes[(step // 4) % len(bass_notes)]
            place(buf, pad_chord([hz(root), hz(root + 4), hz(root + 7)], beat * 3.6), t, 0.35)
        t += beat
        step += 1

    # melody as 8th notes looping
    t = 0.0
    i = 0
    while t < seconds:
        midi = melody[i % len(melody)]
        if midi > 0:
            pan = -0.35 if i % 2 == 0 else 0.35
            place(buf, mallet(hz(midi), beat * 1.3, 1.15), t, 0.85, pan)
            if sparkle:
                place(buf, mallet(hz(midi + 12), beat * 0.7, 0.7), t + 0.02, 0.25, -pan)
        t += beat * 0.5
        i += 1
        if i % 16 == 0:
            t += 0  # keep flowing
    peak = np.max(np.abs(buf)) + 1e-6
    buf = buf / peak * 0.88
    return buf


SONGS = {
    "jump-in-and-scrub": {
        "bpm": 128,
        "melody": [72, 72, 76, 79, 81, 79, 76, 72, 77, 77, 76, 74, 72, 67, 69, 72],
        "bass": [48, 53, 48, 55],
        "sparkle": True,
    },
    "everything-is-connected": {
        "bpm": 108,
        "melody": [67, 69, 71, 72, 74, 72, 71, 69, 67, 64, 67, 72, 71, 69, 67, 64],
        "bass": [48, 45, 43, 48],
        "sparkle": False,
    },
    "wake-up-little-seed": {
        "bpm": 96,
        "melody": [60, 64, 67, 72, 67, 64, 62, 60, 64, 67, 69, 67, 64, 60, 55, 60],
        "bass": [48, 52, 47, 48],
        "sparkle": False,
    },
    "count-the-mangoes": {
        "bpm": 120,
        "melody": [72, 74, 76, 77, 79, 81, 83, 84, 83, 81, 79, 77, 76, 74, 72, 67],
        "bass": [48, 50, 52, 48],
        "sparkle": True,
    },
    "roots-hold-hands": {
        "bpm": 100,
        "melody": [55, 60, 64, 67, 64, 60, 55, 52, 55, 60, 62, 64, 60, 55, 52, 48],
        "bass": [36, 43, 38, 36],
        "sparkle": False,
    },
    "rain-sun-grow": {
        "bpm": 112,
        "melody": [84, 83, 81, 79, 76, 79, 84, 76, 81, 79, 76, 72, 76, 79, 84, 88],
        "bass": [48, 53, 47, 48],
        "sparkle": True,
    },
}


def write_wav(path: Path, buf: np.ndarray) -> None:
    import wave

    stereo = np.clip(buf, -1, 1)
    pcm = (stereo.T * 32767).astype(np.int16)
    path.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(path), "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())


def duration(path: Path) -> float:
    r = subprocess.run(["ffmpeg", "-i", str(path)], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    for line in r.stdout.splitlines():
        if "Duration" in line:
            hms = line.split("Duration:")[1].split(",")[0].strip()
            h, m, s = hms.split(":")
            return int(h) * 3600 + int(m) * 60 + float(s)
    return 24.0


def mix(vocal: Path, bed: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    dur = duration(vocal) + 4.0
    cmd = [
        FFMPEG,
        "-y",
        "-hide_banner",
        "-loglevel",
        "error",
        "-i",
        str(vocal),
        "-i",
        str(bed),
        "-filter_complex",
        f"[0:a]adelay=900|900,aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo,volume=1.12[v];"
        f"[1:a]atrim=0:{dur:.2f},asetpts=PTS-STARTPTS,aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo,volume=0.48[m];"
        "[v][m]amix=inputs=2:duration=longest:dropout_transition=0:normalize=0,alimiter=limit=0.94",
        "-codec:a",
        "libmp3lame",
        "-q:a",
        "3",
        str(dest),
    ]
    subprocess.check_call(cmd)


def main() -> None:
    BEDS.mkdir(parents=True, exist_ok=True)
    DRY.mkdir(parents=True, exist_ok=True)

    vocals: list[Path] = []
    for p in OUT.rglob("*.mp3"):
        if "_bath" in str(p) or "_dry" in str(p):
            continue
        rel = p.relative_to(OUT)
        dry = DRY / rel
        if not dry.exists():
            dry.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(p, dry)
        vocals.append(dry)

    beds: dict[str, Path] = {}
    for slug, spec in SONGS.items():
        # long enough for any locale + intro
        buf = groove(42.0, spec["bpm"], spec["melody"], spec["bass"], spec["sparkle"])
        path = BEDS / f"{slug}.wav"
        write_wav(path, buf)
        beds[slug] = path
        print("bed", slug, path.stat().st_size)

    for dry in vocals:
        slug = dry.stem
        if slug not in beds:
            print("skip", dry)
            continue
        dest = OUT / dry.relative_to(DRY)
        mix(dry, beds[slug], dest)
        print("mix", dest)


if __name__ == "__main__":
    main()
