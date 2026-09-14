import { createFileRoute } from "@tanstack/react-router";
import { LivingFarm } from "@/components/farm/LivingFarm";

export const Route = createFileRoute("/farm")({ component: FarmPage });

function FarmPage() {
  return (
    <main className="mx-auto max-w-6xl px-3 py-6 sm:px-4 sm:py-10">
      <p className="px-1 text-sm text-muted">
        God made living things with seed. Plant one. Call the rain. Call the sun. Watch a gift grow:
        raised beds, drip lines, rainwater tank, polytunnel, compost and a family table.
      </p>
      <div className="mt-5">
        <LivingFarm />
      </div>
    </main>
  );
}
