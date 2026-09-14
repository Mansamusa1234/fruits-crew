import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as LOCALE_META, l as useLanguage, o as LanguagePicker } from "./router-D-7YjPqO.mjs";
import { r as plants } from "./plants-CONbauOt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/languages-DbctGaXL.js
var import_jsx_runtime = require_jsx_runtime();
var GROUPS = Array.from(plants.flatMap((p) => p.languages.map((l) => ({
	...l,
	plant: p.commonName,
	slug: p.slug
}))).reduce((map, row) => {
	const list = map.get(row.language) ?? [];
	list.push(row);
	map.set(row.language, list);
	return map;
}, /* @__PURE__ */ new Map()));
function LanguagesPage() {
	const { locale, t } = useLanguage();
	const note = LOCALE_META[locale].note;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: t("navLanguages")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-muted",
				children: t("pickLanguage")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagePicker, { size: "lg" })
			}),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: note
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: "Songs now speak in the language you pick. Plant name lists still show many world names below."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/sing",
					className: "font-semibold text-primary",
					children: t("navSing")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 space-y-6",
				children: GROUPS.map(([lang, rows]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-[20px] border border-border bg-bg-elevated p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: lang
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1 text-muted",
						children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/plants/$slug",
								params: { slug: r.slug },
								className: "font-medium text-primary",
								children: r.plant
							}),
							" — ",
							r.name,
							r.note ? ` (${r.note})` : ""
						] }, `${lang}-${r.slug}`))
					})]
				}, lang))
			})
		]
	});
}
//#endregion
export { LanguagesPage as component };
