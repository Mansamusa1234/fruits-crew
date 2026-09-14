import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sun, g as CloudRain, o as Sprout } from "../_libs/lucide-react.mjs";
import { s as Button } from "./router-D-7YjPqO.mjs";
import { n as mapRegions, r as plants, t as getPlant } from "./plants-CONbauOt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/farm-bc0jfrgB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STAGES = [
	"seed",
	"sprout",
	"leaf",
	"flower",
	"fruit"
];
var STAGE_MS = {
	seed: 8e3,
	sprout: 12e3,
	leaf: 16e3,
	flower: 16e3,
	fruit: 0
};
var PLANT_COLOURS = {
	soursop: "#6aa56a",
	banana: "#e2c14a",
	mango: "#d9782a",
	coconut: "#cbb7a4",
	ackee: "#d35a3a",
	cacao: "#6b3a2a",
	yam: "#8d6b4a",
	teff: "#c4a574",
	dandelion: "#f0c84a",
	rice: "#c5d48a",
	potato: "#c9b48a",
	sunflower: "#e8b423",
	breadfruit: "#7da36a",
	apple: "#c6453a"
};
function emptyFarm() {
	return {
		name: "Our Living Farm",
		regionId: "caribbean",
		coached: false,
		lastSaved: Date.now(),
		basket: [],
		plots: Array.from({ length: 6 }, (_, i) => ({
			id: i,
			plantSlug: null,
			stage: "empty",
			progress: 0,
			water: 35,
			sun: 40,
			plantedAt: null
		}))
	};
}
function tickPlot(plot, dtMs) {
	if (plot.stage === "empty" || plot.stage === "fruit" || !plot.plantSlug) return {
		...plot,
		water: clamp(plot.water - dtMs * .0012),
		sun: clamp(plot.sun - dtMs * 9e-4)
	};
	const water = clamp(plot.water - dtMs * .0035);
	const sun = clamp(plot.sun - dtMs * .0028);
	const factor = water < 22 || sun < 22 ? 0 : water > 92 ? .35 : .55 + water / 100 * .25 + sun / 100 * .25;
	const need = STAGE_MS[plot.stage];
	let progress = plot.progress + dtMs / need * factor;
	let stage = plot.stage;
	if (progress >= 1) {
		const i = STAGES.indexOf(plot.stage);
		if (i >= 0 && i < STAGES.length - 1) {
			stage = STAGES[i + 1];
			progress = 0;
		} else {
			stage = "fruit";
			progress = 1;
		}
	}
	return {
		...plot,
		water,
		sun,
		progress,
		stage
	};
}
function plantSeed(plot, slug, now) {
	return {
		...plot,
		plantSlug: slug,
		stage: "seed",
		progress: 0,
		plantedAt: now,
		water: Math.max(plot.water, 40),
		sun: Math.max(plot.sun, 40)
	};
}
function waterPlot(plot) {
	return {
		...plot,
		water: clamp(plot.water + 38)
	};
}
function sunPlot(plot) {
	return {
		...plot,
		sun: clamp(plot.sun + 38)
	};
}
function catchUp(farm, now = Date.now()) {
	const dt = Math.min(12e4, Math.max(0, now - (farm.lastSaved || now)));
	if (dt < 400) return farm;
	return {
		...farm,
		lastSaved: now,
		plots: farm.plots.map((p) => tickPlot(p, dt))
	};
}
function plantable(regionId) {
	if (!regionId) return plants.slice(0, 12);
	const local = plants.filter((p) => p.mapRegion === regionId);
	return local.length ? local : plants.slice(0, 12);
}
function clamp(n) {
	return Math.max(0, Math.min(100, n));
}
function stageLabel(stage) {
	return {
		empty: "Empty earth",
		seed: "Seed in the dark",
		sprout: "A sprout!",
		leaf: "Leaves drinking light",
		flower: "The farm is flowering",
		fruit: "Ready for the family table"
	}[stage];
}
var TIME_SHIFT = {
	dawn: {
		overlay: "linear-gradient(180deg, #ffb3a0 0%, #ffd6a8 42%, #7ec8c9 100%)",
		multiply: "rgb(255 180 140 / 0.28)",
		ink: "#3a2418",
		label: "Dawn"
	},
	morning: {
		overlay: "linear-gradient(180deg, #9ad7ff 0%, #fff1b8 55%, #b8e986 100%)",
		multiply: "rgb(255 245 200 / 0.18)",
		ink: "#243018",
		label: "Morning"
	},
	noon: {
		overlay: "linear-gradient(180deg, #7ec8ff 0%, #fffbe6 50%, #d4f0a8 100%)",
		multiply: "transparent",
		ink: "#1c2414",
		label: "High sun"
	},
	golden: {
		overlay: "linear-gradient(180deg, #ffb347 0%, #ff6f3c 40%, #7a2f45 100%)",
		multiply: "rgb(255 140 60 / 0.32)",
		ink: "#2a140c",
		label: "Golden hour"
	},
	dusk: {
		overlay: "linear-gradient(180deg, #7b2cbf 0%, #e05780 45%, #2b1b4a 100%)",
		multiply: "rgb(80 30 90 / 0.38)",
		ink: "#f7f0ff",
		label: "Dusk"
	},
	night: {
		overlay: "linear-gradient(180deg, #0b132b 0%, #1c2541 40%, #3a0ca3 100%)",
		multiply: "rgb(8 12 40 / 0.55)",
		ink: "#e8f0ff",
		label: "Night"
	}
};
var REGION_LOOK = {
	caribbean: {
		accent: "#ff4d6d",
		spice: "#00c2cb",
		label: "Caribbean — hibiscus & lagoon"
	},
	"west-africa": {
		accent: "#e07a3d",
		spice: "#2f9e44",
		label: "West Africa — laterite & canopy"
	},
	"horn-of-africa": {
		accent: "#d4a017",
		spice: "#c45c26",
		label: "Horn of Africa — teff gold"
	},
	"south-asia": {
		accent: "#ff6b35",
		spice: "#2a9d8f",
		label: "South Asia — monsoon mango"
	},
	"southeast-asia": {
		accent: "#e9c46a",
		spice: "#0a9396",
		label: "Southeast Asia — banana light"
	},
	pacific: {
		accent: "#48cae4",
		spice: "#ff85a1",
		label: "Pacific — lagoon & frangipani"
	},
	amazon: {
		accent: "#2d6a4f",
		spice: "#bc4749",
		label: "Amazon — cacao shade"
	},
	andes: {
		accent: "#7b2cbf",
		spice: "#f4a261",
		label: "Andes — mountain potato dusk"
	},
	"north-america": {
		accent: "#e8b923",
		spice: "#3d5a80",
		label: "North America — sunflower prairie"
	},
	britain: {
		accent: "#6b8f71",
		spice: "#c9a227",
		label: "Britain — meadow & hedgerow"
	},
	"central-asia": {
		accent: "#c44536",
		spice: "#7cb518",
		label: "Central Asia — wild apple"
	}
};
function dayPartFromHour(hour) {
	if (hour < 6) return "night";
	if (hour < 8) return "dawn";
	if (hour < 11) return "morning";
	if (hour < 15) return "noon";
	if (hour < 18) return "golden";
	if (hour < 21) return "dusk";
	return "night";
}
function sceneWash(regionId, part, weather) {
	const region = REGION_LOOK[regionId] ?? REGION_LOOK.caribbean;
	const time = TIME_SHIFT[part];
	const rainOverlay = weather === "rain" ? "linear-gradient(180deg, #4a6d7a 0%, #7fa3aa 55%, #1d3557 100%)" : time.overlay;
	const sunBoost = weather === "sun" ? "rgb(255 210 80 / 0.28)" : time.multiply;
	return {
		name: `${region.label} · ${time.label}`,
		overlay: rainOverlay,
		multiply: weather === "rain" ? "rgb(40 70 90 / 0.35)" : sunBoost,
		accent: region.accent,
		ink: time.ink
	};
}
var SCENE_CHIPS = [
	{
		id: "auto",
		label: "Now"
	},
	{
		id: "dawn",
		label: "Dawn"
	},
	{
		id: "morning",
		label: "Morning"
	},
	{
		id: "noon",
		label: "Noon"
	},
	{
		id: "golden",
		label: "Golden"
	},
	{
		id: "dusk",
		label: "Dusk"
	},
	{
		id: "night",
		label: "Night"
	}
];
var KEY = "fruits-crew-farm-v1";
function loadFarm() {
	if (typeof window === "undefined") return emptyFarm();
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return emptyFarm();
		const parsed = JSON.parse(raw);
		if (!parsed?.plots?.length) return emptyFarm();
		return catchUp({
			...emptyFarm(),
			...parsed,
			plots: parsed.plots.slice(0, 6)
		});
	} catch {
		return emptyFarm();
	}
}
function saveFarm(farm) {
	window.localStorage.setItem(KEY, JSON.stringify({
		...farm,
		lastSaved: Date.now()
	}));
}
function LivingFarm() {
	const [farm, setFarm] = (0, import_react.useState)(() => loadFarm());
	const [seed, setSeed] = (0, import_react.useState)("mango");
	const [picked, setPicked] = (0, import_react.useState)(0);
	const [weather, setWeather] = (0, import_react.useState)("clear");
	const [scene, setScene] = (0, import_react.useState)("auto");
	const [clock, setClock] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).getHours());
	const [shout, setShout] = (0, import_react.useState)("Welcome to your living farm.");
	const last = (0, import_react.useRef)(typeof performance === "undefined" ? 0 : performance.now());
	(0, import_react.useEffect)(() => {
		last.current = performance.now();
		let frame = 0;
		const loop = (now) => {
			const dt = Math.min(250, now - last.current);
			last.current = now;
			setFarm((prev) => {
				const plots = prev.plots.map((p) => tickPlot(p, dt));
				if (plots.some((p, i) => p.stage !== prev.plots[i].stage)) {
					const changed = plots.find((p, i) => p.stage !== prev.plots[i].stage);
					if (changed?.stage === "sprout") setShout("Little Seed: I am waking!");
					if (changed?.stage === "leaf") setShout("Ray: Drink the light!");
					if (changed?.stage === "flower") setShout("The bees found us!");
					if (changed?.stage === "fruit") setShout("Mama Soursop: Food for the family table.");
				}
				return {
					...prev,
					plots
				};
			});
			frame = requestAnimationFrame(loop);
		};
		frame = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(frame);
	}, []);
	(0, import_react.useEffect)(() => {
		const id = window.setTimeout(() => saveFarm(farm), 800);
		return () => window.clearTimeout(id);
	}, [farm]);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setClock((/* @__PURE__ */ new Date()).getHours()), 6e4);
		return () => window.clearInterval(id);
	}, []);
	const part = scene === "auto" ? dayPartFromHour(clock) : scene;
	const wash = sceneWash(farm.regionId, part, weather);
	const seeds = (0, import_react.useMemo)(() => plantable(farm.regionId), [farm.regionId]);
	const plot = farm.plots[picked];
	(0, import_react.useEffect)(() => {
		if (!seeds.some((s) => s.slug === seed)) setSeed(seeds[0]?.slug ?? "mango");
	}, [seeds, seed]);
	function update(mut) {
		setFarm((f) => mut(f));
	}
	function rain() {
		setWeather("rain");
		setShout("Wally Water Drop: A kind sip — not a flood!");
		update((f) => ({
			...f,
			plots: f.plots.map(waterPlot),
			coached: true
		}));
		window.setTimeout(() => setWeather("clear"), 2200);
	}
	function shine() {
		setWeather("sun");
		setShout("Ray of Sunshine: I share the day. You share the growing.");
		update((f) => ({
			...f,
			plots: f.plots.map(sunPlot),
			coached: true
		}));
		window.setTimeout(() => setWeather("clear"), 2200);
	}
	function plantOn(id) {
		update((f) => ({
			...f,
			coached: true,
			plots: f.plots.map((p) => p.id === id && p.stage === "empty" ? plantSeed(p, seed, Date.now()) : p)
		}));
		const plant = getPlant(seed);
		setPicked(id);
		setShout(`Little Seed: ${plant?.commonName ?? "A seed"} is in Grandma Soil’s house.`);
	}
	function harvest(id) {
		const p = farm.plots[id];
		if (p.stage !== "fruit" || !p.plantSlug) return;
		const slug = p.plantSlug;
		update((f) => ({
			...f,
			basket: [{
				plantSlug: slug,
				at: Date.now()
			}, ...f.basket].slice(0, 24),
			plots: f.plots.map((x) => x.id === id ? {
				...x,
				plantSlug: null,
				stage: "empty",
				progress: 0,
				plantedAt: null
			} : x)
		}));
		setShout("Harvest for the family table — never a shop for children.");
	}
	function compost() {
		setShout("Grandma Soil: Living compost feeds the beds. What you cannot see still holds you.");
		update((f) => ({
			...f,
			coached: true,
			plots: f.plots.map((p) => ({
				...p,
				water: Math.min(100, p.water + 8)
			}))
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-[28px] border border-border bg-[#1c1710] shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/farm/overview.jpg",
						alt: "Real family farm with raised beds, drip irrigation, greenhouse, rainwater tank, compost and paths",
						className: "h-[min(52vh,560px)] w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "farm-wash",
						style: { background: wash.overlay },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "farm-multiply",
						style: { background: wash.multiply },
						"aria-hidden": true
					}),
					weather === "rain" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rain, {}) : null,
					weather === "sun" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "farm-sun",
						"aria-hidden": true
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 px-4 pb-5 sm:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.22em] text-white/80",
								children: "Working farm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-1 block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Farm name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: farm.name,
									onChange: (e) => update((f) => ({
										...f,
										name: e.target.value.slice(0, 40)
									})),
									className: "w-full max-w-xl bg-transparent font-display text-4xl font-semibold text-white outline-none sm:text-5xl"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 max-w-xl text-sm",
								style: { color: wash.ink === "#f7f0ff" || wash.ink === "#e8f0ff" ? "#fff" : void 0 },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: wash.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-white/90",
									children: shout
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex gap-2 overflow-x-auto pb-1",
								children: mapRegions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "farm-chip whitespace-nowrap",
									"aria-pressed": farm.regionId === r.id,
									onClick: () => {
										update((f) => ({
											...f,
											regionId: r.id
										}));
										setShout(`The light changes. We are in ${r.name}.`);
									},
									children: r.name
								}, r.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex gap-2 overflow-x-auto pb-1",
								children: SCENE_CHIPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "farm-chip whitespace-nowrap",
									"aria-pressed": scene === s.id,
									onClick: () => setScene(s.id),
									children: s.label
								}, s.id))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-px bg-black/20 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Infra, {
						src: "/farm/water-tank.jpg",
						title: "Rainwater harvest",
						text: "Tank, downpipe, tap. Open the valve for a kind sip.",
						action: "Open the tap",
						onClick: rain
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Infra, {
						src: "/farm/greenhouse.jpg",
						title: "Polytunnel",
						text: "Seedlings, hose, trapped light. Call the sun into the tunnel.",
						action: "Open the tunnel",
						onClick: shine
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Infra, {
						src: "/farm/compost.jpg",
						title: "Compost bays",
						text: "Leaf mould and living soil. Grandma Soil’s kitchen.",
						action: "Turn the compost",
						onClick: compost
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Infra, {
						src: "/farm/harvest-table.jpg",
						title: "Family table",
						text: "Harvest is food to share. Never a shop for children.",
						action: "See harvest",
						onClick: () => setShout("Bring ripe plots to the family table.")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5 bg-[#f4efe4] p-4 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Raised beds and drip lines"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Six real beds. Wooden sides. Drip irrigation. Tap empty earth to plant. Water from the tank. Light from the tunnel. Feed from compost."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4",
						children: farm.plots.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlotBed, {
							plot: p,
							active: picked === p.id,
							onSelect: () => p.stage === "empty" ? plantOn(p.id) : setPicked(p.id),
							onHarvest: () => harvest(p.id)
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "lg",
							onClick: rain,
							style: { background: wash.accent },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudRain, { className: "size-4" }), " Open the water tap"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "lg",
							variant: "secondary",
							onClick: shine,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }), " Open the polytunnel"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wide text-subtle",
						children: "Seed tray — then tap a bed"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex gap-2 overflow-x-auto pb-2",
						children: seeds.map((pl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSeed(pl.slug),
							className: `min-w-28 rounded-2xl border px-3 py-3 text-left text-sm ${seed === pl.slug ? "border-primary bg-bg-subtle" : "border-border bg-bg-elevated"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: pl.commonName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: "Seed"
							})]
						}, pl.slug))
					})] }),
					plot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"Bed ",
							plot.id + 1,
							": ",
							stageLabel(plot.stage),
							plot.plantSlug ? ` · ${getPlant(plot.plantSlug)?.commonName}` : "",
							". Moisture",
							" ",
							Math.round(plot.water),
							" · Light ",
							Math.round(plot.sun),
							". Drip too little and growth pauses. Flood the line and roots slow down."
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-[20px] border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/farm/harvest-table.jpg",
							alt: "Outdoor family harvest table with real fruit",
							className: "h-40 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-bg-elevated p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "Family table"
							}), farm.basket.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Harvest ripe beds. Food for sharing, not a shop."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 flex flex-wrap gap-2",
								children: farm.basket.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full bg-bg-subtle px-3 py-1 text-sm",
									children: getPlant(h.plantSlug)?.commonName ?? h.plantSlug
								}, `${h.at}-${i}`))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sing/$slug",
								params: { slug: "rain-sun-grow" },
								className: "font-semibold text-primary",
								children: "Sing Rain, Sun, Grow"
							}),
							" · ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/crew/$slug",
								params: { slug: "little-seed" },
								className: "font-semibold text-primary",
								children: "Meet Little Seed"
							})
						]
					})
				]
			})
		]
	});
}
function Infra({ src, title, text, action, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "group relative min-h-36 overflow-hidden text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				className: "h-full min-h-36 w-full object-cover transition duration-500 group-hover:scale-105"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute inset-x-0 bottom-0 p-3 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-lg",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-xs text-white/80",
						children: text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 inline-block text-xs font-semibold uppercase tracking-wide",
						children: action
					})
				]
			})
		]
	});
}
function PlotBed({ plot, active, onSelect, onHarvest }) {
	const plant = plot.plantSlug ? getPlant(plot.plantSlug) : null;
	const colour = plot.plantSlug ? PLANT_COLOURS[plot.plantSlug] ?? "#4f7d56" : "#4f7d56";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: plot.stage === "fruit" ? onHarvest : onSelect,
		className: `relative aspect-square overflow-hidden rounded-[18px] border-2 text-left shadow-soft ${active ? "border-primary" : "border-[#3d2c1e]/50"}`,
		"aria-label": plot.stage === "empty" ? "Empty earth. Tap to plant." : `${plant?.commonName ?? "Plant"}, ${stageLabel(plot.stage)}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/farm/soil-bed.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute inset-x-0 top-[18%] h-1 bg-[#c4b8a4]/70 shadow",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowingBody, {
				stage: plot.stage,
				progress: plot.progress,
				colour
			}),
			plot.stage === "flower" || plot.stage === "fruit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "farm-bee",
				"aria-hidden": true
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-2 top-2 rounded-full bg-bg-elevated/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
				children: plot.stage === "empty" ? "Plant" : plot.stage === "fruit" ? "Harvest" : stageLabel(plot.stage)
			}),
			plot.stage !== "empty" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-2 left-2 right-2 text-xs font-semibold text-primary-fg drop-shadow",
				children: plant?.commonName
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute inset-0 flex items-center justify-center text-primary-fg/90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "size-7 opacity-70" })
			})
		]
	});
}
function GrowingBody({ stage, progress, colour }) {
	if (stage === "empty") return null;
	const rank = {
		seed: .18,
		sprout: .38,
		leaf: .58,
		flower: .78,
		fruit: 1
	}[stage] + progress * .12;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "farm-grow absolute inset-0 h-full w-full",
		"aria-hidden": true,
		children: [
			stage !== "seed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M50 92 L50 ${92 - rank * 55}`,
				stroke: colour,
				strokeWidth: "3.5",
				strokeLinecap: "round",
				fill: "none"
			}) : null,
			stage === "seed" || stage === "sprout" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "50",
				cy: "86",
				rx: "7",
				ry: "5",
				fill: "#6b4b32"
			}) : null,
			[
				"sprout",
				"leaf",
				"flower",
				"fruit"
			].includes(stage) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "38",
				cy: 70 - rank * 20,
				rx: "12",
				ry: "7",
				fill: colour,
				opacity: "0.9"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "62",
				cy: 68 - rank * 22,
				rx: "12",
				ry: "7",
				fill: colour
			})] }) : null,
			stage === "leaf" || stage === "flower" || stage === "fruit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "32",
				cy: 58 - rank * 10,
				rx: "10",
				ry: "6",
				fill: colour
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "68",
				cy: 56 - rank * 12,
				rx: "10",
				ry: "6",
				fill: colour
			})] }) : null,
			stage === "flower" || stage === "fruit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: 40 - rank * 6,
				r: "8",
				fill: "#f0c84a"
			}) : null,
			stage === "fruit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "36",
				r: "11",
				fill: colour,
				stroke: "#2c2416",
				strokeWidth: "1"
			}) : null
		]
	});
}
function Rain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "farm-rain pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: Array.from({ length: 18 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
			left: `${i * 17 % 100}%`,
			animationDelay: `${i * .08}s`
		} }, i))
	});
}
function FarmPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-3 py-6 sm:px-4 sm:py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-1 text-sm text-muted",
			children: "A real working farm: raised beds, drip lines, rainwater tank, polytunnel, compost bays and a family table. Seeds grow if water and light come in the right amount."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingFarm, {})
		})]
	});
}
//#endregion
export { FarmPage as component };
