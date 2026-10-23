const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7c623386";
var _jsxFileName = "/app/applet/src/components/FruitSymbol3D.tsx";
import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7c623386";
export const FruitSymbol3D = ({ id, size = 56, className = "", isWinning = false }) => {
	const width = size;
	const height = size;
	switch (id) {
		case "strawberry": return /* @__PURE__ */ _jsxDEV("svg", {
			width,
			height,
			viewBox: "0 0 100 100",
			className: `filter drop-shadow-md transition-transform duration-300 ${className} ${isWinning ? "animate-pulse scale-105" : ""}`,
			children: [
				/* @__PURE__ */ _jsxDEV("defs", { children: [
					/* @__PURE__ */ _jsxDEV("radialGradient", {
						id: "sb-body",
						cx: "40%",
						cy: "35%",
						r: "65%",
						children: [
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "0%",
								stopColor: "#ff5277"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 33,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "45%",
								stopColor: "#e60039"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "85%",
								stopColor: "#990022"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "100%",
								stopColor: "#590014"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "sb-highlight",
						x1: "0%",
						y1: "0%",
						x2: "50%",
						y2: "100%",
						children: [/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#ffffff",
							stopOpacity: "0.75"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#ff809b",
							stopOpacity: "0"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "sb-leaf",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "100%",
						children: [
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "0%",
								stopColor: "#86efac"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "60%",
								stopColor: "#22c55e"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 44,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "100%",
								stopColor: "#14532d"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("ellipse", {
					cx: "50",
					cy: "92",
					rx: "30",
					ry: "7",
					fill: "#000000",
					opacity: "0.4"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 88 C26 88 18 64 22 44 C25 31 37 26 50 30 C63 26 75 31 78 44 C82 64 74 88 50 88 Z",
					fill: "url(#sb-body)",
					stroke: "#ff3366",
					strokeWidth: "1.5"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M32 40 C34 32 44 28 50 31 C42 34 36 44 34 52 C32 48 31 43 32 40 Z",
					fill: "url(#sb-highlight)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 11
				}, this),
				[
					[35, 48],
					[48, 44],
					[62, 48],
					[32, 60],
					[45, 58],
					[58, 60],
					[70, 58],
					[38, 72],
					[50, 72],
					[62, 70],
					[44, 82],
					[54, 82]
				].map(([x, y], idx) => /* @__PURE__ */ _jsxDEV("g", { children: [
					/* @__PURE__ */ _jsxDEV("ellipse", {
						cx: x + .5,
						cy: y + .8,
						rx: "2",
						ry: "3",
						fill: "#3b000b",
						opacity: "0.6",
						transform: `rotate(15 ${x} ${y})`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ _jsxDEV("ellipse", {
						cx: x,
						cy: y,
						rx: "1.8",
						ry: "2.7",
						fill: "#fef08a",
						stroke: "#ca8a04",
						strokeWidth: "0.5",
						transform: `rotate(15 ${x} ${y})`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ _jsxDEV("circle", {
						cx: x - .5,
						cy: y - .8,
						r: "0.6",
						fill: "#ffffff"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 15
					}, this)
				] }, idx, true, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 13
				}, this)),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 30 C44 18 30 18 32 26 C35 30 46 32 50 30 Z",
					fill: "url(#sb-leaf)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 30 C56 18 70 18 68 26 C65 30 54 32 50 30 Z",
					fill: "url(#sb-leaf)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 30 C50 14 47 12 50 12 C53 12 50 20 50 30 Z",
					fill: "#15803d",
					stroke: "#86efac",
					strokeWidth: "0.8"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 9
		}, this);
		case "lemon": return /* @__PURE__ */ _jsxDEV("svg", {
			width,
			height,
			viewBox: "0 0 100 100",
			className: `filter drop-shadow-md transition-transform duration-300 ${className} ${isWinning ? "animate-pulse scale-105" : ""}`,
			children: [
				/* @__PURE__ */ _jsxDEV("defs", { children: [
					/* @__PURE__ */ _jsxDEV("radialGradient", {
						id: "lemon-body",
						cx: "35%",
						cy: "30%",
						r: "65%",
						children: [
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "0%",
								stopColor: "#fffbeb"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "25%",
								stopColor: "#fef08a"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 95,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "65%",
								stopColor: "#eab308"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "90%",
								stopColor: "#ca8a04"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "100%",
								stopColor: "#713f12"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "lemon-gloss",
						x1: "0%",
						y1: "0%",
						x2: "0%",
						y2: "100%",
						children: [/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#ffffff",
							stopOpacity: "0.8"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#ffffff",
							stopOpacity: "0"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "lemon-leaf",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "100%",
						children: [/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#4ade80"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#166534"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("ellipse", {
					cx: "50",
					cy: "88",
					rx: "34",
					ry: "8",
					fill: "#000000",
					opacity: "0.35"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M18 50 C18 47 22 45 28 40 C36 32 46 28 58 30 C72 32 82 40 85 49 C87 54 84 58 76 65 C68 72 54 75 42 73 C30 70 20 62 18 50 Z",
					fill: "url(#lemon-body)",
					stroke: "#facc15",
					strokeWidth: "1.5",
					transform: "rotate(-15 50 50)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M36 36 C44 32 54 32 64 36 C60 40 44 40 36 36 Z",
					fill: "url(#lemon-gloss)",
					transform: "rotate(-15 50 50)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 119,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M58 26 C68 18 78 22 75 30 C68 32 62 30 58 26 Z",
					fill: "url(#lemon-leaf)",
					stroke: "#bbf7d0",
					strokeWidth: "0.8"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 125,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("circle", {
					cx: "58",
					cy: "27",
					r: "2",
					fill: "#854d0e"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 131,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 9
		}, this);
		case "watermelon": return /* @__PURE__ */ _jsxDEV("svg", {
			width,
			height,
			viewBox: "0 0 100 100",
			className: `filter drop-shadow-md transition-transform duration-300 ${className} ${isWinning ? "animate-pulse scale-105" : ""}`,
			children: [
				/* @__PURE__ */ _jsxDEV("defs", { children: [
					/* @__PURE__ */ _jsxDEV("radialGradient", {
						id: "wm-flesh",
						cx: "45%",
						cy: "35%",
						r: "65%",
						children: [
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "0%",
								stopColor: "#ff4d6d"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "45%",
								stopColor: "#e11d48"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "85%",
								stopColor: "#be123c"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "100%",
								stopColor: "#881337"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 146,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "wm-rind",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "0%",
						children: [
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "0%",
								stopColor: "#14532d"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 153,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "50%",
								stopColor: "#22c55e"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 154,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "100%",
								stopColor: "#14532d"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "wm-gloss",
						x1: "0%",
						y1: "0%",
						x2: "0%",
						y2: "100%",
						children: [/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#ffffff",
							stopOpacity: "0.6"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 158,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#ffffff",
							stopOpacity: "0"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 159,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 157,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 145,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("ellipse", {
					cx: "50",
					cy: "90",
					rx: "36",
					ry: "7",
					fill: "#000000",
					opacity: "0.35"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 162,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M15 42 C20 78 44 86 85 84 C85 84 82 89 50 89 C18 89 12 45 15 42 Z",
					fill: "url(#wm-rind)",
					stroke: "#15803d",
					strokeWidth: "1.5"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M17 44 C22 75 44 83 82 81 C82 81 78 84 50 84 C22 84 16 48 17 44 Z",
					fill: "#dcfce7"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 171,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M18 42 L50 20 L82 80 C50 84 25 74 18 42 Z",
					fill: "url(#wm-flesh)",
					stroke: "#fb7185",
					strokeWidth: "1"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 176,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M48 25 L30 45 C34 40 46 30 52 28 Z",
					fill: "url(#wm-gloss)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 183,
					columnNumber: 11
				}, this),
				[
					[40, 46],
					[56, 48],
					[34, 58],
					[48, 59],
					[62, 57],
					[42, 69],
					[56, 70]
				].map(([x, y], idx) => /* @__PURE__ */ _jsxDEV("g", { children: [/* @__PURE__ */ _jsxDEV("ellipse", {
					cx: x,
					cy: y,
					rx: "2",
					ry: "3.5",
					fill: "#18181b",
					transform: `rotate(-15 ${x} ${y})`
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 191,
					columnNumber: 15
				}, this), /* @__PURE__ */ _jsxDEV("circle", {
					cx: x - .7,
					cy: y - 1,
					r: "0.7",
					fill: "#ffffff"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 192,
					columnNumber: 15
				}, this)] }, idx, true, {
					fileName: _jsxFileName,
					lineNumber: 190,
					columnNumber: 13
				}, this))
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 137,
			columnNumber: 9
		}, this);
		case "grapes": return /* @__PURE__ */ _jsxDEV("svg", {
			width,
			height,
			viewBox: "0 0 100 100",
			className: `filter drop-shadow-md transition-transform duration-300 ${className} ${isWinning ? "animate-pulse scale-105" : ""}`,
			children: [
				/* @__PURE__ */ _jsxDEV("defs", { children: [/* @__PURE__ */ _jsxDEV("radialGradient", {
					id: "grape-sphere",
					cx: "30%",
					cy: "30%",
					r: "70%",
					children: [
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#e9d5ff"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 210,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "25%",
							stopColor: "#c084fc"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 211,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "65%",
							stopColor: "#9333ea"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 212,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "90%",
							stopColor: "#581c87"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 213,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#3b0764"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 214,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 209,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV("linearGradient", {
					id: "grape-stem",
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%",
					children: [/* @__PURE__ */ _jsxDEV("stop", {
						offset: "0%",
						stopColor: "#a16207"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 217,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("stop", {
						offset: "100%",
						stopColor: "#451a03"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 218,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 216,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 208,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("ellipse", {
					cx: "50",
					cy: "92",
					rx: "28",
					ry: "6",
					fill: "#000000",
					opacity: "0.35"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 221,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 25 C50 14 55 12 58 10 C54 16 52 22 50 25 Z",
					fill: "url(#grape-stem)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 223,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M48 22 C36 18 34 26 40 28 C45 28 48 24 48 22 Z",
					fill: "#22c55e",
					stroke: "#86efac",
					strokeWidth: "0.8"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 224,
					columnNumber: 11
				}, this),
				[
					(
					// Back/Top layer
					{
						cx: 40,
						cy: 35,
						r: 10
					}),
					{
						cx: 60,
						cy: 35,
						r: 10
					},
					{
						cx: 50,
						cy: 38,
						r: 10.5
					},
					(
					// Middle layer
					{
						cx: 32,
						cy: 49,
						r: 10
					}),
					{
						cx: 50,
						cy: 52,
						r: 11
					},
					{
						cx: 68,
						cy: 49,
						r: 10
					},
					(
					// Lower-mid layer
					{
						cx: 40,
						cy: 64,
						r: 10
					}),
					{
						cx: 60,
						cy: 64,
						r: 10
					},
					(
					// Bottom tips
					{
						cx: 45,
						cy: 76,
						r: 9
					}),
					{
						cx: 55,
						cy: 77,
						r: 8.5
					},
					{
						cx: 50,
						cy: 85,
						r: 7.5
					}
				].map((grape, i) => /* @__PURE__ */ _jsxDEV("g", { children: [/* @__PURE__ */ _jsxDEV("circle", {
					cx: grape.cx,
					cy: grape.cy,
					r: grape.r,
					fill: "url(#grape-sphere)",
					stroke: "#d8b4fe",
					strokeWidth: "0.6"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 244,
					columnNumber: 15
				}, this), /* @__PURE__ */ _jsxDEV("circle", {
					cx: grape.cx - grape.r * .35,
					cy: grape.cy - grape.r * .35,
					r: grape.r * .28,
					fill: "#ffffff",
					opacity: "0.75"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 245,
					columnNumber: 15
				}, this)] }, i, true, {
					fileName: _jsxFileName,
					lineNumber: 243,
					columnNumber: 13
				}, this))
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 200,
			columnNumber: 9
		}, this);
		case "orange": return /* @__PURE__ */ _jsxDEV("svg", {
			width,
			height,
			viewBox: "0 0 100 100",
			className: `filter drop-shadow-md transition-transform duration-300 ${className} ${isWinning ? "animate-pulse scale-105" : ""}`,
			children: [
				/* @__PURE__ */ _jsxDEV("defs", { children: [/* @__PURE__ */ _jsxDEV("radialGradient", {
					id: "orange-body",
					cx: "35%",
					cy: "30%",
					r: "65%",
					children: [
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#ffedd5"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 263,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "25%",
							stopColor: "#fb923c"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 264,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "65%",
							stopColor: "#ea580c"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 265,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "90%",
							stopColor: "#c2410c"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 266,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#7c2d12"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 267,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 262,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV("linearGradient", {
					id: "orange-gloss",
					x1: "0%",
					y1: "0%",
					x2: "0%",
					y2: "100%",
					children: [/* @__PURE__ */ _jsxDEV("stop", {
						offset: "0%",
						stopColor: "#ffffff",
						stopOpacity: "0.8"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 270,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("stop", {
						offset: "100%",
						stopColor: "#ffffff",
						stopOpacity: "0"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 271,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 269,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 261,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("ellipse", {
					cx: "50",
					cy: "88",
					rx: "32",
					ry: "7",
					fill: "#000000",
					opacity: "0.35"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 274,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("circle", {
					cx: "50",
					cy: "54",
					r: "33",
					fill: "url(#orange-body)",
					stroke: "#fed7aa",
					strokeWidth: "1.5"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 276,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M32 40 C40 30 54 30 64 36 C55 42 40 44 32 40 Z",
					fill: "url(#orange-gloss)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 278,
					columnNumber: 11
				}, this),
				[
					[35, 52],
					[42, 62],
					[55, 68],
					[64, 58],
					[48, 48],
					[60, 44],
					[38, 70],
					[52, 76]
				].map(([x, y], idx) => /* @__PURE__ */ _jsxDEV("circle", {
					cx: x,
					cy: y,
					r: "0.9",
					fill: "#9a3412",
					opacity: "0.45"
				}, idx, false, {
					fileName: _jsxFileName,
					lineNumber: 286,
					columnNumber: 13
				}, this)),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 24 C50 16 52 14 55 12 C53 16 52 20 50 24 Z",
					fill: "#15803d"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 289,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 22 C62 14 74 20 70 28 C62 28 54 26 50 22 Z",
					fill: "#22c55e",
					stroke: "#86efac",
					strokeWidth: "0.8"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 290,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("circle", {
					cx: "50",
					cy: "23",
					r: "2.5",
					fill: "#78350f"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 291,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 253,
			columnNumber: 9
		}, this);
		case "pineapple": return /* @__PURE__ */ _jsxDEV("svg", {
			width,
			height,
			viewBox: "0 0 100 100",
			className: `filter drop-shadow-md transition-transform duration-300 ${className} ${isWinning ? "animate-pulse scale-105" : ""}`,
			children: [
				/* @__PURE__ */ _jsxDEV("defs", { children: [/* @__PURE__ */ _jsxDEV("radialGradient", {
					id: "pa-body",
					cx: "40%",
					cy: "35%",
					r: "65%",
					children: [
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#fef08a"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 307,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "35%",
							stopColor: "#eab308"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 308,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "70%",
							stopColor: "#ca8a04"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 309,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#713f12"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 310,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 306,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV("linearGradient", {
					id: "pa-leaf",
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%",
					children: [
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#4ade80"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 313,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "60%",
							stopColor: "#16a34a"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 314,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#14532d"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 315,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 312,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 305,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("ellipse", {
					cx: "50",
					cy: "90",
					rx: "26",
					ry: "6",
					fill: "#000000",
					opacity: "0.35"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 318,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 36 C42 16 28 12 30 22 C34 26 44 34 50 36 Z",
					fill: "url(#pa-leaf)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 320,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 36 C58 16 72 12 70 22 C66 26 56 34 50 36 Z",
					fill: "url(#pa-leaf)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 321,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 36 C50 8 45 6 48 6 C52 6 52 18 50 36 Z",
					fill: "#22c55e",
					stroke: "#bbf7d0",
					strokeWidth: "0.8"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 322,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 36 C46 20 38 18 42 26 C45 30 48 34 50 36 Z",
					fill: "url(#pa-leaf)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 323,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M50 36 C54 20 62 18 58 26 C55 30 52 34 50 36 Z",
					fill: "url(#pa-leaf)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 324,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M30 46 C30 38 38 34 50 34 C62 34 70 38 70 46 C72 62 68 84 50 86 C32 84 28 62 30 46 Z",
					fill: "url(#pa-body)",
					stroke: "#facc15",
					strokeWidth: "1.5"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 326,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("path", {
					d: "M36 44 L64 74 M46 38 L68 62 M32 58 L58 84 M64 44 L36 74 M54 38 L32 62 M68 58 L42 84",
					stroke: "#854d0e",
					strokeWidth: "1.4",
					opacity: "0.6"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 333,
					columnNumber: 11
				}, this),
				[
					[50, 48],
					[42, 56],
					[58, 56],
					[50, 65],
					[42, 73],
					[58, 73]
				].map(([x, y], idx) => /* @__PURE__ */ _jsxDEV("circle", {
					cx: x,
					cy: y,
					r: "2",
					fill: "#fef08a",
					stroke: "#a16207",
					strokeWidth: "0.6"
				}, idx, false, {
					fileName: _jsxFileName,
					lineNumber: 343,
					columnNumber: 13
				}, this))
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 297,
			columnNumber: 9
		}, this);
		case "kiwi": return /* @__PURE__ */ _jsxDEV("svg", {
			width,
			height,
			viewBox: "0 0 100 100",
			className: `filter drop-shadow-md transition-transform duration-300 ${className} ${isWinning ? "animate-pulse scale-105" : ""}`,
			children: [
				/* @__PURE__ */ _jsxDEV("defs", { children: [/* @__PURE__ */ _jsxDEV("radialGradient", {
					id: "kiwi-flesh",
					cx: "50%",
					cy: "50%",
					r: "50%",
					children: [
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#fef9c3"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 360,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "20%",
							stopColor: "#bef264"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 361,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "65%",
							stopColor: "#84cc16"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 362,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "90%",
							stopColor: "#65a30d"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 363,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#3f6212"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 364,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 359,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV("linearGradient", {
					id: "kiwi-rind",
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%",
					children: [/* @__PURE__ */ _jsxDEV("stop", {
						offset: "0%",
						stopColor: "#78350f"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 367,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("stop", {
						offset: "100%",
						stopColor: "#451a03"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 368,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 366,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 358,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("ellipse", {
					cx: "50",
					cy: "88",
					rx: "32",
					ry: "7",
					fill: "#000000",
					opacity: "0.35"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 371,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("circle", {
					cx: "50",
					cy: "50",
					r: "36",
					fill: "url(#kiwi-rind)",
					stroke: "#a16207",
					strokeWidth: "1.5"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 373,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("circle", {
					cx: "50",
					cy: "50",
					r: "33",
					fill: "url(#kiwi-flesh)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 375,
					columnNumber: 11
				}, this),
				[
					0,
					30,
					60,
					90,
					120,
					150,
					180,
					210,
					240,
					270,
					300,
					330
				].map((deg, i) => /* @__PURE__ */ _jsxDEV("line", {
					x1: "50",
					y1: "50",
					x2: "50",
					y2: "24",
					stroke: "#ecfccb",
					strokeWidth: "1",
					strokeOpacity: "0.75",
					transform: `rotate(${deg} 50 50)`
				}, i, false, {
					fileName: _jsxFileName,
					lineNumber: 378,
					columnNumber: 13
				}, this)),
				/* @__PURE__ */ _jsxDEV("ellipse", {
					cx: "50",
					cy: "50",
					rx: "9",
					ry: "7",
					fill: "#fefce8",
					stroke: "#fef08a",
					strokeWidth: "0.8"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 391,
					columnNumber: 11
				}, this),
				[
					15,
					45,
					75,
					105,
					135,
					165,
					195,
					225,
					255,
					285,
					315,
					345
				].map((deg, i) => /* @__PURE__ */ _jsxDEV("g", {
					transform: `rotate(${deg} 50 50)`,
					children: [/* @__PURE__ */ _jsxDEV("ellipse", {
						cx: "50",
						cy: "34",
						rx: "1.4",
						ry: "2.2",
						fill: "#18181b"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 395,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("circle", {
						cx: "49.5",
						cy: "33.5",
						r: "0.4",
						fill: "#ffffff"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 396,
						columnNumber: 15
					}, this)]
				}, i, true, {
					fileName: _jsxFileName,
					lineNumber: 394,
					columnNumber: 13
				}, this))
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 350,
			columnNumber: 9
		}, this);
		case "wild_star": return /* @__PURE__ */ _jsxDEV("svg", {
			width,
			height,
			viewBox: "0 0 100 100",
			className: `filter drop-shadow-lg transition-transform duration-300 ${className} ${isWinning ? "animate-bounce scale-110" : ""}`,
			children: [
				/* @__PURE__ */ _jsxDEV("defs", { children: [
					/* @__PURE__ */ _jsxDEV("radialGradient", {
						id: "star-glow",
						cx: "50%",
						cy: "50%",
						r: "50%",
						children: [
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "0%",
								stopColor: "#fef08a",
								stopOpacity: "0.9"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 414,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "60%",
								stopColor: "#f59e0b",
								stopOpacity: "0.4"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 415,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "100%",
								stopColor: "#ca8a04",
								stopOpacity: "0"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 416,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 413,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "star-facet-light",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "100%",
						children: [
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "0%",
								stopColor: "#ffffff"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 419,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "50%",
								stopColor: "#fef08a"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 420,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "100%",
								stopColor: "#f59e0b"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 421,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 418,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "star-facet-dark",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "100%",
						children: [
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "0%",
								stopColor: "#d97706"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 424,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "70%",
								stopColor: "#92400e"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 425,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "100%",
								stopColor: "#451a03"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 426,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 423,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 412,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("circle", {
					cx: "50",
					cy: "50",
					r: "44",
					fill: "url(#star-glow)",
					className: "animate-pulse"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 430,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("ellipse", {
					cx: "50",
					cy: "92",
					rx: "30",
					ry: "6",
					fill: "#000000",
					opacity: "0.4"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 432,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("g", {
					transform: "translate(0, -2)",
					children: [
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "50,12 50,50 37,42",
							fill: "url(#star-facet-dark)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 436,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "50,12 63,42 50,50",
							fill: "url(#star-facet-light)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 437,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "88,38 50,50 63,42",
							fill: "url(#star-facet-dark)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 439,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "88,38 68,60 50,50",
							fill: "url(#star-facet-light)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 440,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "74,84 50,50 68,60",
							fill: "url(#star-facet-dark)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 442,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "74,84 50,68 50,50",
							fill: "url(#star-facet-light)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 443,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "26,84 50,50 50,68",
							fill: "url(#star-facet-dark)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 445,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "26,84 32,60 50,50",
							fill: "url(#star-facet-light)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 446,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "12,38 50,50 32,60",
							fill: "url(#star-facet-dark)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 448,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "12,38 37,42 50,50",
							fill: "url(#star-facet-light)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 449,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 434,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("circle", {
					cx: "50",
					cy: "48",
					r: "6",
					fill: "#ffffff",
					stroke: "#eab308",
					strokeWidth: "1.5"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 452,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("polygon", {
					points: "50,44 52,48 56,50 52,52 50,56 48,52 44,50 48,48",
					fill: "#ca8a04"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 453,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("circle", {
					cx: "20",
					cy: "22",
					r: "2",
					fill: "#ffffff",
					className: "animate-ping"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 455,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("circle", {
					cx: "82",
					cy: "74",
					r: "1.5",
					fill: "#fef08a",
					className: "animate-ping"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 456,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 404,
			columnNumber: 9
		}, this);
		case "scatter_gem": return /* @__PURE__ */ _jsxDEV("svg", {
			width,
			height,
			viewBox: "0 0 100 100",
			className: `filter drop-shadow-xl transition-transform duration-300 ${className} ${isWinning ? "animate-bounce scale-110" : ""}`,
			children: [
				/* @__PURE__ */ _jsxDEV("defs", { children: [
					/* @__PURE__ */ _jsxDEV("radialGradient", {
						id: "gem-glow",
						cx: "50%",
						cy: "50%",
						r: "50%",
						children: [
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "0%",
								stopColor: "#38bdf8",
								stopOpacity: "0.9"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 472,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "60%",
								stopColor: "#0284c7",
								stopOpacity: "0.4"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 473,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "100%",
								stopColor: "#0369a1",
								stopOpacity: "0"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 474,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 471,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "gem-facet-top",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "100%",
						children: [/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#e0f2fe"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 477,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#7dd3fc"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 478,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 476,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "gem-facet-mid",
						x1: "0%",
						y1: "0%",
						x2: "0%",
						y2: "100%",
						children: [/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#38bdf8"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 481,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#0284c7"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 482,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 480,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "gem-facet-bot",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "100%",
						children: [/* @__PURE__ */ _jsxDEV("stop", {
							offset: "0%",
							stopColor: "#0369a1"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 485,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("stop", {
							offset: "100%",
							stopColor: "#082f49"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 486,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 484,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 470,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("circle", {
					cx: "50",
					cy: "50",
					r: "44",
					fill: "url(#gem-glow)",
					className: "animate-pulse"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 490,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("ellipse", {
					cx: "50",
					cy: "92",
					rx: "28",
					ry: "6",
					fill: "#000000",
					opacity: "0.4"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 492,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("g", {
					transform: "translate(0, 2)",
					children: [
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "32,24 68,24 58,40 42,40",
							fill: "url(#gem-facet-top)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 496,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "16,38 32,24 42,40",
							fill: "#bae6fd"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 498,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "84,38 68,24 58,40",
							fill: "#7dd3fc"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 499,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "16,38 42,40 50,54 28,52",
							fill: "url(#gem-facet-mid)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 501,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "84,38 58,40 50,54 72,52",
							fill: "#0284c7"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 502,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "42,40 58,40 50,54",
							fill: "#38bdf8"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 503,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "16,38 28,52 50,86",
							fill: "url(#gem-facet-bot)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 505,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "28,52 50,54 50,86",
							fill: "#0369a1"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 506,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "50,54 72,52 50,86",
							fill: "#0284c7"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 507,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("polygon", {
							points: "72,52 84,38 50,86",
							fill: "url(#gem-facet-bot)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 508,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 494,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("polygon", {
					points: "32,24 35,28 38,24 35,20",
					fill: "#ffffff"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 511,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("circle", {
					cx: "35",
					cy: "24",
					r: "2.5",
					fill: "#ffffff",
					className: "animate-ping"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 512,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 462,
			columnNumber: 9
		}, this);
		default: return null;
	}
};

//# sourceMappingURL=data:application/json;base64,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QUFLO01BQVc7Ozs7O01BRXBELHdCQUFDLFdBQUQ7T0FBUyxRQUFPO09BQW9CLE1BQUs7TUFBdUI7Ozs7O01BQ2hFLHdCQUFDLFdBQUQ7T0FBUyxRQUFPO09BQW9CLE1BQUs7TUFBVzs7Ozs7TUFDcEQsd0JBQUMsV0FBRDtPQUFTLFFBQU87T0FBb0IsTUFBSztNQUFXOzs7OztNQUNwRCx3QkFBQyxXQUFEO09BQVMsUUFBTztPQUFvQixNQUFLO01BQXVCOzs7OztLQUMvRDs7Ozs7O0lBRUgsd0JBQUMsV0FBRDtLQUFTLFFBQU87S0FBMEIsTUFBSztJQUFXOzs7OztJQUMxRCx3QkFBQyxVQUFEO0tBQVEsSUFBRztLQUFLLElBQUc7S0FBSyxHQUFFO0tBQU0sTUFBSztLQUFVLFdBQVU7SUFBZ0I7Ozs7O0dBQ3RFOzs7Ozs7RUFHVCxTQUNFLE9BQU87Q0FDWDtBQUNGIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkZydWl0U3ltYm9sM0QudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTeW1ib2xJZCB9IGZyb20gJy4uL3R5cGVzL2dhbWUnO1xuXG5pbnRlcmZhY2UgRnJ1aXRTeW1ib2wzRFByb3BzIHtcbiAgaWQ6IFN5bWJvbElkO1xuICBzaXplPzogbnVtYmVyOyAvLyBTaXplIGluIHBpeGVscywgZGVmYXVsdCA1NlxuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGlzV2lubmluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBGcnVpdFN5bWJvbDNEOiBSZWFjdC5GQzxGcnVpdFN5bWJvbDNEUHJvcHM+ID0gKHtcbiAgaWQsXG4gIHNpemUgPSA1NixcbiAgY2xhc3NOYW1lID0gJycsXG4gIGlzV2lubmluZyA9IGZhbHNlXG59KSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gc2l6ZTtcbiAgY29uc3QgaGVpZ2h0ID0gc2l6ZTtcblxuICBzd2l0Y2ggKGlkKSB7XG4gICAgY2FzZSAnc3RyYXdiZXJyeSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmlsdGVyIGRyb3Atc2hhZG93LW1kIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCAke2NsYXNzTmFtZX0gJHtcbiAgICAgICAgICAgIGlzV2lubmluZyA/ICdhbmltYXRlLXB1bHNlIHNjYWxlLTEwNScgOiAnJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9XCJzYi1ib2R5XCIgY3g9XCI0MCVcIiBjeT1cIjM1JVwiIHI9XCI2NSVcIj5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjZmY1Mjc3XCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiNDUlXCIgc3RvcENvbG9yPVwiI2U2MDAzOVwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjg1JVwiIHN0b3BDb2xvcj1cIiM5OTAwMjJcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiIzU5MDAxNFwiIC8+XG4gICAgICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxuICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwic2ItaGlnaGxpZ2h0XCIgeDE9XCIwJVwiIHkxPVwiMCVcIiB4Mj1cIjUwJVwiIHkyPVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiNmZmZmZmZcIiBzdG9wT3BhY2l0eT1cIjAuNzVcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiI2ZmODA5YlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwic2ItbGVhZlwiIHgxPVwiMCVcIiB5MT1cIjAlXCIgeDI9XCIxMDAlXCIgeTI9XCIxMDAlXCI+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiIzg2ZWZhY1wiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjYwJVwiIHN0b3BDb2xvcj1cIiMyMmM1NWVcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiIzE0NTMyZFwiIC8+XG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICB7LyogU2hhZG93ICovfVxuICAgICAgICAgIDxlbGxpcHNlIGN4PVwiNTBcIiBjeT1cIjkyXCIgcng9XCIzMFwiIHJ5PVwiN1wiIGZpbGw9XCIjMDAwMDAwXCIgb3BhY2l0eT1cIjAuNFwiIC8+XG4gICAgICAgICAgey8qIFN0cmF3YmVycnkgM0QgQm9keSAqL31cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk01MCA4OCBDMjYgODggMTggNjQgMjIgNDQgQzI1IDMxIDM3IDI2IDUwIDMwIEM2MyAyNiA3NSAzMSA3OCA0NCBDODIgNjQgNzQgODggNTAgODggWlwiXG4gICAgICAgICAgICBmaWxsPVwidXJsKCNzYi1ib2R5KVwiXG4gICAgICAgICAgICBzdHJva2U9XCIjZmYzMzY2XCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiBHbG9zcyBoaWdobGlnaHQgYXJjICovfVxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTMyIDQwIEMzNCAzMiA0NCAyOCA1MCAzMSBDNDIgMzQgMzYgNDQgMzQgNTIgQzMyIDQ4IDMxIDQzIDMyIDQwIFpcIlxuICAgICAgICAgICAgZmlsbD1cInVybCgjc2ItaGlnaGxpZ2h0KVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogR29sZGVuIDNEIFNlZWRzIHdpdGggc2hhZG93ICovfVxuICAgICAgICAgIHtbXG4gICAgICAgICAgICBbMzUsIDQ4XSwgWzQ4LCA0NF0sIFs2MiwgNDhdLFxuICAgICAgICAgICAgWzMyLCA2MF0sIFs0NSwgNThdLCBbNTgsIDYwXSwgWzcwLCA1OF0sXG4gICAgICAgICAgICBbMzgsIDcyXSwgWzUwLCA3Ml0sIFs2MiwgNzBdLFxuICAgICAgICAgICAgWzQ0LCA4Ml0sIFs1NCwgODJdXG4gICAgICAgICAgXS5tYXAoKFt4LCB5XSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8ZyBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgIDxlbGxpcHNlIGN4PXt4ICsgMC41fSBjeT17eSArIDAuOH0gcng9XCIyXCIgcnk9XCIzXCIgZmlsbD1cIiMzYjAwMGJcIiBvcGFjaXR5PVwiMC42XCIgdHJhbnNmb3JtPXtgcm90YXRlKDE1ICR7eH0gJHt5fSlgfSAvPlxuICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD17eH0gY3k9e3l9IHJ4PVwiMS44XCIgcnk9XCIyLjdcIiBmaWxsPVwiI2ZlZjA4YVwiIHN0cm9rZT1cIiNjYThhMDRcIiBzdHJva2VXaWR0aD1cIjAuNVwiIHRyYW5zZm9ybT17YHJvdGF0ZSgxNSAke3h9ICR7eX0pYH0gLz5cbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD17eCAtIDAuNX0gY3k9e3kgLSAwLjh9IHI9XCIwLjZcIiBmaWxsPVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgey8qIENhbHl4IExlYXZlcyAqL31cbiAgICAgICAgICA8cGF0aCBkPVwiTTUwIDMwIEM0NCAxOCAzMCAxOCAzMiAyNiBDMzUgMzAgNDYgMzIgNTAgMzAgWlwiIGZpbGw9XCJ1cmwoI3NiLWxlYWYpXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUwIDMwIEM1NiAxOCA3MCAxOCA2OCAyNiBDNjUgMzAgNTQgMzIgNTAgMzAgWlwiIGZpbGw9XCJ1cmwoI3NiLWxlYWYpXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUwIDMwIEM1MCAxNCA0NyAxMiA1MCAxMiBDNTMgMTIgNTAgMjAgNTAgMzAgWlwiIGZpbGw9XCIjMTU4MDNkXCIgc3Ryb2tlPVwiIzg2ZWZhY1wiIHN0cm9rZVdpZHRoPVwiMC44XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICApO1xuXG4gICAgY2FzZSAnbGVtb24nOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YGZpbHRlciBkcm9wLXNoYWRvdy1tZCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgJHtjbGFzc05hbWV9ICR7XG4gICAgICAgICAgICBpc1dpbm5pbmcgPyAnYW5pbWF0ZS1wdWxzZSBzY2FsZS0xMDUnIDogJydcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgPHJhZGlhbEdyYWRpZW50IGlkPVwibGVtb24tYm9keVwiIGN4PVwiMzUlXCIgY3k9XCIzMCVcIiByPVwiNjUlXCI+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiI2ZmZmJlYlwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjI1JVwiIHN0b3BDb2xvcj1cIiNmZWYwOGFcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI2NSVcIiBzdG9wQ29sb3I9XCIjZWFiMzA4XCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiOTAlXCIgc3RvcENvbG9yPVwiI2NhOGEwNFwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjNzEzZjEyXCIgLz5cbiAgICAgICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XG4gICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsZW1vbi1nbG9zc1wiIHgxPVwiMCVcIiB5MT1cIjAlXCIgeDI9XCIwJVwiIHkyPVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiNmZmZmZmZcIiBzdG9wT3BhY2l0eT1cIjAuOFwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjZmZmZmZmXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsZW1vbi1sZWFmXCIgeDE9XCIwJVwiIHkxPVwiMCVcIiB4Mj1cIjEwMCVcIiB5Mj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjNGFkZTgwXCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiMxNjY1MzRcIiAvPlxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgPGVsbGlwc2UgY3g9XCI1MFwiIGN5PVwiODhcIiByeD1cIjM0XCIgcnk9XCI4XCIgZmlsbD1cIiMwMDAwMDBcIiBvcGFjaXR5PVwiMC4zNVwiIC8+XG4gICAgICAgICAgey8qIE1haW4gM0QgT3ZhbCBCb2R5IHdpdGggQ2l0cnVzIE5pcHBsZSBUaXBzICovfVxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE4IDUwIEMxOCA0NyAyMiA0NSAyOCA0MCBDMzYgMzIgNDYgMjggNTggMzAgQzcyIDMyIDgyIDQwIDg1IDQ5IEM4NyA1NCA4NCA1OCA3NiA2NSBDNjggNzIgNTQgNzUgNDIgNzMgQzMwIDcwIDIwIDYyIDE4IDUwIFpcIlxuICAgICAgICAgICAgZmlsbD1cInVybCgjbGVtb24tYm9keSlcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiI2ZhY2MxNVwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoLTE1IDUwIDUwKVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogR2xvc3MgU3BlY3VsYXIgQXJjICovfVxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTM2IDM2IEM0NCAzMiA1NCAzMiA2NCAzNiBDNjAgNDAgNDQgNDAgMzYgMzYgWlwiXG4gICAgICAgICAgICBmaWxsPVwidXJsKCNsZW1vbi1nbG9zcylcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKC0xNSA1MCA1MClcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIExlYWYgb24gdG9wICovfVxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTU4IDI2IEM2OCAxOCA3OCAyMiA3NSAzMCBDNjggMzIgNjIgMzAgNTggMjYgWlwiXG4gICAgICAgICAgICBmaWxsPVwidXJsKCNsZW1vbi1sZWFmKVwiXG4gICAgICAgICAgICBzdHJva2U9XCIjYmJmN2QwXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMC44XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI1OFwiIGN5PVwiMjdcIiByPVwiMlwiIGZpbGw9XCIjODU0ZDBlXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICApO1xuXG4gICAgY2FzZSAnd2F0ZXJtZWxvbic6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmlsdGVyIGRyb3Atc2hhZG93LW1kIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCAke2NsYXNzTmFtZX0gJHtcbiAgICAgICAgICAgIGlzV2lubmluZyA/ICdhbmltYXRlLXB1bHNlIHNjYWxlLTEwNScgOiAnJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9XCJ3bS1mbGVzaFwiIGN4PVwiNDUlXCIgY3k9XCIzNSVcIiByPVwiNjUlXCI+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiI2ZmNGQ2ZFwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjQ1JVwiIHN0b3BDb2xvcj1cIiNlMTFkNDhcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI4NSVcIiBzdG9wQ29sb3I9XCIjYmUxMjNjXCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiM4ODEzMzdcIiAvPlxuICAgICAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cIndtLXJpbmRcIiB4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMTAwJVwiIHkyPVwiMCVcIj5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjMTQ1MzJkXCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcENvbG9yPVwiIzIyYzU1ZVwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjMTQ1MzJkXCIgLz5cbiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJ3bS1nbG9zc1wiIHgxPVwiMCVcIiB5MT1cIjAlXCIgeDI9XCIwJVwiIHkyPVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiNmZmZmZmZcIiBzdG9wT3BhY2l0eT1cIjAuNlwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjZmZmZmZmXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgIDxlbGxpcHNlIGN4PVwiNTBcIiBjeT1cIjkwXCIgcng9XCIzNlwiIHJ5PVwiN1wiIGZpbGw9XCIjMDAwMDAwXCIgb3BhY2l0eT1cIjAuMzVcIiAvPlxuICAgICAgICAgIHsvKiBPdXRlciBHcmVlbiBSaW5kICovfVxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE1IDQyIEMyMCA3OCA0NCA4NiA4NSA4NCBDODUgODQgODIgODkgNTAgODkgQzE4IDg5IDEyIDQ1IDE1IDQyIFpcIlxuICAgICAgICAgICAgZmlsbD1cInVybCgjd20tcmluZClcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiIzE1ODAzZFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogTGlnaHQgTWludCBJbm5lciBSaW5kICovfVxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE3IDQ0IEMyMiA3NSA0NCA4MyA4MiA4MSBDODIgODEgNzggODQgNTAgODQgQzIyIDg0IDE2IDQ4IDE3IDQ0IFpcIlxuICAgICAgICAgICAgZmlsbD1cIiNkY2ZjZTdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIFRyaWFuZ3VsYXIgSnVpY3kgRmxlc2ggKi99XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMTggNDIgTDUwIDIwIEw4MiA4MCBDNTAgODQgMjUgNzQgMTggNDIgWlwiXG4gICAgICAgICAgICBmaWxsPVwidXJsKCN3bS1mbGVzaClcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiI2ZiNzE4NVwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIEdsb3NzIGhpZ2hsaWdodCAqL31cbiAgICAgICAgICA8cGF0aCBkPVwiTTQ4IDI1IEwzMCA0NSBDMzQgNDAgNDYgMzAgNTIgMjggWlwiIGZpbGw9XCJ1cmwoI3dtLWdsb3NzKVwiIC8+XG4gICAgICAgICAgey8qIDNEIEJsYWNrIFdhdGVybWVsb24gU2VlZHMgKi99XG4gICAgICAgICAge1tcbiAgICAgICAgICAgIFs0MCwgNDZdLCBbNTYsIDQ4XSxcbiAgICAgICAgICAgIFszNCwgNThdLCBbNDgsIDU5XSwgWzYyLCA1N10sXG4gICAgICAgICAgICBbNDIsIDY5XSwgWzU2LCA3MF1cbiAgICAgICAgICBdLm1hcCgoW3gsIHldLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxnIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9e3h9IGN5PXt5fSByeD1cIjJcIiByeT1cIjMuNVwiIGZpbGw9XCIjMTgxODFiXCIgdHJhbnNmb3JtPXtgcm90YXRlKC0xNSAke3h9ICR7eX0pYH0gLz5cbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD17eCAtIDAuN30gY3k9e3kgLSAxfSByPVwiMC43XCIgZmlsbD1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3N2Zz5cbiAgICAgICk7XG5cbiAgICBjYXNlICdncmFwZXMnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YGZpbHRlciBkcm9wLXNoYWRvdy1tZCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgJHtjbGFzc05hbWV9ICR7XG4gICAgICAgICAgICBpc1dpbm5pbmcgPyAnYW5pbWF0ZS1wdWxzZSBzY2FsZS0xMDUnIDogJydcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgPHJhZGlhbEdyYWRpZW50IGlkPVwiZ3JhcGUtc3BoZXJlXCIgY3g9XCIzMCVcIiBjeT1cIjMwJVwiIHI9XCI3MCVcIj5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjZTlkNWZmXCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMjUlXCIgc3RvcENvbG9yPVwiI2MwODRmY1wiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjY1JVwiIHN0b3BDb2xvcj1cIiM5MzMzZWFcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI5MCVcIiBzdG9wQ29sb3I9XCIjNTgxYzg3XCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiMzYjA3NjRcIiAvPlxuICAgICAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImdyYXBlLXN0ZW1cIiB4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMTAwJVwiIHkyPVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiNhMTYyMDdcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiIzQ1MWEwM1wiIC8+XG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjUwXCIgY3k9XCI5MlwiIHJ4PVwiMjhcIiByeT1cIjZcIiBmaWxsPVwiIzAwMDAwMFwiIG9wYWNpdHk9XCIwLjM1XCIgLz5cbiAgICAgICAgICB7LyogU3RlbSAmIExlYXZlcyAqL31cbiAgICAgICAgICA8cGF0aCBkPVwiTTUwIDI1IEM1MCAxNCA1NSAxMiA1OCAxMCBDNTQgMTYgNTIgMjIgNTAgMjUgWlwiIGZpbGw9XCJ1cmwoI2dyYXBlLXN0ZW0pXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTQ4IDIyIEMzNiAxOCAzNCAyNiA0MCAyOCBDNDUgMjggNDggMjQgNDggMjIgWlwiIGZpbGw9XCIjMjJjNTVlXCIgc3Ryb2tlPVwiIzg2ZWZhY1wiIHN0cm9rZVdpZHRoPVwiMC44XCIgLz5cbiAgICAgICAgICB7LyogQ2x1c3RlciBvZiAzRCBHbG9zc3kgR3JhcGVzICovfVxuICAgICAgICAgIHtbXG4gICAgICAgICAgICAvLyBCYWNrL1RvcCBsYXllclxuICAgICAgICAgICAgeyBjeDogNDAsIGN5OiAzNSwgcjogMTAgfSxcbiAgICAgICAgICAgIHsgY3g6IDYwLCBjeTogMzUsIHI6IDEwIH0sXG4gICAgICAgICAgICB7IGN4OiA1MCwgY3k6IDM4LCByOiAxMC41IH0sXG4gICAgICAgICAgICAvLyBNaWRkbGUgbGF5ZXJcbiAgICAgICAgICAgIHsgY3g6IDMyLCBjeTogNDksIHI6IDEwIH0sXG4gICAgICAgICAgICB7IGN4OiA1MCwgY3k6IDUyLCByOiAxMSB9LFxuICAgICAgICAgICAgeyBjeDogNjgsIGN5OiA0OSwgcjogMTAgfSxcbiAgICAgICAgICAgIC8vIExvd2VyLW1pZCBsYXllclxuICAgICAgICAgICAgeyBjeDogNDAsIGN5OiA2NCwgcjogMTAgfSxcbiAgICAgICAgICAgIHsgY3g6IDYwLCBjeTogNjQsIHI6IDEwIH0sXG4gICAgICAgICAgICAvLyBCb3R0b20gdGlwc1xuICAgICAgICAgICAgeyBjeDogNDUsIGN5OiA3NiwgcjogOSB9LFxuICAgICAgICAgICAgeyBjeDogNTUsIGN5OiA3NywgcjogOC41IH0sXG4gICAgICAgICAgICB7IGN4OiA1MCwgY3k6IDg1LCByOiA3LjUgfVxuICAgICAgICAgIF0ubWFwKChncmFwZSwgaSkgPT4gKFxuICAgICAgICAgICAgPGcga2V5PXtpfT5cbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD17Z3JhcGUuY3h9IGN5PXtncmFwZS5jeX0gcj17Z3JhcGUucn0gZmlsbD1cInVybCgjZ3JhcGUtc3BoZXJlKVwiIHN0cm9rZT1cIiNkOGI0ZmVcIiBzdHJva2VXaWR0aD1cIjAuNlwiIC8+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9e2dyYXBlLmN4IC0gZ3JhcGUuciAqIDAuMzV9IGN5PXtncmFwZS5jeSAtIGdyYXBlLnIgKiAwLjM1fSByPXtncmFwZS5yICogMC4yOH0gZmlsbD1cIiNmZmZmZmZcIiBvcGFjaXR5PVwiMC43NVwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc3ZnPlxuICAgICAgKTtcblxuICAgIGNhc2UgJ29yYW5nZSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmlsdGVyIGRyb3Atc2hhZG93LW1kIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCAke2NsYXNzTmFtZX0gJHtcbiAgICAgICAgICAgIGlzV2lubmluZyA/ICdhbmltYXRlLXB1bHNlIHNjYWxlLTEwNScgOiAnJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9XCJvcmFuZ2UtYm9keVwiIGN4PVwiMzUlXCIgY3k9XCIzMCVcIiByPVwiNjUlXCI+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiI2ZmZWRkNVwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjI1JVwiIHN0b3BDb2xvcj1cIiNmYjkyM2NcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI2NSVcIiBzdG9wQ29sb3I9XCIjZWE1ODBjXCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiOTAlXCIgc3RvcENvbG9yPVwiI2MyNDEwY1wiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjN2MyZDEyXCIgLz5cbiAgICAgICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XG4gICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJvcmFuZ2UtZ2xvc3NcIiB4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMCVcIiB5Mj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjZmZmZmZmXCIgc3RvcE9wYWNpdHk9XCIwLjhcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiI2ZmZmZmZlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjUwXCIgY3k9XCI4OFwiIHJ4PVwiMzJcIiByeT1cIjdcIiBmaWxsPVwiIzAwMDAwMFwiIG9wYWNpdHk9XCIwLjM1XCIgLz5cbiAgICAgICAgICB7LyogTWFpbiBHbG9zc3kgU3BoZXJlICovfVxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTRcIiByPVwiMzNcIiBmaWxsPVwidXJsKCNvcmFuZ2UtYm9keSlcIiBzdHJva2U9XCIjZmVkN2FhXCIgc3Ryb2tlV2lkdGg9XCIxLjVcIiAvPlxuICAgICAgICAgIHsvKiBHbG9zcyBzcGVjdWxhciBhcmMgKi99XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMzIgNDAgQzQwIDMwIDU0IDMwIDY0IDM2IEM1NSA0MiA0MCA0NCAzMiA0MCBaXCJcbiAgICAgICAgICAgIGZpbGw9XCJ1cmwoI29yYW5nZS1nbG9zcylcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIERpbXBsZWQgY2l0cnVzIHRleHR1cmUgZG90cyAqL31cbiAgICAgICAgICB7W1xuICAgICAgICAgICAgWzM1LCA1Ml0sIFs0MiwgNjJdLCBbNTUsIDY4XSwgWzY0LCA1OF0sIFs0OCwgNDhdLCBbNjAsIDQ0XSwgWzM4LCA3MF0sIFs1MiwgNzZdXG4gICAgICAgICAgXS5tYXAoKFt4LCB5XSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8Y2lyY2xlIGtleT17aWR4fSBjeD17eH0gY3k9e3l9IHI9XCIwLjlcIiBmaWxsPVwiIzlhMzQxMlwiIG9wYWNpdHk9XCIwLjQ1XCIgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7LyogR3JlZW4gU3RlbSAmIExlYXZlcyAqL31cbiAgICAgICAgICA8cGF0aCBkPVwiTTUwIDI0IEM1MCAxNiA1MiAxNCA1NSAxMiBDNTMgMTYgNTIgMjAgNTAgMjQgWlwiIGZpbGw9XCIjMTU4MDNkXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUwIDIyIEM2MiAxNCA3NCAyMCA3MCAyOCBDNjIgMjggNTQgMjYgNTAgMjIgWlwiIGZpbGw9XCIjMjJjNTVlXCIgc3Ryb2tlPVwiIzg2ZWZhY1wiIHN0cm9rZVdpZHRoPVwiMC44XCIgLz5cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjIzXCIgcj1cIjIuNVwiIGZpbGw9XCIjNzgzNTBmXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICApO1xuXG4gICAgY2FzZSAncGluZWFwcGxlJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2BmaWx0ZXIgZHJvcC1zaGFkb3ctbWQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwICR7Y2xhc3NOYW1lfSAke1xuICAgICAgICAgICAgaXNXaW5uaW5nID8gJ2FuaW1hdGUtcHVsc2Ugc2NhbGUtMTA1JyA6ICcnXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgIDxyYWRpYWxHcmFkaWVudCBpZD1cInBhLWJvZHlcIiBjeD1cIjQwJVwiIGN5PVwiMzUlXCIgcj1cIjY1JVwiPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiNmZWYwOGFcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIzNSVcIiBzdG9wQ29sb3I9XCIjZWFiMzA4XCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiNzAlXCIgc3RvcENvbG9yPVwiI2NhOGEwNFwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjNzEzZjEyXCIgLz5cbiAgICAgICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XG4gICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJwYS1sZWFmXCIgeDE9XCIwJVwiIHkxPVwiMCVcIiB4Mj1cIjEwMCVcIiB5Mj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjNGFkZTgwXCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiNjAlXCIgc3RvcENvbG9yPVwiIzE2YTM0YVwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjMTQ1MzJkXCIgLz5cbiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgIDxlbGxpcHNlIGN4PVwiNTBcIiBjeT1cIjkwXCIgcng9XCIyNlwiIHJ5PVwiNlwiIGZpbGw9XCIjMDAwMDAwXCIgb3BhY2l0eT1cIjAuMzVcIiAvPlxuICAgICAgICAgIHsvKiBTcGlreSBUcm9waWNhbCBDcm93biBMZWF2ZXMgKi99XG4gICAgICAgICAgPHBhdGggZD1cIk01MCAzNiBDNDIgMTYgMjggMTIgMzAgMjIgQzM0IDI2IDQ0IDM0IDUwIDM2IFpcIiBmaWxsPVwidXJsKCNwYS1sZWFmKVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk01MCAzNiBDNTggMTYgNzIgMTIgNzAgMjIgQzY2IDI2IDU2IDM0IDUwIDM2IFpcIiBmaWxsPVwidXJsKCNwYS1sZWFmKVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk01MCAzNiBDNTAgOCA0NSA2IDQ4IDYgQzUyIDYgNTIgMTggNTAgMzYgWlwiIGZpbGw9XCIjMjJjNTVlXCIgc3Ryb2tlPVwiI2JiZjdkMFwiIHN0cm9rZVdpZHRoPVwiMC44XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUwIDM2IEM0NiAyMCAzOCAxOCA0MiAyNiBDNDUgMzAgNDggMzQgNTAgMzYgWlwiIGZpbGw9XCJ1cmwoI3BhLWxlYWYpXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUwIDM2IEM1NCAyMCA2MiAxOCA1OCAyNiBDNTUgMzAgNTIgMzQgNTAgMzYgWlwiIGZpbGw9XCJ1cmwoI3BhLWxlYWYpXCIgLz5cbiAgICAgICAgICB7LyogR29sZGVuIERpYW1vbmQgQm9keSAqL31cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0zMCA0NiBDMzAgMzggMzggMzQgNTAgMzQgQzYyIDM0IDcwIDM4IDcwIDQ2IEM3MiA2MiA2OCA4NCA1MCA4NiBDMzIgODQgMjggNjIgMzAgNDYgWlwiXG4gICAgICAgICAgICBmaWxsPVwidXJsKCNwYS1ib2R5KVwiXG4gICAgICAgICAgICBzdHJva2U9XCIjZmFjYzE1XCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiBEaWFtb25kIGNyb3NzLWhhdGNoIGRlcHRoIHBhdHRlcm4gKi99XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMzYgNDQgTDY0IDc0IE00NiAzOCBMNjggNjIgTTMyIDU4IEw1OCA4NCBNNjQgNDQgTDM2IDc0IE01NCAzOCBMMzIgNjIgTTY4IDU4IEw0MiA4NFwiXG4gICAgICAgICAgICBzdHJva2U9XCIjODU0ZDBlXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS40XCJcbiAgICAgICAgICAgIG9wYWNpdHk9XCIwLjZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIERpYW1vbmQgY2VudGVyIHN0dWRzICovfVxuICAgICAgICAgIHtbXG4gICAgICAgICAgICBbNTAsIDQ4XSwgWzQyLCA1Nl0sIFs1OCwgNTZdLCBbNTAsIDY1XSwgWzQyLCA3M10sIFs1OCwgNzNdXG4gICAgICAgICAgXS5tYXAoKFt4LCB5XSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8Y2lyY2xlIGtleT17aWR4fSBjeD17eH0gY3k9e3l9IHI9XCIyXCIgZmlsbD1cIiNmZWYwOGFcIiBzdHJva2U9XCIjYTE2MjA3XCIgc3Ryb2tlV2lkdGg9XCIwLjZcIiAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3N2Zz5cbiAgICAgICk7XG5cbiAgICBjYXNlICdraXdpJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2BmaWx0ZXIgZHJvcC1zaGFkb3ctbWQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwICR7Y2xhc3NOYW1lfSAke1xuICAgICAgICAgICAgaXNXaW5uaW5nID8gJ2FuaW1hdGUtcHVsc2Ugc2NhbGUtMTA1JyA6ICcnXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgIDxyYWRpYWxHcmFkaWVudCBpZD1cImtpd2ktZmxlc2hcIiBjeD1cIjUwJVwiIGN5PVwiNTAlXCIgcj1cIjUwJVwiPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiNmZWY5YzNcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIyMCVcIiBzdG9wQ29sb3I9XCIjYmVmMjY0XCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiNjUlXCIgc3RvcENvbG9yPVwiIzg0Y2MxNlwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjkwJVwiIHN0b3BDb2xvcj1cIiM2NWEzMGRcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiIzNmNjIxMlwiIC8+XG4gICAgICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxuICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwia2l3aS1yaW5kXCIgeDE9XCIwJVwiIHkxPVwiMCVcIiB4Mj1cIjEwMCVcIiB5Mj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjNzgzNTBmXCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiM0NTFhMDNcIiAvPlxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgPGVsbGlwc2UgY3g9XCI1MFwiIGN5PVwiODhcIiByeD1cIjMyXCIgcnk9XCI3XCIgZmlsbD1cIiMwMDAwMDBcIiBvcGFjaXR5PVwiMC4zNVwiIC8+XG4gICAgICAgICAgey8qIE91dGVyIEZ1enp5IEJyb3duIFBlZWwgKi99XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCIzNlwiIGZpbGw9XCJ1cmwoI2tpd2ktcmluZClcIiBzdHJva2U9XCIjYTE2MjA3XCIgc3Ryb2tlV2lkdGg9XCIxLjVcIiAvPlxuICAgICAgICAgIHsvKiBKdWljeSBFbWVyYWxkIEZsZXNoICovfVxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMzNcIiBmaWxsPVwidXJsKCNraXdpLWZsZXNoKVwiIC8+XG4gICAgICAgICAgey8qIFJhZGlhbCBSYXlzIGZyb20gQ3JlYW0gQ29yZSAqL31cbiAgICAgICAgICB7WzAsIDMwLCA2MCwgOTAsIDEyMCwgMTUwLCAxODAsIDIxMCwgMjQwLCAyNzAsIDMwMCwgMzMwXS5tYXAoKGRlZywgaSkgPT4gKFxuICAgICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICB4MT1cIjUwXCJcbiAgICAgICAgICAgICAgeTE9XCI1MFwiXG4gICAgICAgICAgICAgIHgyPVwiNTBcIlxuICAgICAgICAgICAgICB5Mj1cIjI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiI2VjZmNjYlwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk9XCIwLjc1XCJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgcm90YXRlKCR7ZGVnfSA1MCA1MClgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7LyogQ3JlYW15IFdoaXRlIENvcmUgKi99XG4gICAgICAgICAgPGVsbGlwc2UgY3g9XCI1MFwiIGN5PVwiNTBcIiByeD1cIjlcIiByeT1cIjdcIiBmaWxsPVwiI2ZlZmNlOFwiIHN0cm9rZT1cIiNmZWYwOGFcIiBzdHJva2VXaWR0aD1cIjAuOFwiIC8+XG4gICAgICAgICAgey8qIEJsYWNrIFNlZWQgUmluZyAqL31cbiAgICAgICAgICB7WzE1LCA0NSwgNzUsIDEwNSwgMTM1LCAxNjUsIDE5NSwgMjI1LCAyNTUsIDI4NSwgMzE1LCAzNDVdLm1hcCgoZGVnLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZyBrZXk9e2l9IHRyYW5zZm9ybT17YHJvdGF0ZSgke2RlZ30gNTAgNTApYH0+XG4gICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiNTBcIiBjeT1cIjM0XCIgcng9XCIxLjRcIiByeT1cIjIuMlwiIGZpbGw9XCIjMTgxODFiXCIgLz5cbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjQ5LjVcIiBjeT1cIjMzLjVcIiByPVwiMC40XCIgZmlsbD1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3N2Zz5cbiAgICAgICk7XG5cbiAgICBjYXNlICd3aWxkX3N0YXInOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YGZpbHRlciBkcm9wLXNoYWRvdy1sZyB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgJHtjbGFzc05hbWV9ICR7XG4gICAgICAgICAgICBpc1dpbm5pbmcgPyAnYW5pbWF0ZS1ib3VuY2Ugc2NhbGUtMTEwJyA6ICcnXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgIDxyYWRpYWxHcmFkaWVudCBpZD1cInN0YXItZ2xvd1wiIGN4PVwiNTAlXCIgY3k9XCI1MCVcIiByPVwiNTAlXCI+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiI2ZlZjA4YVwiIHN0b3BPcGFjaXR5PVwiMC45XCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiNjAlXCIgc3RvcENvbG9yPVwiI2Y1OWUwYlwiIHN0b3BPcGFjaXR5PVwiMC40XCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiNjYThhMDRcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInN0YXItZmFjZXQtbGlnaHRcIiB4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMTAwJVwiIHkyPVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI1MCVcIiBzdG9wQ29sb3I9XCIjZmVmMDhhXCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiNmNTllMGJcIiAvPlxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInN0YXItZmFjZXQtZGFya1wiIHgxPVwiMCVcIiB5MT1cIjAlXCIgeDI9XCIxMDAlXCIgeTI9XCIxMDAlXCI+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiI2Q5NzcwNlwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjcwJVwiIHN0b3BDb2xvcj1cIiM5MjQwMGVcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiIzQ1MWEwM1wiIC8+XG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICB7LyogSGFsbyBHbG93ICovfVxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNDRcIiBmaWxsPVwidXJsKCNzdGFyLWdsb3cpXCIgY2xhc3NOYW1lPVwiYW5pbWF0ZS1wdWxzZVwiIC8+XG4gICAgICAgICAgey8qIFNoYWRvdyAqL31cbiAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjUwXCIgY3k9XCI5MlwiIHJ4PVwiMzBcIiByeT1cIjZcIiBmaWxsPVwiIzAwMDAwMFwiIG9wYWNpdHk9XCIwLjRcIiAvPlxuICAgICAgICAgIHsvKiAzRCBCZXZlbGVkIDUtUG9pbnQgU3RhciBGYWNldHMgKi99XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAsIC0yKVwiPlxuICAgICAgICAgICAgey8qIFRvcCBwb2ludCAqL31cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjUwLDEyIDUwLDUwIDM3LDQyXCIgZmlsbD1cInVybCgjc3Rhci1mYWNldC1kYXJrKVwiIC8+XG4gICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCI1MCwxMiA2Myw0MiA1MCw1MFwiIGZpbGw9XCJ1cmwoI3N0YXItZmFjZXQtbGlnaHQpXCIgLz5cbiAgICAgICAgICAgIHsvKiBUb3AgcmlnaHQgcG9pbnQgKi99XG4gICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCI4OCwzOCA1MCw1MCA2Myw0MlwiIGZpbGw9XCJ1cmwoI3N0YXItZmFjZXQtZGFyaylcIiAvPlxuICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiODgsMzggNjgsNjAgNTAsNTBcIiBmaWxsPVwidXJsKCNzdGFyLWZhY2V0LWxpZ2h0KVwiIC8+XG4gICAgICAgICAgICB7LyogQm90dG9tIHJpZ2h0IHBvaW50ICovfVxuICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiNzQsODQgNTAsNTAgNjgsNjBcIiBmaWxsPVwidXJsKCNzdGFyLWZhY2V0LWRhcmspXCIgLz5cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjc0LDg0IDUwLDY4IDUwLDUwXCIgZmlsbD1cInVybCgjc3Rhci1mYWNldC1saWdodClcIiAvPlxuICAgICAgICAgICAgey8qIEJvdHRvbSBsZWZ0IHBvaW50ICovfVxuICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMjYsODQgNTAsNTAgNTAsNjhcIiBmaWxsPVwidXJsKCNzdGFyLWZhY2V0LWRhcmspXCIgLz5cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjI2LDg0IDMyLDYwIDUwLDUwXCIgZmlsbD1cInVybCgjc3Rhci1mYWNldC1saWdodClcIiAvPlxuICAgICAgICAgICAgey8qIFRvcCBsZWZ0IHBvaW50ICovfVxuICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMTIsMzggNTAsNTAgMzIsNjBcIiBmaWxsPVwidXJsKCNzdGFyLWZhY2V0LWRhcmspXCIgLz5cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjEyLDM4IDM3LDQyIDUwLDUwXCIgZmlsbD1cInVybCgjc3Rhci1mYWNldC1saWdodClcIiAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICB7LyogQ2VudGVyIEdvbGRlbiBKZXdlbCBDb3JlICovfVxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNDhcIiByPVwiNlwiIGZpbGw9XCIjZmZmZmZmXCIgc3Ryb2tlPVwiI2VhYjMwOFwiIHN0cm9rZVdpZHRoPVwiMS41XCIgLz5cbiAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCI1MCw0NCA1Miw0OCA1Niw1MCA1Miw1MiA1MCw1NiA0OCw1MiA0NCw1MCA0OCw0OFwiIGZpbGw9XCIjY2E4YTA0XCIgLz5cbiAgICAgICAgICB7LyogT3JiaXRpbmcgU3BhcmtsZXMgKi99XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjIwXCIgY3k9XCIyMlwiIHI9XCIyXCIgZmlsbD1cIiNmZmZmZmZcIiBjbGFzc05hbWU9XCJhbmltYXRlLXBpbmdcIiAvPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI4MlwiIGN5PVwiNzRcIiByPVwiMS41XCIgZmlsbD1cIiNmZWYwOGFcIiBjbGFzc05hbWU9XCJhbmltYXRlLXBpbmdcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICk7XG5cbiAgICBjYXNlICdzY2F0dGVyX2dlbSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmlsdGVyIGRyb3Atc2hhZG93LXhsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCAke2NsYXNzTmFtZX0gJHtcbiAgICAgICAgICAgIGlzV2lubmluZyA/ICdhbmltYXRlLWJvdW5jZSBzY2FsZS0xMTAnIDogJydcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgPHJhZGlhbEdyYWRpZW50IGlkPVwiZ2VtLWdsb3dcIiBjeD1cIjUwJVwiIGN5PVwiNTAlXCIgcj1cIjUwJVwiPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiMzOGJkZjhcIiBzdG9wT3BhY2l0eT1cIjAuOVwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjYwJVwiIHN0b3BDb2xvcj1cIiMwMjg0YzdcIiBzdG9wT3BhY2l0eT1cIjAuNFwiIC8+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjMDM2OWExXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XG4gICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJnZW0tZmFjZXQtdG9wXCIgeDE9XCIwJVwiIHkxPVwiMCVcIiB4Mj1cIjEwMCVcIiB5Mj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjZTBmMmZlXCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiM3ZGQzZmNcIiAvPlxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImdlbS1mYWNldC1taWRcIiB4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMCVcIiB5Mj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjMzhiZGY4XCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiMwMjg0YzdcIiAvPlxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImdlbS1mYWNldC1ib3RcIiB4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMTAwJVwiIHkyPVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiMwMzY5YTFcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiIzA4MmY0OVwiIC8+XG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICB7LyogQ3lhbiBFbmVyZ3kgSGFsbyAqL31cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjQ0XCIgZmlsbD1cInVybCgjZ2VtLWdsb3cpXCIgY2xhc3NOYW1lPVwiYW5pbWF0ZS1wdWxzZVwiIC8+XG4gICAgICAgICAgey8qIFNoYWRvdyAqL31cbiAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjUwXCIgY3k9XCI5MlwiIHJ4PVwiMjhcIiByeT1cIjZcIiBmaWxsPVwiIzAwMDAwMFwiIG9wYWNpdHk9XCIwLjRcIiAvPlxuICAgICAgICAgIHsvKiBCcmlsbGlhbnQgQ3V0IDNEIEZhY2V0cyAqL31cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwgMilcIj5cbiAgICAgICAgICAgIHsvKiBUYWJsZSBGYWNldCAqL31cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjMyLDI0IDY4LDI0IDU4LDQwIDQyLDQwXCIgZmlsbD1cInVybCgjZ2VtLWZhY2V0LXRvcClcIiAvPlxuICAgICAgICAgICAgey8qIENyb3duIGZhY2V0cyAqL31cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjE2LDM4IDMyLDI0IDQyLDQwXCIgZmlsbD1cIiNiYWU2ZmRcIiAvPlxuICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiODQsMzggNjgsMjQgNTgsNDBcIiBmaWxsPVwiIzdkZDNmY1wiIC8+XG4gICAgICAgICAgICB7LyogQ2VudGVyIGdpcmRsZSBmYWNldHMgKi99XG4gICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCIxNiwzOCA0Miw0MCA1MCw1NCAyOCw1MlwiIGZpbGw9XCJ1cmwoI2dlbS1mYWNldC1taWQpXCIgLz5cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjg0LDM4IDU4LDQwIDUwLDU0IDcyLDUyXCIgZmlsbD1cIiMwMjg0YzdcIiAvPlxuICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiNDIsNDAgNTgsNDAgNTAsNTRcIiBmaWxsPVwiIzM4YmRmOFwiIC8+XG4gICAgICAgICAgICB7LyogUGF2aWxpb24gZmFjZXRzIG1lZXRpbmcgYXQgYm90dG9tIHBvaW50ICovfVxuICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMTYsMzggMjgsNTIgNTAsODZcIiBmaWxsPVwidXJsKCNnZW0tZmFjZXQtYm90KVwiIC8+XG4gICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCIyOCw1MiA1MCw1NCA1MCw4NlwiIGZpbGw9XCIjMDM2OWExXCIgLz5cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjUwLDU0IDcyLDUyIDUwLDg2XCIgZmlsbD1cIiMwMjg0YzdcIiAvPlxuICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiNzIsNTIgODQsMzggNTAsODZcIiBmaWxsPVwidXJsKCNnZW0tZmFjZXQtYm90KVwiIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIHsvKiBTcGVjdWxhciBXaGl0ZSBHbGVhbSBGbGFyZSAqL31cbiAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCIzMiwyNCAzNSwyOCAzOCwyNCAzNSwyMFwiIGZpbGw9XCIjZmZmZmZmXCIgLz5cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiMzVcIiBjeT1cIjI0XCIgcj1cIjIuNVwiIGZpbGw9XCIjZmZmZmZmXCIgY2xhc3NOYW1lPVwiYW5pbWF0ZS1waW5nXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICApO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIl19