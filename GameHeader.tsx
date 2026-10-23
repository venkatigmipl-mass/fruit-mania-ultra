const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { Volume2, VolumeX, Settings, HelpCircle, History, Gift, Zap, FolderArchive } from "/node_modules/.vite/deps/lucide-react.js?v=7c623386";
import { PointsDisplay } from "/src/components/PointsDisplay.tsx";
import { sound } from "/src/services/audio.ts";
var _jsxFileName = "/app/applet/src/components/GameHeader.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const GameHeader = ({ balance, soundEnabled, onToggleSound, turboSpeed, onToggleTurbo, canClaimDaily, dailyRemainingMs, onOpenDaily, onOpenPaytable, onOpenHistory, onOpenSettings, onOpenRefill, onOpenExport }) => {
	const formatCountdown = (ms) => {
		const totalSecs = Math.floor(ms / 1e3);
		const hours = Math.floor(totalSecs / 3600);
		const mins = Math.floor(totalSecs % 3600 / 60);
		const secs = totalSecs % 60;
		return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
	};
	return /* @__PURE__ */ _jsxDEV("header", {
		className: "w-full bg-gradient-to-b from-[#180429]/95 via-[#10021c]/90 to-[#080114]/85 backdrop-blur-md border-b-2 border-amber-400/40 px-3 py-2 sm:px-5 sticky top-0 z-30 select-none shadow-lg shadow-purple-950/40",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-4xl mx-auto flex items-center justify-between gap-2 flex-wrap",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "relative w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-pink-600 via-purple-600 to-amber-500 flex items-center justify-center shadow-lg shadow-pink-500/30 border-2 border-amber-300 overflow-hidden shrink-0",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							className: "text-xl sm:text-2xl animate-float",
							children: "🍓"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", { className: "absolute -top-1 -right-1 w-3.5 h-3.5 bg-yellow-300 rounded-full animate-ping opacity-75" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ _jsxDEV("h1", {
							className: "text-base sm:text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 to-yellow-400 drop-shadow-md uppercase",
							children: "FRUIT MANIA"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-600 to-amber-500 text-white border border-yellow-300 shadow-xs",
							children: "ULTRA"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						className: "text-[10px] sm:text-[11px] font-bold text-amber-300/80 flex items-center gap-1",
						children: [/* @__PURE__ */ _jsxDEV("span", { className: "inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 15
						}, this), "9 Paylines • 2x-10x Multipliers • Bonus Gem"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV(PointsDisplay, {
					balance,
					onOpenRefill
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-1 sm:gap-1.5",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								sound.playButtonClick();
								onOpenDaily();
							},
							title: canClaimDaily ? "Daily Bonus Ready!" : `Next claim in ${formatCountdown(dailyRemainingMs)}`,
							className: `relative p-2 rounded-xl transition-all cursor-pointer ${canClaimDaily ? "bg-gradient-to-tr from-pink-600 to-amber-500 text-white shadow-lg shadow-pink-500/40 animate-bounce border border-yellow-300" : "bg-purple-900/50 hover:bg-purple-800/60 text-purple-300 border border-purple-700/40"}`,
							children: [/* @__PURE__ */ _jsxDEV(Gift, { className: "w-4 h-4 sm:w-5 sm:h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 13
							}, this), canClaimDaily && /* @__PURE__ */ _jsxDEV("span", { className: "absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								sound.playButtonClick();
								onToggleTurbo();
							},
							title: turboSpeed ? "Turbo Mode ON (Fast spins)" : "Turbo Mode OFF",
							className: `p-2 rounded-xl transition-all cursor-pointer border ${turboSpeed ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-sm shadow-amber-400/30" : "bg-purple-900/50 hover:bg-purple-800/60 border-purple-700/40 text-purple-300"}`,
							children: /* @__PURE__ */ _jsxDEV(Zap, { className: `w-4 h-4 sm:w-5 sm:h-5 ${turboSpeed ? "fill-amber-400 text-amber-400" : ""}` }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								onToggleSound();
								if (!soundEnabled) sound.playButtonClick();
							},
							title: soundEnabled ? "Mute Sounds" : "Unmute Sounds",
							className: "p-2 rounded-xl bg-purple-900/50 hover:bg-purple-800/60 text-purple-300 border border-purple-700/40 transition-all cursor-pointer",
							children: soundEnabled ? /* @__PURE__ */ _jsxDEV(Volume2, { className: "w-4 h-4 sm:w-5 sm:h-5 text-pink-400" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 15
							}, this) : /* @__PURE__ */ _jsxDEV(VolumeX, { className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-400" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								sound.playButtonClick();
								onOpenHistory();
							},
							title: "Spin History & Player Progression",
							className: "p-2 rounded-xl bg-purple-900/50 hover:bg-purple-800/60 text-purple-300 border border-purple-700/40 transition-all cursor-pointer",
							children: /* @__PURE__ */ _jsxDEV(History, { className: "w-4 h-4 sm:w-5 sm:h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								sound.playButtonClick();
								onOpenPaytable();
							},
							title: "9 Paylines & Game Rules",
							className: "p-2 rounded-xl bg-purple-900/50 hover:bg-purple-800/60 text-purple-300 border border-purple-700/40 transition-all cursor-pointer",
							children: /* @__PURE__ */ _jsxDEV(HelpCircle, { className: "w-4 h-4 sm:w-5 sm:h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								sound.playButtonClick();
								onOpenExport();
							},
							title: "Download Complete Project (ZIP) & Android APK Guide",
							className: "p-2 rounded-xl bg-gradient-to-tr from-amber-500/20 to-purple-800/40 hover:from-amber-500/40 hover:to-purple-800/60 text-amber-300 border border-amber-400/50 transition-all cursor-pointer shadow-sm",
							children: /* @__PURE__ */ _jsxDEV(FolderArchive, { className: "w-4 h-4 sm:w-5 sm:h-5 text-amber-300" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 160,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								sound.playButtonClick();
								onOpenSettings();
							},
							title: "Game Settings",
							className: "p-2 rounded-xl bg-purple-900/50 hover:bg-purple-800/60 text-purple-300 border border-purple-700/40 transition-all cursor-pointer",
							children: /* @__PURE__ */ _jsxDEV(Settings, { className: "w-4 h-4 sm:w-5 sm:h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 172,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUFlO1FBQ2IsTUFBTSxnQkFBZ0I7UUFDdEIsZUFBZTtPQUNqQjtPQUNBLE9BQU07T0FDTixXQUFVO2lCQUVWLHdCQUFDLFlBQUQsRUFBWSxXQUFVLHdCQUF5Qjs7Ozs7TUFDekM7Ozs7O01BR1Isd0JBQUMsVUFBRDtPQUNFLGVBQWU7UUFDYixNQUFNLGdCQUFnQjtRQUN0QixhQUFhO09BQ2Y7T0FDQSxPQUFNO09BQ04sV0FBVTtpQkFFVix3QkFBQyxlQUFELEVBQWUsV0FBVSx1Q0FBd0M7Ozs7O01BQzNEOzs7OztNQUdSLHdCQUFDLFVBQUQ7T0FDRSxlQUFlO1FBQ2IsTUFBTSxnQkFBZ0I7UUFDdEIsZUFBZTtPQUNqQjtPQUNBLE9BQU07T0FDTixXQUFVO2lCQUVWLHdCQUFDLFVBQUQsRUFBVSxXQUFVLHdCQUF5Qjs7Ozs7TUFDdkM7Ozs7O0tBQ0w7Ozs7OztHQUNGOzs7Ozs7Q0FDQzs7Ozs7QUFFWiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJHYW1lSGVhZGVyLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVm9sdW1lMiwgVm9sdW1lWCwgU2V0dGluZ3MsIEhlbHBDaXJjbGUsIEhpc3RvcnksIEdpZnQsIFphcCwgRm9sZGVyQXJjaGl2ZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBQb2ludHNEaXNwbGF5IH0gZnJvbSAnLi9Qb2ludHNEaXNwbGF5JztcbmltcG9ydCB7IHNvdW5kIH0gZnJvbSAnLi4vc2VydmljZXMvYXVkaW8nO1xuXG5pbnRlcmZhY2UgR2FtZUhlYWRlclByb3BzIHtcbiAgYmFsYW5jZTogbnVtYmVyO1xuICBzb3VuZEVuYWJsZWQ6IGJvb2xlYW47XG4gIG9uVG9nZ2xlU291bmQ6ICgpID0+IHZvaWQ7XG4gIHR1cmJvU3BlZWQ6IGJvb2xlYW47XG4gIG9uVG9nZ2xlVHVyYm86ICgpID0+IHZvaWQ7XG4gIGNhbkNsYWltRGFpbHk6IGJvb2xlYW47XG4gIGRhaWx5UmVtYWluaW5nTXM6IG51bWJlcjtcbiAgb25PcGVuRGFpbHk6ICgpID0+IHZvaWQ7XG4gIG9uT3BlblBheXRhYmxlOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5IaXN0b3J5OiAoKSA9PiB2b2lkO1xuICBvbk9wZW5TZXR0aW5nczogKCkgPT4gdm9pZDtcbiAgb25PcGVuUmVmaWxsOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5FeHBvcnQ6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBHYW1lSGVhZGVyOiBSZWFjdC5GQzxHYW1lSGVhZGVyUHJvcHM+ID0gKHtcbiAgYmFsYW5jZSxcbiAgc291bmRFbmFibGVkLFxuICBvblRvZ2dsZVNvdW5kLFxuICB0dXJib1NwZWVkLFxuICBvblRvZ2dsZVR1cmJvLFxuICBjYW5DbGFpbURhaWx5LFxuICBkYWlseVJlbWFpbmluZ01zLFxuICBvbk9wZW5EYWlseSxcbiAgb25PcGVuUGF5dGFibGUsXG4gIG9uT3Blbkhpc3RvcnksXG4gIG9uT3BlblNldHRpbmdzLFxuICBvbk9wZW5SZWZpbGwsXG4gIG9uT3BlbkV4cG9ydFxufSkgPT4ge1xuICBjb25zdCBmb3JtYXRDb3VudGRvd24gPSAobXM6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRvdGFsU2VjcyA9IE1hdGguZmxvb3IobXMgLyAxMDAwKTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNzIC8gMzYwMCk7XG4gICAgY29uc3QgbWlucyA9IE1hdGguZmxvb3IoKHRvdGFsU2VjcyAlIDM2MDApIC8gNjApO1xuICAgIGNvbnN0IHNlY3MgPSB0b3RhbFNlY3MgJSA2MDtcbiAgICByZXR1cm4gYCR7aG91cnMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke21pbnMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke3NlY3MudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmFkaWVudC10by1iIGZyb20tWyMxODA0MjldLzk1IHZpYS1bIzEwMDIxY10vOTAgdG8tWyMwODAxMTRdLzg1IGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyLWItMiBib3JkZXItYW1iZXItNDAwLzQwIHB4LTMgcHktMiBzbTpweC01IHN0aWNreSB0b3AtMCB6LTMwIHNlbGVjdC1ub25lIHNoYWRvdy1sZyBzaGFkb3ctcHVycGxlLTk1MC80MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgZmxleC13cmFwXCI+XG4gICAgICAgIHsvKiBMb2dvIGFuZCBCcmFuZCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy05IGgtOSBzbTp3LTExIHNtOmgtMTEgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1waW5rLTYwMCB2aWEtcHVycGxlLTYwMCB0by1hbWJlci01MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LWxnIHNoYWRvdy1waW5rLTUwMC8zMCBib3JkZXItMiBib3JkZXItYW1iZXItMzAwIG92ZXJmbG93LWhpZGRlbiBzaHJpbmstMFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBzbTp0ZXh0LTJ4bCBhbmltYXRlLWZsb2F0XCI+8J+Nkzwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xIC1yaWdodC0xIHctMy41IGgtMy41IGJnLXllbGxvdy0zMDAgcm91bmRlZC1mdWxsIGFuaW1hdGUtcGluZyBvcGFjaXR5LTc1XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmFzZSBzbTp0ZXh0LXhsIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXIgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXBpbmstNDAwIHZpYS1hbWJlci0zMDAgdG8teWVsbG93LTQwMCBkcm9wLXNoYWRvdy1tZCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICBGUlVJVCBNQU5JQVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBzbTp0ZXh0LXhzIGZvbnQtYmxhY2sgcHgtMiBweS0wLjUgcm91bmRlZC1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1waW5rLTYwMCB0by1hbWJlci01MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXllbGxvdy0zMDAgc2hhZG93LXhzXCI+XG4gICAgICAgICAgICAgICAgVUxUUkFcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBzbTp0ZXh0LVsxMXB4XSBmb250LWJvbGQgdGV4dC1hbWJlci0zMDAvODAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMS41IGgtMS41IHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTQwMCBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICAgICAgICAgOSBQYXlsaW5lcyDigKIgMngtMTB4IE11bHRpcGxpZXJzIOKAoiBCb251cyBHZW1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENlbnRlcjogUG9pbnRzIERpc3BsYXkgKi99XG4gICAgICAgIDxQb2ludHNEaXNwbGF5IGJhbGFuY2U9e2JhbGFuY2V9IG9uT3BlblJlZmlsbD17b25PcGVuUmVmaWxsfSAvPlxuXG4gICAgICAgIHsvKiBSaWdodCBBY3Rpb24gSWNvbnMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgc206Z2FwLTEuNVwiPlxuICAgICAgICAgIHsvKiBEYWlseSBCb251cyBCdXR0b24gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzb3VuZC5wbGF5QnV0dG9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgb25PcGVuRGFpbHkoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0aXRsZT17Y2FuQ2xhaW1EYWlseSA/ICdEYWlseSBCb251cyBSZWFkeSEnIDogYE5leHQgY2xhaW0gaW4gJHtmb3JtYXRDb3VudGRvd24oZGFpbHlSZW1haW5pbmdNcyl9YH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHAtMiByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGNhbkNsYWltRGFpbHlcbiAgICAgICAgICAgICAgICA/ICdiZy1ncmFkaWVudC10by10ciBmcm9tLXBpbmstNjAwIHRvLWFtYmVyLTUwMCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzaGFkb3ctcGluay01MDAvNDAgYW5pbWF0ZS1ib3VuY2UgYm9yZGVyIGJvcmRlci15ZWxsb3ctMzAwJ1xuICAgICAgICAgICAgICAgIDogJ2JnLXB1cnBsZS05MDAvNTAgaG92ZXI6YmctcHVycGxlLTgwMC82MCB0ZXh0LXB1cnBsZS0zMDAgYm9yZGVyIGJvcmRlci1wdXJwbGUtNzAwLzQwJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdpZnQgY2xhc3NOYW1lPVwidy00IGgtNCBzbTp3LTUgc206aC01XCIgLz5cbiAgICAgICAgICAgIHtjYW5DbGFpbURhaWx5ICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xIC1yaWdodC0xIHctMi41IGgtMi41IGJnLXllbGxvdy0zMDAgcm91bmRlZC1mdWxsIGFuaW1hdGUtcGluZ1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgey8qIFR1cmJvIFNwZWVkIFRvZ2dsZSAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgICBvblRvZ2dsZVR1cmJvKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGl0bGU9e3R1cmJvU3BlZWQgPyAnVHVyYm8gTW9kZSBPTiAoRmFzdCBzcGlucyknIDogJ1R1cmJvIE1vZGUgT0ZGJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGJvcmRlciAke1xuICAgICAgICAgICAgICB0dXJib1NwZWVkXG4gICAgICAgICAgICAgICAgPyAnYmctYW1iZXItNTAwLzIwIGJvcmRlci1hbWJlci00MDAgdGV4dC1hbWJlci0zMDAgc2hhZG93LXNtIHNoYWRvdy1hbWJlci00MDAvMzAnXG4gICAgICAgICAgICAgICAgOiAnYmctcHVycGxlLTkwMC81MCBob3ZlcjpiZy1wdXJwbGUtODAwLzYwIGJvcmRlci1wdXJwbGUtNzAwLzQwIHRleHQtcHVycGxlLTMwMCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxaYXAgY2xhc3NOYW1lPXtgdy00IGgtNCBzbTp3LTUgc206aC01ICR7dHVyYm9TcGVlZCA/ICdmaWxsLWFtYmVyLTQwMCB0ZXh0LWFtYmVyLTQwMCcgOiAnJ31gfSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgey8qIFNvdW5kIFRvZ2dsZSAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uVG9nZ2xlU291bmQoKTtcbiAgICAgICAgICAgICAgaWYgKCFzb3VuZEVuYWJsZWQpIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRpdGxlPXtzb3VuZEVuYWJsZWQgPyAnTXV0ZSBTb3VuZHMnIDogJ1VubXV0ZSBTb3VuZHMnfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQteGwgYmctcHVycGxlLTkwMC81MCBob3ZlcjpiZy1wdXJwbGUtODAwLzYwIHRleHQtcHVycGxlLTMwMCBib3JkZXIgYm9yZGVyLXB1cnBsZS03MDAvNDAgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzb3VuZEVuYWJsZWQgPyAoXG4gICAgICAgICAgICAgIDxWb2x1bWUyIGNsYXNzTmFtZT1cInctNCBoLTQgc206dy01IHNtOmgtNSB0ZXh0LXBpbmstNDAwXCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxWb2x1bWVYIGNsYXNzTmFtZT1cInctNCBoLTQgc206dy01IHNtOmgtNSB0ZXh0LWdyYXktNDAwXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7LyogR2FtZSBIaXN0b3J5ICovfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgIG9uT3Blbkhpc3RvcnkoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0aXRsZT1cIlNwaW4gSGlzdG9yeSAmIFBsYXllciBQcm9ncmVzc2lvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC14bCBiZy1wdXJwbGUtOTAwLzUwIGhvdmVyOmJnLXB1cnBsZS04MDAvNjAgdGV4dC1wdXJwbGUtMzAwIGJvcmRlciBib3JkZXItcHVycGxlLTcwMC80MCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhpc3RvcnkgY2xhc3NOYW1lPVwidy00IGgtNCBzbTp3LTUgc206aC01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIHsvKiBQYXl0YWJsZSAmIFJ1bGVzICovfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgIG9uT3BlblBheXRhYmxlKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGl0bGU9XCI5IFBheWxpbmVzICYgR2FtZSBSdWxlc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC14bCBiZy1wdXJwbGUtOTAwLzUwIGhvdmVyOmJnLXB1cnBsZS04MDAvNjAgdGV4dC1wdXJwbGUtMzAwIGJvcmRlciBib3JkZXItcHVycGxlLTcwMC80MCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhlbHBDaXJjbGUgY2xhc3NOYW1lPVwidy00IGgtNCBzbTp3LTUgc206aC01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIHsvKiBEb3dubG9hZCBTb3VyY2UgQ29kZSBaSVAgKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzb3VuZC5wbGF5QnV0dG9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgb25PcGVuRXhwb3J0KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGl0bGU9XCJEb3dubG9hZCBDb21wbGV0ZSBQcm9qZWN0IChaSVApICYgQW5kcm9pZCBBUEsgR3VpZGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1hbWJlci01MDAvMjAgdG8tcHVycGxlLTgwMC80MCBob3Zlcjpmcm9tLWFtYmVyLTUwMC80MCBob3Zlcjp0by1wdXJwbGUtODAwLzYwIHRleHQtYW1iZXItMzAwIGJvcmRlciBib3JkZXItYW1iZXItNDAwLzUwIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIHNoYWRvdy1zbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbGRlckFyY2hpdmUgY2xhc3NOYW1lPVwidy00IGgtNCBzbTp3LTUgc206aC01IHRleHQtYW1iZXItMzAwXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIHsvKiBTZXR0aW5ncyAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgICBvbk9wZW5TZXR0aW5ncygpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRpdGxlPVwiR2FtZSBTZXR0aW5nc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC14bCBiZy1wdXJwbGUtOTAwLzUwIGhvdmVyOmJnLXB1cnBsZS04MDAvNjAgdGV4dC1wdXJwbGUtMzAwIGJvcmRlciBib3JkZXItcHVycGxlLTcwMC80MCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNldHRpbmdzIGNsYXNzTmFtZT1cInctNCBoLTQgc206dy01IHNtOmgtNVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuIl19