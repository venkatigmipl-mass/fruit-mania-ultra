const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { X, Gift, CheckCircle, Clock } from "/node_modules/.vite/deps/lucide-react.js?v=7c623386";
import confetti from "/node_modules/.vite/deps/canvas-confetti.js?v=7c623386";
import { DAILY_BONUS_AMOUNT } from "/src/utils/gameLogic.ts";
import { sound } from "/src/services/audio.ts";
var _jsxFileName = "/app/applet/src/components/DailyBonusModal.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const DailyBonusModal = ({ isOpen, canClaim, remainingMs: initialRemainingMs, onClaim, onClose }) => {
	const [remainingMs, setRemainingMs] = useState(initialRemainingMs);
	const [claimedJustNow, setClaimedJustNow] = useState(false);
	useEffect(() => {
		setRemainingMs(initialRemainingMs);
	}, [initialRemainingMs]);
	useEffect(() => {
		if (!isOpen || canClaim) return;
		const interval = setInterval(() => {
			setRemainingMs((prev) => Math.max(0, prev - 1e3));
		}, 1e3);
		return () => clearInterval(interval);
	}, [isOpen, canClaim]);
	if (!isOpen) return null;
	const hours = Math.floor(remainingMs / 36e5);
	const minutes = Math.floor(remainingMs % 36e5 / 6e4);
	const seconds = Math.floor(remainingMs % 6e4 / 1e3);
	const handleClaimClick = () => {
		setClaimedJustNow(true);
		sound.playBigWin();
		confetti({
			particleCount: 50,
			spread: 70,
			origin: { y: .6 }
		});
		onClaim();
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		onClick: onClose,
		className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer select-none animate-fade-in",
		children: /* @__PURE__ */ _jsxDEV("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative max-w-sm w-full bg-gradient-to-b from-[#250840] via-[#170529] to-[#0f031c] rounded-3xl p-6 border border-pink-500/40 shadow-2xl shadow-pink-900/50 text-center flex flex-col items-center",
			children: [
				/* @__PURE__ */ _jsxDEV("button", {
					onClick: () => {
						sound.playButtonClick();
						onClose();
					},
					className: "absolute top-4 right-4 text-purple-300 hover:text-white p-1 rounded-full bg-purple-900/40 hover:bg-purple-800 transition-all cursor-pointer",
					children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-400 flex items-center justify-center shadow-lg shadow-pink-500/30 mb-3 animate-float border border-pink-300/40",
					children: /* @__PURE__ */ _jsxDEV(Gift, { className: "w-9 h-9 text-white" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("h2", {
					className: "text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 to-yellow-400 uppercase tracking-wide",
					children: "Daily Bonus"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "text-xs text-purple-300/80 mt-1 mb-5",
					children: "Claim free entertainment points once every 24 hours!"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "w-full bg-purple-950/60 rounded-2xl border border-purple-700/50 p-4 mb-5 flex flex-col items-center",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[11px] font-bold text-amber-300/80 uppercase tracking-wider",
							children: "Today's Gift"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-1.5 my-1",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "text-3xl font-black text-amber-300",
								children: ["+", DAILY_BONUS_AMOUNT.toLocaleString()]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs font-black text-amber-400 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-400/40",
								children: "FREE PTS"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[10px] text-purple-300 font-semibold",
							children: "Zero deposits • 100% Free Virtual Points"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 9
				}, this),
				canClaim && !claimedJustNow ? /* @__PURE__ */ _jsxDEV("button", {
					onClick: handleClaimClick,
					className: "w-full py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-black text-base uppercase tracking-wider shadow-lg shadow-pink-500/40 hover:brightness-110 active:scale-95 transition-all cursor-pointer animate-pulse",
					children: "Claim 2,500 Free Points"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 11
				}, this) : claimedJustNow ? /* @__PURE__ */ _jsxDEV("div", {
					className: "w-full py-3 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center gap-2 font-bold text-sm",
					children: [/* @__PURE__ */ _jsxDEV(CheckCircle, { className: "w-5 h-5 text-emerald-400" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 13
					}, this), "Claimed! Enjoy your spins!"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 11
				}, this) : /* @__PURE__ */ _jsxDEV("div", {
					className: "w-full flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2 text-purple-300 text-xs font-semibold",
						children: [/* @__PURE__ */ _jsxDEV(Clock, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Next claim available in:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2 text-xl font-black font-mono text-amber-300 bg-purple-950/80 px-4 py-2 rounded-xl border border-purple-700/60",
						children: [
							/* @__PURE__ */ _jsxDEV("span", { children: [hours.toString().padStart(2, "0"), "h"] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("span", { children: ":" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("span", { children: [minutes.toString().padStart(2, "0"), "m"] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("span", { children: ":" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("span", { children: [seconds.toString().padStart(2, "0"), "s"] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 121,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 116,
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

//# sourceMappingURL=data:application/json;base64,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QUcsR0FBRyxHQUFFLEdBQU87Ozs7O09BQ2hELHdCQUFDLFFBQUQsWUFBTSxJQUFPOzs7OztPQUNiLHdCQUFDLFFBQUQsYUFBTyxRQUFRLFNBQVMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUUsR0FBTzs7Ozs7T0FDbEQsd0JBQUMsUUFBRCxZQUFNLElBQU87Ozs7O09BQ2Isd0JBQUMsUUFBRCxhQUFPLFFBQVEsU0FBUyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRSxHQUFPOzs7OztNQUMvQzs7Ozs7YUFDRjs7Ozs7O0dBRUo7Ozs7OztDQUNGOzs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkRhaWx5Qm9udXNNb2RhbC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBYLCBHaWZ0LCBDaGVja0NpcmNsZSwgQ2xvY2sgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IGNvbmZldHRpIGZyb20gJ2NhbnZhcy1jb25mZXR0aSc7XG5pbXBvcnQgeyBEQUlMWV9CT05VU19BTU9VTlQgfSBmcm9tICcuLi91dGlscy9nYW1lTG9naWMnO1xuaW1wb3J0IHsgc291bmQgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdWRpbyc7XG5cbmludGVyZmFjZSBEYWlseUJvbnVzTW9kYWxQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgY2FuQ2xhaW06IGJvb2xlYW47XG4gIHJlbWFpbmluZ01zOiBudW1iZXI7XG4gIG9uQ2xhaW06ICgpID0+IHZvaWQ7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBEYWlseUJvbnVzTW9kYWw6IFJlYWN0LkZDPERhaWx5Qm9udXNNb2RhbFByb3BzPiA9ICh7XG4gIGlzT3BlbixcbiAgY2FuQ2xhaW0sXG4gIHJlbWFpbmluZ01zOiBpbml0aWFsUmVtYWluaW5nTXMsXG4gIG9uQ2xhaW0sXG4gIG9uQ2xvc2Vcbn0pID0+IHtcbiAgY29uc3QgW3JlbWFpbmluZ01zLCBzZXRSZW1haW5pbmdNc10gPSB1c2VTdGF0ZShpbml0aWFsUmVtYWluaW5nTXMpO1xuICBjb25zdCBbY2xhaW1lZEp1c3ROb3csIHNldENsYWltZWRKdXN0Tm93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFJlbWFpbmluZ01zKGluaXRpYWxSZW1haW5pbmdNcyk7XG4gIH0sIFtpbml0aWFsUmVtYWluaW5nTXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNPcGVuIHx8IGNhbkNsYWltKSByZXR1cm47XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRSZW1haW5pbmdNcygocHJldikgPT4gTWF0aC5tYXgoMCwgcHJldiAtIDEwMDApKTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtpc09wZW4sIGNhbkNsYWltXSk7XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihyZW1haW5pbmdNcyAvIDM2MDAwMDApO1xuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigocmVtYWluaW5nTXMgJSAzNjAwMDAwKSAvIDYwMDAwKTtcbiAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHJlbWFpbmluZ01zICUgNjAwMDApIC8gMTAwMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xhaW1DbGljayA9ICgpID0+IHtcbiAgICBzZXRDbGFpbWVkSnVzdE5vdyh0cnVlKTtcbiAgICBzb3VuZC5wbGF5QmlnV2luKCk7XG4gICAgY29uZmV0dGkoe1xuICAgICAgcGFydGljbGVDb3VudDogNTAsXG4gICAgICBzcHJlYWQ6IDcwLFxuICAgICAgb3JpZ2luOiB7IHk6IDAuNiB9XG4gICAgfSk7XG4gICAgb25DbGFpbSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBiZy1ibGFjay84MCBiYWNrZHJvcC1ibHVyLXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZSBhbmltYXRlLWZhZGUtaW5cIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LXNtIHctZnVsbCBiZy1ncmFkaWVudC10by1iIGZyb20tWyMyNTA4NDBdIHZpYS1bIzE3MDUyOV0gdG8tWyMwZjAzMWNdIHJvdW5kZWQtM3hsIHAtNiBib3JkZXIgYm9yZGVyLXBpbmstNTAwLzQwIHNoYWRvdy0yeGwgc2hhZG93LXBpbmstOTAwLzUwIHRleHQtY2VudGVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNvdW5kLnBsYXlCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB0ZXh0LXB1cnBsZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSBwLTEgcm91bmRlZC1mdWxsIGJnLXB1cnBsZS05MDAvNDAgaG92ZXI6YmctcHVycGxlLTgwMCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgey8qIEFuaW1hdGVkIEljb24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLXRyIGZyb20tcGluay01MDAgdG8tYW1iZXItNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1sZyBzaGFkb3ctcGluay01MDAvMzAgbWItMyBhbmltYXRlLWZsb2F0IGJvcmRlciBib3JkZXItcGluay0zMDAvNDBcIj5cbiAgICAgICAgICA8R2lmdCBjbGFzc05hbWU9XCJ3LTkgaC05IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ibGFjayB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tcGluay00MDAgdmlhLWFtYmVyLTMwMCB0by15ZWxsb3ctNDAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+XG4gICAgICAgICAgRGFpbHkgQm9udXNcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXB1cnBsZS0zMDAvODAgbXQtMSBtYi01XCI+XG4gICAgICAgICAgQ2xhaW0gZnJlZSBlbnRlcnRhaW5tZW50IHBvaW50cyBvbmNlIGV2ZXJ5IDI0IGhvdXJzIVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgey8qIFJld2FyZCBCb3ggKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXB1cnBsZS05NTAvNjAgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1wdXJwbGUtNzAwLzUwIHAtNCBtYi01IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1ib2xkIHRleHQtYW1iZXItMzAwLzgwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgVG9kYXkmYXBvcztzIEdpZnRcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IG15LTFcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDBcIj5cbiAgICAgICAgICAgICAgK3tEQUlMWV9CT05VU19BTU9VTlQudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ibGFjayB0ZXh0LWFtYmVyLTQwMCBiZy1hbWJlci01MDAvMjAgcHgtMS41IHB5LTAuNSByb3VuZGVkIGJvcmRlciBib3JkZXItYW1iZXItNDAwLzQwXCI+XG4gICAgICAgICAgICAgIEZSRUUgUFRTXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1wdXJwbGUtMzAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIFplcm8gZGVwb3NpdHMg4oCiIDEwMCUgRnJlZSBWaXJ0dWFsIFBvaW50c1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2NhbkNsYWltICYmICFjbGFpbWVkSnVzdE5vdyA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGFpbUNsaWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMuNSByb3VuZGVkLTJ4bCBiZy1ncmFkaWVudC10by1yIGZyb20tcGluay01MDAgdmlhLXJvc2UtNTAwIHRvLWFtYmVyLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYmxhY2sgdGV4dC1iYXNlIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBzaGFkb3ctbGcgc2hhZG93LXBpbmstNTAwLzQwIGhvdmVyOmJyaWdodG5lc3MtMTEwIGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBhbmltYXRlLXB1bHNlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDbGFpbSAyLDUwMCBGcmVlIFBvaW50c1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogY2xhaW1lZEp1c3ROb3cgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMyByb3VuZGVkLTJ4bCBiZy1lbWVyYWxkLTUwMC8yMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNDAwLzQwIHRleHQtZW1lcmFsZC0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgZm9udC1ib2xkIHRleHQtc21cIj5cbiAgICAgICAgICAgIDxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZW1lcmFsZC00MDBcIiAvPlxuICAgICAgICAgICAgQ2xhaW1lZCEgRW5qb3kgeW91ciBzcGlucyFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXB1cnBsZS0zMDAgdGV4dC14cyBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+TmV4dCBjbGFpbSBhdmFpbGFibGUgaW46PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteGwgZm9udC1ibGFjayBmb250LW1vbm8gdGV4dC1hbWJlci0zMDAgYmctcHVycGxlLTk1MC84MCBweC00IHB5LTIgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXB1cnBsZS03MDAvNjBcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e2hvdXJzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1oPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj57bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9bTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfXM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==