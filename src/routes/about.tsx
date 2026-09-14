import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, H } from "@/components/layout/LegalPage";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <LegalPage title="About Fruits Crew" updated="14 September 2026">
      <p>
        Fruits Crew is a joyful worldwide children’s learning and animation universe where fruits,
        vegetables, seeds, soil, roots, water, weather, plants, animals and the Earth can talk, sing
        and learn together.
      </p>
      <p>
        Core message: Everything is connected. Each one teach one. Learn together. Grow together.
        Love one another.
      </p>
      <H>Creator</H>
      <p>Created by Darren-neil. Original characters, songs and stories.</p>
      <H>Who this website is for</H>
      <p>
        This website is designed for parents, carers, teachers and guardians. If you are under 13,
        use it with an adult.
      </p>
      <H>What you will find</H>
      <ul className="list-disc space-y-1 pl-5">
        <li>Original characters (the Crew)</li>
        <li>Stories to watch</li>
        <li>Original songs to sing</li>
        <li>A living farm where plants grow</li>
        <li>Plant records with sources</li>
        <li>Family activities away from the screen</li>
      </ul>
      <H>What this is not</H>
      <p>
        Fruits Crew is not another studio’s show. We do not copy other children’s characters, songs
        or pictures. We do not sell products to children on this site. We do not run ads that follow
        a child around the internet.
      </p>
      <p>
        <Link to="/parents" className="font-semibold text-leaf">
          Parent and safety notes
        </Link>
        {" · "}
        <Link to="/press" className="font-semibold text-leaf">
          Press
        </Link>
        {" · "}
        <Link to="/contact" className="font-semibold text-leaf">
          Contact
        </Link>
      </p>
    </LegalPage>
  );
}
