#!/usr/bin/env python3
"""Storytelling karaoke MP3s: expressive multi-voice + quiet garden bed."""
import asyncio
import math
import os
import struct
import wave
from pathlib import Path

import edge_tts

OUT = Path("/workspace/public/audio")
TMP = OUT / "_story_parts"
TMP.mkdir(parents=True, exist_ok=True)

VOICES = {
    "en": {
        "chorus": ("en-US-AriaNeural", "+14%", "+6Hz"),
        "child": ("en-GB-MaisieNeural", "+18%", "+12Hz"),
        "adult": ("en-US-JennyNeural", "+8%", "+3Hz"),
        "grandparent": ("en-GB-SoniaNeural", "-8%", "-4Hz"),
    },
    "es": {
        "chorus": ("es-MX-DaliaNeural", "+12%", "+5Hz"),
        "child": ("es-MX-DaliaNeural", "+18%", "+10Hz"),
        "adult": ("es-MX-DaliaNeural", "+6%", "+2Hz"),
        "grandparent": ("es-ES-ElviraNeural", "-8%", "-4Hz"),
    },
    "fr": {
        "chorus": ("fr-FR-DeniseNeural", "+12%", "+5Hz"),
        "child": ("fr-FR-EloiseNeural", "+16%", "+10Hz"),
        "adult": ("fr-FR-DeniseNeural", "+6%", "+2Hz"),
        "grandparent": ("fr-FR-HenriNeural", "-10%", "-4Hz"),
    },
    "jam": {
        "chorus": ("en-US-JennyNeural", "+12%", "+4Hz"),
        "child": ("en-GB-MaisieNeural", "+16%", "+10Hz"),
        "adult": ("en-US-JennyNeural", "+8%", "+2Hz"),
        "grandparent": ("en-GB-SoniaNeural", "-8%", "-4Hz"),
    },
}

# Spoken lines copied from song-i18n.ts (keep in sync).
SONGS = {
    "everything-is-connected": {
        "en": [
            ("chorus", "Come closer, little listener! The garden is waking! Sun and rain and root and seed — every living thing we need!"),
            ("child", "Ooh — why does the rain need the root?"),
            ("adult", "Ah, because water travels, and the roots hold out their hands! Like this!"),
            ("chorus", "Everything is connected! Each one teach one!"),
            ("grandparent", "Soft now. What you cannot see still holds you."),
            ("chorus", "Grow your mind! Share the sun! Learn in harmony, everyone! Everything is connected!"),
        ],
        "es": [
            ("chorus", "¡Ven, ven, pequeño oyente! ¡El jardín se despierta! Sol y lluvia, raíz y semilla — todo ser vivo que necesitamos!"),
            ("child", "¿Por qué la lluvia necesita la raíz?"),
            ("adult", "Porque el agua viaja, y las raíces tienden las manos. ¡Mira!"),
            ("chorus", "¡Todo está conectado! ¡Cada uno enseña a uno!"),
            ("grandparent", "Despacio. Lo que no puedes ver aún te sostiene."),
            ("chorus", "¡Crece tu mente! ¡Comparte el sol! ¡Aprendan en armonía! ¡Todo está conectado!"),
        ],
        "fr": [
            ("chorus", "Viens, viens, petit écouteur ! Le jardin s’éveille ! Soleil et pluie, racine et graine — tout ce qui vit, tout ce qu’il nous faut !"),
            ("child", "Pourquoi la pluie a-t-elle besoin de la racine ?"),
            ("adult", "Parce que l’eau voyage, et les racines tendent les mains. Comme ça !"),
            ("chorus", "Tout est lié ! Chacun enseigne à chacun !"),
            ("grandparent", "Doucement. Ce que tu ne vois pas te porte encore."),
            ("chorus", "Grandis ton esprit ! Partage le soleil ! Apprenez en harmonie ! Tout est lié !"),
        ],
        "jam": [
            ("chorus", "Come closer, likkle listener! Di garden a wake! Sun an rain an root an seed — every living ting we need!"),
            ("child", "Why de rain need de root?"),
            ("adult", "Because water travel, and di roots hold out dem hand! Look ya!"),
            ("chorus", "Everything connect! Each one teach one!"),
            ("grandparent", "Easy now. What you cyaan see still hold you."),
            ("chorus", "Grow yu mind! Share di sun! Learn in harmony, everyone! Everything connect!"),
        ],
    },
    "wake-up-little-seed": {
        "en": [
            ("child", "Shhh. I am waiting in the dark. Is it time?"),
            ("adult", "Yes! Rain is coming — that is the spark!"),
            ("chorus", "Wake up, Little Seed! Stretch your root, find the light you need!"),
            ("grandparent", "Remember: slow is still growing."),
            ("chorus", "Down to drink — and up to see! Wake up, Little Seed!"),
            ("child", "Oh! I think I feel the sun on me!"),
        ],
        "es": [
            ("child", "Shhh. Espero en la oscuridad. ¿Ya es hora?"),
            ("adult", "¡Sí! Llega la lluvia — esa es la chispa!"),
            ("chorus", "¡Despierta, Pequeña Semilla! Estira tu raíz, busca la luz!"),
            ("grandparent", "Recuerda: despacio también es crecer."),
            ("chorus", "Abajo a beber, y arriba a ver! ¡Despierta, Pequeña Semilla!"),
            ("child", "¡Ay! ¡Siento el sol sobre mí!"),
        ],
        "fr": [
            ("child", "Chut. J’attends dans le noir. C’est l’heure ?"),
            ("adult", "Oui ! La pluie arrive — voilà l’étincelle !"),
            ("chorus", "Réveille-toi, Petite Graine ! Étire ta racine, trouve la lumière !"),
            ("grandparent", "Souviens-toi : lentement, c’est encore grandir."),
            ("chorus", "En bas pour boire — et en haut pour voir ! Réveille-toi, Petite Graine !"),
            ("child", "Oh ! Je sens le soleil sur moi !"),
        ],
        "jam": [
            ("child", "Ssshh. Mi a wait inna di dark. A time now?"),
            ("adult", "Yes! Rain a come — dat a di spark!"),
            ("chorus", "Wake up, Little Seed! Stretch yu root, find di light yu need!"),
            ("grandparent", "Member: slow still a grow."),
            ("chorus", "Down fi drink — an up fi see! Wake up, Little Seed!"),
            ("child", "Oh! Mi feel di sun pon mi!"),
        ],
    },
    "count-the-mangoes": {
        "en": [
            ("chorus", "Ready to count? One mango golden! Two mango bright! Three, four, five in the morning light!"),
            ("child", "How many now? How many now?"),
            ("adult", "Six! Seven! Eight — keep the beat!"),
            ("chorus", "Nine in the basket, ten at our feet! Count them clean and count them true!"),
            ("grandparent", "Easy. Rushing loses fruit."),
            ("chorus", "One to ten with me and you!"),
        ],
        "es": [
            ("chorus", "¿Listos para contar? ¡Un mango de oro! ¡Dos mangos de luz! Tres, cuatro, cinco al amanecer!"),
            ("child", "¿Cuántos hay ahora?"),
            ("adult", "¡Seis! ¡Siete! ¡Ocho — sigue el ritmo!"),
            ("chorus", "Nueve en la cesta, diez a los pies! Cuéntalos bien, cuéntalos tú!"),
            ("grandparent", "Despacio. Si corres, se cae la fruta."),
            ("chorus", "¡Del uno al diez contigo y conmigo!"),
        ],
        "fr": [
            ("chorus", "Prêts à compter ? Une mangue d’or ! Deux mangues de jour ! Trois, quatre, cinq au matin !"),
            ("child", "Combien maintenant ?"),
            ("adult", "Six ! Sept ! Huit — garde le rythme !"),
            ("chorus", "Neuf dans le panier, dix à nos pieds ! Compte-les bien, compte-les vrai !"),
            ("grandparent", "Doucement. Trop vite, on perd le fruit."),
            ("chorus", "De un à dix, avec moi et toi !"),
        ],
        "jam": [
            ("chorus", "Ready fi count? One mango gold! Two mango bright! Tree, four, five inna morning light!"),
            ("child", "How much now?"),
            ("adult", "Six! Seven! Eight — keep di beat!"),
            ("chorus", "Nine inna basket, ten a wi foot! Count dem clean, count dem true!"),
            ("grandparent", "Tek time. If yu rush, fruit drop."),
            ("chorus", "One to ten wid me an you!"),
        ],
    },
    "roots-hold-hands": {
        "en": [
            ("grandparent", "Lean in. Under the garden, the quiet work is happening."),
            ("child", "Who is down there in the dark?"),
            ("adult", "Friends! Roots hold hands. Water slips between!"),
            ("chorus", "Roots hold hands where the dark is kind. Help is hidden — help is mine!"),
            ("grandparent", "Kindness can be quiet, and still be strong."),
            ("chorus", "Each one teach one, root to root! The unseen garden does the truth!"),
        ],
        "es": [
            ("grandparent", "Acércate. Bajo el jardín, el trabajo callado sigue."),
            ("child", "¿Quién está ahí en la oscuridad?"),
            ("adult", "¡Amigos! Las raíces se dan la mano. El agua se cuela entre ellas!"),
            ("chorus", "Las raíces se dan la mano donde la oscuridad es amable. La ayuda está escondida — y también es mía!"),
            ("grandparent", "La bondad puede ser quieta, y aún así fuerte."),
            ("chorus", "Cada uno enseña a uno, raíz a raíz!"),
        ],
        "fr": [
            ("grandparent", "Approche. Sous le jardin, le travail tranquille continue."),
            ("child", "Qui est là-bas dans le noir ?"),
            ("adult", "Des amis ! Les racines se tiennent la main. L’eau glisse entre elles !"),
            ("chorus", "Les racines se tiennent la main où le noir est doux. L’aide est cachée — et elle est à moi !"),
            ("grandparent", "La gentillesse peut être silencieuse, et pourtant forte."),
            ("chorus", "Chacun enseigne à chacun, racine à racine !"),
        ],
        "jam": [
            ("grandparent", "Lean in. Under di garden, di quiet work a gwaan."),
            ("child", "A who down deh inna di dark?"),
            ("adult", "Friends! Root hold hand. Water slip in between!"),
            ("chorus", "Root hold hand weh di dark kind. Help hide weh — help a mine!"),
            ("grandparent", "Kindness can stay quiet, an still strong."),
            ("chorus", "Each one teach one, root to root!"),
        ],
    },
    "rain-sun-grow": {
        "en": [
            ("chorus", "Ready? Rain! Sun! Grow!"),
            ("child", "Can I hurry? Can I hurry now?"),
            ("adult", "Not yet. Light is patient. Water comes and goes — a visitor, not a flood!"),
            ("chorus", "Wait — then you know!"),
            ("grandparent", "Too much of one gift can still be unkind."),
            ("chorus", "Rain, sun, grow! Share the day and let it show! Rain, sun, grow!"),
        ],
        "es": [
            ("chorus", "¿Listos? ¡Lluvia! ¡Sol! ¡Crece!"),
            ("child", "¿Puedo apurarme? ¿Ya?"),
            ("adult", "Aún no. La luz es paciente. El agua va y viene — una visita, no una inundación!"),
            ("chorus", "Espera — entonces lo sabes!"),
            ("grandparent", "Demasiado de un don también puede herir."),
            ("chorus", "¡Lluvia, sol, crece! ¡Comparte el día!"),
        ],
        "fr": [
            ("chorus", "Prêts ? Pluie ! Soleil ! Grandis !"),
            ("child", "Je peux me dépêcher ? Maintenant ?"),
            ("adult", "Pas encore. La lumière est patiente. L’eau va et vient — une visite, pas une inondation !"),
            ("chorus", "Attends — alors tu sauras !"),
            ("grandparent", "Trop d’un cadeau peut encore blesser."),
            ("chorus", "Pluie, soleil, grandis ! Partage le jour !"),
        ],
        "jam": [
            ("chorus", "Ready? Rain! Sun! Grow!"),
            ("child", "Mi can hurry? Now?"),
            ("adult", "Not yet. Light tek time. Water come an go — a visit, not a flood!"),
            ("chorus", "Wait — den yu know!"),
            ("grandparent", "Too much a one gift still can rough."),
            ("chorus", "Rain, sun, grow! Share di day an let it show!"),
        ],
    },
}


def write_bed(path: Path, seconds: float = 50.0) -> None:
    sr = 22050
    n = int(sr * seconds)
    notes = [432.0, 512.0, 576.0, 648.0, 576.0, 512.0]
    with wave.open(str(path), "w") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sr)
        frames = bytearray()
        for i in range(n):
            f = notes[(i // (sr // 2)) % len(notes)]
            env = 0.08 * (0.5 + 0.5 * math.sin(2 * math.pi * i / sr / 4))
            val = int(max(-1, min(1, env * math.sin(2 * math.pi * f * i / sr))) * 32000)
            frames.extend(struct.pack("<h", val))
        w.writeframes(frames)


async def speak(path: Path, voice: str, text: str, rate: str, pitch: str) -> None:
    comm = edge_tts.Communicate(text, voice, rate=rate, pitch=pitch)
    await comm.save(str(path))


async def main() -> None:
    bed = TMP / "bed.wav"
    write_bed(bed)
    for slug, langs in SONGS.items():
        for lang, turns in langs.items():
            dest_dir = OUT / lang
            dest_dir.mkdir(exist_ok=True)
            parts = []
            for i, (role, text) in enumerate(turns):
                voice, rate, pitch = VOICES[lang][role]
                p = TMP / f"{lang}-{slug}-{i}.mp3"
                await speak(p, voice, text, rate, pitch)
                parts.append(p)
            lst = TMP / f"{lang}-{slug}.txt"
            lst.write_text("".join(f"file '{p}'\n" for p in parts))
            speech = TMP / f"{lang}-{slug}-speech.mp3"
            os.system(
                f"ffmpeg -y -hide_banner -loglevel error -f concat -safe 0 -i {lst} -c copy {speech}"
            )
            out = dest_dir / f"{slug}.mp3"
            os.system(
                f"ffmpeg -y -hide_banner -loglevel error -i {speech} -i {bed} "
                f"-filter_complex '[1:a]volume=0.10[a1];[0:a][a1]amix=inputs=2:duration=first:dropout_transition=2[a]' "
                f"-map '[a]' -c:a libmp3lame -q:a 4 {out}"
            )
            print(lang, slug, out.stat().st_size if out.exists() else "MISSING")


if __name__ == "__main__":
    asyncio.run(main())
