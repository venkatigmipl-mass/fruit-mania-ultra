const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport7_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { generateSpinGrid, evaluateSpin } from "/src/utils/gameLogic.ts";
import { Reel } from "/src/components/Reel.tsx";
import { WinLineOverlay } from "/src/components/WinLineOverlay.tsx";
import { sound } from "/src/services/audio.ts";
import confetti from "/node_modules/.vite/deps/canvas-confetti.js?v=7c623386";
import { Trophy, Play } from "/node_modules/.vite/deps/lucide-react.js?v=7c623386";
var _jsxFileName = "/app/applet/src/components/BonusRound.tsx";
import __vite__cjsImport7_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const BonusRound = ({ baseBet, onFinish }) => {
	const [spinIndex, setSpinIndex] = useState(1);
	const totalSpins = 3;
	const [accumulatedPoints, setAccumulatedPoints] = useState(0);
	const [currentMultiplier, setCurrentMultiplier] = useState(2);
	const [grid, setGrid] = useState(() => generateSpinGrid());
	const [spinningColumns, setSpinningColumns] = useState([
		false,
		false,
		false,
		false,
		false
	]);
	const [isSpinning, setIsSpinning] = useState(false);
	const [evaluation, setEvaluation] = useState(null);
	const [isCompleted, setIsCompleted] = useState(false);
	const [lastSpinWin, setLastSpinWin] = useState(0);
	// Sound & intro fanfare
	useEffect(() => {
		sound.playBonusRoundActivation();
		confetti({
			particleCount: 60,
			spread: 80,
			origin: { y: .4 }
		});
	}, []);
	// Spin a free bonus round
	const executeBonusSpin = () => {
		if (isSpinning || isCompleted) return;
		setIsSpinning(true);
		setSpinningColumns([
			true,
			true,
			true,
			true,
			true
		]);
		setEvaluation(null);
		sound.playSpinStart();
		// In bonus round, multiplier can upgrade!
		let nextMultiplier = currentMultiplier;
		if (spinIndex === 2 && currentMultiplier < 3) nextMultiplier = 3;
		if (spinIndex === 3 && currentMultiplier < 5) nextMultiplier = 5;
		setCurrentMultiplier(nextMultiplier);
		const targetGrid = generateSpinGrid();
		// Evaluate with active bonus multiplier
		const evalResult = evaluateSpin(targetGrid, baseBet, nextMultiplier);
		// Stagger stops
		for (let c = 0; c < 5; c++) {
			setTimeout(() => {
				setGrid((prev) => {
					const next = prev.map((row) => [...row]);
					for (let r = 0; r < 3; r++) {
						next[r][c] = targetGrid[r][c];
					}
					return next;
				});
				setSpinningColumns((prev) => {
					const next = [...prev];
					next[c] = false;
					return next;
				});
				sound.playReelStop(c);
				if (c === 4) {
					setTimeout(() => {
						setIsSpinning(false);
						setEvaluation(evalResult);
						setLastSpinWin(evalResult.totalWin);
						const updatedAccumulated = accumulatedPoints + evalResult.totalWin;
						setAccumulatedPoints(updatedAccumulated);
						if (evalResult.totalWin > 0) {
							sound.playSmallWin();
						}
						// Check if all 3 spins are completed
						if (spinIndex >= totalSpins) {
							setIsCompleted(true);
							sound.playBigWin();
							confetti({
								particleCount: 100,
								spread: 100,
								origin: { y: .5 }
							});
						} else {
							setSpinIndex((prev) => prev + 1);
						}
					}, 200);
				}
			}, 300 + c * 200);
		}
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "fixed inset-0 z-50 bg-[#080114]/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-5 select-none animate-fade-in overflow-y-auto",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "w-full max-w-xl flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2 mb-1",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-2xl sm:text-3xl animate-bounce",
								children: "💎"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("h1", {
								className: "text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300 uppercase tracking-widest",
								children: "SCATTER GEM BONUS ROUND"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-2xl sm:text-3xl animate-bounce",
								children: "💎"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 115,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "text-xs sm:text-sm text-cyan-200 font-bold",
						children: "3 Free Spins • Growing Multipliers • Zero Points Deducted!"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-3 gap-2 w-full mt-3",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "bg-purple-950/80 border border-purple-700/60 p-2 rounded-2xl flex flex-col items-center",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] uppercase font-bold text-purple-300",
									children: "Free Spin"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 124,
									columnNumber: 13
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-base sm:text-lg font-black text-white",
									children: [
										spinIndex,
										" / ",
										totalSpins
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "bg-purple-950/80 border border-amber-400/60 p-2 rounded-2xl flex flex-col items-center",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] uppercase font-bold text-amber-300",
									children: "Multiplier"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 13
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-base sm:text-lg font-black text-amber-300 animate-multiplier-pop",
									children: [currentMultiplier, "x"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 132,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 130,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "bg-purple-950/80 border border-cyan-400/60 p-2 rounded-2xl flex flex-col items-center",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] uppercase font-bold text-cyan-300",
									children: "Accumulated"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 13
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-base sm:text-lg font-black text-cyan-300",
									children: ["+", accumulatedPoints.toLocaleString()]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 137,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "w-full max-w-xl my-auto",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 bg-gradient-to-b from-[#1c0836] via-[#100320] to-[#080114] border-2 border-cyan-400 shadow-2xl shadow-cyan-900/40",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "relative grid grid-cols-5 gap-1.5 sm:gap-2.5 bg-[#05010a] p-1.5 sm:p-2.5 rounded-xl border border-cyan-900/50",
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
							].map((r) => grid[r]?.[colIndex] || "strawberry");
							return /* @__PURE__ */ _jsxDEV(Reel, {
								columnIndex: colIndex,
								symbols: columnSymbols,
								isSpinning: spinningColumns[colIndex],
								evaluation
							}, `bonus-col-${colIndex}`, false, {
								fileName: _jsxFileName,
								lineNumber: 153,
								columnNumber: 17
							}, this);
						}), !spinningColumns.some(Boolean) && evaluation && /* @__PURE__ */ _jsxDEV(WinLineOverlay, { winningLines: evaluation.lineWins }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 149,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "mt-2 text-center text-xs font-bold min-h-[24px]",
						children: evaluation && evaluation.totalWin > 0 ? /* @__PURE__ */ _jsxDEV("span", {
							className: "text-amber-300 animate-bounce",
							children: [
								"Spin Hit: +",
								evaluation.totalWin.toLocaleString(),
								" Free Points (",
								currentMultiplier,
								"x applied)!"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 170,
							columnNumber: 15
						}, this) : evaluation && !isSpinning ? /* @__PURE__ */ _jsxDEV("span", {
							className: "text-purple-300/80",
							children: "No matches this spin"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 174,
							columnNumber: 15
						}, this) : /* @__PURE__ */ _jsxDEV("span", {
							className: "text-cyan-300/80",
							children: [
								"Spin to win with ",
								currentMultiplier,
								"x Multiplier!"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 176,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 168,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 148,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 147,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "w-full max-w-xl flex flex-col items-center",
				children: isCompleted ? /* @__PURE__ */ _jsxDEV("div", {
					className: "w-full bg-gradient-to-r from-amber-500/20 via-purple-900/60 to-pink-500/20 p-4 rounded-3xl border-2 border-yellow-400 text-center flex flex-col items-center",
					children: [
						/* @__PURE__ */ _jsxDEV(Trophy, { className: "w-10 h-10 text-amber-400 mb-1 animate-bounce" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 186,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-xl sm:text-2xl font-black text-amber-300 uppercase tracking-wide",
							children: "Bonus Round Complete!"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 187,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "my-2 flex items-center gap-2",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "text-3xl sm:text-4xl font-black text-amber-300 font-mono",
								children: ["+", accumulatedPoints.toLocaleString()]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-400/40",
								children: "POINTS WON"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 194,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 190,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-purple-300 mb-3",
							children: "Points have been credited to your virtual balance!"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								sound.playButtonClick();
								onFinish(accumulatedPoints);
							},
							className: "w-full max-w-xs py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-amber-950 font-black text-base uppercase tracking-wider shadow-lg shadow-amber-400/40 hover:brightness-110 active:scale-95 transition-all cursor-pointer",
							children: "Collect & Return to Game"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 201,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 185,
					columnNumber: 11
				}, this) : /* @__PURE__ */ _jsxDEV("button", {
					disabled: isSpinning,
					onClick: executeBonusSpin,
					className: `w-full max-w-xs h-14 sm:h-16 rounded-2xl sm:rounded-3xl flex items-center justify-center gap-3 font-black text-lg sm:text-xl uppercase tracking-wider transition-all cursor-pointer ${isSpinning ? "bg-purple-900 text-purple-400 cursor-wait" : "bg-gradient-to-r from-cyan-500 via-pink-500 to-amber-400 text-white shadow-xl shadow-cyan-500/40 hover:brightness-110 active:scale-95"}`,
					children: isSpinning ? /* @__PURE__ */ _jsxDEV("span", { children: "SPINNING FREE REELS..." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 222,
						columnNumber: 15
					}, this) : /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV(Play, { className: "w-5 h-5 fill-white" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 225,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
							"SPIN FREE ROUND ",
							spinIndex,
							"/3"
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 226,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 224,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 212,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 183,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 107,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUFNLGdCQUFnQjtRQUN0QixTQUFTLGlCQUFpQjtPQUM1QjtPQUNBLFdBQVU7aUJBQ1g7TUFFTzs7Ozs7S0FDTDs7Ozs7ZUFFTCx3QkFBQyxVQUFEO0tBQ0UsVUFBVTtLQUNWLFNBQVM7S0FDVCxXQUFXLHVMQUNULGFBQ0ksOENBQ0E7ZUFHTCxhQUNDLHdCQUFDLFFBQUQsWUFBTSx5QkFBNEI7Ozs7Z0JBRWxDLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmLENBQ0Usd0JBQUMsTUFBRCxFQUFNLFdBQVUscUJBQXNCOzs7O2dCQUN0Qyx3QkFBQyxRQUFEO09BQU07T0FBaUI7T0FBVTtNQUFROzs7O2NBQ3RDOzs7Ozs7SUFFRDs7Ozs7R0FFUDs7Ozs7RUFDRjs7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQm9udXNSb3VuZC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTeW1ib2xJZCwgU3BpbkV2YWx1YXRpb24gfSBmcm9tICcuLi90eXBlcy9nYW1lJztcbmltcG9ydCB7IGdlbmVyYXRlU3BpbkdyaWQsIGV2YWx1YXRlU3BpbiB9IGZyb20gJy4uL3V0aWxzL2dhbWVMb2dpYyc7XG5pbXBvcnQgeyBSZWVsIH0gZnJvbSAnLi9SZWVsJztcbmltcG9ydCB7IFdpbkxpbmVPdmVybGF5IH0gZnJvbSAnLi9XaW5MaW5lT3ZlcmxheSc7XG5pbXBvcnQgeyBzb3VuZCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1ZGlvJztcbmltcG9ydCBjb25mZXR0aSBmcm9tICdjYW52YXMtY29uZmV0dGknO1xuaW1wb3J0IHsgU3BhcmtsZXMsIFRyb3BoeSwgUGxheSwgQ2hlY2tDaXJjbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgQm9udXNSb3VuZFByb3BzIHtcbiAgYmFzZUJldDogbnVtYmVyO1xuICBvbkZpbmlzaDogKHRvdGFsUG9pbnRzV29uOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBCb251c1JvdW5kOiBSZWFjdC5GQzxCb251c1JvdW5kUHJvcHM+ID0gKHsgYmFzZUJldCwgb25GaW5pc2ggfSkgPT4ge1xuICBjb25zdCBbc3BpbkluZGV4LCBzZXRTcGluSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcbiAgY29uc3QgdG90YWxTcGlucyA9IDM7XG4gIGNvbnN0IFthY2N1bXVsYXRlZFBvaW50cywgc2V0QWNjdW11bGF0ZWRQb2ludHNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2N1cnJlbnRNdWx0aXBsaWVyLCBzZXRDdXJyZW50TXVsdGlwbGllcl0gPSB1c2VTdGF0ZTxudW1iZXI+KDIpOyAvLyBTdGFydHMgYXQgMnhcbiAgY29uc3QgW2dyaWQsIHNldEdyaWRdID0gdXNlU3RhdGU8U3ltYm9sSWRbXVtdPigoKSA9PiBnZW5lcmF0ZVNwaW5HcmlkKCkpO1xuICBjb25zdCBbc3Bpbm5pbmdDb2x1bW5zLCBzZXRTcGlubmluZ0NvbHVtbnNdID0gdXNlU3RhdGU8Ym9vbGVhbltdPihbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSk7XG4gIGNvbnN0IFtpc1NwaW5uaW5nLCBzZXRJc1NwaW5uaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2V2YWx1YXRpb24sIHNldEV2YWx1YXRpb25dID0gdXNlU3RhdGU8U3BpbkV2YWx1YXRpb24gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzQ29tcGxldGVkLCBzZXRJc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtsYXN0U3Bpbldpbiwgc2V0TGFzdFNwaW5XaW5dID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICAvLyBTb3VuZCAmIGludHJvIGZhbmZhcmVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb3VuZC5wbGF5Qm9udXNSb3VuZEFjdGl2YXRpb24oKTtcbiAgICBjb25mZXR0aSh7XG4gICAgICBwYXJ0aWNsZUNvdW50OiA2MCxcbiAgICAgIHNwcmVhZDogODAsXG4gICAgICBvcmlnaW46IHsgeTogMC40IH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIFNwaW4gYSBmcmVlIGJvbnVzIHJvdW5kXG4gIGNvbnN0IGV4ZWN1dGVCb251c1NwaW4gPSAoKSA9PiB7XG4gICAgaWYgKGlzU3Bpbm5pbmcgfHwgaXNDb21wbGV0ZWQpIHJldHVybjtcblxuICAgIHNldElzU3Bpbm5pbmcodHJ1ZSk7XG4gICAgc2V0U3Bpbm5pbmdDb2x1bW5zKFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSk7XG4gICAgc2V0RXZhbHVhdGlvbihudWxsKTtcbiAgICBzb3VuZC5wbGF5U3BpblN0YXJ0KCk7XG5cbiAgICAvLyBJbiBib251cyByb3VuZCwgbXVsdGlwbGllciBjYW4gdXBncmFkZSFcbiAgICBsZXQgbmV4dE11bHRpcGxpZXIgPSBjdXJyZW50TXVsdGlwbGllcjtcbiAgICBpZiAoc3BpbkluZGV4ID09PSAyICYmIGN1cnJlbnRNdWx0aXBsaWVyIDwgMykgbmV4dE11bHRpcGxpZXIgPSAzO1xuICAgIGlmIChzcGluSW5kZXggPT09IDMgJiYgY3VycmVudE11bHRpcGxpZXIgPCA1KSBuZXh0TXVsdGlwbGllciA9IDU7XG4gICAgc2V0Q3VycmVudE11bHRpcGxpZXIobmV4dE11bHRpcGxpZXIpO1xuXG4gICAgY29uc3QgdGFyZ2V0R3JpZCA9IGdlbmVyYXRlU3BpbkdyaWQoKTtcbiAgICAvLyBFdmFsdWF0ZSB3aXRoIGFjdGl2ZSBib251cyBtdWx0aXBsaWVyXG4gICAgY29uc3QgZXZhbFJlc3VsdCA9IGV2YWx1YXRlU3Bpbih0YXJnZXRHcmlkLCBiYXNlQmV0LCBuZXh0TXVsdGlwbGllcik7XG5cbiAgICAvLyBTdGFnZ2VyIHN0b3BzXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCA1OyBjKyspIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRHcmlkKChwcmV2KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV4dCA9IHByZXYubWFwKChyb3cpID0+IFsuLi5yb3ddKTtcbiAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IDM7IHIrKykge1xuICAgICAgICAgICAgbmV4dFtyXVtjXSA9IHRhcmdldEdyaWRbcl1bY107XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRTcGlubmluZ0NvbHVtbnMoKHByZXYpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gWy4uLnByZXZdO1xuICAgICAgICAgIG5leHRbY10gPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc291bmQucGxheVJlZWxTdG9wKGMpO1xuXG4gICAgICAgIGlmIChjID09PSA0KSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRJc1NwaW5uaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEV2YWx1YXRpb24oZXZhbFJlc3VsdCk7XG4gICAgICAgICAgICBzZXRMYXN0U3BpbldpbihldmFsUmVzdWx0LnRvdGFsV2luKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEFjY3VtdWxhdGVkID0gYWNjdW11bGF0ZWRQb2ludHMgKyBldmFsUmVzdWx0LnRvdGFsV2luO1xuICAgICAgICAgICAgc2V0QWNjdW11bGF0ZWRQb2ludHModXBkYXRlZEFjY3VtdWxhdGVkKTtcblxuICAgICAgICAgICAgaWYgKGV2YWxSZXN1bHQudG90YWxXaW4gPiAwKSB7XG4gICAgICAgICAgICAgIHNvdW5kLnBsYXlTbWFsbFdpbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhbGwgMyBzcGlucyBhcmUgY29tcGxldGVkXG4gICAgICAgICAgICBpZiAoc3BpbkluZGV4ID49IHRvdGFsU3BpbnMpIHtcbiAgICAgICAgICAgICAgc2V0SXNDb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgICAgICAgIHNvdW5kLnBsYXlCaWdXaW4oKTtcbiAgICAgICAgICAgICAgY29uZmV0dGkoe1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlQ291bnQ6IDEwMCxcbiAgICAgICAgICAgICAgICBzcHJlYWQ6IDEwMCxcbiAgICAgICAgICAgICAgICBvcmlnaW46IHsgeTogMC41IH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRTcGluSW5kZXgoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgICB9LCAzMDAgKyBjICogMjAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBiZy1bIzA4MDExNF0vOTUgYmFja2Ryb3AtYmx1ci1tZCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0zIHNtOnAtNSBzZWxlY3Qtbm9uZSBhbmltYXRlLWZhZGUtaW4gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICB7LyogVG9wIEJhbm5lciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItMVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGFuaW1hdGUtYm91bmNlXCI+8J+Sjjwvc3Bhbj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ibGFjayB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tY3lhbi00MDAgdmlhLXBpbmstNDAwIHRvLWFtYmVyLTMwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICBTQ0FUVEVSIEdFTSBCT05VUyBST1VORFxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgYW5pbWF0ZS1ib3VuY2VcIj7wn5KOPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtY3lhbi0yMDAgZm9udC1ib2xkXCI+XG4gICAgICAgICAgMyBGcmVlIFNwaW5zIOKAoiBHcm93aW5nIE11bHRpcGxpZXJzIOKAoiBaZXJvIFBvaW50cyBEZWR1Y3RlZCFcbiAgICAgICAgPC9wPlxuXG4gICAgICAgIHsvKiBTdGF0dXMgRGFzaGJvYXJkICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgdy1mdWxsIG10LTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXB1cnBsZS05NTAvODAgYm9yZGVyIGJvcmRlci1wdXJwbGUtNzAwLzYwIHAtMiByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdXBwZXJjYXNlIGZvbnQtYm9sZCB0ZXh0LXB1cnBsZS0zMDBcIj5GcmVlIFNwaW48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyBmb250LWJsYWNrIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAge3NwaW5JbmRleH0gLyB7dG90YWxTcGluc31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTk1MC84MCBib3JkZXIgYm9yZGVyLWFtYmVyLTQwMC82MCBwLTIgcm91bmRlZC0yeGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC1hbWJlci0zMDBcIj5NdWx0aXBsaWVyPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGcgZm9udC1ibGFjayB0ZXh0LWFtYmVyLTMwMCBhbmltYXRlLW11bHRpcGxpZXItcG9wXCI+XG4gICAgICAgICAgICAgIHtjdXJyZW50TXVsdGlwbGllcn14XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXB1cnBsZS05NTAvODAgYm9yZGVyIGJvcmRlci1jeWFuLTQwMC82MCBwLTIgcm91bmRlZC0yeGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC1jeWFuLTMwMFwiPkFjY3VtdWxhdGVkPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGcgZm9udC1ibGFjayB0ZXh0LWN5YW4tMzAwXCI+XG4gICAgICAgICAgICAgICt7YWNjdW11bGF0ZWRQb2ludHMudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFJlZWwgR3JpZCBBcmVhICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXcteGwgbXktYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIHNtOnJvdW5kZWQtM3hsIHAtMi41IHNtOnAtNCBiZy1ncmFkaWVudC10by1iIGZyb20tWyMxYzA4MzZdIHZpYS1bIzEwMDMyMF0gdG8tWyMwODAxMTRdIGJvcmRlci0yIGJvcmRlci1jeWFuLTQwMCBzaGFkb3ctMnhsIHNoYWRvdy1jeWFuLTkwMC80MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JpZCBncmlkLWNvbHMtNSBnYXAtMS41IHNtOmdhcC0yLjUgYmctWyMwNTAxMGFdIHAtMS41IHNtOnAtMi41IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1jeWFuLTkwMC81MFwiPlxuICAgICAgICAgICAge1swLCAxLCAyLCAzLCA0XS5tYXAoKGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbHVtblN5bWJvbHMgPSBbMCwgMSwgMl0ubWFwKChyKSA9PiBncmlkW3JdPy5bY29sSW5kZXhdIHx8ICdzdHJhd2JlcnJ5Jyk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJlZWxcbiAgICAgICAgICAgICAgICAgIGtleT17YGJvbnVzLWNvbC0ke2NvbEluZGV4fWB9XG4gICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleD17Y29sSW5kZXh9XG4gICAgICAgICAgICAgICAgICBzeW1ib2xzPXtjb2x1bW5TeW1ib2xzfVxuICAgICAgICAgICAgICAgICAgaXNTcGlubmluZz17c3Bpbm5pbmdDb2x1bW5zW2NvbEluZGV4XX1cbiAgICAgICAgICAgICAgICAgIGV2YWx1YXRpb249e2V2YWx1YXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgeyFzcGlubmluZ0NvbHVtbnMuc29tZShCb29sZWFuKSAmJiBldmFsdWF0aW9uICYmIChcbiAgICAgICAgICAgICAgPFdpbkxpbmVPdmVybGF5IHdpbm5pbmdMaW5lcz17ZXZhbHVhdGlvbi5saW5lV2luc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmVzdWx0IG9mIGxhc3Qgc3BpbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC1jZW50ZXIgdGV4dC14cyBmb250LWJvbGQgbWluLWgtWzI0cHhdXCI+XG4gICAgICAgICAgICB7ZXZhbHVhdGlvbiAmJiBldmFsdWF0aW9uLnRvdGFsV2luID4gMCA/IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hbWJlci0zMDAgYW5pbWF0ZS1ib3VuY2VcIj5cbiAgICAgICAgICAgICAgICBTcGluIEhpdDogK3tldmFsdWF0aW9uLnRvdGFsV2luLnRvTG9jYWxlU3RyaW5nKCl9IEZyZWUgUG9pbnRzICh7Y3VycmVudE11bHRpcGxpZXJ9eCBhcHBsaWVkKSFcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSA6IGV2YWx1YXRpb24gJiYgIWlzU3Bpbm5pbmcgPyAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTMwMC84MFwiPk5vIG1hdGNoZXMgdGhpcyBzcGluPC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jeWFuLTMwMC84MFwiPlNwaW4gdG8gd2luIHdpdGgge2N1cnJlbnRNdWx0aXBsaWVyfXggTXVsdGlwbGllciE8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQm90dG9tIEFjdGlvbiBBcmVhICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXcteGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAge2lzQ29tcGxldGVkID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1hbWJlci01MDAvMjAgdmlhLXB1cnBsZS05MDAvNjAgdG8tcGluay01MDAvMjAgcC00IHJvdW5kZWQtM3hsIGJvcmRlci0yIGJvcmRlci15ZWxsb3ctNDAwIHRleHQtY2VudGVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8VHJvcGh5IGNsYXNzTmFtZT1cInctMTAgaC0xMCB0ZXh0LWFtYmVyLTQwMCBtYi0xIGFuaW1hdGUtYm91bmNlXCIgLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHNtOnRleHQtMnhsIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICAgICAgQm9udXMgUm91bmQgQ29tcGxldGUhXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDAgZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgK3thY2N1bXVsYXRlZFBvaW50cy50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtYW1iZXItNDAwIGJnLWFtYmVyLTUwMC8yMCBweC0yIHB5LTAuNSByb3VuZGVkIGJvcmRlciBib3JkZXItYW1iZXItNDAwLzQwXCI+XG4gICAgICAgICAgICAgICAgUE9JTlRTIFdPTlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1wdXJwbGUtMzAwIG1iLTNcIj5cbiAgICAgICAgICAgICAgUG9pbnRzIGhhdmUgYmVlbiBjcmVkaXRlZCB0byB5b3VyIHZpcnR1YWwgYmFsYW5jZSFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgICAgIG9uRmluaXNoKGFjY3VtdWxhdGVkUG9pbnRzKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhzIHB5LTMgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWFtYmVyLTUwMCB2aWEteWVsbG93LTQwMCB0by1hbWJlci01MDAgdGV4dC1hbWJlci05NTAgZm9udC1ibGFjayB0ZXh0LWJhc2UgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHNoYWRvdy1sZyBzaGFkb3ctYW1iZXItNDAwLzQwIGhvdmVyOmJyaWdodG5lc3MtMTEwIGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbGxlY3QgJiBSZXR1cm4gdG8gR2FtZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3Bpbm5pbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXtleGVjdXRlQm9udXNTcGlufVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIG1heC13LXhzIGgtMTQgc206aC0xNiByb3VuZGVkLTJ4bCBzbTpyb3VuZGVkLTN4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMyBmb250LWJsYWNrIHRleHQtbGcgc206dGV4dC14bCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgaXNTcGlubmluZ1xuICAgICAgICAgICAgICAgID8gJ2JnLXB1cnBsZS05MDAgdGV4dC1wdXJwbGUtNDAwIGN1cnNvci13YWl0J1xuICAgICAgICAgICAgICAgIDogJ2JnLWdyYWRpZW50LXRvLXIgZnJvbS1jeWFuLTUwMCB2aWEtcGluay01MDAgdG8tYW1iZXItNDAwIHRleHQtd2hpdGUgc2hhZG93LXhsIHNoYWRvdy1jeWFuLTUwMC80MCBob3ZlcjpicmlnaHRuZXNzLTExMCBhY3RpdmU6c2NhbGUtOTUnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNTcGlubmluZyA/IChcbiAgICAgICAgICAgICAgPHNwYW4+U1BJTk5JTkcgRlJFRSBSRUVMUy4uLjwvc3Bhbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8UGxheSBjbGFzc05hbWU9XCJ3LTUgaC01IGZpbGwtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPlNQSU4gRlJFRSBST1VORCB7c3BpbkluZGV4fS8zPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=