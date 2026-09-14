import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as plantsInRegion, n as mapRegions } from "./plants-CONbauOt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/map-ivQdR4EN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PINS = [
	{
		id: "caribbean",
		cx: 28,
		cy: 48
	},
	{
		id: "west-africa",
		cx: 48,
		cy: 52
	},
	{
		id: "horn-of-africa",
		cx: 58,
		cy: 50
	},
	{
		id: "south-asia",
		cx: 68,
		cy: 44
	},
	{
		id: "southeast-asia",
		cx: 78,
		cy: 50
	},
	{
		id: "pacific",
		cx: 88,
		cy: 58
	},
	{
		id: "amazon",
		cx: 32,
		cy: 62
	},
	{
		id: "andes",
		cx: 30,
		cy: 70
	},
	{
		id: "north-america",
		cx: 22,
		cy: 36
	},
	{
		id: "britain",
		cx: 47,
		cy: 32
	},
	{
		id: "central-asia",
		cx: 66,
		cy: 34
	}
];
function WorldMap() {
	const [id, setId] = (0, import_react.useState)("caribbean");
	const region = mapRegions.find((r) => r.id === id) ?? mapRegions[0];
	const list = (0, import_react.useMemo)(() => plantsInRegion(id), [id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[28px] border border-border bg-bg-elevated p-4 shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 100 80",
				className: "h-auto w-full",
				role: "img",
				"aria-label": "World map of plant origins",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "100",
						height: "80",
						rx: "4",
						fill: "#eae3d4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "22",
						cy: "38",
						rx: "14",
						ry: "12",
						fill: "#c8d4c4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "32",
						cy: "60",
						rx: "10",
						ry: "14",
						fill: "#c8d4c4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "50",
						cy: "38",
						rx: "12",
						ry: "16",
						fill: "#c8d4c4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "68",
						cy: "40",
						rx: "16",
						ry: "14",
						fill: "#c8d4c4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "84",
						cy: "58",
						rx: "8",
						ry: "6",
						fill: "#c8d4c4"
					}),
					PINS.map((pin) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: pin.cx,
						cy: pin.cy,
						r: id === pin.id ? 3.2 : 2.2,
						fill: id === pin.id ? "#2f5d3a" : "#5c4634",
						className: "cursor-pointer",
						onClick: () => setId(pin.id)
					}) }, pin.id))
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: mapRegions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setId(r.id),
					className: cn("min-h-10 rounded-full border px-3 text-sm", id === r.id ? "border-primary bg-primary text-primary-fg" : "border-border bg-bg-subtle"),
					children: r.name
				}, r.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[28px] border border-border bg-bg-elevated p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: region.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: region.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2",
					children: [list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-subtle",
						children: "More plants coming for this region."
					}) : null, list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/plants/$slug",
						params: { slug: p.slug },
						className: "font-medium text-primary hover:underline",
						children: p.commonName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: p.botanicalOrigin
					})] }, p.slug))]
				})
			]
		})]
	});
}
function MapPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "World garden map"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Touch a region to see plants with documented origins. Botanical origin is not the same as where a crop is grown today."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldMap, {})
			})
		]
	});
}
//#endregion
export { MapPage as component };
