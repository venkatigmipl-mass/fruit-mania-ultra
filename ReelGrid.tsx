const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { Reel } from "/src/components/Reel.tsx";
import { WinLineOverlay } from "/src/components/WinLineOverlay.tsx";
var _jsxFileName = "/app/applet/src/components/ReelGrid.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const ReelGrid = ({ grid, spinningColumns, evaluation, screenShake }) => {
	const isLargeWin = evaluation && evaluation.isBigWin && screenShake;
	const isAnySpinning = spinningColumns.some(Boolean);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: `relative w-full max-w-xl mx-auto px-2 sm:px-4 py-1 select-none transition-transform ${isLargeWin ? "animate-screen-shake" : ""}`,
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 bg-gradient-to-b from-[#280545] via-[#16032a] to-[#0a0114] border-2 border-amber-400 shadow-2xl shadow-pink-950/60 overflow-hidden",
			children: [
				/* @__PURE__ */ _jsxDEV("div", { className: "absolute -top-24 -left-20 w-80 h-40 bg-gradient-to-b from-white/10 to-transparent rotate-12 pointer-events-none" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", { className: "absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full bg-amber-400 shadow-lg shadow-amber-400" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", { className: "absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-400 shadow-lg shadow-amber-400" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", { className: "absolute -bottom-1.5 -left-1.5 w-4 h-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", { className: "absolute -bottom-1.5 -right-1.5 w-4 h-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between px-2.5 py-1 mb-2 rounded-xl bg-purple-950/80 border border-amber-400/30 text-[11px] font-bold text-purple-200 shadow-inner",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-pink-300 font-extrabold uppercase tracking-wider",
							children: "9 Fixed Paylines"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2 text-[10px] sm:text-[11px]",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							className: "text-yellow-300 font-extrabold flex items-center gap-0.5",
							children: "⭐ WILD"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-cyan-300 font-extrabold flex items-center gap-0.5",
							children: "💎 SCATTER GEM"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "relative grid grid-cols-5 gap-1.5 sm:gap-2.5 bg-[#06010d] p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl border border-purple-900/60 shadow-inner",
					children: [[
						0,
						1,
						2,
						3,
						4
					].map((colIndex) => {
						const columnSymbols = [
							0,
							1,
							2
						].map((rowIndex) => grid[rowIndex]?.[colIndex] || "strawberry");
						return /* @__PURE__ */ _jsxDEV(Reel, {
							columnIndex: colIndex,
							symbols: columnSymbols,
							isSpinning: spinningColumns[colIndex],
							evaluation
						}, `reel-col-${colIndex}`, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 15
						}, this);
					}), !isAnySpinning && evaluation && /* @__PURE__ */ _jsxDEV(WinLineOverlay, { winningLines: evaluation.lineWins }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBRWxCLFNBQVMsWUFBWTtBQUNyQixTQUFTLHNCQUFzQjs7O0FBUy9CLE9BQU8sTUFBTSxZQUFxQyxFQUNoRCxNQUNBLGlCQUNBLFlBQ0Esa0JBQ0k7Q0FDSixNQUFNLGFBQWEsY0FBYyxXQUFXLFlBQVk7Q0FDeEQsTUFBTSxnQkFBZ0IsZ0JBQWdCLEtBQUssT0FBTztDQUVsRCxPQUNFLHdCQUFDLE9BQUQ7RUFDRSxXQUFXLHVGQUNULGFBQWEseUJBQXlCO1lBSXhDLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO2FBQWY7SUFFRSx3QkFBQyxPQUFELEVBQUssV0FBVSxrSEFBbUg7Ozs7O0lBR2xJLHdCQUFDLE9BQUQsRUFBSyxXQUFVLDJGQUE0Rjs7Ozs7SUFDM0csd0JBQUMsT0FBRCxFQUFLLFdBQVUsNEZBQTZGOzs7OztJQUM1Ryx3QkFBQyxPQUFELEVBQUssV0FBVSw0RkFBNkY7Ozs7O0lBQzVHLHdCQUFDLE9BQUQsRUFBSyxXQUFVLDZGQUE4Rjs7Ozs7SUFHN0csd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmLENBQ0Usd0JBQUMsUUFBRCxFQUFNLFdBQVUsbURBQW9EOzs7O2dCQUNwRSx3QkFBQyxRQUFEO09BQU0sV0FBVTtpQkFBd0Q7TUFFbEU7Ozs7Y0FDSDs7Ozs7ZUFDTCx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBZixDQUNFLHdCQUFDLFFBQUQ7T0FBTSxXQUFVO2lCQUEyRDtNQUFZOzs7O2dCQUN2Rix3QkFBQyxRQUFEO09BQU0sV0FBVTtpQkFBeUQ7TUFBb0I7Ozs7Y0FDMUY7Ozs7O2FBQ0Y7Ozs7OztJQUdMLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWYsQ0FDRztNQUFDO01BQUc7TUFBRztNQUFHO01BQUc7S0FBQyxDQUFDLENBQUMsS0FBSyxhQUFhO01BQ2pDLE1BQU0sZ0JBQWdCO09BQUM7T0FBRztPQUFHO01BQUMsQ0FBQyxDQUFDLEtBQUssYUFBYSxLQUFLLFNBQVMsR0FBRyxhQUFhLFlBQVk7TUFDNUYsT0FDRSx3QkFBQyxNQUFEO09BRUUsYUFBYTtPQUNiLFNBQVM7T0FDVCxZQUFZLGdCQUFnQjtPQUNoQjtNQUNiLEdBTE0sWUFBWTs7OzthQUtsQjtLQUVMLENBQUMsR0FHQSxDQUFDLGlCQUFpQixjQUNqQix3QkFBQyxnQkFBRCxFQUFnQixjQUFjLFdBQVcsU0FBVzs7OzthQUVuRDs7Ozs7O0dBQ0Y7Ozs7OztDQUNGOzs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIlJlZWxHcmlkLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3ltYm9sSWQsIFNwaW5FdmFsdWF0aW9uIH0gZnJvbSAnLi4vdHlwZXMvZ2FtZSc7XG5pbXBvcnQgeyBSZWVsIH0gZnJvbSAnLi9SZWVsJztcbmltcG9ydCB7IFdpbkxpbmVPdmVybGF5IH0gZnJvbSAnLi9XaW5MaW5lT3ZlcmxheSc7XG5cbmludGVyZmFjZSBSZWVsR3JpZFByb3BzIHtcbiAgZ3JpZDogU3ltYm9sSWRbXVtdO1xuICBzcGlubmluZ0NvbHVtbnM6IGJvb2xlYW5bXTtcbiAgZXZhbHVhdGlvbjogU3BpbkV2YWx1YXRpb24gfCBudWxsO1xuICBzY3JlZW5TaGFrZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFJlZWxHcmlkOiBSZWFjdC5GQzxSZWVsR3JpZFByb3BzPiA9ICh7XG4gIGdyaWQsXG4gIHNwaW5uaW5nQ29sdW1ucyxcbiAgZXZhbHVhdGlvbixcbiAgc2NyZWVuU2hha2Vcbn0pID0+IHtcbiAgY29uc3QgaXNMYXJnZVdpbiA9IGV2YWx1YXRpb24gJiYgZXZhbHVhdGlvbi5pc0JpZ1dpbiAmJiBzY3JlZW5TaGFrZTtcbiAgY29uc3QgaXNBbnlTcGlubmluZyA9IHNwaW5uaW5nQ29sdW1ucy5zb21lKEJvb2xlYW4pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgdy1mdWxsIG1heC13LXhsIG14LWF1dG8gcHgtMiBzbTpweC00IHB5LTEgc2VsZWN0LW5vbmUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtcbiAgICAgICAgaXNMYXJnZVdpbiA/ICdhbmltYXRlLXNjcmVlbi1zaGFrZScgOiAnJ1xuICAgICAgfWB9XG4gICAgPlxuICAgICAgey8qIE91dGVyIDNEIE1ldGFsbGljIEdvbGQgJiBOZW9uIEJvcmRlciBGcmFtZSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC0yeGwgc206cm91bmRlZC0zeGwgcC0yLjUgc206cC00IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1bIzI4MDU0NV0gdmlhLVsjMTYwMzJhXSB0by1bIzBhMDExNF0gYm9yZGVyLTIgYm9yZGVyLWFtYmVyLTQwMCBzaGFkb3ctMnhsIHNoYWRvdy1waW5rLTk1MC82MCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgey8qIFN1YnRsZSBnbGFzcyByZWZsZWN0aW9uIHNoZWVuIGFjcm9zcyBjYWJpbmV0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMjQgLWxlZnQtMjAgdy04MCBoLTQwIGJnLWdyYWRpZW50LXRvLWIgZnJvbS13aGl0ZS8xMCB0by10cmFuc3BhcmVudCByb3RhdGUtMTIgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG5cbiAgICAgICAgey8qIE5lb24gY29ybmVyIG9ybmFtZW50cyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEuNSAtbGVmdC0xLjUgdy00IGgtNCByb3VuZGVkLWZ1bGwgYmctYW1iZXItNDAwIHNoYWRvdy1sZyBzaGFkb3ctYW1iZXItNDAwXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEuNSAtcmlnaHQtMS41IHctNCBoLTQgcm91bmRlZC1mdWxsIGJnLWFtYmVyLTQwMCBzaGFkb3ctbGcgc2hhZG93LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS0xLjUgLWxlZnQtMS41IHctNCBoLTQgcm91bmRlZC1mdWxsIGJnLXBpbmstNTAwIHNoYWRvdy1sZyBzaGFkb3ctcGluay01MDBcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1ib3R0b20tMS41IC1yaWdodC0xLjUgdy00IGgtNCByb3VuZGVkLWZ1bGwgYmctcGluay01MDAgc2hhZG93LWxnIHNoYWRvdy1waW5rLTUwMFwiIC8+XG5cbiAgICAgICAgey8qIE1hcnF1ZWUgSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0yLjUgcHktMSBtYi0yIHJvdW5kZWQteGwgYmctcHVycGxlLTk1MC84MCBib3JkZXIgYm9yZGVyLWFtYmVyLTQwMC8zMCB0ZXh0LVsxMXB4XSBmb250LWJvbGQgdGV4dC1wdXJwbGUtMjAwIHNoYWRvdy1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC00MDAgYW5pbWF0ZS1waW5nXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcGluay0zMDAgZm9udC1leHRyYWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgIDkgRml4ZWQgUGF5bGluZXNcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtWzEwcHhdIHNtOnRleHQtWzExcHhdXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy0zMDAgZm9udC1leHRyYWJvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTAuNVwiPuKtkCBXSUxEPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jeWFuLTMwMCBmb250LWV4dHJhYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMC41XCI+8J+SjiBTQ0FUVEVSIEdFTTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDUgVmVydGljYWwgUmVlbHMgR3JpZCB3aXRoIFJlbGF0aXZlIENvbnRhaW5lciBmb3IgV2luTGluZU92ZXJsYXkgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JpZCBncmlkLWNvbHMtNSBnYXAtMS41IHNtOmdhcC0yLjUgYmctWyMwNjAxMGRdIHAtMS41IHNtOnAtMi41IHJvdW5kZWQteGwgc206cm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1wdXJwbGUtOTAwLzYwIHNoYWRvdy1pbm5lclwiPlxuICAgICAgICAgIHtbMCwgMSwgMiwgMywgNF0ubWFwKChjb2xJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uU3ltYm9scyA9IFswLCAxLCAyXS5tYXAoKHJvd0luZGV4KSA9PiBncmlkW3Jvd0luZGV4XT8uW2NvbEluZGV4XSB8fCAnc3RyYXdiZXJyeScpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFJlZWxcbiAgICAgICAgICAgICAgICBrZXk9e2ByZWVsLWNvbC0ke2NvbEluZGV4fWB9XG4gICAgICAgICAgICAgICAgY29sdW1uSW5kZXg9e2NvbEluZGV4fVxuICAgICAgICAgICAgICAgIHN5bWJvbHM9e2NvbHVtblN5bWJvbHN9XG4gICAgICAgICAgICAgICAgaXNTcGlubmluZz17c3Bpbm5pbmdDb2x1bW5zW2NvbEluZGV4XX1cbiAgICAgICAgICAgICAgICBldmFsdWF0aW9uPXtldmFsdWF0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cblxuICAgICAgICAgIHsvKiBJbnRlcmFjdGl2ZSBHbG93aW5nIFdpbi1MaW5lIFZlY3RvciBTVkcgT3ZlcmxheSAqL31cbiAgICAgICAgICB7IWlzQW55U3Bpbm5pbmcgJiYgZXZhbHVhdGlvbiAmJiAoXG4gICAgICAgICAgICA8V2luTGluZU92ZXJsYXkgd2lubmluZ0xpbmVzPXtldmFsdWF0aW9uLmxpbmVXaW5zfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19