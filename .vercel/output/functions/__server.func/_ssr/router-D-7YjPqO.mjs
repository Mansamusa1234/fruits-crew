import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Search, f as Menu, i as TriangleAlert, p as Leaf, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D-7YjPqO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var LOCALES = [
	"en",
	"es",
	"fr",
	"jam"
];
var LOCALE_META = {
	en: {
		label: "English",
		native: "English",
		htmlLang: "en"
	},
	es: {
		label: "Spanish",
		native: "Español",
		htmlLang: "es"
	},
	fr: {
		label: "French",
		native: "Français",
		htmlLang: "fr"
	},
	jam: {
		label: "Jamaican Patois",
		native: "Jamiekan",
		htmlLang: "en-JM",
		note: "Voice is still an English storyteller. Native-speaker review welcome."
	}
};
var UI = {
	en: {
		pickLanguage: "Pick your language",
		play: "Play the story",
		pause: "Pause",
		karaoke: "Story song",
		allSongs: "All songs",
		speakerHint: "Turn speakers up. Tap Play the story, or the triangle on the grey bar.",
		navStart: "Start here",
		navFarm: "Farm",
		navCrew: "Meet the Crew",
		navPlants: "Plants",
		navLanguages: "Languages",
		navWatch: "Watch",
		navSing: "Sing",
		navMap: "Map",
		navFamily: "Family",
		navParents: "Parents"
	},
	es: {
		pickLanguage: "Elige tu idioma",
		play: "Escuchar el cuento",
		pause: "Pausa",
		karaoke: "Canción-cuento",
		allSongs: "Todas las canciones",
		speakerHint: "Sube el volumen. Pulsa Escuchar el cuento, o el triángulo de la barra gris.",
		navStart: "Empieza aquí",
		navFarm: "Granja",
		navCrew: "La tripulación",
		navPlants: "Plantas",
		navLanguages: "Idiomas",
		navWatch: "Ver",
		navSing: "Cantar",
		navMap: "Mapa",
		navFamily: "Familia",
		navParents: "Familias"
	},
	fr: {
		pickLanguage: "Choisis ta langue",
		play: "Écouter l’histoire",
		pause: "Pause",
		karaoke: "Chanson-histoire",
		allSongs: "Toutes les chansons",
		speakerHint: "Monte le son. Appuie sur Écouter l’histoire, ou sur le triangle de la barre grise.",
		navStart: "Commencer",
		navFarm: "Ferme",
		navCrew: "L’équipage",
		navPlants: "Plantes",
		navLanguages: "Langues",
		navWatch: "Regarder",
		navSing: "Chanter",
		navMap: "Carte",
		navFamily: "Famille",
		navParents: "Parents"
	},
	jam: {
		pickLanguage: "Pick yu language",
		play: "Play di story",
		pause: "Hold on",
		karaoke: "Story song",
		allSongs: "All di songs",
		speakerHint: "Turn up di speaker. Tap Play di story, or di triangle pon di grey bar.",
		navStart: "Start yah",
		navFarm: "Farm",
		navCrew: "Meet di Crew",
		navPlants: "Plants",
		navLanguages: "Languages",
		navWatch: "Watch",
		navSing: "Sing",
		navMap: "Map",
		navFamily: "Family",
		navParents: "Parents"
	}
};
var LanguageContext = (0, import_react.createContext)(null);
function LanguageProvider({ children }) {
	const [locale, setLocaleState] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem("fruits-crew-lang");
		if (saved && LOCALES.includes(saved)) setLocaleState(saved);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = LOCALE_META[locale].htmlLang;
	}, [locale]);
	const value = (0, import_react.useMemo)(() => ({
		locale,
		setLocale: (l) => {
			setLocaleState(l);
			window.localStorage.setItem("fruits-crew-lang", l);
		},
		t: (key) => UI[locale][key] ?? UI.en[key] ?? key
	}), [locale]);
	return (0, import_react.createElement)(LanguageContext.Provider, { value }, children);
}
function useLanguage() {
	const ctx = (0, import_react.useContext)(LanguageContext);
	if (!ctx) throw new Error("LanguageProvider missing");
	return ctx;
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform duration-150 focus-visible:outline-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-hibiscus text-white shadow-[0_5px_0_#9d174d] hover:bg-[#ff4d94] hover:-translate-y-0.5",
			secondary: "bg-lagoon text-white shadow-[0_5px_0_#0369a1] hover:bg-[#22d3ee] hover:-translate-y-0.5",
			ghost: "text-hibiscus hover:bg-banana"
		},
		size: {
			md: "min-h-11 px-5 py-2.5 text-sm",
			lg: "min-h-12 px-6 py-3 text-base",
			sm: "min-h-10 px-3 py-2 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function LanguagePicker({ size = "sm" }) {
	const { locale, setLocale, t } = useLanguage();
	if (size === "lg") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm font-semibold uppercase tracking-wide text-subtle",
		children: t("pickLanguage")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 grid gap-3 sm:grid-cols-2",
		children: LOCALES.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setLocale(code),
			className: `min-h-14 rounded-[20px] border px-4 py-3 text-left ${locale === code ? "border-primary bg-bg-subtle" : "border-border bg-bg-elevated"}`,
			"aria-pressed": locale === code,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-xl",
				children: LOCALE_META[code].native
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted",
				children: LOCALE_META[code].label
			})]
		}, code))
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "inline-flex min-h-11 items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: t("pickLanguage")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value: locale,
			onChange: (e) => setLocale(e.target.value),
			className: "max-w-[9.5rem] rounded-full border border-border bg-bg-elevated px-3 py-2 text-sm",
			children: LOCALES.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: code,
				children: LOCALE_META[code].native
			}, code))
		})]
	});
}
var NAV = [
	{
		to: "/start",
		key: "navStart"
	},
	{
		to: "/farm",
		key: "navFarm"
	},
	{
		to: "/crew",
		key: "navCrew"
	},
	{
		to: "/plants",
		key: "navPlants"
	},
	{
		to: "/languages",
		key: "navLanguages"
	},
	{
		to: "/watch",
		key: "navWatch"
	},
	{
		to: "/sing",
		key: "navSing"
	},
	{
		to: "/map",
		key: "navMap"
	},
	{
		to: "/family",
		key: "navFamily"
	},
	{
		to: "/parents",
		key: "navParents"
	}
];
function SiteShell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-transparent text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-bg-elevated focus:px-4 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 bg-white/85 backdrop-blur-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fruit-stripe",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex min-h-11 items-center gap-2 font-display text-lg font-semibold tracking-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
									className: "size-5 text-hibiscus",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-hibiscus via-mango to-lagoon bg-clip-text text-transparent",
									children: "Fruits Crew"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "hidden items-center gap-1 lg:flex",
								"aria-label": "Main",
								children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: cn("rounded-full px-3 py-2 text-sm font-medium text-muted hover:bg-bg-subtle hover:text-fg", pathname.startsWith(item.to) && "bg-banana text-fg"),
									children: t(item.key)
								}, item.to))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagePicker, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/search",
										className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full hover:bg-bg-subtle",
										"aria-label": "Search",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "ghost",
										className: "lg:hidden",
										"aria-expanded": open,
										"aria-controls": "mobile-nav",
										onClick: () => setOpen((v) => !v),
										children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "Menu"
										})]
									})
								]
							})
						]
					}),
					open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						id: "mobile-nav",
						className: "grid gap-1 border-t border-border px-4 py-3 lg:hidden",
						"aria-label": "Mobile",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "rounded-2xl px-3 py-3 text-base hover:bg-bg-subtle",
							onClick: () => setOpen(false),
							children: t(item.key)
						}, item.to))
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "main",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative overflow-hidden px-4 py-10 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fruit-stripe",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#9d174d] via-[#c2410c] to-[#0e7490]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-6xl gap-6 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl",
								children: "Fruits Crew"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/85",
								children: "The whole living world is one family. Everything is connected. Each one teach one."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/start",
										className: "mt-2 block text-white/85 underline",
										children: "Start here (beginner)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/languages",
										className: "mt-2 block text-white/85 underline",
										children: "Languages"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/parents",
										className: "mt-2 block text-white/85 underline",
										children: "Child safety and parent notes"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/schools",
										className: "mt-2 block text-white/85 underline",
										children: "Schools and libraries"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/studio",
										className: "mt-2 block text-white/85 underline",
										children: "Studio and launch kit"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/press",
										className: "mt-2 block text-white/85 underline",
										children: "Press and brand"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-white/75",
								children: "Created by Darren-neil. Original characters, songs and stories. No behavioural advertising. No products sold to children on this site."
							})
						]
					})
				]
			})
		]
	});
}
var styles_default = "/assets/styles-DBnUfMIm.css";
var APP_NAME = "Fruits Crew";
var Route$19 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Fruits Crew is a joyful worldwide children’s learning universe. Original songs, stories and adventures that turn screen time into family learning. Come meet the world that talks!"
			},
			{
				name: "theme-color",
				content: "#2F5D3A"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Nunito+Sans:wght@400;600;700&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$18 = () => import("./routes-BYcuevPZ.mjs");
var Route$18 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./family-Djvj9Lom.mjs");
var Route$17 = createFileRoute("/family")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./farm-bc0jfrgB.mjs");
var Route$16 = createFileRoute("/farm")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./languages-DbctGaXL.mjs");
var Route$15 = createFileRoute("/languages")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./map-ivQdR4EN.mjs");
var Route$14 = createFileRoute("/map")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./parents-DcAJX8Ub.mjs");
var Route$13 = createFileRoute("/parents")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./press-Ciw3vPRv.mjs");
var Route$12 = createFileRoute("/press")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./schools-CVGhCEo4.mjs");
var Route$11 = createFileRoute("/schools")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./search-BwK40j4U.mjs");
var Route$10 = createFileRoute("/search")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./start-DuQib-D3.mjs");
var Route$9 = createFileRoute("/start")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./studio-BQaz4xi1.mjs");
var Route$8 = createFileRoute("/studio")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./crew-D27L937t.mjs");
var Route$7 = createFileRoute("/crew/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("../_slug-C_HyW1Rm.mjs");
var Route$6 = createFileRoute("/crew/$slug")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./plants-D26BZAXa.mjs");
var Route$5 = createFileRoute("/plants/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("../_slug-DiZwhceK.mjs");
var Route$4 = createFileRoute("/plants/$slug")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./sing-BWjxlN5G.mjs");
var Route$3 = createFileRoute("/sing/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("../_slug-30FlBElS.mjs");
var Route$2 = createFileRoute("/sing/$slug")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./watch-DFFJcb78.mjs");
var Route$1 = createFileRoute("/watch/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("../_slug-DNZbPb2y.mjs");
var Route = createFileRoute("/watch/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var FamilyRoute = Route$17.update({
	id: "/family",
	path: "/family",
	getParentRoute: () => Route$19
});
var FarmRoute = Route$16.update({
	id: "/farm",
	path: "/farm",
	getParentRoute: () => Route$19
});
var LanguagesRoute = Route$15.update({
	id: "/languages",
	path: "/languages",
	getParentRoute: () => Route$19
});
var MapRoute = Route$14.update({
	id: "/map",
	path: "/map",
	getParentRoute: () => Route$19
});
var ParentsRoute = Route$13.update({
	id: "/parents",
	path: "/parents",
	getParentRoute: () => Route$19
});
var PressRoute = Route$12.update({
	id: "/press",
	path: "/press",
	getParentRoute: () => Route$19
});
var SchoolsRoute = Route$11.update({
	id: "/schools",
	path: "/schools",
	getParentRoute: () => Route$19
});
var SearchRoute = Route$10.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$19
});
var StartRoute = Route$9.update({
	id: "/start",
	path: "/start",
	getParentRoute: () => Route$19
});
var StudioRoute = Route$8.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => Route$19
});
var CrewIndexRoute = Route$7.update({
	id: "/crew/",
	path: "/crew/",
	getParentRoute: () => Route$19
});
var CrewSlugRoute = Route$6.update({
	id: "/crew/$slug",
	path: "/crew/$slug",
	getParentRoute: () => Route$19
});
var PlantsIndexRoute = Route$5.update({
	id: "/plants/",
	path: "/plants/",
	getParentRoute: () => Route$19
});
var PlantsSlugRoute = Route$4.update({
	id: "/plants/$slug",
	path: "/plants/$slug",
	getParentRoute: () => Route$19
});
var SingIndexRoute = Route$3.update({
	id: "/sing/",
	path: "/sing/",
	getParentRoute: () => Route$19
});
var SingSlugRoute = Route$2.update({
	id: "/sing/$slug",
	path: "/sing/$slug",
	getParentRoute: () => Route$19
});
var WatchIndexRoute = Route$1.update({
	id: "/watch/",
	path: "/watch/",
	getParentRoute: () => Route$19
});
var rootRouteChildren = {
	IndexRoute,
	FamilyRoute,
	FarmRoute,
	LanguagesRoute,
	MapRoute,
	ParentsRoute,
	PressRoute,
	SchoolsRoute,
	SearchRoute,
	StartRoute,
	StudioRoute,
	CrewSlugRoute,
	PlantsSlugRoute,
	SingSlugRoute,
	WatchSlugRoute: Route.update({
		id: "/watch/$slug",
		path: "/watch/$slug",
		getParentRoute: () => Route$19
	}),
	CrewIndexRoute,
	PlantsIndexRoute,
	SingIndexRoute,
	WatchIndexRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Route$6 as a, LOCALE_META as c, Route$4 as i, useLanguage as l, Route as n, LanguagePicker as o, Route$2 as r, Button as s, router_exports as t };
