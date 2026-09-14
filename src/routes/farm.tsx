import { createFileRoute } from "@tanstack/react-router";
import { LivingFarm } from "@/components/farm/LivingFarm";

export const Route = createFileRoute("/farm")({ component: FarmPage });

function FarmPage() {
  return (
    <main className="mx-auto max-w-6xl px-3 py-6 sm:px-4 sm:py-10">
      <p className="px-1 text-sm text-muted">
        A real working farm: raised beds, drip lines, rainwater tank, polytunnel, compost bays and a
        family table. Seeds grow if water and light come in the right amount.
      </p>
      <div className="mt-5">
        <LivingFarm />
      </div>
    </main>
  );
}
