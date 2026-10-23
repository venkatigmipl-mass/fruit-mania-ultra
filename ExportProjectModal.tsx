const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const JSZip = __vite__cjsImport2_jszip;const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport4_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { X, Download, FileCode, CheckCircle, Smartphone, FolderArchive, Loader2 } from "/node_modules/.vite/deps/lucide-react.js?v=7c623386";
import __vite__cjsImport2_jszip from "/node_modules/.vite/deps/jszip.js?v=7c623386";
import { sound } from "/src/services/audio.ts";
var _jsxFileName = "/app/applet/src/components/ExportProjectModal.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const ExportProjectModal = ({ isOpen, onClose }) => {
	const [isGenerating, setIsGenerating] = useState(false);
	const [downloadSuccess, setDownloadSuccess] = useState(false);
	const [activeTab, setActiveTab] = useState("download");
	if (!isOpen) return null;
	const handleDownloadZip = async () => {
		sound.playButtonClick();
		setIsGenerating(true);
		setDownloadSuccess(false);
		try {
			const zip = new JSZip();
			// List of files to fetch and include in the zip archive
			const filesToInclude = [
				"package.json",
				"tsconfig.json",
				"vite.config.ts",
				"index.html",
				"metadata.json",
				"README.md",
				".env.example",
				".gitignore",
				"public/icon.svg",
				"public/manifest.json",
				"src/main.tsx",
				"src/App.tsx",
				"src/index.css",
				"src/types/game.ts",
				"src/utils/gameLogic.ts",
				"src/services/audio.ts",
				"src/services/storage.ts",
				"src/components/FruitSymbol3D.tsx",
				"src/components/Reel.tsx",
				"src/components/ReelGrid.tsx",
				"src/components/WinLineOverlay.tsx",
				"src/components/WinDisplay.tsx",
				"src/components/SpinControls.tsx",
				"src/components/PointsDisplay.tsx",
				"src/components/GameHeader.tsx",
				"src/components/BonusRound.tsx",
				"src/components/GameHistory.tsx",
				"src/components/SettingsModal.tsx",
				"src/components/PaytableModal.tsx",
				"src/components/DailyBonusModal.tsx",
				"src/components/RefillModal.tsx",
				"src/components/WinCelebration.tsx",
				"src/components/DisclaimerBanner.tsx",
				"src/components/ExportProjectModal.tsx"
			];
			// Fetch each file content and add to the ZIP
			for (const filePath of filesToInclude) {
				try {
					const res = await fetch(`/${filePath}`);
					if (res.ok) {
						const content = await res.text();
						zip.file(filePath, content);
					}
				} catch {}
			}
			// Generate the zip blob
			const blob = await zip.generateAsync({ type: "blob" });
			const downloadUrl = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = downloadUrl;
			link.download = "fruit-mania-ultra-source.zip";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(downloadUrl);
			setDownloadSuccess(true);
			sound.playSmallWin();
		} catch {
			// Direct link fallback
			const link = document.createElement("a");
			link.href = "/fruit-mania-ultra.zip";
			link.download = "fruit-mania-ultra.zip";
			link.click();
			setDownloadSuccess(true);
		} finally {
			setIsGenerating(false);
		}
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		onClick: onClose,
		className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 cursor-pointer select-none animate-fade-in",
		children: /* @__PURE__ */ _jsxDEV("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative max-w-lg w-full max-h-[90vh] bg-gradient-to-b from-[#250840] via-[#16042b] to-[#0c0117] rounded-3xl border-2 border-amber-400/80 shadow-2xl flex flex-col overflow-hidden text-white",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between px-5 py-4 border-b border-purple-800/40 bg-purple-950/60 shrink-0",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300",
							children: /* @__PURE__ */ _jsxDEV(FolderArchive, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 115,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-yellow-300 uppercase",
							children: "Download Project ZIP"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-[10px] text-purple-300 font-semibold",
							children: "Complete Working Source Code & Android Build Instructions"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 113,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							sound.playButtonClick();
							onClose();
						},
						className: "p-1 rounded-full text-purple-300 hover:text-white bg-purple-900/50 hover:bg-purple-800 transition-all cursor-pointer",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex border-b border-purple-800/40 bg-purple-950/30 shrink-0 text-center",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							sound.playButtonClick();
							setActiveTab("download");
						},
						className: `flex-1 py-2.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer border-b-2 ${activeTab === "download" ? "border-amber-400 text-amber-300 bg-amber-400/10" : "border-transparent text-purple-300 hover:text-white"}`,
						children: "Download ZIP"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							sound.playButtonClick();
							setActiveTab("android");
						},
						className: `flex-1 py-2.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer border-b-2 ${activeTab === "android" ? "border-amber-400 text-amber-300 bg-amber-400/10" : "border-transparent text-purple-300 hover:text-white"}`,
						children: "Android APK Guide"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 139,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "overflow-y-auto p-4 space-y-4",
					children: activeTab === "download" ? /* @__PURE__ */ _jsxDEV("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-purple-900/40 to-pink-500/15 border border-amber-400/50",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2 mb-1",
										children: [/* @__PURE__ */ _jsxDEV(FileCode, { className: "w-5 h-5 text-amber-400" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 174,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("h3", {
											className: "font-black text-sm text-amber-300 uppercase",
											children: "Ready for Local Extraction & Play"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 175,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 173,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-[11px] text-purple-200/90 leading-relaxed",
										children: [
											"This download contains the ",
											/* @__PURE__ */ _jsxDEV("strong", { children: "complete, fully functional codebase" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 180,
												columnNumber: 46
											}, this),
											":"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 179,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("ul", {
										className: "list-disc list-inside space-y-1 text-[11px] text-purple-200/90 mt-2",
										children: [
											/* @__PURE__ */ _jsxDEV("li", { children: "All React & TypeScript source files with zero missing imports." }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 183,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: "Original 3D glossy vector SVG fruit & feature symbols." }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 184,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: "9 paylines engine, Scatter Gem Bonus Round, & Multipliers." }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 185,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: "Web Audio API synthesizer (no external audio files required)." }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 186,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: "`package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`." }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 187,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: "Complete `README.md` with local setup & Android Studio build steps." }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 188,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 182,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 172,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-3 rounded-2xl bg-black/50 border border-purple-800/50 font-mono text-[11px] text-purple-200",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-[10px] uppercase font-bold text-amber-400 mb-1",
										children: "Quick Start Commands:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 194,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-emerald-400",
										children: "# 1. Install dependencies"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 195,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: "npm install" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 196,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-emerald-400 mt-1",
										children: "# 2. Run local dev server"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 197,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: "npm run dev" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 198,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 193,
								columnNumber: 15
							}, this),
							downloadSuccess && /* @__PURE__ */ _jsxDEV("div", {
								className: "p-3 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center gap-2 text-xs font-bold animate-fade-in",
								children: [/* @__PURE__ */ _jsxDEV(CheckCircle, { className: "w-5 h-5 text-emerald-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 203,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "ZIP downloaded successfully! Extract and run `npm install`." }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 204,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 202,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								disabled: isGenerating,
								onClick: handleDownloadZip,
								className: "w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-amber-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-400/40 hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50",
								children: isGenerating ? /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(Loader2, { className: "w-5 h-5 animate-spin text-amber-950" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 216,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Packing Project ZIP..." }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 217,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 215,
									columnNumber: 19
								}, this) : /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-5 h-5 text-amber-950" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 221,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Download Complete Project (ZIP)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 222,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 220,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 209,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 171,
						columnNumber: 13
					}, this) : /* @__PURE__ */ _jsxDEV("div", {
						className: "space-y-3 text-xs text-purple-200",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-3.5 rounded-2xl bg-purple-950/60 border border-purple-800/50 flex items-start gap-3",
							children: [/* @__PURE__ */ _jsxDEV(Smartphone, { className: "w-6 h-6 text-cyan-400 shrink-0 mt-0.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 230,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "font-black text-sm text-cyan-300 uppercase tracking-wide",
								children: "Convert to Android APK with Capacitor"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 232,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-[11px] text-purple-200/90 mt-1 leading-relaxed",
								children: "Convert FRUIT MANIA ULTRA into an installable Android APK using Capacitor and Android Studio:"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 235,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 231,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 229,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-2 bg-black/40 p-3.5 rounded-2xl border border-purple-800/40 font-mono text-[10px] text-purple-200 leading-relaxed",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-amber-400 font-bold",
									children: "Step 1: Install Capacitor CLI & Core"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 242,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-white bg-purple-950/70 p-2 rounded-lg",
									children: "npm install @capacitor/core @capacitor/cli @capacitor/android"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 243,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-amber-400 font-bold mt-2",
									children: "Step 2: Initialize & Build"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 247,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-white bg-purple-950/70 p-2 rounded-lg",
									children: [
										"npx cap init \"FRUIT MANIA ULTRA\" \"com.fruitmania.ultra\" --web-dir dist",
										/* @__PURE__ */ _jsxDEV("br", {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 249,
											columnNumber: 109
										}, this),
										"npm run build"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 248,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-amber-400 font-bold mt-2",
									children: "Step 3: Add Android & Sync"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 253,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-white bg-purple-950/70 p-2 rounded-lg",
									children: [
										"npx cap add android",
										/* @__PURE__ */ _jsxDEV("br", {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 255,
											columnNumber: 38
										}, this),
										"npx cap sync"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 254,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-amber-400 font-bold mt-2",
									children: "Step 4: Open in Android Studio & Build APK"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 259,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-white bg-purple-950/70 p-2 rounded-lg",
									children: "npx cap open android"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 260,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-[10px] font-sans text-purple-300/90 mt-1",
									children: [
										"In Android Studio: Select ",
										/* @__PURE__ */ _jsxDEV("strong", { children: "Build > Build Bundle(s) / APK(s) > Build APK(s)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 264,
											columnNumber: 45
										}, this),
										"."
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 263,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 241,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 228,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 169,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-3 border-t border-purple-800/40 bg-purple-950/60 text-center shrink-0",
					children: /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							sound.playButtonClick();
							onClose();
						},
						className: "w-full py-2.5 rounded-xl bg-purple-800 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer",
						children: "Back to Game"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 273,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 272,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 107,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 103,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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Ozs7UUFDOUUsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWY7VUFBNEQ7VUFDdkMsd0JBQUMsTUFBRCxDQUFLOzs7OztVQUFDO1NBRXRCOzs7Ozs7UUFFTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBZ0M7UUFBK0M7Ozs7O1FBQzlGLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUE2QztRQUV2RDs7Ozs7UUFDTCx3QkFBQyxLQUFEO1NBQUcsV0FBVTttQkFBYjtVQUE2RDtVQUNqQyx3QkFBQyxVQUFELFlBQVEsa0RBQTZEOzs7OztVQUFDO1NBQy9GOzs7Ozs7T0FDQTs7Ozs7Y0FDRjs7Ozs7O0lBRUo7Ozs7O0lBR0wsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFDYix3QkFBQyxVQUFEO01BQ0UsZUFBZTtPQUNiLE1BQU0sZ0JBQWdCO09BQ3RCLFFBQVE7TUFDVjtNQUNBLFdBQVU7Z0JBQ1g7S0FFTzs7Ozs7SUFDTDs7Ozs7R0FDRjs7Ozs7O0NBQ0Y7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRXhwb3J0UHJvamVjdE1vZGFsLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBYLCBEb3dubG9hZCwgRmlsZUNvZGUsIENoZWNrQ2lyY2xlLCBTbWFydHBob25lLCBGb2xkZXJBcmNoaXZlLCBMb2FkZXIyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCc7XG5pbXBvcnQgeyBzb3VuZCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1ZGlvJztcblxuaW50ZXJmYWNlIEV4cG9ydFByb2plY3RNb2RhbFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRXhwb3J0UHJvamVjdE1vZGFsOiBSZWFjdC5GQzxFeHBvcnRQcm9qZWN0TW9kYWxQcm9wcz4gPSAoeyBpc09wZW4sIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbaXNHZW5lcmF0aW5nLCBzZXRJc0dlbmVyYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZG93bmxvYWRTdWNjZXNzLCBzZXREb3dubG9hZFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGU8J2Rvd25sb2FkJyB8ICdhbmRyb2lkJz4oJ2Rvd25sb2FkJyk7XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkWmlwID0gYXN5bmMgKCkgPT4ge1xuICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgIHNldElzR2VuZXJhdGluZyh0cnVlKTtcbiAgICBzZXREb3dubG9hZFN1Y2Nlc3MoZmFsc2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpO1xuXG4gICAgICAvLyBMaXN0IG9mIGZpbGVzIHRvIGZldGNoIGFuZCBpbmNsdWRlIGluIHRoZSB6aXAgYXJjaGl2ZVxuICAgICAgY29uc3QgZmlsZXNUb0luY2x1ZGUgPSBbXG4gICAgICAgICdwYWNrYWdlLmpzb24nLFxuICAgICAgICAndHNjb25maWcuanNvbicsXG4gICAgICAgICd2aXRlLmNvbmZpZy50cycsXG4gICAgICAgICdpbmRleC5odG1sJyxcbiAgICAgICAgJ21ldGFkYXRhLmpzb24nLFxuICAgICAgICAnUkVBRE1FLm1kJyxcbiAgICAgICAgJy5lbnYuZXhhbXBsZScsXG4gICAgICAgICcuZ2l0aWdub3JlJyxcbiAgICAgICAgJ3B1YmxpYy9pY29uLnN2ZycsXG4gICAgICAgICdwdWJsaWMvbWFuaWZlc3QuanNvbicsXG4gICAgICAgICdzcmMvbWFpbi50c3gnLFxuICAgICAgICAnc3JjL0FwcC50c3gnLFxuICAgICAgICAnc3JjL2luZGV4LmNzcycsXG4gICAgICAgICdzcmMvdHlwZXMvZ2FtZS50cycsXG4gICAgICAgICdzcmMvdXRpbHMvZ2FtZUxvZ2ljLnRzJyxcbiAgICAgICAgJ3NyYy9zZXJ2aWNlcy9hdWRpby50cycsXG4gICAgICAgICdzcmMvc2VydmljZXMvc3RvcmFnZS50cycsXG4gICAgICAgICdzcmMvY29tcG9uZW50cy9GcnVpdFN5bWJvbDNELnRzeCcsXG4gICAgICAgICdzcmMvY29tcG9uZW50cy9SZWVsLnRzeCcsXG4gICAgICAgICdzcmMvY29tcG9uZW50cy9SZWVsR3JpZC50c3gnLFxuICAgICAgICAnc3JjL2NvbXBvbmVudHMvV2luTGluZU92ZXJsYXkudHN4JyxcbiAgICAgICAgJ3NyYy9jb21wb25lbnRzL1dpbkRpc3BsYXkudHN4JyxcbiAgICAgICAgJ3NyYy9jb21wb25lbnRzL1NwaW5Db250cm9scy50c3gnLFxuICAgICAgICAnc3JjL2NvbXBvbmVudHMvUG9pbnRzRGlzcGxheS50c3gnLFxuICAgICAgICAnc3JjL2NvbXBvbmVudHMvR2FtZUhlYWRlci50c3gnLFxuICAgICAgICAnc3JjL2NvbXBvbmVudHMvQm9udXNSb3VuZC50c3gnLFxuICAgICAgICAnc3JjL2NvbXBvbmVudHMvR2FtZUhpc3RvcnkudHN4JyxcbiAgICAgICAgJ3NyYy9jb21wb25lbnRzL1NldHRpbmdzTW9kYWwudHN4JyxcbiAgICAgICAgJ3NyYy9jb21wb25lbnRzL1BheXRhYmxlTW9kYWwudHN4JyxcbiAgICAgICAgJ3NyYy9jb21wb25lbnRzL0RhaWx5Qm9udXNNb2RhbC50c3gnLFxuICAgICAgICAnc3JjL2NvbXBvbmVudHMvUmVmaWxsTW9kYWwudHN4JyxcbiAgICAgICAgJ3NyYy9jb21wb25lbnRzL1dpbkNlbGVicmF0aW9uLnRzeCcsXG4gICAgICAgICdzcmMvY29tcG9uZW50cy9EaXNjbGFpbWVyQmFubmVyLnRzeCcsXG4gICAgICAgICdzcmMvY29tcG9uZW50cy9FeHBvcnRQcm9qZWN0TW9kYWwudHN4J1xuICAgICAgXTtcblxuICAgICAgLy8gRmV0Y2ggZWFjaCBmaWxlIGNvbnRlbnQgYW5kIGFkZCB0byB0aGUgWklQXG4gICAgICBmb3IgKGNvbnN0IGZpbGVQYXRoIG9mIGZpbGVzVG9JbmNsdWRlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC8ke2ZpbGVQYXRofWApO1xuICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgICAgICAgemlwLmZpbGUoZmlsZVBhdGgsIGNvbnRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gZmFsbGJhY2sgb3IgcHJvY2VlZFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEdlbmVyYXRlIHRoZSB6aXAgYmxvYlxuICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InIH0pO1xuICAgICAgY29uc3QgZG93bmxvYWRVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGxpbmsuaHJlZiA9IGRvd25sb2FkVXJsO1xuICAgICAgbGluay5kb3dubG9hZCA9ICdmcnVpdC1tYW5pYS11bHRyYS1zb3VyY2UuemlwJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChkb3dubG9hZFVybCk7XG5cbiAgICAgIHNldERvd25sb2FkU3VjY2Vzcyh0cnVlKTtcbiAgICAgIHNvdW5kLnBsYXlTbWFsbFdpbigpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gRGlyZWN0IGxpbmsgZmFsbGJhY2tcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBsaW5rLmhyZWYgPSAnL2ZydWl0LW1hbmlhLXVsdHJhLnppcCc7XG4gICAgICBsaW5rLmRvd25sb2FkID0gJ2ZydWl0LW1hbmlhLXVsdHJhLnppcCc7XG4gICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICBzZXREb3dubG9hZFN1Y2Nlc3ModHJ1ZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzR2VuZXJhdGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBiZy1ibGFjay84NSBiYWNrZHJvcC1ibHVyLXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMyBzbTpwLTQgY3Vyc29yLXBvaW50ZXIgc2VsZWN0LW5vbmUgYW5pbWF0ZS1mYWRlLWluXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy1sZyB3LWZ1bGwgbWF4LWgtWzkwdmhdIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1bIzI1MDg0MF0gdmlhLVsjMTYwNDJiXSB0by1bIzBjMDExN10gcm91bmRlZC0zeGwgYm9yZGVyLTIgYm9yZGVyLWFtYmVyLTQwMC84MCBzaGFkb3ctMnhsIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIHRleHQtd2hpdGVcIlxuICAgICAgPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC01IHB5LTQgYm9yZGVyLWIgYm9yZGVyLXB1cnBsZS04MDAvNDAgYmctcHVycGxlLTk1MC82MCBzaHJpbmstMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05IGgtOSByb3VuZGVkLXhsIGJnLWFtYmVyLTUwMC8yMCBib3JkZXIgYm9yZGVyLWFtYmVyLTQwMC80MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWFtYmVyLTMwMFwiPlxuICAgICAgICAgICAgICA8Rm9sZGVyQXJjaGl2ZSBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtYmFzZSBzbTp0ZXh0LWxnIGZvbnQtYmxhY2sgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWFtYmVyLTMwMCB2aWEtcGluay00MDAgdG8teWVsbG93LTMwMCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICBEb3dubG9hZCBQcm9qZWN0IFpJUFxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXB1cnBsZS0zMDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIENvbXBsZXRlIFdvcmtpbmcgU291cmNlIENvZGUgJiBBbmRyb2lkIEJ1aWxkIEluc3RydWN0aW9uc1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgcm91bmRlZC1mdWxsIHRleHQtcHVycGxlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlIGJnLXB1cnBsZS05MDAvNTAgaG92ZXI6YmctcHVycGxlLTgwMCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBUYWJzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLWIgYm9yZGVyLXB1cnBsZS04MDAvNDAgYmctcHVycGxlLTk1MC8zMCBzaHJpbmstMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgIHNldEFjdGl2ZVRhYignZG93bmxvYWQnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHktMi41IHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLWItMiAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdkb3dubG9hZCdcbiAgICAgICAgICAgICAgICA/ICdib3JkZXItYW1iZXItNDAwIHRleHQtYW1iZXItMzAwIGJnLWFtYmVyLTQwMC8xMCdcbiAgICAgICAgICAgICAgICA6ICdib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1wdXJwbGUtMzAwIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBEb3dubG9hZCBaSVBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgICBzZXRBY3RpdmVUYWIoJ2FuZHJvaWQnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHktMi41IHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLWItMiAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdhbmRyb2lkJ1xuICAgICAgICAgICAgICAgID8gJ2JvcmRlci1hbWJlci00MDAgdGV4dC1hbWJlci0zMDAgYmctYW1iZXItNDAwLzEwJ1xuICAgICAgICAgICAgICAgIDogJ2JvcmRlci10cmFuc3BhcmVudCB0ZXh0LXB1cnBsZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFuZHJvaWQgQVBLIEd1aWRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBDb250ZW50ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktYXV0byBwLTQgc3BhY2UteS00XCI+XG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2Rvd25sb2FkJyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWFtYmVyLTUwMC8xNSB2aWEtcHVycGxlLTkwMC80MCB0by1waW5rLTUwMC8xNSBib3JkZXIgYm9yZGVyLWFtYmVyLTQwMC81MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgPEZpbGVDb2RlIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYmxhY2sgdGV4dC1zbSB0ZXh0LWFtYmVyLTMwMCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVhZHkgZm9yIExvY2FsIEV4dHJhY3Rpb24gJiBQbGF5XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtcHVycGxlLTIwMC85MCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgIFRoaXMgZG93bmxvYWQgY29udGFpbnMgdGhlIDxzdHJvbmc+Y29tcGxldGUsIGZ1bGx5IGZ1bmN0aW9uYWwgY29kZWJhc2U8L3N0cm9uZz46XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGUgc3BhY2UteS0xIHRleHQtWzExcHhdIHRleHQtcHVycGxlLTIwMC85MCBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGk+QWxsIFJlYWN0ICYgVHlwZVNjcmlwdCBzb3VyY2UgZmlsZXMgd2l0aCB6ZXJvIG1pc3NpbmcgaW1wb3J0cy48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPk9yaWdpbmFsIDNEIGdsb3NzeSB2ZWN0b3IgU1ZHIGZydWl0ICYgZmVhdHVyZSBzeW1ib2xzLjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+OSBwYXlsaW5lcyBlbmdpbmUsIFNjYXR0ZXIgR2VtIEJvbnVzIFJvdW5kLCAmIE11bHRpcGxpZXJzLjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+V2ViIEF1ZGlvIEFQSSBzeW50aGVzaXplciAobm8gZXh0ZXJuYWwgYXVkaW8gZmlsZXMgcmVxdWlyZWQpLjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+YHBhY2thZ2UuanNvbmAsIGB2aXRlLmNvbmZpZy50c2AsIGB0c2NvbmZpZy5qc29uYCwgYGluZGV4Lmh0bWxgLjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+Q29tcGxldGUgYFJFQURNRS5tZGAgd2l0aCBsb2NhbCBzZXR1cCAmIEFuZHJvaWQgU3R1ZGlvIGJ1aWxkIHN0ZXBzLjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIExvY2FsIFF1aWNrIFN0YXJ0IENvbW1hbmQgQm94ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLTJ4bCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXB1cnBsZS04MDAvNTAgZm9udC1tb25vIHRleHQtWzExcHhdIHRleHQtcHVycGxlLTIwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdXBwZXJjYXNlIGZvbnQtYm9sZCB0ZXh0LWFtYmVyLTQwMCBtYi0xXCI+UXVpY2sgU3RhcnQgQ29tbWFuZHM6PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNDAwXCI+IyAxLiBJbnN0YWxsIGRlcGVuZGVuY2llczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+bnBtIGluc3RhbGw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC00MDAgbXQtMVwiPiMgMi4gUnVuIGxvY2FsIGRldiBzZXJ2ZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pm5wbSBydW4gZGV2PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHtkb3dubG9hZFN1Y2Nlc3MgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtMnhsIGJnLWVtZXJhbGQtNTAwLzIwIGJvcmRlciBib3JkZXItZW1lcmFsZC00MDAvNDAgdGV4dC1lbWVyYWxkLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB0ZXh0LXhzIGZvbnQtYm9sZCBhbmltYXRlLWZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZW1lcmFsZC00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+WklQIGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5ISBFeHRyYWN0IGFuZCBydW4gYG5wbSBpbnN0YWxsYC48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIERvd25sb2FkIFRyaWdnZXIgQnV0dG9uICovfVxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzR2VuZXJhdGluZ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZFppcH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMy41IHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1hbWJlci01MDAgdmlhLXllbGxvdy00MDAgdG8tYW1iZXItNTAwIHRleHQtYW1iZXItOTUwIGZvbnQtYmxhY2sgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgc2hhZG93LWxnIHNoYWRvdy1hbWJlci00MDAvNDAgaG92ZXI6YnJpZ2h0bmVzcy0xMTAgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2lzR2VuZXJhdGluZyA/IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIyIGNsYXNzTmFtZT1cInctNSBoLTUgYW5pbWF0ZS1zcGluIHRleHQtYW1iZXItOTUwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGFja2luZyBQcm9qZWN0IFpJUC4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWFtYmVyLTk1MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkRvd25sb2FkIENvbXBsZXRlIFByb2plY3QgKFpJUCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyB0ZXh0LXhzIHRleHQtcHVycGxlLTIwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMy41IHJvdW5kZWQtMnhsIGJnLXB1cnBsZS05NTAvNjAgYm9yZGVyIGJvcmRlci1wdXJwbGUtODAwLzUwIGZsZXggaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8U21hcnRwaG9uZSBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtY3lhbi00MDAgc2hyaW5rLTAgbXQtMC41XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYmxhY2sgdGV4dC1zbSB0ZXh0LWN5YW4tMzAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIENvbnZlcnQgdG8gQW5kcm9pZCBBUEsgd2l0aCBDYXBhY2l0b3JcbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXB1cnBsZS0yMDAvOTAgbXQtMSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29udmVydCBGUlVJVCBNQU5JQSBVTFRSQSBpbnRvIGFuIGluc3RhbGxhYmxlIEFuZHJvaWQgQVBLIHVzaW5nIENhcGFjaXRvciBhbmQgQW5kcm9pZCBTdHVkaW86XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIGJnLWJsYWNrLzQwIHAtMy41IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItcHVycGxlLTgwMC80MCBmb250LW1vbm8gdGV4dC1bMTBweF0gdGV4dC1wdXJwbGUtMjAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1hbWJlci00MDAgZm9udC1ib2xkXCI+U3RlcCAxOiBJbnN0YWxsIENhcGFjaXRvciBDTEkgJiBDb3JlPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXB1cnBsZS05NTAvNzAgcC0yIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIG5wbSBpbnN0YWxsIEBjYXBhY2l0b3IvY29yZSBAY2FwYWNpdG9yL2NsaSBAY2FwYWNpdG9yL2FuZHJvaWRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1hbWJlci00MDAgZm9udC1ib2xkIG10LTJcIj5TdGVwIDI6IEluaXRpYWxpemUgJiBCdWlsZDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1wdXJwbGUtOTUwLzcwIHAtMiByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICBucHggY2FwIGluaXQgJnF1b3Q7RlJVSVQgTUFOSUEgVUxUUkEmcXVvdDsgJnF1b3Q7Y29tLmZydWl0bWFuaWEudWx0cmEmcXVvdDsgLS13ZWItZGlyIGRpc3Q8YnIgLz5cbiAgICAgICAgICAgICAgICAgIG5wbSBydW4gYnVpbGRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1hbWJlci00MDAgZm9udC1ib2xkIG10LTJcIj5TdGVwIDM6IEFkZCBBbmRyb2lkICYgU3luYzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1wdXJwbGUtOTUwLzcwIHAtMiByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICBucHggY2FwIGFkZCBhbmRyb2lkPGJyIC8+XG4gICAgICAgICAgICAgICAgICBucHggY2FwIHN5bmNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1hbWJlci00MDAgZm9udC1ib2xkIG10LTJcIj5TdGVwIDQ6IE9wZW4gaW4gQW5kcm9pZCBTdHVkaW8gJiBCdWlsZCBBUEs8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctcHVycGxlLTk1MC83MCBwLTIgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgbnB4IGNhcCBvcGVuIGFuZHJvaWRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LXNhbnMgdGV4dC1wdXJwbGUtMzAwLzkwIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgIEluIEFuZHJvaWQgU3R1ZGlvOiBTZWxlY3QgPHN0cm9uZz5CdWlsZCAmZ3Q7IEJ1aWxkIEJ1bmRsZShzKSAvIEFQSyhzKSAmZ3Q7IEJ1aWxkIEFQSyhzKTwvc3Ryb25nPi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEZvb3RlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLXQgYm9yZGVyLXB1cnBsZS04MDAvNDAgYmctcHVycGxlLTk1MC82MCB0ZXh0LWNlbnRlciBzaHJpbmstMFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc291bmQucGxheUJ1dHRvbkNsaWNrKCk7XG4gICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMi41IHJvdW5kZWQteGwgYmctcHVycGxlLTgwMCBob3ZlcjpiZy1wdXJwbGUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBCYWNrIHRvIEdhbWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=