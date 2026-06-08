import { useEffect as e, useRef as t, useState as n } from "react";
//#region \0rolldown/runtime.js
var r = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), i = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), a = /* @__PURE__ */ r(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), o = /* @__PURE__ */ r(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function a(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, i, a, s, u) {
			var f = n.children;
			if (f !== void 0) if (a) if (M(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), R[f + a] = !0);
			}
			if (f = null, i !== void 0 && (r(i), f = "" + i), c(n) && (r(n.key), f = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return f && l(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, i, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = i("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, s)(), L = N(a(s)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		};
	})();
})), s = (/* @__PURE__ */ r(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = a() : t.exports = o();
})))(), c = {
	classic: {
		name: "Classic green",
		felt: "radial-gradient(ellipse at 50% 40%, #2d6a4f 0%, #1b4332 60%, #0d2818 100%)",
		feltEdge: "#5c3d1e",
		cardBack: "repeating-linear-gradient(45deg,#1a1a6e 0px,#1a1a6e 4px,#2222aa 4px,#2222aa 8px)",
		cardFace: "#fffdf5",
		cardText: "#1a1a1a",
		chipColors: [
			"#e63946",
			"#457b9d",
			"#2d6a4f",
			"#e9c46a",
			"#6d6875"
		]
	},
	midnight: {
		name: "Midnight blue",
		felt: "radial-gradient(ellipse at 50% 40%, #1a2a4a 0%, #0d1b2e 60%, #060d18 100%)",
		feltEdge: "#2a1a3e",
		cardBack: "repeating-linear-gradient(135deg,#3a0050 0px,#3a0050 4px,#5a0078 4px,#5a0078 8px)",
		cardFace: "#f8f5ff",
		cardText: "#0d0d1a",
		chipColors: [
			"#c77dff",
			"#4cc9f0",
			"#f72585",
			"#ffd166",
			"#06d6a0"
		]
	},
	crimson: {
		name: "Crimson velvet",
		felt: "radial-gradient(ellipse at 50% 40%, #7b0d1e 0%, #4a0010 60%, #1e0007 100%)",
		feltEdge: "#3d1a00",
		cardBack: "repeating-linear-gradient(45deg,#1c0008 0px,#1c0008 4px,#3d0012 4px,#3d0012 8px)",
		cardFace: "#fff8f8",
		cardText: "#1a0008",
		chipColors: [
			"#ff6b6b",
			"#ffd93d",
			"#6bcb77",
			"#4d96ff",
			"#c77dff"
		]
	}
}, l = [
	"♠",
	"♥",
	"♦",
	"♣"
], u = [
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K",
	"A"
], d = {};
u.forEach((e, t) => {
	d[e] = t + 2;
});
var f = new Set(["♥", "♦"]);
function p() {
	let e = [];
	for (let t of l) for (let n of u) e.push({
		r: n,
		s: t
	});
	return e;
}
function m(e) {
	let t = [...e];
	for (let e = t.length - 1; e > 0; e--) {
		let n = Math.floor(Math.random() * (e + 1)), r = t[e];
		t[e] = t[n], t[n] = r;
	}
	return t;
}
function h(e, t) {
	if (t === e.length) return [e];
	if (t === 1) return e.map((e) => [e]);
	let n = [];
	for (let r = 0; r <= e.length - t; r++) for (let i of h(e.slice(r + 1), t - 1)) n.push([e[r], ...i]);
	return n;
}
function g(e) {
	let t = e.map((e) => d[e.r]).sort((e, t) => t - e), n = e.map((e) => e.s), r = n.every((e) => e === n[0]), i = [...new Set(t)].map((e) => ({
		v: e,
		n: t.filter((t) => t === e).length
	})).sort((e, t) => t.n - e.n || t.v - e.v), a = i.map((e) => e.v * 100 + e.n).join(""), o = [...new Set(t)].sort((e, t) => t - e), s = !1;
	return o.length >= 5 && (o[0] - o[4] === 4 ? s = o[0] : o[0] === 14 && o[1] === 5 && o[2] === 4 && o[3] === 3 && o[4] === 2 && (s = 5)), r && s ? {
		rank: 8,
		name: "Straight flush",
		tb: String(s)
	} : i[0].n === 4 ? {
		rank: 7,
		name: "Four of a kind",
		tb: a
	} : i[0].n === 3 && i[1] && i[1].n === 2 ? {
		rank: 6,
		name: "Full house",
		tb: a
	} : r ? {
		rank: 5,
		name: "Flush",
		tb: a
	} : s ? {
		rank: 4,
		name: "Straight",
		tb: String(s)
	} : i[0].n === 3 ? {
		rank: 3,
		name: "Three of a kind",
		tb: a
	} : i[0].n === 2 && i[1] && i[1].n === 2 ? {
		rank: 2,
		name: "Two pair",
		tb: a
	} : i[0].n === 2 ? {
		rank: 1,
		name: "One pair",
		tb: a
	} : {
		rank: 0,
		name: "High card",
		tb: a
	};
}
function _(e) {
	if (!e || e.length < 2) return {
		rank: -1,
		name: "",
		tb: ""
	};
	let t = e.length === 5 ? [e] : h(e, 5), n = null;
	for (let e of t) {
		let t = g(e);
		(!n || t.rank > n.rank || t.rank === n.rank && t.tb > n.tb) && (n = t);
	}
	return n;
}
var v = null;
function y() {
	return v ||= new (window.AudioContext || window.webkitAudioContext)(), v.state === "suspended" && v.resume(), v;
}
function b(e) {
	try {
		let t = y();
		for (let n = 0; n < e; n++) {
			let e = t.currentTime + n * .07, r = t.createGain();
			r.gain.setValueAtTime(.35, e), r.gain.exponentialRampToValueAtTime(.001, e + .16);
			let i = t.createOscillator();
			i.type = "triangle", i.frequency.setValueAtTime(850 + Math.random() * 350, e), i.frequency.exponentialRampToValueAtTime(280 + Math.random() * 80, e + .13), i.connect(r), r.connect(t.destination), i.start(e), i.stop(e + .16);
		}
	} catch {}
}
function x() {
	try {
		let e = y(), t = e.createBuffer(1, Math.floor(e.sampleRate * .05), e.sampleRate), n = t.getChannelData(0);
		for (let e = 0; e < n.length; e++) n[e] = (Math.random() * 2 - 1) * (1 - e / n.length) ** 3;
		let r = e.createBufferSource();
		r.buffer = t;
		let i = e.createGain();
		i.gain.setValueAtTime(.3, e.currentTime), i.gain.exponentialRampToValueAtTime(.001, e.currentTime + .05);
		let a = e.createBiquadFilter();
		a.type = "bandpass", a.frequency.value = 2e3, a.Q.value = 1, r.connect(a), a.connect(i), i.connect(e.destination), r.start();
	} catch {}
}
function S() {
	try {
		let e = y(), t = e.createBuffer(1, Math.floor(e.sampleRate * .09), e.sampleRate), n = t.getChannelData(0);
		for (let e = 0; e < n.length; e++) n[e] = (Math.random() * 2 - 1) * (1 - e / n.length) ** 2 * .4;
		let r = e.createBufferSource();
		r.buffer = t;
		let i = e.createGain();
		i.gain.setValueAtTime(.2, e.currentTime);
		let a = e.createBiquadFilter();
		a.type = "lowpass", a.frequency.value = 800, r.connect(a), a.connect(i), i.connect(e.destination), r.start();
	} catch {}
}
function C() {
	try {
		let e = y();
		[
			440,
			554,
			659,
			880
		].forEach((t, n) => {
			let r = e.createOscillator();
			r.type = "sine", r.frequency.value = t;
			let i = e.createGain();
			i.gain.setValueAtTime(0, e.currentTime + n * .08), i.gain.linearRampToValueAtTime(.2, e.currentTime + n * .08 + .05), i.gain.exponentialRampToValueAtTime(.001, e.currentTime + n * .08 + .35), r.connect(i), i.connect(e.destination), r.start(e.currentTime + n * .08), r.stop(e.currentTime + n * .08 + .35);
		});
	} catch {}
}
var w = {
	gto: {
		name: "GTO",
		aggr: .5,
		tight: .5,
		bluff: .25,
		tells: !1
	},
	tag: {
		name: "TAG",
		aggr: .6,
		tight: .7,
		bluff: .2,
		tells: !0
	},
	lag: {
		name: "LAG",
		aggr: .8,
		tight: .3,
		bluff: .4,
		tells: !0
	},
	nit: {
		name: "Nit",
		aggr: .2,
		tight: .9,
		bluff: .05,
		tells: !0
	},
	fish: {
		name: "Fish",
		aggr: .4,
		tight: .2,
		bluff: .5,
		tells: !0
	},
	maniac: {
		name: "Maniac",
		aggr: .95,
		tight: .1,
		bluff: .7,
		tells: !0
	}
};
function T(e, t) {
	if (!e || e.length < 2) return 0;
	let n = [...e, ...t];
	if (n.length < 5) {
		let t = e.map((e) => d[e.r]).sort((e, t) => t - e), n = t[0], r = t[1], i = e[0].s === e[1].s, a = n / 14;
		return n === r && (a = .5 + a * .5), i && (a += .05), a -= (n - r) * .03, Math.max(0, Math.min(1, a));
	}
	return (_(n).rank + 1) / 9;
}
function E(e, t, n, r) {
	let i = w[n] || w.gto, a = r && i.tells, { pot: o, toCall: s, community: c, bigBlind: l } = t, u = T(e.cards, c), d = s > 0 ? o / (o + s) : 1, f = u + (Math.random() - .5) * .1 * (1 - i.tight), p = 800 + Math.random() * 1200;
	a && (f > .75 && (p = Math.random() < .3 ? p * 2.5 : p * .6), f < .3 && s === 0 && (p *= .5), f < .25 && s > 0 && Math.random() < i.bluff && (p *= 1.8));
	let m, h = 0, g = Math.max(l * 2, s * 2);
	if (s === 0) if (f > .55 + (1 - i.aggr) * .2 || Math.random() < i.bluff * .4) {
		m = "raise";
		let t = f > .7 ? .75 : .5, n = a ? (Math.random() - .5) * .3 : 0;
		h = Math.max(g, Math.min(Math.round(o * (t + n) / l) * l, e.chips));
	} else m = "check";
	else {
		let t = f - d;
		if (t > .15 * i.aggr && f > .65) {
			m = "raise";
			let t = a ? (Math.random() - .5) * .25 : 0;
			h = Math.max(g, Math.min(Math.round(s * (2 + f * 2 + t) / l) * l, e.chips));
		} else t > -.05 || Math.random() < i.bluff * .3 ? (m = "call", h = s) : m = "fold";
	}
	return {
		action: m,
		amount: h,
		thinkMs: p
	};
}
var D = -Math.PI / 4;
function O() {
	return {
		x: 50 + 40 * Math.cos(D),
		y: 50 + 34 * Math.sin(D)
	};
}
function k(e) {
	let t = [], n = e + 1;
	for (let r = 0; r < e; r++) {
		let e = Math.PI / 2 + 2 * Math.PI * (r / n), i = (e) => (e % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI), a = 2 * Math.PI / n * .8;
		Math.abs(i(e) - i(D)) < a && (e += 2 * Math.PI / n), t.push({
			x: 50 + 42 * Math.cos(e),
			y: 50 + 36 * Math.sin(e)
		});
	}
	return t;
}
function A({ card: e, faceDown: t, theme: n, small: r, highlight: i, extraStyle: a }) {
	let o = c[n] || c.classic, l = e && f.has(e.s), u = r ? 36 : 52, d = r ? 52 : 74, p = r ? 9 : 12;
	return /* @__PURE__ */ (0, s.jsxs)("div", {
		style: Object.assign({
			width: u,
			height: d,
			borderRadius: 5,
			display: "inline-flex",
			flexDirection: "column",
			justifyContent: "space-between",
			padding: "3px 4px",
			boxSizing: "border-box",
			flexShrink: 0,
			background: t ? o.cardBack : o.cardFace,
			border: i ? "2px solid #ffd700" : "1px solid rgba(0,0,0,0.3)",
			boxShadow: i ? "0 0 10px #ffd700,1px 2px 6px rgba(0,0,0,0.5)" : "1px 2px 6px rgba(0,0,0,0.5)"
		}, a || {}),
		children: [!t && e && /* @__PURE__ */ (0, s.jsxs)("span", {
			style: {
				fontSize: p,
				fontWeight: 700,
				color: l ? "#c0001a" : o.cardText,
				lineHeight: 1.1
			},
			children: [
				e.r,
				/* @__PURE__ */ (0, s.jsx)("br", {}),
				e.s
			]
		}), !t && e && /* @__PURE__ */ (0, s.jsxs)("span", {
			style: {
				fontSize: p,
				fontWeight: 700,
				color: l ? "#c0001a" : o.cardText,
				lineHeight: 1.1,
				alignSelf: "flex-end",
				transform: "rotate(180deg)"
			},
			children: [
				e.r,
				/* @__PURE__ */ (0, s.jsx)("br", {}),
				e.s
			]
		})]
	});
}
function j({ pos: e, cardsLeft: t, theme: n }) {
	let r = c[n] || c.classic, i = Math.max(1, Math.min(8, Math.floor(t / 6)));
	return /* @__PURE__ */ (0, s.jsxs)("div", {
		style: {
			position: "absolute",
			left: e.x + "%",
			top: e.y + "%",
			transform: "translate(-50%,-50%)",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: 6,
			zIndex: 12
		},
		children: [/* @__PURE__ */ (0, s.jsxs)("div", {
			style: {
				position: "relative",
				width: 44,
				height: 62
			},
			children: [Array.from({ length: i }).map((e, t) => /* @__PURE__ */ (0, s.jsx)("div", { style: {
				position: "absolute",
				left: t * .4,
				top: -(t * 1.1),
				width: 44,
				height: 62,
				borderRadius: 4,
				background: r.cardBack,
				border: "1px solid rgba(0,0,0,0.35)",
				boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
			} }, t)), /* @__PURE__ */ (0, s.jsx)("div", {
				style: {
					position: "absolute",
					bottom: -9,
					right: -9,
					background: "#111",
					border: "1px solid #444",
					borderRadius: 10,
					padding: "1px 5px",
					fontSize: 9,
					color: "#aaa",
					fontWeight: 700,
					zIndex: 2
				},
				children: t
			})]
		}), /* @__PURE__ */ (0, s.jsx)("div", {
			style: {
				background: "rgba(0,0,0,0.7)",
				border: "1px solid rgba(255,215,0,0.25)",
				borderRadius: 8,
				padding: "3px 8px",
				fontSize: 10,
				color: "#ffd700",
				fontWeight: 700,
				letterSpacing: .5,
				textAlign: "center"
			},
			children: "Dealer"
		})]
	});
}
function M({ player: e, pos: t, isHuman: n, isActive: r, isSB: i, isBB: a, theme: o, showCards: c, dealKey: l }) {
	let u = e.folded, d = t.x + "%", f = t.y + "%", p = r ? "#ffd700" : u ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.18)", m = r ? { animation: "seatGlow 1.6s ease-in-out infinite" } : {};
	return /* @__PURE__ */ (0, s.jsxs)("div", {
		style: {
			position: "absolute",
			left: d,
			top: f,
			transform: "translate(-50%,-50%)",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: 4,
			opacity: u ? .45 : 1,
			transition: "opacity 0.4s",
			zIndex: r ? 10 : 5
		},
		children: [/* @__PURE__ */ (0, s.jsx)("div", {
			style: {
				display: "flex",
				gap: 3,
				marginBottom: 2
			},
			children: (e.cards || []).map((t, i) => /* @__PURE__ */ (0, s.jsx)("div", {
				style: { animation: "cardDeal 0.28s cubic-bezier(.22,1,.36,1) " + String(i * .12) + "s both" },
				children: /* @__PURE__ */ (0, s.jsx)(A, {
					card: t,
					faceDown: !n && !c && !e.showCards,
					theme: o,
					small: !0,
					highlight: r && n,
					extraStyle: u ? {
						transform: "rotate(-12deg)",
						opacity: .5
					} : {}
				})
			}, String(l) + "-" + String(i)))
		}), /* @__PURE__ */ (0, s.jsxs)("div", {
			style: Object.assign({
				background: "rgba(0,0,0,0.78)",
				backdropFilter: "blur(6px)",
				border: "2px solid " + p,
				borderRadius: 10,
				padding: "4px 10px",
				minWidth: 82,
				textAlign: "center",
				transition: "border-color 0.2s,box-shadow 0.2s"
			}, m),
			children: [
				/* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						fontSize: 11,
						fontWeight: 700,
						color: u ? "#555" : n ? "#ffd700" : "#ddd",
						letterSpacing: .5,
						whiteSpace: "nowrap"
					},
					children: [
						e.name,
						i && /* @__PURE__ */ (0, s.jsx)("span", {
							style: {
								marginLeft: 3,
								background: "#3a86ff",
								color: "#fff",
								borderRadius: 8,
								padding: "0 4px",
								fontSize: 9
							},
							children: "SB"
						}),
						a && /* @__PURE__ */ (0, s.jsx)("span", {
							style: {
								marginLeft: 3,
								background: "#e63946",
								color: "#fff",
								borderRadius: 8,
								padding: "0 4px",
								fontSize: 9
							},
							children: "BB"
						})
					]
				}),
				/* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						fontSize: 12,
						color: "#f0c040",
						fontWeight: 600
					},
					children: ["$", e.chips.toLocaleString()]
				}),
				e.bet > 0 && /* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						fontSize: 10,
						color: "#888"
					},
					children: ["bet $", e.bet]
				}),
				u && /* @__PURE__ */ (0, s.jsx)("div", {
					style: {
						fontSize: 10,
						color: "#444",
						fontStyle: "italic"
					},
					children: "folded"
				}),
				e.isAllIn && /* @__PURE__ */ (0, s.jsx)("div", {
					style: {
						fontSize: 10,
						color: "#ff6b6b",
						fontWeight: 700,
						animation: "blink 0.8s ease-in-out infinite"
					},
					children: "ALL IN"
				}),
				e.thinking && /* @__PURE__ */ (0, s.jsx)("div", {
					style: {
						fontSize: 10,
						color: "#7ef",
						fontStyle: "italic",
						animation: "blink 1s ease-in-out infinite"
					},
					children: "thinking..."
				})
			]
		})]
	});
}
function N({ log: e, onClose: t }) {
	return /* @__PURE__ */ (0, s.jsx)("div", {
		style: {
			position: "absolute",
			inset: 0,
			background: "rgba(0,0,0,0.88)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: 100
		},
		children: /* @__PURE__ */ (0, s.jsxs)("div", {
			style: {
				background: "#111",
				border: "1px solid #333",
				borderRadius: 14,
				padding: 24,
				width: 480,
				maxHeight: "80vh",
				display: "flex",
				flexDirection: "column",
				boxShadow: "0 8px 40px rgba(0,0,0,0.7)"
			},
			children: [/* @__PURE__ */ (0, s.jsxs)("div", {
				style: {
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: 14
				},
				children: [/* @__PURE__ */ (0, s.jsx)("span", {
					style: {
						fontSize: 16,
						fontWeight: 700,
						color: "#ffd700",
						fontFamily: "Georgia,serif"
					},
					children: "Hand history"
				}), /* @__PURE__ */ (0, s.jsx)("button", {
					onClick: t,
					style: {
						background: "none",
						border: "none",
						color: "#666",
						fontSize: 20,
						cursor: "pointer"
					},
					children: "X"
				})]
			}), /* @__PURE__ */ (0, s.jsxs)("div", {
				style: {
					overflowY: "auto",
					flex: 1,
					fontFamily: "monospace",
					fontSize: 12,
					color: "#ccc",
					lineHeight: 1.8
				},
				children: [e.length === 0 && /* @__PURE__ */ (0, s.jsx)("div", {
					style: {
						color: "#444",
						fontStyle: "italic"
					},
					children: "No hands played yet."
				}), [...e].reverse().map((t, n) => /* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						borderBottom: "1px solid #1e1e1e",
						paddingBottom: 10,
						marginBottom: 10
					},
					children: [/* @__PURE__ */ (0, s.jsxs)("div", {
						style: {
							color: "#ffd700",
							fontWeight: 700,
							marginBottom: 4
						},
						children: [
							"Hand #",
							e.length - n,
							" - Pot: $",
							t.pot
						]
					}), t.events.map((e, t) => /* @__PURE__ */ (0, s.jsx)("div", {
						style: {
							color: e.col || "#666",
							paddingLeft: 10
						},
						children: e.text
					}, t))]
				}, n))]
			})]
		})
	});
}
var P = {
	background: "#2a2a2a",
	color: "#eee",
	border: "1px solid #555",
	borderRadius: 6,
	padding: "3px 6px",
	fontSize: 13
}, F = {
	background: "#2a2a2a",
	color: "#eee",
	border: "1px solid #555",
	borderRadius: 6,
	padding: "3px 6px",
	fontSize: 13,
	width: 130
};
function I({ config: e, onSave: t, onClose: r }) {
	let [i, a] = n(e), o = (e, t) => a((n) => Object.assign({}, n, { [e]: t })), l = Math.max(0, (i.numPlayers || 6) - 1);
	return /* @__PURE__ */ (0, s.jsx)("div", {
		style: {
			position: "absolute",
			inset: 0,
			background: "rgba(0,0,0,0.82)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: 100
		},
		children: /* @__PURE__ */ (0, s.jsxs)("div", {
			style: {
				background: "#161616",
				border: "1px solid #333",
				borderRadius: 14,
				padding: 28,
				width: 420,
				maxHeight: "85vh",
				overflowY: "auto",
				fontFamily: "Georgia,serif",
				color: "#eee",
				boxShadow: "0 8px 40px rgba(0,0,0,0.7)"
			},
			children: [
				/* @__PURE__ */ (0, s.jsx)("div", {
					style: {
						fontSize: 20,
						fontWeight: 700,
						marginBottom: 20,
						color: "#ffd700",
						letterSpacing: 1
					},
					children: "Settings"
				}),
				/* @__PURE__ */ (0, s.jsx)("div", {
					style: {
						fontSize: 11,
						color: "#ffd700",
						fontWeight: 700,
						letterSpacing: 1,
						marginBottom: 8,
						textTransform: "uppercase"
					},
					children: "Table"
				}),
				/* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: 6
					},
					children: [/* @__PURE__ */ (0, s.jsx)("span", {
						style: {
							fontSize: 13,
							color: "#ccc",
							minWidth: 110
						},
						children: "Theme"
					}), /* @__PURE__ */ (0, s.jsx)("select", {
						value: i.theme,
						onChange: (e) => o("theme", e.target.value),
						style: P,
						children: Object.entries(c).map(([e, t]) => /* @__PURE__ */ (0, s.jsx)("option", {
							value: e,
							children: t.name
						}, e))
					})]
				}),
				/* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: 6
					},
					children: [/* @__PURE__ */ (0, s.jsx)("span", {
						style: {
							fontSize: 13,
							color: "#ccc",
							minWidth: 110
						},
						children: "Custom felt"
					}), /* @__PURE__ */ (0, s.jsx)("input", {
						style: F,
						placeholder: "url(...) or CSS",
						value: i.customFelt || "",
						onChange: (e) => o("customFelt", e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: 16
					},
					children: [/* @__PURE__ */ (0, s.jsx)("span", {
						style: {
							fontSize: 13,
							color: "#ccc",
							minWidth: 110
						},
						children: "Custom card back"
					}), /* @__PURE__ */ (0, s.jsx)("input", {
						style: F,
						placeholder: "url(...) or CSS",
						value: i.customCardBack || "",
						onChange: (e) => o("customCardBack", e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, s.jsx)("div", {
					style: {
						fontSize: 11,
						color: "#ffd700",
						fontWeight: 700,
						letterSpacing: 1,
						marginBottom: 8,
						textTransform: "uppercase"
					},
					children: "Game"
				}),
				/* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: 6
					},
					children: [/* @__PURE__ */ (0, s.jsx)("span", {
						style: {
							fontSize: 13,
							color: "#ccc",
							minWidth: 110
						},
						children: "Players"
					}), /* @__PURE__ */ (0, s.jsx)("select", {
						value: i.numPlayers,
						onChange: (e) => o("numPlayers", +e.target.value),
						style: P,
						children: [
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9
						].map((e) => /* @__PURE__ */ (0, s.jsx)("option", {
							value: e,
							children: e
						}, e))
					})]
				}),
				/* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: 6
					},
					children: [/* @__PURE__ */ (0, s.jsx)("span", {
						style: {
							fontSize: 13,
							color: "#ccc",
							minWidth: 110
						},
						children: "Starting stack"
					}), /* @__PURE__ */ (0, s.jsx)("input", {
						style: F,
						type: "number",
						min: 100,
						step: 100,
						value: i.startStack,
						onChange: (e) => o("startStack", +e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: 6
					},
					children: [/* @__PURE__ */ (0, s.jsx)("span", {
						style: {
							fontSize: 13,
							color: "#ccc",
							minWidth: 110
						},
						children: "Small blind"
					}), /* @__PURE__ */ (0, s.jsx)("input", {
						style: F,
						type: "number",
						min: 1,
						step: 1,
						value: i.smallBlind,
						onChange: (e) => o("smallBlind", +e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: 6
					},
					children: [/* @__PURE__ */ (0, s.jsx)("span", {
						style: {
							fontSize: 13,
							color: "#ccc",
							minWidth: 110
						},
						children: "Escalating blinds"
					}), /* @__PURE__ */ (0, s.jsx)("input", {
						type: "checkbox",
						checked: !!i.escalating,
						onChange: (e) => o("escalating", e.target.checked),
						style: { accentColor: "#ffd700" }
					})]
				}),
				i.escalating && /* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: 6
					},
					children: [/* @__PURE__ */ (0, s.jsx)("span", {
						style: {
							fontSize: 13,
							color: "#ccc",
							minWidth: 110
						},
						children: "Hands per level"
					}), /* @__PURE__ */ (0, s.jsx)("input", {
						style: F,
						type: "number",
						min: 5,
						step: 5,
						value: i.blindLevel || 10,
						onChange: (e) => o("blindLevel", +e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, s.jsx)("div", {
					style: {
						fontSize: 11,
						color: "#ffd700",
						fontWeight: 700,
						letterSpacing: 1,
						marginBottom: 8,
						marginTop: 16,
						textTransform: "uppercase"
					},
					children: "AI opponents"
				}),
				Array.from({ length: l }).map((e, t) => {
					let n = (i.aiPersonalities || [])[t] || "tag", r = (i.aiTells || [])[t] !== !1;
					return /* @__PURE__ */ (0, s.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							marginBottom: 6
						},
						children: [/* @__PURE__ */ (0, s.jsx)("span", {
							style: {
								fontSize: 13,
								color: "#ccc",
								minWidth: 110
							},
							children: "Seat " + (t + 2)
						}), /* @__PURE__ */ (0, s.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 4
							},
							children: [
								/* @__PURE__ */ (0, s.jsx)("select", {
									value: n,
									onChange: (e) => {
										let n = [...i.aiPersonalities || []];
										n[t] = e.target.value, o("aiPersonalities", n);
									},
									style: P,
									children: Object.entries(w).map(([e, t]) => /* @__PURE__ */ (0, s.jsx)("option", {
										value: e,
										children: t.name
									}, e))
								}),
								/* @__PURE__ */ (0, s.jsx)("input", {
									type: "checkbox",
									title: "Enable tells",
									checked: r,
									onChange: (e) => {
										let n = [...i.aiTells || []];
										n[t] = e.target.checked, o("aiTells", n);
									},
									style: {
										accentColor: "#ffd700",
										marginLeft: 6
									}
								}),
								/* @__PURE__ */ (0, s.jsx)("span", {
									style: {
										fontSize: 10,
										color: "#666"
									},
									children: "tells"
								})
							]
						})]
					}, t);
				}),
				/* @__PURE__ */ (0, s.jsx)("div", {
					style: {
						fontSize: 11,
						color: "#ffd700",
						fontWeight: 700,
						letterSpacing: 1,
						marginBottom: 8,
						marginTop: 16,
						textTransform: "uppercase"
					},
					children: "Sound"
				}),
				/* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: 6
					},
					children: [/* @__PURE__ */ (0, s.jsx)("span", {
						style: {
							fontSize: 13,
							color: "#ccc",
							minWidth: 110
						},
						children: "Sound effects"
					}), /* @__PURE__ */ (0, s.jsx)("input", {
						type: "checkbox",
						checked: !!i.sound,
						onChange: (e) => o("sound", e.target.checked),
						style: { accentColor: "#ffd700" }
					})]
				}),
				/* @__PURE__ */ (0, s.jsxs)("div", {
					style: {
						display: "flex",
						gap: 10,
						marginTop: 22
					},
					children: [/* @__PURE__ */ (0, s.jsx)("button", {
						onClick: () => t(i),
						style: {
							background: "#ffd700",
							color: "#000",
							border: "none",
							borderRadius: 8,
							padding: "8px 18px",
							cursor: "pointer",
							fontWeight: 700,
							fontSize: 14
						},
						children: "Save and restart"
					}), /* @__PURE__ */ (0, s.jsx)("button", {
						onClick: r,
						style: {
							background: "#333",
							color: "#aaa",
							border: "none",
							borderRadius: 8,
							padding: "8px 18px",
							cursor: "pointer",
							fontWeight: 700,
							fontSize: 14
						},
						children: "Cancel"
					})]
				})
			]
		})
	});
}
var L = {
	theme: "classic",
	numPlayers: 6,
	startStack: 5e3,
	smallBlind: 25,
	escalating: !1,
	blindLevel: 10,
	aiPersonalities: [
		"tag",
		"lag",
		"nit",
		"fish",
		"maniac"
	],
	aiTells: [
		!0,
		!0,
		!0,
		!0,
		!0
	],
	sound: !0,
	customFelt: "",
	customCardBack: ""
};
function R() {
	let [e, t] = n(L), [r, i] = n(0);
	return /* @__PURE__ */ (0, s.jsx)(z, {
		config: e,
		onSettings: (e) => {
			t(e), i((e) => e + 1);
		}
	}, r);
}
function z({ config: r, onSettings: i }) {
	let a = c[r.theme] || c.classic, o = r.customFelt || a.felt, l = r.smallBlind, u = l * 2, d = t(null), [f, h] = n(null);
	function g(e) {
		return {
			id: e,
			name: [
				"You",
				"Alex",
				"Blake",
				"Casey",
				"Drew",
				"Ellis",
				"Fern",
				"Gray",
				"Harper"
			][e],
			chips: r.startStack,
			cards: [],
			bet: 0,
			folded: !1,
			isAllIn: !1,
			thinking: !1,
			showCards: !1,
			hasActed: !1,
			personality: e === 0 ? "human" : (r.aiPersonalities || [])[e - 1] || "tag",
			tells: e === 0 ? !1 : (r.aiTells || [])[e - 1] !== !1
		};
	}
	function v() {
		d.current = {
			players: Array.from({ length: r.numPlayers }, (e, t) => g(t)),
			deck: [],
			community: [],
			pot: 0,
			phase: "waiting",
			activeIdx: -1,
			dealerIdx: 0,
			currentBet: 0,
			raiseAmt: u * 2,
			msg: "Press Deal to start",
			handCount: 0,
			winner: null,
			handLog: [],
			handEvents: [],
			cardsLeft: 52,
			dealKey: 0,
			aiTimer: null
		};
	}
	function y() {
		let e = d.current;
		h({
			players: e.players.map((e) => Object.assign({}, e)),
			community: [...e.community],
			pot: e.pot,
			phase: e.phase,
			activeIdx: e.activeIdx,
			dealerIdx: e.dealerIdx,
			currentBet: e.currentBet,
			msg: e.msg,
			handCount: e.handCount,
			winner: e.winner,
			handLog: e.handLog,
			cardsLeft: e.cardsLeft,
			dealKey: e.dealKey,
			raiseAmt: e.raiseAmt
		});
	}
	e(() => {
		v(), y();
	}, []);
	let w = (e) => {
		r.sound && e();
	}, T = (e, t) => {
		d.current.handEvents.push({
			text: e,
			col: t
		});
	};
	function D() {
		let e = d.current;
		e.aiTimer &&= (clearTimeout(e.aiTimer), null);
		let t = e.handCount + 1;
		e.handCount = t, e.handEvents = [], e.winner = null, e.dealKey = (e.dealKey || 0) + 1;
		let n = (e.dealerIdx + 1) % r.numPlayers;
		e.dealerIdx = n;
		let i = (n + 1) % r.numPlayers, a = (n + 2) % r.numPlayers, o = m(p());
		e.players = e.players.map((e) => Object.assign({}, e, {
			cards: [o.shift(), o.shift()],
			bet: 0,
			folded: !1,
			isAllIn: !1,
			showCards: !1,
			thinking: !1,
			hasActed: !1
		})), e.cardsLeft = o.length, w(() => {
			for (let e = 0; e < r.numPlayers * 2; e++) setTimeout(x, e * 80);
		}), e.players[i].chips -= l, e.players[i].bet = l, e.players[i].hasActed = !0, e.players[a].chips -= u, e.players[a].bet = u, e.players[a].hasActed = !1, w(() => b(2)), e.deck = o, e.community = [], e.pot = l + u, e.currentBet = u, e.raiseAmt = u * 2, e.phase = "preflop";
		let s = (a + 1) % r.numPlayers;
		e.activeIdx = s, e.msg = s === 0 ? "Your turn" : e.players[s].name + " is acting...", T("--- Hand #" + t + " ---", "#ffd700"), T("SB: " + e.players[i].name + " ($" + l + ") | BB: " + e.players[a].name + " ($" + u + ")", "#888"), y(), s !== 0 && z();
	}
	function P(e, t, n) {
		let r = d.current, i = r.players[e], a = Math.max(0, r.currentBet - i.bet);
		if (t === "fold") i.folded = !0, w(S), T(i.name + " folds", "#e07070");
		else if (t === "check") T(i.name + " checks", "#888");
		else if (t === "call") {
			let e = Math.min(a, i.chips);
			i.chips -= e, i.bet += e, r.pot += e, i.chips === 0 && (i.isAllIn = !0), w(() => b(2)), T(i.name + " calls $" + e, "#aaa");
		} else if (t === "raise" || t === "allin") {
			let e = t === "allin" ? i.chips : Math.min(n, i.chips);
			i.chips -= e, i.bet += e, r.pot += e, i.bet > r.currentBet && (r.currentBet = i.bet), i.chips === 0 && (i.isAllIn = !0);
			let a = t === "allin" ? 5 : Math.min(4, Math.max(2, Math.round(e / (u * 2))));
			w(() => b(a)), t === "allin" ? T(i.name + " goes ALL IN ($" + i.bet + ")", "#ff6b6b") : T(i.name + " raises to $" + i.bet, "#f0c040");
		}
	}
	function F(e) {
		let t = d.current;
		if (t.players[e].hasActed = !0, t.players.filter((e) => !e.folded).length === 1) {
			R();
			return;
		}
		let n = t.players.filter((e) => !e.folded && !e.isAllIn);
		if (n.length === 0 || n.every((e) => e.hasActed && e.bet === t.currentBet)) {
			L();
			return;
		}
		let r = (e + 1) % t.players.length, i = 0;
		for (; i < t.players.length;) {
			let e = t.players[r];
			if (!e.folded && !e.isAllIn && (!e.hasActed || e.bet < t.currentBet)) break;
			r = (r + 1) % t.players.length, i++;
		}
		if (i >= t.players.length) {
			L();
			return;
		}
		t.activeIdx = r, t.msg = r === 0 ? "Your turn" : t.players[r].name + " is acting...", y(), r !== 0 && z();
	}
	function L() {
		let e = d.current;
		e.players.forEach((e) => {
			e.bet = 0, e.hasActed = !1;
		}), e.currentBet = 0, e.raiseAmt = u * 2;
		let t = e.community.length;
		if (t === 0) e.community = [
			e.deck.shift(),
			e.deck.shift(),
			e.deck.shift()
		], e.cardsLeft = e.deck.length, e.phase = "flop", w(() => {
			[
				0,
				80,
				160
			].forEach((e) => setTimeout(x, e));
		}), T("--- Flop: " + e.community.map((e) => e.r + e.s).join(" ") + " ---", "#7ec8e3");
		else if (t === 3) e.community.push(e.deck.shift()), e.cardsLeft = e.deck.length, e.phase = "turn", w(x), T("--- Turn: " + e.community[3].r + e.community[3].s + " ---", "#7ec8e3");
		else if (t === 4) e.community.push(e.deck.shift()), e.cardsLeft = e.deck.length, e.phase = "river", w(x), T("--- River: " + e.community[4].r + e.community[4].s + " ---", "#7ec8e3");
		else {
			R();
			return;
		}
		let n = e.players.length, r = (e.dealerIdx + 1) % n, i = 0;
		for (; i < n && !(!e.players[r].folded && !e.players[r].isAllIn);) r = (r + 1) % n, i++;
		if (e.players.filter((e) => !e.folded && !e.isAllIn).length === 0) {
			R();
			return;
		}
		e.activeIdx = r, e.msg = r === 0 ? "Your turn" : e.players[r].name + " is acting...", y(), r !== 0 && z();
	}
	function R() {
		let e = d.current;
		e.aiTimer &&= (clearTimeout(e.aiTimer), null), e.phase = "showdown";
		let t = e.players.filter((e) => !e.folded);
		if (t.length === 1) {
			let n = t[0];
			n.chips += e.pot, T(n.name + " wins $" + e.pot + " (uncontested)", "#7ec879");
			let r = n.id === 0 ? "win" : "wins";
			e.winner = {
				name: n.name,
				amount: e.pot,
				handName: "",
				verb: r
			}, e.msg = n.name + " " + r + "!", w(C);
		} else {
			let n = t.map((t) => Object.assign({}, t, { ev: _([...t.cards, ...e.community]) }));
			n.sort((e, t) => t.ev.rank - e.ev.rank || (t.ev.tb > e.ev.tb ? -1 : 1));
			let r = n[0];
			e.players.forEach((e) => {
				t.find((t) => t.id === e.id) && (e.showCards = !0);
			}), e.players.find((e) => e.id === r.id).chips += e.pot, T(r.name + " wins $" + e.pot + " with " + r.ev.name, "#7ec879");
			let i = r.id === 0 ? "win" : "wins";
			e.winner = {
				name: r.name,
				amount: e.pot,
				handName: r.ev.name,
				verb: i
			}, e.msg = r.name + " " + i + " with " + r.ev.name + "!", w(C);
		}
		e.handLog = [...e.handLog, {
			pot: e.pot,
			events: [...e.handEvents]
		}], e.pot = 0, e.activeIdx = -1, y();
	}
	function z() {
		let e = d.current;
		e.aiTimer && clearTimeout(e.aiTimer);
		let t = e.activeIdx;
		if (t <= 0 || t >= e.players.length) return;
		let n = e.players[t];
		if (!n || n.folded || n.isAllIn) {
			F(t);
			return;
		}
		let r = Math.max(0, e.currentBet - n.bet), i = E(n, {
			pot: e.pot,
			toCall: r,
			community: e.community,
			bigBlind: u,
			currentBet: e.currentBet
		}, n.personality, n.tells);
		n.thinking = !0, y(), e.aiTimer = setTimeout(() => {
			let e = d.current;
			e.phase === "waiting" || e.phase === "showdown" || e.activeIdx === t && (e.players[t].thinking = !1, P(t, i.action, i.amount), F(t));
		}, i.thinkMs);
	}
	function B(e, t) {
		let n = d.current;
		n.activeIdx !== 0 || n.phase === "waiting" || n.phase === "showdown" || (P(0, e, t || 0), F(0));
	}
	let [V, H] = n(!1), [U, W] = n(!1), [G, K] = n(u * 2);
	if (!f) return null;
	let q = f.players, J = q[0], Y = J ? Math.max(0, f.currentBet - J.bet) : 0, X = f.activeIdx === 0 && f.phase !== "waiting" && f.phase !== "showdown", Z = X && Y === 0, ee = X && Y > 0 && J && J.chips > 0, te = X && J && J.chips > Y, ne = k(q.length), re = O(), Q = {
		background: "rgba(255,255,255,0.06)",
		color: "#999",
		border: "1px solid #2a2a2a",
		borderRadius: 6,
		padding: "4px 12px",
		cursor: "pointer",
		fontSize: 12
	}, $ = (e, t) => ({
		background: e,
		color: t,
		border: "none",
		borderRadius: 8,
		padding: "10px 22px",
		cursor: "pointer",
		fontWeight: 700,
		fontSize: 14,
		boxShadow: "0 2px 8px rgba(0,0,0,0.4)"
	});
	return /* @__PURE__ */ (0, s.jsxs)("div", {
		style: {
			width: "100vw",
			height: "100vh",
			background: "#080808",
			display: "flex",
			flexDirection: "column",
			overflow: "hidden",
			fontFamily: "Georgia,serif",
			userSelect: "none",
			position: "relative"
		},
		children: [
			/* @__PURE__ */ (0, s.jsx)("style", { children: "\n    @keyframes cardDeal {\n      from { opacity:0; transform:scale(0.5) translateY(-20px) rotateZ(-10deg); }\n      to   { opacity:1; transform:scale(1)   translateY(0)      rotateZ(0deg); }\n    }\n    @keyframes communityCard {\n      from { opacity:0; transform:translateY(-16px) scaleY(0.3); }\n      to   { opacity:1; transform:translateY(0)     scaleY(1); }\n    }\n    @keyframes seatGlow {\n      0%,100% { box-shadow:0 0 0 1px #ffd700, 0 0 10px rgba(255,215,0,0.3); }\n      50%     { box-shadow:0 0 0 1px #ffd700, 0 0 24px rgba(255,215,0,0.65); }\n    }\n    @keyframes blink {\n      0%,100% { opacity:1; }\n      50%     { opacity:0.35; }\n    }\n    @keyframes winPop {\n      0%   { opacity:0; transform:translateX(-50%) scale(0.5) translateY(12px); }\n      65%  { transform:translateX(-50%) scale(1.05) translateY(-4px); }\n      100% { opacity:1; transform:translateX(-50%) scale(1) translateY(0); }\n    }\n    @keyframes phaseLabel {\n      from { opacity:0; transform:translateX(-50%) translateY(8px); }\n      to   { opacity:1; transform:translateX(-50%) translateY(0); }\n    }\n  " }),
			/* @__PURE__ */ (0, s.jsxs)("div", {
				style: {
					height: 44,
					background: "rgba(0,0,0,0.82)",
					borderBottom: "1px solid #1a1a1a",
					display: "flex",
					alignItems: "center",
					padding: "0 16px",
					gap: 10,
					zIndex: 20,
					flexShrink: 0
				},
				children: [
					/* @__PURE__ */ (0, s.jsx)("span", {
						style: {
							color: "#ffd700",
							fontWeight: 700,
							fontSize: 15,
							letterSpacing: 3
						},
						children: "POKER"
					}),
					/* @__PURE__ */ (0, s.jsx)("span", { style: { flex: 1 } }),
					/* @__PURE__ */ (0, s.jsx)("span", {
						style: {
							color: "#333",
							fontSize: 11,
							fontFamily: "monospace"
						},
						children: "hand #" + f.handCount
					}),
					/* @__PURE__ */ (0, s.jsx)("button", {
						onClick: () => H(!0),
						style: Q,
						children: "History"
					}),
					/* @__PURE__ */ (0, s.jsx)("button", {
						onClick: () => W(!0),
						style: Q,
						children: "Settings"
					})
				]
			}),
			/* @__PURE__ */ (0, s.jsxs)("div", {
				style: {
					flex: 1,
					position: "relative",
					overflow: "hidden"
				},
				children: [
					/* @__PURE__ */ (0, s.jsx)("div", { style: {
						position: "absolute",
						left: "5%",
						top: "4%",
						right: "5%",
						bottom: "18%",
						background: o,
						borderRadius: "50% / 40%",
						border: "14px solid " + a.feltEdge,
						boxShadow: "inset 0 0 80px rgba(0,0,0,0.6),0 0 60px rgba(0,0,0,0.7)"
					} }),
					/* @__PURE__ */ (0, s.jsxs)("div", {
						style: {
							position: "absolute",
							left: "50%",
							top: "36%",
							transform: "translate(-50%,-50%)",
							background: "rgba(0,0,0,0.72)",
							backdropFilter: "blur(8px)",
							border: "1px solid rgba(255,215,0,0.18)",
							borderRadius: 12,
							padding: "6px 20px",
							textAlign: "center",
							zIndex: 9
						},
						children: [/* @__PURE__ */ (0, s.jsx)("div", {
							style: {
								fontSize: 10,
								color: "#555",
								letterSpacing: 2,
								textTransform: "uppercase"
							},
							children: "pot"
						}), /* @__PURE__ */ (0, s.jsxs)("div", {
							style: {
								fontSize: 22,
								color: "#ffd700",
								fontWeight: 700
							},
							children: ["$", f.pot.toLocaleString()]
						})]
					}),
					/* @__PURE__ */ (0, s.jsxs)("div", {
						style: {
							position: "absolute",
							left: "50%",
							top: "50%",
							transform: "translate(-50%,-50%)",
							display: "flex",
							gap: 7,
							zIndex: 9
						},
						children: [f.community.map((e, t) => /* @__PURE__ */ (0, s.jsx)("div", {
							style: { animation: "communityCard 0.3s cubic-bezier(.22,1,.36,1) " + String(t * .1) + "s both" },
							children: /* @__PURE__ */ (0, s.jsx)(A, {
								card: e,
								theme: r.theme
							})
						}, "comm-" + f.dealKey + "-" + t)), Array.from({ length: 5 - f.community.length }).map((e, t) => /* @__PURE__ */ (0, s.jsx)("div", { style: {
							width: 52,
							height: 74,
							borderRadius: 5,
							border: "1px dashed rgba(255,255,255,0.08)",
							background: "rgba(0,0,0,0.12)"
						} }, "empty-" + t))]
					}),
					f.phase !== "waiting" && f.phase !== "showdown" && /* @__PURE__ */ (0, s.jsx)("div", {
						style: {
							position: "absolute",
							left: "50%",
							top: "62%",
							color: "rgba(255,255,255,0.2)",
							fontSize: 11,
							letterSpacing: 3,
							textTransform: "uppercase",
							zIndex: 7,
							animation: "phaseLabel 0.3s ease-out both"
						},
						children: f.phase
					}, f.phase),
					f.winner && /* @__PURE__ */ (0, s.jsxs)("div", {
						style: {
							position: "absolute",
							left: "50%",
							top: "26%",
							background: "rgba(5,5,5,0.95)",
							border: "2px solid #ffd700",
							borderRadius: 14,
							padding: "12px 28px",
							textAlign: "center",
							zIndex: 16,
							whiteSpace: "nowrap",
							animation: "winPop 0.4s cubic-bezier(.22,1,.36,1) both"
						},
						children: [/* @__PURE__ */ (0, s.jsxs)("div", {
							style: {
								color: "#ffd700",
								fontSize: 20,
								fontWeight: 700,
								letterSpacing: 1
							},
							children: [
								f.winner.name,
								" ",
								f.winner.verb || "wins",
								"!"
							]
						}), f.winner.handName && /* @__PURE__ */ (0, s.jsxs)("div", {
							style: {
								color: "#888",
								fontSize: 13,
								marginTop: 3
							},
							children: [
								f.winner.handName,
								" - ",
								/* @__PURE__ */ (0, s.jsxs)("span", {
									style: { color: "#f0c040" },
									children: ["$", f.winner.amount.toLocaleString()]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, s.jsx)(j, {
						pos: re,
						cardsLeft: f.cardsLeft,
						theme: r.theme
					}),
					q.map((e, t) => /* @__PURE__ */ (0, s.jsx)(M, {
						player: e,
						pos: ne[t],
						isHuman: t === 0,
						isActive: f.activeIdx === t && f.phase !== "showdown" && f.phase !== "waiting",
						isSB: t === (f.dealerIdx + 1) % q.length,
						isBB: t === (f.dealerIdx + 2) % q.length,
						theme: r.theme,
						showCards: f.phase === "showdown",
						dealKey: f.dealKey
					}, t))
				]
			}),
			/* @__PURE__ */ (0, s.jsxs)("div", {
				style: {
					height: 120,
					background: "rgba(0,0,0,0.92)",
					borderTop: "1px solid #1a1a1a",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: 8,
					padding: "0 20px",
					flexShrink: 0,
					zIndex: 20
				},
				children: [
					/* @__PURE__ */ (0, s.jsx)("div", {
						style: {
							color: "#555",
							fontSize: 13,
							letterSpacing: .5,
							minHeight: 16
						},
						children: f.msg
					}),
					f.phase === "waiting" || f.phase === "showdown" ? /* @__PURE__ */ (0, s.jsx)("button", {
						onClick: D,
						style: {
							background: "linear-gradient(135deg,#b8860b,#ffd700,#b8860b)",
							color: "#000",
							border: "none",
							borderRadius: 10,
							padding: "12px 48px",
							fontSize: 16,
							fontWeight: 700,
							cursor: "pointer",
							letterSpacing: 1,
							boxShadow: "0 4px 20px rgba(255,215,0,0.3)"
						},
						children: f.handCount > 0 ? "Next hand >" : "Deal >"
					}) : X ? /* @__PURE__ */ (0, s.jsxs)("div", {
						style: {
							display: "flex",
							gap: 8,
							alignItems: "center",
							flexWrap: "wrap",
							justifyContent: "center"
						},
						children: [
							/* @__PURE__ */ (0, s.jsx)("button", {
								onClick: () => B("fold"),
								style: $("#5c1212", "#fca5a5"),
								children: "Fold"
							}),
							Z && /* @__PURE__ */ (0, s.jsx)("button", {
								onClick: () => B("check"),
								style: $("#0f2740", "#93c5fd"),
								children: "Check"
							}),
							ee && /* @__PURE__ */ (0, s.jsx)("button", {
								onClick: () => B("call"),
								style: $("#0f3320", "#86efac"),
								children: "Call $" + Y
							}),
							te && /* @__PURE__ */ (0, s.jsxs)("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: 6
								},
								children: [
									/* @__PURE__ */ (0, s.jsxs)("div", {
										style: {
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											gap: 2
										},
										children: [/* @__PURE__ */ (0, s.jsx)("input", {
											type: "range",
											min: u * 2,
											max: J ? J.chips : 0,
											step: u,
											value: G,
											onChange: (e) => K(+e.target.value),
											style: {
												width: 100,
												accentColor: "#ffd700"
											}
										}), /* @__PURE__ */ (0, s.jsx)("span", {
											style: {
												fontSize: 10,
												color: "#555"
											},
											children: "$" + G
										})]
									}),
									/* @__PURE__ */ (0, s.jsx)("button", {
										onClick: () => B("raise", G),
										style: $("#4a2800", "#fde68a"),
										children: "Raise"
									}),
									/* @__PURE__ */ (0, s.jsx)("button", {
										onClick: () => B("allin"),
										style: $("#2d0a5e", "#c4b5fd"),
										children: "All in"
									})
								]
							})
						]
					}) : /* @__PURE__ */ (0, s.jsx)("div", {
						style: {
							color: "#333",
							fontSize: 13,
							fontStyle: "italic"
						},
						children: q[f.activeIdx] && q[f.activeIdx].thinking ? q[f.activeIdx].name + " is thinking..." : "Waiting..."
					}),
					/* @__PURE__ */ (0, s.jsxs)("div", {
						style: {
							color: "#2a2a2a",
							fontSize: 11,
							fontFamily: "monospace"
						},
						children: [
							"stack ",
							/* @__PURE__ */ (0, s.jsx)("span", {
								style: { color: "#505050" },
								children: J ? "$" + J.chips.toLocaleString() : ""
							}),
							Y > 0 && X && /* @__PURE__ */ (0, s.jsxs)("span", {
								style: { marginLeft: 14 },
								children: ["to call ", /* @__PURE__ */ (0, s.jsx)("span", {
									style: { color: "#8a6820" },
									children: "$" + Y
								})]
							})
						]
					})
				]
			}),
			V && /* @__PURE__ */ (0, s.jsx)(N, {
				log: f.handLog,
				onClose: () => H(!1)
			}),
			U && /* @__PURE__ */ (0, s.jsx)(I, {
				config: r,
				onSave: (e) => {
					W(!1), i(e);
				},
				onClose: () => W(!1)
			})
		]
	});
}
//#endregion
export { R as Poker };
