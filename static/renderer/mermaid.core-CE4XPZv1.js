import { cO as on, cm as zr } from "./index-WjDCRcCV.js";
var hu = Object.defineProperty, p = (e, t) => hu(e, "name", { value: t, configurable: !0 }), Ky = (e, t) => {
  for (var r in t)
    hu(e, r, { get: t[r], enumerable: !0 });
}, ps = { exports: {} }, Qy = ps.exports, Ol;
function Jy() {
  return Ol || (Ol = 1, (function(e, t) {
    (function(r, i) {
      e.exports = i();
    })(Qy, (function() {
      var r = 1e3, i = 6e4, s = 36e5, o = "millisecond", a = "second", n = "minute", l = "hour", c = "day", h = "week", u = "month", d = "quarter", f = "year", y = "date", m = "Invalid Date", x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(E) {
        var O = ["th", "st", "nd", "rd"], B = E % 100;
        return "[" + E + (O[(B - 20) % 10] || O[B] || O[0]) + "]";
      } }, S = function(E, O, B) {
        var R = String(E);
        return !R || R.length >= O ? E : "" + Array(O + 1 - R.length).join(B) + E;
      }, T = { s: S, z: function(E) {
        var O = -E.utcOffset(), B = Math.abs(O), R = Math.floor(B / 60), $ = B % 60;
        return (O <= 0 ? "+" : "-") + S(R, 2, "0") + ":" + S($, 2, "0");
      }, m: function E(O, B) {
        if (O.date() < B.date()) return -E(B, O);
        var R = 12 * (B.year() - O.year()) + (B.month() - O.month()), $ = O.clone().add(R, u), J = B - $ < 0, Z = O.clone().add(R + (J ? -1 : 1), u);
        return +(-(R + (B - $) / (J ? $ - Z : Z - $)) || 0);
      }, a: function(E) {
        return E < 0 ? Math.ceil(E) || 0 : Math.floor(E);
      }, p: function(E) {
        return { M: u, y: f, w: h, d: c, D: y, h: l, m: n, s: a, ms: o, Q: d }[E] || String(E || "").toLowerCase().replace(/s$/, "");
      }, u: function(E) {
        return E === void 0;
      } }, _ = "en", L = {};
      L[_] = k;
      var M = "$isDayjsObject", v = function(E) {
        return E instanceof et || !(!E || !E[M]);
      }, X = function E(O, B, R) {
        var $;
        if (!O) return _;
        if (typeof O == "string") {
          var J = O.toLowerCase();
          L[J] && ($ = J), B && (L[J] = B, $ = J);
          var Z = O.split("-");
          if (!$ && Z.length > 1) return E(Z[0]);
        } else {
          var dt = O.name;
          L[dt] = O, $ = dt;
        }
        return !R && $ && (_ = $), $ || !R && _;
      }, z = function(E, O) {
        if (v(E)) return E.clone();
        var B = typeof O == "object" ? O : {};
        return B.date = E, B.args = arguments, new et(B);
      }, I = T;
      I.l = X, I.i = v, I.w = function(E, O) {
        return z(E, { locale: O.$L, utc: O.$u, x: O.$x, $offset: O.$offset });
      };
      var et = (function() {
        function E(B) {
          this.$L = X(B.locale, null, !0), this.parse(B), this.$x = this.$x || B.x || {}, this[M] = !0;
        }
        var O = E.prototype;
        return O.parse = function(B) {
          this.$d = (function(R) {
            var $ = R.date, J = R.utc;
            if ($ === null) return /* @__PURE__ */ new Date(NaN);
            if (I.u($)) return /* @__PURE__ */ new Date();
            if ($ instanceof Date) return new Date($);
            if (typeof $ == "string" && !/Z$/i.test($)) {
              var Z = $.match(x);
              if (Z) {
                var dt = Z[2] - 1 || 0, Ct = (Z[7] || "0").substring(0, 3);
                return J ? new Date(Date.UTC(Z[1], dt, Z[3] || 1, Z[4] || 0, Z[5] || 0, Z[6] || 0, Ct)) : new Date(Z[1], dt, Z[3] || 1, Z[4] || 0, Z[5] || 0, Z[6] || 0, Ct);
              }
            }
            return new Date($);
          })(B), this.init();
        }, O.init = function() {
          var B = this.$d;
          this.$y = B.getFullYear(), this.$M = B.getMonth(), this.$D = B.getDate(), this.$W = B.getDay(), this.$H = B.getHours(), this.$m = B.getMinutes(), this.$s = B.getSeconds(), this.$ms = B.getMilliseconds();
        }, O.$utils = function() {
          return I;
        }, O.isValid = function() {
          return this.$d.toString() !== m;
        }, O.isSame = function(B, R) {
          var $ = z(B);
          return this.startOf(R) <= $ && $ <= this.endOf(R);
        }, O.isAfter = function(B, R) {
          return z(B) < this.startOf(R);
        }, O.isBefore = function(B, R) {
          return this.endOf(R) < z(B);
        }, O.$g = function(B, R, $) {
          return I.u(B) ? this[R] : this.set($, B);
        }, O.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, O.valueOf = function() {
          return this.$d.getTime();
        }, O.startOf = function(B, R) {
          var $ = this, J = !!I.u(R) || R, Z = I.p(B), dt = function(kt, At) {
            var $t = I.w($.$u ? Date.UTC($.$y, At, kt) : new Date($.$y, At, kt), $);
            return J ? $t : $t.endOf(c);
          }, Ct = function(kt, At) {
            return I.w($.toDate()[kt].apply($.toDate("s"), (J ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(At)), $);
          }, xt = this.$W, St = this.$M, wt = this.$D, ht = "set" + (this.$u ? "UTC" : "");
          switch (Z) {
            case f:
              return J ? dt(1, 0) : dt(31, 11);
            case u:
              return J ? dt(1, St) : dt(0, St + 1);
            case h:
              var gt = this.$locale().weekStart || 0, Bt = (xt < gt ? xt + 7 : xt) - gt;
              return dt(J ? wt - Bt : wt + (6 - Bt), St);
            case c:
            case y:
              return Ct(ht + "Hours", 0);
            case l:
              return Ct(ht + "Minutes", 1);
            case n:
              return Ct(ht + "Seconds", 2);
            case a:
              return Ct(ht + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, O.endOf = function(B) {
          return this.startOf(B, !1);
        }, O.$set = function(B, R) {
          var $, J = I.p(B), Z = "set" + (this.$u ? "UTC" : ""), dt = ($ = {}, $[c] = Z + "Date", $[y] = Z + "Date", $[u] = Z + "Month", $[f] = Z + "FullYear", $[l] = Z + "Hours", $[n] = Z + "Minutes", $[a] = Z + "Seconds", $[o] = Z + "Milliseconds", $)[J], Ct = J === c ? this.$D + (R - this.$W) : R;
          if (J === u || J === f) {
            var xt = this.clone().set(y, 1);
            xt.$d[dt](Ct), xt.init(), this.$d = xt.set(y, Math.min(this.$D, xt.daysInMonth())).$d;
          } else dt && this.$d[dt](Ct);
          return this.init(), this;
        }, O.set = function(B, R) {
          return this.clone().$set(B, R);
        }, O.get = function(B) {
          return this[I.p(B)]();
        }, O.add = function(B, R) {
          var $, J = this;
          B = Number(B);
          var Z = I.p(R), dt = function(St) {
            var wt = z(J);
            return I.w(wt.date(wt.date() + Math.round(St * B)), J);
          };
          if (Z === u) return this.set(u, this.$M + B);
          if (Z === f) return this.set(f, this.$y + B);
          if (Z === c) return dt(1);
          if (Z === h) return dt(7);
          var Ct = ($ = {}, $[n] = i, $[l] = s, $[a] = r, $)[Z] || 1, xt = this.$d.getTime() + B * Ct;
          return I.w(xt, this);
        }, O.subtract = function(B, R) {
          return this.add(-1 * B, R);
        }, O.format = function(B) {
          var R = this, $ = this.$locale();
          if (!this.isValid()) return $.invalidDate || m;
          var J = B || "YYYY-MM-DDTHH:mm:ssZ", Z = I.z(this), dt = this.$H, Ct = this.$m, xt = this.$M, St = $.weekdays, wt = $.months, ht = $.meridiem, gt = function(At, $t, Qt, ce) {
            return At && (At[$t] || At(R, J)) || Qt[$t].slice(0, ce);
          }, Bt = function(At) {
            return I.s(dt % 12 || 12, At, "0");
          }, kt = ht || function(At, $t, Qt) {
            var ce = At < 12 ? "AM" : "PM";
            return Qt ? ce.toLowerCase() : ce;
          };
          return J.replace(C, (function(At, $t) {
            return $t || (function(Qt) {
              switch (Qt) {
                case "YY":
                  return String(R.$y).slice(-2);
                case "YYYY":
                  return I.s(R.$y, 4, "0");
                case "M":
                  return xt + 1;
                case "MM":
                  return I.s(xt + 1, 2, "0");
                case "MMM":
                  return gt($.monthsShort, xt, wt, 3);
                case "MMMM":
                  return gt(wt, xt);
                case "D":
                  return R.$D;
                case "DD":
                  return I.s(R.$D, 2, "0");
                case "d":
                  return String(R.$W);
                case "dd":
                  return gt($.weekdaysMin, R.$W, St, 2);
                case "ddd":
                  return gt($.weekdaysShort, R.$W, St, 3);
                case "dddd":
                  return St[R.$W];
                case "H":
                  return String(dt);
                case "HH":
                  return I.s(dt, 2, "0");
                case "h":
                  return Bt(1);
                case "hh":
                  return Bt(2);
                case "a":
                  return kt(dt, Ct, !0);
                case "A":
                  return kt(dt, Ct, !1);
                case "m":
                  return String(Ct);
                case "mm":
                  return I.s(Ct, 2, "0");
                case "s":
                  return String(R.$s);
                case "ss":
                  return I.s(R.$s, 2, "0");
                case "SSS":
                  return I.s(R.$ms, 3, "0");
                case "Z":
                  return Z;
              }
              return null;
            })(At) || Z.replace(":", "");
          }));
        }, O.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, O.diff = function(B, R, $) {
          var J, Z = this, dt = I.p(R), Ct = z(B), xt = (Ct.utcOffset() - this.utcOffset()) * i, St = this - Ct, wt = function() {
            return I.m(Z, Ct);
          };
          switch (dt) {
            case f:
              J = wt() / 12;
              break;
            case u:
              J = wt();
              break;
            case d:
              J = wt() / 3;
              break;
            case h:
              J = (St - xt) / 6048e5;
              break;
            case c:
              J = (St - xt) / 864e5;
              break;
            case l:
              J = St / s;
              break;
            case n:
              J = St / i;
              break;
            case a:
              J = St / r;
              break;
            default:
              J = St;
          }
          return $ ? J : I.a(J);
        }, O.daysInMonth = function() {
          return this.endOf(u).$D;
        }, O.$locale = function() {
          return L[this.$L];
        }, O.locale = function(B, R) {
          if (!B) return this.$L;
          var $ = this.clone(), J = X(B, R, !0);
          return J && ($.$L = J), $;
        }, O.clone = function() {
          return I.w(this.$d, this);
        }, O.toDate = function() {
          return new Date(this.valueOf());
        }, O.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, O.toISOString = function() {
          return this.$d.toISOString();
        }, O.toString = function() {
          return this.$d.toUTCString();
        }, E;
      })(), H = et.prototype;
      return z.prototype = H, [["$ms", o], ["$s", a], ["$m", n], ["$H", l], ["$W", c], ["$M", u], ["$y", f], ["$D", y]].forEach((function(E) {
        H[E[1]] = function(O) {
          return this.$g(O, E[0], E[1]);
        };
      })), z.extend = function(E, O) {
        return E.$i || (E(O, et, z), E.$i = !0), z;
      }, z.locale = X, z.isDayjs = v, z.unix = function(E) {
        return z(1e3 * E);
      }, z.en = L[_], z.Ls = L, z.p = {}, z;
    }));
  })(ps)), ps.exports;
}
var tm = Jy();
const em = /* @__PURE__ */ on(tm);
var De = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, P = {
  trace: /* @__PURE__ */ p((...e) => {
  }, "trace"),
  debug: /* @__PURE__ */ p((...e) => {
  }, "debug"),
  info: /* @__PURE__ */ p((...e) => {
  }, "info"),
  warn: /* @__PURE__ */ p((...e) => {
  }, "warn"),
  error: /* @__PURE__ */ p((...e) => {
  }, "error"),
  fatal: /* @__PURE__ */ p((...e) => {
  }, "fatal")
}, an = /* @__PURE__ */ p(function(e = "fatal") {
  let t = De.fatal;
  typeof e == "string" ? e.toLowerCase() in De && (t = De[e]) : typeof e == "number" && (t = e), P.trace = () => {
  }, P.debug = () => {
  }, P.info = () => {
  }, P.warn = () => {
  }, P.error = () => {
  }, P.fatal = () => {
  }, t <= De.fatal && (P.fatal = console.error ? console.error.bind(console, ae("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", ae("FATAL"))), t <= De.error && (P.error = console.error ? console.error.bind(console, ae("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", ae("ERROR"))), t <= De.warn && (P.warn = console.warn ? console.warn.bind(console, ae("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", ae("WARN"))), t <= De.info && (P.info = console.info ? console.info.bind(console, ae("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", ae("INFO"))), t <= De.debug && (P.debug = console.debug ? console.debug.bind(console, ae("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", ae("DEBUG"))), t <= De.trace && (P.trace = console.debug ? console.debug.bind(console, ae("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", ae("TRACE")));
}, "setLogLevel"), ae = /* @__PURE__ */ p((e) => `%c${em().format("ss.SSS")} : ${e} : `, "format");
const gs = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    g: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    b: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    h: (e) => e % 360,
    s: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    l: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    a: (e) => e >= 1 ? 1 : e < 0 ? 0 : e
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (e) => {
    const t = e / 255;
    return e > 0.03928 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (e, t, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e),
  hsl2rgb: ({ h: e, s: t, l: r }, i) => {
    if (!t)
      return r * 2.55;
    e /= 360, t /= 100, r /= 100;
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, o = 2 * r - s;
    switch (i) {
      case "r":
        return gs.hue2rgb(o, s, e + 1 / 3) * 255;
      case "g":
        return gs.hue2rgb(o, s, e) * 255;
      case "b":
        return gs.hue2rgb(o, s, e - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: e, g: t, b: r }, i) => {
    e /= 255, t /= 255, r /= 255;
    const s = Math.max(e, t, r), o = Math.min(e, t, r), a = (s + o) / 2;
    if (i === "l")
      return a * 100;
    if (s === o)
      return 0;
    const n = s - o, l = a > 0.5 ? n / (2 - s - o) : n / (s + o);
    if (i === "s")
      return l * 100;
    switch (s) {
      case e:
        return ((t - r) / n + (t < r ? 6 : 0)) * 60;
      case t:
        return ((r - e) / n + 2) * 60;
      case r:
        return ((e - t) / n + 4) * 60;
      default:
        return -1;
    }
  }
}, rm = {
  /* API */
  clamp: (e, t, r) => t > r ? Math.min(t, Math.max(r, e)) : Math.min(r, Math.max(t, e)),
  round: (e) => Math.round(e * 1e10) / 1e10
}, im = {
  /* API */
  dec2hex: (e) => {
    const t = Math.round(e).toString(16);
    return t.length > 1 ? t : `0${t}`;
  }
}, bt = {
  channel: gs,
  lang: rm,
  unit: im
}, Ve = {};
for (let e = 0; e <= 255; e++)
  Ve[e] = bt.unit.dec2hex(e);
const Gt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
let sm = class {
  constructor() {
    this.type = Gt.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(t) {
    if (this.type && this.type !== t)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = t;
  }
  reset() {
    this.type = Gt.ALL;
  }
  is(t) {
    return this.type === t;
  }
};
class om {
  /* CONSTRUCTOR */
  constructor(t, r) {
    this.color = r, this.changed = !1, this.data = t, this.type = new sm();
  }
  /* API */
  set(t, r) {
    return this.color = r, this.changed = !1, this.data = t, this.type.type = Gt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const t = this.data, { h: r, s: i, l: s } = t;
    r === void 0 && (t.h = bt.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = bt.channel.rgb2hsl(t, "s")), s === void 0 && (t.l = bt.channel.rgb2hsl(t, "l"));
  }
  _ensureRGB() {
    const t = this.data, { r, g: i, b: s } = t;
    r === void 0 && (t.r = bt.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = bt.channel.hsl2rgb(t, "g")), s === void 0 && (t.b = bt.channel.hsl2rgb(t, "b"));
  }
  /* GETTERS */
  get r() {
    const t = this.data, r = t.r;
    return !this.type.is(Gt.HSL) && r !== void 0 ? r : (this._ensureHSL(), bt.channel.hsl2rgb(t, "r"));
  }
  get g() {
    const t = this.data, r = t.g;
    return !this.type.is(Gt.HSL) && r !== void 0 ? r : (this._ensureHSL(), bt.channel.hsl2rgb(t, "g"));
  }
  get b() {
    const t = this.data, r = t.b;
    return !this.type.is(Gt.HSL) && r !== void 0 ? r : (this._ensureHSL(), bt.channel.hsl2rgb(t, "b"));
  }
  get h() {
    const t = this.data, r = t.h;
    return !this.type.is(Gt.RGB) && r !== void 0 ? r : (this._ensureRGB(), bt.channel.rgb2hsl(t, "h"));
  }
  get s() {
    const t = this.data, r = t.s;
    return !this.type.is(Gt.RGB) && r !== void 0 ? r : (this._ensureRGB(), bt.channel.rgb2hsl(t, "s"));
  }
  get l() {
    const t = this.data, r = t.l;
    return !this.type.is(Gt.RGB) && r !== void 0 ? r : (this._ensureRGB(), bt.channel.rgb2hsl(t, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(t) {
    this.type.set(Gt.RGB), this.changed = !0, this.data.r = t;
  }
  set g(t) {
    this.type.set(Gt.RGB), this.changed = !0, this.data.g = t;
  }
  set b(t) {
    this.type.set(Gt.RGB), this.changed = !0, this.data.b = t;
  }
  set h(t) {
    this.type.set(Gt.HSL), this.changed = !0, this.data.h = t;
  }
  set s(t) {
    this.type.set(Gt.HSL), this.changed = !0, this.data.s = t;
  }
  set l(t) {
    this.type.set(Gt.HSL), this.changed = !0, this.data.l = t;
  }
  set a(t) {
    this.changed = !0, this.data.a = t;
  }
}
const to = new om({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), Rr = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (e) => {
    if (e.charCodeAt(0) !== 35)
      return;
    const t = e.match(Rr.re);
    if (!t)
      return;
    const r = t[1], i = parseInt(r, 16), s = r.length, o = s % 4 === 0, a = s > 4, n = a ? 1 : 17, l = a ? 8 : 4, c = o ? 0 : -1, h = a ? 255 : 15;
    return to.set({
      r: (i >> l * (c + 3) & h) * n,
      g: (i >> l * (c + 2) & h) * n,
      b: (i >> l * (c + 1) & h) * n,
      a: o ? (i & h) * n / 255 : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: s } = e;
    return s < 1 ? `#${Ve[Math.round(t)]}${Ve[Math.round(r)]}${Ve[Math.round(i)]}${Ve[Math.round(s * 255)]}` : `#${Ve[Math.round(t)]}${Ve[Math.round(r)]}${Ve[Math.round(i)]}`;
  }
}, hr = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (e) => {
    const t = e.match(hr.hueRe);
    if (t) {
      const [, r, i] = t;
      switch (i) {
        case "grad":
          return bt.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return bt.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return bt.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return bt.channel.clamp.h(parseFloat(e));
  },
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 104 && t !== 72)
      return;
    const r = e.match(hr.re);
    if (!r)
      return;
    const [, i, s, o, a, n] = r;
    return to.set({
      h: hr._hue2deg(i),
      s: bt.channel.clamp.s(parseFloat(s)),
      l: bt.channel.clamp.l(parseFloat(o)),
      a: a ? bt.channel.clamp.a(n ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, e);
  },
  stringify: (e) => {
    const { h: t, s: r, l: i, a: s } = e;
    return s < 1 ? `hsla(${bt.lang.round(t)}, ${bt.lang.round(r)}%, ${bt.lang.round(i)}%, ${s})` : `hsl(${bt.lang.round(t)}, ${bt.lang.round(r)}%, ${bt.lang.round(i)}%)`;
  }
}, vi = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (e) => {
    e = e.toLowerCase();
    const t = vi.colors[e];
    if (t)
      return Rr.parse(t);
  },
  stringify: (e) => {
    const t = Rr.stringify(e);
    for (const r in vi.colors)
      if (vi.colors[r] === t)
        return r;
  }
}, mi = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 114 && t !== 82)
      return;
    const r = e.match(mi.re);
    if (!r)
      return;
    const [, i, s, o, a, n, l, c, h] = r;
    return to.set({
      r: bt.channel.clamp.r(s ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: bt.channel.clamp.g(a ? parseFloat(o) * 2.55 : parseFloat(o)),
      b: bt.channel.clamp.b(l ? parseFloat(n) * 2.55 : parseFloat(n)),
      a: c ? bt.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: s } = e;
    return s < 1 ? `rgba(${bt.lang.round(t)}, ${bt.lang.round(r)}, ${bt.lang.round(i)}, ${bt.lang.round(s)})` : `rgb(${bt.lang.round(t)}, ${bt.lang.round(r)}, ${bt.lang.round(i)})`;
  }
}, Le = {
  /* VARIABLES */
  format: {
    keyword: vi,
    hex: Rr,
    rgb: mi,
    rgba: mi,
    hsl: hr,
    hsla: hr
  },
  /* API */
  parse: (e) => {
    if (typeof e != "string")
      return e;
    const t = Rr.parse(e) || mi.parse(e) || hr.parse(e) || vi.parse(e);
    if (t)
      return t;
    throw new Error(`Unsupported color format: "${e}"`);
  },
  stringify: (e) => !e.changed && e.color ? e.color : e.type.is(Gt.HSL) || e.data.r === void 0 ? hr.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? mi.stringify(e) : Rr.stringify(e)
}, cu = (e, t) => {
  const r = Le.parse(e);
  for (const i in t)
    r[i] = bt.channel.clamp[i](t[i]);
  return Le.stringify(r);
}, Je = (e, t, r = 0, i = 1) => {
  if (typeof e != "number")
    return cu(e, { a: t });
  const s = to.set({
    r: bt.channel.clamp.r(e),
    g: bt.channel.clamp.g(t),
    b: bt.channel.clamp.b(r),
    a: bt.channel.clamp.a(i)
  });
  return Le.stringify(s);
}, am = (e) => {
  const { r: t, g: r, b: i } = Le.parse(e), s = 0.2126 * bt.channel.toLinear(t) + 0.7152 * bt.channel.toLinear(r) + 0.0722 * bt.channel.toLinear(i);
  return bt.lang.round(s);
}, nm = (e) => am(e) >= 0.5, me = (e) => !nm(e), uu = (e, t, r) => {
  const i = Le.parse(e), s = i[t], o = bt.channel.clamp[t](s + r);
  return s !== o && (i[t] = o), Le.stringify(i);
}, q = (e, t) => uu(e, "l", t), N = (e, t) => uu(e, "l", -t), b = (e, t) => {
  const r = Le.parse(e), i = {};
  for (const s in t)
    t[s] && (i[s] = r[s] + t[s]);
  return cu(e, i);
}, lm = (e, t, r = 50) => {
  const { r: i, g: s, b: o, a } = Le.parse(e), { r: n, g: l, b: c, a: h } = Le.parse(t), u = r / 100, d = u * 2 - 1, f = a - h, m = ((d * f === -1 ? d : (d + f) / (1 + d * f)) + 1) / 2, x = 1 - m, C = i * m + n * x, k = s * m + l * x, S = o * m + c * x, T = a * u + h * (1 - u);
  return Je(C, k, S, T);
}, F = (e, t = 100) => {
  const r = Le.parse(e);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, lm(r, e, t);
};
var ya = /* @__PURE__ */ p((e, t, { depth: r = 2 } = {}) => {
  const i = { depth: r };
  if (Array.isArray(t) && !Array.isArray(e))
    return t.forEach((s) => ya(e, s, i)), e;
  if (Array.isArray(t) && Array.isArray(e))
    return t.forEach((s) => {
      e.includes(s) || e.push(s);
    }), e;
  if (e == null || r <= 0)
    return e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t;
  if (t != null && typeof e == "object" && typeof t == "object") {
    const s = e;
    Object.entries(t).forEach(([o, a]) => {
      if (typeof a == "object") {
        if (a === null)
          return;
        Object.hasOwn(e, o) || Object.defineProperty(e, o, {
          value: void 0,
          writable: !0,
          enumerable: !0,
          configurable: !0
        }), s[o] === void 0 && (s[o] = Array.isArray(a) ? [] : {}), typeof s[o] == "object" && (s[o] = ya(s[o], a, { depth: r - 1 }));
      } else typeof s[o] != "object" && (Object.hasOwn(e, o) ? s[o] = a : Object.defineProperty(e, o, {
        value: a,
        writable: !0,
        enumerable: !0,
        configurable: !0
      }));
    });
  }
  return e;
}, "assignWithDepth"), Ht = ya, Me = "#ffffff", Ae = "#f2f2f2", mt = /* @__PURE__ */ p((e, t) => t ? b(e, { s: -40, l: 10 }) : b(e, { s: -40, l: -10 }), "mkBorder"), hm = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.useGradient = !0, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || mt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || F(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || F(this.tertiaryColor), this.lineColor = this.lineColor || F(this.background), this.arrowheadColor = this.arrowheadColor || F(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || N(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || F(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || q(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || N(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || N(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || q(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || q(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 }), this.darkMode)
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = N(this["cScale" + t], 75);
    else
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = N(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || F(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || q(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || N(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || b(this.mainBkg, { h: 180, s: -15, l: e * (5 + t * 3) }), this["surfacePeer" + t] = this["surfacePeer" + t] || b(this.mainBkg, { h: 180, s: -15, l: e * (8 + t * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || b(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || b(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || b(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || b(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || b(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || b(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? b(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? b(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? b(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? b(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? b(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? b(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? b(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? b(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
      domainFontSize: this.cynefin?.domainFontSize || 16,
      itemFontSize: this.cynefin?.itemFontSize || 12,
      boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
      boundaryWidth: this.cynefin?.boundaryWidth || 2,
      cliffColor: this.cynefin?.cliffColor || "#8B0000",
      cliffWidth: this.cynefin?.cliffWidth || 4,
      arrowColor: this.cynefin?.arrowColor || this.lineColor,
      arrowWidth: this.cynefin?.arrowWidth || 2,
      complexBg: this.cynefin?.complexBg || "#E8F5E9",
      complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
      chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
      clearBg: this.cynefin?.clearBg || "#FFF8E1",
      confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
      textColor: this.cynefin?.textColor || this.textColor,
      labelColor: this.cynefin?.labelColor || this.primaryTextColor
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? q(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || b(this.primaryColor, { h: -30 }), this.git4 = this.git4 || b(this.primaryColor, { h: -60 }), this.git5 = this.git5 || b(this.primaryColor, { h: -90 }), this.git6 = this.git6 || b(this.primaryColor, { h: 60 }), this.git7 = this.git7 || b(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = q(this.git0, 25), this.git1 = q(this.git1, 25), this.git2 = q(this.git2, 25), this.git3 = q(this.git3, 25), this.git4 = q(this.git4, 25), this.git5 = q(this.git5, 25), this.git6 = q(this.git6, 25), this.git7 = q(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || F(this.git0), this.gitInv1 = this.gitInv1 || F(this.git1), this.gitInv2 = this.gitInv2 || F(this.git2), this.gitInv3 = this.gitInv3 || F(this.git3), this.gitInv4 = this.gitInv4 || F(this.git4), this.gitInv5 = this.gitInv5 || F(this.git5), this.gitInv6 = this.gitInv6 || F(this.git6), this.gitInv7 = this.gitInv7 || F(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ae, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, cm = /* @__PURE__ */ p((e) => {
  const t = new hm();
  return t.calculate(e), t;
}, "getThemeVariables"), um = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = q(this.primaryColor, 16), this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = F(this.background), this.secondaryBorderColor = mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mt(this.tertiaryColor, this.darkMode), this.primaryTextColor = F(this.primaryColor), this.secondaryTextColor = F(this.secondaryColor), this.tertiaryTextColor = F(this.tertiaryColor), this.lineColor = F(this.background), this.textColor = F(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = q(F("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = Je(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.clusterBkg = "#302F3D", this.sectionBkgColor = N("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = N(this.sectionBkgColor, 10), this.taskBorderColor = Je(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = Je(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || q(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || N(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal";
  }
  updateColors() {
    this.secondBkg = q(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = q(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.background, this.taskBkgColor = q(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = F(this.doneTaskBkgColor), this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = b(this.primaryColor, { h: 64 }), this.fillType3 = b(this.secondaryColor, { h: 64 }), this.fillType4 = b(this.primaryColor, { h: -64 }), this.fillType5 = b(this.secondaryColor, { h: -64 }), this.fillType6 = b(this.primaryColor, { h: 128 }), this.fillType7 = b(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || F(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScalePeer" + e] = this["cScalePeer" + e] || q(this["cScale" + e], 10);
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || b(this.mainBkg, { h: 30, s: -30, l: -(-10 + e * 4) }), this["surfacePeer" + e] = this["surfacePeer" + e] || b(this.mainBkg, { h: 30, s: -30, l: -(-7 + e * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.mainContrastColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.mainContrastColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
    for (let e = 0; e < 8; e++)
      this["venn" + (e + 1)] = this["venn" + (e + 1)] ?? q(this["cScale" + e], 30);
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
      domainFontSize: this.cynefin?.domainFontSize || 16,
      itemFontSize: this.cynefin?.itemFontSize || 12,
      boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
      boundaryWidth: this.cynefin?.boundaryWidth || 2,
      cliffColor: this.cynefin?.cliffColor || "#FF6B6B",
      cliffWidth: this.cynefin?.cliffWidth || 4,
      arrowColor: this.cynefin?.arrowColor || this.lineColor,
      arrowWidth: this.cynefin?.arrowWidth || 2,
      complexBg: this.cynefin?.complexBg || "#1B5E20",
      complicatedBg: this.cynefin?.complicatedBg || "#0D47A1",
      chaoticBg: this.cynefin?.chaoticBg || "#BF360C",
      clearBg: this.cynefin?.clearBg || "#F57F17",
      confusionBg: this.cynefin?.confusionBg || "#4A148C",
      textColor: this.cynefin?.textColor || this.textColor,
      labelColor: this.cynefin?.labelColor || this.primaryTextColor
    }, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? q(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#ff6b6b", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.mainBkg,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.mainBkg
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = q(this.secondaryColor, 20), this.git1 = q(this.pie2 || this.secondaryColor, 20), this.git2 = q(this.pie3 || this.tertiaryColor, 20), this.git3 = q(this.pie4 || b(this.primaryColor, { h: -30 }), 20), this.git4 = q(this.pie5 || b(this.primaryColor, { h: -60 }), 20), this.git5 = q(this.pie6 || b(this.primaryColor, { h: -90 }), 10), this.git6 = q(this.pie7 || b(this.primaryColor, { h: 60 }), 10), this.git7 = q(this.pie8 || b(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || F(this.git0), this.gitInv1 = this.gitInv1 || F(this.git1), this.gitInv2 = this.gitInv2 || F(this.git2), this.gitInv3 = this.gitInv3 || F(this.git3), this.gitInv4 = this.gitInv4 || F(this.git4), this.gitInv5 = this.gitInv5 || F(this.git5), this.gitInv6 = this.gitInv6 || F(this.git6), this.gitInv7 = this.gitInv7 || F(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || F(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || F(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "#2d2d2d", this.emUiStroke = this.emUiStroke || "#555", this.emProcessorFill = this.emProcessorFill || q("#5a3d5c", 10), this.emProcessorStroke = this.emProcessorStroke || "#8a6d8c", this.emReadModelFill = this.emReadModelFill || q("#3d5a2d", 10), this.emReadModelStroke = this.emReadModelStroke || "#6d8c5c", this.emCommandFill = this.emCommandFill || q("#2d3d5a", 10), this.emCommandStroke = this.emCommandStroke || "#5c6d8c", this.emEventFill = this.emEventFill || q("#5a452d", 10), this.emEventStroke = this.emEventStroke || "#8c755c", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || q(this.background, 5), this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || q(this.background, 12), this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || q(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || q(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, dm = /* @__PURE__ */ p((e) => {
  const t = new um();
  return t.calculate(e), t;
}, "getThemeVariables"), fm = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = b(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = mt(this.primaryColor, this.darkMode), this.secondaryBorderColor = mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mt(this.tertiaryColor, this.darkMode), this.primaryTextColor = F(this.primaryColor), this.secondaryTextColor = F(this.secondaryColor), this.tertiaryTextColor = F(this.tertiaryColor), this.lineColor = F(this.background), this.textColor = F(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.primaryBorderColor = mt(this.primaryColor, this.darkMode), this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.clusterBkg = "#FBFBFF", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = Je(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !1, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow(1px 2px 2px rgba(185, 185, 185, 1))", this.updateColors();
  }
  updateColors() {
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || N(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || N(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = N(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || N(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || b(this["cScale" + e], { h: 180 });
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || b(this.mainBkg, { h: 30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || b(this.mainBkg, { h: 30, l: -(7 + e * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || F(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || F(this.labelTextColor);
      for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
        this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || q(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || q(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = b(this.primaryColor, { h: 64 }), this.fillType3 = b(this.secondaryColor, { h: 64 }), this.fillType4 = b(this.primaryColor, { h: -64 }), this.fillType5 = b(this.secondaryColor, { h: -64 }), this.fillType6 = b(this.primaryColor, { h: 128 }), this.fillType7 = b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || b(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || b(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? b(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? b(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? b(this.tertiaryColor, { l: -40 }), this.venn4 = this.venn4 ?? b(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? b(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? b(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? b(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? b(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
      domainFontSize: this.cynefin?.domainFontSize || 16,
      itemFontSize: this.cynefin?.itemFontSize || 12,
      boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
      boundaryWidth: this.cynefin?.boundaryWidth || 2,
      cliffColor: this.cynefin?.cliffColor || "#8B0000",
      cliffWidth: this.cynefin?.cliffWidth || 4,
      arrowColor: this.cynefin?.arrowColor || this.lineColor,
      arrowWidth: this.cynefin?.arrowWidth || 2,
      complexBg: this.cynefin?.complexBg || "#E8F5E9",
      complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
      chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
      clearBg: this.cynefin?.clearBg || "#FFF8E1",
      confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
      textColor: this.cynefin?.textColor || this.textColor,
      labelColor: this.cynefin?.labelColor || this.primaryTextColor
    }, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? q(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || b(this.primaryColor, { h: -30 }), this.git4 = this.git4 || b(this.primaryColor, { h: -60 }), this.git5 = this.git5 || b(this.primaryColor, { h: -90 }), this.git6 = this.git6 || b(this.primaryColor, { h: 60 }), this.git7 = this.git7 || b(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = q(this.git0, 25), this.git1 = q(this.git1, 25), this.git2 = q(this.git2, 25), this.git3 = q(this.git3, 25), this.git4 = q(this.git4, 25), this.git5 = q(this.git5, 25), this.git6 = q(this.git6, 25), this.git7 = q(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || N(F(this.git0), 25), this.gitInv1 = this.gitInv1 || F(this.git1), this.gitInv2 = this.gitInv2 || F(this.git2), this.gitInv3 = this.gitInv3 || F(this.git3), this.gitInv4 = this.gitInv4 || F(this.git4), this.gitInv5 = this.gitInv5 || F(this.git5), this.gitInv6 = this.gitInv6 || F(this.git6), this.gitInv7 = this.gitInv7 || F(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || F(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || F(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ae;
  }
  calculate(e) {
    if (Object.keys(this).forEach((r) => {
      this[r] === "calculated" && (this[r] = void 0);
    }), typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, pm = /* @__PURE__ */ p((e) => {
  const t = new fm();
  return t.calculate(e), t;
}, "getThemeVariables"), gm = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = q("#cde498", 10), this.primaryBorderColor = mt(this.primaryColor, this.darkMode), this.secondaryBorderColor = mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mt(this.tertiaryColor, this.darkMode), this.primaryTextColor = F(this.primaryColor), this.secondaryTextColor = F(this.secondaryColor), this.tertiaryTextColor = F(this.primaryColor), this.lineColor = F(this.background), this.textColor = F(this.background), this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.5))";
  }
  updateColors() {
    this.actorBorder = N(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || N(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || N(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = N(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || N(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || b(this["cScale" + e], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || b(this.mainBkg, { h: 30, s: -30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || b(this.mainBkg, { h: 30, s: -30, l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || q(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || q(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = b(this.primaryColor, { h: 64 }), this.fillType3 = b(this.secondaryColor, { h: 64 }), this.fillType4 = b(this.primaryColor, { h: -64 }), this.fillType5 = b(this.secondaryColor, { h: -64 }), this.fillType6 = b(this.primaryColor, { h: 128 }), this.fillType7 = b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || b(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? b(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? b(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? b(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? b(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? b(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? b(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? b(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? b(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
      domainFontSize: this.cynefin?.domainFontSize || 16,
      itemFontSize: this.cynefin?.itemFontSize || 12,
      boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
      boundaryWidth: this.cynefin?.boundaryWidth || 2,
      cliffColor: this.cynefin?.cliffColor || "#8B4513",
      cliffWidth: this.cynefin?.cliffWidth || 4,
      arrowColor: this.cynefin?.arrowColor || this.lineColor,
      arrowWidth: this.cynefin?.arrowWidth || 2,
      complexBg: this.cynefin?.complexBg || "#C8E6C9",
      complicatedBg: this.cynefin?.complicatedBg || "#DCEDC8",
      chaoticBg: this.cynefin?.chaoticBg || "#FFE0B2",
      clearBg: this.cynefin?.clearBg || "#FFF9C4",
      confusionBg: this.cynefin?.confusionBg || "#D7CCC8",
      textColor: this.cynefin?.textColor || this.textColor,
      labelColor: this.cynefin?.labelColor || this.primaryTextColor
    }, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? q(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || b(this.primaryColor, { h: -30 }), this.git4 = this.git4 || b(this.primaryColor, { h: -60 }), this.git5 = this.git5 || b(this.primaryColor, { h: -90 }), this.git6 = this.git6 || b(this.primaryColor, { h: 60 }), this.git7 = this.git7 || b(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = q(this.git0, 25), this.git1 = q(this.git1, 25), this.git2 = q(this.git2, 25), this.git3 = q(this.git3, 25), this.git4 = q(this.git4, 25), this.git5 = q(this.git5, 25), this.git6 = q(this.git6, 25), this.git7 = q(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || F(this.git0), this.gitInv1 = this.gitInv1 || F(this.git1), this.gitInv2 = this.gitInv2 || F(this.git2), this.gitInv3 = this.gitInv3 || F(this.git3), this.gitInv4 = this.gitInv4 || F(this.git4), this.gitInv5 = this.gitInv5 || F(this.git5), this.gitInv6 = this.gitInv6 || F(this.git6), this.gitInv7 = this.gitInv7 || F(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || F(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || F(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ae;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, ym = /* @__PURE__ */ p((e) => {
  const t = new gm();
  return t.calculate(e), t;
}, "getThemeVariables"), mm = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = q(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = mt(this.primaryColor, this.darkMode), this.secondaryBorderColor = mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mt(this.tertiaryColor, this.darkMode), this.primaryTextColor = F(this.primaryColor), this.secondaryTextColor = F(this.secondaryColor), this.tertiaryTextColor = F(this.tertiaryColor), this.lineColor = F(this.background), this.textColor = F(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.rowOdd = this.rowOdd || q(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    this.secondBkg = q(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = q(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || F(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || q(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || N(this["cScale" + e], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || b(this.mainBkg, { l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || b(this.mainBkg, { l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = q(this.contrast, 30), this.sectionBkgColor2 = q(this.contrast, 30), this.taskBorderColor = N(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = q(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = N(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = b(this.primaryColor, { h: 64 }), this.fillType3 = b(this.secondaryColor, { h: 64 }), this.fillType4 = b(this.primaryColor, { h: -64 }), this.fillType5 = b(this.secondaryColor, { h: -64 }), this.fillType6 = b(this.primaryColor, { h: 128 }), this.fillType7 = b(this.secondaryColor, { h: 128 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
    for (let e = 0; e < 8; e++)
      this["venn" + (e + 1)] = this["venn" + (e + 1)] ?? this["cScale" + e];
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
      domainFontSize: this.cynefin?.domainFontSize || 16,
      itemFontSize: this.cynefin?.itemFontSize || 12,
      boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
      boundaryWidth: this.cynefin?.boundaryWidth || 2,
      cliffColor: this.cynefin?.cliffColor || "#8B0000",
      cliffWidth: this.cynefin?.cliffWidth || 4,
      arrowColor: this.cynefin?.arrowColor || this.lineColor,
      arrowWidth: this.cynefin?.arrowWidth || 2,
      complexBg: this.cynefin?.complexBg || "#E8F5E9",
      complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
      chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
      clearBg: this.cynefin?.clearBg || "#FFF8E1",
      confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
      textColor: this.cynefin?.textColor || this.textColor,
      labelColor: this.cynefin?.labelColor || this.primaryTextColor
    }, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? q(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = N(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || b(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || b(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || b(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || b(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || b(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || F(this.git0), this.gitInv1 = this.gitInv1 || F(this.git1), this.gitInv2 = this.gitInv2 || F(this.git2), this.gitInv3 = this.gitInv3 || F(this.git3), this.gitInv4 = this.gitInv4 || F(this.git4), this.gitInv5 = this.gitInv5 || F(this.git5), this.gitInv6 = this.gitInv6 || F(this.git6), this.gitInv7 = this.gitInv7 || F(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ae;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, xm = /* @__PURE__ */ p((e) => {
  const t = new mm();
  return t.calculate(e), t;
}, "getThemeVariables"), Cm = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 2, this.primaryBorderColor = mt(this.primaryColor, this.darkMode), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#000000", this.stateBorder = "#000000", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.25));", this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || mt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || F(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || F(this.tertiaryColor), this.lineColor = this.lineColor || F(this.background), this.arrowheadColor = this.arrowheadColor || F(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || N(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || F(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    const e = "#ECECFE", t = "#E9E9F1", r = b(e, { h: 180, l: 5 });
    if (this.sectionBkgColor = this.sectionBkgColor || r, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || q(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || e, this.cScale1 = this.cScale1 || t, this.cScale2 = this.cScale2 || r, this.cScale3 = this.cScale3 || b(e, { h: 30 }), this.cScale4 = this.cScale4 || b(e, { h: 60 }), this.cScale5 = this.cScale5 || b(e, { h: 90 }), this.cScale6 = this.cScale6 || b(e, { h: 120 }), this.cScale7 = this.cScale7 || b(e, { h: 150 }), this.cScale8 = this.cScale8 || b(e, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || b(e, { h: 270 }), this.cScale10 = this.cScale10 || b(e, { h: 300 }), this.cScale11 = this.cScale11 || b(e, { h: 330 }), this.darkMode)
      for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
        this["cScale" + s] = N(this["cScale" + s], 75);
    else
      for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
        this["cScale" + s] = N(this["cScale" + s], 25);
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleInv" + s] = this["cScaleInv" + s] || F(this["cScale" + s]);
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this.darkMode ? this["cScalePeer" + s] = this["cScalePeer" + s] || q(this["cScale" + s], 10) : this["cScalePeer" + s] = this["cScalePeer" + s] || N(this["cScale" + s], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleLabel" + s] = this["cScaleLabel" + s] || this.scaleLabelColor;
    const i = this.darkMode ? -4 : -1;
    for (let s = 0; s < 5; s++)
      this["surface" + s] = this["surface" + s] || b(this.mainBkg, { h: 180, s: -15, l: i * (5 + s * 3) }), this["surfacePeer" + s] = this["surfacePeer" + s] || b(this.mainBkg, { h: 180, s: -15, l: i * (8 + s * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || b(e, { h: 64 }), this.fillType3 = this.fillType3 || b(t, { h: 64 }), this.fillType4 = this.fillType4 || b(e, { h: -64 }), this.fillType5 = this.fillType5 || b(t, { h: -64 }), this.fillType6 = this.fillType6 || b(e, { h: 128 }), this.fillType7 = this.fillType7 || b(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || r, this.pie4 = this.pie4 || b(e, { l: -10 }), this.pie5 = this.pie5 || b(t, { l: -10 }), this.pie6 = this.pie6 || b(r, { l: -10 }), this.pie7 = this.pie7 || b(e, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(e, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(e, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(e, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(e, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(e, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || b(e, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(e, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(e, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? q(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || r, this.git3 = this.git3 || b(e, { h: -30 }), this.git4 = this.git4 || b(e, { h: -60 }), this.git5 = this.git5 || b(e, { h: -90 }), this.git6 = this.git6 || b(e, { h: 60 }), this.git7 = this.git7 || b(e, { h: 120 }), this.darkMode ? (this.git0 = q(this.git0, 25), this.git1 = q(this.git1, 25), this.git2 = q(this.git2, 25), this.git3 = q(this.git3, 25), this.git4 = q(this.git4, 25), this.git5 = q(this.git5, 25), this.git6 = q(this.git6, 25), this.git7 = q(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || F(this.git0), this.gitInv1 = this.gitInv1 || F(this.git1), this.gitInv2 = this.gitInv2 || F(this.git2), this.gitInv3 = this.gitInv3 || F(this.git3), this.gitInv4 = this.gitInv4 || F(this.git4), this.gitInv5 = this.gitInv5 || F(this.git5), this.gitInv6 = this.gitInv6 || F(this.git6), this.gitInv7 = this.gitInv7 || F(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ae;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, bm = /* @__PURE__ */ p((e) => {
  const t = new Cm();
  return t.calculate(e), t;
}, "getThemeVariables"), km = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = q(this.primaryColor, 16), this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = F(this.background), this.secondaryBorderColor = mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mt(this.tertiaryColor, this.darkMode), this.primaryTextColor = F(this.primaryColor), this.secondaryTextColor = F(this.secondaryColor), this.tertiaryTextColor = F(this.tertiaryColor), this.mainBkg = "#2a2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = q(F("#323D47"), 10), this.border1 = "#ccc", this.border2 = Je(255, 255, 255, 0.25), this.arrowheadColor = F(this.background), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 1, this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.2))", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || mt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || F(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || F(this.tertiaryColor), this.lineColor = this.lineColor || F(this.background), this.arrowheadColor = this.arrowheadColor || F(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || N(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || F(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || q(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 }), this.darkMode)
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = N(this["cScale" + t], 75);
    else
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = N(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || F(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || q(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || N(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || b(this.mainBkg, { h: 180, s: -15, l: e * (5 + t * 3) }), this["surfacePeer" + t] = this["surfacePeer" + t] || b(this.mainBkg, { h: 180, s: -15, l: e * (8 + t * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || b(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || b(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || b(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || b(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || b(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || b(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? q(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || "#0b0000", this.git1 = this.git1 || "#4d1037", this.git2 = this.git2 || "#3f5258", this.git3 = this.git3 || "#4f2f1b", this.git4 = this.git4 || "#6e0a0a", this.git5 = this.git5 || "#3b0048", this.git6 = this.git6 || "#995a01", this.git7 = this.git7 || "#154706", this.gitDarkMode = !0, this.gitDarkMode ? (this.git0 = q(this.git0, 25), this.git1 = q(this.git1, 25), this.git2 = q(this.git2, 25), this.git3 = q(this.git3, 25), this.git4 = q(this.git4, 25), this.git5 = q(this.git5, 25), this.git6 = q(this.git6, 25), this.git7 = q(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || F(this.git0), this.gitInv1 = this.gitInv1 || F(this.git1), this.gitInv2 = this.gitInv2 || F(this.git2), this.gitInv3 = this.gitInv3 || F(this.git3), this.gitInv4 = this.gitInv4 || F(this.git4), this.gitInv5 = this.gitInv5 || F(this.git5), this.gitInv6 = this.gitInv6 || F(this.git6), this.gitInv7 = this.gitInv7 || F(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ae;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, wm = /* @__PURE__ */ p((e) => {
  const t = new km();
  return t.calculate(e), t;
}, "getThemeVariables"), Sm = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = mt("#28253D", this.darkMode), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.clusterBkg = "#F9F9FB", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.filterColor = "#000000";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || mt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#FEF9C3", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || F(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || F(this.tertiaryColor), this.lineColor = this.lineColor || F(this.background), this.arrowheadColor = this.arrowheadColor || F(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.noteFontWeight = 600, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || N(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || F(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    const e = "#ECECFE", t = "#E9E9F1", r = b(e, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || r, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || q(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.compositeTitleBackground = "#F9F9FB", this.altBackground = "#F9F9FB", this.stateEdgeLabelBackground = "#FFFFFF", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor;
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScale" + s] = this.mainBkg;
    if (this.darkMode)
      for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
        this["cScale" + s] = N(this["cScale" + s], 75);
    else
      for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
        this["cScale" + s] = N(this["cScale" + s], 25);
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleInv" + s] = this["cScaleInv" + s] || F(this["cScale" + s]);
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this.darkMode ? this["cScalePeer" + s] = this["cScalePeer" + s] || q(this["cScale" + s], 10) : this["cScalePeer" + s] = this["cScalePeer" + s] || N(this["cScale" + s], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleLabel" + s] = this["cScaleLabel" + s] || this.scaleLabelColor;
    const i = this.darkMode ? -4 : -1;
    for (let s = 0; s < 5; s++)
      this["surface" + s] = this["surface" + s] || b(this.mainBkg, { h: 180, s: -15, l: i * (5 + s * 3) }), this["surfacePeer" + s] = this["surfacePeer" + s] || b(this.mainBkg, { h: 180, s: -15, l: i * (8 + s * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || b(e, { h: 64 }), this.fillType3 = this.fillType3 || b(t, { h: 64 }), this.fillType4 = this.fillType4 || b(e, { h: -64 }), this.fillType5 = this.fillType5 || b(t, { h: -64 }), this.fillType6 = this.fillType6 || b(e, { h: 128 }), this.fillType7 = this.fillType7 || b(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || r, this.pie4 = this.pie4 || b(e, { l: -10 }), this.pie5 = this.pie5 || b(t, { l: -10 }), this.pie6 = this.pie6 || b(r, { l: -10 }), this.pie7 = this.pie7 || b(e, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(e, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(e, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(e, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(e, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(e, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || b(e, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(e, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(e, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? q(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#FFFFFF", this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || r, this.git3 = this.git3 || b(e, { h: -30 }), this.git4 = this.git4 || b(e, { h: -60 }), this.git5 = this.git5 || b(e, { h: -90 }), this.git6 = this.git6 || b(e, { h: 60 }), this.git7 = this.git7 || b(e, { h: 120 }), this.darkMode ? (this.git0 = q(this.git0, 25), this.git1 = q(this.git1, 25), this.git2 = q(this.git2, 25), this.git3 = q(this.git3, 25), this.git4 = q(this.git4, 25), this.git5 = q(this.git5, 25), this.git6 = q(this.git6, 25), this.git7 = q(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || F(this.git0), this.gitInv1 = this.gitInv1 || F(this.git1), this.gitInv2 = this.gitInv2 || F(this.git2), this.gitInv3 = this.gitInv3 || F(this.git3), this.gitInv4 = this.gitInv4 || F(this.git4), this.gitInv5 = this.gitInv5 || F(this.git5), this.gitInv6 = this.gitInv6 || F(this.git6), this.gitInv7 = this.gitInv7 || F(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ae;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, Tm = /* @__PURE__ */ p((e) => {
  const t = new Sm();
  return t.calculate(e), t;
}, "getThemeVariables"), _m = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = q(this.primaryColor, 16), this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = F(this.background), this.secondaryBorderColor = mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mt(this.tertiaryColor, this.darkMode), this.primaryTextColor = F(this.primaryColor), this.secondaryTextColor = F(this.secondaryColor), this.tertiaryTextColor = F(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = q(F("#323D47"), 10), this.border1 = "#ccc", this.border2 = Je(255, 255, 255, 0.25), this.arrowheadColor = F(this.background), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.filterColor = "#FFFFFF";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || mt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || F(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || F(this.tertiaryColor), this.lineColor = this.lineColor || F(this.background), this.arrowheadColor = this.arrowheadColor || F(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || N(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || F(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || q(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.compositeBackground = "#16141F", this.altBackground = "#16141F", this.compositeTitleBackground = "#16141F", this.stateEdgeLabelBackground = "#16141F", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 }), this.darkMode)
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = N(this["cScale" + t], 75);
    else
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = N(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || F(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || q(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || N(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || b(this.mainBkg, { h: 180, s: -15, l: e * (5 + t * 3) }), this["surfacePeer" + t] = this["surfacePeer" + t] || b(this.mainBkg, { h: 180, s: -15, l: e * (8 + t * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || b(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || b(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || b(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || b(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || b(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || b(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? q(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#16141F", this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || b(this.primaryColor, { h: -30 }), this.git4 = this.git4 || b(this.primaryColor, { h: -60 }), this.git5 = this.git5 || b(this.primaryColor, { h: -90 }), this.git6 = this.git6 || b(this.primaryColor, { h: 60 }), this.git7 = this.git7 || b(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = q(this.git0, 25), this.git1 = q(this.git1, 25), this.git2 = q(this.git2, 25), this.git3 = q(this.git3, 25), this.git4 = q(this.git4, 25), this.git5 = q(this.git5, 25), this.git6 = q(this.git6, 25), this.git7 = q(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || F(this.git0), this.gitInv1 = this.gitInv1 || F(this.git1), this.gitInv2 = this.gitInv2 || F(this.git2), this.gitInv3 = this.gitInv3 || F(this.git3), this.gitInv4 = this.gitInv4 || F(this.git4), this.gitInv5 = this.gitInv5 || F(this.git5), this.gitInv6 = this.gitInv6 || F(this.git6), this.gitInv7 = this.gitInv7 || F(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ae;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, Bm = /* @__PURE__ */ p((e) => {
  const t = new _m();
  return t.calculate(e), t;
}, "getThemeVariables"), vm = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = mt(this.primaryColor, this.darkMode), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
      "#E879F9",
      //Fuchsia-400
      "#2DD4BF",
      //Teal-400
      "#FB923C",
      //Orange-400
      "#22D3EE",
      // Cyan-400
      "#4ADE80",
      // Green-400
      "#A78BFA",
      //Violet-400
      "#F87171",
      //red-400
      "#FACC15",
      //yellow-400
      "#818CF8",
      //indigo-400
      "#A3E635 ",
      //Lime-400
      "#38BDF8",
      //Sky-400
      "#FB7185"
      //Rose-400
    ], this.bkgColorArray = [
      "#FDF4FF",
      //Fuchsia-50
      "#F0FDFA",
      //Teal-50
      "#FFF7ED",
      //Orange-50
      "#ECFEFF",
      // Cyan-50
      "#F0FDF4",
      // Green-50
      "#F5F3FF",
      //Violet-50
      "#FEF2F2",
      //red-50
      "#FEFCE8",
      //yellow-50
      "#EEF2FF",
      //indigo-50
      "#F7FEE7",
      //Lime-50
      "#F0F9FF",
      //Sky-50
      "#FFF1F2"
      //Rose-50
    ], this.filterColor = "#000000";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || mt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || F(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || F(this.tertiaryColor), this.lineColor = this.lineColor || F(this.background), this.arrowheadColor = this.arrowheadColor || F(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || N(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || F(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    const e = "#ECECFE", t = "#E9E9F1", r = b(e, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || r, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || q(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleInv" + s] = this["cScaleInv" + s] || F(this["cScale" + s]);
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this.darkMode ? this["cScalePeer" + s] = this["cScalePeer" + s] || q(this["cScale" + s], 10) : this["cScalePeer" + s] = this["cScalePeer" + s] || N(this["cScale" + s], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleLabel" + s] = this["cScaleLabel" + s] || this.scaleLabelColor;
    const i = this.darkMode ? -4 : -1;
    for (let s = 0; s < 5; s++)
      this["surface" + s] = this["surface" + s] || b(this.mainBkg, { h: 180, s: -15, l: i * (5 + s * 3) }), this["surfacePeer" + s] = this["surfacePeer" + s] || b(this.mainBkg, { h: 180, s: -15, l: i * (8 + s * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || b(e, { h: 64 }), this.fillType3 = this.fillType3 || b(t, { h: 64 }), this.fillType4 = this.fillType4 || b(e, { h: -64 }), this.fillType5 = this.fillType5 || b(t, { h: -64 }), this.fillType6 = this.fillType6 || b(e, { h: 128 }), this.fillType7 = this.fillType7 || b(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || r, this.pie4 = this.pie4 || b(e, { l: -10 }), this.pie5 = this.pie5 || b(t, { l: -10 }), this.pie6 = this.pie6 || b(r, { l: -10 }), this.pie7 = this.pie7 || b(e, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(e, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(e, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(e, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(e, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(e, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || b(e, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(e, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(e, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? q(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || r, this.git3 = this.git3 || b(e, { h: -30 }), this.git4 = this.git4 || b(e, { h: -60 }), this.git5 = this.git5 || b(e, { h: -90 }), this.git6 = this.git6 || b(e, { h: 60 }), this.git7 = this.git7 || b(e, { h: 120 }), this.darkMode ? (this.git0 = q(this.git0, 25), this.git1 = q(this.git1, 25), this.git2 = q(this.git2, 25), this.git3 = q(this.git3, 25), this.git4 = q(this.git4, 25), this.git5 = q(this.git5, 25), this.git6 = q(this.git6, 25), this.git7 = q(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || F(this.git0), this.gitInv1 = this.gitInv1 || F(this.git1), this.gitInv2 = this.gitInv2 || F(this.git2), this.gitInv3 = this.gitInv3 || F(this.git3), this.gitInv4 = this.gitInv4 || F(this.git4), this.gitInv5 = this.gitInv5 || F(this.git5), this.gitInv6 = this.gitInv6 || F(this.git6), this.gitInv7 = this.gitInv7 || F(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.fontWeight = 600, this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ae;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, Lm = /* @__PURE__ */ p((e) => {
  const t = new vm();
  return t.calculate(e), t;
}, "getThemeVariables"), Fm = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = q(this.primaryColor, 16), this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = F(this.background), this.secondaryBorderColor = mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mt(this.tertiaryColor, this.darkMode), this.primaryTextColor = F(this.primaryColor), this.secondaryTextColor = F(this.secondaryColor), this.tertiaryTextColor = F(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = q(F("#323D47"), 10), this.border1 = "#ccc", this.border2 = Je(255, 255, 255, 0.25), this.arrowheadColor = F(this.background), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
      "#E879F9",
      //Fuchsia-400
      "#2DD4BF",
      //Teal-400
      "#FB923C",
      //Orange-400
      "#22D3EE",
      // Cyan-400
      "#4ADE80",
      // Green-400
      "#A78BFA",
      //Violet-400
      "#F87171",
      //red-400
      "#FACC15",
      //yellow-400
      "#818CF8",
      //indigo-400
      "#A3E635 ",
      //Lime-400
      "#38BDF8",
      //Sky-400
      "#FB7185"
      //Rose-400
    ], this.bkgColorArray = [], this.filterColor = "#FFFFFF";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || mt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || F(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || F(this.tertiaryColor), this.lineColor = this.lineColor || F(this.background), this.arrowheadColor = this.arrowheadColor || F(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || N(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || F(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.rootLabelColor = "#FFFFFF", this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || q(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || F(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || q(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || N(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = N(this["cScale" + t], 75);
    const e = this.darkMode ? -4 : -1;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || b(this.mainBkg, { h: 180, s: -15, l: e * (5 + t * 3) }), this["surfacePeer" + t] = this["surfacePeer" + t] || b(this.mainBkg, { h: 180, s: -15, l: e * (8 + t * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || b(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || b(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || b(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || b(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || b(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || b(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? q(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || b(this.primaryColor, { h: -30 }), this.git4 = this.git4 || b(this.primaryColor, { h: -60 }), this.git5 = this.git5 || b(this.primaryColor, { h: -90 }), this.git6 = this.git6 || b(this.primaryColor, { h: 60 }), this.git7 = this.git7 || b(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = q(this.git0, 25), this.git1 = q(this.git1, 25), this.git2 = q(this.git2, 25), this.git3 = q(this.git3, 25), this.git4 = q(this.git4, 25), this.git5 = q(this.git5, 25), this.git6 = q(this.git6, 25), this.git7 = q(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || F(this.git0), this.gitInv1 = this.gitInv1 || F(this.git1), this.gitInv2 = this.gitInv2 || F(this.git2), this.gitInv3 = this.gitInv3 || F(this.git3), this.gitInv4 = this.gitInv4 || F(this.git4), this.gitInv5 = this.gitInv5 || F(this.git5), this.gitInv6 = this.gitInv6 || F(this.git6), this.gitInv7 = this.gitInv7 || F(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.fontWeight = 600, this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ae;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, Mm = /* @__PURE__ */ p((e) => {
  const t = new Fm();
  return t.calculate(e), t;
}, "getThemeVariables"), Ne = {
  base: {
    getThemeVariables: cm
  },
  dark: {
    getThemeVariables: dm
  },
  default: {
    getThemeVariables: pm
  },
  forest: {
    getThemeVariables: ym
  },
  neutral: {
    getThemeVariables: xm
  },
  neo: {
    getThemeVariables: bm
  },
  "neo-dark": {
    getThemeVariables: wm
  },
  redux: {
    getThemeVariables: Tm
  },
  "redux-dark": {
    getThemeVariables: Bm
  },
  "redux-color": {
    getThemeVariables: Lm
  },
  "redux-dark-color": {
    getThemeVariables: Mm
  }
}, Yt = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: null,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200,
    inheritDir: !1
  },
  swimlane: {
    useMaxWidth: !0,
    lineHops: "arc",
    ignoreCrossLaneEdges: !0,
    optimizeRanksByCrossings: !0,
    automaticLaneOrdering: !1
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    maxLabelWidth: 360,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    titleColor: "",
    titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    titleFontSize: "4ex"
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1,
    hideEmptyMembersBox: !1,
    hierarchicalNamespaces: !0
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    nodeSpacing: 140,
    rankSpacing: 80,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75,
    donutHole: 0,
    legendPosition: "right",
    highlightSlice: ""
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showDataLabel: !1,
    showDataLabelOutsideBar: !1,
    showTitle: !0,
    showLegend: !0,
    legendFontSize: 14,
    legendPadding: 10,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2,
      labelRotation: 0
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2,
      labelRotation: 0
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200,
    layoutAlgorithm: "cose-bilkent"
  },
  ishikawa: {
    useMaxWidth: !0,
    diagramPadding: 20
  },
  kanban: {
    useMaxWidth: !0,
    padding: 8,
    sectionWidth: 200,
    ticketBaseUrl: ""
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    parallelCommits: !1,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: "",
    nodeWidth: 10,
    nodePadding: 12,
    labelStyle: "legacy"
  },
  block: {
    useMaxWidth: !0,
    padding: 8
  },
  packet: {
    useMaxWidth: !0,
    rowHeight: 32,
    bitWidth: 32,
    bitsPerRow: 32,
    showBits: !0,
    paddingX: 5,
    paddingY: 5
  },
  treeView: {
    useMaxWidth: !0,
    rowIndent: 10,
    paddingX: 5,
    paddingY: 5,
    lineThickness: 1,
    showIcons: !1,
    defaultIconPack: "",
    filenameIcons: {},
    extensionIcons: {}
  },
  architecture: {
    useMaxWidth: !0,
    padding: 40,
    iconSize: 80,
    fontSize: 16,
    randomize: !1,
    nodeSeparation: 75,
    idealEdgeLengthMultiplier: 1.5,
    edgeElasticity: 0.45,
    numIter: 2500,
    seed: 1
  },
  eventmodeling: {
    useMaxWidth: !0,
    padding: 30,
    rowHeight: 32
  },
  radar: {
    useMaxWidth: !0,
    width: 600,
    height: 600,
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
    axisScaleFactor: 1,
    axisLabelFactor: 1.05,
    curveTension: 0.17
  },
  venn: {
    useMaxWidth: !0,
    width: 800,
    height: 450,
    padding: 8,
    useDebugLayout: !1
  },
  cynefin: {
    useMaxWidth: !0,
    width: 800,
    height: 600,
    padding: 40,
    showDomainDescriptions: !0,
    boundaryAmplitude: 8,
    seed: 0
  },
  theme: "default",
  look: "classic",
  handDrawnSeed: 0,
  layout: "dagre",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "suppressErrorRendering",
    "maxEdges"
  ],
  legacyMathML: !1,
  forceLegacyMathML: !1,
  deterministicIds: !1,
  fontSize: 16,
  markdownAutoWrap: !0,
  suppressErrorRendering: !1
}, du = {
  ...Yt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  elk: {
    // mergeEdges is needed here to be considered
    mergeEdges: !1,
    nodePlacementStrategy: "BRANDES_KOEPF",
    nodePlacementAlignment: "NONE",
    forceNodeModelOrder: !1,
    considerModelOrder: "NODES_AND_EDGES",
    keepEntryNodeOnTop: !1
  },
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Ne.default.getThemeVariables(),
  sequence: {
    ...Yt.sequence,
    messageFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }, "actorFont")
  },
  class: {
    defaultRenderer: "dagre-wrapper",
    hideEmptyMembersBox: !1,
    hierarchicalNamespaces: !0
    // `padding` is intentionally left undefined so the unified (v2) renderer keeps
    // its own node sizing — setting the schema default of 5 here would change class
    // node dimensions.
  },
  gantt: {
    ...Yt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...Yt.c4,
    useWidth: void 0,
    personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    }, "personFont"),
    flowchart: {
      ...Yt.flowchart,
      inheritDir: !1
      // default to legacy behavior
    },
    external_personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont")
  },
  pie: {
    ...Yt.pie,
    useWidth: 984
  },
  xyChart: {
    ...Yt.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...Yt.requirement,
    useWidth: void 0
  },
  packet: {
    ...Yt.packet
  },
  eventmodeling: {
    ...Yt.eventmodeling
  },
  treeView: {
    ...Yt.treeView,
    useWidth: void 0
  },
  radar: {
    ...Yt.radar
  },
  railroad: {
    ...Yt.railroad,
    // Railroad colors and typography derive from the active theme unless explicitly overridden.
    fontSize: void 0,
    fontFamily: void 0,
    terminalFill: void 0,
    terminalStroke: void 0,
    terminalTextColor: void 0,
    nonTerminalFill: void 0,
    nonTerminalStroke: void 0,
    nonTerminalTextColor: void 0,
    lineColor: void 0,
    markerFill: void 0,
    commentFill: void 0,
    commentStroke: void 0,
    commentTextColor: void 0,
    specialFill: void 0,
    specialStroke: void 0,
    ruleNameColor: void 0
  },
  ishikawa: {
    ...Yt.ishikawa
  },
  sankey: {
    ...Yt.sankey,
    // Set so that `configKeys` includes this key for sanitizeDirective
    nodeColors: void 0
  },
  treemap: {
    useMaxWidth: !0,
    padding: 10,
    diagramPadding: 8,
    showValues: !0,
    nodeWidth: 100,
    nodeHeight: 40,
    borderWidth: 1,
    valueFontSize: 12,
    labelFontSize: 14,
    valueFormat: ","
  },
  venn: {
    ...Yt.venn
  },
  cynefin: {
    ...Yt.cynefin
  }
}, fu = /* @__PURE__ */ p((e, t = "") => Object.keys(e).reduce((r, i) => Array.isArray(e[i]) ? r : typeof e[i] == "object" && e[i] !== null ? [...r, t + i, ...fu(e[i], "")] : [...r, t + i], []), "keyify"), Am = new Set(fu(du, "")), pu = du, Em = {
  // CSS colors (sankey)
  nodeColors: /^#[\da-f]{3,8}$|^rgb\([\d\s%,.]+\)$|^hsl\([\d\s%,.]+\)$|^[a-z]+$/i,
  // iconify icon references (treeView filenameIcons/extensionIcons)
  filenameIcons: /^[\w-]+(?::[\w-]+)?$/,
  extensionIcons: /^[\w-]+(?::[\w-]+)?$/
}, $m = /* @__PURE__ */ p((e, t) => {
  for (const r of Object.keys(e)) {
    const i = e[r];
    (r.startsWith("__") || r.includes("proto") || r.includes("constr") || typeof i != "string" || !t.test(i)) && (P.debug("sanitize deleting dictionary entry:", r, i), delete e[r]);
  }
}, "sanitizeDictionaryConfig"), vs = /* @__PURE__ */ p((e) => {
  if (P.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
    if (Array.isArray(e)) {
      e.forEach((t) => vs(t));
      return;
    }
    for (const t of Object.keys(e)) {
      if (P.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !Am.has(t) || e[t] == null) {
        P.debug("sanitize deleting key: ", t), delete e[t];
        continue;
      }
      if (typeof e[t] == "object") {
        const i = Em[t];
        i ? $m(e[t], i) : (P.debug("sanitizing object", t), vs(e[t]));
        continue;
      }
      const r = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r)
        t.includes(i) && (P.debug("sanitizing css option", t), e[t] = gu(e[t]));
    }
    if (e.themeVariables)
      for (const t of Object.keys(e.themeVariables)) {
        const r = e.themeVariables[t];
        r?.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
      }
    P.debug("After sanitization", e);
  }
}, "sanitizeDirective"), gu = /* @__PURE__ */ p((e) => {
  let t = 0, r = 0;
  for (const i of e) {
    if (t < r)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? t++ : i === "}" && r++;
  }
  return t !== r ? "{ /* ERROR: Unbalanced CSS */ }" : e;
}, "sanitizeCss"), Hr = Object.freeze(pu), Ee = /* @__PURE__ */ p((e) => !(e === !1 || ["false", "null", "0"].includes(String(e).trim().toLowerCase())), "evaluate"), ee = Ht({}, Hr), Ls, fr = [], Li = Ht({}, Hr), ji = /* @__PURE__ */ p((e, t) => {
  let r = Ht({}, e), i = {};
  for (const s of t)
    xu(s), i = Ht(i, s);
  if (r = Ht(r, i), i.theme && i.theme in Ne) {
    const s = Ht({}, Ls), o = Ht(
      s.themeVariables || {},
      i.themeVariables
    );
    r.theme && r.theme in Ne && (r.themeVariables = Ne[r.theme].getThemeVariables(o));
  }
  return Li = r, qm(Li), Li;
}, "updateCurrentConfig"), Om = /* @__PURE__ */ p((e) => (ee = Ht({}, Hr), ee = Ht(ee, e), e.theme && Ne[e.theme] && (ee.themeVariables = Ne[e.theme].getThemeVariables(e.themeVariables)), ji(ee, fr), ee), "setSiteConfig"), Dm = /* @__PURE__ */ p((e) => {
  Ls = Ht({}, e);
}, "saveConfigFromInitialize"), Pm = /* @__PURE__ */ p((e) => (ee = Ht(ee, e), ji(ee, fr), ee), "updateSiteConfig"), yu = /* @__PURE__ */ p(() => Ht({}, ee), "getSiteConfig"), mu = /* @__PURE__ */ p((e) => (ji(Li, [e]), It()), "setConfig"), It = /* @__PURE__ */ p(() => Ht({}, Li), "getConfig"), xu = /* @__PURE__ */ p((e) => {
  e && (["secure", ...ee.secure ?? []].forEach((t) => {
    Object.hasOwn(e, t) && (P.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
  }), Object.keys(e).forEach((t) => {
    t.startsWith("__") && delete e[t];
  }), Object.keys(e).forEach((t) => {
    typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && xu(e[t]);
  }));
}, "sanitize"), Im = /* @__PURE__ */ p((e) => {
  vs(e), e.fontFamily && !e.themeVariables?.fontFamily && (e.themeVariables = {
    ...e.themeVariables,
    fontFamily: e.fontFamily
  }), fr.push(e), ji(ee, fr);
}, "addDirective"), Fs = /* @__PURE__ */ p((e = ee) => {
  fr = [], ji(e, fr);
}, "reset"), Rm = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.",
  FLOWCHART_HTML_LABELS_DEPRECATED: "flowchart.htmlLabels is deprecated. Please use global htmlLabels instead."
}, Dl = {}, Cu = /* @__PURE__ */ p((e) => {
  Dl[e] || (P.warn(Rm[e]), Dl[e] = !0);
}, "issueWarning"), qm = /* @__PURE__ */ p((e) => {
  e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && Cu("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), E5 = /* @__PURE__ */ p(() => {
  let e = {};
  Ls && (e = Ht(e, Ls));
  for (const t of fr)
    e = Ht(e, t);
  return e;
}, "getUserDefinedConfig"), Zt = /* @__PURE__ */ p((e) => (e.flowchart?.htmlLabels != null && Cu("FLOWCHART_HTML_LABELS_DEPRECATED"), Ee(e.htmlLabels ?? e.flowchart?.htmlLabels ?? !0)), "getEffectiveHtmlLabels"), bu = /^([^\S\n\r]*)-{3}\s*[\n\r](.*?)[\n\r]\1-{3}\s*[\n\r]+/s, Fi = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Nm = /\s*%%.*\n/gm, ku = class extends Error {
  static {
    p(this, "UnknownDiagramError");
  }
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
}, pr = {}, nn = /* @__PURE__ */ p(function(e, t) {
  e = e.replace(bu, "").replace(Fi, "").replace(Nm, `
`);
  for (const [r, { detector: i }] of Object.entries(pr))
    if (i(e, t))
      return r;
  throw new ku(
    `No diagram type detected matching given configuration for text: ${e}`
  );
}, "detectType"), ma = /* @__PURE__ */ p((...e) => {
  for (const { id: t, detector: r, loader: i } of e)
    wu(t, r, i);
}, "registerLazyLoadedDiagrams"), wu = /* @__PURE__ */ p((e, t, r) => {
  pr[e] && P.warn(`Detector with key ${e} already exists. Overwriting.`), pr[e] = { detector: t, loader: r }, P.debug(`Detector with key ${e} added${r ? " with loader" : ""}`);
}, "addDetector"), Wm = /* @__PURE__ */ p((e) => pr[e].loader, "getDiagramLoader"), Ui = /<br\s*\/?>/gi, zm = /* @__PURE__ */ p((e) => e ? _u(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), Hm = /* @__PURE__ */ (() => {
  let e = !1;
  return () => {
    e || (Su(), e = !0);
  };
})();
function Su() {
  const e = "data-temp-href-target";
  zr.addHook("beforeSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
  }), zr.addHook("afterSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
  });
}
p(Su, "setupDompurifyHooks");
var Tu = /* @__PURE__ */ p((e) => (Hm(), zr.sanitize(e)), "removeScript"), Pl = /* @__PURE__ */ p((e, t) => {
  if (Zt(t)) {
    const r = t.securityLevel;
    r === "antiscript" || r === "strict" || r === "sandbox" ? e = Tu(e) : r !== "loose" && (e = _u(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = Gm(e));
  }
  return e;
}, "sanitizeMore"), ne = /* @__PURE__ */ p((e, t) => e && (t.dompurifyConfig ? e = zr.sanitize(Pl(e, t), t.dompurifyConfig).toString() : e = zr.sanitize(Pl(e, t), {
  FORBID_TAGS: ["style"]
}).toString(), e), "sanitizeText"), Ym = /* @__PURE__ */ p((e, t) => typeof e == "string" ? ne(e, t) : e.flat().map((r) => ne(r, t)), "sanitizeTextOrArray"), jm = /* @__PURE__ */ p((e) => Ui.test(e), "hasBreaks"), Um = /* @__PURE__ */ p((e) => e.split(Ui), "splitBreaks"), Gm = /* @__PURE__ */ p((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), _u = /* @__PURE__ */ p((e) => e.replace(Ui, "#br#"), "breakToPlaceholder"), Xm = /* @__PURE__ */ p((e) => {
  let t = "";
  return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = CSS.escape(t)), t;
}, "getUrl"), Vm = /* @__PURE__ */ p(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.max(...t);
}, "getMax"), Zm = /* @__PURE__ */ p(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.min(...t);
}, "getMin"), Il = /* @__PURE__ */ p(function(e) {
  const t = e.split(/(,)/), r = [];
  for (let i = 0; i < t.length; i++) {
    let s = t[i];
    if (s === "," && i > 0 && i + 1 < t.length) {
      const o = t[i - 1], a = t[i + 1];
      Km(o, a) && (s = o + "," + a, i++, r.pop());
    }
    r.push(Qm(s));
  }
  return r.join("");
}, "parseGenericTypes"), xa = /* @__PURE__ */ p((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), Km = /* @__PURE__ */ p((e, t) => {
  const r = xa(e, "~"), i = xa(t, "~");
  return r === 1 && i === 1;
}, "shouldCombineSets"), Qm = /* @__PURE__ */ p((e) => {
  const t = xa(e, "~");
  let r = !1;
  if (t <= 1)
    return e;
  t % 2 !== 0 && e.startsWith("~") && (e = e.substring(1), r = !0);
  const i = [...e];
  let s = i.indexOf("~"), o = i.lastIndexOf("~");
  for (; s !== -1 && o !== -1 && s !== o; )
    i[s] = "<", i[o] = ">", s = i.indexOf("~"), o = i.lastIndexOf("~");
  return r && i.unshift("~"), i.join("");
}, "processSet"), Rl = /* @__PURE__ */ p(() => window.MathMLElement !== void 0, "isMathMLSupported"), Ca = /\$\$(.*?)\$\$/g, Oi = /* @__PURE__ */ p((e) => (e.match(Ca)?.length ?? 0) > 0, "hasKatex"), $5 = /* @__PURE__ */ p(async (e, t) => {
  const r = document.createElement("div");
  r.innerHTML = await Bu(e, t), r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", r);
  const s = { width: r.clientWidth, height: r.clientHeight };
  return r.remove(), s;
}, "calculateMathMLDimensions"), Jm = /* @__PURE__ */ p(async (e, t) => {
  if (!Oi(e))
    return e;
  if (!(Rl() || t.legacyMathML || t.forceLegacyMathML))
    return e.replace(Ca, "MathML is unsupported in this environment.");
  {
    const { default: r } = await import("./katex-DoRnZ_sp.js"), i = t.forceLegacyMathML || !Rl() && t.legacyMathML ? "htmlAndMathml" : "mathml";
    return e.split(Ui).map(
      (s) => Oi(s) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${s}</div>` : `<div>${s}</div>`
    ).join("").replace(
      Ca,
      (s, o) => r.renderToString(o, {
        throwOnError: !0,
        displayMode: !0,
        output: i
      }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
    );
  }
}, "renderKatexUnsanitized"), Bu = /* @__PURE__ */ p(async (e, t) => ne(await Jm(e, t), t), "renderKatexSanitized"), Gi = {
  getRows: zm,
  sanitizeText: ne,
  sanitizeTextOrArray: Ym,
  hasBreaks: jm,
  splitBreaks: Um,
  lineBreakRegex: Ui,
  removeScript: Tu,
  getUrl: Xm,
  evaluate: Ee,
  getMax: Vm,
  getMin: Zm
}, t0 = /* @__PURE__ */ p(function(e, t) {
  for (let r of t)
    e.attr(r[0], r[1]);
}, "d3Attrs"), e0 = /* @__PURE__ */ p(function(e, t, r) {
  let i = /* @__PURE__ */ new Map();
  return r ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e), i.set("width", t)), i;
}, "calculateSvgSizeAttrs"), vu = /* @__PURE__ */ p(function(e, t, r, i) {
  const s = e0(t, r, i);
  t0(e, s);
}, "configureSvgSize"), r0 = /* @__PURE__ */ p(function(e, t, r, i) {
  const s = t.node().getBBox(), o = s.width, a = s.height;
  P.info(`SVG bounds: ${o}x${a}`, s);
  let n = 0, l = 0;
  P.info(`Graph bounds: ${n}x${l}`, e), n = o + r * 2, l = a + r * 2, P.info(`Calculated bounds: ${n}x${l}`), vu(t, l, n, i);
  const c = `${s.x - r} ${s.y - r} ${s.width + 2 * r} ${s.height + 2 * r}`;
  t.attr("viewBox", c);
}, "setupGraphViewbox"), ys = {};
function ba(e) {
  return [...e.cssRules].map((t) => t.cssText).join(`
`);
}
p(ba, "cssStyleSheetToString");
var i0 = /* @__PURE__ */ p((e, t, r, i) => {
  let s = "";
  return e in ys && ys[e] ? s = ys[e]({ ...r, svgId: i }) : P.warn(`No theme found for ${e}`), `& {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: ${r.strokeWidth ?? 1}px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${s}
  .node .neo-node {
    stroke: ${r.nodeBorder};
  }

  [data-look="neo"].node rect, [data-look="neo"].cluster rect, [data-look="neo"].node polygon {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }
  [data-look="neo"].swimlane.cluster rect {
    filter: none;
  }


  [data-look="neo"].node path {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    stroke-width: ${r.strokeWidth ?? 1}px;
  }

  [data-look="neo"].node .outer-path {
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node .neo-line path {
    stroke: ${r.nodeBorder};
    filter: none;
  }

  [data-look="neo"].node circle{
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node circle .state-start{
    fill: #000000;
  }

  [data-look="neo"].icon-shape .icon {
    fill: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

    [data-look="neo"].icon-shape .icon-neo path {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  ${t}
`;
}, "getStyles"), s0 = /* @__PURE__ */ p((e, t) => {
  t !== void 0 && (ys[e] = t);
}, "addStylesForDiagram"), o0 = i0, Lu = {};
Ky(Lu, {
  clear: () => a0,
  getAccDescription: () => c0,
  getAccTitle: () => l0,
  getDiagramTitle: () => d0,
  setAccDescription: () => h0,
  setAccTitle: () => n0,
  setDiagramTitle: () => u0
});
var ln = "", hn = "", cn = "", un = /* @__PURE__ */ p((e) => ne(e, It()), "sanitizeText"), a0 = /* @__PURE__ */ p(() => {
  ln = "", cn = "", hn = "";
}, "clear"), n0 = /* @__PURE__ */ p((e) => {
  ln = un(e).replace(/^\s+/g, "");
}, "setAccTitle"), l0 = /* @__PURE__ */ p(() => ln, "getAccTitle"), h0 = /* @__PURE__ */ p((e) => {
  cn = un(e).replace(/\n\s+/g, `
`);
}, "setAccDescription"), c0 = /* @__PURE__ */ p(() => cn, "getAccDescription"), u0 = /* @__PURE__ */ p((e) => {
  hn = un(e);
}, "setDiagramTitle"), d0 = /* @__PURE__ */ p(() => hn, "getDiagramTitle"), ql = P, f0 = an, _t = It, O5 = mu, D5 = Hr, dn = /* @__PURE__ */ p((e) => ne(e, _t()), "sanitizeText"), p0 = r0, g0 = /* @__PURE__ */ p(() => Lu, "getCommonDb"), Ms = {}, As = /* @__PURE__ */ p((e, t, r) => {
  Ms[e] && ql.warn(`Diagram with id ${e} already registered. Overwriting.`), Ms[e] = t, r && wu(e, r), s0(e, t.styles), t.injectUtils?.(
    ql,
    f0,
    _t,
    dn,
    p0,
    g0(),
    () => {
    }
  );
}, "registerDiagram"), ka = /* @__PURE__ */ p((e) => {
  if (e in Ms)
    return Ms[e];
  throw new y0(e);
}, "getDiagram"), y0 = class extends Error {
  static {
    p(this, "DiagramNotFoundError");
  }
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
}, m0 = { value: () => {
} };
function Fu() {
  for (var e = 0, t = arguments.length, r = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new ms(r);
}
function ms(e) {
  this._ = e;
}
function x0(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", s = r.indexOf(".");
    if (s >= 0 && (i = r.slice(s + 1), r = r.slice(0, s)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
ms.prototype = Fu.prototype = {
  constructor: ms,
  on: function(e, t) {
    var r = this._, i = x0(e + "", r), s, o = -1, a = i.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((s = (e = i[o]).type) && (s = C0(r[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++o < a; )
      if (s = (e = i[o]).type) r[s] = Nl(r[s], e.name, t);
      else if (t == null) for (s in r) r[s] = Nl(r[s], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new ms(e);
  },
  call: function(e, t) {
    if ((s = arguments.length - 2) > 0) for (var r = new Array(s), i = 0, s, o; i < s; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (o = this._[e], i = 0, s = o.length; i < s; ++i) o[i].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var i = this._[e], s = 0, o = i.length; s < o; ++s) i[s].value.apply(t, r);
  }
};
function C0(e, t) {
  for (var r = 0, i = e.length, s; r < i; ++r)
    if ((s = e[r]).name === t)
      return s.value;
}
function Nl(e, t, r) {
  for (var i = 0, s = e.length; i < s; ++i)
    if (e[i].name === t) {
      e[i] = m0, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var wa = "http://www.w3.org/1999/xhtml";
const Wl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: wa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function eo(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), Wl.hasOwnProperty(t) ? { space: Wl[t], local: e } : e;
}
function b0(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === wa && t.documentElement.namespaceURI === wa ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function k0(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Mu(e) {
  var t = eo(e);
  return (t.local ? k0 : b0)(t);
}
function w0() {
}
function fn(e) {
  return e == null ? w0 : function() {
    return this.querySelector(e);
  };
}
function S0(e) {
  typeof e != "function" && (e = fn(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = new Array(a), l, c, h = 0; h < a; ++h)
      (l = o[h]) && (c = e.call(l, l.__data__, h, o)) && ("__data__" in l && (c.__data__ = l.__data__), n[h] = c);
  return new oe(i, this._parents);
}
function T0(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function _0() {
  return [];
}
function Au(e) {
  return e == null ? _0 : function() {
    return this.querySelectorAll(e);
  };
}
function B0(e) {
  return function() {
    return T0(e.apply(this, arguments));
  };
}
function v0(e) {
  typeof e == "function" ? e = B0(e) : e = Au(e);
  for (var t = this._groups, r = t.length, i = [], s = [], o = 0; o < r; ++o)
    for (var a = t[o], n = a.length, l, c = 0; c < n; ++c)
      (l = a[c]) && (i.push(e.call(l, l.__data__, c, a)), s.push(l));
  return new oe(i, s);
}
function Eu(e) {
  return function() {
    return this.matches(e);
  };
}
function $u(e) {
  return function(t) {
    return t.matches(e);
  };
}
var L0 = Array.prototype.find;
function F0(e) {
  return function() {
    return L0.call(this.children, e);
  };
}
function M0() {
  return this.firstElementChild;
}
function A0(e) {
  return this.select(e == null ? M0 : F0(typeof e == "function" ? e : $u(e)));
}
var E0 = Array.prototype.filter;
function $0() {
  return Array.from(this.children);
}
function O0(e) {
  return function() {
    return E0.call(this.children, e);
  };
}
function D0(e) {
  return this.selectAll(e == null ? $0 : O0(typeof e == "function" ? e : $u(e)));
}
function P0(e) {
  typeof e != "function" && (e = Eu(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = [], l, c = 0; c < a; ++c)
      (l = o[c]) && e.call(l, l.__data__, c, o) && n.push(l);
  return new oe(i, this._parents);
}
function Ou(e) {
  return new Array(e.length);
}
function I0() {
  return new oe(this._enter || this._groups.map(Ou), this._parents);
}
function Es(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Es.prototype = {
  constructor: Es,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function R0(e) {
  return function() {
    return e;
  };
}
function q0(e, t, r, i, s, o) {
  for (var a = 0, n, l = t.length, c = o.length; a < c; ++a)
    (n = t[a]) ? (n.__data__ = o[a], i[a] = n) : r[a] = new Es(e, o[a]);
  for (; a < l; ++a)
    (n = t[a]) && (s[a] = n);
}
function N0(e, t, r, i, s, o, a) {
  var n, l, c = /* @__PURE__ */ new Map(), h = t.length, u = o.length, d = new Array(h), f;
  for (n = 0; n < h; ++n)
    (l = t[n]) && (d[n] = f = a.call(l, l.__data__, n, t) + "", c.has(f) ? s[n] = l : c.set(f, l));
  for (n = 0; n < u; ++n)
    f = a.call(e, o[n], n, o) + "", (l = c.get(f)) ? (i[n] = l, l.__data__ = o[n], c.delete(f)) : r[n] = new Es(e, o[n]);
  for (n = 0; n < h; ++n)
    (l = t[n]) && c.get(d[n]) === l && (s[n] = l);
}
function W0(e) {
  return e.__data__;
}
function z0(e, t) {
  if (!arguments.length) return Array.from(this, W0);
  var r = t ? N0 : q0, i = this._parents, s = this._groups;
  typeof e != "function" && (e = R0(e));
  for (var o = s.length, a = new Array(o), n = new Array(o), l = new Array(o), c = 0; c < o; ++c) {
    var h = i[c], u = s[c], d = u.length, f = H0(e.call(h, h && h.__data__, c, i)), y = f.length, m = n[c] = new Array(y), x = a[c] = new Array(y), C = l[c] = new Array(d);
    r(h, u, m, x, C, f, t);
    for (var k = 0, S = 0, T, _; k < y; ++k)
      if (T = m[k]) {
        for (k >= S && (S = k + 1); !(_ = x[S]) && ++S < y; ) ;
        T._next = _ || null;
      }
  }
  return a = new oe(a, i), a._enter = n, a._exit = l, a;
}
function H0(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Y0() {
  return new oe(this._exit || this._groups.map(Ou), this._parents);
}
function j0(e, t, r) {
  var i = this.enter(), s = this, o = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), r == null ? o.remove() : r(o), i && s ? i.merge(s).order() : s;
}
function U0(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, i = t._groups, s = r.length, o = i.length, a = Math.min(s, o), n = new Array(s), l = 0; l < a; ++l)
    for (var c = r[l], h = i[l], u = c.length, d = n[l] = new Array(u), f, y = 0; y < u; ++y)
      (f = c[y] || h[y]) && (d[y] = f);
  for (; l < s; ++l)
    n[l] = r[l];
  return new oe(n, this._parents);
}
function G0() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var i = e[t], s = i.length - 1, o = i[s], a; --s >= 0; )
      (a = i[s]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function X0(e) {
  e || (e = V0);
  function t(u, d) {
    return u && d ? e(u.__data__, d.__data__) : !u - !d;
  }
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o) {
    for (var a = r[o], n = a.length, l = s[o] = new Array(n), c, h = 0; h < n; ++h)
      (c = a[h]) && (l[h] = c);
    l.sort(t);
  }
  return new oe(s, this._parents).order();
}
function V0(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Z0() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function K0() {
  return Array.from(this);
}
function Q0() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], s = 0, o = i.length; s < o; ++s) {
      var a = i[s];
      if (a) return a;
    }
  return null;
}
function J0() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function tx() {
  return !this.node();
}
function ex(e) {
  for (var t = this._groups, r = 0, i = t.length; r < i; ++r)
    for (var s = t[r], o = 0, a = s.length, n; o < a; ++o)
      (n = s[o]) && e.call(n, n.__data__, o, s);
  return this;
}
function rx(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ix(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function sx(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ox(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function ax(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function nx(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function lx(e, t) {
  var r = eo(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((t == null ? r.local ? ix : rx : typeof t == "function" ? r.local ? nx : ax : r.local ? ox : sx)(r, t));
}
function Du(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function hx(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function cx(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function ux(e, t, r) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function dx(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? hx : typeof t == "function" ? ux : cx)(e, t, r ?? "")) : Yr(this.node(), e);
}
function Yr(e, t) {
  return e.style.getPropertyValue(t) || Du(e).getComputedStyle(e, null).getPropertyValue(t);
}
function fx(e) {
  return function() {
    delete this[e];
  };
}
function px(e, t) {
  return function() {
    this[e] = t;
  };
}
function gx(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function yx(e, t) {
  return arguments.length > 1 ? this.each((t == null ? fx : typeof t == "function" ? gx : px)(e, t)) : this.node()[e];
}
function Pu(e) {
  return e.trim().split(/^|\s+/);
}
function pn(e) {
  return e.classList || new Iu(e);
}
function Iu(e) {
  this._node = e, this._names = Pu(e.getAttribute("class") || "");
}
Iu.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Ru(e, t) {
  for (var r = pn(e), i = -1, s = t.length; ++i < s; ) r.add(t[i]);
}
function qu(e, t) {
  for (var r = pn(e), i = -1, s = t.length; ++i < s; ) r.remove(t[i]);
}
function mx(e) {
  return function() {
    Ru(this, e);
  };
}
function xx(e) {
  return function() {
    qu(this, e);
  };
}
function Cx(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ru : qu)(this, e);
  };
}
function bx(e, t) {
  var r = Pu(e + "");
  if (arguments.length < 2) {
    for (var i = pn(this.node()), s = -1, o = r.length; ++s < o; ) if (!i.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Cx : t ? mx : xx)(r, t));
}
function kx() {
  this.textContent = "";
}
function wx(e) {
  return function() {
    this.textContent = e;
  };
}
function Sx(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Tx(e) {
  return arguments.length ? this.each(e == null ? kx : (typeof e == "function" ? Sx : wx)(e)) : this.node().textContent;
}
function _x() {
  this.innerHTML = "";
}
function Bx(e) {
  return function() {
    this.innerHTML = e;
  };
}
function vx(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Lx(e) {
  return arguments.length ? this.each(e == null ? _x : (typeof e == "function" ? vx : Bx)(e)) : this.node().innerHTML;
}
function Fx() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Mx() {
  return this.each(Fx);
}
function Ax() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ex() {
  return this.each(Ax);
}
function $x(e) {
  var t = typeof e == "function" ? e : Mu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ox() {
  return null;
}
function Dx(e, t) {
  var r = typeof e == "function" ? e : Mu(e), i = t == null ? Ox : typeof t == "function" ? t : fn(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Px() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ix() {
  return this.each(Px);
}
function Rx() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function qx() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Nx(e) {
  return this.select(e ? qx : Rx);
}
function Wx(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function zx(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Hx(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    return i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: r };
  });
}
function Yx(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, i = -1, s = t.length, o; r < s; ++r)
        o = t[r], (!e.type || o.type === e.type) && o.name === e.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++i] = o;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function jx(e, t, r) {
  return function() {
    var i = this.__on, s, o = zx(t);
    if (i) {
      for (var a = 0, n = i.length; a < n; ++a)
        if ((s = i[a]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = o, s.options = r), s.value = t;
          return;
        }
    }
    this.addEventListener(e.type, o, r), s = { type: e.type, name: e.name, value: t, listener: o, options: r }, i ? i.push(s) : this.__on = [s];
  };
}
function Ux(e, t, r) {
  var i = Hx(e + ""), s, o = i.length, a;
  if (arguments.length < 2) {
    var n = this.node().__on;
    if (n) {
      for (var l = 0, c = n.length, h; l < c; ++l)
        for (s = 0, h = n[l]; s < o; ++s)
          if ((a = i[s]).type === h.type && a.name === h.name)
            return h.value;
    }
    return;
  }
  for (n = t ? jx : Yx, s = 0; s < o; ++s) this.each(n(i[s], t, r));
  return this;
}
function Nu(e, t, r) {
  var i = Du(e), s = i.CustomEvent;
  typeof s == "function" ? s = new s(t, r) : (s = i.document.createEvent("Event"), r ? (s.initEvent(t, r.bubbles, r.cancelable), s.detail = r.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function Gx(e, t) {
  return function() {
    return Nu(this, e, t);
  };
}
function Xx(e, t) {
  return function() {
    return Nu(this, e, t.apply(this, arguments));
  };
}
function Vx(e, t) {
  return this.each((typeof t == "function" ? Xx : Gx)(e, t));
}
function* Zx() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], s = 0, o = i.length, a; s < o; ++s)
      (a = i[s]) && (yield a);
}
var Wu = [null];
function oe(e, t) {
  this._groups = e, this._parents = t;
}
function Xi() {
  return new oe([[document.documentElement]], Wu);
}
function Kx() {
  return this;
}
oe.prototype = Xi.prototype = {
  constructor: oe,
  select: S0,
  selectAll: v0,
  selectChild: A0,
  selectChildren: D0,
  filter: P0,
  data: z0,
  enter: I0,
  exit: Y0,
  join: j0,
  merge: U0,
  selection: Kx,
  order: G0,
  sort: X0,
  call: Z0,
  nodes: K0,
  node: Q0,
  size: J0,
  empty: tx,
  each: ex,
  attr: lx,
  style: dx,
  property: yx,
  classed: bx,
  text: Tx,
  html: Lx,
  raise: Mx,
  lower: Ex,
  append: $x,
  insert: Dx,
  remove: Ix,
  clone: Nx,
  datum: Wx,
  on: Ux,
  dispatch: Vx,
  [Symbol.iterator]: Zx
};
function Tt(e) {
  return typeof e == "string" ? new oe([[document.querySelector(e)]], [document.documentElement]) : new oe([[e]], Wu);
}
function gn(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function zu(e, t) {
  var r = Object.create(e.prototype);
  for (var i in t) r[i] = t[i];
  return r;
}
function Vi() {
}
var Di = 0.7, $s = 1 / Di, qr = "\\s*([+-]?\\d+)\\s*", Pi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ve = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Qx = /^#([0-9a-f]{3,8})$/, Jx = new RegExp(`^rgb\\(${qr},${qr},${qr}\\)$`), tC = new RegExp(`^rgb\\(${ve},${ve},${ve}\\)$`), eC = new RegExp(`^rgba\\(${qr},${qr},${qr},${Pi}\\)$`), rC = new RegExp(`^rgba\\(${ve},${ve},${ve},${Pi}\\)$`), iC = new RegExp(`^hsl\\(${Pi},${ve},${ve}\\)$`), sC = new RegExp(`^hsla\\(${Pi},${ve},${ve},${Pi}\\)$`), zl = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
gn(Vi, Ii, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Hl,
  // Deprecated! Use color.formatHex.
  formatHex: Hl,
  formatHex8: oC,
  formatHsl: aC,
  formatRgb: Yl,
  toString: Yl
});
function Hl() {
  return this.rgb().formatHex();
}
function oC() {
  return this.rgb().formatHex8();
}
function aC() {
  return Hu(this).formatHsl();
}
function Yl() {
  return this.rgb().formatRgb();
}
function Ii(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Qx.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? jl(t) : r === 3 ? new re(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ts(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ts(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Jx.exec(e)) ? new re(t[1], t[2], t[3], 1) : (t = tC.exec(e)) ? new re(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = eC.exec(e)) ? ts(t[1], t[2], t[3], t[4]) : (t = rC.exec(e)) ? ts(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = iC.exec(e)) ? Xl(t[1], t[2] / 100, t[3] / 100, 1) : (t = sC.exec(e)) ? Xl(t[1], t[2] / 100, t[3] / 100, t[4]) : zl.hasOwnProperty(e) ? jl(zl[e]) : e === "transparent" ? new re(NaN, NaN, NaN, 0) : null;
}
function jl(e) {
  return new re(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ts(e, t, r, i) {
  return i <= 0 && (e = t = r = NaN), new re(e, t, r, i);
}
function nC(e) {
  return e instanceof Vi || (e = Ii(e)), e ? (e = e.rgb(), new re(e.r, e.g, e.b, e.opacity)) : new re();
}
function Sa(e, t, r, i) {
  return arguments.length === 1 ? nC(e) : new re(e, t, r, i ?? 1);
}
function re(e, t, r, i) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +i;
}
gn(re, Sa, zu(Vi, {
  brighter(e) {
    return e = e == null ? $s : Math.pow($s, e), new re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Di : Math.pow(Di, e), new re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new re(dr(this.r), dr(this.g), dr(this.b), Os(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ul,
  // Deprecated! Use color.formatHex.
  formatHex: Ul,
  formatHex8: lC,
  formatRgb: Gl,
  toString: Gl
}));
function Ul() {
  return `#${cr(this.r)}${cr(this.g)}${cr(this.b)}`;
}
function lC() {
  return `#${cr(this.r)}${cr(this.g)}${cr(this.b)}${cr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Gl() {
  const e = Os(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${dr(this.r)}, ${dr(this.g)}, ${dr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Os(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function dr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function cr(e) {
  return e = dr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Xl(e, t, r, i) {
  return i <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ge(e, t, r, i);
}
function Hu(e) {
  if (e instanceof ge) return new ge(e.h, e.s, e.l, e.opacity);
  if (e instanceof Vi || (e = Ii(e)), !e) return new ge();
  if (e instanceof ge) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, i = e.b / 255, s = Math.min(t, r, i), o = Math.max(t, r, i), a = NaN, n = o - s, l = (o + s) / 2;
  return n ? (t === o ? a = (r - i) / n + (r < i) * 6 : r === o ? a = (i - t) / n + 2 : a = (t - r) / n + 4, n /= l < 0.5 ? o + s : 2 - o - s, a *= 60) : n = l > 0 && l < 1 ? 0 : a, new ge(a, n, l, e.opacity);
}
function hC(e, t, r, i) {
  return arguments.length === 1 ? Hu(e) : new ge(e, t, r, i ?? 1);
}
function ge(e, t, r, i) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +i;
}
gn(ge, hC, zu(Vi, {
  brighter(e) {
    return e = e == null ? $s : Math.pow($s, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Di : Math.pow(Di, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - i;
    return new re(
      Bo(e >= 240 ? e - 240 : e + 120, s, i),
      Bo(e, s, i),
      Bo(e < 120 ? e + 240 : e - 120, s, i),
      this.opacity
    );
  },
  clamp() {
    return new ge(Vl(this.h), es(this.s), es(this.l), Os(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Os(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Vl(this.h)}, ${es(this.s) * 100}%, ${es(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Vl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function es(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Bo(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const yn = (e) => () => e;
function Yu(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function cC(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(i) {
    return Math.pow(e + i * t, r);
  };
}
function P5(e, t) {
  var r = t - e;
  return r ? Yu(e, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : yn(isNaN(e) ? t : e);
}
function uC(e) {
  return (e = +e) == 1 ? ju : function(t, r) {
    return r - t ? cC(t, r, e) : yn(isNaN(t) ? r : t);
  };
}
function ju(e, t) {
  var r = t - e;
  return r ? Yu(e, r) : yn(isNaN(e) ? t : e);
}
const Zl = (function e(t) {
  var r = uC(t);
  function i(s, o) {
    var a = r((s = Sa(s)).r, (o = Sa(o)).r), n = r(s.g, o.g), l = r(s.b, o.b), c = ju(s.opacity, o.opacity);
    return function(h) {
      return s.r = a(h), s.g = n(h), s.b = l(h), s.opacity = c(h), s + "";
    };
  }
  return i.gamma = e, i;
})(1);
function Ze(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
var Ta = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, vo = new RegExp(Ta.source, "g");
function dC(e) {
  return function() {
    return e;
  };
}
function fC(e) {
  return function(t) {
    return e(t) + "";
  };
}
function pC(e, t) {
  var r = Ta.lastIndex = vo.lastIndex = 0, i, s, o, a = -1, n = [], l = [];
  for (e = e + "", t = t + ""; (i = Ta.exec(e)) && (s = vo.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), n[a] ? n[a] += o : n[++a] = o), (i = i[0]) === (s = s[0]) ? n[a] ? n[a] += s : n[++a] = s : (n[++a] = null, l.push({ i: a, x: Ze(i, s) })), r = vo.lastIndex;
  return r < t.length && (o = t.slice(r), n[a] ? n[a] += o : n[++a] = o), n.length < 2 ? l[0] ? fC(l[0].x) : dC(t) : (t = l.length, function(c) {
    for (var h = 0, u; h < t; ++h) n[(u = l[h]).i] = u.x(c);
    return n.join("");
  });
}
var Kl = 180 / Math.PI, _a = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Uu(e, t, r, i, s, o) {
  var a, n, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * r + t * i) && (r -= e * l, i -= t * l), (n = Math.sqrt(r * r + i * i)) && (r /= n, i /= n, l /= n), e * i < t * r && (e = -e, t = -t, l = -l, a = -a), {
    translateX: s,
    translateY: o,
    rotate: Math.atan2(t, e) * Kl,
    skewX: Math.atan(l) * Kl,
    scaleX: a,
    scaleY: n
  };
}
var rs;
function gC(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? _a : Uu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function yC(e) {
  return e == null || (rs || (rs = document.createElementNS("http://www.w3.org/2000/svg", "g")), rs.setAttribute("transform", e), !(e = rs.transform.baseVal.consolidate())) ? _a : (e = e.matrix, Uu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Gu(e, t, r, i) {
  function s(c) {
    return c.length ? c.pop() + " " : "";
  }
  function o(c, h, u, d, f, y) {
    if (c !== u || h !== d) {
      var m = f.push("translate(", null, t, null, r);
      y.push({ i: m - 4, x: Ze(c, u) }, { i: m - 2, x: Ze(h, d) });
    } else (u || d) && f.push("translate(" + u + t + d + r);
  }
  function a(c, h, u, d) {
    c !== h ? (c - h > 180 ? h += 360 : h - c > 180 && (c += 360), d.push({ i: u.push(s(u) + "rotate(", null, i) - 2, x: Ze(c, h) })) : h && u.push(s(u) + "rotate(" + h + i);
  }
  function n(c, h, u, d) {
    c !== h ? d.push({ i: u.push(s(u) + "skewX(", null, i) - 2, x: Ze(c, h) }) : h && u.push(s(u) + "skewX(" + h + i);
  }
  function l(c, h, u, d, f, y) {
    if (c !== u || h !== d) {
      var m = f.push(s(f) + "scale(", null, ",", null, ")");
      y.push({ i: m - 4, x: Ze(c, u) }, { i: m - 2, x: Ze(h, d) });
    } else (u !== 1 || d !== 1) && f.push(s(f) + "scale(" + u + "," + d + ")");
  }
  return function(c, h) {
    var u = [], d = [];
    return c = e(c), h = e(h), o(c.translateX, c.translateY, h.translateX, h.translateY, u, d), a(c.rotate, h.rotate, u, d), n(c.skewX, h.skewX, u, d), l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, u, d), c = h = null, function(f) {
      for (var y = -1, m = d.length, x; ++y < m; ) u[(x = d[y]).i] = x.x(f);
      return u.join("");
    };
  };
}
var mC = Gu(gC, "px, ", "px)", "deg)"), xC = Gu(yC, ", ", ")", ")"), jr = 0, xi = 0, hi = 0, Xu = 1e3, Ds, Ci, Ps = 0, gr = 0, ro = 0, Ri = typeof performance == "object" && performance.now ? performance : Date, Vu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function mn() {
  return gr || (Vu(CC), gr = Ri.now() + ro);
}
function CC() {
  gr = 0;
}
function Is() {
  this._call = this._time = this._next = null;
}
Is.prototype = Zu.prototype = {
  constructor: Is,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? mn() : +r) + (t == null ? 0 : +t), !this._next && Ci !== this && (Ci ? Ci._next = this : Ds = this, Ci = this), this._call = e, this._time = r, Ba();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ba());
  }
};
function Zu(e, t, r) {
  var i = new Is();
  return i.restart(e, t, r), i;
}
function bC() {
  mn(), ++jr;
  for (var e = Ds, t; e; )
    (t = gr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --jr;
}
function Ql() {
  gr = (Ps = Ri.now()) + ro, jr = xi = 0;
  try {
    bC();
  } finally {
    jr = 0, wC(), gr = 0;
  }
}
function kC() {
  var e = Ri.now(), t = e - Ps;
  t > Xu && (ro -= t, Ps = e);
}
function wC() {
  for (var e, t = Ds, r, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Ds = r);
  Ci = e, Ba(i);
}
function Ba(e) {
  if (!jr) {
    xi && (xi = clearTimeout(xi));
    var t = e - gr;
    t > 24 ? (e < 1 / 0 && (xi = setTimeout(Ql, e - Ri.now() - ro)), hi && (hi = clearInterval(hi))) : (hi || (Ps = Ri.now(), hi = setInterval(kC, Xu)), jr = 1, Vu(Ql));
  }
}
function Jl(e, t, r) {
  var i = new Is();
  return t = t == null ? 0 : +t, i.restart((s) => {
    i.stop(), e(s + t);
  }, t, r), i;
}
var SC = Fu("start", "end", "cancel", "interrupt"), TC = [], Ku = 0, th = 1, va = 2, xs = 3, eh = 4, La = 5, Cs = 6;
function io(e, t, r, i, s, o) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (r in a) return;
  _C(e, r, {
    name: t,
    index: i,
    // For context during callback.
    group: s,
    // For context during callback.
    on: SC,
    tween: TC,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ku
  });
}
function xn(e, t) {
  var r = xe(e, t);
  if (r.state > Ku) throw new Error("too late; already scheduled");
  return r;
}
function $e(e, t) {
  var r = xe(e, t);
  if (r.state > xs) throw new Error("too late; already running");
  return r;
}
function xe(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function _C(e, t, r) {
  var i = e.__transition, s;
  i[t] = r, r.timer = Zu(o, 0, r.time);
  function o(c) {
    r.state = th, r.timer.restart(a, r.delay, r.time), r.delay <= c && a(c - r.delay);
  }
  function a(c) {
    var h, u, d, f;
    if (r.state !== th) return l();
    for (h in i)
      if (f = i[h], f.name === r.name) {
        if (f.state === xs) return Jl(a);
        f.state === eh ? (f.state = Cs, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete i[h]) : +h < t && (f.state = Cs, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete i[h]);
      }
    if (Jl(function() {
      r.state === xs && (r.state = eh, r.timer.restart(n, r.delay, r.time), n(c));
    }), r.state = va, r.on.call("start", e, e.__data__, r.index, r.group), r.state === va) {
      for (r.state = xs, s = new Array(d = r.tween.length), h = 0, u = -1; h < d; ++h)
        (f = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (s[++u] = f);
      s.length = u + 1;
    }
  }
  function n(c) {
    for (var h = c < r.duration ? r.ease.call(null, c / r.duration) : (r.timer.restart(l), r.state = La, 1), u = -1, d = s.length; ++u < d; )
      s[u].call(e, h);
    r.state === La && (r.on.call("end", e, e.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = Cs, r.timer.stop(), delete i[t];
    for (var c in i) return;
    delete e.__transition;
  }
}
function BC(e, t) {
  var r = e.__transition, i, s, o = !0, a;
  if (r) {
    t = t == null ? null : t + "";
    for (a in r) {
      if ((i = r[a]).name !== t) {
        o = !1;
        continue;
      }
      s = i.state > va && i.state < La, i.state = Cs, i.timer.stop(), i.on.call(s ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[a];
    }
    o && delete e.__transition;
  }
}
function vC(e) {
  return this.each(function() {
    BC(this, e);
  });
}
function LC(e, t) {
  var r, i;
  return function() {
    var s = $e(this, e), o = s.tween;
    if (o !== r) {
      i = r = o;
      for (var a = 0, n = i.length; a < n; ++a)
        if (i[a].name === t) {
          i = i.slice(), i.splice(a, 1);
          break;
        }
    }
    s.tween = i;
  };
}
function FC(e, t, r) {
  var i, s;
  if (typeof r != "function") throw new Error();
  return function() {
    var o = $e(this, e), a = o.tween;
    if (a !== i) {
      s = (i = a).slice();
      for (var n = { name: t, value: r }, l = 0, c = s.length; l < c; ++l)
        if (s[l].name === t) {
          s[l] = n;
          break;
        }
      l === c && s.push(n);
    }
    o.tween = s;
  };
}
function MC(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = xe(this.node(), r).tween, s = 0, o = i.length, a; s < o; ++s)
      if ((a = i[s]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? LC : FC)(r, e, t));
}
function Cn(e, t, r) {
  var i = e._id;
  return e.each(function() {
    var s = $e(this, i);
    (s.value || (s.value = {}))[t] = r.apply(this, arguments);
  }), function(s) {
    return xe(s, i).value[t];
  };
}
function Qu(e, t) {
  var r;
  return (typeof t == "number" ? Ze : t instanceof Ii ? Zl : (r = Ii(t)) ? (t = r, Zl) : pC)(e, t);
}
function AC(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function EC(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function $C(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = this.getAttribute(e);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function OC(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function DC(e, t, r) {
  var i, s, o;
  return function() {
    var a, n = r(this), l;
    return n == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = n + "", a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n)));
  };
}
function PC(e, t, r) {
  var i, s, o;
  return function() {
    var a, n = r(this), l;
    return n == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = n + "", a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n)));
  };
}
function IC(e, t) {
  var r = eo(e), i = r === "transform" ? xC : Qu;
  return this.attrTween(e, typeof t == "function" ? (r.local ? PC : DC)(r, i, Cn(this, "attr." + e, t)) : t == null ? (r.local ? EC : AC)(r) : (r.local ? OC : $C)(r, i, t));
}
function RC(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function qC(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function NC(e, t) {
  var r, i;
  function s() {
    var o = t.apply(this, arguments);
    return o !== i && (r = (i = o) && qC(e, o)), r;
  }
  return s._value = t, s;
}
function WC(e, t) {
  var r, i;
  function s() {
    var o = t.apply(this, arguments);
    return o !== i && (r = (i = o) && RC(e, o)), r;
  }
  return s._value = t, s;
}
function zC(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var i = eo(e);
  return this.tween(r, (i.local ? NC : WC)(i, t));
}
function HC(e, t) {
  return function() {
    xn(this, e).delay = +t.apply(this, arguments);
  };
}
function YC(e, t) {
  return t = +t, function() {
    xn(this, e).delay = t;
  };
}
function jC(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? HC : YC)(t, e)) : xe(this.node(), t).delay;
}
function UC(e, t) {
  return function() {
    $e(this, e).duration = +t.apply(this, arguments);
  };
}
function GC(e, t) {
  return t = +t, function() {
    $e(this, e).duration = t;
  };
}
function XC(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? UC : GC)(t, e)) : xe(this.node(), t).duration;
}
function VC(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    $e(this, e).ease = t;
  };
}
function ZC(e) {
  var t = this._id;
  return arguments.length ? this.each(VC(t, e)) : xe(this.node(), t).ease;
}
function KC(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    $e(this, e).ease = r;
  };
}
function QC(e) {
  if (typeof e != "function") throw new Error();
  return this.each(KC(this._id, e));
}
function JC(e) {
  typeof e != "function" && (e = Eu(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = [], l, c = 0; c < a; ++c)
      (l = o[c]) && e.call(l, l.__data__, c, o) && n.push(l);
  return new ze(i, this._parents, this._name, this._id);
}
function tb(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, i = t.length, s = r.length, o = Math.min(i, s), a = new Array(i), n = 0; n < o; ++n)
    for (var l = t[n], c = r[n], h = l.length, u = a[n] = new Array(h), d, f = 0; f < h; ++f)
      (d = l[f] || c[f]) && (u[f] = d);
  for (; n < i; ++n)
    a[n] = t[n];
  return new ze(a, this._parents, this._name, this._id);
}
function eb(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function rb(e, t, r) {
  var i, s, o = eb(t) ? xn : $e;
  return function() {
    var a = o(this, e), n = a.on;
    n !== i && (s = (i = n).copy()).on(t, r), a.on = s;
  };
}
function ib(e, t) {
  var r = this._id;
  return arguments.length < 2 ? xe(this.node(), r).on.on(e) : this.each(rb(r, e, t));
}
function sb(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function ob() {
  return this.on("end.remove", sb(this._id));
}
function ab(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = fn(e));
  for (var i = this._groups, s = i.length, o = new Array(s), a = 0; a < s; ++a)
    for (var n = i[a], l = n.length, c = o[a] = new Array(l), h, u, d = 0; d < l; ++d)
      (h = n[d]) && (u = e.call(h, h.__data__, d, n)) && ("__data__" in h && (u.__data__ = h.__data__), c[d] = u, io(c[d], t, r, d, c, xe(h, r)));
  return new ze(o, this._parents, t, r);
}
function nb(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Au(e));
  for (var i = this._groups, s = i.length, o = [], a = [], n = 0; n < s; ++n)
    for (var l = i[n], c = l.length, h, u = 0; u < c; ++u)
      if (h = l[u]) {
        for (var d = e.call(h, h.__data__, u, l), f, y = xe(h, r), m = 0, x = d.length; m < x; ++m)
          (f = d[m]) && io(f, t, r, m, d, y);
        o.push(d), a.push(h);
      }
  return new ze(o, a, t, r);
}
var lb = Xi.prototype.constructor;
function hb() {
  return new lb(this._groups, this._parents);
}
function cb(e, t) {
  var r, i, s;
  return function() {
    var o = Yr(this, e), a = (this.style.removeProperty(e), Yr(this, e));
    return o === a ? null : o === r && a === i ? s : s = t(r = o, i = a);
  };
}
function Ju(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ub(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = Yr(this, e);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function db(e, t, r) {
  var i, s, o;
  return function() {
    var a = Yr(this, e), n = r(this), l = n + "";
    return n == null && (l = n = (this.style.removeProperty(e), Yr(this, e))), a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n));
  };
}
function fb(e, t) {
  var r, i, s, o = "style." + t, a = "end." + o, n;
  return function() {
    var l = $e(this, e), c = l.on, h = l.value[o] == null ? n || (n = Ju(t)) : void 0;
    (c !== r || s !== h) && (i = (r = c).copy()).on(a, s = h), l.on = i;
  };
}
function pb(e, t, r) {
  var i = (e += "") == "transform" ? mC : Qu;
  return t == null ? this.styleTween(e, cb(e, i)).on("end.style." + e, Ju(e)) : typeof t == "function" ? this.styleTween(e, db(e, i, Cn(this, "style." + e, t))).each(fb(this._id, e)) : this.styleTween(e, ub(e, i, t), r).on("end.style." + e, null);
}
function gb(e, t, r) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), r);
  };
}
function yb(e, t, r) {
  var i, s;
  function o() {
    var a = t.apply(this, arguments);
    return a !== s && (i = (s = a) && gb(e, a, r)), i;
  }
  return o._value = t, o;
}
function mb(e, t, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  return this.tween(i, yb(e, t, r ?? ""));
}
function xb(e) {
  return function() {
    this.textContent = e;
  };
}
function Cb(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function bb(e) {
  return this.tween("text", typeof e == "function" ? Cb(Cn(this, "text", e)) : xb(e == null ? "" : e + ""));
}
function kb(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function wb(e) {
  var t, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (t = (r = s) && kb(s)), t;
  }
  return i._value = e, i;
}
function Sb(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, wb(e));
}
function Tb() {
  for (var e = this._name, t = this._id, r = td(), i = this._groups, s = i.length, o = 0; o < s; ++o)
    for (var a = i[o], n = a.length, l, c = 0; c < n; ++c)
      if (l = a[c]) {
        var h = xe(l, t);
        io(l, e, r, c, a, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new ze(i, this._parents, e, r);
}
function _b() {
  var e, t, r = this, i = r._id, s = r.size();
  return new Promise(function(o, a) {
    var n = { value: a }, l = { value: function() {
      --s === 0 && o();
    } };
    r.each(function() {
      var c = $e(this, i), h = c.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(n), t._.interrupt.push(n), t._.end.push(l)), c.on = t;
    }), s === 0 && o();
  });
}
var Bb = 0;
function ze(e, t, r, i) {
  this._groups = e, this._parents = t, this._name = r, this._id = i;
}
function td() {
  return ++Bb;
}
var Pe = Xi.prototype;
ze.prototype = {
  constructor: ze,
  select: ab,
  selectAll: nb,
  selectChild: Pe.selectChild,
  selectChildren: Pe.selectChildren,
  filter: JC,
  merge: tb,
  selection: hb,
  transition: Tb,
  call: Pe.call,
  nodes: Pe.nodes,
  node: Pe.node,
  size: Pe.size,
  empty: Pe.empty,
  each: Pe.each,
  on: ib,
  attr: IC,
  attrTween: zC,
  style: pb,
  styleTween: mb,
  text: bb,
  textTween: Sb,
  remove: ob,
  tween: MC,
  delay: jC,
  duration: XC,
  ease: ZC,
  easeVarying: QC,
  end: _b,
  [Symbol.iterator]: Pe[Symbol.iterator]
};
function vb(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Lb = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: vb
};
function Fb(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function Mb(e) {
  var t, r;
  e instanceof ze ? (t = e._id, e = e._name) : (t = td(), (r = Lb).time = mn(), e = e == null ? null : e + "");
  for (var i = this._groups, s = i.length, o = 0; o < s; ++o)
    for (var a = i[o], n = a.length, l, c = 0; c < n; ++c)
      (l = a[c]) && io(l, e, t, c, a, r || Fb(l, t));
  return new ze(i, this._parents, e, t);
}
Xi.prototype.interrupt = vC;
Xi.prototype.transition = Mb;
const Fa = Math.PI, Ma = 2 * Fa, nr = 1e-6, Ab = Ma - nr;
function ed(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Eb(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return ed;
  const r = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let s = 1, o = i.length; s < o; ++s)
      this._ += Math.round(arguments[s] * r) / r + i[s];
  };
}
class $b {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ed : Eb(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, i, s) {
    this._append`Q${+t},${+r},${this._x1 = +i},${this._y1 = +s}`;
  }
  bezierCurveTo(t, r, i, s, o, a) {
    this._append`C${+t},${+r},${+i},${+s},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(t, r, i, s, o) {
    if (t = +t, r = +r, i = +i, s = +s, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, n = this._y1, l = i - t, c = s - r, h = a - t, u = n - r, d = h * h + u * u;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > nr) if (!(Math.abs(u * l - c * h) > nr) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let f = i - a, y = s - n, m = l * l + c * c, x = f * f + y * y, C = Math.sqrt(m), k = Math.sqrt(d), S = o * Math.tan((Fa - Math.acos((m + d - x) / (2 * C * k))) / 2), T = S / k, _ = S / C;
      Math.abs(T - 1) > nr && this._append`L${t + T * h},${r + T * u}`, this._append`A${o},${o},0,0,${+(u * f > h * y)},${this._x1 = t + _ * l},${this._y1 = r + _ * c}`;
    }
  }
  arc(t, r, i, s, o, a) {
    if (t = +t, r = +r, i = +i, a = !!a, i < 0) throw new Error(`negative radius: ${i}`);
    let n = i * Math.cos(s), l = i * Math.sin(s), c = t + n, h = r + l, u = 1 ^ a, d = a ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${h}` : (Math.abs(this._x1 - c) > nr || Math.abs(this._y1 - h) > nr) && this._append`L${c},${h}`, i && (d < 0 && (d = d % Ma + Ma), d > Ab ? this._append`A${i},${i},0,1,${u},${t - n},${r - l}A${i},${i},0,1,${u},${this._x1 = c},${this._y1 = h}` : d > nr && this._append`A${i},${i},0,${+(d >= Fa)},${u},${this._x1 = t + i * Math.cos(o)},${this._y1 = r + i * Math.sin(o)}`);
  }
  rect(t, r, i, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${i = +i}v${+s}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function Mr(e) {
  return function() {
    return e;
  };
}
const I5 = Math.abs, R5 = Math.atan2, q5 = Math.cos, N5 = Math.max, W5 = Math.min, z5 = Math.sin, H5 = Math.sqrt, rh = 1e-12, bn = Math.PI, ih = bn / 2, Y5 = 2 * bn;
function j5(e) {
  return e > 1 ? 0 : e < -1 ? bn : Math.acos(e);
}
function U5(e) {
  return e >= 1 ? ih : e <= -1 ? -ih : Math.asin(e);
}
function Ob(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const i = Math.floor(r);
      if (!(i >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = i;
    }
    return e;
  }, () => new $b(t);
}
function Db(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function rd(e) {
  this._context = e;
}
rd.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Mi(e) {
  return new rd(e);
}
function Pb(e) {
  return e[0];
}
function Ib(e) {
  return e[1];
}
function Rb(e, t) {
  var r = Mr(!0), i = null, s = Mi, o = null, a = Ob(n);
  e = typeof e == "function" ? e : e === void 0 ? Pb : Mr(e), t = typeof t == "function" ? t : t === void 0 ? Ib : Mr(t);
  function n(l) {
    var c, h = (l = Db(l)).length, u, d = !1, f;
    for (i == null && (o = s(f = a())), c = 0; c <= h; ++c)
      !(c < h && r(u = l[c], c, l)) === d && ((d = !d) ? o.lineStart() : o.lineEnd()), d && o.point(+e(u, c, l), +t(u, c, l));
    if (f) return o = null, f + "" || null;
  }
  return n.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Mr(+l), n) : e;
  }, n.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Mr(+l), n) : t;
  }, n.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Mr(!!l), n) : r;
  }, n.curve = function(l) {
    return arguments.length ? (s = l, i != null && (o = s(i)), n) : s;
  }, n.context = function(l) {
    return arguments.length ? (l == null ? i = o = null : o = s(i = l), n) : i;
  }, n;
}
class id {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function sd(e) {
  return new id(e, !0);
}
function od(e) {
  return new id(e, !1);
}
function tr() {
}
function Rs(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function so(e) {
  this._context = e;
}
so.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Rs(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        Rs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Aa(e) {
  return new so(e);
}
function ad(e) {
  this._context = e;
}
ad.prototype = {
  areaStart: tr,
  areaEnd: tr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Rs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function qb(e) {
  return new ad(e);
}
function nd(e) {
  this._context = e;
}
nd.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, i) : this._context.moveTo(r, i);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Rs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Nb(e) {
  return new nd(e);
}
function ld(e, t) {
  this._basis = new so(e), this._beta = t;
}
ld.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var i = e[0], s = t[0], o = e[r] - i, a = t[r] - s, n = -1, l; ++n <= r; )
        l = n / r, this._basis.point(
          this._beta * e[n] + (1 - this._beta) * (i + l * o),
          this._beta * t[n] + (1 - this._beta) * (s + l * a)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const Wb = (function e(t) {
  function r(i) {
    return t === 1 ? new so(i) : new ld(i, t);
  }
  return r.beta = function(i) {
    return e(+i);
  }, r;
})(0.85);
function qs(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function kn(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
kn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        qs(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        qs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const hd = (function e(t) {
  function r(i) {
    return new kn(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function wn(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
wn.prototype = {
  areaStart: tr,
  areaEnd: tr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        qs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const zb = (function e(t) {
  function r(i) {
    return new wn(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Sn(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Sn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        qs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Hb = (function e(t) {
  function r(i) {
    return new Sn(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Tn(e, t, r) {
  var i = e._x1, s = e._y1, o = e._x2, a = e._y2;
  if (e._l01_a > rh) {
    var n = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * n - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, s = (s * n - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
  }
  if (e._l23_a > rh) {
    var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, h = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * c + e._x1 * e._l23_2a - t * e._l12_2a) / h, a = (a * c + e._y1 * e._l23_2a - r * e._l12_2a) / h;
  }
  e._context.bezierCurveTo(i, s, o, a, e._x2, e._y2);
}
function cd(e, t) {
  this._context = e, this._alpha = t;
}
cd.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        Tn(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const ud = (function e(t) {
  function r(i) {
    return t ? new cd(i, t) : new kn(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function dd(e, t) {
  this._context = e, this._alpha = t;
}
dd.prototype = {
  areaStart: tr,
  areaEnd: tr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Tn(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Yb = (function e(t) {
  function r(i) {
    return t ? new dd(i, t) : new wn(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function fd(e, t) {
  this._context = e, this._alpha = t;
}
fd.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Tn(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const jb = (function e(t) {
  function r(i) {
    return t ? new fd(i, t) : new Sn(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function pd(e) {
  this._context = e;
}
pd.prototype = {
  areaStart: tr,
  areaEnd: tr,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function Ub(e) {
  return new pd(e);
}
function sh(e) {
  return e < 0 ? -1 : 1;
}
function oh(e, t, r) {
  var i = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (i || s < 0 && -0), a = (r - e._y1) / (s || i < 0 && -0), n = (o * s + a * i) / (i + s);
  return (sh(o) + sh(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(n)) || 0;
}
function ah(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Lo(e, t, r) {
  var i = e._x0, s = e._y0, o = e._x1, a = e._y1, n = (o - i) / 3;
  e._context.bezierCurveTo(i + n, s + n * t, o - n, a - n * r, o, a);
}
function Ns(e) {
  this._context = e;
}
Ns.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Lo(this, this._t0, ah(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Lo(this, ah(this, r = oh(this, e, t)), r);
          break;
        default:
          Lo(this, this._t0, r = oh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function gd(e) {
  this._context = new yd(e);
}
(gd.prototype = Object.create(Ns.prototype)).point = function(e, t) {
  Ns.prototype.point.call(this, t, e);
};
function yd(e) {
  this._context = e;
}
yd.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, i, s, o) {
    this._context.bezierCurveTo(t, e, i, r, o, s);
  }
};
function md(e) {
  return new Ns(e);
}
function xd(e) {
  return new gd(e);
}
function Cd(e) {
  this._context = e;
}
Cd.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var i = nh(e), s = nh(t), o = 0, a = 1; a < r; ++o, ++a)
          this._context.bezierCurveTo(i[0][o], s[0][o], i[1][o], s[1][o], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function nh(e) {
  var t, r = e.length - 1, i, s = new Array(r), o = new Array(r), a = new Array(r);
  for (s[0] = 0, o[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) s[t] = 1, o[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (s[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) i = s[t] / o[t - 1], o[t] -= i, a[t] -= i * a[t - 1];
  for (s[r - 1] = a[r - 1] / o[r - 1], t = r - 2; t >= 0; --t) s[t] = (a[t] - s[t + 1]) / o[t];
  for (o[r - 1] = (e[r] + s[r - 1]) / 2, t = 0; t < r - 1; ++t) o[t] = 2 * e[t + 1] - s[t + 1];
  return [s, o];
}
function bd(e) {
  return new Cd(e);
}
function oo(e, t) {
  this._context = e, this._t = t;
}
oo.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function kd(e) {
  return new oo(e, 0.5);
}
function wd(e) {
  return new oo(e, 0);
}
function Sd(e) {
  return new oo(e, 1);
}
function bi(e, t, r) {
  this.k = e, this.x = t, this.y = r;
}
bi.prototype = {
  constructor: bi,
  scale: function(e) {
    return e === 1 ? this : new bi(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new bi(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
bi.prototype;
var Gb = /* @__PURE__ */ p((e) => {
  const { securityLevel: t } = _t();
  let r = Tt("body");
  if (t === "sandbox") {
    const o = Tt(`#i${e}`).node()?.contentDocument ?? document;
    r = Tt(o.body);
  }
  return r.select(`#${e}`);
}, "selectSvgElement"), Xb = /* @__PURE__ */ p((e) => {
  const { handDrawnSeed: t } = _t();
  return {
    fill: e,
    hachureAngle: 120,
    // angle of hachure,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: e,
    seed: t
  };
}, "solidStateFill"), Vb = /* @__PURE__ */ p((e) => Array.isArray(e) ? e : e ? e.split(";").map((t) => t.trim()).filter(Boolean) : [], "normalizeStyleList"), Vr = /* @__PURE__ */ p((e) => {
  const t = Zb([
    ...e.cssCompiledStyles || [],
    ...e.cssStyles || [],
    ...Vb(e.labelStyle)
  ]);
  return { stylesMap: t, stylesArray: [...t] };
}, "compileStyles"), Zb = /* @__PURE__ */ p((e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    const [i, s] = r.split(":");
    t.set(i.trim(), s?.trim());
  }), t;
}, "styles2Map"), Td = /* @__PURE__ */ p((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), nt = /* @__PURE__ */ p((e) => {
  const { stylesArray: t } = Vr(e), r = [], i = [], s = [], o = [];
  return t.forEach((a) => {
    const n = a[0];
    Td(n) ? r.push(a.join(":") + " !important") : (i.push(a.join(":") + " !important"), n.includes("stroke") && s.push(a.join(":") + " !important"), n === "fill" && o.push(a.join(":") + " !important"));
  }), {
    labelStyles: r.join(";"),
    nodeStyles: i.join(";"),
    stylesArray: t,
    borderStyles: s,
    backgroundStyles: o
  };
}, "styles2String"), it = /* @__PURE__ */ p((e, t) => {
  const { themeVariables: r, handDrawnSeed: i } = _t(), { nodeBorder: s, mainBkg: o } = r, { stylesMap: a } = Vr(e);
  return Object.assign(
    {
      roughness: 0.7,
      fill: a.get("fill") || o,
      fillStyle: "hachure",
      // solid fill
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: a.get("stroke") || s,
      seed: i,
      strokeWidth: a.get("stroke-width")?.replace("px", "") || 1.3,
      fillLineDash: [0, 0],
      strokeLineDash: Kb(a.get("stroke-dasharray"))
    },
    t
  );
}, "userNodeOverrides"), Kb = /* @__PURE__ */ p((e) => {
  if (!e)
    return [0, 0];
  const t = e.trim().split(/\s+/).map(Number);
  if (t.length === 1) {
    const s = isNaN(t[0]) ? 0 : t[0];
    return [s, s];
  }
  const r = isNaN(t[0]) ? 0 : t[0], i = isNaN(t[1]) ? 0 : t[1];
  return [r, i];
}, "getStrokeDashArray");
const Qb = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), Ws = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), _d = Object.freeze({
  ...Qb,
  ...Ws
}), Jb = Object.freeze({
  ..._d,
  body: "",
  hidden: !1
}), t1 = Object.freeze({
  width: null,
  height: null
}), e1 = Object.freeze({
  ...t1,
  ...Ws
}), r1 = (e, t, r, i = "") => {
  const s = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (s.length < 2 || s.length > 3) return null;
    i = s.shift().slice(1);
  }
  if (s.length > 3 || !s.length) return null;
  if (s.length > 1) {
    const n = s.pop(), l = s.pop(), c = {
      provider: s.length > 0 ? s[0] : i,
      prefix: l,
      name: n
    };
    return Fo(c) ? c : null;
  }
  const o = s[0], a = o.split("-");
  if (a.length > 1) {
    const n = {
      provider: i,
      prefix: a.shift(),
      name: a.join("-")
    };
    return Fo(n) ? n : null;
  }
  if (r && i === "") {
    const n = {
      provider: i,
      prefix: "",
      name: o
    };
    return Fo(n, r) ? n : null;
  }
  return null;
}, Fo = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1;
function i1(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r.rotate = i), r;
}
function lh(e, t) {
  const r = i1(e, t);
  for (const i in Jb) i in Ws ? i in e && !(i in r) && (r[i] = Ws[i]) : i in t ? r[i] = t[i] : i in e && (r[i] = e[i]);
  return r;
}
function s1(e, t) {
  const r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
  function o(a) {
    if (r[a]) return s[a] = [];
    if (!(a in s)) {
      s[a] = null;
      const n = i[a] && i[a].parent, l = n && o(n);
      l && (s[a] = [n].concat(l));
    }
    return s[a];
  }
  return (t || Object.keys(r).concat(Object.keys(i))).forEach(o), s;
}
function hh(e, t, r) {
  const i = e.icons, s = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function a(n) {
    o = lh(i[n] || s[n], o);
  }
  return a(t), r.forEach(a), lh(e, o);
}
function o1(e, t) {
  if (e.icons[t]) return hh(e, t, []);
  const r = s1(e, [t])[t];
  return r ? hh(e, t, r) : null;
}
const a1 = /(-?[0-9.]*[0-9]+[0-9.]*)/g, n1 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ch(e, t, r) {
  if (t === 1) return e;
  if (r = r || 100, typeof e == "number") return Math.ceil(e * t * r) / r;
  if (typeof e != "string") return e;
  const i = e.split(a1);
  if (i === null || !i.length) return e;
  const s = [];
  let o = i.shift(), a = n1.test(o);
  for (; ; ) {
    if (a) {
      const n = parseFloat(o);
      isNaN(n) ? s.push(o) : s.push(Math.ceil(n * t * r) / r);
    } else s.push(o);
    if (o = i.shift(), o === void 0) return s.join("");
    a = !a;
  }
}
function l1(e, t = "defs") {
  let r = "";
  const i = e.indexOf("<" + t);
  for (; i >= 0; ) {
    const s = e.indexOf(">", i), o = e.indexOf("</" + t);
    if (s === -1 || o === -1) break;
    const a = e.indexOf(">", o);
    if (a === -1) break;
    r += e.slice(s + 1, o).trim(), e = e.slice(0, i).trim() + e.slice(a + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function h1(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function c1(e, t, r) {
  const i = l1(e);
  return h1(i.defs, t + i.content + r);
}
const u1 = (e) => e === "unset" || e === "undefined" || e === "none";
function d1(e, t) {
  const r = {
    ..._d,
    ...e
  }, i = {
    ...e1,
    ...t
  }, s = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let o = r.body;
  [r, i].forEach((m) => {
    const x = [], C = m.hFlip, k = m.vFlip;
    let S = m.rotate;
    C ? k ? S += 2 : (x.push("translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")"), x.push("scale(-1 1)"), s.top = s.left = 0) : k && (x.push("translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")"), x.push("scale(1 -1)"), s.top = s.left = 0);
    let T;
    switch (S < 0 && (S -= Math.floor(S / 4) * 4), S = S % 4, S) {
      case 1:
        T = s.height / 2 + s.top, x.unshift("rotate(90 " + T.toString() + " " + T.toString() + ")");
        break;
      case 2:
        x.unshift("rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")");
        break;
      case 3:
        T = s.width / 2 + s.left, x.unshift("rotate(-90 " + T.toString() + " " + T.toString() + ")");
    }
    S % 2 === 1 && (s.left !== s.top && (T = s.left, s.left = s.top, s.top = T), s.width !== s.height && (T = s.width, s.width = s.height, s.height = T)), x.length && (o = c1(o, '<g transform="' + x.join(" ") + '">', "</g>"));
  });
  const a = i.width, n = i.height, l = s.width, c = s.height;
  let h, u;
  a === null ? (u = n === null ? "1em" : n === "auto" ? c : n, h = ch(u, l / c)) : (h = a === "auto" ? l : a, u = n === null ? ch(h, c / l) : n === "auto" ? c : n);
  const d = {}, f = (m, x) => {
    u1(x) || (d[m] = x.toString());
  };
  f("width", h), f("height", u);
  const y = [
    s.left,
    s.top,
    l,
    c
  ];
  return d.viewBox = y.join(" "), {
    attributes: d,
    viewBox: y,
    body: o
  };
}
const f1 = /\sid="(\S+)"/g, uh = /* @__PURE__ */ new Map();
function p1(e) {
  e = e.replace(/[0-9]+$/, "") || "a";
  const t = uh.get(e) || 0;
  return uh.set(e, t + 1), t ? `${e}${t}` : e;
}
function g1(e) {
  const t = [];
  let r;
  for (; r = f1.exec(e); ) t.push(r[1]);
  if (!t.length) return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((s) => {
    const o = p1(s), a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"), "$1" + o + i + "$3");
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
function y1(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t) r += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
var m1 = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, Ea = /* @__PURE__ */ new Map(), Bd = /* @__PURE__ */ new Map(), x1 = /* @__PURE__ */ p((e) => {
  for (const t of e) {
    if (!t.name)
      throw new Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.'
      );
    if (P.debug("Registering icon pack:", t.name), "loader" in t)
      Bd.set(t.name, t.loader);
    else if ("icons" in t)
      Ea.set(t.name, t.icons);
    else
      throw P.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), vd = /* @__PURE__ */ p(async (e, t) => {
  const r = r1(e, !0, t !== void 0);
  if (!r)
    throw new Error(`Invalid icon name: ${e}`);
  const i = r.prefix || t;
  if (!i)
    throw new Error(`Icon name must contain a prefix: ${e}`);
  let s = Ea.get(i);
  if (!s) {
    const a = Bd.get(i);
    if (!a)
      throw new Error(`Icon set not found: ${r.prefix}`);
    try {
      s = { ...await a(), prefix: i }, Ea.set(i, s);
    } catch (n) {
      throw P.error(n), new Error(`Failed to load icon set: ${r.prefix}`);
    }
  }
  const o = o1(s, r.name);
  if (!o)
    throw new Error(`Icon not found: ${e}`);
  return o;
}, "getRegisteredIconData"), C1 = /* @__PURE__ */ p(async (e) => {
  try {
    return await vd(e), !0;
  } catch {
    return !1;
  }
}, "isIconAvailable"), Zi = /* @__PURE__ */ p(async (e, t, r) => {
  let i;
  try {
    i = await vd(e, t?.fallbackPrefix);
  } catch (a) {
    P.error(a), i = m1;
  }
  const s = d1(i, t), o = y1(g1(s.body), {
    ...s.attributes,
    ...r
  });
  return ne(o, It());
}, "getIconSVG"), is = {}, zt = {}, dh;
function b1() {
  return dh || (dh = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.BLANK_URL = zt.relativeFirstCharacters = zt.whitespaceEscapeCharsRegex = zt.urlSchemeRegex = zt.ctrlCharactersRegex = zt.htmlCtrlEntityRegex = zt.htmlEntitiesRegex = zt.invalidProtocolRegex = void 0, zt.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, zt.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, zt.htmlCtrlEntityRegex = /&(newline|tab);/gi, zt.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, zt.urlSchemeRegex = /^.+(:|&colon;)/gim, zt.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, zt.relativeFirstCharacters = [".", "/"], zt.BLANK_URL = "about:blank"), zt;
}
var fh;
function k1() {
  if (fh) return is;
  fh = 1, Object.defineProperty(is, "__esModule", { value: !0 }), is.sanitizeUrl = o;
  var e = b1();
  function t(a) {
    return e.relativeFirstCharacters.indexOf(a[0]) > -1;
  }
  function r(a) {
    var n = a.replace(e.ctrlCharactersRegex, "");
    return n.replace(e.htmlEntitiesRegex, function(l, c) {
      return String.fromCharCode(c);
    });
  }
  function i(a) {
    return URL.canParse(a);
  }
  function s(a) {
    try {
      return decodeURIComponent(a);
    } catch {
      return a;
    }
  }
  function o(a) {
    if (!a)
      return e.BLANK_URL;
    var n, l = s(a.trim());
    do
      l = r(l).replace(e.htmlCtrlEntityRegex, "").replace(e.ctrlCharactersRegex, "").replace(e.whitespaceEscapeCharsRegex, "").trim(), l = s(l), n = l.match(e.ctrlCharactersRegex) || l.match(e.htmlEntitiesRegex) || l.match(e.htmlCtrlEntityRegex) || l.match(e.whitespaceEscapeCharsRegex);
    while (n && n.length > 0);
    var c = l;
    if (!c)
      return e.BLANK_URL;
    if (t(c))
      return c;
    var h = c.trimStart(), u = h.match(e.urlSchemeRegex);
    if (!u)
      return c;
    var d = u[0].toLowerCase().trim();
    if (e.invalidProtocolRegex.test(d))
      return e.BLANK_URL;
    var f = h.replace(/\\/g, "/");
    if (d === "mailto:" || d.includes("://"))
      return f;
    if (d === "http:" || d === "https:") {
      if (!i(f))
        return e.BLANK_URL;
      var y = new URL(f);
      return y.protocol = y.protocol.toLowerCase(), y.hostname = y.hostname.toLowerCase(), y.toString();
    }
    return f;
  }
  return is;
}
var w1 = k1();
function Mo(e) {
  if (typeof e != "object" || e == null) return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  if (Object.prototype.toString.call(e) !== "[object Object]") {
    const r = e[Symbol.toStringTag];
    return r == null || !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable ? !1 : e.toString() === `[object ${r}]`;
  }
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function S1() {
}
function Ld(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function _n(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const T1 = "[object RegExp]", Fd = "[object String]", Md = "[object Number]", Ad = "[object Boolean]", Ed = "[object Arguments]", _1 = "[object Symbol]", B1 = "[object Date]", v1 = "[object Map]", L1 = "[object Set]", F1 = "[object Array]", M1 = "[object ArrayBuffer]", A1 = "[object Object]", E1 = "[object DataView]", $1 = "[object Uint8Array]", O1 = "[object Uint8ClampedArray]", D1 = "[object Uint16Array]", P1 = "[object Uint32Array]", I1 = "[object Int8Array]", R1 = "[object Int16Array]", q1 = "[object Int32Array]", N1 = "[object Float32Array]", W1 = "[object Float64Array]", ph = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || /* @__PURE__ */ (function() {
  return this;
})();
function Bn(e) {
  return typeof ph.Buffer < "u" && ph.Buffer.isBuffer(e);
}
function z1(e) {
  return Number.isSafeInteger(e) && e >= 0;
}
function $d(e) {
  return e != null && typeof e != "function" && z1(e.length);
}
function H1(e) {
  return e === "__proto__";
}
function vn(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function Ln(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Y1(e, t) {
  return Ir(e, void 0, e, /* @__PURE__ */ new Map(), t);
}
function Ir(e, t, r, i = /* @__PURE__ */ new Map(), s = void 0) {
  const o = s?.(e, t, r, i);
  if (o !== void 0) return o;
  if (vn(e)) return e;
  if (i.has(e)) return i.get(e);
  if (Array.isArray(e)) {
    const a = new Array(e.length);
    i.set(e, a);
    for (let n = 0; n < e.length; n++) a[n] = Ir(e[n], n, r, i, s);
    return Object.hasOwn(e, "index") && (a.index = e.index), Object.hasOwn(e, "input") && (a.input = e.input), a;
  }
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) {
    const a = new RegExp(e.source, e.flags);
    return a.lastIndex = e.lastIndex, a;
  }
  if (e instanceof Map) {
    const a = /* @__PURE__ */ new Map();
    i.set(e, a);
    for (const [n, l] of e) a.set(n, Ir(l, n, r, i, s));
    return a;
  }
  if (e instanceof Set) {
    const a = /* @__PURE__ */ new Set();
    i.set(e, a);
    for (const n of e) a.add(Ir(n, void 0, r, i, s));
    return a;
  }
  if (Bn(e)) return e.subarray();
  if (Ln(e)) {
    const a = new (Object.getPrototypeOf(e)).constructor(e.length);
    i.set(e, a);
    for (let n = 0; n < e.length; n++) a[n] = Ir(e[n], n, r, i, s);
    return a;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  if (e instanceof DataView) {
    const a = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return i.set(e, a), de(a, e, r, i, s), a;
  }
  if (typeof File < "u" && e instanceof File) {
    const a = new File([e], e.name, { type: e.type });
    return i.set(e, a), de(a, e, r, i, s), a;
  }
  if (typeof Blob < "u" && e instanceof Blob) {
    const a = new Blob([e], { type: e.type });
    return i.set(e, a), de(a, e, r, i, s), a;
  }
  if (e instanceof Error) {
    const a = structuredClone(e);
    return i.set(e, a), a.message = e.message, a.name = e.name, a.stack = e.stack, a.cause = e.cause, a.constructor = e.constructor, de(a, e, r, i, s), a;
  }
  if (e instanceof Boolean) {
    const a = new Boolean(e.valueOf());
    return i.set(e, a), de(a, e, r, i, s), a;
  }
  if (e instanceof Number) {
    const a = new Number(e.valueOf());
    return i.set(e, a), de(a, e, r, i, s), a;
  }
  if (e instanceof String) {
    const a = new String(e.valueOf());
    return i.set(e, a), de(a, e, r, i, s), a;
  }
  if (typeof e == "object" && j1(e)) {
    const a = Object.create(Object.getPrototypeOf(e));
    return i.set(e, a), de(a, e, r, i, s), a;
  }
  return e;
}
function de(e, t, r = e, i, s) {
  const o = [...Object.keys(t), ...Ld(t)];
  for (let a = 0; a < o.length; a++) {
    const n = o[a], l = Object.getOwnPropertyDescriptor(e, n);
    (l == null || l.writable) && (e[n] = Ir(t[n], n, r, i, s));
  }
}
function j1(e) {
  switch (_n(e)) {
    case Ed:
    case F1:
    case M1:
    case E1:
    case Ad:
    case B1:
    case N1:
    case W1:
    case I1:
    case R1:
    case q1:
    case v1:
    case Md:
    case A1:
    case T1:
    case L1:
    case Fd:
    case _1:
    case $1:
    case O1:
    case D1:
    case P1:
      return !0;
    default:
      return !1;
  }
}
function U1(e, t) {
  return Y1(e, (r, i, s, o) => {
    if (typeof e == "object") {
      if (_n(e) === "[object Object]" && typeof e.constructor != "function") {
        const a = {};
        return o.set(e, a), de(a, e, s, o), a;
      }
      switch (Object.prototype.toString.call(e)) {
        case Md:
        case Fd:
        case Ad: {
          const a = new e.constructor(e?.valueOf());
          return de(a, e), a;
        }
        case Ed: {
          const a = {};
          return de(a, e), a.length = e.length, a[Symbol.iterator] = e[Symbol.iterator], a;
        }
        default:
          return;
      }
    }
  });
}
function gh(e) {
  return U1(e);
}
function $a(e) {
  return e !== null && typeof e == "object" && _n(e) === "[object Arguments]";
}
function Oa(e) {
  return typeof e == "object" && e !== null;
}
function G1(e) {
  return Oa(e) && $d(e);
}
function bs(e) {
  return Ln(e);
}
function X1(e) {
  const t = e?.constructor;
  return e === (typeof t == "function" ? t.prototype : Object.prototype);
}
function Ki(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError("Expected a function");
  const r = function(...i) {
    const s = t ? t.apply(this, i) : i[0], o = r.cache;
    if (o.has(s)) return o.get(s);
    const a = e.apply(this, i);
    return r.cache = o.set(s, a) || o, a;
  };
  return r.cache = new (Ki.Cache || Map)(), r;
}
Ki.Cache = Map;
function V1(e) {
  if (vn(e)) return e;
  if (Array.isArray(e) || Ln(e) || e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  const t = Object.getPrototypeOf(e);
  if (t == null) return Object.assign(Object.create(t), e);
  const r = t.constructor;
  if (e instanceof Date || e instanceof Map || e instanceof Set) return new r(e);
  if (e instanceof RegExp) {
    const i = new r(e);
    return i.lastIndex = e.lastIndex, i;
  }
  if (e instanceof DataView) return new r(e.buffer.slice(0));
  if (e instanceof Error) {
    let i;
    return e instanceof AggregateError ? i = new r(e.errors, e.message, { cause: e.cause }) : i = new r(e.message, { cause: e.cause }), i.stack = e.stack, Object.assign(i, e), i;
  }
  return typeof File < "u" && e instanceof File ? new r([e], e.name, {
    type: e.type,
    lastModified: e.lastModified
  }) : typeof e == "object" ? Object.assign(Object.create(t), e) : e;
}
function Z1(e, ...t) {
  const r = t.slice(0, -1), i = t[t.length - 1];
  let s = e;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s = ks(s, a, i, /* @__PURE__ */ new Map());
  }
  return s;
}
function ks(e, t, r, i) {
  if (vn(e) && (e = Object(e)), t == null || typeof t != "object") return e;
  if (i.has(t)) return V1(i.get(t));
  if (i.set(t, e), Array.isArray(t)) {
    t = t.slice();
    for (let o = 0; o < t.length; o++) o in t || (t[o] = void 0);
  }
  const s = [...Object.keys(t), ...Ld(t)];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (H1(a)) continue;
    let n = t[a], l = e[a];
    if ($a(n) && (n = { ...n }), $a(l) && (l = { ...l }), Bn(n) && (n = gh(n)), Array.isArray(n)) if (Array.isArray(l)) {
      const h = [], u = Reflect.ownKeys(l);
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        h[f] = l[f];
      }
      l = h;
    } else if (G1(l)) {
      const h = [];
      for (let u = 0; u < l.length; u++) h[u] = l[u];
      l = h;
    } else l = [];
    const c = r(l, n, a, e, t, i);
    c !== void 0 ? e[a] = c : Array.isArray(n) || Oa(l) && Oa(n) && (Mo(l) || Mo(n) || bs(l) || bs(n)) ? e[a] = ks(l, n, r, i) : l == null && Mo(n) ? e[a] = ks({}, n, r, i) : l == null && bs(n) ? e[a] = gh(n) : (l === void 0 || n !== void 0) && (e[a] = n);
  }
  return e;
}
function K1(e, ...t) {
  return Z1(e, ...t, S1);
}
function yh(e) {
  if (e == null) return !0;
  if ($d(e))
    return typeof e.splice != "function" && typeof e != "string" && !Bn(e) && !bs(e) && !$a(e) ? !1 : e.length === 0;
  if (typeof e == "object" || typeof e == "function") {
    if (e instanceof Map || e instanceof Set) return e.size === 0;
    const t = Object.keys(e);
    return X1(e) ? t.filter((r) => r !== "constructor").length === 0 : t.length === 0;
  }
  return !0;
}
var Q1 = "​", J1 = {
  curveBasis: Aa,
  curveBasisClosed: qb,
  curveBasisOpen: Nb,
  curveBumpX: sd,
  curveBumpY: od,
  curveBundle: Wb,
  curveCardinalClosed: zb,
  curveCardinalOpen: Hb,
  curveCardinal: hd,
  curveCatmullRomClosed: Yb,
  curveCatmullRomOpen: jb,
  curveCatmullRom: ud,
  curveLinear: Mi,
  curveLinearClosed: Ub,
  curveMonotoneX: md,
  curveMonotoneY: xd,
  curveNatural: bd,
  curveStep: kd,
  curveStepAfter: Sd,
  curveStepBefore: wd
}, tk = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, ek = /* @__PURE__ */ p(function(e, t) {
  const r = Od(e, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r)) {
    const a = r.map((n) => n.args);
    vs(a), i = Ht(i, [...a]);
  } else
    i = r.args;
  if (!i)
    return;
  let s = nn(e, t);
  const o = "config";
  return i[o] !== void 0 && (s === "flowchart-v2" && (s = "flowchart"), i[s] = i[o], delete i[o]), i;
}, "detectInit"), Od = /* @__PURE__ */ p(function(e, t = null) {
  try {
    const r = new RegExp(
      `[%]{2}(?![{]${tk.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    e = e.trim().replace(r, "").replace(/'/gm, '"'), P.debug(
      `Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`
    );
    let i;
    const s = [];
    for (; (i = Fi.exec(e)) !== null; )
      if (i.index === Fi.lastIndex && Fi.lastIndex++, i && !t || t && i[1]?.match(t) || t && i[2]?.match(t)) {
        const o = i[1] ? i[1] : i[2], a = i[3] ? i[3].trim() : i[4] ? JSON.parse(i[4].trim()) : null;
        s.push({ type: o, args: a });
      }
    return s.length === 0 ? { type: e, args: null } : s.length === 1 ? s[0] : s;
  } catch (r) {
    return P.error(
      `ERROR: ${r.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`
    ), { type: void 0, args: null };
  }
}, "detectDirective"), rk = /* @__PURE__ */ p(function(e) {
  return e.replace(Fi, "");
}, "removeDirectives"), ik = /* @__PURE__ */ p(function(e, t) {
  for (const [r, i] of t.entries())
    if (i.match(e))
      return r;
  return -1;
}, "isSubstringInArray");
function Fn(e, t) {
  if (!e)
    return t;
  const r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
  return J1[r] ?? t;
}
p(Fn, "interpolateToCurve");
function Dd(e, t) {
  const r = e.trim();
  if (r)
    return t.securityLevel !== "loose" ? w1.sanitizeUrl(r) : r;
}
p(Dd, "formatUrl");
var sk = /* @__PURE__ */ p((e, ...t) => {
  const r = e.split("."), i = r.length - 1, s = r[i];
  let o = window;
  for (let a = 0; a < i; a++)
    if (o = o[r[a]], !o) {
      P.error(`Function name: ${e} not found in window`);
      return;
    }
  o[s](...t);
}, "runFunc");
function Mn(e, t) {
  return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
p(Mn, "distance");
function Pd(e) {
  let t, r = 0;
  e.forEach((s) => {
    r += Mn(s, t), t = s;
  });
  const i = r / 2;
  return An(e, i);
}
p(Pd, "traverseEdge");
function Id(e) {
  return e.length === 1 ? e[0] : Pd(e);
}
p(Id, "calcLabelPosition");
var mh = /* @__PURE__ */ p((e, t = 2) => {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}, "roundNumber"), An = /* @__PURE__ */ p((e, t) => {
  let r, i = t;
  for (const s of e) {
    if (r) {
      const o = Mn(s, r);
      if (o === 0)
        return r;
      if (o < i)
        i -= o;
      else {
        const a = i / o;
        if (a <= 0)
          return r;
        if (a >= 1)
          return { x: s.x, y: s.y };
        if (a > 0 && a < 1)
          return {
            x: mh((1 - a) * r.x + a * s.x, 5),
            y: mh((1 - a) * r.y + a * s.y, 5)
          };
      }
    }
    r = s;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), ok = /* @__PURE__ */ p((e, t, r) => {
  P.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = t.reverse());
  const s = An(t, 25), o = e ? 10 : 5, a = Math.atan2(t[0].y - s.y, t[0].x - s.x), n = { x: 0, y: 0 };
  return n.x = Math.sin(a) * o + (t[0].x + s.x) / 2, n.y = -Math.cos(a) * o + (t[0].y + s.y) / 2, n;
}, "calcCardinalityPosition");
function Rd(e, t, r) {
  const i = structuredClone(r);
  P.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
  const s = 25 + e, o = An(i, s), a = 10 + e * 0.5, n = Math.atan2(i[0].y - o.y, i[0].x - o.x), l = { x: 0, y: 0 };
  return t === "start_left" ? (l.x = Math.sin(n + Math.PI) * a + (i[0].x + o.x) / 2, l.y = -Math.cos(n + Math.PI) * a + (i[0].y + o.y) / 2) : t === "end_right" ? (l.x = Math.sin(n - Math.PI) * a + (i[0].x + o.x) / 2 - 5, l.y = -Math.cos(n - Math.PI) * a + (i[0].y + o.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(n) * a + (i[0].x + o.x) / 2 - 5, l.y = -Math.cos(n) * a + (i[0].y + o.y) / 2 - 5) : (l.x = Math.sin(n) * a + (i[0].x + o.x) / 2, l.y = -Math.cos(n) * a + (i[0].y + o.y) / 2), l;
}
p(Rd, "calcTerminalLabelPosition");
function qd(e) {
  let t = "", r = "";
  for (const i of e)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : t = t + i + ";");
  return { style: t, labelStyle: r };
}
p(qd, "getStylesFromArray");
var xh = 0, ak = /* @__PURE__ */ p(() => (xh++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + xh), "generateId");
function Nd(e) {
  let t = "";
  const r = "0123456789abcdef", i = r.length;
  for (let s = 0; s < e; s++)
    t += r.charAt(Math.floor(Math.random() * i));
  return t;
}
p(Nd, "makeRandomHex");
var nk = /* @__PURE__ */ p((e) => Nd(e.length), "random"), lk = /* @__PURE__ */ p(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, "getTextObj"), hk = /* @__PURE__ */ p(function(e, t) {
  const r = t.text.replace(Gi.lineBreakRegex, " "), [, i] = ao(t.fontSize), s = e.append("text");
  s.attr("x", t.x), s.attr("y", t.y), s.style("text-anchor", t.anchor), s.style("font-family", t.fontFamily), s.style("font-size", i), s.style("font-weight", t.fontWeight), s.attr("fill", t.fill), t.class !== void 0 && s.attr("class", t.class);
  const o = s.append("tspan");
  return o.attr("x", t.x + t.textMargin * 2), o.attr("fill", t.fill), o.text(r), s;
}, "drawSimpleText"), ck = Ki(
  (e, t, r) => {
    if (!e || (r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r
    ), Gi.lineBreakRegex.test(e)))
      return e;
    const i = e.split(" ").filter(Boolean), s = [];
    let o = "";
    return i.forEach((a, n) => {
      const l = He(`${a} `, r), c = He(o, r);
      if (l > t) {
        const { hyphenatedStrings: d, remainingWord: f } = uk(a, t, "-", r);
        s.push(o, ...d), o = f;
      } else c + l >= t ? (s.push(o), o = a) : o = [o, a].filter(Boolean).join(" ");
      n + 1 === i.length && s.push(o);
    }), s.filter((a) => a !== "").join(r.joinWith);
  },
  (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
), uk = Ki(
  (e, t, r = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const s = [...e], o = [];
    let a = "";
    return s.forEach((n, l) => {
      const c = `${a}${n}`;
      if (He(c, i) >= t) {
        const u = l + 1, d = s.length === u, f = `${c}${r}`;
        o.push(d ? c : f), a = "";
      } else
        a = c;
    }), { hyphenatedStrings: o, remainingWord: a };
  },
  (e, t, r = "-", i) => `${e}${t}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function Wd(e, t) {
  return En(e, t).height;
}
p(Wd, "calculateTextHeight");
function He(e, t) {
  return En(e, t).width;
}
p(He, "calculateTextWidth");
var En = Ki(
  (e, t) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: s = 400 } = t;
    if (!e)
      return { width: 0, height: 0 };
    const [, o] = ao(r), a = ["sans-serif", i], n = e.split(Gi.lineBreakRegex), l = [], c = Tt("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h = c.append("svg");
    for (const d of a) {
      let f = 0;
      const y = { width: 0, height: 0, lineHeight: 0 };
      for (const m of n) {
        const x = lk();
        x.text = m || Q1;
        const C = hk(h, x).style("font-size", o).style("font-weight", s).style("font-family", d), k = (C._groups || C)[0][0].getBBox();
        if (k.width === 0 && k.height === 0)
          throw new Error("svg element not in render tree");
        y.width = Math.round(Math.max(y.width, k.width)), f = Math.round(k.height), y.height += f, y.lineHeight = Math.round(Math.max(y.lineHeight, f));
      }
      l.push(y);
    }
    h.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`
), dk = class {
  constructor(e = !1, t) {
    this.count = 0, this.count = t ? t.length : 0, this.next = e ? () => this.count++ : () => Date.now();
  }
  static {
    p(this, "InitIDGenerator");
  }
}, ss, fk = /* @__PURE__ */ p(function(e) {
  return ss = ss || document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), ss.innerHTML = e, unescape(ss.textContent);
}, "entityDecode");
function $n(e) {
  return "str" in e;
}
p($n, "isDetailedError");
var pk = /* @__PURE__ */ p((e, t, r, i) => {
  if (!i)
    return;
  const s = e.node()?.getBBox();
  s && e.append("text").text(i).attr("text-anchor", "middle").attr("x", s.x + s.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle"), ao = /* @__PURE__ */ p((e) => {
  if (typeof e == "number")
    return [e, e + "px"];
  const t = parseInt(e ?? "", 10);
  return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
}, "parseFontSize");
function On(e, t) {
  return K1({}, e, t);
}
p(On, "cleanAndMerge");
var Vt = {
  assignWithDepth: Ht,
  wrapLabel: ck,
  calculateTextHeight: Wd,
  calculateTextWidth: He,
  calculateTextDimensions: En,
  cleanAndMerge: On,
  detectInit: ek,
  detectDirective: Od,
  isSubstringInArray: ik,
  interpolateToCurve: Fn,
  calcLabelPosition: Id,
  calcCardinalityPosition: ok,
  calcTerminalLabelPosition: Rd,
  formatUrl: Dd,
  getStylesFromArray: qd,
  generateId: ak,
  random: nk,
  runFunc: sk,
  entityDecode: fk,
  insertTitle: pk,
  isLabelCoordinateInPath: zd,
  parseFontSize: ao,
  InitIDGenerator: dk
}, gk = /* @__PURE__ */ p(function(e) {
  let t = e;
  return t = t.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/#\w+;/g, function(r) {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), t;
}, "encodeEntities"), er = /* @__PURE__ */ p(function(e) {
  return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), G5 = /* @__PURE__ */ p((e, t, {
  counter: r = 0,
  prefix: i,
  suffix: s
}, o) => o || `${i ? `${i}_` : ""}${e}_${t}_${r}${s ? `_${s}` : ""}`, "getEdgeId");
function Wt(e) {
  return e ?? null;
}
p(Wt, "handleUndefinedAttr");
function zd(e, t) {
  const r = Math.round(e.x), i = Math.round(e.y), s = t.replace(
    /(\d+\.\d+)/g,
    (o) => Math.round(parseFloat(o)).toString()
  );
  return s.includes(r.toString()) || s.includes(i.toString());
}
p(zd, "isLabelCoordinateInPath");
var ws = { exports: {} }, Ch = ws.exports, bh;
function yk() {
  return bh || (bh = 1, (function(e) {
    (function(t) {
      var r = function() {
      }, i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(h) {
        return setTimeout(h, 16);
      };
      function s() {
        var h = this;
        h.reads = [], h.writes = [], h.raf = i.bind(t);
      }
      s.prototype = {
        constructor: s,
        /**
         * We run this inside a try catch
         * so that if any jobs error, we
         * are able to recover and continue
         * to flush the batch until it's empty.
         *
         * @param {Array} tasks
         */
        runTasks: function(h) {
          for (var u; u = h.shift(); ) u();
        },
        /**
         * Adds a job to the read batch and
         * schedules a new frame if need be.
         *
         * @param  {Function} fn
         * @param  {Object} ctx the context to be bound to `fn` (optional).
         * @public
         */
        measure: function(h, u) {
          var d = u ? h.bind(u) : h;
          return this.reads.push(d), o(this), d;
        },
        /**
         * Adds a job to the
         * write batch and schedules
         * a new frame if need be.
         *
         * @param  {Function} fn
         * @param  {Object} ctx the context to be bound to `fn` (optional).
         * @public
         */
        mutate: function(h, u) {
          var d = u ? h.bind(u) : h;
          return this.writes.push(d), o(this), d;
        },
        /**
         * Clears a scheduled 'read' or 'write' task.
         *
         * @param {Object} task
         * @return {Boolean} success
         * @public
         */
        clear: function(h) {
          return n(this.reads, h) || n(this.writes, h);
        },
        /**
         * Extend this FastDom with some
         * custom functionality.
         *
         * Because fastdom must *always* be a
         * singleton, we're actually extending
         * the fastdom instance. This means tasks
         * scheduled by an extension still enter
         * fastdom's global task queue.
         *
         * The 'super' instance can be accessed
         * from `this.fastdom`.
         *
         * @example
         *
         * var myFastdom = fastdom.extend({
         *   initialize: function() {
         *     // runs on creation
         *   },
         *
         *   // override a method
         *   measure: function(fn) {
         *     // do extra stuff ...
         *
         *     // then call the original
         *     return this.fastdom.measure(fn);
         *   },
         *
         *   ...
         * });
         *
         * @param  {Object} props  properties to mixin
         * @return {FastDom}
         */
        extend: function(h) {
          if (typeof h != "object") throw new Error("expected object");
          var u = Object.create(this);
          return l(u, h), u.fastdom = this, u.initialize && u.initialize(), u;
        },
        // override this with a function
        // to prevent Errors in console
        // when tasks throw
        catch: null
      };
      function o(h) {
        h.scheduled || (h.scheduled = !0, h.raf(a.bind(null, h)));
      }
      function a(h) {
        var u = h.writes, d = h.reads, f;
        try {
          r("flushing reads", d.length), h.runTasks(d), r("flushing writes", u.length), h.runTasks(u);
        } catch (y) {
          f = y;
        }
        if (h.scheduled = !1, (d.length || u.length) && o(h), f)
          if (r("task errored", f.message), h.catch) h.catch(f);
          else throw f;
      }
      function n(h, u) {
        var d = h.indexOf(u);
        return !!~d && !!h.splice(d, 1);
      }
      function l(h, u) {
        for (var d in u)
          u.hasOwnProperty(d) && (h[d] = u[d]);
      }
      var c = t.fastdom = t.fastdom || new s();
      e.exports = c;
    })(typeof window < "u" ? window : typeof Ch < "u" ? Ch : globalThis);
  })(ws)), ws.exports;
}
var mk = yk();
const xk = /* @__PURE__ */ on(mk);
var Ao = { exports: {} }, kh;
function Ck() {
  return kh || (kh = 1, (function(e) {
    (function() {
      var t = {
        initialize: function() {
          this._tasks = /* @__PURE__ */ new Map();
        },
        mutate: function(i, s) {
          return r(this, "mutate", i, s);
        },
        measure: function(i, s) {
          return r(this, "measure", i, s);
        },
        clear: function(i) {
          var s = this._tasks, o = s.get(i);
          this.fastdom.clear(o), s.delete(i);
        }
      };
      function r(i, s, o, a) {
        var n = i._tasks, l = i.fastdom, c, h = new Promise(function(u, d) {
          c = l[s](function() {
            n.delete(h);
            try {
              u(a ? o.call(a) : o());
            } catch (f) {
              d(f);
            }
          }, a);
        });
        return n.set(h, c), h;
      }
      e.exports = t;
    })();
  })(Ao)), Ao.exports;
}
var bk = Ck();
const kk = /* @__PURE__ */ on(bk);
function Dn() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var kr = Dn();
function Hd(e) {
  kr = e;
}
var Ai = { exec: () => null };
function Mt(e, t = "") {
  let r = typeof e == "string" ? e : e.source, i = { replace: (s, o) => {
    let a = typeof o == "string" ? o : o.source;
    return a = a.replace(Jt.caret, "$1"), r = r.replace(s, a), i;
  }, getRegex: () => new RegExp(r, t) };
  return i;
}
var wk = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Jt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Sk = /^(?:[ \t]*(?:\n|$))+/, Tk = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, _k = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Qi = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Bk = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Pn = /(?:[*+-]|\d{1,9}[.)])/, Yd = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, jd = Mt(Yd).replace(/bull/g, Pn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), vk = Mt(Yd).replace(/bull/g, Pn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), In = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Lk = /^[^\n]+/, Rn = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Fk = Mt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Rn).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Mk = Mt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Pn).getRegex(), no = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", qn = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ak = Mt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", qn).replace("tag", no).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ud = Mt(In).replace("hr", Qi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", no).getRegex(), Ek = Mt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ud).getRegex(), Nn = { blockquote: Ek, code: Tk, def: Fk, fences: _k, heading: Bk, hr: Qi, html: Ak, lheading: jd, list: Mk, newline: Sk, paragraph: Ud, table: Ai, text: Lk }, wh = Mt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Qi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", no).getRegex(), $k = { ...Nn, lheading: vk, table: wh, paragraph: Mt(In).replace("hr", Qi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", wh).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", no).getRegex() }, Ok = { ...Nn, html: Mt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", qn).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Ai, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Mt(In).replace("hr", Qi).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", jd).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Dk = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Pk = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Gd = /^( {2,}|\\)\n(?!\s*$)/, Ik = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, lo = /[\p{P}\p{S}]/u, Wn = /[\s\p{P}\p{S}]/u, Xd = /[^\s\p{P}\p{S}]/u, Rk = Mt(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Wn).getRegex(), Vd = /(?!~)[\p{P}\p{S}]/u, qk = /(?!~)[\s\p{P}\p{S}]/u, Nk = /(?:[^\s\p{P}\p{S}]|~)/u, Wk = Mt(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", wk ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Zd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, zk = Mt(Zd, "u").replace(/punct/g, lo).getRegex(), Hk = Mt(Zd, "u").replace(/punct/g, Vd).getRegex(), Kd = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Yk = Mt(Kd, "gu").replace(/notPunctSpace/g, Xd).replace(/punctSpace/g, Wn).replace(/punct/g, lo).getRegex(), jk = Mt(Kd, "gu").replace(/notPunctSpace/g, Nk).replace(/punctSpace/g, qk).replace(/punct/g, Vd).getRegex(), Uk = Mt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Xd).replace(/punctSpace/g, Wn).replace(/punct/g, lo).getRegex(), Gk = Mt(/\\(punct)/, "gu").replace(/punct/g, lo).getRegex(), Xk = Mt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Vk = Mt(qn).replace("(?:-->|$)", "-->").getRegex(), Zk = Mt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Vk).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), zs = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Kk = Mt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", zs).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Qd = Mt(/^!?\[(label)\]\[(ref)\]/).replace("label", zs).replace("ref", Rn).getRegex(), Jd = Mt(/^!?\[(ref)\](?:\[\])?/).replace("ref", Rn).getRegex(), Qk = Mt("reflink|nolink(?!\\()", "g").replace("reflink", Qd).replace("nolink", Jd).getRegex(), Sh = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, zn = { _backpedal: Ai, anyPunctuation: Gk, autolink: Xk, blockSkip: Wk, br: Gd, code: Pk, del: Ai, emStrongLDelim: zk, emStrongRDelimAst: Yk, emStrongRDelimUnd: Uk, escape: Dk, link: Kk, nolink: Jd, punctuation: Rk, reflink: Qd, reflinkSearch: Qk, tag: Zk, text: Ik, url: Ai }, Jk = { ...zn, link: Mt(/^!?\[(label)\]\((.*?)\)/).replace("label", zs).getRegex(), reflink: Mt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", zs).getRegex() }, Da = { ...zn, emStrongRDelimAst: jk, emStrongLDelim: Hk, url: Mt(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Sh).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Mt(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Sh).getRegex() }, t2 = { ...Da, br: Mt(Gd).replace("{2,}", "*").getRegex(), text: Mt(Da.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, os = { normal: Nn, gfm: $k, pedantic: Ok }, ci = { normal: zn, gfm: Da, breaks: t2, pedantic: Jk }, e2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Th = (e) => e2[e];
function we(e, t) {
  if (t) {
    if (Jt.escapeTest.test(e)) return e.replace(Jt.escapeReplace, Th);
  } else if (Jt.escapeTestNoEncode.test(e)) return e.replace(Jt.escapeReplaceNoEncode, Th);
  return e;
}
function _h(e) {
  try {
    e = encodeURI(e).replace(Jt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Bh(e, t) {
  let r = e.replace(Jt.findPipe, (o, a, n) => {
    let l = !1, c = a;
    for (; --c >= 0 && n[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), i = r.split(Jt.splitPipe), s = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i.at(-1)?.trim() && i.pop(), t) if (i.length > t) i.splice(t);
  else for (; i.length < t; ) i.push("");
  for (; s < i.length; s++) i[s] = i[s].trim().replace(Jt.slashPipe, "|");
  return i;
}
function ui(e, t, r) {
  let i = e.length;
  if (i === 0) return "";
  let s = 0;
  for (; s < i && e.charAt(i - s - 1) === t; )
    s++;
  return e.slice(0, i - s);
}
function r2(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let i = 0; i < e.length; i++) if (e[i] === "\\") i++;
  else if (e[i] === t[0]) r++;
  else if (e[i] === t[1] && (r--, r < 0)) return i;
  return r > 0 ? -2 : -1;
}
function vh(e, t, r, i, s) {
  let o = t.href, a = t.title || null, n = e[1].replace(s.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: r, href: o, title: a, text: n, tokens: i.inlineTokens(n) };
  return i.state.inLink = !1, l;
}
function i2(e, t, r) {
  let i = e.match(r.other.indentCodeCompensation);
  if (i === null) return t;
  let s = i[1];
  return t.split(`
`).map((o) => {
    let a = o.match(r.other.beginningSpace);
    if (a === null) return o;
    let [n] = a;
    return n.length >= s.length ? o.slice(s.length) : o;
  }).join(`
`);
}
var Hs = class {
  options;
  rules;
  lexer;
  constructor(t) {
    this.options = t || kr;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let i = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : ui(i, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let i = r[0], s = i2(i, r[3] || "", this.rules);
      return { type: "code", raw: i, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: s };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        let s = ui(i, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (i = s.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: ui(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let i = ui(r[0], `
`).split(`
`), s = "", o = "", a = [];
      for (; i.length > 0; ) {
        let n = !1, l = [], c;
        for (c = 0; c < i.length; c++) if (this.rules.other.blockquoteStart.test(i[c])) l.push(i[c]), n = !0;
        else if (!n) l.push(i[c]);
        else break;
        i = i.slice(c);
        let h = l.join(`
`), u = h.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${h}` : h, o = o ? `${o}
${u}` : u;
        let d = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(u, a, !0), this.lexer.state.top = d, i.length === 0) break;
        let f = a.at(-1);
        if (f?.type === "code") break;
        if (f?.type === "blockquote") {
          let y = f, m = y.raw + `
` + i.join(`
`), x = this.blockquote(m);
          a[a.length - 1] = x, s = s.substring(0, s.length - y.raw.length) + x.raw, o = o.substring(0, o.length - y.text.length) + x.text;
          break;
        } else if (f?.type === "list") {
          let y = f, m = y.raw + `
` + i.join(`
`), x = this.list(m);
          a[a.length - 1] = x, s = s.substring(0, s.length - f.raw.length) + x.raw, o = o.substring(0, o.length - y.raw.length) + x.raw, i = m.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: a, text: o };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim(), s = i.length > 1, o = { type: "list", raw: "", ordered: s, start: s ? +i.slice(0, -1) : "", loose: !1, items: [] };
      i = s ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = s ? i : "[*+-]");
      let a = this.rules.other.listItemRegex(i), n = !1;
      for (; t; ) {
        let c = !1, h = "", u = "";
        if (!(r = a.exec(t)) || this.rules.block.hr.test(t)) break;
        h = r[0], t = t.substring(h.length);
        let d = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (k) => " ".repeat(3 * k.length)), f = t.split(`
`, 1)[0], y = !d.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, u = d.trimStart()) : y ? m = r[1].length + 1 : (m = r[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, u = d.slice(m), m += r[1].length), y && this.rules.other.blankLine.test(f) && (h += f + `
`, t = t.substring(f.length + 1), c = !0), !c) {
          let k = this.rules.other.nextBulletRegex(m), S = this.rules.other.hrRegex(m), T = this.rules.other.fencesBeginRegex(m), _ = this.rules.other.headingBeginRegex(m), L = this.rules.other.htmlBeginRegex(m);
          for (; t; ) {
            let M = t.split(`
`, 1)[0], v;
            if (f = M, this.options.pedantic ? (f = f.replace(this.rules.other.listReplaceNesting, "  "), v = f) : v = f.replace(this.rules.other.tabCharGlobal, "    "), T.test(f) || _.test(f) || L.test(f) || k.test(f) || S.test(f)) break;
            if (v.search(this.rules.other.nonSpaceChar) >= m || !f.trim()) u += `
` + v.slice(m);
            else {
              if (y || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || T.test(d) || _.test(d) || S.test(d)) break;
              u += `
` + f;
            }
            !y && !f.trim() && (y = !0), h += M + `
`, t = t.substring(M.length + 1), d = v.slice(m);
          }
        }
        o.loose || (n ? o.loose = !0 : this.rules.other.doubleBlankLine.test(h) && (n = !0));
        let x = null, C;
        this.options.gfm && (x = this.rules.other.listIsTask.exec(u), x && (C = x[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), o.items.push({ type: "list_item", raw: h, task: !!x, checked: C, loose: !1, text: u, tokens: [] }), o.raw += h;
      }
      let l = o.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      o.raw = o.raw.trimEnd();
      for (let c = 0; c < o.items.length; c++) if (this.lexer.state.top = !1, o.items[c].tokens = this.lexer.blockTokens(o.items[c].text, []), !o.loose) {
        let h = o.items[c].tokens.filter((d) => d.type === "space"), u = h.length > 0 && h.some((d) => this.rules.other.anyLine.test(d.raw));
        o.loose = u;
      }
      if (o.loose) for (let c = 0; c < o.items.length; c++) o.items[c].loose = !0;
      return o;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: !0, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let i = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: i, raw: r[0], href: s, title: o };
    }
  }
  table(t) {
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let i = Bh(r[1]), s = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = r[3]?.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (i.length === s.length) {
      for (let n of s) this.rules.other.tableAlignRight.test(n) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(n) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(n) ? a.align.push("left") : a.align.push(null);
      for (let n = 0; n < i.length; n++) a.header.push({ text: i[n], tokens: this.lexer.inline(i[n]), header: !0, align: a.align[n] });
      for (let n of o) a.rows.push(Bh(n, a.header.length).map((l, c) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: a.align[c] })));
      return a;
    }
  }
  lheading(t) {
    let r = this.rules.block.lheading.exec(t);
    if (r) return { type: "heading", raw: r[0], depth: r[2].charAt(0) === "=" ? 1 : 2, text: r[1], tokens: this.lexer.inline(r[1]) };
  }
  paragraph(t) {
    let r = this.rules.block.paragraph.exec(t);
    if (r) {
      let i = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return { type: "paragraph", raw: r[0], text: i, tokens: this.lexer.inline(i) };
    }
  }
  text(t) {
    let r = this.rules.block.text.exec(t);
    if (r) return { type: "text", raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
  }
  escape(t) {
    let r = this.rules.inline.escape.exec(t);
    if (r) return { type: "escape", raw: r[0], text: r[1] };
  }
  tag(t) {
    let r = this.rules.inline.tag.exec(t);
    if (r) return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: r[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: r[0] };
  }
  link(t) {
    let r = this.rules.inline.link.exec(t);
    if (r) {
      let i = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i)) return;
        let a = ui(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0) return;
      } else {
        let a = r2(r[2], "()");
        if (a === -2) return;
        if (a > -1) {
          let n = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + a;
          r[2] = r[2].substring(0, a), r[0] = r[0].substring(0, n).trim(), r[3] = "";
        }
      }
      let s = r[2], o = "";
      if (this.options.pedantic) {
        let a = this.rules.other.pedanticHrefTitle.exec(s);
        a && (s = a[1], o = a[3]);
      } else o = r[3] ? r[3].slice(1, -1) : "";
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? s = s.slice(1) : s = s.slice(1, -1)), vh(r, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      let s = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), o = r[s.toLowerCase()];
      if (!o) {
        let a = i[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return vh(i, o, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, i = "") {
    let s = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!s || s[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !i || this.rules.inline.punctuation.exec(i))) {
      let o = [...s[0]].length - 1, a, n, l = o, c = 0, h = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, r = r.slice(-1 * t.length + o); (s = h.exec(r)) != null; ) {
        if (a = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !a) continue;
        if (n = [...a].length, s[3] || s[4]) {
          l += n;
          continue;
        } else if ((s[5] || s[6]) && o % 3 && !((o + n) % 3)) {
          c += n;
          continue;
        }
        if (l -= n, l > 0) continue;
        n = Math.min(n, n + l + c);
        let u = [...s[0]][0].length, d = t.slice(0, o + s.index + u + n);
        if (Math.min(o, n) % 2) {
          let y = d.slice(1, -1);
          return { type: "em", raw: d, text: y, tokens: this.lexer.inlineTokens(y) };
        }
        let f = d.slice(2, -2);
        return { type: "strong", raw: d, text: f, tokens: this.lexer.inlineTokens(f) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(i), o = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return s && o && (i = i.substring(1, i.length - 1)), { type: "codespan", raw: r[0], text: i };
    }
  }
  br(t) {
    let r = this.rules.inline.br.exec(t);
    if (r) return { type: "br", raw: r[0] };
  }
  del(t) {
    let r = this.rules.inline.del.exec(t);
    if (r) return { type: "del", raw: r[0], text: r[2], tokens: this.lexer.inlineTokens(r[2]) };
  }
  autolink(t) {
    let r = this.rules.inline.autolink.exec(t);
    if (r) {
      let i, s;
      return r[2] === "@" ? (i = r[1], s = "mailto:" + i) : (i = r[1], s = i), { type: "link", raw: r[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(t) {
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let i, s;
      if (r[2] === "@") i = r[0], s = "mailto:" + i;
      else {
        let o;
        do
          o = r[0], r[0] = this.rules.inline._backpedal.exec(r[0])?.[0] ?? "";
        while (o !== r[0]);
        i = r[0], r[1] === "www." ? s = "http://" + r[0] : s = r[0];
      }
      return { type: "link", raw: r[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let i = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: i };
    }
  }
}, fe = class Pa {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || kr, this.options.tokenizer = this.options.tokenizer || new Hs(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let r = { other: Jt, block: os.normal, inline: ci.normal };
    this.options.pedantic ? (r.block = os.pedantic, r.inline = ci.pedantic) : this.options.gfm && (r.block = os.gfm, this.options.breaks ? r.inline = ci.breaks : r.inline = ci.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: os, inline: ci };
  }
  static lex(t, r) {
    return new Pa(r).lex(t);
  }
  static lexInline(t, r) {
    return new Pa(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Jt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], i = !1) {
    for (this.options.pedantic && (t = t.replace(Jt.tabCharGlobal, "    ").replace(Jt.spaceLine, "")); t; ) {
      let s;
      if (this.options.extensions?.block?.some((a) => (s = a.call({ lexer: this }, t, r)) ? (t = t.substring(s.raw.length), r.push(s), !0) : !1)) continue;
      if (s = this.tokenizer.space(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        s.raw.length === 1 && a !== void 0 ? a.raw += `
` : r.push(s);
        continue;
      }
      if (s = this.tokenizer.code(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.at(-1).src = a.text) : r.push(s);
        continue;
      }
      if (s = this.tokenizer.fences(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.heading(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.hr(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.blockquote(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.list(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.html(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.def(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.raw, this.inlineQueue.at(-1).src = a.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = { href: s.href, title: s.title }, r.push(s));
        continue;
      }
      if (s = this.tokenizer.table(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.lheading(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      let o = t;
      if (this.options.extensions?.startBlock) {
        let a = 1 / 0, n = t.slice(1), l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, n), typeof l == "number" && l >= 0 && (a = Math.min(a, l));
        }), a < 1 / 0 && a >= 0 && (o = t.substring(0, a + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(o))) {
        let a = r.at(-1);
        i && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : r.push(s), i = o.length !== t.length, t = t.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : r.push(s);
        continue;
      }
      if (t) {
        let a = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(a);
          break;
        } else throw new Error(a);
      }
    }
    return this.state.top = !0, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    let i = t, s = null;
    if (this.tokens.links) {
      let l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) l.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, s.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let o;
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) o = s[2] ? s[2].length : 0, i = i.slice(0, s.index + o) + "[" + "a".repeat(s[0].length - o - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    i = this.options.hooks?.emStrongMask?.call({ lexer: this }, i) ?? i;
    let a = !1, n = "";
    for (; t; ) {
      a || (n = ""), a = !1;
      let l;
      if (this.options.extensions?.inline?.some((h) => (l = h.call({ lexer: this }, t, r)) ? (t = t.substring(l.raw.length), r.push(l), !0) : !1)) continue;
      if (l = this.tokenizer.escape(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.tag(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.link(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(l.raw.length);
        let h = r.at(-1);
        l.type === "text" && h?.type === "text" ? (h.raw += l.raw, h.text += l.text) : r.push(l);
        continue;
      }
      if (l = this.tokenizer.emStrong(t, i, n)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.codespan(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.br(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.del(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.autolink(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (!this.state.inLink && (l = this.tokenizer.url(t))) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      let c = t;
      if (this.options.extensions?.startInline) {
        let h = 1 / 0, u = t.slice(1), d;
        this.options.extensions.startInline.forEach((f) => {
          d = f.call({ lexer: this }, u), typeof d == "number" && d >= 0 && (h = Math.min(h, d));
        }), h < 1 / 0 && h >= 0 && (c = t.substring(0, h + 1));
      }
      if (l = this.tokenizer.inlineText(c)) {
        t = t.substring(l.raw.length), l.raw.slice(-1) !== "_" && (n = l.raw.slice(-1)), a = !0;
        let h = r.at(-1);
        h?.type === "text" ? (h.raw += l.raw, h.text += l.text) : r.push(l);
        continue;
      }
      if (t) {
        let h = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(h);
          break;
        } else throw new Error(h);
      }
    }
    return r;
  }
}, Ys = class {
  options;
  parser;
  constructor(t) {
    this.options = t || kr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: i }) {
    let s = (r || "").match(Jt.notSpaceStart)?.[0], o = t.replace(Jt.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + we(s) + '">' + (i ? o : we(o, !0)) + `</code></pre>
` : "<pre><code>" + (i ? o : we(o, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let r = t.ordered, i = t.start, s = "";
    for (let n = 0; n < t.items.length; n++) {
      let l = t.items[n];
      s += this.listitem(l);
    }
    let o = r ? "ol" : "ul", a = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + o + a + `>
` + s + "</" + o + `>
`;
  }
  listitem(t) {
    let r = "";
    if (t.task) {
      let i = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + we(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({ type: "text", raw: i + " ", text: i + " ", escaped: !0 }) : r += i + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", i = "";
    for (let o = 0; o < t.header.length; o++) i += this.tablecell(t.header[o]);
    r += this.tablerow({ text: i });
    let s = "";
    for (let o = 0; o < t.rows.length; o++) {
      let a = t.rows[o];
      i = "";
      for (let n = 0; n < a.length; n++) i += this.tablecell(a[n]);
      s += this.tablerow({ text: i });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let r = this.parser.parseInline(t.tokens), i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + r + `</${i}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${we(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: i }) {
    let s = this.parser.parseInline(i), o = _h(t);
    if (o === null) return s;
    t = o;
    let a = '<a href="' + t + '"';
    return r && (a += ' title="' + we(r) + '"'), a += ">" + s + "</a>", a;
  }
  image({ href: t, title: r, text: i, tokens: s }) {
    s && (i = this.parser.parseInline(s, this.parser.textRenderer));
    let o = _h(t);
    if (o === null) return we(i);
    t = o;
    let a = `<img src="${t}" alt="${i}"`;
    return r && (a += ` title="${we(r)}"`), a += ">", a;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : we(t.text);
  }
}, Hn = class {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}, pe = class Ia {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || kr, this.options.renderer = this.options.renderer || new Ys(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Hn();
  }
  static parse(t, r) {
    return new Ia(r).parse(t);
  }
  static parseInline(t, r) {
    return new Ia(r).parseInline(t);
  }
  parse(t, r = !0) {
    let i = "";
    for (let s = 0; s < t.length; s++) {
      let o = t[s];
      if (this.options.extensions?.renderers?.[o.type]) {
        let n = o, l = this.options.extensions.renderers[n.type].call({ parser: this }, n);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(n.type)) {
          i += l || "";
          continue;
        }
      }
      let a = o;
      switch (a.type) {
        case "space": {
          i += this.renderer.space(a);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(a);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(a);
          continue;
        }
        case "code": {
          i += this.renderer.code(a);
          continue;
        }
        case "table": {
          i += this.renderer.table(a);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          i += this.renderer.list(a);
          continue;
        }
        case "html": {
          i += this.renderer.html(a);
          continue;
        }
        case "def": {
          i += this.renderer.def(a);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(a);
          continue;
        }
        case "text": {
          let n = a, l = this.renderer.text(n);
          for (; s + 1 < t.length && t[s + 1].type === "text"; ) n = t[++s], l += `
` + this.renderer.text(n);
          r ? i += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: !0 }] }) : i += l;
          continue;
        }
        default: {
          let n = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(n), "";
          throw new Error(n);
        }
      }
    }
    return i;
  }
  parseInline(t, r = this.renderer) {
    let i = "";
    for (let s = 0; s < t.length; s++) {
      let o = t[s];
      if (this.options.extensions?.renderers?.[o.type]) {
        let n = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (n !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          i += n || "";
          continue;
        }
      }
      let a = o;
      switch (a.type) {
        case "escape": {
          i += r.text(a);
          break;
        }
        case "html": {
          i += r.html(a);
          break;
        }
        case "link": {
          i += r.link(a);
          break;
        }
        case "image": {
          i += r.image(a);
          break;
        }
        case "strong": {
          i += r.strong(a);
          break;
        }
        case "em": {
          i += r.em(a);
          break;
        }
        case "codespan": {
          i += r.codespan(a);
          break;
        }
        case "br": {
          i += r.br(a);
          break;
        }
        case "del": {
          i += r.del(a);
          break;
        }
        case "text": {
          i += r.text(a);
          break;
        }
        default: {
          let n = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(n), "";
          throw new Error(n);
        }
      }
    }
    return i;
  }
}, ki = class {
  options;
  block;
  constructor(t) {
    this.options = t || kr;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer() {
    return this.block ? fe.lex : fe.lexInline;
  }
  provideParser() {
    return this.block ? pe.parse : pe.parseInline;
  }
}, s2 = class {
  defaults = Dn();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = pe;
  Renderer = Ys;
  TextRenderer = Hn;
  Lexer = fe;
  Tokenizer = Hs;
  Hooks = ki;
  constructor(...t) {
    this.use(...t);
  }
  walkTokens(t, r) {
    let i = [];
    for (let s of t) switch (i = i.concat(r.call(this, s)), s.type) {
      case "table": {
        let o = s;
        for (let a of o.header) i = i.concat(this.walkTokens(a.tokens, r));
        for (let a of o.rows) for (let n of a) i = i.concat(this.walkTokens(n.tokens, r));
        break;
      }
      case "list": {
        let o = s;
        i = i.concat(this.walkTokens(o.items, r));
        break;
      }
      default: {
        let o = s;
        this.defaults.extensions?.childTokens?.[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((a) => {
          let n = o[a].flat(1 / 0);
          i = i.concat(this.walkTokens(n, r));
        }) : o.tokens && (i = i.concat(this.walkTokens(o.tokens, r)));
      }
    }
    return i;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      let s = { ...i };
      if (s.async = this.defaults.async || s.async || !1, i.extensions && (i.extensions.forEach((o) => {
        if (!o.name) throw new Error("extension name required");
        if ("renderer" in o) {
          let a = r.renderers[o.name];
          a ? r.renderers[o.name] = function(...n) {
            let l = o.renderer.apply(this, n);
            return l === !1 && (l = a.apply(this, n)), l;
          } : r.renderers[o.name] = o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let a = r[o.level];
          a ? a.unshift(o.tokenizer) : r[o.level] = [o.tokenizer], o.start && (o.level === "block" ? r.startBlock ? r.startBlock.push(o.start) : r.startBlock = [o.start] : o.level === "inline" && (r.startInline ? r.startInline.push(o.start) : r.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (r.childTokens[o.name] = o.childTokens);
      }), s.extensions = r), i.renderer) {
        let o = this.defaults.renderer || new Ys(this.defaults);
        for (let a in i.renderer) {
          if (!(a in o)) throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a)) continue;
          let n = a, l = i.renderer[n], c = o[n];
          o[n] = (...h) => {
            let u = l.apply(o, h);
            return u === !1 && (u = c.apply(o, h)), u || "";
          };
        }
        s.renderer = o;
      }
      if (i.tokenizer) {
        let o = this.defaults.tokenizer || new Hs(this.defaults);
        for (let a in i.tokenizer) {
          if (!(a in o)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          let n = a, l = i.tokenizer[n], c = o[n];
          o[n] = (...h) => {
            let u = l.apply(o, h);
            return u === !1 && (u = c.apply(o, h)), u;
          };
        }
        s.tokenizer = o;
      }
      if (i.hooks) {
        let o = this.defaults.hooks || new ki();
        for (let a in i.hooks) {
          if (!(a in o)) throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a)) continue;
          let n = a, l = i.hooks[n], c = o[n];
          ki.passThroughHooks.has(a) ? o[n] = (h) => {
            if (this.defaults.async && ki.passThroughHooksRespectAsync.has(a)) return (async () => {
              let d = await l.call(o, h);
              return c.call(o, d);
            })();
            let u = l.call(o, h);
            return c.call(o, u);
          } : o[n] = (...h) => {
            if (this.defaults.async) return (async () => {
              let d = await l.apply(o, h);
              return d === !1 && (d = await c.apply(o, h)), d;
            })();
            let u = l.apply(o, h);
            return u === !1 && (u = c.apply(o, h)), u;
          };
        }
        s.hooks = o;
      }
      if (i.walkTokens) {
        let o = this.defaults.walkTokens, a = i.walkTokens;
        s.walkTokens = function(n) {
          let l = [];
          return l.push(a.call(this, n)), o && (l = l.concat(o.call(this, n))), l;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return fe.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return pe.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, i) => {
      let s = { ...i }, o = { ...this.defaults, ...s }, a = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && s.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (o.hooks && (o.hooks.options = o, o.hooks.block = t), o.async) return (async () => {
        let n = o.hooks ? await o.hooks.preprocess(r) : r, l = await (o.hooks ? await o.hooks.provideLexer() : t ? fe.lex : fe.lexInline)(n, o), c = o.hooks ? await o.hooks.processAllTokens(l) : l;
        o.walkTokens && await Promise.all(this.walkTokens(c, o.walkTokens));
        let h = await (o.hooks ? await o.hooks.provideParser() : t ? pe.parse : pe.parseInline)(c, o);
        return o.hooks ? await o.hooks.postprocess(h) : h;
      })().catch(a);
      try {
        o.hooks && (r = o.hooks.preprocess(r));
        let n = (o.hooks ? o.hooks.provideLexer() : t ? fe.lex : fe.lexInline)(r, o);
        o.hooks && (n = o.hooks.processAllTokens(n)), o.walkTokens && this.walkTokens(n, o.walkTokens);
        let l = (o.hooks ? o.hooks.provideParser() : t ? pe.parse : pe.parseInline)(n, o);
        return o.hooks && (l = o.hooks.postprocess(l)), l;
      } catch (n) {
        return a(n);
      }
    };
  }
  onError(t, r) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let s = "<p>An error occurred:</p><pre>" + we(i.message + "", !0) + "</pre>";
        return r ? Promise.resolve(s) : s;
      }
      if (r) return Promise.reject(i);
      throw i;
    };
  }
}, yr = new s2();
function Et(e, t) {
  return yr.parse(e, t);
}
Et.options = Et.setOptions = function(e) {
  return yr.setOptions(e), Et.defaults = yr.defaults, Hd(Et.defaults), Et;
};
Et.getDefaults = Dn;
Et.defaults = kr;
Et.use = function(...e) {
  return yr.use(...e), Et.defaults = yr.defaults, Hd(Et.defaults), Et;
};
Et.walkTokens = function(e, t) {
  return yr.walkTokens(e, t);
};
Et.parseInline = yr.parseInline;
Et.Parser = pe;
Et.parser = pe.parse;
Et.Renderer = Ys;
Et.TextRenderer = Hn;
Et.Lexer = fe;
Et.lexer = fe.lex;
Et.Tokenizer = Hs;
Et.Hooks = ki;
Et.parse = Et;
Et.options;
Et.setOptions;
Et.use;
Et.walkTokens;
Et.parseInline;
pe.parse;
fe.lex;
function tf(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var i = Array.from(typeof e == "string" ? [e] : e);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var s = i.reduce(function(n, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? n.concat(c.map(function(h) {
      var u, d;
      return (d = (u = h.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && d !== void 0 ? d : 0;
    })) : n;
  }, []);
  if (s.length) {
    var o = new RegExp(`
[	 ]{`.concat(Math.min.apply(Math, s), "}"), "g");
    i = i.map(function(n) {
      return n.replace(o, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var a = i[0];
  return t.forEach(function(n, l) {
    var c = a.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", u = n;
    typeof n == "string" && n.includes(`
`) && (u = String(n).split(`
`).map(function(d, f) {
      return f === 0 ? d : "".concat(h).concat(d);
    }).join(`
`)), a += u + i[l + 1];
  }), a;
}
var Ra = typeof performance < "u" && typeof performance.now == "function", Ar = /* @__PURE__ */ p(() => Ra ? performance.now() : 0, "now"), Eo = "🧜 ", o2 = "Mermaid render", a2 = "Mermaid", n2 = {
  parse: "tertiary",
  prepare: "secondary",
  measure: "primary",
  layout: "primary-dark",
  layoutCore: "error",
  draw: "primary-light",
  paint: "secondary-dark",
  serialize: "tertiary-dark",
  render: "primary-light"
};
(class {
  constructor() {
    this.enabled = !1, this.autoPrint = !0, this.records = [], this.maxRecords = 200, this.roots = [], this.stack = [], this.buckets = {};
  }
  static {
    p(this, "Profiler");
  }
  enable() {
    return this.enabled = !0, this;
  }
  disable() {
    return this.enabled = !1, this;
  }
  /** Begin a new top-level measurement (one per diagram render). */
  start(e) {
    this.enabled && (this.roots = [], this.stack = [], this.buckets = {}, this.begin(e));
  }
  /**
   * Accumulate the wall-clock of a synchronous sub-operation into a named bucket,
   * summed over every call within the render — for hot operations that run too
   * often to be individual tree spans (e.g. per-node `getBBox`). Returns the
   * function's result. No-op (just calls `fn`) unless enabled.
   */
  tickSync(e, t) {
    if (!this.enabled)
      return t();
    const r = Ar();
    try {
      return t();
    } finally {
      this.buckets[e] = (this.buckets[e] ?? 0) + (Ar() - r);
    }
  }
  /**
   * Async variant of {@link tickSync}. WARNING: only meaningful for operations
   * that run one-at-a-time. Do NOT use it for calls awaited concurrently (e.g.
   * `Promise.all(nodes.map(...))`) — their wall-clocks overlap and the summed
   * bucket balloons far past the real elapsed time. For concurrent CPU
   * attribution use a DevTools CPU profile instead.
   */
  async tick(e, t) {
    if (!this.enabled)
      return t();
    const r = Ar();
    try {
      return await t();
    } finally {
      this.buckets[e] = (this.buckets[e] ?? 0) + (Ar() - r);
    }
  }
  /** End the current top-level measurement and optionally print a summary. */
  stop() {
    if (!this.enabled)
      return;
    for (; this.stack.length > 0; )
      this.end();
    const e = this.roots.at(-1), t = this.runLabel ?? e?.name;
    return e && (this.records.push({ label: t ?? e.name, tree: e, buckets: { ...this.buckets } }), this.records.length > this.maxRecords && this.records.splice(0, this.records.length - this.maxRecords), this.autoPrint && this.printSummary(e, t)), this.runLabel = void 0, e;
  }
  /** Open a child span. Pair with {@link end}. No-op unless enabled. */
  begin(e) {
    if (!this.enabled)
      return;
    const t = { name: e, start: Ar(), duration: -1, children: [] }, r = this.stack.at(-1);
    if (r ? r.children.push(t) : this.roots.push(t), this.stack.push(t), Ra && typeof performance.mark == "function")
      try {
        performance.mark(`${Eo}${e} ▶`);
      } catch {
      }
  }
  /** Close the most recently opened span. No-op unless enabled. */
  end() {
    if (!this.enabled)
      return;
    const e = this.stack.pop();
    if (!e)
      return;
    const t = Ar();
    if (e.duration = t - e.start, Ra && typeof performance.measure == "function")
      try {
        performance.measure(`${Eo}${e.name}`, {
          start: e.start,
          end: t,
          detail: {
            devtools: {
              dataType: "track-entry",
              track: o2,
              trackGroup: a2,
              color: n2[e.name] ?? "primary",
              tooltipText: `${e.name} — ${e.duration.toFixed(1)} ms`
            }
          }
        });
      } catch {
      }
  }
  /**
   * Measure an async phase. Returns the wrapped function's result and rethrows
   * any error after closing the span, so instrumentation never swallows
   * failures or leaks an open span. No measurement overhead unless enabled.
   */
  async span(e, t) {
    if (!this.enabled)
      return t();
    this.begin(e);
    try {
      return await t();
    } finally {
      this.end();
    }
  }
  /** The most recent completed render tree, or `undefined`. */
  report() {
    return this.records.at(-1)?.tree ?? this.roots.at(-1);
  }
  /** Drop all collected records and any in-progress spans. */
  clear() {
    this.records.length = 0, this.roots = [], this.stack = [], this.runLabel = void 0;
  }
  reset() {
    this.roots = [], this.stack = [];
  }
  printSummary(e = this.report(), t) {
    if (!e)
      return;
    const r = e.duration, i = t && t !== e.name ? `${e.name} [${t}]` : e.name, s = ["ms        %    phase"], o = /* @__PURE__ */ p((n, l) => {
      const c = "  ".repeat(l), h = n.duration.toFixed(1).padStart(8), u = r > 0 ? `${(n.duration / r * 100).toFixed(0).padStart(3)}%` : "   -";
      s.push(`${h}  ${u}  ${c}${n.name}`);
      for (const d of n.children)
        o(d, l + 1);
      if (n.children.length > 0) {
        const d = n.children.reduce((y, m) => y + m.duration, 0), f = n.duration - d;
        if (f > 0.5) {
          const y = f.toFixed(1).padStart(8);
          s.push(`${y}       ${c}  (self)`);
        }
      }
    }, "walk");
    o(e, 0);
    const a = Object.keys(this.buckets);
    if (a.length > 0) {
      s.push("—— buckets (summed) ——");
      for (const n of a)
        s.push(`${this.buckets[n].toFixed(1).padStart(8)}       ${n}`);
    }
    console.log(`${Eo}mermaid render profile · ${i}
${s.join(`
`)}`);
  }
});
globalThis.injected ??= {
  includeLargeFeatures: !0,
  profiling: !1,
  version: "0.0.0"
};
var l2 = (
  // @ts-expect-error -- fastdom types aren't yet ESM-compatible, we need this hack
  xk.extend({
    /**
     * `requestAnimationFrame` is too slow compared to `queueMicrotask`.
     */
    raf(e) {
      typeof queueMicrotask == "function" ? queueMicrotask(e) : setTimeout(e, 0);
    }
  }).extend(kk)
), mr = l2;
function ef(e, { markdownAutoWrap: t }) {
  const i = e.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`);
  return tf(i);
}
p(ef, "preprocessMarkdown");
function rf(e) {
  return e.split(/\\n|\n|<br\s*\/?>/gi).map(
    (t) => t.trim().match(/<[^>]+>|[^\s<>]+/g)?.map((r) => ({ content: r, type: "normal" })) ?? []
  );
}
p(rf, "nonMarkdownToLines");
function sf(e, t = {}) {
  const r = ef(e, t), i = Et.lexer(r), s = [[]];
  let o = 0;
  function a(n, l = "normal") {
    n.type === "text" ? n.text.split(`
`).forEach((h, u) => {
      u !== 0 && (o++, s.push([])), h.split(" ").forEach((d) => {
        d = d.replace(/&#39;/g, "'"), d && s[o].push({ content: d, type: l });
      });
    }) : n.type === "strong" || n.type === "em" ? n.tokens.forEach((c) => {
      a(c, n.type);
    }) : n.type === "html" && s[o].push({ content: n.text, type: "normal" });
  }
  return p(a, "processNode"), i.forEach((n) => {
    n.type === "paragraph" ? n.tokens?.forEach((l) => {
      a(l);
    }) : n.type === "html" ? s[o].push({ content: n.text, type: "normal" }) : s[o].push({ content: n.raw, type: "normal" });
  }), s;
}
p(sf, "markdownToLines");
function of(e) {
  return e ? `<p>${/**
  * Replace new lines with <br /> tags.
  *
  * Unlike in markdown text, `\n` sequences are treated as line breaks here.
  */
  e.replace(/\\n|\n/g, "<br />")}</p>` : "";
}
p(of, "nonMarkdownToHTML");
function af(e, { markdownAutoWrap: t } = {}) {
  const r = Et.lexer(e);
  function i(s) {
    return s.type === "text" ? t === !1 ? s.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : s.text.replace(/\n */g, "<br/>") : s.type === "strong" ? `<strong>${s.tokens?.map(i).join("")}</strong>` : s.type === "em" ? `<em>${s.tokens?.map(i).join("")}</em>` : s.type === "paragraph" ? `<p>${s.tokens?.map(i).join("")}</p>` : s.type === "space" ? "" : s.type === "html" ? `${s.text}` : s.type === "escape" ? s.text : (P.warn(`Unsupported markdown: ${s.type}`), s.raw);
  }
  return p(i, "output"), r.map(i).join("");
}
p(af, "markdownToHTML");
function nf(e) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((t) => t.segment) : [...e];
}
p(nf, "splitTextToChars");
function lf(e, t) {
  const r = nf(t.content);
  return Yn(e, [], r, t.type);
}
p(lf, "splitWordToFitWidth");
function Yn(e, t, r, i) {
  if (r.length === 0)
    return [
      { content: t.join(""), type: i },
      { content: "", type: i }
    ];
  const [s, ...o] = r, a = [...t, s];
  return e([{ content: a.join(""), type: i }]) ? Yn(e, a, o, i) : (t.length === 0 && s && (t.push(s), r.shift()), [
    { content: t.join(""), type: i },
    { content: r.join(""), type: i }
  ]);
}
p(Yn, "splitWordToFitWidthRecursion");
function hf(e, t) {
  if (e.some(({ content: r }) => r.includes(`
`)))
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  return js(e, t);
}
p(hf, "splitLineToFitWidth");
function js(e, t, r = [], i = []) {
  if (e.length === 0)
    return i.length > 0 && r.push(i), r.length > 0 ? r : [];
  let s = "";
  e[0].content === " " && (s = " ", e.shift());
  const o = e.shift() ?? { content: " ", type: "normal" }, a = [...i];
  if (s !== "" && a.push({ content: s, type: "normal" }), a.push(o), t(a))
    return js(e, t, r, a);
  if (i.length > 0)
    r.push(i), e.unshift(o);
  else if (o.content) {
    const [n, l] = lf(t, o);
    r.push([n]), l.content && e.unshift(l);
  }
  return js(e, t, r);
}
p(js, "splitLineToFitWidthRecursion");
function qa(e, t) {
  t && e.attr("style", t);
}
p(qa, "applyStyle");
var Lh = 16384;
async function cf(e, t, r, i, s = !1, o = It()) {
  const a = e.append("foreignObject");
  a.attr("width", `${Math.min(10 * r, Lh)}px`), a.attr("height", `${Math.min(10 * r, Lh)}px`);
  const n = a.append("xhtml:div"), l = Oi(t.label) ? await Bu(t.label.replace(Gi.lineBreakRegex, `
`), o) : ne(t.label, o), c = t.isNode ? "nodeLabel" : "edgeLabel", h = n.append("span");
  return h.html(l), qa(h, t.labelStyle), h.attr("class", `${c} ${i}`), qa(n, t.labelStyle), n.style("display", "table-cell"), n.style("white-space", "nowrap"), n.style("line-height", "1.5"), r !== Number.POSITIVE_INFINITY && (n.style("max-width", r + "px"), n.style("text-align", "center")), n.attr("xmlns", "http://www.w3.org/1999/xhtml"), s && n.attr("class", "labelBkg"), (await mr.measure(() => n.node().getBoundingClientRect())).width === r && (n.style("display", "table"), n.style("white-space", "break-spaces"), n.style("width", r + "px")), a.node();
}
p(cf, "addHtmlSpan");
function ho(e, t, r, i = !1) {
  const s = e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r - 0.1 + "em").attr("dy", r + "em");
  return i && s.attr("text-anchor", "middle"), s;
}
p(ho, "createTspan");
function uf(e, t, r) {
  const i = e.append("text"), s = ho(i, 1, t);
  co(s, r);
  const o = s.node().getComputedTextLength();
  return i.remove(), o;
}
p(uf, "computeWidthOfText");
function h2(e, t, r) {
  const i = e.append("text"), s = ho(i, 1, t);
  co(s, [{ content: r, type: "normal" }]);
  const o = s.node()?.getBoundingClientRect();
  return o && i.remove(), o;
}
p(h2, "computeDimensionOfText");
function df(e, t, r, i = !1, s = !1) {
  const a = t.append("g"), n = a.insert("rect").attr("class", "background").attr("style", "stroke: none"), l = a.append("text").attr("y", "-10.1");
  s && l.attr("text-anchor", "middle");
  let c = 0;
  for (const h of r) {
    const u = /* @__PURE__ */ p((f) => uf(a, 1.1, f) <= e, "checkWidth"), d = u(h) ? [h] : hf(h, u);
    for (const f of d) {
      const y = ho(l, c, 1.1, s);
      co(y, f), c++;
    }
  }
  if (i) {
    const h = l.node().getBBox(), u = 2;
    return n.attr("x", h.x - u).attr("y", h.y - u).attr("width", h.width + 2 * u).attr("height", h.height + 2 * u), a.node();
  } else
    return l.node();
}
p(df, "createFormattedText");
function Na(e) {
  const t = /&(amp|lt|gt);/g;
  return e.replace(t, (r, i) => {
    switch (i) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      default:
        return r;
    }
  });
}
p(Na, "decodeHTMLEntities");
function co(e, t) {
  e.text(""), t.forEach((r, i) => {
    const s = e.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
    i === 0 ? s.text(Na(r.content)) : s.text(" " + Na(r.content));
  });
}
p(co, "updateTextContentAndStyles");
async function ff(e, t = {}) {
  const r = [];
  e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (s, o, a) => (r.push(
    (async () => {
      const n = `${o}:${a}`;
      return await C1(n) ? await Zi(n, void 0, { class: "label-icon" }) : `<i class='${ne(s, t).replace(":", " ")}'></i>`;
    })()
  ), s));
  const i = await Promise.all(r);
  return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => i.shift() ?? "");
}
p(ff, "replaceIconSubstring");
var Ce = /* @__PURE__ */ p(async (e, t = "", {
  style: r = "",
  isTitle: i = !1,
  classes: s = "",
  useHtmlLabels: o = !0,
  markdown: a = !0,
  isNode: n = !0,
  /**
   * The width to wrap the text within. Set to `Number.POSITIVE_INFINITY` for no wrapping.
   */
  width: l = 200,
  addSvgBackground: c = !1
} = {}, h) => {
  if (P.debug(
    "XYZ createText",
    t,
    r,
    i,
    s,
    o,
    n,
    "addSvgBackground: ",
    c
  ), o) {
    const u = a ? af(t, h) : of(t), d = await ff(er(u), h), f = t.replace(/\\\\/g, "\\"), y = {
      isNode: n,
      label: Oi(t) ? f : d,
      labelStyle: r.replace("fill:", "color:")
    };
    return await cf(e, y, l, s, c, h);
  } else {
    const u = er(t.replace(/<br\s*\/?>/g, "<br/>")), d = a ? sf(u.replace("<br>", "<br/>"), h) : rf(u), f = df(
      l,
      e,
      d,
      t ? c : !1,
      !n
    );
    if (n) {
      /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
      const y = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      Tt(f).attr("style", y);
    } else {
      const y = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      Tt(f).select("rect").attr("style", y.replace(/background:/g, "fill:"));
      const m = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      Tt(f).select("text").attr("style", m);
    }
    return i ? Tt(f).selectAll("tspan.text-outer-tspan").classed("title-row", !0) : Tt(f).selectAll("tspan.text-outer-tspan").classed("row", !0), f;
  }
}, "createText");
function $o(e, t, r) {
  if (e && e.length) {
    const [i, s] = t, o = Math.PI / 180 * r, a = Math.cos(o), n = Math.sin(o);
    for (const l of e) {
      const [c, h] = l;
      l[0] = (c - i) * a - (h - s) * n + i, l[1] = (c - i) * n + (h - s) * a + s;
    }
  }
}
function c2(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function u2(e, t, r, i = 1) {
  const s = r, o = Math.max(t, 0.1), a = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, n = [0, 0];
  if (s) for (const c of a) $o(c, n, s);
  const l = (function(c, h, u) {
    const d = [];
    for (const k of c) {
      const S = [...k];
      c2(S[0], S[S.length - 1]) || S.push([S[0][0], S[0][1]]), S.length > 2 && d.push(S);
    }
    const f = [];
    h = Math.max(h, 0.1);
    const y = [];
    for (const k of d) for (let S = 0; S < k.length - 1; S++) {
      const T = k[S], _ = k[S + 1];
      if (T[1] !== _[1]) {
        const L = Math.min(T[1], _[1]);
        y.push({ ymin: L, ymax: Math.max(T[1], _[1]), x: L === T[1] ? T[0] : _[0], islope: (_[0] - T[0]) / (_[1] - T[1]) });
      }
    }
    if (y.sort(((k, S) => k.ymin < S.ymin ? -1 : k.ymin > S.ymin ? 1 : k.x < S.x ? -1 : k.x > S.x ? 1 : k.ymax === S.ymax ? 0 : (k.ymax - S.ymax) / Math.abs(k.ymax - S.ymax))), !y.length) return f;
    let m = [], x = y[0].ymin, C = 0;
    for (; m.length || y.length; ) {
      if (y.length) {
        let k = -1;
        for (let S = 0; S < y.length && !(y[S].ymin > x); S++) k = S;
        y.splice(0, k + 1).forEach(((S) => {
          m.push({ s: x, edge: S });
        }));
      }
      if (m = m.filter(((k) => !(k.edge.ymax <= x))), m.sort(((k, S) => k.edge.x === S.edge.x ? 0 : (k.edge.x - S.edge.x) / Math.abs(k.edge.x - S.edge.x))), (u !== 1 || C % h == 0) && m.length > 1) for (let k = 0; k < m.length; k += 2) {
        const S = k + 1;
        if (S >= m.length) break;
        const T = m[k].edge, _ = m[S].edge;
        f.push([[Math.round(T.x), x], [Math.round(_.x), x]]);
      }
      x += u, m.forEach(((k) => {
        k.edge.x = k.edge.x + u * k.edge.islope;
      })), C++;
    }
    return f;
  })(a, o, i);
  if (s) {
    for (const c of a) $o(c, n, -s);
    (function(c, h, u) {
      const d = [];
      c.forEach(((f) => d.push(...f))), $o(d, h, u);
    })(l, n, -s);
  }
  return l;
}
function Ji(e, t) {
  var r;
  const i = t.hachureAngle + 90;
  let s = t.hachureGap;
  s < 0 && (s = 4 * t.strokeWidth), s = Math.round(Math.max(s, 0.1));
  let o = 1;
  return t.roughness >= 1 && (((r = t.randomizer) === null || r === void 0 ? void 0 : r.next()) || Math.random()) > 0.7 && (o = s), u2(e, s, i, o || 1);
}
class jn {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    return this._fillPolygons(t, r);
  }
  _fillPolygons(t, r) {
    const i = Ji(t, r);
    return { type: "fillSketch", ops: this.renderLines(i, r) };
  }
  renderLines(t, r) {
    const i = [];
    for (const s of t) i.push(...this.helper.doubleLineOps(s[0][0], s[0][1], s[1][0], s[1][1], r));
    return i;
  }
}
function uo(e) {
  const t = e[0], r = e[1];
  return Math.sqrt(Math.pow(t[0] - r[0], 2) + Math.pow(t[1] - r[1], 2));
}
class d2 extends jn {
  fillPolygons(t, r) {
    let i = r.hachureGap;
    i < 0 && (i = 4 * r.strokeWidth), i = Math.max(i, 0.1);
    const s = Ji(t, Object.assign({}, r, { hachureGap: i })), o = Math.PI / 180 * r.hachureAngle, a = [], n = 0.5 * i * Math.cos(o), l = 0.5 * i * Math.sin(o);
    for (const [c, h] of s) uo([c, h]) && a.push([[c[0] - n, c[1] + l], [...h]], [[c[0] + n, c[1] - l], [...h]]);
    return { type: "fillSketch", ops: this.renderLines(a, r) };
  }
}
class f2 extends jn {
  fillPolygons(t, r) {
    const i = this._fillPolygons(t, r), s = Object.assign({}, r, { hachureAngle: r.hachureAngle + 90 }), o = this._fillPolygons(t, s);
    return i.ops = i.ops.concat(o.ops), i;
  }
}
class p2 {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Ji(t, r = Object.assign({}, r, { hachureAngle: 0 }));
    return this.dotsOnLines(i, r);
  }
  dotsOnLines(t, r) {
    const i = [];
    let s = r.hachureGap;
    s < 0 && (s = 4 * r.strokeWidth), s = Math.max(s, 0.1);
    let o = r.fillWeight;
    o < 0 && (o = r.strokeWidth / 2);
    const a = s / 4;
    for (const n of t) {
      const l = uo(n), c = l / s, h = Math.ceil(c) - 1, u = l - h * s, d = (n[0][0] + n[1][0]) / 2 - s / 4, f = Math.min(n[0][1], n[1][1]);
      for (let y = 0; y < h; y++) {
        const m = f + u + y * s, x = d - a + 2 * Math.random() * a, C = m - a + 2 * Math.random() * a, k = this.helper.ellipse(x, C, o, o, r);
        i.push(...k.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class g2 {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Ji(t, r);
    return { type: "fillSketch", ops: this.dashedLine(i, r) };
  }
  dashedLine(t, r) {
    const i = r.dashOffset < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashOffset, s = r.dashGap < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashGap, o = [];
    return t.forEach(((a) => {
      const n = uo(a), l = Math.floor(n / (i + s)), c = (n + s - l * (i + s)) / 2;
      let h = a[0], u = a[1];
      h[0] > u[0] && (h = a[1], u = a[0]);
      const d = Math.atan((u[1] - h[1]) / (u[0] - h[0]));
      for (let f = 0; f < l; f++) {
        const y = f * (i + s), m = y + i, x = [h[0] + y * Math.cos(d) + c * Math.cos(d), h[1] + y * Math.sin(d) + c * Math.sin(d)], C = [h[0] + m * Math.cos(d) + c * Math.cos(d), h[1] + m * Math.sin(d) + c * Math.sin(d)];
        o.push(...this.helper.doubleLineOps(x[0], x[1], C[0], C[1], r));
      }
    })), o;
  }
}
class y2 {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap, s = r.zigzagOffset < 0 ? i : r.zigzagOffset, o = Ji(t, r = Object.assign({}, r, { hachureGap: i + s }));
    return { type: "fillSketch", ops: this.zigzagLines(o, s, r) };
  }
  zigzagLines(t, r, i) {
    const s = [];
    return t.forEach(((o) => {
      const a = uo(o), n = Math.round(a / (2 * r));
      let l = o[0], c = o[1];
      l[0] > c[0] && (l = o[1], c = o[0]);
      const h = Math.atan((c[1] - l[1]) / (c[0] - l[0]));
      for (let u = 0; u < n; u++) {
        const d = 2 * u * r, f = 2 * (u + 1) * r, y = Math.sqrt(2 * Math.pow(r, 2)), m = [l[0] + d * Math.cos(h), l[1] + d * Math.sin(h)], x = [l[0] + f * Math.cos(h), l[1] + f * Math.sin(h)], C = [m[0] + y * Math.cos(h + Math.PI / 4), m[1] + y * Math.sin(h + Math.PI / 4)];
        s.push(...this.helper.doubleLineOps(m[0], m[1], C[0], C[1], i), ...this.helper.doubleLineOps(C[0], C[1], x[0], x[1], i));
      }
    })), s;
  }
}
const te = {};
class m2 {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const x2 = 0, Oo = 1, Fh = 2, as = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function Do(e, t) {
  return e.type === t;
}
function Un(e) {
  const t = [], r = (function(a) {
    const n = new Array();
    for (; a !== ""; ) if (a.match(/^([ \t\r\n,]+)/)) a = a.substr(RegExp.$1.length);
    else if (a.match(/^([aAcChHlLmMqQsStTvVzZ])/)) n[n.length] = { type: x2, text: RegExp.$1 }, a = a.substr(RegExp.$1.length);
    else {
      if (!a.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      n[n.length] = { type: Oo, text: `${parseFloat(RegExp.$1)}` }, a = a.substr(RegExp.$1.length);
    }
    return n[n.length] = { type: Fh, text: "" }, n;
  })(e);
  let i = "BOD", s = 0, o = r[s];
  for (; !Do(o, Fh); ) {
    let a = 0;
    const n = [];
    if (i === "BOD") {
      if (o.text !== "M" && o.text !== "m") return Un("M0,0" + e);
      s++, a = as[o.text], i = o.text;
    } else Do(o, Oo) ? a = as[i] : (s++, a = as[o.text], i = o.text);
    if (!(s + a < r.length)) throw new Error("Path data ended short");
    for (let l = s; l < s + a; l++) {
      const c = r[l];
      if (!Do(c, Oo)) throw new Error("Param not a number: " + i + "," + c.text);
      n[n.length] = +c.text;
    }
    if (typeof as[i] != "number") throw new Error("Bad segment: " + i);
    {
      const l = { key: i, data: n };
      t.push(l), s += a, o = r[s], i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return t;
}
function pf(e) {
  let t = 0, r = 0, i = 0, s = 0;
  const o = [];
  for (const { key: a, data: n } of e) switch (a) {
    case "M":
      o.push({ key: "M", data: [...n] }), [t, r] = n, [i, s] = n;
      break;
    case "m":
      t += n[0], r += n[1], o.push({ key: "M", data: [t, r] }), i = t, s = r;
      break;
    case "L":
      o.push({ key: "L", data: [...n] }), [t, r] = n;
      break;
    case "l":
      t += n[0], r += n[1], o.push({ key: "L", data: [t, r] });
      break;
    case "C":
      o.push({ key: "C", data: [...n] }), t = n[4], r = n[5];
      break;
    case "c": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      o.push({ key: "C", data: l }), t = l[4], r = l[5];
      break;
    }
    case "Q":
      o.push({ key: "Q", data: [...n] }), t = n[2], r = n[3];
      break;
    case "q": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      o.push({ key: "Q", data: l }), t = l[2], r = l[3];
      break;
    }
    case "A":
      o.push({ key: "A", data: [...n] }), t = n[5], r = n[6];
      break;
    case "a":
      t += n[5], r += n[6], o.push({ key: "A", data: [n[0], n[1], n[2], n[3], n[4], t, r] });
      break;
    case "H":
      o.push({ key: "H", data: [...n] }), t = n[0];
      break;
    case "h":
      t += n[0], o.push({ key: "H", data: [t] });
      break;
    case "V":
      o.push({ key: "V", data: [...n] }), r = n[0];
      break;
    case "v":
      r += n[0], o.push({ key: "V", data: [r] });
      break;
    case "S":
      o.push({ key: "S", data: [...n] }), t = n[2], r = n[3];
      break;
    case "s": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      o.push({ key: "S", data: l }), t = l[2], r = l[3];
      break;
    }
    case "T":
      o.push({ key: "T", data: [...n] }), t = n[0], r = n[1];
      break;
    case "t":
      t += n[0], r += n[1], o.push({ key: "T", data: [t, r] });
      break;
    case "Z":
    case "z":
      o.push({ key: "Z", data: [] }), t = i, r = s;
  }
  return o;
}
function gf(e) {
  const t = [];
  let r = "", i = 0, s = 0, o = 0, a = 0, n = 0, l = 0;
  for (const { key: c, data: h } of e) {
    switch (c) {
      case "M":
        t.push({ key: "M", data: [...h] }), [i, s] = h, [o, a] = h;
        break;
      case "C":
        t.push({ key: "C", data: [...h] }), i = h[4], s = h[5], n = h[2], l = h[3];
        break;
      case "L":
        t.push({ key: "L", data: [...h] }), [i, s] = h;
        break;
      case "H":
        i = h[0], t.push({ key: "L", data: [i, s] });
        break;
      case "V":
        s = h[0], t.push({ key: "L", data: [i, s] });
        break;
      case "S": {
        let u = 0, d = 0;
        r === "C" || r === "S" ? (u = i + (i - n), d = s + (s - l)) : (u = i, d = s), t.push({ key: "C", data: [u, d, ...h] }), n = h[0], l = h[1], i = h[2], s = h[3];
        break;
      }
      case "T": {
        const [u, d] = h;
        let f = 0, y = 0;
        r === "Q" || r === "T" ? (f = i + (i - n), y = s + (s - l)) : (f = i, y = s);
        const m = i + 2 * (f - i) / 3, x = s + 2 * (y - s) / 3, C = u + 2 * (f - u) / 3, k = d + 2 * (y - d) / 3;
        t.push({ key: "C", data: [m, x, C, k, u, d] }), n = f, l = y, i = u, s = d;
        break;
      }
      case "Q": {
        const [u, d, f, y] = h, m = i + 2 * (u - i) / 3, x = s + 2 * (d - s) / 3, C = f + 2 * (u - f) / 3, k = y + 2 * (d - y) / 3;
        t.push({ key: "C", data: [m, x, C, k, f, y] }), n = u, l = d, i = f, s = y;
        break;
      }
      case "A": {
        const u = Math.abs(h[0]), d = Math.abs(h[1]), f = h[2], y = h[3], m = h[4], x = h[5], C = h[6];
        u === 0 || d === 0 ? (t.push({ key: "C", data: [i, s, x, C, x, C] }), i = x, s = C) : (i !== x || s !== C) && (yf(i, s, x, C, u, d, f, y, m).forEach((function(k) {
          t.push({ key: "C", data: k });
        })), i = x, s = C);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = o, s = a;
    }
    r = c;
  }
  return t;
}
function di(e, t, r) {
  return [e * Math.cos(r) - t * Math.sin(r), e * Math.sin(r) + t * Math.cos(r)];
}
function yf(e, t, r, i, s, o, a, n, l, c) {
  const h = (u = a, Math.PI * u / 180);
  var u;
  let d = [], f = 0, y = 0, m = 0, x = 0;
  if (c) [f, y, m, x] = c;
  else {
    [e, t] = di(e, t, -h), [r, i] = di(r, i, -h);
    const H = (e - r) / 2, E = (t - i) / 2;
    let O = H * H / (s * s) + E * E / (o * o);
    O > 1 && (O = Math.sqrt(O), s *= O, o *= O);
    const B = s * s, R = o * o, $ = B * R - B * E * E - R * H * H, J = B * E * E + R * H * H, Z = (n === l ? -1 : 1) * Math.sqrt(Math.abs($ / J));
    m = Z * s * E / o + (e + r) / 2, x = Z * -o * H / s + (t + i) / 2, f = Math.asin(parseFloat(((t - x) / o).toFixed(9))), y = Math.asin(parseFloat(((i - x) / o).toFixed(9))), e < m && (f = Math.PI - f), r < m && (y = Math.PI - y), f < 0 && (f = 2 * Math.PI + f), y < 0 && (y = 2 * Math.PI + y), l && f > y && (f -= 2 * Math.PI), !l && y > f && (y -= 2 * Math.PI);
  }
  let C = y - f;
  if (Math.abs(C) > 120 * Math.PI / 180) {
    const H = y, E = r, O = i;
    y = l && y > f ? f + 120 * Math.PI / 180 * 1 : f + 120 * Math.PI / 180 * -1, d = yf(r = m + s * Math.cos(y), i = x + o * Math.sin(y), E, O, s, o, a, 0, l, [y, H, m, x]);
  }
  C = y - f;
  const k = Math.cos(f), S = Math.sin(f), T = Math.cos(y), _ = Math.sin(y), L = Math.tan(C / 4), M = 4 / 3 * s * L, v = 4 / 3 * o * L, X = [e, t], z = [e + M * S, t - v * k], I = [r + M * _, i - v * T], et = [r, i];
  if (z[0] = 2 * X[0] - z[0], z[1] = 2 * X[1] - z[1], c) return [z, I, et].concat(d);
  {
    d = [z, I, et].concat(d);
    const H = [];
    for (let E = 0; E < d.length; E += 3) {
      const O = di(d[E][0], d[E][1], h), B = di(d[E + 1][0], d[E + 1][1], h), R = di(d[E + 2][0], d[E + 2][1], h);
      H.push([O[0], O[1], B[0], B[1], R[0], R[1]]);
    }
    return H;
  }
}
const C2 = { randOffset: function(e, t) {
  return yt(e, t);
}, randOffsetWithRange: function(e, t, r) {
  return Us(e, t, r);
}, ellipse: function(e, t, r, i, s) {
  const o = xf(r, i, s);
  return Wa(e, t, s, o).opset;
}, doubleLineOps: function(e, t, r, i, s) {
  return rr(e, t, r, i, s, !0);
} };
function mf(e, t, r, i, s) {
  return { type: "path", ops: rr(e, t, r, i, s) };
}
function Ss(e, t, r) {
  const i = (e || []).length;
  if (i > 2) {
    const s = [];
    for (let o = 0; o < i - 1; o++) s.push(...rr(e[o][0], e[o][1], e[o + 1][0], e[o + 1][1], r));
    return t && s.push(...rr(e[i - 1][0], e[i - 1][1], e[0][0], e[0][1], r)), { type: "path", ops: s };
  }
  return i === 2 ? mf(e[0][0], e[0][1], e[1][0], e[1][1], r) : { type: "path", ops: [] };
}
function b2(e, t, r, i, s) {
  return (function(o, a) {
    return Ss(o, !0, a);
  })([[e, t], [e + r, t], [e + r, t + i], [e, t + i]], s);
}
function Mh(e, t) {
  if (e.length) {
    const r = typeof e[0][0] == "number" ? [e] : e, i = ns(r[0], 1 * (1 + 0.2 * t.roughness), t), s = t.disableMultiStroke ? [] : ns(r[0], 1.5 * (1 + 0.22 * t.roughness), $h(t));
    for (let o = 1; o < r.length; o++) {
      const a = r[o];
      if (a.length) {
        const n = ns(a, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : ns(a, 1.5 * (1 + 0.22 * t.roughness), $h(t));
        for (const c of n) c.op !== "move" && i.push(c);
        for (const c of l) c.op !== "move" && s.push(c);
      }
    }
    return { type: "path", ops: i.concat(s) };
  }
  return { type: "path", ops: [] };
}
function xf(e, t, r) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), s = Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i)), o = 2 * Math.PI / s;
  let a = Math.abs(e / 2), n = Math.abs(t / 2);
  const l = 1 - r.curveFitting;
  return a += yt(a * l, r), n += yt(n * l, r), { increment: o, rx: a, ry: n };
}
function Wa(e, t, r, i) {
  const [s, o] = Oh(i.increment, e, t, i.rx, i.ry, 1, i.increment * Us(0.1, Us(0.4, 1, r), r), r);
  let a = Gs(s, null, r);
  if (!r.disableMultiStroke && r.roughness !== 0) {
    const [n] = Oh(i.increment, e, t, i.rx, i.ry, 1.5, 0, r), l = Gs(n, null, r);
    a = a.concat(l);
  }
  return { estimatedPoints: o, opset: { type: "path", ops: a } };
}
function Ah(e, t, r, i, s, o, a, n, l) {
  const c = e, h = t;
  let u = Math.abs(r / 2), d = Math.abs(i / 2);
  u += yt(0.01 * u, l), d += yt(0.01 * d, l);
  let f = s, y = o;
  for (; f < 0; ) f += 2 * Math.PI, y += 2 * Math.PI;
  y - f > 2 * Math.PI && (f = 0, y = 2 * Math.PI);
  const m = 2 * Math.PI / l.curveStepCount, x = Math.min(m / 2, (y - f) / 2), C = Dh(x, c, h, u, d, f, y, 1, l);
  if (!l.disableMultiStroke) {
    const k = Dh(x, c, h, u, d, f, y, 1.5, l);
    C.push(...k);
  }
  return a && (n ? C.push(...rr(c, h, c + u * Math.cos(f), h + d * Math.sin(f), l), ...rr(c, h, c + u * Math.cos(y), h + d * Math.sin(y), l)) : C.push({ op: "lineTo", data: [c, h] }, { op: "lineTo", data: [c + u * Math.cos(f), h + d * Math.sin(f)] })), { type: "path", ops: C };
}
function Eh(e, t) {
  const r = gf(pf(Un(e))), i = [];
  let s = [0, 0], o = [0, 0];
  for (const { key: a, data: n } of r) switch (a) {
    case "M":
      o = [n[0], n[1]], s = [n[0], n[1]];
      break;
    case "L":
      i.push(...rr(o[0], o[1], n[0], n[1], t)), o = [n[0], n[1]];
      break;
    case "C": {
      const [l, c, h, u, d, f] = n;
      i.push(...k2(l, c, h, u, d, f, o, t)), o = [d, f];
      break;
    }
    case "Z":
      i.push(...rr(o[0], o[1], s[0], s[1], t)), o = [s[0], s[1]];
  }
  return { type: "path", ops: i };
}
function Po(e, t) {
  const r = [];
  for (const i of e) if (i.length) {
    const s = t.maxRandomnessOffset || 0, o = i.length;
    if (o > 2) {
      r.push({ op: "move", data: [i[0][0] + yt(s, t), i[0][1] + yt(s, t)] });
      for (let a = 1; a < o; a++) r.push({ op: "lineTo", data: [i[a][0] + yt(s, t), i[a][1] + yt(s, t)] });
    }
  }
  return { type: "fillPath", ops: r };
}
function Er(e, t) {
  return (function(r, i) {
    let s = r.fillStyle || "hachure";
    if (!te[s]) switch (s) {
      case "zigzag":
        te[s] || (te[s] = new d2(i));
        break;
      case "cross-hatch":
        te[s] || (te[s] = new f2(i));
        break;
      case "dots":
        te[s] || (te[s] = new p2(i));
        break;
      case "dashed":
        te[s] || (te[s] = new g2(i));
        break;
      case "zigzag-line":
        te[s] || (te[s] = new y2(i));
        break;
      default:
        s = "hachure", te[s] || (te[s] = new jn(i));
    }
    return te[s];
  })(t, C2).fillPolygons(e, t);
}
function $h(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function Cf(e) {
  return e.randomizer || (e.randomizer = new m2(e.seed || 0)), e.randomizer.next();
}
function Us(e, t, r, i = 1) {
  return r.roughness * i * (Cf(r) * (t - e) + e);
}
function yt(e, t, r = 1) {
  return Us(-e, e, t, r);
}
function rr(e, t, r, i, s, o = !1) {
  const a = o ? s.disableMultiStrokeFill : s.disableMultiStroke, n = za(e, t, r, i, s, !0, !1);
  if (a) return n;
  const l = za(e, t, r, i, s, !0, !0);
  return n.concat(l);
}
function za(e, t, r, i, s, o, a) {
  const n = Math.pow(e - r, 2) + Math.pow(t - i, 2), l = Math.sqrt(n);
  let c = 1;
  c = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
  let h = s.maxRandomnessOffset || 0;
  h * h * 100 > n && (h = l / 10);
  const u = h / 2, d = 0.2 + 0.2 * Cf(s);
  let f = s.bowing * s.maxRandomnessOffset * (i - t) / 200, y = s.bowing * s.maxRandomnessOffset * (e - r) / 200;
  f = yt(f, s, c), y = yt(y, s, c);
  const m = [], x = () => yt(u, s, c), C = () => yt(h, s, c), k = s.preserveVertices;
  return a ? m.push({ op: "move", data: [e + (k ? 0 : x()), t + (k ? 0 : x())] }) : m.push({ op: "move", data: [e + (k ? 0 : yt(h, s, c)), t + (k ? 0 : yt(h, s, c))] }), a ? m.push({ op: "bcurveTo", data: [f + e + (r - e) * d + x(), y + t + (i - t) * d + x(), f + e + 2 * (r - e) * d + x(), y + t + 2 * (i - t) * d + x(), r + (k ? 0 : x()), i + (k ? 0 : x())] }) : m.push({ op: "bcurveTo", data: [f + e + (r - e) * d + C(), y + t + (i - t) * d + C(), f + e + 2 * (r - e) * d + C(), y + t + 2 * (i - t) * d + C(), r + (k ? 0 : C()), i + (k ? 0 : C())] }), m;
}
function ns(e, t, r) {
  if (!e.length) return [];
  const i = [];
  i.push([e[0][0] + yt(t, r), e[0][1] + yt(t, r)]), i.push([e[0][0] + yt(t, r), e[0][1] + yt(t, r)]);
  for (let s = 1; s < e.length; s++) i.push([e[s][0] + yt(t, r), e[s][1] + yt(t, r)]), s === e.length - 1 && i.push([e[s][0] + yt(t, r), e[s][1] + yt(t, r)]);
  return Gs(i, null, r);
}
function Gs(e, t, r) {
  const i = e.length, s = [];
  if (i > 3) {
    const o = [], a = 1 - r.curveTightness;
    s.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let n = 1; n + 2 < i; n++) {
      const l = e[n];
      o[0] = [l[0], l[1]], o[1] = [l[0] + (a * e[n + 1][0] - a * e[n - 1][0]) / 6, l[1] + (a * e[n + 1][1] - a * e[n - 1][1]) / 6], o[2] = [e[n + 1][0] + (a * e[n][0] - a * e[n + 2][0]) / 6, e[n + 1][1] + (a * e[n][1] - a * e[n + 2][1]) / 6], o[3] = [e[n + 1][0], e[n + 1][1]], s.push({ op: "bcurveTo", data: [o[1][0], o[1][1], o[2][0], o[2][1], o[3][0], o[3][1]] });
    }
  } else i === 3 ? (s.push({ op: "move", data: [e[1][0], e[1][1]] }), s.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : i === 2 && s.push(...za(e[0][0], e[0][1], e[1][0], e[1][1], r, !0, !0));
  return s;
}
function Oh(e, t, r, i, s, o, a, n) {
  const l = [], c = [];
  if (n.roughness === 0) {
    e /= 4, c.push([t + i * Math.cos(-e), r + s * Math.sin(-e)]);
    for (let h = 0; h <= 2 * Math.PI; h += e) {
      const u = [t + i * Math.cos(h), r + s * Math.sin(h)];
      l.push(u), c.push(u);
    }
    c.push([t + i * Math.cos(0), r + s * Math.sin(0)]), c.push([t + i * Math.cos(e), r + s * Math.sin(e)]);
  } else {
    const h = yt(0.5, n) - Math.PI / 2;
    c.push([yt(o, n) + t + 0.9 * i * Math.cos(h - e), yt(o, n) + r + 0.9 * s * Math.sin(h - e)]);
    const u = 2 * Math.PI + h - 0.01;
    for (let d = h; d < u; d += e) {
      const f = [yt(o, n) + t + i * Math.cos(d), yt(o, n) + r + s * Math.sin(d)];
      l.push(f), c.push(f);
    }
    c.push([yt(o, n) + t + i * Math.cos(h + 2 * Math.PI + 0.5 * a), yt(o, n) + r + s * Math.sin(h + 2 * Math.PI + 0.5 * a)]), c.push([yt(o, n) + t + 0.98 * i * Math.cos(h + a), yt(o, n) + r + 0.98 * s * Math.sin(h + a)]), c.push([yt(o, n) + t + 0.9 * i * Math.cos(h + 0.5 * a), yt(o, n) + r + 0.9 * s * Math.sin(h + 0.5 * a)]);
  }
  return [c, l];
}
function Dh(e, t, r, i, s, o, a, n, l) {
  const c = o + yt(0.1, l), h = [];
  h.push([yt(n, l) + t + 0.9 * i * Math.cos(c - e), yt(n, l) + r + 0.9 * s * Math.sin(c - e)]);
  for (let u = c; u <= a; u += e) h.push([yt(n, l) + t + i * Math.cos(u), yt(n, l) + r + s * Math.sin(u)]);
  return h.push([t + i * Math.cos(a), r + s * Math.sin(a)]), h.push([t + i * Math.cos(a), r + s * Math.sin(a)]), Gs(h, null, l);
}
function k2(e, t, r, i, s, o, a, n) {
  const l = [], c = [n.maxRandomnessOffset || 1, (n.maxRandomnessOffset || 1) + 0.3];
  let h = [0, 0];
  const u = n.disableMultiStroke ? 1 : 2, d = n.preserveVertices;
  for (let f = 0; f < u; f++) f === 0 ? l.push({ op: "move", data: [a[0], a[1]] }) : l.push({ op: "move", data: [a[0] + (d ? 0 : yt(c[0], n)), a[1] + (d ? 0 : yt(c[0], n))] }), h = d ? [s, o] : [s + yt(c[f], n), o + yt(c[f], n)], l.push({ op: "bcurveTo", data: [e + yt(c[f], n), t + yt(c[f], n), r + yt(c[f], n), i + yt(c[f], n), h[0], h[1]] });
  return l;
}
function fi(e) {
  return [...e];
}
function Ph(e, t = 0) {
  const r = e.length;
  if (r < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (r === 3) i.push(fi(e[0]), fi(e[1]), fi(e[2]), fi(e[2]));
  else {
    const s = [];
    s.push(e[0], e[0]);
    for (let n = 1; n < e.length; n++) s.push(e[n]), n === e.length - 1 && s.push(e[n]);
    const o = [], a = 1 - t;
    i.push(fi(s[0]));
    for (let n = 1; n + 2 < s.length; n++) {
      const l = s[n];
      o[0] = [l[0], l[1]], o[1] = [l[0] + (a * s[n + 1][0] - a * s[n - 1][0]) / 6, l[1] + (a * s[n + 1][1] - a * s[n - 1][1]) / 6], o[2] = [s[n + 1][0] + (a * s[n][0] - a * s[n + 2][0]) / 6, s[n + 1][1] + (a * s[n][1] - a * s[n + 2][1]) / 6], o[3] = [s[n + 1][0], s[n + 1][1]], i.push(o[1], o[2], o[3]);
    }
  }
  return i;
}
function Ts(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function w2(e, t, r) {
  const i = Ts(t, r);
  if (i === 0) return Ts(e, t);
  let s = ((e[0] - t[0]) * (r[0] - t[0]) + (e[1] - t[1]) * (r[1] - t[1])) / i;
  return s = Math.max(0, Math.min(1, s)), Ts(e, lr(t, r, s));
}
function lr(e, t, r) {
  return [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r];
}
function Ha(e, t, r, i) {
  const s = i || [];
  if ((function(n, l) {
    const c = n[l + 0], h = n[l + 1], u = n[l + 2], d = n[l + 3];
    let f = 3 * h[0] - 2 * c[0] - d[0];
    f *= f;
    let y = 3 * h[1] - 2 * c[1] - d[1];
    y *= y;
    let m = 3 * u[0] - 2 * d[0] - c[0];
    m *= m;
    let x = 3 * u[1] - 2 * d[1] - c[1];
    return x *= x, f < m && (f = m), y < x && (y = x), f + y;
  })(e, t) < r) {
    const n = e[t + 0];
    s.length ? (o = s[s.length - 1], a = n, Math.sqrt(Ts(o, a)) > 1 && s.push(n)) : s.push(n), s.push(e[t + 3]);
  } else {
    const l = e[t + 0], c = e[t + 1], h = e[t + 2], u = e[t + 3], d = lr(l, c, 0.5), f = lr(c, h, 0.5), y = lr(h, u, 0.5), m = lr(d, f, 0.5), x = lr(f, y, 0.5), C = lr(m, x, 0.5);
    Ha([l, d, m, C], 0, r, s), Ha([C, x, y, u], 0, r, s);
  }
  var o, a;
  return s;
}
function S2(e, t) {
  return Xs(e, 0, e.length, t);
}
function Xs(e, t, r, i, s) {
  const o = s || [], a = e[t], n = e[r - 1];
  let l = 0, c = 1;
  for (let h = t + 1; h < r - 1; ++h) {
    const u = w2(e[h], a, n);
    u > l && (l = u, c = h);
  }
  return Math.sqrt(l) > i ? (Xs(e, t, c + 1, i, o), Xs(e, c, r, i, o)) : (o.length || o.push(a), o.push(n)), o;
}
function Io(e, t = 0.15, r) {
  const i = [], s = (e.length - 1) / 3;
  for (let o = 0; o < s; o++)
    Ha(e, 3 * o, t, i);
  return r && r > 0 ? Xs(i, 0, i.length, r) : i;
}
const se = "none";
class Vs {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, r, i) {
    return { shape: t, sets: r || [], options: i || this.defaultOptions };
  }
  line(t, r, i, s, o) {
    const a = this._o(o);
    return this._d("line", [mf(t, r, i, s, a)], a);
  }
  rectangle(t, r, i, s, o) {
    const a = this._o(o), n = [], l = b2(t, r, i, s, a);
    if (a.fill) {
      const c = [[t, r], [t + i, r], [t + i, r + s], [t, r + s]];
      a.fillStyle === "solid" ? n.push(Po([c], a)) : n.push(Er([c], a));
    }
    return a.stroke !== se && n.push(l), this._d("rectangle", n, a);
  }
  ellipse(t, r, i, s, o) {
    const a = this._o(o), n = [], l = xf(i, s, a), c = Wa(t, r, a, l);
    if (a.fill) if (a.fillStyle === "solid") {
      const h = Wa(t, r, a, l).opset;
      h.type = "fillPath", n.push(h);
    } else n.push(Er([c.estimatedPoints], a));
    return a.stroke !== se && n.push(c.opset), this._d("ellipse", n, a);
  }
  circle(t, r, i, s) {
    const o = this.ellipse(t, r, i, i, s);
    return o.shape = "circle", o;
  }
  linearPath(t, r) {
    const i = this._o(r);
    return this._d("linearPath", [Ss(t, !1, i)], i);
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const c = this._o(l), h = [], u = Ah(t, r, i, s, o, a, n, !0, c);
    if (n && c.fill) if (c.fillStyle === "solid") {
      const d = Object.assign({}, c);
      d.disableMultiStroke = !0;
      const f = Ah(t, r, i, s, o, a, !0, !1, d);
      f.type = "fillPath", h.push(f);
    } else h.push((function(d, f, y, m, x, C, k) {
      const S = d, T = f;
      let _ = Math.abs(y / 2), L = Math.abs(m / 2);
      _ += yt(0.01 * _, k), L += yt(0.01 * L, k);
      let M = x, v = C;
      for (; M < 0; ) M += 2 * Math.PI, v += 2 * Math.PI;
      v - M > 2 * Math.PI && (M = 0, v = 2 * Math.PI);
      const X = (v - M) / k.curveStepCount, z = [];
      for (let I = M; I <= v; I += X) z.push([S + _ * Math.cos(I), T + L * Math.sin(I)]);
      return z.push([S + _ * Math.cos(v), T + L * Math.sin(v)]), z.push([S, T]), Er([z], k);
    })(t, r, i, s, o, a, c));
    return c.stroke !== se && h.push(u), this._d("arc", h, c);
  }
  curve(t, r) {
    const i = this._o(r), s = [], o = Mh(t, i);
    if (i.fill && i.fill !== se) if (i.fillStyle === "solid") {
      const a = Mh(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      s.push({ type: "fillPath", ops: this._mergedShape(a.ops) });
    } else {
      const a = [], n = t;
      if (n.length) {
        const l = typeof n[0][0] == "number" ? [n] : n;
        for (const c of l) c.length < 3 ? a.push(...c) : c.length === 3 ? a.push(...Io(Ph([c[0], c[0], c[1], c[2]]), 10, (1 + i.roughness) / 2)) : a.push(...Io(Ph(c), 10, (1 + i.roughness) / 2));
      }
      a.length && s.push(Er([a], i));
    }
    return i.stroke !== se && s.push(o), this._d("curve", s, i);
  }
  polygon(t, r) {
    const i = this._o(r), s = [], o = Ss(t, !0, i);
    return i.fill && (i.fillStyle === "solid" ? s.push(Po([t], i)) : s.push(Er([t], i))), i.stroke !== se && s.push(o), this._d("polygon", s, i);
  }
  path(t, r) {
    const i = this._o(r), s = [];
    if (!t) return this._d("path", s, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const o = i.fill && i.fill !== "transparent" && i.fill !== se, a = i.stroke !== se, n = !!(i.simplification && i.simplification < 1), l = (function(h, u, d) {
      const f = gf(pf(Un(h))), y = [];
      let m = [], x = [0, 0], C = [];
      const k = () => {
        C.length >= 4 && m.push(...Io(C, u)), C = [];
      }, S = () => {
        k(), m.length && (y.push(m), m = []);
      };
      for (const { key: _, data: L } of f) switch (_) {
        case "M":
          S(), x = [L[0], L[1]], m.push(x);
          break;
        case "L":
          k(), m.push([L[0], L[1]]);
          break;
        case "C":
          if (!C.length) {
            const M = m.length ? m[m.length - 1] : x;
            C.push([M[0], M[1]]);
          }
          C.push([L[0], L[1]]), C.push([L[2], L[3]]), C.push([L[4], L[5]]);
          break;
        case "Z":
          k(), m.push([x[0], x[1]]);
      }
      if (S(), !d) return y;
      const T = [];
      for (const _ of y) {
        const L = S2(_, d);
        L.length && T.push(L);
      }
      return T;
    })(t, 1, n ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), c = Eh(t, i);
    if (o) if (i.fillStyle === "solid") if (l.length === 1) {
      const h = Eh(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      s.push({ type: "fillPath", ops: this._mergedShape(h.ops) });
    } else s.push(Po(l, i));
    else s.push(Er(l, i));
    return a && (n ? l.forEach(((h) => {
      s.push(Ss(h, !1, i));
    })) : s.push(c)), this._d("path", s, i);
  }
  opsToPath(t, r) {
    let i = "";
    for (const s of t.ops) {
      const o = typeof r == "number" && r >= 0 ? s.data.map(((a) => +a.toFixed(r))) : s.data;
      switch (s.op) {
        case "move":
          i += `M${o[0]} ${o[1]} `;
          break;
        case "bcurveTo":
          i += `C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;
          break;
        case "lineTo":
          i += `L${o[0]} ${o[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    const r = t.sets || [], i = t.options || this.defaultOptions, s = [];
    for (const o of r) {
      let a = null;
      switch (o.type) {
        case "path":
          a = { d: this.opsToPath(o), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: se };
          break;
        case "fillPath":
          a = { d: this.opsToPath(o), stroke: se, strokeWidth: 0, fill: i.fill || se };
          break;
        case "fillSketch":
          a = this.fillSketch(o, i);
      }
      a && s.push(a);
    }
    return s;
  }
  fillSketch(t, r) {
    let i = r.fillWeight;
    return i < 0 && (i = r.strokeWidth / 2), { d: this.opsToPath(t), stroke: r.fill || se, strokeWidth: i, fill: se };
  }
  _mergedShape(t) {
    return t.filter(((r, i) => i === 0 || r.op !== "move"));
  }
}
class T2 {
  constructor(t, r) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new Vs(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), s = this.ctx, o = t.options.fixedDecimalPlaceDigits;
    for (const a of r) switch (a.type) {
      case "path":
        s.save(), s.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, s.lineWidth = i.strokeWidth, i.strokeLineDash && s.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (s.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(s, a, o), s.restore();
        break;
      case "fillPath": {
        s.save(), s.fillStyle = i.fill || "";
        const n = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(s, a, o, n), s.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(s, a, i);
    }
  }
  fillSketch(t, r, i) {
    let s = i.fillWeight;
    s < 0 && (s = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = s, this._drawToContext(t, r, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, r, i, s = "nonzero") {
    t.beginPath();
    for (const o of r.ops) {
      const a = typeof i == "number" && i >= 0 ? o.data.map(((n) => +n.toFixed(i))) : o.data;
      switch (o.op) {
        case "move":
          t.moveTo(a[0], a[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          break;
        case "lineTo":
          t.lineTo(a[0], a[1]);
      }
    }
    r.type === "fillPath" ? t.fill(s) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, r, i, s, o) {
    const a = this.gen.line(t, r, i, s, o);
    return this.draw(a), a;
  }
  rectangle(t, r, i, s, o) {
    const a = this.gen.rectangle(t, r, i, s, o);
    return this.draw(a), a;
  }
  ellipse(t, r, i, s, o) {
    const a = this.gen.ellipse(t, r, i, s, o);
    return this.draw(a), a;
  }
  circle(t, r, i, s) {
    const o = this.gen.circle(t, r, i, s);
    return this.draw(o), o;
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i), i;
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i), i;
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const c = this.gen.arc(t, r, i, s, o, a, n, l);
    return this.draw(c), c;
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i), i;
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i), i;
  }
}
const ls = "http://www.w3.org/2000/svg";
class _2 {
  constructor(t, r) {
    this.svg = t, this.gen = new Vs(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), s = this.svg.ownerDocument || window.document, o = s.createElementNS(ls, "g"), a = t.options.fixedDecimalPlaceDigits;
    for (const n of r) {
      let l = null;
      switch (n.type) {
        case "path":
          l = s.createElementNS(ls, "path"), l.setAttribute("d", this.opsToPath(n, a)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          l = s.createElementNS(ls, "path"), l.setAttribute("d", this.opsToPath(n, a)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          l = this.fillSketch(s, n, i);
      }
      l && o.appendChild(l);
    }
    return o;
  }
  fillSketch(t, r, i) {
    let s = i.fillWeight;
    s < 0 && (s = i.strokeWidth / 2);
    const o = t.createElementNS(ls, "path");
    return o.setAttribute("d", this.opsToPath(r, i.fixedDecimalPlaceDigits)), o.setAttribute("stroke", i.fill || ""), o.setAttribute("stroke-width", s + ""), o.setAttribute("fill", "none"), i.fillLineDash && o.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && o.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), o;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, r) {
    return this.gen.opsToPath(t, r);
  }
  line(t, r, i, s, o) {
    const a = this.gen.line(t, r, i, s, o);
    return this.draw(a);
  }
  rectangle(t, r, i, s, o) {
    const a = this.gen.rectangle(t, r, i, s, o);
    return this.draw(a);
  }
  ellipse(t, r, i, s, o) {
    const a = this.gen.ellipse(t, r, i, s, o);
    return this.draw(a);
  }
  circle(t, r, i, s) {
    const o = this.gen.circle(t, r, i, s);
    return this.draw(o);
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i);
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i);
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const c = this.gen.arc(t, r, i, s, o, a, n, l);
    return this.draw(c);
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i);
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i);
  }
}
var st = { canvas: (e, t) => new T2(e, t), svg: (e, t) => new _2(e, t), generator: (e) => new Vs(e), newSeed: () => Vs.newSeed() }, B2 = 1, v2 = 3;
async function Gn(e) {
  const t = e.getElementsByTagName("img");
  if (!t || t.length === 0)
    return;
  const r = !Xn(e);
  await Promise.all(
    [...t].map(
      (i) => new Promise((s) => {
        function o() {
          if (i.style.display = "flex", i.style.flexDirection = "column", r) {
            const a = _t().fontSize ? _t().fontSize : window.getComputedStyle(document.body).fontSize, n = 5, [l = pu.fontSize] = ao(a), c = l * n + "px";
            i.style.minWidth = c, i.style.maxWidth = c;
          } else
            i.style.width = "100%";
          s(i);
        }
        p(o, "setupImage"), setTimeout(() => {
          i.complete && o();
        }), i.addEventListener("error", o), i.addEventListener("load", o);
      })
    )
  );
}
p(Gn, "configureLabelImages");
function Xn(e) {
  return e.nodeType === v2 ? e.textContent?.trim() !== "" : e.nodeType !== B2 || e.tagName.toLowerCase() === "img" ? !1 : [...e.childNodes].some(Xn);
}
p(Xn, "hasTextBesidesImages");
var Ih = 3, L2 = 32, F2 = /* @__PURE__ */ p(async (e, t, r) => {
  const i = _t(), s = e.insert("g").attr("class", r ?? "node default").attr("id", t.domId || t.id), o = s.insert("g").attr("class", "label").attr("style", Wt(t.labelStyle)), n = [
    { text: typeof t.label == "string" ? t.label : t.label?.[0] ?? "", cssClass: "c4-name" },
    { text: t.stereotype, cssClass: "c4-type" },
    ...(t.description ?? []).map((C) => ({ text: C, cssClass: "c4-descr" }))
  ].filter((C) => C.text), l = t.width ? Math.max(t.width - 2 * (t.padding ?? 0), L2) : _t().flowchart?.wrappingWidth ?? 200, h = i.c4?.wrap ?? !0 ? l : Number.POSITIVE_INFINITY, u = await Promise.all(
    n.map(async (C) => {
      const k = o.append("g").attr("class", C.cssClass), S = await Ce(
        k,
        ne(er(C.text ?? ""), i),
        {
          useHtmlLabels: !1,
          markdown: !1,
          isNode: !0,
          width: h,
          style: t.labelStyle
        },
        i
      );
      return Tt(S).selectAll("tspan.text-outer-tspan").attr("text-anchor", "middle"), Tt(S).selectAll("tspan.text-inner-tspan").attr("font-weight", null).attr("font-style", null), { el: k, box: k.node().getBBox() };
    })
  ), d = Math.max(...u.map(({ box: C }) => C.width), 0);
  let f = 0;
  for (const { el: C, box: k } of u)
    C.attr("transform", `translate(${d / 2 - k.x - k.width / 2}, ${f - k.y})`), f += k.height + Ih;
  const y = u.length > 0 ? f - Ih : 0;
  o.insert("rect", ":first-child"), o.attr("transform", `translate(${-d / 2}, ${-y / 2})`);
  const m = o.node().getBBox(), x = (t.padding ?? 0) / 2;
  return { shapeSvg: s, bbox: m, halfPadding: x, label: o };
}, "c4LabelHelper"), ct = /* @__PURE__ */ p(async (e, t, r) => {
  if (t.stereotype !== void 0)
    return F2(e, t, r);
  let i;
  const s = t.useHtmlLabels || Ee(_t()?.htmlLabels);
  r ? i = r : i = "node default";
  const o = e.insert("g").attr("class", i).attr("id", t.domId || t.id), a = o.insert("g").attr("class", "label").attr("style", Wt(t.labelStyle));
  let n;
  t.label === void 0 ? n = "" : n = typeof t.label == "string" ? t.label : t.label[0];
  const l = !!t.icon || !!t.img, c = t.labelType === "markdown", h = await Ce(
    a,
    ne(er(n), _t()),
    {
      useHtmlLabels: s,
      width: t.width || t.wrappingWidth || _t().flowchart?.wrappingWidth,
      classes: c ? "markdown-node-label" : "",
      style: t.labelStyle,
      addSvgBackground: l,
      markdown: c
    },
    _t()
  ), u = (t?.padding ?? 0) / 2;
  let d;
  if (s) {
    const f = h.children[0], y = Tt(h);
    await Gn(f), d = await mr.measure(
      () => f.getBoundingClientRect()
    ), y.attr("width", d.width), y.attr("height", d.height);
  } else
    d = await mr.measure(
      () => h.getBBox()
    );
  return s ? a.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")") : a.attr("transform", "translate(0, " + -d.height / 2 + ")"), t.centerLabel && a.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), a.insert("rect", ":first-child"), { shapeSvg: o, bbox: d, halfPadding: u, label: a };
}, "labelHelper"), Ro = /* @__PURE__ */ p(async (e, t, r) => {
  const i = r.useHtmlLabels ?? Zt(_t()), s = e.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), o = await Ce(s, ne(er(t), _t()), {
    useHtmlLabels: i,
    width: r.width || _t()?.flowchart?.wrappingWidth,
    style: r.labelStyle,
    addSvgBackground: !!r.icon || !!r.img
  }), a = r.padding / 2;
  let n;
  if (Zt(_t())) {
    const l = o.children[0], c = Tt(o);
    n = await mr.measure(
      () => l.getBoundingClientRect()
    ), c.attr("width", n.width), c.attr("height", n.height);
  } else
    n = await mr.measure(
      () => o.getBBox()
    );
  return i ? s.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")") : s.attr("transform", "translate(0, " + -n.height / 2 + ")"), r.centerLabel && s.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")"), s.insert("rect", ":first-child"), { shapeSvg: e, bbox: n, halfPadding: a, label: s };
}, "insertLabel"), at = /* @__PURE__ */ p((e, t, r) => {
  if (r) {
    e.width = r.width, e.height = r.height;
    return;
  }
  const i = t.node().getBBox();
  e.width = i.width, e.height = i.height;
}, "updateNodeBounds"), ut = /* @__PURE__ */ p((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
function Ft(e) {
  const t = e.map((r, i) => `${i === 0 ? "M" : "L"}${r.x},${r.y}`);
  return t.push("Z"), t.join(" ");
}
p(Ft, "createPathFromPoints");
function ir(e, t, r, i, s, o) {
  const a = [], l = r - e, c = i - t, h = l / o, u = 2 * Math.PI / h, d = t + c / 2;
  for (let f = 0; f <= 50; f++) {
    const y = f / 50, m = e + y * l, x = d + s * Math.sin(u * (m - e));
    a.push({ x: m, y: x });
  }
  return a;
}
p(ir, "generateFullSineWavePoints");
function Be(e, t, r, i, s, o) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const d = n + u * h, f = e + r * Math.cos(d), y = t + r * Math.sin(d);
    a.push({ x: -f, y: -y });
  }
  return a;
}
p(Be, "generateCirclePoints");
function Ya(e) {
  const t = Array.from(e.childNodes).filter(
    (l) => l.tagName === "path"
  ), r = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = t.map((l) => l.getAttribute("d")).filter((l) => l !== null).join(" ");
  r.setAttribute("d", i);
  const s = t.find((l) => l.getAttribute("fill") !== "none"), o = t.find((l) => l.getAttribute("stroke") !== "none"), a = /* @__PURE__ */ p((l, c) => l?.getAttribute(c) ?? void 0, "getAttr");
  if (s) {
    const l = {
      fill: a(s, "fill"),
      "fill-opacity": a(s, "fill-opacity") ?? "1"
    };
    Object.entries(l).forEach(([c, h]) => {
      h && r.setAttribute(c, h);
    });
  }
  if (o) {
    const l = {
      stroke: a(o, "stroke"),
      "stroke-width": a(o, "stroke-width") ?? "1",
      "stroke-opacity": a(o, "stroke-opacity") ?? "1"
    };
    Object.entries(l).forEach(([c, h]) => {
      h && r.setAttribute(c, h);
    });
  }
  const n = document.createElementNS("http://www.w3.org/2000/svg", "g");
  return n.appendChild(r), n;
}
p(Ya, "mergePaths");
var M2 = /* @__PURE__ */ p((e, t) => {
  var r = e.x, i = e.y, s = t.x - r, o = t.y - i, a = e.width / 2, n = e.height / 2, l, c;
  return Math.abs(o) * a > Math.abs(s) * n ? (o < 0 && (n = -n), l = o === 0 ? 0 : n * s / o, c = n) : (s < 0 && (a = -a), l = a, c = s === 0 ? 0 : a * o / s), { x: r + l, y: i + c };
}, "intersectRect"), wr = M2, he = /* @__PURE__ */ p((e, t, r, i, s) => [
  "M",
  e + s,
  t,
  // Move to the first point
  "H",
  e + r - s,
  // Draw horizontal line to the beginning of the right corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + r,
  t + s,
  // Draw arc to the right top corner
  "V",
  t + i - s,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + r - s,
  t + i,
  // Draw arc to the right bottom corner
  "H",
  e + s,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e,
  t + i - s,
  // Draw arc to the left bottom corner
  "V",
  t + s,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + s,
  t,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD"), A2 = /* @__PURE__ */ p(async (e, t, r, i = !1, s = !1) => {
  let o = t || "";
  typeof o == "object" && (o = o[0]);
  const a = _t(), n = Zt(a);
  return await Ce(
    e,
    o,
    {
      style: r,
      isTitle: i,
      useHtmlLabels: n,
      markdown: !1,
      isNode: s,
      width: Number.POSITIVE_INFINITY
    },
    a
  );
}, "createLabel"), Ke = A2;
function bf(e, t) {
  return e.intersect(t);
}
p(bf, "intersectNode");
var E2 = bf;
function kf(e, t, r, i) {
  var s = e.x, o = e.y, a = s - i.x, n = o - i.y, l = Math.sqrt(t * t * n * n + r * r * a * a), c = Math.abs(t * r * a / l);
  i.x < s && (c = -c);
  var h = Math.abs(t * r * n / l);
  return i.y < o && (h = -h), { x: s + c, y: o + h };
}
p(kf, "intersectEllipse");
var wf = kf;
function Sf(e, t, r) {
  return wf(e, t, t, r);
}
p(Sf, "intersectCircle");
var $2 = Sf;
function Tf(e, t, r, i) {
  {
    const s = t.y - e.y, o = e.x - t.x, a = t.x * e.y - e.x * t.y, n = s * r.x + o * r.y + a, l = s * i.x + o * i.y + a, c = 1e-6;
    if (n !== 0 && l !== 0 && ja(n, l))
      return;
    const h = i.y - r.y, u = r.x - i.x, d = i.x * r.y - r.x * i.y, f = h * e.x + u * e.y + d, y = h * t.x + u * t.y + d;
    if (Math.abs(f) < c && Math.abs(y) < c && ja(f, y))
      return;
    const m = s * u - h * o;
    if (m === 0)
      return;
    const x = Math.abs(m / 2);
    let C = o * d - u * a;
    const k = C < 0 ? (C - x) / m : (C + x) / m;
    C = h * a - s * d;
    const S = C < 0 ? (C - x) / m : (C + x) / m;
    return { x: k, y: S };
  }
}
p(Tf, "intersectLine");
function ja(e, t) {
  return e * t > 0;
}
p(ja, "sameSign");
var O2 = Tf;
function _f(e, t, r) {
  let i = e.x, s = e.y, o = [], a = Number.POSITIVE_INFINITY, n = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(h) {
    a = Math.min(a, h.x), n = Math.min(n, h.y);
  }) : (a = Math.min(a, t.x), n = Math.min(n, t.y));
  let l = i - e.width / 2 - a, c = s - e.height / 2 - n;
  for (let h = 0; h < t.length; h++) {
    let u = t[h], d = t[h < t.length - 1 ? h + 1 : 0], f = O2(
      e,
      r,
      { x: l + u.x, y: c + u.y },
      { x: l + d.x, y: c + d.y }
    );
    f && o.push(f);
  }
  return o.length ? (o.length > 1 && o.sort(function(h, u) {
    let d = h.x - r.x, f = h.y - r.y, y = Math.sqrt(d * d + f * f), m = u.x - r.x, x = u.y - r.y, C = Math.sqrt(m * m + x * x);
    return y < C ? -1 : y === C ? 0 : 1;
  }), o[0]) : e;
}
p(_f, "intersectPolygon");
var D2 = _f, rt = {
  node: E2,
  circle: $2,
  ellipse: wf,
  polygon: D2,
  rect: wr
};
function Bf(e, t) {
  const { labelStyles: r } = nt(t);
  t.labelStyle = r;
  const i = ut(t);
  let s = i;
  i || (s = "anchor");
  const o = e.insert("g").attr("class", s).attr("id", t.domId || t.id), a = 1, { cssStyles: n } = t, l = st.svg(o), c = it(t, { fill: "black", stroke: "none", fillStyle: "solid" });
  t.look !== "handDrawn" && (c.roughness = 0);
  const h = l.circle(0, 0, a * 2, c), u = o.insert(() => h, ":first-child");
  return u.attr("class", "anchor").attr("style", Wt(n)), at(t, u), t.intersect = function(d) {
    return P.info("Circle intersect", t, a, d), rt.circle(t, a, d);
  }, o;
}
p(Bf, "anchor");
function Ua(e, t, r, i, s, o, a) {
  const l = (e + r) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r - e), u = (r - e) / 2, d = (i - t) / 2, f = u / s, y = d / o, m = Math.sqrt(f ** 2 + y ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const x = Math.sqrt(1 - m ** 2), C = l + x * o * Math.sin(h) * (a ? -1 : 1), k = c - x * s * Math.cos(h) * (a ? -1 : 1), S = Math.atan2((t - k) / o, (e - C) / s);
  let _ = Math.atan2((i - k) / o, (r - C) / s) - S;
  a && _ < 0 && (_ += 2 * Math.PI), !a && _ > 0 && (_ -= 2 * Math.PI);
  const L = [];
  for (let M = 0; M < 20; M++) {
    const v = M / 19, X = S + v * _, z = C + s * Math.cos(X), I = k + o * Math.sin(X);
    L.push({ x: z, y: I });
  }
  return L;
}
p(Ua, "generateArcPoints");
function vf(e, t, r) {
  const [i, s] = [t, r].sort((o, a) => a - o);
  return s * (1 - Math.sqrt(1 - (e / i / 2) ** 2));
}
p(vf, "calculateArcSagitta");
async function Lf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = /* @__PURE__ */ p((X) => X + a, "calcTotalHeight"), l = /* @__PURE__ */ p((X) => {
    const z = X / 2;
    return [z / (2.5 + X / 50), z];
  }, "calcEllipseRadius"), { shapeSvg: c, bbox: h } = await ct(e, t, ut(t)), u = n(t?.height ? t?.height : h.height), [d, f] = l(u), y = vf(u, d, f), x = (t?.width ? t?.width : h.width) + o * 2 + y - y, C = u, { cssStyles: k } = t, S = [
    { x: x / 2, y: -C / 2 },
    { x: -x / 2, y: -C / 2 },
    ...Ua(-x / 2, -C / 2, -x / 2, C / 2, d, f, !1),
    { x: x / 2, y: C / 2 },
    ...Ua(x / 2, C / 2, x / 2, -C / 2, d, f, !0)
  ], T = st.svg(c), _ = it(t, {});
  t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
  const L = Ft(S), M = T.path(L, _), v = c.insert(() => M, ":first-child");
  return v.attr("class", "basic label-container outer-path"), k && t.look !== "handDrawn" && v.selectAll("path").attr("style", k), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${d / 2}, 0)`), at(t, v), t.intersect = function(X) {
    return rt.polygon(t, S, X);
  }, c;
}
p(Lf, "bowTieRect");
async function Ff(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = nt(t);
  t.labelStyle = i;
  const { shapeSvg: o, bbox: a, label: n } = await ct(e, t, ut(t)), l = r?.nodeBorder ?? r?.lineColor ?? "currentColor", c = t.padding ?? 12, h = Math.max(a.width + c * 2, t.width ?? 0, 80), u = Math.max(Math.min(h * 0.08, 12), 5), d = Math.max(a.height + c * 2 + u, t.height ?? 0), f = -d / 2 + u, y = d / 2, m = h * 0.72, x = [
    `M${-h / 2},${f}`,
    `L${-m / 2},${y}`,
    `A${m / 2},${u} 0 0 0 ${m / 2},${y}`,
    `L${h / 2},${f}`,
    `A${h / 2},${u} 0 0 0 ${-h / 2},${f}`,
    "Z"
  ].join(" "), { cssStyles: C } = t, k = o.insert("g", ":first-child").attr("class", "basic label-container");
  if (t.look === "handDrawn") {
    const v = st.svg(o).path(x, it(t, {}));
    k.node()?.appendChild(v), C && k.attr("style", C);
  } else
    k.append("path").attr("d", x).attr("style", s);
  k.append("ellipse").attr("cx", 0).attr("cy", f).attr("rx", h / 2).attr("ry", u).attr("style", `fill:none;stroke:${l};stroke-width:1px`), at(t, k);
  const S = f + (y - f) / 2;
  n.attr(
    "transform",
    `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${S - a.height / 2 - (a.y - (a.top ?? 0))})`
  );
  const T = 12, _ = /* @__PURE__ */ p((M, v, X) => Array.from({ length: T + 1 }, (z, I) => {
    const et = Math.PI - I * Math.PI / T;
    return { x: M * Math.cos(et), y: v + X * u * Math.sin(et) };
  }), "arc"), L = [..._(h / 2, f, -1), ..._(m / 2, y, 1).reverse()];
  return t.intersect = function(M) {
    return rt.polygon(t, L, M);
  }, o;
}
p(Ff, "bucket");
var Rh = 20, qh = 8, P2 = 80, qo = 8;
async function Mf(e, t) {
  const { themeVariables: r } = _t(), i = r.clusterBkg, s = r.clusterBorder, { nodeStyles: o } = nt(t), { shapeSvg: a, bbox: n } = await ct(e, t, ut(t)), l = t.padding ?? 8, c = n.height, h = Math.max(n.width + l * 2, P2, t?.width ?? 0), u = Math.max(
    c + qh + Rh + l * 2,
    t?.height ?? 0
  ), d = -h / 2, f = -u / 2, y = -28 / 2, m = a.select(".label");
  m && (t.useHtmlLabels ?? Zt(_t()) ? m.attr("transform", `translate(${-n.width / 2}, ${-n.height / 2 + y})`) : m.attr("transform", `translate(0, ${-n.height / 2 + y})`));
  let x;
  if (t.look === "handDrawn") {
    const _ = st.svg(a), L = it(t, {
      fill: i,
      stroke: s,
      fillStyle: "solid"
    }), M = _.path(
      he(d, f, h, u, qo),
      L
    );
    x = a.insert(() => M, ":first-child"), x.attr("class", "basic label-container collapsed-group").attr("style", Wt(t.cssStyles));
  } else
    x = a.insert("rect", ":first-child"), x.attr("class", "basic label-container collapsed-group").attr("style", o).attr("rx", qo).attr("ry", qo).attr("x", d).attr("y", f).attr("width", h).attr("height", u).attr("fill", i).attr("stroke", s);
  const C = f + l + c + qh;
  a.append("line").attr("class", "collapsed-separator").attr("x1", d + 8).attr("y1", C).attr("x2", d + h - 8).attr("y2", C).attr("stroke", s).attr("stroke-dasharray", "3, 3");
  const k = C + Rh / 2, S = 2.5, T = 10;
  for (let _ = -1; _ <= 1; _++)
    a.append("circle").attr("class", "collapsed-indicator").attr("cx", _ * T).attr("cy", k).attr("r", S).attr("fill", s);
  return at(t, x), t.calcIntersect = function(_, L) {
    return rt.rect(_, L);
  }, t.intersect = function(_) {
    return rt.rect(t, _);
  }, a;
}
p(Mf, "collapsedGroup");
function Oe(e, t, r, i) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(s) {
      return s.x + "," + s.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
p(Oe, "insertPolygonShape");
var I2 = ["right", "left", "up", "down"], Vn = "point", R2 = /* @__PURE__ */ p((e) => {
  const t = /* @__PURE__ */ new Set();
  for (const r of e)
    switch (r) {
      case "x":
        t.add("right"), t.add("left");
        break;
      case "y":
        t.add("up"), t.add("down");
        break;
      default:
        t.add(r);
        break;
    }
  return t;
}, "expandAndDeduplicateDirections"), q2 = /* @__PURE__ */ p((e) => I2.filter((t) => e.has(t)).join("|") || Vn, "getDirectionKey"), Nh = {
  "right|left|up|down": /* @__PURE__ */ p(({ height: e, midpoint: t, padding: r, width: i }) => [
    { x: 0, y: 0 },
    { x: t, y: 0 },
    { x: i / 2, y: 2 * r },
    { x: i - t, y: 0 },
    { x: i, y: 0 },
    { x: i, y: -e / 3 },
    { x: i + 2 * r, y: -e / 2 },
    { x: i, y: -2 * e / 3 },
    { x: i, y: -e },
    { x: i - t, y: -e },
    { x: i / 2, y: -e - 2 * r },
    { x: t, y: -e },
    { x: 0, y: -e },
    { x: 0, y: -2 * e / 3 },
    { x: -2 * r, y: -e / 2 },
    { x: 0, y: -e / 3 }
  ], "right|left|up|down"),
  "right|left|up": /* @__PURE__ */ p(({ height: e, midpoint: t, width: r }) => [
    { x: t, y: 0 },
    { x: r - t, y: 0 },
    { x: r, y: -e / 2 },
    { x: r - t, y: -e },
    { x: t, y: -e },
    { x: 0, y: -e / 2 }
  ], "right|left|up"),
  "right|left|down": /* @__PURE__ */ p(({ height: e, midpoint: t, width: r }) => [
    { x: 0, y: 0 },
    { x: t, y: -e },
    { x: r - t, y: -e },
    { x: r, y: 0 }
  ], "right|left|down"),
  "right|up|down": /* @__PURE__ */ p(({ height: e, midpoint: t, width: r }) => [
    { x: 0, y: 0 },
    { x: r, y: -t },
    { x: r, y: -e + t },
    { x: 0, y: -e }
  ], "right|up|down"),
  "left|up|down": /* @__PURE__ */ p(({ height: e, midpoint: t, width: r }) => [
    { x: r, y: 0 },
    { x: 0, y: -t },
    { x: 0, y: -e + t },
    { x: r, y: -e }
  ], "left|up|down"),
  "right|left": /* @__PURE__ */ p(({ height: e, midpoint: t, padding: r, width: i }) => [
    { x: t, y: 0 },
    { x: t, y: -r },
    { x: i - t, y: -r },
    { x: i - t, y: 0 },
    { x: i, y: -e / 2 },
    { x: i - t, y: -e },
    { x: i - t, y: -e + r },
    { x: t, y: -e + r },
    { x: t, y: -e },
    { x: 0, y: -e / 2 }
  ], "right|left"),
  "up|down": /* @__PURE__ */ p(({ height: e, midpoint: t, padding: r, width: i }) => [
    { x: i / 2, y: 0 },
    { x: 0, y: -r },
    { x: t, y: -r },
    { x: t, y: -e + r },
    { x: 0, y: -e + r },
    { x: i / 2, y: -e },
    { x: i, y: -e + r },
    { x: i - t, y: -e + r },
    { x: i - t, y: -r },
    { x: i, y: -r }
  ], "up|down"),
  "right|up": /* @__PURE__ */ p(({ height: e, midpoint: t, width: r }) => [
    { x: 0, y: 0 },
    { x: r, y: -t },
    { x: 0, y: -e }
  ], "right|up"),
  "right|down": /* @__PURE__ */ p(({ height: e, width: t }) => [
    { x: 0, y: 0 },
    { x: t, y: 0 },
    { x: 0, y: -e }
  ], "right|down"),
  "left|up": /* @__PURE__ */ p(({ height: e, midpoint: t, width: r }) => [
    { x: r, y: 0 },
    { x: 0, y: -t },
    { x: r, y: -e }
  ], "left|up"),
  "left|down": /* @__PURE__ */ p(({ height: e, width: t }) => [
    { x: t, y: 0 },
    { x: 0, y: 0 },
    { x: t, y: -e }
  ], "left|down"),
  right: /* @__PURE__ */ p(({ height: e, midpoint: t, padding: r, width: i }) => [
    { x: t, y: -r },
    { x: t, y: -r },
    { x: i - t, y: -r },
    { x: i - t, y: 0 },
    { x: i, y: -e / 2 },
    { x: i - t, y: -e },
    { x: i - t, y: -e + r },
    { x: t, y: -e + r },
    { x: t, y: -e + r }
  ], "right"),
  left: /* @__PURE__ */ p(({ height: e, midpoint: t, padding: r, width: i }) => [
    { x: t, y: 0 },
    { x: t, y: -r },
    { x: i - t, y: -r },
    { x: i - t, y: -e + r },
    { x: t, y: -e + r },
    { x: t, y: -e },
    { x: 0, y: -e / 2 }
  ], "left"),
  up: /* @__PURE__ */ p(({ height: e, midpoint: t, padding: r, width: i }) => [
    { x: t, y: -r },
    { x: t, y: -e + r },
    { x: 0, y: -e + r },
    { x: i / 2, y: -e },
    { x: i, y: -e + r },
    { x: i - t, y: -e + r },
    { x: i - t, y: -r }
  ], "up"),
  down: /* @__PURE__ */ p(({ height: e, midpoint: t, padding: r, width: i }) => [
    { x: i / 2, y: 0 },
    { x: 0, y: -r },
    { x: t, y: -r },
    { x: t, y: -e + r },
    { x: i - t, y: -e + r },
    { x: i - t, y: -r },
    { x: i, y: -r }
  ], "down"),
  [Vn]: () => [{ x: 0, y: 0 }]
}, N2 = /* @__PURE__ */ p((e, t, r, i) => {
  const s = R2(e), o = (r.padding ?? 0) / 2, a = t.height + 4 * o, n = a / 2, l = i ?? t.width + 2 * n + 2 * o, c = q2(s);
  return (Nh[c] ?? Nh[Vn])({ height: a, midpoint: n, padding: o, width: l });
}, "getArrowPoints");
async function Af(e, t) {
  const r = t, { shapeSvg: i, bbox: s } = await ct(e, r, ut(r)), o = r.padding ?? 0, a = s.height + 2 * o, n = a / 2, l = s.width + 2 * n + o, c = r.width ?? 0, u = r.positioned && (r.widthInColumns ?? 1) > 1 && c > l ? c : l, d = N2(r.directions ?? [], s, r, u), f = Oe(i, u, a, d);
  return f.attr("style", r.style ?? null), at(r, f), r.intersect = function(y) {
    return rt.polygon(r, d, y);
  }, i;
}
p(Af, "block_arrow");
async function Ef(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = nt(t);
  t.labelStyle = i;
  const { shapeSvg: o, bbox: a, label: n } = await ct(e, t, ut(t)), l = r?.nodeBorder ?? r?.lineColor ?? "currentColor", c = t.padding ?? 12, h = 18, u = 12, d = Math.max(a.width + c * 2, t.width ?? 0, 90), f = Math.max(a.height + c * 2 + h, t.height ?? 0), y = -f / 2, { cssStyles: m } = t, x = o.insert("g", ":first-child").attr("class", "basic label-container");
  if (t.look === "handDrawn") {
    const S = st.svg(o).path(
      he(-d / 2, y, d, f, u),
      it(t, {})
    );
    x.node()?.appendChild(S), m && x.attr("style", m);
  } else
    x.append("rect").attr("x", -d / 2).attr("y", y).attr("width", d).attr("height", f).attr("rx", u).attr("ry", u).attr("style", s);
  x.append("line").attr("x1", -d / 2).attr("y1", y + h).attr("x2", d / 2).attr("y2", y + h).attr("style", `stroke:${l};stroke-width:1px`);
  for (let k = 0; k < 3; k++)
    x.append("circle").attr("cx", -d / 2 + 12 + k * 9).attr("cy", y + h / 2).attr("r", 2.5).attr("style", `fill:${l};stroke:none`);
  x.append("rect").attr("class", "browser-address-bar").attr("x", -d / 2 + 44).attr("y", y + 4).attr("width", Math.max(d - 56, 10)).attr("height", h - 8).attr("rx", 3).attr("ry", 3).attr("style", `fill:none;stroke:${l};stroke-width:1px;opacity:0.6`), at(t, x);
  const C = y + h + (f - h) / 2;
  return n.attr(
    "transform",
    `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${C - a.height / 2 - (a.y - (a.top ?? 0))})`
  ), t.intersect = function(k) {
    return rt.rect(t, k);
  }, o;
}
p(Ef, "browser");
var hs = 12;
async function $f(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 28 : s, a = t.look === "neo" ? 24 : s, { shapeSvg: n, bbox: l } = await ct(e, t, ut(t)), c = (t?.width ?? l.width) + (t.look === "neo" ? o * 2 : o + hs), h = (t?.height ?? l.height) + (t.look === "neo" ? a * 2 : a), u = 0, d = c, f = -h, y = 0, m = [
    { x: u + hs, y: f },
    { x: d, y: f },
    { x: d, y },
    { x: u, y },
    { x: u, y: f + hs },
    { x: u + hs, y: f }
  ];
  let x;
  const { cssStyles: C } = t;
  if (t.look === "handDrawn") {
    const k = st.svg(n), S = it(t, {}), T = Ft(m), _ = k.path(T, S);
    x = n.insert(() => _, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), C && x.attr("style", C);
  } else
    x = Oe(n, c, h, m);
  return i && x.attr("style", i), at(t, x), t.intersect = function(k) {
    return rt.polygon(t, m, k);
  }, n;
}
p($f, "card");
function Of(e, t) {
  const { nodeStyles: r } = nt(t);
  t.label = "";
  const i = e.insert("g").attr("class", ut(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, o = Math.max(28, t.width ?? 0), a = [
    { x: 0, y: o / 2 },
    { x: o / 2, y: 0 },
    { x: 0, y: -o / 2 },
    { x: -o / 2, y: 0 }
  ], n = st.svg(i), l = it(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = Ft(a), h = n.path(c, l), u = i.insert(() => h, ":first-child");
  return s && t.look !== "handDrawn" && u.selectAll("path").attr("style", s), r && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), t.width = 28, t.height = 28, t.intersect = function(d) {
    return rt.polygon(t, a, d);
  }, i;
}
p(Of, "choice");
async function Zn(e, t, r) {
  const { labelStyles: i, nodeStyles: s } = nt(t);
  t.labelStyle = i;
  const { shapeSvg: o, bbox: a, halfPadding: n } = await ct(e, t, ut(t)), l = 16, c = r?.padding ?? n, h = t.look === "neo" ? a.width / 2 + l * 2 : a.width / 2 + c;
  let u;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const f = st.svg(o), y = it(t, {}), m = f.circle(0, 0, h * 2, y);
    u = o.insert(() => m, ":first-child"), u.attr("class", "basic label-container").attr("style", Wt(d));
  } else
    u = o.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", s).attr("r", h).attr("cx", 0).attr("cy", 0);
  return at(t, u), t.calcIntersect = function(f, y) {
    const m = f.width / 2;
    return rt.circle(f, m, y);
  }, t.intersect = function(f) {
    return P.info("Circle intersect", t, h, f), rt.circle(t, h, f);
  }, o;
}
p(Zn, "circle");
async function Df(e, t) {
  const r = t, i = ["node", r.cssClasses, r.class].filter(Boolean).join(" "), { shapeSvg: s, bbox: o, halfPadding: a } = await ct(e, r, i), n = s.insert("rect", ":first-child"), l = r.padding ?? 0, c = r.positioned ? r.width ?? 0 : o.width + l, h = r.positioned ? r.height ?? 0 : o.height + l, u = r.positioned ? -c / 2 : -o.width / 2 - a, d = r.positioned ? -h / 2 : -o.height / 2 - a;
  return n.attr("class", "basic cluster composite label-container").attr("style", r.style ?? null).attr("rx", r.rx ?? null).attr("ry", r.ry ?? null).attr("x", u).attr("y", d).attr("width", c).attr("height", h), at(r, n), r.intersect = function(f) {
    return rt.rect(r, f);
  }, s;
}
p(Df, "composite");
async function Pf(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = nt(t);
  t.labelStyle = i;
  const { shapeSvg: o, bbox: a, label: n } = await ct(e, t, ut(t)), l = r?.nodeBorder ?? r?.lineColor ?? "currentColor", c = t.padding ?? 12, h = 20, u = 12, d = Math.max(a.width + c * 2, t.width ?? 0, 90), f = Math.max(a.height + c * 2 + h, t.height ?? 0), y = -f / 2, { cssStyles: m } = t, x = o.insert("g", ":first-child").attr("class", "basic label-container");
  if (t.look === "handDrawn") {
    const S = st.svg(o).path(
      he(-d / 2, y, d, f, u),
      it(t, {})
    );
    x.node()?.appendChild(S), m && x.attr("style", m);
  } else
    x.append("rect").attr("x", -d / 2).attr("y", y).attr("width", d).attr("height", f).attr("rx", u).attr("ry", u).attr("style", s);
  x.append("text").attr("x", -d / 2 + 12).attr("y", y + 16).attr("class", "console-glyph").attr("style", `font-family:monospace;font-weight:bold;font-size:14px;fill:${l}`).text(">_"), at(t, x);
  const C = y + h + (f - h) / 2;
  return n.attr(
    "transform",
    `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${C - a.height / 2 - (a.y - (a.top ?? 0))})`
  ), t.intersect = function(k) {
    return rt.rect(t, k);
  }, o;
}
p(Pf, "consoleWindow");
function If(e) {
  const t = Math.cos(Math.PI / 4), r = Math.sin(Math.PI / 4), i = e * 2, s = { x: i / 2 * t, y: i / 2 * r }, o = { x: -(i / 2) * t, y: i / 2 * r }, a = { x: -(i / 2) * t, y: -(i / 2) * r }, n = { x: i / 2 * t, y: -(i / 2) * r };
  return `M ${o.x},${o.y} L ${n.x},${n.y}
                   M ${s.x},${s.y} L ${a.x},${a.y}`;
}
p(If, "createLine");
function Rf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r, t.label = "";
  const s = e.insert("g").attr("class", ut(t)).attr("id", t.domId ?? t.id), o = Math.max(30, t?.width ?? 0), { cssStyles: a } = t, n = st.svg(s), l = it(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = n.circle(0, 0, o * 2, l), h = If(o), u = n.path(h, l), d = s.insert(() => c, ":first-child");
  return d.insert(() => u), d.attr("class", "outer-path"), a && t.look !== "handDrawn" && d.selectAll("path").attr("style", a), i && t.look !== "handDrawn" && d.selectAll("path").attr("style", i), at(t, d), t.intersect = function(f) {
    return P.info("crossedCircle intersect", t, { radius: o, point: f }), rt.circle(t, o, f);
  }, s;
}
p(Rf, "crossedCircle");
function Ie(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const d = n + u * h, f = e + r * Math.cos(d), y = t + r * Math.sin(d);
    a.push({ x: -f, y: -y });
  }
  return a;
}
p(Ie, "generateCirclePoints");
async function qf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await ct(e, t, ut(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = o.width + n, h = o.height + l, u = Math.max(5, h * 0.1), { cssStyles: d } = t, f = [
    ...Ie(c / 2, -h / 2, u, 30, -90, 0),
    { x: -c / 2 - u, y: u },
    ...Ie(c / 2 + u * 2, -u, u, 20, -180, -270),
    ...Ie(c / 2 + u * 2, u, u, 20, -90, -180),
    { x: -c / 2 - u, y: -h / 2 },
    ...Ie(c / 2, h / 2, u, 20, 0, 90)
  ], y = [
    { x: c / 2, y: -h / 2 - u },
    { x: -c / 2, y: -h / 2 - u },
    ...Ie(c / 2, -h / 2, u, 20, -90, 0),
    { x: -c / 2 - u, y: -u },
    ...Ie(c / 2 + c * 0.1, -u, u, 20, -180, -270),
    ...Ie(c / 2 + c * 0.1, u, u, 20, -90, -180),
    { x: -c / 2 - u, y: h / 2 },
    ...Ie(c / 2, h / 2, u, 20, 0, 90),
    { x: -c / 2, y: h / 2 + u },
    { x: c / 2, y: h / 2 + u }
  ], m = st.svg(s), x = it(t, { fill: "none" });
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const k = Ft(f).replace("Z", ""), S = m.path(k, x), T = Ft(y), _ = m.path(T, { ...x }), L = s.insert("g", ":first-child");
  return L.insert(() => _, ":first-child").attr("stroke-opacity", 0), L.insert(() => S, ":first-child"), L.attr("class", "text"), d && t.look !== "handDrawn" && L.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && L.selectAll("path").attr("style", i), L.attr("transform", `translate(${u}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + u - (o.x - (o.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), at(t, L), t.intersect = function(M) {
    return rt.polygon(t, y, M);
  }, s;
}
p(qf, "curlyBraceLeft");
function Re(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const d = n + u * h, f = e + r * Math.cos(d), y = t + r * Math.sin(d);
    a.push({ x: f, y });
  }
  return a;
}
p(Re, "generateCirclePoints");
async function Nf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await ct(e, t, ut(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = o.width + (t.look === "neo" ? n * 2 : n), h = o.height + (t.look === "neo" ? l * 2 : l), u = Math.max(5, h * 0.1), { cssStyles: d } = t, f = [
    ...Re(c / 2, -h / 2, u, 20, -90, 0),
    { x: c / 2 + u, y: -u },
    ...Re(c / 2 + u * 2, -u, u, 20, -180, -270),
    ...Re(c / 2 + u * 2, u, u, 20, -90, -180),
    { x: c / 2 + u, y: h / 2 },
    ...Re(c / 2, h / 2, u, 20, 0, 90)
  ], y = [
    { x: -c / 2, y: -h / 2 - u },
    { x: c / 2, y: -h / 2 - u },
    ...Re(c / 2, -h / 2, u, 20, -90, 0),
    { x: c / 2 + u, y: -u },
    ...Re(c / 2 + u * 2, -u, u, 20, -180, -270),
    ...Re(c / 2 + u * 2, u, u, 20, -90, -180),
    { x: c / 2 + u, y: h / 2 },
    ...Re(c / 2, h / 2, u, 20, 0, 90),
    { x: c / 2, y: h / 2 + u },
    { x: -c / 2, y: h / 2 + u }
  ], m = st.svg(s), x = it(t, { fill: "none" });
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const k = Ft(f).replace("Z", ""), S = m.path(k, x), T = Ft(y), _ = m.path(T, { ...x }), L = s.insert("g", ":first-child");
  return L.insert(() => _, ":first-child").attr("stroke-opacity", 0), L.insert(() => S, ":first-child"), L.attr("class", "text"), d && t.look !== "handDrawn" && L.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && L.selectAll("path").attr("style", i), L.attr("transform", `translate(${-u}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), at(t, L), t.intersect = function(M) {
    return rt.polygon(t, y, M);
  }, s;
}
p(Nf, "curlyBraceRight");
function jt(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const d = n + u * h, f = e + r * Math.cos(d), y = t + r * Math.sin(d);
    a.push({ x: -f, y: -y });
  }
  return a;
}
p(jt, "generateCirclePoints");
async function Wf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await ct(e, t, ut(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = o.width + (t.look === "neo" ? n * 2 : n), h = o.height + (t.look === "neo" ? l * 2 : l), u = Math.max(5, h * 0.1), { cssStyles: d } = t, f = [
    ...jt(c / 2, -h / 2, u, 30, -90, 0),
    { x: -c / 2 - u, y: u },
    ...jt(c / 2 + u * 2, -u, u, 20, -180, -270),
    ...jt(c / 2 + u * 2, u, u, 20, -90, -180),
    { x: -c / 2 - u, y: -h / 2 },
    ...jt(c / 2, h / 2, u, 20, 0, 90)
  ], y = [
    ...jt(-c / 2 + u + u / 2, -h / 2, u, 20, -90, -180),
    { x: c / 2 - u / 2, y: u },
    ...jt(-c / 2 - u / 2, -u, u, 20, 0, 90),
    ...jt(-c / 2 - u / 2, u, u, 20, -90, 0),
    { x: c / 2 - u / 2, y: -u },
    ...jt(-c / 2 + u + u / 2, h / 2, u, 30, -180, -270)
  ], m = [
    { x: c / 2, y: -h / 2 - u },
    { x: -c / 2, y: -h / 2 - u },
    ...jt(c / 2, -h / 2, u, 20, -90, 0),
    { x: -c / 2 - u, y: -u },
    ...jt(c / 2 + u * 2, -u, u, 20, -180, -270),
    ...jt(c / 2 + u * 2, u, u, 20, -90, -180),
    { x: -c / 2 - u, y: h / 2 },
    ...jt(c / 2, h / 2, u, 20, 0, 90),
    { x: -c / 2, y: h / 2 + u },
    { x: c / 2 - u - u / 2, y: h / 2 + u },
    ...jt(-c / 2 + u + u / 2, -h / 2, u, 20, -90, -180),
    { x: c / 2 - u / 2, y: u },
    ...jt(-c / 2 - u / 2, -u, u, 20, 0, 90),
    ...jt(-c / 2 - u / 2, u, u, 20, -90, 0),
    { x: c / 2 - u / 2, y: -u },
    ...jt(-c / 2 + u + u / 2, h / 2, u, 30, -180, -270)
  ], x = st.svg(s), C = it(t, { fill: "none" });
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const S = Ft(f).replace("Z", ""), T = x.path(S, C), L = Ft(y).replace("Z", ""), M = x.path(L, C), v = Ft(m), X = x.path(v, { ...C }), z = s.insert("g", ":first-child");
  return z.insert(() => X, ":first-child").attr("stroke-opacity", 0), z.insert(() => T, ":first-child"), z.insert(() => M, ":first-child"), z.attr("class", "text"), d && t.look !== "handDrawn" && z.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && z.selectAll("path").attr("style", i), z.attr("transform", `translate(${u - u / 4}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), at(t, z), t.intersect = function(I) {
    return rt.polygon(t, m, I);
  }, s;
}
p(Wf, "curlyBraces");
async function zf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = 20, l = 5, { shapeSvg: c, bbox: h } = await ct(e, t, ut(t)), u = Math.max(n, (h.width + o * 2) * 1.25, t?.width ?? 0), d = Math.max(l, h.height + a * 2, t?.height ?? 0), f = d / 2, { cssStyles: y } = t, m = st.svg(c), x = it(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const C = u, k = d, S = C - f, T = k / 4, _ = [
    { x: S, y: 0 },
    { x: T, y: 0 },
    { x: 0, y: k / 2 },
    { x: T, y: k },
    { x: S, y: k },
    ...Be(-S, -k / 2, f, 50, 270, 90)
  ], L = Ft(_), M = m.path(L, x), v = c.insert(() => M, ":first-child");
  return v.attr("class", "basic label-container outer-path"), y && t.look !== "handDrawn" && v.selectChildren("path").attr("style", y), i && t.look !== "handDrawn" && v.selectChildren("path").attr("style", i), v.attr("transform", `translate(${-u / 2}, ${-d / 2})`), at(t, v), t.intersect = function(X) {
    return rt.polygon(t, _, X);
  }, c;
}
p(zf, "curvedTrapezoid");
async function Hf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await ct(e, t, ut(t)), n = t.padding ?? 20, l = Math.max(o.width + n * 2, t.width ?? 0, 100), c = Math.min(Math.max(l * 0.23, 16), 56), h = c * 0.27, u = Math.max(
    o.height + n * 2,
    t.height ? t.height - (2 * c - h) : 0
  ), d = Math.min(l * 0.177, u * 0.45), f = u + 2 * c - h, y = -f / 2, m = y + 2 * c - h, x = s.insert("g", ":first-child").attr("class", "basic label-container"), { cssStyles: C } = t;
  if (t.look === "handDrawn") {
    const v = st.svg(s), X = it(t, {}), z = v.path(
      he(-l / 2, m, l, u, d),
      X
    ), I = v.circle(0, y + c, c * 2, X);
    x.insert(() => I, ":first-child"), x.insert(() => z, ":first-child"), C && x.attr("style", C);
  } else
    x.append("rect").attr("x", -l / 2).attr("y", m).attr("width", l).attr("height", u).attr("rx", d).attr("ry", d).attr("style", i), x.append("circle").attr("cx", 0).attr("cy", y + c).attr("r", c).attr("style", i);
  at(t, x);
  const k = m + u / 2;
  a.attr(
    "transform",
    `translate(${-(o.width / 2) - (o.x - (o.left ?? 0))}, ${k - o.height / 2 - (o.y - (o.top ?? 0))})`
  );
  const S = y + c, T = Math.asin(Math.min(1, (m - S) / c)) * 180 / Math.PI, M = [
    ...Be(
      0,
      -S,
      c,
      24,
      180 + T,
      -T
    ),
    ...Be(-(-l / 2 + d), -(m + d), d, 12, 90, 0),
    ...Be(
      -(-l / 2 + d),
      -(f / 2 - d),
      d,
      12,
      360,
      270
    ),
    ...Be(
      -(l / 2 - d),
      -(f / 2 - d),
      d,
      12,
      270,
      180
    ),
    ...Be(
      -(l / 2 - d),
      -(m + d),
      d,
      12,
      180,
      90
    )
  ];
  return t.intersect = function(v) {
    return rt.polygon(t, M, v);
  }, s;
}
p(Hf, "person");
var W2 = /* @__PURE__ */ p((e, t, r, i, s, o) => [
  `M${e},${t + o}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createCylinderPathD"), z2 = /* @__PURE__ */ p((e, t, r, i, s, o) => [
  `M${e},${t + o}`,
  `M${e + r},${t + o}`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createOuterCylinderPathD"), H2 = /* @__PURE__ */ p((e, t, r, i, s, o) => [`M${e - r / 2},${-i / 2}`, `a${s},${o} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD"), Wh = 8, zh = 8;
async function Yf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 24 : s, a = t.look === "neo" ? 24 : s, n = t.width ?? 0;
  if (t.width && (t.width = t.width - a, t.width < zh && (t.width = zh)), t.height) {
    const k = n / 2 / (2.5 + n / 50);
    t.height = t.height - o - k * 3, t.height < Wh && (t.height = Wh);
  }
  const { shapeSvg: l, bbox: c, label: h } = await ct(e, t, ut(t)), u = Math.max(t.width ?? 0, c.width) + a, d = u / 2, f = d / (2.5 + u / 50), y = Math.max(t.height ?? 0, c.height) + o + f;
  let m;
  const { cssStyles: x } = t;
  if (t.look === "handDrawn") {
    const C = st.svg(l), k = z2(0, 0, u, y, d, f), S = H2(0, f, u, y, d, f), T = it(t, {}), _ = C.path(k, T), L = C.path(S, it(t, { fill: "none" }));
    m = l.insert(() => L, ":first-child"), m = l.insert(() => _, ":first-child"), m.attr("class", "basic label-container"), x && m.attr("style", x);
  } else {
    const C = W2(0, 0, u, y, d, f);
    m = l.insert("path", ":first-child").attr("d", C).attr("class", "basic label-container outer-path").attr("style", Wt(x)).attr("style", i);
  }
  return m.attr("label-offset-y", f), m.attr("transform", `translate(${-u / 2}, ${-(y / 2 + f)})`), at(t, m), h.attr(
    "transform",
    `translate(${-(c.width / 2) - (c.x - (c.left ?? 0))}, ${-(c.height / 2) + (t.padding ?? 0) / 1.5 - (c.y - (c.top ?? 0))})`
  ), t.intersect = function(C) {
    const k = rt.rect(t, C), S = k.x - (t.x ?? 0);
    if (d != 0 && (Math.abs(S) < (t.width ?? 0) / 2 || Math.abs(S) == (t.width ?? 0) / 2 && Math.abs(k.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - f)) {
      let T = f * f * (1 - S * S / (d * d));
      T > 0 && (T = Math.sqrt(T)), T = f - T, C.y - (t.y ?? 0) > 0 && (T = -T), k.y += T;
    }
    return k;
  }, l;
}
p(Yf, "cylinder");
async function Zr(e, t, r) {
  const { labelStyles: i, nodeStyles: s } = nt(t);
  t.labelStyle = i;
  const { shapeSvg: o, bbox: a } = await ct(e, t, ut(t)), n = Math.max(a.width + r.labelPaddingX * 2, t?.width || 0), l = Math.max(a.height + r.labelPaddingY * 2, t?.height || 0), c = -n / 2, h = -l / 2;
  let u, { rx: d, ry: f } = t;
  const { cssStyles: y } = t;
  if (r?.rx && r.ry && (d = r.rx, f = r.ry), t.look === "handDrawn") {
    const m = st.svg(o), x = it(t, {}), C = d || f ? m.path(he(c, h, n, l, d || 0), x) : m.rectangle(c, h, n, l, x);
    u = o.insert(() => C, ":first-child"), u.attr("class", "basic label-container").attr("style", Wt(y));
  } else
    u = o.insert("rect", ":first-child"), u.attr("class", "basic label-container").attr("style", s).attr("rx", Wt(d)).attr("ry", Wt(f)).attr("x", c).attr("y", h).attr("width", n).attr("height", l);
  return at(
    t,
    u,
    t.look === "handDrawn" ? void 0 : { width: n, height: l }
  ), t.calcIntersect = function(m, x) {
    return rt.rect(m, x);
  }, t.intersect = function(m) {
    return rt.rect(t, m);
  }, o;
}
p(Zr, "drawRect");
async function jf(e, t) {
  const { cssClasses: r, labelPaddingX: i, labelPaddingY: s, padding: o, width: a, height: n } = t, l = {
    rx: 0,
    ry: 0,
    labelPaddingX: i ?? (o ?? 0) * 2,
    labelPaddingY: s ?? o ?? 0
  }, c = await Zr(e, t, l);
  if (t.look === "handDrawn") {
    const f = st.svg(c), y = it(t, {}), m = c.select(".basic.label-container > path:nth-child(2)"), x = m.node();
    if (!x)
      return c;
    let C = null;
    if (x instanceof SVGGraphicsElement)
      C = x.getBBox();
    else
      return c;
    return c.insert(
      () => f.line(C.x, C.y, C.x + C.width, C.y, y),
      ".basic.label-container g.label"
    ), c.insert(
      () => f.line(
        C.x,
        C.y + C.height,
        C.x + C.width,
        C.y + C.height,
        y
      ),
      ".basic.label-container g.label"
    ), m.remove(), c;
  }
  const h = c.select(".basic.label-container"), u = (Number(h.attr("width")) || a) ?? 0, d = (Number(h.attr("height")) || n) ?? 0;
  return u > 0 && d > 0 && h.attr("stroke-dasharray", `${u} ${d}`), c;
}
p(jf, "datastore");
async function Uf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 16 : t.padding ?? 0, { shapeSvg: a, bbox: n, label: l } = await ct(e, t, ut(t)), c = n.width + s, h = n.height + o, u = h * 0.2, d = -c / 2, f = -h / 2 - u / 2, { cssStyles: y } = t, m = st.svg(a), x = it(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const C = [
    { x: d, y: f + u },
    { x: -d, y: f + u },
    { x: -d, y: -f },
    { x: d, y: -f },
    { x: d, y: f },
    { x: -d, y: f },
    { x: -d, y: f + u }
  ], k = m.polygon(
    C.map((T) => [T.x, T.y]),
    x
  ), S = a.insert(() => k, ":first-child");
  return S.attr("class", "basic label-container outer-path"), y && t.look !== "handDrawn" && S.selectAll("path").attr("style", y), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${d + (t.padding ?? 0) / 2 - (n.x - (n.left ?? 0))}, ${f + u + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), at(t, S), t.intersect = function(T) {
    return rt.rect(t, T);
  }, a;
}
p(Uf, "dividedRectangle");
async function Gf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t), s = t.look === "neo" ? 12 : 5;
  t.labelStyle = r;
  const o = t.padding ?? 0, a = t.look === "neo" ? 16 : o, { shapeSvg: n, bbox: l } = await ct(e, t, ut(t)), c = (t?.width ? t?.width / 2 : l.width / 2) + (a ?? 0), h = c - s;
  let u;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const f = st.svg(n), y = it(t, { roughness: 0.2, strokeWidth: 2.5 }), m = it(t, { roughness: 0.2, strokeWidth: 1.5 }), x = f.circle(0, 0, c * 2, y), C = f.circle(0, 0, h * 2, m);
    u = n.insert("g", ":first-child"), u.attr("class", Wt(t.cssClasses)).attr("style", Wt(d)), u.node()?.appendChild(x), u.node()?.appendChild(C);
  } else {
    u = n.insert("g", ":first-child");
    const f = u.insert("circle", ":first-child"), y = u.insert("circle");
    u.attr("class", "basic label-container").attr("style", i), f.attr("class", "outer-circle").attr("style", i).attr("r", c).attr("cx", 0).attr("cy", 0), y.attr("class", "inner-circle").attr("style", i).attr("r", h).attr("cx", 0).attr("cy", 0);
  }
  return at(t, u), t.intersect = function(f) {
    return P.info("DoubleCircle intersect", t, c, f), rt.circle(t, c, f);
  }, n;
}
p(Gf, "doublecircle");
function Xf(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = nt(t);
  t.label = "", t.labelStyle = i;
  const o = e.insert("g").attr("class", ut(t)).attr("id", t.domId ?? t.id), a = 7, { cssStyles: n } = t, l = st.svg(o), { nodeBorder: c } = r, h = it(t, { fillStyle: "solid" });
  t.look !== "handDrawn" && (h.roughness = 0);
  const u = l.circle(0, 0, a * 2, h), d = o.insert(() => u, ":first-child");
  return d.selectAll("path").attr("style", `fill: ${c} !important;`), n && n.length > 0 && t.look !== "handDrawn" && d.selectAll("path").attr("style", n), s && t.look !== "handDrawn" && d.selectAll("path").attr("style", s), at(t, d), t.intersect = function(f) {
    return P.info("filledCircle intersect", t, { radius: a, point: f }), rt.circle(t, a, f);
  }, o;
}
p(Xf, "filledCircle");
var Hh = 10, Yh = 10;
async function Vf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? s * 2 : s;
  (t.width || t.height) && (t.height = t?.height ?? 0, t.height < Hh && (t.height = Hh), t.width = (t?.width ?? 0) - o - o / 2, t.width < Yh && (t.width = Yh));
  const { shapeSvg: a, bbox: n, label: l } = await ct(e, t, ut(t)), c = (t?.width ? t?.width : n.width) + (o ?? 0), h = t?.height ? t?.height : c + n.height, u = h, d = [
    { x: 0, y: -h },
    { x: u, y: -h },
    { x: u / 2, y: 0 }
  ], { cssStyles: f } = t, y = st.svg(a), m = it(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const x = Ft(d), C = y.path(x, m), k = a.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${h / 2})`).attr("class", "outer-path");
  return f && t.look !== "handDrawn" && k.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), t.width = c, t.height = h, at(t, k), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-h / 2 + (t.padding ?? 0) / 2 + (n.y - (n.top ?? 0))})`
  ), t.intersect = function(S) {
    return P.info("Triangle intersect", t, d, S), rt.polygon(t, d, S);
  }, a;
}
p(Vf, "flippedTriangle");
async function Zf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await ct(e, t, ut(t)), n = t.padding ?? 12, l = Math.max(o.width + n * 2, t.width ?? 0, 90), c = o.height + n * 2, h = Math.max(Math.min(c * 0.16, 14), 8), u = Math.max(c + h, t.height ?? 0), d = u - h, f = Math.max(l * 0.38, 28), y = -u / 2, m = [
    { x: -l / 2, y },
    { x: -l / 2 + f, y },
    { x: -l / 2 + f, y: y + h },
    { x: l / 2, y: y + h },
    { x: l / 2, y: u / 2 },
    { x: -l / 2, y: u / 2 }
  ], x = [
    `M${m[0].x},${m[0].y}`,
    ...m.slice(1).map((T) => `L${T.x},${T.y}`),
    "Z"
  ].join(" "), { cssStyles: C } = t;
  let k;
  if (t.look === "handDrawn") {
    const _ = st.svg(s).path(x, it(t, {}));
    k = s.insert(() => _, ":first-child").attr("class", "basic label-container"), C && k.attr("style", C);
  } else
    k = s.insert("path", ":first-child").attr("d", x).attr("class", "basic label-container").attr("style", i);
  t.look === "handDrawn" ? at(t, k) : at(t, k, { width: l, height: u });
  const S = y + h + d / 2;
  return a.attr(
    "transform",
    `translate(${-(o.width / 2) - (o.x - (o.left ?? 0))}, ${S - o.height / 2 - (o.y - (o.top ?? 0))})`
  ), t.intersect = function(T) {
    return rt.polygon(t, m, T);
  }, s;
}
p(Zf, "folder");
function Kf(e, t, { dir: r, config: { state: i, themeVariables: s } }) {
  const { nodeStyles: o } = nt(t);
  t.label = "";
  const a = e.insert("g").attr("class", ut(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t;
  let l = Math.max(70, t?.width ?? 0), c = Math.max(10, t?.height ?? 0);
  r === "LR" && (l = Math.max(10, t?.width ?? 0), c = Math.max(70, t?.height ?? 0));
  const h = -1 * l / 2, u = -1 * c / 2, d = st.svg(a), f = it(t, {
    stroke: s.lineColor,
    fill: s.lineColor
  });
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const y = d.rectangle(h, u, l, c, f), m = a.insert(() => y, ":first-child");
  n && t.look !== "handDrawn" && m.selectAll("path").attr("style", n), o && t.look !== "handDrawn" && m.selectAll("path").attr("style", o), at(t, m);
  const x = i?.padding ?? 0;
  return t.width && t.height && (t.width += x / 2 || 0, t.height += x / 2 || 0), t.intersect = function(C) {
    return rt.rect(t, C);
  }, a;
}
p(Kf, "forkJoin");
async function Qf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = 15, o = 10, a = t.look === "neo" ? 16 : t.padding ?? 0, n = t.look === "neo" ? 12 : t.padding ?? 0;
  (t.width || t.height) && (t.height = (t?.height ?? 0) - n * 2, t.height < o && (t.height = o), t.width = (t?.width ?? 0) - a * 2, t.width < s && (t.width = s));
  const { shapeSvg: l, bbox: c } = await ct(e, t, ut(t)), h = (t?.width ? t?.width : Math.max(s, c.width)) + a * 2, u = (t?.height ? t?.height : Math.max(o, c.height)) + n * 2, d = u / 2, { cssStyles: f } = t, y = st.svg(l), m = it(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const x = [
    { x: -h / 2, y: -u / 2 },
    { x: h / 2 - d, y: -u / 2 },
    ...Be(-h / 2 + d, 0, d, 50, 90, 270),
    { x: h / 2 - d, y: u / 2 },
    { x: -h / 2, y: u / 2 }
  ], C = Ft(x), k = y.path(C, m), S = l.insert(() => k, ":first-child");
  return S.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && S.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && S.selectChildren("path").attr("style", i), at(t, S), t.intersect = function(T) {
    return P.info("Pill intersect", t, { radius: d, point: T }), rt.polygon(t, x, T);
  }, l;
}
p(Qf, "halfRoundedRectangle");
var Y2 = /* @__PURE__ */ p((e, t, r, i, s) => [
  `M${e + s},${t}`,
  `L${e + r - s},${t}`,
  `L${e + r},${t - i / 2}`,
  `L${e + r - s},${t - i}`,
  `L${e + s},${t - i}`,
  `L${e},${t - i / 2}`,
  "Z"
].join(" "), "createHexagonPathD");
async function Jf(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t), s = t.look === "neo" ? 3.5 : 4;
  t.labelStyle = r;
  const o = t.padding ?? 0, a = 70, n = 32, l = t.look === "neo" ? a : o, c = t.look === "neo" ? n : o;
  if (t.width || t.height) {
    const S = (t.height ?? 0) / s;
    t.width = (t?.width ?? 0) - 2 * S - c, t.height = (t.height ?? 0) - l;
  }
  const { shapeSvg: h, bbox: u } = await ct(e, t, ut(t)), d = (t?.height ? t?.height : u.height) + l, f = d / s, y = (t?.width ? t?.width : u.width) + 2 * f + c, m = [
    { x: f, y: 0 },
    { x: y - f, y: 0 },
    { x: y, y: -d / 2 },
    { x: y - f, y: -d },
    { x: f, y: -d },
    { x: 0, y: -d / 2 }
  ];
  let x;
  const { cssStyles: C } = t;
  if (t.look === "handDrawn") {
    const k = st.svg(h), S = it(t, {}), T = Y2(0, 0, y, d, f), _ = k.path(T, S);
    x = h.insert(() => _, ":first-child").attr("transform", `translate(${-y / 2}, ${d / 2})`), C && x.attr("style", C);
  } else
    x = Oe(h, y, d, m);
  return i && x.attr("style", i), t.width = y, t.height = d, at(t, x), t.intersect = function(k) {
    return rt.polygon(t, m, k);
  }, h;
}
p(Jf, "hexagon");
async function tp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.label = "", t.labelStyle = r;
  const { shapeSvg: s } = await ct(e, t, ut(t)), o = Math.max(30, t?.width ?? 0), a = Math.max(30, t?.height ?? 0), { cssStyles: n } = t, l = st.svg(s), c = it(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  const h = [
    { x: 0, y: 0 },
    { x: o, y: 0 },
    { x: 0, y: a },
    { x: o, y: a }
  ], u = Ft(h), d = l.path(u, c), f = s.insert(() => d, ":first-child");
  return f.attr("class", "basic label-container outer-path"), n && t.look !== "handDrawn" && f.selectChildren("path").attr("style", n), i && t.look !== "handDrawn" && f.selectChildren("path").attr("style", i), f.attr("transform", `translate(${-o / 2}, ${-a / 2})`), at(t, f), t.intersect = function(y) {
    return P.info("Pill intersect", t, { points: h }), rt.polygon(t, h, y);
  }, s;
}
p(tp, "hourglass");
async function ep(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = nt(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await ct(e, t, "icon-shape default"), d = t.pos === "t", f = n, y = n, { nodeBorder: m } = r, { stylesMap: x } = Vr(t), C = -y / 2, k = -f / 2, S = t.label ? 8 : 0, T = st.svg(c), _ = it(t, { stroke: "none", fill: "none" });
  t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
  const L = T.rectangle(C, k, y, f, _), M = Math.max(y, h.width), v = f + h.height + S, X = T.rectangle(-M / 2, -v / 2, M, v, {
    ..._,
    fill: "transparent",
    stroke: "none"
  }), z = c.insert(() => L, ":first-child"), I = c.insert(() => X);
  if (t.icon) {
    const et = c.append("g");
    et.html(
      `<g>${await Zi(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const H = et.node().getBBox(), E = H.width, O = H.height, B = H.x, R = H.y;
    et.attr(
      "transform",
      `translate(${-E / 2 - B},${d ? h.height / 2 + S / 2 - O / 2 - R : -h.height / 2 - S / 2 - O / 2 - R})`
    ), et.attr("style", `color: ${x.get("stroke") ?? m};`);
  }
  return u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${d ? -v / 2 : v / 2 - h.height})`
  ), z.attr(
    "transform",
    `translate(0,${d ? h.height / 2 + S / 2 : -h.height / 2 - S / 2})`
  ), at(t, I), t.intersect = function(et) {
    if (P.info("iconSquare intersect", t, et), !t.label)
      return rt.rect(t, et);
    const H = t.x ?? 0, E = t.y ?? 0, O = t.height ?? 0;
    let B = [];
    return d ? B = [
      { x: H - h.width / 2, y: E - O / 2 },
      { x: H + h.width / 2, y: E - O / 2 },
      { x: H + h.width / 2, y: E - O / 2 + h.height + S },
      { x: H + y / 2, y: E - O / 2 + h.height + S },
      { x: H + y / 2, y: E + O / 2 },
      { x: H - y / 2, y: E + O / 2 },
      { x: H - y / 2, y: E - O / 2 + h.height + S },
      { x: H - h.width / 2, y: E - O / 2 + h.height + S }
    ] : B = [
      { x: H - y / 2, y: E - O / 2 },
      { x: H + y / 2, y: E - O / 2 },
      { x: H + y / 2, y: E - O / 2 + f },
      { x: H + h.width / 2, y: E - O / 2 + f },
      { x: H + h.width / 2 / 2, y: E + O / 2 },
      { x: H - h.width / 2, y: E + O / 2 },
      { x: H - h.width / 2, y: E - O / 2 + f },
      { x: H - y / 2, y: E - O / 2 + f }
    ], rt.polygon(t, B, et);
  }, c;
}
p(ep, "icon");
async function rp(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = nt(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await ct(e, t, "icon-shape default"), d = 20, f = t.label ? 8 : 0, y = t.pos === "t", { nodeBorder: m, mainBkg: x } = r, { stylesMap: C } = Vr(t), k = st.svg(c), S = it(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const T = C.get("fill");
  S.stroke = T ?? x;
  const _ = c.append("g");
  t.icon && _.html(
    `<g>${await Zi(t.icon, {
      height: n,
      width: n,
      fallbackPrefix: ""
    })}</g>`
  );
  const L = _.node().getBBox(), M = L.width, v = L.height, X = L.x, z = L.y, I = Math.max(M, v) * Math.SQRT2 + d * 2, et = k.circle(0, 0, I, S), H = Math.max(I, h.width), E = I + h.height + f, O = k.rectangle(-H / 2, -E / 2, H, E, {
    ...S,
    fill: "transparent",
    stroke: "none"
  }), B = c.insert(() => et, ":first-child"), R = c.insert(() => O);
  return _.attr(
    "transform",
    `translate(${-M / 2 - X},${y ? h.height / 2 + f / 2 - v / 2 - z : -h.height / 2 - f / 2 - v / 2 - z})`
  ), _.attr("style", `color: ${C.get("stroke") ?? m};`), u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${y ? -E / 2 : E / 2 - h.height})`
  ), B.attr(
    "transform",
    `translate(0,${y ? h.height / 2 + f / 2 : -h.height / 2 - f / 2})`
  ), at(t, R), t.intersect = function($) {
    return P.info("iconSquare intersect", t, $), rt.rect(t, $);
  }, c;
}
p(rp, "iconCircle");
async function ip(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = nt(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: d } = await ct(
    e,
    t,
    "icon-shape default"
  ), f = t.pos === "t", y = n + u * 2, m = n + u * 2, { nodeBorder: x, mainBkg: C } = r, { stylesMap: k } = Vr(t), S = -m / 2, T = -y / 2, _ = t.label ? 8 : 0, L = st.svg(c), M = it(t, {});
  t.look !== "handDrawn" && (M.roughness = 0, M.fillStyle = "solid");
  const v = k.get("fill");
  M.stroke = v ?? C;
  const X = L.path(he(S, T, m, y, 5), M), z = Math.max(m, h.width), I = y + h.height + _, et = L.rectangle(-z / 2, -I / 2, z, I, {
    ...M,
    fill: "transparent",
    stroke: "none"
  }), H = c.insert(() => X, ":first-child").attr("class", "icon-shape2"), E = c.insert(() => et);
  if (t.icon) {
    const O = c.append("g");
    O.html(
      `<g>${await Zi(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const B = O.node().getBBox(), R = B.width, $ = B.height, J = B.x, Z = B.y;
    O.attr(
      "transform",
      `translate(${-R / 2 - J},${f ? h.height / 2 + _ / 2 - $ / 2 - Z : -h.height / 2 - _ / 2 - $ / 2 - Z})`
    ), O.attr("style", `color: ${k.get("stroke") ?? x};`);
  }
  return d.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${f ? -I / 2 : I / 2 - h.height})`
  ), H.attr(
    "transform",
    `translate(0,${f ? h.height / 2 + _ / 2 : -h.height / 2 - _ / 2})`
  ), at(t, E), t.intersect = function(O) {
    if (P.info("iconSquare intersect", t, O), !t.label)
      return rt.rect(t, O);
    const B = t.x ?? 0, R = t.y ?? 0, $ = t.height ?? 0;
    let J = [];
    return f ? J = [
      { x: B - h.width / 2, y: R - $ / 2 },
      { x: B + h.width / 2, y: R - $ / 2 },
      { x: B + h.width / 2, y: R - $ / 2 + h.height + _ },
      { x: B + m / 2, y: R - $ / 2 + h.height + _ },
      { x: B + m / 2, y: R + $ / 2 },
      { x: B - m / 2, y: R + $ / 2 },
      { x: B - m / 2, y: R - $ / 2 + h.height + _ },
      { x: B - h.width / 2, y: R - $ / 2 + h.height + _ }
    ] : J = [
      { x: B - m / 2, y: R - $ / 2 },
      { x: B + m / 2, y: R - $ / 2 },
      { x: B + m / 2, y: R - $ / 2 + y },
      { x: B + h.width / 2, y: R - $ / 2 + y },
      { x: B + h.width / 2 / 2, y: R + $ / 2 },
      { x: B - h.width / 2, y: R + $ / 2 },
      { x: B - h.width / 2, y: R - $ / 2 + y },
      { x: B - m / 2, y: R - $ / 2 + y }
    ], rt.polygon(t, J, O);
  }, c;
}
p(ip, "iconRounded");
async function sp(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = nt(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: d } = await ct(
    e,
    t,
    "icon-shape default"
  ), f = t.pos === "t", y = n + u * 2, m = n + u * 2, { nodeBorder: x, mainBkg: C } = r, { stylesMap: k } = Vr(t), S = -m / 2, T = -y / 2, _ = t.label ? 8 : 0, L = st.svg(c), M = it(t, {});
  t.look !== "handDrawn" && (M.roughness = 0, M.fillStyle = "solid");
  const v = k.get("fill");
  M.stroke = v ?? C;
  const X = L.path(he(S, T, m, y, 0.1), M), z = Math.max(m, h.width), I = y + h.height + _, et = L.rectangle(-z / 2, -I / 2, z, I, {
    ...M,
    fill: "transparent",
    stroke: "none"
  }), H = c.insert(() => X, ":first-child"), E = c.insert(() => et);
  if (t.icon) {
    const O = c.append("g");
    O.html(
      `<g>${await Zi(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const B = O.node().getBBox(), R = B.width, $ = B.height, J = B.x, Z = B.y;
    O.attr(
      "transform",
      `translate(${-R / 2 - J},${f ? h.height / 2 + _ / 2 - $ / 2 - Z : -h.height / 2 - _ / 2 - $ / 2 - Z})`
    ), O.attr("style", `color: ${k.get("stroke") ?? x};`);
  }
  return d.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${f ? -I / 2 : I / 2 - h.height})`
  ), H.attr(
    "transform",
    `translate(0,${f ? h.height / 2 + _ / 2 : -h.height / 2 - _ / 2})`
  ), at(t, E), t.intersect = function(O) {
    if (P.info("iconSquare intersect", t, O), !t.label)
      return rt.rect(t, O);
    const B = t.x ?? 0, R = t.y ?? 0, $ = t.height ?? 0;
    let J = [];
    return f ? J = [
      { x: B - h.width / 2, y: R - $ / 2 },
      { x: B + h.width / 2, y: R - $ / 2 },
      { x: B + h.width / 2, y: R - $ / 2 + h.height + _ },
      { x: B + m / 2, y: R - $ / 2 + h.height + _ },
      { x: B + m / 2, y: R + $ / 2 },
      { x: B - m / 2, y: R + $ / 2 },
      { x: B - m / 2, y: R - $ / 2 + h.height + _ },
      { x: B - h.width / 2, y: R - $ / 2 + h.height + _ }
    ] : J = [
      { x: B - m / 2, y: R - $ / 2 },
      { x: B + m / 2, y: R - $ / 2 },
      { x: B + m / 2, y: R - $ / 2 + y },
      { x: B + h.width / 2, y: R - $ / 2 + y },
      { x: B + h.width / 2 / 2, y: R + $ / 2 },
      { x: B - h.width / 2, y: R + $ / 2 },
      { x: B - h.width / 2, y: R - $ / 2 + y },
      { x: B - m / 2, y: R - $ / 2 + y }
    ], rt.polygon(t, J, O);
  }, c;
}
p(sp, "iconSquare");
async function op(e, t, { config: { flowchart: r } }) {
  const i = new Image();
  i.src = t?.img ?? "", await i.decode();
  const s = Number(i.naturalWidth.toString().replace("px", "")), o = Number(i.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = s / o;
  const { labelStyles: a } = nt(t);
  t.labelStyle = a;
  const n = r?.wrappingWidth;
  t.defaultWidth = r?.wrappingWidth;
  const l = Math.max(
    t.label ? n ?? 0 : 0,
    t?.assetWidth ?? s
  ), c = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : l, h = t.constraint === "on" ? c / t.imageAspectRatio : t?.assetHeight ?? o;
  t.width = Math.max(c, n ?? 0);
  const { shapeSvg: u, bbox: d, label: f } = await ct(e, t, "image-shape default"), y = t.pos === "t", m = -c / 2, x = -h / 2, C = t.label ? 8 : 0, k = st.svg(u), S = it(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const T = k.rectangle(m, x, c, h, S), _ = Math.max(c, d.width), L = h + d.height + C, M = k.rectangle(-_ / 2, -L / 2, _, L, {
    ...S,
    fill: "none",
    stroke: "none"
  }), v = u.insert(() => T, ":first-child"), X = u.insert(() => M);
  if (t.img) {
    const z = u.append("image");
    z.attr("href", t.img), z.attr("width", c), z.attr("height", h), z.attr("preserveAspectRatio", "none"), z.attr(
      "transform",
      `translate(${-c / 2},${y ? L / 2 - h : -L / 2})`
    );
  }
  return f.attr(
    "transform",
    `translate(${-d.width / 2 - (d.x - (d.left ?? 0))},${y ? -h / 2 - d.height / 2 - C / 2 : h / 2 - d.height / 2 + C / 2})`
  ), v.attr(
    "transform",
    `translate(0,${y ? d.height / 2 + C / 2 : -d.height / 2 - C / 2})`
  ), at(t, X), t.intersect = function(z) {
    if (P.info("iconSquare intersect", t, z), !t.label)
      return rt.rect(t, z);
    const I = t.x ?? 0, et = t.y ?? 0, H = t.height ?? 0;
    let E = [];
    return y ? E = [
      { x: I - d.width / 2, y: et - H / 2 },
      { x: I + d.width / 2, y: et - H / 2 },
      { x: I + d.width / 2, y: et - H / 2 + d.height + C },
      { x: I + c / 2, y: et - H / 2 + d.height + C },
      { x: I + c / 2, y: et + H / 2 },
      { x: I - c / 2, y: et + H / 2 },
      { x: I - c / 2, y: et - H / 2 + d.height + C },
      { x: I - d.width / 2, y: et - H / 2 + d.height + C }
    ] : E = [
      { x: I - c / 2, y: et - H / 2 },
      { x: I + c / 2, y: et - H / 2 },
      { x: I + c / 2, y: et - H / 2 + h },
      { x: I + d.width / 2, y: et - H / 2 + h },
      { x: I + d.width / 2 / 2, y: et + H / 2 },
      { x: I - d.width / 2, y: et + H / 2 },
      { x: I - d.width / 2, y: et - H / 2 + h },
      { x: I - c / 2, y: et - H / 2 + h }
    ], rt.polygon(t, E, z);
  }, u;
}
p(op, "imageSquare");
async function ap(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await ct(e, t, ut(t)), c = Math.max(l.height + o * 2, t.height ?? 0), h = Math.max(l.width + a * 2, (t.width ?? 0) - c), u = [
    { x: 0, y: 0 },
    { x: h, y: 0 },
    { x: h + 3 * c / 6, y: -c },
    { x: -3 * c / 6, y: -c }
  ];
  let d;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const y = st.svg(n), m = it(t, {}), x = Ft(u), C = y.path(x, m);
    d = n.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), f && d.attr("style", f);
  } else
    d = Oe(n, h, c, u);
  return i && d.attr("style", i), t.width = h, t.height = c, at(t, d), t.intersect = function(y) {
    return rt.polygon(t, u, y);
  }, n;
}
p(ap, "inv_trapezoid");
async function np(e, t) {
  const { shapeSvg: r, bbox: i, label: s } = await ct(e, t, "label"), o = r.insert("rect", ":first-child");
  return o.attr("width", 0.1).attr("height", 0.1), r.attr("class", "label edgeLabel"), s.attr(
    "transform",
    `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`
  ), at(t, o), t.intersect = function(l) {
    return rt.rect(t, l);
  }, r;
}
p(np, "labelRect");
async function lp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await ct(e, t, ut(t)), c = Math.max(l.height + o, t.height ?? 0), h = Math.max(l.width + a, (t.width ?? 0) - c), u = [
    { x: 0, y: 0 },
    { x: h + 3 * c / 6, y: 0 },
    { x: h, y: -c },
    { x: -(3 * c) / 6, y: -c }
  ];
  let d;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const y = st.svg(n), m = it(t, {}), x = Ft(u), C = y.path(x, m);
    d = n.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), f && d.attr("style", f);
  } else
    d = Oe(n, h, c, u);
  return i && d.attr("style", i), t.width = h, t.height = c, at(t, d), t.intersect = function(y) {
    return rt.polygon(t, u, y);
  }, n;
}
p(lp, "lean_left");
async function hp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await ct(e, t, ut(t)), c = Math.max(l.height + o, t.height ?? 0), h = Math.max(l.width + a, (t.width ?? 0) - c), u = [
    { x: -3 * c / 6, y: 0 },
    { x: h, y: 0 },
    { x: h + 3 * c / 6, y: -c },
    { x: 0, y: -c }
  ];
  let d;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const y = st.svg(n), m = it(t, {}), x = Ft(u), C = y.path(x, m);
    d = n.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), f && d.attr("style", f);
  } else
    d = Oe(n, h, c, u);
  return i && d.attr("style", i), t.width = h, t.height = c, at(t, d), t.intersect = function(y) {
    return rt.polygon(t, u, y);
  }, n;
}
p(hp, "lean_right");
function cp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.label = "", t.labelStyle = r;
  const s = e.insert("g").attr("class", ut(t)).attr("id", t.domId ?? t.id), { cssStyles: o } = t, a = Math.max(35, t?.width ?? 0), n = Math.max(35, t?.height ?? 0), l = 7, c = [
    { x: a, y: 0 },
    { x: 0, y: n + l / 2 },
    { x: a - 2 * l, y: n + l / 2 },
    { x: 0, y: 2 * n },
    { x: a, y: n - l / 2 },
    { x: 2 * l, y: n - l / 2 }
  ], h = st.svg(s), u = it(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const d = Ft(c), f = h.path(d, u), y = s.insert(() => f, ":first-child");
  return y.attr("class", "outer-path"), o && t.look !== "handDrawn" && y.selectAll("path").attr("style", o), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(-${a / 2},${-n})`), at(t, y), t.intersect = function(m) {
    return P.info("lightningBolt intersect", t, m), rt.polygon(t, c, m);
  }, s;
}
p(cp, "lightningBolt");
var j2 = /* @__PURE__ */ p((e, t, r, i, s, o, a) => [
  `M${e},${t + o}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + o + a}`,
  `a${s},${o} 0,0,0 ${r},0`
].join(" "), "createCylinderPathD"), U2 = /* @__PURE__ */ p((e, t, r, i, s, o, a) => [
  `M${e},${t + o}`,
  `M${e + r},${t + o}`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + o + a}`,
  `a${s},${o} 0,0,0 ${r},0`
].join(" "), "createOuterCylinderPathD"), G2 = /* @__PURE__ */ p((e, t, r, i, s, o) => [`M${e - r / 2},${-i / 2}`, `a${s},${o} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD"), jh = 10, Uh = 10;
async function up(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 24 : s;
  if (t.width || t.height) {
    const C = t.width ?? 0;
    t.width = (t.width ?? 0) - o, t.width < Uh && (t.width = Uh);
    const S = C / 2 / (2.5 + C / 50);
    t.height = (t.height ?? 0) - a - S * 3, t.height < jh && (t.height = jh);
  }
  const { shapeSvg: n, bbox: l, label: c } = await ct(e, t, ut(t)), h = (t?.width ? t?.width : l.width) + o * 2, u = h / 2, d = u / (2.5 + h / 50), f = (t?.height ? t?.height : l.height) + d + a * 2, y = f * 0.1;
  let m;
  const { cssStyles: x } = t;
  if (t.look === "handDrawn") {
    const C = st.svg(n), k = U2(0, 0, h, f, u, d, y), S = G2(0, d, h, f, u, d), T = it(t, {}), _ = C.path(k, T), L = C.path(S, T);
    n.insert(() => L, ":first-child").attr("class", "line"), m = n.insert(() => _, ":first-child"), m.attr("class", "basic label-container"), x && m.attr("style", x);
  } else {
    const C = j2(0, 0, h, f, u, d, y);
    m = n.insert("path", ":first-child").attr("d", C).attr("class", "basic label-container outer-path").attr("style", Wt(x)).attr("style", i);
  }
  return m.attr("label-offset-y", d), m.attr("transform", `translate(${-h / 2}, ${-(f / 2 + d)})`), at(t, m), c.attr(
    "transform",
    `translate(${-(l.width / 2) - (l.x - (l.left ?? 0))}, ${-(l.height / 2) + d - (l.y - (l.top ?? 0))})`
  ), t.intersect = function(C) {
    const k = rt.rect(t, C), S = k.x - (t.x ?? 0);
    if (u != 0 && (Math.abs(S) < (t.width ?? 0) / 2 || Math.abs(S) == (t.width ?? 0) / 2 && Math.abs(k.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - d)) {
      let T = d * d * (1 - S * S / (u * u));
      T > 0 && (T = Math.sqrt(T)), T = d - T, C.y - (t.y ?? 0) > 0 && (T = -T), k.y += T;
    }
    return k;
  }, n;
}
p(up, "linedCylinder");
async function dp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  if (t.width || t.height) {
    const T = t.width;
    t.width = (T ?? 0) * 10 / 11 - o * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - a * 2, t.height < 10 && (t.height = 10);
  }
  const { shapeSvg: n, bbox: l, label: c } = await ct(e, t, ut(t)), h = (t?.width ? t?.width : l.width) + (o ?? 0) * 2, u = (t?.height ? t?.height : l.height) + (a ?? 0) * 2, d = t.look === "neo" ? u / 4 : u / 8, f = u + d, { cssStyles: y } = t, m = st.svg(n), x = it(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const C = [
    { x: -h / 2 - h / 2 * 0.1, y: -f / 2 },
    { x: -h / 2 - h / 2 * 0.1, y: f / 2 },
    ...ir(
      -h / 2 - h / 2 * 0.1,
      f / 2,
      h / 2 + h / 2 * 0.1,
      f / 2,
      d,
      0.8
    ),
    { x: h / 2 + h / 2 * 0.1, y: -f / 2 },
    { x: -h / 2 - h / 2 * 0.1, y: -f / 2 },
    { x: -h / 2, y: -f / 2 },
    { x: -h / 2, y: f / 2 * 1.1 },
    { x: -h / 2, y: -f / 2 }
  ], k = m.polygon(
    C.map((T) => [T.x, T.y]),
    x
  ), S = n.insert(() => k, ":first-child");
  return S.attr("class", "basic label-container outer-path"), y && t.look !== "handDrawn" && S.selectAll("path").attr("style", y), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), S.attr("transform", `translate(0,${-d / 2})`), c.attr(
    "transform",
    `translate(${-h / 2 + (t.padding ?? 0) + h / 2 * 0.1 / 2 - (l.x - (l.left ?? 0))},${-u / 2 + (t.padding ?? 0) - d / 2 - (l.y - (l.top ?? 0))})`
  ), at(t, S), t.intersect = function(T) {
    return rt.polygon(t, C, T);
  }, n;
}
p(dp, "linedWaveEdgedRect");
async function fp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = t.look === "neo" ? 10 : 5;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - o * 2 - 2 * n, 10), t.height = Math.max((t?.height ?? 0) - a * 2 - 2 * n, 10));
  const { shapeSvg: l, bbox: c, label: h } = await ct(e, t, ut(t)), u = (t?.width ? t?.width : c.width) + o * 2 + 2 * n, d = (t?.height ? t?.height : c.height) + a * 2 + 2 * n, f = u - 2 * n, y = d - 2 * n, m = -f / 2, x = -y / 2, { cssStyles: C } = t, k = st.svg(l), S = it(t, {}), T = [
    { x: m - n, y: x + n },
    { x: m - n, y: x + y + n },
    { x: m + f - n, y: x + y + n },
    { x: m + f - n, y: x + y },
    { x: m + f, y: x + y },
    { x: m + f, y: x + y - n },
    { x: m + f + n, y: x + y - n },
    { x: m + f + n, y: x - n },
    { x: m + n, y: x - n },
    { x: m + n, y: x },
    { x: m, y: x },
    { x: m, y: x + n }
  ], _ = [
    { x: m, y: x + n },
    { x: m + f - n, y: x + n },
    { x: m + f - n, y: x + y },
    { x: m + f, y: x + y },
    { x: m + f, y: x },
    { x: m, y: x }
  ];
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const L = Ft(T);
  let M = k.path(L, S);
  const v = Ft(_);
  let X = k.path(v, S);
  t.look !== "handDrawn" && (M = Ya(M), X = Ya(X));
  const z = l.insert("g", ":first-child");
  return z.insert(() => M), z.insert(() => X), z.attr("class", "basic label-container outer-path"), C && t.look !== "handDrawn" && z.selectAll("path").attr("style", C), i && t.look !== "handDrawn" && z.selectAll("path").attr("style", i), h.attr(
    "transform",
    `translate(${-(c.width / 2) - n - (c.x - (c.left ?? 0))}, ${-(c.height / 2) + n - (c.y - (c.top ?? 0))})`
  ), at(t, z), t.intersect = function(I) {
    return rt.polygon(t, T, I);
  }, l;
}
p(fp, "multiRect");
async function pp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await ct(e, t, ut(t)), n = t.padding ?? 0, l = t.look === "neo" ? 16 : n, c = t.look === "neo" ? 12 : n;
  let h = !0;
  (t.width || t.height) && (h = !1, t.width = (t?.width ?? 0) - l * 2, t.height = (t?.height ?? 0) - c * 3);
  const u = Math.max(o.width, t?.width ?? 0) + l * 2, d = Math.max(o.height, t?.height ?? 0) + c * 3, f = t.look === "neo" ? d / 4 : d / 8, y = d + (h ? f / 2 : -f / 2), m = -u / 2, x = -y / 2, C = 10, { cssStyles: k } = t, S = ir(
    m - C,
    x + y + C,
    m + u - C,
    x + y + C,
    f,
    0.8
  ), T = S?.[S.length - 1], _ = [
    { x: m - C, y: x + C },
    { x: m - C, y: x + y + C },
    ...S,
    { x: m + u - C, y: T.y - C },
    { x: m + u, y: T.y - C },
    { x: m + u, y: T.y - 2 * C },
    { x: m + u + C, y: T.y - 2 * C },
    { x: m + u + C, y: x - C },
    { x: m + C, y: x - C },
    { x: m + C, y: x },
    { x: m, y: x },
    { x: m, y: x + C }
  ], L = [
    { x: m, y: x + C },
    { x: m + u - C, y: x + C },
    { x: m + u - C, y: T.y - C },
    { x: m + u, y: T.y - C },
    { x: m + u, y: x },
    { x: m, y: x }
  ], M = st.svg(s), v = it(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const X = Ft(_), z = M.path(X, v), I = Ft(L), et = M.path(I, v), H = s.insert(() => z, ":first-child");
  return H.insert(() => et), H.attr("class", "basic label-container outer-path"), k && t.look !== "handDrawn" && H.selectAll("path").attr("style", k), i && t.look !== "handDrawn" && H.selectAll("path").attr("style", i), H.attr("transform", `translate(0,${-f / 2})`), a.attr(
    "transform",
    `translate(${-(o.width / 2) - C - (o.x - (o.left ?? 0))}, ${-(o.height / 2) + C - f / 2 - (o.y - (o.top ?? 0))})`
  ), at(t, H), t.intersect = function(E) {
    return rt.polygon(t, _, E);
  }, s;
}
p(pp, "multiWaveEdgedRectangle");
async function gp(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = nt(t);
  t.labelStyle = i, t.useHtmlLabels || Zt(It()) || (t.centerLabel = !0);
  const { shapeSvg: a, bbox: n, label: l } = await ct(e, t, ut(t)), c = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), h = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), u = -c / 2, d = -h / 2, { cssStyles: f } = t, y = st.svg(a), m = it(t, {
    fill: r.noteBkgColor,
    stroke: r.noteBorderColor
  });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const x = y.rectangle(u, d, c, h, m), C = a.insert(() => x, ":first-child");
  return C.attr("class", "basic label-container outer-path"), l.attr("class", "label noteLabel"), f && t.look !== "handDrawn" && C.selectAll("path").attr("style", f), s && t.look !== "handDrawn" && C.selectAll("path").attr("style", s), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), at(t, C), t.intersect = function(k) {
    return rt.rect(t, k);
  }, a;
}
p(gp, "note");
var X2 = /* @__PURE__ */ p((e, t, r) => [
  `M${e + r / 2},${t}`,
  `L${e + r},${t - r / 2}`,
  `L${e + r / 2},${t - r}`,
  `L${e},${t - r / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function yp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o } = await ct(e, t, ut(t)), a = o.width + (t.padding ?? 0), n = o.height + (t.padding ?? 0), l = a + n, c = 0.5, h = [
    { x: l / 2, y: 0 },
    { x: l, y: -l / 2 },
    { x: l / 2, y: -l },
    { x: 0, y: -l / 2 }
  ];
  let u;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const f = st.svg(s), y = it(t, {}), m = X2(0, 0, l), x = f.path(m, y);
    u = s.insert(() => x, ":first-child").attr("transform", `translate(${-l / 2 + c}, ${l / 2})`), d && u.attr("style", d);
  } else
    u = Oe(s, l, l, h), u.attr("transform", `translate(${-l / 2 + c}, ${l / 2})`);
  return i && u.attr("style", i), at(t, u), t.calcIntersect = function(f, y) {
    const m = f.width, x = [
      { x: m / 2, y: 0 },
      { x: m, y: -m / 2 },
      { x: m / 2, y: -m },
      { x: 0, y: -m / 2 }
    ], C = rt.polygon(f, x, y);
    return { x: C.x - 0.5, y: C.y - 0.5 };
  }, t.intersect = function(f) {
    return this.calcIntersect(t, f);
  }, s;
}
p(yp, "question");
async function mp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 21 : s ?? 0, a = t.look === "neo" ? 12 : s ?? 0, { shapeSvg: n, bbox: l, label: c } = await ct(e, t, ut(t)), h = l.width + (t.look === "neo" ? o * 2 : o), u = Math.max(
    l.height + (t.look === "neo" ? a * 2 : a),
    t.height ?? 0
  ), d = u / 4, y = -Math.max(h, (t.width ?? 0) - d) / 2, m = -u / 2, x = m / 2, C = [
    { x: y + x, y: m },
    { x: y, y: 0 },
    { x: y + x, y: -m },
    { x: -y, y: -m },
    { x: -y, y: m }
  ], { cssStyles: k } = t, S = st.svg(n), T = it(t, {});
  t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
  const _ = Ft(C), L = S.path(_, T), M = n.insert(() => L, ":first-child");
  return M.attr("class", "basic label-container outer-path"), k && t.look !== "handDrawn" && M.selectAll("path").attr("style", k), i && t.look !== "handDrawn" && M.selectAll("path").attr("style", i), M.attr("transform", `translate(${-x / 2},0)`), c.attr(
    "transform",
    `translate(${-x / 2 - l.width / 2 - (l.x - (l.left ?? 0))}, ${-(l.height / 2) - (l.y - (l.top ?? 0))})`
  ), at(t, M), t.intersect = function(v) {
    return rt.polygon(t, C, v);
  }, n;
}
p(mp, "rect_left_inv_arrow");
async function xp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  let s;
  t.cssClasses ? s = "node " + t.cssClasses : s = "node default";
  const o = e.insert("g").attr("class", s).attr("id", t.domId || t.id), a = o.insert("g"), n = o.insert("g").attr("class", "label").attr("style", i), l = t.description, c = t.label, h = await Ke(n, c, t.labelStyle, !0, !0);
  let u = { width: 0, height: 0 };
  if (Zt(_t())) {
    const v = h.children[0], X = Tt(h);
    u = v.getBoundingClientRect(), X.attr("width", u.width), X.attr("height", u.height);
  }
  P.info("Text 2", l);
  const d = l || [], f = h.getBBox(), y = await Ke(
    n,
    Array.isArray(d) ? d.join("<br/>") : d,
    t.labelStyle,
    !0,
    !0
  ), m = y.children[0], x = Tt(y);
  u = m.getBoundingClientRect(), x.attr("width", u.width), x.attr("height", u.height);
  const C = (t.padding || 0) / 2;
  Tt(y).attr(
    "transform",
    "translate( " + (u.width > f.width ? 0 : (f.width - u.width) / 2) + ", " + (f.height + C + 5) + ")"
  ), Tt(h).attr(
    "transform",
    "translate( " + (u.width < f.width ? 0 : -(f.width - u.width) / 2) + ", 0)"
  ), u = n.node().getBBox(), n.attr(
    "transform",
    "translate(" + -u.width / 2 + ", " + (-u.height / 2 - C + 3) + ")"
  );
  const k = u.width + (t.padding || 0), S = u.height + (t.padding || 0), T = -u.width / 2 - C, _ = -u.height / 2 - C;
  let L, M;
  if (t.look === "handDrawn") {
    const v = st.svg(o), X = it(t, {}), z = v.path(
      he(T, _, k, S, t.rx || 0),
      X
    ), I = v.line(
      -u.width / 2 - C,
      -u.height / 2 - C + f.height + C,
      u.width / 2 + C,
      -u.height / 2 - C + f.height + C,
      X
    );
    M = o.insert(() => (P.debug("Rough node insert CXC", z), I), ":first-child"), L = o.insert(() => (P.debug("Rough node insert CXC", z), z), ":first-child");
  } else
    L = a.insert("rect", ":first-child"), M = a.insert("line"), L.attr("class", "outer title-state").attr("style", i).attr("x", -u.width / 2 - C).attr("y", -u.height / 2 - C).attr("width", u.width + (t.padding || 0)).attr("height", u.height + (t.padding || 0)), M.attr("class", "divider").attr("x1", -u.width / 2 - C).attr("x2", u.width / 2 + C).attr("y1", -u.height / 2 - C + f.height + C).attr("y2", -u.height / 2 - C + f.height + C);
  return at(t, L), t.intersect = function(v) {
    return rt.rect(t, v);
  }, o;
}
p(xp, "rectWithTitle");
async function Cp(e, t, { config: { themeVariables: r } }) {
  const i = r?.radius ?? 5, s = {
    rx: i,
    ry: i,
    labelPaddingX: (t?.padding ?? 0) * 1,
    labelPaddingY: (t?.padding ?? 0) * 1
  };
  return Zr(e, t, s);
}
p(Cp, "roundedRect");
var sr = 8;
async function bp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 12 : t.padding ?? 0, { shapeSvg: a, bbox: n, label: l } = await ct(e, t, ut(t)), c = (t?.width ?? n.width) + s * 2 + (t.look === "neo" ? sr : sr * 2), h = (t?.height ?? n.height) + o * 2, u = c - sr, d = h, f = sr - c / 2, y = -h / 2, { cssStyles: m } = t, x = st.svg(a), C = it(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const k = [
    { x: f, y },
    { x: f + u, y },
    { x: f + u, y: y + d },
    { x: f - sr, y: y + d },
    { x: f - sr, y },
    { x: f, y },
    { x: f, y: y + d }
  ], S = x.polygon(
    k.map((_) => [_.x, _.y]),
    C
  ), T = a.insert(() => S, ":first-child");
  return T.attr("class", "basic label-container outer-path").attr("style", Wt(m)), i && t.look !== "handDrawn" && T.selectAll("path").attr("style", i), m && t.look !== "handDrawn" && T.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${sr / 2 - n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), at(t, T), t.intersect = function(_) {
    return rt.rect(t, _);
  }, a;
}
p(bp, "shadedProcess");
async function kp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - o * 2, 10), t.height = Math.max((t?.height ?? 0) / 1.5 - a * 2, 10));
  const { shapeSvg: n, bbox: l, label: c } = await ct(e, t, ut(t)), h = (t?.width ? t?.width : l.width) + o * 2, u = ((t?.height ? t?.height : l.height) + a * 2) * 1.5, d = h, f = u / 1.5, y = -d / 2, m = -f / 2, { cssStyles: x } = t, C = st.svg(n), k = it(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const S = [
    { x: y, y: m },
    { x: y, y: m + f },
    { x: y + d, y: m + f },
    { x: y + d, y: m - f / 2 }
  ], T = Ft(S), _ = C.path(T, k), L = n.insert(() => _, ":first-child");
  return L.attr("class", "basic label-container  outer-path"), x && t.look !== "handDrawn" && L.selectChildren("path").attr("style", x), i && t.look !== "handDrawn" && L.selectChildren("path").attr("style", i), L.attr("transform", `translate(0, ${f / 4})`), c.attr(
    "transform",
    `translate(${-d / 2 + (t.padding ?? 0) - (l.x - (l.left ?? 0))}, ${-f / 4 + (t.padding ?? 0) - (l.y - (l.top ?? 0))})`
  ), at(t, L), t.intersect = function(M) {
    return rt.polygon(t, S, M);
  }, n;
}
p(kp, "slopedRect");
async function wp(e, t) {
  const r = t.padding ?? 0, i = t.look === "neo" ? 16 : r * 2, s = t.look === "neo" ? 12 : r, o = {
    rx: 0,
    ry: 0,
    labelPaddingX: t.labelPaddingX ?? i,
    labelPaddingY: s
  };
  return Zr(e, t, o);
}
p(wp, "squareRect");
async function Sp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 20 : s, a = t.look === "neo" ? 12 : s, { shapeSvg: n, bbox: l } = await ct(e, t, ut(t)), c = l.height + (t.look === "neo" ? a * 2 : a), h = l.width + c / 4 + (t.look === "neo" ? o * 2 : o), u = c / 2, { cssStyles: d } = t, f = st.svg(n), y = it(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const m = [
    { x: -h / 2 + u, y: -c / 2 },
    { x: h / 2 - u, y: -c / 2 },
    ...Be(-h / 2 + u, 0, u, 50, 90, 270),
    { x: h / 2 - u, y: c / 2 },
    ...Be(h / 2 - u, 0, u, 50, 270, 450)
  ], x = Ft(m), C = f.path(x, y), k = n.insert(() => C, ":first-child");
  return k.attr("class", "basic label-container outer-path"), d && t.look !== "handDrawn" && k.selectChildren("path").attr("style", d), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), at(t, k), t.intersect = function(S) {
    return rt.polygon(t, m, S);
  }, n;
}
p(Sp, "stadium");
async function Tp(e, t) {
  const r = {
    rx: t.look === "neo" ? 3 : 5,
    ry: t.look === "neo" ? 3 : 5
  };
  return Zr(e, t, r);
}
p(Tp, "state");
function _p(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = nt(t);
  t.labelStyle = i;
  const { cssStyles: o } = t, { lineColor: a, stateBorder: n, nodeBorder: l, nodeShadow: c } = r;
  (t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
  const h = e.insert("g").attr("class", "node default").attr("id", t.domId ?? t.id), u = st.svg(h), d = it(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const f = u.circle(0, 0, t.width, {
    ...d,
    stroke: a,
    strokeWidth: 2
  }), y = n ?? l, m = (t.width ?? 0) * 5 / 14, x = u.circle(0, 0, m, {
    ...d,
    fill: y,
    stroke: y,
    strokeWidth: 2,
    fillStyle: "solid"
  }), C = h.insert(() => f, ":first-child");
  if (C.insert(() => x), t.look !== "handDrawn" && C.attr("class", "outer-path"), o && C.selectAll("path").attr("style", o), s && C.selectAll("path").attr("style", s), t.width < 25 && c && t.look !== "handDrawn") {
    const k = e.node()?.ownerSVGElement?.id ?? "", S = k ? `${k}-drop-shadow-small` : "drop-shadow-small";
    C.attr("style", `filter:url(#${S})`);
  }
  return at(t, C), t.intersect = function(k) {
    return rt.circle(t, (t.width ?? 0) / 2, k);
  }, h;
}
p(_p, "stateEnd");
function Bp(e, t, { config: { themeVariables: r } }) {
  const { lineColor: i, nodeShadow: s } = r;
  (t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
  const o = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let a;
  if (t.look === "handDrawn") {
    const l = st.svg(o).circle(0, 0, t.width, Xb(i));
    a = o.insert(() => l), a.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
  } else
    a = o.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
  if (t.width < 25 && s && t.look !== "handDrawn") {
    const n = e.node()?.ownerSVGElement?.id ?? "", l = n ? `${n}-drop-shadow-small` : "drop-shadow-small";
    a.attr("style", `filter:url(#${l})`);
  }
  return at(t, a), t.intersect = function(n) {
    return rt.circle(t, (t.width ?? 7) / 2, n);
  }, o;
}
p(Bp, "stateStart");
var $r = 8;
async function vp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t?.padding ?? 8, o = t.look === "neo" ? 28 : s, a = t.look === "neo" ? 12 : s, { shapeSvg: n, bbox: l } = await ct(e, t, ut(t)), c = Math.max(l.width + 2 * $r + o, t.width ?? 0), h = Math.max(l.height + a, t.height ?? 0), u = c - 2 * $r, d = h, f = -c / 2, y = -h / 2, m = [
    { x: 0, y: 0 },
    { x: u, y: 0 },
    { x: u, y: -d },
    { x: 0, y: -d },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: u + 8, y: 0 },
    { x: u + 8, y: -d },
    { x: -8, y: -d },
    { x: -8, y: 0 }
  ];
  if (t.look === "handDrawn") {
    const x = st.svg(n), C = it(t, {}), k = x.rectangle(f, y, u + 16, d, C), S = x.line(f + $r, y, f + $r, y + d, C), T = x.line(f + $r + u, y, f + $r + u, y + d, C);
    n.insert(() => S, ":first-child"), n.insert(() => T, ":first-child");
    const _ = n.insert(() => k, ":first-child"), { cssStyles: L } = t;
    _.attr("class", "basic label-container").attr("style", Wt(L)), at(t, _);
  } else {
    const x = Oe(n, u, d, m);
    i && x.attr("style", i), at(t, x);
  }
  return t.intersect = function(x) {
    return rt.polygon(t, m, x);
  }, n;
}
p(vp, "subroutine");
var No = 0.2;
async function Lp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  (t.width || t.height) && (t.height = Math.max((t?.height ?? 0) - a * 2, 10), t.width = Math.max(
    (t?.width ?? 0) - o * 2 - No * (t.height + a * 2),
    10
  ));
  const { shapeSvg: n, bbox: l } = await ct(e, t, ut(t)), c = (t?.height ? t?.height : l.height) + a * 2, h = No * c, u = No * c, f = (t?.width ? t?.width : l.width) + o * 2 + h - h, y = c, m = -f / 2, x = -y / 2, { cssStyles: C } = t, k = st.svg(n), S = it(t, {}), T = [
    { x: m - h / 2, y: x },
    { x: m + f + h / 2, y: x },
    { x: m + f + h / 2, y: x + y },
    { x: m - h / 2, y: x + y }
  ], _ = [
    { x: m + f - h / 2, y: x + y },
    { x: m + f + h / 2, y: x + y },
    { x: m + f + h / 2, y: x + y - u }
  ];
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const L = Ft(T), M = k.path(L, S), v = Ft(_), X = k.path(v, { ...S, fillStyle: "solid" }), z = n.insert(() => X, ":first-child");
  return z.insert(() => M, ":first-child"), z.attr("class", "basic label-container outer-path"), C && t.look !== "handDrawn" && z.selectAll("path").attr("style", C), i && t.look !== "handDrawn" && z.selectAll("path").attr("style", i), at(t, z), t.intersect = function(I) {
    return rt.polygon(t, T, I);
  }, n;
}
p(Lp, "taggedRect");
async function Fp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await ct(e, t, ut(t)), n = Math.max(o.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 8, h = 0.2 * n, u = 0.2 * l, d = l + c, { cssStyles: f } = t, y = st.svg(s), m = it(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const x = [
    { x: -n / 2 - n / 2 * 0.1, y: d / 2 },
    ...ir(
      -n / 2 - n / 2 * 0.1,
      d / 2,
      n / 2 + n / 2 * 0.1,
      d / 2,
      c,
      0.8
    ),
    { x: n / 2 + n / 2 * 0.1, y: -d / 2 },
    { x: -n / 2 - n / 2 * 0.1, y: -d / 2 }
  ], C = -n / 2 + n / 2 * 0.1, k = -d / 2 - u * 0.4, S = [
    { x: C + n - h, y: (k + l) * 1.3 },
    { x: C + n, y: k + l - u },
    { x: C + n, y: (k + l) * 0.9 },
    ...ir(
      C + n,
      (k + l) * 1.25,
      C + n - h,
      (k + l) * 1.3,
      -l * 0.02,
      0.5
    )
  ], T = Ft(x), _ = y.path(T, m), L = Ft(S), M = y.path(L, {
    ...m,
    fillStyle: "solid"
  }), v = s.insert(() => M, ":first-child");
  return v.insert(() => _, ":first-child"), v.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && v.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(0,${-c / 2})`), a.attr(
    "transform",
    `translate(${-n / 2 + (t.padding ?? 0) - (o.x - (o.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (o.y - (o.top ?? 0))})`
  ), at(t, v), t.intersect = function(X) {
    return rt.polygon(t, x, X);
  }, s;
}
p(Fp, "taggedWaveEdgedRectangle");
async function Mp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o } = await ct(e, t, ut(t)), a = Math.max(o.width + (t.padding ?? 0), t?.width || 0), n = Math.max(o.height + (t.padding ?? 0), t?.height || 0), l = -a / 2, c = -n / 2, h = s.insert("rect", ":first-child");
  return h.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", c).attr("width", a).attr("height", n), at(t, h), t.intersect = function(u) {
    return rt.rect(t, u);
  }, s;
}
p(Mp, "text");
var V2 = /* @__PURE__ */ p((e, t, r, i, s, o) => `M${e},${t}
    a${s},${o} 0,0,1 0,${-i}
    l${r},0
    a${s},${o} 0,0,1 0,${i}
    M${r},${-i}
    a${s},${o} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD"), Z2 = /* @__PURE__ */ p((e, t, r, i, s, o) => [
  `M${e},${t}`,
  `M${e + r},${t}`,
  `a${s},${o} 0,0,0 0,${-i}`,
  `l${-r},0`,
  `a${s},${o} 0,0,0 0,${i}`,
  `l${r},0`
].join(" "), "createOuterCylinderPathD"), K2 = /* @__PURE__ */ p((e, t, r, i, s, o) => [`M${e + r / 2},${-i / 2}`, `a${s},${o} 0,0,0 0,${i}`].join(" "), "createInnerCylinderPathD"), Gh = 5, Xh = 10;
async function Ap(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 12 : s / 2, a = t.height ?? 0;
  if (t.height && (t.height = t.height - o, t.height < Gh && (t.height = Gh)), t.width) {
    const C = a / 2 / (2.5 + a / 50);
    t.width = t.width - o - C * 3, t.width < Xh && (t.width = Xh);
  }
  const { shapeSvg: n, bbox: l, label: c } = await ct(e, t, ut(t)), h = Math.max(t.height ?? 0, l.height) + o, u = h / 2, d = u / (2.5 + h / 50), f = Math.max(t.width ?? 0, l.width) + d + o, { cssStyles: y } = t;
  let m;
  if (t.look === "handDrawn") {
    const x = st.svg(n), C = Z2(0, 0, f, h, d, u), k = K2(0, 0, f, h, d, u), S = x.path(C, it(t, {})), T = x.path(k, it(t, { fill: "none" }));
    m = n.insert(() => T, ":first-child"), m = n.insert(() => S, ":first-child"), m.attr("class", "basic label-container"), y && m.attr("style", y);
  } else {
    const x = V2(0, 0, f, h, d, u);
    m = n.insert("path", ":first-child").attr("d", x).attr("class", "basic label-container").attr("style", Wt(y)).attr("style", i), m.attr("class", "basic label-container outer-path"), y && m.selectAll("path").attr("style", y), i && m.selectAll("path").attr("style", i);
  }
  return m.attr("label-offset-x", d), m.attr("transform", `translate(${-f / 2}, ${h / 2} )`), c.attr(
    "transform",
    `translate(${-(l.width / 2) - d - (l.x - (l.left ?? 0))}, ${-(l.height / 2) - (l.y - (l.top ?? 0))})`
  ), at(t, m), t.intersect = function(x) {
    const C = rt.rect(t, x), k = C.y - (t.y ?? 0);
    if (u != 0 && (Math.abs(k) < (t.height ?? 0) / 2 || Math.abs(k) == (t.height ?? 0) / 2 && Math.abs(C.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - d)) {
      let S = d * d * (1 - k * k / (u * u));
      S != 0 && (S = Math.sqrt(Math.abs(S))), S = d - S, x.x - (t.x ?? 0) > 0 && (S = -S), C.x += S;
    }
    return C;
  }, n;
}
p(Ap, "tiltedCylinder");
async function Ep(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = (t.look === "neo", s), a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await ct(e, t, ut(t)), c = Math.max(l.height + o, t.height ?? 0), h = Math.max(l.width + a, (t.width ?? 0) - c), u = [
    { x: -3 * c / 6, y: 0 },
    { x: h + 3 * c / 6, y: 0 },
    { x: h, y: -c },
    { x: 0, y: -c }
  ];
  let d;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const y = st.svg(n), m = it(t, {}), x = Ft(u), C = y.path(x, m);
    d = n.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), f && d.attr("style", f);
  } else
    d = Oe(n, h, c, u);
  return i && d.attr("style", i), t.width = h, t.height = c, at(t, d), t.intersect = function(y) {
    return rt.polygon(t, u, y);
  }, n;
}
p(Ep, "trapezoid");
async function $p(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = 15, l = 5;
  (t.width || t.height) && (t.height = (t.height ?? 0) - a * 2, t.height < l && (t.height = l), t.width = (t.width ?? 0) - o * 2, t.width < n && (t.width = n));
  const { shapeSvg: c, bbox: h } = await ct(e, t, ut(t)), u = (t?.width ? t?.width : h.width) + o * 2, d = (t?.height ? t?.height : h.height) + a * 2, { cssStyles: f } = t, y = st.svg(c), m = it(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const x = [
    { x: -u / 2 * 0.8, y: -d / 2 },
    { x: u / 2 * 0.8, y: -d / 2 },
    { x: u / 2, y: -d / 2 * 0.6 },
    { x: u / 2, y: d / 2 },
    { x: -u / 2, y: d / 2 },
    { x: -u / 2, y: -d / 2 * 0.6 }
  ], C = Ft(x), k = y.path(C, m), S = c.insert(() => k, ":first-child");
  return S.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && S.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && S.selectChildren("path").attr("style", i), at(t, S), t.intersect = function(T) {
    return rt.polygon(t, x, T);
  }, c;
}
p($p, "trapezoidalPentagon");
var Vh = 10, Zh = 10;
async function Op(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? s * 2 : s;
  (t.width || t.height) && (t.width = ((t?.width ?? 0) - o) / 2, t.width < Zh && (t.width = Zh), t.height = t?.height ?? 0, t.height < Vh && (t.height = Vh));
  const { shapeSvg: a, bbox: n, label: l } = await ct(e, t, ut(t)), c = Ee(_t().flowchart?.htmlLabels), h = (t?.width ? t?.width : n.width) + o, u = t?.height ? t?.height : h + n.height, d = u, f = [
    { x: 0, y: 0 },
    { x: d, y: 0 },
    { x: d / 2, y: -u }
  ], { cssStyles: y } = t, m = st.svg(a), x = it(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const C = Ft(f), k = m.path(C, x), S = a.insert(() => k, ":first-child").attr("transform", `translate(${-u / 2}, ${u / 2})`).attr("class", "outer-path");
  return y && t.look !== "handDrawn" && S.selectChildren("path").attr("style", y), i && t.look !== "handDrawn" && S.selectChildren("path").attr("style", i), t.width = h, t.height = u, at(t, S), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${u / 2 - (n.height + (t.padding ?? 0) / (c ? 2 : 1) - (n.y - (n.top ?? 0)))})`
  ), t.intersect = function(T) {
    return P.info("Triangle intersect", t, f, T), rt.polygon(t, f, T);
  }, a;
}
p(Op, "triangle");
async function Dp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  let n = !0;
  (t.width || t.height) && (n = !1, t.width = (t?.width ?? 0) - o * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - a * 2, t.height < 10 && (t.height = 10));
  const { shapeSvg: l, bbox: c, label: h } = await ct(e, t, ut(t)), u = (t?.width ? t?.width : c.width) + (o ?? 0) * 2, d = (t?.height ? t?.height : c.height) + (a ?? 0) * 2, f = t.look === "neo" ? d / 4 : d / 8, y = d + (n ? f : -f), { cssStyles: m } = t, C = 14 - u, k = C > 0 ? C / 2 : 0, S = st.svg(l), T = it(t, {});
  t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
  const _ = [
    { x: -u / 2 - k, y: y / 2 },
    ...ir(
      -u / 2 - k,
      y / 2,
      u / 2 + k,
      y / 2,
      f,
      0.8
    ),
    { x: u / 2 + k, y: -y / 2 },
    { x: -u / 2 - k, y: -y / 2 }
  ], L = Ft(_), M = S.path(L, T), v = l.insert(() => M, ":first-child");
  return v.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && v.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(0,${-f / 2})`), h.attr(
    "transform",
    `translate(${-u / 2 + (t.padding ?? 0) - (c.x - (c.left ?? 0))},${-d / 2 + (t.padding ?? 0) - f - (c.y - (c.top ?? 0))})`
  ), at(t, v), t.intersect = function(X) {
    return rt.polygon(t, _, X);
  }, l;
}
p(Dp, "waveEdgedRectangle");
async function Pp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 20 : s;
  if (t.width || t.height) {
    t.width = t?.width ?? 0, t.width < 20 && (t.width = 20), t.height = t?.height ?? 0, t.height < 10 && (t.height = 10);
    const T = Math.min(t.height * 0.2, t.height / 4);
    t.height = Math.ceil(t.height - a - T * (20 / 9)), t.width = t.width - o * 2;
  }
  const { shapeSvg: n, bbox: l } = await ct(e, t, ut(t)), c = (t?.width ? t?.width : l.width) + o * 2, h = (t?.height ? t?.height : l.height) + a, u = h / 8, d = h + u * 2, { cssStyles: f } = t, y = st.svg(n), m = it(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const x = [
    { x: -c / 2, y: d / 2 },
    ...ir(-c / 2, d / 2, c / 2, d / 2, u, 1),
    { x: c / 2, y: -d / 2 },
    ...ir(c / 2, -d / 2, -c / 2, -d / 2, u, -1)
  ], C = Ft(x), k = y.path(C, m), S = n.insert(() => k, ":first-child");
  return S.attr("class", "basic label-container"), f && t.look !== "handDrawn" && S.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), at(t, S), t.intersect = function(T) {
    return rt.polygon(t, x, T);
  }, n;
}
p(Pp, "waveRectangle");
var Rt = 10;
async function Ip(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 12 : t.padding ?? 0;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - s * 2 - Rt, 10), t.height = Math.max((t?.height ?? 0) - o * 2 - Rt, 10));
  const { shapeSvg: a, bbox: n, label: l } = await ct(e, t, ut(t)), c = (t?.width ? t?.width : n.width) + s * 2 + Rt, h = (t?.height ? t?.height : n.height) + o * 2 + Rt, u = c - Rt, d = h - Rt, f = -u / 2, y = -d / 2, { cssStyles: m } = t, x = st.svg(a), C = it(t, {}), k = [
    { x: f - Rt, y: y - Rt },
    { x: f - Rt, y: y + d },
    { x: f + u, y: y + d },
    { x: f + u, y: y - Rt }
  ], S = `M${f - Rt},${y - Rt} L${f + u},${y - Rt} L${f + u},${y + d} L${f - Rt},${y + d} L${f - Rt},${y - Rt}
                M${f - Rt},${y} L${f + u},${y}
                M${f},${y - Rt} L${f},${y + d}`;
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const T = x.path(S, C), _ = a.insert(() => T, ":first-child");
  return _.attr("transform", `translate(${Rt / 2}, ${Rt / 2})`), _.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && _.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && _.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${-(n.width / 2) + Rt / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + Rt / 2 - (n.y - (n.top ?? 0))})`
  ), at(t, _), t.intersect = function(L) {
    return rt.polygon(t, k, L);
  }, a;
}
p(Ip, "windowPane");
var Kh = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), Q2 = /* @__PURE__ */ new Set(["redux", "redux-dark", "redux-color", "redux-dark-color"]);
async function Kn(e, t) {
  const r = t;
  r.alias && (t.label = r.alias);
  const { theme: i, themeVariables: s } = It(), { rowEven: o, rowOdd: a, nodeBorder: n, borderColorArray: l } = s;
  if (t.look === "handDrawn") {
    const { themeVariables: ht } = It(), { background: gt } = ht, Bt = {
      ...t,
      id: t.id + "-background",
      domId: (t.domId || t.id) + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${gt}`]
    };
    await Kn(e, Bt);
  }
  const c = It();
  t.useHtmlLabels = c.htmlLabels;
  let h = c.er?.diagramPadding ?? 10, u = c.er?.entityPadding ?? 6;
  const { cssStyles: d } = t, { labelStyles: f, nodeStyles: y } = nt(t);
  if (r.attributes.length === 0 && t.label) {
    const ht = {
      rx: 0,
      ry: 0,
      labelPaddingX: h,
      labelPaddingY: h * 1.5
    };
    He(t.label, c) + ht.labelPaddingX * 2 < c.er.minEntityWidth && (t.width = c.er.minEntityWidth);
    const gt = await Zr(e, t, ht);
    if (i != null && Kh.has(i)) {
      const Bt = r.colorIndex ?? 0;
      gt.attr("data-color-id", `color-${Bt % l.length}`);
    }
    if (!Ee(c.htmlLabels)) {
      const Bt = gt.select("text"), kt = Bt.node()?.getBBox();
      Bt.attr("transform", `translate(${-kt.width / 2}, 0)`);
    }
    return gt;
  }
  c.htmlLabels || (h *= 1.25, u *= 1.25);
  let m = ut(t);
  m || (m = "node default");
  const x = e.insert("g").attr("class", m).attr("id", t.domId || t.id), C = await Or(x, t.label ?? "", c, 0, 0, ["name"], f);
  C.height += u;
  let k = 0;
  const S = [], T = [];
  let _ = 0, L = 0, M = 0, v = 0, X = !0, z = !0;
  for (const ht of r.attributes) {
    const gt = await Or(
      x,
      ht.type,
      c,
      0,
      k,
      ["attribute-type"],
      f
    );
    _ = Math.max(_, gt.width + h);
    const Bt = await Or(
      x,
      ht.name,
      c,
      0,
      k,
      ["attribute-name"],
      f
    );
    L = Math.max(L, Bt.width + h);
    const kt = await Or(
      x,
      ht.keys.join(),
      c,
      0,
      k,
      ["attribute-keys"],
      f
    );
    M = Math.max(M, kt.width + h);
    const At = await Or(
      x,
      ht.comment,
      c,
      0,
      k,
      ["attribute-comment"],
      f
    );
    v = Math.max(v, At.width + h);
    const $t = Math.max(gt.height, Bt.height, kt.height, At.height) + u;
    T.push({ yOffset: k, rowHeight: $t }), k += $t;
  }
  let I = 4;
  M <= h && (X = !1, M = 0, I--), v <= h && (z = !1, v = 0, I--);
  const et = x.node().getBBox();
  if (C.width + h * 2 - (_ + L + M + v) > 0) {
    const ht = C.width + h * 2 - (_ + L + M + v);
    _ += ht / I, L += ht / I, M > 0 && (M += ht / I), v > 0 && (v += ht / I);
  }
  const H = _ + L + M + v, E = st.svg(x), O = it(t, {});
  t.look !== "handDrawn" && (O.roughness = 0, O.fillStyle = "solid");
  let B = 0;
  T.length > 0 && (B = T.reduce((ht, gt) => ht + (gt?.rowHeight ?? 0), 0));
  const R = Math.max(et.width + h * 2, t?.width || 0, H), $ = Math.max((B ?? 0) + C.height, t?.height || 0), J = -R / 2, Z = -$ / 2;
  if (x.selectAll("g:not(:first-child)").each((ht, gt, Bt) => {
    const kt = Tt(Bt[gt]), At = kt.attr("transform");
    let $t = 0, Qt = 0;
    if (At) {
      const be = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(At);
      be && ($t = parseFloat(be[1]), Qt = parseFloat(be[2]), kt.attr("class").includes("attribute-name") ? $t += _ : kt.attr("class").includes("attribute-keys") ? $t += _ + L : kt.attr("class").includes("attribute-comment") && ($t += _ + L + M));
    }
    kt.attr(
      "transform",
      `translate(${J + h / 2 + $t}, ${Qt + Z + C.height + u / 2})`
    );
  }), x.select(".name").attr("transform", "translate(" + -C.width / 2 + ", " + (Z + u / 2) + ")"), i != null && Kh.has(i)) {
    const ht = r.colorIndex ?? 0;
    x.attr("data-color-id", `color-${ht % l.length}`);
  }
  const dt = E.rectangle(J, Z, R, $, O), Ct = x.insert(() => dt, ":first-child").attr("class", "outer-path").attr("style", d.join(""));
  S.push(0);
  for (const [ht, gt] of T.entries()) {
    const kt = (ht + 1) % 2 === 0 && gt.yOffset !== 0, At = E.rectangle(J, C.height + Z + gt?.yOffset, R, gt?.rowHeight, {
      ...O,
      fill: kt ? o : a,
      stroke: n
    });
    x.insert(() => At, "g.label").attr("style", d.join("")).attr("class", `row-rect-${kt ? "even" : "odd"}`);
  }
  const xt = 1e-4;
  let St = Dr(J, C.height + Z, R + J, C.height + Z, xt), wt = E.polygon(
    St.map((ht) => [ht.x, ht.y]),
    O
  );
  if (x.insert(() => wt).attr("class", "divider"), St = Dr(_ + J, C.height + Z, _ + J, $ + Z, xt), wt = E.polygon(
    St.map((ht) => [ht.x, ht.y]),
    O
  ), x.insert(() => wt).attr("class", "divider"), X) {
    const ht = _ + L + J;
    St = Dr(ht, C.height + Z, ht, $ + Z, xt), wt = E.polygon(
      St.map((gt) => [gt.x, gt.y]),
      O
    ), x.insert(() => wt).attr("class", "divider");
  }
  if (z) {
    const ht = _ + L + M + J;
    St = Dr(ht, C.height + Z, ht, $ + Z, xt), wt = E.polygon(
      St.map((gt) => [gt.x, gt.y]),
      O
    ), x.insert(() => wt).attr("class", "divider");
  }
  for (const ht of S) {
    const gt = C.height + Z + ht;
    St = Dr(J, gt, R + J, gt, xt), wt = E.polygon(
      St.map((Bt) => [Bt.x, Bt.y]),
      O
    ), x.insert(() => wt).attr("class", "divider");
  }
  if (at(t, Ct), y && t.look !== "handDrawn")
    if (i != null && Q2.has(i))
      x.selectAll("path").attr("style", y);
    else {
      const gt = y.split(";")?.filter((Bt) => Bt.includes("stroke"))?.map((Bt) => `${Bt}`).join("; ");
      x.selectAll("path").attr("style", gt ?? ""), x.selectAll(".row-rect-even path").attr("style", y);
    }
  return t.intersect = function(ht) {
    return rt.rect(t, ht);
  }, x;
}
p(Kn, "erBox");
async function Or(e, t, r, i = 0, s = 0, o = [], a = "") {
  const n = e.insert("g").attr("class", `label ${o.join(" ")}`).attr("transform", `translate(${i}, ${s})`).attr("style", a);
  t !== Il(t) && (t = Il(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const l = n.node().appendChild(
    await Ce(
      n,
      t,
      {
        width: He(t, r) + 100,
        style: a,
        useHtmlLabels: r.htmlLabels
      },
      r
    )
  );
  if (t.includes("&lt;") || t.includes("&gt;")) {
    let h = l.children[0];
    for (h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); h.childNodes[0]; )
      h = h.childNodes[0], h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  }
  let c = l.getBBox();
  if (Ee(r.htmlLabels)) {
    const h = l.children[0];
    h.style.textAlign = "start";
    const u = Tt(l);
    c = h.getBoundingClientRect(), u.attr("width", c.width), u.attr("height", c.height);
  }
  return c;
}
p(Or, "addText");
function Dr(e, t, r, i, s) {
  return e === r ? [
    { x: e - s / 2, y: t },
    { x: e + s / 2, y: t },
    { x: r + s / 2, y: i },
    { x: r - s / 2, y: i }
  ] : [
    { x: e, y: t - s / 2 },
    { x: e, y: t + s / 2 },
    { x: r, y: i + s / 2 },
    { x: r, y: i - s / 2 }
  ];
}
p(Dr, "lineToPolygon");
async function Rp(e, t, r, i, s = r.class.padding ?? 12) {
  const o = i ? 0 : 3, a = e.insert("g").attr("class", ut(t)).attr("id", t.domId || t.id);
  let n = null, l = null, c = null, h = null, u = 0, d = 0, f = 0;
  if (n = a.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    const k = t.annotations[0];
    await wi(n, { text: `«${k}»` }, 0), u = n.node().getBBox().height;
  }
  l = a.insert("g").attr("class", "label-group text"), await wi(l, t, 0, ["font-weight: bolder"]);
  const y = l.node().getBBox();
  d = y.height, c = a.insert("g").attr("class", "members-group text");
  let m = 0;
  for (const k of t.members) {
    const S = await wi(c, k, m, [k.parseClassifier()]);
    m += S + o;
  }
  f = c.node().getBBox().height, f <= 0 && (f = s / 2), h = a.insert("g").attr("class", "methods-group text");
  let x = 0;
  for (const k of t.methods) {
    const S = await wi(h, k, x, [k.parseClassifier()]);
    x += S + o;
  }
  let C = a.node().getBBox();
  if (n !== null) {
    const k = n.node().getBBox();
    n.attr("transform", `translate(${-k.width / 2})`);
  }
  return l.attr("transform", `translate(${-y.width / 2}, ${u})`), C = a.node().getBBox(), c.attr(
    "transform",
    `translate(0, ${u + d + s * 2})`
  ), C = a.node().getBBox(), h.attr(
    "transform",
    `translate(0, ${u + d + (f ? f + s * 4 : s * 2)})`
  ), C = a.node().getBBox(), { shapeSvg: a, bbox: C };
}
p(Rp, "textHelper");
async function wi(e, t, r, i = []) {
  const s = e.insert("g").attr("class", "label").attr("style", i.join("; ")), o = It();
  let a = "useHtmlLabels" in t ? t.useHtmlLabels : Ee(o.htmlLabels) ?? !0, n = "";
  "text" in t ? n = t.text : n = t.label, !a && n.startsWith("\\") && (n = n.substring(1)), Oi(n) && (a = !0);
  const l = await Ce(
    s,
    dn(er(n)),
    {
      width: He(n, o) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: a
    },
    o
  );
  let c, h = 1;
  if (a) {
    const u = l.children[0], d = Tt(l);
    h = u.innerHTML.split("<br>").length, u.innerHTML.includes("</math>") && (h += u.innerHTML.split("<mrow>").length - 1), await Gn(u), c = u.getBoundingClientRect(), d.attr("width", c.width), d.attr("height", c.height);
  } else {
    i.includes("font-weight: bolder") && Tt(l).selectAll("tspan").attr("font-weight", ""), h = l.children.length;
    const u = l.children[0];
    (l.textContent === "" || l.textContent.includes("&gt")) && (u.textContent = n[0] + n.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), n[1] === " " && (u.textContent = u.textContent[0] + " " + u.textContent.substring(1))), u.textContent === "undefined" && (u.textContent = ""), c = l.getBBox();
  }
  return s.attr("transform", "translate(0," + (-c.height / (2 * h) + r) + ")"), c.height;
}
p(wi, "addText");
async function qp(e, t) {
  const r = _t(), { themeVariables: i } = r, { useGradient: s } = i, o = r.class.padding ?? 12, a = o, n = t.useHtmlLabels ?? Ee(r.htmlLabels) ?? !0, l = t;
  l.annotations = l.annotations ?? [], l.members = l.members ?? [], l.methods = l.methods ?? [];
  const { shapeSvg: c, bbox: h } = await Rp(e, t, r, n, a), { labelStyles: u, nodeStyles: d } = nt(t);
  t.labelStyle = u, t.cssStyles = l.styles || "";
  const f = l.styles?.join(";") || d || "";
  t.cssStyles || (t.cssStyles = f.replaceAll("!important", "").split(";"));
  const y = l.members.length === 0 && l.methods.length === 0 && !r.class?.hideEmptyMembersBox, m = st.svg(c), x = it(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const C = Math.max(t.width ?? 0, h.width);
  let k = Math.max(t.height ?? 0, h.height);
  const S = (t.height ?? 0) > h.height;
  l.members.length === 0 && l.methods.length === 0 ? k += a : l.members.length > 0 && l.methods.length === 0 && (k += a * 2);
  const T = -C / 2, _ = -k / 2;
  let L = y ? o * 2 : l.members.length === 0 && l.methods.length === 0 ? -o : 0;
  S && (L = o * 2);
  const M = m.rectangle(
    T - o,
    _ - o - (y ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0),
    C + 2 * o,
    k + 2 * o + L,
    x
  ), v = c.insert(() => M, ":first-child");
  v.attr("class", "basic label-container outer-path");
  const X = v.node().getBBox(), z = c.select(".annotation-group").node().getBBox().height - (y ? o / 2 : 0) || 0, I = c.select(".label-group").node().getBBox().height - (y ? o / 2 : 0) || 0, et = c.select(".members-group").node().getBBox().height - (y ? o / 2 : 0) || 0, H = (z + I + _ + o - (_ - o - (y ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0))) / 2;
  if (c.selectAll(".text").each((E, O, B) => {
    const R = Tt(B[O]), $ = R.attr("transform");
    let J = 0;
    if ($) {
      const xt = RegExp(/translate\(([^,]+),([^)]+)\)/).exec($);
      xt && (J = parseFloat(xt[2]));
    }
    let Z = J + _ + o - (y ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0);
    if (R.attr("class").includes("methods-group")) {
      const Ct = Math.max(et, a / 2);
      S ? Z = Math.max(
        H,
        z + I + Ct + _ + a * 2 + o
      ) + a * 2 : Z = z + I + Ct + _ + a * 4 + o;
    }
    l.members.length === 0 && l.methods.length === 0 && r.class?.hideEmptyMembersBox && (l.annotations.length > 0 ? Z = J - a : Z = J), n || (Z -= 4);
    let dt = T;
    (R.attr("class").includes("label-group") || R.attr("class").includes("annotation-group")) && (dt = -R.node()?.getBBox().width / 2 || 0, c.selectAll("text").each(function(Ct, xt, St) {
      window.getComputedStyle(St[xt]).textAnchor === "middle" && (dt = 0);
    })), R.attr("transform", `translate(${dt}, ${Z})`);
  }), l.members.length > 0 || l.methods.length > 0 || y) {
    const E = z + I + _ + o, O = m.line(
      X.x,
      E,
      X.x + X.width,
      E + 1e-3,
      x
    );
    c.insert(() => O).attr("class", `divider${t.look === "neo" && !s ? " neo-line" : ""}`).attr("style", f);
  }
  if (y || l.members.length > 0 || l.methods.length > 0) {
    const E = z + I + et + _ + a * 2 + o, O = m.line(
      X.x,
      S ? Math.max(H, E) : E,
      X.x + X.width,
      (S ? Math.max(H, E) : E) + 1e-3,
      x
    );
    c.insert(() => O).attr("class", `divider${t.look === "neo" && !s ? " neo-line" : ""}`).attr("style", f);
  }
  if (l.look !== "handDrawn" && c.selectAll("path").attr("style", f), v.select(":nth-child(2)").attr("style", f), c.selectAll(".divider").select("path").attr("style", f), t.labelStyle ? c.selectAll("span").attr("style", t.labelStyle) : c.selectAll("span").attr("style", f), !n) {
    const E = RegExp(/color\s*:\s*([^;]*)/), O = E.exec(f);
    if (O) {
      const B = O[0].replace("color", "fill");
      c.selectAll("tspan").attr("style", B);
    } else if (u) {
      const B = E.exec(u);
      if (B) {
        const R = B[0].replace("color", "fill");
        c.selectAll("tspan").attr("style", R);
      }
    }
  }
  return at(t, v), t.intersect = function(E) {
    return rt.rect(t, E);
  }, c;
}
p(qp, "classBox");
async function Np(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const s = t, o = t, a = 20, n = 20, l = "verifyMethod" in t, c = ut(t), h = _t(), { themeVariables: u } = h, { borderColorArray: d, requirementEdgeLabelBackground: f } = u, y = h.layout === "elk" ? "start" : "center", m = e.insert("g").attr("class", c).attr("id", t.domId ?? t.id);
  let x;
  l ? x = await Se(
    m,
    `&lt;&lt;${s.type}&gt;&gt;`,
    0,
    t.labelStyle
  ) : x = await Se(m, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let C = x;
  const k = await Se(
    m,
    s.name,
    C,
    t.labelStyle + "; font-weight: bold;"
  );
  if (C += k + n, l) {
    const I = await Se(
      m,
      `${s.requirementId ? `ID: ${s.requirementId}` : ""}`,
      C,
      t.labelStyle,
      y
    );
    C += I;
    const et = await Se(
      m,
      `${s.text ? `Text: ${s.text}` : ""}`,
      C,
      t.labelStyle,
      y
    );
    C += et;
    const H = await Se(
      m,
      `${s.risk ? `Risk: ${s.risk}` : ""}`,
      C,
      t.labelStyle,
      y
    );
    C += H, await Se(
      m,
      `${s.verifyMethod ? `Verification: ${s.verifyMethod}` : ""}`,
      C,
      t.labelStyle,
      y
    );
  } else {
    const I = await Se(
      m,
      `${o.type ? `Type: ${o.type}` : ""}`,
      C,
      t.labelStyle,
      y
    );
    C += I, await Se(
      m,
      `${o.docRef ? `Doc Ref: ${o.docRef}` : ""}`,
      C,
      t.labelStyle,
      y
    );
  }
  const S = (m.node()?.getBBox().width ?? 200) + a, T = (m.node()?.getBBox().height ?? 200) + a, _ = -S / 2, L = -T / 2, M = st.svg(m), v = it(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const X = M.rectangle(_, L, S, T, v), z = m.insert(() => X, ":first-child");
  if (z.attr("class", "basic label-container outer-path").attr("style", i), d?.length) {
    const I = t.colorIndex ?? 0;
    m.attr("data-color-id", `color-${I % d.length}`);
  }
  if (m.selectAll(".label").each((I, et, H) => {
    const E = Tt(H[et]), O = E.attr("transform");
    let B = 0, R = 0;
    if (O) {
      const dt = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(O);
      dt && (B = parseFloat(dt[1]), R = parseFloat(dt[2]));
    }
    const $ = R - T / 2;
    let J = _ + a / 2;
    (et === 0 || et === 1) && (J = B), E.attr("transform", `translate(${J}, ${$ + a})`);
  }), C > x + k + n) {
    const I = L + x + k + n;
    let et;
    if (t.look === "neo") {
      const O = [
        [_, I],
        [_ + S, I],
        [_ + S, I + 1e-3],
        [_, I + 1e-3]
      ];
      et = M.polygon(O, v);
    } else
      et = M.line(_, I, _ + S, I, v);
    m.insert(() => et).attr("class", "divider");
  }
  return at(t, z), t.intersect = function(I) {
    return rt.rect(t, I);
  }, i && t.look !== "handDrawn" && (f || d?.length) && m.selectAll("path").attr("style", i), m;
}
p(Np, "requirementBox");
async function Se(e, t, r, i = "", s = "center") {
  if (t === "")
    return 0;
  const o = e.insert("g").attr("class", "label").attr("style", i), a = _t(), n = a.htmlLabels ?? !0, l = await Ce(
    o,
    dn(er(t)),
    {
      width: He(t, a) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: n,
      style: i
    },
    a
  );
  let c;
  if (n) {
    const h = l.children[0], u = Tt(l);
    s === "start" && Tt(h).style("text-align", "left"), c = h.getBoundingClientRect(), u.attr("width", c.width), u.attr("height", c.height);
  } else {
    const h = l.children[0];
    for (const u of h.children)
      i && u.setAttribute("style", i);
    if (s === "start") {
      h.setAttribute("text-anchor", "start");
      for (const u of h.children)
        u.setAttribute("text-anchor", "start");
    }
    c = l.getBBox(), c.height += 6;
  }
  return o.attr("transform", `translate(${-c.width / 2},${-c.height / 2 + r})`), c.height;
}
p(Se, "addText");
var J2 = /* @__PURE__ */ p((e) => {
  switch (e) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    // no stroke
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function Wp(e, t, { config: r }) {
  const { labelStyles: i, nodeStyles: s } = nt(t);
  t.labelStyle = i || "";
  const o = 10, a = t.width;
  t.width = (t.width ?? 200) - 10;
  const {
    shapeSvg: n,
    bbox: l,
    label: c
  } = await ct(e, t, ut(t)), h = t.padding || 10;
  let u = "", d;
  "ticket" in t && t.ticket && r?.kanban?.ticketBaseUrl && (u = r?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), d = n.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", u).attr("target", "_blank"));
  const f = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: !1
  };
  let y, m;
  d ? { label: y, bbox: m } = await Ro(
    d,
    "ticket" in t && t.ticket || "",
    f
  ) : { label: y, bbox: m } = await Ro(
    n,
    "ticket" in t && t.ticket || "",
    f
  );
  const { label: x, bbox: C } = await Ro(
    n,
    "assigned" in t && t.assigned || "",
    f
  );
  t.width = a;
  const k = 10, S = t?.width || 0, T = Math.max(m.height, C.height) / 2, _ = Math.max(l.height + k * 2, t?.height || 0) + T, L = -S / 2, M = -_ / 2;
  c.attr(
    "transform",
    "translate(" + (h - S / 2) + ", " + (-T - l.height / 2) + ")"
  ), y.attr(
    "transform",
    "translate(" + (h - S / 2) + ", " + (-T + l.height / 2) + ")"
  ), x.attr(
    "transform",
    "translate(" + (h + S / 2 - C.width - 2 * o) + ", " + (-T + l.height / 2) + ")"
  );
  let v;
  const { rx: X, ry: z } = t, { cssStyles: I } = t;
  if (t.look === "handDrawn") {
    const et = st.svg(n), H = it(t, {}), E = X || z ? et.path(he(L, M, S, _, X || 0), H) : et.rectangle(L, M, S, _, H);
    v = n.insert(() => E, ":first-child"), v.attr("class", "basic label-container").attr("style", I || null);
  } else {
    v = n.insert("rect", ":first-child"), v.attr("class", "basic label-container __APA__").attr("style", s).attr("rx", X ?? 5).attr("ry", z ?? 5).attr("x", L).attr("y", M).attr("width", S).attr("height", _);
    const et = "priority" in t && t.priority;
    if (et) {
      const H = n.append("line"), E = L + 2, O = M + Math.floor((X ?? 0) / 2), B = M + _ - Math.floor((X ?? 0) / 2);
      H.attr("x1", E).attr("y1", O).attr("x2", E).attr("y2", B).attr("stroke-width", "4").attr("stroke", J2(et));
    }
  }
  return at(t, v), t.height = _, t.intersect = function(et) {
    return rt.rect(t, et);
  }, n;
}
p(Wp, "kanbanItem");
async function zp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await ct(
    e,
    t,
    ut(t)
  ), l = o.width + 10 * a, c = o.height + 8 * a, h = 0.15 * l, { cssStyles: u } = t, d = o.width + 20, f = o.height + 20, y = Math.max(l, d), m = Math.max(c, f);
  n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`);
  let x;
  const C = `M0 0 
    a${h},${h} 1 0,0 ${y * 0.25},${-1 * m * 0.1}
    a${h},${h} 1 0,0 ${y * 0.25},0
    a${h},${h} 1 0,0 ${y * 0.25},0
    a${h},${h} 1 0,0 ${y * 0.25},${m * 0.1}

    a${h},${h} 1 0,0 ${y * 0.15},${m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${m * 0.34}
    a${h},${h} 1 0,0 ${-1 * y * 0.15},${m * 0.33}

    a${h},${h} 1 0,0 ${-1 * y * 0.25},${m * 0.15}
    a${h},${h} 1 0,0 ${-1 * y * 0.25},0
    a${h},${h} 1 0,0 ${-1 * y * 0.25},0
    a${h},${h} 1 0,0 ${-1 * y * 0.25},${-1 * m * 0.15}

    a${h},${h} 1 0,0 ${-1 * y * 0.1},${-1 * m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${-1 * m * 0.34}
    a${h},${h} 1 0,0 ${y * 0.1},${-1 * m * 0.33}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const k = st.svg(s), S = it(t, {}), T = k.path(C, S);
    x = s.insert(() => T, ":first-child"), x.attr("class", "basic label-container").attr("style", Wt(u));
  } else
    x = s.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", C);
  return x.attr("transform", `translate(${-y / 2}, ${-m / 2})`), at(t, x), t.calcIntersect = function(k, S) {
    return rt.rect(k, S);
  }, t.intersect = function(k) {
    return P.info("Bang intersect", t, k), rt.rect(t, k);
  }, s;
}
p(zp, "bang");
async function Hp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await ct(
    e,
    t,
    ut(t)
  ), l = o.width + 2 * a, c = o.height + 2 * a, h = 0.15 * l, u = 0.25 * l, d = 0.35 * l, f = 0.2 * l, { cssStyles: y } = t;
  let m;
  const x = `M0 0 
    a${h},${h} 0 0,1 ${l * 0.25},${-1 * l * 0.1}
    a${d},${d} 1 0,1 ${l * 0.4},${-1 * l * 0.1}
    a${u},${u} 1 0,1 ${l * 0.35},${l * 0.2}

    a${h},${h} 1 0,1 ${l * 0.15},${c * 0.35}
    a${f},${f} 1 0,1 ${-1 * l * 0.15},${c * 0.65}

    a${u},${h} 1 0,1 ${-1 * l * 0.25},${l * 0.15}
    a${d},${d} 1 0,1 ${-1 * l * 0.5},0
    a${h},${h} 1 0,1 ${-1 * l * 0.25},${-1 * l * 0.15}

    a${h},${h} 1 0,1 ${-1 * l * 0.1},${-1 * c * 0.35}
    a${f},${f} 1 0,1 ${l * 0.1},${-1 * c * 0.65}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const C = st.svg(s), k = it(t, {}), S = C.path(x, k);
    m = s.insert(() => S, ":first-child"), m.attr("class", "basic label-container").attr("style", Wt(y));
  } else
    m = s.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", x);
  return n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`), m.attr("transform", `translate(${-l / 2}, ${-c / 2})`), at(t, m), t.calcIntersect = function(C, k) {
    return rt.rect(C, k);
  }, t.intersect = function(C) {
    return P.info("Cloud intersect", t, C), rt.rect(t, C);
  }, s;
}
p(Hp, "cloud");
async function Yp(e, t) {
  const { labelStyles: r, nodeStyles: i } = nt(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await ct(
    e,
    t,
    ut(t)
  ), l = o.width + 8 * a, c = o.height + 2 * a, h = 5, u = t.look === "neo" ? `
    M${-l / 2} ${c / 2 - h}
    v${-c + 2 * h}
    q0,-${h} ${h},-${h}
    h${l - 2 * h}
    q${h},0 ${h},${h}
    v${c - h}
    H${-l / 2}
    Z
  ` : `
    M${-l / 2} ${c / 2 - h}
    v${-c + 2 * h}
    q0,-${h} ${h},-${h}
    h${l - 2 * h}
    q${h},0 ${h},${h}
    v${c - 2 * h}
    q0,${h} ${-h},${h}
    h${-(l - 2 * h)}
    q${-h},0 ${-h},${-h}
    Z
  `;
  if (!t.domId)
    throw new Error(
      `defaultMindmapNode: node "${t.id}" is missing a domId — was render.ts domId prefixing skipped?`
    );
  const d = s.append("path").attr("id", t.domId).attr("class", "node-bkg node-" + t.type).attr("style", i).attr("d", u);
  return s.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", c / 2).attr("x2", l / 2).attr("y2", c / 2), n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`), s.append(() => n.node()), at(t, d), t.calcIntersect = function(f, y) {
    return rt.rect(f, y);
  }, t.intersect = function(f) {
    return rt.rect(t, f);
  }, s;
}
p(Yp, "defaultMindmapNode");
async function jp(e, t) {
  const r = {
    padding: t.padding ?? 0
  };
  return Zn(e, t, r);
}
p(jp, "mindmapCircle");
var tw = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: wp
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: Cp
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: Sp
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: vp
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: Yf
  },
  {
    semanticName: "Data Store",
    name: "Data Store",
    shortName: "datastore",
    description: "Data flow diagram data store",
    aliases: ["data-store"],
    handler: jf
  },
  {
    semanticName: "Folder",
    name: "Folder",
    shortName: "folder",
    description: "Folder or directory",
    aliases: ["directory"],
    handler: Zf
  },
  {
    semanticName: "Bucket",
    name: "Bucket",
    shortName: "bucket",
    description: "Object storage bucket",
    handler: Ff
  },
  {
    semanticName: "Console",
    name: "Console (terminal window)",
    shortName: "console",
    description: "Terminal or console window",
    handler: Pf
  },
  {
    semanticName: "Browser",
    name: "Browser",
    shortName: "browser",
    description: "Browser window",
    handler: Ef
  },
  {
    semanticName: "Person",
    name: "Person",
    shortName: "person",
    description: "Person (circular head above a rounded body)",
    handler: Hf
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: Zn
  },
  {
    semanticName: "Bang",
    name: "Bang",
    shortName: "bang",
    description: "Bang",
    aliases: ["bang"],
    handler: zp
  },
  {
    semanticName: "Cloud",
    name: "Cloud",
    shortName: "cloud",
    description: "cloud",
    aliases: ["cloud"],
    handler: Hp
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: yp
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: Jf
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: hp
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: lp
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: Ep
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: ap
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: Gf
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: Mp
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: $f
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: bp
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: Bp
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: _p
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: Kf
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: tp
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: qf
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: Nf
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: Wf
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: cp
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: Dp
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: Qf
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: Ap
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: up
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: zf
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: Uf
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: Op
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: Ip
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: Xf
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: $p
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: Vf
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: kp
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: pp
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: fp
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: Lf
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: Rf
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: Fp
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: Lp
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: Pp
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: mp
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: dp
  }
], ew = /* @__PURE__ */ p(() => {
  const t = [
    ...Object.entries({
      // States
      state: Tp,
      choice: Of,
      note: gp,
      // Rectangles
      composite: Df,
      rectWithTitle: xp,
      labelRect: np,
      block_arrow: Af,
      // Collapsed subgraph (flowchart `@{ view: collapsed }`)
      collapsedGroup: Mf,
      // Icons
      iconSquare: sp,
      iconCircle: rp,
      icon: ep,
      iconRounded: ip,
      imageSquare: op,
      anchor: Bf,
      // Kanban diagram
      kanbanItem: Wp,
      //Mindmap diagram
      mindmapCircle: jp,
      defaultMindmapNode: Yp,
      // class diagram
      classBox: qp,
      // er diagram
      erBox: Kn,
      // Requirement diagram
      requirementBox: Np
    }),
    ...tw.flatMap((r) => [
      r.shortName,
      ..."aliases" in r ? r.aliases : [],
      ..."internalAliases" in r ? r.internalAliases : []
    ].map((s) => [s, r.handler]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), Up = ew();
function rw(e) {
  return e in Up;
}
p(rw, "isValidShape");
var fo = /* @__PURE__ */ p(({
  flowchart: e
}) => {
  const t = e?.subGraphTitleMargin?.top ?? 0, r = e?.subGraphTitleMargin?.bottom ?? 0, i = t + r;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: r,
    subGraphTitleTotalMargin: i
  };
}, "getSubGraphTitleMargins"), po = /* @__PURE__ */ new Map();
async function Qn(e, t, r) {
  let i, s;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  const o = t.shape ? Up[t.shape] : void 0;
  if (!o)
    throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let a;
    r.config.securityLevel === "sandbox" ? a = "_top" : t.linkTarget && (a = t.linkTarget || "_blank"), i = e.insert("svg:a").attr("xlink:href", t.link).attr("target", a ?? null), s = await o(i, t, r);
  } else
    s = await o(e, t, r), i = s;
  return i.attr("data-look", Wt(t.look)), t.tooltip && s.attr("title", t.tooltip), po.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
}
p(Qn, "insertNode");
var J5 = /* @__PURE__ */ p((e, t) => {
  po.set(t.id, e);
}, "setNodeElem"), iw = /* @__PURE__ */ p(() => {
  po.clear();
}, "clear"), Qh = /* @__PURE__ */ p((e) => {
  const t = po.get(e.id);
  P.trace(
    "Transforming node",
    e.diff,
    e,
    "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")"
  );
  const r = 8, i = e.diff || 0;
  return e.clusterNode ? t.attr(
    "transform",
    "translate(" + (e.x + i - e.width / 2) + ", " + (e.y - e.height / 2 - r) + ")"
  ) : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), i;
}, "positionNode"), sw = /* @__PURE__ */ p(async (e, t) => {
  const r = _t(), { themeVariables: i, handDrawnSeed: s } = r, { clusterBkg: o, clusterBorder: a } = i, n = a, { labelStyles: l, nodeStyles: c, borderStyles: h, backgroundStyles: u } = nt(t), d = e.insert("g").attr("class", "cluster swimlane " + (t.cssClasses || "")).attr("id", t.id).attr("data-id", t.id).attr("data-et", "cluster").attr("data-look", t.look), f = Ee(r.flowchart.htmlLabels), y = t.direction === "LR", m = d.insert("g").attr("class", "cluster-label swimlane-label"), x = await Ce(m, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0,
    width: t.width
  });
  let C = x.getBBox();
  if (f) {
    const H = x.children[0], E = Tt(x);
    C = H.getBoundingClientRect(), E.attr("width", C.width), E.attr("height", C.height);
  }
  const k = t.padding ?? 0, S = t.width <= C.width + k ? C.width + k : t.width;
  t.width <= C.width + k ? t.diff = (S - t.width) / 2 - k : t.diff = -k;
  const T = t.height, _ = t.y - T / 2, L = t.y + T / 2, M = t.x - S / 2, v = t.swimlaneContentTop !== void 0 ? t.swimlaneContentTop : _ + T / 3, X = y ? 4 : 0, z = C.height + 2 * X;
  let I, et;
  if (y) {
    const H = Math.max(z, C.height + 2 * X), E = M + H, O = Math.max(0, S - H);
    if (t.look === "handDrawn") {
      const $ = st.svg(d), J = it(t, {
        roughness: 0.7,
        fill: o,
        stroke: n,
        fillWeight: 3,
        seed: s
      }), Z = it(t, {
        roughness: 0.7,
        fill: "none",
        stroke: n,
        seed: s
      }), dt = $.rectangle(M, _, H, T, J);
      I = d.insert(() => dt, ":first-child");
      const Ct = $.rectangle(E, _, O, T, Z);
      et = d.insert(() => Ct, ":first-child"), I.select("path:nth-child(2)").attr("style", h.join(";")), I.select("path").attr("style", u.join(";").replace("fill", "stroke"));
    } else
      I = d.insert("rect", ":first-child"), et = d.insert("rect", ":first-child"), I.attr("class", "swimlane-title").attr("style", c).attr("x", M).attr("y", _).attr("width", H).attr("height", T).attr("fill", o).attr("stroke", n), et.attr("class", "swimlane-body").attr("style", c).attr("x", E).attr("y", _).attr("width", O).attr("height", T).attr("fill", "none").attr("stroke", n);
    const B = M + H / 2, R = t.y;
    m.attr(
      "transform",
      `translate(${B}, ${R}) rotate(-90) translate(${-C.width / 2}, ${-C.height / 2})`
    );
  } else {
    const H = Math.max(0, v - _), E = Math.min(z, H), O = _ + E, B = Math.max(0, L - O), R = t.x - S / 2;
    if (t.look === "handDrawn") {
      const Z = st.svg(d), dt = it(t, {
        roughness: 0.7,
        fill: o,
        stroke: n,
        fillWeight: 3,
        seed: s
      }), Ct = it(t, {
        roughness: 0.7,
        fill: "none",
        stroke: n,
        seed: s
      }), xt = Z.rectangle(R, _, S, E, dt);
      I = d.insert(() => xt, ":first-child");
      const St = Z.rectangle(R, O, S, B, Ct);
      et = d.insert(() => St, ":first-child"), I.select("path:nth-child(2)").attr("style", h.join(";")), I.select("path").attr("style", u.join(";").replace("fill", "stroke"));
    } else
      I = d.insert("rect", ":first-child"), et = d.insert("rect", ":first-child"), I.attr("class", "swimlane-title").attr("style", c).attr("x", R).attr("y", _).attr("width", S).attr("height", E).attr("fill", o).attr("stroke", n), et.attr("class", "swimlane-body").attr("style", c).attr("x", R).attr("y", O).attr("width", S).attr("height", B).attr("fill", "none").attr("stroke", n);
    const $ = t.x - C.width / 2, J = _ + (E - C.height) / 2;
    m.attr("transform", `translate(${$}, ${J})`);
  }
  if (P.trace("Swimlane data ", t, JSON.stringify(t)), l) {
    const H = m.select("span");
    H && H.attr("style", l);
  }
  return t.offsetX = 0, t.width = S, t.height = T, t.offsetY = C.height - k / 2, t.intersect = function(H) {
    return wr(t, H);
  }, { cluster: d, labelBBox: C };
}, "swimlane"), Gp = /* @__PURE__ */ p(async (e, t) => {
  P.info("Creating subgraph rect for ", t.id, t);
  const r = _t(), { themeVariables: i, handDrawnSeed: s } = r, { clusterBkg: o, clusterBorder: a } = i, { labelStyles: n, nodeStyles: l, borderStyles: c, backgroundStyles: h } = nt(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), d = Zt(r), f = u.insert("g").attr("class", "cluster-label ");
  let y;
  t.labelType === "markdown" ? y = await Ce(f, t.label, {
    style: t.labelStyle,
    useHtmlLabels: d,
    isNode: !0,
    width: t.width
  }) : y = await Ke(f, t.label, t.labelStyle || "", !1, !0);
  let m = y.getBBox();
  if (Zt(r)) {
    const M = y.children[0], v = Tt(y);
    m = M.getBoundingClientRect(), v.attr("width", m.width), v.attr("height", m.height);
  }
  const x = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
  const C = t.height, k = t.x - x / 2, S = t.y - C / 2;
  P.trace("Data ", t, JSON.stringify(t));
  let T;
  if (t.look === "handDrawn") {
    const M = st.svg(u), v = it(t, {
      roughness: 0.7,
      fill: o,
      // fill: 'red',
      stroke: a,
      fillWeight: 3,
      seed: s
    }), X = M.path(he(k, S, x, C, 0), v);
    T = u.insert(() => (P.debug("Rough node insert CXC", X), X), ":first-child"), T.select("path:nth-child(2)").attr("style", c.join(";")), T.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    T = u.insert("rect", ":first-child"), T.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", k).attr("y", S).attr("width", x).attr("height", C);
  const { subGraphTitleTopMargin: _ } = fo(r);
  if (f.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + _})`
  ), n) {
    const M = f.select("span");
    M && M.attr("style", n);
  }
  const L = T.node().getBBox();
  return t.offsetX = 0, t.width = L.width, t.height = L.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(M) {
    return wr(t, M);
  }, { cluster: u, labelBBox: m };
}, "rect"), ow = /* @__PURE__ */ p((e, t) => {
  const r = e.insert("g").attr("class", "note-cluster").attr("id", t.domId), i = r.insert("rect", ":first-child"), s = 0 * t.padding, o = s / 2;
  i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - o).attr("y", t.y - t.height / 2 - o).attr("width", t.width + s).attr("height", t.height + s).attr("fill", "none");
  const a = i.node().getBBox();
  return t.width = a.width, t.height = a.height, t.intersect = function(n) {
    return wr(t, n);
  }, { cluster: r, labelBBox: { width: 0, height: 0 } };
}, "noteGroup"), aw = /* @__PURE__ */ p(async (e, t) => {
  const r = _t(), { themeVariables: i, handDrawnSeed: s } = r, { altBackground: o, compositeBackground: a, compositeTitleBackground: n, nodeBorder: l } = i, c = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-id", t.id).attr("data-look", t.look), h = c.insert("g", ":first-child"), u = c.insert("g").attr("class", "cluster-label");
  let d = c.append("rect");
  const f = await Ke(u, t.label, t.labelStyle, void 0, !0);
  let y = f.getBBox();
  if (Zt(r)) {
    const X = f.children[0], z = Tt(f);
    y = X.getBoundingClientRect(), z.attr("width", y.width), z.attr("height", y.height);
  }
  const m = 0 * t.padding, x = m / 2, C = (t.width <= y.width + t.padding ? y.width + t.padding : t.width) + m;
  t.width <= y.width + t.padding ? t.diff = (C - t.width) / 2 - t.padding : t.diff = -t.padding;
  const k = t.height + m, S = t.height + m - y.height - 6, T = t.x - C / 2, _ = t.y - k / 2;
  t.width = C;
  const L = t.y - t.height / 2 - x + y.height + 2;
  let M;
  if (t.look === "handDrawn") {
    const X = t.cssClasses.includes("statediagram-cluster-alt"), z = st.svg(c), I = t.rx || t.ry ? z.path(he(T, _, C, k, 10), {
      roughness: 0.7,
      fill: n,
      fillStyle: "solid",
      stroke: l,
      seed: s
    }) : z.rectangle(T, _, C, k, { seed: s });
    M = c.insert(() => I, ":first-child");
    const et = z.rectangle(T, L, C, S, {
      fill: X ? o : a,
      fillStyle: X ? "hachure" : "solid",
      stroke: l,
      seed: s
    });
    M = c.insert(() => I, ":first-child"), d = c.insert(() => et);
  } else
    M = h.insert("rect", ":first-child"), M.attr("class", "outer").attr("x", T).attr("y", _).attr("width", C).attr("height", k).attr("data-look", t.look), d.attr("class", "inner").attr("x", T).attr("y", L).attr("width", C).attr("height", S);
  u.attr(
    "transform",
    `translate(${t.x - y.width / 2}, ${_ + 1 - (Zt(r) ? 0 : 3)})`
  );
  const v = M.node().getBBox();
  return t.height = v.height, t.offsetX = 0, t.offsetY = y.height - t.padding / 2, t.labelBBox = y, t.intersect = function(X) {
    return wr(t, X);
  }, { cluster: c, labelBBox: y };
}, "roundedWithTitle"), nw = /* @__PURE__ */ p(async (e, t) => {
  P.info("Creating subgraph rect for ", t.id, t);
  const r = _t(), { themeVariables: i, handDrawnSeed: s } = r, { clusterBkg: o, clusterBorder: a } = i, { labelStyles: n, nodeStyles: l, borderStyles: c, backgroundStyles: h } = nt(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), d = Zt(r), f = u.insert("g").attr("class", "cluster-label "), y = await Ce(f, t.label, {
    style: t.labelStyle,
    useHtmlLabels: d,
    isNode: !0,
    width: t.width
  });
  let m = y.getBBox();
  if (Zt(r)) {
    const M = y.children[0], v = Tt(y);
    m = M.getBoundingClientRect(), v.attr("width", m.width), v.attr("height", m.height);
  }
  const x = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
  const C = t.height, k = t.x - x / 2, S = t.y - C / 2;
  P.trace("Data ", t, JSON.stringify(t));
  let T;
  if (t.look === "handDrawn") {
    const M = st.svg(u), v = it(t, {
      roughness: 0.7,
      fill: o,
      // fill: 'red',
      stroke: a,
      fillWeight: 4,
      seed: s
    }), X = M.path(he(k, S, x, C, t.rx), v);
    T = u.insert(() => (P.debug("Rough node insert CXC", X), X), ":first-child"), T.select("path:nth-child(2)").attr("style", c.join(";")), T.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    T = u.insert("rect", ":first-child"), T.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", k).attr("y", S).attr("width", x).attr("height", C);
  const { subGraphTitleTopMargin: _ } = fo(r);
  if (f.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + _})`
  ), n) {
    const M = f.select("span");
    M && M.attr("style", n);
  }
  const L = T.node().getBBox();
  return t.offsetX = 0, t.width = L.width, t.height = L.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(M) {
    return wr(t, M);
  }, { cluster: u, labelBBox: m };
}, "kanbanSection"), lw = /* @__PURE__ */ p((e, t) => {
  const r = _t(), { themeVariables: i, handDrawnSeed: s } = r, { nodeBorder: o } = i, a = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-look", t.look), n = a.insert("g", ":first-child"), l = 0 * t.padding, c = t.width + l;
  t.diff = -t.padding;
  const h = t.height + l, u = t.x - c / 2, d = t.y - h / 2;
  t.width = c;
  let f;
  if (t.look === "handDrawn") {
    const x = st.svg(a).rectangle(u, d, c, h, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: o,
      seed: s
    });
    f = a.insert(() => x, ":first-child");
  } else {
    f = n.insert("rect", ":first-child");
    let m = "outer";
    t.look, m = "divider", f.attr("class", m).attr("x", u).attr("y", d).attr("width", c).attr("height", h).attr("data-look", t.look);
  }
  const y = f.node().getBBox();
  return t.height = y.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
    return wr(t, m);
  }, { cluster: a, labelBBox: {} };
}, "divider"), hw = Gp, cw = {
  rect: Gp,
  squareRect: hw,
  roundedWithTitle: aw,
  noteGroup: ow,
  divider: lw,
  kanbanSection: nw,
  swimlane: sw
}, Xp = /* @__PURE__ */ new Map(), Vp = /* @__PURE__ */ p(async (e, t) => {
  const r = t.shape || "rect", i = await cw[r](e, t);
  return Xp.set(t.id, i), i;
}, "insertCluster"), uw = /* @__PURE__ */ p(() => {
  Xp = /* @__PURE__ */ new Map();
}, "clear"), pi = /* @__PURE__ */ p((e, t) => {
  if (t)
    return "translate(" + -e.width / 2 + ", " + -e.height / 2 + ")";
  const r = e.x ?? 0, i = e.y ?? 0;
  return "translate(" + -(r + e.width / 2) + ", " + -(i + e.height / 2) + ")";
}, "computeLabelTransform"), Xt = {
  aggregation: 17.25,
  extension: 17.25,
  composition: 17.25,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4,
  arrow_barb: 0,
  arrow_barb_neo: 5.5
  //arrow_cross: 24,
}, Jh = {
  arrow_point: 4,
  arrow_cross: 12.5,
  arrow_circle: 12.5
};
function Si(e, t) {
  if (e === void 0 || t === void 0)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  e = Pt(e), t = Pt(t);
  const [r, i] = [e.x, e.y], [s, o] = [t.x, t.y], a = s - r, n = o - i;
  return { angle: Math.atan(n / a), deltaX: a, deltaY: n };
}
p(Si, "calculateDeltaAndAngle");
var Pt = /* @__PURE__ */ p((e) => Array.isArray(e) ? { x: e[0], y: e[1] } : e, "pointTransformer"), dw = /* @__PURE__ */ p((e) => ({
  x: /* @__PURE__ */ p(function(t, r, i) {
    let s = 0;
    const o = Pt(i[0]).x < Pt(i[i.length - 1]).x ? "left" : "right";
    if (r === 0 && Object.hasOwn(Xt, e.arrowTypeStart)) {
      const { angle: f, deltaX: y } = Si(i[0], i[1]);
      s = Xt[e.arrowTypeStart] * Math.cos(f) * (y >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Xt, e.arrowTypeEnd)) {
      const { angle: f, deltaX: y } = Si(
        i[i.length - 1],
        i[i.length - 2]
      );
      s = Xt[e.arrowTypeEnd] * Math.cos(f) * (y >= 0 ? 1 : -1);
    }
    const a = Math.abs(
      Pt(t).x - Pt(i[i.length - 1]).x
    ), n = Math.abs(
      Pt(t).y - Pt(i[i.length - 1]).y
    ), l = Math.abs(Pt(t).x - Pt(i[0]).x), c = Math.abs(Pt(t).y - Pt(i[0]).y), h = Xt[e.arrowTypeStart], u = Xt[e.arrowTypeEnd], d = 1;
    if (a < u && a > 0 && n < u) {
      let f = u + d - a;
      f *= o === "right" ? -1 : 1, s -= f;
    }
    if (l < h && l > 0 && c < h) {
      let f = h + d - l;
      f *= o === "right" ? -1 : 1, s += f;
    }
    return Pt(t).x + s;
  }, "x"),
  y: /* @__PURE__ */ p(function(t, r, i) {
    let s = 0;
    const o = Pt(i[0]).y < Pt(i[i.length - 1]).y ? "down" : "up";
    if (r === 0 && Object.hasOwn(Xt, e.arrowTypeStart)) {
      const { angle: f, deltaY: y } = Si(i[0], i[1]);
      s = Xt[e.arrowTypeStart] * Math.abs(Math.sin(f)) * (y >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Xt, e.arrowTypeEnd)) {
      const { angle: f, deltaY: y } = Si(
        i[i.length - 1],
        i[i.length - 2]
      );
      s = Xt[e.arrowTypeEnd] * Math.abs(Math.sin(f)) * (y >= 0 ? 1 : -1);
    }
    const a = Math.abs(
      Pt(t).y - Pt(i[i.length - 1]).y
    ), n = Math.abs(
      Pt(t).x - Pt(i[i.length - 1]).x
    ), l = Math.abs(Pt(t).y - Pt(i[0]).y), c = Math.abs(Pt(t).x - Pt(i[0]).x), h = Xt[e.arrowTypeStart], u = Xt[e.arrowTypeEnd], d = 1;
    if (a < u && a > 0 && n < u) {
      let f = u + d - a;
      f *= o === "up" ? -1 : 1, s -= f;
    }
    if (l < h && l > 0 && c < h) {
      let f = h + d - l;
      f *= o === "up" ? -1 : 1, s += f;
    }
    return Pt(t).y + s;
  }, "y")
}), "getLineFunctionsWithOffset"), fw = /* @__PURE__ */ p((e, t, r, i, s, o = !1, a) => {
  t.arrowTypeStart && tc(
    e,
    "start",
    t.arrowTypeStart,
    r,
    i,
    s,
    o,
    a
  ), t.arrowTypeEnd && tc(e, "end", t.arrowTypeEnd, r, i, s, o, a);
}, "addEdgeMarkers"), pw = {
  arrow_cross: { type: "cross", fill: !1 },
  arrow_point: { type: "point", fill: !0 },
  arrow_barb: { type: "barb", fill: !0 },
  arrow_barb_neo: { type: "barb", fill: !0 },
  arrow_circle: { type: "circle", fill: !1 },
  aggregation: { type: "aggregation", fill: !1 },
  extension: { type: "extension", fill: !1 },
  composition: { type: "composition", fill: !0 },
  dependency: { type: "dependency", fill: !0 },
  lollipop: { type: "lollipop", fill: !1 },
  only_one: { type: "onlyOne", fill: !1 },
  zero_or_one: { type: "zeroOrOne", fill: !1 },
  one_or_more: { type: "oneOrMore", fill: !1 },
  zero_or_more: { type: "zeroOrMore", fill: !1 },
  requirement_arrow: { type: "requirement_arrow", fill: !1 },
  requirement_contains: { type: "requirement_contains", fill: !1 }
}, gw = [
  "cross",
  "point",
  "circle",
  "lollipop",
  "aggregation",
  "extension",
  "composition",
  "dependency",
  "barb"
], tc = /* @__PURE__ */ p((e, t, r, i, s, o, a = !1, n) => {
  if (!r || r === "none")
    return;
  const l = pw[r], c = l && gw.includes(l.type);
  if (!l) {
    P.warn(`Unknown arrow type: ${r}`);
    return;
  }
  const h = l.type, f = `${s}_${o}-${h}${t === "start" ? "Start" : "End"}${a && c ? "-margin" : ""}`;
  if (n && n.trim() !== "") {
    const y = n.replace(/[^\dA-Za-z]/g, "_"), m = `${f}_${y}`;
    if (!document.getElementById(m)) {
      const x = document.getElementById(f);
      if (x) {
        const C = x.cloneNode(!0);
        C.id = m, C.querySelectorAll("path, circle, line").forEach((S) => {
          S.setAttribute("stroke", n), l.fill && S.setAttribute("fill", n);
        }), x.parentNode?.appendChild(C);
      }
    }
    e.attr(`marker-${t}`, `url(${i}#${m})`);
  } else
    e.attr(`marker-${t}`, `url(${i}#${f})`);
}, "addEdgeMarker"), yw = /* @__PURE__ */ p((e) => typeof e == "string" ? e : _t()?.flowchart?.curve, "resolveEdgeCurveType"), Ur = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), mw = /* @__PURE__ */ p(() => {
  Ur.clear(), qt.clear();
}, "clear"), Zp = /* @__PURE__ */ p((e) => !!(e.label || e.startLabelLeft || e.startLabelRight || e.endLabelLeft || e.endLabelRight), "hasEdgeLabel"), gi = /* @__PURE__ */ p((e) => e ? typeof e == "string" ? e : e.reduce((t, r) => t + ";" + r, "") : "", "getLabelStyles"), Jn = /* @__PURE__ */ p(async (e, t) => {
  const r = _t();
  let i = Zt(r);
  const { labelStyles: s } = nt(t);
  t.labelStyle = s;
  const o = e.insert("g").attr("class", "edgeLabel"), a = o.insert("g").attr("class", "label").attr("data-id", t.id), n = t.labelType === "markdown", c = await Ce(
    e,
    t.label,
    {
      style: gi(t.labelStyle),
      useHtmlLabels: i,
      addSvgBackground: !0,
      isNode: !1,
      markdown: n,
      // Plain text edge labels should auto-wrap, markdown edge labels respect markdownAutoWrap config
      width: n ? void 0 : void 0
    },
    r
  );
  a.node().appendChild(c), P.info("abc82", t, t.labelType);
  let h, u;
  if (i) {
    const f = c.children[0], y = Tt(c);
    h = await mr.measure(() => f.getBoundingClientRect()), u = h, y.attr("width", h.width), y.attr("height", h.height);
  } else {
    const f = Tt(c).select("text").node();
    await mr.measure(() => {
      h = c.getBBox(), f && typeof f.getBBox == "function" ? u = f.getBBox() : u = h;
    });
  }
  a.attr("transform", pi(u, i)), Ur.set(t.id, o), t.width = h.width, t.height = h.height;
  let d;
  if (t.startLabelLeft) {
    const f = e.insert("g").attr("class", "edgeTerminals"), y = f.insert("g").attr("class", "inner"), m = await Ke(
      y,
      t.startLabelLeft,
      gi(t.labelStyle) || "",
      !1,
      !1
    );
    d = m;
    let x = m.getBBox();
    if (i) {
      const C = m.children[0], k = Tt(m);
      x = C.getBoundingClientRect(), k.attr("width", x.width), k.attr("height", x.height);
    }
    y.attr("transform", pi(x, i)), qt.get(t.id) || qt.set(t.id, {}), qt.get(t.id).startLeft = f, Ti(d, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const f = e.insert("g").attr("class", "edgeTerminals"), y = f.insert("g").attr("class", "inner"), m = await Ke(
      y,
      t.startLabelRight,
      gi(t.labelStyle) || "",
      !1,
      !1
    );
    d = m;
    let x = m.getBBox();
    if (i) {
      const C = m.children[0], k = Tt(m);
      x = C.getBoundingClientRect(), k.attr("width", x.width), k.attr("height", x.height);
    }
    y.attr("transform", pi(x, i)), qt.get(t.id) || qt.set(t.id, {}), qt.get(t.id).startRight = f, Ti(d, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const f = e.insert("g").attr("class", "edgeTerminals"), y = f.insert("g").attr("class", "inner"), m = await Ke(
      f,
      t.endLabelLeft,
      gi(t.labelStyle) || "",
      !1,
      !1
    );
    d = m;
    let x = m.getBBox();
    if (i) {
      const C = m.children[0], k = Tt(m);
      x = C.getBoundingClientRect(), k.attr("width", x.width), k.attr("height", x.height);
    }
    y.attr("transform", pi(x, i)), qt.get(t.id) || qt.set(t.id, {}), qt.get(t.id).endLeft = f, Ti(d, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const f = e.insert("g").attr("class", "edgeTerminals"), y = f.insert("g").attr("class", "inner"), m = await Ke(
      f,
      t.endLabelRight,
      gi(t.labelStyle) || "",
      !1,
      !1
    );
    d = m;
    let x = m.getBBox();
    if (i) {
      const C = m.children[0], k = Tt(m);
      x = C.getBoundingClientRect(), k.attr("width", x.width), k.attr("height", x.height);
    }
    y.attr("transform", pi(x, i)), qt.get(t.id) || qt.set(t.id, {}), qt.get(t.id).endRight = f, Ti(d, t.endLabelRight);
  }
  return c;
}, "insertEdgeLabel");
function Ti(e, t) {
  Zt(_t()) && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
}
p(Ti, "setTerminalWidth");
var xw = /* @__PURE__ */ p((e, t) => {
  P.debug("Moving label abc88 ", e.id, e.label, Ur.get(e.id), t);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  const i = _t(), { subGraphTitleTotalMargin: s } = fo(i);
  if (e.label) {
    const o = Ur.get(e.id);
    let a = e.x, n = e.y;
    if (r) {
      const l = Vt.calcLabelPosition(r);
      P.debug(
        "Moving label " + e.label + " from (",
        a,
        ",",
        n,
        ") to (",
        l.x,
        ",",
        l.y,
        ") abc88"
      ), t.updatedPath && (a = l.x, n = l.y);
    }
    o.attr("transform", `translate(${a}, ${n + s / 2})`);
  }
  if (e.startLabelLeft) {
    const o = qt.get(e.id).startLeft;
    let a = e.x, n = e.y;
    if (r) {
      const l = Vt.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.startLabelRight) {
    const o = qt.get(e.id).startRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = Vt.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelLeft) {
    const o = qt.get(e.id).endLeft;
    let a = e.x, n = e.y;
    if (r) {
      const l = Vt.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelRight) {
    const o = qt.get(e.id).endRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = Vt.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
}, "positionEdgeLabel"), Cw = /* @__PURE__ */ p((e, t) => {
  if (!e?.isLabelEdge || !e?.id?.endsWith("-to-label") || !Array.isArray(t) || t.length !== 2)
    return t;
  const [r, i] = t, s = Math.abs(i.x - r.x), o = Math.abs(i.y - r.y);
  return s < 1e-3 || o < 1e-3 ? t : o >= s ? [r, { x: r.x, y: i.y }, i] : [r, { x: i.x, y: r.y }, i];
}, "orthogonalizeToLabelClippedPoints"), bw = /* @__PURE__ */ p((e, t) => {
  const r = e.x, i = e.y, s = Math.abs(t.x - r), o = Math.abs(t.y - i), a = e.width / 2, n = e.height / 2;
  return s >= a || o >= n;
}, "outsideNode"), kw = /* @__PURE__ */ p((e, t, r) => {
  P.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const i = e.x, s = e.y, o = Math.abs(i - r.x), a = e.width / 2;
  let n = r.x < t.x ? a - o : a + o;
  const l = e.height / 2, c = Math.abs(t.y - r.y), h = Math.abs(t.x - r.x);
  if (Math.abs(s - t.y) * a > Math.abs(i - t.x) * l) {
    let u = r.y < t.y ? t.y - l - s : s - l - t.y;
    n = h * u / c;
    const d = {
      x: r.x < t.x ? r.x + n : r.x - h + n,
      y: r.y < t.y ? r.y + c - u : r.y - c + u
    };
    return n === 0 && (d.x = t.x, d.y = t.y), h === 0 && (d.x = t.x), c === 0 && (d.y = t.y), P.debug(`abc89 top/bottom calc, Q ${c}, q ${u}, R ${h}, r ${n}`, d), d;
  } else {
    r.x < t.x ? n = t.x - a - i : n = i - a - t.x;
    let u = c * n / h, d = r.x < t.x ? r.x + h - n : r.x - h + n, f = r.y < t.y ? r.y + u : r.y - u;
    return P.debug(`sides calc abc89, Q ${c}, q ${u}, R ${h}, r ${n}`, { _x: d, _y: f }), n === 0 && (d = t.x, f = t.y), h === 0 && (d = t.x), c === 0 && (f = t.y), { x: d, y: f };
  }
}, "intersection"), ec = /* @__PURE__ */ p((e, t) => {
  P.warn("abc88 cutPathAtIntersect", e, t);
  let r = [], i = e[0], s = !1;
  return e.forEach((o) => {
    if (P.info("abc88 checking point", o, t), !bw(t, o) && !s) {
      const a = kw(t, i, o);
      P.debug("abc88 inside", o, i, a), P.debug("abc88 intersection", a, t);
      let n = !1;
      r.forEach((l) => {
        n = n || l.x === a.x && l.y === a.y;
      }), r.some((l) => l.x === a.x && l.y === a.y) ? P.warn("abc88 no intersect", a, r) : r.push(a), s = !0;
    } else
      P.warn("abc88 outside", o, i), i = o, s || r.push(o);
  }), P.debug("returning points", r), r;
}, "cutPathAtIntersect");
function Kp(e) {
  const t = [], r = [];
  for (let i = 1; i < e.length - 1; i++) {
    const s = e[i - 1], o = e[i], a = e[i + 1];
    (s.x === o.x && o.y === a.y && Math.abs(o.x - a.x) > 5 && Math.abs(o.y - s.y) > 5 || s.y === o.y && o.x === a.x && Math.abs(o.x - s.x) > 5 && Math.abs(o.y - a.y) > 5) && (t.push(o), r.push(i));
  }
  return { cornerPoints: t, cornerPointPositions: r };
}
p(Kp, "extractCornerPoints");
var rc = /* @__PURE__ */ p(function(e, t, r) {
  const i = t.x - e.x, s = t.y - e.y, o = Math.sqrt(i * i + s * s), a = r / o;
  return { x: t.x - a * i, y: t.y - a * s };
}, "findAdjacentPoint"), ww = /* @__PURE__ */ p(function(e) {
  const { cornerPointPositions: t } = Kp(e), r = [];
  for (let i = 0; i < e.length; i++)
    if (t.includes(i)) {
      const s = e[i - 1], o = e[i + 1], a = e[i], n = rc(s, a, 5), l = rc(o, a, 5), c = l.x - n.x, h = l.y - n.y;
      r.push(n);
      const u = Math.sqrt(2) * 2;
      let d = { x: a.x, y: a.y };
      if (Math.abs(o.x - s.x) > 10 && Math.abs(o.y - s.y) >= 10) {
        P.debug(
          "Corner point fixing",
          Math.abs(o.x - s.x),
          Math.abs(o.y - s.y)
        );
        const f = 5;
        a.x === n.x ? d = {
          x: c < 0 ? n.x - f + u : n.x + f - u,
          y: h < 0 ? n.y - u : n.y + u
        } : d = {
          x: c < 0 ? n.x - u : n.x + u,
          y: h < 0 ? n.y - f + u : n.y + f - u
        };
      } else
        P.debug(
          "Corner point skipping fixing",
          Math.abs(o.x - s.x),
          Math.abs(o.y - s.y)
        );
      r.push(d, l);
    } else
      r.push(e[i]);
  return r;
}, "fixCorners"), Sw = /* @__PURE__ */ p((e, t, r) => {
  const i = e - t - r, s = 2, o = 2, a = s + o, n = Math.floor(i / a), l = Number.isFinite(n) ? Math.max(0, n) : 0, c = Array(l).fill(`${s} ${o}`).join(" ");
  return `0 ${t} ${c} ${r}`;
}, "generateDashArray"), Qp = /* @__PURE__ */ p(function(e, t, r, i, s, o, a, n = !1) {
  if (!a)
    throw new Error(
      `insertEdge: missing diagramId for edge "${t.id}" — edge IDs require a diagram prefix for uniqueness`
    );
  const { handDrawnSeed: l, layout: c } = _t();
  let h = t.points, u = !1;
  const d = s;
  var f = o;
  const y = [];
  for (const $ in t.cssCompiledStyles)
    Td($) || y.push(t.cssCompiledStyles[$]);
  if (c === "swimlane") {
    if (f.intersect && d.intersect && Array.isArray(h) && h.length >= 2)
      if (h.length === 2)
        h = [d.intersect(h[0]), f.intersect(h[1])];
      else {
        const $ = h.slice(1, -1), J = $[0], Z = $[$.length - 1], dt = 0.5, Ct = Math.abs(h[h.length - 1].x - Z.x) < dt && Math.abs(h[h.length - 1].y - Z.y) < dt, xt = d.intersect(J), St = Ct ? Z : f.intersect(Z), wt = Math.abs(St.x - Z.x) < dt && Math.abs(St.y - Z.y) < dt, gt = Math.abs(xt.x - J.x) < dt && Math.abs(xt.y - J.y) < dt ? [] : [xt], Bt = wt ? [] : [St];
        h = [...gt, ...$, ...Bt];
      }
    h = Cw(t, h);
  } else f.intersect && d.intersect && !n && (h = h.slice(1, t.points.length - 1), h.unshift(d.intersect(h[0])), h.push(f.intersect(h[h.length - 1])));
  const m = btoa(JSON.stringify(h));
  t.toCluster && (P.info("to cluster abc88", r.get(t.toCluster)), h = ec(t.points, r.get(t.toCluster).node), u = !0), t.fromCluster && (P.debug(
    "from cluster abc88",
    r.get(t.fromCluster),
    JSON.stringify(h, null, 2)
  ), h = ec(h.reverse(), r.get(t.fromCluster).node).reverse(), u = !0);
  let x = h.filter(($) => !Number.isNaN($.y));
  const C = yw(t.curve);
  C !== "rounded" && (x = ww(x));
  let k = Mi;
  switch (C) {
    case "linear":
      k = Mi;
      break;
    case "basis":
      k = Aa;
      break;
    case "cardinal":
      k = hd;
      break;
    case "bumpX":
      k = sd;
      break;
    case "bumpY":
      k = od;
      break;
    case "catmullRom":
      k = ud;
      break;
    case "monotoneX":
      k = md;
      break;
    case "monotoneY":
      k = xd;
      break;
    case "natural":
      k = bd;
      break;
    case "step":
      k = kd;
      break;
    case "stepAfter":
      k = Sd;
      break;
    case "stepBefore":
      k = wd;
      break;
    case "rounded":
      k = Mi;
      break;
    default:
      k = Aa;
  }
  const { x: S, y: T } = dw(t), _ = Rb().x(S).y(T).curve(k);
  let L;
  switch (t.thickness) {
    case "normal":
      L = "edge-thickness-normal";
      break;
    case "thick":
      L = "edge-thickness-thick";
      break;
    case "invisible":
      L = "edge-thickness-invisible";
      break;
    default:
      L = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      L += " edge-pattern-solid";
      break;
    case "dotted":
      L += " edge-pattern-dotted";
      break;
    case "dashed":
      L += " edge-pattern-dashed";
      break;
    default:
      L += " edge-pattern-solid";
  }
  let M, v = C === "rounded" ? Jp(tg(x, t), 5) : _(x);
  const X = Array.isArray(t.style) ? t.style : [t.style];
  let z = X.find(($) => $?.startsWith("stroke:")), I = "";
  t.animate && (I = "edge-animation-fast"), t.animation && (I = "edge-animation-" + t.animation);
  let et = !1;
  if (t.look === "handDrawn") {
    const $ = st.svg(e);
    Object.assign([], x);
    const J = $.path(v, {
      roughness: 0.3,
      seed: l
    });
    L += " transition", M = Tt(J).select("path").attr("id", `${a}-${t.id}`).attr(
      "class",
      " " + L + (t.classes ? " " + t.classes : "") + (I ? " " + I : "")
    ).attr("style", X ? X.reduce((dt, Ct) => dt + ";" + Ct, "") : "");
    let Z = M.attr("d");
    M.attr("d", Z), e.node().appendChild(M.node());
  } else {
    const $ = y.join(";"), J = X ? X.reduce((wt, ht) => wt + ht + ";", "") : "", Z = ($ ? $ + ";" + J + ";" : J) + ";" + (X ? X.reduce((wt, ht) => wt + ";" + ht, "") : "");
    M = e.append("path").attr("d", v).attr("id", `${a}-${t.id}`).attr(
      "class",
      " " + L + (t.classes ? " " + t.classes : "") + (I ? " " + I : "")
    ).attr("style", Z), z = Z.match(/stroke:([^;]+)/)?.[1], et = t.animate === !0 || !!t.animation || $.includes("animation");
    const dt = M.node(), Ct = typeof dt.getTotalLength == "function" ? dt.getTotalLength() : 0, xt = Jh[t.arrowTypeStart] || 0, St = Jh[t.arrowTypeEnd] || 0;
    if (t.look === "neo" && !et) {
      const ht = `stroke-dasharray: ${t.pattern === "dotted" || t.pattern === "dashed" ? Sw(Ct, xt, St) : `0 ${xt} ${Ct - xt - St} ${St}`}; stroke-dashoffset: 0;`;
      M.attr("style", ht + M.attr("style"));
    }
  }
  M.attr("data-edge", !0), M.attr("data-et", "edge"), M.attr("data-id", t.id), M.attr("data-points", m), M.attr("data-look", Wt(t.look)), t.showPoints && x.forEach(($) => {
    e.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", $.x).attr("cy", $.y);
  });
  let H = "";
  (_t().flowchart.arrowMarkerAbsolute || _t().state.arrowMarkerAbsolute) && (H = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, H = H.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), P.info("arrowTypeStart", t.arrowTypeStart), P.info("arrowTypeEnd", t.arrowTypeEnd);
  const E = !et && t?.look === "neo";
  fw(M, t, H, a, i, E, z);
  const O = Math.floor(h.length / 2), B = h[O];
  Vt.isLabelCoordinateInPath(B, M.attr("d")) || (u = !0);
  let R = {};
  return u && (R.updatedPath = h), R.originalPath = t.points, R;
}, "insertEdge");
function Jp(e, t) {
  if (e.length < 2)
    return "";
  let r = "";
  const i = e.length, s = 1e-5;
  for (let o = 0; o < i; o++) {
    const a = e[o], n = e[o - 1], l = e[o + 1];
    if (o === 0)
      r += `M${a.x},${a.y}`;
    else if (o === i - 1)
      r += `L${a.x},${a.y}`;
    else {
      const c = a.x - n.x, h = a.y - n.y, u = l.x - a.x, d = l.y - a.y, f = Math.hypot(c, h), y = Math.hypot(u, d);
      if (f < s || y < s) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const m = c / f, x = h / f, C = u / y, k = d / y, S = m * C + x * k, T = Math.max(-1, Math.min(1, S)), _ = Math.acos(T);
      if (_ < s || Math.abs(Math.PI - _) < s) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const L = Math.min(t / Math.sin(_ / 2), f / 2, y / 2), M = a.x - m * L, v = a.y - x * L, X = a.x + C * L, z = a.y + k * L;
      r += `L${M},${v}`, r += `Q${a.x},${a.y} ${X},${z}`;
    }
  }
  return r;
}
p(Jp, "generateRoundedPath");
function Ga(e, t) {
  if (!e || !t)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  const r = t.x - e.x, i = t.y - e.y;
  return { angle: Math.atan2(i, r), deltaX: r, deltaY: i };
}
p(Ga, "calculateDeltaAndAngle");
function tg(e, t) {
  const r = e.map((s) => ({ ...s }));
  if (e.length >= 2 && Xt[t.arrowTypeStart]) {
    const s = Xt[t.arrowTypeStart], o = e[0], a = e[1], { angle: n } = Ga(o, a), l = s * Math.cos(n), c = s * Math.sin(n);
    r[0].x = o.x + l, r[0].y = o.y + c;
  }
  const i = e.length;
  if (i >= 2 && Xt[t.arrowTypeEnd]) {
    const s = Xt[t.arrowTypeEnd], o = e[i - 1], a = e[i - 2], { angle: n } = Ga(a, o), l = s * Math.cos(n), c = s * Math.sin(n);
    r[i - 1].x = o.x - l, r[i - 1].y = o.y - c;
  }
  return r;
}
p(tg, "applyMarkerOffsetsToPoints");
var Tw = /* @__PURE__ */ p((e, t, r, i) => {
  t.forEach((s) => {
    Gw[s](e, r, i);
  });
}, "insertMarkers"), _w = /* @__PURE__ */ p((e, t, r) => {
  P.trace("Making markers for ", r), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 1,1 V 13 L18,7 Z"), e.append("marker").attr("id", r + "_" + t + "-extensionStart-margin").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,7 18,13 18,1").style("stroke-width", 2).style("stroke-dasharray", "0"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd-margin").attr("class", "marker extension " + t).attr("refX", 9).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,1 10,13 18,7").style("stroke-width", 2).style("stroke-dasharray", "0");
}, "extension"), Bw = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart-margin").attr("class", "marker composition " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("viewBox", "0 0 15 15").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd-margin").attr("class", "marker composition " + t).attr("refX", 3.5).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), vw = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart-margin").attr("class", "marker aggregation " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd-margin").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), Lw = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart-margin").attr("class", "marker dependency " + t).attr("refX", 4).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd-margin").attr("class", "marker dependency " + t).attr("refX", 16).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), Fw = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart-margin").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd-margin").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2);
}, "lollipop"), Mw = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 11.5).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 10.5).attr("markerHeight", 14).attr("orient", "auto").append("path").attr("d", "M 0 0 L 11.5 7 L 0 14 z").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 1).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11.5).attr("markerHeight", 14).attr("orient", "auto").append("polygon").attr("points", "0,7 11.5,14 11.5,0").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
}, "point"), Aw = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refY", 5).attr("refX", 12.25).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -2).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
}, "circle"), Ew = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossEnd-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", 17.7).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5), e.append("marker").attr("id", r + "_" + t + "-crossStart-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", -3.5).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5).style("stroke-dasharray", "1,0");
}, "cross"), $w = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), Ow = /* @__PURE__ */ p((e, t, r) => {
  const i = It(), { themeVariables: s } = i, { transitionColor: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd-margin").attr("refX", 17).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z").attr("fill", `${o}`);
}, "barbNeo"), Dw = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), Pw = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
  const s = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  s.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), s.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), Iw = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), Rw = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  const s = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  s.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), s.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), qw = /* @__PURE__ */ p((e, t, r) => {
  const i = It(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18").attr("stroke-width", `${o}`), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18").attr("stroke-width", `${o}`);
}, "only_one_neo"), Nw = /* @__PURE__ */ p((e, t, r) => {
  const i = It(), { themeVariables: s } = i, { strokeWidth: o, mainBkg: a } = s, n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
  n.append("circle").attr("fill", a ?? "white").attr("cx", 21).attr("cy", 9).attr("stroke-width", `${o}`).attr("r", 6), n.append("path").attr("d", "M9,0 L9,18").attr("stroke-width", `${o}`);
  const l = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
  l.append("circle").attr("fill", a ?? "white").attr("cx", 9).attr("cy", 9).attr("stroke-width", `${o}`).attr("r", 6), l.append("path").attr("d", "M21,0 L21,18").attr("stroke-width", `${o}`);
}, "zero_or_one_neo"), Ww = /* @__PURE__ */ p((e, t, r) => {
  const i = It(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27").attr("stroke-width", `${o}`), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18").attr("stroke-width", `${o}`);
}, "one_or_more_neo"), zw = /* @__PURE__ */ p((e, t, r) => {
  const i = It(), { themeVariables: s } = i, { strokeWidth: o, mainBkg: a } = s, n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
  n.append("circle").attr("fill", a ?? "white").attr("cx", 45.5).attr("cy", 18).attr("r", 6).attr("stroke-width", `${o}`), n.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18").attr("stroke-width", `${o}`);
  const l = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
  l.append("circle").attr("fill", a ?? "white").attr("cx", 11).attr("cy", 18).attr("r", 6).attr("stroke-width", `${o}`), l.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18").attr("stroke-width", `${o}`);
}, "zero_or_more_neo"), Hw = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  );
}, "requirement_arrow"), Yw = /* @__PURE__ */ p((e, t, r) => {
  const i = It(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("stroke-width", `${o}`).attr("viewBox", "0 0 25 20").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  ).attr("stroke-linejoin", "miter");
}, "requirement_arrow_neo"), jw = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), Uw = /* @__PURE__ */ p((e, t, r) => {
  const i = It(), { themeVariables: s } = i, { strokeWidth: o } = s, a = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("g");
  a.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), a.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), a.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10), a.selectAll("*").attr("stroke-width", `${o}`);
}, "requirement_contains_neo"), Gw = {
  extension: _w,
  composition: Bw,
  aggregation: vw,
  dependency: Lw,
  lollipop: Fw,
  point: Mw,
  circle: Aw,
  cross: Ew,
  barb: $w,
  barbNeo: Ow,
  only_one: Dw,
  zero_or_one: Pw,
  one_or_more: Iw,
  zero_or_more: Rw,
  only_one_neo: qw,
  zero_or_one_neo: Nw,
  one_or_more_neo: Ww,
  zero_or_more_neo: zw,
  requirement_arrow: Hw,
  requirement_contains: jw,
  requirement_arrow_neo: Yw,
  requirement_contains_neo: Uw
}, eg = Tw, rg = typeof global == "object" && global && global.Object === Object && global, Xw = typeof self == "object" && self && self.Object === Object && self, je = rg || Xw || Function("return this")(), Fe = je.Symbol, ig = Object.prototype, Vw = ig.hasOwnProperty, Zw = ig.toString, yi = Fe ? Fe.toStringTag : void 0;
function Kw(e) {
  var t = Vw.call(e, yi), r = e[yi];
  try {
    e[yi] = void 0;
    var i = !0;
  } catch {
  }
  var s = Zw.call(e);
  return i && (t ? e[yi] = r : delete e[yi]), s;
}
var Qw = Object.prototype, Jw = Qw.toString;
function tS(e) {
  return Jw.call(e);
}
var eS = "[object Null]", rS = "[object Undefined]", ic = Fe ? Fe.toStringTag : void 0;
function Kr(e) {
  return e == null ? e === void 0 ? rS : eS : ic && ic in Object(e) ? Kw(e) : tS(e);
}
function xr(e) {
  return e != null && typeof e == "object";
}
var iS = "[object Symbol]";
function tl(e) {
  return typeof e == "symbol" || xr(e) && Kr(e) == iS;
}
function sg(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length, s = Array(i); ++r < i; )
    s[r] = t(e[r], r, e);
  return s;
}
var ie = Array.isArray, sc = Fe ? Fe.prototype : void 0, oc = sc ? sc.toString : void 0;
function og(e) {
  if (typeof e == "string")
    return e;
  if (ie(e))
    return sg(e, og) + "";
  if (tl(e))
    return oc ? oc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function el(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function go(e) {
  return e;
}
var sS = "[object AsyncFunction]", oS = "[object Function]", aS = "[object GeneratorFunction]", nS = "[object Proxy]";
function Zs(e) {
  if (!el(e))
    return !1;
  var t = Kr(e);
  return t == oS || t == aS || t == sS || t == nS;
}
var Wo = je["__core-js_shared__"], ac = (function() {
  var e = /[^.]+$/.exec(Wo && Wo.keys && Wo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function lS(e) {
  return !!ac && ac in e;
}
var hS = Function.prototype, cS = hS.toString;
function Sr(e) {
  if (e != null) {
    try {
      return cS.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var uS = /[\\^$.*+?()[\]{}|]/g, dS = /^\[object .+?Constructor\]$/, fS = Function.prototype, pS = Object.prototype, gS = fS.toString, yS = pS.hasOwnProperty, mS = RegExp(
  "^" + gS.call(yS).replace(uS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xS(e) {
  if (!el(e) || lS(e))
    return !1;
  var t = Zs(e) ? mS : dS;
  return t.test(Sr(e));
}
function CS(e, t) {
  return e?.[t];
}
function Tr(e, t) {
  var r = CS(e, t);
  return xS(r) ? r : void 0;
}
var Xa = Tr(je, "WeakMap");
function bS(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function kS() {
}
var wS = 800, SS = 16, TS = Date.now;
function _S(e) {
  var t = 0, r = 0;
  return function() {
    var i = TS(), s = SS - (i - r);
    if (r = i, s > 0) {
      if (++t >= wS)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function _i(e) {
  return function() {
    return e;
  };
}
var nc = (function() {
  try {
    var e = Tr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), BS = nc ? function(e, t) {
  return nc(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: _i(t),
    writable: !0
  });
} : go, vS = _S(BS);
function LS(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function FS(e, t, r, i) {
  for (var s = e.length, o = r + -1; ++o < s; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
function MS(e) {
  return e !== e;
}
function AS(e, t, r) {
  for (var i = r - 1, s = e.length; ++i < s; )
    if (e[i] === t)
      return i;
  return -1;
}
function ES(e, t, r) {
  return t === t ? AS(e, t, r) : FS(e, MS, r);
}
function $S(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && ES(e, t, 0) > -1;
}
var OS = 9007199254740991, DS = /^(?:0|[1-9]\d*)$/;
function ag(e, t) {
  var r = typeof e;
  return t = t ?? OS, !!t && (r == "number" || r != "symbol" && DS.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ng(e, t) {
  return e === t || e !== e && t !== t;
}
var lc = Math.max;
function PS(e, t, r) {
  return t = lc(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var i = arguments, s = -1, o = lc(i.length - t, 0), a = Array(o); ++s < o; )
      a[s] = i[t + s];
    s = -1;
    for (var n = Array(t + 1); ++s < t; )
      n[s] = i[s];
    return n[t] = r(a), bS(e, this, n);
  };
}
function IS(e, t) {
  return vS(PS(e, t, go), e + "");
}
var RS = 9007199254740991;
function rl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= RS;
}
function yo(e) {
  return e != null && rl(e.length) && !Zs(e);
}
var qS = Object.prototype;
function lg(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || qS;
  return e === r;
}
function NS(e, t) {
  for (var r = -1, i = Array(e); ++r < e; )
    i[r] = t(r);
  return i;
}
var WS = "[object Arguments]";
function hc(e) {
  return xr(e) && Kr(e) == WS;
}
var hg = Object.prototype, zS = hg.hasOwnProperty, HS = hg.propertyIsEnumerable, mo = hc(/* @__PURE__ */ (function() {
  return arguments;
})()) ? hc : function(e) {
  return xr(e) && zS.call(e, "callee") && !HS.call(e, "callee");
};
function YS() {
  return !1;
}
var cg = typeof exports == "object" && exports && !exports.nodeType && exports, cc = cg && typeof module == "object" && module && !module.nodeType && module, jS = cc && cc.exports === cg, uc = jS ? je.Buffer : void 0, US = uc ? uc.isBuffer : void 0, Ks = US || YS, GS = "[object Arguments]", XS = "[object Array]", VS = "[object Boolean]", ZS = "[object Date]", KS = "[object Error]", QS = "[object Function]", JS = "[object Map]", tT = "[object Number]", eT = "[object Object]", rT = "[object RegExp]", iT = "[object Set]", sT = "[object String]", oT = "[object WeakMap]", aT = "[object ArrayBuffer]", nT = "[object DataView]", lT = "[object Float32Array]", hT = "[object Float64Array]", cT = "[object Int8Array]", uT = "[object Int16Array]", dT = "[object Int32Array]", fT = "[object Uint8Array]", pT = "[object Uint8ClampedArray]", gT = "[object Uint16Array]", yT = "[object Uint32Array]", Dt = {};
Dt[lT] = Dt[hT] = Dt[cT] = Dt[uT] = Dt[dT] = Dt[fT] = Dt[pT] = Dt[gT] = Dt[yT] = !0;
Dt[GS] = Dt[XS] = Dt[aT] = Dt[VS] = Dt[nT] = Dt[ZS] = Dt[KS] = Dt[QS] = Dt[JS] = Dt[tT] = Dt[eT] = Dt[rT] = Dt[iT] = Dt[sT] = Dt[oT] = !1;
function mT(e) {
  return xr(e) && rl(e.length) && !!Dt[Kr(e)];
}
function xT(e) {
  return function(t) {
    return e(t);
  };
}
var ug = typeof exports == "object" && exports && !exports.nodeType && exports, Ei = ug && typeof module == "object" && module && !module.nodeType && module, CT = Ei && Ei.exports === ug, zo = CT && rg.process, dc = (function() {
  try {
    var e = Ei && Ei.require && Ei.require("util").types;
    return e || zo && zo.binding && zo.binding("util");
  } catch {
  }
})(), fc = dc && dc.isTypedArray, il = fc ? xT(fc) : mT, bT = Object.prototype, kT = bT.hasOwnProperty;
function wT(e, t) {
  var r = ie(e), i = !r && mo(e), s = !r && !i && Ks(e), o = !r && !i && !s && il(e), a = r || i || s || o, n = a ? NS(e.length, String) : [], l = n.length;
  for (var c in e)
    (t || kT.call(e, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ag(c, l))) && n.push(c);
  return n;
}
function ST(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var TT = ST(Object.keys, Object), _T = Object.prototype, BT = _T.hasOwnProperty;
function dg(e) {
  if (!lg(e))
    return TT(e);
  var t = [];
  for (var r in Object(e))
    BT.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function _e(e) {
  return yo(e) ? wT(e) : dg(e);
}
var vT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, LT = /^\w*$/;
function sl(e, t) {
  if (ie(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || tl(e) ? !0 : LT.test(e) || !vT.test(e) || t != null && e in Object(t);
}
var qi = Tr(Object, "create");
function FT() {
  this.__data__ = qi ? qi(null) : {}, this.size = 0;
}
function MT(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var AT = "__lodash_hash_undefined__", ET = Object.prototype, $T = ET.hasOwnProperty;
function OT(e) {
  var t = this.__data__;
  if (qi) {
    var r = t[e];
    return r === AT ? void 0 : r;
  }
  return $T.call(t, e) ? t[e] : void 0;
}
var DT = Object.prototype, PT = DT.hasOwnProperty;
function IT(e) {
  var t = this.__data__;
  return qi ? t[e] !== void 0 : PT.call(t, e);
}
var RT = "__lodash_hash_undefined__";
function qT(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = qi && t === void 0 ? RT : t, this;
}
function Cr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Cr.prototype.clear = FT;
Cr.prototype.delete = MT;
Cr.prototype.get = OT;
Cr.prototype.has = IT;
Cr.prototype.set = qT;
function NT() {
  this.__data__ = [], this.size = 0;
}
function xo(e, t) {
  for (var r = e.length; r--; )
    if (ng(e[r][0], t))
      return r;
  return -1;
}
var WT = Array.prototype, zT = WT.splice;
function HT(e) {
  var t = this.__data__, r = xo(t, e);
  if (r < 0)
    return !1;
  var i = t.length - 1;
  return r == i ? t.pop() : zT.call(t, r, 1), --this.size, !0;
}
function YT(e) {
  var t = this.__data__, r = xo(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function jT(e) {
  return xo(this.__data__, e) > -1;
}
function UT(e, t) {
  var r = this.__data__, i = xo(r, e);
  return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
}
function Ue(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ue.prototype.clear = NT;
Ue.prototype.delete = HT;
Ue.prototype.get = YT;
Ue.prototype.has = jT;
Ue.prototype.set = UT;
var Ni = Tr(je, "Map");
function GT() {
  this.size = 0, this.__data__ = {
    hash: new Cr(),
    map: new (Ni || Ue)(),
    string: new Cr()
  };
}
function XT(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Co(e, t) {
  var r = e.__data__;
  return XT(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function VT(e) {
  var t = Co(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ZT(e) {
  return Co(this, e).get(e);
}
function KT(e) {
  return Co(this, e).has(e);
}
function QT(e, t) {
  var r = Co(this, e), i = r.size;
  return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
}
function Ge(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ge.prototype.clear = GT;
Ge.prototype.delete = VT;
Ge.prototype.get = ZT;
Ge.prototype.has = KT;
Ge.prototype.set = QT;
var JT = "Expected a function";
function ol(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(JT);
  var r = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = r.cache;
    if (o.has(s))
      return o.get(s);
    var a = e.apply(this, i);
    return r.cache = o.set(s, a) || o, a;
  };
  return r.cache = new (ol.Cache || Ge)(), r;
}
ol.Cache = Ge;
var t_ = 500;
function e_(e) {
  var t = ol(e, function(i) {
    return r.size === t_ && r.clear(), i;
  }), r = t.cache;
  return t;
}
var r_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i_ = /\\(\\)?/g, s_ = e_(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(r_, function(r, i, s, o) {
    t.push(s ? o.replace(i_, "$1") : i || r);
  }), t;
});
function o_(e) {
  return e == null ? "" : og(e);
}
function fg(e, t) {
  return ie(e) ? e : sl(e, t) ? [e] : s_(o_(e));
}
function bo(e) {
  if (typeof e == "string" || tl(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function pg(e, t) {
  t = fg(t, e);
  for (var r = 0, i = t.length; e != null && r < i; )
    e = e[bo(t[r++])];
  return r && r == i ? e : void 0;
}
function a_(e, t, r) {
  var i = e == null ? void 0 : pg(e, t);
  return i === void 0 ? r : i;
}
function gg(e, t) {
  for (var r = -1, i = t.length, s = e.length; ++r < i; )
    e[s + r] = t[r];
  return e;
}
var pc = Fe ? Fe.isConcatSpreadable : void 0;
function n_(e) {
  return ie(e) || mo(e) || !!(pc && e && e[pc]);
}
function l_(e, t, r, i, s) {
  var o = -1, a = e.length;
  for (r || (r = n_), s || (s = []); ++o < a; ) {
    var n = e[o];
    r(n) ? gg(s, n) : i || (s[s.length] = n);
  }
  return s;
}
function h_(e, t, r, i) {
  var s = -1, o = e == null ? 0 : e.length;
  for (i && o && (r = e[++s]); ++s < o; )
    r = t(r, e[s], s, e);
  return r;
}
function c_() {
  this.__data__ = new Ue(), this.size = 0;
}
function u_(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function d_(e) {
  return this.__data__.get(e);
}
function f_(e) {
  return this.__data__.has(e);
}
var p_ = 200;
function g_(e, t) {
  var r = this.__data__;
  if (r instanceof Ue) {
    var i = r.__data__;
    if (!Ni || i.length < p_ - 1)
      return i.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ge(i);
  }
  return r.set(e, t), this.size = r.size, this;
}
function We(e) {
  var t = this.__data__ = new Ue(e);
  this.size = t.size;
}
We.prototype.clear = c_;
We.prototype.delete = u_;
We.prototype.get = d_;
We.prototype.has = f_;
We.prototype.set = g_;
function yg(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length, s = 0, o = []; ++r < i; ) {
    var a = e[r];
    t(a, r, e) && (o[s++] = a);
  }
  return o;
}
function y_() {
  return [];
}
var m_ = Object.prototype, x_ = m_.propertyIsEnumerable, gc = Object.getOwnPropertySymbols, C_ = gc ? function(e) {
  return e == null ? [] : (e = Object(e), yg(gc(e), function(t) {
    return x_.call(e, t);
  }));
} : y_;
function b_(e, t, r) {
  var i = t(e);
  return ie(e) ? i : gg(i, r(e));
}
function yc(e) {
  return b_(e, _e, C_);
}
var Va = Tr(je, "DataView"), Za = Tr(je, "Promise"), Nr = Tr(je, "Set"), mc = "[object Map]", k_ = "[object Object]", xc = "[object Promise]", Cc = "[object Set]", bc = "[object WeakMap]", kc = "[object DataView]", w_ = Sr(Va), S_ = Sr(Ni), T_ = Sr(Za), __ = Sr(Nr), B_ = Sr(Xa), qe = Kr;
(Va && qe(new Va(new ArrayBuffer(1))) != kc || Ni && qe(new Ni()) != mc || Za && qe(Za.resolve()) != xc || Nr && qe(new Nr()) != Cc || Xa && qe(new Xa()) != bc) && (qe = function(e) {
  var t = Kr(e), r = t == k_ ? e.constructor : void 0, i = r ? Sr(r) : "";
  if (i)
    switch (i) {
      case w_:
        return kc;
      case S_:
        return mc;
      case T_:
        return xc;
      case __:
        return Cc;
      case B_:
        return bc;
    }
  return t;
});
var wc = je.Uint8Array, v_ = "__lodash_hash_undefined__";
function L_(e) {
  return this.__data__.set(e, v_), this;
}
function F_(e) {
  return this.__data__.has(e);
}
function Wi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Ge(); ++t < r; )
    this.add(e[t]);
}
Wi.prototype.add = Wi.prototype.push = L_;
Wi.prototype.has = F_;
function M_(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function mg(e, t) {
  return e.has(t);
}
var A_ = 1, E_ = 2;
function xg(e, t, r, i, s, o) {
  var a = r & A_, n = e.length, l = t.length;
  if (n != l && !(a && l > n))
    return !1;
  var c = o.get(e), h = o.get(t);
  if (c && h)
    return c == t && h == e;
  var u = -1, d = !0, f = r & E_ ? new Wi() : void 0;
  for (o.set(e, t), o.set(t, e); ++u < n; ) {
    var y = e[u], m = t[u];
    if (i)
      var x = a ? i(m, y, u, t, e, o) : i(y, m, u, e, t, o);
    if (x !== void 0) {
      if (x)
        continue;
      d = !1;
      break;
    }
    if (f) {
      if (!M_(t, function(C, k) {
        if (!mg(f, k) && (y === C || s(y, C, r, i, o)))
          return f.push(k);
      })) {
        d = !1;
        break;
      }
    } else if (!(y === m || s(y, m, r, i, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), d;
}
function $_(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(i, s) {
    r[++t] = [s, i];
  }), r;
}
function al(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(i) {
    r[++t] = i;
  }), r;
}
var O_ = 1, D_ = 2, P_ = "[object Boolean]", I_ = "[object Date]", R_ = "[object Error]", q_ = "[object Map]", N_ = "[object Number]", W_ = "[object RegExp]", z_ = "[object Set]", H_ = "[object String]", Y_ = "[object Symbol]", j_ = "[object ArrayBuffer]", U_ = "[object DataView]", Sc = Fe ? Fe.prototype : void 0, Ho = Sc ? Sc.valueOf : void 0;
function G_(e, t, r, i, s, o, a) {
  switch (r) {
    case U_:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case j_:
      return !(e.byteLength != t.byteLength || !o(new wc(e), new wc(t)));
    case P_:
    case I_:
    case N_:
      return ng(+e, +t);
    case R_:
      return e.name == t.name && e.message == t.message;
    case W_:
    case H_:
      return e == t + "";
    case q_:
      var n = $_;
    case z_:
      var l = i & O_;
      if (n || (n = al), e.size != t.size && !l)
        return !1;
      var c = a.get(e);
      if (c)
        return c == t;
      i |= D_, a.set(e, t);
      var h = xg(n(e), n(t), i, s, o, a);
      return a.delete(e), h;
    case Y_:
      if (Ho)
        return Ho.call(e) == Ho.call(t);
  }
  return !1;
}
var X_ = 1, V_ = Object.prototype, Z_ = V_.hasOwnProperty;
function K_(e, t, r, i, s, o) {
  var a = r & X_, n = yc(e), l = n.length, c = yc(t), h = c.length;
  if (l != h && !a)
    return !1;
  for (var u = l; u--; ) {
    var d = n[u];
    if (!(a ? d in t : Z_.call(t, d)))
      return !1;
  }
  var f = o.get(e), y = o.get(t);
  if (f && y)
    return f == t && y == e;
  var m = !0;
  o.set(e, t), o.set(t, e);
  for (var x = a; ++u < l; ) {
    d = n[u];
    var C = e[d], k = t[d];
    if (i)
      var S = a ? i(k, C, d, t, e, o) : i(C, k, d, e, t, o);
    if (!(S === void 0 ? C === k || s(C, k, r, i, o) : S)) {
      m = !1;
      break;
    }
    x || (x = d == "constructor");
  }
  if (m && !x) {
    var T = e.constructor, _ = t.constructor;
    T != _ && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof _ == "function" && _ instanceof _) && (m = !1);
  }
  return o.delete(e), o.delete(t), m;
}
var Q_ = 1, Tc = "[object Arguments]", _c = "[object Array]", cs = "[object Object]", J_ = Object.prototype, Bc = J_.hasOwnProperty;
function tB(e, t, r, i, s, o) {
  var a = ie(e), n = ie(t), l = a ? _c : qe(e), c = n ? _c : qe(t);
  l = l == Tc ? cs : l, c = c == Tc ? cs : c;
  var h = l == cs, u = c == cs, d = l == c;
  if (d && Ks(e)) {
    if (!Ks(t))
      return !1;
    a = !0, h = !1;
  }
  if (d && !h)
    return o || (o = new We()), a || il(e) ? xg(e, t, r, i, s, o) : G_(e, t, l, r, i, s, o);
  if (!(r & Q_)) {
    var f = h && Bc.call(e, "__wrapped__"), y = u && Bc.call(t, "__wrapped__");
    if (f || y) {
      var m = f ? e.value() : e, x = y ? t.value() : t;
      return o || (o = new We()), s(m, x, r, i, o);
    }
  }
  return d ? (o || (o = new We()), K_(e, t, r, i, s, o)) : !1;
}
function nl(e, t, r, i, s) {
  return e === t ? !0 : e == null || t == null || !xr(e) && !xr(t) ? e !== e && t !== t : tB(e, t, r, i, nl, s);
}
var eB = 1, rB = 2;
function iB(e, t, r, i) {
  var s = r.length, o = s;
  if (e == null)
    return !o;
  for (e = Object(e); s--; ) {
    var a = r[s];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++s < o; ) {
    a = r[s];
    var n = a[0], l = e[n], c = a[1];
    if (a[2]) {
      if (l === void 0 && !(n in e))
        return !1;
    } else {
      var h = new We(), u;
      if (!(u === void 0 ? nl(c, l, eB | rB, i, h) : u))
        return !1;
    }
  }
  return !0;
}
function Cg(e) {
  return e === e && !el(e);
}
function sB(e) {
  for (var t = _e(e), r = t.length; r--; ) {
    var i = t[r], s = e[i];
    t[r] = [i, s, Cg(s)];
  }
  return t;
}
function bg(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function oB(e) {
  var t = sB(e);
  return t.length == 1 && t[0][2] ? bg(t[0][0], t[0][1]) : function(r) {
    return r === e || iB(r, e, t);
  };
}
function aB(e, t) {
  return e != null && t in Object(e);
}
function nB(e, t, r) {
  t = fg(t, e);
  for (var i = -1, s = t.length, o = !1; ++i < s; ) {
    var a = bo(t[i]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++i != s ? o : (s = e == null ? 0 : e.length, !!s && rl(s) && ag(a, s) && (ie(e) || mo(e)));
}
function lB(e, t) {
  return e != null && nB(e, t, aB);
}
var hB = 1, cB = 2;
function uB(e, t) {
  return sl(e) && Cg(t) ? bg(bo(e), t) : function(r) {
    var i = a_(r, e);
    return i === void 0 && i === t ? lB(r, e) : nl(t, i, hB | cB);
  };
}
function dB(e) {
  return function(t) {
    return t?.[e];
  };
}
function fB(e) {
  return function(t) {
    return pg(t, e);
  };
}
function pB(e) {
  return sl(e) ? dB(bo(e)) : fB(e);
}
function kg(e) {
  return typeof e == "function" ? e : e == null ? go : typeof e == "object" ? ie(e) ? uB(e[0], e[1]) : oB(e) : pB(e);
}
function gB(e) {
  return function(t, r, i) {
    for (var s = -1, o = Object(t), a = i(t), n = a.length; n--; ) {
      var l = a[++s];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var yB = gB();
function mB(e, t) {
  return e && yB(e, t, _e);
}
function xB(e, t) {
  return function(r, i) {
    if (r == null)
      return r;
    if (!yo(r))
      return e(r, i);
    for (var s = r.length, o = -1, a = Object(r); ++o < s && i(a[o], o, a) !== !1; )
      ;
    return r;
  };
}
var ll = xB(mB);
function CB(e) {
  return xr(e) && yo(e);
}
function bB(e) {
  return typeof e == "function" ? e : go;
}
function or(e, t) {
  var r = ie(e) ? LS : ll;
  return r(e, bB(t));
}
function kB(e, t) {
  var r = [];
  return ll(e, function(i, s, o) {
    t(i, s, o) && r.push(i);
  }), r;
}
function us(e, t) {
  var r = ie(e) ? yg : kB;
  return r(e, kg(t));
}
function wB(e, t) {
  return sg(t, function(r) {
    return e[r];
  });
}
function Yo(e) {
  return e == null ? [] : wB(e, _e(e));
}
var SB = "[object Map]", TB = "[object Set]", _B = Object.prototype, BB = _B.hasOwnProperty;
function vc(e) {
  if (e == null)
    return !0;
  if (yo(e) && (ie(e) || typeof e == "string" || typeof e.splice == "function" || Ks(e) || il(e) || mo(e)))
    return !e.length;
  var t = qe(e);
  if (t == SB || t == TB)
    return !e.size;
  if (lg(e))
    return !dg(e).length;
  for (var r in e)
    if (BB.call(e, r))
      return !1;
  return !0;
}
function Pr(e) {
  return e === void 0;
}
function vB(e, t, r, i, s) {
  return s(e, function(o, a, n) {
    r = i ? (i = !1, o) : t(r, o, a, n);
  }), r;
}
function LB(e, t, r) {
  var i = ie(e) ? h_ : vB, s = arguments.length < 3;
  return i(e, kg(t), r, s, ll);
}
var FB = 1 / 0, MB = Nr && 1 / al(new Nr([, -0]))[1] == FB ? function(e) {
  return new Nr(e);
} : kS, AB = 200;
function EB(e, t, r) {
  var i = -1, s = $S, o = e.length, a = !0, n = [], l = n;
  if (o >= AB) {
    var c = MB(e);
    if (c)
      return al(c);
    a = !1, s = mg, l = new Wi();
  } else
    l = n;
  t:
    for (; ++i < o; ) {
      var h = e[i], u = h;
      if (h = h !== 0 ? h : 0, a && u === u) {
        for (var d = l.length; d--; )
          if (l[d] === u)
            continue t;
        n.push(h);
      } else s(l, u, r) || (l !== n && l.push(u), n.push(h));
    }
  return n;
}
var $B = IS(function(e) {
  return EB(l_(e, 1, CB, !0));
}), OB = "\0", ar = "\0", Lc = "";
class ko {
  /**
   * @param {GraphOptions} [opts] - Graph options.
   */
  constructor(t = {}) {
    this._isDirected = Object.prototype.hasOwnProperty.call(t, "directed") ? t.directed : !0, this._isMultigraph = Object.prototype.hasOwnProperty.call(t, "multigraph") ? t.multigraph : !1, this._isCompound = Object.prototype.hasOwnProperty.call(t, "compound") ? t.compound : !1, this._label = void 0, this._defaultNodeLabelFn = _i(void 0), this._defaultEdgeLabelFn = _i(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[ar] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  /* === Graph functions ========= */
  /**
   *
   * @returns {boolean} `true` if the graph is [directed](https://en.wikipedia.org/wiki/Directed_graph).
   * A directed graph treats the order of nodes in an edge as significant whereas an
   * [undirected](https://en.wikipedia.org/wiki/Graph_(mathematics)#Undirected_graph)
   * graph does not.
   * This example demonstrates the difference:
   *
   * @example
   *
   * ```js
   * var directed = new Graph({ directed: true });
   * directed.setEdge("a", "b", "my-label");
   * directed.edge("a", "b"); // returns "my-label"
   * directed.edge("b", "a"); // returns undefined
   *
   * var undirected = new Graph({ directed: false });
   * undirected.setEdge("a", "b", "my-label");
   * undirected.edge("a", "b"); // returns "my-label"
   * undirected.edge("b", "a"); // returns "my-label"
   * ```
   */
  isDirected() {
    return this._isDirected;
  }
  /**
   * @returns {boolean} `true` if the graph is a multigraph.
   */
  isMultigraph() {
    return this._isMultigraph;
  }
  /**
   * @returns {boolean} `true` if the graph is compound.
   */
  isCompound() {
    return this._isCompound;
  }
  /**
   * Sets the label for the graph to `label`.
   *
   * @param {GraphLabel} label - Label for the graph.
   * @returns {this}
   */
  setGraph(t) {
    return this._label = t, this;
  }
  /**
   * @returns {GraphLabel | undefined} the currently assigned label for the graph.
   * If no label has been assigned, returns `undefined`.
   *
   * @example
   *
   * ```js
   * var g = new Graph();
   * g.graph(); // returns undefined
   * g.setGraph("graph-label");
   *  g.graph(); // returns "graph-label"
   * ```
   */
  graph() {
    return this._label;
  }
  /* === Node functions ========== */
  /**
   * Sets a new default value that is assigned to nodes that are created without
   * a label.
   *
   * @param {typeof this._defaultNodeLabelFn | NodeLabel} newDefault - If a function,
   * it is called with the id of the node being created.
   * Otherwise, it is assigned as the label directly.
   * @returns {this}
   */
  setDefaultNodeLabel(t) {
    return Zs(t) || (t = _i(t)), this._defaultNodeLabelFn = t, this;
  }
  /**
   * @returns {number} the number of nodes in the graph.
   */
  nodeCount() {
    return this._nodeCount;
  }
  /**
   * @returns {NodeID[]} the ids of the nodes in the graph.
   *
   * @remarks
   * Use {@link node()} to get the label for each node.
   * Takes `O(|V|)` time.
   */
  nodes() {
    return _e(this._nodes);
  }
  /**
   * @returns {NodeID[]} those nodes in the graph that have no in-edges.
   * @remarks Takes `O(|V|)` time.
   */
  sources() {
    var t = this;
    return us(this.nodes(), function(r) {
      return vc(t._in[r]);
    });
  }
  /**
   * @returns {NodeID[]} those nodes in the graph that have no out-edges.
   * @remarks Takes `O(|V|)` time.
   */
  sinks() {
    var t = this;
    return us(this.nodes(), function(r) {
      return vc(t._out[r]);
    });
  }
  /**
   * Invokes setNode method for each node in `vs` list.
   *
   * @param {Collection<NodeID | number>} vs - List of node IDs to create/set.
   * @param {NodeLabel} [value] - If set, update all nodes with this value.
   * @returns {this}
   * @remarks Complexity: O(|names|).
   */
  setNodes(t, r) {
    var i = arguments, s = this;
    return or(t, function(o) {
      i.length > 1 ? s.setNode(o, r) : s.setNode(o);
    }), this;
  }
  /**
   * Creates or updates the value for the node `v` in the graph.
   *
   * @param {NodeID | number} v - ID of the node to create/set.
   * @param {NodeLabel} [value] - If supplied, it is set as the value for the node.
   * If not supplied and the node was created by this call then
   * {@link setDefaultNodeLabel} will be used to set the node's value.
   * @returns {this} the graph, allowing this to be chained with other functions.
   * @remarks Takes `O(1)` time.
   */
  setNode(t, r) {
    return Object.prototype.hasOwnProperty.call(this._nodes, t) ? (arguments.length > 1 && (this._nodes[t] = r), this) : (this._nodes[t] = arguments.length > 1 ? r : this._defaultNodeLabelFn(t), this._isCompound && (this._parent[t] = ar, this._children[t] = {}, this._children[ar][t] = !0), this._in[t] = {}, this._preds[t] = {}, this._out[t] = {}, this._sucs[t] = {}, ++this._nodeCount, this);
  }
  /**
   * Gets the label of node with specified name.
   *
   * @param {NodeID | number} v - Node ID.
   * @returns {NodeLabel | undefined} the label assigned to the node with the id `v`
   * if it is in the graph.
   * Otherwise returns `undefined`.
   * @remarks Takes `O(1)` time.
   */
  node(t) {
    return this._nodes[t];
  }
  /**
   * Detects whether graph has a node with specified name or not.
   *
   * @param {NodeID | number} v - Node ID.
   * @returns {boolean} Returns `true` the graph has a node with the id.
   * @remarks Takes `O(1)` time.
   */
  hasNode(t) {
    return Object.prototype.hasOwnProperty.call(this._nodes, t);
  }
  /**
   * Remove the node with the id `v` in the graph or do nothing if the node is
   * not in the graph.
   *
   * If the node was removed this function also removes any incident edges.
   *
   * @param {NodeID | number} v - Node ID to remove.
   * @returns {this} the graph, allowing this to be chained with other functions.
   * @remarks Takes `O(|E|)` time.
   */
  removeNode(t) {
    if (Object.prototype.hasOwnProperty.call(this._nodes, t)) {
      var r = (i) => this.removeEdge(this._edgeObjs[i]);
      delete this._nodes[t], this._isCompound && (this._removeFromParentsChildList(t), delete this._parent[t], or(this.children(t), (i) => {
        this.setParent(i);
      }), delete this._children[t]), or(_e(this._in[t]), r), delete this._in[t], delete this._preds[t], or(_e(this._out[t]), r), delete this._out[t], delete this._sucs[t], --this._nodeCount;
    }
    return this;
  }
  /**
   * Sets the parent for `v` to `parent` if it is defined or removes the parent
   * for `v` if `parent` is undefined.
   *
   * @param {NodeID | number} v - Node ID to set the parent for.
   * @param {NodeID | number} [parent] - Parent node ID. If not defined, removes the parent.
   * @returns {this} the graph, allowing this to be chained with other functions.
   * @throws if the graph is not compound.
   * @throws if setting the parent would create a cycle.
   * @remarks Takes `O(1)` time.
   */
  setParent(t, r) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (Pr(r))
      r = ar;
    else {
      r += "";
      for (var i = r; !Pr(i); i = this.parent(i))
        if (i === t)
          throw new Error("Setting " + r + " as parent of " + t + " would create a cycle");
      this.setNode(r);
    }
    return this.setNode(t), this._removeFromParentsChildList(t), this._parent[t] = r, this._children[r][t] = !0, this;
  }
  /**
   * @private
   * @param {NodeID | number} v - Node ID.
   */
  _removeFromParentsChildList(t) {
    delete this._children[this._parent[t]][t];
  }
  /**
   * Get parent node for node `v`.
   *
   * @param {NodeID | number} v - Node ID.
   * @returns {NodeID | undefined} the node that is a parent of node `v`
   * or `undefined` if node `v` does not have a parent or is not a member of
   * the graph.
   * Always returns `undefined` for graphs that are not compound.
   * @remarks Takes `O(1)` time.
   */
  parent(t) {
    if (this._isCompound) {
      var r = this._parent[t];
      if (r !== ar)
        return r;
    }
  }
  /**
   * Gets list of direct children of node v.
   *
   * @param {NodeID | number} [v] - Node ID. If not specified, gets nodes
   * with no parent (top-level nodes).
   * @returns {NodeID[] | undefined} all nodes that are children of node `v` or
   * `undefined` if node `v` is not in the graph.
   * Always returns `[]` for graphs that are not compound.
   * @remarks Takes `O(|V|)` time.
   */
  children(t) {
    if (Pr(t) && (t = ar), this._isCompound) {
      var r = this._children[t];
      if (r)
        return _e(r);
    } else {
      if (t === ar)
        return this.nodes();
      if (this.hasNode(t))
        return [];
    }
  }
  /**
   * @param {NodeID | number} v - Node ID.
   * @returns {NodeID[] | undefined} all nodes that are predecessors of the
   * specified node or `undefined` if node `v` is not in the graph.
   * @remarks
   * Behavior is undefined for undirected graphs - use {@link neighbors} instead.
   * Takes `O(|V|)` time.
   */
  predecessors(t) {
    var r = this._preds[t];
    if (r)
      return _e(r);
  }
  /**
   * @param {NodeID | number} v - Node ID.
   * @returns {NodeID[] | undefined} all nodes that are successors of the
   * specified node or `undefined` if node `v` is not in the graph.
   * @remarks
   * Behavior is undefined for undirected graphs - use {@link neighbors} instead.
   * Takes `O(|V|)` time.
   */
  successors(t) {
    var r = this._sucs[t];
    if (r)
      return _e(r);
  }
  /**
   * @param {NodeID | number} v - Node ID.
   * @returns {NodeID[] | undefined} all nodes that are predecessors or
   * successors of the specified node
   * or `undefined` if node `v` is not in the graph.
   * @remarks Takes `O(|V|)` time.
   */
  neighbors(t) {
    var r = this.predecessors(t);
    if (r)
      return $B(r, this.successors(t));
  }
  /**
   * @param {NodeID | number} v - Node ID.
   * @returns {boolean} True if the node is a leaf (has no successors), false otherwise.
   */
  isLeaf(t) {
    var r;
    return this.isDirected() ? r = this.successors(t) : r = this.neighbors(t), r.length === 0;
  }
  /**
     * Creates new graph with nodes filtered via `filter`.
     * Edges incident to rejected node
     * are also removed.
     * 
     * In case of compound graph, if parent is rejected by `filter`,
     * than all its children are rejected too.
  
     * @param {(v: NodeID) => boolean} filter - Function that returns `true` for nodes to keep.
     * @returns {Graph<GraphLabel, NodeLabel, EdgeLabel>} A new graph containing only the nodes for which `filter` returns `true`.
     * @remarks Average-case complexity: O(|E|+|V|).
     */
  filterNodes(t) {
    var r = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    r.setGraph(this.graph());
    var i = this;
    or(this._nodes, function(a, n) {
      t(n) && r.setNode(n, a);
    }), or(this._edgeObjs, function(a) {
      r.hasNode(a.v) && r.hasNode(a.w) && r.setEdge(a, i.edge(a));
    });
    var s = {};
    function o(a) {
      var n = i.parent(a);
      return n === void 0 || r.hasNode(n) ? (s[a] = n, n) : n in s ? s[n] : o(n);
    }
    return this._isCompound && or(r.nodes(), function(a) {
      r.setParent(a, o(a));
    }), r;
  }
  /* === Edge functions ========== */
  /**
   * Sets a new default value that is assigned to edges that are created without
   * a label.
   *
   * @param {typeof this._defaultEdgeLabelFn | EdgeLabel} newDefault - If a function,
   * it is called with the parameters `(v, w, name)`.
   * Otherwise, it is assigned as the label directly.
   * @returns {this}
   */
  setDefaultEdgeLabel(t) {
    return Zs(t) || (t = _i(t)), this._defaultEdgeLabelFn = t, this;
  }
  /**
   * @returns {number} the number of edges in the graph.
   * @remarks Complexity: O(1).
   */
  edgeCount() {
    return this._edgeCount;
  }
  /**
   * Gets edges of the graph.
   *
   * @returns {EdgeObj[]} the {@link EdgeObj} for each edge in the graph.
   *
   * @remarks
   * In case of compound graph subgraphs are not considered.
   * Use {@link edge()} to get the label for each edge.
   * Takes `O(|E|)` time.
   */
  edges() {
    return Yo(this._edgeObjs);
  }
  /**
   * Establish an edges path over the nodes in nodes list.
   *
   * If some edge is already exists, it will update its label, otherwise it will
   * create an edge between pair of nodes with label provided or default label
   * if no label provided.
   *
   * @param {Collection<NodeID>} vs - List of node IDs to create edges between.
   * @param {EdgeLabel} [value] - If set, update all edges with this value.
   * @returns {this}
   * @remarks Complexity: O(|nodes|).
   */
  setPath(t, r) {
    var i = this, s = arguments;
    return LB(t, function(o, a) {
      return s.length > 1 ? i.setEdge(o, a, r) : i.setEdge(o, a), a;
    }), this;
  }
  /**
   * Creates or updates the label for the edge (`v`, `w`) with the optionally
   * supplied `name`.
   *
   * @overload
   * @param {EdgeObj} arg0 - Edge object.
   * @param {EdgeLabel} [value] - If supplied, it is set as the label for the edge.
   * If not supplied and the edge was created by this call then
   * {@link setDefaultEdgeLabel} will be used to assign the edge's label.
   * @returns {this} the graph, allowing this to be chained with other functions.
   * @remarks Takes `O(1)` time.
   */
  /**
   * Creates or updates the label for the edge (`v`, `w`) with the optionally
   * supplied `name`.
   *
   * @overload
   * @param {NodeID | number} v - Source node ID. Number values will be coerced to strings.
   * @param {NodeID | number} w - Target node ID. Number values will be coerced to strings.
   * @param {EdgeLabel} [value] - If supplied, it is set as the label for the edge.
   * If not supplied and the edge was created by this call then
   * {@link setDefaultEdgeLabel} will be used to assign the edge's label.
   * @param {string | number} [name] - Edge name. Only useful with multigraphs.
   * @returns {this} the graph, allowing this to be chained with other functions.
   * @remarks Takes `O(1)` time.
   */
  setEdge() {
    var t, r, i, s, o = !1, a = arguments[0];
    typeof a == "object" && a !== null && "v" in a ? (t = a.v, r = a.w, i = a.name, arguments.length === 2 && (s = arguments[1], o = !0)) : (t = a, r = arguments[1], i = arguments[3], arguments.length > 2 && (s = arguments[2], o = !0)), t = "" + t, r = "" + r, Pr(i) || (i = "" + i);
    var n = Bi(this._isDirected, t, r, i);
    if (Object.prototype.hasOwnProperty.call(this._edgeLabels, n))
      return o && (this._edgeLabels[n] = s), this;
    if (!Pr(i) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(t), this.setNode(r), this._edgeLabels[n] = o ? s : this._defaultEdgeLabelFn(t, r, i);
    var l = DB(this._isDirected, t, r, i);
    return t = l.v, r = l.w, Object.freeze(l), this._edgeObjs[n] = l, Fc(this._preds[r], t), Fc(this._sucs[t], r), this._in[r][n] = l, this._out[t][n] = l, this._edgeCount++, this;
  }
  /**
   * Gets the label for the specified edge.
   *
   * @overload
   * @param {EdgeObj} v - Edge object.
   * @returns {EdgeLabel | undefined} the label for the edge (`v`, `w`) if the
   * graph has an edge between `v` and `w` with the optional `name`.
   * Returned `undefined` if there is no such edge in the graph.
   * @remarks
   * `v` and `w` can be interchanged for undirected graphs.
   * Takes `O(1)` time.
   */
  /**
   * Gets the label for the specified edge.
   *
   * @overload
   * @param {NodeID | number} v - Source node ID.
   * @param {NodeID | number} w - Target node ID.
   * @param {string | number} [name] - Edge name. Only useful with multigraphs.
   * @returns {EdgeLabel | undefined} the label for the edge (`v`, `w`) if the
   * graph has an edge between `v` and `w` with the optional `name`.
   * Returned `undefined` if there is no such edge in the graph.
   * @remarks
   * `v` and `w` can be interchanged for undirected graphs.
   * Takes `O(1)` time.
   */
  edge(t, r, i) {
    var s = arguments.length === 1 ? jo(this._isDirected, arguments[0]) : Bi(this._isDirected, t, r, i);
    return this._edgeLabels[s];
  }
  /**
   * Detects whether the graph contains specified edge or not.
   *
   * @overload
   * @param {EdgeObj} v - Edge object.
   * @returns {boolean} `true` if the graph has an edge between `v` and `w`
   * with the optional `name`.
   * @remarks
   * `v` and `w` can be interchanged for undirected graphs.
   * No subgraphs are considered.
   * Takes `O(1)` time.
   */
  /**
   * Detects whether the graph contains specified edge or not.
   *
   * @overload
   * @param {NodeID | number} v - Source node ID.
   * @param {NodeID | number} w - Target node ID.
   * @param {string | number} [name] - Edge name. Only useful with multigraphs.
   * @returns {boolean} `true` if the graph has an edge between `v` and `w`
   * with the optional `name`.
   * @remarks
   * `v` and `w` can be interchanged for undirected graphs.
   * No subgraphs are considered.
   * Takes `O(1)` time.
   */
  hasEdge(t, r, i) {
    var s = arguments.length === 1 ? jo(this._isDirected, arguments[0]) : Bi(this._isDirected, t, r, i);
    return Object.prototype.hasOwnProperty.call(this._edgeLabels, s);
  }
  /**
   * Removes the edge (`v`, `w`) if the graph has an edge between `v` and `w`
   * with the optional `name`. If not this function does nothing.
   *
   * @overload
   * @param {EdgeObj} v - Edge object.
   * @returns {this}
   * @remarks
   * `v` and `w` can be interchanged for undirected graphs.
   * No subgraphs are considered.
   * Takes `O(1)` time.
   */
  /**
   * Removes the edge (`v`, `w`) if the graph has an edge between `v` and `w`
   * with the optional `name`. If not this function does nothing.
   *
   * @overload
   * @param {NodeID | number} v - Source node ID.
   * @param {NodeID | number} w - Target node ID.
   * @param {string | number} [name] - Edge name. Only useful with multigraphs.
   * @returns {this}
   * @remarks
   * `v` and `w` can be interchanged for undirected graphs.
   * Takes `O(1)` time.
   */
  removeEdge(t, r, i) {
    var s = arguments.length === 1 ? jo(this._isDirected, arguments[0]) : Bi(this._isDirected, t, r, i), o = this._edgeObjs[s];
    return o && (t = o.v, r = o.w, delete this._edgeLabels[s], delete this._edgeObjs[s], Mc(this._preds[r], t), Mc(this._sucs[t], r), delete this._in[r][s], delete this._out[t][s], this._edgeCount--), this;
  }
  /**
   * @param {NodeID | number} v - Target node ID.
   * @param {NodeID | number} [u] - Optionally filters edges down to just those
   * coming from node `u`.
   * @returns {EdgeObj[] | undefined} all edges that point to the node `v`.
   * Returns `undefined` if node `v` is not in the graph.
   * @remarks
   * Behavior is undefined for undirected graphs - use {@link nodeEdges} instead.
   * Takes `O(|E|)` time.
   */
  inEdges(t, r) {
    var i = this._in[t];
    if (i) {
      var s = Yo(i);
      return r ? us(s, function(o) {
        return o.v === r;
      }) : s;
    }
  }
  /**
   * @param {NodeID | number} v - Target node ID.
   * @param {NodeID | number} [w] - Optionally filters edges down to just those
   * that point to `w`.
   * @returns {EdgeObj[] | undefined} all edges that point to the node `v`.
   * Returns `undefined` if node `v` is not in the graph.
   * @remarks
   * Behavior is undefined for undirected graphs - use {@link nodeEdges} instead.
   * Takes `O(|E|)` time.
   */
  outEdges(t, r) {
    var i = this._out[t];
    if (i) {
      var s = Yo(i);
      return r ? us(s, function(o) {
        return o.w === r;
      }) : s;
    }
  }
  /**
   * @param {NodeID | number} v - Target Node ID.
   * @param {NodeID | number} [w] - If set, filters those edges down to just
   * those between nodes `v` and `w` regardless of direction
   * @returns {EdgeObj[] | undefined} all edges to or from node `v` regardless
   * of direction. Returns `undefined` if node `v` is not in the graph.
   * @remarks Takes `O(|E|)` time.
   */
  nodeEdges(t, r) {
    var i = this.inEdges(t, r);
    if (i)
      return i.concat(this.outEdges(t, r));
  }
}
ko.prototype._nodeCount = 0;
ko.prototype._edgeCount = 0;
function Fc(e, t) {
  e[t] ? e[t]++ : e[t] = 1;
}
function Mc(e, t) {
  --e[t] || delete e[t];
}
function Bi(e, t, r, i) {
  var s = "" + t, o = "" + r;
  if (!e && s > o) {
    var a = s;
    s = o, o = a;
  }
  return s + Lc + o + Lc + (Pr(i) ? OB : i);
}
function DB(e, t, r, i) {
  var s = "" + t, o = "" + r;
  if (!e && s > o) {
    var a = s;
    s = o, o = a;
  }
  var n = { v: s, w: o };
  return i && (n.name = i), n;
}
function jo(e, t) {
  return Bi(e, t.v, t.w, t.name);
}
function wg(e, { edgePathsClass: t = "edges edgePaths" } = {}) {
  const r = e.insert("g").attr("class", "root"), i = r.insert("g").attr("class", "clusters"), s = r.insert("g").attr("class", t), o = r.insert("g").attr("class", "edgeLabels"), a = r.insert("g").attr("class", "nodes");
  return { clusters: i, edgePaths: s, edgeLabels: o, nodes: a, rootGroups: r };
}
p(wg, "createLayoutElementGroups");
async function Sg(e, t) {
  if (t.label) {
    const { shapeSvg: r, bbox: i } = await ct(e, t);
    t.labelBBox = { width: i.width, height: i.height }, r.remove();
  } else
    t.labelBBox = { width: 0, height: 0 };
}
p(Sg, "measureGroupLabel");
async function Tg(e, t, r) {
  const i = await Qn(e, t, r), s = i.node()?.getBBox() ?? { width: 0, height: 0 };
  return t.width = s.width, t.height = s.height, i;
}
p(Tg, "insertMeasuredNode");
async function _g(e, t) {
  const r = new ko({
    multigraph: !0,
    compound: !0
  }), i = [...t.edges], s = _t(), o = wg(e), { edgeLabels: a, nodes: n } = o, l = /* @__PURE__ */ new Map(), c = e.node() != null;
  await Promise.all(
    t.nodes.map(async (h) => {
      if (h.isGroup)
        c && await Sg(n, h), r.setNode(h.id, { ...h });
      else {
        if (c) {
          const u = await Tg(n, h, {
            config: s,
            dir: h.dir
          });
          l.set(h.id, u);
        }
        r.setNode(h.id, { ...h });
      }
    })
  );
  for (const h of i)
    c && Zp(h) && await Jn(a, h), r.setEdge(h.start, h.end, { ...h }, h.id), t.edges.some((d) => d.id === h.id) || t.edges.push(h);
  if (globalThis.mermaidCaptureSizes) {
    const { captureNodeSizes: h } = await import("./sizeCapture-INFHLROL-CVL5Na0C.js");
    h(e, t);
  }
  return {
    graph: r,
    groups: o,
    nodeElements: l
  };
}
p(_g, "createGraphWithElements");
var Lt = /* @__PURE__ */ new Map(), ur = /* @__PURE__ */ new Map(), Bg = /* @__PURE__ */ new Map(), PB = /* @__PURE__ */ p(() => {
  ur.clear(), Bg.clear(), Lt.clear();
}, "clear"), zi = /* @__PURE__ */ p((e, t) => {
  const r = ur.get(t) || [];
  return P.trace("In isDescendant", t, " ", e, " = ", r.includes(e)), r.includes(e);
}, "isDescendant"), IB = /* @__PURE__ */ p((e, t) => {
  const r = ur.get(t) || [];
  return P.info("Descendants of ", t, " is ", r), P.info("Edge is ", e), e.v === t || e.w === t ? !1 : r ? r.includes(e.v) || zi(e.v, t) || zi(e.w, t) || r.includes(e.w) : (P.debug("Tilt, ", t, ",not in descendants"), !1);
}, "edgeInCluster"), vg = /* @__PURE__ */ p((e, t, r, i) => {
  P.debug(
    "Copying children of ",
    e,
    "root",
    i,
    "data",
    t.node(e),
    i
  );
  const s = t.children(e) || [];
  e !== i && s.push(e), P.debug("Copying (nodes) clusterId", e, "nodes", s), s.forEach((o) => {
    if (t.children(o).length > 0)
      vg(o, t, r, i);
    else {
      const a = t.node(o);
      P.info("cp ", o, " to ", i, " with parent ", e), r.setNode(o, a), i !== t.parent(o) && (P.debug("Setting parent", o, t.parent(o)), r.setParent(o, t.parent(o))), e !== i && o !== e ? (P.debug("Setting parent", o, e), r.setParent(o, e)) : (P.info("In copy ", e, "root", i, "data", t.node(e), i), P.debug(
        "Not Setting parent for node=",
        o,
        "cluster!==rootId",
        e !== i,
        "node!==clusterId",
        o !== e
      ));
      const n = t.edges(o);
      P.debug("Copying Edges", n), n.forEach((l) => {
        P.info("Edge", l);
        const c = t.edge(l.v, l.w, l.name);
        P.info("Edge data", c, i);
        try {
          IB(l, i) ? (P.info("Copying as ", l.v, l.w, c, l.name), r.setEdge(l.v, l.w, c, l.name), P.info("newGraph edges ", r.edges(), r.edge(r.edges()[0]))) : P.info(
            "Skipping copy of edge ",
            l.v,
            "-->",
            l.w,
            " rootId: ",
            i,
            " clusterId:",
            e
          );
        } catch (h) {
          P.error(h);
        }
      });
    }
    P.debug("Removing node", o), t.removeNode(o);
  });
}, "copy"), Lg = /* @__PURE__ */ p((e, t) => {
  const r = t.children(e);
  let i = [...r];
  for (const s of r)
    Bg.set(s, e), i = [...i, ...Lg(s, t)];
  return i;
}, "extractDescendants"), RB = /* @__PURE__ */ p((e, t, r) => {
  const i = e.edges().filter((l) => l.v === t || l.w === t), s = e.edges().filter((l) => l.v === r || l.w === r), o = i.map((l) => ({ v: l.v === t ? r : l.v, w: l.w === t ? t : l.w })), a = s.map((l) => ({ v: l.v, w: l.w }));
  return o.filter((l) => a.some((c) => l.v === c.v && l.w === c.w));
}, "findCommonEdges"), Qs = /* @__PURE__ */ p((e, t, r) => {
  const i = t.children(e);
  if (P.trace("Searching children of id ", e, i), i.length < 1)
    return e;
  let s;
  for (const o of i) {
    const a = Qs(o, t, r), n = RB(t, r, a);
    if (a)
      if (n.length > 0)
        s = a;
      else
        return a;
  }
  return s;
}, "findNonClusterChild"), Ac = /* @__PURE__ */ p((e) => !Lt.has(e) || !Lt.get(e).externalConnections ? e : Lt.has(e) ? Lt.get(e).id : e, "getAnchorId"), tM = /* @__PURE__ */ p((e, t) => {
  if (!e || t > 10) {
    P.debug("Opting out, no graph ");
    return;
  } else
    P.debug("Opting in, graph ");
  e.nodes().forEach(function(r) {
    e.children(r).length > 0 && (P.debug(
      "Cluster identified",
      r,
      " Replacement id in edges: ",
      Qs(r, e, r)
    ), ur.set(r, Lg(r, e)), Lt.set(r, { id: Qs(r, e, r), clusterData: e.node(r) }));
  }), e.nodes().forEach(function(r) {
    const i = e.children(r), s = e.edges();
    i.length > 0 ? (P.debug("Cluster identified", r, ur), s.forEach((o) => {
      const a = zi(o.v, r), n = zi(o.w, r);
      a ^ n && (P.debug("Edge: ", o, " leaves cluster ", r), P.debug("Descendants of XXX ", r, ": ", ur.get(r)), Lt.get(r).externalConnections = !0);
    })) : P.debug("Not a cluster ", r, ur);
  });
  for (let r of Lt.keys()) {
    const i = Lt.get(r).id, s = e.parent(i);
    s !== r && Lt.has(s) && !Lt.get(s).externalConnections && (Lt.get(r).id = s);
    const o = e.edges().some((a) => a.v === r);
    if (i && Lt.get(r)?.externalConnections && o && Ag(e, i, r)) {
      const a = qB(e, r, e.parent(i));
      a && (Lt.get(r).id = a);
    }
  }
  e.edges().forEach(function(r) {
    const i = e.edge(r);
    P.debug("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(r)), P.debug("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(e.edge(r)));
    let s = r.v, o = r.w;
    if (P.debug(
      "Fix XXX",
      Lt,
      "ids:",
      r.v,
      r.w,
      "Translating: ",
      Lt.get(r.v),
      " --- ",
      Lt.get(r.w)
    ), Lt.get(r.v) || Lt.get(r.w)) {
      if (P.debug("Fixing and trying - removing XXX", r.v, r.w, r.name), s = Ac(r.v), o = Ac(r.w), e.removeEdge(r.v, r.w, r.name), s !== r.v) {
        const a = e.parent(s);
        Lt.get(a).externalConnections = !0, i.fromCluster = r.v;
      }
      if (o !== r.w) {
        const a = e.parent(o);
        Lt.get(a).externalConnections = !0, i.toCluster = r.w;
      }
      P.debug("Fix Replacing with XXX", s, o, r.name), e.setEdge(s, o, i, r.name);
    }
  }), Fg(e, 0), P.trace(Lt);
}, "adjustClustersAndEdges"), Fg = /* @__PURE__ */ p((e, t) => {
  if (t > 10) {
    P.error("Bailing out");
    return;
  }
  let r = e.nodes(), i = !1;
  for (const s of r) {
    const o = e.children(s);
    i = i || o.length > 0;
  }
  if (!i) {
    P.debug("Done, no node has children", e.nodes());
    return;
  }
  P.debug("Nodes = ", r, t);
  for (const s of r)
    if (P.debug(
      "Extracting node",
      s,
      Lt,
      Lt.has(s) && !Lt.get(s).externalConnections,
      !e.parent(s),
      e.node(s),
      e.children("D"),
      " Depth ",
      t
    ), !Lt.has(s))
      P.debug("Not a cluster", s, t);
    else if (!Lt.get(s).externalConnections && e.children(s) && e.children(s).length > 0) {
      P.debug(
        "Cluster without external connections, without a parent and with children",
        s,
        t
      );
      let a = e.graph().rankdir === "TB" ? "LR" : "TB";
      Lt.get(s)?.clusterData?.dir && (a = Lt.get(s).clusterData.dir, P.debug("Fixing dir", Lt.get(s).clusterData.dir, a));
      const n = new ko({
        multigraph: !0,
        compound: !0
      }).setGraph({
        rankdir: a,
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      vg(s, e, n, s), e.setNode(s, {
        clusterNode: !0,
        id: s,
        clusterData: Lt.get(s).clusterData,
        label: Lt.get(s).label,
        graph: n
      });
    } else
      P.debug(
        "Cluster ** ",
        s,
        " **not meeting the criteria !externalConnections:",
        !Lt.get(s).externalConnections,
        " no parent: ",
        !e.parent(s),
        " children ",
        e.children(s) && e.children(s).length > 0,
        e.children("D"),
        t
      ), P.debug(Lt);
  r = e.nodes(), P.debug("New list of nodes", r);
  for (const s of r) {
    const o = e.node(s);
    P.debug(" Now next level", s, o), o?.clusterNode && Fg(o.graph, t + 1);
  }
}, "extractor"), Mg = /* @__PURE__ */ p((e, t) => {
  if (t.length === 0)
    return [];
  let r = Object.assign([], t);
  return t.forEach((i) => {
    const s = e.children(i), o = Mg(e, s);
    r = [...r, ...o];
  }), r;
}, "sorter"), eM = /* @__PURE__ */ p((e) => Mg(e, e.children()), "sortNodesByHierarchy"), Ag = /* @__PURE__ */ p((e, t, r) => {
  let i = e.parent(t);
  for (; i && i !== r; ) {
    const s = Lt.get(i);
    if (s && !s.externalConnections)
      return !0;
    i = e.parent(i);
  }
  return !1;
}, "isNodeInExtractableCluster"), qB = /* @__PURE__ */ p((e, t, r) => {
  const i = e.children(t) ?? [];
  for (const s of i) {
    if (s === r || zi(s, r))
      continue;
    const o = Qs(s, e, t);
    if (o && !Ag(e, o, t))
      return o;
  }
  return null;
}, "findSafeAnchorNode");
function Eg({
  prepareLayout: e,
  measureLayout: t,
  runLayoutCore: r,
  paintLayout: i,
  afterPaint: s,
  paintOptions: o
}) {
  const a = t ?? cl;
  return /* @__PURE__ */ p(async function(l, c, h, u) {
    const d = c.select("g");
    (h?.insertMarkers ?? eg)(
      d,
      l.markers,
      l.type,
      l.diagramId
    ), hl();
    const f = {
      element: d,
      // root SVG <g>
      helpers: h,
      // Mermaid helper functions
      options: u
      // { algorithm: "elk.layered" }
    };
    f.preparedLayout = await e?.(l, f);
    const y = await a(l, f), m = await r(l, f), x = {
      ...f,
      measure: y
    };
    i ? await i(l, x, m) : await ul(
      l,
      x,
      o
    ), await s?.(l, x, m);
  }, "render");
}
p(Eg, "createCommonLayoutRenderer");
function hl() {
  iw(), mw(), uw(), PB();
}
p(hl, "clearLayoutRenderState");
async function cl(e, { element: t }) {
  return await _g(t, e);
}
p(cl, "defaultMeasureLayout");
async function ul(e, t, r = {}) {
  const { measure: i } = t, { groups: s } = i;
  for (const a of r.getNodes?.(e, t) ?? e.nodes)
    r.skipNode?.(a, t) || await $g(s, a, t, r);
  const o = Dg(e.nodes);
  for (const a of e.edges)
    Pg(a, r) || await Ig(s, a, o, e, r, t);
}
p(ul, "paintLayoutData");
async function $g(e, t, r, i) {
  t.clusterNode ? Qh(t) : Og(t, r, i) ? await Vp(e.clusters, t) : Qh(t);
}
p($g, "paintLayoutNode");
function Og(e, t, r) {
  return e.isGroup === !0 && (r.isCluster?.(e, t) ?? !0);
}
p(Og, "shouldPaintAsCluster");
function Dg(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e)
    r?.id && t.set(r.id, r);
  return t;
}
p(Dg, "buildNodeLookup");
function Pg(e, t) {
  return e.isLayoutOnly || !!t.skipEdge?.(e);
}
p(Pg, "shouldSkipPaintEdge");
async function Ig(e, t, r, i, s, o) {
  const a = Qp(
    e.edgePaths,
    { ...t },
    s.clusterDb ?? /* @__PURE__ */ new Map(),
    i.type,
    Ka(t.start, t, r, o, s),
    Ka(t.end, t, r, o, s),
    i.diagramId,
    Rg(t, s)
  );
  Zp(t) && (Ur.has(t.id) || await Jn(e.edgeLabels, t), qg(t, a));
}
p(Ig, "paintLayoutEdge");
function Ka(e, t, r, i, s) {
  return s.getEdgeNode?.(e, t, i) ?? (e ? r.get(e) ?? {} : {});
}
p(Ka, "getRenderedNode");
function Rg(e, t) {
  return typeof t.skipIntersect == "function" ? t.skipIntersect(e) : t.skipIntersect ?? !1;
}
p(Rg, "shouldSkipIntersect");
function qg(e, t) {
  const r = t?.updatedPath ?? t?.originalPath, i = It(), { subGraphTitleTotalMargin: s } = fo({
    flowchart: i.flowchart ?? {}
  });
  if (e.label) {
    const o = Ur.get(e.id);
    let a = e.x, n = e.y;
    if (r) {
      const l = Vt.calcLabelPosition(r);
      P.debug(
        "Moving label " + e.label + " from (",
        a,
        ",",
        n,
        ") to (",
        l.x,
        ",",
        l.y,
        ") abc88"
      ), t?.updatedPath && (a = l.x, n = l.y);
    }
    o.attr("transform", `translate(${a}, ${n + s / 2})`);
  }
  if (e?.startLabelLeft) {
    const o = qt.get(e.id).startLeft;
    let a = e?.x, n = e?.y;
    if (r) {
      const l = Vt.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.startLabelRight) {
    const o = qt.get(e.id).startRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = Vt.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelLeft) {
    const o = qt.get(e.id).endLeft;
    let a = e.x, n = e.y;
    if (r) {
      const l = Vt.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelRight) {
    const o = qt.get(e.id).endRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = Vt.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
}
p(qg, "positionRenderedEdgeLabel");
function Ng(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
p(Ng, "getDefaultExportFromCjs");
var Ut = {}, ds = {}, Xe = {}, Ec;
function Qr() {
  if (Ec) return Xe;
  Ec = 1;
  function e(a) {
    return typeof a > "u" || a === null;
  }
  p(e, "isNothing");
  function t(a) {
    return typeof a == "object" && a !== null;
  }
  p(t, "isObject");
  function r(a) {
    return Array.isArray(a) ? a : e(a) ? [] : [a];
  }
  p(r, "toArray");
  function i(a, n) {
    if (n) {
      const l = Object.keys(n);
      for (let c = 0, h = l.length; c < h; c += 1) {
        const u = l[c];
        a[u] = n[u];
      }
    }
    return a;
  }
  p(i, "extend");
  function s(a, n) {
    let l = "";
    for (let c = 0; c < n; c += 1)
      l += a;
    return l;
  }
  p(s, "repeat");
  function o(a) {
    return a === 0 && Number.NEGATIVE_INFINITY === 1 / a;
  }
  return p(o, "isNegativeZero"), Xe.isNothing = e, Xe.isObject = t, Xe.toArray = r, Xe.repeat = s, Xe.isNegativeZero = o, Xe.extend = i, Xe;
}
p(Qr, "requireCommon");
var Uo, $c;
function Jr() {
  if ($c) return Uo;
  $c = 1;
  function e(r, i) {
    let s = "";
    const o = r.reason || "(unknown reason)";
    return r.mark ? (r.mark.name && (s += 'in "' + r.mark.name + '" '), s += "(" + (r.mark.line + 1) + ":" + (r.mark.column + 1) + ")", !i && r.mark.snippet && (s += `

` + r.mark.snippet), o + " " + s) : o;
  }
  p(e, "formatError");
  function t(r, i) {
    Error.call(this), this.name = "YAMLException", this.reason = r, this.mark = i, this.message = e(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
  }
  return p(t, "YAMLException2"), t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.toString = /* @__PURE__ */ p(function(i) {
    return this.name + ": " + e(this, i);
  }, "toString"), Uo = t, Uo;
}
p(Jr, "requireException");
var Go, Oc;
function Wg() {
  if (Oc) return Go;
  Oc = 1;
  const e = Qr();
  function t(s, o, a, n, l) {
    let c = "", h = "";
    const u = Math.floor(l / 2) - 1;
    return n - o > u && (c = " ... ", o = n - u + c.length), a - n > u && (h = " ...", a = n + u - h.length), {
      str: c + s.slice(o, a).replace(/\t/g, "→") + h,
      pos: n - o + c.length
      // relative position
    };
  }
  p(t, "getLine");
  function r(s, o) {
    return e.repeat(" ", o - s.length) + s;
  }
  p(r, "padStart");
  function i(s, o) {
    if (o = Object.create(o || null), !s.buffer) return null;
    o.maxLength || (o.maxLength = 79), typeof o.indent != "number" && (o.indent = 1), typeof o.linesBefore != "number" && (o.linesBefore = 3), typeof o.linesAfter != "number" && (o.linesAfter = 2);
    const a = /\r?\n|\r|\0/g, n = [0], l = [];
    let c, h = -1;
    for (; c = a.exec(s.buffer); )
      l.push(c.index), n.push(c.index + c[0].length), s.position <= c.index && h < 0 && (h = n.length - 2);
    h < 0 && (h = n.length - 1);
    let u = "";
    const d = Math.min(s.line + o.linesAfter, l.length).toString().length, f = o.maxLength - (o.indent + d + 3);
    for (let m = 1; m <= o.linesBefore && !(h - m < 0); m++) {
      const x = t(
        s.buffer,
        n[h - m],
        l[h - m],
        s.position - (n[h] - n[h - m]),
        f
      );
      u = e.repeat(" ", o.indent) + r((s.line - m + 1).toString(), d) + " | " + x.str + `
` + u;
    }
    const y = t(s.buffer, n[h], l[h], s.position, f);
    u += e.repeat(" ", o.indent) + r((s.line + 1).toString(), d) + " | " + y.str + `
`, u += e.repeat("-", o.indent + d + 3 + y.pos) + `^
`;
    for (let m = 1; m <= o.linesAfter && !(h + m >= l.length); m++) {
      const x = t(
        s.buffer,
        n[h + m],
        l[h + m],
        s.position - (n[h] - n[h + m]),
        f
      );
      u += e.repeat(" ", o.indent) + r((s.line + m + 1).toString(), d) + " | " + x.str + `
`;
    }
    return u.replace(/\n$/, "");
  }
  return p(i, "makeSnippet"), Go = i, Go;
}
p(Wg, "requireSnippet");
var Xo, Dc;
function Kt() {
  if (Dc) return Xo;
  Dc = 1;
  const e = Jr(), t = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases"
  ], r = [
    "scalar",
    "sequence",
    "mapping"
  ];
  function i(o) {
    const a = {};
    return o !== null && Object.keys(o).forEach(function(n) {
      o[n].forEach(function(l) {
        a[String(l)] = n;
      });
    }), a;
  }
  p(i, "compileStyleAliases");
  function s(o, a) {
    if (a = a || {}, Object.keys(a).forEach(function(n) {
      if (t.indexOf(n) === -1)
        throw new e('Unknown option "' + n + '" is met in definition of "' + o + '" YAML type.');
    }), this.options = a, this.tag = o, this.kind = a.kind || null, this.resolve = a.resolve || function() {
      return !0;
    }, this.construct = a.construct || function(n) {
      return n;
    }, this.instanceOf = a.instanceOf || null, this.predicate = a.predicate || null, this.represent = a.represent || null, this.representName = a.representName || null, this.defaultStyle = a.defaultStyle || null, this.multi = a.multi || !1, this.styleAliases = i(a.styleAliases || null), r.indexOf(this.kind) === -1)
      throw new e('Unknown kind "' + this.kind + '" is specified for "' + o + '" YAML type.');
  }
  return p(s, "Type2"), Xo = s, Xo;
}
p(Kt, "requireType");
var Vo, Pc;
function dl() {
  if (Pc) return Vo;
  Pc = 1;
  const e = Jr(), t = Kt();
  function r(o, a) {
    const n = [];
    return o[a].forEach(function(l) {
      let c = n.length;
      n.forEach(function(h, u) {
        h.tag === l.tag && h.kind === l.kind && h.multi === l.multi && (c = u);
      }), n[c] = l;
    }), n;
  }
  p(r, "compileList");
  function i() {
    const o = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: {
        scalar: [],
        sequence: [],
        mapping: [],
        fallback: []
      }
    };
    function a(n) {
      n.multi ? (o.multi[n.kind].push(n), o.multi.fallback.push(n)) : o[n.kind][n.tag] = o.fallback[n.tag] = n;
    }
    p(a, "collectType");
    for (let n = 0, l = arguments.length; n < l; n += 1)
      arguments[n].forEach(a);
    return o;
  }
  p(i, "compileMap");
  function s(o) {
    return this.extend(o);
  }
  return p(s, "Schema2"), s.prototype.extend = /* @__PURE__ */ p(function(a) {
    let n = [], l = [];
    if (a instanceof t)
      l.push(a);
    else if (Array.isArray(a))
      l = l.concat(a);
    else if (a && (Array.isArray(a.implicit) || Array.isArray(a.explicit)))
      a.implicit && (n = n.concat(a.implicit)), a.explicit && (l = l.concat(a.explicit));
    else
      throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    n.forEach(function(h) {
      if (!(h instanceof t))
        throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      if (h.loadKind && h.loadKind !== "scalar")
        throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      if (h.multi)
        throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }), l.forEach(function(h) {
      if (!(h instanceof t))
        throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    const c = Object.create(s.prototype);
    return c.implicit = (this.implicit || []).concat(n), c.explicit = (this.explicit || []).concat(l), c.compiledImplicit = r(c, "implicit"), c.compiledExplicit = r(c, "explicit"), c.compiledTypeMap = i(c.compiledImplicit, c.compiledExplicit), c;
  }, "extend"), Vo = s, Vo;
}
p(dl, "requireSchema");
var Zo, Ic;
function fl() {
  if (Ic) return Zo;
  Ic = 1;
  const e = Kt();
  return Zo = new e("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: /* @__PURE__ */ p(function(t) {
      return t !== null ? t : "";
    }, "construct")
  }), Zo;
}
p(fl, "requireStr");
var Ko, Rc;
function pl() {
  if (Rc) return Ko;
  Rc = 1;
  const e = Kt();
  return Ko = new e("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: /* @__PURE__ */ p(function(t) {
      return t !== null ? t : [];
    }, "construct")
  }), Ko;
}
p(pl, "requireSeq");
var Qo, qc;
function gl() {
  if (qc) return Qo;
  qc = 1;
  const e = Kt();
  return Qo = new e("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: /* @__PURE__ */ p(function(t) {
      return t !== null ? t : {};
    }, "construct")
  }), Qo;
}
p(gl, "requireMap");
var Jo, Nc;
function yl() {
  if (Nc) return Jo;
  Nc = 1;
  const e = dl();
  return Jo = new e({
    explicit: [
      fl(),
      pl(),
      gl()
    ]
  }), Jo;
}
p(yl, "requireFailsafe");
var ta, Wc;
function ml() {
  if (Wc) return ta;
  Wc = 1;
  const e = Kt();
  function t(s) {
    if (s === null) return !0;
    const o = s.length;
    return o === 1 && s === "~" || o === 4 && (s === "null" || s === "Null" || s === "NULL");
  }
  p(t, "resolveYamlNull");
  function r() {
    return null;
  }
  p(r, "constructYamlNull");
  function i(s) {
    return s === null;
  }
  return p(i, "isNull"), ta = new e("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: t,
    construct: r,
    predicate: i,
    represent: {
      canonical: /* @__PURE__ */ p(function() {
        return "~";
      }, "canonical"),
      lowercase: /* @__PURE__ */ p(function() {
        return "null";
      }, "lowercase"),
      uppercase: /* @__PURE__ */ p(function() {
        return "NULL";
      }, "uppercase"),
      camelcase: /* @__PURE__ */ p(function() {
        return "Null";
      }, "camelcase"),
      empty: /* @__PURE__ */ p(function() {
        return "";
      }, "empty")
    },
    defaultStyle: "lowercase"
  }), ta;
}
p(ml, "require_null");
var ea, zc;
function xl() {
  if (zc) return ea;
  zc = 1;
  const e = Kt();
  function t(s) {
    if (s === null) return !1;
    const o = s.length;
    return o === 4 && (s === "true" || s === "True" || s === "TRUE") || o === 5 && (s === "false" || s === "False" || s === "FALSE");
  }
  p(t, "resolveYamlBoolean");
  function r(s) {
    return s === "true" || s === "True" || s === "TRUE";
  }
  p(r, "constructYamlBoolean");
  function i(s) {
    return Object.prototype.toString.call(s) === "[object Boolean]";
  }
  return p(i, "isBoolean"), ea = new e("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: t,
    construct: r,
    predicate: i,
    represent: {
      lowercase: /* @__PURE__ */ p(function(s) {
        return s ? "true" : "false";
      }, "lowercase"),
      uppercase: /* @__PURE__ */ p(function(s) {
        return s ? "TRUE" : "FALSE";
      }, "uppercase"),
      camelcase: /* @__PURE__ */ p(function(s) {
        return s ? "True" : "False";
      }, "camelcase")
    },
    defaultStyle: "lowercase"
  }), ea;
}
p(xl, "requireBool");
var ra, Hc;
function Cl() {
  if (Hc) return ra;
  Hc = 1;
  const e = Qr(), t = Kt();
  function r(c) {
    return c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102;
  }
  p(r, "isHexCode");
  function i(c) {
    return c >= 48 && c <= 55;
  }
  p(i, "isOctCode");
  function s(c) {
    return c >= 48 && c <= 57;
  }
  p(s, "isDecCode");
  function o(c) {
    if (c === null) return !1;
    const h = c.length;
    let u = 0, d = !1;
    if (!h) return !1;
    let f = c[u];
    if ((f === "-" || f === "+") && (f = c[++u]), f === "0") {
      if (u + 1 === h) return !0;
      if (f = c[++u], f === "b") {
        for (u++; u < h; u++) {
          if (f = c[u], f !== "0" && f !== "1") return !1;
          d = !0;
        }
        return d && isFinite(a(c));
      }
      if (f === "x") {
        for (u++; u < h; u++) {
          if (!r(c.charCodeAt(u))) return !1;
          d = !0;
        }
        return d && isFinite(a(c));
      }
      if (f === "o") {
        for (u++; u < h; u++) {
          if (!i(c.charCodeAt(u))) return !1;
          d = !0;
        }
        return d && isFinite(a(c));
      }
    }
    for (; u < h; u++) {
      if (!s(c.charCodeAt(u)))
        return !1;
      d = !0;
    }
    return d ? isFinite(a(c)) : !1;
  }
  p(o, "resolveYamlInteger");
  function a(c) {
    let h = c, u = 1, d = h[0];
    if ((d === "-" || d === "+") && (d === "-" && (u = -1), h = h.slice(1), d = h[0]), h === "0") return 0;
    if (d === "0") {
      if (h[1] === "b") return u * parseInt(h.slice(2), 2);
      if (h[1] === "x") return u * parseInt(h.slice(2), 16);
      if (h[1] === "o") return u * parseInt(h.slice(2), 8);
    }
    return u * parseInt(h, 10);
  }
  p(a, "parseYamlInteger");
  function n(c) {
    return a(c);
  }
  p(n, "constructYamlInteger");
  function l(c) {
    return Object.prototype.toString.call(c) === "[object Number]" && c % 1 === 0 && !e.isNegativeZero(c);
  }
  return p(l, "isInteger"), ra = new t("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: o,
    construct: n,
    predicate: l,
    represent: {
      binary: /* @__PURE__ */ p(function(c) {
        return c >= 0 ? "0b" + c.toString(2) : "-0b" + c.toString(2).slice(1);
      }, "binary"),
      octal: /* @__PURE__ */ p(function(c) {
        return c >= 0 ? "0o" + c.toString(8) : "-0o" + c.toString(8).slice(1);
      }, "octal"),
      decimal: /* @__PURE__ */ p(function(c) {
        return c.toString(10);
      }, "decimal"),
      hexadecimal: /* @__PURE__ */ p(function(c) {
        return c >= 0 ? "0x" + c.toString(16).toUpperCase() : "-0x" + c.toString(16).toUpperCase().slice(1);
      }, "hexadecimal")
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"]
    }
  }), ra;
}
p(Cl, "requireInt");
var ia, Yc;
function bl() {
  if (Yc) return ia;
  Yc = 1;
  const e = Qr(), t = Kt(), r = new RegExp(
    // 2.5e4, 2.5 and integers
    "^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
  ), i = new RegExp(
    "^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
  );
  function s(c) {
    return c === null || !r.test(c) ? !1 : isFinite(parseFloat(c, 10)) ? !0 : i.test(c);
  }
  p(s, "resolveYamlFloat");
  function o(c) {
    let h = c.toLowerCase();
    const u = h[0] === "-" ? -1 : 1;
    return "+-".indexOf(h[0]) >= 0 && (h = h.slice(1)), h === ".inf" ? u === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : h === ".nan" ? NaN : u * parseFloat(h, 10);
  }
  p(o, "constructYamlFloat");
  const a = /^[-+]?[0-9]+e/;
  function n(c, h) {
    if (isNaN(c))
      switch (h) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    else if (Number.POSITIVE_INFINITY === c)
      switch (h) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    else if (Number.NEGATIVE_INFINITY === c)
      switch (h) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    else if (e.isNegativeZero(c))
      return "-0.0";
    const u = c.toString(10);
    return a.test(u) ? u.replace("e", ".e") : u;
  }
  p(n, "representYamlFloat");
  function l(c) {
    return Object.prototype.toString.call(c) === "[object Number]" && (c % 1 !== 0 || e.isNegativeZero(c));
  }
  return p(l, "isFloat"), ia = new t("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: s,
    construct: o,
    predicate: l,
    represent: n,
    defaultStyle: "lowercase"
  }), ia;
}
p(bl, "requireFloat");
var sa, jc;
function kl() {
  return jc || (jc = 1, sa = yl().extend({
    implicit: [
      ml(),
      xl(),
      Cl(),
      bl()
    ]
  })), sa;
}
p(kl, "requireJson");
var oa, Uc;
function wl() {
  return Uc || (Uc = 1, oa = kl()), oa;
}
p(wl, "requireCore");
var aa, Gc;
function Sl() {
  if (Gc) return aa;
  Gc = 1;
  const e = Kt(), t = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
  ), r = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
  );
  function i(a) {
    return a === null ? !1 : t.exec(a) !== null || r.exec(a) !== null;
  }
  p(i, "resolveYamlTimestamp");
  function s(a) {
    let n = 0, l = null, c = t.exec(a);
    if (c === null && (c = r.exec(a)), c === null) throw new Error("Date resolve error");
    const h = +c[1], u = +c[2] - 1, d = +c[3];
    if (!c[4])
      return new Date(Date.UTC(h, u, d));
    const f = +c[4], y = +c[5], m = +c[6];
    if (c[7]) {
      for (n = c[7].slice(0, 3); n.length < 3; )
        n += "0";
      n = +n;
    }
    if (c[9]) {
      const C = +c[10], k = +(c[11] || 0);
      l = (C * 60 + k) * 6e4, c[9] === "-" && (l = -l);
    }
    const x = new Date(Date.UTC(h, u, d, f, y, m, n));
    return l && x.setTime(x.getTime() - l), x;
  }
  p(s, "constructYamlTimestamp");
  function o(a) {
    return a.toISOString();
  }
  return p(o, "representYamlTimestamp"), aa = new e("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: i,
    construct: s,
    instanceOf: Date,
    represent: o
  }), aa;
}
p(Sl, "requireTimestamp");
var na, Xc;
function Tl() {
  if (Xc) return na;
  Xc = 1;
  const e = Kt();
  function t(r) {
    return r === "<<" || r === null;
  }
  return p(t, "resolveYamlMerge"), na = new e("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: t
  }), na;
}
p(Tl, "requireMerge");
var la, Vc;
function _l() {
  if (Vc) return la;
  Vc = 1;
  const e = Kt(), t = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
  function r(a) {
    if (a === null) return !1;
    let n = 0;
    const l = a.length, c = t;
    for (let h = 0; h < l; h++) {
      const u = c.indexOf(a.charAt(h));
      if (!(u > 64)) {
        if (u < 0) return !1;
        n += 6;
      }
    }
    return n % 8 === 0;
  }
  p(r, "resolveYamlBinary");
  function i(a) {
    const n = a.replace(/[\r\n=]/g, ""), l = n.length, c = t;
    let h = 0;
    const u = [];
    for (let f = 0; f < l; f++)
      f % 4 === 0 && f && (u.push(h >> 16 & 255), u.push(h >> 8 & 255), u.push(h & 255)), h = h << 6 | c.indexOf(n.charAt(f));
    const d = l % 4 * 6;
    return d === 0 ? (u.push(h >> 16 & 255), u.push(h >> 8 & 255), u.push(h & 255)) : d === 18 ? (u.push(h >> 10 & 255), u.push(h >> 2 & 255)) : d === 12 && u.push(h >> 4 & 255), new Uint8Array(u);
  }
  p(i, "constructYamlBinary");
  function s(a) {
    let n = "", l = 0;
    const c = a.length, h = t;
    for (let d = 0; d < c; d++)
      d % 3 === 0 && d && (n += h[l >> 18 & 63], n += h[l >> 12 & 63], n += h[l >> 6 & 63], n += h[l & 63]), l = (l << 8) + a[d];
    const u = c % 3;
    return u === 0 ? (n += h[l >> 18 & 63], n += h[l >> 12 & 63], n += h[l >> 6 & 63], n += h[l & 63]) : u === 2 ? (n += h[l >> 10 & 63], n += h[l >> 4 & 63], n += h[l << 2 & 63], n += h[64]) : u === 1 && (n += h[l >> 2 & 63], n += h[l << 4 & 63], n += h[64], n += h[64]), n;
  }
  p(s, "representYamlBinary");
  function o(a) {
    return Object.prototype.toString.call(a) === "[object Uint8Array]";
  }
  return p(o, "isBinary"), la = new e("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: r,
    construct: i,
    predicate: o,
    represent: s
  }), la;
}
p(_l, "requireBinary");
var ha, Zc;
function Bl() {
  if (Zc) return ha;
  Zc = 1;
  const e = Kt(), t = Object.prototype.hasOwnProperty, r = Object.prototype.toString;
  function i(o) {
    if (o === null) return !0;
    const a = [], n = o;
    for (let l = 0, c = n.length; l < c; l += 1) {
      const h = n[l];
      let u = !1;
      if (r.call(h) !== "[object Object]") return !1;
      let d;
      for (d in h)
        if (t.call(h, d))
          if (!u) u = !0;
          else return !1;
      if (!u) return !1;
      if (a.indexOf(d) === -1) a.push(d);
      else return !1;
    }
    return !0;
  }
  p(i, "resolveYamlOmap");
  function s(o) {
    return o !== null ? o : [];
  }
  return p(s, "constructYamlOmap"), ha = new e("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: i,
    construct: s
  }), ha;
}
p(Bl, "requireOmap");
var ca, Kc;
function vl() {
  if (Kc) return ca;
  Kc = 1;
  const e = Kt(), t = Object.prototype.toString;
  function r(s) {
    if (s === null) return !0;
    const o = s, a = new Array(o.length);
    for (let n = 0, l = o.length; n < l; n += 1) {
      const c = o[n];
      if (t.call(c) !== "[object Object]") return !1;
      const h = Object.keys(c);
      if (h.length !== 1) return !1;
      a[n] = [h[0], c[h[0]]];
    }
    return !0;
  }
  p(r, "resolveYamlPairs");
  function i(s) {
    if (s === null) return [];
    const o = s, a = new Array(o.length);
    for (let n = 0, l = o.length; n < l; n += 1) {
      const c = o[n], h = Object.keys(c);
      a[n] = [h[0], c[h[0]]];
    }
    return a;
  }
  return p(i, "constructYamlPairs"), ca = new e("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: r,
    construct: i
  }), ca;
}
p(vl, "requirePairs");
var ua, Qc;
function Ll() {
  if (Qc) return ua;
  Qc = 1;
  const e = Kt(), t = Object.prototype.hasOwnProperty;
  function r(s) {
    if (s === null) return !0;
    const o = s;
    for (const a in o)
      if (t.call(o, a) && o[a] !== null)
        return !1;
    return !0;
  }
  p(r, "resolveYamlSet");
  function i(s) {
    return s !== null ? s : {};
  }
  return p(i, "constructYamlSet"), ua = new e("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: r,
    construct: i
  }), ua;
}
p(Ll, "requireSet");
var da, Jc;
function wo() {
  return Jc || (Jc = 1, da = wl().extend({
    implicit: [
      Sl(),
      Tl()
    ],
    explicit: [
      _l(),
      Bl(),
      vl(),
      Ll()
    ]
  })), da;
}
p(wo, "require_default");
var tu;
function zg() {
  if (tu) return ds;
  tu = 1;
  const e = Qr(), t = Jr(), r = Wg(), i = wo(), s = Object.prototype.hasOwnProperty, o = 1, a = 2, n = 3, l = 4, c = 1, h = 2, u = 3, d = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, f = /[\x85\u2028\u2029]/, y = /[,\[\]{}]/, m = /^(?:!|!!|![0-9A-Za-z-]+!)$/, x = /^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;
  function C(g) {
    return Object.prototype.toString.call(g);
  }
  p(C, "_class");
  function k(g) {
    return g === 10 || g === 13;
  }
  p(k, "isEol");
  function S(g) {
    return g === 9 || g === 32;
  }
  p(S, "isWhiteSpace");
  function T(g) {
    return g === 9 || g === 32 || g === 10 || g === 13;
  }
  p(T, "isWsOrEol");
  function _(g) {
    return g === 44 || g === 91 || g === 93 || g === 123 || g === 125;
  }
  p(_, "isFlowIndicator");
  function L(g) {
    if (g >= 48 && g <= 57)
      return g - 48;
    const A = g | 32;
    return A >= 97 && A <= 102 ? A - 97 + 10 : -1;
  }
  p(L, "fromHexCode");
  function M(g) {
    return g === 120 ? 2 : g === 117 ? 4 : g === 85 ? 8 : 0;
  }
  p(M, "escapedHexLen");
  function v(g) {
    return g >= 48 && g <= 57 ? g - 48 : -1;
  }
  p(v, "fromDecimalCode");
  function X(g) {
    switch (g) {
      case 48:
        return "\0";
      case 97:
        return "\x07";
      case 98:
        return "\b";
      case 116:
        return "	";
      case 9:
        return "	";
      case 110:
        return `
`;
      case 118:
        return "\v";
      case 102:
        return "\f";
      case 114:
        return "\r";
      case 101:
        return "\x1B";
      case 32:
        return " ";
      case 34:
        return '"';
      case 47:
        return "/";
      case 92:
        return "\\";
      case 78:
        return "";
      case 95:
        return " ";
      case 76:
        return "\u2028";
      case 80:
        return "\u2029";
      default:
        return "";
    }
  }
  p(X, "simpleEscapeSequence");
  function z(g) {
    return g <= 65535 ? String.fromCharCode(g) : String.fromCharCode(
      (g - 65536 >> 10) + 55296,
      (g - 65536 & 1023) + 56320
    );
  }
  p(z, "charFromCodepoint");
  function I(g, A, Y) {
    A === "__proto__" ? Object.defineProperty(g, A, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: Y
    }) : g[A] = Y;
  }
  p(I, "setProperty");
  const et = new Array(256), H = new Array(256);
  for (let g = 0; g < 256; g++)
    et[g] = X(g) ? 1 : 0, H[g] = X(g);
  function E(g, A) {
    this.input = g, this.filename = A.filename || null, this.schema = A.schema || i, this.onWarning = A.onWarning || null, this.legacy = A.legacy || !1, this.json = A.json || !1, this.listener = A.listener || null, this.maxDepth = typeof A.maxDepth == "number" ? A.maxDepth : 100, this.maxTotalMergeKeys = typeof A.maxTotalMergeKeys == "number" ? A.maxTotalMergeKeys : 1e4, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = g.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.depth = 0, this.totalMergeKeys = 0, this.firstTabInLine = -1, this.documents = [], this.anchorMapTransactions = [];
  }
  p(E, "State");
  function O(g, A) {
    const Y = {
      name: g.filename,
      buffer: g.input.slice(0, -1),
      // omit trailing \0
      position: g.position,
      line: g.line,
      column: g.position - g.lineStart
    };
    return Y.snippet = r(Y), new t(A, Y);
  }
  p(O, "generateError");
  function B(g, A) {
    throw O(g, A);
  }
  p(B, "throwError");
  function R(g, A) {
    g.onWarning && g.onWarning.call(null, O(g, A));
  }
  p(R, "throwWarning");
  function $(g, A, Y) {
    const G = g.anchorMapTransactions;
    if (G.length !== 0) {
      const W = G[G.length - 1];
      s.call(W, A) || (W[A] = {
        existed: s.call(g.anchorMap, A),
        value: g.anchorMap[A]
      });
    }
    g.anchorMap[A] = Y;
  }
  p($, "storeAnchor");
  function J(g) {
    g.anchorMapTransactions.push(/* @__PURE__ */ Object.create(null));
  }
  p(J, "beginAnchorTransaction");
  function Z(g) {
    const A = g.anchorMapTransactions.pop(), Y = g.anchorMapTransactions;
    if (Y.length === 0) return;
    const G = Y[Y.length - 1], W = Object.keys(A);
    for (let tt = 0, w = W.length; tt < w; tt += 1) {
      const D = W[tt];
      s.call(G, D) || (G[D] = A[D]);
    }
  }
  p(Z, "commitAnchorTransaction");
  function dt(g) {
    const A = g.anchorMapTransactions.pop(), Y = Object.keys(A);
    for (let G = Y.length - 1; G >= 0; G -= 1) {
      const W = A[Y[G]];
      W.existed ? g.anchorMap[Y[G]] = W.value : delete g.anchorMap[Y[G]];
    }
  }
  p(dt, "rollbackAnchorTransaction");
  function Ct(g) {
    return {
      position: g.position,
      line: g.line,
      lineStart: g.lineStart,
      lineIndent: g.lineIndent,
      firstTabInLine: g.firstTabInLine,
      tag: g.tag,
      anchor: g.anchor,
      kind: g.kind,
      result: g.result
    };
  }
  p(Ct, "snapshotState");
  function xt(g, A) {
    g.position = A.position, g.line = A.line, g.lineStart = A.lineStart, g.lineIndent = A.lineIndent, g.firstTabInLine = A.firstTabInLine, g.tag = A.tag, g.anchor = A.anchor, g.kind = A.kind, g.result = A.result;
  }
  p(xt, "restoreState");
  const St = {
    YAML: /* @__PURE__ */ p(function(A, Y, G) {
      A.version !== null && B(A, "duplication of %YAML directive"), G.length !== 1 && B(A, "YAML directive accepts exactly one argument");
      const W = /^([0-9]+)\.([0-9]+)$/.exec(G[0]);
      W === null && B(A, "ill-formed argument of the YAML directive");
      const tt = parseInt(W[1], 10), w = parseInt(W[2], 10);
      tt !== 1 && B(A, "unacceptable YAML version of the document"), A.version = G[0], A.checkLineBreaks = w < 2, w !== 1 && w !== 2 && R(A, "unsupported YAML version of the document");
    }, "handleYamlDirective"),
    TAG: /* @__PURE__ */ p(function(A, Y, G) {
      let W;
      G.length !== 2 && B(A, "TAG directive accepts exactly two arguments");
      const tt = G[0];
      W = G[1], m.test(tt) || B(A, "ill-formed tag handle (first argument) of the TAG directive"), s.call(A.tagMap, tt) && B(A, 'there is a previously declared suffix for "' + tt + '" tag handle'), x.test(W) || B(A, "ill-formed tag prefix (second argument) of the TAG directive");
      try {
        W = decodeURIComponent(W);
      } catch {
        B(A, "tag prefix is malformed: " + W);
      }
      A.tagMap[tt] = W;
    }, "handleTagDirective")
  };
  function wt(g, A, Y, G) {
    if (A < Y) {
      const W = g.input.slice(A, Y);
      if (G)
        for (let tt = 0, w = W.length; tt < w; tt += 1) {
          const D = W.charCodeAt(tt);
          D === 9 || D >= 32 && D <= 1114111 || B(g, "expected valid JSON character");
        }
      else d.test(W) && B(g, "the stream contains non-printable characters");
      g.result += W;
    }
  }
  p(wt, "captureSegment");
  function ht(g, A, Y, G) {
    e.isObject(Y) || B(g, "cannot merge mappings; the provided source object is unacceptable");
    const W = Object.keys(Y);
    for (let tt = 0, w = W.length; tt < w; tt += 1) {
      const D = W[tt];
      g.maxTotalMergeKeys !== -1 && ++g.totalMergeKeys > g.maxTotalMergeKeys && B(g, "merge keys exceeded maxTotalMergeKeys (" + g.maxTotalMergeKeys + ")"), s.call(A, D) || (I(A, D, Y[D]), G[D] = !0);
    }
  }
  p(ht, "mergeMappings");
  function gt(g, A, Y, G, W, tt, w, D, K) {
    if (Array.isArray(W)) {
      W = Array.prototype.slice.call(W);
      for (let j = 0, U = W.length; j < U; j += 1)
        Array.isArray(W[j]) && B(g, "nested arrays are not supported inside keys"), typeof W == "object" && C(W[j]) === "[object Object]" && (W[j] = "[object Object]");
    }
    if (typeof W == "object" && C(W) === "[object Object]" && (W = "[object Object]"), W = String(W), A === null && (A = {}), G === "tag:yaml.org,2002:merge")
      if (Array.isArray(tt))
        for (let j = 0, U = tt.length; j < U; j += 1)
          ht(g, A, tt[j], Y);
      else
        ht(g, A, tt, Y);
    else
      !g.json && !s.call(Y, W) && s.call(A, W) && (g.line = w || g.line, g.lineStart = D || g.lineStart, g.position = K || g.position, B(g, "duplicated mapping key")), I(A, W, tt), delete Y[W];
    return A;
  }
  p(gt, "storeMappingPair");
  function Bt(g) {
    const A = g.input.charCodeAt(g.position);
    A === 10 ? g.position++ : A === 13 ? (g.position++, g.input.charCodeAt(g.position) === 10 && g.position++) : B(g, "a line break is expected"), g.line += 1, g.lineStart = g.position, g.firstTabInLine = -1;
  }
  p(Bt, "readLineBreak");
  function kt(g, A, Y) {
    let G = 0, W = g.input.charCodeAt(g.position);
    for (; W !== 0; ) {
      for (; S(W); )
        W === 9 && g.firstTabInLine === -1 && (g.firstTabInLine = g.position), W = g.input.charCodeAt(++g.position);
      if (A && W === 35)
        do
          W = g.input.charCodeAt(++g.position);
        while (W !== 10 && W !== 13 && W !== 0);
      if (k(W))
        for (Bt(g), W = g.input.charCodeAt(g.position), G++, g.lineIndent = 0; W === 32; )
          g.lineIndent++, W = g.input.charCodeAt(++g.position);
      else
        break;
    }
    return Y !== -1 && G !== 0 && g.lineIndent < Y && R(g, "deficient indentation"), G;
  }
  p(kt, "skipSeparationSpace");
  function At(g) {
    let A = g.position, Y = g.input.charCodeAt(A);
    return !!((Y === 45 || Y === 46) && Y === g.input.charCodeAt(A + 1) && Y === g.input.charCodeAt(A + 2) && (A += 3, Y = g.input.charCodeAt(A), Y === 0 || T(Y)));
  }
  p(At, "testDocumentSeparator");
  function $t(g, A) {
    A === 1 ? g.result += " " : A > 1 && (g.result += e.repeat(`
`, A - 1));
  }
  p($t, "writeFoldedLines");
  function Qt(g, A, Y) {
    let G, W, tt, w, D, K;
    const j = g.kind, U = g.result;
    let Q = g.input.charCodeAt(g.position);
    if (T(Q) || _(Q) || Q === 35 || Q === 38 || Q === 42 || Q === 33 || Q === 124 || Q === 62 || Q === 39 || Q === 34 || Q === 37 || Q === 64 || Q === 96)
      return !1;
    if (Q === 63 || Q === 45) {
      const V = g.input.charCodeAt(g.position + 1);
      if (T(V) || Y && _(V))
        return !1;
    }
    for (g.kind = "scalar", g.result = "", G = W = g.position, tt = !1; Q !== 0; ) {
      if (Q === 58) {
        const V = g.input.charCodeAt(g.position + 1);
        if (T(V) || Y && _(V))
          break;
      } else if (Q === 35) {
        const V = g.input.charCodeAt(g.position - 1);
        if (T(V))
          break;
      } else {
        if (g.position === g.lineStart && At(g) || Y && _(Q))
          break;
        if (k(Q))
          if (w = g.line, D = g.lineStart, K = g.lineIndent, kt(g, !1, -1), g.lineIndent >= A) {
            tt = !0, Q = g.input.charCodeAt(g.position);
            continue;
          } else {
            g.position = W, g.line = w, g.lineStart = D, g.lineIndent = K;
            break;
          }
      }
      tt && (wt(g, G, W, !1), $t(g, g.line - w), G = W = g.position, tt = !1), S(Q) || (W = g.position + 1), Q = g.input.charCodeAt(++g.position);
    }
    return wt(g, G, W, !1), g.result ? !0 : (g.kind = j, g.result = U, !1);
  }
  p(Qt, "readPlainScalar");
  function ce(g, A) {
    let Y, G, W = g.input.charCodeAt(g.position);
    if (W !== 39)
      return !1;
    for (g.kind = "scalar", g.result = "", g.position++, Y = G = g.position; (W = g.input.charCodeAt(g.position)) !== 0; )
      if (W === 39)
        if (wt(g, Y, g.position, !0), W = g.input.charCodeAt(++g.position), W === 39)
          Y = g.position, g.position++, G = g.position;
        else
          return !0;
      else k(W) ? (wt(g, Y, G, !0), $t(g, kt(g, !1, A)), Y = G = g.position) : g.position === g.lineStart && At(g) ? B(g, "unexpected end of the document within a single quoted scalar") : (g.position++, S(W) || (G = g.position));
    B(g, "unexpected end of the stream within a single quoted scalar");
  }
  p(ce, "readSingleQuotedScalar");
  function be(g, A) {
    let Y, G, W, tt = g.input.charCodeAt(g.position);
    if (tt !== 34)
      return !1;
    for (g.kind = "scalar", g.result = "", g.position++, Y = G = g.position; (tt = g.input.charCodeAt(g.position)) !== 0; ) {
      if (tt === 34)
        return wt(g, Y, g.position, !0), g.position++, !0;
      if (tt === 92) {
        if (wt(g, Y, g.position, !0), tt = g.input.charCodeAt(++g.position), k(tt))
          kt(g, !1, A);
        else if (tt < 256 && et[tt])
          g.result += H[tt], g.position++;
        else if ((W = M(tt)) > 0) {
          let w = W, D = 0;
          for (; w > 0; w--)
            tt = g.input.charCodeAt(++g.position), (W = L(tt)) >= 0 ? D = (D << 4) + W : B(g, "expected hexadecimal character");
          g.result += z(D), g.position++;
        } else
          B(g, "unknown escape sequence");
        Y = G = g.position;
      } else k(tt) ? (wt(g, Y, G, !0), $t(g, kt(g, !1, A)), Y = G = g.position) : g.position === g.lineStart && At(g) ? B(g, "unexpected end of the document within a double quoted scalar") : (g.position++, S(tt) || (G = g.position));
    }
    B(g, "unexpected end of the stream within a double quoted scalar");
  }
  p(be, "readDoubleQuotedScalar");
  function ei(g, A) {
    let Y = !0, G, W, tt;
    const w = g.tag;
    let D;
    const K = g.anchor;
    let j, U, Q, V;
    const lt = /* @__PURE__ */ Object.create(null);
    let ot, ft, pt, vt = g.input.charCodeAt(g.position);
    if (vt === 91)
      j = 93, V = !1, D = [];
    else if (vt === 123)
      j = 125, V = !0, D = {};
    else
      return !1;
    for (g.anchor !== null && $(g, g.anchor, D), vt = g.input.charCodeAt(++g.position); vt !== 0; ) {
      if (kt(g, !0, A), vt = g.input.charCodeAt(g.position), vt === j)
        return g.position++, g.tag = w, g.anchor = K, g.kind = V ? "mapping" : "sequence", g.result = D, !0;
      if (Y ? vt === 44 && B(g, "expected the node content, but found ','") : B(g, "missed comma between flow collection entries"), ft = ot = pt = null, U = Q = !1, vt === 63) {
        const Ot = g.input.charCodeAt(g.position + 1);
        T(Ot) && (U = Q = !0, g.position++, kt(g, !0, A));
      }
      G = g.line, W = g.lineStart, tt = g.position, ue(g, A, o, !1, !0), ft = g.tag, ot = g.result, kt(g, !0, A), vt = g.input.charCodeAt(g.position), (Q || g.line === G) && vt === 58 && (U = !0, vt = g.input.charCodeAt(++g.position), kt(g, !0, A), ue(g, A, o, !1, !0), pt = g.result), V ? gt(g, D, lt, ft, ot, pt, G, W, tt) : U ? D.push(gt(g, null, lt, ft, ot, pt, G, W, tt)) : D.push(ot), kt(g, !0, A), vt = g.input.charCodeAt(g.position), vt === 44 ? (Y = !0, vt = g.input.charCodeAt(++g.position)) : Y = !1;
    }
    B(g, "unexpected end of the stream within a flow collection");
  }
  p(ei, "readFlowCollection");
  function ri(g, A) {
    let Y, G = c, W = !1, tt = !1, w = A, D = 0, K = !1, j, U = g.input.charCodeAt(g.position);
    if (U === 124)
      Y = !1;
    else if (U === 62)
      Y = !0;
    else
      return !1;
    for (g.kind = "scalar", g.result = ""; U !== 0; )
      if (U = g.input.charCodeAt(++g.position), U === 43 || U === 45)
        c === G ? G = U === 43 ? u : h : B(g, "repeat of a chomping mode identifier");
      else if ((j = v(U)) >= 0)
        j === 0 ? B(g, "bad explicit indentation width of a block scalar; it cannot be less than one") : tt ? B(g, "repeat of an indentation width identifier") : (w = A + j - 1, tt = !0);
      else
        break;
    if (S(U)) {
      do
        U = g.input.charCodeAt(++g.position);
      while (S(U));
      if (U === 35)
        do
          U = g.input.charCodeAt(++g.position);
        while (!k(U) && U !== 0);
    }
    for (; U !== 0; ) {
      for (Bt(g), g.lineIndent = 0, U = g.input.charCodeAt(g.position); (!tt || g.lineIndent < w) && U === 32; )
        g.lineIndent++, U = g.input.charCodeAt(++g.position);
      if (!tt && g.lineIndent > w && (w = g.lineIndent), k(U)) {
        D++;
        continue;
      }
      if (!tt && w === 0 && B(g, "missing indentation for block scalar"), g.lineIndent < w) {
        G === u ? g.result += e.repeat(`
`, W ? 1 + D : D) : G === c && W && (g.result += `
`);
        break;
      }
      Y ? S(U) ? (K = !0, g.result += e.repeat(`
`, W ? 1 + D : D)) : K ? (K = !1, g.result += e.repeat(`
`, D + 1)) : D === 0 ? W && (g.result += " ") : g.result += e.repeat(`
`, D) : g.result += e.repeat(`
`, W ? 1 + D : D), W = !0, tt = !0, D = 0;
      const Q = g.position;
      for (; !k(U) && U !== 0; )
        U = g.input.charCodeAt(++g.position);
      wt(g, Q, g.position, !1);
    }
    return !0;
  }
  p(ri, "readBlockScalar");
  function ke(g, A) {
    const Y = g.tag, G = g.anchor, W = [];
    let tt = !1;
    if (g.firstTabInLine !== -1) return !1;
    g.anchor !== null && $(g, g.anchor, W);
    let w = g.input.charCodeAt(g.position);
    for (; w !== 0 && (g.firstTabInLine !== -1 && (g.position = g.firstTabInLine, B(g, "tab characters must not be used in indentation")), w === 45); ) {
      const D = g.input.charCodeAt(g.position + 1);
      if (!T(D))
        break;
      if (tt = !0, g.position++, kt(g, !0, -1) && g.lineIndent <= A) {
        W.push(null), w = g.input.charCodeAt(g.position);
        continue;
      }
      const K = g.line;
      if (ue(g, A, n, !1, !0), W.push(g.result), kt(g, !0, -1), w = g.input.charCodeAt(g.position), (g.line === K || g.lineIndent > A) && w !== 0)
        B(g, "bad indentation of a sequence entry");
      else if (g.lineIndent < A)
        break;
    }
    return tt ? (g.tag = Y, g.anchor = G, g.kind = "sequence", g.result = W, !0) : !1;
  }
  p(ke, "readBlockSequence");
  function _r(g, A, Y) {
    let G, W, tt, w;
    const D = g.tag, K = g.anchor, j = {}, U = /* @__PURE__ */ Object.create(null);
    let Q = null, V = null, lt = null, ot = !1, ft = !1;
    if (g.firstTabInLine !== -1) return !1;
    g.anchor !== null && $(g, g.anchor, j);
    let pt = g.input.charCodeAt(g.position);
    for (; pt !== 0; ) {
      !ot && g.firstTabInLine !== -1 && (g.position = g.firstTabInLine, B(g, "tab characters must not be used in indentation"));
      const vt = g.input.charCodeAt(g.position + 1), Ot = g.line;
      if ((pt === 63 || pt === 58) && T(vt))
        pt === 63 ? (ot && (gt(g, j, U, Q, V, null, W, tt, w), Q = V = lt = null), ft = !0, ot = !0, G = !0) : ot ? (ot = !1, G = !0) : B(g, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), g.position += 1, pt = vt;
      else {
        if (W = g.line, tt = g.lineStart, w = g.position, !ue(g, Y, a, !1, !0))
          break;
        if (g.line === Ot) {
          for (pt = g.input.charCodeAt(g.position); S(pt); )
            pt = g.input.charCodeAt(++g.position);
          if (pt === 58)
            pt = g.input.charCodeAt(++g.position), T(pt) || B(g, "a whitespace character is expected after the key-value separator within a block mapping"), ot && (gt(g, j, U, Q, V, null, W, tt, w), Q = V = lt = null), ft = !0, ot = !1, G = !1, Q = g.tag, V = g.result;
          else if (ft)
            B(g, "can not read an implicit mapping pair; a colon is missed");
          else
            return g.tag = D, g.anchor = K, !0;
        } else if (ft)
          B(g, "can not read a block mapping entry; a multiline key may not be an implicit key");
        else
          return g.tag = D, g.anchor = K, !0;
      }
      if ((g.line === Ot || g.lineIndent > A) && (ot && (W = g.line, tt = g.lineStart, w = g.position), ue(g, A, l, !0, G) && (ot ? V = g.result : lt = g.result), ot || (gt(g, j, U, Q, V, lt, W, tt, w), Q = V = lt = null), kt(g, !0, -1), pt = g.input.charCodeAt(g.position)), (g.line === Ot || g.lineIndent > A) && pt !== 0)
        B(g, "bad indentation of a mapping entry");
      else if (g.lineIndent < A)
        break;
    }
    return ot && gt(g, j, U, Q, V, null, W, tt, w), ft && (g.tag = D, g.anchor = K, g.kind = "mapping", g.result = j), ft;
  }
  p(_r, "readBlockMapping");
  function ii(g) {
    let A = !1, Y = !1, G, W, tt = g.input.charCodeAt(g.position);
    if (tt !== 33) return !1;
    g.tag !== null && B(g, "duplication of a tag property"), tt = g.input.charCodeAt(++g.position), tt === 60 ? (A = !0, tt = g.input.charCodeAt(++g.position)) : tt === 33 ? (Y = !0, G = "!!", tt = g.input.charCodeAt(++g.position)) : G = "!";
    let w = g.position;
    if (A) {
      do
        tt = g.input.charCodeAt(++g.position);
      while (tt !== 0 && tt !== 62);
      g.position < g.length ? (W = g.input.slice(w, g.position), tt = g.input.charCodeAt(++g.position)) : B(g, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; tt !== 0 && !T(tt); )
        tt === 33 && (Y ? B(g, "tag suffix cannot contain exclamation marks") : (G = g.input.slice(w - 1, g.position + 1), m.test(G) || B(g, "named tag handle cannot contain such characters"), Y = !0, w = g.position + 1)), tt = g.input.charCodeAt(++g.position);
      W = g.input.slice(w, g.position), y.test(W) && B(g, "tag suffix cannot contain flow indicator characters");
    }
    W && !x.test(W) && B(g, "tag name cannot contain such characters: " + W);
    try {
      W = decodeURIComponent(W);
    } catch {
      B(g, "tag name is malformed: " + W);
    }
    return A ? g.tag = W : s.call(g.tagMap, G) ? g.tag = g.tagMap[G] + W : G === "!" ? g.tag = "!" + W : G === "!!" ? g.tag = "tag:yaml.org,2002:" + W : B(g, 'undeclared tag handle "' + G + '"'), !0;
  }
  p(ii, "readTagProperty");
  function Br(g) {
    let A = g.input.charCodeAt(g.position);
    if (A !== 38) return !1;
    g.anchor !== null && B(g, "duplication of an anchor property"), A = g.input.charCodeAt(++g.position);
    const Y = g.position;
    for (; A !== 0 && !T(A) && !_(A); )
      A = g.input.charCodeAt(++g.position);
    return g.position === Y && B(g, "name of an anchor node must contain at least one character"), g.anchor = g.input.slice(Y, g.position), !0;
  }
  p(Br, "readAnchorProperty");
  function vr(g) {
    let A = g.input.charCodeAt(g.position);
    if (A !== 42) return !1;
    A = g.input.charCodeAt(++g.position);
    const Y = g.position;
    for (; A !== 0 && !T(A) && !_(A); )
      A = g.input.charCodeAt(++g.position);
    g.position === Y && B(g, "name of an alias node must contain at least one character");
    const G = g.input.slice(Y, g.position);
    return s.call(g.anchorMap, G) || B(g, 'unidentified alias "' + G + '"'), g.result = g.anchorMap[G], kt(g, !0, -1), !0;
  }
  p(vr, "readAlias");
  function si(g, A, Y, G) {
    const W = Ct(g);
    return J(g), xt(g, A), g.tag = null, g.anchor = null, g.kind = null, g.result = null, _r(g, Y, G) && g.kind === "mapping" ? (Z(g), !0) : (dt(g), xt(g, W), !1);
  }
  p(si, "tryReadBlockMappingFromProperty");
  function ue(g, A, Y, G, W) {
    let tt, w, D = 1, K = !1, j = !1, U = null, Q, V, lt;
    g.depth >= g.maxDepth && B(g, "nesting exceeded maxDepth (" + g.maxDepth + ")"), g.depth += 1, g.listener !== null && g.listener("open", g), g.tag = null, g.anchor = null, g.kind = null, g.result = null;
    const ot = tt = w = l === Y || n === Y;
    if (G && kt(g, !0, -1) && (K = !0, g.lineIndent > A ? D = 1 : g.lineIndent === A ? D = 0 : g.lineIndent < A && (D = -1)), D === 1)
      for (; ; ) {
        const ft = g.input.charCodeAt(g.position), pt = Ct(g);
        if (K && (ft === 33 && g.tag !== null || ft === 38 && g.anchor !== null) || !ii(g) && !Br(g))
          break;
        U === null && (U = pt), kt(g, !0, -1) ? (K = !0, w = ot, g.lineIndent > A ? D = 1 : g.lineIndent === A ? D = 0 : g.lineIndent < A && (D = -1)) : w = !1;
      }
    if (w && (w = K || W), D === 1 || l === Y)
      if (o === Y || a === Y ? V = A : V = A + 1, lt = g.position - g.lineStart, D === 1)
        if (w && (ke(g, lt) || _r(g, lt, V)) || ei(g, V))
          j = !0;
        else {
          const ft = g.input.charCodeAt(g.position);
          U !== null && ot && !w && ft !== 124 && ft !== 62 && si(
            g,
            U,
            U.position - U.lineStart,
            V
          ) || tt && ri(g, V) || ce(g, V) || be(g, V) ? j = !0 : vr(g) ? (j = !0, (g.tag !== null || g.anchor !== null) && B(g, "alias node should not have any properties")) : Qt(g, V, o === Y) && (j = !0, g.tag === null && (g.tag = "?")), g.anchor !== null && $(g, g.anchor, g.result);
        }
      else D === 0 && (j = w && ke(g, lt));
    if (g.tag === null)
      g.anchor !== null && $(g, g.anchor, g.result);
    else if (g.tag === "?") {
      g.result !== null && g.kind !== "scalar" && B(g, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + g.kind + '"');
      for (let ft = 0, pt = g.implicitTypes.length; ft < pt; ft += 1)
        if (Q = g.implicitTypes[ft], Q.resolve(g.result)) {
          g.result = Q.construct(g.result), g.tag = Q.tag, g.anchor !== null && $(g, g.anchor, g.result);
          break;
        }
    } else if (g.tag !== "!") {
      if (s.call(g.typeMap[g.kind || "fallback"], g.tag))
        Q = g.typeMap[g.kind || "fallback"][g.tag];
      else {
        Q = null;
        const ft = g.typeMap.multi[g.kind || "fallback"];
        for (let pt = 0, vt = ft.length; pt < vt; pt += 1)
          if (g.tag.slice(0, ft[pt].tag.length) === ft[pt].tag) {
            Q = ft[pt];
            break;
          }
      }
      Q || B(g, "unknown tag !<" + g.tag + ">"), g.result !== null && Q.kind !== g.kind && B(g, "unacceptable node kind for !<" + g.tag + '> tag; it should be "' + Q.kind + '", not "' + g.kind + '"'), Q.resolve(g.result, g.tag) ? (g.result = Q.construct(g.result, g.tag), g.anchor !== null && $(g, g.anchor, g.result)) : B(g, "cannot resolve a node with !<" + g.tag + "> explicit tag");
    }
    return g.listener !== null && g.listener("close", g), g.depth -= 1, g.tag !== null || g.anchor !== null || j;
  }
  p(ue, "composeNode");
  function oi(g) {
    const A = g.position;
    let Y = !1, G;
    for (g.version = null, g.checkLineBreaks = g.legacy, g.tagMap = /* @__PURE__ */ Object.create(null), g.anchorMap = /* @__PURE__ */ Object.create(null); (G = g.input.charCodeAt(g.position)) !== 0 && (kt(g, !0, -1), G = g.input.charCodeAt(g.position), !(g.lineIndent > 0 || G !== 37)); ) {
      Y = !0, G = g.input.charCodeAt(++g.position);
      let W = g.position;
      for (; G !== 0 && !T(G); )
        G = g.input.charCodeAt(++g.position);
      const tt = g.input.slice(W, g.position), w = [];
      for (tt.length < 1 && B(g, "directive name must not be less than one character in length"); G !== 0; ) {
        for (; S(G); )
          G = g.input.charCodeAt(++g.position);
        if (G === 35) {
          do
            G = g.input.charCodeAt(++g.position);
          while (G !== 0 && !k(G));
          break;
        }
        if (k(G)) break;
        for (W = g.position; G !== 0 && !T(G); )
          G = g.input.charCodeAt(++g.position);
        w.push(g.input.slice(W, g.position));
      }
      G !== 0 && Bt(g), s.call(St, tt) ? St[tt](g, tt, w) : R(g, 'unknown document directive "' + tt + '"');
    }
    if (kt(g, !0, -1), g.lineIndent === 0 && g.input.charCodeAt(g.position) === 45 && g.input.charCodeAt(g.position + 1) === 45 && g.input.charCodeAt(g.position + 2) === 45 ? (g.position += 3, kt(g, !0, -1)) : Y && B(g, "directives end mark is expected"), ue(g, g.lineIndent - 1, l, !1, !0), kt(g, !0, -1), g.checkLineBreaks && f.test(g.input.slice(A, g.position)) && R(g, "non-ASCII line breaks are interpreted as content"), g.documents.push(g.result), g.position === g.lineStart && At(g)) {
      g.input.charCodeAt(g.position) === 46 && (g.position += 3, kt(g, !0, -1));
      return;
    }
    g.position < g.length - 1 && B(g, "end of the stream or a document separator is expected");
  }
  p(oi, "readDocument");
  function Lr(g, A) {
    g = String(g), A = A || {}, g.length !== 0 && (g.charCodeAt(g.length - 1) !== 10 && g.charCodeAt(g.length - 1) !== 13 && (g += `
`), g.charCodeAt(0) === 65279 && (g = g.slice(1)));
    const Y = new E(g, A), G = g.indexOf("\0");
    for (G !== -1 && (Y.position = G, B(Y, "null byte is not allowed in input")), Y.input += "\0"; Y.input.charCodeAt(Y.position) === 32; )
      Y.lineIndent += 1, Y.position += 1;
    for (; Y.position < Y.length - 1; )
      oi(Y);
    return Y.documents;
  }
  p(Lr, "loadDocuments");
  function Fr(g, A, Y) {
    A !== null && typeof A == "object" && typeof Y > "u" && (Y = A, A = null);
    const G = Lr(g, Y);
    if (typeof A != "function")
      return G;
    for (let W = 0, tt = G.length; W < tt; W += 1)
      A(G[W]);
  }
  p(Fr, "loadAll2");
  function ai(g, A) {
    const Y = Lr(g, A);
    if (Y.length !== 0) {
      if (Y.length === 1)
        return Y[0];
      throw new t("expected a single document in the stream, but found more");
    }
  }
  return p(ai, "load2"), ds.loadAll = Fr, ds.load = ai, ds;
}
p(zg, "requireLoader");
var fa = {}, eu;
function Hg() {
  if (eu) return fa;
  eu = 1;
  const e = Qr(), t = Jr(), r = wo(), i = Object.prototype.toString, s = Object.prototype.hasOwnProperty, o = 65279, a = 9, n = 10, l = 13, c = 32, h = 33, u = 34, d = 35, f = 37, y = 38, m = 39, x = 42, C = 44, k = 45, S = 58, T = 61, _ = 62, L = 63, M = 64, v = 91, X = 93, z = 96, I = 123, et = 124, H = 125, E = {};
  E[0] = "\\0", E[7] = "\\a", E[8] = "\\b", E[9] = "\\t", E[10] = "\\n", E[11] = "\\v", E[12] = "\\f", E[13] = "\\r", E[27] = "\\e", E[34] = '\\"', E[92] = "\\\\", E[133] = "\\N", E[160] = "\\_", E[8232] = "\\L", E[8233] = "\\P";
  const O = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF"
  ], B = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function R(w, D) {
    if (D === null) return {};
    const K = {}, j = Object.keys(D);
    for (let U = 0, Q = j.length; U < Q; U += 1) {
      let V = j[U], lt = String(D[V]);
      V.slice(0, 2) === "!!" && (V = "tag:yaml.org,2002:" + V.slice(2));
      const ot = w.compiledTypeMap.fallback[V];
      ot && s.call(ot.styleAliases, lt) && (lt = ot.styleAliases[lt]), K[V] = lt;
    }
    return K;
  }
  p(R, "compileStyleMap");
  function $(w) {
    let D, K;
    const j = w.toString(16).toUpperCase();
    if (w <= 255)
      D = "x", K = 2;
    else if (w <= 65535)
      D = "u", K = 4;
    else if (w <= 4294967295)
      D = "U", K = 8;
    else
      throw new t("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + D + e.repeat("0", K - j.length) + j;
  }
  p($, "encodeHex");
  const J = 1, Z = 2;
  function dt(w) {
    this.schema = w.schema || r, this.indent = Math.max(1, w.indent || 2), this.noArrayIndent = w.noArrayIndent || !1, this.skipInvalid = w.skipInvalid || !1, this.flowLevel = e.isNothing(w.flowLevel) ? -1 : w.flowLevel, this.styleMap = R(this.schema, w.styles || null), this.sortKeys = w.sortKeys || !1, this.lineWidth = w.lineWidth || 80, this.noRefs = w.noRefs || !1, this.noCompatMode = w.noCompatMode || !1, this.condenseFlow = w.condenseFlow || !1, this.quotingType = w.quotingType === '"' ? Z : J, this.forceQuotes = w.forceQuotes || !1, this.replacer = typeof w.replacer == "function" ? w.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
  }
  p(dt, "State");
  function Ct(w, D) {
    const K = e.repeat(" ", D);
    let j = 0, U = "";
    const Q = w.length;
    for (; j < Q; ) {
      let V;
      const lt = w.indexOf(`
`, j);
      lt === -1 ? (V = w.slice(j), j = Q) : (V = w.slice(j, lt + 1), j = lt + 1), V.length && V !== `
` && (U += K), U += V;
    }
    return U;
  }
  p(Ct, "indentString");
  function xt(w, D) {
    return `
` + e.repeat(" ", w.indent * D);
  }
  p(xt, "generateNextLine");
  function St(w, D) {
    for (let K = 0, j = w.implicitTypes.length; K < j; K += 1)
      if (w.implicitTypes[K].resolve(D))
        return !0;
    return !1;
  }
  p(St, "testImplicitResolving");
  function wt(w) {
    return w === c || w === a;
  }
  p(wt, "isWhitespace");
  function ht(w) {
    return w >= 32 && w <= 126 || w >= 161 && w <= 55295 && w !== 8232 && w !== 8233 || w >= 57344 && w <= 65533 && w !== o || w >= 65536 && w <= 1114111;
  }
  p(ht, "isPrintable");
  function gt(w) {
    return ht(w) && w !== o && // - b-char
    w !== l && w !== n;
  }
  p(gt, "isNsCharOrWhitespace");
  function Bt(w, D, K) {
    const j = gt(w), U = j && !wt(w);
    return (
      // ns-plain-safe
      (K ? j : j && // - c-flow-indicator
      w !== C && w !== v && w !== X && w !== I && w !== H) && // ns-plain-char
      w !== d && // false on '#'
      !(D === S && !U) || // false on ': '
      gt(D) && !wt(D) && w === d || // change to true on '[^ ]#'
      D === S && U
    );
  }
  p(Bt, "isPlainSafe");
  function kt(w) {
    return ht(w) && w !== o && !wt(w) && // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    w !== k && w !== L && w !== S && w !== C && w !== v && w !== X && w !== I && w !== H && // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    w !== d && w !== y && w !== x && w !== h && w !== et && w !== T && w !== _ && w !== m && w !== u && // | “%” | “@” | “`”)
    w !== f && w !== M && w !== z;
  }
  p(kt, "isPlainSafeFirst");
  function At(w) {
    return !wt(w) && w !== S;
  }
  p(At, "isPlainSafeLast");
  function $t(w, D) {
    const K = w.charCodeAt(D);
    let j;
    return K >= 55296 && K <= 56319 && D + 1 < w.length && (j = w.charCodeAt(D + 1), j >= 56320 && j <= 57343) ? (K - 55296) * 1024 + j - 56320 + 65536 : K;
  }
  p($t, "codePointAt");
  function Qt(w) {
    return /^\n* /.test(w);
  }
  p(Qt, "needIndentIndicator");
  const ce = 1, be = 2, ei = 3, ri = 4, ke = 5;
  function _r(w, D, K, j, U, Q, V, lt) {
    let ot, ft = 0, pt = null, vt = !1, Ot = !1;
    const $l = j !== -1;
    let ni = -1, li = kt($t(w, 0)) && At($t(w, w.length - 1));
    if (D || V)
      for (ot = 0; ot < w.length; ft >= 65536 ? ot += 2 : ot++) {
        if (ft = $t(w, ot), !ht(ft))
          return ke;
        li = li && Bt(ft, pt, lt), pt = ft;
      }
    else {
      for (ot = 0; ot < w.length; ft >= 65536 ? ot += 2 : ot++) {
        if (ft = $t(w, ot), ft === n)
          vt = !0, $l && (Ot = Ot || // Foldable line = too long, and not more-indented.
          ot - ni - 1 > j && w[ni + 1] !== " ", ni = ot);
        else if (!ht(ft))
          return ke;
        li = li && Bt(ft, pt, lt), pt = ft;
      }
      Ot = Ot || $l && ot - ni - 1 > j && w[ni + 1] !== " ";
    }
    return !vt && !Ot ? li && !V && !U(w) ? ce : Q === Z ? ke : be : K > 9 && Qt(w) ? ke : V ? Q === Z ? ke : be : Ot ? ri : ei;
  }
  p(_r, "chooseScalarStyle");
  function ii(w, D, K, j, U) {
    w.dump = (function() {
      if (D.length === 0)
        return w.quotingType === Z ? '""' : "''";
      if (!w.noCompatMode && (O.indexOf(D) !== -1 || B.test(D)))
        return w.quotingType === Z ? '"' + D + '"' : "'" + D + "'";
      const Q = w.indent * Math.max(1, K), V = w.lineWidth === -1 ? -1 : Math.max(Math.min(w.lineWidth, 40), w.lineWidth - Q), lt = j || // No block styles in flow mode.
      w.flowLevel > -1 && K >= w.flowLevel;
      function ot(ft) {
        return St(w, ft);
      }
      switch (p(ot, "testAmbiguity"), _r(
        D,
        lt,
        w.indent,
        V,
        ot,
        w.quotingType,
        w.forceQuotes && !j,
        U
      )) {
        case ce:
          return D;
        case be:
          return "'" + D.replace(/'/g, "''") + "'";
        case ei:
          return "|" + Br(D, w.indent) + vr(Ct(D, Q));
        case ri:
          return ">" + Br(D, w.indent) + vr(Ct(si(D, V), Q));
        case ke:
          return '"' + oi(D) + '"';
        default:
          throw new t("impossible error: invalid scalar style");
      }
    })();
  }
  p(ii, "writeScalar");
  function Br(w, D) {
    const K = Qt(w) ? String(D) : "", j = w[w.length - 1] === `
`, Q = j && (w[w.length - 2] === `
` || w === `
`) ? "+" : j ? "" : "-";
    return K + Q + `
`;
  }
  p(Br, "blockHeader");
  function vr(w) {
    return w[w.length - 1] === `
` ? w.slice(0, -1) : w;
  }
  p(vr, "dropEndingNewline");
  function si(w, D) {
    const K = /(\n+)([^\n]*)/g;
    let j = (function() {
      let lt = w.indexOf(`
`);
      return lt = lt !== -1 ? lt : w.length, K.lastIndex = lt, ue(w.slice(0, lt), D);
    })(), U = w[0] === `
` || w[0] === " ", Q, V;
    for (; V = K.exec(w); ) {
      const lt = V[1], ot = V[2];
      Q = ot[0] === " ", j += lt + (!U && !Q && ot !== "" ? `
` : "") + ue(ot, D), U = Q;
    }
    return j;
  }
  p(si, "foldString");
  function ue(w, D) {
    if (w === "" || w[0] === " ") return w;
    const K = / [^ ]/g;
    let j, U = 0, Q, V = 0, lt = 0, ot = "";
    for (; j = K.exec(w); )
      lt = j.index, lt - U > D && (Q = V > U ? V : lt, ot += `
` + w.slice(U, Q), U = Q + 1), V = lt;
    return ot += `
`, w.length - U > D && V > U ? ot += w.slice(U, V) + `
` + w.slice(V + 1) : ot += w.slice(U), ot.slice(1);
  }
  p(ue, "foldLine");
  function oi(w) {
    let D = "", K = 0;
    for (let j = 0; j < w.length; K >= 65536 ? j += 2 : j++) {
      K = $t(w, j);
      const U = E[K];
      !U && ht(K) ? (D += w[j], K >= 65536 && (D += w[j + 1])) : D += U || $(K);
    }
    return D;
  }
  p(oi, "escapeString");
  function Lr(w, D, K) {
    let j = "";
    const U = w.tag;
    for (let Q = 0, V = K.length; Q < V; Q += 1) {
      let lt = K[Q];
      w.replacer && (lt = w.replacer.call(K, String(Q), lt)), (Y(w, D, lt, !1, !1) || typeof lt > "u" && Y(w, D, null, !1, !1)) && (j !== "" && (j += "," + (w.condenseFlow ? "" : " ")), j += w.dump);
    }
    w.tag = U, w.dump = "[" + j + "]";
  }
  p(Lr, "writeFlowSequence");
  function Fr(w, D, K, j) {
    let U = "";
    const Q = w.tag;
    for (let V = 0, lt = K.length; V < lt; V += 1) {
      let ot = K[V];
      w.replacer && (ot = w.replacer.call(K, String(V), ot)), (Y(w, D + 1, ot, !0, !0, !1, !0) || typeof ot > "u" && Y(w, D + 1, null, !0, !0, !1, !0)) && ((!j || U !== "") && (U += xt(w, D)), w.dump && n === w.dump.charCodeAt(0) ? U += "-" : U += "- ", U += w.dump);
    }
    w.tag = Q, w.dump = U || "[]";
  }
  p(Fr, "writeBlockSequence");
  function ai(w, D, K) {
    let j = "";
    const U = w.tag, Q = Object.keys(K);
    for (let V = 0, lt = Q.length; V < lt; V += 1) {
      let ot = "";
      j !== "" && (ot += ", "), w.condenseFlow && (ot += '"');
      const ft = Q[V];
      let pt = K[ft];
      w.replacer && (pt = w.replacer.call(K, ft, pt)), Y(w, D, ft, !1, !1) && (w.dump.length > 1024 && (ot += "? "), ot += w.dump + (w.condenseFlow ? '"' : "") + ":" + (w.condenseFlow ? "" : " "), Y(w, D, pt, !1, !1) && (ot += w.dump, j += ot));
    }
    w.tag = U, w.dump = "{" + j + "}";
  }
  p(ai, "writeFlowMapping");
  function g(w, D, K, j) {
    let U = "";
    const Q = w.tag, V = Object.keys(K);
    if (w.sortKeys === !0)
      V.sort();
    else if (typeof w.sortKeys == "function")
      V.sort(w.sortKeys);
    else if (w.sortKeys)
      throw new t("sortKeys must be a boolean or a function");
    for (let lt = 0, ot = V.length; lt < ot; lt += 1) {
      let ft = "";
      (!j || U !== "") && (ft += xt(w, D));
      const pt = V[lt];
      let vt = K[pt];
      if (w.replacer && (vt = w.replacer.call(K, pt, vt)), !Y(w, D + 1, pt, !0, !0, !0))
        continue;
      const Ot = w.tag !== null && w.tag !== "?" || w.dump && w.dump.length > 1024;
      Ot && (w.dump && n === w.dump.charCodeAt(0) ? ft += "?" : ft += "? "), ft += w.dump, Ot && (ft += xt(w, D)), Y(w, D + 1, vt, !0, Ot) && (w.dump && n === w.dump.charCodeAt(0) ? ft += ":" : ft += ": ", ft += w.dump, U += ft);
    }
    w.tag = Q, w.dump = U || "{}";
  }
  p(g, "writeBlockMapping");
  function A(w, D, K) {
    const j = K ? w.explicitTypes : w.implicitTypes;
    for (let U = 0, Q = j.length; U < Q; U += 1) {
      const V = j[U];
      if ((V.instanceOf || V.predicate) && (!V.instanceOf || typeof D == "object" && D instanceof V.instanceOf) && (!V.predicate || V.predicate(D))) {
        if (K ? V.multi && V.representName ? w.tag = V.representName(D) : w.tag = V.tag : w.tag = "?", V.represent) {
          const lt = w.styleMap[V.tag] || V.defaultStyle;
          let ot;
          if (i.call(V.represent) === "[object Function]")
            ot = V.represent(D, lt);
          else if (s.call(V.represent, lt))
            ot = V.represent[lt](D, lt);
          else
            throw new t("!<" + V.tag + '> tag resolver accepts not "' + lt + '" style');
          w.dump = ot;
        }
        return !0;
      }
    }
    return !1;
  }
  p(A, "detectType");
  function Y(w, D, K, j, U, Q, V) {
    w.tag = null, w.dump = K, A(w, K, !1) || A(w, K, !0);
    const lt = i.call(w.dump), ot = j;
    j && (j = w.flowLevel < 0 || w.flowLevel > D);
    const ft = lt === "[object Object]" || lt === "[object Array]";
    let pt, vt;
    if (ft && (pt = w.duplicates.indexOf(K), vt = pt !== -1), (w.tag !== null && w.tag !== "?" || vt || w.indent !== 2 && D > 0) && (U = !1), vt && w.usedDuplicates[pt])
      w.dump = "*ref_" + pt;
    else {
      if (ft && vt && !w.usedDuplicates[pt] && (w.usedDuplicates[pt] = !0), lt === "[object Object]")
        j && Object.keys(w.dump).length !== 0 ? (g(w, D, w.dump, U), vt && (w.dump = "&ref_" + pt + w.dump)) : (ai(w, D, w.dump), vt && (w.dump = "&ref_" + pt + " " + w.dump));
      else if (lt === "[object Array]")
        j && w.dump.length !== 0 ? (w.noArrayIndent && !V && D > 0 ? Fr(w, D - 1, w.dump, U) : Fr(w, D, w.dump, U), vt && (w.dump = "&ref_" + pt + w.dump)) : (Lr(w, D, w.dump), vt && (w.dump = "&ref_" + pt + " " + w.dump));
      else if (lt === "[object String]")
        w.tag !== "?" && ii(w, w.dump, D, Q, ot);
      else {
        if (lt === "[object Undefined]")
          return !1;
        if (w.skipInvalid) return !1;
        throw new t("unacceptable kind of an object to dump " + lt);
      }
      if (w.tag !== null && w.tag !== "?") {
        let Ot = encodeURI(
          w.tag[0] === "!" ? w.tag.slice(1) : w.tag
        ).replace(/!/g, "%21");
        w.tag[0] === "!" ? Ot = "!" + Ot : Ot.slice(0, 18) === "tag:yaml.org,2002:" ? Ot = "!!" + Ot.slice(18) : Ot = "!<" + Ot + ">", w.dump = Ot + " " + w.dump;
      }
    }
    return !0;
  }
  p(Y, "writeNode");
  function G(w, D) {
    const K = [], j = [];
    W(w, K, j);
    const U = j.length;
    for (let Q = 0; Q < U; Q += 1)
      D.duplicates.push(K[j[Q]]);
    D.usedDuplicates = new Array(U);
  }
  p(G, "getDuplicateReferences");
  function W(w, D, K) {
    if (w !== null && typeof w == "object") {
      const j = D.indexOf(w);
      if (j !== -1)
        K.indexOf(j) === -1 && K.push(j);
      else if (D.push(w), Array.isArray(w))
        for (let U = 0, Q = w.length; U < Q; U += 1)
          W(w[U], D, K);
      else {
        const U = Object.keys(w);
        for (let Q = 0, V = U.length; Q < V; Q += 1)
          W(w[U[Q]], D, K);
      }
    }
  }
  p(W, "inspectNode");
  function tt(w, D) {
    D = D || {};
    const K = new dt(D);
    K.noRefs || G(w, K);
    let j = w;
    return K.replacer && (j = K.replacer.call({ "": j }, "", j)), Y(K, 0, j, !0, !0) ? K.dump + `
` : "";
  }
  return p(tt, "dump2"), fa.dump = tt, fa;
}
p(Hg, "requireDumper");
var ru;
function Yg() {
  if (ru) return Ut;
  ru = 1;
  const e = zg(), t = Hg();
  function r(i, s) {
    return function() {
      throw new Error("Function yaml." + i + " is removed in js-yaml 4. Use yaml." + s + " instead, which is now safe by default.");
    };
  }
  return p(r, "renamed"), Ut.Type = Kt(), Ut.Schema = dl(), Ut.FAILSAFE_SCHEMA = yl(), Ut.JSON_SCHEMA = kl(), Ut.CORE_SCHEMA = wl(), Ut.DEFAULT_SCHEMA = wo(), Ut.load = e.load, Ut.loadAll = e.loadAll, Ut.dump = t.dump, Ut.YAMLException = Jr(), Ut.types = {
    binary: _l(),
    float: bl(),
    map: gl(),
    null: ml(),
    pairs: vl(),
    set: Ll(),
    timestamp: Sl(),
    bool: xl(),
    int: Cl(),
    merge: Tl(),
    omap: Bl(),
    seq: pl(),
    str: fl()
  }, Ut.safeLoad = r("safeLoad", "load"), Ut.safeLoadAll = r("safeLoadAll", "loadAll"), Ut.safeDump = r("safeDump", "dump"), Ut;
}
p(Yg, "requireJsYaml");
var NB = Yg(), WB = /* @__PURE__ */ Ng(NB), {
  Type: rM,
  Schema: iM,
  FAILSAFE_SCHEMA: sM,
  JSON_SCHEMA: zB,
  CORE_SCHEMA: oM,
  DEFAULT_SCHEMA: aM,
  load: HB,
  loadAll: nM,
  dump: lM,
  YAMLException: hM,
  types: cM,
  safeLoad: uM,
  safeLoadAll: dM,
  safeDump: fM
} = WB, YB = {
  common: Gi,
  getConfig: It,
  insertCluster: Vp,
  insertEdge: Qp,
  insertEdgeLabel: Jn,
  insertMarkers: eg,
  insertNode: Qn,
  interpolateToCurve: Fn,
  labelHelper: ct,
  log: P,
  positionEdgeLabel: xw
}, Hi = {}, jg = /* @__PURE__ */ p((e) => {
  for (const t of e)
    Hi[t.name] = t;
}, "registerLayoutLoaders"), jB = /* @__PURE__ */ p(() => {
  jg([
    {
      name: "dagre",
      loader: /* @__PURE__ */ p(async () => await import("./dagre-GXQ25YYZ-BXtQ3uDn.js"), "loader")
    },
    {
      name: "swimlane",
      loader: /* @__PURE__ */ p(async () => await import("./swimlanes-42K2YHIH-BlmDDmNR.js"), "loader")
    },
    {
      name: "cose-bilkent",
      loader: /* @__PURE__ */ p(async () => await import("./cose-bilkent-JH36ORCC-D-fOsVF5.js"), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
jB();
var pM = /* @__PURE__ */ p(async (e, t) => {
  if (!(e.layoutAlgorithm in Hi))
    throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
  if (e.diagramId)
    for (const h of e.nodes) {
      const u = h.domId || h.id;
      h.domId = `${e.diagramId}-${u}`;
    }
  const r = Hi[e.layoutAlgorithm], i = await r.loader(), { theme: s, themeVariables: o } = e.config, { useGradient: a, gradientStart: n, gradientStop: l } = o, c = t.attr("id");
  if (t.append("defs").append("filter").attr("id", `${c}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${s?.includes("dark") ? "#FFFFFF" : "#000000"}`), t.append("defs").append("filter").attr("id", `${c}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${s?.includes("dark") ? "#FFFFFF" : "#000000"}`), a) {
    const h = t.append("linearGradient").attr("id", t.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    h.append("svg:stop").attr("offset", "0%").attr("stop-color", n).attr("stop-opacity", 1), h.append("svg:stop").attr("offset", "100%").attr("stop-color", l).attr("stop-opacity", 1);
  }
  return i.render(e, t, YB, {
    algorithm: r.algorithm
  });
}, "render"), gM = /* @__PURE__ */ p((e = "", { fallback: t = "dagre" } = {}) => {
  if (e in Hi)
    return e;
  if (t in Hi)
    return P.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
  throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm"), Fl = "comm", Ug = "rule", Gg = "decl", UB = "@media", GB = "@import", XB = "@supports", VB = "@namespace", Qa = "@keyframes", Xg = "@layer", ZB = "@scope", KB = Math.abs, $i = String.fromCharCode;
function Vg(e) {
  return e.trim();
}
function Ja(e, t, r) {
  return e.replace(t, r);
}
function Wr(e, t) {
  return e.charCodeAt(t) | 0;
}
function Gr(e, t, r) {
  return e.slice(t, r);
}
function Te(e) {
  return e.length;
}
function Zg(e) {
  return e.length;
}
function fs(e, t) {
  return t.push(e), e;
}
var So = 1, Xr = 1, Kg = 0, le = 0, Nt = 0, ti = "";
function Ml(e, t, r, i, s, o, a, n) {
  return { value: e, root: t, parent: r, type: i, props: s, children: o, line: So, column: Xr, length: a, return: "", siblings: n };
}
function QB() {
  return Nt;
}
function JB() {
  return Nt = le > 0 ? Wr(ti, --le) : 0, Xr--, Nt === 10 && (Xr = 1, So--), Nt;
}
function ye() {
  return Nt = le < Kg ? Wr(ti, le++) : 0, Xr++, Nt === 10 && (Xr = 1, So++), Nt;
}
function Qe() {
  return Wr(ti, le);
}
function _s() {
  return le;
}
function To(e, t) {
  return Gr(ti, e, t);
}
function Yi(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function tv(e) {
  return So = Xr = 1, Kg = Te(ti = e), le = 0, [];
}
function ev(e) {
  return ti = "", e;
}
function pa(e) {
  return Vg(To(le - 1, tn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function rv(e) {
  for (; (Nt = Qe()) && Nt < 33; )
    ye();
  return Yi(e) > 2 || Yi(Nt) > 3 ? "" : " ";
}
function iv(e, t) {
  for (; --t && ye() && !(Nt < 48 || Nt > 102 || Nt > 57 && Nt < 65 || Nt > 70 && Nt < 97); )
    ;
  return To(e, _s() + (t < 6 && Qe() == 32 && ye() == 32));
}
function tn(e) {
  for (; ye(); )
    switch (Nt) {
      // ] ) " '
      case e:
        return le;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && tn(Nt);
        break;
      // (
      case 40:
        e === 41 && tn(e);
        break;
      // \
      case 92:
        ye();
        break;
    }
  return le;
}
function sv(e, t) {
  for (; ye() && e + Nt !== 57; )
    if (e + Nt === 84 && Qe() === 47)
      break;
  return "/*" + To(t, le - 1) + "*" + $i(e === 47 ? e : ye());
}
function ov(e) {
  for (; !Yi(Qe()); )
    ye();
  return To(e, le);
}
function av(e) {
  return ev(Bs("", null, null, null, [""], e = tv(e), 0, [0], e));
}
function Bs(e, t, r, i, s, o, a, n, l) {
  for (var c = 0, h = 0, u = a, d = 0, f = 0, y = 0, m = 1, x = 1, C = 1, k = 0, S = 0, T = "", _ = s, L = o, M = i, v = T; x; )
    switch (y = S, S = ye()) {
      // (
      case 40:
        y != 108 && Wr(v, u - 1) == 58 ? (k++, v += "(") : v += pa(S);
        break;
      // )
      case 41:
        k--, v += ")";
        break;
      // " ' [
      case 34:
      case 39:
      case 91:
        v += pa(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        if (k > 0) {
          v += $i(S);
          break;
        }
        v += rv(y);
        break;
      // \
      case 92:
        v += iv(_s() - 1, 7);
        continue;
      // /
      case 47:
        switch (Qe()) {
          case 42:
          case 47:
            fs(nv(sv(ye(), _s()), t, r, l), l), (Yi(y || 1) == 5 || Yi(Qe() || 1) == 5) && Te(v) && Gr(v, -1, void 0) !== " " && (v += " ");
            break;
          default:
            v += "/";
        }
        break;
      // {
      case 123 * m:
        n[c++] = Te(v) * C;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        if (k > 0 && S) {
          v += $i(S);
          break;
        }
        switch (S) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + h:
            C == -1 && (v = Ja(v, /\f/g, "")), f > 0 && (Te(v) - u || m === 0) && fs(f > 32 ? su(v + ";", i, r, u - 1, l) : su(Ja(v, " ", "") + ";", i, r, u - 2, l), l);
            break;
          // @ ;
          case 59:
            v += ";";
          // { rule/at-rule
          default:
            if (fs(M = iu(v, t, r, c, h, s, n, T, _ = [], L = [], u, o), o), S === 123)
              if (h === 0)
                Bs(v, t, M, M, _, o, u, n, L);
              else {
                switch (d) {
                  // c(ontainer)
                  case 99:
                    if (Wr(v, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Wr(v, 2) === 97) break;
                  default:
                    h = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                h ? Bs(e, M, M, i && fs(iu(e, M, M, 0, 0, s, n, T, s, _ = [], u, L), L), s, L, u, n, i ? _ : L) : Bs(v, M, M, M, [""], L, 0, n, L);
              }
        }
        c = h = f = 0, m = C = 1, T = v = "", u = a;
        break;
      // :
      case 58:
        u = 1 + Te(v), f = y;
      default:
        if (m < 1) {
          if (S == 123)
            --m;
          else if (S == 125 && m++ == 0 && JB() == 125)
            continue;
        }
        switch (v += $i(S), S * m) {
          // &
          case 38:
            C = h > 0 ? 1 : (v += "\f", -1);
            break;
          // ,
          case 44:
            if (k > 0) break;
            n[c++] = (Te(v) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Qe() === 45 && (v += pa(ye())), d = Qe(), h = u = Te(T = v += ov(_s())), S++;
            break;
          // -
          case 45:
            y === 45 && Te(v) == 2 && (m = 0);
        }
    }
  return o;
}
function iu(e, t, r, i, s, o, a, n, l, c, h, u) {
  for (var d = s - 1, f = s === 0 ? o : [""], y = Zg(f), m = 0, x = 0, C = 0; m < i; ++m)
    for (var k = 0, S = Gr(e, d + 1, d = KB(x = a[m])), T = e; k < y; ++k)
      (T = Vg(x > 0 ? f[k] + " " + S : Ja(S, /&\f/g, f[k]))) && (l[C++] = T);
  return Ml(e, t, r, s === 0 ? Ug : n, l, c, h, u);
}
function nv(e, t, r, i) {
  return Ml(e, t, r, Fl, $i(QB()), Gr(e, 2, -2), 0, i);
}
function su(e, t, r, i, s) {
  return Ml(e, t, r, Gg, Gr(e, 0, i), Gr(e, i + 1, -1), i, s);
}
function en(e, t) {
  for (var r = "", i = 0; i < e.length; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function lv(e, t, r, i) {
  switch (e.type) {
    case Xg:
      if (e.children.length) break;
    case GB:
    case VB:
    case Gg:
      return e.return = e.return || e.value;
    case Fl:
      return "";
    case Qa:
      return e.return = e.value + "{" + en(e.children, i) + "}";
    case Ug:
      if (!Te(e.value = e.props.join(","))) return "";
  }
  return Te(r = en(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
function hv(e) {
  var t = Zg(e);
  return function(r, i, s, o) {
    for (var a = "", n = 0; n < t; n++)
      a += e[n](r, i, s, o) || "";
    return a;
  };
}
var Qg = "c4", cv = /* @__PURE__ */ p((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), uv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./c4Diagram-7LVT6UL2-DLcm3o_i.js");
  return { id: Qg, diagram: e };
}, "loader"), dv = {
  id: Qg,
  detector: cv,
  loader: uv
}, fv = dv, Jg = "flowchart", pv = /* @__PURE__ */ p((e, t) => t?.flowchart?.defaultRenderer === "dagre-wrapper" || t?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"), gv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-HODETNUW-C65i1dGS.js").then((t) => t.f);
  return { id: Jg, diagram: e };
}, "loader"), yv = {
  id: Jg,
  detector: pv,
  loader: gv
}, mv = yv, ty = "flowchart-v2", xv = /* @__PURE__ */ p((e, t) => t?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (t?.flowchart?.defaultRenderer === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && t?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"), Cv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-HODETNUW-C65i1dGS.js").then((t) => t.f);
  return { id: ty, diagram: e };
}, "loader"), bv = {
  id: ty,
  detector: xv,
  loader: Cv
}, kv = bv, ey = "swimlane", wv = /* @__PURE__ */ p((e) => /^\s*swimlane-beta\b/.test(e), "detector"), Sv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./swimlanesDiagram-VR7AAH4N-Csf7TFSJ.js");
  return { id: ey, diagram: e };
}, "loader"), Tv = {
  id: ey,
  detector: wv,
  loader: Sv
}, _v = Tv, ry = "er", Bv = /* @__PURE__ */ p((e) => /^\s*erDiagram/.test(e), "detector"), vv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./erDiagram-RLTQ6QDP-Q1OW5-es.js");
  return { id: ry, diagram: e };
}, "loader"), Lv = {
  id: ry,
  detector: Bv,
  loader: vv
}, Fv = Lv, iy = "gitGraph", Mv = /* @__PURE__ */ p((e) => /^\s*gitGraph/.test(e), "detector"), Av = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./gitGraphDiagram-WWUBYQGX-ndzKuCe3.js");
  return { id: iy, diagram: e };
}, "loader"), Ev = {
  id: iy,
  detector: Mv,
  loader: Av
}, $v = Ev, sy = "gantt", Ov = /* @__PURE__ */ p((e) => /^\s*gantt/.test(e), "detector"), Dv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./ganttDiagram-EL5Y4UJY-CQxiRNu2.js");
  return { id: sy, diagram: e };
}, "loader"), Pv = {
  id: sy,
  detector: Ov,
  loader: Dv
}, Iv = Pv, oy = "info", Rv = /* @__PURE__ */ p((e) => /^\s*info/.test(e), "detector"), qv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./infoDiagram-27XIBGKW-Dcdop0Ty.js");
  return { id: oy, diagram: e };
}, "loader"), Nv = {
  id: oy,
  detector: Rv,
  loader: qv
}, ay = "pie", Wv = /* @__PURE__ */ p((e) => /^\s*pie/.test(e), "detector"), zv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./pieDiagram-E7YTZNPT-CeqpEdhR.js");
  return { id: ay, diagram: e };
}, "loader"), Hv = {
  id: ay,
  detector: Wv,
  loader: zv
}, ny = "quadrantChart", Yv = /* @__PURE__ */ p((e) => /^\s*quadrantChart/.test(e), "detector"), jv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./quadrantDiagram-AXDQQJYC-C8-X2fCA.js");
  return { id: ny, diagram: e };
}, "loader"), Uv = {
  id: ny,
  detector: Yv,
  loader: jv
}, Gv = Uv, ly = "xychart", Xv = /* @__PURE__ */ p((e) => /^\s*xychart(-beta)?/.test(e), "detector"), Vv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./xychartDiagram-S5SC5T6Z-2ExKi9XD.js");
  return { id: ly, diagram: e };
}, "loader"), Zv = {
  id: ly,
  detector: Xv,
  loader: Vv
}, Kv = Zv, hy = "requirement", Qv = /* @__PURE__ */ p((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), Jv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./requirementDiagram-BXWQKSXE-KaB9ycgE.js");
  return { id: hy, diagram: e };
}, "loader"), tL = {
  id: hy,
  detector: Qv,
  loader: Jv
}, eL = tL, cy = "sequence", rL = /* @__PURE__ */ p((e) => /^\s*sequenceDiagram/.test(e), "detector"), iL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./sequenceDiagram-WJ2MYXX4-BeO__Yp0.js");
  return { id: cy, diagram: e };
}, "loader"), sL = {
  id: cy,
  detector: rL,
  loader: iL
}, oL = sL, uy = "class", aL = /* @__PURE__ */ p((e, t) => t?.class?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e), "detector"), nL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./classDiagram-ZZMXUADV-BYkXGBc5.js");
  return { id: uy, diagram: e };
}, "loader"), lL = {
  id: uy,
  detector: aL,
  loader: nL
}, hL = lL, dy = "classDiagram", cL = /* @__PURE__ */ p((e, t) => /^\s*classDiagram/.test(e) && t?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"), uL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./classDiagram-v2-VYDZK3BY-BYkXGBc5.js");
  return { id: dy, diagram: e };
}, "loader"), dL = {
  id: dy,
  detector: cL,
  loader: uL
}, fL = dL, fy = "state", pL = /* @__PURE__ */ p((e, t) => t?.state?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e), "detector"), gL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./stateDiagram-D77RDMKH-CrGP0e45.js");
  return { id: fy, diagram: e };
}, "loader"), yL = {
  id: fy,
  detector: pL,
  loader: gL
}, mL = yL, py = "stateDiagram", xL = /* @__PURE__ */ p((e, t) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && t?.state?.defaultRenderer === "dagre-wrapper"), "detector"), CL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./stateDiagram-v2-MP3YSRHH-CNjd1EJF.js");
  return { id: py, diagram: e };
}, "loader"), bL = {
  id: py,
  detector: xL,
  loader: CL
}, kL = bL, gy = "journey", wL = /* @__PURE__ */ p((e) => /^\s*journey/.test(e), "detector"), SL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./journeyDiagram-3NMN7TZE-JwtNbY6B.js");
  return { id: gy, diagram: e };
}, "loader"), TL = {
  id: gy,
  detector: wL,
  loader: SL
}, _L = TL, BL = /* @__PURE__ */ p((e, t, r) => {
  P.debug(`rendering svg for syntax error
`);
  const i = Gb(t), s = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), vu(i, 100, 512, !0), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), s.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), s.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, "draw"), yy = { draw: BL }, vL = yy, LL = {
  db: {},
  renderer: yy,
  parser: {
    parse: /* @__PURE__ */ p(() => {
    }, "parse")
  }
}, FL = LL, my = "flowchart-elk", ML = /* @__PURE__ */ p((e, t = {}) => (
  // If diagram explicitly states flowchart-elk
  /^\s*flowchart-elk/.test(e) || // If a flowchart/graph diagram has their default renderer set to elk
  /^\s*(flowchart|graph)/.test(e) && t?.flowchart?.defaultRenderer === "elk" ? (t.layout = "elk", !0) : !1
), "detector"), AL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-HODETNUW-C65i1dGS.js").then((t) => t.f);
  return { id: my, diagram: e };
}, "loader"), EL = {
  id: my,
  detector: ML,
  loader: AL
}, $L = EL, xy = "timeline", OL = /* @__PURE__ */ p((e) => /^\s*timeline/.test(e), "detector"), DL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./timeline-definition-24CTP7MA-B8mgHJ-F.js");
  return { id: xy, diagram: e };
}, "loader"), PL = {
  id: xy,
  detector: OL,
  loader: DL
}, IL = PL, Cy = "mindmap", RL = /* @__PURE__ */ p((e) => /^\s*mindmap/.test(e), "detector"), qL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./mindmap-definition-YA3MSWOX-CZ32DRd3.js");
  return { id: Cy, diagram: e };
}, "loader"), NL = {
  id: Cy,
  detector: RL,
  loader: qL
}, WL = NL, by = "kanban", zL = /* @__PURE__ */ p((e) => /^\s*kanban/.test(e), "detector"), HL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./kanban-definition-UXKFOSKX-B91RXH5H.js");
  return { id: by, diagram: e };
}, "loader"), YL = {
  id: by,
  detector: zL,
  loader: HL
}, jL = YL, ky = "sankey", UL = /* @__PURE__ */ p((e) => /^\s*sankey(-beta)?/.test(e), "detector"), GL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./sankeyDiagram-P5KCCOFB-BQ47KASQ.js");
  return { id: ky, diagram: e };
}, "loader"), XL = {
  id: ky,
  detector: UL,
  loader: GL
}, VL = XL, wy = "packet", ZL = /* @__PURE__ */ p((e) => /^\s*packet(-beta)?/.test(e), "detector"), KL = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-Z3DM3KII-DYQYMAgI.js");
  return { id: wy, diagram: e };
}, "loader"), QL = {
  id: wy,
  detector: ZL,
  loader: KL
}, Sy = "radar", JL = /* @__PURE__ */ p((e) => /^\s*radar-beta/.test(e), "detector"), tF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-UQ7AKVKN-CeRoVyLB.js");
  return { id: Sy, diagram: e };
}, "loader"), eF = {
  id: Sy,
  detector: JL,
  loader: tF
}, Ty = "block", rF = /* @__PURE__ */ p((e) => /^\s*block(-beta)?/.test(e), "detector"), iF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./blockDiagram-I7D4REHJ-WgFOdAvz.js");
  return { id: Ty, diagram: e };
}, "loader"), sF = {
  id: Ty,
  detector: rF,
  loader: iF
}, oF = sF, _y = "treeView", aF = /* @__PURE__ */ p((e) => /^\s*treeView-beta/.test(e), "detector"), nF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-S7CK7UJ4-MRZlhIse.js");
  return { id: _y, diagram: e };
}, "loader"), lF = {
  id: _y,
  detector: aF,
  loader: nF
}, hF = lF, By = "architecture", cF = /* @__PURE__ */ p((e) => /^\s*architecture/.test(e), "detector"), uF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./architectureDiagram-5GKGNRK7-DkFP_7lM.js");
  return { id: By, diagram: e };
}, "loader"), dF = {
  id: By,
  detector: cF,
  loader: uF
}, fF = dF, vy = "eventmodeling", pF = /* @__PURE__ */ p((e) => /^\s*eventmodeling/.test(e), "detector"), gF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-VSXAHHWV-zvn5vcQE.js");
  return { id: vy, diagram: e };
}, "loader"), yF = {
  id: vy,
  detector: pF,
  loader: gF
}, mF = yF, Ly = "ishikawa", xF = /* @__PURE__ */ p((e) => /^\s*ishikawa(-beta)?\b/i.test(e), "detector"), CF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./ishikawaDiagram-5VMMS53U-gS33sbMl.js");
  return { id: Ly, diagram: e };
}, "loader"), bF = {
  id: Ly,
  detector: xF,
  loader: CF
}, Fy = "venn", kF = /* @__PURE__ */ p((e) => /^\s*venn-beta/.test(e), "detector"), wF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./vennDiagram-4TSXK5OY-DSairI35.js");
  return { id: Fy, diagram: e };
}, "loader"), SF = {
  id: Fy,
  detector: kF,
  loader: wF
}, TF = SF, My = "treemap", _F = /* @__PURE__ */ p((e) => /^\s*treemap/.test(e), "detector"), BF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-VX7I27RA-DBD5vsr4.js");
  return { id: My, diagram: e };
}, "loader"), vF = {
  id: My,
  detector: _F,
  loader: BF
}, Ay = "wardley", LF = /* @__PURE__ */ p((e) => /^\s*wardley-beta/i.test(e), "detector"), FF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./wardleyDiagram-VM6X3IG4-y4mL3Qsw.js");
  return { id: Ay, diagram: e };
}, "loader"), MF = {
  id: Ay,
  detector: LF,
  loader: FF
}, AF = MF, Ey = "cynefin", EF = /* @__PURE__ */ p((e) => /^\s*cynefin-beta(?:[\s:]|$)/.test(e), "detector"), $F = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./cynefinDiagram-5FMLGOSQ-C84e1VU5.js");
  return { id: Ey, diagram: e };
}, "loader"), OF = {
  id: Ey,
  detector: EF,
  loader: $F
}, $y = "railroad", DF = /* @__PURE__ */ p((e) => /^\s*railroad-beta/i.test(e), "detector"), PF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./railroadDiagram-O6MQD6OU-XNN3KSTQ.js");
  return { id: $y, diagram: e };
}, "loader"), IF = {
  id: $y,
  detector: DF,
  loader: PF
}, Oy = "railroadEbnf", RF = /* @__PURE__ */ p((e) => /^\s*railroad-ebnf-beta/i.test(e), "detector"), qF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./ebnfDiagram-PWID7BFC-BSrA-uVQ.js");
  return { id: Oy, diagram: e };
}, "loader"), NF = {
  id: Oy,
  detector: RF,
  loader: qF
}, Dy = "railroadAbnf", WF = /* @__PURE__ */ p((e) => /^\s*railroad-abnf-beta/i.test(e), "detector"), zF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./abnfDiagram-VCTEODGH-BGa57sh4.js");
  return { id: Dy, diagram: e };
}, "loader"), HF = {
  id: Dy,
  detector: WF,
  loader: zF
}, Py = "railroadPeg", YF = /* @__PURE__ */ p((e) => /^\s*railroad-peg-beta/i.test(e), "detector"), jF = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./pegDiagram-XKGWAZYB-Bo-kA0KS.js");
  return { id: Py, diagram: e };
}, "loader"), UF = {
  id: Py,
  detector: YF,
  loader: jF
}, ou = !1, _o = /* @__PURE__ */ p(() => {
  ou || (ou = !0, As("error", FL, (e) => e.toLowerCase().trim() === "error"), As(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: /* @__PURE__ */ p(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: /* @__PURE__ */ p(() => {
        }, "draw")
      },
      parser: {
        parse: /* @__PURE__ */ p(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: /* @__PURE__ */ p(() => null, "init")
      // no op
    },
    (e) => e.toLowerCase().trimStart().startsWith("---")
  ), ma($L, WL, fF), ma(
    fv,
    jL,
    fL,
    hL,
    Fv,
    Iv,
    Nv,
    Hv,
    eL,
    oL,
    _v,
    kv,
    mv,
    IL,
    $v,
    kL,
    mL,
    _L,
    Gv,
    VL,
    QL,
    Kv,
    oF,
    mF,
    hF,
    eF,
    bF,
    vF,
    IF,
    NF,
    HF,
    UF,
    TF,
    AF,
    OF
  ));
}, "addDiagrams"), GF = /* @__PURE__ */ p(async () => {
  P.debug("Loading registered diagrams");
  const t = (await Promise.allSettled(
    Object.entries(pr).map(async ([r, { detector: i, loader: s }]) => {
      if (s)
        try {
          ka(r);
        } catch {
          try {
            const { diagram: o, id: a } = await s();
            As(a, o, i);
          } catch (o) {
            throw P.error(`Failed to load external diagram with key ${r}. Removing from detectors.`), delete pr[r], o;
          }
        }
    })
  )).filter((r) => r.status === "rejected");
  if (t.length > 0) {
    P.error(`Failed to load ${t.length} external diagrams`);
    for (const r of t)
      P.error(r);
    throw new Error(`Failed to load ${t.length} external diagrams`);
  }
}, "loadRegisteredDiagrams"), XF = "graphics-document document";
function Iy(e, t) {
  e.attr("role", XF), t !== "" && e.attr("aria-roledescription", t);
}
p(Iy, "setA11yDiagramInfo");
function Ry(e, t, r, i) {
  if (e.insert !== void 0) {
    if (r) {
      const s = `chart-desc-${i}`;
      e.attr("aria-describedby", s), e.insert("desc", ":first-child").attr("id", s).text(r);
    }
    if (t) {
      const s = `chart-title-${i}`;
      e.attr("aria-labelledby", s), e.insert("title", ":first-child").attr("id", s).text(t);
    }
  }
}
p(Ry, "addSVGa11yTitleDescription");
var rn = class qy {
  constructor(t, r, i, s, o) {
    this.type = t, this.text = r, this.db = i, this.parser = s, this.renderer = o;
  }
  static {
    p(this, "Diagram");
  }
  static async fromText(t, r = {}) {
    const i = It(), s = nn(t, i);
    t = gk(t) + `
`;
    try {
      ka(s);
    } catch {
      const c = Wm(s);
      if (!c)
        throw new ku(`Diagram ${s} not found.`);
      const { id: h, diagram: u } = await c();
      As(h, u);
    }
    const { db: o, parser: a, renderer: n, init: l } = ka(s);
    return a.parser && (a.parser.yy = o), o.clear?.(), l?.(i), r.title && o.setDiagramTitle?.(r.title), await a.parse(t), new qy(s, t, o, a, n);
  }
  async render(t, r) {
    await this.renderer.draw(this.text, t, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}, au = [], VF = /* @__PURE__ */ p(() => {
  au.forEach((e) => {
    e();
  }), au = [];
}, "attachFunctions"), ZF = /* @__PURE__ */ p((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function Ny(e) {
  const t = e.match(bu);
  if (!t)
    return {
      text: e,
      metadata: {}
    };
  const r = t[1], i = r ? t[2].split(`
`).map((a) => a.startsWith(r) ? a.slice(r.length) : a).join(`
`) : t[2];
  let s = HB(i, {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: zB
  }) ?? {};
  s = typeof s == "object" && !Array.isArray(s) ? s : {};
  const o = {};
  return s.displayMode && (o.displayMode = s.displayMode.toString()), s.title && (o.title = s.title.toString()), s.config && (o.config = s.config), {
    text: e.slice(t[0].length),
    metadata: o
  };
}
p(Ny, "extractFrontMatter");
var KF = /* @__PURE__ */ p((e) => e.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (t, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText"), QF = /* @__PURE__ */ p((e) => {
  const { text: t, metadata: r } = Ny(e), { displayMode: i, title: s, config: o = {} } = r;
  return i && (o.gantt || (o.gantt = {}), o.gantt.displayMode = i), { title: s, config: o, text: t };
}, "processFrontmatter"), JF = /* @__PURE__ */ p((e) => {
  const t = Vt.detectInit(e) ?? {}, r = Vt.detectDirective(e, "wrap");
  return Array.isArray(r) ? t.wrap = r.some(({ type: i }) => i === "wrap") : r?.type === "wrap" && (t.wrap = !0), {
    text: rk(e),
    directive: t
  };
}, "processDirectives");
function Al(e) {
  const t = KF(e), r = QF(t), i = JF(r.text), s = On(r.config, i.directive);
  return e = ZF(i.text), {
    code: e,
    title: r.title,
    config: s
  };
}
p(Al, "preprocessDiagram");
function Wy(e) {
  const t = new TextEncoder().encode(e), r = Array.from(t, (i) => String.fromCodePoint(i)).join("");
  return btoa(r);
}
p(Wy, "toBase64");
var t5 = 5e4, e5 = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", r5 = "sandbox", i5 = "loose", s5 = "http://www.w3.org/2000/svg", o5 = "http://www.w3.org/1999/xlink", a5 = "http://www.w3.org/1999/xhtml", n5 = "100%", l5 = "100%", h5 = "border:0;margin:0;", c5 = "margin:0", u5 = "allow-top-navigation-by-user-activation allow-popups", d5 = 'The "iframe" tag is not supported by your browser.', f5 = ["foreignobject"], p5 = ["dominant-baseline"];
function El(e) {
  const t = Al(e);
  return Fs(), Im(t.config ?? {}), t;
}
p(El, "processAndSetConfigs");
async function zy(e, t) {
  _o();
  try {
    const { code: r, config: i } = El(e);
    return { diagramType: (await Yy(r)).type, config: i };
  } catch (r) {
    if (t?.suppressErrors)
      return !1;
    throw r;
  }
}
p(zy, "parse");
var nu = /* @__PURE__ */ p((e, t, r = []) => {
  const i = gu(`{ ${r.join(" !important; ")} !important; }`);
  return `.${e} ${t} ${i}`;
}, "cssImportantStyles"), g5 = /* @__PURE__ */ p((e, t = /* @__PURE__ */ new Map()) => {
  const r = new CSSStyleSheet();
  if (e.fontFamily !== void 0 && r.insertRule(
    `:root { --mermaid-font-family: ${e.fontFamily}}`,
    r.cssRules.length
  ), e.altFontFamily !== void 0 && r.insertRule(
    `:root { --mermaid-alt-font-family: ${e.altFontFamily}}`,
    r.cssRules.length
  ), t instanceof Map) {
    const n = Zt(e) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    t.forEach((l) => {
      yh(l.styles) || n.forEach((c) => {
        r.insertRule(
          nu(l.id, c, l.styles),
          r.cssRules.length
        );
      }), yh(l.textStyles) || r.insertRule(
        nu(
          l.id,
          "tspan",
          (l?.textStyles || []).map((c) => c.replace("color", "fill"))
        ),
        r.cssRules.length
      );
    });
  }
  let i = "";
  if (e.themeCSS !== void 0)
    if (typeof r.replaceSync == "function") {
      const s = new CSSStyleSheet();
      s.replaceSync(e.themeCSS), i = ba(s) + `
`;
    } else
      i += `${e.themeCSS}
`;
  return i + ba(r);
}, "createCssStyles"), y5 = /* @__PURE__ */ p((e, t) => en(
  av(`${e}{${t}}`),
  hv([
    /* @__PURE__ */ p(function(i, s, o, a) {
      if (i.type === "rule" && Array.isArray(i.props)) {
        if (i.parent && i.parent.type === Qa)
          return;
        i.props = i.props.map((n) => n === e && Array.isArray(i.children) && i.children.every((c) => c.type !== "decl" ? !1 : (/* @__PURE__ */ new Set([
          "font-family",
          "font-size",
          "fill"
        ])).has(c.props)) || // If the prop already starts with the namespace followed by a space or >, then it's already namespaced.
        (n.startsWith(`${e} `) || n.startsWith(`${e}>`)) && // Column combinators are not yet widely supported, it's not yet compressed to `${namespace}||`,
        // so we need to add an extra check for that
        !n.startsWith(`${e} ||`) ? n : `${e} ${n}`);
      } else i.type.startsWith("@") && ([
        ...[
          UB,
          XB,
          Xg,
          ZB,
          "@container",
          "@starting-style"
        ],
        Qa
        // needed for Mermaid's animation feature
      ].includes(i.type) || (P.warn(`Removing unsupported at-rule ${i.type} from CSS`), i.type = Fl));
    }, "addNamespace"),
    lv
  ])
), "compileCSS"), m5 = /* @__PURE__ */ p((e, t, r, i) => {
  const s = g5(e, r), o = o0(
    t,
    s,
    { ...e.themeVariables, theme: e.theme, look: e.look },
    i
  );
  return y5(i, o);
}, "createUserStyles"), x5 = /* @__PURE__ */ p((e = "", t, r) => {
  let i = e;
  return !r && !t && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = er(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode"), C5 = /* @__PURE__ */ p((e = "", t) => {
  const r = t?.viewBox?.baseVal?.height ? t.viewBox.baseVal.height + "px" : l5, i = Wy(`<body style="${c5}">${e}</body>`);
  return `<iframe style="width:${n5};height:${r};${h5}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${u5}">
  ${d5}
</iframe>`;
}, "putIntoIFrame"), lu = /* @__PURE__ */ p((e, t, r, i, s) => {
  const o = e.append("div");
  o.attr("id", r), i && o.attr("style", i);
  const a = o.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", s5);
  return s && a.attr("xmlns:xlink", s), a.append("g"), e;
}, "appendDivSvgG");
function sn(e, t) {
  return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
p(sn, "sandboxedIframe");
var b5 = /* @__PURE__ */ p((e, t, r, i) => {
  e.getElementById(t)?.remove(), e.getElementById(r)?.remove(), e.getElementById(i)?.remove();
}, "removeExistingElements"), k5 = /* @__PURE__ */ p(async function(e, t, r) {
  _o();
  const i = El(t);
  t = i.code;
  const s = It();
  P.debug(s), t.length > (s?.maxTextSize ?? t5) && (t = e5);
  const o = `#${e}`, a = "i" + e, n = "#" + a, l = "d" + e, c = "#" + l, h = /* @__PURE__ */ p(() => {
    const E = Tt(d ? n : c).node();
    E && "remove" in E && E.remove();
  }, "removeTempElements");
  let u = Tt(document.body);
  const d = s.securityLevel === r5, f = s.securityLevel === i5, y = s.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), d) {
      const H = sn(Tt(r), a);
      u = Tt(H.nodes()[0].contentDocument.body), u.node().style.margin = "0";
    } else
      u = Tt(r);
    lu(u, e, l, `font-family: ${y}`, o5);
  } else {
    if (b5(document, e, l, a), d) {
      const H = sn(Tt(document.body), a);
      u = Tt(H.nodes()[0].contentDocument.body), u.node().style.margin = "0";
    } else
      u = Tt("body");
    lu(u, e, l);
  }
  let m, x;
  try {
    m = await rn.fromText(t, { title: i.title });
  } catch (H) {
    if (s.suppressErrorRendering)
      throw h(), H;
    m = await rn.fromText("error"), x = H;
  }
  const C = u.select(c).node(), k = m.type, S = C.firstChild, T = S.firstChild, _ = m.renderer.getClasses?.(t, m), L = m5(s, k, _, o), M = document.createElement("style");
  M.innerHTML = L, S.insertBefore(M, T);
  try {
    await m.renderer.draw(t, e, "11.17.2", m);
  } catch (H) {
    throw s.suppressErrorRendering ? h() : vL.draw(t, e, "11.17.2"), H;
  }
  const v = u.select(`${c} svg`), X = m.db.getAccTitle?.(), z = m.db.getAccDescription?.();
  jy(k, v, X, z);
  const et = (/* @__PURE__ */ p(() => {
    u.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", a5);
    let H = u.select(c).node().innerHTML;
    if (P.debug("config.arrowMarkerAbsolute", s.arrowMarkerAbsolute), H = x5(H, d, Ee(s.arrowMarkerAbsolute)), d) {
      const E = u.select(c + " svg").node();
      H = C5(H, E);
    } else f || (H = zr.sanitize(H, {
      ADD_TAGS: f5,
      ADD_ATTR: p5,
      HTML_INTEGRATION_POINTS: { foreignobject: !0 }
    }));
    return VF(), H;
  }, "serializeSvg"))();
  if (x)
    throw x;
  return h(), {
    diagramType: k,
    svg: et,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function Hy(e = {}) {
  const t = Ht({}, e);
  t?.fontFamily && !t.themeVariables?.fontFamily && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), Dm(t), t?.theme && t.theme in Ne ? t.themeVariables = Ne[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = Ne.default.getThemeVariables(t.themeVariables));
  const r = typeof t == "object" ? Om(t) : yu();
  an(r.logLevel), _o();
}
p(Hy, "initialize");
var Yy = /* @__PURE__ */ p((e, t = {}) => {
  const { code: r } = Al(e);
  return rn.fromText(r, t);
}, "getDiagramFromText");
function jy(e, t, r, i) {
  Iy(t, e), Ry(t, r, i, t.attr("id"));
}
p(jy, "addA11yInfo");
var br = Object.freeze({
  render: k5,
  parse: zy,
  getDiagramFromText: Yy,
  initialize: Hy,
  getConfig: It,
  /**
   * @deprecated This function does nothing. It will be overwritten by the next
   *             call to {@link render} or {@link parse}.
   */
  setConfig: mu,
  getSiteConfig: yu,
  updateSiteConfig: Pm,
  reset: /* @__PURE__ */ p(() => {
    Fs();
  }, "reset"),
  globalReset: /* @__PURE__ */ p(() => {
    Fs(Hr);
  }, "globalReset"),
  defaultConfig: Hr
});
an(It().logLevel);
Fs(It());
var w5 = /* @__PURE__ */ p((e, t, r) => {
  P.warn(e), $n(e) ? (r && r(e.str, e.hash), t.push({ ...e, message: e.str, error: e })) : (r && r(e), e instanceof Error && t.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
}, "handleError"), Uy = /* @__PURE__ */ p(async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await S5(e);
  } catch (t) {
    if ($n(t) && P.error(t.str), Ye.parseError && Ye.parseError(t), !e.suppressErrors)
      throw P.error("Use the suppressErrors option to suppress these errors"), t;
  }
}, "run"), S5 = /* @__PURE__ */ p(async function({ postRenderCallback: e, querySelector: t, nodes: r } = {
  querySelector: ".mermaid"
}) {
  const i = br.getConfig();
  P.debug(`${e ? "" : "No "}Callback function found`);
  let s;
  if (r)
    s = r;
  else if (t)
    s = document.querySelectorAll(t);
  else
    throw new Error("Nodes and querySelector are both undefined");
  P.debug(`Found ${s.length} diagrams`), i?.startOnLoad !== void 0 && (P.debug("Start On Load: " + i?.startOnLoad), br.updateSiteConfig({ startOnLoad: i?.startOnLoad }));
  const o = new Vt.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let a;
  const n = [];
  for (const l of Array.from(s)) {
    if (P.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${o.next()}`;
    a = l.innerHTML, a = tf(Vt.entityDecode(a)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = Vt.detectInit(a);
    h && P.debug("Detected early reinit: ", h);
    try {
      const { svg: u, bindFunctions: d } = await Zy(c, a, l);
      l.innerHTML = u, e && await e(c), d && d(l);
    } catch (u) {
      w5(u, n, Ye.parseError);
    }
  }
  if (n.length > 0)
    throw n[0];
}, "runThrowsErrors"), Gy = /* @__PURE__ */ p(function(e) {
  br.initialize(e);
}, "initialize"), T5 = /* @__PURE__ */ p(async function(e, t, r) {
  P.warn("mermaid.init is deprecated. Please use run instead."), e && Gy(e);
  const i = { postRenderCallback: r, querySelector: ".mermaid" };
  typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await Uy(i);
}, "init"), _5 = /* @__PURE__ */ p(async (e, {
  lazyLoad: t = !0
} = {}) => {
  _o(), ma(...e), t === !1 && await GF();
}, "registerExternalDiagrams"), Xy = /* @__PURE__ */ p(function() {
  if (Ye.startOnLoad) {
    const { startOnLoad: e } = br.getConfig();
    e && Ye.run().catch((t) => P.error("Mermaid failed to initialize", t));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", Xy, !1);
var B5 = /* @__PURE__ */ p(function(e) {
  Ye.parseError = e;
}, "setParseErrorHandler"), Js = [], ga = !1, Vy = /* @__PURE__ */ p(async () => {
  if (!ga) {
    for (ga = !0; Js.length > 0; ) {
      const e = Js.shift();
      if (e)
        try {
          await e();
        } catch (t) {
          P.error("Error executing queue", t);
        }
    }
    ga = !1;
  }
}, "executeQueue"), v5 = /* @__PURE__ */ p(async (e, t) => new Promise((r, i) => {
  const s = /* @__PURE__ */ p(() => new Promise((o, a) => {
    br.parse(e, t).then(
      (n) => {
        o(n), r(n);
      },
      (n) => {
        P.error("Error parsing", n), Ye.parseError?.(n), a(n), i(n);
      }
    );
  }), "performCall");
  Js.push(s), Vy().catch(i);
}), "parse"), Zy = /* @__PURE__ */ p((e, t, r) => new Promise((i, s) => {
  const o = /* @__PURE__ */ p(() => new Promise((a, n) => {
    br.render(e, t, r).then(
      (l) => {
        a(l), i(l);
      },
      (l) => {
        P.error("Error parsing", l), Ye.parseError?.(l), n(l), s(l);
      }
    );
  }), "performCall");
  Js.push(o), Vy().catch(s);
}), "render"), L5 = /* @__PURE__ */ p(() => Object.keys(pr).map((e) => ({
  id: e
})), "getRegisteredDiagramsMetadata"), Ye = {
  startOnLoad: !0,
  mermaidAPI: br,
  parse: v5,
  render: Zy,
  init: T5,
  run: Uy,
  registerExternalDiagrams: _5,
  registerLayoutLoaders: jg,
  initialize: Gy,
  parseError: void 0,
  contentLoaded: Xy,
  setParseErrorHandler: B5,
  detectType: nn,
  registerIconPacks: x1,
  getRegisteredDiagramsMetadata: L5
}, F5 = Ye;
/*! Check if previously processed */
/*!
 * Wait for document loaded before starting the execution
 */
const yM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearLayoutRenderState: hl,
  createCommonLayoutRenderer: Eg,
  default: F5,
  defaultMeasureLayout: cl,
  paintLayoutData: ul
}, Symbol.toStringTag, { value: "Module" }));
export {
  bn as $,
  On as A,
  pu as B,
  nk as C,
  Gb as D,
  pm as E,
  O5 as F,
  w1 as G,
  HB as H,
  Oi as I,
  zB as J,
  $5 as K,
  ao as L,
  Xm as M,
  Bu as N,
  Ui as O,
  Le as P,
  Ob as Q,
  ih as R,
  rh as S,
  Y5 as T,
  bt as U,
  q5 as V,
  z5 as W,
  W5 as X,
  I5 as Y,
  Q1 as Z,
  p as _,
  l0 as a,
  eg as a$,
  H5 as a0,
  R5 as a1,
  Mr as a2,
  U5 as a3,
  j5 as a4,
  N5 as a5,
  Il as a6,
  ko as a7,
  Rb as a8,
  Aa as a9,
  Xt as aA,
  h2 as aB,
  vn as aC,
  _n as aD,
  bs as aE,
  P1 as aF,
  D1 as aG,
  O1 as aH,
  $1 as aI,
  _1 as aJ,
  Fd as aK,
  L1 as aL,
  T1 as aM,
  A1 as aN,
  Md as aO,
  v1 as aP,
  q1 as aQ,
  R1 as aR,
  I1 as aS,
  W1 as aT,
  N1 as aU,
  B1 as aV,
  Ad as aW,
  E1 as aX,
  M1 as aY,
  F1 as aZ,
  Ed as a_,
  ak as aa,
  me as ab,
  q as ac,
  N as ad,
  r0 as ae,
  Lu as af,
  Vp as ag,
  Qn as ah,
  Qh as ai,
  Zi as aj,
  x1 as ak,
  En as al,
  st as am,
  eM as an,
  tM as ao,
  Eg as ap,
  Lt as aq,
  wg as ar,
  at as as,
  J5 as at,
  Qs as au,
  Tg as av,
  fo as aw,
  Jn as ax,
  Qp as ay,
  xw as az,
  n0 as b,
  bo as b$,
  qd as b0,
  uu as b1,
  Db as b2,
  E5 as b3,
  Ce as b4,
  m1 as b5,
  D5 as b6,
  yn as b7,
  Ze as b8,
  Ii as b9,
  Kr as bA,
  je as bB,
  wc as bC,
  Fe as bD,
  qe as bE,
  xT as bF,
  dc as bG,
  Ks as bH,
  We as bI,
  LS as bJ,
  ie as bK,
  yc as bL,
  il as bM,
  CB as bN,
  mo as bO,
  Zs as bP,
  yB as bQ,
  kg as bR,
  _e as bS,
  FS as bT,
  ll as bU,
  sg as bV,
  bB as bW,
  mB as bX,
  nB as bY,
  go as bZ,
  fg as b_,
  Zl as ba,
  pC as bb,
  nt as bc,
  Td as bd,
  re as be,
  nC as bf,
  gn as bg,
  zu as bh,
  Vi as bi,
  ju as bj,
  P5 as bk,
  em as bl,
  tl as bm,
  el as bn,
  nc as bo,
  ng as bp,
  yo as bq,
  ag as br,
  IS as bs,
  lg as bt,
  wT as bu,
  l_ as bv,
  vS as bw,
  PS as bx,
  ST as by,
  xr as bz,
  _t as c,
  pg as c0,
  lB as c1,
  o_ as c2,
  or as c3,
  _i as c4,
  Pr as c5,
  us as c6,
  Yo as c7,
  LB as c8,
  rw as c9,
  yM as ca,
  vu as d,
  Ht as e,
  He as f,
  c0 as g,
  Up as h,
  ne as i,
  Tt as j,
  Gi as k,
  P as l,
  Wd as m,
  u0 as n,
  d0 as o,
  a0 as p,
  G5 as q,
  Je as r,
  h0 as s,
  Ky as t,
  gM as u,
  pM as v,
  ck as w,
  Vt as x,
  It as y,
  p0 as z
};
