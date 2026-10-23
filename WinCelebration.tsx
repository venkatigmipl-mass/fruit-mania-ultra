const React = __vite__cjsImport0_react; const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import confetti from "/node_modules/.vite/deps/canvas-confetti.js?v=7c623386";
import { sound } from "/src/services/audio.ts";
var _jsxFileName = "/app/applet/src/components/WinCelebration.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const WinCelebration = ({ winAmount, betAmount, isJackpot, onClose }) => {
	const [displayedWin, setDisplayedWin] = useState(0);
	const ratio = winAmount / Math.max(1, betAmount);
	let title = "BIG WIN!";
	let bannerColor = "from-amber-400 via-pink-500 to-purple-600";
	let badgeText = "AWESOME COMBINATION!";
	if (isJackpot || ratio >= 25) {
		title = "JACKPOT WIN!";
		bannerColor = "from-yellow-300 via-amber-400 to-rose-600";
		badgeText = "ULTIMATE FRUIT MANIA!";
	} else if (ratio >= 10) {
		title = "MEGA WIN!";
		bannerColor = "from-pink-400 via-purple-500 to-indigo-500";
		badgeText = "MASSIVE HIT!";
	}
	useEffect(() => {
		// Fire confetti bursts
		const end = Date.now() + 1800;
		const colors = [
			"#ff2a85",
			"#ffd700",
			"#00e5ff",
			"#39ff14",
			"#ffffff"
		];
		(function frame() {
			confetti({
				particleCount: 4,
				angle: 60,
				spread: 55,
				origin: { x: 0 },
				colors
			});
			confetti({
				particleCount: 4,
				angle: 120,
				spread: 55,
				origin: { x: 1 },
				colors
			});
			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}
		})();
		// Animated counter up to winAmount
		const duration = 1200;
		const startTime = performance.now();
		const animate = (currentTime) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(1, elapsed / duration);
			setDisplayedWin(Math.floor(progress * winAmount));
			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		};
		requestAnimationFrame(animate);
	}, [winAmount]);
	return /* @__PURE__ */ _jsxDEV("div", {
		onClick: onClose,
		className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer select-none animate-fade-in",
		children: /* @__PURE__ */ _jsxDEV("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative max-w-sm w-full bg-gradient-to-b from-[#2d0a4e] via-[#1a0530] to-[#100320] rounded-3xl p-6 border-2 border-yellow-400/80 shadow-2xl shadow-yellow-500/30 text-center flex flex-col items-center",
			children: [
				/* @__PURE__ */ _jsxDEV("div", { className: "absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 blur-lg opacity-40 -z-10 animate-pulse" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "text-5xl mb-2 animate-bounce",
					children: isJackpot ? "👑" : "💎"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/50 text-yellow-300 text-xs font-black uppercase tracking-wider mb-2",
					children: badgeText
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("h2", {
					className: `text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${bannerColor} uppercase tracking-wider drop-shadow-md`,
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "my-5 flex items-center justify-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-4xl sm:text-5xl font-black text-amber-300 font-mono tracking-tight drop-shadow-md",
						children: ["+", displayedWin.toLocaleString()]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "text-sm font-black text-amber-400 bg-amber-500/20 px-2 py-1 rounded-lg border border-amber-400/40",
						children: "PTS"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "text-xs text-purple-300/80 font-semibold mb-6",
					children: "Virtual free entertainment points added to balance!"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("button", {
					onClick: () => {
						sound.playButtonClick();
						onClose();
					},
					className: "w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-amber-950 font-black text-base uppercase tracking-wider shadow-lg shadow-amber-400/30 hover:brightness-110 active:scale-95 transition-all cursor-pointer",
					children: "Collect Points"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 80,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 76,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLFdBQVcsZ0JBQWdCO0FBQzNDLE9BQU8sY0FBYztBQUNyQixTQUFTLGFBQWE7OztBQVN0QixPQUFPLE1BQU0sa0JBQWlELEVBQzVELFdBQ0EsV0FDQSxXQUNBLGNBQ0k7Q0FDSixNQUFNLENBQUMsY0FBYyxtQkFBbUIsU0FBUyxDQUFDO0NBRWxELE1BQU0sUUFBUSxZQUFZLEtBQUssSUFBSSxHQUFHLFNBQVM7Q0FDL0MsSUFBSSxRQUFRO0NBQ1osSUFBSSxjQUFjO0NBQ2xCLElBQUksWUFBWTtDQUVoQixJQUFJLGFBQWEsU0FBUyxJQUFJO0VBQzVCLFFBQVE7RUFDUixjQUFjO0VBQ2QsWUFBWTtDQUNkLE9BQU8sSUFBSSxTQUFTLElBQUk7RUFDdEIsUUFBUTtFQUNSLGNBQWM7RUFDZCxZQUFZO0NBQ2Q7Q0FFQSxnQkFBZ0I7O0VBRWQsTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJO0VBQ3pCLE1BQU0sU0FBUztHQUFDO0dBQVc7R0FBVztHQUFXO0dBQVc7RUFBUztFQUVyRSxDQUFDLFNBQVMsUUFBUTtHQUNoQixTQUFTO0lBQ1AsZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUNmO0dBQ0YsQ0FBQztHQUNELFNBQVM7SUFDUCxlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ2Y7R0FDRixDQUFDO0dBRUQsSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLO0lBQ3BCLHNCQUFzQixLQUFLO0dBQzdCO0VBQ0YsRUFBQyxDQUFFOztFQUdILE1BQU0sV0FBVztFQUNqQixNQUFNLFlBQVksWUFBWSxJQUFJO0VBQ2xDLE1BQU0sV0FBVyxnQkFBd0I7R0FDdkMsTUFBTSxVQUFVLGNBQWM7R0FDOUIsTUFBTSxXQUFXLEtBQUssSUFBSSxHQUFHLFVBQVUsUUFBUTtHQUMvQyxnQkFBZ0IsS0FBSyxNQUFNLFdBQVcsU0FBUyxDQUFDO0dBQ2hELElBQUksV0FBVyxHQUFHO0lBQ2hCLHNCQUFzQixPQUFPO0dBQy9CO0VBQ0Y7RUFDQSxzQkFBc0IsT0FBTztDQUMvQixHQUFHLENBQUMsU0FBUyxDQUFDO0NBRWQsT0FDRSx3QkFBQyxPQUFEO0VBQ0UsU0FBUztFQUNULFdBQVU7WUFFVix3QkFBQyxPQUFEO0dBQ0UsVUFBVSxNQUFNLEVBQUUsZ0JBQWdCO0dBQ2xDLFdBQVU7YUFGWjtJQUtFLHdCQUFDLE9BQUQsRUFBSyxXQUFVLG1JQUFvSTs7Ozs7SUFFbkosd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFDWixZQUFZLE9BQU87SUFDakI7Ozs7O0lBRUwsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFDWjtJQUNFOzs7OztJQUVMLHdCQUFDLE1BQUQ7S0FBSSxXQUFXLGtGQUFrRixZQUFZO2VBQzFHO0lBQ0M7Ozs7O0lBR0osd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLFFBQUQ7TUFBTSxXQUFVO2dCQUFoQixDQUF5RyxLQUNyRyxhQUFhLGVBQWUsQ0FDMUI7Ozs7O2VBQ04sd0JBQUMsUUFBRDtNQUFNLFdBQVU7Z0JBQW9HO0tBRTlHOzs7O2FBQ0g7Ozs7OztJQUVMLHdCQUFDLEtBQUQ7S0FBRyxXQUFVO2VBQWdEO0lBRTFEOzs7OztJQUdILHdCQUFDLFVBQUQ7S0FDRSxlQUFlO01BQ2IsTUFBTSxnQkFBZ0I7TUFDdEIsUUFBUTtLQUNWO0tBQ0EsV0FBVTtlQUNYO0lBRU87Ozs7O0dBQ0w7Ozs7OztDQUNGOzs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIldpbkNlbGVicmF0aW9uLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb25mZXR0aSBmcm9tICdjYW52YXMtY29uZmV0dGknO1xuaW1wb3J0IHsgc291bmQgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdWRpbyc7XG5cbmludGVyZmFjZSBXaW5DZWxlYnJhdGlvblByb3BzIHtcbiAgd2luQW1vdW50OiBudW1iZXI7XG4gIGJldEFtb3VudDogbnVtYmVyO1xuICBpc0phY2twb3Q6IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBXaW5DZWxlYnJhdGlvbjogUmVhY3QuRkM8V2luQ2VsZWJyYXRpb25Qcm9wcz4gPSAoe1xuICB3aW5BbW91bnQsXG4gIGJldEFtb3VudCxcbiAgaXNKYWNrcG90LFxuICBvbkNsb3NlXG59KSA9PiB7XG4gIGNvbnN0IFtkaXNwbGF5ZWRXaW4sIHNldERpc3BsYXllZFdpbl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCByYXRpbyA9IHdpbkFtb3VudCAvIE1hdGgubWF4KDEsIGJldEFtb3VudCk7XG4gIGxldCB0aXRsZSA9ICdCSUcgV0lOISc7XG4gIGxldCBiYW5uZXJDb2xvciA9ICdmcm9tLWFtYmVyLTQwMCB2aWEtcGluay01MDAgdG8tcHVycGxlLTYwMCc7XG4gIGxldCBiYWRnZVRleHQgPSAnQVdFU09NRSBDT01CSU5BVElPTiEnO1xuXG4gIGlmIChpc0phY2twb3QgfHwgcmF0aW8gPj0gMjUpIHtcbiAgICB0aXRsZSA9ICdKQUNLUE9UIFdJTiEnO1xuICAgIGJhbm5lckNvbG9yID0gJ2Zyb20teWVsbG93LTMwMCB2aWEtYW1iZXItNDAwIHRvLXJvc2UtNjAwJztcbiAgICBiYWRnZVRleHQgPSAnVUxUSU1BVEUgRlJVSVQgTUFOSUEhJztcbiAgfSBlbHNlIGlmIChyYXRpbyA+PSAxMCkge1xuICAgIHRpdGxlID0gJ01FR0EgV0lOISc7XG4gICAgYmFubmVyQ29sb3IgPSAnZnJvbS1waW5rLTQwMCB2aWEtcHVycGxlLTUwMCB0by1pbmRpZ28tNTAwJztcbiAgICBiYWRnZVRleHQgPSAnTUFTU0lWRSBISVQhJztcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRmlyZSBjb25mZXR0aSBidXJzdHNcbiAgICBjb25zdCBlbmQgPSBEYXRlLm5vdygpICsgMTgwMDtcbiAgICBjb25zdCBjb2xvcnMgPSBbJyNmZjJhODUnLCAnI2ZmZDcwMCcsICcjMDBlNWZmJywgJyMzOWZmMTQnLCAnI2ZmZmZmZiddO1xuXG4gICAgKGZ1bmN0aW9uIGZyYW1lKCkge1xuICAgICAgY29uZmV0dGkoe1xuICAgICAgICBwYXJ0aWNsZUNvdW50OiA0LFxuICAgICAgICBhbmdsZTogNjAsXG4gICAgICAgIHNwcmVhZDogNTUsXG4gICAgICAgIG9yaWdpbjogeyB4OiAwIH0sXG4gICAgICAgIGNvbG9yc1xuICAgICAgfSk7XG4gICAgICBjb25mZXR0aSh7XG4gICAgICAgIHBhcnRpY2xlQ291bnQ6IDQsXG4gICAgICAgIGFuZ2xlOiAxMjAsXG4gICAgICAgIHNwcmVhZDogNTUsXG4gICAgICAgIG9yaWdpbjogeyB4OiAxIH0sXG4gICAgICAgIGNvbG9yc1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChEYXRlLm5vdygpIDwgZW5kKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gICAgICB9XG4gICAgfSkoKTtcblxuICAgIC8vIEFuaW1hdGVkIGNvdW50ZXIgdXAgdG8gd2luQW1vdW50XG4gICAgY29uc3QgZHVyYXRpb24gPSAxMjAwO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnN0IGFuaW1hdGUgPSAoY3VycmVudFRpbWU6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgZWxhcHNlZCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCBlbGFwc2VkIC8gZHVyYXRpb24pO1xuICAgICAgc2V0RGlzcGxheWVkV2luKE1hdGguZmxvb3IocHJvZ3Jlc3MgKiB3aW5BbW91bnQpKTtcbiAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9LCBbd2luQW1vdW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGJnLWJsYWNrLzg1IGJhY2tkcm9wLWJsdXItbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGN1cnNvci1wb2ludGVyIHNlbGVjdC1ub25lIGFuaW1hdGUtZmFkZS1pblwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctc20gdy1mdWxsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1bIzJkMGE0ZV0gdmlhLVsjMWEwNTMwXSB0by1bIzEwMDMyMF0gcm91bmRlZC0zeGwgcC02IGJvcmRlci0yIGJvcmRlci15ZWxsb3ctNDAwLzgwIHNoYWRvdy0yeGwgc2hhZG93LXllbGxvdy01MDAvMzAgdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIlxuICAgICAgPlxuICAgICAgICB7LyogR2xvdyBoYWxvICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1pbnNldC0xIHJvdW5kZWQtM3hsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1waW5rLTUwMCB2aWEteWVsbG93LTQwMCB0by1wdXJwbGUtNjAwIGJsdXItbGcgb3BhY2l0eS00MCAtei0xMCBhbmltYXRlLXB1bHNlXCIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNXhsIG1iLTIgYW5pbWF0ZS1ib3VuY2VcIj5cbiAgICAgICAgICB7aXNKYWNrcG90ID8gJ/CfkZEnIDogJ/Cfko4nfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMSByb3VuZGVkLWZ1bGwgYmcteWVsbG93LTQwMC8yMCBib3JkZXIgYm9yZGVyLXllbGxvdy00MDAvNTAgdGV4dC15ZWxsb3ctMzAwIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbWItMlwiPlxuICAgICAgICAgIHtiYWRnZVRleHR9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e2B0ZXh0LTR4bCBzbTp0ZXh0LTV4bCBmb250LWJsYWNrIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLXIgJHtiYW5uZXJDb2xvcn0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGRyb3Atc2hhZG93LW1kYH0+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIHsvKiBDb3VudGVyIE51bWJlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgc206dGV4dC01eGwgZm9udC1ibGFjayB0ZXh0LWFtYmVyLTMwMCBmb250LW1vbm8gdHJhY2tpbmctdGlnaHQgZHJvcC1zaGFkb3ctbWRcIj5cbiAgICAgICAgICAgICt7ZGlzcGxheWVkV2luLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ibGFjayB0ZXh0LWFtYmVyLTQwMCBiZy1hbWJlci01MDAvMjAgcHgtMiBweS0xIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1hbWJlci00MDAvNDBcIj5cbiAgICAgICAgICAgIFBUU1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXB1cnBsZS0zMDAvODAgZm9udC1zZW1pYm9sZCBtYi02XCI+XG4gICAgICAgICAgVmlydHVhbCBmcmVlIGVudGVydGFpbm1lbnQgcG9pbnRzIGFkZGVkIHRvIGJhbGFuY2UhXG4gICAgICAgIDwvcD5cblxuICAgICAgICB7LyogQ29sbGVjdCBidXR0b24gKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzb3VuZC5wbGF5QnV0dG9uQ2xpY2soKTtcbiAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1hbWJlci01MDAgdmlhLXllbGxvdy00MDAgdG8tYW1iZXItNTAwIHRleHQtYW1iZXItOTUwIGZvbnQtYmxhY2sgdGV4dC1iYXNlIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBzaGFkb3ctbGcgc2hhZG93LWFtYmVyLTQwMC8zMCBob3ZlcjpicmlnaHRuZXNzLTExMCBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgQ29sbGVjdCBQb2ludHNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=