import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as episodes } from "./episodes-Bz5gs-vk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/watch-DFFJcb78.js
var import_jsx_runtime = require_jsx_runtime();
function WatchIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Watch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Original stories. No copied cartoons."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-4",
				children: episodes.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/watch/$slug",
					params: { slug: e.slug },
					className: "block rounded-[24px] border border-border bg-bg-elevated p-5 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: e.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: e.synopsis
					})]
				}) }, e.slug))
			})
		]
	});
}
//#endregion
export { WatchIndex as component };
