import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CopyBlock } from "./CopyBlock-C2Xe4o68.mjs";
import { i as pressBoilerplate, o as socialPosts, t as BRAND } from "./marketing-DB_H1QWJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/press-Ciw3vPRv.js
var import_jsx_runtime = require_jsx_runtime();
function PressPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Press and brand"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-lg text-muted",
				children: [
					"Use this copy exactly. Fruits Crew is original. Created by ",
					BRAND.creator,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
				label: "Boilerplate",
				text: pressBoilerplate
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
						label: "Child-facing",
						text: BRAND.childMessage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
						label: "Parent-facing",
						text: BRAND.parentMessage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
						label: "Core lines",
						text: BRAND.core.join("\n")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "Ready posts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-3",
				children: socialPosts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
					label: p.platform,
					text: p.text
				}, p.platform))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "Do not say"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 list-disc space-y-2 pl-5 text-muted",
				children: BRAND.neverSay.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: n }, n))
			})
		]
	});
}
//#endregion
export { PressPage as component };
