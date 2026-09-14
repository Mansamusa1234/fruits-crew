import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPlants, getPlantBySlug } from "@/data/plants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPlants().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) return { title: "Plant not found" };
  return {
    title: plant.common_name,
    description: plant.description ?? `${plant.common_name} — Fruits Crew Plant Explorer`,
  };
}

const STATUS_LABELS: Record<string, string> = {
  verified: "Scientifically established",
  good_evidence: "Good evidence",
  traditional_knowledge: "Traditional knowledge",
  disputed: "Disputed",
  unverified: "Unverified",
  false_misleading: "False / misleading",
};

export default async function PlantPage({ params }: Props) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-crew-sun-50 via-white to-crew-green-50">
      <Header />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link
          href="/plants"
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-crew-green-700 hover:text-crew-green-800"
        >
          ← All plants
        </Link>

        <div className="rounded-3xl border border-crew-green-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            <span className="text-5xl" aria-hidden>
              {plant.emoji}
            </span>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-crew-soil-900">
                {plant.common_name}
              </h1>
              {plant.scientific_name && (
                <p className="mt-1 text-crew-soil-500 italic">{plant.scientific_name}</p>
              )}
              {plant.other_names && plant.other_names.length > 0 && (
                <p className="mt-1 text-sm text-crew-soil-500">
                  Also known as: {plant.other_names.join(", ")}
                </p>
              )}
            </div>
          </div>

          {plant.description && (
            <p className="mt-6 text-crew-soil-700">{plant.description}</p>
          )}

          {plant.verification_status && (
            <p className="mt-4 inline-flex rounded-full bg-crew-green-100 px-3 py-1 text-xs font-semibold text-crew-green-800">
              {STATUS_LABELS[plant.verification_status] ?? plant.verification_status}
            </p>
          )}
        </div>

        <dl className="mt-8 space-y-6">
          {plant.plant_family && (
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-crew-soil-500">
                Family
              </dt>
              <dd className="mt-1 text-crew-soil-800">{plant.plant_family}</dd>
            </div>
          )}

          {plant.native_region && plant.native_region.length > 0 && (
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-crew-soil-500">
                Native region
              </dt>
              <dd className="mt-1 text-crew-soil-800">{plant.native_region.join(", ")}</dd>
            </div>
          )}

          {plant.growth_habit && (
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-crew-soil-500">
                Growth habit
              </dt>
              <dd className="mt-1 text-crew-soil-800">{plant.growth_habit}</dd>
            </div>
          )}

          {plant.edible_parts && plant.edible_parts.length > 0 && (
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-crew-soil-500">
                Edible parts
              </dt>
              <dd className="mt-1 text-crew-soil-800">{plant.edible_parts.join(", ")}</dd>
            </div>
          )}

          {plant.traditional_uses && (
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-crew-soil-500">
                Traditional uses
              </dt>
              <dd className="mt-1 text-crew-soil-800">
                {plant.traditional_uses}
                <span className="mt-1 block text-sm text-crew-soil-500">
                  (Traditional / cultural context — not a medical claim.)
                </span>
              </dd>
            </div>
          )}

          {plant.historical_notes && (
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-crew-soil-500">
                History
              </dt>
              <dd className="mt-1 text-crew-soil-800">{plant.historical_notes}</dd>
            </div>
          )}

          {plant.cultural_notes && (
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-crew-soil-500">
                Culture
              </dt>
              <dd className="mt-1 text-crew-soil-800">{plant.cultural_notes}</dd>
            </div>
          )}

          {plant.warnings && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <dt className="text-sm font-bold uppercase tracking-wide text-amber-800">
                Warnings
              </dt>
              <dd className="mt-1 text-amber-900">{plant.warnings}</dd>
            </div>
          )}

          {plant.toxic_parts && plant.toxic_parts.length > 0 && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
              <dt className="text-sm font-bold uppercase tracking-wide text-red-800">
                Toxic / do not eat
              </dt>
              <dd className="mt-1 text-red-900">{plant.toxic_parts.join(", ")}</dd>
            </div>
          )}
        </dl>

        <div className="mt-10 rounded-2xl bg-crew-green-50 p-4 text-sm text-crew-green-900">
          <strong>Remember:</strong> Never eat a wild plant unless a knowledgeable adult has
          positively identified it as safe.
        </div>

        <p className="mt-10 text-center text-sm text-crew-soil-500">
          Ask. Investigate. Discover.
        </p>
      </main>

      <Footer />
    </div>
  );
}
