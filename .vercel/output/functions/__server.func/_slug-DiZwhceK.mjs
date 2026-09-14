import { b as require_jsx_runtime, v as Link, z as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Route$4 } from "./_ssr/router-D-7YjPqO.mjs";
import { t as getPlant } from "./_ssr/plants-CONbauOt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DiZwhceK.js
var import_jsx_runtime = require_jsx_runtime();
function PlantPage() {
	const { slug } = Route$4.useParams();
	const p = getPlant(slug);
	if (!p) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/plants",
				className: "text-sm font-semibold text-primary",
				children: "All plants"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-4xl",
				children: p.commonName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "italic text-muted",
				children: p.scientificName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs uppercase tracking-wide text-subtle",
				children: ["Evidence labels on each claim · ", p.editorialStatus.replaceAll("_", " ")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Botanical origin",
				children: p.botanicalOrigin
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Present growing regions",
				children: p.presentGrowingRegions.join(", ")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Climate",
				children: p.climate
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Soil",
				children: p.soilRequirements
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Seed and growing cycle",
				children: p.seedAndGrowingCycle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Seasons",
				children: p.seasons
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Growers",
				children: p.growersAndCommunities
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Harvest",
				children: p.harvestingMethod
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Farm to family",
				children: p.farmToFamily
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Transport and food miles",
				children: p.transportAndFoodMiles
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Historical movement",
				children: p.historicalMovement
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Cultural history",
				children: p.culturalHistory
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Traditional recipes",
				children: p.traditionalRecipes.join(" · ")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Nutrition",
				children: p.nutrition
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Safety",
				children: p.safetyAndAllergies
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Names",
				children: [p.indigenousAndHistoricalNames.join(" · "), p.languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-1 block text-sm text-muted",
					children: [
						l.language,
						": ",
						l.name,
						l.note ? ` (${l.note})` : ""
					]
				}, l.language))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "Claims and sources"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-4",
				children: p.claims.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-[20px] border border-border bg-bg-elevated p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.text }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs uppercase tracking-wide text-primary",
							children: [
								c.evidence.replaceAll("_", " "),
								" · ",
								c.category
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 text-sm text-muted",
							children: c.sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: s.url,
								className: "underline",
								target: "_blank",
								rel: "noreferrer",
								children: [
									s.publisher,
									": ",
									s.title
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								s.publisher,
								": ",
								s.title
							] }) }, s.title))
						})
					]
				}, c.id))
			})
		]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xs font-semibold uppercase tracking-wide text-subtle",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1",
			children
		})]
	});
}
//#endregion
export { PlantPage as component };
