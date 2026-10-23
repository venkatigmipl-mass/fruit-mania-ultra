const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { isWinningCell } from "/src/utils/gameLogic.ts";
import { FruitSymbol3D } from "/src/components/FruitSymbol3D.tsx";
var _jsxFileName = "/app/applet/src/components/Reel.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
const BLUR_SYMBOLS = [
	"strawberry",
	"lemon",
	"watermelon",
	"wild_star",
	"grapes",
	"scatter_gem",
	"orange",
	"pineapple",
	"kiwi",
	"strawberry"
];
export const Reel = ({ columnIndex, symbols, isSpinning, evaluation }) => {
	// Settle glow flash when the reel stops spinning
	const [settleGlow, setSettleGlow] = useState(false);
	useEffect(() => {
		if (!isSpinning) {
			setSettleGlow(true);
			const timer = setTimeout(() => setSettleGlow(false), 500);
			return () => clearTimeout(timer);
		}
	}, [isSpinning]);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: `relative flex flex-col gap-1.5 sm:gap-2.5 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${isSpinning ? "bg-purple-950/40 ring-1 ring-pink-500/40" : "bg-gradient-to-b from-[#19042e] via-[#100220] to-[#0c0117] border border-purple-800/40"} ${settleGlow ? "ring-2 ring-amber-300 shadow-lg shadow-amber-400/30" : ""}`,
		children: [isSpinning ? /* @__PURE__ */ _jsxDEV(
			"div",
			/* Vertical Spinning Blur with High Speed Realistic Strip */
			{
				className: "h-[220px] sm:h-[280px] relative flex flex-col items-center justify-around overflow-hidden animate-reel-blur py-1.5",
				children: BLUR_SYMBOLS.map((symId, idx) => /* @__PURE__ */ _jsxDEV("div", {
					className: "opacity-75 filter blur-[1.5px] transform scale-90 my-1",
					children: /* @__PURE__ */ _jsxDEV(FruitSymbol3D, {
						id: symId,
						size: 42
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 15
					}, this)
				}, idx, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 13
				}, this))
			},
			void 0,
			false,
			{
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 9
			},
			this
		) : 
		/* 3 Visible Final Symbols with 3D Graphics & Settling Bounce */
		symbols.map((symbolId, rowIndex) => {
			const isWinning = isWinningCell(rowIndex, columnIndex, evaluation);
			return /* @__PURE__ */ _jsxDEV("div", {
				className: `relative h-[68px] sm:h-[88px] rounded-lg sm:rounded-xl flex flex-col items-center justify-center p-1 border transition-all duration-300 animate-reel-bounce ${isWinning ? "border-amber-400 bg-gradient-to-tr from-amber-500/30 via-pink-500/25 to-purple-600/35 shadow-lg shadow-amber-400/50 ring-2 ring-amber-300 animate-win-cell z-10" : "border-purple-800/30 hover:border-purple-600/40 bg-gradient-to-b from-purple-950/20 to-black/30"}`,
				children: [
					/* @__PURE__ */ _jsxDEV(FruitSymbol3D, {
						id: symbolId,
						size: 48,
						isWinning
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 15
					}, this),
					symbolId === "wild_star" && /* @__PURE__ */ _jsxDEV("div", {
						className: "absolute top-1 right-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-yellow-950 text-[7px] sm:text-[8px] font-black px-1 rounded shadow-sm",
						children: "WILD"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 17
					}, this),
					symbolId === "scatter_gem" && /* @__PURE__ */ _jsxDEV("div", {
						className: "absolute top-1 right-1 bg-gradient-to-r from-cyan-400 to-sky-500 text-cyan-950 text-[7px] sm:text-[8px] font-black px-1 rounded shadow-sm",
						children: "BONUS"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 17
					}, this),
					isWinning && /* @__PURE__ */ _jsxDEV("div", {
						className: "absolute -top-1 -right-1 text-xs animate-ping",
						children: "✨"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 17
					}, this)
				]
			}, `reel-${columnIndex}-row-${rowIndex}`, true, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 13
			}, this);
		}), settleGlow && /* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-amber-300/20 to-transparent pointer-events-none animate-pulse" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 106,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLFVBQVUsaUJBQWlCO0FBRTNDLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMscUJBQXFCOzs7QUFTOUIsTUFBTSxlQUEyQjtDQUMvQjtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNGO0FBRUEsT0FBTyxNQUFNLFFBQTZCLEVBQ3hDLGFBQ0EsU0FDQSxZQUNBLGlCQUNJOztDQUVKLE1BQU0sQ0FBQyxZQUFZLGlCQUFpQixTQUFTLEtBQUs7Q0FFbEQsZ0JBQWdCO0VBQ2QsSUFBSSxDQUFDLFlBQVk7R0FDZixjQUFjLElBQUk7R0FDbEIsTUFBTSxRQUFRLGlCQUFpQixjQUFjLEtBQUssR0FBRyxHQUFHO0dBQ3hELGFBQWEsYUFBYSxLQUFLO0VBQ2pDO0NBQ0YsR0FBRyxDQUFDLFVBQVUsQ0FBQztDQUVmLE9BQ0Usd0JBQUMsT0FBRDtFQUNFLFdBQVcsbUhBQ1QsYUFDSSw2Q0FDQSx5RkFDTCxHQUFHLGFBQWEsd0RBQXdEO1lBTDNFLENBT0csYUFFQztHQUFDOztHQUFEO0lBQUssV0FBVTtjQUNaLGFBQWEsS0FBSyxPQUFPLFFBQ3hCLHdCQUFDLE9BQUQ7S0FBZSxXQUFVO2VBQ3ZCLHdCQUFDLGVBQUQ7TUFBZSxJQUFJO01BQU8sTUFBTTtLQUFLOzs7OztJQUNsQyxHQUZLOzs7O1dBRUwsQ0FDTjtHQUNFOzs7Ozs7Ozs7OztFQUdMLFFBQVEsS0FBSyxVQUFVLGFBQWE7R0FDbEMsTUFBTSxZQUFZLGNBQWMsVUFBVSxhQUFhLFVBQVU7R0FFakUsT0FDRSx3QkFBQyxPQUFEO0lBRUUsV0FBVywrSkFDVCxZQUNJLG9LQUNBO2NBTFI7S0FTRSx3QkFBQyxlQUFEO01BQ0UsSUFBSTtNQUNKLE1BQU07TUFDSztLQUNaOzs7OztLQUdBLGFBQWEsZUFDWix3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBa0o7S0FFNUo7Ozs7O0tBRU4sYUFBYSxpQkFDWix3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBNEk7S0FFdEo7Ozs7O0tBSU4sYUFDQyx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBZ0Q7S0FFMUQ7Ozs7O0lBRUo7TUFoQ0UsUUFBUSxZQUFZLE9BQU87Ozs7VUFnQzdCO0VBRVQsQ0FBQyxHQUlGLGNBQ0Msd0JBQUMsT0FBRCxFQUFLLFdBQVUsdUhBQXdIOzs7O1VBRXRJOzs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJSZWVsLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN5bWJvbElkLCBTcGluRXZhbHVhdGlvbiB9IGZyb20gJy4uL3R5cGVzL2dhbWUnO1xuaW1wb3J0IHsgaXNXaW5uaW5nQ2VsbCB9IGZyb20gJy4uL3V0aWxzL2dhbWVMb2dpYyc7XG5pbXBvcnQgeyBGcnVpdFN5bWJvbDNEIH0gZnJvbSAnLi9GcnVpdFN5bWJvbDNEJztcblxuaW50ZXJmYWNlIFJlZWxQcm9wcyB7XG4gIGNvbHVtbkluZGV4OiBudW1iZXI7XG4gIHN5bWJvbHM6IFN5bWJvbElkW107IC8vIDMgdmlzaWJsZSBzeW1ib2xzIGZvciB0aGlzIGNvbHVtblxuICBpc1NwaW5uaW5nOiBib29sZWFuO1xuICBldmFsdWF0aW9uOiBTcGluRXZhbHVhdGlvbiB8IG51bGw7XG59XG5cbmNvbnN0IEJMVVJfU1lNQk9MUzogU3ltYm9sSWRbXSA9IFtcbiAgJ3N0cmF3YmVycnknLFxuICAnbGVtb24nLFxuICAnd2F0ZXJtZWxvbicsXG4gICd3aWxkX3N0YXInLFxuICAnZ3JhcGVzJyxcbiAgJ3NjYXR0ZXJfZ2VtJyxcbiAgJ29yYW5nZScsXG4gICdwaW5lYXBwbGUnLFxuICAna2l3aScsXG4gICdzdHJhd2JlcnJ5J1xuXTtcblxuZXhwb3J0IGNvbnN0IFJlZWw6IFJlYWN0LkZDPFJlZWxQcm9wcz4gPSAoe1xuICBjb2x1bW5JbmRleCxcbiAgc3ltYm9scyxcbiAgaXNTcGlubmluZyxcbiAgZXZhbHVhdGlvblxufSkgPT4ge1xuICAvLyBTZXR0bGUgZ2xvdyBmbGFzaCB3aGVuIHRoZSByZWVsIHN0b3BzIHNwaW5uaW5nXG4gIGNvbnN0IFtzZXR0bGVHbG93LCBzZXRTZXR0bGVHbG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNTcGlubmluZykge1xuICAgICAgc2V0U2V0dGxlR2xvdyh0cnVlKTtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBzZXRTZXR0bGVHbG93KGZhbHNlKSwgNTAwKTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH1cbiAgfSwgW2lzU3Bpbm5pbmddKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggZmxleC1jb2wgZ2FwLTEuNSBzbTpnYXAtMi41IHJvdW5kZWQteGwgc206cm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICBpc1NwaW5uaW5nXG4gICAgICAgICAgPyAnYmctcHVycGxlLTk1MC80MCByaW5nLTEgcmluZy1waW5rLTUwMC80MCdcbiAgICAgICAgICA6ICdiZy1ncmFkaWVudC10by1iIGZyb20tWyMxOTA0MmVdIHZpYS1bIzEwMDIyMF0gdG8tWyMwYzAxMTddIGJvcmRlciBib3JkZXItcHVycGxlLTgwMC80MCdcbiAgICAgIH0gJHtzZXR0bGVHbG93ID8gJ3JpbmctMiByaW5nLWFtYmVyLTMwMCBzaGFkb3ctbGcgc2hhZG93LWFtYmVyLTQwMC8zMCcgOiAnJ31gfVxuICAgID5cbiAgICAgIHtpc1NwaW5uaW5nID8gKFxuICAgICAgICAvKiBWZXJ0aWNhbCBTcGlubmluZyBCbHVyIHdpdGggSGlnaCBTcGVlZCBSZWFsaXN0aWMgU3RyaXAgKi9cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsyMjBweF0gc206aC1bMjgwcHhdIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kIG92ZXJmbG93LWhpZGRlbiBhbmltYXRlLXJlZWwtYmx1ciBweS0xLjVcIj5cbiAgICAgICAgICB7QkxVUl9TWU1CT0xTLm1hcCgoc3ltSWQsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwib3BhY2l0eS03NSBmaWx0ZXIgYmx1ci1bMS41cHhdIHRyYW5zZm9ybSBzY2FsZS05MCBteS0xXCI+XG4gICAgICAgICAgICAgIDxGcnVpdFN5bWJvbDNEIGlkPXtzeW1JZH0gc2l6ZT17NDJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICAvKiAzIFZpc2libGUgRmluYWwgU3ltYm9scyB3aXRoIDNEIEdyYXBoaWNzICYgU2V0dGxpbmcgQm91bmNlICovXG4gICAgICAgIHN5bWJvbHMubWFwKChzeW1ib2xJZCwgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpc1dpbm5pbmcgPSBpc1dpbm5pbmdDZWxsKHJvd0luZGV4LCBjb2x1bW5JbmRleCwgZXZhbHVhdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2ByZWVsLSR7Y29sdW1uSW5kZXh9LXJvdy0ke3Jvd0luZGV4fWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGgtWzY4cHhdIHNtOmgtWzg4cHhdIHJvdW5kZWQtbGcgc206cm91bmRlZC14bCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTEgYm9yZGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBhbmltYXRlLXJlZWwtYm91bmNlICR7XG4gICAgICAgICAgICAgICAgaXNXaW5uaW5nXG4gICAgICAgICAgICAgICAgICA/ICdib3JkZXItYW1iZXItNDAwIGJnLWdyYWRpZW50LXRvLXRyIGZyb20tYW1iZXItNTAwLzMwIHZpYS1waW5rLTUwMC8yNSB0by1wdXJwbGUtNjAwLzM1IHNoYWRvdy1sZyBzaGFkb3ctYW1iZXItNDAwLzUwIHJpbmctMiByaW5nLWFtYmVyLTMwMCBhbmltYXRlLXdpbi1jZWxsIHotMTAnXG4gICAgICAgICAgICAgICAgICA6ICdib3JkZXItcHVycGxlLTgwMC8zMCBob3Zlcjpib3JkZXItcHVycGxlLTYwMC80MCBiZy1ncmFkaWVudC10by1iIGZyb20tcHVycGxlLTk1MC8yMCB0by1ibGFjay8zMCdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiAzRCBIaWdoLUdsb3NzIEZydWl0IFN5bWJvbCAqL31cbiAgICAgICAgICAgICAgPEZydWl0U3ltYm9sM0RcbiAgICAgICAgICAgICAgICBpZD17c3ltYm9sSWR9XG4gICAgICAgICAgICAgICAgc2l6ZT17NDh9XG4gICAgICAgICAgICAgICAgaXNXaW5uaW5nPXtpc1dpbm5pbmd9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgey8qIFNwZWNpYWwgQmFkZ2VzICovfVxuICAgICAgICAgICAgICB7c3ltYm9sSWQgPT09ICd3aWxkX3N0YXInICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xIHJpZ2h0LTEgYmctZ3JhZGllbnQtdG8tciBmcm9tLXllbGxvdy00MDAgdG8tYW1iZXItNTAwIHRleHQteWVsbG93LTk1MCB0ZXh0LVs3cHhdIHNtOnRleHQtWzhweF0gZm9udC1ibGFjayBweC0xIHJvdW5kZWQgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICBXSUxEXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtzeW1ib2xJZCA9PT0gJ3NjYXR0ZXJfZ2VtJyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMSByaWdodC0xIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1jeWFuLTQwMCB0by1za3ktNTAwIHRleHQtY3lhbi05NTAgdGV4dC1bN3B4XSBzbTp0ZXh0LVs4cHhdIGZvbnQtYmxhY2sgcHgtMSByb3VuZGVkIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgQk9OVVNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogU3BhcmtsaW5nIHdpbiBwYXJ0aWNsZSAqL31cbiAgICAgICAgICAgICAge2lzV2lubmluZyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEgLXJpZ2h0LTEgdGV4dC14cyBhbmltYXRlLXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgIOKcqFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICl9XG5cbiAgICAgIHsvKiBTZXR0bGUgbGlnaHQgd2F2ZSBvdmVybGF5ICovfVxuICAgICAge3NldHRsZUdsb3cgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXRyYW5zcGFyZW50IHZpYS1hbWJlci0zMDAvMjAgdG8tdHJhbnNwYXJlbnQgcG9pbnRlci1ldmVudHMtbm9uZSBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19