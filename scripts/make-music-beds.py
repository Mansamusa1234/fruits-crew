#!/usr/bin/env python3
"""Cheerful original Fruits Crew bounce beds — not copied from any other show."""
from __future__ import annotations

import shutil
import subprocess
from pathlib import Path

import numpy as np

SR = 44100
OUT = Path("/workspace/public/audio")
DRY = OUT / "_dry"
BEDS = Path("/tmp/fruits-crew-beds")


def hz(midi: float) -> float:
    return 440.0 * (2 ** ((midi - 69) / 12))


def mallet(freq: float, dur: float, bright: float = 1.25) -> np.ndarray:
    n = max(1, int(SR * dur))
    t = np.arange(n) / SR
    e = np.exp(-t * 9) * (1 - np.exp(-t * 90))
    wave = (
        0.50 * np.sin(2 * np.pi * freq * t)
        + 0.32 * np.sin(2 * np.pi * freq * 2 * t) * np.exp(-t * 11)
        + 0.16 * np.sin(2 * np.pi * freq * 3 * t) * np.exp(-t * 16)
        + 0.08 * np.sin(2 * np.pi * freq * 5 * t) * np.exp(-t * 22)
    )
    return (e * wave * bright).astype(np.float32)


def bass(freq: float, dur: float) -> np.ndarray:
    n = max(1, int(SR * dur))
    t = np.arange(n) / SR
    e = np.minimum(t * 80, 1) * np.exp(-t * 5.5)
    wave = 0.85 * np.sin(2 * np.pi * freq * t) + 0.22 * np.sin(2 * np.pi * freq * 2 * t)
    return (e * wave).astype(np.float32)


def kick() -> np.ndarray:
    n = int(SR * 0.26)
    t = np.arange(n) / SR
    freq = 150 * np.exp(-t * 22) + 42
    e = np.exp(-t * 12)
    click = np.exp(-t * 90) * np.sin(2 * np.pi * 1800 * t) * 0.15
    return (e * np.sin(2 * np.pi * freq * t) + click).astype(np.float32)


def clap() -> np.ndarray:
    rng = np.random.default_rng(5)
    n = int(SR * 0.18)
    t = np.arange(n) / SR
    noise = rng.standard_normal(n).astype(np.float32)
    e = np.exp(-t * 32)
    # two stacked bursts feel like kids' claps
    a = noise * e
    b = np.zeros_like(a)
    d = int(0.012 * SR)
    b[d:] = noise[:-d] * np.exp(-(t[d:] - 0.012) * 36)
    return ((a + 0.7 * b) * 0.55).astype(np.float32)


def hat(open_hat: bool = False) -> np.ndarray:
    rng = np.random.default_rng(9)
    dur = 0.12 if open_hat else 0.045
    n = int(SR * dur)
    t = np.arange(n) / SR
    noise = rng.standard_normal(n).astype(np.float32)
    e = np.exp(-t * (18 if open_hat else 70))
    return (noise * e * (0.16 if open_hat else 0.10)).astype(np.float32)


def stab(freqs: list[float], dur: float) -> np.ndarray:
    n = max(1, int(SR * dur))
    t = np.arange(n) / SR
    e = np.minimum(t * 40, 1) * np.exp(-t * 7)
    wave = np.zeros(n, dtype=np.float32)
    for f in freqs:
        wave += (0.22 * np.sin(2 * np.pi * f * t) + 0.08 * np.sin(2 * np.pi * f * 2 * t)).astype(np.float32)
    return wave * e.astype(np.float32)


def place(buf: np.ndarray, sound: np.ndarray, t: float, gain: float = 1.0, pan: float = 0.0) -> None:
    i = int(t * SR)
    if i >= buf.shape[1]:
        return
    sl = sound * gain
    end = min(i + sl.shape[0], buf.shape[1])
    sl = sl[: end - i]
    left = sl * (1 - (pan + 1) / 2 * 0.55)
    right = sl * ((pan + 1) / 2 * 0.55 + 0.45)
    buf[0, i:end] += left
    buf[1, i:end] += right


def groove(seconds: float, bpm: float, hook: list[int], bassline: list[int]) -> np.ndarray:
    beat = 60.0 / bpm
    n = int(SR * (seconds + 1))
    buf = np.zeros((2, n), dtype=np.float32)

    # drums
    t = 0.0
    step = 0
    while t < seconds:
        b = step % 4
        place(buf, kick(), t, 1.05 if b == 0 else 0.82)
        if b in (1, 3):
            place(buf, clap(), t, 0.95)
            place(buf, clap(), t + 0.03, 0.35, pan=0.4)
        # extra cheer clap on the "and" of 4 every other bar
        if step % 8 == 7:
            place(buf, clap(), t + beat * 0.5, 0.7)
        # 8th hats, open on off-beat
        place(buf, hat(False), t, 0.8)
        place(buf, hat(True), t + beat * 0.5, 0.7)
        t += beat
        step += 1

    # bouncing bass: root on 1, fifth on 3, octave hop on 4
    t = 0.0
    bar = 0
    while t < seconds:
        root = bassline[bar % len(bassline)]
        place(buf, bass(hz(root), beat * 1.1), t, 0.85)
        place(buf, bass(hz(root + 7), beat * 0.7), t + beat * 2, 0.7)
        place(buf, bass(hz(root + 12), beat * 0.45), t + beat * 3, 0.65)
        # chord stab I
        place(buf, stab([hz(root + 12), hz(root + 16), hz(root + 19)], beat * 0.9), t, 0.7)
        place(buf, stab([hz(root + 17), hz(root + 21), hz(root + 24)], beat * 0.7), t + beat * 2, 0.55)
        t += beat * 4
        bar += 1

    # sticky hook in high register, thirds on top
    t = 0.0
    i = 0
    while t < seconds:
        midi = hook[i % len(hook)]
        if midi > 0:
            pan = -0.4 if i % 2 == 0 else 0.4
            place(buf, mallet(hz(midi), beat * 0.95, 1.35), t, 1.0, pan)
            place(buf, mallet(hz(midi + 4), beat * 0.7, 0.9), t, 0.45, -pan)
            # sparkle octave
            place(buf, mallet(hz(midi + 12), beat * 0.4, 0.8), t + 0.015, 0.28, pan * 0.5)
        t += beat * 0.5
        i += 1

    peak = np.max(np.abs(buf)) + 1e-9
    buf = np.tanh(buf / peak * 1.35) * 0.92
    return buf.astype(np.float32)


# Original catchy hooks in C major. 0 = rest. High = cheerful.
SONGS = {
    "jump-in-and-scrub": {
        "bpm": 140,
        # "fill the tap, jump in, wash those hands" bounce
        "hook": [76, 79, 83, 84, 83, 79, 76, 72, 81, 81, 79, 76, 72, 76, 79, 84],
        "bass": [48, 53, 48, 55],
    },
    "everything-is-connected": {
        "bpm": 126,
        "hook": [72, 76, 79, 84, 79, 76, 74, 72, 76, 79, 81, 79, 76, 72, 67, 72],
        "bass": [48, 45, 43, 48],
    },
    "wake-up-little-seed": {
        "bpm": 122,
        "hook": [72, 74, 76, 79, 76, 74, 72, 67, 72, 76, 79, 84, 79, 76, 72, 76],
        "bass": [48, 52, 50, 48],
    },
    "count-the-mangoes": {
        "bpm": 134,
        "hook": [72, 74, 76, 77, 79, 81, 83, 84, 84, 83, 81, 79, 77, 76, 74, 72],
        "bass": [48, 50, 52, 48],
    },
    "roots-hold-hands": {
        "bpm": 118,
        "hook": [67, 72, 76, 79, 76, 72, 69, 67, 72, 76, 74, 72, 67, 64, 67, 72],
        "bass": [43, 48, 45, 43],
    },
    "rain-sun-grow": {
        "bpm": 132,
        "hook": [84, 83, 81, 79, 84, 79, 76, 72, 81, 79, 76, 79, 84, 88, 84, 79],
        "bass": [48, 53, 47, 48],
    },
}


def write_wav(path: Path, buf: np.ndarray) -> None:
    import wave

    pcm = (np.clip(buf, -1, 1).T * 32767).astype(np.int16)
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
    dur = duration(vocal) + 5.0
    subprocess.check_call(
        [
            "ffmpeg",
            "-y",
            "-hide_banner",
            "-loglevel",
            "error",
            "-i",
            str(vocal),
            "-i",
            str(bed),
            "-filter_complex",
            f"[0:a]adelay=700|700,aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo,volume=1.05[v];"
            f"[1:a]atrim=0:{dur:.2f},asetpts=PTS-STARTPTS,aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo,volume=0.68[m];"
            "[v][m]amix=inputs=2:duration=longest:dropout_transition=0:normalize=0,alimiter=limit=0.95",
            "-codec:a",
            "libmp3lame",
            "-q:a",
            "3",
            str(dest),
        ]
    )


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
        buf = groove(40.0, spec["bpm"], spec["hook"], spec["bass"])
        path = BEDS / f"{slug}.wav"
        write_wav(path, buf)
        beds[slug] = path
        print("bed", slug)

    for dry in vocals:
        slug = dry.stem
        if slug not in beds:
            print("skip", dry)
            continue
        mix(dry, beds[slug], OUT / dry.relative_to(DRY))
        print("mix", dry.relative_to(DRY))


if __name__ == "__main__":
    main()
