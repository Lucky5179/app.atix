import {
  l as X,
  r as k,
  j as o,
  I as F,
  A as pn,
  _ as It,
  e as dn,
  k as hn,
  f as jt,
  o as mn,
  q as yn,
  t as ot,
  w as lt,
  x as fn,
  z as gn,
  C as vn,
  D as At,
  E as bn,
  F as xn,
  L as Tn,
  d as V,
  m as We,
  G as ut,
  O as Ge,
} from "./index-BcYJ6NjY.js";
import {
  M as wn,
  m as Sn,
  s as Cn,
  a as kn,
  b as En,
} from "./index-vT9nPgOZ.js";
import { M as In } from "./react-tooltip.min-D2YvRnFC.js";
const jn = [
  {
    inputs: [
      { internalType: "address", name: "_factory", type: "address" },
      { internalType: "address", name: "_WETH", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "amountADesired", type: "uint256" },
      { internalType: "uint256", name: "amountBDesired", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "addLiquidity",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amountTokenDesired", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "addLiquidityETH",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "reserveIn", type: "uint256" },
      { internalType: "uint256", name: "reserveOut", type: "uint256" },
    ],
    name: "getAmountIn",
    outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "reserveIn", type: "uint256" },
      { internalType: "uint256", name: "reserveOut", type: "uint256" },
    ],
    name: "getAmountOut",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
    ],
    name: "getAmountsIn",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
    ],
    name: "getAmountsOut",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "reserveA", type: "uint256" },
      { internalType: "uint256", name: "reserveB", type: "uint256" },
    ],
    name: "quote",
    outputs: [{ internalType: "uint256", name: "amountB", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidity",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidityETH",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidityETHSupportingFeeOnTransferTokens",
    outputs: [{ internalType: "uint256", name: "amountETH", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityETHWithPermit",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
    outputs: [{ internalType: "uint256", name: "amountETH", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityWithPermit",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapETHForExactTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactETHForTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForETH",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "amountInMax", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapTokensForExactETH",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "amountInMax", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];
var _ = {},
  An = Object.defineProperty,
  Mn = (e, t, n) =>
    t in e
      ? An(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  x = (e, t, n) => (Mn(e, typeof t != "symbol" ? t + "" : t, n), n),
  Mt = { exports: {} },
  le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ct;
function Pn() {
  if (ct) return le;
  ct = 1;
  var e = X,
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(p, l, c) {
    var u,
      d = {},
      v = null,
      m = null;
    c !== void 0 && (v = "" + c),
      l.key !== void 0 && (v = "" + l.key),
      l.ref !== void 0 && (m = l.ref);
    for (u in l) r.call(l, u) && !s.hasOwnProperty(u) && (d[u] = l[u]);
    if (p && p.defaultProps)
      for (u in ((l = p.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return {
      $$typeof: t,
      type: p,
      key: v,
      ref: m,
      props: d,
      _owner: a.current,
    };
  }
  return (le.Fragment = n), (le.jsx = i), (le.jsxs = i), le;
}
Mt.exports = Pn();
var z = Mt.exports,
  H = function () {
    return (
      (H =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var a in t)
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          }
          return e;
        }),
      H.apply(this, arguments)
    );
  };
function ke(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, s; r < a; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var I = "-ms-",
  ce = "-moz-",
  C = "-webkit-",
  Pt = "comm",
  je = "rule",
  Ze = "decl",
  Hn = "@import",
  Ht = "@keyframes",
  _n = "@layer",
  _t = Math.abs,
  et = String.fromCharCode,
  Ue = Object.assign;
function Rn(e, t) {
  return M(e, 0) ^ 45
    ? (((((((t << 2) ^ M(e, 0)) << 2) ^ M(e, 1)) << 2) ^ M(e, 2)) << 2) ^
        M(e, 3)
    : 0;
}
function Rt(e) {
  return e.trim();
}
function $(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function f(e, t, n) {
  return e.replace(t, n);
}
function xe(e, t, n) {
  return e.indexOf(t, n);
}
function M(e, t) {
  return e.charCodeAt(t) | 0;
}
function J(e, t, n) {
  return e.slice(t, n);
}
function O(e) {
  return e.length;
}
function Nt(e) {
  return e.length;
}
function ue(e, t) {
  return t.push(e), e;
}
function Nn(e, t) {
  return e.map(t).join("");
}
function pt(e, t) {
  return e.filter(function (n) {
    return !$(n, t);
  });
}
var Ae = 1,
  Z = 1,
  Ot = 0,
  R = 0,
  A = 0,
  re = "";
function Me(e, t, n, r, a, s, i, p) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: a,
    children: s,
    line: Ae,
    column: Z,
    length: i,
    return: "",
    siblings: p,
  };
}
function W(e, t) {
  return Ue(
    Me("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function K(e) {
  for (; e.root; ) e = W(e.root, { children: [e] });
  ue(e, e.siblings);
}
function On() {
  return A;
}
function Dn() {
  return (A = R > 0 ? M(re, --R) : 0), Z--, A === 10 && ((Z = 1), Ae--), A;
}
function N() {
  return (A = R < Ot ? M(re, R++) : 0), Z++, A === 10 && ((Z = 1), Ae++), A;
}
function Y() {
  return M(re, R);
}
function Te() {
  return R;
}
function Pe(e, t) {
  return J(re, e, t);
}
function Ye(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function $n(e) {
  return (Ae = Z = 1), (Ot = O((re = e))), (R = 0), [];
}
function Fn(e) {
  return (re = ""), e;
}
function $e(e) {
  return Rt(Pe(R - 1, qe(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ln(e) {
  for (; (A = Y()) && A < 33; ) N();
  return Ye(e) > 2 || Ye(A) > 3 ? "" : " ";
}
function Bn(e, t) {
  for (
    ;
    --t &&
    N() &&
    !(A < 48 || A > 102 || (A > 57 && A < 65) || (A > 70 && A < 97));

  );
  return Pe(e, Te() + (t < 6 && Y() == 32 && N() == 32));
}
function qe(e) {
  for (; N(); )
    switch (A) {
      case e:
        return R;
      case 34:
      case 39:
        e !== 34 && e !== 39 && qe(A);
        break;
      case 40:
        e === 41 && qe(e);
        break;
      case 92:
        N();
        break;
    }
  return R;
}
function zn(e, t) {
  for (; N() && e + A !== 57 && !(e + A === 84 && Y() === 47); );
  return "/*" + Pe(t, R - 1) + "*" + et(e === 47 ? e : N());
}
function Wn(e) {
  for (; !Ye(Y()); ) N();
  return Pe(e, R);
}
function Gn(e) {
  return Fn(we("", null, null, null, [""], (e = $n(e)), 0, [0], e));
}
function we(e, t, n, r, a, s, i, p, l) {
  for (
    var c = 0,
      u = 0,
      d = i,
      v = 0,
      m = 0,
      T = 0,
      w = 1,
      P = 1,
      j = 1,
      y = 0,
      g = "",
      b = a,
      E = s,
      S = r,
      h = g;
    P;

  )
    switch (((T = y), (y = N()))) {
      case 40:
        if (T != 108 && M(h, d - 1) == 58) {
          xe((h += f($e(y), "&", "&\f")), "&\f", _t(c ? p[c - 1] : 0)) != -1 &&
            (j = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        h += $e(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        h += Ln(T);
        break;
      case 92:
        h += Bn(Te() - 1, 7);
        continue;
      case 47:
        switch (Y()) {
          case 42:
          case 47:
            ue(Un(zn(N(), Te()), t, n, l), l);
            break;
          default:
            h += "/";
        }
        break;
      case 123 * w:
        p[c++] = O(h) * j;
      case 125 * w:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            P = 0;
          case 59 + u:
            j == -1 && (h = f(h, /\f/g, "")),
              m > 0 &&
                O(h) - d &&
                ue(
                  m > 32
                    ? ht(h + ";", r, n, d - 1, l)
                    : ht(f(h, " ", "") + ";", r, n, d - 2, l),
                  l
                );
            break;
          case 59:
            h += ";";
          default:
            if (
              (ue(
                (S = dt(h, t, n, c, u, a, p, g, (b = []), (E = []), d, s)),
                s
              ),
              y === 123)
            )
              if (u === 0) we(h, t, S, S, b, s, d, p, E);
              else
                switch (v === 99 && M(h, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    we(
                      e,
                      S,
                      S,
                      r && ue(dt(e, S, S, 0, 0, a, p, g, a, (b = []), d, E), E),
                      a,
                      E,
                      d,
                      p,
                      r ? b : E
                    );
                    break;
                  default:
                    we(h, S, S, S, [""], E, 0, p, E);
                }
        }
        (c = u = m = 0), (w = j = 1), (g = h = ""), (d = i);
        break;
      case 58:
        (d = 1 + O(h)), (m = T);
      default:
        if (w < 1) {
          if (y == 123) --w;
          else if (y == 125 && w++ == 0 && Dn() == 125) continue;
        }
        switch (((h += et(y)), y * w)) {
          case 38:
            j = u > 0 ? 1 : ((h += "\f"), -1);
            break;
          case 44:
            (p[c++] = (O(h) - 1) * j), (j = 1);
            break;
          case 64:
            Y() === 45 && (h += $e(N())),
              (v = Y()),
              (u = d = O((g = h += Wn(Te())))),
              y++;
            break;
          case 45:
            T === 45 && O(h) == 2 && (w = 0);
        }
    }
  return s;
}
function dt(e, t, n, r, a, s, i, p, l, c, u, d) {
  for (
    var v = a - 1, m = a === 0 ? s : [""], T = Nt(m), w = 0, P = 0, j = 0;
    w < r;
    ++w
  )
    for (var y = 0, g = J(e, v + 1, (v = _t((P = i[w])))), b = e; y < T; ++y)
      (b = Rt(P > 0 ? m[y] + " " + g : f(g, /&\f/g, m[y]))) && (l[j++] = b);
  return Me(e, t, n, a === 0 ? je : p, l, c, u, d);
}
function Un(e, t, n, r) {
  return Me(e, t, n, Pt, et(On()), J(e, 2, -2), 0, r);
}
function ht(e, t, n, r, a) {
  return Me(e, t, n, Ze, J(e, 0, r), J(e, r + 1, -1), r, a);
}
function Dt(e, t, n) {
  switch (Rn(e, t)) {
    case 5103:
      return C + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return C + e + e;
    case 4789:
      return ce + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return C + e + ce + e + I + e + e;
    case 5936:
      switch (M(e, t + 11)) {
        case 114:
          return C + e + I + f(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return C + e + I + f(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return C + e + I + f(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return C + e + I + e + e;
    case 6165:
      return C + e + I + "flex-" + e + e;
    case 5187:
      return (
        C + e + f(e, /(\w+).+(:[^]+)/, C + "box-$1$2" + I + "flex-$1$2") + e
      );
    case 5443:
      return (
        C +
        e +
        I +
        "flex-item-" +
        f(e, /flex-|-self/g, "") +
        ($(e, /flex-|baseline/)
          ? ""
          : I + "grid-row-" + f(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        C +
        e +
        I +
        "flex-line-pack" +
        f(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return C + e + I + f(e, "shrink", "negative") + e;
    case 5292:
      return C + e + I + f(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        C +
        "box-" +
        f(e, "-grow", "") +
        C +
        e +
        I +
        f(e, "grow", "positive") +
        e
      );
    case 4554:
      return C + f(e, /([^-])(transform)/g, "$1" + C + "$2") + e;
    case 6187:
      return (
        f(f(f(e, /(zoom-|grab)/, C + "$1"), /(image-set)/, C + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return f(e, /(image-set\([^]*)/, C + "$1$`$1");
    case 4968:
      return (
        f(
          f(e, /(.+:)(flex-)?(.*)/, C + "box-pack:$3" + I + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        C +
        e +
        e
      );
    case 4200:
      if (!$(e, /flex-|baseline/)) return I + "grid-column-align" + J(e, t) + e;
      break;
    case 2592:
    case 3360:
      return I + f(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, a) {
          return (t = a), $(r.props, /grid-\w+-end/);
        })
        ? ~xe(e + (n = n[t].value), "span", 0)
          ? e
          : I +
            f(e, "-start", "") +
            e +
            I +
            "grid-row-span:" +
            (~xe(n, "span", 0) ? $(n, /\d+/) : +$(n, /\d+/) - +$(e, /\d+/)) +
            ";"
        : I + f(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return $(r.props, /grid-\w+-start/);
        })
        ? e
        : I + f(f(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return f(e, /(.+)-inline(.+)/, C + "$1$2") + e;
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
      if (O(e) - 1 - t > 6)
        switch (M(e, t + 1)) {
          case 109:
            if (M(e, t + 4) !== 45) break;
          case 102:
            return (
              f(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  C +
                  "$2-$3$1" +
                  ce +
                  (M(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~xe(e, "stretch", 0)
              ? Dt(f(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return f(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, a, s, i, p, l, c) {
          return (
            I +
            a +
            ":" +
            s +
            c +
            (i ? I + a + "-span:" + (p ? l : +l - +s) + c : "") +
            e
          );
        }
      );
    case 4949:
      if (M(e, t + 6) === 121) return f(e, ":", ":" + C) + e;
      break;
    case 6444:
      switch (M(e, M(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            f(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                C +
                (M(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                C +
                "$2$3$1" +
                I +
                "$2box$3"
            ) + e
          );
        case 100:
          return f(e, ":", ":" + I) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return f(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ee(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Yn(e, t, n, r) {
  switch (e.type) {
    case _n:
      if (e.children.length) break;
    case Hn:
    case Ze:
      return (e.return = e.return || e.value);
    case Pt:
      return "";
    case Ht:
      return (e.return = e.value + "{" + Ee(e.children, r) + "}");
    case je:
      if (!O((e.value = e.props.join(",")))) return "";
  }
  return O((n = Ee(e.children, r))) ? (e.return = e.value + "{" + n + "}") : "";
}
function qn(e) {
  var t = Nt(e);
  return function (n, r, a, s) {
    for (var i = "", p = 0; p < t; p++) i += e[p](n, r, a, s) || "";
    return i;
  };
}
function Kn(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Vn(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ze:
        e.return = Dt(e.value, e.length, n);
        return;
      case Ht:
        return Ee([W(e, { value: f(e.value, "@", "@" + C) })], r);
      case je:
        if (e.length)
          return Nn((n = e.props), function (a) {
            switch ($(a, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                K(W(e, { props: [f(a, /:(read-\w+)/, ":" + ce + "$1")] })),
                  K(W(e, { props: [a] })),
                  Ue(e, { props: pt(n, r) });
                break;
              case "::placeholder":
                K(W(e, { props: [f(a, /:(plac\w+)/, ":" + C + "input-$1")] })),
                  K(W(e, { props: [f(a, /:(plac\w+)/, ":" + ce + "$1")] })),
                  K(W(e, { props: [f(a, /:(plac\w+)/, I + "input-$1")] })),
                  K(W(e, { props: [a] })),
                  Ue(e, { props: pt(n, r) });
                break;
            }
            return "";
          });
    }
}
var Qn = {
    animationIterationCount: 1,
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
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  ee =
    (typeof process < "u" &&
      _ !== void 0 &&
      (_.REACT_APP_SC_ATTR || _.SC_ATTR)) ||
    "data-styled",
  $t = "active",
  Ft = "data-styled-version",
  He = "6.1.8",
  tt = `/*!sc*/
`,
  nt = typeof window < "u" && "HTMLElement" in window,
  Xn = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      _ !== void 0 &&
      _.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      _.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? _.REACT_APP_SC_DISABLE_SPEEDY !== "false" && _.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      _ !== void 0 &&
      _.SC_DISABLE_SPEEDY !== void 0 &&
      _.SC_DISABLE_SPEEDY !== "" &&
      _.SC_DISABLE_SPEEDY !== "false" &&
      _.SC_DISABLE_SPEEDY),
  _e = Object.freeze([]),
  te = Object.freeze({});
function Jn(e, t, n) {
  return (
    n === void 0 && (n = te), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var Lt = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
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
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Zn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  er = /(^-|-$)/g;
function mt(e) {
  return e.replace(Zn, "-").replace(er, "");
}
var tr = /(a)(d)/gi,
  ve = 52,
  yt = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Ke(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > ve; t = (t / ve) | 0) n = yt(t % ve) + n;
  return (yt(t % ve) + n).replace(tr, "$1-$2");
}
var Fe,
  Bt = 5381,
  Q = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  zt = function (e) {
    return Q(Bt, e);
  };
function nr(e) {
  return Ke(zt(e) >>> 0);
}
function rr(e) {
  return e.displayName || e.name || "Component";
}
function Le(e) {
  return typeof e == "string" && !0;
}
var Wt = typeof Symbol == "function" && Symbol.for,
  Gt = Wt ? Symbol.for("react.memo") : 60115,
  ar = Wt ? Symbol.for("react.forward_ref") : 60112,
  sr = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  ir = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Ut = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  or =
    (((Fe = {})[ar] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Fe[Gt] = Ut),
    Fe);
function ft(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Gt
    ? Ut
    : "$$typeof" in e
    ? or[e.$$typeof]
    : sr;
  var t;
}
var lr = Object.defineProperty,
  ur = Object.getOwnPropertyNames,
  gt = Object.getOwnPropertySymbols,
  cr = Object.getOwnPropertyDescriptor,
  pr = Object.getPrototypeOf,
  vt = Object.prototype;
function Yt(e, t, n) {
  if (typeof t != "string") {
    if (vt) {
      var r = pr(t);
      r && r !== vt && Yt(e, r, n);
    }
    var a = ur(t);
    gt && (a = a.concat(gt(t)));
    for (var s = ft(e), i = ft(t), p = 0; p < a.length; ++p) {
      var l = a[p];
      if (!(l in ir || (n && n[l]) || (i && l in i) || (s && l in s))) {
        var c = cr(t, l);
        try {
          lr(e, l, c);
        } catch {}
      }
    }
  }
  return e;
}
function ne(e) {
  return typeof e == "function";
}
function rt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function U(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function bt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function pe(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Ve(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !pe(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Ve(e[r], t[r]);
  else if (pe(t)) for (var r in t) e[r] = Ve(e[r], t[r]);
  return e;
}
function at(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function de(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var dr = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, a = r.length, s = a; t >= s; )
            if ((s <<= 1) < 0) throw de(16, "".concat(t));
          (this.groupSizes = new Uint32Array(s)),
            this.groupSizes.set(r),
            (this.length = s);
          for (var i = a; i < s; i++) this.groupSizes[i] = 0;
        }
        for (
          var p = this.indexOfGroup(t + 1), l = ((i = 0), n.length);
          i < l;
          i++
        )
          this.tag.insertRule(p, n[i]) && (this.groupSizes[t]++, p++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            a = r + n;
          this.groupSizes[t] = 0;
          for (var s = r; s < a; s++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            a = this.indexOfGroup(t),
            s = a + r,
            i = a;
          i < s;
          i++
        )
          n += "".concat(this.tag.getRule(i)).concat(tt);
        return n;
      }),
      e
    );
  })(),
  Se = new Map(),
  Ie = new Map(),
  Ce = 1,
  be = function (e) {
    if (Se.has(e)) return Se.get(e);
    for (; Ie.has(Ce); ) Ce++;
    var t = Ce++;
    return Se.set(e, t), Ie.set(t, e), t;
  },
  hr = function (e, t) {
    (Ce = t + 1), Se.set(e, t), Ie.set(t, e);
  },
  mr = "style[".concat(ee, "][").concat(Ft, '="').concat(He, '"]'),
  yr = new RegExp(
    "^".concat(ee, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  fr = function (e, t, n) {
    for (var r, a = n.split(","), s = 0, i = a.length; s < i; s++)
      (r = a[s]) && e.registerName(t, r);
  },
  gr = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(tt),
        a = [],
        s = 0,
        i = r.length;
      s < i;
      s++
    ) {
      var p = r[s].trim();
      if (p) {
        var l = p.match(yr);
        if (l) {
          var c = 0 | parseInt(l[1], 10),
            u = l[2];
          c !== 0 && (hr(u, c), fr(e, u, l[3]), e.getTag().insertRules(c, a)),
            (a.length = 0);
        } else a.push(p);
      }
    }
  };
function vr() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var qt = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      a = (function (p) {
        var l = Array.from(p.querySelectorAll("style[".concat(ee, "]")));
        return l[l.length - 1];
      })(n),
      s = a !== void 0 ? a.nextSibling : null;
    r.setAttribute(ee, $t), r.setAttribute(Ft, He);
    var i = vr();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
  },
  br = (function () {
    function e(t) {
      (this.element = qt(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, a = 0, s = r.length; a < s; a++) {
            var i = r[a];
            if (i.ownerNode === n) return i;
          }
          throw de(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  xr = (function () {
    function e(t) {
      (this.element = qt(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  Tr = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  xt = nt,
  wr = { isServer: !nt, useCSSOMInjection: !Xn },
  Kt = (function () {
    function e(t, n, r) {
      t === void 0 && (t = te), n === void 0 && (n = {});
      var a = this;
      (this.options = H(H({}, wr), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          nt &&
          xt &&
          ((xt = !1),
          (function (s) {
            for (
              var i = document.querySelectorAll(mr), p = 0, l = i.length;
              p < l;
              p++
            ) {
              var c = i[p];
              c &&
                c.getAttribute(ee) !== $t &&
                (gr(s, c), c.parentNode && c.parentNode.removeChild(c));
            }
          })(this)),
        at(this, function () {
          return (function (s) {
            for (
              var i = s.getTag(),
                p = i.length,
                l = "",
                c = function (d) {
                  var v = (function (j) {
                    return Ie.get(j);
                  })(d);
                  if (v === void 0) return "continue";
                  var m = s.names.get(v),
                    T = i.getGroup(d);
                  if (m === void 0 || T.length === 0) return "continue";
                  var w = ""
                      .concat(ee, ".g")
                      .concat(d, '[id="')
                      .concat(v, '"]'),
                    P = "";
                  m !== void 0 &&
                    m.forEach(function (j) {
                      j.length > 0 && (P += "".concat(j, ","));
                    }),
                    (l += ""
                      .concat(T)
                      .concat(w, '{content:"')
                      .concat(P, '"}')
                      .concat(tt));
                },
                u = 0;
              u < p;
              u++
            )
              c(u);
            return l;
          })(a);
        });
    }
    return (
      (e.registerId = function (t) {
        return be(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(H(H({}, this.options), t), this.gs, (n && this.names) || void 0)
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                a = n.target;
              return n.isServer ? new Tr(a) : r ? new br(a) : new xr(a);
            })(this.options)),
            new dr(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((be(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(be(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(be(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  Sr = /&/g,
  Cr = /^\s*\/\/.*$/gm;
function Vt(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = Vt(n.children, t)),
      n
    );
  });
}
function kr(e) {
  var t,
    n,
    r,
    a = te,
    s = a.options,
    i = s === void 0 ? te : s,
    p = a.plugins,
    l = p === void 0 ? _e : p,
    c = function (v, m, T) {
      return T.startsWith(n) && T.endsWith(n) && T.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : v;
    },
    u = l.slice();
  u.push(function (v) {
    v.type === je &&
      v.value.includes("&") &&
      (v.props[0] = v.props[0].replace(Sr, n).replace(r, c));
  }),
    i.prefix && u.push(Vn),
    u.push(Yn);
  var d = function (v, m, T, w) {
    m === void 0 && (m = ""),
      T === void 0 && (T = ""),
      w === void 0 && (w = "&"),
      (t = w),
      (n = m),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var P = v.replace(Cr, ""),
      j = Gn(T || m ? "".concat(T, " ").concat(m, " { ").concat(P, " }") : P);
    i.namespace && (j = Vt(j, i.namespace));
    var y = [];
    return (
      Ee(
        j,
        qn(
          u.concat(
            Kn(function (g) {
              return y.push(g);
            })
          )
        )
      ),
      y
    );
  };
  return (
    (d.hash = l.length
      ? l
          .reduce(function (v, m) {
            return m.name || de(15), Q(v, m.name);
          }, Bt)
          .toString()
      : ""),
    d
  );
}
var Er = new Kt(),
  Qe = kr(),
  Qt = X.createContext({
    shouldForwardProp: void 0,
    styleSheet: Er,
    stylis: Qe,
  });
Qt.Consumer;
X.createContext(void 0);
function Tt() {
  return k.useContext(Qt);
}
var Ir = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (a, s) {
        s === void 0 && (s = Qe);
        var i = r.name + s.hash;
        a.hasNameForId(r.id, i) ||
          a.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        at(this, function () {
          throw de(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Qe), this.name + t.hash;
      }),
      e
    );
  })(),
  jr = function (e) {
    return e >= "A" && e <= "Z";
  };
function wt(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    jr(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Xt = function (e) {
    return e == null || e === !1 || e === "";
  },
  Jt = function (e) {
    var t,
      n,
      r = [];
    for (var a in e) {
      var s = e[a];
      e.hasOwnProperty(a) &&
        !Xt(s) &&
        ((Array.isArray(s) && s.isCss) || ne(s)
          ? r.push("".concat(wt(a), ":"), s, ";")
          : pe(s)
          ? r.push.apply(r, ke(ke(["".concat(a, " {")], Jt(s), !1), ["}"], !1))
          : r.push(
              ""
                .concat(wt(a), ": ")
                .concat(
                  ((t = a),
                  (n = s) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in Qn ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function q(e, t, n, r) {
  if (Xt(e)) return [];
  if (rt(e)) return [".".concat(e.styledComponentId)];
  if (ne(e)) {
    if (!ne((s = e)) || (s.prototype && s.prototype.isReactComponent) || !t)
      return [e];
    var a = e(t);
    return q(a, t, n, r);
  }
  var s;
  return e instanceof Ir
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : pe(e)
    ? Jt(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        _e,
        e.map(function (i) {
          return q(i, t, n, r);
        })
      )
    : [e.toString()];
}
function Ar(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ne(n) && !rt(n)) return !1;
  }
  return !0;
}
var Mr = zt(He),
  Pr = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && Ar(t)),
        (this.componentId = n),
        (this.baseHash = Q(Mr, n)),
        (this.baseStyle = r),
        Kt.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var a = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            a = U(a, this.staticRulesId);
          else {
            var s = bt(q(this.rules, t, n, r)),
              i = Ke(Q(this.baseHash, s) >>> 0);
            if (!n.hasNameForId(this.componentId, i)) {
              var p = r(s, ".".concat(i), void 0, this.componentId);
              n.insertRules(this.componentId, i, p);
            }
            (a = U(a, i)), (this.staticRulesId = i);
          }
        else {
          for (
            var l = Q(this.baseHash, r.hash), c = "", u = 0;
            u < this.rules.length;
            u++
          ) {
            var d = this.rules[u];
            if (typeof d == "string") c += d;
            else if (d) {
              var v = bt(q(d, t, n, r));
              (l = Q(l, v + u)), (c += v);
            }
          }
          if (c) {
            var m = Ke(l >>> 0);
            n.hasNameForId(this.componentId, m) ||
              n.insertRules(
                this.componentId,
                m,
                r(c, ".".concat(m), void 0, this.componentId)
              ),
              (a = U(a, m));
          }
        }
        return a;
      }),
      e
    );
  })(),
  Zt = X.createContext(void 0);
Zt.Consumer;
var Be = {};
function Hr(e, t, n) {
  var r = rt(e),
    a = e,
    s = !Le(e),
    i = t.attrs,
    p = i === void 0 ? _e : i,
    l = t.componentId,
    c =
      l === void 0
        ? (function (b, E) {
            var S = typeof b != "string" ? "sc" : mt(b);
            Be[S] = (Be[S] || 0) + 1;
            var h = "".concat(S, "-").concat(nr(He + S + Be[S]));
            return E ? "".concat(E, "-").concat(h) : h;
          })(t.displayName, t.parentComponentId)
        : l,
    u = t.displayName,
    d =
      u === void 0
        ? (function (b) {
            return Le(b) ? "styled.".concat(b) : "Styled(".concat(rr(b), ")");
          })(e)
        : u,
    v =
      t.displayName && t.componentId
        ? "".concat(mt(t.displayName), "-").concat(t.componentId)
        : t.componentId || c,
    m = r && a.attrs ? a.attrs.concat(p).filter(Boolean) : p,
    T = t.shouldForwardProp;
  if (r && a.shouldForwardProp) {
    var w = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var P = t.shouldForwardProp;
      T = function (b, E) {
        return w(b, E) && P(b, E);
      };
    } else T = w;
  }
  var j = new Pr(n, v, r ? a.componentStyle : void 0);
  function y(b, E) {
    return (function (S, h, ae) {
      var he = S.attrs,
        rn = S.componentStyle,
        an = S.defaultProps,
        sn = S.foldedComponentIds,
        on = S.styledComponentId,
        ln = S.target,
        un = X.useContext(Zt),
        cn = Tt(),
        Ne = S.shouldForwardProp || cn.shouldForwardProp,
        st = Jn(h, un, an) || te,
        D = (function (ye, ie, fe) {
          for (
            var oe, G = H(H({}, ie), { className: void 0, theme: fe }), De = 0;
            De < ye.length;
            De += 1
          ) {
            var ge = ne((oe = ye[De])) ? oe(G) : oe;
            for (var B in ge)
              G[B] =
                B === "className"
                  ? U(G[B], ge[B])
                  : B === "style"
                  ? H(H({}, G[B]), ge[B])
                  : ge[B];
          }
          return (
            ie.className && (G.className = U(G.className, ie.className)), G
          );
        })(he, h, st),
        me = D.as || ln,
        se = {};
      for (var L in D)
        D[L] === void 0 ||
          L[0] === "$" ||
          L === "as" ||
          (L === "theme" && D.theme === st) ||
          (L === "forwardedAs"
            ? (se.as = D.forwardedAs)
            : (Ne && !Ne(L, me)) || (se[L] = D[L]));
      var it = (function (ye, ie) {
          var fe = Tt(),
            oe = ye.generateAndInjectStyles(ie, fe.styleSheet, fe.stylis);
          return oe;
        })(rn, D),
        Oe = U(sn, on);
      return (
        it && (Oe += " " + it),
        D.className && (Oe += " " + D.className),
        (se[Le(me) && !Lt.has(me) ? "class" : "className"] = Oe),
        (se.ref = ae),
        k.createElement(me, se)
      );
    })(g, b, E);
  }
  y.displayName = d;
  var g = X.forwardRef(y);
  return (
    (g.attrs = m),
    (g.componentStyle = j),
    (g.displayName = d),
    (g.shouldForwardProp = T),
    (g.foldedComponentIds = r
      ? U(a.foldedComponentIds, a.styledComponentId)
      : ""),
    (g.styledComponentId = v),
    (g.target = r ? a.target : e),
    Object.defineProperty(g, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (b) {
        this._foldedDefaultProps = r
          ? (function (E) {
              for (var S = [], h = 1; h < arguments.length; h++)
                S[h - 1] = arguments[h];
              for (var ae = 0, he = S; ae < he.length; ae++) Ve(E, he[ae], !0);
              return E;
            })({}, a.defaultProps, b)
          : b;
      },
    }),
    at(g, function () {
      return ".".concat(g.styledComponentId);
    }),
    s &&
      Yt(g, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    g
  );
}
function St(e, t) {
  for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Ct = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function _r(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ne(e) || pe(e)) return Ct(q(St(_e, ke([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? q(r)
    : Ct(q(St(r, t)));
}
function Xe(e, t, n) {
  if ((n === void 0 && (n = te), !t)) throw de(1, t);
  var r = function (a) {
    for (var s = [], i = 1; i < arguments.length; i++) s[i - 1] = arguments[i];
    return e(t, n, _r.apply(void 0, ke([a], s, !1)));
  };
  return (
    (r.attrs = function (a) {
      return Xe(
        e,
        t,
        H(H({}, n), {
          attrs: Array.prototype.concat(n.attrs, a).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (a) {
      return Xe(e, t, H(H({}, n), a));
    }),
    r
  );
}
var en = function (e) {
    return Xe(Hr, e);
  },
  Re = en;
Lt.forEach(function (e) {
  Re[e] = en(e);
});
const Rr = (e, t) => {
    let n;
    function r() {
      clearTimeout(n);
    }
    function a() {
      r(),
        (n = setTimeout(() => {
          e();
        }, t));
    }
    return (a.cancel = r), a;
  },
  kt = (e, t, n) => (
    (t = !t && t !== 0 ? e : t),
    (n = !n && n !== 0 ? e : n),
    t > n
      ? (console.error("min limit is greater than max limit"), e)
      : e < t
      ? t
      : e > n
      ? n
      : e
  ),
  tn = (e, t) =>
    e.clientX > t.left &&
    e.clientX < t.right &&
    e.clientY > t.top &&
    e.clientY < t.top + t.height,
  Nr = (e, t) => {
    const n = t.getBoundingClientRect();
    return tn(e, n);
  },
  nn = Re.div`
  position: absolute;
  height: 100%;
  width: 6px;
  right: 3px;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.4s ease-out;
  padding: 6px 0;
  box-sizing: border-box;
  will-change: opacity;
  pointer-events: none;

  &.rcs-custom-scrollbar-rtl {
    right: auto;
    left: 3px;
  }

  &.scroll-visible {
    opacity: 1;
    transition-duration: 0.2s;
  }
`,
  Or = Re.div`
  height: calc(100% - 12px);
  margin-top: 6px;
  background-color: rgba(78, 183, 245, 0.7);
  border-radius: 3px;
`,
  Dr = Re.div`
  min-height: 0;
  min-width: 0;

  & .rcs-outer-container {
    overflow: hidden;

    & .rcs-positioning {
      position: relative;
    }
  }

  & .rcs-inner-container {
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 0;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.05) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      pointer-events: none;
      transition: height 0.1s ease-in;
      will-change: height;
    }

    &.rcs-content-scrolled:after {
      height: 5px;
      transition: height 0.15s ease-out;
    }
  }

  &.rcs-scroll-handle-dragged .rcs-inner-container {
    user-select: none;
  }

  &.rcs-scroll-handle-dragged ${nn} {
    opacity: 1;
  }

  & .rcs-custom-scroll-handle {
    position: absolute;
    width: 100%;
    top: 0;
  }
`;
class $r extends k.Component {
  constructor(t) {
    super(t),
      x(this, "scrollbarYWidth"),
      x(this, "hideScrollThumb"),
      x(this, "contentHeight", 0),
      x(this, "visibleHeight", 0),
      x(this, "scrollHandleHeight", 0),
      x(this, "scrollRatio", 1),
      x(this, "hasScroll", !1),
      x(this, "startDragHandlePos", 0),
      x(this, "startDragMousePos", 0),
      x(this, "customScrollRef", k.createRef()),
      x(this, "innerContainerRef", k.createRef()),
      x(this, "customScrollbarRef", k.createRef()),
      x(this, "scrollHandleRef", k.createRef()),
      x(this, "contentWrapperRef", k.createRef()),
      x(this, "adjustFreezePosition", (n) => {
        if (!this.contentWrapperRef.current) return;
        const r = this.getScrolledElement(),
          a = this.contentWrapperRef.current;
        this.props.freezePosition && (a.scrollTop = this.state.scrollPos),
          n.freezePosition && (r.scrollTop = this.state.scrollPos);
      }),
      x(this, "toggleScrollIfNeeded", () => {
        const n = this.contentHeight - this.visibleHeight > 1;
        this.hasScroll !== n && ((this.hasScroll = n), this.forceUpdate());
      }),
      x(this, "updateScrollPosition", (n) => {
        const r = this.getScrolledElement(),
          a = kt(n, 0, this.contentHeight - this.visibleHeight);
        (r.scrollTop = a), this.setState({ scrollPos: a });
      }),
      x(this, "onClick", (n) => {
        if (
          !this.hasScroll ||
          !this.isMouseEventOnCustomScrollbar(n) ||
          this.isMouseEventOnScrollHandle(n)
        )
          return;
        const r = this.calculateNewScrollHandleTop(n),
          a = this.getScrollValueFromHandlePosition(r);
        this.updateScrollPosition(a);
      }),
      x(this, "isMouseEventOnCustomScrollbar", (n) => {
        if (!this.customScrollbarRef.current) return !1;
        const r = this.customScrollRef.current.getBoundingClientRect(),
          a = this.customScrollbarRef.current.getBoundingClientRect(),
          s = this.props.rtl
            ? { left: r.left, right: a.right }
            : { left: a.left, width: r.right },
          i = { right: r.right, top: r.top, height: r.height, ...s };
        return tn(n, i);
      }),
      x(this, "isMouseEventOnScrollHandle", (n) => {
        if (!this.scrollHandleRef.current) return !1;
        const r = this.scrollHandleRef.current;
        return Nr(n, r);
      }),
      x(this, "calculateNewScrollHandleTop", (n) => {
        const r =
            this.customScrollRef.current.getBoundingClientRect().top +
            window.pageYOffset,
          a = n.pageY - r,
          s = this.getScrollHandleStyle().top;
        let i;
        return (
          a > s + this.scrollHandleHeight
            ? (i =
                s +
                Math.min(
                  this.scrollHandleHeight,
                  this.visibleHeight - this.scrollHandleHeight
                ))
            : (i = s - Math.max(this.scrollHandleHeight, 0)),
          i
        );
      }),
      x(this, "getScrollValueFromHandlePosition", (n) => n / this.scrollRatio),
      x(this, "getScrollHandleStyle", () => {
        const n = this.state.scrollPos * this.scrollRatio;
        return (
          (this.scrollHandleHeight = this.visibleHeight * this.scrollRatio),
          { height: this.scrollHandleHeight, top: n }
        );
      }),
      x(this, "adjustCustomScrollPosToContentPos", (n) => {
        this.setState({ scrollPos: n });
      }),
      x(this, "onScroll", (n) => {
        this.props.freezePosition ||
          (this.hideScrollThumb(),
          this.adjustCustomScrollPosToContentPos(n.currentTarget.scrollTop),
          this.props.onScroll && this.props.onScroll(n));
      }),
      x(this, "getScrolledElement", () => this.innerContainerRef.current),
      x(this, "onMouseDown", (n) => {
        !this.hasScroll ||
          !this.isMouseEventOnScrollHandle(n) ||
          ((this.startDragHandlePos = this.getScrollHandleStyle().top),
          (this.startDragMousePos = n.pageY),
          this.setState({ onDrag: !0 }),
          document.addEventListener("mousemove", this.onHandleDrag, {
            passive: !1,
          }),
          document.addEventListener("mouseup", this.onHandleDragEnd, {
            passive: !1,
          }));
      }),
      x(this, "onTouchStart", () => {
        this.setState({ onDrag: !0 });
      }),
      x(this, "onHandleDrag", (n) => {
        n.preventDefault();
        const r = n.pageY - this.startDragMousePos,
          a = kt(
            this.startDragHandlePos + r,
            0,
            this.visibleHeight - this.scrollHandleHeight
          ),
          s = this.getScrollValueFromHandlePosition(a);
        this.updateScrollPosition(s);
      }),
      x(this, "onHandleDragEnd", (n) => {
        this.setState({ onDrag: !1 }),
          n.preventDefault(),
          document.removeEventListener("mousemove", this.onHandleDrag),
          document.removeEventListener("mouseup", this.onHandleDragEnd);
      }),
      x(this, "getInnerContainerClasses", () =>
        this.state.scrollPos && this.props.addScrolledClass
          ? "rcs-inner-container rcs-content-scrolled"
          : "rcs-inner-container"
      ),
      x(this, "getScrollStyles", () => {
        const n = this.scrollbarYWidth || 20,
          r = this.props.rtl ? "marginLeft" : "marginRight",
          a = {
            height:
              this.props.heightRelativeToParent || this.props.flex
                ? "100%"
                : "",
            overscrollBehavior: this.props.allowOuterScroll ? "auto" : "none",
          };
        a[r] = -1 * n;
        const s = {
          height:
            this.props.heightRelativeToParent || this.props.flex ? "100%" : "",
          overflowY: this.props.freezePosition ? "hidden" : "visible",
        };
        return (
          (s[r] = this.scrollbarYWidth ? 0 : n),
          { innerContainer: a, contentWrapper: s }
        );
      }),
      x(this, "getOuterContainerStyle", () => ({
        height:
          this.props.heightRelativeToParent || this.props.flex ? "100%" : "",
      })),
      x(this, "getRootStyles", () => {
        const n = {};
        return (
          this.props.heightRelativeToParent
            ? (n.height = this.props.heightRelativeToParent)
            : this.props.flex && (n.flex = this.props.flex),
          n
        );
      }),
      x(this, "enforceMinHandleHeight", (n) => {
        const r = this.props.minScrollHandleHeight || 38;
        if (n.height >= r) return n;
        const a = r - n.height,
          s = this.state.scrollPos / (this.contentHeight - this.visibleHeight),
          i = a * s,
          p = n.top - i;
        return { height: r, top: p };
      }),
      x(this, "onMouseEnter", () => {
        this.setState({ visible: !0 });
      }),
      x(this, "onMouseLeave", () => {
        this.setState({ visible: !1 });
      }),
      (this.scrollbarYWidth = 0),
      (this.state = { scrollPos: 0, onDrag: !1, visible: !1 }),
      (this.hideScrollThumb = Rr(() => {
        this.setState({ onDrag: !1 });
      }, 500));
  }
  componentDidMount() {
    typeof this.props.scrollTo < "u"
      ? this.updateScrollPosition(this.props.scrollTo)
      : this.forceUpdate();
  }
  componentDidUpdate(t, n) {
    const r = this.contentHeight,
      a = this.visibleHeight,
      s = this.getScrolledElement(),
      i = n.scrollPos >= r - a;
    (this.contentHeight = s.scrollHeight),
      (this.scrollbarYWidth = s.offsetWidth - s.clientWidth),
      (this.visibleHeight = s.clientHeight),
      (this.scrollRatio = this.contentHeight
        ? this.visibleHeight / this.contentHeight
        : 1),
      this.toggleScrollIfNeeded();
    const p = this.state === n;
    (this.props.freezePosition || t.freezePosition) &&
      this.adjustFreezePosition(t),
      typeof this.props.scrollTo < "u" && this.props.scrollTo !== t.scrollTo
        ? this.updateScrollPosition(this.props.scrollTo)
        : this.props.keepAtBottom &&
          p &&
          i &&
          this.updateScrollPosition(this.contentHeight - this.visibleHeight);
  }
  componentWillUnmount() {
    this.hideScrollThumb.cancel(),
      document.removeEventListener("mousemove", this.onHandleDrag),
      document.removeEventListener("mouseup", this.onHandleDragEnd);
  }
  render() {
    const t = this.getScrollStyles(),
      n = this.getRootStyles(),
      r = this.enforceMinHandleHeight(this.getScrollHandleStyle()),
      a = [
        this.props.className || "",
        "rcs-custom-scroll",
        this.state.onDrag ? "rcs-scroll-handle-dragged" : "",
      ].join(" ");
    return z.jsx(Dr, {
      className: a,
      style: n,
      ref: this.customScrollRef,
      children: z.jsxs("div", {
        "data-testid": "outer-container",
        className: "rcs-outer-container",
        style: this.getOuterContainerStyle(),
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        onClick: this.onClick,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        children: [
          this.hasScroll
            ? z.jsx("div", {
                className: "rcs-positioning",
                children: z.jsx(
                  nn,
                  {
                    "data-testid": "custom-scrollbar",
                    ref: this.customScrollbarRef,
                    className: `rcs-custom-scrollbar ${
                      this.props.rtl ? "rcs-custom-scrollbar-rtl" : ""
                    } ${this.state.visible ? "scroll-visible" : ""}`,
                    children: z.jsx("div", {
                      "data-testid": "custom-scroll-handle",
                      ref: this.scrollHandleRef,
                      className: "rcs-custom-scroll-handle",
                      style: r,
                      children: z.jsx(Or, {
                        className: this.props.handleClass || "rcs-inner-handle",
                      }),
                    }),
                  },
                  "scrollbar"
                ),
              })
            : null,
          z.jsx("div", {
            "data-testid": "inner-container",
            ref: this.innerContainerRef,
            className: this.getInnerContainerClasses(),
            style: t.innerContainer,
            onScroll: this.onScroll,
            children: z.jsx("div", {
              ref: this.contentWrapperRef,
              style: t.contentWrapper,
              children: this.props.children,
            }),
          }),
        ],
      }),
    });
  }
}
const Fr = {
    info: { bgColor: "bg-inherit", textColor: "text-inherit" },
    success: { bgColor: "bg-[#52C41A]", textColor: "text-[#52C41A]" },
    error: { bgColor: "bg-[#ED1522]", textColor: "text-[#ED1522]" },
    warning: { bgColor: "bg-[#FFE662]", textColor: "text-[#FFE662]" },
  },
  Lr = ({ message: e, type: t }) => {
    const { bgColor: n, textColor: r } = Fr[t];
    return o.jsxs("div", {
      className: `rounded-xl flex gap-4 items-center bg-opacity-20 px-6 py-3 text-xl ${n}`,
      children: [
        o.jsx(F, { icon: "fa6-solid:circle-check", className: r }),
        o.jsx("span", { children: e }),
      ],
    });
  },
  Je = {
    projectId: "7700002",
    apiUrl: pn,
    scopeId: "7700002",
    userToken: "35e26211fa1d4746bc814f9cb2a478b8",
  },
  Br = () =>
    o.jsx("div", {
      className:
        "message-container-agi items-start flex w-11/12 mb-2 text-left justify-start mr-auto",
      children: o.jsx("div", {
        className:
          "bg-white bg-opacity-30 backdrop-blur-3xl border border-white border-opacity-50 p-4 rounded-2xl mr-auto ml-4",
        children: o.jsx(F, {
          className: "animate-spin",
          icon: "fa6-solid:spinner",
        }),
      }),
    }),
  zr = k.memo(function ({ message: t }) {
    var p, l;
    const n = t.user_id === "ai" || !t.user_id,
      r = (c) =>
        wn({ break: !0 })
          .use(Sn, { img: ["rcw-message-img"] })
          .use(Cn)
          .use(kn)
          .use(En, { attrs: { target: "_blank", rel: "noopener" } })
          .render(c);
    async function a(c) {
      const u = document.createElement("div");
      u.innerHTML = r(c);
      const d = u.textContent || u.innerText || "";
      await navigator.clipboard.writeText(d), It.success("Message coped");
    }
    const s =
        ((l = (p = t.metadata.result) == null ? void 0 : p.answer_appendix) ==
        null
          ? void 0
          : l.steps) || t.metadata.steps,
      i = t.metadata.plan;
    return o.jsx("div", {
      className: `message-container-agi items-start flex w-11/12 mb-2 text-left ${
        n ? "justify-start mr-auto" : "justify-end flex-row-reverse ml-auto"
      }`,
      children: o.jsxs("div", {
        className: `relative bg-opacity-10 backdrop-blur-3xl border border-white border-opacity-50  py-2 px-4 rounded-2xl ${
          n
            ? "mr-auto ml-4 bg-white pr-6  xl:pr-10"
            : "ml-auto mr-2 bg-transparent"
        }`,
        children: [
          o.jsx("div", {
            style: { overflowWrap: "anywhere" },
            dangerouslySetInnerHTML: { __html: r(t.content) },
          }),
          n &&
            i &&
            o.jsxs("div", {
              className: "opacity-40",
              children: [
                o.jsx("h4", { children: "What AI is planing to do:" }),
                o.jsx("div", {
                  style: { overflowWrap: "anywhere" },
                  dangerouslySetInnerHTML: { __html: r(i) },
                }),
              ],
            }),
          n &&
            s &&
            s.length !== 0 &&
            o.jsx(o.Fragment, {
              children: o.jsx("div", {
                className: "flex items-center gap-2 flex-wrap",
                children: s.map((c, u) =>
                  o.jsxs(o.Fragment, {
                    children: [
                      o.jsxs("button", {
                        id: `item_${u}`,
                        className:
                          "flex flex-shrink-0 items-center gap-1 p-2 bg-white bg-opacity-20 rounded-xl",
                        children: [
                          c.title,
                          !c.output &&
                            o.jsx(F, {
                              className: "animate-spin-slow ml-2 -mt-0.5",
                              icon: "fa6-solid:spinner",
                            }),
                        ],
                      }),
                      u !== s.length - 1 &&
                        o.jsx(F, { icon: "fa6-solid:caret-right" }),
                      c.output &&
                        o.jsx(In, {
                          openOnClick: !0,
                          className: "!opacity-100 !h-80",
                          style: {
                            color: "#000",
                            backgroundColor: "white",
                            width: "700px",
                            maxHeight: "250px !important",
                            borderRadius: "14px",
                            zIndex: 10,
                          },
                          anchorSelect: `#item_${u}`,
                          clickable: !0,
                          children: o.jsxs("div", {
                            className: "flex gap-4 h-full",
                            children: [
                              o.jsxs("div", {
                                className:
                                  "overflow-hidden flex flex-col w-1/2",
                                children: [
                                  o.jsxs("div", {
                                    className: "flex justify-between mb-1",
                                    children: [
                                      o.jsx("span", { children: "Input" }),
                                      o.jsx("button", {
                                        onClick: () => a(c.input),
                                        className: "opacity-20",
                                        children: o.jsx(F, {
                                          icon: "fa6-solid:clone",
                                        }),
                                      }),
                                    ],
                                  }),
                                  o.jsx("div", {
                                    className:
                                      "break-all border border-[#17191B] border-opacity-20 rounded-xl p-2 overflow-auto flex-grow",
                                    children: o.jsx("div", {
                                      style: { overflowWrap: "anywhere" },
                                      dangerouslySetInnerHTML: {
                                        __html: r(c.input),
                                      },
                                    }),
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className:
                                  "overflow-hidden flex flex-col w-1/2",
                                children: [
                                  o.jsxs("div", {
                                    className: "flex justify-between mb-1",
                                    children: [
                                      o.jsx("span", { children: "Output" }),
                                      o.jsx("button", {
                                        onClick: () => a(c.output),
                                        className: "opacity-20",
                                        children: o.jsx(F, {
                                          icon: "fa6-solid:clone",
                                        }),
                                      }),
                                    ],
                                  }),
                                  o.jsx("div", {
                                    className:
                                      "break-all border border-[#17191B] border-opacity-20 rounded-xl p-2 overflow-auto flex-grow",
                                    children: o.jsx("div", {
                                      style: { overflowWrap: "anywhere" },
                                      dangerouslySetInnerHTML: {
                                        __html: r(c.output),
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                    ],
                  })
                ),
              }),
            }),
          n &&
            t.content &&
            o.jsx("div", {
              className:
                "absolute flex items-center gap-2 top-2 right-2 opacity-40",
              children: o.jsx("button", {
                onClick: () => a(t.content),
                children: o.jsx(F, { icon: "fa6-solid:copy" }),
              }),
            }),
        ],
      }),
    });
  }),
  Wr = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  Gr = jn,
  Ur = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  Yr = 0.001,
  qr = Math.floor(Date.now() / 1e3) + 600,
  Et = dn("agi/hooks:useSwapTx"),
  Kr = () => {
    const e = hn(),
      { address: t } = jt(),
      { trackTx: n, trackError: r } = mn(),
      { walletProvider: a } = yn();
    async function s(i, p) {
      if (!a || !t) return;
      let l;
      try {
        const c = {
            to: "0xRecipientAddress",
            value: ot("0.01"),
            gasLimit: 21e3,
            gasPrice: lt("10", "gwei"),
          },
          u = new fn(new gn(a), t);
        (l = await new vn(
          Wr,
          Gr,
          u
        ).swapExactETHForTokensSupportingFeeOnTransferTokens(
          0,
          [Ur, i],
          t,
          qr,
          {
            value: ot(Yr.toString()),
            gasLimit: 2e5,
            gasPrice: lt("20", "gwei"),
          }
        )),
          e({
            modalKey: "loader",
            title: "Confirm your transaction in the wallet",
          }),
          (l = await u.sendTransaction(c)),
          e({ modalKey: "loader", title: "Processing swap", txHash: l.hash }),
          n(l),
          Et("tx", l),
          await l.wait(),
          e(null),
          Et("tx success");
      } catch (c) {
        throw (r(c, l), e(null), console.error("tx failed:", c), c);
      }
    }
    return s;
  },
  ze = {
    FET: "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
    AGIX: "0x5b7533812759b45c2b44c19e320ba2cd2681b542",
    GRT: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
  },
  Vr = [
    {
      icon: "/images/welcom-item-icon-1.png",
      text: "Perform a detailed due diligence review of this project",
    },
    {
      icon: "/images/welcom-item-icon-2.png",
      text: "Create and publish a post about AGIX's AGI for my X (Twitter) page",
    },
    {
      icon: "/images/welcom-item-icon-3.png",
      text: "Send me real-time news alerts that could impact ETH price movements",
    },
    {
      icon: "/images/welcom-item-icon-4.png",
      text: "Monitor and report transactions and balances for Buterin's Ethereum wallet",
    },
    {
      icon: "/images/welcom-item-icon-5.png",
      text: "Evaluate the current ETH price resistance levels and provide trading insights",
    },
    {
      icon: "/images/welcom-item-icon-6.png",
      text: "Gather and summarize key market data about the AI Agents industry, including sources",
    },
    {
      icon: "/images/welcom-item-icon-7.png",
      text: "Analyze the followers and followings of the X (Twitter) profile",
    },
    {
      icon: "/images/welcom-item-icon-8.png",
      text: "Compare the AGIX project with competitors like Fetch.AI, Singularity, and others",
    },
    {
      icon: "/images/welcom-item-icon-9.png",
      text: "Break down the BTC whitepaper into key points I can explain simply to my friends",
    },
  ],
  Qr = () => {
    const [{ userId: e, answering: t }, n] = At(),
      { isConnected: r } = jt(),
      a = k.useRef(0),
      s = k.useRef(!1),
      i = k.useRef(null),
      [p, l] = k.useState(!1),
      c = bn(),
      {
        data: u,
        isPending: d,
        error: v,
        refetch: m,
      } = xn({
        queryKey: ["chatHistory", e],
        queryFn: () => T(),
        refetchOnWindowFocus: !1,
      }),
      T = async () => {
        if (!e) return Promise.resolve([]);
        const { apiUrl: y } = Je,
          b = (await We.post(`${y}/conversation_history`, { user_id: e })).data
            .conversation;
        if (b.length === 0) return (a.current = 0), w(), [];
        const E = b[b.length - 1].msg_id.split("-");
        return (a.current = parseInt(E[E.length - 1])), w(), b;
      };
    k.useEffect(() => {
      const y = setTimeout(() => {
        i.current && (i.current.scrollTop = i.current.scrollHeight);
      }, 200);
      return () => clearTimeout(y);
    }, [u]);
    const w = () => {
        const { apiUrl: y } = Je;
        try {
          We.get(`${y}/wait_for_new_message/${e}/${a.current}`)
            .then((g) => {
              if (g.data.status !== "ok") {
                console.log("Integratly: No new messages"),
                  setTimeout(() => w(), 2e3);
                return;
              }
              const b = g.data.message;
              console.log("Integratly: listenForMessages message === >", b);
              const E = b.msg_id.split("-"),
                S = parseInt(E[E.length - 1]);
              if (b.metadata.partial) {
                c.setQueryData(["chatHistory", e], (h) =>
                  s.current ? [...h.slice(0, h.length - 1), b] : [...h, b]
                ),
                  (s.current = !0),
                  setTimeout(() => w(), 2e3);
                return;
              }
              S > a.current &&
                ((a.current = S),
                g.data.status === "ok" &&
                  (c.setQueryData(["chatHistory", e], (h) =>
                    s.current
                      ? ((s.current = !1), [...h.slice(0, h.length - 1), b])
                      : [...h, b]
                  ),
                  b.user_id === "ai" && n((h) => ({ ...h, answering: !1 })),
                  setTimeout(() => {
                    w();
                  }, 200)));
            })
            .catch((g) => {
              console.log("Error restart waitForNewMessage in 2 sec"),
                console.error(g),
                setTimeout(() => w(), 2e3);
            });
        } catch (g) {
          console.error(g);
        }
      },
      P = Kr();
    k.useEffect(() => {
      const y = (g) => {
        g.ctrlKey && g.key === "a" && (g.preventDefault(), l((b) => !b));
      };
      return (
        window.addEventListener("keydown", y),
        () => {
          window.removeEventListener("keydown", y);
        }
      );
    }, []);
    function j(y) {
      window.postMessage({ text: y, type: "myTypeee" });
    }
    return o.jsx("div", {
      className: "w-full h-full overflow-hidden pt-2 text-sm",
      children: o.jsxs($r, {
        className: "flex flex-col h-full",
        keepAtBottom: !0,
        heightRelativeToParent: "100%",
        children: [
          d
            ? o.jsx(Tn, {
                className: "h-full",
                label: "Loading conversation history...",
              })
            : v
            ? o.jsxs("div", {
                className:
                  "w-full h-full flex items-center justify-center flex-col gap-2",
                children: [
                  o.jsx(Lr, {
                    type: "error",
                    message: "Error while loading history",
                  }),
                  o.jsx(V, {
                    onClick: () => m(),
                    buttonColor: "blur-white",
                    startIcon: o.jsx(F, {
                      icon: "material-symbols:refresh",
                      className: "-mr-2 text-lg",
                    }),
                    children: "Retry",
                  }),
                ],
              })
            : u.length === 0
            ? o.jsx("div", {
                className: "flex items-center justify-center h-full",
                children: o.jsx("div", {
                  className:
                    "grid grid-cols-3 gap-x-8 gap-y-6 max-w-[1200px] mx-auto px-8",
                  children: Vr.map((y) =>
                    o.jsxs("div", {
                      className:
                        "flex items-center gap-3 hover:scale-105 cursor-pointer",
                      onClick: () => j(y.text),
                      children: [
                        o.jsx("img", { className: "w-16", src: y.icon }),
                        o.jsx("p", {
                          className: "font-semibold opacity-60 text-left",
                          children: y.text,
                        }),
                      ],
                    })
                  ),
                }),
              })
            : u.map((y, g) => o.jsx(zr, { message: y }, y.msg_id + g)),
          p &&
            !d &&
            o.jsxs("div", {
              className:
                "message-container-agi items-start flex w-11/12 mb-2 text-left justify-start mr-auto gap-2.5 ml-4",
              children: [
                o.jsx(V, {
                  onClick: () => P(ze.AGIX, "AGIX"),
                  buttonColor: "blur-blue",
                  disabled: !r,
                  children: "Swap AGIX",
                }),
                o.jsx(V, {
                  onClick: () => P(ze.FET, "FET"),
                  buttonColor: "blur-blue",
                  disabled: !r,
                  children: "Swap FET",
                }),
                o.jsx(V, {
                  onClick: () => P(ze.GRT, "GRT"),
                  buttonColor: "blur-blue",
                  disabled: !r,
                  children: "Swap GRT",
                }),
              ],
            }),
          t && o.jsx(Br, {}),
        ],
      }),
    });
  },
  Xr = (e) =>
    k.createElement(
      "svg",
      {
        width: 20,
        height: 19,
        viewBox: "0 0 20 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      k.createElement("path", {
        d: "M18.9648 2.05078L16.7148 16.6406C16.6797 16.9922 16.4688 17.3086 16.1523 17.4844C15.9766 17.5547 15.8008 17.625 15.5898 17.625C15.4492 17.625 15.3086 17.5898 15.168 17.5195L10.8789 15.7266L9.08594 18.3984C8.94531 18.6445 8.69922 18.75 8.45312 18.75C8.06641 18.75 7.75 18.4336 7.75 18.0469V14.6719C7.75 14.3906 7.82031 14.1445 7.96094 13.9688L15.625 4.125L5.28906 13.4414L1.66797 11.9297C1.28125 11.7539 1 11.4023 1 10.9453C0.964844 10.4531 1.17578 10.1016 1.5625 9.89062L17.3125 0.925781C17.6641 0.714844 18.1562 0.714844 18.5078 0.960938C18.8594 1.20703 19.0352 1.62891 18.9648 2.05078Z",
        fill: "white",
      })
    ),
  Jr = () => {
    const [{ userId: e, sending: t }, n] = At(),
      [r, a] = k.useState(""),
      s = k.useRef(null),
      i = k.useRef(e);
    k.useEffect(() => {
      i.current = e;
    }, [e]),
      k.useEffect(() => {
        function u(d) {
          d.data.type === "myTypeee" && a(d.data.text);
        }
        return (
          window.addEventListener("message", u),
          () => window.removeEventListener("message", u)
        );
      }, []),
      k.useEffect(() => {
        s.current &&
          (s.current.addEventListener("input", p),
          s.current.addEventListener("keydown", l));
      }, [s]);
    const p = ut(() => {
        const u = s.current;
        if (!u) return;
        const d = r.length,
          v = 100;
        u.rows = Math.min(5, Math.max(1, Math.ceil(d / v)));
      }),
      l = ut((u) => {
        u.key === "Enter" &&
          (u.ctrlKey || u.shiftKey
            ? a(
                r +
                  `
`
              )
            : (u.preventDefault(), c()));
      }),
      c = async function () {
        if (t || !r) return;
        const { apiUrl: u, userToken: d, scopeId: v } = Je;
        n((m) => ({ ...m, sending: !0 }));
        try {
          await We.post(`${u}/handle_tasks`, {
            scope_id: v,
            secret: d,
            user_id: i.current,
            user_message: r,
            channel: "webchat",
            username: i.current,
            steps: [
              {
                field: "answer",
                input_getter: "getter_prompt",
                input_getter_kwargs: {
                  prompt_var: "ASSISTANT_PROMPT",
                  agi: !0,
                },
                no_hallucinations: !0,
              },
            ],
          }),
            n((T) => ({ ...T, sending: !1, answering: !0 })),
            a("");
          const m = s.current;
          if (!m) return;
          m.rows = 1;
        } catch (m) {
          m.response &&
            m.response.data &&
            m.response.data.error &&
            It.error(m.response.data.error),
            n((w) => ({ ...w, sending: !1, answering: !1 }));
          const T = s.current;
          if (!T) return;
          T.rows = 1;
        }
      };
    return o.jsxs(Ge, {
      className:
        "p-2 mt-2 flex items-end gap-4 relative md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] mx-auto w-full",
      children: [
        o.jsx("textarea", {
          id: "messageTextArea",
          placeholder: "Message",
          className: `font-normal resize-none bg-transparent placeholder-gray-400 border border-gray-600 focus:border-purple-600 focus:ring-0 rounded-xl p-2 xl:px-3 xl:py-4 flex-1 ${
            t ? "opacity-20" : ""
          }`,
          rows: 1,
          value: r,
          ref: s,
          disabled: t,
          onChange: (u) => a(u.target.value),
        }),
        o.jsx(V, {
          type: "button",
          className: `p-2 xl:p-4 pr-2.5 xl:pr-4.5 rounded-xl flex-shrink-0 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ${
            t ? "opacity-20" : ""
          }`,
          onClick: c,
          processing: t,
          children: o.jsx(Xr, {}),
        }),
      ],
    });
  },
  Zr = [
    {
      name: "Initializing the Model",
      status: "waiting",
      loadedTxt: "AI Agents connected: 0/33",
    },
    {
      name: "Establishing Connection",
      status: "waiting",
      loadedTxt: "Synchronizing with AGI system",
    },
    {
      name: "Building the Execution Plan",
      status: "waiting",
      loadedTxt: "Waiting",
    },
  ],
  ea = ({ setLoading: e }) => {
    const [t, n] = k.useState(Zr);
    k.useEffect(() => {
      let a = 0,
        s;
      const i = setInterval(() => {
        n((p) => {
          const l = Math.floor(Math.random() * 10);
          a = Math.min(33, a + l);
          const c = p.map((u, d) =>
            d === 0
              ? {
                  ...u,
                  status: "processing",
                  loadedTxt: `AI Agents connected: ${a}/33`,
                }
              : u
          );
          return (
            a > 33 && (a = 33),
            a === 33 && ((c[0].status = "ready"), (s = r()), clearInterval(i)),
            c
          );
        });
      }, 200);
      return () => {
        clearInterval(i), s == null || s.forEach(clearTimeout);
      };
    }, []);
    function r() {
      return (
        n((a) =>
          a.map((s, i) =>
            i === 1
              ? { ...s, loadedTxt: "Connecting", status: "processing" }
              : s
          )
        ),
        [
          setTimeout(() => {
            n((a) =>
              a.map((s, i) =>
                i === 1 ? { ...s, loadedTxt: "Done", status: "ready" } : s
              )
            );
          }, 2e3),
          setTimeout(() => {
            n((a) =>
              a.map((s, i) => (i === 2 ? { ...s, status: "processing" } : s))
            );
          }, 2e3),
          setTimeout(() => {
            n((a) =>
              a.map((s, i) =>
                i === 2 ? { ...s, status: "ready", loadedTxt: "Done" } : s
              )
            );
          }, 4e3),
          setTimeout(() => {
            e(!1);
          }, 5e3),
        ]
      );
    }
    return o.jsx("div", {
      className:
        "z-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col",
      children: t.map((a) =>
        o.jsxs("div", {
          className: "flex items-center [&:not(:last-child)]:mb-6",
          children: [
            o.jsx("div", {
              className: `flex items-center justify-center text-xl w-10 h-10 mr-2 rounded-xl bg-white ${
                a.status === "ready"
                  ? "text-blue-400"
                  : a.status === "processing"
                  ? "bg-opacity-20"
                  : "bg-opacity-20 text-white text-opacity-10"
              }`,
              children: o.jsx(F, {
                className: a.status === "processing" ? "animate-spin" : "",
                icon:
                  a.status === "ready"
                    ? "fa6-solid:check"
                    : a.status === "processing"
                    ? "fa6-solid:spinner"
                    : "fa6-solid:circle-notch",
              }),
            }),
            o.jsxs("div", {
              className: "text-left",
              children: [
                o.jsx("div", { className: "text-xl", children: a.name }),
                o.jsx("div", {
                  className: "opacity-40",
                  children: a.loadedTxt,
                }),
              ],
            }),
          ],
        })
      ),
    });
  },
  aa = () => {
    const [e, t] = k.useState(!0),
      [n, r] = k.useState(!0);
    return e
      ? o.jsx("div", {
          className: "container mx-auto flex-grow",
          children: o.jsx(Ge, {
            style: {
              backgroundImage: "url('/images/ai-marketplace/top-banner.png')",
            },
            className:
              "relative pt-[33%] xl:min-h-[400px] overflow-hidden bg-right bg-no-repeat mt-10 mb-5 border border-white border-opacity-10 bg-[length:auto_100%]",
            children: o.jsxs("div", {
              className:
                "flex flex-col items-start p-8 xl:p-12 2xl:p-16 h-full max-w-[400px] w-full absolute top-0 left-0",
              children: [
                o.jsxs("h2", {
                  className:
                    "text-2xl xl:text-3xl 2xl:text-[40px] leading-none mb-8",
                  children: [
                    "Artificial",
                    o.jsx("br", {}),
                    "TOP",
                    o.jsx("br", {}),
                    "Intelligence",
                  ],
                }),
                o.jsxs("p", {
                  className: "opacity-40 font-normal",
                  children: [
                    "The ultimate AI command center,",
                    o.jsx("br", {}),
                    "coordinating external and internal AI",
                    o.jsx("br", {}),
                    "agents to handle complex queries.",
                  ],
                }),
                o.jsx(V, {
                  className: "mt-auto",
                  size: "xl",
                  buttonColor: "blue",
                  onClick: () => t(!1),
                  children: "Launch",
                }),
              ],
            }),
          }),
        })
      : o.jsxs("div", {
          className: "container mx-auto flex-grow h-full flex flex-col",
          children: [
            o.jsx(Ge, {
              className:
                "relative aura wrapper flex-grow !p-4 overflow-hidden border border-white border-opacity-20 bg-[length:auto_100%]",
              children: o.jsx("div", {
                className: "flex flex-col w-full h-full overflow-hidden",
                children: n ? o.jsx(ea, { setLoading: r }) : o.jsx(Qr, {}),
              }),
            }),
            o.jsx(Jr, {}),
          ],
        });
  };
export { aa as AGI };
//# sourceMappingURL=agi-BjhEoKc-.js.map
