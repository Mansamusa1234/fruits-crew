import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Button } from "./router-D-7YjPqO.mjs";
import { t as activities } from "./activities-DQtJ033n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/family-Djvj9Lom.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MangoCount() {
	const [target, setTarget] = (0, import_react.useState)(4);
	const [picked, setPicked] = (0, import_react.useState)([]);
	const mangoes = (0, import_react.useMemo)(() => Array.from({ length: 10 }, (_, i) => i), []);
	const correct = picked.length === target;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-[28px] border border-border bg-bg-elevated p-5 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Count the mangoes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-muted",
				children: [
					"Tap exactly ",
					target,
					". Pretend fruit only."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-5 gap-2",
				children: mangoes.map((n) => {
					const on = picked.includes(n);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": on,
						"aria-label": `Mango ${n + 1}`,
						onClick: () => setPicked((prev) => prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]),
						className: "aspect-square min-h-11 rounded-[20px] border border-border bg-bg-subtle text-sm font-semibold hover:bg-bg",
						style: {
							boxShadow: on ? "inset 0 0 0 3px #2f5d3a" : void 0,
							background: on ? "#f0b46a" : void 0
						},
						children: "Mango"
					}, n);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-medium tabular-nums",
				"aria-live": "polite",
				children: [
					"You chose ",
					picked.length,
					". ",
					correct ? "Yes — that is the number." : "Keep counting."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					3,
					4,
					5,
					8
				].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: n === target ? "primary" : "secondary",
					size: "sm",
					onClick: () => {
						setTarget(n);
						setPicked([]);
					},
					children: ["Find ", n]
				}, n))
			})
		]
	});
}
function FamilyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Family challenges"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Short activities for children, parents and grandparents. Pretend markets never use real money."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MangoCount, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-5",
				children: activities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					id: a.slug,
					className: "scroll-mt-24 rounded-[24px] border border-border bg-bg-elevated p-5 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								a.minutes,
								" minutes · ",
								a.ageBands.join(", ")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: a.why
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs font-semibold uppercase tracking-wide text-subtle",
							children: "You need"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: a.whatYouNeed.join(" · ") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-3 list-decimal space-y-1 pl-5",
							children: a.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-warn",
							children: a.safety
						})
					]
				}, a.slug))
			})
		]
	});
}
//#endregion
export { FamilyPage as component };
