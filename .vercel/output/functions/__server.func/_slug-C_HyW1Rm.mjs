import { b as require_jsx_runtime, v as Link, z as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Route$6 } from "./_ssr/router-D-7YjPqO.mjs";
import { n as getCharacter, t as characters } from "./_ssr/characters-DoaM_dvD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-C_HyW1Rm.js
var import_jsx_runtime = require_jsx_runtime();
function CharacterPage() {
	const { slug } = Route$6.useParams();
	const c = getCharacter(slug);
	if (!c) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/crew",
				className: "text-sm font-semibold text-primary",
				children: "All characters"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 overflow-hidden rounded-[28px] border border-border bg-bg-elevated shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: c.portrait,
					alt: c.accessibilityDescription,
					className: "aspect-square w-full object-cover sm:aspect-[5/4]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-primary",
							children: c.learningSpeciality
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-4 border-l-4 border-primary pl-4 font-display text-xl italic",
							children: c.catchphrase
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-8 font-display text-2xl",
							children: "Story"
						}),
						c.story.split("\n\n").map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: p
						}, p.slice(0, 40)))
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						label: "Species or element",
						value: c.speciesOrElement
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						label: "Region",
						value: c.region
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						label: "Botanical origin",
						value: c.botanicalOrigin
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						label: "Personality",
						value: c.personality
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						label: "Voice",
						value: c.voiceDirection
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						label: "Textures",
						value: c.textures
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "Friends"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2 text-muted",
				children: Object.entries(c.relationships).map(([key, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/crew/$slug",
						params: { slug: key },
						className: "font-medium text-primary",
						children: characters.find((x) => x.slug === key)?.name ?? key
					}),
					" — ",
					val
				] }, key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "Animation states"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: c.animationStates.join(" · ")
			})
		]
	});
}
function Item({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs font-semibold uppercase tracking-wide text-subtle",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1",
		children: value
	})] });
}
//#endregion
export { CharacterPage as component };
