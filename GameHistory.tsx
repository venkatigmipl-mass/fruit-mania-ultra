const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { X, History, Trophy, TrendingUp, Award, Zap, Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=7c623386";
import { sound } from "/src/services/audio.ts";
var _jsxFileName = "/app/applet/src/components/GameHistory.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const GameHistory = ({ isOpen, history, stats, sessionStats, onClose }) => {
	if (!isOpen) return null;
	const sessionNet = sessionStats.sessionWon - sessionStats.sessionBet;
	return /* @__PURE__ */ _jsxDEV("div", {
		onClick: onClose,
		className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 cursor-pointer select-none animate-fade-in",
		children: /* @__PURE__ */ _jsxDEV("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative max-w-lg w-full max-h-[90vh] bg-gradient-to-b from-[#23083d] via-[#160527] to-[#0e021a] rounded-3xl border-2 border-purple-600/60 shadow-2xl flex flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between px-5 py-4 border-b border-purple-800/40 bg-purple-950/60 shrink-0",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300",
							children: /* @__PURE__ */ _jsxDEV(History, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300 uppercase",
							children: "Game History & Statistics"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-[10px] text-purple-300 font-semibold",
							children: "FRUIT MANIA ULTRA Player Progression"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							sound.playButtonClick();
							onClose();
						},
						className: "p-1 rounded-full text-purple-300 hover:text-white bg-purple-900/50 hover:bg-purple-800 transition-all cursor-pointer",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "overflow-y-auto p-4 space-y-4",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "bg-purple-950/70 p-3 rounded-2xl border border-pink-500/30",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "text-[11px] font-black uppercase tracking-wider text-pink-300 mb-2 flex items-center gap-1.5",
								children: [/* @__PURE__ */ _jsxDEV(Sparkles, { className: "w-3.5 h-3.5 text-pink-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Current Session Progress" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 67,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-3 gap-2 text-center",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "bg-black/30 p-2 rounded-xl",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "text-[9px] text-purple-300 font-bold block",
											children: "Spins"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 71,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-sm font-black text-white",
											children: sessionStats.sessionSpins
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 72,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 70,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "bg-black/30 p-2 rounded-xl",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "text-[9px] text-purple-300 font-bold block",
											children: "Won"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 75,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-sm font-black text-emerald-400",
											children: ["+", sessionStats.sessionWon.toLocaleString()]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 76,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 74,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "bg-black/30 p-2 rounded-xl",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "text-[9px] text-purple-300 font-bold block",
											children: "Net"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 79,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: `text-sm font-black ${sessionNet >= 0 ? "text-emerald-400" : "text-rose-400"}`,
											children: sessionNet >= 0 ? `+${sessionNet.toLocaleString()}` : sessionNet.toLocaleString()
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 80,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 78,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "bg-purple-950/60 p-2.5 rounded-2xl border border-purple-800/50 flex flex-col items-center text-center",
									children: [
										/* @__PURE__ */ _jsxDEV(Trophy, { className: "w-5 h-5 text-amber-400 mb-1" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 90,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-[9px] uppercase tracking-wider text-purple-300 font-bold",
											children: "Best Score"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 91,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-sm font-black text-amber-300 mt-0.5",
											children: stats.highestWin.toLocaleString()
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 92,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "bg-purple-950/60 p-2.5 rounded-2xl border border-purple-800/50 flex flex-col items-center text-center",
									children: [
										/* @__PURE__ */ _jsxDEV(TrendingUp, { className: "w-5 h-5 text-pink-400 mb-1" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 98,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-[9px] uppercase tracking-wider text-purple-300 font-bold",
											children: "Peak Balance"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 99,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-sm font-black text-pink-300 mt-0.5",
											children: stats.peakBalance.toLocaleString()
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 100,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "bg-purple-950/60 p-2.5 rounded-2xl border border-purple-800/50 flex flex-col items-center text-center",
									children: [
										/* @__PURE__ */ _jsxDEV(Zap, { className: "w-5 h-5 text-cyan-400 mb-1" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 106,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-[9px] uppercase tracking-wider text-purple-300 font-bold",
											children: "Total Spins"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 107,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-sm font-black text-cyan-300 mt-0.5",
											children: stats.spinsCount
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 108,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 105,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "bg-purple-950/60 p-2.5 rounded-2xl border border-purple-800/50 flex flex-col items-center text-center",
									children: [
										/* @__PURE__ */ _jsxDEV(Award, { className: "w-5 h-5 text-emerald-400 mb-1" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 114,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-[9px] uppercase tracking-wider text-purple-300 font-bold",
											children: "Total Won"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 115,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-sm font-black text-emerald-300 mt-0.5",
											children: stats.totalWon.toLocaleString()
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 116,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 113,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "rounded-2xl bg-purple-950/40 border border-purple-800/40 overflow-hidden",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "px-3 py-2 bg-purple-900/40 border-b border-purple-800/40 text-xs font-black text-purple-200 flex justify-between",
								children: [/* @__PURE__ */ _jsxDEV("span", { children: "Last 20 Spin Results" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] text-purple-300/80 font-normal",
									children: "Saved in LocalStorage"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 126,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 13
							}, this), history.length === 0 ? /* @__PURE__ */ _jsxDEV("div", {
								className: "py-8 text-center text-purple-400/60 text-xs",
								children: "No spins recorded yet. Spin the reels to start your history!"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 130,
								columnNumber: 15
							}, this) : /* @__PURE__ */ _jsxDEV("div", {
								className: "divide-y divide-purple-800/30 max-h-[300px] overflow-y-auto",
								children: history.map((record, index) => {
									const isProfit = record.win > record.bet;
									const dateStr = new Date(record.timestamp).toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit",
										second: "2-digit"
									});
									return /* @__PURE__ */ _jsxDEV("div", {
										className: "p-2.5 hover:bg-purple-900/20 flex items-center justify-between gap-2 transition-colors text-xs",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													className: "font-mono text-[10px] text-purple-400",
													children: dateStr
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 150,
													columnNumber: 27
												}, this), /* @__PURE__ */ _jsxDEV("span", {
													className: "text-[11px] font-bold text-white",
													children: record.summary
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 151,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 149,
												columnNumber: 25
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "flex items-center gap-2 text-[10px] text-purple-300/70 mt-0.5",
												children: [
													/* @__PURE__ */ _jsxDEV("span", { children: [
														"Bet: ",
														record.bet,
														" pts"
													] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 154,
														columnNumber: 27
													}, this),
													record.multiplier > 1 && /* @__PURE__ */ _jsxDEV("span", {
														className: "text-yellow-300 font-bold",
														children: [record.multiplier, "x Multiplier"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 156,
														columnNumber: 29
													}, this),
													record.hasWild && /* @__PURE__ */ _jsxDEV("span", {
														className: "text-yellow-400 font-bold",
														children: "⭐ Wild"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 158,
														columnNumber: 46
													}, this),
													record.hasScatter && /* @__PURE__ */ _jsxDEV("span", {
														className: "text-cyan-400 font-bold",
														children: "💎 Scatter"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 159,
														columnNumber: 49
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 153,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 148,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "flex flex-col items-end",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "flex items-center gap-1",
												children: /* @__PURE__ */ _jsxDEV("span", {
													className: `font-black ${record.win > 0 ? "text-emerald-400" : "text-purple-400"}`,
													children: [record.win > 0 ? `+${record.win}` : "0", " pts"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 165,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 164,
												columnNumber: 25
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: `text-[10px] font-bold ${isProfit ? "text-emerald-400" : record.net === 0 ? "text-gray-400" : "text-rose-400"}`,
												children: ["Net: ", record.net > 0 ? `+${record.net}` : record.net]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 173,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 163,
											columnNumber: 23
										}, this)]
									}, record.id || index, true, {
										fileName: _jsxFileName,
										lineNumber: 144,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 62,
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
						children: "Close"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 195,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 194,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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biI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFgsIEhpc3RvcnksIFRyb3BoeSwgVHJlbmRpbmdVcCwgQXdhcmQsIFphcCwgU3BhcmtsZXMgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgU3Bpbkhpc3RvcnlSZWNvcmQsIFVzZXJTdGF0cywgU2Vzc2lvblN0YXRzIH0gZnJvbSAnLi4vdHlwZXMvZ2FtZSc7XG5pbXBvcnQgeyBzb3VuZCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1ZGlvJztcblxuaW50ZXJmYWNlIEdhbWVIaXN0b3J5UHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIGhpc3Rvcnk6IFNwaW5IaXN0b3J5UmVjb3JkW107XG4gIHN0YXRzOiBVc2VyU3RhdHM7XG4gIHNlc3Npb25TdGF0czogU2Vzc2lvblN0YXRzO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgR2FtZUhpc3Rvcnk6IFJlYWN0LkZDPEdhbWVIaXN0b3J5UHJvcHM+ID0gKHtcbiAgaXNPcGVuLFxuICBoaXN0b3J5LFxuICBzdGF0cyxcbiAgc2Vzc2lvblN0YXRzLFxuICBvbkNsb3NlXG59KSA9PiB7XG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzZXNzaW9uTmV0ID0gc2Vzc2lvblN0YXRzLnNlc3Npb25Xb24gLSBzZXNzaW9uU3RhdHMuc2Vzc2lvbkJldDtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgYmctYmxhY2svODAgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTMgc206cC00IGN1cnNvci1wb2ludGVyIHNlbGVjdC1ub25lIGFuaW1hdGUtZmFkZS1pblwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctbGcgdy1mdWxsIG1heC1oLVs5MHZoXSBiZy1ncmFkaWVudC10by1iIGZyb20tWyMyMzA4M2RdIHZpYS1bIzE2MDUyN10gdG8tWyMwZTAyMWFdIHJvdW5kZWQtM3hsIGJvcmRlci0yIGJvcmRlci1wdXJwbGUtNjAwLzYwIHNoYWRvdy0yeGwgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC01IHB5LTQgYm9yZGVyLWIgYm9yZGVyLXB1cnBsZS04MDAvNDAgYmctcHVycGxlLTk1MC82MCBzaHJpbmstMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWxnIGJnLXB1cnBsZS01MDAvMjAgYm9yZGVyIGJvcmRlci1wdXJwbGUtNDAwLzQwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtcHVycGxlLTMwMFwiPlxuICAgICAgICAgICAgICA8SGlzdG9yeSBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtYmFzZSBzbTp0ZXh0LWxnIGZvbnQtYmxhY2sgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXBpbmstNDAwIHRvLWFtYmVyLTMwMCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICBHYW1lIEhpc3RvcnkgJiBTdGF0aXN0aWNzXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtcHVycGxlLTMwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgRlJVSVQgTUFOSUEgVUxUUkEgUGxheWVyIFByb2dyZXNzaW9uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzb3VuZC5wbGF5QnV0dG9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSByb3VuZGVkLWZ1bGwgdGV4dC1wdXJwbGUtMzAwIGhvdmVyOnRleHQtd2hpdGUgYmctcHVycGxlLTkwMC81MCBob3ZlcjpiZy1wdXJwbGUtODAwIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1hdXRvIHAtNCBzcGFjZS15LTRcIj5cbiAgICAgICAgICB7LyogQ3VycmVudCBTZXNzaW9uIFN0YXRzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTk1MC83MCBwLTMgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1waW5rLTUwMC8zMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXBpbmstMzAwIG1iLTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1waW5rLTQwMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPkN1cnJlbnQgU2Vzc2lvbiBQcm9ncmVzczwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svMzAgcC0yIHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtcHVycGxlLTMwMCBmb250LWJvbGQgYmxvY2tcIj5TcGluczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYmxhY2sgdGV4dC13aGl0ZVwiPntzZXNzaW9uU3RhdHMuc2Vzc2lvblNwaW5zfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svMzAgcC0yIHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtcHVycGxlLTMwMCBmb250LWJvbGQgYmxvY2tcIj5Xb248L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJsYWNrIHRleHQtZW1lcmFsZC00MDBcIj4re3Nlc3Npb25TdGF0cy5zZXNzaW9uV29uLnRvTG9jYWxlU3RyaW5nKCl9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay8zMCBwLTIgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1wdXJwbGUtMzAwIGZvbnQtYm9sZCBibG9ja1wiPk5ldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtYmxhY2sgJHtzZXNzaW9uTmV0ID49IDAgPyAndGV4dC1lbWVyYWxkLTQwMCcgOiAndGV4dC1yb3NlLTQwMCd9YH0+XG4gICAgICAgICAgICAgICAgICB7c2Vzc2lvbk5ldCA+PSAwID8gYCske3Nlc3Npb25OZXQudG9Mb2NhbGVTdHJpbmcoKX1gIDogc2Vzc2lvbk5ldC50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBBbGwtdGltZSBLZXkgUmVjb3JkcyBHcmlkICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtNCBnYXAtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtOTUwLzYwIHAtMi41IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItcHVycGxlLTgwMC81MCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8VHJvcGh5IGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1hbWJlci00MDAgbWItMVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtcHVycGxlLTMwMCBmb250LWJvbGRcIj5CZXN0IFNjb3JlPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAge3N0YXRzLmhpZ2hlc3RXaW4udG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTk1MC82MCBwLTIuNSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXB1cnBsZS04MDAvNTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPFRyZW5kaW5nVXAgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXBpbmstNDAwIG1iLTFcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXB1cnBsZS0zMDAgZm9udC1ib2xkXCI+UGVhayBCYWxhbmNlPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYmxhY2sgdGV4dC1waW5rLTMwMCBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICB7c3RhdHMucGVha0JhbGFuY2UudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTk1MC82MCBwLTIuNSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXB1cnBsZS04MDAvNTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPFphcCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtY3lhbi00MDAgbWItMVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtcHVycGxlLTMwMCBmb250LWJvbGRcIj5Ub3RhbCBTcGluczwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJsYWNrIHRleHQtY3lhbi0zMDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAge3N0YXRzLnNwaW5zQ291bnR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXB1cnBsZS05NTAvNjAgcC0yLjUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1wdXJwbGUtODAwLzUwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxBd2FyZCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZW1lcmFsZC00MDAgbWItMVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtcHVycGxlLTMwMCBmb250LWJvbGRcIj5Ub3RhbCBXb248L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ibGFjayB0ZXh0LWVtZXJhbGQtMzAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgIHtzdGF0cy50b3RhbFdvbi50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBMYXN0IDIwIFNwaW5zIFRhYmxlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYmctcHVycGxlLTk1MC80MCBib3JkZXIgYm9yZGVyLXB1cnBsZS04MDAvNDAgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMiBiZy1wdXJwbGUtOTAwLzQwIGJvcmRlci1iIGJvcmRlci1wdXJwbGUtODAwLzQwIHRleHQteHMgZm9udC1ibGFjayB0ZXh0LXB1cnBsZS0yMDAgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPHNwYW4+TGFzdCAyMCBTcGluIFJlc3VsdHM8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtcHVycGxlLTMwMC84MCBmb250LW5vcm1hbFwiPlNhdmVkIGluIExvY2FsU3RvcmFnZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7aGlzdG9yeS5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktOCB0ZXh0LWNlbnRlciB0ZXh0LXB1cnBsZS00MDAvNjAgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgIE5vIHNwaW5zIHJlY29yZGVkIHlldC4gU3BpbiB0aGUgcmVlbHMgdG8gc3RhcnQgeW91ciBoaXN0b3J5IVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLXB1cnBsZS04MDAvMzAgbWF4LWgtWzMwMHB4XSBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgICAgICB7aGlzdG9yeS5tYXAoKHJlY29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUHJvZml0ID0gcmVjb3JkLndpbiA+IHJlY29yZC5iZXQ7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyID0gbmV3IERhdGUocmVjb3JkLnRpbWVzdGFtcCkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZDogJzItZGlnaXQnXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjb3JkLmlkIHx8IGluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMi41IGhvdmVyOmJnLXB1cnBsZS05MDAvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIHRyYW5zaXRpb24tY29sb3JzIHRleHQteHNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtWzEwcHhdIHRleHQtcHVycGxlLTQwMFwiPntkYXRlU3RyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1ib2xkIHRleHQtd2hpdGVcIj57cmVjb3JkLnN1bW1hcnl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtWzEwcHhdIHRleHQtcHVycGxlLTMwMC83MCBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmV0OiB7cmVjb3JkLmJldH0gcHRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkLm11bHRpcGxpZXIgPiAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy0zMDAgZm9udC1ib2xkXCI+e3JlY29yZC5tdWx0aXBsaWVyfXggTXVsdGlwbGllcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5oYXNXaWxkICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTQwMCBmb250LWJvbGRcIj7irZAgV2lsZDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuaGFzU2NhdHRlciAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWN5YW4tNDAwIGZvbnQtYm9sZFwiPvCfko4gU2NhdHRlcjwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LWJsYWNrICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQud2luID4gMCA/ICd0ZXh0LWVtZXJhbGQtNDAwJyA6ICd0ZXh0LXB1cnBsZS00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkLndpbiA+IDAgPyBgKyR7cmVjb3JkLndpbn1gIDogJzAnfSBwdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LVsxMHB4XSBmb250LWJvbGQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Byb2ZpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1lbWVyYWxkLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcmVjb3JkLm5ldCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtcm9zZS00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBOZXQ6IHtyZWNvcmQubmV0ID4gMCA/IGArJHtyZWNvcmQubmV0fWAgOiByZWNvcmQubmV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEZvb3RlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLXQgYm9yZGVyLXB1cnBsZS04MDAvNDAgYmctcHVycGxlLTk1MC82MCB0ZXh0LWNlbnRlciBzaHJpbmstMFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMi41IHJvdW5kZWQteGwgYmctcHVycGxlLTgwMCBob3ZlcjpiZy1wdXJwbGUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDbG9zZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==