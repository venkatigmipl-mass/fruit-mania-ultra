const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"]; const useCallback = __vite__cjsImport0_react["useCallback"];const _jsxDEV = __vite__cjsImport17_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { generateInitialGrid, generateSpinGrid, evaluateSpin, DEFAULT_BET, STARTING_BALANCE, DAILY_BONUS_AMOUNT, REFILL_AMOUNT, NUM_ROWS, NUM_COLS } from "/src/utils/gameLogic.ts";
import { GameStorage } from "/src/services/storage.ts";
import { sound } from "/src/services/audio.ts";
// Reusable Components
import { GameHeader } from "/src/components/GameHeader.tsx";
import { ReelGrid } from "/src/components/ReelGrid.tsx";
import { WinDisplay } from "/src/components/WinDisplay.tsx";
import { SpinControls } from "/src/components/SpinControls.tsx";
import { BonusRound } from "/src/components/BonusRound.tsx";
import { GameHistory } from "/src/components/GameHistory.tsx";
import { SettingsModal } from "/src/components/SettingsModal.tsx";
import { PaytableModal } from "/src/components/PaytableModal.tsx";
import { DailyBonusModal } from "/src/components/DailyBonusModal.tsx";
import { RefillModal } from "/src/components/RefillModal.tsx";
import { WinCelebration } from "/src/components/WinCelebration.tsx";
import { DisclaimerBanner } from "/src/components/DisclaimerBanner.tsx";
import { ExportProjectModal } from "/src/components/ExportProjectModal.tsx";
var _jsxFileName = "/app/applet/src/App.tsx";
import __vite__cjsImport17_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const App = () => {
	// Game State
	const [balance, setBalance] = useState(() => GameStorage.getBalance());
	const [currentBet, setCurrentBet] = useState(DEFAULT_BET);
	const [grid, setGrid] = useState(() => generateInitialGrid());
	const [spinningColumns, setSpinningColumns] = useState([
		false,
		false,
		false,
		false,
		false
	]);
	const [isSpinning, setIsSpinning] = useState(false);
	const [evaluation, setEvaluation] = useState(null);
	const [lastWin, setLastWin] = useState(0);
	// Auto Spin
	const [autoSpinCount, setAutoSpinCount] = useState(0);
	// Dedicated Bonus Round State
	const [isBonusRoundActive, setIsBonusRoundActive] = useState(false);
	const [pendingBonusBet, setPendingBonusBet] = useState(DEFAULT_BET);
	// Modals
	const [showDailyModal, setShowDailyModal] = useState(false);
	const [showPaytableModal, setShowPaytableModal] = useState(false);
	const [showHistoryModal, setShowHistoryModal] = useState(false);
	const [showSettingsModal, setShowSettingsModal] = useState(false);
	const [showRefillModal, setShowRefillModal] = useState(false);
	const [showExportModal, setShowExportModal] = useState(false);
	const [celebrationWin, setCelebrationWin] = useState(null);
	// History & Statistics
	const [history, setHistory] = useState(() => GameStorage.getHistory());
	const [stats, setStats] = useState(() => GameStorage.getStats());
	const [sessionStats, setSessionStats] = useState({
		sessionSpins: 0,
		sessionBet: 0,
		sessionWon: 0,
		sessionHighestWin: 0
	});
	// Settings
	const [settings, setSettings] = useState(() => GameStorage.getSettings());
	// Daily Bonus State
	const [canClaimDaily, setCanClaimDaily] = useState(() => GameStorage.canClaimDailyBonus());
	const [dailyRemainingMs, setDailyRemainingMs] = useState(() => GameStorage.getDailyBonusRemainingMs());
	// Synchronize audio setting
	useEffect(() => {
		sound.setSoundEnabled(settings.soundEnabled);
	}, [settings.soundEnabled]);
	// Daily bonus countdown ticker
	useEffect(() => {
		const timer = setInterval(() => {
			const remaining = GameStorage.getDailyBonusRemainingMs();
			setDailyRemainingMs(remaining);
			setCanClaimDaily(remaining === 0);
		}, 1e3);
		return () => clearInterval(timer);
	}, []);
	// Update balance helper
	const updateBalance = (newVal) => {
		const safe = Math.max(0, newVal);
		setBalance(safe);
		GameStorage.setBalance(safe);
	};
	// Execute a main game spin
	const handleSpin = useCallback(() => {
		if (isSpinning || isBonusRoundActive) return;
		if (balance < currentBet) {
			sound.playButtonClick();
			setShowRefillModal(true);
			setAutoSpinCount(0);
			return;
		}
		// Deduct bet from balance immediately
		const nextBalance = balance - currentBet;
		updateBalance(nextBalance);
		// Update session bets
		setSessionStats((prev) => ({
			...prev,
			sessionSpins: prev.sessionSpins + 1,
			sessionBet: prev.sessionBet + currentBet
		}));
		// Reset previous outcome
		setEvaluation(null);
		setIsSpinning(true);
		setSpinningColumns([
			true,
			true,
			true,
			true,
			true
		]);
		sound.playSpinStart();
		if (settings.vibration && "vibrate" in navigator) {
			try {
				navigator.vibrate(25);
			} catch {}
		}
		// Generate random outcome
		const targetGrid = generateSpinGrid();
		const evalResult = evaluateSpin(targetGrid, currentBet);
		// Staggered reel stop timing
		const stepDelay = settings.turboSpeed ? 130 : 250;
		const baseDelay = settings.turboSpeed ? 300 : 650;
		for (let c = 0; c < NUM_COLS; c++) {
			const stopTime = baseDelay + c * stepDelay;
			setTimeout(() => {
				setGrid((prevGrid) => {
					const newGrid = prevGrid.map((row) => [...row]);
					for (let r = 0; r < NUM_ROWS; r++) {
						newGrid[r][c] = targetGrid[r][c];
					}
					return newGrid;
				});
				setSpinningColumns((prev) => {
					const updated = [...prev];
					updated[c] = false;
					return updated;
				});
				sound.playReelStop(c);
				if (settings.vibration && "vibrate" in navigator) {
					try {
						navigator.vibrate(15);
					} catch {}
				}
				// When all 5 reels stop
				if (c === NUM_COLS - 1) {
					setTimeout(() => {
						setIsSpinning(false);
						setEvaluation(evalResult);
						setLastWin(evalResult.totalWin);
						const finalBalance = nextBalance + evalResult.totalWin;
						if (evalResult.totalWin > 0) {
							updateBalance(finalBalance);
						}
						// Update session stats
						setSessionStats((prev) => ({
							...prev,
							sessionWon: prev.sessionWon + evalResult.totalWin,
							sessionHighestWin: Math.max(prev.sessionHighestWin, evalResult.totalWin)
						}));
						const hasWild = targetGrid.some((row) => row.includes("wild_star"));
						const hasScatter = evalResult.scatterWin !== null && evalResult.scatterWin.count > 0;
						// Summary for history
						let summary = "No match";
						if (evalResult.totalWin > 0) {
							if (evalResult.lineWins.length > 0 && evalResult.scatterWin) {
								summary = `${evalResult.lineWins.length} Line(s) + ${evalResult.scatterWin.count} Gems`;
							} else if (evalResult.lineWins.length > 0) {
								summary = `${evalResult.lineWins.length} Line Win${evalResult.lineWins.length > 1 ? "s" : ""}`;
							} else if (evalResult.scatterWin) {
								summary = `${evalResult.scatterWin.count} Scatter Gems!`;
							}
						}
						const record = {
							id: `${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
							timestamp: Date.now(),
							bet: currentBet,
							baseWin: evalResult.baseWin,
							multiplier: evalResult.multiplier,
							win: evalResult.totalWin,
							net: evalResult.totalWin - currentBet,
							summary,
							gridSnippet: targetGrid,
							hasWild,
							hasScatter,
							activatedBonus: evalResult.activatesBonusRound
						};
						const updatedHistory = GameStorage.addHistoryRecord(record);
						setHistory(updatedHistory);
						const updatedStats = GameStorage.updateStatsOnSpin(currentBet, evalResult.totalWin, hasWild, evalResult.activatesBonusRound, finalBalance);
						setStats(updatedStats);
						// Sounds & celebrations
						if (evalResult.activatesBonusRound) {
							// Trigger Bonus Gem feature after brief moment to appreciate the scatter gems
							setTimeout(() => {
								setPendingBonusBet(currentBet);
								setIsBonusRoundActive(true);
								setAutoSpinCount(0);
							}, 1200);
						} else if (evalResult.isBigWin || evalResult.isJackpot) {
							sound.playBigWin();
							setCelebrationWin({
								winAmount: evalResult.totalWin,
								betAmount: currentBet,
								isJackpot: evalResult.isJackpot
							});
						} else if (evalResult.multiplier > 1) {
							sound.playMultiplierPop(evalResult.multiplier);
						} else if (evalResult.totalWin > 0) {
							sound.playSmallWin();
						}
						// Auto Spin next trigger
						if (!evalResult.activatesBonusRound) {
							setAutoSpinCount((prevCount) => {
								if (prevCount > 1) {
									const nextCount = prevCount - 1;
									const pauseTime = settings.turboSpeed ? 650 : 1200;
									setTimeout(() => {
										if (finalBalance >= currentBet) {
											handleSpin();
										} else {
											setAutoSpinCount(0);
											setShowRefillModal(true);
										}
									}, pauseTime);
									return nextCount;
								}
								return 0;
							});
						}
					}, 150);
				}
			}, stopTime);
		}
	}, [
		isSpinning,
		isBonusRoundActive,
		balance,
		currentBet,
		settings.turboSpeed,
		settings.vibration
	]);
	// Auto spin controls
	const handleStartAutoSpin = (spins) => {
		setAutoSpinCount(spins);
		handleSpin();
	};
	const handleStopAutoSpin = () => {
		setAutoSpinCount(0);
	};
	// Bonus Round Completion
	const handleBonusRoundFinish = (totalBonusWon) => {
		setIsBonusRoundActive(false);
		if (totalBonusWon > 0) {
			const newBal = balance + totalBonusWon;
			updateBalance(newBal);
			setSessionStats((prev) => ({
				...prev,
				sessionWon: prev.sessionWon + totalBonusWon,
				sessionHighestWin: Math.max(prev.sessionHighestWin, totalBonusWon)
			}));
			setLastWin(totalBonusWon);
			// Trigger Celebration
			setCelebrationWin({
				winAmount: totalBonusWon,
				betAmount: pendingBonusBet,
				isJackpot: true
			});
		}
	};
	// Claim Daily Bonus
	const handleClaimDailyBonus = () => {
		const newBal = balance + DAILY_BONUS_AMOUNT;
		updateBalance(newBal);
		GameStorage.recordDailyClaim();
		setCanClaimDaily(false);
		setDailyRemainingMs(24 * 60 * 60 * 1e3);
	};
	// Free Points Booster
	const handleRefillPoints = () => {
		const newBal = balance + REFILL_AMOUNT;
		updateBalance(newBal);
	};
	// Reset Game Data
	const handleResetGame = () => {
		GameStorage.resetAll();
		setBalance(STARTING_BALANCE);
		setEvaluation(null);
		setLastWin(0);
		setAutoSpinCount(0);
		setGrid(generateInitialGrid());
		setHistory([]);
		setStats({
			spinsCount: 0,
			totalWon: 0,
			totalBet: 0,
			highestWin: 0,
			peakBalance: STARTING_BALANCE,
			wildsHit: 0,
			bonusRoundsTriggered: 0
		});
		setSessionStats({
			sessionSpins: 0,
			sessionBet: 0,
			sessionWon: 0,
			sessionHighestWin: 0
		});
		setCanClaimDaily(true);
		setDailyRemainingMs(0);
		sound.playSmallWin();
	};
	// Update Settings
	const handleUpdateSettings = (newSettings) => {
		setSettings(newSettings);
		GameStorage.saveSettings(newSettings);
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "min-h-screen bg-[#080114] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#24053f] via-[#110221] to-[#06000e] text-white flex flex-col justify-between selection:bg-pink-500 selection:text-white relative overflow-x-hidden",
		children: [
			/* @__PURE__ */ _jsxDEV("div", { className: "absolute top-12 left-10 w-32 h-32 rounded-full bg-pink-600/10 blur-3xl pointer-events-none animate-particle-1 -z-0" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 379,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", { className: "absolute top-1/2 right-12 w-44 h-44 rounded-full bg-purple-600/10 blur-3xl pointer-events-none animate-particle-2 -z-0" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 380,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", { className: "absolute bottom-16 left-1/3 w-36 h-36 rounded-full bg-amber-500/10 blur-3xl pointer-events-none animate-particle-3 -z-0" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 381,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(GameHeader, {
				balance,
				soundEnabled: settings.soundEnabled,
				onToggleSound: () => handleUpdateSettings({
					...settings,
					soundEnabled: !settings.soundEnabled
				}),
				turboSpeed: settings.turboSpeed,
				onToggleTurbo: () => handleUpdateSettings({
					...settings,
					turboSpeed: !settings.turboSpeed
				}),
				canClaimDaily,
				dailyRemainingMs,
				onOpenDaily: () => setShowDailyModal(true),
				onOpenPaytable: () => setShowPaytableModal(true),
				onOpenHistory: () => setShowHistoryModal(true),
				onOpenSettings: () => setShowSettingsModal(true),
				onOpenRefill: () => setShowRefillModal(true),
				onOpenExport: () => setShowExportModal(true)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 384,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1 flex flex-col items-center justify-center w-full px-2 py-1 max-w-2xl mx-auto z-10",
				children: [
					/* @__PURE__ */ _jsxDEV(ReelGrid, {
						grid,
						spinningColumns,
						evaluation,
						screenShake: settings.screenShake
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 407,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(WinDisplay, {
						evaluation,
						lastWin,
						isSpinning
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 415,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(SpinControls, {
						currentBet,
						onSelectBet: setCurrentBet,
						balance,
						isSpinning,
						onSpin: handleSpin,
						autoSpinCount,
						onStartAutoSpin: handleStartAutoSpin,
						onStopAutoSpin: handleStopAutoSpin
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 422,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 405,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(DisclaimerBanner, { onOpenRules: () => setShowPaytableModal(true) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 435,
				columnNumber: 7
			}, this),
			isBonusRoundActive && /* @__PURE__ */ _jsxDEV(BonusRound, {
				baseBet: pendingBonusBet,
				onFinish: handleBonusRoundFinish
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 439,
				columnNumber: 9
			}, this),
			celebrationWin && /* @__PURE__ */ _jsxDEV(WinCelebration, {
				winAmount: celebrationWin.winAmount,
				betAmount: celebrationWin.betAmount,
				isJackpot: celebrationWin.isJackpot,
				onClose: () => setCelebrationWin(null)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 447,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV(DailyBonusModal, {
				isOpen: showDailyModal,
				canClaim: canClaimDaily,
				remainingMs: dailyRemainingMs,
				onClaim: handleClaimDailyBonus,
				onClose: () => setShowDailyModal(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 456,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(PaytableModal, {
				isOpen: showPaytableModal,
				onClose: () => setShowPaytableModal(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 465,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(GameHistory, {
				isOpen: showHistoryModal,
				history,
				stats,
				sessionStats,
				onClose: () => setShowHistoryModal(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 471,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(SettingsModal, {
				isOpen: showSettingsModal,
				settings,
				onUpdateSettings: handleUpdateSettings,
				onResetGame: handleResetGame,
				onOpenExport: () => setShowExportModal(true),
				onClose: () => setShowSettingsModal(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 480,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(RefillModal, {
				isOpen: showRefillModal,
				balance,
				onRefill: handleRefillPoints,
				onClose: () => setShowRefillModal(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 490,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(ExportProjectModal, {
				isOpen: showExportModal,
				onClose: () => setShowExportModal(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 498,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 377,
		columnNumber: 5
	}, this);
};
export default App;

//# sourceMappingURL=data:application/json;base64,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cUIsSUFBSSxFQUFJOzs7OztHQUdqRSxzQkFDQyx3QkFBQyxZQUFEO0lBQ0UsU0FBUztJQUNULFVBQVU7R0FDWDs7Ozs7R0FJRixrQkFDQyx3QkFBQyxnQkFBRDtJQUNFLFdBQVcsZUFBZTtJQUMxQixXQUFXLGVBQWU7SUFDMUIsV0FBVyxlQUFlO0lBQzFCLGVBQWUsa0JBQWtCLElBQUk7R0FDdEM7Ozs7O0dBSUgsd0JBQUMsaUJBQUQ7SUFDRSxRQUFRO0lBQ1IsVUFBVTtJQUNWLGFBQWE7SUFDYixTQUFTO0lBQ1QsZUFBZSxrQkFBa0IsS0FBSztHQUN2Qzs7Ozs7R0FHRCx3QkFBQyxlQUFEO0lBQ0UsUUFBUTtJQUNSLGVBQWUscUJBQXFCLEtBQUs7R0FDMUM7Ozs7O0dBR0Qsd0JBQUMsYUFBRDtJQUNFLFFBQVE7SUFDQztJQUNGO0lBQ087SUFDZCxlQUFlLG9CQUFvQixLQUFLO0dBQ3pDOzs7OztHQUdELHdCQUFDLGVBQUQ7SUFDRSxRQUFRO0lBQ0U7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9CQUFvQixtQkFBbUIsSUFBSTtJQUMzQyxlQUFlLHFCQUFxQixLQUFLO0dBQzFDOzs7OztHQUdELHdCQUFDLGFBQUQ7SUFDRSxRQUFRO0lBQ0M7SUFDVCxVQUFVO0lBQ1YsZUFBZSxtQkFBbUIsS0FBSztHQUN4Qzs7Ozs7R0FHRCx3QkFBQyxvQkFBRDtJQUNFLFFBQVE7SUFDUixlQUFlLG1CQUFtQixLQUFLO0dBQ3hDOzs7OztFQUNFOzs7Ozs7QUFFVDtBQUVBLGVBQWUiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBTeW1ib2xJZCxcbiAgU3BpbkV2YWx1YXRpb24sXG4gIFNwaW5IaXN0b3J5UmVjb3JkLFxuICBVc2VyU3RhdHMsXG4gIFNlc3Npb25TdGF0cyxcbiAgR2FtZVNldHRpbmdzXG59IGZyb20gJy4vdHlwZXMvZ2FtZSc7XG5pbXBvcnQge1xuICBnZW5lcmF0ZUluaXRpYWxHcmlkLFxuICBnZW5lcmF0ZVNwaW5HcmlkLFxuICBldmFsdWF0ZVNwaW4sXG4gIERFRkFVTFRfQkVULFxuICBTVEFSVElOR19CQUxBTkNFLFxuICBEQUlMWV9CT05VU19BTU9VTlQsXG4gIFJFRklMTF9BTU9VTlQsXG4gIE5VTV9ST1dTLFxuICBOVU1fQ09MU1xufSBmcm9tICcuL3V0aWxzL2dhbWVMb2dpYyc7XG5pbXBvcnQgeyBHYW1lU3RvcmFnZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZSc7XG5pbXBvcnQgeyBzb3VuZCB9IGZyb20gJy4vc2VydmljZXMvYXVkaW8nO1xuXG4vLyBSZXVzYWJsZSBDb21wb25lbnRzXG5pbXBvcnQgeyBHYW1lSGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0dhbWVIZWFkZXInO1xuaW1wb3J0IHsgUmVlbEdyaWQgfSBmcm9tICcuL2NvbXBvbmVudHMvUmVlbEdyaWQnO1xuaW1wb3J0IHsgV2luRGlzcGxheSB9IGZyb20gJy4vY29tcG9uZW50cy9XaW5EaXNwbGF5JztcbmltcG9ydCB7IFNwaW5Db250cm9scyB9IGZyb20gJy4vY29tcG9uZW50cy9TcGluQ29udHJvbHMnO1xuaW1wb3J0IHsgQm9udXNSb3VuZCB9IGZyb20gJy4vY29tcG9uZW50cy9Cb251c1JvdW5kJztcbmltcG9ydCB7IEdhbWVIaXN0b3J5IH0gZnJvbSAnLi9jb21wb25lbnRzL0dhbWVIaXN0b3J5JztcbmltcG9ydCB7IFNldHRpbmdzTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvU2V0dGluZ3NNb2RhbCc7XG5pbXBvcnQgeyBQYXl0YWJsZU1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL1BheXRhYmxlTW9kYWwnO1xuaW1wb3J0IHsgRGFpbHlCb251c01vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL0RhaWx5Qm9udXNNb2RhbCc7XG5pbXBvcnQgeyBSZWZpbGxNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9SZWZpbGxNb2RhbCc7XG5pbXBvcnQgeyBXaW5DZWxlYnJhdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9XaW5DZWxlYnJhdGlvbic7XG5pbXBvcnQgeyBEaXNjbGFpbWVyQmFubmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0Rpc2NsYWltZXJCYW5uZXInO1xuaW1wb3J0IHsgRXhwb3J0UHJvamVjdE1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL0V4cG9ydFByb2plY3RNb2RhbCc7XG5cbmV4cG9ydCBjb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAvLyBHYW1lIFN0YXRlXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlPG51bWJlcj4oKCkgPT4gR2FtZVN0b3JhZ2UuZ2V0QmFsYW5jZSgpKTtcbiAgY29uc3QgW2N1cnJlbnRCZXQsIHNldEN1cnJlbnRCZXRdID0gdXNlU3RhdGU8bnVtYmVyPihERUZBVUxUX0JFVCk7XG4gIGNvbnN0IFtncmlkLCBzZXRHcmlkXSA9IHVzZVN0YXRlPFN5bWJvbElkW11bXT4oKCkgPT4gZ2VuZXJhdGVJbml0aWFsR3JpZCgpKTtcbiAgY29uc3QgW3NwaW5uaW5nQ29sdW1ucywgc2V0U3Bpbm5pbmdDb2x1bW5zXSA9IHVzZVN0YXRlPGJvb2xlYW5bXT4oW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0pO1xuICBjb25zdCBbaXNTcGlubmluZywgc2V0SXNTcGlubmluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtldmFsdWF0aW9uLCBzZXRFdmFsdWF0aW9uXSA9IHVzZVN0YXRlPFNwaW5FdmFsdWF0aW9uIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsYXN0V2luLCBzZXRMYXN0V2luXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgLy8gQXV0byBTcGluXG4gIGNvbnN0IFthdXRvU3BpbkNvdW50LCBzZXRBdXRvU3BpbkNvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgLy8gRGVkaWNhdGVkIEJvbnVzIFJvdW5kIFN0YXRlXG4gIGNvbnN0IFtpc0JvbnVzUm91bmRBY3RpdmUsIHNldElzQm9udXNSb3VuZEFjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtwZW5kaW5nQm9udXNCZXQsIHNldFBlbmRpbmdCb251c0JldF0gPSB1c2VTdGF0ZTxudW1iZXI+KERFRkFVTFRfQkVUKTtcblxuICAvLyBNb2RhbHNcbiAgY29uc3QgW3Nob3dEYWlseU1vZGFsLCBzZXRTaG93RGFpbHlNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzaG93UGF5dGFibGVNb2RhbCwgc2V0U2hvd1BheXRhYmxlTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2hvd0hpc3RvcnlNb2RhbCwgc2V0U2hvd0hpc3RvcnlNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzaG93U2V0dGluZ3NNb2RhbCwgc2V0U2hvd1NldHRpbmdzTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2hvd1JlZmlsbE1vZGFsLCBzZXRTaG93UmVmaWxsTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2hvd0V4cG9ydE1vZGFsLCBzZXRTaG93RXhwb3J0TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbY2VsZWJyYXRpb25XaW4sIHNldENlbGVicmF0aW9uV2luXSA9IHVzZVN0YXRlPHtcbiAgICB3aW5BbW91bnQ6IG51bWJlcjtcbiAgICBiZXRBbW91bnQ6IG51bWJlcjtcbiAgICBpc0phY2twb3Q6IGJvb2xlYW47XG4gIH0gfCBudWxsPihudWxsKTtcblxuICAvLyBIaXN0b3J5ICYgU3RhdGlzdGljc1xuICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZTxTcGluSGlzdG9yeVJlY29yZFtdPigoKSA9PiBHYW1lU3RvcmFnZS5nZXRIaXN0b3J5KCkpO1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPFVzZXJTdGF0cz4oKCkgPT4gR2FtZVN0b3JhZ2UuZ2V0U3RhdHMoKSk7XG4gIGNvbnN0IFtzZXNzaW9uU3RhdHMsIHNldFNlc3Npb25TdGF0c10gPSB1c2VTdGF0ZTxTZXNzaW9uU3RhdHM+KHtcbiAgICBzZXNzaW9uU3BpbnM6IDAsXG4gICAgc2Vzc2lvbkJldDogMCxcbiAgICBzZXNzaW9uV29uOiAwLFxuICAgIHNlc3Npb25IaWdoZXN0V2luOiAwXG4gIH0pO1xuXG4gIC8vIFNldHRpbmdzXG4gIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gdXNlU3RhdGU8R2FtZVNldHRpbmdzPigoKSA9PiBHYW1lU3RvcmFnZS5nZXRTZXR0aW5ncygpKTtcblxuICAvLyBEYWlseSBCb251cyBTdGF0ZVxuICBjb25zdCBbY2FuQ2xhaW1EYWlseSwgc2V0Q2FuQ2xhaW1EYWlseV0gPSB1c2VTdGF0ZTxib29sZWFuPigoKSA9PiBHYW1lU3RvcmFnZS5jYW5DbGFpbURhaWx5Qm9udXMoKSk7XG4gIGNvbnN0IFtkYWlseVJlbWFpbmluZ01zLCBzZXREYWlseVJlbWFpbmluZ01zXSA9IHVzZVN0YXRlPG51bWJlcj4oKCkgPT4gR2FtZVN0b3JhZ2UuZ2V0RGFpbHlCb251c1JlbWFpbmluZ01zKCkpO1xuXG4gIC8vIFN5bmNocm9uaXplIGF1ZGlvIHNldHRpbmdcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb3VuZC5zZXRTb3VuZEVuYWJsZWQoc2V0dGluZ3Muc291bmRFbmFibGVkKTtcbiAgfSwgW3NldHRpbmdzLnNvdW5kRW5hYmxlZF0pO1xuXG4gIC8vIERhaWx5IGJvbnVzIGNvdW50ZG93biB0aWNrZXJcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZyA9IEdhbWVTdG9yYWdlLmdldERhaWx5Qm9udXNSZW1haW5pbmdNcygpO1xuICAgICAgc2V0RGFpbHlSZW1haW5pbmdNcyhyZW1haW5pbmcpO1xuICAgICAgc2V0Q2FuQ2xhaW1EYWlseShyZW1haW5pbmcgPT09IDApO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIC8vIFVwZGF0ZSBiYWxhbmNlIGhlbHBlclxuICBjb25zdCB1cGRhdGVCYWxhbmNlID0gKG5ld1ZhbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgc2FmZSA9IE1hdGgubWF4KDAsIG5ld1ZhbCk7XG4gICAgc2V0QmFsYW5jZShzYWZlKTtcbiAgICBHYW1lU3RvcmFnZS5zZXRCYWxhbmNlKHNhZmUpO1xuICB9O1xuXG4gIC8vIEV4ZWN1dGUgYSBtYWluIGdhbWUgc3BpblxuICBjb25zdCBoYW5kbGVTcGluID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChpc1NwaW5uaW5nIHx8IGlzQm9udXNSb3VuZEFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgaWYgKGJhbGFuY2UgPCBjdXJyZW50QmV0KSB7XG4gICAgICBzb3VuZC5wbGF5QnV0dG9uQ2xpY2soKTtcbiAgICAgIHNldFNob3dSZWZpbGxNb2RhbCh0cnVlKTtcbiAgICAgIHNldEF1dG9TcGluQ291bnQoMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRGVkdWN0IGJldCBmcm9tIGJhbGFuY2UgaW1tZWRpYXRlbHlcbiAgICBjb25zdCBuZXh0QmFsYW5jZSA9IGJhbGFuY2UgLSBjdXJyZW50QmV0O1xuICAgIHVwZGF0ZUJhbGFuY2UobmV4dEJhbGFuY2UpO1xuXG4gICAgLy8gVXBkYXRlIHNlc3Npb24gYmV0c1xuICAgIHNldFNlc3Npb25TdGF0cygocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBzZXNzaW9uU3BpbnM6IHByZXYuc2Vzc2lvblNwaW5zICsgMSxcbiAgICAgIHNlc3Npb25CZXQ6IHByZXYuc2Vzc2lvbkJldCArIGN1cnJlbnRCZXRcbiAgICB9KSk7XG5cbiAgICAvLyBSZXNldCBwcmV2aW91cyBvdXRjb21lXG4gICAgc2V0RXZhbHVhdGlvbihudWxsKTtcbiAgICBzZXRJc1NwaW5uaW5nKHRydWUpO1xuICAgIHNldFNwaW5uaW5nQ29sdW1ucyhbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0pO1xuXG4gICAgc291bmQucGxheVNwaW5TdGFydCgpO1xuICAgIGlmIChzZXR0aW5ncy52aWJyYXRpb24gJiYgJ3ZpYnJhdGUnIGluIG5hdmlnYXRvcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmF2aWdhdG9yLnZpYnJhdGUoMjUpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIGlnbm9yZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIHJhbmRvbSBvdXRjb21lXG4gICAgY29uc3QgdGFyZ2V0R3JpZCA9IGdlbmVyYXRlU3BpbkdyaWQoKTtcbiAgICBjb25zdCBldmFsUmVzdWx0ID0gZXZhbHVhdGVTcGluKHRhcmdldEdyaWQsIGN1cnJlbnRCZXQpO1xuXG4gICAgLy8gU3RhZ2dlcmVkIHJlZWwgc3RvcCB0aW1pbmdcbiAgICBjb25zdCBzdGVwRGVsYXkgPSBzZXR0aW5ncy50dXJib1NwZWVkID8gMTMwIDogMjUwO1xuICAgIGNvbnN0IGJhc2VEZWxheSA9IHNldHRpbmdzLnR1cmJvU3BlZWQgPyAzMDAgOiA2NTA7XG5cbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IE5VTV9DT0xTOyBjKyspIHtcbiAgICAgIGNvbnN0IHN0b3BUaW1lID0gYmFzZURlbGF5ICsgYyAqIHN0ZXBEZWxheTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRHcmlkKChwcmV2R3JpZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0dyaWQgPSBwcmV2R3JpZC5tYXAoKHJvdykgPT4gWy4uLnJvd10pO1xuICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgTlVNX1JPV1M7IHIrKykge1xuICAgICAgICAgICAgbmV3R3JpZFtyXVtjXSA9IHRhcmdldEdyaWRbcl1bY107XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXdHcmlkO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRTcGlubmluZ0NvbHVtbnMoKHByZXYpID0+IHtcbiAgICAgICAgICBjb25zdCB1cGRhdGVkID0gWy4uLnByZXZdO1xuICAgICAgICAgIHVwZGF0ZWRbY10gPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdXBkYXRlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc291bmQucGxheVJlZWxTdG9wKGMpO1xuICAgICAgICBpZiAoc2V0dGluZ3MudmlicmF0aW9uICYmICd2aWJyYXRlJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmF2aWdhdG9yLnZpYnJhdGUoMTUpO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiBhbGwgNSByZWVscyBzdG9wXG4gICAgICAgIGlmIChjID09PSBOVU1fQ09MUyAtIDEpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldElzU3Bpbm5pbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0RXZhbHVhdGlvbihldmFsUmVzdWx0KTtcbiAgICAgICAgICAgIHNldExhc3RXaW4oZXZhbFJlc3VsdC50b3RhbFdpbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbmFsQmFsYW5jZSA9IG5leHRCYWxhbmNlICsgZXZhbFJlc3VsdC50b3RhbFdpbjtcbiAgICAgICAgICAgIGlmIChldmFsUmVzdWx0LnRvdGFsV2luID4gMCkge1xuICAgICAgICAgICAgICB1cGRhdGVCYWxhbmNlKGZpbmFsQmFsYW5jZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzZXNzaW9uIHN0YXRzXG4gICAgICAgICAgICBzZXRTZXNzaW9uU3RhdHMoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgIHNlc3Npb25Xb246IHByZXYuc2Vzc2lvbldvbiArIGV2YWxSZXN1bHQudG90YWxXaW4sXG4gICAgICAgICAgICAgIHNlc3Npb25IaWdoZXN0V2luOiBNYXRoLm1heChwcmV2LnNlc3Npb25IaWdoZXN0V2luLCBldmFsUmVzdWx0LnRvdGFsV2luKVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBjb25zdCBoYXNXaWxkID0gdGFyZ2V0R3JpZC5zb21lKChyb3cpID0+IHJvdy5pbmNsdWRlcygnd2lsZF9zdGFyJykpO1xuICAgICAgICAgICAgY29uc3QgaGFzU2NhdHRlciA9IGV2YWxSZXN1bHQuc2NhdHRlcldpbiAhPT0gbnVsbCAmJiBldmFsUmVzdWx0LnNjYXR0ZXJXaW4uY291bnQgPiAwO1xuXG4gICAgICAgICAgICAvLyBTdW1tYXJ5IGZvciBoaXN0b3J5XG4gICAgICAgICAgICBsZXQgc3VtbWFyeSA9ICdObyBtYXRjaCc7XG4gICAgICAgICAgICBpZiAoZXZhbFJlc3VsdC50b3RhbFdpbiA+IDApIHtcbiAgICAgICAgICAgICAgaWYgKGV2YWxSZXN1bHQubGluZVdpbnMubGVuZ3RoID4gMCAmJiBldmFsUmVzdWx0LnNjYXR0ZXJXaW4pIHtcbiAgICAgICAgICAgICAgICBzdW1tYXJ5ID0gYCR7ZXZhbFJlc3VsdC5saW5lV2lucy5sZW5ndGh9IExpbmUocykgKyAke2V2YWxSZXN1bHQuc2NhdHRlcldpbi5jb3VudH0gR2Vtc2A7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZhbFJlc3VsdC5saW5lV2lucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc3VtbWFyeSA9IGAke2V2YWxSZXN1bHQubGluZVdpbnMubGVuZ3RofSBMaW5lIFdpbiR7ZXZhbFJlc3VsdC5saW5lV2lucy5sZW5ndGggPiAxID8gJ3MnIDogJyd9YDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmFsUmVzdWx0LnNjYXR0ZXJXaW4pIHtcbiAgICAgICAgICAgICAgICBzdW1tYXJ5ID0gYCR7ZXZhbFJlc3VsdC5zY2F0dGVyV2luLmNvdW50fSBTY2F0dGVyIEdlbXMhYDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZWNvcmQ6IFNwaW5IaXN0b3J5UmVjb3JkID0ge1xuICAgICAgICAgICAgICBpZDogYCR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgNil9YCxcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICBiZXQ6IGN1cnJlbnRCZXQsXG4gICAgICAgICAgICAgIGJhc2VXaW46IGV2YWxSZXN1bHQuYmFzZVdpbixcbiAgICAgICAgICAgICAgbXVsdGlwbGllcjogZXZhbFJlc3VsdC5tdWx0aXBsaWVyLFxuICAgICAgICAgICAgICB3aW46IGV2YWxSZXN1bHQudG90YWxXaW4sXG4gICAgICAgICAgICAgIG5ldDogZXZhbFJlc3VsdC50b3RhbFdpbiAtIGN1cnJlbnRCZXQsXG4gICAgICAgICAgICAgIHN1bW1hcnksXG4gICAgICAgICAgICAgIGdyaWRTbmlwcGV0OiB0YXJnZXRHcmlkLFxuICAgICAgICAgICAgICBoYXNXaWxkLFxuICAgICAgICAgICAgICBoYXNTY2F0dGVyLFxuICAgICAgICAgICAgICBhY3RpdmF0ZWRCb251czogZXZhbFJlc3VsdC5hY3RpdmF0ZXNCb251c1JvdW5kXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkSGlzdG9yeSA9IEdhbWVTdG9yYWdlLmFkZEhpc3RvcnlSZWNvcmQocmVjb3JkKTtcbiAgICAgICAgICAgIHNldEhpc3RvcnkodXBkYXRlZEhpc3RvcnkpO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkU3RhdHMgPSBHYW1lU3RvcmFnZS51cGRhdGVTdGF0c09uU3BpbihcbiAgICAgICAgICAgICAgY3VycmVudEJldCxcbiAgICAgICAgICAgICAgZXZhbFJlc3VsdC50b3RhbFdpbixcbiAgICAgICAgICAgICAgaGFzV2lsZCxcbiAgICAgICAgICAgICAgZXZhbFJlc3VsdC5hY3RpdmF0ZXNCb251c1JvdW5kLFxuICAgICAgICAgICAgICBmaW5hbEJhbGFuY2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRTdGF0cyh1cGRhdGVkU3RhdHMpO1xuXG4gICAgICAgICAgICAvLyBTb3VuZHMgJiBjZWxlYnJhdGlvbnNcbiAgICAgICAgICAgIGlmIChldmFsUmVzdWx0LmFjdGl2YXRlc0JvbnVzUm91bmQpIHtcbiAgICAgICAgICAgICAgLy8gVHJpZ2dlciBCb251cyBHZW0gZmVhdHVyZSBhZnRlciBicmllZiBtb21lbnQgdG8gYXBwcmVjaWF0ZSB0aGUgc2NhdHRlciBnZW1zXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBlbmRpbmdCb251c0JldChjdXJyZW50QmV0KTtcbiAgICAgICAgICAgICAgICBzZXRJc0JvbnVzUm91bmRBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0QXV0b1NwaW5Db3VudCgwKTsgLy8gU3RvcCBhdXRvIHNwaW4gZHVyaW5nIGJvbnVzIHJvdW5kXG4gICAgICAgICAgICAgIH0sIDEyMDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmFsUmVzdWx0LmlzQmlnV2luIHx8IGV2YWxSZXN1bHQuaXNKYWNrcG90KSB7XG4gICAgICAgICAgICAgIHNvdW5kLnBsYXlCaWdXaW4oKTtcbiAgICAgICAgICAgICAgc2V0Q2VsZWJyYXRpb25XaW4oe1xuICAgICAgICAgICAgICAgIHdpbkFtb3VudDogZXZhbFJlc3VsdC50b3RhbFdpbixcbiAgICAgICAgICAgICAgICBiZXRBbW91bnQ6IGN1cnJlbnRCZXQsXG4gICAgICAgICAgICAgICAgaXNKYWNrcG90OiBldmFsUmVzdWx0LmlzSmFja3BvdFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZhbFJlc3VsdC5tdWx0aXBsaWVyID4gMSkge1xuICAgICAgICAgICAgICBzb3VuZC5wbGF5TXVsdGlwbGllclBvcChldmFsUmVzdWx0Lm11bHRpcGxpZXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmFsUmVzdWx0LnRvdGFsV2luID4gMCkge1xuICAgICAgICAgICAgICBzb3VuZC5wbGF5U21hbGxXaW4oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXV0byBTcGluIG5leHQgdHJpZ2dlclxuICAgICAgICAgICAgaWYgKCFldmFsUmVzdWx0LmFjdGl2YXRlc0JvbnVzUm91bmQpIHtcbiAgICAgICAgICAgICAgc2V0QXV0b1NwaW5Db3VudCgocHJldkNvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZDb3VudCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRDb3VudCA9IHByZXZDb3VudCAtIDE7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXVzZVRpbWUgPSBzZXR0aW5ncy50dXJib1NwZWVkID8gNjUwIDogMTIwMDtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmluYWxCYWxhbmNlID49IGN1cnJlbnRCZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTcGluKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0QXV0b1NwaW5Db3VudCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UmVmaWxsTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sIHBhdXNlVGltZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dENvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgfVxuICAgICAgfSwgc3RvcFRpbWUpO1xuICAgIH1cbiAgfSwgW1xuICAgIGlzU3Bpbm5pbmcsXG4gICAgaXNCb251c1JvdW5kQWN0aXZlLFxuICAgIGJhbGFuY2UsXG4gICAgY3VycmVudEJldCxcbiAgICBzZXR0aW5ncy50dXJib1NwZWVkLFxuICAgIHNldHRpbmdzLnZpYnJhdGlvblxuICBdKTtcblxuICAvLyBBdXRvIHNwaW4gY29udHJvbHNcbiAgY29uc3QgaGFuZGxlU3RhcnRBdXRvU3BpbiA9IChzcGluczogbnVtYmVyKSA9PiB7XG4gICAgc2V0QXV0b1NwaW5Db3VudChzcGlucyk7XG4gICAgaGFuZGxlU3BpbigpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN0b3BBdXRvU3BpbiA9ICgpID0+IHtcbiAgICBzZXRBdXRvU3BpbkNvdW50KDApO1xuICB9O1xuXG4gIC8vIEJvbnVzIFJvdW5kIENvbXBsZXRpb25cbiAgY29uc3QgaGFuZGxlQm9udXNSb3VuZEZpbmlzaCA9ICh0b3RhbEJvbnVzV29uOiBudW1iZXIpID0+IHtcbiAgICBzZXRJc0JvbnVzUm91bmRBY3RpdmUoZmFsc2UpO1xuICAgIGlmICh0b3RhbEJvbnVzV29uID4gMCkge1xuICAgICAgY29uc3QgbmV3QmFsID0gYmFsYW5jZSArIHRvdGFsQm9udXNXb247XG4gICAgICB1cGRhdGVCYWxhbmNlKG5ld0JhbCk7XG5cbiAgICAgIHNldFNlc3Npb25TdGF0cygocHJldikgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgc2Vzc2lvbldvbjogcHJldi5zZXNzaW9uV29uICsgdG90YWxCb251c1dvbixcbiAgICAgICAgc2Vzc2lvbkhpZ2hlc3RXaW46IE1hdGgubWF4KHByZXYuc2Vzc2lvbkhpZ2hlc3RXaW4sIHRvdGFsQm9udXNXb24pXG4gICAgICB9KSk7XG5cbiAgICAgIHNldExhc3RXaW4odG90YWxCb251c1dvbik7XG5cbiAgICAgIC8vIFRyaWdnZXIgQ2VsZWJyYXRpb25cbiAgICAgIHNldENlbGVicmF0aW9uV2luKHtcbiAgICAgICAgd2luQW1vdW50OiB0b3RhbEJvbnVzV29uLFxuICAgICAgICBiZXRBbW91bnQ6IHBlbmRpbmdCb251c0JldCxcbiAgICAgICAgaXNKYWNrcG90OiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ2xhaW0gRGFpbHkgQm9udXNcbiAgY29uc3QgaGFuZGxlQ2xhaW1EYWlseUJvbnVzID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0JhbCA9IGJhbGFuY2UgKyBEQUlMWV9CT05VU19BTU9VTlQ7XG4gICAgdXBkYXRlQmFsYW5jZShuZXdCYWwpO1xuICAgIEdhbWVTdG9yYWdlLnJlY29yZERhaWx5Q2xhaW0oKTtcbiAgICBzZXRDYW5DbGFpbURhaWx5KGZhbHNlKTtcbiAgICBzZXREYWlseVJlbWFpbmluZ01zKDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICB9O1xuXG4gIC8vIEZyZWUgUG9pbnRzIEJvb3N0ZXJcbiAgY29uc3QgaGFuZGxlUmVmaWxsUG9pbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0JhbCA9IGJhbGFuY2UgKyBSRUZJTExfQU1PVU5UO1xuICAgIHVwZGF0ZUJhbGFuY2UobmV3QmFsKTtcbiAgfTtcblxuICAvLyBSZXNldCBHYW1lIERhdGFcbiAgY29uc3QgaGFuZGxlUmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIEdhbWVTdG9yYWdlLnJlc2V0QWxsKCk7XG4gICAgc2V0QmFsYW5jZShTVEFSVElOR19CQUxBTkNFKTtcbiAgICBzZXRFdmFsdWF0aW9uKG51bGwpO1xuICAgIHNldExhc3RXaW4oMCk7XG4gICAgc2V0QXV0b1NwaW5Db3VudCgwKTtcbiAgICBzZXRHcmlkKGdlbmVyYXRlSW5pdGlhbEdyaWQoKSk7XG4gICAgc2V0SGlzdG9yeShbXSk7XG4gICAgc2V0U3RhdHMoe1xuICAgICAgc3BpbnNDb3VudDogMCxcbiAgICAgIHRvdGFsV29uOiAwLFxuICAgICAgdG90YWxCZXQ6IDAsXG4gICAgICBoaWdoZXN0V2luOiAwLFxuICAgICAgcGVha0JhbGFuY2U6IFNUQVJUSU5HX0JBTEFOQ0UsXG4gICAgICB3aWxkc0hpdDogMCxcbiAgICAgIGJvbnVzUm91bmRzVHJpZ2dlcmVkOiAwXG4gICAgfSk7XG4gICAgc2V0U2Vzc2lvblN0YXRzKHtcbiAgICAgIHNlc3Npb25TcGluczogMCxcbiAgICAgIHNlc3Npb25CZXQ6IDAsXG4gICAgICBzZXNzaW9uV29uOiAwLFxuICAgICAgc2Vzc2lvbkhpZ2hlc3RXaW46IDBcbiAgICB9KTtcbiAgICBzZXRDYW5DbGFpbURhaWx5KHRydWUpO1xuICAgIHNldERhaWx5UmVtYWluaW5nTXMoMCk7XG4gICAgc291bmQucGxheVNtYWxsV2luKCk7XG4gIH07XG5cbiAgLy8gVXBkYXRlIFNldHRpbmdzXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVNldHRpbmdzID0gKG5ld1NldHRpbmdzOiBHYW1lU2V0dGluZ3MpID0+IHtcbiAgICBzZXRTZXR0aW5ncyhuZXdTZXR0aW5ncyk7XG4gICAgR2FtZVN0b3JhZ2Uuc2F2ZVNldHRpbmdzKG5ld1NldHRpbmdzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLVsjMDgwMTE0XSBiZy1bcmFkaWFsLWdyYWRpZW50KGVsbGlwc2VfYXRfdG9wLF92YXIoLS10dy1ncmFkaWVudC1zdG9wcykpXSBmcm9tLVsjMjQwNTNmXSB2aWEtWyMxMTAyMjFdIHRvLVsjMDYwMDBlXSB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHNlbGVjdGlvbjpiZy1waW5rLTUwMCBzZWxlY3Rpb246dGV4dC13aGl0ZSByZWxhdGl2ZSBvdmVyZmxvdy14LWhpZGRlblwiPlxuICAgICAgey8qIEZsb2F0aW5nIHN1YnRsZSBhbWJpZW50IHBhcnRpY2xlcyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEyIGxlZnQtMTAgdy0zMiBoLTMyIHJvdW5kZWQtZnVsbCBiZy1waW5rLTYwMC8xMCBibHVyLTN4bCBwb2ludGVyLWV2ZW50cy1ub25lIGFuaW1hdGUtcGFydGljbGUtMSAtei0wXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiByaWdodC0xMiB3LTQ0IGgtNDQgcm91bmRlZC1mdWxsIGJnLXB1cnBsZS02MDAvMTAgYmx1ci0zeGwgcG9pbnRlci1ldmVudHMtbm9uZSBhbmltYXRlLXBhcnRpY2xlLTIgLXotMFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0xNiBsZWZ0LTEvMyB3LTM2IGgtMzYgcm91bmRlZC1mdWxsIGJnLWFtYmVyLTUwMC8xMCBibHVyLTN4bCBwb2ludGVyLWV2ZW50cy1ub25lIGFuaW1hdGUtcGFydGljbGUtMyAtei0wXCIgLz5cblxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxHYW1lSGVhZGVyXG4gICAgICAgIGJhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgIHNvdW5kRW5hYmxlZD17c2V0dGluZ3Muc291bmRFbmFibGVkfVxuICAgICAgICBvblRvZ2dsZVNvdW5kPXsoKSA9PlxuICAgICAgICAgIGhhbmRsZVVwZGF0ZVNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIHNvdW5kRW5hYmxlZDogIXNldHRpbmdzLnNvdW5kRW5hYmxlZCB9KVxuICAgICAgICB9XG4gICAgICAgIHR1cmJvU3BlZWQ9e3NldHRpbmdzLnR1cmJvU3BlZWR9XG4gICAgICAgIG9uVG9nZ2xlVHVyYm89eygpID0+XG4gICAgICAgICAgaGFuZGxlVXBkYXRlU2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgdHVyYm9TcGVlZDogIXNldHRpbmdzLnR1cmJvU3BlZWQgfSlcbiAgICAgICAgfVxuICAgICAgICBjYW5DbGFpbURhaWx5PXtjYW5DbGFpbURhaWx5fVxuICAgICAgICBkYWlseVJlbWFpbmluZ01zPXtkYWlseVJlbWFpbmluZ01zfVxuICAgICAgICBvbk9wZW5EYWlseT17KCkgPT4gc2V0U2hvd0RhaWx5TW9kYWwodHJ1ZSl9XG4gICAgICAgIG9uT3BlblBheXRhYmxlPXsoKSA9PiBzZXRTaG93UGF5dGFibGVNb2RhbCh0cnVlKX1cbiAgICAgICAgb25PcGVuSGlzdG9yeT17KCkgPT4gc2V0U2hvd0hpc3RvcnlNb2RhbCh0cnVlKX1cbiAgICAgICAgb25PcGVuU2V0dGluZ3M9eygpID0+IHNldFNob3dTZXR0aW5nc01vZGFsKHRydWUpfVxuICAgICAgICBvbk9wZW5SZWZpbGw9eygpID0+IHNldFNob3dSZWZpbGxNb2RhbCh0cnVlKX1cbiAgICAgICAgb25PcGVuRXhwb3J0PXsoKSA9PiBzZXRTaG93RXhwb3J0TW9kYWwodHJ1ZSl9XG4gICAgICAvPlxuXG4gICAgICB7LyogTWFpbiBHYW1lIFN0YWdlICovfVxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBweC0yIHB5LTEgbWF4LXctMnhsIG14LWF1dG8gei0xMFwiPlxuICAgICAgICB7LyogNXgzIEFkdmFuY2VkIFJlZWwgR3JpZCAqL31cbiAgICAgICAgPFJlZWxHcmlkXG4gICAgICAgICAgZ3JpZD17Z3JpZH1cbiAgICAgICAgICBzcGlubmluZ0NvbHVtbnM9e3NwaW5uaW5nQ29sdW1uc31cbiAgICAgICAgICBldmFsdWF0aW9uPXtldmFsdWF0aW9ufVxuICAgICAgICAgIHNjcmVlblNoYWtlPXtzZXR0aW5ncy5zY3JlZW5TaGFrZX1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogV2luIEJhbm5lciB3aXRoIEFuaW1hdGVkIE51bWJlcnMgJiBNdWx0aXBsaWVycyAqL31cbiAgICAgICAgPFdpbkRpc3BsYXlcbiAgICAgICAgICBldmFsdWF0aW9uPXtldmFsdWF0aW9ufVxuICAgICAgICAgIGxhc3RXaW49e2xhc3RXaW59XG4gICAgICAgICAgaXNTcGlubmluZz17aXNTcGlubmluZ31cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogU3BpbiBDb250cm9scyAmIEJldCBTZWxlY3Rpb24gKi99XG4gICAgICAgIDxTcGluQ29udHJvbHNcbiAgICAgICAgICBjdXJyZW50QmV0PXtjdXJyZW50QmV0fVxuICAgICAgICAgIG9uU2VsZWN0QmV0PXtzZXRDdXJyZW50QmV0fVxuICAgICAgICAgIGJhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgICAgaXNTcGlubmluZz17aXNTcGlubmluZ31cbiAgICAgICAgICBvblNwaW49e2hhbmRsZVNwaW59XG4gICAgICAgICAgYXV0b1NwaW5Db3VudD17YXV0b1NwaW5Db3VudH1cbiAgICAgICAgICBvblN0YXJ0QXV0b1NwaW49e2hhbmRsZVN0YXJ0QXV0b1NwaW59XG4gICAgICAgICAgb25TdG9wQXV0b1NwaW49e2hhbmRsZVN0b3BBdXRvU3Bpbn1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIEZhaXJuZXNzICYgRGlzY2xhaW1lciBGb290ZXIgKi99XG4gICAgICA8RGlzY2xhaW1lckJhbm5lciBvbk9wZW5SdWxlcz17KCkgPT4gc2V0U2hvd1BheXRhYmxlTW9kYWwodHJ1ZSl9IC8+XG5cbiAgICAgIHsvKiBEZWRpY2F0ZWQgQm9udXMgUm91bmQgU2NyZWVuIChUcmlnZ2VyZWQgYnkgMysgU2NhdHRlciBHZW1zKSAqL31cbiAgICAgIHtpc0JvbnVzUm91bmRBY3RpdmUgJiYgKFxuICAgICAgICA8Qm9udXNSb3VuZFxuICAgICAgICAgIGJhc2VCZXQ9e3BlbmRpbmdCb251c0JldH1cbiAgICAgICAgICBvbkZpbmlzaD17aGFuZGxlQm9udXNSb3VuZEZpbmlzaH1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBCaWcgV2luICYgSmFja3BvdCBDZWxlYnJhdGlvbiBPdmVybGF5ICovfVxuICAgICAge2NlbGVicmF0aW9uV2luICYmIChcbiAgICAgICAgPFdpbkNlbGVicmF0aW9uXG4gICAgICAgICAgd2luQW1vdW50PXtjZWxlYnJhdGlvbldpbi53aW5BbW91bnR9XG4gICAgICAgICAgYmV0QW1vdW50PXtjZWxlYnJhdGlvbldpbi5iZXRBbW91bnR9XG4gICAgICAgICAgaXNKYWNrcG90PXtjZWxlYnJhdGlvbldpbi5pc0phY2twb3R9XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0Q2VsZWJyYXRpb25XaW4obnVsbCl9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7LyogRGFpbHkgRnJlZSBCb251cyBNb2RhbCAqL31cbiAgICAgIDxEYWlseUJvbnVzTW9kYWxcbiAgICAgICAgaXNPcGVuPXtzaG93RGFpbHlNb2RhbH1cbiAgICAgICAgY2FuQ2xhaW09e2NhbkNsYWltRGFpbHl9XG4gICAgICAgIHJlbWFpbmluZ01zPXtkYWlseVJlbWFpbmluZ01zfVxuICAgICAgICBvbkNsYWltPXtoYW5kbGVDbGFpbURhaWx5Qm9udXN9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dEYWlseU1vZGFsKGZhbHNlKX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiA5IFBheWxpbmVzICYgUGF5dGFibGUgSGVscCBNb2RhbCAqL31cbiAgICAgIDxQYXl0YWJsZU1vZGFsXG4gICAgICAgIGlzT3Blbj17c2hvd1BheXRhYmxlTW9kYWx9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dQYXl0YWJsZU1vZGFsKGZhbHNlKX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBHYW1lIEhpc3RvcnkgJiBQcm9ncmVzc2lvbiBNb2RhbCAqL31cbiAgICAgIDxHYW1lSGlzdG9yeVxuICAgICAgICBpc09wZW49e3Nob3dIaXN0b3J5TW9kYWx9XG4gICAgICAgIGhpc3Rvcnk9e2hpc3Rvcnl9XG4gICAgICAgIHN0YXRzPXtzdGF0c31cbiAgICAgICAgc2Vzc2lvblN0YXRzPXtzZXNzaW9uU3RhdHN9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dIaXN0b3J5TW9kYWwoZmFsc2UpfVxuICAgICAgLz5cblxuICAgICAgey8qIFNldHRpbmdzIE1vZGFsICovfVxuICAgICAgPFNldHRpbmdzTW9kYWxcbiAgICAgICAgaXNPcGVuPXtzaG93U2V0dGluZ3NNb2RhbH1cbiAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICBvblVwZGF0ZVNldHRpbmdzPXtoYW5kbGVVcGRhdGVTZXR0aW5nc31cbiAgICAgICAgb25SZXNldEdhbWU9e2hhbmRsZVJlc2V0R2FtZX1cbiAgICAgICAgb25PcGVuRXhwb3J0PXsoKSA9PiBzZXRTaG93RXhwb3J0TW9kYWwodHJ1ZSl9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dTZXR0aW5nc01vZGFsKGZhbHNlKX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBQb2ludHMgQm9vc3RlciBSZWZpbGwgTW9kYWwgKi99XG4gICAgICA8UmVmaWxsTW9kYWxcbiAgICAgICAgaXNPcGVuPXtzaG93UmVmaWxsTW9kYWx9XG4gICAgICAgIGJhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgIG9uUmVmaWxsPXtoYW5kbGVSZWZpbGxQb2ludHN9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dSZWZpbGxNb2RhbChmYWxzZSl9XG4gICAgICAvPlxuXG4gICAgICB7LyogRG93bmxvYWQgU291cmNlIENvZGUgWklQICYgQW5kcm9pZCBBUEsgTW9kYWwgKi99XG4gICAgICA8RXhwb3J0UHJvamVjdE1vZGFsXG4gICAgICAgIGlzT3Blbj17c2hvd0V4cG9ydE1vZGFsfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93RXhwb3J0TW9kYWwoZmFsc2UpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==