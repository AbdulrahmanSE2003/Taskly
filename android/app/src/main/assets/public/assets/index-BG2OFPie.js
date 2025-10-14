(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) r(u);
  new MutationObserver((u) => {
    for (const f of u)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && r(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(u) {
    const f = {};
    return (
      u.integrity && (f.integrity = u.integrity),
      u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function r(u) {
    if (u.ep) return;
    u.ep = !0;
    const f = s(u);
    fetch(u.href, f);
  }
})();
function j1(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var qc = { exports: {} },
  Il = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eg;
function H1() {
  if (Eg) return Il;
  Eg = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function s(r, u, f) {
    var d = null;
    if (
      (f !== void 0 && (d = "" + f),
      u.key !== void 0 && (d = "" + u.key),
      "key" in u)
    ) {
      f = {};
      for (var h in u) h !== "key" && (f[h] = u[h]);
    } else f = u;
    return (
      (u = f.ref),
      { $$typeof: n, type: r, key: d, ref: u !== void 0 ? u : null, props: f }
    );
  }
  return ((Il.Fragment = i), (Il.jsx = s), (Il.jsxs = s), Il);
}
var Ag;
function Y1() {
  return (Ag || ((Ag = 1), (qc.exports = H1())), qc.exports);
}
var X = Y1(),
  kc = { exports: {} },
  ct = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dg;
function q1() {
  if (Dg) return ct;
  Dg = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function x(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (b && A[b]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    O = {};
  function M(A, k, F) {
    ((this.props = A),
      (this.context = k),
      (this.refs = O),
      (this.updater = F || E));
  }
  ((M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (A, k) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, A, k, "setState");
    }),
    (M.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    }));
  function z() {}
  z.prototype = M.prototype;
  function L(A, k, F) {
    ((this.props = A),
      (this.context = k),
      (this.refs = O),
      (this.updater = F || E));
  }
  var B = (L.prototype = new z());
  ((B.constructor = L), C(B, M.prototype), (B.isPureReactComponent = !0));
  var Z = Array.isArray,
    j = { H: null, A: null, T: null, S: null, V: null },
    P = Object.prototype.hasOwnProperty;
  function Q(A, k, F, J, tt, dt) {
    return (
      (F = dt.ref),
      { $$typeof: n, type: A, key: k, ref: F !== void 0 ? F : null, props: dt }
    );
  }
  function K(A, k) {
    return Q(A.type, k, void 0, void 0, void 0, A.props);
  }
  function I(A) {
    return typeof A == "object" && A !== null && A.$$typeof === n;
  }
  function lt(A) {
    var k = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (F) {
        return k[F];
      })
    );
  }
  var ot = /\/+/g;
  function St(A, k) {
    return typeof A == "object" && A !== null && A.key != null
      ? lt("" + A.key)
      : k.toString(36);
  }
  function Gt() {}
  function Xt(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(Gt, Gt)
            : ((A.status = "pending"),
              A.then(
                function (k) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = k));
                },
                function (k) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = k));
                },
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function Nt(A, k, F, J, tt) {
    var dt = typeof A;
    (dt === "undefined" || dt === "boolean") && (A = null);
    var et = !1;
    if (A === null) et = !0;
    else
      switch (dt) {
        case "bigint":
        case "string":
        case "number":
          et = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case n:
            case i:
              et = !0;
              break;
            case g:
              return ((et = A._init), Nt(et(A._payload), k, F, J, tt));
          }
      }
    if (et)
      return (
        (tt = tt(A)),
        (et = J === "" ? "." + St(A, 0) : J),
        Z(tt)
          ? ((F = ""),
            et != null && (F = et.replace(ot, "$&/") + "/"),
            Nt(tt, k, F, "", function (ae) {
              return ae;
            }))
          : tt != null &&
            (I(tt) &&
              (tt = K(
                tt,
                F +
                  (tt.key == null || (A && A.key === tt.key)
                    ? ""
                    : ("" + tt.key).replace(ot, "$&/") + "/") +
                  et,
              )),
            k.push(tt)),
        1
      );
    et = 0;
    var ne = J === "" ? "." : J + ":";
    if (Z(A))
      for (var yt = 0; yt < A.length; yt++)
        ((J = A[yt]), (dt = ne + St(J, yt)), (et += Nt(J, k, F, dt, tt)));
    else if (((yt = x(A)), typeof yt == "function"))
      for (A = yt.call(A), yt = 0; !(J = A.next()).done; )
        ((J = J.value), (dt = ne + St(J, yt++)), (et += Nt(J, k, F, dt, tt)));
    else if (dt === "object") {
      if (typeof A.then == "function") return Nt(Xt(A), k, F, J, tt);
      throw (
        (k = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (k === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : k) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return et;
  }
  function _(A, k, F) {
    if (A == null) return A;
    var J = [],
      tt = 0;
    return (
      Nt(A, J, "", "", function (dt) {
        return k.call(F, dt, tt++);
      }),
      J
    );
  }
  function G(A) {
    if (A._status === -1) {
      var k = A._result;
      ((k = k()),
        k.then(
          function (F) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = F));
          },
          function (F) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = F));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = k)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var $ =
    typeof reportError == "function"
      ? reportError
      : function (A) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var k = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof A == "object" &&
                A !== null &&
                typeof A.message == "string"
                  ? String(A.message)
                  : String(A),
              error: A,
            });
            if (!window.dispatchEvent(k)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", A);
            return;
          }
          console.error(A);
        };
  function ut() {}
  return (
    (ct.Children = {
      map: _,
      forEach: function (A, k, F) {
        _(
          A,
          function () {
            k.apply(this, arguments);
          },
          F,
        );
      },
      count: function (A) {
        var k = 0;
        return (
          _(A, function () {
            k++;
          }),
          k
        );
      },
      toArray: function (A) {
        return (
          _(A, function (k) {
            return k;
          }) || []
        );
      },
      only: function (A) {
        if (!I(A))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return A;
      },
    }),
    (ct.Component = M),
    (ct.Fragment = s),
    (ct.Profiler = u),
    (ct.PureComponent = L),
    (ct.StrictMode = r),
    (ct.Suspense = p),
    (ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j),
    (ct.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return j.H.useMemoCache(A);
      },
    }),
    (ct.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (ct.cloneElement = function (A, k, F) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + ".",
        );
      var J = C({}, A.props),
        tt = A.key,
        dt = void 0;
      if (k != null)
        for (et in (k.ref !== void 0 && (dt = void 0),
        k.key !== void 0 && (tt = "" + k.key),
        k))
          !P.call(k, et) ||
            et === "key" ||
            et === "__self" ||
            et === "__source" ||
            (et === "ref" && k.ref === void 0) ||
            (J[et] = k[et]);
      var et = arguments.length - 2;
      if (et === 1) J.children = F;
      else if (1 < et) {
        for (var ne = Array(et), yt = 0; yt < et; yt++)
          ne[yt] = arguments[yt + 2];
        J.children = ne;
      }
      return Q(A.type, tt, void 0, void 0, dt, J);
    }),
    (ct.createContext = function (A) {
      return (
        (A = {
          $$typeof: d,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: f, _context: A }),
        A
      );
    }),
    (ct.createElement = function (A, k, F) {
      var J,
        tt = {},
        dt = null;
      if (k != null)
        for (J in (k.key !== void 0 && (dt = "" + k.key), k))
          P.call(k, J) &&
            J !== "key" &&
            J !== "__self" &&
            J !== "__source" &&
            (tt[J] = k[J]);
      var et = arguments.length - 2;
      if (et === 1) tt.children = F;
      else if (1 < et) {
        for (var ne = Array(et), yt = 0; yt < et; yt++)
          ne[yt] = arguments[yt + 2];
        tt.children = ne;
      }
      if (A && A.defaultProps)
        for (J in ((et = A.defaultProps), et))
          tt[J] === void 0 && (tt[J] = et[J]);
      return Q(A, dt, void 0, void 0, null, tt);
    }),
    (ct.createRef = function () {
      return { current: null };
    }),
    (ct.forwardRef = function (A) {
      return { $$typeof: h, render: A };
    }),
    (ct.isValidElement = I),
    (ct.lazy = function (A) {
      return { $$typeof: g, _payload: { _status: -1, _result: A }, _init: G };
    }),
    (ct.memo = function (A, k) {
      return { $$typeof: m, type: A, compare: k === void 0 ? null : k };
    }),
    (ct.startTransition = function (A) {
      var k = j.T,
        F = {};
      j.T = F;
      try {
        var J = A(),
          tt = j.S;
        (tt !== null && tt(F, J),
          typeof J == "object" &&
            J !== null &&
            typeof J.then == "function" &&
            J.then(ut, $));
      } catch (dt) {
        $(dt);
      } finally {
        j.T = k;
      }
    }),
    (ct.unstable_useCacheRefresh = function () {
      return j.H.useCacheRefresh();
    }),
    (ct.use = function (A) {
      return j.H.use(A);
    }),
    (ct.useActionState = function (A, k, F) {
      return j.H.useActionState(A, k, F);
    }),
    (ct.useCallback = function (A, k) {
      return j.H.useCallback(A, k);
    }),
    (ct.useContext = function (A) {
      return j.H.useContext(A);
    }),
    (ct.useDebugValue = function () {}),
    (ct.useDeferredValue = function (A, k) {
      return j.H.useDeferredValue(A, k);
    }),
    (ct.useEffect = function (A, k, F) {
      var J = j.H;
      if (typeof F == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return J.useEffect(A, k);
    }),
    (ct.useId = function () {
      return j.H.useId();
    }),
    (ct.useImperativeHandle = function (A, k, F) {
      return j.H.useImperativeHandle(A, k, F);
    }),
    (ct.useInsertionEffect = function (A, k) {
      return j.H.useInsertionEffect(A, k);
    }),
    (ct.useLayoutEffect = function (A, k) {
      return j.H.useLayoutEffect(A, k);
    }),
    (ct.useMemo = function (A, k) {
      return j.H.useMemo(A, k);
    }),
    (ct.useOptimistic = function (A, k) {
      return j.H.useOptimistic(A, k);
    }),
    (ct.useReducer = function (A, k, F) {
      return j.H.useReducer(A, k, F);
    }),
    (ct.useRef = function (A) {
      return j.H.useRef(A);
    }),
    (ct.useState = function (A) {
      return j.H.useState(A);
    }),
    (ct.useSyncExternalStore = function (A, k, F) {
      return j.H.useSyncExternalStore(A, k, F);
    }),
    (ct.useTransition = function () {
      return j.H.useTransition();
    }),
    (ct.version = "19.1.1"),
    ct
  );
}
var Rg;
function Zf() {
  return (Rg || ((Rg = 1), (kc.exports = q1())), kc.exports);
}
var S = Zf();
const Ce = j1(S);
var Gc = { exports: {} },
  ts = {},
  Xc = { exports: {} },
  Kc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wg;
function k1() {
  return (
    wg ||
      ((wg = 1),
      (function (n) {
        function i(_, G) {
          var $ = _.length;
          _.push(G);
          t: for (; 0 < $; ) {
            var ut = ($ - 1) >>> 1,
              A = _[ut];
            if (0 < u(A, G)) ((_[ut] = G), (_[$] = A), ($ = ut));
            else break t;
          }
        }
        function s(_) {
          return _.length === 0 ? null : _[0];
        }
        function r(_) {
          if (_.length === 0) return null;
          var G = _[0],
            $ = _.pop();
          if ($ !== G) {
            _[0] = $;
            t: for (var ut = 0, A = _.length, k = A >>> 1; ut < k; ) {
              var F = 2 * (ut + 1) - 1,
                J = _[F],
                tt = F + 1,
                dt = _[tt];
              if (0 > u(J, $))
                tt < A && 0 > u(dt, J)
                  ? ((_[ut] = dt), (_[tt] = $), (ut = tt))
                  : ((_[ut] = J), (_[F] = $), (ut = F));
              else if (tt < A && 0 > u(dt, $))
                ((_[ut] = dt), (_[tt] = $), (ut = tt));
              else break t;
            }
          }
          return G;
        }
        function u(_, G) {
          var $ = _.sortIndex - G.sortIndex;
          return $ !== 0 ? $ : _.id - G.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            h = d.now();
          n.unstable_now = function () {
            return d.now() - h;
          };
        }
        var p = [],
          m = [],
          g = 1,
          b = null,
          x = 3,
          E = !1,
          C = !1,
          O = !1,
          M = !1,
          z = typeof setTimeout == "function" ? setTimeout : null,
          L = typeof clearTimeout == "function" ? clearTimeout : null,
          B = typeof setImmediate < "u" ? setImmediate : null;
        function Z(_) {
          for (var G = s(m); G !== null; ) {
            if (G.callback === null) r(m);
            else if (G.startTime <= _)
              (r(m), (G.sortIndex = G.expirationTime), i(p, G));
            else break;
            G = s(m);
          }
        }
        function j(_) {
          if (((O = !1), Z(_), !C))
            if (s(p) !== null) ((C = !0), P || ((P = !0), St()));
            else {
              var G = s(m);
              G !== null && Nt(j, G.startTime - _);
            }
        }
        var P = !1,
          Q = -1,
          K = 5,
          I = -1;
        function lt() {
          return M ? !0 : !(n.unstable_now() - I < K);
        }
        function ot() {
          if (((M = !1), P)) {
            var _ = n.unstable_now();
            I = _;
            var G = !0;
            try {
              t: {
                ((C = !1), O && ((O = !1), L(Q), (Q = -1)), (E = !0));
                var $ = x;
                try {
                  e: {
                    for (
                      Z(_), b = s(p);
                      b !== null && !(b.expirationTime > _ && lt());

                    ) {
                      var ut = b.callback;
                      if (typeof ut == "function") {
                        ((b.callback = null), (x = b.priorityLevel));
                        var A = ut(b.expirationTime <= _);
                        if (((_ = n.unstable_now()), typeof A == "function")) {
                          ((b.callback = A), Z(_), (G = !0));
                          break e;
                        }
                        (b === s(p) && r(p), Z(_));
                      } else r(p);
                      b = s(p);
                    }
                    if (b !== null) G = !0;
                    else {
                      var k = s(m);
                      (k !== null && Nt(j, k.startTime - _), (G = !1));
                    }
                  }
                  break t;
                } finally {
                  ((b = null), (x = $), (E = !1));
                }
                G = void 0;
              }
            } finally {
              G ? St() : (P = !1);
            }
          }
        }
        var St;
        if (typeof B == "function")
          St = function () {
            B(ot);
          };
        else if (typeof MessageChannel < "u") {
          var Gt = new MessageChannel(),
            Xt = Gt.port2;
          ((Gt.port1.onmessage = ot),
            (St = function () {
              Xt.postMessage(null);
            }));
        } else
          St = function () {
            z(ot, 0);
          };
        function Nt(_, G) {
          Q = z(function () {
            _(n.unstable_now());
          }, G);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (n.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (K = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (n.unstable_next = function (_) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = x;
            }
            var $ = x;
            x = G;
            try {
              return _();
            } finally {
              x = $;
            }
          }),
          (n.unstable_requestPaint = function () {
            M = !0;
          }),
          (n.unstable_runWithPriority = function (_, G) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var $ = x;
            x = _;
            try {
              return G();
            } finally {
              x = $;
            }
          }),
          (n.unstable_scheduleCallback = function (_, G, $) {
            var ut = n.unstable_now();
            switch (
              (typeof $ == "object" && $ !== null
                ? (($ = $.delay),
                  ($ = typeof $ == "number" && 0 < $ ? ut + $ : ut))
                : ($ = ut),
              _)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = $ + A),
              (_ = {
                id: g++,
                callback: G,
                priorityLevel: _,
                startTime: $,
                expirationTime: A,
                sortIndex: -1,
              }),
              $ > ut
                ? ((_.sortIndex = $),
                  i(m, _),
                  s(p) === null &&
                    _ === s(m) &&
                    (O ? (L(Q), (Q = -1)) : (O = !0), Nt(j, $ - ut)))
                : ((_.sortIndex = A),
                  i(p, _),
                  C || E || ((C = !0), P || ((P = !0), St()))),
              _
            );
          }),
          (n.unstable_shouldYield = lt),
          (n.unstable_wrapCallback = function (_) {
            var G = x;
            return function () {
              var $ = x;
              x = G;
              try {
                return _.apply(this, arguments);
              } finally {
                x = $;
              }
            };
          }));
      })(Kc)),
    Kc
  );
}
var Mg;
function G1() {
  return (Mg || ((Mg = 1), (Xc.exports = k1())), Xc.exports);
}
var Zc = { exports: {} },
  ve = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cg;
function X1() {
  if (Cg) return ve;
  Cg = 1;
  var n = Zf();
  function i(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        m += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(i(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for("react.portal");
  function f(p, m, g) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: m,
      implementation: g,
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (ve.createPortal = function (p, m) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(i(299));
      return f(p, m, null, g);
    }),
    (ve.flushSync = function (p) {
      var m = d.T,
        g = r.p;
      try {
        if (((d.T = null), (r.p = 2), p)) return p();
      } finally {
        ((d.T = m), (r.p = g), r.d.f());
      }
    }),
    (ve.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        r.d.C(p, m));
    }),
    (ve.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p);
    }),
    (ve.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var g = m.as,
          b = h(g, m.crossOrigin),
          x = typeof m.integrity == "string" ? m.integrity : void 0,
          E = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        g === "style"
          ? r.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: E,
            })
          : g === "script" &&
            r.d.X(p, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: E,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (ve.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var g = h(m.as, m.crossOrigin);
            r.d.M(p, {
              crossOrigin: g,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && r.d.M(p);
    }),
    (ve.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var g = m.as,
          b = h(g, m.crossOrigin);
        r.d.L(p, g, {
          crossOrigin: b,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (ve.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var g = h(m.as, m.crossOrigin);
          r.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else r.d.m(p);
    }),
    (ve.requestFormReset = function (p) {
      r.d.r(p);
    }),
    (ve.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (ve.useFormState = function (p, m, g) {
      return d.H.useFormState(p, m, g);
    }),
    (ve.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (ve.version = "19.1.1"),
    ve
  );
}
var Og;
function dv() {
  if (Og) return Zc.exports;
  Og = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (Zc.exports = X1()), Zc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ng;
function K1() {
  if (Ng) return ts;
  Ng = 1;
  var n = G1(),
    i = Zf(),
    s = dv();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (f(t) !== t) throw Error(r(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
      var o = a.return;
      if (o === null) break;
      var c = o.alternate;
      if (c === null) {
        if (((l = o.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (o.child === c.child) {
        for (c = o.child; c; ) {
          if (c === a) return (h(o), t);
          if (c === l) return (h(o), e);
          c = c.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== l.return) ((a = o), (l = c));
      else {
        for (var y = !1, v = o.child; v; ) {
          if (v === a) {
            ((y = !0), (a = o), (l = c));
            break;
          }
          if (v === l) {
            ((y = !0), (l = o), (a = c));
            break;
          }
          v = v.sibling;
        }
        if (!y) {
          for (v = c.child; v; ) {
            if (v === a) {
              ((y = !0), (a = c), (l = o));
              break;
            }
            if (v === l) {
              ((y = !0), (l = c), (a = o));
              break;
            }
            v = v.sibling;
          }
          if (!y) throw Error(r(189));
        }
      }
      if (a.alternate !== l) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : e;
  }
  function m(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = m(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    b = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    C = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    z = Symbol.for("react.provider"),
    L = Symbol.for("react.consumer"),
    B = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    j = Symbol.for("react.suspense"),
    P = Symbol.for("react.suspense_list"),
    Q = Symbol.for("react.memo"),
    K = Symbol.for("react.lazy"),
    I = Symbol.for("react.activity"),
    lt = Symbol.for("react.memo_cache_sentinel"),
    ot = Symbol.iterator;
  function St(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ot && t[ot]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Gt = Symbol.for("react.client.reference");
  function Xt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Gt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case C:
        return "Fragment";
      case M:
        return "Profiler";
      case O:
        return "StrictMode";
      case j:
        return "Suspense";
      case P:
        return "SuspenseList";
      case I:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case E:
          return "Portal";
        case B:
          return (t.displayName || "Context") + ".Provider";
        case L:
          return (t._context.displayName || "Context") + ".Consumer";
        case Z:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Q:
          return (
            (e = t.displayName || null),
            e !== null ? e : Xt(t.type) || "Memo"
          );
        case K:
          ((e = t._payload), (t = t._init));
          try {
            return Xt(t(e));
          } catch {}
      }
    return null;
  }
  var Nt = Array.isArray,
    _ = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = { pending: !1, data: null, method: null, action: null },
    ut = [],
    A = -1;
  function k(t) {
    return { current: t };
  }
  function F(t) {
    0 > A || ((t.current = ut[A]), (ut[A] = null), A--);
  }
  function J(t, e) {
    (A++, (ut[A] = t.current), (t.current = e));
  }
  var tt = k(null),
    dt = k(null),
    et = k(null),
    ne = k(null);
  function yt(t, e) {
    switch ((J(et, e), J(dt, t), J(tt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? $p(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = $p(e)), (t = Wp(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (F(tt), J(tt, t));
  }
  function ae() {
    (F(tt), F(dt), F(et));
  }
  function vt(t) {
    t.memoizedState !== null && J(ne, t);
    var e = tt.current,
      a = Wp(e, t.type);
    e !== a && (J(dt, t), J(tt, a));
  }
  function fn(t) {
    (dt.current === t && (F(tt), F(dt)),
      ne.current === t && (F(ne), (Pl._currentValue = $)));
  }
  var Ae = Object.prototype.hasOwnProperty,
    dn = n.unstable_scheduleCallback,
    ze = n.unstable_cancelCallback,
    Pn = n.unstable_shouldYield,
    Fn = n.unstable_requestPaint,
    Ve = n.unstable_now,
    Vs = n.unstable_getCurrentPriorityLevel,
    Ia = n.unstable_ImmediatePriority,
    nn = n.unstable_UserBlockingPriority,
    Dn = n.unstable_NormalPriority,
    ti = n.unstable_LowPriority,
    il = n.unstable_IdlePriority,
    Ls = n.log,
    Vo = n.unstable_setDisableYieldValue,
    Da = null,
    Pt = null;
  function Se(t) {
    if (
      (typeof Ls == "function" && Vo(t),
      Pt && typeof Pt.setStrictMode == "function")
    )
      try {
        Pt.setStrictMode(Da, t);
      } catch {}
  }
  var Wt = Math.clz32 ? Math.clz32 : Bs,
    Us = Math.log,
    hn = Math.LN2;
  function Bs(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Us(t) / hn) | 0)) | 0);
  }
  var ei = 256,
    ni = 4194304;
  function an(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ra(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var o = 0,
      c = t.suspendedLanes,
      y = t.pingedLanes;
    t = t.warmLanes;
    var v = l & 134217727;
    return (
      v !== 0
        ? ((l = v & ~c),
          l !== 0
            ? (o = an(l))
            : ((y &= v),
              y !== 0
                ? (o = an(y))
                : a || ((a = v & ~t), a !== 0 && (o = an(a)))))
        : ((v = l & ~c),
          v !== 0
            ? (o = an(v))
            : y !== 0
              ? (o = an(y))
              : a || ((a = l & ~t), a !== 0 && (o = an(a)))),
      o === 0
        ? 0
        : e !== 0 &&
            e !== o &&
            (e & c) === 0 &&
            ((c = o & -o),
            (a = e & -e),
            c >= a || (c === 32 && (a & 4194048) !== 0))
          ? e
          : o
    );
  }
  function wa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function _s(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function js() {
    var t = ei;
    return ((ei <<= 1), (ei & 4194048) === 0 && (ei = 256), t);
  }
  function Hs() {
    var t = ni;
    return ((ni <<= 1), (ni & 62914560) === 0 && (ni = 4194304), t);
  }
  function ll(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function Ht(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function xe(t, e, a, l, o, c) {
    var y = t.pendingLanes;
    ((t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0));
    var v = t.entanglements,
      T = t.expirationTimes,
      N = t.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var H = 31 - Wt(a),
        q = 1 << H;
      ((v[H] = 0), (T[H] = -1));
      var V = N[H];
      if (V !== null)
        for (N[H] = null, H = 0; H < V.length; H++) {
          var U = V[H];
          U !== null && (U.lane &= -536870913);
        }
      a &= ~q;
    }
    (l !== 0 && me(t, l, 0),
      c !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(y & ~e)));
  }
  function me(t, e, a) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - Wt(e);
    ((t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (a & 4194090)));
  }
  function ln(t, e) {
    var a = (t.entangledLanes |= e);
    for (t = t.entanglements; a; ) {
      var l = 31 - Wt(a),
        o = 1 << l;
      ((o & e) | (t[l] & e) && (t[l] |= e), (a &= ~o));
    }
  }
  function pe(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ue(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Le() {
    var t = G.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : yg(t.type));
  }
  function Jn(t, e) {
    var a = G.p;
    try {
      return ((G.p = t), e());
    } finally {
      G.p = a;
    }
  }
  var Ct = Math.random().toString(36).slice(2),
    zt = "__reactFiber$" + Ct,
    Vt = "__reactProps$" + Ct,
    ge = "__reactContainer$" + Ct,
    Rn = "__reactEvents$" + Ct,
    Ma = "__reactListeners$" + Ct,
    mn = "__reactHandles$" + Ct,
    $n = "__reactResources$" + Ct,
    wn = "__reactMarker$" + Ct;
  function Lo(t) {
    (delete t[zt], delete t[Vt], delete t[Rn], delete t[Ma], delete t[mn]);
  }
  function ai(t) {
    var e = t[zt];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if ((e = a[ge] || a[zt])) {
        if (
          ((a = e.alternate),
          e.child !== null || (a !== null && a.child !== null))
        )
          for (t = ng(t); t !== null; ) {
            if ((a = t[zt])) return a;
            t = ng(t);
          }
        return e;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function ii(t) {
    if ((t = t[zt] || t[ge])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function sl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function li(t) {
    var e = t[$n];
    return (
      e ||
        (e = t[$n] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function ie(t) {
    t[wn] = !0;
  }
  var Yd = new Set(),
    qd = {};
  function Ca(t, e) {
    (si(t, e), si(t + "Capture", e));
  }
  function si(t, e) {
    for (qd[t] = e, t = 0; t < e.length; t++) Yd.add(e[t]);
  }
  var Ob = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    kd = {},
    Gd = {};
  function Nb(t) {
    return Ae.call(Gd, t)
      ? !0
      : Ae.call(kd, t)
        ? !1
        : Ob.test(t)
          ? (Gd[t] = !0)
          : ((kd[t] = !0), !1);
  }
  function Ys(t, e, a) {
    if (Nb(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function qs(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function Mn(t, e, a, l) {
    if (l === null) t.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + l);
    }
  }
  var Uo, Xd;
  function ri(t) {
    if (Uo === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        ((Uo = (e && e[1]) || ""),
          (Xd =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Uo +
      t +
      Xd
    );
  }
  var Bo = !1;
  function _o(t, e) {
    if (!t || Bo) return "";
    Bo = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(q.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(q, []);
                } catch (U) {
                  var V = U;
                }
                Reflect.construct(t, [], q);
              } else {
                try {
                  q.call();
                } catch (U) {
                  V = U;
                }
                t.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                V = U;
              }
              (q = t()) &&
                typeof q.catch == "function" &&
                q.catch(function () {});
            }
          } catch (U) {
            if (U && V && typeof U.stack == "string") return [U.stack, V.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      o &&
        o.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = l.DetermineComponentFrameRoot(),
        y = c[0],
        v = c[1];
      if (y && v) {
        var T = y.split(`
`),
          N = v.split(`
`);
        for (
          o = l = 0;
          l < T.length && !T[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; o < N.length && !N[o].includes("DetermineComponentFrameRoot"); )
          o++;
        if (l === T.length || o === N.length)
          for (
            l = T.length - 1, o = N.length - 1;
            1 <= l && 0 <= o && T[l] !== N[o];

          )
            o--;
        for (; 1 <= l && 0 <= o; l--, o--)
          if (T[l] !== N[o]) {
            if (l !== 1 || o !== 1)
              do
                if ((l--, o--, 0 > o || T[l] !== N[o])) {
                  var H =
                    `
` + T[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      H.includes("<anonymous>") &&
                      (H = H.replace("<anonymous>", t.displayName)),
                    H
                  );
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      ((Bo = !1), (Error.prepareStackTrace = a));
    }
    return (a = t ? t.displayName || t.name : "") ? ri(a) : "";
  }
  function zb(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ri(t.type);
      case 16:
        return ri("Lazy");
      case 13:
        return ri("Suspense");
      case 19:
        return ri("SuspenseList");
      case 0:
      case 15:
        return _o(t.type, !1);
      case 11:
        return _o(t.type.render, !1);
      case 1:
        return _o(t.type, !0);
      case 31:
        return ri("Activity");
      default:
        return "";
    }
  }
  function Kd(t) {
    try {
      var e = "";
      do ((e += zb(t)), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function ke(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Zd(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Vb(t) {
    var e = Zd(t) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      l = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var o = a.get,
        c = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (y) {
            ((l = "" + y), c.call(this, y));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (y) {
            l = "" + y;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function ks(t) {
    t._valueTracker || (t._valueTracker = Vb(t));
  }
  function Qd(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(),
      l = "";
    return (
      t && (l = Zd(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== a ? (e.setValue(t), !0) : !1
    );
  }
  function Gs(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Lb = /[\n"\\]/g;
  function Ge(t) {
    return t.replace(Lb, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function jo(t, e, a, l, o, c, y, v) {
    ((t.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.type = y)
        : t.removeAttribute("type"),
      e != null
        ? y === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ke(e))
          : t.value !== "" + ke(e) && (t.value = "" + ke(e))
        : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
      e != null
        ? Ho(t, y, ke(e))
        : a != null
          ? Ho(t, y, ke(a))
          : l != null && t.removeAttribute("value"),
      o == null && c != null && (t.defaultChecked = !!c),
      o != null &&
        (t.checked = o && typeof o != "function" && typeof o != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + ke(v))
        : t.removeAttribute("name"));
  }
  function Pd(t, e, a, l, o, c, y, v) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.type = c),
      e != null || a != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || e != null)) return;
      ((a = a != null ? "" + ke(a) : ""),
        (e = e != null ? "" + ke(e) : a),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((l = l ?? o),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = v ? t.checked : !!l),
      (t.defaultChecked = !!l),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (t.name = y));
  }
  function Ho(t, e, a) {
    (e === "number" && Gs(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function oi(t, e, a, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var o = 0; o < a.length; o++) e["$" + a[o]] = !0;
      for (a = 0; a < t.length; a++)
        ((o = e.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== o && (t[a].selected = o),
          o && l && (t[a].defaultSelected = !0));
    } else {
      for (a = "" + ke(a), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === a) {
          ((t[o].selected = !0), l && (t[o].defaultSelected = !0));
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Fd(t, e, a) {
    if (
      e != null &&
      ((e = "" + ke(e)), e !== t.value && (t.value = e), a == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + ke(a) : "";
  }
  function Jd(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(r(92));
        if (Nt(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ""), (e = a));
    }
    ((a = ke(e)),
      (t.defaultValue = a),
      (l = t.textContent),
      l === a && l !== "" && l !== null && (t.value = l));
  }
  function ui(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Ub = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function $d(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : l
        ? t.setProperty(e, a)
        : typeof a != "number" || a === 0 || Ub.has(e)
          ? e === "float"
            ? (t.cssFloat = a)
            : (t[e] = ("" + a).trim())
          : (t[e] = a + "px");
  }
  function Wd(t, e, a) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
              ? (t.cssFloat = "")
              : (t[l] = ""));
      for (var o in e)
        ((l = e[o]), e.hasOwnProperty(o) && a[o] !== l && $d(t, o, l));
    } else for (var c in e) e.hasOwnProperty(c) && $d(t, c, e[c]);
  }
  function Yo(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Bb = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    _b =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Xs(t) {
    return _b.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var qo = null;
  function ko(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ci = null,
    fi = null;
  function Id(t) {
    var e = ii(t);
    if (e && (t = e.stateNode)) {
      var a = t[Vt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (jo(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (e = a.name),
            a.type === "radio" && e != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Ge("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < a.length;
              e++
            ) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var o = l[Vt] || null;
                if (!o) throw Error(r(90));
                jo(
                  l,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name,
                );
              }
            }
            for (e = 0; e < a.length; e++)
              ((l = a[e]), l.form === t.form && Qd(l));
          }
          break t;
        case "textarea":
          Fd(t, a.value, a.defaultValue);
          break t;
        case "select":
          ((e = a.value), e != null && oi(t, !!a.multiple, e, !1));
      }
    }
  }
  var Go = !1;
  function th(t, e, a) {
    if (Go) return t(e, a);
    Go = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((Go = !1),
        (ci !== null || fi !== null) &&
          (Cr(), ci && ((e = ci), (t = fi), (fi = ci = null), Id(e), t)))
      )
        for (e = 0; e < t.length; e++) Id(t[e]);
    }
  }
  function rl(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[Vt] || null;
    if (l === null) return null;
    a = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(r(231, e, typeof a));
    return a;
  }
  var Cn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Xo = !1;
  if (Cn)
    try {
      var ol = {};
      (Object.defineProperty(ol, "passive", {
        get: function () {
          Xo = !0;
        },
      }),
        window.addEventListener("test", ol, ol),
        window.removeEventListener("test", ol, ol));
    } catch {
      Xo = !1;
    }
  var Wn = null,
    Ko = null,
    Ks = null;
  function eh() {
    if (Ks) return Ks;
    var t,
      e = Ko,
      a = e.length,
      l,
      o = "value" in Wn ? Wn.value : Wn.textContent,
      c = o.length;
    for (t = 0; t < a && e[t] === o[t]; t++);
    var y = a - t;
    for (l = 1; l <= y && e[a - l] === o[c - l]; l++);
    return (Ks = o.slice(t, 1 < l ? 1 - l : void 0));
  }
  function Zs(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Qs() {
    return !0;
  }
  function nh() {
    return !1;
  }
  function De(t) {
    function e(a, l, o, c, y) {
      ((this._reactName = a),
        (this._targetInst = o),
        (this.type = l),
        (this.nativeEvent = c),
        (this.target = y),
        (this.currentTarget = null));
      for (var v in t)
        t.hasOwnProperty(v) && ((a = t[v]), (this[v] = a ? a(c) : c[v]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Qs
          : nh),
        (this.isPropagationStopped = nh),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Qs));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Qs));
        },
        persist: function () {},
        isPersistent: Qs,
      }),
      e
    );
  }
  var Oa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ps = De(Oa),
    ul = g({}, Oa, { view: 0, detail: 0 }),
    jb = De(ul),
    Zo,
    Qo,
    cl,
    Fs = g({}, ul, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Fo,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== cl &&
              (cl && t.type === "mousemove"
                ? ((Zo = t.screenX - cl.screenX), (Qo = t.screenY - cl.screenY))
                : (Qo = Zo = 0),
              (cl = t)),
            Zo);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Qo;
      },
    }),
    ah = De(Fs),
    Hb = g({}, Fs, { dataTransfer: 0 }),
    Yb = De(Hb),
    qb = g({}, ul, { relatedTarget: 0 }),
    Po = De(qb),
    kb = g({}, Oa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gb = De(kb),
    Xb = g({}, Oa, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Kb = De(Xb),
    Zb = g({}, Oa, { data: 0 }),
    ih = De(Zb),
    Qb = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Pb = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Fb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Jb(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Fb[t])
        ? !!e[t]
        : !1;
  }
  function Fo() {
    return Jb;
  }
  var $b = g({}, ul, {
      key: function (t) {
        if (t.key) {
          var e = Qb[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Zs(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Pb[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fo,
      charCode: function (t) {
        return t.type === "keypress" ? Zs(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Zs(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Wb = De($b),
    Ib = g({}, Fs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    lh = De(Ib),
    tS = g({}, ul, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fo,
    }),
    eS = De(tS),
    nS = g({}, Oa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    aS = De(nS),
    iS = g({}, Fs, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    lS = De(iS),
    sS = g({}, Oa, { newState: 0, oldState: 0 }),
    rS = De(sS),
    oS = [9, 13, 27, 32],
    Jo = Cn && "CompositionEvent" in window,
    fl = null;
  Cn && "documentMode" in document && (fl = document.documentMode);
  var uS = Cn && "TextEvent" in window && !fl,
    sh = Cn && (!Jo || (fl && 8 < fl && 11 >= fl)),
    rh = " ",
    oh = !1;
  function uh(t, e) {
    switch (t) {
      case "keyup":
        return oS.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ch(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var di = !1;
  function cS(t, e) {
    switch (t) {
      case "compositionend":
        return ch(e);
      case "keypress":
        return e.which !== 32 ? null : ((oh = !0), rh);
      case "textInput":
        return ((t = e.data), t === rh && oh ? null : t);
      default:
        return null;
    }
  }
  function fS(t, e) {
    if (di)
      return t === "compositionend" || (!Jo && uh(t, e))
        ? ((t = eh()), (Ks = Ko = Wn = null), (di = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return sh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var dS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function fh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!dS[t.type] : e === "textarea";
  }
  function dh(t, e, a, l) {
    (ci ? (fi ? fi.push(l) : (fi = [l])) : (ci = l),
      (e = Ur(e, "onChange")),
      0 < e.length &&
        ((a = new Ps("onChange", "change", null, a, l)),
        t.push({ event: a, listeners: e })));
  }
  var dl = null,
    hl = null;
  function hS(t) {
    Zp(t, 0);
  }
  function Js(t) {
    var e = sl(t);
    if (Qd(e)) return t;
  }
  function hh(t, e) {
    if (t === "change") return e;
  }
  var mh = !1;
  if (Cn) {
    var $o;
    if (Cn) {
      var Wo = "oninput" in document;
      if (!Wo) {
        var ph = document.createElement("div");
        (ph.setAttribute("oninput", "return;"),
          (Wo = typeof ph.oninput == "function"));
      }
      $o = Wo;
    } else $o = !1;
    mh = $o && (!document.documentMode || 9 < document.documentMode);
  }
  function gh() {
    dl && (dl.detachEvent("onpropertychange", yh), (hl = dl = null));
  }
  function yh(t) {
    if (t.propertyName === "value" && Js(hl)) {
      var e = [];
      (dh(e, hl, t, ko(t)), th(hS, e));
    }
  }
  function mS(t, e, a) {
    t === "focusin"
      ? (gh(), (dl = e), (hl = a), dl.attachEvent("onpropertychange", yh))
      : t === "focusout" && gh();
  }
  function pS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Js(hl);
  }
  function gS(t, e) {
    if (t === "click") return Js(e);
  }
  function yS(t, e) {
    if (t === "input" || t === "change") return Js(e);
  }
  function vS(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ue = typeof Object.is == "function" ? Object.is : vS;
  function ml(t, e) {
    if (Ue(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var a = Object.keys(t),
      l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var o = a[l];
      if (!Ae.call(e, o) || !Ue(t[o], e[o])) return !1;
    }
    return !0;
  }
  function vh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function bh(t, e) {
    var a = vh(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = t + a.textContent.length), t <= e && l >= e))
          return { node: a, offset: e - t };
        t = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = vh(a);
    }
  }
  function Sh(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Sh(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function xh(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Gs(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Gs(t.document);
    }
    return e;
  }
  function Io(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var bS = Cn && "documentMode" in document && 11 >= document.documentMode,
    hi = null,
    tu = null,
    pl = null,
    eu = !1;
  function Th(t, e, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    eu ||
      hi == null ||
      hi !== Gs(l) ||
      ((l = hi),
      "selectionStart" in l && Io(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (pl && ml(pl, l)) ||
        ((pl = l),
        (l = Ur(tu, "onSelect")),
        0 < l.length &&
          ((e = new Ps("onSelect", "select", null, e, a)),
          t.push({ event: e, listeners: l }),
          (e.target = hi))));
  }
  function Na(t, e) {
    var a = {};
    return (
      (a[t.toLowerCase()] = e.toLowerCase()),
      (a["Webkit" + t] = "webkit" + e),
      (a["Moz" + t] = "moz" + e),
      a
    );
  }
  var mi = {
      animationend: Na("Animation", "AnimationEnd"),
      animationiteration: Na("Animation", "AnimationIteration"),
      animationstart: Na("Animation", "AnimationStart"),
      transitionrun: Na("Transition", "TransitionRun"),
      transitionstart: Na("Transition", "TransitionStart"),
      transitioncancel: Na("Transition", "TransitionCancel"),
      transitionend: Na("Transition", "TransitionEnd"),
    },
    nu = {},
    Eh = {};
  Cn &&
    ((Eh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mi.animationend.animation,
      delete mi.animationiteration.animation,
      delete mi.animationstart.animation),
    "TransitionEvent" in window || delete mi.transitionend.transition);
  function za(t) {
    if (nu[t]) return nu[t];
    if (!mi[t]) return t;
    var e = mi[t],
      a;
    for (a in e) if (e.hasOwnProperty(a) && a in Eh) return (nu[t] = e[a]);
    return t;
  }
  var Ah = za("animationend"),
    Dh = za("animationiteration"),
    Rh = za("animationstart"),
    SS = za("transitionrun"),
    xS = za("transitionstart"),
    TS = za("transitioncancel"),
    wh = za("transitionend"),
    Mh = new Map(),
    au =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  au.push("scrollEnd");
  function sn(t, e) {
    (Mh.set(t, e), Ca(e, [t]));
  }
  var Ch = new WeakMap();
  function Xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = Ch.get(t);
      return a !== void 0
        ? a
        : ((e = { value: t, source: e, stack: Kd(e) }), Ch.set(t, e), e);
    }
    return { value: t, source: e, stack: Kd(e) };
  }
  var Ke = [],
    pi = 0,
    iu = 0;
  function $s() {
    for (var t = pi, e = (iu = pi = 0); e < t; ) {
      var a = Ke[e];
      Ke[e++] = null;
      var l = Ke[e];
      Ke[e++] = null;
      var o = Ke[e];
      Ke[e++] = null;
      var c = Ke[e];
      if (((Ke[e++] = null), l !== null && o !== null)) {
        var y = l.pending;
        (y === null ? (o.next = o) : ((o.next = y.next), (y.next = o)),
          (l.pending = o));
      }
      c !== 0 && Oh(a, o, c);
    }
  }
  function Ws(t, e, a, l) {
    ((Ke[pi++] = t),
      (Ke[pi++] = e),
      (Ke[pi++] = a),
      (Ke[pi++] = l),
      (iu |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function lu(t, e, a, l) {
    return (Ws(t, e, a, l), Is(t));
  }
  function gi(t, e) {
    return (Ws(t, null, null, e), Is(t));
  }
  function Oh(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var o = !1, c = t.return; c !== null; )
      ((c.childLanes |= a),
        (l = c.alternate),
        l !== null && (l.childLanes |= a),
        c.tag === 22 &&
          ((t = c.stateNode), t === null || t._visibility & 1 || (o = !0)),
        (t = c),
        (c = c.return));
    return t.tag === 3
      ? ((c = t.stateNode),
        o &&
          e !== null &&
          ((o = 31 - Wt(a)),
          (t = c.hiddenUpdates),
          (l = t[o]),
          l === null ? (t[o] = [e]) : l.push(e),
          (e.lane = a | 536870912)),
        c)
      : null;
  }
  function Is(t) {
    if (50 < Yl) throw ((Yl = 0), (fc = null), Error(r(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var yi = {};
  function ES(t, e, a, l) {
    ((this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Be(t, e, a, l) {
    return new ES(t, e, a, l);
  }
  function su(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function On(t, e) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = Be(t.tag, e, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = e),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (a.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function Nh(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (e = a.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function tr(t, e, a, l, o, c) {
    var y = 0;
    if (((l = t), typeof t == "function")) su(t) && (y = 1);
    else if (typeof t == "string")
      y = D1(t, a, tt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case I:
          return ((t = Be(31, a, e, o)), (t.elementType = I), (t.lanes = c), t);
        case C:
          return Va(a.children, o, c, e);
        case O:
          ((y = 8), (o |= 24));
          break;
        case M:
          return (
            (t = Be(12, a, e, o | 2)),
            (t.elementType = M),
            (t.lanes = c),
            t
          );
        case j:
          return ((t = Be(13, a, e, o)), (t.elementType = j), (t.lanes = c), t);
        case P:
          return ((t = Be(19, a, e, o)), (t.elementType = P), (t.lanes = c), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case z:
              case B:
                y = 10;
                break t;
              case L:
                y = 9;
                break t;
              case Z:
                y = 11;
                break t;
              case Q:
                y = 14;
                break t;
              case K:
                ((y = 16), (l = null));
                break t;
            }
          ((y = 29),
            (a = Error(r(130, t === null ? "null" : typeof t, ""))),
            (l = null));
      }
    return (
      (e = Be(y, a, e, o)),
      (e.elementType = t),
      (e.type = l),
      (e.lanes = c),
      e
    );
  }
  function Va(t, e, a, l) {
    return ((t = Be(7, t, l, e)), (t.lanes = a), t);
  }
  function ru(t, e, a) {
    return ((t = Be(6, t, null, e)), (t.lanes = a), t);
  }
  function ou(t, e, a) {
    return (
      (e = Be(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = a),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var vi = [],
    bi = 0,
    er = null,
    nr = 0,
    Ze = [],
    Qe = 0,
    La = null,
    Nn = 1,
    zn = "";
  function Ua(t, e) {
    ((vi[bi++] = nr), (vi[bi++] = er), (er = t), (nr = e));
  }
  function zh(t, e, a) {
    ((Ze[Qe++] = Nn), (Ze[Qe++] = zn), (Ze[Qe++] = La), (La = t));
    var l = Nn;
    t = zn;
    var o = 32 - Wt(l) - 1;
    ((l &= ~(1 << o)), (a += 1));
    var c = 32 - Wt(e) + o;
    if (30 < c) {
      var y = o - (o % 5);
      ((c = (l & ((1 << y) - 1)).toString(32)),
        (l >>= y),
        (o -= y),
        (Nn = (1 << (32 - Wt(e) + o)) | (a << o) | l),
        (zn = c + t));
    } else ((Nn = (1 << c) | (a << o) | l), (zn = t));
  }
  function uu(t) {
    t.return !== null && (Ua(t, 1), zh(t, 1, 0));
  }
  function cu(t) {
    for (; t === er; )
      ((er = vi[--bi]), (vi[bi] = null), (nr = vi[--bi]), (vi[bi] = null));
    for (; t === La; )
      ((La = Ze[--Qe]),
        (Ze[Qe] = null),
        (zn = Ze[--Qe]),
        (Ze[Qe] = null),
        (Nn = Ze[--Qe]),
        (Ze[Qe] = null));
  }
  var Te = null,
    Yt = null,
    xt = !1,
    Ba = null,
    pn = !1,
    fu = Error(r(519));
  function _a(t) {
    var e = Error(r(418, ""));
    throw (vl(Xe(e, t)), fu);
  }
  function Vh(t) {
    var e = t.stateNode,
      a = t.type,
      l = t.memoizedProps;
    switch (((e[zt] = t), (e[Vt] = l), a)) {
      case "dialog":
        (pt("cancel", e), pt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        pt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < kl.length; a++) pt(kl[a], e);
        break;
      case "source":
        pt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (pt("error", e), pt("load", e));
        break;
      case "details":
        pt("toggle", e);
        break;
      case "input":
        (pt("invalid", e),
          Pd(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ),
          ks(e));
        break;
      case "select":
        pt("invalid", e);
        break;
      case "textarea":
        (pt("invalid", e), Jd(e, l.value, l.defaultValue, l.children), ks(e));
    }
    ((a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      e.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      Jp(e.textContent, a)
        ? (l.popover != null && (pt("beforetoggle", e), pt("toggle", e)),
          l.onScroll != null && pt("scroll", e),
          l.onScrollEnd != null && pt("scrollend", e),
          l.onClick != null && (e.onclick = Br),
          (e = !0))
        : (e = !1),
      e || _a(t));
  }
  function Lh(t) {
    for (Te = t.return; Te; )
      switch (Te.tag) {
        case 5:
        case 13:
          pn = !1;
          return;
        case 27:
        case 3:
          pn = !0;
          return;
        default:
          Te = Te.return;
      }
  }
  function gl(t) {
    if (t !== Te) return !1;
    if (!xt) return (Lh(t), (xt = !0), !1);
    var e = t.tag,
      a;
    if (
      ((a = e !== 3 && e !== 27) &&
        ((a = e === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || wc(t.type, t.memoizedProps))),
        (a = !a)),
      a && Yt && _a(t),
      Lh(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((a = t.data), a === "/$")) {
              if (e === 0) {
                Yt = on(t.nextSibling);
                break t;
              }
              e--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || e++;
          t = t.nextSibling;
        }
        Yt = null;
      }
    } else
      e === 27
        ? ((e = Yt), ma(t.type) ? ((t = Nc), (Nc = null), (Yt = t)) : (Yt = e))
        : (Yt = Te ? on(t.stateNode.nextSibling) : null);
    return !0;
  }
  function yl() {
    ((Yt = Te = null), (xt = !1));
  }
  function Uh() {
    var t = Ba;
    return (
      t !== null &&
        (Me === null ? (Me = t) : Me.push.apply(Me, t), (Ba = null)),
      t
    );
  }
  function vl(t) {
    Ba === null ? (Ba = [t]) : Ba.push(t);
  }
  var du = k(null),
    ja = null,
    Vn = null;
  function In(t, e, a) {
    (J(du, e._currentValue), (e._currentValue = a));
  }
  function Ln(t) {
    ((t._currentValue = du.current), F(du));
  }
  function hu(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function mu(t, e, a, l) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null; ) {
      var c = o.dependencies;
      if (c !== null) {
        var y = o.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var v = c;
          c = o;
          for (var T = 0; T < e.length; T++)
            if (v.context === e[T]) {
              ((c.lanes |= a),
                (v = c.alternate),
                v !== null && (v.lanes |= a),
                hu(c.return, a, t),
                l || (y = null));
              break t;
            }
          c = v.next;
        }
      } else if (o.tag === 18) {
        if (((y = o.return), y === null)) throw Error(r(341));
        ((y.lanes |= a),
          (c = y.alternate),
          c !== null && (c.lanes |= a),
          hu(y, a, t),
          (y = null));
      } else y = o.child;
      if (y !== null) y.return = o;
      else
        for (y = o; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((o = y.sibling), o !== null)) {
            ((o.return = y.return), (y = o));
            break;
          }
          y = y.return;
        }
      o = y;
    }
  }
  function bl(t, e, a, l) {
    t = null;
    for (var o = e, c = !1; o !== null; ) {
      if (!c) {
        if ((o.flags & 524288) !== 0) c = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var y = o.alternate;
        if (y === null) throw Error(r(387));
        if (((y = y.memoizedProps), y !== null)) {
          var v = o.type;
          Ue(o.pendingProps.value, y.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (o === ne.current) {
        if (((y = o.alternate), y === null)) throw Error(r(387));
        y.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
          (t !== null ? t.push(Pl) : (t = [Pl]));
      }
      o = o.return;
    }
    (t !== null && mu(e, t, a, l), (e.flags |= 262144));
  }
  function ar(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ue(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ha(t) {
    ((ja = t),
      (Vn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function ye(t) {
    return Bh(ja, t);
  }
  function ir(t, e) {
    return (ja === null && Ha(t), Bh(t, e));
  }
  function Bh(t, e) {
    var a = e._currentValue;
    if (((e = { context: e, memoizedValue: a, next: null }), Vn === null)) {
      if (t === null) throw Error(r(308));
      ((Vn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Vn = Vn.next = e;
    return a;
  }
  var AS =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (a) {
                  return a();
                }));
            };
          },
    DS = n.unstable_scheduleCallback,
    RS = n.unstable_NormalPriority,
    It = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function pu() {
    return { controller: new AS(), data: new Map(), refCount: 0 };
  }
  function Sl(t) {
    (t.refCount--,
      t.refCount === 0 &&
        DS(RS, function () {
          t.controller.abort();
        }));
  }
  var xl = null,
    gu = 0,
    Si = 0,
    xi = null;
  function wS(t, e) {
    if (xl === null) {
      var a = (xl = []);
      ((gu = 0),
        (Si = vc()),
        (xi = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (gu++, e.then(_h, _h), e);
  }
  function _h() {
    if (--gu === 0 && xl !== null) {
      xi !== null && (xi.status = "fulfilled");
      var t = xl;
      ((xl = null), (Si = 0), (xi = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function MS(t, e) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          a.push(o);
        },
      };
    return (
      t.then(
        function () {
          ((l.status = "fulfilled"), (l.value = e));
          for (var o = 0; o < a.length; o++) (0, a[o])(e);
        },
        function (o) {
          for (l.status = "rejected", l.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        },
      ),
      l
    );
  }
  var jh = _.S;
  _.S = function (t, e) {
    (typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      wS(t, e),
      jh !== null && jh(t, e));
  };
  var Ya = k(null);
  function yu() {
    var t = Ya.current;
    return t !== null ? t : Ot.pooledCache;
  }
  function lr(t, e) {
    e === null ? J(Ya, Ya.current) : J(Ya, e.pool);
  }
  function Hh() {
    var t = yu();
    return t === null ? null : { parent: It._currentValue, pool: t };
  }
  var Tl = Error(r(460)),
    Yh = Error(r(474)),
    sr = Error(r(542)),
    vu = { then: function () {} };
  function qh(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function rr() {}
  function kh(t, e, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(e) : a !== e && (e.then(rr, rr), (e = a)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Xh(t), t);
      default:
        if (typeof e.status == "string") e.then(rr, rr);
        else {
          if (((t = Ot), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var o = e;
                  ((o.status = "fulfilled"), (o.value = l));
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var o = e;
                  ((o.status = "rejected"), (o.reason = l));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Xh(t), t);
        }
        throw ((El = e), Tl);
    }
  }
  var El = null;
  function Gh() {
    if (El === null) throw Error(r(459));
    var t = El;
    return ((El = null), t);
  }
  function Xh(t) {
    if (t === Tl || t === sr) throw Error(r(483));
  }
  var ta = !1;
  function bu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Su(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function ea(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function na(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Et & 2) !== 0)) {
      var o = l.pending;
      return (
        o === null ? (e.next = e) : ((e.next = o.next), (o.next = e)),
        (l.pending = e),
        (e = Is(t)),
        Oh(t, null, a),
        e
      );
    }
    return (Ws(t, l, e, a), Is(t));
  }
  function Al(t, e, a) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))
    ) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (a |= l), (e.lanes = a), ln(t, a));
    }
  }
  function xu(t, e) {
    var a = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var o = null,
        c = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var y = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (c === null ? (o = c = y) : (c = c.next = y), (a = a.next));
        } while (a !== null);
        c === null ? (o = c = e) : (c = c.next = e);
      } else o = c = e;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = a));
      return;
    }
    ((t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = e) : (t.next = e),
      (a.lastBaseUpdate = e));
  }
  var Tu = !1;
  function Dl() {
    if (Tu) {
      var t = xi;
      if (t !== null) throw t;
    }
  }
  function Rl(t, e, a, l) {
    Tu = !1;
    var o = t.updateQueue;
    ta = !1;
    var c = o.firstBaseUpdate,
      y = o.lastBaseUpdate,
      v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var T = v,
        N = T.next;
      ((T.next = null), y === null ? (c = N) : (y.next = N), (y = T));
      var H = t.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (v = H.lastBaseUpdate),
        v !== y &&
          (v === null ? (H.firstBaseUpdate = N) : (v.next = N),
          (H.lastBaseUpdate = T)));
    }
    if (c !== null) {
      var q = o.baseState;
      ((y = 0), (H = N = T = null), (v = c));
      do {
        var V = v.lane & -536870913,
          U = V !== v.lane;
        if (U ? (gt & V) === V : (l & V) === V) {
          (V !== 0 && V === Si && (Tu = !0),
            H !== null &&
              (H = H.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var st = t,
              at = v;
            V = e;
            var wt = a;
            switch (at.tag) {
              case 1:
                if (((st = at.payload), typeof st == "function")) {
                  q = st.call(wt, q, V);
                  break t;
                }
                q = st;
                break t;
              case 3:
                st.flags = (st.flags & -65537) | 128;
              case 0:
                if (
                  ((st = at.payload),
                  (V = typeof st == "function" ? st.call(wt, q, V) : st),
                  V == null)
                )
                  break t;
                q = g({}, q, V);
                break t;
              case 2:
                ta = !0;
            }
          }
          ((V = v.callback),
            V !== null &&
              ((t.flags |= 64),
              U && (t.flags |= 8192),
              (U = o.callbacks),
              U === null ? (o.callbacks = [V]) : U.push(V)));
        } else
          ((U = {
            lane: V,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            H === null ? ((N = H = U), (T = q)) : (H = H.next = U),
            (y |= V));
        if (((v = v.next), v === null)) {
          if (((v = o.shared.pending), v === null)) break;
          ((U = v),
            (v = U.next),
            (U.next = null),
            (o.lastBaseUpdate = U),
            (o.shared.pending = null));
        }
      } while (!0);
      (H === null && (T = q),
        (o.baseState = T),
        (o.firstBaseUpdate = N),
        (o.lastBaseUpdate = H),
        c === null && (o.shared.lanes = 0),
        (ca |= y),
        (t.lanes = y),
        (t.memoizedState = q));
    }
  }
  function Kh(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Zh(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) Kh(a[t], e);
  }
  var Ti = k(null),
    or = k(0);
  function Qh(t, e) {
    ((t = qn), J(or, t), J(Ti, e), (qn = t | e.baseLanes));
  }
  function Eu() {
    (J(or, qn), J(Ti, Ti.current));
  }
  function Au() {
    ((qn = or.current), F(Ti), F(or));
  }
  var aa = 0,
    ft = null,
    Dt = null,
    Ft = null,
    ur = !1,
    Ei = !1,
    qa = !1,
    cr = 0,
    wl = 0,
    Ai = null,
    CS = 0;
  function Kt() {
    throw Error(r(321));
  }
  function Du(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!Ue(t[a], e[a])) return !1;
    return !0;
  }
  function Ru(t, e, a, l, o, c) {
    return (
      (aa = c),
      (ft = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (_.H = t === null || t.memoizedState === null ? Om : Nm),
      (qa = !1),
      (c = a(l, o)),
      (qa = !1),
      Ei && (c = Fh(e, a, l, o)),
      Ph(t),
      c
    );
  }
  function Ph(t) {
    _.H = gr;
    var e = Dt !== null && Dt.next !== null;
    if (((aa = 0), (Ft = Dt = ft = null), (ur = !1), (wl = 0), (Ai = null), e))
      throw Error(r(300));
    t === null ||
      le ||
      ((t = t.dependencies), t !== null && ar(t) && (le = !0));
  }
  function Fh(t, e, a, l) {
    ft = t;
    var o = 0;
    do {
      if ((Ei && (Ai = null), (wl = 0), (Ei = !1), 25 <= o))
        throw Error(r(301));
      if (((o += 1), (Ft = Dt = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((_.H = BS), (c = e(a, l)));
    } while (Ei);
    return c;
  }
  function OS() {
    var t = _.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ml(e) : e),
      (t = t.useState()[0]),
      (Dt !== null ? Dt.memoizedState : null) !== t && (ft.flags |= 1024),
      e
    );
  }
  function wu() {
    var t = cr !== 0;
    return ((cr = 0), t);
  }
  function Mu(t, e, a) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a));
  }
  function Cu(t) {
    if (ur) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      ur = !1;
    }
    ((aa = 0), (Ft = Dt = ft = null), (Ei = !1), (wl = cr = 0), (Ai = null));
  }
  function Re() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ft === null ? (ft.memoizedState = Ft = t) : (Ft = Ft.next = t), Ft);
  }
  function Jt() {
    if (Dt === null) {
      var t = ft.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Dt.next;
    var e = Ft === null ? ft.memoizedState : Ft.next;
    if (e !== null) ((Ft = e), (Dt = t));
    else {
      if (t === null)
        throw ft.alternate === null ? Error(r(467)) : Error(r(310));
      ((Dt = t),
        (t = {
          memoizedState: Dt.memoizedState,
          baseState: Dt.baseState,
          baseQueue: Dt.baseQueue,
          queue: Dt.queue,
          next: null,
        }),
        Ft === null ? (ft.memoizedState = Ft = t) : (Ft = Ft.next = t));
    }
    return Ft;
  }
  function Ou() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ml(t) {
    var e = wl;
    return (
      (wl += 1),
      Ai === null && (Ai = []),
      (t = kh(Ai, t, e)),
      (e = ft),
      (Ft === null ? e.memoizedState : Ft.next) === null &&
        ((e = e.alternate),
        (_.H = e === null || e.memoizedState === null ? Om : Nm)),
      t
    );
  }
  function fr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ml(t);
      if (t.$$typeof === B) return ye(t);
    }
    throw Error(r(438, String(t)));
  }
  function Nu(t) {
    var e = null,
      a = ft.updateQueue;
    if ((a !== null && (e = a.memoCache), e == null)) {
      var l = ft.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (o) {
                return o.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      a === null && ((a = Ou()), (ft.updateQueue = a)),
      (a.memoCache = e),
      (a = e.data[e.index]),
      a === void 0)
    )
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++) a[l] = lt;
    return (e.index++, a);
  }
  function Un(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function dr(t) {
    var e = Jt();
    return zu(e, Dt, t);
  }
  function zu(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = a;
    var o = t.baseQueue,
      c = l.pending;
    if (c !== null) {
      if (o !== null) {
        var y = o.next;
        ((o.next = c.next), (c.next = y));
      }
      ((e.baseQueue = o = c), (l.pending = null));
    }
    if (((c = t.baseState), o === null)) t.memoizedState = c;
    else {
      e = o.next;
      var v = (y = null),
        T = null,
        N = e,
        H = !1;
      do {
        var q = N.lane & -536870913;
        if (q !== N.lane ? (gt & q) === q : (aa & q) === q) {
          var V = N.revertLane;
          if (V === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null,
                }),
              q === Si && (H = !0));
          else if ((aa & V) === V) {
            ((N = N.next), V === Si && (H = !0));
            continue;
          } else
            ((q = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              T === null ? ((v = T = q), (y = c)) : (T = T.next = q),
              (ft.lanes |= V),
              (ca |= V));
          ((q = N.action),
            qa && a(c, q),
            (c = N.hasEagerState ? N.eagerState : a(c, q)));
        } else
          ((V = {
            lane: q,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            T === null ? ((v = T = V), (y = c)) : (T = T.next = V),
            (ft.lanes |= q),
            (ca |= q));
        N = N.next;
      } while (N !== null && N !== e);
      if (
        (T === null ? (y = c) : (T.next = v),
        !Ue(c, t.memoizedState) && ((le = !0), H && ((a = xi), a !== null)))
      )
        throw a;
      ((t.memoizedState = c),
        (t.baseState = y),
        (t.baseQueue = T),
        (l.lastRenderedState = c));
    }
    return (o === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function Vu(t) {
    var e = Jt(),
      a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch,
      o = a.pending,
      c = e.memoizedState;
    if (o !== null) {
      a.pending = null;
      var y = (o = o.next);
      do ((c = t(c, y.action)), (y = y.next));
      while (y !== o);
      (Ue(c, e.memoizedState) || (le = !0),
        (e.memoizedState = c),
        e.baseQueue === null && (e.baseState = c),
        (a.lastRenderedState = c));
    }
    return [c, l];
  }
  function Jh(t, e, a) {
    var l = ft,
      o = Jt(),
      c = xt;
    if (c) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = e();
    var y = !Ue((Dt || o).memoizedState, a);
    (y && ((o.memoizedState = a), (le = !0)), (o = o.queue));
    var v = Ih.bind(null, l, o, t);
    if (
      (Cl(2048, 8, v, [t]),
      o.getSnapshot !== e || y || (Ft !== null && Ft.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Di(9, hr(), Wh.bind(null, l, o, a, e), null),
        Ot === null)
      )
        throw Error(r(349));
      c || (aa & 124) !== 0 || $h(l, e, a);
    }
    return a;
  }
  function $h(t, e, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: a }),
      (e = ft.updateQueue),
      e === null
        ? ((e = Ou()), (ft.updateQueue = e), (e.stores = [t]))
        : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t)));
  }
  function Wh(t, e, a, l) {
    ((e.value = a), (e.getSnapshot = l), tm(e) && em(t));
  }
  function Ih(t, e, a) {
    return a(function () {
      tm(e) && em(t);
    });
  }
  function tm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !Ue(t, a);
    } catch {
      return !0;
    }
  }
  function em(t) {
    var e = gi(t, 2);
    e !== null && qe(e, t, 2);
  }
  function Lu(t) {
    var e = Re();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), qa)) {
        Se(!0);
        try {
          a();
        } finally {
          Se(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Un,
        lastRenderedState: t,
      }),
      e
    );
  }
  function nm(t, e, a, l) {
    return ((t.baseState = a), zu(t, Dt, typeof l == "function" ? l : Un));
  }
  function NS(t, e, a, l, o) {
    if (pr(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var c = {
        payload: o,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          c.listeners.push(y);
        },
      };
      (_.T !== null ? a(!0) : (c.isTransition = !1),
        l(c),
        (a = e.pending),
        a === null
          ? ((c.next = e.pending = c), am(e, c))
          : ((c.next = a.next), (e.pending = a.next = c)));
    }
  }
  function am(t, e) {
    var a = e.action,
      l = e.payload,
      o = t.state;
    if (e.isTransition) {
      var c = _.T,
        y = {};
      _.T = y;
      try {
        var v = a(o, l),
          T = _.S;
        (T !== null && T(y, v), im(t, e, v));
      } catch (N) {
        Uu(t, e, N);
      } finally {
        _.T = c;
      }
    } else
      try {
        ((c = a(o, l)), im(t, e, c));
      } catch (N) {
        Uu(t, e, N);
      }
  }
  function im(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            lm(t, e, l);
          },
          function (l) {
            return Uu(t, e, l);
          },
        )
      : lm(t, e, a);
  }
  function lm(t, e, a) {
    ((e.status = "fulfilled"),
      (e.value = a),
      sm(e),
      (t.state = a),
      (e = t.pending),
      e !== null &&
        ((a = e.next),
        a === e ? (t.pending = null) : ((a = a.next), (e.next = a), am(t, a))));
  }
  function Uu(t, e, a) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = "rejected"), (e.reason = a), sm(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function sm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function rm(t, e) {
    return e;
  }
  function om(t, e) {
    if (xt) {
      var a = Ot.formState;
      if (a !== null) {
        t: {
          var l = ft;
          if (xt) {
            if (Yt) {
              e: {
                for (var o = Yt, c = pn; o.nodeType !== 8; ) {
                  if (!c) {
                    o = null;
                    break e;
                  }
                  if (((o = on(o.nextSibling)), o === null)) {
                    o = null;
                    break e;
                  }
                }
                ((c = o.data), (o = c === "F!" || c === "F" ? o : null));
              }
              if (o) {
                ((Yt = on(o.nextSibling)), (l = o.data === "F!"));
                break t;
              }
            }
            _a(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return (
      (a = Re()),
      (a.memoizedState = a.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rm,
        lastRenderedState: e,
      }),
      (a.queue = l),
      (a = wm.bind(null, ft, l)),
      (l.dispatch = a),
      (l = Lu(!1)),
      (c = Yu.bind(null, ft, !1, l.queue)),
      (l = Re()),
      (o = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = o),
      (a = NS.bind(null, ft, o, c, a)),
      (o.dispatch = a),
      (l.memoizedState = t),
      [e, a, !1]
    );
  }
  function um(t) {
    var e = Jt();
    return cm(e, Dt, t);
  }
  function cm(t, e, a) {
    if (
      ((e = zu(t, e, rm)[0]),
      (t = dr(Un)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = Ml(e);
      } catch (y) {
        throw y === Tl ? sr : y;
      }
    else l = e;
    e = Jt();
    var o = e.queue,
      c = o.dispatch;
    return (
      a !== e.memoizedState &&
        ((ft.flags |= 2048), Di(9, hr(), zS.bind(null, o, a), null)),
      [l, c, t]
    );
  }
  function zS(t, e) {
    t.action = e;
  }
  function fm(t) {
    var e = Jt(),
      a = Dt;
    if (a !== null) return cm(e, a, t);
    (Jt(), (e = e.memoizedState), (a = Jt()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = t), [e, l, !1]);
  }
  function Di(t, e, a, l) {
    return (
      (t = { tag: t, create: a, deps: l, inst: e, next: null }),
      (e = ft.updateQueue),
      e === null && ((e = Ou()), (ft.updateQueue = e)),
      (a = e.lastEffect),
      a === null
        ? (e.lastEffect = t.next = t)
        : ((l = a.next), (a.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function hr() {
    return { destroy: void 0, resource: void 0 };
  }
  function dm() {
    return Jt().memoizedState;
  }
  function mr(t, e, a, l) {
    var o = Re();
    ((l = l === void 0 ? null : l),
      (ft.flags |= t),
      (o.memoizedState = Di(1 | e, hr(), a, l)));
  }
  function Cl(t, e, a, l) {
    var o = Jt();
    l = l === void 0 ? null : l;
    var c = o.memoizedState.inst;
    Dt !== null && l !== null && Du(l, Dt.memoizedState.deps)
      ? (o.memoizedState = Di(e, c, a, l))
      : ((ft.flags |= t), (o.memoizedState = Di(1 | e, c, a, l)));
  }
  function hm(t, e) {
    mr(8390656, 8, t, e);
  }
  function mm(t, e) {
    Cl(2048, 8, t, e);
  }
  function pm(t, e) {
    return Cl(4, 2, t, e);
  }
  function gm(t, e) {
    return Cl(4, 4, t, e);
  }
  function ym(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function () {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function vm(t, e, a) {
    ((a = a != null ? a.concat([t]) : null), Cl(4, 4, ym.bind(null, e, t), a));
  }
  function Bu() {}
  function bm(t, e) {
    var a = Jt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && Du(e, l[1]) ? l[0] : ((a.memoizedState = [t, e]), t);
  }
  function Sm(t, e) {
    var a = Jt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && Du(e, l[1])) return l[0];
    if (((l = t()), qa)) {
      Se(!0);
      try {
        t();
      } finally {
        Se(!1);
      }
    }
    return ((a.memoizedState = [l, e]), l);
  }
  function _u(t, e, a) {
    return a === void 0 || (aa & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = a), (t = Ep()), (ft.lanes |= t), (ca |= t), a);
  }
  function xm(t, e, a, l) {
    return Ue(a, e)
      ? a
      : Ti.current !== null
        ? ((t = _u(t, a, l)), Ue(t, e) || (le = !0), t)
        : (aa & 42) === 0
          ? ((le = !0), (t.memoizedState = a))
          : ((t = Ep()), (ft.lanes |= t), (ca |= t), e);
  }
  function Tm(t, e, a, l, o) {
    var c = G.p;
    G.p = c !== 0 && 8 > c ? c : 8;
    var y = _.T,
      v = {};
    ((_.T = v), Yu(t, !1, e, a));
    try {
      var T = o(),
        N = _.S;
      if (
        (N !== null && N(v, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var H = MS(T, l);
        Ol(t, e, H, Ye(t));
      } else Ol(t, e, l, Ye(t));
    } catch (q) {
      Ol(t, e, { then: function () {}, status: "rejected", reason: q }, Ye());
    } finally {
      ((G.p = c), (_.T = y));
    }
  }
  function VS() {}
  function ju(t, e, a, l) {
    if (t.tag !== 5) throw Error(r(476));
    var o = Em(t).queue;
    Tm(
      t,
      o,
      e,
      $,
      a === null
        ? VS
        : function () {
            return (Am(t), a(l));
          },
    );
  }
  function Em(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Un,
        lastRenderedState: $,
      },
      next: null,
    };
    var a = {};
    return (
      (e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Un,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Am(t) {
    var e = Em(t).next.queue;
    Ol(t, e, {}, Ye());
  }
  function Hu() {
    return ye(Pl);
  }
  function Dm() {
    return Jt().memoizedState;
  }
  function Rm() {
    return Jt().memoizedState;
  }
  function LS(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = Ye();
          t = ea(a);
          var l = na(e, t, a);
          (l !== null && (qe(l, e, a), Al(l, e, a)),
            (e = { cache: pu() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function US(t, e, a) {
    var l = Ye();
    ((a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      pr(t)
        ? Mm(e, a)
        : ((a = lu(t, e, a, l)), a !== null && (qe(a, t, l), Cm(a, e, l))));
  }
  function wm(t, e, a) {
    var l = Ye();
    Ol(t, e, a, l);
  }
  function Ol(t, e, a, l) {
    var o = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (pr(t)) Mm(e, o);
    else {
      var c = t.alternate;
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = e.lastRenderedReducer), c !== null)
      )
        try {
          var y = e.lastRenderedState,
            v = c(y, a);
          if (((o.hasEagerState = !0), (o.eagerState = v), Ue(v, y)))
            return (Ws(t, e, o, 0), Ot === null && $s(), !1);
        } catch {
        } finally {
        }
      if (((a = lu(t, e, o, l)), a !== null))
        return (qe(a, t, l), Cm(a, e, l), !0);
    }
    return !1;
  }
  function Yu(t, e, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: vc(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      pr(t))
    ) {
      if (e) throw Error(r(479));
    } else ((e = lu(t, a, l, 2)), e !== null && qe(e, t, 2));
  }
  function pr(t) {
    var e = t.alternate;
    return t === ft || (e !== null && e === ft);
  }
  function Mm(t, e) {
    Ei = ur = !0;
    var a = t.pending;
    (a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
      (t.pending = e));
  }
  function Cm(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (a |= l), (e.lanes = a), ln(t, a));
    }
  }
  var gr = {
      readContext: ye,
      use: fr,
      useCallback: Kt,
      useContext: Kt,
      useEffect: Kt,
      useImperativeHandle: Kt,
      useLayoutEffect: Kt,
      useInsertionEffect: Kt,
      useMemo: Kt,
      useReducer: Kt,
      useRef: Kt,
      useState: Kt,
      useDebugValue: Kt,
      useDeferredValue: Kt,
      useTransition: Kt,
      useSyncExternalStore: Kt,
      useId: Kt,
      useHostTransitionStatus: Kt,
      useFormState: Kt,
      useActionState: Kt,
      useOptimistic: Kt,
      useMemoCache: Kt,
      useCacheRefresh: Kt,
    },
    Om = {
      readContext: ye,
      use: fr,
      useCallback: function (t, e) {
        return ((Re().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: ye,
      useEffect: hm,
      useImperativeHandle: function (t, e, a) {
        ((a = a != null ? a.concat([t]) : null),
          mr(4194308, 4, ym.bind(null, e, t), a));
      },
      useLayoutEffect: function (t, e) {
        return mr(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        mr(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var a = Re();
        e = e === void 0 ? null : e;
        var l = t();
        if (qa) {
          Se(!0);
          try {
            t();
          } finally {
            Se(!1);
          }
        }
        return ((a.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, a) {
        var l = Re();
        if (a !== void 0) {
          var o = a(e);
          if (qa) {
            Se(!0);
            try {
              a(e);
            } finally {
              Se(!1);
            }
          }
        } else o = e;
        return (
          (l.memoizedState = l.baseState = o),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: o,
          }),
          (l.queue = t),
          (t = t.dispatch = US.bind(null, ft, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Re();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Lu(t);
        var e = t.queue,
          a = wm.bind(null, ft, e);
        return ((e.dispatch = a), [t.memoizedState, a]);
      },
      useDebugValue: Bu,
      useDeferredValue: function (t, e) {
        var a = Re();
        return _u(a, t, e);
      },
      useTransition: function () {
        var t = Lu(!1);
        return (
          (t = Tm.bind(null, ft, t.queue, !0, !1)),
          (Re().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, a) {
        var l = ft,
          o = Re();
        if (xt) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = e()), Ot === null)) throw Error(r(349));
          (gt & 124) !== 0 || $h(l, e, a);
        }
        o.memoizedState = a;
        var c = { value: a, getSnapshot: e };
        return (
          (o.queue = c),
          hm(Ih.bind(null, l, c, t), [t]),
          (l.flags |= 2048),
          Di(9, hr(), Wh.bind(null, l, c, a, e), null),
          a
        );
      },
      useId: function () {
        var t = Re(),
          e = Ot.identifierPrefix;
        if (xt) {
          var a = zn,
            l = Nn;
          ((a = (l & ~(1 << (32 - Wt(l) - 1))).toString(32) + a),
            (e = "«" + e + "R" + a),
            (a = cr++),
            0 < a && (e += "H" + a.toString(32)),
            (e += "»"));
        } else ((a = CS++), (e = "«" + e + "r" + a.toString(32) + "»"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Hu,
      useFormState: om,
      useActionState: om,
      useOptimistic: function (t) {
        var e = Re();
        e.memoizedState = e.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = a),
          (e = Yu.bind(null, ft, !0, a)),
          (a.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Nu,
      useCacheRefresh: function () {
        return (Re().memoizedState = LS.bind(null, ft));
      },
    },
    Nm = {
      readContext: ye,
      use: fr,
      useCallback: bm,
      useContext: ye,
      useEffect: mm,
      useImperativeHandle: vm,
      useInsertionEffect: pm,
      useLayoutEffect: gm,
      useMemo: Sm,
      useReducer: dr,
      useRef: dm,
      useState: function () {
        return dr(Un);
      },
      useDebugValue: Bu,
      useDeferredValue: function (t, e) {
        var a = Jt();
        return xm(a, Dt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = dr(Un)[0],
          e = Jt().memoizedState;
        return [typeof t == "boolean" ? t : Ml(t), e];
      },
      useSyncExternalStore: Jh,
      useId: Dm,
      useHostTransitionStatus: Hu,
      useFormState: um,
      useActionState: um,
      useOptimistic: function (t, e) {
        var a = Jt();
        return nm(a, Dt, t, e);
      },
      useMemoCache: Nu,
      useCacheRefresh: Rm,
    },
    BS = {
      readContext: ye,
      use: fr,
      useCallback: bm,
      useContext: ye,
      useEffect: mm,
      useImperativeHandle: vm,
      useInsertionEffect: pm,
      useLayoutEffect: gm,
      useMemo: Sm,
      useReducer: Vu,
      useRef: dm,
      useState: function () {
        return Vu(Un);
      },
      useDebugValue: Bu,
      useDeferredValue: function (t, e) {
        var a = Jt();
        return Dt === null ? _u(a, t, e) : xm(a, Dt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Vu(Un)[0],
          e = Jt().memoizedState;
        return [typeof t == "boolean" ? t : Ml(t), e];
      },
      useSyncExternalStore: Jh,
      useId: Dm,
      useHostTransitionStatus: Hu,
      useFormState: fm,
      useActionState: fm,
      useOptimistic: function (t, e) {
        var a = Jt();
        return Dt !== null
          ? nm(a, Dt, t, e)
          : ((a.baseState = t), [t, a.queue.dispatch]);
      },
      useMemoCache: Nu,
      useCacheRefresh: Rm,
    },
    Ri = null,
    Nl = 0;
  function yr(t) {
    var e = Nl;
    return ((Nl += 1), Ri === null && (Ri = []), kh(Ri, t, e));
  }
  function zl(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function vr(t, e) {
    throw e.$$typeof === b
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function zm(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Vm(t) {
    function e(R, D) {
      if (t) {
        var w = R.deletions;
        w === null ? ((R.deletions = [D]), (R.flags |= 16)) : w.push(D);
      }
    }
    function a(R, D) {
      if (!t) return null;
      for (; D !== null; ) (e(R, D), (D = D.sibling));
      return null;
    }
    function l(R) {
      for (var D = new Map(); R !== null; )
        (R.key !== null ? D.set(R.key, R) : D.set(R.index, R), (R = R.sibling));
      return D;
    }
    function o(R, D) {
      return ((R = On(R, D)), (R.index = 0), (R.sibling = null), R);
    }
    function c(R, D, w) {
      return (
        (R.index = w),
        t
          ? ((w = R.alternate),
            w !== null
              ? ((w = w.index), w < D ? ((R.flags |= 67108866), D) : w)
              : ((R.flags |= 67108866), D))
          : ((R.flags |= 1048576), D)
      );
    }
    function y(R) {
      return (t && R.alternate === null && (R.flags |= 67108866), R);
    }
    function v(R, D, w, Y) {
      return D === null || D.tag !== 6
        ? ((D = ru(w, R.mode, Y)), (D.return = R), D)
        : ((D = o(D, w)), (D.return = R), D);
    }
    function T(R, D, w, Y) {
      var W = w.type;
      return W === C
        ? H(R, D, w.props.children, Y, w.key)
        : D !== null &&
            (D.elementType === W ||
              (typeof W == "object" &&
                W !== null &&
                W.$$typeof === K &&
                zm(W) === D.type))
          ? ((D = o(D, w.props)), zl(D, w), (D.return = R), D)
          : ((D = tr(w.type, w.key, w.props, null, R.mode, Y)),
            zl(D, w),
            (D.return = R),
            D);
    }
    function N(R, D, w, Y) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== w.containerInfo ||
        D.stateNode.implementation !== w.implementation
        ? ((D = ou(w, R.mode, Y)), (D.return = R), D)
        : ((D = o(D, w.children || [])), (D.return = R), D);
    }
    function H(R, D, w, Y, W) {
      return D === null || D.tag !== 7
        ? ((D = Va(w, R.mode, Y, W)), (D.return = R), D)
        : ((D = o(D, w)), (D.return = R), D);
    }
    function q(R, D, w) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return ((D = ru("" + D, R.mode, w)), (D.return = R), D);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case x:
            return (
              (w = tr(D.type, D.key, D.props, null, R.mode, w)),
              zl(w, D),
              (w.return = R),
              w
            );
          case E:
            return ((D = ou(D, R.mode, w)), (D.return = R), D);
          case K:
            var Y = D._init;
            return ((D = Y(D._payload)), q(R, D, w));
        }
        if (Nt(D) || St(D))
          return ((D = Va(D, R.mode, w, null)), (D.return = R), D);
        if (typeof D.then == "function") return q(R, yr(D), w);
        if (D.$$typeof === B) return q(R, ir(R, D), w);
        vr(R, D);
      }
      return null;
    }
    function V(R, D, w, Y) {
      var W = D !== null ? D.key : null;
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return W !== null ? null : v(R, D, "" + w, Y);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case x:
            return w.key === W ? T(R, D, w, Y) : null;
          case E:
            return w.key === W ? N(R, D, w, Y) : null;
          case K:
            return ((W = w._init), (w = W(w._payload)), V(R, D, w, Y));
        }
        if (Nt(w) || St(w)) return W !== null ? null : H(R, D, w, Y, null);
        if (typeof w.then == "function") return V(R, D, yr(w), Y);
        if (w.$$typeof === B) return V(R, D, ir(R, w), Y);
        vr(R, w);
      }
      return null;
    }
    function U(R, D, w, Y, W) {
      if (
        (typeof Y == "string" && Y !== "") ||
        typeof Y == "number" ||
        typeof Y == "bigint"
      )
        return ((R = R.get(w) || null), v(D, R, "" + Y, W));
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case x:
            return (
              (R = R.get(Y.key === null ? w : Y.key) || null),
              T(D, R, Y, W)
            );
          case E:
            return (
              (R = R.get(Y.key === null ? w : Y.key) || null),
              N(D, R, Y, W)
            );
          case K:
            var ht = Y._init;
            return ((Y = ht(Y._payload)), U(R, D, w, Y, W));
        }
        if (Nt(Y) || St(Y))
          return ((R = R.get(w) || null), H(D, R, Y, W, null));
        if (typeof Y.then == "function") return U(R, D, w, yr(Y), W);
        if (Y.$$typeof === B) return U(R, D, w, ir(D, Y), W);
        vr(D, Y);
      }
      return null;
    }
    function st(R, D, w, Y) {
      for (
        var W = null, ht = null, nt = D, it = (D = 0), re = null;
        nt !== null && it < w.length;
        it++
      ) {
        nt.index > it ? ((re = nt), (nt = null)) : (re = nt.sibling);
        var bt = V(R, nt, w[it], Y);
        if (bt === null) {
          nt === null && (nt = re);
          break;
        }
        (t && nt && bt.alternate === null && e(R, nt),
          (D = c(bt, D, it)),
          ht === null ? (W = bt) : (ht.sibling = bt),
          (ht = bt),
          (nt = re));
      }
      if (it === w.length) return (a(R, nt), xt && Ua(R, it), W);
      if (nt === null) {
        for (; it < w.length; it++)
          ((nt = q(R, w[it], Y)),
            nt !== null &&
              ((D = c(nt, D, it)),
              ht === null ? (W = nt) : (ht.sibling = nt),
              (ht = nt)));
        return (xt && Ua(R, it), W);
      }
      for (nt = l(nt); it < w.length; it++)
        ((re = U(nt, R, it, w[it], Y)),
          re !== null &&
            (t &&
              re.alternate !== null &&
              nt.delete(re.key === null ? it : re.key),
            (D = c(re, D, it)),
            ht === null ? (W = re) : (ht.sibling = re),
            (ht = re)));
      return (
        t &&
          nt.forEach(function (ba) {
            return e(R, ba);
          }),
        xt && Ua(R, it),
        W
      );
    }
    function at(R, D, w, Y) {
      if (w == null) throw Error(r(151));
      for (
        var W = null, ht = null, nt = D, it = (D = 0), re = null, bt = w.next();
        nt !== null && !bt.done;
        it++, bt = w.next()
      ) {
        nt.index > it ? ((re = nt), (nt = null)) : (re = nt.sibling);
        var ba = V(R, nt, bt.value, Y);
        if (ba === null) {
          nt === null && (nt = re);
          break;
        }
        (t && nt && ba.alternate === null && e(R, nt),
          (D = c(ba, D, it)),
          ht === null ? (W = ba) : (ht.sibling = ba),
          (ht = ba),
          (nt = re));
      }
      if (bt.done) return (a(R, nt), xt && Ua(R, it), W);
      if (nt === null) {
        for (; !bt.done; it++, bt = w.next())
          ((bt = q(R, bt.value, Y)),
            bt !== null &&
              ((D = c(bt, D, it)),
              ht === null ? (W = bt) : (ht.sibling = bt),
              (ht = bt)));
        return (xt && Ua(R, it), W);
      }
      for (nt = l(nt); !bt.done; it++, bt = w.next())
        ((bt = U(nt, R, it, bt.value, Y)),
          bt !== null &&
            (t &&
              bt.alternate !== null &&
              nt.delete(bt.key === null ? it : bt.key),
            (D = c(bt, D, it)),
            ht === null ? (W = bt) : (ht.sibling = bt),
            (ht = bt)));
      return (
        t &&
          nt.forEach(function (_1) {
            return e(R, _1);
          }),
        xt && Ua(R, it),
        W
      );
    }
    function wt(R, D, w, Y) {
      if (
        (typeof w == "object" &&
          w !== null &&
          w.type === C &&
          w.key === null &&
          (w = w.props.children),
        typeof w == "object" && w !== null)
      ) {
        switch (w.$$typeof) {
          case x:
            t: {
              for (var W = w.key; D !== null; ) {
                if (D.key === W) {
                  if (((W = w.type), W === C)) {
                    if (D.tag === 7) {
                      (a(R, D.sibling),
                        (Y = o(D, w.props.children)),
                        (Y.return = R),
                        (R = Y));
                      break t;
                    }
                  } else if (
                    D.elementType === W ||
                    (typeof W == "object" &&
                      W !== null &&
                      W.$$typeof === K &&
                      zm(W) === D.type)
                  ) {
                    (a(R, D.sibling),
                      (Y = o(D, w.props)),
                      zl(Y, w),
                      (Y.return = R),
                      (R = Y));
                    break t;
                  }
                  a(R, D);
                  break;
                } else e(R, D);
                D = D.sibling;
              }
              w.type === C
                ? ((Y = Va(w.props.children, R.mode, Y, w.key)),
                  (Y.return = R),
                  (R = Y))
                : ((Y = tr(w.type, w.key, w.props, null, R.mode, Y)),
                  zl(Y, w),
                  (Y.return = R),
                  (R = Y));
            }
            return y(R);
          case E:
            t: {
              for (W = w.key; D !== null; ) {
                if (D.key === W)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === w.containerInfo &&
                    D.stateNode.implementation === w.implementation
                  ) {
                    (a(R, D.sibling),
                      (Y = o(D, w.children || [])),
                      (Y.return = R),
                      (R = Y));
                    break t;
                  } else {
                    a(R, D);
                    break;
                  }
                else e(R, D);
                D = D.sibling;
              }
              ((Y = ou(w, R.mode, Y)), (Y.return = R), (R = Y));
            }
            return y(R);
          case K:
            return ((W = w._init), (w = W(w._payload)), wt(R, D, w, Y));
        }
        if (Nt(w)) return st(R, D, w, Y);
        if (St(w)) {
          if (((W = St(w)), typeof W != "function")) throw Error(r(150));
          return ((w = W.call(w)), at(R, D, w, Y));
        }
        if (typeof w.then == "function") return wt(R, D, yr(w), Y);
        if (w.$$typeof === B) return wt(R, D, ir(R, w), Y);
        vr(R, w);
      }
      return (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
        ? ((w = "" + w),
          D !== null && D.tag === 6
            ? (a(R, D.sibling), (Y = o(D, w)), (Y.return = R), (R = Y))
            : (a(R, D), (Y = ru(w, R.mode, Y)), (Y.return = R), (R = Y)),
          y(R))
        : a(R, D);
    }
    return function (R, D, w, Y) {
      try {
        Nl = 0;
        var W = wt(R, D, w, Y);
        return ((Ri = null), W);
      } catch (nt) {
        if (nt === Tl || nt === sr) throw nt;
        var ht = Be(29, nt, null, R.mode);
        return ((ht.lanes = Y), (ht.return = R), ht);
      } finally {
      }
    };
  }
  var wi = Vm(!0),
    Lm = Vm(!1),
    Pe = k(null),
    gn = null;
  function ia(t) {
    var e = t.alternate;
    (J(te, te.current & 1),
      J(Pe, t),
      gn === null &&
        (e === null || Ti.current !== null || e.memoizedState !== null) &&
        (gn = t));
  }
  function Um(t) {
    if (t.tag === 22) {
      if ((J(te, te.current), J(Pe, t), gn === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (gn = t);
      }
    } else la();
  }
  function la() {
    (J(te, te.current), J(Pe, Pe.current));
  }
  function Bn(t) {
    (F(Pe), gn === t && (gn = null), F(te));
  }
  var te = k(0);
  function br(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Oc(a))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  function qu(t, e, a, l) {
    ((e = t.memoizedState),
      (a = a(l, e)),
      (a = a == null ? e : g({}, e, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var ku = {
    enqueueSetState: function (t, e, a) {
      t = t._reactInternals;
      var l = Ye(),
        o = ea(l);
      ((o.payload = e),
        a != null && (o.callback = a),
        (e = na(t, o, l)),
        e !== null && (qe(e, t, l), Al(e, t, l)));
    },
    enqueueReplaceState: function (t, e, a) {
      t = t._reactInternals;
      var l = Ye(),
        o = ea(l);
      ((o.tag = 1),
        (o.payload = e),
        a != null && (o.callback = a),
        (e = na(t, o, l)),
        e !== null && (qe(e, t, l), Al(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var a = Ye(),
        l = ea(a);
      ((l.tag = 2),
        e != null && (l.callback = e),
        (e = na(t, l, a)),
        e !== null && (qe(e, t, a), Al(e, t, a)));
    },
  };
  function Bm(t, e, a, l, o, c, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, c, y)
        : e.prototype && e.prototype.isPureReactComponent
          ? !ml(a, l) || !ml(o, c)
          : !0
    );
  }
  function _m(t, e, a, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(a, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(a, l),
      e.state !== t && ku.enqueueReplaceState(e, e.state, null));
  }
  function ka(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e) l !== "ref" && (a[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      a === e && (a = g({}, a));
      for (var o in t) a[o] === void 0 && (a[o] = t[o]);
    }
    return a;
  }
  var Sr =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function jm(t) {
    Sr(t);
  }
  function Hm(t) {
    console.error(t);
  }
  function Ym(t) {
    Sr(t);
  }
  function xr(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function qm(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Gu(t, e, a) {
    return (
      (a = ea(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        xr(t, e);
      }),
      a
    );
  }
  function km(t) {
    return ((t = ea(t)), (t.tag = 3), t);
  }
  function Gm(t, e, a, l) {
    var o = a.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = l.value;
      ((t.payload = function () {
        return o(c);
      }),
        (t.callback = function () {
          qm(e, a, l);
        }));
    }
    var y = a.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (t.callback = function () {
        (qm(e, a, l),
          typeof o != "function" &&
            (fa === null ? (fa = new Set([this])) : fa.add(this)));
        var v = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function _S(t, e, a, l, o) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = a.alternate),
        e !== null && bl(e, a, o, !0),
        (a = Pe.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              gn === null ? hc() : a.alternate === null && qt === 0 && (qt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = o),
              l === vu
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null ? (a.updateQueue = new Set([l])) : e.add(l),
                  pc(t, l, o)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === vu
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = e))
                    : ((a = e.retryQueue),
                      a === null ? (e.retryQueue = new Set([l])) : a.add(l)),
                  pc(t, l, o)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return (pc(t, l, o), hc(), !1);
    }
    if (xt)
      return (
        (e = Pe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = o),
            l !== fu && ((t = Error(r(422), { cause: l })), vl(Xe(t, a))))
          : (l !== fu && ((e = Error(r(423), { cause: l })), vl(Xe(e, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (o &= -o),
            (t.lanes |= o),
            (l = Xe(l, a)),
            (o = Gu(t.stateNode, l, o)),
            xu(t, o),
            qt !== 4 && (qt = 2)),
        !1
      );
    var c = Error(r(520), { cause: l });
    if (
      ((c = Xe(c, a)),
      Hl === null ? (Hl = [c]) : Hl.push(c),
      qt !== 4 && (qt = 2),
      e === null)
    )
      return !0;
    ((l = Xe(l, a)), (a = e));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = o & -o),
            (a.lanes |= t),
            (t = Gu(a.stateNode, l, t)),
            xu(a, t),
            !1
          );
        case 1:
          if (
            ((e = a.type),
            (c = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (fa === null || !fa.has(c)))))
          )
            return (
              (a.flags |= 65536),
              (o &= -o),
              (a.lanes |= o),
              (o = km(o)),
              Gm(o, t, a, l),
              xu(a, o),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Xm = Error(r(461)),
    le = !1;
  function ce(t, e, a, l) {
    e.child = t === null ? Lm(e, null, a, l) : wi(e, t.child, a, l);
  }
  function Km(t, e, a, l, o) {
    a = a.render;
    var c = e.ref;
    if ("ref" in l) {
      var y = {};
      for (var v in l) v !== "ref" && (y[v] = l[v]);
    } else y = l;
    return (
      Ha(e),
      (l = Ru(t, e, a, y, c, o)),
      (v = wu()),
      t !== null && !le
        ? (Mu(t, e, o), _n(t, e, o))
        : (xt && v && uu(e), (e.flags |= 1), ce(t, e, l, o), e.child)
    );
  }
  function Zm(t, e, a, l, o) {
    if (t === null) {
      var c = a.type;
      return typeof c == "function" &&
        !su(c) &&
        c.defaultProps === void 0 &&
        a.compare === null
        ? ((e.tag = 15), (e.type = c), Qm(t, e, c, l, o))
        : ((t = tr(a.type, null, l, e, e.mode, o)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((c = t.child), !$u(t, o))) {
      var y = c.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : ml), a(y, l) && t.ref === e.ref)
      )
        return _n(t, e, o);
    }
    return (
      (e.flags |= 1),
      (t = On(c, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Qm(t, e, a, l, o) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (ml(c, l) && t.ref === e.ref)
        if (((le = !1), (e.pendingProps = l = c), $u(t, o)))
          (t.flags & 131072) !== 0 && (le = !0);
        else return ((e.lanes = t.lanes), _n(t, e, o));
    }
    return Xu(t, e, a, l, o);
  }
  function Pm(t, e, a) {
    var l = e.pendingProps,
      o = l.children,
      c = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((l = c !== null ? c.baseLanes | a : a), t !== null)) {
          for (o = e.child = t.child, c = 0; o !== null; )
            ((c = c | o.lanes | o.childLanes), (o = o.sibling));
          e.childLanes = c & ~l;
        } else ((e.childLanes = 0), (e.child = null));
        return Fm(t, e, l, a);
      }
      if ((a & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && lr(e, c !== null ? c.cachePool : null),
          c !== null ? Qh(e, c) : Eu(),
          Um(e));
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Fm(t, e, c !== null ? c.baseLanes | a : a, a)
        );
    } else
      c !== null
        ? (lr(e, c.cachePool), Qh(e, c), la(), (e.memoizedState = null))
        : (t !== null && lr(e, null), Eu(), la());
    return (ce(t, e, o, a), e.child);
  }
  function Fm(t, e, a, l) {
    var o = yu();
    return (
      (o = o === null ? null : { parent: It._currentValue, pool: o }),
      (e.memoizedState = { baseLanes: a, cachePool: o }),
      t !== null && lr(e, null),
      Eu(),
      Um(e),
      t !== null && bl(t, e, l, !0),
      null
    );
  }
  function Tr(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Xu(t, e, a, l, o) {
    return (
      Ha(e),
      (a = Ru(t, e, a, l, void 0, o)),
      (l = wu()),
      t !== null && !le
        ? (Mu(t, e, o), _n(t, e, o))
        : (xt && l && uu(e), (e.flags |= 1), ce(t, e, a, o), e.child)
    );
  }
  function Jm(t, e, a, l, o, c) {
    return (
      Ha(e),
      (e.updateQueue = null),
      (a = Fh(e, l, a, o)),
      Ph(t),
      (l = wu()),
      t !== null && !le
        ? (Mu(t, e, c), _n(t, e, c))
        : (xt && l && uu(e), (e.flags |= 1), ce(t, e, a, c), e.child)
    );
  }
  function $m(t, e, a, l, o) {
    if ((Ha(e), e.stateNode === null)) {
      var c = yi,
        y = a.contextType;
      (typeof y == "object" && y !== null && (c = ye(y)),
        (c = new a(l, c)),
        (e.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = ku),
        (e.stateNode = c),
        (c._reactInternals = e),
        (c = e.stateNode),
        (c.props = l),
        (c.state = e.memoizedState),
        (c.refs = {}),
        bu(e),
        (y = a.contextType),
        (c.context = typeof y == "object" && y !== null ? ye(y) : yi),
        (c.state = e.memoizedState),
        (y = a.getDerivedStateFromProps),
        typeof y == "function" && (qu(e, a, y, l), (c.state = e.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((y = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          y !== c.state && ku.enqueueReplaceState(c, c.state, null),
          Rl(e, l, c, o),
          Dl(),
          (c.state = e.memoizedState)),
        typeof c.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0));
    } else if (t === null) {
      c = e.stateNode;
      var v = e.memoizedProps,
        T = ka(a, v);
      c.props = T;
      var N = c.context,
        H = a.contextType;
      ((y = yi), typeof H == "object" && H !== null && (y = ye(H)));
      var q = a.getDerivedStateFromProps;
      ((H =
        typeof q == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        H ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((v || N !== y) && _m(e, c, l, y)),
        (ta = !1));
      var V = e.memoizedState;
      ((c.state = V),
        Rl(e, l, c, o),
        Dl(),
        (N = e.memoizedState),
        v || V !== N || ta
          ? (typeof q == "function" && (qu(e, a, q, l), (N = e.memoizedState)),
            (T = ta || Bm(e, a, T, l, V, N, y))
              ? (H ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = N)),
            (c.props = l),
            (c.state = N),
            (c.context = y),
            (l = T))
          : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1)));
    } else {
      ((c = e.stateNode),
        Su(t, e),
        (y = e.memoizedProps),
        (H = ka(a, y)),
        (c.props = H),
        (q = e.pendingProps),
        (V = c.context),
        (N = a.contextType),
        (T = yi),
        typeof N == "object" && N !== null && (T = ye(N)),
        (v = a.getDerivedStateFromProps),
        (N =
          typeof v == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((y !== q || V !== T) && _m(e, c, l, T)),
        (ta = !1),
        (V = e.memoizedState),
        (c.state = V),
        Rl(e, l, c, o),
        Dl());
      var U = e.memoizedState;
      y !== q ||
      V !== U ||
      ta ||
      (t !== null && t.dependencies !== null && ar(t.dependencies))
        ? (typeof v == "function" && (qu(e, a, v, l), (U = e.memoizedState)),
          (H =
            ta ||
            Bm(e, a, H, l, V, U, T) ||
            (t !== null && t.dependencies !== null && ar(t.dependencies)))
            ? (N ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(l, U, T),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(l, U, T)),
              typeof c.componentDidUpdate == "function" && (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (y === t.memoizedProps && V === t.memoizedState) ||
                (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (y === t.memoizedProps && V === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = U)),
          (c.props = l),
          (c.state = U),
          (c.context = T),
          (l = H))
        : (typeof c.componentDidUpdate != "function" ||
            (y === t.memoizedProps && V === t.memoizedState) ||
            (e.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (y === t.memoizedProps && V === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (c = l),
      Tr(t, e),
      (l = (e.flags & 128) !== 0),
      c || l
        ? ((c = e.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = wi(e, t.child, null, o)),
              (e.child = wi(e, null, a, o)))
            : ce(t, e, a, o),
          (e.memoizedState = c.state),
          (t = e.child))
        : (t = _n(t, e, o)),
      t
    );
  }
  function Wm(t, e, a, l) {
    return (yl(), (e.flags |= 256), ce(t, e, a, l), e.child);
  }
  var Ku = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Zu(t) {
    return { baseLanes: t, cachePool: Hh() };
  }
  function Qu(t, e, a) {
    return ((t = t !== null ? t.childLanes & ~a : 0), e && (t |= Fe), t);
  }
  function Im(t, e, a) {
    var l = e.pendingProps,
      o = !1,
      c = (e.flags & 128) !== 0,
      y;
    if (
      ((y = c) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : (te.current & 2) !== 0),
      y && ((o = !0), (e.flags &= -129)),
      (y = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (xt) {
        if ((o ? ia(e) : la(), xt)) {
          var v = Yt,
            T;
          if ((T = v)) {
            t: {
              for (T = v, v = pn; T.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (((T = on(T.nextSibling)), T === null)) {
                  v = null;
                  break t;
                }
              }
              v = T;
            }
            v !== null
              ? ((e.memoizedState = {
                  dehydrated: v,
                  treeContext: La !== null ? { id: Nn, overflow: zn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (T = Be(18, null, null, 0)),
                (T.stateNode = v),
                (T.return = e),
                (e.child = T),
                (Te = e),
                (Yt = null),
                (T = !0))
              : (T = !1);
          }
          T || _a(e);
        }
        if (
          ((v = e.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return (Oc(v) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        Bn(e);
      }
      return (
        (v = l.children),
        (l = l.fallback),
        o
          ? (la(),
            (o = e.mode),
            (v = Er({ mode: "hidden", children: v }, o)),
            (l = Va(l, o, a, null)),
            (v.return = e),
            (l.return = e),
            (v.sibling = l),
            (e.child = v),
            (o = e.child),
            (o.memoizedState = Zu(a)),
            (o.childLanes = Qu(t, y, a)),
            (e.memoizedState = Ku),
            l)
          : (ia(e), Pu(e, v))
      );
    }
    if (
      ((T = t.memoizedState), T !== null && ((v = T.dehydrated), v !== null))
    ) {
      if (c)
        e.flags & 256
          ? (ia(e), (e.flags &= -257), (e = Fu(t, e, a)))
          : e.memoizedState !== null
            ? (la(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (la(),
              (o = l.fallback),
              (v = e.mode),
              (l = Er({ mode: "visible", children: l.children }, v)),
              (o = Va(o, v, a, null)),
              (o.flags |= 2),
              (l.return = e),
              (o.return = e),
              (l.sibling = o),
              (e.child = l),
              wi(e, t.child, null, a),
              (l = e.child),
              (l.memoizedState = Zu(a)),
              (l.childLanes = Qu(t, y, a)),
              (e.memoizedState = Ku),
              (e = o));
      else if ((ia(e), Oc(v))) {
        if (((y = v.nextSibling && v.nextSibling.dataset), y)) var N = y.dgst;
        ((y = N),
          (l = Error(r(419))),
          (l.stack = ""),
          (l.digest = y),
          vl({ value: l, source: null, stack: null }),
          (e = Fu(t, e, a)));
      } else if (
        (le || bl(t, e, a, !1), (y = (a & t.childLanes) !== 0), le || y)
      ) {
        if (
          ((y = Ot),
          y !== null &&
            ((l = a & -a),
            (l = (l & 42) !== 0 ? 1 : pe(l)),
            (l = (l & (y.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== T.retryLane))
        )
          throw ((T.retryLane = l), gi(t, l), qe(y, t, l), Xm);
        (v.data === "$?" || hc(), (e = Fu(t, e, a)));
      } else
        v.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (Yt = on(v.nextSibling)),
            (Te = e),
            (xt = !0),
            (Ba = null),
            (pn = !1),
            t !== null &&
              ((Ze[Qe++] = Nn),
              (Ze[Qe++] = zn),
              (Ze[Qe++] = La),
              (Nn = t.id),
              (zn = t.overflow),
              (La = e)),
            (e = Pu(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return o
      ? (la(),
        (o = l.fallback),
        (v = e.mode),
        (T = t.child),
        (N = T.sibling),
        (l = On(T, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = T.subtreeFlags & 65011712),
        N !== null ? (o = On(N, o)) : ((o = Va(o, v, a, null)), (o.flags |= 2)),
        (o.return = e),
        (l.return = e),
        (l.sibling = o),
        (e.child = l),
        (l = o),
        (o = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = Zu(a))
          : ((T = v.cachePool),
            T !== null
              ? ((N = It._currentValue),
                (T = T.parent !== N ? { parent: N, pool: N } : T))
              : (T = Hh()),
            (v = { baseLanes: v.baseLanes | a, cachePool: T })),
        (o.memoizedState = v),
        (o.childLanes = Qu(t, y, a)),
        (e.memoizedState = Ku),
        l)
      : (ia(e),
        (a = t.child),
        (t = a.sibling),
        (a = On(a, { mode: "visible", children: l.children })),
        (a.return = e),
        (a.sibling = null),
        t !== null &&
          ((y = e.deletions),
          y === null ? ((e.deletions = [t]), (e.flags |= 16)) : y.push(t)),
        (e.child = a),
        (e.memoizedState = null),
        a);
  }
  function Pu(t, e) {
    return (
      (e = Er({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Er(t, e) {
    return (
      (t = Be(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Fu(t, e, a) {
    return (
      wi(e, t.child, null, a),
      (t = Pu(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function tp(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), hu(t.return, e, a));
  }
  function Ju(t, e, a, l, o) {
    var c = t.memoizedState;
    c === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: o,
        })
      : ((c.isBackwards = e),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = l),
        (c.tail = a),
        (c.tailMode = o));
  }
  function ep(t, e, a) {
    var l = e.pendingProps,
      o = l.revealOrder,
      c = l.tail;
    if ((ce(t, e, l.children, a), (l = te.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (e.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && tp(t, a, e);
          else if (t.tag === 19) tp(t, a, e);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      l &= 1;
    }
    switch ((J(te, l), o)) {
      case "forwards":
        for (a = e.child, o = null; a !== null; )
          ((t = a.alternate),
            t !== null && br(t) === null && (o = a),
            (a = a.sibling));
        ((a = o),
          a === null
            ? ((o = e.child), (e.child = null))
            : ((o = a.sibling), (a.sibling = null)),
          Ju(e, !1, o, a, c));
        break;
      case "backwards":
        for (a = null, o = e.child, e.child = null; o !== null; ) {
          if (((t = o.alternate), t !== null && br(t) === null)) {
            e.child = o;
            break;
          }
          ((t = o.sibling), (o.sibling = a), (a = o), (o = t));
        }
        Ju(e, !0, a, null, c);
        break;
      case "together":
        Ju(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function _n(t, e, a) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ca |= e.lanes),
      (a & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((bl(t, e, a, !1), (a & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, a = On(t, t.pendingProps), e.child = a, a.return = e;
        t.sibling !== null;

      )
        ((t = t.sibling),
          (a = a.sibling = On(t, t.pendingProps)),
          (a.return = e));
      a.sibling = null;
    }
    return e.child;
  }
  function $u(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && ar(t)));
  }
  function jS(t, e, a) {
    switch (e.tag) {
      case 3:
        (yt(e, e.stateNode.containerInfo),
          In(e, It, t.memoizedState.cache),
          yl());
        break;
      case 27:
      case 5:
        vt(e);
        break;
      case 4:
        yt(e, e.stateNode.containerInfo);
        break;
      case 10:
        In(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (ia(e), (e.flags |= 128), null)
            : (a & e.child.childLanes) !== 0
              ? Im(t, e, a)
              : (ia(e), (t = _n(t, e, a)), t !== null ? t.sibling : null);
        ia(e);
        break;
      case 19:
        var o = (t.flags & 128) !== 0;
        if (
          ((l = (a & e.childLanes) !== 0),
          l || (bl(t, e, a, !1), (l = (a & e.childLanes) !== 0)),
          o)
        ) {
          if (l) return ep(t, e, a);
          e.flags |= 128;
        }
        if (
          ((o = e.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          J(te, te.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((e.lanes = 0), Pm(t, e, a));
      case 24:
        In(e, It, t.memoizedState.cache);
    }
    return _n(t, e, a);
  }
  function np(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) le = !0;
      else {
        if (!$u(t, a) && (e.flags & 128) === 0) return ((le = !1), jS(t, e, a));
        le = (t.flags & 131072) !== 0;
      }
    else ((le = !1), xt && (e.flags & 1048576) !== 0 && zh(e, nr, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType,
            o = l._init;
          if (((l = o(l._payload)), (e.type = l), typeof l == "function"))
            su(l)
              ? ((t = ka(l, t)), (e.tag = 1), (e = $m(null, e, l, t, a)))
              : ((e.tag = 0), (e = Xu(null, e, l, t, a)));
          else {
            if (l != null) {
              if (((o = l.$$typeof), o === Z)) {
                ((e.tag = 11), (e = Km(null, e, l, t, a)));
                break t;
              } else if (o === Q) {
                ((e.tag = 14), (e = Zm(null, e, l, t, a)));
                break t;
              }
            }
            throw ((e = Xt(l) || l), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Xu(t, e, e.type, e.pendingProps, a);
      case 1:
        return ((l = e.type), (o = ka(l, e.pendingProps)), $m(t, e, l, o, a));
      case 3:
        t: {
          if ((yt(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          l = e.pendingProps;
          var c = e.memoizedState;
          ((o = c.element), Su(t, e), Rl(e, l, null, a));
          var y = e.memoizedState;
          if (
            ((l = y.cache),
            In(e, It, l),
            l !== c.cache && mu(e, [It], a, !0),
            Dl(),
            (l = y.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: l, isDehydrated: !1, cache: y.cache }),
              (e.updateQueue.baseState = c),
              (e.memoizedState = c),
              e.flags & 256)
            ) {
              e = Wm(t, e, l, a);
              break t;
            } else if (l !== o) {
              ((o = Xe(Error(r(424)), e)), vl(o), (e = Wm(t, e, l, a)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Yt = on(t.firstChild),
                  Te = e,
                  xt = !0,
                  Ba = null,
                  pn = !0,
                  a = Lm(e, null, l, a),
                  e.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((yl(), l === o)) {
              e = _n(t, e, a);
              break t;
            }
            ce(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Tr(t, e),
          t === null
            ? (a = sg(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = a)
              : xt ||
                ((a = e.type),
                (t = e.pendingProps),
                (l = _r(et.current).createElement(a)),
                (l[zt] = e),
                (l[Vt] = t),
                de(l, a, t),
                ie(l),
                (e.stateNode = l))
            : (e.memoizedState = sg(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          vt(e),
          t === null &&
            xt &&
            ((l = e.stateNode = ag(e.type, e.pendingProps, et.current)),
            (Te = e),
            (pn = !0),
            (o = Yt),
            ma(e.type) ? ((Nc = o), (Yt = on(l.firstChild))) : (Yt = o)),
          ce(t, e, e.pendingProps.children, a),
          Tr(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            xt &&
            ((o = l = Yt) &&
              ((l = d1(l, e.type, e.pendingProps, pn)),
              l !== null
                ? ((e.stateNode = l),
                  (Te = e),
                  (Yt = on(l.firstChild)),
                  (pn = !1),
                  (o = !0))
                : (o = !1)),
            o || _a(e)),
          vt(e),
          (o = e.type),
          (c = e.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (l = c.children),
          wc(o, c) ? (l = null) : y !== null && wc(o, y) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((o = Ru(t, e, OS, null, null, a)), (Pl._currentValue = o)),
          Tr(t, e),
          ce(t, e, l, a),
          e.child
        );
      case 6:
        return (
          t === null &&
            xt &&
            ((t = a = Yt) &&
              ((a = h1(a, e.pendingProps, pn)),
              a !== null
                ? ((e.stateNode = a), (Te = e), (Yt = null), (t = !0))
                : (t = !1)),
            t || _a(e)),
          null
        );
      case 13:
        return Im(t, e, a);
      case 4:
        return (
          yt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = wi(e, null, l, a)) : ce(t, e, l, a),
          e.child
        );
      case 11:
        return Km(t, e, e.type, e.pendingProps, a);
      case 7:
        return (ce(t, e, e.pendingProps, a), e.child);
      case 8:
        return (ce(t, e, e.pendingProps.children, a), e.child);
      case 12:
        return (ce(t, e, e.pendingProps.children, a), e.child);
      case 10:
        return (
          (l = e.pendingProps),
          In(e, e.type, l.value),
          ce(t, e, l.children, a),
          e.child
        );
      case 9:
        return (
          (o = e.type._context),
          (l = e.pendingProps.children),
          Ha(e),
          (o = ye(o)),
          (l = l(o)),
          (e.flags |= 1),
          ce(t, e, l, a),
          e.child
        );
      case 14:
        return Zm(t, e, e.type, e.pendingProps, a);
      case 15:
        return Qm(t, e, e.type, e.pendingProps, a);
      case 19:
        return ep(t, e, a);
      case 31:
        return (
          (l = e.pendingProps),
          (a = e.mode),
          (l = { mode: l.mode, children: l.children }),
          t === null
            ? ((a = Er(l, a)),
              (a.ref = e.ref),
              (e.child = a),
              (a.return = e),
              (e = a))
            : ((a = On(t.child, l)),
              (a.ref = e.ref),
              (e.child = a),
              (a.return = e),
              (e = a)),
          e
        );
      case 22:
        return Pm(t, e, a);
      case 24:
        return (
          Ha(e),
          (l = ye(It)),
          t === null
            ? ((o = yu()),
              o === null &&
                ((o = Ot),
                (c = pu()),
                (o.pooledCache = c),
                c.refCount++,
                c !== null && (o.pooledCacheLanes |= a),
                (o = c)),
              (e.memoizedState = { parent: l, cache: o }),
              bu(e),
              In(e, It, o))
            : ((t.lanes & a) !== 0 && (Su(t, e), Rl(e, null, null, a), Dl()),
              (o = t.memoizedState),
              (c = e.memoizedState),
              o.parent !== l
                ? ((o = { parent: l, cache: l }),
                  (e.memoizedState = o),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = o),
                  In(e, It, l))
                : ((l = c.cache),
                  In(e, It, l),
                  l !== o.cache && mu(e, [It], a, !0))),
          ce(t, e, e.pendingProps.children, a),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function jn(t) {
    t.flags |= 4;
  }
  function ap(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !fg(e))) {
      if (
        ((e = Pe.current),
        e !== null &&
          ((gt & 4194048) === gt
            ? gn !== null
            : ((gt & 62914560) !== gt && (gt & 536870912) === 0) || e !== gn))
      )
        throw ((El = vu), Yh);
      t.flags |= 8192;
    }
  }
  function Ar(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Hs() : 536870912), (t.lanes |= e), (Ni |= e)));
  }
  function Vl(t, e) {
    if (!xt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; )
            (e.alternate !== null && (a = e), (e = e.sibling));
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var l = null; a !== null; )
            (a.alternate !== null && (l = a), (a = a.sibling));
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Bt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      l = 0;
    if (e)
      for (var o = t.child; o !== null; )
        ((a |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags & 65011712),
          (l |= o.flags & 65011712),
          (o.return = t),
          (o = o.sibling));
    else
      for (o = t.child; o !== null; )
        ((a |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags),
          (l |= o.flags),
          (o.return = t),
          (o = o.sibling));
    return ((t.subtreeFlags |= l), (t.childLanes = a), e);
  }
  function HS(t, e, a) {
    var l = e.pendingProps;
    switch ((cu(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Bt(e), null);
      case 1:
        return (Bt(e), null);
      case 3:
        return (
          (a = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ln(It),
          ae(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (gl(e)
              ? jn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Uh())),
          Bt(e),
          null
        );
      case 26:
        return (
          (a = e.memoizedState),
          t === null
            ? (jn(e),
              a !== null ? (Bt(e), ap(e, a)) : (Bt(e), (e.flags &= -16777217)))
            : a
              ? a !== t.memoizedState
                ? (jn(e), Bt(e), ap(e, a))
                : (Bt(e), (e.flags &= -16777217))
              : (t.memoizedProps !== l && jn(e), Bt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        (fn(e), (a = et.current));
        var o = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && jn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(r(166));
            return (Bt(e), null);
          }
          ((t = tt.current),
            gl(e) ? Vh(e) : ((t = ag(o, l, a)), (e.stateNode = t), jn(e)));
        }
        return (Bt(e), null);
      case 5:
        if ((fn(e), (a = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && jn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(r(166));
            return (Bt(e), null);
          }
          if (((t = tt.current), gl(e))) Vh(e);
          else {
            switch (((o = _r(et.current)), t)) {
              case 1:
                t = o.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                t = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    t = o.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    t = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    ((t = o.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case "select":
                    ((t =
                      typeof l.is == "string"
                        ? o.createElement("select", { is: l.is })
                        : o.createElement("select")),
                      l.multiple
                        ? (t.multiple = !0)
                        : l.size && (t.size = l.size));
                    break;
                  default:
                    t =
                      typeof l.is == "string"
                        ? o.createElement(a, { is: l.is })
                        : o.createElement(a);
                }
            }
            ((t[zt] = e), (t[Vt] = l));
            t: for (o = e.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) t.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                ((o.child.return = o), (o = o.child));
                continue;
              }
              if (o === e) break t;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === e) break t;
                o = o.return;
              }
              ((o.sibling.return = o.return), (o = o.sibling));
            }
            e.stateNode = t;
            t: switch ((de(t, a, l), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && jn(e);
          }
        }
        return (Bt(e), (e.flags &= -16777217), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && jn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = et.current), gl(e))) {
            if (
              ((t = e.stateNode),
              (a = e.memoizedProps),
              (l = null),
              (o = Te),
              o !== null)
            )
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            ((t[zt] = e),
              (t = !!(
                t.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Jp(t.nodeValue, a)
              )),
              t || _a(e));
          } else
            ((t = _r(t).createTextNode(l)), (t[zt] = e), (e.stateNode = t));
        }
        return (Bt(e), null);
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((o = gl(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!o) throw Error(r(318));
              if (
                ((o = e.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(r(317));
              o[zt] = e;
            } else
              (yl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Bt(e), (o = !1));
          } else
            ((o = Uh()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = o),
              (o = !0));
          if (!o) return e.flags & 256 ? (Bn(e), e) : (Bn(e), null);
        }
        if ((Bn(e), (e.flags & 128) !== 0)) return ((e.lanes = a), e);
        if (
          ((a = l !== null), (t = t !== null && t.memoizedState !== null), a)
        ) {
          ((l = e.child),
            (o = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (o = l.alternate.memoizedState.cachePool.pool));
          var c = null;
          (l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (c = l.memoizedState.cachePool.pool),
            c !== o && (l.flags |= 2048));
        }
        return (
          a !== t && a && (e.child.flags |= 8192),
          Ar(e, e.updateQueue),
          Bt(e),
          null
        );
      case 4:
        return (ae(), t === null && Tc(e.stateNode.containerInfo), Bt(e), null);
      case 10:
        return (Ln(e.type), Bt(e), null);
      case 19:
        if ((F(te), (o = e.memoizedState), o === null)) return (Bt(e), null);
        if (((l = (e.flags & 128) !== 0), (c = o.rendering), c === null))
          if (l) Vl(o, !1);
          else {
            if (qt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((c = br(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      Vl(o, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      Ar(e, t),
                      e.subtreeFlags = 0,
                      t = a,
                      a = e.child;
                    a !== null;

                  )
                    (Nh(a, t), (a = a.sibling));
                  return (J(te, (te.current & 1) | 2), e.child);
                }
                t = t.sibling;
              }
            o.tail !== null &&
              Ve() > wr &&
              ((e.flags |= 128), (l = !0), Vl(o, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = br(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ar(e, t),
                Vl(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !c.alternate &&
                  !xt)
              )
                return (Bt(e), null);
            } else
              2 * Ve() - o.renderingStartTime > wr &&
                a !== 536870912 &&
                ((e.flags |= 128), (l = !0), Vl(o, !1), (e.lanes = 4194304));
          o.isBackwards
            ? ((c.sibling = e.child), (e.child = c))
            : ((t = o.last),
              t !== null ? (t.sibling = c) : (e.child = c),
              (o.last = c));
        }
        return o.tail !== null
          ? ((e = o.tail),
            (o.rendering = e),
            (o.tail = e.sibling),
            (o.renderingStartTime = Ve()),
            (e.sibling = null),
            (t = te.current),
            J(te, l ? (t & 1) | 2 : t & 1),
            e)
          : (Bt(e), null);
      case 22:
      case 23:
        return (
          Bn(e),
          Au(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Bt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Bt(e),
          (a = e.updateQueue),
          a !== null && Ar(e, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== a && (e.flags |= 2048),
          t !== null && F(Ya),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ln(It),
          Bt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function YS(t, e) {
    switch ((cu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ln(It),
          ae(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (fn(e), null);
      case 13:
        if (
          (Bn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          yl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (F(te), null);
      case 4:
        return (ae(), null);
      case 10:
        return (Ln(e.type), null);
      case 22:
      case 23:
        return (
          Bn(e),
          Au(),
          t !== null && F(Ya),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Ln(It), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ip(t, e) {
    switch ((cu(e), e.tag)) {
      case 3:
        (Ln(It), ae());
        break;
      case 26:
      case 27:
      case 5:
        fn(e);
        break;
      case 4:
        ae();
        break;
      case 13:
        Bn(e);
        break;
      case 19:
        F(te);
        break;
      case 10:
        Ln(e.type);
        break;
      case 22:
      case 23:
        (Bn(e), Au(), t !== null && F(Ya));
        break;
      case 24:
        Ln(It);
    }
  }
  function Ll(t, e) {
    try {
      var a = e.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        a = o;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var c = a.create,
              y = a.inst;
            ((l = c()), (y.destroy = l));
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (v) {
      Mt(e, e.return, v);
    }
  }
  function sa(t, e, a) {
    try {
      var l = e.updateQueue,
        o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        l = c;
        do {
          if ((l.tag & t) === t) {
            var y = l.inst,
              v = y.destroy;
            if (v !== void 0) {
              ((y.destroy = void 0), (o = e));
              var T = a,
                N = v;
              try {
                N();
              } catch (H) {
                Mt(o, T, H);
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (H) {
      Mt(e, e.return, H);
    }
  }
  function lp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Zh(e, a);
      } catch (l) {
        Mt(t, t.return, l);
      }
    }
  }
  function sp(t, e, a) {
    ((a.props = ka(t.type, t.memoizedProps)), (a.state = t.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      Mt(t, e, l);
    }
  }
  function Ul(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(l)) : (a.current = l);
      }
    } catch (o) {
      Mt(t, e, o);
    }
  }
  function yn(t, e) {
    var a = t.ref,
      l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          Mt(t, e, o);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (o) {
          Mt(t, e, o);
        }
      else a.current = null;
  }
  function rp(t) {
    var e = t.type,
      a = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (o) {
      Mt(t, t.return, o);
    }
  }
  function Wu(t, e, a) {
    try {
      var l = t.stateNode;
      (r1(l, t.type, a, e), (l[Vt] = e));
    } catch (o) {
      Mt(t, t.return, o);
    }
  }
  function op(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ma(t.type)) ||
      t.tag === 4
    );
  }
  function Iu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || op(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && ma(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function tc(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode),
        e
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(t, e)
          : ((e =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            e.appendChild(t),
            (a = a._reactRootContainer),
            a != null || e.onclick !== null || (e.onclick = Br)));
    else if (
      l !== 4 &&
      (l === 27 && ma(t.type) && ((a = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (tc(t, e, a), t = t.sibling; t !== null; )
        (tc(t, e, a), (t = t.sibling));
  }
  function Dr(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t));
    else if (
      l !== 4 &&
      (l === 27 && ma(t.type) && (a = t.stateNode), (t = t.child), t !== null)
    )
      for (Dr(t, e, a), t = t.sibling; t !== null; )
        (Dr(t, e, a), (t = t.sibling));
  }
  function up(t) {
    var e = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var l = t.type, o = e.attributes; o.length; )
        e.removeAttributeNode(o[0]);
      (de(e, l, a), (e[zt] = t), (e[Vt] = a));
    } catch (c) {
      Mt(t, t.return, c);
    }
  }
  var Hn = !1,
    Zt = !1,
    ec = !1,
    cp = typeof WeakSet == "function" ? WeakSet : Set,
    se = null;
  function qS(t, e) {
    if (((t = t.containerInfo), (Dc = Gr), (t = xh(t)), Io(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var o = l.anchorOffset,
              c = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, c.nodeType);
            } catch {
              a = null;
              break t;
            }
            var y = 0,
              v = -1,
              T = -1,
              N = 0,
              H = 0,
              q = t,
              V = null;
            e: for (;;) {
              for (
                var U;
                q !== a || (o !== 0 && q.nodeType !== 3) || (v = y + o),
                  q !== c || (l !== 0 && q.nodeType !== 3) || (T = y + l),
                  q.nodeType === 3 && (y += q.nodeValue.length),
                  (U = q.firstChild) !== null;

              )
                ((V = q), (q = U));
              for (;;) {
                if (q === t) break e;
                if (
                  (V === a && ++N === o && (v = y),
                  V === c && ++H === l && (T = y),
                  (U = q.nextSibling) !== null)
                )
                  break;
                ((q = V), (V = q.parentNode));
              }
              q = U;
            }
            a = v === -1 || T === -1 ? null : { start: v, end: T };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Rc = { focusedElem: t, selectionRange: a }, Gr = !1, se = e;
      se !== null;

    )
      if (
        ((e = se), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        ((t.return = e), (se = t));
      else
        for (; se !== null; ) {
          switch (((e = se), (c = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                ((t = void 0),
                  (a = e),
                  (o = c.memoizedProps),
                  (c = c.memoizedState),
                  (l = a.stateNode));
                try {
                  var st = ka(a.type, o, a.elementType === a.type);
                  ((t = l.getSnapshotBeforeUpdate(st, c)),
                    (l.__reactInternalSnapshotBeforeUpdate = t));
                } catch (at) {
                  Mt(a, a.return, at);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  Cc(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Cc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (se = t));
            break;
          }
          se = e.return;
        }
  }
  function fp(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (ra(t, a), l & 4 && Ll(5, a));
        break;
      case 1:
        if ((ra(t, a), l & 4))
          if (((t = a.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (y) {
              Mt(a, a.return, y);
            }
          else {
            var o = ka(a.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(o, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              Mt(a, a.return, y);
            }
          }
        (l & 64 && lp(a), l & 512 && Ul(a, a.return));
        break;
      case 3:
        if ((ra(t, a), l & 64 && ((t = a.updateQueue), t !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Zh(t, e);
          } catch (y) {
            Mt(a, a.return, y);
          }
        }
        break;
      case 27:
        e === null && l & 4 && up(a);
      case 26:
      case 5:
        (ra(t, a), e === null && l & 4 && rp(a), l & 512 && Ul(a, a.return));
        break;
      case 12:
        ra(t, a);
        break;
      case 13:
        (ra(t, a),
          l & 4 && mp(t, a),
          l & 64 &&
            ((t = a.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((a = JS.bind(null, a)), m1(t, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || Hn), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || Zt), (o = Hn));
          var c = Zt;
          ((Hn = l),
            (Zt = e) && !c ? oa(t, a, (a.subtreeFlags & 8772) !== 0) : ra(t, a),
            (Hn = o),
            (Zt = c));
        }
        break;
      case 30:
        break;
      default:
        ra(t, a);
    }
  }
  function dp(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), dp(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Lo(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Lt = null,
    we = !1;
  function Yn(t, e, a) {
    for (a = a.child; a !== null; ) (hp(t, e, a), (a = a.sibling));
  }
  function hp(t, e, a) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
      try {
        Pt.onCommitFiberUnmount(Da, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Zt || yn(a, e),
          Yn(t, e, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Zt || yn(a, e);
        var l = Lt,
          o = we;
        (ma(a.type) && ((Lt = a.stateNode), (we = !1)),
          Yn(t, e, a),
          Xl(a.stateNode),
          (Lt = l),
          (we = o));
        break;
      case 5:
        Zt || yn(a, e);
      case 6:
        if (
          ((l = Lt),
          (o = we),
          (Lt = null),
          Yn(t, e, a),
          (Lt = l),
          (we = o),
          Lt !== null)
        )
          if (we)
            try {
              (Lt.nodeType === 9
                ? Lt.body
                : Lt.nodeName === "HTML"
                  ? Lt.ownerDocument.body
                  : Lt
              ).removeChild(a.stateNode);
            } catch (c) {
              Mt(a, e, c);
            }
          else
            try {
              Lt.removeChild(a.stateNode);
            } catch (c) {
              Mt(a, e, c);
            }
        break;
      case 18:
        Lt !== null &&
          (we
            ? ((t = Lt),
              eg(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                a.stateNode,
              ),
              Wl(t))
            : eg(Lt, a.stateNode));
        break;
      case 4:
        ((l = Lt),
          (o = we),
          (Lt = a.stateNode.containerInfo),
          (we = !0),
          Yn(t, e, a),
          (Lt = l),
          (we = o));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Zt || sa(2, a, e), Zt || sa(4, a, e), Yn(t, e, a));
        break;
      case 1:
        (Zt ||
          (yn(a, e),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && sp(a, e, l)),
          Yn(t, e, a));
        break;
      case 21:
        Yn(t, e, a);
        break;
      case 22:
        ((Zt = (l = Zt) || a.memoizedState !== null), Yn(t, e, a), (Zt = l));
        break;
      default:
        Yn(t, e, a);
    }
  }
  function mp(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Wl(t);
      } catch (a) {
        Mt(e, e.return, a);
      }
  }
  function kS(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new cp()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new cp()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function nc(t, e) {
    var a = kS(t);
    e.forEach(function (l) {
      var o = $S.bind(null, t, l);
      a.has(l) || (a.add(l), l.then(o, o));
    });
  }
  function _e(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var o = a[l],
          c = t,
          y = e,
          v = y;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (ma(v.type)) {
                ((Lt = v.stateNode), (we = !1));
                break t;
              }
              break;
            case 5:
              ((Lt = v.stateNode), (we = !1));
              break t;
            case 3:
            case 4:
              ((Lt = v.stateNode.containerInfo), (we = !0));
              break t;
          }
          v = v.return;
        }
        if (Lt === null) throw Error(r(160));
        (hp(c, y, o),
          (Lt = null),
          (we = !1),
          (c = o.alternate),
          c !== null && (c.return = null),
          (o.return = null));
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) (pp(e, t), (e = e.sibling));
  }
  var rn = null;
  function pp(t, e) {
    var a = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (_e(e, t),
          je(t),
          l & 4 && (sa(3, t, t.return), Ll(3, t), sa(5, t, t.return)));
        break;
      case 1:
        (_e(e, t),
          je(t),
          l & 512 && (Zt || a === null || yn(a, a.return)),
          l & 64 &&
            Hn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var o = rn;
        if (
          (_e(e, t),
          je(t),
          l & 512 && (Zt || a === null || yn(a, a.return)),
          l & 4)
        ) {
          var c = a !== null ? a.memoizedState : null;
          if (((l = t.memoizedState), a === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  ((l = t.type),
                    (a = t.memoizedProps),
                    (o = o.ownerDocument || o));
                  e: switch (l) {
                    case "title":
                      ((c = o.getElementsByTagName("title")[0]),
                        (!c ||
                          c[wn] ||
                          c[zt] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = o.createElement(l)),
                          o.head.insertBefore(
                            c,
                            o.querySelector("head > title"),
                          )),
                        de(c, l, a),
                        (c[zt] = t),
                        ie(c),
                        (l = c));
                      break t;
                    case "link":
                      var y = ug("link", "href", o).get(l + (a.href || ""));
                      if (y) {
                        for (var v = 0; v < y.length; v++)
                          if (
                            ((c = y[v]),
                            c.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              c.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              c.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              c.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            y.splice(v, 1);
                            break e;
                          }
                      }
                      ((c = o.createElement(l)),
                        de(c, l, a),
                        o.head.appendChild(c));
                      break;
                    case "meta":
                      if (
                        (y = ug("meta", "content", o).get(
                          l + (a.content || ""),
                        ))
                      ) {
                        for (v = 0; v < y.length; v++)
                          if (
                            ((c = y[v]),
                            c.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              c.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              c.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              c.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            y.splice(v, 1);
                            break e;
                          }
                      }
                      ((c = o.createElement(l)),
                        de(c, l, a),
                        o.head.appendChild(c));
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  ((c[zt] = t), ie(c), (l = c));
                }
                t.stateNode = l;
              } else cg(o, t.type, t.stateNode);
            else t.stateNode = og(o, l, t.memoizedProps);
          else
            c !== l
              ? (c === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : c.count--,
                l === null
                  ? cg(o, t.type, t.stateNode)
                  : og(o, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                Wu(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (_e(e, t),
          je(t),
          l & 512 && (Zt || a === null || yn(a, a.return)),
          a !== null && l & 4 && Wu(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (_e(e, t),
          je(t),
          l & 512 && (Zt || a === null || yn(a, a.return)),
          t.flags & 32)
        ) {
          o = t.stateNode;
          try {
            ui(o, "");
          } catch (U) {
            Mt(t, t.return, U);
          }
        }
        (l & 4 &&
          t.stateNode != null &&
          ((o = t.memoizedProps), Wu(t, o, a !== null ? a.memoizedProps : o)),
          l & 1024 && (ec = !0));
        break;
      case 6:
        if ((_e(e, t), je(t), l & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          ((l = t.memoizedProps), (a = t.stateNode));
          try {
            a.nodeValue = l;
          } catch (U) {
            Mt(t, t.return, U);
          }
        }
        break;
      case 3:
        if (
          ((Yr = null),
          (o = rn),
          (rn = jr(e.containerInfo)),
          _e(e, t),
          (rn = o),
          je(t),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Wl(e.containerInfo);
          } catch (U) {
            Mt(t, t.return, U);
          }
        ec && ((ec = !1), gp(t));
        break;
      case 4:
        ((l = rn),
          (rn = jr(t.stateNode.containerInfo)),
          _e(e, t),
          je(t),
          (rn = l));
        break;
      case 12:
        (_e(e, t), je(t));
        break;
      case 13:
        (_e(e, t),
          je(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (oc = Ve()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), nc(t, l))));
        break;
      case 22:
        o = t.memoizedState !== null;
        var T = a !== null && a.memoizedState !== null,
          N = Hn,
          H = Zt;
        if (
          ((Hn = N || o),
          (Zt = H || T),
          _e(e, t),
          (Zt = H),
          (Hn = N),
          je(t),
          l & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = o ? e._visibility & -2 : e._visibility | 1,
              o && (a === null || T || Hn || Zt || Ga(t)),
              a = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                T = a = e;
                try {
                  if (((c = T.stateNode), o))
                    ((y = c.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none"));
                  else {
                    v = T.stateNode;
                    var q = T.memoizedProps.style,
                      V =
                        q != null && q.hasOwnProperty("display")
                          ? q.display
                          : null;
                    v.style.display =
                      V == null || typeof V == "boolean" ? "" : ("" + V).trim();
                  }
                } catch (U) {
                  Mt(T, T.return, U);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = o ? "" : T.memoizedProps;
                } catch (U) {
                  Mt(T, T.return, U);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (a === e && (a = null), (e = e.return));
            }
            (a === e && (a = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), nc(t, a))));
        break;
      case 19:
        (_e(e, t),
          je(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), nc(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (_e(e, t), je(t));
    }
  }
  function je(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (op(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var o = a.stateNode,
              c = Iu(t);
            Dr(t, c, o);
            break;
          case 5:
            var y = a.stateNode;
            a.flags & 32 && (ui(y, ""), (a.flags &= -33));
            var v = Iu(t);
            Dr(t, v, y);
            break;
          case 3:
          case 4:
            var T = a.stateNode.containerInfo,
              N = Iu(t);
            tc(t, N, T);
            break;
          default:
            throw Error(r(161));
        }
      } catch (H) {
        Mt(t, t.return, H);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function gp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (gp(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function ra(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (fp(t, e.alternate, e), (e = e.sibling));
  }
  function Ga(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (sa(4, e, e.return), Ga(e));
          break;
        case 1:
          yn(e, e.return);
          var a = e.stateNode;
          (typeof a.componentWillUnmount == "function" && sp(e, e.return, a),
            Ga(e));
          break;
        case 27:
          Xl(e.stateNode);
        case 26:
        case 5:
          (yn(e, e.return), Ga(e));
          break;
        case 22:
          e.memoizedState === null && Ga(e);
          break;
        case 30:
          Ga(e);
          break;
        default:
          Ga(e);
      }
      t = t.sibling;
    }
  }
  function oa(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        o = t,
        c = e,
        y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (oa(o, c, a), Ll(4, c));
          break;
        case 1:
          if (
            (oa(o, c, a),
            (l = c),
            (o = l.stateNode),
            typeof o.componentDidMount == "function")
          )
            try {
              o.componentDidMount();
            } catch (N) {
              Mt(l, l.return, N);
            }
          if (((l = c), (o = l.updateQueue), o !== null)) {
            var v = l.stateNode;
            try {
              var T = o.shared.hiddenCallbacks;
              if (T !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < T.length; o++)
                  Kh(T[o], v);
            } catch (N) {
              Mt(l, l.return, N);
            }
          }
          (a && y & 64 && lp(c), Ul(c, c.return));
          break;
        case 27:
          up(c);
        case 26:
        case 5:
          (oa(o, c, a), a && l === null && y & 4 && rp(c), Ul(c, c.return));
          break;
        case 12:
          oa(o, c, a);
          break;
        case 13:
          (oa(o, c, a), a && y & 4 && mp(o, c));
          break;
        case 22:
          (c.memoizedState === null && oa(o, c, a), Ul(c, c.return));
          break;
        case 30:
          break;
        default:
          oa(o, c, a);
      }
      e = e.sibling;
    }
  }
  function ac(t, e) {
    var a = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && Sl(a)));
  }
  function ic(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Sl(t)));
  }
  function vn(t, e, a, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (yp(t, e, a, l), (e = e.sibling));
  }
  function yp(t, e, a, l) {
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (vn(t, e, a, l), o & 2048 && Ll(9, e));
        break;
      case 1:
        vn(t, e, a, l);
        break;
      case 3:
        (vn(t, e, a, l),
          o & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Sl(t))));
        break;
      case 12:
        if (o & 2048) {
          (vn(t, e, a, l), (t = e.stateNode));
          try {
            var c = e.memoizedProps,
              y = c.id,
              v = c.onPostCommit;
            typeof v == "function" &&
              v(
                y,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (T) {
            Mt(e, e.return, T);
          }
        } else vn(t, e, a, l);
        break;
      case 13:
        vn(t, e, a, l);
        break;
      case 23:
        break;
      case 22:
        ((c = e.stateNode),
          (y = e.alternate),
          e.memoizedState !== null
            ? c._visibility & 2
              ? vn(t, e, a, l)
              : Bl(t, e)
            : c._visibility & 2
              ? vn(t, e, a, l)
              : ((c._visibility |= 2),
                Mi(t, e, a, l, (e.subtreeFlags & 10256) !== 0)),
          o & 2048 && ac(y, e));
        break;
      case 24:
        (vn(t, e, a, l), o & 2048 && ic(e.alternate, e));
        break;
      default:
        vn(t, e, a, l);
    }
  }
  function Mi(t, e, a, l, o) {
    for (o = o && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var c = t,
        y = e,
        v = a,
        T = l,
        N = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          (Mi(c, y, v, T, o), Ll(8, y));
          break;
        case 23:
          break;
        case 22:
          var H = y.stateNode;
          (y.memoizedState !== null
            ? H._visibility & 2
              ? Mi(c, y, v, T, o)
              : Bl(c, y)
            : ((H._visibility |= 2), Mi(c, y, v, T, o)),
            o && N & 2048 && ac(y.alternate, y));
          break;
        case 24:
          (Mi(c, y, v, T, o), o && N & 2048 && ic(y.alternate, y));
          break;
        default:
          Mi(c, y, v, T, o);
      }
      e = e.sibling;
    }
  }
  function Bl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t,
          l = e,
          o = l.flags;
        switch (l.tag) {
          case 22:
            (Bl(a, l), o & 2048 && ac(l.alternate, l));
            break;
          case 24:
            (Bl(a, l), o & 2048 && ic(l.alternate, l));
            break;
          default:
            Bl(a, l);
        }
        e = e.sibling;
      }
  }
  var _l = 8192;
  function Ci(t) {
    if (t.subtreeFlags & _l)
      for (t = t.child; t !== null; ) (vp(t), (t = t.sibling));
  }
  function vp(t) {
    switch (t.tag) {
      case 26:
        (Ci(t),
          t.flags & _l &&
            t.memoizedState !== null &&
            w1(rn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Ci(t);
        break;
      case 3:
      case 4:
        var e = rn;
        ((rn = jr(t.stateNode.containerInfo)), Ci(t), (rn = e));
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = _l), (_l = 16777216), Ci(t), (_l = e))
            : Ci(t));
        break;
      default:
        Ci(t);
    }
  }
  function bp(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function jl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ((se = l), xp(l, t));
        }
      bp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Sp(t), (t = t.sibling));
  }
  function Sp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (jl(t), t.flags & 2048 && sa(9, t, t.return));
        break;
      case 3:
        jl(t);
        break;
      case 12:
        jl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Rr(t))
          : jl(t);
        break;
      default:
        jl(t);
    }
  }
  function Rr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ((se = l), xp(l, t));
        }
      bp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (sa(8, e, e.return), Rr(e));
          break;
        case 22:
          ((a = e.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Rr(e)));
          break;
        default:
          Rr(e);
      }
      t = t.sibling;
    }
  }
  function xp(t, e) {
    for (; se !== null; ) {
      var a = se;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          sa(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Sl(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (se = l));
      else
        t: for (a = t; se !== null; ) {
          l = se;
          var o = l.sibling,
            c = l.return;
          if ((dp(l), l === a)) {
            se = null;
            break t;
          }
          if (o !== null) {
            ((o.return = c), (se = o));
            break t;
          }
          se = c;
        }
    }
  }
  var GS = {
      getCacheForType: function (t) {
        var e = ye(It),
          a = e.data.get(t);
        return (a === void 0 && ((a = t()), e.data.set(t, a)), a);
      },
    },
    XS = typeof WeakMap == "function" ? WeakMap : Map,
    Et = 0,
    Ot = null,
    mt = null,
    gt = 0,
    At = 0,
    He = null,
    ua = !1,
    Oi = !1,
    lc = !1,
    qn = 0,
    qt = 0,
    ca = 0,
    Xa = 0,
    sc = 0,
    Fe = 0,
    Ni = 0,
    Hl = null,
    Me = null,
    rc = !1,
    oc = 0,
    wr = 1 / 0,
    Mr = null,
    fa = null,
    fe = 0,
    da = null,
    zi = null,
    Vi = 0,
    uc = 0,
    cc = null,
    Tp = null,
    Yl = 0,
    fc = null;
  function Ye() {
    if ((Et & 2) !== 0 && gt !== 0) return gt & -gt;
    if (_.T !== null) {
      var t = Si;
      return t !== 0 ? t : vc();
    }
    return Le();
  }
  function Ep() {
    Fe === 0 && (Fe = (gt & 536870912) === 0 || xt ? js() : 536870912);
    var t = Pe.current;
    return (t !== null && (t.flags |= 32), Fe);
  }
  function qe(t, e, a) {
    (((t === Ot && (At === 2 || At === 9)) || t.cancelPendingCommit !== null) &&
      (Li(t, 0), ha(t, gt, Fe, !1)),
      Ht(t, a),
      ((Et & 2) === 0 || t !== Ot) &&
        (t === Ot &&
          ((Et & 2) === 0 && (Xa |= a), qt === 4 && ha(t, gt, Fe, !1)),
        bn(t)));
  }
  function Ap(t, e, a) {
    if ((Et & 6) !== 0) throw Error(r(327));
    var l = (!a && (e & 124) === 0 && (e & t.expiredLanes) === 0) || wa(t, e),
      o = l ? QS(t, e) : mc(t, e, !0),
      c = l;
    do {
      if (o === 0) {
        Oi && !l && ha(t, e, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), c && !KS(a))) {
          ((o = mc(t, e, !1)), (c = !1));
          continue;
        }
        if (o === 2) {
          if (((c = e), t.errorRecoveryDisabledLanes & c)) var y = 0;
          else
            ((y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0));
          if (y !== 0) {
            e = y;
            t: {
              var v = t;
              o = Hl;
              var T = v.current.memoizedState.isDehydrated;
              if ((T && (Li(v, y).flags |= 256), (y = mc(v, y, !1)), y !== 2)) {
                if (lc && !T) {
                  ((v.errorRecoveryDisabledLanes |= c), (Xa |= c), (o = 4));
                  break t;
                }
                ((c = Me),
                  (Me = o),
                  c !== null &&
                    (Me === null ? (Me = c) : Me.push.apply(Me, c)));
              }
              o = y;
            }
            if (((c = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          (Li(t, 0), ha(t, e, 0, !0));
          break;
        }
        t: {
          switch (((l = t), (c = o), c)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ha(l, e, Fe, !ua);
              break t;
            case 2:
              Me = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((o = oc + 300 - Ve()), 10 < o)) {
            if ((ha(l, e, Fe, !ua), Ra(l, 0, !0) !== 0)) break t;
            l.timeoutHandle = Ip(
              Dp.bind(null, l, a, Me, Mr, rc, e, Fe, Xa, Ni, ua, c, 2, -0, 0),
              o,
            );
            break t;
          }
          Dp(l, a, Me, Mr, rc, e, Fe, Xa, Ni, ua, c, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    bn(t);
  }
  function Dp(t, e, a, l, o, c, y, v, T, N, H, q, V, U) {
    if (
      ((t.timeoutHandle = -1),
      (q = e.subtreeFlags),
      (q & 8192 || (q & 16785408) === 16785408) &&
        ((Ql = { stylesheets: null, count: 0, unsuspend: R1 }),
        vp(e),
        (q = M1()),
        q !== null))
    ) {
      ((t.cancelPendingCommit = q(
        zp.bind(null, t, e, c, a, l, o, y, v, T, H, 1, V, U),
      )),
        ha(t, c, y, !N));
      return;
    }
    zp(t, e, c, a, l, o, y, v, T);
  }
  function KS(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        e.flags & 16384 &&
        ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var o = a[l],
            c = o.getSnapshot;
          o = o.value;
          try {
            if (!Ue(c(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = e.child), e.subtreeFlags & 16384 && a !== null))
        ((a.return = e), (e = a));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function ha(t, e, a, l) {
    ((e &= ~sc),
      (e &= ~Xa),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var o = e; 0 < o; ) {
      var c = 31 - Wt(o),
        y = 1 << c;
      ((l[c] = -1), (o &= ~y));
    }
    a !== 0 && me(t, a, e);
  }
  function Cr() {
    return (Et & 6) === 0 ? (ql(0), !1) : !0;
  }
  function dc() {
    if (mt !== null) {
      if (At === 0) var t = mt.return;
      else ((t = mt), (Vn = ja = null), Cu(t), (Ri = null), (Nl = 0), (t = mt));
      for (; t !== null; ) (ip(t.alternate, t), (t = t.return));
      mt = null;
    }
  }
  function Li(t, e) {
    var a = t.timeoutHandle;
    (a !== -1 && ((t.timeoutHandle = -1), u1(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      dc(),
      (Ot = t),
      (mt = a = On(t.current, null)),
      (gt = e),
      (At = 0),
      (He = null),
      (ua = !1),
      (Oi = wa(t, e)),
      (lc = !1),
      (Ni = Fe = sc = Xa = ca = qt = 0),
      (Me = Hl = null),
      (rc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var o = 31 - Wt(l),
          c = 1 << o;
        ((e |= t[o]), (l &= ~c));
      }
    return ((qn = e), $s(), a);
  }
  function Rp(t, e) {
    ((ft = null),
      (_.H = gr),
      e === Tl || e === sr
        ? ((e = Gh()), (At = 3))
        : e === Yh
          ? ((e = Gh()), (At = 4))
          : (At =
              e === Xm
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (He = e),
      mt === null && ((qt = 1), xr(t, Xe(e, t.current))));
  }
  function wp() {
    var t = _.H;
    return ((_.H = gr), t === null ? gr : t);
  }
  function Mp() {
    var t = _.A;
    return ((_.A = GS), t);
  }
  function hc() {
    ((qt = 4),
      ua || ((gt & 4194048) !== gt && Pe.current !== null) || (Oi = !0),
      ((ca & 134217727) === 0 && (Xa & 134217727) === 0) ||
        Ot === null ||
        ha(Ot, gt, Fe, !1));
  }
  function mc(t, e, a) {
    var l = Et;
    Et |= 2;
    var o = wp(),
      c = Mp();
    ((Ot !== t || gt !== e) && ((Mr = null), Li(t, e)), (e = !1));
    var y = qt;
    t: do
      try {
        if (At !== 0 && mt !== null) {
          var v = mt,
            T = He;
          switch (At) {
            case 8:
              (dc(), (y = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Pe.current === null && (e = !0);
              var N = At;
              if (((At = 0), (He = null), Ui(t, v, T, N), a && Oi)) {
                y = 0;
                break t;
              }
              break;
            default:
              ((N = At), (At = 0), (He = null), Ui(t, v, T, N));
          }
        }
        (ZS(), (y = qt));
        break;
      } catch (H) {
        Rp(t, H);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Vn = ja = null),
      (Et = l),
      (_.H = o),
      (_.A = c),
      mt === null && ((Ot = null), (gt = 0), $s()),
      y
    );
  }
  function ZS() {
    for (; mt !== null; ) Cp(mt);
  }
  function QS(t, e) {
    var a = Et;
    Et |= 2;
    var l = wp(),
      o = Mp();
    Ot !== t || gt !== e
      ? ((Mr = null), (wr = Ve() + 500), Li(t, e))
      : (Oi = wa(t, e));
    t: do
      try {
        if (At !== 0 && mt !== null) {
          e = mt;
          var c = He;
          e: switch (At) {
            case 1:
              ((At = 0), (He = null), Ui(t, e, c, 1));
              break;
            case 2:
            case 9:
              if (qh(c)) {
                ((At = 0), (He = null), Op(e));
                break;
              }
              ((e = function () {
                ((At !== 2 && At !== 9) || Ot !== t || (At = 7), bn(t));
              }),
                c.then(e, e));
              break t;
            case 3:
              At = 7;
              break t;
            case 4:
              At = 5;
              break t;
            case 7:
              qh(c)
                ? ((At = 0), (He = null), Op(e))
                : ((At = 0), (He = null), Ui(t, e, c, 7));
              break;
            case 5:
              var y = null;
              switch (mt.tag) {
                case 26:
                  y = mt.memoizedState;
                case 5:
                case 27:
                  var v = mt;
                  if (!y || fg(y)) {
                    ((At = 0), (He = null));
                    var T = v.sibling;
                    if (T !== null) mt = T;
                    else {
                      var N = v.return;
                      N !== null ? ((mt = N), Or(N)) : (mt = null);
                    }
                    break e;
                  }
              }
              ((At = 0), (He = null), Ui(t, e, c, 5));
              break;
            case 6:
              ((At = 0), (He = null), Ui(t, e, c, 6));
              break;
            case 8:
              (dc(), (qt = 6));
              break t;
            default:
              throw Error(r(462));
          }
        }
        PS();
        break;
      } catch (H) {
        Rp(t, H);
      }
    while (!0);
    return (
      (Vn = ja = null),
      (_.H = l),
      (_.A = o),
      (Et = a),
      mt !== null ? 0 : ((Ot = null), (gt = 0), $s(), qt)
    );
  }
  function PS() {
    for (; mt !== null && !Pn(); ) Cp(mt);
  }
  function Cp(t) {
    var e = np(t.alternate, t, qn);
    ((t.memoizedProps = t.pendingProps), e === null ? Or(t) : (mt = e));
  }
  function Op(t) {
    var e = t,
      a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Jm(a, e, e.pendingProps, e.type, void 0, gt);
        break;
      case 11:
        e = Jm(a, e, e.pendingProps, e.type.render, e.ref, gt);
        break;
      case 5:
        Cu(e);
      default:
        (ip(a, e), (e = mt = Nh(e, qn)), (e = np(a, e, qn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Or(t) : (mt = e));
  }
  function Ui(t, e, a, l) {
    ((Vn = ja = null), Cu(e), (Ri = null), (Nl = 0));
    var o = e.return;
    try {
      if (_S(t, o, e, a, gt)) {
        ((qt = 1), xr(t, Xe(a, t.current)), (mt = null));
        return;
      }
    } catch (c) {
      if (o !== null) throw ((mt = o), c);
      ((qt = 1), xr(t, Xe(a, t.current)), (mt = null));
      return;
    }
    e.flags & 32768
      ? (xt || l === 1
          ? (t = !0)
          : Oi || (gt & 536870912) !== 0
            ? (t = !1)
            : ((ua = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Pe.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        Np(e, t))
      : Or(e);
  }
  function Or(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Np(e, ua);
        return;
      }
      t = e.return;
      var a = HS(e.alternate, e, qn);
      if (a !== null) {
        mt = a;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        mt = e;
        return;
      }
      mt = e = t;
    } while (e !== null);
    qt === 0 && (qt = 5);
  }
  function Np(t, e) {
    do {
      var a = YS(t.alternate, t);
      if (a !== null) {
        ((a.flags &= 32767), (mt = a));
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        mt = t;
        return;
      }
      mt = t = a;
    } while (t !== null);
    ((qt = 6), (mt = null));
  }
  function zp(t, e, a, l, o, c, y, v, T) {
    t.cancelPendingCommit = null;
    do Nr();
    while (fe !== 0);
    if ((Et & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((c = e.lanes | e.childLanes),
        (c |= iu),
        xe(t, a, c, y, v, T),
        t === Ot && ((mt = Ot = null), (gt = 0)),
        (zi = e),
        (da = t),
        (Vi = a),
        (uc = c),
        (cc = o),
        (Tp = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            WS(Dn, function () {
              return (_p(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = _.T), (_.T = null), (o = G.p), (G.p = 2), (y = Et), (Et |= 4));
        try {
          qS(t, e, a);
        } finally {
          ((Et = y), (G.p = o), (_.T = l));
        }
      }
      ((fe = 1), Vp(), Lp(), Up());
    }
  }
  function Vp() {
    if (fe === 1) {
      fe = 0;
      var t = da,
        e = zi,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        ((a = _.T), (_.T = null));
        var l = G.p;
        G.p = 2;
        var o = Et;
        Et |= 4;
        try {
          pp(e, t);
          var c = Rc,
            y = xh(t.containerInfo),
            v = c.focusedElem,
            T = c.selectionRange;
          if (
            y !== v &&
            v &&
            v.ownerDocument &&
            Sh(v.ownerDocument.documentElement, v)
          ) {
            if (T !== null && Io(v)) {
              var N = T.start,
                H = T.end;
              if ((H === void 0 && (H = N), "selectionStart" in v))
                ((v.selectionStart = N),
                  (v.selectionEnd = Math.min(H, v.value.length)));
              else {
                var q = v.ownerDocument || document,
                  V = (q && q.defaultView) || window;
                if (V.getSelection) {
                  var U = V.getSelection(),
                    st = v.textContent.length,
                    at = Math.min(T.start, st),
                    wt = T.end === void 0 ? at : Math.min(T.end, st);
                  !U.extend && at > wt && ((y = wt), (wt = at), (at = y));
                  var R = bh(v, at),
                    D = bh(v, wt);
                  if (
                    R &&
                    D &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== R.node ||
                      U.anchorOffset !== R.offset ||
                      U.focusNode !== D.node ||
                      U.focusOffset !== D.offset)
                  ) {
                    var w = q.createRange();
                    (w.setStart(R.node, R.offset),
                      U.removeAllRanges(),
                      at > wt
                        ? (U.addRange(w), U.extend(D.node, D.offset))
                        : (w.setEnd(D.node, D.offset), U.addRange(w)));
                  }
                }
              }
            }
            for (q = [], U = v; (U = U.parentNode); )
              U.nodeType === 1 &&
                q.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < q.length;
              v++
            ) {
              var Y = q[v];
              ((Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top));
            }
          }
          ((Gr = !!Dc), (Rc = Dc = null));
        } finally {
          ((Et = o), (G.p = l), (_.T = a));
        }
      }
      ((t.current = e), (fe = 2));
    }
  }
  function Lp() {
    if (fe === 2) {
      fe = 0;
      var t = da,
        e = zi,
        a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        ((a = _.T), (_.T = null));
        var l = G.p;
        G.p = 2;
        var o = Et;
        Et |= 4;
        try {
          fp(t, e.alternate, e);
        } finally {
          ((Et = o), (G.p = l), (_.T = a));
        }
      }
      fe = 3;
    }
  }
  function Up() {
    if (fe === 4 || fe === 3) {
      ((fe = 0), Fn());
      var t = da,
        e = zi,
        a = Vi,
        l = Tp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (fe = 5)
        : ((fe = 0), (zi = da = null), Bp(t, t.pendingLanes));
      var o = t.pendingLanes;
      if (
        (o === 0 && (fa = null),
        ue(a),
        (e = e.stateNode),
        Pt && typeof Pt.onCommitFiberRoot == "function")
      )
        try {
          Pt.onCommitFiberRoot(Da, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = _.T), (o = G.p), (G.p = 2), (_.T = null));
        try {
          for (var c = t.onRecoverableError, y = 0; y < l.length; y++) {
            var v = l[y];
            c(v.value, { componentStack: v.stack });
          }
        } finally {
          ((_.T = e), (G.p = o));
        }
      }
      ((Vi & 3) !== 0 && Nr(),
        bn(t),
        (o = t.pendingLanes),
        (a & 4194090) !== 0 && (o & 42) !== 0
          ? t === fc
            ? Yl++
            : ((Yl = 0), (fc = t))
          : (Yl = 0),
        ql(0));
    }
  }
  function Bp(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Sl(e)));
  }
  function Nr(t) {
    return (Vp(), Lp(), Up(), _p());
  }
  function _p() {
    if (fe !== 5) return !1;
    var t = da,
      e = uc;
    uc = 0;
    var a = ue(Vi),
      l = _.T,
      o = G.p;
    try {
      ((G.p = 32 > a ? 32 : a), (_.T = null), (a = cc), (cc = null));
      var c = da,
        y = Vi;
      if (((fe = 0), (zi = da = null), (Vi = 0), (Et & 6) !== 0))
        throw Error(r(331));
      var v = Et;
      if (
        ((Et |= 4),
        Sp(c.current),
        yp(c, c.current, y, a),
        (Et = v),
        ql(0, !1),
        Pt && typeof Pt.onPostCommitFiberRoot == "function")
      )
        try {
          Pt.onPostCommitFiberRoot(Da, c);
        } catch {}
      return !0;
    } finally {
      ((G.p = o), (_.T = l), Bp(t, e));
    }
  }
  function jp(t, e, a) {
    ((e = Xe(a, e)),
      (e = Gu(t.stateNode, e, 2)),
      (t = na(t, e, 2)),
      t !== null && (Ht(t, 2), bn(t)));
  }
  function Mt(t, e, a) {
    if (t.tag === 3) jp(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          jp(e, t, a);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (fa === null || !fa.has(l)))
          ) {
            ((t = Xe(a, t)),
              (a = km(2)),
              (l = na(e, a, 2)),
              l !== null && (Gm(a, l, e, t), Ht(l, 2), bn(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function pc(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new XS();
      var o = new Set();
      l.set(e, o);
    } else ((o = l.get(e)), o === void 0 && ((o = new Set()), l.set(e, o)));
    o.has(a) ||
      ((lc = !0), o.add(a), (t = FS.bind(null, t, e, a)), e.then(t, t));
  }
  function FS(t, e, a) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      Ot === t &&
        (gt & a) === a &&
        (qt === 4 || (qt === 3 && (gt & 62914560) === gt && 300 > Ve() - oc)
          ? (Et & 2) === 0 && Li(t, 0)
          : (sc |= a),
        Ni === gt && (Ni = 0)),
      bn(t));
  }
  function Hp(t, e) {
    (e === 0 && (e = Hs()), (t = gi(t, e)), t !== null && (Ht(t, e), bn(t)));
  }
  function JS(t) {
    var e = t.memoizedState,
      a = 0;
    (e !== null && (a = e.retryLane), Hp(t, a));
  }
  function $S(t, e) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode,
          o = t.memoizedState;
        o !== null && (a = o.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (l !== null && l.delete(e), Hp(t, a));
  }
  function WS(t, e) {
    return dn(t, e);
  }
  var zr = null,
    Bi = null,
    gc = !1,
    Vr = !1,
    yc = !1,
    Ka = 0;
  function bn(t) {
    (t !== Bi &&
      t.next === null &&
      (Bi === null ? (zr = Bi = t) : (Bi = Bi.next = t)),
      (Vr = !0),
      gc || ((gc = !0), t1()));
  }
  function ql(t, e) {
    if (!yc && Vr) {
      yc = !0;
      do
        for (var a = !1, l = zr; l !== null; ) {
          if (t !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var y = l.suspendedLanes,
                v = l.pingedLanes;
              ((c = (1 << (31 - Wt(42 | t) + 1)) - 1),
                (c &= o & ~(y & ~v)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((a = !0), Gp(l, c));
          } else
            ((c = gt),
              (c = Ra(
                l,
                l === Ot ? c : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (c & 3) === 0 || wa(l, c) || ((a = !0), Gp(l, c)));
          l = l.next;
        }
      while (a);
      yc = !1;
    }
  }
  function IS() {
    Yp();
  }
  function Yp() {
    Vr = gc = !1;
    var t = 0;
    Ka !== 0 && (o1() && (t = Ka), (Ka = 0));
    for (var e = Ve(), a = null, l = zr; l !== null; ) {
      var o = l.next,
        c = qp(l, e);
      (c === 0
        ? ((l.next = null),
          a === null ? (zr = o) : (a.next = o),
          o === null && (Bi = a))
        : ((a = l), (t !== 0 || (c & 3) !== 0) && (Vr = !0)),
        (l = o));
    }
    ql(t);
  }
  function qp(t, e) {
    for (
      var a = t.suspendedLanes,
        l = t.pingedLanes,
        o = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;

    ) {
      var y = 31 - Wt(c),
        v = 1 << y,
        T = o[y];
      (T === -1
        ? ((v & a) === 0 || (v & l) !== 0) && (o[y] = _s(v, e))
        : T <= e && (t.expiredLanes |= v),
        (c &= ~v));
    }
    if (
      ((e = Ot),
      (a = gt),
      (a = Ra(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (l = t.callbackNode),
      a === 0 ||
        (t === e && (At === 2 || At === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && ze(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || wa(t, a)) {
      if (((e = a & -a), e === t.callbackPriority)) return e;
      switch ((l !== null && ze(l), ue(a))) {
        case 2:
        case 8:
          a = nn;
          break;
        case 32:
          a = Dn;
          break;
        case 268435456:
          a = il;
          break;
        default:
          a = Dn;
      }
      return (
        (l = kp.bind(null, t)),
        (a = dn(a, l)),
        (t.callbackPriority = e),
        (t.callbackNode = a),
        e
      );
    }
    return (
      l !== null && l !== null && ze(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function kp(t, e) {
    if (fe !== 0 && fe !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var a = t.callbackNode;
    if (Nr() && t.callbackNode !== a) return null;
    var l = gt;
    return (
      (l = Ra(
        t,
        t === Ot ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (Ap(t, l, e),
          qp(t, Ve()),
          t.callbackNode != null && t.callbackNode === a
            ? kp.bind(null, t)
            : null)
    );
  }
  function Gp(t, e) {
    if (Nr()) return null;
    Ap(t, e, !0);
  }
  function t1() {
    c1(function () {
      (Et & 6) !== 0 ? dn(Ia, IS) : Yp();
    });
  }
  function vc() {
    return (Ka === 0 && (Ka = js()), Ka);
  }
  function Xp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Xs("" + t);
  }
  function Kp(t, e) {
    var a = e.ownerDocument.createElement("input");
    return (
      (a.name = e.name),
      (a.value = e.value),
      t.id && a.setAttribute("form", t.id),
      e.parentNode.insertBefore(a, e),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function e1(t, e, a, l, o) {
    if (e === "submit" && a && a.stateNode === o) {
      var c = Xp((o[Vt] || null).action),
        y = l.submitter;
      y &&
        ((e = (e = y[Vt] || null)
          ? Xp(e.formAction)
          : y.getAttribute("formAction")),
        e !== null && ((c = e), (y = null)));
      var v = new Ps("action", "action", null, l, o);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ka !== 0) {
                  var T = y ? Kp(o, y) : new FormData(o);
                  ju(
                    a,
                    { pending: !0, data: T, method: o.method, action: c },
                    null,
                    T,
                  );
                }
              } else
                typeof c == "function" &&
                  (v.preventDefault(),
                  (T = y ? Kp(o, y) : new FormData(o)),
                  ju(
                    a,
                    { pending: !0, data: T, method: o.method, action: c },
                    c,
                    T,
                  ));
            },
            currentTarget: o,
          },
        ],
      });
    }
  }
  for (var bc = 0; bc < au.length; bc++) {
    var Sc = au[bc],
      n1 = Sc.toLowerCase(),
      a1 = Sc[0].toUpperCase() + Sc.slice(1);
    sn(n1, "on" + a1);
  }
  (sn(Ah, "onAnimationEnd"),
    sn(Dh, "onAnimationIteration"),
    sn(Rh, "onAnimationStart"),
    sn("dblclick", "onDoubleClick"),
    sn("focusin", "onFocus"),
    sn("focusout", "onBlur"),
    sn(SS, "onTransitionRun"),
    sn(xS, "onTransitionStart"),
    sn(TS, "onTransitionCancel"),
    sn(wh, "onTransitionEnd"),
    si("onMouseEnter", ["mouseout", "mouseover"]),
    si("onMouseLeave", ["mouseout", "mouseover"]),
    si("onPointerEnter", ["pointerout", "pointerover"]),
    si("onPointerLeave", ["pointerout", "pointerover"]),
    Ca(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ca(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ca("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ca(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ca(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ca(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var kl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    i1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(kl),
    );
  function Zp(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a],
        o = l.event;
      l = l.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var y = l.length - 1; 0 <= y; y--) {
            var v = l[y],
              T = v.instance,
              N = v.currentTarget;
            if (((v = v.listener), T !== c && o.isPropagationStopped()))
              break t;
            ((c = v), (o.currentTarget = N));
            try {
              c(o);
            } catch (H) {
              Sr(H);
            }
            ((o.currentTarget = null), (c = T));
          }
        else
          for (y = 0; y < l.length; y++) {
            if (
              ((v = l[y]),
              (T = v.instance),
              (N = v.currentTarget),
              (v = v.listener),
              T !== c && o.isPropagationStopped())
            )
              break t;
            ((c = v), (o.currentTarget = N));
            try {
              c(o);
            } catch (H) {
              Sr(H);
            }
            ((o.currentTarget = null), (c = T));
          }
      }
    }
  }
  function pt(t, e) {
    var a = e[Rn];
    a === void 0 && (a = e[Rn] = new Set());
    var l = t + "__bubble";
    a.has(l) || (Qp(e, t, 2, !1), a.add(l));
  }
  function xc(t, e, a) {
    var l = 0;
    (e && (l |= 4), Qp(a, t, l, e));
  }
  var Lr = "_reactListening" + Math.random().toString(36).slice(2);
  function Tc(t) {
    if (!t[Lr]) {
      ((t[Lr] = !0),
        Yd.forEach(function (a) {
          a !== "selectionchange" && (i1.has(a) || xc(a, !1, t), xc(a, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Lr] || ((e[Lr] = !0), xc("selectionchange", !1, e));
    }
  }
  function Qp(t, e, a, l) {
    switch (yg(e)) {
      case 2:
        var o = N1;
        break;
      case 8:
        o = z1;
        break;
      default:
        o = Bc;
    }
    ((a = o.bind(null, e, a, t)),
      (o = void 0),
      !Xo ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (o = !0),
      l
        ? o !== void 0
          ? t.addEventListener(e, a, { capture: !0, passive: o })
          : t.addEventListener(e, a, !0)
        : o !== void 0
          ? t.addEventListener(e, a, { passive: o })
          : t.addEventListener(e, a, !1));
  }
  function Ec(t, e, a, l, o) {
    var c = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var v = l.stateNode.containerInfo;
          if (v === o) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var T = y.tag;
              if ((T === 3 || T === 4) && y.stateNode.containerInfo === o)
                return;
              y = y.return;
            }
          for (; v !== null; ) {
            if (((y = ai(v)), y === null)) return;
            if (((T = y.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              l = c = y;
              continue t;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    th(function () {
      var N = c,
        H = ko(a),
        q = [];
      t: {
        var V = Mh.get(t);
        if (V !== void 0) {
          var U = Ps,
            st = t;
          switch (t) {
            case "keypress":
              if (Zs(a) === 0) break t;
            case "keydown":
            case "keyup":
              U = Wb;
              break;
            case "focusin":
              ((st = "focus"), (U = Po));
              break;
            case "focusout":
              ((st = "blur"), (U = Po));
              break;
            case "beforeblur":
            case "afterblur":
              U = Po;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = ah;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Yb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = eS;
              break;
            case Ah:
            case Dh:
            case Rh:
              U = Gb;
              break;
            case wh:
              U = aS;
              break;
            case "scroll":
            case "scrollend":
              U = jb;
              break;
            case "wheel":
              U = lS;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Kb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = lh;
              break;
            case "toggle":
            case "beforetoggle":
              U = rS;
          }
          var at = (e & 4) !== 0,
            wt = !at && (t === "scroll" || t === "scrollend"),
            R = at ? (V !== null ? V + "Capture" : null) : V;
          at = [];
          for (var D = N, w; D !== null; ) {
            var Y = D;
            if (
              ((w = Y.stateNode),
              (Y = Y.tag),
              (Y !== 5 && Y !== 26 && Y !== 27) ||
                w === null ||
                R === null ||
                ((Y = rl(D, R)), Y != null && at.push(Gl(D, Y, w))),
              wt)
            )
              break;
            D = D.return;
          }
          0 < at.length &&
            ((V = new U(V, st, null, a, H)),
            q.push({ event: V, listeners: at }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((V = t === "mouseover" || t === "pointerover"),
            (U = t === "mouseout" || t === "pointerout"),
            V &&
              a !== qo &&
              (st = a.relatedTarget || a.fromElement) &&
              (ai(st) || st[ge]))
          )
            break t;
          if (
            (U || V) &&
            ((V =
              H.window === H
                ? H
                : (V = H.ownerDocument)
                  ? V.defaultView || V.parentWindow
                  : window),
            U
              ? ((st = a.relatedTarget || a.toElement),
                (U = N),
                (st = st ? ai(st) : null),
                st !== null &&
                  ((wt = f(st)),
                  (at = st.tag),
                  st !== wt || (at !== 5 && at !== 27 && at !== 6)) &&
                  (st = null))
              : ((U = null), (st = N)),
            U !== st)
          ) {
            if (
              ((at = ah),
              (Y = "onMouseLeave"),
              (R = "onMouseEnter"),
              (D = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((at = lh),
                (Y = "onPointerLeave"),
                (R = "onPointerEnter"),
                (D = "pointer")),
              (wt = U == null ? V : sl(U)),
              (w = st == null ? V : sl(st)),
              (V = new at(Y, D + "leave", U, a, H)),
              (V.target = wt),
              (V.relatedTarget = w),
              (Y = null),
              ai(H) === N &&
                ((at = new at(R, D + "enter", st, a, H)),
                (at.target = w),
                (at.relatedTarget = wt),
                (Y = at)),
              (wt = Y),
              U && st)
            )
              e: {
                for (at = U, R = st, D = 0, w = at; w; w = _i(w)) D++;
                for (w = 0, Y = R; Y; Y = _i(Y)) w++;
                for (; 0 < D - w; ) ((at = _i(at)), D--);
                for (; 0 < w - D; ) ((R = _i(R)), w--);
                for (; D--; ) {
                  if (at === R || (R !== null && at === R.alternate)) break e;
                  ((at = _i(at)), (R = _i(R)));
                }
                at = null;
              }
            else at = null;
            (U !== null && Pp(q, V, U, at, !1),
              st !== null && wt !== null && Pp(q, wt, st, at, !0));
          }
        }
        t: {
          if (
            ((V = N ? sl(N) : window),
            (U = V.nodeName && V.nodeName.toLowerCase()),
            U === "select" || (U === "input" && V.type === "file"))
          )
            var W = hh;
          else if (fh(V))
            if (mh) W = yS;
            else {
              W = pS;
              var ht = mS;
            }
          else
            ((U = V.nodeName),
              !U ||
              U.toLowerCase() !== "input" ||
              (V.type !== "checkbox" && V.type !== "radio")
                ? N && Yo(N.elementType) && (W = hh)
                : (W = gS));
          if (W && (W = W(t, N))) {
            dh(q, W, a, H);
            break t;
          }
          (ht && ht(t, V, N),
            t === "focusout" &&
              N &&
              V.type === "number" &&
              N.memoizedProps.value != null &&
              Ho(V, "number", V.value));
        }
        switch (((ht = N ? sl(N) : window), t)) {
          case "focusin":
            (fh(ht) || ht.contentEditable === "true") &&
              ((hi = ht), (tu = N), (pl = null));
            break;
          case "focusout":
            pl = tu = hi = null;
            break;
          case "mousedown":
            eu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((eu = !1), Th(q, a, H));
            break;
          case "selectionchange":
            if (bS) break;
          case "keydown":
          case "keyup":
            Th(q, a, H);
        }
        var nt;
        if (Jo)
          t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t;
            }
            it = void 0;
          }
        else
          di
            ? uh(t, a) && (it = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (it = "onCompositionStart");
        (it &&
          (sh &&
            a.locale !== "ko" &&
            (di || it !== "onCompositionStart"
              ? it === "onCompositionEnd" && di && (nt = eh())
              : ((Wn = H),
                (Ko = "value" in Wn ? Wn.value : Wn.textContent),
                (di = !0))),
          (ht = Ur(N, it)),
          0 < ht.length &&
            ((it = new ih(it, t, null, a, H)),
            q.push({ event: it, listeners: ht }),
            nt
              ? (it.data = nt)
              : ((nt = ch(a)), nt !== null && (it.data = nt)))),
          (nt = uS ? cS(t, a) : fS(t, a)) &&
            ((it = Ur(N, "onBeforeInput")),
            0 < it.length &&
              ((ht = new ih("onBeforeInput", "beforeinput", null, a, H)),
              q.push({ event: ht, listeners: it }),
              (ht.data = nt))),
          e1(q, t, N, a, H));
      }
      Zp(q, e);
    });
  }
  function Gl(t, e, a) {
    return { instance: t, listener: e, currentTarget: a };
  }
  function Ur(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var o = t,
        c = o.stateNode;
      if (
        ((o = o.tag),
        (o !== 5 && o !== 26 && o !== 27) ||
          c === null ||
          ((o = rl(t, a)),
          o != null && l.unshift(Gl(t, o, c)),
          (o = rl(t, e)),
          o != null && l.push(Gl(t, o, c))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function _i(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Pp(t, e, a, l, o) {
    for (var c = e._reactName, y = []; a !== null && a !== l; ) {
      var v = a,
        T = v.alternate,
        N = v.stateNode;
      if (((v = v.tag), T !== null && T === l)) break;
      ((v !== 5 && v !== 26 && v !== 27) ||
        N === null ||
        ((T = N),
        o
          ? ((N = rl(a, c)), N != null && y.unshift(Gl(a, N, T)))
          : o || ((N = rl(a, c)), N != null && y.push(Gl(a, N, T)))),
        (a = a.return));
    }
    y.length !== 0 && t.push({ event: e, listeners: y });
  }
  var l1 = /\r\n?/g,
    s1 = /\u0000|\uFFFD/g;
  function Fp(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        l1,
        `
`,
      )
      .replace(s1, "");
  }
  function Jp(t, e) {
    return ((e = Fp(e)), Fp(t) === e);
  }
  function Br() {}
  function Rt(t, e, a, l, o, c) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || ui(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            ui(t, "" + l);
        break;
      case "className":
        qs(t, "class", l);
        break;
      case "tabIndex":
        qs(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        qs(t, a, l);
        break;
      case "style":
        Wd(t, l, c);
        break;
      case "data":
        if (e !== "object") {
          qs(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        ((l = Xs("" + l)), t.setAttribute(a, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == "function" &&
            (a === "formAction"
              ? (e !== "input" && Rt(t, e, "name", o.name, o, null),
                Rt(t, e, "formEncType", o.formEncType, o, null),
                Rt(t, e, "formMethod", o.formMethod, o, null),
                Rt(t, e, "formTarget", o.formTarget, o, null))
              : (Rt(t, e, "encType", o.encType, o, null),
                Rt(t, e, "method", o.method, o, null),
                Rt(t, e, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        ((l = Xs("" + l)), t.setAttribute(a, l));
        break;
      case "onClick":
        l != null && (t.onclick = Br);
        break;
      case "onScroll":
        l != null && pt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && pt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((a = l.__html), a != null)) {
            if (o.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((a = Xs("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(a, "" + l)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(a, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? t.setAttribute(a, l)
            : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(a, l)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(a)
          : t.setAttribute(a, l);
        break;
      case "popover":
        (pt("beforetoggle", t), pt("toggle", t), Ys(t, "popover", l));
        break;
      case "xlinkActuate":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Ys(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Bb.get(a) || a), Ys(t, a, l));
    }
  }
  function Ac(t, e, a, l, o, c) {
    switch (a) {
      case "style":
        Wd(t, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((a = l.__html), a != null)) {
            if (o.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? ui(t, l)
          : (typeof l == "number" || typeof l == "bigint") && ui(t, "" + l);
        break;
      case "onScroll":
        l != null && pt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && pt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Br);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!qd.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((o = a.endsWith("Capture")),
              (e = a.slice(2, o ? a.length - 7 : void 0)),
              (c = t[Vt] || null),
              (c = c != null ? c[a] : null),
              typeof c == "function" && t.removeEventListener(e, c, o),
              typeof l == "function")
            ) {
              (typeof c != "function" &&
                c !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(e, l, o));
              break t;
            }
            a in t
              ? (t[a] = l)
              : l === !0
                ? t.setAttribute(a, "")
                : Ys(t, a, l);
          }
    }
  }
  function de(t, e, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (pt("error", t), pt("load", t));
        var l = !1,
          o = !1,
          c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var y = a[c];
            if (y != null)
              switch (c) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Rt(t, e, c, y, a, null);
              }
          }
        (o && Rt(t, e, "srcSet", a.srcSet, a, null),
          l && Rt(t, e, "src", a.src, a, null));
        return;
      case "input":
        pt("invalid", t);
        var v = (c = y = o = null),
          T = null,
          N = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var H = a[l];
            if (H != null)
              switch (l) {
                case "name":
                  o = H;
                  break;
                case "type":
                  y = H;
                  break;
                case "checked":
                  T = H;
                  break;
                case "defaultChecked":
                  N = H;
                  break;
                case "value":
                  c = H;
                  break;
                case "defaultValue":
                  v = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null) throw Error(r(137, e));
                  break;
                default:
                  Rt(t, e, l, H, a, null);
              }
          }
        (Pd(t, c, v, T, N, y, o, !1), ks(t));
        return;
      case "select":
        (pt("invalid", t), (l = y = c = null));
        for (o in a)
          if (a.hasOwnProperty(o) && ((v = a[o]), v != null))
            switch (o) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                y = v;
                break;
              case "multiple":
                l = v;
              default:
                Rt(t, e, o, v, a, null);
            }
        ((e = c),
          (a = y),
          (t.multiple = !!l),
          e != null ? oi(t, !!l, e, !1) : a != null && oi(t, !!l, a, !0));
        return;
      case "textarea":
        (pt("invalid", t), (c = o = l = null));
        for (y in a)
          if (a.hasOwnProperty(y) && ((v = a[y]), v != null))
            switch (y) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                o = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(r(91));
                break;
              default:
                Rt(t, e, y, v, a, null);
            }
        (Jd(t, l, o, c), ks(t));
        return;
      case "option":
        for (T in a)
          if (a.hasOwnProperty(T) && ((l = a[T]), l != null))
            switch (T) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Rt(t, e, T, l, a, null);
            }
        return;
      case "dialog":
        (pt("beforetoggle", t),
          pt("toggle", t),
          pt("cancel", t),
          pt("close", t));
        break;
      case "iframe":
      case "object":
        pt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < kl.length; l++) pt(kl[l], t);
        break;
      case "image":
        (pt("error", t), pt("load", t));
        break;
      case "details":
        pt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (pt("error", t), pt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in a)
          if (a.hasOwnProperty(N) && ((l = a[N]), l != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Rt(t, e, N, l, a, null);
            }
        return;
      default:
        if (Yo(e)) {
          for (H in a)
            a.hasOwnProperty(H) &&
              ((l = a[H]), l !== void 0 && Ac(t, e, H, l, a, void 0));
          return;
        }
    }
    for (v in a)
      a.hasOwnProperty(v) && ((l = a[v]), l != null && Rt(t, e, v, l, a, null));
  }
  function r1(t, e, a, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null,
          c = null,
          y = null,
          v = null,
          T = null,
          N = null,
          H = null;
        for (U in a) {
          var q = a[U];
          if (a.hasOwnProperty(U) && q != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = q;
              default:
                l.hasOwnProperty(U) || Rt(t, e, U, null, l, q);
            }
        }
        for (var V in l) {
          var U = l[V];
          if (((q = a[V]), l.hasOwnProperty(V) && (U != null || q != null)))
            switch (V) {
              case "type":
                c = U;
                break;
              case "name":
                o = U;
                break;
              case "checked":
                N = U;
                break;
              case "defaultChecked":
                H = U;
                break;
              case "value":
                y = U;
                break;
              case "defaultValue":
                v = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(r(137, e));
                break;
              default:
                U !== q && Rt(t, e, V, U, l, q);
            }
        }
        jo(t, y, v, T, N, H, c, o);
        return;
      case "select":
        U = y = v = V = null;
        for (c in a)
          if (((T = a[c]), a.hasOwnProperty(c) && T != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                U = T;
              default:
                l.hasOwnProperty(c) || Rt(t, e, c, null, l, T);
            }
        for (o in l)
          if (
            ((c = l[o]),
            (T = a[o]),
            l.hasOwnProperty(o) && (c != null || T != null))
          )
            switch (o) {
              case "value":
                V = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                y = c;
              default:
                c !== T && Rt(t, e, o, c, l, T);
            }
        ((e = v),
          (a = y),
          (l = U),
          V != null
            ? oi(t, !!a, V, !1)
            : !!l != !!a &&
              (e != null ? oi(t, !!a, e, !0) : oi(t, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        U = V = null;
        for (v in a)
          if (
            ((o = a[v]),
            a.hasOwnProperty(v) && o != null && !l.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Rt(t, e, v, null, l, o);
            }
        for (y in l)
          if (
            ((o = l[y]),
            (c = a[y]),
            l.hasOwnProperty(y) && (o != null || c != null))
          )
            switch (y) {
              case "value":
                V = o;
                break;
              case "defaultValue":
                U = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                o !== c && Rt(t, e, y, o, l, c);
            }
        Fd(t, V, U);
        return;
      case "option":
        for (var st in a)
          if (
            ((V = a[st]),
            a.hasOwnProperty(st) && V != null && !l.hasOwnProperty(st))
          )
            switch (st) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Rt(t, e, st, null, l, V);
            }
        for (T in l)
          if (
            ((V = l[T]),
            (U = a[T]),
            l.hasOwnProperty(T) && V !== U && (V != null || U != null))
          )
            switch (T) {
              case "selected":
                t.selected =
                  V && typeof V != "function" && typeof V != "symbol";
                break;
              default:
                Rt(t, e, T, V, l, U);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var at in a)
          ((V = a[at]),
            a.hasOwnProperty(at) &&
              V != null &&
              !l.hasOwnProperty(at) &&
              Rt(t, e, at, null, l, V));
        for (N in l)
          if (
            ((V = l[N]),
            (U = a[N]),
            l.hasOwnProperty(N) && V !== U && (V != null || U != null))
          )
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(r(137, e));
                break;
              default:
                Rt(t, e, N, V, l, U);
            }
        return;
      default:
        if (Yo(e)) {
          for (var wt in a)
            ((V = a[wt]),
              a.hasOwnProperty(wt) &&
                V !== void 0 &&
                !l.hasOwnProperty(wt) &&
                Ac(t, e, wt, void 0, l, V));
          for (H in l)
            ((V = l[H]),
              (U = a[H]),
              !l.hasOwnProperty(H) ||
                V === U ||
                (V === void 0 && U === void 0) ||
                Ac(t, e, H, V, l, U));
          return;
        }
    }
    for (var R in a)
      ((V = a[R]),
        a.hasOwnProperty(R) &&
          V != null &&
          !l.hasOwnProperty(R) &&
          Rt(t, e, R, null, l, V));
    for (q in l)
      ((V = l[q]),
        (U = a[q]),
        !l.hasOwnProperty(q) ||
          V === U ||
          (V == null && U == null) ||
          Rt(t, e, q, V, l, U));
  }
  var Dc = null,
    Rc = null;
  function _r(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function $p(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wp(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function wc(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Mc = null;
  function o1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Mc
        ? !1
        : ((Mc = t), !0)
      : ((Mc = null), !1);
  }
  var Ip = typeof setTimeout == "function" ? setTimeout : void 0,
    u1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    tg = typeof Promise == "function" ? Promise : void 0,
    c1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof tg < "u"
          ? function (t) {
              return tg.resolve(null).then(t).catch(f1);
            }
          : Ip;
  function f1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ma(t) {
    return t === "head";
  }
  function eg(t, e) {
    var a = e,
      l = 0,
      o = 0;
    do {
      var c = a.nextSibling;
      if ((t.removeChild(a), c && c.nodeType === 8))
        if (((a = c.data), a === "/$")) {
          if (0 < l && 8 > l) {
            a = l;
            var y = t.ownerDocument;
            if ((a & 1 && Xl(y.documentElement), a & 2 && Xl(y.body), a & 4))
              for (a = y.head, Xl(a), y = a.firstChild; y; ) {
                var v = y.nextSibling,
                  T = y.nodeName;
                (y[wn] ||
                  T === "SCRIPT" ||
                  T === "STYLE" ||
                  (T === "LINK" && y.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(y),
                  (y = v));
              }
          }
          if (o === 0) {
            (t.removeChild(c), Wl(e));
            return;
          }
          o--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? o++
            : (l = a.charCodeAt(0) - 48);
      else l = 0;
      a = c;
    } while (a);
    Wl(e);
  }
  function Cc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (((e = e.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Cc(a), Lo(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function d1(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var o = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[wn])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((c = t.getAttribute("rel")),
                c === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== o.rel ||
                t.getAttribute("href") !==
                  (o.href == null || o.href === "" ? null : o.href) ||
                t.getAttribute("crossorigin") !==
                  (o.crossOrigin == null ? null : o.crossOrigin) ||
                t.getAttribute("title") !== (o.title == null ? null : o.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((c = t.getAttribute("src")),
                (c !== (o.src == null ? null : o.src) ||
                  t.getAttribute("type") !== (o.type == null ? null : o.type) ||
                  t.getAttribute("crossorigin") !==
                    (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  c &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === c) return t;
      } else return t;
      if (((t = on(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function h1(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = on(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Oc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function m1(t, e) {
    var a = t.ownerDocument;
    if (t.data !== "$?" || a.readyState === "complete") e();
    else {
      var l = function () {
        (e(), a.removeEventListener("DOMContentLoaded", l));
      };
      (a.addEventListener("DOMContentLoaded", l), (t._reactRetry = l));
    }
  }
  function on(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Nc = null;
  function ng(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (e === 0) return t;
          e--;
        } else a === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ag(t, e, a) {
    switch (((e = _r(a)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Xl(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Lo(t);
  }
  var Je = new Map(),
    ig = new Set();
  function jr(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var kn = G.d;
  G.d = { f: p1, r: g1, D: y1, C: v1, L: b1, m: S1, X: T1, S: x1, M: E1 };
  function p1() {
    var t = kn.f(),
      e = Cr();
    return t || e;
  }
  function g1(t) {
    var e = ii(t);
    e !== null && e.tag === 5 && e.type === "form" ? Am(e) : kn.r(t);
  }
  var ji = typeof document > "u" ? null : document;
  function lg(t, e, a) {
    var l = ji;
    if (l && typeof e == "string" && e) {
      var o = Ge(e);
      ((o = 'link[rel="' + t + '"][href="' + o + '"]'),
        typeof a == "string" && (o += '[crossorigin="' + a + '"]'),
        ig.has(o) ||
          (ig.add(o),
          (t = { rel: t, crossOrigin: a, href: e }),
          l.querySelector(o) === null &&
            ((e = l.createElement("link")),
            de(e, "link", t),
            ie(e),
            l.head.appendChild(e))));
    }
  }
  function y1(t) {
    (kn.D(t), lg("dns-prefetch", t, null));
  }
  function v1(t, e) {
    (kn.C(t, e), lg("preconnect", t, e));
  }
  function b1(t, e, a) {
    kn.L(t, e, a);
    var l = ji;
    if (l && t && e) {
      var o = 'link[rel="preload"][as="' + Ge(e) + '"]';
      e === "image" && a && a.imageSrcSet
        ? ((o += '[imagesrcset="' + Ge(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (o += '[imagesizes="' + Ge(a.imageSizes) + '"]'))
        : (o += '[href="' + Ge(t) + '"]');
      var c = o;
      switch (e) {
        case "style":
          c = Hi(t);
          break;
        case "script":
          c = Yi(t);
      }
      Je.has(c) ||
        ((t = g(
          {
            rel: "preload",
            href: e === "image" && a && a.imageSrcSet ? void 0 : t,
            as: e,
          },
          a,
        )),
        Je.set(c, t),
        l.querySelector(o) !== null ||
          (e === "style" && l.querySelector(Kl(c))) ||
          (e === "script" && l.querySelector(Zl(c))) ||
          ((e = l.createElement("link")),
          de(e, "link", t),
          ie(e),
          l.head.appendChild(e)));
    }
  }
  function S1(t, e) {
    kn.m(t, e);
    var a = ji;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        o =
          'link[rel="modulepreload"][as="' + Ge(l) + '"][href="' + Ge(t) + '"]',
        c = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Yi(t);
      }
      if (
        !Je.has(c) &&
        ((t = g({ rel: "modulepreload", href: t }, e)),
        Je.set(c, t),
        a.querySelector(o) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Zl(c))) return;
        }
        ((l = a.createElement("link")),
          de(l, "link", t),
          ie(l),
          a.head.appendChild(l));
      }
    }
  }
  function x1(t, e, a) {
    kn.S(t, e, a);
    var l = ji;
    if (l && t) {
      var o = li(l).hoistableStyles,
        c = Hi(t);
      e = e || "default";
      var y = o.get(c);
      if (!y) {
        var v = { loading: 0, preload: null };
        if ((y = l.querySelector(Kl(c)))) v.loading = 5;
        else {
          ((t = g({ rel: "stylesheet", href: t, "data-precedence": e }, a)),
            (a = Je.get(c)) && zc(t, a));
          var T = (y = l.createElement("link"));
          (ie(T),
            de(T, "link", t),
            (T._p = new Promise(function (N, H) {
              ((T.onload = N), (T.onerror = H));
            })),
            T.addEventListener("load", function () {
              v.loading |= 1;
            }),
            T.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            Hr(y, e, l));
        }
        ((y = { type: "stylesheet", instance: y, count: 1, state: v }),
          o.set(c, y));
      }
    }
  }
  function T1(t, e) {
    kn.X(t, e);
    var a = ji;
    if (a && t) {
      var l = li(a).hoistableScripts,
        o = Yi(t),
        c = l.get(o);
      c ||
        ((c = a.querySelector(Zl(o))),
        c ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = Je.get(o)) && Vc(t, e),
          (c = a.createElement("script")),
          ie(c),
          de(c, "link", t),
          a.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        l.set(o, c));
    }
  }
  function E1(t, e) {
    kn.M(t, e);
    var a = ji;
    if (a && t) {
      var l = li(a).hoistableScripts,
        o = Yi(t),
        c = l.get(o);
      c ||
        ((c = a.querySelector(Zl(o))),
        c ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = Je.get(o)) && Vc(t, e),
          (c = a.createElement("script")),
          ie(c),
          de(c, "link", t),
          a.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        l.set(o, c));
    }
  }
  function sg(t, e, a, l) {
    var o = (o = et.current) ? jr(o) : null;
    if (!o) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((e = Hi(a.href)),
            (a = li(o).hoistableStyles),
            (l = a.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = Hi(a.href);
          var c = li(o).hoistableStyles,
            y = c.get(t);
          if (
            (y ||
              ((o = o.ownerDocument || o),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, y),
              (c = o.querySelector(Kl(t))) &&
                !c._p &&
                ((y.instance = c), (y.state.loading = 5)),
              Je.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Je.set(t, a),
                c || A1(o, t, a, y.state))),
            e && l === null)
          )
            throw Error(r(528, ""));
          return y;
        }
        if (e && l !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = a.async),
          (a = a.src),
          typeof a == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Yi(a)),
              (a = li(o).hoistableScripts),
              (l = a.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Hi(t) {
    return 'href="' + Ge(t) + '"';
  }
  function Kl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function rg(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function A1(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        de(e, "link", a),
        ie(e),
        t.head.appendChild(e));
  }
  function Yi(t) {
    return '[src="' + Ge(t) + '"]';
  }
  function Zl(t) {
    return "script[async]" + t;
  }
  function og(t, e, a) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Ge(a.href) + '"]');
          if (l) return ((e.instance = l), ie(l), l);
          var o = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            ie(l),
            de(l, "style", o),
            Hr(l, a.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          o = Hi(a.href);
          var c = t.querySelector(Kl(o));
          if (c) return ((e.state.loading |= 4), (e.instance = c), ie(c), c);
          ((l = rg(a)),
            (o = Je.get(o)) && zc(l, o),
            (c = (t.ownerDocument || t).createElement("link")),
            ie(c));
          var y = c;
          return (
            (y._p = new Promise(function (v, T) {
              ((y.onload = v), (y.onerror = T));
            })),
            de(c, "link", l),
            (e.state.loading |= 4),
            Hr(c, a.precedence, t),
            (e.instance = c)
          );
        case "script":
          return (
            (c = Yi(a.src)),
            (o = t.querySelector(Zl(c)))
              ? ((e.instance = o), ie(o), o)
              : ((l = a),
                (o = Je.get(c)) && ((l = g({}, a)), Vc(l, o)),
                (t = t.ownerDocument || t),
                (o = t.createElement("script")),
                ie(o),
                de(o, "link", l),
                t.head.appendChild(o),
                (e.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), Hr(l, a.precedence, t));
    return e.instance;
  }
  function Hr(t, e, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        o = l.length ? l[l.length - 1] : null,
        c = o,
        y = 0;
      y < l.length;
      y++
    ) {
      var v = l[y];
      if (v.dataset.precedence === e) c = v;
      else if (c !== o) break;
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
  }
  function zc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Vc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Yr = null;
  function ug(t, e, a) {
    if (Yr === null) {
      var l = new Map(),
        o = (Yr = new Map());
      o.set(a, l);
    } else ((o = Yr), (l = o.get(a)), l || ((l = new Map()), o.set(a, l)));
    if (l.has(t)) return l;
    for (
      l.set(t, null), a = a.getElementsByTagName(t), o = 0;
      o < a.length;
      o++
    ) {
      var c = a[o];
      if (
        !(
          c[wn] ||
          c[zt] ||
          (t === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = c.getAttribute(e) || "";
        y = t + y;
        var v = l.get(y);
        v ? v.push(c) : l.set(y, [c]);
      }
    }
    return l;
  }
  function cg(t, e, a) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function D1(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function fg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Ql = null;
  function R1() {}
  function w1(t, e, a) {
    if (Ql === null) throw Error(r(475));
    var l = Ql;
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var o = Hi(a.href),
          c = t.querySelector(Kl(o));
        if (c) {
          ((t = c._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = qr.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = c),
            ie(c));
          return;
        }
        ((c = t.ownerDocument || t),
          (a = rg(a)),
          (o = Je.get(o)) && zc(a, o),
          (c = c.createElement("link")),
          ie(c));
        var y = c;
        ((y._p = new Promise(function (v, T) {
          ((y.onload = v), (y.onerror = T));
        })),
          de(c, "link", a),
          (e.instance = c));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = qr.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e)));
    }
  }
  function M1() {
    if (Ql === null) throw Error(r(475));
    var t = Ql;
    return (
      t.stylesheets && t.count === 0 && Lc(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Lc(t, t.stylesheets), t.unsuspend)) {
                var l = t.unsuspend;
                ((t.unsuspend = null), l());
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                ((t.unsuspend = null), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function qr() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Lc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var kr = null;
  function Lc(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (kr = new Map()),
        e.forEach(C1, t),
        (kr = null),
        qr.call(t)));
  }
  function C1(t, e) {
    if (!(e.state.loading & 4)) {
      var a = kr.get(t);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), kr.set(t, a));
        for (
          var o = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            c = 0;
          c < o.length;
          c++
        ) {
          var y = o[c];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (a.set(y.dataset.precedence, y), (l = y));
        }
        l && a.set(null, l);
      }
      ((o = e.instance),
        (y = o.getAttribute("data-precedence")),
        (c = a.get(y) || l),
        c === l && a.set(null, o),
        a.set(y, o),
        this.count++,
        (l = qr.bind(this)),
        o.addEventListener("load", l),
        o.addEventListener("error", l),
        c
          ? c.parentNode.insertBefore(o, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(o, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Pl = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0,
  };
  function O1(t, e, a, l, o, c, y, v) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ll(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ll(0)),
      (this.hiddenUpdates = ll(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = o),
      (this.onCaughtError = c),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map()));
  }
  function dg(t, e, a, l, o, c, y, v, T, N, H, q) {
    return (
      (t = new O1(t, e, a, y, v, T, N, q)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = Be(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = pu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: l, isDehydrated: a, cache: e }),
      bu(c),
      t
    );
  }
  function hg(t) {
    return t ? ((t = yi), t) : yi;
  }
  function mg(t, e, a, l, o, c) {
    ((o = hg(o)),
      l.context === null ? (l.context = o) : (l.pendingContext = o),
      (l = ea(e)),
      (l.payload = { element: a }),
      (c = c === void 0 ? null : c),
      c !== null && (l.callback = c),
      (a = na(t, l, e)),
      a !== null && (qe(a, t, e), Al(a, t, e)));
  }
  function pg(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Uc(t, e) {
    (pg(t, e), (t = t.alternate) && pg(t, e));
  }
  function gg(t) {
    if (t.tag === 13) {
      var e = gi(t, 67108864);
      (e !== null && qe(e, t, 67108864), Uc(t, 67108864));
    }
  }
  var Gr = !0;
  function N1(t, e, a, l) {
    var o = _.T;
    _.T = null;
    var c = G.p;
    try {
      ((G.p = 2), Bc(t, e, a, l));
    } finally {
      ((G.p = c), (_.T = o));
    }
  }
  function z1(t, e, a, l) {
    var o = _.T;
    _.T = null;
    var c = G.p;
    try {
      ((G.p = 8), Bc(t, e, a, l));
    } finally {
      ((G.p = c), (_.T = o));
    }
  }
  function Bc(t, e, a, l) {
    if (Gr) {
      var o = _c(l);
      if (o === null) (Ec(t, e, l, Xr, a), vg(t, l));
      else if (L1(o, t, e, a, l)) l.stopPropagation();
      else if ((vg(t, l), e & 4 && -1 < V1.indexOf(t))) {
        for (; o !== null; ) {
          var c = ii(o);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var y = an(c.pendingLanes);
                  if (y !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; y; ) {
                      var T = 1 << (31 - Wt(y));
                      ((v.entanglements[1] |= T), (y &= ~T));
                    }
                    (bn(c), (Et & 6) === 0 && ((wr = Ve() + 500), ql(0)));
                  }
                }
                break;
              case 13:
                ((v = gi(c, 2)), v !== null && qe(v, c, 2), Cr(), Uc(c, 2));
            }
          if (((c = _c(l)), c === null && Ec(t, e, l, Xr, a), c === o)) break;
          o = c;
        }
        o !== null && l.stopPropagation();
      } else Ec(t, e, l, null, a);
    }
  }
  function _c(t) {
    return ((t = ko(t)), jc(t));
  }
  var Xr = null;
  function jc(t) {
    if (((Xr = null), (t = ai(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (((t = d(e)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Xr = t), null);
  }
  function yg(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Vs()) {
          case Ia:
            return 2;
          case nn:
            return 8;
          case Dn:
          case ti:
            return 32;
          case il:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Hc = !1,
    pa = null,
    ga = null,
    ya = null,
    Fl = new Map(),
    Jl = new Map(),
    va = [],
    V1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function vg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        pa = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        ya = null;
        break;
      case "pointerover":
      case "pointerout":
        Fl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Jl.delete(e.pointerId);
    }
  }
  function $l(t, e, a, l, o, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: c,
          targetContainers: [o],
        }),
        e !== null && ((e = ii(e)), e !== null && gg(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        o !== null && e.indexOf(o) === -1 && e.push(o),
        t);
  }
  function L1(t, e, a, l, o) {
    switch (e) {
      case "focusin":
        return ((pa = $l(pa, t, e, a, l, o)), !0);
      case "dragenter":
        return ((ga = $l(ga, t, e, a, l, o)), !0);
      case "mouseover":
        return ((ya = $l(ya, t, e, a, l, o)), !0);
      case "pointerover":
        var c = o.pointerId;
        return (Fl.set(c, $l(Fl.get(c) || null, t, e, a, l, o)), !0);
      case "gotpointercapture":
        return (
          (c = o.pointerId),
          Jl.set(c, $l(Jl.get(c) || null, t, e, a, l, o)),
          !0
        );
    }
    return !1;
  }
  function bg(t) {
    var e = ai(t.target);
    if (e !== null) {
      var a = f(e);
      if (a !== null) {
        if (((e = a.tag), e === 13)) {
          if (((e = d(a)), e !== null)) {
            ((t.blockedOn = e),
              Jn(t.priority, function () {
                if (a.tag === 13) {
                  var l = Ye();
                  l = pe(l);
                  var o = gi(a, l);
                  (o !== null && qe(o, a, l), Uc(a, l));
                }
              }));
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Kr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = _c(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((qo = l), a.target.dispatchEvent(l), (qo = null));
      } else return ((e = ii(a)), e !== null && gg(e), (t.blockedOn = a), !1);
      e.shift();
    }
    return !0;
  }
  function Sg(t, e, a) {
    Kr(t) && a.delete(e);
  }
  function U1() {
    ((Hc = !1),
      pa !== null && Kr(pa) && (pa = null),
      ga !== null && Kr(ga) && (ga = null),
      ya !== null && Kr(ya) && (ya = null),
      Fl.forEach(Sg),
      Jl.forEach(Sg));
  }
  function Zr(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Hc ||
        ((Hc = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, U1)));
  }
  var Qr = null;
  function xg(t) {
    Qr !== t &&
      ((Qr = t),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Qr === t && (Qr = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e],
            l = t[e + 1],
            o = t[e + 2];
          if (typeof l != "function") {
            if (jc(l || a) === null) continue;
            break;
          }
          var c = ii(a);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            ju(c, { pending: !0, data: o, method: a.method, action: l }, l, o));
        }
      }));
  }
  function Wl(t) {
    function e(T) {
      return Zr(T, t);
    }
    (pa !== null && Zr(pa, t),
      ga !== null && Zr(ga, t),
      ya !== null && Zr(ya, t),
      Fl.forEach(e),
      Jl.forEach(e));
    for (var a = 0; a < va.length; a++) {
      var l = va[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < va.length && ((a = va[0]), a.blockedOn === null); )
      (bg(a), a.blockedOn === null && va.shift());
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var o = a[l],
          c = a[l + 1],
          y = o[Vt] || null;
        if (typeof c == "function") y || xg(a);
        else if (y) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (((o = c), (y = c[Vt] || null))) v = y.formAction;
            else if (jc(o) !== null) continue;
          } else v = y.action;
          (typeof v == "function" ? (a[l + 1] = v) : (a.splice(l, 3), (l -= 3)),
            xg(a));
        }
      }
  }
  function Yc(t) {
    this._internalRoot = t;
  }
  ((Pr.prototype.render = Yc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var a = e.current,
        l = Ye();
      mg(a, l, t, e, null, null);
    }),
    (Pr.prototype.unmount = Yc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (mg(t.current, 2, null, t, null, null), Cr(), (e[ge] = null));
        }
      }));
  function Pr(t) {
    this._internalRoot = t;
  }
  Pr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Le();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < va.length && e !== 0 && e < va[a].priority; a++);
      (va.splice(a, 0, t), a === 0 && bg(t));
    }
  };
  var Tg = i.version;
  if (Tg !== "19.1.1") throw Error(r(527, Tg, "19.1.1"));
  G.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var B1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fr.isDisabled && Fr.supportsFiber)
      try {
        ((Da = Fr.inject(B1)), (Pt = Fr));
      } catch {}
  }
  return (
    (ts.createRoot = function (t, e) {
      if (!u(t)) throw Error(r(299));
      var a = !1,
        l = "",
        o = jm,
        c = Hm,
        y = Ym,
        v = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (o = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (y = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (v = e.unstable_transitionCallbacks)),
        (e = dg(t, 1, !1, null, null, a, l, o, c, y, v, null)),
        (t[ge] = e.current),
        Tc(t),
        new Yc(e)
      );
    }),
    (ts.hydrateRoot = function (t, e, a) {
      if (!u(t)) throw Error(r(299));
      var l = !1,
        o = "",
        c = jm,
        y = Hm,
        v = Ym,
        T = null,
        N = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (o = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
          a.onCaughtError !== void 0 && (y = a.onCaughtError),
          a.onRecoverableError !== void 0 && (v = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (T = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (N = a.formState)),
        (e = dg(t, 1, !0, e, a ?? null, l, o, c, y, v, T, N)),
        (e.context = hg(null)),
        (a = e.current),
        (l = Ye()),
        (l = pe(l)),
        (o = ea(l)),
        (o.callback = null),
        na(a, o, l),
        (a = l),
        (e.current.lanes = a),
        Ht(e, a),
        bn(e),
        (t[ge] = e.current),
        Tc(t),
        new Pr(e)
      );
    }),
    (ts.version = "19.1.1"),
    ts
  );
}
var zg;
function Z1() {
  if (zg) return Gc.exports;
  zg = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (Gc.exports = K1()), Gc.exports);
}
var Q1 = Z1();
/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Vg = "popstate";
function P1(n = {}) {
  function i(r, u) {
    let { pathname: f, search: d, hash: h } = r.location;
    return pf(
      "",
      { pathname: f, search: d, hash: h },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || "default",
    );
  }
  function s(r, u) {
    return typeof u == "string" ? u : hs(u);
  }
  return J1(i, s, null, n);
}
function jt(n, i) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(i);
}
function Tn(n, i) {
  if (!n) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function F1() {
  return Math.random().toString(36).substring(2, 10);
}
function Lg(n, i) {
  return { usr: n.state, key: n.key, idx: i };
}
function pf(n, i, s = null, r) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? Ji(i) : i),
    state: s,
    key: (i && i.key) || r || F1(),
  };
}
function hs({ pathname: n = "/", search: i = "", hash: s = "" }) {
  return (
    i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i),
    s && s !== "#" && (n += s.charAt(0) === "#" ? s : "#" + s),
    n
  );
}
function Ji(n) {
  let i = {};
  if (n) {
    let s = n.indexOf("#");
    s >= 0 && ((i.hash = n.substring(s)), (n = n.substring(0, s)));
    let r = n.indexOf("?");
    (r >= 0 && ((i.search = n.substring(r)), (n = n.substring(0, r))),
      n && (i.pathname = n));
  }
  return i;
}
function J1(n, i, s, r = {}) {
  let { window: u = document.defaultView, v5Compat: f = !1 } = r,
    d = u.history,
    h = "POP",
    p = null,
    m = g();
  m == null && ((m = 0), d.replaceState({ ...d.state, idx: m }, ""));
  function g() {
    return (d.state || { idx: null }).idx;
  }
  function b() {
    h = "POP";
    let M = g(),
      z = M == null ? null : M - m;
    ((m = M), p && p({ action: h, location: O.location, delta: z }));
  }
  function x(M, z) {
    h = "PUSH";
    let L = pf(O.location, M, z);
    m = g() + 1;
    let B = Lg(L, m),
      Z = O.createHref(L);
    try {
      d.pushState(B, "", Z);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      u.location.assign(Z);
    }
    f && p && p({ action: h, location: O.location, delta: 1 });
  }
  function E(M, z) {
    h = "REPLACE";
    let L = pf(O.location, M, z);
    m = g();
    let B = Lg(L, m),
      Z = O.createHref(L);
    (d.replaceState(B, "", Z),
      f && p && p({ action: h, location: O.location, delta: 0 }));
  }
  function C(M) {
    return $1(M);
  }
  let O = {
    get action() {
      return h;
    },
    get location() {
      return n(u, d);
    },
    listen(M) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        u.addEventListener(Vg, b),
        (p = M),
        () => {
          (u.removeEventListener(Vg, b), (p = null));
        }
      );
    },
    createHref(M) {
      return i(u, M);
    },
    createURL: C,
    encodeLocation(M) {
      let z = C(M);
      return { pathname: z.pathname, search: z.search, hash: z.hash };
    },
    push: x,
    replace: E,
    go(M) {
      return d.go(M);
    },
  };
  return O;
}
function $1(n, i = !1) {
  let s = "http://localhost";
  (typeof window < "u" &&
    (s =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    jt(s, "No window.location.(origin|href) available to create URL"));
  let r = typeof n == "string" ? n : hs(n);
  return (
    (r = r.replace(/ $/, "%20")),
    !i && r.startsWith("//") && (r = s + r),
    new URL(r, s)
  );
}
function hv(n, i, s = "/") {
  return W1(n, i, s, !1);
}
function W1(n, i, s, r) {
  let u = typeof i == "string" ? Ji(i) : i,
    f = Xn(u.pathname || "/", s);
  if (f == null) return null;
  let d = mv(n);
  I1(d);
  let h = null;
  for (let p = 0; h == null && p < d.length; ++p) {
    let m = cx(f);
    h = ox(d[p], m, r);
  }
  return h;
}
function mv(n, i = [], s = [], r = "", u = !1) {
  let f = (d, h, p = u, m) => {
    let g = {
      relativePath: m === void 0 ? d.path || "" : m,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    if (g.relativePath.startsWith("/")) {
      if (!g.relativePath.startsWith(r) && p) return;
      (jt(
        g.relativePath.startsWith(r),
        `Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (g.relativePath = g.relativePath.slice(r.length)));
    }
    let b = Gn([r, g.relativePath]),
      x = s.concat(g);
    (d.children &&
      d.children.length > 0 &&
      (jt(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`,
      ),
      mv(d.children, i, x, b, p)),
      !(d.path == null && !d.index) &&
        i.push({ path: b, score: sx(b, d.index), routesMeta: x }));
  };
  return (
    n.forEach((d, h) => {
      if (d.path === "" || !d.path?.includes("?")) f(d, h);
      else for (let p of pv(d.path)) f(d, h, !0, p);
    }),
    i
  );
}
function pv(n) {
  let i = n.split("/");
  if (i.length === 0) return [];
  let [s, ...r] = i,
    u = s.endsWith("?"),
    f = s.replace(/\?$/, "");
  if (r.length === 0) return u ? [f, ""] : [f];
  let d = pv(r.join("/")),
    h = [];
  return (
    h.push(...d.map((p) => (p === "" ? f : [f, p].join("/")))),
    u && h.push(...d),
    h.map((p) => (n.startsWith("/") && p === "" ? "/" : p))
  );
}
function I1(n) {
  n.sort((i, s) =>
    i.score !== s.score
      ? s.score - i.score
      : rx(
          i.routesMeta.map((r) => r.childrenIndex),
          s.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
var tx = /^:[\w-]+$/,
  ex = 3,
  nx = 2,
  ax = 1,
  ix = 10,
  lx = -2,
  Ug = (n) => n === "*";
function sx(n, i) {
  let s = n.split("/"),
    r = s.length;
  return (
    s.some(Ug) && (r += lx),
    i && (r += nx),
    s
      .filter((u) => !Ug(u))
      .reduce((u, f) => u + (tx.test(f) ? ex : f === "" ? ax : ix), r)
  );
}
function rx(n, i) {
  return n.length === i.length && n.slice(0, -1).every((r, u) => r === i[u])
    ? n[n.length - 1] - i[i.length - 1]
    : 0;
}
function ox(n, i, s = !1) {
  let { routesMeta: r } = n,
    u = {},
    f = "/",
    d = [];
  for (let h = 0; h < r.length; ++h) {
    let p = r[h],
      m = h === r.length - 1,
      g = f === "/" ? i : i.slice(f.length) || "/",
      b = ho(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: m },
        g,
      ),
      x = p.route;
    if (
      (!b &&
        m &&
        s &&
        !r[r.length - 1].route.index &&
        (b = ho(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          g,
        )),
      !b)
    )
      return null;
    (Object.assign(u, b.params),
      d.push({
        params: u,
        pathname: Gn([f, b.pathname]),
        pathnameBase: mx(Gn([f, b.pathnameBase])),
        route: x,
      }),
      b.pathnameBase !== "/" && (f = Gn([f, b.pathnameBase])));
  }
  return d;
}
function ho(n, i) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [s, r] = ux(n.path, n.caseSensitive, n.end),
    u = i.match(s);
  if (!u) return null;
  let f = u[0],
    d = f.replace(/(.)\/+$/, "$1"),
    h = u.slice(1);
  return {
    params: r.reduce((m, { paramName: g, isOptional: b }, x) => {
      if (g === "*") {
        let C = h[x] || "";
        d = f.slice(0, f.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const E = h[x];
      return (
        b && !E ? (m[g] = void 0) : (m[g] = (E || "").replace(/%2F/g, "/")),
        m
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: n,
  };
}
function ux(n, i = !1, s = !0) {
  Tn(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`,
  );
  let r = [],
    u =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, h, p) => (
            r.push({ paramName: h, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    n.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (u += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
        ? (u += "\\/*$")
        : n !== "" && n !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u, i ? void 0 : "i"), r]
  );
}
function cx(n) {
  try {
    return n
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      Tn(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`,
      ),
      n
    );
  }
}
function Xn(n, i) {
  if (i === "/") return n;
  if (!n.toLowerCase().startsWith(i.toLowerCase())) return null;
  let s = i.endsWith("/") ? i.length - 1 : i.length,
    r = n.charAt(s);
  return r && r !== "/" ? null : n.slice(s) || "/";
}
function fx(n, i = "/") {
  let {
    pathname: s,
    search: r = "",
    hash: u = "",
  } = typeof n == "string" ? Ji(n) : n;
  return {
    pathname: s ? (s.startsWith("/") ? s : dx(s, i)) : i,
    search: px(r),
    hash: gx(u),
  };
}
function dx(n, i) {
  let s = i.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((u) => {
      u === ".." ? s.length > 1 && s.pop() : u !== "." && s.push(u);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Qc(n, i, s, r) {
  return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function hx(n) {
  return n.filter(
    (i, s) => s === 0 || (i.route.path && i.route.path.length > 0),
  );
}
function gv(n) {
  let i = hx(n);
  return i.map((s, r) => (r === i.length - 1 ? s.pathname : s.pathnameBase));
}
function yv(n, i, s, r = !1) {
  let u;
  typeof n == "string"
    ? (u = Ji(n))
    : ((u = { ...n }),
      jt(
        !u.pathname || !u.pathname.includes("?"),
        Qc("?", "pathname", "search", u),
      ),
      jt(
        !u.pathname || !u.pathname.includes("#"),
        Qc("#", "pathname", "hash", u),
      ),
      jt(!u.search || !u.search.includes("#"), Qc("#", "search", "hash", u)));
  let f = n === "" || u.pathname === "",
    d = f ? "/" : u.pathname,
    h;
  if (d == null) h = s;
  else {
    let b = i.length - 1;
    if (!r && d.startsWith("..")) {
      let x = d.split("/");
      for (; x[0] === ".."; ) (x.shift(), (b -= 1));
      u.pathname = x.join("/");
    }
    h = b >= 0 ? i[b] : "/";
  }
  let p = fx(u, h),
    m = d && d !== "/" && d.endsWith("/"),
    g = (f || d === ".") && s.endsWith("/");
  return (!p.pathname.endsWith("/") && (m || g) && (p.pathname += "/"), p);
}
var Gn = (n) => n.join("/").replace(/\/\/+/g, "/"),
  mx = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  px = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  gx = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function yx(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
var vv = ["POST", "PUT", "PATCH", "DELETE"];
new Set(vv);
var vx = ["GET", ...vv];
new Set(vx);
var $i = S.createContext(null);
$i.displayName = "DataRouter";
var Ao = S.createContext(null);
Ao.displayName = "DataRouterState";
S.createContext(!1);
var bv = S.createContext({ isTransitioning: !1 });
bv.displayName = "ViewTransition";
var bx = S.createContext(new Map());
bx.displayName = "Fetchers";
var Sx = S.createContext(null);
Sx.displayName = "Await";
var An = S.createContext(null);
An.displayName = "Navigation";
var Es = S.createContext(null);
Es.displayName = "Location";
var Qn = S.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Qn.displayName = "Route";
var Qf = S.createContext(null);
Qf.displayName = "RouteError";
function xx(n, { relative: i } = {}) {
  jt(
    As(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: s, navigator: r } = S.useContext(An),
    { hash: u, pathname: f, search: d } = Ds(n, { relative: i }),
    h = f;
  return (
    s !== "/" && (h = f === "/" ? s : Gn([s, f])),
    r.createHref({ pathname: h, search: d, hash: u })
  );
}
function As() {
  return S.useContext(Es) != null;
}
function Wa() {
  return (
    jt(
      As(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    S.useContext(Es).location
  );
}
var Sv =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function xv(n) {
  S.useContext(An).static || S.useLayoutEffect(n);
}
function Tx() {
  let { isDataRoute: n } = S.useContext(Qn);
  return n ? Ux() : Ex();
}
function Ex() {
  jt(
    As(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let n = S.useContext($i),
    { basename: i, navigator: s } = S.useContext(An),
    { matches: r } = S.useContext(Qn),
    { pathname: u } = Wa(),
    f = JSON.stringify(gv(r)),
    d = S.useRef(!1);
  return (
    xv(() => {
      d.current = !0;
    }),
    S.useCallback(
      (p, m = {}) => {
        if ((Tn(d.current, Sv), !d.current)) return;
        if (typeof p == "number") {
          s.go(p);
          return;
        }
        let g = yv(p, JSON.parse(f), u, m.relative === "path");
        (n == null &&
          i !== "/" &&
          (g.pathname = g.pathname === "/" ? i : Gn([i, g.pathname])),
          (m.replace ? s.replace : s.push)(g, m.state, m));
      },
      [i, s, f, u, n],
    )
  );
}
S.createContext(null);
function Ds(n, { relative: i } = {}) {
  let { matches: s } = S.useContext(Qn),
    { pathname: r } = Wa(),
    u = JSON.stringify(gv(s));
  return S.useMemo(() => yv(n, JSON.parse(u), r, i === "path"), [n, u, r, i]);
}
function Ax(n, i) {
  return Tv(n, i);
}
function Tv(n, i, s, r, u) {
  jt(
    As(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: f } = S.useContext(An),
    { matches: d } = S.useContext(Qn),
    h = d[d.length - 1],
    p = h ? h.params : {},
    m = h ? h.pathname : "/",
    g = h ? h.pathnameBase : "/",
    b = h && h.route;
  {
    let L = (b && b.path) || "";
    Ev(
      m,
      !b || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`,
    );
  }
  let x = Wa(),
    E;
  if (i) {
    let L = typeof i == "string" ? Ji(i) : i;
    (jt(
      g === "/" || L.pathname?.startsWith(g),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`,
    ),
      (E = L));
  } else E = x;
  let C = E.pathname || "/",
    O = C;
  if (g !== "/") {
    let L = g.replace(/^\//, "").split("/");
    O = "/" + C.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let M = hv(n, { pathname: O });
  (Tn(
    b || M != null,
    `No routes matched location "${E.pathname}${E.search}${E.hash}" `,
  ),
    Tn(
      M == null ||
        M[M.length - 1].route.element !== void 0 ||
        M[M.length - 1].route.Component !== void 0 ||
        M[M.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let z = Cx(
    M &&
      M.map((L) =>
        Object.assign({}, L, {
          params: Object.assign({}, p, L.params),
          pathname: Gn([
            g,
            f.encodeLocation
              ? f.encodeLocation(
                  L.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : L.pathname,
          ]),
          pathnameBase:
            L.pathnameBase === "/"
              ? g
              : Gn([
                  g,
                  f.encodeLocation
                    ? f.encodeLocation(
                        L.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : L.pathnameBase,
                ]),
        }),
      ),
    d,
    s,
    r,
    u,
  );
  return i && z
    ? S.createElement(
        Es.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...E,
            },
            navigationType: "POP",
          },
        },
        z,
      )
    : z;
}
function Dx() {
  let n = Lx(),
    i = yx(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    s = n instanceof Error ? n.stack : null,
    r = "rgba(200,200,200, 0.5)",
    u = { padding: "0.5rem", backgroundColor: r },
    f = { padding: "2px 4px", backgroundColor: r },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (d = S.createElement(
      S.Fragment,
      null,
      S.createElement("p", null, "💿 Hey developer 👋"),
      S.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        S.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        S.createElement("code", { style: f }, "errorElement"),
        " prop on your route.",
      ),
    )),
    S.createElement(
      S.Fragment,
      null,
      S.createElement("h2", null, "Unexpected Application Error!"),
      S.createElement("h3", { style: { fontStyle: "italic" } }, i),
      s ? S.createElement("pre", { style: u }, s) : null,
      d,
    )
  );
}
var Rx = S.createElement(Dx, null),
  wx = class extends S.Component {
    constructor(n) {
      (super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        }));
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, i) {
      return i.location !== n.location ||
        (i.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : i.error,
            location: i.location,
            revalidation: n.revalidation || i.revalidation,
          };
    }
    componentDidCatch(n, i) {
      this.props.unstable_onError
        ? this.props.unstable_onError(n, i)
        : console.error(
            "React Router caught the following error during render",
            n,
          );
    }
    render() {
      return this.state.error !== void 0
        ? S.createElement(
            Qn.Provider,
            { value: this.props.routeContext },
            S.createElement(Qf.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Mx({ routeContext: n, match: i, children: s }) {
  let r = S.useContext($i);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = i.route.id),
    S.createElement(Qn.Provider, { value: n }, s)
  );
}
function Cx(n, i = [], s = null, r = null, u = null) {
  if (n == null) {
    if (!s) return null;
    if (s.errors) n = s.matches;
    else if (i.length === 0 && !s.initialized && s.matches.length > 0)
      n = s.matches;
    else return null;
  }
  let f = n,
    d = s?.errors;
  if (d != null) {
    let m = f.findIndex((g) => g.route.id && d?.[g.route.id] !== void 0);
    (jt(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`,
    ),
      (f = f.slice(0, Math.min(f.length, m + 1))));
  }
  let h = !1,
    p = -1;
  if (s)
    for (let m = 0; m < f.length; m++) {
      let g = f[m];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (p = m),
        g.route.id)
      ) {
        let { loaderData: b, errors: x } = s,
          E =
            g.route.loader &&
            !b.hasOwnProperty(g.route.id) &&
            (!x || x[g.route.id] === void 0);
        if (g.route.lazy || E) {
          ((h = !0), p >= 0 ? (f = f.slice(0, p + 1)) : (f = [f[0]]));
          break;
        }
      }
    }
  return f.reduceRight((m, g, b) => {
    let x,
      E = !1,
      C = null,
      O = null;
    s &&
      ((x = d && g.route.id ? d[g.route.id] : void 0),
      (C = g.route.errorElement || Rx),
      h &&
        (p < 0 && b === 0
          ? (Ev(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (E = !0),
            (O = null))
          : p === b &&
            ((E = !0), (O = g.route.hydrateFallbackElement || null))));
    let M = i.concat(f.slice(0, b + 1)),
      z = () => {
        let L;
        return (
          x
            ? (L = C)
            : E
              ? (L = O)
              : g.route.Component
                ? (L = S.createElement(g.route.Component, null))
                : g.route.element
                  ? (L = g.route.element)
                  : (L = m),
          S.createElement(Mx, {
            match: g,
            routeContext: { outlet: m, matches: M, isDataRoute: s != null },
            children: L,
          })
        );
      };
    return s && (g.route.ErrorBoundary || g.route.errorElement || b === 0)
      ? S.createElement(wx, {
          location: s.location,
          revalidation: s.revalidation,
          component: C,
          error: x,
          children: z(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
          unstable_onError: r,
        })
      : z();
  }, null);
}
function Pf(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ox(n) {
  let i = S.useContext($i);
  return (jt(i, Pf(n)), i);
}
function Nx(n) {
  let i = S.useContext(Ao);
  return (jt(i, Pf(n)), i);
}
function zx(n) {
  let i = S.useContext(Qn);
  return (jt(i, Pf(n)), i);
}
function Ff(n) {
  let i = zx(n),
    s = i.matches[i.matches.length - 1];
  return (
    jt(
      s.route.id,
      `${n} can only be used on routes that contain a unique "id"`,
    ),
    s.route.id
  );
}
function Vx() {
  return Ff("useRouteId");
}
function Lx() {
  let n = S.useContext(Qf),
    i = Nx("useRouteError"),
    s = Ff("useRouteError");
  return n !== void 0 ? n : i.errors?.[s];
}
function Ux() {
  let { router: n } = Ox("useNavigate"),
    i = Ff("useNavigate"),
    s = S.useRef(!1);
  return (
    xv(() => {
      s.current = !0;
    }),
    S.useCallback(
      async (u, f = {}) => {
        (Tn(s.current, Sv),
          s.current &&
            (typeof u == "number"
              ? n.navigate(u)
              : await n.navigate(u, { fromRouteId: i, ...f })));
      },
      [n, i],
    )
  );
}
var Bg = {};
function Ev(n, i, s) {
  !i && !Bg[n] && ((Bg[n] = !0), Tn(!1, s));
}
S.memo(Bx);
function Bx({ routes: n, future: i, state: s, unstable_onError: r }) {
  return Tv(n, void 0, s, r, i);
}
function gf(n) {
  jt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function _x({
  basename: n = "/",
  children: i = null,
  location: s,
  navigationType: r = "POP",
  navigator: u,
  static: f = !1,
}) {
  jt(
    !As(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let d = n.replace(/^\/*/, "/"),
    h = S.useMemo(
      () => ({ basename: d, navigator: u, static: f, future: {} }),
      [d, u, f],
    );
  typeof s == "string" && (s = Ji(s));
  let {
      pathname: p = "/",
      search: m = "",
      hash: g = "",
      state: b = null,
      key: x = "default",
    } = s,
    E = S.useMemo(() => {
      let C = Xn(p, d);
      return C == null
        ? null
        : {
            location: { pathname: C, search: m, hash: g, state: b, key: x },
            navigationType: r,
          };
    }, [d, p, m, g, b, x, r]);
  return (
    Tn(
      E != null,
      `<Router basename="${d}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    E == null
      ? null
      : S.createElement(
          An.Provider,
          { value: h },
          S.createElement(Es.Provider, { children: i, value: E }),
        )
  );
}
function jx({ children: n, location: i }) {
  return Ax(yf(n), i);
}
function yf(n, i = []) {
  let s = [];
  return (
    S.Children.forEach(n, (r, u) => {
      if (!S.isValidElement(r)) return;
      let f = [...i, u];
      if (r.type === S.Fragment) {
        s.push.apply(s, yf(r.props.children, f));
        return;
      }
      (jt(
        r.type === gf,
        `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        jt(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes.",
        ));
      let d = {
        id: r.props.id || f.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        middleware: r.props.middleware,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (d.children = yf(r.props.children, f)), s.push(d));
    }),
    s
  );
}
var lo = "get",
  so = "application/x-www-form-urlencoded";
function Do(n) {
  return n != null && typeof n.tagName == "string";
}
function Hx(n) {
  return Do(n) && n.tagName.toLowerCase() === "button";
}
function Yx(n) {
  return Do(n) && n.tagName.toLowerCase() === "form";
}
function qx(n) {
  return Do(n) && n.tagName.toLowerCase() === "input";
}
function kx(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Gx(n, i) {
  return n.button === 0 && (!i || i === "_self") && !kx(n);
}
var Jr = null;
function Xx() {
  if (Jr === null)
    try {
      (new FormData(document.createElement("form"), 0), (Jr = !1));
    } catch {
      Jr = !0;
    }
  return Jr;
}
var Kx = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Pc(n) {
  return n != null && !Kx.has(n)
    ? (Tn(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${so}"`,
      ),
      null)
    : n;
}
function Zx(n, i) {
  let s, r, u, f, d;
  if (Yx(n)) {
    let h = n.getAttribute("action");
    ((r = h ? Xn(h, i) : null),
      (s = n.getAttribute("method") || lo),
      (u = Pc(n.getAttribute("enctype")) || so),
      (f = new FormData(n)));
  } else if (Hx(n) || (qx(n) && (n.type === "submit" || n.type === "image"))) {
    let h = n.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let p = n.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((r = p ? Xn(p, i) : null),
      (s = n.getAttribute("formmethod") || h.getAttribute("method") || lo),
      (u =
        Pc(n.getAttribute("formenctype")) ||
        Pc(h.getAttribute("enctype")) ||
        so),
      (f = new FormData(h, n)),
      !Xx())
    ) {
      let { name: m, type: g, value: b } = n;
      if (g === "image") {
        let x = m ? `${m}.` : "";
        (f.append(`${x}x`, "0"), f.append(`${x}y`, "0"));
      } else m && f.append(m, b);
    }
  } else {
    if (Do(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((s = lo), (r = null), (u = so), (d = n));
  }
  return (
    f && u === "text/plain" && ((d = f), (f = void 0)),
    { action: r, method: s.toLowerCase(), encType: u, formData: f, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Jf(n, i) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(i);
}
function Qx(n, i, s) {
  let r =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : n;
  return (
    r.pathname === "/"
      ? (r.pathname = `_root.${s}`)
      : i && Xn(r.pathname, i) === "/"
        ? (r.pathname = `${i.replace(/\/$/, "")}/_root.${s}`)
        : (r.pathname = `${r.pathname.replace(/\/$/, "")}.${s}`),
    r
  );
}
async function Px(n, i) {
  if (n.id in i) return i[n.id];
  try {
    let s = await import(n.module);
    return ((i[n.id] = s), s);
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`,
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Fx(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === "preload" &&
        typeof n.imageSrcSet == "string" &&
        typeof n.imageSizes == "string"
      : typeof n.rel == "string" && typeof n.href == "string";
}
async function Jx(n, i, s) {
  let r = await Promise.all(
    n.map(async (u) => {
      let f = i.routes[u.route.id];
      if (f) {
        let d = await Px(f, s);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return tT(
    r
      .flat(1)
      .filter(Fx)
      .filter((u) => u.rel === "stylesheet" || u.rel === "preload")
      .map((u) =>
        u.rel === "stylesheet"
          ? { ...u, rel: "prefetch", as: "style" }
          : { ...u, rel: "prefetch" },
      ),
  );
}
function _g(n, i, s, r, u, f) {
  let d = (p, m) => (s[m] ? p.route.id !== s[m].route.id : !0),
    h = (p, m) =>
      s[m].pathname !== p.pathname ||
      (s[m].route.path?.endsWith("*") && s[m].params["*"] !== p.params["*"]);
  return f === "assets"
    ? i.filter((p, m) => d(p, m) || h(p, m))
    : f === "data"
      ? i.filter((p, m) => {
          let g = r.routes[p.route.id];
          if (!g || !g.hasLoader) return !1;
          if (d(p, m) || h(p, m)) return !0;
          if (p.route.shouldRevalidate) {
            let b = p.route.shouldRevalidate({
              currentUrl: new URL(
                u.pathname + u.search + u.hash,
                window.origin,
              ),
              currentParams: s[0]?.params || {},
              nextUrl: new URL(n, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof b == "boolean") return b;
          }
          return !0;
        })
      : [];
}
function $x(n, i, { includeHydrateFallback: s } = {}) {
  return Wx(
    n
      .map((r) => {
        let u = i.routes[r.route.id];
        if (!u) return [];
        let f = [u.module];
        return (
          u.clientActionModule && (f = f.concat(u.clientActionModule)),
          u.clientLoaderModule && (f = f.concat(u.clientLoaderModule)),
          s &&
            u.hydrateFallbackModule &&
            (f = f.concat(u.hydrateFallbackModule)),
          u.imports && (f = f.concat(u.imports)),
          f
        );
      })
      .flat(1),
  );
}
function Wx(n) {
  return [...new Set(n)];
}
function Ix(n) {
  let i = {},
    s = Object.keys(n).sort();
  for (let r of s) i[r] = n[r];
  return i;
}
function tT(n, i) {
  let s = new Set();
  return (
    new Set(i),
    n.reduce((r, u) => {
      let f = JSON.stringify(Ix(u));
      return (s.has(f) || (s.add(f), r.push({ key: f, link: u })), r);
    }, [])
  );
}
function Av() {
  let n = S.useContext($i);
  return (
    Jf(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    n
  );
}
function eT() {
  let n = S.useContext(Ao);
  return (
    Jf(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    n
  );
}
var $f = S.createContext(void 0);
$f.displayName = "FrameworkContext";
function Dv() {
  let n = S.useContext($f);
  return (
    Jf(n, "You must render this element inside a <HydratedRouter> element"),
    n
  );
}
function nT(n, i) {
  let s = S.useContext($f),
    [r, u] = S.useState(!1),
    [f, d] = S.useState(!1),
    {
      onFocus: h,
      onBlur: p,
      onMouseEnter: m,
      onMouseLeave: g,
      onTouchStart: b,
    } = i,
    x = S.useRef(null);
  (S.useEffect(() => {
    if ((n === "render" && d(!0), n === "viewport")) {
      let O = (z) => {
          z.forEach((L) => {
            d(L.isIntersecting);
          });
        },
        M = new IntersectionObserver(O, { threshold: 0.5 });
      return (
        x.current && M.observe(x.current),
        () => {
          M.disconnect();
        }
      );
    }
  }, [n]),
    S.useEffect(() => {
      if (r) {
        let O = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(O);
        };
      }
    }, [r]));
  let E = () => {
      u(!0);
    },
    C = () => {
      (u(!1), d(!1));
    };
  return s
    ? n !== "intent"
      ? [f, x, {}]
      : [
          f,
          x,
          {
            onFocus: es(h, E),
            onBlur: es(p, C),
            onMouseEnter: es(m, E),
            onMouseLeave: es(g, C),
            onTouchStart: es(b, E),
          },
        ]
    : [!1, x, {}];
}
function es(n, i) {
  return (s) => {
    (n && n(s), s.defaultPrevented || i(s));
  };
}
function aT({ page: n, ...i }) {
  let { router: s } = Av(),
    r = S.useMemo(() => hv(s.routes, n, s.basename), [s.routes, n, s.basename]);
  return r ? S.createElement(lT, { page: n, matches: r, ...i }) : null;
}
function iT(n) {
  let { manifest: i, routeModules: s } = Dv(),
    [r, u] = S.useState([]);
  return (
    S.useEffect(() => {
      let f = !1;
      return (
        Jx(n, i, s).then((d) => {
          f || u(d);
        }),
        () => {
          f = !0;
        }
      );
    }, [n, i, s]),
    r
  );
}
function lT({ page: n, matches: i, ...s }) {
  let r = Wa(),
    { manifest: u, routeModules: f } = Dv(),
    { basename: d } = Av(),
    { loaderData: h, matches: p } = eT(),
    m = S.useMemo(() => _g(n, i, p, u, r, "data"), [n, i, p, u, r]),
    g = S.useMemo(() => _g(n, i, p, u, r, "assets"), [n, i, p, u, r]),
    b = S.useMemo(() => {
      if (n === r.pathname + r.search + r.hash) return [];
      let C = new Set(),
        O = !1;
      if (
        (i.forEach((z) => {
          let L = u.routes[z.route.id];
          !L ||
            !L.hasLoader ||
            ((!m.some((B) => B.route.id === z.route.id) &&
              z.route.id in h &&
              f[z.route.id]?.shouldRevalidate) ||
            L.hasClientLoader
              ? (O = !0)
              : C.add(z.route.id));
        }),
        C.size === 0)
      )
        return [];
      let M = Qx(n, d, "data");
      return (
        O &&
          C.size > 0 &&
          M.searchParams.set(
            "_routes",
            i
              .filter((z) => C.has(z.route.id))
              .map((z) => z.route.id)
              .join(","),
          ),
        [M.pathname + M.search]
      );
    }, [d, h, r, u, m, i, n, f]),
    x = S.useMemo(() => $x(g, u), [g, u]),
    E = iT(g);
  return S.createElement(
    S.Fragment,
    null,
    b.map((C) =>
      S.createElement("link", {
        key: C,
        rel: "prefetch",
        as: "fetch",
        href: C,
        ...s,
      }),
    ),
    x.map((C) =>
      S.createElement("link", { key: C, rel: "modulepreload", href: C, ...s }),
    ),
    E.map(({ key: C, link: O }) =>
      S.createElement("link", { key: C, nonce: s.nonce, ...O }),
    ),
  );
}
function sT(...n) {
  return (i) => {
    n.forEach((s) => {
      typeof s == "function" ? s(i) : s != null && (s.current = i);
    });
  };
}
var Rv =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Rv && (window.__reactRouterVersion = "7.9.3");
} catch {}
function rT({ basename: n, children: i, window: s }) {
  let r = S.useRef();
  r.current == null && (r.current = P1({ window: s, v5Compat: !0 }));
  let u = r.current,
    [f, d] = S.useState({ action: u.action, location: u.location }),
    h = S.useCallback(
      (p) => {
        S.startTransition(() => d(p));
      },
      [d],
    );
  return (
    S.useLayoutEffect(() => u.listen(h), [u, h]),
    S.createElement(_x, {
      basename: n,
      children: i,
      location: f.location,
      navigationType: f.action,
      navigator: u,
    })
  );
}
var wv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Mv = S.forwardRef(function (
    {
      onClick: i,
      discover: s = "render",
      prefetch: r = "none",
      relative: u,
      reloadDocument: f,
      replace: d,
      state: h,
      target: p,
      to: m,
      preventScrollReset: g,
      viewTransition: b,
      ...x
    },
    E,
  ) {
    let { basename: C } = S.useContext(An),
      O = typeof m == "string" && wv.test(m),
      M,
      z = !1;
    if (typeof m == "string" && O && ((M = m), Rv))
      try {
        let I = new URL(window.location.href),
          lt = m.startsWith("//") ? new URL(I.protocol + m) : new URL(m),
          ot = Xn(lt.pathname, C);
        lt.origin === I.origin && ot != null
          ? (m = ot + lt.search + lt.hash)
          : (z = !0);
      } catch {
        Tn(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let L = xx(m, { relative: u }),
      [B, Z, j] = nT(r, x),
      P = cT(m, {
        replace: d,
        state: h,
        target: p,
        preventScrollReset: g,
        relative: u,
        viewTransition: b,
      });
    function Q(I) {
      (i && i(I), I.defaultPrevented || P(I));
    }
    let K = S.createElement("a", {
      ...x,
      ...j,
      href: M || L,
      onClick: z || f ? i : Q,
      ref: sT(E, Z),
      target: p,
      "data-discover": !O && s === "render" ? "true" : void 0,
    });
    return B && !O
      ? S.createElement(S.Fragment, null, K, S.createElement(aT, { page: L }))
      : K;
  });
Mv.displayName = "Link";
var vf = S.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: s = !1,
    className: r = "",
    end: u = !1,
    style: f,
    to: d,
    viewTransition: h,
    children: p,
    ...m
  },
  g,
) {
  let b = Ds(d, { relative: m.relative }),
    x = Wa(),
    E = S.useContext(Ao),
    { navigator: C, basename: O } = S.useContext(An),
    M = E != null && pT(b) && h === !0,
    z = C.encodeLocation ? C.encodeLocation(b).pathname : b.pathname,
    L = x.pathname,
    B =
      E && E.navigation && E.navigation.location
        ? E.navigation.location.pathname
        : null;
  (s ||
    ((L = L.toLowerCase()),
    (B = B ? B.toLowerCase() : null),
    (z = z.toLowerCase())),
    B && O && (B = Xn(B, O) || B));
  const Z = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
  let j = L === z || (!u && L.startsWith(z) && L.charAt(Z) === "/"),
    P =
      B != null &&
      (B === z || (!u && B.startsWith(z) && B.charAt(z.length) === "/")),
    Q = { isActive: j, isPending: P, isTransitioning: M },
    K = j ? i : void 0,
    I;
  typeof r == "function"
    ? (I = r(Q))
    : (I = [
        r,
        j ? "active" : null,
        P ? "pending" : null,
        M ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let lt = typeof f == "function" ? f(Q) : f;
  return S.createElement(
    Mv,
    {
      ...m,
      "aria-current": K,
      className: I,
      ref: g,
      style: lt,
      to: d,
      viewTransition: h,
    },
    typeof p == "function" ? p(Q) : p,
  );
});
vf.displayName = "NavLink";
var oT = S.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: i,
      navigate: s,
      reloadDocument: r,
      replace: u,
      state: f,
      method: d = lo,
      action: h,
      onSubmit: p,
      relative: m,
      preventScrollReset: g,
      viewTransition: b,
      ...x
    },
    E,
  ) => {
    let C = hT(),
      O = mT(h, { relative: m }),
      M = d.toLowerCase() === "get" ? "get" : "post",
      z = typeof h == "string" && wv.test(h),
      L = (B) => {
        if ((p && p(B), B.defaultPrevented)) return;
        B.preventDefault();
        let Z = B.nativeEvent.submitter,
          j = Z?.getAttribute("formmethod") || d;
        C(Z || B.currentTarget, {
          fetcherKey: i,
          method: j,
          navigate: s,
          replace: u,
          state: f,
          relative: m,
          preventScrollReset: g,
          viewTransition: b,
        });
      };
    return S.createElement("form", {
      ref: E,
      method: M,
      action: O,
      onSubmit: r ? p : L,
      ...x,
      "data-discover": !z && n === "render" ? "true" : void 0,
    });
  },
);
oT.displayName = "Form";
function uT(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Cv(n) {
  let i = S.useContext($i);
  return (jt(i, uT(n)), i);
}
function cT(
  n,
  {
    target: i,
    replace: s,
    state: r,
    preventScrollReset: u,
    relative: f,
    viewTransition: d,
  } = {},
) {
  let h = Tx(),
    p = Wa(),
    m = Ds(n, { relative: f });
  return S.useCallback(
    (g) => {
      if (Gx(g, i)) {
        g.preventDefault();
        let b = s !== void 0 ? s : hs(p) === hs(m);
        h(n, {
          replace: b,
          state: r,
          preventScrollReset: u,
          relative: f,
          viewTransition: d,
        });
      }
    },
    [p, h, m, s, r, i, n, u, f, d],
  );
}
var fT = 0,
  dT = () => `__${String(++fT)}__`;
function hT() {
  let { router: n } = Cv("useSubmit"),
    { basename: i } = S.useContext(An),
    s = Vx();
  return S.useCallback(
    async (r, u = {}) => {
      let { action: f, method: d, encType: h, formData: p, body: m } = Zx(r, i);
      if (u.navigate === !1) {
        let g = u.fetcherKey || dT();
        await n.fetch(g, s, u.action || f, {
          preventScrollReset: u.preventScrollReset,
          formData: p,
          body: m,
          formMethod: u.method || d,
          formEncType: u.encType || h,
          flushSync: u.flushSync,
        });
      } else
        await n.navigate(u.action || f, {
          preventScrollReset: u.preventScrollReset,
          formData: p,
          body: m,
          formMethod: u.method || d,
          formEncType: u.encType || h,
          replace: u.replace,
          state: u.state,
          fromRouteId: s,
          flushSync: u.flushSync,
          viewTransition: u.viewTransition,
        });
    },
    [n, i, s],
  );
}
function mT(n, { relative: i } = {}) {
  let { basename: s } = S.useContext(An),
    r = S.useContext(Qn);
  jt(r, "useFormAction must be used inside a RouteContext");
  let [u] = r.matches.slice(-1),
    f = { ...Ds(n || ".", { relative: i }) },
    d = Wa();
  if (n == null) {
    f.search = d.search;
    let h = new URLSearchParams(f.search),
      p = h.getAll("index");
    if (p.some((g) => g === "")) {
      (h.delete("index"),
        p.filter((b) => b).forEach((b) => h.append("index", b)));
      let g = h.toString();
      f.search = g ? `?${g}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      u.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (f.pathname = f.pathname === "/" ? s : Gn([s, f.pathname])),
    hs(f)
  );
}
function pT(n, { relative: i } = {}) {
  let s = S.useContext(bv);
  jt(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = Cv("useViewTransitionState"),
    u = Ds(n, { relative: i });
  if (!s.isTransitioning) return !1;
  let f = Xn(s.currentLocation.pathname, r) || s.currentLocation.pathname,
    d = Xn(s.nextLocation.pathname, r) || s.nextLocation.pathname;
  return ho(u.pathname, d) != null || ho(u.pathname, f) != null;
}
var as = dv();
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gT = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  yT = (n) =>
    n.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, r) =>
      r ? r.toUpperCase() : s.toLowerCase(),
    ),
  jg = (n) => {
    const i = yT(n);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  Ov = (...n) =>
    n
      .filter((i, s, r) => !!i && i.trim() !== "" && r.indexOf(i) === s)
      .join(" ")
      .trim(),
  vT = (n) => {
    for (const i in n)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var bT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ST = S.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: r,
      className: u = "",
      children: f,
      iconNode: d,
      ...h
    },
    p,
  ) =>
    S.createElement(
      "svg",
      {
        ref: p,
        ...bT,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: r ? (Number(s) * 24) / Number(i) : s,
        className: Ov("lucide", u),
        ...(!f && !vT(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...d.map(([m, g]) => S.createElement(m, g)),
        ...(Array.isArray(f) ? f : [f]),
      ],
    ),
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wf = (n, i) => {
  const s = S.forwardRef(({ className: r, ...u }, f) =>
    S.createElement(ST, {
      ref: f,
      iconNode: i,
      className: Ov(`lucide-${gT(jg(n))}`, `lucide-${n}`, r),
      ...u,
    }),
  );
  return ((s.displayName = jg(n)), s);
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xT = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M3 15h18", key: "5xshup" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "M15 3v18", key: "14nvp0" }],
  ],
  TT = Wf("grid-3x3", xT);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ET = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1",
      },
    ],
  ],
  AT = Wf("house", ET);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DT = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  RT = Wf("menu", DT);
function wT() {
  const [n, i] = S.useState(!1);
  return X.jsxs("div", {
    className: `h-screen sticky top-0 shadow-2xl bg-gray-100 dark:bg-gray-900 text-white flex flex-col p-4 transition-all duration-300 
        ${n ? "w-56" : "w-16"}`,
    children: [
      X.jsx("button", {
        onClick: () => i(!n),
        className: `p-2 mb-6 rounded-md transition-colors duration-300 cursor-pointer text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:text-gray-900 ${n ? "px-[4px] py-2" : "p-[4px]"}`,
        children: X.jsx(RT, { size: 24 }),
      }),
      n &&
        X.jsx("h1", {
          className: "text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100",
          children: "Taskly",
        }),
      X.jsxs("nav", {
        className: "flex flex-col gap-4",
        children: [
          X.jsxs(vf, {
            to: "/",
            className: ({
              isActive: s,
            }) => `flex items-center gap-2 rounded-lg transition-colors duration-300
     ${n ? "px-3 py-2" : "p-[5px]"}
     ${s ? "bg-gray-300 text-gray-900 dark:text-gray-900" : "text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:text-gray-900"}`,
            children: [X.jsx(AT, { size: 20 }), " ", n && "Tasks"],
          }),
          X.jsxs(vf, {
            to: "/eisenhower",
            className: ({
              isActive: s,
            }) => `flex items-center gap-2 rounded-lg transition-colors duration-300
     ${n ? "px-3 py-2" : "p-[5px]"}
     ${s ? "bg-gray-300 text-gray-900 dark:text-gray-900" : "text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:text-gray-900"}`,
            children: [X.jsx(TT, { size: 20 }), " ", n && "Eisenhower"],
          }),
        ],
      }),
    ],
  });
}
function MT({ onAdd: n }) {
  const [i, s] = S.useState("");
  function r() {
    if (i.trim().length === 0) return;
    const f = { id: crypto.randomUUID(), title: i, isDone: !1 };
    (n(f), s(""));
  }
  function u(f) {
    f.key === "Enter" && r();
  }
  return X.jsxs("div", {
    className:
      "flex items-center justify-between w-full mt-4 h-11 overflow-hidden",
    children: [
      X.jsx("input", {
        type: "text",
        placeholder: "Add New Task",
        value: i,
        onChange: (f) => s(f.target.value),
        onKeyDown: u,
        className:
          "flex-1 rounded-l-lg border border-gray-400 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 outline-none focus:border-accent-red transition-colors duration-300",
      }),
      X.jsx("button", {
        onClick: r,
        className:
          "rounded-r-lg bg-red-600 text-white text-xl font-bold w-12 h-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer",
        children: "+",
      }),
    ],
  });
}
function CT() {
  for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
    i[s] = arguments[s];
  return S.useMemo(
    () => (r) => {
      i.forEach((u) => u(r));
    },
    i,
  );
}
const Ro =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function Wi(n) {
  const i = Object.prototype.toString.call(n);
  return i === "[object Window]" || i === "[object global]";
}
function If(n) {
  return "nodeType" in n;
}
function Ne(n) {
  var i, s;
  return n
    ? Wi(n)
      ? n
      : If(n) &&
          (i = (s = n.ownerDocument) == null ? void 0 : s.defaultView) != null
        ? i
        : window
    : window;
}
function td(n) {
  const { Document: i } = Ne(n);
  return n instanceof i;
}
function Rs(n) {
  return Wi(n) ? !1 : n instanceof Ne(n).HTMLElement;
}
function Nv(n) {
  return n instanceof Ne(n).SVGElement;
}
function Ii(n) {
  return n
    ? Wi(n)
      ? n.document
      : If(n)
        ? td(n)
          ? n
          : Rs(n) || Nv(n)
            ? n.ownerDocument
            : document
        : document
    : document;
}
const En = Ro ? S.useLayoutEffect : S.useEffect;
function ed(n) {
  const i = S.useRef(n);
  return (
    En(() => {
      i.current = n;
    }),
    S.useCallback(function () {
      for (var s = arguments.length, r = new Array(s), u = 0; u < s; u++)
        r[u] = arguments[u];
      return i.current == null ? void 0 : i.current(...r);
    }, [])
  );
}
function OT() {
  const n = S.useRef(null),
    i = S.useCallback((r, u) => {
      n.current = setInterval(r, u);
    }, []),
    s = S.useCallback(() => {
      n.current !== null && (clearInterval(n.current), (n.current = null));
    }, []);
  return [i, s];
}
function ms(n, i) {
  i === void 0 && (i = [n]);
  const s = S.useRef(n);
  return (
    En(() => {
      s.current !== n && (s.current = n);
    }, i),
    s
  );
}
function ws(n, i) {
  const s = S.useRef();
  return S.useMemo(() => {
    const r = n(s.current);
    return ((s.current = r), r);
  }, [...i]);
}
function mo(n) {
  const i = ed(n),
    s = S.useRef(null),
    r = S.useCallback((u) => {
      (u !== s.current && i?.(u, s.current), (s.current = u));
    }, []);
  return [s, r];
}
function bf(n) {
  const i = S.useRef();
  return (
    S.useEffect(() => {
      i.current = n;
    }, [n]),
    i.current
  );
}
let Fc = {};
function Ms(n, i) {
  return S.useMemo(() => {
    if (i) return i;
    const s = Fc[n] == null ? 0 : Fc[n] + 1;
    return ((Fc[n] = s), n + "-" + s);
  }, [n, i]);
}
function zv(n) {
  return function (i) {
    for (
      var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), u = 1;
      u < s;
      u++
    )
      r[u - 1] = arguments[u];
    return r.reduce(
      (f, d) => {
        const h = Object.entries(d);
        for (const [p, m] of h) {
          const g = f[p];
          g != null && (f[p] = g + n * m);
        }
        return f;
      },
      { ...i },
    );
  };
}
const Zi = zv(1),
  po = zv(-1);
function NT(n) {
  return "clientX" in n && "clientY" in n;
}
function nd(n) {
  if (!n) return !1;
  const { KeyboardEvent: i } = Ne(n.target);
  return i && n instanceof i;
}
function zT(n) {
  if (!n) return !1;
  const { TouchEvent: i } = Ne(n.target);
  return i && n instanceof i;
}
function Sf(n) {
  if (zT(n)) {
    if (n.touches && n.touches.length) {
      const { clientX: i, clientY: s } = n.touches[0];
      return { x: i, y: s };
    } else if (n.changedTouches && n.changedTouches.length) {
      const { clientX: i, clientY: s } = n.changedTouches[0];
      return { x: i, y: s };
    }
  }
  return NT(n) ? { x: n.clientX, y: n.clientY } : null;
}
const ps = Object.freeze({
    Translate: {
      toString(n) {
        if (!n) return;
        const { x: i, y: s } = n;
        return (
          "translate3d(" +
          (i ? Math.round(i) : 0) +
          "px, " +
          (s ? Math.round(s) : 0) +
          "px, 0)"
        );
      },
    },
    Scale: {
      toString(n) {
        if (!n) return;
        const { scaleX: i, scaleY: s } = n;
        return "scaleX(" + i + ") scaleY(" + s + ")";
      },
    },
    Transform: {
      toString(n) {
        if (n)
          return [ps.Translate.toString(n), ps.Scale.toString(n)].join(" ");
      },
    },
    Transition: {
      toString(n) {
        let { property: i, duration: s, easing: r } = n;
        return i + " " + s + "ms " + r;
      },
    },
  }),
  Hg =
    "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function VT(n) {
  return n.matches(Hg) ? n : n.querySelector(Hg);
}
const LT = { display: "none" };
function UT(n) {
  let { id: i, value: s } = n;
  return Ce.createElement("div", { id: i, style: LT }, s);
}
function BT(n) {
  let { id: i, announcement: s, ariaLiveType: r = "assertive" } = n;
  const u = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap",
  };
  return Ce.createElement(
    "div",
    { id: i, style: u, role: "status", "aria-live": r, "aria-atomic": !0 },
    s,
  );
}
function _T() {
  const [n, i] = S.useState("");
  return {
    announce: S.useCallback((r) => {
      r != null && i(r);
    }, []),
    announcement: n,
  };
}
const Vv = S.createContext(null);
function jT(n) {
  const i = S.useContext(Vv);
  S.useEffect(() => {
    if (!i)
      throw new Error(
        "useDndMonitor must be used within a children of <DndContext>",
      );
    return i(n);
  }, [n, i]);
}
function HT() {
  const [n] = S.useState(() => new Set()),
    i = S.useCallback((r) => (n.add(r), () => n.delete(r)), [n]);
  return [
    S.useCallback(
      (r) => {
        let { type: u, event: f } = r;
        n.forEach((d) => {
          var h;
          return (h = d[u]) == null ? void 0 : h.call(d, f);
        });
      },
      [n],
    ),
    i,
  ];
}
const YT = {
    draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
  },
  qT = {
    onDragStart(n) {
      let { active: i } = n;
      return "Picked up draggable item " + i.id + ".";
    },
    onDragOver(n) {
      let { active: i, over: s } = n;
      return s
        ? "Draggable item " +
            i.id +
            " was moved over droppable area " +
            s.id +
            "."
        : "Draggable item " + i.id + " is no longer over a droppable area.";
    },
    onDragEnd(n) {
      let { active: i, over: s } = n;
      return s
        ? "Draggable item " + i.id + " was dropped over droppable area " + s.id
        : "Draggable item " + i.id + " was dropped.";
    },
    onDragCancel(n) {
      let { active: i } = n;
      return "Dragging was cancelled. Draggable item " + i.id + " was dropped.";
    },
  };
function kT(n) {
  let {
    announcements: i = qT,
    container: s,
    hiddenTextDescribedById: r,
    screenReaderInstructions: u = YT,
  } = n;
  const { announce: f, announcement: d } = _T(),
    h = Ms("DndLiveRegion"),
    [p, m] = S.useState(!1);
  if (
    (S.useEffect(() => {
      m(!0);
    }, []),
    jT(
      S.useMemo(
        () => ({
          onDragStart(b) {
            let { active: x } = b;
            f(i.onDragStart({ active: x }));
          },
          onDragMove(b) {
            let { active: x, over: E } = b;
            i.onDragMove && f(i.onDragMove({ active: x, over: E }));
          },
          onDragOver(b) {
            let { active: x, over: E } = b;
            f(i.onDragOver({ active: x, over: E }));
          },
          onDragEnd(b) {
            let { active: x, over: E } = b;
            f(i.onDragEnd({ active: x, over: E }));
          },
          onDragCancel(b) {
            let { active: x, over: E } = b;
            f(i.onDragCancel({ active: x, over: E }));
          },
        }),
        [f, i],
      ),
    ),
    !p)
  )
    return null;
  const g = Ce.createElement(
    Ce.Fragment,
    null,
    Ce.createElement(UT, { id: r, value: u.draggable }),
    Ce.createElement(BT, { id: h, announcement: d }),
  );
  return s ? as.createPortal(g, s) : g;
}
var ee;
(function (n) {
  ((n.DragStart = "dragStart"),
    (n.DragMove = "dragMove"),
    (n.DragEnd = "dragEnd"),
    (n.DragCancel = "dragCancel"),
    (n.DragOver = "dragOver"),
    (n.RegisterDroppable = "registerDroppable"),
    (n.SetDroppableDisabled = "setDroppableDisabled"),
    (n.UnregisterDroppable = "unregisterDroppable"));
})(ee || (ee = {}));
function go() {}
const cn = Object.freeze({ x: 0, y: 0 });
function GT(n, i) {
  return Math.sqrt(Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2));
}
function XT(n, i) {
  let {
      data: { value: s },
    } = n,
    {
      data: { value: r },
    } = i;
  return s - r;
}
function KT(n, i) {
  let {
      data: { value: s },
    } = n,
    {
      data: { value: r },
    } = i;
  return r - s;
}
function ZT(n, i) {
  if (!n || n.length === 0) return null;
  const [s] = n;
  return s[i];
}
function Yg(n, i, s) {
  return (
    i === void 0 && (i = n.left),
    s === void 0 && (s = n.top),
    { x: i + n.width * 0.5, y: s + n.height * 0.5 }
  );
}
const QT = (n) => {
  let { collisionRect: i, droppableRects: s, droppableContainers: r } = n;
  const u = Yg(i, i.left, i.top),
    f = [];
  for (const d of r) {
    const { id: h } = d,
      p = s.get(h);
    if (p) {
      const m = GT(Yg(p), u);
      f.push({ id: h, data: { droppableContainer: d, value: m } });
    }
  }
  return f.sort(XT);
};
function PT(n, i) {
  const s = Math.max(i.top, n.top),
    r = Math.max(i.left, n.left),
    u = Math.min(i.left + i.width, n.left + n.width),
    f = Math.min(i.top + i.height, n.top + n.height),
    d = u - r,
    h = f - s;
  if (r < u && s < f) {
    const p = i.width * i.height,
      m = n.width * n.height,
      g = d * h,
      b = g / (p + m - g);
    return Number(b.toFixed(4));
  }
  return 0;
}
const FT = (n) => {
  let { collisionRect: i, droppableRects: s, droppableContainers: r } = n;
  const u = [];
  for (const f of r) {
    const { id: d } = f,
      h = s.get(d);
    if (h) {
      const p = PT(h, i);
      p > 0 && u.push({ id: d, data: { droppableContainer: f, value: p } });
    }
  }
  return u.sort(KT);
};
function JT(n, i, s) {
  return {
    ...n,
    scaleX: i && s ? i.width / s.width : 1,
    scaleY: i && s ? i.height / s.height : 1,
  };
}
function Lv(n, i) {
  return n && i ? { x: n.left - i.left, y: n.top - i.top } : cn;
}
function $T(n) {
  return function (s) {
    for (
      var r = arguments.length, u = new Array(r > 1 ? r - 1 : 0), f = 1;
      f < r;
      f++
    )
      u[f - 1] = arguments[f];
    return u.reduce(
      (d, h) => ({
        ...d,
        top: d.top + n * h.y,
        bottom: d.bottom + n * h.y,
        left: d.left + n * h.x,
        right: d.right + n * h.x,
      }),
      { ...s },
    );
  };
}
const WT = $T(1);
function IT(n) {
  if (n.startsWith("matrix3d(")) {
    const i = n.slice(9, -1).split(/, /);
    return { x: +i[12], y: +i[13], scaleX: +i[0], scaleY: +i[5] };
  } else if (n.startsWith("matrix(")) {
    const i = n.slice(7, -1).split(/, /);
    return { x: +i[4], y: +i[5], scaleX: +i[0], scaleY: +i[3] };
  }
  return null;
}
function tE(n, i, s) {
  const r = IT(i);
  if (!r) return n;
  const { scaleX: u, scaleY: f, x: d, y: h } = r,
    p = n.left - d - (1 - u) * parseFloat(s),
    m = n.top - h - (1 - f) * parseFloat(s.slice(s.indexOf(" ") + 1)),
    g = u ? n.width / u : n.width,
    b = f ? n.height / f : n.height;
  return { width: g, height: b, top: m, right: p + g, bottom: m + b, left: p };
}
const eE = { ignoreTransform: !1 };
function tl(n, i) {
  i === void 0 && (i = eE);
  let s = n.getBoundingClientRect();
  if (i.ignoreTransform) {
    const { transform: m, transformOrigin: g } = Ne(n).getComputedStyle(n);
    m && (s = tE(s, m, g));
  }
  const { top: r, left: u, width: f, height: d, bottom: h, right: p } = s;
  return { top: r, left: u, width: f, height: d, bottom: h, right: p };
}
function qg(n) {
  return tl(n, { ignoreTransform: !0 });
}
function nE(n) {
  const i = n.innerWidth,
    s = n.innerHeight;
  return { top: 0, left: 0, right: i, bottom: s, width: i, height: s };
}
function aE(n, i) {
  return (
    i === void 0 && (i = Ne(n).getComputedStyle(n)),
    i.position === "fixed"
  );
}
function iE(n, i) {
  i === void 0 && (i = Ne(n).getComputedStyle(n));
  const s = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((u) => {
    const f = i[u];
    return typeof f == "string" ? s.test(f) : !1;
  });
}
function ad(n, i) {
  const s = [];
  function r(u) {
    if ((i != null && s.length >= i) || !u) return s;
    if (td(u) && u.scrollingElement != null && !s.includes(u.scrollingElement))
      return (s.push(u.scrollingElement), s);
    if (!Rs(u) || Nv(u) || s.includes(u)) return s;
    const f = Ne(n).getComputedStyle(u);
    return (u !== n && iE(u, f) && s.push(u), aE(u, f) ? s : r(u.parentNode));
  }
  return n ? r(n) : s;
}
function Uv(n) {
  const [i] = ad(n, 1);
  return i ?? null;
}
function Jc(n) {
  return !Ro || !n
    ? null
    : Wi(n)
      ? n
      : If(n)
        ? td(n) || n === Ii(n).scrollingElement
          ? window
          : Rs(n)
            ? n
            : null
        : null;
}
function Bv(n) {
  return Wi(n) ? n.scrollX : n.scrollLeft;
}
function _v(n) {
  return Wi(n) ? n.scrollY : n.scrollTop;
}
function xf(n) {
  return { x: Bv(n), y: _v(n) };
}
var oe;
(function (n) {
  ((n[(n.Forward = 1)] = "Forward"), (n[(n.Backward = -1)] = "Backward"));
})(oe || (oe = {}));
function jv(n) {
  return !Ro || !n ? !1 : n === document.scrollingElement;
}
function Hv(n) {
  const i = { x: 0, y: 0 },
    s = jv(n)
      ? { height: window.innerHeight, width: window.innerWidth }
      : { height: n.clientHeight, width: n.clientWidth },
    r = { x: n.scrollWidth - s.width, y: n.scrollHeight - s.height },
    u = n.scrollTop <= i.y,
    f = n.scrollLeft <= i.x,
    d = n.scrollTop >= r.y,
    h = n.scrollLeft >= r.x;
  return {
    isTop: u,
    isLeft: f,
    isBottom: d,
    isRight: h,
    maxScroll: r,
    minScroll: i,
  };
}
const lE = { x: 0.2, y: 0.2 };
function sE(n, i, s, r, u) {
  let { top: f, left: d, right: h, bottom: p } = s;
  (r === void 0 && (r = 10), u === void 0 && (u = lE));
  const { isTop: m, isBottom: g, isLeft: b, isRight: x } = Hv(n),
    E = { x: 0, y: 0 },
    C = { x: 0, y: 0 },
    O = { height: i.height * u.y, width: i.width * u.x };
  return (
    !m && f <= i.top + O.height
      ? ((E.y = oe.Backward),
        (C.y = r * Math.abs((i.top + O.height - f) / O.height)))
      : !g &&
        p >= i.bottom - O.height &&
        ((E.y = oe.Forward),
        (C.y = r * Math.abs((i.bottom - O.height - p) / O.height))),
    !x && h >= i.right - O.width
      ? ((E.x = oe.Forward),
        (C.x = r * Math.abs((i.right - O.width - h) / O.width)))
      : !b &&
        d <= i.left + O.width &&
        ((E.x = oe.Backward),
        (C.x = r * Math.abs((i.left + O.width - d) / O.width))),
    { direction: E, speed: C }
  );
}
function rE(n) {
  if (n === document.scrollingElement) {
    const { innerWidth: f, innerHeight: d } = window;
    return { top: 0, left: 0, right: f, bottom: d, width: f, height: d };
  }
  const { top: i, left: s, right: r, bottom: u } = n.getBoundingClientRect();
  return {
    top: i,
    left: s,
    right: r,
    bottom: u,
    width: n.clientWidth,
    height: n.clientHeight,
  };
}
function Yv(n) {
  return n.reduce((i, s) => Zi(i, xf(s)), cn);
}
function oE(n) {
  return n.reduce((i, s) => i + Bv(s), 0);
}
function uE(n) {
  return n.reduce((i, s) => i + _v(s), 0);
}
function cE(n, i) {
  if ((i === void 0 && (i = tl), !n)) return;
  const { top: s, left: r, bottom: u, right: f } = i(n);
  Uv(n) &&
    (u <= 0 || f <= 0 || s >= window.innerHeight || r >= window.innerWidth) &&
    n.scrollIntoView({ block: "center", inline: "center" });
}
const fE = [
  ["x", ["left", "right"], oE],
  ["y", ["top", "bottom"], uE],
];
class id {
  constructor(i, s) {
    ((this.rect = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.right = void 0),
      (this.left = void 0));
    const r = ad(s),
      u = Yv(r);
    ((this.rect = { ...i }), (this.width = i.width), (this.height = i.height));
    for (const [f, d, h] of fE)
      for (const p of d)
        Object.defineProperty(this, p, {
          get: () => {
            const m = h(r),
              g = u[f] - m;
            return this.rect[p] + g;
          },
          enumerable: !0,
        });
    Object.defineProperty(this, "rect", { enumerable: !1 });
  }
}
class ls {
  constructor(i) {
    ((this.target = void 0),
      (this.listeners = []),
      (this.removeAll = () => {
        this.listeners.forEach((s) => {
          var r;
          return (r = this.target) == null
            ? void 0
            : r.removeEventListener(...s);
        });
      }),
      (this.target = i));
  }
  add(i, s, r) {
    var u;
    ((u = this.target) == null || u.addEventListener(i, s, r),
      this.listeners.push([i, s, r]));
  }
}
function dE(n) {
  const { EventTarget: i } = Ne(n);
  return n instanceof i ? n : Ii(n);
}
function $c(n, i) {
  const s = Math.abs(n.x),
    r = Math.abs(n.y);
  return typeof i == "number"
    ? Math.sqrt(s ** 2 + r ** 2) > i
    : "x" in i && "y" in i
      ? s > i.x && r > i.y
      : "x" in i
        ? s > i.x
        : "y" in i
          ? r > i.y
          : !1;
}
var Ie;
(function (n) {
  ((n.Click = "click"),
    (n.DragStart = "dragstart"),
    (n.Keydown = "keydown"),
    (n.ContextMenu = "contextmenu"),
    (n.Resize = "resize"),
    (n.SelectionChange = "selectionchange"),
    (n.VisibilityChange = "visibilitychange"));
})(Ie || (Ie = {}));
function kg(n) {
  n.preventDefault();
}
function hE(n) {
  n.stopPropagation();
}
var Tt;
(function (n) {
  ((n.Space = "Space"),
    (n.Down = "ArrowDown"),
    (n.Right = "ArrowRight"),
    (n.Left = "ArrowLeft"),
    (n.Up = "ArrowUp"),
    (n.Esc = "Escape"),
    (n.Enter = "Enter"),
    (n.Tab = "Tab"));
})(Tt || (Tt = {}));
const qv = {
    start: [Tt.Space, Tt.Enter],
    cancel: [Tt.Esc],
    end: [Tt.Space, Tt.Enter, Tt.Tab],
  },
  mE = (n, i) => {
    let { currentCoordinates: s } = i;
    switch (n.code) {
      case Tt.Right:
        return { ...s, x: s.x + 25 };
      case Tt.Left:
        return { ...s, x: s.x - 25 };
      case Tt.Down:
        return { ...s, y: s.y + 25 };
      case Tt.Up:
        return { ...s, y: s.y - 25 };
    }
  };
class kv {
  constructor(i) {
    ((this.props = void 0),
      (this.autoScrollEnabled = !1),
      (this.referenceCoordinates = void 0),
      (this.listeners = void 0),
      (this.windowListeners = void 0),
      (this.props = i));
    const {
      event: { target: s },
    } = i;
    ((this.props = i),
      (this.listeners = new ls(Ii(s))),
      (this.windowListeners = new ls(Ne(s))),
      (this.handleKeyDown = this.handleKeyDown.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      this.attach());
  }
  attach() {
    (this.handleStart(),
      this.windowListeners.add(Ie.Resize, this.handleCancel),
      this.windowListeners.add(Ie.VisibilityChange, this.handleCancel),
      setTimeout(() => this.listeners.add(Ie.Keydown, this.handleKeyDown)));
  }
  handleStart() {
    const { activeNode: i, onStart: s } = this.props,
      r = i.node.current;
    (r && cE(r), s(cn));
  }
  handleKeyDown(i) {
    if (nd(i)) {
      const { active: s, context: r, options: u } = this.props,
        {
          keyboardCodes: f = qv,
          coordinateGetter: d = mE,
          scrollBehavior: h = "smooth",
        } = u,
        { code: p } = i;
      if (f.end.includes(p)) {
        this.handleEnd(i);
        return;
      }
      if (f.cancel.includes(p)) {
        this.handleCancel(i);
        return;
      }
      const { collisionRect: m } = r.current,
        g = m ? { x: m.left, y: m.top } : cn;
      this.referenceCoordinates || (this.referenceCoordinates = g);
      const b = d(i, { active: s, context: r.current, currentCoordinates: g });
      if (b) {
        const x = po(b, g),
          E = { x: 0, y: 0 },
          { scrollableAncestors: C } = r.current;
        for (const O of C) {
          const M = i.code,
            {
              isTop: z,
              isRight: L,
              isLeft: B,
              isBottom: Z,
              maxScroll: j,
              minScroll: P,
            } = Hv(O),
            Q = rE(O),
            K = {
              x: Math.min(
                M === Tt.Right ? Q.right - Q.width / 2 : Q.right,
                Math.max(M === Tt.Right ? Q.left : Q.left + Q.width / 2, b.x),
              ),
              y: Math.min(
                M === Tt.Down ? Q.bottom - Q.height / 2 : Q.bottom,
                Math.max(M === Tt.Down ? Q.top : Q.top + Q.height / 2, b.y),
              ),
            },
            I = (M === Tt.Right && !L) || (M === Tt.Left && !B),
            lt = (M === Tt.Down && !Z) || (M === Tt.Up && !z);
          if (I && K.x !== b.x) {
            const ot = O.scrollLeft + x.x,
              St =
                (M === Tt.Right && ot <= j.x) || (M === Tt.Left && ot >= P.x);
            if (St && !x.y) {
              O.scrollTo({ left: ot, behavior: h });
              return;
            }
            (St
              ? (E.x = O.scrollLeft - ot)
              : (E.x =
                  M === Tt.Right ? O.scrollLeft - j.x : O.scrollLeft - P.x),
              E.x && O.scrollBy({ left: -E.x, behavior: h }));
            break;
          } else if (lt && K.y !== b.y) {
            const ot = O.scrollTop + x.y,
              St = (M === Tt.Down && ot <= j.y) || (M === Tt.Up && ot >= P.y);
            if (St && !x.x) {
              O.scrollTo({ top: ot, behavior: h });
              return;
            }
            (St
              ? (E.y = O.scrollTop - ot)
              : (E.y = M === Tt.Down ? O.scrollTop - j.y : O.scrollTop - P.y),
              E.y && O.scrollBy({ top: -E.y, behavior: h }));
            break;
          }
        }
        this.handleMove(i, Zi(po(b, this.referenceCoordinates), E));
      }
    }
  }
  handleMove(i, s) {
    const { onMove: r } = this.props;
    (i.preventDefault(), r(s));
  }
  handleEnd(i) {
    const { onEnd: s } = this.props;
    (i.preventDefault(), this.detach(), s());
  }
  handleCancel(i) {
    const { onCancel: s } = this.props;
    (i.preventDefault(), this.detach(), s());
  }
  detach() {
    (this.listeners.removeAll(), this.windowListeners.removeAll());
  }
}
kv.activators = [
  {
    eventName: "onKeyDown",
    handler: (n, i, s) => {
      let { keyboardCodes: r = qv, onActivation: u } = i,
        { active: f } = s;
      const { code: d } = n.nativeEvent;
      if (r.start.includes(d)) {
        const h = f.activatorNode.current;
        return h && n.target !== h
          ? !1
          : (n.preventDefault(), u?.({ event: n.nativeEvent }), !0);
      }
      return !1;
    },
  },
];
function Gg(n) {
  return !!(n && "distance" in n);
}
function Xg(n) {
  return !!(n && "delay" in n);
}
class ld {
  constructor(i, s, r) {
    var u;
    (r === void 0 && (r = dE(i.event.target)),
      (this.props = void 0),
      (this.events = void 0),
      (this.autoScrollEnabled = !0),
      (this.document = void 0),
      (this.activated = !1),
      (this.initialCoordinates = void 0),
      (this.timeoutId = null),
      (this.listeners = void 0),
      (this.documentListeners = void 0),
      (this.windowListeners = void 0),
      (this.props = i),
      (this.events = s));
    const { event: f } = i,
      { target: d } = f;
    ((this.props = i),
      (this.events = s),
      (this.document = Ii(d)),
      (this.documentListeners = new ls(this.document)),
      (this.listeners = new ls(r)),
      (this.windowListeners = new ls(Ne(d))),
      (this.initialCoordinates = (u = Sf(f)) != null ? u : cn),
      (this.handleStart = this.handleStart.bind(this)),
      (this.handleMove = this.handleMove.bind(this)),
      (this.handleEnd = this.handleEnd.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      (this.handleKeydown = this.handleKeydown.bind(this)),
      (this.removeTextSelection = this.removeTextSelection.bind(this)),
      this.attach());
  }
  attach() {
    const {
      events: i,
      props: {
        options: { activationConstraint: s, bypassActivationConstraint: r },
      },
    } = this;
    if (
      (this.listeners.add(i.move.name, this.handleMove, { passive: !1 }),
      this.listeners.add(i.end.name, this.handleEnd),
      i.cancel && this.listeners.add(i.cancel.name, this.handleCancel),
      this.windowListeners.add(Ie.Resize, this.handleCancel),
      this.windowListeners.add(Ie.DragStart, kg),
      this.windowListeners.add(Ie.VisibilityChange, this.handleCancel),
      this.windowListeners.add(Ie.ContextMenu, kg),
      this.documentListeners.add(Ie.Keydown, this.handleKeydown),
      s)
    ) {
      if (
        r != null &&
        r({
          event: this.props.event,
          activeNode: this.props.activeNode,
          options: this.props.options,
        })
      )
        return this.handleStart();
      if (Xg(s)) {
        ((this.timeoutId = setTimeout(this.handleStart, s.delay)),
          this.handlePending(s));
        return;
      }
      if (Gg(s)) {
        this.handlePending(s);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    (this.listeners.removeAll(),
      this.windowListeners.removeAll(),
      setTimeout(this.documentListeners.removeAll, 50),
      this.timeoutId !== null &&
        (clearTimeout(this.timeoutId), (this.timeoutId = null)));
  }
  handlePending(i, s) {
    const { active: r, onPending: u } = this.props;
    u(r, i, this.initialCoordinates, s);
  }
  handleStart() {
    const { initialCoordinates: i } = this,
      { onStart: s } = this.props;
    i &&
      ((this.activated = !0),
      this.documentListeners.add(Ie.Click, hE, { capture: !0 }),
      this.removeTextSelection(),
      this.documentListeners.add(Ie.SelectionChange, this.removeTextSelection),
      s(i));
  }
  handleMove(i) {
    var s;
    const { activated: r, initialCoordinates: u, props: f } = this,
      {
        onMove: d,
        options: { activationConstraint: h },
      } = f;
    if (!u) return;
    const p = (s = Sf(i)) != null ? s : cn,
      m = po(u, p);
    if (!r && h) {
      if (Gg(h)) {
        if (h.tolerance != null && $c(m, h.tolerance))
          return this.handleCancel();
        if ($c(m, h.distance)) return this.handleStart();
      }
      if (Xg(h) && $c(m, h.tolerance)) return this.handleCancel();
      this.handlePending(h, m);
      return;
    }
    (i.cancelable && i.preventDefault(), d(p));
  }
  handleEnd() {
    const { onAbort: i, onEnd: s } = this.props;
    (this.detach(), this.activated || i(this.props.active), s());
  }
  handleCancel() {
    const { onAbort: i, onCancel: s } = this.props;
    (this.detach(), this.activated || i(this.props.active), s());
  }
  handleKeydown(i) {
    i.code === Tt.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var i;
    (i = this.document.getSelection()) == null || i.removeAllRanges();
  }
}
const pE = {
  cancel: { name: "pointercancel" },
  move: { name: "pointermove" },
  end: { name: "pointerup" },
};
class Gv extends ld {
  constructor(i) {
    const { event: s } = i,
      r = Ii(s.target);
    super(i, pE, r);
  }
}
Gv.activators = [
  {
    eventName: "onPointerDown",
    handler: (n, i) => {
      let { nativeEvent: s } = n,
        { onActivation: r } = i;
      return !s.isPrimary || s.button !== 0 ? !1 : (r?.({ event: s }), !0);
    },
  },
];
const gE = { move: { name: "mousemove" }, end: { name: "mouseup" } };
var Tf;
(function (n) {
  n[(n.RightClick = 2)] = "RightClick";
})(Tf || (Tf = {}));
class yE extends ld {
  constructor(i) {
    super(i, gE, Ii(i.event.target));
  }
}
yE.activators = [
  {
    eventName: "onMouseDown",
    handler: (n, i) => {
      let { nativeEvent: s } = n,
        { onActivation: r } = i;
      return s.button === Tf.RightClick ? !1 : (r?.({ event: s }), !0);
    },
  },
];
const Wc = {
  cancel: { name: "touchcancel" },
  move: { name: "touchmove" },
  end: { name: "touchend" },
};
class vE extends ld {
  constructor(i) {
    super(i, Wc);
  }
  static setup() {
    return (
      window.addEventListener(Wc.move.name, i, { capture: !1, passive: !1 }),
      function () {
        window.removeEventListener(Wc.move.name, i);
      }
    );
    function i() {}
  }
}
vE.activators = [
  {
    eventName: "onTouchStart",
    handler: (n, i) => {
      let { nativeEvent: s } = n,
        { onActivation: r } = i;
      const { touches: u } = s;
      return u.length > 1 ? !1 : (r?.({ event: s }), !0);
    },
  },
];
var ss;
(function (n) {
  ((n[(n.Pointer = 0)] = "Pointer"),
    (n[(n.DraggableRect = 1)] = "DraggableRect"));
})(ss || (ss = {}));
var yo;
(function (n) {
  ((n[(n.TreeOrder = 0)] = "TreeOrder"),
    (n[(n.ReversedTreeOrder = 1)] = "ReversedTreeOrder"));
})(yo || (yo = {}));
function bE(n) {
  let {
    acceleration: i,
    activator: s = ss.Pointer,
    canScroll: r,
    draggingRect: u,
    enabled: f,
    interval: d = 5,
    order: h = yo.TreeOrder,
    pointerCoordinates: p,
    scrollableAncestors: m,
    scrollableAncestorRects: g,
    delta: b,
    threshold: x,
  } = n;
  const E = xE({ delta: b, disabled: !f }),
    [C, O] = OT(),
    M = S.useRef({ x: 0, y: 0 }),
    z = S.useRef({ x: 0, y: 0 }),
    L = S.useMemo(() => {
      switch (s) {
        case ss.Pointer:
          return p ? { top: p.y, bottom: p.y, left: p.x, right: p.x } : null;
        case ss.DraggableRect:
          return u;
      }
    }, [s, u, p]),
    B = S.useRef(null),
    Z = S.useCallback(() => {
      const P = B.current;
      if (!P) return;
      const Q = M.current.x * z.current.x,
        K = M.current.y * z.current.y;
      P.scrollBy(Q, K);
    }, []),
    j = S.useMemo(() => (h === yo.TreeOrder ? [...m].reverse() : m), [h, m]);
  S.useEffect(() => {
    if (!f || !m.length || !L) {
      O();
      return;
    }
    for (const P of j) {
      if (r?.(P) === !1) continue;
      const Q = m.indexOf(P),
        K = g[Q];
      if (!K) continue;
      const { direction: I, speed: lt } = sE(P, K, L, i, x);
      for (const ot of ["x", "y"]) E[ot][I[ot]] || ((lt[ot] = 0), (I[ot] = 0));
      if (lt.x > 0 || lt.y > 0) {
        (O(), (B.current = P), C(Z, d), (M.current = lt), (z.current = I));
        return;
      }
    }
    ((M.current = { x: 0, y: 0 }), (z.current = { x: 0, y: 0 }), O());
  }, [
    i,
    Z,
    r,
    O,
    f,
    d,
    JSON.stringify(L),
    JSON.stringify(E),
    C,
    m,
    j,
    g,
    JSON.stringify(x),
  ]);
}
const SE = {
  x: { [oe.Backward]: !1, [oe.Forward]: !1 },
  y: { [oe.Backward]: !1, [oe.Forward]: !1 },
};
function xE(n) {
  let { delta: i, disabled: s } = n;
  const r = bf(i);
  return ws(
    (u) => {
      if (s || !r || !u) return SE;
      const f = { x: Math.sign(i.x - r.x), y: Math.sign(i.y - r.y) };
      return {
        x: {
          [oe.Backward]: u.x[oe.Backward] || f.x === -1,
          [oe.Forward]: u.x[oe.Forward] || f.x === 1,
        },
        y: {
          [oe.Backward]: u.y[oe.Backward] || f.y === -1,
          [oe.Forward]: u.y[oe.Forward] || f.y === 1,
        },
      };
    },
    [s, i, r],
  );
}
function TE(n, i) {
  const s = i != null ? n.get(i) : void 0,
    r = s ? s.node.current : null;
  return ws(
    (u) => {
      var f;
      return i == null ? null : (f = r ?? u) != null ? f : null;
    },
    [r, i],
  );
}
function EE(n, i) {
  return S.useMemo(
    () =>
      n.reduce((s, r) => {
        const { sensor: u } = r,
          f = u.activators.map((d) => ({
            eventName: d.eventName,
            handler: i(d.handler, r),
          }));
        return [...s, ...f];
      }, []),
    [n, i],
  );
}
var gs;
(function (n) {
  ((n[(n.Always = 0)] = "Always"),
    (n[(n.BeforeDragging = 1)] = "BeforeDragging"),
    (n[(n.WhileDragging = 2)] = "WhileDragging"));
})(gs || (gs = {}));
var Ef;
(function (n) {
  n.Optimized = "optimized";
})(Ef || (Ef = {}));
const Kg = new Map();
function AE(n, i) {
  let { dragging: s, dependencies: r, config: u } = i;
  const [f, d] = S.useState(null),
    { frequency: h, measure: p, strategy: m } = u,
    g = S.useRef(n),
    b = M(),
    x = ms(b),
    E = S.useCallback(
      function (z) {
        (z === void 0 && (z = []),
          !x.current &&
            d((L) =>
              L === null ? z : L.concat(z.filter((B) => !L.includes(B))),
            ));
      },
      [x],
    ),
    C = S.useRef(null),
    O = ws(
      (z) => {
        if (b && !s) return Kg;
        if (!z || z === Kg || g.current !== n || f != null) {
          const L = new Map();
          for (let B of n) {
            if (!B) continue;
            if (f && f.length > 0 && !f.includes(B.id) && B.rect.current) {
              L.set(B.id, B.rect.current);
              continue;
            }
            const Z = B.node.current,
              j = Z ? new id(p(Z), Z) : null;
            ((B.rect.current = j), j && L.set(B.id, j));
          }
          return L;
        }
        return z;
      },
      [n, f, s, b, p],
    );
  return (
    S.useEffect(() => {
      g.current = n;
    }, [n]),
    S.useEffect(() => {
      b || E();
    }, [s, b]),
    S.useEffect(() => {
      f && f.length > 0 && d(null);
    }, [JSON.stringify(f)]),
    S.useEffect(() => {
      b ||
        typeof h != "number" ||
        C.current !== null ||
        (C.current = setTimeout(() => {
          (E(), (C.current = null));
        }, h));
    }, [h, b, E, ...r]),
    {
      droppableRects: O,
      measureDroppableContainers: E,
      measuringScheduled: f != null,
    }
  );
  function M() {
    switch (m) {
      case gs.Always:
        return !1;
      case gs.BeforeDragging:
        return s;
      default:
        return !s;
    }
  }
}
function Xv(n, i) {
  return ws(
    (s) => (n ? s || (typeof i == "function" ? i(n) : n) : null),
    [i, n],
  );
}
function DE(n, i) {
  return Xv(n, i);
}
function RE(n) {
  let { callback: i, disabled: s } = n;
  const r = ed(i),
    u = S.useMemo(() => {
      if (s || typeof window > "u" || typeof window.MutationObserver > "u")
        return;
      const { MutationObserver: f } = window;
      return new f(r);
    }, [r, s]);
  return (S.useEffect(() => () => u?.disconnect(), [u]), u);
}
function wo(n) {
  let { callback: i, disabled: s } = n;
  const r = ed(i),
    u = S.useMemo(() => {
      if (s || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const { ResizeObserver: f } = window;
      return new f(r);
    }, [s]);
  return (S.useEffect(() => () => u?.disconnect(), [u]), u);
}
function wE(n) {
  return new id(tl(n), n);
}
function Zg(n, i, s) {
  i === void 0 && (i = wE);
  const [r, u] = S.useState(null);
  function f() {
    u((p) => {
      if (!n) return null;
      if (n.isConnected === !1) {
        var m;
        return (m = p ?? s) != null ? m : null;
      }
      const g = i(n);
      return JSON.stringify(p) === JSON.stringify(g) ? p : g;
    });
  }
  const d = RE({
      callback(p) {
        if (n)
          for (const m of p) {
            const { type: g, target: b } = m;
            if (
              g === "childList" &&
              b instanceof HTMLElement &&
              b.contains(n)
            ) {
              f();
              break;
            }
          }
      },
    }),
    h = wo({ callback: f });
  return (
    En(() => {
      (f(),
        n
          ? (h?.observe(n),
            d?.observe(document.body, { childList: !0, subtree: !0 }))
          : (h?.disconnect(), d?.disconnect()));
    }, [n]),
    r
  );
}
function ME(n) {
  const i = Xv(n);
  return Lv(n, i);
}
const Qg = [];
function CE(n) {
  const i = S.useRef(n),
    s = ws(
      (r) =>
        n
          ? r &&
            r !== Qg &&
            n &&
            i.current &&
            n.parentNode === i.current.parentNode
            ? r
            : ad(n)
          : Qg,
      [n],
    );
  return (
    S.useEffect(() => {
      i.current = n;
    }, [n]),
    s
  );
}
function OE(n) {
  const [i, s] = S.useState(null),
    r = S.useRef(n),
    u = S.useCallback((f) => {
      const d = Jc(f.target);
      d && s((h) => (h ? (h.set(d, xf(d)), new Map(h)) : null));
    }, []);
  return (
    S.useEffect(() => {
      const f = r.current;
      if (n !== f) {
        d(f);
        const h = n
          .map((p) => {
            const m = Jc(p);
            return m
              ? (m.addEventListener("scroll", u, { passive: !0 }), [m, xf(m)])
              : null;
          })
          .filter((p) => p != null);
        (s(h.length ? new Map(h) : null), (r.current = n));
      }
      return () => {
        (d(n), d(f));
      };
      function d(h) {
        h.forEach((p) => {
          const m = Jc(p);
          m?.removeEventListener("scroll", u);
        });
      }
    }, [u, n]),
    S.useMemo(
      () =>
        n.length
          ? i
            ? Array.from(i.values()).reduce((f, d) => Zi(f, d), cn)
            : Yv(n)
          : cn,
      [n, i],
    )
  );
}
function Pg(n, i) {
  i === void 0 && (i = []);
  const s = S.useRef(null);
  return (
    S.useEffect(() => {
      s.current = null;
    }, i),
    S.useEffect(() => {
      const r = n !== cn;
      (r && !s.current && (s.current = n),
        !r && s.current && (s.current = null));
    }, [n]),
    s.current ? po(n, s.current) : cn
  );
}
function NE(n) {
  S.useEffect(
    () => {
      if (!Ro) return;
      const i = n.map((s) => {
        let { sensor: r } = s;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const s of i) s?.();
      };
    },
    n.map((i) => {
      let { sensor: s } = i;
      return s;
    }),
  );
}
function zE(n, i) {
  return S.useMemo(
    () =>
      n.reduce((s, r) => {
        let { eventName: u, handler: f } = r;
        return (
          (s[u] = (d) => {
            f(d, i);
          }),
          s
        );
      }, {}),
    [n, i],
  );
}
function Kv(n) {
  return S.useMemo(() => (n ? nE(n) : null), [n]);
}
const Fg = [];
function VE(n, i) {
  i === void 0 && (i = tl);
  const [s] = n,
    r = Kv(s ? Ne(s) : null),
    [u, f] = S.useState(Fg);
  function d() {
    f(() => (n.length ? n.map((p) => (jv(p) ? r : new id(i(p), p))) : Fg));
  }
  const h = wo({ callback: d });
  return (
    En(() => {
      (h?.disconnect(), d(), n.forEach((p) => h?.observe(p)));
    }, [n]),
    u
  );
}
function LE(n) {
  if (!n) return null;
  if (n.children.length > 1) return n;
  const i = n.children[0];
  return Rs(i) ? i : n;
}
function UE(n) {
  let { measure: i } = n;
  const [s, r] = S.useState(null),
    u = S.useCallback(
      (m) => {
        for (const { target: g } of m)
          if (Rs(g)) {
            r((b) => {
              const x = i(g);
              return b ? { ...b, width: x.width, height: x.height } : x;
            });
            break;
          }
      },
      [i],
    ),
    f = wo({ callback: u }),
    d = S.useCallback(
      (m) => {
        const g = LE(m);
        (f?.disconnect(), g && f?.observe(g), r(g ? i(g) : null));
      },
      [i, f],
    ),
    [h, p] = mo(d);
  return S.useMemo(() => ({ nodeRef: h, rect: s, setRef: p }), [s, h, p]);
}
const BE = [
    { sensor: Gv, options: {} },
    { sensor: kv, options: {} },
  ],
  _E = { current: {} },
  ro = {
    draggable: { measure: qg },
    droppable: {
      measure: qg,
      strategy: gs.WhileDragging,
      frequency: Ef.Optimized,
    },
    dragOverlay: { measure: tl },
  };
class rs extends Map {
  get(i) {
    var s;
    return i != null && (s = super.get(i)) != null ? s : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((i) => {
      let { disabled: s } = i;
      return !s;
    });
  }
  getNodeFor(i) {
    var s, r;
    return (s = (r = this.get(i)) == null ? void 0 : r.node.current) != null
      ? s
      : void 0;
  }
}
const jE = {
    activatorEvent: null,
    active: null,
    activeNode: null,
    activeNodeRect: null,
    collisions: null,
    containerNodeRect: null,
    draggableNodes: new Map(),
    droppableRects: new Map(),
    droppableContainers: new rs(),
    over: null,
    dragOverlay: { nodeRef: { current: null }, rect: null, setRef: go },
    scrollableAncestors: [],
    scrollableAncestorRects: [],
    measuringConfiguration: ro,
    measureDroppableContainers: go,
    windowRect: null,
    measuringScheduled: !1,
  },
  HE = {
    activatorEvent: null,
    activators: [],
    active: null,
    activeNodeRect: null,
    ariaDescribedById: { draggable: "" },
    dispatch: go,
    draggableNodes: new Map(),
    over: null,
    measureDroppableContainers: go,
  },
  Mo = S.createContext(HE),
  Zv = S.createContext(jE);
function YE() {
  return {
    draggable: {
      active: null,
      initialCoordinates: { x: 0, y: 0 },
      nodes: new Map(),
      translate: { x: 0, y: 0 },
    },
    droppable: { containers: new rs() },
  };
}
function qE(n, i) {
  switch (i.type) {
    case ee.DragStart:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          initialCoordinates: i.initialCoordinates,
          active: i.active,
        },
      };
    case ee.DragMove:
      return n.draggable.active == null
        ? n
        : {
            ...n,
            draggable: {
              ...n.draggable,
              translate: {
                x: i.coordinates.x - n.draggable.initialCoordinates.x,
                y: i.coordinates.y - n.draggable.initialCoordinates.y,
              },
            },
          };
    case ee.DragEnd:
    case ee.DragCancel:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          active: null,
          initialCoordinates: { x: 0, y: 0 },
          translate: { x: 0, y: 0 },
        },
      };
    case ee.RegisterDroppable: {
      const { element: s } = i,
        { id: r } = s,
        u = new rs(n.droppable.containers);
      return (
        u.set(r, s),
        { ...n, droppable: { ...n.droppable, containers: u } }
      );
    }
    case ee.SetDroppableDisabled: {
      const { id: s, key: r, disabled: u } = i,
        f = n.droppable.containers.get(s);
      if (!f || r !== f.key) return n;
      const d = new rs(n.droppable.containers);
      return (
        d.set(s, { ...f, disabled: u }),
        { ...n, droppable: { ...n.droppable, containers: d } }
      );
    }
    case ee.UnregisterDroppable: {
      const { id: s, key: r } = i,
        u = n.droppable.containers.get(s);
      if (!u || r !== u.key) return n;
      const f = new rs(n.droppable.containers);
      return (
        f.delete(s),
        { ...n, droppable: { ...n.droppable, containers: f } }
      );
    }
    default:
      return n;
  }
}
function kE(n) {
  let { disabled: i } = n;
  const { active: s, activatorEvent: r, draggableNodes: u } = S.useContext(Mo),
    f = bf(r),
    d = bf(s?.id);
  return (
    S.useEffect(() => {
      if (!i && !r && f && d != null) {
        if (!nd(f) || document.activeElement === f.target) return;
        const h = u.get(d);
        if (!h) return;
        const { activatorNode: p, node: m } = h;
        if (!p.current && !m.current) return;
        requestAnimationFrame(() => {
          for (const g of [p.current, m.current]) {
            if (!g) continue;
            const b = VT(g);
            if (b) {
              b.focus();
              break;
            }
          }
        });
      }
    }, [r, i, u, d, f]),
    null
  );
}
function GE(n, i) {
  let { transform: s, ...r } = i;
  return n != null && n.length
    ? n.reduce((u, f) => f({ transform: u, ...r }), s)
    : s;
}
function XE(n) {
  return S.useMemo(
    () => ({
      draggable: { ...ro.draggable, ...n?.draggable },
      droppable: { ...ro.droppable, ...n?.droppable },
      dragOverlay: { ...ro.dragOverlay, ...n?.dragOverlay },
    }),
    [n?.draggable, n?.droppable, n?.dragOverlay],
  );
}
function KE(n) {
  let { activeNode: i, measure: s, initialRect: r, config: u = !0 } = n;
  const f = S.useRef(!1),
    { x: d, y: h } = typeof u == "boolean" ? { x: u, y: u } : u;
  En(() => {
    if ((!d && !h) || !i) {
      f.current = !1;
      return;
    }
    if (f.current || !r) return;
    const m = i?.node.current;
    if (!m || m.isConnected === !1) return;
    const g = s(m),
      b = Lv(g, r);
    if (
      (d || (b.x = 0),
      h || (b.y = 0),
      (f.current = !0),
      Math.abs(b.x) > 0 || Math.abs(b.y) > 0)
    ) {
      const x = Uv(m);
      x && x.scrollBy({ top: b.y, left: b.x });
    }
  }, [i, d, h, r, s]);
}
const Qv = S.createContext({ ...cn, scaleX: 1, scaleY: 1 });
var xa;
(function (n) {
  ((n[(n.Uninitialized = 0)] = "Uninitialized"),
    (n[(n.Initializing = 1)] = "Initializing"),
    (n[(n.Initialized = 2)] = "Initialized"));
})(xa || (xa = {}));
const ZE = S.memo(function (i) {
    var s, r, u, f;
    let {
      id: d,
      accessibility: h,
      autoScroll: p = !0,
      children: m,
      sensors: g = BE,
      collisionDetection: b = FT,
      measuring: x,
      modifiers: E,
      ...C
    } = i;
    const O = S.useReducer(qE, void 0, YE),
      [M, z] = O,
      [L, B] = HT(),
      [Z, j] = S.useState(xa.Uninitialized),
      P = Z === xa.Initialized,
      {
        draggable: { active: Q, nodes: K, translate: I },
        droppable: { containers: lt },
      } = M,
      ot = Q != null ? K.get(Q) : null,
      St = S.useRef({ initial: null, translated: null }),
      Gt = S.useMemo(() => {
        var Ht;
        return Q != null
          ? { id: Q, data: (Ht = ot?.data) != null ? Ht : _E, rect: St }
          : null;
      }, [Q, ot]),
      Xt = S.useRef(null),
      [Nt, _] = S.useState(null),
      [G, $] = S.useState(null),
      ut = ms(C, Object.values(C)),
      A = Ms("DndDescribedBy", d),
      k = S.useMemo(() => lt.getEnabled(), [lt]),
      F = XE(x),
      {
        droppableRects: J,
        measureDroppableContainers: tt,
        measuringScheduled: dt,
      } = AE(k, { dragging: P, dependencies: [I.x, I.y], config: F.droppable }),
      et = TE(K, Q),
      ne = S.useMemo(() => (G ? Sf(G) : null), [G]),
      yt = ll(),
      ae = DE(et, F.draggable.measure);
    KE({
      activeNode: Q != null ? K.get(Q) : null,
      config: yt.layoutShiftCompensation,
      initialRect: ae,
      measure: F.draggable.measure,
    });
    const vt = Zg(et, F.draggable.measure, ae),
      fn = Zg(et ? et.parentElement : null),
      Ae = S.useRef({
        activatorEvent: null,
        active: null,
        activeNode: et,
        collisionRect: null,
        collisions: null,
        droppableRects: J,
        draggableNodes: K,
        draggingNode: null,
        draggingNodeRect: null,
        droppableContainers: lt,
        over: null,
        scrollableAncestors: [],
        scrollAdjustedTranslate: null,
      }),
      dn = lt.getNodeFor((s = Ae.current.over) == null ? void 0 : s.id),
      ze = UE({ measure: F.dragOverlay.measure }),
      Pn = (r = ze.nodeRef.current) != null ? r : et,
      Fn = P ? ((u = ze.rect) != null ? u : vt) : null,
      Ve = !!(ze.nodeRef.current && ze.rect),
      Vs = ME(Ve ? null : vt),
      Ia = Kv(Pn ? Ne(Pn) : null),
      nn = CE(P ? (dn ?? et) : null),
      Dn = VE(nn),
      ti = GE(E, {
        transform: { x: I.x - Vs.x, y: I.y - Vs.y, scaleX: 1, scaleY: 1 },
        activatorEvent: G,
        active: Gt,
        activeNodeRect: vt,
        containerNodeRect: fn,
        draggingNodeRect: Fn,
        over: Ae.current.over,
        overlayNodeRect: ze.rect,
        scrollableAncestors: nn,
        scrollableAncestorRects: Dn,
        windowRect: Ia,
      }),
      il = ne ? Zi(ne, I) : null,
      Ls = OE(nn),
      Vo = Pg(Ls),
      Da = Pg(Ls, [vt]),
      Pt = Zi(ti, Vo),
      Se = Fn ? WT(Fn, ti) : null,
      Wt =
        Gt && Se
          ? b({
              active: Gt,
              collisionRect: Se,
              droppableRects: J,
              droppableContainers: k,
              pointerCoordinates: il,
            })
          : null,
      Us = ZT(Wt, "id"),
      [hn, Bs] = S.useState(null),
      ei = Ve ? ti : Zi(ti, Da),
      ni = JT(ei, (f = hn?.rect) != null ? f : null, vt),
      an = S.useRef(null),
      Ra = S.useCallback(
        (Ht, xe) => {
          let { sensor: me, options: ln } = xe;
          if (Xt.current == null) return;
          const pe = K.get(Xt.current);
          if (!pe) return;
          const ue = Ht.nativeEvent,
            Le = new me({
              active: Xt.current,
              activeNode: pe,
              event: ue,
              options: ln,
              context: Ae,
              onAbort(Ct) {
                if (!K.get(Ct)) return;
                const { onDragAbort: Vt } = ut.current,
                  ge = { id: Ct };
                (Vt?.(ge), L({ type: "onDragAbort", event: ge }));
              },
              onPending(Ct, zt, Vt, ge) {
                if (!K.get(Ct)) return;
                const { onDragPending: Ma } = ut.current,
                  mn = {
                    id: Ct,
                    constraint: zt,
                    initialCoordinates: Vt,
                    offset: ge,
                  };
                (Ma?.(mn), L({ type: "onDragPending", event: mn }));
              },
              onStart(Ct) {
                const zt = Xt.current;
                if (zt == null) return;
                const Vt = K.get(zt);
                if (!Vt) return;
                const { onDragStart: ge } = ut.current,
                  Rn = {
                    activatorEvent: ue,
                    active: { id: zt, data: Vt.data, rect: St },
                  };
                as.unstable_batchedUpdates(() => {
                  (ge?.(Rn),
                    j(xa.Initializing),
                    z({
                      type: ee.DragStart,
                      initialCoordinates: Ct,
                      active: zt,
                    }),
                    L({ type: "onDragStart", event: Rn }),
                    _(an.current),
                    $(ue));
                });
              },
              onMove(Ct) {
                z({ type: ee.DragMove, coordinates: Ct });
              },
              onEnd: Jn(ee.DragEnd),
              onCancel: Jn(ee.DragCancel),
            });
          an.current = Le;
          function Jn(Ct) {
            return async function () {
              const {
                active: Vt,
                collisions: ge,
                over: Rn,
                scrollAdjustedTranslate: Ma,
              } = Ae.current;
              let mn = null;
              if (Vt && Ma) {
                const { cancelDrop: $n } = ut.current;
                ((mn = {
                  activatorEvent: ue,
                  active: Vt,
                  collisions: ge,
                  delta: Ma,
                  over: Rn,
                }),
                  Ct === ee.DragEnd &&
                    typeof $n == "function" &&
                    (await Promise.resolve($n(mn))) &&
                    (Ct = ee.DragCancel));
              }
              ((Xt.current = null),
                as.unstable_batchedUpdates(() => {
                  (z({ type: Ct }),
                    j(xa.Uninitialized),
                    Bs(null),
                    _(null),
                    $(null),
                    (an.current = null));
                  const $n = Ct === ee.DragEnd ? "onDragEnd" : "onDragCancel";
                  if (mn) {
                    const wn = ut.current[$n];
                    (wn?.(mn), L({ type: $n, event: mn }));
                  }
                }));
            };
          }
        },
        [K],
      ),
      wa = S.useCallback(
        (Ht, xe) => (me, ln) => {
          const pe = me.nativeEvent,
            ue = K.get(ln);
          if (Xt.current !== null || !ue || pe.dndKit || pe.defaultPrevented)
            return;
          const Le = { active: ue };
          Ht(me, xe.options, Le) === !0 &&
            ((pe.dndKit = { capturedBy: xe.sensor }),
            (Xt.current = ln),
            Ra(me, xe));
        },
        [K, Ra],
      ),
      _s = EE(g, wa);
    (NE(g),
      En(() => {
        vt && Z === xa.Initializing && j(xa.Initialized);
      }, [vt, Z]),
      S.useEffect(() => {
        const { onDragMove: Ht } = ut.current,
          {
            active: xe,
            activatorEvent: me,
            collisions: ln,
            over: pe,
          } = Ae.current;
        if (!xe || !me) return;
        const ue = {
          active: xe,
          activatorEvent: me,
          collisions: ln,
          delta: { x: Pt.x, y: Pt.y },
          over: pe,
        };
        as.unstable_batchedUpdates(() => {
          (Ht?.(ue), L({ type: "onDragMove", event: ue }));
        });
      }, [Pt.x, Pt.y]),
      S.useEffect(() => {
        const {
          active: Ht,
          activatorEvent: xe,
          collisions: me,
          droppableContainers: ln,
          scrollAdjustedTranslate: pe,
        } = Ae.current;
        if (!Ht || Xt.current == null || !xe || !pe) return;
        const { onDragOver: ue } = ut.current,
          Le = ln.get(Us),
          Jn =
            Le && Le.rect.current
              ? {
                  id: Le.id,
                  rect: Le.rect.current,
                  data: Le.data,
                  disabled: Le.disabled,
                }
              : null,
          Ct = {
            active: Ht,
            activatorEvent: xe,
            collisions: me,
            delta: { x: pe.x, y: pe.y },
            over: Jn,
          };
        as.unstable_batchedUpdates(() => {
          (Bs(Jn), ue?.(Ct), L({ type: "onDragOver", event: Ct }));
        });
      }, [Us]),
      En(() => {
        ((Ae.current = {
          activatorEvent: G,
          active: Gt,
          activeNode: et,
          collisionRect: Se,
          collisions: Wt,
          droppableRects: J,
          draggableNodes: K,
          draggingNode: Pn,
          draggingNodeRect: Fn,
          droppableContainers: lt,
          over: hn,
          scrollableAncestors: nn,
          scrollAdjustedTranslate: Pt,
        }),
          (St.current = { initial: Fn, translated: Se }));
      }, [Gt, et, Wt, Se, K, Pn, Fn, J, lt, hn, nn, Pt]),
      bE({
        ...yt,
        delta: I,
        draggingRect: Se,
        pointerCoordinates: il,
        scrollableAncestors: nn,
        scrollableAncestorRects: Dn,
      }));
    const js = S.useMemo(
        () => ({
          active: Gt,
          activeNode: et,
          activeNodeRect: vt,
          activatorEvent: G,
          collisions: Wt,
          containerNodeRect: fn,
          dragOverlay: ze,
          draggableNodes: K,
          droppableContainers: lt,
          droppableRects: J,
          over: hn,
          measureDroppableContainers: tt,
          scrollableAncestors: nn,
          scrollableAncestorRects: Dn,
          measuringConfiguration: F,
          measuringScheduled: dt,
          windowRect: Ia,
        }),
        [Gt, et, vt, G, Wt, fn, ze, K, lt, J, hn, tt, nn, Dn, F, dt, Ia],
      ),
      Hs = S.useMemo(
        () => ({
          activatorEvent: G,
          activators: _s,
          active: Gt,
          activeNodeRect: vt,
          ariaDescribedById: { draggable: A },
          dispatch: z,
          draggableNodes: K,
          over: hn,
          measureDroppableContainers: tt,
        }),
        [G, _s, Gt, vt, z, A, K, hn, tt],
      );
    return Ce.createElement(
      Vv.Provider,
      { value: B },
      Ce.createElement(
        Mo.Provider,
        { value: Hs },
        Ce.createElement(
          Zv.Provider,
          { value: js },
          Ce.createElement(Qv.Provider, { value: ni }, m),
        ),
        Ce.createElement(kE, { disabled: h?.restoreFocus === !1 }),
      ),
      Ce.createElement(kT, { ...h, hiddenTextDescribedById: A }),
    );
    function ll() {
      const Ht = Nt?.autoScrollEnabled === !1,
        xe = typeof p == "object" ? p.enabled === !1 : p === !1,
        me = P && !Ht && !xe;
      return typeof p == "object" ? { ...p, enabled: me } : { enabled: me };
    }
  }),
  QE = S.createContext(null),
  Jg = "button",
  PE = "Draggable";
function FE(n) {
  let { id: i, data: s, disabled: r = !1, attributes: u } = n;
  const f = Ms(PE),
    {
      activators: d,
      activatorEvent: h,
      active: p,
      activeNodeRect: m,
      ariaDescribedById: g,
      draggableNodes: b,
      over: x,
    } = S.useContext(Mo),
    {
      role: E = Jg,
      roleDescription: C = "draggable",
      tabIndex: O = 0,
    } = u ?? {},
    M = p?.id === i,
    z = S.useContext(M ? Qv : QE),
    [L, B] = mo(),
    [Z, j] = mo(),
    P = zE(d, i),
    Q = ms(s);
  En(
    () => (
      b.set(i, { id: i, key: f, node: L, activatorNode: Z, data: Q }),
      () => {
        const I = b.get(i);
        I && I.key === f && b.delete(i);
      }
    ),
    [b, i],
  );
  const K = S.useMemo(
    () => ({
      role: E,
      tabIndex: O,
      "aria-disabled": r,
      "aria-pressed": M && E === Jg ? !0 : void 0,
      "aria-roledescription": C,
      "aria-describedby": g.draggable,
    }),
    [r, E, O, M, C, g.draggable],
  );
  return {
    active: p,
    activatorEvent: h,
    activeNodeRect: m,
    attributes: K,
    isDragging: M,
    listeners: r ? void 0 : P,
    node: L,
    over: x,
    setNodeRef: B,
    setActivatorNodeRef: j,
    transform: z,
  };
}
function JE() {
  return S.useContext(Zv);
}
const $E = "Droppable",
  WE = { timeout: 25 };
function IE(n) {
  let { data: i, disabled: s = !1, id: r, resizeObserverConfig: u } = n;
  const f = Ms($E),
    {
      active: d,
      dispatch: h,
      over: p,
      measureDroppableContainers: m,
    } = S.useContext(Mo),
    g = S.useRef({ disabled: s }),
    b = S.useRef(!1),
    x = S.useRef(null),
    E = S.useRef(null),
    { disabled: C, updateMeasurementsFor: O, timeout: M } = { ...WE, ...u },
    z = ms(O ?? r),
    L = S.useCallback(() => {
      if (!b.current) {
        b.current = !0;
        return;
      }
      (E.current != null && clearTimeout(E.current),
        (E.current = setTimeout(() => {
          (m(Array.isArray(z.current) ? z.current : [z.current]),
            (E.current = null));
        }, M)));
    }, [M]),
    B = wo({ callback: L, disabled: C || !d }),
    Z = S.useCallback(
      (K, I) => {
        B && (I && (B.unobserve(I), (b.current = !1)), K && B.observe(K));
      },
      [B],
    ),
    [j, P] = mo(Z),
    Q = ms(i);
  return (
    S.useEffect(() => {
      !B ||
        !j.current ||
        (B.disconnect(), (b.current = !1), B.observe(j.current));
    }, [j, B]),
    S.useEffect(
      () => (
        h({
          type: ee.RegisterDroppable,
          element: { id: r, key: f, disabled: s, node: j, rect: x, data: Q },
        }),
        () => h({ type: ee.UnregisterDroppable, key: f, id: r })
      ),
      [r],
    ),
    S.useEffect(() => {
      s !== g.current.disabled &&
        (h({ type: ee.SetDroppableDisabled, id: r, key: f, disabled: s }),
        (g.current.disabled = s));
    }, [r, f, s, h]),
    { active: d, rect: x, isOver: p?.id === r, node: j, over: p, setNodeRef: P }
  );
}
function vo(n, i, s) {
  const r = n.slice();
  return (r.splice(s < 0 ? r.length + s : s, 0, r.splice(i, 1)[0]), r);
}
function tA(n, i) {
  return n.reduce((s, r, u) => {
    const f = i.get(r);
    return (f && (s[u] = f), s);
  }, Array(n.length));
}
function $r(n) {
  return n !== null && n >= 0;
}
function eA(n, i) {
  if (n === i) return !0;
  if (n.length !== i.length) return !1;
  for (let s = 0; s < n.length; s++) if (n[s] !== i[s]) return !1;
  return !0;
}
function nA(n) {
  return typeof n == "boolean" ? { draggable: n, droppable: n } : n;
}
const Pv = (n) => {
    let { rects: i, activeIndex: s, overIndex: r, index: u } = n;
    const f = vo(i, r, s),
      d = i[u],
      h = f[u];
    return !h || !d
      ? null
      : {
          x: h.left - d.left,
          y: h.top - d.top,
          scaleX: h.width / d.width,
          scaleY: h.height / d.height,
        };
  },
  Wr = { scaleX: 1, scaleY: 1 },
  aA = (n) => {
    var i;
    let {
      activeIndex: s,
      activeNodeRect: r,
      index: u,
      rects: f,
      overIndex: d,
    } = n;
    const h = (i = f[s]) != null ? i : r;
    if (!h) return null;
    if (u === s) {
      const m = f[d];
      return m
        ? {
            x: 0,
            y: s < d ? m.top + m.height - (h.top + h.height) : m.top - h.top,
            ...Wr,
          }
        : null;
    }
    const p = iA(f, u, s);
    return u > s && u <= d
      ? { x: 0, y: -h.height - p, ...Wr }
      : u < s && u >= d
        ? { x: 0, y: h.height + p, ...Wr }
        : { x: 0, y: 0, ...Wr };
  };
function iA(n, i, s) {
  const r = n[i],
    u = n[i - 1],
    f = n[i + 1];
  return r
    ? s < i
      ? u
        ? r.top - (u.top + u.height)
        : f
          ? f.top - (r.top + r.height)
          : 0
      : f
        ? f.top - (r.top + r.height)
        : u
          ? r.top - (u.top + u.height)
          : 0
    : 0;
}
const Fv = "Sortable",
  Jv = Ce.createContext({
    activeIndex: -1,
    containerId: Fv,
    disableTransforms: !1,
    items: [],
    overIndex: -1,
    useDragOverlay: !1,
    sortedRects: [],
    strategy: Pv,
    disabled: { draggable: !1, droppable: !1 },
  });
function lA(n) {
  let { children: i, id: s, items: r, strategy: u = Pv, disabled: f = !1 } = n;
  const {
      active: d,
      dragOverlay: h,
      droppableRects: p,
      over: m,
      measureDroppableContainers: g,
    } = JE(),
    b = Ms(Fv, s),
    x = h.rect !== null,
    E = S.useMemo(
      () => r.map((P) => (typeof P == "object" && "id" in P ? P.id : P)),
      [r],
    ),
    C = d != null,
    O = d ? E.indexOf(d.id) : -1,
    M = m ? E.indexOf(m.id) : -1,
    z = S.useRef(E),
    L = !eA(E, z.current),
    B = (M !== -1 && O === -1) || L,
    Z = nA(f);
  (En(() => {
    L && C && g(E);
  }, [L, E, C, g]),
    S.useEffect(() => {
      z.current = E;
    }, [E]));
  const j = S.useMemo(
    () => ({
      activeIndex: O,
      containerId: b,
      disabled: Z,
      disableTransforms: B,
      items: E,
      overIndex: M,
      useDragOverlay: x,
      sortedRects: tA(E, p),
      strategy: u,
    }),
    [O, b, Z.draggable, Z.droppable, B, E, M, p, x, u],
  );
  return Ce.createElement(Jv.Provider, { value: j }, i);
}
const sA = (n) => {
    let { id: i, items: s, activeIndex: r, overIndex: u } = n;
    return vo(s, r, u).indexOf(i);
  },
  rA = (n) => {
    let {
      containerId: i,
      isSorting: s,
      wasDragging: r,
      index: u,
      items: f,
      newIndex: d,
      previousItems: h,
      previousContainerId: p,
      transition: m,
    } = n;
    return !m || !r || (h !== f && u === d) ? !1 : s ? !0 : d !== u && i === p;
  },
  oA = { duration: 200, easing: "ease" },
  $v = "transform",
  uA = ps.Transition.toString({ property: $v, duration: 0, easing: "linear" }),
  cA = { roleDescription: "sortable" };
function fA(n) {
  let { disabled: i, index: s, node: r, rect: u } = n;
  const [f, d] = S.useState(null),
    h = S.useRef(s);
  return (
    En(() => {
      if (!i && s !== h.current && r.current) {
        const p = u.current;
        if (p) {
          const m = tl(r.current, { ignoreTransform: !0 }),
            g = {
              x: p.left - m.left,
              y: p.top - m.top,
              scaleX: p.width / m.width,
              scaleY: p.height / m.height,
            };
          (g.x || g.y) && d(g);
        }
      }
      s !== h.current && (h.current = s);
    }, [i, s, r, u]),
    S.useEffect(() => {
      f && d(null);
    }, [f]),
    f
  );
}
function dA(n) {
  let {
    animateLayoutChanges: i = rA,
    attributes: s,
    disabled: r,
    data: u,
    getNewIndex: f = sA,
    id: d,
    strategy: h,
    resizeObserverConfig: p,
    transition: m = oA,
  } = n;
  const {
      items: g,
      containerId: b,
      activeIndex: x,
      disabled: E,
      disableTransforms: C,
      sortedRects: O,
      overIndex: M,
      useDragOverlay: z,
      strategy: L,
    } = S.useContext(Jv),
    B = hA(r, E),
    Z = g.indexOf(d),
    j = S.useMemo(
      () => ({ sortable: { containerId: b, index: Z, items: g }, ...u }),
      [b, u, Z, g],
    ),
    P = S.useMemo(() => g.slice(g.indexOf(d)), [g, d]),
    {
      rect: Q,
      node: K,
      isOver: I,
      setNodeRef: lt,
    } = IE({
      id: d,
      data: j,
      disabled: B.droppable,
      resizeObserverConfig: { updateMeasurementsFor: P, ...p },
    }),
    {
      active: ot,
      activatorEvent: St,
      activeNodeRect: Gt,
      attributes: Xt,
      setNodeRef: Nt,
      listeners: _,
      isDragging: G,
      over: $,
      setActivatorNodeRef: ut,
      transform: A,
    } = FE({
      id: d,
      data: j,
      attributes: { ...cA, ...s },
      disabled: B.draggable,
    }),
    k = CT(lt, Nt),
    F = !!ot,
    J = F && !C && $r(x) && $r(M),
    tt = !z && G,
    dt = tt && J ? A : null,
    ne = J
      ? (dt ??
        (h ?? L)({
          rects: O,
          activeNodeRect: Gt,
          activeIndex: x,
          overIndex: M,
          index: Z,
        }))
      : null,
    yt =
      $r(x) && $r(M) ? f({ id: d, items: g, activeIndex: x, overIndex: M }) : Z,
    ae = ot?.id,
    vt = S.useRef({ activeId: ae, items: g, newIndex: yt, containerId: b }),
    fn = g !== vt.current.items,
    Ae = i({
      active: ot,
      containerId: b,
      isDragging: G,
      isSorting: F,
      id: d,
      index: Z,
      items: g,
      newIndex: vt.current.newIndex,
      previousItems: vt.current.items,
      previousContainerId: vt.current.containerId,
      transition: m,
      wasDragging: vt.current.activeId != null,
    }),
    dn = fA({ disabled: !Ae, index: Z, node: K, rect: Q });
  return (
    S.useEffect(() => {
      (F && vt.current.newIndex !== yt && (vt.current.newIndex = yt),
        b !== vt.current.containerId && (vt.current.containerId = b),
        g !== vt.current.items && (vt.current.items = g));
    }, [F, yt, b, g]),
    S.useEffect(() => {
      if (ae === vt.current.activeId) return;
      if (ae != null && vt.current.activeId == null) {
        vt.current.activeId = ae;
        return;
      }
      const Pn = setTimeout(() => {
        vt.current.activeId = ae;
      }, 50);
      return () => clearTimeout(Pn);
    }, [ae]),
    {
      active: ot,
      activeIndex: x,
      attributes: Xt,
      data: j,
      rect: Q,
      index: Z,
      newIndex: yt,
      items: g,
      isOver: I,
      isSorting: F,
      isDragging: G,
      listeners: _,
      node: K,
      overIndex: M,
      over: $,
      setNodeRef: k,
      setActivatorNodeRef: ut,
      setDroppableNodeRef: lt,
      setDraggableNodeRef: Nt,
      transform: dn ?? ne,
      transition: ze(),
    }
  );
  function ze() {
    if (dn || (fn && vt.current.newIndex === Z)) return uA;
    if (!((tt && !nd(St)) || !m) && (F || Ae))
      return ps.Transition.toString({ ...m, property: $v });
  }
}
function hA(n, i) {
  var s, r;
  return typeof n == "boolean"
    ? { draggable: n, droppable: !1 }
    : {
        draggable: (s = n?.draggable) != null ? s : i.draggable,
        droppable: (r = n?.droppable) != null ? r : i.droppable,
      };
}
(Tt.Down, Tt.Right, Tt.Up, Tt.Left);
function mA({ task: n, onCheck: i, onDelete: s }) {
  const {
      attributes: r,
      listeners: u,
      setNodeRef: f,
      transform: d,
      transition: h,
    } = dA({ id: n.id }),
    p = { transform: ps.Transform.toString(d), transition: h };
  return X.jsxs("div", {
    ref: f,
    style: p,
    ...r,
    className:
      "flex items-center justify-between bg-transparent border border-gray-400 hover:border-accent-red transition-colors duration-300 rounded-lg px-4 py-2 shadow-sm",
    children: [
      X.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          X.jsx("input", {
            type: "checkbox",
            checked: n.isDone,
            onChange: () => i(n.id),
            className: "h-4 w-4 accent-red-600 cursor-pointer",
          }),
          X.jsx("li", {
            className: `list-none ${n.isDone ? "line-through text-gray-400" : "text-gray-800 dark:text-gray-200"}`,
            children: n.title,
          }),
        ],
      }),
      X.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          X.jsx("span", {
            ...u,
            className: "cursor-grab select-none px-2",
            children: "☰ ",
          }),
          X.jsx("span", {
            onClick: () => s(n.id),
            className:
              "text-gray-600 dark:text-gray-400 text-xl font-bold cursor-pointer hover:text-accent-red transition-colors duration-300",
            children: "×",
          }),
        ],
      }),
    ],
  });
}
function pA({ tasks: n, setTasks: i }) {
  function s(f) {
    const { active: d, over: h } = f;
    if (!h || d.id === h.id) return;
    const p = n.findIndex((g) => g.id === d.id),
      m = n.findIndex((g) => g.id === h.id);
    (i(vo(n, p, m)),
      localStorage.setItem("tasks", JSON.stringify(vo(n, p, m))));
  }
  function r(f) {
    const d = n.map((h) => (h.id === f ? { ...h, isDone: !h.isDone } : h));
    (i(d), localStorage.setItem("tasks", JSON.stringify(d)));
  }
  function u(f) {
    const d = n.filter((h) => h.id !== f);
    (i(d), localStorage.setItem("tasks", JSON.stringify(d)));
  }
  return X.jsx(ZE, {
    collisionDetection: QT,
    onDragEnd: s,
    children: X.jsx(lA, {
      items: n,
      strategy: aA,
      children: X.jsx("ul", {
        className: `w-full py-5 space-y-3 overflow-y-hidden overflow-x-hidden max-h-[${n.length * 50}px]`,
        children: n.map((f) =>
          X.jsx(mA, { task: f, onCheck: r, onDelete: u }, f.id),
        ),
      }),
    }),
  });
}
function gA({ tasks: n }) {
  const i = n.length || 0,
    s = n.filter((u) => u.isDone).length,
    r = i > 0 ? Math.round((s / i) * 100) : 0;
  return (
    n.length > 0 &&
    X.jsxs("div", {
      className: "w-full my-4 ",
      children: [
        X.jsxs("div", {
          className:
            "flex justify-between mb-1 text-sm text-gray-600 dark:text-gray-300",
          children: [
            X.jsxs("span", { children: [s, " of ", i, " tasks"] }),
            X.jsxs("span", { children: [r, "%"] }),
          ],
        }),
        X.jsx("div", {
          className:
            "w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
          children: X.jsx("div", {
            className: `h-full transition-all duration-500 ${r === 100 ? "bg-green-500" : r >= 50 ? "bg-yellow-500" : "bg-red-500"}`,
            style: { width: `${r}%` },
          }),
        }),
        r === 100 &&
          X.jsx("p", {
            className: "mt-2 text-center text-green-600 font-medium",
            children: "🎉 You did it! All tasks completed!",
          }),
      ],
    })
  );
}
const sd = S.createContext({});
function rd(n) {
  const i = S.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const od = typeof window < "u",
  Wv = od ? S.useLayoutEffect : S.useEffect,
  Co = S.createContext(null);
function ud(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function cd(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
const Kn = (n, i, s) => (s > i ? i : s < n ? n : s);
let fd = () => {};
const Zn = {},
  Iv = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function t0(n) {
  return typeof n == "object" && n !== null;
}
const e0 = (n) => /^0[^.\s]+$/u.test(n);
function dd(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const en = (n) => n,
  yA = (n, i) => (s) => i(n(s)),
  Cs = (...n) => n.reduce(yA),
  ys = (n, i, s) => {
    const r = i - n;
    return r === 0 ? 1 : (s - n) / r;
  };
class hd {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (ud(this.subscriptions, i), () => cd(this.subscriptions, i));
  }
  notify(i, s, r) {
    const u = this.subscriptions.length;
    if (u)
      if (u === 1) this.subscriptions[0](i, s, r);
      else
        for (let f = 0; f < u; f++) {
          const d = this.subscriptions[f];
          d && d(i, s, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Sn = (n) => n * 1e3,
  tn = (n) => n / 1e3;
function n0(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const a0 = (n, i, s) =>
    (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  vA = 1e-7,
  bA = 12;
function SA(n, i, s, r, u) {
  let f,
    d,
    h = 0;
  do ((d = i + (s - i) / 2), (f = a0(d, r, u) - n), f > 0 ? (s = d) : (i = d));
  while (Math.abs(f) > vA && ++h < bA);
  return d;
}
function Os(n, i, s, r) {
  if (n === i && s === r) return en;
  const u = (f) => SA(f, 0, 1, n, s);
  return (f) => (f === 0 || f === 1 ? f : a0(u(f), i, r));
}
const i0 = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  l0 = (n) => (i) => 1 - n(1 - i),
  s0 = Os(0.33, 1.53, 0.69, 0.99),
  md = l0(s0),
  r0 = i0(md),
  o0 = (n) =>
    (n *= 2) < 1 ? 0.5 * md(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  pd = (n) => 1 - Math.sin(Math.acos(n)),
  u0 = l0(pd),
  c0 = i0(pd),
  xA = Os(0.42, 0, 1, 1),
  TA = Os(0, 0, 0.58, 1),
  f0 = Os(0.42, 0, 0.58, 1),
  EA = (n) => Array.isArray(n) && typeof n[0] != "number",
  d0 = (n) => Array.isArray(n) && typeof n[0] == "number",
  AA = {
    linear: en,
    easeIn: xA,
    easeInOut: f0,
    easeOut: TA,
    circIn: pd,
    circInOut: c0,
    circOut: u0,
    backIn: md,
    backInOut: r0,
    backOut: s0,
    anticipate: o0,
  },
  DA = (n) => typeof n == "string",
  $g = (n) => {
    if (d0(n)) {
      fd(n.length === 4);
      const [i, s, r, u] = n;
      return Os(i, s, r, u);
    } else if (DA(n)) return AA[n];
    return n;
  },
  Ir = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function RA(n, i) {
  let s = new Set(),
    r = new Set(),
    u = !1,
    f = !1;
  const d = new WeakSet();
  let h = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(g) {
    (d.has(g) && (m.schedule(g), n()), g(h));
  }
  const m = {
    schedule: (g, b = !1, x = !1) => {
      const C = x && u ? s : r;
      return (b && d.add(g), C.has(g) || C.add(g), g);
    },
    cancel: (g) => {
      (r.delete(g), d.delete(g));
    },
    process: (g) => {
      if (((h = g), u)) {
        f = !0;
        return;
      }
      ((u = !0),
        ([s, r] = [r, s]),
        s.forEach(p),
        s.clear(),
        (u = !1),
        f && ((f = !1), m.process(g)));
    },
  };
  return m;
}
const wA = 40;
function h0(n, i) {
  let s = !1,
    r = !0;
  const u = { delta: 0, timestamp: 0, isProcessing: !1 },
    f = () => (s = !0),
    d = Ir.reduce((B, Z) => ((B[Z] = RA(f)), B), {}),
    {
      setup: h,
      read: p,
      resolveKeyframes: m,
      preUpdate: g,
      update: b,
      preRender: x,
      render: E,
      postRender: C,
    } = d,
    O = () => {
      const B = Zn.useManualTiming ? u.timestamp : performance.now();
      ((s = !1),
        Zn.useManualTiming ||
          (u.delta = r ? 1e3 / 60 : Math.max(Math.min(B - u.timestamp, wA), 1)),
        (u.timestamp = B),
        (u.isProcessing = !0),
        h.process(u),
        p.process(u),
        m.process(u),
        g.process(u),
        b.process(u),
        x.process(u),
        E.process(u),
        C.process(u),
        (u.isProcessing = !1),
        s && i && ((r = !1), n(O)));
    },
    M = () => {
      ((s = !0), (r = !0), u.isProcessing || n(O));
    };
  return {
    schedule: Ir.reduce((B, Z) => {
      const j = d[Z];
      return (
        (B[Z] = (P, Q = !1, K = !1) => (s || M(), j.schedule(P, Q, K))),
        B
      );
    }, {}),
    cancel: (B) => {
      for (let Z = 0; Z < Ir.length; Z++) d[Ir[Z]].cancel(B);
    },
    state: u,
    steps: d,
  };
}
const {
  schedule: Ut,
  cancel: Ta,
  state: he,
  steps: Ic,
} = h0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : en, !0);
let oo;
function MA() {
  oo = void 0;
}
const Oe = {
    now: () => (
      oo === void 0 &&
        Oe.set(
          he.isProcessing || Zn.useManualTiming
            ? he.timestamp
            : performance.now(),
        ),
      oo
    ),
    set: (n) => {
      ((oo = n), queueMicrotask(MA));
    },
  },
  m0 = (n) => (i) => typeof i == "string" && i.startsWith(n),
  gd = m0("--"),
  CA = m0("var(--"),
  yd = (n) => (CA(n) ? OA.test(n.split("/*")[0].trim()) : !1),
  OA =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  el = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  vs = { ...el, transform: (n) => Kn(0, 1, n) },
  to = { ...el, default: 1 },
  os = (n) => Math.round(n * 1e5) / 1e5,
  vd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function NA(n) {
  return n == null;
}
const zA =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  bd = (n, i) => (s) =>
    !!(
      (typeof s == "string" && zA.test(s) && s.startsWith(n)) ||
      (i && !NA(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  p0 = (n, i, s) => (r) => {
    if (typeof r != "string") return r;
    const [u, f, d, h] = r.match(vd);
    return {
      [n]: parseFloat(u),
      [i]: parseFloat(f),
      [s]: parseFloat(d),
      alpha: h !== void 0 ? parseFloat(h) : 1,
    };
  },
  VA = (n) => Kn(0, 255, n),
  tf = { ...el, transform: (n) => Math.round(VA(n)) },
  Pa = {
    test: bd("rgb", "red"),
    parse: p0("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: s, alpha: r = 1 }) =>
      "rgba(" +
      tf.transform(n) +
      ", " +
      tf.transform(i) +
      ", " +
      tf.transform(s) +
      ", " +
      os(vs.transform(r)) +
      ")",
  };
function LA(n) {
  let i = "",
    s = "",
    r = "",
    u = "";
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (s = n.substring(3, 5)),
        (r = n.substring(5, 7)),
        (u = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (s = n.substring(2, 3)),
        (r = n.substring(3, 4)),
        (u = n.substring(4, 5)),
        (i += i),
        (s += s),
        (r += r),
        (u += u)),
    {
      red: parseInt(i, 16),
      green: parseInt(s, 16),
      blue: parseInt(r, 16),
      alpha: u ? parseInt(u, 16) / 255 : 1,
    }
  );
}
const Af = { test: bd("#"), parse: LA, transform: Pa.transform },
  Ns = (n) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  Sa = Ns("deg"),
  xn = Ns("%"),
  rt = Ns("px"),
  UA = Ns("vh"),
  BA = Ns("vw"),
  Wg = {
    ...xn,
    parse: (n) => xn.parse(n) / 100,
    transform: (n) => xn.transform(n * 100),
  },
  qi = {
    test: bd("hsl", "hue"),
    parse: p0("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      xn.transform(os(i)) +
      ", " +
      xn.transform(os(s)) +
      ", " +
      os(vs.transform(r)) +
      ")",
  },
  $t = {
    test: (n) => Pa.test(n) || Af.test(n) || qi.test(n),
    parse: (n) =>
      Pa.test(n) ? Pa.parse(n) : qi.test(n) ? qi.parse(n) : Af.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
          ? Pa.transform(n)
          : qi.transform(n),
    getAnimatableNone: (n) => {
      const i = $t.parse(n);
      return ((i.alpha = 0), $t.transform(i));
    },
  },
  _A =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function jA(n) {
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (n.match(vd)?.length || 0) + (n.match(_A)?.length || 0) > 0
  );
}
const g0 = "number",
  y0 = "color",
  HA = "var",
  YA = "var(",
  Ig = "${}",
  qA =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function bs(n) {
  const i = n.toString(),
    s = [],
    r = { color: [], number: [], var: [] },
    u = [];
  let f = 0;
  const h = i
    .replace(
      qA,
      (p) => (
        $t.test(p)
          ? (r.color.push(f), u.push(y0), s.push($t.parse(p)))
          : p.startsWith(YA)
            ? (r.var.push(f), u.push(HA), s.push(p))
            : (r.number.push(f), u.push(g0), s.push(parseFloat(p))),
        ++f,
        Ig
      ),
    )
    .split(Ig);
  return { values: s, split: h, indexes: r, types: u };
}
function v0(n) {
  return bs(n).values;
}
function b0(n) {
  const { split: i, types: s } = bs(n),
    r = i.length;
  return (u) => {
    let f = "";
    for (let d = 0; d < r; d++)
      if (((f += i[d]), u[d] !== void 0)) {
        const h = s[d];
        h === g0
          ? (f += os(u[d]))
          : h === y0
            ? (f += $t.transform(u[d]))
            : (f += u[d]);
      }
    return f;
  };
}
const kA = (n) =>
  typeof n == "number" ? 0 : $t.test(n) ? $t.getAnimatableNone(n) : n;
function GA(n) {
  const i = v0(n);
  return b0(n)(i.map(kA));
}
const Ea = {
  test: jA,
  parse: v0,
  createTransformer: b0,
  getAnimatableNone: GA,
};
function ef(n, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? n + (i - n) * 6 * s
      : s < 1 / 2
        ? i
        : s < 2 / 3
          ? n + (i - n) * (2 / 3 - s) * 6
          : n
  );
}
function XA({ hue: n, saturation: i, lightness: s, alpha: r }) {
  ((n /= 360), (i /= 100), (s /= 100));
  let u = 0,
    f = 0,
    d = 0;
  if (!i) u = f = d = s;
  else {
    const h = s < 0.5 ? s * (1 + i) : s + i - s * i,
      p = 2 * s - h;
    ((u = ef(p, h, n + 1 / 3)), (f = ef(p, h, n)), (d = ef(p, h, n - 1 / 3)));
  }
  return {
    red: Math.round(u * 255),
    green: Math.round(f * 255),
    blue: Math.round(d * 255),
    alpha: r,
  };
}
function bo(n, i) {
  return (s) => (s > 0 ? i : n);
}
const _t = (n, i, s) => n + (i - n) * s,
  nf = (n, i, s) => {
    const r = n * n,
      u = s * (i * i - r) + r;
    return u < 0 ? 0 : Math.sqrt(u);
  },
  KA = [Af, Pa, qi],
  ZA = (n) => KA.find((i) => i.test(n));
function ty(n) {
  const i = ZA(n);
  if (!i) return !1;
  let s = i.parse(n);
  return (i === qi && (s = XA(s)), s);
}
const ey = (n, i) => {
    const s = ty(n),
      r = ty(i);
    if (!s || !r) return bo(n, i);
    const u = { ...s };
    return (f) => (
      (u.red = nf(s.red, r.red, f)),
      (u.green = nf(s.green, r.green, f)),
      (u.blue = nf(s.blue, r.blue, f)),
      (u.alpha = _t(s.alpha, r.alpha, f)),
      Pa.transform(u)
    );
  },
  Df = new Set(["none", "hidden"]);
function QA(n, i) {
  return Df.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function PA(n, i) {
  return (s) => _t(n, i, s);
}
function Sd(n) {
  return typeof n == "number"
    ? PA
    : typeof n == "string"
      ? yd(n)
        ? bo
        : $t.test(n)
          ? ey
          : $A
      : Array.isArray(n)
        ? S0
        : typeof n == "object"
          ? $t.test(n)
            ? ey
            : FA
          : bo;
}
function S0(n, i) {
  const s = [...n],
    r = s.length,
    u = n.map((f, d) => Sd(f)(f, i[d]));
  return (f) => {
    for (let d = 0; d < r; d++) s[d] = u[d](f);
    return s;
  };
}
function FA(n, i) {
  const s = { ...n, ...i },
    r = {};
  for (const u in s)
    n[u] !== void 0 && i[u] !== void 0 && (r[u] = Sd(n[u])(n[u], i[u]));
  return (u) => {
    for (const f in r) s[f] = r[f](u);
    return s;
  };
}
function JA(n, i) {
  const s = [],
    r = { color: 0, var: 0, number: 0 };
  for (let u = 0; u < i.values.length; u++) {
    const f = i.types[u],
      d = n.indexes[f][r[f]],
      h = n.values[d] ?? 0;
    ((s[u] = h), r[f]++);
  }
  return s;
}
const $A = (n, i) => {
  const s = Ea.createTransformer(i),
    r = bs(n),
    u = bs(i);
  return r.indexes.var.length === u.indexes.var.length &&
    r.indexes.color.length === u.indexes.color.length &&
    r.indexes.number.length >= u.indexes.number.length
    ? (Df.has(n) && !u.values.length) || (Df.has(i) && !r.values.length)
      ? QA(n, i)
      : Cs(S0(JA(r, u), u.values), s)
    : bo(n, i);
};
function x0(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? _t(n, i, s)
    : Sd(n)(n, i);
}
const WA = (n) => {
    const i = ({ timestamp: s }) => n(s);
    return {
      start: (s = !0) => Ut.update(i, s),
      stop: () => Ta(i),
      now: () => (he.isProcessing ? he.timestamp : Oe.now()),
    };
  },
  T0 = (n, i, s = 10) => {
    let r = "";
    const u = Math.max(Math.round(i / s), 2);
    for (let f = 0; f < u; f++)
      r += Math.round(n(f / (u - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  So = 2e4;
function xd(n) {
  let i = 0;
  const s = 50;
  let r = n.next(i);
  for (; !r.done && i < So; ) ((i += s), (r = n.next(i)));
  return i >= So ? 1 / 0 : i;
}
function IA(n, i = 100, s) {
  const r = s({ ...n, keyframes: [0, i] }),
    u = Math.min(xd(r), So);
  return {
    type: "keyframes",
    ease: (f) => r.next(u * f).value / i,
    duration: tn(u),
  };
}
const tD = 5;
function E0(n, i, s) {
  const r = Math.max(i - tD, 0);
  return n0(s - n(r), i - r);
}
const kt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  af = 0.001;
function eD({
  duration: n = kt.duration,
  bounce: i = kt.bounce,
  velocity: s = kt.velocity,
  mass: r = kt.mass,
}) {
  let u,
    f,
    d = 1 - i;
  ((d = Kn(kt.minDamping, kt.maxDamping, d)),
    (n = Kn(kt.minDuration, kt.maxDuration, tn(n))),
    d < 1
      ? ((u = (m) => {
          const g = m * d,
            b = g * n,
            x = g - s,
            E = Rf(m, d),
            C = Math.exp(-b);
          return af - (x / E) * C;
        }),
        (f = (m) => {
          const b = m * d * n,
            x = b * s + s,
            E = Math.pow(d, 2) * Math.pow(m, 2) * n,
            C = Math.exp(-b),
            O = Rf(Math.pow(m, 2), d);
          return ((-u(m) + af > 0 ? -1 : 1) * ((x - E) * C)) / O;
        }))
      : ((u = (m) => {
          const g = Math.exp(-m * n),
            b = (m - s) * n + 1;
          return -af + g * b;
        }),
        (f = (m) => {
          const g = Math.exp(-m * n),
            b = (s - m) * (n * n);
          return g * b;
        })));
  const h = 5 / n,
    p = aD(u, f, h);
  if (((n = Sn(n)), isNaN(p)))
    return { stiffness: kt.stiffness, damping: kt.damping, duration: n };
  {
    const m = Math.pow(p, 2) * r;
    return { stiffness: m, damping: d * 2 * Math.sqrt(r * m), duration: n };
  }
}
const nD = 12;
function aD(n, i, s) {
  let r = s;
  for (let u = 1; u < nD; u++) r = r - n(r) / i(r);
  return r;
}
function Rf(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const iD = ["duration", "bounce"],
  lD = ["stiffness", "damping", "mass"];
function ny(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function sD(n) {
  let i = {
    velocity: kt.velocity,
    stiffness: kt.stiffness,
    damping: kt.damping,
    mass: kt.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!ny(n, lD) && ny(n, iD))
    if (n.visualDuration) {
      const s = n.visualDuration,
        r = (2 * Math.PI) / (s * 1.2),
        u = r * r,
        f = 2 * Kn(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
      i = { ...i, mass: kt.mass, stiffness: u, damping: f };
    } else {
      const s = eD(n);
      ((i = { ...i, ...s, mass: kt.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function xo(n = kt.visualDuration, i = kt.bounce) {
  const s =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: i }
      : n;
  let { restSpeed: r, restDelta: u } = s;
  const f = s.keyframes[0],
    d = s.keyframes[s.keyframes.length - 1],
    h = { done: !1, value: f },
    {
      stiffness: p,
      damping: m,
      mass: g,
      duration: b,
      velocity: x,
      isResolvedFromDuration: E,
    } = sD({ ...s, velocity: -tn(s.velocity || 0) }),
    C = x || 0,
    O = m / (2 * Math.sqrt(p * g)),
    M = d - f,
    z = tn(Math.sqrt(p / g)),
    L = Math.abs(M) < 5;
  (r || (r = L ? kt.restSpeed.granular : kt.restSpeed.default),
    u || (u = L ? kt.restDelta.granular : kt.restDelta.default));
  let B;
  if (O < 1) {
    const j = Rf(z, O);
    B = (P) => {
      const Q = Math.exp(-O * z * P);
      return (
        d - Q * (((C + O * z * M) / j) * Math.sin(j * P) + M * Math.cos(j * P))
      );
    };
  } else if (O === 1) B = (j) => d - Math.exp(-z * j) * (M + (C + z * M) * j);
  else {
    const j = z * Math.sqrt(O * O - 1);
    B = (P) => {
      const Q = Math.exp(-O * z * P),
        K = Math.min(j * P, 300);
      return (
        d - (Q * ((C + O * z * M) * Math.sinh(K) + j * M * Math.cosh(K))) / j
      );
    };
  }
  const Z = {
    calculatedDuration: (E && b) || null,
    next: (j) => {
      const P = B(j);
      if (E) h.done = j >= b;
      else {
        let Q = j === 0 ? C : 0;
        O < 1 && (Q = j === 0 ? Sn(C) : E0(B, j, P));
        const K = Math.abs(Q) <= r,
          I = Math.abs(d - P) <= u;
        h.done = K && I;
      }
      return ((h.value = h.done ? d : P), h);
    },
    toString: () => {
      const j = Math.min(xd(Z), So),
        P = T0((Q) => Z.next(j * Q).value, j, 30);
      return j + "ms " + P;
    },
    toTransition: () => {},
  };
  return Z;
}
xo.applyToOptions = (n) => {
  const i = IA(n, 100, xo);
  return (
    (n.ease = i.ease),
    (n.duration = Sn(i.duration)),
    (n.type = "keyframes"),
    n
  );
};
function wf({
  keyframes: n,
  velocity: i = 0,
  power: s = 0.8,
  timeConstant: r = 325,
  bounceDamping: u = 10,
  bounceStiffness: f = 500,
  modifyTarget: d,
  min: h,
  max: p,
  restDelta: m = 0.5,
  restSpeed: g,
}) {
  const b = n[0],
    x = { done: !1, value: b },
    E = (K) => (h !== void 0 && K < h) || (p !== void 0 && K > p),
    C = (K) =>
      h === void 0
        ? p
        : p === void 0 || Math.abs(h - K) < Math.abs(p - K)
          ? h
          : p;
  let O = s * i;
  const M = b + O,
    z = d === void 0 ? M : d(M);
  z !== M && (O = z - b);
  const L = (K) => -O * Math.exp(-K / r),
    B = (K) => z + L(K),
    Z = (K) => {
      const I = L(K),
        lt = B(K);
      ((x.done = Math.abs(I) <= m), (x.value = x.done ? z : lt));
    };
  let j, P;
  const Q = (K) => {
    E(x.value) &&
      ((j = K),
      (P = xo({
        keyframes: [x.value, C(x.value)],
        velocity: E0(B, K, x.value),
        damping: u,
        stiffness: f,
        restDelta: m,
        restSpeed: g,
      })));
  };
  return (
    Q(0),
    {
      calculatedDuration: null,
      next: (K) => {
        let I = !1;
        return (
          !P && j === void 0 && ((I = !0), Z(K), Q(K)),
          j !== void 0 && K >= j ? P.next(K - j) : (!I && Z(K), x)
        );
      },
    }
  );
}
function rD(n, i, s) {
  const r = [],
    u = s || Zn.mix || x0,
    f = n.length - 1;
  for (let d = 0; d < f; d++) {
    let h = u(n[d], n[d + 1]);
    if (i) {
      const p = Array.isArray(i) ? i[d] || en : i;
      h = Cs(p, h);
    }
    r.push(h);
  }
  return r;
}
function oD(n, i, { clamp: s = !0, ease: r, mixer: u } = {}) {
  const f = n.length;
  if ((fd(f === i.length), f === 1)) return () => i[0];
  if (f === 2 && i[0] === i[1]) return () => i[1];
  const d = n[0] === n[1];
  n[0] > n[f - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const h = rD(i, r, u),
    p = h.length,
    m = (g) => {
      if (d && g < n[0]) return i[0];
      let b = 0;
      if (p > 1) for (; b < n.length - 2 && !(g < n[b + 1]); b++);
      const x = ys(n[b], n[b + 1], g);
      return h[b](x);
    };
  return s ? (g) => m(Kn(n[0], n[f - 1], g)) : m;
}
function uD(n, i) {
  const s = n[n.length - 1];
  for (let r = 1; r <= i; r++) {
    const u = ys(0, i, r);
    n.push(_t(s, 1, u));
  }
}
function cD(n) {
  const i = [0];
  return (uD(i, n.length - 1), i);
}
function fD(n, i) {
  return n.map((s) => s * i);
}
function dD(n, i) {
  return n.map(() => i || f0).splice(0, n.length - 1);
}
function us({
  duration: n = 300,
  keyframes: i,
  times: s,
  ease: r = "easeInOut",
}) {
  const u = EA(r) ? r.map($g) : $g(r),
    f = { done: !1, value: i[0] },
    d = fD(s && s.length === i.length ? s : cD(i), n),
    h = oD(d, i, { ease: Array.isArray(u) ? u : dD(i, u) });
  return {
    calculatedDuration: n,
    next: (p) => ((f.value = h(p)), (f.done = p >= n), f),
  };
}
const hD = (n) => n !== null;
function Td(n, { repeat: i, repeatType: s = "loop" }, r, u = 1) {
  const f = n.filter(hD),
    h = u < 0 || (i && s !== "loop" && i % 2 === 1) ? 0 : f.length - 1;
  return !h || r === void 0 ? f[h] : r;
}
const mD = { decay: wf, inertia: wf, tween: us, keyframes: us, spring: xo };
function A0(n) {
  typeof n.type == "string" && (n.type = mD[n.type]);
}
class Ed {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, s) {
    return this.finished.then(i, s);
  }
}
const pD = (n) => n / 100;
class Ad extends Ed {
  constructor(i) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: s } = this.options;
        (s && s.updatedAt !== Oe.now() && this.tick(Oe.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: i } = this;
    A0(i);
    const {
      type: s = us,
      repeat: r = 0,
      repeatDelay: u = 0,
      repeatType: f,
      velocity: d = 0,
    } = i;
    let { keyframes: h } = i;
    const p = s || us;
    p !== us &&
      typeof h[0] != "number" &&
      ((this.mixKeyframes = Cs(pD, x0(h[0], h[1]))), (h = [0, 100]));
    const m = p({ ...i, keyframes: h });
    (f === "mirror" &&
      (this.mirroredGenerator = p({
        ...i,
        keyframes: [...h].reverse(),
        velocity: -d,
      })),
      m.calculatedDuration === null && (m.calculatedDuration = xd(m)));
    const { calculatedDuration: g } = m;
    ((this.calculatedDuration = g),
      (this.resolvedDuration = g + u),
      (this.totalDuration = this.resolvedDuration * (r + 1) - u),
      (this.generator = m));
  }
  updateTime(i) {
    const s = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = s);
  }
  tick(i, s = !1) {
    const {
      generator: r,
      totalDuration: u,
      mixKeyframes: f,
      mirroredGenerator: d,
      resolvedDuration: h,
      calculatedDuration: p,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: m = 0,
      keyframes: g,
      repeat: b,
      repeatType: x,
      repeatDelay: E,
      type: C,
      onUpdate: O,
      finalKeyframe: M,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - u / this.speed, this.startTime)),
      s ? (this.currentTime = i) : this.updateTime(i));
    const z = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
      L = this.playbackSpeed >= 0 ? z < 0 : z > u;
    ((this.currentTime = Math.max(z, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = u));
    let B = this.currentTime,
      Z = r;
    if (b) {
      const K = Math.min(this.currentTime, u) / h;
      let I = Math.floor(K),
        lt = K % 1;
      (!lt && K >= 1 && (lt = 1),
        lt === 1 && I--,
        (I = Math.min(I, b + 1)),
        !!(I % 2) &&
          (x === "reverse"
            ? ((lt = 1 - lt), E && (lt -= E / h))
            : x === "mirror" && (Z = d)),
        (B = Kn(0, 1, lt) * h));
    }
    const j = L ? { done: !1, value: g[0] } : Z.next(B);
    f && (j.value = f(j.value));
    let { done: P } = j;
    !L &&
      p !== null &&
      (P =
        this.playbackSpeed >= 0
          ? this.currentTime >= u
          : this.currentTime <= 0);
    const Q =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      Q && C !== wf && (j.value = Td(g, this.options, M, this.speed)),
      O && O(j.value),
      Q && this.finish(),
      j
    );
  }
  then(i, s) {
    return this.finished.then(i, s);
  }
  get duration() {
    return tn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + tn(i);
  }
  get time() {
    return tn(this.currentTime);
  }
  set time(i) {
    ((i = Sn(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver?.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(Oe.now());
    const s = this.playbackSpeed !== i;
    ((this.playbackSpeed = i), s && (this.time = tn(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: i = WA, startTime: s } = this.options;
    (this.driver || (this.driver = i((u) => this.tick(u))),
      this.options.onPlay?.());
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = s ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(Oe.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return ((this.startTime = 0), this.tick(i, !0));
  }
  attachTimeline(i) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
    );
  }
}
function gD(n) {
  for (let i = 1; i < n.length; i++) n[i] ?? (n[i] = n[i - 1]);
}
const Fa = (n) => (n * 180) / Math.PI,
  Mf = (n) => {
    const i = Fa(Math.atan2(n[1], n[0]));
    return Cf(i);
  },
  yD = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Mf,
    rotateZ: Mf,
    skewX: (n) => Fa(Math.atan(n[1])),
    skewY: (n) => Fa(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  Cf = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  ay = Mf,
  iy = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  ly = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  vD = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: iy,
    scaleY: ly,
    scale: (n) => (iy(n) + ly(n)) / 2,
    rotateX: (n) => Cf(Fa(Math.atan2(n[6], n[5]))),
    rotateY: (n) => Cf(Fa(Math.atan2(-n[2], n[0]))),
    rotateZ: ay,
    rotate: ay,
    skewX: (n) => Fa(Math.atan(n[4])),
    skewY: (n) => Fa(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function Of(n) {
  return n.includes("scale") ? 1 : 0;
}
function Nf(n, i) {
  if (!n || n === "none") return Of(i);
  const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, u;
  if (s) ((r = vD), (u = s));
  else {
    const h = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = yD), (u = h));
  }
  if (!u) return Of(i);
  const f = r[i],
    d = u[1].split(",").map(SD);
  return typeof f == "function" ? f(d) : d[f];
}
const bD = (n, i) => {
  const { transform: s = "none" } = getComputedStyle(n);
  return Nf(s, i);
};
function SD(n) {
  return parseFloat(n.trim());
}
const nl = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  al = new Set(nl),
  sy = (n) => n === el || n === rt,
  xD = new Set(["x", "y", "z"]),
  TD = nl.filter((n) => !xD.has(n));
function ED(n) {
  const i = [];
  return (
    TD.forEach((s) => {
      const r = n.getValue(s);
      r !== void 0 &&
        (i.push([s, r.get()]), r.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const Ja = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: s = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: s = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: (n, { transform: i }) => Nf(i, "x"),
  y: (n, { transform: i }) => Nf(i, "y"),
};
Ja.translateX = Ja.x;
Ja.translateY = Ja.y;
const $a = new Set();
let zf = !1,
  Vf = !1,
  Lf = !1;
function D0() {
  if (Vf) {
    const n = Array.from($a).filter((r) => r.needsMeasurement),
      i = new Set(n.map((r) => r.element)),
      s = new Map();
    (i.forEach((r) => {
      const u = ED(r);
      u.length && (s.set(r, u), r.render());
    }),
      n.forEach((r) => r.measureInitialState()),
      i.forEach((r) => {
        r.render();
        const u = s.get(r);
        u &&
          u.forEach(([f, d]) => {
            r.getValue(f)?.set(d);
          });
      }),
      n.forEach((r) => r.measureEndState()),
      n.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Vf = !1), (zf = !1), $a.forEach((n) => n.complete(Lf)), $a.clear());
}
function R0() {
  $a.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Vf = !0));
  });
}
function AD() {
  ((Lf = !0), R0(), D0(), (Lf = !1));
}
class Dd {
  constructor(i, s, r, u, f, d = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = s),
      (this.name = r),
      (this.motionValue = u),
      (this.element = f),
      (this.isAsync = d));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? ($a.add(this),
          zf || ((zf = !0), Ut.read(R0), Ut.resolveKeyframes(D0)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: s,
      element: r,
      motionValue: u,
    } = this;
    if (i[0] === null) {
      const f = u?.get(),
        d = i[i.length - 1];
      if (f !== void 0) i[0] = f;
      else if (r && s) {
        const h = r.readValue(s, d);
        h != null && (i[0] = h);
      }
      (i[0] === void 0 && (i[0] = d), u && f === void 0 && u.set(i[0]));
    }
    gD(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      $a.delete(this));
  }
  cancel() {
    this.state === "scheduled" && ($a.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const DD = (n) => n.startsWith("--");
function RD(n, i, s) {
  DD(i) ? n.style.setProperty(i, s) : (n.style[i] = s);
}
const wD = dd(() => window.ScrollTimeline !== void 0),
  MD = {};
function CD(n, i) {
  const s = dd(n);
  return () => MD[i] ?? s();
}
const w0 = CD(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  is = ([n, i, s, r]) => `cubic-bezier(${n}, ${i}, ${s}, ${r})`,
  ry = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: is([0, 0.65, 0.55, 1]),
    circOut: is([0.55, 0, 1, 0.45]),
    backIn: is([0.31, 0.01, 0.66, -0.59]),
    backOut: is([0.33, 1.53, 0.69, 0.99]),
  };
function M0(n, i) {
  if (n)
    return typeof n == "function"
      ? w0()
        ? T0(n, i)
        : "ease-out"
      : d0(n)
        ? is(n)
        : Array.isArray(n)
          ? n.map((s) => M0(s, i) || ry.easeOut)
          : ry[n];
}
function OD(
  n,
  i,
  s,
  {
    delay: r = 0,
    duration: u = 300,
    repeat: f = 0,
    repeatType: d = "loop",
    ease: h = "easeOut",
    times: p,
  } = {},
  m = void 0,
) {
  const g = { [i]: s };
  p && (g.offset = p);
  const b = M0(h, u);
  Array.isArray(b) && (g.easing = b);
  const x = {
    delay: r,
    duration: u,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: f + 1,
    direction: d === "reverse" ? "alternate" : "normal",
  };
  return (m && (x.pseudoElement = m), n.animate(g, x));
}
function C0(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function ND({ type: n, ...i }) {
  return C0(n) && w0()
    ? n.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class zD extends Ed {
  constructor(i) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !i))
      return;
    const {
      element: s,
      name: r,
      keyframes: u,
      pseudoElement: f,
      allowFlatten: d = !1,
      finalKeyframe: h,
      onComplete: p,
    } = i;
    ((this.isPseudoElement = !!f),
      (this.allowFlatten = d),
      (this.options = i),
      fd(typeof i.type != "string"));
    const m = ND(i);
    ((this.animation = OD(s, r, u, m, f)),
      m.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !f)) {
          const g = Td(u, this.options, h, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(g) : RD(s, r, g),
            this.animation.cancel());
        }
        (p?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return tn(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + tn(i);
  }
  get time() {
    return tn(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    ((this.finishedTime = null), (this.animation.currentTime = Sn(i)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    (i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(i) {
    this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, observe: s }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      i && wD() ? ((this.animation.timeline = i), en) : s(this)
    );
  }
}
const O0 = { anticipate: o0, backInOut: r0, circInOut: c0 };
function VD(n) {
  return n in O0;
}
function LD(n) {
  typeof n.ease == "string" && VD(n.ease) && (n.ease = O0[n.ease]);
}
const oy = 10;
class UD extends zD {
  constructor(i) {
    (LD(i),
      A0(i),
      super(i),
      i.startTime && (this.startTime = i.startTime),
      (this.options = i));
  }
  updateMotionValue(i) {
    const {
      motionValue: s,
      onUpdate: r,
      onComplete: u,
      element: f,
      ...d
    } = this.options;
    if (!s) return;
    if (i !== void 0) {
      s.set(i);
      return;
    }
    const h = new Ad({ ...d, autoplay: !1 }),
      p = Sn(this.finishedTime ?? this.time);
    (s.setWithVelocity(h.sample(p - oy).value, h.sample(p).value, oy),
      h.stop());
  }
}
const uy = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" &&
          (Ea.test(n) || n === "0") &&
          !n.startsWith("url("))
      );
function BD(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0;
}
function _D(n, i, s, r) {
  const u = n[0];
  if (u === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const f = n[n.length - 1],
    d = uy(u, i),
    h = uy(f, i);
  return !d || !h ? !1 : BD(n) || ((s === "spring" || C0(s)) && r);
}
function Uf(n) {
  ((n.duration = 0), (n.type = "keyframes"));
}
const jD = new Set(["opacity", "clipPath", "filter", "transform"]),
  HD = dd(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function YD(n) {
  const {
    motionValue: i,
    name: s,
    repeatDelay: r,
    repeatType: u,
    damping: f,
    type: d,
  } = n;
  if (!(i?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: p, transformTemplate: m } = i.owner.getProps();
  return (
    HD() &&
    s &&
    jD.has(s) &&
    (s !== "transform" || !m) &&
    !p &&
    !r &&
    u !== "mirror" &&
    f !== 0 &&
    d !== "inertia"
  );
}
const qD = 40;
class kD extends Ed {
  constructor({
    autoplay: i = !0,
    delay: s = 0,
    type: r = "keyframes",
    repeat: u = 0,
    repeatDelay: f = 0,
    repeatType: d = "loop",
    keyframes: h,
    name: p,
    motionValue: m,
    element: g,
    ...b
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = Oe.now()));
    const x = {
        autoplay: i,
        delay: s,
        type: r,
        repeat: u,
        repeatDelay: f,
        repeatType: d,
        name: p,
        motionValue: m,
        element: g,
        ...b,
      },
      E = g?.KeyframeResolver || Dd;
    ((this.keyframeResolver = new E(
      h,
      (C, O, M) => this.onKeyframesResolved(C, O, x, !M),
      p,
      m,
      g,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(i, s, r, u) {
    this.keyframeResolver = void 0;
    const {
      name: f,
      type: d,
      velocity: h,
      delay: p,
      isHandoff: m,
      onUpdate: g,
    } = r;
    ((this.resolvedAt = Oe.now()),
      _D(i, f, d, h) ||
        ((Zn.instantAnimations || !p) && g?.(Td(i, r, s)),
        (i[0] = i[i.length - 1]),
        Uf(r),
        (r.repeat = 0)));
    const x = {
        startTime: u
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > qD
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...r,
        keyframes: i,
      },
      E =
        !m && YD(x)
          ? new UD({ ...x, element: x.motionValue.owner.current })
          : new Ad(x);
    (E.finished.then(() => this.notifyFinished()).catch(en),
      this.pendingTimeline &&
        ((this.stopTimeline = E.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = E));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, s) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), AD()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
const GD = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function XD(n) {
  const i = GD.exec(n);
  if (!i) return [,];
  const [, s, r, u] = i;
  return [`--${s ?? r}`, u];
}
function N0(n, i, s = 1) {
  const [r, u] = XD(n);
  if (!r) return;
  const f = window.getComputedStyle(i).getPropertyValue(r);
  if (f) {
    const d = f.trim();
    return Iv(d) ? parseFloat(d) : d;
  }
  return yd(u) ? N0(u, i, s + 1) : u;
}
function Rd(n, i) {
  return n?.[i] ?? n?.default ?? n;
}
const z0 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...nl,
  ]),
  KD = { test: (n) => n === "auto", parse: (n) => n },
  V0 = (n) => (i) => i.test(n),
  L0 = [el, rt, xn, Sa, BA, UA, KD],
  cy = (n) => L0.find(V0(n));
function ZD(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
      ? n === "none" || n === "0" || e0(n)
      : !0;
}
const QD = new Set(["brightness", "contrast", "saturate", "opacity"]);
function PD(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [r] = s.match(vd) || [];
  if (!r) return n;
  const u = s.replace(r, "");
  let f = QD.has(i) ? 1 : 0;
  return (r !== s && (f *= 100), i + "(" + f + u + ")");
}
const FD = /\b([a-z-]*)\(.*?\)/gu,
  Bf = {
    ...Ea,
    getAnimatableNone: (n) => {
      const i = n.match(FD);
      return i ? i.map(PD).join(" ") : n;
    },
  },
  fy = { ...el, transform: Math.round },
  JD = {
    rotate: Sa,
    rotateX: Sa,
    rotateY: Sa,
    rotateZ: Sa,
    scale: to,
    scaleX: to,
    scaleY: to,
    scaleZ: to,
    skew: Sa,
    skewX: Sa,
    skewY: Sa,
    distance: rt,
    translateX: rt,
    translateY: rt,
    translateZ: rt,
    x: rt,
    y: rt,
    z: rt,
    perspective: rt,
    transformPerspective: rt,
    opacity: vs,
    originX: Wg,
    originY: Wg,
    originZ: rt,
  },
  wd = {
    borderWidth: rt,
    borderTopWidth: rt,
    borderRightWidth: rt,
    borderBottomWidth: rt,
    borderLeftWidth: rt,
    borderRadius: rt,
    radius: rt,
    borderTopLeftRadius: rt,
    borderTopRightRadius: rt,
    borderBottomRightRadius: rt,
    borderBottomLeftRadius: rt,
    width: rt,
    maxWidth: rt,
    height: rt,
    maxHeight: rt,
    top: rt,
    right: rt,
    bottom: rt,
    left: rt,
    padding: rt,
    paddingTop: rt,
    paddingRight: rt,
    paddingBottom: rt,
    paddingLeft: rt,
    margin: rt,
    marginTop: rt,
    marginRight: rt,
    marginBottom: rt,
    marginLeft: rt,
    backgroundPositionX: rt,
    backgroundPositionY: rt,
    ...JD,
    zIndex: fy,
    fillOpacity: vs,
    strokeOpacity: vs,
    numOctaves: fy,
  },
  $D = {
    ...wd,
    color: $t,
    backgroundColor: $t,
    outlineColor: $t,
    fill: $t,
    stroke: $t,
    borderColor: $t,
    borderTopColor: $t,
    borderRightColor: $t,
    borderBottomColor: $t,
    borderLeftColor: $t,
    filter: Bf,
    WebkitFilter: Bf,
  },
  U0 = (n) => $D[n];
function B0(n, i) {
  let s = U0(n);
  return (
    s !== Bf && (s = Ea),
    s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
  );
}
const WD = new Set(["auto", "none", "0"]);
function ID(n, i, s) {
  let r = 0,
    u;
  for (; r < n.length && !u; ) {
    const f = n[r];
    (typeof f == "string" && !WD.has(f) && bs(f).values.length && (u = n[r]),
      r++);
  }
  if (u && s) for (const f of i) n[f] = B0(s, u);
}
class tR extends Dd {
  constructor(i, s, r, u, f) {
    super(i, s, r, u, f, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: r } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let p = 0; p < i.length; p++) {
      let m = i[p];
      if (typeof m == "string" && ((m = m.trim()), yd(m))) {
        const g = N0(m, s.current);
        (g !== void 0 && (i[p] = g),
          p === i.length - 1 && (this.finalKeyframe = m));
      }
    }
    if ((this.resolveNoneKeyframes(), !z0.has(r) || i.length !== 2)) return;
    const [u, f] = i,
      d = cy(u),
      h = cy(f);
    if (d !== h)
      if (sy(d) && sy(h))
        for (let p = 0; p < i.length; p++) {
          const m = i[p];
          typeof m == "string" && (i[p] = parseFloat(m));
        }
      else Ja[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      r = [];
    for (let u = 0; u < i.length; u++) (i[u] === null || ZD(i[u])) && r.push(u);
    r.length && ID(i, r, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: r } = this;
    if (!i || !i.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ja[r](
        i.measureViewportBox(),
        window.getComputedStyle(i.current),
      )),
      (s[0] = this.measuredOrigin));
    const u = s[s.length - 1];
    u !== void 0 && i.getValue(r, u).jump(u, !1);
  }
  measureEndState() {
    const { element: i, name: s, unresolvedKeyframes: r } = this;
    if (!i || !i.current) return;
    const u = i.getValue(s);
    u && u.jump(this.measuredOrigin, !1);
    const f = r.length - 1,
      d = r[f];
    ((r[f] = Ja[s](i.measureViewportBox(), window.getComputedStyle(i.current))),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([h, p]) => {
          i.getValue(h).set(p);
        }),
      this.resolveNoneKeyframes());
  }
}
function eR(n, i, s) {
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let r = document;
    const u = s?.[n] ?? r.querySelectorAll(n);
    return u ? Array.from(u) : [];
  }
  return Array.from(n);
}
const _0 = (n, i) => (i && typeof n == "number" ? i.transform(n) : n);
function j0(n) {
  return t0(n) && "offsetHeight" in n;
}
const dy = 30,
  nR = (n) => !isNaN(parseFloat(n));
class aR {
  constructor(i, s = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        const u = Oe.now();
        if (
          (this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const f of this.dependents) f.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = s.owner));
  }
  setCurrent(i) {
    ((this.current = i),
      (this.updatedAt = Oe.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = nR(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new hd());
    const r = this.events[i].add(s);
    return i === "change"
      ? () => {
          (r(),
            Ut.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, s) {
    ((this.passiveEffect = i), (this.stopPassiveEffect = s));
  }
  set(i) {
    this.passiveEffect
      ? this.passiveEffect(i, this.updateAndNotify)
      : this.updateAndNotify(i);
  }
  setWithVelocity(i, s, r) {
    (this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(i, s = !0) {
    (this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(i));
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = Oe.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > dy
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, dy);
    return n0(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((s) => {
        ((this.hasAnimated = !0),
          (this.animation = i(s)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Pi(n, i) {
  return new aR(n, i);
}
const { schedule: Md } = h0(queueMicrotask, !1),
  un = { x: !1, y: !1 };
function H0() {
  return un.x || un.y;
}
function iR(n) {
  return n === "x" || n === "y"
    ? un[n]
      ? null
      : ((un[n] = !0),
        () => {
          un[n] = !1;
        })
    : un.x || un.y
      ? null
      : ((un.x = un.y = !0),
        () => {
          un.x = un.y = !1;
        });
}
function Y0(n, i) {
  const s = eR(n),
    r = new AbortController(),
    u = { passive: !0, ...i, signal: r.signal };
  return [s, u, () => r.abort()];
}
function hy(n) {
  return !(n.pointerType === "touch" || H0());
}
function lR(n, i, s = {}) {
  const [r, u, f] = Y0(n, s),
    d = (h) => {
      if (!hy(h)) return;
      const { target: p } = h,
        m = i(p, h);
      if (typeof m != "function" || !p) return;
      const g = (b) => {
        hy(b) && (m(b), p.removeEventListener("pointerleave", g));
      };
      p.addEventListener("pointerleave", g, u);
    };
  return (
    r.forEach((h) => {
      h.addEventListener("pointerenter", d, u);
    }),
    f
  );
}
const q0 = (n, i) => (i ? (n === i ? !0 : q0(n, i.parentElement)) : !1),
  Cd = (n) =>
    n.pointerType === "mouse"
      ? typeof n.button != "number" || n.button <= 0
      : n.isPrimary !== !1,
  sR = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function rR(n) {
  return sR.has(n.tagName) || n.tabIndex !== -1;
}
const uo = new WeakSet();
function my(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function lf(n, i) {
  n.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }),
  );
}
const oR = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const r = my(() => {
    if (uo.has(s)) return;
    lf(s, "down");
    const u = my(() => {
        lf(s, "up");
      }),
      f = () => lf(s, "cancel");
    (s.addEventListener("keyup", u, i), s.addEventListener("blur", f, i));
  });
  (s.addEventListener("keydown", r, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", r), i));
};
function py(n) {
  return Cd(n) && !H0();
}
function uR(n, i, s = {}) {
  const [r, u, f] = Y0(n, s),
    d = (h) => {
      const p = h.currentTarget;
      if (!py(h)) return;
      uo.add(p);
      const m = i(p, h),
        g = (E, C) => {
          (window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", x),
            uo.has(p) && uo.delete(p),
            py(E) && typeof m == "function" && m(E, { success: C }));
        },
        b = (E) => {
          g(
            E,
            p === window ||
              p === document ||
              s.useGlobalTarget ||
              q0(p, E.target),
          );
        },
        x = (E) => {
          g(E, !1);
        };
      (window.addEventListener("pointerup", b, u),
        window.addEventListener("pointercancel", x, u));
    };
  return (
    r.forEach((h) => {
      ((s.useGlobalTarget ? window : h).addEventListener("pointerdown", d, u),
        j0(h) &&
          (h.addEventListener("focus", (m) => oR(m, u)),
          !rR(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0)));
    }),
    f
  );
}
function k0(n) {
  return t0(n) && "ownerSVGElement" in n;
}
function cR(n) {
  return k0(n) && n.tagName === "svg";
}
const be = (n) => !!(n && n.getVelocity),
  fR = [...L0, $t, Ea],
  dR = (n) => fR.find(V0(n)),
  Od = S.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
function gy(n, i) {
  if (typeof n == "function") return n(i);
  n != null && (n.current = i);
}
function hR(...n) {
  return (i) => {
    let s = !1;
    const r = n.map((u) => {
      const f = gy(u, i);
      return (!s && typeof f == "function" && (s = !0), f);
    });
    if (s)
      return () => {
        for (let u = 0; u < r.length; u++) {
          const f = r[u];
          typeof f == "function" ? f() : gy(n[u], null);
        }
      };
  };
}
function mR(...n) {
  return S.useCallback(hR(...n), n);
}
class pR extends S.Component {
  getSnapshotBeforeUpdate(i) {
    const s = this.props.childRef.current;
    if (s && i.isPresent && !this.props.isPresent) {
      const r = s.offsetParent,
        u = (j0(r) && r.offsetWidth) || 0,
        f = this.props.sizeRef.current;
      ((f.height = s.offsetHeight || 0),
        (f.width = s.offsetWidth || 0),
        (f.top = s.offsetTop),
        (f.left = s.offsetLeft),
        (f.right = u - f.width - f.left));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function gR({ children: n, isPresent: i, anchorX: s, root: r }) {
  const u = S.useId(),
    f = S.useRef(null),
    d = S.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: h } = S.useContext(Od),
    p = mR(f, n?.ref);
  return (
    S.useInsertionEffect(() => {
      const { width: m, height: g, top: b, left: x, right: E } = d.current;
      if (i || !f.current || !m || !g) return;
      const C = s === "left" ? `left: ${x}` : `right: ${E}`;
      f.current.dataset.motionPopId = u;
      const O = document.createElement("style");
      h && (O.nonce = h);
      const M = r ?? document.head;
      return (
        M.appendChild(O),
        O.sheet &&
          O.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${g}px !important;
            ${C}px !important;
            top: ${b}px !important;
          }
        `),
        () => {
          M.contains(O) && M.removeChild(O);
        }
      );
    }, [i]),
    X.jsx(pR, {
      isPresent: i,
      childRef: f,
      sizeRef: d,
      children: S.cloneElement(n, { ref: p }),
    })
  );
}
const yR = ({
  children: n,
  initial: i,
  isPresent: s,
  onExitComplete: r,
  custom: u,
  presenceAffectsLayout: f,
  mode: d,
  anchorX: h,
  root: p,
}) => {
  const m = rd(vR),
    g = S.useId();
  let b = !0,
    x = S.useMemo(
      () => (
        (b = !1),
        {
          id: g,
          initial: i,
          isPresent: s,
          custom: u,
          onExitComplete: (E) => {
            m.set(E, !0);
            for (const C of m.values()) if (!C) return;
            r && r();
          },
          register: (E) => (m.set(E, !1), () => m.delete(E)),
        }
      ),
      [s, m, r],
    );
  return (
    f && b && (x = { ...x }),
    S.useMemo(() => {
      m.forEach((E, C) => m.set(C, !1));
    }, [s]),
    S.useEffect(() => {
      !s && !m.size && r && r();
    }, [s]),
    d === "popLayout" &&
      (n = X.jsx(gR, { isPresent: s, anchorX: h, root: p, children: n })),
    X.jsx(Co.Provider, { value: x, children: n })
  );
};
function vR() {
  return new Map();
}
function G0(n = !0) {
  const i = S.useContext(Co);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: r, register: u } = i,
    f = S.useId();
  S.useEffect(() => {
    if (n) return u(f);
  }, [n]);
  const d = S.useCallback(() => n && r && r(f), [f, r, n]);
  return !s && r ? [!1, d] : [!0];
}
const eo = (n) => n.key || "";
function yy(n) {
  const i = [];
  return (
    S.Children.forEach(n, (s) => {
      S.isValidElement(s) && i.push(s);
    }),
    i
  );
}
const bR = ({
    children: n,
    custom: i,
    initial: s = !0,
    onExitComplete: r,
    presenceAffectsLayout: u = !0,
    mode: f = "sync",
    propagate: d = !1,
    anchorX: h = "left",
    root: p,
  }) => {
    const [m, g] = G0(d),
      b = S.useMemo(() => yy(n), [n]),
      x = d && !m ? [] : b.map(eo),
      E = S.useRef(!0),
      C = S.useRef(b),
      O = rd(() => new Map()),
      [M, z] = S.useState(b),
      [L, B] = S.useState(b);
    Wv(() => {
      ((E.current = !1), (C.current = b));
      for (let P = 0; P < L.length; P++) {
        const Q = eo(L[P]);
        x.includes(Q) ? O.delete(Q) : O.get(Q) !== !0 && O.set(Q, !1);
      }
    }, [L, x.length, x.join("-")]);
    const Z = [];
    if (b !== M) {
      let P = [...b];
      for (let Q = 0; Q < L.length; Q++) {
        const K = L[Q],
          I = eo(K);
        x.includes(I) || (P.splice(Q, 0, K), Z.push(K));
      }
      return (f === "wait" && Z.length && (P = Z), B(yy(P)), z(b), null);
    }
    const { forceRender: j } = S.useContext(sd);
    return X.jsx(X.Fragment, {
      children: L.map((P) => {
        const Q = eo(P),
          K = d && !m ? !1 : b === L || x.includes(Q),
          I = () => {
            if (O.has(Q)) O.set(Q, !0);
            else return;
            let lt = !0;
            (O.forEach((ot) => {
              ot || (lt = !1);
            }),
              lt && (j?.(), B(C.current), d && g?.(), r && r()));
          };
        return X.jsx(
          yR,
          {
            isPresent: K,
            initial: !E.current || s ? void 0 : !1,
            custom: i,
            presenceAffectsLayout: u,
            mode: f,
            root: p,
            onExitComplete: K ? void 0 : I,
            anchorX: h,
            children: P,
          },
          Q,
        );
      }),
    });
  },
  X0 = S.createContext({ strict: !1 }),
  vy = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Fi = {};
for (const n in vy) Fi[n] = { isEnabled: (i) => vy[n].some((s) => !!i[s]) };
function SR(n) {
  for (const i in n) Fi[i] = { ...Fi[i], ...n[i] };
}
const xR = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function To(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    xR.has(n)
  );
}
let K0 = (n) => !To(n);
function TR(n) {
  typeof n == "function" && (K0 = (i) => (i.startsWith("on") ? !To(i) : n(i)));
}
try {
  TR(require("@emotion/is-prop-valid").default);
} catch {}
function ER(n, i, s) {
  const r = {};
  for (const u in n)
    (u === "values" && typeof n.values == "object") ||
      ((K0(u) ||
        (s === !0 && To(u)) ||
        (!i && !To(u)) ||
        (n.draggable && u.startsWith("onDrag"))) &&
        (r[u] = n[u]));
  return r;
}
const Oo = S.createContext({});
function No(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function Ss(n) {
  return typeof n == "string" || Array.isArray(n);
}
const Nd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  zd = ["initial", ...Nd];
function zo(n) {
  return No(n.animate) || zd.some((i) => Ss(n[i]));
}
function Z0(n) {
  return !!(zo(n) || n.variants);
}
function AR(n, i) {
  if (zo(n)) {
    const { initial: s, animate: r } = n;
    return {
      initial: s === !1 || Ss(s) ? s : void 0,
      animate: Ss(r) ? r : void 0,
    };
  }
  return n.inherit !== !1 ? i : {};
}
function DR(n) {
  const { initial: i, animate: s } = AR(n, S.useContext(Oo));
  return S.useMemo(() => ({ initial: i, animate: s }), [by(i), by(s)]);
}
function by(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const xs = {};
function RR(n) {
  for (const i in n) ((xs[i] = n[i]), gd(i) && (xs[i].isCSSVariable = !0));
}
function Q0(n, { layout: i, layoutId: s }) {
  return (
    al.has(n) ||
    n.startsWith("origin") ||
    ((i || s !== void 0) && (!!xs[n] || n === "opacity"))
  );
}
const wR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  MR = nl.length;
function CR(n, i, s) {
  let r = "",
    u = !0;
  for (let f = 0; f < MR; f++) {
    const d = nl[f],
      h = n[d];
    if (h === void 0) continue;
    let p = !0;
    if (
      (typeof h == "number"
        ? (p = h === (d.startsWith("scale") ? 1 : 0))
        : (p = parseFloat(h) === 0),
      !p || s)
    ) {
      const m = _0(h, wd[d]);
      if (!p) {
        u = !1;
        const g = wR[d] || d;
        r += `${g}(${m}) `;
      }
      s && (i[d] = m);
    }
  }
  return ((r = r.trim()), s ? (r = s(i, u ? "" : r)) : u && (r = "none"), r);
}
function Vd(n, i, s) {
  const { style: r, vars: u, transformOrigin: f } = n;
  let d = !1,
    h = !1;
  for (const p in i) {
    const m = i[p];
    if (al.has(p)) {
      d = !0;
      continue;
    } else if (gd(p)) {
      u[p] = m;
      continue;
    } else {
      const g = _0(m, wd[p]);
      p.startsWith("origin") ? ((h = !0), (f[p] = g)) : (r[p] = g);
    }
  }
  if (
    (i.transform ||
      (d || s
        ? (r.transform = CR(i, n.transform, s))
        : r.transform && (r.transform = "none")),
    h)
  ) {
    const { originX: p = "50%", originY: m = "50%", originZ: g = 0 } = f;
    r.transformOrigin = `${p} ${m} ${g}`;
  }
}
const Ld = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function P0(n, i, s) {
  for (const r in i) !be(i[r]) && !Q0(r, s) && (n[r] = i[r]);
}
function OR({ transformTemplate: n }, i) {
  return S.useMemo(() => {
    const s = Ld();
    return (Vd(s, i, n), Object.assign({}, s.vars, s.style));
  }, [i]);
}
function NR(n, i) {
  const s = n.style || {},
    r = {};
  return (P0(r, s, n), Object.assign(r, OR(n, i)), r);
}
function zR(n, i) {
  const s = {},
    r = NR(n, i);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((s.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (s.tabIndex = 0),
    (s.style = r),
    s
  );
}
const VR = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  LR = { offset: "strokeDashoffset", array: "strokeDasharray" };
function UR(n, i, s = 1, r = 0, u = !0) {
  n.pathLength = 1;
  const f = u ? VR : LR;
  n[f.offset] = rt.transform(-r);
  const d = rt.transform(i),
    h = rt.transform(s);
  n[f.array] = `${d} ${h}`;
}
function F0(
  n,
  {
    attrX: i,
    attrY: s,
    attrScale: r,
    pathLength: u,
    pathSpacing: f = 1,
    pathOffset: d = 0,
    ...h
  },
  p,
  m,
  g,
) {
  if ((Vd(n, h, m), p)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: b, style: x } = n;
  (b.transform && ((x.transform = b.transform), delete b.transform),
    (x.transform || b.transformOrigin) &&
      ((x.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    x.transform &&
      ((x.transformBox = g?.transformBox ?? "fill-box"), delete b.transformBox),
    i !== void 0 && (b.x = i),
    s !== void 0 && (b.y = s),
    r !== void 0 && (b.scale = r),
    u !== void 0 && UR(b, u, f, d, !1));
}
const J0 = () => ({ ...Ld(), attrs: {} }),
  $0 = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function BR(n, i, s, r) {
  const u = S.useMemo(() => {
    const f = J0();
    return (
      F0(f, i, $0(r), n.transformTemplate, n.style),
      { ...f.attrs, style: { ...f.style } }
    );
  }, [i]);
  if (n.style) {
    const f = {};
    (P0(f, n.style, n), (u.style = { ...f, ...u.style }));
  }
  return u;
}
const _R = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ud(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(_R.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function jR(n, i, s, { latestValues: r }, u, f = !1) {
  const h = (Ud(n) ? BR : zR)(i, r, u, n),
    p = ER(i, typeof n == "string", f),
    m = n !== S.Fragment ? { ...p, ...h, ref: s } : {},
    { children: g } = i,
    b = S.useMemo(() => (be(g) ? g.get() : g), [g]);
  return S.createElement(n, { ...m, children: b });
}
function Sy(n) {
  const i = [{}, {}];
  return (
    n?.values.forEach((s, r) => {
      ((i[0][r] = s.get()), (i[1][r] = s.getVelocity()));
    }),
    i
  );
}
function Bd(n, i, s, r) {
  if (typeof i == "function") {
    const [u, f] = Sy(r);
    i = i(s !== void 0 ? s : n.custom, u, f);
  }
  if (
    (typeof i == "string" && (i = n.variants && n.variants[i]),
    typeof i == "function")
  ) {
    const [u, f] = Sy(r);
    i = i(s !== void 0 ? s : n.custom, u, f);
  }
  return i;
}
function co(n) {
  return be(n) ? n.get() : n;
}
function HR({ scrapeMotionValuesFromProps: n, createRenderState: i }, s, r, u) {
  return { latestValues: YR(s, r, u, n), renderState: i() };
}
function YR(n, i, s, r) {
  const u = {},
    f = r(n, {});
  for (const x in f) u[x] = co(f[x]);
  let { initial: d, animate: h } = n;
  const p = zo(n),
    m = Z0(n);
  i &&
    m &&
    !p &&
    n.inherit !== !1 &&
    (d === void 0 && (d = i.initial), h === void 0 && (h = i.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || d === !1;
  const b = g ? h : d;
  if (b && typeof b != "boolean" && !No(b)) {
    const x = Array.isArray(b) ? b : [b];
    for (let E = 0; E < x.length; E++) {
      const C = Bd(n, x[E]);
      if (C) {
        const { transitionEnd: O, transition: M, ...z } = C;
        for (const L in z) {
          let B = z[L];
          if (Array.isArray(B)) {
            const Z = g ? B.length - 1 : 0;
            B = B[Z];
          }
          B !== null && (u[L] = B);
        }
        for (const L in O) u[L] = O[L];
      }
    }
  }
  return u;
}
const W0 = (n) => (i, s) => {
  const r = S.useContext(Oo),
    u = S.useContext(Co),
    f = () => HR(n, i, r, u);
  return s ? f() : rd(f);
};
function _d(n, i, s) {
  const { style: r } = n,
    u = {};
  for (const f in r)
    (be(r[f]) ||
      (i.style && be(i.style[f])) ||
      Q0(f, n) ||
      s?.getValue(f)?.liveStyle !== void 0) &&
      (u[f] = r[f]);
  return u;
}
const qR = W0({ scrapeMotionValuesFromProps: _d, createRenderState: Ld });
function I0(n, i, s) {
  const r = _d(n, i, s);
  for (const u in n)
    if (be(n[u]) || be(i[u])) {
      const f =
        nl.indexOf(u) !== -1
          ? "attr" + u.charAt(0).toUpperCase() + u.substring(1)
          : u;
      r[f] = n[u];
    }
  return r;
}
const kR = W0({ scrapeMotionValuesFromProps: I0, createRenderState: J0 }),
  GR = Symbol.for("motionComponentSymbol");
function ki(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function XR(n, i, s) {
  return S.useCallback(
    (r) => {
      (r && n.onMount && n.onMount(r),
        i && (r ? i.mount(r) : i.unmount()),
        s && (typeof s == "function" ? s(r) : ki(s) && (s.current = r)));
    },
    [i],
  );
}
const jd = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  KR = "framerAppearId",
  tb = "data-" + jd(KR),
  eb = S.createContext({});
function ZR(n, i, s, r, u) {
  const { visualElement: f } = S.useContext(Oo),
    d = S.useContext(X0),
    h = S.useContext(Co),
    p = S.useContext(Od).reducedMotion,
    m = S.useRef(null);
  ((r = r || d.renderer),
    !m.current &&
      r &&
      (m.current = r(n, {
        visualState: i,
        parent: f,
        props: s,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: p,
      })));
  const g = m.current,
    b = S.useContext(eb);
  g &&
    !g.projection &&
    u &&
    (g.type === "html" || g.type === "svg") &&
    QR(m.current, s, u, b);
  const x = S.useRef(!1);
  S.useInsertionEffect(() => {
    g && x.current && g.update(s, h);
  });
  const E = s[tb],
    C = S.useRef(
      !!E &&
        !window.MotionHandoffIsComplete?.(E) &&
        window.MotionHasOptimisedAnimation?.(E),
    );
  return (
    Wv(() => {
      g &&
        ((x.current = !0),
        (window.MotionIsMounted = !0),
        g.updateFeatures(),
        g.scheduleRenderMicrotask(),
        C.current && g.animationState && g.animationState.animateChanges());
    }),
    S.useEffect(() => {
      g &&
        (!C.current && g.animationState && g.animationState.animateChanges(),
        C.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(E);
          }),
          (C.current = !1)),
        (g.enteringChildren = void 0));
    }),
    g
  );
}
function QR(n, i, s, r) {
  const {
    layoutId: u,
    layout: f,
    drag: d,
    dragConstraints: h,
    layoutScroll: p,
    layoutRoot: m,
    layoutCrossfade: g,
  } = i;
  ((n.projection = new s(
    n.latestValues,
    i["data-framer-portal-id"] ? void 0 : nb(n.parent),
  )),
    n.projection.setOptions({
      layoutId: u,
      layout: f,
      alwaysMeasureLayout: !!d || (h && ki(h)),
      visualElement: n,
      animationType: typeof f == "string" ? f : "both",
      initialPromotionConfig: r,
      crossfade: g,
      layoutScroll: p,
      layoutRoot: m,
    }));
}
function nb(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : nb(n.parent);
}
function sf(n, { forwardMotionProps: i = !1 } = {}, s, r) {
  s && SR(s);
  const u = Ud(n) ? kR : qR;
  function f(h, p) {
    let m;
    const g = { ...S.useContext(Od), ...h, layoutId: PR(h) },
      { isStatic: b } = g,
      x = DR(h),
      E = u(h, b);
    if (!b && od) {
      FR();
      const C = JR(g);
      ((m = C.MeasureLayout),
        (x.visualElement = ZR(n, E, g, r, C.ProjectionNode)));
    }
    return X.jsxs(Oo.Provider, {
      value: x,
      children: [
        m && x.visualElement
          ? X.jsx(m, { visualElement: x.visualElement, ...g })
          : null,
        jR(n, h, XR(E, x.visualElement, p), E, b, i),
      ],
    });
  }
  f.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const d = S.forwardRef(f);
  return ((d[GR] = n), d);
}
function PR({ layoutId: n }) {
  const i = S.useContext(sd).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function FR(n, i) {
  S.useContext(X0).strict;
}
function JR(n) {
  const { drag: i, layout: s } = Fi;
  if (!i && !s) return {};
  const r = { ...i, ...s };
  return {
    MeasureLayout:
      i?.isEnabled(n) || s?.isEnabled(n) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function $R(n, i) {
  if (typeof Proxy > "u") return sf;
  const s = new Map(),
    r = (f, d) => sf(f, d, n, i),
    u = (f, d) => r(f, d);
  return new Proxy(u, {
    get: (f, d) =>
      d === "create"
        ? r
        : (s.has(d) || s.set(d, sf(d, void 0, n, i)), s.get(d)),
  });
}
function ab({ top: n, left: i, right: s, bottom: r }) {
  return { x: { min: i, max: s }, y: { min: n, max: r } };
}
function WR({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function IR(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    r = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: r.y, right: r.x };
}
function rf(n) {
  return n === void 0 || n === 1;
}
function _f({ scale: n, scaleX: i, scaleY: s }) {
  return !rf(n) || !rf(i) || !rf(s);
}
function Qa(n) {
  return (
    _f(n) ||
    ib(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function ib(n) {
  return xy(n.x) || xy(n.y);
}
function xy(n) {
  return n && n !== "0%";
}
function Eo(n, i, s) {
  const r = n - s,
    u = i * r;
  return s + u;
}
function Ty(n, i, s, r, u) {
  return (u !== void 0 && (n = Eo(n, u, r)), Eo(n, s, r) + i);
}
function jf(n, i = 0, s = 1, r, u) {
  ((n.min = Ty(n.min, i, s, r, u)), (n.max = Ty(n.max, i, s, r, u)));
}
function lb(n, { x: i, y: s }) {
  (jf(n.x, i.translate, i.scale, i.originPoint),
    jf(n.y, s.translate, s.scale, s.originPoint));
}
const Ey = 0.999999999999,
  Ay = 1.0000000000001;
function t2(n, i, s, r = !1) {
  const u = s.length;
  if (!u) return;
  i.x = i.y = 1;
  let f, d;
  for (let h = 0; h < u; h++) {
    ((f = s[h]), (d = f.projectionDelta));
    const { visualElement: p } = f.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (r &&
        f.options.layoutScroll &&
        f.scroll &&
        f !== f.root &&
        Xi(n, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
      d && ((i.x *= d.x.scale), (i.y *= d.y.scale), lb(n, d)),
      r && Qa(f.latestValues) && Xi(n, f.latestValues));
  }
  (i.x < Ay && i.x > Ey && (i.x = 1), i.y < Ay && i.y > Ey && (i.y = 1));
}
function Gi(n, i) {
  ((n.min = n.min + i), (n.max = n.max + i));
}
function Dy(n, i, s, r, u = 0.5) {
  const f = _t(n.min, n.max, u);
  jf(n, i, s, f, r);
}
function Xi(n, i) {
  (Dy(n.x, i.x, i.scaleX, i.scale, i.originX),
    Dy(n.y, i.y, i.scaleY, i.scale, i.originY));
}
function sb(n, i) {
  return ab(IR(n.getBoundingClientRect(), i));
}
function e2(n, i, s) {
  const r = sb(n, s),
    { scroll: u } = i;
  return (u && (Gi(r.x, u.offset.x), Gi(r.y, u.offset.y)), r);
}
const Ry = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ki = () => ({ x: Ry(), y: Ry() }),
  wy = () => ({ min: 0, max: 0 }),
  Qt = () => ({ x: wy(), y: wy() }),
  Hf = { current: null },
  rb = { current: !1 };
function n2() {
  if (((rb.current = !0), !!od))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Hf.current = n.matches);
      (n.addEventListener("change", i), i());
    } else Hf.current = !1;
}
const a2 = new WeakMap();
function i2(n, i, s) {
  for (const r in i) {
    const u = i[r],
      f = s[r];
    if (be(u)) n.addValue(r, u);
    else if (be(f)) n.addValue(r, Pi(u, { owner: n }));
    else if (f !== u)
      if (n.hasValue(r)) {
        const d = n.getValue(r);
        d.liveStyle === !0 ? d.jump(u) : d.hasAnimated || d.set(u);
      } else {
        const d = n.getStaticValue(r);
        n.addValue(r, Pi(d !== void 0 ? d : u, { owner: n }));
      }
  }
  for (const r in s) i[r] === void 0 && n.removeValue(r);
  return i;
}
const My = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class l2 {
  scrapeMotionValuesFromProps(i, s, r) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: s,
      presenceContext: r,
      reducedMotionConfig: u,
      blockInitialAnimation: f,
      visualState: d,
    },
    h = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Dd),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const x = Oe.now();
        this.renderScheduledAt < x &&
          ((this.renderScheduledAt = x), Ut.render(this.render, !1, !0));
      }));
    const { latestValues: p, renderState: m } = d;
    ((this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = s.initial ? { ...p } : {}),
      (this.renderState = m),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = r),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = u),
      (this.options = h),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = zo(s)),
      (this.isVariantNode = Z0(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: g, ...b } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this,
    );
    for (const x in b) {
      const E = b[x];
      p[x] !== void 0 && be(E) && E.set(p[x]);
    }
  }
  mount(i) {
    ((this.current = i),
      a2.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, r) => this.bindToMotionValue(r, s)),
      rb.current || n2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Hf.current),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      Ta(this.notifyUpdate),
      Ta(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const s = this.features[i];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    (this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(i));
  }
  removeChild(i) {
    (this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i));
  }
  bindToMotionValue(i, s) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const r = al.has(i);
    r && this.onBindTransform && this.onBindTransform();
    const u = s.on("change", (d) => {
      ((this.latestValues[i] = d),
        this.props.onUpdate && Ut.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let f;
    (window.MotionCheckAppearSync &&
      (f = window.MotionCheckAppearSync(this, i, s)),
      this.valueSubscriptions.set(i, () => {
        (u(), f && f(), s.owner && s.stop());
      }));
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in Fi) {
      const s = Fi[i];
      if (!s) continue;
      const { isEnabled: r, Feature: u } = s;
      if (
        (!this.features[i] &&
          u &&
          r(this.props) &&
          (this.features[i] = new u(this)),
        this.features[i])
      ) {
        const f = this.features[i];
        f.isMounted ? f.update() : (f.mount(), (f.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Qt();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, s) {
    this.latestValues[i] = s;
  }
  update(i, s) {
    ((i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s));
    for (let r = 0; r < My.length; r++) {
      const u = My[r];
      this.propEventSubscriptions[u] &&
        (this.propEventSubscriptions[u](),
        delete this.propEventSubscriptions[u]);
      const f = "on" + u,
        d = i[f];
      d && (this.propEventSubscriptions[u] = this.on(u, d));
    }
    ((this.prevMotionValues = i2(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(i) {
    const s = this.getClosestVariantNode();
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(i),
        () => s.variantChildren.delete(i)
      );
  }
  addValue(i, s) {
    const r = this.values.get(i);
    s !== r &&
      (r && this.removeValue(i),
      this.bindToMotionValue(i, s),
      this.values.set(i, s),
      (this.latestValues[i] = s.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const s = this.valueSubscriptions.get(i);
    (s && (s(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState));
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, s) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let r = this.values.get(i);
    return (
      r === void 0 &&
        s !== void 0 &&
        ((r = Pi(s === null ? void 0 : s, { owner: this })),
        this.addValue(i, r)),
      r
    );
  }
  readValue(i, s) {
    let r =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options));
    return (
      r != null &&
        (typeof r == "string" && (Iv(r) || e0(r))
          ? (r = parseFloat(r))
          : !dR(r) && Ea.test(s) && (r = B0(i, s)),
        this.setBaseTarget(i, be(r) ? r.get() : r)),
      be(r) ? r.get() : r
    );
  }
  setBaseTarget(i, s) {
    this.baseTarget[i] = s;
  }
  getBaseTarget(i) {
    const { initial: s } = this.props;
    let r;
    if (typeof s == "string" || typeof s == "object") {
      const f = Bd(this.props, s, this.presenceContext?.custom);
      f && (r = f[i]);
    }
    if (s && r !== void 0) return r;
    const u = this.getBaseTargetFromProps(this.props, i);
    return u !== void 0 && !be(u)
      ? u
      : this.initialValues[i] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, s) {
    return (
      this.events[i] || (this.events[i] = new hd()),
      this.events[i].add(s)
    );
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
  scheduleRenderMicrotask() {
    Md.render(this.render);
  }
}
class ob extends l2 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = tR));
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, s) {
    return i.style ? i.style[s] : void 0;
  }
  removeValueFromRenderState(i, { vars: s, style: r }) {
    (delete s[i], delete r[i]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    be(i) &&
      (this.childSubscription = i.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
function ub(n, { style: i, vars: s }, r, u) {
  const f = n.style;
  let d;
  for (d in i) f[d] = i[d];
  u?.applyProjectionStyles(f, r);
  for (d in s) f.setProperty(d, s[d]);
}
function s2(n) {
  return window.getComputedStyle(n);
}
class r2 extends ob {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = ub));
  }
  readValueFromInstance(i, s) {
    if (al.has(s)) return this.projection?.isProjecting ? Of(s) : bD(i, s);
    {
      const r = s2(i),
        u = (gd(s) ? r.getPropertyValue(s) : r[s]) || 0;
      return typeof u == "string" ? u.trim() : u;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return sb(i, s);
  }
  build(i, s, r) {
    Vd(i, s, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, r) {
    return _d(i, s, r);
  }
}
const cb = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function o2(n, i, s, r) {
  ub(n, i, void 0, r);
  for (const u in i.attrs) n.setAttribute(cb.has(u) ? u : jd(u), i.attrs[u]);
}
class u2 extends ob {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Qt));
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (al.has(s)) {
      const r = U0(s);
      return (r && r.default) || 0;
    }
    return ((s = cb.has(s) ? s : jd(s)), i.getAttribute(s));
  }
  scrapeMotionValuesFromProps(i, s, r) {
    return I0(i, s, r);
  }
  build(i, s, r) {
    F0(i, s, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(i, s, r, u) {
    o2(i, s, r, u);
  }
  mount(i) {
    ((this.isSVGTag = $0(i.tagName)), super.mount(i));
  }
}
const c2 = (n, i) =>
  Ud(n) ? new u2(i) : new r2(i, { allowProjection: n !== S.Fragment });
function Qi(n, i, s) {
  const r = n.getProps();
  return Bd(r, i, s !== void 0 ? s : r.custom, n);
}
const Yf = (n) => Array.isArray(n);
function f2(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, Pi(s));
}
function d2(n) {
  return Yf(n) ? n[n.length - 1] || 0 : n;
}
function h2(n, i) {
  const s = Qi(n, i);
  let { transitionEnd: r = {}, transition: u = {}, ...f } = s || {};
  f = { ...f, ...r };
  for (const d in f) {
    const h = d2(f[d]);
    f2(n, d, h);
  }
}
function m2(n) {
  return !!(be(n) && n.add);
}
function qf(n, i) {
  const s = n.getValue("willChange");
  if (m2(s)) return s.add(i);
  if (!s && Zn.WillChange) {
    const r = new Zn.WillChange("auto");
    (n.addValue("willChange", r), r.add(i));
  }
}
function fb(n) {
  return n.props[tb];
}
const p2 = (n) => n !== null;
function g2(n, { repeat: i, repeatType: s = "loop" }, r) {
  const u = n.filter(p2),
    f = i && s !== "loop" && i % 2 === 1 ? 0 : u.length - 1;
  return u[f];
}
const y2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  v2 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  b2 = { type: "keyframes", duration: 0.8 },
  S2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  x2 = (n, { keyframes: i }) =>
    i.length > 2
      ? b2
      : al.has(n)
        ? n.startsWith("scale")
          ? v2(i[1])
          : y2
        : S2;
function T2({
  when: n,
  delay: i,
  delayChildren: s,
  staggerChildren: r,
  staggerDirection: u,
  repeat: f,
  repeatType: d,
  repeatDelay: h,
  from: p,
  elapsed: m,
  ...g
}) {
  return !!Object.keys(g).length;
}
const Hd =
  (n, i, s, r = {}, u, f) =>
  (d) => {
    const h = Rd(r, n) || {},
      p = h.delay || r.delay || 0;
    let { elapsed: m = 0 } = r;
    m = m - Sn(p);
    const g = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...h,
      delay: -m,
      onUpdate: (x) => {
        (i.set(x), h.onUpdate && h.onUpdate(x));
      },
      onComplete: () => {
        (d(), h.onComplete && h.onComplete());
      },
      name: n,
      motionValue: i,
      element: f ? void 0 : u,
    };
    (T2(h) || Object.assign(g, x2(n, g)),
      g.duration && (g.duration = Sn(g.duration)),
      g.repeatDelay && (g.repeatDelay = Sn(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from));
    let b = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        (Uf(g), g.delay === 0 && (b = !0)),
      (Zn.instantAnimations || Zn.skipAnimations) &&
        ((b = !0), Uf(g), (g.delay = 0)),
      (g.allowFlatten = !h.type && !h.ease),
      b && !f && i.get() !== void 0)
    ) {
      const x = g2(g.keyframes, h);
      if (x !== void 0) {
        Ut.update(() => {
          (g.onUpdate(x), g.onComplete());
        });
        return;
      }
    }
    return h.isSync ? new Ad(g) : new kD(g);
  };
function E2({ protectedKeys: n, needsAnimating: i }, s) {
  const r = n.hasOwnProperty(s) && i[s] !== !0;
  return ((i[s] = !1), r);
}
function db(n, i, { delay: s = 0, transitionOverride: r, type: u } = {}) {
  let { transition: f = n.getDefaultTransition(), transitionEnd: d, ...h } = i;
  r && (f = r);
  const p = [],
    m = u && n.animationState && n.animationState.getState()[u];
  for (const g in h) {
    const b = n.getValue(g, n.latestValues[g] ?? null),
      x = h[g];
    if (x === void 0 || (m && E2(m, g))) continue;
    const E = { delay: s, ...Rd(f || {}, g) },
      C = b.get();
    if (
      C !== void 0 &&
      !b.isAnimating &&
      !Array.isArray(x) &&
      x === C &&
      !E.velocity
    )
      continue;
    let O = !1;
    if (window.MotionHandoffAnimation) {
      const z = fb(n);
      if (z) {
        const L = window.MotionHandoffAnimation(z, g, Ut);
        L !== null && ((E.startTime = L), (O = !0));
      }
    }
    (qf(n, g),
      b.start(
        Hd(g, b, x, n.shouldReduceMotion && z0.has(g) ? { type: !1 } : E, n, O),
      ));
    const M = b.animation;
    M && p.push(M);
  }
  return (
    d &&
      Promise.all(p).then(() => {
        Ut.update(() => {
          d && h2(n, d);
        });
      }),
    p
  );
}
function hb(n, i, s, r = 0, u = 1) {
  const f = Array.from(n)
      .sort((m, g) => m.sortNodePosition(g))
      .indexOf(i),
    d = n.size,
    h = (d - 1) * r;
  return typeof s == "function" ? s(f, d) : u === 1 ? f * r : h - f * r;
}
function kf(n, i, s = {}) {
  const r = Qi(n, i, s.type === "exit" ? n.presenceContext?.custom : void 0);
  let { transition: u = n.getDefaultTransition() || {} } = r || {};
  s.transitionOverride && (u = s.transitionOverride);
  const f = r ? () => Promise.all(db(n, r, s)) : () => Promise.resolve(),
    d =
      n.variantChildren && n.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: m = 0,
              staggerChildren: g,
              staggerDirection: b,
            } = u;
            return A2(n, i, p, m, g, b, s);
          }
        : () => Promise.resolve(),
    { when: h } = u;
  if (h) {
    const [p, m] = h === "beforeChildren" ? [f, d] : [d, f];
    return p().then(() => m());
  } else return Promise.all([f(), d(s.delay)]);
}
function A2(n, i, s = 0, r = 0, u = 0, f = 1, d) {
  const h = [];
  for (const p of n.variantChildren)
    (p.notify("AnimationStart", i),
      h.push(
        kf(p, i, {
          ...d,
          delay:
            s +
            (typeof r == "function" ? 0 : r) +
            hb(n.variantChildren, p, r, u, f),
        }).then(() => p.notify("AnimationComplete", i)),
      ));
  return Promise.all(h);
}
function D2(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let r;
  if (Array.isArray(i)) {
    const u = i.map((f) => kf(n, f, s));
    r = Promise.all(u);
  } else if (typeof i == "string") r = kf(n, i, s);
  else {
    const u = typeof i == "function" ? Qi(n, i, s.custom) : i;
    r = Promise.all(db(n, u, s));
  }
  return r.then(() => {
    n.notify("AnimationComplete", i);
  });
}
function mb(n, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== n.length) return !1;
  for (let r = 0; r < s; r++) if (i[r] !== n[r]) return !1;
  return !0;
}
const R2 = zd.length;
function pb(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? pb(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const i = {};
  for (let s = 0; s < R2; s++) {
    const r = zd[s],
      u = n.props[r];
    (Ss(u) || u === !1) && (i[r] = u);
  }
  return i;
}
const w2 = [...Nd].reverse(),
  M2 = Nd.length;
function C2(n) {
  return (i) =>
    Promise.all(i.map(({ animation: s, options: r }) => D2(n, s, r)));
}
function O2(n) {
  let i = C2(n),
    s = Cy(),
    r = !0;
  const u = (p) => (m, g) => {
    const b = Qi(n, g, p === "exit" ? n.presenceContext?.custom : void 0);
    if (b) {
      const { transition: x, transitionEnd: E, ...C } = b;
      m = { ...m, ...C, ...E };
    }
    return m;
  };
  function f(p) {
    i = p(n);
  }
  function d(p) {
    const { props: m } = n,
      g = pb(n.parent) || {},
      b = [],
      x = new Set();
    let E = {},
      C = 1 / 0;
    for (let M = 0; M < M2; M++) {
      const z = w2[M],
        L = s[z],
        B = m[z] !== void 0 ? m[z] : g[z],
        Z = Ss(B),
        j = z === p ? L.isActive : null;
      j === !1 && (C = M);
      let P = B === g[z] && B !== m[z] && Z;
      if (
        (P && r && n.manuallyAnimateOnMount && (P = !1),
        (L.protectedKeys = { ...E }),
        (!L.isActive && j === null) ||
          (!B && !L.prevProp) ||
          No(B) ||
          typeof B == "boolean")
      )
        continue;
      const Q = N2(L.prevProp, B);
      let K = Q || (z === p && L.isActive && !P && Z) || (M > C && Z),
        I = !1;
      const lt = Array.isArray(B) ? B : [B];
      let ot = lt.reduce(u(z), {});
      j === !1 && (ot = {});
      const { prevResolvedValues: St = {} } = L,
        Gt = { ...St, ...ot },
        Xt = (G) => {
          ((K = !0),
            x.has(G) && ((I = !0), x.delete(G)),
            (L.needsAnimating[G] = !0));
          const $ = n.getValue(G);
          $ && ($.liveStyle = !1);
        };
      for (const G in Gt) {
        const $ = ot[G],
          ut = St[G];
        if (E.hasOwnProperty(G)) continue;
        let A = !1;
        (Yf($) && Yf(ut) ? (A = !mb($, ut)) : (A = $ !== ut),
          A
            ? $ != null
              ? Xt(G)
              : x.add(G)
            : $ !== void 0 && x.has(G)
              ? Xt(G)
              : (L.protectedKeys[G] = !0));
      }
      ((L.prevProp = B),
        (L.prevResolvedValues = ot),
        L.isActive && (E = { ...E, ...ot }),
        r && n.blockInitialAnimation && (K = !1));
      const Nt = P && Q;
      K &&
        (!Nt || I) &&
        b.push(
          ...lt.map((G) => {
            const $ = { type: z };
            if (
              typeof G == "string" &&
              r &&
              !Nt &&
              n.manuallyAnimateOnMount &&
              n.parent
            ) {
              const { parent: ut } = n,
                A = Qi(ut, G);
              if (ut.enteringChildren && A) {
                const { delayChildren: k } = A.transition || {};
                $.delay = hb(ut.enteringChildren, n, k);
              }
            }
            return { animation: G, options: $ };
          }),
        );
    }
    if (x.size) {
      const M = {};
      if (typeof m.initial != "boolean") {
        const z = Qi(n, Array.isArray(m.initial) ? m.initial[0] : m.initial);
        z && z.transition && (M.transition = z.transition);
      }
      (x.forEach((z) => {
        const L = n.getBaseTarget(z),
          B = n.getValue(z);
        (B && (B.liveStyle = !0), (M[z] = L ?? null));
      }),
        b.push({ animation: M }));
    }
    let O = !!b.length;
    return (
      r &&
        (m.initial === !1 || m.initial === m.animate) &&
        !n.manuallyAnimateOnMount &&
        (O = !1),
      (r = !1),
      O ? i(b) : Promise.resolve()
    );
  }
  function h(p, m) {
    if (s[p].isActive === m) return Promise.resolve();
    (n.variantChildren?.forEach((b) => b.animationState?.setActive(p, m)),
      (s[p].isActive = m));
    const g = d(p);
    for (const b in s) s[b].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: d,
    setActive: h,
    setAnimateFunction: f,
    getState: () => s,
    reset: () => {
      ((s = Cy()), (r = !0));
    },
  };
}
function N2(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !mb(i, n) : !1;
}
function Za(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Cy() {
  return {
    animate: Za(!0),
    whileInView: Za(),
    whileHover: Za(),
    whileTap: Za(),
    whileDrag: Za(),
    whileFocus: Za(),
    exit: Za(),
  };
}
class Aa {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
class z2 extends Aa {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = O2(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    No(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    i !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let V2 = 0;
class L2 extends Aa {
  constructor() {
    (super(...arguments), (this.id = V2++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === r) return;
    const u = this.node.animationState.setActive("exit", !i);
    s &&
      !i &&
      u.then(() => {
        s(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: s } = this.node.presenceContext || {};
    (s && s(this.id), i && (this.unmount = i(this.id)));
  }
  unmount() {}
}
const U2 = { animation: { Feature: z2 }, exit: { Feature: L2 } };
function Ts(n, i, s, r = { passive: !0 }) {
  return (n.addEventListener(i, s, r), () => n.removeEventListener(i, s));
}
function zs(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const B2 = (n) => (i) => Cd(i) && n(i, zs(i));
function cs(n, i, s, r) {
  return Ts(n, i, B2(s), r);
}
const gb = 1e-4,
  _2 = 1 - gb,
  j2 = 1 + gb,
  yb = 0.01,
  H2 = 0 - yb,
  Y2 = 0 + yb;
function Ee(n) {
  return n.max - n.min;
}
function q2(n, i, s) {
  return Math.abs(n - i) <= s;
}
function Oy(n, i, s, r = 0.5) {
  ((n.origin = r),
    (n.originPoint = _t(i.min, i.max, n.origin)),
    (n.scale = Ee(s) / Ee(i)),
    (n.translate = _t(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= _2 && n.scale <= j2) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= H2 && n.translate <= Y2) || isNaN(n.translate)) &&
      (n.translate = 0));
}
function fs(n, i, s, r) {
  (Oy(n.x, i.x, s.x, r ? r.originX : void 0),
    Oy(n.y, i.y, s.y, r ? r.originY : void 0));
}
function Ny(n, i, s) {
  ((n.min = s.min + i.min), (n.max = n.min + Ee(i)));
}
function k2(n, i, s) {
  (Ny(n.x, i.x, s.x), Ny(n.y, i.y, s.y));
}
function zy(n, i, s) {
  ((n.min = i.min - s.min), (n.max = n.min + Ee(i)));
}
function ds(n, i, s) {
  (zy(n.x, i.x, s.x), zy(n.y, i.y, s.y));
}
function We(n) {
  return [n("x"), n("y")];
}
const vb = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Vy = (n, i) => Math.abs(n - i);
function G2(n, i) {
  const s = Vy(n.x, i.x),
    r = Vy(n.y, i.y);
  return Math.sqrt(s ** 2 + r ** 2);
}
class bb {
  constructor(
    i,
    s,
    {
      transformPagePoint: r,
      contextWindow: u = window,
      dragSnapToOrigin: f = !1,
      distanceThreshold: d = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const x = uf(this.lastMoveEventInfo, this.history),
          E = this.startEvent !== null,
          C = G2(x.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!E && !C) return;
        const { point: O } = x,
          { timestamp: M } = he;
        this.history.push({ ...O, timestamp: M });
        const { onStart: z, onMove: L } = this.handlers;
        (E ||
          (z && z(this.lastMoveEvent, x),
          (this.startEvent = this.lastMoveEvent)),
          L && L(this.lastMoveEvent, x));
      }),
      (this.handlePointerMove = (x, E) => {
        ((this.lastMoveEvent = x),
          (this.lastMoveEventInfo = of(E, this.transformPagePoint)),
          Ut.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (x, E) => {
        this.end();
        const { onEnd: C, onSessionEnd: O, resumeAnimation: M } = this.handlers;
        if (
          (this.dragSnapToOrigin && M && M(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const z = uf(
          x.type === "pointercancel"
            ? this.lastMoveEventInfo
            : of(E, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && C && C(x, z), O && O(x, z));
      }),
      !Cd(i))
    )
      return;
    ((this.dragSnapToOrigin = f),
      (this.handlers = s),
      (this.transformPagePoint = r),
      (this.distanceThreshold = d),
      (this.contextWindow = u || window));
    const h = zs(i),
      p = of(h, this.transformPagePoint),
      { point: m } = p,
      { timestamp: g } = he;
    this.history = [{ ...m, timestamp: g }];
    const { onSessionStart: b } = s;
    (b && b(i, uf(p, this.history)),
      (this.removeListeners = Cs(
        cs(this.contextWindow, "pointermove", this.handlePointerMove),
        cs(this.contextWindow, "pointerup", this.handlePointerUp),
        cs(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Ta(this.updatePoint));
  }
}
function of(n, i) {
  return i ? { point: i(n.point) } : n;
}
function Ly(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function uf({ point: n }, i) {
  return {
    point: n,
    delta: Ly(n, Sb(i)),
    offset: Ly(n, X2(i)),
    velocity: K2(i, 0.1),
  };
}
function X2(n) {
  return n[0];
}
function Sb(n) {
  return n[n.length - 1];
}
function K2(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    r = null;
  const u = Sb(n);
  for (; s >= 0 && ((r = n[s]), !(u.timestamp - r.timestamp > Sn(i))); ) s--;
  if (!r) return { x: 0, y: 0 };
  const f = tn(u.timestamp - r.timestamp);
  if (f === 0) return { x: 0, y: 0 };
  const d = { x: (u.x - r.x) / f, y: (u.y - r.y) / f };
  return (d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d);
}
function Z2(n, { min: i, max: s }, r) {
  return (
    i !== void 0 && n < i
      ? (n = r ? _t(i, n, r.min) : Math.max(n, i))
      : s !== void 0 && n > s && (n = r ? _t(s, n, r.max) : Math.min(n, s)),
    n
  );
}
function Uy(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function Q2(n, { top: i, left: s, bottom: r, right: u }) {
  return { x: Uy(n.x, s, u), y: Uy(n.y, i, r) };
}
function By(n, i) {
  let s = i.min - n.min,
    r = i.max - n.max;
  return (
    i.max - i.min < n.max - n.min && ([s, r] = [r, s]),
    { min: s, max: r }
  );
}
function P2(n, i) {
  return { x: By(n.x, i.x), y: By(n.y, i.y) };
}
function F2(n, i) {
  let s = 0.5;
  const r = Ee(n),
    u = Ee(i);
  return (
    u > r
      ? (s = ys(i.min, i.max - r, n.min))
      : r > u && (s = ys(n.min, n.max - u, i.min)),
    Kn(0, 1, s)
  );
}
function J2(n, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  );
}
const Gf = 0.35;
function $2(n = Gf) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Gf),
    { x: _y(n, "left", "right"), y: _y(n, "top", "bottom") }
  );
}
function _y(n, i, s) {
  return { min: jy(n, i), max: jy(n, s) };
}
function jy(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const W2 = new WeakMap();
class I2 {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Qt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: s = !1, distanceThreshold: r } = {}) {
    const { presenceContext: u } = this.visualElement;
    if (u && u.isPresent === !1) return;
    const f = (b) => {
        const { dragSnapToOrigin: x } = this.getProps();
        (x ? this.pauseAnimation() : this.stopAnimation(),
          s && this.snapToCursor(zs(b).point));
      },
      d = (b, x) => {
        const { drag: E, dragPropagation: C, onDragStart: O } = this.getProps();
        if (
          E &&
          !C &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = iR(E)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = x),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          We((z) => {
            let L = this.getAxisMotionValue(z).get() || 0;
            if (xn.test(L)) {
              const { projection: B } = this.visualElement;
              if (B && B.layout) {
                const Z = B.layout.layoutBox[z];
                Z && (L = Ee(Z) * (parseFloat(L) / 100));
              }
            }
            this.originPoint[z] = L;
          }),
          O && Ut.postRender(() => O(b, x)),
          qf(this.visualElement, "transform"));
        const { animationState: M } = this.visualElement;
        M && M.setActive("whileDrag", !0);
      },
      h = (b, x) => {
        ((this.latestPointerEvent = b), (this.latestPanInfo = x));
        const {
          dragPropagation: E,
          dragDirectionLock: C,
          onDirectionLock: O,
          onDrag: M,
        } = this.getProps();
        if (!E && !this.openDragLock) return;
        const { offset: z } = x;
        if (C && this.currentDirection === null) {
          ((this.currentDirection = tw(z)),
            this.currentDirection !== null && O && O(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, z),
          this.updateAxis("y", x.point, z),
          this.visualElement.render(),
          M && M(b, x));
      },
      p = (b, x) => {
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = x),
          this.stop(b, x),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      m = () =>
        We(
          (b) =>
            this.getAnimationState(b) === "paused" &&
            this.getAxisMotionValue(b).animation?.play(),
        ),
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new bb(
      i,
      {
        onSessionStart: f,
        onStart: d,
        onMove: h,
        onSessionEnd: p,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        distanceThreshold: r,
        contextWindow: vb(this.visualElement),
      },
    );
  }
  stop(i, s) {
    const r = i || this.latestPointerEvent,
      u = s || this.latestPanInfo,
      f = this.isDragging;
    if ((this.cancel(), !f || !u || !r)) return;
    const { velocity: d } = u;
    this.startAnimation(d);
    const { onDragEnd: h } = this.getProps();
    h && Ut.postRender(() => h(r, u));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: s } = this.visualElement;
    (i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1));
  }
  updateAxis(i, s, r) {
    const { drag: u } = this.getProps();
    if (!r || !no(i, u, this.currentDirection)) return;
    const f = this.getAxisMotionValue(i);
    let d = this.originPoint[i] + r[i];
    (this.constraints &&
      this.constraints[i] &&
      (d = Z2(d, this.constraints[i], this.elastic[i])),
      f.set(d));
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: s } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      u = this.constraints;
    (i && ki(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && r
        ? (this.constraints = Q2(r.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = $2(s)),
      u !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        We((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = J2(r.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !ki(i)) return !1;
    const r = i.current,
      { projection: u } = this.visualElement;
    if (!u || !u.layout) return !1;
    const f = e2(r, u.root, this.visualElement.getTransformPagePoint());
    let d = P2(u.layout.layoutBox, f);
    if (s) {
      const h = s(WR(d));
      ((this.hasMutatedConstraints = !!h), h && (d = ab(h)));
    }
    return d;
  }
  startAnimation(i) {
    const {
        drag: s,
        dragMomentum: r,
        dragElastic: u,
        dragTransition: f,
        dragSnapToOrigin: d,
        onDragTransitionEnd: h,
      } = this.getProps(),
      p = this.constraints || {},
      m = We((g) => {
        if (!no(g, s, this.currentDirection)) return;
        let b = (p && p[g]) || {};
        d && (b = { min: 0, max: 0 });
        const x = u ? 200 : 1e6,
          E = u ? 40 : 1e7,
          C = {
            type: "inertia",
            velocity: r ? i[g] : 0,
            bounceStiffness: x,
            bounceDamping: E,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...f,
            ...b,
          };
        return this.startAxisValueAnimation(g, C);
      });
    return Promise.all(m).then(h);
  }
  startAxisValueAnimation(i, s) {
    const r = this.getAxisMotionValue(i);
    return (
      qf(this.visualElement, i),
      r.start(Hd(i, r, 0, s, this.visualElement, !1))
    );
  }
  stopAnimation() {
    We((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    We((i) => this.getAxisMotionValue(i).animation?.pause());
  }
  getAnimationState(i) {
    return this.getAxisMotionValue(i).animation?.state;
  }
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`,
      r = this.visualElement.getProps(),
      u = r[s];
    return (
      u ||
      this.visualElement.getValue(i, (r.initial ? r.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    We((s) => {
      const { drag: r } = this.getProps();
      if (!no(s, r, this.currentDirection)) return;
      const { projection: u } = this.visualElement,
        f = this.getAxisMotionValue(s);
      if (u && u.layout) {
        const { min: d, max: h } = u.layout.layoutBox[s];
        f.set(i[s] - _t(d, h, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: s } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ki(s) || !r || !this.constraints) return;
    this.stopAnimation();
    const u = { x: 0, y: 0 };
    We((d) => {
      const h = this.getAxisMotionValue(d);
      if (h && this.constraints !== !1) {
        const p = h.get();
        u[d] = F2({ min: p, max: p }, this.constraints[d]);
      }
    });
    const { transformTemplate: f } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = f ? f({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      We((d) => {
        if (!no(d, i, null)) return;
        const h = this.getAxisMotionValue(d),
          { min: p, max: m } = this.constraints[d];
        h.set(_t(p, m, u[d]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    W2.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = cs(i, "pointerdown", (p) => {
        const { drag: m, dragListener: g = !0 } = this.getProps();
        m && g && this.start(p);
      }),
      r = () => {
        const { dragConstraints: p } = this.getProps();
        ki(p) && p.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: u } = this.visualElement,
      f = u.addEventListener("measure", r);
    (u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()),
      Ut.read(r));
    const d = Ts(window, "resize", () => this.scalePositionWithinConstraints()),
      h = u.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: m }) => {
          this.isDragging &&
            m &&
            (We((g) => {
              const b = this.getAxisMotionValue(g);
              b &&
                ((this.originPoint[g] += p[g].translate),
                b.set(b.get() + p[g].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (d(), s(), f(), h && h());
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: r = !1,
        dragPropagation: u = !1,
        dragConstraints: f = !1,
        dragElastic: d = Gf,
        dragMomentum: h = !0,
      } = i;
    return {
      ...i,
      drag: s,
      dragDirectionLock: r,
      dragPropagation: u,
      dragConstraints: f,
      dragElastic: d,
      dragMomentum: h,
    };
  }
}
function no(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function tw(n, i = 10) {
  let s = null;
  return (Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s);
}
class ew extends Aa {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = en),
      (this.removeListeners = en),
      (this.controls = new I2(i)));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    (i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || en));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const Hy = (n) => (i, s) => {
  n && Ut.postRender(() => n(i, s));
};
class nw extends Aa {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = en));
  }
  onPointerDown(i) {
    this.session = new bb(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: vb(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: s,
      onPan: r,
      onPanEnd: u,
    } = this.node.getProps();
    return {
      onSessionStart: Hy(i),
      onStart: Hy(s),
      onMove: r,
      onEnd: (f, d) => {
        (delete this.session, u && Ut.postRender(() => u(f, d)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = cs(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const fo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Yy(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const ns = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (rt.test(n)) n = parseFloat(n);
        else return n;
      const s = Yy(n, i.target.x),
        r = Yy(n, i.target.y);
      return `${s}% ${r}%`;
    },
  },
  aw = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const r = n,
        u = Ea.parse(n);
      if (u.length > 5) return r;
      const f = Ea.createTransformer(n),
        d = typeof u[0] != "number" ? 1 : 0,
        h = s.x.scale * i.x,
        p = s.y.scale * i.y;
      ((u[0 + d] /= h), (u[1 + d] /= p));
      const m = _t(h, p, 0.5);
      return (
        typeof u[2 + d] == "number" && (u[2 + d] /= m),
        typeof u[3 + d] == "number" && (u[3 + d] /= m),
        f(u)
      );
    },
  };
let cf = !1;
class iw extends S.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: r,
        layoutId: u,
      } = this.props,
      { projection: f } = i;
    (RR(lw),
      f &&
        (s.group && s.group.add(f),
        r && r.register && u && r.register(f),
        cf && f.root.didUpdate(),
        f.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        f.setOptions({
          ...f.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (fo.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: s,
        visualElement: r,
        drag: u,
        isPresent: f,
      } = this.props,
      { projection: d } = r;
    return (
      d &&
        ((d.isPresent = f),
        (cf = !0),
        u || i.layoutDependency !== s || s === void 0 || i.isPresent !== f
          ? d.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== f &&
          (f
            ? d.promote()
            : d.relegate() ||
              Ut.postRender(() => {
                const h = d.getStack();
                (!h || !h.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      Md.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: r,
      } = this.props,
      { projection: u } = i;
    ((cf = !0),
      u &&
        (u.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(u),
        r && r.deregister && r.deregister(u)));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function xb(n) {
  const [i, s] = G0(),
    r = S.useContext(sd);
  return X.jsx(iw, {
    ...n,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(eb),
    isPresent: i,
    safeToRemove: s,
  });
}
const lw = {
  borderRadius: {
    ...ns,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: ns,
  borderTopRightRadius: ns,
  borderBottomLeftRadius: ns,
  borderBottomRightRadius: ns,
  boxShadow: aw,
};
function sw(n, i, s) {
  const r = be(n) ? n : Pi(n);
  return (r.start(Hd("", r, i, s)), r.animation);
}
const rw = (n, i) => n.depth - i.depth;
class ow {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (ud(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (cd(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(rw),
      (this.isDirty = !1),
      this.children.forEach(i));
  }
}
function uw(n, i) {
  const s = Oe.now(),
    r = ({ timestamp: u }) => {
      const f = u - s;
      f >= i && (Ta(r), n(f - i));
    };
  return (Ut.setup(r, !0), () => Ta(r));
}
const Tb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  cw = Tb.length,
  qy = (n) => (typeof n == "string" ? parseFloat(n) : n),
  ky = (n) => typeof n == "number" || rt.test(n);
function fw(n, i, s, r, u, f) {
  u
    ? ((n.opacity = _t(0, s.opacity ?? 1, dw(r))),
      (n.opacityExit = _t(i.opacity ?? 1, 0, hw(r))))
    : f && (n.opacity = _t(i.opacity ?? 1, s.opacity ?? 1, r));
  for (let d = 0; d < cw; d++) {
    const h = `border${Tb[d]}Radius`;
    let p = Gy(i, h),
      m = Gy(s, h);
    if (p === void 0 && m === void 0) continue;
    (p || (p = 0),
      m || (m = 0),
      p === 0 || m === 0 || ky(p) === ky(m)
        ? ((n[h] = Math.max(_t(qy(p), qy(m), r), 0)),
          (xn.test(m) || xn.test(p)) && (n[h] += "%"))
        : (n[h] = m));
  }
  (i.rotate || s.rotate) && (n.rotate = _t(i.rotate || 0, s.rotate || 0, r));
}
function Gy(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const dw = Eb(0, 0.5, u0),
  hw = Eb(0.5, 0.95, en);
function Eb(n, i, s) {
  return (r) => (r < n ? 0 : r > i ? 1 : s(ys(n, i, r)));
}
function Xy(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function $e(n, i) {
  (Xy(n.x, i.x), Xy(n.y, i.y));
}
function Ky(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
function Zy(n, i, s, r, u) {
  return (
    (n -= i),
    (n = Eo(n, 1 / s, r)),
    u !== void 0 && (n = Eo(n, 1 / u, r)),
    n
  );
}
function mw(n, i = 0, s = 1, r = 0.5, u, f = n, d = n) {
  if (
    (xn.test(i) &&
      ((i = parseFloat(i)), (i = _t(d.min, d.max, i / 100) - d.min)),
    typeof i != "number")
  )
    return;
  let h = _t(f.min, f.max, r);
  (n === f && (h -= i),
    (n.min = Zy(n.min, i, s, h, u)),
    (n.max = Zy(n.max, i, s, h, u)));
}
function Qy(n, i, [s, r, u], f, d) {
  mw(n, i[s], i[r], i[u], i.scale, f, d);
}
const pw = ["x", "scaleX", "originX"],
  gw = ["y", "scaleY", "originY"];
function Py(n, i, s, r) {
  (Qy(n.x, i, pw, s ? s.x : void 0, r ? r.x : void 0),
    Qy(n.y, i, gw, s ? s.y : void 0, r ? r.y : void 0));
}
function Fy(n) {
  return n.translate === 0 && n.scale === 1;
}
function Ab(n) {
  return Fy(n.x) && Fy(n.y);
}
function Jy(n, i) {
  return n.min === i.min && n.max === i.max;
}
function yw(n, i) {
  return Jy(n.x, i.x) && Jy(n.y, i.y);
}
function $y(n, i) {
  return (
    Math.round(n.min) === Math.round(i.min) &&
    Math.round(n.max) === Math.round(i.max)
  );
}
function Db(n, i) {
  return $y(n.x, i.x) && $y(n.y, i.y);
}
function Wy(n) {
  return Ee(n.x) / Ee(n.y);
}
function Iy(n, i) {
  return (
    n.translate === i.translate &&
    n.scale === i.scale &&
    n.originPoint === i.originPoint
  );
}
class vw {
  constructor() {
    this.members = [];
  }
  add(i) {
    (ud(this.members, i), i.scheduleRender());
  }
  remove(i) {
    if (
      (cd(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(i) {
    const s = this.members.findIndex((u) => i === u);
    if (s === 0) return !1;
    let r;
    for (let u = s; u >= 0; u--) {
      const f = this.members[u];
      if (f.isPresent !== !1) {
        r = f;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(i, s) {
    const r = this.lead;
    if (i !== r && ((this.prevLead = r), (this.lead = i), i.show(), r)) {
      (r.instance && r.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = r),
        s && (i.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((i.snapshot = r.snapshot),
          (i.snapshot.latestValues = r.animationValues || r.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0));
      const { crossfade: u } = i.options;
      u === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: s, resumingFrom: r } = i;
      (s.onExitComplete && s.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function bw(n, i, s) {
  let r = "";
  const u = n.x.translate / i.x,
    f = n.y.translate / i.y,
    d = s?.z || 0;
  if (
    ((u || f || d) && (r = `translate3d(${u}px, ${f}px, ${d}px) `),
    (i.x !== 1 || i.y !== 1) && (r += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const {
      transformPerspective: m,
      rotate: g,
      rotateX: b,
      rotateY: x,
      skewX: E,
      skewY: C,
    } = s;
    (m && (r = `perspective(${m}px) ${r}`),
      g && (r += `rotate(${g}deg) `),
      b && (r += `rotateX(${b}deg) `),
      x && (r += `rotateY(${x}deg) `),
      E && (r += `skewX(${E}deg) `),
      C && (r += `skewY(${C}deg) `));
  }
  const h = n.x.scale * i.x,
    p = n.y.scale * i.y;
  return ((h !== 1 || p !== 1) && (r += `scale(${h}, ${p})`), r || "none");
}
const ff = ["", "X", "Y", "Z"],
  Sw = 1e3;
let xw = 0;
function df(n, i, s, r) {
  const { latestValues: u } = i;
  u[n] && ((s[n] = u[n]), i.setStaticValue(n, 0), r && (r[n] = 0));
}
function Rb(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const s = fb(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: u, layoutId: f } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Ut, !(u || f));
  }
  const { parent: r } = n;
  r && !r.hasCheckedOptimisedAppear && Rb(r);
}
function wb({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: r,
  resetTransform: u,
}) {
  return class {
    constructor(d = {}, h = i?.()) {
      ((this.id = xw++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Aw),
            this.nodes.forEach(Mw),
            this.nodes.forEach(Cw),
            this.nodes.forEach(Dw));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = d),
        (this.root = h ? h.root || h : this),
        (this.path = h ? [...h.path, h] : []),
        (this.parent = h),
        (this.depth = h ? h.depth + 1 : 0));
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ow());
    }
    addEventListener(d, h) {
      return (
        this.eventHandlers.has(d) || this.eventHandlers.set(d, new hd()),
        this.eventHandlers.get(d).add(h)
      );
    }
    notifyListeners(d, ...h) {
      const p = this.eventHandlers.get(d);
      p && p.notify(...h);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    mount(d) {
      if (this.instance) return;
      ((this.isSVG = k0(d) && !cR(d)), (this.instance = d));
      const { layoutId: h, layout: p, visualElement: m } = this.options;
      if (
        (m && !m.current && m.mount(d),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0),
        n)
      ) {
        let g,
          b = 0;
        const x = () => (this.root.updateBlockedByResize = !1);
        (Ut.read(() => {
          b = window.innerWidth;
        }),
          n(d, () => {
            const E = window.innerWidth;
            E !== b &&
              ((b = E),
              (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = uw(x, 250)),
              fo.hasAnimatedSinceResize &&
                ((fo.hasAnimatedSinceResize = !1), this.nodes.forEach(nv)));
          }));
      }
      (h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          m &&
          (h || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: g,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: x,
              layout: E,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const C =
                  this.options.transition || m.getDefaultTransition() || Lw,
                { onLayoutAnimationStart: O, onLayoutAnimationComplete: M } =
                  m.getProps(),
                z = !this.targetLayout || !Db(this.targetLayout, E),
                L = !b && x;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                L ||
                (b && (z || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const B = { ...Rd(C, "layout"), onPlay: O, onComplete: M };
                ((m.shouldReduceMotion || this.options.layoutRoot) &&
                  ((B.delay = 0), (B.type = !1)),
                  this.startAnimation(B),
                  this.setAnimationOrigin(g, L));
              } else
                (b || nv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = E;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const d = this.getStack();
      (d && d.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Ta(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Ow),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Rb(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const b = this.path[g];
        ((b.shouldResetTransform = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1));
      }
      const { layoutId: h, layout: p } = this.options;
      if (h === void 0 && !p) return;
      const m = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = m
        ? m(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        d && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(tv));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ev);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(ww),
            this.nodes.forEach(Tw),
            this.nodes.forEach(Ew))
          : this.nodes.forEach(ev),
        this.clearAllSnapshots());
      const h = Oe.now();
      ((he.delta = Kn(0, 1e3 / 60, h - he.timestamp)),
        (he.timestamp = h),
        (he.isProcessing = !0),
        Ic.update.process(he),
        Ic.preRender.process(he),
        Ic.render.process(he),
        (he.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Md.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Rw), this.sharedNodes.forEach(Nw));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ut.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ut.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Ee(this.snapshot.measuredBox.x) &&
          !Ee(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const d = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = Qt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: h } = this.options;
      h &&
        h.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          d ? d.layoutBox : void 0,
        );
    }
    updateScroll(d = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === d &&
          (h = !1),
        h && this.instance)
      ) {
        const p = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: p,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!u) return;
      const d =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !Ab(this.projectionDelta),
        p = this.getTransformTemplate(),
        m = p ? p(this.latestValues, "") : void 0,
        g = m !== this.prevTransformTemplateValue;
      d &&
        this.instance &&
        (h || Qa(this.latestValues) || g) &&
        (u(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(d = !0) {
      const h = this.measurePageBox();
      let p = this.removeElementScroll(h);
      return (
        d && (p = this.removeTransform(p)),
        Uw(p),
        {
          animationId: this.root.animationId,
          measuredBox: h,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: d } = this.options;
      if (!d) return Qt();
      const h = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Bw))) {
        const { scroll: m } = this.root;
        m && (Gi(h.x, m.offset.x), Gi(h.y, m.offset.y));
      }
      return h;
    }
    removeElementScroll(d) {
      const h = Qt();
      if (($e(h, d), this.scroll?.wasRoot)) return h;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p],
          { scroll: g, options: b } = m;
        m !== this.root &&
          g &&
          b.layoutScroll &&
          (g.wasRoot && $e(h, d), Gi(h.x, g.offset.x), Gi(h.y, g.offset.y));
      }
      return h;
    }
    applyTransform(d, h = !1) {
      const p = Qt();
      $e(p, d);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        (!h &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          Xi(p, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          Qa(g.latestValues) && Xi(p, g.latestValues));
      }
      return (Qa(this.latestValues) && Xi(p, this.latestValues), p);
    }
    removeTransform(d) {
      const h = Qt();
      $e(h, d);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        if (!m.instance || !Qa(m.latestValues)) continue;
        _f(m.latestValues) && m.updateSnapshot();
        const g = Qt(),
          b = m.measurePageBox();
        ($e(g, b),
          Py(h, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g));
      }
      return (Qa(this.latestValues) && Py(h, this.latestValues), h);
    }
    setTargetDelta(d) {
      ((this.targetDelta = d),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== he.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      const h = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = h.isSharedProjectionDirty));
      const p = !!this.resumingFrom || this !== h;
      if (
        !(
          d ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: g, layoutId: b } = this.options;
      if (!(!this.layout || !(g || b))) {
        if (
          ((this.resolvedRelativeTargetAt = he.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Qt()),
              (this.relativeTargetOrigin = Qt()),
              ds(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                x.layout.layoutBox,
              ),
              $e(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Qt()), (this.targetWithTransforms = Qt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              k2(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : $e(this.target, this.layout.layoutBox),
                lb(this.target, this.targetDelta))
              : $e(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const x = this.getClosestProjectingParent();
          x &&
          !!x.resumingFrom == !!this.resumingFrom &&
          !x.options.layoutScroll &&
          x.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Qt()),
              (this.relativeTargetOrigin = Qt()),
              ds(this.relativeTargetOrigin, this.target, x.target),
              $e(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          _f(this.parent.latestValues) ||
          ib(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      const d = this.getLead(),
        h = !!this.resumingFrom || this !== d;
      let p = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1),
        h &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === he.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: m, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || g))
      )
        return;
      $e(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        x = this.treeScale.y;
      (t2(this.layoutCorrected, this.treeScale, this.path, h),
        d.layout &&
          !d.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((d.target = d.layout.layoutBox), (d.targetWithTransforms = Qt())));
      const { target: E } = d;
      if (!E) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ky(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ky(this.prevProjectionDelta.y, this.projectionDelta.y)),
        fs(this.projectionDelta, this.layoutCorrected, E, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== x ||
          !Iy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Iy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", E)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      if ((this.options.visualElement?.scheduleRender(), d)) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Ki()),
        (this.projectionDelta = Ki()),
        (this.projectionDeltaWithTransform = Ki()));
    }
    setAnimationOrigin(d, h = !1) {
      const p = this.snapshot,
        m = p ? p.latestValues : {},
        g = { ...this.latestValues },
        b = Ki();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !h));
      const x = Qt(),
        E = p ? p.source : void 0,
        C = this.layout ? this.layout.source : void 0,
        O = E !== C,
        M = this.getStack(),
        z = !M || M.members.length <= 1,
        L = !!(O && !z && this.options.crossfade === !0 && !this.path.some(Vw));
      this.animationProgress = 0;
      let B;
      ((this.mixTargetDelta = (Z) => {
        const j = Z / 1e3;
        (av(b.x, d.x, j),
          av(b.y, d.y, j),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ds(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            zw(this.relativeTarget, this.relativeTargetOrigin, x, j),
            B && yw(this.relativeTarget, B) && (this.isProjectionDirty = !1),
            B || (B = Qt()),
            $e(B, this.relativeTarget)),
          O &&
            ((this.animationValues = g), fw(g, m, this.latestValues, j, L, z)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = j));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(d) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (Ta(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ut.update(() => {
          ((fo.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Pi(0)),
            (this.currentAnimation = sw(this.motionValue, [0, 1e3], {
              ...d,
              velocity: 0,
              isSync: !0,
              onUpdate: (h) => {
                (this.mixTargetDelta(h), d.onUpdate && d.onUpdate(h));
              },
              onStop: () => {},
              onComplete: () => {
                (d.onComplete && d.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const d = this.getStack();
      (d && d.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Sw),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let {
        targetWithTransforms: h,
        target: p,
        layout: m,
        latestValues: g,
      } = d;
      if (!(!h || !p || !m)) {
        if (
          this !== d &&
          this.layout &&
          m &&
          Mb(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          p = this.target || Qt();
          const b = Ee(this.layout.layoutBox.x);
          ((p.x.min = d.target.x.min), (p.x.max = p.x.min + b));
          const x = Ee(this.layout.layoutBox.y);
          ((p.y.min = d.target.y.min), (p.y.max = p.y.min + x));
        }
        ($e(h, p),
          Xi(h, g),
          fs(this.projectionDeltaWithTransform, this.layoutCorrected, h, g));
      }
    }
    registerSharedNode(d, h) {
      (this.sharedNodes.has(d) || this.sharedNodes.set(d, new vw()),
        this.sharedNodes.get(d).add(h));
      const m = h.options.initialPromotionConfig;
      h.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(h)
            : void 0,
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d) return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: h, preserveFollowOpacity: p } = {}) {
      const m = this.getStack();
      (m && m.promote(this, p),
        d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        h && this.setOptions({ transition: h }));
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d) return;
      let h = !1;
      const { latestValues: p } = d;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (h = !0),
        !h)
      )
        return;
      const m = {};
      p.z && df("z", d, m, this.animationValues);
      for (let g = 0; g < ff.length; g++)
        (df(`rotate${ff[g]}`, d, m, this.animationValues),
          df(`skew${ff[g]}`, d, m, this.animationValues));
      d.render();
      for (const g in m)
        (d.setStaticValue(g, m[g]),
          this.animationValues && (this.animationValues[g] = m[g]));
      d.scheduleRender();
    }
    applyProjectionStyles(d, h) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (d.visibility = ""),
          (d.opacity = ""),
          (d.pointerEvents = co(h?.pointerEvents) || ""),
          (d.transform = p ? p(this.latestValues, "") : "none"));
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        (this.options.layoutId &&
          ((d.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (d.pointerEvents = co(h?.pointerEvents) || "")),
          this.hasProjected &&
            !Qa(this.latestValues) &&
            ((d.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      d.visibility = "";
      const g = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let b = bw(this.projectionDeltaWithTransform, this.treeScale, g);
      (p && (b = p(g, b)), (d.transform = b));
      const { x, y: E } = this.projectionDelta;
      ((d.transformOrigin = `${x.origin * 100}% ${E.origin * 100}% 0`),
        m.animationValues
          ? (d.opacity =
              m === this
                ? (g.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : g.opacityExit)
          : (d.opacity =
              m === this
                ? g.opacity !== void 0
                  ? g.opacity
                  : ""
                : g.opacityExit !== void 0
                  ? g.opacityExit
                  : 0));
      for (const C in xs) {
        if (g[C] === void 0) continue;
        const { correct: O, applyTo: M, isCSSVariable: z } = xs[C],
          L = b === "none" ? g[C] : O(g[C], m);
        if (M) {
          const B = M.length;
          for (let Z = 0; Z < B; Z++) d[M[Z]] = L;
        } else
          z ? (this.options.visualElement.renderState.vars[C] = L) : (d[C] = L);
      }
      this.options.layoutId &&
        (d.pointerEvents = m === this ? co(h?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((d) => d.currentAnimation?.stop()),
        this.root.nodes.forEach(tv),
        this.root.sharedNodes.clear());
    }
  };
}
function Tw(n) {
  n.updateLayout();
}
function Ew(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: r } = n.layout,
      { animationType: u } = n.options,
      f = i.source !== n.layout.source;
    u === "size"
      ? We((g) => {
          const b = f ? i.measuredBox[g] : i.layoutBox[g],
            x = Ee(b);
          ((b.min = s[g].min), (b.max = b.min + x));
        })
      : Mb(u, i.layoutBox, s) &&
        We((g) => {
          const b = f ? i.measuredBox[g] : i.layoutBox[g],
            x = Ee(s[g]);
          ((b.max = b.min + x),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[g].max = n.relativeTarget[g].min + x)));
        });
    const d = Ki();
    fs(d, s, i.layoutBox);
    const h = Ki();
    f ? fs(h, n.applyTransform(r, !0), i.measuredBox) : fs(h, s, i.layoutBox);
    const p = !Ab(d);
    let m = !1;
    if (!n.resumeFrom) {
      const g = n.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: b, layout: x } = g;
        if (b && x) {
          const E = Qt();
          ds(E, i.layoutBox, b.layoutBox);
          const C = Qt();
          (ds(C, s, x.layoutBox),
            Db(E, C) || (m = !0),
            g.options.layoutRoot &&
              ((n.relativeTarget = C),
              (n.relativeTargetOrigin = E),
              (n.relativeParent = g)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: s,
      snapshot: i,
      delta: h,
      layoutDelta: d,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: m,
    });
  } else if (n.isLead()) {
    const { onExitComplete: s } = n.options;
    s && s();
  }
  n.options.transition = void 0;
}
function Aw(n) {
  n.parent &&
    (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function Dw(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function Rw(n) {
  n.clearSnapshot();
}
function tv(n) {
  n.clearMeasurements();
}
function ev(n) {
  n.isLayoutDirty = !1;
}
function ww(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform());
}
function nv(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function Mw(n) {
  n.resolveTargetDelta();
}
function Cw(n) {
  n.calcProjection();
}
function Ow(n) {
  n.resetSkewAndRotation();
}
function Nw(n) {
  n.removeLeadSnapshot();
}
function av(n, i, s) {
  ((n.translate = _t(i.translate, 0, s)),
    (n.scale = _t(i.scale, 1, s)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint));
}
function iv(n, i, s, r) {
  ((n.min = _t(i.min, s.min, r)), (n.max = _t(i.max, s.max, r)));
}
function zw(n, i, s, r) {
  (iv(n.x, i.x, s.x, r), iv(n.y, i.y, s.y, r));
}
function Vw(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const Lw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  lv = (n) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  sv = lv("applewebkit/") && !lv("chrome/") ? Math.round : en;
function rv(n) {
  ((n.min = sv(n.min)), (n.max = sv(n.max)));
}
function Uw(n) {
  (rv(n.x), rv(n.y));
}
function Mb(n, i, s) {
  return (
    n === "position" || (n === "preserve-aspect" && !q2(Wy(i), Wy(s), 0.2))
  );
}
function Bw(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const _w = wb({
    attachResizeListener: (n, i) => Ts(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  hf = { current: void 0 },
  Cb = wb({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!hf.current) {
        const n = new _w({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (hf.current = n));
      }
      return hf.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  jw = {
    pan: { Feature: nw },
    drag: { Feature: ew, ProjectionNode: Cb, MeasureLayout: xb },
  };
function ov(n, i, s) {
  const { props: r } = n;
  n.animationState &&
    r.whileHover &&
    n.animationState.setActive("whileHover", s === "Start");
  const u = "onHover" + s,
    f = r[u];
  f && Ut.postRender(() => f(i, zs(i)));
}
class Hw extends Aa {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = lR(
        i,
        (s, r) => (ov(this.node, r, "Start"), (u) => ov(this.node, u, "End")),
      ));
  }
  unmount() {}
}
class Yw extends Aa {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Cs(
      Ts(this.node.current, "focus", () => this.onFocus()),
      Ts(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function uv(n, i, s) {
  const { props: r } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState &&
    r.whileTap &&
    n.animationState.setActive("whileTap", s === "Start");
  const u = "onTap" + (s === "End" ? "" : s),
    f = r[u];
  f && Ut.postRender(() => f(i, zs(i)));
}
class qw extends Aa {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = uR(
        i,
        (s, r) => (
          uv(this.node, r, "Start"),
          (u, { success: f }) => uv(this.node, u, f ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Xf = new WeakMap(),
  mf = new WeakMap(),
  kw = (n) => {
    const i = Xf.get(n.target);
    i && i(n);
  },
  Gw = (n) => {
    n.forEach(kw);
  };
function Xw({ root: n, ...i }) {
  const s = n || document;
  mf.has(s) || mf.set(s, {});
  const r = mf.get(s),
    u = JSON.stringify(i);
  return (
    r[u] || (r[u] = new IntersectionObserver(Gw, { root: n, ...i })),
    r[u]
  );
}
function Kw(n, i, s) {
  const r = Xw(i);
  return (
    Xf.set(n, s),
    r.observe(n),
    () => {
      (Xf.delete(n), r.unobserve(n));
    }
  );
}
const Zw = { some: 0, all: 1 };
class Qw extends Aa {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: s, margin: r, amount: u = "some", once: f } = i,
      d = {
        root: s ? s.current : void 0,
        rootMargin: r,
        threshold: typeof u == "number" ? u : Zw[u],
      },
      h = (p) => {
        const { isIntersecting: m } = p;
        if (
          this.isInView === m ||
          ((this.isInView = m), f && !m && this.hasEnteredView)
        )
          return;
        (m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m));
        const { onViewportEnter: g, onViewportLeave: b } = this.node.getProps(),
          x = m ? g : b;
        x && x(p);
      };
    return Kw(this.node.current, d, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(Pw(i, s)) && this.startObserver();
  }
  unmount() {}
}
function Pw({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const Fw = {
    inView: { Feature: Qw },
    tap: { Feature: qw },
    focus: { Feature: Yw },
    hover: { Feature: Hw },
  },
  Jw = { layout: { ProjectionNode: Cb, MeasureLayout: xb } },
  $w = { ...U2, ...Fw, ...jw, ...Jw },
  Kf = $R($w, c2),
  cv = [
    "Keep pushing forward, you’re closer than you think 🚀",
    "Consistency beats motivation every single time 💡",
    "Believe in yourself and all that you are ✨",
    "Every step you take is progress, no matter how small 👣",
    "Dream big. Start small. Act now ⚡",
    "Your hard work will pay off 🌟",
    "Focus on progress, not perfection 🎯",
    "Success doesn’t come from what you do occasionally, but what you do consistently 🔑",
    "Turn your ‘can’t’ into ‘can’, and your dreams into plans 📌",
    "Don’t stop when you’re tired. Stop when you’re done 🏁",
    "Challenges are what make life interesting; overcoming them is what makes life meaningful 🌿",
    "Do something today that your future self will thank you for 💎",
    "Start where you are. Use what you have. Do what you can 🔥",
    "The secret of getting ahead is getting started 🌱",
    "Push yourself, because no one else is going to do it for you 💪",
  ];
function Ww() {
  const n = S.useMemo(() => cv[Math.floor(Math.random() * cv.length)], []);
  return X.jsx(Kf.div, {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
    className: `my-8 mb-16 px-8 py-10 w-full  leading-8 rounded-2xl text-center text-lg sm:text-xl font-medium italic
                 bg-white/80 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100
                 shadow-md backdrop-blur-md border border-gray-200 dark:border-gray-700`,
    children: n,
  });
}
function Iw({
  tasks: n,
  setTasks: i,
  addTask: s,
  clearTasks: r,
  theme: u,
  toggleTheme: f,
}) {
  return X.jsxs("div", {
    children: [
      X.jsx(Ww, {}),
      X.jsxs("h3", {
        className: "text-xl sm:text-4xl font-medium mt-4 w-full -ml-3",
        children: [
          X.jsx("span", {
            className: "mx-2 text-red-600 font-medium",
            children: "|",
          }),
          "Your To",
          X.jsx("span", { className: "text-red-600", children: "-" }),
          "Do",
          X.jsx("span", { className: "text-red-600", children: "'" }),
          "s",
        ],
      }),
      X.jsx(MT, { onAdd: s }),
      X.jsx(gA, { tasks: n }),
      X.jsx(pA, { tasks: n, setTasks: i }),
      n.length > 0 &&
        X.jsx("button", {
          onClick: r,
          className:
            "mt-3 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors capitalize",
          children: "Clear All",
        }),
    ],
  });
}
const fv = {
    yellow: "bg-yellow-200",
    red: "bg-red-200",
    gray: "bg-gray-200 dark:bg-gray-400",
    emerald: "bg-emerald-200",
  },
  tM = ({ color: n, task: i, onDelete: s }) =>
    X.jsxs("div", {
      className:
        "relative p-6 max-h-[70px] rounded-md shadow-md flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800",
      children: [
        " ",
        X.jsx("div", {
          className: `h-4 w-full absolute left-0 top-0 right-0 rounded-t-md ${fv[n] || fv.gray} `,
        }),
        " ",
        X.jsx("div", {
          className:
            "absolute top-[-5px] right-1 font-semibold text-lg text-black hover:text-accent-red transition-colors duration-300 cursor-pointer",
          onClick: () => s(i.id),
          children: "×",
        }),
        X.jsx("span", { className: "mt-3 capitalize", children: i.title }),
        " ",
      ],
    }),
  ao = {
    red: "bg-red-500 shadow-red-900",
    emerald: "bg-emerald-500 shadow-emerald-900",
    yellow: "bg-yellow-500 shadow-yellow-900",
    gray: "bg-gray-500 shadow-gray-900",
  },
  io = ({
    className: n,
    color: i,
    summery: s,
    examples: r,
    title: u,
    toggleModal: f,
    tasks: d,
    onDelete: h,
  }) => {
    const p = d.filter((m) => m.cell === u);
    return (
      console.log(p),
      X.jsx(X.Fragment, {
        children: X.jsxs("div", {
          className: `border border-gray-200 rounded-xl p-5 ${n || ""} hover:border-gray-300 transition-colors duration-300 dark:border-gray-400 dark:hover:border-gray-200 flex flex-col items-start gap-3`,
          children: [
            X.jsxs("div", {
              className: "flex items-center justify-start gap-4 mb-2",
              children: [
                X.jsx("div", {
                  className: `w-4 rounded-full ${ao[i] || ao.gray} h-4 shadow-xl shadow-${ao[i] || ao.gray}-900`,
                }),
                X.jsx("h4", {
                  className:
                    "font-semibold capitalize text-black dark:text-gray-100",
                  children: u,
                }),
                X.jsxs("span", {
                  className: "text-gray-400 capitalize",
                  children: ["(", s, ")"],
                }),
              ],
            }),
            X.jsx("p", { className: "text-gray-500", children: r }),
            X.jsx("div", {
              className:
                "flex gap-3 mt-4 overflow-y-auto flex-wrap max-h-40 w-full flex-1",
              children: p.map((m) =>
                X.jsx(tM, { task: m, color: i, onDelete: h }, m.id),
              ),
            }),
            X.jsx("button", {
              className:
                "mt-auto border-2 border-gray-200 w-full p-2 py-3 rounded-xl border-dashed hover:border-gray-400 cursor-pointer transition-colors duration-300 text-gray-500 hover:text-black font-semibold dark:border-gray-400 dark:hover:border-gray-200 dark:hover:text-gray-200",
              onClick: () => f(u),
              children: "Add Task",
            }),
          ],
        }),
      })
    );
  };
function eM({ toggleModal: n, cell: i, onAdd: s }) {
  const [r, u] = S.useState(""),
    f = (d) => {
      if ((d.preventDefault(), !r)) return;
      const h = { id: crypto.randomUUID(), title: r, cell: i };
      (s(h), u(""), n());
    };
  return X.jsx("div", {
    children: X.jsx(bR, {
      children: X.jsx(Kf.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className:
          "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        onClick: n,
        children: X.jsxs(Kf.div, {
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.8, opacity: 0 },
          transition: { duration: 0.2 },
          className:
            "bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-6 relative",
          onClick: (d) => d.stopPropagation(),
          children: [
            X.jsx("h3", {
              className:
                "text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4",
              children: "Add New Task",
            }),
            X.jsxs("form", {
              onSubmit: f,
              className: "flex flex-col gap-4",
              children: [
                X.jsx("input", {
                  type: "text",
                  value: r,
                  onChange: (d) => u(d.target.value),
                  placeholder: "Enter your task...",
                  className:
                    "border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white",
                }),
                X.jsxs("div", {
                  className: "flex justify-end gap-2",
                  children: [
                    X.jsx("button", {
                      type: "button",
                      onClick: n,
                      className:
                        "px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition",
                      children: "Cancel",
                    }),
                    X.jsx("button", {
                      type: "submit",
                      className: `px-4 py-2 rounded-lg transition text-white 
                                            ${r.trim().length === 0 ? "bg-red-300 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`,
                      disabled: !r.trim(),
                      children: "Add",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
const nM = () => {
    const [n, i] = S.useState(!1),
      [s, r] = S.useState(null),
      [u, f] = S.useState(
        JSON.parse(localStorage.getItem("eisenhowerTasks")) || [],
      );
    function d(m) {
      (i((g) => !g), r(m));
    }
    function h(m) {
      const g = [...u, m];
      (localStorage.setItem("eisenhowerTasks", JSON.stringify(g)), f(g));
    }
    function p(m) {
      const g = u.filter((b) => b.id !== m);
      (localStorage.setItem("eisenhowerTasks", JSON.stringify(g)), f(g));
    }
    return X.jsxs(X.Fragment, {
      children: [
        n && X.jsx(eM, { toggleModal: d, cell: s, onAdd: h }),
        X.jsxs("div", {
          className:
            "grid grid-cols-1 lg:grid-cols-2 items-center my-10 lg:full-height gap-5 gap-y-7",
          children: [
            X.jsx(io, {
              toggleModal: d,
              tasks: u,
              onDelete: p,
              className: "h-full ",
              examples:
                "Crises, deadlines, problems, Focus on these tasks first.",
              title: "Urgent & important",
              summery: "Do",
              color: "red",
            }),
            X.jsx(io, {
              toggleModal: d,
              tasks: u,
              onDelete: p,
              className: "h-full",
              examples: "Long-term goals, Planning, Build new habits.",
              title: "Not Urgent & important",
              summery: "Schedule",
              color: "emerald",
            }),
            X.jsx(io, {
              toggleModal: d,
              tasks: u,
              onDelete: p,
              className: "h-full",
              examples:
                "Interruptions, some meeting, assignments, other priorities.",
              title: "Urgent & Not important",
              summery: "Delegate",
              color: "yellow",
            }),
            X.jsx(io, {
              toggleModal: d,
              tasks: u,
              onDelete: p,
              className: "h-full",
              examples: "Distractions, time-wasters.",
              title: "Not Urgent & Not important",
              summery: "Eliminate",
            }),
          ],
        }),
      ],
    });
  },
  aM = ({ theme: n, toggleTheme: i }) =>
    X.jsxs("label", {
      className: "absolute right-5 top-5 inline-block w-12 h-6 z-10",
      children: [
        X.jsx("input", {
          type: "checkbox",
          onChange: i,
          checked: n === "dark",
          className: "opacity-0 w-0 h-0 peer",
        }),
        X.jsx("span", {
          className:
            "absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 peer-checked:bg-red-600",
        }),
        X.jsx("span", {
          className:
            "absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6",
        }),
      ],
    });
function iM() {
  const [n, i] = S.useState(JSON.parse(localStorage.getItem("tasks")) || []),
    [s, r] = S.useState(localStorage.getItem("theme") || "light");
  function u(h) {
    i((p) => {
      const m = [...p, h];
      return (localStorage.setItem("tasks", JSON.stringify(m)), m);
    });
  }
  function f() {
    (i([]), localStorage.setItem("tasks", JSON.stringify([])));
  }
  function d() {
    r((h) => (h === "light" ? "dark" : "light"));
  }
  return (
    S.useEffect(() => {
      (localStorage.setItem("theme", s),
        s === "dark"
          ? document.body.classList.add("dark")
          : document.body.classList.remove("dark"));
    }, [s]),
    X.jsx(rT, {
      children: X.jsxs("div", {
        className:
          s === "light"
            ? "bg-white text-black flex min-h-screen"
            : "bg-body-bg-dark text-white flex",
        children: [
          X.jsx(wT, {}),
          X.jsx(aM, { theme: s, toggleTheme: d }),
          X.jsx("main", {
            className: "flex-1 px-5 p-6 full-width md:px-20 relative ",
            children: X.jsxs(jx, {
              children: [
                X.jsx(gf, {
                  path: "/",
                  element: X.jsx(Iw, {
                    tasks: n,
                    setTasks: i,
                    addTask: u,
                    clearTasks: f,
                    theme: s,
                    toggleTheme: d,
                  }),
                }),
                X.jsx(gf, { path: "/eisenhower", element: X.jsx(nM, {}) }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
Q1.createRoot(document.getElementById("root")).render(
  X.jsx(S.StrictMode, { children: X.jsx(iM, {}) }),
);
