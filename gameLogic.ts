export const BET_OPTIONS = [
	10,
	50,
	100,
	250,
	500
];
export const DEFAULT_BET = 50;
export const STARTING_BALANCE = 1e4;
export const DAILY_BONUS_AMOUNT = 2500;
export const REFILL_AMOUNT = 1e3;
export const NUM_ROWS = 3;
export const NUM_COLS = 5;
// Symbol definitions with vibrant colors and rich arcade multipliers
export const SYMBOLS = {
	strawberry: {
		id: "strawberry",
		name: "Strawberry",
		emoji: "🍓",
		color: "#ff2a85",
		bgColor: "rgba(255, 42, 133, 0.22)",
		borderColor: "#ff2a85",
		payout3: 20,
		payout4: 80,
		payout5: 300,
		weight: 12
	},
	watermelon: {
		id: "watermelon",
		name: "Watermelon",
		emoji: "🍉",
		color: "#22c55e",
		bgColor: "rgba(34, 197, 94, 0.22)",
		borderColor: "#22c55e",
		payout3: 16,
		payout4: 60,
		payout5: 220,
		weight: 14
	},
	pineapple: {
		id: "pineapple",
		name: "Pineapple",
		emoji: "🍍",
		color: "#facc15",
		bgColor: "rgba(250, 204, 21, 0.22)",
		borderColor: "#facc15",
		payout3: 14,
		payout4: 45,
		payout5: 180,
		weight: 15
	},
	grapes: {
		id: "grapes",
		name: "Grapes",
		emoji: "🍇",
		color: "#a855f7",
		bgColor: "rgba(168, 85, 247, 0.22)",
		borderColor: "#a855f7",
		payout3: 10,
		payout4: 35,
		payout5: 130,
		weight: 17
	},
	orange: {
		id: "orange",
		name: "Orange",
		emoji: "🍊",
		color: "#fb923c",
		bgColor: "rgba(251, 146, 60, 0.22)",
		borderColor: "#fb923c",
		payout3: 8,
		payout4: 25,
		payout5: 95,
		weight: 19
	},
	lemon: {
		id: "lemon",
		name: "Lemon",
		emoji: "🍋",
		color: "#eab308",
		bgColor: "rgba(234, 179, 8, 0.22)",
		borderColor: "#eab308",
		payout3: 6,
		payout4: 20,
		payout5: 75,
		weight: 21
	},
	kiwi: {
		id: "kiwi",
		name: "Kiwi",
		emoji: "🥝",
		color: "#84cc16",
		bgColor: "rgba(132, 204, 22, 0.22)",
		borderColor: "#84cc16",
		payout3: 5,
		payout4: 15,
		payout5: 60,
		weight: 23
	},
	wild_star: {
		id: "wild_star",
		name: "Wild Star",
		emoji: "⭐",
		color: "#ffd700",
		bgColor: "rgba(255, 215, 0, 0.32)",
		borderColor: "#ffd700",
		payout3: 30,
		payout4: 150,
		payout5: 750,
		weight: 8,
		isWild: true
	},
	scatter_gem: {
		id: "scatter_gem",
		name: "Scatter Gem",
		emoji: "💎",
		color: "#38bdf8",
		bgColor: "rgba(56, 189, 248, 0.3)",
		borderColor: "#38bdf8",
		payout3: 0,
		payout4: 0,
		payout5: 0,
		weight: 7,
		isScatter: true
	}
};
/**
* EXACT 9 FIXED PAYLINES as required by the specification:
* 1. Top row: [0, 0, 0, 0, 0]
* 2. Middle row: [1, 1, 1, 1, 1]
* 3. Bottom row: [2, 2, 2, 2, 2]
* 4. Upper zigzag: [1, 0, 1, 0, 1]
* 5. Lower zigzag: [1, 2, 1, 2, 1]
* 6. V shape: [0, 1, 2, 1, 0]
* 7. Inverted V: [2, 1, 0, 1, 2]
* 8. Upper wave: [0, 1, 0, 1, 0]
* 9. Lower wave: [2, 1, 2, 1, 2]
*/
export const PAYLINES = [
	{
		id: 1,
		name: "Top Row",
		description: "Horizontal across row 1",
		coords: [
			0,
			0,
			0,
			0,
			0
		],
		color: "#ec4899"
	},
	{
		id: 2,
		name: "Middle Row",
		description: "Horizontal across row 2",
		coords: [
			1,
			1,
			1,
			1,
			1
		],
		color: "#f59e0b"
	},
	{
		id: 3,
		name: "Bottom Row",
		description: "Horizontal across row 3",
		coords: [
			2,
			2,
			2,
			2,
			2
		],
		color: "#10b981"
	},
	{
		id: 4,
		name: "Upper Zigzag",
		description: "Middle to top zigzag",
		coords: [
			1,
			0,
			1,
			0,
			1
		],
		color: "#06b6d4"
	},
	{
		id: 5,
		name: "Lower Zigzag",
		description: "Middle to bottom zigzag",
		coords: [
			1,
			2,
			1,
			2,
			1
		],
		color: "#8b5cf6"
	},
	{
		id: 6,
		name: "V Shape",
		description: "Descends then climbs",
		coords: [
			0,
			1,
			2,
			1,
			0
		],
		color: "#f97316"
	},
	{
		id: 7,
		name: "Inverted V",
		description: "Climbs then descends",
		coords: [
			2,
			1,
			0,
			1,
			2
		],
		color: "#d946ef"
	},
	{
		id: 8,
		name: "Upper Wave",
		description: "Top and center wave",
		coords: [
			0,
			1,
			0,
			1,
			0
		],
		color: "#38bdf8"
	},
	{
		id: 9,
		name: "Lower Wave",
		description: "Bottom and center wave",
		coords: [
			2,
			1,
			2,
			1,
			2
		],
		color: "#84cc16"
	}
];
// Weighted symbol pool for pseudo-random reel generation
const weightedPool = (() => {
	const pool = [];
	Object.keys(SYMBOLS).forEach((symId) => {
		const sym = SYMBOLS[symId];
		for (let i = 0; i < sym.weight; i++) {
			pool.push(symId);
		}
	});
	return pool;
})();
export function getRandomSymbol() {
	const index = Math.floor(Math.random() * weightedPool.length);
	return weightedPool[index];
}
export function generateInitialGrid() {
	const grid = [];
	for (let r = 0; r < NUM_ROWS; r++) {
		const row = [];
		for (let c = 0; c < NUM_COLS; c++) {
			row.push(getRandomSymbol());
		}
		grid.push(row);
	}
	return grid;
}
export function generateSpinGrid() {
	const grid = [];
	for (let r = 0; r < NUM_ROWS; r++) {
		const row = [];
		for (let c = 0; c < NUM_COLS; c++) {
			row.push(getRandomSymbol());
		}
		grid.push(row);
	}
	return grid;
}
/**
* Determine a random lucky multiplier: 1x (default), 2x, 3x, 5x, or 10x
* Triggers with generous arcade probability when a win occurs
*/
export function determineMultiplier() {
	const roll = Math.random();
	if (roll < .65) return 1;
	if (roll < .83) return 2;
	if (roll < .93) return 3;
	if (roll < .98) return 5;
	return 10;
}
/**
* Evaluate the 9 paylines and Scatter Gems:
* - Line bet = totalBet / 9 (rounded up, min 1)
* - Three matching regular symbols award a small reward.
* - Four matching symbols award a medium reward.
* - Five matching symbols award a larger reward.
* - Wild Star substitutes for regular symbols (not Scatter Gems).
* - Scatter Gems activate the Bonus Round when 3 or more appear anywhere.
* - Applies Multiplier (2x, 3x, 5x, 10x) to line rewards.
*/
export function evaluateSpin(grid, totalBet, forcedMultiplier) {
	const lineBet = Math.max(1, Math.round(totalBet / PAYLINES.length));
	const lineWins = [];
	// 1. Evaluate each of the 9 paylines
	for (const line of PAYLINES) {
		const symbolsOnLine = [];
		for (let col = 0; col < NUM_COLS; col++) {
			const row = line.coords[col];
			symbolsOnLine.push({
				id: grid[row][col],
				row,
				col
			});
		}
		// Determine target symbol starting from col 0
		let targetSymbol = null;
		for (const item of symbolsOnLine) {
			if (item.id !== "scatter_gem") {
				if (item.id !== "wild_star") {
					targetSymbol = item.id;
					break;
				}
			} else {
				break;
			}
		}
		// If whole line starts with wild stars
		if (!targetSymbol && symbolsOnLine[0].id === "wild_star") {
			targetSymbol = "wild_star";
		}
		if (targetSymbol) {
			let count = 0;
			const matchedPositions = [];
			for (let col = 0; col < NUM_COLS; col++) {
				const item = symbolsOnLine[col];
				// Wild Star substitutes for regular symbols, NOT for scatter gems
				const isMatch = item.id === targetSymbol || item.id === "wild_star";
				if (isMatch) {
					count++;
					matchedPositions.push([item.row, item.col]);
				} else {
					break;
				}
			}
			if (count >= 3) {
				const symDef = SYMBOLS[targetSymbol];
				let mult = 0;
				if (count === 3) mult = symDef.payout3;
				else if (count === 4) mult = symDef.payout4;
				else if (count >= 5) mult = symDef.payout5;
				if (mult > 0) {
					const basePayout = Math.round(lineBet * mult);
					lineWins.push({
						lineId: line.id,
						lineName: line.name,
						symbolId: targetSymbol,
						symbolName: symDef.name,
						count,
						basePayout,
						multiplier: 1,
						totalPayout: basePayout,
						matchingPositions: matchedPositions
					});
				}
			}
		}
	}
	// 2. Evaluate Scatter Gems (anywhere on 5x3 grid)
	const gemPositions = [];
	for (let r = 0; r < NUM_ROWS; r++) {
		for (let c = 0; c < NUM_COLS; c++) {
			if (grid[r][c] === "scatter_gem") {
				gemPositions.push([r, c]);
			}
		}
	}
	let scatterWin = null;
	const gemCount = gemPositions.length;
	// 3 or more scatter gems activate the Bonus Round!
	const activatesBonusRound = gemCount >= 3;
	if (gemCount >= 2) {
		let gemMult = 2;
		if (gemCount === 3) gemMult = 10;
		else if (gemCount === 4) gemMult = 35;
		else if (gemCount >= 5) gemMult = 150;
		const payout = Math.round(totalBet * gemMult);
		scatterWin = {
			count: gemCount,
			activatesBonusRound,
			multiplier: gemMult,
			payout,
			positions: gemPositions
		};
	}
	// Calculate Base Win
	const baseLineWin = lineWins.reduce((acc, curr) => acc + curr.basePayout, 0);
	const baseScatterWin = scatterWin ? scatterWin.payout : 0;
	const baseWin = baseLineWin + baseScatterWin;
	// Determine multiplier: if win exists, roll multiplier (or use forced)
	const multiplier = forcedMultiplier !== undefined ? forcedMultiplier : baseWin > 0 ? determineMultiplier() : 1;
	// Apply multiplier to line wins and final total
	const finalLineWins = lineWins.map((w) => ({
		...w,
		multiplier,
		totalPayout: Math.round(w.basePayout * multiplier)
	}));
	const totalWin = Math.round(baseWin * multiplier);
	const isBigWin = totalWin >= totalBet * 5 && totalWin > 0;
	const isJackpot = totalWin >= totalBet * 25 || multiplier >= 10;
	return {
		grid,
		totalBet,
		lineWins: finalLineWins,
		scatterWin,
		baseWin,
		multiplier,
		totalWin,
		isJackpot,
		isBigWin,
		activatesBonusRound
	};
}
export function isWinningCell(row, col, evaluation) {
	if (!evaluation) return false;
	for (const win of evaluation.lineWins) {
		if (win.matchingPositions.some(([r, c]) => r === row && c === col)) {
			return true;
		}
	}
	if (evaluation.scatterWin) {
		if (evaluation.scatterWin.positions.some(([r, c]) => r === row && c === col)) {
			return true;
		}
	}
	return false;
}

//# sourceMappingURL=data:application/json;base64,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O0NBQ0Y7Q0FFQSxPQUFPO0FBQ1QiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiZ2FtZUxvZ2ljLnRzIl0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEdhbWVTeW1ib2wsXG4gIFBheWxpbmVEZWZpbml0aW9uLFxuICBTeW1ib2xJZCxcbiAgU3BpbkV2YWx1YXRpb24sXG4gIFdpbm5pbmdMaW5lLFxuICBTY2F0dGVyV2luLFxuICBHcmlkUG9zaXRpb25cbn0gZnJvbSAnLi4vdHlwZXMvZ2FtZSc7XG5cbmV4cG9ydCBjb25zdCBCRVRfT1BUSU9OUyA9IFsxMCwgNTAsIDEwMCwgMjUwLCA1MDBdIGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQkVUID0gNTA7XG5leHBvcnQgY29uc3QgU1RBUlRJTkdfQkFMQU5DRSA9IDEwMDAwO1xuZXhwb3J0IGNvbnN0IERBSUxZX0JPTlVTX0FNT1VOVCA9IDI1MDA7XG5leHBvcnQgY29uc3QgUkVGSUxMX0FNT1VOVCA9IDEwMDA7XG5leHBvcnQgY29uc3QgTlVNX1JPV1MgPSAzO1xuZXhwb3J0IGNvbnN0IE5VTV9DT0xTID0gNTtcblxuLy8gU3ltYm9sIGRlZmluaXRpb25zIHdpdGggdmlicmFudCBjb2xvcnMgYW5kIHJpY2ggYXJjYWRlIG11bHRpcGxpZXJzXG5leHBvcnQgY29uc3QgU1lNQk9MUzogUmVjb3JkPFN5bWJvbElkLCBHYW1lU3ltYm9sPiA9IHtcbiAgc3RyYXdiZXJyeToge1xuICAgIGlkOiAnc3RyYXdiZXJyeScsXG4gICAgbmFtZTogJ1N0cmF3YmVycnknLFxuICAgIGVtb2ppOiAn8J+NkycsXG4gICAgY29sb3I6ICcjZmYyYTg1JyxcbiAgICBiZ0NvbG9yOiAncmdiYSgyNTUsIDQyLCAxMzMsIDAuMjIpJyxcbiAgICBib3JkZXJDb2xvcjogJyNmZjJhODUnLFxuICAgIHBheW91dDM6IDIwLFxuICAgIHBheW91dDQ6IDgwLFxuICAgIHBheW91dDU6IDMwMCxcbiAgICB3ZWlnaHQ6IDEyXG4gIH0sXG4gIHdhdGVybWVsb246IHtcbiAgICBpZDogJ3dhdGVybWVsb24nLFxuICAgIG5hbWU6ICdXYXRlcm1lbG9uJyxcbiAgICBlbW9qaTogJ/CfjYknLFxuICAgIGNvbG9yOiAnIzIyYzU1ZScsXG4gICAgYmdDb2xvcjogJ3JnYmEoMzQsIDE5NywgOTQsIDAuMjIpJyxcbiAgICBib3JkZXJDb2xvcjogJyMyMmM1NWUnLFxuICAgIHBheW91dDM6IDE2LFxuICAgIHBheW91dDQ6IDYwLFxuICAgIHBheW91dDU6IDIyMCxcbiAgICB3ZWlnaHQ6IDE0XG4gIH0sXG4gIHBpbmVhcHBsZToge1xuICAgIGlkOiAncGluZWFwcGxlJyxcbiAgICBuYW1lOiAnUGluZWFwcGxlJyxcbiAgICBlbW9qaTogJ/CfjY0nLFxuICAgIGNvbG9yOiAnI2ZhY2MxNScsXG4gICAgYmdDb2xvcjogJ3JnYmEoMjUwLCAyMDQsIDIxLCAwLjIyKScsXG4gICAgYm9yZGVyQ29sb3I6ICcjZmFjYzE1JyxcbiAgICBwYXlvdXQzOiAxNCxcbiAgICBwYXlvdXQ0OiA0NSxcbiAgICBwYXlvdXQ1OiAxODAsXG4gICAgd2VpZ2h0OiAxNVxuICB9LFxuICBncmFwZXM6IHtcbiAgICBpZDogJ2dyYXBlcycsXG4gICAgbmFtZTogJ0dyYXBlcycsXG4gICAgZW1vamk6ICfwn42HJyxcbiAgICBjb2xvcjogJyNhODU1ZjcnLFxuICAgIGJnQ29sb3I6ICdyZ2JhKDE2OCwgODUsIDI0NywgMC4yMiknLFxuICAgIGJvcmRlckNvbG9yOiAnI2E4NTVmNycsXG4gICAgcGF5b3V0MzogMTAsXG4gICAgcGF5b3V0NDogMzUsXG4gICAgcGF5b3V0NTogMTMwLFxuICAgIHdlaWdodDogMTdcbiAgfSxcbiAgb3JhbmdlOiB7XG4gICAgaWQ6ICdvcmFuZ2UnLFxuICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgIGVtb2ppOiAn8J+NiicsXG4gICAgY29sb3I6ICcjZmI5MjNjJyxcbiAgICBiZ0NvbG9yOiAncmdiYSgyNTEsIDE0NiwgNjAsIDAuMjIpJyxcbiAgICBib3JkZXJDb2xvcjogJyNmYjkyM2MnLFxuICAgIHBheW91dDM6IDgsXG4gICAgcGF5b3V0NDogMjUsXG4gICAgcGF5b3V0NTogOTUsXG4gICAgd2VpZ2h0OiAxOVxuICB9LFxuICBsZW1vbjoge1xuICAgIGlkOiAnbGVtb24nLFxuICAgIG5hbWU6ICdMZW1vbicsXG4gICAgZW1vamk6ICfwn42LJyxcbiAgICBjb2xvcjogJyNlYWIzMDgnLFxuICAgIGJnQ29sb3I6ICdyZ2JhKDIzNCwgMTc5LCA4LCAwLjIyKScsXG4gICAgYm9yZGVyQ29sb3I6ICcjZWFiMzA4JyxcbiAgICBwYXlvdXQzOiA2LFxuICAgIHBheW91dDQ6IDIwLFxuICAgIHBheW91dDU6IDc1LFxuICAgIHdlaWdodDogMjFcbiAgfSxcbiAga2l3aToge1xuICAgIGlkOiAna2l3aScsXG4gICAgbmFtZTogJ0tpd2knLFxuICAgIGVtb2ppOiAn8J+lnScsXG4gICAgY29sb3I6ICcjODRjYzE2JyxcbiAgICBiZ0NvbG9yOiAncmdiYSgxMzIsIDIwNCwgMjIsIDAuMjIpJyxcbiAgICBib3JkZXJDb2xvcjogJyM4NGNjMTYnLFxuICAgIHBheW91dDM6IDUsXG4gICAgcGF5b3V0NDogMTUsXG4gICAgcGF5b3V0NTogNjAsXG4gICAgd2VpZ2h0OiAyM1xuICB9LFxuICB3aWxkX3N0YXI6IHtcbiAgICBpZDogJ3dpbGRfc3RhcicsXG4gICAgbmFtZTogJ1dpbGQgU3RhcicsXG4gICAgZW1vamk6ICfirZAnLFxuICAgIGNvbG9yOiAnI2ZmZDcwMCcsXG4gICAgYmdDb2xvcjogJ3JnYmEoMjU1LCAyMTUsIDAsIDAuMzIpJyxcbiAgICBib3JkZXJDb2xvcjogJyNmZmQ3MDAnLFxuICAgIHBheW91dDM6IDMwLFxuICAgIHBheW91dDQ6IDE1MCxcbiAgICBwYXlvdXQ1OiA3NTAsXG4gICAgd2VpZ2h0OiA4LFxuICAgIGlzV2lsZDogdHJ1ZVxuICB9LFxuICBzY2F0dGVyX2dlbToge1xuICAgIGlkOiAnc2NhdHRlcl9nZW0nLFxuICAgIG5hbWU6ICdTY2F0dGVyIEdlbScsXG4gICAgZW1vamk6ICfwn5KOJyxcbiAgICBjb2xvcjogJyMzOGJkZjgnLFxuICAgIGJnQ29sb3I6ICdyZ2JhKDU2LCAxODksIDI0OCwgMC4zKScsXG4gICAgYm9yZGVyQ29sb3I6ICcjMzhiZGY4JyxcbiAgICBwYXlvdXQzOiAwLFxuICAgIHBheW91dDQ6IDAsXG4gICAgcGF5b3V0NTogMCxcbiAgICB3ZWlnaHQ6IDcsXG4gICAgaXNTY2F0dGVyOiB0cnVlXG4gIH1cbn07XG5cbi8qKlxuICogRVhBQ1QgOSBGSVhFRCBQQVlMSU5FUyBhcyByZXF1aXJlZCBieSB0aGUgc3BlY2lmaWNhdGlvbjpcbiAqIDEuIFRvcCByb3c6IFswLCAwLCAwLCAwLCAwXVxuICogMi4gTWlkZGxlIHJvdzogWzEsIDEsIDEsIDEsIDFdXG4gKiAzLiBCb3R0b20gcm93OiBbMiwgMiwgMiwgMiwgMl1cbiAqIDQuIFVwcGVyIHppZ3phZzogWzEsIDAsIDEsIDAsIDFdXG4gKiA1LiBMb3dlciB6aWd6YWc6IFsxLCAyLCAxLCAyLCAxXVxuICogNi4gViBzaGFwZTogWzAsIDEsIDIsIDEsIDBdXG4gKiA3LiBJbnZlcnRlZCBWOiBbMiwgMSwgMCwgMSwgMl1cbiAqIDguIFVwcGVyIHdhdmU6IFswLCAxLCAwLCAxLCAwXVxuICogOS4gTG93ZXIgd2F2ZTogWzIsIDEsIDIsIDEsIDJdXG4gKi9cbmV4cG9ydCBjb25zdCBQQVlMSU5FUzogUGF5bGluZURlZmluaXRpb25bXSA9IFtcbiAgeyBpZDogMSwgbmFtZTogJ1RvcCBSb3cnLCBkZXNjcmlwdGlvbjogJ0hvcml6b250YWwgYWNyb3NzIHJvdyAxJywgY29vcmRzOiBbMCwgMCwgMCwgMCwgMF0sIGNvbG9yOiAnI2VjNDg5OScgfSxcbiAgeyBpZDogMiwgbmFtZTogJ01pZGRsZSBSb3cnLCBkZXNjcmlwdGlvbjogJ0hvcml6b250YWwgYWNyb3NzIHJvdyAyJywgY29vcmRzOiBbMSwgMSwgMSwgMSwgMV0sIGNvbG9yOiAnI2Y1OWUwYicgfSxcbiAgeyBpZDogMywgbmFtZTogJ0JvdHRvbSBSb3cnLCBkZXNjcmlwdGlvbjogJ0hvcml6b250YWwgYWNyb3NzIHJvdyAzJywgY29vcmRzOiBbMiwgMiwgMiwgMiwgMl0sIGNvbG9yOiAnIzEwYjk4MScgfSxcbiAgeyBpZDogNCwgbmFtZTogJ1VwcGVyIFppZ3phZycsIGRlc2NyaXB0aW9uOiAnTWlkZGxlIHRvIHRvcCB6aWd6YWcnLCBjb29yZHM6IFsxLCAwLCAxLCAwLCAxXSwgY29sb3I6ICcjMDZiNmQ0JyB9LFxuICB7IGlkOiA1LCBuYW1lOiAnTG93ZXIgWmlnemFnJywgZGVzY3JpcHRpb246ICdNaWRkbGUgdG8gYm90dG9tIHppZ3phZycsIGNvb3JkczogWzEsIDIsIDEsIDIsIDFdLCBjb2xvcjogJyM4YjVjZjYnIH0sXG4gIHsgaWQ6IDYsIG5hbWU6ICdWIFNoYXBlJywgZGVzY3JpcHRpb246ICdEZXNjZW5kcyB0aGVuIGNsaW1icycsIGNvb3JkczogWzAsIDEsIDIsIDEsIDBdLCBjb2xvcjogJyNmOTczMTYnIH0sXG4gIHsgaWQ6IDcsIG5hbWU6ICdJbnZlcnRlZCBWJywgZGVzY3JpcHRpb246ICdDbGltYnMgdGhlbiBkZXNjZW5kcycsIGNvb3JkczogWzIsIDEsIDAsIDEsIDJdLCBjb2xvcjogJyNkOTQ2ZWYnIH0sXG4gIHsgaWQ6IDgsIG5hbWU6ICdVcHBlciBXYXZlJywgZGVzY3JpcHRpb246ICdUb3AgYW5kIGNlbnRlciB3YXZlJywgY29vcmRzOiBbMCwgMSwgMCwgMSwgMF0sIGNvbG9yOiAnIzM4YmRmOCcgfSxcbiAgeyBpZDogOSwgbmFtZTogJ0xvd2VyIFdhdmUnLCBkZXNjcmlwdGlvbjogJ0JvdHRvbSBhbmQgY2VudGVyIHdhdmUnLCBjb29yZHM6IFsyLCAxLCAyLCAxLCAyXSwgY29sb3I6ICcjODRjYzE2JyB9XG5dO1xuXG4vLyBXZWlnaHRlZCBzeW1ib2wgcG9vbCBmb3IgcHNldWRvLXJhbmRvbSByZWVsIGdlbmVyYXRpb25cbmNvbnN0IHdlaWdodGVkUG9vbDogU3ltYm9sSWRbXSA9ICgoKSA9PiB7XG4gIGNvbnN0IHBvb2w6IFN5bWJvbElkW10gPSBbXTtcbiAgKE9iamVjdC5rZXlzKFNZTUJPTFMpIGFzIFN5bWJvbElkW10pLmZvckVhY2goKHN5bUlkKSA9PiB7XG4gICAgY29uc3Qgc3ltID0gU1lNQk9MU1tzeW1JZF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW0ud2VpZ2h0OyBpKyspIHtcbiAgICAgIHBvb2wucHVzaChzeW1JZCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHBvb2w7XG59KSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tU3ltYm9sKCk6IFN5bWJvbElkIHtcbiAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWlnaHRlZFBvb2wubGVuZ3RoKTtcbiAgcmV0dXJuIHdlaWdodGVkUG9vbFtpbmRleF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUluaXRpYWxHcmlkKCk6IFN5bWJvbElkW11bXSB7XG4gIGNvbnN0IGdyaWQ6IFN5bWJvbElkW11bXSA9IFtdO1xuICBmb3IgKGxldCByID0gMDsgciA8IE5VTV9ST1dTOyByKyspIHtcbiAgICBjb25zdCByb3c6IFN5bWJvbElkW10gPSBbXTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IE5VTV9DT0xTOyBjKyspIHtcbiAgICAgIHJvdy5wdXNoKGdldFJhbmRvbVN5bWJvbCgpKTtcbiAgICB9XG4gICAgZ3JpZC5wdXNoKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNwaW5HcmlkKCk6IFN5bWJvbElkW11bXSB7XG4gIGNvbnN0IGdyaWQ6IFN5bWJvbElkW11bXSA9IFtdO1xuICBmb3IgKGxldCByID0gMDsgciA8IE5VTV9ST1dTOyByKyspIHtcbiAgICBjb25zdCByb3c6IFN5bWJvbElkW10gPSBbXTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IE5VTV9DT0xTOyBjKyspIHtcbiAgICAgIHJvdy5wdXNoKGdldFJhbmRvbVN5bWJvbCgpKTtcbiAgICB9XG4gICAgZ3JpZC5wdXNoKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGEgcmFuZG9tIGx1Y2t5IG11bHRpcGxpZXI6IDF4IChkZWZhdWx0KSwgMngsIDN4LCA1eCwgb3IgMTB4XG4gKiBUcmlnZ2VycyB3aXRoIGdlbmVyb3VzIGFyY2FkZSBwcm9iYWJpbGl0eSB3aGVuIGEgd2luIG9jY3Vyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5lTXVsdGlwbGllcigpOiBudW1iZXIge1xuICBjb25zdCByb2xsID0gTWF0aC5yYW5kb20oKTtcbiAgaWYgKHJvbGwgPCAwLjY1KSByZXR1cm4gMTsgLy8gMXggbm9ybWFsXG4gIGlmIChyb2xsIDwgMC44MykgcmV0dXJuIDI7IC8vIDJ4XG4gIGlmIChyb2xsIDwgMC45MykgcmV0dXJuIDM7IC8vIDN4XG4gIGlmIChyb2xsIDwgMC45OCkgcmV0dXJuIDU7IC8vIDV4XG4gIHJldHVybiAxMDsgLy8gMTB4IFVMVFJBIEpBQ0tQT1QgTVVMVElQTElFUiFcbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgOSBwYXlsaW5lcyBhbmQgU2NhdHRlciBHZW1zOlxuICogLSBMaW5lIGJldCA9IHRvdGFsQmV0IC8gOSAocm91bmRlZCB1cCwgbWluIDEpXG4gKiAtIFRocmVlIG1hdGNoaW5nIHJlZ3VsYXIgc3ltYm9scyBhd2FyZCBhIHNtYWxsIHJld2FyZC5cbiAqIC0gRm91ciBtYXRjaGluZyBzeW1ib2xzIGF3YXJkIGEgbWVkaXVtIHJld2FyZC5cbiAqIC0gRml2ZSBtYXRjaGluZyBzeW1ib2xzIGF3YXJkIGEgbGFyZ2VyIHJld2FyZC5cbiAqIC0gV2lsZCBTdGFyIHN1YnN0aXR1dGVzIGZvciByZWd1bGFyIHN5bWJvbHMgKG5vdCBTY2F0dGVyIEdlbXMpLlxuICogLSBTY2F0dGVyIEdlbXMgYWN0aXZhdGUgdGhlIEJvbnVzIFJvdW5kIHdoZW4gMyBvciBtb3JlIGFwcGVhciBhbnl3aGVyZS5cbiAqIC0gQXBwbGllcyBNdWx0aXBsaWVyICgyeCwgM3gsIDV4LCAxMHgpIHRvIGxpbmUgcmV3YXJkcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlU3BpbihcbiAgZ3JpZDogU3ltYm9sSWRbXVtdLFxuICB0b3RhbEJldDogbnVtYmVyLFxuICBmb3JjZWRNdWx0aXBsaWVyPzogbnVtYmVyXG4pOiBTcGluRXZhbHVhdGlvbiB7XG4gIGNvbnN0IGxpbmVCZXQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHRvdGFsQmV0IC8gUEFZTElORVMubGVuZ3RoKSk7XG4gIGNvbnN0IGxpbmVXaW5zOiBXaW5uaW5nTGluZVtdID0gW107XG5cbiAgLy8gMS4gRXZhbHVhdGUgZWFjaCBvZiB0aGUgOSBwYXlsaW5lc1xuICBmb3IgKGNvbnN0IGxpbmUgb2YgUEFZTElORVMpIHtcbiAgICBjb25zdCBzeW1ib2xzT25MaW5lOiB7IGlkOiBTeW1ib2xJZDsgcm93OiBudW1iZXI7IGNvbDogbnVtYmVyIH1bXSA9IFtdO1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IE5VTV9DT0xTOyBjb2wrKykge1xuICAgICAgY29uc3Qgcm93ID0gbGluZS5jb29yZHNbY29sXTtcbiAgICAgIHN5bWJvbHNPbkxpbmUucHVzaCh7IGlkOiBncmlkW3Jvd11bY29sXSwgcm93LCBjb2wgfSk7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRhcmdldCBzeW1ib2wgc3RhcnRpbmcgZnJvbSBjb2wgMFxuICAgIGxldCB0YXJnZXRTeW1ib2w6IFN5bWJvbElkIHwgbnVsbCA9IG51bGw7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHN5bWJvbHNPbkxpbmUpIHtcbiAgICAgIGlmIChpdGVtLmlkICE9PSAnc2NhdHRlcl9nZW0nKSB7XG4gICAgICAgIGlmIChpdGVtLmlkICE9PSAnd2lsZF9zdGFyJykge1xuICAgICAgICAgIHRhcmdldFN5bWJvbCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHdob2xlIGxpbmUgc3RhcnRzIHdpdGggd2lsZCBzdGFyc1xuICAgIGlmICghdGFyZ2V0U3ltYm9sICYmIHN5bWJvbHNPbkxpbmVbMF0uaWQgPT09ICd3aWxkX3N0YXInKSB7XG4gICAgICB0YXJnZXRTeW1ib2wgPSAnd2lsZF9zdGFyJztcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0U3ltYm9sKSB7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgY29uc3QgbWF0Y2hlZFBvc2l0aW9uczogR3JpZFBvc2l0aW9uW10gPSBbXTtcblxuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgTlVNX0NPTFM7IGNvbCsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBzeW1ib2xzT25MaW5lW2NvbF07XG4gICAgICAgIC8vIFdpbGQgU3RhciBzdWJzdGl0dXRlcyBmb3IgcmVndWxhciBzeW1ib2xzLCBOT1QgZm9yIHNjYXR0ZXIgZ2Vtc1xuICAgICAgICBjb25zdCBpc01hdGNoID0gaXRlbS5pZCA9PT0gdGFyZ2V0U3ltYm9sIHx8IGl0ZW0uaWQgPT09ICd3aWxkX3N0YXInO1xuXG4gICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgICBtYXRjaGVkUG9zaXRpb25zLnB1c2goW2l0ZW0ucm93LCBpdGVtLmNvbF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjb3VudCA+PSAzKSB7XG4gICAgICAgIGNvbnN0IHN5bURlZiA9IFNZTUJPTFNbdGFyZ2V0U3ltYm9sXTtcbiAgICAgICAgbGV0IG11bHQgPSAwO1xuICAgICAgICBpZiAoY291bnQgPT09IDMpIG11bHQgPSBzeW1EZWYucGF5b3V0MztcbiAgICAgICAgZWxzZSBpZiAoY291bnQgPT09IDQpIG11bHQgPSBzeW1EZWYucGF5b3V0NDtcbiAgICAgICAgZWxzZSBpZiAoY291bnQgPj0gNSkgbXVsdCA9IHN5bURlZi5wYXlvdXQ1O1xuXG4gICAgICAgIGlmIChtdWx0ID4gMCkge1xuICAgICAgICAgIGNvbnN0IGJhc2VQYXlvdXQgPSBNYXRoLnJvdW5kKGxpbmVCZXQgKiBtdWx0KTtcbiAgICAgICAgICBsaW5lV2lucy5wdXNoKHtcbiAgICAgICAgICAgIGxpbmVJZDogbGluZS5pZCxcbiAgICAgICAgICAgIGxpbmVOYW1lOiBsaW5lLm5hbWUsXG4gICAgICAgICAgICBzeW1ib2xJZDogdGFyZ2V0U3ltYm9sLFxuICAgICAgICAgICAgc3ltYm9sTmFtZTogc3ltRGVmLm5hbWUsXG4gICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgIGJhc2VQYXlvdXQsXG4gICAgICAgICAgICBtdWx0aXBsaWVyOiAxLCAvLyBXaWxsIGFwcGx5IG92ZXJhbGwgbXVsdGlwbGllciBiZWxvd1xuICAgICAgICAgICAgdG90YWxQYXlvdXQ6IGJhc2VQYXlvdXQsXG4gICAgICAgICAgICBtYXRjaGluZ1Bvc2l0aW9uczogbWF0Y2hlZFBvc2l0aW9uc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gMi4gRXZhbHVhdGUgU2NhdHRlciBHZW1zIChhbnl3aGVyZSBvbiA1eDMgZ3JpZClcbiAgY29uc3QgZ2VtUG9zaXRpb25zOiBHcmlkUG9zaXRpb25bXSA9IFtdO1xuICBmb3IgKGxldCByID0gMDsgciA8IE5VTV9ST1dTOyByKyspIHtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IE5VTV9DT0xTOyBjKyspIHtcbiAgICAgIGlmIChncmlkW3JdW2NdID09PSAnc2NhdHRlcl9nZW0nKSB7XG4gICAgICAgIGdlbVBvc2l0aW9ucy5wdXNoKFtyLCBjXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IHNjYXR0ZXJXaW46IFNjYXR0ZXJXaW4gfCBudWxsID0gbnVsbDtcbiAgY29uc3QgZ2VtQ291bnQgPSBnZW1Qb3NpdGlvbnMubGVuZ3RoO1xuICAvLyAzIG9yIG1vcmUgc2NhdHRlciBnZW1zIGFjdGl2YXRlIHRoZSBCb251cyBSb3VuZCFcbiAgY29uc3QgYWN0aXZhdGVzQm9udXNSb3VuZCA9IGdlbUNvdW50ID49IDM7XG5cbiAgaWYgKGdlbUNvdW50ID49IDIpIHtcbiAgICBsZXQgZ2VtTXVsdCA9IDI7IC8vIDIgZ2VtcyA9IDJ4XG4gICAgaWYgKGdlbUNvdW50ID09PSAzKSBnZW1NdWx0ID0gMTA7IC8vIDMgZ2VtcyA9IDEweCArIEJvbnVzIFJvdW5kXG4gICAgZWxzZSBpZiAoZ2VtQ291bnQgPT09IDQpIGdlbU11bHQgPSAzNTsgLy8gNCBnZW1zID0gMzV4ICsgQm9udXMgUm91bmRcbiAgICBlbHNlIGlmIChnZW1Db3VudCA+PSA1KSBnZW1NdWx0ID0gMTUwOyAvLyA1IGdlbXMgPSAxNTB4ICsgQm9udXMgUm91bmRcblxuICAgIGNvbnN0IHBheW91dCA9IE1hdGgucm91bmQodG90YWxCZXQgKiBnZW1NdWx0KTtcbiAgICBzY2F0dGVyV2luID0ge1xuICAgICAgY291bnQ6IGdlbUNvdW50LFxuICAgICAgYWN0aXZhdGVzQm9udXNSb3VuZCxcbiAgICAgIG11bHRpcGxpZXI6IGdlbU11bHQsXG4gICAgICBwYXlvdXQsXG4gICAgICBwb3NpdGlvbnM6IGdlbVBvc2l0aW9uc1xuICAgIH07XG4gIH1cblxuICAvLyBDYWxjdWxhdGUgQmFzZSBXaW5cbiAgY29uc3QgYmFzZUxpbmVXaW4gPSBsaW5lV2lucy5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3Vyci5iYXNlUGF5b3V0LCAwKTtcbiAgY29uc3QgYmFzZVNjYXR0ZXJXaW4gPSBzY2F0dGVyV2luID8gc2NhdHRlcldpbi5wYXlvdXQgOiAwO1xuICBjb25zdCBiYXNlV2luID0gYmFzZUxpbmVXaW4gKyBiYXNlU2NhdHRlcldpbjtcblxuICAvLyBEZXRlcm1pbmUgbXVsdGlwbGllcjogaWYgd2luIGV4aXN0cywgcm9sbCBtdWx0aXBsaWVyIChvciB1c2UgZm9yY2VkKVxuICBjb25zdCBtdWx0aXBsaWVyID0gZm9yY2VkTXVsdGlwbGllciAhPT0gdW5kZWZpbmVkID8gZm9yY2VkTXVsdGlwbGllciA6IChiYXNlV2luID4gMCA/IGRldGVybWluZU11bHRpcGxpZXIoKSA6IDEpO1xuXG4gIC8vIEFwcGx5IG11bHRpcGxpZXIgdG8gbGluZSB3aW5zIGFuZCBmaW5hbCB0b3RhbFxuICBjb25zdCBmaW5hbExpbmVXaW5zID0gbGluZVdpbnMubWFwKCh3KSA9PiAoe1xuICAgIC4uLncsXG4gICAgbXVsdGlwbGllcixcbiAgICB0b3RhbFBheW91dDogTWF0aC5yb3VuZCh3LmJhc2VQYXlvdXQgKiBtdWx0aXBsaWVyKVxuICB9KSk7XG5cbiAgY29uc3QgdG90YWxXaW4gPSBNYXRoLnJvdW5kKGJhc2VXaW4gKiBtdWx0aXBsaWVyKTtcbiAgY29uc3QgaXNCaWdXaW4gPSB0b3RhbFdpbiA+PSB0b3RhbEJldCAqIDUgJiYgdG90YWxXaW4gPiAwO1xuICBjb25zdCBpc0phY2twb3QgPSB0b3RhbFdpbiA+PSB0b3RhbEJldCAqIDI1IHx8IG11bHRpcGxpZXIgPj0gMTA7XG5cbiAgcmV0dXJuIHtcbiAgICBncmlkLFxuICAgIHRvdGFsQmV0LFxuICAgIGxpbmVXaW5zOiBmaW5hbExpbmVXaW5zLFxuICAgIHNjYXR0ZXJXaW4sXG4gICAgYmFzZVdpbixcbiAgICBtdWx0aXBsaWVyLFxuICAgIHRvdGFsV2luLFxuICAgIGlzSmFja3BvdCxcbiAgICBpc0JpZ1dpbixcbiAgICBhY3RpdmF0ZXNCb251c1JvdW5kXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dpbm5pbmdDZWxsKFxuICByb3c6IG51bWJlcixcbiAgY29sOiBudW1iZXIsXG4gIGV2YWx1YXRpb246IFNwaW5FdmFsdWF0aW9uIHwgbnVsbFxuKTogYm9vbGVhbiB7XG4gIGlmICghZXZhbHVhdGlvbikgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAoY29uc3Qgd2luIG9mIGV2YWx1YXRpb24ubGluZVdpbnMpIHtcbiAgICBpZiAod2luLm1hdGNoaW5nUG9zaXRpb25zLnNvbWUoKFtyLCBjXSkgPT4gciA9PT0gcm93ICYmIGMgPT09IGNvbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChldmFsdWF0aW9uLnNjYXR0ZXJXaW4pIHtcbiAgICBpZiAoZXZhbHVhdGlvbi5zY2F0dGVyV2luLnBvc2l0aW9ucy5zb21lKChbciwgY10pID0+IHIgPT09IHJvdyAmJiBjID09PSBjb2wpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iXX0=