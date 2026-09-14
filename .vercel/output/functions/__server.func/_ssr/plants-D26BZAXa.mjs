import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as plants } from "./plants-CONbauOt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plants-D26BZAXa.js
var import_jsx_runtime = require_jsx_runtime();
function PlantsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Plant explorer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Botanical origin, cultural history, and modern growing regions are listed separately. Traditional uses are not medical advice."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 rounded-[20px] border border-warn/30 bg-bg-elevated p-4 text-sm",
				children: "Never eat a wild plant unless a knowledgeable adult has positively identified it as safe."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: plants.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/plants/$slug",
					params: { slug: p.slug },
					className: "rounded-[24px] border border-border bg-bg-elevated p-5 shadow-soft hover:bg-bg-subtle",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-subtle",
							children: p.editorialStatus
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl",
							children: p.commonName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm italic text-muted",
							children: p.scientificName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: p.botanicalOrigin
						})
					]
				}, p.slug))
			})
		]
	});
}
//#endregion
export { PlantsPage as component };
