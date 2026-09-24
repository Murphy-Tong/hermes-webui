import { cw as Ga, bQ as aa, M as oa, q as m, bl as Xa, af as Vt, bX as Ya, cx as Ja, b_ as ra, aU as x, b$ as Qa, c0 as Za, c1 as Ka, a0 as Yn, aD as ia, bE as W, az as eo, cy as Jn, aI as ua, aL as ul, s as rt, A as Qn, bJ as il, aY as $l, aw as nt, u as Zn, I as lo, bL as to, v as U, au as it, t as Wt, bB as no, bb as Gt, bk as sa, b7 as ao, bO as oo, T as ro, bZ as io, cz as uo, cA as so, cB as fo, cC as co, cD as vo, cE as mo, cF as ho, cG as po, cH as Kn, cI as go, cJ as yo, c5 as bo, cK as wo, cL as ko, as as O, cM as xo, cN as ea } from "./index-DDXmUfVV.js";
import { B as la, g as So, Q as Co } from "./PreCodeBlock-o-wwZHfb.js";
import { i as se, t as at } from "./safeRaf-BfLvr4ec.js";
var ot = (S, b, M) => new Promise((ve, ee) => {
  var _ = (C) => {
    try {
      n(M.next(C));
    } catch (H) {
      ee(H);
    }
  }, he = (C) => {
    try {
      n(M.throw(C));
    } catch (H) {
      ee(H);
    }
  }, n = (C) => C.done ? ve(C.value) : Promise.resolve(C.value).then(_, he);
  n((M = M.apply(S, b)).next());
});
let Ut = !1, Hl = null, Ol = null, Dl = null;
function Mo() {
  return ot(this, null, function* () {
    if (Dl) return Dl;
    Dl = ot(null, null, function* () {
      if (!Ol) try {
        if (Ol = (function(S) {
          var b, M, ve;
          const ee = S, _ = typeof ee?.createCodeBlockRuntime == "function" || typeof ee?.useMonaco == "function" ? ee : S?.default, he = (b = _?.createCodeBlockRuntime) != null ? b : _?.useMonaco;
          return typeof he != "function" ? null : { createCodeBlockRuntime: (n) => he.call(_, n), detectLanguage: (M = _?.detectLanguage) == null ? void 0 : M.bind(_), preloadStreamDiffs: (ve = _?.preloadStreamDiffs) == null ? void 0 : ve.bind(_) };
        })(yield import("./markstream_markstream-vue-DjWw6Iqb.js")), !Ol) return null;
      } catch {
        return null;
      }
      try {
        return yield (function(S) {
          return ot(this, null, function* () {
            return Ut ? void 0 : Hl || (Hl = ot(null, null, function* () {
              const M = S?.preloadStreamDiffs;
              typeof M == "function" && (yield M()), Ut = !0;
            }).finally(() => {
              Hl = null;
            }), Hl);
          });
        })(Ol), Ga(), Ol;
      } catch {
        return null;
      }
    });
    try {
      return yield Dl;
    } finally {
      Dl = null;
    }
  });
}
var Bo = Object.defineProperty, Po = Object.defineProperties, $o = Object.getOwnPropertyDescriptors, ta = Object.getOwnPropertySymbols, Ho = Object.prototype.hasOwnProperty, Oo = Object.prototype.propertyIsEnumerable, na = (S, b, M) => b in S ? Bo(S, b, { enumerable: !0, configurable: !0, writable: !0, value: M }) : S[b] = M, Ce = (S, b) => {
  for (var M in b || (b = {})) Ho.call(b, M) && na(S, M, b[M]);
  if (ta) for (var M of ta(b)) Oo.call(b, M) && na(S, M, b[M]);
  return S;
}, Nl = (S, b) => Po(S, $o(b)), D = (S, b, M) => new Promise((ve, ee) => {
  var _ = (C) => {
    try {
      n(M.next(C));
    } catch (H) {
      ee(H);
    }
  }, he = (C) => {
    try {
      n(M.throw(C));
    } catch (H) {
      ee(H);
    }
  }, n = (C) => C.done ? ve(C.value) : Promise.resolve(C.value).then(_, he);
  n((M = M.apply(S, b)).next());
});
const Do = { class: "html-preview-frame__header" }, No = { class: "html-preview-frame__title" }, Fo = { class: "html-preview-frame__label" }, Eo = ["sandbox", "srcdoc"], To = /* @__PURE__ */ aa(/* @__PURE__ */ oa({ __name: "HtmlPreviewFrame", props: { code: {}, isDark: { type: Boolean }, htmlPreviewAllowScripts: { type: Boolean }, htmlPreviewSandbox: {}, onClose: { type: Function }, title: {} }, setup(S) {
  const b = S, M = import.meta !== void 0 && !1;
  let ve = null;
  const { t: ee } = ra(), _ = m(() => {
    const C = b.code || "", H = C.trim().toLowerCase();
    return H.startsWith("<!doctype") || H.startsWith("<html") || H.startsWith("<body") ? C : `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: ${b.isDark ? "#020617" : "#ffffff"};
        color: ${b.isDark ? "#e5e7eb" : "#020617"};
      }
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', ui-sans-serif, sans-serif;
      }
    </style>
  </head>
  <body>
    ${C}
  </body>
</html>`;
  }), he = m(() => {
    return C = b.htmlPreviewSandbox, H = b.htmlPreviewAllowScripts, typeof C == "string" ? ((function(qe) {
      if (!M || typeof console > "u" || ve === qe) return;
      const J = (function(Fl) {
        return new Set(Fl.trim().toLowerCase().split(/\s+/).filter(Boolean));
      })(qe);
      J.has("allow-scripts") && J.has("allow-same-origin") && (ve = qe, console.warn("[markstream-vue] htmlPreviewSandbox contains both allow-scripts and allow-same-origin. Use this only for fully trusted content served from an isolated origin."));
    })(C), C) : C !== void 0 ? "" : H === !0 ? "allow-scripts" : "";
    var C, H;
  });
  function n(C) {
    var H;
    C.key !== "Escape" && C.key !== "Esc" || (H = b.onClose) == null || H.call(b);
  }
  return ia(() => {
    typeof window < "u" && window.addEventListener("keydown", n);
  }), ua(() => {
    typeof window < "u" && window.removeEventListener("keydown", n);
  }), (C, H) => (ul(), rt(ro, { to: "body" }, [U("div", { class: it(["markstream-vue", { dark: b.isDark }]) }, [U("div", { class: "html-preview-frame__backdrop", onClick: H[2] || (H[2] = (qe) => {
    var J;
    return (J = b.onClose) == null ? void 0 : J.call(b);
  }) }, [U("div", { class: "html-preview-frame", onClick: H[1] || (H[1] = oo(() => {
  }, ["stop"])) }, [U("div", Do, [U("div", No, [H[3] || (H[3] = U("span", { class: "html-preview-frame__dot" }, null, -1)), U("span", Fo, Gt(b.title || sa(ee)("common.preview") || "Preview"), 1)]), U("button", { type: "button", class: "html-preview-frame__close", onClick: H[0] || (H[0] = (qe) => {
    var J;
    return (J = b.onClose) == null ? void 0 : J.call(b);
  }) }, " × ")]), U("iframe", { class: "html-preview-frame__iframe", sandbox: he.value, referrerpolicy: "no-referrer", srcdoc: _.value }, null, 8, Eo)])])], 2)]));
} }), [["__scopeId", "data-v-24e66176"]]), zo = ["data-markstream-enhanced", "data-markstream-enhancement-state", "data-markstream-code-block-state", "data-markstream-pending", "data-markstream-viewport-pending"], Lo = { class: "code-header-main" }, Ro = ["innerHTML"], _o = { class: "code-header-copy" }, qo = { class: "code-header-title" }, jo = { key: 0, class: "code-header-caption" }, Io = ["data-markstream-host-hidden"], Go = /* @__PURE__ */ aa(/* @__PURE__ */ oa({ __name: "CodeBlockNode", props: { node: {}, codeBlockOptions: {}, showLineNumbers: { type: Boolean, default: void 0 }, isDark: { type: Boolean, default: !1 }, loading: { type: Boolean, default: !0 }, stream: { type: Boolean, default: !0 }, theme: {}, darkTheme: { default: void 0 }, lightTheme: { default: void 0 }, isShowPreview: { type: Boolean, default: !0 }, enableFontSizeControl: { type: Boolean, default: !0 }, minWidth: { default: void 0 }, maxWidth: { default: void 0 }, themes: {}, showPreviewButton: { type: Boolean, default: !0 }, showCollapseButton: { type: Boolean, default: !0 }, showFontSizeButtons: { type: Boolean, default: !0 }, showTooltips: { type: Boolean }, htmlPreviewAllowScripts: { type: Boolean }, htmlPreviewSandbox: {}, customId: {}, showHeader: { type: Boolean, default: !0 }, showCopyButton: { type: Boolean, default: !0 }, showExpandButton: { type: Boolean, default: !0 }, estimatedHeightPx: {}, estimatedContentHeightPx: {}, estimatedDiffInline: { type: Boolean } }, emits: ["previewCode", "copy"], setup(S, { emit: b }) {
  var M, ve, ee, _, he;
  const n = S, C = b, H = m(() => {
    var e, l;
    return (l = n.showLineNumbers) != null ? l : ((e = n.codeBlockOptions) == null ? void 0 : e.disableLineNumbers) !== !0;
  }), qe = Xa(), J = Vt(Ya, null), Fl = Vt("markstreamHostScrollManaged", null), da = Vt(Ja, void 0), fa = m(() => io(n, qe));
  function Ao(e, l) {
  }
  const Xt = Yn(), Yt = m(() => {
    const e = Xt?.vnode.props;
    return !(!e || !e.onPreviewCode && !e["onPreview-code"]);
  }), { t: Jt } = ra(), h = x(null), ne = x(null), ut = x(!1), we = x(zn(n.node.language, n.node.code, _e())), st = m(() => uo(we.value)), Me = m(() => st.value === "plaintext" ? "text" : st.value), dt = m(() => st.value === "plaintext"), De = x(!1), pe = x(!1), A = x(!1), ge = x(!1), R = x(!1), el = x(!1);
  let p = !1, sl = !1, ll = null, dl = null, je = null, Ie = 0, Ae = !1, Ne = "";
  const Fe = x(null);
  let ft = 0, ct = !1;
  const ca = Qa(), El = Za(), vt = Ka(), Ee = ao(null), V = x(typeof window > "u" || !vt.value), va = (ee = (ve = (M = Yn()) == null ? void 0 : M.vnode.el) == null ? void 0 : ve.textContent) != null ? ee : "", ma = typeof window < "u" && String((_ = n.node.code) != null ? _ : "").length > 0 && va.includes(String(n.node.code)), Qt = x(!ma);
  ia(() => {
    Qt.value = !0;
  }), typeof window < "u" && W([() => ne.value, vt], ([e, l], t, a) => {
    var o, d, r;
    if ((o = Ee.value) == null || o.destroy(), Ee.value = null, !l || V.value) return void (V.value = !0);
    if (!e) return void (V.value = !1);
    let u = !0;
    const c = (r = (d = El?.value.heavyBlockMargin) != null ? d : El?.value.rootMargin) != null ? r : "0px", s = ca(e, { rootMargin: c, allowIdle: !1 });
    Ee.value = s, V.value = V.value || s.isVisible.value, s.whenVisible.then(() => {
      u && Ee.value === s && (V.value = !0);
    }).catch(() => {
    }), a(() => {
      u = !1, s.destroy(), Ee.value === s && (Ee.value = null);
    });
  }, { immediate: !0 }), eo(() => {
    var e;
    p = !0, (function() {
      const l = Ne;
      J && l && (Ne = "", J.markSettled(l));
    })(), (e = Ee.value) == null || e.destroy(), Ee.value = null;
  });
  let ae = null, Tl = null, mt = () => {
  }, zl = () => {
  }, ht = () => {
  }, pt = () => {
  }, fl = () => null, ie = () => ({ getModel: () => ({ getLineCount: () => 1 }), getOption: () => 14, updateOptions: () => {
  } }), G = () => ({ getModel: () => ({ getLineCount: () => 1 }), getOption: () => 14, updateOptions: () => {
  } }), gt = () => {
  }, Ve = () => {
  }, yt = () => {
  }, tl = null, Be = null, cl = null, vl = null, Zt = () => {
    var e;
    return String((e = n.node.language) != null ? e : "plaintext");
  }, bt = () => D(null, null, function* () {
  }), wt = !1, Ll = null;
  const Te = [], Kt = [];
  let Pe = null, ml = null;
  const i = m(() => so(n.node)), hl = x({ removed: 0, added: 0 }), ha = m(() => `-${hl.value.removed} +${hl.value.added}`);
  function kt(e, l) {
    return { original: e, updated: l };
  }
  function en(e) {
    return String(e ?? "").replace(/\r\n$|\n$|\r$/, "");
  }
  function pl(e) {
    var l;
    return String((l = e?.message) != null ? l : e).includes("no diff result available");
  }
  function Rl() {
    if (!Se()) try {
      const e = yt();
      e && typeof e.catch == "function" && e.catch((l) => {
        pl(l);
      });
    } catch (e) {
      pl(e);
    }
  }
  const gl = m(() => {
    const e = Ce({}, n.codeBlockOptions || {});
    for (const a of ["theme", "themes", "themeType", "language", "languages", "stream", "disableFileHeader", "onThemeChange", "renderCustomHeader", "renderHeaderMetadata", "renderHeaderPrefix", "maxHeight", "padding", "tabSize"]) delete e[a];
    if (!i.value) return e;
    const l = e.parseDiffOptions && typeof e.parseDiffOptions == "object" ? e.parseDiffOptions : {}, t = { diffStyle: "split", expandUnchanged: !1, collapsedContextThreshold: 5, hunkSeparators: "line-info", parseDiffOptions: { context: 2 } };
    return Nl(Ce(Ce({}, t), e), { parseDiffOptions: Ce(Ce({}, t.parseDiffOptions), l) });
  }), ln = m(() => {
    return (n.theme !== void 0 ? (e = n.theme) && typeof e == "object" && "light" in e && "dark" in e : !An(n.darkTheme, n.lightTheme)) ? !!n.isDark : (function(l) {
      var t;
      const a = (t = lt(l)) != null ? t : "";
      return fo(a, n.isDark === !0);
    })(ol());
    var e;
  }), tn = m(() => (i.value, ln.value ? "dark" : "light")), nn = m(() => i.value ? tn.value === "dark" : ln.value), F = m(() => co({ darkTheme: n.darkTheme, isDark: n.isDark, lightTheme: n.lightTheme, theme: n.theme, themes: n.themes })), yl = m(() => i.value ? "diff" : "single"), an = x(yl.value), me = x(!1), E = x(!1), nl = x(!1), de = x(!1), We = x(null), xt = x(0), on = x(0), _l = x(!1);
  let bl = null, Ue = !1, St = null, Ct = !1;
  const ql = m(() => {
    var e;
    return !!i.value && ((e = gl.value) == null ? void 0 : e.diffStyle) === "unified";
  }), rn = m(() => vo(gl.value));
  function un(e) {
    return Fl?.value === !0 || !!e && (!!e.closest('[data-markstream-virtual-timeline="1"], .markstream-virtual-timeline') || !!e.closest(".vue-recycle-scroller, [data-virtualizer], [data-virtual-scroll-root]"));
  }
  const pa = m(() => un(ne.value)), ze = m(() => !(me.value || !de.value && E.value)), sn = m(() => ze.value), ga = m(() => ze.value && !nl.value), ya = m(() => !me.value && !de.value && ze.value), ba = m(() => E.value && !me.value ? "ready" : de.value ? "fallback" : "pending"), jl = x(!1), $e = m(() => en(n.node.code)), dn = m(() => i.value ? n.node.diff === !0 ? n.node : Nl(Ce({}, n.node), { diff: !0 }) : $e.value === n.node.code ? n.node : Nl(Ce({}, n.node), { code: $e.value }));
  function Mt(e) {
    const l = e.detectLanguage;
    typeof l == "function" && (Zt = l), ml = e, Pe = Un();
    const t = e.createCodeBlockRuntime(Pe);
    return !!t && (ae = t.createEditor || ae, Tl = t.createDiffEditor || Tl, mt = t.updateCode || mt, zl = t.updateDiff || zl, ht = t.finalizeCode || ht, pt = t.finalizeDiff || pt, fl = t.getEditor || fl, ie = t.getEditorView || ie, G = t.getDiffEditorView || G, gt = t.cleanupEditor || gt, Ve = t.safeClean || t.cleanupEditor || Ve, yt = t.refreshDiffPresentation || yt, bt = t.setTheme || bt, tl = t.whenVisualReady || null, el.value = !0, !0);
  }
  const Bt = mo, wa = ho, ue = x(typeof ((he = n.codeBlockOptions) == null ? void 0 : he.fontSize) == "number" ? n.codeBlockOptions.fontSize : Number.NaN), T = x(ue.value), Pt = x(null), Il = x(null), wl = x(null), Ge = x(null), ka = m(() => {
    const e = ue.value, l = T.value;
    return typeof e == "number" && Number.isFinite(e) && e > 0 && typeof l == "number" && Number.isFinite(l) && l > 0;
  }), Al = m(() => {
    var e;
    const l = (e = n.codeBlockOptions) == null ? void 0 : e.fontSize;
    if (typeof l == "number" && Number.isFinite(l) && l > 0) return l;
    const t = T.value;
    return typeof t == "number" && Number.isFinite(t) && t > 0 ? t : Bt;
  }), xa = m(() => {
    var e;
    const l = (e = n.codeBlockOptions) == null ? void 0 : e.lineHeight;
    return typeof l == "number" && Number.isFinite(l) && l > 0 ? l : Al.value === Bt ? wa : Math.max(12, Math.round(1.5 * Al.value));
  }), Vl = m(() => xa.value), fn = m(() => {
    var e;
    const l = (e = n.codeBlockOptions) == null ? void 0 : e.tabSize;
    return typeof l == "number" && Number.isFinite(l) && l > 0 ? l : 4;
  }), Wl = m(() => {
    var e;
    const l = (e = n.codeBlockOptions) == null ? void 0 : e.padding, t = typeof l == "number" && Number.isFinite(l) && l >= 0 ? l : 8;
    return { top: t, bottom: t };
  }), $t = m(() => {
    const e = po(n.codeBlockOptions);
    return Nl(Ce({}, e), { fontSize: Al.value, lineHeight: Vl.value, maxHeight: Bl(), padding: Wl.value.top, paddingBottom: Wl.value.bottom, tabSize: fn.value });
  }), Ul = m(() => {
    const e = n.estimatedContentHeightPx;
    return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : null;
  });
  function Gl(e) {
    if (e == null) return null;
    const l = Math.ceil(e);
    return !Number.isFinite(l) || l <= 0 ? null : Math.min(l, Math.ceil(Bl()));
  }
  function cn() {
    return !i.value && n.stream !== !1 && n.loading !== !1;
  }
  const kl = x(cn());
  function Xl() {
    return cn() || kl.value;
  }
  const vn = m(() => i.value ? null : Ul.value == null || Xl() ? Math.ceil(((e) => {
    const l = String(e ?? "");
    if (!l) return 1;
    let t = 1;
    for (let a = 0; a < l.length; a++) l[a] === `
` ? t++ : l[a] === "\r" && (t++, l[a + 1] === `
` && a++);
    return t;
  })($e.value) * Vl.value + 1) : null), mn = m(() => {
    if (i.value) return null;
    const e = Ul.value;
    return e == null || Xl() ? Gl(vn.value) : Gl(e);
  }), Sa = m(() => {
    const e = n.estimatedHeightPx;
    return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : null;
  }), Yl = x(null);
  function Xe() {
    const e = Yl.value;
    return typeof e == "number" && Number.isFinite(e) && e > 0 ? Math.round(e) : null;
  }
  const Ht = m(() => {
    const e = Xe();
    return e ?? (!i.value && _l.value ? null : ze.value || !E.value ? mn.value : null);
  });
  function hn(e) {
    const l = e ? "hsl(152 42% 60%)" : "var(--diff-added-fg)", t = e ? "hsl(0 58% 58%)" : "var(--diff-removed-fg)", a = e ? "color-mix(in lab, #121212 80%, #4d9375)" : "color-mix(in lab, #ffffff 88%, #1e754f)", o = e ? "color-mix(in lab, #121212 80%, #cb7676)" : "color-mix(in lab, #ffffff 88%, #ab5959)";
    return { "--markstream-diff-line-number-bg": "var(--markstream-diff-editor-bg)", "--markstream-diff-added-fg": l, "--markstream-diff-removed-fg": t, "--markstream-diff-added-line": a, "--markstream-diff-removed-line": o, "--markstream-diff-added-line-fill": a, "--markstream-diff-added-number-fill": e ? "color-mix(in lab, #121212 85%, #4d9375)" : "color-mix(in lab, #ffffff 91%, #1e754f)", "--markstream-diff-removed-line-fill": o, "--markstream-diff-removed-number-fill": e ? "color-mix(in lab, #121212 85%, #cb7676)" : "color-mix(in lab, #ffffff 91%, #ab5959)", "--markstream-diff-added-gutter": `linear-gradient(90deg, ${l} 0 4px, transparent 4px 100%)`, "--markstream-diff-removed-gutter": `linear-gradient(90deg, ${t} 0 4px, transparent 4px 100%)`, "--markstream-diff-added-inline": e ? "hsl(152 42% 60% / 0.28)" : "var(--diff-added-inline-bg)", "--markstream-diff-removed-inline": e ? "hsl(0 58% 58% / 0.28)" : "var(--diff-removed-inline-bg)" };
  }
  const pn = m(() => {
    const e = Gl(Ul.value), l = Gl(vn.value), t = Xl(), a = Ce({}, i.value || e == null || t ? i.value || l == null ? {} : { minHeight: `${l}px` } : { height: `${e}px`, minHeight: `${e}px` });
    if (a["--markstream-code-fallback-bg"] = F.value.background, a["--markstream-code-fallback-fg"] = F.value.foreground, F.value.builtin && (a["--markstream-code-theme-bg"] = F.value.background, a["--markstream-code-theme-fg"] = F.value.foreground, a["--markstream-code-theme-line-number"] = F.value.lineNumber), a["--markstream-pre-line-number-top"] = `${Wl.value.top}px`, a["--markstream-pre-line-number-left"] = "0px", a["--markstream-pre-line-number-padding-left"] = "2ch", a["--markstream-pre-line-number-padding-right"] = "1ch", a["--markstream-pre-line-number-separator-width"] = "2px", i.value) {
      a["--markstream-pre-diff-line-height"] = `${Vl.value}px`, a["--markstream-pre-diff-pane-bottom-padding"] = (ql.value, "0px");
      const o = Ge.value;
      o != null && o > 0 && (a.height = `${o}px`, a.minHeight = `${o}px`, a.maxHeight = `${o}px`), Object.assign(a, hn(nn.value));
    }
    return a;
  }), gn = m(() => Ht.value != null && (!E.value || Xe() != null)), Ca = m(() => {
    const e = Ht.value;
    if (e == null) return null;
    if (i.value) return Math.ceil(e);
    const l = Sa.value, t = Ul.value;
    if (l == null || t == null) return Math.ceil(e);
    const a = Math.max(0, Math.ceil(l) - Math.ceil(t));
    return Math.ceil(e + a);
  }), Ma = m(() => {
    if (i.value && ze.value) return {};
    const e = Ht.value;
    return gn.value && e != null ? { minHeight: `${e}px` } : {};
  });
  function yn() {
    Yl.value = null;
  }
  function bn() {
    var e, l, t, a, o, d, r, u;
    const c = (e = ne.value) == null ? void 0 : e.querySelector("pre.code-pre-fallback"), s = G(), v = (l = c?.scrollTop) != null ? l : 0;
    (o = (a = (t = s?.getOriginalEditor) == null ? void 0 : t.call(s)) == null ? void 0 : a.setScrollTop) == null || o.call(a, v), (u = (r = (d = s?.getModifiedEditor) == null ? void 0 : d.call(s)) == null ? void 0 : r.setScrollTop) == null || u.call(r, v);
  }
  function wn() {
    return D(this, null, function* () {
      return i.value ? (Ft(), xl(), Q(!0), bn(), ye(), nl.value = !0, yield O(), Q(!0), yield ke(), Q(!0), Ml(), xl(), !!(yield (function() {
        return D(this, null, function* () {
          var e;
          if (!i.value) return !0;
          for (let l = 0; l < 4; l++) {
            const t = xl();
            Q(!0), Ot(t), Ba(t), yield O(), yield ke();
            const a = (e = ne.value) == null ? void 0 : e.querySelector("pre.code-pre-fallback");
            if (!a) return !1;
            if (t == null) return Jl();
            const o = a.getBoundingClientRect().height;
            if (o > 0 && Math.abs(o - t) <= 2) return !0;
          }
          return !1;
        });
      })()) && (E.value = !0, yield O(), xl(), Q(!0), Ml(), ye(), se(() => {
        p || se(() => {
          p || ((function() {
            var e, l;
            const t = (e = ne.value) == null ? void 0 : e.querySelector(".code-block-shell-content"), a = (l = ne.value) == null ? void 0 : l.querySelector(".code-editor-layer");
            t && a && (a.style.removeProperty("height"), a.style.removeProperty("min-height"), t.style.removeProperty("height"), t.style.removeProperty("min-height"));
          })(), fe(!0));
        });
      }), fe(), !0)) : !(tl && !(yield tl()) || (nl.value = !0, yield O(), Q(!0), E.value = !0, yield O(), fe(), 0));
    });
  }
  function Ot(e) {
    var l;
    if (!i.value) return;
    const t = h.value, a = (l = ne.value) == null ? void 0 : l.querySelector("pre.code-pre-fallback");
    if (!t || !a) return;
    const o = e ?? Number.parseFloat(t.style.height || "");
    if (!Number.isFinite(o) || o <= 0) return;
    const d = Math.ceil(o), r = `${d}px`;
    Ge.value = d;
    const u = ne.value;
    u && (u.dataset.markstreamDiffHandoffHeight = r), a.dataset.markstreamDiffHandoffHeight = r, a.style.setProperty("height", r), a.style.setProperty("min-height", r);
  }
  function Ba(e) {
    var l, t, a;
    if (!i.value) return;
    const o = (l = ne.value) == null ? void 0 : l.querySelector(".code-block-shell-content"), d = (t = ne.value) == null ? void 0 : t.querySelector(".code-editor-layer");
    if (!o || !d) return;
    const r = typeof e == "number" && Number.isFinite(e) && e > 0 ? Math.ceil(e) : Number.parseFloat(((a = h.value) == null ? void 0 : a.style.height) || "");
    if (!Number.isFinite(r) || r <= 0) return;
    const u = `${r}px`;
    d.style.height = u, d.style.minHeight = u, o.style.height = u, o.style.minHeight = u;
  }
  function xl() {
    const e = h.value;
    if (e && Jl(e)) {
      ye();
      const l = Cl(e);
      if (l != null && l > 0) {
        const t = Math.ceil(l), a = Math.ceil(Bl()), o = Math.min(t, a), d = `${o}px`;
        return e.style.height = d, e.style.minHeight = "0px", e.style.maxHeight = `${a}px`, e.style.overflow = t > a + 1 ? "auto" : "hidden", ze.value && (Ge.value = o, Ot(o)), Le(), o;
      }
      return le({ preferModelDiffHeight: !0 }), Ot(), Le(), Number.parseFloat(e.style.height || "") || null;
    }
    return Ft();
  }
  function kn(e, l = !1, t = {}) {
    const a = Math.ceil(e), o = Xe();
    if (o == null) return a;
    const d = t.allowBelowEstimatedFloor === !0;
    return a >= o || d ? ((l || d) && R.value && yn(), a) : o;
  }
  function ke() {
    return new Promise((e) => {
      let l = !1, t = null, a = null;
      const o = () => {
        l || (l = !0, a != null && globalThis.clearTimeout(a), t != null && at(t), e());
      };
      a = globalThis.setTimeout(o, 50), t = se(o);
    });
  }
  function xn() {
    var e;
    try {
      const l = h.value;
      if (!l) return null;
      const t = (e = l.querySelector(".stream-diffs-shell .stream-diffs-surface")) != null ? e : l.querySelector(".stream-diffs-shell");
      if (t) {
        const a = Math.ceil(t.getBoundingClientRect().height);
        if (a > 0) return a;
      }
    } catch {
    }
    return null;
  }
  function Dt() {
    var e, l, t, a, o, d;
    try {
      const r = i.value ? (t = (l = (e = G()) == null ? void 0 : e.getModifiedEditor) == null ? void 0 : l.call(e)) != null ? t : G() : ie(), u = fl(), c = (a = u?.EditorOption) == null ? void 0 : a.fontInfo;
      if (r && c != null) {
        const s = (o = r.getOption) == null ? void 0 : o.call(r, c), v = s?.fontSize;
        if (typeof v == "number" && Number.isFinite(v) && v > 0) return v;
      }
    } catch {
    }
    try {
      const r = h.value;
      if (r) {
        const u = (d = r.querySelector(".stream-diffs-shell .stream-diffs-surface")) != null ? d : r.querySelector(".stream-diffs-shell");
        if (u) try {
          if (typeof window < "u" && typeof window.getComputedStyle == "function") {
            const c = window.getComputedStyle(u).fontSize, s = c && c.match(/^(\d+(?:\.\d+)?)/);
            if (s) return Number.parseFloat(s[1]);
          }
        } catch {
        }
      }
    } catch {
    }
    return null;
  }
  function al(e) {
    var l, t;
    try {
      const d = fl(), r = (l = d?.EditorOption) == null ? void 0 : l.lineHeight;
      if (r != null) {
        const u = (t = e?.getOption) == null ? void 0 : t.call(e, r);
        if (typeof u == "number" && u > 0) return u;
      }
    } catch {
    }
    const a = xn();
    if (a && a > 0) return a;
    const o = Number.isFinite(T.value) && T.value > 0 ? T.value : 14;
    return Math.max(12, Math.round(1.35 * o));
  }
  function Sn() {
    var e;
    const l = (e = n.codeBlockOptions) == null ? void 0 : e.padding;
    return typeof l == "number" && Number.isFinite(l) ? 2 * Math.max(0, l) : i.value ? 24 : 0;
  }
  function Cn(e) {
    return !!dt.value || !!e && (Se(e) || tl != null);
  }
  function Sl() {
    var e, l;
    i.value ? hl.value = ko(String((e = n.node.originalCode) != null ? e : ""), String((l = n.node.updatedCode) != null ? l : "")) : hl.value = { removed: 0, added: 0 };
  }
  function Nt() {
    var e;
    if (Number.isFinite(T.value) && T.value > 0 && Number.isFinite(ue.value)) return T.value;
    if (typeof ((e = n.codeBlockOptions) == null ? void 0 : e.fontSize) == "number") return ue.value = n.codeBlockOptions.fontSize, T.value = n.codeBlockOptions.fontSize, n.codeBlockOptions.fontSize;
    const l = Dt();
    return l && l > 0 ? (ue.value = l, T.value = l, l) : (ue.value = 12, T.value = 12, 12);
  }
  function Pa() {
    const e = Nt(), l = Math.min(36, e + 1);
    T.value = l;
  }
  function $a() {
    const e = Nt(), l = Math.max(10, e - 1);
    T.value = l;
  }
  function Ha() {
    Nt(), Number.isFinite(ue.value) && (T.value = ue.value);
  }
  function Mn() {
    var e, l, t, a, o, d, r, u, c, s, v, g, y, q;
    try {
      const z = i.value ? G() : null, f = i.value ? z : ie();
      if (!f) return null;
      if (z?.getOriginalEditor && z?.getModifiedEditor) {
        const B = (e = z.getOriginalEditor) == null ? void 0 : e.call(z), k = (l = z.getModifiedEditor) == null ? void 0 : l.call(z);
        (t = B?.layout) == null || t.call(B), (a = k?.layout) == null || a.call(k);
        const P = ((o = B?.getContentHeight) == null ? void 0 : o.call(B)) || 0, Z = ((d = k?.getContentHeight) == null ? void 0 : d.call(k)) || 0, be = Math.max(P, Z);
        if (be > 0) return Math.ceil(be);
        const te = ((c = (u = (r = B?.getModel) == null ? void 0 : r.call(B)) == null ? void 0 : u.getLineCount) == null ? void 0 : c.call(u)) || 1, L = ((g = (v = (s = k?.getModel) == null ? void 0 : s.call(k)) == null ? void 0 : v.getLineCount) == null ? void 0 : g.call(v)) || 1, $ = Math.max(te, L), I = Math.max(al(B), al(k)), X = Sn();
        return Math.ceil($ * I + X + 0);
      }
      if (f?.getContentHeight) {
        (y = f?.layout) == null || y.call(f);
        const B = f.getContentHeight();
        if (B > 0) return i.value || (_l.value = !0), Math.ceil(B);
      }
      const w = (q = f?.getModel) == null ? void 0 : q.call(f);
      let N = 1;
      w && typeof w.getLineCount == "function" && (N = w.getLineCount());
      const j = al(f);
      return Math.ceil(N * (j + 1.5) + 0);
    } catch {
      return null;
    }
  }
  function Bn() {
    var e, l;
    if (i.value) return !1;
    try {
      const t = (l = (e = ie()) == null ? void 0 : e.getContentHeight) == null ? void 0 : l.call(e), a = typeof t == "number" && Number.isFinite(t) && t > 0;
      return a && (_l.value = !0), a;
    } catch {
      return !1;
    }
  }
  function Cl(e) {
    if (typeof window > "u") return null;
    try {
      if (window.getComputedStyle(e).display === "none") return null;
      const l = e.querySelector("diffs-container");
      if (l instanceof HTMLElement) {
        const a = l.getBoundingClientRect();
        if (a.height > 0) return Math.ceil(a.height);
      }
      const t = e.querySelector(".stream-diffs-shell");
      if (t) {
        const a = t.getBoundingClientRect();
        if (a.height > 0) return Math.ceil(a.height);
      }
      return null;
    } catch {
      return null;
    }
  }
  function Pn(e) {
    var l;
    const t = String(e ?? "").trim(), a = (l = t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)) == null ? void 0 : l[1];
    if (a) {
      const c = a.length === 3 ? a.split("").map((s) => `${s}${s}`).join("") : a;
      return 0.2126 * Number.parseInt(c.slice(0, 2), 16) + 0.7152 * Number.parseInt(c.slice(2, 4), 16) + 0.0722 * Number.parseInt(c.slice(4, 6), 16);
    }
    const o = t.match(/\d+(?:\.\d+)?/g);
    if (!o || o.length < 3) return null;
    const [d, r, u] = o.slice(0, 3).map(Number);
    return 0.2126 * d + 0.7152 * r + 0.0722 * u;
  }
  function Ml() {
    var e, l, t;
    if ($n()) return;
    const a = Dt();
    a && a > 0 && (Pt.value = a, T.value = a, ue.value = a);
    try {
      const o = al(i.value ? (t = (l = (e = G()) == null ? void 0 : e.getModifiedEditor) == null ? void 0 : l.call(e)) != null ? t : G() : ie());
      o && o > 0 && (Il.value = o);
    } catch {
    }
    try {
      const o = xn();
      o && o > 0 && (Il.value = o);
    } catch {
    }
  }
  function $n() {
    return i.value && sn.value;
  }
  function Ft() {
    var e;
    if (!ze.value) return null;
    const l = h.value, t = (e = ne.value) == null ? void 0 : e.querySelector("pre.code-pre-fallback");
    if (!l || !t) return null;
    const a = Math.ceil(t.getBoundingClientRect().height), o = i.value ? Cl(l) : null, d = Math.max(a, o != null && o > 0 ? Math.ceil(o) : 0), r = Math.ceil(Bl()), u = Math.min(d, r);
    return !Number.isFinite(u) || u <= 0 ? null : (i.value && u > a && (Ge.value = u), l.style.height = `${u}px`, l.style.minHeight = `${u}px`, l.style.maxHeight = `${r}px`, l.style.overflow = d > r + 1 ? "auto" : "hidden", u);
  }
  function Et() {
    var e, l, t, a, o, d, r, u, c;
    const s = h.value, v = ne.value;
    if (!s || !v) return;
    const g = s;
    g.style.setProperty("--markstream-diff-metadata-bg", F.value.background), g.style.setProperty("--markstream-diff-metadata-fg", F.value.lineNumber), g.style.setProperty("--diffs-tab-size", String(fn.value)), g.style.setProperty("--diffs-scrollbar-gutter-override", "0px"), typeof ((e = n.codeBlockOptions) == null ? void 0 : e.padding) == "number" ? g.style.setProperty("--diffs-gap-block", `${Wl.value.top}px`) : g.style.removeProperty("--diffs-gap-block");
    const y = s.querySelector(".stream-diffs-shell") || s, q = y, z = y;
    let f = null, w = null, N = null;
    try {
      typeof window < "u" && typeof window.getComputedStyle == "function" && (f = window.getComputedStyle(y), w = q === y ? f : window.getComputedStyle(q), N = z === y ? f : window.getComputedStyle(z));
    } catch {
      f = null, w = null, N = null;
    }
    const j = String((l = f?.getPropertyValue("--vscode-editor-foreground")) != null ? l : "").trim(), B = String((t = f?.getPropertyValue("--vscode-editor-background")) != null ? t : "").trim(), k = String((o = (a = f?.getPropertyValue("--vscode-editor-selectionBackground")) != null ? a : f?.getPropertyValue("--vscode-editor-hoverHighlightBackground")) != null ? o : "").trim(), P = j || String((r = (d = N?.color) != null ? d : f?.color) != null ? r : "").trim(), Z = B || String((c = (u = w?.backgroundColor) != null ? u : f?.backgroundColor) != null ? c : "").trim(), be = (function() {
      var te, L, $, I, X;
      try {
        const ce = i.value ? ($ = (L = (te = G()) == null ? void 0 : te.getModifiedEditor) == null ? void 0 : L.call(te)) != null ? $ : G() : ie(), oe = fl(), re = (I = oe?.EditorOption) == null ? void 0 : I.fontInfo;
        if (ce && re != null) {
          const K = (X = ce.getOption) == null ? void 0 : X.call(ce, re), Y = K?.typicalHalfwidthCharacterWidth;
          if (typeof Y == "number" && Number.isFinite(Y) && Y > 0) return Y;
        }
      } catch {
      }
      return null;
    })();
    if (be != null && (wl.value = be), i.value) {
      const te = (L, $) => {
        $ ? (v.style.setProperty(L, $), g.style.setProperty(L, $)) : (v.style.removeProperty(L), g.style.removeProperty(L));
      };
      for (const [L, $] of Object.entries(hn(v.classList.contains("is-dark")))) te(L, $);
      return P ? (v.style.setProperty("--markstream-diff-editor-fg", P), g.style.setProperty("--vscode-editor-foreground", P)) : (v.style.removeProperty("--markstream-diff-editor-fg"), g.style.removeProperty("--vscode-editor-foreground")), Z ? (v.style.setProperty("--markstream-diff-editor-bg", Z), v.style.setProperty("--markstream-diff-panel-bg", Z), v.style.setProperty("--markstream-diff-panel-bg-soft", Z), v.style.setProperty("--markstream-diff-panel-bg-strong", Z), g.style.setProperty("--vscode-editor-background", Z), g.style.backgroundColor = Z) : (v.style.removeProperty("--markstream-diff-editor-bg"), v.style.removeProperty("--markstream-diff-panel-bg"), v.style.removeProperty("--markstream-diff-panel-bg-soft"), v.style.removeProperty("--markstream-diff-panel-bg-strong"), g.style.removeProperty("--vscode-editor-background"), g.style.backgroundColor = ""), void (k ? g.style.setProperty("--vscode-editor-selectionBackground", k) : g.style.removeProperty("--vscode-editor-selectionBackground"));
    }
    if ((function(te, L, $) {
      if (!dt.value) return !1;
      const I = Pn(te), X = Pn(L);
      return $ ? I != null && I > 170 || X != null && X < 110 : I != null && I < 85 || X != null && X > 190;
    })(Z, P, v.classList.contains("is-dark"))) return g.style.removeProperty("--vscode-editor-foreground"), g.style.removeProperty("--vscode-editor-background"), void g.style.removeProperty("--vscode-editor-selectionBackground");
    P && g.style.setProperty("--vscode-editor-foreground", P), Z && g.style.setProperty("--vscode-editor-background", Z), k && g.style.setProperty("--vscode-editor-selectionBackground", k);
  }
  W(() => [n.stream, n.loading, n.node.loading, i.value], ([e, l, t, a]) => {
    a || e === !1 || l === !1 || kl.value ? (a || e === !1) && kl.value && (kl.value = !1) : (kl.value = !0, yn());
  }, { immediate: !0 });
  let Tt = 0, zt = 0;
  const Hn = /auto|scroll|overlay/i;
  function xe(e, l, t) {
    var a;
    if (typeof window > "u" || i.value || (function(v) {
      return pa.value || un(v);
    })(e)) return;
    const o = Math.ceil(l), d = Math.ceil(t) - o;
    if (Math.abs(d) <= 1) return;
    const r = (function(v) {
      var g, y;
      if (typeof window > "u") return null;
      const q = (g = v?.ownerDocument) != null ? g : document, z = q.scrollingElement || q.documentElement || q.body;
      let f = (y = v?.parentElement) != null ? y : null;
      for (; f && f !== q.body && f !== z; ) {
        const w = window.getComputedStyle(f), N = (w.overflowY || "").toLowerCase(), j = (w.overflow || "").toLowerCase();
        if (Hn.test(N) || Hn.test(j)) return f;
        f = f.parentElement;
      }
      return z;
    })(e);
    if (!r) return;
    const u = (a = e.ownerDocument) != null ? a : document, c = r === u.body || r === u.documentElement || r === u.scrollingElement, s = c ? 0 : r.getBoundingClientRect().top;
    e.getBoundingClientRect().top - s >= 0 || (c && typeof window.scrollBy == "function" ? window.scrollBy(0, d) : r.scrollTop += d);
  }
  function Lt() {
    try {
      const e = h.value;
      if (!e) return;
      const l = e.getBoundingClientRect().height, t = Mn();
      if (t != null && t > 0) {
        const o = kn(t, !0, { allowBelowEstimatedFloor: !i.value && R.value && Bn() }), d = Xe();
        return e.style.minHeight = d != null ? `${d}px` : "0px", e.style.height = `${o}px`, e.style.maxHeight = "none", e.style.overflow = "visible", void xe(e, l, o);
      }
      const a = Xe();
      a != null && (e.style.minHeight = `${a}px`, e.style.height = `${a}px`, e.style.maxHeight = "none", e.style.overflow = "visible", xe(e, l, a));
    } catch {
    }
  }
  function Ye() {
    for (var e, l; Te.length > 0; ) try {
      (l = (e = Te.pop()) == null ? void 0 : e.dispose) == null || l.call(e);
    } catch {
    }
    ll != null && (at(ll), ll = null), dl != null && (at(dl), dl = null), je != null && (at(je), je = null), Ie = 0, Ae = !1;
  }
  function Je() {
    for (var e; Kt.length > 0; ) try {
      (e = Kt.pop()) == null || e();
    } catch {
    }
  }
  function le(e = !1) {
    pe.value || (De.value ? Lt() : (function(l = {}) {
      try {
        const t = h.value;
        if (!t) return;
        const a = t.getBoundingClientRect().height, o = Math.ceil(a || 0), d = Bl(), r = o, u = Number.parseFloat(t.style.height || ""), c = r > 0 ? r : Number.isFinite(u) && u > 0 ? Math.ceil(u) : 0, s = i.value ? (function() {
          var k, P, Z, be, te, L, $, I, X, ce, oe, re;
          if (Se()) return null;
          try {
            const K = G(), Y = (k = K?.getOriginalEditor) == null ? void 0 : k.call(K), rl = (P = K?.getModifiedEditor) == null ? void 0 : P.call(K);
            if (!Y || !rl) return null;
            const ja = ((te = (be = (Z = Y.getModel) == null ? void 0 : Z.call(Y)) == null ? void 0 : be.getLineCount) == null ? void 0 : te.call(be)) || 1, Ia = ((I = ($ = (L = rl.getModel) == null ? void 0 : L.call(rl)) == null ? void 0 : $.getLineCount) == null ? void 0 : I.call($)) || 1, Aa = Math.max(ja, Ia), Va = Math.max(al(Y), al(rl)), Wa = Sn(), Ua = Math.max((ce = (X = Y.getContentHeight) == null ? void 0 : X.call(Y)) != null ? ce : 0, (re = (oe = rl.getContentHeight) == null ? void 0 : oe.call(rl)) != null ? re : 0);
            return Math.ceil(Math.max(Ua, Aa * Va + Wa + 0));
          } catch {
            return null;
          }
        })() : null, v = i.value && Jl(t);
        if (ft > 0 && (ft--, Fe.value != null)) return void xe(t, a, Re(t, Fe.value, d, { preserveScrollableOverflow: _t(t) }));
        if (i.value && !v && ze.value) {
          const k = Ft();
          if (k != null) {
            const P = Re(t, k, d, { allowBelowEstimatedFloor: !0 });
            return Q(!0), void xe(t, a, P);
          }
        }
        const g = i.value && l.preferModelDiffHeight === !0, y = i.value ? Cl(t) : null, q = !i.value && R.value && Bn(), z = i.value && n.loading !== !1 && (y != null || s != null && r > 0 && s < r - 1), f = s != null;
        let w;
        if (i.value) if (g) {
          const k = s != null && n.loading === !1 && c > 0 && s < c - 1;
          w = n.loading === !1 && y != null ? s == null ? y : Math.max(y, s) : k ? s : y != null && s != null ? Math.max(y, s, n.loading !== !1 ? c : 0) : Math.max(y ?? 0, s ?? 0, n.loading !== !1 ? c : 0) || null;
        } else w = ql.value && y != null || y != null ? f ? Math.max(y, s) : y : i.value && n.loading !== !1 ? s != null && c > 0 && s < c - 1 ? s : c > 0 ? c : null : s;
        else w = Mn();
        if (i.value && w != null && c > 0 && (n.loading !== !1 || l.holdCurrentDiffHeight === !0) && (w = Math.max(w, c)), w != null && w > 0) return void xe(t, a, Re(t, w, d, { clearEstimatedFloor: !0, allowBelowEstimatedFloor: q || z, preserveScrollableOverflow: _t(t), renderedStreamingDiffHeight: y }));
        if (Fe.value != null) return void xe(t, a, Re(t, Fe.value, d, { preserveScrollableOverflow: _t(t) }));
        const N = i.value && n.loading !== !1 ? r : Math.max(r, s != null && s > 0 ? s : 0);
        if (N > 0) return void xe(t, a, Re(t, N, d));
        const j = Xe();
        if (!(j == null || i.value && n.loading !== !1 && v)) return void xe(t, a, Re(t, j, d));
        const B = Number.parseFloat(t.style.height);
        !Number.isNaN(B) && B > 0 ? xe(t, a, Re(t, B, d)) : i.value || xe(t, a, Re(t, d, d));
      } catch {
      }
    })(typeof e == "object" ? e : {}));
  }
  function On() {
    Tt = 0, zt = 0;
  }
  function Q(e = !1) {
    var l, t, a;
    if (pe.value) return;
    const o = h.value;
    if (!o) return;
    const d = i.value ? G() : ie();
    if (d && typeof d.layout == "function") try {
      const r = (l = o.getBoundingClientRect) == null ? void 0 : l.call(o), u = Math.ceil(((t = r?.width) != null ? t : 0) || o.clientWidth || 0), c = Math.ceil(((a = r?.height) != null ? a : 0) || o.clientHeight || Number.parseFloat(o.style.height || "") || 0);
      if (u > 0 && c > 0) {
        if (!e && u === Tt && c === zt) return;
        Tt = u, zt = c, d.layout({ width: u, height: c });
      } else On(), d.layout();
    } catch {
    }
  }
  function ye() {
    Je();
  }
  function fe(e = !1) {
    if (p || ll != null) return;
    const l = () => {
      p || (ye(), le(e), Q());
    };
    ll = se(() => {
      ll = null, l(), dl = se(() => {
        dl = null, l();
      });
    }), Le();
  }
  function Le(e = !1) {
    if (!i.value || p || !e && n.loading === !1 || (Ae = Ae || e, Ie = Math.max(Ie, e ? 18 : 6), je != null)) return;
    const l = () => {
      if (je = null, !i.value || p || Ie <= 0 || !Ae && n.loading === !1) return Ie = 0, void (Ae = !1);
      Ie--, ye(), le({ preferModelDiffHeight: !0, holdCurrentDiffHeight: Ae }), Q(), Ie > 0 ? je = se(l) : Ae = !1;
    };
    je = se(l);
  }
  function Re(e, l, t, a = {}) {
    var o;
    const d = i.value && n.loading !== !1, r = "renderedStreamingDiffHeight" in a ? d && (o = a.renderedStreamingDiffHeight) != null ? o : null : d ? Cl(e) : null, u = r != null && r > l + 1 ? r : l, c = Math.min(u, t), s = a.allowBelowEstimatedFloor === !0, v = kn(c, a.clearEstimatedFloor === !0, { allowBelowEstimatedFloor: s }), g = Xe();
    e.style.minHeight = g == null || s ? "0px" : `${Math.min(g, Math.ceil(t))}px`, e.style.height = `${v}px`, e.style.maxHeight = `${Math.ceil(t)}px`;
    const y = a.preserveScrollableOverflow === !0 || u > t + 1 || Rt(e, v);
    return e.style.overflow = y ? "auto" : "hidden", v;
  }
  function Rt(e, l = 0) {
    var t;
    const a = Math.ceil(((t = e.getBoundingClientRect) == null ? void 0 : t.call(e).height) || 0), o = Math.max(l, e.clientHeight || 0, a);
    return o > 0 && e.scrollHeight > o + 1;
  }
  function _t(e) {
    var l;
    return ct || Rt(e, (l = Fe.value) != null ? l : 0);
  }
  function Jl(e = h.value) {
    return Se(e);
  }
  function Dn(e = h.value) {
    return Se(e);
  }
  function Nn() {
    var e, l;
    if (Se()) return !0;
    const t = (l = (e = ie()) == null ? void 0 : e.getModel) == null ? void 0 : l.call(e);
    return typeof t?.getValue == "function" && t.getValue() === $e.value;
  }
  function Se(e = h.value) {
    return !!e?.querySelector("diffs-container");
  }
  function Fn() {
    return n.loading !== !1 || E.value;
  }
  function Oa() {
    const e = G();
    return typeof e?.getOriginalEditor == "function" || typeof e?.getModifiedEditor == "function" || typeof e?.getLineChanges == "function";
  }
  function En() {
    return D(this, null, function* () {
      if (!i.value) return !0;
      for (let e = 0; e < 30; e++) {
        if (p) return !1;
        if (Se()) return yield O(), yield ke(), !p && Se();
        yield O(), yield ke();
      }
      return !1;
    });
  }
  let qt = "";
  function Tn(e, l, t) {
    return D(this, null, function* () {
      const a = `${e}\0${l}\0${t}`;
      if (qt !== a) {
        try {
          return yield zl(e, l, t), void (qt = a);
        } catch (o) {
          if (!pl(o)) throw o;
        }
        if (yield O(), yield ke(), !p && i.value) try {
          yield zl(e, l, t), qt = a;
        } catch (o) {
          if (!pl(o)) throw o;
        }
      }
    });
  }
  function Bl() {
    var e, l;
    return (l = (e = n.codeBlockOptions) == null ? void 0 : e.maxHeight) != null ? l : 500;
  }
  const jt = m(() => n.isShowPreview && (we.value === "html" || we.value === "svg"));
  function _e() {
    return typeof n.node.loading == "boolean" ? n.node.loading : n.loading === !0;
  }
  function zn(e, l, t) {
    return !t || (function() {
      var a, o, d;
      if (!_e()) return !0;
      const r = String((a = n.node.raw) != null ? a : ""), u = (d = (o = r.split(/\r\n|\n|\r/, 1)[0]) == null ? void 0 : o.trimStart()) != null ? d : "";
      return !/^(?:`{3,}|~{3,})/.test(u) || /\r\n|\n|\r/.test(r);
    })() && String(l ?? "") ? Jn(String(e ?? "")) : "plain";
  }
  function Ql() {
    return _e();
  }
  let Qe = null, Zl = !1, Kl = 0;
  function Ln() {
    Qe = null, Kl++;
  }
  function Rn() {
    return D(this, arguments, function* (e = Kl) {
      if (!Zl) {
        Zl = !0;
        try {
          for (; Qe && !p && !i.value && e === Kl; ) {
            const l = Qe;
            Qe = null;
            try {
              yield Promise.resolve(mt(l.code, l.language)), yield O(), p || i.value || (le(!1), Q());
            } catch {
            }
          }
        } finally {
          Zl = !1, !Qe || p || i.value || Rn();
        }
      }
    });
  }
  function _n(e, l) {
    Qe = { code: e, language: l }, Rn(Kl);
  }
  W(() => [n.node.language, n.node.code, n.node.raw, n.node.loading, n.loading], ([e, l, t, a, o]) => {
    we.value = zn(e, l, typeof a == "boolean" ? a : o === !0);
  }), W(() => [n.node.originalCode, n.node.updatedCode, i.value], () => {
    se(() => Sl());
  }, { immediate: !0 });
  let et = 0;
  W(() => [n.node.originalCode, n.node.updatedCode, Me.value, i.value, n.stream], (e) => D(null, [e], function* ([, , , l, t]) {
    var a, o;
    const d = ++et;
    if (!l || _e() || t === !1 && !A.value) return;
    if (t !== !1 && ae && !A.value && h.value) try {
      yield He(h.value);
    } catch {
    }
    const r = cl;
    if (r && !ge.value) {
      try {
        yield r;
      } catch {
      }
      if (p || !i.value || d !== et) return;
    }
    if (d !== et) return;
    const u = kt(String((a = n.node.originalCode) != null ? a : ""), String((o = n.node.updatedCode) != null ? o : "")), c = n.loading === !1;
    c && Ze();
    try {
      if (yield Tn(u.original, u.updated, Me.value), p || !i.value || d !== et) return;
      yield O(), Q(!0), ye(), le(n.loading === !1 || { preferModelDiffHeight: !0 }), Q(!0), fe(!0);
    } catch {
      return;
    }
    if (c) {
      if (p || !i.value) return;
      Rl(), ye(), Sl(), fe(), Le(!0);
    }
    De.value && se(() => Lt());
  })), W(() => n.node.code, (e) => D(null, null, function* () {
    if (_e() || n.stream === !1 || (we.value || (we.value = Jn(Zt(e))), i.value)) return;
    const l = cl;
    if (l && !ge.value) {
      try {
        yield l;
      } catch {
      }
      if (p || i.value) return;
    }
    if (ae && !A.value && h.value) try {
      yield He(h.value);
    } catch {
    }
    _n(en(n.node.code), Me.value), De.value && se(() => Lt());
  }));
  const Da = m(() => {
    const e = we.value;
    return e ? Kn[e] || e.charAt(0).toUpperCase() + e.slice(1) : Kn[""];
  }), qn = m(() => {
    var e;
    return go(String((e = n.node.raw) != null ? e : ""), Da.value, i.value);
  }), Na = m(() => qn.value.title), jn = m(() => qn.value.caption), Fa = m(() => (yo.value, Co(we.value || "", da))), Ea = m(() => {
    const e = {};
    e["--markstream-code-layout-character-width"] = wl.value == null ? "1ch" : `${wl.value}px`, e["--markstream-code-fallback-bg"] = F.value.background, e["--markstream-code-fallback-fg"] = F.value.foreground, F.value.builtin && (e["--markstream-code-theme-bg"] = F.value.background, e["--markstream-code-theme-fg"] = F.value.foreground, e["--markstream-code-theme-line-number"] = F.value.lineNumber), e["--markstream-diff-added-line-fill"] = F.value.diffAddedLine, e["--markstream-diff-added-number-fill"] = F.value.diffAddedNumber, e["--markstream-diff-editor-bg"] = F.value.background, e["--markstream-diff-removed-line-fill"] = F.value.diffRemovedLine, e["--markstream-diff-removed-number-fill"] = F.value.diffRemovedNumber, e["--markstream-diff-shell-bg"] = F.value.background, e["--markstream-pre-resolved-theme-bg"] = F.value.background, e["--markstream-pre-resolved-theme-fg"] = F.value.foreground, e["--markstream-pre-resolved-theme-line-number"] = F.value.lineNumber;
    const l = (o) => {
      if (o != null) return typeof o == "number" ? `${o}px` : String(o);
    }, t = l(n.minWidth), a = l(n.maxWidth);
    if (t && (e.minWidth = t), a && (e.maxWidth = a), gn.value && !i.value && !pe.value) {
      const o = Ca.value;
      o != null && (e.minHeight = `${o}px`);
    }
    return e.color = "var(--markstream-code-fallback-fg, var(--markstream-code-theme-fg, var(--markstream-pre-resolved-theme-fg)))", e.backgroundColor = "var(--markstream-code-fallback-bg, var(--markstream-code-theme-bg, var(--markstream-pre-resolved-theme-bg)))", i.value || (e.borderColor = "var(--markstream-code-border-color, var(--code-border))"), e;
  }), Ta = m(() => n.showTooltips !== !1);
  function za() {
    return D(this, null, function* () {
      try {
        typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.writeText == "function" && (yield navigator.clipboard.writeText(n.node.code)), ut.value = !0, C("copy", n.node.code), setTimeout(() => {
          ut.value = !1;
        }, 1e3);
      } catch (e) {
        console.error("复制失败:", e);
      }
    });
  }
  function La() {
    De.value = !De.value;
    const e = i.value ? G() : ie(), l = h.value;
    e && l && (De.value ? (l.style.maxHeight = "none", l.style.overflow = "visible", le(!0)) : (l.style.overflow = "auto", le(!0)));
  }
  function Ra() {
    var e, l;
    if (pe.value = !pe.value, pe.value) {
      if (ct = !1, h.value) {
        const t = Math.ceil(((l = (e = h.value).getBoundingClientRect) == null ? void 0 : l.call(e).height) || 0);
        ct = Rt(h.value, t) || h.value.style.overflow === "auto" || h.value.style.overflowY === "auto", t > 0 && (Fe.value = t);
      }
    } else h.value && Fe.value != null && (h.value.style.height = `${Fe.value}px`), ft = 2, O(() => {
      pe.value || p || (le(!0), Q(!0));
    });
  }
  function _a() {
    if (!jt.value) return;
    const e = we.value;
    if (Yt.value) {
      const l = e === "html" ? "text/html" : "image/svg+xml", t = e === "html" ? Jt("artifacts.htmlPreviewTitle") || "HTML Preview" : Jt("artifacts.svgPreviewTitle") || "SVG Preview";
      return void C("previewCode", { node: n.node, artifactType: l, artifactTitle: t, id: `temp-${e}-${Date.now()}` });
    }
    e === "html" && (jl.value = !jl.value);
  }
  function He(e, l = {}) {
    if (!ae || p || n.stream === !1 && n.loading !== !1 || (At(), Xn()) || me.value || h.value !== e || Ql()) return null;
    if (Be) return Be;
    if (A.value && R.value) return Promise.resolve();
    const t = It(), a = xt.value;
    let o = !1;
    A.value = !0, (function() {
      const r = fa.value;
      J && r && Ne !== r && (Ne && J.markSettled(Ne), Ne = r, J.markPending(r));
    })();
    const d = D(null, null, function* () {
      try {
        yield (function(r) {
          return D(this, null, function* () {
            var u, c;
            if (!ae || p) return;
            sl = !1;
            const s = yl.value;
            if (Ct = !1, de.value = !1, We.value = null, ge.value = !1, E.value = !1, nl.value = !1, Pt.value = null, Il.value = null, wl.value = null, Ge.value = null, On(), (function() {
              if (_l.value = !1, Xl()) return void (Yl.value = null);
              const f = mn.value;
              Yl.value = R.value || f == null ? null : f;
            })(), Ye(), Je(), (function(f) {
              f.replaceChildren();
            })(r), Ze(), yield ea(Wn()), p) return;
            const v = D(null, null, function* () {
              var f, w;
              if (s === "diff") {
                (function() {
                  if (wt || typeof window > "u") return;
                  wt = !0;
                  const j = (B) => {
                    var k;
                    pl("reason" in B ? B.reason : (k = B.error) != null ? k : B.message) && (B.preventDefault(), B.stopImmediatePropagation());
                  };
                  window.addEventListener("error", j, !0), window.addEventListener("unhandledrejection", j, !0), Ll = () => {
                    window.removeEventListener("error", j, !0), window.removeEventListener("unhandledrejection", j, !0), wt = !1, Ll = null;
                  };
                })(), Ve();
                const N = kt(String((f = n.node.originalCode) != null ? f : ""), String((w = n.node.updatedCode) != null ? w : ""));
                Tl ? yield Tl(r, N.original, N.updated, Me.value) : yield ae(r, n.node.code, Me.value);
              } else yield ae(r, $e.value, Me.value);
              ge.value = !0;
            }), g = v.finally(() => {
              cl === g && (cl = null);
            });
            if (cl = g, yield (function(f) {
              return D(this, null, function* () {
                if (!i.value) return void (yield f);
                let w, N = !1;
                for (f.then(() => {
                  N = !0;
                }, (j) => {
                  N = !0, w = j;
                }); ; ) {
                  if (p) return;
                  if (N) {
                    if (w) throw w;
                    return;
                  }
                  if (Jl() && Oa()) return;
                  yield O(), yield ke();
                }
              });
            })(g), p || yl.value !== s) return;
            ge.value = !0;
            const y = (u = n.codeBlockOptions) == null ? void 0 : u.fontSize;
            if (typeof y == "number" && Number.isFinite(y) && y > 0) {
              const f = s === "diff" ? G() : ie();
              (c = f?.updateOptions) == null || c.call(f, { fontSize: y }), ue.value = y, T.value = y;
            } else if (!$n()) {
              const f = Dt();
              f && f > 0 ? (ue.value = f, T.value = f) : (ue.value = 12, T.value = 12);
            }
            for (Ml(); sl; ) if (sl = !1, yield Vn(), p) return;
            De.value || pe.value || le(!1), R.value = !0, an.value = s, (function() {
              var f, w, N, j, B;
              if (Ye(), i.value) {
                const P = G(), Z = (f = P?.getOriginalEditor) == null ? void 0 : f.call(P), be = (w = P?.getModifiedEditor) == null ? void 0 : w.call(P), te = ($, I) => {
                  try {
                    const X = $?.[I];
                    if (typeof X != "function") return;
                    const ce = X.call($, () => fe());
                    ce && Te.push(ce);
                  } catch {
                  }
                };
                try {
                  const $ = (N = P?.onDidUpdateDiff) == null ? void 0 : N.call(P, () => {
                    fe(), se(() => Sl());
                  });
                  $ && Te.push($);
                } catch {
                }
                te(Z, "onDidContentSizeChange"), te(be, "onDidContentSizeChange");
                const L = h.value;
                if (L && typeof MutationObserver < "u") {
                  const $ = ["diffs-container", ".stream-diffs-shell", ".stream-diffs-surface"].join(","), I = (oe) => {
                    var re;
                    const K = oe instanceof HTMLElement ? oe : oe.parentElement;
                    return !!((re = K?.closest) != null && re.call(K, $));
                  }, X = (oe) => {
                    var re, K;
                    const Y = oe instanceof HTMLElement ? oe : oe.parentElement;
                    return !!((re = Y?.closest) != null && re.call(Y, $) || (K = Y?.querySelector) != null && K.call(Y, $));
                  }, ce = new MutationObserver((oe) => {
                    i.value && Fn() && oe.some((re) => I(re.target) || Array.from(re.addedNodes).some(X) || Array.from(re.removedNodes).some(I)) && (ye(), le({ preferModelDiffHeight: !0 }), Q(), Le());
                  });
                  ce.observe(L, { attributeFilter: ["class"], attributes: !0, childList: !0, characterData: !0, subtree: !0 }), Te.push({ dispose: () => ce.disconnect() });
                }
                if (L && typeof ResizeObserver < "u") {
                  const $ = new ResizeObserver(() => {
                    if (!i.value || (Q(), !Fn())) return;
                    const I = Cl(L);
                    I != null && (Math.ceil(L.getBoundingClientRect().height || 0) <= I + 1 || (ye(), le({ preferModelDiffHeight: !0 }), Q()));
                  });
                  $.observe(L), Te.push({ dispose: () => $.disconnect() });
                }
                return;
              }
              const k = ie();
              try {
                const P = (j = k?.onDidContentSizeChange) == null ? void 0 : j.call(k, () => fe());
                P && Te.push(P);
              } catch {
              }
              try {
                const P = (B = k?.onDidLayoutChange) == null ? void 0 : B.call(k, () => fe());
                P && Te.push(P);
              } catch {
              }
            })(), Et(), Ml(), ye(), Sl(), fe(), yield O();
            let q = null;
            tl && (q = yield tl(), q && (yield O(), yield ke()));
            const z = q ?? (s === "diff" ? yield En() : yield (function() {
              return D(this, null, function* () {
                if (Se()) return yield O(), yield ke(), Se();
                for (let f = 0; f < 30; f++) {
                  if (p || i.value) return !1;
                  const w = h.value, N = Nn(), j = Dn(w), B = !$e.value.trim() || Cn(w);
                  if (N && j && B && (yield O(), yield ke(), !p && !i.value && Nn() && Dn(h.value) && (!$e.value.trim() || Cn(h.value)))) return !0;
                  yield O(), yield ke();
                }
                return !1;
              });
            })());
            p || (z ? (Ml(), xl(), (yield wn()) || Oe()) : Oe());
          });
        })(e), bl = null;
      } catch (r) {
        const u = It(), c = a !== xt.value, s = l.allowStaleContentRetry !== !1 && c && bl !== u;
        if (t !== u || s) return s && (bl = u), o = !0, A.value = !1, R.value = !1, ge.value = !1, void (E.value = !1);
        throw Oe(t), r;
      }
    }).finally(() => {
      Be === d && (Be = null), (function() {
        const r = Ne;
        J && r && (Ne = "", O(() => {
          var u, c;
          if (!p) {
            const s = (c = (u = ne.value) == null ? void 0 : u.offsetHeight) != null ? c : 0;
            s > 0 && J.reportHeight(r, s);
          }
          J.markSettled(r);
        }));
      })(), o && !p && queueMicrotask(() => {
        var r;
        const u = h.value;
        u && !p && ((r = He(u)) == null || r.catch((c) => {
          R.value = !1, E.value = !1, Oe();
        }));
      });
    });
    return Be = d, d;
  }
  W(Ta, (e) => {
    e || bo();
  }), W(() => T.value, (e, l) => {
    var t;
    const a = i.value ? G() : ie();
    a && typeof e == "number" && Number.isFinite(e) && e > 0 && ((t = a.updateOptions) == null || t.call(a, { fontSize: e }), pe.value || le(!0));
  }, { flush: "post", immediate: !1 });
  let In = 0;
  const qa = W(() => [h.value, i.value, n.stream, n.loading, el.value, V.value, n.node.language, n.node.raw, n.node.code, n.node.loading], (e) => D(null, [e], function* ([l, t, a, o, d, r]) {
    const u = ++In;
    if (!l || !r || _e() || Ue || a === !1 && o !== !1 || !ae && (yield (function() {
      return D(this, null, function* () {
        if (typeof window > "u" || p || el.value || me.value) return;
        if (vl) return vl;
        const s = D(null, null, function* () {
          try {
            const v = yield Mo();
            if (p) return;
            if (!v) return void (me.value = !0);
            Mt(v);
          } catch {
            if (p) return;
            me.value = !0;
          }
        }).finally(() => {
          vl === s && (vl = null);
        });
        return vl = s, s;
      });
    })(), u !== In || n.stream === !1 && n.loading !== !1 || Ql() || !V.value || !ae || me.value || A.value || Xn() || p || h.value !== l) || Ql()) return;
    const c = He(l);
    if (c) {
      try {
        yield c;
      } catch {
        R.value = !1, E.value = !1, Oe();
      }
      R.value && E.value && qa();
    }
  }));
  function lt(e) {
    return typeof e == "string" ? e : null;
  }
  function An(e, l) {
    if (e === l) return !0;
    const t = lt(e), a = lt(l);
    return !!t && t === a;
  }
  function ol() {
    return wo({ darkTheme: n.darkTheme, isDark: n.isDark, lightTheme: n.lightTheme, theme: n.theme, themes: n.themes });
  }
  function Vn() {
    return D(this, arguments, function* (e = {}) {
      Ze();
      const l = () => {
        i.value && Rl(), se(() => {
          Et(), fe();
        });
      };
      if (e.appearanceOnly) return void l();
      const t = ol();
      if (t) try {
        yield ea(Wn()), yield bt(t), l();
      } catch {
      }
      else l();
    });
  }
  function Wn() {
    const e = n.themes;
    return e && typeof e[0] == "string" && typeof e[1] == "string" ? { dark: e[0], light: e[1] } : ol();
  }
  function Un() {
    var e, l, t, a, o;
    const d = $t.value, r = Nl(Ce({}, gl.value || {}), { wordWrap: d.overflow === "wrap" ? "on" : "off", overflow: d.overflow, themes: n.themes, stream: !1, MAX_HEIGHT: (l = (e = n.codeBlockOptions) == null ? void 0 : e.maxHeight) != null ? l : 500, fontSize: Al.value, lineHeight: Vl.value, theme: ol(), themeType: n.isDark ? "dark" : "light", disableLineNumbers: !H.value, disableFileHeader: !0, workerManager: (o = (a = (t = gl.value) == null ? void 0 : t.workerManager) != null ? a : xo()) != null ? o : void 0, onThemeChange() {
      Et();
    } }), u = (function() {
      var g;
      const y = (g = gl.value) == null ? void 0 : g.fontFamily;
      return typeof y == "string" && y.trim() ? y.trim() : i.value ? (function() {
        var q;
        if (typeof window > "u") return;
        const z = (q = ne.value) == null ? void 0 : q.querySelector("pre.code-pre-fallback");
        if (z)
          return window.getComputedStyle(z).fontFamily.trim() || void 0;
      })() : void 0;
    })();
    u && (r.fontFamily != null || (r.fontFamily = u));
    const c = typeof r.unsafeCSS == "string" ? r.unsafeCSS : "", s = `
[data-file] [data-line],
[data-diff] [data-line] {
  white-space: ${(v = d.overflow) === "wrap" ? "pre-wrap" : "pre"} !important;
  overflow-wrap: ${v === "wrap" ? "anywhere" : "normal"} !important;
  word-break: normal !important;
}`;
    var v;
    return r.unsafeCSS = `[data-file], [data-diff] { --diffs-min-number-column-width-default: 2ch !important; }
${s}

[data-no-newline],
[data-gutter-buffer="metadata"] {
  --diffs-computed-decoration-bg: var(--markstream-diff-metadata-bg) !important;
  --diffs-computed-diff-line-bg: var(--markstream-diff-metadata-bg) !important;
  --diffs-computed-selected-line-bg: var(--markstream-diff-metadata-bg) !important;
  --diffs-line-bg: var(--markstream-diff-metadata-bg) !important;
  color: var(--markstream-diff-metadata-fg) !important;
  background-color: var(--markstream-diff-metadata-bg) !important;
}
${c}`.trim(), r;
  }
  function Ze() {
    const e = Un();
    if (!Pe) return Pe = e, Pe;
    for (const l of Object.keys(Pe)) l in e || delete Pe[l];
    return Object.assign(Pe, e), Pe;
  }
  W(yl, (e, l) => D(null, null, function* () {
    if (e === l || de.value || Ue || (Ln(), !ae || !h.value) || !A.value || n.stream === !1 && n.loading !== !1 || !V.value) return;
    const t = Be;
    if (t) {
      try {
        yield t;
      } catch {
      }
      if (p || !h.value) return;
    }
    if (an.value !== e || !A.value || !R.value) try {
      R.value = !1, E.value = !1, A.value = !1, ge.value = !1, Ye(), Je(), Ve(), yield O(), yield He(h.value);
    } catch {
      R.value = !1, E.value = !1, Oe();
    }
  }));
  const tt = x(0), Gn = m(() => String(tt.value));
  let Pl = !1;
  function It() {
    var e;
    const l = ol();
    return JSON.stringify({ kind: yl.value, language: Me.value, structural: Gn.value, optionsRevision: tt.value, settledContentGeneration: on.value, theme: (e = lt(l)) != null ? e : l == null ? null : "custom", isDark: n.isDark });
  }
  W(() => {
    var e;
    return (e = n.codeBlockOptions) == null ? void 0 : e.fontSize;
  }, (e) => {
    const l = typeof e == "number" && Number.isFinite(e) && e > 0 ? e : Bt;
    ue.value = l, T.value = l, Pt.value = null, Il.value = null, wl.value = null;
  }), W(() => [n.codeBlockOptions, n.showLineNumbers], () => {
    tt.value += 1, n.stream === !1 && n.loading !== !1 && (Pl = !0);
  }, { deep: !0 }), W(() => [$e.value, n.node.originalCode, n.node.updatedCode], () => {
    xt.value += 1, _e() || (on.value += 1);
  });
  const Ke = m(() => It());
  function At() {
    de.value && We.value !== Ke.value && (de.value = !1, We.value = null, bl = null, St = null, A.value = !1, R.value = !1, ge.value = !1, E.value = !1, nl.value = !1);
  }
  function Xn() {
    return At(), de.value && We.value === Ke.value;
  }
  function Oe(e = Ke.value) {
    We.value = e, de.value = !0, nl.value = !1;
  }
  return W(Ke, () => D(null, null, function* () {
    if (Ue || !de.value || We.value === Ke.value || !ae || !h.value || me.value || p || !V.value || n.stream === !1 && n.loading !== !1 || Ql()) return;
    const e = Ke.value;
    Ue = !0;
    try {
      if (At(), de.value) return;
      yield He(h.value);
    } catch {
      R.value = !1, E.value = !1, Oe();
    } finally {
      St = e, yield O(), Ue = !1;
    }
  })), W(() => [n.codeBlockOptions, V.value], () => {
    var e, l;
    if (Ze(), !ae || !V.value) return;
    const t = i.value ? G() : ie(), a = typeof ((e = n.codeBlockOptions) == null ? void 0 : e.fontSize) == "number" ? n.codeBlockOptions.fontSize : Number.isFinite(T.value) ? T.value : void 0;
    typeof a == "number" && Number.isFinite(a) && a > 0 && ((l = t?.updateOptions) == null || l.call(t, { fontSize: a })), le(!1);
  }, { deep: !0 }), W(() => [ol(), tn.value, el.value, A.value, V.value], ([e, l], t) => {
    if (!el.value || !V.value) return;
    const a = t != null && An(e, t[0]), o = t != null && l !== t[1];
    R.value ? (sl = !1, Vn({ appearanceOnly: a })) : a && !o || (sl = !0);
  }, { flush: "post" }), W(() => [Gn.value, el.value, V.value], (e, l) => D(null, [e, l], function* ([t, a, o], [d]) {
    if (Ze(), !a || !o || !ae || !h.value || !A.value || t === d) return;
    if (n.stream === !1 && n.loading !== !1) return void (Pl = !0);
    Pl = !1;
    const r = Be;
    if (r) {
      try {
        yield r;
      } catch {
      }
      if (p || !h.value) return;
    }
    try {
      R.value = !1, E.value = !1, A.value = !1, ge.value = !1, Ye(), Je(), Ve(), ml && Mt(ml), yield O(), yield He(h.value, { allowStaleContentRetry: !1 });
    } catch {
      R.value = !1, E.value = !1, Oe();
    }
  }), { flush: "post" }), W(() => [n.loading, V.value], ([e, l]) => {
    e === !1 && l && Pl && (Pl = !1, tt.value += 1);
  }, { flush: "post" }), W(() => [n.loading, V.value], (e, l) => D(null, [e, l], function* ([t, a], o) {
    if (!a) return;
    const d = o?.[0];
    if (d === !1 && t !== !1 && i.value && A.value && (yield O(), se(() => {
      D(null, null, function* () {
        const u = Be;
        if (u) try {
          yield u;
        } catch {
        }
        !p && i.value && n.loading !== !1 && (Ze(), Rl(), fe());
      });
    })), t) return;
    const r = d !== void 0 && d !== !1;
    yield O(), se(() => {
      D(null, null, function* () {
        var u, c;
        try {
          if (r && (yield (function() {
            return D(this, null, function* () {
              if (!de.value || !ae || !h.value || me.value || p || !V.value) return !1;
              if (St === Ke.value) return !0;
              Ue = !0;
              try {
                de.value = !1, We.value = null, bl = null, A.value = !1, R.value = !1, ge.value = !1, E.value = !1, Ye(), Je(), Ve(), ml && Mt(ml), yield O();
                try {
                  yield He(h.value);
                } catch {
                  R.value = !1, E.value = !1, Oe();
                }
              } finally {
                yield O(), Ue = !1;
              }
              return !0;
            });
          })())) return void le(!1);
          if (r && i.value && A.value && Ct && h.value) return Ct = !1, R.value = !1, E.value = !1, A.value = !1, ge.value = !1, Ye(), Je(), Ve(), yield O(), yield He(h.value, { allowStaleContentRetry: !1 }), void Le(!0);
          if (r && A.value) if (i.value && h.value) {
            const s = Be;
            if (s) try {
              yield s;
            } catch {
            }
            Ze();
            const v = kt(String((u = n.node.originalCode) != null ? u : ""), String((c = n.node.updatedCode) != null ? c : ""));
            if (yield Tn(v.original, v.updated, Me.value), p || !i.value) return;
            yield Promise.resolve(pt()), Rl(), Q(!0), bn(), ye(), Sl();
            const g = yield En();
            p || !g || E.value || (yield wn()), fe(), Le(!0);
          } else Ln(), _n($e.value, Me.value), yield new Promise((s) => {
            const v = () => {
              p ? s() : Zl || Qe ? setTimeout(v, 16) : s();
            };
            v();
          }), p || i.value || (yield Promise.resolve(ht()));
          r && i.value ? (le({ preferModelDiffHeight: !0, holdCurrentDiffHeight: !0 }), Le(!0)) : le(!1);
        } catch {
        }
      });
    });
  }), { immediate: !0, flush: "post" }), ua(() => {
    Ye(), Je(), gt(), Ll?.();
  }), (e, l) => {
    var t;
    return me.value ? (ul(), rt(la, { key: 0, style: nt(pn.value), node: dn.value, loading: n.loading, "show-line-numbers": H.value, "diff-inline": ql.value, "diff-hide-unchanged-regions": rn.value, "code-block-options": n.codeBlockOptions, "resolved-visual-options": $t.value, "reserved-height-px": i.value && (t = Ge.value) != null ? t : void 0, "is-dark": n.isDark, theme: n.theme, "dark-theme": n.darkTheme, "light-theme": n.lightTheme, themes: n.themes, "show-header": n.showHeader, "show-copy-button": n.showCopyButton, "show-tooltips": n.showTooltips }, Qn({ _: 2 }, [e.$slots["header-left"] ? { name: "header-left", fn: il(() => [$l(e.$slots, "header-left", {}, void 0, !0)]), key: "0" } : void 0, e.$slots["header-right"] ? { name: "header-right", fn: il(() => [$l(e.$slots, "header-right", {}, void 0, !0)]), key: "1" } : void 0]), 1032, ["style", "node", "loading", "show-line-numbers", "diff-inline", "diff-hide-unchanged-regions", "code-block-options", "resolved-visual-options", "reserved-height-px", "is-dark", "theme", "dark-theme", "light-theme", "themes", "show-header", "show-copy-button", "show-tooltips"])) : (ul(), Zn("div", { key: 1, ref_key: "container", ref: ne, style: nt(Ea.value), class: it(["code-block-container rounded-lg border", [{ dark: n.isDark, "is-rendering": n.loading, "is-dark": nn.value, "is-diff": i.value, "is-plain-text": dt.value }]]), "data-markstream-code-block": "1", "data-markstream-enhanced": E.value && !me.value ? "true" : "false", "data-markstream-enhancement-state": ba.value, "data-markstream-code-block-state": _e() ? "streaming" : "settled", "data-markstream-pending": ya.value ? "true" : void 0, "data-markstream-viewport-pending": Qt.value && sa(vt) && !V.value ? "true" : void 0 }, [lo(So, { "show-header": n.showHeader, "show-collapse-button": n.showCollapseButton, "show-font-size-buttons": n.showFontSizeButtons, "enable-font-size-control": n.enableFontSizeControl, "show-copy-button": n.showCopyButton, "show-expand-button": n.showExpandButton, "show-preview-button": n.showPreviewButton, "show-tooltips": n.showTooltips, "is-dark": n.isDark, loading: n.loading, stream: S.stream, "is-collapsed": pe.value, "is-expanded": De.value, "copy-text": ut.value, "is-previewable": jt.value, "code-font-size": T.value, "code-font-min": 10, "code-font-max": 36, "default-code-font-size": ue.value, "font-baseline-ready": ka.value, "diff-stats": i.value ? hl.value : null, "diff-stats-aria-label": ha.value, onToggleCollapse: Ra, onDecreaseFont: $a, onResetFont: Ha, onIncreaseFont: Pa, onCopy: za, onToggleExpand: La, onPreview: _a }, Qn({ "header-left": il(() => [$l(e.$slots, "header-left", {}, () => [U("div", Lo, [U("span", { class: "icon-slot h-4 w-4 flex-shrink-0", innerHTML: Fa.value }, null, 8, Ro), U("div", _o, [U("div", qo, Gt(Na.value), 1), jn.value ? (ul(), Zn("div", jo, Gt(jn.value), 1)) : Wt("", !0)])])], !0)]), loading: il(() => [$l(e.$slots, "loading", { loading: S.loading, stream: S.stream }, () => [l[0] || (l[0] = U("div", { class: "loading-skeleton" }, [U("div", { class: "skeleton-line" }), U("div", { class: "skeleton-line" }), U("div", { class: "skeleton-line short" })], -1))], !0)]), default: il(() => {
      var a;
      return [to(U("div", { class: it(["code-editor-layer", { "code-editor-layer--collapsed": pe.value }]) }, [U("div", { ref_key: "codeEditor", ref: h, class: it(["code-editor-container", S.stream ? "" : "code-height-placeholder"]), "data-markstream-host-hidden": ga.value ? "true" : void 0, style: nt(Ma.value) }, null, 14, Io), sn.value ? (ul(), rt(la, { key: 0, style: nt(pn.value), node: dn.value, loading: n.loading, "show-line-numbers": H.value, "diff-inline": ql.value, "diff-hide-unchanged-regions": rn.value, "code-block-options": n.codeBlockOptions, "resolved-visual-options": $t.value, "reserved-height-px": i.value && (a = Ge.value) != null ? a : void 0, "is-dark": n.isDark, theme: n.theme, "dark-theme": n.darkTheme, "light-theme": n.lightTheme, themes: n.themes, "show-toolbar": !1 }, null, 8, ["style", "node", "loading", "show-line-numbers", "diff-inline", "diff-hide-unchanged-regions", "code-block-options", "resolved-visual-options", "reserved-height-px", "is-dark", "theme", "dark-theme", "light-theme", "themes"])) : Wt("", !0)], 2), [[no, !!S.stream || !S.loading]]), jl.value && !Yt.value && jt.value && we.value === "html" ? (ul(), rt(To, { key: 0, code: n.node.code, "html-preview-allow-scripts": n.htmlPreviewAllowScripts, "html-preview-sandbox": n.htmlPreviewSandbox, "is-dark": n.isDark, "on-close": () => jl.value = !1 }, null, 8, ["code", "html-preview-allow-scripts", "html-preview-sandbox", "is-dark", "on-close"])) : Wt("", !0)];
    }), _: 2 }, [e.$slots["header-right"] ? { name: "header-right", fn: il(() => [$l(e.$slots, "header-right", {}, void 0, !0)]), key: "0" } : void 0]), 1032, ["show-header", "show-collapse-button", "show-font-size-buttons", "enable-font-size-control", "show-copy-button", "show-expand-button", "show-preview-button", "show-tooltips", "is-dark", "loading", "stream", "is-collapsed", "is-expanded", "copy-text", "is-previewable", "code-font-size", "default-code-font-size", "font-baseline-ready", "diff-stats", "diff-stats-aria-label"])], 14, zo));
  };
} }), [["__scopeId", "data-v-6000600b"]]);
export {
  Go as default
};
