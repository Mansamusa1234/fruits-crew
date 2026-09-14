#!/usr/bin/env python3
"""Bouncy original Fruits Crew bath song — not copied from any other show."""
import asyncio
from pathlib import Path

import edge_tts

OUT = Path("/workspace/public/audio")
VOICES = {
    "en": {
        "chorus": "en-GB-SoniaNeural",
        "child": "en-GB-MaisieNeural",
        "adult": "en-GB-LibbyNeural",
        "grandparent": "en-GB-SoniaNeural",
    },
    "es": {
        "chorus": "es-ES-ElviraNeural",
        "child": "es-MX-DaliaNeural",
        "adult": "es-ES-ElviraNeural",
        "grandparent": "es-ES-ElviraNeural",
    },
    "fr": {
        "chorus": "fr-FR-DeniseNeural",
        "child": "fr-FR-DeniseNeural",
        "adult": "fr-FR-DeniseNeural",
        "grandparent": "fr-FR-DeniseNeural",
    },
    "jam": {
        "chorus": "en-GB-SoniaNeural",
        "child": "en-GB-MaisieNeural",
        "adult": "en-GB-LibbyNeural",
        "grandparent": "en-GB-SoniaNeural",
    },
}

LINES = {
    "en": [
        ("chorus", "In the bath! In the bath!"),
        ("child", "I'll be the queen!"),
        ("adult", "The sink and the bubble!"),
        ("chorus", "Fill it up, the tap! Jump in the water and scrub!"),
        ("chorus", "Wash my hands! Wash my hands!"),
        ("grandparent", "Clean hands, kind heart."),
        ("chorus", "Jump in, scrub, shine! Wash my hands!"),
    ],
    "es": [
        ("chorus", "En el baño! En el baño!"),
        ("child", "Yo soy la reina!"),
        ("adult", "El lavabo y la burbuja!"),
        ("chorus", "Abre el grifo! Salta al agua y frota! Me lavo las manos!"),
        ("grandparent", "Manos limpias, corazon bueno."),
        ("chorus", "Salta, frota, brilla!"),
    ],
    "fr": [
        ("chorus", "Dans le bain! Dans le bain!"),
        ("child", "Je suis la reine!"),
        ("adult", "L evier et la bulle!"),
        ("chorus", "Ouvre le robinet! Saute dans l eau et frotte! Je me lave les mains!"),
        ("grandparent", "Mains propres, coeur gentil."),
        ("chorus", "Saute, frotte, brille!"),
    ],
    "jam": [
        ("chorus", "Inna di bath! Inna di bath!"),
        ("child", "Mi a di queen!"),
        ("adult", "Di sink an di bubble!"),
        ("chorus", "Fill it up, di tap! Jump in di water an scrub! Wash mi hands! Wash mi hands!"),
        ("grandparent", "Clean hands, kind heart."),
        ("chorus", "Jump in, scrub, shine!"),
    ],
}


async def speak(path: Path, voice: str, text: str) -> None:
    comm = edge_tts.Communicate(text, voice, rate="+18%", pitch="+8Hz")
    await comm.save(str(path))


async def main() -> None:
    import os

    tmp = OUT / "_bath"
    tmp.mkdir(parents=True, exist_ok=True)
    for loc, turns in LINES.items():
        parts = []
        for i, (role, text) in enumerate(turns):
            p = tmp / f"{loc}-{i}.mp3"
            await speak(p, VOICES[loc][role], text)
            parts.append(p)
        lst = tmp / f"{loc}.txt"
        lst.write_text("".join(f"file '{p}'\n" for p in parts))
        dest_dir = OUT / loc
        dest_dir.mkdir(exist_ok=True)
        out = dest_dir / "jump-in-and-scrub.mp3"
        os.system(
            f"ffmpeg -y -hide_banner -loglevel error -f concat -safe 0 -i {lst} -c copy {out}"
        )
        print(loc, out, out.stat().st_size if out.exists() else "MISSING")
    # English default used by some older links
    root = OUT / "jump-in-and-scrub.mp3"
    os.system(f"cp {OUT / 'en' / 'jump-in-and-scrub.mp3'} {root}")


if __name__ == "__main__":
    asyncio.run(main())
