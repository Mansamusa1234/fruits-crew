import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H } from "@/components/layout/LegalPage";

export const Route = createFileRoute("/terms")({ component: TermsPage });

function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="14 September 2026">
      <p>
        THESE TERMS APPLY TO THIS FRUITS CREW WEBSITE. BY USING THE SITE YOU ARE SHOWING THAT YOU
        ACCEPT THEM. PLEASE READ THEM WITH CARE.
      </p>
      <H>Welcome</H>
      <p>
        These terms set out how you may use the Fruits Crew website. “We”, “us” and “our” means the
        Fruits Crew project, created by Darren-neil. “You” means the person using the site.
      </p>
      <H>Who the site is for</H>
      <p>
        This website is designed for parents and guardians. If you are under 13, you may only use
        the site with a parent or carer.
      </p>
      <H>Owner</H>
      <p>
        Original characters, stories, songs, pictures and code on this site belong to Fruits Crew /
        Darren-neil unless we say otherwise. Nothing on this site transfers those rights to you.
      </p>
      <H>How you may use the material</H>
      <p>
        You may browse, watch and sing with your family. You may not copy, sell, or pretend Fruits
        Crew is another brand. You may not use our names, characters or pictures to suggest we
        approve another business if we have not said so in writing.
      </p>
      <H>What you must not do</H>
      <ul className="list-disc space-y-1 pl-5">
        <li>Attack, overload or break into the site.</li>
        <li>Put harmful software on or through the site.</li>
        <li>Copy another studio’s protected characters, songs or pictures into Fruits Crew.</li>
        <li>Use the site to sell to children.</li>
      </ul>
      <H>Third-party links</H>
      <p>
        We may link to YouTube, CapCut, GitHub or plant-science sources. Those sites have their own
        rules. We are not responsible for what they show outside the pages we control.
      </p>
      <H>Shopping</H>
      <p>
        This site does not sell products to children. If we later link to a shop, that shop’s own
        terms apply, and an adult must complete any purchase.
      </p>
      <H>Changes</H>
      <p>
        We may update these terms. The date at the top will change. Please check them from time to
        time.
      </p>
      <H>If you do not agree</H>
      <p>If you do not agree, please stop using the site.</p>
      <H>Contact</H>
      <p>Questions about these terms: use the Contact page. Created by Darren-neil.</p>
    </LegalPage>
  );
}
