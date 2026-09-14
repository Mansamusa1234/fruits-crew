import { createFileRoute } from "@tanstack/react-router";
import { WorldMap } from "@/components/map/WorldMap";

export const Route = createFileRoute("/map")({ component: MapPage });

function MapPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl">World garden map</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Touch a region to see plants with documented origins. Botanical origin is not the same as where a
        crop is grown today.
      </p>
      <div className="mt-8">
        <WorldMap />
      </div>
    </main>
  );
}
