import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as songs } from "./songs-CbMbfwRj.mjs";
import { t as CopyBlock } from "./CopyBlock-C2Xe4o68.mjs";
import { n as CHANNELS, r as launchWeek, s as youtubePacks } from "./marketing-DB_H1QWJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-BQaz4xi1.js
var import_jsx_runtime = require_jsx_runtime();
var CAPCUT_STEPS = [
	"New CapCut project, 1920×1080, then duplicate as 1080×1920.",
	"Import original storyboard stills and original audio only — never a protected melody.",
	"Captions: child = warm yellow, adult = green, chorus = cream, grandparent = brown.",
	"Keep call-and-response as two colours so families can shout the answer.",
	"Export from the same timeline: 6–8 min story, 2–3 min song, three vertical clips, one bedtime cut with no jump cuts.",
	"Add burned-in title: Fruits Crew — original song.",
	"Adult reviews safety notes, volume, and comments settings (no child-to-child chat) before publishing."
];
function StudioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Studio and launch kit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Full marketing package for original Fruits Crew rhymes, episodes, captions, voices and family call-and-response. Created by Darren-neil."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "Where each piece goes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3",
				children: CHANNELS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-[16px] border border-border bg-bg-elevated p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: c.format
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm",
							children: c.goal
						})
					]
				}, c.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "CapCut workflow"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 list-decimal space-y-2 pl-5",
				children: CAPCUT_STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "Launch week"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-2",
				children: launchWeek.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold",
						children: [d.day, ":"]
					}),
					" ",
					d.item
				] }, d.day))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "YouTube paste packs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-6",
				children: youtubePacks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
							label: "Title",
							text: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
							label: "Description",
							text: p.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
							label: "Tags",
							text: p.tags.join(", ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
							label: "Thumbnail",
							text: p.thumbnail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
							label: "End screen",
							text: p.endScreen
						})
					]
				}, p.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "Song captions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: songs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-[16px] border border-border bg-bg-elevated p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: s.chorus
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm",
							children: [
								"Child: ",
								s.childQuestion,
								" Adult: ",
								s.adultResponse
							]
						})
					]
				}, s.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-sm",
				children: [
					"Also see ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/press",
						children: "press copy"
					}),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/schools",
						children: "school lessons"
					}),
					"."
				]
			})
		]
	});
}
//#endregion
export { StudioPage as component };
