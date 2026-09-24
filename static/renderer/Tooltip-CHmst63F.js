import { bQ as G, M as H, aU as b, bE as S, az as J, aL as Q, s as A, v as X, I as F, bJ as K, bL as O, aw as V, H as W, bb as Z, bB as ee, g as te, au as le, T as ae, as as k } from "./index-WjDCRcCV.js";
var $ = (h, E, e) => new Promise((o, p) => {
  var i = (a) => {
    try {
      d(e.next(a));
    } catch (c) {
      p(c);
    }
  }, y = (a) => {
    try {
      d(e.throw(a));
    } catch (c) {
      p(c);
    }
  }, d = (a) => a.done ? o(a.value) : Promise.resolve(a.value).then(i, y);
  d((e = e.apply(h, E)).next());
});
const ne = ["id"], oe = ["data-placement"], re = /* @__PURE__ */ G(/* @__PURE__ */ H({ __name: "Tooltip", props: { visible: { type: Boolean }, anchorEl: {}, content: {}, placement: {}, offset: {}, originX: {}, originY: {}, id: {}, isDark: { type: [Boolean, null] } }, setup(h) {
  var E;
  const e = h, o = b(null), p = b(null), i = b({ transform: "translate3d(0px, 0px, 0px)", left: "0px", top: "0px" }), y = b({}), d = b((E = e.placement) != null ? E : "top"), a = b(!1);
  let c = null, _ = null, C = null, T = null, w = null, s = 0;
  function Y() {
    return T ? Promise.resolve(T) : (w || (w = import("./floating-ui.dom-DP8qzYzz.js").then((l) => (T = l, l)).catch((l) => {
      throw w = null, l;
    })), w);
  }
  function D() {
    c && (c(), c = null), _ = null, C = null;
  }
  function N(l) {
    return $(this, null, function* () {
      const t = e.anchorEl, n = o.value;
      if (!e.visible || !t || !n || _ === t && C === n) return;
      const { autoUpdate: r } = yield Y();
      l() && e.visible && e.anchorEl === t && o.value === n && (D(), _ = t, C = n, c = r(t, n, () => {
        P().catch(() => {
          M();
        });
      }));
    });
  }
  function P() {
    return $(this, null, function* () {
      var l, t;
      const n = e.anchorEl, r = o.value;
      if (!e.visible || !n || !r) return !1;
      const { arrow: u, computePosition: m, flip: v, offset: f, shift: x } = yield Y();
      if (!e.visible || e.anchorEl !== n || o.value !== r) return !1;
      const g = [f((l = e.offset) != null ? l : 6), v(), x({ padding: 6 }), ...p.value ? [u({ element: p.value, padding: 4 })] : []], { x: L, y: j, placement: R, middlewareData: U } = yield m(n, r, { placement: (t = e.placement) != null ? t : "top", middleware: g, strategy: "fixed" });
      if (!e.visible || e.anchorEl !== n || o.value !== r) return !1;
      if (i.value.transform = `translate3d(${Math.round(L)}px, ${Math.round(j)}px, 0)`, i.value.left = "0px", i.value.top = "0px", d.value = R, U.arrow && p.value) {
        const { x: z, y: I } = U.arrow, q = { top: "bottom", bottom: "top", left: "right", right: "left" }[R.split("-")[0]];
        y.value = { left: z != null ? `${z}px` : "", top: I != null ? `${I}px` : "", [q]: "-3px" };
      }
      return !0;
    });
  }
  function M() {
    var l, t;
    const n = e.anchorEl, r = o.value;
    if (!n || !r) return !1;
    const u = n.getBoundingClientRect(), m = r.getBoundingClientRect(), v = (l = e.offset) != null ? l : 6, f = (t = e.placement) != null ? t : "top";
    let x = u.left, g = u.top;
    return f === "bottom" ? g = u.bottom + v : f === "left" ? x = u.left - m.width - v : f === "right" ? x = u.right + v : g = u.top - m.height - v, i.value.transform = `translate3d(${Math.round(Math.max(0, x))}px, ${Math.round(Math.max(0, g))}px, 0)`, i.value.left = "0px", i.value.top = "0px", d.value = f, y.value = {}, !0;
  }
  S(() => e.visible, (l) => $(null, null, function* () {
    const t = ++s;
    if (l) {
      if (a.value = !1, yield k(), t !== s || !e.visible) return;
      if (e.anchorEl && o.value) try {
        const n = e.anchorEl, r = o.value, u = n.getBoundingClientRect();
        if (!(yield P()) || t !== s || !e.visible || e.anchorEl !== n || o.value !== r) return;
        const m = i.value.transform;
        if (e.originX != null && e.originY != null) {
          const v = Math.abs(Number(e.originX) - u.left), f = Math.abs(Number(e.originY) - u.top);
          if (Math.hypot(v, f) > 120) {
            if (i.value.transform = `translate3d(${Math.round(e.originX)}px, ${Math.round(e.originY)}px, 0)`, yield k(), t !== s || !e.visible || (a.value = !0, yield k(), t !== s || !e.visible)) return;
            i.value.transform = m;
          } else a.value = !0;
        } else a.value = !0;
        yield N(() => t === s);
      } catch {
        if (t !== s || !e.visible) return;
        if (a.value = M(), e.anchorEl && o.value) try {
          yield N(() => t === s);
        } catch {
        }
      }
      else a.value = !0;
    } else a.value = !1, D();
  }));
  let B = 0;
  return S([() => e.anchorEl, () => e.placement, () => e.content], () => $(null, null, function* () {
    const l = ++B;
    if (e.visible && e.anchorEl && o.value) {
      if (yield k(), l !== B || !e.visible || !e.anchorEl || !o.value) return;
      try {
        const t = yield P();
        if (l !== B || !e.visible || !e.anchorEl || !o.value) return;
        t || M();
      } catch {
        M();
      }
      yield N(() => l === B);
    }
  })), J(() => {
    s += 1, D();
  }), (l, t) => (Q(), A(ae, { to: "body" }, [X("div", { class: le(["markstream-vue", { dark: h.isDark }]) }, [F(te, { name: "tooltip", appear: "" }, { default: K(() => [O(X("div", { id: e.id, ref_key: "tooltip", ref: o, style: V({ position: "fixed", left: i.value.left, top: i.value.top, transform: i.value.transform, visibility: a.value ? "visible" : "hidden", pointerEvents: a.value ? void 0 : "none" }), class: "tooltip-element", role: "tooltip" }, [W(Z(h.content) + " ", 1), X("div", { ref_key: "arrowEl", ref: p, class: "tooltip-arrow", "data-placement": d.value, style: V(y.value) }, null, 12, oe)], 12, ne), [[ee, h.visible]])]), _: 1 })], 2)]));
} }), [["__scopeId", "data-v-c606ee4c"]]);
export {
  re as default
};
