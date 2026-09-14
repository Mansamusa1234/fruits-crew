import { b as require_jsx_runtime, v as Link, z as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-D-7YjPqO.mjs";
import { t as characters } from "./_ssr/characters-DoaM_dvD.mjs";
import { n as getEpisode } from "./_ssr/episodes-Bz5gs-vk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DNZbPb2y.js
var import_jsx_runtime = require_jsx_runtime();
function EpisodePage() {
	const { slug } = Route.useParams();
	const e = getEpisode(slug);
	if (!e) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold uppercase tracking-widest text-primary",
				children: "Pilot episode"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: e.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/scenes/garden-hero.jpg",
				alt: "The Crew in the garden at sunrise",
				className: "mt-6 aspect-video w-full rounded-[28px] object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg",
				children: e.synopsis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "1. The mystery",
				children: e.mystery
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "2. Predict",
				children: e.predictionQuestion
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "3. Nature explains",
				children: e.natureExplanation
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "4. Cooperation",
				children: e.cooperationBeat
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "5. Song",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/sing/$slug",
					params: { slug: e.songSlug },
					className: "font-semibold text-primary",
					children: "Sing along"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "6. Offline activity",
				children: e.offlineActivity
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "7. Parent guide",
				children: e.parentGuide
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "In this story"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-wrap gap-2",
				children: e.characters.map((slug) => {
					const c = characters.find((x) => x.slug === slug);
					return c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/crew/$slug",
						params: { slug },
						className: "inline-flex min-h-11 items-center rounded-full border border-border bg-bg-elevated px-3 text-sm",
						children: c.name
					}) }, slug) : null;
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "References"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 list-disc pl-5 text-sm text-muted",
				children: e.sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					s.publisher,
					": ",
					s.title
				] }, s.title))
			})
		]
	});
}
function Block({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-muted",
			children
		})]
	});
}
//#endregion
export { EpisodePage as component };
