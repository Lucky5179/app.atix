import { P as yu } from "./index-BcYJ6NjY.js";
let Cu = {};
const y0 = (u) => (u ? u.split(" ") : []),
  w0 = (u) => (Array.isArray(u) ? u : [u]);
function Ku(u) {
  u.forEach((e) => {
    if (/(_open$|image)/.test(e.type) && Cu[e.tag]) {
      const r = y0(e.attrGet("class")),
        n = w0(Cu[e.tag]);
      e.attrSet("class", [...r, ...n].join(" "));
    }
    e.children && Ku(e.children);
  });
}
function v0(u) {
  Ku(u.tokens);
}
function S0(u, e) {
  (Cu = e || {}), u.core.ruler.push("markdownit-tag-to-class", v0);
}
var T0 = S0;
const An = yu(T0),
  Ru = {};
function B0(u) {
  let e = Ru[u];
  if (e) return e;
  e = Ru[u] = [];
  for (let r = 0; r < 128; r++) {
    const n = String.fromCharCode(r);
    e.push(n);
  }
  for (let r = 0; r < u.length; r++) {
    const n = u.charCodeAt(r);
    e[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  }
  return e;
}
function J(u, e) {
  typeof e != "string" && (e = J.defaultChars);
  const r = B0(e);
  return u.replace(/(%[a-f0-9]{2})+/gi, function (n) {
    let t = "";
    for (let c = 0, o = n.length; c < o; c += 3) {
      const i = parseInt(n.slice(c + 1, c + 3), 16);
      if (i < 128) {
        t += r[i];
        continue;
      }
      if ((i & 224) === 192 && c + 3 < o) {
        const a = parseInt(n.slice(c + 4, c + 6), 16);
        if ((a & 192) === 128) {
          const s = ((i << 6) & 1984) | (a & 63);
          s < 128 ? (t += "��") : (t += String.fromCharCode(s)), (c += 3);
          continue;
        }
      }
      if ((i & 240) === 224 && c + 6 < o) {
        const a = parseInt(n.slice(c + 4, c + 6), 16),
          s = parseInt(n.slice(c + 7, c + 9), 16);
        if ((a & 192) === 128 && (s & 192) === 128) {
          const f = ((i << 12) & 61440) | ((a << 6) & 4032) | (s & 63);
          f < 2048 || (f >= 55296 && f <= 57343)
            ? (t += "���")
            : (t += String.fromCharCode(f)),
            (c += 6);
          continue;
        }
      }
      if ((i & 248) === 240 && c + 9 < o) {
        const a = parseInt(n.slice(c + 4, c + 6), 16),
          s = parseInt(n.slice(c + 7, c + 9), 16),
          f = parseInt(n.slice(c + 10, c + 12), 16);
        if ((a & 192) === 128 && (s & 192) === 128 && (f & 192) === 128) {
          let d =
            ((i << 18) & 1835008) |
            ((a << 12) & 258048) |
            ((s << 6) & 4032) |
            (f & 63);
          d < 65536 || d > 1114111
            ? (t += "����")
            : ((d -= 65536),
              (t += String.fromCharCode(
                55296 + (d >> 10),
                56320 + (d & 1023)
              ))),
            (c += 9);
          continue;
        }
      }
      t += "�";
    }
    return t;
  });
}
J.defaultChars = ";/?:@&=+$,#";
J.componentChars = "";
const qu = {};
function z0(u) {
  let e = qu[u];
  if (e) return e;
  e = qu[u] = [];
  for (let r = 0; r < 128; r++) {
    const n = String.fromCharCode(r);
    /^[0-9a-z]$/i.test(n)
      ? e.push(n)
      : e.push("%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
  }
  for (let r = 0; r < u.length; r++) e[u.charCodeAt(r)] = u[r];
  return e;
}
function nu(u, e, r) {
  typeof e != "string" && ((r = e), (e = nu.defaultChars)),
    typeof r > "u" && (r = !0);
  const n = z0(e);
  let t = "";
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u.charCodeAt(c);
    if (
      r &&
      i === 37 &&
      c + 2 < o &&
      /^[0-9a-f]{2}$/i.test(u.slice(c + 1, c + 3))
    ) {
      (t += u.slice(c, c + 3)), (c += 2);
      continue;
    }
    if (i < 128) {
      t += n[i];
      continue;
    }
    if (i >= 55296 && i <= 57343) {
      if (i >= 55296 && i <= 56319 && c + 1 < o) {
        const a = u.charCodeAt(c + 1);
        if (a >= 56320 && a <= 57343) {
          (t += encodeURIComponent(u[c] + u[c + 1])), c++;
          continue;
        }
      }
      t += "%EF%BF%BD";
      continue;
    }
    t += encodeURIComponent(u[c]);
  }
  return t;
}
nu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
nu.componentChars = "-_.!~*'()";
function wu(u) {
  let e = "";
  return (
    (e += u.protocol || ""),
    (e += u.slashes ? "//" : ""),
    (e += u.auth ? u.auth + "@" : ""),
    u.hostname && u.hostname.indexOf(":") !== -1
      ? (e += "[" + u.hostname + "]")
      : (e += u.hostname || ""),
    (e += u.port ? ":" + u.port : ""),
    (e += u.pathname || ""),
    (e += u.search || ""),
    (e += u.hash || ""),
    e
  );
}
function au() {
  (this.protocol = null),
    (this.slashes = null),
    (this.auth = null),
    (this.port = null),
    (this.hostname = null),
    (this.hash = null),
    (this.search = null),
    (this.pathname = null);
}
const I0 = /^([a-z0-9.+-]+:)/i,
  M0 = /:[0-9]*$/,
  R0 = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
  q0 = [
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    `
`,
    "	",
  ],
  L0 = ["{", "}", "|", "\\", "^", "`"].concat(q0),
  P0 = ["'"].concat(L0),
  Lu = ["%", "/", "?", ";", "#"].concat(P0),
  Pu = ["/", "?", "#"],
  O0 = 255,
  Ou = /^[+a-z0-9A-Z_-]{0,63}$/,
  N0 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  Nu = { javascript: !0, "javascript:": !0 },
  ju = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0,
  };
function vu(u, e) {
  if (u && u instanceof au) return u;
  const r = new au();
  return r.parse(u, e), r;
}
au.prototype.parse = function (u, e) {
  let r,
    n,
    t,
    c = u;
  if (((c = c.trim()), !e && u.split("#").length === 1)) {
    const s = R0.exec(c);
    if (s) return (this.pathname = s[1]), s[2] && (this.search = s[2]), this;
  }
  let o = I0.exec(c);
  if (
    (o &&
      ((o = o[0]),
      (r = o.toLowerCase()),
      (this.protocol = o),
      (c = c.substr(o.length))),
    (e || o || c.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
      ((t = c.substr(0, 2) === "//"),
      t && !(o && Nu[o]) && ((c = c.substr(2)), (this.slashes = !0))),
    !Nu[o] && (t || (o && !ju[o])))
  ) {
    let s = -1;
    for (let l = 0; l < Pu.length; l++)
      (n = c.indexOf(Pu[l])), n !== -1 && (s === -1 || n < s) && (s = n);
    let f, d;
    s === -1 ? (d = c.lastIndexOf("@")) : (d = c.lastIndexOf("@", s)),
      d !== -1 && ((f = c.slice(0, d)), (c = c.slice(d + 1)), (this.auth = f)),
      (s = -1);
    for (let l = 0; l < Lu.length; l++)
      (n = c.indexOf(Lu[l])), n !== -1 && (s === -1 || n < s) && (s = n);
    s === -1 && (s = c.length), c[s - 1] === ":" && s--;
    const b = c.slice(0, s);
    (c = c.slice(s)), this.parseHost(b), (this.hostname = this.hostname || "");
    const h =
      this.hostname[0] === "[" &&
      this.hostname[this.hostname.length - 1] === "]";
    if (!h) {
      const l = this.hostname.split(/\./);
      for (let p = 0, k = l.length; p < k; p++) {
        const E = l[p];
        if (E && !E.match(Ou)) {
          let x = "";
          for (let m = 0, _ = E.length; m < _; m++)
            E.charCodeAt(m) > 127 ? (x += "x") : (x += E[m]);
          if (!x.match(Ou)) {
            const m = l.slice(0, p),
              _ = l.slice(p + 1),
              g = E.match(N0);
            g && (m.push(g[1]), _.unshift(g[2])),
              _.length && (c = _.join(".") + c),
              (this.hostname = m.join("."));
            break;
          }
        }
      }
    }
    this.hostname.length > O0 && (this.hostname = ""),
      h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const i = c.indexOf("#");
  i !== -1 && ((this.hash = c.substr(i)), (c = c.slice(0, i)));
  const a = c.indexOf("?");
  return (
    a !== -1 && ((this.search = c.substr(a)), (c = c.slice(0, a))),
    c && (this.pathname = c),
    ju[r] && this.hostname && !this.pathname && (this.pathname = ""),
    this
  );
};
au.prototype.parseHost = function (u) {
  let e = M0.exec(u);
  e &&
    ((e = e[0]),
    e !== ":" && (this.port = e.substr(1)),
    (u = u.substr(0, u.length - e.length))),
    u && (this.hostname = u);
};
const j0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, decode: J, encode: nu, format: wu, parse: vu },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  u0 =
    /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
  e0 = /[\0-\x1F\x7F-\x9F]/,
  $0 =
    /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
  Su =
    /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
  r0 =
    /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,
  n0 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
  U0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Any: u0, Cc: e0, Cf: $0, P: Su, S: r0, Z: n0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Z0 = new Uint16Array(
    'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'
      .split("")
      .map((u) => u.charCodeAt(0))
  ),
  H0 = new Uint16Array(
    "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢"
      .split("")
      .map((u) => u.charCodeAt(0))
  );
var pu;
const V0 = new Map([
    [0, 65533],
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
  ]),
  G0 =
    (pu = String.fromCodePoint) !== null && pu !== void 0
      ? pu
      : function (u) {
          let e = "";
          return (
            u > 65535 &&
              ((u -= 65536),
              (e += String.fromCharCode(((u >>> 10) & 1023) | 55296)),
              (u = 56320 | (u & 1023))),
            (e += String.fromCharCode(u)),
            e
          );
        };
function W0(u) {
  var e;
  return (u >= 55296 && u <= 57343) || u > 1114111
    ? 65533
    : (e = V0.get(u)) !== null && e !== void 0
    ? e
    : u;
}
var z;
(function (u) {
  (u[(u.NUM = 35)] = "NUM"),
    (u[(u.SEMI = 59)] = "SEMI"),
    (u[(u.EQUALS = 61)] = "EQUALS"),
    (u[(u.ZERO = 48)] = "ZERO"),
    (u[(u.NINE = 57)] = "NINE"),
    (u[(u.LOWER_A = 97)] = "LOWER_A"),
    (u[(u.LOWER_F = 102)] = "LOWER_F"),
    (u[(u.LOWER_X = 120)] = "LOWER_X"),
    (u[(u.LOWER_Z = 122)] = "LOWER_Z"),
    (u[(u.UPPER_A = 65)] = "UPPER_A"),
    (u[(u.UPPER_F = 70)] = "UPPER_F"),
    (u[(u.UPPER_Z = 90)] = "UPPER_Z");
})(z || (z = {}));
const J0 = 32;
var H;
(function (u) {
  (u[(u.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
    (u[(u.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
    (u[(u.JUMP_TABLE = 127)] = "JUMP_TABLE");
})(H || (H = {}));
function Eu(u) {
  return u >= z.ZERO && u <= z.NINE;
}
function Q0(u) {
  return (
    (u >= z.UPPER_A && u <= z.UPPER_F) || (u >= z.LOWER_A && u <= z.LOWER_F)
  );
}
function X0(u) {
  return (
    (u >= z.UPPER_A && u <= z.UPPER_Z) ||
    (u >= z.LOWER_A && u <= z.LOWER_Z) ||
    Eu(u)
  );
}
function Y0(u) {
  return u === z.EQUALS || X0(u);
}
var B;
(function (u) {
  (u[(u.EntityStart = 0)] = "EntityStart"),
    (u[(u.NumericStart = 1)] = "NumericStart"),
    (u[(u.NumericDecimal = 2)] = "NumericDecimal"),
    (u[(u.NumericHex = 3)] = "NumericHex"),
    (u[(u.NamedEntity = 4)] = "NamedEntity");
})(B || (B = {}));
var Z;
(function (u) {
  (u[(u.Legacy = 0)] = "Legacy"),
    (u[(u.Strict = 1)] = "Strict"),
    (u[(u.Attribute = 2)] = "Attribute");
})(Z || (Z = {}));
class K0 {
  constructor(e, r, n) {
    (this.decodeTree = e),
      (this.emitCodePoint = r),
      (this.errors = n),
      (this.state = B.EntityStart),
      (this.consumed = 1),
      (this.result = 0),
      (this.treeIndex = 0),
      (this.excess = 1),
      (this.decodeMode = Z.Strict);
  }
  startEntity(e) {
    (this.decodeMode = e),
      (this.state = B.EntityStart),
      (this.result = 0),
      (this.treeIndex = 0),
      (this.excess = 1),
      (this.consumed = 1);
  }
  write(e, r) {
    switch (this.state) {
      case B.EntityStart:
        return e.charCodeAt(r) === z.NUM
          ? ((this.state = B.NumericStart),
            (this.consumed += 1),
            this.stateNumericStart(e, r + 1))
          : ((this.state = B.NamedEntity), this.stateNamedEntity(e, r));
      case B.NumericStart:
        return this.stateNumericStart(e, r);
      case B.NumericDecimal:
        return this.stateNumericDecimal(e, r);
      case B.NumericHex:
        return this.stateNumericHex(e, r);
      case B.NamedEntity:
        return this.stateNamedEntity(e, r);
    }
  }
  stateNumericStart(e, r) {
    return r >= e.length
      ? -1
      : (e.charCodeAt(r) | J0) === z.LOWER_X
      ? ((this.state = B.NumericHex),
        (this.consumed += 1),
        this.stateNumericHex(e, r + 1))
      : ((this.state = B.NumericDecimal), this.stateNumericDecimal(e, r));
  }
  addToNumericResult(e, r, n, t) {
    if (r !== n) {
      const c = n - r;
      (this.result =
        this.result * Math.pow(t, c) + parseInt(e.substr(r, c), t)),
        (this.consumed += c);
    }
  }
  stateNumericHex(e, r) {
    const n = r;
    for (; r < e.length; ) {
      const t = e.charCodeAt(r);
      if (Eu(t) || Q0(t)) r += 1;
      else
        return (
          this.addToNumericResult(e, n, r, 16), this.emitNumericEntity(t, 3)
        );
    }
    return this.addToNumericResult(e, n, r, 16), -1;
  }
  stateNumericDecimal(e, r) {
    const n = r;
    for (; r < e.length; ) {
      const t = e.charCodeAt(r);
      if (Eu(t)) r += 1;
      else
        return (
          this.addToNumericResult(e, n, r, 10), this.emitNumericEntity(t, 2)
        );
    }
    return this.addToNumericResult(e, n, r, 10), -1;
  }
  emitNumericEntity(e, r) {
    var n;
    if (this.consumed <= r)
      return (
        (n = this.errors) === null ||
          n === void 0 ||
          n.absenceOfDigitsInNumericCharacterReference(this.consumed),
        0
      );
    if (e === z.SEMI) this.consumed += 1;
    else if (this.decodeMode === Z.Strict) return 0;
    return (
      this.emitCodePoint(W0(this.result), this.consumed),
      this.errors &&
        (e !== z.SEMI && this.errors.missingSemicolonAfterCharacterReference(),
        this.errors.validateNumericCharacterReference(this.result)),
      this.consumed
    );
  }
  stateNamedEntity(e, r) {
    const { decodeTree: n } = this;
    let t = n[this.treeIndex],
      c = (t & H.VALUE_LENGTH) >> 14;
    for (; r < e.length; r++, this.excess++) {
      const o = e.charCodeAt(r);
      if (
        ((this.treeIndex = ue(n, t, this.treeIndex + Math.max(1, c), o)),
        this.treeIndex < 0)
      )
        return this.result === 0 ||
          (this.decodeMode === Z.Attribute && (c === 0 || Y0(o)))
          ? 0
          : this.emitNotTerminatedNamedEntity();
      if (
        ((t = n[this.treeIndex]), (c = (t & H.VALUE_LENGTH) >> 14), c !== 0)
      ) {
        if (o === z.SEMI)
          return this.emitNamedEntityData(
            this.treeIndex,
            c,
            this.consumed + this.excess
          );
        this.decodeMode !== Z.Strict &&
          ((this.result = this.treeIndex),
          (this.consumed += this.excess),
          (this.excess = 0));
      }
    }
    return -1;
  }
  emitNotTerminatedNamedEntity() {
    var e;
    const { result: r, decodeTree: n } = this,
      t = (n[r] & H.VALUE_LENGTH) >> 14;
    return (
      this.emitNamedEntityData(r, t, this.consumed),
      (e = this.errors) === null ||
        e === void 0 ||
        e.missingSemicolonAfterCharacterReference(),
      this.consumed
    );
  }
  emitNamedEntityData(e, r, n) {
    const { decodeTree: t } = this;
    return (
      this.emitCodePoint(r === 1 ? t[e] & ~H.VALUE_LENGTH : t[e + 1], n),
      r === 3 && this.emitCodePoint(t[e + 2], n),
      n
    );
  }
  end() {
    var e;
    switch (this.state) {
      case B.NamedEntity:
        return this.result !== 0 &&
          (this.decodeMode !== Z.Attribute || this.result === this.treeIndex)
          ? this.emitNotTerminatedNamedEntity()
          : 0;
      case B.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case B.NumericHex:
        return this.emitNumericEntity(0, 3);
      case B.NumericStart:
        return (
          (e = this.errors) === null ||
            e === void 0 ||
            e.absenceOfDigitsInNumericCharacterReference(this.consumed),
          0
        );
      case B.EntityStart:
        return 0;
    }
  }
}
function t0(u) {
  let e = "";
  const r = new K0(u, (n) => (e += G0(n)));
  return function (t, c) {
    let o = 0,
      i = 0;
    for (; (i = t.indexOf("&", i)) >= 0; ) {
      (e += t.slice(o, i)), r.startEntity(c);
      const s = r.write(t, i + 1);
      if (s < 0) {
        o = i + r.end();
        break;
      }
      (o = i + s), (i = s === 0 ? o + 1 : o);
    }
    const a = e + t.slice(o);
    return (e = ""), a;
  };
}
function ue(u, e, r, n) {
  const t = (e & H.BRANCH_LENGTH) >> 7,
    c = e & H.JUMP_TABLE;
  if (t === 0) return c !== 0 && n === c ? r : -1;
  if (c) {
    const a = n - c;
    return a < 0 || a >= t ? -1 : u[r + a] - 1;
  }
  let o = r,
    i = o + t - 1;
  for (; o <= i; ) {
    const a = (o + i) >>> 1,
      s = u[a];
    if (s < n) o = a + 1;
    else if (s > n) i = a - 1;
    else return u[a + t];
  }
  return -1;
}
const ee = t0(Z0);
t0(H0);
function c0(u, e = Z.Legacy) {
  return ee(u, e);
}
function re(u) {
  return Object.prototype.toString.call(u);
}
function Tu(u) {
  return re(u) === "[object String]";
}
const ne = Object.prototype.hasOwnProperty;
function te(u, e) {
  return ne.call(u, e);
}
function lu(u) {
  return (
    Array.prototype.slice.call(arguments, 1).forEach(function (r) {
      if (r) {
        if (typeof r != "object") throw new TypeError(r + "must be object");
        Object.keys(r).forEach(function (n) {
          u[n] = r[n];
        });
      }
    }),
    u
  );
}
function i0(u, e, r) {
  return [].concat(u.slice(0, e), r, u.slice(e + 1));
}
function Bu(u) {
  return !(
    (u >= 55296 && u <= 57343) ||
    (u >= 64976 && u <= 65007) ||
    (u & 65535) === 65535 ||
    (u & 65535) === 65534 ||
    (u >= 0 && u <= 8) ||
    u === 11 ||
    (u >= 14 && u <= 31) ||
    (u >= 127 && u <= 159) ||
    u > 1114111
  );
}
function su(u) {
  if (u > 65535) {
    u -= 65536;
    const e = 55296 + (u >> 10),
      r = 56320 + (u & 1023);
    return String.fromCharCode(e, r);
  }
  return String.fromCharCode(u);
}
const o0 = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,
  ce = /&([a-z#][a-z0-9]{1,31});/gi,
  ie = new RegExp(o0.source + "|" + ce.source, "gi"),
  oe = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function ae(u, e) {
  if (e.charCodeAt(0) === 35 && oe.test(e)) {
    const n =
      e[1].toLowerCase() === "x"
        ? parseInt(e.slice(2), 16)
        : parseInt(e.slice(1), 10);
    return Bu(n) ? su(n) : u;
  }
  const r = c0(u);
  return r !== u ? r : u;
}
function se(u) {
  return u.indexOf("\\") < 0 ? u : u.replace(o0, "$1");
}
function Q(u) {
  return u.indexOf("\\") < 0 && u.indexOf("&") < 0
    ? u
    : u.replace(ie, function (e, r, n) {
        return r || ae(e, n);
      });
}
const fe = /[&<>"]/,
  le = /[&<>"]/g,
  de = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
function he(u) {
  return de[u];
}
function V(u) {
  return fe.test(u) ? u.replace(le, he) : u;
}
const be = /[.?*+^$[\]\\(){}|-]/g;
function pe(u) {
  return u.replace(be, "\\$&");
}
function w(u) {
  switch (u) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function K(u) {
  if (u >= 8192 && u <= 8202) return !0;
  switch (u) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function uu(u) {
  return Su.test(u) || r0.test(u);
}
function eu(u) {
  switch (u) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function du(u) {
  return (
    (u = u.trim().replace(/\s+/g, " ")),
    "ẞ".toLowerCase() === "Ṿ" && (u = u.replace(/ẞ/g, "ß")),
    u.toLowerCase().toUpperCase()
  );
}
const xe = { mdurl: j0, ucmicro: U0 },
  _e = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        arrayReplaceAt: i0,
        assign: lu,
        escapeHtml: V,
        escapeRE: pe,
        fromCodePoint: su,
        has: te,
        isMdAsciiPunct: eu,
        isPunctChar: uu,
        isSpace: w,
        isString: Tu,
        isValidEntityCode: Bu,
        isWhiteSpace: K,
        lib: xe,
        normalizeReference: du,
        unescapeAll: Q,
        unescapeMd: se,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function me(u, e, r) {
  let n, t, c, o;
  const i = u.posMax,
    a = u.pos;
  for (u.pos = e + 1, n = 1; u.pos < i; ) {
    if (((c = u.src.charCodeAt(u.pos)), c === 93 && (n--, n === 0))) {
      t = !0;
      break;
    }
    if (((o = u.pos), u.md.inline.skipToken(u), c === 91)) {
      if (o === u.pos - 1) n++;
      else if (r) return (u.pos = a), -1;
    }
  }
  let s = -1;
  return t && (s = u.pos), (u.pos = a), s;
}
function ke(u, e, r) {
  let n,
    t = e;
  const c = { ok: !1, pos: 0, str: "" };
  if (u.charCodeAt(t) === 60) {
    for (t++; t < r; ) {
      if (((n = u.charCodeAt(t)), n === 10 || n === 60)) return c;
      if (n === 62)
        return (c.pos = t + 1), (c.str = Q(u.slice(e + 1, t))), (c.ok = !0), c;
      if (n === 92 && t + 1 < r) {
        t += 2;
        continue;
      }
      t++;
    }
    return c;
  }
  let o = 0;
  for (
    ;
    t < r && ((n = u.charCodeAt(t)), !(n === 32 || n < 32 || n === 127));

  ) {
    if (n === 92 && t + 1 < r) {
      if (u.charCodeAt(t + 1) === 32) break;
      t += 2;
      continue;
    }
    if (n === 40 && (o++, o > 32)) return c;
    if (n === 41) {
      if (o === 0) break;
      o--;
    }
    t++;
  }
  return (
    e === t ||
      o !== 0 ||
      ((c.str = Q(u.slice(e, t))), (c.pos = t), (c.ok = !0)),
    c
  );
}
function ge(u, e, r, n) {
  let t,
    c = e;
  const o = { ok: !1, can_continue: !1, pos: 0, str: "", marker: 0 };
  if (n) (o.str = n.str), (o.marker = n.marker);
  else {
    if (c >= r) return o;
    let i = u.charCodeAt(c);
    if (i !== 34 && i !== 39 && i !== 40) return o;
    e++, c++, i === 40 && (i = 41), (o.marker = i);
  }
  for (; c < r; ) {
    if (((t = u.charCodeAt(c)), t === o.marker))
      return (o.pos = c + 1), (o.str += Q(u.slice(e, c))), (o.ok = !0), o;
    if (t === 40 && o.marker === 41) return o;
    t === 92 && c + 1 < r && c++, c++;
  }
  return (o.can_continue = !0), (o.str += Q(u.slice(e, c))), o;
}
const De = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        parseLinkDestination: ke,
        parseLinkLabel: me,
        parseLinkTitle: ge,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  j = {};
j.code_inline = function (u, e, r, n, t) {
  const c = u[e];
  return "<code" + t.renderAttrs(c) + ">" + V(c.content) + "</code>";
};
j.code_block = function (u, e, r, n, t) {
  const c = u[e];
  return (
    "<pre" +
    t.renderAttrs(c) +
    "><code>" +
    V(u[e].content) +
    `</code></pre>
`
  );
};
j.fence = function (u, e, r, n, t) {
  const c = u[e],
    o = c.info ? Q(c.info).trim() : "";
  let i = "",
    a = "";
  if (o) {
    const f = o.split(/(\s+)/g);
    (i = f[0]), (a = f.slice(2).join(""));
  }
  let s;
  if (
    (r.highlight
      ? (s = r.highlight(c.content, i, a) || V(c.content))
      : (s = V(c.content)),
    s.indexOf("<pre") === 0)
  )
    return (
      s +
      `
`
    );
  if (o) {
    const f = c.attrIndex("class"),
      d = c.attrs ? c.attrs.slice() : [];
    f < 0
      ? d.push(["class", r.langPrefix + i])
      : ((d[f] = d[f].slice()), (d[f][1] += " " + r.langPrefix + i));
    const b = { attrs: d };
    return `<pre><code${t.renderAttrs(b)}>${s}</code></pre>
`;
  }
  return `<pre><code${t.renderAttrs(c)}>${s}</code></pre>
`;
};
j.image = function (u, e, r, n, t) {
  const c = u[e];
  return (
    (c.attrs[c.attrIndex("alt")][1] = t.renderInlineAsText(c.children, r, n)),
    t.renderToken(u, e, r)
  );
};
j.hardbreak = function (u, e, r) {
  return r.xhtmlOut
    ? `<br />
`
    : `<br>
`;
};
j.softbreak = function (u, e, r) {
  return r.breaks
    ? r.xhtmlOut
      ? `<br />
`
      : `<br>
`
    : `
`;
};
j.text = function (u, e) {
  return V(u[e].content);
};
j.html_block = function (u, e) {
  return u[e].content;
};
j.html_inline = function (u, e) {
  return u[e].content;
};
function X() {
  this.rules = lu({}, j);
}
X.prototype.renderAttrs = function (e) {
  let r, n, t;
  if (!e.attrs) return "";
  for (t = "", r = 0, n = e.attrs.length; r < n; r++)
    t += " " + V(e.attrs[r][0]) + '="' + V(e.attrs[r][1]) + '"';
  return t;
};
X.prototype.renderToken = function (e, r, n) {
  const t = e[r];
  let c = "";
  if (t.hidden) return "";
  t.block &&
    t.nesting !== -1 &&
    r &&
    e[r - 1].hidden &&
    (c += `
`),
    (c += (t.nesting === -1 ? "</" : "<") + t.tag),
    (c += this.renderAttrs(t)),
    t.nesting === 0 && n.xhtmlOut && (c += " /");
  let o = !1;
  if (t.block && ((o = !0), t.nesting === 1 && r + 1 < e.length)) {
    const i = e[r + 1];
    (i.type === "inline" ||
      i.hidden ||
      (i.nesting === -1 && i.tag === t.tag)) &&
      (o = !1);
  }
  return (
    (c += o
      ? `>
`
      : ">"),
    c
  );
};
X.prototype.renderInline = function (u, e, r) {
  let n = "";
  const t = this.rules;
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u[c].type;
    typeof t[i] < "u"
      ? (n += t[i](u, c, e, r, this))
      : (n += this.renderToken(u, c, e));
  }
  return n;
};
X.prototype.renderInlineAsText = function (u, e, r) {
  let n = "";
  for (let t = 0, c = u.length; t < c; t++)
    switch (u[t].type) {
      case "text":
        n += u[t].content;
        break;
      case "image":
        n += this.renderInlineAsText(u[t].children, e, r);
        break;
      case "html_inline":
      case "html_block":
        n += u[t].content;
        break;
      case "softbreak":
      case "hardbreak":
        n += `
`;
        break;
    }
  return n;
};
X.prototype.render = function (u, e, r) {
  let n = "";
  const t = this.rules;
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u[c].type;
    i === "inline"
      ? (n += this.renderInline(u[c].children, e, r))
      : typeof t[i] < "u"
      ? (n += t[i](u, c, e, r, this))
      : (n += this.renderToken(u, c, e, r));
  }
  return n;
};
function M() {
  (this.__rules__ = []), (this.__cache__ = null);
}
M.prototype.__find__ = function (u) {
  for (let e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === u) return e;
  return -1;
};
M.prototype.__compile__ = function () {
  const u = this,
    e = [""];
  u.__rules__.forEach(function (r) {
    r.enabled &&
      r.alt.forEach(function (n) {
        e.indexOf(n) < 0 && e.push(n);
      });
  }),
    (u.__cache__ = {}),
    e.forEach(function (r) {
      (u.__cache__[r] = []),
        u.__rules__.forEach(function (n) {
          n.enabled &&
            ((r && n.alt.indexOf(r) < 0) || u.__cache__[r].push(n.fn));
        });
    });
};
M.prototype.at = function (u, e, r) {
  const n = this.__find__(u),
    t = r || {};
  if (n === -1) throw new Error("Parser rule not found: " + u);
  (this.__rules__[n].fn = e),
    (this.__rules__[n].alt = t.alt || []),
    (this.__cache__ = null);
};
M.prototype.before = function (u, e, r, n) {
  const t = this.__find__(u),
    c = n || {};
  if (t === -1) throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(t, 0, {
    name: e,
    enabled: !0,
    fn: r,
    alt: c.alt || [],
  }),
    (this.__cache__ = null);
};
M.prototype.after = function (u, e, r, n) {
  const t = this.__find__(u),
    c = n || {};
  if (t === -1) throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(t + 1, 0, {
    name: e,
    enabled: !0,
    fn: r,
    alt: c.alt || [],
  }),
    (this.__cache__ = null);
};
M.prototype.push = function (u, e, r) {
  const n = r || {};
  this.__rules__.push({ name: u, enabled: !0, fn: e, alt: n.alt || [] }),
    (this.__cache__ = null);
};
M.prototype.enable = function (u, e) {
  Array.isArray(u) || (u = [u]);
  const r = [];
  return (
    u.forEach(function (n) {
      const t = this.__find__(n);
      if (t < 0) {
        if (e) return;
        throw new Error("Rules manager: invalid rule name " + n);
      }
      (this.__rules__[t].enabled = !0), r.push(n);
    }, this),
    (this.__cache__ = null),
    r
  );
};
M.prototype.enableOnly = function (u, e) {
  Array.isArray(u) || (u = [u]),
    this.__rules__.forEach(function (r) {
      r.enabled = !1;
    }),
    this.enable(u, e);
};
M.prototype.disable = function (u, e) {
  Array.isArray(u) || (u = [u]);
  const r = [];
  return (
    u.forEach(function (n) {
      const t = this.__find__(n);
      if (t < 0) {
        if (e) return;
        throw new Error("Rules manager: invalid rule name " + n);
      }
      (this.__rules__[t].enabled = !1), r.push(n);
    }, this),
    (this.__cache__ = null),
    r
  );
};
M.prototype.getRules = function (u) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[u] || [];
};
function L(u, e, r) {
  (this.type = u),
    (this.tag = e),
    (this.attrs = null),
    (this.map = null),
    (this.nesting = r),
    (this.level = 0),
    (this.children = null),
    (this.content = ""),
    (this.markup = ""),
    (this.info = ""),
    (this.meta = null),
    (this.block = !1),
    (this.hidden = !1);
}
L.prototype.attrIndex = function (e) {
  if (!this.attrs) return -1;
  const r = this.attrs;
  for (let n = 0, t = r.length; n < t; n++) if (r[n][0] === e) return n;
  return -1;
};
L.prototype.attrPush = function (e) {
  this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
};
L.prototype.attrSet = function (e, r) {
  const n = this.attrIndex(e),
    t = [e, r];
  n < 0 ? this.attrPush(t) : (this.attrs[n] = t);
};
L.prototype.attrGet = function (e) {
  const r = this.attrIndex(e);
  let n = null;
  return r >= 0 && (n = this.attrs[r][1]), n;
};
L.prototype.attrJoin = function (e, r) {
  const n = this.attrIndex(e);
  n < 0
    ? this.attrPush([e, r])
    : (this.attrs[n][1] = this.attrs[n][1] + " " + r);
};
function a0(u, e, r) {
  (this.src = u),
    (this.env = r),
    (this.tokens = []),
    (this.inlineMode = !1),
    (this.md = e);
}
a0.prototype.Token = L;
const Ce = /\r\n?|\n/g,
  Ee = /\0/g;
function Ae(u) {
  let e;
  (e = u.src.replace(
    Ce,
    `
`
  )),
    (e = e.replace(Ee, "�")),
    (u.src = e);
}
function Fe(u) {
  let e;
  u.inlineMode
    ? ((e = new u.Token("inline", "", 0)),
      (e.content = u.src),
      (e.map = [0, 1]),
      (e.children = []),
      u.tokens.push(e))
    : u.md.block.parse(u.src, u.md, u.env, u.tokens);
}
function ye(u) {
  const e = u.tokens;
  for (let r = 0, n = e.length; r < n; r++) {
    const t = e[r];
    t.type === "inline" &&
      u.md.inline.parse(t.content, u.md, u.env, t.children);
  }
}
function we(u) {
  return /^<a[>\s]/i.test(u);
}
function ve(u) {
  return /^<\/a\s*>/i.test(u);
}
function Se(u) {
  const e = u.tokens;
  if (u.md.options.linkify)
    for (let r = 0, n = e.length; r < n; r++) {
      if (e[r].type !== "inline" || !u.md.linkify.pretest(e[r].content))
        continue;
      let t = e[r].children,
        c = 0;
      for (let o = t.length - 1; o >= 0; o--) {
        const i = t[o];
        if (i.type === "link_close") {
          for (o--; t[o].level !== i.level && t[o].type !== "link_open"; ) o--;
          continue;
        }
        if (
          (i.type === "html_inline" &&
            (we(i.content) && c > 0 && c--, ve(i.content) && c++),
          !(c > 0) && i.type === "text" && u.md.linkify.test(i.content))
        ) {
          const a = i.content;
          let s = u.md.linkify.match(a);
          const f = [];
          let d = i.level,
            b = 0;
          s.length > 0 &&
            s[0].index === 0 &&
            o > 0 &&
            t[o - 1].type === "text_special" &&
            (s = s.slice(1));
          for (let h = 0; h < s.length; h++) {
            const l = s[h].url,
              p = u.md.normalizeLink(l);
            if (!u.md.validateLink(p)) continue;
            let k = s[h].text;
            s[h].schema
              ? s[h].schema === "mailto:" && !/^mailto:/i.test(k)
                ? (k = u.md
                    .normalizeLinkText("mailto:" + k)
                    .replace(/^mailto:/, ""))
                : (k = u.md.normalizeLinkText(k))
              : (k = u.md
                  .normalizeLinkText("http://" + k)
                  .replace(/^http:\/\//, ""));
            const E = s[h].index;
            if (E > b) {
              const g = new u.Token("text", "", 0);
              (g.content = a.slice(b, E)), (g.level = d), f.push(g);
            }
            const x = new u.Token("link_open", "a", 1);
            (x.attrs = [["href", p]]),
              (x.level = d++),
              (x.markup = "linkify"),
              (x.info = "auto"),
              f.push(x);
            const m = new u.Token("text", "", 0);
            (m.content = k), (m.level = d), f.push(m);
            const _ = new u.Token("link_close", "a", -1);
            (_.level = --d),
              (_.markup = "linkify"),
              (_.info = "auto"),
              f.push(_),
              (b = s[h].lastIndex);
          }
          if (b < a.length) {
            const h = new u.Token("text", "", 0);
            (h.content = a.slice(b)), (h.level = d), f.push(h);
          }
          e[r].children = t = i0(t, o, f);
        }
      }
    }
}
const s0 = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
  Te = /\((c|tm|r)\)/i,
  Be = /\((c|tm|r)\)/gi,
  ze = { c: "©", r: "®", tm: "™" };
function Ie(u, e) {
  return ze[e.toLowerCase()];
}
function Me(u) {
  let e = 0;
  for (let r = u.length - 1; r >= 0; r--) {
    const n = u[r];
    n.type === "text" && !e && (n.content = n.content.replace(Be, Ie)),
      n.type === "link_open" && n.info === "auto" && e--,
      n.type === "link_close" && n.info === "auto" && e++;
  }
}
function Re(u) {
  let e = 0;
  for (let r = u.length - 1; r >= 0; r--) {
    const n = u[r];
    n.type === "text" &&
      !e &&
      s0.test(n.content) &&
      (n.content = n.content
        .replace(/\+-/g, "±")
        .replace(/\.{2,}/g, "…")
        .replace(/([?!])…/g, "$1..")
        .replace(/([?!]){4,}/g, "$1$1$1")
        .replace(/,{2,}/g, ",")
        .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—")
        .replace(/(^|\s)--(?=\s|$)/gm, "$1–")
        .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")),
      n.type === "link_open" && n.info === "auto" && e--,
      n.type === "link_close" && n.info === "auto" && e++;
  }
}
function qe(u) {
  let e;
  if (u.md.options.typographer)
    for (e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type === "inline" &&
        (Te.test(u.tokens[e].content) && Me(u.tokens[e].children),
        s0.test(u.tokens[e].content) && Re(u.tokens[e].children));
}
const Le = /['"]/,
  $u = /['"]/g,
  Uu = "’";
function iu(u, e, r) {
  return u.slice(0, e) + r + u.slice(e + 1);
}
function Pe(u, e) {
  let r;
  const n = [];
  for (let t = 0; t < u.length; t++) {
    const c = u[t],
      o = u[t].level;
    for (r = n.length - 1; r >= 0 && !(n[r].level <= o); r--);
    if (((n.length = r + 1), c.type !== "text")) continue;
    let i = c.content,
      a = 0,
      s = i.length;
    u: for (; a < s; ) {
      $u.lastIndex = a;
      const f = $u.exec(i);
      if (!f) break;
      let d = !0,
        b = !0;
      a = f.index + 1;
      const h = f[0] === "'";
      let l = 32;
      if (f.index - 1 >= 0) l = i.charCodeAt(f.index - 1);
      else
        for (
          r = t - 1;
          r >= 0 && !(u[r].type === "softbreak" || u[r].type === "hardbreak");
          r--
        )
          if (u[r].content) {
            l = u[r].content.charCodeAt(u[r].content.length - 1);
            break;
          }
      let p = 32;
      if (a < s) p = i.charCodeAt(a);
      else
        for (
          r = t + 1;
          r < u.length &&
          !(u[r].type === "softbreak" || u[r].type === "hardbreak");
          r++
        )
          if (u[r].content) {
            p = u[r].content.charCodeAt(0);
            break;
          }
      const k = eu(l) || uu(String.fromCharCode(l)),
        E = eu(p) || uu(String.fromCharCode(p)),
        x = K(l),
        m = K(p);
      if (
        (m ? (d = !1) : E && (x || k || (d = !1)),
        x ? (b = !1) : k && (m || E || (b = !1)),
        p === 34 && f[0] === '"' && l >= 48 && l <= 57 && (b = d = !1),
        d && b && ((d = k), (b = E)),
        !d && !b)
      ) {
        h && (c.content = iu(c.content, f.index, Uu));
        continue;
      }
      if (b)
        for (r = n.length - 1; r >= 0; r--) {
          let _ = n[r];
          if (n[r].level < o) break;
          if (_.single === h && n[r].level === o) {
            _ = n[r];
            let g, F;
            h
              ? ((g = e.md.options.quotes[2]), (F = e.md.options.quotes[3]))
              : ((g = e.md.options.quotes[0]), (F = e.md.options.quotes[1])),
              (c.content = iu(c.content, f.index, F)),
              (u[_.token].content = iu(u[_.token].content, _.pos, g)),
              (a += F.length - 1),
              _.token === t && (a += g.length - 1),
              (i = c.content),
              (s = i.length),
              (n.length = r);
            continue u;
          }
        }
      d
        ? n.push({ token: t, pos: f.index, single: h, level: o })
        : b && h && (c.content = iu(c.content, f.index, Uu));
    }
  }
}
function Oe(u) {
  if (u.md.options.typographer)
    for (let e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type !== "inline" ||
        !Le.test(u.tokens[e].content) ||
        Pe(u.tokens[e].children, u);
}
function Ne(u) {
  let e, r;
  const n = u.tokens,
    t = n.length;
  for (let c = 0; c < t; c++) {
    if (n[c].type !== "inline") continue;
    const o = n[c].children,
      i = o.length;
    for (e = 0; e < i; e++)
      o[e].type === "text_special" && (o[e].type = "text");
    for (e = r = 0; e < i; e++)
      o[e].type === "text" && e + 1 < i && o[e + 1].type === "text"
        ? (o[e + 1].content = o[e].content + o[e + 1].content)
        : (e !== r && (o[r] = o[e]), r++);
    e !== r && (o.length = r);
  }
}
const xu = [
  ["normalize", Ae],
  ["block", Fe],
  ["inline", ye],
  ["linkify", Se],
  ["replacements", qe],
  ["smartquotes", Oe],
  ["text_join", Ne],
];
function zu() {
  this.ruler = new M();
  for (let u = 0; u < xu.length; u++) this.ruler.push(xu[u][0], xu[u][1]);
}
zu.prototype.process = function (u) {
  const e = this.ruler.getRules("");
  for (let r = 0, n = e.length; r < n; r++) e[r](u);
};
zu.prototype.State = a0;
function $(u, e, r, n) {
  (this.src = u),
    (this.md = e),
    (this.env = r),
    (this.tokens = n),
    (this.bMarks = []),
    (this.eMarks = []),
    (this.tShift = []),
    (this.sCount = []),
    (this.bsCount = []),
    (this.blkIndent = 0),
    (this.line = 0),
    (this.lineMax = 0),
    (this.tight = !1),
    (this.ddIndent = -1),
    (this.listIndent = -1),
    (this.parentType = "root"),
    (this.level = 0);
  const t = this.src;
  for (let c = 0, o = 0, i = 0, a = 0, s = t.length, f = !1; o < s; o++) {
    const d = t.charCodeAt(o);
    if (!f)
      if (w(d)) {
        i++, d === 9 ? (a += 4 - (a % 4)) : a++;
        continue;
      } else f = !0;
    (d === 10 || o === s - 1) &&
      (d !== 10 && o++,
      this.bMarks.push(c),
      this.eMarks.push(o),
      this.tShift.push(i),
      this.sCount.push(a),
      this.bsCount.push(0),
      (f = !1),
      (i = 0),
      (a = 0),
      (c = o + 1));
  }
  this.bMarks.push(t.length),
    this.eMarks.push(t.length),
    this.tShift.push(0),
    this.sCount.push(0),
    this.bsCount.push(0),
    (this.lineMax = this.bMarks.length - 1);
}
$.prototype.push = function (u, e, r) {
  const n = new L(u, e, r);
  return (
    (n.block = !0),
    r < 0 && this.level--,
    (n.level = this.level),
    r > 0 && this.level++,
    this.tokens.push(n),
    n
  );
};
$.prototype.isEmpty = function (e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
$.prototype.skipEmptyLines = function (e) {
  for (
    let r = this.lineMax;
    e < r && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]);
    e++
  );
  return e;
};
$.prototype.skipSpaces = function (e) {
  for (let r = this.src.length; e < r; e++) {
    const n = this.src.charCodeAt(e);
    if (!w(n)) break;
  }
  return e;
};
$.prototype.skipSpacesBack = function (e, r) {
  if (e <= r) return e;
  for (; e > r; ) if (!w(this.src.charCodeAt(--e))) return e + 1;
  return e;
};
$.prototype.skipChars = function (e, r) {
  for (let n = this.src.length; e < n && this.src.charCodeAt(e) === r; e++);
  return e;
};
$.prototype.skipCharsBack = function (e, r, n) {
  if (e <= n) return e;
  for (; e > n; ) if (r !== this.src.charCodeAt(--e)) return e + 1;
  return e;
};
$.prototype.getLines = function (e, r, n, t) {
  if (e >= r) return "";
  const c = new Array(r - e);
  for (let o = 0, i = e; i < r; i++, o++) {
    let a = 0;
    const s = this.bMarks[i];
    let f = s,
      d;
    for (
      i + 1 < r || t ? (d = this.eMarks[i] + 1) : (d = this.eMarks[i]);
      f < d && a < n;

    ) {
      const b = this.src.charCodeAt(f);
      if (w(b)) b === 9 ? (a += 4 - ((a + this.bsCount[i]) % 4)) : a++;
      else if (f - s < this.tShift[i]) a++;
      else break;
      f++;
    }
    a > n
      ? (c[o] = new Array(a - n + 1).join(" ") + this.src.slice(f, d))
      : (c[o] = this.src.slice(f, d));
  }
  return c.join("");
};
$.prototype.Token = L;
const je = 65536;
function _u(u, e) {
  const r = u.bMarks[e] + u.tShift[e],
    n = u.eMarks[e];
  return u.src.slice(r, n);
}
function Zu(u) {
  const e = [],
    r = u.length;
  let n = 0,
    t = u.charCodeAt(n),
    c = !1,
    o = 0,
    i = "";
  for (; n < r; )
    t === 124 &&
      (c
        ? ((i += u.substring(o, n - 1)), (o = n))
        : (e.push(i + u.substring(o, n)), (i = ""), (o = n + 1))),
      (c = t === 92),
      n++,
      (t = u.charCodeAt(n));
  return e.push(i + u.substring(o)), e;
}
function $e(u, e, r, n) {
  if (e + 2 > r) return !1;
  let t = e + 1;
  if (u.sCount[t] < u.blkIndent || u.sCount[t] - u.blkIndent >= 4) return !1;
  let c = u.bMarks[t] + u.tShift[t];
  if (c >= u.eMarks[t]) return !1;
  const o = u.src.charCodeAt(c++);
  if ((o !== 124 && o !== 45 && o !== 58) || c >= u.eMarks[t]) return !1;
  const i = u.src.charCodeAt(c++);
  if ((i !== 124 && i !== 45 && i !== 58 && !w(i)) || (o === 45 && w(i)))
    return !1;
  for (; c < u.eMarks[t]; ) {
    const _ = u.src.charCodeAt(c);
    if (_ !== 124 && _ !== 45 && _ !== 58 && !w(_)) return !1;
    c++;
  }
  let a = _u(u, e + 1),
    s = a.split("|");
  const f = [];
  for (let _ = 0; _ < s.length; _++) {
    const g = s[_].trim();
    if (!g) {
      if (_ === 0 || _ === s.length - 1) continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(g)) return !1;
    g.charCodeAt(g.length - 1) === 58
      ? f.push(g.charCodeAt(0) === 58 ? "center" : "right")
      : g.charCodeAt(0) === 58
      ? f.push("left")
      : f.push("");
  }
  if (
    ((a = _u(u, e).trim()),
    a.indexOf("|") === -1 || u.sCount[e] - u.blkIndent >= 4)
  )
    return !1;
  (s = Zu(a)),
    s.length && s[0] === "" && s.shift(),
    s.length && s[s.length - 1] === "" && s.pop();
  const d = s.length;
  if (d === 0 || d !== f.length) return !1;
  if (n) return !0;
  const b = u.parentType;
  u.parentType = "table";
  const h = u.md.block.ruler.getRules("blockquote"),
    l = u.push("table_open", "table", 1),
    p = [e, 0];
  l.map = p;
  const k = u.push("thead_open", "thead", 1);
  k.map = [e, e + 1];
  const E = u.push("tr_open", "tr", 1);
  E.map = [e, e + 1];
  for (let _ = 0; _ < s.length; _++) {
    const g = u.push("th_open", "th", 1);
    f[_] && (g.attrs = [["style", "text-align:" + f[_]]]);
    const F = u.push("inline", "", 0);
    (F.content = s[_].trim()), (F.children = []), u.push("th_close", "th", -1);
  }
  u.push("tr_close", "tr", -1), u.push("thead_close", "thead", -1);
  let x,
    m = 0;
  for (t = e + 2; t < r && !(u.sCount[t] < u.blkIndent); t++) {
    let _ = !1;
    for (let F = 0, A = h.length; F < A; F++)
      if (h[F](u, t, r, !0)) {
        _ = !0;
        break;
      }
    if (
      _ ||
      ((a = _u(u, t).trim()), !a) ||
      u.sCount[t] - u.blkIndent >= 4 ||
      ((s = Zu(a)),
      s.length && s[0] === "" && s.shift(),
      s.length && s[s.length - 1] === "" && s.pop(),
      (m += d - s.length),
      m > je)
    )
      break;
    if (t === e + 2) {
      const F = u.push("tbody_open", "tbody", 1);
      F.map = x = [e + 2, 0];
    }
    const g = u.push("tr_open", "tr", 1);
    g.map = [t, t + 1];
    for (let F = 0; F < d; F++) {
      const A = u.push("td_open", "td", 1);
      f[F] && (A.attrs = [["style", "text-align:" + f[F]]]);
      const D = u.push("inline", "", 0);
      (D.content = s[F] ? s[F].trim() : ""),
        (D.children = []),
        u.push("td_close", "td", -1);
    }
    u.push("tr_close", "tr", -1);
  }
  return (
    x && (u.push("tbody_close", "tbody", -1), (x[1] = t)),
    u.push("table_close", "table", -1),
    (p[1] = t),
    (u.parentType = b),
    (u.line = t),
    !0
  );
}
function Ue(u, e, r) {
  if (u.sCount[e] - u.blkIndent < 4) return !1;
  let n = e + 1,
    t = n;
  for (; n < r; ) {
    if (u.isEmpty(n)) {
      n++;
      continue;
    }
    if (u.sCount[n] - u.blkIndent >= 4) {
      n++, (t = n);
      continue;
    }
    break;
  }
  u.line = t;
  const c = u.push("code_block", "code", 0);
  return (
    (c.content =
      u.getLines(e, t, 4 + u.blkIndent, !1) +
      `
`),
    (c.map = [e, u.line]),
    !0
  );
}
function Ze(u, e, r, n) {
  let t = u.bMarks[e] + u.tShift[e],
    c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4 || t + 3 > c) return !1;
  const o = u.src.charCodeAt(t);
  if (o !== 126 && o !== 96) return !1;
  let i = t;
  t = u.skipChars(t, o);
  let a = t - i;
  if (a < 3) return !1;
  const s = u.src.slice(i, t),
    f = u.src.slice(t, c);
  if (o === 96 && f.indexOf(String.fromCharCode(o)) >= 0) return !1;
  if (n) return !0;
  let d = e,
    b = !1;
  for (
    ;
    d++,
      !(
        d >= r ||
        ((t = i = u.bMarks[d] + u.tShift[d]),
        (c = u.eMarks[d]),
        t < c && u.sCount[d] < u.blkIndent)
      );

  )
    if (
      u.src.charCodeAt(t) === o &&
      !(u.sCount[d] - u.blkIndent >= 4) &&
      ((t = u.skipChars(t, o)),
      !(t - i < a) && ((t = u.skipSpaces(t)), !(t < c)))
    ) {
      b = !0;
      break;
    }
  (a = u.sCount[e]), (u.line = d + (b ? 1 : 0));
  const h = u.push("fence", "code", 0);
  return (
    (h.info = f),
    (h.content = u.getLines(e + 1, d, a, !0)),
    (h.markup = s),
    (h.map = [e, u.line]),
    !0
  );
}
function He(u, e, r, n) {
  let t = u.bMarks[e] + u.tShift[e],
    c = u.eMarks[e];
  const o = u.lineMax;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(t) !== 62) return !1;
  if (n) return !0;
  const i = [],
    a = [],
    s = [],
    f = [],
    d = u.md.block.ruler.getRules("blockquote"),
    b = u.parentType;
  u.parentType = "blockquote";
  let h = !1,
    l;
  for (l = e; l < r; l++) {
    const m = u.sCount[l] < u.blkIndent;
    if (((t = u.bMarks[l] + u.tShift[l]), (c = u.eMarks[l]), t >= c)) break;
    if (u.src.charCodeAt(t++) === 62 && !m) {
      let g = u.sCount[l] + 1,
        F,
        A;
      u.src.charCodeAt(t) === 32
        ? (t++, g++, (A = !1), (F = !0))
        : u.src.charCodeAt(t) === 9
        ? ((F = !0),
          (u.bsCount[l] + g) % 4 === 3 ? (t++, g++, (A = !1)) : (A = !0))
        : (F = !1);
      let D = g;
      for (i.push(u.bMarks[l]), u.bMarks[l] = t; t < c; ) {
        const C = u.src.charCodeAt(t);
        if (w(C))
          C === 9 ? (D += 4 - ((D + u.bsCount[l] + (A ? 1 : 0)) % 4)) : D++;
        else break;
        t++;
      }
      (h = t >= c),
        a.push(u.bsCount[l]),
        (u.bsCount[l] = u.sCount[l] + 1 + (F ? 1 : 0)),
        s.push(u.sCount[l]),
        (u.sCount[l] = D - g),
        f.push(u.tShift[l]),
        (u.tShift[l] = t - u.bMarks[l]);
      continue;
    }
    if (h) break;
    let _ = !1;
    for (let g = 0, F = d.length; g < F; g++)
      if (d[g](u, l, r, !0)) {
        _ = !0;
        break;
      }
    if (_) {
      (u.lineMax = l),
        u.blkIndent !== 0 &&
          (i.push(u.bMarks[l]),
          a.push(u.bsCount[l]),
          f.push(u.tShift[l]),
          s.push(u.sCount[l]),
          (u.sCount[l] -= u.blkIndent));
      break;
    }
    i.push(u.bMarks[l]),
      a.push(u.bsCount[l]),
      f.push(u.tShift[l]),
      s.push(u.sCount[l]),
      (u.sCount[l] = -1);
  }
  const p = u.blkIndent;
  u.blkIndent = 0;
  const k = u.push("blockquote_open", "blockquote", 1);
  k.markup = ">";
  const E = [e, 0];
  (k.map = E), u.md.block.tokenize(u, e, l);
  const x = u.push("blockquote_close", "blockquote", -1);
  (x.markup = ">"), (u.lineMax = o), (u.parentType = b), (E[1] = u.line);
  for (let m = 0; m < f.length; m++)
    (u.bMarks[m + e] = i[m]),
      (u.tShift[m + e] = f[m]),
      (u.sCount[m + e] = s[m]),
      (u.bsCount[m + e] = a[m]);
  return (u.blkIndent = p), !0;
}
function Ve(u, e, r, n) {
  const t = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4) return !1;
  let c = u.bMarks[e] + u.tShift[e];
  const o = u.src.charCodeAt(c++);
  if (o !== 42 && o !== 45 && o !== 95) return !1;
  let i = 1;
  for (; c < t; ) {
    const s = u.src.charCodeAt(c++);
    if (s !== o && !w(s)) return !1;
    s === o && i++;
  }
  if (i < 3) return !1;
  if (n) return !0;
  u.line = e + 1;
  const a = u.push("hr", "hr", 0);
  return (
    (a.map = [e, u.line]),
    (a.markup = Array(i + 1).join(String.fromCharCode(o))),
    !0
  );
}
function Hu(u, e) {
  const r = u.eMarks[e];
  let n = u.bMarks[e] + u.tShift[e];
  const t = u.src.charCodeAt(n++);
  if (t !== 42 && t !== 45 && t !== 43) return -1;
  if (n < r) {
    const c = u.src.charCodeAt(n);
    if (!w(c)) return -1;
  }
  return n;
}
function Vu(u, e) {
  const r = u.bMarks[e] + u.tShift[e],
    n = u.eMarks[e];
  let t = r;
  if (t + 1 >= n) return -1;
  let c = u.src.charCodeAt(t++);
  if (c < 48 || c > 57) return -1;
  for (;;) {
    if (t >= n) return -1;
    if (((c = u.src.charCodeAt(t++)), c >= 48 && c <= 57)) {
      if (t - r >= 10) return -1;
      continue;
    }
    if (c === 41 || c === 46) break;
    return -1;
  }
  return t < n && ((c = u.src.charCodeAt(t)), !w(c)) ? -1 : t;
}
function Ge(u, e) {
  const r = u.level + 2;
  for (let n = e + 2, t = u.tokens.length - 2; n < t; n++)
    u.tokens[n].level === r &&
      u.tokens[n].type === "paragraph_open" &&
      ((u.tokens[n + 2].hidden = !0), (u.tokens[n].hidden = !0), (n += 2));
}
function We(u, e, r, n) {
  let t,
    c,
    o,
    i,
    a = e,
    s = !0;
  if (
    u.sCount[a] - u.blkIndent >= 4 ||
    (u.listIndent >= 0 &&
      u.sCount[a] - u.listIndent >= 4 &&
      u.sCount[a] < u.blkIndent)
  )
    return !1;
  let f = !1;
  n && u.parentType === "paragraph" && u.sCount[a] >= u.blkIndent && (f = !0);
  let d, b, h;
  if ((h = Vu(u, a)) >= 0) {
    if (
      ((d = !0),
      (o = u.bMarks[a] + u.tShift[a]),
      (b = Number(u.src.slice(o, h - 1))),
      f && b !== 1)
    )
      return !1;
  } else if ((h = Hu(u, a)) >= 0) d = !1;
  else return !1;
  if (f && u.skipSpaces(h) >= u.eMarks[a]) return !1;
  if (n) return !0;
  const l = u.src.charCodeAt(h - 1),
    p = u.tokens.length;
  d
    ? ((i = u.push("ordered_list_open", "ol", 1)),
      b !== 1 && (i.attrs = [["start", b]]))
    : (i = u.push("bullet_list_open", "ul", 1));
  const k = [a, 0];
  (i.map = k), (i.markup = String.fromCharCode(l));
  let E = !1;
  const x = u.md.block.ruler.getRules("list"),
    m = u.parentType;
  for (u.parentType = "list"; a < r; ) {
    (c = h), (t = u.eMarks[a]);
    const _ = u.sCount[a] + h - (u.bMarks[a] + u.tShift[a]);
    let g = _;
    for (; c < t; ) {
      const P = u.src.charCodeAt(c);
      if (P === 9) g += 4 - ((g + u.bsCount[a]) % 4);
      else if (P === 32) g++;
      else break;
      c++;
    }
    const F = c;
    let A;
    F >= t ? (A = 1) : (A = g - _), A > 4 && (A = 1);
    const D = _ + A;
    (i = u.push("list_item_open", "li", 1)),
      (i.markup = String.fromCharCode(l));
    const C = [a, 0];
    (i.map = C), d && (i.info = u.src.slice(o, h - 1));
    const S = u.tight,
      I = u.tShift[a],
      v = u.sCount[a],
      y = u.listIndent;
    if (
      ((u.listIndent = u.blkIndent),
      (u.blkIndent = D),
      (u.tight = !0),
      (u.tShift[a] = F - u.bMarks[a]),
      (u.sCount[a] = g),
      F >= t && u.isEmpty(a + 1)
        ? (u.line = Math.min(u.line + 2, r))
        : u.md.block.tokenize(u, a, r, !0),
      (!u.tight || E) && (s = !1),
      (E = u.line - a > 1 && u.isEmpty(u.line - 1)),
      (u.blkIndent = u.listIndent),
      (u.listIndent = y),
      (u.tShift[a] = I),
      (u.sCount[a] = v),
      (u.tight = S),
      (i = u.push("list_item_close", "li", -1)),
      (i.markup = String.fromCharCode(l)),
      (a = u.line),
      (C[1] = a),
      a >= r || u.sCount[a] < u.blkIndent || u.sCount[a] - u.blkIndent >= 4)
    )
      break;
    let T = !1;
    for (let P = 0, Y = x.length; P < Y; P++)
      if (x[P](u, a, r, !0)) {
        T = !0;
        break;
      }
    if (T) break;
    if (d) {
      if (((h = Vu(u, a)), h < 0)) break;
      o = u.bMarks[a] + u.tShift[a];
    } else if (((h = Hu(u, a)), h < 0)) break;
    if (l !== u.src.charCodeAt(h - 1)) break;
  }
  return (
    d
      ? (i = u.push("ordered_list_close", "ol", -1))
      : (i = u.push("bullet_list_close", "ul", -1)),
    (i.markup = String.fromCharCode(l)),
    (k[1] = a),
    (u.line = a),
    (u.parentType = m),
    s && Ge(u, p),
    !0
  );
}
function Je(u, e, r, n) {
  let t = u.bMarks[e] + u.tShift[e],
    c = u.eMarks[e],
    o = e + 1;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(t) !== 91) return !1;
  function i(x) {
    const m = u.lineMax;
    if (x >= m || u.isEmpty(x)) return null;
    let _ = !1;
    if (
      (u.sCount[x] - u.blkIndent > 3 && (_ = !0),
      u.sCount[x] < 0 && (_ = !0),
      !_)
    ) {
      const A = u.md.block.ruler.getRules("reference"),
        D = u.parentType;
      u.parentType = "reference";
      let C = !1;
      for (let S = 0, I = A.length; S < I; S++)
        if (A[S](u, x, m, !0)) {
          C = !0;
          break;
        }
      if (((u.parentType = D), C)) return null;
    }
    const g = u.bMarks[x] + u.tShift[x],
      F = u.eMarks[x];
    return u.src.slice(g, F + 1);
  }
  let a = u.src.slice(t, c + 1);
  c = a.length;
  let s = -1;
  for (t = 1; t < c; t++) {
    const x = a.charCodeAt(t);
    if (x === 91) return !1;
    if (x === 93) {
      s = t;
      break;
    } else if (x === 10) {
      const m = i(o);
      m !== null && ((a += m), (c = a.length), o++);
    } else if (x === 92 && (t++, t < c && a.charCodeAt(t) === 10)) {
      const m = i(o);
      m !== null && ((a += m), (c = a.length), o++);
    }
  }
  if (s < 0 || a.charCodeAt(s + 1) !== 58) return !1;
  for (t = s + 2; t < c; t++) {
    const x = a.charCodeAt(t);
    if (x === 10) {
      const m = i(o);
      m !== null && ((a += m), (c = a.length), o++);
    } else if (!w(x)) break;
  }
  const f = u.md.helpers.parseLinkDestination(a, t, c);
  if (!f.ok) return !1;
  const d = u.md.normalizeLink(f.str);
  if (!u.md.validateLink(d)) return !1;
  t = f.pos;
  const b = t,
    h = o,
    l = t;
  for (; t < c; t++) {
    const x = a.charCodeAt(t);
    if (x === 10) {
      const m = i(o);
      m !== null && ((a += m), (c = a.length), o++);
    } else if (!w(x)) break;
  }
  let p = u.md.helpers.parseLinkTitle(a, t, c);
  for (; p.can_continue; ) {
    const x = i(o);
    if (x === null) break;
    (a += x),
      (t = c),
      (c = a.length),
      o++,
      (p = u.md.helpers.parseLinkTitle(a, t, c, p));
  }
  let k;
  for (
    t < c && l !== t && p.ok
      ? ((k = p.str), (t = p.pos))
      : ((k = ""), (t = b), (o = h));
    t < c;

  ) {
    const x = a.charCodeAt(t);
    if (!w(x)) break;
    t++;
  }
  if (t < c && a.charCodeAt(t) !== 10 && k)
    for (k = "", t = b, o = h; t < c; ) {
      const x = a.charCodeAt(t);
      if (!w(x)) break;
      t++;
    }
  if (t < c && a.charCodeAt(t) !== 10) return !1;
  const E = du(a.slice(1, s));
  return E
    ? (n ||
        (typeof u.env.references > "u" && (u.env.references = {}),
        typeof u.env.references[E] > "u" &&
          (u.env.references[E] = { title: k, href: d }),
        (u.line = o)),
      !0)
    : !1;
}
const Qe = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
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
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  Xe = "[a-zA-Z_:][a-zA-Z0-9:._-]*",
  Ye = "[^\"'=<>`\\x00-\\x20]+",
  Ke = "'[^']*'",
  ur = '"[^"]*"',
  er = "(?:" + Ye + "|" + Ke + "|" + ur + ")",
  rr = "(?:\\s+" + Xe + "(?:\\s*=\\s*" + er + ")?)",
  f0 = "<[A-Za-z][A-Za-z0-9\\-]*" + rr + "*\\s*\\/?>",
  l0 = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
  nr = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",
  tr = "<[?][\\s\\S]*?[?]>",
  cr = "<![A-Za-z][^>]*>",
  ir = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  or = new RegExp(
    "^(?:" + f0 + "|" + l0 + "|" + nr + "|" + tr + "|" + cr + "|" + ir + ")"
  ),
  ar = new RegExp("^(?:" + f0 + "|" + l0 + ")"),
  G = [
    [
      /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
      /<\/(script|pre|style|textarea)>/i,
      !0,
    ],
    [/^<!--/, /-->/, !0],
    [/^<\?/, /\?>/, !0],
    [/^<![A-Z]/, />/, !0],
    [/^<!\[CDATA\[/, /\]\]>/, !0],
    [new RegExp("^</?(" + Qe.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
    [new RegExp(ar.source + "\\s*$"), /^$/, !1],
  ];
function sr(u, e, r, n) {
  let t = u.bMarks[e] + u.tShift[e],
    c = u.eMarks[e];
  if (
    u.sCount[e] - u.blkIndent >= 4 ||
    !u.md.options.html ||
    u.src.charCodeAt(t) !== 60
  )
    return !1;
  let o = u.src.slice(t, c),
    i = 0;
  for (; i < G.length && !G[i][0].test(o); i++);
  if (i === G.length) return !1;
  if (n) return G[i][2];
  let a = e + 1;
  if (!G[i][1].test(o)) {
    for (; a < r && !(u.sCount[a] < u.blkIndent); a++)
      if (
        ((t = u.bMarks[a] + u.tShift[a]),
        (c = u.eMarks[a]),
        (o = u.src.slice(t, c)),
        G[i][1].test(o))
      ) {
        o.length !== 0 && a++;
        break;
      }
  }
  u.line = a;
  const s = u.push("html_block", "", 0);
  return (s.map = [e, a]), (s.content = u.getLines(e, a, u.blkIndent, !0)), !0;
}
function fr(u, e, r, n) {
  let t = u.bMarks[e] + u.tShift[e],
    c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4) return !1;
  let o = u.src.charCodeAt(t);
  if (o !== 35 || t >= c) return !1;
  let i = 1;
  for (o = u.src.charCodeAt(++t); o === 35 && t < c && i <= 6; )
    i++, (o = u.src.charCodeAt(++t));
  if (i > 6 || (t < c && !w(o))) return !1;
  if (n) return !0;
  c = u.skipSpacesBack(c, t);
  const a = u.skipCharsBack(c, 35, t);
  a > t && w(u.src.charCodeAt(a - 1)) && (c = a), (u.line = e + 1);
  const s = u.push("heading_open", "h" + String(i), 1);
  (s.markup = "########".slice(0, i)), (s.map = [e, u.line]);
  const f = u.push("inline", "", 0);
  (f.content = u.src.slice(t, c).trim()),
    (f.map = [e, u.line]),
    (f.children = []);
  const d = u.push("heading_close", "h" + String(i), -1);
  return (d.markup = "########".slice(0, i)), !0;
}
function lr(u, e, r) {
  const n = u.md.block.ruler.getRules("paragraph");
  if (u.sCount[e] - u.blkIndent >= 4) return !1;
  const t = u.parentType;
  u.parentType = "paragraph";
  let c = 0,
    o,
    i = e + 1;
  for (; i < r && !u.isEmpty(i); i++) {
    if (u.sCount[i] - u.blkIndent > 3) continue;
    if (u.sCount[i] >= u.blkIndent) {
      let h = u.bMarks[i] + u.tShift[i];
      const l = u.eMarks[i];
      if (
        h < l &&
        ((o = u.src.charCodeAt(h)),
        (o === 45 || o === 61) &&
          ((h = u.skipChars(h, o)), (h = u.skipSpaces(h)), h >= l))
      ) {
        c = o === 61 ? 1 : 2;
        break;
      }
    }
    if (u.sCount[i] < 0) continue;
    let b = !1;
    for (let h = 0, l = n.length; h < l; h++)
      if (n[h](u, i, r, !0)) {
        b = !0;
        break;
      }
    if (b) break;
  }
  if (!c) return !1;
  const a = u.getLines(e, i, u.blkIndent, !1).trim();
  u.line = i + 1;
  const s = u.push("heading_open", "h" + String(c), 1);
  (s.markup = String.fromCharCode(o)), (s.map = [e, u.line]);
  const f = u.push("inline", "", 0);
  (f.content = a), (f.map = [e, u.line - 1]), (f.children = []);
  const d = u.push("heading_close", "h" + String(c), -1);
  return (d.markup = String.fromCharCode(o)), (u.parentType = t), !0;
}
function dr(u, e, r) {
  const n = u.md.block.ruler.getRules("paragraph"),
    t = u.parentType;
  let c = e + 1;
  for (u.parentType = "paragraph"; c < r && !u.isEmpty(c); c++) {
    if (u.sCount[c] - u.blkIndent > 3 || u.sCount[c] < 0) continue;
    let s = !1;
    for (let f = 0, d = n.length; f < d; f++)
      if (n[f](u, c, r, !0)) {
        s = !0;
        break;
      }
    if (s) break;
  }
  const o = u.getLines(e, c, u.blkIndent, !1).trim();
  u.line = c;
  const i = u.push("paragraph_open", "p", 1);
  i.map = [e, u.line];
  const a = u.push("inline", "", 0);
  return (
    (a.content = o),
    (a.map = [e, u.line]),
    (a.children = []),
    u.push("paragraph_close", "p", -1),
    (u.parentType = t),
    !0
  );
}
const ou = [
  ["table", $e, ["paragraph", "reference"]],
  ["code", Ue],
  ["fence", Ze, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", He, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Ve, ["paragraph", "reference", "blockquote", "list"]],
  ["list", We, ["paragraph", "reference", "blockquote"]],
  ["reference", Je],
  ["html_block", sr, ["paragraph", "reference", "blockquote"]],
  ["heading", fr, ["paragraph", "reference", "blockquote"]],
  ["lheading", lr],
  ["paragraph", dr],
];
function hu() {
  this.ruler = new M();
  for (let u = 0; u < ou.length; u++)
    this.ruler.push(ou[u][0], ou[u][1], { alt: (ou[u][2] || []).slice() });
}
hu.prototype.tokenize = function (u, e, r) {
  const n = this.ruler.getRules(""),
    t = n.length,
    c = u.md.options.maxNesting;
  let o = e,
    i = !1;
  for (
    ;
    o < r &&
    ((u.line = o = u.skipEmptyLines(o)),
    !(o >= r || u.sCount[o] < u.blkIndent));

  ) {
    if (u.level >= c) {
      u.line = r;
      break;
    }
    const a = u.line;
    let s = !1;
    for (let f = 0; f < t; f++)
      if (((s = n[f](u, o, r, !1)), s)) {
        if (a >= u.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!s) throw new Error("none of the block rules matched");
    (u.tight = !i),
      u.isEmpty(u.line - 1) && (i = !0),
      (o = u.line),
      o < r && u.isEmpty(o) && ((i = !0), o++, (u.line = o));
  }
};
hu.prototype.parse = function (u, e, r, n) {
  if (!u) return;
  const t = new this.State(u, e, r, n);
  this.tokenize(t, t.line, t.lineMax);
};
hu.prototype.State = $;
function tu(u, e, r, n) {
  (this.src = u),
    (this.env = r),
    (this.md = e),
    (this.tokens = n),
    (this.tokens_meta = Array(n.length)),
    (this.pos = 0),
    (this.posMax = this.src.length),
    (this.level = 0),
    (this.pending = ""),
    (this.pendingLevel = 0),
    (this.cache = {}),
    (this.delimiters = []),
    (this._prev_delimiters = []),
    (this.backticks = {}),
    (this.backticksScanned = !1),
    (this.linkLevel = 0);
}
tu.prototype.pushPending = function () {
  const u = new L("text", "", 0);
  return (
    (u.content = this.pending),
    (u.level = this.pendingLevel),
    this.tokens.push(u),
    (this.pending = ""),
    u
  );
};
tu.prototype.push = function (u, e, r) {
  this.pending && this.pushPending();
  const n = new L(u, e, r);
  let t = null;
  return (
    r < 0 && (this.level--, (this.delimiters = this._prev_delimiters.pop())),
    (n.level = this.level),
    r > 0 &&
      (this.level++,
      this._prev_delimiters.push(this.delimiters),
      (this.delimiters = []),
      (t = { delimiters: this.delimiters })),
    (this.pendingLevel = this.level),
    this.tokens.push(n),
    this.tokens_meta.push(t),
    n
  );
};
tu.prototype.scanDelims = function (u, e) {
  const r = this.posMax,
    n = this.src.charCodeAt(u),
    t = u > 0 ? this.src.charCodeAt(u - 1) : 32;
  let c = u;
  for (; c < r && this.src.charCodeAt(c) === n; ) c++;
  const o = c - u,
    i = c < r ? this.src.charCodeAt(c) : 32,
    a = eu(t) || uu(String.fromCharCode(t)),
    s = eu(i) || uu(String.fromCharCode(i)),
    f = K(t),
    d = K(i),
    b = !d && (!s || f || a),
    h = !f && (!a || d || s);
  return {
    can_open: b && (e || !h || a),
    can_close: h && (e || !b || s),
    length: o,
  };
};
tu.prototype.Token = L;
function hr(u) {
  switch (u) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function br(u, e) {
  let r = u.pos;
  for (; r < u.posMax && !hr(u.src.charCodeAt(r)); ) r++;
  return r === u.pos
    ? !1
    : (e || (u.pending += u.src.slice(u.pos, r)), (u.pos = r), !0);
}
const pr = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function xr(u, e) {
  if (!u.md.options.linkify || u.linkLevel > 0) return !1;
  const r = u.pos,
    n = u.posMax;
  if (
    r + 3 > n ||
    u.src.charCodeAt(r) !== 58 ||
    u.src.charCodeAt(r + 1) !== 47 ||
    u.src.charCodeAt(r + 2) !== 47
  )
    return !1;
  const t = u.pending.match(pr);
  if (!t) return !1;
  const c = t[1],
    o = u.md.linkify.matchAtStart(u.src.slice(r - c.length));
  if (!o) return !1;
  let i = o.url;
  if (i.length <= c.length) return !1;
  i = i.replace(/\*+$/, "");
  const a = u.md.normalizeLink(i);
  if (!u.md.validateLink(a)) return !1;
  if (!e) {
    u.pending = u.pending.slice(0, -c.length);
    const s = u.push("link_open", "a", 1);
    (s.attrs = [["href", a]]), (s.markup = "linkify"), (s.info = "auto");
    const f = u.push("text", "", 0);
    f.content = u.md.normalizeLinkText(i);
    const d = u.push("link_close", "a", -1);
    (d.markup = "linkify"), (d.info = "auto");
  }
  return (u.pos += i.length - c.length), !0;
}
function _r(u, e) {
  let r = u.pos;
  if (u.src.charCodeAt(r) !== 10) return !1;
  const n = u.pending.length - 1,
    t = u.posMax;
  if (!e)
    if (n >= 0 && u.pending.charCodeAt(n) === 32)
      if (n >= 1 && u.pending.charCodeAt(n - 1) === 32) {
        let c = n - 1;
        for (; c >= 1 && u.pending.charCodeAt(c - 1) === 32; ) c--;
        (u.pending = u.pending.slice(0, c)), u.push("hardbreak", "br", 0);
      } else (u.pending = u.pending.slice(0, -1)), u.push("softbreak", "br", 0);
    else u.push("softbreak", "br", 0);
  for (r++; r < t && w(u.src.charCodeAt(r)); ) r++;
  return (u.pos = r), !0;
}
const Iu = [];
for (let u = 0; u < 256; u++) Iu.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (u) {
  Iu[u.charCodeAt(0)] = 1;
});
function mr(u, e) {
  let r = u.pos;
  const n = u.posMax;
  if (u.src.charCodeAt(r) !== 92 || (r++, r >= n)) return !1;
  let t = u.src.charCodeAt(r);
  if (t === 10) {
    for (
      e || u.push("hardbreak", "br", 0), r++;
      r < n && ((t = u.src.charCodeAt(r)), !!w(t));

    )
      r++;
    return (u.pos = r), !0;
  }
  let c = u.src[r];
  if (t >= 55296 && t <= 56319 && r + 1 < n) {
    const i = u.src.charCodeAt(r + 1);
    i >= 56320 && i <= 57343 && ((c += u.src[r + 1]), r++);
  }
  const o = "\\" + c;
  if (!e) {
    const i = u.push("text_special", "", 0);
    t < 256 && Iu[t] !== 0 ? (i.content = c) : (i.content = o),
      (i.markup = o),
      (i.info = "escape");
  }
  return (u.pos = r + 1), !0;
}
function kr(u, e) {
  let r = u.pos;
  if (u.src.charCodeAt(r) !== 96) return !1;
  const t = r;
  r++;
  const c = u.posMax;
  for (; r < c && u.src.charCodeAt(r) === 96; ) r++;
  const o = u.src.slice(t, r),
    i = o.length;
  if (u.backticksScanned && (u.backticks[i] || 0) <= t)
    return e || (u.pending += o), (u.pos += i), !0;
  let a = r,
    s;
  for (; (s = u.src.indexOf("`", a)) !== -1; ) {
    for (a = s + 1; a < c && u.src.charCodeAt(a) === 96; ) a++;
    const f = a - s;
    if (f === i) {
      if (!e) {
        const d = u.push("code_inline", "code", 0);
        (d.markup = o),
          (d.content = u.src
            .slice(r, s)
            .replace(/\n/g, " ")
            .replace(/^ (.+) $/, "$1"));
      }
      return (u.pos = a), !0;
    }
    u.backticks[f] = s;
  }
  return (u.backticksScanned = !0), e || (u.pending += o), (u.pos += i), !0;
}
function gr(u, e) {
  const r = u.pos,
    n = u.src.charCodeAt(r);
  if (e || n !== 126) return !1;
  const t = u.scanDelims(u.pos, !0);
  let c = t.length;
  const o = String.fromCharCode(n);
  if (c < 2) return !1;
  let i;
  c % 2 && ((i = u.push("text", "", 0)), (i.content = o), c--);
  for (let a = 0; a < c; a += 2)
    (i = u.push("text", "", 0)),
      (i.content = o + o),
      u.delimiters.push({
        marker: n,
        length: 0,
        token: u.tokens.length - 1,
        end: -1,
        open: t.can_open,
        close: t.can_close,
      });
  return (u.pos += t.length), !0;
}
function Gu(u, e) {
  let r;
  const n = [],
    t = e.length;
  for (let c = 0; c < t; c++) {
    const o = e[c];
    if (o.marker !== 126 || o.end === -1) continue;
    const i = e[o.end];
    (r = u.tokens[o.token]),
      (r.type = "s_open"),
      (r.tag = "s"),
      (r.nesting = 1),
      (r.markup = "~~"),
      (r.content = ""),
      (r = u.tokens[i.token]),
      (r.type = "s_close"),
      (r.tag = "s"),
      (r.nesting = -1),
      (r.markup = "~~"),
      (r.content = ""),
      u.tokens[i.token - 1].type === "text" &&
        u.tokens[i.token - 1].content === "~" &&
        n.push(i.token - 1);
  }
  for (; n.length; ) {
    const c = n.pop();
    let o = c + 1;
    for (; o < u.tokens.length && u.tokens[o].type === "s_close"; ) o++;
    o--,
      c !== o &&
        ((r = u.tokens[o]), (u.tokens[o] = u.tokens[c]), (u.tokens[c] = r));
  }
}
function Dr(u) {
  const e = u.tokens_meta,
    r = u.tokens_meta.length;
  Gu(u, u.delimiters);
  for (let n = 0; n < r; n++) e[n] && e[n].delimiters && Gu(u, e[n].delimiters);
}
const d0 = { tokenize: gr, postProcess: Dr };
function Cr(u, e) {
  const r = u.pos,
    n = u.src.charCodeAt(r);
  if (e || (n !== 95 && n !== 42)) return !1;
  const t = u.scanDelims(u.pos, n === 42);
  for (let c = 0; c < t.length; c++) {
    const o = u.push("text", "", 0);
    (o.content = String.fromCharCode(n)),
      u.delimiters.push({
        marker: n,
        length: t.length,
        token: u.tokens.length - 1,
        end: -1,
        open: t.can_open,
        close: t.can_close,
      });
  }
  return (u.pos += t.length), !0;
}
function Wu(u, e) {
  const r = e.length;
  for (let n = r - 1; n >= 0; n--) {
    const t = e[n];
    if ((t.marker !== 95 && t.marker !== 42) || t.end === -1) continue;
    const c = e[t.end],
      o =
        n > 0 &&
        e[n - 1].end === t.end + 1 &&
        e[n - 1].marker === t.marker &&
        e[n - 1].token === t.token - 1 &&
        e[t.end + 1].token === c.token + 1,
      i = String.fromCharCode(t.marker),
      a = u.tokens[t.token];
    (a.type = o ? "strong_open" : "em_open"),
      (a.tag = o ? "strong" : "em"),
      (a.nesting = 1),
      (a.markup = o ? i + i : i),
      (a.content = "");
    const s = u.tokens[c.token];
    (s.type = o ? "strong_close" : "em_close"),
      (s.tag = o ? "strong" : "em"),
      (s.nesting = -1),
      (s.markup = o ? i + i : i),
      (s.content = ""),
      o &&
        ((u.tokens[e[n - 1].token].content = ""),
        (u.tokens[e[t.end + 1].token].content = ""),
        n--);
  }
}
function Er(u) {
  const e = u.tokens_meta,
    r = u.tokens_meta.length;
  Wu(u, u.delimiters);
  for (let n = 0; n < r; n++) e[n] && e[n].delimiters && Wu(u, e[n].delimiters);
}
const h0 = { tokenize: Cr, postProcess: Er };
function Ar(u, e) {
  let r,
    n,
    t,
    c,
    o = "",
    i = "",
    a = u.pos,
    s = !0;
  if (u.src.charCodeAt(u.pos) !== 91) return !1;
  const f = u.pos,
    d = u.posMax,
    b = u.pos + 1,
    h = u.md.helpers.parseLinkLabel(u, u.pos, !0);
  if (h < 0) return !1;
  let l = h + 1;
  if (l < d && u.src.charCodeAt(l) === 40) {
    for (
      s = !1, l++;
      l < d && ((r = u.src.charCodeAt(l)), !(!w(r) && r !== 10));
      l++
    );
    if (l >= d) return !1;
    if (
      ((a = l),
      (t = u.md.helpers.parseLinkDestination(u.src, l, u.posMax)),
      t.ok)
    ) {
      for (
        o = u.md.normalizeLink(t.str),
          u.md.validateLink(o) ? (l = t.pos) : (o = ""),
          a = l;
        l < d && ((r = u.src.charCodeAt(l)), !(!w(r) && r !== 10));
        l++
      );
      if (
        ((t = u.md.helpers.parseLinkTitle(u.src, l, u.posMax)),
        l < d && a !== l && t.ok)
      )
        for (
          i = t.str, l = t.pos;
          l < d && ((r = u.src.charCodeAt(l)), !(!w(r) && r !== 10));
          l++
        );
    }
    (l >= d || u.src.charCodeAt(l) !== 41) && (s = !0), l++;
  }
  if (s) {
    if (typeof u.env.references > "u") return !1;
    if (
      (l < d && u.src.charCodeAt(l) === 91
        ? ((a = l + 1),
          (l = u.md.helpers.parseLinkLabel(u, l)),
          l >= 0 ? (n = u.src.slice(a, l++)) : (l = h + 1))
        : (l = h + 1),
      n || (n = u.src.slice(b, h)),
      (c = u.env.references[du(n)]),
      !c)
    )
      return (u.pos = f), !1;
    (o = c.href), (i = c.title);
  }
  if (!e) {
    (u.pos = b), (u.posMax = h);
    const p = u.push("link_open", "a", 1),
      k = [["href", o]];
    (p.attrs = k),
      i && k.push(["title", i]),
      u.linkLevel++,
      u.md.inline.tokenize(u),
      u.linkLevel--,
      u.push("link_close", "a", -1);
  }
  return (u.pos = l), (u.posMax = d), !0;
}
function Fr(u, e) {
  let r,
    n,
    t,
    c,
    o,
    i,
    a,
    s,
    f = "";
  const d = u.pos,
    b = u.posMax;
  if (u.src.charCodeAt(u.pos) !== 33 || u.src.charCodeAt(u.pos + 1) !== 91)
    return !1;
  const h = u.pos + 2,
    l = u.md.helpers.parseLinkLabel(u, u.pos + 1, !1);
  if (l < 0) return !1;
  if (((c = l + 1), c < b && u.src.charCodeAt(c) === 40)) {
    for (c++; c < b && ((r = u.src.charCodeAt(c)), !(!w(r) && r !== 10)); c++);
    if (c >= b) return !1;
    for (
      s = c,
        i = u.md.helpers.parseLinkDestination(u.src, c, u.posMax),
        i.ok &&
          ((f = u.md.normalizeLink(i.str)),
          u.md.validateLink(f) ? (c = i.pos) : (f = "")),
        s = c;
      c < b && ((r = u.src.charCodeAt(c)), !(!w(r) && r !== 10));
      c++
    );
    if (
      ((i = u.md.helpers.parseLinkTitle(u.src, c, u.posMax)),
      c < b && s !== c && i.ok)
    )
      for (
        a = i.str, c = i.pos;
        c < b && ((r = u.src.charCodeAt(c)), !(!w(r) && r !== 10));
        c++
      );
    else a = "";
    if (c >= b || u.src.charCodeAt(c) !== 41) return (u.pos = d), !1;
    c++;
  } else {
    if (typeof u.env.references > "u") return !1;
    if (
      (c < b && u.src.charCodeAt(c) === 91
        ? ((s = c + 1),
          (c = u.md.helpers.parseLinkLabel(u, c)),
          c >= 0 ? (t = u.src.slice(s, c++)) : (c = l + 1))
        : (c = l + 1),
      t || (t = u.src.slice(h, l)),
      (o = u.env.references[du(t)]),
      !o)
    )
      return (u.pos = d), !1;
    (f = o.href), (a = o.title);
  }
  if (!e) {
    n = u.src.slice(h, l);
    const p = [];
    u.md.inline.parse(n, u.md, u.env, p);
    const k = u.push("image", "img", 0),
      E = [
        ["src", f],
        ["alt", ""],
      ];
    (k.attrs = E), (k.children = p), (k.content = n), a && E.push(["title", a]);
  }
  return (u.pos = c), (u.posMax = b), !0;
}
const yr =
    /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
  wr = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function vr(u, e) {
  let r = u.pos;
  if (u.src.charCodeAt(r) !== 60) return !1;
  const n = u.pos,
    t = u.posMax;
  for (;;) {
    if (++r >= t) return !1;
    const o = u.src.charCodeAt(r);
    if (o === 60) return !1;
    if (o === 62) break;
  }
  const c = u.src.slice(n + 1, r);
  if (wr.test(c)) {
    const o = u.md.normalizeLink(c);
    if (!u.md.validateLink(o)) return !1;
    if (!e) {
      const i = u.push("link_open", "a", 1);
      (i.attrs = [["href", o]]), (i.markup = "autolink"), (i.info = "auto");
      const a = u.push("text", "", 0);
      a.content = u.md.normalizeLinkText(c);
      const s = u.push("link_close", "a", -1);
      (s.markup = "autolink"), (s.info = "auto");
    }
    return (u.pos += c.length + 2), !0;
  }
  if (yr.test(c)) {
    const o = u.md.normalizeLink("mailto:" + c);
    if (!u.md.validateLink(o)) return !1;
    if (!e) {
      const i = u.push("link_open", "a", 1);
      (i.attrs = [["href", o]]), (i.markup = "autolink"), (i.info = "auto");
      const a = u.push("text", "", 0);
      a.content = u.md.normalizeLinkText(c);
      const s = u.push("link_close", "a", -1);
      (s.markup = "autolink"), (s.info = "auto");
    }
    return (u.pos += c.length + 2), !0;
  }
  return !1;
}
function Sr(u) {
  return /^<a[>\s]/i.test(u);
}
function Tr(u) {
  return /^<\/a\s*>/i.test(u);
}
function Br(u) {
  const e = u | 32;
  return e >= 97 && e <= 122;
}
function zr(u, e) {
  if (!u.md.options.html) return !1;
  const r = u.posMax,
    n = u.pos;
  if (u.src.charCodeAt(n) !== 60 || n + 2 >= r) return !1;
  const t = u.src.charCodeAt(n + 1);
  if (t !== 33 && t !== 63 && t !== 47 && !Br(t)) return !1;
  const c = u.src.slice(n).match(or);
  if (!c) return !1;
  if (!e) {
    const o = u.push("html_inline", "", 0);
    (o.content = c[0]),
      Sr(o.content) && u.linkLevel++,
      Tr(o.content) && u.linkLevel--;
  }
  return (u.pos += c[0].length), !0;
}
const Ir = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
  Mr = /^&([a-z][a-z0-9]{1,31});/i;
function Rr(u, e) {
  const r = u.pos,
    n = u.posMax;
  if (u.src.charCodeAt(r) !== 38 || r + 1 >= n) return !1;
  if (u.src.charCodeAt(r + 1) === 35) {
    const c = u.src.slice(r).match(Ir);
    if (c) {
      if (!e) {
        const o =
            c[1][0].toLowerCase() === "x"
              ? parseInt(c[1].slice(1), 16)
              : parseInt(c[1], 10),
          i = u.push("text_special", "", 0);
        (i.content = Bu(o) ? su(o) : su(65533)),
          (i.markup = c[0]),
          (i.info = "entity");
      }
      return (u.pos += c[0].length), !0;
    }
  } else {
    const c = u.src.slice(r).match(Mr);
    if (c) {
      const o = c0(c[0]);
      if (o !== c[0]) {
        if (!e) {
          const i = u.push("text_special", "", 0);
          (i.content = o), (i.markup = c[0]), (i.info = "entity");
        }
        return (u.pos += c[0].length), !0;
      }
    }
  }
  return !1;
}
function Ju(u) {
  const e = {},
    r = u.length;
  if (!r) return;
  let n = 0,
    t = -2;
  const c = [];
  for (let o = 0; o < r; o++) {
    const i = u[o];
    if (
      (c.push(0),
      (u[n].marker !== i.marker || t !== i.token - 1) && (n = o),
      (t = i.token),
      (i.length = i.length || 0),
      !i.close)
    )
      continue;
    e.hasOwnProperty(i.marker) || (e[i.marker] = [-1, -1, -1, -1, -1, -1]);
    const a = e[i.marker][(i.open ? 3 : 0) + (i.length % 3)];
    let s = n - c[n] - 1,
      f = s;
    for (; s > a; s -= c[s] + 1) {
      const d = u[s];
      if (d.marker === i.marker && d.open && d.end < 0) {
        let b = !1;
        if (
          ((d.close || i.open) &&
            (d.length + i.length) % 3 === 0 &&
            (d.length % 3 !== 0 || i.length % 3 !== 0) &&
            (b = !0),
          !b)
        ) {
          const h = s > 0 && !u[s - 1].open ? c[s - 1] + 1 : 0;
          (c[o] = o - s + h),
            (c[s] = h),
            (i.open = !1),
            (d.end = o),
            (d.close = !1),
            (f = -1),
            (t = -2);
          break;
        }
      }
    }
    f !== -1 && (e[i.marker][(i.open ? 3 : 0) + ((i.length || 0) % 3)] = f);
  }
}
function qr(u) {
  const e = u.tokens_meta,
    r = u.tokens_meta.length;
  Ju(u.delimiters);
  for (let n = 0; n < r; n++) e[n] && e[n].delimiters && Ju(e[n].delimiters);
}
function Lr(u) {
  let e,
    r,
    n = 0;
  const t = u.tokens,
    c = u.tokens.length;
  for (e = r = 0; e < c; e++)
    t[e].nesting < 0 && n--,
      (t[e].level = n),
      t[e].nesting > 0 && n++,
      t[e].type === "text" && e + 1 < c && t[e + 1].type === "text"
        ? (t[e + 1].content = t[e].content + t[e + 1].content)
        : (e !== r && (t[r] = t[e]), r++);
  e !== r && (t.length = r);
}
const mu = [
    ["text", br],
    ["linkify", xr],
    ["newline", _r],
    ["escape", mr],
    ["backticks", kr],
    ["strikethrough", d0.tokenize],
    ["emphasis", h0.tokenize],
    ["link", Ar],
    ["image", Fr],
    ["autolink", vr],
    ["html_inline", zr],
    ["entity", Rr],
  ],
  ku = [
    ["balance_pairs", qr],
    ["strikethrough", d0.postProcess],
    ["emphasis", h0.postProcess],
    ["fragments_join", Lr],
  ];
function cu() {
  this.ruler = new M();
  for (let u = 0; u < mu.length; u++) this.ruler.push(mu[u][0], mu[u][1]);
  this.ruler2 = new M();
  for (let u = 0; u < ku.length; u++) this.ruler2.push(ku[u][0], ku[u][1]);
}
cu.prototype.skipToken = function (u) {
  const e = u.pos,
    r = this.ruler.getRules(""),
    n = r.length,
    t = u.md.options.maxNesting,
    c = u.cache;
  if (typeof c[e] < "u") {
    u.pos = c[e];
    return;
  }
  let o = !1;
  if (u.level < t) {
    for (let i = 0; i < n; i++)
      if ((u.level++, (o = r[i](u, !0)), u.level--, o)) {
        if (e >= u.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else u.pos = u.posMax;
  o || u.pos++, (c[e] = u.pos);
};
cu.prototype.tokenize = function (u) {
  const e = this.ruler.getRules(""),
    r = e.length,
    n = u.posMax,
    t = u.md.options.maxNesting;
  for (; u.pos < n; ) {
    const c = u.pos;
    let o = !1;
    if (u.level < t) {
      for (let i = 0; i < r; i++)
        if (((o = e[i](u, !1)), o)) {
          if (c >= u.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (o) {
      if (u.pos >= n) break;
      continue;
    }
    u.pending += u.src[u.pos++];
  }
  u.pending && u.pushPending();
};
cu.prototype.parse = function (u, e, r, n) {
  const t = new this.State(u, e, r, n);
  this.tokenize(t);
  const c = this.ruler2.getRules(""),
    o = c.length;
  for (let i = 0; i < o; i++) c[i](t);
};
cu.prototype.State = tu;
function Pr(u) {
  const e = {};
  (u = u || {}),
    (e.src_Any = u0.source),
    (e.src_Cc = e0.source),
    (e.src_Z = n0.source),
    (e.src_P = Su.source),
    (e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|")),
    (e.src_ZCc = [e.src_Z, e.src_Cc].join("|"));
  const r = "[><｜]";
  return (
    (e.src_pseudo_letter =
      "(?:(?!" + r + "|" + e.src_ZPCc + ")" + e.src_Any + ")"),
    (e.src_ip4 =
      "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"),
    (e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?"),
    (e.src_port =
      "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?"),
    (e.src_host_terminator =
      "(?=$|" +
      r +
      "|" +
      e.src_ZPCc +
      ")(?!" +
      (u["---"] ? "-(?!--)|" : "-|") +
      "_|:\\d|\\.-|\\.(?!$|" +
      e.src_ZPCc +
      "))"),
    (e.src_path =
      "(?:[/?#](?:(?!" +
      e.src_ZCc +
      "|" +
      r +
      `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` +
      e.src_ZCc +
      "|\\]).)*\\]|\\((?:(?!" +
      e.src_ZCc +
      "|[)]).)*\\)|\\{(?:(?!" +
      e.src_ZCc +
      '|[}]).)*\\}|\\"(?:(?!' +
      e.src_ZCc +
      `|["]).)+\\"|\\'(?:(?!` +
      e.src_ZCc +
      "|[']).)+\\'|\\'(?=" +
      e.src_pseudo_letter +
      "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" +
      e.src_ZCc +
      "|[.]|$)|" +
      (u["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") +
      ",(?!" +
      e.src_ZCc +
      "|$)|;(?!" +
      e.src_ZCc +
      "|$)|\\!+(?!" +
      e.src_ZCc +
      "|[!]|$)|\\?(?!" +
      e.src_ZCc +
      "|[?]|$))+|\\/)?"),
    (e.src_email_name =
      '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*'),
    (e.src_xn = "xn--[a-z0-9\\-]{1,59}"),
    (e.src_domain_root =
      "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})"),
    (e.src_domain =
      "(?:" +
      e.src_xn +
      "|(?:" +
      e.src_pseudo_letter +
      ")|(?:" +
      e.src_pseudo_letter +
      "(?:-|" +
      e.src_pseudo_letter +
      "){0,61}" +
      e.src_pseudo_letter +
      "))"),
    (e.src_host =
      "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))"),
    (e.tpl_host_fuzzy =
      "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))"),
    (e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))"),
    (e.src_host_strict = e.src_host + e.src_host_terminator),
    (e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator),
    (e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator),
    (e.tpl_host_port_fuzzy_strict =
      e.tpl_host_fuzzy + e.src_port + e.src_host_terminator),
    (e.tpl_host_port_no_ip_fuzzy_strict =
      e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator),
    (e.tpl_host_fuzzy_test =
      "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" +
      e.src_ZPCc +
      "|>|$))"),
    (e.tpl_email_fuzzy =
      "(^|" +
      r +
      '|"|\\(|' +
      e.src_ZCc +
      ")(" +
      e.src_email_name +
      "@" +
      e.tpl_host_fuzzy_strict +
      ")"),
    (e.tpl_link_fuzzy =
      "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" +
      e.src_ZPCc +
      "))((?![$+<=>^`|｜])" +
      e.tpl_host_port_fuzzy_strict +
      e.src_path +
      ")"),
    (e.tpl_link_no_ip_fuzzy =
      "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" +
      e.src_ZPCc +
      "))((?![$+<=>^`|｜])" +
      e.tpl_host_port_no_ip_fuzzy_strict +
      e.src_path +
      ")"),
    e
  );
}
function Au(u) {
  return (
    Array.prototype.slice.call(arguments, 1).forEach(function (r) {
      r &&
        Object.keys(r).forEach(function (n) {
          u[n] = r[n];
        });
    }),
    u
  );
}
function bu(u) {
  return Object.prototype.toString.call(u);
}
function Or(u) {
  return bu(u) === "[object String]";
}
function Nr(u) {
  return bu(u) === "[object Object]";
}
function jr(u) {
  return bu(u) === "[object RegExp]";
}
function Qu(u) {
  return bu(u) === "[object Function]";
}
function $r(u) {
  return u.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const b0 = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 };
function Ur(u) {
  return Object.keys(u || {}).reduce(function (e, r) {
    return e || b0.hasOwnProperty(r);
  }, !1);
}
const Zr = {
    "http:": {
      validate: function (u, e, r) {
        const n = u.slice(e);
        return (
          r.re.http ||
            (r.re.http = new RegExp(
              "^\\/\\/" +
                r.re.src_auth +
                r.re.src_host_port_strict +
                r.re.src_path,
              "i"
            )),
          r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
        );
      },
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function (u, e, r) {
        const n = u.slice(e);
        return (
          r.re.no_http ||
            (r.re.no_http = new RegExp(
              "^" +
                r.re.src_auth +
                "(?:localhost|(?:(?:" +
                r.re.src_domain +
                ")\\.)+" +
                r.re.src_domain_root +
                ")" +
                r.re.src_port +
                r.re.src_host_terminator +
                r.re.src_path,
              "i"
            )),
          r.re.no_http.test(n)
            ? (e >= 3 && u[e - 3] === ":") || (e >= 3 && u[e - 3] === "/")
              ? 0
              : n.match(r.re.no_http)[0].length
            : 0
        );
      },
    },
    "mailto:": {
      validate: function (u, e, r) {
        const n = u.slice(e);
        return (
          r.re.mailto ||
            (r.re.mailto = new RegExp(
              "^" + r.re.src_email_name + "@" + r.re.src_host_strict,
              "i"
            )),
          r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
        );
      },
    },
  },
  Hr =
    "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
  Vr =
    "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split(
      "|"
    );
function Gr(u) {
  (u.__index__ = -1), (u.__text_cache__ = "");
}
function Wr(u) {
  return function (e, r) {
    const n = e.slice(r);
    return u.test(n) ? n.match(u)[0].length : 0;
  };
}
function Xu() {
  return function (u, e) {
    e.normalize(u);
  };
}
function fu(u) {
  const e = (u.re = Pr(u.__opts__)),
    r = u.__tlds__.slice();
  u.onCompile(),
    u.__tlds_replaced__ || r.push(Hr),
    r.push(e.src_xn),
    (e.src_tlds = r.join("|"));
  function n(i) {
    return i.replace("%TLDS%", e.src_tlds);
  }
  (e.email_fuzzy = RegExp(n(e.tpl_email_fuzzy), "i")),
    (e.link_fuzzy = RegExp(n(e.tpl_link_fuzzy), "i")),
    (e.link_no_ip_fuzzy = RegExp(n(e.tpl_link_no_ip_fuzzy), "i")),
    (e.host_fuzzy_test = RegExp(n(e.tpl_host_fuzzy_test), "i"));
  const t = [];
  u.__compiled__ = {};
  function c(i, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + i + '": ' + a);
  }
  Object.keys(u.__schemas__).forEach(function (i) {
    const a = u.__schemas__[i];
    if (a === null) return;
    const s = { validate: null, link: null };
    if (((u.__compiled__[i] = s), Nr(a))) {
      jr(a.validate)
        ? (s.validate = Wr(a.validate))
        : Qu(a.validate)
        ? (s.validate = a.validate)
        : c(i, a),
        Qu(a.normalize)
          ? (s.normalize = a.normalize)
          : a.normalize
          ? c(i, a)
          : (s.normalize = Xu());
      return;
    }
    if (Or(a)) {
      t.push(i);
      return;
    }
    c(i, a);
  }),
    t.forEach(function (i) {
      u.__compiled__[u.__schemas__[i]] &&
        ((u.__compiled__[i].validate =
          u.__compiled__[u.__schemas__[i]].validate),
        (u.__compiled__[i].normalize =
          u.__compiled__[u.__schemas__[i]].normalize));
    }),
    (u.__compiled__[""] = { validate: null, normalize: Xu() });
  const o = Object.keys(u.__compiled__)
    .filter(function (i) {
      return i.length > 0 && u.__compiled__[i];
    })
    .map($r)
    .join("|");
  (u.re.schema_test = RegExp(
    "(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + o + ")",
    "i"
  )),
    (u.re.schema_search = RegExp(
      "(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + o + ")",
      "ig"
    )),
    (u.re.schema_at_start = RegExp("^" + u.re.schema_search.source, "i")),
    (u.re.pretest = RegExp(
      "(" +
        u.re.schema_test.source +
        ")|(" +
        u.re.host_fuzzy_test.source +
        ")|@",
      "i"
    )),
    Gr(u);
}
function Jr(u, e) {
  const r = u.__index__,
    n = u.__last_index__,
    t = u.__text_cache__.slice(r, n);
  (this.schema = u.__schema__.toLowerCase()),
    (this.index = r + e),
    (this.lastIndex = n + e),
    (this.raw = t),
    (this.text = t),
    (this.url = t);
}
function Fu(u, e) {
  const r = new Jr(u, e);
  return u.__compiled__[r.schema].normalize(r, u), r;
}
function R(u, e) {
  if (!(this instanceof R)) return new R(u, e);
  e || (Ur(u) && ((e = u), (u = {}))),
    (this.__opts__ = Au({}, b0, e)),
    (this.__index__ = -1),
    (this.__last_index__ = -1),
    (this.__schema__ = ""),
    (this.__text_cache__ = ""),
    (this.__schemas__ = Au({}, Zr, u)),
    (this.__compiled__ = {}),
    (this.__tlds__ = Vr),
    (this.__tlds_replaced__ = !1),
    (this.re = {}),
    fu(this);
}
R.prototype.add = function (e, r) {
  return (this.__schemas__[e] = r), fu(this), this;
};
R.prototype.set = function (e) {
  return (this.__opts__ = Au(this.__opts__, e)), this;
};
R.prototype.test = function (e) {
  if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length)) return !1;
  let r, n, t, c, o, i, a, s, f;
  if (this.re.schema_test.test(e)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (r = a.exec(e)) !== null; )
      if (((c = this.testSchemaAt(e, r[2], a.lastIndex)), c)) {
        (this.__schema__ = r[2]),
          (this.__index__ = r.index + r[1].length),
          (this.__last_index__ = r.index + r[0].length + c);
        break;
      }
  }
  return (
    this.__opts__.fuzzyLink &&
      this.__compiled__["http:"] &&
      ((s = e.search(this.re.host_fuzzy_test)),
      s >= 0 &&
        (this.__index__ < 0 || s < this.__index__) &&
        (n = e.match(
          this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy
        )) !== null &&
        ((o = n.index + n[1].length),
        (this.__index__ < 0 || o < this.__index__) &&
          ((this.__schema__ = ""),
          (this.__index__ = o),
          (this.__last_index__ = n.index + n[0].length)))),
    this.__opts__.fuzzyEmail &&
      this.__compiled__["mailto:"] &&
      ((f = e.indexOf("@")),
      f >= 0 &&
        (t = e.match(this.re.email_fuzzy)) !== null &&
        ((o = t.index + t[1].length),
        (i = t.index + t[0].length),
        (this.__index__ < 0 ||
          o < this.__index__ ||
          (o === this.__index__ && i > this.__last_index__)) &&
          ((this.__schema__ = "mailto:"),
          (this.__index__ = o),
          (this.__last_index__ = i)))),
    this.__index__ >= 0
  );
};
R.prototype.pretest = function (e) {
  return this.re.pretest.test(e);
};
R.prototype.testSchemaAt = function (e, r, n) {
  return this.__compiled__[r.toLowerCase()]
    ? this.__compiled__[r.toLowerCase()].validate(e, n, this)
    : 0;
};
R.prototype.match = function (e) {
  const r = [];
  let n = 0;
  this.__index__ >= 0 &&
    this.__text_cache__ === e &&
    (r.push(Fu(this, n)), (n = this.__last_index__));
  let t = n ? e.slice(n) : e;
  for (; this.test(t); )
    r.push(Fu(this, n)),
      (t = t.slice(this.__last_index__)),
      (n += this.__last_index__);
  return r.length ? r : null;
};
R.prototype.matchAtStart = function (e) {
  if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length))
    return null;
  const r = this.re.schema_at_start.exec(e);
  if (!r) return null;
  const n = this.testSchemaAt(e, r[2], r[0].length);
  return n
    ? ((this.__schema__ = r[2]),
      (this.__index__ = r.index + r[1].length),
      (this.__last_index__ = r.index + r[0].length + n),
      Fu(this, 0))
    : null;
};
R.prototype.tlds = function (e, r) {
  return (
    (e = Array.isArray(e) ? e : [e]),
    r
      ? ((this.__tlds__ = this.__tlds__
          .concat(e)
          .sort()
          .filter(function (n, t, c) {
            return n !== c[t - 1];
          })
          .reverse()),
        fu(this),
        this)
      : ((this.__tlds__ = e.slice()),
        (this.__tlds_replaced__ = !0),
        fu(this),
        this)
  );
};
R.prototype.normalize = function (e) {
  e.schema || (e.url = "http://" + e.url),
    e.schema === "mailto:" &&
      !/^mailto:/i.test(e.url) &&
      (e.url = "mailto:" + e.url);
};
R.prototype.onCompile = function () {};
const W = 2147483647,
  O = 36,
  Mu = 1,
  ru = 26,
  Qr = 38,
  Xr = 700,
  p0 = 72,
  x0 = 128,
  _0 = "-",
  Yr = /^xn--/,
  Kr = /[^\0-\x7F]/,
  un = /[\x2E\u3002\uFF0E\uFF61]/g,
  en = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input",
  },
  gu = O - Mu,
  N = Math.floor,
  Du = String.fromCharCode;
function U(u) {
  throw new RangeError(en[u]);
}
function rn(u, e) {
  const r = [];
  let n = u.length;
  for (; n--; ) r[n] = e(u[n]);
  return r;
}
function m0(u, e) {
  const r = u.split("@");
  let n = "";
  r.length > 1 && ((n = r[0] + "@"), (u = r[1])), (u = u.replace(un, "."));
  const t = u.split("."),
    c = rn(t, e).join(".");
  return n + c;
}
function k0(u) {
  const e = [];
  let r = 0;
  const n = u.length;
  for (; r < n; ) {
    const t = u.charCodeAt(r++);
    if (t >= 55296 && t <= 56319 && r < n) {
      const c = u.charCodeAt(r++);
      (c & 64512) == 56320
        ? e.push(((t & 1023) << 10) + (c & 1023) + 65536)
        : (e.push(t), r--);
    } else e.push(t);
  }
  return e;
}
const nn = (u) => String.fromCodePoint(...u),
  tn = function (u) {
    return u >= 48 && u < 58
      ? 26 + (u - 48)
      : u >= 65 && u < 91
      ? u - 65
      : u >= 97 && u < 123
      ? u - 97
      : O;
  },
  Yu = function (u, e) {
    return u + 22 + 75 * (u < 26) - ((e != 0) << 5);
  },
  g0 = function (u, e, r) {
    let n = 0;
    for (u = r ? N(u / Xr) : u >> 1, u += N(u / e); u > (gu * ru) >> 1; n += O)
      u = N(u / gu);
    return N(n + ((gu + 1) * u) / (u + Qr));
  },
  D0 = function (u) {
    const e = [],
      r = u.length;
    let n = 0,
      t = x0,
      c = p0,
      o = u.lastIndexOf(_0);
    o < 0 && (o = 0);
    for (let i = 0; i < o; ++i)
      u.charCodeAt(i) >= 128 && U("not-basic"), e.push(u.charCodeAt(i));
    for (let i = o > 0 ? o + 1 : 0; i < r; ) {
      const a = n;
      for (let f = 1, d = O; ; d += O) {
        i >= r && U("invalid-input");
        const b = tn(u.charCodeAt(i++));
        b >= O && U("invalid-input"),
          b > N((W - n) / f) && U("overflow"),
          (n += b * f);
        const h = d <= c ? Mu : d >= c + ru ? ru : d - c;
        if (b < h) break;
        const l = O - h;
        f > N(W / l) && U("overflow"), (f *= l);
      }
      const s = e.length + 1;
      (c = g0(n - a, s, a == 0)),
        N(n / s) > W - t && U("overflow"),
        (t += N(n / s)),
        (n %= s),
        e.splice(n++, 0, t);
    }
    return String.fromCodePoint(...e);
  },
  C0 = function (u) {
    const e = [];
    u = k0(u);
    const r = u.length;
    let n = x0,
      t = 0,
      c = p0;
    for (const a of u) a < 128 && e.push(Du(a));
    const o = e.length;
    let i = o;
    for (o && e.push(_0); i < r; ) {
      let a = W;
      for (const f of u) f >= n && f < a && (a = f);
      const s = i + 1;
      a - n > N((W - t) / s) && U("overflow"), (t += (a - n) * s), (n = a);
      for (const f of u)
        if ((f < n && ++t > W && U("overflow"), f === n)) {
          let d = t;
          for (let b = O; ; b += O) {
            const h = b <= c ? Mu : b >= c + ru ? ru : b - c;
            if (d < h) break;
            const l = d - h,
              p = O - h;
            e.push(Du(Yu(h + (l % p), 0))), (d = N(l / p));
          }
          e.push(Du(Yu(d, 0))), (c = g0(t, s, i === o)), (t = 0), ++i;
        }
      ++t, ++n;
    }
    return e.join("");
  },
  cn = function (u) {
    return m0(u, function (e) {
      return Yr.test(e) ? D0(e.slice(4).toLowerCase()) : e;
    });
  },
  on = function (u) {
    return m0(u, function (e) {
      return Kr.test(e) ? "xn--" + C0(e) : e;
    });
  },
  E0 = {
    version: "2.3.1",
    ucs2: { decode: k0, encode: nn },
    decode: D0,
    encode: C0,
    toASCII: on,
    toUnicode: cn,
  },
  an = {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 100,
    },
    components: { core: {}, block: {}, inline: {} },
  },
  sn = {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 20,
    },
    components: {
      core: { rules: ["normalize", "block", "inline", "text_join"] },
      block: { rules: ["paragraph"] },
      inline: { rules: ["text"], rules2: ["balance_pairs", "fragments_join"] },
    },
  },
  fn = {
    options: {
      html: !0,
      xhtmlOut: !0,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 20,
    },
    components: {
      core: { rules: ["normalize", "block", "inline", "text_join"] },
      block: {
        rules: [
          "blockquote",
          "code",
          "fence",
          "heading",
          "hr",
          "html_block",
          "lheading",
          "list",
          "reference",
          "paragraph",
        ],
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "html_inline",
          "image",
          "link",
          "newline",
          "text",
        ],
        rules2: ["balance_pairs", "emphasis", "fragments_join"],
      },
    },
  },
  ln = { default: an, zero: sn, commonmark: fn },
  dn = /^(vbscript|javascript|file|data):/,
  hn = /^data:image\/(gif|png|jpeg|webp);/;
function bn(u) {
  const e = u.trim().toLowerCase();
  return dn.test(e) ? hn.test(e) : !0;
}
const A0 = ["http:", "https:", "mailto:"];
function pn(u) {
  const e = vu(u, !0);
  if (e.hostname && (!e.protocol || A0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = E0.toASCII(e.hostname);
    } catch {}
  return nu(wu(e));
}
function xn(u) {
  const e = vu(u, !0);
  if (e.hostname && (!e.protocol || A0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = E0.toUnicode(e.hostname);
    } catch {}
  return J(wu(e), J.defaultChars + "%");
}
function q(u, e) {
  if (!(this instanceof q)) return new q(u, e);
  e || Tu(u) || ((e = u || {}), (u = "default")),
    (this.inline = new cu()),
    (this.block = new hu()),
    (this.core = new zu()),
    (this.renderer = new X()),
    (this.linkify = new R()),
    (this.validateLink = bn),
    (this.normalizeLink = pn),
    (this.normalizeLinkText = xn),
    (this.utils = _e),
    (this.helpers = lu({}, De)),
    (this.options = {}),
    this.configure(u),
    e && this.set(e);
}
q.prototype.set = function (u) {
  return lu(this.options, u), this;
};
q.prototype.configure = function (u) {
  const e = this;
  if (Tu(u)) {
    const r = u;
    if (((u = ln[r]), !u))
      throw new Error('Wrong `markdown-it` preset "' + r + '", check name');
  }
  if (!u) throw new Error("Wrong `markdown-it` preset, can't be empty");
  return (
    u.options && e.set(u.options),
    u.components &&
      Object.keys(u.components).forEach(function (r) {
        u.components[r].rules && e[r].ruler.enableOnly(u.components[r].rules),
          u.components[r].rules2 &&
            e[r].ruler2.enableOnly(u.components[r].rules2);
      }),
    this
  );
};
q.prototype.enable = function (u, e) {
  let r = [];
  Array.isArray(u) || (u = [u]),
    ["core", "block", "inline"].forEach(function (t) {
      r = r.concat(this[t].ruler.enable(u, !0));
    }, this),
    (r = r.concat(this.inline.ruler2.enable(u, !0)));
  const n = u.filter(function (t) {
    return r.indexOf(t) < 0;
  });
  if (n.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
  return this;
};
q.prototype.disable = function (u, e) {
  let r = [];
  Array.isArray(u) || (u = [u]),
    ["core", "block", "inline"].forEach(function (t) {
      r = r.concat(this[t].ruler.disable(u, !0));
    }, this),
    (r = r.concat(this.inline.ruler2.disable(u, !0)));
  const n = u.filter(function (t) {
    return r.indexOf(t) < 0;
  });
  if (n.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
  return this;
};
q.prototype.use = function (u) {
  const e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return u.apply(u, e), this;
};
q.prototype.parse = function (u, e) {
  if (typeof u != "string") throw new Error("Input data should be a String");
  const r = new this.core.State(u, this, e);
  return this.core.process(r), r.tokens;
};
q.prototype.render = function (u, e) {
  return (e = e || {}), this.renderer.render(this.parse(u, e), this.options, e);
};
q.prototype.parseInline = function (u, e) {
  const r = new this.core.State(u, this, e);
  return (r.inlineMode = !0), this.core.process(r), r.tokens;
};
q.prototype.renderInline = function (u, e) {
  return (
    (e = e || {}), this.renderer.render(this.parseInline(u, e), this.options, e)
  );
};
function _n(u, e) {
  var r,
    n,
    t = u.attrs[u.attrIndex("href")][1];
  for (r = 0; r < e.length; ++r) {
    if (((n = e[r]), typeof n.matcher == "function")) {
      if (n.matcher(t, n)) return n;
      continue;
    }
    return n;
  }
}
function mn(u, e, r) {
  Object.keys(r).forEach(function (n) {
    var t,
      c = r[n];
    n === "className" && (n = "class"),
      (t = e[u].attrIndex(n)),
      t < 0 ? e[u].attrPush([n, c]) : (e[u].attrs[t][1] = c);
  });
}
function F0(u, e) {
  e ? (e = Array.isArray(e) ? e : [e]) : (e = []), Object.freeze(e);
  var r = u.renderer.rules.link_open || this.defaultRender;
  u.renderer.rules.link_open = function (n, t, c, o, i) {
    var a = _n(n[t], e),
      s = a && a.attrs;
    return s && mn(t, n, s), r(n, t, c, o, i);
  };
}
F0.defaultRender = function (u, e, r, n, t) {
  return t.renderToken(u, e, r);
};
var kn = F0;
const Fn = yu(kn);
var gn = function (e, r) {
  var n = e.linkify,
    t = e.utils.escapeHtml,
    c = '<a\\s([^<>]*href="[^"<>]*"[^<>]*)\\s?>',
    o = RegExp(c, "i"),
    i = '<img\\s([^<>]*src="[^"<>]*"[^<>]*)\\s?\\/?>',
    a = RegExp(i, "i"),
    s = /^(?:https?:)?\/\//i,
    f = /^(?:https?:\/\/|ftp:\/\/|\/\/|mailto:|xmpp:)/i;
  r = r || {};
  var d = typeof r.removeUnknown < "u" ? r.removeUnknown : !1,
    b = typeof r.removeUnbalanced < "u" ? r.removeUnbalanced : !1,
    h = typeof r.imageClass < "u" ? r.imageClass : "",
    l = !1,
    p,
    k = [
      "a",
      "b",
      "blockquote",
      "code",
      "em",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "li",
      "ol",
      "p",
      "pre",
      "s",
      "sub",
      "sup",
      "strong",
      "ul",
    ],
    E = new Array(k.length),
    x = new Array(k.length);
  for (p = 0; p < k.length; p++) E[p] = 0;
  for (p = 0; p < k.length; p++) x[p] = !1;
  function m(A) {
    var D = n.match(A);
    return D &&
      D.length === 1 &&
      D[0].index === 0 &&
      D[0].lastIndex === A.length
      ? D[0].url
      : null;
  }
  function _(A) {
    return (
      (A = A.replace(/<[^<>]*>?/gi, function (D) {
        var C, S, I, v, y, T;
        return /(^<->|^<-\s|^<3\s)/.test(D)
          ? D
          : ((C = D.match(a)),
            C &&
            ((S = C[1]),
            (I = m(S.match(/src="([^"<>]*)"/i)[1])),
            (v = S.match(/alt="([^"<>]*)"/i)),
            (v = v && typeof v[1] < "u" ? v[1] : ""),
            (y = S.match(/title="([^"<>]*)"/i)),
            (y = y && typeof y[1] < "u" ? y[1] : ""),
            I && s.test(I))
              ? h !== ""
                ? '<img src="' +
                  I +
                  '" alt="' +
                  v +
                  '" title="' +
                  y +
                  '" class="' +
                  h +
                  '">'
                : '<img src="' + I + '" alt="' + v + '" title="' + y + '">'
              : ((T = k.indexOf("a")),
                (C = D.match(o)),
                C &&
                ((S = C[1]),
                (I = m(S.match(/href="([^"<>]*)"/i)[1])),
                (y = S.match(/title="([^"<>]*)"/i)),
                (y = y && typeof y[1] < "u" ? y[1] : ""),
                I && f.test(I))
                  ? ((l = !0),
                    (E[T] += 1),
                    '<a href="' + I + '" title="' + y + '" target="_blank">')
                  : ((C = /<\/a>/i.test(D)),
                    C
                      ? ((l = !0), (E[T] -= 1), E[T] < 0 && (x[T] = !0), "</a>")
                      : ((C = D.match(/<(br|hr)\s?\/?>/i)),
                        C
                          ? "<" + C[1].toLowerCase() + ">"
                          : ((C = D.match(
                              /<(\/?)(b|blockquote|code|em|h[1-6]|li|ol(?: start="\d+")?|p|pre|s|sub|sup|strong|ul)>/i
                            )),
                            C && !/<\/ol start="\d+"/i.test(D)
                              ? ((l = !0),
                                (T = k.indexOf(
                                  C[2].toLowerCase().split(" ")[0]
                                )),
                                C[1] === "/" ? (E[T] -= 1) : (E[T] += 1),
                                E[T] < 0 && (x[T] = !0),
                                "<" + C[1] + C[2].toLowerCase() + ">")
                              : d === !0
                              ? ""
                              : t(D))))));
      })),
      A
    );
  }
  function g(A) {
    var D, C, S;
    for (p = 0; p < k.length; p++) E[p] = 0;
    for (p = 0; p < k.length; p++) x[p] = !1;
    for (l = !1, C = 0; C < A.tokens.length; C++)
      if (
        (A.tokens[C].type === "html_block" &&
          (A.tokens[C].content = _(A.tokens[C].content)),
        A.tokens[C].type === "inline")
      )
        for (S = A.tokens[C].children, D = 0; D < S.length; D++)
          S[D].type === "html_inline" && (S[D].content = _(S[D].content));
  }
  function F(A) {
    if (l === !1) return;
    var D, C;
    function S(v, y) {
      var T, P;
      return (
        y === "a"
          ? (T = RegExp(
              '<a href="[^"<>]*" title="[^"<>]*" target="_blank">',
              "g"
            ))
          : y === "ol"
          ? (T = /<ol(?: start="\d+")?>/g)
          : (T = RegExp("<" + y + ">", "g")),
        (P = RegExp("</" + y + ">", "g")),
        b === !0
          ? ((v = v.replace(T, "")), (v = v.replace(P, "")))
          : ((v = v.replace(T, function (Y) {
              return t(Y);
            })),
            (v = v.replace(P, function (Y) {
              return t(Y);
            }))),
        v
      );
    }
    function I(v) {
      var y;
      for (y = 0; y < k.length; y++) x[y] === !0 && (v = S(v, k[y]));
      return v;
    }
    for (p = 0; p < k.length; p++) E[p] !== 0 && (x[p] = !0);
    for (D = 0; D < A.tokens.length; D++) {
      if (A.tokens[D].type === "html_block") {
        A.tokens[D].content = I(A.tokens[D].content);
        continue;
      }
      if (A.tokens[D].type === "inline")
        for (C = A.tokens[D].children, p = 0; p < C.length; p++)
          C[p].type === "html_inline" && (C[p].content = I(C[p].content));
    }
  }
  e.core.ruler.after("linkify", "sanitize_inline", g),
    e.core.ruler.after("sanitize_inline", "sanitize_balance", F);
};
const yn = yu(gn),
  Dn = /\\([ \\!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-])/g;
function Cn(u, e) {
  const r = u.posMax,
    n = u.pos;
  if (u.src.charCodeAt(n) !== 94 || e || n + 2 >= r) return !1;
  u.pos = n + 1;
  let t = !1;
  for (; u.pos < r; ) {
    if (u.src.charCodeAt(u.pos) === 94) {
      t = !0;
      break;
    }
    u.md.inline.skipToken(u);
  }
  if (!t || n + 1 === u.pos) return (u.pos = n), !1;
  const c = u.src.slice(n + 1, u.pos);
  if (c.match(/(^|[^\\])(\\\\)*\s/)) return (u.pos = n), !1;
  (u.posMax = u.pos), (u.pos = n + 1);
  const o = u.push("sup_open", "sup", 1);
  o.markup = "^";
  const i = u.push("text", "", 0);
  i.content = c.replace(Dn, "$1");
  const a = u.push("sup_close", "sup", -1);
  return (a.markup = "^"), (u.pos = u.posMax + 1), (u.posMax = r), !0;
}
function wn(u) {
  u.inline.ruler.after("emphasis", "sup", Cn);
}
export { q as M, yn as a, Fn as b, An as m, wn as s };
//# sourceMappingURL=index-vT9nPgOZ.js.map