const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
import { PAYLINES } from "/src/utils/gameLogic.ts";
var _jsxFileName = "/app/applet/src/components/WinLineOverlay.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const WinLineOverlay = ({ winningLines }) => {
	if (!winningLines || winningLines.length === 0) return null;
	// 5 columns (0% to 100% horizontally), 3 rows (0% to 100% vertically)
	// Percentages for center of each column (10%, 30%, 50%, 70%, 90%)
	const colCenters = [
		10,
		30,
		50,
		70,
		90
	];
	// Percentages for center of each row (16.6%, 50%, 83.3%)
	const rowCenters = [
		16.6,
		50,
		83.3
	];
	return /* @__PURE__ */ _jsxDEV("svg", {
		className: "absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible",
		viewBox: "0 0 100 100",
		preserveAspectRatio: "none",
		children: [/* @__PURE__ */ _jsxDEV("defs", { children: /* @__PURE__ */ _jsxDEV("filter", {
			id: "winline-glow",
			x: "-20%",
			y: "-20%",
			width: "140%",
			height: "140%",
			children: [/* @__PURE__ */ _jsxDEV("feGaussianBlur", {
				stdDeviation: "1.5",
				result: "blur"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 11
			}, this), /* @__PURE__ */ _jsxDEV("feMerge", { children: [/* @__PURE__ */ _jsxDEV("feMergeNode", { in: "blur" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 13
			}, this), /* @__PURE__ */ _jsxDEV("feMergeNode", { in: "SourceGraphic" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 7
		}, this), winningLines.map((win, idx) => {
			const lineDef = PAYLINES.find((p) => p.id === win.lineId);
			const lineColor = lineDef ? lineDef.color : "#f59e0b";
			// Connect the matched positions (from col 0 up to win.count - 1)
			const coords = win.matchingPositions.map(([r, c]) => ({
				x: colCenters[c],
				y: rowCenters[r]
			}));
			if (coords.length < 2) return null;
			// Build path: M x0 y0 L x1 y1 L x2 y2 ...
			const pathData = coords.reduce((acc, pt, i) => i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`, "");
			return /* @__PURE__ */ _jsxDEV("g", {
				className: "animate-pulse",
				children: [
					/* @__PURE__ */ _jsxDEV("path", {
						d: pathData,
						fill: "none",
						stroke: lineColor,
						strokeWidth: "4",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						opacity: "0.4",
						filter: "url(#winline-glow)"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("path", {
						d: pathData,
						fill: "none",
						stroke: "#ffffff",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeDasharray: "4 2",
						className: "animate-fade-in"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 13
					}, this),
					coords.map((pt, ptIdx) => /* @__PURE__ */ _jsxDEV("g", { children: [/* @__PURE__ */ _jsxDEV("circle", {
						cx: pt.x,
						cy: pt.y,
						r: "3",
						fill: lineColor,
						opacity: "0.8"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 17
					}, this), /* @__PURE__ */ _jsxDEV("circle", {
						cx: pt.x,
						cy: pt.y,
						r: "1.5",
						fill: "#ffffff"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 17
					}, this)] }, `pt-${ptIdx}`, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 15
					}, this))
				]
			}, `win-line-${win.lineId}-${idx}`, true, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 11
			}, this);
		})]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBRWxCLFNBQVMsZ0JBQWdCOzs7QUFNekIsT0FBTyxNQUFNLGtCQUFpRCxFQUFFLG1CQUFtQjtDQUNqRixJQUFJLENBQUMsZ0JBQWdCLGFBQWEsV0FBVyxHQUFHLE9BQU87OztDQUl2RCxNQUFNLGFBQWE7RUFBQztFQUFJO0VBQUk7RUFBSTtFQUFJO0NBQUU7O0NBRXRDLE1BQU0sYUFBYTtFQUFDO0VBQU07RUFBSTtDQUFJO0NBRWxDLE9BQ0Usd0JBQUMsT0FBRDtFQUNFLFdBQVU7RUFDVixTQUFRO0VBQ1IscUJBQW9CO1lBSHRCLENBS0Usd0JBQUMsUUFBRCxZQUNFLHdCQUFDLFVBQUQ7R0FBUSxJQUFHO0dBQWUsR0FBRTtHQUFPLEdBQUU7R0FBTyxPQUFNO0dBQU8sUUFBTzthQUFoRSxDQUNFLHdCQUFDLGtCQUFEO0lBQWdCLGNBQWE7SUFBTSxRQUFPO0dBQVE7Ozs7YUFDbEQsd0JBQUMsV0FBRCxhQUNFLHdCQUFDLGVBQUQsRUFBYSxJQUFHLE9BQVE7Ozs7YUFDeEIsd0JBQUMsZUFBRCxFQUFhLElBQUcsZ0JBQWlCOzs7O1dBQzFCOzs7O1dBQ0g7Ozs7O1dBQ0o7Ozs7WUFFTCxhQUFhLEtBQUssS0FBSyxRQUFRO0dBQzlCLE1BQU0sVUFBVSxTQUFTLE1BQU0sTUFBTSxFQUFFLE9BQU8sSUFBSSxNQUFNO0dBQ3hELE1BQU0sWUFBWSxVQUFVLFFBQVEsUUFBUTs7R0FHNUMsTUFBTSxTQUFTLElBQUksa0JBQWtCLEtBQUssQ0FBQyxHQUFHLFFBQVE7SUFDcEQsR0FBRyxXQUFXO0lBQ2QsR0FBRyxXQUFXO0dBQ2hCLEVBQUU7R0FFRixJQUFJLE9BQU8sU0FBUyxHQUFHLE9BQU87O0dBRzlCLE1BQU0sV0FBVyxPQUFPLFFBQ3JCLEtBQUssSUFBSSxNQUFPLE1BQU0sSUFBSSxLQUFLLEdBQUcsRUFBRSxHQUFHLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxHQUFHLEVBQUUsR0FBRyxHQUFHLEtBQ3hFLEVBQ0Y7R0FFQSxPQUNFLHdCQUFDLEtBQUQ7SUFBeUMsV0FBVTtjQUFuRDtLQUVFLHdCQUFDLFFBQUQ7TUFDRSxHQUFHO01BQ0gsTUFBSztNQUNMLFFBQVE7TUFDUixhQUFZO01BQ1osZUFBYztNQUNkLGdCQUFlO01BQ2YsU0FBUTtNQUNSLFFBQU87S0FDUjs7Ozs7S0FHRCx3QkFBQyxRQUFEO01BQ0UsR0FBRztNQUNILE1BQUs7TUFDTCxRQUFPO01BQ1AsYUFBWTtNQUNaLGVBQWM7TUFDZCxnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixXQUFVO0tBQ1g7Ozs7O0tBR0EsT0FBTyxLQUFLLElBQUksVUFDZix3QkFBQyxLQUFELGFBQ0Usd0JBQUMsVUFBRDtNQUFRLElBQUksR0FBRztNQUFHLElBQUksR0FBRztNQUFHLEdBQUU7TUFBSSxNQUFNO01BQVcsU0FBUTtLQUFPOzs7O2VBQ2xFLHdCQUFDLFVBQUQ7TUFBUSxJQUFJLEdBQUc7TUFBRyxJQUFJLEdBQUc7TUFBRyxHQUFFO01BQU0sTUFBSztLQUFXOzs7O2FBQ25ELEtBSEssTUFBTTs7OztZQUdYLENBQ0o7SUFDQTtNQWhDSyxZQUFZLElBQUksT0FBTyxHQUFHOzs7O1VBZ0MvQjtFQUVQLENBQUMsQ0FDRTs7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiV2luTGluZU92ZXJsYXkudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXaW5uaW5nTGluZSwgUGF5bGluZURlZmluaXRpb24gfSBmcm9tICcuLi90eXBlcy9nYW1lJztcbmltcG9ydCB7IFBBWUxJTkVTIH0gZnJvbSAnLi4vdXRpbHMvZ2FtZUxvZ2ljJztcblxuaW50ZXJmYWNlIFdpbkxpbmVPdmVybGF5UHJvcHMge1xuICB3aW5uaW5nTGluZXM6IFdpbm5pbmdMaW5lW107XG59XG5cbmV4cG9ydCBjb25zdCBXaW5MaW5lT3ZlcmxheTogUmVhY3QuRkM8V2luTGluZU92ZXJsYXlQcm9wcz4gPSAoeyB3aW5uaW5nTGluZXMgfSkgPT4ge1xuICBpZiAoIXdpbm5pbmdMaW5lcyB8fCB3aW5uaW5nTGluZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAvLyA1IGNvbHVtbnMgKDAlIHRvIDEwMCUgaG9yaXpvbnRhbGx5KSwgMyByb3dzICgwJSB0byAxMDAlIHZlcnRpY2FsbHkpXG4gIC8vIFBlcmNlbnRhZ2VzIGZvciBjZW50ZXIgb2YgZWFjaCBjb2x1bW4gKDEwJSwgMzAlLCA1MCUsIDcwJSwgOTAlKVxuICBjb25zdCBjb2xDZW50ZXJzID0gWzEwLCAzMCwgNTAsIDcwLCA5MF07XG4gIC8vIFBlcmNlbnRhZ2VzIGZvciBjZW50ZXIgb2YgZWFjaCByb3cgKDE2LjYlLCA1MCUsIDgzLjMlKVxuICBjb25zdCByb3dDZW50ZXJzID0gWzE2LjYsIDUwLCA4My4zXTtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBwb2ludGVyLWV2ZW50cy1ub25lIHotMjAgb3ZlcmZsb3ctdmlzaWJsZVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuICAgID5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8ZmlsdGVyIGlkPVwid2lubGluZS1nbG93XCIgeD1cIi0yMCVcIiB5PVwiLTIwJVwiIHdpZHRoPVwiMTQwJVwiIGhlaWdodD1cIjE0MCVcIj5cbiAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMS41XCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgICAgPGZlTWVyZ2U+XG4gICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49XCJibHVyXCIgLz5cbiAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj1cIlNvdXJjZUdyYXBoaWNcIiAvPlxuICAgICAgICAgIDwvZmVNZXJnZT5cbiAgICAgICAgPC9maWx0ZXI+XG4gICAgICA8L2RlZnM+XG5cbiAgICAgIHt3aW5uaW5nTGluZXMubWFwKCh3aW4sIGlkeCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5lRGVmID0gUEFZTElORVMuZmluZCgocCkgPT4gcC5pZCA9PT0gd2luLmxpbmVJZCk7XG4gICAgICAgIGNvbnN0IGxpbmVDb2xvciA9IGxpbmVEZWYgPyBsaW5lRGVmLmNvbG9yIDogJyNmNTllMGInO1xuXG4gICAgICAgIC8vIENvbm5lY3QgdGhlIG1hdGNoZWQgcG9zaXRpb25zIChmcm9tIGNvbCAwIHVwIHRvIHdpbi5jb3VudCAtIDEpXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHdpbi5tYXRjaGluZ1Bvc2l0aW9ucy5tYXAoKFtyLCBjXSkgPT4gKHtcbiAgICAgICAgICB4OiBjb2xDZW50ZXJzW2NdLFxuICAgICAgICAgIHk6IHJvd0NlbnRlcnNbcl1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChjb29yZHMubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgLy8gQnVpbGQgcGF0aDogTSB4MCB5MCBMIHgxIHkxIEwgeDIgeTIgLi4uXG4gICAgICAgIGNvbnN0IHBhdGhEYXRhID0gY29vcmRzLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBwdCwgaSkgPT4gKGkgPT09IDAgPyBgTSAke3B0Lnh9ICR7cHQueX1gIDogYCR7YWNjfSBMICR7cHQueH0gJHtwdC55fWApLFxuICAgICAgICAgICcnXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZyBrZXk9e2B3aW4tbGluZS0ke3dpbi5saW5lSWR9LSR7aWR4fWB9IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2VcIj5cbiAgICAgICAgICAgIHsvKiBCYWNrZ3JvdW5kIHdpZGUgZ2xvdyBwYXRoICovfVxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD17cGF0aERhdGF9XG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPXtsaW5lQ29sb3J9XG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgZmlsdGVyPVwidXJsKCN3aW5saW5lLWdsb3cpXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHsvKiBTaGFycCBmb3JlZ3JvdW5kIGFuaW1hdGVkIGRhc2hlZCBsaW5lICovfVxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD17cGF0aERhdGF9XG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk9XCI0IDJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbmltYXRlLWZhZGUtaW5cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgey8qIEdsb3cgZG90IG5vZGUgYXQgZWFjaCBtYXRjaGVkIGNlbGwgKi99XG4gICAgICAgICAgICB7Y29vcmRzLm1hcCgocHQsIHB0SWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxnIGtleT17YHB0LSR7cHRJZHh9YH0+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17cHQueH0gY3k9e3B0Lnl9IHI9XCIzXCIgZmlsbD17bGluZUNvbG9yfSBvcGFjaXR5PVwiMC44XCIgLz5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXtwdC54fSBjeT17cHQueX0gcj1cIjEuNVwiIGZpbGw9XCIjZmZmZmZmXCIgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9nPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9zdmc+XG4gICk7XG59O1xuIl19