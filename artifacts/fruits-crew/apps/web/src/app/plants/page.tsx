import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPlants, type Plant } from "@/data/plants";

export const metadata: Metadata = {
  title: "Plant Explorer",
  description:
    "Explore plants from the Caribbean, Africa, Britain and around the world. Learn names, origins and stories — always with clear evidence labels.",
};

const REGION_LABELS: Record<Plant["region_group"], string> = {
  caribbean: "Caribbean & Tropical",
  african: "African Heritage",
  british: "British & Temperate",
  global: "Around the World",
};

const REGION_ORDER: Plant["region_group"][] = [
  "caribbean",
  "african",
  "british",
  "global",
];

export default function PlantsPage() {
  const all = getAllPlants();

  return (
    <div className="min-h-screen bg-gradient-to-b from-crew-sun-50 via-white to-crew-green-50">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-crew-green-600">
            Nature Encyclopedia
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-crew-soil-900 sm:text-4xl">
            Plant Explorer
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-crew-soil-600">
            Discover fruits, roots, grains and wild plants. We always say what is verified science
            and what is traditional knowledge.
          </p>
        </div>

        {/* Safety notice */}
        <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong>Safety:</strong> Never eat a wild plant unless a knowledgeable adult has
          positively identified it as safe. This app is for learning — not for foraging decisions.
        </div>

        {REGION_ORDER.map((region) => {
          const regionPlants = all.filter((p) => p.region_group === region);
          if (regionPlants.length === 0) return null;
          return (
            <section key={region} className="mb-12">
              <h2 className="mb-4 text-xl font-bold text-crew-soil-900">
                {REGION_LABELS[region]}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {regionPlants.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/plants/${p.slug}`}
                    className="group flex items-start gap-3 rounded-2xl border border-crew-green-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-crew-green-200 hover:shadow-md"
                  >
                    <span className="text-3xl" aria-hidden>
                      {p.emoji}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-crew-soil-900 group-hover:text-crew-green-700">
                        {p.common_name}
                      </h3>
                      {p.scientific_name && (
                        <p className="truncate text-xs italic text-crew-soil-500">
                          {p.scientific_name}
                        </p>
                      )}
                      {p.description && (
                        <p className="mt-1 line-clamp-2 text-sm text-crew-soil-600">
                          {p.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <p className="text-center text-sm text-crew-soil-500">
          Everything Is Connected · From Seed to Knowledge
        </p>
      </main>

      <Footer />
    </div>
  );
}
