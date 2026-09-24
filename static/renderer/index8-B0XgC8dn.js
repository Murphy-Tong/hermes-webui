import { bQ as ur, M as ir, q as V, b7 as Hn, bE as at, aD as sr, aJ as cr, az as dr, aL as G, u as Se, v as Ie, aw as lt, F as mr, aX as fr, au as _t, aY as qn, s as Cn, ar as Rn, bk as vr, cc as hr, a$ as gr, bb as An, t as Nn, H as yr, aU as L, cd as Pn, ce as le, as as Me, aS as kr, cf as _n, cg as zn, ch as jn, ci as pr, cj as zt, ck as br, cl as wr, aO as Sr } from "./index-DDXmUfVV.js";
var Mr = Object.defineProperty, xr = Object.defineProperties, Br = Object.getOwnPropertyDescriptors, In = Object.getOwnPropertySymbols, Kr = Object.prototype.hasOwnProperty, Tr = Object.prototype.propertyIsEnumerable, It = (B, p, M) => p in B ? Mr(B, p, { enumerable: !0, configurable: !0, writable: !0, value: M }) : B[p] = M, $e = (B, p) => {
  for (var M in p || (p = {})) Kr.call(p, M) && It(B, M, p[M]);
  if (In) for (var M of In(p)) Tr.call(p, M) && It(B, M, p[M]);
  return B;
}, Oe = (B, p) => xr(B, Br(p)), $n = (B, p, M) => It(B, typeof p != "symbol" ? p + "" : p, M);
const Fr = ["data-markstream-item-key", "data-markstream-item-kind"], Hr = { key: 0, class: "markstream-virtual-timeline__status" }, xe = 0.5, On = /* @__PURE__ */ ur(/* @__PURE__ */ ir(Oe($e({}, { name: "MarkstreamVirtualTimeline" }), { __name: "MarkstreamVirtualTimeline", props: { items: {}, threadKey: {}, layoutRevision: {}, getKey: {}, getKind: {}, getContent: {}, getFinal: {}, getRevision: {}, estimateItemHeight: {}, overscan: { default: 1 }, overscanPx: { default: 1200 }, stickToBottom: { type: [Boolean, String], default: "auto" }, measurementKey: {}, markdownMode: { default: "docs" }, renderCodeBlocksAsPre: { type: Boolean }, initialThreadState: {}, markdownFade: { type: Boolean, default: !1 }, restoreMaxLoadingMs: { type: [Number, Boolean], default: !1 }, debug: { type: Boolean } }, emits: ["height-change", "virtual-state-change", "range-change", "thread-state-change"], setup(B, { expose: p, emit: M }) {
  const s = B, Le = M;
  function $t(e) {
    Le("thread-state-change", e);
  }
  function Ee(e) {
    return e === "measured" || e === "final";
  }
  function ut(e) {
    return e?.stable === !0 && (function(t) {
      var n, r, a, o;
      if (!t) return !1;
      const l = Number(t.nodeCount), i = Number(t.measuredCount), u = Math.max(0, Number((r = (n = t.liveRange) == null ? void 0 : n.start) != null ? r : 0)), c = Math.min(l, Math.max(u, Number((o = (a = t.liveRange) == null ? void 0 : a.end) != null ? o : 0))), v = Math.max(0, c - u);
      return t.final === !0 && t.confidence === "mixed" && l > 0 && i > 0 && i < l && (v <= 0 || i >= v);
    })(e);
  }
  const ue = /* @__PURE__ */ new Map();
  function Ot(e) {
    var t;
    s.debug === !0 && ue.set(e, ((t = ue.get(e)) != null ? t : 0) + 1);
  }
  const K = L(null), W = L(0), X = L(0), Y = L(0), z = L(!0), N = L(!0), J = kr(/* @__PURE__ */ new Map()), P = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), H = L(!1), I = L(!0), Ln = L(!0);
  Sr("markstreamHostScrollManaged", Ln);
  const En = [0, 80, 180, 360, 640];
  let We, _, Te = null, de = null, Ye = 0, me = null, it = [], $ = null, E = null, Fe = -1, D = 0, fe = null, st = !1, He = !1, ve = null, he = 0, Je = 0, Qe = { top: 0, bottom: 0 }, Lt = !1;
  const w = V(() => s.threadKey == null ? void 0 : String(s.threadKey));
  let ct = w.value;
  const Et = V(() => {
    return (e = s.markdownMode) === "chat" || e === "minimal" || e === "docs" ? e : "docs";
    var e;
  }), Dt = V(() => s.renderCodeBlocksAsPre === !0), te = V(() => [s.measurementKey == null ? "" : String(s.measurementKey), Y.value].join(":")), Q = V(() => {
    const e = Dt.value ? "pre" : "rich";
    return `${te.value}${Et.value}${e}`;
  });
  class Vt {
    constructor(t) {
      $n(this, "tree"), $n(this, "total"), this.tree = Array.from({ length: t.length + 1 }, () => 0), this.total = 0, t.forEach((n, r) => this.add(r, n));
    }
    resize(t) {
      const n = t + 1;
      if (n <= this.tree.length) return;
      const r = this.tree.length, a = r - 1, o = this.total;
      this.tree.length = n;
      for (let l = r; l < n; l++) {
        const i = l - (l & -l);
        this.tree[l] = i < a ? o - this.prefixSum(i) : 0;
      }
    }
    add(t, n) {
      if (Number.isFinite(n) && n !== 0) {
        this.total += n;
        for (let r = t + 1; r < this.tree.length; r += r & -r) this.tree[r] += n;
      }
    }
    prefixSum(t) {
      let n = Math.max(0, Math.min(t, this.tree.length - 1)), r = 0;
      for (; n > 0; ) r += this.tree[n], n -= n & -n;
      return r;
    }
    lowerBound(t, n = "gte") {
      const r = this.tree.length - 1;
      if (r <= 0 || t <= 0) return 0;
      if (t >= this.total) return r - 1;
      let a = 0, o = 1;
      for (; o << 1 < this.tree.length; ) o <<= 1;
      let l = 0;
      for (; o > 0; o >>= 1) {
        const i = a + o;
        if (i < this.tree.length) {
          const u = l + this.tree[i];
          (n === "gt" ? u <= t : u < t) && (a = i, l = u);
        }
      }
      return Math.min(a, r - 1);
    }
  }
  const dt = Hn([]), T = /* @__PURE__ */ new Map(), ge = Hn(new Vt([])), ye = L(0);
  let ke = [];
  const pe = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), q = V(() => (ye.value, { records: dt.value, totalHeight: ge.value.total })), qe = [];
  let Wt = "", Yt = 0, Jt = 0;
  function Qt(e, t) {
    var n;
    const r = _n(e, t, s), a = ke[t];
    return [ft(e, t), zn(e, t, s), r ? 1 : 0, (n = zt(e, t, s)) != null ? n : "", a == null ? "" : String(a), Qn(e, t, r), (o = e?.component, o ? typeof o == "string" ? `s:${o}` : `o:${C(o)}` : "")].join("");
    var o;
  }
  function Dn(e, t) {
    if (typeof s.estimateItemHeight == "function") return Math.ceil(jn(e, t, s));
  }
  function Ut(e = {}) {
    var t, n, r, a;
    const o = s.items, l = o.length, i = (function() {
      var d;
      return (d = w.value) != null ? d : "timeline";
    })(), u = dt.value, c = u.length, v = (function() {
      var d;
      return [te.value, Q.value, (d = w.value) != null ? d : "", C(s.estimateItemHeight), C(s.getKey), C(s.getKind), C(s.getContent), C(s.getFinal), C(s.getRevision)].join("");
    })(), f = Wt !== v;
    Wt = v;
    const m = e.forceFull === !0 || s.layoutRevision != null || f || c === 0 || l < c, h = m ? 0 : Math.min(Jt, c, l), k = new Array(l), g = new Array(l), S = /* @__PURE__ */ new Set();
    for (let d = 0; d < h; d++) k[d] = u[d], g[d] = u[d].size, S.add(ft(o[d], d));
    if (m) T.clear();
    else for (let d = h; d < c; d++) {
      const y = u[d];
      T.get(y.key) === y && T.delete(y.key);
    }
    for (let d = h; d < l; d++) {
      const y = o[d], b = ft(y, d), oe = { item: y, index: d, key: b, kind: zn(y, d, s), markdown: _n(y, d, s) };
      let ae = gt(oe);
      ae == null && (ae = (t = ke[d]) != null ? t : jn(y, d, s));
      const x = Oe($e({}, oe), { renderKey: `${i}:${b}`, offset: 0, size: ae, component: y?.component });
      k[d] = x, g[d] = ae, S.has(b) || (S.add(b), T.set(b, x)), qe[d] = Qt(y, d);
    }
    if (qe.length = l, m) {
      for (const d of pe.keys()) T.has(d) || pe.delete(d);
      for (const d of be.keys()) T.has(d) || be.delete(d);
      ge.value = new Vt(g);
    } else {
      const d = ge.value;
      d.resize(l);
      for (let y = h; y < l; y++) {
        const b = y < c && (r = (n = u[y]) == null ? void 0 : n.size) != null ? r : 0, oe = g[y] - b;
        oe !== 0 && d.add(y, oe);
      }
      for (let y = h; y < c; y++) {
        const b = (a = u[y]) == null ? void 0 : a.key;
        b && !T.has(b) && (pe.delete(b), be.delete(b));
      }
    }
    dt.value = k, ke = [], ye.value += 1;
  }
  function Ue(e) {
    return ye.value, ge.value.prefixSum(e.index);
  }
  function Vn(e) {
    return Oe($e({}, e), { offset: Ue(e) });
  }
  function Gt(e, t) {
    const n = T.get(e);
    if (!n) return;
    const r = Math.ceil(t), a = r - n.size;
    a !== 0 && (n.size = r, ge.value.add(n.index, a), ye.value += 1);
  }
  function mt(e, t = "gte") {
    return ye.value, ge.value.lowerBound(e, t);
  }
  const Wn = V(() => {
    var e;
    return Math.max(0, (e = s.overscan) != null ? e : 1);
  }), Yn = V(() => {
    var e;
    const t = Math.max(0, (e = s.overscanPx) != null ? e : 1200);
    return I.value ? t : Math.min(t, 160);
  }), R = V(() => {
    var e, t, n;
    const r = q.value.records;
    if (r.length === 0) return { start: 0, end: 0, records: [], topSpacerHeight: 0, bottomSpacerHeight: 0 };
    const a = Wn.value, o = Yn.value, l = cn(), i = l + Math.max(1, X.value);
    let u = mt(Math.max(0, l - o), "gt"), c = mt(Math.min(q.value.totalHeight, i + o)) + 1;
    u = Math.max(0, u - a), c = Math.min(r.length, Math.max(c + a, u + 1));
    const v = r.slice(u, c).map(Vn), f = v[0], m = v[v.length - 1], h = (e = f?.offset) != null ? e : 0, k = (t = m?.offset) != null ? t : 0;
    return { start: u, end: c, records: v, topSpacerHeight: h, bottomSpacerHeight: Math.max(0, q.value.totalHeight - (k + ((n = m?.size) != null ? n : 0))) };
  });
  function ft(e, t) {
    return pr(e, t, s);
  }
  const Xt = /* @__PURE__ */ new WeakMap();
  let Jn = 1;
  function C(e) {
    if (typeof e != "object" && typeof e != "function" || e === null) return String(e ?? "");
    const t = e;
    let n = Xt.get(t);
    return n || (n = Jn++, Xt.set(t, n)), String(n);
  }
  const Ge = /* @__PURE__ */ new Map();
  function Qn(e, t, n) {
    var r;
    if (n) return "";
    const a = typeof e?.text == "string" ? e.text : typeof e?.message == "string" ? e.message : typeof e?.label == "string" ? e.label : String((r = le(e, t, s)) != null ? r : "");
    return a ? `${a.length}:${(function(o) {
      const l = Ge.get(o);
      if (l !== void 0) return l;
      let i = 2166136261;
      for (let c = 0; c < o.length; c++) i ^= o.charCodeAt(c), i = Math.imul(i, 16777619);
      const u = (i >>> 0).toString(36);
      return Ge.size >= 4096 && Ge.clear(), Ge.set(o, u), u;
    })(a)}` : "";
  }
  function A(e) {
    var t;
    return (t = s.items[e.index]) != null ? t : e.item;
  }
  function Zt(e) {
    return e.item;
  }
  function en(e) {
    var t;
    const n = A(e);
    return (t = n?.component) != null ? t : e.component;
  }
  function Ce(e, t = w.value) {
    const n = Zt(e), r = zt(n, e.index, s);
    return [t ?? "timeline", e.key, r == null ? "" : String(r)].join(":");
  }
  function tn(e, t = w.value) {
    if (e.markdown) return Ce(e, t);
    const n = Zt(e), r = zt(n, e.index, s);
    return [t ?? "timeline", e.key, r == null ? "" : String(r)].join(":");
  }
  function vt(e) {
    return { sourceKey: tn(e), measurementKey: e.markdown ? Q.value : te.value, widthBucket: Y.value };
  }
  function nn(e, t) {
    var n, r, a, o, l, i;
    return ((n = e?.sourceKey) != null ? n : "") === ((r = t?.sourceKey) != null ? r : "") && ((a = e?.measurementKey) != null ? a : "") === ((o = t?.measurementKey) != null ? o : "") && ((l = e?.widthBucket) != null ? l : 0) === ((i = t?.widthBucket) != null ? i : 0);
  }
  function ht(e, t, n = w.value) {
    var r;
    return !(!e || !t) && t.sourceKey === tn(e, n) && t.measurementKey === (e.markdown ? Q.value : te.value) && ((r = t.widthBucket) != null ? r : 0) === Y.value;
  }
  function gt(e, t = w.value) {
    const n = J.get(e.key);
    return ht(e, P.get(e.key), t) && Number.isFinite(n) && n > 0 ? n : null;
  }
  function we(e) {
    return q.value, T.get(e);
  }
  function rn(e, t) {
    var n, r;
    return !!(e && e.markdown && t) && t.sessionKey === Ce(e) && ((n = t.threadKey) != null ? n : "") === ((r = w.value) != null ? r : "") && !!(function(a) {
      const o = Q.value, l = a ?? "";
      return l === o || l.startsWith(`${o}\0`);
    })(t.measurementKey);
  }
  function Re(e, t) {
    return rn(e, t);
  }
  function on(e, t, n) {
    !Number.isFinite(t) || t <= 0 || (Be.set(e, Math.ceil(t)), De.set(e, n));
  }
  function yt(e, t = j.get(e)) {
    const n = (function(r, a = j.get(r)) {
      var o;
      if (!Re(we(r), a)) return 0;
      const l = Number((o = a?.metrics) == null ? void 0 : o.totalHeight);
      return Number.isFinite(l) && l > 0 ? Math.ceil(l) : 0;
    })(e, t);
    return n > 0 && on(e, n, t), n;
  }
  function an(e) {
    var t;
    return rn(we(e), De.get(e)) ? (t = Be.get(e)) != null ? t : 0 : yt(e);
  }
  function Ae(e) {
    return e === Ye && D === e && !I.value;
  }
  function kt() {
    if (me != null && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(me), me = null, $ != null && typeof window < "u" && window.clearTimeout($), $ = null, typeof window < "u") for (const e of it) window.clearTimeout(e);
    it = [];
  }
  function pt() {
    var e;
    return Math.max(0, X.value || ((e = K.value) == null ? void 0 : e.clientHeight) || 0);
  }
  function ln() {
    const e = K.value;
    if (!e || typeof getComputedStyle != "function") return void (Qe = { top: 0, bottom: 0 });
    const t = getComputedStyle(e), n = Number.parseFloat(t.paddingTop) || 0, r = Number.parseFloat(t.paddingBottom) || 0;
    Qe = { top: n, bottom: r };
  }
  function bt() {
    return Qe.top;
  }
  function un() {
    const e = Qe;
    return Math.max(0, q.value.totalHeight + e.top + e.bottom);
  }
  function sn() {
    var e, t;
    return Math.max(un(), (t = (e = K.value) == null ? void 0 : e.scrollHeight) != null ? t : 0);
  }
  function cn() {
    return Math.max(0, W.value - bt());
  }
  function ne() {
    return Math.max(0, sn() - pt());
  }
  function wt(e) {
    const t = Number(e);
    return Number.isFinite(t) ? Math.max(0, Math.min(t, ne())) : 0;
  }
  function St() {
    return Math.max(0, ne() - W.value);
  }
  function dn() {
    const e = St();
    N.value = e <= 2, s.stickToBottom !== !0 ? s.stickToBottom !== !1 ? z.value = e <= 48 : z.value = !1 : z.value = !0;
  }
  function Mt() {
    var e, t;
    const n = (t = (e = K.value) == null ? void 0 : e.clientWidth) != null ? t : 0;
    Y.value = Number.isFinite(n) && n > 0 ? 32 * Math.round(n / 32) : 0;
  }
  function O(e = {}) {
    const t = K.value;
    t && (W.value = Math.max(0, t.scrollTop || 0), X.value = t.clientHeight || 0), Mt(), dn(), (e.remember === !0 || e.remember !== !1 && !H.value) && nt();
  }
  function Ne(e, t = {}) {
    const n = wt(e), r = K.value;
    if (W.value = n, r && (X.value = r.clientHeight || X.value || 0, t.writeDom !== !1 && Math.abs((r.scrollTop || 0) - n) > xe)) {
      const a = { target: n, preserveBottomPin: s.stickToBottom !== !1 && Math.abs(ne() - n) <= 2 };
      de = I.value ? a : null, r.scrollTop = n, a.target = Math.max(0, r.scrollTop || 0);
    }
    Mt(), t.updatePinned !== !1 && dn(), (t.remember === !0 || t.remember !== !1 && !H.value) && re();
  }
  function Un() {
    if (!I.value) {
      de = null;
      const r = K.value, a = fe;
      return r && a != null && Math.abs((r.scrollTop || 0) - a) > xe && (r.scrollTop = a), void U(D, _);
    }
    const e = K.value, t = de, n = Math.max(0, e?.scrollTop || 0);
    return e && t && Math.abs(n - t.target) <= xe && t.preserveBottomPin && s.stickToBottom !== !1 || e && N.value && s.stickToBottom === "auto" && (Math.abs(ne() - n) <= 2 || n >= W.value - xe) || s.stickToBottom === !0 ? (z.value = !0, N.value = !0, void Ne(ne(), { writeDom: !0, remember: !1 })) : (de = null, void O());
  }
  function xt(e) {
    Ne(e, { writeDom: !0, remember: !0 });
  }
  function Bt() {
    xt(ne());
  }
  function Kt(e, t) {
    const n = ie.get(e);
    if (!Number.isFinite(n) || n == null || n <= 0) return 0;
    const r = Z.get(e);
    return t && r && !mn(r, t) ? 0 : Math.ceil(n);
  }
  function mn(e, t) {
    var n, r, a, o;
    return e.sourceKey === t.sourceKey && (((n = t.widthBucket) != null ? n : 0) === 0 || ((r = e.widthBucket) != null ? r : 0) === 0 || ((a = t.widthBucket) != null ? a : 0) === ((o = e.widthBucket) != null ? o : 0)) && (fn(t.measurementKey) || fn(e.measurementKey) || t.measurementKey === e.measurementKey);
  }
  function fn(e) {
    return e === ":0" || e?.startsWith(":0") === !0;
  }
  function Pe(e) {
    ie.delete(e), Z.delete(e), se.delete(e), ee.delete(e);
  }
  function _e(e, t, n, r = {}) {
    if (!Number.isFinite(t) || t <= 0) return;
    const a = J.get(e), o = n && !nn(P.get(e), n), l = r.releaseRestoredFloor === !0;
    (function(m, h) {
      if (!h) return;
      const k = Z.get(m);
      k && !mn(k, h) && (ie.delete(m), Z.delete(m), se.delete(m), ee.delete(m));
    })(e, n), l && Pe(e);
    const i = Kt(e, n), u = i > 0 ? i : Math.ceil(t);
    if (a != null && Math.abs(a - u) <= 1 && !o) return void (l && (ye.value += 1));
    if (r.updateLayout === !1) return n && P.set(e, n), J.set(e, u), void nt(r.rememberThreadKey);
    if (H.value) return n && P.set(e, n), J.set(e, u), Gt(e, u), void (function(m = D, h = _) {
      h && Me(() => {
        U(m, h), me == null && typeof requestAnimationFrame == "function" && (me = requestAnimationFrame(() => {
          me = null, U(m, h);
        }));
      });
    })();
    const c = (v = pn(), f = St(), s.stickToBottom === !0 ? { type: "bottom", distanceFromBottomPx: 0 } : s.stickToBottom === "auto" && z.value ? { type: "bottom", distanceFromBottomPx: N.value ? 0 : Math.max(0, f) } : v);
    var v, f;
    n && P.set(e, n), J.set(e, u), Gt(e, u), nt(r.rememberThreadKey), (function(m) {
      if (!F.scheduled) return F.anchor = m, F.scheduled = !0, void (F.raf = vn(et));
      !F.anchor && m && (F.anchor = m);
    })(c);
  }
  at([() => (function() {
    const e = s.layoutRevision;
    if (e != null) return ["explicit", String(e), s.items.length].join("");
    const t = s.items, n = t.length, r = typeof s.estimateItemHeight == "function";
    if (r) {
      ke.length = n;
      for (let l = 0; l < n; l++) ke[l] = Dn(t[l], l);
    } else ke = [];
    const a = Math.min(qe.length, n);
    let o = a;
    for (let l = 0; l < a && (qe[l] === Qt(t[l], l) || (o = l, r)); l++) ;
    return o === a && n === qe.length ? "stable" : (Jt = o, Yt += 1, `inc:${Yt}:${o}:${n}`);
  })(), te, Q, w, () => C(s.estimateItemHeight), () => C(s.getKey), () => C(s.getKind), () => C(s.getContent), () => C(s.getFinal), () => C(s.getRevision)], () => Ut(), { immediate: !0, flush: "sync" });
  const F = { scheduled: !1, raf: null, anchor: void 0 }, Xe = /* @__PURE__ */ new Map();
  let ze = !1, Ze = null;
  function vn(e) {
    return typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : (Me(e), null);
  }
  function hn(e) {
    e != null && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(e);
  }
  function et() {
    if (!F.scheduled) return;
    F.scheduled = !1, F.raf = null;
    const e = F.anchor;
    F.anchor = void 0;
    const t = e?.type === "bottom" && e.distanceFromBottomPx <= 2 && N.value;
    e && wn(e);
    const n = K.value, r = !n || Math.abs((n.scrollTop || 0) - W.value) <= xe;
    t && !r || O({ remember: !1 });
  }
  function Tt() {
    var e, t;
    if (!ze) return;
    ze = !1, Ze = null;
    const n = Array.from(Xe.entries());
    Xe.clear();
    for (const [r, a] of n) {
      if (Be.get(r) !== a.logicalHeight) continue;
      const o = T.get(r);
      if (!o) continue;
      const l = ((e = a.threadKey) != null ? e : "") === ((t = w.value) != null ? t : "");
      je(o, { allowMarkdownShrink: a.allowMarkdownShrink, allowRestoredFloorShrink: a.allowRestoredFloorShrink, markdownLogicalHeight: a.logicalHeight, rememberThreadKey: a.threadKey, source: a.itemSizeSource, updateLayout: l });
    }
    et();
  }
  function gn() {
    Tt(), et();
  }
  function yn(e) {
    var t;
    (t = Ke.get(e)) == null || t.disconnect(), Ke.delete(e), ce.delete(e);
  }
  function je(e, t = {}) {
    var n, r, a;
    const o = (l = e.key, br(ce.get(l), Ot));
    var l;
    const i = (n = t.source) != null ? n : vt(e);
    let u = !1;
    const c = () => {
      u || (u = !0, (function(h, k) {
        const g = (function() {
          if (s.debug !== !0 || ue.size === 0) return null;
          let S = 0;
          for (const y of ue.values()) S += y;
          const d = { total: S, byLabel: Object.fromEntries(Array.from(ue.entries()).sort((y, b) => b[1] - y[1] || y[0].localeCompare(b[0]))) };
          return ue.clear(), d;
        })();
        g && console.info("[markstream-vue][timeline][perf] layout-reads", { label: h, itemKey: k, layoutReads: g });
      })("reconcileRecordSize", e.key));
    };
    if (!e.markdown) return o > 0 && _e(e.key, o, i, t), void c();
    const v = nn(P.get(e.key), i) && (r = J.get(e.key)) != null ? r : 0, f = (a = t.markdownLogicalHeight) != null ? a : an(e.key), m = (function(h, k) {
      return wr(ce.get(h), Ot, k);
    })(e.key, o);
    if (f > 0) {
      let h = Math.max(o, f + m);
      (!t.allowMarkdownShrink || H.value) && v > 0 && (h = Math.max(h, v));
      const k = Kt(e.key, i), g = k > 0 && h > k + 1 && (!Pn(A(e), e.index, s) || t.allowRestoredFloorShrink === !0);
      return e.markdown && k > 0 && (t.allowRestoredFloorShrink === !0 || g) ? H.value ? ee.add(e.key) : t = Oe($e({}, t), { releaseRestoredFloor: !0 }) : t.allowMarkdownShrink && !H.value && (k <= 0 || t.allowRestoredFloorShrink && (function(S, d, y) {
        const b = se.get(S);
        return !Number.isFinite(b) || b == null || b <= 0 || d + Math.max(0, y - b) < y - 1;
      })(e.key, f, k)) && Pe(e.key), h > 0 && _e(e.key, h, i, t), void c();
    }
    return String(le(A(e), e.index, s)).trim() ? v > 0 ? (o > v + 1 && _e(e.key, o, i, t), void c()) : (o > 0 && _e(e.key, o, i, t), void c()) : (o > 0 && (Pe(e.key), _e(e.key, o, i, t)), void c());
  }
  function Ft(e) {
    const t = e.key;
    let n = pe.get(t);
    return n || (n = (r) => {
      var a;
      (function(o, l) {
        const i = (function(v) {
          const f = v && "$el" in v ? v.$el : v;
          return f instanceof HTMLElement ? f : null;
        })(l), u = ce.get(o.key);
        if (!i) return void yn(o.key);
        if (u === i) return void je(o);
        if (yn(o.key), ce.set(o.key, i), je(o), typeof ResizeObserver > "u") return;
        const c = new ResizeObserver(() => {
          je(o);
        });
        c.observe(i), Ke.set(o.key, c);
      })((a = T.get(t)) != null ? a : e, r);
    }, pe.set(t, n)), n;
  }
  function kn(e) {
    var t;
    const n = (t = T.get(e.key)) != null ? t : e, r = A(n), a = Pn(r, n.index, s), o = Ce(n), l = Et.value, i = Dt.value, u = s.markdownFade === !0, c = le(r, n.index, s), v = [o, a ? "final" : "live", Q.value, l, i ? "pre" : "none", u ? "fade" : "no-fade"].join(""), f = be.get(n.key);
    if (f && f.cacheKey === v && f.content === c) {
      const g = j.get(e.key);
      return f.props.virtualScroll.restoreState = Re(e, g) ? g : null, f.props;
    }
    const m = j.get(e.key), h = { enabled: !0, sessionKey: o, threadKey: w.value, scrollRoot: () => K.value, restoreState: Re(e, m) ? m : null, restoreAnchor: !1, measurementKey: Q.value, settleMode: "manual", settledToken: a, emitIntervalMs: 96, heightDiffThresholdPx: 4 }, k = Oe($e({ content: c, final: a, mode: l, renderCodeBlocksAsPre: i }, a ? { nodeVirtual: "auto", maxLiveNodes: 50, liveNodeBuffer: 16 } : {}), { fade: u, indexKey: o, virtualScroll: h, onHeightChange(g) {
      var S;
      const d = (S = T.get(e.key)) != null ? S : e;
      if (g.sessionKey !== Ce(d)) return;
      on(d.key, g.totalHeight, { sessionKey: g.sessionKey, threadKey: w.value, measurementKey: Q.value });
      const y = (function(x) {
        return x.phase === "final" || !(x.final !== !0 || !Ee(x.confidence)) || !!x.stable && (Ee(x.confidence) || ut(x));
      })(g), b = (function(x) {
        return x.phase === "final" || !!x.stable && (Ee(x.confidence) || ut(x));
      })(g), oe = Math.ceil(g.totalHeight);
      var ae;
      (function(x, lr) {
        Xe.set(x.key, lr), ze || (ze = !0, Ze = vn(Tt));
      })(d, { allowMarkdownShrink: y, allowRestoredFloorShrink: b, itemSizeSource: vt(d), logicalHeight: oe, threadKey: w.value }), ae = { itemKey: d.key, metrics: g }, Le("height-change", ae);
    }, onVirtualStateChange(g) {
      var S;
      const d = (S = T.get(e.key)) != null ? S : e;
      var y;
      g.sessionKey === Ce(d) && (j.set(d.key, g), h.restoreState = g, yt(d.key, g), nt(), y = { itemKey: d.key, state: g }, Le("virtual-state-change", y));
    } });
    return be.set(n.key, { cacheKey: v, content: c, props: k }), k;
  }
  function Gn(e) {
    return { item: A(e), index: e.index, itemKey: e.key, kind: e.kind, measureRef: Ft(e), markdownProps: kn(e) };
  }
  function Xn(e) {
    var t;
    const n = (t = A(e)) != null ? t : {};
    return typeof n.text == "string" ? n.text : typeof n.message == "string" ? n.message : typeof n.label == "string" ? n.label : le(n, e.index, s);
  }
  function pn() {
    const e = St();
    if (e <= 2) return { type: "bottom", distanceFromBottomPx: Math.max(0, e) };
    const t = cn(), n = mt(t, "gt"), r = q.value.records[n];
    if (r) {
      const o = Ue(r);
      if (t >= o && t < o + r.size) return { type: "item", itemKey: r.key, offsetWithinItemPx: t - o };
    }
    const a = R.value.records[0];
    return a ? { type: "item", itemKey: a.key, offsetWithinItemPx: 0 } : void 0;
  }
  function bn(e = w.value) {
    gn();
    const t = {}, n = {};
    for (const r of q.value.records) {
      const a = gt(r, e), o = P.get(r.key);
      a != null && ht(r, o, e) && (t[r.key] = a, n[r.key] = o);
    }
    return { threadKey: e, measurementKey: te.value, widthBucket: Y.value, outerAnchor: pn(), itemHeights: t, itemSizeSources: n, markdownStates: Object.fromEntries(j.entries()) };
  }
  function re(e = w.value) {
    if (!e) return;
    const t = bn(e);
    return Ve.set(e, t), e === w.value && (ve = t), $t(t), t;
  }
  function tt() {
    const e = We;
    return E != null && typeof window < "u" && window.clearTimeout(E), E = null, We = void 0, e ? re(e) : void 0;
  }
  function nt(e = w.value) {
    e && (We = e, E == null && (typeof window < "u" ? E = window.setTimeout(() => {
      E = null, tt();
    }, 80) : tt()));
  }
  function Ht(e) {
    if (!e) return null;
    if (e.type === "bottom") return (I.value ? sn() : un()) - pt() - Math.max(0, e.distanceFromBottomPx);
    const t = we(e.itemKey);
    return t ? bt() + Ue(t) + Math.max(0, e.offsetWithinItemPx) : null;
  }
  function wn(e, t = {}) {
    const n = Ht(e);
    return n != null && (Ne(n, { writeDom: !0, remember: t.remember === !0 }), !0);
  }
  function U(e, t) {
    e === Ye && (t && (fe = wn(t, { remember: !1 }) ? W.value : null), O({ remember: !1 }));
  }
  function rt(e, t) {
    const n = e.getBoundingClientRect();
    return n.width > 0 && n.height > 0 && n.bottom > t.top && n.top < t.bottom;
  }
  function Zn(e, t) {
    const n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
    return n.bottom > r.top && n.top < r.bottom;
  }
  function er(e) {
    if (e.closest(".code-editor-container.is-hidden")) return !1;
    let t = e;
    for (; t; ) {
      const r = window.getComputedStyle(t);
      if (r.display === "none" || r.visibility === "hidden" || Number.parseFloat(r.opacity || "1") <= 0.01) return !1;
      t = t.parentElement;
    }
    const n = e.getBoundingClientRect();
    return n.width > 0 && n.height > 0;
  }
  function qt(e) {
    if (!e || e.classList.contains("is-fading-out")) return !1;
    const t = window.getComputedStyle(e);
    if (t.display === "none" || Number.parseFloat(t.opacity || "1") <= 0.01) return !1;
    const n = e.getBoundingClientRect();
    return n.width > 0 && n.height > 0;
  }
  function Sn(e) {
    return Array.from(e.querySelectorAll(['[data-markstream-pending="true"]', '[data-markstream-mermaid][data-markstream-mode="pending"]', '.mermaid-block-container[data-markstream-mode="pending"]', '[data-markstream-code-loading="1"]'].join(","))).some((t) => !t.matches('[data-markstream-code-block="1"]') || !qt(t.querySelector("pre.code-pre-fallback")));
  }
  function Mn(e) {
    var t;
    if (e.querySelector(":scope > .node-placeholder")) return !1;
    const n = e.querySelector(":scope > .node-content");
    return !!n && !Sn(n) && !!(function(r) {
      const a = Array.from(r.querySelectorAll("[data-markstream-math]"));
      return !a.length || a.every((o) => {
        const l = o.dataset.markstreamMode;
        return !(o.dataset.markstreamPending === "true" || l === "loading" || l !== "katex" && l !== "fallback");
      });
    })(n) && (((t = e.dataset.nodeType) != null ? t : "") === "code_block" ? (function(r) {
      if (r.querySelector('[data-markstream-code-loading="1"]')) return !1;
      const a = r.querySelector('[data-markstream-code-block="1"]');
      if (a) {
        const l = a.dataset.markstreamEnhanced === "true", i = qt(a.querySelector("pre.code-pre-fallback"));
        return l || i || (o = a, Array.from(o.querySelectorAll("diffs-container, .stream-diffs-shell, .stream-diffs-surface")).some(er));
      }
      var o;
      return (function(l) {
        var i, u;
        const c = l.querySelector("[data-markstream-mermaid], .mermaid-block-container");
        if (c) {
          if (c.dataset.markstreamPending === "true") return !1;
          const m = c.dataset.markstreamMode;
          return m === "preview" ? !!(c.querySelector("svg") || c.querySelector('[data-mermaid-svg-layer="1"] svg')) : m === "fallback" && !!((u = (i = c.querySelector(".mermaid-source-code")) == null ? void 0 : i.textContent) != null && u.trim());
        }
        const v = l.querySelector("[data-markstream-infographic], .infographic-block-container");
        if (v) return v.dataset.markstreamPending !== "true";
        const f = l.querySelector("[data-markstream-d2], .d2-block-container");
        return f ? f.dataset.markstreamPending !== "true" : !!l.querySelector('pre[data-markstream-pre="1"]');
      })(r);
    })(n) : (function(r) {
      var a;
      return ((a = r.textContent) != null ? a : "").trim().length > 0 || !!r.querySelector(["hr", "br", "table", "blockquote", "img", "svg", "canvas", "input", "button", "select", "textarea", "[role]", "[aria-label]", "[data-markstream-math]", "[data-markstream-mermaid]", "[data-markstream-infographic]", "[data-markstream-d2]", '[data-markstream-pre="1"]'].join(","));
    })(n));
  }
  function xn(e, t) {
    var n;
    if (!e.markdown) return !0;
    const r = le(A(e), e.index, s);
    if (!String(r ?? "").trim() || t.querySelector("[data-node-index]")) return !0;
    const a = t.querySelector(".markdown-renderer"), o = a ?? t;
    return !Sn(o) && (!!((n = o.textContent) != null ? n : "").trim() || !!o.querySelector(["hr", "br", "table", "blockquote", "img", "svg", "canvas", "input", "button", "[role]", "[aria-label]", "[data-markstream-math]", "[data-markstream-mermaid]", "[data-markstream-infographic]", "[data-markstream-d2]", '[data-markstream-pre="1"]', '[data-markstream-code-block="1"]'].join(",")));
  }
  function tr(e, t, n) {
    if (!e.markdown) return !0;
    const r = le(A(e), e.index, s);
    if (!String(r ?? "").trim()) return !0;
    const a = n.getBoundingClientRect(), o = Array.from(t.querySelectorAll("[data-node-index]")).filter((u) => rt(u, a));
    if (o.length > 0) return o.every((u) => Mn(u));
    const l = t.querySelector(".markdown-renderer"), i = l ?? t;
    return i.querySelector("[data-node-index], .node-placeholder") ? !!(function(u, c, v, f) {
      if (!Ct(u)) return !1;
      const m = v.getBoundingClientRect(), h = c.getBoundingClientRect();
      return m.width > 0 && m.height > 0 && m.bottom <= f.top + 1 && h.bottom > f.top;
    })(e, t, i, a) && xn(e, t) : xn(e, t);
  }
  function Ct(e) {
    const t = P.get(e.key);
    return Kt(e.key, t) > 0;
  }
  function nr(e, t) {
    var n, r, a, o;
    if (!e.markdown || !st && !He || Ct(e)) return !0;
    const l = le(A(e), e.index, s);
    if (!String(l ?? "").trim()) return !0;
    if (!t.querySelector(".markdown-renderer")) return !1;
    const i = j.get(e.key);
    if (!Re(e, i)) return !1;
    const u = i?.metrics, c = Number((n = u?.totalHeight) != null ? n : 0);
    if (!Number.isFinite(c) || c <= 0) return !1;
    const v = Number((r = u?.measuredCount) != null ? r : 0), f = Number((a = u?.estimatedCount) != null ? a : 0), m = Number((o = u?.nodeCount) != null ? o : 0), h = m <= 0 || v >= m && f <= 0, k = Ee(u?.confidence), g = ut(u), S = u?.stable === !0 || k || g;
    return He ? u?.final === !0 && (h && k || g) : S || u?.final === !0;
  }
  function rr() {
    const e = K.value;
    if (!e) return !1;
    const t = Ht(_);
    if (t != null && Math.abs((e.scrollTop || 0) - wt(t)) > xe) return !1;
    const n = R.value.records;
    if (!n.length) return q.value.records.length === 0;
    const r = new Map(Array.from(e.querySelectorAll("[data-markstream-item-key]")).map((i) => {
      var u;
      return [(u = i.dataset.markstreamItemKey) != null ? u : "", i];
    })), a = [];
    for (const i of n) {
      const u = r.get(i.key);
      u && Zn(u, e) && a.push({ record: i, el: u });
    }
    if (!a.length) return !1;
    for (const { record: i, el: u } of a)
      if (u.offsetHeight + 1 < i.size || !tr(i, u, e) || !nr(i, u)) return !1;
    const o = e.getBoundingClientRect();
    if (Array.from(e.querySelectorAll(['[data-markstream-pending="true"]', '[data-markstream-mermaid][data-markstream-mode="pending"]', '.mermaid-block-container[data-markstream-mode="pending"]', '[data-markstream-code-loading="1"]'].join(","))).some((i) => !(!rt(i, o) || i.matches('[data-markstream-code-block="1"]') && qt(i.querySelector("pre.code-pre-fallback"))))) return !1;
    const l = Array.from(e.querySelectorAll("[data-node-index]")).filter((i) => rt(i, o));
    for (const i of l) if (!Mn(i)) return !1;
    return !0;
  }
  function or() {
    const e = K.value;
    if (!e) return "";
    const t = e.getBoundingClientRect(), n = new Map(Array.from(e.querySelectorAll("[data-markstream-item-key]")).map((o) => {
      var l;
      return [(l = o.dataset.markstreamItemKey) != null ? l : "", o];
    })), r = R.value.records.map((o) => {
      var l, i, u, c, v, f, m, h, k;
      const g = n.get(o.key), S = g?.querySelector(".markdown-renderer"), d = (l = j.get(o.key)) == null ? void 0 : l.metrics;
      return [o.key, o.size, (i = g?.offsetHeight) != null ? i : 0, (u = g?.scrollHeight) != null ? u : 0, (c = S?.offsetHeight) != null ? c : 0, (v = S?.scrollHeight) != null ? v : 0, d ? Math.round(Number(d.totalHeight || 0)) : "", (f = d?.measuredCount) != null ? f : "", (m = d?.estimatedCount) != null ? m : "", (h = d?.nodeCount) != null ? h : "", d?.final === !0 ? 1 : 0, d?.stable === !0 ? 1 : 0, (k = d?.confidence) != null ? k : ""].join(":");
    }).join("|"), a = Array.from(e.querySelectorAll("[data-node-index]")).filter((o) => rt(o, t)).map((o) => {
      var l, i, u, c, v;
      const f = o.getBoundingClientRect(), m = o.querySelector(":scope > .node-content"), h = m?.querySelector('[data-markstream-code-block="1"]'), k = m?.querySelector("pre.code-pre-fallback"), g = m?.querySelector("diffs-container, .stream-diffs-shell");
      return [(l = o.dataset.nodeIndex) != null ? l : "", (i = o.dataset.nodeType) != null ? i : "", Math.round(f.height), (u = m?.offsetHeight) != null ? u : 0, (c = m?.scrollHeight) != null ? c : 0, (v = h?.dataset.markstreamEnhanced) != null ? v : "", h ? Math.round(h.getBoundingClientRect().height) : 0, k ? Math.round(k.getBoundingClientRect().height) : 0, g ? Math.round(g.getBoundingClientRect().height) : 0].join(":");
    }).join("|");
    return [Math.round(e.scrollTop || 0), Math.round(e.scrollHeight || 0), Math.round(q.value.totalHeight || 0), r, a].join(`
`);
  }
  function ot() {
    return typeof performance < "u" ? performance.now() : Date.now();
  }
  function ar() {
    return He ? 24 : 2;
  }
  function Rt(e) {
    Ae(e) && he !== e && (he = e, (function(t) {
      return n = this, r = function* () {
        const a = ot();
        let o = 0, l = "";
        for (let i = 0; i < 40; i++) {
          if (yield Me(), yield new Promise((f) => {
            typeof requestAnimationFrame != "function" ? f() : requestAnimationFrame(() => f());
          }), !Ae(t)) return !1;
          U(t, _);
          const u = ot(), c = rr(), v = c ? or() : "";
          if (c && v === l && v) {
            if (o += 1, o >= ar() && u - a >= 96) return !0;
          } else o = 0, l = v;
        }
        return !1;
      }, new Promise((a, o) => {
        var l = (c) => {
          try {
            u(r.next(c));
          } catch (v) {
            o(v);
          }
        }, i = (c) => {
          try {
            u(r.throw(c));
          } catch (v) {
            o(v);
          }
        }, u = (c) => c.done ? a(c.value) : Promise.resolve(c.value).then(l, i);
        u((r = r.apply(n, null)).next());
      });
      var n, r;
    })(e).then((t) => {
      if (he === e && (he = 0), Ae(e)) return t ? void Pt(e) : (function() {
        if (Fe < 0) return !1;
        const n = (function() {
          if (s.restoreMaxLoadingMs === !1) return Number.POSITIVE_INFINITY;
          const r = Number(s.restoreMaxLoadingMs);
          return Number.isFinite(r) && r > 0 ? r : Number.POSITIVE_INFINITY;
        })();
        return Number.isFinite(n) && ot() - Fe >= n;
      })() ? (s.debug, void Pt(e)) : ((function(n) {
        Je !== n && (Je = n, s.debug);
      })(e), void (function(n) {
        Ae(n) && typeof window < "u" && ($ != null && window.clearTimeout($), $ = window.setTimeout(() => {
          $ = null, Ae(n) && Rt(n);
        }, 120));
      })(e));
    }));
  }
  function At() {
    I.value = !0, Fe = -1, he = 0, Je = 0, st = !1, He = !1, $ != null && typeof window < "u" && window.clearTimeout($), $ = null;
  }
  function Nt() {
    Lt = !0;
  }
  function Bn(e) {
    var t, n;
    const r = [];
    if (!(function(a) {
      var o, l;
      return !!a && ((o = a.measurementKey) != null ? o : "") === te.value && ((l = a.widthBucket) != null ? l : 0) === Y.value;
    })(e)) return r;
    for (const [a, o] of Object.entries((t = e?.itemHeights) != null ? t : {})) {
      if (!Number.isFinite(o) || o <= 0) continue;
      const l = we(a), i = (n = e?.itemSizeSources) == null ? void 0 : n[a];
      ht(l, i) && r.push([a, Math.ceil(o), i]);
    }
    return r;
  }
  function Kn(e) {
    var t;
    for (const [n, r] of Object.entries((t = e?.markdownStates) != null ? t : {})) if (Re(we(n), r)) return !0;
    return !1;
  }
  function Pt(e) {
    if (e !== Ye) return;
    Tt();
    const t = new Set(ee);
    kt(), U(e, _), H.value = !1, Fe = -1, _ = void 0, fe = null, D = 0;
    for (const n of q.value.records) n.markdown && !t.has(n.key) || Pe(n.key);
    for (const n of t) {
      const r = T.get(n);
      r ? je(r, { allowMarkdownShrink: !0, allowRestoredFloorShrink: !0, markdownLogicalHeight: an(r.key), source: vt(r), updateLayout: !0 }) : Pe(n);
    }
    ee.clear(), et(), O({ remember: !1 }), At(), Nt();
  }
  function Tn(e, t = {}) {
    var n;
    const r = ++Ye;
    de = null, e?.widthBucket && Y.value === 0 && (Y.value = e.widthBucket);
    const a = e?.outerAnchor, o = (function(f) {
      return !!(f?.outerAnchor || Bn(f).length > 0 || Kn(f));
    })(e), l = Kn(e), i = !(!Lt && t.threadSwitch !== !0 || o), u = o || i, c = a ?? (u ? (function() {
      if (s.stickToBottom !== !1) return { type: "bottom", distanceFromBottomPx: 0 };
      const f = q.value.records[0];
      return f ? { type: "item", itemKey: f.key, offsetWithinItemPx: 0 } : void 0;
    })() : void 0);
    kt(), he = 0, Je = 0, I.value = !u, H.value = u && !!c, D = r, _ = c, st = u && l, He = u && i, Fe = H.value ? ot() : -1, Fn(), J.clear(), P.clear(), ie.clear(), Z.clear(), se.clear(), ee.clear(), j.clear(), Be.clear(), De.clear();
    for (const [f, m, h] of Bn(e)) {
      const k = Math.ceil(m);
      P.set(f, h), J.set(f, k), ie.set(f, k), Z.set(f, h);
    }
    for (const [f, m] of Object.entries((n = e?.markdownStates) != null ? n : {})) {
      j.set(f, m);
      const h = yt(f, m);
      h > 0 && se.set(f, h);
    }
    Ut({ forceFull: !0 }), s.stickToBottom === !0 ? (z.value = !0, N.value = !0) : s.stickToBottom === !1 ? (z.value = !1, N.value = !1) : (z.value = c?.type === "bottom", N.value = c?.type === "bottom" && c.distanceFromBottomPx <= 2);
    const v = Ht(c);
    return fe = v == null ? null : wt(v), v != null && Ne(v, { writeDom: !0, remember: !1, updatePinned: !1 }), ve = e?.threadKey === w.value ? e : null, u ? c ? void Me(() => {
      U(r, c), typeof window < "u" ? (En.forEach((f) => {
        const m = window.setTimeout(() => {
          U(r, c);
        }, f);
        it.push(m);
      }), Rt(r)) : Pt(r);
    }) : (H.value = !1, _ = void 0, fe = null, D = 0, O({ remember: !1 }), At(), void Nt()) : (H.value = !1, _ = void 0, fe = null, D = 0, O({ remember: !1 }), At(), Nt(), void (s.stickToBottom !== !1 && (z.value = !0, N.value = !0, Me(() => {
      H.value || Bt();
    }))));
  }
  function Fn() {
    for (const e of Ke.values()) e.disconnect();
    Ke.clear(), ce.clear();
  }
  return at(w, (e, t) => {
    const n = ct ?? t, r = !!(n && n !== e);
    r && (function(a) {
      var o;
      gn(), ((o = tt()) == null ? void 0 : o.threadKey) !== a && (ve?.threadKey === a ? (Ve.set(a, ve), $t(ve)) : Ve.has(a) || re(a));
    })(n), ct = e, Tn((function(a) {
      return (a ? Ve.get(a) : null) || (function(o) {
        var l;
        const i = s.initialThreadState;
        return i ? ((l = i.threadKey) != null ? l : "") !== (o ?? "") ? null : i : null;
      })(a);
    })(e), { threadSwitch: r });
  }, { immediate: !0, flush: "sync" }), at(() => R.value.records.map((e) => e.key).join("\0"), () => {
    var e;
    e = { start: R.value.start, end: R.value.end }, Le("range-change", e);
  }, { immediate: !0 }), at(() => [s.items.length, q.value.totalHeight], () => {
    H.value || s.stickToBottom !== !1 && (s.stickToBottom !== "auto" || N.value) && Me(() => {
      H.value || s.stickToBottom !== !1 && (s.stickToBottom !== "auto" || N.value) && Bt();
    });
  }, { flush: "post" }), sr(() => {
    ln(), Mt(), _ ? (U(D, _), O({ remember: !1 }), re()) : s.stickToBottom === !1 ? (O({ remember: !1 }), re()) : (z.value = !0, Ne(ne(), { writeDom: !0, remember: !1, updatePinned: !1 }), O({ remember: !1 }), re()), K.value && typeof ResizeObserver < "u" && (Te = new ResizeObserver(() => {
      ln(), O();
    }), Te.observe(K.value));
  }), cr(() => {
    I.value || Rt(D);
  }), dr(() => {
    tt() || re(), kt(), de = null, E != null && typeof window < "u" && window.clearTimeout(E), E = null, We = void 0, hn(F.raf), F.scheduled = !1, F.raf = null, F.anchor = void 0, hn(Ze), ze = !1, Ze = null, Xe.clear(), Fn(), P.clear(), ie.clear(), Z.clear(), se.clear(), ee.clear(), Be.clear(), De.clear(), Te?.disconnect(), Te = null, be.clear(), pe.clear();
  }), p({ captureThreadState: function() {
    return bn(w.value);
  }, restoreThreadState: Tn, scrollToBottom: Bt, scrollToIndex: function(e, t = "start") {
    const n = q.value.records[e];
    if (!n) return;
    let r = bt() + Ue(n);
    t === "center" ? r -= (X.value - n.size) / 2 : t === "end" && (r -= X.value - n.size), xt(r);
  }, scrollToOffset: xt, getItemSize: (e) => {
    var t;
    const n = we(e);
    return n && (t = gt(n)) != null ? t : void 0;
  }, getTotalHeight: () => q.value.totalHeight, getVisibleRange: () => ({ start: R.value.start, end: R.value.end }) }), (e, t) => (G(), Se("div", { ref_key: "scrollRoot", ref: K, class: _t(["markstream-virtual-timeline", { "is-restoring-thread": !I.value }]), "data-markstream-virtual-timeline": "1", "data-testid": "markstream-virtual-timeline", onScroll: Un }, [Ie("div", { class: "markstream-virtual-timeline__spacer", style: lt({ height: `${R.value.topSpacerHeight}px` }), "aria-hidden": "true" }, null, 4), (G(!0), Se(mr, null, fr(R.value.records, (n) => (G(), Se("div", { key: n.renderKey, class: _t(["markstream-virtual-timeline__item", { "is-restored-height-floor": Ct(n) }]), "data-markstream-item-key": n.key, "data-markstream-item-kind": n.kind, style: lt({ minHeight: `${n.size}px`, "--markstream-virtual-item-size": `${n.size}px` }) }, [qn(e.$slots, "default", Rn({ ref_for: !0 }, Gn(n)), () => {
    var r, a;
    return [n.markdown ? (G(), Cn(vr(hr), Rn({ key: 0, ref_for: !0 }, kn(n)), null, 16)) : en(n) ? (G(), Cn(gr(en(n)), { key: 1, ref_for: !0, ref: Ft(n), item: A(n) }, null, 8, ["item"])) : (G(), Se("div", { key: 2, ref_for: !0, ref: Ft(n), class: _t(["markstream-virtual-timeline__default-item", `markstream-virtual-timeline__default-item--${n.kind || "item"}`]) }, [n.kind === "tool-call" && ((r = A(n)) != null && r.status) ? (G(), Se("span", Hr, An((a = A(n)) == null ? void 0 : a.status), 1)) : Nn("", !0), yr(" " + An(Xn(n)), 1)], 2))];
  }, !0)], 14, Fr))), 128)), Ie("div", { class: "markstream-virtual-timeline__spacer", style: lt({ height: `${R.value.bottomSpacerHeight}px` }), "aria-hidden": "true" }, null, 4), I.value ? Nn("", !0) : (G(), Se("div", { key: 0, class: "markstream-virtual-timeline__restore-loading", style: lt({ height: `${Math.max(1, pt())}px`, transform: `translateY(${W.value}px)` }), "aria-live": "polite", "aria-busy": "true" }, [qn(e.$slots, "restore-loading", { threadKey: w.value, visibleRecords: R.value.records }, () => [t[0] || (t[0] = Ie("div", { class: "markstream-virtual-timeline__restore-loading-card" }, [Ie("span", { class: "markstream-virtual-timeline__restore-spinner", "aria-hidden": "true" }), Ie("span", null, "Loading thread…")], -1))], !0)], 4))], 34));
} })), [["__scopeId", "data-v-d443e2b2"]]), jt = On;
jt.install = (B) => {
  var p, M;
  const s = (M = (p = jt.__name) != null ? p : jt.name) != null ? M : "MarkstreamVirtualTimeline";
  B.component(s, On);
};
export {
  jt as default
};
