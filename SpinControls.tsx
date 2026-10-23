const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { Play, Square, Sparkles, Plus, Minus } from "/node_modules/.vite/deps/lucide-react.js?v=7c623386";
import { BET_OPTIONS } from "/src/utils/gameLogic.ts";
import { sound } from "/src/services/audio.ts";
var _jsxFileName = "/app/applet/src/components/SpinControls.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const SpinControls = ({ currentBet, onSelectBet, balance, isSpinning, onSpin, autoSpinCount, onStopAutoSpin, onStartAutoSpin }) => {
	const canAfford = balance >= currentBet;
	const isAutoPlaying = autoSpinCount > 0;
	const handleStepBet = (delta) => {
		sound.playButtonClick();
		const currentIndex = BET_OPTIONS.indexOf(currentBet);
		const newIndex = Math.max(0, Math.min(BET_OPTIONS.length - 1, currentIndex + delta));
		onSelectBet(BET_OPTIONS[newIndex]);
	};
	const handleMaxBet = () => {
		sound.playButtonClick();
		const maxOption = [...BET_OPTIONS].reverse().find((b) => b <= balance) || 500;
		onSelectBet(maxOption);
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "w-full max-w-xl mx-auto px-2 sm:px-4 py-2 select-none",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center justify-between gap-2 bg-gradient-to-r from-purple-950/80 via-[#270b47] to-purple-950/80 border border-purple-700/60 rounded-2xl p-2 sm:p-2.5 mb-2.5 shadow-md",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-[10px] sm:text-xs font-black uppercase text-purple-300/80",
						children: "Bet per Spin:"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-1 bg-black/40 px-3 py-1 rounded-xl border border-amber-400/40",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							className: "text-base sm:text-lg font-black text-amber-300",
							children: currentBet
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-[10px] text-amber-400 font-bold",
							children: "PTS"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							disabled: isSpinning || currentBet === BET_OPTIONS[0],
							onClick: () => handleStepBet(-1),
							title: "Decrease Bet",
							className: "w-8 h-8 rounded-xl bg-purple-900/60 hover:bg-purple-800 disabled:opacity-30 border border-purple-600/40 flex items-center justify-center text-purple-200 transition-all active:scale-95 cursor-pointer disabled:cursor-not-allowed",
							children: /* @__PURE__ */ _jsxDEV(Minus, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							disabled: isSpinning || currentBet === BET_OPTIONS[BET_OPTIONS.length - 1],
							onClick: () => handleStepBet(1),
							title: "Increase Bet",
							className: "w-8 h-8 rounded-xl bg-purple-900/60 hover:bg-purple-800 disabled:opacity-30 border border-purple-600/40 flex items-center justify-center text-purple-200 transition-all active:scale-95 cursor-pointer disabled:cursor-not-allowed",
							children: /* @__PURE__ */ _jsxDEV(Plus, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							disabled: isSpinning || currentBet === 500,
							onClick: handleMaxBet,
							className: "py-1.5 px-3 rounded-xl text-[10px] sm:text-xs font-black bg-gradient-to-t from-amber-600 to-amber-500 text-white border border-amber-300 hover:brightness-110 active:scale-95 shadow-md shadow-amber-500/20 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed uppercase shrink-0",
							children: "Max Bet"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "grid grid-cols-5 gap-1.5 sm:gap-2 mb-3",
				children: BET_OPTIONS.map((betValue) => {
					const isSelected = currentBet === betValue;
					return /* @__PURE__ */ _jsxDEV("button", {
						disabled: isSpinning,
						onClick: () => {
							sound.playButtonClick();
							onSelectBet(betValue);
						},
						className: `py-2 px-1 rounded-xl text-center text-xs sm:text-sm font-black transition-all cursor-pointer active:scale-95 border ${isSelected ? "bg-gradient-to-t from-pink-600 to-pink-500 text-white border-pink-300 shadow-lg shadow-pink-600/40 scale-105 ring-2 ring-pink-400" : "bg-purple-950/70 hover:bg-purple-900/60 text-purple-200 border-purple-800/50"} disabled:opacity-40 disabled:cursor-not-allowed`,
						children: betValue
					}, betValue, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 13
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center justify-center gap-2.5 sm:gap-4",
				children: [isAutoPlaying ? /* @__PURE__ */ _jsxDEV("button", {
					onClick: () => {
						sound.playButtonClick();
						onStopAutoSpin();
					},
					className: "flex flex-col items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white border-2 border-rose-300 shadow-xl shadow-rose-600/50 active:scale-95 transition-all cursor-pointer shrink-0",
					children: [
						/* @__PURE__ */ _jsxDEV(Square, { className: "w-5 h-5 fill-white" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[10px] font-black mt-1",
							children: [autoSpinCount, " Left"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[8px] uppercase tracking-wider text-rose-200",
							children: "STOP"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 11
				}, this) : /* @__PURE__ */ _jsxDEV("div", {
					className: "flex gap-1.5 shrink-0",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						disabled: isSpinning || !canAfford,
						onClick: () => {
							sound.playButtonClick();
							onStartAutoSpin(10);
						},
						title: "Auto spin 10 times",
						className: "flex flex-col items-center justify-center w-14 h-16 sm:w-16 sm:h-18 rounded-2xl bg-purple-950/90 hover:bg-purple-900 border border-purple-700 text-purple-200 active:scale-95 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-md",
						children: [/* @__PURE__ */ _jsxDEV(Sparkles, { className: "w-4 h-4 text-pink-400" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 137,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-[9px] font-extrabold uppercase mt-1 tracking-tight",
							children: "Auto 10"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						disabled: isSpinning || !canAfford,
						onClick: () => {
							sound.playButtonClick();
							onStartAutoSpin(25);
						},
						title: "Auto spin 25 times",
						className: "hidden sm:flex flex-col items-center justify-center w-14 h-16 sm:w-16 sm:h-18 rounded-2xl bg-purple-950/90 hover:bg-purple-900 border border-purple-700 text-purple-200 active:scale-95 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-md",
						children: [/* @__PURE__ */ _jsxDEV(Sparkles, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 149,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-[9px] font-extrabold uppercase mt-1 tracking-tight",
							children: "Auto 25"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 150,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 127,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("button", {
					disabled: isSpinning || !canAfford,
					onClick: () => {
						if (!canAfford) return;
						onSpin();
					},
					className: `group relative flex-1 h-16 sm:h-18 rounded-2xl sm:rounded-3xl flex items-center justify-center gap-3 font-black text-xl sm:text-2xl tracking-wider uppercase transition-all duration-150 cursor-pointer ${!canAfford ? "bg-gray-800 text-gray-500 border-2 border-gray-700 cursor-not-allowed" : isSpinning ? "bg-purple-900 text-purple-300 border-2 border-purple-600 animate-pulse cursor-wait" : "bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white border-2 border-amber-300 shadow-2xl shadow-pink-600/50 hover:brightness-110 active:scale-95 active:shadow-inner"}`,
					children: [/* @__PURE__ */ _jsxDEV("div", { className: "absolute top-0 left-4 right-4 h-1/2 bg-white/20 rounded-t-2xl pointer-events-none" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 171,
						columnNumber: 11
					}, this), isSpinning ? /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-6 h-6 border-3 border-purple-300 border-t-transparent rounded-full animate-spin" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 175,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "SPINNING..." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 176,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 13
					}, this) : !canAfford ? /* @__PURE__ */ _jsxDEV("span", {
						className: "text-xs sm:text-sm font-bold text-rose-300",
						children: [
							"LOW BALANCE (NEED ",
							currentBet,
							" PTS)"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 13
					}, this) : /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV(Play, { className: "w-7 h-7 fill-white" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 184,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "drop-shadow-md",
							children: "SPIN"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 185,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 183,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 156,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUFNO01BQ04sV0FBVTtnQkFQWixDQVNFLHdCQUFDLFVBQUQsRUFBVSxXQUFVLHdCQUF5Qjs7OztnQkFDN0Msd0JBQUMsUUFBRDtPQUFNLFdBQVU7aUJBQTBEO01BQWE7Ozs7Y0FDakY7Ozs7O2VBQ1Isd0JBQUMsVUFBRDtNQUNFLFVBQVUsY0FBYyxDQUFDO01BQ3pCLGVBQWU7T0FDYixNQUFNLGdCQUFnQjtPQUN0QixnQkFBZ0IsRUFBRTtNQUNwQjtNQUNBLE9BQU07TUFDTixXQUFVO2dCQVBaLENBU0Usd0JBQUMsVUFBRCxFQUFVLFdBQVUseUJBQTBCOzs7O2dCQUM5Qyx3QkFBQyxRQUFEO09BQU0sV0FBVTtpQkFBMEQ7TUFBYTs7OztjQUNqRjs7Ozs7YUFDTDs7Ozs7Y0FJUCx3QkFBQyxVQUFEO0tBQ0UsVUFBVSxjQUFjLENBQUM7S0FDekIsZUFBZTtNQUNiLElBQUksQ0FBQyxXQUFXO01BQ2hCLE9BQU87S0FDVDtLQUNBLFdBQVcsMk1BQ1QsQ0FBQyxZQUNHLDBFQUNBLGFBQ0EsdUZBQ0E7ZUFYUixDQWVFLHdCQUFDLE9BQUQsRUFBSyxXQUFVLG9GQUFxRjs7OztlQUVuRyxhQUNDLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmLENBQ0Usd0JBQUMsUUFBRCxFQUFNLFdBQVUsb0ZBQXFGOzs7O2dCQUNyRyx3QkFBQyxRQUFELFlBQU0sY0FBaUI7Ozs7Y0FDcEI7Ozs7O2dCQUNILENBQUMsWUFDSCx3QkFBQyxRQUFEO01BQU0sV0FBVTtnQkFBaEI7T0FBNkQ7T0FDeEM7T0FBVztNQUMxQjs7Ozs7Z0JBRU4sd0JBQUMsT0FBRDtNQUFLLFdBQVU7Z0JBQWYsQ0FDRSx3QkFBQyxNQUFELEVBQU0sV0FBVSxxQkFBc0I7Ozs7Z0JBQ3RDLHdCQUFDLFFBQUQ7T0FBTSxXQUFVO2lCQUFpQjtNQUFVOzs7O2NBQ3hDOzs7OzthQUVEOzs7OztZQUNMOzs7Ozs7RUFDRjs7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiU3BpbkNvbnRyb2xzLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGxheSwgU3F1YXJlLCBTcGFya2xlcywgUGx1cywgTWludXMgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgQkVUX09QVElPTlMgfSBmcm9tICcuLi91dGlscy9nYW1lTG9naWMnO1xuaW1wb3J0IHsgc291bmQgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdWRpbyc7XG5cbmludGVyZmFjZSBTcGluQ29udHJvbHNQcm9wcyB7XG4gIGN1cnJlbnRCZXQ6IG51bWJlcjtcbiAgb25TZWxlY3RCZXQ6IChiZXQ6IG51bWJlcikgPT4gdm9pZDtcbiAgYmFsYW5jZTogbnVtYmVyO1xuICBpc1NwaW5uaW5nOiBib29sZWFuO1xuICBvblNwaW46ICgpID0+IHZvaWQ7XG4gIGF1dG9TcGluQ291bnQ6IG51bWJlcjtcbiAgb25TdGFydEF1dG9TcGluOiAoY291bnQ6IG51bWJlcikgPT4gdm9pZDtcbiAgb25TdG9wQXV0b1NwaW46ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBTcGluQ29udHJvbHM6IFJlYWN0LkZDPFNwaW5Db250cm9sc1Byb3BzPiA9ICh7XG4gIGN1cnJlbnRCZXQsXG4gIG9uU2VsZWN0QmV0LFxuICBiYWxhbmNlLFxuICBpc1NwaW5uaW5nLFxuICBvblNwaW4sXG4gIGF1dG9TcGluQ291bnQsXG4gIG9uU3RvcEF1dG9TcGluLFxuICBvblN0YXJ0QXV0b1NwaW5cbn0pID0+IHtcbiAgY29uc3QgY2FuQWZmb3JkID0gYmFsYW5jZSA+PSBjdXJyZW50QmV0O1xuICBjb25zdCBpc0F1dG9QbGF5aW5nID0gYXV0b1NwaW5Db3VudCA+IDA7XG5cbiAgY29uc3QgaGFuZGxlU3RlcEJldCA9IChkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gQkVUX09QVElPTlMuaW5kZXhPZihjdXJyZW50QmV0IGFzIGFueSk7XG4gICAgY29uc3QgbmV3SW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihCRVRfT1BUSU9OUy5sZW5ndGggLSAxLCBjdXJyZW50SW5kZXggKyBkZWx0YSkpO1xuICAgIG9uU2VsZWN0QmV0KEJFVF9PUFRJT05TW25ld0luZGV4XSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWF4QmV0ID0gKCkgPT4ge1xuICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgIGNvbnN0IG1heE9wdGlvbiA9IFsuLi5CRVRfT1BUSU9OU10ucmV2ZXJzZSgpLmZpbmQoKGIpID0+IGIgPD0gYmFsYW5jZSkgfHwgNTAwO1xuICAgIG9uU2VsZWN0QmV0KG1heE9wdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy14bCBteC1hdXRvIHB4LTIgc206cHgtNCBweS0yIHNlbGVjdC1ub25lXCI+XG4gICAgICB7LyogQmV0IEFkanVzdGVyIFJvdyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtOTUwLzgwIHZpYS1bIzI3MGI0N10gdG8tcHVycGxlLTk1MC84MCBib3JkZXIgYm9yZGVyLXB1cnBsZS03MDAvNjAgcm91bmRlZC0yeGwgcC0yIHNtOnAtMi41IG1iLTIuNSBzaGFkb3ctbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHNtOnRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdGV4dC1wdXJwbGUtMzAwLzgwXCI+XG4gICAgICAgICAgICBCZXQgcGVyIFNwaW46XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYmctYmxhY2svNDAgcHgtMyBweS0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1hbWJlci00MDAvNDBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBzbTp0ZXh0LWxnIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDBcIj5cbiAgICAgICAgICAgICAge2N1cnJlbnRCZXR9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWFtYmVyLTQwMCBmb250LWJvbGRcIj5QVFM8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBTdGVwIEJldCArLy0gYW5kIE1heCBCZXQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1NwaW5uaW5nIHx8IGN1cnJlbnRCZXQgPT09IEJFVF9PUFRJT05TWzBdfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3RlcEJldCgtMSl9XG4gICAgICAgICAgICB0aXRsZT1cIkRlY3JlYXNlIEJldFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQteGwgYmctcHVycGxlLTkwMC82MCBob3ZlcjpiZy1wdXJwbGUtODAwIGRpc2FibGVkOm9wYWNpdHktMzAgYm9yZGVyIGJvcmRlci1wdXJwbGUtNjAwLzQwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtcHVycGxlLTIwMCB0cmFuc2l0aW9uLWFsbCBhY3RpdmU6c2NhbGUtOTUgY3Vyc29yLXBvaW50ZXIgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWludXMgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3Bpbm5pbmcgfHwgY3VycmVudEJldCA9PT0gQkVUX09QVElPTlNbQkVUX09QVElPTlMubGVuZ3RoIC0gMV19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdGVwQmV0KDEpfVxuICAgICAgICAgICAgdGl0bGU9XCJJbmNyZWFzZSBCZXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLXhsIGJnLXB1cnBsZS05MDAvNjAgaG92ZXI6YmctcHVycGxlLTgwMCBkaXNhYmxlZDpvcGFjaXR5LTMwIGJvcmRlciBib3JkZXItcHVycGxlLTYwMC80MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXB1cnBsZS0yMDAgdHJhbnNpdGlvbi1hbGwgYWN0aXZlOnNjYWxlLTk1IGN1cnNvci1wb2ludGVyIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3Bpbm5pbmcgfHwgY3VycmVudEJldCA9PT0gNTAwfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWF4QmV0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMS41IHB4LTMgcm91bmRlZC14bCB0ZXh0LVsxMHB4XSBzbTp0ZXh0LXhzIGZvbnQtYmxhY2sgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWFtYmVyLTYwMCB0by1hbWJlci01MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWFtYmVyLTMwMCBob3ZlcjpicmlnaHRuZXNzLTExMCBhY3RpdmU6c2NhbGUtOTUgc2hhZG93LW1kIHNoYWRvdy1hbWJlci01MDAvMjAgY3Vyc29yLXBvaW50ZXIgZGlzYWJsZWQ6b3BhY2l0eS00MCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgdXBwZXJjYXNlIHNocmluay0wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBNYXggQmV0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBCZXQgT3B0aW9ucyBDaGlwcyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNSBnYXAtMS41IHNtOmdhcC0yIG1iLTNcIj5cbiAgICAgICAge0JFVF9PUFRJT05TLm1hcCgoYmV0VmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gY3VycmVudEJldCA9PT0gYmV0VmFsdWU7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXtiZXRWYWx1ZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3Bpbm5pbmd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzb3VuZC5wbGF5QnV0dG9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICBvblNlbGVjdEJldChiZXRWYWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTIgcHgtMSByb3VuZGVkLXhsIHRleHQtY2VudGVyIHRleHQteHMgc206dGV4dC1zbSBmb250LWJsYWNrIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGFjdGl2ZTpzY2FsZS05NSBib3JkZXIgJHtcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkXG4gICAgICAgICAgICAgICAgICA/ICdiZy1ncmFkaWVudC10by10IGZyb20tcGluay02MDAgdG8tcGluay01MDAgdGV4dC13aGl0ZSBib3JkZXItcGluay0zMDAgc2hhZG93LWxnIHNoYWRvdy1waW5rLTYwMC80MCBzY2FsZS0xMDUgcmluZy0yIHJpbmctcGluay00MDAnXG4gICAgICAgICAgICAgICAgICA6ICdiZy1wdXJwbGUtOTUwLzcwIGhvdmVyOmJnLXB1cnBsZS05MDAvNjAgdGV4dC1wdXJwbGUtMjAwIGJvcmRlci1wdXJwbGUtODAwLzUwJ1xuICAgICAgICAgICAgICB9IGRpc2FibGVkOm9wYWNpdHktNDAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2JldFZhbHVlfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE1haW4gQm90dG9tIEJ1dHRvbnM6IEF1dG8gU3BpbiBhbmQgTWFzdGVyIFNQSU4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yLjUgc206Z2FwLTRcIj5cbiAgICAgICAgey8qIEF1dG8gU3BpbiBUb2dnbGUgKi99XG4gICAgICAgIHtpc0F1dG9QbGF5aW5nID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgIG9uU3RvcEF1dG9TcGluKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy0xNiBoLTE2IHNtOnctMTggc206aC0xOCByb3VuZGVkLTJ4bCBiZy1yb3NlLTYwMCBob3ZlcjpiZy1yb3NlLTUwMCB0ZXh0LXdoaXRlIGJvcmRlci0yIGJvcmRlci1yb3NlLTMwMCBzaGFkb3cteGwgc2hhZG93LXJvc2UtNjAwLzUwIGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBzaHJpbmstMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNxdWFyZSBjbGFzc05hbWU9XCJ3LTUgaC01IGZpbGwtd2hpdGVcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ibGFjayBtdC0xXCI+e2F1dG9TcGluQ291bnR9IExlZnQ8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs4cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXJvc2UtMjAwXCI+U1RPUDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEuNSBzaHJpbmstMFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTcGlubmluZyB8fCAhY2FuQWZmb3JkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgb25TdGFydEF1dG9TcGluKDEwKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJBdXRvIHNwaW4gMTAgdGltZXNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTE0IGgtMTYgc206dy0xNiBzbTpoLTE4IHJvdW5kZWQtMnhsIGJnLXB1cnBsZS05NTAvOTAgaG92ZXI6YmctcHVycGxlLTkwMCBib3JkZXIgYm9yZGVyLXB1cnBsZS03MDAgdGV4dC1wdXJwbGUtMjAwIGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBkaXNhYmxlZDpvcGFjaXR5LTQwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBzaGFkb3ctbWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXBpbmstNDAwXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSBmb250LWV4dHJhYm9sZCB1cHBlcmNhc2UgbXQtMSB0cmFja2luZy10aWdodFwiPkF1dG8gMTA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3Bpbm5pbmcgfHwgIWNhbkFmZm9yZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgICAgIG9uU3RhcnRBdXRvU3BpbigyNSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHRpdGxlPVwiQXV0byBzcGluIDI1IHRpbWVzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMTQgaC0xNiBzbTp3LTE2IHNtOmgtMTggcm91bmRlZC0yeGwgYmctcHVycGxlLTk1MC85MCBob3ZlcjpiZy1wdXJwbGUtOTAwIGJvcmRlciBib3JkZXItcHVycGxlLTcwMCB0ZXh0LXB1cnBsZS0yMDAgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGRpc2FibGVkOm9wYWNpdHktNDAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIHNoYWRvdy1tZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSBmb250LWV4dHJhYm9sZCB1cHBlcmNhc2UgbXQtMSB0cmFja2luZy10aWdodFwiPkF1dG8gMjU8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogTWFzdGVyIEdsb3NzeSBTUElOIEJ1dHRvbiAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc1NwaW5uaW5nIHx8ICFjYW5BZmZvcmR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjYW5BZmZvcmQpIHJldHVybjtcbiAgICAgICAgICAgIG9uU3BpbigpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgcmVsYXRpdmUgZmxleC0xIGgtMTYgc206aC0xOCByb3VuZGVkLTJ4bCBzbTpyb3VuZGVkLTN4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMyBmb250LWJsYWNrIHRleHQteGwgc206dGV4dC0yeGwgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgIWNhbkFmZm9yZFxuICAgICAgICAgICAgICA/ICdiZy1ncmF5LTgwMCB0ZXh0LWdyYXktNTAwIGJvcmRlci0yIGJvcmRlci1ncmF5LTcwMCBjdXJzb3Itbm90LWFsbG93ZWQnXG4gICAgICAgICAgICAgIDogaXNTcGlubmluZ1xuICAgICAgICAgICAgICA/ICdiZy1wdXJwbGUtOTAwIHRleHQtcHVycGxlLTMwMCBib3JkZXItMiBib3JkZXItcHVycGxlLTYwMCBhbmltYXRlLXB1bHNlIGN1cnNvci13YWl0J1xuICAgICAgICAgICAgICA6ICdiZy1ncmFkaWVudC10by1yIGZyb20tcGluay02MDAgdmlhLXJvc2UtNTAwIHRvLWFtYmVyLTUwMCB0ZXh0LXdoaXRlIGJvcmRlci0yIGJvcmRlci1hbWJlci0zMDAgc2hhZG93LTJ4bCBzaGFkb3ctcGluay02MDAvNTAgaG92ZXI6YnJpZ2h0bmVzcy0xMTAgYWN0aXZlOnNjYWxlLTk1IGFjdGl2ZTpzaGFkb3ctaW5uZXInXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7LyogR2xvc3N5IHRvcCBzaGluZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtNCByaWdodC00IGgtMS8yIGJnLXdoaXRlLzIwIHJvdW5kZWQtdC0yeGwgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG5cbiAgICAgICAgICB7aXNTcGlubmluZyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy02IGgtNiBib3JkZXItMyBib3JkZXItcHVycGxlLTMwMCBib3JkZXItdC10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+U1BJTk5JTkcuLi48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogIWNhbkFmZm9yZCA/IChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSBmb250LWJvbGQgdGV4dC1yb3NlLTMwMFwiPlxuICAgICAgICAgICAgICBMT1cgQkFMQU5DRSAoTkVFRCB7Y3VycmVudEJldH0gUFRTKVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxQbGF5IGNsYXNzTmFtZT1cInctNyBoLTcgZmlsbC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3Atc2hhZG93LW1kXCI+U1BJTjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19