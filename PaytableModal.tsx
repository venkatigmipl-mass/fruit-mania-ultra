const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { X, HelpCircle, ShieldCheck, Sparkles, Award } from "/node_modules/.vite/deps/lucide-react.js?v=7c623386";
import { SYMBOLS, PAYLINES } from "/src/utils/gameLogic.ts";
import { sound } from "/src/services/audio.ts";
import { FruitSymbol3D } from "/src/components/FruitSymbol3D.tsx";
var _jsxFileName = "/app/applet/src/components/PaytableModal.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const PaytableModal = ({ isOpen, onClose }) => {
	const [activeTab, setActiveTab] = useState("symbols");
	if (!isOpen) return null;
	return /* @__PURE__ */ _jsxDEV("div", {
		onClick: onClose,
		className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 cursor-pointer select-none animate-fade-in",
		children: /* @__PURE__ */ _jsxDEV("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative max-w-lg w-full max-h-[90vh] bg-gradient-to-b from-[#23083d] via-[#160527] to-[#0e021a] rounded-3xl border-2 border-amber-400/80 shadow-2xl flex flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between px-5 py-3.5 border-b border-purple-800/40 bg-purple-950/60 shrink-0",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-400",
							children: /* @__PURE__ */ _jsxDEV(HelpCircle, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 29,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300 uppercase",
							children: "FRUIT MANIA ULTRA RULES"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-[10px] text-purple-300 font-semibold",
							children: "9 Paylines • Symbols • Multipliers • Bonus Gems"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							sound.playButtonClick();
							onClose();
						},
						className: "p-1 rounded-full text-purple-300 hover:text-white bg-purple-900/50 hover:bg-purple-800 transition-all cursor-pointer",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex border-b border-purple-800/40 bg-purple-950/30 shrink-0 text-center",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								sound.playButtonClick();
								setActiveTab("symbols");
							},
							className: `flex-1 py-2.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer border-b-2 ${activeTab === "symbols" ? "border-pink-500 text-pink-400 bg-pink-500/10" : "border-transparent text-purple-300 hover:text-white"}`,
							children: "Symbols"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								sound.playButtonClick();
								setActiveTab("paylines");
							},
							className: `flex-1 py-2.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer border-b-2 ${activeTab === "paylines" ? "border-pink-500 text-pink-400 bg-pink-500/10" : "border-transparent text-purple-300 hover:text-white"}`,
							children: "9 Paylines"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								sound.playButtonClick();
								setActiveTab("bonus");
							},
							className: `flex-1 py-2.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer border-b-2 ${activeTab === "bonus" ? "border-pink-500 text-pink-400 bg-pink-500/10" : "border-transparent text-purple-300 hover:text-white"}`,
							children: "Bonus & Multipliers"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								sound.playButtonClick();
								setActiveTab("rules");
							},
							className: `flex-1 py-2.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer border-b-2 ${activeTab === "rules" ? "border-pink-500 text-pink-400 bg-pink-500/10" : "border-transparent text-purple-300 hover:text-white"}`,
							children: "Safety"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "overflow-y-auto p-4 space-y-4",
					children: [
						activeTab === "symbols" && /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "p-3 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-purple-900/40 border border-yellow-400/50 flex items-start gap-3",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "shrink-0 p-1 bg-yellow-400/20 rounded-xl border border-yellow-400/40",
											children: /* @__PURE__ */ _jsxDEV(FruitSymbol3D, {
												id: "wild_star",
												size: 38
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 118,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 117,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													className: "text-xs font-black text-yellow-300 uppercase",
													children: "Wild Star"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 122,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("span", {
													className: "text-[9px] bg-yellow-400/25 text-yellow-200 px-1 rounded font-bold",
													children: "WILD"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 123,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 121,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("p", {
												className: "text-[11px] text-purple-200/90 mt-0.5 leading-snug",
												children: "Substitutes for any regular fruit symbol on paylines. Does NOT substitute for Scatter Gems."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 125,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-[10px] font-bold text-yellow-400 mt-1",
												children: "3x: 30× | 4x: 150× | 5x: 750× line bet"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 128,
												columnNumber: 21
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 120,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 116,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-900/40 border border-cyan-400/50 flex items-start gap-3",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "shrink-0 p-1 bg-cyan-400/20 rounded-xl border border-cyan-400/40",
											children: /* @__PURE__ */ _jsxDEV(FruitSymbol3D, {
												id: "scatter_gem",
												size: 38
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 137,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 136,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													className: "text-xs font-black text-cyan-300 uppercase",
													children: "Scatter Gem"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 141,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("span", {
													className: "text-[9px] bg-cyan-400/25 text-cyan-200 px-1 rounded font-bold",
													children: "SCATTER"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 142,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 140,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("p", {
												className: "text-[11px] text-purple-200/90 mt-0.5 leading-snug",
												children: [
													"3 or more anywhere on the grid activates the ",
													/* @__PURE__ */ _jsxDEV("strong", { children: "Bonus Round (3 Free Spins)" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 145,
														columnNumber: 68
													}, this),
													"!"
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 144,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-[10px] font-bold text-cyan-300 mt-1",
												children: "Pays up to 150× Total Bet + Bonus Game!"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 147,
												columnNumber: 21
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 139,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 135,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "rounded-2xl bg-purple-950/50 border border-purple-800/40 p-2 divide-y divide-purple-800/30",
									children: Object.values(SYMBOLS).filter((s) => !s.isWild && !s.isScatter).map((symbol) => /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between py-2 px-2 hover:bg-purple-900/20 rounded-xl transition-colors",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-2.5",
											children: [/* @__PURE__ */ _jsxDEV(FruitSymbol3D, {
												id: symbol.id,
												size: 36
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 164,
												columnNumber: 25
											}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "text-xs font-black text-white",
												children: symbol.name
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 166,
												columnNumber: 27
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-[10px] text-purple-300/70",
												children: "3+ consecutive from left"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 167,
												columnNumber: 27
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 165,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 163,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-2 sm:gap-3 text-right",
											children: [
												/* @__PURE__ */ _jsxDEV("div", {
													className: "text-[11px] font-bold text-purple-300",
													children: [
														/* @__PURE__ */ _jsxDEV("span", {
															className: "text-[9px] text-purple-400 font-semibold block",
															children: "3x Small"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 173,
															columnNumber: 27
														}, this),
														symbol.payout3,
														"×"
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 172,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													className: "text-[11px] font-bold text-amber-300",
													children: [
														/* @__PURE__ */ _jsxDEV("span", {
															className: "text-[9px] text-purple-400 font-semibold block",
															children: "4x Medium"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 177,
															columnNumber: 27
														}, this),
														symbol.payout4,
														"×"
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 176,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ _jsxDEV("div", {
													className: "text-[11px] font-black text-pink-400",
													children: [
														/* @__PURE__ */ _jsxDEV("span", {
															className: "text-[9px] text-purple-400 font-semibold block",
															children: "5x Large"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 181,
															columnNumber: 27
														}, this),
														symbol.payout5,
														"×"
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 180,
													columnNumber: 25
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 171,
											columnNumber: 23
										}, this)]
									}, symbol.id, true, {
										fileName: _jsxFileName,
										lineNumber: 159,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 155,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-[10px] text-center text-purple-300/70 italic",
									children: "*Multipliers apply to Line Bet (Total Bet ÷ 9 lines)."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 189,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 13
						}, this),
						activeTab === "paylines" && /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "p-3 bg-purple-950/60 rounded-2xl border border-purple-800/40 text-xs text-purple-200",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "font-black text-amber-300",
									children: "9 Fixed Paylines: "
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 198,
									columnNumber: 17
								}, this), "Evaluated left to right starting from Column 1. Matching 3, 4, or 5 consecutive symbols along any line triggers a reward."]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 197,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-3 gap-2",
								children: PAYLINES.map((line) => /* @__PURE__ */ _jsxDEV("div", {
									className: "p-2.5 rounded-xl bg-purple-950/70 border border-purple-800/50 flex flex-col items-center",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center justify-between w-full mb-1.5",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-[11px] font-black text-white",
												children: [
													"Line #",
													line.id,
													": ",
													line.name
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 209,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "w-3 h-3 rounded-full shadow-xs",
												style: { backgroundColor: line.color }
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 210,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 208,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "grid grid-cols-5 gap-0.5 bg-black/70 p-1.5 rounded-lg w-full mb-1",
											children: [
												0,
												1,
												2
											].map((r) => [
												0,
												1,
												2,
												3,
												4
											].map((c) => {
												const isActive = line.coords[c] === r;
												return /* @__PURE__ */ _jsxDEV("div", { className: `h-2.5 rounded-[3px] transition-all ${isActive ? "bg-gradient-to-t from-pink-500 to-amber-300 shadow-sm" : "bg-purple-950/40"}` }, `${r}-${c}`, false, {
													fileName: _jsxFileName,
													lineNumber: 222,
													columnNumber: 29
												}, this);
											}))
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 217,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-[9px] text-purple-300/80 font-medium",
											children: line.description
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 235,
											columnNumber: 21
										}, this)
									]
								}, line.id, true, {
									fileName: _jsxFileName,
									lineNumber: 204,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 202,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 13
						}, this),
						activeTab === "bonus" && /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-pink-500/15 to-purple-900/40 border border-amber-400/50",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2 mb-1.5",
										children: [/* @__PURE__ */ _jsxDEV(Sparkles, { className: "w-5 h-5 text-amber-400" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 249,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("h3", {
											className: "font-black text-sm text-amber-300 uppercase",
											children: "Dynamic Multiplier System"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 250,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 248,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-[11px] text-purple-200/90 leading-relaxed mb-2",
										children: [
											"Winning spins can trigger an instant Ultra Multiplier of ",
											/* @__PURE__ */ _jsxDEV("strong", { children: "2x, 3x, 5x, or 10x" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 255,
												columnNumber: 76
											}, this),
											"!"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 254,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "bg-black/40 p-2.5 rounded-xl border border-purple-700/50 text-[11px] text-amber-200",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "font-bold text-white block mb-0.5",
											children: "Example Calculation:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 258,
											columnNumber: 19
										}, this), "Base reward: 100 points • Multiplier: 3x • Final reward: 300 points."]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 257,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 247,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "p-3.5 rounded-2xl bg-gradient-to-r from-cyan-500/15 via-purple-900/40 to-pink-500/15 border border-cyan-400/50",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2 mb-1.5",
									children: [/* @__PURE__ */ _jsxDEV(Award, { className: "w-5 h-5 text-cyan-400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 266,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("h3", {
										className: "font-black text-sm text-cyan-300 uppercase",
										children: "Scatter Gem Bonus Round"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 267,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 265,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("ul", {
									className: "list-disc list-inside space-y-1.5 text-[11px] text-purple-200/90 leading-relaxed",
									children: [
										/* @__PURE__ */ _jsxDEV("li", { children: [
											"Triggered by ",
											/* @__PURE__ */ _jsxDEV("strong", { children: "3 or more Scatter Gems" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 272,
												columnNumber: 36
											}, this),
											" anywhere on the grid."
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 272,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("li", { children: "Pauses normal play and enters a dedicated neon Bonus Screen." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 273,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("li", { children: [
											"Awards ",
											/* @__PURE__ */ _jsxDEV("strong", { children: "3 Free Bonus Spins" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 274,
												columnNumber: 30
											}, this),
											" with zero points deducted."
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 274,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("li", { children: "Bonus round multiplier starts at 2x and can climb to 3x, 5x, and 10x!" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 275,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("li", { children: "All virtual points accumulated during the 3 spins are credited to balance upon return." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 276,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 271,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 264,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 245,
							columnNumber: 13
						}, this),
						activeTab === "rules" && /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-3 text-xs text-purple-200",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "p-3.5 rounded-2xl bg-pink-500/10 border border-pink-500/40 flex items-start gap-3",
								children: [/* @__PURE__ */ _jsxDEV(ShieldCheck, { className: "w-6 h-6 text-pink-400 shrink-0 mt-0.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 285,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
									className: "font-black text-sm text-pink-300 uppercase tracking-wide",
									children: "Free Game • Virtual Points Only"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 287,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "text-[11px] text-purple-200/90 mt-1 leading-relaxed",
									children: [
										"This is strictly a ",
										/* @__PURE__ */ _jsxDEV("strong", { children: "FREE ENTERTAINMENT ARCADE GAME" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 291,
											columnNumber: 40
										}, this),
										" using fictional points. No real money, no deposits, no betting, no withdrawals, no cryptocurrency, and no cash prizes. Points have zero monetary value and cannot be transferred, exchanged, or cashed out."
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 290,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 286,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 284,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "p-3.5 bg-purple-950/50 rounded-2xl border border-purple-800/40 space-y-2 text-[11px]",
								children: [/* @__PURE__ */ _jsxDEV("h4", {
									className: "font-bold text-amber-300 text-xs uppercase",
									children: "Key Rules"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 299,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("ul", {
									className: "list-disc list-inside space-y-1 text-purple-200/90",
									children: [
										/* @__PURE__ */ _jsxDEV("li", { children: "Starting balance: 10,000 Free Virtual Points." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 301,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("li", { children: "Selectable spin amounts: 10, 50, 100, 250, or 500 points." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 302,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("li", { children: "Daily bonus: +2,500 free points claimable once every 24 hours." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 303,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("li", { children: "Free refill booster: +1,000 free points anytime balance is low." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 304,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("li", { children: "Deterministic and transparent point calculations." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 305,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 300,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 298,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 283,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-3 border-t border-purple-800/40 bg-purple-950/60 text-center shrink-0",
					children: /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							sound.playButtonClick();
							onClose();
						},
						className: "w-full py-2.5 rounded-xl bg-purple-800 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer",
						children: "Back to Game"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 314,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 313,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QkFBZixDQUNFLHdCQUFDLE9BQUQ7UUFBSyxXQUFVO2tCQUFmLENBQ0Usd0JBQUMsYUFBRCxFQUFhLFdBQVUsd0NBQXlDOzs7O2tCQUNoRSx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsTUFBRDtTQUFJLFdBQVU7bUJBQTJEO1FBRXJFOzs7O2tCQUNKLHdCQUFDLEtBQUQ7U0FBRyxXQUFVO21CQUFiO1VBQW1FO1VBQzlDLHdCQUFDLFVBQUQsWUFBUSxpQ0FBc0M7Ozs7O1VBQUM7U0FHakU7Ozs7O2dCQUNBOzs7O2dCQUNGOzs7OztpQkFFTCx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFBZixDQUNFLHdCQUFDLE1BQUQ7U0FBSSxXQUFVO21CQUE2QztRQUFhOzs7O2tCQUN4RSx3QkFBQyxNQUFEO1NBQUksV0FBVTttQkFBZDtVQUNFLHdCQUFDLE1BQUQsWUFBSSxnREFBaUQ7Ozs7O1VBQ3JELHdCQUFDLE1BQUQsWUFBSSw0REFBNkQ7Ozs7O1VBQ2pFLHdCQUFDLE1BQUQsWUFBSSxpRUFBa0U7Ozs7O1VBQ3RFLHdCQUFDLE1BQUQsWUFBSSxrRUFBbUU7Ozs7O1VBQ3ZFLHdCQUFDLE1BQUQsWUFBSSxvREFBcUQ7Ozs7O1NBQ3ZEOzs7OztnQkFDRDs7Ozs7ZUFDRjs7Ozs7O0tBRUo7Ozs7OztJQUdMLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQ2Isd0JBQUMsVUFBRDtNQUNFLGVBQWU7T0FDYixNQUFNLGdCQUFnQjtPQUN0QixRQUFRO01BQ1Y7TUFDQSxXQUFVO2dCQUNYO0tBRU87Ozs7O0lBQ0w7Ozs7O0dBQ0Y7Ozs7OztDQUNGOzs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIlBheXRhYmxlTW9kYWwudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFgsIEhlbHBDaXJjbGUsIFNoaWVsZENoZWNrLCBTcGFya2xlcywgQXdhcmQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgU1lNQk9MUywgUEFZTElORVMgfSBmcm9tICcuLi91dGlscy9nYW1lTG9naWMnO1xuaW1wb3J0IHsgc291bmQgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdWRpbyc7XG5pbXBvcnQgeyBGcnVpdFN5bWJvbDNEIH0gZnJvbSAnLi9GcnVpdFN5bWJvbDNEJztcblxuaW50ZXJmYWNlIFBheXRhYmxlTW9kYWxQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFBheXRhYmxlTW9kYWw6IFJlYWN0LkZDPFBheXRhYmxlTW9kYWxQcm9wcz4gPSAoeyBpc09wZW4sIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGU8J3N5bWJvbHMnIHwgJ3BheWxpbmVzJyB8ICdib251cycgfCAncnVsZXMnPignc3ltYm9scycpO1xuXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgYmctYmxhY2svODAgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTMgc206cC00IGN1cnNvci1wb2ludGVyIHNlbGVjdC1ub25lIGFuaW1hdGUtZmFkZS1pblwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctbGcgdy1mdWxsIG1heC1oLVs5MHZoXSBiZy1ncmFkaWVudC10by1iIGZyb20tWyMyMzA4M2RdIHZpYS1bIzE2MDUyN10gdG8tWyMwZTAyMWFdIHJvdW5kZWQtM3hsIGJvcmRlci0yIGJvcmRlci1hbWJlci00MDAvODAgc2hhZG93LTJ4bCBmbGV4IGZsZXgtY29sIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICA+XG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTUgcHktMy41IGJvcmRlci1iIGJvcmRlci1wdXJwbGUtODAwLzQwIGJnLXB1cnBsZS05NTAvNjAgc2hyaW5rLTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1sZyBiZy1waW5rLTUwMC8yMCBib3JkZXIgYm9yZGVyLXBpbmstNDAwLzQwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtcGluay00MDBcIj5cbiAgICAgICAgICAgICAgPEhlbHBDaXJjbGUgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyBmb250LWJsYWNrIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1waW5rLTQwMCB0by1hbWJlci0zMDAgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAgRlJVSVQgTUFOSUEgVUxUUkEgUlVMRVNcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1wdXJwbGUtMzAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICA5IFBheWxpbmVzIOKAoiBTeW1ib2xzIOKAoiBNdWx0aXBsaWVycyDigKIgQm9udXMgR2Vtc1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgcm91bmRlZC1mdWxsIHRleHQtcHVycGxlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlIGJnLXB1cnBsZS05MDAvNTAgaG92ZXI6YmctcHVycGxlLTgwMCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBOYXZpZ2F0aW9uIFRhYnMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYiBib3JkZXItcHVycGxlLTgwMC80MCBiZy1wdXJwbGUtOTUwLzMwIHNocmluay0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzb3VuZC5wbGF5QnV0dG9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgc2V0QWN0aXZlVGFiKCdzeW1ib2xzJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC0xIHB5LTIuNSB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGJvcmRlci1iLTIgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnc3ltYm9scydcbiAgICAgICAgICAgICAgICA/ICdib3JkZXItcGluay01MDAgdGV4dC1waW5rLTQwMCBiZy1waW5rLTUwMC8xMCdcbiAgICAgICAgICAgICAgICA6ICdib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1wdXJwbGUtMzAwIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTeW1ib2xzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzb3VuZC5wbGF5QnV0dG9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgc2V0QWN0aXZlVGFiKCdwYXlsaW5lcycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtMSBweS0yLjUgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBib3JkZXItYi0yICR7XG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gJ3BheWxpbmVzJ1xuICAgICAgICAgICAgICAgID8gJ2JvcmRlci1waW5rLTUwMCB0ZXh0LXBpbmstNDAwIGJnLXBpbmstNTAwLzEwJ1xuICAgICAgICAgICAgICAgIDogJ2JvcmRlci10cmFuc3BhcmVudCB0ZXh0LXB1cnBsZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDkgUGF5bGluZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgICBzZXRBY3RpdmVUYWIoJ2JvbnVzJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC0xIHB5LTIuNSB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGJvcmRlci1iLTIgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnYm9udXMnXG4gICAgICAgICAgICAgICAgPyAnYm9yZGVyLXBpbmstNTAwIHRleHQtcGluay00MDAgYmctcGluay01MDAvMTAnXG4gICAgICAgICAgICAgICAgOiAnYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtcHVycGxlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQm9udXMgJiBNdWx0aXBsaWVyc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgIHNldEFjdGl2ZVRhYigncnVsZXMnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHktMi41IHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLWItMiAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdydWxlcydcbiAgICAgICAgICAgICAgICA/ICdib3JkZXItcGluay01MDAgdGV4dC1waW5rLTQwMCBiZy1waW5rLTUwMC8xMCdcbiAgICAgICAgICAgICAgICA6ICdib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1wdXJwbGUtMzAwIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTYWZldHlcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFNjcm9sbGFibGUgQ29udGVudCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy15LWF1dG8gcC00IHNwYWNlLXktNFwiPlxuICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdzeW1ib2xzJyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICB7LyogU3BlY2lhbCBGZWF0dXJlcyBDYXJkcyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC0yLjVcIj5cbiAgICAgICAgICAgICAgICB7LyogV2lsZCBTdGFyICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20teWVsbG93LTUwMC8yMCB0by1wdXJwbGUtOTAwLzQwIGJvcmRlciBib3JkZXIteWVsbG93LTQwMC81MCBmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNocmluay0wIHAtMSBiZy15ZWxsb3ctNDAwLzIwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci15ZWxsb3ctNDAwLzQwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGcnVpdFN5bWJvbDNEIGlkPVwid2lsZF9zdGFyXCIgc2l6ZT17Mzh9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ibGFjayB0ZXh0LXllbGxvdy0zMDAgdXBwZXJjYXNlXCI+V2lsZCBTdGFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gYmcteWVsbG93LTQwMC8yNSB0ZXh0LXllbGxvdy0yMDAgcHgtMSByb3VuZGVkIGZvbnQtYm9sZFwiPldJTEQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXB1cnBsZS0yMDAvOTAgbXQtMC41IGxlYWRpbmctc251Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFN1YnN0aXR1dGVzIGZvciBhbnkgcmVndWxhciBmcnVpdCBzeW1ib2wgb24gcGF5bGluZXMuIERvZXMgTk9UIHN1YnN0aXR1dGUgZm9yIFNjYXR0ZXIgR2Vtcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYm9sZCB0ZXh0LXllbGxvdy00MDAgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDN4OiAzMMOXIHwgNHg6IDE1MMOXIHwgNXg6IDc1MMOXIGxpbmUgYmV0XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogU2NhdHRlciBHZW0gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1jeWFuLTUwMC8yMCB0by1wdXJwbGUtOTAwLzQwIGJvcmRlciBib3JkZXItY3lhbi00MDAvNTAgZmxleCBpdGVtcy1zdGFydCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaHJpbmstMCBwLTEgYmctY3lhbi00MDAvMjAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWN5YW4tNDAwLzQwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGcnVpdFN5bWJvbDNEIGlkPVwic2NhdHRlcl9nZW1cIiBzaXplPXszOH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJsYWNrIHRleHQtY3lhbi0zMDAgdXBwZXJjYXNlXCI+U2NhdHRlciBHZW08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSBiZy1jeWFuLTQwMC8yNSB0ZXh0LWN5YW4tMjAwIHB4LTEgcm91bmRlZCBmb250LWJvbGRcIj5TQ0FUVEVSPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1wdXJwbGUtMjAwLzkwIG10LTAuNSBsZWFkaW5nLXNudWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAzIG9yIG1vcmUgYW55d2hlcmUgb24gdGhlIGdyaWQgYWN0aXZhdGVzIHRoZSA8c3Ryb25nPkJvbnVzIFJvdW5kICgzIEZyZWUgU3BpbnMpPC9zdHJvbmc+IVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ib2xkIHRleHQtY3lhbi0zMDAgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFBheXMgdXAgdG8gMTUww5cgVG90YWwgQmV0ICsgQm9udXMgR2FtZSFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIEZydWl0IFN5bWJvbHMgTGlzdCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBiZy1wdXJwbGUtOTUwLzUwIGJvcmRlciBib3JkZXItcHVycGxlLTgwMC80MCBwLTIgZGl2aWRlLXkgZGl2aWRlLXB1cnBsZS04MDAvMzBcIj5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhTWU1CT0xTKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigocykgPT4gIXMuaXNXaWxkICYmICFzLmlzU2NhdHRlcilcbiAgICAgICAgICAgICAgICAgIC5tYXAoKHN5bWJvbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtzeW1ib2wuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTIgcHgtMiBob3ZlcjpiZy1wdXJwbGUtOTAwLzIwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJ1aXRTeW1ib2wzRCBpZD17c3ltYm9sLmlkfSBzaXplPXszNn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJsYWNrIHRleHQtd2hpdGVcIj57c3ltYm9sLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1wdXJwbGUtMzAwLzcwXCI+MysgY29uc2VjdXRpdmUgZnJvbSBsZWZ0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgc206Z2FwLTMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LWJvbGQgdGV4dC1wdXJwbGUtMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1wdXJwbGUtNDAwIGZvbnQtc2VtaWJvbGQgYmxvY2tcIj4zeCBTbWFsbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N5bWJvbC5wYXlvdXQzfcOXXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1ib2xkIHRleHQtYW1iZXItMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1wdXJwbGUtNDAwIGZvbnQtc2VtaWJvbGQgYmxvY2tcIj40eCBNZWRpdW08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzeW1ib2wucGF5b3V0NH3Dl1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtYmxhY2sgdGV4dC1waW5rLTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtcHVycGxlLTQwMCBmb250LXNlbWlib2xkIGJsb2NrXCI+NXggTGFyZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzeW1ib2wucGF5b3V0NX3Dl1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtY2VudGVyIHRleHQtcHVycGxlLTMwMC83MCBpdGFsaWNcIj5cbiAgICAgICAgICAgICAgICAqTXVsdGlwbGllcnMgYXBwbHkgdG8gTGluZSBCZXQgKFRvdGFsIEJldCDDtyA5IGxpbmVzKS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdwYXlsaW5lcycgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYmctcHVycGxlLTk1MC82MCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXB1cnBsZS04MDAvNDAgdGV4dC14cyB0ZXh0LXB1cnBsZS0yMDBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJsYWNrIHRleHQtYW1iZXItMzAwXCI+OSBGaXhlZCBQYXlsaW5lczogPC9zcGFuPlxuICAgICAgICAgICAgICAgIEV2YWx1YXRlZCBsZWZ0IHRvIHJpZ2h0IHN0YXJ0aW5nIGZyb20gQ29sdW1uIDEuIE1hdGNoaW5nIDMsIDQsIG9yIDUgY29uc2VjdXRpdmUgc3ltYm9scyBhbG9uZyBhbnkgbGluZSB0cmlnZ2VycyBhIHJld2FyZC5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0zIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAge1BBWUxJTkVTLm1hcCgobGluZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2xpbmUuaWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMi41IHJvdW5kZWQteGwgYmctcHVycGxlLTk1MC83MCBib3JkZXIgYm9yZGVyLXB1cnBsZS04MDAvNTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbWItMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1ibGFjayB0ZXh0LXdoaXRlXCI+TGluZSAje2xpbmUuaWR9OiB7bGluZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zIGgtMyByb3VuZGVkLWZ1bGwgc2hhZG93LXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogbGluZS5jb2xvciB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNaW5pYXR1cmUgM3g1IEdyaWQgZGlhZ3JhbSBmb3IgdGhpcyBleGFjdCBwYXlsaW5lICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTUgZ2FwLTAuNSBiZy1ibGFjay83MCBwLTEuNSByb3VuZGVkLWxnIHctZnVsbCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAge1swLCAxLCAyXS5tYXAoKHIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwgMSwgMiwgMywgNF0ubWFwKChjKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gbGluZS5jb29yZHNbY10gPT09IHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtyfS0ke2N9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtMi41IHJvdW5kZWQtWzNweF0gdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1ncmFkaWVudC10by10IGZyb20tcGluay01MDAgdG8tYW1iZXItMzAwIHNoYWRvdy1zbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1wdXJwbGUtOTUwLzQwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB0ZXh0LXB1cnBsZS0zMDAvODAgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bGluZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdib251cycgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgey8qIER5bmFtaWMgTXVsdGlwbGllciBFeHBsYW5hdGlvbiAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMuNSByb3VuZGVkLTJ4bCBiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItNTAwLzE1IHZpYS1waW5rLTUwMC8xNSB0by1wdXJwbGUtOTAwLzQwIGJvcmRlciBib3JkZXItYW1iZXItNDAwLzUwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJsYWNrIHRleHQtc20gdGV4dC1hbWJlci0zMDAgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgIER5bmFtaWMgTXVsdGlwbGllciBTeXN0ZW1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1wdXJwbGUtMjAwLzkwIGxlYWRpbmctcmVsYXhlZCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICBXaW5uaW5nIHNwaW5zIGNhbiB0cmlnZ2VyIGFuIGluc3RhbnQgVWx0cmEgTXVsdGlwbGllciBvZiA8c3Ryb25nPjJ4LCAzeCwgNXgsIG9yIDEweDwvc3Ryb25nPiFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBwLTIuNSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItcHVycGxlLTcwMC81MCB0ZXh0LVsxMXB4XSB0ZXh0LWFtYmVyLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGUgYmxvY2sgbWItMC41XCI+RXhhbXBsZSBDYWxjdWxhdGlvbjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICBCYXNlIHJld2FyZDogMTAwIHBvaW50cyDigKIgTXVsdGlwbGllcjogM3gg4oCiIEZpbmFsIHJld2FyZDogMzAwIHBvaW50cy5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIEJvbnVzIEdlbSBGZWF0dXJlICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMy41IHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1jeWFuLTUwMC8xNSB2aWEtcHVycGxlLTkwMC80MCB0by1waW5rLTUwMC8xNSBib3JkZXIgYm9yZGVyLWN5YW4tNDAwLzUwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxBd2FyZCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtY3lhbi00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYmxhY2sgdGV4dC1zbSB0ZXh0LWN5YW4tMzAwIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICBTY2F0dGVyIEdlbSBCb251cyBSb3VuZFxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIHNwYWNlLXktMS41IHRleHQtWzExcHhdIHRleHQtcHVycGxlLTIwMC85MCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5UcmlnZ2VyZWQgYnkgPHN0cm9uZz4zIG9yIG1vcmUgU2NhdHRlciBHZW1zPC9zdHJvbmc+IGFueXdoZXJlIG9uIHRoZSBncmlkLjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+UGF1c2VzIG5vcm1hbCBwbGF5IGFuZCBlbnRlcnMgYSBkZWRpY2F0ZWQgbmVvbiBCb251cyBTY3JlZW4uPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5Bd2FyZHMgPHN0cm9uZz4zIEZyZWUgQm9udXMgU3BpbnM8L3N0cm9uZz4gd2l0aCB6ZXJvIHBvaW50cyBkZWR1Y3RlZC48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkJvbnVzIHJvdW5kIG11bHRpcGxpZXIgc3RhcnRzIGF0IDJ4IGFuZCBjYW4gY2xpbWIgdG8gM3gsIDV4LCBhbmQgMTB4ITwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+QWxsIHZpcnR1YWwgcG9pbnRzIGFjY3VtdWxhdGVkIGR1cmluZyB0aGUgMyBzcGlucyBhcmUgY3JlZGl0ZWQgdG8gYmFsYW5jZSB1cG9uIHJldHVybi48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdydWxlcycgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgdGV4dC14cyB0ZXh0LXB1cnBsZS0yMDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMuNSByb3VuZGVkLTJ4bCBiZy1waW5rLTUwMC8xMCBib3JkZXIgYm9yZGVyLXBpbmstNTAwLzQwIGZsZXggaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8U2hpZWxkQ2hlY2sgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXBpbmstNDAwIHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJsYWNrIHRleHQtc20gdGV4dC1waW5rLTMwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICBGcmVlIEdhbWUg4oCiIFZpcnR1YWwgUG9pbnRzIE9ubHlcbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXB1cnBsZS0yMDAvOTAgbXQtMSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBzdHJpY3RseSBhIDxzdHJvbmc+RlJFRSBFTlRFUlRBSU5NRU5UIEFSQ0FERSBHQU1FPC9zdHJvbmc+IHVzaW5nIGZpY3Rpb25hbCBwb2ludHMuXG4gICAgICAgICAgICAgICAgICAgIE5vIHJlYWwgbW9uZXksIG5vIGRlcG9zaXRzLCBubyBiZXR0aW5nLCBubyB3aXRoZHJhd2Fscywgbm8gY3J5cHRvY3VycmVuY3ksIGFuZCBubyBjYXNoIHByaXplcy5cbiAgICAgICAgICAgICAgICAgICAgUG9pbnRzIGhhdmUgemVybyBtb25ldGFyeSB2YWx1ZSBhbmQgY2Fubm90IGJlIHRyYW5zZmVycmVkLCBleGNoYW5nZWQsIG9yIGNhc2hlZCBvdXQuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgYmctcHVycGxlLTk1MC81MCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXB1cnBsZS04MDAvNDAgc3BhY2UteS0yIHRleHQtWzExcHhdXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWFtYmVyLTMwMCB0ZXh0LXhzIHVwcGVyY2FzZVwiPktleSBSdWxlczwvaDQ+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBzcGFjZS15LTEgdGV4dC1wdXJwbGUtMjAwLzkwXCI+XG4gICAgICAgICAgICAgICAgICA8bGk+U3RhcnRpbmcgYmFsYW5jZTogMTAsMDAwIEZyZWUgVmlydHVhbCBQb2ludHMuPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5TZWxlY3RhYmxlIHNwaW4gYW1vdW50czogMTAsIDUwLCAxMDAsIDI1MCwgb3IgNTAwIHBvaW50cy48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkRhaWx5IGJvbnVzOiArMiw1MDAgZnJlZSBwb2ludHMgY2xhaW1hYmxlIG9uY2UgZXZlcnkgMjQgaG91cnMuPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5GcmVlIHJlZmlsbCBib29zdGVyOiArMSwwMDAgZnJlZSBwb2ludHMgYW55dGltZSBiYWxhbmNlIGlzIGxvdy48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkRldGVybWluaXN0aWMgYW5kIHRyYW5zcGFyZW50IHBvaW50IGNhbGN1bGF0aW9ucy48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEZvb3RlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLXQgYm9yZGVyLXB1cnBsZS04MDAvNDAgYmctcHVycGxlLTk1MC82MCB0ZXh0LWNlbnRlciBzaHJpbmstMFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMi41IHJvdW5kZWQteGwgYmctcHVycGxlLTgwMCBob3ZlcjpiZy1wdXJwbGUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBCYWNrIHRvIEdhbWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=