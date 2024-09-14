var ni = Object.defineProperty;
var Xr = (t) => {
  throw TypeError(t);
};
var Jr = (t, e) => {
  for (var r in e) ni(t, r, { get: e[r], enumerable: !0 });
};
var Zr = (t, e, r) => e.has(t) || Xr("Cannot " + r);
var Q = (t, e, r) => (
    Zr(t, e, "read from private field"), r ? r.call(t) : e.get(t)
  ),
  en = (t, e, r) =>
    e.has(t)
      ? Xr("Cannot add the same private member more than once")
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  tn = (t, e, r, n) => (
    Zr(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r
  );
var Yr = {};
Jr(Yr, {
  languages: () => Ds,
  options: () => ys,
  parsers: () => Gr,
  printers: () => $o,
});
var si = (t, e, r, n) => {
    if (!(t && e == null))
      return e.replaceAll
        ? e.replaceAll(r, n)
        : r.global
          ? e.replace(r, n)
          : e.split(r).join(n);
  },
  w = si;
var ke = "string",
  Be = "array",
  Le = "cursor",
  ce = "indent",
  pe = "align",
  Fe = "trim",
  te = "group",
  he = "fill",
  me = "if-break",
  fe = "indent-if-break",
  Ne = "line-suffix",
  Pe = "line-suffix-boundary",
  Y = "line",
  Ie = "label",
  de = "break-parent",
  St = new Set([Le, ce, pe, Fe, te, he, me, fe, Ne, Pe, Y, Ie, de]);
function ii(t) {
  if (typeof t == "string") return ke;
  if (Array.isArray(t)) return Be;
  if (!t) return;
  let { type: e } = t;
  if (St.has(e)) return e;
}
var Re = ii;
var ai = (t) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(t);
function oi(t) {
  let e = t === null ? "null" : typeof t;
  if (e !== "string" && e !== "object")
    return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
  if (Re(t)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(t);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = ai([...St].map((s) => `'${s}'`));
  return `Unexpected doc.type '${t.type}'.
Expected it to be ${n}.`;
}
var lr = class extends Error {
    name = "InvalidDocError";
    constructor(e) {
      super(oi(e)), (this.doc = e);
    }
  },
  _t = lr;
var rn = () => {},
  re = rn,
  Et = rn;
function k(t) {
  return re(t), { type: ce, contents: t };
}
function nn(t, e) {
  return re(e), { type: pe, contents: e, n: t };
}
function _(t, e = {}) {
  return (
    re(t),
    Et(e.expandedStates, !0),
    {
      type: te,
      id: e.id,
      contents: t,
      break: !!e.shouldBreak,
      expandedStates: e.expandedStates,
    }
  );
}
function sn(t) {
  return nn(Number.NEGATIVE_INFINITY, t);
}
function an(t) {
  return nn({ type: "root" }, t);
}
function At(t) {
  return Et(t), { type: he, parts: t };
}
function ge(t, e = "", r = {}) {
  return (
    re(t),
    e !== "" && re(e),
    { type: me, breakContents: t, flatContents: e, groupId: r.groupId }
  );
}
function on(t, e) {
  return re(t), { type: fe, contents: t, groupId: e.groupId, negate: e.negate };
}
var ne = { type: de };
var ui = { type: Y, hard: !0 },
  li = { type: Y, hard: !0, literal: !0 },
  E = { type: Y },
  v = { type: Y, soft: !0 },
  S = [ui, ne],
  un = [li, ne];
function q(t, e) {
  re(t), Et(e);
  let r = [];
  for (let n = 0; n < e.length; n++) n !== 0 && r.push(t), r.push(e[n]);
  return r;
}
var ci = (t, e, r) => {
    if (!(t && e == null))
      return Array.isArray(e) || typeof e == "string"
        ? e[r < 0 ? e.length + r : r]
        : e.at(r);
  },
  X = ci;
function Dt(t, e) {
  if (typeof t == "string") return e(t);
  let r = new Map();
  return n(t);
  function n(i) {
    if (r.has(i)) return r.get(i);
    let a = s(i);
    return r.set(i, a), a;
  }
  function s(i) {
    switch (Re(i)) {
      case Be:
        return e(i.map(n));
      case he:
        return e({ ...i, parts: i.parts.map(n) });
      case me:
        return e({
          ...i,
          breakContents: n(i.breakContents),
          flatContents: n(i.flatContents),
        });
      case te: {
        let { expandedStates: a, contents: o } = i;
        return (
          a ? ((a = a.map(n)), (o = a[0])) : (o = n(o)),
          e({ ...i, contents: o, expandedStates: a })
        );
      }
      case pe:
      case ce:
      case fe:
      case Ie:
      case Ne:
        return e({ ...i, contents: n(i.contents) });
      case ke:
      case Le:
      case Fe:
      case Pe:
      case Y:
      case de:
        return e(i);
      default:
        throw new _t(i);
    }
  }
}
function pi(t) {
  switch (Re(t)) {
    case he:
      if (t.parts.every((e) => e === "")) return "";
      break;
    case te:
      if (!t.contents && !t.id && !t.break && !t.expandedStates) return "";
      if (
        t.contents.type === te &&
        t.contents.id === t.id &&
        t.contents.break === t.break &&
        t.contents.expandedStates === t.expandedStates
      )
        return t.contents;
      break;
    case pe:
    case ce:
    case fe:
    case Ne:
      if (!t.contents) return "";
      break;
    case me:
      if (!t.flatContents && !t.breakContents) return "";
      break;
    case Be: {
      let e = [];
      for (let r of t) {
        if (!r) continue;
        let [n, ...s] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof X(!1, e, -1) == "string"
          ? (e[e.length - 1] += n)
          : e.push(n),
          e.push(...s);
      }
      return e.length === 0 ? "" : e.length === 1 ? e[0] : e;
    }
    case ke:
    case Le:
    case Fe:
    case Pe:
    case Y:
    case Ie:
    case de:
      break;
    default:
      throw new _t(t);
  }
  return t;
}
function ln(t) {
  return Dt(t, (e) => pi(e));
}
function B(t, e = un) {
  return Dt(t, (r) =>
    typeof r == "string"
      ? q(
          e,
          r.split(`
`),
        )
      : r,
  );
}
var vt = "'",
  cn = '"';
function hi(t, e) {
  let r = e === !0 || e === vt ? vt : cn,
    n = r === vt ? cn : vt,
    s = 0,
    i = 0;
  for (let a of t) a === r ? s++ : a === n && i++;
  return s > i ? n : r;
}
var pn = hi;
function cr(t) {
  if (typeof t != "string") throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var H,
  pr = class {
    constructor(e) {
      en(this, H);
      tn(this, H, new Set(e));
    }
    getLeadingWhitespaceCount(e) {
      let r = Q(this, H),
        n = 0;
      for (let s = 0; s < e.length && r.has(e.charAt(s)); s++) n++;
      return n;
    }
    getTrailingWhitespaceCount(e) {
      let r = Q(this, H),
        n = 0;
      for (let s = e.length - 1; s >= 0 && r.has(e.charAt(s)); s--) n++;
      return n;
    }
    getLeadingWhitespace(e) {
      let r = this.getLeadingWhitespaceCount(e);
      return e.slice(0, r);
    }
    getTrailingWhitespace(e) {
      let r = this.getTrailingWhitespaceCount(e);
      return e.slice(e.length - r);
    }
    hasLeadingWhitespace(e) {
      return Q(this, H).has(e.charAt(0));
    }
    hasTrailingWhitespace(e) {
      return Q(this, H).has(X(!1, e, -1));
    }
    trimStart(e) {
      let r = this.getLeadingWhitespaceCount(e);
      return e.slice(r);
    }
    trimEnd(e) {
      let r = this.getTrailingWhitespaceCount(e);
      return e.slice(0, e.length - r);
    }
    trim(e) {
      return this.trimEnd(this.trimStart(e));
    }
    split(e, r = !1) {
      let n = `[${cr([...Q(this, H)].join(""))}]+`,
        s = new RegExp(r ? `(${n})` : n, "u");
      return e.split(s);
    }
    hasWhitespaceCharacter(e) {
      let r = Q(this, H);
      return Array.prototype.some.call(e, (n) => r.has(n));
    }
    hasNonWhitespaceCharacter(e) {
      let r = Q(this, H);
      return Array.prototype.some.call(e, (n) => !r.has(n));
    }
    isWhitespaceOnly(e) {
      let r = Q(this, H);
      return Array.prototype.every.call(e, (n) => r.has(n));
    }
  };
H = new WeakMap();
var hn = pr;
var mi = [
    "	",
    `
`,
    "\f",
    "\r",
    " ",
  ],
  fi = new hn(mi),
  N = fi;
var hr = class extends Error {
    name = "UnexpectedNodeError";
    constructor(e, r, n = "type") {
      super(`Unexpected ${r} node ${n}: ${JSON.stringify(e[n])}.`),
        (this.node = e);
    }
  },
  mn = hr;
function di(t) {
  return (t == null ? void 0 : t.type) === "front-matter";
}
var $e = di;
var gi = new Set([
    "sourceSpan",
    "startSourceSpan",
    "endSourceSpan",
    "nameSpan",
    "valueSpan",
    "keySpan",
    "tagDefinition",
    "tokens",
    "valueTokens",
    "switchValueSourceSpan",
    "expSourceSpan",
    "valueSourceSpan",
  ]),
  Ci = new Set(["if", "else if", "for", "switch", "case"]);
function fn(t, e) {
  var r;
  if (
    t.type === "text" ||
    t.type === "comment" ||
    $e(t) ||
    t.type === "yaml" ||
    t.type === "toml"
  )
    return null;
  if (
    (t.type === "attribute" && delete e.value,
    t.type === "docType" && delete e.value,
    t.type === "angularControlFlowBlock" &&
      (r = t.parameters) != null &&
      r.children)
  )
    for (let n of e.parameters.children)
      Ci.has(t.name)
        ? delete n.expression
        : (n.expression = n.expression.trim());
  t.type === "angularIcuExpression" && (e.switchValue = t.switchValue.trim()),
    t.type === "angularLetDeclarationInitializer" && delete e.value;
}
fn.ignoredProperties = gi;
var dn = fn;
async function Si(t, e) {
  if (t.language === "yaml") {
    let r = t.value.trim(),
      n = r ? await e(r, { parser: "yaml" }) : "";
    return an([
      t.startDelimiter,
      t.explicitLanguage,
      S,
      n,
      n ? S : "",
      t.endDelimiter,
    ]);
  }
}
var gn = Si;
function Ce(t, e = !0) {
  return [k([v, t]), e ? v : ""];
}
function j(t, e) {
  let r =
    t.type === "NGRoot"
      ? t.node.type === "NGMicrosyntax" &&
        t.node.body.length === 1 &&
        t.node.body[0].type === "NGMicrosyntaxExpression"
        ? t.node.body[0].expression
        : t.node
      : t.type === "JsExpressionRoot"
        ? t.node
        : t;
  return (
    r &&
    (r.type === "ObjectExpression" ||
      r.type === "ArrayExpression" ||
      ((e.parser === "__vue_expression" ||
        e.parser === "__vue_ts_expression") &&
        (r.type === "TemplateLiteral" || r.type === "StringLiteral")))
  );
}
async function T(t, e, r, n) {
  r = { __isInHtmlAttribute: !0, __embeddedInHtml: !0, ...r };
  let s = !0;
  n &&
    (r.__onHtmlBindingRoot = (a, o) => {
      s = n(a, o);
    });
  let i = await e(t, r, e);
  return s ? _(i) : Ce(i);
}
function _i(t, e, r, n) {
  let { node: s } = r,
    i = n.originalText.slice(
      s.sourceSpan.start.offset,
      s.sourceSpan.end.offset,
    );
  return /^\s*$/u.test(i)
    ? ""
    : T(i, t, { parser: "__ng_directive", __isInHtmlAttribute: !1 }, j);
}
var Cn = _i;
var Ei = (t) => String(t).split(/[/\\]/u).pop();
function Sn(t, e) {
  if (!e) return;
  let r = Ei(e).toLowerCase();
  return (
    t.find(({ filenames: n }) =>
      n == null ? void 0 : n.some((s) => s.toLowerCase() === r),
    ) ??
    t.find(({ extensions: n }) =>
      n == null ? void 0 : n.some((s) => r.endsWith(s)),
    )
  );
}
function Ai(t, e) {
  if (e)
    return (
      t.find(({ name: r }) => r.toLowerCase() === e) ??
      t.find(({ aliases: r }) => (r == null ? void 0 : r.includes(e))) ??
      t.find(({ extensions: r }) => (r == null ? void 0 : r.includes(`.${e}`)))
    );
}
function Di(t, e) {
  let r = t.plugins.flatMap((s) => s.languages ?? []),
    n =
      Ai(r, e.language) ??
      Sn(r, e.physicalFile) ??
      Sn(r, e.file) ??
      (e.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var Oe = Di;
var _n = "inline",
  En = {
    area: "none",
    base: "none",
    basefont: "none",
    datalist: "none",
    head: "none",
    link: "none",
    meta: "none",
    noembed: "none",
    noframes: "none",
    param: "block",
    rp: "none",
    script: "block",
    style: "none",
    template: "inline",
    title: "none",
    html: "block",
    body: "block",
    address: "block",
    blockquote: "block",
    center: "block",
    dialog: "block",
    div: "block",
    figure: "block",
    figcaption: "block",
    footer: "block",
    form: "block",
    header: "block",
    hr: "block",
    legend: "block",
    listing: "block",
    main: "block",
    p: "block",
    plaintext: "block",
    pre: "block",
    search: "block",
    xmp: "block",
    slot: "contents",
    ruby: "ruby",
    rt: "ruby-text",
    article: "block",
    aside: "block",
    h1: "block",
    h2: "block",
    h3: "block",
    h4: "block",
    h5: "block",
    h6: "block",
    hgroup: "block",
    nav: "block",
    section: "block",
    dir: "block",
    dd: "block",
    dl: "block",
    dt: "block",
    menu: "block",
    ol: "block",
    ul: "block",
    li: "list-item",
    table: "table",
    caption: "table-caption",
    colgroup: "table-column-group",
    col: "table-column",
    thead: "table-header-group",
    tbody: "table-row-group",
    tfoot: "table-footer-group",
    tr: "table-row",
    td: "table-cell",
    th: "table-cell",
    input: "inline-block",
    button: "inline-block",
    fieldset: "block",
    marquee: "inline-block",
    source: "block",
    track: "block",
    details: "block",
    summary: "block",
    meter: "inline-block",
    progress: "inline-block",
    object: "inline-block",
    video: "inline-block",
    audio: "inline-block",
    select: "inline-block",
    option: "block",
    optgroup: "block",
  },
  An = "normal",
  Dn = {
    listing: "pre",
    plaintext: "pre",
    pre: "pre",
    xmp: "pre",
    nobr: "nowrap",
    table: "initial",
    textarea: "pre-wrap",
  };
function vi(t) {
  return (
    t.type === "element" &&
    !t.hasExplicitNamespace &&
    !["html", "svg"].includes(t.namespace)
  );
}
var Se = vi;
var yi = (t) => w(!1, t, /^[\t\f\r ]*\n/gu, ""),
  mr = (t) => yi(N.trimEnd(t)),
  vn = (t) => {
    let e = t,
      r = N.getLeadingWhitespace(e);
    r && (e = e.slice(r.length));
    let n = N.getTrailingWhitespace(e);
    return (
      n && (e = e.slice(0, -n.length)),
      { leadingWhitespace: r, trailingWhitespace: n, text: e }
    );
  };
function yt(t, e) {
  return !!(
    (t.type === "ieConditionalComment" &&
      t.lastChild &&
      !t.lastChild.isSelfClosing &&
      !t.lastChild.endSourceSpan) ||
    (t.type === "ieConditionalComment" && !t.complete) ||
    (_e(t) &&
      t.children.some(
        (r) => r.type !== "text" && r.type !== "interpolation",
      )) ||
    (Tt(t, e) && !U(t) && t.type !== "interpolation")
  );
}
function Ee(t) {
  return t.type === "attribute" || !t.parent || !t.prev ? !1 : wi(t.prev);
}
function wi(t) {
  return t.type === "comment" && t.value.trim() === "prettier-ignore";
}
function $(t) {
  return t.type === "text" || t.type === "comment";
}
function U(t) {
  return (
    t.type === "element" &&
    (t.fullName === "script" ||
      t.fullName === "style" ||
      t.fullName === "svg:style" ||
      t.fullName === "svg:script" ||
      (Se(t) && (t.name === "script" || t.name === "style")))
  );
}
function yn(t) {
  return t.children && !U(t);
}
function wn(t) {
  return U(t) || t.type === "interpolation" || fr(t);
}
function fr(t) {
  return Rn(t).startsWith("pre");
}
function bn(t, e) {
  var s, i;
  let r = n();
  if (
    r &&
    !t.prev &&
    (i = (s = t.parent) == null ? void 0 : s.tagDefinition) != null &&
    i.ignoreFirstLf
  )
    return t.type === "interpolation";
  return r;
  function n() {
    return $e(t) || t.type === "angularControlFlowBlock"
      ? !1
      : (t.type === "text" || t.type === "interpolation") &&
          t.prev &&
          (t.prev.type === "text" || t.prev.type === "interpolation")
        ? !0
        : !t.parent || t.parent.cssDisplay === "none"
          ? !1
          : _e(t.parent)
            ? !0
            : !(
                (!t.prev &&
                  (t.parent.type === "root" ||
                    (_e(t) && t.parent) ||
                    U(t.parent) ||
                    Je(t.parent, e) ||
                    !Li(t.parent.cssDisplay))) ||
                (t.prev && !Pi(t.prev.cssDisplay))
              );
  }
}
function Tn(t, e) {
  return $e(t) || t.type === "angularControlFlowBlock"
    ? !1
    : (t.type === "text" || t.type === "interpolation") &&
        t.next &&
        (t.next.type === "text" || t.next.type === "interpolation")
      ? !0
      : !t.parent || t.parent.cssDisplay === "none"
        ? !1
        : _e(t.parent)
          ? !0
          : !(
              (!t.next &&
                (t.parent.type === "root" ||
                  (_e(t) && t.parent) ||
                  U(t.parent) ||
                  Je(t.parent, e) ||
                  !Fi(t.parent.cssDisplay))) ||
              (t.next && !Ni(t.next.cssDisplay))
            );
}
function xn(t) {
  return Ii(t.cssDisplay) && !U(t);
}
function Qe(t) {
  return (
    $e(t) ||
    (t.next &&
      t.sourceSpan.end &&
      t.sourceSpan.end.line + 1 < t.next.sourceSpan.start.line)
  );
}
function kn(t) {
  return (
    dr(t) ||
    (t.type === "element" &&
      t.children.length > 0 &&
      (["body", "script", "style"].includes(t.name) ||
        t.children.some((e) => Ti(e)))) ||
    (t.firstChild &&
      t.firstChild === t.lastChild &&
      t.firstChild.type !== "text" &&
      Ln(t.firstChild) &&
      (!t.lastChild.isTrailingSpaceSensitive || Fn(t.lastChild)))
  );
}
function dr(t) {
  return (
    t.type === "element" &&
    t.children.length > 0 &&
    (["html", "head", "ul", "ol", "select"].includes(t.name) ||
      (t.cssDisplay.startsWith("table") && t.cssDisplay !== "table-cell"))
  );
}
function wt(t) {
  return Nn(t) || (t.prev && bi(t.prev)) || Bn(t);
}
function bi(t) {
  return Nn(t) || (t.type === "element" && t.fullName === "br") || Bn(t);
}
function Bn(t) {
  return Ln(t) && Fn(t);
}
function Ln(t) {
  return (
    t.hasLeadingSpaces &&
    (t.prev
      ? t.prev.sourceSpan.end.line < t.sourceSpan.start.line
      : t.parent.type === "root" ||
        t.parent.startSourceSpan.end.line < t.sourceSpan.start.line)
  );
}
function Fn(t) {
  return (
    t.hasTrailingSpaces &&
    (t.next
      ? t.next.sourceSpan.start.line > t.sourceSpan.end.line
      : t.parent.type === "root" ||
        (t.parent.endSourceSpan &&
          t.parent.endSourceSpan.start.line > t.sourceSpan.end.line))
  );
}
function Nn(t) {
  switch (t.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return !0;
    case "element":
      return ["script", "select"].includes(t.name);
  }
  return !1;
}
function bt(t) {
  return t.lastChild ? bt(t.lastChild) : t;
}
function Ti(t) {
  var e;
  return (e = t.children) == null ? void 0 : e.some((r) => r.type !== "text");
}
function Pn(t) {
  if (t)
    switch (t) {
      case "module":
      case "text/javascript":
      case "text/babel":
      case "application/javascript":
        return "babel";
      case "application/x-typescript":
        return "typescript";
      case "text/markdown":
        return "markdown";
      case "text/html":
        return "html";
      case "text/x-handlebars-template":
        return "glimmer";
      default:
        if (
          t.endsWith("json") ||
          t.endsWith("importmap") ||
          t === "speculationrules"
        )
          return "json";
    }
}
function xi(t, e) {
  let { name: r, attrMap: n } = t;
  if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src")) return;
  let { type: s, lang: i } = t.attrMap;
  return !i && !s ? "babel" : (Oe(e, { language: i }) ?? Pn(s));
}
function ki(t, e) {
  if (!Tt(t, e)) return;
  let { attrMap: r } = t;
  if (Object.prototype.hasOwnProperty.call(r, "src")) return;
  let { type: n, lang: s } = r;
  return Oe(e, { language: s }) ?? Pn(n);
}
function Bi(t, e) {
  if (t.name !== "style") return;
  let { lang: r } = t.attrMap;
  return r ? Oe(e, { language: r }) : "css";
}
function gr(t, e) {
  return xi(t, e) ?? Bi(t, e) ?? ki(t, e);
}
function Xe(t) {
  return t === "block" || t === "list-item" || t.startsWith("table");
}
function Li(t) {
  return !Xe(t) && t !== "inline-block";
}
function Fi(t) {
  return !Xe(t) && t !== "inline-block";
}
function Ni(t) {
  return !Xe(t);
}
function Pi(t) {
  return !Xe(t);
}
function Ii(t) {
  return !Xe(t) && t !== "inline-block";
}
function _e(t) {
  return Rn(t).startsWith("pre");
}
function Ri(t, e) {
  let r = t;
  for (; r; ) {
    if (e(r)) return !0;
    r = r.parent;
  }
  return !1;
}
function In(t, e) {
  var n;
  if (Ae(t, e)) return "block";
  if (((n = t.prev) == null ? void 0 : n.type) === "comment") {
    let s = t.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
    if (s) return s[1];
  }
  let r = !1;
  if (t.type === "element" && t.namespace === "svg")
    if (Ri(t, (s) => s.fullName === "svg:foreignObject")) r = !0;
    else return t.name === "svg" ? "inline-block" : "block";
  switch (e.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      return (
        (t.type === "element" && (!t.namespace || r || Se(t)) && En[t.name]) ||
        _n
      );
  }
}
function Rn(t) {
  return (t.type === "element" && (!t.namespace || Se(t)) && Dn[t.name]) || An;
}
function $i(t) {
  let e = Number.POSITIVE_INFINITY;
  for (let r of t.split(`
`)) {
    if (r.length === 0) continue;
    let n = N.getLeadingWhitespaceCount(r);
    if (n === 0) return 0;
    r.length !== n && n < e && (e = n);
  }
  return e === Number.POSITIVE_INFINITY ? 0 : e;
}
function Cr(t, e = $i(t)) {
  return e === 0
    ? t
    : t
        .split(
          `
`,
        )
        .map((r) => r.slice(e)).join(`
`);
}
function Sr(t) {
  return w(!1, w(!1, t, "&apos;", "'"), "&quot;", '"');
}
function P(t) {
  return Sr(t.value);
}
var Oi = new Set(["template", "style", "script"]);
function Je(t, e) {
  return Ae(t, e) && !Oi.has(t.fullName);
}
function Ae(t, e) {
  return (
    e.parser === "vue" &&
    t.type === "element" &&
    t.parent.type === "root" &&
    t.fullName.toLowerCase() !== "html"
  );
}
function Tt(t, e) {
  return (
    Ae(t, e) && (Je(t, e) || (t.attrMap.lang && t.attrMap.lang !== "html"))
  );
}
function $n(t) {
  let e = t.fullName;
  return (
    e.charAt(0) === "#" ||
    e === "slot-scope" ||
    e === "v-slot" ||
    e.startsWith("v-slot:")
  );
}
function On(t, e) {
  let r = t.parent;
  if (!Ae(r, e)) return !1;
  let n = r.fullName,
    s = t.fullName;
  return (n === "script" && s === "setup") || (n === "style" && s === "vars");
}
function xt(t, e = t.value) {
  return t.parent.isWhitespaceSensitive
    ? t.parent.isIndentationSensitive
      ? B(e)
      : B(Cr(mr(e)), S)
    : q(E, N.split(e));
}
function kt(t, e) {
  return Ae(t, e) && t.name === "script";
}
var _r = /\{\{(.+?)\}\}/su;
async function Mn(t, e) {
  let r = [];
  for (let [n, s] of t.split(_r).entries())
    if (n % 2 === 0) r.push(B(s));
    else
      try {
        r.push(
          _([
            "{{",
            k([
              E,
              await T(s, e, {
                parser: "__ng_interpolation",
                __isInHtmlInterpolation: !0,
              }),
            ]),
            E,
            "}}",
          ]),
        );
      } catch {
        r.push("{{", B(s), "}}");
      }
  return r;
}
function Er({ parser: t }) {
  return (e, r, n) => T(P(n.node), e, { parser: t }, j);
}
var Mi = Er({ parser: "__ng_action" }),
  qi = Er({ parser: "__ng_binding" }),
  Hi = Er({ parser: "__ng_directive" });
function Vi(t, e) {
  if (e.parser !== "angular") return;
  let { node: r } = t,
    n = r.fullName;
  if ((n.startsWith("(") && n.endsWith(")")) || n.startsWith("on-")) return Mi;
  if (
    (n.startsWith("[") && n.endsWith("]")) ||
    /^bind(?:on)?-/u.test(n) ||
    /^ng-(?:if|show|hide|class|style)$/u.test(n)
  )
    return qi;
  if (n.startsWith("*")) return Hi;
  let s = P(r);
  if (/^i18n(?:-.+)?$/u.test(n))
    return () => Ce(At(xt(r, s.trim())), !s.includes("@@"));
  if (_r.test(s)) return (i) => Mn(s, i);
}
var qn = Vi;
function Ui(t, e) {
  let { node: r } = t,
    n = P(r);
  if (r.fullName === "class" && !e.parentParser && !n.includes("{{"))
    return () => n.trim().split(/\s+/u).join(" ");
}
var Hn = Ui;
function Vn(t) {
  return (
    t === "	" ||
    t ===
      `
` ||
    t === "\f" ||
    t === "\r" ||
    t === " "
  );
}
var Wi = /^[ \t\n\r\u000c]+/,
  zi = /^[, \t\n\r\u000c]+/,
  Gi = /^[^ \t\n\r\u000c]+/,
  Yi = /[,]+$/,
  Un = /^\d+$/,
  ji = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function Ki(t) {
  let e = t.length,
    r,
    n,
    s,
    i,
    a,
    o = 0,
    u;
  function p(C) {
    let A,
      D = C.exec(t.substring(o));
    if (D) return ([A] = D), (o += A.length), A;
  }
  let l = [];
  for (;;) {
    if ((p(zi), o >= e)) {
      if (l.length === 0)
        throw new Error("Must contain one or more image candidate strings.");
      return l;
    }
    (u = o),
      (r = p(Gi)),
      (n = []),
      r.slice(-1) === "," ? ((r = r.replace(Yi, "")), d()) : f();
  }
  function f() {
    for (p(Wi), s = "", i = "in descriptor"; ; ) {
      if (((a = t.charAt(o)), i === "in descriptor"))
        if (Vn(a)) s && (n.push(s), (s = ""), (i = "after descriptor"));
        else if (a === ",") {
          (o += 1), s && n.push(s), d();
          return;
        } else if (a === "(") (s += a), (i = "in parens");
        else if (a === "") {
          s && n.push(s), d();
          return;
        } else s += a;
      else if (i === "in parens")
        if (a === ")") (s += a), (i = "in descriptor");
        else if (a === "") {
          n.push(s), d();
          return;
        } else s += a;
      else if (i === "after descriptor" && !Vn(a))
        if (a === "") {
          d();
          return;
        } else (i = "in descriptor"), (o -= 1);
      o += 1;
    }
  }
  function d() {
    let C = !1,
      A,
      D,
      R,
      F,
      c = {},
      g,
      y,
      M,
      x,
      V;
    for (F = 0; F < n.length; F++)
      (g = n[F]),
        (y = g[g.length - 1]),
        (M = g.substring(0, g.length - 1)),
        (x = parseInt(M, 10)),
        (V = parseFloat(M)),
        Un.test(M) && y === "w"
          ? ((A || D) && (C = !0), x === 0 ? (C = !0) : (A = x))
          : ji.test(M) && y === "x"
            ? ((A || D || R) && (C = !0), V < 0 ? (C = !0) : (D = V))
            : Un.test(M) && y === "h"
              ? ((R || D) && (C = !0), x === 0 ? (C = !0) : (R = x))
              : (C = !0);
    if (!C)
      (c.source = { value: r, startOffset: u }),
        A && (c.width = { value: A }),
        D && (c.density = { value: D }),
        R && (c.height = { value: R }),
        l.push(c);
    else
      throw new Error(`Invalid srcset descriptor found in "${t}" at "${g}".`);
  }
}
var Wn = Ki;
function Qi(t) {
  if (
    t.node.fullName === "srcset" &&
    (t.parent.fullName === "img" || t.parent.fullName === "source")
  )
    return () => Ji(P(t.node));
}
var zn = { width: "w", height: "h", density: "x" },
  Xi = Object.keys(zn);
function Ji(t) {
  let e = Wn(t),
    r = Xi.filter((l) =>
      e.some((f) => Object.prototype.hasOwnProperty.call(f, l)),
    );
  if (r.length > 1)
    throw new Error("Mixed descriptor in srcset is not supported");
  let [n] = r,
    s = zn[n],
    i = e.map((l) => l.source.value),
    a = Math.max(...i.map((l) => l.length)),
    o = e.map((l) => (l[n] ? String(l[n].value) : "")),
    u = o.map((l) => {
      let f = l.indexOf(".");
      return f === -1 ? l.length : f;
    }),
    p = Math.max(...u);
  return Ce(
    q(
      [",", E],
      i.map((l, f) => {
        let d = [l],
          C = o[f];
        if (C) {
          let A = a - l.length + 1,
            D = p - u[f],
            R = " ".repeat(A + D);
          d.push(ge(R, " "), C + s);
        }
        return d;
      }),
    ),
  );
}
var Gn = Qi;
function Yn(t, e) {
  let { node: r } = t,
    n = P(t.node).trim();
  if (r.fullName === "style" && !e.parentParser && !n.includes("{{"))
    return async (s) =>
      Ce(await s(n, { parser: "css", __isHTMLStyleAttribute: !0 }));
}
var Ar = new WeakMap();
function Zi(t, e) {
  let { root: r } = t;
  return (
    Ar.has(r) ||
      Ar.set(
        r,
        r.children.some(
          (n) => kt(n, e) && ["ts", "typescript"].includes(n.attrMap.lang),
        ),
      ),
    Ar.get(r)
  );
}
var Me = Zi;
function jn(t, e, r) {
  let { node: n } = r,
    s = P(n);
  return T(
    `type T<${s}> = any`,
    t,
    { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: !0 },
    j,
  );
}
function Kn(t, e, { parseWithTs: r }) {
  return T(`function _(${t}) {}`, e, {
    parser: r ? "babel-ts" : "babel",
    __isVueBindings: !0,
  });
}
function Qn(t) {
  let e = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/u,
    r =
      /^[$_a-z][\w$]*(?:\.[$_a-z][\w$]*|\['[^']*'\]|\["[^"]*"\]|\[\d+\]|\[[$_a-z][\w$]*\])*$/iu,
    n = t.trim();
  return e.test(n) || r.test(n);
}
async function Xn(t, e, r, n) {
  let s = P(r.node),
    { left: i, operator: a, right: o } = ea(s),
    u = Me(r, n);
  return [
    _(
      await T(`function _(${i}) {}`, t, {
        parser: u ? "babel-ts" : "babel",
        __isVueForBindingLeft: !0,
      }),
    ),
    " ",
    a,
    " ",
    await T(o, t, { parser: u ? "__ts_expression" : "__js_expression" }),
  ];
}
function ea(t) {
  let e = /(.*?)\s+(in|of)\s+(.*)/su,
    r = /,([^,\]}]*)(?:,([^,\]}]*))?$/u,
    n = /^\(|\)$/gu,
    s = t.match(e);
  if (!s) return;
  let i = {};
  if (((i.for = s[3].trim()), !i.for)) return;
  let a = w(!1, s[1].trim(), n, ""),
    o = a.match(r);
  o
    ? ((i.alias = a.replace(r, "")),
      (i.iterator1 = o[1].trim()),
      o[2] && (i.iterator2 = o[2].trim()))
    : (i.alias = a);
  let u = [i.alias, i.iterator1, i.iterator2];
  if (!u.some((p, l) => !p && (l === 0 || u.slice(l + 1).some(Boolean))))
    return { left: u.filter(Boolean).join(","), operator: s[2], right: i.for };
}
function ta(t, e) {
  if (e.parser !== "vue") return;
  let { node: r } = t,
    n = r.fullName;
  if (n === "v-for") return Xn;
  if (n === "generic" && kt(r.parent, e)) return jn;
  let s = P(r),
    i = Me(t, e);
  if ($n(r) || On(r, e)) return (a) => Kn(s, a, { parseWithTs: i });
  if (n.startsWith("@") || n.startsWith("v-on:"))
    return (a) => ra(s, a, { parseWithTs: i });
  if (n.startsWith(":") || n.startsWith("v-bind:"))
    return (a) => na(s, a, { parseWithTs: i });
  if (n.startsWith("v-")) return (a) => Jn(s, a, { parseWithTs: i });
}
function ra(t, e, { parseWithTs: r }) {
  return Qn(t)
    ? Jn(t, e, { parseWithTs: r })
    : T(
        t,
        e,
        { parser: r ? "__vue_ts_event_binding" : "__vue_event_binding" },
        j,
      );
}
function na(t, e, { parseWithTs: r }) {
  return T(t, e, { parser: r ? "__vue_ts_expression" : "__vue_expression" }, j);
}
function Jn(t, e, { parseWithTs: r }) {
  return T(t, e, { parser: r ? "__ts_expression" : "__js_expression" }, j);
}
var Zn = ta;
function sa(t, e) {
  let { node: r } = t;
  if (r.value) {
    if (
      /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(
        e.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset),
      ) ||
      (e.parser === "lwc" && r.value.startsWith("{") && r.value.endsWith("}"))
    )
      return [r.rawName, "=", r.value];
    for (let n of [Gn, Yn, Hn, Zn, qn]) {
      let s = n(t, e);
      if (s) return ia(s);
    }
  }
}
function ia(t) {
  return async (e, r, n, s) => {
    let i = await t(e, r, n, s);
    if (i)
      return (
        (i = Dt(i, (a) =>
          typeof a == "string" ? w(!1, a, '"', "&quot;") : a,
        )),
        [n.node.rawName, '="', _(i), '"']
      );
  };
}
var es = sa;
var ts = new Proxy(() => {}, { get: () => ts }),
  Dr = ts;
function aa(t) {
  return Array.isArray(t) && t.length > 0;
}
var qe = aa;
function se(t) {
  return t.sourceSpan.start.offset;
}
function ie(t) {
  return t.sourceSpan.end.offset;
}
function Ze(t, e) {
  return [t.isSelfClosing ? "" : oa(t, e), De(t, e)];
}
function oa(t, e) {
  return t.lastChild && we(t.lastChild) ? "" : [ua(t, e), Bt(t, e)];
}
function De(t, e) {
  return (t.next ? K(t.next) : ye(t.parent)) ? "" : [ve(t, e), W(t, e)];
}
function ua(t, e) {
  return ye(t) ? ve(t.lastChild, e) : "";
}
function W(t, e) {
  return we(t) ? Bt(t.parent, e) : et(t) ? Lt(t.next) : "";
}
function Bt(t, e) {
  if ((Dr(!t.isSelfClosing), rs(t, e))) return "";
  switch (t.type) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (t.hasHtmComponentClosingTag) return "<//";
    default:
      return `</${t.rawName}`;
  }
}
function ve(t, e) {
  if (rs(t, e)) return "";
  switch (t.type) {
    case "ieConditionalComment":
    case "ieConditionalEndComment":
      return "[endif]-->";
    case "ieConditionalStartComment":
      return "]><!-->";
    case "interpolation":
      return "}}";
    case "angularIcuExpression":
      return "}";
    case "element":
      if (t.isSelfClosing) return "/>";
    default:
      return ">";
  }
}
function rs(t, e) {
  return !t.isSelfClosing && !t.endSourceSpan && (Ee(t) || yt(t.parent, e));
}
function K(t) {
  return (
    t.prev &&
    t.prev.type !== "docType" &&
    t.type !== "angularControlFlowBlock" &&
    !$(t.prev) &&
    t.isLeadingSpaceSensitive &&
    !t.hasLeadingSpaces
  );
}
function ye(t) {
  var e;
  return (
    ((e = t.lastChild) == null ? void 0 : e.isTrailingSpaceSensitive) &&
    !t.lastChild.hasTrailingSpaces &&
    !$(bt(t.lastChild)) &&
    !_e(t)
  );
}
function we(t) {
  return (
    !t.next && !t.hasTrailingSpaces && t.isTrailingSpaceSensitive && $(bt(t))
  );
}
function et(t) {
  return (
    t.next &&
    !$(t.next) &&
    $(t) &&
    t.isTrailingSpaceSensitive &&
    !t.hasTrailingSpaces
  );
}
function la(t) {
  let e = t.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
  return e ? (e[1] ? e[1].split(/\s+/u) : !0) : !1;
}
function tt(t) {
  return !t.prev && t.isLeadingSpaceSensitive && !t.hasLeadingSpaces;
}
function ca(t, e, r) {
  var f;
  let { node: n } = t;
  if (!qe(n.attrs)) return n.isSelfClosing ? " " : "";
  let s =
      ((f = n.prev) == null ? void 0 : f.type) === "comment" &&
      la(n.prev.value),
    i =
      typeof s == "boolean"
        ? () => s
        : Array.isArray(s)
          ? (d) => s.includes(d.rawName)
          : () => !1,
    a = t.map(
      ({ node: d }) => (i(d) ? B(e.originalText.slice(se(d), ie(d))) : r()),
      "attrs",
    ),
    o =
      n.type === "element" &&
      n.fullName === "script" &&
      n.attrs.length === 1 &&
      n.attrs[0].fullName === "src" &&
      n.children.length === 0,
    p = e.singleAttributePerLine && n.attrs.length > 1 && !Ae(n, e) ? S : E,
    l = [k([o ? " " : E, q(p, a)])];
  return (
    (n.firstChild && tt(n.firstChild)) || (n.isSelfClosing && ye(n.parent)) || o
      ? l.push(n.isSelfClosing ? " " : "")
      : l.push(
          e.bracketSameLine
            ? n.isSelfClosing
              ? " "
              : ""
            : n.isSelfClosing
              ? E
              : v,
        ),
    l
  );
}
function pa(t) {
  return t.firstChild && tt(t.firstChild) ? "" : Ft(t);
}
function rt(t, e, r) {
  let { node: n } = t;
  return [be(n, e), ca(t, e, r), n.isSelfClosing ? "" : pa(n)];
}
function be(t, e) {
  return t.prev && et(t.prev) ? "" : [z(t, e), Lt(t)];
}
function z(t, e) {
  return tt(t) ? Ft(t.parent) : K(t) ? ve(t.prev, e) : "";
}
function Lt(t) {
  switch (t.type) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${t.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType":
      return t.value === "html" ? "<!doctype" : "<!DOCTYPE";
    case "angularIcuExpression":
      return "{";
    case "element":
      if (t.condition) return `<!--[if ${t.condition}]><!--><${t.rawName}`;
    default:
      return `<${t.rawName}`;
  }
}
function Ft(t) {
  switch ((Dr(!t.isSelfClosing), t.type)) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (t.condition) return "><!--<![endif]-->";
    default:
      return ">";
  }
}
function ha(t, e) {
  if (!t.endSourceSpan) return "";
  let r = t.startSourceSpan.end.offset;
  t.firstChild && tt(t.firstChild) && (r -= Ft(t).length);
  let n = t.endSourceSpan.start.offset;
  return (
    t.lastChild && we(t.lastChild)
      ? (n += Bt(t, e).length)
      : ye(t) && (n -= ve(t.lastChild, e).length),
    e.originalText.slice(r, n)
  );
}
var Nt = ha;
var ma = new Set(["if", "else if", "for", "switch", "case"]);
function fa(t, e) {
  let { node: r } = t;
  switch (r.type) {
    case "element":
      if (U(r) || r.type === "interpolation") return;
      if (!r.isSelfClosing && Tt(r, e)) {
        let n = gr(r, e);
        return n
          ? async (s, i) => {
              let a = Nt(r, e),
                o = /^\s*$/u.test(a),
                u = "";
              return (
                o ||
                  ((u = await s(mr(a), { parser: n, __embeddedInHtml: !0 })),
                  (o = u === "")),
                [
                  z(r, e),
                  _(rt(t, e, i)),
                  o ? "" : S,
                  u,
                  o ? "" : S,
                  Ze(r, e),
                  W(r, e),
                ]
              );
            }
          : void 0;
      }
      break;
    case "text":
      if (U(r.parent)) {
        let n = gr(r.parent, e);
        if (n)
          return async (s) => {
            let i =
                n === "markdown"
                  ? Cr(r.value.replace(/^[^\S\n]*\n/u, ""))
                  : r.value,
              a = { parser: n, __embeddedInHtml: !0 };
            if (e.parser === "html" && n === "babel") {
              let o = "script",
                { attrMap: u } = r.parent;
              u &&
                (u.type === "module" ||
                  (u.type === "text/babel" && u["data-type"] === "module")) &&
                (o = "module"),
                (a.__babelSourceType = o);
            }
            return [ne, z(r, e), await s(i, a), W(r, e)];
          };
      } else if (r.parent.type === "interpolation")
        return async (n) => {
          let s = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
          return (
            e.parser === "angular"
              ? (s.parser = "__ng_interpolation")
              : e.parser === "vue"
                ? (s.parser = Me(t, e)
                    ? "__vue_ts_expression"
                    : "__vue_expression")
                : (s.parser = "__js_expression"),
            [
              k([E, await n(r.value, s)]),
              r.parent.next && K(r.parent.next) ? " " : E,
            ]
          );
        };
      break;
    case "attribute":
      return es(t, e);
    case "front-matter":
      return (n) => gn(r, n);
    case "angularControlFlowBlockParameters":
      return ma.has(t.parent.name) ? Cn : void 0;
    case "angularLetDeclarationInitializer":
      return (n) =>
        T(r.value, n, { parser: "__ng_binding", __isInHtmlAttribute: !1 });
  }
}
var ns = fa;
var nt = null;
function st(t) {
  if (nt !== null && typeof nt.property) {
    let e = nt;
    return (nt = st.prototype = null), e;
  }
  return (nt = st.prototype = t ?? Object.create(null)), new st();
}
var da = 10;
for (let t = 0; t <= da; t++) st();
function vr(t) {
  return st(t);
}
function ga(t, e = "type") {
  vr(t);
  function r(n) {
    let s = n[e],
      i = t[s];
    if (!Array.isArray(i))
      throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), {
        node: n,
      });
    return i;
  }
  return r;
}
var ss = ga;
var Ca = {
    "front-matter": [],
    root: ["children"],
    element: ["attrs", "children"],
    ieConditionalComment: ["children"],
    ieConditionalStartComment: [],
    ieConditionalEndComment: [],
    interpolation: ["children"],
    text: ["children"],
    docType: [],
    comment: [],
    attribute: [],
    cdata: [],
    angularControlFlowBlock: ["children", "parameters"],
    angularControlFlowBlockParameters: ["children"],
    angularControlFlowBlockParameter: [],
    angularLetDeclaration: ["init"],
    angularLetDeclarationInitializer: [],
    angularIcuExpression: ["cases"],
    angularIcuCase: ["expression"],
  },
  is = Ca;
var Sa = ss(is),
  as = Sa;
function os(t) {
  return /^\s*<!--\s*@(?:format|prettier)\s*-->/u.test(t);
}
function us(t) {
  return (
    `<!-- @format -->

` + t
  );
}
var ls = new Map([
  ["if", new Set(["else if", "else"])],
  ["else if", new Set(["else if", "else"])],
  ["for", new Set(["empty"])],
  ["defer", new Set(["placeholder", "error", "loading"])],
  ["placeholder", new Set(["placeholder", "error", "loading"])],
  ["error", new Set(["placeholder", "error", "loading"])],
  ["loading", new Set(["placeholder", "error", "loading"])],
]);
function cs(t) {
  let e = ie(t);
  return t.type === "element" && !t.endSourceSpan && qe(t.children)
    ? Math.max(e, cs(X(!1, t.children, -1)))
    : e;
}
function it(t, e, r) {
  let n = t.node;
  if (Ee(n)) {
    let s = cs(n);
    return [
      z(n, e),
      B(
        N.trimEnd(
          e.originalText.slice(
            se(n) + (n.prev && et(n.prev) ? Lt(n).length : 0),
            s - (n.next && K(n.next) ? ve(n, e).length : 0),
          ),
        ),
      ),
      W(n, e),
    ];
  }
  return r();
}
function Pt(t, e) {
  return $(t) && $(e)
    ? t.isTrailingSpaceSensitive
      ? t.hasTrailingSpaces
        ? wt(e)
          ? S
          : E
        : ""
      : wt(e)
        ? S
        : v
    : (et(t) &&
          (Ee(e) ||
            e.firstChild ||
            e.isSelfClosing ||
            (e.type === "element" && e.attrs.length > 0))) ||
        (t.type === "element" && t.isSelfClosing && K(e))
      ? ""
      : !e.isLeadingSpaceSensitive ||
          wt(e) ||
          (K(e) &&
            t.lastChild &&
            we(t.lastChild) &&
            t.lastChild.lastChild &&
            we(t.lastChild.lastChild))
        ? S
        : e.hasLeadingSpaces
          ? E
          : v;
}
function He(t, e, r) {
  let { node: n } = t;
  if (dr(n))
    return [
      ne,
      ...t.map((i) => {
        let a = i.node,
          o = a.prev ? Pt(a.prev, a) : "";
        return [o ? [o, Qe(a.prev) ? S : ""] : "", it(i, e, r)];
      }, "children"),
    ];
  let s = n.children.map(() => Symbol(""));
  return t.map((i, a) => {
    let o = i.node;
    if ($(o)) {
      if (o.prev && $(o.prev)) {
        let A = Pt(o.prev, o);
        if (A) return Qe(o.prev) ? [S, S, it(i, e, r)] : [A, it(i, e, r)];
      }
      return it(i, e, r);
    }
    let u = [],
      p = [],
      l = [],
      f = [],
      d = o.prev ? Pt(o.prev, o) : "",
      C = o.next ? Pt(o, o.next) : "";
    return (
      d &&
        (Qe(o.prev)
          ? u.push(S, S)
          : d === S
            ? u.push(S)
            : $(o.prev)
              ? p.push(d)
              : p.push(ge("", v, { groupId: s[a - 1] }))),
      C &&
        (Qe(o)
          ? $(o.next) && f.push(S, S)
          : C === S
            ? $(o.next) && f.push(S)
            : l.push(C)),
      [...u, _([...p, _([it(i, e, r), ...l], { id: s[a] })]), ...f]
    );
  }, "children");
}
function ps(t, e, r) {
  let { node: n } = t,
    s = [];
  _a(t) && s.push("} "),
    s.push("@", n.name),
    n.parameters && s.push(" (", _(r("parameters")), ")"),
    s.push(" {");
  let i = hs(n);
  return (
    n.children.length > 0
      ? ((n.firstChild.hasLeadingSpaces = !0),
        (n.lastChild.hasTrailingSpaces = !0),
        s.push(k([S, He(t, e, r)])),
        i && s.push(S, "}"))
      : i && s.push("}"),
    _(s, { shouldBreak: !0 })
  );
}
function hs(t) {
  var e, r;
  return !(
    ((e = t.next) == null ? void 0 : e.type) === "angularControlFlowBlock" &&
    (r = ls.get(t.name)) != null &&
    r.has(t.next.name)
  );
}
function _a(t) {
  let { previous: e } = t;
  return (
    (e == null ? void 0 : e.type) === "angularControlFlowBlock" &&
    !Ee(e) &&
    !hs(e)
  );
}
function ms(t, e, r) {
  return [k([v, q([";", E], t.map(r, "children"))]), v];
}
function fs(t, e, r) {
  let { node: n } = t;
  return [
    be(n, e),
    _([
      n.switchValue.trim(),
      ", ",
      n.clause,
      n.cases.length > 0 ? [",", k([E, q(E, t.map(r, "cases"))])] : "",
      v,
    ]),
    De(n, e),
  ];
}
function ds(t, e, r) {
  let { node: n } = t;
  return [
    n.value,
    " {",
    _([
      k([
        v,
        t.map(
          ({ node: s }) => (s.type === "text" && !N.trim(s.value) ? "" : r()),
          "expression",
        ),
      ]),
      v,
    ]),
    "}",
  ];
}
function gs(t, e, r) {
  let { node: n } = t;
  if (yt(n, e))
    return [z(n, e), _(rt(t, e, r)), B(Nt(n, e)), ...Ze(n, e), W(n, e)];
  let s =
      n.children.length === 1 &&
      (n.firstChild.type === "interpolation" ||
        n.firstChild.type === "angularIcuExpression") &&
      n.firstChild.isLeadingSpaceSensitive &&
      !n.firstChild.hasLeadingSpaces &&
      n.lastChild.isTrailingSpaceSensitive &&
      !n.lastChild.hasTrailingSpaces,
    i = Symbol("element-attr-group-id"),
    a = (l) => _([_(rt(t, e, r), { id: i }), l, Ze(n, e)]),
    o = (l) =>
      s
        ? on(l, { groupId: i })
        : (U(n) || Je(n, e)) &&
            n.parent.type === "root" &&
            e.parser === "vue" &&
            !e.vueIndentScriptAndStyle
          ? l
          : k(l),
    u = () =>
      s
        ? ge(v, "", { groupId: i })
        : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive
          ? E
          : n.firstChild.type === "text" &&
              n.isWhitespaceSensitive &&
              n.isIndentationSensitive
            ? sn(v)
            : v,
    p = () =>
      (n.next ? K(n.next) : ye(n.parent))
        ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive
          ? " "
          : ""
        : s
          ? ge(v, "", { groupId: i })
          : n.lastChild.hasTrailingSpaces &&
              n.lastChild.isTrailingSpaceSensitive
            ? E
            : (n.lastChild.type === "comment" ||
                  (n.lastChild.type === "text" &&
                    n.isWhitespaceSensitive &&
                    n.isIndentationSensitive)) &&
                new RegExp(
                  `\\n[\\t ]{${e.tabWidth * (t.ancestors.length - 1)}}$`,
                  "u",
                ).test(n.lastChild.value)
              ? ""
              : v;
  return n.children.length === 0
    ? a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? E : "")
    : a([kn(n) ? ne : "", o([u(), He(t, e, r)]), p()]);
}
function at(t) {
  return (t >= 9 && t <= 32) || t == 160;
}
function It(t) {
  return 48 <= t && t <= 57;
}
function ot(t) {
  return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
}
function Cs(t) {
  return (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || It(t);
}
function Rt(t) {
  return t === 10 || t === 13;
}
function yr(t) {
  return 48 <= t && t <= 55;
}
function $t(t) {
  return t === 39 || t === 34 || t === 96;
}
var Ea = /-+([a-z0-9])/g;
function _s(t) {
  return t.replace(Ea, (...e) => e[1].toUpperCase());
}
var ae = class t {
    constructor(e, r, n, s) {
      (this.file = e), (this.offset = r), (this.line = n), (this.col = s);
    }
    toString() {
      return this.offset != null
        ? `${this.file.url}@${this.line}:${this.col}`
        : this.file.url;
    }
    moveBy(e) {
      let r = this.file.content,
        n = r.length,
        s = this.offset,
        i = this.line,
        a = this.col;
      for (; s > 0 && e < 0; )
        if ((s--, e++, r.charCodeAt(s) == 10)) {
          i--;
          let u = r.substring(0, s - 1).lastIndexOf(String.fromCharCode(10));
          a = u > 0 ? s - u : s;
        } else a--;
      for (; s < n && e > 0; ) {
        let o = r.charCodeAt(s);
        s++, e--, o == 10 ? (i++, (a = 0)) : a++;
      }
      return new t(this.file, s, i, a);
    }
    getContext(e, r) {
      let n = this.file.content,
        s = this.offset;
      if (s != null) {
        s > n.length - 1 && (s = n.length - 1);
        let i = s,
          a = 0,
          o = 0;
        for (
          ;
          a < e &&
          s > 0 &&
          (s--,
          a++,
          !(
            n[s] ==
              `
` && ++o == r
          ));

        );
        for (
          a = 0, o = 0;
          a < e &&
          i < n.length - 1 &&
          (i++,
          a++,
          !(
            n[i] ==
              `
` && ++o == r
          ));

        );
        return {
          before: n.substring(s, this.offset),
          after: n.substring(this.offset, i + 1),
        };
      }
      return null;
    }
  },
  Te = class {
    constructor(e, r) {
      (this.content = e), (this.url = r);
    }
  },
  h = class {
    constructor(e, r, n = e, s = null) {
      (this.start = e),
        (this.end = r),
        (this.fullStart = n),
        (this.details = s);
    }
    toString() {
      return this.start.file.content.substring(
        this.start.offset,
        this.end.offset,
      );
    }
  },
  Ot;
(function (t) {
  (t[(t.WARNING = 0)] = "WARNING"), (t[(t.ERROR = 1)] = "ERROR");
})(Ot || (Ot = {}));
var Ue = class {
  constructor(e, r, n = Ot.ERROR) {
    (this.span = e), (this.msg = r), (this.level = n);
  }
  contextualMessage() {
    let e = this.span.start.getContext(100, 3);
    return e
      ? `${this.msg} ("${e.before}[${Ot[this.level]} ->]${e.after}")`
      : this.msg;
  }
  toString() {
    let e = this.span.details ? `, ${this.span.details}` : "";
    return `${this.contextualMessage()}: ${this.span.start}${e}`;
  }
};
var Aa = [va, ya, ba, xa, ka, Fa, Ba, La, Na, Ta];
function Da(t, e) {
  for (let r of Aa) r(t, e);
  return t;
}
function va(t) {
  t.walk((e) => {
    if (
      e.type === "element" &&
      e.tagDefinition.ignoreFirstLf &&
      e.children.length > 0 &&
      e.children[0].type === "text" &&
      e.children[0].value[0] ===
        `
`
    ) {
      let r = e.children[0];
      r.value.length === 1 ? e.removeChild(r) : (r.value = r.value.slice(1));
    }
  });
}
function ya(t) {
  let e = (r) => {
    var n, s;
    return (
      r.type === "element" &&
      ((n = r.prev) == null ? void 0 : n.type) ===
        "ieConditionalStartComment" &&
      r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset &&
      ((s = r.firstChild) == null ? void 0 : s.type) ===
        "ieConditionalEndComment" &&
      r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset
    );
  };
  t.walk((r) => {
    if (r.children)
      for (let n = 0; n < r.children.length; n++) {
        let s = r.children[n];
        if (!e(s)) continue;
        let i = s.prev,
          a = s.firstChild;
        r.removeChild(i), n--;
        let o = new h(i.sourceSpan.start, a.sourceSpan.end),
          u = new h(o.start, s.sourceSpan.end);
        (s.condition = i.condition),
          (s.sourceSpan = u),
          (s.startSourceSpan = o),
          s.removeChild(a);
      }
  });
}
function wa(t, e, r) {
  t.walk((n) => {
    if (n.children)
      for (let s = 0; s < n.children.length; s++) {
        let i = n.children[s];
        if (i.type !== "text" && !e(i)) continue;
        i.type !== "text" && ((i.type = "text"), (i.value = r(i)));
        let a = i.prev;
        !a ||
          a.type !== "text" ||
          ((a.value += i.value),
          (a.sourceSpan = new h(a.sourceSpan.start, i.sourceSpan.end)),
          n.removeChild(i),
          s--);
      }
  });
}
function ba(t) {
  return wa(
    t,
    (e) => e.type === "cdata",
    (e) => `<![CDATA[${e.value}]]>`,
  );
}
function Ta(t) {
  let e = (r) => {
    var n, s;
    return (
      r.type === "element" &&
      r.attrs.length === 0 &&
      r.children.length === 1 &&
      r.firstChild.type === "text" &&
      !N.hasWhitespaceCharacter(r.children[0].value) &&
      !r.firstChild.hasLeadingSpaces &&
      !r.firstChild.hasTrailingSpaces &&
      r.isLeadingSpaceSensitive &&
      !r.hasLeadingSpaces &&
      r.isTrailingSpaceSensitive &&
      !r.hasTrailingSpaces &&
      ((n = r.prev) == null ? void 0 : n.type) === "text" &&
      ((s = r.next) == null ? void 0 : s.type) === "text"
    );
  };
  t.walk((r) => {
    if (r.children)
      for (let n = 0; n < r.children.length; n++) {
        let s = r.children[n];
        if (!e(s)) continue;
        let i = s.prev,
          a = s.next;
        (i.value +=
          `<${s.rawName}>` + s.firstChild.value + `</${s.rawName}>` + a.value),
          (i.sourceSpan = new h(i.sourceSpan.start, a.sourceSpan.end)),
          (i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive),
          (i.hasTrailingSpaces = a.hasTrailingSpaces),
          r.removeChild(s),
          n--,
          r.removeChild(a);
      }
  });
}
function xa(t, e) {
  if (e.parser === "html") return;
  let r = /\{\{(.+?)\}\}/su;
  t.walk((n) => {
    if (yn(n))
      for (let s of n.children) {
        if (s.type !== "text") continue;
        let i = s.sourceSpan.start,
          a = null,
          o = s.value.split(r);
        for (let u = 0; u < o.length; u++, i = a) {
          let p = o[u];
          if (u % 2 === 0) {
            (a = i.moveBy(p.length)),
              p.length > 0 &&
                n.insertChildBefore(s, {
                  type: "text",
                  value: p,
                  sourceSpan: new h(i, a),
                });
            continue;
          }
          (a = i.moveBy(p.length + 4)),
            n.insertChildBefore(s, {
              type: "interpolation",
              sourceSpan: new h(i, a),
              children:
                p.length === 0
                  ? []
                  : [
                      {
                        type: "text",
                        value: p,
                        sourceSpan: new h(i.moveBy(2), a.moveBy(-2)),
                      },
                    ],
            });
        }
        n.removeChild(s);
      }
  });
}
function ka(t) {
  t.walk((e) => {
    if (!e.children) return;
    if (
      e.children.length === 0 ||
      (e.children.length === 1 &&
        e.children[0].type === "text" &&
        N.trim(e.children[0].value).length === 0)
    ) {
      (e.hasDanglingSpaces = e.children.length > 0), (e.children = []);
      return;
    }
    let r = wn(e),
      n = fr(e);
    if (!r)
      for (let s = 0; s < e.children.length; s++) {
        let i = e.children[s];
        if (i.type !== "text") continue;
        let {
            leadingWhitespace: a,
            text: o,
            trailingWhitespace: u,
          } = vn(i.value),
          p = i.prev,
          l = i.next;
        o
          ? ((i.value = o),
            (i.sourceSpan = new h(
              i.sourceSpan.start.moveBy(a.length),
              i.sourceSpan.end.moveBy(-u.length),
            )),
            a && (p && (p.hasTrailingSpaces = !0), (i.hasLeadingSpaces = !0)),
            u && ((i.hasTrailingSpaces = !0), l && (l.hasLeadingSpaces = !0)))
          : (e.removeChild(i),
            s--,
            (a || u) &&
              (p && (p.hasTrailingSpaces = !0),
              l && (l.hasLeadingSpaces = !0)));
      }
    (e.isWhitespaceSensitive = r), (e.isIndentationSensitive = n);
  });
}
function Ba(t) {
  t.walk((e) => {
    e.isSelfClosing =
      !e.children ||
      (e.type === "element" &&
        (e.tagDefinition.isVoid ||
          (e.endSourceSpan &&
            e.startSourceSpan.start === e.endSourceSpan.start &&
            e.startSourceSpan.end === e.endSourceSpan.end)));
  });
}
function La(t, e) {
  t.walk((r) => {
    r.type === "element" &&
      (r.hasHtmComponentClosingTag =
        r.endSourceSpan &&
        /^<\s*\/\s*\/\s*>$/u.test(
          e.originalText.slice(
            r.endSourceSpan.start.offset,
            r.endSourceSpan.end.offset,
          ),
        ));
  });
}
function Fa(t, e) {
  t.walk((r) => {
    r.cssDisplay = In(r, e);
  });
}
function Na(t, e) {
  t.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = xn(r);
        return;
      }
      for (let s of n)
        (s.isLeadingSpaceSensitive = bn(s, e)),
          (s.isTrailingSpaceSensitive = Tn(s, e));
      for (let s = 0; s < n.length; s++) {
        let i = n[s];
        (i.isLeadingSpaceSensitive =
          (s === 0 || i.prev.isTrailingSpaceSensitive) &&
          i.isLeadingSpaceSensitive),
          (i.isTrailingSpaceSensitive =
            (s === n.length - 1 || i.next.isLeadingSpaceSensitive) &&
            i.isTrailingSpaceSensitive);
      }
    }
  });
}
var Es = Da;
function Pa(t, e, r) {
  let { node: n } = t;
  switch (n.type) {
    case "front-matter":
      return B(n.raw);
    case "root":
      return e.__onHtmlRoot && e.__onHtmlRoot(n), [_(He(t, e, r)), S];
    case "element":
    case "ieConditionalComment":
      return gs(t, e, r);
    case "angularControlFlowBlock":
      return ps(t, e, r);
    case "angularControlFlowBlockParameters":
      return ms(t, e, r);
    case "angularControlFlowBlockParameter":
      return N.trim(n.expression);
    case "angularLetDeclaration":
      return _(["@let ", _([n.id, " =", _(k([E, r("init")]))]), ";"]);
    case "angularLetDeclarationInitializer":
      return n.value;
    case "angularIcuExpression":
      return fs(t, e, r);
    case "angularIcuCase":
      return ds(t, e, r);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [be(n), De(n)];
    case "interpolation":
      return [be(n, e), ...t.map(r, "children"), De(n, e)];
    case "text": {
      if (n.parent.type === "interpolation") {
        let i = /\n[^\S\n]*$/u,
          a = i.test(n.value),
          o = a ? n.value.replace(i, "") : n.value;
        return [B(o), a ? S : ""];
      }
      let s = ln([z(n, e), ...xt(n), W(n, e)]);
      return Array.isArray(s) ? At(s) : s;
    }
    case "docType":
      return [
        _([
          be(n, e),
          " ",
          w(!1, n.value.replace(/^html\b/iu, "html"), /\s+/gu, " "),
        ]),
        De(n, e),
      ];
    case "comment":
      return [z(n, e), B(e.originalText.slice(se(n), ie(n))), W(n, e)];
    case "attribute": {
      if (n.value === null) return n.rawName;
      let s = Sr(n.value),
        i = pn(s, '"');
      return [
        n.rawName,
        "=",
        i,
        B(i === '"' ? w(!1, s, '"', "&quot;") : w(!1, s, "'", "&apos;")),
        i,
      ];
    }
    case "cdata":
    default:
      throw new mn(n, "HTML");
  }
}
var Ia = {
    preprocess: Es,
    print: Pa,
    insertPragma: us,
    massageAstNode: dn,
    embed: ns,
    getVisitorKeys: as,
  },
  As = Ia;
var Ds = [
  {
    linguistLanguageId: 146,
    name: "Angular",
    type: "markup",
    tmScope: "text.html.basic",
    aceMode: "html",
    codemirrorMode: "htmlmixed",
    codemirrorMimeType: "text/html",
    color: "#e34c26",
    aliases: ["xhtml"],
    extensions: [".component.html"],
    parsers: ["angular"],
    vscodeLanguageIds: ["html"],
    filenames: [],
  },
  {
    linguistLanguageId: 146,
    name: "HTML",
    type: "markup",
    tmScope: "text.html.basic",
    aceMode: "html",
    codemirrorMode: "htmlmixed",
    codemirrorMimeType: "text/html",
    color: "#e34c26",
    aliases: ["xhtml"],
    extensions: [
      ".html",
      ".hta",
      ".htm",
      ".html.hl",
      ".inc",
      ".xht",
      ".xhtml",
      ".mjml",
    ],
    parsers: ["html"],
    vscodeLanguageIds: ["html"],
  },
  {
    linguistLanguageId: 146,
    name: "Lightning Web Components",
    type: "markup",
    tmScope: "text.html.basic",
    aceMode: "html",
    codemirrorMode: "htmlmixed",
    codemirrorMimeType: "text/html",
    color: "#e34c26",
    aliases: ["xhtml"],
    extensions: [],
    parsers: ["lwc"],
    vscodeLanguageIds: ["html"],
    filenames: [],
  },
  {
    linguistLanguageId: 391,
    name: "Vue",
    type: "markup",
    color: "#41b883",
    extensions: [".vue"],
    tmScope: "text.html.vue",
    aceMode: "html",
    parsers: ["vue"],
    vscodeLanguageIds: ["vue"],
  },
];
var wr = {
  bracketSpacing: {
    category: "Common",
    type: "boolean",
    default: !0,
    description: "Print spaces between brackets.",
    oppositeDescription: "Do not print spaces between brackets.",
  },
  singleQuote: {
    category: "Common",
    type: "boolean",
    default: !1,
    description: "Use single quotes instead of double quotes.",
  },
  proseWrap: {
    category: "Common",
    type: "choice",
    default: "preserve",
    description: "How to wrap prose.",
    choices: [
      {
        value: "always",
        description: "Wrap prose if it exceeds the print width.",
      },
      { value: "never", description: "Do not wrap prose." },
      { value: "preserve", description: "Wrap prose as-is." },
    ],
  },
  bracketSameLine: {
    category: "Common",
    type: "boolean",
    default: !1,
    description:
      "Put > of opening tags on the last line instead of on a new line.",
  },
  singleAttributePerLine: {
    category: "Common",
    type: "boolean",
    default: !1,
    description: "Enforce single attribute per line in HTML, Vue and JSX.",
  },
};
var vs = "HTML",
  Ra = {
    bracketSameLine: wr.bracketSameLine,
    htmlWhitespaceSensitivity: {
      category: vs,
      type: "choice",
      default: "css",
      description: "How to handle whitespaces in HTML.",
      choices: [
        {
          value: "css",
          description: "Respect the default value of CSS display property.",
        },
        {
          value: "strict",
          description: "Whitespaces are considered sensitive.",
        },
        {
          value: "ignore",
          description: "Whitespaces are considered insensitive.",
        },
      ],
    },
    singleAttributePerLine: wr.singleAttributePerLine,
    vueIndentScriptAndStyle: {
      category: vs,
      type: "boolean",
      default: !1,
      description: "Indent script and style tags in Vue files.",
    },
  },
  ys = Ra;
var Gr = {};
Jr(Gr, { angular: () => Po, html: () => No, lwc: () => Ro, vue: () => Io });
var _p = new RegExp(
  `(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`,
  "g",
);
var ws;
(function (t) {
  (t[(t.Emulated = 0)] = "Emulated"),
    (t[(t.None = 2)] = "None"),
    (t[(t.ShadowDom = 3)] = "ShadowDom");
})(ws || (ws = {}));
var bs;
(function (t) {
  (t[(t.OnPush = 0)] = "OnPush"), (t[(t.Default = 1)] = "Default");
})(bs || (bs = {}));
var Ts;
(function (t) {
  (t[(t.None = 0)] = "None"),
    (t[(t.SignalBased = 1)] = "SignalBased"),
    (t[(t.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform");
})(Ts || (Ts = {}));
var br = { name: "custom-elements" },
  Tr = { name: "no-errors-schema" };
var J;
(function (t) {
  (t[(t.NONE = 0)] = "NONE"),
    (t[(t.HTML = 1)] = "HTML"),
    (t[(t.STYLE = 2)] = "STYLE"),
    (t[(t.SCRIPT = 3)] = "SCRIPT"),
    (t[(t.URL = 4)] = "URL"),
    (t[(t.RESOURCE_URL = 5)] = "RESOURCE_URL");
})(J || (J = {}));
var xs;
(function (t) {
  (t[(t.Error = 0)] = "Error"),
    (t[(t.Warning = 1)] = "Warning"),
    (t[(t.Ignore = 2)] = "Ignore");
})(xs || (xs = {}));
var I;
(function (t) {
  (t[(t.RAW_TEXT = 0)] = "RAW_TEXT"),
    (t[(t.ESCAPABLE_RAW_TEXT = 1)] = "ESCAPABLE_RAW_TEXT"),
    (t[(t.PARSABLE_DATA = 2)] = "PARSABLE_DATA");
})(I || (I = {}));
function ut(t, e = !0) {
  if (t[0] != ":") return [null, t];
  let r = t.indexOf(":", 1);
  if (r === -1) {
    if (e)
      throw new Error(`Unsupported format "${t}" expecting ":namespace:name"`);
    return [null, t];
  }
  return [t.slice(1, r), t.slice(r + 1)];
}
function xr(t) {
  return ut(t)[1] === "ng-container";
}
function kr(t) {
  return ut(t)[1] === "ng-content";
}
function We(t) {
  return t === null ? null : ut(t)[0];
}
function ze(t, e) {
  return t ? `:${t}:${e}` : e;
}
var qt;
function Br() {
  return (
    qt ||
      ((qt = {}),
      Mt(J.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]),
      Mt(J.STYLE, ["*|style"]),
      Mt(J.URL, [
        "*|formAction",
        "area|href",
        "area|ping",
        "audio|src",
        "a|href",
        "a|ping",
        "blockquote|cite",
        "body|background",
        "del|cite",
        "form|action",
        "img|src",
        "input|src",
        "ins|cite",
        "q|cite",
        "source|src",
        "track|src",
        "video|poster",
        "video|src",
      ]),
      Mt(J.RESOURCE_URL, [
        "applet|code",
        "applet|codebase",
        "base|href",
        "embed|src",
        "frame|src",
        "head|profile",
        "html|manifest",
        "iframe|src",
        "link|href",
        "media|src",
        "object|codebase",
        "object|data",
        "script|src",
      ])),
    qt
  );
}
function Mt(t, e) {
  for (let r of e) qt[r.toLowerCase()] = t;
}
var Ht = class {};
var $a = "boolean",
  Oa = "number",
  Ma = "string",
  qa = "object",
  Ha = [
    "[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored",
    "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
    "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
    "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",
    ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",
    ":svg:graphics^:svg:|",
    ":svg:animation^:svg:|*begin,*end,*repeat",
    ":svg:geometry^:svg:|",
    ":svg:componentTransferFunction^:svg:|",
    ":svg:gradient^:svg:|",
    ":svg:textContent^:svg:graphics|",
    ":svg:textPositioning^:svg:textContent|",
    "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username",
    "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username",
    "audio^media|",
    "br^[HTMLElement]|clear",
    "base^[HTMLElement]|href,target",
    "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink",
    "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value",
    "canvas^[HTMLElement]|#height,#width",
    "content^[HTMLElement]|select",
    "dl^[HTMLElement]|!compact",
    "data^[HTMLElement]|value",
    "datalist^[HTMLElement]|",
    "details^[HTMLElement]|!open",
    "dialog^[HTMLElement]|!open,returnValue",
    "dir^[HTMLElement]|!compact",
    "div^[HTMLElement]|align",
    "embed^[HTMLElement]|align,height,name,src,type,width",
    "fieldset^[HTMLElement]|!disabled,name",
    "font^[HTMLElement]|color,face,size",
    "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target",
    "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src",
    "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows",
    "hr^[HTMLElement]|align,color,!noShade,size,width",
    "head^[HTMLElement]|",
    "h1,h2,h3,h4,h5,h6^[HTMLElement]|align",
    "html^[HTMLElement]|version",
    "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width",
    "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width",
    "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width",
    "li^[HTMLElement]|type,#value",
    "label^[HTMLElement]|htmlFor",
    "legend^[HTMLElement]|align",
    "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type",
    "map^[HTMLElement]|name",
    "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width",
    "menu^[HTMLElement]|!compact",
    "meta^[HTMLElement]|content,httpEquiv,media,name,scheme",
    "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value",
    "ins,del^[HTMLElement]|cite,dateTime",
    "ol^[HTMLElement]|!compact,!reversed,#start,type",
    "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width",
    "optgroup^[HTMLElement]|!disabled,label",
    "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value",
    "output^[HTMLElement]|defaultValue,%htmlFor,name,value",
    "p^[HTMLElement]|align",
    "param^[HTMLElement]|name,type,value,valueType",
    "picture^[HTMLElement]|",
    "pre^[HTMLElement]|#width",
    "progress^[HTMLElement]|#max,#value",
    "q,blockquote,cite^[HTMLElement]|",
    "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type",
    "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value",
    "slot^[HTMLElement]|name",
    "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width",
    "span^[HTMLElement]|",
    "style^[HTMLElement]|!disabled,media,type",
    "caption^[HTMLElement]|align",
    "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width",
    "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width",
    "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width",
    "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign",
    "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign",
    "template^[HTMLElement]|",
    "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap",
    "time^[HTMLElement]|dateTime",
    "title^[HTMLElement]|text",
    "track^[HTMLElement]|!default,kind,label,src,srclang",
    "ul^[HTMLElement]|!compact,type",
    "unknown^[HTMLElement]|",
    "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",
    ":svg:a^:svg:graphics|",
    ":svg:animate^:svg:animation|",
    ":svg:animateMotion^:svg:animation|",
    ":svg:animateTransform^:svg:animation|",
    ":svg:circle^:svg:geometry|",
    ":svg:clipPath^:svg:graphics|",
    ":svg:defs^:svg:graphics|",
    ":svg:desc^:svg:|",
    ":svg:discard^:svg:|",
    ":svg:ellipse^:svg:geometry|",
    ":svg:feBlend^:svg:|",
    ":svg:feColorMatrix^:svg:|",
    ":svg:feComponentTransfer^:svg:|",
    ":svg:feComposite^:svg:|",
    ":svg:feConvolveMatrix^:svg:|",
    ":svg:feDiffuseLighting^:svg:|",
    ":svg:feDisplacementMap^:svg:|",
    ":svg:feDistantLight^:svg:|",
    ":svg:feDropShadow^:svg:|",
    ":svg:feFlood^:svg:|",
    ":svg:feFuncA^:svg:componentTransferFunction|",
    ":svg:feFuncB^:svg:componentTransferFunction|",
    ":svg:feFuncG^:svg:componentTransferFunction|",
    ":svg:feFuncR^:svg:componentTransferFunction|",
    ":svg:feGaussianBlur^:svg:|",
    ":svg:feImage^:svg:|",
    ":svg:feMerge^:svg:|",
    ":svg:feMergeNode^:svg:|",
    ":svg:feMorphology^:svg:|",
    ":svg:feOffset^:svg:|",
    ":svg:fePointLight^:svg:|",
    ":svg:feSpecularLighting^:svg:|",
    ":svg:feSpotLight^:svg:|",
    ":svg:feTile^:svg:|",
    ":svg:feTurbulence^:svg:|",
    ":svg:filter^:svg:|",
    ":svg:foreignObject^:svg:graphics|",
    ":svg:g^:svg:graphics|",
    ":svg:image^:svg:graphics|decoding",
    ":svg:line^:svg:geometry|",
    ":svg:linearGradient^:svg:gradient|",
    ":svg:mpath^:svg:|",
    ":svg:marker^:svg:|",
    ":svg:mask^:svg:|",
    ":svg:metadata^:svg:|",
    ":svg:path^:svg:geometry|",
    ":svg:pattern^:svg:|",
    ":svg:polygon^:svg:geometry|",
    ":svg:polyline^:svg:geometry|",
    ":svg:radialGradient^:svg:gradient|",
    ":svg:rect^:svg:geometry|",
    ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",
    ":svg:script^:svg:|type",
    ":svg:set^:svg:animation|",
    ":svg:stop^:svg:|",
    ":svg:style^:svg:|!disabled,media,title,type",
    ":svg:switch^:svg:graphics|",
    ":svg:symbol^:svg:|",
    ":svg:tspan^:svg:textPositioning|",
    ":svg:text^:svg:textPositioning|",
    ":svg:textPath^:svg:textContent|",
    ":svg:title^:svg:|",
    ":svg:use^:svg:graphics|",
    ":svg:view^:svg:|#zoomAndPan",
    "data^[HTMLElement]|value",
    "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name",
    "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default",
    "summary^[HTMLElement]|",
    "time^[HTMLElement]|dateTime",
    ":svg:cursor^:svg:|",
    ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",
    ":math:math^:math:|",
    ":math:maction^:math:|",
    ":math:menclose^:math:|",
    ":math:merror^:math:|",
    ":math:mfenced^:math:|",
    ":math:mfrac^:math:|",
    ":math:mi^:math:|",
    ":math:mmultiscripts^:math:|",
    ":math:mn^:math:|",
    ":math:mo^:math:|",
    ":math:mover^:math:|",
    ":math:mpadded^:math:|",
    ":math:mphantom^:math:|",
    ":math:mroot^:math:|",
    ":math:mrow^:math:|",
    ":math:ms^:math:|",
    ":math:mspace^:math:|",
    ":math:msqrt^:math:|",
    ":math:mstyle^:math:|",
    ":math:msub^:math:|",
    ":math:msubsup^:math:|",
    ":math:msup^:math:|",
    ":math:mtable^:math:|",
    ":math:mtd^:math:|",
    ":math:mtext^:math:|",
    ":math:mtr^:math:|",
    ":math:munder^:math:|",
    ":math:munderover^:math:|",
    ":math:semantics^:math:|",
  ],
  ks = new Map(
    Object.entries({
      class: "className",
      for: "htmlFor",
      formaction: "formAction",
      innerHtml: "innerHTML",
      readonly: "readOnly",
      tabindex: "tabIndex",
    }),
  ),
  Va = Array.from(ks).reduce((t, [e, r]) => (t.set(e, r), t), new Map()),
  Vt = class extends Ht {
    constructor() {
      super(),
        (this._schema = new Map()),
        (this._eventSchema = new Map()),
        Ha.forEach((e) => {
          let r = new Map(),
            n = new Set(),
            [s, i] = e.split("|"),
            a = i.split(","),
            [o, u] = s.split("^");
          o.split(",").forEach((l) => {
            this._schema.set(l.toLowerCase(), r),
              this._eventSchema.set(l.toLowerCase(), n);
          });
          let p = u && this._schema.get(u.toLowerCase());
          if (p) {
            for (let [l, f] of p) r.set(l, f);
            for (let l of this._eventSchema.get(u.toLowerCase())) n.add(l);
          }
          a.forEach((l) => {
            if (l.length > 0)
              switch (l[0]) {
                case "*":
                  n.add(l.substring(1));
                  break;
                case "!":
                  r.set(l.substring(1), $a);
                  break;
                case "#":
                  r.set(l.substring(1), Oa);
                  break;
                case "%":
                  r.set(l.substring(1), qa);
                  break;
                default:
                  r.set(l, Ma);
              }
          });
        });
    }
    hasProperty(e, r, n) {
      if (n.some((i) => i.name === Tr.name)) return !0;
      if (e.indexOf("-") > -1) {
        if (xr(e) || kr(e)) return !1;
        if (n.some((i) => i.name === br.name)) return !0;
      }
      return (
        this._schema.get(e.toLowerCase()) || this._schema.get("unknown")
      ).has(r);
    }
    hasElement(e, r) {
      return r.some((n) => n.name === Tr.name) ||
        (e.indexOf("-") > -1 &&
          (xr(e) || kr(e) || r.some((n) => n.name === br.name)))
        ? !0
        : this._schema.has(e.toLowerCase());
    }
    securityContext(e, r, n) {
      n && (r = this.getMappedPropName(r)),
        (e = e.toLowerCase()),
        (r = r.toLowerCase());
      let s = Br()[e + "|" + r];
      return s || ((s = Br()["*|" + r]), s || J.NONE);
    }
    getMappedPropName(e) {
      return ks.get(e) ?? e;
    }
    getDefaultComponentElementName() {
      return "ng-component";
    }
    validateProperty(e) {
      return e.toLowerCase().startsWith("on")
        ? {
            error: !0,
            msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.`,
          }
        : { error: !1 };
    }
    validateAttribute(e) {
      return e.toLowerCase().startsWith("on")
        ? {
            error: !0,
            msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...`,
          }
        : { error: !1 };
    }
    allKnownElementNames() {
      return Array.from(this._schema.keys());
    }
    allKnownAttributesOfElement(e) {
      let r = this._schema.get(e.toLowerCase()) || this._schema.get("unknown");
      return Array.from(r.keys()).map((n) => Va.get(n) ?? n);
    }
    allKnownEventsOfElement(e) {
      return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
    }
    normalizeAnimationStyleProperty(e) {
      return _s(e);
    }
    normalizeAnimationStyleValue(e, r, n) {
      let s = "",
        i = n.toString().trim(),
        a = null;
      if (Ua(e) && n !== 0 && n !== "0")
        if (typeof n == "number") s = "px";
        else {
          let o = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
          o &&
            o[1].length == 0 &&
            (a = `Please provide a CSS unit value for ${r}:${n}`);
        }
      return { error: a, value: i + s };
    }
  };
function Ua(t) {
  switch (t) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent":
      return !0;
    default:
      return !1;
  }
}
var m = class {
    constructor({
      closedByChildren: e,
      implicitNamespacePrefix: r,
      contentType: n = I.PARSABLE_DATA,
      closedByParent: s = !1,
      isVoid: i = !1,
      ignoreFirstLf: a = !1,
      preventNamespaceInheritance: o = !1,
      canSelfClose: u = !1,
    } = {}) {
      (this.closedByChildren = {}),
        (this.closedByParent = !1),
        e && e.length > 0 && e.forEach((p) => (this.closedByChildren[p] = !0)),
        (this.isVoid = i),
        (this.closedByParent = s || i),
        (this.implicitNamespacePrefix = r || null),
        (this.contentType = n),
        (this.ignoreFirstLf = a),
        (this.preventNamespaceInheritance = o),
        (this.canSelfClose = u ?? i);
    }
    isClosedByChild(e) {
      return this.isVoid || e.toLowerCase() in this.closedByChildren;
    }
    getContentType(e) {
      return typeof this.contentType == "object"
        ? ((e === void 0 ? void 0 : this.contentType[e]) ??
            this.contentType.default)
        : this.contentType;
    }
  },
  Bs,
  lt;
function Ge(t) {
  return (
    lt ||
      ((Bs = new m({ canSelfClose: !0 })),
      (lt = Object.assign(Object.create(null), {
        base: new m({ isVoid: !0 }),
        meta: new m({ isVoid: !0 }),
        area: new m({ isVoid: !0 }),
        embed: new m({ isVoid: !0 }),
        link: new m({ isVoid: !0 }),
        img: new m({ isVoid: !0 }),
        input: new m({ isVoid: !0 }),
        param: new m({ isVoid: !0 }),
        hr: new m({ isVoid: !0 }),
        br: new m({ isVoid: !0 }),
        source: new m({ isVoid: !0 }),
        track: new m({ isVoid: !0 }),
        wbr: new m({ isVoid: !0 }),
        p: new m({
          closedByChildren: [
            "address",
            "article",
            "aside",
            "blockquote",
            "div",
            "dl",
            "fieldset",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "header",
            "hgroup",
            "hr",
            "main",
            "nav",
            "ol",
            "p",
            "pre",
            "section",
            "table",
            "ul",
          ],
          closedByParent: !0,
        }),
        thead: new m({ closedByChildren: ["tbody", "tfoot"] }),
        tbody: new m({
          closedByChildren: ["tbody", "tfoot"],
          closedByParent: !0,
        }),
        tfoot: new m({ closedByChildren: ["tbody"], closedByParent: !0 }),
        tr: new m({ closedByChildren: ["tr"], closedByParent: !0 }),
        td: new m({ closedByChildren: ["td", "th"], closedByParent: !0 }),
        th: new m({ closedByChildren: ["td", "th"], closedByParent: !0 }),
        col: new m({ isVoid: !0 }),
        svg: new m({ implicitNamespacePrefix: "svg" }),
        foreignObject: new m({
          implicitNamespacePrefix: "svg",
          preventNamespaceInheritance: !0,
        }),
        math: new m({ implicitNamespacePrefix: "math" }),
        li: new m({ closedByChildren: ["li"], closedByParent: !0 }),
        dt: new m({ closedByChildren: ["dt", "dd"] }),
        dd: new m({ closedByChildren: ["dt", "dd"], closedByParent: !0 }),
        rb: new m({
          closedByChildren: ["rb", "rt", "rtc", "rp"],
          closedByParent: !0,
        }),
        rt: new m({
          closedByChildren: ["rb", "rt", "rtc", "rp"],
          closedByParent: !0,
        }),
        rtc: new m({
          closedByChildren: ["rb", "rtc", "rp"],
          closedByParent: !0,
        }),
        rp: new m({
          closedByChildren: ["rb", "rt", "rtc", "rp"],
          closedByParent: !0,
        }),
        optgroup: new m({ closedByChildren: ["optgroup"], closedByParent: !0 }),
        option: new m({
          closedByChildren: ["option", "optgroup"],
          closedByParent: !0,
        }),
        pre: new m({ ignoreFirstLf: !0 }),
        listing: new m({ ignoreFirstLf: !0 }),
        style: new m({ contentType: I.RAW_TEXT }),
        script: new m({ contentType: I.RAW_TEXT }),
        title: new m({
          contentType: { default: I.ESCAPABLE_RAW_TEXT, svg: I.PARSABLE_DATA },
        }),
        textarea: new m({
          contentType: I.ESCAPABLE_RAW_TEXT,
          ignoreFirstLf: !0,
        }),
      })),
      new Vt().allKnownElementNames().forEach((e) => {
        !lt[e] && We(e) === null && (lt[e] = new m({ canSelfClose: !1 }));
      })),
    lt[t] ?? Bs
  );
}
var oe = class {
    constructor(e, r) {
      (this.sourceSpan = e), (this.i18n = r);
    }
  },
  Ut = class extends oe {
    constructor(e, r, n, s) {
      super(r, s), (this.value = e), (this.tokens = n), (this.type = "text");
    }
    visit(e, r) {
      return e.visitText(this, r);
    }
  },
  Wt = class extends oe {
    constructor(e, r, n, s) {
      super(r, s), (this.value = e), (this.tokens = n), (this.type = "cdata");
    }
    visit(e, r) {
      return e.visitCdata(this, r);
    }
  },
  zt = class extends oe {
    constructor(e, r, n, s, i, a) {
      super(s, a),
        (this.switchValue = e),
        (this.type = r),
        (this.cases = n),
        (this.switchValueSourceSpan = i);
    }
    visit(e, r) {
      return e.visitExpansion(this, r);
    }
  },
  Gt = class {
    constructor(e, r, n, s, i) {
      (this.value = e),
        (this.expression = r),
        (this.sourceSpan = n),
        (this.valueSourceSpan = s),
        (this.expSourceSpan = i),
        (this.type = "expansionCase");
    }
    visit(e, r) {
      return e.visitExpansionCase(this, r);
    }
  },
  Yt = class extends oe {
    constructor(e, r, n, s, i, a, o) {
      super(n, o),
        (this.name = e),
        (this.value = r),
        (this.keySpan = s),
        (this.valueSpan = i),
        (this.valueTokens = a),
        (this.type = "attribute");
    }
    visit(e, r) {
      return e.visitAttribute(this, r);
    }
    get nameSpan() {
      return this.keySpan;
    }
  },
  G = class extends oe {
    constructor(e, r, n, s, i, a = null, o = null, u) {
      super(s, u),
        (this.name = e),
        (this.attrs = r),
        (this.children = n),
        (this.startSourceSpan = i),
        (this.endSourceSpan = a),
        (this.nameSpan = o),
        (this.type = "element");
    }
    visit(e, r) {
      return e.visitElement(this, r);
    }
  },
  jt = class {
    constructor(e, r) {
      (this.value = e), (this.sourceSpan = r), (this.type = "comment");
    }
    visit(e, r) {
      return e.visitComment(this, r);
    }
  },
  Kt = class {
    constructor(e, r) {
      (this.value = e), (this.sourceSpan = r), (this.type = "docType");
    }
    visit(e, r) {
      return e.visitDocType(this, r);
    }
  },
  Z = class extends oe {
    constructor(e, r, n, s, i, a, o = null, u) {
      super(s, u),
        (this.name = e),
        (this.parameters = r),
        (this.children = n),
        (this.nameSpan = i),
        (this.startSourceSpan = a),
        (this.endSourceSpan = o),
        (this.type = "block");
    }
    visit(e, r) {
      return e.visitBlock(this, r);
    }
  },
  ct = class {
    constructor(e, r) {
      (this.expression = e),
        (this.sourceSpan = r),
        (this.type = "blockParameter"),
        (this.startSourceSpan = null),
        (this.endSourceSpan = null);
    }
    visit(e, r) {
      return e.visitBlockParameter(this, r);
    }
  },
  pt = class {
    constructor(e, r, n, s, i) {
      (this.name = e),
        (this.value = r),
        (this.sourceSpan = n),
        (this.nameSpan = s),
        (this.valueSpan = i),
        (this.type = "letDeclaration"),
        (this.startSourceSpan = null),
        (this.endSourceSpan = null);
    }
    visit(e, r) {
      return e.visitLetDeclaration(this, r);
    }
  };
function Qt(t, e, r = null) {
  let n = [],
    s = t.visit ? (i) => t.visit(i, r) || i.visit(t, r) : (i) => i.visit(t, r);
  return (
    e.forEach((i) => {
      let a = s(i);
      a && n.push(a);
    }),
    n
  );
}
var ht = class {
  constructor() {}
  visitElement(e, r) {
    this.visitChildren(r, (n) => {
      n(e.attrs), n(e.children);
    });
  }
  visitAttribute(e, r) {}
  visitText(e, r) {}
  visitCdata(e, r) {}
  visitComment(e, r) {}
  visitDocType(e, r) {}
  visitExpansion(e, r) {
    return this.visitChildren(r, (n) => {
      n(e.cases);
    });
  }
  visitExpansionCase(e, r) {}
  visitBlock(e, r) {
    this.visitChildren(r, (n) => {
      n(e.parameters), n(e.children);
    });
  }
  visitBlockParameter(e, r) {}
  visitLetDeclaration(e, r) {}
  visitChildren(e, r) {
    let n = [],
      s = this;
    function i(a) {
      a && n.push(Qt(s, a, e));
    }
    return r(i), Array.prototype.concat.apply([], n);
  }
};
var Ye = {
    AElig: "\xC6",
    AMP: "&",
    amp: "&",
    Aacute: "\xC1",
    Abreve: "\u0102",
    Acirc: "\xC2",
    Acy: "\u0410",
    Afr: "\u{1D504}",
    Agrave: "\xC0",
    Alpha: "\u0391",
    Amacr: "\u0100",
    And: "\u2A53",
    Aogon: "\u0104",
    Aopf: "\u{1D538}",
    ApplyFunction: "\u2061",
    af: "\u2061",
    Aring: "\xC5",
    angst: "\xC5",
    Ascr: "\u{1D49C}",
    Assign: "\u2254",
    colone: "\u2254",
    coloneq: "\u2254",
    Atilde: "\xC3",
    Auml: "\xC4",
    Backslash: "\u2216",
    setminus: "\u2216",
    setmn: "\u2216",
    smallsetminus: "\u2216",
    ssetmn: "\u2216",
    Barv: "\u2AE7",
    Barwed: "\u2306",
    doublebarwedge: "\u2306",
    Bcy: "\u0411",
    Because: "\u2235",
    becaus: "\u2235",
    because: "\u2235",
    Bernoullis: "\u212C",
    Bscr: "\u212C",
    bernou: "\u212C",
    Beta: "\u0392",
    Bfr: "\u{1D505}",
    Bopf: "\u{1D539}",
    Breve: "\u02D8",
    breve: "\u02D8",
    Bumpeq: "\u224E",
    HumpDownHump: "\u224E",
    bump: "\u224E",
    CHcy: "\u0427",
    COPY: "\xA9",
    copy: "\xA9",
    Cacute: "\u0106",
    Cap: "\u22D2",
    CapitalDifferentialD: "\u2145",
    DD: "\u2145",
    Cayleys: "\u212D",
    Cfr: "\u212D",
    Ccaron: "\u010C",
    Ccedil: "\xC7",
    Ccirc: "\u0108",
    Cconint: "\u2230",
    Cdot: "\u010A",
    Cedilla: "\xB8",
    cedil: "\xB8",
    CenterDot: "\xB7",
    centerdot: "\xB7",
    middot: "\xB7",
    Chi: "\u03A7",
    CircleDot: "\u2299",
    odot: "\u2299",
    CircleMinus: "\u2296",
    ominus: "\u2296",
    CirclePlus: "\u2295",
    oplus: "\u2295",
    CircleTimes: "\u2297",
    otimes: "\u2297",
    ClockwiseContourIntegral: "\u2232",
    cwconint: "\u2232",
    CloseCurlyDoubleQuote: "\u201D",
    rdquo: "\u201D",
    rdquor: "\u201D",
    CloseCurlyQuote: "\u2019",
    rsquo: "\u2019",
    rsquor: "\u2019",
    Colon: "\u2237",
    Proportion: "\u2237",
    Colone: "\u2A74",
    Congruent: "\u2261",
    equiv: "\u2261",
    Conint: "\u222F",
    DoubleContourIntegral: "\u222F",
    ContourIntegral: "\u222E",
    conint: "\u222E",
    oint: "\u222E",
    Copf: "\u2102",
    complexes: "\u2102",
    Coproduct: "\u2210",
    coprod: "\u2210",
    CounterClockwiseContourIntegral: "\u2233",
    awconint: "\u2233",
    Cross: "\u2A2F",
    Cscr: "\u{1D49E}",
    Cup: "\u22D3",
    CupCap: "\u224D",
    asympeq: "\u224D",
    DDotrahd: "\u2911",
    DJcy: "\u0402",
    DScy: "\u0405",
    DZcy: "\u040F",
    Dagger: "\u2021",
    ddagger: "\u2021",
    Darr: "\u21A1",
    Dashv: "\u2AE4",
    DoubleLeftTee: "\u2AE4",
    Dcaron: "\u010E",
    Dcy: "\u0414",
    Del: "\u2207",
    nabla: "\u2207",
    Delta: "\u0394",
    Dfr: "\u{1D507}",
    DiacriticalAcute: "\xB4",
    acute: "\xB4",
    DiacriticalDot: "\u02D9",
    dot: "\u02D9",
    DiacriticalDoubleAcute: "\u02DD",
    dblac: "\u02DD",
    DiacriticalGrave: "`",
    grave: "`",
    DiacriticalTilde: "\u02DC",
    tilde: "\u02DC",
    Diamond: "\u22C4",
    diam: "\u22C4",
    diamond: "\u22C4",
    DifferentialD: "\u2146",
    dd: "\u2146",
    Dopf: "\u{1D53B}",
    Dot: "\xA8",
    DoubleDot: "\xA8",
    die: "\xA8",
    uml: "\xA8",
    DotDot: "\u20DC",
    DotEqual: "\u2250",
    doteq: "\u2250",
    esdot: "\u2250",
    DoubleDownArrow: "\u21D3",
    Downarrow: "\u21D3",
    dArr: "\u21D3",
    DoubleLeftArrow: "\u21D0",
    Leftarrow: "\u21D0",
    lArr: "\u21D0",
    DoubleLeftRightArrow: "\u21D4",
    Leftrightarrow: "\u21D4",
    hArr: "\u21D4",
    iff: "\u21D4",
    DoubleLongLeftArrow: "\u27F8",
    Longleftarrow: "\u27F8",
    xlArr: "\u27F8",
    DoubleLongLeftRightArrow: "\u27FA",
    Longleftrightarrow: "\u27FA",
    xhArr: "\u27FA",
    DoubleLongRightArrow: "\u27F9",
    Longrightarrow: "\u27F9",
    xrArr: "\u27F9",
    DoubleRightArrow: "\u21D2",
    Implies: "\u21D2",
    Rightarrow: "\u21D2",
    rArr: "\u21D2",
    DoubleRightTee: "\u22A8",
    vDash: "\u22A8",
    DoubleUpArrow: "\u21D1",
    Uparrow: "\u21D1",
    uArr: "\u21D1",
    DoubleUpDownArrow: "\u21D5",
    Updownarrow: "\u21D5",
    vArr: "\u21D5",
    DoubleVerticalBar: "\u2225",
    par: "\u2225",
    parallel: "\u2225",
    shortparallel: "\u2225",
    spar: "\u2225",
    DownArrow: "\u2193",
    ShortDownArrow: "\u2193",
    darr: "\u2193",
    downarrow: "\u2193",
    DownArrowBar: "\u2913",
    DownArrowUpArrow: "\u21F5",
    duarr: "\u21F5",
    DownBreve: "\u0311",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295E",
    DownLeftVector: "\u21BD",
    leftharpoondown: "\u21BD",
    lhard: "\u21BD",
    DownLeftVectorBar: "\u2956",
    DownRightTeeVector: "\u295F",
    DownRightVector: "\u21C1",
    rhard: "\u21C1",
    rightharpoondown: "\u21C1",
    DownRightVectorBar: "\u2957",
    DownTee: "\u22A4",
    top: "\u22A4",
    DownTeeArrow: "\u21A7",
    mapstodown: "\u21A7",
    Dscr: "\u{1D49F}",
    Dstrok: "\u0110",
    ENG: "\u014A",
    ETH: "\xD0",
    Eacute: "\xC9",
    Ecaron: "\u011A",
    Ecirc: "\xCA",
    Ecy: "\u042D",
    Edot: "\u0116",
    Efr: "\u{1D508}",
    Egrave: "\xC8",
    Element: "\u2208",
    in: "\u2208",
    isin: "\u2208",
    isinv: "\u2208",
    Emacr: "\u0112",
    EmptySmallSquare: "\u25FB",
    EmptyVerySmallSquare: "\u25AB",
    Eogon: "\u0118",
    Eopf: "\u{1D53C}",
    Epsilon: "\u0395",
    Equal: "\u2A75",
    EqualTilde: "\u2242",
    eqsim: "\u2242",
    esim: "\u2242",
    Equilibrium: "\u21CC",
    rightleftharpoons: "\u21CC",
    rlhar: "\u21CC",
    Escr: "\u2130",
    expectation: "\u2130",
    Esim: "\u2A73",
    Eta: "\u0397",
    Euml: "\xCB",
    Exists: "\u2203",
    exist: "\u2203",
    ExponentialE: "\u2147",
    ee: "\u2147",
    exponentiale: "\u2147",
    Fcy: "\u0424",
    Ffr: "\u{1D509}",
    FilledSmallSquare: "\u25FC",
    FilledVerySmallSquare: "\u25AA",
    blacksquare: "\u25AA",
    squarf: "\u25AA",
    squf: "\u25AA",
    Fopf: "\u{1D53D}",
    ForAll: "\u2200",
    forall: "\u2200",
    Fouriertrf: "\u2131",
    Fscr: "\u2131",
    GJcy: "\u0403",
    GT: ">",
    gt: ">",
    Gamma: "\u0393",
    Gammad: "\u03DC",
    Gbreve: "\u011E",
    Gcedil: "\u0122",
    Gcirc: "\u011C",
    Gcy: "\u0413",
    Gdot: "\u0120",
    Gfr: "\u{1D50A}",
    Gg: "\u22D9",
    ggg: "\u22D9",
    Gopf: "\u{1D53E}",
    GreaterEqual: "\u2265",
    ge: "\u2265",
    geq: "\u2265",
    GreaterEqualLess: "\u22DB",
    gel: "\u22DB",
    gtreqless: "\u22DB",
    GreaterFullEqual: "\u2267",
    gE: "\u2267",
    geqq: "\u2267",
    GreaterGreater: "\u2AA2",
    GreaterLess: "\u2277",
    gl: "\u2277",
    gtrless: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    geqslant: "\u2A7E",
    ges: "\u2A7E",
    GreaterTilde: "\u2273",
    gsim: "\u2273",
    gtrsim: "\u2273",
    Gscr: "\u{1D4A2}",
    Gt: "\u226B",
    NestedGreaterGreater: "\u226B",
    gg: "\u226B",
    HARDcy: "\u042A",
    Hacek: "\u02C7",
    caron: "\u02C7",
    Hat: "^",
    Hcirc: "\u0124",
    Hfr: "\u210C",
    Poincareplane: "\u210C",
    HilbertSpace: "\u210B",
    Hscr: "\u210B",
    hamilt: "\u210B",
    Hopf: "\u210D",
    quaternions: "\u210D",
    HorizontalLine: "\u2500",
    boxh: "\u2500",
    Hstrok: "\u0126",
    HumpEqual: "\u224F",
    bumpe: "\u224F",
    bumpeq: "\u224F",
    IEcy: "\u0415",
    IJlig: "\u0132",
    IOcy: "\u0401",
    Iacute: "\xCD",
    Icirc: "\xCE",
    Icy: "\u0418",
    Idot: "\u0130",
    Ifr: "\u2111",
    Im: "\u2111",
    image: "\u2111",
    imagpart: "\u2111",
    Igrave: "\xCC",
    Imacr: "\u012A",
    ImaginaryI: "\u2148",
    ii: "\u2148",
    Int: "\u222C",
    Integral: "\u222B",
    int: "\u222B",
    Intersection: "\u22C2",
    bigcap: "\u22C2",
    xcap: "\u22C2",
    InvisibleComma: "\u2063",
    ic: "\u2063",
    InvisibleTimes: "\u2062",
    it: "\u2062",
    Iogon: "\u012E",
    Iopf: "\u{1D540}",
    Iota: "\u0399",
    Iscr: "\u2110",
    imagline: "\u2110",
    Itilde: "\u0128",
    Iukcy: "\u0406",
    Iuml: "\xCF",
    Jcirc: "\u0134",
    Jcy: "\u0419",
    Jfr: "\u{1D50D}",
    Jopf: "\u{1D541}",
    Jscr: "\u{1D4A5}",
    Jsercy: "\u0408",
    Jukcy: "\u0404",
    KHcy: "\u0425",
    KJcy: "\u040C",
    Kappa: "\u039A",
    Kcedil: "\u0136",
    Kcy: "\u041A",
    Kfr: "\u{1D50E}",
    Kopf: "\u{1D542}",
    Kscr: "\u{1D4A6}",
    LJcy: "\u0409",
    LT: "<",
    lt: "<",
    Lacute: "\u0139",
    Lambda: "\u039B",
    Lang: "\u27EA",
    Laplacetrf: "\u2112",
    Lscr: "\u2112",
    lagran: "\u2112",
    Larr: "\u219E",
    twoheadleftarrow: "\u219E",
    Lcaron: "\u013D",
    Lcedil: "\u013B",
    Lcy: "\u041B",
    LeftAngleBracket: "\u27E8",
    lang: "\u27E8",
    langle: "\u27E8",
    LeftArrow: "\u2190",
    ShortLeftArrow: "\u2190",
    larr: "\u2190",
    leftarrow: "\u2190",
    slarr: "\u2190",
    LeftArrowBar: "\u21E4",
    larrb: "\u21E4",
    LeftArrowRightArrow: "\u21C6",
    leftrightarrows: "\u21C6",
    lrarr: "\u21C6",
    LeftCeiling: "\u2308",
    lceil: "\u2308",
    LeftDoubleBracket: "\u27E6",
    lobrk: "\u27E6",
    LeftDownTeeVector: "\u2961",
    LeftDownVector: "\u21C3",
    dharl: "\u21C3",
    downharpoonleft: "\u21C3",
    LeftDownVectorBar: "\u2959",
    LeftFloor: "\u230A",
    lfloor: "\u230A",
    LeftRightArrow: "\u2194",
    harr: "\u2194",
    leftrightarrow: "\u2194",
    LeftRightVector: "\u294E",
    LeftTee: "\u22A3",
    dashv: "\u22A3",
    LeftTeeArrow: "\u21A4",
    mapstoleft: "\u21A4",
    LeftTeeVector: "\u295A",
    LeftTriangle: "\u22B2",
    vartriangleleft: "\u22B2",
    vltri: "\u22B2",
    LeftTriangleBar: "\u29CF",
    LeftTriangleEqual: "\u22B4",
    ltrie: "\u22B4",
    trianglelefteq: "\u22B4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVector: "\u21BF",
    uharl: "\u21BF",
    upharpoonleft: "\u21BF",
    LeftUpVectorBar: "\u2958",
    LeftVector: "\u21BC",
    leftharpoonup: "\u21BC",
    lharu: "\u21BC",
    LeftVectorBar: "\u2952",
    LessEqualGreater: "\u22DA",
    leg: "\u22DA",
    lesseqgtr: "\u22DA",
    LessFullEqual: "\u2266",
    lE: "\u2266",
    leqq: "\u2266",
    LessGreater: "\u2276",
    lessgtr: "\u2276",
    lg: "\u2276",
    LessLess: "\u2AA1",
    LessSlantEqual: "\u2A7D",
    leqslant: "\u2A7D",
    les: "\u2A7D",
    LessTilde: "\u2272",
    lesssim: "\u2272",
    lsim: "\u2272",
    Lfr: "\u{1D50F}",
    Ll: "\u22D8",
    Lleftarrow: "\u21DA",
    lAarr: "\u21DA",
    Lmidot: "\u013F",
    LongLeftArrow: "\u27F5",
    longleftarrow: "\u27F5",
    xlarr: "\u27F5",
    LongLeftRightArrow: "\u27F7",
    longleftrightarrow: "\u27F7",
    xharr: "\u27F7",
    LongRightArrow: "\u27F6",
    longrightarrow: "\u27F6",
    xrarr: "\u27F6",
    Lopf: "\u{1D543}",
    LowerLeftArrow: "\u2199",
    swarr: "\u2199",
    swarrow: "\u2199",
    LowerRightArrow: "\u2198",
    searr: "\u2198",
    searrow: "\u2198",
    Lsh: "\u21B0",
    lsh: "\u21B0",
    Lstrok: "\u0141",
    Lt: "\u226A",
    NestedLessLess: "\u226A",
    ll: "\u226A",
    Map: "\u2905",
    Mcy: "\u041C",
    MediumSpace: "\u205F",
    Mellintrf: "\u2133",
    Mscr: "\u2133",
    phmmat: "\u2133",
    Mfr: "\u{1D510}",
    MinusPlus: "\u2213",
    mnplus: "\u2213",
    mp: "\u2213",
    Mopf: "\u{1D544}",
    Mu: "\u039C",
    NJcy: "\u040A",
    Nacute: "\u0143",
    Ncaron: "\u0147",
    Ncedil: "\u0145",
    Ncy: "\u041D",
    NegativeMediumSpace: "\u200B",
    NegativeThickSpace: "\u200B",
    NegativeThinSpace: "\u200B",
    NegativeVeryThinSpace: "\u200B",
    ZeroWidthSpace: "\u200B",
    NewLine: `
`,
    Nfr: "\u{1D511}",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xA0",
    nbsp: "\xA0",
    Nopf: "\u2115",
    naturals: "\u2115",
    Not: "\u2AEC",
    NotCongruent: "\u2262",
    nequiv: "\u2262",
    NotCupCap: "\u226D",
    NotDoubleVerticalBar: "\u2226",
    npar: "\u2226",
    nparallel: "\u2226",
    nshortparallel: "\u2226",
    nspar: "\u2226",
    NotElement: "\u2209",
    notin: "\u2209",
    notinva: "\u2209",
    NotEqual: "\u2260",
    ne: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    nesim: "\u2242\u0338",
    NotExists: "\u2204",
    nexist: "\u2204",
    nexists: "\u2204",
    NotGreater: "\u226F",
    ngt: "\u226F",
    ngtr: "\u226F",
    NotGreaterEqual: "\u2271",
    nge: "\u2271",
    ngeq: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    ngE: "\u2267\u0338",
    ngeqq: "\u2267\u0338",
    NotGreaterGreater: "\u226B\u0338",
    nGtv: "\u226B\u0338",
    NotGreaterLess: "\u2279",
    ntgl: "\u2279",
    NotGreaterSlantEqual: "\u2A7E\u0338",
    ngeqslant: "\u2A7E\u0338",
    nges: "\u2A7E\u0338",
    NotGreaterTilde: "\u2275",
    ngsim: "\u2275",
    NotHumpDownHump: "\u224E\u0338",
    nbump: "\u224E\u0338",
    NotHumpEqual: "\u224F\u0338",
    nbumpe: "\u224F\u0338",
    NotLeftTriangle: "\u22EA",
    nltri: "\u22EA",
    ntriangleleft: "\u22EA",
    NotLeftTriangleBar: "\u29CF\u0338",
    NotLeftTriangleEqual: "\u22EC",
    nltrie: "\u22EC",
    ntrianglelefteq: "\u22EC",
    NotLess: "\u226E",
    nless: "\u226E",
    nlt: "\u226E",
    NotLessEqual: "\u2270",
    nle: "\u2270",
    nleq: "\u2270",
    NotLessGreater: "\u2278",
    ntlg: "\u2278",
    NotLessLess: "\u226A\u0338",
    nLtv: "\u226A\u0338",
    NotLessSlantEqual: "\u2A7D\u0338",
    nleqslant: "\u2A7D\u0338",
    nles: "\u2A7D\u0338",
    NotLessTilde: "\u2274",
    nlsim: "\u2274",
    NotNestedGreaterGreater: "\u2AA2\u0338",
    NotNestedLessLess: "\u2AA1\u0338",
    NotPrecedes: "\u2280",
    npr: "\u2280",
    nprec: "\u2280",
    NotPrecedesEqual: "\u2AAF\u0338",
    npre: "\u2AAF\u0338",
    npreceq: "\u2AAF\u0338",
    NotPrecedesSlantEqual: "\u22E0",
    nprcue: "\u22E0",
    NotReverseElement: "\u220C",
    notni: "\u220C",
    notniva: "\u220C",
    NotRightTriangle: "\u22EB",
    nrtri: "\u22EB",
    ntriangleright: "\u22EB",
    NotRightTriangleBar: "\u29D0\u0338",
    NotRightTriangleEqual: "\u22ED",
    nrtrie: "\u22ED",
    ntrianglerighteq: "\u22ED",
    NotSquareSubset: "\u228F\u0338",
    NotSquareSubsetEqual: "\u22E2",
    nsqsube: "\u22E2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22E3",
    nsqsupe: "\u22E3",
    NotSubset: "\u2282\u20D2",
    nsubset: "\u2282\u20D2",
    vnsub: "\u2282\u20D2",
    NotSubsetEqual: "\u2288",
    nsube: "\u2288",
    nsubseteq: "\u2288",
    NotSucceeds: "\u2281",
    nsc: "\u2281",
    nsucc: "\u2281",
    NotSucceedsEqual: "\u2AB0\u0338",
    nsce: "\u2AB0\u0338",
    nsucceq: "\u2AB0\u0338",
    NotSucceedsSlantEqual: "\u22E1",
    nsccue: "\u22E1",
    NotSucceedsTilde: "\u227F\u0338",
    NotSuperset: "\u2283\u20D2",
    nsupset: "\u2283\u20D2",
    vnsup: "\u2283\u20D2",
    NotSupersetEqual: "\u2289",
    nsupe: "\u2289",
    nsupseteq: "\u2289",
    NotTilde: "\u2241",
    nsim: "\u2241",
    NotTildeEqual: "\u2244",
    nsime: "\u2244",
    nsimeq: "\u2244",
    NotTildeFullEqual: "\u2247",
    ncong: "\u2247",
    NotTildeTilde: "\u2249",
    nap: "\u2249",
    napprox: "\u2249",
    NotVerticalBar: "\u2224",
    nmid: "\u2224",
    nshortmid: "\u2224",
    nsmid: "\u2224",
    Nscr: "\u{1D4A9}",
    Ntilde: "\xD1",
    Nu: "\u039D",
    OElig: "\u0152",
    Oacute: "\xD3",
    Ocirc: "\xD4",
    Ocy: "\u041E",
    Odblac: "\u0150",
    Ofr: "\u{1D512}",
    Ograve: "\xD2",
    Omacr: "\u014C",
    Omega: "\u03A9",
    ohm: "\u03A9",
    Omicron: "\u039F",
    Oopf: "\u{1D546}",
    OpenCurlyDoubleQuote: "\u201C",
    ldquo: "\u201C",
    OpenCurlyQuote: "\u2018",
    lsquo: "\u2018",
    Or: "\u2A54",
    Oscr: "\u{1D4AA}",
    Oslash: "\xD8",
    Otilde: "\xD5",
    Otimes: "\u2A37",
    Ouml: "\xD6",
    OverBar: "\u203E",
    oline: "\u203E",
    OverBrace: "\u23DE",
    OverBracket: "\u23B4",
    tbrk: "\u23B4",
    OverParenthesis: "\u23DC",
    PartialD: "\u2202",
    part: "\u2202",
    Pcy: "\u041F",
    Pfr: "\u{1D513}",
    Phi: "\u03A6",
    Pi: "\u03A0",
    PlusMinus: "\xB1",
    plusmn: "\xB1",
    pm: "\xB1",
    Popf: "\u2119",
    primes: "\u2119",
    Pr: "\u2ABB",
    Precedes: "\u227A",
    pr: "\u227A",
    prec: "\u227A",
    PrecedesEqual: "\u2AAF",
    pre: "\u2AAF",
    preceq: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    prcue: "\u227C",
    preccurlyeq: "\u227C",
    PrecedesTilde: "\u227E",
    precsim: "\u227E",
    prsim: "\u227E",
    Prime: "\u2033",
    Product: "\u220F",
    prod: "\u220F",
    Proportional: "\u221D",
    prop: "\u221D",
    propto: "\u221D",
    varpropto: "\u221D",
    vprop: "\u221D",
    Pscr: "\u{1D4AB}",
    Psi: "\u03A8",
    QUOT: '"',
    quot: '"',
    Qfr: "\u{1D514}",
    Qopf: "\u211A",
    rationals: "\u211A",
    Qscr: "\u{1D4AC}",
    RBarr: "\u2910",
    drbkarow: "\u2910",
    REG: "\xAE",
    circledR: "\xAE",
    reg: "\xAE",
    Racute: "\u0154",
    Rang: "\u27EB",
    Rarr: "\u21A0",
    twoheadrightarrow: "\u21A0",
    Rarrtl: "\u2916",
    Rcaron: "\u0158",
    Rcedil: "\u0156",
    Rcy: "\u0420",
    Re: "\u211C",
    Rfr: "\u211C",
    real: "\u211C",
    realpart: "\u211C",
    ReverseElement: "\u220B",
    SuchThat: "\u220B",
    ni: "\u220B",
    niv: "\u220B",
    ReverseEquilibrium: "\u21CB",
    leftrightharpoons: "\u21CB",
    lrhar: "\u21CB",
    ReverseUpEquilibrium: "\u296F",
    duhar: "\u296F",
    Rho: "\u03A1",
    RightAngleBracket: "\u27E9",
    rang: "\u27E9",
    rangle: "\u27E9",
    RightArrow: "\u2192",
    ShortRightArrow: "\u2192",
    rarr: "\u2192",
    rightarrow: "\u2192",
    srarr: "\u2192",
    RightArrowBar: "\u21E5",
    rarrb: "\u21E5",
    RightArrowLeftArrow: "\u21C4",
    rightleftarrows: "\u21C4",
    rlarr: "\u21C4",
    RightCeiling: "\u2309",
    rceil: "\u2309",
    RightDoubleBracket: "\u27E7",
    robrk: "\u27E7",
    RightDownTeeVector: "\u295D",
    RightDownVector: "\u21C2",
    dharr: "\u21C2",
    downharpoonright: "\u21C2",
    RightDownVectorBar: "\u2955",
    RightFloor: "\u230B",
    rfloor: "\u230B",
    RightTee: "\u22A2",
    vdash: "\u22A2",
    RightTeeArrow: "\u21A6",
    map: "\u21A6",
    mapsto: "\u21A6",
    RightTeeVector: "\u295B",
    RightTriangle: "\u22B3",
    vartriangleright: "\u22B3",
    vrtri: "\u22B3",
    RightTriangleBar: "\u29D0",
    RightTriangleEqual: "\u22B5",
    rtrie: "\u22B5",
    trianglerighteq: "\u22B5",
    RightUpDownVector: "\u294F",
    RightUpTeeVector: "\u295C",
    RightUpVector: "\u21BE",
    uharr: "\u21BE",
    upharpoonright: "\u21BE",
    RightUpVectorBar: "\u2954",
    RightVector: "\u21C0",
    rharu: "\u21C0",
    rightharpoonup: "\u21C0",
    RightVectorBar: "\u2953",
    Ropf: "\u211D",
    reals: "\u211D",
    RoundImplies: "\u2970",
    Rrightarrow: "\u21DB",
    rAarr: "\u21DB",
    Rscr: "\u211B",
    realine: "\u211B",
    Rsh: "\u21B1",
    rsh: "\u21B1",
    RuleDelayed: "\u29F4",
    SHCHcy: "\u0429",
    SHcy: "\u0428",
    SOFTcy: "\u042C",
    Sacute: "\u015A",
    Sc: "\u2ABC",
    Scaron: "\u0160",
    Scedil: "\u015E",
    Scirc: "\u015C",
    Scy: "\u0421",
    Sfr: "\u{1D516}",
    ShortUpArrow: "\u2191",
    UpArrow: "\u2191",
    uarr: "\u2191",
    uparrow: "\u2191",
    Sigma: "\u03A3",
    SmallCircle: "\u2218",
    compfn: "\u2218",
    Sopf: "\u{1D54A}",
    Sqrt: "\u221A",
    radic: "\u221A",
    Square: "\u25A1",
    squ: "\u25A1",
    square: "\u25A1",
    SquareIntersection: "\u2293",
    sqcap: "\u2293",
    SquareSubset: "\u228F",
    sqsub: "\u228F",
    sqsubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    sqsube: "\u2291",
    sqsubseteq: "\u2291",
    SquareSuperset: "\u2290",
    sqsup: "\u2290",
    sqsupset: "\u2290",
    SquareSupersetEqual: "\u2292",
    sqsupe: "\u2292",
    sqsupseteq: "\u2292",
    SquareUnion: "\u2294",
    sqcup: "\u2294",
    Sscr: "\u{1D4AE}",
    Star: "\u22C6",
    sstarf: "\u22C6",
    Sub: "\u22D0",
    Subset: "\u22D0",
    SubsetEqual: "\u2286",
    sube: "\u2286",
    subseteq: "\u2286",
    Succeeds: "\u227B",
    sc: "\u227B",
    succ: "\u227B",
    SucceedsEqual: "\u2AB0",
    sce: "\u2AB0",
    succeq: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    sccue: "\u227D",
    succcurlyeq: "\u227D",
    SucceedsTilde: "\u227F",
    scsim: "\u227F",
    succsim: "\u227F",
    Sum: "\u2211",
    sum: "\u2211",
    Sup: "\u22D1",
    Supset: "\u22D1",
    Superset: "\u2283",
    sup: "\u2283",
    supset: "\u2283",
    SupersetEqual: "\u2287",
    supe: "\u2287",
    supseteq: "\u2287",
    THORN: "\xDE",
    TRADE: "\u2122",
    trade: "\u2122",
    TSHcy: "\u040B",
    TScy: "\u0426",
    Tab: "	",
    Tau: "\u03A4",
    Tcaron: "\u0164",
    Tcedil: "\u0162",
    Tcy: "\u0422",
    Tfr: "\u{1D517}",
    Therefore: "\u2234",
    there4: "\u2234",
    therefore: "\u2234",
    Theta: "\u0398",
    ThickSpace: "\u205F\u200A",
    ThinSpace: "\u2009",
    thinsp: "\u2009",
    Tilde: "\u223C",
    sim: "\u223C",
    thicksim: "\u223C",
    thksim: "\u223C",
    TildeEqual: "\u2243",
    sime: "\u2243",
    simeq: "\u2243",
    TildeFullEqual: "\u2245",
    cong: "\u2245",
    TildeTilde: "\u2248",
    ap: "\u2248",
    approx: "\u2248",
    asymp: "\u2248",
    thickapprox: "\u2248",
    thkap: "\u2248",
    Topf: "\u{1D54B}",
    TripleDot: "\u20DB",
    tdot: "\u20DB",
    Tscr: "\u{1D4AF}",
    Tstrok: "\u0166",
    Uacute: "\xDA",
    Uarr: "\u219F",
    Uarrocir: "\u2949",
    Ubrcy: "\u040E",
    Ubreve: "\u016C",
    Ucirc: "\xDB",
    Ucy: "\u0423",
    Udblac: "\u0170",
    Ufr: "\u{1D518}",
    Ugrave: "\xD9",
    Umacr: "\u016A",
    UnderBar: "_",
    lowbar: "_",
    UnderBrace: "\u23DF",
    UnderBracket: "\u23B5",
    bbrk: "\u23B5",
    UnderParenthesis: "\u23DD",
    Union: "\u22C3",
    bigcup: "\u22C3",
    xcup: "\u22C3",
    UnionPlus: "\u228E",
    uplus: "\u228E",
    Uogon: "\u0172",
    Uopf: "\u{1D54C}",
    UpArrowBar: "\u2912",
    UpArrowDownArrow: "\u21C5",
    udarr: "\u21C5",
    UpDownArrow: "\u2195",
    updownarrow: "\u2195",
    varr: "\u2195",
    UpEquilibrium: "\u296E",
    udhar: "\u296E",
    UpTee: "\u22A5",
    bot: "\u22A5",
    bottom: "\u22A5",
    perp: "\u22A5",
    UpTeeArrow: "\u21A5",
    mapstoup: "\u21A5",
    UpperLeftArrow: "\u2196",
    nwarr: "\u2196",
    nwarrow: "\u2196",
    UpperRightArrow: "\u2197",
    nearr: "\u2197",
    nearrow: "\u2197",
    Upsi: "\u03D2",
    upsih: "\u03D2",
    Upsilon: "\u03A5",
    Uring: "\u016E",
    Uscr: "\u{1D4B0}",
    Utilde: "\u0168",
    Uuml: "\xDC",
    VDash: "\u22AB",
    Vbar: "\u2AEB",
    Vcy: "\u0412",
    Vdash: "\u22A9",
    Vdashl: "\u2AE6",
    Vee: "\u22C1",
    bigvee: "\u22C1",
    xvee: "\u22C1",
    Verbar: "\u2016",
    Vert: "\u2016",
    VerticalBar: "\u2223",
    mid: "\u2223",
    shortmid: "\u2223",
    smid: "\u2223",
    VerticalLine: "|",
    verbar: "|",
    vert: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    wr: "\u2240",
    wreath: "\u2240",
    VeryThinSpace: "\u200A",
    hairsp: "\u200A",
    Vfr: "\u{1D519}",
    Vopf: "\u{1D54D}",
    Vscr: "\u{1D4B1}",
    Vvdash: "\u22AA",
    Wcirc: "\u0174",
    Wedge: "\u22C0",
    bigwedge: "\u22C0",
    xwedge: "\u22C0",
    Wfr: "\u{1D51A}",
    Wopf: "\u{1D54E}",
    Wscr: "\u{1D4B2}",
    Xfr: "\u{1D51B}",
    Xi: "\u039E",
    Xopf: "\u{1D54F}",
    Xscr: "\u{1D4B3}",
    YAcy: "\u042F",
    YIcy: "\u0407",
    YUcy: "\u042E",
    Yacute: "\xDD",
    Ycirc: "\u0176",
    Ycy: "\u042B",
    Yfr: "\u{1D51C}",
    Yopf: "\u{1D550}",
    Yscr: "\u{1D4B4}",
    Yuml: "\u0178",
    ZHcy: "\u0416",
    Zacute: "\u0179",
    Zcaron: "\u017D",
    Zcy: "\u0417",
    Zdot: "\u017B",
    Zeta: "\u0396",
    Zfr: "\u2128",
    zeetrf: "\u2128",
    Zopf: "\u2124",
    integers: "\u2124",
    Zscr: "\u{1D4B5}",
    aacute: "\xE1",
    abreve: "\u0103",
    ac: "\u223E",
    mstpos: "\u223E",
    acE: "\u223E\u0333",
    acd: "\u223F",
    acirc: "\xE2",
    acy: "\u0430",
    aelig: "\xE6",
    afr: "\u{1D51E}",
    agrave: "\xE0",
    alefsym: "\u2135",
    aleph: "\u2135",
    alpha: "\u03B1",
    amacr: "\u0101",
    amalg: "\u2A3F",
    and: "\u2227",
    wedge: "\u2227",
    andand: "\u2A55",
    andd: "\u2A5C",
    andslope: "\u2A58",
    andv: "\u2A5A",
    ang: "\u2220",
    angle: "\u2220",
    ange: "\u29A4",
    angmsd: "\u2221",
    measuredangle: "\u2221",
    angmsdaa: "\u29A8",
    angmsdab: "\u29A9",
    angmsdac: "\u29AA",
    angmsdad: "\u29AB",
    angmsdae: "\u29AC",
    angmsdaf: "\u29AD",
    angmsdag: "\u29AE",
    angmsdah: "\u29AF",
    angrt: "\u221F",
    angrtvb: "\u22BE",
    angrtvbd: "\u299D",
    angsph: "\u2222",
    angzarr: "\u237C",
    aogon: "\u0105",
    aopf: "\u{1D552}",
    apE: "\u2A70",
    apacir: "\u2A6F",
    ape: "\u224A",
    approxeq: "\u224A",
    apid: "\u224B",
    apos: "'",
    aring: "\xE5",
    ascr: "\u{1D4B6}",
    ast: "*",
    midast: "*",
    atilde: "\xE3",
    auml: "\xE4",
    awint: "\u2A11",
    bNot: "\u2AED",
    backcong: "\u224C",
    bcong: "\u224C",
    backepsilon: "\u03F6",
    bepsi: "\u03F6",
    backprime: "\u2035",
    bprime: "\u2035",
    backsim: "\u223D",
    bsim: "\u223D",
    backsimeq: "\u22CD",
    bsime: "\u22CD",
    barvee: "\u22BD",
    barwed: "\u2305",
    barwedge: "\u2305",
    bbrktbrk: "\u23B6",
    bcy: "\u0431",
    bdquo: "\u201E",
    ldquor: "\u201E",
    bemptyv: "\u29B0",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    twixt: "\u226C",
    bfr: "\u{1D51F}",
    bigcirc: "\u25EF",
    xcirc: "\u25EF",
    bigodot: "\u2A00",
    xodot: "\u2A00",
    bigoplus: "\u2A01",
    xoplus: "\u2A01",
    bigotimes: "\u2A02",
    xotime: "\u2A02",
    bigsqcup: "\u2A06",
    xsqcup: "\u2A06",
    bigstar: "\u2605",
    starf: "\u2605",
    bigtriangledown: "\u25BD",
    xdtri: "\u25BD",
    bigtriangleup: "\u25B3",
    xutri: "\u25B3",
    biguplus: "\u2A04",
    xuplus: "\u2A04",
    bkarow: "\u290D",
    rbarr: "\u290D",
    blacklozenge: "\u29EB",
    lozf: "\u29EB",
    blacktriangle: "\u25B4",
    utrif: "\u25B4",
    blacktriangledown: "\u25BE",
    dtrif: "\u25BE",
    blacktriangleleft: "\u25C2",
    ltrif: "\u25C2",
    blacktriangleright: "\u25B8",
    rtrif: "\u25B8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20E5",
    bnequiv: "\u2261\u20E5",
    bnot: "\u2310",
    bopf: "\u{1D553}",
    bowtie: "\u22C8",
    boxDL: "\u2557",
    boxDR: "\u2554",
    boxDl: "\u2556",
    boxDr: "\u2553",
    boxH: "\u2550",
    boxHD: "\u2566",
    boxHU: "\u2569",
    boxHd: "\u2564",
    boxHu: "\u2567",
    boxUL: "\u255D",
    boxUR: "\u255A",
    boxUl: "\u255C",
    boxUr: "\u2559",
    boxV: "\u2551",
    boxVH: "\u256C",
    boxVL: "\u2563",
    boxVR: "\u2560",
    boxVh: "\u256B",
    boxVl: "\u2562",
    boxVr: "\u255F",
    boxbox: "\u29C9",
    boxdL: "\u2555",
    boxdR: "\u2552",
    boxdl: "\u2510",
    boxdr: "\u250C",
    boxhD: "\u2565",
    boxhU: "\u2568",
    boxhd: "\u252C",
    boxhu: "\u2534",
    boxminus: "\u229F",
    minusb: "\u229F",
    boxplus: "\u229E",
    plusb: "\u229E",
    boxtimes: "\u22A0",
    timesb: "\u22A0",
    boxuL: "\u255B",
    boxuR: "\u2558",
    boxul: "\u2518",
    boxur: "\u2514",
    boxv: "\u2502",
    boxvH: "\u256A",
    boxvL: "\u2561",
    boxvR: "\u255E",
    boxvh: "\u253C",
    boxvl: "\u2524",
    boxvr: "\u251C",
    brvbar: "\xA6",
    bscr: "\u{1D4B7}",
    bsemi: "\u204F",
    bsol: "\\",
    bsolb: "\u29C5",
    bsolhsub: "\u27C8",
    bull: "\u2022",
    bullet: "\u2022",
    bumpE: "\u2AAE",
    cacute: "\u0107",
    cap: "\u2229",
    capand: "\u2A44",
    capbrcup: "\u2A49",
    capcap: "\u2A4B",
    capcup: "\u2A47",
    capdot: "\u2A40",
    caps: "\u2229\uFE00",
    caret: "\u2041",
    ccaps: "\u2A4D",
    ccaron: "\u010D",
    ccedil: "\xE7",
    ccirc: "\u0109",
    ccups: "\u2A4C",
    ccupssm: "\u2A50",
    cdot: "\u010B",
    cemptyv: "\u29B2",
    cent: "\xA2",
    cfr: "\u{1D520}",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    chi: "\u03C7",
    cir: "\u25CB",
    cirE: "\u29C3",
    circ: "\u02C6",
    circeq: "\u2257",
    cire: "\u2257",
    circlearrowleft: "\u21BA",
    olarr: "\u21BA",
    circlearrowright: "\u21BB",
    orarr: "\u21BB",
    circledS: "\u24C8",
    oS: "\u24C8",
    circledast: "\u229B",
    oast: "\u229B",
    circledcirc: "\u229A",
    ocir: "\u229A",
    circleddash: "\u229D",
    odash: "\u229D",
    cirfnint: "\u2A10",
    cirmid: "\u2AEF",
    cirscir: "\u29C2",
    clubs: "\u2663",
    clubsuit: "\u2663",
    colon: ":",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    complement: "\u2201",
    congdot: "\u2A6D",
    copf: "\u{1D554}",
    copysr: "\u2117",
    crarr: "\u21B5",
    cross: "\u2717",
    cscr: "\u{1D4B8}",
    csub: "\u2ACF",
    csube: "\u2AD1",
    csup: "\u2AD0",
    csupe: "\u2AD2",
    ctdot: "\u22EF",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22DE",
    curlyeqprec: "\u22DE",
    cuesc: "\u22DF",
    curlyeqsucc: "\u22DF",
    cularr: "\u21B6",
    curvearrowleft: "\u21B6",
    cularrp: "\u293D",
    cup: "\u222A",
    cupbrcap: "\u2A48",
    cupcap: "\u2A46",
    cupcup: "\u2A4A",
    cupdot: "\u228D",
    cupor: "\u2A45",
    cups: "\u222A\uFE00",
    curarr: "\u21B7",
    curvearrowright: "\u21B7",
    curarrm: "\u293C",
    curlyvee: "\u22CE",
    cuvee: "\u22CE",
    curlywedge: "\u22CF",
    cuwed: "\u22CF",
    curren: "\xA4",
    cwint: "\u2231",
    cylcty: "\u232D",
    dHar: "\u2965",
    dagger: "\u2020",
    daleth: "\u2138",
    dash: "\u2010",
    hyphen: "\u2010",
    dbkarow: "\u290F",
    rBarr: "\u290F",
    dcaron: "\u010F",
    dcy: "\u0434",
    ddarr: "\u21CA",
    downdownarrows: "\u21CA",
    ddotseq: "\u2A77",
    eDDot: "\u2A77",
    deg: "\xB0",
    delta: "\u03B4",
    demptyv: "\u29B1",
    dfisht: "\u297F",
    dfr: "\u{1D521}",
    diamondsuit: "\u2666",
    diams: "\u2666",
    digamma: "\u03DD",
    gammad: "\u03DD",
    disin: "\u22F2",
    div: "\xF7",
    divide: "\xF7",
    divideontimes: "\u22C7",
    divonx: "\u22C7",
    djcy: "\u0452",
    dlcorn: "\u231E",
    llcorner: "\u231E",
    dlcrop: "\u230D",
    dollar: "$",
    dopf: "\u{1D555}",
    doteqdot: "\u2251",
    eDot: "\u2251",
    dotminus: "\u2238",
    minusd: "\u2238",
    dotplus: "\u2214",
    plusdo: "\u2214",
    dotsquare: "\u22A1",
    sdotb: "\u22A1",
    drcorn: "\u231F",
    lrcorner: "\u231F",
    drcrop: "\u230C",
    dscr: "\u{1D4B9}",
    dscy: "\u0455",
    dsol: "\u29F6",
    dstrok: "\u0111",
    dtdot: "\u22F1",
    dtri: "\u25BF",
    triangledown: "\u25BF",
    dwangle: "\u29A6",
    dzcy: "\u045F",
    dzigrarr: "\u27FF",
    eacute: "\xE9",
    easter: "\u2A6E",
    ecaron: "\u011B",
    ecir: "\u2256",
    eqcirc: "\u2256",
    ecirc: "\xEA",
    ecolon: "\u2255",
    eqcolon: "\u2255",
    ecy: "\u044D",
    edot: "\u0117",
    efDot: "\u2252",
    fallingdotseq: "\u2252",
    efr: "\u{1D522}",
    eg: "\u2A9A",
    egrave: "\xE8",
    egs: "\u2A96",
    eqslantgtr: "\u2A96",
    egsdot: "\u2A98",
    el: "\u2A99",
    elinters: "\u23E7",
    ell: "\u2113",
    els: "\u2A95",
    eqslantless: "\u2A95",
    elsdot: "\u2A97",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    emptyv: "\u2205",
    varnothing: "\u2205",
    emsp13: "\u2004",
    emsp14: "\u2005",
    emsp: "\u2003",
    eng: "\u014B",
    ensp: "\u2002",
    eogon: "\u0119",
    eopf: "\u{1D556}",
    epar: "\u22D5",
    eparsl: "\u29E3",
    eplus: "\u2A71",
    epsi: "\u03B5",
    epsilon: "\u03B5",
    epsiv: "\u03F5",
    straightepsilon: "\u03F5",
    varepsilon: "\u03F5",
    equals: "=",
    equest: "\u225F",
    questeq: "\u225F",
    equivDD: "\u2A78",
    eqvparsl: "\u29E5",
    erDot: "\u2253",
    risingdotseq: "\u2253",
    erarr: "\u2971",
    escr: "\u212F",
    eta: "\u03B7",
    eth: "\xF0",
    euml: "\xEB",
    euro: "\u20AC",
    excl: "!",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\uFB03",
    fflig: "\uFB00",
    ffllig: "\uFB04",
    ffr: "\u{1D523}",
    filig: "\uFB01",
    fjlig: "fj",
    flat: "\u266D",
    fllig: "\uFB02",
    fltns: "\u25B1",
    fnof: "\u0192",
    fopf: "\u{1D557}",
    fork: "\u22D4",
    pitchfork: "\u22D4",
    forkv: "\u2AD9",
    fpartint: "\u2A0D",
    frac12: "\xBD",
    half: "\xBD",
    frac13: "\u2153",
    frac14: "\xBC",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215B",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xBE",
    frac35: "\u2157",
    frac38: "\u215C",
    frac45: "\u2158",
    frac56: "\u215A",
    frac58: "\u215D",
    frac78: "\u215E",
    frasl: "\u2044",
    frown: "\u2322",
    sfrown: "\u2322",
    fscr: "\u{1D4BB}",
    gEl: "\u2A8C",
    gtreqqless: "\u2A8C",
    gacute: "\u01F5",
    gamma: "\u03B3",
    gap: "\u2A86",
    gtrapprox: "\u2A86",
    gbreve: "\u011F",
    gcirc: "\u011D",
    gcy: "\u0433",
    gdot: "\u0121",
    gescc: "\u2AA9",
    gesdot: "\u2A80",
    gesdoto: "\u2A82",
    gesdotol: "\u2A84",
    gesl: "\u22DB\uFE00",
    gesles: "\u2A94",
    gfr: "\u{1D524}",
    gimel: "\u2137",
    gjcy: "\u0453",
    glE: "\u2A92",
    gla: "\u2AA5",
    glj: "\u2AA4",
    gnE: "\u2269",
    gneqq: "\u2269",
    gnap: "\u2A8A",
    gnapprox: "\u2A8A",
    gne: "\u2A88",
    gneq: "\u2A88",
    gnsim: "\u22E7",
    gopf: "\u{1D558}",
    gscr: "\u210A",
    gsime: "\u2A8E",
    gsiml: "\u2A90",
    gtcc: "\u2AA7",
    gtcir: "\u2A7A",
    gtdot: "\u22D7",
    gtrdot: "\u22D7",
    gtlPar: "\u2995",
    gtquest: "\u2A7C",
    gtrarr: "\u2978",
    gvertneqq: "\u2269\uFE00",
    gvnE: "\u2269\uFE00",
    hardcy: "\u044A",
    harrcir: "\u2948",
    harrw: "\u21AD",
    leftrightsquigarrow: "\u21AD",
    hbar: "\u210F",
    hslash: "\u210F",
    planck: "\u210F",
    plankv: "\u210F",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    mldr: "\u2026",
    hercon: "\u22B9",
    hfr: "\u{1D525}",
    hksearow: "\u2925",
    searhk: "\u2925",
    hkswarow: "\u2926",
    swarhk: "\u2926",
    hoarr: "\u21FF",
    homtht: "\u223B",
    hookleftarrow: "\u21A9",
    larrhk: "\u21A9",
    hookrightarrow: "\u21AA",
    rarrhk: "\u21AA",
    hopf: "\u{1D559}",
    horbar: "\u2015",
    hscr: "\u{1D4BD}",
    hstrok: "\u0127",
    hybull: "\u2043",
    iacute: "\xED",
    icirc: "\xEE",
    icy: "\u0438",
    iecy: "\u0435",
    iexcl: "\xA1",
    ifr: "\u{1D526}",
    igrave: "\xEC",
    iiiint: "\u2A0C",
    qint: "\u2A0C",
    iiint: "\u222D",
    tint: "\u222D",
    iinfin: "\u29DC",
    iiota: "\u2129",
    ijlig: "\u0133",
    imacr: "\u012B",
    imath: "\u0131",
    inodot: "\u0131",
    imof: "\u22B7",
    imped: "\u01B5",
    incare: "\u2105",
    infin: "\u221E",
    infintie: "\u29DD",
    intcal: "\u22BA",
    intercal: "\u22BA",
    intlarhk: "\u2A17",
    intprod: "\u2A3C",
    iprod: "\u2A3C",
    iocy: "\u0451",
    iogon: "\u012F",
    iopf: "\u{1D55A}",
    iota: "\u03B9",
    iquest: "\xBF",
    iscr: "\u{1D4BE}",
    isinE: "\u22F9",
    isindot: "\u22F5",
    isins: "\u22F4",
    isinsv: "\u22F3",
    itilde: "\u0129",
    iukcy: "\u0456",
    iuml: "\xEF",
    jcirc: "\u0135",
    jcy: "\u0439",
    jfr: "\u{1D527}",
    jmath: "\u0237",
    jopf: "\u{1D55B}",
    jscr: "\u{1D4BF}",
    jsercy: "\u0458",
    jukcy: "\u0454",
    kappa: "\u03BA",
    kappav: "\u03F0",
    varkappa: "\u03F0",
    kcedil: "\u0137",
    kcy: "\u043A",
    kfr: "\u{1D528}",
    kgreen: "\u0138",
    khcy: "\u0445",
    kjcy: "\u045C",
    kopf: "\u{1D55C}",
    kscr: "\u{1D4C0}",
    lAtail: "\u291B",
    lBarr: "\u290E",
    lEg: "\u2A8B",
    lesseqqgtr: "\u2A8B",
    lHar: "\u2962",
    lacute: "\u013A",
    laemptyv: "\u29B4",
    lambda: "\u03BB",
    langd: "\u2991",
    lap: "\u2A85",
    lessapprox: "\u2A85",
    laquo: "\xAB",
    larrbfs: "\u291F",
    larrfs: "\u291D",
    larrlp: "\u21AB",
    looparrowleft: "\u21AB",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21A2",
    leftarrowtail: "\u21A2",
    lat: "\u2AAB",
    latail: "\u2919",
    late: "\u2AAD",
    lates: "\u2AAD\uFE00",
    lbarr: "\u290C",
    lbbrk: "\u2772",
    lbrace: "{",
    lcub: "{",
    lbrack: "[",
    lsqb: "[",
    lbrke: "\u298B",
    lbrksld: "\u298F",
    lbrkslu: "\u298D",
    lcaron: "\u013E",
    lcedil: "\u013C",
    lcy: "\u043B",
    ldca: "\u2936",
    ldrdhar: "\u2967",
    ldrushar: "\u294B",
    ldsh: "\u21B2",
    le: "\u2264",
    leq: "\u2264",
    leftleftarrows: "\u21C7",
    llarr: "\u21C7",
    leftthreetimes: "\u22CB",
    lthree: "\u22CB",
    lescc: "\u2AA8",
    lesdot: "\u2A7F",
    lesdoto: "\u2A81",
    lesdotor: "\u2A83",
    lesg: "\u22DA\uFE00",
    lesges: "\u2A93",
    lessdot: "\u22D6",
    ltdot: "\u22D6",
    lfisht: "\u297C",
    lfr: "\u{1D529}",
    lgE: "\u2A91",
    lharul: "\u296A",
    lhblk: "\u2584",
    ljcy: "\u0459",
    llhard: "\u296B",
    lltri: "\u25FA",
    lmidot: "\u0140",
    lmoust: "\u23B0",
    lmoustache: "\u23B0",
    lnE: "\u2268",
    lneqq: "\u2268",
    lnap: "\u2A89",
    lnapprox: "\u2A89",
    lne: "\u2A87",
    lneq: "\u2A87",
    lnsim: "\u22E6",
    loang: "\u27EC",
    loarr: "\u21FD",
    longmapsto: "\u27FC",
    xmap: "\u27FC",
    looparrowright: "\u21AC",
    rarrlp: "\u21AC",
    lopar: "\u2985",
    lopf: "\u{1D55D}",
    loplus: "\u2A2D",
    lotimes: "\u2A34",
    lowast: "\u2217",
    loz: "\u25CA",
    lozenge: "\u25CA",
    lpar: "(",
    lparlt: "\u2993",
    lrhard: "\u296D",
    lrm: "\u200E",
    lrtri: "\u22BF",
    lsaquo: "\u2039",
    lscr: "\u{1D4C1}",
    lsime: "\u2A8D",
    lsimg: "\u2A8F",
    lsquor: "\u201A",
    sbquo: "\u201A",
    lstrok: "\u0142",
    ltcc: "\u2AA6",
    ltcir: "\u2A79",
    ltimes: "\u22C9",
    ltlarr: "\u2976",
    ltquest: "\u2A7B",
    ltrPar: "\u2996",
    ltri: "\u25C3",
    triangleleft: "\u25C3",
    lurdshar: "\u294A",
    luruhar: "\u2966",
    lvertneqq: "\u2268\uFE00",
    lvnE: "\u2268\uFE00",
    mDDot: "\u223A",
    macr: "\xAF",
    strns: "\xAF",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    marker: "\u25AE",
    mcomma: "\u2A29",
    mcy: "\u043C",
    mdash: "\u2014",
    mfr: "\u{1D52A}",
    mho: "\u2127",
    micro: "\xB5",
    midcir: "\u2AF0",
    minus: "\u2212",
    minusdu: "\u2A2A",
    mlcp: "\u2ADB",
    models: "\u22A7",
    mopf: "\u{1D55E}",
    mscr: "\u{1D4C2}",
    mu: "\u03BC",
    multimap: "\u22B8",
    mumap: "\u22B8",
    nGg: "\u22D9\u0338",
    nGt: "\u226B\u20D2",
    nLeftarrow: "\u21CD",
    nlArr: "\u21CD",
    nLeftrightarrow: "\u21CE",
    nhArr: "\u21CE",
    nLl: "\u22D8\u0338",
    nLt: "\u226A\u20D2",
    nRightarrow: "\u21CF",
    nrArr: "\u21CF",
    nVDash: "\u22AF",
    nVdash: "\u22AE",
    nacute: "\u0144",
    nang: "\u2220\u20D2",
    napE: "\u2A70\u0338",
    napid: "\u224B\u0338",
    napos: "\u0149",
    natur: "\u266E",
    natural: "\u266E",
    ncap: "\u2A43",
    ncaron: "\u0148",
    ncedil: "\u0146",
    ncongdot: "\u2A6D\u0338",
    ncup: "\u2A42",
    ncy: "\u043D",
    ndash: "\u2013",
    neArr: "\u21D7",
    nearhk: "\u2924",
    nedot: "\u2250\u0338",
    nesear: "\u2928",
    toea: "\u2928",
    nfr: "\u{1D52B}",
    nharr: "\u21AE",
    nleftrightarrow: "\u21AE",
    nhpar: "\u2AF2",
    nis: "\u22FC",
    nisd: "\u22FA",
    njcy: "\u045A",
    nlE: "\u2266\u0338",
    nleqq: "\u2266\u0338",
    nlarr: "\u219A",
    nleftarrow: "\u219A",
    nldr: "\u2025",
    nopf: "\u{1D55F}",
    not: "\xAC",
    notinE: "\u22F9\u0338",
    notindot: "\u22F5\u0338",
    notinvb: "\u22F7",
    notinvc: "\u22F6",
    notnivb: "\u22FE",
    notnivc: "\u22FD",
    nparsl: "\u2AFD\u20E5",
    npart: "\u2202\u0338",
    npolint: "\u2A14",
    nrarr: "\u219B",
    nrightarrow: "\u219B",
    nrarrc: "\u2933\u0338",
    nrarrw: "\u219D\u0338",
    nscr: "\u{1D4C3}",
    nsub: "\u2284",
    nsubE: "\u2AC5\u0338",
    nsubseteqq: "\u2AC5\u0338",
    nsup: "\u2285",
    nsupE: "\u2AC6\u0338",
    nsupseteqq: "\u2AC6\u0338",
    ntilde: "\xF1",
    nu: "\u03BD",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvDash: "\u22AD",
    nvHarr: "\u2904",
    nvap: "\u224D\u20D2",
    nvdash: "\u22AC",
    nvge: "\u2265\u20D2",
    nvgt: ">\u20D2",
    nvinfin: "\u29DE",
    nvlArr: "\u2902",
    nvle: "\u2264\u20D2",
    nvlt: "<\u20D2",
    nvltrie: "\u22B4\u20D2",
    nvrArr: "\u2903",
    nvrtrie: "\u22B5\u20D2",
    nvsim: "\u223C\u20D2",
    nwArr: "\u21D6",
    nwarhk: "\u2923",
    nwnear: "\u2927",
    oacute: "\xF3",
    ocirc: "\xF4",
    ocy: "\u043E",
    odblac: "\u0151",
    odiv: "\u2A38",
    odsold: "\u29BC",
    oelig: "\u0153",
    ofcir: "\u29BF",
    ofr: "\u{1D52C}",
    ogon: "\u02DB",
    ograve: "\xF2",
    ogt: "\u29C1",
    ohbar: "\u29B5",
    olcir: "\u29BE",
    olcross: "\u29BB",
    olt: "\u29C0",
    omacr: "\u014D",
    omega: "\u03C9",
    omicron: "\u03BF",
    omid: "\u29B6",
    oopf: "\u{1D560}",
    opar: "\u29B7",
    operp: "\u29B9",
    or: "\u2228",
    vee: "\u2228",
    ord: "\u2A5D",
    order: "\u2134",
    orderof: "\u2134",
    oscr: "\u2134",
    ordf: "\xAA",
    ordm: "\xBA",
    origof: "\u22B6",
    oror: "\u2A56",
    orslope: "\u2A57",
    orv: "\u2A5B",
    oslash: "\xF8",
    osol: "\u2298",
    otilde: "\xF5",
    otimesas: "\u2A36",
    ouml: "\xF6",
    ovbar: "\u233D",
    para: "\xB6",
    parsim: "\u2AF3",
    parsl: "\u2AFD",
    pcy: "\u043F",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    pertenk: "\u2031",
    pfr: "\u{1D52D}",
    phi: "\u03C6",
    phiv: "\u03D5",
    straightphi: "\u03D5",
    varphi: "\u03D5",
    phone: "\u260E",
    pi: "\u03C0",
    piv: "\u03D6",
    varpi: "\u03D6",
    planckh: "\u210E",
    plus: "+",
    plusacir: "\u2A23",
    pluscir: "\u2A22",
    plusdu: "\u2A25",
    pluse: "\u2A72",
    plussim: "\u2A26",
    plustwo: "\u2A27",
    pointint: "\u2A15",
    popf: "\u{1D561}",
    pound: "\xA3",
    prE: "\u2AB3",
    prap: "\u2AB7",
    precapprox: "\u2AB7",
    precnapprox: "\u2AB9",
    prnap: "\u2AB9",
    precneqq: "\u2AB5",
    prnE: "\u2AB5",
    precnsim: "\u22E8",
    prnsim: "\u22E8",
    prime: "\u2032",
    profalar: "\u232E",
    profline: "\u2312",
    profsurf: "\u2313",
    prurel: "\u22B0",
    pscr: "\u{1D4C5}",
    psi: "\u03C8",
    puncsp: "\u2008",
    qfr: "\u{1D52E}",
    qopf: "\u{1D562}",
    qprime: "\u2057",
    qscr: "\u{1D4C6}",
    quatint: "\u2A16",
    quest: "?",
    rAtail: "\u291C",
    rHar: "\u2964",
    race: "\u223D\u0331",
    racute: "\u0155",
    raemptyv: "\u29B3",
    rangd: "\u2992",
    range: "\u29A5",
    raquo: "\xBB",
    rarrap: "\u2975",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarrfs: "\u291E",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    rarrtl: "\u21A3",
    rightarrowtail: "\u21A3",
    rarrw: "\u219D",
    rightsquigarrow: "\u219D",
    ratail: "\u291A",
    ratio: "\u2236",
    rbbrk: "\u2773",
    rbrace: "}",
    rcub: "}",
    rbrack: "]",
    rsqb: "]",
    rbrke: "\u298C",
    rbrksld: "\u298E",
    rbrkslu: "\u2990",
    rcaron: "\u0159",
    rcedil: "\u0157",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdsh: "\u21B3",
    rect: "\u25AD",
    rfisht: "\u297D",
    rfr: "\u{1D52F}",
    rharul: "\u296C",
    rho: "\u03C1",
    rhov: "\u03F1",
    varrho: "\u03F1",
    rightrightarrows: "\u21C9",
    rrarr: "\u21C9",
    rightthreetimes: "\u22CC",
    rthree: "\u22CC",
    ring: "\u02DA",
    rlm: "\u200F",
    rmoust: "\u23B1",
    rmoustache: "\u23B1",
    rnmid: "\u2AEE",
    roang: "\u27ED",
    roarr: "\u21FE",
    ropar: "\u2986",
    ropf: "\u{1D563}",
    roplus: "\u2A2E",
    rotimes: "\u2A35",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2A12",
    rsaquo: "\u203A",
    rscr: "\u{1D4C7}",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    triangleright: "\u25B9",
    rtriltri: "\u29CE",
    ruluhar: "\u2968",
    rx: "\u211E",
    sacute: "\u015B",
    scE: "\u2AB4",
    scap: "\u2AB8",
    succapprox: "\u2AB8",
    scaron: "\u0161",
    scedil: "\u015F",
    scirc: "\u015D",
    scnE: "\u2AB6",
    succneqq: "\u2AB6",
    scnap: "\u2ABA",
    succnapprox: "\u2ABA",
    scnsim: "\u22E9",
    succnsim: "\u22E9",
    scpolint: "\u2A13",
    scy: "\u0441",
    sdot: "\u22C5",
    sdote: "\u2A66",
    seArr: "\u21D8",
    sect: "\xA7",
    semi: ";",
    seswar: "\u2929",
    tosa: "\u2929",
    sext: "\u2736",
    sfr: "\u{1D530}",
    sharp: "\u266F",
    shchcy: "\u0449",
    shcy: "\u0448",
    shy: "\xAD",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sigmav: "\u03C2",
    varsigma: "\u03C2",
    simdot: "\u2A6A",
    simg: "\u2A9E",
    simgE: "\u2AA0",
    siml: "\u2A9D",
    simlE: "\u2A9F",
    simne: "\u2246",
    simplus: "\u2A24",
    simrarr: "\u2972",
    smashp: "\u2A33",
    smeparsl: "\u29E4",
    smile: "\u2323",
    ssmile: "\u2323",
    smt: "\u2AAA",
    smte: "\u2AAC",
    smtes: "\u2AAC\uFE00",
    softcy: "\u044C",
    sol: "/",
    solb: "\u29C4",
    solbar: "\u233F",
    sopf: "\u{1D564}",
    spades: "\u2660",
    spadesuit: "\u2660",
    sqcaps: "\u2293\uFE00",
    sqcups: "\u2294\uFE00",
    sscr: "\u{1D4C8}",
    star: "\u2606",
    sub: "\u2282",
    subset: "\u2282",
    subE: "\u2AC5",
    subseteqq: "\u2AC5",
    subdot: "\u2ABD",
    subedot: "\u2AC3",
    submult: "\u2AC1",
    subnE: "\u2ACB",
    subsetneqq: "\u2ACB",
    subne: "\u228A",
    subsetneq: "\u228A",
    subplus: "\u2ABF",
    subrarr: "\u2979",
    subsim: "\u2AC7",
    subsub: "\u2AD5",
    subsup: "\u2AD3",
    sung: "\u266A",
    sup1: "\xB9",
    sup2: "\xB2",
    sup3: "\xB3",
    supE: "\u2AC6",
    supseteqq: "\u2AC6",
    supdot: "\u2ABE",
    supdsub: "\u2AD8",
    supedot: "\u2AC4",
    suphsol: "\u27C9",
    suphsub: "\u2AD7",
    suplarr: "\u297B",
    supmult: "\u2AC2",
    supnE: "\u2ACC",
    supsetneqq: "\u2ACC",
    supne: "\u228B",
    supsetneq: "\u228B",
    supplus: "\u2AC0",
    supsim: "\u2AC8",
    supsub: "\u2AD4",
    supsup: "\u2AD6",
    swArr: "\u21D9",
    swnwar: "\u292A",
    szlig: "\xDF",
    target: "\u2316",
    tau: "\u03C4",
    tcaron: "\u0165",
    tcedil: "\u0163",
    tcy: "\u0442",
    telrec: "\u2315",
    tfr: "\u{1D531}",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thetav: "\u03D1",
    vartheta: "\u03D1",
    thorn: "\xFE",
    times: "\xD7",
    timesbar: "\u2A31",
    timesd: "\u2A30",
    topbot: "\u2336",
    topcir: "\u2AF1",
    topf: "\u{1D565}",
    topfork: "\u2ADA",
    tprime: "\u2034",
    triangle: "\u25B5",
    utri: "\u25B5",
    triangleq: "\u225C",
    trie: "\u225C",
    tridot: "\u25EC",
    triminus: "\u2A3A",
    triplus: "\u2A39",
    trisb: "\u29CD",
    tritime: "\u2A3B",
    trpezium: "\u23E2",
    tscr: "\u{1D4C9}",
    tscy: "\u0446",
    tshcy: "\u045B",
    tstrok: "\u0167",
    uHar: "\u2963",
    uacute: "\xFA",
    ubrcy: "\u045E",
    ubreve: "\u016D",
    ucirc: "\xFB",
    ucy: "\u0443",
    udblac: "\u0171",
    ufisht: "\u297E",
    ufr: "\u{1D532}",
    ugrave: "\xF9",
    uhblk: "\u2580",
    ulcorn: "\u231C",
    ulcorner: "\u231C",
    ulcrop: "\u230F",
    ultri: "\u25F8",
    umacr: "\u016B",
    uogon: "\u0173",
    uopf: "\u{1D566}",
    upsi: "\u03C5",
    upsilon: "\u03C5",
    upuparrows: "\u21C8",
    uuarr: "\u21C8",
    urcorn: "\u231D",
    urcorner: "\u231D",
    urcrop: "\u230E",
    uring: "\u016F",
    urtri: "\u25F9",
    uscr: "\u{1D4CA}",
    utdot: "\u22F0",
    utilde: "\u0169",
    uuml: "\xFC",
    uwangle: "\u29A7",
    vBar: "\u2AE8",
    vBarv: "\u2AE9",
    vangrt: "\u299C",
    varsubsetneq: "\u228A\uFE00",
    vsubne: "\u228A\uFE00",
    varsubsetneqq: "\u2ACB\uFE00",
    vsubnE: "\u2ACB\uFE00",
    varsupsetneq: "\u228B\uFE00",
    vsupne: "\u228B\uFE00",
    varsupsetneqq: "\u2ACC\uFE00",
    vsupnE: "\u2ACC\uFE00",
    vcy: "\u0432",
    veebar: "\u22BB",
    veeeq: "\u225A",
    vellip: "\u22EE",
    vfr: "\u{1D533}",
    vopf: "\u{1D567}",
    vscr: "\u{1D4CB}",
    vzigzag: "\u299A",
    wcirc: "\u0175",
    wedbar: "\u2A5F",
    wedgeq: "\u2259",
    weierp: "\u2118",
    wp: "\u2118",
    wfr: "\u{1D534}",
    wopf: "\u{1D568}",
    wscr: "\u{1D4CC}",
    xfr: "\u{1D535}",
    xi: "\u03BE",
    xnis: "\u22FB",
    xopf: "\u{1D569}",
    xscr: "\u{1D4CD}",
    yacute: "\xFD",
    yacy: "\u044F",
    ycirc: "\u0177",
    ycy: "\u044B",
    yen: "\xA5",
    yfr: "\u{1D536}",
    yicy: "\u0457",
    yopf: "\u{1D56A}",
    yscr: "\u{1D4CE}",
    yucy: "\u044E",
    yuml: "\xFF",
    zacute: "\u017A",
    zcaron: "\u017E",
    zcy: "\u0437",
    zdot: "\u017C",
    zeta: "\u03B6",
    zfr: "\u{1D537}",
    zhcy: "\u0436",
    zigrarr: "\u21DD",
    zopf: "\u{1D56B}",
    zscr: "\u{1D4CF}",
    zwj: "\u200D",
    zwnj: "\u200C",
  },
  za = "\uE500";
Ye.ngsp = za;
var Ga = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function Ls(t, e) {
  if (e != null && !(Array.isArray(e) && e.length == 2))
    throw new Error(`Expected '${t}' to be an array, [start, end].`);
  if (e != null) {
    let r = e[0],
      n = e[1];
    Ga.forEach((s) => {
      if (s.test(r) || s.test(n))
        throw new Error(
          `['${r}', '${n}'] contains unusable interpolation symbol.`,
        );
    });
  }
}
var Lr = class t {
    static fromArray(e) {
      return e ? (Ls("interpolation", e), new t(e[0], e[1])) : Fr;
    }
    constructor(e, r) {
      (this.start = e), (this.end = r);
    }
  },
  Fr = new Lr("{{", "}}");
var ft = class extends Ue {
    constructor(e, r, n) {
      super(n, e), (this.tokenType = r);
    }
  },
  $r = class {
    constructor(e, r, n) {
      (this.tokens = e),
        (this.errors = r),
        (this.nonNormalizedIcuExpressions = n);
    }
  };
function Ws(t, e, r, n = {}) {
  let s = new Or(new Te(t, e), r, n);
  return (
    s.tokenize(), new $r(_o(s.tokens), s.errors, s.nonNormalizedIcuExpressions)
  );
}
var po = /\r\n?/g;
function je(t) {
  return `Unexpected character "${t === 0 ? "EOF" : String.fromCharCode(t)}"`;
}
function Rs(t) {
  return `Unknown entity "${t}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function ho(t, e) {
  return `Unable to parse entity "${e}" - ${t} character reference entities must end with ";"`;
}
var tr;
(function (t) {
  (t.HEX = "hexadecimal"), (t.DEC = "decimal");
})(tr || (tr = {}));
var dt = class {
    constructor(e) {
      this.error = e;
    }
  },
  Or = class {
    constructor(e, r, n) {
      (this._getTagContentType = r),
        (this._currentTokenStart = null),
        (this._currentTokenType = null),
        (this._expansionCaseStack = []),
        (this._inInterpolation = !1),
        (this._fullNameStack = []),
        (this.tokens = []),
        (this.errors = []),
        (this.nonNormalizedIcuExpressions = []),
        (this._tokenizeIcu = n.tokenizeExpansionForms || !1),
        (this._interpolationConfig = n.interpolationConfig || Fr),
        (this._leadingTriviaCodePoints =
          n.leadingTriviaChars &&
          n.leadingTriviaChars.map((i) => i.codePointAt(0) || 0)),
        (this._canSelfClose = n.canSelfClose || !1),
        (this._allowHtmComponentClosingTags =
          n.allowHtmComponentClosingTags || !1);
      let s = n.range || {
        endPos: e.content.length,
        startPos: 0,
        startLine: 0,
        startCol: 0,
      };
      (this._cursor = n.escapedString ? new Mr(e, s) : new rr(e, s)),
        (this._preserveLineEndings = n.preserveLineEndings || !1),
        (this._i18nNormalizeLineEndingsInICUs =
          n.i18nNormalizeLineEndingsInICUs || !1),
        (this._tokenizeBlocks = n.tokenizeBlocks ?? !0),
        (this._tokenizeLet = n.tokenizeLet ?? !0);
      try {
        this._cursor.init();
      } catch (i) {
        this.handleError(i);
      }
    }
    _processCarriageReturns(e) {
      return this._preserveLineEndings
        ? e
        : e.replace(
            po,
            `
`,
          );
    }
    tokenize() {
      for (; this._cursor.peek() !== 0; ) {
        let e = this._cursor.clone();
        try {
          if (this._attemptCharCode(60))
            if (this._attemptCharCode(33))
              this._attemptStr("[CDATA[")
                ? this._consumeCdata(e)
                : this._attemptStr("--")
                  ? this._consumeComment(e)
                  : this._attemptStrCaseInsensitive("doctype")
                    ? this._consumeDocType(e)
                    : this._consumeBogusComment(e);
            else if (this._attemptCharCode(47)) this._consumeTagClose(e);
            else {
              let r = this._cursor.clone();
              this._attemptCharCode(63)
                ? ((this._cursor = r), this._consumeBogusComment(e))
                : this._consumeTagOpen(e);
            }
          else
            this._tokenizeLet &&
            this._cursor.peek() === 64 &&
            !this._inInterpolation &&
            this._attemptStr("@let")
              ? this._consumeLetDeclaration(e)
              : this._tokenizeBlocks && this._attemptCharCode(64)
                ? this._consumeBlockStart(e)
                : this._tokenizeBlocks &&
                    !this._inInterpolation &&
                    !this._isInExpansionCase() &&
                    !this._isInExpansionForm() &&
                    this._attemptCharCode(125)
                  ? this._consumeBlockEnd(e)
                  : (this._tokenizeIcu && this._tokenizeExpansionForm()) ||
                    this._consumeWithInterpolation(
                      5,
                      8,
                      () => this._isTextEnd(),
                      () => this._isTagStart(),
                    );
        } catch (r) {
          this.handleError(r);
        }
      }
      this._beginToken(34), this._endToken([]);
    }
    _getBlockName() {
      let e = !1,
        r = this._cursor.clone();
      return (
        this._attemptCharCodeUntilFn((n) =>
          at(n) ? !e : Ms(n) ? ((e = !0), !1) : !0,
        ),
        this._cursor.getChars(r).trim()
      );
    }
    _consumeBlockStart(e) {
      this._beginToken(25, e);
      let r = this._endToken([this._getBlockName()]);
      if (this._cursor.peek() === 40)
        if (
          (this._cursor.advance(),
          this._consumeBlockParameters(),
          this._attemptCharCodeUntilFn(b),
          this._attemptCharCode(41))
        )
          this._attemptCharCodeUntilFn(b);
        else {
          r.type = 29;
          return;
        }
      this._attemptCharCode(123)
        ? (this._beginToken(26), this._endToken([]))
        : (r.type = 29);
    }
    _consumeBlockEnd(e) {
      this._beginToken(27, e), this._endToken([]);
    }
    _consumeBlockParameters() {
      for (
        this._attemptCharCodeUntilFn(qs);
        this._cursor.peek() !== 41 && this._cursor.peek() !== 0;

      ) {
        this._beginToken(28);
        let e = this._cursor.clone(),
          r = null,
          n = 0;
        for (
          ;
          (this._cursor.peek() !== 59 && this._cursor.peek() !== 0) ||
          r !== null;

        ) {
          let s = this._cursor.peek();
          if (s === 92) this._cursor.advance();
          else if (s === r) r = null;
          else if (r === null && $t(s)) r = s;
          else if (s === 40 && r === null) n++;
          else if (s === 41 && r === null) {
            if (n === 0) break;
            n > 0 && n--;
          }
          this._cursor.advance();
        }
        this._endToken([this._cursor.getChars(e)]),
          this._attemptCharCodeUntilFn(qs);
      }
    }
    _consumeLetDeclaration(e) {
      if ((this._beginToken(30, e), at(this._cursor.peek())))
        this._attemptCharCodeUntilFn(b);
      else {
        let s = this._endToken([this._cursor.getChars(e)]);
        s.type = 33;
        return;
      }
      let r = this._endToken([this._getLetDeclarationName()]);
      if ((this._attemptCharCodeUntilFn(b), !this._attemptCharCode(61))) {
        r.type = 33;
        return;
      }
      this._attemptCharCodeUntilFn((s) => b(s) && !Rt(s)),
        this._consumeLetDeclarationValue(),
        this._cursor.peek() === 59
          ? (this._beginToken(32), this._endToken([]), this._cursor.advance())
          : ((r.type = 33), (r.sourceSpan = this._cursor.getSpan(e)));
    }
    _getLetDeclarationName() {
      let e = this._cursor.clone(),
        r = !1;
      return (
        this._attemptCharCodeUntilFn((n) =>
          ot(n) || n == 36 || n === 95 || (r && It(n)) ? ((r = !0), !1) : !0,
        ),
        this._cursor.getChars(e).trim()
      );
    }
    _consumeLetDeclarationValue() {
      let e = this._cursor.clone();
      for (this._beginToken(31, e); this._cursor.peek() !== 0; ) {
        let r = this._cursor.peek();
        if (r === 59) break;
        $t(r) &&
          (this._cursor.advance(),
          this._attemptCharCodeUntilFn((n) =>
            n === 92 ? (this._cursor.advance(), !1) : n === r,
          )),
          this._cursor.advance();
      }
      this._endToken([this._cursor.getChars(e)]);
    }
    _tokenizeExpansionForm() {
      if (this.isExpansionFormStart())
        return this._consumeExpansionFormStart(), !0;
      if (Co(this._cursor.peek()) && this._isInExpansionForm())
        return this._consumeExpansionCaseStart(), !0;
      if (this._cursor.peek() === 125) {
        if (this._isInExpansionCase())
          return this._consumeExpansionCaseEnd(), !0;
        if (this._isInExpansionForm())
          return this._consumeExpansionFormEnd(), !0;
      }
      return !1;
    }
    _beginToken(e, r = this._cursor.clone()) {
      (this._currentTokenStart = r), (this._currentTokenType = e);
    }
    _endToken(e, r) {
      if (this._currentTokenStart === null)
        throw new ft(
          "Programming error - attempted to end a token when there was no start to the token",
          this._currentTokenType,
          this._cursor.getSpan(r),
        );
      if (this._currentTokenType === null)
        throw new ft(
          "Programming error - attempted to end a token which has no token type",
          null,
          this._cursor.getSpan(this._currentTokenStart),
        );
      let n = {
        type: this._currentTokenType,
        parts: e,
        sourceSpan: (r ?? this._cursor).getSpan(
          this._currentTokenStart,
          this._leadingTriviaCodePoints,
        ),
      };
      return (
        this.tokens.push(n),
        (this._currentTokenStart = null),
        (this._currentTokenType = null),
        n
      );
    }
    _createError(e, r) {
      this._isInExpansionForm() &&
        (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
      let n = new ft(e, this._currentTokenType, r);
      return (
        (this._currentTokenStart = null),
        (this._currentTokenType = null),
        new dt(n)
      );
    }
    handleError(e) {
      if (
        (e instanceof gt &&
          (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))),
        e instanceof dt)
      )
        this.errors.push(e.error);
      else throw e;
    }
    _attemptCharCode(e) {
      return this._cursor.peek() === e ? (this._cursor.advance(), !0) : !1;
    }
    _attemptCharCodeCaseInsensitive(e) {
      return So(this._cursor.peek(), e) ? (this._cursor.advance(), !0) : !1;
    }
    _requireCharCode(e) {
      let r = this._cursor.clone();
      if (!this._attemptCharCode(e))
        throw this._createError(
          je(this._cursor.peek()),
          this._cursor.getSpan(r),
        );
    }
    _attemptStr(e) {
      let r = e.length;
      if (this._cursor.charsLeft() < r) return !1;
      let n = this._cursor.clone();
      for (let s = 0; s < r; s++)
        if (!this._attemptCharCode(e.charCodeAt(s)))
          return (this._cursor = n), !1;
      return !0;
    }
    _attemptStrCaseInsensitive(e) {
      for (let r = 0; r < e.length; r++)
        if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(r))) return !1;
      return !0;
    }
    _requireStr(e) {
      let r = this._cursor.clone();
      if (!this._attemptStr(e))
        throw this._createError(
          je(this._cursor.peek()),
          this._cursor.getSpan(r),
        );
    }
    _requireStrCaseInsensitive(e) {
      let r = this._cursor.clone();
      if (!this._attemptStrCaseInsensitive(e))
        throw this._createError(
          je(this._cursor.peek()),
          this._cursor.getSpan(r),
        );
    }
    _attemptCharCodeUntilFn(e) {
      for (; !e(this._cursor.peek()); ) this._cursor.advance();
    }
    _requireCharCodeUntilFn(e, r) {
      let n = this._cursor.clone();
      if ((this._attemptCharCodeUntilFn(e), this._cursor.diff(n) < r))
        throw this._createError(
          je(this._cursor.peek()),
          this._cursor.getSpan(n),
        );
    }
    _attemptUntilChar(e) {
      for (; this._cursor.peek() !== e; ) this._cursor.advance();
    }
    _readChar() {
      let e = String.fromCodePoint(this._cursor.peek());
      return this._cursor.advance(), e;
    }
    _consumeEntity(e) {
      this._beginToken(9);
      let r = this._cursor.clone();
      if ((this._cursor.advance(), this._attemptCharCode(35))) {
        let n = this._attemptCharCode(120) || this._attemptCharCode(88),
          s = this._cursor.clone();
        if ((this._attemptCharCodeUntilFn(fo), this._cursor.peek() != 59)) {
          this._cursor.advance();
          let a = n ? tr.HEX : tr.DEC;
          throw this._createError(
            ho(a, this._cursor.getChars(r)),
            this._cursor.getSpan(),
          );
        }
        let i = this._cursor.getChars(s);
        this._cursor.advance();
        try {
          let a = parseInt(i, n ? 16 : 10);
          this._endToken([String.fromCharCode(a), this._cursor.getChars(r)]);
        } catch {
          throw this._createError(
            Rs(this._cursor.getChars(r)),
            this._cursor.getSpan(),
          );
        }
      } else {
        let n = this._cursor.clone();
        if ((this._attemptCharCodeUntilFn(go), this._cursor.peek() != 59))
          this._beginToken(e, r), (this._cursor = n), this._endToken(["&"]);
        else {
          let s = this._cursor.getChars(n);
          this._cursor.advance();
          let i = Ye[s];
          if (!i) throw this._createError(Rs(s), this._cursor.getSpan(r));
          this._endToken([i, `&${s};`]);
        }
      }
    }
    _consumeRawText(e, r) {
      this._beginToken(e ? 6 : 7);
      let n = [];
      for (;;) {
        let s = this._cursor.clone(),
          i = r();
        if (((this._cursor = s), i)) break;
        e && this._cursor.peek() === 38
          ? (this._endToken([this._processCarriageReturns(n.join(""))]),
            (n.length = 0),
            this._consumeEntity(6),
            this._beginToken(6))
          : n.push(this._readChar());
      }
      this._endToken([this._processCarriageReturns(n.join(""))]);
    }
    _consumeComment(e) {
      this._beginToken(10, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._attemptStr("-->")),
        this._beginToken(11),
        this._requireStr("-->"),
        this._endToken([]);
    }
    _consumeBogusComment(e) {
      this._beginToken(10, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._cursor.peek() === 62),
        this._beginToken(11),
        this._cursor.advance(),
        this._endToken([]);
    }
    _consumeCdata(e) {
      this._beginToken(12, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._attemptStr("]]>")),
        this._beginToken(13),
        this._requireStr("]]>"),
        this._endToken([]);
    }
    _consumeDocType(e) {
      this._beginToken(18, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._cursor.peek() === 62),
        this._beginToken(19),
        this._cursor.advance(),
        this._endToken([]);
    }
    _consumePrefixAndName() {
      let e = this._cursor.clone(),
        r = "";
      for (; this._cursor.peek() !== 58 && !mo(this._cursor.peek()); )
        this._cursor.advance();
      let n;
      this._cursor.peek() === 58
        ? ((r = this._cursor.getChars(e)),
          this._cursor.advance(),
          (n = this._cursor.clone()))
        : (n = e),
        this._requireCharCodeUntilFn($s, r === "" ? 0 : 1);
      let s = this._cursor.getChars(n);
      return [r, s];
    }
    _consumeTagOpen(e) {
      let r,
        n,
        s,
        i = [];
      try {
        if (!ot(this._cursor.peek()))
          throw this._createError(
            je(this._cursor.peek()),
            this._cursor.getSpan(e),
          );
        for (
          s = this._consumeTagOpenStart(e),
            n = s.parts[0],
            r = s.parts[1],
            this._attemptCharCodeUntilFn(b);
          this._cursor.peek() !== 47 &&
          this._cursor.peek() !== 62 &&
          this._cursor.peek() !== 60 &&
          this._cursor.peek() !== 0;

        ) {
          let [o, u] = this._consumeAttributeName();
          if ((this._attemptCharCodeUntilFn(b), this._attemptCharCode(61))) {
            this._attemptCharCodeUntilFn(b);
            let p = this._consumeAttributeValue();
            i.push({ prefix: o, name: u, value: p });
          } else i.push({ prefix: o, name: u });
          this._attemptCharCodeUntilFn(b);
        }
        this._consumeTagOpenEnd();
      } catch (o) {
        if (o instanceof dt) {
          s ? (s.type = 4) : (this._beginToken(5, e), this._endToken(["<"]));
          return;
        }
        throw o;
      }
      if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2)
        return;
      let a = this._getTagContentType(r, n, this._fullNameStack.length > 0, i);
      this._handleFullNameStackForTagOpen(n, r),
        a === I.RAW_TEXT
          ? this._consumeRawTextWithTagClose(n, r, !1)
          : a === I.ESCAPABLE_RAW_TEXT &&
            this._consumeRawTextWithTagClose(n, r, !0);
    }
    _consumeRawTextWithTagClose(e, r, n) {
      this._consumeRawText(n, () =>
        !this._attemptCharCode(60) ||
        !this._attemptCharCode(47) ||
        (this._attemptCharCodeUntilFn(b),
        !this._attemptStrCaseInsensitive(e ? `${e}:${r}` : r))
          ? !1
          : (this._attemptCharCodeUntilFn(b), this._attemptCharCode(62)),
      ),
        this._beginToken(3),
        this._requireCharCodeUntilFn((s) => s === 62, 3),
        this._cursor.advance(),
        this._endToken([e, r]),
        this._handleFullNameStackForTagClose(e, r);
    }
    _consumeTagOpenStart(e) {
      this._beginToken(0, e);
      let r = this._consumePrefixAndName();
      return this._endToken(r);
    }
    _consumeAttributeName() {
      let e = this._cursor.peek();
      if (e === 39 || e === 34)
        throw this._createError(je(e), this._cursor.getSpan());
      this._beginToken(14);
      let r = this._consumePrefixAndName();
      return this._endToken(r), r;
    }
    _consumeAttributeValue() {
      let e;
      if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
        let r = this._cursor.peek();
        this._consumeQuote(r);
        let n = () => this._cursor.peek() === r;
        (e = this._consumeWithInterpolation(16, 17, n, n)),
          this._consumeQuote(r);
      } else {
        let r = () => $s(this._cursor.peek());
        e = this._consumeWithInterpolation(16, 17, r, r);
      }
      return e;
    }
    _consumeQuote(e) {
      this._beginToken(15),
        this._requireCharCode(e),
        this._endToken([String.fromCodePoint(e)]);
    }
    _consumeTagOpenEnd() {
      let e = this._attemptCharCode(47) ? 2 : 1;
      this._beginToken(e), this._requireCharCode(62), this._endToken([]);
    }
    _consumeTagClose(e) {
      if (
        (this._beginToken(3, e),
        this._attemptCharCodeUntilFn(b),
        this._allowHtmComponentClosingTags && this._attemptCharCode(47))
      )
        this._attemptCharCodeUntilFn(b),
          this._requireCharCode(62),
          this._endToken([]);
      else {
        let [r, n] = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(b),
          this._requireCharCode(62),
          this._endToken([r, n]),
          this._handleFullNameStackForTagClose(r, n);
      }
    }
    _consumeExpansionFormStart() {
      this._beginToken(20),
        this._requireCharCode(123),
        this._endToken([]),
        this._expansionCaseStack.push(20),
        this._beginToken(7);
      let e = this._readUntil(44),
        r = this._processCarriageReturns(e);
      if (this._i18nNormalizeLineEndingsInICUs) this._endToken([r]);
      else {
        let s = this._endToken([e]);
        r !== e && this.nonNormalizedIcuExpressions.push(s);
      }
      this._requireCharCode(44),
        this._attemptCharCodeUntilFn(b),
        this._beginToken(7);
      let n = this._readUntil(44);
      this._endToken([n]),
        this._requireCharCode(44),
        this._attemptCharCodeUntilFn(b);
    }
    _consumeExpansionCaseStart() {
      this._beginToken(21);
      let e = this._readUntil(123).trim();
      this._endToken([e]),
        this._attemptCharCodeUntilFn(b),
        this._beginToken(22),
        this._requireCharCode(123),
        this._endToken([]),
        this._attemptCharCodeUntilFn(b),
        this._expansionCaseStack.push(22);
    }
    _consumeExpansionCaseEnd() {
      this._beginToken(23),
        this._requireCharCode(125),
        this._endToken([]),
        this._attemptCharCodeUntilFn(b),
        this._expansionCaseStack.pop();
    }
    _consumeExpansionFormEnd() {
      this._beginToken(24),
        this._requireCharCode(125),
        this._endToken([]),
        this._expansionCaseStack.pop();
    }
    _consumeWithInterpolation(e, r, n, s) {
      this._beginToken(e);
      let i = [];
      for (; !n(); ) {
        let o = this._cursor.clone();
        this._interpolationConfig &&
        this._attemptStr(this._interpolationConfig.start)
          ? (this._endToken([this._processCarriageReturns(i.join(""))], o),
            (i.length = 0),
            this._consumeInterpolation(r, o, s),
            this._beginToken(e))
          : this._cursor.peek() === 38
            ? (this._endToken([this._processCarriageReturns(i.join(""))]),
              (i.length = 0),
              this._consumeEntity(e),
              this._beginToken(e))
            : i.push(this._readChar());
      }
      this._inInterpolation = !1;
      let a = this._processCarriageReturns(i.join(""));
      return this._endToken([a]), a;
    }
    _consumeInterpolation(e, r, n) {
      let s = [];
      this._beginToken(e, r), s.push(this._interpolationConfig.start);
      let i = this._cursor.clone(),
        a = null,
        o = !1;
      for (; this._cursor.peek() !== 0 && (n === null || !n()); ) {
        let u = this._cursor.clone();
        if (this._isTagStart()) {
          (this._cursor = u),
            s.push(this._getProcessedChars(i, u)),
            this._endToken(s);
          return;
        }
        if (a === null)
          if (this._attemptStr(this._interpolationConfig.end)) {
            s.push(this._getProcessedChars(i, u)),
              s.push(this._interpolationConfig.end),
              this._endToken(s);
            return;
          } else this._attemptStr("//") && (o = !0);
        let p = this._cursor.peek();
        this._cursor.advance(),
          p === 92
            ? this._cursor.advance()
            : p === a
              ? (a = null)
              : !o && a === null && $t(p) && (a = p);
      }
      s.push(this._getProcessedChars(i, this._cursor)), this._endToken(s);
    }
    _getProcessedChars(e, r) {
      return this._processCarriageReturns(r.getChars(e));
    }
    _isTextEnd() {
      return !!(
        this._isTagStart() ||
        this._cursor.peek() === 0 ||
        (this._tokenizeIcu &&
          !this._inInterpolation &&
          (this.isExpansionFormStart() ||
            (this._cursor.peek() === 125 && this._isInExpansionCase()))) ||
        (this._tokenizeBlocks &&
          !this._inInterpolation &&
          !this._isInExpansion() &&
          (this._isBlockStart() ||
            this._cursor.peek() === 64 ||
            this._cursor.peek() === 125))
      );
    }
    _isTagStart() {
      if (this._cursor.peek() === 60) {
        let e = this._cursor.clone();
        e.advance();
        let r = e.peek();
        if (
          (97 <= r && r <= 122) ||
          (65 <= r && r <= 90) ||
          r === 47 ||
          r === 33
        )
          return !0;
      }
      return !1;
    }
    _isBlockStart() {
      if (this._tokenizeBlocks && this._cursor.peek() === 64) {
        let e = this._cursor.clone();
        if ((e.advance(), Ms(e.peek()))) return !0;
      }
      return !1;
    }
    _readUntil(e) {
      let r = this._cursor.clone();
      return this._attemptUntilChar(e), this._cursor.getChars(r);
    }
    _isInExpansion() {
      return this._isInExpansionCase() || this._isInExpansionForm();
    }
    _isInExpansionCase() {
      return (
        this._expansionCaseStack.length > 0 &&
        this._expansionCaseStack[this._expansionCaseStack.length - 1] === 22
      );
    }
    _isInExpansionForm() {
      return (
        this._expansionCaseStack.length > 0 &&
        this._expansionCaseStack[this._expansionCaseStack.length - 1] === 20
      );
    }
    isExpansionFormStart() {
      if (this._cursor.peek() !== 123) return !1;
      if (this._interpolationConfig) {
        let e = this._cursor.clone(),
          r = this._attemptStr(this._interpolationConfig.start);
        return (this._cursor = e), !r;
      }
      return !0;
    }
    _handleFullNameStackForTagOpen(e, r) {
      let n = ze(e, r);
      (this._fullNameStack.length === 0 ||
        this._fullNameStack[this._fullNameStack.length - 1] === n) &&
        this._fullNameStack.push(n);
    }
    _handleFullNameStackForTagClose(e, r) {
      let n = ze(e, r);
      this._fullNameStack.length !== 0 &&
        this._fullNameStack[this._fullNameStack.length - 1] === n &&
        this._fullNameStack.pop();
    }
  };
function b(t) {
  return !at(t) || t === 0;
}
function $s(t) {
  return (
    at(t) ||
    t === 62 ||
    t === 60 ||
    t === 47 ||
    t === 39 ||
    t === 34 ||
    t === 61 ||
    t === 0
  );
}
function mo(t) {
  return (t < 97 || 122 < t) && (t < 65 || 90 < t) && (t < 48 || t > 57);
}
function fo(t) {
  return t === 59 || t === 0 || !Cs(t);
}
function go(t) {
  return t === 59 || t === 0 || !ot(t);
}
function Co(t) {
  return t !== 125;
}
function So(t, e) {
  return Os(t) === Os(e);
}
function Os(t) {
  return t >= 97 && t <= 122 ? t - 97 + 65 : t;
}
function Ms(t) {
  return ot(t) || It(t) || t === 95;
}
function qs(t) {
  return t !== 59 && b(t);
}
function _o(t) {
  let e = [],
    r;
  for (let n = 0; n < t.length; n++) {
    let s = t[n];
    (r && r.type === 5 && s.type === 5) || (r && r.type === 16 && s.type === 16)
      ? ((r.parts[0] += s.parts[0]), (r.sourceSpan.end = s.sourceSpan.end))
      : ((r = s), e.push(r));
  }
  return e;
}
var rr = class t {
    constructor(e, r) {
      if (e instanceof t) {
        (this.file = e.file), (this.input = e.input), (this.end = e.end);
        let n = e.state;
        this.state = {
          peek: n.peek,
          offset: n.offset,
          line: n.line,
          column: n.column,
        };
      } else {
        if (!r)
          throw new Error(
            "Programming error: the range argument must be provided with a file argument.",
          );
        (this.file = e),
          (this.input = e.content),
          (this.end = r.endPos),
          (this.state = {
            peek: -1,
            offset: r.startPos,
            line: r.startLine,
            column: r.startCol,
          });
      }
    }
    clone() {
      return new t(this);
    }
    peek() {
      return this.state.peek;
    }
    charsLeft() {
      return this.end - this.state.offset;
    }
    diff(e) {
      return this.state.offset - e.state.offset;
    }
    advance() {
      this.advanceState(this.state);
    }
    init() {
      this.updatePeek(this.state);
    }
    getSpan(e, r) {
      e = e || this;
      let n = e;
      if (r)
        for (; this.diff(e) > 0 && r.indexOf(e.peek()) !== -1; )
          n === e && (e = e.clone()), e.advance();
      let s = this.locationFromCursor(e),
        i = this.locationFromCursor(this),
        a = n !== e ? this.locationFromCursor(n) : s;
      return new h(s, i, a);
    }
    getChars(e) {
      return this.input.substring(e.state.offset, this.state.offset);
    }
    charAt(e) {
      return this.input.charCodeAt(e);
    }
    advanceState(e) {
      if (e.offset >= this.end)
        throw ((this.state = e), new gt('Unexpected character "EOF"', this));
      let r = this.charAt(e.offset);
      r === 10 ? (e.line++, (e.column = 0)) : Rt(r) || e.column++,
        e.offset++,
        this.updatePeek(e);
    }
    updatePeek(e) {
      e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
    }
    locationFromCursor(e) {
      return new ae(e.file, e.state.offset, e.state.line, e.state.column);
    }
  },
  Mr = class t extends rr {
    constructor(e, r) {
      e instanceof t
        ? (super(e), (this.internalState = { ...e.internalState }))
        : (super(e, r), (this.internalState = this.state));
    }
    advance() {
      (this.state = this.internalState),
        super.advance(),
        this.processEscapeSequence();
    }
    init() {
      super.init(), this.processEscapeSequence();
    }
    clone() {
      return new t(this);
    }
    getChars(e) {
      let r = e.clone(),
        n = "";
      for (; r.internalState.offset < this.internalState.offset; )
        (n += String.fromCodePoint(r.peek())), r.advance();
      return n;
    }
    processEscapeSequence() {
      let e = () => this.internalState.peek;
      if (e() === 92)
        if (
          ((this.internalState = { ...this.state }),
          this.advanceState(this.internalState),
          e() === 110)
        )
          this.state.peek = 10;
        else if (e() === 114) this.state.peek = 13;
        else if (e() === 118) this.state.peek = 11;
        else if (e() === 116) this.state.peek = 9;
        else if (e() === 98) this.state.peek = 8;
        else if (e() === 102) this.state.peek = 12;
        else if (e() === 117)
          if ((this.advanceState(this.internalState), e() === 123)) {
            this.advanceState(this.internalState);
            let r = this.clone(),
              n = 0;
            for (; e() !== 125; ) this.advanceState(this.internalState), n++;
            this.state.peek = this.decodeHexDigits(r, n);
          } else {
            let r = this.clone();
            this.advanceState(this.internalState),
              this.advanceState(this.internalState),
              this.advanceState(this.internalState),
              (this.state.peek = this.decodeHexDigits(r, 4));
          }
        else if (e() === 120) {
          this.advanceState(this.internalState);
          let r = this.clone();
          this.advanceState(this.internalState),
            (this.state.peek = this.decodeHexDigits(r, 2));
        } else if (yr(e())) {
          let r = "",
            n = 0,
            s = this.clone();
          for (; yr(e()) && n < 3; )
            (s = this.clone()),
              (r += String.fromCodePoint(e())),
              this.advanceState(this.internalState),
              n++;
          (this.state.peek = parseInt(r, 8)),
            (this.internalState = s.internalState);
        } else
          Rt(this.internalState.peek)
            ? (this.advanceState(this.internalState),
              (this.state = this.internalState))
            : (this.state.peek = this.internalState.peek);
    }
    decodeHexDigits(e, r) {
      let n = this.input.slice(
          e.internalState.offset,
          e.internalState.offset + r,
        ),
        s = parseInt(n, 16);
      if (isNaN(s))
        throw (
          ((e.state = e.internalState),
          new gt("Invalid hexadecimal escape sequence", e))
        );
      return s;
    }
  },
  gt = class {
    constructor(e, r) {
      (this.msg = e), (this.cursor = r);
    }
  };
var L = class t extends Ue {
    static create(e, r, n) {
      return new t(e, r, n);
    }
    constructor(e, r, n) {
      super(r, n), (this.elementName = e);
    }
  },
  Vr = class {
    constructor(e, r) {
      (this.rootNodes = e), (this.errors = r);
    }
  },
  nr = class {
    constructor(e) {
      this.getTagDefinition = e;
    }
    parse(e, r, n, s = !1, i) {
      let a =
          (D) =>
          (R, ...F) =>
            D(R.toLowerCase(), ...F),
        o = s ? this.getTagDefinition : a(this.getTagDefinition),
        u = (D) => o(D).getContentType(),
        p = s ? i : a(i),
        f = Ws(
          e,
          r,
          i
            ? (D, R, F, c) => {
                let g = p(D, R, F, c);
                return g !== void 0 ? g : u(D);
              }
            : u,
          n,
        ),
        d = (n && n.canSelfClose) || !1,
        C = (n && n.allowHtmComponentClosingTags) || !1,
        A = new Ur(f.tokens, o, d, C, s);
      return A.build(), new Vr(A.rootNodes, f.errors.concat(A.errors));
    }
  },
  Ur = class t {
    constructor(e, r, n, s, i) {
      (this.tokens = e),
        (this.getTagDefinition = r),
        (this.canSelfClose = n),
        (this.allowHtmComponentClosingTags = s),
        (this.isTagNameCaseSensitive = i),
        (this._index = -1),
        (this._containerStack = []),
        (this.rootNodes = []),
        (this.errors = []),
        this._advance();
    }
    build() {
      for (; this._peek.type !== 34; )
        this._peek.type === 0 || this._peek.type === 4
          ? this._consumeStartTag(this._advance())
          : this._peek.type === 3
            ? (this._closeVoidElement(), this._consumeEndTag(this._advance()))
            : this._peek.type === 12
              ? (this._closeVoidElement(), this._consumeCdata(this._advance()))
              : this._peek.type === 10
                ? (this._closeVoidElement(),
                  this._consumeComment(this._advance()))
                : this._peek.type === 5 ||
                    this._peek.type === 7 ||
                    this._peek.type === 6
                  ? (this._closeVoidElement(),
                    this._consumeText(this._advance()))
                  : this._peek.type === 20
                    ? this._consumeExpansion(this._advance())
                    : this._peek.type === 25
                      ? (this._closeVoidElement(),
                        this._consumeBlockOpen(this._advance()))
                      : this._peek.type === 27
                        ? (this._closeVoidElement(),
                          this._consumeBlockClose(this._advance()))
                        : this._peek.type === 29
                          ? (this._closeVoidElement(),
                            this._consumeIncompleteBlock(this._advance()))
                          : this._peek.type === 30
                            ? (this._closeVoidElement(),
                              this._consumeLet(this._advance()))
                            : this._peek.type === 18
                              ? this._consumeDocType(this._advance())
                              : this._peek.type === 33
                                ? (this._closeVoidElement(),
                                  this._consumeIncompleteLet(this._advance()))
                                : this._advance();
      for (let e of this._containerStack)
        e instanceof Z &&
          this.errors.push(
            L.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`),
          );
    }
    _advance() {
      let e = this._peek;
      return (
        this._index < this.tokens.length - 1 && this._index++,
        (this._peek = this.tokens[this._index]),
        e
      );
    }
    _advanceIf(e) {
      return this._peek.type === e ? this._advance() : null;
    }
    _consumeCdata(e) {
      let r = this._advance(),
        n = this._getText(r),
        s = this._advanceIf(13);
      this._addToParent(
        new Wt(n, new h(e.sourceSpan.start, (s || r).sourceSpan.end), [r]),
      );
    }
    _consumeComment(e) {
      let r = this._advanceIf(7),
        n = this._advanceIf(11),
        s = r != null ? r.parts[0].trim() : null,
        i =
          n == null
            ? e.sourceSpan
            : new h(
                e.sourceSpan.start,
                n.sourceSpan.end,
                e.sourceSpan.fullStart,
              );
      this._addToParent(new jt(s, i));
    }
    _consumeDocType(e) {
      let r = this._advanceIf(7),
        n = this._advanceIf(19),
        s = r != null ? r.parts[0].trim() : null,
        i = new h(e.sourceSpan.start, (n || r || e).sourceSpan.end);
      this._addToParent(new Kt(s, i));
    }
    _consumeExpansion(e) {
      let r = this._advance(),
        n = this._advance(),
        s = [];
      for (; this._peek.type === 21; ) {
        let a = this._parseExpansionCase();
        if (!a) return;
        s.push(a);
      }
      if (this._peek.type !== 24) {
        this.errors.push(
          L.create(
            null,
            this._peek.sourceSpan,
            "Invalid ICU message. Missing '}'.",
          ),
        );
        return;
      }
      let i = new h(
        e.sourceSpan.start,
        this._peek.sourceSpan.end,
        e.sourceSpan.fullStart,
      );
      this._addToParent(new zt(r.parts[0], n.parts[0], s, i, r.sourceSpan)),
        this._advance();
    }
    _parseExpansionCase() {
      let e = this._advance();
      if (this._peek.type !== 22)
        return (
          this.errors.push(
            L.create(
              null,
              this._peek.sourceSpan,
              "Invalid ICU message. Missing '{'.",
            ),
          ),
          null
        );
      let r = this._advance(),
        n = this._collectExpansionExpTokens(r);
      if (!n) return null;
      let s = this._advance();
      n.push({ type: 34, parts: [], sourceSpan: s.sourceSpan });
      let i = new t(
        n,
        this.getTagDefinition,
        this.canSelfClose,
        this.allowHtmComponentClosingTags,
        this.isTagNameCaseSensitive,
      );
      if ((i.build(), i.errors.length > 0))
        return (this.errors = this.errors.concat(i.errors)), null;
      let a = new h(
          e.sourceSpan.start,
          s.sourceSpan.end,
          e.sourceSpan.fullStart,
        ),
        o = new h(r.sourceSpan.start, s.sourceSpan.end, r.sourceSpan.fullStart);
      return new Gt(e.parts[0], i.rootNodes, a, e.sourceSpan, o);
    }
    _collectExpansionExpTokens(e) {
      let r = [],
        n = [22];
      for (;;) {
        if (
          ((this._peek.type === 20 || this._peek.type === 22) &&
            n.push(this._peek.type),
          this._peek.type === 23)
        )
          if (zs(n, 22)) {
            if ((n.pop(), n.length === 0)) return r;
          } else
            return (
              this.errors.push(
                L.create(
                  null,
                  e.sourceSpan,
                  "Invalid ICU message. Missing '}'.",
                ),
              ),
              null
            );
        if (this._peek.type === 24)
          if (zs(n, 20)) n.pop();
          else
            return (
              this.errors.push(
                L.create(
                  null,
                  e.sourceSpan,
                  "Invalid ICU message. Missing '}'.",
                ),
              ),
              null
            );
        if (this._peek.type === 34)
          return (
            this.errors.push(
              L.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'."),
            ),
            null
          );
        r.push(this._advance());
      }
    }
    _getText(e) {
      let r = e.parts[0];
      if (
        r.length > 0 &&
        r[0] ==
          `
`
      ) {
        let n = this._getClosestParentElement();
        n != null &&
          n.children.length == 0 &&
          this.getTagDefinition(n.name).ignoreFirstLf &&
          (r = r.substring(1));
      }
      return r;
    }
    _consumeText(e) {
      let r = [e],
        n = e.sourceSpan,
        s = e.parts[0];
      if (
        s.length > 0 &&
        s[0] ===
          `
`
      ) {
        let i = this._getContainer();
        i != null &&
          i.children.length === 0 &&
          this.getTagDefinition(i.name).ignoreFirstLf &&
          ((s = s.substring(1)),
          (r[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [s] }));
      }
      for (
        ;
        this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9;

      )
        (e = this._advance()),
          r.push(e),
          e.type === 8
            ? (s += e.parts.join("").replace(/&([^;]+);/g, Gs))
            : e.type === 9
              ? (s += e.parts[0])
              : (s += e.parts.join(""));
      if (s.length > 0) {
        let i = e.sourceSpan;
        this._addToParent(
          new Ut(s, new h(n.start, i.end, n.fullStart, n.details), r),
        );
      }
    }
    _closeVoidElement() {
      let e = this._getContainer();
      e instanceof G &&
        this.getTagDefinition(e.name).isVoid &&
        this._containerStack.pop();
    }
    _consumeStartTag(e) {
      let [r, n] = e.parts,
        s = [];
      for (; this._peek.type === 14; )
        s.push(this._consumeAttr(this._advance()));
      let i = this._getElementFullName(r, n, this._getClosestParentElement()),
        a = !1;
      if (this._peek.type === 2) {
        this._advance(), (a = !0);
        let C = this.getTagDefinition(i);
        this.canSelfClose ||
          C.canSelfClose ||
          We(i) !== null ||
          C.isVoid ||
          this.errors.push(
            L.create(
              i,
              e.sourceSpan,
              `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`,
            ),
          );
      } else this._peek.type === 1 && (this._advance(), (a = !1));
      let o = this._peek.sourceSpan.fullStart,
        u = new h(e.sourceSpan.start, o, e.sourceSpan.fullStart),
        p = new h(e.sourceSpan.start, o, e.sourceSpan.fullStart),
        l = new h(e.sourceSpan.start.moveBy(1), e.sourceSpan.end),
        f = new G(i, s, [], u, p, void 0, l),
        d = this._getContainer();
      this._pushContainer(
        f,
        d instanceof G && this.getTagDefinition(d.name).isClosedByChild(f.name),
      ),
        a
          ? this._popContainer(i, G, u)
          : e.type === 4 &&
            (this._popContainer(i, G, null),
            this.errors.push(
              L.create(i, u, `Opening tag "${i}" not terminated.`),
            ));
    }
    _pushContainer(e, r) {
      r && this._containerStack.pop(),
        this._addToParent(e),
        this._containerStack.push(e);
    }
    _consumeEndTag(e) {
      let r =
        this.allowHtmComponentClosingTags && e.parts.length === 0
          ? null
          : this._getElementFullName(
              e.parts[0],
              e.parts[1],
              this._getClosestParentElement(),
            );
      if (r && this.getTagDefinition(r).isVoid)
        this.errors.push(
          L.create(
            r,
            e.sourceSpan,
            `Void elements do not have end tags "${e.parts[1]}"`,
          ),
        );
      else if (!this._popContainer(r, G, e.sourceSpan)) {
        let n = `Unexpected closing tag "${r}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
        this.errors.push(L.create(r, e.sourceSpan, n));
      }
    }
    _popContainer(e, r, n) {
      let s = !1;
      for (let i = this._containerStack.length - 1; i >= 0; i--) {
        let a = this._containerStack[i];
        if (
          We(a.name)
            ? a.name === e
            : (e == null || a.name.toLowerCase() === e.toLowerCase()) &&
              a instanceof r
        )
          return (
            (a.endSourceSpan = n),
            (a.sourceSpan.end = n !== null ? n.end : a.sourceSpan.end),
            this._containerStack.splice(i, this._containerStack.length - i),
            !s
          );
        (a instanceof Z ||
          (a instanceof G && !this.getTagDefinition(a.name).closedByParent)) &&
          (s = !0);
      }
      return !1;
    }
    _consumeAttr(e) {
      let r = ze(e.parts[0], e.parts[1]),
        n = e.sourceSpan.end,
        s;
      this._peek.type === 15 && (s = this._advance());
      let i = "",
        a = [],
        o,
        u;
      if (this._peek.type === 16)
        for (
          o = this._peek.sourceSpan, u = this._peek.sourceSpan.end;
          this._peek.type === 16 ||
          this._peek.type === 17 ||
          this._peek.type === 9;

        ) {
          let f = this._advance();
          a.push(f),
            f.type === 17
              ? (i += f.parts.join("").replace(/&([^;]+);/g, Gs))
              : f.type === 9
                ? (i += f.parts[0])
                : (i += f.parts.join("")),
            (u = n = f.sourceSpan.end);
        }
      this._peek.type === 15 && (u = n = this._advance().sourceSpan.end);
      let l =
        o &&
        u &&
        new h(
          (s == null ? void 0 : s.sourceSpan.start) ?? o.start,
          u,
          (s == null ? void 0 : s.sourceSpan.fullStart) ?? o.fullStart,
        );
      return new Yt(
        r,
        i,
        new h(e.sourceSpan.start, n, e.sourceSpan.fullStart),
        e.sourceSpan,
        l,
        a.length > 0 ? a : void 0,
        void 0,
      );
    }
    _consumeBlockOpen(e) {
      let r = [];
      for (; this._peek.type === 28; ) {
        let o = this._advance();
        r.push(new ct(o.parts[0], o.sourceSpan));
      }
      this._peek.type === 26 && this._advance();
      let n = this._peek.sourceSpan.fullStart,
        s = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart),
        i = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart),
        a = new Z(e.parts[0], r, [], s, e.sourceSpan, i);
      this._pushContainer(a, !1);
    }
    _consumeBlockClose(e) {
      this._popContainer(null, Z, e.sourceSpan) ||
        this.errors.push(
          L.create(
            null,
            e.sourceSpan,
            'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.',
          ),
        );
    }
    _consumeIncompleteBlock(e) {
      let r = [];
      for (; this._peek.type === 28; ) {
        let o = this._advance();
        r.push(new ct(o.parts[0], o.sourceSpan));
      }
      let n = this._peek.sourceSpan.fullStart,
        s = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart),
        i = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart),
        a = new Z(e.parts[0], r, [], s, e.sourceSpan, i);
      this._pushContainer(a, !1),
        this._popContainer(null, Z, null),
        this.errors.push(
          L.create(
            e.parts[0],
            s,
            `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`,
          ),
        );
    }
    _consumeLet(e) {
      let r = e.parts[0],
        n,
        s;
      if (this._peek.type !== 31) {
        this.errors.push(
          L.create(
            e.parts[0],
            e.sourceSpan,
            `Invalid @let declaration "${r}". Declaration must have a value.`,
          ),
        );
        return;
      } else n = this._advance();
      if (this._peek.type !== 32) {
        this.errors.push(
          L.create(
            e.parts[0],
            e.sourceSpan,
            `Unterminated @let declaration "${r}". Declaration must be terminated with a semicolon.`,
          ),
        );
        return;
      } else s = this._advance();
      let i = s.sourceSpan.fullStart,
        a = new h(e.sourceSpan.start, i, e.sourceSpan.fullStart),
        o = e.sourceSpan.toString().lastIndexOf(r),
        u = e.sourceSpan.start.moveBy(o),
        p = new h(u, e.sourceSpan.end),
        l = new pt(r, n.parts[0], a, p, n.sourceSpan);
      this._addToParent(l);
    }
    _consumeIncompleteLet(e) {
      let r = e.parts[0] ?? "",
        n = r ? ` "${r}"` : "";
      if (r.length > 0) {
        let s = e.sourceSpan.toString().lastIndexOf(r),
          i = e.sourceSpan.start.moveBy(s),
          a = new h(i, e.sourceSpan.end),
          o = new h(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)),
          u = new pt(r, "", e.sourceSpan, a, o);
        this._addToParent(u);
      }
      this.errors.push(
        L.create(
          e.parts[0],
          e.sourceSpan,
          `Incomplete @let declaration${n}. @let declarations must be written as \`@let <name> = <value>;\``,
        ),
      );
    }
    _getContainer() {
      return this._containerStack.length > 0
        ? this._containerStack[this._containerStack.length - 1]
        : null;
    }
    _getClosestParentElement() {
      for (let e = this._containerStack.length - 1; e > -1; e--)
        if (this._containerStack[e] instanceof G)
          return this._containerStack[e];
      return null;
    }
    _addToParent(e) {
      let r = this._getContainer();
      r === null ? this.rootNodes.push(e) : r.children.push(e);
    }
    _getElementFullName(e, r, n) {
      if (
        e === "" &&
        ((e = this.getTagDefinition(r).implicitNamespacePrefix || ""),
        e === "" && n != null)
      ) {
        let s = ut(n.name)[1];
        this.getTagDefinition(s).preventNamespaceInheritance ||
          (e = We(n.name));
      }
      return ze(e, r);
    }
  };
function zs(t, e) {
  return t.length > 0 && t[t.length - 1] === e;
}
function Gs(t, e) {
  return Ye[e] !== void 0
    ? Ye[e] || t
    : /^#x[a-f0-9]+$/i.test(e)
      ? String.fromCodePoint(parseInt(e.slice(2), 16))
      : /^#\d+$/.test(e)
        ? String.fromCodePoint(parseInt(e.slice(1), 10))
        : t;
}
var sr = class extends nr {
  constructor() {
    super(Ge);
  }
  parse(e, r, n, s = !1, i) {
    return super.parse(e, r, n, s, i);
  }
};
var Wr = null,
  Eo = () => (Wr || (Wr = new sr()), Wr);
function zr(t, e = {}) {
  let {
    canSelfClose: r = !1,
    allowHtmComponentClosingTags: n = !1,
    isTagNameCaseSensitive: s = !1,
    getTagContentType: i,
    tokenizeAngularBlocks: a = !1,
    tokenizeAngularLetDeclaration: o = !1,
  } = e;
  return Eo().parse(
    t,
    "angular-html-parser",
    {
      tokenizeExpansionForms: a,
      interpolationConfig: void 0,
      canSelfClose: r,
      allowHtmComponentClosingTags: n,
      tokenizeBlocks: a,
      tokenizeLet: o,
    },
    s,
    i,
  );
}
function Ao(t, e) {
  let r = new SyntaxError(
    t + " (" + e.loc.start.line + ":" + e.loc.start.column + ")",
  );
  return Object.assign(r, e);
}
var Ys = Ao;
var Ct = 3;
function Do(t) {
  let e = t.slice(0, Ct);
  if (e !== "---" && e !== "+++") return;
  let r = t.indexOf(
    `
`,
    Ct,
  );
  if (r === -1) return;
  let n = t.slice(Ct, r).trim(),
    s = t.indexOf(
      `
${e}`,
      r,
    ),
    i = n;
  if (
    (i || (i = e === "+++" ? "toml" : "yaml"),
    s === -1 &&
      e === "---" &&
      i === "yaml" &&
      (s = t.indexOf(
        `
...`,
        r,
      )),
    s === -1)
  )
    return;
  let a = s + 1 + Ct,
    o = t.charAt(a + 1);
  if (!/\s?/u.test(o)) return;
  let u = t.slice(0, a);
  return {
    type: "front-matter",
    language: i,
    explicitLanguage: n,
    value: t.slice(r + 1, s),
    startDelimiter: e,
    endDelimiter: u.slice(-Ct),
    raw: u,
  };
}
function vo(t) {
  let e = Do(t);
  if (!e) return { content: t };
  let { raw: r } = e;
  return {
    frontMatter: e,
    content: w(!1, r, /[^\n]/gu, " ") + t.slice(r.length),
  };
}
var js = vo;
var ir = { attrs: !0, children: !0, cases: !0, expression: !0 },
  Ks = new Set(["parent"]),
  ar = class t {
    constructor(e = {}) {
      for (let r of new Set([...Ks, ...Object.keys(e)]))
        this.setProperty(r, e[r]);
    }
    setProperty(e, r) {
      if (this[e] !== r) {
        if ((e in ir && (r = r.map((n) => this.createChild(n))), !Ks.has(e))) {
          this[e] = r;
          return;
        }
        Object.defineProperty(this, e, {
          value: r,
          enumerable: !1,
          configurable: !0,
        });
      }
    }
    map(e) {
      let r;
      for (let n in ir) {
        let s = this[n];
        if (s) {
          let i = yo(s, (a) => a.map(e));
          r !== s &&
            (r || (r = new t({ parent: this.parent })), r.setProperty(n, i));
        }
      }
      if (r) for (let n in this) n in ir || (r[n] = this[n]);
      return e(r || this);
    }
    walk(e) {
      for (let r in ir) {
        let n = this[r];
        if (n) for (let s = 0; s < n.length; s++) n[s].walk(e);
      }
      e(this);
    }
    createChild(e) {
      let r = e instanceof t ? e.clone() : new t(e);
      return r.setProperty("parent", this), r;
    }
    insertChildBefore(e, r) {
      this.children.splice(this.children.indexOf(e), 0, this.createChild(r));
    }
    removeChild(e) {
      this.children.splice(this.children.indexOf(e), 1);
    }
    replaceChild(e, r) {
      this.children[this.children.indexOf(e)] = this.createChild(r);
    }
    clone() {
      return new t(this);
    }
    get firstChild() {
      var e;
      return (e = this.children) == null ? void 0 : e[0];
    }
    get lastChild() {
      var e;
      return (e = this.children) == null ? void 0 : e[this.children.length - 1];
    }
    get prev() {
      var e, r;
      return (r = (e = this.parent) == null ? void 0 : e.children) == null
        ? void 0
        : r[this.parent.children.indexOf(this) - 1];
    }
    get next() {
      var e, r;
      return (r = (e = this.parent) == null ? void 0 : e.children) == null
        ? void 0
        : r[this.parent.children.indexOf(this) + 1];
    }
    get rawName() {
      return this.hasExplicitNamespace ? this.fullName : this.name;
    }
    get fullName() {
      return this.namespace ? this.namespace + ":" + this.name : this.name;
    }
    get attrMap() {
      return Object.fromEntries(this.attrs.map((e) => [e.fullName, e.value]));
    }
  };
function yo(t, e) {
  let r = t.map(e);
  return r.some((n, s) => n !== t[s]) ? r : t;
}
var wo = [
  { regex: /^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su, parse: bo },
  { regex: /^\[if([^\]]*)\]><!$/u, parse: To },
  { regex: /^<!\s*\[endif\]$/u, parse: xo },
];
function Qs(t, e) {
  if (t.value)
    for (let { regex: r, parse: n } of wo) {
      let s = t.value.match(r);
      if (s) return n(t, e, s);
    }
  return null;
}
function bo(t, e, r) {
  let [, n, s, i] = r,
    a = 4 + n.length,
    o = t.sourceSpan.start.moveBy(a),
    u = o.moveBy(i.length),
    [p, l] = (() => {
      try {
        return [!0, e(i, o).children];
      } catch {
        return [!1, [{ type: "text", value: i, sourceSpan: new h(o, u) }]];
      }
    })();
  return {
    type: "ieConditionalComment",
    complete: p,
    children: l,
    condition: w(!1, s.trim(), /\s+/gu, " "),
    sourceSpan: t.sourceSpan,
    startSourceSpan: new h(t.sourceSpan.start, o),
    endSourceSpan: new h(u, t.sourceSpan.end),
  };
}
function To(t, e, r) {
  let [, n] = r;
  return {
    type: "ieConditionalStartComment",
    condition: w(!1, n.trim(), /\s+/gu, " "),
    sourceSpan: t.sourceSpan,
  };
}
function xo(t) {
  return { type: "ieConditionalEndComment", sourceSpan: t.sourceSpan };
}
var or = new Map([
  [
    "*",
    new Set([
      "accesskey",
      "autocapitalize",
      "autofocus",
      "class",
      "contenteditable",
      "dir",
      "draggable",
      "enterkeyhint",
      "hidden",
      "id",
      "inert",
      "inputmode",
      "is",
      "itemid",
      "itemprop",
      "itemref",
      "itemscope",
      "itemtype",
      "lang",
      "nonce",
      "popover",
      "slot",
      "spellcheck",
      "style",
      "tabindex",
      "title",
      "translate",
      "writingsuggestions",
    ]),
  ],
  [
    "a",
    new Set([
      "charset",
      "coords",
      "download",
      "href",
      "hreflang",
      "name",
      "ping",
      "referrerpolicy",
      "rel",
      "rev",
      "shape",
      "target",
      "type",
    ]),
  ],
  [
    "applet",
    new Set([
      "align",
      "alt",
      "archive",
      "code",
      "codebase",
      "height",
      "hspace",
      "name",
      "object",
      "vspace",
      "width",
    ]),
  ],
  [
    "area",
    new Set([
      "alt",
      "coords",
      "download",
      "href",
      "hreflang",
      "nohref",
      "ping",
      "referrerpolicy",
      "rel",
      "shape",
      "target",
      "type",
    ]),
  ],
  [
    "audio",
    new Set([
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src",
    ]),
  ],
  ["base", new Set(["href", "target"])],
  ["basefont", new Set(["color", "face", "size"])],
  ["blockquote", new Set(["cite"])],
  [
    "body",
    new Set(["alink", "background", "bgcolor", "link", "text", "vlink"]),
  ],
  ["br", new Set(["clear"])],
  [
    "button",
    new Set([
      "disabled",
      "form",
      "formaction",
      "formenctype",
      "formmethod",
      "formnovalidate",
      "formtarget",
      "name",
      "popovertarget",
      "popovertargetaction",
      "type",
      "value",
    ]),
  ],
  ["canvas", new Set(["height", "width"])],
  ["caption", new Set(["align"])],
  ["col", new Set(["align", "char", "charoff", "span", "valign", "width"])],
  [
    "colgroup",
    new Set(["align", "char", "charoff", "span", "valign", "width"]),
  ],
  ["data", new Set(["value"])],
  ["del", new Set(["cite", "datetime"])],
  ["details", new Set(["name", "open"])],
  ["dialog", new Set(["open"])],
  ["dir", new Set(["compact"])],
  ["div", new Set(["align"])],
  ["dl", new Set(["compact"])],
  ["embed", new Set(["height", "src", "type", "width"])],
  ["fieldset", new Set(["disabled", "form", "name"])],
  ["font", new Set(["color", "face", "size"])],
  [
    "form",
    new Set([
      "accept",
      "accept-charset",
      "action",
      "autocomplete",
      "enctype",
      "method",
      "name",
      "novalidate",
      "target",
    ]),
  ],
  [
    "frame",
    new Set([
      "frameborder",
      "longdesc",
      "marginheight",
      "marginwidth",
      "name",
      "noresize",
      "scrolling",
      "src",
    ]),
  ],
  ["frameset", new Set(["cols", "rows"])],
  ["h1", new Set(["align"])],
  ["h2", new Set(["align"])],
  ["h3", new Set(["align"])],
  ["h4", new Set(["align"])],
  ["h5", new Set(["align"])],
  ["h6", new Set(["align"])],
  ["head", new Set(["profile"])],
  ["hr", new Set(["align", "noshade", "size", "width"])],
  ["html", new Set(["manifest", "version"])],
  [
    "iframe",
    new Set([
      "align",
      "allow",
      "allowfullscreen",
      "allowpaymentrequest",
      "allowusermedia",
      "frameborder",
      "height",
      "loading",
      "longdesc",
      "marginheight",
      "marginwidth",
      "name",
      "referrerpolicy",
      "sandbox",
      "scrolling",
      "src",
      "srcdoc",
      "width",
    ]),
  ],
  [
    "img",
    new Set([
      "align",
      "alt",
      "border",
      "crossorigin",
      "decoding",
      "fetchpriority",
      "height",
      "hspace",
      "ismap",
      "loading",
      "longdesc",
      "name",
      "referrerpolicy",
      "sizes",
      "src",
      "srcset",
      "usemap",
      "vspace",
      "width",
    ]),
  ],
  [
    "input",
    new Set([
      "accept",
      "align",
      "alt",
      "autocomplete",
      "checked",
      "dirname",
      "disabled",
      "form",
      "formaction",
      "formenctype",
      "formmethod",
      "formnovalidate",
      "formtarget",
      "height",
      "ismap",
      "list",
      "max",
      "maxlength",
      "min",
      "minlength",
      "multiple",
      "name",
      "pattern",
      "placeholder",
      "popovertarget",
      "popovertargetaction",
      "readonly",
      "required",
      "size",
      "src",
      "step",
      "type",
      "usemap",
      "value",
      "width",
    ]),
  ],
  ["ins", new Set(["cite", "datetime"])],
  ["isindex", new Set(["prompt"])],
  ["label", new Set(["for", "form"])],
  ["legend", new Set(["align"])],
  ["li", new Set(["type", "value"])],
  [
    "link",
    new Set([
      "as",
      "blocking",
      "charset",
      "color",
      "crossorigin",
      "disabled",
      "fetchpriority",
      "href",
      "hreflang",
      "imagesizes",
      "imagesrcset",
      "integrity",
      "media",
      "referrerpolicy",
      "rel",
      "rev",
      "sizes",
      "target",
      "type",
    ]),
  ],
  ["map", new Set(["name"])],
  ["menu", new Set(["compact"])],
  [
    "meta",
    new Set(["charset", "content", "http-equiv", "media", "name", "scheme"]),
  ],
  ["meter", new Set(["high", "low", "max", "min", "optimum", "value"])],
  [
    "object",
    new Set([
      "align",
      "archive",
      "border",
      "classid",
      "codebase",
      "codetype",
      "data",
      "declare",
      "form",
      "height",
      "hspace",
      "name",
      "standby",
      "type",
      "typemustmatch",
      "usemap",
      "vspace",
      "width",
    ]),
  ],
  ["ol", new Set(["compact", "reversed", "start", "type"])],
  ["optgroup", new Set(["disabled", "label"])],
  ["option", new Set(["disabled", "label", "selected", "value"])],
  ["output", new Set(["for", "form", "name"])],
  ["p", new Set(["align"])],
  ["param", new Set(["name", "type", "value", "valuetype"])],
  ["pre", new Set(["width"])],
  ["progress", new Set(["max", "value"])],
  ["q", new Set(["cite"])],
  [
    "script",
    new Set([
      "async",
      "blocking",
      "charset",
      "crossorigin",
      "defer",
      "fetchpriority",
      "integrity",
      "language",
      "nomodule",
      "referrerpolicy",
      "src",
      "type",
    ]),
  ],
  [
    "select",
    new Set([
      "autocomplete",
      "disabled",
      "form",
      "multiple",
      "name",
      "required",
      "size",
    ]),
  ],
  ["slot", new Set(["name"])],
  [
    "source",
    new Set(["height", "media", "sizes", "src", "srcset", "type", "width"]),
  ],
  ["style", new Set(["blocking", "media", "type"])],
  [
    "table",
    new Set([
      "align",
      "bgcolor",
      "border",
      "cellpadding",
      "cellspacing",
      "frame",
      "rules",
      "summary",
      "width",
    ]),
  ],
  ["tbody", new Set(["align", "char", "charoff", "valign"])],
  [
    "td",
    new Set([
      "abbr",
      "align",
      "axis",
      "bgcolor",
      "char",
      "charoff",
      "colspan",
      "headers",
      "height",
      "nowrap",
      "rowspan",
      "scope",
      "valign",
      "width",
    ]),
  ],
  [
    "template",
    new Set([
      "shadowrootclonable",
      "shadowrootdelegatesfocus",
      "shadowrootmode",
    ]),
  ],
  [
    "textarea",
    new Set([
      "autocomplete",
      "cols",
      "dirname",
      "disabled",
      "form",
      "maxlength",
      "minlength",
      "name",
      "placeholder",
      "readonly",
      "required",
      "rows",
      "wrap",
    ]),
  ],
  ["tfoot", new Set(["align", "char", "charoff", "valign"])],
  [
    "th",
    new Set([
      "abbr",
      "align",
      "axis",
      "bgcolor",
      "char",
      "charoff",
      "colspan",
      "headers",
      "height",
      "nowrap",
      "rowspan",
      "scope",
      "valign",
      "width",
    ]),
  ],
  ["thead", new Set(["align", "char", "charoff", "valign"])],
  ["time", new Set(["datetime"])],
  ["tr", new Set(["align", "bgcolor", "char", "charoff", "valign"])],
  ["track", new Set(["default", "kind", "label", "src", "srclang"])],
  ["ul", new Set(["compact", "type"])],
  [
    "video",
    new Set([
      "autoplay",
      "controls",
      "crossorigin",
      "height",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "width",
    ]),
  ],
]);
var Xs = new Set([
  "a",
  "abbr",
  "acronym",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "basefont",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "command",
  "content",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "image",
  "img",
  "input",
  "ins",
  "isindex",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "multicol",
  "nav",
  "nextid",
  "nobr",
  "noembed",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "plaintext",
  "pre",
  "progress",
  "q",
  "rb",
  "rbc",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "xmp",
]);
function ko(t) {
  if (t.type === "block") {
    if (
      ((t.name = w(!1, t.name.toLowerCase(), /\s+/gu, " ").trim()),
      (t.type = "angularControlFlowBlock"),
      !qe(t.parameters))
    ) {
      delete t.parameters;
      return;
    }
    for (let e of t.parameters) e.type = "angularControlFlowBlockParameter";
    t.parameters = {
      type: "angularControlFlowBlockParameters",
      children: t.parameters,
      sourceSpan: new h(
        t.parameters[0].sourceSpan.start,
        X(!1, t.parameters, -1).sourceSpan.end,
      ),
    };
  }
}
function Bo(t) {
  t.type === "letDeclaration" &&
    ((t.type = "angularLetDeclaration"),
    (t.id = t.name),
    (t.init = {
      type: "angularLetDeclarationInitializer",
      sourceSpan: new h(t.valueSpan.start, t.valueSpan.end),
      value: t.value,
    }),
    delete t.name,
    delete t.value);
}
function Lo(t) {
  (t.type === "plural" || t.type === "select") &&
    ((t.clause = t.type), (t.type = "angularIcuExpression")),
    t.type === "expansionCase" && (t.type = "angularIcuCase");
}
function Zs(t, e, r) {
  let {
      name: n,
      canSelfClose: s = !0,
      normalizeTagName: i = !1,
      normalizeAttributeName: a = !1,
      allowHtmComponentClosingTags: o = !1,
      isTagNameCaseSensitive: u = !1,
      shouldParseAsRawText: p,
    } = e,
    { rootNodes: l, errors: f } = zr(t, {
      canSelfClose: s,
      allowHtmComponentClosingTags: o,
      isTagNameCaseSensitive: u,
      getTagContentType: p ? (...c) => (p(...c) ? I.RAW_TEXT : void 0) : void 0,
      tokenizeAngularBlocks: n === "angular" ? !0 : void 0,
      tokenizeAngularLetDeclaration: n === "angular" ? !0 : void 0,
    });
  if (n === "vue") {
    if (
      l.some(
        (x) =>
          (x.type === "docType" && x.value === "html") ||
          (x.type === "element" && x.name.toLowerCase() === "html"),
      )
    )
      return Zs(t, ti, r);
    let g,
      y = () =>
        g ??
        (g = zr(t, {
          canSelfClose: s,
          allowHtmComponentClosingTags: o,
          isTagNameCaseSensitive: u,
        })),
      M = (x) =>
        y().rootNodes.find(
          ({ startSourceSpan: V }) =>
            V && V.start.offset === x.startSourceSpan.start.offset,
        ) ?? x;
    for (let [x, V] of l.entries()) {
      let { endSourceSpan: jr, startSourceSpan: ri } = V;
      if (jr === null) (f = y().errors), (l[x] = M(V));
      else if (Fo(V, r)) {
        let Kr = y().errors.find(
          (Qr) =>
            Qr.span.start.offset > ri.start.offset &&
            Qr.span.start.offset < jr.end.offset,
        );
        Kr && Js(Kr), (l[x] = M(V));
      }
    }
  }
  f.length > 0 && Js(f[0]);
  let d = (c) => {
      let g = c.name.startsWith(":") ? c.name.slice(1).split(":")[0] : null,
        y = c.nameSpan.toString(),
        M = g !== null && y.startsWith(`${g}:`),
        x = M ? y.slice(g.length + 1) : y;
      (c.name = x), (c.namespace = g), (c.hasExplicitNamespace = M);
    },
    C = (c) => {
      switch (c.type) {
        case "element":
          d(c);
          for (let g of c.attrs)
            d(g),
              g.valueSpan
                ? ((g.value = g.valueSpan.toString()),
                  /["']/u.test(g.value[0]) && (g.value = g.value.slice(1, -1)))
                : (g.value = null);
          break;
        case "comment":
          c.value = c.sourceSpan.toString().slice(4, -3);
          break;
        case "text":
          c.value = c.sourceSpan.toString();
          break;
      }
    },
    A = (c, g) => {
      let y = c.toLowerCase();
      return g(y) ? y : c;
    },
    D = (c) => {
      if (
        c.type === "element" &&
        (i &&
          (!c.namespace ||
            c.namespace === c.tagDefinition.implicitNamespacePrefix ||
            Se(c)) &&
          (c.name = A(c.name, (g) => Xs.has(g))),
        a)
      )
        for (let g of c.attrs)
          g.namespace ||
            (g.name = A(
              g.name,
              (y) =>
                or.has(c.name) && (or.get("*").has(y) || or.get(c.name).has(y)),
            ));
    },
    R = (c) => {
      c.sourceSpan &&
        c.endSourceSpan &&
        (c.sourceSpan = new h(c.sourceSpan.start, c.endSourceSpan.end));
    },
    F = (c) => {
      if (c.type === "element") {
        let g = Ge(u ? c.name : c.name.toLowerCase());
        !c.namespace || c.namespace === g.implicitNamespacePrefix || Se(c)
          ? (c.tagDefinition = g)
          : (c.tagDefinition = Ge(""));
      }
    };
  return (
    Qt(
      new (class extends ht {
        visitExpansionCase(c, g) {
          n === "angular" &&
            this.visitChildren(g, (y) => {
              y(c.expression);
            });
        }
        visit(c) {
          C(c), F(c), D(c), R(c);
        }
      })(),
      l,
    ),
    l
  );
}
function Fo(t, e) {
  var n;
  if (t.type !== "element" || t.name !== "template") return !1;
  let r =
    (n = t.attrs.find((s) => s.name === "lang")) == null ? void 0 : n.value;
  return !r || Oe(e, { language: r }) === "html";
}
function Js(t) {
  let {
    msg: e,
    span: { start: r, end: n },
  } = t;
  throw Ys(e, {
    loc: {
      start: { line: r.line + 1, column: r.col + 1 },
      end: { line: n.line + 1, column: n.col + 1 },
    },
    cause: t,
  });
}
function ei(t, e, r = {}, n = !0) {
  let { frontMatter: s, content: i } = n
      ? js(t)
      : { frontMatter: null, content: t },
    a = new Te(t, r.filepath),
    o = new ae(a, 0, 0, 0),
    u = o.moveBy(t.length),
    p = { type: "root", sourceSpan: new h(o, u), children: Zs(i, e, r) };
  if (s) {
    let d = new ae(a, 0, 0, 0),
      C = d.moveBy(s.raw.length);
    (s.sourceSpan = new h(d, C)), p.children.unshift(s);
  }
  let l = new ar(p),
    f = (d, C) => {
      let { offset: A } = C,
        D = w(!1, t.slice(0, A), /[^\n\r]/gu, " "),
        F = ei(D + d, e, r, !1);
      F.sourceSpan = new h(C, X(!1, F.children, -1).sourceSpan.end);
      let c = F.children[0];
      return (
        c.length === A
          ? F.children.shift()
          : ((c.sourceSpan = new h(
              c.sourceSpan.start.moveBy(A),
              c.sourceSpan.end,
            )),
            (c.value = c.value.slice(A))),
        F
      );
    };
  return (
    l.walk((d) => {
      if (d.type === "comment") {
        let C = Qs(d, f);
        C && d.parent.replaceChild(d, C);
      }
      ko(d), Bo(d), Lo(d);
    }),
    l
  );
}
function ur(t) {
  return {
    parse: (e, r) => ei(e, t, r),
    hasPragma: os,
    astFormat: "html",
    locStart: se,
    locEnd: ie,
  };
}
var ti = {
    name: "html",
    normalizeTagName: !0,
    normalizeAttributeName: !0,
    allowHtmComponentClosingTags: !0,
  },
  No = ur(ti),
  Po = ur({ name: "angular" }),
  Io = ur({
    name: "vue",
    isTagNameCaseSensitive: !0,
    shouldParseAsRawText(t, e, r, n) {
      return (
        t.toLowerCase() !== "html" &&
        !r &&
        (t !== "template" ||
          n.some(
            ({ name: s, value: i }) =>
              s === "lang" && i !== "html" && i !== "" && i !== void 0,
          ))
      );
    },
  }),
  Ro = ur({ name: "lwc", canSelfClose: !1 });
var $o = { html: As };
var Ih = Yr;
export {
  Ih as default,
  Ds as languages,
  ys as options,
  Gr as parsers,
  $o as printers,
};
