import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as songs } from "./songs-CbMbfwRj.mjs";
import { t as characters } from "./characters-DoaM_dvD.mjs";
import { t as episodes } from "./episodes-Bz5gs-vk.mjs";
import { r as plants } from "./plants-CONbauOt.mjs";
import { t as activities } from "./activities-DQtJ033n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-BwK40j4U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function searchContent(q) {
	const needle = q.trim().toLowerCase();
	if (needle.length < 2) return [];
	const hits = [];
	for (const c of characters) if (`${c.name} ${c.speciesOrElement} ${c.learningSpeciality} ${c.catchphrase}`.toLowerCase().includes(needle)) hits.push({
		kind: "character",
		title: c.name,
		href: `/crew/${c.slug}`,
		blurb: c.learningSpeciality
	});
	for (const p of plants) if (`${p.commonName} ${p.scientificName} ${p.botanicalOrigin} ${p.indigenousAndHistoricalNames.join(" ")}`.toLowerCase().includes(needle)) hits.push({
		kind: "plant",
		title: p.commonName,
		href: `/plants/${p.slug}`,
		blurb: p.scientificName
	});
	for (const s of songs) if (`${s.title} ${s.learningObjective}`.toLowerCase().includes(needle)) hits.push({
		kind: "song",
		title: s.title,
		href: `/sing/${s.slug}`,
		blurb: s.learningObjective
	});
	for (const e of episodes) if (`${e.title} ${e.synopsis}`.toLowerCase().includes(needle)) hits.push({
		kind: "episode",
		title: e.title,
		href: `/watch/${e.slug}`,
		blurb: e.mystery
	});
	for (const a of activities) if (`${a.title} ${a.why}`.toLowerCase().includes(needle)) hits.push({
		kind: "activity",
		title: a.title,
		href: `/family#${a.slug}`,
		blurb: a.why
	});
	return hits.slice(0, 12);
}
function SearchPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const hits = (0, import_react.useMemo)(() => searchContent(q), [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Search"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Child-safe catalogue search: characters, plants, songs, stories."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-6 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: "Find something in Fruits Crew"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					className: "mt-2 min-h-12 w-full rounded-2xl border border-border-strong bg-bg-elevated px-4",
					placeholder: "Try mango, seed, banana",
					autoComplete: "off"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: h.href,
					className: "block rounded-[20px] border border-border bg-bg-elevated p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-subtle",
							children: h.kind
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: h.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: h.blurb
						})
					]
				}) }, h.href + h.title))
			})
		]
	});
}
//#endregion
export { SearchPage as component };
