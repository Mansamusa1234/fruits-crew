import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H } from "@/components/layout/LegalPage";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="14 September 2026">
      <p>
        Fruits Crew is built so children can learn without being followed around the internet. This
        first public site stores as little as we can.
      </p>
      <H>Who this is for</H>
      <p>Parents and guardians. Children should use the site with an adult.</p>
      <H>What we collect now</H>
      <ul className="list-disc space-y-1 pl-5">
        <li>This first release does not ask a child for a name, email or photo.</li>
        <li>Language choice and farm progress can stay on your own device (in the browser).</li>
        <li>We do not sell children’s data. We do not run behavioural advertising here.</li>
      </ul>
      <H>What we do not do</H>
      <ul className="list-disc space-y-1 pl-5">
        <li>No child-to-child chat.</li>
        <li>No location tracking of a child.</li>
        <li>No products sold to children on this site.</li>
      </ul>
      <H>If we add accounts later</H>
      <p>
        Any sign-in will be for an adult. We will update this page first. UK GDPR, the Age
        Appropriate Design Code, and COPPA will need a solicitor’s review before that launch.
      </p>
      <H>Contact</H>
      <p>Privacy questions: use the Contact page. Created by Darren-neil.</p>
    </LegalPage>
  );
}
