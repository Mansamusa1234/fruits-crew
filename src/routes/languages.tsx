import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguagePicker } from "@/components/i18n/LanguagePicker";
import { plants } from "@/lib/content/plants";
import { LOCALE_META, useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/languages")({ component: LanguagesPage });

const GROUPS = Array.from(
  plants
    .flatMap((p) => p.languages.map((l) => ({ ...l, plant: p.commonName, slug: p.slug })))
    .reduce((map, row) => {
      const list = map.get(row.language) ?? [];
      list.push(row);
      map.set(row.language, list);
      return map;
    }, new Map<string, { language: string; name: string; note?: string; plant: string; slug: string }[]>()),
);

function LanguagesPage() {
  const { locale, t } = useLanguage();
  const note = LOCALE_META[locale].note;
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl">{t("navLanguages")}</h1>
      <p className="mt-3 text-lg text-muted">{t("pickLanguage")}</p>
      <div className="mt-6">
        <LanguagePicker size="lg" />
      </div>
      {note ? <p className="mt-4 text-sm text-muted">{note}</p> : null}
      <p className="mt-6 text-muted">
        Songs now speak in the language you pick. Plant name lists still show many world names below.
      </p>
      <p className="mt-2">
        <Link to="/sing" className="font-semibold text-primary">
          {t("navSing")}
        </Link>
      </p>
      <ul className="mt-10 space-y-6">
        {GROUPS.map(([lang, rows]) => (
          <li key={lang} className="rounded-[20px] border border-border bg-bg-elevated p-5">
            <h2 className="font-display text-2xl">{lang}</h2>
            <ul className="mt-3 space-y-1 text-muted">
              {rows.map((r) => (
                <li key={`${lang}-${r.slug}`}>
                  <Link to="/plants/$slug" params={{ slug: r.slug }} className="font-medium text-primary">
                    {r.plant}
                  </Link>
                  {" — "}
                  {r.name}
                  {r.note ? ` (${r.note})` : ""}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
