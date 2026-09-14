import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H } from "@/components/layout/LegalPage";

export const Route = createFileRoute("/cookies")({ component: CookiesPage });

function CookiesPage() {
  return (
    <LegalPage title="Cookies" updated="14 September 2026">
      <p>
        A cookie is a small file a website can save on your device. Fruits Crew uses as little of
        this as we can.
      </p>
      <H>What we use</H>
      <ul className="list-disc space-y-1 pl-5">
        <li>Language choice can be remembered in your browser.</li>
        <li>Your farm (plants you grew) can be remembered in your browser.</li>
      </ul>
      <H>What we do not use</H>
      <p>We do not use advertising cookies that follow a child across other websites.</p>
      <H>How to clear them</H>
      <p>
        You can clear site data in your browser settings. That will reset language and farm
        progress on that device.
      </p>
    </LegalPage>
  );
}
