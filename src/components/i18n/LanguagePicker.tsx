import { LOCALES, LOCALE_META, useLanguage, type Locale } from "@/lib/i18n";

export function LanguagePicker({ size = "sm" }: { size?: "sm" | "lg" }) {
  const { locale, setLocale, t } = useLanguage();
  if (size === "lg") {
    return (
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-subtle">{t("pickLanguage")}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {LOCALES.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLocale(code)}
              className={`min-h-14 rounded-[20px] border px-4 py-3 text-left ${
                locale === code ? "border-primary bg-bg-subtle" : "border-border bg-bg-elevated"
              }`}
              aria-pressed={locale === code}
            >
              <span className="block font-display text-xl">{LOCALE_META[code].native}</span>
              <span className="text-sm text-muted">{LOCALE_META[code].label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
  return (
    <label className="inline-flex min-h-11 items-center">
      <span className="sr-only">{t("pickLanguage")}</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="max-w-[9.5rem] rounded-full border border-border bg-bg-elevated px-3 py-2 text-sm"
      >
        {LOCALES.map((code) => (
          <option key={code} value={code}>
            {LOCALE_META[code].native}
          </option>
        ))}
      </select>
    </label>
  );
}
