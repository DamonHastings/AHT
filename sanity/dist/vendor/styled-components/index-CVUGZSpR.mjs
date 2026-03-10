import y, { createElement as er } from "react";
var E = function() {
  return E = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, E.apply(this, arguments);
};
function oe(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, s = t.length, o; n < s; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var I = "-ms-", ge = "-moz-", w = "-webkit-", kt = "comm", je = "rule", tt = "decl", tr = "@import", rr = "@namespace", Ot = "@keyframes", nr = "@layer", $t = Math.abs, rt = String.fromCharCode, Ke = Object.assign;
function sr(e, t) {
  return k(e, 0) ^ 45 ? (((t << 2 ^ k(e, 0)) << 2 ^ k(e, 1)) << 2 ^ k(e, 2)) << 2 ^ k(e, 3) : 0;
}
function Nt(e) {
  return e.trim();
}
function B(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function l(e, t, r) {
  return e.replace(t, r);
}
function Ie(e, t, r) {
  return e.indexOf(t, r);
}
function k(e, t) {
  return e.charCodeAt(t) | 0;
}
function Z(e, t, r) {
  return e.slice(t, r);
}
function M(e) {
  return e.length;
}
function Tt(e) {
  return e.length;
}
function de(e, t) {
  return t.push(e), e;
}
function or(e, t) {
  return e.map(t).join("");
}
function mt(e, t) {
  return e.filter(function(r) {
    return !B(r, t);
  });
}
var De = 1, ie = 1, jt = 0, j = 0, _ = 0, fe = "";
function Me(e, t, r, n, s, o, i, u) {
  return { value: e, root: t, parent: r, type: n, props: s, children: o, line: De, column: ie, length: i, return: "", siblings: u };
}
function q(e, t) {
  return Ke(Me("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function te(e) {
  for (; e.root; )
    e = q(e.root, { children: [e] });
  de(e, e.siblings);
}
function ir() {
  return _;
}
function ar() {
  return _ = j > 0 ? k(fe, --j) : 0, ie--, _ === 10 && (ie = 1, De--), _;
}
function F() {
  return _ = j < jt ? k(fe, j++) : 0, ie++, _ === 10 && (ie = 1, De++), _;
}
function H() {
  return k(fe, j);
}
function Pe() {
  return j;
}
function Fe(e, t) {
  return Z(fe, e, t);
}
function me(e) {
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
function cr(e) {
  return De = ie = 1, jt = M(fe = e), j = 0, [];
}
function ur(e) {
  return fe = "", e;
}
function Ye(e) {
  return Nt(Fe(j - 1, Ve(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function fr(e) {
  for (; (_ = H()) && _ < 33; )
    F();
  return me(e) > 2 || me(_) > 3 ? "" : " ";
}
function pr(e, t) {
  for (; --t && F() && !(_ < 48 || _ > 102 || _ > 57 && _ < 65 || _ > 70 && _ < 97); )
    ;
  return Fe(e, Pe() + (t < 6 && H() == 32 && F() == 32));
}
function Ve(e) {
  for (; F(); )
    switch (_) {
      // ] ) " '
      case e:
        return j;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ve(_);
        break;
      // (
      case 40:
        e === 41 && Ve(e);
        break;
      // \
      case 92:
        F();
        break;
    }
  return j;
}
function lr(e, t) {
  for (; F() && e + _ !== 57; )
    if (e + _ === 84 && H() === 47)
      break;
  return "/*" + Fe(t, j - 1) + "*" + rt(e === 47 ? e : F());
}
function hr(e) {
  for (; !me(H()); )
    F();
  return Fe(e, j);
}
function dr(e) {
  return ur(Ee("", null, null, null, [""], e = cr(e), 0, [0], e));
}
function Ee(e, t, r, n, s, o, i, u, f) {
  for (var d = 0, h = 0, g = i, S = 0, m = 0, b = 0, x = 1, $ = 1, P = 1, A = 0, c = "", v = s, C = o, p = n, a = c; $; )
    switch (b = A, A = F()) {
      // (
      case 40:
        if (b != 108 && k(a, g - 1) == 58) {
          Ie(a += l(Ye(A), "&", "&\f"), "&\f", $t(d ? u[d - 1] : 0)) != -1 && (P = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        a += Ye(A);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        a += fr(b);
        break;
      // \
      case 92:
        a += pr(Pe() - 1, 7);
        continue;
      // /
      case 47:
        switch (H()) {
          case 42:
          case 47:
            de(gr(lr(F(), Pe()), t, r, f), f), (me(b || 1) == 5 || me(H() || 1) == 5) && M(a) && Z(a, -1, void 0) !== " " && (a += " ");
            break;
          default:
            a += "/";
        }
        break;
      // {
      case 123 * x:
        u[d++] = M(a) * P;
      // } ; \0
      case 125 * x:
      case 59:
      case 0:
        switch (A) {
          // \0 }
          case 0:
          case 125:
            $ = 0;
          // ;
          case 59 + h:
            P == -1 && (a = l(a, /\f/g, "")), m > 0 && (M(a) - g || x === 0 && b === 47) && de(m > 32 ? vt(a + ";", n, r, g - 1, f) : vt(l(a, " ", "") + ";", n, r, g - 2, f), f);
            break;
          // @ ;
          case 59:
            a += ";";
          // { rule/at-rule
          default:
            if (de(p = yt(a, t, r, d, h, s, u, c, v = [], C = [], g, o), o), A === 123)
              if (h === 0)
                Ee(a, t, p, p, v, o, g, u, C);
              else {
                switch (S) {
                  // c(ontainer)
                  case 99:
                    if (k(a, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (k(a, 2) === 97) break;
                  default:
                    h = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                h ? Ee(e, p, p, n && de(yt(e, p, p, 0, 0, s, u, c, s, v = [], g, C), C), s, C, g, u, n ? v : C) : Ee(a, p, p, p, [""], C, 0, u, C);
              }
        }
        d = h = m = 0, x = P = 1, c = a = "", g = i;
        break;
      // :
      case 58:
        g = 1 + M(a), m = b;
      default:
        if (x < 1) {
          if (A == 123)
            --x;
          else if (A == 125 && x++ == 0 && ar() == 125)
            continue;
        }
        switch (a += rt(A), A * x) {
          // &
          case 38:
            P = h > 0 ? 1 : (a += "\f", -1);
            break;
          // ,
          case 44:
            u[d++] = (M(a) - 1) * P, P = 1;
            break;
          // @
          case 64:
            H() === 45 && (a += Ye(F())), S = H(), h = g = M(c = a += hr(Pe())), A++;
            break;
          // -
          case 45:
            b === 45 && M(a) == 2 && (x = 0);
        }
    }
  return o;
}
function yt(e, t, r, n, s, o, i, u, f, d, h, g) {
  for (var S = s - 1, m = s === 0 ? o : [""], b = Tt(m), x = 0, $ = 0, P = 0; x < n; ++x)
    for (var A = 0, c = Z(e, S + 1, S = $t($ = i[x])), v = e; A < b; ++A)
      (v = Nt($ > 0 ? m[A] + " " + c : l(c, /&\f/g, m[A]))) && (f[P++] = v);
  return Me(e, t, r, s === 0 ? je : u, f, d, h, g);
}
function gr(e, t, r, n) {
  return Me(e, t, r, kt, rt(ir()), Z(e, 2, -2), 0, n);
}
function vt(e, t, r, n, s) {
  return Me(e, t, r, tt, Z(e, 0, n), Z(e, n + 1, -1), n, s);
}
function Dt(e, t, r) {
  switch (sr(e, t)) {
    // color-adjust
    case 5103:
      return w + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return w + e + e;
    // mask-composite
    case 4855:
      return w + e.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + e;
    // tab-size
    case 4789:
      return ge + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return w + e + ge + e + I + e + e;
    // writing-mode
    case 5936:
      switch (k(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return w + e + I + l(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return w + e + I + l(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return w + e + I + l(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return w + e + I + e + e;
    // order
    case 6165:
      return w + e + I + "flex-" + e + e;
    // align-items
    case 5187:
      return w + e + l(e, /(\w+).+(:[^]+)/, w + "box-$1$2" + I + "flex-$1$2") + e;
    // align-self
    case 5443:
      return w + e + I + "flex-item-" + l(e, /flex-|-self/g, "") + (B(e, /flex-|baseline/) ? "" : I + "grid-row-" + l(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return w + e + I + "flex-line-pack" + l(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return w + e + I + l(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return w + e + I + l(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return w + "box-" + l(e, "-grow", "") + w + e + I + l(e, "grow", "positive") + e;
    // transition
    case 4554:
      return w + l(e, /([^-])(transform)/g, "$1" + w + "$2") + e;
    // cursor
    case 6187:
      return l(l(l(e, /(zoom-|grab)/, w + "$1"), /(image-set)/, w + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return l(e, /(image-set\([^]*)/, w + "$1$`$1");
    // justify-content
    case 4968:
      return l(l(e, /(.+:)(flex-)?(.*)/, w + "box-pack:$3" + I + "flex-pack:$3"), /space-between/, "justify") + w + e + e;
    // justify-self
    case 4200:
      if (!B(e, /flex-|baseline/)) return I + "grid-column-align" + Z(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return I + l(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, s) {
        return t = s, B(n.props, /grid-\w+-end/);
      }) ? ~Ie(e + (r = r[t].value), "span", 0) ? e : I + l(e, "-start", "") + e + I + "grid-row-span:" + (~Ie(r, "span", 0) ? B(r, /\d+/) : +B(r, /\d+/) - +B(e, /\d+/)) + ";" : I + l(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return B(n.props, /grid-\w+-start/);
      }) ? e : I + l(l(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return l(e, /(.+)-inline(.+)/, w + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (M(e) - 1 - t > 6)
        switch (k(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (k(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return l(e, /(.+:)(.+)-([^]+)/, "$1" + w + "$2-$3$1" + ge + (k(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Ie(e, "stretch", 0) ? Dt(l(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return l(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, s, o, i, u, f, d) {
        return I + s + ":" + o + d + (i ? I + s + "-span:" + (u ? f : +f - +o) + d : "") + e;
      });
    // position: sticky
    case 4949:
      if (k(e, t + 6) === 121)
        return l(e, ":", ":" + w) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (k(e, k(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return l(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + w + (k(e, 14) === 45 ? "inline-" : "") + "box$3$1" + w + "$2$3$1" + I + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return l(e, ":", ":" + I) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return l(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function ke(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function mr(e, t, r, n) {
  switch (e.type) {
    case nr:
      if (e.children.length) break;
    case tr:
    case rr:
    case tt:
      return e.return = e.return || e.value;
    case kt:
      return "";
    case Ot:
      return e.return = e.value + "{" + ke(e.children, n) + "}";
    case je:
      if (!M(e.value = e.props.join(","))) return "";
  }
  return M(r = ke(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function yr(e) {
  var t = Tt(e);
  return function(r, n, s, o) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](r, n, s, o) || "";
    return i;
  };
}
function vr(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Sr(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case tt:
        e.return = Dt(e.value, e.length, r);
        return;
      case Ot:
        return ke([q(e, { value: l(e.value, "@", "@" + w) })], n);
      case je:
        if (e.length)
          return or(r = e.props, function(s) {
            switch (B(s, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                te(q(e, { props: [l(s, /:(read-\w+)/, ":" + ge + "$1")] })), te(q(e, { props: [s] })), Ke(e, { props: mt(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                te(q(e, { props: [l(s, /:(plac\w+)/, ":" + w + "input-$1")] })), te(q(e, { props: [l(s, /:(plac\w+)/, ":" + ge + "$1")] })), te(q(e, { props: [l(s, /:(plac\w+)/, I + "input-$1")] })), te(q(e, { props: [s] })), Ke(e, { props: mt(r, n) });
                break;
            }
            return "";
          });
    }
}
var br = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, K = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Mt = "active", Oe = "data-styled-version", ae = "6.3.5", nt = `/*!sc*/
`, ye = typeof window < "u" && typeof document < "u", W = y.createContext === void 0, wr = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Cr = {}, ze = Object.freeze([]), ce = Object.freeze({});
function st(e, t, r) {
  return r === void 0 && (r = ce), e.theme !== r.theme && e.theme || t || r.theme;
}
var Ft = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]), xr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ar = /(^-|-$)/g;
function St(e) {
  return e.replace(xr, "-").replace(Ar, "");
}
var Ir = /(a)(d)/gi, bt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $e(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = bt(t % 52) + r;
  return (bt(t % 52) + r).replace(Ir, "$1-$2");
}
var qe, re = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, ot = function(e) {
  return re(5381, e);
};
function it(e) {
  return $e(ot(e) >>> 0);
}
function zt(e) {
  return e.displayName || e.name || "Component";
}
function He(e) {
  return typeof e == "string" && !0;
}
var Gt = typeof Symbol == "function" && Symbol.for, Lt = Gt ? Symbol.for("react.memo") : 60115, Pr = Gt ? Symbol.for("react.forward_ref") : 60112, Er = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, _r = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Bt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Rr = ((qe = {})[Pr] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, qe[Lt] = Bt, qe);
function wt(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Lt ? Bt : "$$typeof" in e ? Rr[e.$$typeof] : Er;
  var t;
}
var kr = Object.defineProperty, Or = Object.getOwnPropertyNames, Ct = Object.getOwnPropertySymbols, $r = Object.getOwnPropertyDescriptor, Nr = Object.getPrototypeOf, xt = Object.prototype;
function at(e, t, r) {
  if (typeof t != "string") {
    if (xt) {
      var n = Nr(t);
      n && n !== xt && at(e, n, r);
    }
    var s = Or(t);
    Ct && (s = s.concat(Ct(t)));
    for (var o = wt(e), i = wt(t), u = 0; u < s.length; ++u) {
      var f = s[u];
      if (!(f in _r || r && r[f] || i && f in i || o && f in o)) {
        var d = $r(t, f);
        try {
          kr(e, f, d);
        } catch {
        }
      }
    }
  }
  return e;
}
function J(e) {
  return typeof e == "function";
}
function ct(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function V(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ve(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += t ? t + e[n] : e[n];
  return r;
}
function Se(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ze(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Se(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = Ze(e[n], t[n]);
  else if (Se(t)) for (var n in t) e[n] = Ze(e[n], t[n]);
  return e;
}
function ut(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function T(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""));
}
var Tr = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, s = n.length, o = s; t >= o; ) if ((o <<= 1) < 0) throw T(16, "".concat(t));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
      for (var i = s; i < o; i++) this.groupSizes[i] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), f = (i = 0, r.length); i < f; i++) this.tag.insertRule(u, r[i]) && (this.groupSizes[t]++, u++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), s = n + r;
      this.groupSizes[t] = 0;
      for (var o = n; o < s; o++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], s = this.indexOfGroup(t), o = s + n, i = s; i < o; i++) r += "".concat(this.tag.getRule(i)).concat(nt);
    return r;
  }, e;
}(), _e = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), Re = 1, ne = function(e) {
  if (_e.has(e)) return _e.get(e);
  for (; Ne.has(Re); ) Re++;
  var t = Re++;
  return _e.set(e, t), Ne.set(t, e), t;
}, jr = function(e, t) {
  Re = t + 1, _e.set(e, t), Ne.set(t, e);
}, Dr = "style[".concat(K, "][").concat(Oe, '="').concat(ae, '"]'), Mr = new RegExp("^".concat(K, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Fr = function(e, t, r) {
  for (var n, s = r.split(","), o = 0, i = s.length; o < i; o++) (n = s[o]) && e.registerName(t, n);
}, zr = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(nt), s = [], o = 0, i = n.length; o < i; o++) {
    var u = n[o].trim();
    if (u) {
      var f = u.match(Mr);
      if (f) {
        var d = 0 | parseInt(f[1], 10), h = f[2];
        d !== 0 && (jr(h, d), Fr(e, h, f[3]), e.getTag().insertRules(d, s)), s.length = 0;
      } else s.push(u);
    }
  }
}, At = function(e) {
  for (var t = document.querySelectorAll(Dr), r = 0, n = t.length; r < n; r++) {
    var s = t[r];
    s && s.getAttribute(K) !== Mt && (zr(e, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
function Je() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Wt = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), s = function(u) {
    var f = Array.from(u.querySelectorAll("style[".concat(K, "]")));
    return f[f.length - 1];
  }(r), o = s !== void 0 ? s.nextSibling : null;
  n.setAttribute(K, Mt), n.setAttribute(Oe, ae);
  var i = Je();
  return i && n.setAttribute("nonce", i), r.insertBefore(n, o), n;
}, Gr = function() {
  function e(t) {
    this.element = Wt(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, s = 0, o = n.length; s < o; s++) {
        var i = n[s];
        if (i.ownerNode === r) return i;
      }
      throw T(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), Lr = function() {
  function e(t) {
    this.element = Wt(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Br = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), It = ye, Wr = { isServer: !ye, useCSSOMInjection: !wr }, ue = function() {
  function e(t, r, n) {
    t === void 0 && (t = ce), r === void 0 && (r = {});
    var s = this;
    this.options = E(E({}, Wr), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && ye && It && (It = !1, At(this)), ut(this, function() {
      return function(o) {
        for (var i = o.getTag(), u = i.length, f = "", d = function(g) {
          var S = function(P) {
            return Ne.get(P);
          }(g);
          if (S === void 0) return "continue";
          var m = o.names.get(S), b = i.getGroup(g);
          if (m === void 0 || !m.size || b.length === 0) return "continue";
          var x = "".concat(K, ".g").concat(g, '[id="').concat(S, '"]'), $ = "";
          m !== void 0 && m.forEach(function(P) {
            P.length > 0 && ($ += "".concat(P, ","));
          }), f += "".concat(b).concat(x, '{content:"').concat($, '"}').concat(nt);
        }, h = 0; h < u; h++) d(h);
        return f;
      }(s);
    });
  }
  return e.registerId = function(t) {
    return ne(t);
  }, e.prototype.rehydrate = function() {
    !this.server && ye && At(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(E(E({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, s = r.target;
      return r.isServer ? new Br(s) : n ? new Gr(s) : new Lr(s);
    }(this.options), new Tr(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (ne(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(ne(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(ne(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Yr = /&/g, se = 47;
function Pt(e) {
  if (e.indexOf("}") === -1) return !1;
  for (var t = e.length, r = 0, n = 0, s = !1, o = 0; o < t; o++) {
    var i = e.charCodeAt(o);
    if (n !== 0 || s || i !== se || e.charCodeAt(o + 1) !== 42) if (s) i === 42 && e.charCodeAt(o + 1) === se && (s = !1, o++);
    else if (i !== 34 && i !== 39 || o !== 0 && e.charCodeAt(o - 1) === 92) {
      if (n === 0) {
        if (i === 123) r++;
        else if (i === 125 && --r < 0) return !0;
      }
    } else n === 0 ? n = i : n === i && (n = 0);
    else s = !0, o++;
  }
  return r !== 0 || n !== 0;
}
function Yt(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Yt(r.children, t)), r;
  });
}
function qt(e) {
  var t, r, n, s = e === void 0 ? ce : e, o = s.options, i = o === void 0 ? ce : o, u = s.plugins, f = u === void 0 ? ze : u, d = function(S, m, b) {
    return b.startsWith(r) && b.endsWith(r) && b.replaceAll(r, "").length > 0 ? ".".concat(t) : S;
  }, h = f.slice();
  h.push(function(S) {
    S.type === je && S.value.includes("&") && (S.props[0] = S.props[0].replace(Yr, r).replace(n, d));
  }), i.prefix && h.push(Sr), h.push(mr);
  var g = function(S, m, b, x) {
    m === void 0 && (m = ""), b === void 0 && (b = ""), x === void 0 && (x = "&"), t = x, r = m, n = new RegExp("\\".concat(r, "\\b"), "g");
    var $ = function(c) {
      if (!Pt(c)) return c;
      for (var v = c.length, C = "", p = 0, a = 0, R = 0, N = !1, O = 0; O < v; O++) {
        var D = c.charCodeAt(O);
        if (R !== 0 || N || D !== se || c.charCodeAt(O + 1) !== 42) if (N) D === 42 && c.charCodeAt(O + 1) === se && (N = !1, O++);
        else if (D !== 34 && D !== 39 || O !== 0 && c.charCodeAt(O - 1) === 92) {
          if (R === 0) if (D === 123) a++;
          else if (D === 125) {
            if (--a < 0) {
              for (var z = O + 1; z < v; ) {
                var pe = c.charCodeAt(z);
                if (pe === 59 || pe === 10) break;
                z++;
              }
              z < v && c.charCodeAt(z) === 59 && z++, a = 0, O = z - 1, p = z;
              continue;
            }
            a === 0 && (C += c.substring(p, O + 1), p = O + 1);
          } else D === 59 && a === 0 && (C += c.substring(p, O + 1), p = O + 1);
        } else R === 0 ? R = D : R === D && (R = 0);
        else N = !0, O++;
      }
      if (p < v) {
        var be = c.substring(p);
        Pt(be) || (C += be);
      }
      return C;
    }(function(c) {
      if (c.indexOf("//") === -1) return c;
      for (var v = c.length, C = [], p = 0, a = 0, R = 0; a < v; ) {
        var N = c.charCodeAt(a);
        if (N !== 34 && N !== 39 || a !== 0 && c.charCodeAt(a - 1) === 92) if (R === 0) if (N !== se || c.charCodeAt(a + 1) !== se) a++;
        else {
          for (a > p && C.push(c.substring(p, a)); a < v && c.charCodeAt(a) !== 10; ) a++;
          p = a;
        }
        else a++;
        else R === 0 ? R = N : R === N && (R = 0), a++;
      }
      return p === 0 ? c : (p < v && C.push(c.substring(p)), C.join(""));
    }(S)), P = dr(b || m ? "".concat(b, " ").concat(m, " { ").concat($, " }") : $);
    i.namespace && (P = Yt(P, i.namespace));
    var A = [];
    return ke(P, yr(h.concat(vr(function(c) {
      return A.push(c);
    })))), A;
  };
  return g.hash = f.length ? f.reduce(function(S, m) {
    return m.name || T(15), re(S, m.name);
  }, 5381).toString() : "", g;
}
var Ht = new ue(), Qe = qt(), Xe = { shouldForwardProp: void 0, styleSheet: Ht, stylis: Qe }, ft = W ? { Provider: function(e) {
  return e.children;
}, Consumer: function(e) {
  return (0, e.children)(Xe);
} } : y.createContext(Xe), rn = ft.Consumer, qr = W ? { Provider: function(e) {
  return e.children;
} } : y.createContext(void 0);
function Te() {
  return !W && y.useContext ? y.useContext(ft) : Xe;
}
function Hr(e) {
  if (W || !y.useMemo) return e.children;
  var t = Te().styleSheet, r = y.useMemo(function() {
    var o = t;
    return e.sheet ? o = e.sheet : e.target && (o = o.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (o = o.reconstructWithOptions({ useCSSOMInjection: !1 })), o;
  }, [e.disableCSSOMInjection, e.sheet, e.target, t]), n = y.useMemo(function() {
    return qt({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: e.stylisPlugins });
  }, [e.enableVendorPrefixes, e.namespace, e.stylisPlugins]), s = y.useMemo(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: r, stylis: n };
  }, [e.shouldForwardProp, r, n]);
  return y.createElement(ft.Provider, { value: s }, y.createElement(qr.Provider, { value: n }, e.children));
}
var Ut = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(s, o) {
      o === void 0 && (o = Qe);
      var i = n.name + o.hash;
      s.hasNameForId(n.id, i) || s.insertRules(n.id, i, o(n.rules, i, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, ut(this, function() {
      throw T(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Qe), this.name + t.hash;
  }, e;
}();
function Ur(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || e in br || e.startsWith("--") ? String(t).trim() : "".concat(t, "px");
}
var Kr = function(e) {
  return e >= "A" && e <= "Z";
};
function Et(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    Kr(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Kt = function(e) {
  return e == null || e === !1 || e === "";
}, Vt = function(e) {
  var t = [];
  for (var r in e) {
    var n = e[r];
    e.hasOwnProperty(r) && !Kt(n) && (Array.isArray(n) && n.isCss || J(n) ? t.push("".concat(Et(r), ":"), n, ";") : Se(n) ? t.push.apply(t, oe(oe(["".concat(r, " {")], Vt(n), !1), ["}"], !1)) : t.push("".concat(Et(r), ": ").concat(Ur(r, n), ";")));
  }
  return t;
};
function U(e, t, r, n) {
  if (Kt(e)) return [];
  if (ct(e)) return [".".concat(e.styledComponentId)];
  if (J(e)) {
    if (!J(o = e) || o.prototype && o.prototype.isReactComponent || !t) return [e];
    var s = e(t);
    return U(s, t, r, n);
  }
  var o;
  return e instanceof Ut ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Se(e) ? Vt(e) : Array.isArray(e) ? Array.prototype.concat.apply(ze, e.map(function(i) {
    return U(i, t, r, n);
  })) : [e.toString()];
}
function Zt(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (J(r) && !ct(r)) return !1;
  }
  return !0;
}
var Vr = ot(ae), Zr = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Zt(t), this.componentId = r, this.baseHash = re(Vr, r), this.baseStyle = n, ue.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n).className : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) s = V(s, this.staticRulesId);
    else {
      var o = ve(U(this.rules, t, r, n)), i = $e(re(this.baseHash, o) >>> 0);
      if (!r.hasNameForId(this.componentId, i)) {
        var u = n(o, ".".concat(i), void 0, this.componentId);
        r.insertRules(this.componentId, i, u);
      }
      s = V(s, i), this.staticRulesId = i;
    }
    else {
      for (var f = re(this.baseHash, n.hash), d = "", h = 0; h < this.rules.length; h++) {
        var g = this.rules[h];
        if (typeof g == "string") d += g;
        else if (g) {
          var S = ve(U(g, t, r, n));
          f = re(f, S + h), d += S;
        }
      }
      if (d) {
        var m = $e(f >>> 0);
        if (!r.hasNameForId(this.componentId, m)) {
          var b = n(d, ".".concat(m), void 0, this.componentId);
          r.insertRules(this.componentId, m, b);
        }
        s = V(s, m);
      }
    }
    return { className: s, css: typeof window > "u" ? r.getTag().getGroup(ne(this.componentId)) : "" };
  }, e;
}(), Q = W ? { Provider: function(e) {
  return e.children;
}, Consumer: function(e) {
  return (0, e.children)(void 0);
} } : y.createContext(void 0), nn = Q.Consumer;
function sn() {
  var e = !W && y.useContext ? y.useContext(Q) : void 0;
  if (!e) throw T(18);
  return e;
}
function on(e) {
  if (W || !y.useContext || !y.useMemo) return e.children;
  var t = y.useContext(Q), r = y.useMemo(function() {
    return function(n, s) {
      if (!n) throw T(14);
      if (J(n)) {
        var o = n(s);
        return o;
      }
      if (Array.isArray(n) || typeof n != "object") throw T(8);
      return s ? E(E({}, s), n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? y.createElement(Q.Provider, { value: r }, e.children) : null;
}
var Ue = {};
function Jr(e, t, r) {
  var n = ct(e), s = e, o = !He(e), i = t.attrs, u = i === void 0 ? ze : i, f = t.componentId, d = f === void 0 ? function(v, C) {
    var p = typeof v != "string" ? "sc" : St(v);
    Ue[p] = (Ue[p] || 0) + 1;
    var a = "".concat(p, "-").concat(it(ae + p + Ue[p]));
    return C ? "".concat(C, "-").concat(a) : a;
  }(t.displayName, t.parentComponentId) : f, h = t.displayName, g = h === void 0 ? function(v) {
    return He(v) ? "styled.".concat(v) : "Styled(".concat(zt(v), ")");
  }(e) : h, S = t.displayName && t.componentId ? "".concat(St(t.displayName), "-").concat(t.componentId) : t.componentId || d, m = n && s.attrs ? s.attrs.concat(u).filter(Boolean) : u, b = t.shouldForwardProp;
  if (n && s.shouldForwardProp) {
    var x = s.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      b = function(v, C) {
        return x(v, C) && $(v, C);
      };
    } else b = x;
  }
  var P = new Zr(r, S, n ? s.componentStyle : void 0);
  function A(v, C) {
    return function(p, a, R) {
      var N = p.attrs, O = p.componentStyle, D = p.defaultProps, z = p.foldedComponentIds, pe = p.styledComponentId, be = p.target, Qt = y.useContext ? y.useContext(Q) : void 0, Xt = Te(), Ge = p.shouldForwardProp || Xt.shouldForwardProp, lt = st(a, Qt, D) || ce, G = function(Ce, X, xe) {
        for (var he, L = E(E({}, X), { className: void 0, theme: xe }), We = 0; We < Ce.length; We += 1) {
          var Ae = J(he = Ce[We]) ? he(L) : he;
          for (var ee in Ae) ee === "className" ? L.className = V(L.className, Ae[ee]) : ee === "style" ? L.style = E(E({}, L.style), Ae[ee]) : L[ee] = Ae[ee];
        }
        return "className" in X && typeof X.className == "string" && (L.className = V(L.className, X.className)), L;
      }(N, a, lt), we = G.as || be, le = {};
      for (var Y in G) G[Y] === void 0 || Y[0] === "$" || Y === "as" || Y === "theme" && G.theme === lt || (Y === "forwardedAs" ? le.as = G.forwardedAs : Ge && !Ge(Y, we) || (le[Y] = G[Y]));
      var ht = function(Ce, X) {
        var xe = Te(), he = Ce.generateAndInjectStyles(X, xe.styleSheet, xe.stylis);
        return he;
      }(O, G), Le = ht.className, dt = ht.css, Be = V(z, pe);
      Le && (Be += " " + Le), G.className && (Be += " " + G.className), le[He(we) && !Ft.has(we) ? "class" : "className"] = Be, R && (le.ref = R);
      var gt = er(we, le);
      return W && dt ? y.createElement(y.Fragment, null, y.createElement("style", { precedence: "styled-components", href: "sc-".concat(pe, "-").concat(Le), children: dt }), gt) : gt;
    }(c, v, C);
  }
  A.displayName = g;
  var c = y.forwardRef(A);
  return c.attrs = m, c.componentStyle = P, c.displayName = g, c.shouldForwardProp = b, c.foldedComponentIds = n ? V(s.foldedComponentIds, s.styledComponentId) : "", c.styledComponentId = S, c.target = n ? s.target : e, Object.defineProperty(c, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(v) {
    this._foldedDefaultProps = n ? function(C) {
      for (var p = [], a = 1; a < arguments.length; a++) p[a - 1] = arguments[a];
      for (var R = 0, N = p; R < N.length; R++) Ze(C, N[R], !0);
      return C;
    }({}, s.defaultProps, v) : v;
  } }), ut(c, function() {
    return ".".concat(c.styledComponentId);
  }), o && at(c, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), c;
}
function _t(e, t) {
  for (var r = [e[0]], n = 0, s = t.length; n < s; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var Rt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function pt(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (J(e) || Se(e)) return Rt(U(_t(ze, oe([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? U(n) : Rt(U(_t(n, t)));
}
function et(e, t, r) {
  if (r === void 0 && (r = ce), !t) throw T(1, t);
  var n = function(s) {
    for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
    return e(t, r, pt.apply(void 0, oe([s], o, !1)));
  };
  return n.attrs = function(s) {
    return et(e, t, E(E({}, r), { attrs: Array.prototype.concat(r.attrs, s).filter(Boolean) }));
  }, n.withConfig = function(s) {
    return et(e, t, E(E({}, r), s));
  }, n;
}
var Jt = function(e) {
  return et(Jr, e);
}, Qr = Jt;
Ft.forEach(function(e) {
  Qr[e] = Jt(e);
});
var Xr = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Zt(t), ue.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, r, n, s) {
    var o = s(ve(U(this.rules, r, n, s)), ""), i = this.componentId + t;
    n.insertRules(i, i, o);
  }, e.prototype.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, r, n, s) {
    t > 2 && ue.registerId(this.componentId + t), this.removeStyles(t, n), this.createStyles(t, r, n, s);
  }, e;
}();
function an(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = pt.apply(void 0, oe([e], t, !1)), s = "sc-global-".concat(it(JSON.stringify(n))), o = new Xr(n, s), i = /* @__PURE__ */ new WeakMap(), u = function(f) {
    var d = Te(), h = y.useContext ? y.useContext(Q) : void 0, g = i.get(d.styleSheet);
    if (g === void 0 && (g = d.styleSheet.allocateGSInstance(s), i.set(d.styleSheet, g)), (typeof window > "u" || !d.styleSheet.server) && function($, P, A, c, v) {
      if (o.isStatic) o.renderStyles($, Cr, A, v);
      else {
        var C = E(E({}, P), { theme: st(P, c, u.defaultProps) });
        o.renderStyles($, C, A, v);
      }
    }(g, f, d.styleSheet, h, d.stylis), W) {
      var S = s + g, m = typeof window > "u" ? d.styleSheet.getTag().getGroup(ne(S)) : "";
      if (m) {
        var b = $e(ot(m) >>> 0), x = "sc-global-".concat(s, "-").concat(g, "-").concat(b);
        return y.createElement("style", { key: x, "data-styled-global": s, precedence: "styled-components", href: x, children: m });
      }
    }
    return null;
  };
  return y.memo(u);
}
function cn(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = ve(pt.apply(void 0, oe([e], t, !1))), s = it(n);
  return new Ut(s, n);
}
function un(e) {
  var t = y.forwardRef(function(r, n) {
    var s = st(r, y.useContext ? y.useContext(Q) : void 0, e.defaultProps);
    return y.createElement(e, E(E({}, r), { theme: s, ref: n }));
  });
  return t.displayName = "WithTheme(".concat(zt(e), ")"), at(t, e);
}
var en = /^\s*<\/[a-z]/i, fn = function() {
  function e() {
    var t = this;
    this._emitSheetCSS = function() {
      var r = t.instance.toString();
      if (!r) return "";
      var n = Je(), s = ve([n && 'nonce="'.concat(n, '"'), "".concat(K, '="true"'), "".concat(Oe, '="').concat(ae, '"')].filter(Boolean), " ");
      return "<style ".concat(s, ">").concat(r, "</style>");
    }, this.getStyleTags = function() {
      if (t.sealed) throw T(2);
      return t._emitSheetCSS();
    }, this.getStyleElement = function() {
      var r;
      if (t.sealed) throw T(2);
      var n = t.instance.toString();
      if (!n) return [];
      var s = ((r = {})[K] = "", r[Oe] = ae, r.dangerouslySetInnerHTML = { __html: n }, r), o = Je();
      return o && (s.nonce = o), [y.createElement("style", E({}, s, { key: "sc-0-0" }))];
    }, this.seal = function() {
      t.sealed = !0;
    }, this.instance = new ue({ isServer: !0 }), this.sealed = !1;
  }
  return e.prototype.collectStyles = function(t) {
    if (this.sealed) throw T(2);
    return y.createElement(Hr, { sheet: this.instance }, t);
  }, e.prototype.interleaveWithNodeStream = function(t) {
    if (ye) throw T(3);
    if (this.sealed) throw T(2);
    this.seal();
    var r = require("stream").Transform, n = this.instance, s = this._emitSheetCSS, o = new r({ transform: function(u, f, d) {
      var h = u.toString(), g = s();
      if (n.clearTag(), en.test(h)) {
        var S = h.indexOf(">") + 1, m = h.slice(0, S), b = h.slice(S);
        this.push(m + g + b);
      } else this.push(g + h);
      d();
    } });
    if ("on" in t && typeof t.on == "function" && "pipe" in t) {
      var i = t;
      return i.on("error", function(u) {
        o.emit("error", u);
      }), i.pipe(o);
    }
    if ("pipe" in t && typeof t.pipe == "function") return t.pipe(o);
    throw new Error("Unsupported stream type");
  }, e;
}(), pn = { StyleSheet: ue, mainSheet: Ht };
export {
  fn as ServerStyleSheet,
  rn as StyleSheetConsumer,
  ft as StyleSheetContext,
  Hr as StyleSheetManager,
  nn as ThemeConsumer,
  Q as ThemeContext,
  on as ThemeProvider,
  pn as __PRIVATE__,
  an as createGlobalStyle,
  pt as css,
  Qr as default,
  ct as isStyledComponent,
  cn as keyframes,
  Qr as styled,
  sn as useTheme,
  ae as version,
  un as withTheme
};
