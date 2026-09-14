import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, H } from "@/components/layout/LegalPage";

export const Route = createFileRoute("/partners")({ component: PartnersPage });

function PartnersPage() {
  return (
    <LegalPage title="Partners" updated="14 September 2026">
      <p>
        Fruits Crew works with families, schools and libraries. We do not sell to children on this
        site.
      </p>
      <H>Schools and libraries</H>
      <p>
        Lesson-friendly songs, plant records with sources, and family activities. See the{" "}
        <Link to="/schools" className="font-semibold text-leaf">
          schools page
        </Link>
        .
      </p>
      <H>Press</H>
      <p>
        Brand wording and pictures:{" "}
        <Link to="/press" className="font-semibold text-leaf">
          Press
        </Link>
        .
      </p>
      <H>What we will not do</H>
      <p>
        We will not partner in a way that puts ads in front of children, copies another studio, or
        pretends another company owns Fruits Crew.
      </p>
    </LegalPage>
  );
}
