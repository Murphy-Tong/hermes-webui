import { bQ as lt, M as at, bl as rt, af as ut, bX as it, b_ as st, b$ as dt, c0 as ct, c1 as vt, aU as c, q as k, bE as K, aD as mt, as as fe, az as ft, aL as v, u as m, v as i, bk as f, au as pe, bb as N, t as A, aw as ge, bL as pt, bB as gt, c4 as Se, c5 as ht, bZ as yt, c7 as wt, cb as bt } from "./index-DDXmUfVV.js";
var kt = Object.defineProperty, Pe = Object.getOwnPropertySymbols, xt = Object.prototype.hasOwnProperty, Bt = Object.prototype.propertyIsEnumerable, Le = (g, o, s) => o in g ? kt(g, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : g[o] = s, he = (g, o) => {
  for (var s in o || (o = {})) xt.call(o, s) && Le(g, s, o[s]);
  if (Pe) for (var s of Pe(o)) Bt.call(o, s) && Le(g, s, o[s]);
  return g;
}, ye = (g, o, s) => new Promise((w, a) => {
  var j = (h) => {
    try {
      p(s.next(h));
    } catch (r) {
      a(r);
    }
  }, x = (h) => {
    try {
      p(s.throw(h));
    } catch (r) {
      a(r);
    }
  }, p = (h) => h.done ? w(h.value) : Promise.resolve(h.value).then(j, x);
  p((s = s.apply(g, o)).next());
});
const Dt = ["data-markstream-mode", "data-markstream-pending"], Ct = { key: 0, class: "d2-block-header flex justify-between items-center border-b" }, Mt = { class: "d2-header-actions flex items-center" }, Et = { key: 0, class: "d2-mode-toggle flex items-center gap-0.5" }, Tt = ["aria-label"], At = { key: 0, xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "action-icon" }, jt = { key: 1, xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "action-icon" }, Ht = ["aria-label"], Ot = ["aria-pressed"], It = { key: 0, class: "d2-source" }, Ft = { class: "d2-code" }, St = { key: 0, class: "d2-error mt-2 text-xs" }, Pt = { key: 1 }, Lt = { key: 0, class: "d2-source" }, Nt = { class: "d2-code" }, Rt = { key: 0, class: "d2-error mt-2 text-xs" }, _t = ["innerHTML"], Ut = { key: 0, class: "d2-error px-4 pb-3 text-xs" }, we = /* @__PURE__ */ lt(/* @__PURE__ */ at({ __name: "D2BlockNode", props: { node: {}, maxHeight: { default: void 0 }, estimatedPreviewHeightPx: { default: void 0 }, loading: { type: Boolean, default: !0 }, isDark: { type: Boolean }, progressiveRender: { type: Boolean, default: !0 }, progressiveIntervalMs: { default: 700 }, themeId: {}, darkThemeId: {}, showHeader: { type: Boolean, default: !0 }, showModeToggle: { type: Boolean, default: !0 }, showCopyButton: { type: Boolean, default: !0 }, showExportButton: { type: Boolean, default: !0 }, showCollapseButton: { type: Boolean, default: !0 } }, setup(g) {
  const o = g, s = rt(), w = ut(it, null), { t: a } = st(), j = c(!1), x = c(!1), p = c(!1), h = c(!1), r = c(null), W = c(!1), H = c(""), re = c(""), ue = c(0), R = c(""), O = c(""), ee = c(null), be = c(null), ie = c(null), Ne = dt(), te = ct(), ke = vt(), X = c(null), xe = typeof window < "u", Be = c(!1), I = c(typeof window > "u" || !ke.value), C = k(() => {
    var t;
    return (t = o.node.code) != null ? t : "";
  }), Re = k(() => yt(o, s)), oe = k(() => {
    var t, e;
    return [o.isDark ? "dark" : "light", (t = o.themeId) != null ? t : "auto", (e = o.darkThemeId) != null ? e : "auto", C.value].join(":");
  }), ne = k(() => !!H.value && re.value === oe.value), De = k(() => {
    if (!Be.value || !C.value || p.value) return !1;
    const t = oe.value;
    return !!W.value || R.value !== t && (!r.value || O.value !== t);
  }), se = k(() => ne.value || !!H.value && De.value), le = k(() => p.value || !h.value || !se.value), _e = k(() => {
    var t;
    return p.value || se.value ? 0 : C.value ? r.value && O.value === oe.value ? 0 : (t = wt(o.estimatedPreviewHeightPx)) != null ? t : 0 : 0;
  }), Ue = k(() => {
    var t;
    if (!le.value) return;
    const e = Math.max((t = be.value) != null ? t : 0, _e.value);
    return e > 0 ? { minHeight: `${e}px` } : void 0;
  }), $e = k(() => {
    if (o.maxHeight === "none") return { maxHeight: "none", "--ms-d2-render-max-height": "none" };
    if (o.maxHeight != null) {
      const t = typeof o.maxHeight == "number" ? `${o.maxHeight}px` : String(o.maxHeight);
      return { maxHeight: t, "--ms-d2-render-max-height": t };
    }
  });
  let B = null, de = !1, _ = !1, Ce = 0, U = null, F = !1, z = null, M = "";
  typeof window < "u" && K([() => ie.value, ke], ([t, e]) => {
    var n, d, S;
    if ((n = X.value) == null || n.destroy(), X.value = null, !e || I.value) return void (I.value = !0);
    if (!t) return void (I.value = !1);
    const P = (S = (d = te?.value.heavyBlockMargin) != null ? d : te?.value.rootMargin) != null ? S : "160px", $ = Ne(t, { rootMargin: P, allowIdle: !1 });
    X.value = $, I.value = $.isVisible.value, $.whenVisible.then(() => {
      I.value = !0;
    });
  }, { immediate: !0 });
  const Ve = { N1: "#E5E7EB", N2: "#CBD5E1", N3: "#94A3B8", N4: "#64748B", N5: "#475569", N6: "#334155", N7: "#0B1220", B1: "#60A5FA", B2: "#3B82F6", B3: "#2563EB", B4: "#1D4ED8", B5: "#1E40AF", B6: "#111827", AA2: "#22D3EE", AA4: "#0EA5E9", AA5: "#0284C7", AB4: "#FBBF24", AB5: "#F59E0B" };
  function Me(t) {
    return !t || t.disabled;
  }
  function E(t, e, n = "top") {
    if (Me(t.currentTarget)) return;
    const d = t, S = d?.clientX != null && d?.clientY != null ? { x: d.clientX, y: d.clientY } : void 0;
    Se(t.currentTarget, e, n, !1, S, o.isDark);
  }
  function b() {
    ht();
  }
  function Ee(t) {
    if (Me(t.currentTarget)) return;
    const e = j.value ? a("common.copied") || "Copied" : a("common.copy") || "Copy", n = t, d = n?.clientX != null && n?.clientY != null ? { x: n.clientX, y: n.clientY } : void 0;
    Se(t.currentTarget, e, "top", !1, d, o.isDark);
  }
  function Xe() {
    return ye(this, null, function* () {
      try {
        const t = C.value;
        typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.writeText == "function" && (yield navigator.clipboard.writeText(t)), j.value = !0, setTimeout(() => {
          j.value = !1;
        }, 1e3);
      } catch (t) {
        console.error("Copy failed:", t);
      }
    });
  }
  function ze() {
    x.value = !x.value;
  }
  function Te(t) {
    p.value = t === "source";
  }
  const qe = [/javascript:/i, /expression\s*\(/i, /url\s*\(\s*javascript:/i, /@import/i], Ye = /^(?:https?:|mailto:|tel:|#|\/|data:image\/(?:png|gif|jpe?g|webp);)/i;
  function Ge(t) {
    if (!t) return "";
    const e = t.trim();
    return Ye.test(e) ? e : "";
  }
  function Ae() {
    H.value = "", re.value = "";
  }
  function q(t) {
    return _ || t !== ue.value;
  }
  function Qe() {
    return ye(this, null, function* () {
      var t, e, n, d, S;
      if (!xe || _ || !I.value || o.loading && !o.progressiveRender) return;
      const P = oe.value;
      if (P === R.value && !r.value && ne.value) return h.value = !0, void (o.loading && (p.value = !1));
      const $ = C.value;
      if (!$) return Ae(), r.value = null, R.value = "", void (O.value = "");
      const G = ++ue.value;
      W.value = !0, r.value = null, O.value = "", (function() {
        const u = Re.value;
        w && u && M !== u && (M && w.markSettled(M), M = u, w.markPending(u));
      })();
      try {
        const u = yield (function() {
          return ye(this, null, function* () {
            if (B) return B;
            const l = yield bt();
            if (_ || !l) return null;
            if (typeof l == "function") {
              const Z = new l();
              return Z && typeof Z.compile == "function" ? B = Z : typeof l.compile == "function" && (B = l), B;
            }
            return l?.D2 && typeof l.D2 == "function" ? (B = new l.D2(), B) : (typeof l.compile == "function" && (B = l), B);
          });
        })();
        if (q(G)) return;
        if (!u) return h.value = !1, p.value = !0, Ae(), r.value = "D2 is not available.", void (O.value = P);
        if (typeof u.compile != "function" || typeof u.render != "function") throw new TypeError("D2 instance is missing compile/render methods.");
        h.value = !0;
        const y = yield u.compile($);
        if (q(G)) return;
        const ae = (t = y?.diagram) != null ? t : y, D = (n = (e = y?.renderOptions) != null ? e : y?.options) != null ? n : {}, Je = (d = o.themeId) != null ? d : D.themeID, je = (S = o.darkThemeId) != null ? S : D.darkThemeID, Q = he({}, D);
        if (Q.themeID = o.isDark && je != null ? je : Je, Q.darkThemeID = null, Q.darkThemeOverrides = null, o.isDark) {
          const l = D.themeOverrides && typeof D.themeOverrides == "object" ? D.themeOverrides : null;
          Q.themeOverrides = he(he({}, Ve), l || {});
        }
        const Ke = yield u.render(ae, Q);
        if (q(G)) return;
        const He = (function(l) {
          return l ? typeof l == "string" ? l : typeof l.svg == "string" ? l.svg : typeof l.data == "string" ? l.data : "" : "";
        })(Ke);
        if (!He) throw new Error("D2 render returned empty output.");
        (function(l, Z) {
          const Oe = (function(Ie) {
            if (typeof window > "u" || typeof DOMParser > "u" || !Ie) return "";
            const We = Ie.replace(/["']\s*javascript:/gi, "#").replace(/\bjavascript:/gi, "#").replace(/["']\s*vbscript:/gi, "#").replace(/\bvbscript:/gi, "#").replace(/\bdata:text\/html/gi, "#"), ve = new DOMParser().parseFromString(We, "image/svg+xml").documentElement;
            if (!ve || ve.nodeName.toLowerCase() !== "svg") return "";
            const me = ve;
            return (function(Fe) {
              const et = /* @__PURE__ */ new Set(["script"]), tt = [Fe, ...Array.from(Fe.querySelectorAll("*"))];
              for (const L of tt) {
                if (et.has(L.tagName.toLowerCase())) {
                  L.remove();
                  continue;
                }
                const ot = Array.from(L.attributes);
                for (const V of ot) {
                  const T = V.name;
                  if (/^on/i.test(T)) L.removeAttribute(T);
                  else {
                    if (T === "style" && V.value) {
                      const J = V.value;
                      if (qe.some((nt) => nt.test(J))) {
                        L.removeAttribute(T);
                        continue;
                      }
                    }
                    if ((T === "href" || T === "xlink:href") && V.value) {
                      const J = Ge(V.value);
                      if (!J) {
                        L.removeAttribute(T);
                        continue;
                      }
                      J !== V.value && L.setAttribute(T, J);
                    }
                  }
                }
              }
            })(me), me.classList.add("markstream-d2-root-svg"), me.outerHTML;
          })(l);
          H.value = Oe || "", re.value = Oe ? Z : "";
        })(He, P), R.value = P, O.value = "", o.loading && (p.value = !1), r.value = null;
      } catch (u) {
        if (q(G)) return;
        const y = u?.message ? String(u.message) : "D2 render failed.";
        o.loading || (r.value = y, O.value = P), R.value = "", y.includes("@terrastruct/d2") && (h.value = !1, p.value = !0);
      } finally {
        q(G) || (W.value = !1, F ? (F = !1, Y()) : (function() {
          const u = M;
          w && u && (M = "", fe(() => {
            var y, ae;
            if (!_) {
              const D = (ae = (y = ie.value) == null ? void 0 : y.offsetHeight) != null ? ae : 0;
              D > 0 && w.reportHeight(u, D);
            }
            w.markSettled(u);
          }));
        })());
      }
    });
  }
  function Y(t = !1) {
    if (de || !xe || _) return;
    if (W.value) return void (F = !0);
    const e = Math.max(120, Number(o.progressiveIntervalMs) || 0), n = Date.now() - Ce;
    if (!t && n < e) return F = !0, void (U == null && (U = window.setTimeout(() => {
      U = null, F && (F = !1, Y(!0));
    }, Math.max(0, e - n))));
    de = !0;
    const d = () => {
      de = !1, Ce = Date.now(), Qe();
    };
    typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(d) : setTimeout(d, 0);
  }
  function Ze() {
    if (ne.value) try {
      const t = new Blob([H.value], { type: "image/svg+xml;charset=utf-8" }), e = URL.createObjectURL(t);
      if (typeof document < "u") {
        const n = document.createElement("a");
        n.href = e, n.download = `d2-diagram-${Date.now()}.svg`, document.body.appendChild(n), n.click(), document.body.removeChild(n);
      }
      URL.revokeObjectURL(e);
    } catch (t) {
      console.error("Failed to export SVG:", t);
    }
  }
  function ce() {
    var t;
    const e = ee.value;
    if (!e) return;
    const n = ((t = e.firstElementChild) != null ? t : e).getBoundingClientRect().height;
    n > 0 && (be.value = n);
  }
  return K(() => [o.node.code, o.loading, o.isDark, o.themeId, o.darkThemeId], () => {
    Y();
  }, { immediate: !0 }), K(() => o.loading, (t, e) => {
    e && !t && Y(!0);
  }), K(() => I.value, (t) => {
    t && Y(!0);
  }), K(() => [le.value, H.value, C.value], () => {
    fe(() => {
      ce();
    });
  }), mt(() => {
    Be.value = !0, fe(() => {
      ce();
    }), typeof ResizeObserver < "u" && (z = new ResizeObserver(() => {
      ce();
    }), ee.value && z.observe(ee.value));
  }), ft(() => {
    var t;
    _ = !0, ue.value += 1, F = !1, (function() {
      const e = M;
      w && e && (M = "", w.markSettled(e));
    })(), R.value = "", (t = X.value) == null || t.destroy(), X.value = null, U != null && (clearTimeout(U), U = null), z?.disconnect(), z = null;
  }), (t, e) => (v(), m("div", { ref_key: "viewportTarget", ref: ie, class: pe(["d2-block-container rounded-lg border overflow-hidden", { dark: o.isDark }]), "data-markstream-d2": "1", "data-markstream-mode": le.value ? "fallback" : "preview", "data-markstream-pending": De.value ? "true" : void 0 }, [o.showHeader ? (v(), m("div", Ct, [e[16] || (e[16] = i("div", { class: "flex items-center gap-x-2" }, [i("span", { class: "d2-label font-medium font-mono" }, "D2")], -1)), i("div", Mt, [o.showModeToggle ? (v(), m("div", Et, [i("button", { type: "button", class: pe(["mode-btn px-2 py-0.5 rounded", p.value ? "" : "is-active"]), onClick: e[0] || (e[0] = (n) => Te("preview")), onMouseenter: e[1] || (e[1] = (n) => E(n, f(a)("common.preview") || "Preview")), onFocus: e[2] || (e[2] = (n) => E(n, f(a)("common.preview") || "Preview")), onMouseleave: b, onBlur: b }, N(f(a)("common.preview") || "Preview"), 35), i("button", { type: "button", class: pe(["mode-btn px-2 py-0.5 rounded", p.value ? "is-active" : ""]), onClick: e[3] || (e[3] = (n) => Te("source")), onMouseenter: e[4] || (e[4] = (n) => E(n, f(a)("common.source") || "Source")), onFocus: e[5] || (e[5] = (n) => E(n, f(a)("common.source") || "Source")), onMouseleave: b, onBlur: b }, N(f(a)("common.source") || "Source"), 35)])) : A("", !0), o.showCopyButton ? (v(), m("button", { key: 1, type: "button", class: "d2-action-btn p-[var(--ms-action-btn-padding)] rounded-md", "aria-label": j.value ? f(a)("common.copied") || "Copied" : f(a)("common.copy") || "Copy", onClick: Xe, onMouseenter: e[6] || (e[6] = (n) => Ee(n)), onFocus: e[7] || (e[7] = (n) => Ee(n)), onMouseleave: b, onBlur: b }, [j.value ? (v(), m("svg", jt, [...e[13] || (e[13] = [i("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M20 6L9 17l-5-5" }, null, -1)])])) : (v(), m("svg", At, [...e[12] || (e[12] = [i("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [i("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), i("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })], -1)])]))], 40, Tt)) : A("", !0), o.showExportButton && ne.value ? (v(), m("button", { key: 2, type: "button", class: "d2-action-btn p-[var(--ms-action-btn-padding)] rounded-md", "aria-label": f(a)("common.export") || "Export", onClick: Ze, onMouseenter: e[8] || (e[8] = (n) => E(n, f(a)("common.export") || "Export")), onFocus: e[9] || (e[9] = (n) => E(n, f(a)("common.export") || "Export")), onMouseleave: b, onBlur: b }, [...e[14] || (e[14] = [i("svg", { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "action-icon" }, [i("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M12 3v12m0-12l-4 4m4-4l4 4M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" })], -1)])], 40, Ht)) : A("", !0), o.showCollapseButton ? (v(), m("button", { key: 3, type: "button", class: "d2-action-btn p-[var(--ms-action-btn-padding)] rounded-md", "aria-pressed": x.value, onClick: ze, onMouseenter: e[10] || (e[10] = (n) => E(n, x.value ? f(a)("common.expand") || "Expand" : f(a)("common.collapse") || "Collapse")), onFocus: e[11] || (e[11] = (n) => E(n, x.value ? f(a)("common.expand") || "Expand" : f(a)("common.collapse") || "Collapse")), onMouseleave: b, onBlur: b }, [(v(), m("svg", { style: ge({ rotate: x.value ? "0deg" : "90deg" }), xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "action-icon" }, [...e[15] || (e[15] = [i("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m9 18l6-6l-6-6" }, null, -1)])], 4))], 40, Ot)) : A("", !0)])])) : A("", !0), pt(i("div", { ref_key: "bodyRef", ref: ee, class: "d2-block-body", style: ge(Ue.value) }, [o.loading && !se.value ? (v(), m("div", It, [i("pre", Ft, [i("code", null, N(C.value), 1)]), r.value ? (v(), m("p", St, N(r.value), 1)) : A("", !0)])) : (v(), m("div", Pt, [le.value ? (v(), m("div", Lt, [i("pre", Nt, [i("code", null, N(C.value), 1)]), r.value ? (v(), m("p", Rt, N(r.value), 1)) : A("", !0)])) : (v(), m("div", { key: 1, class: "d2-render", style: ge($e.value) }, [i("div", { class: "d2-svg", innerHTML: H.value }, null, 8, _t), r.value ? (v(), m("p", Ut, N(r.value), 1)) : A("", !0)], 4))]))], 4), [[gt, !x.value]])], 10, Dt));
} }), [["__scopeId", "data-v-513c591d"]]);
we.install = (g) => {
  g.component(we.__name, we);
};
export {
  we as default
};
