import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H } from "@/components/layout/LegalPage";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <LegalPage title="Contact us" updated="14 September 2026">
      <p>Fruits Crew is created by Darren-neil.</p>
      <H>Press and partners</H>
      <p>
        Use the Press page for brand wording, and the Partners page for schools and libraries. We
        will list official social channels here when they are live. Until then, do not trust pages
        that pretend to be Fruits Crew.
      </p>
      <H>Children</H>
      <p>Please ask a parent or carer to write to us. We do not chat with children on this site.</p>
      <H>Legal</H>
      <p>Terms, privacy and cookies are in the footer. A solicitor should review them before a company launch.</p>
    </LegalPage>
  );
}
