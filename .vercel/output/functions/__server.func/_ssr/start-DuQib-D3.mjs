import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Button } from "./router-D-7YjPqO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-DuQib-D3.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		n: "1",
		title: "You are already in the website",
		text: "The picture on the left (or above on a phone) is Fruits Crew. You do not need PowerShell for this part."
	},
	{
		n: "2",
		title: "Open your farm",
		text: "Tap Farm. Choose a seed. Tap empty earth. Call the rain. Call the sun. Watch it really grow."
	},
	{
		n: "3",
		title: "Tap Sing Together",
		text: "Open Sing. Tap a song. You will see the chorus and karaoke lines. These are original Fruits Crew songs."
	},
	{
		n: "4",
		title: "Open Studio (for grown-ups)",
		text: "Scroll to the very bottom of any page. Tap Studio and launch kit. That page is your CapCut and YouTube helper."
	},
	{
		n: "5",
		title: "Copy the YouTube words",
		text: "On Studio, find Wake Up, Little Seed. Tap Copy next to Title, then Copy next to Description. Paste those into YouTube when your film is ready."
	},
	{
		n: "6",
		title: "Make the film in CapCut",
		text: "On a phone or computer, open the CapCut app. Follow the numbered CapCut list on the Studio page. Use only original Fruits Crew pictures and music — never another brand’s song."
	},
	{
		n: "7",
		title: "Stay in this chat",
		text: "If the top of the screen says github.com, you have left the kids’ site. Close that tab. Come back to this Grok chat and tap the garden picture."
	}
];
function StartPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
				children: "Beginner guide"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: "Start here"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-muted",
				children: "One step at a time. Do step 1, then stop. Then do step 2."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 space-y-4",
				children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-[20px] border border-border bg-bg-elevated p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold uppercase tracking-wide text-subtle",
							children: ["Step ", s.n]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: s.text
						})
					]
				}, s.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/farm",
							children: "Open your farm"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/crew",
							children: "Meet the Crew"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/studio",
							children: "Open Studio"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { StartPage as component };
