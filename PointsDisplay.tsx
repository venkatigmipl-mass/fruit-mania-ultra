const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=7c623386";
import { sound } from "/src/services/audio.ts";
var _jsxFileName = "/app/applet/src/components/PointsDisplay.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const PointsDisplay = ({ balance, onOpenRefill }) => {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "flex flex-col items-center select-none",
		children: [/* @__PURE__ */ _jsxDEV("button", {
			onClick: () => {
				sound.playButtonClick();
				onOpenRefill();
			},
			title: "View Balance & Free Refill Booster",
			className: "group relative flex items-center gap-2 bg-gradient-to-r from-[#2a0845] via-[#3b0d5e] to-[#2a0845] border-2 border-amber-400/80 hover:border-amber-300 rounded-2xl py-1.5 px-3 sm:px-4 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-200 flex items-center justify-center text-xs sm:text-sm font-black text-amber-950 shadow-md shadow-amber-400/50",
					children: "🪙"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col text-left",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-[9px] uppercase tracking-wider text-amber-300/80 font-bold leading-none",
						children: "Virtual Points"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "text-base sm:text-lg font-black text-amber-300 tracking-wide leading-tight group-hover:text-yellow-200",
						children: balance.toLocaleString()
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-0.5 bg-amber-500/20 border border-amber-400/50 px-2 py-0.5 rounded-lg text-[10px] font-black text-amber-300 group-hover:bg-amber-500/30",
					children: [/* @__PURE__ */ _jsxDEV(Sparkles, { className: "w-3 h-3 text-amber-400" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: "BOOST" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("span", {
			className: "text-[9px] sm:text-[10px] font-black tracking-wider text-pink-300/90 uppercase mt-1 bg-pink-950/60 px-2.5 py-0.5 rounded-full border border-pink-500/30",
			children: "FREE GAME • VIRTUAL POINTS ONLY"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZ0JBQXVCO0FBQ2hDLFNBQVMsYUFBYTs7O0FBT3RCLE9BQU8sTUFBTSxpQkFBK0MsRUFBRSxTQUFTLG1CQUFtQjtDQUN4RixPQUNFLHdCQUFDLE9BQUQ7RUFBSyxXQUFVO1lBQWYsQ0FDRSx3QkFBQyxVQUFEO0dBQ0UsZUFBZTtJQUNiLE1BQU0sZ0JBQWdCO0lBQ3RCLGFBQWE7R0FDZjtHQUNBLE9BQU07R0FDTixXQUFVO2FBTlo7SUFTRSx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUE4TDtJQUV4TTs7Ozs7SUFFTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmLENBQ0Usd0JBQUMsUUFBRDtNQUFNLFdBQVU7Z0JBQStFO0tBRXpGOzs7O2VBQ04sd0JBQUMsUUFBRDtNQUFNLFdBQVU7Z0JBQ2IsUUFBUSxlQUFlO0tBQ3BCOzs7O2FBQ0g7Ozs7OztJQUdMLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWYsQ0FDRSx3QkFBQyxVQUFELEVBQVUsV0FBVSx5QkFBMEI7Ozs7ZUFDOUMsd0JBQUMsUUFBRCxZQUFNLFFBQVc7Ozs7YUFDZDs7Ozs7O0dBQ0M7Ozs7O1lBR1Isd0JBQUMsUUFBRDtHQUFNLFdBQVU7YUFBMEo7RUFFcEs7Ozs7VUFDSDs7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiUG9pbnRzRGlzcGxheS50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNwYXJrbGVzLCBDb2lucyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBzb3VuZCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1ZGlvJztcblxuaW50ZXJmYWNlIFBvaW50c0Rpc3BsYXlQcm9wcyB7XG4gIGJhbGFuY2U6IG51bWJlcjtcbiAgb25PcGVuUmVmaWxsOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUG9pbnRzRGlzcGxheTogUmVhY3QuRkM8UG9pbnRzRGlzcGxheVByb3BzPiA9ICh7IGJhbGFuY2UsIG9uT3BlblJlZmlsbCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzZWxlY3Qtbm9uZVwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgb25PcGVuUmVmaWxsKCk7XG4gICAgICAgIH19XG4gICAgICAgIHRpdGxlPVwiVmlldyBCYWxhbmNlICYgRnJlZSBSZWZpbGwgQm9vc3RlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bIzJhMDg0NV0gdmlhLVsjM2IwZDVlXSB0by1bIzJhMDg0NV0gYm9yZGVyLTIgYm9yZGVyLWFtYmVyLTQwMC84MCBob3Zlcjpib3JkZXItYW1iZXItMzAwIHJvdW5kZWQtMnhsIHB5LTEuNSBweC0zIHNtOnB4LTQgc2hhZG93LWxnIHNoYWRvdy1hbWJlci01MDAvMjAgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgID5cbiAgICAgICAgey8qIEdsb3dpbmcgQ29pbiBJY29uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNiBoLTYgc206dy03IHNtOmgtNyByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLXRyIGZyb20tYW1iZXItNDAwIHRvLXllbGxvdy0yMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC14cyBzbTp0ZXh0LXNtIGZvbnQtYmxhY2sgdGV4dC1hbWJlci05NTAgc2hhZG93LW1kIHNoYWRvdy1hbWJlci00MDAvNTBcIj5cbiAgICAgICAgICDwn6qZXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWFtYmVyLTMwMC84MCBmb250LWJvbGQgbGVhZGluZy1ub25lXCI+XG4gICAgICAgICAgICBWaXJ0dWFsIFBvaW50c1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyBmb250LWJsYWNrIHRleHQtYW1iZXItMzAwIHRyYWNraW5nLXdpZGUgbGVhZGluZy10aWdodCBncm91cC1ob3Zlcjp0ZXh0LXllbGxvdy0yMDBcIj5cbiAgICAgICAgICAgIHtiYWxhbmNlLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRnJlZSBSZWZpbGwgQmFkZ2UgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTAuNSBiZy1hbWJlci01MDAvMjAgYm9yZGVyIGJvcmRlci1hbWJlci00MDAvNTAgcHgtMiBweS0wLjUgcm91bmRlZC1sZyB0ZXh0LVsxMHB4XSBmb250LWJsYWNrIHRleHQtYW1iZXItMzAwIGdyb3VwLWhvdmVyOmJnLWFtYmVyLTUwMC8zMFwiPlxuICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICA8c3Bhbj5CT09TVDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgey8qIFByb21pbmVudCBTYWZldHkgUmVxdWlyZW1lbnQgTGFiZWwgKi99XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHNtOnRleHQtWzEwcHhdIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXIgdGV4dC1waW5rLTMwMC85MCB1cHBlcmNhc2UgbXQtMSBiZy1waW5rLTk1MC82MCBweC0yLjUgcHktMC41IHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXBpbmstNTAwLzMwXCI+XG4gICAgICAgIEZSRUUgR0FNRSDigKIgVklSVFVBTCBQT0lOVFMgT05MWVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==