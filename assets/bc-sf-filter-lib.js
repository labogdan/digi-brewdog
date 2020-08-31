function BCSfFilterCallback(a) {
    bcsffilter.afterGetFilterData(a, a.event_type)
}

function onInteractWithFilterOptionValue(a, b, c, d, e, f) {
    var f = "undefined" != typeof f && "true" === f;
    if (f === !1 && "sub_category" != d) {
        a.preventDefault(), bcsffilter.internalClick = !0;
        var g = jQ(b).data("id"),
            h = decodeURIComponent(jQ(b).data("value"));
        "collection" == c && (bcsffilter.queryParams.collection_scope = bcsffilter.collectionId = jQ(b).data("collection-scope"));
        var i = "list" != d && "sub_category" != d || "single" != e ? bcsffilter.buildFilterOptionLink(g, h, c, d, e) : jQ(b).attr("href");
        bcsffilter.onChangeData(i, c, h, g)
    }
}

function onInteractWithToolbar(a, b, c, d) {
    a.preventDefault(), bcsffilter.internalClick = !0;
    var e = bcsffilter.buildToolbarLink(b, c, d);
    bcsffilter.onChangeData(e, b)
}

function clearFilterOption(a, b, c) {
    if (a.preventDefault(), bcsffilter.internalClick = !0, bcsffilter.queryParams.hasOwnProperty(c)) {
        var d = window.location.href.split("?")[0] + "?_=" + bcsffilter.prefix;
        if (window.location.search.length)
            for (var e, f = 0, g = window.location.search.substr(1).split("&"); f < g.length; f++)
                if (e = g[f].split("="), e.length > 1) {
                    var h = e[0],
                        i = e[1];
                    h != c && "_" != h && (d += "&" + h + "=" + i)
                } bcsffilter.onChangeData(d)
    }
}

function encodeURIParamValue(a) {
    return encodeURIComponent(a).replace(/&/g, "%26").replace(/'/g, "%27")
}

function convertObjectToArray(a) {
    return Object.keys(a).map(function(b) {
        return a[b]
    })
}

function sortArrayObject(a, b) {
    "undefined" != typeof b && a.sort(function(a, c) {
        var d = a[b],
            e = c[b];
        return "string" == typeof d && (d = d.toLowerCase()), "string" == typeof e && (e = e.toLowerCase()), d < e ? -1 : d > e ? 1 : 0
    })
}

function getParam(a, b) {
    b || (b = window.location.href), a = a.replace(/[\[\]]/g, "\\$&");
    var c = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)"),
        d = c.exec(b);
    return d ? d[2] ? decodeURIComponent(d[2].replace(/\+/g, " ")) : "" : null
}

function mergeObject(a, b) {
    for (var c in b) try {
        a[c] = b[c].constructor == Object ? mergeObject(a[c], b[c]) : b[c]
    } catch (d) {
        a[c] = b[c]
    }
    return a
}

function capitalize(a) {
    return a.charAt(0).toUpperCase() + a.slice(1)
}

function BCSfSearchCallback(a) {
    return suggestionCallback(a), a
}! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length,
            c = ea.type(a);
        return "function" !== c && !ea.isWindow(a) && (!(1 !== a.nodeType || !b) || "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a, b, c) {
        if (ea.isFunction(b)) return ea.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return ea.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ma.test(b)) return ea.filter(b, a, c);
            b = ea.filter(b, a)
        }
        return ea.grep(a, function(a) {
            return ea.inArray(a, b) >= 0 !== c
        })
    }

    function e(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function f(a) {
        var b = ua[a] = {};
        return ea.each(a.match(ta) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
    }

    function h() {
        (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready())
    }

    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(za, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c)
                } catch (a) {}
                ea.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function j(a) {
        var b;
        for (b in a)
            if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function k(a, b, c, d) {
        if (ea.acceptData(a)) {
            var e, f, g = ea.expando,
                h = a.nodeType,
                i = h ? ea.cache : a,
                j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g), i[j] || (i[j] = h ? {} : {
                toJSON: ea.noop
            }), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, e
        }
    }

    function l(a, b, c) {
        if (ea.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? ea.cache : a,
                h = f ? a[ea.expando] : ea.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !j(d) : !ea.isEmptyObject(d)) return
                }(c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    function m() {
        return !0
    }

    function n() {
        return !1
    }

    function o() {
        try {
            return oa.activeElement
        } catch (a) {}
    }

    function p(a) {
        var b = Ka.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function q(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
        return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
    }

    function r(a) {
        Ea.test(a.type) && (a.defaultChecked = a.checked)
    }

    function s(a, b) {
        return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function t(a) {
        return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a
    }

    function u(a) {
        var b = Va.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function v(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
    }

    function w(a, b) {
        if (1 === b.nodeType && ea.hasData(a)) {
            var c, d, e, f = ea._data(a),
                g = ea._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ea.extend({}, g.data))
        }
    }

    function x(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
                e = ea._data(b);
                for (d in e.events) ea.removeEvent(b, d, e.handle);
                b.removeAttribute(ea.expando)
            }
            "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function y(b, c) {
        var d, e = ea(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
        return e.detach(), f
    }

    function z(a) {
        var b = oa,
            c = _a[a];
        return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $a.detach()), _a[a] = c), c
    }

    function A(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function B(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;)
            if (b = mb[e] + c, b in a) return b;
        return d
    }

    function C(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function D(a, b, c) {
        var d = ib.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
        return g
    }

    function F(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = ab(a),
            g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = bb(a, b, f), (0 > e || null == e) && (e = a.style[b]), db.test(e)) return e;
            d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function G(a, b, c, d, e) {
        return new G.prototype.init(a, b, c, d, e)
    }

    function H() {
        return setTimeout(function() {
            nb = void 0
        }), nb = ea.now()
    }

    function I(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function J(a, b, c) {
        for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function K(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && Ca(a),
            p = ea._data(a, "fxshow");
        c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, ea.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], pb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || ea.style(a, d)
            } else j = void 0;
        if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ea(a).show() : l.done(function() {
                ea(a).hide()
            }), l.done(function() {
                var b;
                ea._removeData(a, "fxshow");
                for (b in m) ea.style(a, b, m[b])
            });
            for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function L(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function M(a, b, c) {
        var d, e, f = 0,
            g = sb.length,
            h = ea.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: ea.extend({}, b),
                opts: ea.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: nb || H(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (L(k, j.opts.specialEasing); g > f; f++)
            if (d = sb[f].call(j, a, k, j.opts)) return d;
        return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), ea.fx.timer(ea.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function N(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(ta) || [];
            if (ea.isFunction(c))
                for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function O(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, ea.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Rb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function P(a, b) {
        var c, d, e = ea.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && ea.extend(!0, a, c), a
    }

    function Q(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function R(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a.throws) b = g(b);
                else try {
                    b = g(b)
                } catch (a) {
                    return {
                        state: "parsererror",
                        error: g ? a : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function S(a, b, c, d) {
        var e;
        if (ea.isArray(b)) ea.each(b, function(b, e) {
            c || Ub.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== ea.type(b)) d(a, b);
        else
            for (e in b) S(a + "[" + e + "]", b[e], c, d)
    }

    function T() {
        try {
            return new a.XMLHttpRequest
        } catch (a) {}
    }

    function U() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (a) {}
    }

    function V(a) {
        return ea.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    var W = [],
        X = W.slice,
        Y = W.concat,
        Z = W.push,
        $ = W.indexOf,
        _ = {},
        aa = _.toString,
        ba = _.hasOwnProperty,
        ca = {},
        da = "1.11.1",
        ea = function(a, b) {
            return new ea.fn.init(a, b)
        },
        fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ga = /^-ms-/,
        ha = /-([\da-z])/gi,
        ia = function(a, b) {
            return b.toUpperCase()
        };
    ea.fn = ea.prototype = {
        jquery: da,
        constructor: ea,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
        },
        pushStack: function(a) {
            var b = ea.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return ea.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(ea.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Z,
        sort: W.sort,
        splice: W.splice
    }, ea.extend = ea.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, ea.extend({
        expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === ea.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === ea.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !ea.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
            try {
                if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (a) {
                return !1
            }
            if (ca.ownLast)
                for (b in a) return ba.call(a, b);
            for (b in a);
            return void 0 === b || ba.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && ea.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(ga, "ms-").replace(ha, ia)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(fa, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if ($) return $.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d];) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return Y.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a) ? (c = X.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(X.call(arguments)))
            }, d.guid = a.guid = a.guid || ea.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ca
    }), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        _["[object " + b + "]"] = b.toLowerCase()
    });
    var ja = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = sa.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)), c
                    } if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return _.apply(c, o.querySelectorAll(p)), c
                    } catch (a) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && typeof a.getElementsByTagName !== V && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? ba.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : _.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return ba.call(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                } return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                } j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Z.call(i));
                            r = q(r)
                        }
                        _.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = "undefined",
            W = 1 << 31,
            X = {}.hasOwnProperty,
            Y = [],
            Z = Y.pop,
            $ = Y.push,
            _ = Y.push,
            aa = Y.slice,
            ba = Y.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            da = "[\\x20\\t\\r\\n\\f]",
            ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            fa = ea.replace("w", "w#"),
            ga = "\\[" + da + "*(" + ea + ")(?:" + da + "*([*^$|!~]?=)" + da + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fa + "))|)" + da + "*\\]",
            ha = ":(" + ea + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ga + ")*)|.*)\\)|)",
            ia = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$", "g"),
            ja = new RegExp("^" + da + "*," + da + "*"),
            ka = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"),
            la = new RegExp("=" + da + "*([^\\]'\"]*?)" + da + "*\\]", "g"),
            ma = new RegExp(ha),
            na = new RegExp("^" + fa + "$"),
            oa = {
                ID: new RegExp("^#(" + ea + ")"),
                CLASS: new RegExp("^\\.(" + ea + ")"),
                TAG: new RegExp("^(" + ea.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ga),
                PSEUDO: new RegExp("^" + ha),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ca + ")$", "i"),
                needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)", "i")
            },
            pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ta = /[+~]/,
            ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)", "ig"),
            wa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            _.apply(Y = aa.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
        } catch (a) {
            _ = {
                apply: Y.length ? function(a, b) {
                    $.apply(a, aa.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, F = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O,
                d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !y(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                F()
            }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                F()
            })), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(c.getElementsByClassName) && e(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if (typeof b.getElementById !== V && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = ra.test(c.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + da + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + da + "*(?:value|" + ca + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
            }), e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + da + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ha)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var d, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0;
                if (f === h) return g(a, b);
                for (d = a; d = d.parentNode;) i.unshift(d);
                for (d = b; d = d.parentNode;) j.unshift(d);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, c) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (a) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && X.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + da + ")" + a + "(" + da + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = ba.call(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
        for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return _.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ca, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    ea.find = ja, ea.expr = ja.selectors, ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
    var ka = ea.expr.match.needsContext,
        la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ma = /^.[^:#\[\.,]*$/;
    ea.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, ea.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(ea(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (ea.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) ea.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
        }
    });
    var na, oa = a.document,
        pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        qa = ea.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b))
                        for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = oa.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return na.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = oa, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ea.makeArray(a, this))
        };
    qa.prototype = ea.fn, na = ea(oa);
    var ra = /^(?:parents|prev(?:Until|All))/,
        sa = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ea.extend({
        dir: function(a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), ea.fn.extend({
        has: function(a) {
            var b, c = ea(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (ea.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? ea.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), ea.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return ea.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return ea.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return ea.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return ea.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return ea.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return ea.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ea.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ea.sibling(a.firstChild)
        },
        contents: function(a) {
            return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
        }
    }, function(a, b) {
        ea.fn[a] = function(c, d) {
            var e = ea.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var ta = /\S+/g,
        ua = {};
    ea.Callbacks = function(a) {
        a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
                    if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    } b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var d = i.length;
                        ! function b(c) {
                            ea.each(c, function(c, d) {
                                var e = ea.type(d);
                                "function" === e ? a.unique && l.has(d) || i.push(d) : d && d.length && "string" !== e && b(d)
                            })
                        }(arguments), b ? e = i.length : c && (h = d, k(c))
                    }
                    return this
                },
                remove: function() {
                    return i && ea.each(arguments, function(a, c) {
                        for (var d;
                            (d = ea.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
                    }), this
                },
                has: function(a) {
                    return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], e = 0, this
                },
                disable: function() {
                    return i = j = c = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, c || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, c) {
                    return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return l
    }, ea.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", ea.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ea.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ea.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return ea.Deferred(function(c) {
                            ea.each(b, function(b, f) {
                                var g = ea.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? ea.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, ea.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = X.call(arguments),
                g = f.length,
                h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : ea.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var va;
    ea.fn.ready = function(a) {
        return ea.ready.promise().done(a), this
    }, ea.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? ea.readyWait++ : ea.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                if (!oa.body) return setTimeout(ea.ready);
                ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")))
            }
        }
    }), ea.ready.promise = function(b) {
        if (!va)
            if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready);
            else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
        else {
            oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
            var c = !1;
            try {
                c = null == a.frameElement && oa.documentElement
            } catch (a) {}
            c && c.doScroll && ! function a() {
                if (!ea.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return setTimeout(a, 50)
                    }
                    g(), ea.ready()
                }
            }()
        }
        return va.promise(b)
    };
    var wa, xa = "undefined";
    for (wa in ea(ca)) break;
    ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function() {
            var a, b, c, d;
            c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = oa.createElement("div");
            if (null == ca.deleteExpando) {
                ca.deleteExpando = !0;
                try {
                    delete a.test
                } catch (a) {
                    ca.deleteExpando = !1
                }
            }
            a = null
        }(), ea.acceptData = function(a) {
            var b = ea.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return (1 === c || 9 === c) && (!b || b !== !0 && a.getAttribute("classid") === b)
        };
    var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        za = /([A-Z])/g;
    ea.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !!a && !j(a)
        },
        data: function(a, b, c) {
            return k(a, b, c)
        },
        removeData: function(a, b) {
            return l(a, b)
        },
        _data: function(a, b, c) {
            return k(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return l(a, b, !0)
        }
    }), ea.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), i(f, d, e[d])));
                    ea._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                ea.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                ea.data(this, a, b)
            }) : f ? i(f, a, ea.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                ea.removeData(this, a)
            })
        }
    }), ea.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = ea.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = ea._queueHooks(a, b),
                g = function() {
                    ea.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ea._data(a, c) || ea._data(a, c, {
                empty: ea.Callbacks("once memory").add(function() {
                    ea._removeData(a, b + "queue"), ea._removeData(a, c)
                })
            })
        }
    }), ea.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = ea.queue(this, a, b);
                ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                ea.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = ea.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ea._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ba = ["Top", "Right", "Bottom", "Left"],
        Ca = function(a, b) {
            return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
        },
        Da = ea.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === ea.type(c)) {
                e = !0;
                for (h in c) ea.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(ea(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Ea = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = oa.createElement("input"),
            b = oa.createElement("div"),
            c = oa.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, ca.htmlSerialize = !!b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                ca.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == ca.deleteExpando) {
            ca.deleteExpando = !0;
            try {
                delete b.test
            } catch (a) {
                ca.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = oa.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Fa = /^(?:input|select|textarea)$/i,
        Ga = /^key/,
        Ha = /^(?:mouse|pointer|contextmenu)|click/,
        Ia = /^(?:focusinfocus|focusoutblur)$/,
        Ja = /^([^.]*)(?:\.(.+)|)$/;
    ea.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
            if (q) {
                for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
                        return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(ta) || [""], h = b.length; h--;) f = Ja.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && ea.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ea.event.global[n] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ta) || [""], j = b.length; j--;)
                    if (h = Ja.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), delete k[n])
                    } else
                        for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
                ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || oa],
                n = ba.call(b, "type") ? b.type : b,
                o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ea.makeArray(c, [b]), j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                if (!e && !j.noBubble && !ea.isWindow(d)) {
                    for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                    k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
                }
                for (l = 0;
                    (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                    k = d[g], k && (d[g] = null), ea.event.triggered = n;
                    try {
                        d[n]()
                    } catch (a) {}
                    ea.event.triggered = void 0, k && (d[g] = k)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = ea.event.fix(a);
            var b, c, d, e, f, g = [],
                h = X.call(arguments),
                i = (ea._data(this, "events") || {})[a.type] || [],
                j = ea.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = ea.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, f = 0;
                        (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[ea.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== o() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === o() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return ea.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = ea.extend(new ea.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, ea.removeEvent = oa.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c))
    }, ea.Event = function(a, b) {
        return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void(this[ea.expando] = !0)) : new ea.Event(a, b)
    }, ea.Event.prototype = {
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ea.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        ea.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), ca.submitBubbles || (ea.event.special.submit = {
        setup: function() {
            return !ea.nodeName(this, "form") && void ea.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), ea._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return !ea.nodeName(this, "form") && void ea.event.remove(this, "._submit")
        }
    }), ca.changeBubbles || (ea.event.special.change = {
        setup: function() {
            return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), ea.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0)
            })), !1) : void ea.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
                }), ea._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ea.event.remove(this, "._change"), !Fa.test(this.nodeName)
        }
    }), ca.focusinBubbles || ea.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            ea.event.simulate(b, a.target, ea.event.fix(a), !0)
        };
        ea.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = ea._data(d, b);
                e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = ea._data(d, b) - 1;
                e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b))
            }
        }
    }), ea.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return ea().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function() {
                ea.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function() {
                ea.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                ea.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? ea.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        La = / jQuery\d+="(?:null|\d+)"/g,
        Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"),
        Na = /^\s+/,
        Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Pa = /<([\w:]+)/,
        Qa = /<tbody/i,
        Ra = /<|&#?\w+;/,
        Sa = /<(?:script|style|link)/i,
        Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ua = /^$|\/(?:java|ecma)script/i,
        Va = /^true\/(.*)/,
        Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Xa = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ya = p(oa),
        Za = Ya.appendChild(oa.createElement("div"));
    Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, Xa.th = Xa.td, ea.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
            if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
                for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
            if (b)
                if (c)
                    for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
                else w(a, f);
            return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                if (f = a[o], f || 0 === f)
                    if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f);
                    else if (Ra.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody)
                    for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = m.lastChild
            } else n.push(b.createTextNode(f));
            for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++];)
                if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
                    for (e = 0; f = h[e++];) Ua.test(f.type || "") && c.push(f);
            return h = null, m
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
                if ((b || ea.acceptData(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, W.push(e))
                }
        }
    }), ea.fn.extend({
        text: function(a) {
            return Da(this, function(a) {
                return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && ea.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return ea.clone(this, a, b)
            })
        },
        html: function(a) {
            return Da(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                if (!("string" != typeof a || Sa.test(a) || !ca.htmlSerialize && Ma.test(a) || !ca.leadingWhitespace && Na.test(a) || Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Oa, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = Y.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                n = ea.isFunction(m);
            if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                n && (a[0] = m.call(this, c, d.html())),
                    d.domManip(a, b)
            });
            if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
                if (e)
                    for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++) d = f[i], Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                h = c = null
            }
            return this
        }
    }), ea.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        ea.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ea(f[d])[b](c), Z.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var $a, _a = {};
    ! function() {
        var a;
        ca.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var ab, bb, cb = /^margin/,
        db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"),
        eb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (ab = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, bb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : oa.documentElement.currentStyle && (ab = function(a) {
        return a.currentStyle
    }, bb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    }), ! function() {
        function b() {
            var b, c, d, e;
            c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || {
                width: "4px"
            }).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
        }
        var c, d, e, f, g, h, i;
        c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("a")[0], (d = e && e.style) && (d.cssText = "float:left;opacity:.5", ca.opacity = "0.5" === d.opacity, ca.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, ea.extend(ca, {
            reliableHiddenOffsets: function() {
                return null == h && b(), h
            },
            boxSizingReliable: function() {
                return null == g && b(), g
            },
            pixelPosition: function() {
                return null == f && b(), f
            },
            reliableMarginRight: function() {
                return null == i && b(), i
            }
        }))
    }(), ea.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var fb = /alpha\([^)]*\)/i,
        gb = /opacity\s*=\s*([^)]*)/,
        hb = /^(none|table(?!-c[ea]).+)/,
        ib = new RegExp("^(" + Aa + ")(.*)$", "i"),
        jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
        kb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        lb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        mb = ["Webkit", "O", "Moz", "ms"];
    ea.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: ca.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = ea.camelCase(b),
                    i = a.style;
                if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (a) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = ea.camelCase(b);
            return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
        }
    }), ea.each(["height", "width"], function(a, b) {
        ea.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function() {
                    return F(a, b, d)
                }) : F(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && ab(a);
                return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), ca.opacity || (ea.cssHooks.opacity = {
        get: function(a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
        }
    }), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function(a, b) {
        return b ? ea.swap(a, {
            display: "inline-block"
        }, bb, [a, "marginRight"]) : void 0
    }), ea.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        ea.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, cb.test(a) || (ea.cssHooks[a + b].set = D)
    }), ea.fn.extend({
        css: function(a, b) {
            return Da(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (ea.isArray(b)) {
                    for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ca(this) ? ea(this).show() : ea(this).hide()
            })
        }
    }), ea.Tween = G, G.prototype = {
        constructor: G,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = G.propHooks[this.prop];
            return a && a.get ? a.get(this) : G.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = G.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
        }
    }, G.prototype.init.prototype = G.prototype, G.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, ea.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, ea.fx = G.prototype.init, ea.fx.step = {};
    var nb, ob, pb = /^(?:toggle|show|hide)$/,
        qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
        rb = /queueHooks$/,
        sb = [K],
        tb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = qb.exec(b),
                    f = e && e[3] || (ea.cssNumber[a] ? "" : "px"),
                    g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, ea.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    ea.Animation = ea.extend(M, {
            tweener: function(a, b) {
                ea.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? sb.unshift(a) : sb.push(a)
            }
        }), ea.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? ea.extend({}, a) : {
                complete: c || !c && b || ea.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !ea.isFunction(b) && b
            };
            return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue)
            }, d
        }, ea.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(Ca).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = ea.isEmptyObject(a),
                    f = ea.speed(b, c, d),
                    g = function() {
                        var b = M(this, ea.extend({}, a), f);
                        (e || ea._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = ea.timers,
                        g = ea._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && ea.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = ea._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = ea.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), ea.each(["toggle", "show", "hide"], function(a, b) {
            var c = ea.fn[b];
            ea.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
            }
        }), ea.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            ea.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), ea.timers = [], ea.fx.tick = function() {
            var a, b = ea.timers,
                c = 0;
            for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || ea.fx.stop(), nb = void 0
        }, ea.fx.timer = function(a) {
            ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop()
        }, ea.fx.interval = 13, ea.fx.start = function() {
            ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
        }, ea.fx.stop = function() {
            clearInterval(ob), ob = null
        }, ea.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ea.fn.delay = function(a, b) {
            return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), ca.checkOn = !!a.value, ca.optSelected = e.selected, ca.enctype = !!oa.createElement("form").enctype, c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), ca.radioValue = "t" === a.value
        }();
    var ub = /\r/g;
    ea.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = ea.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0
        }
    }), ea.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = ea.find.attr(a, "value");
                    return null != b ? b : ea.trim(ea.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
                            if (b = ea(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;)
                        if (d = e[g], ea.inArray(ea.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (a) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), ea.each(["radio", "checkbox"], function() {
        ea.valHooks[this] = {
            set: function(a, b) {
                return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0
            }
        }, ca.checkOn || (ea.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var vb, wb, xb = ea.expr.attrHandle,
        yb = /^(?:checked|selected)$/i,
        zb = ca.getSetAttribute,
        Ab = ca.input;
    ea.fn.extend({
        attr: function(a, b) {
            return Da(this, ea.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                ea.removeAttr(this, a)
            })
        }
    }), ea.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ea.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(ta);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), wb = {
        set: function(a, b, c) {
            return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, ea.each(ea.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = xb[b] || ea.find.attr;
        xb[b] = Ab && zb || !yb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xb[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), Ab && zb || (ea.attrHooks.value = {
        set: function(a, b, c) {
            return ea.nodeName(a, "input") ? void(a.defaultValue = b) : vb && vb.set(a, b, c)
        }
    }), zb || (vb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, xb.id = xb.name = xb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, ea.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: vb.set
    }, ea.attrHooks.contenteditable = {
        set: function(a, b, c) {
            vb.set(a, "" !== b && b, c)
        }
    }, ea.each(["width", "height"], function(a, b) {
        ea.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), ca.style || (ea.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Bb = /^(?:input|select|textarea|button|object)$/i,
        Cb = /^(?:a|area)$/i;
    ea.fn.extend({
        prop: function(a, b) {
            return Da(this, ea.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = ea.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (a) {}
            })
        }
    }), ea.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = ea.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), ca.hrefNormalized || ea.each(["href", "src"], function(a, b) {
        ea.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), ca.optSelected || (ea.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ea.propFix[this.toLowerCase()] = this
    }), ca.enctype || (ea.propFix.enctype = "encoding");
    var Db = /[\t\r\n\f]/g;
    ea.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (ea.isFunction(a)) return this.each(function(b) {
                ea(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(ta) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = ea.trim(d), c.className !== g && (c.className = g)
                    } return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (ea.isFunction(a)) return this.each(function(b) {
                ea(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(ta) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
                    } return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function(c) {
                ea(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        ea.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ea.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Eb = ea.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ea.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = ea.trim(b + "");
        return e && !ea.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
    }, ea.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (a) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c
    };
    var Hb, Ib, Jb = /#.*$/,
        Kb = /([?&])_=[^&]*/,
        Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nb = /^(?:GET|HEAD)$/,
        Ob = /^\/\//,
        Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Qb = {},
        Rb = {},
        Sb = "*/".concat("*");
    try {
        Ib = location.href
    } catch (a) {
        Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href
    }
    Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ib,
            type: "GET",
            isLocal: Mb.test(Hb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ea.parseJSON,
                "text xml": ea.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
        },
        ajaxPrefilter: N(Qb),
        ajaxTransport: N(Rb),
        ajax: function(a, b) {
            function c(a, b, c, d) {
                var e, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
                o = ea.Deferred(),
                p = ea.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!k)
                                for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return j && j.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
            i = l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[e](l[e]);
            if (j = O(Rb, l, b, v)) {
                v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, j.send(r, c)
                } catch (a) {
                    if (!(2 > t)) throw a;
                    c(-1, a)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return ea.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return ea.get(a, void 0, b, "script")
        }
    }), ea.each(["get", "post"], function(a, b) {
        ea[b] = function(a, c, d, e) {
            return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        ea.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), ea._evalUrl = function(a) {
        return ea.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, ea.fn.extend({
        wrapAll: function(a) {
            if (ea.isFunction(a)) return this.each(function(b) {
                ea(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(ea.isFunction(a) ? function(b) {
                ea(this).wrapInner(a.call(this, b))
            } : function() {
                var b = ea(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = ea.isFunction(a);
            return this.each(function(c) {
                ea(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ea.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
    }, ea.expr.filters.visible = function(a) {
        return !ea.expr.filters.hidden(a)
    };
    var Tb = /%20/g,
        Ub = /\[\]$/,
        Vb = /\r?\n/g,
        Wb = /^(?:submit|button|image|reset|file)$/i,
        Xb = /^(?:input|select|textarea|keygen)/i;
    ea.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) S(c, a[c], b, e);
        return d.join("&").replace(Tb, "+")
    }, ea.fn.extend({
        serialize: function() {
            return ea.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = ea.prop(this, "elements");
                return a ? ea.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !ea(this).is(":disabled") && Xb.test(this.nodeName) && !Wb.test(a) && (this.checked || !Ea.test(a))
            }).map(function(a, b) {
                var c = ea(this).val();
                return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Vb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Vb, "\r\n")
                }
            }).get()
        }
    }), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
    } : T;
    var Yb = 0,
        Zb = {},
        $b = ea.ajaxSettings.xhr();
    a.ActiveXObject && ea(a).on("unload", function() {
        for (var a in Zb) Zb[a](void 0, !0)
    }), ca.cors = !!$b && "withCredentials" in $b, $b = ca.ajax = !!$b, $b && ea.ajaxTransport(function(a) {
        if (!a.crossDomain || ca.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Yb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Zb[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (a) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            } j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Zb[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    }), ea.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return ea.globalEval(a), a
            }
        }
    }), ea.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), ea.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = oa.head || ea("head")[0] || oa.documentElement;
            return {
                send: function(d, e) {
                    b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _b = [],
        ac = /(=)\?(?=&|$)|\?\?/;
    ea.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _b.pop() || ea.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), ea.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || ea.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), ea.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || oa;
        var d = la.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
    };
    var bc = ea.fn.load;
    ea.fn.load = function(a, b, c) {
        if ("string" != typeof a && bc) return bc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, ea.expr.filters.animated = function(a) {
        return ea.grep(ea.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cc = a.document.documentElement;
    ea.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = ea.css(a, "position"),
                l = ea(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e),
                "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, ea.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                ea.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            return f ? (b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ea.css(d, "marginTop", !0),
                    left: b.left - c.left - ea.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || cc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent;
                return a || cc
            })
        }
    }), ea.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        ea.fn[a] = function(d) {
            return Da(this, function(a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), ea.each(["top", "left"], function(a, b) {
        ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) {
            return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0
        })
    }), ea.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        ea.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            ea.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Da(this, function(b, c, d) {
                    var e;
                    return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), ea.fn.size = function() {
        return this.length
    }, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ea
    });
    var dc = a.jQuery,
        ec = a.$;
    return ea.noConflict = function(b) {
        return a.$ === ea && (a.$ = ec), b && a.jQuery === ea && (a.jQuery = dc), ea
    }, typeof b === xa && (a.jQuery = a.$ = ea), ea
}),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    a.ui = a.ui || {}, a.ui.version = "1.12.1";
    var b = 0,
        c = Array.prototype.slice;
    a.cleanData = function(b) {
            return function(c) {
                var d, e, f;
                for (f = 0; null != (e = c[f]); f++) try {
                    d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
                } catch (a) {}
                b(c)
            }
        }(a.cleanData), a.widget = function(b, c, d) {
            var e, f, g, h = {},
                i = b.split(".")[0];
            b = b.split(".")[1];
            var j = i + "-" + b;
            return d || (d = c, c = a.Widget), a.isArray(d) && (d = a.extend.apply(null, [{}].concat(d))), a.expr[":"][j.toLowerCase()] = function(b) {
                return !!a.data(b, j)
            }, a[i] = a[i] || {}, e = a[i][b], f = a[i][b] = function(a, b) {
                return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new f(a, b)
            }, a.extend(f, e, {
                version: d.version,
                _proto: a.extend({}, d),
                _childConstructors: []
            }), g = new c, g.options = a.widget.extend({}, g.options), a.each(d, function(b, d) {
                return a.isFunction(d) ? void(h[b] = function() {
                    function a() {
                        return c.prototype[b].apply(this, arguments)
                    }

                    function e(a) {
                        return c.prototype[b].apply(this, a)
                    }
                    return function() {
                        var b, c = this._super,
                            f = this._superApply;
                        return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                    }
                }()) : void(h[b] = d)
            }), f.prototype = a.widget.extend(g, {
                widgetEventPrefix: e ? g.widgetEventPrefix || b : b
            }, h, {
                constructor: f,
                namespace: i,
                widgetName: b,
                widgetFullName: j
            }), e ? (a.each(e._childConstructors, function(b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, f, c._proto)
            }), delete e._childConstructors) : c._childConstructors.push(f), a.widget.bridge(b, f), f
        }, a.widget.extend = function(b) {
            for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; h > g; g++)
                for (d in f[g]) e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (b[d] = a.isPlainObject(e) ? a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : e);
            return b
        }, a.widget.bridge = function(b, d) {
            var e = d.prototype.widgetFullName || b;
            a.fn[b] = function(f) {
                var g = "string" == typeof f,
                    h = c.call(arguments, 1),
                    i = this;
                return g ? this.length || "instance" !== f ? this.each(function() {
                    var c, d = a.data(this, e);
                    return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
                }) : i = void 0 : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function() {
                    var b = a.data(this, e);
                    b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
                })), i
            }
        }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(c, d) {
                d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), this.classesElementLookup = {}, d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function() {
                var b = this;
                this._destroy(), a.each(this.classesElementLookup, function(a, c) {
                    b._removeClass(c, a)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: a.noop,
            widget: function() {
                return this.element
            },
            option: function(b, c) {
                var d, e, f, g = b;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" == typeof b)
                    if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                        for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; d.length - 1 > f; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                        if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                        e[b] = c
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                        g[b] = c
                    } return this._setOptions(g), this
            },
            _setOptions: function(a) {
                var b;
                for (b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function(a, b) {
                return "classes" === a && this._setOptionClasses(b), this.options[a] = b, "disabled" === a && this._setOptionDisabled(b), this
            },
            _setOptionClasses: function(b) {
                var c, d, e;
                for (c in b) e = this.classesElementLookup[c], b[c] !== this.options.classes[c] && e && e.length && (d = a(e.get()), this._removeClass(e, c), d.addClass(this._classes({
                    element: d,
                    keys: c,
                    classes: b,
                    add: !0
                })))
            },
            _setOptionDisabled: function(a) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!a), a && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(b) {
                function c(c, f) {
                    var g, h;
                    for (h = 0; c.length > h; h++) g = e.classesElementLookup[c[h]] || a(), g = a(b.add ? a.unique(g.get().concat(b.element.get())) : g.not(b.element).get()), e.classesElementLookup[c[h]] = g, d.push(c[h]), f && b.classes[c[h]] && d.push(b.classes[c[h]])
                }
                var d = [],
                    e = this;
                return b = a.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, b), this._on(b.element, {
                    remove: "_untrackClassesElement"
                }), b.keys && c(b.keys.match(/\S+/g) || [], !0), b.extra && c(b.extra.match(/\S+/g) || []), d.join(" ")
            },
            _untrackClassesElement: function(b) {
                var c = this;
                a.each(c.classesElementLookup, function(d, e) {
                    -1 !== a.inArray(b.target, e) && (c.classesElementLookup[d] = a(e.not(b.target).get()))
                })
            },
            _removeClass: function(a, b, c) {
                return this._toggleClass(a, b, c, !1)
            },
            _addClass: function(a, b, c) {
                return this._toggleClass(a, b, c, !0)
            },
            _toggleClass: function(a, b, c, d) {
                d = "boolean" == typeof d ? d : c;
                var e = "string" == typeof a || null === a,
                    f = {
                        extra: e ? b : c,
                        keys: e ? a : b,
                        element: e ? this.element : a,
                        add: d
                    };
                return f.element.toggleClass(this._classes(f), d), this
            },
            _on: function(b, c, d) {
                var e, f = this;
                "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                    function h() {
                        return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                    }
                    "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                    var i = d.match(/^([\w:-]*)\s*(.*)$/),
                        j = i[1] + f.eventNamespace,
                        k = i[2];
                    k ? e.on(j, k, h) : c.on(j, h)
                })
            },
            _off: function(b, c) {
                c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.off(c).off(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
            },
            _delay: function(a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }
                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function(b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function(b) {
                        this._addClass(a(b.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(b) {
                        this._removeClass(a(b.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function(b) {
                        this._addClass(a(b.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(b) {
                        this._removeClass(a(b.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                    for (e in f) e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(b, c) {
            a.Widget.prototype["_" + b] = function(d, e, f) {
                "string" == typeof e && (e = {
                    effect: e
                });
                var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {
                    duration: e
                }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        }), a.widget,
        function() {
            function b(a, b, c) {
                return [parseFloat(a[0]) * (l.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (l.test(a[1]) ? c / 100 : 1)]
            }

            function c(b, c) {
                return parseInt(a.css(b, c), 10) || 0
            }

            function d(b) {
                var c = b[0];
                return 9 === c.nodeType ? {
                    width: b.width(),
                    height: b.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : a.isWindow(c) ? {
                    width: b.width(),
                    height: b.height(),
                    offset: {
                        top: b.scrollTop(),
                        left: b.scrollLeft()
                    }
                } : c.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: c.pageY,
                        left: c.pageX
                    }
                } : {
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    offset: b.offset()
                }
            }
            var e, f = Math.max,
                g = Math.abs,
                h = /left|center|right/,
                i = /top|center|bottom/,
                j = /[\+\-]\d+(\.[\d]+)?%?/,
                k = /^\w+/,
                l = /%$/,
                m = a.fn.position;
            a.position = {
                scrollbarWidth: function() {
                    if (void 0 !== e) return e;
                    var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        f = d.children()[0];
                    return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c
                },
                getScrollInfo: function(b) {
                    var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
                        d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
                        e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
                        f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
                    return {
                        width: f ? a.position.scrollbarWidth() : 0,
                        height: e ? a.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(b) {
                    var c = a(b || window),
                        d = a.isWindow(c[0]),
                        e = !!c[0] && 9 === c[0].nodeType,
                        f = !d && !e;
                    return {
                        element: c,
                        isWindow: d,
                        isDocument: e,
                        offset: f ? a(b).offset() : {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: c.scrollLeft(),
                        scrollTop: c.scrollTop(),
                        width: c.outerWidth(),
                        height: c.outerHeight()
                    }
                }
            }, a.fn.position = function(e) {
                if (!e || !e.of) return m.apply(this, arguments);
                e = a.extend({}, e);
                var l, n, o, p, q, r, s = a(e.of),
                    t = a.position.getWithinInfo(e.within),
                    u = a.position.getScrollInfo(t),
                    v = (e.collision || "flip").split(" "),
                    w = {};
                return r = d(s), s[0].preventDefault && (e.at = "left top"), n = r.width, o = r.height, p = r.offset, q = a.extend({}, p), a.each(["my", "at"], function() {
                    var a, b, c = (e[this] || "").split(" ");
                    1 === c.length && (c = h.test(c[0]) ? c.concat(["center"]) : i.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = h.test(c[0]) ? c[0] : "center", c[1] = i.test(c[1]) ? c[1] : "center", a = j.exec(c[0]), b = j.exec(c[1]), w[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [k.exec(c[0])[0], k.exec(c[1])[0]]
                }), 1 === v.length && (v[1] = v[0]), "right" === e.at[0] ? q.left += n : "center" === e.at[0] && (q.left += n / 2), "bottom" === e.at[1] ? q.top += o : "center" === e.at[1] && (q.top += o / 2), l = b(w.at, n, o), q.left += l[0], q.top += l[1], this.each(function() {
                    var d, h, i = a(this),
                        j = i.outerWidth(),
                        k = i.outerHeight(),
                        m = c(this, "marginLeft"),
                        r = c(this, "marginTop"),
                        x = j + m + c(this, "marginRight") + u.width,
                        y = k + r + c(this, "marginBottom") + u.height,
                        z = a.extend({}, q),
                        A = b(w.my, i.outerWidth(), i.outerHeight());
                    "right" === e.my[0] ? z.left -= j : "center" === e.my[0] && (z.left -= j / 2), "bottom" === e.my[1] ? z.top -= k : "center" === e.my[1] && (z.top -= k / 2), z.left += A[0], z.top += A[1], d = {
                        marginLeft: m,
                        marginTop: r
                    }, a.each(["left", "top"], function(b, c) {
                        a.ui.position[v[b]] && a.ui.position[v[b]][c](z, {
                            targetWidth: n,
                            targetHeight: o,
                            elemWidth: j,
                            elemHeight: k,
                            collisionPosition: d,
                            collisionWidth: x,
                            collisionHeight: y,
                            offset: [l[0] + A[0], l[1] + A[1]],
                            my: e.my,
                            at: e.at,
                            within: t,
                            elem: i
                        })
                    }), e.using && (h = function(a) {
                        var b = p.left - z.left,
                            c = b + n - j,
                            d = p.top - z.top,
                            h = d + o - k,
                            l = {
                                target: {
                                    element: s,
                                    left: p.left,
                                    top: p.top,
                                    width: n,
                                    height: o
                                },
                                element: {
                                    element: i,
                                    left: z.left,
                                    top: z.top,
                                    width: j,
                                    height: k
                                },
                                horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",
                                vertical: 0 > h ? "top" : d > 0 ? "bottom" : "middle"
                            };
                        j > n && n > g(b + c) && (l.horizontal = "center"), k > o && o > g(d + h) && (l.vertical = "middle"), l.important = f(g(b), g(c)) > f(g(d), g(h)) ? "horizontal" : "vertical", e.using.call(this, a, l)
                    }), i.offset(a.extend(z, {
                        using: h
                    }))
                })
            }, a.ui.position = {
                fit: {
                    left: function(a, b) {
                        var c, d = b.within,
                            e = d.isWindow ? d.scrollLeft : d.offset.left,
                            g = d.width,
                            h = a.left - b.collisionPosition.marginLeft,
                            i = e - h,
                            j = h + b.collisionWidth - g - e;
                        b.collisionWidth > g ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - g - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + g - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = f(a.left - h, a.left)
                    },
                    top: function(a, b) {
                        var c, d = b.within,
                            e = d.isWindow ? d.scrollTop : d.offset.top,
                            g = b.within.height,
                            h = a.top - b.collisionPosition.marginTop,
                            i = e - h,
                            j = h + b.collisionHeight - g - e;
                        b.collisionHeight > g ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - g - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + g - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = f(a.top - h, a.top)
                    }
                },
                flip: {
                    left: function(a, b) {
                        var c, d, e = b.within,
                            f = e.offset.left + e.scrollLeft,
                            h = e.width,
                            i = e.isWindow ? e.scrollLeft : e.offset.left,
                            j = a.left - b.collisionPosition.marginLeft,
                            k = j - i,
                            l = j + b.collisionWidth - h - i,
                            m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                            n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                            o = -2 * b.offset[0];
                        0 > k ? (c = a.left + m + n + o + b.collisionWidth - h - f, (0 > c || g(k) > c) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || l > g(d)) && (a.left += m + n + o))
                    },
                    top: function(a, b) {
                        var c, d, e = b.within,
                            f = e.offset.top + e.scrollTop,
                            h = e.height,
                            i = e.isWindow ? e.scrollTop : e.offset.top,
                            j = a.top - b.collisionPosition.marginTop,
                            k = j - i,
                            l = j + b.collisionHeight - h - i,
                            m = "top" === b.my[1],
                            n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                            o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                            p = -2 * b.offset[1];
                        0 > k ? (d = a.top + n + o + p + b.collisionHeight - h - f, (0 > d || g(k) > d) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, (c > 0 || l > g(c)) && (a.top += n + o + p))
                    }
                },
                flipfit: {
                    left: function() {
                        a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }(), a.ui.position, a.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, a.fn.extend({
            uniqueId: function() {
                var a = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++a)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
                })
            }
        }), a.ui.safeActiveElement = function(a) {
            var b;
            try {
                b = a.activeElement
            } catch (c) {
                b = a.body
            }
            return b || (b = a.body), b.nodeName || (b = a.body), b
        }, a.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function(a) {
                        a.preventDefault()
                    },
                    "click .ui-menu-item": function(b) {
                        var c = a(b.target),
                            d = a(a.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && d.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(b) {
                        if (!this.previousFilter) {
                            var c = a(b.target).closest(".ui-menu-item"),
                                d = a(b.currentTarget);
                            c[0] === d[0] && (this._removeClass(d.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(b, d))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(a, b) {
                        var c = this.active || this.element.find(this.options.items).eq(0);
                        b || this.focus(a, c)
                    },
                    blur: function(b) {
                        this._delay(function() {
                            var c = !a.contains(this.element[0], a.ui.safeActiveElement(this.document[0]));
                            c && this.collapseAll(b)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(a) {
                        this._closeOnDocumentClick(a) && this.collapseAll(a), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                var b = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                    c = b.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), c.children().each(function() {
                    var b = a(this);
                    b.data("ui-menu-submenu-caret") && b.remove()
                })
            },
            _keydown: function(b) {
                var c, d, e, f, g = !0;
                switch (b.keyCode) {
                    case a.ui.keyCode.PAGE_UP:
                        this.previousPage(b);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        this.nextPage(b);
                        break;
                    case a.ui.keyCode.HOME:
                        this._move("first", "first", b);
                        break;
                    case a.ui.keyCode.END:
                        this._move("last", "last", b);
                        break;
                    case a.ui.keyCode.UP:
                        this.previous(b);
                        break;
                    case a.ui.keyCode.DOWN:
                        this.next(b);
                        break;
                    case a.ui.keyCode.LEFT:
                        this.collapse(b);
                        break;
                    case a.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                        break;
                    case a.ui.keyCode.ENTER:
                    case a.ui.keyCode.SPACE:
                        this._activate(b);
                        break;
                    case a.ui.keyCode.ESCAPE:
                        this.collapse(b);
                        break;
                    default:
                        g = !1, d = this.previousFilter || "", f = !1, e = b.keyCode >= 96 && 105 >= b.keyCode ? "" + (b.keyCode - 96) : String.fromCharCode(b.keyCode), clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, c = this._filterMenuItems(e), c = f && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, c.length || (e = String.fromCharCode(b.keyCode), c = this._filterMenuItems(e)), c.length ? (this.focus(b, c), this.previousFilter = e, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                g && b.preventDefault()
            },
            _activate: function(a) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
            },
            refresh: function() {
                var b, c, d, e, f, g = this,
                    h = this.options.icons.submenu,
                    i = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), d = i.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var b = a(this),
                        c = b.prev(),
                        d = a("<span>").data("ui-menu-submenu-caret", !0);
                    g._addClass(d, "ui-menu-icon", "ui-icon " + h), c.attr("aria-haspopup", "true").prepend(d), b.attr("aria-labelledby", c.attr("id"))
                }), this._addClass(d, "ui-menu", "ui-widget ui-widget-content ui-front"), b = i.add(this.element), c = b.find(this.options.items), c.not(".ui-menu-item").each(function() {
                    var b = a(this);
                    g._isDivider(b) && g._addClass(b, "ui-menu-divider", "ui-widget-content")
                }), e = c.not(".ui-menu-item, .ui-menu-divider"), f = e.children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(e, "ui-menu-item")._addClass(f, "ui-menu-item-wrapper"), c.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                } [this.options.role]
            },
            _setOption: function(a, b) {
                if ("icons" === a) {
                    var c = this.element.find(".ui-menu-icon");
                    this._removeClass(c, null, this.options.icons.submenu)._addClass(c, null, b.submenu)
                }
                this._super(a, b)
            },
            _setOptionDisabled: function(a) {
                this._super(a), this.element.attr("aria-disabled", a + ""), this._toggleClass(null, "ui-state-disabled", !!a)
            },
            focus: function(a, b) {
                var c, d, e;
                this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.children(".ui-menu-item-wrapper"), this._addClass(d, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), e = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(e, null, "ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
                    item: b
                })
            },
            _scrollIntoView: function(b) {
                var c, d, e, f, g, h;
                this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
            },
            blur: function(a, b) {
                b || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", a, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function(a) {
                clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(a)
                }, this.delay))
            },
            _open: function(b) {
                var c = a.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
            },
            collapseAll: function(b, c) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                    d.length || (d = this.element), this._close(d), this.blur(b), this._removeClass(d.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = d
                }, this.delay)
            },
            _close: function(a) {
                a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function(b) {
                return !a(b.target).closest(".ui-menu").length
            },
            _isDivider: function(a) {
                return !/[^\-\u2014\u2013\s]/.test(a.text())
            },
            collapse: function(a) {
                var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                b && b.length && (this._close(), this.focus(a, b))
            },
            expand: function(a) {
                var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                b && b.length && (this._open(b.parent()), this._delay(function() {
                    this.focus(a, b)
                }))
            },
            next: function(a) {
                this._move("next", "first", a)
            },
            previous: function(a) {
                this._move("prev", "last", a)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(a, b, c) {
                var d;
                this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]()), this.focus(c, d)
            },
            nextPage: function(b) {
                var c, d, e;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return c = a(this), 0 > c.offset().top - d - e
                }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(b)
            },
            previousPage: function(b) {
                var c, d, e;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return c = a(this), c.offset().top - d + e > 0
                }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first()))) : void this.next(b)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(b) {
                this.active = this.active || a(b.target).closest(".ui-menu-item");
                var c = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
            },
            _filterMenuItems: function(b) {
                var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    d = RegExp("^" + c, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return d.test(a.trim(a(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        }), a.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var b, c, d, e = this.element[0].nodeName.toLowerCase(),
                    f = "textarea" === e,
                    g = "input" === e;
                this.isMultiLine = f || !g && this._isContentEditable(this.element), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(e) {
                        if (this.element.prop("readOnly")) return b = !0, d = !0, void(c = !0);
                        b = !1, d = !1, c = !1;
                        var f = a.ui.keyCode;
                        switch (e.keyCode) {
                            case f.PAGE_UP:
                                b = !0, this._move("previousPage", e);
                                break;
                            case f.PAGE_DOWN:
                                b = !0, this._move("nextPage", e);
                                break;
                            case f.UP:
                                b = !0, this._keyEvent("previous", e);
                                break;
                            case f.DOWN:
                                b = !0, this._keyEvent("next", e);
                                break;
                            case f.ENTER:
                                this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                                break;
                            case f.TAB:
                                this.menu.active && this.menu.select(e);
                                break;
                            case f.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                                break;
                            default:
                                c = !0, this._searchTimeout(e)
                        }
                    },
                    keypress: function(d) {
                        if (b) return b = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault());
                        if (!c) {
                            var e = a.ui.keyCode;
                            switch (d.keyCode) {
                                case e.PAGE_UP:
                                    this._move("previousPage", d);
                                    break;
                                case e.PAGE_DOWN:
                                    this._move("nextPage", d);
                                    break;
                                case e.UP:
                                    this._keyEvent("previous", d);
                                    break;
                                case e.DOWN:
                                    this._keyEvent("next", d)
                            }
                        }
                    },
                    input: function(a) {
                        return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(a) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a))
                    }
                }), this._initSource(), this.menu = a("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function(b) {
                        b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, this.element[0] !== a.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function(b, c) {
                        var d, e;
                        return this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                            a(b.target).trigger(b.originalEvent)
                        })) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", b, {
                            item: e
                        }) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value), d = c.item.attr("aria-label") || e.value, void(d && a.trim(d).length && (this.liveRegion.children().hide(), a("<div>").text(d).appendTo(this.liveRegion))))
                    },
                    menuselect: function(b, c) {
                        var d = c.item.data("ui-autocomplete-item"),
                            e = this.previous;
                        this.element[0] !== a.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = e, this._delay(function() {
                            this.previous = e, this.selectedItem = d
                        })), !1 !== this._trigger("select", b, {
                            item: d
                        }) && this._value(d.value), this.term = this._value(), this.close(b), this.selectedItem = d
                    }
                }), this.liveRegion = a("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(a, b) {
                this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function(b) {
                var c = this.menu.element[0];
                return b.target === this.element[0] || b.target === c || a.contains(c, b.target)
            },
            _closeOnClickOutside: function(a) {
                this._isEventTargetInWidget(a) || this.close()
            },
            _appendTo: function() {
                var b = this.options.appendTo;
                return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front, dialog")), b.length || (b = this.document[0].body), b
            },
            _initSource: function() {
                var b, c, d = this;
                a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                    d(a.ui.autocomplete.filter(b, c.term))
                }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                    d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                        url: c,
                        data: b,
                        dataType: "json",
                        success: function(a) {
                            e(a)
                        },
                        error: function() {
                            e([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(a) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var b = this.term === this._value(),
                        c = this.menu.element.is(":visible"),
                        d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                    (!b || b && !c && !d) && (this.selectedItem = null, this.search(null, a))
                }, this.options.delay)
            },
            search: function(a, b) {
                return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0
            },
            _search: function(a) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: a
                }, this._response())
            },
            _response: function() {
                var b = ++this.requestIndex;
                return a.proxy(function(a) {
                    b === this.requestIndex && this.__response(a), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(a) {
                a && (a = this._normalize(a)), this._trigger("response", null, {
                    content: a
                }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
            },
            close: function(a) {
                this.cancelSearch = !0, this._close(a)
            },
            _close: function(a) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
            },
            _change: function(a) {
                this.previous !== this._value() && this._trigger("change", a, {
                    item: this.selectedItem
                })
            },
            _normalize: function(b) {
                return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                    return "string" == typeof b ? {
                        label: b,
                        value: b
                    } : a.extend({}, b, {
                        label: b.label || b.value,
                        value: b.value || b.label
                    })
                })
            },
            _suggest: function(b) {
                var c = this.menu.element.empty();
                this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function() {
                var a = this.menu.element;
                a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(b, c) {
                var d = this;
                a.each(c, function(a, c) {
                    d._renderItemData(b, c)
                })
            },
            _renderItemData: function(a, b) {
                return this._renderItem(a, b).data("ui-autocomplete-item", b)
            },
            _renderItem: function(b, c) {
                return a("<li>").append(a("<div>").text(c.label)).appendTo(b)
            },
            _move: function(a, b) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(a, b) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault())
            },
            _isContentEditable: function(a) {
                if (!a.length) return !1;
                var b = a.prop("contentEditable");
                return "inherit" === b ? this._isContentEditable(a.parent()) : "true" === b
            }
        }), a.extend(a.ui.autocomplete, {
            escapeRegex: function(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(b, c) {
                var d = RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                return a.grep(b, function(a) {
                    return d.test(a.label || a.value || a)
                })
            }
        }), a.widget("ui.autocomplete", a.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(a) {
                        return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(b) {
                var c;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion))
            }
        }), a.ui.autocomplete
}), "undefined" == typeof History.Adapter && ("object" != typeof JSON && (JSON = {}), function() {
        "use strict";

        function f(a) {
            return a < 10 ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; c < f; c += 1) g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; c < f; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; d < c; d += 1) indent += " ";
            else "string" == typeof c && (indent = c);
            if (rep = b, !b || "function" == typeof b || "object" == typeof b && "number" == typeof b.length) return str("", {
                "": a
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), function(a, b) {
        "use strict";
        var c = a.History = a.History || {},
            d = a.jQuery;
        if ("undefined" != typeof c.Adapter) throw new Error("History.js Adapter has already been loaded...");
        c.Adapter = {
            bind: function(a, b, c) {
                d(a).bind(b, c)
            },
            trigger: function(a, b, c) {
                d(a).trigger(b, c)
            },
            extractEventData: function(a, c, d) {
                var e = c && c.originalEvent && c.originalEvent[a] || d && d[a] || b;
                return e
            },
            onDomLoad: function(a) {
                d(a)
            }
        }, "undefined" != typeof c.init && c.init()
    }(window), function(a, b) {
        "use strict";
        var c = a.document,
            d = a.setTimeout || d,
            e = a.clearTimeout || e,
            f = a.setInterval || f,
            g = a.History = a.History || {};
        if ("undefined" != typeof g.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        g.initHtml4 = function() {
            return "undefined" == typeof g.initHtml4.initialized && (g.initHtml4.initialized = !0, g.enabled = !0, g.savedHashes = [], g.isLastHash = function(a) {
                var b, c = g.getHashByIndex();
                return b = a === c
            }, g.isHashEqual = function(a, b) {
                return a = encodeURIComponent(a).replace(/%25/g, "%"), b = encodeURIComponent(b).replace(/%25/g, "%"), a === b
            }, g.saveHash = function(a) {
                return !g.isLastHash(a) && (g.savedHashes.push(a), !0)
            }, g.getHashByIndex = function(a) {
                var b = null;
                return b = "undefined" == typeof a ? g.savedHashes[g.savedHashes.length - 1] : a < 0 ? g.savedHashes[g.savedHashes.length + a] : g.savedHashes[a]
            }, g.discardedHashes = {}, g.discardedStates = {}, g.discardState = function(a, b, c) {
                var d, e = g.getHashByState(a);
                return d = {
                    discardedState: a,
                    backState: c,
                    forwardState: b
                }, g.discardedStates[e] = d, !0
            }, g.discardHash = function(a, b, c) {
                var d = {
                    discardedHash: a,
                    backState: c,
                    forwardState: b
                };
                return g.discardedHashes[a] = d, !0
            }, g.discardedState = function(a) {
                var b, c = g.getHashByState(a);
                return b = g.discardedStates[c] || !1
            }, g.discardedHash = function(a) {
                var b = g.discardedHashes[a] || !1;
                return b
            }, g.recycleState = function(a) {
                var b = g.getHashByState(a);
                return g.discardedState(a) && delete g.discardedStates[b], !0
            }, g.emulated.hashChange && (g.hashChangeInit = function() {
                g.checkerFunction = null;
                var b, d, e, h, i = "",
                    j = Boolean(g.getHash());
                return g.isInternetExplorer() ? (b = "historyjs-iframe", d = c.createElement("iframe"), d.setAttribute("id", b), d.setAttribute("src", "#"), d.style.display = "none", c.body.appendChild(d), d.contentWindow.document.open(), d.contentWindow.document.close(), e = "", h = !1, g.checkerFunction = function() {
                    if (h) return !1;
                    h = !0;
                    var b = g.getHash(),
                        c = g.getHash(d.contentWindow.document);
                    return b !== i ? (i = b, c !== b && (e = c = b, d.contentWindow.document.open(), d.contentWindow.document.close(), d.contentWindow.document.location.hash = g.escapeHash(b)), g.Adapter.trigger(a, "hashchange")) : c !== e && (e = c, j && "" === c ? g.back() : g.setHash(c, !1)), h = !1, !0
                }) : g.checkerFunction = function() {
                    var b = g.getHash() || "";
                    return b !== i && (i = b, g.Adapter.trigger(a, "hashchange")), !0
                }, g.intervalList.push(f(g.checkerFunction, g.options.hashChangeInterval)), !0
            }, g.Adapter.onDomLoad(g.hashChangeInit)), g.emulated.pushState && (g.onHashChange = function(b) {
                var c, d = b && b.newURL || g.getLocationHref(),
                    e = g.getHashByUrl(d),
                    f = null,
                    h = null;
                return g.isLastHash(e) ? (g.busy(!1), !1) : (g.doubleCheckComplete(), g.saveHash(e), e && g.isTraditionalAnchor(e) ? (g.Adapter.trigger(a, "anchorchange"), g.busy(!1), !1) : (f = g.extractState(g.getFullUrl(e || g.getLocationHref()), !0), g.isLastSavedState(f) ? (g.busy(!1), !1) : (h = g.getHashByState(f), c = g.discardedState(f), c ? (g.getHashByIndex(-2) === g.getHashByState(c.forwardState) ? g.back(!1) : g.forward(!1), !1) : (g.pushState(f.data, f.title, encodeURI(f.url), !1), !0))))
            }, g.Adapter.bind(a, "hashchange", g.onHashChange), g.pushState = function(b, c, d, e) {
                if (d = encodeURI(d).replace(/%25/g, "%"), g.getHashByUrl(d)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (e !== !1 && g.busy()) return g.pushQueue({
                    scope: g,
                    callback: g.pushState,
                    args: arguments,
                    queue: e
                }), !1;
                g.busy(!0);
                var f = g.createStateObject(b, c, d),
                    h = g.getHashByState(f),
                    i = g.getState(!1),
                    j = g.getHashByState(i),
                    k = g.getHash(),
                    l = g.expectedStateId == f.id;
                return g.storeState(f), g.expectedStateId = f.id, g.recycleState(f), g.setTitle(f), h === j ? (g.busy(!1), !1) : (g.saveState(f), l || g.Adapter.trigger(a, "statechange"), !g.isHashEqual(h, k) && !g.isHashEqual(h, g.getShortUrl(g.getLocationHref())) && g.setHash(h, !1), g.busy(!1), !0)
            }, g.replaceState = function(b, c, d, e) {
                if (d = encodeURI(d).replace(/%25/g, "%"), g.getHashByUrl(d)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (e !== !1 && g.busy()) return g.pushQueue({
                    scope: g,
                    callback: g.replaceState,
                    args: arguments,
                    queue: e
                }), !1;
                g.busy(!0);
                var f = g.createStateObject(b, c, d),
                    h = g.getHashByState(f),
                    i = g.getState(!1),
                    j = g.getHashByState(i),
                    k = g.getStateByIndex(-2);
                return g.discardState(i, f, k), h === j ? (g.storeState(f), g.expectedStateId = f.id, g.recycleState(f), g.setTitle(f), g.saveState(f), g.Adapter.trigger(a, "statechange"), g.busy(!1)) : g.pushState(f.data, f.title, f.url, !1), !0
            }), void(g.emulated.pushState && g.getHash() && !g.emulated.hashChange && g.Adapter.onDomLoad(function() {
                g.Adapter.trigger(a, "hashchange")
            })))
        }, "undefined" != typeof g.init && g.init()
    }(window), function(a, b) {
        "use strict";
        var c = a.console || b,
            d = a.document,
            e = a.navigator,
            f = !1,
            g = a.setTimeout,
            h = a.clearTimeout,
            i = a.setInterval,
            j = a.clearInterval,
            k = a.JSON,
            l = a.alert,
            m = a.History = a.History || {},
            n = a.history;
        try {
            f = a.sessionStorage, f.setItem("TEST", "1"), f.removeItem("TEST")
        } catch (a) {
            f = !1
        }
        if (k.stringify = k.stringify || k.encode, k.parse = k.parse || k.decode, "undefined" != typeof m.init) throw new Error("History.js Core has already been loaded...");
        m.init = function(a) {
            return "undefined" != typeof m.Adapter && ("undefined" != typeof m.initCore && m.initCore(), "undefined" != typeof m.initHtml4 && m.initHtml4(), !0)
        }, m.initCore = function(o) {
            if ("undefined" != typeof m.initCore.initialized) return !1;
            if (m.initCore.initialized = !0, m.options = m.options || {}, m.options.hashChangeInterval = m.options.hashChangeInterval || 100, m.options.safariPollInterval = m.options.safariPollInterval || 500, m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500, m.options.disableSuid = m.options.disableSuid || !1, m.options.storeInterval = m.options.storeInterval || 1e3, m.options.busyDelay = m.options.busyDelay || 250, m.options.debug = m.options.debug || !1, m.options.initialTitle = m.options.initialTitle || d.title, m.options.html4Mode = m.options.html4Mode || !1, m.options.delayInit = m.options.delayInit || !1, m.intervalList = [], m.clearAllIntervals = function() {
                    var a, b = m.intervalList;
                    if ("undefined" != typeof b && null !== b) {
                        for (a = 0; a < b.length; a++) j(b[a]);
                        m.intervalList = null
                    }
                }, m.debug = function() {
                    (m.options.debug || !1) && m.log.apply(m, arguments)
                }, m.log = function() {
                    var a, b, e, f, g, h = "undefined" != typeof c && "undefined" != typeof c.log && "undefined" != typeof c.log.apply,
                        i = d.getElementById("log");
                    for (h ? (f = Array.prototype.slice.call(arguments), a = f.shift(), "undefined" != typeof c.debug ? c.debug.apply(c, [a, f]) : c.log.apply(c, [a, f])) : a = "\n" + arguments[0] + "\n", b = 1, e = arguments.length; b < e; ++b) {
                        if (g = arguments[b], "object" == typeof g && "undefined" != typeof k) try {
                            g = k.stringify(g)
                        } catch (a) {}
                        a += "\n" + g + "\n"
                    }
                    return i ? (i.value += a + "\n-----\n", i.scrollTop = i.scrollHeight - i.clientHeight) : h || l(a), !0
                }, m.getInternetExplorerMajorVersion = function() {
                    var a = m.getInternetExplorerMajorVersion.cached = "undefined" != typeof m.getInternetExplorerMajorVersion.cached ? m.getInternetExplorerMajorVersion.cached : function() {
                        for (var a = 3, b = d.createElement("div"), c = b.getElementsByTagName("i");
                            (b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c[0];);
                        return a > 4 && a
                    }();
                    return a
                }, m.isInternetExplorer = function() {
                    var a = m.isInternetExplorer.cached = "undefined" != typeof m.isInternetExplorer.cached ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion());
                    return a
                }, m.options.html4Mode ? m.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : m.emulated = {
                    pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),
                    hashChange: Boolean(!("onhashchange" in a || "onhashchange" in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)
                }, m.enabled = !m.emulated.pushState, m.bugs = {
                    setHash: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                    safariPoll: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                    ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)
                }, m.isEmptyObject = function(a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b)) return !1;
                    return !0
                }, m.cloneObject = function(a) {
                    var b, c;
                    return a ? (b = k.stringify(a), c = k.parse(b)) : c = {}, c
                }, m.getRootUrl = function() {
                    var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
                    return d.location.port && (a += ":" + d.location.port), a += "/"
                }, m.getBaseHref = function() {
                    var a = d.getElementsByTagName("base"),
                        b = null,
                        c = "";
                    return 1 === a.length && (b = a[0], c = b.href.replace(/[^\/]+$/, "")), c = c.replace(/\/+$/, ""), c && (c += "/"), c
                }, m.getBaseUrl = function() {
                    var a = m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl();
                    return a
                }, m.getPageUrl = function() {
                    var a, b = m.getState(!1, !1),
                        c = (b || {}).url || m.getLocationHref();
                    return a = c.replace(/\/+$/, "").replace(/[^\/]+$/, function(a, b, c) {
                        return /\./.test(a) ? a : a + "/"
                    })
                }, m.getBasePageUrl = function() {
                    var a = m.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(a, b, c) {
                        return /[^\/]$/.test(a) ? "" : a
                    }).replace(/\/+$/, "") + "/";
                    return a
                }, m.getFullUrl = function(a, b) {
                    var c = a,
                        d = a.substring(0, 1);
                    return b = "undefined" == typeof b || b, /[a-z]+\:\/\//.test(a) || (c = "/" === d ? m.getRootUrl() + a.replace(/^\/+/, "") : "#" === d ? m.getPageUrl().replace(/#.*/, "") + a : "?" === d ? m.getPageUrl().replace(/[\?#].*/, "") + a : b ? m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")), c.replace(/\#$/, "")
                }, m.getShortUrl = function(a) {
                    var b = a,
                        c = m.getBaseUrl(),
                        d = m.getRootUrl();
                    return m.emulated.pushState && (b = b.replace(c, "")), b = b.replace(d, "/"), m.isTraditionalAnchor(b) && (b = "./" + b), b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, m.getLocationHref = function(a) {
                    return a = a || d, a.URL === a.location.href ? a.location.href : a.location.href === decodeURIComponent(a.URL) ? a.URL : a.location.hash && decodeURIComponent(a.location.href.replace(/^[^#]+/, "")) === a.location.hash ? a.location.href : a.URL.indexOf("#") == -1 && a.location.href.indexOf("#") != -1 ? a.location.href : a.URL || a.location.href
                }, m.store = {}, m.idToState = m.idToState || {}, m.stateToId = m.stateToId || {}, m.urlToId = m.urlToId || {}, m.storedStates = m.storedStates || [], m.savedStates = m.savedStates || [], m.normalizeStore = function() {
                    m.store.idToState = m.store.idToState || {}, m.store.urlToId = m.store.urlToId || {}, m.store.stateToId = m.store.stateToId || {}
                }, m.getState = function(a, b) {
                    "undefined" == typeof a && (a = !0), "undefined" == typeof b && (b = !0);
                    var c = m.getLastSavedState();
                    return !c && b && (c = m.createStateObject()), a && (c = m.cloneObject(c), c.url = c.cleanUrl || c.url), c
                }, m.getIdByState = function(a) {
                    var b, c = m.extractId(a.url);
                    if (!c)
                        if (b = m.getStateString(a), "undefined" != typeof m.stateToId[b]) c = m.stateToId[b];
                        else if ("undefined" != typeof m.store.stateToId[b]) c = m.store.stateToId[b];
                    else {
                        for (; c = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof m.idToState[c] || "undefined" != typeof m.store.idToState[c];);
                        m.stateToId[b] = c, m.idToState[c] = a
                    }
                    return c
                }, m.normalizeState = function(a) {
                    var b, c;
                    return a && "object" == typeof a || (a = {}), "undefined" != typeof a.normalized ? a : (a.data && "object" == typeof a.data || (a.data = {}), b = {}, b.normalized = !0, b.title = a.title || "", b.url = m.getFullUrl(a.url ? a.url : m.getLocationHref()), b.hash = m.getShortUrl(b.url), b.data = m.cloneObject(a.data), b.id = m.getIdByState(b), b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""), b.url = b.cleanUrl, c = !m.isEmptyObject(b.data), (b.title || c) && m.options.disableSuid !== !0 && (b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""), /\?/.test(b.hash) || (b.hash += "?"), b.hash += "&_suid=" + b.id), b.hashedUrl = m.getFullUrl(b.hash), (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl), b)
                }, m.createStateObject = function(a, b, c) {
                    var d = {
                        data: a,
                        title: b,
                        url: c
                    };
                    return d = m.normalizeState(d)
                }, m.getStateById = function(a) {
                    a = String(a);
                    var c = m.idToState[a] || m.store.idToState[a] || b;
                    return c
                }, m.getStateString = function(a) {
                    var b, c, d;
                    return b = m.normalizeState(a), c = {
                        data: b.data,
                        title: a.title,
                        url: a.url
                    }, d = k.stringify(c)
                }, m.getStateId = function(a) {
                    var b, c;
                    return b = m.normalizeState(a), c = b.id
                }, m.getHashByState = function(a) {
                    var b, c;
                    return b = m.normalizeState(a), c = b.hash
                }, m.extractId = function(a) {
                    var b, c, d, e;
                    return e = a.indexOf("#") != -1 ? a.split("#")[0] : a, c = /(.*)\&_suid=([0-9]+)$/.exec(e), d = c ? c[1] || a : a, b = c ? String(c[2] || "") : "", b || !1
                }, m.isTraditionalAnchor = function(a) {
                    var b = !/[\/\?\.]/.test(a);
                    return b
                }, m.extractState = function(a, b) {
                    var c, d, e = null;
                    return b = b || !1, c = m.extractId(a), c && (e = m.getStateById(c)), e || (d = m.getFullUrl(a), c = m.getIdByUrl(d) || !1, c && (e = m.getStateById(c)), !e && b && !m.isTraditionalAnchor(a) && (e = m.createStateObject(null, null, d))), e
                }, m.getIdByUrl = function(a) {
                    var c = m.urlToId[a] || m.store.urlToId[a] || b;
                    return c
                }, m.getLastSavedState = function() {
                    return m.savedStates[m.savedStates.length - 1] || b
                }, m.getLastStoredState = function() {
                    return m.storedStates[m.storedStates.length - 1] || b
                }, m.hasUrlDuplicate = function(a) {
                    var b, c = !1;
                    return b = m.extractState(a.url), c = b && b.id !== a.id
                }, m.storeState = function(a) {
                    return m.urlToId[a.url] = a.id, m.storedStates.push(m.cloneObject(a)), a
                }, m.isLastSavedState = function(a) {
                    var b, c, d, e = !1;
                    return m.savedStates.length && (b = a.id, c = m.getLastSavedState(), d = c.id, e = b === d), e
                }, m.saveState = function(a) {
                    return !m.isLastSavedState(a) && (m.savedStates.push(m.cloneObject(a)), !0)
                }, m.getStateByIndex = function(a) {
                    var b = null;
                    return b = "undefined" == typeof a ? m.savedStates[m.savedStates.length - 1] : a < 0 ? m.savedStates[m.savedStates.length + a] : m.savedStates[a]
                }, m.getCurrentIndex = function() {
                    var a = null;
                    return a = m.savedStates.length < 1 ? 0 : m.savedStates.length - 1
                }, m.getHash = function(a) {
                    var b, c = m.getLocationHref(a);
                    return b = m.getHashByUrl(c)
                }, m.unescapeHash = function(a) {
                    var b = m.normalizeHash(a);
                    return b = decodeURIComponent(b)
                }, m.normalizeHash = function(a) {
                    var b = a.replace(/[^#]*#/, "").replace(/#.*/, "");
                    return b
                }, m.setHash = function(a, b) {
                    var c, e;
                    return b !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.setHash,
                        args: arguments,
                        queue: b
                    }), !1) : (m.busy(!0), c = m.extractState(a, !0), c && !m.emulated.pushState ? m.pushState(c.data, c.title, c.url, !1) : m.getHash() !== a && (m.bugs.setHash ? (e = m.getPageUrl(), m.pushState(null, null, e + "#" + a, !1)) : d.location.hash = a), m)
                }, m.escapeHash = function(b) {
                    var c = m.normalizeHash(b);
                    return c = a.encodeURIComponent(c), m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), c
                }, m.getHashByUrl = function(a) {
                    var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return b = m.unescapeHash(b)
                }, m.setTitle = function(a) {
                    var b, c = a.title;
                    c || (b = m.getStateByIndex(0), b && b.url === a.url && (c = b.title || m.options.initialTitle));
                    try {
                        d.getElementsByTagName("title")[0].innerHTML = c.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (a) {}
                    return d.title = c, m
                }, m.queues = [], m.busy = function(a) {
                    if ("undefined" != typeof a ? m.busy.flag = a : "undefined" == typeof m.busy.flag && (m.busy.flag = !1), !m.busy.flag) {
                        h(m.busy.timeout);
                        var b = function() {
                            var a, c, d;
                            if (!m.busy.flag)
                                for (a = m.queues.length - 1; a >= 0; --a) c = m.queues[a], 0 !== c.length && (d = c.shift(), m.fireQueueItem(d), m.busy.timeout = g(b, m.options.busyDelay))
                        };
                        m.busy.timeout = g(b, m.options.busyDelay)
                    }
                    return m.busy.flag
                }, m.busy.flag = !1, m.fireQueueItem = function(a) {
                    return a.callback.apply(a.scope || m, a.args || [])
                }, m.pushQueue = function(a) {
                    return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [], m.queues[a.queue || 0].push(a), m
                }, m.queue = function(a, b) {
                    return "function" == typeof a && (a = {
                        callback: a
                    }), "undefined" != typeof b && (a.queue = b), m.busy() ? m.pushQueue(a) : m.fireQueueItem(a), m
                }, m.clearQueue = function() {
                    return m.busy.flag = !1, m.queues = [], m
                }, m.stateChanged = !1, m.doubleChecker = !1, m.doubleCheckComplete = function() {
                    return m.stateChanged = !0, m.doubleCheckClear(), m
                }, m.doubleCheckClear = function() {
                    return m.doubleChecker && (h(m.doubleChecker), m.doubleChecker = !1), m
                }, m.doubleCheck = function(a) {
                    return m.stateChanged = !1, m.doubleCheckClear(), m.bugs.ieDoubleCheck && (m.doubleChecker = g(function() {
                        return m.doubleCheckClear(), m.stateChanged || a(), !0
                    }, m.options.doubleCheckInterval)), m
                }, m.safariStatePoll = function() {
                    var b, c = m.extractState(m.getLocationHref());
                    if (!m.isLastSavedState(c)) return b = c, b || (b = m.createStateObject()), m.Adapter.trigger(a, "popstate"), m
                }, m.back = function(a) {
                    return a !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.back,
                        args: arguments,
                        queue: a
                    }), !1) : (m.busy(!0), m.doubleCheck(function() {
                        m.back(!1)
                    }), n.go(-1), !0)
                }, m.forward = function(a) {
                    return a !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.forward,
                        args: arguments,
                        queue: a
                    }), !1) : (m.busy(!0), m.doubleCheck(function() {
                        m.forward(!1)
                    }), n.go(1), !0)
                }, m.go = function(a, b) {
                    var c;
                    if (a > 0)
                        for (c = 1; c <= a; ++c) m.forward(b);
                    else {
                        if (!(a < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (c = -1; c >= a; --c) m.back(b)
                    }
                    return m
                }, m.emulated.pushState) {
                var p = function() {};
                m.pushState = m.pushState || p, m.replaceState = m.replaceState || p
            } else m.onPopState = function(b, c) {
                var d, e, f = !1,
                    g = !1;
                return m.doubleCheckComplete(), d = m.getHash(), d ? (e = m.extractState(d || m.getLocationHref(), !0), e ? m.replaceState(e.data, e.title, e.url, !1) : (m.Adapter.trigger(a, "anchorchange"), m.busy(!1)), m.expectedStateId = !1, !1) : (f = m.Adapter.extractEventData("state", b, c) || !1, g = f ? m.getStateById(f) : m.expectedStateId ? m.getStateById(m.expectedStateId) : m.extractState(m.getLocationHref()), g || (g = m.createStateObject(null, null, m.getLocationHref())), m.expectedStateId = !1, m.isLastSavedState(g) ? (m.busy(!1), !1) : (m.storeState(g), m.saveState(g), m.setTitle(g), m.Adapter.trigger(a, "statechange"), m.busy(!1), !0))
            }, m.Adapter.bind(a, "popstate", m.onPopState), m.pushState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.pushState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.pushState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            }, m.replaceState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.replaceState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.replaceState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            };
            if (f) {
                try {
                    m.store = k.parse(f.getItem("History.store")) || {}
                } catch (a) {
                    m.store = {}
                }
                m.normalizeStore()
            } else m.store = {}, m.normalizeStore();
            m.Adapter.bind(a, "unload", m.clearAllIntervals), m.saveState(m.storeState(m.extractState(m.getLocationHref(), !0))), f && (m.onUnload = function() {
                var a, b, c;
                try {
                    a = k.parse(f.getItem("History.store")) || {}
                } catch (b) {
                    a = {}
                }
                a.idToState = a.idToState || {}, a.urlToId = a.urlToId || {}, a.stateToId = a.stateToId || {};
                for (b in m.idToState) m.idToState.hasOwnProperty(b) && (a.idToState[b] = m.idToState[b]);
                for (b in m.urlToId) m.urlToId.hasOwnProperty(b) && (a.urlToId[b] = m.urlToId[b]);
                for (b in m.stateToId) m.stateToId.hasOwnProperty(b) && (a.stateToId[b] = m.stateToId[b]);
                m.store = a, m.normalizeStore(), c = k.stringify(a);
                try {
                    f.setItem("History.store", c)
                } catch (a) {
                    if (a.code !== DOMException.QUOTA_EXCEEDED_ERR) throw a;
                    f.length && (f.removeItem("History.store"), f.setItem("History.store", c))
                }
            }, m.intervalList.push(i(m.onUnload, m.options.storeInterval)), m.Adapter.bind(a, "beforeunload", m.onUnload), m.Adapter.bind(a, "unload", m.onUnload)), m.emulated.pushState || (m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval)), "Apple Computer, Inc." !== e.vendor && "Mozilla" !== (e.appCodeName || "") || (m.Adapter.bind(a, "hashchange", function() {
                m.Adapter.trigger(a, "popstate")
            }), m.getHash() && m.Adapter.onDomLoad(function() {
                m.Adapter.trigger(a, "hashchange")
            })))
        }, (!m.options || !m.options.delayInit) && m.init()
    }(window)),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
    }(function(a) {
        function b(b) {
            var g = b || window.event,
                h = i.call(arguments, 1),
                j = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0;
            if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = g.detail * -1), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = g.wheelDeltaX * -1), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = m * -1, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = g.deltaY * -1, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = l * -1)), 0 !== m || 0 !== l) {
                if (1 === g.deltaMode) {
                    var q = a.data(this, "mousewheel-line-height");
                    j *= q, m *= q, l *= q
                } else if (2 === g.deltaMode) {
                    var r = a.data(this, "mousewheel-page-height");
                    j *= r, m *= r, l *= r
                }
                if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || n < f) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                    var s = this.getBoundingClientRect();
                    o = b.clientX - s.left, p = b.clientY - s.top
                }
                return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
            }
        }

        function c() {
            f = null
        }

        function d(a, b) {
            return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
        }
        var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            i = Array.prototype.slice;
        if (a.event.fixHooks)
            for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
        var k = a.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                else this.onmousewheel = b;
                a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                else this.onmousewheel = null;
                a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(b) {
                var c = a(b),
                    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
            },
            getPageHeight: function(b) {
                return a(b).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        a.fn.extend({
            mousewheel: function(a) {
                return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
            },
            unmousewheel: function(a) {
                return this.unbind("mousewheel", a)
            }
        })
    }), ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        a.fn.jScrollPane = function(b) {
            function c(b, c) {
                function d(c) {
                    var f, h, j, k, l, o, p = !1,
                        q = !1;
                    if (N = c, void 0 === O) l = b.scrollTop(), o = b.scrollLeft(), b.css({
                        overflow: "hidden",
                        padding: 0
                    }), P = b.innerWidth() + ra, Q = b.innerHeight(), b.width(P), O = a('<div class="jspPane" />').css("padding", qa).append(b.children()), R = a('<div class="jspContainer" />').css({
                        width: P + "px",
                        height: Q + "px"
                    }).append(O).appendTo(b);
                    else {
                        if (b.css("width", ""), p = N.stickToBottom && A(), q = N.stickToRight && B(), k = b.innerWidth() + ra != P || b.outerHeight() != Q, k && (P = b.innerWidth() + ra, Q = b.innerHeight(), R.css({
                                width: P + "px",
                                height: Q + "px"
                            })), !k && sa == S && O.outerHeight() == T) return void b.width(P);
                        sa = S, O.css("width", ""), b.width(P), R.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                    }
                    O.css("overflow", "auto"), S = c.contentWidth ? c.contentWidth : O[0].scrollWidth, T = O[0].scrollHeight, O.css("overflow", ""), U = S / P, V = T / Q, W = V > 1, X = U > 1, X || W ? (b.addClass("jspScrollable"), f = N.maintainPosition && ($ || ba), f && (h = y(), j = z()), e(), g(), i(), f && (w(q ? S - P : h, !1), v(p ? T - Q : j, !1)), F(), C(), L(), N.enableKeyboardNavigation && H(), N.clickOnTrack && m(), J(), N.hijackInternalLinks && K()) : (b.removeClass("jspScrollable"), O.css({
                        top: 0,
                        left: 0,
                        width: R.width() - ra
                    }), D(), G(), I(), n()), N.autoReinitialise && !pa ? pa = setInterval(function() {
                        d(N)
                    }, N.autoReinitialiseDelay) : !N.autoReinitialise && pa && clearInterval(pa), l && b.scrollTop(0) && v(l, !1), o && b.scrollLeft(0) && w(o, !1), b.trigger("jsp-initialised", [X || W])
                }

                function e() {
                    W && (R.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), ca = R.find(">.jspVerticalBar"), da = ca.find(">.jspTrack"), Y = da.find(">.jspDrag"), N.showArrows && (ha = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", k(0, -1)).bind("click.jsp", E), ia = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", k(0, 1)).bind("click.jsp", E), N.arrowScrollOnHover && (ha.bind("mouseover.jsp", k(0, -1, ha)), ia.bind("mouseover.jsp", k(0, 1, ia))), j(da, N.verticalArrowPositions, ha, ia)), fa = Q, R.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        fa -= a(this).outerHeight()
                    }), Y.hover(function() {
                        Y.addClass("jspHover")
                    }, function() {
                        Y.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(b) {
                        a("html").bind("dragstart.jsp selectstart.jsp", E), Y.addClass("jspActive");
                        var c = b.pageY - Y.position().top;
                        return a("html").bind("mousemove.jsp", function(a) {
                            p(a.pageY - c, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", o), !1
                    }), f())
                }

                function f() {
                    da.height(fa + "px"), $ = 0, ea = N.verticalGutter + da.outerWidth(), O.width(P - ea - ra);
                    try {
                        0 === ca.position().left && O.css("margin-left", ea + "px")
                    } catch (a) {}
                }

                function g() {
                    X && (R.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), ja = R.find(">.jspHorizontalBar"), ka = ja.find(">.jspTrack"), _ = ka.find(">.jspDrag"), N.showArrows && (na = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", k(-1, 0)).bind("click.jsp", E), oa = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", k(1, 0)).bind("click.jsp", E), N.arrowScrollOnHover && (na.bind("mouseover.jsp", k(-1, 0, na)), oa.bind("mouseover.jsp", k(1, 0, oa))), j(ka, N.horizontalArrowPositions, na, oa)), _.hover(function() {
                        _.addClass("jspHover")
                    }, function() {
                        _.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(b) {
                        a("html").bind("dragstart.jsp selectstart.jsp", E), _.addClass("jspActive");
                        var c = b.pageX - _.position().left;
                        return a("html").bind("mousemove.jsp", function(a) {
                            r(a.pageX - c, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", o), !1
                    }), la = R.innerWidth(), h())
                }

                function h() {
                    R.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                        la -= a(this).outerWidth()
                    }), ka.width(la + "px"), ba = 0
                }

                function i() {
                    if (X && W) {
                        var b = ka.outerHeight(),
                            c = da.outerWidth();
                        fa -= b, a(ja).find(">.jspCap:visible,>.jspArrow").each(function() {
                            la += a(this).outerWidth()
                        }), la -= c, Q -= c, P -= b, ka.parent().append(a('<div class="jspCorner" />').css("width", b + "px")), f(), h()
                    }
                    X && O.width(R.outerWidth() - ra + "px"), T = O.outerHeight(), V = T / Q,
                        X && (ma = Math.ceil(1 / U * la), ma > N.horizontalDragMaxWidth ? ma = N.horizontalDragMaxWidth : ma < N.horizontalDragMinWidth && (ma = N.horizontalDragMinWidth), _.width(ma + "px"), aa = la - ma, s(ba)), W && (ga = Math.ceil(1 / V * fa), ga > N.verticalDragMaxHeight ? ga = N.verticalDragMaxHeight : ga < N.verticalDragMinHeight && (ga = N.verticalDragMinHeight), Y.height(ga + "px"), Z = fa - ga, q($))
                }

                function j(a, b, c, d) {
                    var e, f = "before",
                        g = "after";
                    "os" == b && (b = /Mac/.test(navigator.platform) ? "after" : "split"), b == f ? g = b : b == g && (f = b, e = c, c = d, d = e), a[f](c)[g](d)
                }

                function k(a, b, c) {
                    return function() {
                        return l(a, b, this, c), this.blur(), !1
                    }
                }

                function l(b, c, d, e) {
                    d = a(d).addClass("jspActive");
                    var f, g, h = !0,
                        i = function() {
                            0 !== b && ta.scrollByX(b * N.arrowButtonSpeed), 0 !== c && ta.scrollByY(c * N.arrowButtonSpeed), g = setTimeout(i, h ? N.initialDelay : N.arrowRepeatFreq), h = !1
                        };
                    i(), f = e ? "mouseout.jsp" : "mouseup.jsp", e = e || a("html"), e.bind(f, function() {
                        d.removeClass("jspActive"), g && clearTimeout(g), g = null, e.unbind(f)
                    })
                }

                function m() {
                    n(), W && da.bind("mousedown.jsp", function(b) {
                        if (void 0 === b.originalTarget || b.originalTarget == b.currentTarget) {
                            var c, d = a(this),
                                e = d.offset(),
                                f = b.pageY - e.top - $,
                                g = !0,
                                h = function() {
                                    var a = d.offset(),
                                        e = b.pageY - a.top - ga / 2,
                                        j = Q * N.scrollPagePercent,
                                        k = Z * j / (T - Q);
                                    if (0 > f) $ - k > e ? ta.scrollByY(-j) : p(e);
                                    else {
                                        if (!(f > 0)) return void i();
                                        e > $ + k ? ta.scrollByY(j) : p(e)
                                    }
                                    c = setTimeout(h, g ? N.initialDelay : N.trackClickRepeatFreq), g = !1
                                },
                                i = function() {
                                    c && clearTimeout(c), c = null, a(document).unbind("mouseup.jsp", i)
                                };
                            return h(), a(document).bind("mouseup.jsp", i), !1
                        }
                    }), X && ka.bind("mousedown.jsp", function(b) {
                        if (void 0 === b.originalTarget || b.originalTarget == b.currentTarget) {
                            var c, d = a(this),
                                e = d.offset(),
                                f = b.pageX - e.left - ba,
                                g = !0,
                                h = function() {
                                    var a = d.offset(),
                                        e = b.pageX - a.left - ma / 2,
                                        j = P * N.scrollPagePercent,
                                        k = aa * j / (S - P);
                                    if (0 > f) ba - k > e ? ta.scrollByX(-j) : r(e);
                                    else {
                                        if (!(f > 0)) return void i();
                                        e > ba + k ? ta.scrollByX(j) : r(e)
                                    }
                                    c = setTimeout(h, g ? N.initialDelay : N.trackClickRepeatFreq), g = !1
                                },
                                i = function() {
                                    c && clearTimeout(c), c = null, a(document).unbind("mouseup.jsp", i)
                                };
                            return h(), a(document).bind("mouseup.jsp", i), !1
                        }
                    })
                }

                function n() {
                    ka && ka.unbind("mousedown.jsp"), da && da.unbind("mousedown.jsp")
                }

                function o() {
                    a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), Y && Y.removeClass("jspActive"), _ && _.removeClass("jspActive")
                }

                function p(c, d) {
                    if (W) {
                        0 > c ? c = 0 : c > Z && (c = Z);
                        var e = new a.Event("jsp-will-scroll-y");
                        if (b.trigger(e, [c]), !e.isDefaultPrevented()) {
                            var f = c || 0,
                                g = 0 === f,
                                h = f == Z,
                                i = c / Z,
                                j = -i * (T - Q);
                            void 0 === d && (d = N.animateScroll), d ? ta.animate(Y, "top", c, q, function() {
                                b.trigger("jsp-user-scroll-y", [-j, g, h])
                            }) : (Y.css("top", c), q(c), b.trigger("jsp-user-scroll-y", [-j, g, h]))
                        }
                    }
                }

                function q(a) {
                    void 0 === a && (a = Y.position().top), R.scrollTop(0), $ = a || 0;
                    var c = 0 === $,
                        d = $ == Z,
                        e = a / Z,
                        f = -e * (T - Q);
                    (ua != c || wa != d) && (ua = c, wa = d, b.trigger("jsp-arrow-change", [ua, wa, va, xa])), t(c, d), O.css("top", f), b.trigger("jsp-scroll-y", [-f, c, d]).trigger("scroll")
                }

                function r(c, d) {
                    if (X) {
                        0 > c ? c = 0 : c > aa && (c = aa);
                        var e = new a.Event("jsp-will-scroll-x");
                        if (b.trigger(e, [c]), !e.isDefaultPrevented()) {
                            var f = c || 0,
                                g = 0 === f,
                                h = f == aa,
                                i = c / aa,
                                j = -i * (S - P);
                            void 0 === d && (d = N.animateScroll), d ? ta.animate(_, "left", c, s, function() {
                                b.trigger("jsp-user-scroll-x", [-j, g, h])
                            }) : (_.css("left", c), s(c), b.trigger("jsp-user-scroll-x", [-j, g, h]))
                        }
                    }
                }

                function s(a) {
                    void 0 === a && (a = _.position().left), R.scrollTop(0), ba = a || 0;
                    var c = 0 === ba,
                        d = ba == aa,
                        e = a / aa,
                        f = -e * (S - P);
                    (va != c || xa != d) && (va = c, xa = d, b.trigger("jsp-arrow-change", [ua, wa, va, xa])), u(c, d), O.css("left", f), b.trigger("jsp-scroll-x", [-f, c, d]).trigger("scroll")
                }

                function t(a, b) {
                    N.showArrows && (ha[a ? "addClass" : "removeClass"]("jspDisabled"), ia[b ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function u(a, b) {
                    N.showArrows && (na[a ? "addClass" : "removeClass"]("jspDisabled"), oa[b ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function v(a, b) {
                    var c = a / (T - Q);
                    p(c * Z, b)
                }

                function w(a, b) {
                    var c = a / (S - P);
                    r(c * aa, b)
                }

                function x(b, c, d) {
                    var e, f, g, h, i, j, k, l, m, n = 0,
                        o = 0;
                    try {
                        e = a(b)
                    } catch (a) {
                        return
                    }
                    for (f = e.outerHeight(), g = e.outerWidth(), R.scrollTop(0), R.scrollLeft(0); !e.is(".jspPane");)
                        if (n += e.position().top, o += e.position().left, e = e.offsetParent(), /^body|html$/i.test(e[0].nodeName)) return;
                    h = z(), j = h + Q, h > n || c ? l = n - N.horizontalGutter : n + f > j && (l = n - Q + f + N.horizontalGutter), isNaN(l) || v(l, d), i = y(), k = i + P, i > o || c ? m = o - N.horizontalGutter : o + g > k && (m = o - P + g + N.horizontalGutter), isNaN(m) || w(m, d)
                }

                function y() {
                    return -O.position().left
                }

                function z() {
                    return -O.position().top
                }

                function A() {
                    var a = T - Q;
                    return a > 20 && a - z() < 10
                }

                function B() {
                    var a = S - P;
                    return a > 20 && a - y() < 10
                }

                function C() {
                    R.unbind(za).bind(za, function(a, b, c, d) {
                        ba || (ba = 0), $ || ($ = 0);
                        var e = ba,
                            f = $,
                            g = a.deltaFactor || N.mouseWheelSpeed;
                        return ta.scrollBy(c * g, -d * g, !1), e == ba && f == $
                    })
                }

                function D() {
                    R.unbind(za)
                }

                function E() {
                    return !1
                }

                function F() {
                    O.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(a) {
                        x(a.target, !1)
                    })
                }

                function G() {
                    O.find(":input,a").unbind("focus.jsp")
                }

                function H() {
                    function c() {
                        var a = ba,
                            b = $;
                        switch (d) {
                            case 40:
                                ta.scrollByY(N.keyboardSpeed, !1);
                                break;
                            case 38:
                                ta.scrollByY(-N.keyboardSpeed, !1);
                                break;
                            case 34:
                            case 32:
                                ta.scrollByY(Q * N.scrollPagePercent, !1);
                                break;
                            case 33:
                                ta.scrollByY(-Q * N.scrollPagePercent, !1);
                                break;
                            case 39:
                                ta.scrollByX(N.keyboardSpeed, !1);
                                break;
                            case 37:
                                ta.scrollByX(-N.keyboardSpeed, !1)
                        }
                        return e = a != ba || b != $
                    }
                    var d, e, f = [];
                    X && f.push(ja[0]), W && f.push(ca[0]), O.bind("focus.jsp", function() {
                        b.focus()
                    }), b.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(b) {
                        if (b.target === this || f.length && a(b.target).closest(f).length) {
                            var g = ba,
                                h = $;
                            switch (b.keyCode) {
                                case 40:
                                case 38:
                                case 34:
                                case 32:
                                case 33:
                                case 39:
                                case 37:
                                    d = b.keyCode, c();
                                    break;
                                case 35:
                                    v(T - Q), d = null;
                                    break;
                                case 36:
                                    v(0), d = null
                            }
                            return e = b.keyCode == d && g != ba || h != $, !e
                        }
                    }).bind("keypress.jsp", function(b) {
                        return b.keyCode == d && c(), b.target === this || f.length && a(b.target).closest(f).length ? !e : void 0
                    }), N.hideFocus ? (b.css("outline", "none"), "hideFocus" in R[0] && b.attr("hideFocus", !0)) : (b.css("outline", ""), "hideFocus" in R[0] && b.attr("hideFocus", !1))
                }

                function I() {
                    b.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), O.unbind(".jsp")
                }

                function J() {
                    if (location.hash && location.hash.length > 1) {
                        var b, c, d = escape(location.hash.substr(1));
                        try {
                            b = a("#" + d + ', a[name="' + d + '"]')
                        } catch (a) {
                            return
                        }
                        b.length && O.find(d) && (0 === R.scrollTop() ? c = setInterval(function() {
                            R.scrollTop() > 0 && (x(b, !0), a(document).scrollTop(R.position().top), clearInterval(c))
                        }, 50) : (x(b, !0), a(document).scrollTop(R.position().top)))
                    }
                }

                function K() {
                    a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate('a[href*="#"]', "click", function(b) {
                        var c, d, e, f, g, h, i = this.href.substr(0, this.href.indexOf("#")),
                            j = location.href;
                        if (-1 !== location.href.indexOf("#") && (j = location.href.substr(0, location.href.indexOf("#"))), i === j) {
                            c = escape(this.href.substr(this.href.indexOf("#") + 1));
                            try {
                                d = a("#" + c + ', a[name="' + c + '"]')
                            } catch (a) {
                                return
                            }
                            d.length && (e = d.closest(".jspScrollable"), f = e.data("jsp"), f.scrollToElement(d, !0), e[0].scrollIntoView && (g = a(window).scrollTop(), h = d.offset().top, (g > h || h > g + a(window).height()) && e[0].scrollIntoView()), b.preventDefault())
                        }
                    }))
                }

                function L() {
                    var a, b, c, d, e, f = !1;
                    R.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(g) {
                        var h = g.originalEvent.touches[0];
                        a = y(), b = z(), c = h.pageX, d = h.pageY, e = !1, f = !0
                    }).bind("touchmove.jsp", function(g) {
                        if (f) {
                            var h = g.originalEvent.touches[0],
                                i = ba,
                                j = $;
                            return ta.scrollTo(a + c - h.pageX, b + d - h.pageY), e = e || Math.abs(c - h.pageX) > 5 || Math.abs(d - h.pageY) > 5, i == ba && j == $
                        }
                    }).bind("touchend.jsp", function() {
                        f = !1
                    }).bind("click.jsp-touchclick", function() {
                        return e ? (e = !1, !1) : void 0
                    })
                }

                function M() {
                    var a = z(),
                        c = y();
                    b.removeClass("jspScrollable").unbind(".jsp"), O.unbind(".jsp"), b.replaceWith(ya.append(O.children())), ya.scrollTop(a), ya.scrollLeft(c), pa && clearInterval(pa)
                }
                var N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta = this,
                    ua = !0,
                    va = !0,
                    wa = !1,
                    xa = !1,
                    ya = b.clone(!1, !1).empty(),
                    za = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
                "border-box" === b.css("box-sizing") ? (qa = 0, ra = 0) : (qa = b.css("paddingTop") + " " + b.css("paddingRight") + " " + b.css("paddingBottom") + " " + b.css("paddingLeft"), ra = (parseInt(b.css("paddingLeft"), 10) || 0) + (parseInt(b.css("paddingRight"), 10) || 0)), a.extend(ta, {
                    reinitialise: function(b) {
                        b = a.extend({}, N, b), d(b)
                    },
                    scrollToElement: function(a, b, c) {
                        x(a, b, c)
                    },
                    scrollTo: function(a, b, c) {
                        w(a, c), v(b, c)
                    },
                    scrollToX: function(a, b) {
                        w(a, b)
                    },
                    scrollToY: function(a, b) {
                        v(a, b)
                    },
                    scrollToPercentX: function(a, b) {
                        w(a * (S - P), b)
                    },
                    scrollToPercentY: function(a, b) {
                        v(a * (T - Q), b)
                    },
                    scrollBy: function(a, b, c) {
                        ta.scrollByX(a, c), ta.scrollByY(b, c)
                    },
                    scrollByX: function(a, b) {
                        var c = y() + Math[0 > a ? "floor" : "ceil"](a),
                            d = c / (S - P);
                        r(d * aa, b)
                    },
                    scrollByY: function(a, b) {
                        var c = z() + Math[0 > a ? "floor" : "ceil"](a),
                            d = c / (T - Q);
                        p(d * Z, b)
                    },
                    positionDragX: function(a, b) {
                        r(a, b)
                    },
                    positionDragY: function(a, b) {
                        p(a, b)
                    },
                    animate: function(a, b, c, d, e) {
                        var f = {};
                        f[b] = c, a.animate(f, {
                            duration: N.animateDuration,
                            easing: N.animateEase,
                            queue: !1,
                            step: d,
                            complete: e
                        })
                    },
                    getContentPositionX: function() {
                        return y()
                    },
                    getContentPositionY: function() {
                        return z()
                    },
                    getContentWidth: function() {
                        return S
                    },
                    getContentHeight: function() {
                        return T
                    },
                    getPercentScrolledX: function() {
                        return y() / (S - P)
                    },
                    getPercentScrolledY: function() {
                        return z() / (T - Q)
                    },
                    getIsScrollableH: function() {
                        return X
                    },
                    getIsScrollableV: function() {
                        return W
                    },
                    getContentPane: function() {
                        return O
                    },
                    scrollToBottom: function(a) {
                        p(Z, a)
                    },
                    hijackInternalLinks: a.noop,
                    destroy: function() {
                        M()
                    }
                }), d(c)
            }
            return b = a.extend({}, a.fn.jScrollPane.defaults, b), a.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
                b[this] = b[this] || b.speed
            }), this.each(function() {
                var d = a(this),
                    e = d.data("jsp");
                e ? e.reinitialise(b) : (a("script", d).filter('[type="text/javascript"],:not([type])').remove(), e = new c(d, b), d.data("jsp", e))
            })
        }, a.fn.jScrollPane.defaults = {
            showArrows: !1,
            maintainPosition: !0,
            stickToBottom: !1,
            stickToRight: !1,
            clickOnTrack: !0,
            autoReinitialise: !1,
            autoReinitialiseDelay: 500,
            verticalDragMinHeight: 0,
            verticalDragMaxHeight: 99999,
            horizontalDragMinWidth: 0,
            horizontalDragMaxWidth: 99999,
            contentWidth: void 0,
            animateScroll: !1,
            animateDuration: 300,
            animateEase: "linear",
            hijackInternalLinks: !1,
            verticalGutter: 4,
            horizontalGutter: 4,
            mouseWheelSpeed: 3,
            arrowButtonSpeed: 0,
            arrowRepeatFreq: 50,
            arrowScrollOnHover: !1,
            trackClickSpeed: 0,
            trackClickRepeatFreq: 70,
            verticalArrowPositions: "split",
            horizontalArrowPositions: "split",
            enableKeyboardNavigation: !0,
            hideFocus: !1,
            keyboardSpeed: 0,
            initialDelay: 300,
            speed: 30,
            scrollPagePercent: .8
        }
    }),
    function(a, b, c) {
        "use strict";

        function d(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return a.prop ? a.prop.apply(a, b) : a.attr.apply(a, b)
        }

        function e(a, b, c) {
            var d, e;
            for (d in c) c.hasOwnProperty(d) && (e = d.replace(/ |$/g, b.eventNamespace), a.bind(e, c[d]))
        }

        function f(a, b, c) {
            e(a, c, {
                focus: function() {
                    b.addClass(c.focusClass)
                },
                blur: function() {
                    b.removeClass(c.focusClass), b.removeClass(c.activeClass)
                },
                mouseenter: function() {
                    b.addClass(c.hoverClass)
                },
                mouseleave: function() {
                    b.removeClass(c.hoverClass), b.removeClass(c.activeClass)
                },
                "mousedown touchbegin": function() {
                    a.is(":disabled") || b.addClass(c.activeClass)
                },
                "mouseup touchend": function() {
                    b.removeClass(c.activeClass)
                }
            })
        }

        function g(a, b) {
            a.removeClass(b.hoverClass + " " + b.focusClass + " " + b.activeClass)
        }

        function h(a, b, c) {
            c ? a.addClass(b) : a.removeClass(b)
        }

        function i(a, b, c) {
            var d = "checked",
                e = b.is(":" + d);
            b.prop ? b.prop(d, e) : e ? b.attr(d, d) : b.removeAttr(d), h(a, c.checkedClass, e)
        }

        function j(a, b, c) {
            h(a, c.disabledClass, b.is(":disabled"))
        }

        function k(a, b, c) {
            switch (c) {
                case "after":
                    return a.after(b), a.next();
                case "before":
                    return a.before(b), a.prev();
                case "wrap":
                    return a.wrap(b), a.parent()
            }
            return null
        }

        function l(a, c, e) {
            var f, g, h;
            return e || (e = {}), e = b.extend({
                bind: {},
                divClass: null,
                divWrap: "wrap",
                spanClass: null,
                spanHtml: null,
                spanWrap: "wrap"
            }, e), f = b("<div />"), g = b("<span />"), c.autoHide && a.is(":hidden") && "none" === a.css("display") && f.hide(), e.divClass && f.addClass(e.divClass), c.wrapperClass && f.addClass(c.wrapperClass), e.spanClass && g.addClass(e.spanClass), h = d(a, "id"), c.useID && h && d(f, "id", c.idPrefix + "-" + h), e.spanHtml && g.html(e.spanHtml), f = k(a, f, e.divWrap), g = k(a, g, e.spanWrap), j(f, a, c), {
                div: f,
                span: g
            }
        }

        function m(a, c) {
            var d;
            return c.wrapperClass ? (d = b("<span />").addClass(c.wrapperClass), d = k(a, d, "wrap")) : null
        }

        function n() {
            var c, d, e, f;
            return f = "rgb(120,2,153)", d = b('<div style="width:0;height:0;color:' + f + '">'), b("body").append(d), e = d.get(0), c = a.getComputedStyle ? a.getComputedStyle(e, "").color : (e.currentStyle || e.style || {}).color, d.remove(), c.replace(/ /g, "") !== f
        }

        function o(a) {
            return a ? b("<span />").text(a).html() : ""
        }

        function p() {
            return navigator.cpuClass && !navigator.product
        }

        function q() {
            return void 0 !== a.XMLHttpRequest
        }

        function r(a) {
            var b;
            return !(!a[0].multiple && (b = d(a, "size"), !b || b <= 1))
        }

        function s() {
            return !1
        }

        function t(a, b) {
            var c = "none";
            e(a, b, {
                "selectstart dragstart mousedown": s
            }), a.css({
                MozUserSelect: c,
                msUserSelect: c,
                webkitUserSelect: c,
                userSelect: c
            })
        }

        function u(a, b, c) {
            var d = a.val();
            "" === d ? d = c.fileDefaultHtml : (d = d.split(/[\/\\]+/), d = d[d.length - 1]), b.text(d)
        }

        function v(a, b, c) {
            var d, e;
            for (d = [], a.each(function() {
                    var a;
                    for (a in b) Object.prototype.hasOwnProperty.call(b, a) && (d.push({
                        el: this,
                        name: a,
                        old: this.style[a]
                    }), this.style[a] = b[a])
                }), c(); d.length;) e = d.pop(), e.el.style[e.name] = e.old
        }

        function w(a, b) {
            var c;
            c = a.parents(), c.push(a[0]), c = c.not(":visible"), v(c, {
                visibility: "hidden",
                display: "block",
                position: "absolute"
            }, b)
        }

        function x(a, b) {
            return function() {
                a.unwrap().unwrap().unbind(b.eventNamespace)
            }
        }
        var y = !0,
            z = !1,
            A = [{
                match: function(a) {
                    return a.is("a, button, :submit, :reset, input[type='button']")
                },
                apply: function(b, c) {
                    var h, i, k, m, n;
                    return i = c.submitDefaultHtml, b.is(":reset") && (i = c.resetDefaultHtml), m = b.is("a, button") ? function() {
                        return b.html() || i
                    } : function() {
                        return o(d(b, "value")) || i
                    }, k = l(b, c, {
                        divClass: c.buttonClass,
                        spanHtml: m()
                    }), h = k.div, f(b, h, c), n = !1, e(h, c, {
                        "click touchend": function() {
                            var c, e, f, g;
                            n || b.is(":disabled") || (n = !0, b[0].dispatchEvent ? (c = document.createEvent("MouseEvents"), c.initEvent("click", !0, !0), e = b[0].dispatchEvent(c), b.is("a") && e && (f = d(b, "target"), g = d(b, "href"), f && "_self" !== f ? a.open(g, f) : document.location.href = g)) : b.click(), n = !1)
                        }
                    }), t(h, c), {
                        remove: function() {
                            return h.after(b), h.remove(), b.unbind(c.eventNamespace), b
                        },
                        update: function() {
                            g(h, c), j(h, b, c), b.detach(), k.span.html(m()).append(b)
                        }
                    }
                }
            }, {
                match: function(a) {
                    return a.is(":checkbox")
                },
                apply: function(a, b) {
                    var c, d, h;
                    return c = l(a, b, {
                        divClass: b.checkboxClass
                    }), d = c.div, h = c.span, f(a, d, b), e(a, b, {
                        "click touchend": function() {
                            i(h, a, b)
                        }
                    }), i(h, a, b), {
                        remove: x(a, b),
                        update: function() {
                            g(d, b), h.removeClass(b.checkedClass), i(h, a, b), j(d, a, b)
                        }
                    }
                }
            }, {
                match: function(a) {
                    return a.is(":file")
                },
                apply: function(a, c) {
                    function h() {
                        u(a, n, c)
                    }
                    var i, m, n, o;
                    return i = l(a, c, {
                        divClass: c.fileClass,
                        spanClass: c.fileButtonClass,
                        spanHtml: c.fileButtonHtml,
                        spanWrap: "after"
                    }), m = i.div, o = i.span, n = b("<span />").html(c.fileDefaultHtml), n.addClass(c.filenameClass), n = k(a, n, "after"), d(a, "size") || d(a, "size", m.width() / 10), f(a, m, c), h(), p() ? e(a, c, {
                        click: function() {
                            a.trigger("change"), setTimeout(h, 0)
                        }
                    }) : e(a, c, {
                        change: h
                    }), t(n, c), t(o, c), {
                        remove: function() {
                            return n.remove(), o.remove(), a.unwrap().unbind(c.eventNamespace)
                        },
                        update: function() {
                            g(m, c), u(a, n, c), j(m, a, c)
                        }
                    }
                }
            }, {
                match: function(a) {
                    if (a.is("input")) {
                        var b = (" " + d(a, "type") + " ").toLowerCase(),
                            c = " color date datetime datetime-local email month number password search tel text time url week ";
                        return c.indexOf(b) >= 0
                    }
                    return !1
                },
                apply: function(a, b) {
                    var c, e;
                    return c = d(a, "type"), a.addClass(b.inputClass), e = m(a, b), f(a, a, b), b.inputAddTypeAsClass && a.addClass(c), {
                        remove: function() {
                            a.removeClass(b.inputClass), b.inputAddTypeAsClass && a.removeClass(c), e && a.unwrap()
                        },
                        update: s
                    }
                }
            }, {
                match: function(a) {
                    return a.is(":radio")
                },
                apply: function(a, c) {
                    var h, k, m;
                    return h = l(a, c, {
                        divClass: c.radioClass
                    }), k = h.div, m = h.span, f(a, k, c), e(a, c, {
                        "click touchend": function() {
                            b.uniform.update(b(':radio[name="' + d(a, "name") + '"]'))
                        }
                    }), i(m, a, c), {
                        remove: x(a, c),
                        update: function() {
                            g(k, c), i(m, a, c), j(k, a, c)
                        }
                    }
                }
            }, {
                match: function(a) {
                    return !(!a.is("select") || r(a))
                },
                apply: function(a, c) {
                    var d, h, i, k;
                    return c.selectAutoWidth && w(a, function() {
                        k = a.width()
                    }), d = l(a, c, {
                        divClass: c.selectClass,
                        spanHtml: (a.find(":selected:first") || a.find("option:first")).html(),
                        spanWrap: "before"
                    }), h = d.div, i = d.span, c.selectAutoWidth ? w(a, function() {
                        v(b([i[0], h[0]]), {
                            display: "block"
                        }, function() {
                            var a;
                            a = i.outerWidth() - i.width(), h.width(k + a), i.width(k)
                        })
                    }) : h.addClass("fixedWidth"), f(a, h, c), e(a, c, {
                        change: function() {
                            i.html(a.find(":selected").html()), h.removeClass(c.activeClass)
                        },
                        "click touchend": function() {
                            var b = a.find(":selected").html();
                            i.html() !== b && a.trigger("change")
                        },
                        keyup: function() {
                            i.html(a.find(":selected").html())
                        }
                    }), t(i, c), {
                        remove: function() {
                            return i.remove(), a.unwrap().unbind(c.eventNamespace), a
                        },
                        update: function() {
                            c.selectAutoWidth ? (b.uniform.restore(a), a.uniform(c)) : (g(h, c), a[0].selectedIndex = a[0].selectedIndex, i.html(a.find(":selected").html()), j(h, a, c))
                        }
                    }
                }
            }, {
                match: function(a) {
                    return !(!a.is("select") || !r(a))
                },
                apply: function(a, b) {
                    var c;
                    return a.addClass(b.selectMultiClass), c = m(a, b), f(a, a, b), {
                        remove: function() {
                            a.removeClass(b.selectMultiClass), c && a.unwrap()
                        },
                        update: s
                    }
                }
            }, {
                match: function(a) {
                    return a.is("textarea")
                },
                apply: function(a, b) {
                    var c;
                    return a.addClass(b.textareaClass), c = m(a, b), f(a, a, b), {
                        remove: function() {
                            a.removeClass(b.textareaClass), c && a.unwrap()
                        },
                        update: s
                    }
                }
            }];
        p() && !q() && (y = !1), b.uniform = {
            defaults: {
                activeClass: "active",
                autoHide: !0,
                buttonClass: "button",
                checkboxClass: "checker",
                checkedClass: "checked",
                disabledClass: "disabled",
                eventNamespace: ".uniform",
                fileButtonClass: "action",
                fileButtonHtml: "Choose File",
                fileClass: "uploader",
                fileDefaultHtml: "No file selected",
                filenameClass: "filename",
                focusClass: "focus",
                hoverClass: "hover",
                idPrefix: "uniform",
                inputAddTypeAsClass: !0,
                inputClass: "uniform-input",
                radioClass: "radio",
                resetDefaultHtml: "Reset",
                resetSelector: !1,
                selectAutoWidth: !0,
                selectClass: "selector",
                selectMultiClass: "uniform-multiselect",
                submitDefaultHtml: "Submit",
                textareaClass: "uniform",
                useID: !0,
                wrapperClass: null
            },
            elements: []
        }, b.fn.uniform = function(c) {
            var d = this;
            return c = b.extend({}, b.uniform.defaults, c), z || (z = !0, n() && (y = !1)), y ? (c.resetSelector && b(c.resetSelector).mouseup(function() {
                a.setTimeout(function() {
                    b.uniform.update(d)
                }, 10)
            }), this.each(function() {
                var a, d, e, f = b(this);
                if (f.data("uniformed")) return void b.uniform.update(f);
                for (a = 0; a < A.length; a += 1)
                    if (d = A[a], d.match(f, c)) return e = d.apply(f, c), f.data("uniformed", e), void b.uniform.elements.push(f.get(0))
            })) : this
        }, b.uniform.restore = b.fn.uniform.restore = function(a) {
            a === c && (a = b.uniform.elements), b(a).each(function() {
                var a, c, d = b(this);
                c = d.data("uniformed"), c && (c.remove(), a = b.inArray(this, b.uniform.elements), a >= 0 && b.uniform.elements.splice(a, 1), d.removeData("uniformed"))
            })
        }, b.uniform.update = b.fn.uniform.update = function(a) {
            a === c && (a = b.uniform.elements), b(a).each(function() {
                var a, c = b(this);
                a = c.data("uniformed"), a && a.update(c, a.options)
            })
        }
    }(this, jQuery), ! function(a) {
        "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? module.exports = a() : window.noUiSlider = a()
    }(function() {
        "use strict";

        function a(a, b) {
            var c = document.createElement("div");
            return j(c, b), a.appendChild(c), c
        }

        function b(a) {
            return a.filter(function(a) {
                return !this[a] && (this[a] = !0)
            }, {})
        }

        function c(a, b) {
            return Math.round(a / b) * b
        }

        function d(a, b) {
            var c = a.getBoundingClientRect(),
                d = a.ownerDocument,
                e = d.documentElement,
                f = m();
            return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f.x = 0), b ? c.top + f.y - e.clientTop : c.left + f.x - e.clientLeft
        }

        function e(a) {
            return "number" == typeof a && !isNaN(a) && isFinite(a)
        }

        function f(a, b, c) {
            c > 0 && (j(a, b), setTimeout(function() {
                k(a, b)
            }, c))
        }

        function g(a) {
            return Math.max(Math.min(a, 100), 0)
        }

        function h(a) {
            return Array.isArray(a) ? a : [a]
        }

        function i(a) {
            a = String(a);
            var b = a.split(".");
            return b.length > 1 ? b[1].length : 0
        }

        function j(a, b) {
            a.classList ? a.classList.add(b) : a.className += " " + b
        }

        function k(a, b) {
            a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ")
        }

        function l(a, b) {
            return a.classList ? a.classList.contains(b) : new RegExp("\\b" + b + "\\b").test(a.className)
        }

        function m() {
            var a = void 0 !== window.pageXOffset,
                b = "CSS1Compat" === (document.compatMode || ""),
                c = a ? window.pageXOffset : b ? document.documentElement.scrollLeft : document.body.scrollLeft,
                d = a ? window.pageYOffset : b ? document.documentElement.scrollTop : document.body.scrollTop;
            return {
                x: c,
                y: d
            }
        }

        function n() {
            return window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            }
        }

        function o(a, b) {
            return 100 / (b - a)
        }

        function p(a, b) {
            return 100 * b / (a[1] - a[0])
        }

        function q(a, b) {
            return p(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0])
        }

        function r(a, b) {
            return b * (a[1] - a[0]) / 100 + a[0]
        }

        function s(a, b) {
            for (var c = 1; a >= b[c];) c += 1;
            return c
        }

        function t(a, b, c) {
            if (c >= a.slice(-1)[0]) return 100;
            var d, e, f, g, h = s(c, a);
            return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + q([d, e], c) / o(f, g)
        }

        function u(a, b, c) {
            if (c >= 100) return a.slice(-1)[0];
            var d, e, f, g, h = s(c, b);
            return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], r([d, e], (c - f) * o(f, g))
        }

        function v(a, b, d, e) {
            if (100 === e) return e;
            var f, g, h = s(e, a);
            return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : b[h - 1] ? a[h - 1] + c(e - a[h - 1], b[h - 1]) : e
        }

        function w(a, b, c) {
            var d;
            if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b)) throw new Error("noUiSlider: 'range' contains invalid value.");
            if (d = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !e(d) || !e(b[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
            c.xPct.push(d), c.xVal.push(b[0]), d ? c.xSteps.push(!isNaN(b[1]) && b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1]), c.xHighestCompleteStep.push(0)
        }

        function x(a, b, c) {
            if (!b) return !0;
            c.xSteps[a] = p([c.xVal[a], c.xVal[a + 1]], b) / o(c.xPct[a], c.xPct[a + 1]);
            var d = (c.xVal[a + 1] - c.xVal[a]) / c.xNumSteps[a],
                e = Math.ceil(Number(d.toFixed(3)) - 1),
                f = c.xVal[a] + c.xNumSteps[a] * e;
            c.xHighestCompleteStep[a] = f
        }

        function y(a, b, c, d) {
            this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = b, this.direction = c;
            var e, f = [];
            for (e in a) a.hasOwnProperty(e) && f.push([a[e], e]);
            for (f.length && "object" == typeof f[0][0] ? f.sort(function(a, b) {
                    return a[0][0] - b[0][0]
                }) : f.sort(function(a, b) {
                    return a[0] - b[0]
                }), e = 0; e < f.length; e++) w(f[e][1], f[e][0], this);
            for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++) x(e, this.xNumSteps[e], this)
        }

        function z(a, b) {
            if (!e(b)) throw new Error("noUiSlider: 'step' is not numeric.");
            a.singleStep = b
        }

        function A(a, b) {
            if ("object" != typeof b || Array.isArray(b)) throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            if (b.min === b.max) throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
            a.spectrum = new y(b, a.snap, a.dir, a.singleStep)
        }

        function B(a, b) {
            if (b = h(b), !Array.isArray(b) || !b.length) throw new Error("noUiSlider: 'start' option is incorrect.");
            a.handles = b.length, a.start = b
        }

        function C(a, b) {
            if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider: 'snap' option must be a boolean.")
        }

        function D(a, b) {
            if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider: 'animate' option must be a boolean.")
        }

        function E(a, b) {
            if (a.animationDuration = b, "number" != typeof b) throw new Error("noUiSlider: 'animationDuration' option must be a number.")
        }

        function F(a, b) {
            var c, d = [!1];
            if (b === !0 || b === !1) {
                for (c = 1; c < a.handles; c++) d.push(b);
                d.push(!1)
            } else {
                if (!Array.isArray(b) || !b.length || b.length !== a.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
                d = b
            }
            a.connect = d
        }

        function G(a, b) {
            switch (b) {
                case "horizontal":
                    a.ort = 0;
                    break;
                case "vertical":
                    a.ort = 1;
                    break;
                default:
                    throw new Error("noUiSlider: 'orientation' option is invalid.")
            }
        }

        function H(a, b) {
            if (!e(b)) throw new Error("noUiSlider: 'margin' option must be numeric.");
            if (0 !== b && (a.margin = a.spectrum.getMargin(b), !a.margin)) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
        }

        function I(a, b) {
            if (!e(b)) throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (a.limit = a.spectrum.getMargin(b), !a.limit || a.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")
        }

        function J(a, b) {
            switch (b) {
                case "ltr":
                    a.dir = 0;
                    break;
                case "rtl":
                    a.dir = 1;
                    break;
                default:
                    throw new Error("noUiSlider: 'direction' option was not recognized.")
            }
        }

        function K(a, b) {
            if ("string" != typeof b) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
            var c = b.indexOf("tap") >= 0,
                d = b.indexOf("drag") >= 0,
                e = b.indexOf("fixed") >= 0,
                f = b.indexOf("snap") >= 0,
                g = b.indexOf("hover") >= 0;
            if (e) {
                if (2 !== a.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                H(a, a.start[1] - a.start[0])
            }
            a.events = {
                tap: c || f,
                drag: d,
                fixed: e,
                snap: f,
                hover: g
            }
        }

        function L(a, b) {
            if (b !== !1)
                if (b === !0) {
                    a.tooltips = [];
                    for (var c = 0; c < a.handles; c++) a.tooltips.push(!0)
                } else {
                    if (a.tooltips = h(b), a.tooltips.length !== a.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                    a.tooltips.forEach(function(a) {
                        if ("boolean" != typeof a && ("object" != typeof a || "function" != typeof a.to)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")
                    })
                }
        }

        function M(a, b) {
            if (a.format = b, "function" == typeof b.to && "function" == typeof b.from) return !0;
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
        }

        function N(a, b) {
            if (void 0 !== b && "string" != typeof b && b !== !1) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
            a.cssPrefix = b
        }

        function O(a, b) {
            if (void 0 !== b && "object" != typeof b) throw new Error("noUiSlider: 'cssClasses' must be an object.");
            if ("string" == typeof a.cssPrefix) {
                a.cssClasses = {};
                for (var c in b) b.hasOwnProperty(c) && (a.cssClasses[c] = a.cssPrefix + b[c])
            } else a.cssClasses = b
        }

        function P(a, b) {
            if (b !== !0 && b !== !1) throw new Error("noUiSlider: 'useRequestAnimationFrame' option should be true (default) or false.");
            a.useRequestAnimationFrame = b
        }

        function Q(a) {
            var b, c = {
                margin: 0,
                limit: 0,
                animate: !0,
                animationDuration: 300,
                format: T
            };
            b = {
                step: {
                    r: !1,
                    t: z
                },
                start: {
                    r: !0,
                    t: B
                },
                connect: {
                    r: !0,
                    t: F
                },
                direction: {
                    r: !0,
                    t: J
                },
                snap: {
                    r: !1,
                    t: C
                },
                animate: {
                    r: !1,
                    t: D
                },
                animationDuration: {
                    r: !1,
                    t: E
                },
                range: {
                    r: !0,
                    t: A
                },
                orientation: {
                    r: !1,
                    t: G
                },
                margin: {
                    r: !1,
                    t: H
                },
                limit: {
                    r: !1,
                    t: I
                },
                behaviour: {
                    r: !0,
                    t: K
                },
                format: {
                    r: !1,
                    t: M
                },
                tooltips: {
                    r: !1,
                    t: L
                },
                cssPrefix: {
                    r: !1,
                    t: N
                },
                cssClasses: {
                    r: !1,
                    t: O
                },
                useRequestAnimationFrame: {
                    r: !1,
                    t: P
                }
            };
            var d = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                cssPrefix: "noUi-",
                cssClasses: {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    ltr: "ltr",
                    rtl: "rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                },
                useRequestAnimationFrame: !0
            };
            Object.keys(b).forEach(function(e) {
                if (void 0 === a[e] && void 0 === d[e]) {
                    if (b[e].r) throw new Error("noUiSlider: '" + e + "' is required.");
                    return !0
                }
                b[e].t(c, void 0 === a[e] ? d[e] : a[e])
            }), c.pips = a.pips;
            var e = [
                ["left", "top"],
                ["right", "bottom"]
            ];
            return c.style = e[c.dir][c.ort], c.styleOposite = e[c.dir ? 0 : 1][c.ort], c
        }

        function R(c, e, i) {
            function o(b, c) {
                var d = a(b, e.cssClasses.origin),
                    f = a(d, e.cssClasses.handle);
                return f.setAttribute("data-handle", c), d
            }

            function p(b, c) {
                return !!c && a(b, e.cssClasses.connect)
            }

            function q(a, b) {
                ba = [], ca = [], ca.push(p(b, a[0]));
                for (var c = 0; c < e.handles; c++) ba.push(o(b, c)), ha[c] = c, ca.push(p(b, a[c + 1]))
            }

            function r(b) {
                j(b, e.cssClasses.target), 0 === e.dir ? j(b, e.cssClasses.ltr) : j(b, e.cssClasses.rtl), 0 === e.ort ? j(b, e.cssClasses.horizontal) : j(b, e.cssClasses.vertical), aa = a(b, e.cssClasses.base)
            }

            function s(b, c) {
                return !!e.tooltips[c] && a(b.firstChild, e.cssClasses.tooltip)
            }

            function t() {
                var a = ba.map(s);
                Z("update", function(b, c, d) {
                    if (a[c]) {
                        var f = b[c];
                        e.tooltips[c] !== !0 && (f = e.tooltips[c].to(d[c])), a[c].innerHTML = f
                    }
                })
            }

            function u(a, b, c) {
                if ("range" === a || "steps" === a) return ia.xVal;
                if ("count" === a) {
                    var d, e = 100 / (b - 1),
                        f = 0;
                    for (b = [];
                        (d = f++ * e) <= 100;) b.push(d);
                    a = "positions"
                }
                return "positions" === a ? b.map(function(a) {
                    return ia.fromStepping(c ? ia.getStep(a) : a)
                }) : "values" === a ? c ? b.map(function(a) {
                    return ia.fromStepping(ia.getStep(ia.toStepping(a)))
                }) : b : void 0
            }

            function v(a, c, d) {
                function e(a, b) {
                    return (a + b).toFixed(7) / 1
                }
                var f = {},
                    g = ia.xVal[0],
                    h = ia.xVal[ia.xVal.length - 1],
                    i = !1,
                    j = !1,
                    k = 0;
                return d = b(d.slice().sort(function(a, b) {
                    return a - b
                })), d[0] !== g && (d.unshift(g), i = !0), d[d.length - 1] !== h && (d.push(h), j = !0), d.forEach(function(b, g) {
                    var h, l, m, n, o, p, q, r, s, t, u = b,
                        v = d[g + 1];
                    if ("steps" === c && (h = ia.xNumSteps[g]), h || (h = v - u), u !== !1 && void 0 !== v)
                        for (h = Math.max(h, 1e-7), l = u; l <= v; l = e(l, h)) {
                            for (n = ia.toStepping(l), o = n - k, r = o / a, s = Math.round(r), t = o / s, m = 1; m <= s; m += 1) p = k + m * t, f[p.toFixed(5)] = ["x", 0];
                            q = d.indexOf(l) > -1 ? 1 : "steps" === c ? 2 : 0, !g && i && (q = 0), l === v && j || (f[n.toFixed(5)] = [l, q]), k = n
                        }
                }), f
            }

            function w(a, b, c) {
                function d(a, b) {
                    var c = b === e.cssClasses.value,
                        d = c ? m : n,
                        f = c ? k : l;
                    return b + " " + d[e.ort] + " " + f[a]
                }

                function f(a, b, c) {
                    return 'class="' + d(c[1], b) + '" style="' + e.style + ": " + a + '%"'
                }

                function g(a, d) {
                    d[1] = d[1] && b ? b(d[0], d[1]) : d[1], i += "<div " + f(a, e.cssClasses.marker, d) + "></div>", d[1] && (i += "<div " + f(a, e.cssClasses.value, d) + ">" + c.to(d[0]) + "</div>")
                }
                var h = document.createElement("div"),
                    i = "",
                    k = [e.cssClasses.valueNormal, e.cssClasses.valueLarge, e.cssClasses.valueSub],
                    l = [e.cssClasses.markerNormal, e.cssClasses.markerLarge, e.cssClasses.markerSub],
                    m = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical],
                    n = [e.cssClasses.markerHorizontal, e.cssClasses.markerVertical];
                return j(h, e.cssClasses.pips), j(h, 0 === e.ort ? e.cssClasses.pipsHorizontal : e.cssClasses.pipsVertical), Object.keys(a).forEach(function(b) {
                    g(b, a[b])
                }), h.innerHTML = i, h
            }

            function x(a) {
                var b = a.mode,
                    c = a.density || 1,
                    d = a.filter || !1,
                    e = a.values || !1,
                    f = a.stepped || !1,
                    g = u(b, e, f),
                    h = v(c, b, g),
                    i = a.format || {
                        to: Math.round
                    };
                return fa.appendChild(w(h, d, i))
            }

            function y() {
                var a = aa.getBoundingClientRect(),
                    b = "offset" + ["Width", "Height"][e.ort];
                return 0 === e.ort ? a.width || aa[b] : a.height || aa[b]
            }

            function z(a, b, c, d) {
                var f = function(b) {
                        return !fa.hasAttribute("disabled") && !l(fa, e.cssClasses.tap) && (b = A(b, d.pageOffset), !(a === ea.start && void 0 !== b.buttons && b.buttons > 1) && (!d.hover || !b.buttons) && (b.calcPoint = b.points[e.ort], void c(b, d)))
                    },
                    g = [];
                return a.split(" ").forEach(function(a) {
                    b.addEventListener(a, f, !1), g.push([a, f])
                }), g
            }

            function A(a, b) {
                a.preventDefault();
                var c, d, e = 0 === a.type.indexOf("touch"),
                    f = 0 === a.type.indexOf("mouse"),
                    g = 0 === a.type.indexOf("pointer"),
                    h = a;
                if (0 === a.type.indexOf("MSPointer") && (g = !0), e) {
                    if (h.touches.length > 1) return !1;
                    c = a.changedTouches[0].pageX, d = a.changedTouches[0].pageY
                }
                return b = b || m(), (f || g) && (c = a.clientX + b.x, d = a.clientY + b.y), h.pageOffset = b, h.points = [c, d], h.cursor = f || g, h
            }

            function B(a) {
                var b = a - d(aa, e.ort),
                    c = 100 * b / y();
                return e.dir ? 100 - c : c
            }

            function C(a) {
                var b = 100,
                    c = !1;
                return ba.forEach(function(d, e) {
                    if (!d.hasAttribute("disabled")) {
                        var f = Math.abs(ga[e] - a);
                        f < b && (c = e, b = f)
                    }
                }), c
            }

            function D(a, b, c, d) {
                var e = c.slice(),
                    f = [!a, a],
                    g = [a, !a];
                d = d.slice(), a && d.reverse(), d.length > 1 ? d.forEach(function(a, c) {
                    var d = M(e, a, e[a] + b, f[c], g[c]);
                    d === !1 ? b = 0 : (b = d - e[a], e[a] = d)
                }) : f = g = [!0];
                var h = !1;
                d.forEach(function(a, d) {
                    h = R(a, c[a] + b, f[d], g[d]) || h
                }), h && d.forEach(function(a) {
                    E("update", a), E("slide", a)
                })
            }

            function E(a, b, c) {
                Object.keys(ka).forEach(function(d) {
                    var f = d.split(".")[0];
                    a === f && ka[d].forEach(function(a) {
                        a.call(da, ja.map(e.format.to), b, ja.slice(), c || !1, ga.slice())
                    })
                })
            }

            function F(a, b) {
                "mouseout" === a.type && "HTML" === a.target.nodeName && null === a.relatedTarget && H(a, b)
            }

            function G(a, b) {
                if (navigator.appVersion.indexOf("MSIE 9") === -1 && 0 === a.buttons && 0 !== b.buttonsProperty) return H(a, b);
                var c = (e.dir ? -1 : 1) * (a.calcPoint - b.startCalcPoint),
                    d = 100 * c / b.baseSize;
                D(c > 0, d, b.locations, b.handleNumbers)
            }

            function H(a, b) {
                var c = aa.querySelector("." + e.cssClasses.active);
                null !== c && k(c, e.cssClasses.active), a.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener)), document.documentElement.noUiListeners.forEach(function(a) {
                    document.documentElement.removeEventListener(a[0], a[1])
                }), k(fa, e.cssClasses.drag), P(), b.handleNumbers.forEach(function(a) {
                    E("set", a), E("change", a), E("end", a)
                })
            }

            function I(a, b) {
                if (1 === b.handleNumbers.length) {
                    var c = ba[b.handleNumbers[0]];
                    if (c.hasAttribute("disabled")) return !1;
                    j(c.children[0], e.cssClasses.active)
                }
                a.preventDefault(), a.stopPropagation();
                var d = z(ea.move, document.documentElement, G, {
                        startCalcPoint: a.calcPoint,
                        baseSize: y(),
                        pageOffset: a.pageOffset,
                        handleNumbers: b.handleNumbers,
                        buttonsProperty: a.buttons,
                        locations: ga.slice()
                    }),
                    f = z(ea.end, document.documentElement, H, {
                        handleNumbers: b.handleNumbers
                    }),
                    g = z("mouseout", document.documentElement, F, {
                        handleNumbers: b.handleNumbers
                    });
                if (document.documentElement.noUiListeners = d.concat(f, g), a.cursor) {
                    document.body.style.cursor = getComputedStyle(a.target).cursor, ba.length > 1 && j(fa, e.cssClasses.drag);
                    var h = function() {
                        return !1
                    };
                    document.body.noUiListener = h, document.body.addEventListener("selectstart", h, !1)
                }
                b.handleNumbers.forEach(function(a) {
                    E("start", a)
                })
            }

            function J(a) {
                a.stopPropagation();
                var b = B(a.calcPoint),
                    c = C(b);
                return c !== !1 && (e.events.snap || f(fa, e.cssClasses.tap, e.animationDuration), R(c, b, !0, !0), P(), E("slide", c, !0), E("set", c, !0), E("change", c, !0), E("update", c, !0), void(e.events.snap && I(a, {
                    handleNumbers: [c]
                })))
            }

            function K(a) {
                var b = B(a.calcPoint),
                    c = ia.getStep(b),
                    d = ia.fromStepping(c);
                Object.keys(ka).forEach(function(a) {
                    "hover" === a.split(".")[0] && ka[a].forEach(function(a) {
                        a.call(da, d)
                    })
                })
            }

            function L(a) {
                a.fixed || ba.forEach(function(a, b) {
                    z(ea.start, a.children[0], I, {
                        handleNumbers: [b]
                    })
                }), a.tap && z(ea.start, aa, J, {}), a.hover && z(ea.move, aa, K, {
                    hover: !0
                }), a.drag && ca.forEach(function(b, c) {
                    if (b !== !1 && 0 !== c && c !== ca.length - 1) {
                        var d = ba[c - 1],
                            f = ba[c],
                            g = [b];
                        j(b, e.cssClasses.draggable), a.fixed && (g.push(d.children[0]), g.push(f.children[0])), g.forEach(function(a) {
                            z(ea.start, a, I, {
                                handles: [d, f],
                                handleNumbers: [c - 1, c]
                            })
                        })
                    }
                })
            }

            function M(a, b, c, d, f) {
                return ba.length > 1 && (d && b > 0 && (c = Math.max(c, a[b - 1] + e.margin)), f && b < ba.length - 1 && (c = Math.min(c, a[b + 1] - e.margin))), ba.length > 1 && e.limit && (d && b > 0 && (c = Math.min(c, a[b - 1] + e.limit)), f && b < ba.length - 1 && (c = Math.max(c, a[b + 1] - e.limit))), c = ia.getStep(c), c = g(c), c !== a[b] && c
            }

            function N(a) {
                return a + "%"
            }

            function O(a, b) {
                ga[a] = b, ja[a] = ia.fromStepping(b);
                var c = function() {
                    ba[a].style[e.style] = N(b), S(a), S(a + 1)
                };
                window.requestAnimationFrame && e.useRequestAnimationFrame ? window.requestAnimationFrame(c) : c()
            }

            function P() {
                ha.forEach(function(a) {
                    var b = ga[a] > 50 ? -1 : 1,
                        c = 3 + (ba.length + b * a);
                    ba[a].childNodes[0].style.zIndex = c
                })
            }

            function R(a, b, c, d) {
                return b = M(ga, a, b, c, d), b !== !1 && (O(a, b), !0)
            }

            function S(a) {
                if (ca[a]) {
                    var b = 0,
                        c = 100;
                    0 !== a && (b = ga[a - 1]), a !== ca.length - 1 && (c = ga[a]), ca[a].style[e.style] = N(b), ca[a].style[e.styleOposite] = N(100 - c)
                }
            }

            function T(a, b) {
                null !== a && a !== !1 && ("number" == typeof a && (a = String(a)), a = e.format.from(a), a === !1 || isNaN(a) || R(b, ia.toStepping(a), !1, !1))
            }

            function U(a, b) {
                var c = h(a),
                    d = void 0 === ga[0];
                b = void 0 === b || !!b, c.forEach(T), e.animate && !d && f(fa, e.cssClasses.tap, e.animationDuration), ha.forEach(function(a) {
                    R(a, ga[a], !0, !1)
                }), P(), ha.forEach(function(a) {
                    E("update", a), null !== c[a] && b && E("set", a)
                })
            }

            function V(a) {
                U(e.start, a)
            }

            function W() {
                var a = ja.map(e.format.to);
                return 1 === a.length ? a[0] : a
            }

            function X() {
                for (var a in e.cssClasses) e.cssClasses.hasOwnProperty(a) && k(fa, e.cssClasses[a]);
                for (; fa.firstChild;) fa.removeChild(fa.firstChild);
                delete fa.noUiSlider
            }

            function Y() {
                return ga.map(function(a, b) {
                    var c = ia.getNearbySteps(a),
                        d = ja[b],
                        e = c.thisStep.step,
                        f = null;
                    e !== !1 && d + e > c.stepAfter.startValue && (e = c.stepAfter.startValue - d), f = d > c.thisStep.startValue ? c.thisStep.step : c.stepBefore.step !== !1 && d - c.stepBefore.highestStep, 100 === a ? e = null : 0 === a && (f = null);
                    var g = ia.countStepDecimals();
                    return null !== e && e !== !1 && (e = Number(e.toFixed(g))), null !== f && f !== !1 && (f = Number(f.toFixed(g))), [f, e]
                })
            }

            function Z(a, b) {
                ka[a] = ka[a] || [], ka[a].push(b), "update" === a.split(".")[0] && ba.forEach(function(a, b) {
                    E("update", b)
                })
            }

            function $(a) {
                var b = a && a.split(".")[0],
                    c = b && a.substring(b.length);
                Object.keys(ka).forEach(function(a) {
                    var d = a.split(".")[0],
                        e = a.substring(d.length);
                    b && b !== d || c && c !== e || delete ka[a]
                })
            }

            function _(a, b) {
                var c = W(),
                    d = ["margin", "limit", "range", "animate", "snap", "step", "format"];
                d.forEach(function(b) {
                    void 0 !== a[b] && (i[b] = a[b])
                });
                var f = Q(i);
                d.forEach(function(b) {
                    void 0 !== a[b] && (e[b] = f[b])
                }), f.spectrum.direction = ia.direction, ia = f.spectrum, e.margin = f.margin, e.limit = f.limit, ga = [], U(a.start || c, b)
            }
            var aa, ba, ca, da, ea = n(),
                fa = c,
                ga = [],
                ha = [],
                ia = e.spectrum,
                ja = [],
                ka = {};
            if (fa.noUiSlider) throw new Error("Slider was already initialized.");
            return r(fa), q(e.connect, aa), da = {
                destroy: X,
                steps: Y,
                on: Z,
                off: $,
                get: W,
                set: U,
                reset: V,
                __moveHandles: function(a, b, c) {
                    D(a, b, ga, c)
                },
                options: i,
                updateOptions: _,
                target: fa,
                pips: x
            }, L(e.events), U(e.start), e.pips && x(e.pips), e.tooltips && t(), da
        }

        function S(a, b) {
            if (!a.nodeName) throw new Error("noUiSlider.create requires a single element.");
            var c = Q(b, a),
                d = R(a, c, b);
            return a.noUiSlider = d, d
        }
        y.prototype.getMargin = function(a) {
            var b = this.xNumSteps[0];
            if (b && a % b) throw new Error("noUiSlider: 'limit' and 'margin' must be divisible by step.");
            return 2 === this.xPct.length && p(this.xVal, a)
        }, y.prototype.toStepping = function(a) {
            return a = t(this.xVal, this.xPct, a)
        }, y.prototype.fromStepping = function(a) {
            return u(this.xVal, this.xPct, a)
        }, y.prototype.getStep = function(a) {
            return a = v(this.xPct, this.xSteps, this.snap, a)
        }, y.prototype.getNearbySteps = function(a) {
            var b = s(a, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[b - 2],
                    step: this.xNumSteps[b - 2],
                    highestStep: this.xHighestCompleteStep[b - 2]
                },
                thisStep: {
                    startValue: this.xVal[b - 1],
                    step: this.xNumSteps[b - 1],
                    highestStep: this.xHighestCompleteStep[b - 1]
                },
                stepAfter: {
                    startValue: this.xVal[b - 0],
                    step: this.xNumSteps[b - 0],
                    highestStep: this.xHighestCompleteStep[b - 0]
                }
            }
        }, y.prototype.countStepDecimals = function() {
            var a = this.xNumSteps.map(i);
            return Math.max.apply(null, a)
        }, y.prototype.convert = function(a) {
            return this.getStep(this.toStepping(a))
        };
        var T = {
            to: function(a) {
                return void 0 !== a && a.toFixed(2)
            },
            from: Number
        };
        return {
            create: S
        }
    }),
    function() {
        "use strict";

        function a(a) {
            return a.split("").reverse().join("")
        }

        function b(a, b) {
            return a.substring(0, b.length) === b
        }

        function c(a, b) {
            return a.slice(-1 * b.length) === b
        }

        function d(a, b, c) {
            if ((a[b] || a[c]) && a[b] === a[c]) throw new Error(b)
        }

        function e(a) {
            return "number" == typeof a && isFinite(a)
        }

        function f(a, b) {
            var c = Math.pow(10, b);
            return (Math.round(a * c) / c).toFixed(b)
        }

        function g(b, c, d, g, h, i, j, k, l, m, n, o) {
            var p, q, r, s = o,
                t = "",
                u = "";
            return i && (o = i(o)), !!e(o) && (b !== !1 && 0 === parseFloat(o.toFixed(b)) && (o = 0), o < 0 && (p = !0, o = Math.abs(o)), b !== !1 && (o = f(o, b)), o = o.toString(), o.indexOf(".") !== -1 ? (q = o.split("."), r = q[0], d && (t = d + q[1])) : r = o, c && (r = a(r).match(/.{1,3}/g), r = a(r.join(a(c)))), p && k && (u += k), g && (u += g), p && l && (u += l), u += r, u += t, h && (u += h), m && (u = m(u, s)), u)
        }

        function h(a, d, f, g, h, i, j, k, l, m, n, o) {
            var p, q = "";
            return n && (o = n(o)), !(!o || "string" != typeof o) && (k && b(o, k) && (o = o.replace(k, ""), p = !0), g && b(o, g) && (o = o.replace(g, "")), l && b(o, l) && (o = o.replace(l, ""), p = !0), h && c(o, h) && (o = o.slice(0, -1 * h.length)), d && (o = o.split(d).join("")), f && (o = o.replace(f, ".")), p && (q += "-"), q += o, q = q.replace(/[^0-9\.\-.]/g, ""), "" !== q && (q = Number(q), j && (q = j(q)), !!e(q) && q))
        }

        function i(a) {
            var b, c, e, f = {};
            for (b = 0; b < l.length; b += 1)
                if (c = l[b], e = a[c], void 0 === e) "negative" !== c || f.negativeBefore ? "mark" === c && "." !== f.thousand ? f[c] = "." : f[c] = !1 : f[c] = "-";
                else if ("decimals" === c) {
                if (!(e >= 0 && e < 8)) throw new Error(c);
                f[c] = e
            } else if ("encoder" === c || "decoder" === c || "edit" === c || "undo" === c) {
                if ("function" != typeof e) throw new Error(c);
                f[c] = e
            } else {
                if ("string" != typeof e) throw new Error(c);
                f[c] = e
            }
            return d(f, "mark", "thousand"), d(f, "prefix", "negative"), d(f, "prefix", "negativeBefore"), f
        }

        function j(a, b, c) {
            var d, e = [];
            for (d = 0; d < l.length; d += 1) e.push(a[l[d]]);
            return e.push(c), b.apply("", e)
        }

        function k(a) {
            return this instanceof k ? void("object" == typeof a && (a = i(a), this.to = function(b) {
                return j(a, g, b)
            }, this.from = function(b) {
                return j(a, h, b)
            })) : new k(a)
        }
        var l = ["decimals", "thousand", "mark", "prefix", "postfix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
        window.wNumb = k
    }();
var jQ = jQuery.noConflict(!0),
    BCSfFilter = function() {
        this.prefix = "pf", this.queryParams = {}, this.internalClick = !1, this.imutableFilterTree = ["page", "sort", "limit", "display", "_"], this.hasFilterOptionParam = !1, this.scrollData = [], this.shopName = "", this.shopDomain = "", this.fileUrl = "", this.defaultCurrency = "", this.moneyFormat = "", this.collectionId = "", this.collectionTags = "", this.defaultSorting = "", this.swatchExtension = "", this.productAvailable = !0, this.variantAvailable = !0, this.loadProductFirst = !1, this.searchTermKey = "q", this.class = {
            filterSearchText: "bc-sf-filter-search-text", filterOption: "bc-sf-filter-option-block", filterBlockTitle: "bc-sf-filter-block-title", filterBlockContent: "bc-sf-filter-block-content", filterOptionItem: "bc-sf-filter-option-item", filterOptionLabel: "bc-sf-filter-option-label", filterOptionRange: "bc-sf-filter-option-range", filterRefineWrapper: "bc-sf-filter-selection-wrapper", filterSelectedItems: "bc-sf-filter-selected-items", productItemImages: "bc-sf-filter-product-item-images", productItemThumb: "bc-sf-filter-product-item-thumb", productItemVariantImage: "bc-sf-filter-product-item-variant-image", productItemOptions: "bc-sf-filter-product-item-options", clearButton: "bc-sf-filter-clear", clearAllButton: "bc-sf-filter-clear-all", sprite: "bc-sf-filter-sprite", collectionHeader: "bc-sf-filter-collection-header", collectionDescription: "bc-sf-filter-collection-description", searchBox: "bc-sf-search-box", searchResultHeader: "bc-sf-search-result-header", searchResultNumber: "bc-sf-search-result-number", searchSuggestion: "bc-sf-search-suggestion", searchSuggestionWrapper: "bc-sf-search-suggestion-wrapper", searchSuggestionHeader: "bc-sf-search-suggestion-header", searchSuggestionItem: "bc-sf-search-suggestion-item"
        }, this.selector = {
            filterWrapper: "#bc-sf-filter-wrapper",
            filterTree: "#bc-sf-filter-tree",
            filterTreeMobile: "#bc-sf-filter-tree-mobile",
            filterTreeMobileButton: "#bc-sf-filter-tree-mobile-button",
            products: "#bc-sf-filter-products",
            topShowLimit: "#bc-sf-filter-top-show-limit",
            topSorting: "#bc-sf-filter-top-sorting",
            topDisplayType: "#bc-sf-filter-top-display-type",
            bottomPagination: "#bc-sf-filter-bottom-pagination",
            loadMore: "#bc-sf-filter-load-more",
            loadMoreButtonContainer: "#bc-sf-filter-load-more-button-container",
            loadMoreLoading: "#bc-sf-filter-load-more-loading",
            topNotification: "#bc-sf-filter-top-notification",
            breadcrumb: "#bc-sf-filter-breadcrumb",
            collectionHeader: "#bc-sf-filter-collection-header",
            collectionDescription: "#bc-sf-filter-collection-description",
            scrollToTop: "#bc-sf-filter-scroll-to-top"
        }, this.template = {
            filterOptionWrapper: '<div class="{{class.filterOption}} {{blockTypeClass}}" id="{{blockId}}"><div class="{{class.filterBlockTitle}}"><h3><span>{{blockTitle}}</span></h3>{{clearButton}}</div><div class="{{class.filterBlockContent}}">{{blockContent}}</div></div>',
            filterOptionLabel: '<span class="bc-sf-filter-option-value">{{itemValue}}</span><span class="bc-sf-filter-option-amount">{{itemAmount}}</span>',
            filterOptionSingleList: '<ul class="bc-sf-filter-option-single-list">{{itemList}}</ul>',
            filterOptionSingleListItem: '<li><a href="{{itemLink}}" data-id="{{itemParentId}}" data-value="{{itemValue}}" data-parent-label="{{itemParentLabel}}" {{itemCollectionScope}} onClick="{{itemFunc}}" class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{itemSelected}}">{{itemLabel}}</a></li>',
            filterOptionSubCategory: '<ul class="bc-sf-filter-option-single-list">{{itemList}}</ul>',
            filterOptionSubCategoryItem: '<li><a href="{{itemLink}}" data-id="{{itemParentId}}" data-value="{{itemValue}}" data-parent-label="{{itemParentLabel}}" {{itemCollectionScope}} onClick="{{itemFunc}}" class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{itemSelected}} bc-sf-filter-option-main-cat">{{itemLabel}}</a><ul>{{itemSubCategory}}</ul></li>',
            filterOptionSubCategorySubItem: '<li><a href="{{itemLink}}" data-id="{{itemParentId}}" data-value="{{itemValue}}" onClick="{{itemFunc}}" class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{itemSelected}} bc-sf-filter-option-sub-cat">{{itemLabel}}</a></li>',
            filterOptionMultipleList: '<ul class="bc-sf-filter-option-multiple-list">{{itemList}}</ul>',
            filterOptionMultipleListItem: '<li><input type="checkbox" data-id="{{itemParentId}}" data-value="{{itemValue}}" data-parent-label="{{itemParentLabel}}" onClick="{{itemFunc}}" class="{{itemSelected}}" /><a href="{{itemLink}}" data-id="{{itemParentId}}" data-value="{{itemValue}}" data-parent-label="{{itemParentLabel}}" onClick="{{itemFunc}}" class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{itemSelected}}">{{itemLabel}}</a></li>',
            filterOptionBox: '<ul class="bc-sf-filter-option-box">{{itemList}}</ul>',
            filterOptionBoxItem: '<li><a href="{{itemLink}}" data-id="{{itemParentId}}" data-value="{{itemValue}}" data-parent-label="{{itemParentLabel}}" onClick="{{itemFunc}}" class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{itemSelected}}">{{itemLabel}}</a></li>',
            filterOptionRange: '<div><div class="bc-sf-filter-option-range-amount" id="{{rangeAmountId}}"><input class="bc-sf-filter-option-range-amount-min" type="text" /><div class="bc-sf-filter-option-range-amount-split"> - </div><input class="bc-sf-filter-option-range-amount-max" type="text" /></div><div class="bc-sf-filter-option-range-slider" id="{{rangeSliderId}}" data-id="{{itemParentId}}" data-value="{{itemValue}}" data-parent-label="{{itemParentLabel}}"></div></div>',
            filterOptionRange2: '<div><div class="bc-sf-filter-option-range-amount" id="{{rangeAmountId}}">{{itemLabel}}</div><div class="bc-sf-filter-option-range-slider" id="{{rangeSliderId}}" data-id="{{itemParentId}}" data-value="{{itemValue}}" data-parent-label="{{itemParentLabel}}" ></div></div>',
            filterOptionAdvancedRange: '<div><div class="bc-sf-filter-option-range-slider" id="{{rangeSliderId}}" data-id="{{itemParentId}}" data-value="{{itemValue}}" data-parent-label="{{itemParentLabel}}"></div><span id="bc-sf-filter-{{itemParentId}}-lower" class="bc-sf-filter-range-value-lower"></span><span id="bc-sf-filter-{{itemParentId}}-upper" class="bc-sf-filter-range-value-upper"></span></div>',
            filterOptionSwatch: '<ul class="bc-sf-filter-option-swatch">{{itemList}}</ul>',
            filterOptionSwatchItem: '<li><a href="{{itemLink}}" style="background-color: {{itemValue}}; background-image: url({{itemImageValue}}); border: {{itemBorder}}" data-id="{{itemParentId}}" data-value="{{itemValue}}" title="{{itemValue}}" data-parent-label="{{itemParentLabel}}" onClick="{{itemFunc}}" class="{{itemSelected}}"></a></li>',
            filterOptionRating: '<ul class="bc-sf-filter-option-rating">{{itemList}}</ul>',
            filterOptionRatingItem: '<li><a href="{{itemLink}}" data-id="{{itemParentId}}" data-value="{{itemValue}}" data-parent-label="{{itemParentLabel}}" onClick="{{itemFunc}}" class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{itemSelected}}">{{itemLabel}}</span></a></li>',
            filterOptionRatingStar: "{{itemStars}}<span>& Up</span>",
            filterOptionRatingIconStar: '<i class="bc-sf-filter-icon-star">&#xe801;</i>',
            filterOptionRatingIconStarActive: '<i class="bc-sf-filter-icon-star bc-sf-filter-icon-star-active ">&#xe800;</i>',
            filterRefineWrapper: '<div class="{{class.filterRefineWrapper}}"><div class="{{class.filterBlockTitle}}"><h3><span>{{label.refine}}</span></h3>{{clearAllButton}}</div><div class="{{class.filterSelectedItems}}">{{selectedItems}}</div></div>',
            filterRefineItem: '<div class="selected-item {{class.filterOptionLabel}}"><a href="{{itemLink}}"><span class="selected-type"><span>{{itemType}}</span>: <strong>{{itemLabel}}</strong></span><span class="{{class.clearButton}}"></span></a></div>',
            filterTreeMobileButton: '<button id="bc-sf-filter-tree-mobile-button" type="button">{{label}}</button>',
            loadMoreButton: '<div id="bc-sf-filter-load-more-button-container"><a href="javascript:;" class="bc-sf-filter-load-more-button">{{label.loadMore}}</a></div>',
            loadMoreLoading: '<div id="bc-sf-filter-load-more-loading">{{loadingIcon}}</div>',
            loading: '<div id="bc-sf-filter-loading"></div>',
            error: '<div id="bc-sf-filter-error">{{content}}<div class="btn-wrapper"><button>Close</button></div></div>',
            noResult: '<div id="bc-sf-filter-message"><p><em>{{content}}</em></p></div>',
            scrollToTop: '<a href="javascript:;" id="bc-sf-filter-scroll-to-top"><span class="' + this.class.sprite + '">Back to top</span></a>'
        }, this.defaultSettings = {
            general: {
                limit: 16,
                showSingleOption: !0,
                activeFilterScrollbar: !0,
                activeScrollToTop: !1,
                styleScrollToTop: "style1",
                showLoading: !1,
                showLoadMoreLoading: !0,
                positionShowInfiniteLoading: 700,
                showRefineBy: !0,
                showOutOfStockOption: !1,
                showFilterOptionCount: !0,
                capitalizeFilterOptionValues: !0,
                collapseOnPCByDefault: !1,
                collapseOnMobileByDefault: !1,
                keepScrollState: !0,
                keepToggleState: !1,
                paginationType: "default",
                sortingList: ["relevance", "best-selling", "manual", "price-ascending", "price-descending", "title-ascending", "title-descending", "created-descending", "created-ascending", "sale-descending"],
                hasBestSellingSort: !1,
                showLimitList: "4,8,12,16",
                defaultDisplay: "grid",
                rangeStyle: "style1",
                sliderStep: 1,
                sliderRange: 4,
                removePriceDecimal: !1,
                roundPriceSlider: !1,
                enableSliderRuler: !1,
                sortManualValues: !1,
                productAvailable: !1,
                variantAvailable: !1,
                availableAfterFiltering: !1,
                showUnavailableSelection: !1,
                loadProductFirst: !1,
                numberFilterTree: 1,
                vendorParam: "pf_v_vendor",
                priceMode: "",
                imageExtension: ["jpg", "JPG", "png", "PNG", "jpeg", "JPEG", "gif", "GIF"],
                hasBorderColorSwatch: !0,
                colorOptionsArr: ["color", "colour", "couleur", "farge"],
                borderColorSwatchItem: "#cbcbcb",
                bgRefineByButton: "",
                borderColorRefineByButton: "",
                colorRefineByButton: "",
                fontSizeRefineByButton: "",
                colorFilterOptionTitle: "",
                colorFilterOptionItem: "",
                colorClearButton: "",
                fontSizeFilterOptionTitle: "",
                fontSizeFilterOptionItem: "",
                fontSizeClearButton: ""
            },
            search: {
                suggestionBlocks: ["suggestions", "products", "did_you_mean"],
                suggestionMinLength: 1,
                suggestionPopularLimit: 3,
                suggestionProductLimit: 5,
                suggestionDidYouMeanLimit: 3,
                suggestionPosition: "right",
                suggestionWidth: "auto",
                showSuggestionProductVendor: !0,
                showSuggestionProductPrice: !0,
                showSuggestionProductSalePrice: !0,
                showSuggestionProductImage: !0,
                showSuggestionProductSku: !1,
                productAvailable: !1,
                removePriceDecimal: !1,
                highlightSuggestionResult: !0,
                openProductNewTab: !1,
                suggestionMode: "prod",
                termKey: "q",
                fontSizeSuggestionHeader: "",
                bgSuggestionHeader: "",
                colorSuggestionHeader: ""
            },
            basic: {
                productsPerRow: 4,
                productsPerRowMobile: 3,
                showPrice: !0,
                showVendor: !0,
                showSaleLabel: !0,
                showSoldOutLabel: !0,
                activeImageSwap: !0,
                showSorting: !0,
                showLimit: !0,
                colorSaleLabel: "#e95144",
                borderColorSaleLabel: "#e95144",
                bgSaleLabel: "#fff",
                colorSoldOutLabel: "#d2d8db",
                borderColorSoldOutLabel: "#d2d8db",
                bgSoldOutLabel: "#fff"
            },
            filterOptionValueSort: {
                collection: "label-asc",
                vendor: "key-asc",
                product_type: "key-asc",
                tag: "key-asc",
                opt: "key-asc"
            },
            label: {}
        }, window.suggestionCallback = function() {}
    };
BCSfFilter.prototype.init = function() {
    this.initAppConfig(), this.initLabel(), this.initGlobalVariable(), this.initHistory()
}, BCSfFilter.prototype.initFilter = function() {
    this.updateApiParams(!1), this.getFilterData("init")
}, BCSfFilter.prototype.initAppConfig = function() {
    this.shopName = bcSfFilterConfig.shop.name, this.shopDomain = bcSfFilterConfig.shop.domain, this.fileUrl = bcSfFilterConfig.general.file_url, this.defaultCurrency = bcSfFilterConfig.shop.currency, this.moneyFormat = bcSfFilterConfig.shop.money_format, this.collectionId = bcSfFilterConfig.general.collection_id, this.collectionTags = bcSfFilterConfig.general.collection_tags, this.defaultSorting = bcSfFilterConfig.general.default_sort_by.trim(), this.swatchExtension = bcSfFilterConfig.general.swatch_extension
}, BCSfFilter.prototype.initGlobalVariable = function() {
    this.productAvailable = this.getSettingValue("general.productAvailable"), this.variantAvailable = this.getSettingValue("general.variantAvailable"), this.getSettingValue("general.productAndVariantAvailable") && (this.productAvailable = !0, this.variantAvailable = !0), this.loadProductFirst = this.getSettingValue("general.loadProductFirst"), this.searchTermKey = this.getSettingValue("search.termKey")
}, BCSfFilter.prototype.initLabel = function() {
    this.defaultSettings.label = {
        refine: this.getLabel("label", "refine", "Refine By"),
        refineMobile: this.getLabel("label", "refine_mobile", "Refine By"),
        clear: this.getLabel("label", "clear", "Clear"),
        clearAll: this.getLabel("label", "clear_all", "Clear All"),
        apply: this.getLabel("label", "apply", "Apply"),
        loadMore: this.getLabel("label", "load_more", "Load more Products"),
        showLimit: this.getLabel("label", "show_limit", "Show"),
        sorting: {
            "best-selling": this.getLabel("label", "sorting_best_selling", "Best Selling"),
            manual: this.getLabel("label", "sorting_featured", "Featured"),
            "price-ascending": this.getLabel("label", "sorting_price_ascending", "Lowest Price"),
            "price-descending": this.getLabel("label", "sorting_price_descending", "Highest Price"),
            "title-ascending": this.getLabel("label", "sorting_title_ascending", "Alphabetically, A-Z"),
            "title-descending": this.getLabel("label", "sorting_title_descending", "Alphabetically, Z-A"),
            "created-descending": this.getLabel("label", "sorting_date_descending", "Date, New to Old"),
            "created-ascending": this.getLabel("label", "sorting_date_ascending", "Date, Old to New"),
            "sale-descending": this.getLabel("label", "sorting_sale_descending", "% Off"),
            relevance: this.getLabel("label", "sorting_relevance", "Relevance")
        },
        search: {
            generalTitle: this.getLabel("label", "search_general_title", "Search"),
            resultHeader: this.getLabel("label", "search_result_header", 'Search Results for "{{ terms }}"'),
            resultEmpty: this.getLabel("label", "search_result_empty", "Your search for {{ terms }} didn't match any results"),
            resultNumber: this.getLabel("label", "search_result_number", 'Showing {{ count }} results for "{{ terms }}"')
        },
        suggestion: {
            popularHeader: this.getLabel("label_suggestion", "suggestion_popular_header", "Popular Suggestions"),
            productHeader: this.getLabel("label_suggestion", "suggestion_product_header", "Products"),
            didYouMeanHeader: this.getLabel("label_suggestion", "suggestion_did_you_mean_header", "Did you mean"),
            viewAll: this.getLabel("label_suggestion", "suggestion_view_all", "View all results")
        },
        error: {
            noFilterResult: this.getLabel("label", "error_no_filter_result", "Sorry, no products matched your selection")
        },
        basic: {
            sale: this.getLabel("label_basic", "sale", "Sale"),
            soldOut: this.getLabel("label_basic", "sold_out", "Sold Out"),
            from: this.getLabel("label_basic", "from", "from")
        }
    }
}, BCSfFilter.prototype.initHistory = function() {
    var a = this;
    History.Adapter.bind(window, "statechange", function() {
        a.internalClick || (a.updateApiParams(!1), a.getFilterData("history")), a.internalClick = !1
    })
}, BCSfFilter.prototype.destroy = function() {
    bcsffilter = void 0
}, BCSfFilter.prototype.updateApiParams = function(a) {
    var b = this.getFilterParams(a);
    b = this.setDefaultParams(b), this.queryParams = b
}, BCSfFilter.prototype.getFilterParams = function(a) {
    var b = {};
    if (a = "undefined" == typeof a || a === !1 ? window.location.search : "?" + a.split("?")[1], a.length)
        for (var c, d = 0, e = a.substr(1).split("&"); d < e.length; d++)
            if (c = e[d].split("="), c.length > 1) {
                var f = decodeURIComponent(c[0]),
                    g = decodeURIComponent(c[1]);
                b.hasOwnProperty(f) ? b[f].push(g) : b[f] = this.imutableFilterTree.indexOf(f) > -1 || "q" == f ? g : [g], f.indexOf("pf_") > -1 && (this.hasFilterOptionParam = !0)
            } return b
}, BCSfFilter.prototype.setDefaultParams = function(a) {
    return a.shop = a.hasOwnProperty("shop") ? a.shop : this.shopDomain, a.page = a.hasOwnProperty("page") ? parseInt(a.page) : 1, "default" == this.getSettingValue("general.paginationType") ? a.limit = a.hasOwnProperty("limit") ? a.limit : this.getSettingValue("general.limit") : a.limit = (a.hasOwnProperty("limit") ? a.limit : this.getSettingValue("general.limit")) * a.page, this.getSettingValue("general.hasBestSellingSort") === !1 && (this.defaultSorting = "best-selling" == this.defaultSorting ? "manual" : this.defaultSorting), this.isSearchPage() && (this.defaultSorting = "relevance"), a.sort = a.hasOwnProperty("sort") ? a.sort : this.defaultSorting, a.display = a.hasOwnProperty("display") ? a.display : this.getSettingValue("general.defaultDisplay"), a
}, BCSfFilter.prototype.changeAddressBar = function(a, b, c) {
    var d = "?" + a.split("?")[1],
        e = d.substr(1).split("&");
    1 != e.length && this.checkExistFilterOptionParam() !== !1 || (a = e.length > 1 && this.checkExistFilterOptionParam() === !1 ? a.replace("&_=" + this.prefix, "") : a.replace("?_=" + this.prefix, ""));
    var f = document.title;
    "undefined" != typeof b && "undefined" != typeof c && "collection" == b && (f = this.textify(c) + " - " + this.shopName), History.pushState({
        param: this.queryParams
    }, f, a)
}, BCSfFilter.prototype.prepareRequestParams = function(a) {
    var b = mergeObject({}, this.queryParams);
    if (b.collection_scope = parseInt(this.collectionId), "history" == a && (History.getState().data.hasOwnProperty("param") && History.getState().data.param.hasOwnProperty("collection_scope") ? b.collection_scope = this.collectionId = parseInt(History.getState().data.param.collection_scope) : b.collection_scope = this.collectionId = parseInt(bcSfFilterConfig.general.collection_id)), 1 == this.getSettingValue("general.availableAfterFiltering") ? (b.product_available = this.checkExistFilterOptionParam() === !0 || this.productAvailable, b.variant_available = this.checkExistFilterOptionParam() === !0 || this.variantAvailable) : (b.product_available = this.productAvailable, b.variant_available = this.variantAvailable), "undefined" != typeof this.collectionTags && null !== this.collectionTags && (b.tag = this.collectionTags[0]), this.getSettingValue("general.showOutOfStockOption") && (b.zero_options = !0), b.build_filter_tree = !("undefined" != typeof a && this.imutableFilterTree.indexOf(a) > -1), b.check_cache = this.checkExistFilterOptionParam() === !1 && 1 == b.page && b.sort == this.defaultSorting && b.limit == this.getSettingValue("general.limit") && !this.isSearchPage(), "" != this.getSettingValue("general.priceMode") && (b.price_mode = this.getSettingValue("general.priceMode")), this.isVendorPage() && b.hasOwnProperty("q")) {
        var c = this.getSettingValue("general.vendorParam");
        b[c] = b.q.replace("+", " ")
    }
    b = this.prepareSearchParams(b, a), this.queryParams = b
}, BCSfFilter.prototype.prepareSearchParams = function(a, b) {
    return this.isSearchPage() && (a.q = getParam(this.searchTermKey), "q" != this.searchTermKey && delete a[this.searchTermKey]), a
}, BCSfFilter.prototype.beforeGetFilterData = function(a) {
    var b = this;
    this.getSettingValue("general.keepScrollState") && jQ("." + this.class.filterOption).each(function(a) {
        if (jQ(this).find(".jspScrollable").length > 0) {
            var c = jQ(this).find(".jspScrollable").eq(0).data("jsp");
            "undefined" != typeof c && b.scrollData.push({
                id: jQ(this).attr("id"),
                position: c.getContentPositionY()
            })
        }
    })
}, BCSfFilter.prototype.getFilterData = function(a, b) {
    var b = "undefined" != typeof b ? b : 0, c = this;

    this.showLoading(), this.beforeGetFilterData(a), this.prepareRequestParams(a), this.queryParams.callback = "BCSfFilterCallback",this.queryParams.event_type = a;
    var d = this.isSearchPage() ? this.getApiUrl("search") : this.getApiUrl("filter"),
        e = document.createElement("script");
    e.type = "text/javascript";
    var f = (new Date).getTime();

    // -------- BEGIN CUSTOM CODE -> STATE SELECTOR -------- //
    var allowedTags = getAllowedTagsByUserState() // state-selector-scripts.liquid
    var shouldFilter = isBeerPage() // state-selector-scripts.liquid
    var addBeerTags = shouldFilter && (allowedTags.length > 0) // state-selector-scripts.liquid
    if(addBeerTags) {
        var isFullRestricted = isBeerFullRestricted() // state-selector-scripts.liquid
        this.queryParams["pf_t_tag[]"] =  isFullRestricted ? fullRestrictedStates.join(',') : allowedTags
        this.queryParams["check_cache"] = false
    }
    // -------- END CUSTOM CODE -> STATE SELECTOR -------- //

    e.src = d + "?t=" + f + "&" + jQ.param(this.queryParams), e.async = !0, e.addEventListener("error", function(a) {
        this.remove(), b < 3 ? (b++, c.getFilterData("resend", b)) : c.showError("Oops, we cannot fetch products at this moment. Please try again later.")
    }), document.getElementsByTagName("head")[0].appendChild(e), e.onload = function() {
        this.remove()
    }
}, BCSfFilter.prototype.afterGetFilterData = function(a, b) {
    this.hideLoading(), ["infinite", "load_more"].indexOf(this.getSettingValue("general.paginationType")) > -1 && this.getSettingValue("general.showLoadMoreLoading") && this.getSettingValue("general.showLoading") === !1 && this.hideLoadMoreLoading(), "load_more" == this.getSettingValue("general.paginationType") && (a.products.length < this.queryParams.limit ? jQ(this.getSelector("loadMore")).hide() : (jQ(this.getSelector("loadMore")).show(), jQ(this.getSelector("loadMoreButtonContainer")).show())), a.hasOwnProperty("errorMessage") ? this.showError("Oops, we cannot fetch products at this moment. Please try again later.") : (this.catchError(a, b), this.buildAll(a, this.queryParams.build_filter_tree, b))
}, BCSfFilter.prototype.catchError = function(a, b) {
    if (a.total_product <= 0 && ("page" != b || "default" == this.getSettingValue("general.paginationType"))) {
        if (this.checkExistFilterOptionParam() && this.getSettingValue("general.loadProductFirst")) {
            if (this.isSearchPage()) jQ(this.getSelector("products")).html("");
            else {
                var c = this.getTemplate("noResult").replace(/{{content}}/g, this.getSettingValue("label.error.noFilterResult"));
                jQ(this.getSelector("products")).html(c)
            }
            jQ(this.getSelector("bottomPagination")).html(""), jQ(this.getSelector("topShowLimit")).html(""), jQ(this.getSelector("topSorting")).html("")
        }
    } else;
}, BCSfFilter.prototype.buildAll = function(a, b, c) {
    b === !0 && a.hasOwnProperty("filter") && (this.buildFilterTree(a.filter.options), this.getSettingValue("general.showRefineBy") && this.buildFilterSelection(a), this.buildFilterTreeMobileButton(), this.buildAdditionalFilterEvent()), a.total_product > 0 && (this.buildProductList(a.products, c), "default" == this.getSettingValue("general.paginationType") ? this.buildPagination(a.total_product) : "load_more" == this.getSettingValue("general.paginationType") && this.buildLoadMoreButton(a.total_product), this.buildToolbar(), this.buildToolbarEvent(a), this.buildAdditionalElements(a, c), this.buildScrollToTop(), jQ(this.selector.filterWrapper).show(), jQ(this.selector.topNotification).length > 0 && jQ(this.selector.topNotification).html("")), "collection" == c && this.buildPageInfo(a), this.buildFilterStyle(), this.isSearchPage() && (this.buildSearchResultHeader(a), this.buildSearchResultNumber(a)), this.selectFilter = !1
}, BCSfFilter.prototype.prepareFilterOptionData = function(a) {
    return a
}, BCSfFilter.prototype.removeVendorOptionInVendorPage = function(a, b) {
    var c = this,
        d = a.filter(function(a) {
            return a.filterOptionId == c.getSettingValue("general.vendorParam")
        });
    if (this.isVendorPage() && "undefined" != typeof d[0]) {
        var e = this.findIndexArray(this.getSettingValue("general.vendorParam"), a, "filterOptionId");
        a.splice(e, 1)
    }
    return a
}, BCSfFilter.prototype.beforeBuildFilterTree = function(a, b) {
    return jQ(this.selector.filterTree + b).html(""), a = this.removeVendorOptionInVendorPage(a, b)
}, BCSfFilter.prototype.buildFilterTree = function(a) {
    for (var b = this, c = 1; c <= this.getSettingValue("general.numberFilterTree"); c++) {
        var d = 1 == c ? "" : c;
        jQ(this.selector.filterTree + d).length > 0 && (a = this.beforeBuildFilterTree(a, d), jQ.each(a, function(a, c) {
            if ("active" == c.status && (c = b.prepareFilterOptionData(c), b.checkShowFilterOption(c))) switch (c.displayType) {
                case "list":
                    "single" == c.selectType ? b.buildFilterOptionSingleList(c, d) : b.buildFilterOptionMultipleList(c, d);
                    break;
                case "sub_category":
                    b.buildFilterOptionSubCategory(c, d);
                    break;
                case "box":
                    b.buildFilterOptionBox(c, d);
                    break;
                case "range":
                    "price" == c.filterType ? b.buildFilterOptionRange(c, d) : b.buildFilterOptionAdvancedRange(c, d);
                    break;
                case "swatch":
                    b.buildFilterOptionSwatch(c, d);
                    break;
                case "rating":
                    b.buildFilterOptionRating(c, d)
            }
        }), this.afterBuildFilterTree(a, d))
    }
}, BCSfFilter.prototype.afterBuildFilterTree = function(a, b) {
    jQ(this.selector.filterTree + b).children().wrapAll('<div id="bc-sf-filter-options-wrapper"></div>'), this.buildFilterScrollbar(), this.collapseFilterOption()
}, BCSfFilter.prototype.buildFilterTreeMobileButton = function() {
    var a = this.getTemplate("filterTreeMobileButton").replace(/{{label}}/g, this.getSettingValue("label.refineMobile"));
    jQ(this.selector.filterTreeMobile).html(a), this.buildFilterTreeMobileButtonEvent(), this.buildFilterTreeMobileButtonStyle()
}, BCSfFilter.prototype.buildFilterTreeMobileButtonStyle = function() {
    jQ(this.selector.filterTreeMobileButton).css({
        background: this.getSettingValue("general.bgRefineByButton"),
        border: "1px solid " + this.getSettingValue("general.borderColorRefineByButton"),
        color: this.getSettingValue("general.colorRefineByButton"),
        "font-size": this.getSettingValue("general.fontSizeRefineByButton")
    })
}, BCSfFilter.prototype.addFilterTreeItem = function(a, b, c, d) {
    var d = "undefined" != typeof d ? d : this.selector.filterTree;
    "undefined" != typeof b && "before" == b ? jQ(d + c).prepend(a) : jQ(d + c).append(a)
}, BCSfFilter.prototype.buildFilterTreeClass = function(a) {
    for (var b in this.class) {
        var c = new RegExp("{{class." + b + "}}", "g");
        a = a.replace(c, this.class[b])
    }
    return a
}, BCSfFilter.prototype.buildFilterStyle = function() {
    jQ("." + this.class.filterBlockTitle).find("h3").css({
        "font-size": this.getSettingValue("general.fontSizeFilterOptionTitle"),
        color: this.getSettingValue("general.colorFilterOptionTitle")
    }), jQ("." + this.class.filterBlockContent).find("a").css({
        "font-size": this.getSettingValue("general.fontSizeFilterOptionItem"),
        color: this.getSettingValue("general.colorFilterOptionItem")
    }), jQ("." + this.class.clearButton + ", ." + this.class.clearAllButton).css({
        "font-size": this.getSettingValue("general.fontSizeClearButton"),
        color: this.getSettingValue("general.colorClearButton")
    })
}, BCSfFilter.prototype.buildFilterOption = function(a, b, c) {
    var d = b.label,
        e = this.getTemplate("filterOptionWrapper");
    e = e.replace(/{{blockTitle}}/g, d), e = e.replace(/{{blockTypeClass}}/g, this.class.filterOption + "-" + b.displayType), e = e.replace(/{{blockId}}/g, this.class.filterOption + "-" + this.slugify(d) + c), e = e.replace(/{{blockContent}}/g, a);
    var f = "";
    if (this.queryParams.hasOwnProperty(b.filterOptionId) && this.queryParams[b.filterOptionId] && (f = '<a href="javascript:;" class="' + this.class.clearButton + '" onClick="clearFilterOption(event, this, \'' + b.filterOptionId + "')\">" + this.getSettingValue("label.clear") + "</a>"), e = e.replace(/{{clearButton}}/g, f), e = this.buildFilterTreeClass(e), "" !== e) {
        var g = jQ(e);
        g.attr("data-type", b.filterType).attr("data-display-type", b.displayType).attr("data-select-type", b.selectType).attr("data-id", b.filterOptionId).attr("data-title", d).attr("data-prefix", b.prefix);
        var h = !!b.hasOwnProperty("isCollapsePC") && b.isCollapsePC,
            i = !!b.hasOwnProperty("isCollapseMobile") && b.isCollapseMobile;
        this.getSettingValue("general.collapseOnPCByDefault") && (h = !0), this.getSettingValue("general.collapseOnMobileByDefault") && (i = !0), g.attr("data-collapse-pc", h).attr("data-collapse-mobile", i), "price" == b.filterType && "range" == b.displayType && g.find("." + this.class.filterBlockTitle).find("span").append(" (" + this.getCurrency() + ")"), this.addFilterTreeItem(jQ(g)[0].outerHTML, "after", c)
    }
}, BCSfFilter.prototype.buildFilterOptionSingleList = function(a, b) {
    ("all" == a.valueType || "all" != a.valueType && this.getSettingValue("general.sortManualValues")) && a.hasOwnProperty("values") && (a.values = this.sortFilterOptionValue(a.values, a.filterType));
    var c = "",
        d = a.filterType,
        e = a.displayType,
        f = a.selectType,
        g = a.filterOptionId,
        h = a.label;
    for (var i in a.values) c += this.buildFilterOptionSingleListData(d, g, h, e, f, a.values[i], a);
    if ("" != c) {
        var j = this.getTemplate("filterOptionSingleList");
        j = j.replace(/{{itemList}}/g, c), this.buildFilterOption(j, a, b)
    }
}, BCSfFilter.prototype.buildFilterOptionSingleListData = function(a, b, c, d, e, f, g) {
    var h = !!g.hasOwnProperty("keepValuesStatic") && g.keepValuesStatic;
    if (null !== f && f.hasOwnProperty("key") && (f.hasOwnProperty("doc_count") && f.doc_count > 0 || 1 == h || this.getSettingValue("general.showOutOfStockOption"))) {
        var i = f.key,
            j = f.key;
        if ("collection" == a) {
            i = f.label, j = f.handle;
            var k = f.key
        }
        i = this.buildFilterOptionLabel(i, f.doc_count, g);
        var l = this.getTemplate("filterOptionSingleListItem");
        return l = l.replace(/{{itemLabel}}/g, i), l = l.replace(/{{itemLink}}/g, this.buildFilterOptionLink(b, j, a, d, e, h)), l = l.replace(/{{itemParentId}}/g, b).replace(/{{itemValue}}/g, encodeURIParamValue(j)).replace(/{{itemParentLabel}}/g, c).replace(/{{itemFunc}}/g, "onInteractWithFilterOptionValue(event, this, '" + a + "', '" + d + "', '" + e + "', '" + h + "')"), l = "undefined" != typeof k ? l.replace(/{{itemCollectionScope}}/g, "data-collection-scope = " + k) : l.replace(/{{itemCollectionScope}}/g, ""), l = this.checkFilterOptionSelected(b, j, a, d) ? l.replace(/{{itemSelected}}/g, "selected") : l.replace(/{{itemSelected}}/g, "")
    }
    return ""
}, BCSfFilter.prototype.buildFilterOptionSubCategory = function(a, b) {
    "all" == a.valueType && a.hasOwnProperty("values") && (a.values = this.sortFilterOptionValue(a.values, a.filterType));
    var c = "",
        d = a.filterType,
        e = a.displayType,
        f = a.selectType,
        g = a.filterOptionId,
        h = a.label;
    for (var i in a.values) c += this.buildFilterOptionSubCategoryData(d, g, h, e, f, a.values[i], a);
    if ("" != c) {
        var j = this.getTemplate("filterOptionSubCategory");
        j = j.replace(/{{itemList}}/g, c), this.buildFilterOption(j, a, b)
    }
}, BCSfFilter.prototype.buildFilterOptionSubCategoryData = function(a, b, c, d, e, f, g) {
    var h = !!g.hasOwnProperty("keepValuesStatic") && g.keepValuesStatic;
    if (null !== f && f.hasOwnProperty("key") && (f.hasOwnProperty("doc_count") && f.doc_count > 0 || 1 == h || this.getSettingValue("general.showOutOfStockOption"))) {
        var i = f.key,
            j = f.key;
        i = f.label, j = f.handle;
        var k = f.key;
        i = this.buildFilterOptionLabel(i, f.doc_count, g);
        var l = this.getTemplate("filterOptionSubCategoryItem");
        l = l.replace(/{{itemLabel}}/g, i), l = l.replace(/{{itemLink}}/g, this.buildFilterOptionLink(b, j, a, d, e, h)), l = l.replace(/{{itemParentId}}/g, b).replace(/{{itemValue}}/g, encodeURIParamValue(j)).replace(/{{itemParentLabel}}/g, c).replace(/{{itemFunc}}/g, "onInteractWithFilterOptionValue(event, this, '" + a + "', '" + d + "', '" + e + "', '" + h + "')"), l = "undefined" != typeof k ? l.replace(/{{itemCollectionScope}}/g, "data-collection-scope = " + k) : l.replace(/{{itemCollectionScope}}/g, "");
        var m = "";
        if (f.hasOwnProperty("tags"))
            for (var n in f.tags) {
                var o = this.buildFilterOptionLabel(f.tags[n], 0, g),
                    p = j + "/" + f.tags[n],
                    q = this.getTemplate("filterOptionSubCategorySubItem");
                q = q.replace(/{{itemLabel}}/g, o).replace(/{{itemParentId}}/g, b).replace(/{{itemValue}}/g, encodeURIParamValue(o)).replace(/{{itemParentLabel}}/g, c).replace(/{{itemFunc}}/g, "onInteractWithFilterOptionValue(event, this, '" + a + "', '" + d + "', '" + e + "')"), q = q.replace(/{{itemLink}}/g, this.buildFilterOptionLink("pf_cs_collection", p, a, d, e)), q = this.checkFilterOptionSelected("pf_cs_collection", p, a, d) ? q.replace(/{{itemSelected}}/g, "selected") : q.replace(/{{itemSelected}}/g, ""), m += q
            }
        return l = l.replace(/{{itemSubCategory}}/g, m), l = this.checkFilterOptionSelected(b, j, a, d) ? l.replace(/{{itemSelected}}/g, "selected") : l.replace(/{{itemSelected}}/g, "")
    }
    return ""
}, BCSfFilter.prototype.buildFilterOptionMultipleList = function(a, b) {
    ("all" == a.valueType || "all" != a.valueType && this.getSettingValue("general.sortManualValues")) && a.hasOwnProperty("values") && (a.values = this.sortFilterOptionValue(a.values, a.filterType)), "percent_sale" == a.filterType && a.values.reverse();
    var c = "",
        d = a.filterType,
        e = a.filterOptionId,
        f = a.label,
        g = a.displayType,
        h = a.selectType;
    for (var i in a.values) c += this.buildFilterOptionMultipleListData(d, e, f, g, h, a.values[i], a);
    if ("" != c) {
        var j = this.getTemplate("filterOptionMultipleList");
        j = j.replace(/{{itemList}}/g, c), this.buildFilterOption(j, a, b)
    }
}, BCSfFilter.prototype.buildFilterOptionMultipleListData = function(a, b, c, d, e, f, g) {
    if (null !== f && f.hasOwnProperty("key") && (f.hasOwnProperty("doc_count") && f.doc_count > 0 || this.getSettingValue("general.showOutOfStockOption"))) {
        var h = f.key,
            i = f.key;
        "price" == a || "percent_sale" == a ? (i = i.replace(/\*/g, "").replace(/\-/g, ":"), h = "price" == a ? this.getPriceLabel(i) : this.getPercentSaleLabel(i)) : "stock" == a && (h = f.label, i = "in-stock" == f.key), h = this.buildFilterOptionLabel(h, f.doc_count, g);
        var j = this.getTemplate("filterOptionMultipleListItem");
        return j = j.replace(/{{itemLabel}}/g, h).replace(/{{itemParentId}}/g, b).replace(/{{itemValue}}/g, encodeURIParamValue(i)).replace(/{{itemParentLabel}}/g, c).replace(/{{itemFunc}}/g, "onInteractWithFilterOptionValue(event, this, '" + a + "', '" + d + "', '" + e + "')"), j = j.replace(/{{itemLink}}/g, this.buildFilterOptionLink(b, i, a, d, e)), j = this.checkFilterOptionSelected(b, i, a, d) ? j.replace(/{{itemSelected}}/g, "selected") : j.replace(/{{itemSelected}}/g, "")
    }
    return ""
}, BCSfFilter.prototype.buildFilterOptionBox = function(a, b) {
    ("all" == a.valueType || "all" != a.valueType && this.getSettingValue("general.sortManualValues")) && a.hasOwnProperty("values") && (a.values = this.sortFilterOptionValue(a.values, a.filterType));
    var c = "",
        d = a.filterType,
        e = a.displayType,
        f = a.selectType,
        g = a.filterOptionId,
        h = a.label;
    for (var i in a.values) c += this.buildFilterOptionBoxData(d, g, h, e, f, a.values[i], a);
    if ("" != c) {
        var j = this.getTemplate("filterOptionBox");
        j = j.replace(/{{itemList}}/g, c), this.buildFilterOption(j, a, b)
    }
}, BCSfFilter.prototype.buildFilterOptionBoxData = function(a, b, c, d, e, f, g) {
    if (null !== f && f.hasOwnProperty("key") && (f.hasOwnProperty("doc_count") && f.doc_count > 0 || this.getSettingValue("general.showOutOfStockOption"))) {
        var h = f.key,
            i = f.key;
        h = this.buildFilterOptionLabel(h, f.doc_count, g);
        var j = this.getTemplate("filterOptionBoxItem");
        return j = j.replace(/{{itemLabel}}/g, h).replace(/{{itemParentId}}/g, b).replace(/{{itemValue}}/g, encodeURIParamValue(i)).replace(/{{itemParentLabel}}/g, c).replace(/{{itemFunc}}/g, "onInteractWithFilterOptionValue(event, this, '" + a + "', '" + d + "', '" + e + "')"), j = j.replace(/{{itemLink}}/g, this.buildFilterOptionLink(b, i, a, d, e)), j = this.checkFilterOptionSelected(b, i, a, d) ? j.replace(/{{itemSelected}}/g, "selected") : j.replace(/{{itemSelected}}/g, "")
    }
    return ""
}, BCSfFilter.prototype.buildFilterOptionSwatch = function(a, b) {
    var c = "",
        d = a.filterType,
        e = a.displayType,
        f = a.selectType,
        g = a.filterOptionId,
        h = a.label;
    for (var i in a.values) c += this.buildFilterOptionSwatchData(d, g, h, e, f, a.values[i], a);
    if ("" != c) {
        var j = this.getTemplate("filterOptionSwatch");
        j = j.replace(/{{itemList}}/g, c), this.buildFilterOption(j, a, b)
    }
}, BCSfFilter.prototype.buildFilterOptionSwatchData = function(a, b, c, d, e, f, g) {
    var h = this.fileUrl.substring(0, this.fileUrl.lastIndexOf("?")),
        a = g.filterType,
        d = g.displayType,
        e = g.selectType,
        b = g.filterOptionId,
        c = g.label;
    if (null !== f && f.hasOwnProperty("key") && (f.hasOwnProperty("doc_count") && f.doc_count > 0 || this.getSettingValue("general.showOutOfStockOption"))) {
        var i = f.key,
            j = f.key,
            i = this.buildFilterOptionLabel(i, f.doc_count, g),
            k = "color";
        (b.indexOf("pf_opt_") > -1 || b.indexOf("pf_t_") > -1) && (k = b.replace("pf_t_", "").replace("pf_opt_", ""));
        var l = this.getTemplate("filterOptionSwatchItem");
        l = l.replace(/{{itemLabel}}/g, i).replace(/{{itemParentId}}/g, b).replace(/{{itemValue}}/g, j).replace(/{{itemParentLabel}}/g, c).replace(/{{itemFunc}}/g, "onInteractWithFilterOptionValue(event, this, '" + a + "', '" + d + "', '" + e + "')"), l = l.replace(/{{itemImageValue}}/g, h + k + "-" + this.slugify(j) + "." + this.swatchExtension + "?v=" + (new Date).getTime()), l = l.replace(/{{itemLink}}/g, this.buildFilterOptionLink(b, j, a, d, e));
        var m = "none";
        return this.getSettingValue("general.hasBorderColorSwatch") && this.getSettingValue("general.colorOptionsArr").indexOf(k) > -1 && (m = "1px solid " + this.getSettingValue("general.borderColorSwatchItem")), l = l.replace(/{{itemBorder}}/g, m), l = this.checkFilterOptionSelected(b, j, a, d) ? l.replace(/{{itemSelected}}/g, "selected") : l.replace(/{{itemSelected}}/g, "")
    }
    return ""
}, BCSfFilter.prototype.buildFilterOptionRange = function(a, b) {
    if (a && a.hasOwnProperty("values") && 2 == Object.keys(a.values).length) {
        var c = (a.filterType, a.displayType, a.selectType, a.filterOptionId),
            d = a.label,
            e = a.values;
        if (e.hasOwnProperty("min") && e.hasOwnProperty("max")) {
            var f = parseFloat(e.min),
                g = parseFloat(e.max);
            if (this.getSettingValue("general.roundPriceSlider") && (f = Math.floor(f), g = Math.ceil(g, 100)), f < g && g - f > 1) {
                var h = this.class.filterOptionRange,
                    i = h + "-slider-" + c + b,
                    j = h + "-amount-" + c + b,
                    k = f,
                    l = g;
                if (this.queryParams.hasOwnProperty(c)) {
                    var m = this.queryParams[c][0].split(":");
                    m && 2 == m.length && (k = m[0], l = m[1])
                }
                var n = "style2" == this.getSettingValue("general.rangeStyle") ? this.getTemplate("filterOptionRange2") : this.getTemplate("filterOptionRange"),
                    o = this.formatMoney(100 * k) + " - " + this.formatMoney(100 * l),
                    p = k + ":" + l;
                n = n.replace(/{{itemLabel}}/g, o).replace(/{{itemParentId}}/g, c).replace(/{{itemValue}}/g, p).replace(/{{itemParentLabel}}/g, d), n = n.replace(/{{rangeAmountId}}/g, j).replace(/{{rangeSliderId}}/g, i);
                var q = jQ(n);
                k != f || l != g ? q.append('<input type="hidden" class="' + h + '-check" value="1" />') : q.append('<input type="hidden" class="' + h + '-check" />'), this.buildFilterOption(jQ(q)[0].outerHTML, a, b), this.buildFilterOptionRangeSlider(i, j, k, l, f, g, a)
            } else this.buildFilterOption("", a, b), jQ("#" + this.class.filterOption + "-" + this.slugify(a.label) + b).hide()
        }
    }
}, BCSfFilter.prototype.buildFilterOptionRangeSlider = function(a, b, c, d, e, f, g) {
    var h = this,
        i = document.getElementById(a),
        j = this.getSettingValue("general.sliderRange");
    if (j > 0) {
        for (var k = [], l = 0; l < j; l++) k.push(l * (100 / j));
        k.push(100), noUiSlider.create(i, {
            start: [c, d],
            connect: !0,
            behaviour: "tap",
            animate: !0,
            animationDuration: 300,
            step: h.getSettingValue("general.sliderStep"),
            range: {
                min: e,
                max: f
            },
            pips: {
                mode: "positions",
                values: k,
                density: j
            }
        }), this.getSettingValue("general.enableSliderRuler") || jQ("#" + a).addClass("no-ruler"), jQ("#" + a).addClass("has-pips"), i.noUiSlider.on("update", function() {
            var b = jQ("#" + a + " .noUi-pips").find(".noUi-marker").last();
            b.hasClass("noUi-marker-normal") && (b.removeClass("noUi-marker-normal"), b.addClass("noUi-marker-large"), b.after('<div class="noUi-value noUi-value-horizontal noUi-value-large" style="left: 100.00000%">' + Math.ceil(f) + "</div>"))
        })
    } else noUiSlider.create(i, {
        start: [c, d],
        connect: !0,
        behaviour: "tap",
        animate: !0,
        animationDuration: 300,
        step: h.getSettingValue("general.sliderStep"),
        range: {
            min: e,
            max: f
        }
    });
    if (i.noUiSlider.on("slide", function(a, c) {
            h.slideEvent(a, b)
        }), "style1" == this.getSettingValue("general.rangeStyle")) {
        var m = this.class.filterOptionRange + "-amount-min",
            n = this.class.filterOptionRange + "-amount-max",
            o = this.formatMoney(100 * c),
            p = this.formatMoney(100 * d);
        this.getSettingValue("general.removePriceDecimal") ? (o = this.removeCurrencySymbol(o, !0), p = this.removeCurrencySymbol(p, !0)) : (o = this.removeCurrencySymbol(o), p = this.removeCurrencySymbol(p)), jQ("#" + b).find("." + m).val(o), jQ("#" + b).find("." + n).val(p), i.noUiSlider.on("set", function(b, c) {
            b[0] == e && b[1] == f ? (jQ("." + h.class.filterOptionRange + "-check").val("0"), jQ("#" + a).attr("data-value", "")) : jQ("#" + a).attr("data-value", parseFloat(b[0]) + ":" + parseFloat(b[1]));
            var d = "undefined" != typeof event ? event : new Event("build");
            onInteractWithFilterOptionValue(d, jQ(this.target), g.filterType, g.displayType, g.selectType)
        }), jQ("#" + b).on("change", "." + m, function() {
            var a = parseFloat(jQ(this).val().replace(/,/g, "")),
                c = parseFloat(jQ("#" + b + " ." + n).val().replace(/,/g, ""));
            i.noUiSlider.set([a, c])
        }), jQ("#" + b).on("change", "." + n, function() {
            var a = parseFloat(jQ(this).val().replace(/,/g, "")),
                c = parseFloat(jQ("#" + b + " ." + m).val().replace(/,/g, ""));
            i.noUiSlider.set([c, a])
        })
    }
}, BCSfFilter.prototype.slideEvent = function(a, b) {
    if (jQ("." + this.class.filterOptionRange + "-check").val("1"), "style2" == this.getSettingValue("general.rangeStyle")) jQ("#" + b).html(this.formatMoney(a[0]) + " - " + this.formatMoney(a[1]));
    else {
        var c = this.formatMoney(a[0]),
            d = this.formatMoney(a[1]);
        this.getSettingValue("general.removePriceDecimal") ? (c = this.removeCurrencySymbol(c, !0), d = this.removeCurrencySymbol(d, !0)) : (c = this.removeCurrencySymbol(c), d = this.removeCurrencySymbol(d)), jQ("#" + b).find("." + this.class.filterOptionRange + "-amount-min").val(c), jQ("#" + b).find("." + this.class.filterOptionRange + "-amount-max").val(d)
    }
}, BCSfFilter.prototype.buildFilterOptionAdvancedRange = function(a, b) {}, BCSfFilter.prototype.buildFilterOptionRating = function(a, b) {
    var c = "",
        d = a.filterType,
        e = a.displayType,
        f = a.selectType,
        g = a.filterOptionId,
        h = a.label;
    a.values.reverse();
    for (var i in a.values) i > 0 && (c += this.buildFilterOptionRatingData(d, g, h, e, f, a.values[i], a));
    if ("" != c) {
        var j = this.getTemplate("filterOptionRating");
        j = j.replace(/{{itemList}}/g, c), this.buildFilterOption(j, a, b)
    }
}, BCSfFilter.prototype.buildFilterOptionRatingData = function(a, b, c, d, e, f, g) {
    if (null !== f && f.hasOwnProperty("key") && f.hasOwnProperty("doc_count") && f.doc_count > 0) {
        var h = parseInt(f.key.replace("-*", "")),
            i = this.buildRatingStars(f.from),
            j = this.getTemplate("filterOptionRatingStar").replace(/{{itemStars}}/g, i);
        j = this.buildFilterOptionLabel(j, f.doc_count, g);
        var k = this.getTemplate("filterOptionRatingItem");
        return k = k.replace(/{{itemLabel}}/g, j).replace(/{{itemParentId}}/g, b).replace(/{{itemValue}}/g, encodeURIParamValue(h)).replace(/{{itemParentLabel}}/g, c).replace(/{{itemFunc}}/g, "onInteractWithFilterOptionValue(event, this, '" + a + "', '" + d + "', '" + e + "')"), k = k.replace(/{{itemLink}}/g, this.buildFilterOptionLink(b, h, a, d, e)), k = this.checkFilterOptionSelected(b, h, a, d) ? k.replace(/{{itemSelected}}/g, "selected") : k.replace(/{{itemSelected}}/g, "")
    }
    return ""
}, BCSfFilter.prototype.buildRatingStars = function(a) {
    for (var b = "", c = 1; c <= 5; c++) b += c <= a ? this.getTemplate("filterOptionRatingIconStarActive") : this.getTemplate("filterOptionRatingIconStar");
    return b
}, BCSfFilter.prototype.buildFilterOptionLabel = function(a, b, c) {
    var a = this.customizeFilterOptionLabel(a, c.prefix), d = this.getTemplate("filterOptionLabel").replace(/{{itemValue}}/g, a);
    return this.getSettingValue("general.showFilterOptionCount") && "box" != c.displayType && c.keepValuesStatic !== !0 && (b > 0 && 0 == this.getSettingValue("general.showOutOfStockOption") || 1 == this.getSettingValue("general.showOutOfStockOption")) ? d.replace(/{{itemAmount}}/g, "(" + b + ")") : d.replace(/{{itemAmount}}/g, "")
}, BCSfFilter.prototype.customizeFilterOptionLabel = function(a, b) {
    return "undefined" != typeof b && null !== b && b !== !1 && (b = b.replace(/\\/g, ""), a = a.replace(b, "").trim()), this.getSettingValue("general.capitalizeFilterOptionValues") && (a = capitalize(a)), a
}, BCSfFilter.prototype.buildFilterScrollbar = function(a) {
    var b = this.getSettingValue("general.activeFilterScrollbar");
    if (1 == b ? "undefined" != typeof a ? jQ(a)[0].scrollHeight > jQ(a)[0].clientHeight && jQ(a).jScrollPane({
            contentWidth: "0px"
        }) : jQ("." + this.class.filterOption + ":not(." + this.class.filterOption + "-range) ." + this.class.filterBlockContent).each(function() {
            jQ(this)[0].scrollHeight > jQ(this)[0].clientHeight && jQ(this).jScrollPane({
                contentWidth: "0px"
            })
        }) : "browser" == b ? jQ("." + this.class.filterOption + ":not(." + this.class.filterOption + "-range) ." + this.class.filterBlockContent).css("overflow-y", "auto") : "undefined" == typeof a && jQ("." + this.class.filterOption + ":not(." + this.class.filterOption + "-range) ." + this.class.filterBlockContent).css("max-height", "none"), this.getSettingValue("general.keepScrollState") && 1 == b && this.hasOwnProperty("scrollData") && this.scrollData.length > 0)
        for (var c in this.scrollData) {
            var d = this.scrollData[c];
            if (jQ("#" + d.id).find(".jspScrollable").length > 0) {
                var e = jQ("#" + d.id).find(".jspScrollable").eq(0).data("jsp");
                e.scrollToY(parseInt(d.position))
            }
        }
}, BCSfFilter.prototype.collapseFilterOption = function() {
    var a = this;
    0 == jQ(".bc-sf-filter-option-open-list").length && jQ("body").append('<input type="hidden" class="bc-sf-filter-option-open-list" />'), 0 == jQ(".bc-sf-filter-option-close-list").length && jQ("body").append('<input type="hidden" class="bc-sf-filter-option-close-list" />');
    var b = "" != jQ(".bc-sf-filter-option-open-list").val() ? jQ(".bc-sf-filter-option-open-list").val().split(",") : [],
        c = "" != jQ(".bc-sf-filter-option-close-list").val() ? jQ(".bc-sf-filter-option-close-list").val().split(",") : [];
    0 == b.length && 0 == c.length && jQ("." + this.class.filterOption).each(function() {
        var d = !1;
        a.isMobile() ? "true" == jQ(this).attr("data-collapse-mobile") && (d = !0) : "true" == jQ(this).attr("data-collapse-pc") && (d = !0);
        var e = jQ(this).closest("." + a.class.filterOption).attr("data-id");
        d ? c.indexOf(e) == -1 && (c.push(e), b.length > 0 && b.indexOf(e) > -1 && b.splice(b.indexOf(e), 1)) : b.indexOf(e) == -1 && (b.push(e), c.length > 0 && c.indexOf(e) > -1 && c.splice(c.indexOf(e), 1))
    }), jQ(".bc-sf-filter-option-open-list").val(b.join(",")), jQ(".bc-sf-filter-option-close-list").val(c.join(",")), jQ("." + this.class.filterOption).each(function() {
        var d = jQ(this).closest("." + a.class.filterOption).attr("data-id");
        c.indexOf(d) > -1 ? (jQ(this).find("." + a.class.filterBlockTitle + " h3 span").addClass("up"), jQ(this).find("." + a.class.filterBlockContent).hide()) : b.indexOf(d) > -1 && (jQ(this).find("." + a.class.filterBlockTitle + " h3 span").removeClass("up"), jQ(this).find("." + a.class.filterBlockContent).show())
    })
}, BCSfFilter.prototype.checkShowFilterOption = function(a) {
    if (a.hasOwnProperty("values") && 0 == a.values.length) return !1;
    if (0 == this.getSettingValue("general.showSingleOption") && "range" != a.displayType) {
        if (a.hasOwnProperty("values") && a.values.length > 1) {
            var b = 0;
            for (var c in a.values)
                if (a.values[c].doc_count > 0 && b++, b > 1) return !0
        }
        return !1
    }
    return !0
}, BCSfFilter.prototype.buildFilterSelection = function(a) {
    var b = this.buildFilterSelectionData(a);
    if ("" !== b) {
        var c = this.getTemplate("filterRefineWrapper");
        c = c.replace(/{{label.refine}}/g, this.getSettingValue("label.refine")), c = c.replace(/{{selectedItems}}/g, b), c = this.buildFilterTreeClass(c), c = c.replace(/{{clearAllButton}}/g, '<a href="javascript:;" class="' + this.class.clearAllButton + '">' + this.getSettingValue("label.clearAll") + "</a>");
        for (var d = 1; d <= this.getSettingValue("general.numberFilterTree"); d++) {
            var e = 1 == d ? "" : d;
            this.addFilterTreeItem(c, "before", e)
        }
    }
}, BCSfFilter.prototype.buildFilterSelectionData = function() {
    var a = this,
        b = "";
    return jQ(this.selector.filterTree + " ." + this.class.filterOption).each(function() {
        var c = jQ(this).data("type"),
            d = jQ(this).data("id"),
            e = jQ(this).data("title").trim();
        if (jQ(this).find("a.selected").length > 0) jQ(this).find("a.selected").each(function() {
            if ("collection" != c || "collection" == c && a.isSearchPage()) {
                var f = decodeURIComponent(jQ(this).attr("data-value")),
                    g = a.buildClearFilterOptionLink(d, e, f),
                    h = f;
                "price" == c ? h = a.getPriceLabel(h) : "percent_sale" == c ? h = a.getPercentSaleLabel(h) : "tag" != c && "stock" != c || "" == jQ(this).html() ? "review_ratings" == c && (h = jQ(this).html()) : h = jQ(this).children().html(), b += a.buildFilterSelectionItem(a.getTemplate("filterRefineItem"), e, h, g)
            }
        });
        else if (1 == jQ(this).find("." + a.class.filterOptionRange + "-check").val()) {
            var f = jQ(this).find("." + a.class.filterOptionRange + "-slider").attr("data-value"),
                g = f.split(":"),
                h = g[0] + " - " + g[1];
            "price" == c && (h = a.formatMoney(100 * g[0]) + " - " + a.formatMoney(100 * g[1]));
            var i = a.buildClearFilterOptionLink(d, e, f);
            b += a.buildFilterSelectionItem(a.getTemplate("filterRefineItem"), e, h, i)
        }
    }), b
}, BCSfFilter.prototype.buildFilterSelectionItem = function(a, b, c, d) {
    return a = a.replace(/{{itemType}}/g, b), a = a.replace(/{{itemLabel}}/g, c), a = a.replace(/{{itemLink}}/g, d)
}, BCSfFilter.prototype.checkFilterOptionSelected = function(a, b, c, d) {
    if ("collection" != c || this.isSearchPage()) {
        if ("stock" == c) {
            if (this.queryParams.hasOwnProperty(a)) {
                var e = this.queryParams[a];
                if (e.indexOf(b.toString()) > -1) return !0
            }
        } else if (this.queryParams.hasOwnProperty(a)) {
            var e = this.queryParams[a];
            if (Array.isArray(e)) {
                for (var f = 0; f < e.length; f++)
                    if (e[f] == b) return !0
            } else if (e == b) return !0
        }
    } else if (window.location.pathname.split("/").slice(2).join("/") == b) return !0;
    return !1
}, BCSfFilter.prototype.prepareProductData = function(a) {
    return a
}, BCSfFilter.prototype.buildProductList = function(a, b) {
    (0 == this.getSettingValue("general.loadProductFirst") || 1 == this.getSettingValue("general.loadProductFirst") && (this.queryParams.hasOwnProperty("_") || "collection" == b || "history" == b || "default" != this.getSettingValue("general.paginationType") && "page" == b || this.isSearchPage() || this.isVendorPage())) && (a = this.prepareProductData(a), this.buildProductListData(a, b), this.buildExtrasProductList(a, b))
}, BCSfFilter.prototype.buildProductListData = function(a, b) {
    ("default" == this.getSettingValue("general.paginationType") || "default" != this.getSettingValue("general.paginationType") && "page" != b) && (jQ(this.getSelector("products")).html(""), jQ(window).unbind("scroll"));
    for (var c = "", d = a.length, e = 0; e < d; e++) {
        switch (this.queryParams.display) {
            case "list":
                var f = this.buildProductListItem(a[e], e + 1, d);
                break;
            case "collage":
                var f = this.buildProductCollageItem(a[e], e + 1, d);
                break;
            default:
                var f = this.buildProductGridItem(a[e], e + 1, d)
        }
        c += this.buildProductItemAdvanced(a[e], f)
    }
    jQ(this.getSelector("products")).append(c)
}, BCSfFilter.prototype.buildExtrasProductList = function(a, b) {}, BCSfFilter.prototype.buildProductGridItem = function(a, b, c) {
    return ""
}, BCSfFilter.prototype.buildProductListItem = function(a, b, c) {
    return ""
}, BCSfFilter.prototype.buildProductCollageItem = function(a, b, c) {
    return ""
}, BCSfFilter.prototype.buildProductItemUrl = function(a, b) {
    var b = "undefined" == typeof b || b;
    if (b) {
        if ("/" == window.location.pathname || this.isSearchPage() || this.isVendorPage()) return "/collections/all/products/" + a.handle;
        if (this.isTagPage()) {
            var c = window.location.pathname.split("/");
            return c.length >= 4 ? "/collections/" + c[2] + "/products/" + a.handle : "/collections/all/products/" + a.handle
        }
        var c = window.location.pathname.split("/");
        return "undefined" != typeof c[2] ? "/collections/" + c[2] + "/products/" + a.handle : window.location.pathname + "/products/" + a.handle
    }
    return "/products/" + a.handle
}, BCSfFilter.prototype.buildProductItemVendorUrl = function(a) {
    return window.location.protocol + "//" + window.location.hostname + "/collections/vendors?q=" + this.slugify(a)
}, BCSfFilter.prototype.buildProductItemAdvanced = function(a, b) {
    return b
}, BCSfFilter.prototype.buildPagination = function(a) {}, BCSfFilter.prototype.buildLoadMoreButton = function(a) {
    if (0 == jQ(this.getSelector("loadMoreButtonContainer")).length) {
        var b = this.getTemplate("loadMoreButton").replace("{{label.loadMore}}", this.getSettingValue("label.loadMore"));
        jQ(this.getSelector("loadMore")).prepend(b)
    }
}, BCSfFilter.prototype.buildToolbar = function() {
    this.buildFilterShowLimit(), this.buildFilterSorting(), this.buildFilterDisplayType()
}, BCSfFilter.prototype.buildFilterShowLimit = function() {}, BCSfFilter.prototype.buildFilterSorting = function() {}, BCSfFilter.prototype.buildFilterDisplayType = function() {}, BCSfFilter.prototype.buildScrollToTop = function() {
    var a = this;
    if (1 == this.getSettingValue("general.activeScrollToTop")) {
        if (0 == jQ(this.selector.scrollToTop).length) {
            var b = this.getTemplate("scrollToTop");
            jQ("body").append(b)
        }
        "style1" != this.getSettingValue("general.styleScrollToTop") && jQ(this.selector.scrollToTop).addClass(this.getSettingValue("general.styleScrollToTop")), jQ(this.selector.scrollToTop).click(function() {
            jQ("html,body").stop().animate({
                scrollTop: 0
            })
        }), jQ(window).scroll(function(b) {
            jQ(window).scrollTop() > 100 ? jQ(a.selector.scrollToTop).show() : jQ(a.selector.scrollToTop).hide()
        })
    }
}, BCSfFilter.prototype.buildPageInfo = function(a) {
    function b(a, b) {
        c.buildBreadcrumb(a, b), c.buildCollectionDetail(a, b), c.buildDocumentInfo(a, b)
    }
    var c = this;
    if ("/" != window.location.pathname) {
        var d = {
            collection: {
                description: "",
                handle: bcSfFilterConfig.general.collection_handle,
                title: bcSfFilterConfig.general.collection_title
            }
        };
        if ("/collections/all" == window.location.pathname) b(d, a);
        else if (this.isVendorPage()) {
            var e = {
                collection: {
                    description: "",
                    handle: "",
                    title: getParam("q")
                }
            };
            b(e, a)
        } else if ("/search" != window.location.pathname) {
            var f = window.location.href.split("?")[0] + "?view=desc";
            jQ.ajax({
                method: "GET",
                url: f,
                dataType: "json",
                success: function(c) {
                    b(c, a)
                },
                error: function() {
                    b(d, a)
                }
            })
        }
    }
}, BCSfFilter.prototype.buildBreadcrumb = function(a, b) {}, BCSfFilter.prototype.buildCollectionDetail = function(a, b) {
    if ("undefined" != typeof a && a.hasOwnProperty("collection")) {
        var c = a.collection;
        c.hasOwnProperty("title") && "" != c.title ? (jQ("." + this.class.collectionHeader).html(c.title), jQ("." + this.class.collectionHeader).show(), jQ(this.selector.collectionHeader).html(c.title), jQ(this.selector.collectionHeader).show()) : (jQ("." + this.class.collectionHeader).hide(), jQ(this.selector.collectionHeader).hide()), c.hasOwnProperty("description") && "" != c.description ? (jQ("." + this.class.collectionDescription).html(c.description), jQ("." + this.class.collectionDescription).show(), jQ(this.selector.collectionDescription).html(c.description), jQ(this.selector.collectionDescription).show()) : (jQ("." + this.class.collectionDescription).hide(), jQ(this.selector.collectionDescription).hide())
    }
}, BCSfFilter.prototype.buildDocumentInfo = function(a, b) {
    if ("undefined" != typeof a && a.hasOwnProperty("collection")) {
        var c = a.collection.title;
        "undefined" != typeof this.collectionTags && null !== this.collectionTags && (c += " - " + this.collectionTags[0]), c += " - " + this.shopName, document.title = c
    }
}, BCSfFilter.prototype.buildAdditionalElements = function(a, b) {}, BCSfFilter.prototype.onChangeData = function(a, b, c, d) {
    this.updateApiParams(a), this.getFilterData(b), this.changeAddressBar(a, b, c)
}, BCSfFilter.prototype.buildAdditionalFilterEvent = function() {
    this.buildToggleEvent(), this.buildClearEvent(), this.buildClearAllEvent()
}, BCSfFilter.prototype.buildToggleEvent = function(a) {
    var b = this,
        c = jQ(".bc-sf-filter-option-open-list").length > 0 ? jQ(".bc-sf-filter-option-open-list").val().split(",") : [],
        d = jQ(".bc-sf-filter-option-close-list").length > 0 ? jQ(".bc-sf-filter-option-close-list").val().split(",") : [];
    jQ("." + this.class.filterBlockTitle + " h3").on("click", function(a) {
        a.preventDefault();
        var e = jQ(this).closest("." + b.class.filterOption).attr("data-id");
        jQ(this).children().hasClass("up") ? (b.getSettingValue("general.keepToggleState") && (c.push(e), d.length > 0 && d.indexOf(e) > -1 && d.splice(d.indexOf(e), 1)), jQ(this).children().removeClass("up"), jQ(this).parent().siblings().slideDown(function() {
            "range" != jQ(this).parent().attr("data-display-type") && b.buildFilterScrollbar(this)
        })) : (b.getSettingValue("general.keepToggleState") && (d.push(e), c.length > 0 && c.indexOf(e) > -1 && c.splice(d.indexOf(e), 1)), jQ(this).children().addClass("up"), jQ(this).parent().siblings().slideUp()), jQ(".bc-sf-filter-option-open-list").val(c.join(",")), jQ(".bc-sf-filter-option-close-list").val(d.join(","))
    })
}, BCSfFilter.prototype.buildClearEvent = function(a) {
    var b = this;
    jQ("." + this.class.filterSelectedItems + " a").click(function(a) {
        a.preventDefault(), b.internalClick = !0;
        var c = jQ(this).attr("href");
        b.onChangeData(c)
    })
}, BCSfFilter.prototype.buildClearAllEvent = function(a) {
    var b = this;
    jQ("." + this.class.clearAllButton).on("click", function(a) {
        b.internalClick = !0;
        for (var c = window.location.href.split("?")[0] + "?_=pf", d = window.location.search.substr(1).split("&"), e = 0; e < d.length; e++)(d[e].indexOf("sort=") > -1 || d[e].indexOf("display=") > -1 || d[e].indexOf("q=") > -1) && (c += "&" + d[e]);
        b.onChangeData(c)
    })
}, BCSfFilter.prototype.buildPaginationEvent = function(a) {
    parseInt(this.queryParams.page);
    switch (this.getSettingValue("general.paginationType")) {
        case "default":
            this.buildDefaultPaginationEvent(a);
            break;
        case "load_more":
            this.buildLoadMoreEvent(a);
            break;
        default:
            this.buildInfiniteLoadingEvent(a)
    }
}, BCSfFilter.prototype.buildDefaultPaginationEvent = function(a) {
    var b = this;
    parseInt(this.queryParams.page);
    jQ(this.selector.bottomPagination).find("a").unbind("click"), jQ(this.selector.bottomPagination).find("a").on("click", function(a) {
        a.preventDefault(), b.internalClick = !0;
        var c = jQ(this).attr("href");
        b.onChangeData(c, "page"), jQ("body,html").animate({
            scrollTop: jQ(b.getSelector("products")).position().top
        }, 600)
    })
}, BCSfFilter.prototype.buildInfiniteLoadingEvent = function(a) {
    var b = this,
        c = parseInt(this.queryParams.page),
        d = 0;
    jQ(window).scroll(function(e) {
        e.preventDefault(), e.stopPropagation();
        var f = parseInt(jQ(b.getSelector("products")).offset().top) + parseInt(jQ(b.getSelector("products")).outerHeight(!0)),
            g = parseInt(jQ(window).scrollTop()) + b.getSettingValue("general.positionShowInfiniteLoading");
        jQ(window).width() > 5e3 ? g += 2e3 : jQ(window).width() > 2500 ? g += 800 : jQ(window).width() > 1400 && (g += 200), 0 == d && g >= f && a.products.length > 0 && (b.showLoadMoreLoading(), d = 1, c++, b.internalClick = !0, b.queryParams.limit = b.getSettingValue("general.limit"), b.queryParams.page = c, b.getFilterData("page"))
    })
}, BCSfFilter.prototype.buildLoadMoreEvent = function(a) {
    var b = this,
        c = parseInt(this.queryParams.page);
    jQ(this.getSelector("loadMore")).find("a").unbind("click"), jQ(this.getSelector("loadMore")).find("a").on("click", function() {
        jQ(b.getSelector("loadMoreButtonContainer")).hide(), b.showLoadMoreLoading(), c++, b.internalClick = !0, b.queryParams.limit = b.getSettingValue("general.limit"), b.queryParams.page = c, b.getFilterData("page")
    })
}, BCSfFilter.prototype.buildToolbarEvent = function(a) {
    this.buildPaginationEvent(a), this.buildSortingEvent(), this.buildShowLimitEvent(), this.buildDisplayTypeEvent()
}, BCSfFilter.prototype.buildSortingEvent = function() {
    var a = this;
    jQ(this.selector.topSorting + " select").change(function(b) {
        onInteractWithToolbar(b, "sort", a.queryParams.sort, jQ(this).val())
    })
}, BCSfFilter.prototype.buildShowLimitEvent = function() {
    var a = this;
    jQ(this.selector.topShowLimit + " select").change(function(b) {
        onInteractWithToolbar(b, "limit", a.queryParams.limit, jQ(this).val())
    })
}, BCSfFilter.prototype.buildDisplayTypeEvent = function() {
    var a = this;
    jQ(this.selector.topDisplayType + " a").click(function(b) {
        b.preventDefault(), a.internalClick = !0, jQ(this).parent().children().removeClass("active"), jQ(this).addClass("active");
        var c = jQ(this).attr("href");
        a.onChangeData(c, "display")
    })
}, BCSfFilter.prototype.buildFilterTreeMobileButtonEvent = function() {
    var a = this;
    jQ(this.selector.filterTreeMobileButton).unbind("click"), jQ(this.selector.filterTreeMobileButton).on("click", function() {
        jQ(a.selector.filterTree).slideToggle(), a.buildFilterScrollbar()
    })
}, BCSfFilter.prototype.buildFilterOptionLink = function(a, b, c, d, e, f) {
    var g = "";
    if (g = this.buildFilterOptionCustomLink(a, b, c, d, e, f), "" != g) return g;
    if ("collection" != c || this.isSearchPage())
        if ("" !== b && null !== b) {
            var h = "&" + a + "=" + encodeURIParamValue(b);
            if ("range" != d && "single" != e || !this.queryParams.hasOwnProperty(a)) {
                var i = window.location.href + "&";
                i.indexOf(h + "&") > -1 ? (g = i.replace(h + "&", "&"), "&" == g[g.length - 1] && (g = g.slice(0, -1))) : (g = window.location.href, 0 == window.location.search.length ? g += "?_=" + this.prefix : this.queryParams.hasOwnProperty("_") || (g += "&_=" + this.prefix),
                    g += h)
            } else {
                var j = "&" + a + "=" + encodeURIParamValue(this.queryParams[a][0]);
                g = window.location.href.replace(j, h)
            }
        } else g = window.location.href.replace("&" + a + "=" + encodeURIParamValue(this.queryParams[a]), "");
    else {
        var f = "undefined" != typeof f ? f : null,
            k = window.location.pathname;
        if ("/" == k.slice(-1) && (k = k.substring(0, k.length - 1)), "pf_cs_collection" == a) g = window.location.href.indexOf(b) > -1 ? k.replace(b, "") + b.split("/")[0] : "/" + k.split("/")[1] + "/" + b;
        else if ("" != k) {
            var l = "",
                m = k.split("/");
            3 == m.length ? l = m.slice(0, -1).join("/") + "/" + b : m.length > 3 && (l = m.slice(0, -2).join("/") + "/" + b), g = f === !0 ? window.location.href.split("?")[0] : window.location.href, g = g.replace(k, l)
        }
    }
    return this.queryParams.hasOwnProperty("page") && (g = g.replace("&page=" + this.queryParams.page, "")), g
}, BCSfFilter.prototype.buildFilterOptionCustomLink = function(a, b, c, d, e, f) {
    return ""
}, BCSfFilter.prototype.buildClearFilterOptionLink = function(a, b, c) {
    if (Array.isArray(c)) {
        for (var d = "", e = 0; e < c.length; e++) d += "&" + a + "=" + encodeURIParamValue(c[e]);
        var f = window.location.href.replace(d, "")
    } else var g = new RegExp("&" + a + "=" + encodeURIParamValue(c).replace(/(?=[() ])/g, "\\") + "&", "g"),
        f = (window.location.href + "&").replace(g, "&");
    return "&" == f[f.length - 1] && (f = f.slice(0, -1)), this.queryParams.hasOwnProperty("page") && (f = f.replace("&page=" + this.queryParams.page, "")), f
}, BCSfFilter.prototype.buildToolbarLink = function(a, b, c) {
    var d = "&" + a + "=" + c;
    if (window.location.href.indexOf("&" + a + "=") > -1) var e = "&" + a + "=" + b,
        f = window.location.href.replace(e, d);
    else {
        var f = window.location.href;
        0 === window.location.search.length ? f += "?_=" + this.prefix : this.queryParams.hasOwnProperty("_") || (f += "&_=" + this.prefix), f += d
    }
    if ("page" != a && this.queryParams.hasOwnProperty("page")) {
        var g = "&page=" + this.queryParams.page;
        f = f.replace(g, "")
    }
    return f
}, BCSfFilter.prototype.isMobile = function() {
    return jQ(window).width() < 768
}, BCSfFilter.prototype.checkExistFilterOptionParam = function() {
    for (var a in this.queryParams)
        if (a.indexOf("pf_") > -1) return !0;
    return !1
}, BCSfFilter.prototype.isVendorPage = function() {
    return window.location.pathname.indexOf("/collections/vendors") > -1
}, BCSfFilter.prototype.isTagPage = function() {
    return "undefined" != typeof this.currentTags && null !== this.currentTags && this.currentTags.length > 0
}, BCSfFilter.prototype.getProductMetafield = function(a, b, c) {
    if (a.hasOwnProperty("metafields")) {
        var d = a.metafields.filter(function(a) {
            return a.namespace == b && a.key == c
        });
        if ("undefined" != typeof d[0]) return d[0].value
    }
    return ""
}, BCSfFilter.prototype.getSortingList = function() {
    var a = this.getSettingValue("general.sortingList");
    if (!this.isSearchPage()) {
        var b = this.findIndexArray("relevance", a);
        b >= 0 && a.splice(b, 1)
    }
    if (!this.getSettingValue("general.hasBestSellingSort")) {
        var c = this.findIndexArray("best-selling", a);
        c >= 0 && a.splice(c, 1)
    }
    var d = {};
    for (var e in a) d[a[e]] = this.getSettingValue("label.sorting." + a[e]);
    return d
}, BCSfFilter.prototype.showLoading = function(a) {
    this.getSettingValue("general.showLoading") && (0 == jQ("#bc-sf-filter-loading").length && jQ("body").append(this.getTemplate("loading")), jQ("#bc-sf-filter-loading").show())
}, BCSfFilter.prototype.hideLoading = function() {
    this.getSettingValue("general.showLoading") && jQ("#bc-sf-filter-loading").hide()
}, BCSfFilter.prototype.showLoadMoreLoading = function() {
    if (this.getSettingValue("general.showLoadMoreLoading") && this.getSettingValue("general.showLoading") === !1) {
        var a = this.getTemplate("loadMoreLoading").replace("{{loadingIcon}}", '<div id="bc-sf-filter-load-more-icon"></div>');
        jQ(this.getSelector("loadMore")).append(a), jQ(this.getSelector("loadMore")).show()
    }
}, BCSfFilter.prototype.hideLoadMoreLoading = function() {
    this.getSettingValue("general.showLoadMoreLoading") && jQ(this.getSelector("loadMoreLoading")).remove()
}, BCSfFilter.prototype.showError = function(a) {
    if (0 == jQ("#bc-sf-filter-error").length) {
        var b = this.getTemplate("error").replace(/{{content}}/g, a),
            c = jQ(b);
        c.find("button").attr("onclick", "jQ(this).parent().parent().hide()"), jQ("body").append(c[0].outerHTML)
    }
    jQ("#bc-sf-filter-error").show()
}, BCSfFilter.prototype.formatMoney = function(a, b, c) {
    function d(a, b) {
        return "undefined" == typeof a ? b : a
    }

    function e(a, b, e, f) {
        if (b = d(b, 2), e = d(e, ","), f = d(f, "."), isNaN(a) || null == a) return 0;
        a = (a / 100).toFixed(b);
        var g = a.split("."),
            h = g[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + e),
            i = g[1] ? f + g[1] : "";
        return "undefined" != typeof c ? parseFloat(h + i) : h + i
    }
    if ("undefined" == typeof b) var b = this.moneyFormat;
    if ("function" == typeof Shopify.formatMoney) return Shopify.formatMoney(a, b);
    "string" == typeof a && (a = a.replace(".", ""));
    var f = "",
        g = /\{\{\s*(\w+)\s*\}\}/,
        h = b || "${{amount}}";
    switch (h.match(g)[1]) {
        case "amount":
            f = e(a, 2);
            break;
        case "amount_no_decimals":
            f = e(a, 0);
            break;
        case "amount_with_comma_separator":
            f = e(a, 2, ".", ",");
            break;
        case "amount_no_decimals_with_comma_separator":
            f = e(a, 0, ".", ",")
    }
    return h.replace(g, f)
}, BCSfFilter.prototype.getCurrency = function() {
    var a = jQ("<p>" + bcSfFilterConfig.shop.money_format + "</p>").text();
    return a.replace(/{{[^}]*}}/g, "")
}, BCSfFilter.prototype.removeCurrencySymbol = function(a, b) {
    a = jQ("<p>" + a + "</p>").text(), "undefined" != typeof b && (a = a.replace(/(\.\d+)+/, ""));
    for (var c = this.getCurrency().split(" "), d = 0; d < c.length; d++) a = a.replace(c[d].trim(), "");
    return a.trim()
}, BCSfFilter.prototype.slugify = function(a) {
    return a.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
}, BCSfFilter.prototype.textify = function(a, b) {
    for (var b = "undefined" != typeof b ? b : "-", c = a.split(b), d = "", e = 0; e < c.length; e++) d += c[e].charAt(0).toUpperCase() + c[e].slice(1), e < c.length - 1 && (d += " ");
    return d
}, BCSfFilter.prototype.escape = function(a, b) {
    return b = b ? "&#13;" : "\n", ("" + a).replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r\n/g, b).replace(/[\r\n]/g, b)
}, BCSfFilter.prototype.getPriceLabel = function(a) {
    if (0 == a.indexOf(":")) return "Under " + this.formatMoney(100 * parseFloat(a.substr(1)));
    if (a.indexOf(":") == a.length - 1) return "Above " + this.formatMoney(100 * parseFloat(a.slice(0, -1)));
    if (2 == a.split(":").length) {
        var b = a.split(":");
        return this.formatMoney(100 * parseFloat(b[0])) + " - " + this.formatMoney(100 * parseFloat(b[1]))
    }
}, BCSfFilter.prototype.getPercentSaleLabel = function(a) {
    return 0 == a.indexOf(":") ? "Under " + a.substr(1) + "%" : a.indexOf(":") == a.length - 1 ? "Above " + a.slice(0, -1) + "%" : 2 == a.split(":").length ? a.replace(":", "% - %") : void 0
}, BCSfFilter.prototype.sortFilterOptionValue = function(a, b) {
    b.indexOf("opt") > -1 && (b = "opt");
    var c = this.getSettingValue("filterOptionValueSort." + b),
        d = "undefined" != typeof c && c.indexOf("count") > -1 ? "doc_count" : "key";
    if ("undefined" != typeof c && c.indexOf("-") > -1) {
        a.sort(function(a, b) {
            function c(a) {
                for (var b, c, d = new Array, e = 0, f = -1, g = 0; b = (c = a.charAt(e++)).charCodeAt(0);) {
                    var h = 46 == b || b >= 48 && b <= 57;
                    h !== g && (d[++f] = "", g = h), d[f] += c
                }
                return d
            }
            a = a[d].toLowerCase(), b = b[d].toLowerCase();
            var e = c(a),
                f = c(b);
            for (x = 0; e[x] && f[x]; x++)
                if (e[x] !== f[x]) {
                    var g = Number(e[x]),
                        h = Number(f[x]);
                    return g == e[x] && h == f[x] ? g - h : e[x] > f[x] ? 1 : -1
                } return e.length - f.length
        });
        var e = "undefined" != typeof c && c.indexOf("desc") > -1 ? "desc" : "asc";
        "desc" == e && a.reverse()
    }
    return a
}, BCSfFilter.prototype.truncateByChar = function(a, b, c) {
    return "undefined" == typeof c && (c = "..."), b -= c.length, a = a.length > b ? a.substring(0, b) + c : a.substring(0, b)
}, BCSfFilter.prototype.truncateByWord = function(a, b, c) {
    return "undefined" == typeof c && (c = "..."), a = a.split(" ").length > b ? a.split(" ").splice(0, b).join(" ") + c : a.split(" ").splice(0, b).join(" ")
}, BCSfFilter.prototype.findIndexArray = function(a, b, c, d) {
    if ("undefined" != typeof c && null !== c) {
        for (var e = 0; e < b.length; e++)
            if ("undefined" != typeof d && 0 == d && (b[e][c] = b[e][c].toLowerCase(), a = a.toLowerCase()), b[e][c] == a) return e
    } else
        for (var e = 0; e < b.length; e++)
            if ("undefined" != typeof d && 0 == d && (b[e] = b[e].toLowerCase(), a = a.toLowerCase()), b[e] == a) return e;
    return -1
}, BCSfFilter.prototype.getFeaturedImage = function(a, b) {
    var b = "undefined" != typeof b ? b : "large",
        c = this.optimizeImage(bcSfFilterConfig.general.no_image_url, b);
    return a.length > 0 && (c = "object" == typeof a[0] ? this.optimizeImage(a[0].src, b) : this.optimizeImage(a[0], b)), c
}, BCSfFilter.prototype.optimizeImage = function(a, b) {
    null === a && (a = bcSfFilterConfig.general.no_image_url);
    for (var b = "undefined" != typeof b ? b : "large", c = this.getSettingValue("general.imageExtension"), d = 0; d < c.length; d++) a = a.replace("." + c[d] + "?", "_" + b + "." + c[d] + "?");
    return a
}, BCSfFilter.prototype.getApiUrl = function(a) {
    var b = bcSfFilterConfig.shop.apiUrl;
    if (bcSfFilterConfig.hasOwnProperty("api")) switch (a) {
        case "filter":
            b = bcSfFilterConfig.api.filterUrl;
            break;
        case "search":
            b = bcSfFilterConfig.api.searchUrl;
            break;
        case "suggestion":
            b = bcSfFilterConfig.api.suggestionUrl
    }
    return b
}, BCSfFilter.prototype.getSettingValue = function(a, b) {
    var c = "undefined" != typeof b ? b : this.defaultSettings;
    bcSfFilterConfig.hasOwnProperty("settings") && null !== bcSfFilterConfig.settings && (c = mergeObject(c, bcSfFilterConfig.settings)), "undefined" != typeof bcSfFilterSettings && Object.keys(bcSfFilterSettings).length > 0 && (c = mergeObject(c, bcSfFilterSettings)), "undefined" != typeof bcSfSearchSettings && Object.keys(bcSfSearchSettings).length > 0 && (c = mergeObject(c, bcSfSearchSettings));
    var d = "";
    if (c.hasOwnProperty(a)) return c[a];
    if (a.indexOf(".") > -1)
        for (var e = a.split("."), f = 0; f < e.length; f++)
            if ("" == d) {
                if (!c.hasOwnProperty(e[f])) return "";
                d = c[e[f]]
            } else {
                if (!d.hasOwnProperty(e[f])) return "";
                d = d[e[f]]
            } return d
}, BCSfFilter.prototype.getTemplate = function(a) {
    var b = {
        template: this.template
    };
    return this.getSettingValue("template." + a, b)
}, BCSfFilter.prototype.getSelector = function(a) {
    var b = {
        selector: this.selector
    };
    return this.getSettingValue("selector." + a, b)
}, BCSfFilter.prototype.getLabel = function(a, b, c) {
    return bcSfFilterConfig.hasOwnProperty(a) && bcSfFilterConfig[a].hasOwnProperty(b) ? bcSfFilterConfig[a][b] : c
}, BCSfFilter.prototype.buildSearchResultHeader = function(a) {
    var b = getParam(this.searchTermKey);
    if (null !== b) var c = a.total_product > 0 ? this.getSettingValue("label.search.resultHeader") : this.getSettingValue("label.search.resultEmpty");
    else var c = this.getSettingValue("label.search.generalTitle");
    jQ("." + this.class.searchResultHeader).html(c.replace(/{{ terms }}/g, getParam(this.searchTermKey)))
}, BCSfFilter.prototype.buildSearchResultNumber = function(a) {
    var b = "",
        c = getParam(this.searchTermKey);
    null != c && (b = this.getSettingValue("label.search.resultNumber"), b = b.replace(/{{ count }}/g, "<strong>" + a.total_product + "</strong>").replace(/{{ terms }}/g, "<strong>" + c + "</strong>")), jQ("." + this.class.searchResultNumber).html(b)
}, BCSfFilter.prototype.buildSuggestion = function(a, b, c) {
    for (var d = "", e = this.getSettingValue("search.suggestionBlocks"), f = 0; f < e.length; f++) switch (e[f]) {
        case "suggestions":
            d += this.buildSuggestionPopular(a, b[0], c);
            break;
        case "products":
            d += this.buildSuggestionProductList(a, b[1], c);
            break;
        case "did_you_mean":
            d += this.buildSuggestionDidYouMeanList(a, b[2], c)
    }
    d += this.buildSuggestionViewAll(a, b, c), jQ(c).append(d), this.buildSuggestionWrapper(c)
}, BCSfFilter.prototype.buildSuggestionWrapper = function(a) {
    var b = this.class.searchSuggestionWrapper;
    if (!jQ(a).parent().hasClass(b)) {
        jQ(a).wrap('<div class="' + b + '"></div>');
        var c = this.getSettingValue("search.suggestionPosition");
        jQ(a).parent().prepend('<div class="bc-sf-search-suggestion-popover" data-direction="' + c + '"></div>')
    }
    jQ(a).siblings().show()
}, BCSfFilter.prototype.buildSuggestionPopular = function(a, b, c) {
    if (Object.keys(b).length > 0) {
        var d = this.getSettingValue("search.suggestionPopularLimit"),
            e = this.getSettingValue("label.suggestion.popularHeader"),
            f = this.buildSuggestionHeader(e, "popular");
        for (var g in b)
            if (g < d) {
                var h = this.highlightSuggestionResult(b[g], a);
                f += '<li class="' + this.class.searchSuggestionItem + '" aria-label="' + e + ": " + b[g] + '">', f += '<a href="' + this.buildSearchLink(b[g]) + '">' + h + "</a>", f += "</li>"
            } return f
    }
    return ""
}, BCSfFilter.prototype.buildSuggestionProductList = function(a, b, c) {
    if (Object.keys(b).length > 0) {
        var d = this.getSettingValue("search.suggestionProductLimit"),
            e = this.getSettingValue("label.suggestion.productHeader"),
            f = this.buildSuggestionHeader(e, "product"),
            g = 0;
        for (var h in b) {
            if (!(g < d)) break;
            var i = b[h];
            if (this.getSettingValue("search.productAvailable") === !1 || this.getSettingValue("search.productAvailable") && i.available) {
                var j = this.highlightSuggestionResult(i.title, a),
                    k = this.buildProductItemUrl(i, !1),
                    l = i.images_info.length > 0 ? this.optimizeImage(i.images_info[0].src, "medium") : bcSfFilterConfig.general.no_image_url,
                    m = null !== i.skus && i.skus.length > 0 ? i.skus[0] : "",
                    n = this.class.searchSuggestion,
                    o = this.getSettingValue("search.openProductNewTab") ? 'target="_blank"' : "";
                f += '<li class="' + this.class.searchSuggestionItem + " " + this.class.searchSuggestionItem + '-product" aria-label="' + e + ": " + i.title + '">', f += '<a href="' + k + '" ' + o + ">", this.getSettingValue("search.showSuggestionProductImage") && (f += '<div class="' + n + '-left"><img src="' + l + '" /></div>'), f += '<div class="' + n + '-right">', f += '<div class="' + n + '-product-title">' + j + "</div>", this.getSettingValue("search.showSuggestionProductSku") && (f += '<div class="' + n + '-product-sku">SKU: ' + m + "</div>"), this.getSettingValue("search.showSuggestionProductVendor") && (f += '<div class="' + n + '-product-vendor">' + i.vendor + "</div>"), f += this.buildSuggestionProductPrice(i), f += "</div>", f += "</a>", f += "</li>", g++
            }
        }
        return f
    }
    return ""
}, BCSfFilter.prototype.buildSuggestionProductPrice = function(a) {
    a.price_min *= 100, a.price_max *= 100, a.compare_at_price_min *= 100, a.compare_at_price_max *= 100;
    var b = a.compare_at_price_min > a.price_min,
        c = this.formatMoney(a.price_min),
        d = this.formatMoney(a.compare_at_price_min);
    this.getSettingValue("search.removePriceDecimal") && (c = c.replace(".00", ""), d = d.replace(".00", ""));
    var e = "";
    return this.getSettingValue("search.showSuggestionProductPrice") && (e += '<div class="' + this.class.searchSuggestion + '-product-price">', b && this.getSettingValue("search.showSuggestionProductSalePrice") ? (e += "<s>" + d + "</s>  ", e += '<span class="bc-sf-product-sale-price">' + c + "</span>") : e += '<span class="bc-sf-product-regular-price">' + c + "</span>", e += "</div>"), e
}, BCSfFilter.prototype.buildSuggestionDidYouMeanList = function(a, b, c) {
    if ("undefined" != typeof b && Object.keys(b).length > 0) {
        var d = this.getSettingValue("search.suggestionDidYouMeanLimit"),
            e = this.getSettingValue("label.suggestion.didYouMeanHeader"),
            f = this.buildSuggestionHeader(e, "dym");
        for (var g in b) g < d && (f += '<li class="' + this.class.searchSuggestionItem + '" aria-label="' + e + ": " + b[g] + '"><a href="' + this.buildSearchLink(b[g]) + '">' + b[g] + "</a></li>");
        return f
    }
    return ""
}, BCSfFilter.prototype.buildSuggestionViewAll = function(a, b, c) {
    var d = this.getSettingValue("label.suggestion.viewAll"),
        e = this.class.searchSuggestionHeader,
        f = '<li class="ui-autocomplete-category ' + e + "-view-all " + e + '" aria-label="' + d + '">';
    return f += '<a href="' + this.buildSearchLink(a) + '">' + this.getSettingValue("label.suggestion.viewAll") + "</a>", f += "</li>"
}, BCSfFilter.prototype.buildSuggestionHeader = function(a, b) {
    var c = this.class.searchSuggestionHeader;
    return '<li class="ui-autocomplete-category ' + c + "-" + b + " " + c + '" aria-label="' + a + '">' + a + "</li>"
}, BCSfFilter.prototype.highlightSuggestionResult = function(a, b) {
    if (this.getSettingValue("search.highlightSuggestionResult") && b.length > 1)
        for (var c = b.split(" "), d = 0; d < c.length; d++) {
            var e = new RegExp(c[d], "ig"),
                f = a.match(e);
            if (null !== f && f.length > 0) {
                f = f.filter(function(a, b) {
                    return f.indexOf(a) == b && "" != a
                });
                for (var g in f)
                    if (f[g].length > 1) {
                        var e = new RegExp(f[g], "g");
                        a = a.replace(e, '<span class="bc-sf-search-suggestion-term">' + f[g] + "</span>")
                    }
            }
        }
    return a
}, BCSfFilter.prototype.buildSuggestionStyle = function() {
    jQ("." + this.class.searchSuggestionHeader).css({
        "font-size": this.getSettingValue("search.fontSizeSuggestionHeader"),
        background: this.getSettingValue("search.bgSuggestionHeader"),
        color: this.getSettingValue("search.colorSuggestionHeader")
    })
}, BCSfFilter.prototype.buildSearchLink = function(a) {
    return "/search?" + this.searchTermKey + "=" + a
}, BCSfFilter.prototype.initSearchBox = function(a) {
    this.beforeBuildSearchBox(a);
    var b = this;
    "undefined" == typeof a ? jQ('input[name="' + this.searchTermKey + '"]').each(function(a) {
        var c = "bc-sf-search-box-" + a;
        jQ(this).attr("id", c), b.buildSearchBox("#" + c)
    }) : b.buildSearchBox(a)
}, BCSfFilter.prototype.beforeBuildSearchBox = function(a) {}, BCSfFilter.prototype.buildSearchBox = function(a) {
    var b = this;
    if (jQ(a).length > 0) {
        var c = getParam(this.searchTermKey);
        jQ(a).val(c), jQ(a).autocomplete({
            minLength: b.getSettingValue("search.suggestionMinLength"),
            source: function(a, c) {
                window.suggestionCallback = c, b.getSuggestionData(a.term, c)
            },
            classes: {
                "ui-autocomplete": b.class.searchSuggestion
            },
            focus: function() {
                return !1
            },
            open: function(c, d) {
                b.openSuggestionEvent(a)
            },
            close: function(c, d) {
                b.closeSuggestionEvent(a)
            },
            select: function(a, b) {
                return !1
            }
        }).on("click", function() {
            b.focusSearchBoxEvent(a)
        }).addClass(b.class.searchBox).attr("data-search-box", a), jQ(a).autocomplete("instance")._renderMenu = function(c, d) {
            return c.attr("data-search-box", a), b.buildSuggestion(this.term, d, c)
        }, jQ(a).autocomplete("instance")._resizeMenu = function() {
            var c = this.menu.element,
                d = this.element;
            b.buildStyleSuggestion(c, d, a)
        }, b.clickOutsideSuggestionEvent(a)
    }
}, BCSfFilter.prototype.focusSearchBoxEvent = function(a) {
    "" != jQ(a).val() && jQ(a).autocomplete("search", jQ(a).val()), jQ(".ui-autocomplete-category").removeClass("ui-menu-item")
}, BCSfFilter.prototype.openSuggestionEvent = function(a) {
    jQ(".ui-autocomplete-category").removeClass("ui-menu-item")
}, BCSfFilter.prototype.closeSuggestionEvent = function(a) {
    "test" == this.getSettingValue("search.suggestionMode") ? jQ("." + this.class.searchSuggestion).show() : jQ("." + this.class.searchSuggestion + '[data-search-box="' + a + '"]').siblings().hide()
}, BCSfFilter.prototype.clickOutsideSuggestionEvent = function(a) {
    var b = this;
    jQ(document).bind("click", function(c) {
        void 0 !== jQ(a).autocomplete("instance") && (jQ(c.target).parents().addBack().is("." + b.class.searchSuggestion) || jQ(c.target).parents().addBack().is("." + b.class.searchBox) || jQ(a).autocomplete("close"))
    })
}, BCSfFilter.prototype.buildStyleSuggestion = function(a, b, c) {
    if ("auto" == this.getSettingValue("search.suggestionWidth")) var d = b.outerWidth();
    else var d = this.getSettingValue("search.suggestionWidth");
    a.outerWidth(d), jQ(a).parent().outerWidth(d), this.customizeSuggestion(a, b, c), "left" == this.getSettingValue("search.suggestionPosition") ? (jQ(c).autocomplete("option", "position", {
        my: "left top+12",
        at: "left bottom",
        collision: "none"
    }), jQ(a).parent().position({
        my: "left top+12",
        at: "left bottom",
        of: b
    })) : (jQ(c).autocomplete("option", "position", {
        my: "right top+12",
        at: "right bottom",
        collision: "none"
    }), jQ(a).parent().position({
        my: "right top+12",
        at: "right bottom",
        of: b
    }))
}, BCSfFilter.prototype.customizeSuggestion = function(a, b, c) {}, BCSfFilter.prototype.prepareSuggestionParams = function() {
    var a = {};
    return a.shop = this.shopDomain, a.t = (new Date).getTime(), a.callback = "BCSfSearchCallback", a
}, BCSfFilter.prototype.beforeGetSuggestionData = function(a) {}, BCSfFilter.prototype.getSuggestionData = function(a, b) {
    var b = "undefined" != typeof b ? b : 0,
        c = this;
    this.beforeGetSuggestionData(), a = this.customizeSearchTerm(a);
    var d = this.prepareSuggestionParams(),
        e = document.createElement("script");
    e.type = "text/javascript", e.src = this.getApiUrl("suggestion") + "?q=" + a + "&" + jQ.param(d), e.async = !0, e.addEventListener("error", function(d) {
        this.remove(), b < 3 ? (b++, c.getSuggestionData(a, b)) : c.showError("Oops, we cannot fetch products at this moment. Please try again later.")
    }), document.getElementsByTagName("head")[0].appendChild(e), e.onload = function() {
        this.remove()
    }
}, BCSfFilter.prototype.customizeSearchTerm = function(a) {
    return a.trim()
}, BCSfFilter.prototype.isSearchPage = function() {
    return window.location.pathname.indexOf("/search") > -1
};