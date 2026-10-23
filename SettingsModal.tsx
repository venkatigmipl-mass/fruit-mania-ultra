const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { X, Settings, Volume2, Zap, RotateCcw, AlertTriangle, Smartphone, Activity, FolderArchive } from "/node_modules/.vite/deps/lucide-react.js?v=7c623386";
import { sound } from "/src/services/audio.ts";
var _jsxFileName = "/app/applet/src/components/SettingsModal.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const SettingsModal = ({ isOpen, settings, onUpdateSettings, onResetGame, onOpenExport, onClose }) => {
	const [showConfirmReset, setShowConfirmReset] = useState(false);
	if (!isOpen) return null;
	const handleToggleSound = () => {
		sound.playButtonClick();
		onUpdateSettings({
			...settings,
			soundEnabled: !settings.soundEnabled
		});
	};
	const handleToggleTurbo = () => {
		sound.playButtonClick();
		onUpdateSettings({
			...settings,
			turboSpeed: !settings.turboSpeed
		});
	};
	const handleToggleVibration = () => {
		sound.playButtonClick();
		onUpdateSettings({
			...settings,
			vibration: !settings.vibration
		});
	};
	const handleToggleScreenShake = () => {
		sound.playButtonClick();
		onUpdateSettings({
			...settings,
			screenShake: !settings.screenShake
		});
	};
	const handleConfirmReset = () => {
		sound.playButtonClick();
		onResetGame();
		setShowConfirmReset(false);
		onClose();
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		onClick: onClose,
		className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer select-none animate-fade-in",
		children: /* @__PURE__ */ _jsxDEV("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative max-w-sm w-full bg-gradient-to-b from-[#250840] via-[#170529] to-[#0f031c] rounded-3xl p-5 sm:p-6 border-2 border-purple-700/60 shadow-2xl flex flex-col",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between pb-3 border-b border-purple-800/40 mb-4",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300",
							children: /* @__PURE__ */ _jsxDEV(Settings, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("h2", {
							className: "text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300 uppercase",
							children: "Game Settings"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							sound.playButtonClick();
							onClose();
						},
						className: "p-1 rounded-full text-purple-300 hover:text-white bg-purple-900/50 hover:bg-purple-800 transition-all cursor-pointer",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-2.5 mb-5",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between p-2.5 rounded-2xl bg-purple-950/60 border border-purple-800/40",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ _jsxDEV(Volume2, { className: "w-5 h-5 text-pink-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs font-bold text-white",
									children: "Sound Effects"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 92,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-[9px] text-purple-300/70",
									children: "Reel whir, mechanical stops & jingles"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 93,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 91,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: handleToggleSound,
								className: `w-11 h-6 rounded-full transition-colors relative cursor-pointer ${settings.soundEnabled ? "bg-pink-600" : "bg-purple-950 border border-purple-800"}`,
								children: /* @__PURE__ */ _jsxDEV("span", { className: `block w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${settings.soundEnabled ? "translate-x-5" : "translate-x-0.5"}` }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between p-2.5 rounded-2xl bg-purple-950/60 border border-purple-800/40",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ _jsxDEV(Zap, { className: "w-5 h-5 text-amber-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 113,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs font-bold text-white",
									children: "Turbo Mode"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-[9px] text-purple-300/70",
									children: "Fast-action spinning & stopping"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: handleToggleTurbo,
								className: `w-11 h-6 rounded-full transition-colors relative cursor-pointer ${settings.turboSpeed ? "bg-amber-500" : "bg-purple-950 border border-purple-800"}`,
								children: /* @__PURE__ */ _jsxDEV("span", { className: `block w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${settings.turboSpeed ? "translate-x-5" : "translate-x-0.5"}` }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 111,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between p-2.5 rounded-2xl bg-purple-950/60 border border-purple-800/40",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ _jsxDEV(Activity, { className: "w-5 h-5 text-purple-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 136,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs font-bold text-white",
									children: "Screen Shake"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-[9px] text-purple-300/70",
									children: "Impact shake on large virtual wins"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: handleToggleScreenShake,
								className: `w-11 h-6 rounded-full transition-colors relative cursor-pointer ${settings.screenShake ? "bg-purple-600" : "bg-purple-950 border border-purple-800"}`,
								children: /* @__PURE__ */ _jsxDEV("span", { className: `block w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${settings.screenShake ? "translate-x-5" : "translate-x-0.5"}` }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 148,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 142,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between p-2.5 rounded-2xl bg-purple-950/60 border border-purple-800/40",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ _jsxDEV(Smartphone, { className: "w-5 h-5 text-emerald-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 159,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs font-bold text-white",
									children: "Device Vibration"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 161,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-[9px] text-purple-300/70",
									children: "Haptic feedback for mobile spins"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 162,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 160,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: handleToggleVibration,
								className: `w-11 h-6 rounded-full transition-colors relative cursor-pointer ${settings.vibration ? "bg-emerald-600" : "bg-purple-950 border border-purple-800"}`,
								children: /* @__PURE__ */ _jsxDEV("span", { className: `block w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${settings.vibration ? "translate-x-5" : "translate-x-0.5"}` }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 171,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 165,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 157,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 9
				}, this),
				onOpenExport && /* @__PURE__ */ _jsxDEV("button", {
					onClick: () => {
						sound.playButtonClick();
						onClose();
						onOpenExport();
					},
					className: "w-full mb-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-purple-900/40 to-amber-500/20 hover:from-amber-500/30 hover:to-purple-900/60 border border-amber-400/50 text-amber-300 flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer",
					children: [/* @__PURE__ */ _jsxDEV(FolderArchive, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 190,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Download Project ZIP (Source Code)" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 191,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 182,
					columnNumber: 11
				}, this),
				showConfirmReset ? /* @__PURE__ */ _jsxDEV("div", {
					className: "p-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/50 text-center animate-fade-in",
					children: [
						/* @__PURE__ */ _jsxDEV(AlertTriangle, { className: "w-6 h-6 text-rose-400 mx-auto mb-1.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-black text-rose-200",
							children: "Reset All Player Progress?"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 199,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-[10px] text-rose-300/80 my-1.5",
							children: "Restores balance to 10,000 points and clears spin history & lifetime statistics."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 200,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2 mt-2",
							children: [/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setShowConfirmReset(false),
								className: "flex-1 py-1.5 rounded-xl bg-purple-900/60 text-purple-200 text-xs font-bold cursor-pointer",
								children: "Cancel"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 204,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: handleConfirmReset,
								className: "flex-1 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-black uppercase cursor-pointer",
								children: "Yes, Reset"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 210,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 203,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 197,
					columnNumber: 11
				}, this) : /* @__PURE__ */ _jsxDEV("button", {
					onClick: () => {
						sound.playButtonClick();
						setShowConfirmReset(true);
					},
					className: "w-full py-2.5 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-800/60 text-purple-300 hover:text-white flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer",
					children: [/* @__PURE__ */ _jsxDEV(RotateCcw, { className: "w-4 h-4 text-purple-400" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 226,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Reset Progress (Restore 10,000 Pts)" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 227,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 219,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 55,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUFELEVBQWUsV0FBVSx5QkFBMEI7Ozs7ZUFDbkQsd0JBQUMsUUFBRCxZQUFNLHFDQUF3Qzs7OzthQUN4Qzs7Ozs7O0lBSVQsbUJBQ0Msd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZjtNQUNFLHdCQUFDLGVBQUQsRUFBZSxXQUFVLHVDQUF3Qzs7Ozs7TUFDakUsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQW1DO01BQStCOzs7OztNQUNqRix3QkFBQyxLQUFEO09BQUcsV0FBVTtpQkFBc0M7TUFFaEQ7Ozs7O01BQ0gsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWYsQ0FDRSx3QkFBQyxVQUFEO1FBQ0UsZUFBZSxvQkFBb0IsS0FBSztRQUN4QyxXQUFVO2tCQUNYO09BRU87Ozs7aUJBQ1Isd0JBQUMsVUFBRDtRQUNFLFNBQVM7UUFDVCxXQUFVO2tCQUNYO09BRU87Ozs7ZUFDTDs7Ozs7O0tBQ0Y7Ozs7O2VBRUwsd0JBQUMsVUFBRDtLQUNFLGVBQWU7TUFDYixNQUFNLGdCQUFnQjtNQUN0QixvQkFBb0IsSUFBSTtLQUMxQjtLQUNBLFdBQVU7ZUFMWixDQU9FLHdCQUFDLFdBQUQsRUFBVyxXQUFVLDBCQUEyQjs7OztlQUNoRCx3QkFBQyxRQUFELFlBQU0sc0NBQXlDOzs7O2FBQ3pDOzs7Ozs7R0FFUDs7Ozs7O0NBQ0Y7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiU2V0dGluZ3NNb2RhbC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgWCwgU2V0dGluZ3MsIFZvbHVtZTIsIFphcCwgUm90YXRlQ2N3LCBBbGVydFRyaWFuZ2xlLCBTbWFydHBob25lLCBBY3Rpdml0eSwgRm9sZGVyQXJjaGl2ZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBHYW1lU2V0dGluZ3MgfSBmcm9tICcuLi90eXBlcy9nYW1lJztcbmltcG9ydCB7IHNvdW5kIH0gZnJvbSAnLi4vc2VydmljZXMvYXVkaW8nO1xuXG5pbnRlcmZhY2UgU2V0dGluZ3NNb2RhbFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBzZXR0aW5nczogR2FtZVNldHRpbmdzO1xuICBvblVwZGF0ZVNldHRpbmdzOiAobmV3U2V0dGluZ3M6IEdhbWVTZXR0aW5ncykgPT4gdm9pZDtcbiAgb25SZXNldEdhbWU6ICgpID0+IHZvaWQ7XG4gIG9uT3BlbkV4cG9ydD86ICgpID0+IHZvaWQ7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBTZXR0aW5nc01vZGFsOiBSZWFjdC5GQzxTZXR0aW5nc01vZGFsUHJvcHM+ID0gKHtcbiAgaXNPcGVuLFxuICBzZXR0aW5ncyxcbiAgb25VcGRhdGVTZXR0aW5ncyxcbiAgb25SZXNldEdhbWUsXG4gIG9uT3BlbkV4cG9ydCxcbiAgb25DbG9zZVxufSkgPT4ge1xuICBjb25zdCBbc2hvd0NvbmZpcm1SZXNldCwgc2V0U2hvd0NvbmZpcm1SZXNldF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZVNvdW5kID0gKCkgPT4ge1xuICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgIG9uVXBkYXRlU2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgc291bmRFbmFibGVkOiAhc2V0dGluZ3Muc291bmRFbmFibGVkIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZVR1cmJvID0gKCkgPT4ge1xuICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgIG9uVXBkYXRlU2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgdHVyYm9TcGVlZDogIXNldHRpbmdzLnR1cmJvU3BlZWQgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlVmlicmF0aW9uID0gKCkgPT4ge1xuICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgIG9uVXBkYXRlU2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgdmlicmF0aW9uOiAhc2V0dGluZ3MudmlicmF0aW9uIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZVNjcmVlblNoYWtlID0gKCkgPT4ge1xuICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgIG9uVXBkYXRlU2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgc2NyZWVuU2hha2U6ICFzZXR0aW5ncy5zY3JlZW5TaGFrZSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDb25maXJtUmVzZXQgPSAoKSA9PiB7XG4gICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgb25SZXNldEdhbWUoKTtcbiAgICBzZXRTaG93Q29uZmlybVJlc2V0KGZhbHNlKTtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGJnLWJsYWNrLzgwIGJhY2tkcm9wLWJsdXItc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGN1cnNvci1wb2ludGVyIHNlbGVjdC1ub25lIGFuaW1hdGUtZmFkZS1pblwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctc20gdy1mdWxsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1bIzI1MDg0MF0gdmlhLVsjMTcwNTI5XSB0by1bIzBmMDMxY10gcm91bmRlZC0zeGwgcC01IHNtOnAtNiBib3JkZXItMiBib3JkZXItcHVycGxlLTcwMC82MCBzaGFkb3ctMnhsIGZsZXggZmxleC1jb2xcIlxuICAgICAgPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi0zIGJvcmRlci1iIGJvcmRlci1wdXJwbGUtODAwLzQwIG1iLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1sZyBiZy1wdXJwbGUtNTAwLzIwIGJvcmRlciBib3JkZXItcHVycGxlLTQwMC80MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXB1cnBsZS0zMDBcIj5cbiAgICAgICAgICAgICAgPFNldHRpbmdzIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGcgZm9udC1ibGFjayB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tcGluay00MDAgdG8tYW1iZXItMzAwIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICBHYW1lIFNldHRpbmdzXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzb3VuZC5wbGF5QnV0dG9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSByb3VuZGVkLWZ1bGwgdGV4dC1wdXJwbGUtMzAwIGhvdmVyOnRleHQtd2hpdGUgYmctcHVycGxlLTkwMC81MCBob3ZlcjpiZy1wdXJwbGUtODAwIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFRvZ2dsZXMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yLjUgbWItNVwiPlxuICAgICAgICAgIHsvKiBTb3VuZCBGWCBUb2dnbGUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yLjUgcm91bmRlZC0yeGwgYmctcHVycGxlLTk1MC82MCBib3JkZXIgYm9yZGVyLXB1cnBsZS04MDAvNDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNVwiPlxuICAgICAgICAgICAgICA8Vm9sdW1lMiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtcGluay00MDBcIiAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlNvdW5kIEVmZmVjdHM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1wdXJwbGUtMzAwLzcwXCI+UmVlbCB3aGlyLCBtZWNoYW5pY2FsIHN0b3BzICYgamluZ2xlczwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGVTb3VuZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMSBoLTYgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzIHJlbGF0aXZlIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3Muc291bmRFbmFibGVkID8gJ2JnLXBpbmstNjAwJyA6ICdiZy1wdXJwbGUtOTUwIGJvcmRlciBib3JkZXItcHVycGxlLTgwMCdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgdy01IGgtNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93LW1kIHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc291bmRFbmFibGVkID8gJ3RyYW5zbGF0ZS14LTUnIDogJ3RyYW5zbGF0ZS14LTAuNSdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFR1cmJvIFNwZWVkIFRvZ2dsZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTIuNSByb3VuZGVkLTJ4bCBiZy1wdXJwbGUtOTUwLzYwIGJvcmRlciBib3JkZXItcHVycGxlLTgwMC80MFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICAgIDxaYXAgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+VHVyYm8gTW9kZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB0ZXh0LXB1cnBsZS0zMDAvNzBcIj5GYXN0LWFjdGlvbiBzcGlubmluZyAmIHN0b3BwaW5nPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZVR1cmJvfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTExIGgtNiByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1jb2xvcnMgcmVsYXRpdmUgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy50dXJib1NwZWVkID8gJ2JnLWFtYmVyLTUwMCcgOiAnYmctcHVycGxlLTk1MCBib3JkZXIgYm9yZGVyLXB1cnBsZS04MDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdy1tZCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnR1cmJvU3BlZWQgPyAndHJhbnNsYXRlLXgtNScgOiAndHJhbnNsYXRlLXgtMC41J1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU2NyZWVuIFNoYWtlIFRvZ2dsZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTIuNSByb3VuZGVkLTJ4bCBiZy1wdXJwbGUtOTUwLzYwIGJvcmRlciBib3JkZXItcHVycGxlLTgwMC80MFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICAgIDxBY3Rpdml0eSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtcHVycGxlLTQwMFwiIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+U2NyZWVuIFNoYWtlPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtcHVycGxlLTMwMC83MFwiPkltcGFjdCBzaGFrZSBvbiBsYXJnZSB2aXJ0dWFsIHdpbnM8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlU2NyZWVuU2hha2V9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTEgaC02IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWNvbG9ycyByZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLnNjcmVlblNoYWtlID8gJ2JnLXB1cnBsZS02MDAnIDogJ2JnLXB1cnBsZS05NTAgYm9yZGVyIGJvcmRlci1wdXJwbGUtODAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayB3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBzaGFkb3ctbWQgdHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtICR7XG4gICAgICAgICAgICAgICAgICBzZXR0aW5ncy5zY3JlZW5TaGFrZSA/ICd0cmFuc2xhdGUteC01JyA6ICd0cmFuc2xhdGUteC0wLjUnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBEZXZpY2UgVmlicmF0aW9uIFRvZ2dsZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTIuNSByb3VuZGVkLTJ4bCBiZy1wdXJwbGUtOTUwLzYwIGJvcmRlciBib3JkZXItcHVycGxlLTgwMC80MFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICAgIDxTbWFydHBob25lIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1lbWVyYWxkLTQwMFwiIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+RGV2aWNlIFZpYnJhdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB0ZXh0LXB1cnBsZS0zMDAvNzBcIj5IYXB0aWMgZmVlZGJhY2sgZm9yIG1vYmlsZSBzcGluczwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGVWaWJyYXRpb259XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTEgaC02IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWNvbG9ycyByZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLnZpYnJhdGlvbiA/ICdiZy1lbWVyYWxkLTYwMCcgOiAnYmctcHVycGxlLTk1MCBib3JkZXIgYm9yZGVyLXB1cnBsZS04MDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdy1tZCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnZpYnJhdGlvbiA/ICd0cmFuc2xhdGUteC01JyA6ICd0cmFuc2xhdGUteC0wLjUnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIERvd25sb2FkIFByb2plY3QgWklQICovfVxuICAgICAgICB7b25PcGVuRXhwb3J0ICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICAgIG9uT3BlbkV4cG9ydCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYi0zIHB5LTIuNSByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1hbWJlci01MDAvMjAgdmlhLXB1cnBsZS05MDAvNDAgdG8tYW1iZXItNTAwLzIwIGhvdmVyOmZyb20tYW1iZXItNTAwLzMwIGhvdmVyOnRvLXB1cnBsZS05MDAvNjAgYm9yZGVyIGJvcmRlci1hbWJlci00MDAvNTAgdGV4dC1hbWJlci0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgdGV4dC14cyBmb250LWJvbGQgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb2xkZXJBcmNoaXZlIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgPHNwYW4+RG93bmxvYWQgUHJvamVjdCBaSVAgKFNvdXJjZSBDb2RlKTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogUmVzZXQgR2FtZSBTZWN0aW9uICovfVxuICAgICAgICB7c2hvd0NvbmZpcm1SZXNldCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMy41IHJvdW5kZWQtMnhsIGJnLXJvc2UtOTUwLzYwIGJvcmRlciBib3JkZXItcm9zZS01MDAvNTAgdGV4dC1jZW50ZXIgYW5pbWF0ZS1mYWRlLWluXCI+XG4gICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtcm9zZS00MDAgbXgtYXV0byBtYi0xLjVcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYmxhY2sgdGV4dC1yb3NlLTIwMFwiPlJlc2V0IEFsbCBQbGF5ZXIgUHJvZ3Jlc3M/PC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXJvc2UtMzAwLzgwIG15LTEuNVwiPlxuICAgICAgICAgICAgICBSZXN0b3JlcyBiYWxhbmNlIHRvIDEwLDAwMCBwb2ludHMgYW5kIGNsZWFycyBzcGluIGhpc3RvcnkgJiBsaWZldGltZSBzdGF0aXN0aWNzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtdC0yXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q29uZmlybVJlc2V0KGZhbHNlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMS41IHJvdW5kZWQteGwgYmctcHVycGxlLTkwMC82MCB0ZXh0LXB1cnBsZS0yMDAgdGV4dC14cyBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29uZmlybVJlc2V0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0xLjUgcm91bmRlZC14bCBiZy1yb3NlLTYwMCBob3ZlcjpiZy1yb3NlLTUwMCB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWWVzLCBSZXNldFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgIHNldFNob3dDb25maXJtUmVzZXQodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIuNSByb3VuZGVkLXhsIGJnLXB1cnBsZS05NTAgaG92ZXI6YmctcHVycGxlLTkwMCBib3JkZXIgYm9yZGVyLXB1cnBsZS04MDAvNjAgdGV4dC1wdXJwbGUtMzAwIGhvdmVyOnRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgdGV4dC14cyBmb250LWJvbGQgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSb3RhdGVDY3cgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXB1cnBsZS00MDBcIiAvPlxuICAgICAgICAgICAgPHNwYW4+UmVzZXQgUHJvZ3Jlc3MgKFJlc3RvcmUgMTAsMDAwIFB0cyk8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=