import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as songs } from "./songs-CbMbfwRj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sing-BWjxlN5G.js
var import_jsx_runtime = require_jsx_runtime();
function SingIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Sing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Original Fruits Crew songs. Easy chorus, a child question, an adult answer, and a grandparent line."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-4",
				children: songs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/sing/$slug",
					params: { slug: s.slug },
					className: "block rounded-[24px] border border-border bg-bg-elevated p-5 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: s.learningObjective
					})]
				}) }, s.slug))
			})
		]
	});
}
//#endregion
export { SingIndex as component };
