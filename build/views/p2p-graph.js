"use strict";
require = function () { return function n(t, e, r) { function i(u, a) { if (!e[u]) {
    if (!t[u]) {
        var c = "function" == typeof require && require;
        if (!a && c)
            return c(u, !0);
        if (o)
            return o(u, !0);
        var l = new Error("Cannot find module '" + u + "'");
        throw l.code = "MODULE_NOT_FOUND", l;
    }
    var s = e[u] = { exports: {} };
    t[u][0].call(s.exports, function (n) { return i(t[u][1][n] || n); }, s, s.exports, n, t, e, r);
} return e[u].exports; } for (var o = "function" == typeof require && require, u = 0; u < r.length; u++)
    i(r[u]); return i; }; }()({ 1: [function (n, t, e) { var r = Object.create || function (n) { var t = function () { }; return t.prototype = n, new t; }, i = Object.keys || function (n) { var t = []; for (var e in n)
            Object.prototype.hasOwnProperty.call(n, e) && t.push(e); return e; }, o = Function.prototype.bind || function (n) { var t = this; return function () { return t.apply(n, arguments); }; }; function u() { this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = r(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; } t.exports = u, u.EventEmitter = u, u.prototype._events = void 0, u.prototype._maxListeners = void 0; var a, c = 10; try {
            var l = {};
            Object.defineProperty && Object.defineProperty(l, "x", { value: 0 }), a = 0 === l.x;
        }
        catch (n) {
            a = !1;
        } function s(n) { return void 0 === n._maxListeners ? u.defaultMaxListeners : n._maxListeners; } function f(n, t, e, i) { var o, u, a; if ("function" != typeof e)
            throw new TypeError('"listener" argument must be a function'); if ((u = n._events) ? (u.newListener && (n.emit("newListener", t, e.listener ? e.listener : e), u = n._events), a = u[t]) : (u = n._events = r(null), n._eventsCount = 0), a) {
            if ("function" == typeof a ? a = u[t] = i ? [e, a] : [a, e] : i ? a.unshift(e) : a.push(e), !a.warned && (o = s(n)) && o > 0 && a.length > o) {
                a.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + a.length + ' "' + String(t) + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
                c.name = "MaxListenersExceededWarning", c.emitter = n, c.type = t, c.count = a.length, "object" == typeof console && console.warn && console.warn("%s: %s", c.name, c.message);
            }
        }
        else
            a = u[t] = e, ++n._eventsCount; return n; } function h() { if (!this.fired)
            switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length) {
                case 0: return this.listener.call(this.target);
                case 1: return this.listener.call(this.target, arguments[0]);
                case 2: return this.listener.call(this.target, arguments[0], arguments[1]);
                case 3: return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
                default:
                    for (var n = new Array(arguments.length), t = 0; t < n.length; ++t)
                        n[t] = arguments[t];
                    this.listener.apply(this.target, n);
            } } function p(n, t, e) { var r = { fired: !1, wrapFn: void 0, target: n, type: t, listener: e }, i = o.call(h, r); return i.listener = e, r.wrapFn = i, i; } function d(n, t, e) { var r = n._events; if (!r)
            return []; var i = r[t]; return i ? "function" == typeof i ? e ? [i.listener || i] : [i] : e ? function (n) { for (var t = new Array(n.length), e = 0; e < t.length; ++e)
            t[e] = n[e].listener || n[e]; return t; }(i) : v(i, i.length) : []; } function g(n) { var t = this._events; if (t) {
            var e = t[n];
            if ("function" == typeof e)
                return 1;
            if (e)
                return e.length;
        } return 0; } function v(n, t) { for (var e = new Array(t), r = 0; r < t; ++r)
            e[r] = n[r]; return e; } a ? Object.defineProperty(u, "defaultMaxListeners", { enumerable: !0, get: function () { return c; }, set: function (n) { if ("number" != typeof n || n < 0 || n != n)
                throw new TypeError('"defaultMaxListeners" must be a positive number'); c = n; } }) : u.defaultMaxListeners = c, u.prototype.setMaxListeners = function (n) { if ("number" != typeof n || n < 0 || isNaN(n))
            throw new TypeError('"n" argument must be a positive number'); return this._maxListeners = n, this; }, u.prototype.getMaxListeners = function () { return s(this); }, u.prototype.emit = function (n) { var t, e, r, i, o, u, a = "error" === n; if (u = this._events)
            a = a && null == u.error;
        else if (!a)
            return !1; if (a) {
            if (arguments.length > 1 && (t = arguments[1]), t instanceof Error)
                throw t;
            var c = new Error('Unhandled "error" event. (' + t + ")");
            throw c.context = t, c;
        } if (!(e = u[n]))
            return !1; var l = "function" == typeof e; switch (r = arguments.length) {
            case 1:
                !function (n, t, e) { if (t)
                    n.call(e);
                else
                    for (var r = n.length, i = v(n, r), o = 0; o < r; ++o)
                        i[o].call(e); }(e, l, this);
                break;
            case 2:
                !function (n, t, e, r) { if (t)
                    n.call(e, r);
                else
                    for (var i = n.length, o = v(n, i), u = 0; u < i; ++u)
                        o[u].call(e, r); }(e, l, this, arguments[1]);
                break;
            case 3:
                !function (n, t, e, r, i) { if (t)
                    n.call(e, r, i);
                else
                    for (var o = n.length, u = v(n, o), a = 0; a < o; ++a)
                        u[a].call(e, r, i); }(e, l, this, arguments[1], arguments[2]);
                break;
            case 4:
                !function (n, t, e, r, i, o) { if (t)
                    n.call(e, r, i, o);
                else
                    for (var u = n.length, a = v(n, u), c = 0; c < u; ++c)
                        a[c].call(e, r, i, o); }(e, l, this, arguments[1], arguments[2], arguments[3]);
                break;
            default:
                for (i = new Array(r - 1), o = 1; o < r; o++)
                    i[o - 1] = arguments[o];
                !function (n, t, e, r) { if (t)
                    n.apply(e, r);
                else
                    for (var i = n.length, o = v(n, i), u = 0; u < i; ++u)
                        o[u].apply(e, r); }(e, l, this, i);
        } return !0; }, u.prototype.addListener = function (n, t) { return f(this, n, t, !1); }, u.prototype.on = u.prototype.addListener, u.prototype.prependListener = function (n, t) { return f(this, n, t, !0); }, u.prototype.once = function (n, t) { if ("function" != typeof t)
            throw new TypeError('"listener" argument must be a function'); return this.on(n, p(this, n, t)), this; }, u.prototype.prependOnceListener = function (n, t) { if ("function" != typeof t)
            throw new TypeError('"listener" argument must be a function'); return this.prependListener(n, p(this, n, t)), this; }, u.prototype.removeListener = function (n, t) { var e, i, o, u, a; if ("function" != typeof t)
            throw new TypeError('"listener" argument must be a function'); if (!(i = this._events))
            return this; if (!(e = i[n]))
            return this; if (e === t || e.listener === t)
            0 == --this._eventsCount ? this._events = r(null) : (delete i[n], i.removeListener && this.emit("removeListener", n, e.listener || t));
        else if ("function" != typeof e) {
            for (o = -1, u = e.length - 1; u >= 0; u--)
                if (e[u] === t || e[u].listener === t) {
                    a = e[u].listener, o = u;
                    break;
                }
            if (o < 0)
                return this;
            0 === o ? e.shift() : function (n, t) { for (var e = t, r = e + 1, i = n.length; r < i; e += 1, r += 1)
                n[e] = n[r]; n.pop(); }(e, o), 1 === e.length && (i[n] = e[0]), i.removeListener && this.emit("removeListener", n, a || t);
        } return this; }, u.prototype.removeAllListeners = function (n) { var t, e, o; if (!(e = this._events))
            return this; if (!e.removeListener)
            return 0 === arguments.length ? (this._events = r(null), this._eventsCount = 0) : e[n] && (0 == --this._eventsCount ? this._events = r(null) : delete e[n]), this; if (0 === arguments.length) {
            var u, a = i(e);
            for (o = 0; o < a.length; ++o)
                "removeListener" !== (u = a[o]) && this.removeAllListeners(u);
            return this.removeAllListeners("removeListener"), this._events = r(null), this._eventsCount = 0, this;
        } if ("function" == typeof (t = e[n]))
            this.removeListener(n, t);
        else if (t)
            for (o = t.length - 1; o >= 0; o--)
                this.removeListener(n, t[o]); return this; }, u.prototype.listeners = function (n) { return d(this, n, !0); }, u.prototype.rawListeners = function (n) { return d(this, n, !1); }, u.listenerCount = function (n, t) { return "function" == typeof n.listenerCount ? n.listenerCount(t) : g.call(n, t); }, u.prototype.listenerCount = g, u.prototype.eventNames = function () { return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []; }; }, {}], 2: [function (n, t, e) { var r, i, o = t.exports = {}; function u() { throw new Error("setTimeout has not been defined"); } function a() { throw new Error("clearTimeout has not been defined"); } function c(n) { if (r === setTimeout)
            return setTimeout(n, 0); if ((r === u || !r) && setTimeout)
            return r = setTimeout, setTimeout(n, 0); try {
            return r(n, 0);
        }
        catch (t) {
            try {
                return r.call(null, n, 0);
            }
            catch (t) {
                return r.call(this, n, 0);
            }
        } } !function () { try {
            r = "function" == typeof setTimeout ? setTimeout : u;
        }
        catch (n) {
            r = u;
        } try {
            i = "function" == typeof clearTimeout ? clearTimeout : a;
        }
        catch (n) {
            i = a;
        } }(); var l, s = [], f = !1, h = -1; function p() { f && l && (f = !1, l.length ? s = l.concat(s) : h = -1, s.length && d()); } function d() { if (!f) {
            var n = c(p);
            f = !0;
            for (var t = s.length; t;) {
                for (l = s, s = []; ++h < t;)
                    l && l[h].run();
                h = -1, t = s.length;
            }
            l = null, f = !1, function (n) { if (i === clearTimeout)
                return clearTimeout(n); if ((i === a || !i) && clearTimeout)
                return i = clearTimeout, clearTimeout(n); try {
                i(n);
            }
            catch (t) {
                try {
                    return i.call(null, n);
                }
                catch (t) {
                    return i.call(this, n);
                }
            } }(n);
        } } function g(n, t) { this.fun = n, this.array = t; } function v() { } o.nextTick = function (n) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
            for (var e = 1; e < arguments.length; e++)
                t[e - 1] = arguments[e]; s.push(new g(n, t)), 1 !== s.length || f || c(d); }, g.prototype.run = function () { this.fun.apply(null, this.array); }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function (n) { return []; }, o.binding = function (n) { throw new Error("process.binding is not supported"); }, o.cwd = function () { return "/"; }, o.chdir = function (n) { throw new Error("process.chdir is not supported"); }, o.umask = function () { return 0; }; }, {}], 3: [function (n, t, e) { !function () { var n = { version: "3.5.17" }, e = [].slice, r = function (n) { return e.call(n); }, i = this.document; function o(n) { return n && (n.ownerDocument || n.document || n).documentElement; } function u(n) { return n && (n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView); } if (i)
            try {
                r(i.documentElement.childNodes)[0].nodeType;
            }
            catch (n) {
                r = function (n) { for (var t = n.length, e = new Array(t); t--;)
                    e[t] = n[t]; return e; };
            } if (Date.now || (Date.now = function () { return +new Date; }), i)
            try {
                i.createElement("DIV").style.setProperty("opacity", 0, "");
            }
            catch (n) {
                var a = this.Element.prototype, c = a.setAttribute, l = a.setAttributeNS, s = this.CSSStyleDeclaration.prototype, f = s.setProperty;
                a.setAttribute = function (n, t) { c.call(this, n, t + ""); }, a.setAttributeNS = function (n, t, e) { l.call(this, n, t, e + ""); }, s.setProperty = function (n, t, e) { f.call(this, n, t + "", e); };
            } function h(n, t) { return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN; } function p(n) { return null === n ? NaN : +n; } function d(n) { return !isNaN(n); } function g(n) { return { left: function (t, e, r, i) { for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); r < i;) {
                var o = r + i >>> 1;
                n(t[o], e) < 0 ? r = o + 1 : i = o;
            } return r; }, right: function (t, e, r, i) { for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); r < i;) {
                var o = r + i >>> 1;
                n(t[o], e) > 0 ? i = o : r = o + 1;
            } return r; } }; } n.ascending = h, n.descending = function (n, t) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN; }, n.min = function (n, t) { var e, r, i = -1, o = n.length; if (1 === arguments.length) {
            for (; ++i < o;)
                if (null != (r = n[i]) && r >= r) {
                    e = r;
                    break;
                }
            for (; ++i < o;)
                null != (r = n[i]) && e > r && (e = r);
        }
        else {
            for (; ++i < o;)
                if (null != (r = t.call(n, n[i], i)) && r >= r) {
                    e = r;
                    break;
                }
            for (; ++i < o;)
                null != (r = t.call(n, n[i], i)) && e > r && (e = r);
        } return e; }, n.max = function (n, t) { var e, r, i = -1, o = n.length; if (1 === arguments.length) {
            for (; ++i < o;)
                if (null != (r = n[i]) && r >= r) {
                    e = r;
                    break;
                }
            for (; ++i < o;)
                null != (r = n[i]) && r > e && (e = r);
        }
        else {
            for (; ++i < o;)
                if (null != (r = t.call(n, n[i], i)) && r >= r) {
                    e = r;
                    break;
                }
            for (; ++i < o;)
                null != (r = t.call(n, n[i], i)) && r > e && (e = r);
        } return e; }, n.extent = function (n, t) { var e, r, i, o = -1, u = n.length; if (1 === arguments.length) {
            for (; ++o < u;)
                if (null != (r = n[o]) && r >= r) {
                    e = i = r;
                    break;
                }
            for (; ++o < u;)
                null != (r = n[o]) && (e > r && (e = r), i < r && (i = r));
        }
        else {
            for (; ++o < u;)
                if (null != (r = t.call(n, n[o], o)) && r >= r) {
                    e = i = r;
                    break;
                }
            for (; ++o < u;)
                null != (r = t.call(n, n[o], o)) && (e > r && (e = r), i < r && (i = r));
        } return [e, i]; }, n.sum = function (n, t) { var e, r = 0, i = n.length, o = -1; if (1 === arguments.length)
            for (; ++o < i;)
                d(e = +n[o]) && (r += e);
        else
            for (; ++o < i;)
                d(e = +t.call(n, n[o], o)) && (r += e); return r; }, n.mean = function (n, t) { var e, r = 0, i = n.length, o = -1, u = i; if (1 === arguments.length)
            for (; ++o < i;)
                d(e = p(n[o])) ? r += e : --u;
        else
            for (; ++o < i;)
                d(e = p(t.call(n, n[o], o))) ? r += e : --u; if (u)
            return r / u; }, n.quantile = function (n, t) { var e = (n.length - 1) * t + 1, r = Math.floor(e), i = +n[r - 1], o = e - r; return o ? i + o * (n[r] - i) : i; }, n.median = function (t, e) { var r, i = [], o = t.length, u = -1; if (1 === arguments.length)
            for (; ++u < o;)
                d(r = p(t[u])) && i.push(r);
        else
            for (; ++u < o;)
                d(r = p(e.call(t, t[u], u))) && i.push(r); if (i.length)
            return n.quantile(i.sort(h), .5); }, n.variance = function (n, t) { var e, r, i = n.length, o = 0, u = 0, a = -1, c = 0; if (1 === arguments.length)
            for (; ++a < i;)
                d(e = p(n[a])) && (u += (r = e - o) * (e - (o += r / ++c)));
        else
            for (; ++a < i;)
                d(e = p(t.call(n, n[a], a))) && (u += (r = e - o) * (e - (o += r / ++c))); if (c > 1)
            return u / (c - 1); }, n.deviation = function () { var t = n.variance.apply(this, arguments); return t ? Math.sqrt(t) : t; }; var v = g(h); function y(n) { return n.length; } n.bisectLeft = v.left, n.bisect = n.bisectRight = v.right, n.bisector = function (n) { return g(1 === n.length ? function (t, e) { return h(n(t), e); } : n); }, n.shuffle = function (n, t, e) { (o = arguments.length) < 3 && (e = n.length, o < 2 && (t = 0)); for (var r, i, o = e - t; o;)
            i = Math.random() * o-- | 0, r = n[o + t], n[o + t] = n[i + t], n[i + t] = r; return n; }, n.permute = function (n, t) { for (var e = t.length, r = new Array(e); e--;)
            r[e] = n[t[e]]; return r; }, n.pairs = function (n) { for (var t = 0, e = n.length - 1, r = n[0], i = new Array(e < 0 ? 0 : e); t < e;)
            i[t] = [r, r = n[++t]]; return i; }, n.transpose = function (t) { if (!(o = t.length))
            return []; for (var e = -1, r = n.min(t, y), i = new Array(r); ++e < r;)
            for (var o, u = -1, a = i[e] = new Array(o); ++u < o;)
                a[u] = t[u][e]; return i; }, n.zip = function () { return n.transpose(arguments); }, n.keys = function (n) { var t = []; for (var e in n)
            t.push(e); return t; }, n.values = function (n) { var t = []; for (var e in n)
            t.push(n[e]); return t; }, n.entries = function (n) { var t = []; for (var e in n)
            t.push({ key: e, value: n[e] }); return t; }, n.merge = function (n) { for (var t, e, r, i = n.length, o = -1, u = 0; ++o < i;)
            u += n[o].length; for (e = new Array(u); --i >= 0;)
            for (t = (r = n[i]).length; --t >= 0;)
                e[--u] = r[t]; return e; }; var m = Math.abs; function x(n, t) { for (var e in t)
            Object.defineProperty(n.prototype, e, { value: t[e], enumerable: !1 }); } function M() { this._ = Object.create(null); } n.range = function (n, t, e) { if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), (t - n) / e == 1 / 0)
            throw new Error("infinite range"); var r, i = [], o = function (n) { var t = 1; for (; n * t % 1;)
            t *= 10; return t; }(m(e)), u = -1; if (n *= o, t *= o, (e *= o) < 0)
            for (; (r = n + e * ++u) > t;)
                i.push(r / o);
        else
            for (; (r = n + e * ++u) < t;)
                i.push(r / o); return i; }, n.map = function (n, t) { var e = new M; if (n instanceof M)
            n.forEach(function (n, t) { e.set(n, t); });
        else if (Array.isArray(n)) {
            var r, i = -1, o = n.length;
            if (1 === arguments.length)
                for (; ++i < o;)
                    e.set(i, n[i]);
            else
                for (; ++i < o;)
                    e.set(t.call(n, r = n[i], i), r);
        }
        else
            for (var u in n)
                e.set(u, n[u]); return e; }; var _ = "__proto__", w = "\0"; function b(n) { return (n += "") === _ || n[0] === w ? w + n : n; } function k(n) { return (n += "")[0] === w ? n.slice(1) : n; } function C(n) { return b(n) in this._; } function E(n) { return (n = b(n)) in this._ && delete this._[n]; } function N() { var n = []; for (var t in this._)
            n.push(k(t)); return n; } function S() { var n = 0; for (var t in this._)
            ++n; return n; } function A() { for (var n in this._)
            return !1; return !0; } function L() { this._ = Object.create(null); } function T(n) { return n; } function F(n, t, e) { return function () { var r = e.apply(t, arguments); return r === t ? n : r; }; } function z(n, t) { if (t in n)
            return t; t = t.charAt(0).toUpperCase() + t.slice(1); for (var e = 0, r = q.length; e < r; ++e) {
            var i = q[e] + t;
            if (i in n)
                return i;
        } } x(M, { has: C, get: function (n) { return this._[b(n)]; }, set: function (n, t) { return this._[b(n)] = t; }, remove: E, keys: N, values: function () { var n = []; for (var t in this._)
                n.push(this._[t]); return n; }, entries: function () { var n = []; for (var t in this._)
                n.push({ key: k(t), value: this._[t] }); return n; }, size: S, empty: A, forEach: function (n) { for (var t in this._)
                n.call(this, k(t), this._[t]); } }), n.nest = function () { var t, e, r = {}, i = [], o = []; function u(n, o, a) { if (a >= i.length)
            return e ? e.call(r, o) : t ? o.sort(t) : o; for (var c, l, s, f, h = -1, p = o.length, d = i[a++], g = new M; ++h < p;)
            (f = g.get(c = d(l = o[h]))) ? f.push(l) : g.set(c, [l]); return n ? (l = n(), s = function (t, e) { l.set(t, u(n, e, a)); }) : (l = {}, s = function (t, e) { l[t] = u(n, e, a); }), g.forEach(s), l; } return r.map = function (n, t) { return u(t, n, 0); }, r.entries = function (t) { return function n(t, e) { if (e >= i.length)
            return t; var r = [], u = o[e++]; return t.forEach(function (t, i) { r.push({ key: t, values: n(i, e) }); }), u ? r.sort(function (n, t) { return u(n.key, t.key); }) : r; }(u(n.map, t, 0), 0); }, r.key = function (n) { return i.push(n), r; }, r.sortKeys = function (n) { return o[i.length - 1] = n, r; }, r.sortValues = function (n) { return t = n, r; }, r.rollup = function (n) { return e = n, r; }, r; }, n.set = function (n) { var t = new L; if (n)
            for (var e = 0, r = n.length; e < r; ++e)
                t.add(n[e]); return t; }, x(L, { has: C, add: function (n) { return this._[b(n += "")] = !0, n; }, remove: E, values: N, size: S, empty: A, forEach: function (n) { for (var t in this._)
                n.call(this, k(t)); } }), n.behavior = {}, n.rebind = function (n, t) { for (var e, r = 1, i = arguments.length; ++r < i;)
            n[e = arguments[r]] = F(n, t, t[e]); return n; }; var q = ["webkit", "ms", "moz", "Moz", "o", "O"]; function D() { } function R() { } function j(n) { var t = [], e = new M; function r() { for (var e, r = t, i = -1, o = r.length; ++i < o;)
            (e = r[i].on) && e.apply(this, arguments); return n; } return r.on = function (r, i) { var o, u = e.get(r); return arguments.length < 2 ? u && u.on : (u && (u.on = null, t = t.slice(0, o = t.indexOf(u)).concat(t.slice(o + 1)), e.remove(r)), i && t.push(e.set(r, { on: i })), n); }, r; } function P() { n.event.preventDefault(); } function O() { for (var t, e = n.event; t = e.sourceEvent;)
            e = t; return e; } function U(t) { for (var e = new R, r = 0, i = arguments.length; ++r < i;)
            e[arguments[r]] = j(e); return e.of = function (r, i) { return function (o) { try {
            var u = o.sourceEvent = n.event;
            o.target = t, n.event = o, e[o.type].apply(r, i);
        }
        finally {
            n.event = u;
        } }; }, e; } n.dispatch = function () { for (var n = new R, t = -1, e = arguments.length; ++t < e;)
            n[arguments[t]] = j(n); return n; }, R.prototype.on = function (n, t) { var e = n.indexOf("."), r = ""; if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n)
            return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t); if (2 === arguments.length) {
            if (null == t)
                for (n in this)
                    this.hasOwnProperty(n) && this[n].on(r, null);
            return this;
        } }, n.event = null, n.requote = function (n) { return n.replace(I, "\\$&"); }; var I = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, H = {}.__proto__ ? function (n, t) { n.__proto__ = t; } : function (n, t) { for (var e in t)
            n[e] = t[e]; }; function Y(n) { return H(n, B), n; } var Z = function (n, t) { return t.querySelector(n); }, V = function (n, t) { return t.querySelectorAll(n); }, $ = function (n, t) { var e = n.matches || n[z(n, "matchesSelector")]; return ($ = function (n, t) { return e.call(n, t); })(n, t); }; "function" == typeof Sizzle && (Z = function (n, t) { return Sizzle(n, t)[0] || null; }, V = Sizzle, $ = Sizzle.matchesSelector), n.selection = function () { return n.select(i.documentElement); }; var B = n.selection.prototype = []; function X(n) { return "function" == typeof n ? n : function () { return Z(n, this); }; } function W(n) { return "function" == typeof n ? n : function () { return V(n, this); }; } B.select = function (n) { var t, e, r, i, o = []; n = X(n); for (var u = -1, a = this.length; ++u < a;) {
            o.push(t = []), t.parentNode = (r = this[u]).parentNode;
            for (var c = -1, l = r.length; ++c < l;)
                (i = r[c]) ? (t.push(e = n.call(i, i.__data__, c, u)), e && "__data__" in i && (e.__data__ = i.__data__)) : t.push(null);
        } return Y(o); }, B.selectAll = function (n) { var t, e, i = []; n = W(n); for (var o = -1, u = this.length; ++o < u;)
            for (var a = this[o], c = -1, l = a.length; ++c < l;)
                (e = a[c]) && (i.push(t = r(n.call(e, e.__data__, c, o))), t.parentNode = e); return Y(i); }; var J = "http://www.w3.org/1999/xhtml", G = { svg: "http://www.w3.org/2000/svg", xhtml: J, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" }; function K(t, e) { return t = n.ns.qualify(t), null == e ? t.local ? function () { this.removeAttributeNS(t.space, t.local); } : function () { this.removeAttribute(t); } : "function" == typeof e ? t.local ? function () { var n = e.apply(this, arguments); null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n); } : function () { var n = e.apply(this, arguments); null == n ? this.removeAttribute(t) : this.setAttribute(t, n); } : t.local ? function () { this.setAttributeNS(t.space, t.local, e); } : function () { this.setAttribute(t, e); }; } function Q(n) { return n.trim().replace(/\s+/g, " "); } function nn(t) { return new RegExp("(?:^|\\s+)" + n.requote(t) + "(?:\\s+|$)", "g"); } function tn(n) { return (n + "").trim().split(/^|\s+/); } function en(n, t) { var e = (n = tn(n).map(rn)).length; return "function" == typeof t ? function () { for (var r = -1, i = t.apply(this, arguments); ++r < e;)
            n[r](this, i); } : function () { for (var r = -1; ++r < e;)
            n[r](this, t); }; } function rn(n) { var t = nn(n); return function (e, r) { if (i = e.classList)
            return r ? i.add(n) : i.remove(n); var i = e.getAttribute("class") || ""; r ? (t.lastIndex = 0, t.test(i) || e.setAttribute("class", Q(i + " " + n))) : e.setAttribute("class", Q(i.replace(t, " "))); }; } function on(n, t, e) { return null == t ? function () { this.style.removeProperty(n); } : "function" == typeof t ? function () { var r = t.apply(this, arguments); null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e); } : function () { this.style.setProperty(n, t, e); }; } function un(n, t) { return null == t ? function () { delete this[n]; } : "function" == typeof t ? function () { var e = t.apply(this, arguments); null == e ? delete this[n] : this[n] = e; } : function () { this[n] = t; }; } function an(t) { return "function" == typeof t ? t : (t = n.ns.qualify(t)).local ? function () { return this.ownerDocument.createElementNS(t.space, t.local); } : function () { var n = this.ownerDocument, e = this.namespaceURI; return e === J && n.documentElement.namespaceURI === J ? n.createElement(t) : n.createElementNS(e, t); }; } function cn() { var n = this.parentNode; n && n.removeChild(this); } function ln(n) { return { __data__: n }; } function sn(n) { return function () { return $(this, n); }; } function fn(n, t) { for (var e = 0, r = n.length; e < r; e++)
            for (var i, o = n[e], u = 0, a = o.length; u < a; u++)
                (i = o[u]) && t(i, u, e); return n; } function hn(n) { return H(n, pn), n; } n.ns = { prefix: G, qualify: function (n) { var t = n.indexOf(":"), e = n; return t >= 0 && "xmlns" !== (e = n.slice(0, t)) && (n = n.slice(t + 1)), G.hasOwnProperty(e) ? { space: G[e], local: n } : n; } }, B.attr = function (t, e) { if (arguments.length < 2) {
            if ("string" == typeof t) {
                var r = this.node();
                return (t = n.ns.qualify(t)).local ? r.getAttributeNS(t.space, t.local) : r.getAttribute(t);
            }
            for (e in t)
                this.each(K(e, t[e]));
            return this;
        } return this.each(K(t, e)); }, B.classed = function (n, t) { if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node(), r = (n = tn(n)).length, i = -1;
                if (t = e.classList) {
                    for (; ++i < r;)
                        if (!t.contains(n[i]))
                            return !1;
                }
                else
                    for (t = e.getAttribute("class"); ++i < r;)
                        if (!nn(n[i]).test(t))
                            return !1;
                return !0;
            }
            for (t in n)
                this.each(en(t, n[t]));
            return this;
        } return this.each(en(n, t)); }, B.style = function (n, t, e) { var r = arguments.length; if (r < 3) {
            if ("string" != typeof n) {
                for (e in r < 2 && (t = ""), n)
                    this.each(on(e, n[e], t));
                return this;
            }
            if (r < 2) {
                var i = this.node();
                return u(i).getComputedStyle(i, null).getPropertyValue(n);
            }
            e = "";
        } return this.each(on(n, t, e)); }, B.property = function (n, t) { if (arguments.length < 2) {
            if ("string" == typeof n)
                return this.node()[n];
            for (t in n)
                this.each(un(t, n[t]));
            return this;
        } return this.each(un(n, t)); }, B.text = function (n) { return arguments.length ? this.each("function" == typeof n ? function () { var t = n.apply(this, arguments); this.textContent = null == t ? "" : t; } : null == n ? function () { this.textContent = ""; } : function () { this.textContent = n; }) : this.node().textContent; }, B.html = function (n) { return arguments.length ? this.each("function" == typeof n ? function () { var t = n.apply(this, arguments); this.innerHTML = null == t ? "" : t; } : null == n ? function () { this.innerHTML = ""; } : function () { this.innerHTML = n; }) : this.node().innerHTML; }, B.append = function (n) { return n = an(n), this.select(function () { return this.appendChild(n.apply(this, arguments)); }); }, B.insert = function (n, t) { return n = an(n), t = X(t), this.select(function () { return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null); }); }, B.remove = function () { return this.each(cn); }, B.data = function (n, t) { var e, r, i = -1, o = this.length; if (!arguments.length) {
            for (n = new Array(o = (e = this[0]).length); ++i < o;)
                (r = e[i]) && (n[i] = r.__data__);
            return n;
        } function u(n, e) { var r, i, o, u = n.length, s = e.length, f = Math.min(u, s), h = new Array(s), p = new Array(s), d = new Array(u); if (t) {
            var g, v = new M, y = new Array(u);
            for (r = -1; ++r < u;)
                (i = n[r]) && (v.has(g = t.call(i, i.__data__, r)) ? d[r] = i : v.set(g, i), y[r] = g);
            for (r = -1; ++r < s;)
                (i = v.get(g = t.call(e, o = e[r], r))) ? !0 !== i && (h[r] = i, i.__data__ = o) : p[r] = ln(o), v.set(g, !0);
            for (r = -1; ++r < u;)
                r in y && !0 !== v.get(y[r]) && (d[r] = n[r]);
        }
        else {
            for (r = -1; ++r < f;)
                i = n[r], o = e[r], i ? (i.__data__ = o, h[r] = i) : p[r] = ln(o);
            for (; r < s; ++r)
                p[r] = ln(e[r]);
            for (; r < u; ++r)
                d[r] = n[r];
        } p.update = h, p.parentNode = h.parentNode = d.parentNode = n.parentNode, a.push(p), c.push(h), l.push(d); } var a = hn([]), c = Y([]), l = Y([]); if ("function" == typeof n)
            for (; ++i < o;)
                u(e = this[i], n.call(e, e.parentNode.__data__, i));
        else
            for (; ++i < o;)
                u(e = this[i], n); return c.enter = function () { return a; }, c.exit = function () { return l; }, c; }, B.datum = function (n) { return arguments.length ? this.property("__data__", n) : this.property("__data__"); }, B.filter = function (n) { var t, e, r, i = []; "function" != typeof n && (n = sn(n)); for (var o = 0, u = this.length; o < u; o++) {
            i.push(t = []), t.parentNode = (e = this[o]).parentNode;
            for (var a = 0, c = e.length; a < c; a++)
                (r = e[a]) && n.call(r, r.__data__, a, o) && t.push(r);
        } return Y(i); }, B.order = function () { for (var n = -1, t = this.length; ++n < t;)
            for (var e, r = this[n], i = r.length - 1, o = r[i]; --i >= 0;)
                (e = r[i]) && (o && o !== e.nextSibling && o.parentNode.insertBefore(e, o), o = e); return this; }, B.sort = function (n) { n = function (n) { arguments.length || (n = h); return function (t, e) { return t && e ? n(t.__data__, e.__data__) : !t - !e; }; }.apply(this, arguments); for (var t = -1, e = this.length; ++t < e;)
            this[t].sort(n); return this.order(); }, B.each = function (n) { return fn(this, function (t, e, r) { n.call(t, t.__data__, e, r); }); }, B.call = function (n) { var t = r(arguments); return n.apply(t[0] = this, t), this; }, B.empty = function () { return !this.node(); }, B.node = function () { for (var n = 0, t = this.length; n < t; n++)
            for (var e = this[n], r = 0, i = e.length; r < i; r++) {
                var o = e[r];
                if (o)
                    return o;
            } return null; }, B.size = function () { var n = 0; return fn(this, function () { ++n; }), n; }; var pn = []; function dn(t, e, i) { var o = "__on" + t, u = t.indexOf("."), a = vn; u > 0 && (t = t.slice(0, u)); var c = gn.get(t); function l() { var n = this[o]; n && (this.removeEventListener(t, n, n.$), delete this[o]); } return c && (t = c, a = yn), u ? e ? function () { var n = a(e, r(arguments)); l.call(this), this.addEventListener(t, this[o] = n, n.$ = i), n._ = e; } : l : e ? D : function () { var e, r = new RegExp("^__on([^.]+)" + n.requote(t) + "$"); for (var i in this)
            if (e = i.match(r)) {
                var o = this[i];
                this.removeEventListener(e[1], o, o.$), delete this[i];
            } }; } n.selection.enter = hn, n.selection.enter.prototype = pn, pn.append = B.append, pn.empty = B.empty, pn.node = B.node, pn.call = B.call, pn.size = B.size, pn.select = function (n) { for (var t, e, r, i, o, u = [], a = -1, c = this.length; ++a < c;) {
            r = (i = this[a]).update, u.push(t = []), t.parentNode = i.parentNode;
            for (var l = -1, s = i.length; ++l < s;)
                (o = i[l]) ? (t.push(r[l] = e = n.call(i.parentNode, o.__data__, l, a)), e.__data__ = o.__data__) : t.push(null);
        } return Y(u); }, pn.insert = function (n, t) { var e, r, i; return arguments.length < 2 && (e = this, t = function (n, t, o) { var u, a = e[o].update, c = a.length; for (o != i && (i = o, r = 0), t >= r && (r = t + 1); !(u = a[r]) && ++r < c;)
            ; return u; }), B.insert.call(this, n, t); }, n.select = function (n) { var t; return "string" == typeof n ? (t = [Z(n, i)]).parentNode = i.documentElement : (t = [n]).parentNode = o(n), Y([t]); }, n.selectAll = function (n) { var t; return "string" == typeof n ? (t = r(V(n, i))).parentNode = i.documentElement : (t = r(n)).parentNode = null, Y([t]); }, B.on = function (n, t, e) { var r = arguments.length; if (r < 3) {
            if ("string" != typeof n) {
                for (e in r < 2 && (t = !1), n)
                    this.each(dn(e, n[e], t));
                return this;
            }
            if (r < 2)
                return (r = this.node()["__on" + n]) && r._;
            e = !1;
        } return this.each(dn(n, t, e)); }; var gn = n.map({ mouseenter: "mouseover", mouseleave: "mouseout" }); function vn(t, e) { return function (r) { var i = n.event; n.event = r, e[0] = this.__data__; try {
            t.apply(this, e);
        }
        finally {
            n.event = i;
        } }; } function yn(n, t) { var e = vn(n, t); return function (n) { var t = n.relatedTarget; t && (t === this || 8 & t.compareDocumentPosition(this)) || e.call(this, n); }; } i && gn.forEach(function (n) { "on" + n in i && gn.remove(n); }); var mn, xn = 0; function Mn(t) { var e = ".dragsuppress-" + ++xn, r = "click" + e, i = n.select(u(t)).on("touchmove" + e, P).on("dragstart" + e, P).on("selectstart" + e, P); if (null == mn && (mn = !("onselectstart" in t) && z(t.style, "userSelect")), mn) {
            var a = o(t).style, c = a[mn];
            a[mn] = "none";
        } return function (n) { if (i.on(e, null), mn && (a[mn] = c), n) {
            var t = function () { i.on(r, null); };
            i.on(r, function () { P(), t(); }, !0), setTimeout(t, 0);
        } }; } n.mouse = function (n) { return wn(n, O()); }; var _n = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0; function wn(t, e) { e.changedTouches && (e = e.changedTouches[0]); var r = t.ownerSVGElement || t; if (r.createSVGPoint) {
            var i = r.createSVGPoint();
            if (_n < 0) {
                var o = u(t);
                if (o.scrollX || o.scrollY) {
                    var a = (r = n.select("body").append("svg").style({ position: "absolute", top: 0, left: 0, margin: 0, padding: 0, border: "none" }, "important"))[0][0].getScreenCTM();
                    _n = !(a.f || a.e), r.remove();
                }
            }
            return _n ? (i.x = e.pageX, i.y = e.pageY) : (i.x = e.clientX, i.y = e.clientY), [(i = i.matrixTransform(t.getScreenCTM().inverse())).x, i.y];
        } var c = t.getBoundingClientRect(); return [e.clientX - c.left - t.clientLeft, e.clientY - c.top - t.clientTop]; } function bn() { return n.event.changedTouches[0].identifier; } n.touch = function (n, t, e) { if (arguments.length < 3 && (e = t, t = O().changedTouches), t)
            for (var r, i = 0, o = t.length; i < o; ++i)
                if ((r = t[i]).identifier === e)
                    return wn(n, r); }, n.behavior.drag = function () { var t = U(o, "drag", "dragstart", "dragend"), e = null, r = a(D, n.mouse, u, "mousemove", "mouseup"), i = a(bn, n.touch, T, "touchmove", "touchend"); function o() { this.on("mousedown.drag", r).on("touchstart.drag", i); } function a(r, i, o, u, a) { return function () { var c, l = n.event.target.correspondingElement || n.event.target, s = this.parentNode, f = t.of(this, arguments), h = 0, p = r(), d = ".drag" + (null == p ? "" : "-" + p), g = n.select(o(l)).on(u + d, function () { var n, t, e = i(s, p); if (!e)
            return; n = e[0] - y[0], t = e[1] - y[1], h |= n | t, y = e, f({ type: "drag", x: e[0] + c[0], y: e[1] + c[1], dx: n, dy: t }); }).on(a + d, function () { if (!i(s, p))
            return; g.on(u + d, null).on(a + d, null), v(h), f({ type: "dragend" }); }), v = Mn(l), y = i(s, p); c = e ? [(c = e.apply(this, arguments)).x - y[0], c.y - y[1]] : [0, 0], f({ type: "dragstart" }); }; } return o.origin = function (n) { return arguments.length ? (e = n, o) : e; }, n.rebind(o, t, "on"); }, n.touches = function (n, t) { return arguments.length < 2 && (t = O().touches), t ? r(t).map(function (t) { var e = wn(n, t); return e.identifier = t.identifier, e; }) : []; }; var kn = 1e-6, Cn = kn * kn, En = Math.PI, Nn = 2 * En, Sn = Nn - kn, An = En / 2, Ln = En / 180, Tn = 180 / En; function Fn(n) { return n > 0 ? 1 : n < 0 ? -1 : 0; } function zn(n, t, e) { return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0]); } function qn(n) { return n > 1 ? 0 : n < -1 ? En : Math.acos(n); } function Dn(n) { return n > 1 ? An : n < -1 ? -An : Math.asin(n); } function Rn(n) { return ((n = Math.exp(n)) + 1 / n) / 2; } function jn(n) { return (n = Math.sin(n / 2)) * n; } var Pn = Math.SQRT2; n.interpolateZoom = function (n, t) { var e, r, i = n[0], o = n[1], u = n[2], a = t[0], c = t[1], l = t[2], s = a - i, f = c - o, h = s * s + f * f; if (h < Cn)
            r = Math.log(l / u) / Pn, e = function (n) { return [i + n * s, o + n * f, u * Math.exp(Pn * n * r)]; };
        else {
            var p = Math.sqrt(h), d = (l * l - u * u + 4 * h) / (2 * u * 2 * p), g = (l * l - u * u - 4 * h) / (2 * l * 2 * p), v = Math.log(Math.sqrt(d * d + 1) - d), y = Math.log(Math.sqrt(g * g + 1) - g);
            r = (y - v) / Pn, e = function (n) { var t, e = n * r, a = Rn(v), c = u / (2 * p) * (a * (t = Pn * e + v, ((t = Math.exp(2 * t)) - 1) / (t + 1)) - function (n) { return ((n = Math.exp(n)) - 1 / n) / 2; }(v)); return [i + c * s, o + c * f, u * a / Rn(Pn * e + v)]; };
        } return e.duration = 1e3 * r, e; }, n.behavior.zoom = function () { var t, e, r, o, a, c, l, s, f, h = { x: 0, y: 0, k: 1 }, p = [960, 500], d = In, g = 250, v = 0, y = "mousedown.zoom", m = "mousemove.zoom", x = "mouseup.zoom", M = "touchstart.zoom", _ = U(w, "zoomstart", "zoom", "zoomend"); function w(n) { n.on(y, T).on(Un + ".zoom", z).on("dblclick.zoom", q).on(M, F); } function b(n) { return [(n[0] - h.x) / h.k, (n[1] - h.y) / h.k]; } function k(n) { h.k = Math.max(d[0], Math.min(d[1], n)); } function C(n, t) { t = function (n) { return [n[0] * h.k + h.x, n[1] * h.k + h.y]; }(t), h.x += n[0] - t[0], h.y += n[1] - t[1]; } function E(t, r, i, o) { t.__chart__ = { x: h.x, y: h.y, k: h.k }, k(Math.pow(2, o)), C(e = r, i), t = n.select(t), g > 0 && (t = t.transition().duration(g)), t.call(w.event); } function N() { l && l.domain(c.range().map(function (n) { return (n - h.x) / h.k; }).map(c.invert)), f && f.domain(s.range().map(function (n) { return (n - h.y) / h.k; }).map(s.invert)); } function S(n) { v++ || n({ type: "zoomstart" }); } function A(n) { N(), n({ type: "zoom", scale: h.k, translate: [h.x, h.y] }); } function L(n) { --v || (n({ type: "zoomend" }), e = null); } function T() { var t = this, e = _.of(t, arguments), r = 0, i = n.select(u(t)).on(m, function () { r = 1, C(n.mouse(t), o), A(e); }).on(x, function () { i.on(m, null).on(x, null), a(r), L(e); }), o = b(n.mouse(t)), a = Mn(t); pa.call(t), S(e); } function F() { var t, e = this, r = _.of(e, arguments), i = {}, o = 0, u = ".zoom-" + n.event.changedTouches[0].identifier, c = "touchmove" + u, l = "touchend" + u, s = [], f = n.select(e), p = Mn(e); function d() { var r = n.touches(e); return t = h.k, r.forEach(function (n) { n.identifier in i && (i[n.identifier] = b(n)); }), r; } function g() { var t = n.event.target; n.select(t).on(c, v).on(l, m), s.push(t); for (var r = n.event.changedTouches, u = 0, f = r.length; u < f; ++u)
            i[r[u].identifier] = null; var p = d(), g = Date.now(); if (1 === p.length) {
            if (g - a < 500) {
                var y = p[0];
                E(e, y, i[y.identifier], Math.floor(Math.log(h.k) / Math.LN2) + 1), P();
            }
            a = g;
        }
        else if (p.length > 1) {
            y = p[0];
            var x = p[1], M = y[0] - x[0], _ = y[1] - x[1];
            o = M * M + _ * _;
        } } function v() { var u, c, l, s, f = n.touches(e); pa.call(e); for (var h = 0, p = f.length; h < p; ++h, s = null)
            if (l = f[h], s = i[l.identifier]) {
                if (c)
                    break;
                u = l, c = s;
            } if (s) {
            var d = (d = l[0] - u[0]) * d + (d = l[1] - u[1]) * d, g = o && Math.sqrt(d / o);
            u = [(u[0] + l[0]) / 2, (u[1] + l[1]) / 2], c = [(c[0] + s[0]) / 2, (c[1] + s[1]) / 2], k(g * t);
        } a = null, C(u, c), A(r); } function m() { if (n.event.touches.length) {
            for (var t = n.event.changedTouches, e = 0, o = t.length; e < o; ++e)
                delete i[t[e].identifier];
            for (var a in i)
                return void d();
        } n.selectAll(s).on(u, null), f.on(y, T).on(M, F), p(), L(r); } g(), S(r), f.on(y, null).on(M, g); } function z() { var i = _.of(this, arguments); o ? clearTimeout(o) : (pa.call(this), t = b(e = r || n.mouse(this)), S(i)), o = setTimeout(function () { o = null, L(i); }, 50), P(), k(Math.pow(2, .002 * On()) * h.k), C(e, t), A(i); } function q() { var t = n.mouse(this), e = Math.log(h.k) / Math.LN2; E(this, t, b(t), n.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1); } return Un || (Un = "onwheel" in i ? (On = function () { return -n.event.deltaY * (n.event.deltaMode ? 120 : 1); }, "wheel") : "onmousewheel" in i ? (On = function () { return n.event.wheelDelta; }, "mousewheel") : (On = function () { return -n.event.detail; }, "MozMousePixelScroll")), w.event = function (t) { t.each(function () { var t = _.of(this, arguments), r = h; va ? n.select(this).transition().each("start.zoom", function () { h = this.__chart__ || { x: 0, y: 0, k: 1 }, S(t); }).tween("zoom:zoom", function () { var i = p[0], o = p[1], u = e ? e[0] : i / 2, a = e ? e[1] : o / 2, c = n.interpolateZoom([(u - h.x) / h.k, (a - h.y) / h.k, i / h.k], [(u - r.x) / r.k, (a - r.y) / r.k, i / r.k]); return function (n) { var e = c(n), r = i / e[2]; this.__chart__ = h = { x: u - e[0] * r, y: a - e[1] * r, k: r }, A(t); }; }).each("interrupt.zoom", function () { L(t); }).each("end.zoom", function () { L(t); }) : (this.__chart__ = h, S(t), A(t), L(t)); }); }, w.translate = function (n) { return arguments.length ? (h = { x: +n[0], y: +n[1], k: h.k }, N(), w) : [h.x, h.y]; }, w.scale = function (n) { return arguments.length ? (h = { x: h.x, y: h.y, k: null }, k(+n), N(), w) : h.k; }, w.scaleExtent = function (n) { return arguments.length ? (d = null == n ? In : [+n[0], +n[1]], w) : d; }, w.center = function (n) { return arguments.length ? (r = n && [+n[0], +n[1]], w) : r; }, w.size = function (n) { return arguments.length ? (p = n && [+n[0], +n[1]], w) : p; }, w.duration = function (n) { return arguments.length ? (g = +n, w) : g; }, w.x = function (n) { return arguments.length ? (l = n, c = n.copy(), h = { x: 0, y: 0, k: 1 }, w) : l; }, w.y = function (n) { return arguments.length ? (f = n, s = n.copy(), h = { x: 0, y: 0, k: 1 }, w) : f; }, n.rebind(w, _, "on"); }; var On, Un, In = [0, 1 / 0]; function Hn() { } function Yn(n, t, e) { return this instanceof Yn ? (this.h = +n, this.s = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof Yn ? new Yn(n.h, n.s, n.l) : ft("" + n, ht, Yn) : new Yn(n, t, e); } n.color = Hn, Hn.prototype.toString = function () { return this.rgb() + ""; }, n.hsl = Yn; var Zn = Yn.prototype = new Hn; function Vn(n, t, e) { var r, i; function o(n) { return Math.round(255 * function (n) { return n > 360 ? n -= 360 : n < 0 && (n += 360), n < 60 ? r + (i - r) * n / 60 : n < 180 ? i : n < 240 ? r + (i - r) * (240 - n) / 60 : r; }(n)); } return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : t < 0 ? 0 : t > 1 ? 1 : t, r = 2 * (e = e < 0 ? 0 : e > 1 ? 1 : e) - (i = e <= .5 ? e * (1 + t) : e + t - e * t), new ut(o(n + 120), o(n), o(n - 120)); } function $n(t, e, r) { return this instanceof $n ? (this.h = +t, this.c = +e, void (this.l = +r)) : arguments.length < 2 ? t instanceof $n ? new $n(t.h, t.c, t.l) : et(t instanceof Wn ? t.l : (t = pt((t = n.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new $n(t, e, r); } Zn.brighter = function (n) { return n = Math.pow(.7, arguments.length ? n : 1), new Yn(this.h, this.s, this.l / n); }, Zn.darker = function (n) { return n = Math.pow(.7, arguments.length ? n : 1), new Yn(this.h, this.s, n * this.l); }, Zn.rgb = function () { return Vn(this.h, this.s, this.l); }, n.hcl = $n; var Bn = $n.prototype = new Hn; function Xn(n, t, e) { return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new Wn(e, Math.cos(n *= Ln) * t, Math.sin(n) * t); } function Wn(n, t, e) { return this instanceof Wn ? (this.l = +n, this.a = +t, void (this.b = +e)) : arguments.length < 2 ? n instanceof Wn ? new Wn(n.l, n.a, n.b) : n instanceof $n ? Xn(n.h, n.c, n.l) : pt((n = ut(n)).r, n.g, n.b) : new Wn(n, t, e); } Bn.brighter = function (n) { return new $n(this.h, this.c, Math.min(100, this.l + Jn * (arguments.length ? n : 1))); }, Bn.darker = function (n) { return new $n(this.h, this.c, Math.max(0, this.l - Jn * (arguments.length ? n : 1))); }, Bn.rgb = function () { return Xn(this.h, this.c, this.l).rgb(); }, n.lab = Wn; var Jn = 18, Gn = .95047, Kn = 1, Qn = 1.08883, nt = Wn.prototype = new Hn; function tt(n, t, e) { var r = (n + 16) / 116, i = r + t / 500, o = r - e / 200; return new ut(ot(3.2404542 * (i = rt(i) * Gn) - 1.5371385 * (r = rt(r) * Kn) - .4985314 * (o = rt(o) * Qn)), ot(-.969266 * i + 1.8760108 * r + .041556 * o), ot(.0556434 * i - .2040259 * r + 1.0572252 * o)); } function et(n, t, e) { return n > 0 ? new $n(Math.atan2(e, t) * Tn, Math.sqrt(t * t + e * e), n) : new $n(NaN, NaN, n); } function rt(n) { return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037; } function it(n) { return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29; } function ot(n) { return Math.round(255 * (n <= .00304 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055)); } function ut(n, t, e) { return this instanceof ut ? (this.r = ~~n, this.g = ~~t, void (this.b = ~~e)) : arguments.length < 2 ? n instanceof ut ? new ut(n.r, n.g, n.b) : ft("" + n, ut, Vn) : new ut(n, t, e); } function at(n) { return new ut(n >> 16, n >> 8 & 255, 255 & n); } function ct(n) { return at(n) + ""; } nt.brighter = function (n) { return new Wn(Math.min(100, this.l + Jn * (arguments.length ? n : 1)), this.a, this.b); }, nt.darker = function (n) { return new Wn(Math.max(0, this.l - Jn * (arguments.length ? n : 1)), this.a, this.b); }, nt.rgb = function () { return tt(this.l, this.a, this.b); }, n.rgb = ut; var lt = ut.prototype = new Hn; function st(n) { return n < 16 ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16); } function ft(n, t, e) { var r, i, o, u = 0, a = 0, c = 0; if (r = /([a-z]+)\((.*)\)/.exec(n = n.toLowerCase()))
            switch (i = r[2].split(","), r[1]) {
                case "hsl": return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
                case "rgb": return t(gt(i[0]), gt(i[1]), gt(i[2]));
            } return (o = vt.get(n)) ? t(o.r, o.g, o.b) : (null == n || "#" !== n.charAt(0) || isNaN(o = parseInt(n.slice(1), 16)) || (4 === n.length ? (u = (3840 & o) >> 4, u |= u >> 4, a = 240 & o, a |= a >> 4, c = 15 & o, c |= c << 4) : 7 === n.length && (u = (16711680 & o) >> 16, a = (65280 & o) >> 8, c = 255 & o)), t(u, a, c)); } function ht(n, t, e) { var r, i, o = Math.min(n /= 255, t /= 255, e /= 255), u = Math.max(n, t, e), a = u - o, c = (u + o) / 2; return a ? (i = c < .5 ? a / (u + o) : a / (2 - u - o), r = n == u ? (t - e) / a + (t < e ? 6 : 0) : t == u ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = NaN, i = c > 0 && c < 1 ? 0 : r), new Yn(r, i, c); } function pt(n, t, e) { var r = it((.4124564 * (n = dt(n)) + .3575761 * (t = dt(t)) + .1804375 * (e = dt(e))) / Gn), i = it((.2126729 * n + .7151522 * t + .072175 * e) / Kn); return Wn(116 * i - 16, 500 * (r - i), 200 * (i - it((.0193339 * n + .119192 * t + .9503041 * e) / Qn))); } function dt(n) { return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4); } function gt(n) { var t = parseFloat(n); return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t; } lt.brighter = function (n) { n = Math.pow(.7, arguments.length ? n : 1); var t = this.r, e = this.g, r = this.b, i = 30; return t || e || r ? (t && t < i && (t = i), e && e < i && (e = i), r && r < i && (r = i), new ut(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new ut(i, i, i); }, lt.darker = function (n) { return new ut((n = Math.pow(.7, arguments.length ? n : 1)) * this.r, n * this.g, n * this.b); }, lt.hsl = function () { return ht(this.r, this.g, this.b); }, lt.toString = function () { return "#" + st(this.r) + st(this.g) + st(this.b); }; var vt = n.map({ aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }); function yt(n) { return "function" == typeof n ? n : function () { return n; }; } function mt(n) { return function (t, e, r) { return 2 === arguments.length && "function" == typeof e && (r = e, e = null), xt(t, e, n, r); }; } function xt(t, e, i, o) { var u = {}, a = n.dispatch("beforesend", "progress", "load", "error"), c = {}, l = new XMLHttpRequest, s = null; function f() { var n, t = l.status; if (!t && function (n) { var t = n.responseType; return t && "text" !== t ? n.response : n.responseText; }(l) || t >= 200 && t < 300 || 304 === t) {
            try {
                n = i.call(u, l);
            }
            catch (n) {
                return void a.error.call(u, n);
            }
            a.load.call(u, n);
        }
        else
            a.error.call(u, l); } return !this.XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(t) || (l = new XDomainRequest), "onload" in l ? l.onload = l.onerror = f : l.onreadystatechange = function () { l.readyState > 3 && f(); }, l.onprogress = function (t) { var e = n.event; n.event = t; try {
            a.progress.call(u, l);
        }
        finally {
            n.event = e;
        } }, u.header = function (n, t) { return n = (n + "").toLowerCase(), arguments.length < 2 ? c[n] : (null == t ? delete c[n] : c[n] = t + "", u); }, u.mimeType = function (n) { return arguments.length ? (e = null == n ? null : n + "", u) : e; }, u.responseType = function (n) { return arguments.length ? (s = n, u) : s; }, u.response = function (n) { return i = n, u; }, ["get", "post"].forEach(function (n) { u[n] = function () { return u.send.apply(u, [n].concat(r(arguments))); }; }), u.send = function (n, r, i) { if (2 === arguments.length && "function" == typeof r && (i = r, r = null), l.open(n, t, !0), null == e || "accept" in c || (c.accept = e + ",*/*"), l.setRequestHeader)
            for (var o in c)
                l.setRequestHeader(o, c[o]); return null != e && l.overrideMimeType && l.overrideMimeType(e), null != s && (l.responseType = s), null != i && u.on("error", i).on("load", function (n) { i(null, n); }), a.beforesend.call(u, l), l.send(null == r ? null : r), u; }, u.abort = function () { return l.abort(), u; }, n.rebind(u, a, "on"), null == o ? u : u.get(function (n) { return 1 === n.length ? function (t, e) { n(null == t ? e : null); } : n; }(o)); } vt.forEach(function (n, t) { vt.set(n, at(t)); }), n.functor = yt, n.xhr = mt(T), n.dsv = function (n, t) { var e = new RegExp('["' + n + "\n]"), r = n.charCodeAt(0); function i(n, e, r) { arguments.length < 3 && (r = e, e = null); var i = xt(n, t, null == e ? o : u(e), r); return i.row = function (n) { return arguments.length ? i.response(null == (e = n) ? o : u(n)) : e; }, i; } function o(n) { return i.parse(n.responseText); } function u(n) { return function (t) { return i.parse(t.responseText, n); }; } function a(t) { return t.map(c).join(n); } function c(n) { return e.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n; } return i.parse = function (n, t) { var e; return i.parseRows(n, function (n, r) { if (e)
            return e(n, r - 1); var i = new Function("d", "return {" + n.map(function (n, t) { return JSON.stringify(n) + ": d[" + t + "]"; }).join(",") + "}"); e = t ? function (n, e) { return t(i(n), e); } : i; }); }, i.parseRows = function (n, t) { var e, i, o = {}, u = {}, a = [], c = n.length, l = 0, s = 0; function f() { if (l >= c)
            return u; if (i)
            return i = !1, o; var t = l; if (34 === n.charCodeAt(t)) {
            for (var e = t; e++ < c;)
                if (34 === n.charCodeAt(e)) {
                    if (34 !== n.charCodeAt(e + 1))
                        break;
                    ++e;
                }
            return l = e + 2, 13 === (a = n.charCodeAt(e + 1)) ? (i = !0, 10 === n.charCodeAt(e + 2) && ++l) : 10 === a && (i = !0), n.slice(t + 1, e).replace(/""/g, '"');
        } for (; l < c;) {
            var a, s = 1;
            if (10 === (a = n.charCodeAt(l++)))
                i = !0;
            else if (13 === a)
                i = !0, 10 === n.charCodeAt(l) && (++l, ++s);
            else if (a !== r)
                continue;
            return n.slice(t, l - s);
        } return n.slice(t); } for (; (e = f()) !== u;) {
            for (var h = []; e !== o && e !== u;)
                h.push(e), e = f();
            t && null == (h = t(h, s++)) || a.push(h);
        } return a; }, i.format = function (t) { if (Array.isArray(t[0]))
            return i.formatRows(t); var e = new L, r = []; return t.forEach(function (n) { for (var t in n)
            e.has(t) || r.push(e.add(t)); }), [r.map(c).join(n)].concat(t.map(function (t) { return r.map(function (n) { return c(t[n]); }).join(n); })).join("\n"); }, i.formatRows = function (n) { return n.map(a).join("\n"); }, i; }, n.csv = n.dsv(",", "text/csv"), n.tsv = n.dsv("\t", "text/tab-separated-values"); var Mt, _t, wt, bt, kt = this[z(this, "requestAnimationFrame")] || function (n) { setTimeout(n, 17); }; function Ct(n, t, e) { var r = arguments.length; r < 2 && (t = 0), r < 3 && (e = Date.now()); var i = { c: n, t: e + t, n: null }; return _t ? _t.n = i : Mt = i, _t = i, wt || (bt = clearTimeout(bt), wt = 1, kt(Et)), i; } function Et() { var n = Nt(), t = St() - n; t > 24 ? (isFinite(t) && (clearTimeout(bt), bt = setTimeout(Et, t)), wt = 0) : (wt = 1, kt(Et)); } function Nt() { for (var n = Date.now(), t = Mt; t;)
            n >= t.t && t.c(n - t.t) && (t.c = null), t = t.n; return n; } function St() { for (var n, t = Mt, e = 1 / 0; t;)
            t.c ? (t.t < e && (e = t.t), t = (n = t).n) : t = n ? n.n = t.n : Mt = t.n; return _t = n, e; } function At(n, t) { return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1); } n.timer = function () { Ct.apply(this, arguments); }, n.timer.flush = function () { Nt(), St(); }, n.round = function (n, t) { return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n); }; var Lt = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(function (n, t) { var e = Math.pow(10, 3 * m(8 - t)); return { scale: t > 8 ? function (n) { return n / e; } : function (n) { return n * e; }, symbol: n }; }); function Tt(t) { var e = t.decimal, r = t.thousands, i = t.grouping, o = t.currency, u = i && r ? function (n, t) { for (var e = n.length, o = [], u = 0, a = i[0], c = 0; e > 0 && a > 0 && (c + a + 1 > t && (a = Math.max(1, t - c)), o.push(n.substring(e -= a, e + a)), !((c += a + 1) > t));)
            a = i[u = (u + 1) % i.length]; return o.reverse().join(r); } : T; return function (t) { var r = Ft.exec(t), i = r[1] || " ", a = r[2] || ">", c = r[3] || "-", l = r[4] || "", s = r[5], f = +r[6], h = r[7], p = r[8], d = r[9], g = 1, v = "", y = "", m = !1, x = !0; switch (p && (p = +p.substring(1)), (s || "0" === i && "=" === a) && (s = i = "0", a = "="), d) {
            case "n":
                h = !0, d = "g";
                break;
            case "%":
                g = 100, y = "%", d = "f";
                break;
            case "p":
                g = 100, y = "%", d = "r";
                break;
            case "b":
            case "o":
            case "x":
            case "X": "#" === l && (v = "0" + d.toLowerCase());
            case "c": x = !1;
            case "d":
                m = !0, p = 0;
                break;
            case "s": g = -1, d = "r";
        } "$" === l && (v = o[0], y = o[1]), "r" != d || p || (d = "g"), null != p && ("g" == d ? p = Math.max(1, Math.min(21, p)) : "e" != d && "f" != d || (p = Math.max(0, Math.min(20, p)))), d = zt.get(d) || qt; var M = s && h; return function (t) { var r = y; if (m && t % 1)
            return ""; var o = t < 0 || 0 === t && 1 / t < 0 ? (t = -t, "-") : "-" === c ? "" : c; if (g < 0) {
            var l = n.formatPrefix(t, p);
            t = l.scale(t), r = l.symbol + y;
        }
        else
            t *= g; var _, w, b = (t = d(t, p)).lastIndexOf("."); if (b < 0) {
            var k = x ? t.lastIndexOf("e") : -1;
            k < 0 ? (_ = t, w = "") : (_ = t.substring(0, k), w = t.substring(k));
        }
        else
            _ = t.substring(0, b), w = e + t.substring(b + 1); !s && h && (_ = u(_, 1 / 0)); var C = v.length + _.length + w.length + (M ? 0 : o.length), E = C < f ? new Array(C = f - C + 1).join(i) : ""; return M && (_ = u(E + _, E.length ? f - w.length : 1 / 0)), o += v, t = _ + w, ("<" === a ? o + t + E : ">" === a ? E + o + t : "^" === a ? E.substring(0, C >>= 1) + o + t + E.substring(C) : o + (M ? t : E + t)) + r; }; }; } n.formatPrefix = function (t, e) { var r = 0; return (t = +t) && (t < 0 && (t *= -1), e && (t = n.round(t, At(t, e))), r = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), r = Math.max(-24, Math.min(24, 3 * Math.floor((r - 1) / 3)))), Lt[8 + r / 3]; }; var Ft = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, zt = n.map({ b: function (n) { return n.toString(2); }, c: function (n) { return String.fromCharCode(n); }, o: function (n) { return n.toString(8); }, x: function (n) { return n.toString(16); }, X: function (n) { return n.toString(16).toUpperCase(); }, g: function (n, t) { return n.toPrecision(t); }, e: function (n, t) { return n.toExponential(t); }, f: function (n, t) { return n.toFixed(t); }, r: function (t, e) { return (t = n.round(t, At(t, e))).toFixed(Math.max(0, Math.min(20, At(t * (1 + 1e-15), e)))); } }); function qt(n) { return n + ""; } var Dt = n.time = {}, Rt = Date; function jt() { this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]); } jt.prototype = { getDate: function () { return this._.getUTCDate(); }, getDay: function () { return this._.getUTCDay(); }, getFullYear: function () { return this._.getUTCFullYear(); }, getHours: function () { return this._.getUTCHours(); }, getMilliseconds: function () { return this._.getUTCMilliseconds(); }, getMinutes: function () { return this._.getUTCMinutes(); }, getMonth: function () { return this._.getUTCMonth(); }, getSeconds: function () { return this._.getUTCSeconds(); }, getTime: function () { return this._.getTime(); }, getTimezoneOffset: function () { return 0; }, valueOf: function () { return this._.valueOf(); }, setDate: function () { Pt.setUTCDate.apply(this._, arguments); }, setDay: function () { Pt.setUTCDay.apply(this._, arguments); }, setFullYear: function () { Pt.setUTCFullYear.apply(this._, arguments); }, setHours: function () { Pt.setUTCHours.apply(this._, arguments); }, setMilliseconds: function () { Pt.setUTCMilliseconds.apply(this._, arguments); }, setMinutes: function () { Pt.setUTCMinutes.apply(this._, arguments); }, setMonth: function () { Pt.setUTCMonth.apply(this._, arguments); }, setSeconds: function () { Pt.setUTCSeconds.apply(this._, arguments); }, setTime: function () { Pt.setTime.apply(this._, arguments); } }; var Pt = Date.prototype; function Ot(n, t, e) { function r(t) { var e = n(t), r = o(e, 1); return t - e < r - t ? e : r; } function i(e) { return t(e = n(new Rt(e - 1)), 1), e; } function o(n, e) { return t(n = new Rt(+n), e), n; } function u(n, r, o) { var u = i(n), a = []; if (o > 1)
            for (; u < r;)
                e(u) % o || a.push(new Date(+u)), t(u, 1);
        else
            for (; u < r;)
                a.push(new Date(+u)), t(u, 1); return a; } n.floor = n, n.round = r, n.ceil = i, n.offset = o, n.range = u; var a = n.utc = Ut(n); return a.floor = a, a.round = Ut(r), a.ceil = Ut(i), a.offset = Ut(o), a.range = function (n, t, e) { try {
            Rt = jt;
            var r = new jt;
            return r._ = n, u(r, t, e);
        }
        finally {
            Rt = Date;
        } }, n; } function Ut(n) { return function (t, e) { try {
            Rt = jt;
            var r = new jt;
            return r._ = t, n(r, e)._;
        }
        finally {
            Rt = Date;
        } }; } function It(t) { var e = t.dateTime, r = t.date, i = t.time, o = t.periods, u = t.days, a = t.shortDays, c = t.months, l = t.shortMonths; function s(n) { var t = n.length; function e(e) { for (var r, i, o, u = [], a = -1, c = 0; ++a < t;)
            37 === n.charCodeAt(a) && (u.push(n.slice(c, a)), null != (i = Ht[r = n.charAt(++a)]) && (r = n.charAt(++a)), (o = _[r]) && (r = o(e, null == i ? "e" === r ? " " : "0" : i)), u.push(r), c = a + 1); return u.push(n.slice(c, a)), u.join(""); } return e.parse = function (t) { var e = { y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null }; if (f(e, n, t, 0) != t.length)
            return null; "p" in e && (e.H = e.H % 12 + 12 * e.p); var r = null != e.Z && Rt !== jt, i = new (r ? jt : Rt); return "j" in e ? i.setFullYear(e.y, 0, e.j) : "W" in e || "U" in e ? ("w" in e || (e.w = "W" in e ? 1 : 0), i.setFullYear(e.y, 0, 1), i.setFullYear(e.y, 0, "W" in e ? (e.w + 6) % 7 + 7 * e.W - (i.getDay() + 5) % 7 : e.w + 7 * e.U - (i.getDay() + 6) % 7)) : i.setFullYear(e.y, e.m, e.d), i.setHours(e.H + (e.Z / 100 | 0), e.M + e.Z % 100, e.S, e.L), r ? i._ : i; }, e.toString = function () { return n; }, e; } function f(n, t, e, r) { for (var i, o, u, a = 0, c = t.length, l = e.length; a < c;) {
            if (r >= l)
                return -1;
            if (37 === (i = t.charCodeAt(a++))) {
                if (u = t.charAt(a++), !(o = w[u in Ht ? t.charAt(a++) : u]) || (r = o(n, e, r)) < 0)
                    return -1;
            }
            else if (i != e.charCodeAt(r++))
                return -1;
        } return r; } s.utc = function (n) { var t = s(n); function e(n) { try {
            var e = new (Rt = jt);
            return e._ = n, t(e);
        }
        finally {
            Rt = Date;
        } } return e.parse = function (n) { try {
            Rt = jt;
            var e = t.parse(n);
            return e && e._;
        }
        finally {
            Rt = Date;
        } }, e.toString = t.toString, e; }, s.multi = s.utc.multi = le; var h = n.map(), p = $t(u), d = Bt(u), g = $t(a), v = Bt(a), y = $t(c), m = Bt(c), x = $t(l), M = Bt(l); o.forEach(function (n, t) { h.set(n.toLowerCase(), t); }); var _ = { a: function (n) { return a[n.getDay()]; }, A: function (n) { return u[n.getDay()]; }, b: function (n) { return l[n.getMonth()]; }, B: function (n) { return c[n.getMonth()]; }, c: s(e), d: function (n, t) { return Vt(n.getDate(), t, 2); }, e: function (n, t) { return Vt(n.getDate(), t, 2); }, H: function (n, t) { return Vt(n.getHours(), t, 2); }, I: function (n, t) { return Vt(n.getHours() % 12 || 12, t, 2); }, j: function (n, t) { return Vt(1 + Dt.dayOfYear(n), t, 3); }, L: function (n, t) { return Vt(n.getMilliseconds(), t, 3); }, m: function (n, t) { return Vt(n.getMonth() + 1, t, 2); }, M: function (n, t) { return Vt(n.getMinutes(), t, 2); }, p: function (n) { return o[+(n.getHours() >= 12)]; }, S: function (n, t) { return Vt(n.getSeconds(), t, 2); }, U: function (n, t) { return Vt(Dt.sundayOfYear(n), t, 2); }, w: function (n) { return n.getDay(); }, W: function (n, t) { return Vt(Dt.mondayOfYear(n), t, 2); }, x: s(r), X: s(i), y: function (n, t) { return Vt(n.getFullYear() % 100, t, 2); }, Y: function (n, t) { return Vt(n.getFullYear() % 1e4, t, 4); }, Z: ae, "%": function () { return "%"; } }, w = { a: function (n, t, e) { g.lastIndex = 0; var r = g.exec(t.slice(e)); return r ? (n.w = v.get(r[0].toLowerCase()), e + r[0].length) : -1; }, A: function (n, t, e) { p.lastIndex = 0; var r = p.exec(t.slice(e)); return r ? (n.w = d.get(r[0].toLowerCase()), e + r[0].length) : -1; }, b: function (n, t, e) { x.lastIndex = 0; var r = x.exec(t.slice(e)); return r ? (n.m = M.get(r[0].toLowerCase()), e + r[0].length) : -1; }, B: function (n, t, e) { y.lastIndex = 0; var r = y.exec(t.slice(e)); return r ? (n.m = m.get(r[0].toLowerCase()), e + r[0].length) : -1; }, c: function (n, t, e) { return f(n, _.c.toString(), t, e); }, d: te, e: te, H: re, I: re, j: ee, L: ue, m: ne, M: ie, p: function (n, t, e) { var r = h.get(t.slice(e, e += 2).toLowerCase()); return null == r ? -1 : (n.p = r, e); }, S: oe, U: Wt, w: Xt, W: Jt, x: function (n, t, e) { return f(n, _.x.toString(), t, e); }, X: function (n, t, e) { return f(n, _.X.toString(), t, e); }, y: Kt, Y: Gt, Z: Qt, "%": ce }; return s; } Dt.year = Ot(function (n) { return (n = Dt.day(n)).setMonth(0, 1), n; }, function (n, t) { n.setFullYear(n.getFullYear() + t); }, function (n) { return n.getFullYear(); }), Dt.years = Dt.year.range, Dt.years.utc = Dt.year.utc.range, Dt.day = Ot(function (n) { var t = new Rt(2e3, 0); return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t; }, function (n, t) { n.setDate(n.getDate() + t); }, function (n) { return n.getDate() - 1; }), Dt.days = Dt.day.range, Dt.days.utc = Dt.day.utc.range, Dt.dayOfYear = function (n) { var t = Dt.year(n); return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5); }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (n, t) { t = 7 - t; var e = Dt[n] = Ot(function (n) { return (n = Dt.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n; }, function (n, t) { n.setDate(n.getDate() + 7 * Math.floor(t)); }, function (n) { var e = Dt.year(n).getDay(); return Math.floor((Dt.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t); }); Dt[n + "s"] = e.range, Dt[n + "s"].utc = e.utc.range, Dt[n + "OfYear"] = function (n) { var e = Dt.year(n).getDay(); return Math.floor((Dt.dayOfYear(n) + (e + t) % 7) / 7); }; }), Dt.week = Dt.sunday, Dt.weeks = Dt.sunday.range, Dt.weeks.utc = Dt.sunday.utc.range, Dt.weekOfYear = Dt.sundayOfYear; var Ht = { "-": "", _: " ", 0: "0" }, Yt = /^\s*\d+/, Zt = /^%/; function Vt(n, t, e) { var r = n < 0 ? "-" : "", i = (r ? -n : n) + "", o = i.length; return r + (o < e ? new Array(e - o + 1).join(t) + i : i); } function $t(t) { return new RegExp("^(?:" + t.map(n.requote).join("|") + ")", "i"); } function Bt(n) { for (var t = new M, e = -1, r = n.length; ++e < r;)
            t.set(n[e].toLowerCase(), e); return t; } function Xt(n, t, e) { Yt.lastIndex = 0; var r = Yt.exec(t.slice(e, e + 1)); return r ? (n.w = +r[0], e + r[0].length) : -1; } function Wt(n, t, e) { Yt.lastIndex = 0; var r = Yt.exec(t.slice(e)); return r ? (n.U = +r[0], e + r[0].length) : -1; } function Jt(n, t, e) { Yt.lastIndex = 0; var r = Yt.exec(t.slice(e)); return r ? (n.W = +r[0], e + r[0].length) : -1; } function Gt(n, t, e) { Yt.lastIndex = 0; var r = Yt.exec(t.slice(e, e + 4)); return r ? (n.y = +r[0], e + r[0].length) : -1; } function Kt(n, t, e) { Yt.lastIndex = 0; var r, i = Yt.exec(t.slice(e, e + 2)); return i ? (n.y = (r = +i[0]) + (r > 68 ? 1900 : 2e3), e + i[0].length) : -1; } function Qt(n, t, e) { return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1; } function ne(n, t, e) { Yt.lastIndex = 0; var r = Yt.exec(t.slice(e, e + 2)); return r ? (n.m = r[0] - 1, e + r[0].length) : -1; } function te(n, t, e) { Yt.lastIndex = 0; var r = Yt.exec(t.slice(e, e + 2)); return r ? (n.d = +r[0], e + r[0].length) : -1; } function ee(n, t, e) { Yt.lastIndex = 0; var r = Yt.exec(t.slice(e, e + 3)); return r ? (n.j = +r[0], e + r[0].length) : -1; } function re(n, t, e) { Yt.lastIndex = 0; var r = Yt.exec(t.slice(e, e + 2)); return r ? (n.H = +r[0], e + r[0].length) : -1; } function ie(n, t, e) { Yt.lastIndex = 0; var r = Yt.exec(t.slice(e, e + 2)); return r ? (n.M = +r[0], e + r[0].length) : -1; } function oe(n, t, e) { Yt.lastIndex = 0; var r = Yt.exec(t.slice(e, e + 2)); return r ? (n.S = +r[0], e + r[0].length) : -1; } function ue(n, t, e) { Yt.lastIndex = 0; var r = Yt.exec(t.slice(e, e + 3)); return r ? (n.L = +r[0], e + r[0].length) : -1; } function ae(n) { var t = n.getTimezoneOffset(), e = t > 0 ? "-" : "+", r = m(t) / 60 | 0, i = m(t) % 60; return e + Vt(r, "0", 2) + Vt(i, "0", 2); } function ce(n, t, e) { Zt.lastIndex = 0; var r = Zt.exec(t.slice(e, e + 1)); return r ? e + r[0].length : -1; } function le(n) { for (var t = n.length, e = -1; ++e < t;)
            n[e][0] = this(n[e][0]); return function (t) { for (var e = 0, r = n[e]; !r[1](t);)
            r = n[++e]; return r[0](t); }; } n.locale = function (n) { return { numberFormat: Tt(n), timeFormat: It(n) }; }; var se = n.locale({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], dateTime: "%a %b %e %X %Y", date: "%m/%d/%Y", time: "%H:%M:%S", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }); function fe() { } n.format = se.numberFormat, n.geo = {}, fe.prototype = { s: 0, t: 0, add: function (n) { pe(n, this.t, he), pe(he.s, this.s, this), this.s ? this.t += he.t : this.s = he.t; }, reset: function () { this.s = this.t = 0; }, valueOf: function () { return this.s; } }; var he = new fe; function pe(n, t, e) { var r = e.s = n + t, i = r - n, o = r - i; e.t = n - o + (t - i); } function de(n, t) { n && ve.hasOwnProperty(n.type) && ve[n.type](n, t); } n.geo.stream = function (n, t) { n && ge.hasOwnProperty(n.type) ? ge[n.type](n, t) : de(n, t); }; var ge = { Feature: function (n, t) { de(n.geometry, t); }, FeatureCollection: function (n, t) { for (var e = n.features, r = -1, i = e.length; ++r < i;)
                de(e[r].geometry, t); } }, ve = { Sphere: function (n, t) { t.sphere(); }, Point: function (n, t) { n = n.coordinates, t.point(n[0], n[1], n[2]); }, MultiPoint: function (n, t) { for (var e = n.coordinates, r = -1, i = e.length; ++r < i;)
                n = e[r], t.point(n[0], n[1], n[2]); }, LineString: function (n, t) { ye(n.coordinates, t, 0); }, MultiLineString: function (n, t) { for (var e = n.coordinates, r = -1, i = e.length; ++r < i;)
                ye(e[r], t, 0); }, Polygon: function (n, t) { me(n.coordinates, t); }, MultiPolygon: function (n, t) { for (var e = n.coordinates, r = -1, i = e.length; ++r < i;)
                me(e[r], t); }, GeometryCollection: function (n, t) { for (var e = n.geometries, r = -1, i = e.length; ++r < i;)
                de(e[r], t); } }; function ye(n, t, e) { var r, i = -1, o = n.length - e; for (t.lineStart(); ++i < o;)
            r = n[i], t.point(r[0], r[1], r[2]); t.lineEnd(); } function me(n, t) { var e = -1, r = n.length; for (t.polygonStart(); ++e < r;)
            ye(n[e], t, 1); t.polygonEnd(); } n.geo.area = function (t) { return xe = 0, n.geo.stream(t, Fe), xe; }; var xe, Me, _e, we, be, ke, Ce, Ee, Ne, Se, Ae, Le, Te = new fe, Fe = { sphere: function () { xe += 4 * En; }, point: D, lineStart: D, lineEnd: D, polygonStart: function () { Te.reset(), Fe.lineStart = ze; }, polygonEnd: function () { var n = 2 * Te; xe += n < 0 ? 4 * En + n : n, Fe.lineStart = Fe.lineEnd = Fe.point = D; } }; function ze() { var n, t, e, r, i; function o(n, t) { t = t * Ln / 2 + En / 4; var o = (n *= Ln) - e, u = o >= 0 ? 1 : -1, a = u * o, c = Math.cos(t), l = Math.sin(t), s = i * l, f = r * c + s * Math.cos(a), h = s * u * Math.sin(a); Te.add(Math.atan2(h, f)), e = n, r = c, i = l; } Fe.point = function (u, a) { Fe.point = o, e = (n = u) * Ln, r = Math.cos(a = (t = a) * Ln / 2 + En / 4), i = Math.sin(a); }, Fe.lineEnd = function () { o(n, t); }; } function qe(n) { var t = n[0], e = n[1], r = Math.cos(e); return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]; } function De(n, t) { return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]; } function Re(n, t) { return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]; } function je(n, t) { n[0] += t[0], n[1] += t[1], n[2] += t[2]; } function Pe(n, t) { return [n[0] * t, n[1] * t, n[2] * t]; } function Oe(n) { var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]); n[0] /= t, n[1] /= t, n[2] /= t; } function Ue(n) { return [Math.atan2(n[1], n[0]), Dn(n[2])]; } function Ie(n, t) { return m(n[0] - t[0]) < kn && m(n[1] - t[1]) < kn; } n.geo.bounds = function () { var t, e, r, i, o, u, a, c, l, s, f, h = { point: p, lineStart: g, lineEnd: v, polygonStart: function () { h.point = y, h.lineStart = x, h.lineEnd = M, l = 0, Fe.polygonStart(); }, polygonEnd: function () { Fe.polygonEnd(), h.point = p, h.lineStart = g, h.lineEnd = v, Te < 0 ? (t = -(r = 180), e = -(i = 90)) : l > kn ? i = 90 : l < -kn && (e = -90), f[0] = t, f[1] = r; } }; function p(n, o) { s.push(f = [t = n, r = n]), o < e && (e = o), o > i && (i = o); } function d(n, u) { var a = qe([n * Ln, u * Ln]); if (c) {
            var l = Re(c, a), s = Re([l[1], -l[0], 0], l);
            Oe(s), s = Ue(s);
            var f = n - o, h = f > 0 ? 1 : -1, d = s[0] * Tn * h, g = m(f) > 180;
            if (g ^ (h * o < d && d < h * n))
                (v = s[1] * Tn) > i && (i = v);
            else if (g ^ (h * o < (d = (d + 360) % 360 - 180) && d < h * n)) {
                var v;
                (v = -s[1] * Tn) < e && (e = v);
            }
            else
                u < e && (e = u), u > i && (i = u);
            g ? n < o ? _(t, n) > _(t, r) && (r = n) : _(n, r) > _(t, r) && (t = n) : r >= t ? (n < t && (t = n), n > r && (r = n)) : n > o ? _(t, n) > _(t, r) && (r = n) : _(n, r) > _(t, r) && (t = n);
        }
        else
            p(n, u); c = a, o = n; } function g() { h.point = d; } function v() { f[0] = t, f[1] = r, h.point = p, c = null; } function y(n, t) { if (c) {
            var e = n - o;
            l += m(e) > 180 ? e + (e > 0 ? 360 : -360) : e;
        }
        else
            u = n, a = t; Fe.point(n, t), d(n, t); } function x() { Fe.lineStart(); } function M() { y(u, a), Fe.lineEnd(), m(l) > kn && (t = -(r = 180)), f[0] = t, f[1] = r, c = null; } function _(n, t) { return (t -= n) < 0 ? t + 360 : t; } function w(n, t) { return n[0] - t[0]; } function b(n, t) { return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n; } return function (o) { if (i = r = -(t = e = 1 / 0), s = [], n.geo.stream(o, h), l = s.length) {
            s.sort(w);
            for (var u = 1, a = [g = s[0]]; u < l; ++u)
                b((p = s[u])[0], g) || b(p[1], g) ? (_(g[0], p[1]) > _(g[0], g[1]) && (g[1] = p[1]), _(p[0], g[1]) > _(g[0], g[1]) && (g[0] = p[0])) : a.push(g = p);
            for (var c, l, p, d = -1 / 0, g = (u = 0, a[l = a.length - 1]); u <= l; g = p, ++u)
                p = a[u], (c = _(g[1], p[0])) > d && (d = c, t = p[0], r = g[1]);
        } return s = f = null, t === 1 / 0 || e === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[t, e], [r, i]]; }; }(), n.geo.centroid = function (t) { Me = _e = we = be = ke = Ce = Ee = Ne = Se = Ae = Le = 0, n.geo.stream(t, He); var e = Se, r = Ae, i = Le, o = e * e + r * r + i * i; return o < Cn && (e = Ce, r = Ee, i = Ne, _e < kn && (e = we, r = be, i = ke), (o = e * e + r * r + i * i) < Cn) ? [NaN, NaN] : [Math.atan2(r, e) * Tn, Dn(i / Math.sqrt(o)) * Tn]; }; var He = { sphere: D, point: Ye, lineStart: Ve, lineEnd: $e, polygonStart: function () { He.lineStart = Be; }, polygonEnd: function () { He.lineStart = Ve; } }; function Ye(n, t) { n *= Ln; var e = Math.cos(t *= Ln); Ze(e * Math.cos(n), e * Math.sin(n), Math.sin(t)); } function Ze(n, t, e) { we += (n - we) / ++Me, be += (t - be) / Me, ke += (e - ke) / Me; } function Ve() { var n, t, e; function r(r, i) { r *= Ln; var o = Math.cos(i *= Ln), u = o * Math.cos(r), a = o * Math.sin(r), c = Math.sin(i), l = Math.atan2(Math.sqrt((l = t * c - e * a) * l + (l = e * u - n * c) * l + (l = n * a - t * u) * l), n * u + t * a + e * c); _e += l, Ce += l * (n + (n = u)), Ee += l * (t + (t = a)), Ne += l * (e + (e = c)), Ze(n, t, e); } He.point = function (i, o) { i *= Ln; var u = Math.cos(o *= Ln); n = u * Math.cos(i), t = u * Math.sin(i), e = Math.sin(o), He.point = r, Ze(n, t, e); }; } function $e() { He.point = Ye; } function Be() { var n, t, e, r, i; function o(n, t) { n *= Ln; var o = Math.cos(t *= Ln), u = o * Math.cos(n), a = o * Math.sin(n), c = Math.sin(t), l = r * c - i * a, s = i * u - e * c, f = e * a - r * u, h = Math.sqrt(l * l + s * s + f * f), p = e * u + r * a + i * c, d = h && -qn(p) / h, g = Math.atan2(h, p); Se += d * l, Ae += d * s, Le += d * f, _e += g, Ce += g * (e + (e = u)), Ee += g * (r + (r = a)), Ne += g * (i + (i = c)), Ze(e, r, i); } He.point = function (u, a) { n = u, t = a, He.point = o, u *= Ln; var c = Math.cos(a *= Ln); e = c * Math.cos(u), r = c * Math.sin(u), i = Math.sin(a), Ze(e, r, i); }, He.lineEnd = function () { o(n, t), He.lineEnd = $e, He.point = Ye; }; } function Xe(n, t) { function e(e, r) { return e = n(e, r), t(e[0], e[1]); } return n.invert && t.invert && (e.invert = function (e, r) { return (e = t.invert(e, r)) && n.invert(e[0], e[1]); }), e; } function We() { return !0; } function Je(n, t, e, r, i) { var o = [], u = []; if (n.forEach(function (n) { if (!((t = n.length - 1) <= 0)) {
            var t, e = n[0], r = n[t];
            if (Ie(e, r)) {
                i.lineStart();
                for (var a = 0; a < t; ++a)
                    i.point((e = n[a])[0], e[1]);
                i.lineEnd();
            }
            else {
                var c = new Ke(e, n, null, !0), l = new Ke(e, null, c, !1);
                c.o = l, o.push(c), u.push(l), c = new Ke(r, n, null, !1), l = new Ke(r, null, c, !0), c.o = l, o.push(c), u.push(l);
            }
        } }), u.sort(t), Ge(o), Ge(u), o.length) {
            for (var a = 0, c = e, l = u.length; a < l; ++a)
                u[a].e = c = !c;
            for (var s, f, h = o[0];;) {
                for (var p = h, d = !0; p.v;)
                    if ((p = p.n) === h)
                        return;
                s = p.z, i.lineStart();
                do {
                    if (p.v = p.o.v = !0, p.e) {
                        if (d)
                            for (a = 0, l = s.length; a < l; ++a)
                                i.point((f = s[a])[0], f[1]);
                        else
                            r(p.x, p.n.x, 1, i);
                        p = p.n;
                    }
                    else {
                        if (d)
                            for (a = (s = p.p.z).length - 1; a >= 0; --a)
                                i.point((f = s[a])[0], f[1]);
                        else
                            r(p.x, p.p.x, -1, i);
                        p = p.p;
                    }
                    s = (p = p.o).z, d = !d;
                } while (!p.v);
                i.lineEnd();
            }
        } } function Ge(n) { if (t = n.length) {
            for (var t, e, r = 0, i = n[0]; ++r < t;)
                i.n = e = n[r], e.p = i, i = e;
            i.n = e = n[0], e.p = i;
        } } function Ke(n, t, e, r) { this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null; } function Qe(t, e, r, i) { return function (o, u) { var a, c = e(u), l = o.invert(i[0], i[1]), s = { point: f, lineStart: p, lineEnd: d, polygonStart: function () { s.point = M, s.lineStart = _, s.lineEnd = w, a = [], g = []; }, polygonEnd: function () { s.point = f, s.lineStart = p, s.lineEnd = d, a = n.merge(a); var t = function (n, t) { var e = n[0], r = n[1], i = [Math.sin(e), -Math.cos(e), 0], o = 0, u = 0; Te.reset(); for (var a = 0, c = t.length; a < c; ++a) {
                var l = t[a], s = l.length;
                if (s)
                    for (var f = l[0], h = f[0], p = f[1] / 2 + En / 4, d = Math.sin(p), g = Math.cos(p), v = 1;;) {
                        v === s && (v = 0);
                        var y = (n = l[v])[0], m = n[1] / 2 + En / 4, x = Math.sin(m), M = Math.cos(m), _ = y - h, w = _ >= 0 ? 1 : -1, b = w * _, k = b > En, C = d * x;
                        if (Te.add(Math.atan2(C * w * Math.sin(b), g * M + C * Math.cos(b))), o += k ? _ + w * Nn : _, k ^ h >= e ^ y >= e) {
                            var E = Re(qe(f), qe(n));
                            Oe(E);
                            var N = Re(i, E);
                            Oe(N);
                            var S = (k ^ _ >= 0 ? -1 : 1) * Dn(N[2]);
                            (r > S || r === S && (E[0] || E[1])) && (u += k ^ _ >= 0 ? 1 : -1);
                        }
                        if (!v++)
                            break;
                        h = y, d = x, g = M, f = n;
                    }
            } return (o < -kn || o < kn && Te < -kn) ^ 1 & u; }(l, g); a.length ? (x || (u.polygonStart(), x = !0), Je(a, er, t, r, u)) : t && (x || (u.polygonStart(), x = !0), u.lineStart(), r(null, null, 1, u), u.lineEnd()), x && (u.polygonEnd(), x = !1), a = g = null; }, sphere: function () { u.polygonStart(), u.lineStart(), r(null, null, 1, u), u.lineEnd(), u.polygonEnd(); } }; function f(n, e) { var r = o(n, e); t(n = r[0], e = r[1]) && u.point(n, e); } function h(n, t) { var e = o(n, t); c.point(e[0], e[1]); } function p() { s.point = h, c.lineStart(); } function d() { s.point = f, c.lineEnd(); } var g, v, y = tr(), m = e(y), x = !1; function M(n, t) { v.push([n, t]); var e = o(n, t); m.point(e[0], e[1]); } function _() { m.lineStart(), v = []; } function w() { M(v[0][0], v[0][1]), m.lineEnd(); var n, t = m.clean(), e = y.buffer(), r = e.length; if (v.pop(), g.push(v), v = null, r)
            if (1 & t) {
                var i, o = -1;
                if ((r = (n = e[0]).length - 1) > 0) {
                    for (x || (u.polygonStart(), x = !0), u.lineStart(); ++o < r;)
                        u.point((i = n[o])[0], i[1]);
                    u.lineEnd();
                }
            }
            else
                r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), a.push(e.filter(nr)); } return s; }; } function nr(n) { return n.length > 1; } function tr() { var n, t = []; return { lineStart: function () { t.push(n = []); }, point: function (t, e) { n.push([t, e]); }, lineEnd: D, buffer: function () { var e = t; return t = [], n = null, e; }, rejoin: function () { t.length > 1 && t.push(t.pop().concat(t.shift())); } }; } function er(n, t) { return ((n = n.x)[0] < 0 ? n[1] - An - kn : An - n[1]) - ((t = t.x)[0] < 0 ? t[1] - An - kn : An - t[1]); } var rr = Qe(We, function (n) { var t, e = NaN, r = NaN, i = NaN; return { lineStart: function () { n.lineStart(), t = 1; }, point: function (o, u) { var a = o > 0 ? En : -En, c = m(o - e); m(c - En) < kn ? (n.point(e, r = (r + u) / 2 > 0 ? An : -An), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(o, r), t = 0) : i !== a && c >= En && (m(e - i) < kn && (e -= i * kn), m(o - a) < kn && (o -= a * kn), r = function (n, t, e, r) { var i, o, u = Math.sin(n - e); return m(u) > kn ? Math.atan((Math.sin(t) * (o = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(t)) * Math.sin(n)) / (i * o * u)) : (t + r) / 2; }(e, r, o, u), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = o, r = u), i = a; }, lineEnd: function () { n.lineEnd(), e = r = NaN; }, clean: function () { return 2 - t; } }; }, function (n, t, e, r) { var i; if (null == n)
            i = e * An, r.point(-En, i), r.point(0, i), r.point(En, i), r.point(En, 0), r.point(En, -i), r.point(0, -i), r.point(-En, -i), r.point(-En, 0), r.point(-En, i);
        else if (m(n[0] - t[0]) > kn) {
            var o = n[0] < t[0] ? En : -En;
            i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
        }
        else
            r.point(t[0], t[1]); }, [-En, -En / 2]); function ir(n, t, e, r) { return function (i) { var o, u = i.a, a = i.b, c = u.x, l = u.y, s = 0, f = 1, h = a.x - c, p = a.y - l; if (o = n - c, h || !(o > 0)) {
            if (o /= h, h < 0) {
                if (o < s)
                    return;
                o < f && (f = o);
            }
            else if (h > 0) {
                if (o > f)
                    return;
                o > s && (s = o);
            }
            if (o = e - c, h || !(o < 0)) {
                if (o /= h, h < 0) {
                    if (o > f)
                        return;
                    o > s && (s = o);
                }
                else if (h > 0) {
                    if (o < s)
                        return;
                    o < f && (f = o);
                }
                if (o = t - l, p || !(o > 0)) {
                    if (o /= p, p < 0) {
                        if (o < s)
                            return;
                        o < f && (f = o);
                    }
                    else if (p > 0) {
                        if (o > f)
                            return;
                        o > s && (s = o);
                    }
                    if (o = r - l, p || !(o < 0)) {
                        if (o /= p, p < 0) {
                            if (o > f)
                                return;
                            o > s && (s = o);
                        }
                        else if (p > 0) {
                            if (o < s)
                                return;
                            o < f && (f = o);
                        }
                        return s > 0 && (i.a = { x: c + s * h, y: l + s * p }), f < 1 && (i.b = { x: c + f * h, y: l + f * p }), i;
                    }
                }
            }
        } }; } var or = 1e9; function ur(t, e, r, i) { return function (c) { var l, s, f, h, p, d, g, v, y, m, x, M = c, _ = tr(), w = ir(t, e, r, i), b = { point: E, lineStart: function () { b.point = N, s && s.push(f = []); m = !0, y = !1, g = v = NaN; }, lineEnd: function () { l && (N(h, p), d && y && _.rejoin(), l.push(_.buffer())); b.point = E, y && c.lineEnd(); }, polygonStart: function () { c = _, l = [], s = [], x = !0; }, polygonEnd: function () { c = M, l = n.merge(l); var e = function (n) { for (var t = 0, e = s.length, r = n[1], i = 0; i < e; ++i)
                for (var o, u = 1, a = s[i], c = a.length, l = a[0]; u < c; ++u)
                    o = a[u], l[1] <= r ? o[1] > r && zn(l, o, n) > 0 && ++t : o[1] <= r && zn(l, o, n) < 0 && --t, l = o; return 0 !== t; }([t, i]), r = x && e, o = l.length; (r || o) && (c.polygonStart(), r && (c.lineStart(), k(null, null, 1, c), c.lineEnd()), o && Je(l, u, e, k, c), c.polygonEnd()), l = s = f = null; } }; function k(n, u, c, l) { var s = 0, f = 0; if (null == n || (s = o(n, c)) !== (f = o(u, c)) || a(n, u) < 0 ^ c > 0)
            do {
                l.point(0 === s || 3 === s ? t : r, s > 1 ? i : e);
            } while ((s = (s + c + 4) % 4) !== f);
        else
            l.point(u[0], u[1]); } function C(n, o) { return t <= n && n <= r && e <= o && o <= i; } function E(n, t) { C(n, t) && c.point(n, t); } function N(n, t) { var e = C(n = Math.max(-or, Math.min(or, n)), t = Math.max(-or, Math.min(or, t))); if (s && f.push([n, t]), m)
            h = n, p = t, d = e, m = !1, e && (c.lineStart(), c.point(n, t));
        else if (e && y)
            c.point(n, t);
        else {
            var r = { a: { x: g, y: v }, b: { x: n, y: t } };
            w(r) ? (y || (c.lineStart(), c.point(r.a.x, r.a.y)), c.point(r.b.x, r.b.y), e || c.lineEnd(), x = !1) : e && (c.lineStart(), c.point(n, t), x = !1);
        } g = n, v = t, y = e; } return b; }; function o(n, i) { return m(n[0] - t) < kn ? i > 0 ? 0 : 3 : m(n[0] - r) < kn ? i > 0 ? 2 : 1 : m(n[1] - e) < kn ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2; } function u(n, t) { return a(n.x, t.x); } function a(n, t) { var e = o(n, 1), r = o(t, 1); return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]; } } function ar(n) { var t = 0, e = En / 3, r = Tr(n), i = r(t, e); return i.parallels = function (n) { return arguments.length ? r(t = n[0] * En / 180, e = n[1] * En / 180) : [t / En * 180, e / En * 180]; }, i; } function cr(n, t) { var e = Math.sin(n), r = (e + Math.sin(t)) / 2, i = 1 + e * (2 * r - e), o = Math.sqrt(i) / r; function u(n, t) { var e = Math.sqrt(i - 2 * r * Math.sin(t)) / r; return [e * Math.sin(n *= r), o - e * Math.cos(n)]; } return u.invert = function (n, t) { var e = o - t; return [Math.atan2(n, e) / r, Dn((i - (n * n + e * e) * r * r) / (2 * r))]; }, u; } n.geo.clipExtent = function () { var n, t, e, r, i, o, u = { stream: function (n) { return i && (i.valid = !1), (i = o(n)).valid = !0, i; }, extent: function (a) { return arguments.length ? (o = ur(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), i && (i.valid = !1, i = null), u) : [[n, t], [e, r]]; } }; return u.extent([[0, 0], [960, 500]]); }, (n.geo.conicEqualArea = function () { return ar(cr); }).raw = cr, n.geo.albers = function () { return n.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070); }, n.geo.albersUsa = function () { var t, e, r, i, o = n.geo.albers(), u = n.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), a = n.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c = { point: function (n, e) { t = [n, e]; } }; function l(n) { var o = n[0], u = n[1]; return t = null, e(o, u), t || (r(o, u), t) || i(o, u), t; } return l.invert = function (n) { var t = o.scale(), e = o.translate(), r = (n[0] - e[0]) / t, i = (n[1] - e[1]) / t; return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? u : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? a : o).invert(n); }, l.stream = function (n) { var t = o.stream(n), e = u.stream(n), r = a.stream(n); return { point: function (n, i) { t.point(n, i), e.point(n, i), r.point(n, i); }, sphere: function () { t.sphere(), e.sphere(), r.sphere(); }, lineStart: function () { t.lineStart(), e.lineStart(), r.lineStart(); }, lineEnd: function () { t.lineEnd(), e.lineEnd(), r.lineEnd(); }, polygonStart: function () { t.polygonStart(), e.polygonStart(), r.polygonStart(); }, polygonEnd: function () { t.polygonEnd(), e.polygonEnd(), r.polygonEnd(); } }; }, l.precision = function (n) { return arguments.length ? (o.precision(n), u.precision(n), a.precision(n), l) : o.precision(); }, l.scale = function (n) { return arguments.length ? (o.scale(n), u.scale(.35 * n), a.scale(n), l.translate(o.translate())) : o.scale(); }, l.translate = function (n) { if (!arguments.length)
            return o.translate(); var t = o.scale(), s = +n[0], f = +n[1]; return e = o.translate(n).clipExtent([[s - .455 * t, f - .238 * t], [s + .455 * t, f + .238 * t]]).stream(c).point, r = u.translate([s - .307 * t, f + .201 * t]).clipExtent([[s - .425 * t + kn, f + .12 * t + kn], [s - .214 * t - kn, f + .234 * t - kn]]).stream(c).point, i = a.translate([s - .205 * t, f + .212 * t]).clipExtent([[s - .214 * t + kn, f + .166 * t + kn], [s - .115 * t - kn, f + .234 * t - kn]]).stream(c).point, l; }, l.scale(1070); }; var lr, sr, fr, hr, pr, dr, gr = { point: D, lineStart: D, lineEnd: D, polygonStart: function () { sr = 0, gr.lineStart = vr; }, polygonEnd: function () { gr.lineStart = gr.lineEnd = gr.point = D, lr += m(sr / 2); } }; function vr() { var n, t, e, r; function i(n, t) { sr += r * n - e * t, e = n, r = t; } gr.point = function (o, u) { gr.point = i, n = e = o, t = r = u; }, gr.lineEnd = function () { i(n, t); }; } var yr = { point: function (n, t) { n < fr && (fr = n); n > pr && (pr = n); t < hr && (hr = t); t > dr && (dr = t); }, lineStart: D, lineEnd: D, polygonStart: D, polygonEnd: D }; function mr() { var n = xr(4.5), t = [], e = { point: r, lineStart: function () { e.point = i; }, lineEnd: u, polygonStart: function () { e.lineEnd = a; }, polygonEnd: function () { e.lineEnd = u, e.point = r; }, pointRadius: function (t) { return n = xr(t), e; }, result: function () { if (t.length) {
                var n = t.join("");
                return t = [], n;
            } } }; function r(e, r) { t.push("M", e, ",", r, n); } function i(n, r) { t.push("M", n, ",", r), e.point = o; } function o(n, e) { t.push("L", n, ",", e); } function u() { e.point = r; } function a() { t.push("Z"); } return e; } function xr(n) { return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"; } var Mr, _r = { point: wr, lineStart: br, lineEnd: kr, polygonStart: function () { _r.lineStart = Cr; }, polygonEnd: function () { _r.point = wr, _r.lineStart = br, _r.lineEnd = kr; } }; function wr(n, t) { we += n, be += t, ++ke; } function br() { var n, t; function e(e, r) { var i = e - n, o = r - t, u = Math.sqrt(i * i + o * o); Ce += u * (n + e) / 2, Ee += u * (t + r) / 2, Ne += u, wr(n = e, t = r); } _r.point = function (r, i) { _r.point = e, wr(n = r, t = i); }; } function kr() { _r.point = wr; } function Cr() { var n, t, e, r; function i(n, t) { var i = n - e, o = t - r, u = Math.sqrt(i * i + o * o); Ce += u * (e + n) / 2, Ee += u * (r + t) / 2, Ne += u, Se += (u = r * n - e * t) * (e + n), Ae += u * (r + t), Le += 3 * u, wr(e = n, r = t); } _r.point = function (o, u) { _r.point = i, wr(n = e = o, t = r = u); }, _r.lineEnd = function () { i(n, t); }; } function Er(n) { var t = 4.5, e = { point: r, lineStart: function () { e.point = i; }, lineEnd: u, polygonStart: function () { e.lineEnd = a; }, polygonEnd: function () { e.lineEnd = u, e.point = r; }, pointRadius: function (n) { return t = n, e; }, result: D }; function r(e, r) { n.moveTo(e + t, r), n.arc(e, r, t, 0, Nn); } function i(t, r) { n.moveTo(t, r), e.point = o; } function o(t, e) { n.lineTo(t, e); } function u() { e.point = r; } function a() { n.closePath(); } return e; } function Nr(n) { var t = .5, e = Math.cos(30 * Ln), r = 16; function i(t) { return (r ? function (t) { var e, i, u, a, c, l, s, f, h, p, d, g, v = { point: y, lineStart: m, lineEnd: M, polygonStart: function () { t.polygonStart(), v.lineStart = _; }, polygonEnd: function () { t.polygonEnd(), v.lineStart = m; } }; function y(e, r) { e = n(e, r), t.point(e[0], e[1]); } function m() { f = NaN, v.point = x, t.lineStart(); } function x(e, i) { var u = qe([e, i]), a = n(e, i); o(f, h, s, p, d, g, f = a[0], h = a[1], s = e, p = u[0], d = u[1], g = u[2], r, t), t.point(f, h); } function M() { v.point = y, t.lineEnd(); } function _() { m(), v.point = w, v.lineEnd = b; } function w(n, t) { x(e = n, t), i = f, u = h, a = p, c = d, l = g, v.point = x; } function b() { o(f, h, s, p, d, g, i, u, e, a, c, l, r, t), v.lineEnd = M, M(); } return v; } : function (t) { return Ar(t, function (e, r) { e = n(e, r), t.point(e[0], e[1]); }); })(t); } function o(r, i, u, a, c, l, s, f, h, p, d, g, v, y) { var x = s - r, M = f - i, _ = x * x + M * M; if (_ > 4 * t && v--) {
            var w = a + p, b = c + d, k = l + g, C = Math.sqrt(w * w + b * b + k * k), E = Math.asin(k /= C), N = m(m(k) - 1) < kn || m(u - h) < kn ? (u + h) / 2 : Math.atan2(b, w), S = n(N, E), A = S[0], L = S[1], T = A - r, F = L - i, z = M * T - x * F;
            (z * z / _ > t || m((x * T + M * F) / _ - .5) > .3 || a * p + c * d + l * g < e) && (o(r, i, u, a, c, l, A, L, N, w /= C, b /= C, k, v, y), y.point(A, L), o(A, L, N, w, b, k, s, f, h, p, d, g, v, y));
        } } return i.precision = function (n) { return arguments.length ? (r = (t = n * n) > 0 && 16, i) : Math.sqrt(t); }, i; } function Sr(n) { this.stream = n; } function Ar(n, t) { return { point: t, sphere: function () { n.sphere(); }, lineStart: function () { n.lineStart(); }, lineEnd: function () { n.lineEnd(); }, polygonStart: function () { n.polygonStart(); }, polygonEnd: function () { n.polygonEnd(); } }; } function Lr(n) { return Tr(function () { return n; })(); } function Tr(t) { var e, r, i, o, u, a, c = Nr(function (n, t) { return [(n = e(n, t))[0] * l + o, u - n[1] * l]; }), l = 150, s = 480, f = 250, h = 0, p = 0, d = 0, g = 0, v = 0, y = rr, x = T, M = null, _ = null; function w(n) { return [(n = i(n[0] * Ln, n[1] * Ln))[0] * l + o, u - n[1] * l]; } function b(n) { return (n = i.invert((n[0] - o) / l, (u - n[1]) / l)) && [n[0] * Tn, n[1] * Tn]; } function k() { i = Xe(r = Dr(d, g, v), e); var n = e(h, p); return o = s - n[0] * l, u = f + n[1] * l, C(); } function C() { return a && (a.valid = !1, a = null), w; } return w.stream = function (n) { return a && (a.valid = !1), (a = Fr(y(r, c(x(n))))).valid = !0, a; }, w.clipAngle = function (n) { return arguments.length ? (y = null == n ? (M = n, rr) : function (n) { var t = Math.cos(n), e = t > 0, r = m(t) > kn; return Qe(i, function (n) { var t, a, c, l, s; return { lineStart: function () { l = c = !1, s = 1; }, point: function (f, h) { var p, d = [f, h], g = i(f, h), v = e ? g ? 0 : u(f, h) : g ? u(f + (f < 0 ? En : -En), h) : 0; if (!t && (l = c = g) && n.lineStart(), g !== c && (p = o(t, d), (Ie(t, p) || Ie(d, p)) && (d[0] += kn, d[1] += kn, g = i(d[0], d[1]))), g !== c)
                s = 0, g ? (n.lineStart(), p = o(d, t), n.point(p[0], p[1])) : (p = o(t, d), n.point(p[0], p[1]), n.lineEnd()), t = p;
            else if (r && t && e ^ g) {
                var y;
                v & a || !(y = o(d, t, !0)) || (s = 0, e ? (n.lineStart(), n.point(y[0][0], y[0][1]), n.point(y[1][0], y[1][1]), n.lineEnd()) : (n.point(y[1][0], y[1][1]), n.lineEnd(), n.lineStart(), n.point(y[0][0], y[0][1])));
            } !g || t && Ie(t, d) || n.point(d[0], d[1]), t = d, c = g, a = v; }, lineEnd: function () { c && n.lineEnd(), t = null; }, clean: function () { return s | (l && c) << 1; } }; }, Or(n, 6 * Ln), e ? [0, -n] : [-En, n - En]); function i(n, e) { return Math.cos(n) * Math.cos(e) > t; } function o(n, e, r) { var i = [1, 0, 0], o = Re(qe(n), qe(e)), u = De(o, o), a = o[0], c = u - a * a; if (!c)
            return !r && n; var l = t * u / c, s = -t * a / c, f = Re(i, o), h = Pe(i, l); je(h, Pe(o, s)); var p = f, d = De(h, p), g = De(p, p), v = d * d - g * (De(h, h) - 1); if (!(v < 0)) {
            var y = Math.sqrt(v), x = Pe(p, (-d - y) / g);
            if (je(x, h), x = Ue(x), !r)
                return x;
            var M, _ = n[0], w = e[0], b = n[1], k = e[1];
            w < _ && (M = _, _ = w, w = M);
            var C = w - _, E = m(C - En) < kn;
            if (!E && k < b && (M = b, b = k, k = M), E || C < kn ? E ? b + k > 0 ^ x[1] < (m(x[0] - _) < kn ? b : k) : b <= x[1] && x[1] <= k : C > En ^ (_ <= x[0] && x[0] <= w)) {
                var N = Pe(p, (-d + y) / g);
                return je(N, h), [x, Ue(N)];
            }
        } } function u(t, r) { var i = e ? n : En - n, o = 0; return t < -i ? o |= 1 : t > i && (o |= 2), r < -i ? o |= 4 : r > i && (o |= 8), o; } }((M = +n) * Ln), C()) : M; }, w.clipExtent = function (n) { return arguments.length ? (_ = n, x = n ? ur(n[0][0], n[0][1], n[1][0], n[1][1]) : T, C()) : _; }, w.scale = function (n) { return arguments.length ? (l = +n, k()) : l; }, w.translate = function (n) { return arguments.length ? (s = +n[0], f = +n[1], k()) : [s, f]; }, w.center = function (n) { return arguments.length ? (h = n[0] % 360 * Ln, p = n[1] % 360 * Ln, k()) : [h * Tn, p * Tn]; }, w.rotate = function (n) { return arguments.length ? (d = n[0] % 360 * Ln, g = n[1] % 360 * Ln, v = n.length > 2 ? n[2] % 360 * Ln : 0, k()) : [d * Tn, g * Tn, v * Tn]; }, n.rebind(w, c, "precision"), function () { return e = t.apply(this, arguments), w.invert = e.invert && b, k(); }; } function Fr(n) { return Ar(n, function (t, e) { n.point(t * Ln, e * Ln); }); } function zr(n, t) { return [n, t]; } function qr(n, t) { return [n > En ? n - Nn : n < -En ? n + Nn : n, t]; } function Dr(n, t, e) { return n ? t || e ? Xe(jr(n), Pr(t, e)) : jr(n) : t || e ? Pr(t, e) : qr; } function Rr(n) { return function (t, e) { return [(t += n) > En ? t - Nn : t < -En ? t + Nn : t, e]; }; } function jr(n) { var t = Rr(n); return t.invert = Rr(-n), t; } function Pr(n, t) { var e = Math.cos(n), r = Math.sin(n), i = Math.cos(t), o = Math.sin(t); function u(n, t) { var u = Math.cos(t), a = Math.cos(n) * u, c = Math.sin(n) * u, l = Math.sin(t), s = l * e + a * r; return [Math.atan2(c * i - s * o, a * e - l * r), Dn(s * i + c * o)]; } return u.invert = function (n, t) { var u = Math.cos(t), a = Math.cos(n) * u, c = Math.sin(n) * u, l = Math.sin(t), s = l * i - c * o; return [Math.atan2(c * i + l * o, a * e + s * r), Dn(s * e - a * r)]; }, u; } function Or(n, t) { var e = Math.cos(n), r = Math.sin(n); return function (i, o, u, a) { var c = u * t; null != i ? (i = Ur(e, i), o = Ur(e, o), (u > 0 ? i < o : i > o) && (i += u * Nn)) : (i = n + u * Nn, o = n - .5 * c); for (var l, s = i; u > 0 ? s > o : s < o; s -= c)
            a.point((l = Ue([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], l[1]); }; } function Ur(n, t) { var e = qe(t); e[0] -= n, Oe(e); var r = qn(-e[1]); return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - kn) % (2 * Math.PI); } function Ir(t, e, r) { var i = n.range(t, e - kn, r).concat(e); return function (n) { return i.map(function (t) { return [n, t]; }); }; } function Hr(t, e, r) { var i = n.range(t, e - kn, r).concat(e); return function (n) { return i.map(function (t) { return [t, n]; }); }; } function Yr(n) { return n.source; } function Zr(n) { return n.target; } n.geo.path = function () { var t, e, r, i, o, u = 4.5; function a(t) { return t && ("function" == typeof u && i.pointRadius(+u.apply(this, arguments)), o && o.valid || (o = r(i)), n.geo.stream(t, o)), i.result(); } function c() { return o = null, a; } return a.area = function (t) { return lr = 0, n.geo.stream(t, r(gr)), lr; }, a.centroid = function (t) { return we = be = ke = Ce = Ee = Ne = Se = Ae = Le = 0, n.geo.stream(t, r(_r)), Le ? [Se / Le, Ae / Le] : Ne ? [Ce / Ne, Ee / Ne] : ke ? [we / ke, be / ke] : [NaN, NaN]; }, a.bounds = function (t) { return pr = dr = -(fr = hr = 1 / 0), n.geo.stream(t, r(yr)), [[fr, hr], [pr, dr]]; }, a.projection = function (n) { return arguments.length ? (r = (t = n) ? n.stream || (e = n, i = Nr(function (n, t) { return e([n * Tn, t * Tn]); }), function (n) { return Fr(i(n)); }) : T, c()) : t; var e, i; }, a.context = function (n) { return arguments.length ? (i = null == (e = n) ? new mr : new Er(n), "function" != typeof u && i.pointRadius(u), c()) : e; }, a.pointRadius = function (n) { return arguments.length ? (u = "function" == typeof n ? n : (i.pointRadius(+n), +n), a) : u; }, a.projection(n.geo.albersUsa()).context(null); }, n.geo.transform = function (n) { return { stream: function (t) { var e = new Sr(t); for (var r in n)
                e[r] = n[r]; return e; } }; }, Sr.prototype = { point: function (n, t) { this.stream.point(n, t); }, sphere: function () { this.stream.sphere(); }, lineStart: function () { this.stream.lineStart(); }, lineEnd: function () { this.stream.lineEnd(); }, polygonStart: function () { this.stream.polygonStart(); }, polygonEnd: function () { this.stream.polygonEnd(); } }, n.geo.projection = Lr, n.geo.projectionMutator = Tr, (n.geo.equirectangular = function () { return Lr(zr); }).raw = zr.invert = zr, n.geo.rotation = function (n) { function t(t) { return (t = n(t[0] * Ln, t[1] * Ln))[0] *= Tn, t[1] *= Tn, t; } return n = Dr(n[0] % 360 * Ln, n[1] * Ln, n.length > 2 ? n[2] * Ln : 0), t.invert = function (t) { return (t = n.invert(t[0] * Ln, t[1] * Ln))[0] *= Tn, t[1] *= Tn, t; }, t; }, qr.invert = zr, n.geo.circle = function () { var n, t, e = [0, 0], r = 6; function i() { var n = "function" == typeof e ? e.apply(this, arguments) : e, r = Dr(-n[0] * Ln, -n[1] * Ln, 0).invert, i = []; return t(null, null, 1, { point: function (n, t) { i.push(n = r(n, t)), n[0] *= Tn, n[1] *= Tn; } }), { type: "Polygon", coordinates: [i] }; } return i.origin = function (n) { return arguments.length ? (e = n, i) : e; }, i.angle = function (e) { return arguments.length ? (t = Or((n = +e) * Ln, r * Ln), i) : n; }, i.precision = function (e) { return arguments.length ? (t = Or(n * Ln, (r = +e) * Ln), i) : r; }, i.angle(90); }, n.geo.distance = function (n, t) { var e, r = (t[0] - n[0]) * Ln, i = n[1] * Ln, o = t[1] * Ln, u = Math.sin(r), a = Math.cos(r), c = Math.sin(i), l = Math.cos(i), s = Math.sin(o), f = Math.cos(o); return Math.atan2(Math.sqrt((e = f * u) * e + (e = l * s - c * f * a) * e), c * s + l * f * a); }, n.geo.graticule = function () { var t, e, r, i, o, u, a, c, l, s, f, h, p = 10, d = p, g = 90, v = 360, y = 2.5; function x() { return { type: "MultiLineString", coordinates: M() }; } function M() { return n.range(Math.ceil(i / g) * g, r, g).map(f).concat(n.range(Math.ceil(c / v) * v, a, v).map(h)).concat(n.range(Math.ceil(e / p) * p, t, p).filter(function (n) { return m(n % g) > kn; }).map(l)).concat(n.range(Math.ceil(u / d) * d, o, d).filter(function (n) { return m(n % v) > kn; }).map(s)); } return x.lines = function () { return M().map(function (n) { return { type: "LineString", coordinates: n }; }); }, x.outline = function () { return { type: "Polygon", coordinates: [f(i).concat(h(a).slice(1), f(r).reverse().slice(1), h(c).reverse().slice(1))] }; }, x.extent = function (n) { return arguments.length ? x.majorExtent(n).minorExtent(n) : x.minorExtent(); }, x.majorExtent = function (n) { return arguments.length ? (i = +n[0][0], r = +n[1][0], c = +n[0][1], a = +n[1][1], i > r && (n = i, i = r, r = n), c > a && (n = c, c = a, a = n), x.precision(y)) : [[i, c], [r, a]]; }, x.minorExtent = function (n) { return arguments.length ? (e = +n[0][0], t = +n[1][0], u = +n[0][1], o = +n[1][1], e > t && (n = e, e = t, t = n), u > o && (n = u, u = o, o = n), x.precision(y)) : [[e, u], [t, o]]; }, x.step = function (n) { return arguments.length ? x.majorStep(n).minorStep(n) : x.minorStep(); }, x.majorStep = function (n) { return arguments.length ? (g = +n[0], v = +n[1], x) : [g, v]; }, x.minorStep = function (n) { return arguments.length ? (p = +n[0], d = +n[1], x) : [p, d]; }, x.precision = function (n) { return arguments.length ? (y = +n, l = Ir(u, o, 90), s = Hr(e, t, y), f = Ir(c, a, 90), h = Hr(i, r, y), x) : y; }, x.majorExtent([[-180, -90 + kn], [180, 90 - kn]]).minorExtent([[-180, -80 - kn], [180, 80 + kn]]); }, n.geo.greatArc = function () { var t, e, r = Yr, i = Zr; function o() { return { type: "LineString", coordinates: [t || r.apply(this, arguments), e || i.apply(this, arguments)] }; } return o.distance = function () { return n.geo.distance(t || r.apply(this, arguments), e || i.apply(this, arguments)); }, o.source = function (n) { return arguments.length ? (r = n, t = "function" == typeof n ? null : n, o) : r; }, o.target = function (n) { return arguments.length ? (i = n, e = "function" == typeof n ? null : n, o) : i; }, o.precision = function () { return arguments.length ? o : 0; }, o; }, n.geo.interpolate = function (n, t) { return e = n[0] * Ln, r = n[1] * Ln, i = t[0] * Ln, o = t[1] * Ln, u = Math.cos(r), a = Math.sin(r), c = Math.cos(o), l = Math.sin(o), s = u * Math.cos(e), f = u * Math.sin(e), h = c * Math.cos(i), p = c * Math.sin(i), d = 2 * Math.asin(Math.sqrt(jn(o - r) + u * c * jn(i - e))), g = 1 / Math.sin(d), (v = d ? function (n) { var t = Math.sin(n *= d) * g, e = Math.sin(d - n) * g, r = e * s + t * h, i = e * f + t * p, o = e * a + t * l; return [Math.atan2(i, r) * Tn, Math.atan2(o, Math.sqrt(r * r + i * i)) * Tn]; } : function () { return [e * Tn, r * Tn]; }).distance = d, v; var e, r, i, o, u, a, c, l, s, f, h, p, d, g, v; }, n.geo.length = function (t) { return Mr = 0, n.geo.stream(t, Vr), Mr; }; var Vr = { sphere: D, point: D, lineStart: function () { var n, t, e; function r(r, i) { var o = Math.sin(i *= Ln), u = Math.cos(i), a = m((r *= Ln) - n), c = Math.cos(a); Mr += Math.atan2(Math.sqrt((a = u * Math.sin(a)) * a + (a = e * o - t * u * c) * a), t * o + e * u * c), n = r, t = o, e = u; } Vr.point = function (i, o) { n = i * Ln, t = Math.sin(o *= Ln), e = Math.cos(o), Vr.point = r; }, Vr.lineEnd = function () { Vr.point = Vr.lineEnd = D; }; }, lineEnd: D, polygonStart: D, polygonEnd: D }; function $r(n, t) { function e(t, e) { var r = Math.cos(t), i = Math.cos(e), o = n(r * i); return [o * i * Math.sin(t), o * Math.sin(e)]; } return e.invert = function (n, e) { var r = Math.sqrt(n * n + e * e), i = t(r), o = Math.sin(i), u = Math.cos(i); return [Math.atan2(n * o, r * u), Math.asin(r && e * o / r)]; }, e; } var Br = $r(function (n) { return Math.sqrt(2 / (1 + n)); }, function (n) { return 2 * Math.asin(n / 2); }); (n.geo.azimuthalEqualArea = function () { return Lr(Br); }).raw = Br; var Xr = $r(function (n) { var t = Math.acos(n); return t && t / Math.sin(t); }, T); function Wr(n, t) { var e = Math.cos(n), r = function (n) { return Math.tan(En / 4 + n / 2); }, i = n === t ? Math.sin(n) : Math.log(e / Math.cos(t)) / Math.log(r(t) / r(n)), o = e * Math.pow(r(n), i) / i; if (!i)
            return Kr; function u(n, t) { o > 0 ? t < -An + kn && (t = -An + kn) : t > An - kn && (t = An - kn); var e = o / Math.pow(r(t), i); return [e * Math.sin(i * n), o - e * Math.cos(i * n)]; } return u.invert = function (n, t) { var e = o - t, r = Fn(i) * Math.sqrt(n * n + e * e); return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - An]; }, u; } function Jr(n, t) { var e = Math.cos(n), r = n === t ? Math.sin(n) : (e - Math.cos(t)) / (t - n), i = e / r + n; if (m(r) < kn)
            return zr; function o(n, t) { var e = i - t; return [e * Math.sin(r * n), i - e * Math.cos(r * n)]; } return o.invert = function (n, t) { var e = i - t; return [Math.atan2(n, e) / r, i - Fn(r) * Math.sqrt(n * n + e * e)]; }, o; } (n.geo.azimuthalEquidistant = function () { return Lr(Xr); }).raw = Xr, (n.geo.conicConformal = function () { return ar(Wr); }).raw = Wr, (n.geo.conicEquidistant = function () { return ar(Jr); }).raw = Jr; var Gr = $r(function (n) { return 1 / n; }, Math.atan); function Kr(n, t) { return [n, Math.log(Math.tan(En / 4 + t / 2))]; } function Qr(n) { var t, e = Lr(n), r = e.scale, i = e.translate, o = e.clipExtent; return e.scale = function () { var n = r.apply(e, arguments); return n === e ? t ? e.clipExtent(null) : e : n; }, e.translate = function () { var n = i.apply(e, arguments); return n === e ? t ? e.clipExtent(null) : e : n; }, e.clipExtent = function (n) { var u = o.apply(e, arguments); if (u === e) {
            if (t = null == n) {
                var a = En * r(), c = i();
                o([[c[0] - a, c[1] - a], [c[0] + a, c[1] + a]]);
            }
        }
        else
            t && (u = null); return u; }, e.clipExtent(null); } (n.geo.gnomonic = function () { return Lr(Gr); }).raw = Gr, Kr.invert = function (n, t) { return [n, 2 * Math.atan(Math.exp(t)) - An]; }, (n.geo.mercator = function () { return Qr(Kr); }).raw = Kr; var ni = $r(function () { return 1; }, Math.asin); (n.geo.orthographic = function () { return Lr(ni); }).raw = ni; var ti = $r(function (n) { return 1 / (1 + n); }, function (n) { return 2 * Math.atan(n); }); function ei(n, t) { return [Math.log(Math.tan(En / 4 + t / 2)), -n]; } function ri(n) { return n[0]; } function ii(n) { return n[1]; } function oi(n) { for (var t = n.length, e = [0, 1], r = 2, i = 2; i < t; i++) {
            for (; r > 1 && zn(n[e[r - 2]], n[e[r - 1]], n[i]) <= 0;)
                --r;
            e[r++] = i;
        } return e.slice(0, r); } function ui(n, t) { return n[0] - t[0] || n[1] - t[1]; } (n.geo.stereographic = function () { return Lr(ti); }).raw = ti, ei.invert = function (n, t) { return [-t, 2 * Math.atan(Math.exp(n)) - An]; }, (n.geo.transverseMercator = function () { var n = Qr(ei), t = n.center, e = n.rotate; return n.center = function (n) { return n ? t([-n[1], n[0]]) : [(n = t())[1], -n[0]]; }, n.rotate = function (n) { return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : [(n = e())[0], n[1], n[2] - 90]; }, e([0, 0, 90]); }).raw = ei, n.geom = {}, n.geom.hull = function (n) { var t = ri, e = ii; if (arguments.length)
            return r(n); function r(n) { if (n.length < 3)
            return []; var r, i = yt(t), o = yt(e), u = n.length, a = [], c = []; for (r = 0; r < u; r++)
            a.push([+i.call(this, n[r], r), +o.call(this, n[r], r), r]); for (a.sort(ui), r = 0; r < u; r++)
            c.push([a[r][0], -a[r][1]]); var l = oi(a), s = oi(c), f = s[0] === l[0], h = s[s.length - 1] === l[l.length - 1], p = []; for (r = l.length - 1; r >= 0; --r)
            p.push(n[a[l[r]][2]]); for (r = +f; r < s.length - h; ++r)
            p.push(n[a[s[r]][2]]); return p; } return r.x = function (n) { return arguments.length ? (t = n, r) : t; }, r.y = function (n) { return arguments.length ? (e = n, r) : e; }, r; }, n.geom.polygon = function (n) { return H(n, ai), n; }; var ai = n.geom.polygon.prototype = []; function ci(n, t, e) { return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0]); } function li(n, t, e, r) { var i = n[0], o = e[0], u = t[0] - i, a = r[0] - o, c = n[1], l = e[1], s = t[1] - c, f = r[1] - l, h = (a * (c - l) - f * (i - o)) / (f * u - a * s); return [i + h * u, c + h * s]; } function si(n) { var t = n[0], e = n[n.length - 1]; return !(t[0] - e[0] || t[1] - e[1]); } ai.area = function () { for (var n, t = -1, e = this.length, r = this[e - 1], i = 0; ++t < e;)
            n = r, r = this[t], i += n[1] * r[0] - n[0] * r[1]; return .5 * i; }, ai.centroid = function (n) { var t, e, r = -1, i = this.length, o = 0, u = 0, a = this[i - 1]; for (arguments.length || (n = -1 / (6 * this.area())); ++r < i;)
            t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], o += (t[0] + a[0]) * e, u += (t[1] + a[1]) * e; return [o * n, u * n]; }, ai.clip = function (n) { for (var t, e, r, i, o, u, a = si(n), c = -1, l = this.length - si(this), s = this[l - 1]; ++c < l;) {
            for (t = n.slice(), n.length = 0, i = this[c], o = t[(r = t.length - a) - 1], e = -1; ++e < r;)
                ci(u = t[e], s, i) ? (ci(o, s, i) || n.push(li(o, u, s, i)), n.push(u)) : ci(o, s, i) && n.push(li(o, u, s, i)), o = u;
            a && n.push(n[0]), s = i;
        } return n; }; var fi, hi, pi, di, gi, vi = [], yi = []; function mi() { Ri(this), this.edge = this.site = this.circle = null; } function xi(n) { var t = vi.pop() || new mi; return t.site = n, t; } function Mi(n) { Ai(n), pi.remove(n), vi.push(n), Ri(n); } function _i(n) { var t = n.circle, e = t.x, r = t.cy, i = { x: e, y: r }, o = n.P, u = n.N, a = [n]; Mi(n); for (var c = o; c.circle && m(e - c.circle.x) < kn && m(r - c.circle.cy) < kn;)
            o = c.P, a.unshift(c), Mi(c), c = o; a.unshift(c), Ai(c); for (var l = u; l.circle && m(e - l.circle.x) < kn && m(r - l.circle.cy) < kn;)
            u = l.N, a.push(l), Mi(l), l = u; a.push(l), Ai(l); var s, f = a.length; for (s = 1; s < f; ++s)
            l = a[s], c = a[s - 1], zi(l.edge, c.site, l.site, i); c = a[0], (l = a[f - 1]).edge = Fi(c.site, l.site, null, i), Si(c), Si(l); } function wi(n) { for (var t, e, r, i, o = n.x, u = n.y, a = pi._; a;)
            if ((r = bi(a, u) - o) > kn)
                a = a.L;
            else {
                if (!((i = o - ki(a, u)) > kn)) {
                    r > -kn ? (t = a.P, e = a) : i > -kn ? (t = a, e = a.N) : t = e = a;
                    break;
                }
                if (!a.R) {
                    t = a;
                    break;
                }
                a = a.R;
            } var c = xi(n); if (pi.insert(t, c), t || e) {
            if (t === e)
                return Ai(t), e = xi(t.site), pi.insert(c, e), c.edge = e.edge = Fi(t.site, c.site), Si(t), void Si(e);
            if (e) {
                Ai(t), Ai(e);
                var l = t.site, s = l.x, f = l.y, h = n.x - s, p = n.y - f, d = e.site, g = d.x - s, v = d.y - f, y = 2 * (h * v - p * g), m = h * h + p * p, x = g * g + v * v, M = { x: (v * m - p * x) / y + s, y: (h * x - g * m) / y + f };
                zi(e.edge, l, d, M), c.edge = Fi(l, n, null, M), e.edge = Fi(n, d, null, M), Si(t), Si(e);
            }
            else
                c.edge = Fi(t.site, c.site);
        } } function bi(n, t) { var e = n.site, r = e.x, i = e.y, o = i - t; if (!o)
            return r; var u = n.P; if (!u)
            return -1 / 0; var a = (e = u.site).x, c = e.y, l = c - t; if (!l)
            return a; var s = a - r, f = 1 / o - 1 / l, h = s / l; return f ? (-h + Math.sqrt(h * h - 2 * f * (s * s / (-2 * l) - c + l / 2 + i - o / 2))) / f + r : (r + a) / 2; } function ki(n, t) { var e = n.N; if (e)
            return bi(e, t); var r = n.site; return r.y === t ? r.x : 1 / 0; } function Ci(n) { this.site = n, this.edges = []; } function Ei(n, t) { return t.angle - n.angle; } function Ni() { Ri(this), this.x = this.y = this.arc = this.site = this.cy = null; } function Si(n) { var t = n.P, e = n.N; if (t && e) {
            var r = t.site, i = n.site, o = e.site;
            if (r !== o) {
                var u = i.x, a = i.y, c = r.x - u, l = r.y - a, s = o.x - u, f = 2 * (c * (v = o.y - a) - l * s);
                if (!(f >= -Cn)) {
                    var h = c * c + l * l, p = s * s + v * v, d = (v * h - l * p) / f, g = (c * p - s * h) / f, v = g + a, y = yi.pop() || new Ni;
                    y.arc = n, y.site = i, y.x = d + u, y.y = v + Math.sqrt(d * d + g * g), y.cy = v, n.circle = y;
                    for (var m = null, x = gi._; x;)
                        if (y.y < x.y || y.y === x.y && y.x <= x.x) {
                            if (!x.L) {
                                m = x.P;
                                break;
                            }
                            x = x.L;
                        }
                        else {
                            if (!x.R) {
                                m = x;
                                break;
                            }
                            x = x.R;
                        }
                    gi.insert(m, y), m || (di = y);
                }
            }
        } } function Ai(n) { var t = n.circle; t && (t.P || (di = t.N), gi.remove(t), yi.push(t), Ri(t), n.circle = null); } function Li(n, t) { var e = n.b; if (e)
            return !0; var r, i, o = n.a, u = t[0][0], a = t[1][0], c = t[0][1], l = t[1][1], s = n.l, f = n.r, h = s.x, p = s.y, d = f.x, g = f.y, v = (h + d) / 2, y = (p + g) / 2; if (g === p) {
            if (v < u || v >= a)
                return;
            if (h > d) {
                if (o) {
                    if (o.y >= l)
                        return;
                }
                else
                    o = { x: v, y: c };
                e = { x: v, y: l };
            }
            else {
                if (o) {
                    if (o.y < c)
                        return;
                }
                else
                    o = { x: v, y: l };
                e = { x: v, y: c };
            }
        }
        else if (i = y - (r = (h - d) / (g - p)) * v, r < -1 || r > 1)
            if (h > d) {
                if (o) {
                    if (o.y >= l)
                        return;
                }
                else
                    o = { x: (c - i) / r, y: c };
                e = { x: (l - i) / r, y: l };
            }
            else {
                if (o) {
                    if (o.y < c)
                        return;
                }
                else
                    o = { x: (l - i) / r, y: l };
                e = { x: (c - i) / r, y: c };
            }
        else if (p < g) {
            if (o) {
                if (o.x >= a)
                    return;
            }
            else
                o = { x: u, y: r * u + i };
            e = { x: a, y: r * a + i };
        }
        else {
            if (o) {
                if (o.x < u)
                    return;
            }
            else
                o = { x: a, y: r * a + i };
            e = { x: u, y: r * u + i };
        } return n.a = o, n.b = e, !0; } function Ti(n, t) { this.l = n, this.r = t, this.a = this.b = null; } function Fi(n, t, e, r) { var i = new Ti(n, t); return fi.push(i), e && zi(i, n, t, e), r && zi(i, t, n, r), hi[n.i].edges.push(new qi(i, n, t)), hi[t.i].edges.push(new qi(i, t, n)), i; } function zi(n, t, e, r) { n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e); } function qi(n, t, e) { var r = n.a, i = n.b; this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y); } function Di() { this._ = null; } function Ri(n) { n.U = n.C = n.L = n.R = n.P = n.N = null; } function ji(n, t) { var e = t, r = t.R, i = e.U; i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e; } function Pi(n, t) { var e = t, r = t.L, i = e.U; i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e; } function Oi(n) { for (; n.L;)
            n = n.L; return n; } function Ui(n, t) { var e, r, i, o = n.sort(Ii).pop(); for (fi = [], hi = new Array(n.length), pi = new Di, gi = new Di;;)
            if (i = di, o && (!i || o.y < i.y || o.y === i.y && o.x < i.x))
                o.x === e && o.y === r || (hi[o.i] = new Ci(o), wi(o), e = o.x, r = o.y), o = n.pop();
            else {
                if (!i)
                    break;
                _i(i.arc);
            } t && (function (n) { for (var t, e = fi, r = ir(n[0][0], n[0][1], n[1][0], n[1][1]), i = e.length; i--;)
            (!Li(t = e[i], n) || !r(t) || m(t.a.x - t.b.x) < kn && m(t.a.y - t.b.y) < kn) && (t.a = t.b = null, e.splice(i, 1)); }(t), function (n) { for (var t, e, r, i, o, u, a, c, l, s, f = n[0][0], h = n[1][0], p = n[0][1], d = n[1][1], g = hi, v = g.length; v--;)
            if ((o = g[v]) && o.prepare())
                for (c = (a = o.edges).length, u = 0; u < c;)
                    r = (s = a[u].end()).x, i = s.y, t = (l = a[++u % c].start()).x, e = l.y, (m(r - t) > kn || m(i - e) > kn) && (a.splice(u, 0, new qi((y = o.site, x = s, M = m(r - f) < kn && d - i > kn ? { x: f, y: m(t - f) < kn ? e : d } : m(i - d) < kn && h - r > kn ? { x: m(e - d) < kn ? t : h, y: d } : m(r - h) < kn && i - p > kn ? { x: h, y: m(t - h) < kn ? e : p } : m(i - p) < kn && r - f > kn ? { x: m(e - p) < kn ? t : f, y: p } : null, _ = void 0, _ = new Ti(y, null), _.a = x, _.b = M, fi.push(_), _), o.site, null)), ++c); var y, x, M, _; }(t)); var u = { cells: hi, edges: fi }; return pi = gi = fi = hi = null, u; } function Ii(n, t) { return t.y - n.y || t.x - n.x; } Ci.prototype.prepare = function () { for (var n, t = this.edges, e = t.length; e--;)
            (n = t[e].edge).b && n.a || t.splice(e, 1); return t.sort(Ei), t.length; }, qi.prototype = { start: function () { return this.edge.l === this.site ? this.edge.a : this.edge.b; }, end: function () { return this.edge.l === this.site ? this.edge.b : this.edge.a; } }, Di.prototype = { insert: function (n, t) { var e, r, i; if (n) {
                if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                    for (n = n.R; n.L;)
                        n = n.L;
                    n.L = t;
                }
                else
                    n.R = t;
                e = n;
            }
            else
                this._ ? (n = Oi(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null); for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;)
                e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.R && (ji(this, e), e = (n = e).U), e.C = !1, r.C = !0, Pi(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.L && (Pi(this, e), e = (n = e).U), e.C = !1, r.C = !0, ji(this, r)), e = n.U; this._.C = !1; }, remove: function (n) { n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null; var t, e, r, i = n.U, o = n.L, u = n.R; if (e = o ? u ? Oi(u) : o : u, i ? i.L === n ? i.L = e : i.R = e : this._ = e, o && u ? (r = e.C, e.C = n.C, e.L = o, o.U = e, e !== u ? (i = e.U, e.U = n.U, n = e.R, i.L = n, e.R = u, u.U = e) : (e.U = i, i = e, n = e.R)) : (r = n.C, n = e), n && (n.U = i), !r)
                if (n && n.C)
                    n.C = !1;
                else {
                    do {
                        if (n === this._)
                            break;
                        if (n === i.L) {
                            if ((t = i.R).C && (t.C = !1, i.C = !0, ji(this, i), t = i.R), t.L && t.L.C || t.R && t.R.C) {
                                t.R && t.R.C || (t.L.C = !1, t.C = !0, Pi(this, t), t = i.R), t.C = i.C, i.C = t.R.C = !1, ji(this, i), n = this._;
                                break;
                            }
                        }
                        else if ((t = i.L).C && (t.C = !1, i.C = !0, Pi(this, i), t = i.L), t.L && t.L.C || t.R && t.R.C) {
                            t.L && t.L.C || (t.R.C = !1, t.C = !0, ji(this, t), t = i.L), t.C = i.C, i.C = t.L.C = !1, Pi(this, i), n = this._;
                            break;
                        }
                        t.C = !0, n = i, i = i.U;
                    } while (!n.C);
                    n && (n.C = !1);
                } } }, n.geom.voronoi = function (n) { var t = ri, e = ii, r = t, i = e, o = Hi; if (n)
            return u(n); function u(n) { var t = new Array(n.length), e = o[0][0], r = o[0][1], i = o[1][0], u = o[1][1]; return Ui(a(n), o).cells.forEach(function (o, a) { var c = o.edges, l = o.site; (t[a] = c.length ? c.map(function (n) { var t = n.start(); return [t.x, t.y]; }) : l.x >= e && l.x <= i && l.y >= r && l.y <= u ? [[e, u], [i, u], [i, r], [e, r]] : []).point = n[a]; }), t; } function a(n) { return n.map(function (n, t) { return { x: Math.round(r(n, t) / kn) * kn, y: Math.round(i(n, t) / kn) * kn, i: t }; }); } return u.links = function (n) { return Ui(a(n)).edges.filter(function (n) { return n.l && n.r; }).map(function (t) { return { source: n[t.l.i], target: n[t.r.i] }; }); }, u.triangles = function (n) { var t = []; return Ui(a(n)).cells.forEach(function (e, r) { for (var i, o, u, a, c = e.site, l = e.edges.sort(Ei), s = -1, f = l.length, h = l[f - 1].edge, p = h.l === c ? h.r : h.l; ++s < f;)
            h, i = p, p = (h = l[s].edge).l === c ? h.r : h.l, r < i.i && r < p.i && (u = i, a = p, ((o = c).x - a.x) * (u.y - o.y) - (o.x - u.x) * (a.y - o.y) < 0) && t.push([n[r], n[i.i], n[p.i]]); }), t; }, u.x = function (n) { return arguments.length ? (r = yt(t = n), u) : t; }, u.y = function (n) { return arguments.length ? (i = yt(e = n), u) : e; }, u.clipExtent = function (n) { return arguments.length ? (o = null == n ? Hi : n, u) : o === Hi ? null : o; }, u.size = function (n) { return arguments.length ? u.clipExtent(n && [[0, 0], n]) : o === Hi ? null : o && o[1]; }, u; }; var Hi = [[-1e6, -1e6], [1e6, 1e6]]; function Yi(n) { return n.x; } function Zi(n) { return n.y; } function Vi(t, e) { t = n.rgb(t), e = n.rgb(e); var r = t.r, i = t.g, o = t.b, u = e.r - r, a = e.g - i, c = e.b - o; return function (n) { return "#" + st(Math.round(r + u * n)) + st(Math.round(i + a * n)) + st(Math.round(o + c * n)); }; } function $i(n, t) { var e, r = {}, i = {}; for (e in n)
            e in t ? r[e] = Gi(n[e], t[e]) : i[e] = n[e]; for (e in t)
            e in n || (i[e] = t[e]); return function (n) { for (e in r)
            i[e] = r[e](n); return i; }; } function Bi(n, t) { return n = +n, t = +t, function (e) { return n * (1 - e) + t * e; }; } function Xi(n, t) { var e, r, i, o = Wi.lastIndex = Ji.lastIndex = 0, u = -1, a = [], c = []; for (n += "", t += ""; (e = Wi.exec(n)) && (r = Ji.exec(t));)
            (i = r.index) > o && (i = t.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({ i: u, x: Bi(e, r) })), o = Ji.lastIndex; return o < t.length && (i = t.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? (t = c[0].x, function (n) { return t(n) + ""; }) : function () { return t; } : (t = c.length, function (n) { for (var e, r = 0; r < t; ++r)
            a[(e = c[r]).i] = e.x(n); return a.join(""); }); } n.geom.delaunay = function (t) { return n.geom.voronoi().triangles(t); }, n.geom.quadtree = function (n, t, e, r, i) { var o, u = ri, a = ii; if (o = arguments.length)
            return u = Yi, a = Zi, 3 === o && (i = e, r = t, e = t = 0), c(n); function c(n) { var c, l, s, f, h, p, d, g, v, y = yt(u), x = yt(a); if (null != t)
            p = t, d = e, g = r, v = i;
        else if (g = v = -(p = d = 1 / 0), l = [], s = [], h = n.length, o)
            for (f = 0; f < h; ++f)
                (c = n[f]).x < p && (p = c.x), c.y < d && (d = c.y), c.x > g && (g = c.x), c.y > v && (v = c.y), l.push(c.x), s.push(c.y);
        else
            for (f = 0; f < h; ++f) {
                var M = +y(c = n[f], f), _ = +x(c, f);
                M < p && (p = M), _ < d && (d = _), M > g && (g = M), _ > v && (v = _), l.push(M), s.push(_);
            } var w = g - p, b = v - d; function k(n, t, e, r, i, o, u, a) { if (!isNaN(e) && !isNaN(r))
            if (n.leaf) {
                var c = n.x, l = n.y;
                if (null != c)
                    if (m(c - e) + m(l - r) < .01)
                        C(n, t, e, r, i, o, u, a);
                    else {
                        var s = n.point;
                        n.x = n.y = n.point = null, C(n, s, c, l, i, o, u, a), C(n, t, e, r, i, o, u, a);
                    }
                else
                    n.x = e, n.y = r, n.point = t;
            }
            else
                C(n, t, e, r, i, o, u, a); } function C(n, t, e, r, i, o, u, a) { var c = .5 * (i + u), l = .5 * (o + a), s = e >= c, f = r >= l, h = f << 1 | s; n.leaf = !1, s ? i = c : u = c, f ? o = l : a = l, k(n = n.nodes[h] || (n.nodes[h] = { leaf: !0, nodes: [], point: null, x: null, y: null }), t, e, r, i, o, u, a); } w > b ? v = d + w : g = p + b; var E = { leaf: !0, nodes: [], point: null, x: null, y: null, add: function (n) { k(E, n, +y(n, ++f), +x(n, f), p, d, g, v); } }; if (E.visit = function (n) { !function n(t, e, r, i, o, u) { if (!t(e, r, i, o, u)) {
            var a = .5 * (r + o), c = .5 * (i + u), l = e.nodes;
            l[0] && n(t, l[0], r, i, a, c), l[1] && n(t, l[1], a, i, o, c), l[2] && n(t, l[2], r, c, a, u), l[3] && n(t, l[3], a, c, o, u);
        } }(n, E, p, d, g, v); }, E.find = function (n) { return function (n, t, e, r, i, o, u) { var a, c = 1 / 0; return function n(l, s, f, h, p) { if (!(s > o || f > u || h < r || p < i)) {
            if (d = l.point) {
                var d, g = t - l.x, v = e - l.y, y = g * g + v * v;
                if (y < c) {
                    var m = Math.sqrt(c = y);
                    r = t - m, i = e - m, o = t + m, u = e + m, a = d;
                }
            }
            for (var x = l.nodes, M = .5 * (s + h), _ = .5 * (f + p), w = (e >= _) << 1 | t >= M, b = w + 4; w < b; ++w)
                if (l = x[3 & w])
                    switch (3 & w) {
                        case 0:
                            n(l, s, f, M, _);
                            break;
                        case 1:
                            n(l, M, f, h, _);
                            break;
                        case 2:
                            n(l, s, _, M, p);
                            break;
                        case 3: n(l, M, _, h, p);
                    }
        } }(n, r, i, o, u), a; }(E, n[0], n[1], p, d, g, v); }, f = -1, null == t) {
            for (; ++f < h;)
                k(E, n[f], l[f], s[f], p, d, g, v);
            --f;
        }
        else
            n.forEach(E.add); return l = s = n = c = null, E; } return c.x = function (n) { return arguments.length ? (u = n, c) : u; }, c.y = function (n) { return arguments.length ? (a = n, c) : a; }, c.extent = function (n) { return arguments.length ? (null == n ? t = e = r = i = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], i = +n[1][1]), c) : null == t ? null : [[t, e], [r, i]]; }, c.size = function (n) { return arguments.length ? (null == n ? t = e = r = i = null : (t = e = 0, r = +n[0], i = +n[1]), c) : null == t ? null : [r - t, i - e]; }, c; }, n.interpolateRgb = Vi, n.interpolateObject = $i, n.interpolateNumber = Bi, n.interpolateString = Xi; var Wi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ji = new RegExp(Wi.source, "g"); function Gi(t, e) { for (var r, i = n.interpolators.length; --i >= 0 && !(r = n.interpolators[i](t, e));)
            ; return r; } function Ki(n, t) { var e, r = [], i = [], o = n.length, u = t.length, a = Math.min(n.length, t.length); for (e = 0; e < a; ++e)
            r.push(Gi(n[e], t[e])); for (; e < o; ++e)
            i[e] = n[e]; for (; e < u; ++e)
            i[e] = t[e]; return function (n) { for (e = 0; e < a; ++e)
            i[e] = r[e](n); return i; }; } n.interpolate = Gi, n.interpolators = [function (n, t) { var e = typeof t; return ("string" === e ? vt.has(t.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(t) ? Vi : Xi : t instanceof Hn ? Vi : Array.isArray(t) ? Ki : "object" === e && isNaN(t) ? $i : Bi)(n, t); }], n.interpolateArray = Ki; var Qi = function () { return T; }, no = n.map({ linear: Qi, poly: function (n) { return function (t) { return Math.pow(t, n); }; }, quad: function () { return io; }, cubic: function () { return oo; }, sin: function () { return ao; }, exp: function () { return co; }, circle: function () { return lo; }, elastic: function (n, t) { var e; arguments.length < 2 && (t = .45); arguments.length ? e = t / Nn * Math.asin(1 / n) : (n = 1, e = t / 4); return function (r) { return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Nn / t); }; }, back: function (n) { n || (n = 1.70158); return function (t) { return t * t * ((n + 1) * t - n); }; }, bounce: function () { return so; } }), to = n.map({ in: T, out: eo, "in-out": ro, "out-in": function (n) { return ro(eo(n)); } }); function eo(n) { return function (t) { return 1 - n(1 - t); }; } function ro(n) { return function (t) { return .5 * (t < .5 ? n(2 * t) : 2 - n(2 - 2 * t)); }; } function io(n) { return n * n; } function oo(n) { return n * n * n; } function uo(n) { if (n <= 0)
            return 0; if (n >= 1)
            return 1; var t = n * n, e = t * n; return 4 * (n < .5 ? e : 3 * (n - t) + e - .75); } function ao(n) { return 1 - Math.cos(n * An); } function co(n) { return Math.pow(2, 10 * (n - 1)); } function lo(n) { return 1 - Math.sqrt(1 - n * n); } function so(n) { return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375; } function fo(n, t) { return t -= n, function (e) { return Math.round(n + t * e); }; } function ho(n) { var t, e, r, i = [n.a, n.b], o = [n.c, n.d], u = go(i), a = po(i, o), c = go(((t = o)[0] += (r = -a) * (e = i)[0], t[1] += r * e[1], t)) || 0; i[0] * o[1] < o[0] * i[1] && (i[0] *= -1, i[1] *= -1, u *= -1, a *= -1), this.rotate = (u ? Math.atan2(i[1], i[0]) : Math.atan2(-o[0], o[1])) * Tn, this.translate = [n.e, n.f], this.scale = [u, c], this.skew = c ? Math.atan2(a, c) * Tn : 0; } function po(n, t) { return n[0] * t[0] + n[1] * t[1]; } function go(n) { var t = Math.sqrt(po(n, n)); return t && (n[0] /= t, n[1] /= t), t; } n.ease = function (n) { var t, r = n.indexOf("-"), i = r >= 0 ? n.slice(0, r) : n, o = r >= 0 ? n.slice(r + 1) : "in"; return i = no.get(i) || Qi, o = to.get(o) || T, t = o(i.apply(null, e.call(arguments, 1))), function (n) { return n <= 0 ? 0 : n >= 1 ? 1 : t(n); }; }, n.interpolateHcl = function (t, e) { t = n.hcl(t), e = n.hcl(e); var r = t.h, i = t.c, o = t.l, u = e.h - r, a = e.c - i, c = e.l - o; isNaN(a) && (a = 0, i = isNaN(i) ? e.c : i); isNaN(u) ? (u = 0, r = isNaN(r) ? e.h : r) : u > 180 ? u -= 360 : u < -180 && (u += 360); return function (n) { return Xn(r + u * n, i + a * n, o + c * n) + ""; }; }, n.interpolateHsl = function (t, e) { t = n.hsl(t), e = n.hsl(e); var r = t.h, i = t.s, o = t.l, u = e.h - r, a = e.s - i, c = e.l - o; isNaN(a) && (a = 0, i = isNaN(i) ? e.s : i); isNaN(u) ? (u = 0, r = isNaN(r) ? e.h : r) : u > 180 ? u -= 360 : u < -180 && (u += 360); return function (n) { return Vn(r + u * n, i + a * n, o + c * n) + ""; }; }, n.interpolateLab = function (t, e) { t = n.lab(t), e = n.lab(e); var r = t.l, i = t.a, o = t.b, u = e.l - r, a = e.a - i, c = e.b - o; return function (n) { return tt(r + u * n, i + a * n, o + c * n) + ""; }; }, n.interpolateRound = fo, n.transform = function (t) { var e = i.createElementNS(n.ns.prefix.svg, "g"); return (n.transform = function (n) { if (null != n) {
            e.setAttribute("transform", n);
            var t = e.transform.baseVal.consolidate();
        } return new ho(t ? t.matrix : vo); })(t); }, ho.prototype.toString = function () { return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"; }; var vo = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }; function yo(n) { return n.length ? n.pop() + "," : ""; } function mo(t, e) { var r = [], i = []; return t = n.transform(t), e = n.transform(e), function (n, t, e, r) { if (n[0] !== t[0] || n[1] !== t[1]) {
            var i = e.push("translate(", null, ",", null, ")");
            r.push({ i: i - 4, x: Bi(n[0], t[0]) }, { i: i - 2, x: Bi(n[1], t[1]) });
        }
        else
            (t[0] || t[1]) && e.push("translate(" + t + ")"); }(t.translate, e.translate, r, i), function (n, t, e, r) { n !== t ? (n - t > 180 ? t += 360 : t - n > 180 && (n += 360), r.push({ i: e.push(yo(e) + "rotate(", null, ")") - 2, x: Bi(n, t) })) : t && e.push(yo(e) + "rotate(" + t + ")"); }(t.rotate, e.rotate, r, i), function (n, t, e, r) { n !== t ? r.push({ i: e.push(yo(e) + "skewX(", null, ")") - 2, x: Bi(n, t) }) : t && e.push(yo(e) + "skewX(" + t + ")"); }(t.skew, e.skew, r, i), function (n, t, e, r) { if (n[0] !== t[0] || n[1] !== t[1]) {
            var i = e.push(yo(e) + "scale(", null, ",", null, ")");
            r.push({ i: i - 4, x: Bi(n[0], t[0]) }, { i: i - 2, x: Bi(n[1], t[1]) });
        }
        else
            1 === t[0] && 1 === t[1] || e.push(yo(e) + "scale(" + t + ")"); }(t.scale, e.scale, r, i), t = e = null, function (n) { for (var t, e = -1, o = i.length; ++e < o;)
            r[(t = i[e]).i] = t.x(n); return r.join(""); }; } function xo(n, t) { return t = (t -= n = +n) || 1 / t, function (e) { return (e - n) / t; }; } function Mo(n, t) { return t = (t -= n = +n) || 1 / t, function (e) { return Math.max(0, Math.min(1, (e - n) / t)); }; } function _o(n) { for (var t = n.source, e = n.target, r = function (n, t) { if (n === t)
            return n; var e = wo(n), r = wo(t), i = e.pop(), o = r.pop(), u = null; for (; i === o;)
            u = i, i = e.pop(), o = r.pop(); return u; }(t, e), i = [t]; t !== r;)
            t = t.parent, i.push(t); for (var o = i.length; e !== r;)
            i.splice(o, 0, e), e = e.parent; return i; } function wo(n) { for (var t = [], e = n.parent; null != e;)
            t.push(n), n = e, e = e.parent; return t.push(n), t; } function bo(n) { n.fixed |= 2; } function ko(n) { n.fixed &= -7; } function Co(n) { n.fixed |= 4, n.px = n.x, n.py = n.y; } function Eo(n) { n.fixed &= -5; } n.interpolateTransform = mo, n.layout = {}, n.layout.bundle = function () { return function (n) { for (var t = [], e = -1, r = n.length; ++e < r;)
            t.push(_o(n[e])); return t; }; }, n.layout.chord = function () { var t, e, r, i, o, u, a, c = {}, l = 0; function s() { var c, s, h, p, d, g = {}, v = [], y = n.range(i), m = []; for (t = [], e = [], c = 0, p = -1; ++p < i;) {
            for (s = 0, d = -1; ++d < i;)
                s += r[p][d];
            v.push(s), m.push(n.range(i)), c += s;
        } for (o && y.sort(function (n, t) { return o(v[n], v[t]); }), u && m.forEach(function (n, t) { n.sort(function (n, e) { return u(r[t][n], r[t][e]); }); }), c = (Nn - l * i) / c, s = 0, p = -1; ++p < i;) {
            for (h = s, d = -1; ++d < i;) {
                var x = y[p], M = m[x][d], _ = r[x][M], w = s, b = s += _ * c;
                g[x + "-" + M] = { index: x, subindex: M, startAngle: w, endAngle: b, value: _ };
            }
            e[x] = { index: x, startAngle: h, endAngle: s, value: v[x] }, s += l;
        } for (p = -1; ++p < i;)
            for (d = p - 1; ++d < i;) {
                var k = g[p + "-" + d], C = g[d + "-" + p];
                (k.value || C.value) && t.push(k.value < C.value ? { source: C, target: k } : { source: k, target: C });
            } a && f(); } function f() { t.sort(function (n, t) { return a((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2); }); } return c.matrix = function (n) { return arguments.length ? (i = (r = n) && r.length, t = e = null, c) : r; }, c.padding = function (n) { return arguments.length ? (l = n, t = e = null, c) : l; }, c.sortGroups = function (n) { return arguments.length ? (o = n, t = e = null, c) : o; }, c.sortSubgroups = function (n) { return arguments.length ? (u = n, t = null, c) : u; }, c.sortChords = function (n) { return arguments.length ? (a = n, t && f(), c) : a; }, c.chords = function () { return t || s(), t; }, c.groups = function () { return e || s(), e; }, c; }, n.layout.force = function () { var t, e, r, i, o, u, a = {}, c = n.dispatch("start", "tick", "end"), l = [1, 1], s = .9, f = No, h = So, p = -30, d = Ao, g = .1, v = .64, y = [], m = []; function x(n) { return function (t, e, r, i) { if (t.point !== n) {
            var o = t.cx - n.x, u = t.cy - n.y, a = i - e, c = o * o + u * u;
            if (a * a / v < c) {
                if (c < d) {
                    var l = t.charge / c;
                    n.px -= o * l, n.py -= u * l;
                }
                return !0;
            }
            if (t.point && c && c < d) {
                l = t.pointCharge / c;
                n.px -= o * l, n.py -= u * l;
            }
        } return !t.charge; }; } function M(t) { t.px = n.event.x, t.py = n.event.y, a.resume(); } return a.tick = function () { if ((r *= .99) < .005)
            return t = null, c.end({ type: "end", alpha: r = 0 }), !0; var e, a, f, h, d, v, M, _, w, b = y.length, k = m.length; for (a = 0; a < k; ++a)
            h = (f = m[a]).source, (v = (_ = (d = f.target).x - h.x) * _ + (w = d.y - h.y) * w) && (_ *= v = r * o[a] * ((v = Math.sqrt(v)) - i[a]) / v, w *= v, d.x -= _ * (M = h.weight + d.weight ? h.weight / (h.weight + d.weight) : .5), d.y -= w * M, h.x += _ * (M = 1 - M), h.y += w * M); if ((M = r * g) && (_ = l[0] / 2, w = l[1] / 2, a = -1, M))
            for (; ++a < b;)
                (f = y[a]).x += (_ - f.x) * M, f.y += (w - f.y) * M; if (p)
            for (!function n(t, e, r) { var i = 0, o = 0; t.charge = 0; if (!t.leaf)
                for (var u, a = t.nodes, c = a.length, l = -1; ++l < c;)
                    null != (u = a[l]) && (n(u, e, r), t.charge += u.charge, i += u.charge * u.cx, o += u.charge * u.cy); if (t.point) {
                t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
                var s = e * r[t.point.index];
                t.charge += t.pointCharge = s, i += s * t.point.x, o += s * t.point.y;
            } t.cx = i / t.charge; t.cy = o / t.charge; }(e = n.geom.quadtree(y), r, u), a = -1; ++a < b;)
                (f = y[a]).fixed || e.visit(x(f)); for (a = -1; ++a < b;)
            (f = y[a]).fixed ? (f.x = f.px, f.y = f.py) : (f.x -= (f.px - (f.px = f.x)) * s, f.y -= (f.py - (f.py = f.y)) * s); c.tick({ type: "tick", alpha: r }); }, a.nodes = function (n) { return arguments.length ? (y = n, a) : y; }, a.links = function (n) { return arguments.length ? (m = n, a) : m; }, a.size = function (n) { return arguments.length ? (l = n, a) : l; }, a.linkDistance = function (n) { return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f; }, a.distance = a.linkDistance, a.linkStrength = function (n) { return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h; }, a.friction = function (n) { return arguments.length ? (s = +n, a) : s; }, a.charge = function (n) { return arguments.length ? (p = "function" == typeof n ? n : +n, a) : p; }, a.chargeDistance = function (n) { return arguments.length ? (d = n * n, a) : Math.sqrt(d); }, a.gravity = function (n) { return arguments.length ? (g = +n, a) : g; }, a.theta = function (n) { return arguments.length ? (v = n * n, a) : Math.sqrt(v); }, a.alpha = function (n) { return arguments.length ? (n = +n, r ? n > 0 ? r = n : (t.c = null, t.t = NaN, t = null, c.end({ type: "end", alpha: r = 0 })) : n > 0 && (c.start({ type: "start", alpha: r = n }), t = Ct(a.tick)), a) : r; }, a.start = function () { var n, t, e, r = y.length, c = m.length, s = l[0], d = l[1]; for (n = 0; n < r; ++n)
            (e = y[n]).index = n, e.weight = 0; for (n = 0; n < c; ++n)
            "number" == typeof (e = m[n]).source && (e.source = y[e.source]), "number" == typeof e.target && (e.target = y[e.target]), ++e.source.weight, ++e.target.weight; for (n = 0; n < r; ++n)
            e = y[n], isNaN(e.x) && (e.x = g("x", s)), isNaN(e.y) && (e.y = g("y", d)), isNaN(e.px) && (e.px = e.x), isNaN(e.py) && (e.py = e.y); if (i = [], "function" == typeof f)
            for (n = 0; n < c; ++n)
                i[n] = +f.call(this, m[n], n);
        else
            for (n = 0; n < c; ++n)
                i[n] = f; if (o = [], "function" == typeof h)
            for (n = 0; n < c; ++n)
                o[n] = +h.call(this, m[n], n);
        else
            for (n = 0; n < c; ++n)
                o[n] = h; if (u = [], "function" == typeof p)
            for (n = 0; n < r; ++n)
                u[n] = +p.call(this, y[n], n);
        else
            for (n = 0; n < r; ++n)
                u[n] = p; function g(e, i) { if (!t) {
            for (t = new Array(r), l = 0; l < r; ++l)
                t[l] = [];
            for (l = 0; l < c; ++l) {
                var o = m[l];
                t[o.source.index].push(o.target), t[o.target.index].push(o.source);
            }
        } for (var u, a = t[n], l = -1, s = a.length; ++l < s;)
            if (!isNaN(u = a[l][e]))
                return u; return Math.random() * i; } return a.resume(); }, a.resume = function () { return a.alpha(.1); }, a.stop = function () { return a.alpha(0); }, a.drag = function () { if (e || (e = n.behavior.drag().origin(T).on("dragstart.force", bo).on("drag.force", M).on("dragend.force", ko)), !arguments.length)
            return e; this.on("mouseover.force", Co).on("mouseout.force", Eo).call(e); }, n.rebind(a, c, "on"); }; var No = 20, So = 1, Ao = 1 / 0; function Lo(t, e) { return n.rebind(t, e, "sort", "children", "value"), t.nodes = t, t.links = Ro, t; } function To(n, t) { for (var e = [n]; null != (n = e.pop());)
            if (t(n), (i = n.children) && (r = i.length))
                for (var r, i; --r >= 0;)
                    e.push(i[r]); } function Fo(n, t) { for (var e = [n], r = []; null != (n = e.pop());)
            if (r.push(n), (o = n.children) && (i = o.length))
                for (var i, o, u = -1; ++u < i;)
                    e.push(o[u]); for (; null != (n = r.pop());)
            t(n); } function zo(n) { return n.children; } function qo(n) { return n.value; } function Do(n, t) { return t.value - n.value; } function Ro(t) { return n.merge(t.map(function (n) { return (n.children || []).map(function (t) { return { source: n, target: t }; }); })); } n.layout.hierarchy = function () { var n = Do, t = zo, e = qo; function r(i) { var o, u = [i], a = []; for (i.depth = 0; null != (o = u.pop());)
            if (a.push(o), (l = t.call(r, o, o.depth)) && (c = l.length)) {
                for (var c, l, s; --c >= 0;)
                    u.push(s = l[c]), s.parent = o, s.depth = o.depth + 1;
                e && (o.value = 0), o.children = l;
            }
            else
                e && (o.value = +e.call(r, o, o.depth) || 0), delete o.children; return Fo(i, function (t) { var r, i; n && (r = t.children) && r.sort(n), e && (i = t.parent) && (i.value += t.value); }), a; } return r.sort = function (t) { return arguments.length ? (n = t, r) : n; }, r.children = function (n) { return arguments.length ? (t = n, r) : t; }, r.value = function (n) { return arguments.length ? (e = n, r) : e; }, r.revalue = function (n) { return e && (To(n, function (n) { n.children && (n.value = 0); }), Fo(n, function (n) { var t; n.children || (n.value = +e.call(r, n, n.depth) || 0), (t = n.parent) && (t.value += n.value); })), n; }, r; }, n.layout.partition = function () { var t = n.layout.hierarchy(), e = [1, 1]; function r(n, r) { var i = t.call(this, n, r); return function n(t, e, r, i) { var o = t.children; if (t.x = e, t.y = t.depth * i, t.dx = r, t.dy = i, o && (u = o.length)) {
            var u, a, c, l = -1;
            for (r = t.value ? r / t.value : 0; ++l < u;)
                n(a = o[l], e, c = a.value * r, i), e += c;
        } }(i[0], 0, e[0], e[1] / function n(t) { var e = t.children, r = 0; if (e && (i = e.length))
            for (var i, o = -1; ++o < i;)
                r = Math.max(r, n(e[o])); return 1 + r; }(i[0])), i; } return r.size = function (n) { return arguments.length ? (e = n, r) : e; }, Lo(r, t); }, n.layout.pie = function () { var t = Number, e = jo, r = 0, i = Nn, o = 0; function u(a) { var c, l = a.length, s = a.map(function (n, e) { return +t.call(u, n, e); }), f = +("function" == typeof r ? r.apply(this, arguments) : r), h = ("function" == typeof i ? i.apply(this, arguments) : i) - f, p = Math.min(Math.abs(h) / l, +("function" == typeof o ? o.apply(this, arguments) : o)), d = p * (h < 0 ? -1 : 1), g = n.sum(s), v = g ? (h - l * d) / g : 0, y = n.range(l), m = []; return null != e && y.sort(e === jo ? function (n, t) { return s[t] - s[n]; } : function (n, t) { return e(a[n], a[t]); }), y.forEach(function (n) { m[n] = { data: a[n], value: c = s[n], startAngle: f, endAngle: f += c * v + d, padAngle: p }; }), m; } return u.value = function (n) { return arguments.length ? (t = n, u) : t; }, u.sort = function (n) { return arguments.length ? (e = n, u) : e; }, u.startAngle = function (n) { return arguments.length ? (r = n, u) : r; }, u.endAngle = function (n) { return arguments.length ? (i = n, u) : i; }, u.padAngle = function (n) { return arguments.length ? (o = n, u) : o; }, u; }; var jo = {}; function Po(n) { return n.x; } function Oo(n) { return n.y; } function Uo(n, t, e) { n.y0 = t, n.y = e; } n.layout.stack = function () { var t = T, e = Yo, r = Zo, i = Uo, o = Po, u = Oo; function a(c, l) { if (!(p = c.length))
            return c; var s = c.map(function (n, e) { return t.call(a, n, e); }), f = s.map(function (n) { return n.map(function (n, t) { return [o.call(a, n, t), u.call(a, n, t)]; }); }), h = e.call(a, f, l); s = n.permute(s, h), f = n.permute(f, h); var p, d, g, v, y = r.call(a, f, l), m = s[0].length; for (g = 0; g < m; ++g)
            for (i.call(a, s[0][g], v = y[g], f[0][g][1]), d = 1; d < p; ++d)
                i.call(a, s[d][g], v += f[d - 1][g][1], f[d][g][1]); return c; } return a.values = function (n) { return arguments.length ? (t = n, a) : t; }, a.order = function (n) { return arguments.length ? (e = "function" == typeof n ? n : Io.get(n) || Yo, a) : e; }, a.offset = function (n) { return arguments.length ? (r = "function" == typeof n ? n : Ho.get(n) || Zo, a) : r; }, a.x = function (n) { return arguments.length ? (o = n, a) : o; }, a.y = function (n) { return arguments.length ? (u = n, a) : u; }, a.out = function (n) { return arguments.length ? (i = n, a) : i; }, a; }; var Io = n.map({ "inside-out": function (t) { var e, r, i = t.length, o = t.map(Vo), u = t.map($o), a = n.range(i).sort(function (n, t) { return o[n] - o[t]; }), c = 0, l = 0, s = [], f = []; for (e = 0; e < i; ++e)
                r = a[e], c < l ? (c += u[r], s.push(r)) : (l += u[r], f.push(r)); return f.reverse().concat(s); }, reverse: function (t) { return n.range(t.length).reverse(); }, default: Yo }), Ho = n.map({ silhouette: function (n) { var t, e, r, i = n.length, o = n[0].length, u = [], a = 0, c = []; for (e = 0; e < o; ++e) {
                for (t = 0, r = 0; t < i; t++)
                    r += n[t][e][1];
                r > a && (a = r), u.push(r);
            } for (e = 0; e < o; ++e)
                c[e] = (a - u[e]) / 2; return c; }, wiggle: function (n) { var t, e, r, i, o, u, a, c, l, s = n.length, f = n[0], h = f.length, p = []; for (p[0] = c = l = 0, e = 1; e < h; ++e) {
                for (t = 0, i = 0; t < s; ++t)
                    i += n[t][e][1];
                for (t = 0, o = 0, a = f[e][0] - f[e - 1][0]; t < s; ++t) {
                    for (r = 0, u = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); r < t; ++r)
                        u += (n[r][e][1] - n[r][e - 1][1]) / a;
                    o += u * n[t][e][1];
                }
                p[e] = c -= i ? o / i * a : 0, c < l && (l = c);
            } for (e = 0; e < h; ++e)
                p[e] -= l; return p; }, expand: function (n) { var t, e, r, i = n.length, o = n[0].length, u = 1 / i, a = []; for (e = 0; e < o; ++e) {
                for (t = 0, r = 0; t < i; t++)
                    r += n[t][e][1];
                if (r)
                    for (t = 0; t < i; t++)
                        n[t][e][1] /= r;
                else
                    for (t = 0; t < i; t++)
                        n[t][e][1] = u;
            } for (e = 0; e < o; ++e)
                a[e] = 0; return a; }, zero: Zo }); function Yo(t) { return n.range(t.length); } function Zo(n) { for (var t = -1, e = n[0].length, r = []; ++t < e;)
            r[t] = 0; return r; } function Vo(n) { for (var t, e = 1, r = 0, i = n[0][1], o = n.length; e < o; ++e)
            (t = n[e][1]) > i && (r = e, i = t); return r; } function $o(n) { return n.reduce(Bo, 0); } function Bo(n, t) { return n + t[1]; } function Xo(n, t) { return Wo(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1)); } function Wo(n, t) { for (var e = -1, r = +n[0], i = (n[1] - r) / t, o = []; ++e <= t;)
            o[e] = i * e + r; return o; } function Jo(t) { return [n.min(t), n.max(t)]; } function Go(n, t) { return n.value - t.value; } function Ko(n, t) { var e = n._pack_next; n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t; } function Qo(n, t) { n._pack_next = t, t._pack_prev = n; } function nu(n, t) { var e = t.x - n.x, r = t.y - n.y, i = n.r + t.r; return .999 * i * i > e * e + r * r; } function tu(n) { if ((t = n.children) && (c = t.length)) {
            var t, e, r, i, o, u, a, c, l = 1 / 0, s = -1 / 0, f = 1 / 0, h = -1 / 0;
            if (t.forEach(eu), (e = t[0]).x = -e.r, e.y = 0, x(e), c > 1 && ((r = t[1]).x = r.r, r.y = 0, x(r), c > 2))
                for (iu(e, r, i = t[2]), x(i), Ko(e, i), e._pack_prev = i, Ko(i, r), r = e._pack_next, o = 3; o < c; o++) {
                    iu(e, r, i = t[o]);
                    var p = 0, d = 1, g = 1;
                    for (u = r._pack_next; u !== r; u = u._pack_next, d++)
                        if (nu(u, i)) {
                            p = 1;
                            break;
                        }
                    if (1 == p)
                        for (a = e._pack_prev; a !== u._pack_prev && !nu(a, i); a = a._pack_prev, g++)
                            ;
                    p ? (d < g || d == g && r.r < e.r ? Qo(e, r = u) : Qo(e = a, r), o--) : (Ko(e, i), r = i, x(i));
                }
            var v = (l + s) / 2, y = (f + h) / 2, m = 0;
            for (o = 0; o < c; o++)
                (i = t[o]).x -= v, i.y -= y, m = Math.max(m, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
            n.r = m, t.forEach(ru);
        } function x(n) { l = Math.min(n.x - n.r, l), s = Math.max(n.x + n.r, s), f = Math.min(n.y - n.r, f), h = Math.max(n.y + n.r, h); } } function eu(n) { n._pack_next = n._pack_prev = n; } function ru(n) { delete n._pack_next, delete n._pack_prev; } function iu(n, t, e) { var r = n.r + e.r, i = t.x - n.x, o = t.y - n.y; if (r && (i || o)) {
            var u = t.r + e.r, a = i * i + o * o, c = .5 + ((r *= r) - (u *= u)) / (2 * a), l = Math.sqrt(Math.max(0, 2 * u * (r + a) - (r -= a) * r - u * u)) / (2 * a);
            e.x = n.x + c * i + l * o, e.y = n.y + c * o - l * i;
        }
        else
            e.x = n.x + r, e.y = n.y; } function ou(n, t) { return n.parent == t.parent ? 1 : 2; } function uu(n) { var t = n.children; return t.length ? t[0] : n.t; } function au(n) { var t, e = n.children; return (t = e.length) ? e[t - 1] : n.t; } function cu(n, t, e) { var r = e / (t.i - n.i); t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e; } function lu(n, t, e) { return n.a.parent === t.parent ? n.a : e; } function su(n) { return { x: n.x, y: n.y, dx: n.dx, dy: n.dy }; } function fu(n, t) { var e = n.x + t[3], r = n.y + t[0], i = n.dx - t[1] - t[3], o = n.dy - t[0] - t[2]; return i < 0 && (e += i / 2, i = 0), o < 0 && (r += o / 2, o = 0), { x: e, y: r, dx: i, dy: o }; } function hu(n) { var t = n[0], e = n[n.length - 1]; return t < e ? [t, e] : [e, t]; } function pu(n) { return n.rangeExtent ? n.rangeExtent() : hu(n.range()); } function du(n, t, e, r) { var i = e(n[0], n[1]), o = r(t[0], t[1]); return function (n) { return o(i(n)); }; } function gu(n, t) { var e, r = 0, i = n.length - 1, o = n[r], u = n[i]; return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), n[r] = t.floor(o), n[i] = t.ceil(u), n; } function vu(n) { return n ? { floor: function (t) { return Math.floor(t / n) * n; }, ceil: function (t) { return Math.ceil(t / n) * n; } } : yu; } n.layout.histogram = function () { var t = !0, e = Number, r = Jo, i = Xo; function o(o, u) { for (var a, c, l = [], s = o.map(e, this), f = r.call(this, s, u), h = i.call(this, f, s, u), p = (u = -1, s.length), d = h.length - 1, g = t ? 1 : 1 / p; ++u < d;)
            (a = l[u] = []).dx = h[u + 1] - (a.x = h[u]), a.y = 0; if (d > 0)
            for (u = -1; ++u < p;)
                (c = s[u]) >= f[0] && c <= f[1] && ((a = l[n.bisect(h, c, 1, d) - 1]).y += g, a.push(o[u])); return l; } return o.value = function (n) { return arguments.length ? (e = n, o) : e; }, o.range = function (n) { return arguments.length ? (r = yt(n), o) : r; }, o.bins = function (n) { return arguments.length ? (i = "number" == typeof n ? function (t) { return Wo(t, n); } : yt(n), o) : i; }, o.frequency = function (n) { return arguments.length ? (t = !!n, o) : t; }, o; }, n.layout.pack = function () { var t, e = n.layout.hierarchy().sort(Go), r = 0, i = [1, 1]; function o(n, o) { var u = e.call(this, n, o), a = u[0], c = i[0], l = i[1], s = null == t ? Math.sqrt : "function" == typeof t ? t : function () { return t; }; if (a.x = a.y = 0, Fo(a, function (n) { n.r = +s(n.value); }), Fo(a, tu), r) {
            var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
            Fo(a, function (n) { n.r += f; }), Fo(a, tu), Fo(a, function (n) { n.r -= f; });
        } return function n(t, e, r, i) { var o = t.children; t.x = e += i * t.x; t.y = r += i * t.y; t.r *= i; if (o)
            for (var u = -1, a = o.length; ++u < a;)
                n(o[u], e, r, i); }(a, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)), u; } return o.size = function (n) { return arguments.length ? (i = n, o) : i; }, o.radius = function (n) { return arguments.length ? (t = null == n || "function" == typeof n ? n : +n, o) : t; }, o.padding = function (n) { return arguments.length ? (r = +n, o) : r; }, Lo(o, e); }, n.layout.tree = function () { var t = n.layout.hierarchy().sort(null).value(null), e = ou, r = [1, 1], i = null; function o(n, o) { var l = t.call(this, n, o), s = l[0], f = function (n) { var t, e = { A: null, children: [n] }, r = [e]; for (; null != (t = r.pop());)
            for (var i, o = t.children, u = 0, a = o.length; u < a; ++u)
                r.push((o[u] = i = { _: o[u], parent: t, children: (i = o[u].children) && i.slice() || [], A: null, a: null, z: 0, m: 0, c: 0, s: 0, t: null, i: u }).a = i); return e.children[0]; }(s); if (Fo(f, u), f.parent.m = -f.z, To(f, a), i)
            To(s, c);
        else {
            var h = s, p = s, d = s;
            To(s, function (n) { n.x < h.x && (h = n), n.x > p.x && (p = n), n.depth > d.depth && (d = n); });
            var g = e(h, p) / 2 - h.x, v = r[0] / (p.x + e(p, h) / 2 + g), y = r[1] / (d.depth || 1);
            To(s, function (n) { n.x = (n.x + g) * v, n.y = n.depth * y; });
        } return l; } function u(n) { var t = n.children, r = n.parent.children, i = n.i ? r[n.i - 1] : null; if (t.length) {
            !function (n) { var t, e = 0, r = 0, i = n.children, o = i.length; for (; --o >= 0;)
                (t = i[o]).z += e, t.m += e, e += t.s + (r += t.c); }(n);
            var o = (t[0].z + t[t.length - 1].z) / 2;
            i ? (n.z = i.z + e(n._, i._), n.m = n.z - o) : n.z = o;
        }
        else
            i && (n.z = i.z + e(n._, i._)); n.parent.A = function (n, t, r) { if (t) {
            for (var i, o = n, u = n, a = t, c = o.parent.children[0], l = o.m, s = u.m, f = a.m, h = c.m; a = au(a), o = uu(o), a && o;)
                c = uu(c), (u = au(u)).a = n, (i = a.z + f - o.z - l + e(a._, o._)) > 0 && (cu(lu(a, n, r), n, i), l += i, s += i), f += a.m, l += o.m, h += c.m, s += u.m;
            a && !au(u) && (u.t = a, u.m += f - s), o && !uu(c) && (c.t = o, c.m += l - h, r = n);
        } return r; }(n, i, n.parent.A || r[0]); } function a(n) { n._.x = n.z + n.parent.m, n.m += n.parent.m; } function c(n) { n.x *= r[0], n.y = n.depth * r[1]; } return o.separation = function (n) { return arguments.length ? (e = n, o) : e; }, o.size = function (n) { return arguments.length ? (i = null == (r = n) ? c : null, o) : i ? null : r; }, o.nodeSize = function (n) { return arguments.length ? (i = null == (r = n) ? null : c, o) : i ? r : null; }, Lo(o, t); }, n.layout.cluster = function () { var t = n.layout.hierarchy().sort(null).value(null), e = ou, r = [1, 1], i = !1; function o(o, u) { var a, c = t.call(this, o, u), l = c[0], s = 0; Fo(l, function (t) { var r = t.children; r && r.length ? (t.x = function (n) { return n.reduce(function (n, t) { return n + t.x; }, 0) / n.length; }(r), t.y = function (t) { return 1 + n.max(t, function (n) { return n.y; }); }(r)) : (t.x = a ? s += e(t, a) : 0, t.y = 0, a = t); }); var f = function n(t) { var e = t.children; return e && e.length ? n(e[0]) : t; }(l), h = function n(t) { var e, r = t.children; return r && (e = r.length) ? n(r[e - 1]) : t; }(l), p = f.x - e(f, h) / 2, d = h.x + e(h, f) / 2; return Fo(l, i ? function (n) { n.x = (n.x - l.x) * r[0], n.y = (l.y - n.y) * r[1]; } : function (n) { n.x = (n.x - p) / (d - p) * r[0], n.y = (1 - (l.y ? n.y / l.y : 1)) * r[1]; }), c; } return o.separation = function (n) { return arguments.length ? (e = n, o) : e; }, o.size = function (n) { return arguments.length ? (i = null == (r = n), o) : i ? null : r; }, o.nodeSize = function (n) { return arguments.length ? (i = null != (r = n), o) : i ? r : null; }, Lo(o, t); }, n.layout.treemap = function () { var t, e = n.layout.hierarchy(), r = Math.round, i = [1, 1], o = null, u = su, a = !1, c = "squarify", l = .5 * (1 + Math.sqrt(5)); function s(n, t) { for (var e, r, i = -1, o = n.length; ++i < o;)
            r = (e = n[i]).value * (t < 0 ? 0 : t), e.area = isNaN(r) || r <= 0 ? 0 : r; } function f(n) { var t = n.children; if (t && t.length) {
            var e, r, i, o = u(n), a = [], l = t.slice(), h = 1 / 0, g = "slice" === c ? o.dx : "dice" === c ? o.dy : "slice-dice" === c ? 1 & n.depth ? o.dy : o.dx : Math.min(o.dx, o.dy);
            for (s(l, o.dx * o.dy / n.value), a.area = 0; (i = l.length) > 0;)
                a.push(e = l[i - 1]), a.area += e.area, "squarify" !== c || (r = p(a, g)) <= h ? (l.pop(), h = r) : (a.area -= a.pop().area, d(a, g, o, !1), g = Math.min(o.dx, o.dy), a.length = a.area = 0, h = 1 / 0);
            a.length && (d(a, g, o, !0), a.length = a.area = 0), t.forEach(f);
        } } function h(n) { var t = n.children; if (t && t.length) {
            var e, r = u(n), i = t.slice(), o = [];
            for (s(i, r.dx * r.dy / n.value), o.area = 0; e = i.pop();)
                o.push(e), o.area += e.area, null != e.z && (d(o, e.z ? r.dx : r.dy, r, !i.length), o.length = o.area = 0);
            t.forEach(h);
        } } function p(n, t) { for (var e, r = n.area, i = 0, o = 1 / 0, u = -1, a = n.length; ++u < a;)
            (e = n[u].area) && (e < o && (o = e), e > i && (i = e)); return t *= t, (r *= r) ? Math.max(t * i * l / r, r / (t * o * l)) : 1 / 0; } function d(n, t, e, i) { var o, u = -1, a = n.length, c = e.x, l = e.y, s = t ? r(n.area / t) : 0; if (t == e.dx) {
            for ((i || s > e.dy) && (s = e.dy); ++u < a;)
                (o = n[u]).x = c, o.y = l, o.dy = s, c += o.dx = Math.min(e.x + e.dx - c, s ? r(o.area / s) : 0);
            o.z = !0, o.dx += e.x + e.dx - c, e.y += s, e.dy -= s;
        }
        else {
            for ((i || s > e.dx) && (s = e.dx); ++u < a;)
                (o = n[u]).x = c, o.y = l, o.dx = s, l += o.dy = Math.min(e.y + e.dy - l, s ? r(o.area / s) : 0);
            o.z = !1, o.dy += e.y + e.dy - l, e.x += s, e.dx -= s;
        } } function g(n) { var r = t || e(n), o = r[0]; return o.x = o.y = 0, o.value ? (o.dx = i[0], o.dy = i[1]) : o.dx = o.dy = 0, t && e.revalue(o), s([o], o.dx * o.dy / o.value), (t ? h : f)(o), a && (t = r), r; } return g.size = function (n) { return arguments.length ? (i = n, g) : i; }, g.padding = function (n) { if (!arguments.length)
            return o; function t(t) { return fu(t, n); } var e; return u = null == (o = n) ? su : "function" == (e = typeof n) ? function (t) { var e = n.call(g, t, t.depth); return null == e ? su(t) : fu(t, "number" == typeof e ? [e, e, e, e] : e); } : "number" === e ? (n = [n, n, n, n], t) : t, g; }, g.round = function (n) { return arguments.length ? (r = n ? Math.round : Number, g) : r != Number; }, g.sticky = function (n) { return arguments.length ? (a = n, t = null, g) : a; }, g.ratio = function (n) { return arguments.length ? (l = n, g) : l; }, g.mode = function (n) { return arguments.length ? (c = n + "", g) : c; }, Lo(g, e); }, n.random = { normal: function (n, t) { var e = arguments.length; return e < 2 && (t = 1), e < 1 && (n = 0), function () { var e, r, i; do {
                i = (e = 2 * Math.random() - 1) * e + (r = 2 * Math.random() - 1) * r;
            } while (!i || i > 1); return n + t * e * Math.sqrt(-2 * Math.log(i) / i); }; }, logNormal: function () { var t = n.random.normal.apply(n, arguments); return function () { return Math.exp(t()); }; }, bates: function (t) { var e = n.random.irwinHall(t); return function () { return e() / t; }; }, irwinHall: function (n) { return function () { for (var t = 0, e = 0; e < n; e++)
                t += Math.random(); return t; }; } }, n.scale = {}; var yu = { floor: T, ceil: T }; function mu(t, e, r, i) { var o = [], u = [], a = 0, c = Math.min(t.length, e.length) - 1; for (t[c] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a <= c;)
            o.push(r(t[a - 1], t[a])), u.push(i(e[a - 1], e[a])); return function (e) { var r = n.bisect(t, e, 1, c) - 1; return u[r](o[r](e)); }; } function xu(t, e) { return n.rebind(t, e, "range", "rangeRound", "interpolate", "clamp"); } function Mu(n, t) { return gu(n, vu(_u(n, t)[2])), gu(n, vu(_u(n, t)[2])), n; } function _u(n, t) { null == t && (t = 10); var e = hu(n), r = e[1] - e[0], i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)), o = t / r * i; return o <= .15 ? i *= 10 : o <= .35 ? i *= 5 : o <= .75 && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e; } function wu(t, e) { return n.range.apply(n, _u(t, e)); } function bu(t, e, r) { var i = _u(t, e); if (r) {
            var o = Ft.exec(r);
            if (o.shift(), "s" === o[8]) {
                var u = n.formatPrefix(Math.max(m(i[0]), m(i[1])));
                return o[7] || (o[7] = "." + Cu(u.scale(i[2]))), o[8] = "f", r = n.format(o.join("")), function (n) { return r(u.scale(n)) + u.symbol; };
            }
            o[7] || (o[7] = "." + function (n, t) { var e = Cu(t[2]); return n in ku ? Math.abs(e - Cu(Math.max(m(t[0]), m(t[1])))) + +("e" !== n) : e - 2 * ("%" === n); }(o[8], i)), r = o.join("");
        }
        else
            r = ",." + Cu(i[2]) + "f"; return n.format(r); } n.scale.linear = function () { return function n(t, e, r, i) { var o, u; function a() { var n = Math.min(t.length, e.length) > 2 ? mu : du, a = i ? Mo : xo; return o = n(t, e, a, r), u = n(e, t, a, Gi), c; } function c(n) { return o(n); } c.invert = function (n) { return u(n); }; c.domain = function (n) { return arguments.length ? (t = n.map(Number), a()) : t; }; c.range = function (n) { return arguments.length ? (e = n, a()) : e; }; c.rangeRound = function (n) { return c.range(n).interpolate(fo); }; c.clamp = function (n) { return arguments.length ? (i = n, a()) : i; }; c.interpolate = function (n) { return arguments.length ? (r = n, a()) : r; }; c.ticks = function (n) { return wu(t, n); }; c.tickFormat = function (n, e) { return bu(t, n, e); }; c.nice = function (n) { return Mu(t, n), a(); }; c.copy = function () { return n(t, e, r, i); }; return a(); }([0, 1], [0, 1], Gi, !1); }; var ku = { s: 1, g: 1, p: 1, r: 1, e: 1 }; function Cu(n) { return -Math.floor(Math.log(n) / Math.LN10 + .01); } n.scale.log = function () { return function t(e, r, i, o) { function u(n) { return (i ? Math.log(n < 0 ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(r); } function a(n) { return i ? Math.pow(r, n) : -Math.pow(r, -n); } function c(n) { return e(u(n)); } c.invert = function (n) { return a(e.invert(n)); }; c.domain = function (n) { return arguments.length ? (i = n[0] >= 0, e.domain((o = n.map(Number)).map(u)), c) : o; }; c.base = function (n) { return arguments.length ? (r = +n, e.domain(o.map(u)), c) : r; }; c.nice = function () { var n = gu(o.map(u), i ? Math : Nu); return e.domain(n), o = n.map(a), c; }; c.ticks = function () { var n = hu(o), t = [], e = n[0], c = n[1], l = Math.floor(u(e)), s = Math.ceil(u(c)), f = r % 1 ? 2 : r; if (isFinite(s - l)) {
            if (i) {
                for (; l < s; l++)
                    for (var h = 1; h < f; h++)
                        t.push(a(l) * h);
                t.push(a(l));
            }
            else
                for (t.push(a(l)); l++ < s;)
                    for (var h = f - 1; h > 0; h--)
                        t.push(a(l) * h);
            for (l = 0; t[l] < e; l++)
                ;
            for (s = t.length; t[s - 1] > c; s--)
                ;
            t = t.slice(l, s);
        } return t; }; c.tickFormat = function (t, e) { if (!arguments.length)
            return Eu; arguments.length < 2 ? e = Eu : "function" != typeof e && (e = n.format(e)); var i = Math.max(1, r * t / c.ticks().length); return function (n) { var t = n / a(Math.round(u(n))); return t * r < r - .5 && (t *= r), t <= i ? e(n) : ""; }; }; c.copy = function () { return t(e.copy(), r, i, o); }; return xu(c, e); }(n.scale.linear().domain([0, 1]), 10, !0, [1, 10]); }; var Eu = n.format(".0e"), Nu = { floor: function (n) { return -Math.ceil(-n); }, ceil: function (n) { return -Math.floor(-n); } }; function Su(n) { return function (t) { return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n); }; } n.scale.pow = function () { return function n(t, e, r) { var i = Su(e), o = Su(1 / e); function u(n) { return t(i(n)); } u.invert = function (n) { return o(t.invert(n)); }; u.domain = function (n) { return arguments.length ? (t.domain((r = n.map(Number)).map(i)), u) : r; }; u.ticks = function (n) { return wu(r, n); }; u.tickFormat = function (n, t) { return bu(r, n, t); }; u.nice = function (n) { return u.domain(Mu(r, n)); }; u.exponent = function (n) { return arguments.length ? (i = Su(e = n), o = Su(1 / e), t.domain(r.map(i)), u) : e; }; u.copy = function () { return n(t.copy(), e, r); }; return xu(u, t); }(n.scale.linear(), 1, [0, 1]); }, n.scale.sqrt = function () { return n.scale.pow().exponent(.5); }, n.scale.ordinal = function () { return function t(e, r) { var i, o, u; function a(n) { return o[((i.get(n) || ("range" === r.t ? i.set(n, e.push(n)) : NaN)) - 1) % o.length]; } function c(t, r) { return n.range(e.length).map(function (n) { return t + r * n; }); } a.domain = function (n) { if (!arguments.length)
            return e; e = [], i = new M; for (var t, o = -1, u = n.length; ++o < u;)
            i.has(t = n[o]) || i.set(t, e.push(t)); return a[r.t].apply(a, r.a); }; a.range = function (n) { return arguments.length ? (o = n, u = 0, r = { t: "range", a: arguments }, a) : o; }; a.rangePoints = function (n, t) { arguments.length < 2 && (t = 0); var i = n[0], l = n[1], s = e.length < 2 ? (i = (i + l) / 2, 0) : (l - i) / (e.length - 1 + t); return o = c(i + s * t / 2, s), u = 0, r = { t: "rangePoints", a: arguments }, a; }; a.rangeRoundPoints = function (n, t) { arguments.length < 2 && (t = 0); var i = n[0], l = n[1], s = e.length < 2 ? (i = l = Math.round((i + l) / 2), 0) : (l - i) / (e.length - 1 + t) | 0; return o = c(i + Math.round(s * t / 2 + (l - i - (e.length - 1 + t) * s) / 2), s), u = 0, r = { t: "rangeRoundPoints", a: arguments }, a; }; a.rangeBands = function (n, t, i) { arguments.length < 2 && (t = 0), arguments.length < 3 && (i = t); var l = n[1] < n[0], s = n[l - 0], f = n[1 - l], h = (f - s) / (e.length - t + 2 * i); return o = c(s + h * i, h), l && o.reverse(), u = h * (1 - t), r = { t: "rangeBands", a: arguments }, a; }; a.rangeRoundBands = function (n, t, i) { arguments.length < 2 && (t = 0), arguments.length < 3 && (i = t); var l = n[1] < n[0], s = n[l - 0], f = n[1 - l], h = Math.floor((f - s) / (e.length - t + 2 * i)); return o = c(s + Math.round((f - s - (e.length - t) * h) / 2), h), l && o.reverse(), u = Math.round(h * (1 - t)), r = { t: "rangeRoundBands", a: arguments }, a; }; a.rangeBand = function () { return u; }; a.rangeExtent = function () { return hu(r.a[0]); }; a.copy = function () { return t(e, r); }; return a.domain(e); }([], { t: "range", a: [[]] }); }, n.scale.category10 = function () { return n.scale.ordinal().range(Au); }, n.scale.category20 = function () { return n.scale.ordinal().range(Lu); }, n.scale.category20b = function () { return n.scale.ordinal().range(Tu); }, n.scale.category20c = function () { return n.scale.ordinal().range(Fu); }; var Au = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ct), Lu = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ct), Tu = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ct), Fu = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ct); function zu() { return 0; } n.scale.quantile = function () { return function t(e, r) { var i; function o() { var t = 0, o = r.length; for (i = []; ++t < o;)
            i[t - 1] = n.quantile(e, t / o); return u; } function u(t) { if (!isNaN(t = +t))
            return r[n.bisect(i, t)]; } u.domain = function (n) { return arguments.length ? (e = n.map(p).filter(d).sort(h), o()) : e; }; u.range = function (n) { return arguments.length ? (r = n, o()) : r; }; u.quantiles = function () { return i; }; u.invertExtent = function (n) { return (n = r.indexOf(n)) < 0 ? [NaN, NaN] : [n > 0 ? i[n - 1] : e[0], n < i.length ? i[n] : e[e.length - 1]]; }; u.copy = function () { return t(e, r); }; return o(); }([], []); }, n.scale.quantize = function () { return function n(t, e, r) { var i, o; function u(n) { return r[Math.max(0, Math.min(o, Math.floor(i * (n - t))))]; } function a() { return i = r.length / (e - t), o = r.length - 1, u; } u.domain = function (n) { return arguments.length ? (t = +n[0], e = +n[n.length - 1], a()) : [t, e]; }; u.range = function (n) { return arguments.length ? (r = n, a()) : r; }; u.invertExtent = function (n) { return [n = (n = r.indexOf(n)) < 0 ? NaN : n / i + t, n + 1 / i]; }; u.copy = function () { return n(t, e, r); }; return a(); }(0, 1, [0, 1]); }, n.scale.threshold = function () { return function t(e, r) { function i(t) { if (t <= t)
            return r[n.bisect(e, t)]; } i.domain = function (n) { return arguments.length ? (e = n, i) : e; }; i.range = function (n) { return arguments.length ? (r = n, i) : r; }; i.invertExtent = function (n) { return n = r.indexOf(n), [e[n - 1], e[n]]; }; i.copy = function () { return t(e, r); }; return i; }([.5], [0, 1]); }, n.scale.identity = function () { return function n(t) { function e(n) { return +n; } e.invert = e; e.domain = e.range = function (n) { return arguments.length ? (t = n.map(e), e) : t; }; e.ticks = function (n) { return wu(t, n); }; e.tickFormat = function (n, e) { return bu(t, n, e); }; e.copy = function () { return n(t); }; return e; }([0, 1]); }, n.svg = {}, n.svg.arc = function () { var n = Du, t = Ru, e = zu, r = qu, i = ju, o = Pu, u = Ou; function a() { var a = Math.max(0, +n.apply(this, arguments)), l = Math.max(0, +t.apply(this, arguments)), s = i.apply(this, arguments) - An, f = o.apply(this, arguments) - An, h = Math.abs(f - s), p = s > f ? 0 : 1; if (l < a && (d = l, l = a, a = d), h >= Sn)
            return c(l, p) + (a ? c(a, 1 - p) : "") + "Z"; var d, g, v, y, m, x, M, _, w, b, k, C, E = 0, N = 0, S = []; if ((y = (+u.apply(this, arguments) || 0) / 2) && (v = r === qu ? Math.sqrt(a * a + l * l) : +r.apply(this, arguments), p || (N *= -1), l && (N = Dn(v / l * Math.sin(y))), a && (E = Dn(v / a * Math.sin(y)))), l) {
            m = l * Math.cos(s + N), x = l * Math.sin(s + N), M = l * Math.cos(f - N), _ = l * Math.sin(f - N);
            var A = Math.abs(f - s - 2 * N) <= En ? 0 : 1;
            if (N && Uu(m, x, M, _) === p ^ A) {
                var L = (s + f) / 2;
                m = l * Math.cos(L), x = l * Math.sin(L), M = _ = null;
            }
        }
        else
            m = x = 0; if (a) {
            w = a * Math.cos(f - E), b = a * Math.sin(f - E), k = a * Math.cos(s + E), C = a * Math.sin(s + E);
            var T = Math.abs(s - f + 2 * E) <= En ? 0 : 1;
            if (E && Uu(w, b, k, C) === 1 - p ^ T) {
                var F = (s + f) / 2;
                w = a * Math.cos(F), b = a * Math.sin(F), k = C = null;
            }
        }
        else
            w = b = 0; if (h > kn && (d = Math.min(Math.abs(l - a) / 2, +e.apply(this, arguments))) > .001) {
            g = a < l ^ p ? 0 : 1;
            var z = d, q = d;
            if (h < En) {
                var D = null == k ? [w, b] : null == M ? [m, x] : li([m, x], [k, C], [M, _], [w, b]), R = m - D[0], j = x - D[1], P = M - D[0], O = _ - D[1], U = 1 / Math.sin(Math.acos((R * P + j * O) / (Math.sqrt(R * R + j * j) * Math.sqrt(P * P + O * O))) / 2), I = Math.sqrt(D[0] * D[0] + D[1] * D[1]);
                q = Math.min(d, (a - I) / (U - 1)), z = Math.min(d, (l - I) / (U + 1));
            }
            if (null != M) {
                var H = Iu(null == k ? [w, b] : [k, C], [m, x], l, z, p), Y = Iu([M, _], [w, b], l, z, p);
                d === z ? S.push("M", H[0], "A", z, ",", z, " 0 0,", g, " ", H[1], "A", l, ",", l, " 0 ", 1 - p ^ Uu(H[1][0], H[1][1], Y[1][0], Y[1][1]), ",", p, " ", Y[1], "A", z, ",", z, " 0 0,", g, " ", Y[0]) : S.push("M", H[0], "A", z, ",", z, " 0 1,", g, " ", Y[0]);
            }
            else
                S.push("M", m, ",", x);
            if (null != k) {
                var Z = Iu([m, x], [k, C], a, -q, p), V = Iu([w, b], null == M ? [m, x] : [M, _], a, -q, p);
                d === q ? S.push("L", V[0], "A", q, ",", q, " 0 0,", g, " ", V[1], "A", a, ",", a, " 0 ", p ^ Uu(V[1][0], V[1][1], Z[1][0], Z[1][1]), ",", 1 - p, " ", Z[1], "A", q, ",", q, " 0 0,", g, " ", Z[0]) : S.push("L", V[0], "A", q, ",", q, " 0 0,", g, " ", Z[0]);
            }
            else
                S.push("L", w, ",", b);
        }
        else
            S.push("M", m, ",", x), null != M && S.push("A", l, ",", l, " 0 ", A, ",", p, " ", M, ",", _), S.push("L", w, ",", b), null != k && S.push("A", a, ",", a, " 0 ", T, ",", 1 - p, " ", k, ",", C); return S.push("Z"), S.join(""); } function c(n, t) { return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n; } return a.innerRadius = function (t) { return arguments.length ? (n = yt(t), a) : n; }, a.outerRadius = function (n) { return arguments.length ? (t = yt(n), a) : t; }, a.cornerRadius = function (n) { return arguments.length ? (e = yt(n), a) : e; }, a.padRadius = function (n) { return arguments.length ? (r = n == qu ? qu : yt(n), a) : r; }, a.startAngle = function (n) { return arguments.length ? (i = yt(n), a) : i; }, a.endAngle = function (n) { return arguments.length ? (o = yt(n), a) : o; }, a.padAngle = function (n) { return arguments.length ? (u = yt(n), a) : u; }, a.centroid = function () { var e = (+n.apply(this, arguments) + +t.apply(this, arguments)) / 2, r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - An; return [Math.cos(r) * e, Math.sin(r) * e]; }, a; }; var qu = "auto"; function Du(n) { return n.innerRadius; } function Ru(n) { return n.outerRadius; } function ju(n) { return n.startAngle; } function Pu(n) { return n.endAngle; } function Ou(n) { return n && n.padAngle; } function Uu(n, t, e, r) { return (n - e) * t - (t - r) * n > 0 ? 0 : 1; } function Iu(n, t, e, r, i) { var o = n[0] - t[0], u = n[1] - t[1], a = (i ? r : -r) / Math.sqrt(o * o + u * u), c = a * u, l = -a * o, s = n[0] + c, f = n[1] + l, h = t[0] + c, p = t[1] + l, d = (s + h) / 2, g = (f + p) / 2, v = h - s, y = p - f, m = v * v + y * y, x = e - r, M = s * p - h * f, _ = (y < 0 ? -1 : 1) * Math.sqrt(Math.max(0, x * x * m - M * M)), w = (M * y - v * _) / m, b = (-M * v - y * _) / m, k = (M * y + v * _) / m, C = (-M * v + y * _) / m, E = w - d, N = b - g, S = k - d, A = C - g; return E * E + N * N > S * S + A * A && (w = k, b = C), [[w - c, b - l], [w * e / x, b * e / x]]; } function Hu(n) { var t = ri, e = ii, r = We, i = Zu, o = i.key, u = .7; function a(o) { var a, c = [], l = [], s = -1, f = o.length, h = yt(t), p = yt(e); function d() { c.push("M", i(n(l), u)); } for (; ++s < f;)
            r.call(this, a = o[s], s) ? l.push([+h.call(this, a, s), +p.call(this, a, s)]) : l.length && (d(), l = []); return l.length && d(), c.length ? c.join("") : null; } return a.x = function (n) { return arguments.length ? (t = n, a) : t; }, a.y = function (n) { return arguments.length ? (e = n, a) : e; }, a.defined = function (n) { return arguments.length ? (r = n, a) : r; }, a.interpolate = function (n) { return arguments.length ? (o = "function" == typeof n ? i = n : (i = Yu.get(n) || Zu).key, a) : o; }, a.tension = function (n) { return arguments.length ? (u = n, a) : u; }, a; } n.svg.line = function () { return Hu(T); }; var Yu = n.map({ linear: Zu, "linear-closed": Vu, step: function (n) { var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; for (; ++t < e;)
                i.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]); e > 1 && i.push("H", r[0]); return i.join(""); }, "step-before": $u, "step-after": Bu, basis: Ju, "basis-open": function (n) { if (n.length < 4)
                return Zu(n); var t, e = [], r = -1, i = n.length, o = [0], u = [0]; for (; ++r < 3;)
                t = n[r], o.push(t[0]), u.push(t[1]); e.push(Gu(na, o) + "," + Gu(na, u)), --r; for (; ++r < i;)
                t = n[r], o.shift(), o.push(t[0]), u.shift(), u.push(t[1]), ta(e, o, u); return e.join(""); }, "basis-closed": function (n) { var t, e, r = -1, i = n.length, o = i + 4, u = [], a = []; for (; ++r < 4;)
                e = n[r % i], u.push(e[0]), a.push(e[1]); t = [Gu(na, u), ",", Gu(na, a)], --r; for (; ++r < o;)
                e = n[r % i], u.shift(), u.push(e[0]), a.shift(), a.push(e[1]), ta(t, u, a); return t.join(""); }, bundle: function (n, t) { var e = n.length - 1; if (e)
                for (var r, i, o = n[0][0], u = n[0][1], a = n[e][0] - o, c = n[e][1] - u, l = -1; ++l <= e;)
                    r = n[l], i = l / e, r[0] = t * r[0] + (1 - t) * (o + i * a), r[1] = t * r[1] + (1 - t) * (u + i * c); return Ju(n); }, cardinal: function (n, t) { return n.length < 3 ? Zu(n) : n[0] + Xu(n, Wu(n, t)); }, "cardinal-open": function (n, t) { return n.length < 4 ? Zu(n) : n[1] + Xu(n.slice(1, -1), Wu(n, t)); }, "cardinal-closed": function (n, t) { return n.length < 3 ? Vu(n) : n[0] + Xu((n.push(n[0]), n), Wu([n[n.length - 2]].concat(n, [n[1]]), t)); }, monotone: function (n) { return n.length < 3 ? Zu(n) : n[0] + Xu(n, function (n) { var t, e, r, i, o = [], u = function (n) { var t = 0, e = n.length - 1, r = [], i = n[0], o = n[1], u = r[0] = ea(i, o); for (; ++t < e;)
                r[t] = (u + (u = ea(i = o, o = n[t + 1]))) / 2; return r[t] = u, r; }(n), a = -1, c = n.length - 1; for (; ++a < c;)
                t = ea(n[a], n[a + 1]), m(t) < kn ? u[a] = u[a + 1] = 0 : (e = u[a] / t, r = u[a + 1] / t, (i = e * e + r * r) > 9 && (i = 3 * t / Math.sqrt(i), u[a] = i * e, u[a + 1] = i * r)); a = -1; for (; ++a <= c;)
                i = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + u[a] * u[a])), o.push([i || 0, u[a] * i || 0]); return o; }(n)); } }); function Zu(n) { return n.length > 1 ? n.join("L") : n + "Z"; } function Vu(n) { return n.join("L") + "Z"; } function $u(n) { for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;)
            i.push("V", (r = n[t])[1], "H", r[0]); return i.join(""); } function Bu(n) { for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;)
            i.push("H", (r = n[t])[0], "V", r[1]); return i.join(""); } function Xu(n, t) { if (t.length < 1 || n.length != t.length && n.length != t.length + 2)
            return Zu(n); var e = n.length != t.length, r = "", i = n[0], o = n[1], u = t[0], a = u, c = 1; if (e && (r += "Q" + (o[0] - 2 * u[0] / 3) + "," + (o[1] - 2 * u[1] / 3) + "," + o[0] + "," + o[1], i = n[1], c = 2), t.length > 1) {
            a = t[1], o = n[c], c++, r += "C" + (i[0] + u[0]) + "," + (i[1] + u[1]) + "," + (o[0] - a[0]) + "," + (o[1] - a[1]) + "," + o[0] + "," + o[1];
            for (var l = 2; l < t.length; l++, c++)
                o = n[c], a = t[l], r += "S" + (o[0] - a[0]) + "," + (o[1] - a[1]) + "," + o[0] + "," + o[1];
        } if (e) {
            var s = n[c];
            r += "Q" + (o[0] + 2 * a[0] / 3) + "," + (o[1] + 2 * a[1] / 3) + "," + s[0] + "," + s[1];
        } return r; } function Wu(n, t) { for (var e, r = [], i = (1 - t) / 2, o = n[0], u = n[1], a = 1, c = n.length; ++a < c;)
            e = o, o = u, u = n[a], r.push([i * (u[0] - e[0]), i * (u[1] - e[1])]); return r; } function Ju(n) { if (n.length < 3)
            return Zu(n); var t = 1, e = n.length, r = n[0], i = r[0], o = r[1], u = [i, i, i, (r = n[1])[0]], a = [o, o, o, r[1]], c = [i, ",", o, "L", Gu(na, u), ",", Gu(na, a)]; for (n.push(n[e - 1]); ++t <= e;)
            r = n[t], u.shift(), u.push(r[0]), a.shift(), a.push(r[1]), ta(c, u, a); return n.pop(), c.push("L", r), c.join(""); } function Gu(n, t) { return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]; } Yu.forEach(function (n, t) { t.key = n, t.closed = /-closed$/.test(n); }); var Ku = [0, 2 / 3, 1 / 3, 0], Qu = [0, 1 / 3, 2 / 3, 0], na = [0, 1 / 6, 2 / 3, 1 / 6]; function ta(n, t, e) { n.push("C", Gu(Ku, t), ",", Gu(Ku, e), ",", Gu(Qu, t), ",", Gu(Qu, e), ",", Gu(na, t), ",", Gu(na, e)); } function ea(n, t) { return (t[1] - n[1]) / (t[0] - n[0]); } function ra(n) { for (var t, e, r, i = -1, o = n.length; ++i < o;)
            e = (t = n[i])[0], r = t[1] - An, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r); return n; } function ia(n) { var t = ri, e = ri, r = 0, i = ii, o = We, u = Zu, a = u.key, c = u, l = "L", s = .7; function f(a) { var f, h, p, d = [], g = [], v = [], y = -1, m = a.length, x = yt(t), M = yt(r), _ = t === e ? function () { return h; } : yt(e), w = r === i ? function () { return p; } : yt(i); function b() { d.push("M", u(n(v), s), l, c(n(g.reverse()), s), "Z"); } for (; ++y < m;)
            o.call(this, f = a[y], y) ? (g.push([h = +x.call(this, f, y), p = +M.call(this, f, y)]), v.push([+_.call(this, f, y), +w.call(this, f, y)])) : g.length && (b(), g = [], v = []); return g.length && b(), d.length ? d.join("") : null; } return f.x = function (n) { return arguments.length ? (t = e = n, f) : e; }, f.x0 = function (n) { return arguments.length ? (t = n, f) : t; }, f.x1 = function (n) { return arguments.length ? (e = n, f) : e; }, f.y = function (n) { return arguments.length ? (r = i = n, f) : i; }, f.y0 = function (n) { return arguments.length ? (r = n, f) : r; }, f.y1 = function (n) { return arguments.length ? (i = n, f) : i; }, f.defined = function (n) { return arguments.length ? (o = n, f) : o; }, f.interpolate = function (n) { return arguments.length ? (a = "function" == typeof n ? u = n : (u = Yu.get(n) || Zu).key, c = u.reverse || u, l = u.closed ? "M" : "L", f) : a; }, f.tension = function (n) { return arguments.length ? (s = n, f) : s; }, f; } function oa(n) { return n.radius; } function ua(n) { return [n.x, n.y]; } function aa() { return 64; } function ca() { return "circle"; } function la(n) { var t = Math.sqrt(n / En); return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"; } n.svg.line.radial = function () { var n = Hu(ra); return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n; }, $u.reverse = Bu, Bu.reverse = $u, n.svg.area = function () { return ia(T); }, n.svg.area.radial = function () { var n = ia(ra); return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n; }, n.svg.chord = function () { var n = Yr, t = Zr, e = oa, r = ju, i = Pu; function o(e, r) { var i, o, l = u(this, n, e, r), s = u(this, t, e, r); return "M" + l.p0 + a(l.r, l.p1, l.a1 - l.a0) + (o = s, (i = l).a0 == o.a0 && i.a1 == o.a1 ? c(l.r, l.p1, l.r, l.p0) : c(l.r, l.p1, s.r, s.p0) + a(s.r, s.p1, s.a1 - s.a0) + c(s.r, s.p1, l.r, l.p0)) + "Z"; } function u(n, t, o, u) { var a = t.call(n, o, u), c = e.call(n, a, u), l = r.call(n, a, u) - An, s = i.call(n, a, u) - An; return { r: c, a0: l, a1: s, p0: [c * Math.cos(l), c * Math.sin(l)], p1: [c * Math.cos(s), c * Math.sin(s)] }; } function a(n, t, e) { return "A" + n + "," + n + " 0 " + +(e > En) + ",1 " + t; } function c(n, t, e, r) { return "Q 0,0 " + r; } return o.radius = function (n) { return arguments.length ? (e = yt(n), o) : e; }, o.source = function (t) { return arguments.length ? (n = yt(t), o) : n; }, o.target = function (n) { return arguments.length ? (t = yt(n), o) : t; }, o.startAngle = function (n) { return arguments.length ? (r = yt(n), o) : r; }, o.endAngle = function (n) { return arguments.length ? (i = yt(n), o) : i; }, o; }, n.svg.diagonal = function () { var n = Yr, t = Zr, e = ua; function r(r, i) { var o = n.call(this, r, i), u = t.call(this, r, i), a = (o.y + u.y) / 2, c = [o, { x: o.x, y: a }, { x: u.x, y: a }, u]; return "M" + (c = c.map(e))[0] + "C" + c[1] + " " + c[2] + " " + c[3]; } return r.source = function (t) { return arguments.length ? (n = yt(t), r) : n; }, r.target = function (n) { return arguments.length ? (t = yt(n), r) : t; }, r.projection = function (n) { return arguments.length ? (e = n, r) : e; }, r; }, n.svg.diagonal.radial = function () { var t = n.svg.diagonal(), e = ua, r = t.projection; return t.projection = function (n) { return arguments.length ? r(function (n) { return function () { var t = n.apply(this, arguments), e = t[0], r = t[1] - An; return [e * Math.cos(r), e * Math.sin(r)]; }; }(e = n)) : e; }, t; }, n.svg.symbol = function () { var n = ca, t = aa; function e(e, r) { return (sa.get(n.call(this, e, r)) || la)(t.call(this, e, r)); } return e.type = function (t) { return arguments.length ? (n = yt(t), e) : n; }, e.size = function (n) { return arguments.length ? (t = yt(n), e) : t; }, e; }; var sa = n.map({ circle: la, cross: function (n) { var t = Math.sqrt(n / 5) / 2; return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"; }, diamond: function (n) { var t = Math.sqrt(n / (2 * ha)), e = t * ha; return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z"; }, square: function (n) { var t = Math.sqrt(n) / 2; return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"; }, "triangle-down": function (n) { var t = Math.sqrt(n / fa), e = t * fa / 2; return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"; }, "triangle-up": function (n) { var t = Math.sqrt(n / fa), e = t * fa / 2; return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"; } }); n.svg.symbolTypes = sa.keys(); var fa = Math.sqrt(3), ha = Math.tan(30 * Ln); B.transition = function (n) { for (var t, e, r = va || ++xa, i = wa(n), o = [], u = ya || { time: Date.now(), ease: uo, delay: 0, duration: 250 }, a = -1, c = this.length; ++a < c;) {
            o.push(t = []);
            for (var l = this[a], s = -1, f = l.length; ++s < f;)
                (e = l[s]) && ba(e, s, i, r, u), t.push(e);
        } return ga(o, i, r); }, B.interrupt = function (n) { return this.each(null == n ? pa : da(wa(n))); }; var pa = da(wa()); function da(n) { return function () { var t, e, r; (t = this[n]) && (r = t[e = t.active]) && (r.timer.c = null, r.timer.t = NaN, --t.count ? delete t[e] : delete this[n], t.active += .5, r.event && r.event.interrupt.call(this, this.__data__, r.index)); }; } function ga(n, t, e) { return H(n, ma), n.namespace = t, n.id = e, n; } var va, ya, ma = [], xa = 0; function Ma(n, t, e, r) { var i = n.id, o = n.namespace; return fn(n, "function" == typeof e ? function (n, u, a) { n[o][i].tween.set(t, r(e.call(n, n.__data__, u, a))); } : (e = r(e), function (n) { n[o][i].tween.set(t, e); })); } function _a(n) { return null == n && (n = ""), function () { this.textContent = n; }; } function wa(n) { return null == n ? "__transition__" : "__transition_" + n + "__"; } function ba(n, t, e, r, i) { var o, u, a, c, l, s = n[e] || (n[e] = { active: 0, count: 0 }), f = s[r]; function h(e) { var i = s.active, h = s[i]; for (var d in h && (h.timer.c = null, h.timer.t = NaN, --s.count, delete s[i], h.event && h.event.interrupt.call(n, n.__data__, h.index)), s)
            if (+d < r) {
                var g = s[d];
                g.timer.c = null, g.timer.t = NaN, --s.count, delete s[d];
            } u.c = p, Ct(function () { return u.c && p(e || 1) && (u.c = null, u.t = NaN), 1; }, 0, o), s.active = r, f.event && f.event.start.call(n, n.__data__, t), l = [], f.tween.forEach(function (e, r) { (r = r.call(n, n.__data__, t)) && l.push(r); }), c = f.ease, a = f.duration; } function p(i) { for (var o = i / a, u = c(o), h = l.length; h > 0;)
            l[--h].call(n, u); if (o >= 1)
            return f.event && f.event.end.call(n, n.__data__, t), --s.count ? delete s[r] : delete n[e], 1; } f || (o = i.time, u = Ct(function (n) { var t = f.delay; if (u.t = t + o, t <= n)
            return h(n - t); u.c = h; }, 0, o), f = s[r] = { tween: new M, time: o, timer: u, delay: i.delay, duration: i.duration, ease: i.ease, index: t }, i = null, ++s.count); } ma.call = B.call, ma.empty = B.empty, ma.node = B.node, ma.size = B.size, n.transition = function (t, e) { return t && t.transition ? va ? t.transition(e) : t : n.selection().transition(t); }, n.transition.prototype = ma, ma.select = function (n) { var t, e, r, i = this.id, o = this.namespace, u = []; n = X(n); for (var a = -1, c = this.length; ++a < c;) {
            u.push(t = []);
            for (var l = this[a], s = -1, f = l.length; ++s < f;)
                (r = l[s]) && (e = n.call(r, r.__data__, s, a)) ? ("__data__" in r && (e.__data__ = r.__data__), ba(e, s, o, i, r[o][i]), t.push(e)) : t.push(null);
        } return ga(u, o, i); }, ma.selectAll = function (n) { var t, e, r, i, o, u = this.id, a = this.namespace, c = []; n = W(n); for (var l = -1, s = this.length; ++l < s;)
            for (var f = this[l], h = -1, p = f.length; ++h < p;)
                if (r = f[h]) {
                    o = r[a][u], e = n.call(r, r.__data__, h, l), c.push(t = []);
                    for (var d = -1, g = e.length; ++d < g;)
                        (i = e[d]) && ba(i, d, a, u, o), t.push(i);
                } return ga(c, a, u); }, ma.filter = function (n) { var t, e, r = []; "function" != typeof n && (n = sn(n)); for (var i = 0, o = this.length; i < o; i++) {
            r.push(t = []);
            for (var u, a = 0, c = (u = this[i]).length; a < c; a++)
                (e = u[a]) && n.call(e, e.__data__, a, i) && t.push(e);
        } return ga(r, this.namespace, this.id); }, ma.tween = function (n, t) { var e = this.id, r = this.namespace; return arguments.length < 2 ? this.node()[r][e].tween.get(n) : fn(this, null == t ? function (t) { t[r][e].tween.remove(n); } : function (i) { i[r][e].tween.set(n, t); }); }, ma.attr = function (t, e) { if (arguments.length < 2) {
            for (e in t)
                this.attr(e, t[e]);
            return this;
        } var r = "transform" == t ? mo : Gi, i = n.ns.qualify(t); function o() { this.removeAttribute(i); } function u() { this.removeAttributeNS(i.space, i.local); } return Ma(this, "attr." + t, e, i.local ? function (n) { return null == n ? u : (n += "", function () { var t, e = this.getAttributeNS(i.space, i.local); return e !== n && (t = r(e, n), function (n) { this.setAttributeNS(i.space, i.local, t(n)); }); }); } : function (n) { return null == n ? o : (n += "", function () { var t, e = this.getAttribute(i); return e !== n && (t = r(e, n), function (n) { this.setAttribute(i, t(n)); }); }); }); }, ma.attrTween = function (t, e) { var r = n.ns.qualify(t); return this.tween("attr." + t, r.local ? function (n, t) { var i = e.call(this, n, t, this.getAttributeNS(r.space, r.local)); return i && function (n) { this.setAttributeNS(r.space, r.local, i(n)); }; } : function (n, t) { var i = e.call(this, n, t, this.getAttribute(r)); return i && function (n) { this.setAttribute(r, i(n)); }; }); }, ma.style = function (n, t, e) { var r = arguments.length; if (r < 3) {
            if ("string" != typeof n) {
                for (e in r < 2 && (t = ""), n)
                    this.style(e, n[e], t);
                return this;
            }
            e = "";
        } function i() { this.style.removeProperty(n); } return Ma(this, "style." + n, t, function (t) { return null == t ? i : (t += "", function () { var r, i = u(this).getComputedStyle(this, null).getPropertyValue(n); return i !== t && (r = Gi(i, t), function (t) { this.style.setProperty(n, r(t), e); }); }); }); }, ma.styleTween = function (n, t, e) { return arguments.length < 3 && (e = ""), this.tween("style." + n, function (r, i) { var o = t.call(this, r, i, u(this).getComputedStyle(this, null).getPropertyValue(n)); return o && function (t) { this.style.setProperty(n, o(t), e); }; }); }, ma.text = function (n) { return Ma(this, "text", n, _a); }, ma.remove = function () { var n = this.namespace; return this.each("end.transition", function () { var t; this[n].count < 2 && (t = this.parentNode) && t.removeChild(this); }); }, ma.ease = function (t) { var e = this.id, r = this.namespace; return arguments.length < 1 ? this.node()[r][e].ease : ("function" != typeof t && (t = n.ease.apply(n, arguments)), fn(this, function (n) { n[r][e].ease = t; })); }, ma.delay = function (n) { var t = this.id, e = this.namespace; return arguments.length < 1 ? this.node()[e][t].delay : fn(this, "function" == typeof n ? function (r, i, o) { r[e][t].delay = +n.call(r, r.__data__, i, o); } : (n = +n, function (r) { r[e][t].delay = n; })); }, ma.duration = function (n) { var t = this.id, e = this.namespace; return arguments.length < 1 ? this.node()[e][t].duration : fn(this, "function" == typeof n ? function (r, i, o) { r[e][t].duration = Math.max(1, n.call(r, r.__data__, i, o)); } : (n = Math.max(1, n), function (r) { r[e][t].duration = n; })); }, ma.each = function (t, e) { var r = this.id, i = this.namespace; if (arguments.length < 2) {
            var o = ya, u = va;
            try {
                va = r, fn(this, function (n, e, o) { ya = n[i][r], t.call(n, n.__data__, e, o); });
            }
            finally {
                ya = o, va = u;
            }
        }
        else
            fn(this, function (o) { var u = o[i][r]; (u.event || (u.event = n.dispatch("start", "end", "interrupt"))).on(t, e); }); return this; }, ma.transition = function () { for (var n, t, e, r = this.id, i = ++xa, o = this.namespace, u = [], a = 0, c = this.length; a < c; a++) {
            u.push(n = []);
            for (var l, s = 0, f = (l = this[a]).length; s < f; s++)
                (t = l[s]) && ba(t, s, o, i, { time: (e = t[o][r]).time, ease: e.ease, delay: e.delay + e.duration, duration: e.duration }), n.push(t);
        } return ga(u, o, i); }, n.svg.axis = function () { var t, e = n.scale.linear(), i = ka, o = 6, u = 6, a = 3, c = [10], l = null; function s(r) { r.each(function () { var r, s = n.select(this), f = this.__chart__ || e, h = this.__chart__ = e.copy(), p = null == l ? h.ticks ? h.ticks.apply(h, c) : h.domain() : l, d = null == t ? h.tickFormat ? h.tickFormat.apply(h, c) : T : t, g = s.selectAll(".tick").data(p, h), v = g.enter().insert("g", ".domain").attr("class", "tick").style("opacity", kn), y = n.transition(g.exit()).style("opacity", kn).remove(), m = n.transition(g.order()).style("opacity", 1), x = Math.max(o, 0) + a, M = pu(h), _ = s.selectAll(".domain").data([0]), w = (_.enter().append("path").attr("class", "domain"), n.transition(_)); v.append("line"), v.append("text"); var b, k, C, E, N = v.select("line"), S = m.select("line"), A = g.select("text").text(d), L = v.select("text"), F = m.select("text"), z = "top" === i || "left" === i ? -1 : 1; if ("bottom" === i || "top" === i ? (r = Ea, b = "x", C = "y", k = "x2", E = "y2", A.attr("dy", z < 0 ? "0em" : ".71em").style("text-anchor", "middle"), w.attr("d", "M" + M[0] + "," + z * u + "V0H" + M[1] + "V" + z * u)) : (r = Na, b = "y", C = "x", k = "y2", E = "x2", A.attr("dy", ".32em").style("text-anchor", z < 0 ? "end" : "start"), w.attr("d", "M" + z * u + "," + M[0] + "H0V" + M[1] + "H" + z * u)), N.attr(E, z * o), L.attr(C, z * x), S.attr(k, 0).attr(E, z * o), F.attr(b, 0).attr(C, z * x), h.rangeBand) {
            var q = h, D = q.rangeBand() / 2;
            f = h = function (n) { return q(n) + D; };
        }
        else
            f.rangeBand ? f = h : y.call(r, h, f); v.call(r, f, h), m.call(r, h, h); }); } return s.scale = function (n) { return arguments.length ? (e = n, s) : e; }, s.orient = function (n) { return arguments.length ? (i = n in Ca ? n + "" : ka, s) : i; }, s.ticks = function () { return arguments.length ? (c = r(arguments), s) : c; }, s.tickValues = function (n) { return arguments.length ? (l = n, s) : l; }, s.tickFormat = function (n) { return arguments.length ? (t = n, s) : t; }, s.tickSize = function (n) { var t = arguments.length; return t ? (o = +n, u = +arguments[t - 1], s) : o; }, s.innerTickSize = function (n) { return arguments.length ? (o = +n, s) : o; }, s.outerTickSize = function (n) { return arguments.length ? (u = +n, s) : u; }, s.tickPadding = function (n) { return arguments.length ? (a = +n, s) : a; }, s.tickSubdivide = function () { return arguments.length && s; }, s; }; var ka = "bottom", Ca = { top: 1, right: 1, bottom: 1, left: 1 }; function Ea(n, t, e) { n.attr("transform", function (n) { var r = t(n); return "translate(" + (isFinite(r) ? r : e(n)) + ",0)"; }); } function Na(n, t, e) { n.attr("transform", function (n) { var r = t(n); return "translate(0," + (isFinite(r) ? r : e(n)) + ")"; }); } n.svg.brush = function () { var t, e, r = U(h, "brushstart", "brush", "brushend"), i = null, o = null, a = [0, 0], c = [0, 0], l = !0, s = !0, f = Aa[0]; function h(t) { t.each(function () { var t = n.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", v).on("touchstart.brush", v), e = t.selectAll(".background").data([0]); e.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move"); var r = t.selectAll(".resize").data(f, T); r.exit().remove(), r.enter().append("g").attr("class", function (n) { return "resize " + n; }).style("cursor", function (n) { return Sa[n]; }).append("rect").attr("x", function (n) { return /[ew]$/.test(n) ? -3 : null; }).attr("y", function (n) { return /^[ns]/.test(n) ? -3 : null; }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), r.style("display", h.empty() ? "none" : null); var u, a = n.transition(t), c = n.transition(e); i && (u = pu(i), c.attr("x", u[0]).attr("width", u[1] - u[0]), d(a)), o && (u = pu(o), c.attr("y", u[0]).attr("height", u[1] - u[0]), g(a)), p(a); }); } function p(n) { n.selectAll(".resize").attr("transform", function (n) { return "translate(" + a[+/e$/.test(n)] + "," + c[+/^s/.test(n)] + ")"; }); } function d(n) { n.select(".extent").attr("x", a[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", a[1] - a[0]); } function g(n) { n.select(".extent").attr("y", c[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", c[1] - c[0]); } function v() { var f, v, y = this, m = n.select(n.event.target), x = r.of(y, arguments), M = n.select(y), _ = m.datum(), w = !/^(n|s)$/.test(_) && i, b = !/^(e|w)$/.test(_) && o, k = m.classed("extent"), C = Mn(y), E = n.mouse(y), N = n.select(u(y)).on("keydown.brush", function () { 32 == n.event.keyCode && (k || (f = null, E[0] -= a[1], E[1] -= c[1], k = 2), P()); }).on("keyup.brush", function () { 32 == n.event.keyCode && 2 == k && (E[0] += a[1], E[1] += c[1], k = 0, P()); }); if (n.event.changedTouches ? N.on("touchmove.brush", L).on("touchend.brush", F) : N.on("mousemove.brush", L).on("mouseup.brush", F), M.interrupt().selectAll("*").interrupt(), k)
            E[0] = a[0] - E[0], E[1] = c[0] - E[1];
        else if (_) {
            var S = +/w$/.test(_), A = +/^n/.test(_);
            v = [a[1 - S] - E[0], c[1 - A] - E[1]], E[0] = a[S], E[1] = c[A];
        }
        else
            n.event.altKey && (f = E.slice()); function L() { var t = n.mouse(y), e = !1; v && (t[0] += v[0], t[1] += v[1]), k || (n.event.altKey ? (f || (f = [(a[0] + a[1]) / 2, (c[0] + c[1]) / 2]), E[0] = a[+(t[0] < f[0])], E[1] = c[+(t[1] < f[1])]) : f = null), w && T(t, i, 0) && (d(M), e = !0), b && T(t, o, 1) && (g(M), e = !0), e && (p(M), x({ type: "brush", mode: k ? "move" : "resize" })); } function T(n, r, i) { var o, u, h = pu(r), p = h[0], d = h[1], g = E[i], v = i ? c : a, y = v[1] - v[0]; if (k && (p -= g, d -= y + g), o = (i ? s : l) ? Math.max(p, Math.min(d, n[i])) : n[i], k ? u = (o += g) + y : (f && (g = Math.max(p, Math.min(d, 2 * f[i] - o))), g < o ? (u = o, o = g) : u = g), v[0] != o || v[1] != u)
            return i ? e = null : t = null, v[0] = o, v[1] = u, !0; } function F() { L(), M.style("pointer-events", "all").selectAll(".resize").style("display", h.empty() ? "none" : null), n.select("body").style("cursor", null), N.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), C(), x({ type: "brushend" }); } M.style("pointer-events", "none").selectAll(".resize").style("display", null), n.select("body").style("cursor", m.style("cursor")), x({ type: "brushstart" }), L(); } return h.event = function (i) { i.each(function () { var i = r.of(this, arguments), o = { x: a, y: c, i: t, j: e }, u = this.__chart__ || o; this.__chart__ = o, va ? n.select(this).transition().each("start.brush", function () { t = u.i, e = u.j, a = u.x, c = u.y, i({ type: "brushstart" }); }).tween("brush:brush", function () { var n = Ki(a, o.x), r = Ki(c, o.y); return t = e = null, function (t) { a = o.x = n(t), c = o.y = r(t), i({ type: "brush", mode: "resize" }); }; }).each("end.brush", function () { t = o.i, e = o.j, i({ type: "brush", mode: "resize" }), i({ type: "brushend" }); }) : (i({ type: "brushstart" }), i({ type: "brush", mode: "resize" }), i({ type: "brushend" })); }); }, h.x = function (n) { return arguments.length ? (f = Aa[!(i = n) << 1 | !o], h) : i; }, h.y = function (n) { return arguments.length ? (f = Aa[!i << 1 | !(o = n)], h) : o; }, h.clamp = function (n) { return arguments.length ? (i && o ? (l = !!n[0], s = !!n[1]) : i ? l = !!n : o && (s = !!n), h) : i && o ? [l, s] : i ? l : o ? s : null; }, h.extent = function (n) { var r, u, l, s, f; return arguments.length ? (i && (r = n[0], u = n[1], o && (r = r[0], u = u[0]), t = [r, u], i.invert && (r = i(r), u = i(u)), u < r && (f = r, r = u, u = f), r == a[0] && u == a[1] || (a = [r, u])), o && (l = n[0], s = n[1], i && (l = l[1], s = s[1]), e = [l, s], o.invert && (l = o(l), s = o(s)), s < l && (f = l, l = s, s = f), l == c[0] && s == c[1] || (c = [l, s])), h) : (i && (t ? (r = t[0], u = t[1]) : (r = a[0], u = a[1], i.invert && (r = i.invert(r), u = i.invert(u)), u < r && (f = r, r = u, u = f))), o && (e ? (l = e[0], s = e[1]) : (l = c[0], s = c[1], o.invert && (l = o.invert(l), s = o.invert(s)), s < l && (f = l, l = s, s = f))), i && o ? [[r, l], [u, s]] : i ? [r, u] : o && [l, s]); }, h.clear = function () { return h.empty() || (a = [0, 0], c = [0, 0], t = e = null), h; }, h.empty = function () { return !!i && a[0] == a[1] || !!o && c[0] == c[1]; }, n.rebind(h, r, "on"); }; var Sa = { n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" }, Aa = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []], La = Dt.format = se.timeFormat, Ta = La.utc, Fa = Ta("%Y-%m-%dT%H:%M:%S.%LZ"); function za(n) { return n.toISOString(); } function qa(t, e, r) { function i(n) { return t(n); } function o(t, r) { var i = (t[1] - t[0]) / r, o = n.bisect(Ra, i); return o == Ra.length ? [e.year, _u(t.map(function (n) { return n / 31536e6; }), r)[2]] : o ? e[i / Ra[o - 1] < Ra[o] / i ? o - 1 : o] : [Oa, _u(t, r)[2]]; } return i.invert = function (n) { return Da(t.invert(n)); }, i.domain = function (n) { return arguments.length ? (t.domain(n), i) : t.domain().map(Da); }, i.nice = function (n, t) { var e = i.domain(), r = hu(e), u = null == n ? o(r, 10) : "number" == typeof n && o(r, n); function a(e) { return !isNaN(e) && !n.range(e, Da(+e + 1), t).length; } return u && (n = u[0], t = u[1]), i.domain(gu(e, t > 1 ? { floor: function (t) { for (; a(t = n.floor(t));)
                t = Da(t - 1); return t; }, ceil: function (t) { for (; a(t = n.ceil(t));)
                t = Da(+t + 1); return t; } } : n)); }, i.ticks = function (n, t) { var e = hu(i.domain()), r = null == n ? o(e, 10) : "number" == typeof n ? o(e, n) : !n.range && [{ range: n }, t]; return r && (n = r[0], t = r[1]), n.range(e[0], Da(+e[1] + 1), t < 1 ? 1 : t); }, i.tickFormat = function () { return r; }, i.copy = function () { return qa(t.copy(), e, r); }, xu(i, t); } function Da(n) { return new Date(n); } La.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? za : Fa, za.parse = function (n) { var t = new Date(n); return isNaN(t) ? null : t; }, za.toString = Fa.toString, Dt.second = Ot(function (n) { return new Rt(1e3 * Math.floor(n / 1e3)); }, function (n, t) { n.setTime(n.getTime() + 1e3 * Math.floor(t)); }, function (n) { return n.getSeconds(); }), Dt.seconds = Dt.second.range, Dt.seconds.utc = Dt.second.utc.range, Dt.minute = Ot(function (n) { return new Rt(6e4 * Math.floor(n / 6e4)); }, function (n, t) { n.setTime(n.getTime() + 6e4 * Math.floor(t)); }, function (n) { return n.getMinutes(); }), Dt.minutes = Dt.minute.range, Dt.minutes.utc = Dt.minute.utc.range, Dt.hour = Ot(function (n) { var t = n.getTimezoneOffset() / 60; return new Rt(36e5 * (Math.floor(n / 36e5 - t) + t)); }, function (n, t) { n.setTime(n.getTime() + 36e5 * Math.floor(t)); }, function (n) { return n.getHours(); }), Dt.hours = Dt.hour.range, Dt.hours.utc = Dt.hour.utc.range, Dt.month = Ot(function (n) { return (n = Dt.day(n)).setDate(1), n; }, function (n, t) { n.setMonth(n.getMonth() + t); }, function (n) { return n.getMonth(); }), Dt.months = Dt.month.range, Dt.months.utc = Dt.month.utc.range; var Ra = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], ja = [[Dt.second, 1], [Dt.second, 5], [Dt.second, 15], [Dt.second, 30], [Dt.minute, 1], [Dt.minute, 5], [Dt.minute, 15], [Dt.minute, 30], [Dt.hour, 1], [Dt.hour, 3], [Dt.hour, 6], [Dt.hour, 12], [Dt.day, 1], [Dt.day, 2], [Dt.week, 1], [Dt.month, 1], [Dt.month, 3], [Dt.year, 1]], Pa = La.multi([[".%L", function (n) { return n.getMilliseconds(); }], [":%S", function (n) { return n.getSeconds(); }], ["%I:%M", function (n) { return n.getMinutes(); }], ["%I %p", function (n) { return n.getHours(); }], ["%a %d", function (n) { return n.getDay() && 1 != n.getDate(); }], ["%b %d", function (n) { return 1 != n.getDate(); }], ["%B", function (n) { return n.getMonth(); }], ["%Y", We]]), Oa = { range: function (t, e, r) { return n.range(Math.ceil(t / r) * r, +e, r).map(Da); }, floor: T, ceil: T }; ja.year = Dt.year, Dt.scale = function () { return qa(n.scale.linear(), ja, Pa); }; var Ua = ja.map(function (n) { return [n[0].utc, n[1]]; }), Ia = Ta.multi([[".%L", function (n) { return n.getUTCMilliseconds(); }], [":%S", function (n) { return n.getUTCSeconds(); }], ["%I:%M", function (n) { return n.getUTCMinutes(); }], ["%I %p", function (n) { return n.getUTCHours(); }], ["%a %d", function (n) { return n.getUTCDay() && 1 != n.getUTCDate(); }], ["%b %d", function (n) { return 1 != n.getUTCDate(); }], ["%B", function (n) { return n.getUTCMonth(); }], ["%Y", We]]); function Ha(n) { return JSON.parse(n.responseText); } function Ya(n) { var t = i.createRange(); return t.selectNode(i.body), t.createContextualFragment(n.responseText); } Ua.year = Dt.year.utc, Dt.scale.utc = function () { return qa(n.scale.linear(), Ua, Ia); }, n.text = mt(function (n) { return n.responseText; }), n.json = function (n, t) { return xt(n, "application/json", Ha, t); }, n.html = function (n, t) { return xt(n, "text/html", Ya, t); }, n.xml = mt(function (n) { return n.responseXML; }), "function" == typeof define && define.amd ? (this.d3 = n, define(n)) : "object" == typeof t && t.exports ? t.exports = n : this.d3 = n; }(); }, {}], 4: [function (n, t, e) { (function (r) {
            "use strict";
            function i(n) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) { return typeof n; } : function (n) { return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n; })(n); }
            e.log = function () { var n; return "object" === ("undefined" == typeof console ? "undefined" : i(console)) && console.log && (n = console).log.apply(n, arguments); }, e.formatArgs = function (n) { if (n[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + n[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
                return; var e = "color: " + this.color; n.splice(1, 0, e, "color: inherit"); var r = 0, i = 0; n[0].replace(/%[a-zA-Z%]/g, function (n) { "%%" !== n && (r++, "%c" === n && (i = r)); }), n.splice(i, 0, e); }, e.save = function (n) { try {
                n ? e.storage.setItem("debug", n) : e.storage.removeItem("debug");
            }
            catch (n) { } }, e.load = function () { var n; try {
                n = e.storage.getItem("debug");
            }
            catch (n) { } !n && void 0 !== r && "env" in r && (n = r.env.DEBUG); return n; }, e.useColors = function () { if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
                return !0; if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
                return !1; return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/); }, e.storage = function () { try {
                return localStorage;
            }
            catch (n) { } }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = n("./common")(e), t.exports.formatters.j = function (n) { try {
                return JSON.stringify(n);
            }
            catch (n) {
                return "[UnexpectedJSONParseError]: " + n.message;
            } };
        }).call(this, n("_process")); }, { "./common": 5, _process: 2 }], 5: [function (n, t, e) {
            "use strict";
            t.exports = function (t) { function e(n) { for (var t = 0, e = 0; e < n.length; e++)
                t = (t << 5) - t + n.charCodeAt(e), t |= 0; return r.colors[Math.abs(t) % r.colors.length]; } function r(n) { var t; function u() { if (u.enabled) {
                for (var n = arguments.length, e = new Array(n), i = 0; i < n; i++)
                    e[i] = arguments[i];
                var o = u, a = Number(new Date), c = a - (t || a);
                o.diff = c, o.prev = t, o.curr = a, t = a, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                var l = 0;
                e[0] = e[0].replace(/%([a-zA-Z%])/g, function (n, t) { if ("%%" === n)
                    return n; l++; var i = r.formatters[t]; if ("function" == typeof i) {
                    var u = e[l];
                    n = i.call(o, u), e.splice(l, 1), l--;
                } return n; }), r.formatArgs.call(o, e), (o.log || r.log).apply(o, e);
            } } return u.namespace = n, u.enabled = r.enabled(n), u.useColors = r.useColors(), u.color = e(n), u.destroy = i, u.extend = o, "function" == typeof r.init && r.init(u), r.instances.push(u), u; } function i() { var n = r.instances.indexOf(this); return -1 !== n && (r.instances.splice(n, 1), !0); } function o(n, t) { return r(this.namespace + (void 0 === t ? ":" : t) + n); } return r.debug = r, r.default = r, r.coerce = function (n) { return n instanceof Error ? n.stack || n.message : n; }, r.disable = function () { r.enable(""); }, r.enable = function (n) { var t; r.save(n), r.names = [], r.skips = []; var e = ("string" == typeof n ? n : "").split(/[\s,]+/), i = e.length; for (t = 0; t < i; t++)
                e[t] && ("-" === (n = e[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + n.substr(1) + "$")) : r.names.push(new RegExp("^" + n + "$"))); for (t = 0; t < r.instances.length; t++) {
                var o = r.instances[t];
                o.enabled = r.enabled(o.namespace);
            } }, r.enabled = function (n) { if ("*" === n[n.length - 1])
                return !0; var t, e; for (t = 0, e = r.skips.length; t < e; t++)
                if (r.skips[t].test(n))
                    return !1; for (t = 0, e = r.names.length; t < e; t++)
                if (r.names[t].test(n))
                    return !0; return !1; }, r.humanize = n("ms"), Object.keys(t).forEach(function (n) { r[n] = t[n]; }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = e, r.enable(r.load()), r; };
        }, { ms: 7 }], 6: [function (n, t, e) { "function" == typeof Object.create ? t.exports = function (n, t) { n.super_ = t, n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }); } : t.exports = function (n, t) { n.super_ = t; var e = function () { }; e.prototype = t.prototype, n.prototype = new e, n.prototype.constructor = n; }; }, {}], 7: [function (n, t, e) { var r = 1e3, i = 60 * r, o = 60 * i, u = 24 * o, a = 7 * u, c = 365.25 * u; function l(n, t, e, r) { var i = t >= 1.5 * e; return Math.round(n / e) + " " + r + (i ? "s" : ""); } t.exports = function (n, t) { t = t || {}; var e = typeof n; if ("string" === e && n.length > 0)
            return function (n) { if ((n = String(n)).length > 100)
                return; var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n); if (!t)
                return; var e = parseFloat(t[1]); switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y": return e * c;
                case "weeks":
                case "week":
                case "w": return e * a;
                case "days":
                case "day":
                case "d": return e * u;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h": return e * o;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m": return e * i;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s": return e * r;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms": return e;
                default: return;
            } }(n); if ("number" === e && !1 === isNaN(n))
            return t.long ? function (n) { var t = Math.abs(n); if (t >= u)
                return l(n, t, u, "day"); if (t >= o)
                return l(n, t, o, "hour"); if (t >= i)
                return l(n, t, i, "minute"); if (t >= r)
                return l(n, t, r, "second"); return n + " ms"; }(n) : function (n) { var t = Math.abs(n); if (t >= u)
                return Math.round(n / u) + "d"; if (t >= o)
                return Math.round(n / o) + "h"; if (t >= i)
                return Math.round(n / i) + "m"; if (t >= r)
                return Math.round(n / r) + "s"; return n + "ms"; }(n); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(n)); }; }, {}], 8: [function (n, t, e) { t.exports = function (n, t) { var e, r, i, o, u = 0; return function () { e = this, r = arguments; var n = new Date - u; return o || (n >= t ? a() : o = setTimeout(a, t - n)), i; }; function a() { o = 0, u = +new Date, i = n.apply(e, r), e = null, r = null; } }; }, {}], "p2p-graph": [function (n, t, e) { t.exports = f; var r = n("d3"), i = n("debug")("p2p-graph"), o = n("events"), u = n("inherits"), a = n("throttleit"), c = { links: { width: .7, maxWidth: 5, maxBytes: 2097152 } }, l = { color: "#C8C8C8" }, s = { method: function (n, t) { return n.me ? r.hsl(210, .7, .725) : n.seeder ? r.hsl(120, .7, .725) : r.hsl(55, .7, .725); }, hover: "#A9A9A9", dep: "#252929" }; function f(n) { var t = this; if (!(t instanceof f))
            return new f(n); o.call(t), "string" == typeof n && (n = document.querySelector(n)), t._root = n, t._model = { nodes: [], links: [], focused: null }, t._model.links.forEach(function (n) { var e = t._model.nodes[n.source], r = t._model.nodes[n.target]; e.children = e.children || [], e.children.push(n.target), r.parents = r.parents || [], r.parents.push(n.source); }), t._svg = r.select(t._root).append("svg"), t._resize(), t._force = r.layout.force().size([t._width, t._height]).nodes(t._model.nodes).links(t._model.links).on("tick", function () { t._link.attr("x1", function (n) { return n.source.x; }).attr("y1", function (n) { return n.source.y; }).attr("x2", function (n) { return n.target.x; }).attr("y2", function (n) { return n.target.y; }), t._node.attr("cx", function (n) { return n.x; }).attr("cy", function (n) { return n.y; }), t._node.attr("transform", function (n) { return "translate(" + n.x + "," + n.y + ")"; }); }), t._node = t._svg.selectAll(".node"), t._link = t._svg.selectAll(".link"), t._update(), t._resizeThrottled = a(function () { t._resize(); }, 500), window.addEventListener("resize", t._resizeThrottled); } u(f, o), f.prototype.list = function () { return i("list"), this._model.nodes; }, f.prototype.add = function (n) { if (i("add %s %o", n.id, n), this._getNode(n.id))
            throw new Error("add: cannot add duplicate node"); this._model.nodes.push(n), this._update(); }, f.prototype.remove = function (n) { i("remove %s", n); var t = this._getNodeIndex(n); if (-1 === t)
            throw new Error("remove: node does not exist"); this._model.focused && this._model.focused.id === n && (this._model.focused = null, this.emit("select", !1)), this._model.nodes.splice(t, 1), this._update(); }, f.prototype.connect = function (n, t) { i("connect %s %s", n, t); var e = this._getNode(n); if (!e)
            throw new Error("connect: invalid source id"); var r = this._getNode(t); if (!r)
            throw new Error("connect: invalid target id"); if (this.getLink(e.index, r.index))
            throw new Error("connect: cannot make duplicate connection"); this._model.links.push({ source: e.index, target: r.index }), this._update(); }, f.prototype.disconnect = function (n, t) { i("disconnect %s %s", n, t); var e = this._getNode(n); if (!e)
            throw new Error("disconnect: invalid source id"); var r = this._getNode(t); if (!r)
            throw new Error("disconnect: invalid target id"); var o = this.getLinkIndex(e.index, r.index); if (-1 === o)
            throw new Error("disconnect: connection does not exist"); this._model.links.splice(o, 1), this._update(); }, f.prototype.hasPeer = function () { var n = this, t = Array.prototype.slice.call(arguments, 0); return i("Checking for peers:", t), t.every(function (t) { return n._getNode(t); }); }, f.prototype.hasLink = function (n, t) { var e = this._getNode(n); if (!e)
            throw new Error("hasLink: invalid source id"); var r = this._getNode(t); if (!r)
            throw new Error("hasLink: invalid target id"); return !!this.getLink(e.index, r.index); }, f.prototype.areConnected = function (n, t) { var e = this._getNode(n); if (!e)
            throw new Error("areConnected: invalid source id"); var r = this._getNode(t); if (!r)
            throw new Error("areConnected: invalid target id"); return this.getLink(e.index, r.index) || this.getLink(r.index, e.index); }, f.prototype.unchoke = function (n, t) { i("unchoke %s %s", n, t); }, f.prototype.choke = function (n, t) { i("choke %s %s", n, t); }, f.prototype.seed = function (n, t) { if (i(n, "isSeeding:", t), "boolean" != typeof t)
            throw new Error("seed: 2nd param must be a boolean"); var e = this._getNodeIndex(n); if (-1 === e)
            throw new Error("seed: node does not exist"); this._model.nodes[e].seeder = t, this._update(); }, f.prototype.rate = function (n, t, e) { if (i("rate update:", n + "<->" + t, "at", e), "number" != typeof e || e < 0)
            throw new Error("rate: 3th param must be a positive number"); var r = this._getNode(n); if (!r)
            throw new Error("rate: invalid source id"); var o = this._getNode(t); if (!o)
            throw new Error("rate: invalid target id"); var u, a = this.getLinkIndex(r.index, o.index); if (-1 === a)
            throw new Error("rate: connection does not exist"); this._model.links[a].rate = (u = e, Math.min(u, c.links.maxBytes) * c.links.maxWidth / c.links.maxBytes), i("rate:", this._model.links[a].rate), this._update(); }, f.prototype.getLink = function (n, t) { for (var e = 0, r = this._model.links.length; e < r; e += 1) {
            var i = this._model.links[e];
            if (i.source === this._model.nodes[n] && i.target === this._model.nodes[t])
                return i;
        } return null; }, f.prototype.destroy = function () { i("destroy"), this._root.remove(), window.removeEventListener("resize", this._resizeThrottled), this._root = null, this._resizeThrottled = null; }, f.prototype._update = function () { var n = this; n._link = n._link.data(n._model.links), n._node = n._node.data(n._model.nodes, function (n) { return n.id; }), n._link.enter().insert("line", ".node").attr("class", "link").style("stroke", l.color).style("opacity", .5), n._link.exit().remove(), n._link.style("stroke-width", function (n) { return n.rate ? n.rate < c.links.width ? c.links.width : n.rate : c.links.width; }); var t = n._node.enter().append("g").attr("class", "node"); t.call(n._force.drag), t.append("circle").on("mouseover", function (t) { r.select(this).style("fill", s.hover), r.selectAll(n._childNodes(t)).style("fill", s.hover).style("stroke", s.method).style("stroke-width", 2), r.selectAll(n._parentNodes(t)).style("fill", s.dep).style("stroke", s.method).style("stroke-width", 2); }).on("mouseout", function (t) { r.select(this).style("fill", s.method), r.selectAll(n._childNodes(t)).style("fill", s.method).style("stroke", null), r.selectAll(n._parentNodes(t)).style("fill", s.method).style("stroke", null); }).on("click", function (t) { if (n._model.focused === t)
            return n._force.charge(-200 * n._scale()).linkDistance(100 * n._scale()).linkStrength(1).start(), n._node.style("opacity", 1), n._link.style("opacity", .3), n._model.focused = null, void n.emit("select", !1); n._model.focused = t, n.emit("select", t.id), n._node.style("opacity", function (e) { return e.active = n._connected(t, e), e.active ? 1 : .2; }), n._force.charge(function (t) { return (t.active ? -100 : -5) * n._scale(); }).linkDistance(function (t) { return (t.source.active && t.target.active ? 100 : 60) * n._scale(); }).linkStrength(function (e) { return (e.source === t || e.target === t ? 1 : 0) * n._scale(); }).start(), n._link.style("opacity", function (n, t) { return n.source.active && n.target.active ? 1 : .02; }); }), n._node.select("circle").attr("r", function (t) { return n._scale() * (t.me ? 15 : 10); }).style("fill", s.method), t.append("text").attr("class", "text").text(function (n) { return n.name; }), n._node.select("text").attr("font-size", function (t) { return t.me ? 16 * n._scale() : 12 * n._scale(); }).attr("dx", 0).attr("dy", function (t) { return t.me ? -22 * n._scale() : -15 * n._scale(); }), n._node.exit().remove(), n._force.linkDistance(100 * n._scale()).charge(-200 * n._scale()).start(); }, f.prototype._childNodes = function (n) { var t = this; return n.children ? n.children.map(function (n) { return t._node[0][n]; }).filter(function (n) { return n; }) : []; }, f.prototype._parentNodes = function (n) { var t = this; return n.parents ? n.parents.map(function (n) { return t._node[0][n]; }).filter(function (n) { return n; }) : []; }, f.prototype._connected = function (n, t) { return t.id === n.id || n.children && -1 !== n.children.indexOf(t.id) || t.children && -1 !== t.children.indexOf(n.id) || t.parents && -1 !== t.parents.indexOf(n.id) || n.parents && -1 !== n.parents.indexOf(t.id); }, f.prototype._getNode = function (n) { for (var t = 0, e = this._model.nodes.length; t < e; t += 1) {
            var r = this._model.nodes[t];
            if (r.id === n)
                return r;
        } return null; }, f.prototype._scale = function () { var n = this._model.nodes.length; return n < 10 ? 1 : Math.max(.2, 1 - (n - 10) / 100); }, f.prototype._resize = function (n) { this._width = this._root.offsetWidth, this._height = window.innerWidth >= 900 ? 400 : 250, this._svg.attr("width", this._width).attr("height", this._height), this._force && this._force.size([this._width, this._height]).resume(); }, f.prototype._getNodeIndex = function (n) { for (var t = 0, e = this._model.nodes.length; t < e; t += 1) {
            if (this._model.nodes[t].id === n)
                return t;
        } return -1; }, f.prototype.getLinkIndex = function (n, t) { for (var e = 0, r = this._model.links.length; e < r; e += 1) {
            var i = this._model.links[e];
            if (i.source === this._model.nodes[n] && i.target === this._model.nodes[t])
                return e;
        } return -1; }; }, { d3: 3, debug: 4, events: 1, inherits: 6, throttleit: 8 }] }, {}, []);
