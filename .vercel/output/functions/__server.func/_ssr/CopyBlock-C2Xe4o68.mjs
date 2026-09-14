import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Button } from "./router-D-7YjPqO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CopyBlock-C2Xe4o68.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CopyBlock({ label, text }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[20px] border border-border bg-bg-elevated p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-wide text-subtle",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "secondary",
				size: "sm",
				onClick: async () => {
					await navigator.clipboard.writeText(text);
					setCopied(true);
					window.setTimeout(() => setCopied(false), 1600);
				},
				children: copied ? "Copied" : "Copy"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "mt-3 max-h-56 overflow-auto whitespace-pre-wrap font-sans text-sm",
			children: text
		})]
	});
}
//#endregion
export { CopyBlock as t };
