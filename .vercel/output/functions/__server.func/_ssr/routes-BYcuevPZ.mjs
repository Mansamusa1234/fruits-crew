import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as BookOpen, d as Music2, h as CloudSun, m as Languages, o as Sprout, p as Leaf, r as Users, s as Shield } from "../_libs/lucide-react.mjs";
import { s as Button } from "./router-D-7YjPqO.mjs";
import { n as songs } from "./songs-CbMbfwRj.mjs";
import { t as characters } from "./characters-DoaM_dvD.mjs";
import { r as plants } from "./plants-CONbauOt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BYcuevPZ.js
var import_jsx_runtime = require_jsx_runtime();
var CARD_RING = [
	"border-[#e11d74] shadow-[0_10px_0_#e11d74]",
	"border-[#ff8a00] shadow-[0_10px_0_#ff8a00]",
	"border-[#00b4d8] shadow-[0_10px_0_#00b4d8]",
	"border-[#65d126] shadow-[0_10px_0_#65d126]",
	"border-[#c026d3] shadow-[0_10px_0_#c026d3]",
	"border-[#ffe566] shadow-[0_10px_0_#eab308]",
	"border-[#16a34a] shadow-[0_10px_0_#16a34a]"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/scenes/garden-hero.jpg",
					alt: "Friendly original fruit and nature characters in a sunlit worldwide garden",
					className: "h-[min(78vh,720px)] w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#e11d74] via-[#ff8a00]/50 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10 text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold uppercase tracking-[0.28em] text-banana",
							children: "Fruits Crew"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 max-w-2xl font-display text-4xl font-semibold sm:text-6xl",
							children: "The whole living world is one family."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-lg",
							children: "Come meet the world that talks!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-white/90",
							children: "Everything is connected. Each one teach one. Learn together. Grow together. Love one another."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/farm",
										children: "Open your farm"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "secondary",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/start",
										children: "Start here"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "secondary",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/plants",
										children: "Start Exploring"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "secondary",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/crew",
										children: "Meet the Crew"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "secondary",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sing",
										children: "Sing Together"
									})
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl text-lg text-muted",
				children: "Fruits Crew is a joyful worldwide children’s learning and animation universe where fruits, vegetables, seeds, soil, roots, water, weather, plants, animals and the Earth can talk, sing and learn together. Caribbean culture sits inside a global family — alongside African, British, Asian, European, Middle Eastern, Pacific, Indigenous and other living cultures."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Meet the Crew"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/crew",
					className: "text-sm font-semibold text-primary",
					children: "All characters"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: characters.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/crew/$slug",
					params: { slug: c.slug },
					className: `overflow-hidden rounded-[28px] border-4 bg-white ${CARD_RING[i % CARD_RING.length]}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.portrait,
						alt: c.accessibilityDescription,
						className: "aspect-square w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: c.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm italic text-muted",
							children: [
								"“",
								c.catchphrase,
								"”"
							]
						})]
					})]
				}, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Fruits and vegetables around the world"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/map",
						className: "text-sm font-semibold text-primary",
						children: "Open the map"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-muted",
					children: "Botanical origin, cultural history, and modern farms are listed separately. Never invented as one country owning the living world."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: plants.slice(0, 8).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/plants/$slug",
						params: { slug: p.slug },
						className: `rounded-[20px] border-4 bg-white p-4 ${CARD_RING[i % CARD_RING.length]}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
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
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Songs for the whole family"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sing",
						className: "text-sm font-semibold text-primary",
						children: "Sing"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-muted",
					children: "Original nursery rhymes with a child question, an adult answer, and a grandparent line. Easy chorus. Optional karaoke."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: songs.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/sing/$slug",
						params: { slug: s.slug },
						className: `flex min-h-24 items-center justify-between rounded-[20px] border-4 bg-white px-5 py-4 ${CARD_RING[i % CARD_RING.length]}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-xl",
							children: s.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: s.learningObjective
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, {
							className: "size-5 text-primary",
							"aria-hidden": true
						})]
					}) }, s.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Maths, science, weather and money"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnCard, {
						icon: Sprout,
						title: "Science",
						text: "Germination, soil, light and water — with sourced plant records.",
						to: "/watch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnCard, {
						icon: BookOpen,
						title: "Maths",
						text: "Count mangoes, keep a beat, and practise number without rushing.",
						to: "/family"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnCard, {
						icon: CloudSun,
						title: "Weather",
						text: "Rain, sun and grow: plants need gifts in the right amount.",
						to: "/sing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnCard, {
						icon: Leaf,
						title: "Money",
						text: "Pretend markets only. Needs versus wants. No gambling.",
						to: "/family"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Languages, writing and cultures"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: "English sits beside other names and scripts. No alphabet is “the alphabet of the world.” Pronunciations wait for native-speaker review."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/languages",
					className: "mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {
						className: "size-4",
						"aria-hidden": true
					}), "See plant names in more than one language"]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Soil, roots, rain, sunlight"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: "Grandma Soil, Wally Water Drop and Ray of Sunshine teach the hidden helpers: roots that hold hands, rain that visits, and light that is patient."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [
						"grandma-soil",
						"wally-water",
						"ray-sunshine",
						"little-seed"
					].map((slug) => {
						const c = characters.find((x) => x.slug === slug);
						return c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/crew/$slug",
							params: { slug },
							className: "inline-flex min-h-11 items-center rounded-full border border-border bg-bg-elevated px-4",
							children: c.name
						}, slug) : null;
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Family time away from the screen"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/family",
						className: "text-sm font-semibold text-primary",
						children: "Activities"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: "Jar beans, counting walks, rain dances, and a pretend market. Grown-ups and grandparents belong in the circle."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-5",
					variant: "secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/family",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" }), " Start a family challenge"]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] border-4 border-lagoon bg-white p-6 shadow-[0_10px_0_#00b4d8] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
						className: "size-6 text-primary",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl",
						children: "For parents and educators"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "Original songs, stories and adventures that turn screen time into family learning. No child-to-child chat. No ads. No products sold to children here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/parents",
								children: "Parent and safety notes"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/studio",
								children: "CapCut production board"
							})
						})]
					})
				]
			})
		})
	] });
}
function LearnCard({ icon: Icon, title, text, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "rounded-[20px] border-4 border-mango bg-white p-5 shadow-[0_8px_0_#ff8a00]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-5 text-hibiscus",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: text
			})
		]
	});
}
//#endregion
export { Home as component };
