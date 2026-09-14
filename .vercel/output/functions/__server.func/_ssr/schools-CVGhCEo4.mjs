import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Button } from "./router-D-7YjPqO.mjs";
import { a as schoolLessons } from "./marketing-DB_H1QWJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schools-CVGhCEo4.js
var import_jsx_runtime = require_jsx_runtime();
function SchoolsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Schools and libraries"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-muted",
				children: "Short circle-time lessons. Original songs. No tests sold to children. Adults stay in the room."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-4",
				children: schoolLessons.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-[20px] border border-border bg-bg-elevated p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: l.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								l.minutes,
								" · ",
								l.ages
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-3 list-decimal space-y-1 pl-5",
							children: l.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
						})
					]
				}, l.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/parents",
					children: "Safety notes for educators"
				})
			})
		]
	});
}
//#endregion
export { SchoolsPage as component };
