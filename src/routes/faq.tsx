import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, H } from "@/components/layout/LegalPage";

export const Route = createFileRoute("/faq")({ component: FaqPage });

function FaqPage() {
  return (
    <LegalPage title="FAQs" updated="14 September 2026">
      <H>Is this CoComelon?</H>
      <p>
        No. Fruits Crew is an original brand by Darren-neil. We do not copy other studios’
        characters, songs or pictures.
      </p>
      <H>Who is the site for?</H>
      <p>Parents, carers and teachers. Children watch and play with an adult nearby.</p>
      <H>Do you sell to children here?</H>
      <p>No.</p>
      <H>Are the songs finished studio records?</H>
      <p>
        The world, pictures and lyrics are original. Sung masters are made in our CapCut studio
        workflow. The site holds the show world they live in.
      </p>
      <H>Can my child talk to other children here?</H>
      <p>No. There is no child-to-child chat.</p>
      <H>Where do I start?</H>
      <p>
        <Link to="/watch" className="font-semibold text-leaf">
          Watch
        </Link>
        ,{" "}
        <Link to="/sing" className="font-semibold text-leaf">
          Sing
        </Link>
        , or{" "}
        <Link to="/farm" className="font-semibold text-leaf">
          open the farm
        </Link>
        .
      </p>
    </LegalPage>
  );
}
