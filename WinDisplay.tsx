const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { ChevronDown, ChevronUp, Sparkles, Award } from "/node_modules/.vite/deps/lucide-react.js?v=7c623386";
import { sound } from "/src/services/audio.ts";
var _jsxFileName = "/app/applet/src/components/WinDisplay.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const WinDisplay = ({ evaluation, lastWin, isSpinning }) => {
	const [showBreakdown, setShowBreakdown] = useState(false);
	const hasWin = evaluation && evaluation.totalWin > 0;
	const multiplier = evaluation?.multiplier || 1;
	const hasMultiplier = multiplier > 1;
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "w-full max-w-xl mx-auto px-2 sm:px-4 mt-2 select-none",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-gradient-to-r from-[#1e0533] via-[#2a0847] to-[#1e0533] border border-purple-700/60 rounded-2xl p-2.5 sm:p-3 shadow-lg",
			children: isSpinning ? /* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center justify-center gap-2 py-1 text-purple-300 font-bold text-xs sm:text-sm animate-pulse",
				children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Reels are spinning... Best of luck!" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 11
			}, this) : hasWin ? /* @__PURE__ */ _jsxDEV("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between gap-2 flex-wrap",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							className: "text-xl sm:text-2xl animate-bounce",
							children: "🎉"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-1.5",
							children: /* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs sm:text-sm font-black text-amber-300",
								children: [evaluation.lineWins.length > 0 && `${evaluation.lineWins.length} Line Win${evaluation.lineWins.length > 1 ? "s" : ""}`, evaluation.scatterWin && ` + ${evaluation.scatterWin.count} Scatter Gems`]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 19
						}, this), hasMultiplier && /* @__PURE__ */ _jsxDEV("div", {
							className: "text-[10px] sm:text-[11px] font-bold text-pink-300 flex items-center gap-1",
							children: [
								/* @__PURE__ */ _jsxDEV("span", { children: [
									"Base: ",
									evaluation.baseWin.toLocaleString(),
									" pts"
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ _jsxDEV("span", { children: "×" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 53,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-yellow-300 font-extrabold",
									children: [multiplier, "x"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 54,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ _jsxDEV("span", { children: "=" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 55,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-amber-300 font-black",
									children: [evaluation.totalWin.toLocaleString(), " pts"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 23
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 21
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [
							hasMultiplier && /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-1 bg-gradient-to-r from-amber-500 to-pink-500 text-white px-2.5 py-1 rounded-xl shadow-lg shadow-pink-500/30 animate-multiplier-pop border border-yellow-200",
								children: [/* @__PURE__ */ _jsxDEV(Sparkles, { className: "w-3.5 h-3.5 fill-yellow-200" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-xs sm:text-sm font-black",
									children: [multiplier, "x MULTIPLIER"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 67,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-1 bg-gradient-to-tr from-amber-500/25 to-yellow-400/25 border border-amber-400/60 px-3 py-1 rounded-xl",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-sm sm:text-base font-black text-amber-300",
									children: ["+", evaluation.totalWin.toLocaleString()]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] text-amber-400 font-bold",
									children: "PTS"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 75,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 17
							}, this),
							evaluation.lineWins.length > 0 && /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => {
									sound.playButtonClick();
									setShowBreakdown((prev) => !prev);
								},
								title: "View line-by-line payout details",
								className: "p-1 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-purple-200 cursor-pointer",
								children: showBreakdown ? /* @__PURE__ */ _jsxDEV(ChevronUp, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 87,
									columnNumber: 38
								}, this) : /* @__PURE__ */ _jsxDEV(ChevronDown, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 87,
									columnNumber: 74
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 19
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 13
				}, this), showBreakdown && evaluation.lineWins.length > 0 && /* @__PURE__ */ _jsxDEV("div", {
					className: "mt-2 pt-2 border-t border-purple-800/40 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] max-h-36 overflow-y-auto pr-1",
					children: evaluation.lineWins.map((w, i) => /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center justify-between p-1.5 rounded-lg bg-purple-950/60 border border-purple-800/30",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ _jsxDEV(Award, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "font-bold text-white",
									children: [
										"Line #",
										w.lineId,
										" (",
										w.lineName,
										"):"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-purple-300",
									children: [
										w.count,
										"x ",
										w.symbolName
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 104,
									columnNumber: 23
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 21
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "font-black text-amber-300",
							children: [
								"+",
								w.totalPayout,
								" pts"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 21
						}, this)]
					}, i, true, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 19
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 11
			}, this) : /* @__PURE__ */ _jsxDEV("div", {
				className: "text-center text-purple-300/80 font-medium text-xs sm:text-sm py-0.5",
				children: "No match this spin — Try again! Match 3+ symbols on any of the 9 paylines."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QXVDOzs7OztRQUN4RCx3QkFBQyxRQUFEO1NBQU0sV0FBVTttQkFBaEI7VUFBdUM7VUFBTyxFQUFFO1VBQU87VUFBRyxFQUFFO1VBQVM7U0FBUTs7Ozs7O1FBQzdFLHdCQUFDLFFBQUQ7U0FBTSxXQUFVO21CQUFoQjtVQUFtQyxFQUFFO1VBQU07VUFBRyxFQUFFO1NBQWlCOzs7Ozs7T0FDOUQ7Ozs7O2dCQUNMLHdCQUFDLFFBQUQ7T0FBTSxXQUFVO2lCQUFoQjtRQUE0QztRQUFFLEVBQUU7UUFBWTtPQUFVOzs7OztjQUNuRTtRQVRFOzs7O1lBU0YsQ0FDTjtJQUNFOzs7O1lBRUo7Ozs7O2NBRUwsd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBdUU7R0FFakY7Ozs7O0VBRUo7Ozs7O0NBQ0Y7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiV2luRGlzcGxheS50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3BpbkV2YWx1YXRpb24gfSBmcm9tICcuLi90eXBlcy9nYW1lJztcbmltcG9ydCB7IENoZXZyb25Eb3duLCBDaGV2cm9uVXAsIFNwYXJrbGVzLCBBd2FyZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBzb3VuZCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1ZGlvJztcblxuaW50ZXJmYWNlIFdpbkRpc3BsYXlQcm9wcyB7XG4gIGV2YWx1YXRpb246IFNwaW5FdmFsdWF0aW9uIHwgbnVsbDtcbiAgbGFzdFdpbjogbnVtYmVyO1xuICBpc1NwaW5uaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgV2luRGlzcGxheTogUmVhY3QuRkM8V2luRGlzcGxheVByb3BzPiA9ICh7XG4gIGV2YWx1YXRpb24sXG4gIGxhc3RXaW4sXG4gIGlzU3Bpbm5pbmdcbn0pID0+IHtcbiAgY29uc3QgW3Nob3dCcmVha2Rvd24sIHNldFNob3dCcmVha2Rvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhc1dpbiA9IGV2YWx1YXRpb24gJiYgZXZhbHVhdGlvbi50b3RhbFdpbiA+IDA7XG4gIGNvbnN0IG11bHRpcGxpZXIgPSBldmFsdWF0aW9uPy5tdWx0aXBsaWVyIHx8IDE7XG4gIGNvbnN0IGhhc011bHRpcGxpZXIgPSBtdWx0aXBsaWVyID4gMTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhsIG14LWF1dG8gcHgtMiBzbTpweC00IG10LTIgc2VsZWN0LW5vbmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMWUwNTMzXSB2aWEtWyMyYTA4NDddIHRvLVsjMWUwNTMzXSBib3JkZXIgYm9yZGVyLXB1cnBsZS03MDAvNjAgcm91bmRlZC0yeGwgcC0yLjUgc206cC0zIHNoYWRvdy1sZ1wiPlxuICAgICAgICB7aXNTcGlubmluZyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHB5LTEgdGV4dC1wdXJwbGUtMzAwIGZvbnQtYm9sZCB0ZXh0LXhzIHNtOnRleHQtc20gYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0yLjUgaC0yLjUgcm91bmRlZC1mdWxsIGJnLXBpbmstNTAwIGFuaW1hdGUtcGluZ1wiIC8+XG4gICAgICAgICAgICA8c3Bhbj5SZWVscyBhcmUgc3Bpbm5pbmcuLi4gQmVzdCBvZiBsdWNrITwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IGhhc1dpbiA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgICAgICAgIHsvKiBUb3Agc3VtbWFyeSByb3cgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgc206dGV4dC0yeGwgYW5pbWF0ZS1ib3VuY2VcIj7wn46JPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXZhbHVhdGlvbi5saW5lV2lucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtldmFsdWF0aW9uLmxpbmVXaW5zLmxlbmd0aH0gTGluZSBXaW4ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBldmFsdWF0aW9uLmxpbmVXaW5zLmxlbmd0aCA+IDEgPyAncycgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAge2V2YWx1YXRpb24uc2NhdHRlcldpbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYCArICR7ZXZhbHVhdGlvbi5zY2F0dGVyV2luLmNvdW50fSBTY2F0dGVyIEdlbXNgfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIE11bHRpcGxpZXIgQ2FsY3VsYXRpb24gRGlzcGxheSAqL31cbiAgICAgICAgICAgICAgICAgIHtoYXNNdWx0aXBsaWVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBzbTp0ZXh0LVsxMXB4XSBmb250LWJvbGQgdGV4dC1waW5rLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJhc2U6IHtldmFsdWF0aW9uLmJhc2VXaW4udG9Mb2NhbGVTdHJpbmcoKX0gcHRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPsOXPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTMwMCBmb250LWV4dHJhYm9sZFwiPnttdWx0aXBsaWVyfXg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTMwMCBmb250LWJsYWNrXCI+e2V2YWx1YXRpb24udG90YWxXaW4udG9Mb2NhbGVTdHJpbmcoKX0gcHRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBUb3RhbCBXaW4gJiBNdWx0aXBsaWVyIEJhZGdlICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAge2hhc011bHRpcGxpZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItNTAwIHRvLXBpbmstNTAwIHRleHQtd2hpdGUgcHgtMi41IHB5LTEgcm91bmRlZC14bCBzaGFkb3ctbGcgc2hhZG93LXBpbmstNTAwLzMwIGFuaW1hdGUtbXVsdGlwbGllci1wb3AgYm9yZGVyIGJvcmRlci15ZWxsb3ctMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSBmaWxsLXllbGxvdy0yMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gZm9udC1ibGFja1wiPnttdWx0aXBsaWVyfXggTVVMVElQTElFUjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGJnLWdyYWRpZW50LXRvLXRyIGZyb20tYW1iZXItNTAwLzI1IHRvLXllbGxvdy00MDAvMjUgYm9yZGVyIGJvcmRlci1hbWJlci00MDAvNjAgcHgtMyBweS0xIHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1iYXNlIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgK3tldmFsdWF0aW9uLnRvdGFsV2luLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWFtYmVyLTQwMCBmb250LWJvbGRcIj5QVFM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7ZXZhbHVhdGlvbi5saW5lV2lucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dCcmVha2Rvd24oKHByZXYpID0+ICFwcmV2KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWaWV3IGxpbmUtYnktbGluZSBwYXlvdXQgZGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSByb3VuZGVkLWxnIGJnLXB1cnBsZS05MDAvNjAgaG92ZXI6YmctcHVycGxlLTgwMCB0ZXh0LXB1cnBsZS0yMDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2hvd0JyZWFrZG93biA/IDxDaGV2cm9uVXAgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+IDogPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPn1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBFeHBhbmRhYmxlIExpbmUtYnktTGluZSBCcmVha2Rvd24gKi99XG4gICAgICAgICAgICB7c2hvd0JyZWFrZG93biAmJiBldmFsdWF0aW9uLmxpbmVXaW5zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgcHQtMiBib3JkZXItdCBib3JkZXItcHVycGxlLTgwMC80MCBncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC0xLjUgdGV4dC1bMTFweF0gbWF4LWgtMzYgb3ZlcmZsb3cteS1hdXRvIHByLTFcIj5cbiAgICAgICAgICAgICAgICB7ZXZhbHVhdGlvbi5saW5lV2lucy5tYXAoKHcsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0xLjUgcm91bmRlZC1sZyBiZy1wdXJwbGUtOTUwLzYwIGJvcmRlciBib3JkZXItcHVycGxlLTgwMC8zMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBd2FyZCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWFtYmVyLTQwMCBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGVcIj5MaW5lICN7dy5saW5lSWR9ICh7dy5saW5lTmFtZX0pOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS0zMDBcIj57dy5jb3VudH14IHt3LnN5bWJvbE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ibGFjayB0ZXh0LWFtYmVyLTMwMFwiPit7dy50b3RhbFBheW91dH0gcHRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcHVycGxlLTMwMC84MCBmb250LW1lZGl1bSB0ZXh0LXhzIHNtOnRleHQtc20gcHktMC41XCI+XG4gICAgICAgICAgICBObyBtYXRjaCB0aGlzIHNwaW4g4oCUIFRyeSBhZ2FpbiEgTWF0Y2ggMysgc3ltYm9scyBvbiBhbnkgb2YgdGhlIDkgcGF5bGluZXMuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=