import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as characters } from "./characters-DoaM_dvD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/crew-D27L937t.js
var import_jsx_runtime = require_jsx_runtime();
function CrewPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold uppercase tracking-widest text-primary",
				children: "Original characters"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: "Meet the Crew"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Seven friends from fruit, soil, water and sunlight. They learn from each other — and from you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: characters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/crew/$slug",
					params: { slug: c.slug },
					className: "overflow-hidden rounded-[28px] border border-border bg-bg-elevated shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.portrait,
						alt: c.accessibilityDescription,
						className: "aspect-square w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-primary",
								children: c.learningSpeciality
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm italic text-muted",
								children: [
									"“",
									c.catchphrase,
									"”"
								]
							})
						]
					})]
				}, c.slug))
			})
		]
	});
}
//#endregion
export { CrewPage as component };
