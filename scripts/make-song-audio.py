#!/usr/bin/env python3
"""Generate original Fruits Crew karaoke MP3s with spoken lyrics."""
import asyncio
import os
from pathlib import Path

import edge_tts

OUT = Path("/workspace/public/audio")
OUT.mkdir(parents=True, exist_ok=True)

VOICES = {
    "chorus": "en-GB-SoniaNeural",
    "child": "en-GB-MaisieNeural",
    "adult": "en-GB-LibbyNeural",
    "grandparent": "en-GB-SoniaNeural",
}

SONGS = {
    "everything-is-connected": [
        ("chorus", "Sun and rain and root and seed. Every living thing we need."),
        ("child", "Why does the rain need the root?"),
        ("adult", "Water travels. Roots hold out their hands."),
        ("chorus", "Everything is connected. Each one teach one."),
        ("grandparent", "What you cannot see still holds you."),
        ("chorus", "Grow your mind, share the sun. Learn in harmony, everyone. Everything is connected."),
    ],
    "wake-up-little-seed": [
        ("child", "I am waiting in the dark."),
        ("adult", "Rain is coming. That is the spark."),
        ("chorus", "Wake up, Little Seed. Stretch your root, find the light you need."),
        ("grandparent", "Slow is still growing."),
        ("chorus", "Down to drink and up to see. Wake up, Little Seed."),
        ("child", "I think I feel the sun on me."),
    ],
    "count-the-mangoes": [
        ("chorus", "One mango golden, two mango bright. Three, four, five in the morning light."),
        ("child", "How many now?"),
        ("adult", "Six, seven, eight. Keep the beat."),
        ("chorus", "Nine in the basket, ten at our feet. Count them clean and count them true."),
        ("grandparent", "Rushing loses fruit."),
        ("chorus", "One to ten with me and you."),
    ],
    "roots-hold-hands": [
        ("grandparent", "Under the garden, the quiet work."),
        ("child", "Who is down there in the dark?"),
        ("adult", "Roots hold hands. Water slips between."),
        ("chorus", "Roots hold hands where the dark is kind. Help is hidden, help is mine."),
        ("grandparent", "Kindness can be quiet."),
        ("chorus", "Each one teach one, root to root. The unseen garden does the truth."),
    ],
    "rain-sun-grow": [
        ("chorus", "Rain, sun, grow."),
        ("child", "Can I hurry?"),
        ("adult", "Light is patient. Water comes and goes."),
        ("chorus", "Wait, then you know."),
        ("grandparent", "Too much of one gift can still be unkind."),
        ("chorus", "Rain, sun, grow. Share the day and let it show. Rain, sun, grow."),
    ],
}


async def one_line(path: Path, voice: str, text: str) -> None:
    comm = edge_tts.Communicate(text, voice, rate="-8%")
    await comm.save(str(path))


async def main() -> None:
    tmp = OUT / "_parts"
    tmp.mkdir(exist_ok=True)
    for slug, turns in SONGS.items():
        parts = []
        for i, (role, text) in enumerate(turns):
            p = tmp / f"{slug}-{i}.mp3"
            await one_line(p, VOICES[role], text)
            parts.append(p)
        lst = tmp / f"{slug}.txt"
        lst.write_text("".join(f"file '{p}'\n" for p in parts))
        out = OUT / f"{slug}.mp3"
        os.system(
            f"ffmpeg -y -hide_banner -loglevel error -f concat -safe 0 -i {lst} "
            f"-c copy {out}"
        )
        print(slug, out.stat().st_size if out.exists() else "MISSING")


if __name__ == "__main__":
    asyncio.run(main())
