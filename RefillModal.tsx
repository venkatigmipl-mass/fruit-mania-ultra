const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { X, Coins, Sparkles, ShieldCheck } from "/node_modules/.vite/deps/lucide-react.js?v=7c623386";
import { REFILL_AMOUNT } from "/src/utils/gameLogic.ts";
import { sound } from "/src/services/audio.ts";
var _jsxFileName = "/app/applet/src/components/RefillModal.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const RefillModal = ({ isOpen, balance, onRefill, onClose }) => {
	if (!isOpen) return null;
	return /* @__PURE__ */ _jsxDEV("div", {
		onClick: onClose,
		className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer select-none animate-fade-in",
		children: /* @__PURE__ */ _jsxDEV("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative max-w-sm w-full bg-gradient-to-b from-[#250840] via-[#170529] to-[#0f031c] rounded-3xl p-6 border border-amber-500/40 shadow-2xl shadow-amber-900/40 text-center flex flex-col items-center",
			children: [
				/* @__PURE__ */ _jsxDEV("button", {
					onClick: () => {
						sound.playButtonClick();
						onClose();
					},
					className: "absolute top-4 right-4 text-purple-300 hover:text-white p-1 rounded-full bg-purple-900/40 hover:bg-purple-800 transition-all cursor-pointer",
					children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow-lg shadow-amber-500/30 mb-3 border border-yellow-200/50",
					children: /* @__PURE__ */ _jsxDEV(Coins, { className: "w-8 h-8 text-amber-950" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("h2", {
					className: "text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 uppercase tracking-wide",
					children: "Free Points Booster"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "text-xs text-purple-300/80 mt-1 mb-4",
					children: "Never run out of entertainment spins!"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "w-full bg-purple-950/60 rounded-2xl border border-purple-800/50 p-3.5 mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-xs font-bold text-purple-300",
						children: "Current Balance:"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "text-sm font-black text-amber-300",
						children: [balance.toLocaleString(), " PTS"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "w-full bg-gradient-to-br from-amber-500/20 to-purple-900/40 rounded-2xl border border-amber-400/40 p-4 mb-5 flex flex-col items-center",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[11px] font-bold text-amber-300 uppercase tracking-wider",
							children: "Instant Free Refill"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-1.5 my-1",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "text-3xl font-black text-amber-300",
								children: ["+", REFILL_AMOUNT.toLocaleString()]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs font-black text-amber-400 bg-amber-500/30 px-1.5 py-0.5 rounded",
								children: "PTS"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[10px] text-purple-300 font-medium",
							children: "100% Free • Unlimited claims for endless arcade fun"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("button", {
					onClick: () => {
						sound.playSmallWin();
						onRefill();
						onClose();
					},
					className: "w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-amber-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-400/30 hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV(Sparkles, { className: "w-4 h-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Add 1,000 Free Points" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-4 flex items-center justify-center gap-1.5 text-[10px] text-purple-400/80",
					children: [/* @__PURE__ */ _jsxDEV(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Points are virtual only and have zero cash value." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsR0FBRyxPQUFPLFVBQVUsbUJBQW1CO0FBQ2hELFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsYUFBYTs7O0FBU3RCLE9BQU8sTUFBTSxlQUEyQyxFQUN0RCxRQUNBLFNBQ0EsVUFDQSxjQUNJO0NBQ0osSUFBSSxDQUFDLFFBQVEsT0FBTztDQUVwQixPQUNFLHdCQUFDLE9BQUQ7RUFDRSxTQUFTO0VBQ1QsV0FBVTtZQUVWLHdCQUFDLE9BQUQ7R0FDRSxVQUFVLE1BQU0sRUFBRSxnQkFBZ0I7R0FDbEMsV0FBVTthQUZaO0lBSUUsd0JBQUMsVUFBRDtLQUNFLGVBQWU7TUFDYixNQUFNLGdCQUFnQjtNQUN0QixRQUFRO0tBQ1Y7S0FDQSxXQUFVO2VBRVYsd0JBQUMsR0FBRCxFQUFHLFdBQVUsVUFBVzs7Ozs7SUFDbEI7Ozs7O0lBR1Isd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFDYix3QkFBQyxPQUFELEVBQU8sV0FBVSx5QkFBMEI7Ozs7O0lBQ3hDOzs7OztJQUVMLHdCQUFDLE1BQUQ7S0FBSSxXQUFVO2VBQXlIO0lBRW5JOzs7OztJQUNKLHdCQUFDLEtBQUQ7S0FBRyxXQUFVO2VBQXVDO0lBRWpEOzs7OztJQUdILHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWYsQ0FDRSx3QkFBQyxRQUFEO01BQU0sV0FBVTtnQkFBb0M7S0FBc0I7Ozs7ZUFDMUUsd0JBQUMsUUFBRDtNQUFNLFdBQVU7Z0JBQWhCLENBQXFELFFBQVEsZUFBZSxHQUFFLE1BQVU7Ozs7O2FBQ3JGOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmO01BQ0Usd0JBQUMsUUFBRDtPQUFNLFdBQVU7aUJBQWdFO01BRTFFOzs7OztNQUNOLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmLENBQ0Usd0JBQUMsUUFBRDtRQUFNLFdBQVU7a0JBQWhCLENBQXFELEtBQUUsY0FBYyxlQUFlLENBQVE7Ozs7O2lCQUM1Rix3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBMEU7T0FBUzs7OztlQUNoRzs7Ozs7O01BQ0wsd0JBQUMsUUFBRDtPQUFNLFdBQVU7aUJBQTBDO01BRXBEOzs7OztLQUNIOzs7Ozs7SUFFTCx3QkFBQyxVQUFEO0tBQ0UsZUFBZTtNQUNiLE1BQU0sYUFBYTtNQUNuQixTQUFTO01BQ1QsUUFBUTtLQUNWO0tBQ0EsV0FBVTtlQU5aLENBUUUsd0JBQUMsVUFBRCxFQUFVLFdBQVUsVUFBVzs7OztlQUMvQix3QkFBQyxRQUFELFlBQU0sd0JBQTJCOzs7O2FBQzNCOzs7Ozs7SUFHUix3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmLENBQ0Usd0JBQUMsYUFBRCxFQUFhLFdBQVUsd0NBQXlDOzs7O2VBQ2hFLHdCQUFDLFFBQUQsWUFBTSxvREFBdUQ7Ozs7YUFDMUQ7Ozs7OztHQUNGOzs7Ozs7Q0FDRjs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJSZWZpbGxNb2RhbC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFgsIENvaW5zLCBTcGFya2xlcywgU2hpZWxkQ2hlY2sgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgUkVGSUxMX0FNT1VOVCB9IGZyb20gJy4uL3V0aWxzL2dhbWVMb2dpYyc7XG5pbXBvcnQgeyBzb3VuZCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1ZGlvJztcblxuaW50ZXJmYWNlIFJlZmlsbE1vZGFsUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIGJhbGFuY2U6IG51bWJlcjtcbiAgb25SZWZpbGw6ICgpID0+IHZvaWQ7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBSZWZpbGxNb2RhbDogUmVhY3QuRkM8UmVmaWxsTW9kYWxQcm9wcz4gPSAoe1xuICBpc09wZW4sXG4gIGJhbGFuY2UsXG4gIG9uUmVmaWxsLFxuICBvbkNsb3NlXG59KSA9PiB7XG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgYmctYmxhY2svODAgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgY3Vyc29yLXBvaW50ZXIgc2VsZWN0LW5vbmUgYW5pbWF0ZS1mYWRlLWluXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy1zbSB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tYiBmcm9tLVsjMjUwODQwXSB2aWEtWyMxNzA1MjldIHRvLVsjMGYwMzFjXSByb3VuZGVkLTN4bCBwLTYgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvNDAgc2hhZG93LTJ4bCBzaGFkb3ctYW1iZXItOTAwLzQwIHRleHQtY2VudGVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB0ZXh0LXB1cnBsZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSBwLTEgcm91bmRlZC1mdWxsIGJnLXB1cnBsZS05MDAvNDAgaG92ZXI6YmctcHVycGxlLTgwMCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgey8qIENvaW4gU3RhY2sgSWNvbiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1hbWJlci01MDAgdG8teWVsbG93LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctbGcgc2hhZG93LWFtYmVyLTUwMC8zMCBtYi0zIGJvcmRlciBib3JkZXIteWVsbG93LTIwMC81MFwiPlxuICAgICAgICAgIDxDb2lucyBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtYW1iZXItOTUwXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ibGFjayB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItMzAwIHRvLXllbGxvdy00MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICBGcmVlIFBvaW50cyBCb29zdGVyXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1wdXJwbGUtMzAwLzgwIG10LTEgbWItNFwiPlxuICAgICAgICAgIE5ldmVyIHJ1biBvdXQgb2YgZW50ZXJ0YWlubWVudCBzcGlucyFcbiAgICAgICAgPC9wPlxuXG4gICAgICAgIHsvKiBDdXJyZW50IEJhbGFuY2UgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXB1cnBsZS05NTAvNjAgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1wdXJwbGUtODAwLzUwIHAtMy41IG1iLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1wdXJwbGUtMzAwXCI+Q3VycmVudCBCYWxhbmNlOjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDBcIj57YmFsYW5jZS50b0xvY2FsZVN0cmluZygpfSBQVFM8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBCb251cyBvZmZlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1hbWJlci01MDAvMjAgdG8tcHVycGxlLTkwMC80MCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWFtYmVyLTQwMC80MCBwLTQgbWItNSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtYm9sZCB0ZXh0LWFtYmVyLTMwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgIEluc3RhbnQgRnJlZSBSZWZpbGxcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IG15LTFcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDBcIj4re1JFRklMTF9BTU9VTlQudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYmxhY2sgdGV4dC1hbWJlci00MDAgYmctYW1iZXItNTAwLzMwIHB4LTEuNSBweS0wLjUgcm91bmRlZFwiPlBUUzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXB1cnBsZS0zMDAgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIDEwMCUgRnJlZSDigKIgVW5saW1pdGVkIGNsYWltcyBmb3IgZW5kbGVzcyBhcmNhZGUgZnVuXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc291bmQucGxheVNtYWxsV2luKCk7XG4gICAgICAgICAgICBvblJlZmlsbCgpO1xuICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMuNSByb3VuZGVkLTJ4bCBiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItNTAwIHZpYS15ZWxsb3ctNDAwIHRvLWFtYmVyLTUwMCB0ZXh0LWFtYmVyLTk1MCBmb250LWJsYWNrIHRleHQtc20gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHNoYWRvdy1sZyBzaGFkb3ctYW1iZXItNDAwLzMwIGhvdmVyOmJyaWdodG5lc3MtMTEwIGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiXG4gICAgICAgID5cbiAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgPHNwYW4+QWRkIDEsMDAwIEZyZWUgUG9pbnRzPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICB7LyogRmFpcm5lc3MgZGlzY2xhaW1lciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgdGV4dC1bMTBweF0gdGV4dC1wdXJwbGUtNDAwLzgwXCI+XG4gICAgICAgICAgPFNoaWVsZENoZWNrIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtZW1lcmFsZC00MDAgc2hyaW5rLTBcIiAvPlxuICAgICAgICAgIDxzcGFuPlBvaW50cyBhcmUgdmlydHVhbCBvbmx5IGFuZCBoYXZlIHplcm8gY2FzaCB2YWx1ZS48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19