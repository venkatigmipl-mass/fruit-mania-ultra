/**
* Web Audio API sound synthesizer for FRUIT MANIA ULTRA.
* Zero external audio files, works completely offline with zero network latency.
*/
class SoundSynthesizer {
	constructor() {
		this.ctx = null;
		this.soundEnabled = true;
	}
	initCtx() {
		if (!this.ctx) {
			const AudioCtx = window.AudioContext || window.webkitAudioContext;
			if (AudioCtx) {
				this.ctx = new AudioCtx();
			}
		}
		if (this.ctx && this.ctx.state === "suspended") {
			this.ctx.resume();
		}
	}
	setSoundEnabled(enabled) {
		this.soundEnabled = enabled;
	}
	isEnabled() {
		return this.soundEnabled;
	}
	/**
	* Tactile button click
	*/
	playButtonClick() {
		if (!this.soundEnabled) return;
		try {
			this.initCtx();
			if (!this.ctx) return;
			const osc = this.ctx.createOscillator();
			const gain = this.ctx.createGain();
			osc.type = "triangle";
			osc.frequency.setValueAtTime(450, this.ctx.currentTime);
			osc.frequency.exponentialRampToValueAtTime(750, this.ctx.currentTime + .05);
			gain.gain.setValueAtTime(.15, this.ctx.currentTime);
			gain.gain.exponentialRampToValueAtTime(.01, this.ctx.currentTime + .05);
			osc.connect(gain);
			gain.connect(this.ctx.destination);
			osc.start();
			osc.stop(this.ctx.currentTime + .05);
		} catch {}
	}
	/**
	* Reel spinning whir
	*/
	playSpinStart() {
		if (!this.soundEnabled) return;
		try {
			this.initCtx();
			if (!this.ctx) return;
			const osc = this.ctx.createOscillator();
			const gain = this.ctx.createGain();
			osc.type = "sawtooth";
			osc.frequency.setValueAtTime(140, this.ctx.currentTime);
			osc.frequency.exponentialRampToValueAtTime(580, this.ctx.currentTime + .24);
			gain.gain.setValueAtTime(.12, this.ctx.currentTime);
			gain.gain.exponentialRampToValueAtTime(.01, this.ctx.currentTime + .24);
			osc.connect(gain);
			gain.connect(this.ctx.destination);
			osc.start();
			osc.stop(this.ctx.currentTime + .24);
		} catch {}
	}
	/**
	* Mechanical reel stop clunk with pitch escalation
	*/
	playReelStop(reelIndex = 0) {
		if (!this.soundEnabled) return;
		try {
			this.initCtx();
			if (!this.ctx) return;
			const osc = this.ctx.createOscillator();
			const gain = this.ctx.createGain();
			const baseFreq = 220 + reelIndex * 40;
			osc.type = "sine";
			osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
			osc.frequency.exponentialRampToValueAtTime(75, this.ctx.currentTime + .1);
			gain.gain.setValueAtTime(.28, this.ctx.currentTime);
			gain.gain.exponentialRampToValueAtTime(.01, this.ctx.currentTime + .1);
			osc.connect(gain);
			gain.connect(this.ctx.destination);
			osc.start();
			osc.stop(this.ctx.currentTime + .1);
		} catch {}
	}
	/**
	* Small win payline chime
	*/
	playSmallWin() {
		if (!this.soundEnabled) return;
		try {
			this.initCtx();
			if (!this.ctx) return;
			const notes = [
				523.25,
				659.25,
				783.99
			];
			notes.forEach((freq, i) => {
				const osc = this.ctx.createOscillator();
				const gain = this.ctx.createGain();
				osc.type = "triangle";
				osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * .08);
				gain.gain.setValueAtTime(.18, this.ctx.currentTime + i * .08);
				gain.gain.exponentialRampToValueAtTime(.01, this.ctx.currentTime + i * .08 + .2);
				osc.connect(gain);
				gain.connect(this.ctx.destination);
				osc.start(this.ctx.currentTime + i * .08);
				osc.stop(this.ctx.currentTime + i * .08 + .2);
			});
		} catch {}
	}
	/**
	* Multiplier reveal sound effect
	*/
	playMultiplierPop(multiplier = 2) {
		if (!this.soundEnabled) return;
		try {
			this.initCtx();
			if (!this.ctx) return;
			const baseFreq = 600 + multiplier * 120;
			const osc = this.ctx.createOscillator();
			const gain = this.ctx.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
			osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, this.ctx.currentTime + .18);
			gain.gain.setValueAtTime(.22, this.ctx.currentTime);
			gain.gain.exponentialRampToValueAtTime(.01, this.ctx.currentTime + .18);
			osc.connect(gain);
			gain.connect(this.ctx.destination);
			osc.start();
			osc.stop(this.ctx.currentTime + .18);
		} catch {}
	}
	/**
	* Wild Star magical sparkle shimmer
	*/
	playWildStar() {
		if (!this.soundEnabled) return;
		try {
			this.initCtx();
			if (!this.ctx) return;
			const freqs = [
				880,
				1108.73,
				1318.51,
				1760
			];
			freqs.forEach((freq, idx) => {
				const osc = this.ctx.createOscillator();
				const gain = this.ctx.createGain();
				osc.type = "sine";
				osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * .05);
				gain.gain.setValueAtTime(.12, this.ctx.currentTime + idx * .05);
				gain.gain.exponentialRampToValueAtTime(.01, this.ctx.currentTime + idx * .05 + .22);
				osc.connect(gain);
				gain.connect(this.ctx.destination);
				osc.start(this.ctx.currentTime + idx * .05);
				osc.stop(this.ctx.currentTime + idx * .05 + .22);
			});
		} catch {}
	}
	/**
	* Bonus Round Activation fanfare
	*/
	playBonusRoundActivation() {
		if (!this.soundEnabled) return;
		try {
			this.initCtx();
			if (!this.ctx) return;
			const notes = [
				440,
				554.37,
				659.25,
				880,
				1108.73,
				1318.51
			];
			let t = this.ctx.currentTime;
			notes.forEach((freq) => {
				const osc = this.ctx.createOscillator();
				const gain = this.ctx.createGain();
				osc.type = "triangle";
				osc.frequency.setValueAtTime(freq, t);
				gain.gain.setValueAtTime(.22, t);
				gain.gain.exponentialRampToValueAtTime(.01, t + .22);
				osc.connect(gain);
				gain.connect(this.ctx.destination);
				osc.start(t);
				osc.stop(t + .22);
				t += .07;
			});
		} catch {}
	}
	/**
	* Large virtual-point win celebration
	*/
	playBigWin() {
		if (!this.soundEnabled) return;
		try {
			this.initCtx();
			if (!this.ctx) return;
			const melody = [
				{
					f: 523.25,
					d: .12
				},
				{
					f: 659.25,
					d: .12
				},
				{
					f: 783.99,
					d: .12
				},
				{
					f: 1046.5,
					d: .2
				},
				{
					f: 880,
					d: .12
				},
				{
					f: 1046.5,
					d: .12
				},
				{
					f: 1318.51,
					d: .45
				}
			];
			let t = this.ctx.currentTime;
			melody.forEach((note) => {
				const osc = this.ctx.createOscillator();
				const gain = this.ctx.createGain();
				osc.type = "triangle";
				osc.frequency.setValueAtTime(note.f, t);
				gain.gain.setValueAtTime(.25, t);
				gain.gain.exponentialRampToValueAtTime(.01, t + note.d);
				osc.connect(gain);
				gain.connect(this.ctx.destination);
				osc.start(t);
				osc.stop(t + note.d);
				t += note.d * .85;
			});
		} catch {}
	}
}
export const sound = new SoundSynthesizer();

//# sourceMappingURL=data:application/json;base64,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QkFBNkIsS0FBTSxJQUFJLEtBQUssQ0FBQztJQUV2RCxJQUFJLFFBQVEsSUFBSTtJQUNoQixLQUFLLFFBQVEsS0FBSyxJQUFLLFdBQVc7SUFFbEMsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUM7SUFFbkIsS0FBSyxLQUFLLElBQUk7R0FDaEIsQ0FBQztFQUNILFFBQVEsQ0FFUjtDQUNGO0FBQ0Y7QUFFQSxPQUFPLE1BQU0sUUFBUSxJQUFJLGlCQUFpQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJhdWRpby50cyJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdlYiBBdWRpbyBBUEkgc291bmQgc3ludGhlc2l6ZXIgZm9yIEZSVUlUIE1BTklBIFVMVFJBLlxuICogWmVybyBleHRlcm5hbCBhdWRpbyBmaWxlcywgd29ya3MgY29tcGxldGVseSBvZmZsaW5lIHdpdGggemVybyBuZXR3b3JrIGxhdGVuY3kuXG4gKi9cblxuY2xhc3MgU291bmRTeW50aGVzaXplciB7XG4gIHByaXZhdGUgY3R4OiBBdWRpb0NvbnRleHQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzb3VuZEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgaW5pdEN0eCgpIHtcbiAgICBpZiAoIXRoaXMuY3R4KSB7XG4gICAgICBjb25zdCBBdWRpb0N0eCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgKHdpbmRvdyBhcyBhbnkpLndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICAgIGlmIChBdWRpb0N0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IG5ldyBBdWRpb0N0eCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jdHggJiYgdGhpcy5jdHguc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgICB0aGlzLmN0eC5yZXN1bWUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0U291bmRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNvdW5kRW5hYmxlZCA9IGVuYWJsZWQ7XG4gIH1cblxuICBwdWJsaWMgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNvdW5kRW5hYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWN0aWxlIGJ1dHRvbiBjbGlja1xuICAgKi9cbiAgcHVibGljIHBsYXlCdXR0b25DbGljaygpIHtcbiAgICBpZiAoIXRoaXMuc291bmRFbmFibGVkKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaW5pdEN0eCgpO1xuICAgICAgaWYgKCF0aGlzLmN0eCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBvc2MgPSB0aGlzLmN0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgICBjb25zdCBnYWluID0gdGhpcy5jdHguY3JlYXRlR2FpbigpO1xuXG4gICAgICBvc2MudHlwZSA9ICd0cmlhbmdsZSc7XG4gICAgICBvc2MuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKDQ1MCwgdGhpcy5jdHguY3VycmVudFRpbWUpO1xuICAgICAgb3NjLmZyZXF1ZW5jeS5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDc1MCwgdGhpcy5jdHguY3VycmVudFRpbWUgKyAwLjA1KTtcblxuICAgICAgZ2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKDAuMTUsIHRoaXMuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDEsIHRoaXMuY3R4LmN1cnJlbnRUaW1lICsgMC4wNSk7XG5cbiAgICAgIG9zYy5jb25uZWN0KGdhaW4pO1xuICAgICAgZ2Fpbi5jb25uZWN0KHRoaXMuY3R4LmRlc3RpbmF0aW9uKTtcblxuICAgICAgb3NjLnN0YXJ0KCk7XG4gICAgICBvc2Muc3RvcCh0aGlzLmN0eC5jdXJyZW50VGltZSArIDAuMDUpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gaWdub3JlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZWwgc3Bpbm5pbmcgd2hpclxuICAgKi9cbiAgcHVibGljIHBsYXlTcGluU3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLnNvdW5kRW5hYmxlZCkgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmluaXRDdHgoKTtcbiAgICAgIGlmICghdGhpcy5jdHgpIHJldHVybjtcblxuICAgICAgY29uc3Qgb3NjID0gdGhpcy5jdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgICAgY29uc3QgZ2FpbiA9IHRoaXMuY3R4LmNyZWF0ZUdhaW4oKTtcblxuICAgICAgb3NjLnR5cGUgPSAnc2F3dG9vdGgnO1xuICAgICAgb3NjLmZyZXF1ZW5jeS5zZXRWYWx1ZUF0VGltZSgxNDAsIHRoaXMuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgIG9zYy5mcmVxdWVuY3kuZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSg1ODAsIHRoaXMuY3R4LmN1cnJlbnRUaW1lICsgMC4yNCk7XG5cbiAgICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjEyLCB0aGlzLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAxLCB0aGlzLmN0eC5jdXJyZW50VGltZSArIDAuMjQpO1xuXG4gICAgICBvc2MuY29ubmVjdChnYWluKTtcbiAgICAgIGdhaW4uY29ubmVjdCh0aGlzLmN0eC5kZXN0aW5hdGlvbik7XG5cbiAgICAgIG9zYy5zdGFydCgpO1xuICAgICAgb3NjLnN0b3AodGhpcy5jdHguY3VycmVudFRpbWUgKyAwLjI0KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZWNoYW5pY2FsIHJlZWwgc3RvcCBjbHVuayB3aXRoIHBpdGNoIGVzY2FsYXRpb25cbiAgICovXG4gIHB1YmxpYyBwbGF5UmVlbFN0b3AocmVlbEluZGV4OiBudW1iZXIgPSAwKSB7XG4gICAgaWYgKCF0aGlzLnNvdW5kRW5hYmxlZCkgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmluaXRDdHgoKTtcbiAgICAgIGlmICghdGhpcy5jdHgpIHJldHVybjtcblxuICAgICAgY29uc3Qgb3NjID0gdGhpcy5jdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgICAgY29uc3QgZ2FpbiA9IHRoaXMuY3R4LmNyZWF0ZUdhaW4oKTtcblxuICAgICAgY29uc3QgYmFzZUZyZXEgPSAyMjAgKyByZWVsSW5kZXggKiA0MDtcbiAgICAgIG9zYy50eXBlID0gJ3NpbmUnO1xuICAgICAgb3NjLmZyZXF1ZW5jeS5zZXRWYWx1ZUF0VGltZShiYXNlRnJlcSwgdGhpcy5jdHguY3VycmVudFRpbWUpO1xuICAgICAgb3NjLmZyZXF1ZW5jeS5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDc1LCB0aGlzLmN0eC5jdXJyZW50VGltZSArIDAuMSk7XG5cbiAgICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjI4LCB0aGlzLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAxLCB0aGlzLmN0eC5jdXJyZW50VGltZSArIDAuMSk7XG5cbiAgICAgIG9zYy5jb25uZWN0KGdhaW4pO1xuICAgICAgZ2Fpbi5jb25uZWN0KHRoaXMuY3R4LmRlc3RpbmF0aW9uKTtcblxuICAgICAgb3NjLnN0YXJ0KCk7XG4gICAgICBvc2Muc3RvcCh0aGlzLmN0eC5jdXJyZW50VGltZSArIDAuMSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBpZ25vcmVcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU21hbGwgd2luIHBheWxpbmUgY2hpbWVcbiAgICovXG4gIHB1YmxpYyBwbGF5U21hbGxXaW4oKSB7XG4gICAgaWYgKCF0aGlzLnNvdW5kRW5hYmxlZCkgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmluaXRDdHgoKTtcbiAgICAgIGlmICghdGhpcy5jdHgpIHJldHVybjtcblxuICAgICAgY29uc3Qgbm90ZXMgPSBbNTIzLjI1LCA2NTkuMjUsIDc4My45OV07IC8vIEM1LCBFNSwgRzVcbiAgICAgIG5vdGVzLmZvckVhY2goKGZyZXEsIGkpID0+IHtcbiAgICAgICAgY29uc3Qgb3NjID0gdGhpcy5jdHghLmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICAgICAgY29uc3QgZ2FpbiA9IHRoaXMuY3R4IS5jcmVhdGVHYWluKCk7XG5cbiAgICAgICAgb3NjLnR5cGUgPSAndHJpYW5nbGUnO1xuICAgICAgICBvc2MuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKGZyZXEsIHRoaXMuY3R4IS5jdXJyZW50VGltZSArIGkgKiAwLjA4KTtcblxuICAgICAgICBnYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4xOCwgdGhpcy5jdHghLmN1cnJlbnRUaW1lICsgaSAqIDAuMDgpO1xuICAgICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAxLCB0aGlzLmN0eCEuY3VycmVudFRpbWUgKyBpICogMC4wOCArIDAuMik7XG5cbiAgICAgICAgb3NjLmNvbm5lY3QoZ2Fpbik7XG4gICAgICAgIGdhaW4uY29ubmVjdCh0aGlzLmN0eCEuZGVzdGluYXRpb24pO1xuXG4gICAgICAgIG9zYy5zdGFydCh0aGlzLmN0eCEuY3VycmVudFRpbWUgKyBpICogMC4wOCk7XG4gICAgICAgIG9zYy5zdG9wKHRoaXMuY3R4IS5jdXJyZW50VGltZSArIGkgKiAwLjA4ICsgMC4yKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gaWdub3JlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE11bHRpcGxpZXIgcmV2ZWFsIHNvdW5kIGVmZmVjdFxuICAgKi9cbiAgcHVibGljIHBsYXlNdWx0aXBsaWVyUG9wKG11bHRpcGxpZXI6IG51bWJlciA9IDIpIHtcbiAgICBpZiAoIXRoaXMuc291bmRFbmFibGVkKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaW5pdEN0eCgpO1xuICAgICAgaWYgKCF0aGlzLmN0eCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBiYXNlRnJlcSA9IDYwMCArIG11bHRpcGxpZXIgKiAxMjA7XG4gICAgICBjb25zdCBvc2MgPSB0aGlzLmN0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgICBjb25zdCBnYWluID0gdGhpcy5jdHguY3JlYXRlR2FpbigpO1xuXG4gICAgICBvc2MudHlwZSA9ICdzaW5lJztcbiAgICAgIG9zYy5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoYmFzZUZyZXEsIHRoaXMuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgIG9zYy5mcmVxdWVuY3kuZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZShiYXNlRnJlcSAqIDEuNSwgdGhpcy5jdHguY3VycmVudFRpbWUgKyAwLjE4KTtcblxuICAgICAgZ2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKDAuMjIsIHRoaXMuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDEsIHRoaXMuY3R4LmN1cnJlbnRUaW1lICsgMC4xOCk7XG5cbiAgICAgIG9zYy5jb25uZWN0KGdhaW4pO1xuICAgICAgZ2Fpbi5jb25uZWN0KHRoaXMuY3R4LmRlc3RpbmF0aW9uKTtcblxuICAgICAgb3NjLnN0YXJ0KCk7XG4gICAgICBvc2Muc3RvcCh0aGlzLmN0eC5jdXJyZW50VGltZSArIDAuMTgpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gaWdub3JlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdpbGQgU3RhciBtYWdpY2FsIHNwYXJrbGUgc2hpbW1lclxuICAgKi9cbiAgcHVibGljIHBsYXlXaWxkU3RhcigpIHtcbiAgICBpZiAoIXRoaXMuc291bmRFbmFibGVkKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaW5pdEN0eCgpO1xuICAgICAgaWYgKCF0aGlzLmN0eCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBmcmVxcyA9IFs4ODAsIDExMDguNzMsIDEzMTguNTEsIDE3NjBdO1xuICAgICAgZnJlcXMuZm9yRWFjaCgoZnJlcSwgaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IG9zYyA9IHRoaXMuY3R4IS5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgICAgIGNvbnN0IGdhaW4gPSB0aGlzLmN0eCEuY3JlYXRlR2FpbigpO1xuXG4gICAgICAgIG9zYy50eXBlID0gJ3NpbmUnO1xuICAgICAgICBvc2MuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKGZyZXEsIHRoaXMuY3R4IS5jdXJyZW50VGltZSArIGlkeCAqIDAuMDUpO1xuXG4gICAgICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjEyLCB0aGlzLmN0eCEuY3VycmVudFRpbWUgKyBpZHggKiAwLjA1KTtcbiAgICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMSwgdGhpcy5jdHghLmN1cnJlbnRUaW1lICsgaWR4ICogMC4wNSArIDAuMjIpO1xuXG4gICAgICAgIG9zYy5jb25uZWN0KGdhaW4pO1xuICAgICAgICBnYWluLmNvbm5lY3QodGhpcy5jdHghLmRlc3RpbmF0aW9uKTtcblxuICAgICAgICBvc2Muc3RhcnQodGhpcy5jdHghLmN1cnJlbnRUaW1lICsgaWR4ICogMC4wNSk7XG4gICAgICAgIG9zYy5zdG9wKHRoaXMuY3R4IS5jdXJyZW50VGltZSArIGlkeCAqIDAuMDUgKyAwLjIyKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gaWdub3JlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJvbnVzIFJvdW5kIEFjdGl2YXRpb24gZmFuZmFyZVxuICAgKi9cbiAgcHVibGljIHBsYXlCb251c1JvdW5kQWN0aXZhdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuc291bmRFbmFibGVkKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaW5pdEN0eCgpO1xuICAgICAgaWYgKCF0aGlzLmN0eCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBub3RlcyA9IFs0NDAsIDU1NC4zNywgNjU5LjI1LCA4ODAsIDExMDguNzMsIDEzMTguNTFdO1xuICAgICAgbGV0IHQgPSB0aGlzLmN0eC5jdXJyZW50VGltZTtcbiAgICAgIG5vdGVzLmZvckVhY2goKGZyZXEpID0+IHtcbiAgICAgICAgY29uc3Qgb3NjID0gdGhpcy5jdHghLmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICAgICAgY29uc3QgZ2FpbiA9IHRoaXMuY3R4IS5jcmVhdGVHYWluKCk7XG5cbiAgICAgICAgb3NjLnR5cGUgPSAndHJpYW5nbGUnO1xuICAgICAgICBvc2MuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKGZyZXEsIHQpO1xuXG4gICAgICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjIyLCB0KTtcbiAgICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMSwgdCArIDAuMjIpO1xuXG4gICAgICAgIG9zYy5jb25uZWN0KGdhaW4pO1xuICAgICAgICBnYWluLmNvbm5lY3QodGhpcy5jdHghLmRlc3RpbmF0aW9uKTtcblxuICAgICAgICBvc2Muc3RhcnQodCk7XG4gICAgICAgIG9zYy5zdG9wKHQgKyAwLjIyKTtcblxuICAgICAgICB0ICs9IDAuMDc7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMYXJnZSB2aXJ0dWFsLXBvaW50IHdpbiBjZWxlYnJhdGlvblxuICAgKi9cbiAgcHVibGljIHBsYXlCaWdXaW4oKSB7XG4gICAgaWYgKCF0aGlzLnNvdW5kRW5hYmxlZCkgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmluaXRDdHgoKTtcbiAgICAgIGlmICghdGhpcy5jdHgpIHJldHVybjtcblxuICAgICAgY29uc3QgbWVsb2R5ID0gW1xuICAgICAgICB7IGY6IDUyMy4yNSwgZDogMC4xMiB9LFxuICAgICAgICB7IGY6IDY1OS4yNSwgZDogMC4xMiB9LFxuICAgICAgICB7IGY6IDc4My45OSwgZDogMC4xMiB9LFxuICAgICAgICB7IGY6IDEwNDYuNSwgZDogMC4yIH0sXG4gICAgICAgIHsgZjogODgwLjAsIGQ6IDAuMTIgfSxcbiAgICAgICAgeyBmOiAxMDQ2LjUsIGQ6IDAuMTIgfSxcbiAgICAgICAgeyBmOiAxMzE4LjUxLCBkOiAwLjQ1IH1cbiAgICAgIF07XG5cbiAgICAgIGxldCB0ID0gdGhpcy5jdHguY3VycmVudFRpbWU7XG4gICAgICBtZWxvZHkuZm9yRWFjaCgobm90ZSkgPT4ge1xuICAgICAgICBjb25zdCBvc2MgPSB0aGlzLmN0eCEuY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgICAgICBjb25zdCBnYWluID0gdGhpcy5jdHghLmNyZWF0ZUdhaW4oKTtcblxuICAgICAgICBvc2MudHlwZSA9ICd0cmlhbmdsZSc7XG4gICAgICAgIG9zYy5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUobm90ZS5mLCB0KTtcblxuICAgICAgICBnYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4yNSwgdCk7XG4gICAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDEsIHQgKyBub3RlLmQpO1xuXG4gICAgICAgIG9zYy5jb25uZWN0KGdhaW4pO1xuICAgICAgICBnYWluLmNvbm5lY3QodGhpcy5jdHghLmRlc3RpbmF0aW9uKTtcblxuICAgICAgICBvc2Muc3RhcnQodCk7XG4gICAgICAgIG9zYy5zdG9wKHQgKyBub3RlLmQpO1xuXG4gICAgICAgIHQgKz0gbm90ZS5kICogMC44NTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gaWdub3JlXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzb3VuZCA9IG5ldyBTb3VuZFN5bnRoZXNpemVyKCk7XG4iXX0=