(function(t) {
    function e(e) {
        for (var i, s, o = e[0], c = e[1], h = e[2], u = 0, d = []; u < o.length; u++)
            s = o[u],
            Object.prototype.hasOwnProperty.call(n, s) && n[s] && d.push(n[s][0]),
            n[s] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        l && l(e);
        while (d.length)
            d.shift()();
        return r.push.apply(r, h || []),
        a()
    }
    function a() {
        for (var t, e = 0; e < r.length; e++) {
            for (var a = r[e], i = !0, o = 1; o < a.length; o++) {
                var c = a[o];
                0 !== n[c] && (i = !1)
            }
            i && (r.splice(e--, 1),
            t = s(s.s = a[0]))
        }
        return t
    }
    var i = {}
      , n = {
        index: 0
    }
      , r = [];
    function s(e) {
        if (i[e])
            return i[e].exports;
        var a = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, s),
        a.l = !0,
        a.exports
    }
    s.m = t,
    s.c = i,
    s.d = function(t, e, a) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }
    ,
    s.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(t, e) {
        if (1 & e && (t = s(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var a = Object.create(null);
        if (s.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                s.d(a, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return a
    }
    ,
    s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return s.d(e, "a", e),
        e
    }
    ,
    s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    s.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = o.push.bind(o);
    o.push = e,
    o = o.slice();
    for (var h = 0; h < o.length; h++)
        e(o[h]);
    var l = c;
    r.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(t, e, a) {
        t.exports = a("cd49")
    },
    "20ae": function(t, e, a) {},
    "2f50": function(t, e, a) {
        "use strict";
        a("8adb")
    },
    4678: function(t, e, a) {
        var i = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function n(t) {
            var e = r(t);
            return a(e)
        }
        function r(t) {
            if (!a.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return i[t]
        }
        n.keys = function() {
            return Object.keys(i)
        }
        ,
        n.resolve = r,
        t.exports = n,
        n.id = "4678"
    },
    "5cef": function(t, e, a) {
        "use strict";
        a("20ae")
    },
    6148: function(t, e, a) {},
    "669f": function(t, e, a) {
        "use strict";
        a("b319")
    },
    6851: function(t, e, a) {},
    "693a": function(t, e, a) {},
    "8adb": function(t, e, a) {},
    "9c53": function(t, e, a) {},
    a234: function(t, e, a) {
        "use strict";
        a("6148")
    },
    b319: function(t, e, a) {},
    c147: function(t, e, a) {
        "use strict";
        a("9c53")
    },
    c338: function(t, e, a) {
        "use strict";
        a("6851")
    },
    cd49: function(t, e, a) {
        "use strict";
        a.r(e);
        a("d3b7"),
        a("3ca3"),
        a("ddb0"),
        a("e260"),
        a("e6cf"),
        a("cca6"),
        a("a79d");
        var i = a("7a23");
        function n(t, e, a, n, r, s) {
            var o = Object(i["r"])("Main");
            return Object(i["j"])(),
            Object(i["d"])(o)
        }
        var r = Object(i["z"])("data-v-a485c774");
        Object(i["m"])("data-v-a485c774");
        var s = {
            class: "column is-three-quarter",
            style: {
                "text-align": "center"
            }
        }
          , o = {
            class: "column is-one-quarter"
        }
          , c = {
            class: "column is-full"
        }
          , h = Object(i["f"])("p", null, "視点", -1)
          , l = Object(i["f"])("p", null, "打牌検出", -1)
          , u = Object(i["f"])("p", {
            class: "dropdown-trigger"
        }, " 局面編集 ", -1)
          , d = {
            class: "dropdown-menu",
            role: "menu",
            style: {
                "padding-top": "0",
                width: "100%"
            }
        }
          , p = {
            class: "dropdown-content"
        }
          , f = {
            class: "column is-full",
            style: {
                height: "100%"
            }
        }
          , m = {
            class: "column is-10",
            style: {
                height: "100%"
            }
        }
          , g = {
            class: "column is-2",
            style: {
                height: "100%"
            }
        }
          , y = {
            class: "column is-full",
            style: {
                "text-align": "center"
            }
        }
          , b = {
            class: "column is-full",
            style: {
                height: "100%",
                padding: "0px"
            }
        }
          , k = {
            class: "columns is-mobile",
            style: {
                height: "100%",
                padding: "0px"
            }
        }
          , v = {
            class: "column is-7",
            style: {
                height: "100%",
                "padding-right": "0"
            }
        }
          , w = Object(i["f"])("p", null, "視点", -1)
          , _ = Object(i["f"])("p", null, "打牌検出", -1)
          , x = Object(i["f"])("p", {
            class: "dropdown-trigger"
        }, " 局面編集 ", -1)
          , j = {
            class: "dropdown-menu",
            role: "menu",
            style: {
                "padding-top": "0",
                width: "100%"
            }
        }
          , S = {
            class: "dropdown-content"
        }
          , O = {
            class: "column is-3",
            style: {
                padding: "0"
            }
        }
          , T = {
            class: "column is-3",
            style: {
                padding: "0"
            }
        };
        Object(i["k"])();
        var C = r((function(t, e, a, n, r, C) {
            var H = Object(i["r"])("KyokumenImage")
              , P = Object(i["r"])("SideButton")
              , z = Object(i["r"])("ViewSelector")
              , I = Object(i["r"])("ThresholdRadio")
              , F = Object(i["r"])("DisplayNameSelector")
              , D = Object(i["r"])("PredShowPatternSelectorVue")
              , R = Object(i["r"])("NagaShowTypeSelectorVue")
              , E = Object(i["r"])("CommentComponent")
              , M = Object(i["r"])("EndGraph")
              , A = Object(i["r"])("RankGraph");
            return Object(i["j"])(),
            Object(i["d"])("div", {
                class: "section",
                onMousewheel: e[19] || (e[19] = function() {
                    return t.onWheel && t.onWheel.apply(t, arguments)
                }
                ),
                style: t.sectionStyle,
                ref: "section"
            }, [t.state.mobile ? (Object(i["j"])(),
            Object(i["d"])("div", {
                key: 1,
                class: "container",
                style: t.containerStyle,
                ref: "containerDiv"
            }, [Object(i["f"])("div", {
                class: "columns is-mobile",
                ref: "kyokumenImageDiv",
                style: t.kyokumenDivStyle
            }, [Object(i["f"])("div", y, [Object(i["f"])(H, {
                ref: "headline",
                haiHide: t.state.haiHide,
                targetSeat: t.state.targetSeat
            }, null, 8, ["haiHide", "targetSeat"])])], 4), Object(i["f"])("div", {
                class: "columns",
                style: {
                    height: 14 * t.state.vh + "px"
                }
            }, [Object(i["f"])("div", b, [Object(i["f"])(M, {
                pred: t.state.pred,
                targetSeat: t.state.targetSeat,
                mobile: t.state.mobile,
                imgHeight: t.state.imgHeight,
                newDiff: t.newDiff
            }, null, 8, ["pred", "targetSeat", "mobile", "imgHeight", "newDiff"])])], 4), Object(i["y"])(Object(i["f"])("div", {
                class: "columns",
                style: t.uiDivStyle
            }, [Object(i["f"])("div", k, [Object(i["f"])("div", v, [Object(i["f"])(E, {
                ref: "comment",
                targetSeat: t.state.targetSeat,
                imgHeight: t.state.imgHeight,
                mobile: t.state.mobile,
                newDiff: t.newDiff
            }, null, 8, ["targetSeat", "imgHeight", "mobile", "newDiff"])]), Object(i["f"])(A, {
                pred: t.state.pred,
                targetSeat: t.state.targetSeat,
                imgHeight: t.state.imgHeight,
                mobile: t.state.mobile
            }, null, 8, ["pred", "targetSeat", "imgHeight", "mobile"])])], 4), [[i["w"], !t.state.mobileComment]]), Object(i["y"])(Object(i["f"])("div", {
                class: "columns",
                style: t.uiDivStyle
            }, [Object(i["f"])("div", {
                class: "columns is-mobile",
                style: t.labelStyle
            }, [Object(i["f"])("div", {
                class: "column is-half default_color",
                id: "th_text",
                style: t.tagStyle
            }, [w], 4), Object(i["f"])(z, {
                targetSeat: t.state.targetSeat,
                options: t.state.names,
                onSeatUpdate: t.setTargetSeat,
                class: "column default_color",
                style: t.selectStyle
            }, null, 8, ["targetSeat", "options", "onSeatUpdate", "style"])], 4), Object(i["f"])("div", {
                class: "columns is-mobile",
                style: t.labelStyle
            }, [Object(i["f"])("div", {
                class: "column is-half default_color",
                style: t.tagStyle
            }, [_], 4), Object(i["f"])(I, {
                style: t.radioStyle,
                mobile: t.state.mobile,
                lineHeight: .95 * t.state.oneLine
            }, null, 8, ["style", "mobile", "lineHeight"])], 4), Object(i["f"])("div", {
                class: "columns is-mobile",
                style: t.labelStyle
            }, [Object(i["f"])("div", {
                class: ["column is-4 btn dropdown", t.kyokumenEditClass],
                style: t.tagStyle,
                ref: "kyokumenEdit",
                onClick: e[12] || (e[12] = function() {
                    return t.openDropdownMenu && t.openDropdownMenu.apply(t, arguments)
                }
                )
            }, [x, Object(i["f"])("div", j, [Object(i["f"])("div", S, [Object(i["f"])("a", {
                onClick: e[10] || (e[10] = function(e) {
                    return t.openKyokumenEdit(!0)
                }
                ),
                class: "dropdown-item",
                style: t.dropdownItemStyle
            }, " 終局まで ", 4), Object(i["f"])("a", {
                onClick: e[11] || (e[11] = function(e) {
                    return t.openKyokumenEdit(!1)
                }
                ),
                href: "#",
                class: "dropdown-item",
                tabindex: "=-1",
                style: t.dropdownItemStyle
            }, " 現局面まで ", 4)])])], 6), Object(i["y"])(Object(i["f"])("input", {
                type: "checkbox",
                style: [{
                    "margin-right": "1px"
                }, t.tagStyle],
                onChange: e[13] || (e[13] = function() {
                    return t.blurEl && t.blurEl.apply(t, arguments)
                }
                ),
                "onUpdate:modelValue": e[14] || (e[14] = function(e) {
                    return t.state.haiHide = e
                }
                ),
                "data-off-label": "伏牌",
                "data-on-label": "伏牌",
                class: "toggle_button column"
            }, null, 36), [[i["t"], t.state.haiHide]]), Object(i["f"])(F, {
                ref: "displayNameSelectorElm",
                class: "column default_color",
                style: [t.tagStyle, {
                    "margin-right": "1px"
                }]
            }, null, 8, ["style"]), Object(i["f"])("div", {
                onClick: e[15] || (e[15] = function() {
                    return t.openKyokuBOP && t.openKyokuBOP.apply(t, arguments)
                }
                ),
                class: "btn column",
                style: t.tagStyle
            }, "ptEV", 4), Object(i["y"])(Object(i["f"])("input", {
                type: "checkbox",
                onChange: e[16] || (e[16] = function() {
                    return t.blurEl && t.blurEl.apply(t, arguments)
                }
                ),
                "onUpdate:modelValue": e[17] || (e[17] = function(e) {
                    return t.state.darkColor = e
                }
                ),
                "data-off-label": "🌙",
                "data-on-label": "🌙",
                class: "toggle_button column",
                style: t.tagStyle
            }, null, 36), [[i["t"], t.state.darkColor]])], 4)], 4), [[i["w"], t.state.mobileComment]]), Object(i["f"])("div", {
                class: "columns is-mobile",
                style: t.labelStyle
            }, [Object(i["f"])("div", {
                class: "column is-2 has-text-grey",
                style: t.tagStyle
            }, [Object(i["f"])("p", {
                style: t.versionStyle
            }, Object(i["s"])(t.version), 5)], 4), Object(i["f"])("div", O, [Object(i["f"])(R, {
                class: "default_color",
                style: [t.tagStyle, {
                    "margin-right": "1px"
                }]
            }, null, 8, ["style"])]), Object(i["f"])("div", T, [Object(i["y"])(Object(i["f"])(D, {
                ref: "predShowPatternSelectorVueElm",
                class: "default_color",
                style: [t.tagStyle, {
                    "margin-right": "1px"
                }],
                mobile: t.state.mobile,
                oneLine: t.state.oneLine
            }, null, 8, ["style", "mobile", "oneLine"]), [[i["w"], t.state.mobileComment]])]), t.state.mobile ? Object(i["y"])((Object(i["j"])(),
            Object(i["d"])("input", {
                key: 0,
                type: "checkbox",
                "onUpdate:modelValue": e[18] || (e[18] = function(e) {
                    return t.state.mobileComment = e
                }
                ),
                "data-off-label": "設定",
                "data-on-label": "設定",
                class: "toggle_button column is-3 is-offset-1",
                style: t.tagStyle
            }, null, 4)), [[i["t"], t.state.mobileComment]]) : Object(i["e"])("", !0)], 4), Object(i["f"])("div", {
                class: "columns is-multiline is-mobile",
                style: t.buttonStyle
            }, [(Object(i["j"])(!0),
            Object(i["d"])(i["a"], null, Object(i["q"])(t.order(), (function(e) {
                return Object(i["j"])(),
                Object(i["d"])(P, {
                    name: e[0],
                    func: e[1],
                    key: e,
                    class: "column is-3-mobile",
                    mobile: t.state.mobile,
                    imgHeight: t.state.imgHeight
                }, null, 8, ["name", "func", "mobile", "imgHeight"])
            }
            )), 128))], 4)], 4)) : (Object(i["j"])(),
            Object(i["d"])("div", {
                key: 0,
                class: "container is-fluid",
                style: t.containerStyle,
                ref: "containerDiv"
            }, [Object(i["f"])("div", {
                class: "columns is-mobile",
                style: [t.kyokumenDivStyle, {
                    width: "100%"
                }]
            }, [Object(i["f"])("div", s, [Object(i["f"])(H, {
                ref: "headline",
                haiHide: t.state.haiHide,
                targetSeat: t.state.targetSeat
            }, null, 8, ["haiHide", "targetSeat"])]), Object(i["f"])("div", o, [Object(i["f"])("div", {
                class: "columns",
                style: {
                    height: t.state.controlHeight + "px"
                }
            }, [Object(i["f"])("div", c, [Object(i["f"])("div", {
                class: "columns is-multiline is-mobile",
                style: t.buttonStyle
            }, [(Object(i["j"])(!0),
            Object(i["d"])(i["a"], null, Object(i["q"])(t.order(), (function(e) {
                return Object(i["j"])(),
                Object(i["d"])(P, {
                    name: e[0],
                    func: e[1],
                    key: e,
                    class: "column is-6",
                    mobile: t.state.mobile,
                    imgHeight: t.state.imgHeight
                }, null, 8, ["name", "func", "mobile", "imgHeight"])
            }
            )), 128))], 4), Object(i["f"])("div", {
                class: "columns is-mobile",
                style: t.labelStyle
            }, [Object(i["f"])("div", {
                class: "column is-half default_color",
                id: "th_text",
                style: t.tagStyle
            }, [h], 4), Object(i["f"])(z, {
                targetSeat: t.state.targetSeat,
                options: t.state.names,
                onSeatUpdate: t.setTargetSeat,
                class: "column default_color",
                style: t.selectStyle
            }, null, 8, ["targetSeat", "options", "onSeatUpdate", "style"])], 4), Object(i["f"])("div", {
                class: "columns is-mobile",
                style: t.labelStyle
            }, [Object(i["f"])("div", {
                class: "column is-half default_color",
                style: t.tagStyle
            }, [l], 4), Object(i["f"])(I, {
                style: t.radioStyle,
                mobile: t.state.mobile,
                lineHeight: .95 * t.state.oneLine
            }, null, 8, ["style", "mobile", "lineHeight"])], 4), Object(i["f"])("div", {
                class: "columns is-mobile",
                style: t.labelStyle
            }, [Object(i["y"])(Object(i["f"])("input", {
                type: "checkbox",
                style: [{
                    "margin-right": "1px"
                }, t.tagStyle],
                onChange: e[1] || (e[1] = function() {
                    return t.blurEl && t.blurEl.apply(t, arguments)
                }
                ),
                "onUpdate:modelValue": e[2] || (e[2] = function(e) {
                    return t.state.haiHide = e
                }
                ),
                "data-off-label": "伏牌",
                "data-on-label": "伏牌",
                class: "toggle_button column"
            }, null, 36), [[i["t"], t.state.haiHide]]), Object(i["f"])(F, {
                ref: "displayNameSelectorElm",
                class: "column default_color",
                style: [t.tagStyle, {
                    "margin-right": "1px"
                }]
            }, null, 8, ["style"]), Object(i["y"])(Object(i["f"])("input", {
                type: "checkbox",
                style: [{
                    "margin-right": "1px"
                }, t.tagStyle],
                onChange: e[3] || (e[3] = function() {
                    return t.blurEl && t.blurEl.apply(t, arguments)
                }
                ),
                "onUpdate:modelValue": e[4] || (e[4] = function(e) {
                    return t.state.darkColor = e
                }
                ),
                "data-off-label": "🌙",
                "data-on-label": "🌙",
                class: "toggle_button column"
            }, null, 36), [[i["t"], t.state.darkColor]]), Object(i["f"])("div", {
                class: ["column is-4 btn dropdown", t.kyokumenEditClass],
                style: t.tagStyle,
                ref: "kyokumenEdit",
                onClick: e[7] || (e[7] = function() {
                    return t.openDropdownMenu && t.openDropdownMenu.apply(t, arguments)
                }
                )
            }, [u, Object(i["f"])("div", d, [Object(i["f"])("div", p, [Object(i["f"])("a", {
                onClick: e[5] || (e[5] = function(e) {
                    return t.openKyokumenEdit(!0)
                }
                ),
                class: "dropdown-item",
                style: t.dropdownItemStyle
            }, " 全局面 ", 4), Object(i["f"])("a", {
                onClick: e[6] || (e[6] = function(e) {
                    return t.openKyokumenEdit(!1)
                }
                ),
                href: "#",
                class: "dropdown-item",
                tabindex: "=-1",
                style: t.dropdownItemStyle
            }, " 現局面まで ", 4)])])], 6)], 4), Object(i["f"])("div", {
                class: "columns is-mobile",
                style: t.labelStyle
            }, [Object(i["f"])(D, {
                ref: "predShowPatternSelectorVueElm",
                class: "column default_color",
                style: [t.tagStyle, {
                    "margin-right": "1px"
                }],
                mobile: t.state.mobile,
                oneLine: t.state.oneLine
            }, null, 8, ["style", "mobile", "oneLine"]), Object(i["f"])("div", {
                onClick: e[8] || (e[8] = function() {
                    return t.openKyokuBOP && t.openKyokuBOP.apply(t, arguments)
                }
                ),
                class: "btn column is-3",
                style: t.tagStyle
            }, "ptEV", 4), Object(i["f"])("div", {
                class: "column ",
                style: t.tagStyle
            }, null, 4), Object(i["f"])("div", {
                class: "column is-2 has-text-grey version_str",
                style: t.tagStyle,
                onClick: e[9] || (e[9] = function() {
                    return t.copyURL && t.copyURL.apply(t, arguments)
                }
                )
            }, [Object(i["f"])("p", {
                style: t.versionStyle
            }, Object(i["s"])(t.version), 5)], 4), Object(i["f"])(R, {
                class: "column is-4 default_color",
                style: [t.tagStyle, {
                    "margin-right": "1px"
                }]
            }, null, 8, ["style"])], 4)])], 4), Object(i["f"])("div", {
                class: "column",
                style: {
                    height: t.state.commentHeight + "px"
                }
            }, [Object(i["f"])("div", f, [Object(i["f"])(E, {
                ref: "comment",
                targetSeat: t.state.targetSeat,
                imgHeight: t.state.commentHeight,
                mobile: t.state.mobile,
                newDiff: t.newDiff
            }, null, 8, ["targetSeat", "imgHeight", "mobile", "newDiff"])])], 4)])], 4), Object(i["f"])("div", {
                class: "columns  is-mobile",
                style: t.graphDivStyle
            }, [Object(i["f"])("div", m, [Object(i["f"])(M, {
                pred: t.state.pred,
                targetSeat: t.state.targetSeat,
                mobile: t.state.mobile,
                imgHeight: t.state.imgHeight,
                newDiff: t.newDiff
            }, null, 8, ["pred", "targetSeat", "mobile", "imgHeight", "newDiff"])]), Object(i["f"])("div", g, [Object(i["f"])(A, {
                pred: t.state.pred,
                targetSeat: t.state.targetSeat,
                imgHeight: t.state.imgHeight,
                mobile: t.state.mobile
            }, null, 8, ["pred", "targetSeat", "imgHeight", "mobile"])])], 4)], 4))], 36)
        }
        ))
          , H = (a("99af"),
        a("4de4"),
        a("d81d"),
        a("b0c0"),
        a("a9e3"),
        a("b64b"),
        a("ac1f"),
        a("466d"),
        a("2b3d"),
        a("3835"))
          , P = a("2909");
        function z(t, e, a, n, r, s) {
            return Object(i["j"])(),
            Object(i["d"])("img", {
                src: t.state.url,
                style: {
                    height: "100%",
                    width: "auto"
                }
            }, null, 8, ["src"])
        }
        a("cb29"),
        a("4160"),
        a("caad"),
        a("c975"),
        a("fb6a"),
        a("a434"),
        a("b680"),
        a("2532"),
        a("159b");
        var I = a("d4ec")
          , F = a("bee2")
          , D = a("30ef")
          , R = a.n(D)
          , E = (a("13d5"),
        [[0, 1, 2, 3], [3, 0, 1, 2], [2, 3, 0, 1], [1, 2, 3, 0]])
          , M = [[0, 1, 2, 3], [1, 2, 3, 0], [2, 3, 0, 1], [3, 0, 1, 2]]
          , A = function(t) {
            return Object.keys(t).reduce((function(e, a) {
                return t[e] > t[a] ? e : a
            }
            ))
        }
          , W = {
            "1m": 0,
            "2m": 1,
            "3m": 2,
            "4m": 3,
            "5m": 4,
            "5mr": 4.1,
            "6m": 5,
            "7m": 6,
            "8m": 7,
            "9m": 8,
            "1p": 9,
            "2p": 10,
            "3p": 11,
            "4p": 12,
            "5p": 13,
            "5pr": 13.1,
            "6p": 14,
            "7p": 15,
            "8p": 16,
            "9p": 17,
            "1s": 18,
            "2s": 19,
            "3s": 20,
            "4s": 21,
            "5s": 22,
            "5sr": 22.1,
            "6s": 23,
            "7s": 24,
            "8s": 25,
            "9s": 26,
            E: 27,
            S: 28,
            W: 29,
            N: 30,
            P: 31,
            F: 32,
            C: 33,
            "?": 34
        }
          , N = {
            "1m": 11,
            "2m": 12,
            "3m": 13,
            "4m": 14,
            "5m": 15,
            "6m": 16,
            "7m": 17,
            "8m": 18,
            "9m": 19,
            "1p": 21,
            "2p": 22,
            "3p": 23,
            "4p": 24,
            "5p": 25,
            "6p": 26,
            "7p": 27,
            "8p": 28,
            "9p": 29,
            "1s": 31,
            "2s": 32,
            "3s": 33,
            "4s": 34,
            "5s": 35,
            "6s": 36,
            "7s": 37,
            "8s": 38,
            "9s": 39,
            E: 41,
            S: 42,
            W: 43,
            N: 44,
            P: 45,
            F: 46,
            C: 47,
            "?": 48,
            "5mr": 51,
            "5pr": 52,
            "5sr": 53
        }
          , L = ["1m", "2m", "3m", "4m", "5m", "5mr", "6m", "7m", "8m", "9m", "1p", "2p", "3p", "4p", "5p", "5pr", "6p", "7p", "8p", "9p", "1s", "2s", "3s", "4s", "5s", "5sr", "6s", "7s", "8s", "9s", "E", "S", "W", "N", "P", "F", "C", "ura"]
          , B = new Image(123,10)
          , V = new Image(123,10)
          , G = new Image
          , K = new Image
          , q = new Image(180,180)
          , U = new Image(500,500)
          , J = {}
          , X = {}
          , Y = L.map((function(t) {
            return new Promise((function(e, a) {
                var i = 66
                  , n = 90
                  , r = new Image(i,n);
                r.onload = function() {
                    J[t] = r;
                    var s = document.createElement("canvas")
                      , o = s.getContext("2d");
                    if (o) {
                        s.height = i,
                        s.width = n,
                        o.rotate(270 * Math.PI / 180),
                        o.translate(-i, 0),
                        o.drawImage(r, 0, 0, i, n);
                        var c = new Image;
                        c.onload = function() {
                            X[t] = c,
                            e(c)
                        }
                        ,
                        c.onerror = function(t) {
                            return a(t)
                        }
                        ,
                        c.src = s.toDataURL()
                    }
                }
                ,
                r.onerror = function(t) {
                    return a(t)
                }
                ,
                r.src = "/static/img/hai/".concat(t, ".png"),
                J[t] = r
            }
            ))
        }
        ))
          , Z = function(t, e, a, i) {
            var n = t.width
              , r = t.height
              , s = t.getContext("2d");
            if (null == s)
                throw new Error("ctx is null");
            var o = 20;
            s.fillStyle = i;
            var c = n - 10
              , h = r - 50
              , l = o;
            s.beginPath(),
            s.moveTo(e + l, a),
            s.lineTo(e + c - l, a),
            s.arc(e + c - l, a + l, l, 1.5 * Math.PI, 0, !1),
            s.lineTo(e + c, a + h - l),
            s.arc(e + c - l, a + h - l, l, 0, .5 * Math.PI, !1),
            s.lineTo(e + l, a + h),
            s.arc(e + l, a + h - l, l, .5 * Math.PI, Math.PI, !1),
            s.lineTo(e, a + l),
            s.arc(e + l, a + l, l, Math.PI, 1.5 * Math.PI, !1),
            s.closePath(),
            s.fill();
            var u = {
                x: e + .3 * c,
                y: a + h
            }
              , d = {
                x: e + .35 * c,
                y: a + r - 10
            }
              , p = {
                x: e + .4 * c,
                y: a + h
            };
            s.beginPath(),
            s.moveTo(u.x, u.y),
            s.lineTo(d.x, d.y),
            s.lineTo(p.x, p.y),
            s.lineTo(u.x, u.y),
            s.closePath(),
            s.fill()
        };
        Y.push(new Promise((function(t, e) {
            var a = document.createElement("canvas")
              , i = 560
              , n = 360;
            a.width = i,
            a.height = n,
            Z(a, 0, 0, "white"),
            G.src = a.toDataURL(),
            G.onload = function() {
                return t(0)
            }
            ,
            G.onerror = function(t) {
                return e(t)
            }
        }
        ))),
        Y.push(new Promise((function(t, e) {
            var a = document.createElement("canvas")
              , i = 560
              , n = 360;
            a.width = i,
            a.height = n,
            Z(a, 10, 10, "gray"),
            Z(a, 0, 0, "white"),
            K.src = a.toDataURL(),
            K.onload = function() {
                return t(0)
            }
            ,
            K.onerror = function(t) {
                return e(t)
            }
        }
        ))),
        Y.push(new Promise((function(t, e) {
            U.src = "/static/img/naga500.png",
            U.onload = function() {
                return t(0)
            }
            ,
            U.onerror = function(t) {
                return e(t)
            }
        }
        ))),
        Y.push(new Promise((function(t, e) {
            q.src = "/static/img/selector.png",
            q.onload = function() {
                return t(0)
            }
            ,
            q.onerror = function(t) {
                return e(t)
            }
        }
        ))),
        Y.push(new Promise((function(t, e) {
            B.src = "/static/img/b_1_2.png",
            B.onload = function() {
                return t(0)
            }
            ,
            B.onerror = function(t) {
                return e(t)
            }
        }
        ))),
        Y.push(new Promise((function(t, e) {
            V.src = "/static/img/b_8_2.png",
            V.onload = function() {
                return t(0)
            }
            ,
            V.onerror = function(t) {
                return e(t)
            }
        }
        )));
        var $ = ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "E", "S", "W", "N", "P", "F", "C", "ura"]
          , Q = [16, 52, 88]
          , tt = function(t) {
            return Q.includes(t) ? $[Math.floor(t / 4)] + "r" : $[Math.floor(t / 4)]
        }
          , et = function(t, e, a) {
            var i;
            return 0 == a ? i = e : 1 == a ? (i = ["Aさん", "Bさん", "Cさん", "Dさん"],
            i[t] = e[t]) : i = ["Aさん", "Bさん", "Cさん", "Dさん"],
            i
        }
          , at = {
            oya: {
                1: {
                    30: ["30符1飜500点∀", "30符1飜1500点"],
                    40: ["40符1飜700点∀", "30符1飜2000点"],
                    50: ["50符1飜800点∀", "50符1飜2400点"],
                    60: ["60符1飜1000点∀", "60符1飜2900点"],
                    70: ["70符1飜1200点∀", "70符1飜3400点"],
                    80: ["80符1飜1300点∀", "80符1飜3900点"],
                    90: ["90符1飜1500点∀", "90符1飜4400点"],
                    100: ["100符1飜1600点∀", "100符1飜4800点"],
                    110: ["110符1飜1800点∀", "110符1飜5300点"]
                },
                2: {
                    20: ["20符2飜700点∀", ""],
                    25: ["", "25符2飜2400点"],
                    30: ["30符2飜1000点∀", "30符2飜2900点"],
                    40: ["40符2飜1300点∀", "40符2飜3900点"],
                    50: ["50符2飜1600点∀", "50符2飜4800点"],
                    60: ["60符2飜2000点∀", "60符2飜5800点"],
                    70: ["70符2飜2300点∀", "70符2飜6800点"],
                    80: ["80符2飜2600点∀", "80符2飜7700点"],
                    90: ["90符2飜2900点∀", "90符2飜8700点"],
                    100: ["100符2飜3200点∀", "100符2飜9600点"],
                    110: ["110符2飜3600点∀", "110符2飜10600点"]
                },
                3: {
                    20: ["20符3飜1300点∀", ""],
                    25: ["25符3飜1600点∀", "25符3飜4800点"],
                    30: ["30符3飜2000点∀", "30符3飜5800点"],
                    40: ["40符3飜2600点∀", "40符3飜7700点"],
                    50: ["50符3飜3200点∀", "50符3飜9600点"],
                    60: ["60符3飜3900点∀", "60符3飜11600点"],
                    70: ["満貫4000点∀", "満貫12000点"],
                    80: ["満貫4000点∀", "満貫12000点"],
                    90: ["満貫4000点∀", "満貫12000点"],
                    100: ["満貫4000点∀", "満貫12000点"],
                    110: ["満貫4000点∀", "満貫12000点"]
                },
                4: {
                    20: ["20符4飜2600点∀", ""],
                    25: ["25符4飜3200点∀", "25符4飜9600点"],
                    30: ["30符4飜3900点∀", "30符4飜11600点"],
                    40: ["満貫4000点∀", "満貫12000点"],
                    50: ["満貫4000点∀", "満貫12000点"],
                    60: ["満貫4000点∀", "満貫12000点"],
                    70: ["満貫4000点∀", "満貫12000点"],
                    80: ["満貫4000点∀", "満貫12000点"],
                    90: ["満貫4000点∀", "満貫12000点"],
                    100: ["満貫4000点∀", "満貫12000点"],
                    110: ["満貫4000点∀", "満貫12000点"]
                }
            },
            ko: {
                1: {
                    30: ["30符1飜300-500点", "30符1飜1000点"],
                    40: ["40符1飜400-700点", "40符1飜1000点"],
                    50: ["50符1飜400-800点", "50符1飜1000点"],
                    60: ["60符1飜500-1000点", "60符1飜1000点"],
                    70: ["70符1飜600-1200点", "70符1飜1000点"],
                    80: ["80符1飜700-1300点", "80符1飜1000点"],
                    90: ["90符1飜800-1500点", "90符1飜1000点"],
                    100: ["100符1飜800-1600点", "100符1飜1000点"],
                    110: ["110符1飜900-1800点", "110符1飜1000点"]
                },
                2: {
                    20: ["20符2飜400-700点", ""],
                    25: ["", "25符2飜1600点"],
                    30: ["30符2飜500-1000点", "30符2飜2000点"],
                    40: ["40符2飜700-1300点", "40符2飜2600点"],
                    50: ["50符2飜800-1600点", "50符2飜3200点"],
                    60: ["60符2飜1000-2000点", "60符2飜3900点"],
                    70: ["70符2飜1200-2300点", "70符2飜4500点"],
                    80: ["80符2飜1300-2600点", "80符2飜5200点"],
                    90: ["90符2飜1500-2900点", "90符2飜5800点"],
                    100: ["100符2飜1600-3200点", "100符2飜6400点"],
                    110: ["110符2飜1800-3600点", "110符2飜7100点"]
                },
                3: {
                    20: ["20符3飜700-1300点", ""],
                    25: ["25符3飜800-1600点", "25符3飜3200点"],
                    30: ["30符3飜1000-2000点", "30符3飜3900点"],
                    40: ["40符3飜1300-2600点", "40符3飜5200点"],
                    50: ["50符3飜1600-3200点", "50符3飜6400点"],
                    60: ["60符3飜2000-3900点", "60符3飜7700点"],
                    70: ["70符3飜2000-4000点", "70符3飜8000点"],
                    80: ["80符3飜2000-4000点", "80符3飜8000点"],
                    90: ["90符3飜2000-4000点", "90符3飜8000点"],
                    100: ["100符3飜2000-4000点", "100符3飜8000点"],
                    110: ["110符3飜2000-4000点", "110符3飜8000点"]
                },
                4: {
                    20: ["20符4飜1300-2600点", ""],
                    25: ["25符4飜1600-3200点", "25符4飜6400点"],
                    30: ["30符4飜2000-3900点", "30符4飜7700点"],
                    40: ["40符4飜2000-4000点", "40符4飜8000点"],
                    50: ["50符4飜2000-4000点", "50符4飜8000点"],
                    60: ["60符4飜2000-4000点", "60符4飜8000点"],
                    70: ["70符4飜2000-4000点", "70符4飜8000点"],
                    80: ["80符4飜2000-4000点", "80符4飜8000点"],
                    90: ["90符4飜2000-4000点", "90符4飜8000点"],
                    100: ["100符4飜2000-4000点", "100符4飜8000点"],
                    110: ["110符4飜2000-4000点", "110符4飜8000点"]
                }
            }
        }
          , it = {
            oya: {
                1: ["満貫4000点∀", "満貫12000点"],
                2: ["跳満6000点∀", "跳満18000点"],
                3: ["倍満8000点∀", "倍満24000点"],
                4: ["三倍満12000点∀", "三倍満36000点"],
                5: ["役満16000点∀", "役満48000点"]
            },
            ko: {
                1: ["満貫2000-4000点", "満貫8000点"],
                2: ["跳満3000-6000点", "跳満12000点"],
                3: ["倍満4000-8000点", "倍満16000点"],
                4: ["三倍満6000-12000点", "三倍満36000点"],
                5: ["役満8000-16000点", "役満48000点"]
            }
        }
          , nt = function t(e) {
            Object(I["a"])(this, t),
            this.notMatchMoveCount = Object(P["a"])(Array(4).keys()).map((function(t) {
                return Array(e).fill(0)
            }
            )),
            this.NagaRate = Object(P["a"])(Array(4).keys()).map((function(t) {
                return Array(e).fill(0)
            }
            )),
            this.badMoveCount = Object(P["a"])(Array(4).keys()).map((function(t) {
                return Array(e).fill(0)
            }
            )),
            this.dahaiCount = [0, 0, 0, 0],
            this.dahaiDecisionCount = [0, 0, 0, 0],
            this.horaCount = [0, 0, 0, 0],
            this.horaPoint = [0, 0, 0, 0],
            this.hojuCount = [0, 0, 0, 0],
            this.hojuPoint = [0, 0, 0, 0],
            this.reachCount = [0, 0, 0, 0],
            this.huroCount = [0, 0, 0, 0],
            this.huroKyokuCount = [0, 0, 0, 0],
            this.badMoveRate = [],
            this.similarity = [],
            this.accuracy = []
        }
          , rt = {
            AllShow: 0,
            PointingOutHide: 1,
            DahaiHide: 2,
            AllHide: 3
        }
          , st = function() {
            function t(e, a, i, n, r, s, o, c, h, l) {
                Object(I["a"])(this, t),
                this.targetSeat = e,
                this.pred = r,
                this.names = s,
                this.rate = c,
                this.umaoka = h,
                this.reusltValues = l,
                this.isSingleKyoku = 1 === r.length;
                var u = ["新人", "9級", "8級", "7級", "6級", "5級", "4級", "3級", "2級", "1級", "初段", "二段", "三段", "四段", "五段", "六段", "七段", "八段", "九段", "十段", "天鳳位"];
                if (this.dan = o.map((function(t) {
                    return u[t]
                }
                )),
                this.canvas = document.createElement("canvas"),
                this.canvas.width = 2 * t.taku_width,
                this.canvas.height = 2 * t.taku_height,
                !(this.ctx = this.canvas.getContext("2d")))
                    throw new Error("2d context not supported or canvas already initialized");
                this.ctx.scale(2, 2),
                this.renderState = [],
                this.num2hai = tt,
                this.playerTypeNum = i,
                this.playerType = a,
                this.nagaTypeNames = n,
                this.tmpImgs = Object(P["a"])(Array(4).keys()).map((function(t) {
                    return [new Image, new Image, new Image]
                }
                )),
                this.scoreMoveImg = Object(P["a"])(Array(4).keys()).map((function(t) {
                    return new Image
                }
                )),
                this.createCompareGraph(),
                this.createScoreMoveGraph()
            }
            return Object(F["a"])(t, [{
                key: "tehaiSort",
                value: function(t) {
                    return Object(P["a"])(t).map((function(t) {
                        return t
                    }
                    )).sort((function(t, e) {
                        return W[t] < W[e] ? -1 : W[t] > W[e] ? 1 : 0
                    }
                    ))
                }
            }, {
                key: "call",
                value: function(e) {
                    var a = this
                      , i = this.pred[e]
                      , n = i[0].info.msg
                      , r = n.tehais.map((function(t) {
                        return a.tehaiSort(t)
                    }
                    ))
                      , s = ["?", "?", "?", "?"]
                      , o = [[], [], [], []]
                      , c = [[], [], [], []]
                      , h = n.scores
                      , l = n.bakaze
                      , u = n.kyoku
                      , d = n.honba
                      , p = n.kyotaku
                      , f = []
                      , m = ["ura", "ura", "ura", "ura", "ura"];
                    n.dora_marker && (f.push(t.num2dora[W[n.dora_marker.slice(0, 2)]]),
                    m[0] = n.dora_marker);
                    var g, y, b = !1, k = [!1, !1, !1, !1], v = i.length, w = 70, _ = 1;
                    h[this.targetSeat];
                    var x, j, S = "", O = [];
                    this.renderState.push(O),
                    O.push({
                        msg: n,
                        tehais: r.map((function(t) {
                            return t.slice()
                        }
                        )),
                        tsumoHais: s.slice(),
                        dahais: o.map((function(t) {
                            return t.map((function(t) {
                                return t.slice()
                            }
                            ))
                        }
                        )),
                        nakihais: c.map((function(t) {
                            return t.map((function(t) {
                                return Object.assign({}, t)
                            }
                            ))
                        }
                        )),
                        wanpai: m.slice(),
                        bakaze: l,
                        kyoku: u,
                        honba: d,
                        kyotaku: p,
                        reachFlags: k.slice(),
                        scores: h.slice(),
                        dora: f.slice(),
                        vocalization: S
                    });
                    for (var T = 1; T < v; T++) {
                        switch (S = "",
                        n = i[T].info.msg,
                        w < 4 && !1,
                        y = n.type,
                        x = n.actor,
                        y) {
                        case "tsumo":
                            r[x].push(n.pai),
                            r[x] = this.tehaiSort(r[x]),
                            s[x] = n.pai,
                            w -= 1;
                            break;
                        case "dahai":
                            r[x].splice(r[x].indexOf(n.pai), 1),
                            o[x].push([n.pai, b, n.tsumogiri, null]);
                            break;
                        case "pei":
                            r[x].splice(r[x].indexOf("N"), 1);
                            break;
                        case "reach":
                            !1,
                            b = !0,
                            S = "リーチ";
                            break;
                        case "reach_accepted":
                            h = n.scores.slice(),
                            k[x] = !0,
                            b = !1,
                            p += 1;
                            break;
                        case "chi":
                        case "pon":
                            x === this.targetSeat && !1,
                            n.consumed.forEach((function(t) {
                                r[x].splice(r[x].indexOf(t), 1)
                            }
                            )),
                            g = n.consumed.slice(),
                            g.splice(3 - E[x][n.target], 0, n.pai),
                            n.time = o[x].length,
                            c[x].push(n),
                            o[n.target][o[n.target].length - 1][3] = "_" + y[0] + x,
                            S = "chi" === y ? "チー" : "ポン";
                            break;
                        case "ankan":
                            n.consumed.forEach((function(t) {
                                r[x].splice(r[x].indexOf(t), 1)
                            }
                            )),
                            s[x] = "?",
                            n.time = o[x].length,
                            c[x].push(n),
                            S = "カン";
                            break;
                        case "kakan":
                            r[x].splice(r[x].indexOf(n.pai), 1),
                            c[x].forEach((function(t) {
                                "pon" === t.type && t.pai.slice(0, 2) === n.pai.slice(0, 2) && (t.kanPai = n.pai,
                                t.kanTime = o[x].length)
                            }
                            )),
                            s[x] = "?",
                            S = "カン";
                            break;
                        case "daiminkan":
                            x === this.targetSeat && !1,
                            n.consumed.forEach((function(t) {
                                r[x].splice(r[x].indexOf(t), 1)
                            }
                            )),
                            g = n.consumed.slice(),
                            j = 3 - E[x][n.target],
                            2 === j && (j = 3),
                            g.splice(j, 0, n.pai),
                            n.time = o[x].length,
                            c[x].push(n),
                            o[n.target][o[n.target].length - 1][3] = "_k" + x,
                            S = "カン";
                            break;
                        case "dora":
                            m[_] = n.dora_marker,
                            _ += 1,
                            s = ["?", "?", "?", "?"],
                            f.push(t.num2dora[W[n.dora_marker.slice(0, 2)]]);
                            break
                        }
                        O.push({
                            msg: n,
                            tehais: r.map((function(t) {
                                return t.slice()
                            }
                            )),
                            tsumoHais: s.slice(),
                            dahais: o.map((function(t) {
                                return t.map((function(t) {
                                    return t.slice()
                                }
                                ))
                            }
                            )),
                            nakihais: c.map((function(t) {
                                return t.map((function(t) {
                                    return Object.assign({}, t)
                                }
                                ))
                            }
                            )),
                            wanpai: m.slice(),
                            bakaze: l,
                            kyoku: u,
                            honba: d,
                            kyotaku: p,
                            reachFlags: k.slice(),
                            scores: h.slice(),
                            dora: f.slice(),
                            vocalization: S
                        }),
                        "dahai" === y && (s = ["?", "?", "?", "?"])
                    }
                }
            }, {
                key: "takuRender",
                value: function(e, a, i, n, r, s, o) {
                    var c, h, l = !n, u = o.getDisplayNameType(), d = this.renderState[e][a], p = d.msg;
                    if (s)
                        return null === (c = this.ctx) || void 0 === c || c.clearRect(0, 0, t.taku_width, t.taku_height),
                        void this.getCompareWindow();
                    if (r)
                        return null === (h = this.ctx) || void 0 === h || h.clearRect(0, 0, t.taku_width, t.taku_height),
                        void this.getResultWindow(this.pred[e][0].info.msg.end_msgs[i - 1], u);
                    this.fillBGColor(d, p);
                    var f, m = i >= 1;
                    if (m)
                        if ("ryukyoku" == this.pred[e][0].info.msg.end_msgs[0].type) {
                            var g = this.pred[e][0].info.msg.end_msgs[0].tenpais;
                            f = Object(P["a"])(Array(4).keys()).filter((function(t) {
                                return g[t]
                            }
                            ))
                        } else
                            f = this.pred[e][0].info.msg.end_msgs.map((function(t) {
                                return t.actor
                            }
                            ));
                    else
                        f = [];
                    for (var y = 0; y < 4; y++) {
                        var b = M[this.targetSeat][y]
                          , k = n && !f.includes(b);
                        this.renderPlayerInfo(b, y, this.pred[e][a], o),
                        this.renderTehai(b, p, d, this.pred[e][a], y, k, l, o),
                        this.renderDahai(b, p, d, y, l),
                        this.RenderCenterLine(y),
                        this.renderScore(b, d, y),
                        this.renderHuro(d.nakihais[b], y),
                        this.takuRotate()
                    }
                    this.renderWanpai(d, l),
                    this.renderBa(d, p),
                    m && this.getEndWindow(d, this.pred[e][0].info.msg.end_msgs[i - 1], u)
                }
            }, {
                key: "_renderTehaiRect",
                value: function(e, a, i, n) {
                    this.ctx.beginPath(),
                    this.ctx.lineWidth = e,
                    this.ctx.strokeStyle = a,
                    this.ctx.rect(i + e / 2, n + e / 2, t.hai_w - e, t.hai_h - e),
                    this.ctx.stroke()
                }
            }, {
                key: "_renderTehaiHit",
                value: function(e, a, i, n, r) {
                    -1 != e.indexOf(i) ? (this.ctx.fillStyle = t.hora_hai_color,
                    this.ctx.fillRect(n, r, t.hai_w, t.hai_h)) : -1 != a.indexOf(i) && (this.ctx.fillStyle = t.hoju_hai_color,
                    this.ctx.fillRect(n, r, t.hai_w, t.hai_h))
                }
            }, {
                key: "renderTehai",
                value: function(e, a, i, n, r, s, o, c) {
                    var h, l, u, d = this, p = t.tehai_pos[r][0], f = t.tehai_pos[r][1], m = i.tehais[e].slice(), g = i.tsumoHais[e], y = a.type, b = a.real_dahai, k = a.pred_dahai ? a.pred_dahai[this.playerType] : "??", v = a.next_tsumogiri, w = !1, _ = t.hai_h, x = [], j = [], S = 0 == r, O = c.getShowPred(), T = c.getShowDangerPred();
                    if (n.machi) {
                        n.machi[this.targetSeat] && (x = n.machi[this.targetSeat]);
                        for (var C = 0; C < 4; C++)
                            C != this.targetSeat && n.machi[C] && (j = j.concat(n.machi[C]))
                    }
                    if (s = 0 != r && s,
                    v && (b = ""),
                    k === g && (w = !0,
                    k = ""),
                    a.actor != e && (w = v = !1,
                    b = k = ""),
                    "dahai" === y && a.actor === e && (a.tsumogiri ? g = "?" : (m.push(a.pai),
                    m = this.tehaiSort(m),
                    m.splice(m.indexOf(a.pai), 1, "?"))),
                    a.actor == e)
                        switch (y) {
                        case "ankan":
                            a.consumed[0].slice(0, 2) === g && (g = "?");
                            break;
                        case "kakan":
                            a.pai === g && (g = "?");
                            break;
                        case "chi":
                        case "pon":
                        case "daiminkan":
                            m = m.concat(a.consumed),
                            m = this.tehaiSort(m),
                            a.consumed.forEach((function(t) {
                                m.splice(m.indexOf(t), 1, "?")
                            }
                            ));
                            break
                        }
                    if ("?" != g && m.splice(m.indexOf(g), 1),
                    this.setFillStyle("rgb(124, 59, 230)"),
                    s && (m = m.map((function(t) {
                        return "?" == t ? t : "ura"
                    }
                    )),
                    "?" != g && (g = "ura")),
                    this.ctx && m.forEach((function(e) {
                        if ("?" != e) {
                            if (d.ctx.drawImage(J[e], 0, 0, 66, 90, p, f, t.hai_w, t.hai_h),
                            u = W[e.slice(0, 2)],
                            h = 1 == n.dahaiPred.length ? n.dahaiPred[0][u] : n.dahaiPred[d.playerType][u],
                            l = [n.dangerS[d.targetSeat][u], n.dangerT[d.targetSeat][u], n.dangerK[d.targetSeat][u]],
                            S && O && (d.setFillStyle(t.playerColors[0]),
                            h && a.actor === d.targetSeat && d.renderDahaiGraph(n, u, p, f),
                            k === e && (d._renderTehaiRect(3, "rgb(124, 59, 230)", p, f),
                            k = ""),
                            b === e && (d._renderTehaiRect(2, "red", p, f),
                            b = "")),
                            S && T)
                                for (var i = 0; i < 3; i++)
                                    d.setFillStyle(t.playerColors[3 - i]),
                                    l[2 - i] && d.ctx.fillRect(p + 1 + 9 * i, f + t.hai_h, 9, _ * l[2 - i]);
                            o && d._renderTehaiHit(x, j, u, p, f)
                        }
                        p += t.hai_w
                    }
                    )),
                    "?" != g) {
                        if (p += ~~(t.hai_w / 2),
                        this.ctx.drawImage(J[g], p, f, t.hai_w, t.hai_h),
                        u = W[g.slice(0, 2)],
                        h = 1 == n.dahaiPred.length ? n.dahaiPred[0][u] : n.dahaiPred[this.playerType][u],
                        l = [n.dangerS[this.targetSeat][u], n.dangerT[this.targetSeat][u], n.dangerK[this.targetSeat][u]],
                        S && O && (h && (this.setFillStyle(t.playerColors[0]),
                        this.renderDahaiGraph(n, u, p, f)),
                        w && this._renderTehaiRect(3, "rgb(124, 59, 230)", p, f),
                        v && this._renderTehaiRect(2, "red", p, f)),
                        S && T)
                            for (var H = 0; H < 3; H++)
                                this.setFillStyle(t.playerColors[3 - H]),
                                l[2 - H] && this.ctx.fillRect(p + 1 + 9 * H, f + t.hai_h, 9, _ * l[2 - H]);
                        o && this._renderTehaiHit(x, j, u, p, f)
                    }
                }
            }, {
                key: "hogerenderDahaiGraph",
                value: function(e, a, i, n) {
                    var r, s, o = t.hai_h, c = 20, h = 4, l = (t.hai_w - c) / 2, u = 2 * (c - .5 * (this.playerTypeNum - 1) * h) / (this.playerTypeNum + 1), d = .5 * (u + h), p = i + l;
                    this.setFillStyle("rgb(80, 80, 80)");
                    for (var f = 0; f < this.playerTypeNum; f++) {
                        var m = e.dahaiPred[f][a];
                        f == this.playerType && (r = p,
                        s = m),
                        this.ctx.fillRect(p, n - o * m, u, o * m),
                        p += d
                    }
                    this.setFillStyle("rgb(144, 79, 230)"),
                    p = r;
                    var g = s;
                    this.ctx.fillRect(p, n - o * g, u, o * g)
                }
            }, {
                key: "renderDahaiGraph",
                value: function(e, a, i, n) {
                    var r, s, o = 1.7, c = 10 / o, h = t.hai_h, l = 20, u = .5, d = (l - (this.playerTypeNum - 1) * u) / (this.playerTypeNum + o - 1), p = Math.min(d, c), f = (t.hai_w - (this.playerTypeNum - 1) * u - (this.playerTypeNum + o - 1) * p) / 2, m = p * o, g = p + u, y = i + f;
                    this.setFillStyle("rgb(90, 92, 78)");
                    for (var b = 0; b < this.playerTypeNum; b++) {
                        var k = e.dahaiPred[b][a]
                          , v = h * k;
                        b == this.playerType ? (this.ctx.fillRect(y, n - v, m, v),
                        r = y,
                        s = v,
                        y += m + u) : (this.ctx.fillRect(y, n - v, p, v),
                        y += g)
                    }
                    this.setFillStyle("rgb(124, 59, 230)"),
                    y = r;
                    var w = s
                      , _ = .5;
                    this.ctx.fillRect(y, n - w, m, w),
                    this.ctx.beginPath(),
                    this.ctx.lineWidth = _,
                    this.ctx.strokeStyle = "rgb(201, 146, 211)",
                    this.ctx.rect(y, n - w, m, w),
                    this.ctx.stroke(),
                    this.setFillStyle("rgb(124, 59, 230)"),
                    this.ctx.fillRect(y + _, n - w + _, m - 2 * _, w - _)
                }
            }, {
                key: "renderDahai",
                value: function(e, a, i, n, r) {
                    var s, o, c, h, l = this, u = Object(H["a"])(t.dahai_pos[n], 2), d = u[0], p = u[1], f = 0, m = [], g = [];
                    this.setFillStyle("rgba(60, 60, 60, 20)"),
                    i.dahais[e].forEach((function(e) {
                        if (s = null,
                        o = e[0],
                        c = W[o.slice(0, 2)],
                        e[2] && (s = "rgba(0, 0, 0, 0.3)"),
                        h = e[3],
                        e[1]) {
                            var a, i, u;
                            if (null === (a = l.ctx) || void 0 === a || a.drawImage(X[o], d, p, t.hai_h, t.hai_w),
                            s)
                                l.setFillStyle(s),
                                null === (i = l.ctx) || void 0 === i || i.fillRect(d, p, t.hai_h, t.hai_w);
                            if (m.includes(c))
                                l.setFillStyle(t.hora_hai_color),
                                null === (u = l.ctx) || void 0 === u || u.fillRect(d, p, t.hai_h, t.hai_w);
                            else if (g.includes(c)) {
                                var y;
                                l.setFillStyle(t.hoju_hai_color),
                                null === (y = l.ctx) || void 0 === y || y.fillRect(d, p, t.hai_h, t.hai_w)
                            }
                            h && (l.setFillStyle(t.hora_hai_color),
                            l.ctx.beginPath(),
                            l.ctx.lineWidth = 2,
                            l.ctx.strokeStyle = "red",
                            l.ctx.rect(d - 1, p - 1, t.hai_h + 2, t.hai_w + 2),
                            l.ctx.stroke()),
                            d += t.hai_h
                        } else {
                            var b, k, v;
                            if (null === (b = l.ctx) || void 0 === b || b.drawImage(J[o], d, p, t.hai_w, t.hai_h),
                            s)
                                l.setFillStyle(s),
                                null === (k = l.ctx) || void 0 === k || k.fillRect(d, p, t.hai_w, t.hai_h);
                            if (r)
                                if (m.includes(c))
                                    l.setFillStyle(t.hora_hai_color),
                                    null === (v = l.ctx) || void 0 === v || v.fillRect(d, p, t.hai_w, t.hai_h);
                                else if (g.includes(c)) {
                                    var w;
                                    l.setFillStyle(t.hoju_hai_color),
                                    null === (w = l.ctx) || void 0 === w || w.fillRect(d, p, t.hai_w, t.hai_h)
                                }
                            h && l._renderTehaiRect(2, "red", d, p),
                            d += t.hai_w
                        }
                        5 !== f && 11 != f || (d = t.dahai_pos[n][0],
                        p += t.hai_h),
                        f += 1
                    }
                    )),
                    this.setFillStyle("white")
                }
            }, {
                key: "renderHuro",
                value: function(e, a) {
                    var i = this
                      , n = t.huro_pos[a][0]
                      , r = t.huro_pos[a][1] - t.hai_h;
                    e.forEach((function(e) {
                        switch (e.type) {
                        case "chi":
                            n -= t.hai_h + 2 * t.hai_w,
                            i.renderChi(e, n, r);
                            break;
                        case "pon":
                            n -= t.hai_h + 2 * t.hai_w,
                            i.renderPon(e, n, r);
                            break;
                        case "ankan":
                            n -= 4 * t.hai_w,
                            i.renderAnkan(e, n, r);
                            break;
                        case "daiminkan":
                            n -= t.hai_h + 3 * t.hai_w,
                            i.renderDaiminkan(e, n, r);
                            break
                        }
                        n -= ~~(t.hai_w / 5)
                    }
                    ))
                }
            }, {
                key: "renderChi",
                value: function(e, a, i) {
                    this.ctx.drawImage(X[e.pai], a, i + t.hai_h - t.hai_w, t.hai_h, t.hai_w),
                    this.ctx.drawImage(J[e.consumed[0]], a + t.hai_h, i, t.hai_w, t.hai_h),
                    this.ctx.drawImage(J[e.consumed[1]], a + t.hai_h + t.hai_w, i, t.hai_w, t.hai_h)
                }
            }, {
                key: "renderPon",
                value: function(e, a, i) {
                    var n = e.consumed.slice()
                      , r = 3 - E[e.actor][e.target];
                    n.splice(r, 0, e.pai);
                    for (var s = 0; s < 3; s++)
                        s != r ? (this.ctx.drawImage(J[n[s]], a, i, t.hai_w, t.hai_h),
                        a += t.hai_w) : (this.ctx.drawImage(X[n[s]], a, i + t.hai_h - t.hai_w, t.hai_h, t.hai_w),
                        e.kanPai && this.ctx.drawImage(X[e.kanPai], a, i + t.hai_h - 2 * t.hai_w, t.hai_h, t.hai_w),
                        a += t.hai_h)
                }
            }, {
                key: "renderAnkan",
                value: function(e, a, i) {
                    for (var n, r = 0; r < 4; r++)
                        n = 0 === r || 3 === r ? "ura" : e.consumed[r],
                        this.ctx.drawImage(J[n], a, i, t.hai_w, t.hai_h),
                        a += t.hai_w
                }
            }, {
                key: "renderDaiminkan",
                value: function(e, a, i) {
                    var n = e.consumed.slice()
                      , r = 3 - E[e.actor][e.target];
                    2 === r && r++,
                    n.splice(r, 0, e.pai);
                    for (var s = 0; s < 4; s++)
                        s != r ? (this.ctx.drawImage(J[n[s]], a, i, t.hai_w, t.hai_h),
                        a += t.hai_w) : (this.ctx.drawImage(X[n[s]], a, i + t.hai_h - t.hai_w, t.hai_h, t.hai_w),
                        a += t.hai_h)
                }
            }, {
                key: "RenderCenterLine",
                value: function(e) {
                    var a, i = Object(H["a"])(t.dahai_pos[e], 2), n = i[0], r = i[1];
                    this.setFillStyle(t.playerColors[e]),
                    null === (a = this.ctx) || void 0 === a || a.fillRect(n, r - t.line_height, t.line_width, t.line_height)
                }
            }, {
                key: "renderBa",
                value: function(e, a) {
                    this.ctx.fillStyle = "white",
                    this.setFont(32);
                    var i = "".concat(t.kaze_moji[e.bakaze]).concat(t.kyoku_moji[e.kyoku - 1], "局")
                      , n = t.ba_pos[1]
                      , r = t.taku_width / 2 - this.ctx.measureText(i).width / 2;
                    if (this.ctx.fillText(i, r, n),
                    this.setFont(13),
                    this.ctx.fillText("× " + e.kyotaku, t.kyoutaku_pos[0], t.kyoutaku_pos[1]),
                    this.ctx.fillText("× " + e.honba, t.honba_pos[0], t.honba_pos[1]),
                    this.ctx.drawImage(B, t.kyoutaku_rod_pos[0], t.kyoutaku_rod_pos[1], t.kyoutaku_rod_size[0], t.kyoutaku_rod_size[1]),
                    this.ctx.drawImage(V, t.honba_rod_pos[0], t.honba_rod_pos[1], t.kyoutaku_rod_size[0], t.kyoutaku_rod_size[1]),
                    this.setFont(16),
                    this.ctx.fillText("".concat(a.left_hai_num || 0), r + 5, n + 17 + 4),
                    e.vocalization) {
                        this.ctx.font = "900 " + t.vocalization_font_size + "px 'vocalization'";
                        var s = E[this.targetSeat][a.actor]
                          , o = t.vocalization_pos[s][0] - this.ctx.measureText(e.vocalization).width / 2;
                        this.setFillStyle("black"),
                        this.ctx.fillText(e.vocalization, o + 2, t.vocalization_pos[s][1] + 2),
                        this.setFillStyle("white"),
                        this.ctx.fillText(e.vocalization, o, t.vocalization_pos[s][1]),
                        this.ctx.lineWidth = 2,
                        this.ctx.strokeStyle = "black",
                        this.ctx.strokeText(e.vocalization, o, t.vocalization_pos[s][1])
                    }
                }
            }, {
                key: "renderWanpai",
                value: function(e, a) {
                    var i, n = this, r = t.wanpai_pos[0], s = [], o = [];
                    e.wanpai.forEach((function(e) {
                        var c, h;
                        if (null === (c = n.ctx) || void 0 === c || c.drawImage(J[e], r, t.wanpai_pos[1], t.wanpai_w, t.wanpai_h),
                        i = W[e.slice(0, 2)],
                        a)
                            if (-1 != s.indexOf(i))
                                n.setFillStyle(t.hora_hai_color),
                                null === (h = n.ctx) || void 0 === h || h.fillRect(r, t.wanpai_pos[1], t.wanpai_w, t.wanpai_h);
                            else if (-1 != o.indexOf(i)) {
                                var l;
                                n.setFillStyle(t.hoju_hai_color),
                                null === (l = n.ctx) || void 0 === l || l.fillRect(r, t.wanpai_pos[1], t.wanpai_w, t.wanpai_h)
                            }
                        r += t.wanpai_w
                    }
                    ))
                }
            }, {
                key: "renderScore",
                value: function(e, a, i) {
                    if (this.ctx) {
                        var n;
                        this.setFillStyle("white"),
                        this.setFont(23);
                        var r = a.scores[e] / 100
                          , s = "".concat(t.seat2kaze[a.kyoku - 1][e], " ").concat(r)
                          , o = null === (n = this.ctx) || void 0 === n ? void 0 : n.measureText(s)
                          , c = o.width + this.ctx.measureText("00").width
                          , h = t.score_pos[i][1]
                          , l = t.dahai_pos[i][0] + t.line_width / 2 - c / 2;
                        this.ctx.fillText(s, l, h),
                        this.setFillStyle("rgba(255, 255, 255, 0.5)"),
                        this.setFont(13),
                        this.ctx.fillText("00", l + o.width, h)
                    }
                }
            }, {
                key: "getScoreStr",
                value: function(t) {
                    return t < 0 ? ["-", "".concat(-t), "rgb(255,0,0)"] : t > 0 ? ["+", "".concat(t), "rgb(0,200,200)"] : ["", "", "rgb(255,255,255)"]
                }
            }, {
                key: "renderEndWindowDora",
                value: function(e, a, i) {
                    var n = this
                      , r = 0;
                    for (e.forEach((function(e) {
                        var s;
                        null === (s = n.ctx) || void 0 === s || s.drawImage(J[e], a, i, t.end_dora_w, t.end_dora_h),
                        a += t.end_dora_w,
                        r += 1
                    }
                    )); r < 5; r++) {
                        var s;
                        null === (s = this.ctx) || void 0 === s || s.drawImage(J["ura"], a, i, t.end_dora_w, t.end_dora_h),
                        a += t.end_dora_w
                    }
                }
            }, {
                key: "getEndWindow",
                value: function(e, a, i) {
                    var n, r, s, o, c = this, h = a.scores, l = a.deltas, u = l.map((function(t) {
                        return c.getScoreStr(t)
                    }
                    ));
                    if (h = Object(P["a"])(Array(4).keys()).map((function(t) {
                        return h[t] - l[t]
                    }
                    )),
                    this.setFont(40),
                    this.setFillStyle("rgba(10, 10, 10, 0.9)"),
                    "hora" == a.type) {
                        this.setFont(16);
                        var d = this.ctx.measureText("本場:".concat(a.ba[0])).width;
                        this.setFont(40);
                        var p = (t.taku_width - t.end_window_size[0]) / 2
                          , f = p + t.end_window_size[0] / 2
                          , m = a.hora_rank;
                        this.ctx.fillRect(p, t.end_window_pos, t.end_window_size[0], t.end_window_size[1]),
                        this.ctx.beginPath(),
                        this.ctx.lineWidth = 2,
                        this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)",
                        this.ctx.rect(p, t.end_window_pos, t.end_window_size[0], t.end_window_size[1]),
                        this.ctx.stroke(),
                        this.setFillStyle("white");
                        var g = t.end_window_pos + 70;
                        if (m > 0) {
                            var y = ["満貫", "跳満", "倍満", "三倍満", "役満"][m - 1]
                              , b = this.ctx.measureText("".concat(y).concat(a.raw_delta, "点")).width;
                            n = (t.taku_width - b - d) / 2,
                            this.setFillStyle("rgba(255, 255, 255, 0.5)"),
                            this.ctx.fillText(y, n, g),
                            n += this.ctx.measureText(y).width
                        } else {
                            var k = this.ctx.measureText("".concat(a.hu, "符").concat(a.fan, "翻").concat(a.raw_delta, "点")).width;
                            n = (t.taku_width - k - d) / 2,
                            this.ctx.fillText("".concat(a.hu), n, g),
                            n += this.ctx.measureText("".concat(a.hu)).width,
                            this.setFillStyle("rgba(255, 255, 255, 0.5)"),
                            this.ctx.fillText("符", n, g),
                            n += this.ctx.measureText("符").width,
                            this.setFillStyle("white"),
                            this.ctx.fillText("".concat(a.fan), n, g),
                            n += this.ctx.measureText("".concat(a.fan)).width,
                            this.setFillStyle("rgba(255, 255, 255, 0.5)"),
                            this.ctx.fillText("翻", n, g),
                            n += this.ctx.measureText("翻").width
                        }
                        this.setFillStyle("white"),
                        this.ctx.fillText("".concat(a.raw_delta), n, g),
                        n += this.ctx.measureText("".concat(a.raw_delta)).width,
                        this.setFillStyle("rgba(255, 255, 255, 0.5)"),
                        this.ctx.fillText("点", n, g),
                        n += this.ctx.measureText("点").width,
                        n += 30,
                        this.setFont(16),
                        this.ctx.fillText("本場:", n, g - 17),
                        this.ctx.fillText("供託:", n, g),
                        this.setFillStyle();
                        var v = this.ctx.measureText("本場:").width;
                        this.ctx.fillText("".concat(a.ba[0]), n + v, g - 17),
                        this.ctx.fillText("".concat(a.ba[1]), n + v, g),
                        this.renderEndWindowDora(e.wanpai, f - 6 * t.end_dora_w, g + 20),
                        this.renderEndWindowDora(a.uradora_markers.map((function(t) {
                            return tt(t)
                        }
                        )), f + t.end_dora_w, g + 20),
                        this.setFont(22);
                        var w = 15
                          , _ = 30
                          , x = this.ctx.measureText("混全帯ヤオ").width
                          , j = Math.ceil(a.yakus.length / 5)
                          , S = x + w + this.ctx.measureText("2翻").width;
                        n = f - (S * j + _ * (j - 1)) / 2,
                        r = g + t.end_dora_h + 70;
                        for (var O = 0; O < a.yakus_detail.length; O++) {
                            var T = a.yakus_detail[O];
                            13 != T[1] ? (this.setFillStyle(),
                            this.ctx.fillText("".concat(t.yaku_dict[T[0]]), n, r),
                            this.ctx.fillText("".concat(T[1]), n + x + w, r),
                            this.setFillStyle("rgba(255, 255, 255, 0.5)"),
                            this.ctx.fillText("翻", n + x + w + this.ctx.measureText("".concat(T[1])).width, r)) : this.ctx.fillText("".concat(t.yaku_dict[T[0]]), f - this.ctx.measureText("".concat(t.yaku_dict[T[0]])).width / 2, r),
                            r += 25,
                            O % 5 == 4 && (n += S + _,
                            r = g + t.end_dora_h + 70)
                        }
                        n = 140,
                        r = g + t.end_dora_h + 70 + 125 + 20
                    } else {
                        var C = t.taku_width / 2 - t.ryukyoku_window_size[1] / 2;
                        this.ctx.fillRect(C, t.ryukyoku_window_size[0], t.ryukyoku_window_size[1], t.ryukyoku_window_size[2]),
                        this.ctx.beginPath(),
                        this.ctx.lineWidth = 2,
                        this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)",
                        this.ctx.rect(C, t.ryukyoku_window_size[0], t.ryukyoku_window_size[1], t.ryukyoku_window_size[2]),
                        this.ctx.stroke(),
                        this.setFillStyle();
                        var H = this.ctx.measureText("流局").width
                          , z = t.ryukyoku_window_size[0] + 60;
                        C = (t.taku_width - H) / 2,
                        this.ctx.fillText("流局", C, z),
                        C += 2 * H,
                        this.setFont(16),
                        this.setFillStyle("rgba(255, 255, 255, 0.5)"),
                        this.ctx.fillText("本場:", C, z - 20),
                        this.ctx.fillText("供託:", C, z + 16 - 20),
                        this.setFillStyle();
                        var I = this.ctx.measureText("本場:").width;
                        this.ctx.fillText("".concat(a.ba[0]), C + I, z - 20),
                        this.ctx.fillText("".concat(a.ba[1]), C + I, z + 16 - 20),
                        n = 140,
                        r = t.ryukyoku_window_size[0] + 130
                    }
                    this.setFont(25);
                    for (var F = this.ctx.measureText("+").width, D = Math.max.apply(Math, Object(P["a"])(u.map((function(t) {
                        return t[1].length
                    }
                    )))), R = this.ctx.measureText("".concat(Math.pow(10, D - 1))).width, M = et(this.targetSeat, this.names, i), A = 0; A < 4; A++) {
                        var W = t.kaze[E[e.kyoku - 1][A]];
                        o = this.ctx.measureText(W).width,
                        this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)",
                        this.ctx.fillText("".concat(W), n, r),
                        this.ctx.fillStyle = "white",
                        this.ctx.fillText(" ".concat(M[A]), n + o, r),
                        s = "".concat(h[A]),
                        this.ctx.fillText(s, n + 320 - this.ctx.measureText(s).width, r),
                        this.ctx.fillStyle = u[A][2],
                        this.ctx.fillText("".concat(u[A][0]), n + 330 + (F - this.ctx.measureText("".concat(u[A][0])).width) / 2, r),
                        this.ctx.fillText("".concat(u[A][1]), n + 345 + (R - this.ctx.measureText("".concat(u[A][1])).width), r),
                        r += 40
                    }
                }
            }, {
                key: "getResultWindow",
                value: function(e, a) {
                    this.setFillStyle("rgba(10, 10, 10, 0.9)");
                    var i = (t.taku_width - t.end_window_size[0]) / 2
                      , n = i + t.end_window_size[0] / 2;
                    this.ctx.fillRect(i, t.end_window_pos, t.end_window_size[0], t.end_window_size[1]),
                    this.ctx.beginPath(),
                    this.ctx.lineWidth = 2,
                    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)",
                    this.ctx.rect(i, t.end_window_pos, t.end_window_size[0], t.end_window_size[1]),
                    this.ctx.stroke(),
                    this.setFillStyle("white");
                    var r = t.end_window_pos + 60;
                    this.setFont(36);
                    var s = "対局レポート";
                    this.ctx.fillText(s, n - this.ctx.measureText(s).width / 2, r),
                    r += 70,
                    this.isSingleKyoku ? (this.pasteRates(n, r),
                    r += 70,
                    this.pasteResultScores(e, n - t.end_window_size[0] / 4, r, a),
                    this.pasteMetrics(n, r)) : (this.pasteRates(n, r),
                    r += 30,
                    this.pasteScoreMoveGraph(n, r),
                    r += t.score_move_canvas_height + 20,
                    this.pasteResultScores(e, n - t.end_window_size[0] / 4, r, a),
                    this.pasteMetrics(n, r))
                }
            }, {
                key: "pasteResultScores",
                value: function(e, a, i, n) {
                    var r, s, o = e.scores, c = et(this.targetSeat, this.names, n), h = this.isSingleKyoku ? 25 : 20;
                    this.setFont(h);
                    for (var l = this.ctx.measureText("100000").width, u = a - 30 - l, d = a + 80, p = E[this.targetSeat], f = 0; f < 4; f++) {
                        var m = e.rank2seat[f]
                          , g = c[m];
                        this.setFillStyle("white"),
                        this.ctx.fillText(g, a - this.ctx.measureText(g).width / 2, i);
                        var y = i - this.textHeight(g);
                        i += 1.2 * h,
                        r = "".concat(o[m]),
                        this.ctx.fillText(r, u + l - this.ctx.measureText(r).width, i),
                        s = "".concat(this.umaoka[m]),
                        s.includes(".") || (s += ".0"),
                        this.umaoka[m] > 0 ? (s = "+" + s,
                        this.setFillStyle("rgb(0,200,200)")) : this.umaoka[m] < 0 ? this.setFillStyle("rgb(255,0,0)") : this.setFillStyle("rgb(255,255,255)"),
                        this.ctx.fillText(s, d - this.ctx.measureText(s).width, i),
                        this.isSingleKyoku || (this.ctx.beginPath(),
                        this.setFillStyle(t.playerColors[p[m]]),
                        this.ctx.fillRect(u, y, 4, i - y + 2)),
                        i += 2 * h
                    }
                }
            }, {
                key: "pasteRates",
                value: function(t, e) {
                    for (var a, i = this, n = [Object(P["a"])(Array(4).keys()).map((function(t) {
                        return i.reusltValues.accuracy[t][i.playerType]
                    }
                    )), Object(P["a"])(Array(4).keys()).map((function(t) {
                        return i.reusltValues.similarity[t][i.playerType]
                    }
                    )), Object(P["a"])(Array(4).keys()).map((function(t) {
                        return i.reusltValues.badMoveRate[t][i.playerType]
                    }
                    ))], r = ["一致率", "類似度", "悪手率"], s = 0, o = 18, c = 34, h = 44, l = 0; l < n.length; l++) {
                        var u = n[l]
                          , d = r[l];
                        this.setFont(o),
                        s += this.textWidth(d) + 5,
                        this.setFont(c),
                        "類似度" == d && u[this.targetSeat] > 90 && this.setFont(h);
                        var p = u[this.targetSeat].toFixed(1);
                        s += this.textWidth(p),
                        this.setFont(o),
                        s += this.textWidth("%"),
                        s += 30
                    }
                    s -= 30;
                    var f = t - s / 2
                      , m = 70
                      , g = 2;
                    this.ctx.beginPath(),
                    this.ctx.lineWidth = g,
                    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)",
                    this.ctx.rect(f, e - 50, s, m),
                    this.ctx.stroke();
                    var y = this.nagaTypeNames[this.playerType];
                    this.setFont(20);
                    var b = this.textWidth(y);
                    this.setFillStyle("rgba(10, 10, 10, 0.9)"),
                    null === (a = this.ctx) || void 0 === a || a.fillRect(f + 20, e - 52, b + 6, 2 * g),
                    this.setFillStyle("white"),
                    this.ctx.fillText(y, f + 20 + 3, e - 50 + 4),
                    f += 7;
                    for (var k = 0; k < n.length; k++) {
                        var v = n[k]
                          , w = r[k];
                        this.setFillStyle("white"),
                        this.setFont(o),
                        this.ctx.fillText(w, f, e),
                        f += this.textWidth(w) + 5,
                        this.setFont(c);
                        var _ = v[this.targetSeat].toFixed(1);
                        if ("類似度" == w && v[this.targetSeat] > 90) {
                            this.setFont(h);
                            var x = this.ctx.measureText(_)
                              , j = x.actualBoundingBoxAscent
                              , S = x.actualBoundingBoxDescent
                              , O = this.ctx.createLinearGradient(f, e - j, f, e + S);
                            O.addColorStop(0, "#b8751e"),
                            O.addColorStop(.5, "#fafad6"),
                            O.addColorStop(1, "#b8751e"),
                            this.ctx.fillStyle = O
                        }
                        this.ctx.fillText(_, f, e),
                        f += this.textWidth(_),
                        "類似度" != w && (this.setFont(o),
                        this.ctx.fillText("%", f, e),
                        f += this.textWidth("%")),
                        f += 30
                    }
                }
            }, {
                key: "pasteMetrics",
                value: function(t, e) {
                    for (var a = this.reusltValues, i = [Array(4).fill(this.pred.length), a.horaCount, a.horaPoint, a.hojuCount, a.hojuPoint, a.reachCount, a.huroKyokuCount, a.dahaiDecisionCount], n = ["総局数", "和了局数", "和了得点", "放銃局数", "放銃失点", "立直局数", "副露局数", "打牌選択回数"], r = ["局", "局", "", "局", "", "局", "局", "回"], s = this.textWidth("打牌選択回数") + 40 + this.textWidth("000回"), o = t, c = e, h = 1 == this.pred.length ? 25 : 20, l = 0; l < i.length; l++) {
                        var u = i[l]
                          , d = n[l]
                          , p = r[l];
                        this.setFillStyle("white"),
                        this.setFont(h),
                        this.ctx.fillText(d, o, c);
                        var f = void 0;
                        f = "和了得点" != d && "放銃失点" != d ? u[this.targetSeat] + p : u[this.targetSeat].toLocaleString(),
                        this.ctx.fillText(f, o + s - this.textWidth(f), c),
                        c += 1.5 * h
                    }
                }
            }, {
                key: "getCompareWindow",
                value: function() {
                    this.setFillStyle("rgba(10, 10, 10, 0.9)");
                    var e = (t.taku_width - t.end_window_size[0]) / 2
                      , a = e + t.end_window_size[0] / 2;
                    this.ctx.fillRect(e, t.end_window_pos, t.end_window_size[0], t.end_window_size[1]),
                    this.ctx.beginPath(),
                    this.ctx.lineWidth = 2,
                    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)",
                    this.ctx.rect(e, t.end_window_pos, t.end_window_size[0], t.end_window_size[1]),
                    this.ctx.stroke(),
                    this.setFillStyle("white");
                    var i = t.end_window_pos + 60;
                    this.setFont(36);
                    var n = "対局レポート";
                    this.ctx.fillText(n, a - this.ctx.measureText(n).width / 2, i),
                    i += 24,
                    this.pasteCompareGraph(a, i)
                }
            }, {
                key: "pasteCompareGraph",
                value: function(e, a) {
                    for (var i = ["一致率", "類似度", "悪手率"], n = 14, r = 4, s = a, o = e - t.compare_canvas_width / 2, c = 0; c < 3; c++) {
                        this.ctx.beginPath(),
                        this.setFont(20),
                        this.setFillStyle("white");
                        var h = i[c]
                          , l = this.ctx.measureText(h)
                          , u = l.actualBoundingBoxAscent + l.actualBoundingBoxDescent
                          , d = l.width;
                        s += u,
                        this.ctx.fillText(h, e - d / 2, s),
                        s += r,
                        this.ctx.drawImage(this.tmpImgs[this.targetSeat][c], 0, 0, 2 * t.compare_canvas_width, 2 * t.compare_canvas_height, o, s, t.compare_canvas_width, t.compare_canvas_height),
                        s += t.compare_canvas_height + n
                    }
                }
            }, {
                key: "createCompareGraph",
                value: function() {
                    var e = this
                      , a = (this.reusltValues,
                    ["rgba(100, 200, 200, 0.9)", "rgba(144, 79, 230, 0.9)", "rgba(200, 100, 100, 0.9)"])
                      , i = Object(P["a"])(Array(this.playerTypeNum).keys()).map((function(t) {
                        return e.nagaTypeNames[t]
                    }
                    ));
                    function n(e, a) {
                        var i = document.createElement("canvas")
                          , n = [2 * t.compare_canvas_width, 2 * t.compare_canvas_height];
                        i.width = n[0],
                        i.height = n[1];
                        var r = i.getContext("2d");
                        if (!r)
                            throw Error("hoge");
                        var s = r.createLinearGradient(0, 0, 0, n[1])
                          , o = a[0] / n[1]
                          , c = (a[0] + a[1]) / n[1];
                        return s.addColorStop(o, e),
                        s.addColorStop(c, "rgba(0, 0, 0, 0.6)"),
                        r.fillStyle = s,
                        r.fillRect(0, 0, n[0], n[1]),
                        r.createPattern(i, "repeat")
                    }
                    for (var r = 0; r < 4; r++)
                        for (var s = [this.reusltValues.accuracy[r], this.reusltValues.similarity[r], this.reusltValues.badMoveRate[r]], o = [[60, 100], [60, 100], [0, 20]], c = function(c) {
                            var h = o[c][0]
                              , l = o[c][1]
                              , u = s[c]
                              , d = document.createElement("canvas");
                            d.width = 2 * t.compare_canvas_width,
                            d.height = 2 * t.compare_canvas_height;
                            var p = d.getContext("2d")
                              , f = e.ctx.createLinearGradient(0, 0, 0, 2 * t.compare_canvas_height);
                            if (f.addColorStop(0, "white"),
                            f.addColorStop(1, "rgba(0, 255, 0)"),
                            !p)
                                throw Error("hgoe");
                            new R.a(p,{
                                type: "horizontalBar",
                                data: {
                                    labels: i,
                                    datasets: Object(P["a"])(Array(1).keys()).map((function(t) {
                                        return {
                                            label: "rate",
                                            backgroundColor: "white",
                                            data: u,
                                            spanGaps: !0,
                                            pointRadius: 0
                                        }
                                    }
                                    ))
                                },
                                options: {
                                    devicePixelRatio: 1,
                                    responsive: !1,
                                    animation: {
                                        duration: 0
                                    },
                                    legend: {
                                        display: !1
                                    },
                                    plugins: {
                                        customCanvasBackgroundColor: {
                                            color: "white"
                                        }
                                    },
                                    scales: {
                                        xAxes: [{
                                            gridLines: {
                                                color: "white"
                                            },
                                            ticks: {
                                                fontSize: 24,
                                                max: l,
                                                min: h
                                            }
                                        }],
                                        yAxes: [{
                                            stacked: !0,
                                            ticks: {
                                                fontSize: [0, 0, 32, 28, 24, 20][e.playerTypeNum]
                                            },
                                            scaleLabel: {
                                                fontColor: "white"
                                            },
                                            gridLines: {
                                                drawOnChartArea: !1
                                            }
                                        }]
                                    }
                                },
                                plugins: [{
                                    beforeDraw: function(t, e) {
                                        try {
                                            var i = t.getDatasetMeta(0)
                                              , r = t.ctx;
                                            r.fillStyle = "dimgray",
                                            i.data.forEach((function(t, e) {
                                                t._view.backgroundColor = n(a[c], [t._model.y, t._model.height])
                                            }
                                            ))
                                        } catch (e) {
                                            console.log("error occured")
                                        }
                                    }
                                }]
                            });
                            e.tmpImgs[r][c].src = d.toDataURL()
                        }, h = 0; h < 3; h++)
                            c(h)
                }
            }, {
                key: "createScoreMoveGraph",
                value: function() {
                    var e = this
                      , a = this.pred.map((function(t) {
                        return t[0].info.msg
                    }
                    ))
                      , i = a[a.length - 1].end_msgs
                      , n = i[i.length - 1].scores
                      , r = [[], [], [], []];
                    a.forEach((function(t) {
                        for (var e = 0; e < 4; e++)
                            r[e].push(t.scores[e])
                    }
                    ));
                    for (var s = 0; s < 4; s++)
                        r[s].push(n[s]);
                    var o = Math.max.apply(Math, Object(P["a"])(r.map((function(t) {
                        return Math.max.apply(Math, Object(P["a"])(t))
                    }
                    ))))
                      , c = Math.min.apply(Math, Object(P["a"])(r.map((function(t) {
                        return Math.min.apply(Math, Object(P["a"])(t))
                    }
                    ))))
                      , h = document.createElement("canvas");
                    h.width = 2 * t.score_move_canvas_width,
                    h.height = 2 * t.score_move_canvas_height;
                    var l = h.getContext("2d");
                    if (!l)
                        throw Error("hgoe");
                    var u = ""
                      , d = 0
                      , p = a.map((function(e) {
                        return u != e.bakaze ? (u = e.bakaze,
                        d = e.kyoku,
                        "".concat(t.kaze_moji[e.bakaze]).concat(t.kyoku_moji[e.kyoku - 1])) : d != e.kyoku ? (d = e.kyoku,
                        "".concat(t.kyoku_moji[e.kyoku - 1])) : ""
                    }
                    ));
                    p.unshift("");
                    for (var f = function(a) {
                        var i = E[a];
                        new R.a(l,{
                            type: "line",
                            data: {
                                labels: p,
                                datasets: Object(P["a"])(Array(4).keys()).map((function(a) {
                                    return {
                                        label: e.names[a],
                                        borderColor: t.playerColors[i[a]],
                                        fill: !1,
                                        data: r[a],
                                        spanGaps: !0,
                                        pointRadius: 0,
                                        lineTension: 0
                                    }
                                }
                                ))
                            },
                            options: {
                                devicePixelRatio: 1,
                                responsive: !1,
                                animation: {
                                    duration: 0
                                },
                                legend: {
                                    display: !1
                                },
                                plugins: {
                                    customCanvasBackgroundColor: {
                                        color: "white"
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        gridLines: {
                                            color: "white"
                                        },
                                        ticks: {
                                            fontSize: 22
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontSize: 24
                                        },
                                        scaleLabel: {
                                            fontColor: "white"
                                        },
                                        gridLines: {},
                                        afterBuildTicks: function(t, e) {
                                            return [o, 25e3, c]
                                        }
                                    }]
                                }
                            }
                        });
                        e.scoreMoveImg[a].src = h.toDataURL()
                    }, m = 0; m < 4; m++)
                        f(m)
                }
            }, {
                key: "pasteScoreMoveGraph",
                value: function(e, a) {
                    var i = 14
                      , n = a
                      , r = e - t.score_move_canvas_width / 2;
                    this.ctx.drawImage(this.scoreMoveImg[this.targetSeat], 0, 0, 2 * t.score_move_canvas_width, 2 * t.score_move_canvas_height, r, n, t.score_move_canvas_width, t.score_move_canvas_height),
                    n += t.compare_canvas_height + i
                }
            }, {
                key: "textHeight",
                value: function(t) {
                    var e = this.ctx.measureText(t);
                    return e.actualBoundingBoxAscent + e.actualBoundingBoxDescent
                }
            }, {
                key: "textWidth",
                value: function(t) {
                    return this.ctx.measureText(t).width
                }
            }, {
                key: "takuRotate",
                value: function() {
                    var e, a, i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    0 != n && (null === (e = this.ctx) || void 0 === e || e.translate(Math.round(t.taku_width / 2), Math.round(t.taku_height / 2)),
                    null === (a = this.ctx) || void 0 === a || a.rotate(90 * -n * Math.PI / 180),
                    null === (i = this.ctx) || void 0 === i || i.translate(-Math.round(t.taku_width / 2), -Math.round(t.taku_height / 2)))
                }
            }, {
                key: "setFont",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "kyokumen";
                    this.ctx && (this.ctx.font = "".concat(t, "px '").concat(e, "'"))
                }
            }, {
                key: "setFillStyle",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "white";
                    this.ctx && (this.ctx.fillStyle = t)
                }
            }, {
                key: "renderPlayerInfo",
                value: function(e, a, i, n) {
                    var r, s, o, c, h = n.getDisplayNameType(), l = n.getShowTenpaiPred(), u = this.dan[e], d = Object(H["a"])(t.player_info_pos[a], 2), p = d[0], f = d[1], m = Object(H["a"])(t.player_info_size[Math.min(a, 1)], 2), g = m[0], y = m[1], b = 0 != a && "天鳳位" === u ? t.danFontSize - 4 : t.danFontSize;
                    (0 === a && (f -= 20),
                    this.setFillStyle("rgba(0, 0, 0, 0.4)"),
                    null === (r = this.ctx) || void 0 === r || r.fillRect(p, f, g, y),
                    p += 8,
                    this.setFillStyle("white"),
                    this.rate[e] >= 1800) && (this.setFont(t.rating_font_size),
                    null === (c = this.ctx) || void 0 === c || c.fillText("R" + this.rate[e], p + 2, f + 18));
                    this.setFont(b),
                    null === (s = this.ctx) || void 0 === s || s.fillText(u, p + 2, f + 48),
                    this.setFont(t.name_font_size);
                    var k = et(this.targetSeat, this.names, h);
                    if (null === (o = this.ctx) || void 0 === o || o.fillText(k[e], p + 2, f + 65),
                    l && 0 != a) {
                        var v, w, _, x, j, S, O, T;
                        this.setFillStyle(t.playerColors[a]);
                        var C = 90 * a - 90
                          , P = 360 * i["tenpai".concat(["S", "T", "K"][a - 1])][this.targetSeat]
                          , z = 360 - P;
                        p = t.tenpai_pos[a][0],
                        f = t.tenpai_pos[a][1],
                        null === (v = this.ctx) || void 0 === v || v.beginPath(),
                        null === (w = this.ctx) || void 0 === w || w.arc(p, f, t.tenpai_radius, C * Math.PI / 180, (P + C) * Math.PI / 180, !1),
                        null === (_ = this.ctx) || void 0 === _ || _.lineTo(p, f),
                        null === (x = this.ctx) || void 0 === x || x.fill(),
                        this.setFillStyle("rgb(255, 255, 255)"),
                        null === (j = this.ctx) || void 0 === j || j.beginPath(),
                        null === (S = this.ctx) || void 0 === S || S.arc(p, f, t.tenpai_radius, (C + P) * Math.PI / 180, (P + C + z) * Math.PI / 180, !1),
                        null === (O = this.ctx) || void 0 === O || O.lineTo(p, f),
                        null === (T = this.ctx) || void 0 === T || T.fill()
                    }
                }
            }, {
                key: "fillBGColor",
                value: function(e, a) {
                    var i, n;
                    null === (i = this.ctx) || void 0 === i || i.clearRect(0, 0, t.taku_width, t.taku_height),
                    this.setFillStyle("rgba(0, 0, 0, 0.4)");
                    var r = t.tehai_back_size[0];
                    a.actor != this.targetSeat || "chi" != a.type && "pon" != a.type && "daiminkan" != a.type && "ankan" != a.type || (r += 2 * t.hai_w),
                    r -= e.nakihais[this.targetSeat].length * t.hai_w * 3,
                    null === (n = this.ctx) || void 0 === n || n.fillRect(t.tehai_back_pos[0], t.tehai_back_pos[1], r, t.tehai_back_size[1])
                }
            }]),
            t
        }();
        st.num2dora = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10, 11, 12, 13, 14, 15, 16, 17, 9, 19, 20, 21, 22, 23, 24, 25, 26, 18, 28, 29, 30, 27, 32, 33, 31],
        st.yaku_dict = {
            0: "ツモ",
            1: "リーチ",
            2: "一発",
            3: "槍槓",
            4: "嶺上開花",
            5: "海底撈月",
            6: "河底撈魚",
            7: "平和",
            8: "断ヤオ",
            9: "一盃口",
            10: "自風牌 東",
            11: "自風牌 南",
            12: "自風牌 西",
            13: "自風牌 北",
            14: "場風牌 東",
            15: "場風牌 南",
            16: "場風牌 西",
            17: "場風牌 北",
            18: "役牌 白",
            19: "役牌 發",
            20: "役牌 中",
            21: "ダブル立直",
            22: "七対子",
            23: "混全帯ヤオ",
            24: "一気通貫",
            25: "三色同順",
            26: "三色同刻",
            27: "三槓子",
            28: "対々和",
            29: "三暗刻",
            30: "小三元",
            31: "混老頭",
            32: "二盃口",
            33: "純全帯ヤオ",
            34: "混一色",
            35: "清一色",
            36: "人和?",
            37: "天和",
            38: "地和",
            39: "大三元",
            40: "四暗刻",
            41: "四暗刻単騎",
            42: "字一色",
            43: "緑一色",
            44: "清老頭",
            45: "九連宝燈",
            46: "純正九蓮宝燈",
            47: "国士無双",
            48: "国士無双13面待ち",
            49: "大四喜和",
            50: "小四喜和",
            51: "四槓子",
            52: "ドラ",
            53: "裏ドラ",
            54: "赤ドラ"
        },
        st.taku_width = 700,
        st.taku_height = 650,
        st.taku_center = st.taku_width / 2,
        st.taku_diff_half = (st.taku_width - st.taku_height) / 2,
        st.taku_color = "rgb(0, 75, 6)",
        st.rgb = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"],
        st.playerColors = ["#9C27B0", "#4CAF50", "#FFEB3B", "#2196F3"],
        st.tehai_hide = !1,
        st.hai_h = 40,
        st.hai_w = 29.3,
        st.thai_h = 50,
        st.thai_w = 33,
        st.wanpai_h = 27,
        st.wanpai_w = 19,
        st.reach_rod_h = 10,
        st.reach_rod_w = 100,
        st.end_dora_h = 40,
        st.end_dora_w = 29.3,
        st.line_height = 3,
        st.line_width = 5 * st.hai_w + st.hai_h,
        st.toimen_dahai_y = st.taku_height - st.hai_h - st.thai_h / 3 - st.hai_w - 3 * st.hai_h,
        st.dahai_pos = [[st.taku_width / 2 - st.line_width / 2, st.taku_height - st.toimen_dahai_y + st.line_width], [st.taku_height + st.taku_diff_half - st.hai_h - st.thai_h / 3 - st.hai_w - 3 * st.hai_h - st.line_width, st.taku_height + st.taku_diff_half - (st.taku_width / 2 - st.line_width / 2)], [st.taku_width / 2 - st.line_width / 2, st.toimen_dahai_y], [st.taku_diff_half + st.hai_h + st.thai_h / 3 + st.hai_w + 3 * st.hai_h, st.taku_height + st.taku_diff_half - (st.taku_width / 2 - st.line_width / 2)]],
        st.tehai_pos = [[124, st.taku_height - 2 * st.hai_h - st.hai_w / 4], [124, st.taku_height + st.taku_diff_half - st.hai_h - st.thai_h / 3], [124, st.taku_height - st.hai_h - st.thai_h / 3], [110, st.taku_height + st.taku_diff_half - st.hai_h - st.thai_h / 3]],
        st.tehai_back_pos = [80, st.tehai_pos[0][1] - st.hai_h - st.hai_w / 4],
        st.tehai_back_size = [475, 3 * st.hai_h + st.hai_w / 2],
        st.reach_rod_pos = [300, 387],
        st.player_info_size = [[120, 70], [120, 70]],
        st.player_info_pos = [[st.tehai_pos[0][0], st.tehai_back_pos[1] - st.hai_h - st.hai_w / 4 - st.hai_w / 3], [st.tehai_pos[1][0], st.tehai_pos[1][1] - st.player_info_size[1][1] - st.hai_w / 3], [st.tehai_pos[2][0], st.tehai_pos[2][1] - st.player_info_size[1][1] - st.hai_w / 3], [st.tehai_pos[3][0], st.tehai_pos[3][1] - st.player_info_size[1][1] - st.hai_w / 3]],
        st.vocalization_pos = [[st.taku_center, 500], [st.taku_width / 5 * 4, 320], [st.taku_center, 160], [st.taku_width / 5, 320]],
        st.vocalization_font_size = 60,
        st.rating_font_size = 10,
        st.danFontSize = 24,
        st.name_font_size = 12,
        st.tenpai_radius = 25,
        st.tenpai_pos = [[-1, -1], [st.player_info_pos[1][0] + st.player_info_size[1][0] - st.tenpai_radius, st.player_info_pos[1][1] + st.tenpai_radius], [st.player_info_pos[2][0] + st.player_info_size[1][0] - st.tenpai_radius, st.player_info_pos[2][1] + st.tenpai_radius], [st.player_info_pos[3][0] + st.player_info_size[1][0] - st.tenpai_radius, st.player_info_pos[3][1] + st.tenpai_radius]],
        st.score_font_size = 18,
        st.score_pos = [[300, st.dahai_pos[0][1] - st.line_height - st.score_font_size / 3], [300, st.dahai_pos[1][1] - st.line_height - st.score_font_size / 3], [300, st.dahai_pos[2][1] - st.line_height - st.score_font_size / 3], [300, st.dahai_pos[3][1] - st.line_height - st.score_font_size / 3]],
        st.ba_pos = [0, 279],
        st.left_hai_pos = [250, 290],
        st.kyoutaku_pos = [370, 298],
        st.kyoutaku_rod_pos = [340, 290],
        st.honba_pos = [st.kyoutaku_pos[0], 310],
        st.honba_rod_pos = [st.kyoutaku_rod_pos[0], 302],
        st.kyoutaku_rod_size = [20, 7],
        st.huro_pos = [[st.taku_width, st.taku_height], [st.taku_height + st.taku_diff_half, st.taku_height + st.taku_diff_half], [st.taku_width, st.taku_height], [st.taku_height + st.taku_diff_half, st.taku_height + st.taku_diff_half]],
        st.kyoku_moji = ["一", "二", "三", "四"],
        st.kaze = ["東", "南", "西", "北"],
        st.kaze_moji = {
            E: "東",
            S: "南",
            W: "西",
            N: "北"
        },
        st.seat2kaze = [["東", "南", "西", "北"], ["北", "東", "南", "西"], ["西", "北", "東", "南"], ["南", "西", "北", "東"]],
        st.anonymous_name = ["Aさん", "Bさん", "Cさん", "Dさん"],
        st.wanpai_pos = [(st.taku_width - 5 * st.wanpai_w) / 2, 320],
        st.end_window_size = [580, 530],
        st.end_window_pos = 50,
        st.ryukyoku_window_size = [140, 500, 300],
        st.reach_declare = !1,
        st.hora_hai_color = "rgba(220, 100, 100, 0.4)",
        st.hoju_hai_color = "rgba(220, 100, 100, 0.4)",
        st.compare_canvas_height = 110,
        st.compare_canvas_width = 400,
        st.score_move_canvas_height = 110,
        st.score_move_canvas_width = 500;
        var ot = st;
        a("a4d3"),
        a("e01a");
        function ct(t) {
            var e = Object.keys(t).length
              , a = t;
            function n() {
                return e
            }
            var r = Object(i["p"])(0)
              , s = Object(i["p"])(0)
              , o = Object(i["p"])(!0)
              , c = Object(i["p"])(!0)
              , h = Object(i["p"])(!0)
              , l = Object(i["p"])(!0)
              , u = Object(i["p"])(!0)
              , d = Object(i["p"])(!0)
              , p = Object(i["p"])(0)
              , f = Object(i["p"])(!1);
            function m(t) {
                p.value = t
            }
            function g() {
                return p.value
            }
            function y(t) {
                r.value = t
            }
            function b() {
                return r.value
            }
            function k(t) {
                s.value = t
            }
            function v() {
                return s.value
            }
            function w() {
                return o.value
            }
            function _() {
                return c.value
            }
            function x() {
                return h.value
            }
            function j() {
                return l.value
            }
            function S() {
                return u.value
            }
            function O() {
                return d.value
            }
            function T(t) {
                o.value = t
            }
            function C(t) {
                c.value = t
            }
            function H(t) {
                h.value = t
            }
            function P(t) {
                l.value = t
            }
            function z(t) {
                u.value = t
            }
            function I(t) {
                d.value = t
            }
            function F() {
                return [w(), _(), x(), j(), S(), O()]
            }
            return {
                getNagaTypeNum: n,
                setPlayerType: y,
                getPlayerType: b,
                setThreshold: k,
                getThreshold: v,
                getShowPred: w,
                getShowDiffBar: _,
                getShowTenpaiPred: x,
                getShowDangerPred: j,
                getShowRankPred: S,
                getShowEndPred: O,
                setShowPred: T,
                setShowDiffBar: C,
                setShowTenpaiPred: H,
                setShowDangerPred: P,
                setShowRankPred: z,
                setShowEndPred: I,
                setDisplayNameType: m,
                getDisplayNameType: g,
                monitoringList: F,
                haiHide: f,
                nagaTypes: a
            }
        }
        var ht = Symbol("settings");
        function lt(t, e, a) {
            var n = 1 != a
              , r = t.length - 1
              , s = t[0]
              , o = e[0]
              , c = Object(i["n"])({
                kyoku: 0,
                kyokumen: 0,
                showEndNum: 0,
                showResult: !1,
                showCompare: !1,
                prioritizeReach: !0
            })
              , h = function() {
                s = t[c.kyoku],
                o = e[c.kyoku]
            }
              , l = function() {
                c.kyoku = r,
                h(),
                c.kyokumen = s,
                c.showEndNum = o,
                c.showResult = !0,
                c.showCompare = !1
            }
              , u = function() {
                l(),
                c.showCompare = !0
            }
              , d = function() {
                c.showResult = !1,
                c.showCompare = !1,
                c.showEndNum = 0
            }
              , p = function() {
                d(),
                c.kyoku = 0,
                c.kyokumen = 0,
                h()
            }
              , f = function(t) {
                d(),
                c.kyoku = t,
                c.kyokumen = 0,
                h()
            }
              , m = function(t) {
                d(),
                c.kyokumen = t
            }
              , g = function() {
                c.kyokumen = t[c.kyoku],
                c.showEndNum = e[c.kyoku]
            }
              , y = function() {
                c.kyoku != r ? (c.kyoku = Math.min(r, c.kyoku + 1),
                c.kyokumen = 0,
                c.showEndNum = 0,
                c.showResult = !1,
                h()) : c.showResult ? p() : (c.kyokumen = s,
                c.showEndNum = o,
                c.showResult = !0)
            }
              , b = function() {
                0 != c.kyoku ? (c.showResult || (c.kyoku = Math.max(0, c.kyoku - 1)),
                c.kyokumen = 0,
                c.showEndNum = 0,
                c.showResult = !1,
                c.showCompare = !1,
                h()) : l()
            }
              , k = function() {
                c.showEndNum == o ? c.showCompare ? p() : c.showResult ? n ? u() : p() : c.kyoku != r ? y() : c.showResult = !0 : c.kyokumen == s ? c.showEndNum = Math.min(o, c.showEndNum + 1) : c.kyokumen = Math.min(s, c.kyokumen + 1)
            }
              , v = function() {
                c.showEndNum > 0 ? c.showCompare ? c.showCompare = !1 : c.showResult ? c.showResult = !1 : c.showEndNum -= 1 : 0 == c.kyokumen ? 0 != c.kyoku ? (c.kyoku = Math.max(0, c.kyoku - 1),
                h(),
                c.kyokumen = s,
                c.showEndNum = o) : n ? u() : l() : c.kyokumen = Math.max(0, c.kyokumen - 1)
            }
              , w = function() {
                return c.kyoku
            }
              , _ = function() {
                return c.kyokumen
            }
              , x = function() {
                return c.showEndNum
            }
              , j = function() {
                return c.showCompare
            }
              , S = function() {
                return o
            }
              , O = function() {
                return c.prioritizeReach
            }
              , T = function() {
                c.prioritizeReach = !c.prioritizeReach
            };
            function C(t) {
                c.showEndNum = t
            }
            function H(t) {
                c.showCompare = t
            }
            function P(t) {
                c.showResult = t
            }
            var z = function() {
                return n
            }
              , I = function() {
                return c.showResult
            };
            return {
                state: Object(i["o"])(c),
                isEnableCompare: z,
                getEndNum: S,
                setKyokumen: m,
                setKyokumenMax: g,
                kyokuInc: y,
                kyokuDec: b,
                setShowCompare: H,
                setShowResult: P,
                getShowResult: I,
                setShowEndNum: C,
                kyokumenInc: k,
                kyokumenDec: v,
                kyokuIdx: w,
                kyokumenIdx: _,
                showEndNum: x,
                showCompare: j,
                unsetEndState: d,
                prioritizeReach: O,
                flipPrioritizeReach: T,
                setKyoku: f
            }
        }
        var ut = Symbol("state")
          , dt = Object(i["g"])({
            name: "KyokumenImage",
            props: {
                targetSeat: {
                    type: Number,
                    required: !0
                },
                haiHide: {
                    type: Boolean,
                    required: !0
                }
            },
            setup: function(t) {
                var e = Object(i["n"])({
                    url: "",
                    r: null
                })
                  , a = Object(i["h"])(ht)
                  , n = Object(i["h"])(ut);
                if (!a || !n)
                    throw new Error("");
                var r = {}
                  , s = function() {
                    var e = n.kyokuIdx()
                      , i = n.kyokumenIdx()
                      , r = n.showEndNum()
                      , s = n.showCompare();
                    return "".concat(t.targetSeat, "_").concat(e, "_").concat(i, "_").concat(r, "_").concat(s, "_").concat(t.haiHide, "_").concat(a.getDisplayNameType(), "_").concat(n.getShowResult(), "_").concat(a.getShowPred(), "_").concat(a.getPlayerType())
                }
                  , o = function() {
                    if (e.r) {
                        var i, o = s();
                        if (o in r)
                            e.url = r[o];
                        else
                            null === (i = e.r) || void 0 === i || i.takuRender(n.kyokuIdx(), n.kyokumenIdx(), n.showEndNum(), t.haiHide, n.getShowResult(), n.showCompare(), a),
                            e.url = e.r.canvas.toDataURL()
                    }
                }
                  , c = function(t, i, n, r, s, c, h, l) {
                    e.r = new ot(t,0,i,a.nagaTypes,c,n,r,s,h,l);
                    for (var u = 0; u < c.length; u++)
                        e.r.call(u);
                    o()
                };
                return Object(i["x"])((function() {
                    return [n.kyokuIdx(), n.kyokumenIdx(), n.showEndNum(), n.getShowResult(), n.showCompare()]
                }
                ), (function() {
                    o()
                }
                )),
                Object(i["x"])((function() {
                    return [t.targetSeat, t.haiHide, a.getDisplayNameType(), a.getShowPred(), a.getPlayerType(), a.getShowDangerPred(), a.getShowTenpaiPred()]
                }
                ), (function() {
                    e.r && (e.r.targetSeat = t.targetSeat,
                    e.r.playerType = a.getPlayerType(),
                    o())
                }
                )),
                {
                    state: e,
                    createRender: c
                }
            }
        });
        dt.render = z;
        var pt = dt;
        function ft(t, e, a, n, r, s) {
            return Object(i["j"])(),
            Object(i["d"])("button", {
                class: "btn",
                style: t.styleObject,
                onClick: e[1] || (e[1] = function() {
                    return t.func && t.func.apply(t, arguments)
                }
                )
            }, Object(i["s"])(t.state.name), 5)
        }
        var mt = Object(i["g"])({
            name: "SideButton",
            props: {
                name: {
                    type: String
                },
                func: Function,
                imgHeight: {
                    type: Number,
                    required: !0
                },
                mobile: {
                    type: Boolean,
                    required: !0
                }
            },
            setup: function(t) {
                var e = Object(i["n"])({
                    name: t.name,
                    func: t.func
                })
                  , a = Object(i["b"])((function() {
                    var e = {
                        border: "none",
                        color: "white",
                        fontSize: "".concat(.03 * t.imgHeight, "px"),
                        fontFamily: "my_font",
                        height: "23%",
                        textAlign: "center",
                        marginBottom: "3px"
                    };
                    return t.mobile && (e.fontSize = "".concat(.05 * t.imgHeight, "px"),
                    e.height = "48%"),
                    e
                }
                ));
                return {
                    state: e,
                    styleObject: a
                }
            }
        });
        a("c338");
        mt.render = ft;
        var gt = mt;
        function yt(t, e, a, n, r, s) {
            return Object(i["y"])((Object(i["j"])(),
            Object(i["d"])("select", {
                style: t.state.styleObject,
                "onUpdate:modelValue": e[1] || (e[1] = function(e) {
                    return t.state.selected = e
                }
                ),
                onChange: e[2] || (e[2] = function() {
                    return t.updateValue && t.updateValue.apply(t, arguments)
                }
                )
            }, [(Object(i["j"])(!0),
            Object(i["d"])(i["a"], null, Object(i["q"])(t.options, (function(e, a) {
                return Object(i["j"])(),
                Object(i["d"])("option", {
                    value: a,
                    key: a,
                    selected: a == t.targetSeat
                }, Object(i["s"])(e), 9, ["value", "selected"])
            }
            )), 128))], 36)), [[i["v"], t.state.selected]])
        }
        var bt = Object(i["g"])({
            name: "ViewSelector",
            props: {
                options: Array,
                targetSeat: Number
            },
            setup: function(t, e) {
                var a = Object(i["n"])({
                    options: t.options,
                    selected: t.targetSeat,
                    styleObject: {
                        color: "white",
                        width: "100%",
                        padding: 0
                    }
                })
                  , n = function(t) {
                    if (null != t.target) {
                        var a = t.target;
                        e.emit("seat-update", parseInt(a.value))
                    }
                };
                return {
                    state: a,
                    updateValue: n
                }
            }
        });
        bt.render = yt;
        var kt = bt
          , vt = Object(i["z"])("data-v-cf46f824")
          , wt = vt((function(t, e, a, n, r, s) {
            return Object(i["j"])(),
            Object(i["d"])("div", {
                id: "threshold",
                style: {
                    width: "100%"
                },
                onChange: e[2] || (e[2] = function() {
                    return t.updateValue && t.updateValue.apply(t, arguments)
                }
                )
            }, [(Object(i["j"])(!0),
            Object(i["d"])(i["a"], null, Object(i["q"])(t.state.radioLabels, (function(a, n) {
                return Object(i["j"])(),
                Object(i["d"])(i["a"], {
                    key: n
                }, [Object(i["y"])(Object(i["f"])("input", {
                    type: "radio",
                    name: "threshold",
                    id: "select".concat(n + 1),
                    "onUpdate:modelValue": e[1] || (e[1] = function(e) {
                        return t.state.num = e
                    }
                    ),
                    value: n
                }, null, 8, ["id", "value"]), [[i["u"], t.state.num]]), Object(i["f"])("label", {
                    for: "select".concat(n + 1),
                    style: t.labelStyle
                }, Object(i["s"])(a), 13, ["for"])], 64)
            }
            )), 128))], 32)
        }
        ))
          , _t = Object(i["g"])({
            name: "ThresholdRadio",
            props: {
                lineHeight: {
                    type: Number,
                    required: !0
                },
                mobile: {
                    type: Boolean,
                    required: !0
                }
            },
            setup: function(t) {
                var e = Object(i["n"])({
                    checked: !1,
                    radioLabels: ["全", "多", "並", "少"],
                    num: 0
                })
                  , a = Object(i["h"])(ht);
                if (!a)
                    throw new Error("");
                var n = function(t) {
                    null != t.target && t.target instanceof HTMLInputElement && a.setThreshold(parseInt(t.target.value))
                }
                  , r = Object(i["b"])((function() {
                    var e = t.lineHeight
                      , a = .16
                      , i = e * a
                      , n = e * (1 - 2 * a);
                    return {
                        fontSize: n + "px",
                        paddingTop: i + "px"
                    }
                }
                ));
                return {
                    state: e,
                    updateValue: n,
                    labelStyle: r
                }
            }
        });
        a("fd64");
        _t.render = wt,
        _t.__scopeId = "data-v-cf46f824";
        var xt = _t
          , jt = {
            class: "columns is-mobile is-multiline",
            style: {
                height: "100%",
                display: "flex",
                "justify-content": "center"
            }
        }
          , St = {
            ref: "root"
        }
          , Ot = {
            class: "columns is-multiline  is-mobile",
            style: {
                width: "100%",
                height: "50%",
                margin: "0"
            }
        }
          , Tt = {
            class: "columns is-multiline  is-mobile"
        }
          , Ct = {
            class: "column is-2 zero_pad",
            style: {
                display: "flex",
                "align-items": "center",
                padding: "0px",
                "margin-left": "auto"
            }
        }
          , Ht = {
            style: {
                width: "70%",
                margin: "auto"
            }
        }
          , Pt = {
            class: "columns is-multiline is-mobile",
            style: {
                "align-items": "center"
            }
        }
          , zt = {
            class: "column is-1 is-offset-2 zero_pad",
            style: {
                display: "flex",
                "align-items": "center",
                width: "6%"
            }
        }
          , It = {
            style: {
                width: "70%"
            }
        };
        function Ft(t, e, a, n, r, s) {
            return Object(i["j"])(),
            Object(i["d"])("div", jt, [Object(i["f"])("div", {
                class: ["column", [t.mobile ? "is-full" : "is-8"]],
                style: t.graphStyle
            }, [Object(i["f"])("canvas", St, null, 512)], 6), t.mobile ? (Object(i["j"])(),
            Object(i["d"])(i["a"], {
                key: 1
            }, Object(i["q"])([0, 1, 2, 3], (function(e) {
                return Object(i["f"])("div", {
                    key: e,
                    class: "column is-6-mobile",
                    style: [{
                        height: "20%",
                        padding: "0"
                    }, t.predStyle]
                }, [Object(i["f"])("div", Pt, [Object(i["f"])("div", zt, [Object(i["f"])("canvas", {
                    ref: "circle".concat(e),
                    class: "column is-1",
                    style: {
                        padding: "0px",
                        height: "auto",
                        width: "5%"
                    }
                }, null, 512)]), Object(i["f"])("div", {
                    class: "column is-5",
                    style: t.labelStyle
                }, Object(i["s"])(t.text[e]), 5), Object(i["f"])("div", {
                    class: "column is-2",
                    style: t.probStyle
                }, [Object(i["f"])("p", It, Object(i["s"])(t.state.endProbs[3 - e]) + "%", 1)], 4)])], 4)
            }
            )), 64)) : (Object(i["j"])(),
            Object(i["d"])("div", {
                key: 0,
                class: "column",
                style: [{
                    height: "100%",
                    "padding-bottom": "0"
                }, t.predStyle]
            }, [Object(i["f"])("div", Ot, [(Object(i["j"])(),
            Object(i["d"])(i["a"], null, Object(i["q"])([0, 1, 2, 3], (function(e) {
                return Object(i["f"])("div", {
                    key: e,
                    class: "column is-6",
                    style: {
                        height: "100%"
                    }
                }, [Object(i["f"])("div", Tt, [Object(i["f"])("div", Ct, [Object(i["f"])("canvas", {
                    ref: "circle".concat(e),
                    class: "column is-1",
                    style: {
                        padding: "0px",
                        height: "auto",
                        width: "100%"
                    }
                }, null, 512)]), Object(i["f"])("div", {
                    class: "column is-10",
                    style: [t.labelStyle, {
                        "margin-right": "auto"
                    }]
                }, Object(i["s"])(t.text[e]), 5), Object(i["f"])("div", {
                    class: "column is-full",
                    style: t.probStyle
                }, [Object(i["f"])("p", Ht, Object(i["s"])(t.state.endProbs[3 - e]) + "%", 1)], 4)])])
            }
            )), 64))])], 4))])
        }
        var Dt = function() {
            function t(e) {
                Object(I["a"])(this, t),
                this.myTurn = [[], [], [], []],
                this.reachAt = [[], [], [], []],
                this.dahaiDiff = [[], [], [], []],
                this.huroDiff = [[], [], [], []],
                this.reachDiff = [[], [], [], []],
                this.kyokuCount = 0,
                this.result = new nt(e),
                this.nagaTypes = Object(P["a"])(Array(e).keys())
            }
            return Object(F["a"])(t, [{
                key: "dahai",
                value: function(e, a, i) {
                    var n = this
                      , r = a.info.msg
                      , s = r.actor;
                    this.result.dahaiDecisionCount[s] += 1;
                    var o = Math.floor(W[r.real_dahai]);
                    this.nagaTypes.forEach((function(c) {
                        for (var h = Math.floor(W[r.pred_dahai[c]]), l = a.dahaiPred[c][o], u = a.dahaiPred[c][h], d = Math.abs(l - u), p = 0; p < t.thresholds.length; p++) {
                            var f = t.thresholds[p];
                            o != h && (1 === f ? l < .05 && i[p][c].push(e) : d >= f && i[p][c].push(e))
                        }
                        o != h && (n.result.notMatchMoveCount[s][c] += 1,
                        n.result.NagaRate[s][c] += d,
                        l < .05 && (n.result.badMoveCount[s][c] += 1))
                    }
                    ))
                }
            }, {
                key: "reach",
                value: function(t, e, a, i) {
                    var n = e.info.msg
                      , r = n.actor
                      , s = a.info.msg;
                    this.nagaTypes.forEach((function(a) {
                        var n = e.reach[a]
                          , o = n > .5 && "reach" != s.type && "ankan" != s.type
                          , c = n < .5 && "reach" === s.type;
                        (o || c) && i[r][a].push(t)
                    }
                    ))
                }
            }, {
                key: "kan",
                value: function(e, a, i, n) {
                    var r = a.info.msg
                      , s = r.actor
                      , o = i.info.msg;
                    this.nagaTypes.forEach((function(i) {
                        var r = a.kan[i]
                          , c = r[0] > .5 && t.kan_types.includes(o.type)
                          , h = 1 in r && r[1] > .5 && "ankan" != o.type
                          , l = 2 in r && r[2] > .5 && "kakan" != o.type;
                        (c || h || l) && n[s][i].push(e)
                    }
                    ))
                }
            }, {
                key: "huro",
                value: function(e, a, i, n, r) {
                    var s = this
                      , o = a.huro
                      , c = i.info.msg
                      , h = "pon" === i.info.msg.type;
                    Object.keys(o).map((function(a) {
                        var l = parseInt(a);
                        n[l].push(e),
                        s.nagaTypes.forEach((function(a) {
                            var n = parseInt(A(o[l][a]))
                              , s = i.info.msg.actor === l
                              , u = 0 === n && s && "tsumo" != c.type
                              , d = s && (!t.huro_types.includes(c.type) || c.kind != n)
                              , p = !s && !h
                              , f = 0 != n && (p || d);
                            (u || f) && r[l][a].push(e)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "diffBuild",
                value: function(e) {
                    var a, i, n, r, s = this;
                    this.kyokuCount = e.length;
                    for (var o = 0; o < e.length; o++) {
                        var c = Object(P["a"])(Array(4).keys()).map((function(e) {
                            return t.thresholds.map((function(t) {
                                return s.nagaTypes.map((function(t) {
                                    return []
                                }
                                ))
                            }
                            ))
                        }
                        ))
                          , h = [[], [], [], []]
                          , l = Object(P["a"])(Array(4).keys()).map((function(t) {
                            return s.nagaTypes.map((function(t) {
                                return []
                            }
                            ))
                        }
                        ))
                          , u = Object(P["a"])(Array(4).keys()).map((function(t) {
                            return s.nagaTypes.map((function(t) {
                                return []
                            }
                            ))
                        }
                        ));
                        this.reachAt[0].push(-1),
                        this.reachAt[1].push(-1),
                        this.reachAt[2].push(-1),
                        this.reachAt[3].push(-1);
                        for (var d = Array(4).fill(!1), p = 0; p < e[o].length; p++) {
                            if (i = e[o][p],
                            r = i.info.msg,
                            a = r.type,
                            n = e[o][p + 1],
                            "dora" != a && "start_kyoku" != a) {
                                var f = r.actor;
                                t.my_turn_action.includes(a) && (h[f].push(p),
                                r.real_dahai && "?" != r.real_dahai && !r.reached && this.dahai(p, i, c[f])),
                                "reach_accepted" === a && (this.reachAt[f][o] = p,
                                this.result.reachCount[f] += 1),
                                Object.keys(i).includes("reach") && n && this.reach(p, i, n, u),
                                Object.keys(i).includes("kan") && n && this.kan(p, i, n, l)
                            }
                            t.huro_types.includes(a) && (this.result.huroCount[r.actor] += 1,
                            d[r.actor] = !0),
                            "dahai" === a && (this.result.dahaiCount[r.actor] += 1,
                            i.huro && n && ("reach_accepted" == n.info.msg.type && (n = e[o][p + 2]),
                            this.huro(p, i, n, h, l)))
                        }
                        for (var m = 0; m < 4; m++)
                            this.dahaiDiff[m].push(c[m]),
                            this.myTurn[m].push(h[m]),
                            this.huroDiff[m].push(l[m]),
                            this.reachDiff[m].push(u[m]),
                            d[m] && (this.result.huroKyokuCount[m] += 1);
                        var g = e[o][0].info.msg.end_msgs;
                        "hora" === g[0].type && (e[o][e[o].length - 1].hoju = !0,
                        g.forEach((function(t) {
                            var e = t.actor
                              , a = t.target;
                            s.result.horaCount[e] += 1,
                            s.result.horaPoint[e] += t.deltas[e],
                            e != a && (s.result.hojuCount[a] += 1,
                            s.result.hojuPoint[a] += -t.deltas[a])
                        }
                        )))
                    }
                    for (var y = 0; y < 4; y++) {
                        for (var b = this.result.dahaiDecisionCount[y], k = [], v = [], w = [], _ = 0; _ < this.nagaTypes.length; _++)
                            k.push((b - this.result.notMatchMoveCount[y][_]) / b * 100),
                            v.push((b - this.result.NagaRate[y][_]) / b * 100),
                            w.push(this.result.badMoveCount[y][_] / b * 100);
                        this.result.accuracy.push(k),
                        this.result.similarity.push(v),
                        this.result.badMoveRate.push(w)
                    }
                }
            }, {
                key: "diffList",
                value: function(t, e) {
                    for (var a, i, n = [], r = function(t, e) {
                        return t - e
                    }, s = this.dahaiDiff[0].length, o = 0; o < 4; o++) {
                        i = [];
                        for (var c = 0; c < s; c++)
                            a = this.dahaiDiff[o][c][t][e].concat(this.huroDiff[o][c][e]).concat(this.reachDiff[o][c][e]),
                            a.sort(r),
                            i.push(a);
                        n.push(i)
                    }
                    return n
                }
            }, {
                key: "diffShow",
                value: function(t) {
                    for (var e = this.nagaTypes.length, a = [], i = 0; i < 4; i++) {
                        for (var n = this.result.dahaiDecisionCount[i], r = {}, s = {}, o = {}, c = 0; c < e; c++)
                            r[t[c]] = (n - this.result.notMatchMoveCount[i][c]) / n * 100,
                            s[t[c]] = (n - this.result.NagaRate[i][c]) / n * 100,
                            o[t[c]] = this.result.badMoveCount[i][c] / n * 100;
                        a.push({
                            seat: i,
                            "一致率": r,
                            "類似度": s,
                            "悪手率": o,
                            "和了局数": this.result.horaCount[i],
                            "和了得点": this.result.horaPoint[i],
                            "放銃局数": this.result.hojuCount[i],
                            "放銃失点": this.result.hojuPoint[i],
                            "立直局数": this.result.reachCount[i],
                            "副露局数": this.result.huroKyokuCount[i],
                            "副露総数": this.result.huroCount[i],
                            "打牌選択回数": n,
                            "打牌総数": this.result.dahaiCount[i]
                        })
                    }
                    console.log("対局レポート(コピペ用)"),
                    console.log("総局数：".concat(this.kyokuCount)),
                    console.log(a),
                    console.log(JSON.stringify(a))
                }
            }]),
            t
        }();
        Dt.my_turn_action = ["tsumo", "chi", "pon"],
        Dt.huro_types = ["chi", "pon", "daiminkan"],
        Dt.kan_types = ["ankan", "kakan"],
        Dt.thresholds = [0, .2, .5, 1];
        var Rt = function(t, e) {
            for (var a = Array(e).fill(Array(34).fill(0)), i = 0; i < t.length; i++)
                for (var n = t[i], r = function(t) {
                    n[t].dangerK = n[t].danger_k.map((function(t) {
                        return t.map((function(t) {
                            return t / 1e4
                        }
                        ))
                    }
                    )),
                    n[t].dangerT = n[t].danger_t.map((function(t) {
                        return t.map((function(t) {
                            return t / 1e4
                        }
                        ))
                    }
                    )),
                    n[t].dangerS = n[t].danger_s.map((function(t) {
                        return t.map((function(t) {
                            return t / 1e4
                        }
                        ))
                    }
                    ));
                    var e = n[t].dahai_pred;
                    n[t].dahaiPred = e ? e.map((function(t) {
                        return t.map((function(t) {
                            return t / 1e4
                        }
                        ))
                    }
                    )) : a,
                    n[t].tenpaiS = n[t].tenpai_s.map((function(t) {
                        return t / 1e4
                    }
                    )),
                    n[t].tenpaiT = n[t].tenpai_t.map((function(t) {
                        return t / 1e4
                    }
                    )),
                    n[t].tenpaiK = n[t].tenpai_k.map((function(t) {
                        return t / 1e4
                    }
                    ));
                    var i = n[t].huro;
                    i && Object.keys(i).map((function(t) {
                        var e = i[t];
                        e.forEach((function(t) {
                            Object.keys(t).map((function(e) {
                                var a = parseInt(e);
                                t[a] = t[a] / 1e4
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    n[t].kan && n[t].kan.map((function(t) {
                        Object.keys(t).map((function(e) {
                            t[parseInt(e)] = t[parseInt(e)] / 1e4
                        }
                        ))
                    }
                    )),
                    n[t].reach && (n[t].reach = n[t].reach.map((function(t) {
                        return t / 1e4
                    }
                    ))),
                    n[t].diff = [!1, !1, !1, !1]
                }, s = 0; s < n.length; s++)
                    r(s)
        }
          , Et = function(t) {
            for (var e = function(e) {
                for (var a = t[e], i = function(t) {
                    a[t].dahai_pred = [a[t].dahai_pred],
                    a[t].info.msg.pred_dahai && (a[t].info.msg.pred_dahai = [a[t].info.msg.pred_dahai]),
                    a[t].huro && Object.keys(a[t].huro).map((function(e) {
                        a[t].huro[e] = [a[t].huro[e]]
                    }
                    )),
                    a[t].kan && (a[t].kan = [a[t].kan]),
                    a[t].reach && (a[t].reach = [a[t].reach])
                }, n = 0; n < a.length; n++)
                    i(n)
            }, a = 0; a < t.length; a++)
                e(a)
        }
          , Mt = Object(i["g"])({
            name: "EndGraph",
            props: {
                pred: {
                    type: Array,
                    required: !0
                },
                targetSeat: {
                    type: Number,
                    required: !0
                },
                imgHeight: {
                    type: Number,
                    required: !0
                },
                mobile: {
                    type: Boolean,
                    required: !0
                },
                newDiff: {
                    type: Dt,
                    required: !0
                }
            },
            setup: function(t, e) {
                var a = Object(i["h"])(ht)
                  , n = Object(i["h"])(ut);
                if (!a || !n)
                    throw new Error("no settings");
                var r, s = Object(i["p"])(null), o = Object(i["p"])(null), c = Object(i["p"])(null), h = Object(i["p"])(null), l = Object(i["p"])(null), u = Object(i["n"])({
                    checked: !1,
                    chartLabel: [],
                    chartDatasets: Array(4).fill(Array(4).fill(Array(4).fill([]))),
                    endProbs: []
                }), d = function(t) {
                    null != t.target && t.target instanceof HTMLInputElement && e.emit("seat-update", parseInt(t.target.value))
                }, p = function(t) {
                    var e = t.getContext("2d");
                    if (null == e)
                        throw new Error("ctx is null");
                    return e
                }, f = function(t) {
                    var e = Math.floor(t)
                      , a = Math.floor(10 * (t - e));
                    return "".concat(e, ".").concat(a)
                };
                R.a.defaults.global.defaultFontColor = "rgba(256, 256, 256, 1)";
                var m, g = ["#81C784", "#E57373", "#FFF176", "#737373"], y = function() {
                    var e = ["和了確率", "放銃確率", "横移動確率", "流局確率"]
                      , i = s.value;
                    if (null == i || !(i instanceof HTMLCanvasElement))
                        throw Error();
                    var o = p(i);
                    o.canvas.height = 200,
                    m = Object(P["a"])(Array(4).keys()).map((function(t) {
                        var e = o.createLinearGradient(0, 0, 0, 400 - 100 * t);
                        return e.addColorStop(0, g[t]),
                        e.addColorStop(.6, "rgba(0, 0, 0, 0.4)"),
                        e
                    }
                    ));
                    var c = a.getShowEndPred();
                    r = new R.a(o,{
                        type: "line",
                        data: {
                            labels: u.chartLabel[n.kyokuIdx()].slice(),
                            datasets: Object(P["a"])(Array(4).keys()).map((function(a) {
                                return {
                                    label: e[a],
                                    type: "line",
                                    borderColor: c ? g[a] : "rgba(0, 0, 0, 0)",
                                    backgroundColor: c ? m[a] : "rgba(0, 0, 0, 0)",
                                    data: u.chartDatasets[t.targetSeat][a][n.kyokuIdx()].slice(),
                                    spanGaps: !0,
                                    pointRadius: 0
                                }
                            }
                            ))
                        },
                        options: {
                            elements: {
                                line: {
                                    tension: 0
                                }
                            },
                            onClick: function(t, e) {
                                n.setKyokumen(e[0]._index)
                            },
                            onHover: function(t, e) {
                                if (e.length > 0) {
                                    var a = e[0]._chart
                                      , i = a.getDatasetMeta(0).data
                                      , n = i[e[0]._index]._model.x
                                      , r = a.scales["y-axis-0"]
                                      , s = a.chart.ctx;
                                    s.beginPath(),
                                    s.strokeStyle = "#A0A0A0",
                                    s.moveTo(n, r.top),
                                    s.lineTo(n, r.bottom),
                                    s.stroke()
                                }
                            },
                            animation: {
                                duration: 0
                            },
                            legend: {
                                display: !1
                            },
                            responsive: !0,
                            tooltips: {
                                enabled: !1
                            },
                            hover: {
                                mode: "index",
                                intersect: !1,
                                animationDuration: 0
                            },
                            events: ["mousemove", "click"],
                            maintainAspectRatio: !1,
                            scales: {
                                yAxes: [{
                                    stacked: !0,
                                    ticks: {
                                        max: 100,
                                        stepSize: t.mobile ? 50 : 25,
                                        min: 0
                                    },
                                    scaleLabel: {
                                        fontColor: "white"
                                    },
                                    gridLines: {
                                        drawOnChartArea: !1
                                    }
                                }],
                                xAxes: [{
                                    stacked: !0,
                                    display: !0,
                                    gridLines: {
                                        display: !1,
                                        drawOnChartArea: !1
                                    },
                                    ticks: {
                                        lineHeight: t.mobile ? .1 : .5
                                    },
                                    position: "top"
                                }]
                            }
                        },
                        plugins: [{
                            beforeDraw: function(t) {
                                var e = t.ctx
                                  , a = t.scales["x-axis-0"]
                                  , i = a.left
                                  , n = a.right
                                  , r = t.scales["y-axis-0"]
                                  , s = r.getPixelForValue(0)
                                  , o = r.getPixelForValue(100);
                                e.fillStyle = "rgba(0,0,0,0.3)",
                                e.fillRect(i, s, n - i, o - s)
                            },
                            afterDatasetsDraw: function(e, i) {
                                var r, s = a.getPlayerType(), o = e.getDatasetMeta(0).data, c = e.chart.ctx, h = t.targetSeat, l = e.scales["y-axis-0"], u = n.kyokuIdx(), d = function(t) {
                                    c.beginPath(),
                                    c.moveTo(t, l.top),
                                    c.lineTo(t, l.bottom),
                                    c.stroke()
                                };
                                if (a.getShowDiffBar()) {
                                    var p = t.newDiff.dahaiDiff[h][u][a.getThreshold()][s];
                                    c.strokeStyle = "rgba(255, 255, 255)",
                                    c.lineWidth = 1;
                                    for (var f = 0; f < p.length; f++)
                                        r = p[f],
                                        d(o[r]._model.x);
                                    p = t.newDiff.huroDiff[h][u][s],
                                    c.strokeStyle = "rgba(85, 85, 225)",
                                    c.lineWidth = 3;
                                    for (var m = 0; m < p.length; m++)
                                        r = p[m],
                                        d(o[r]._model.x);
                                    p = t.newDiff.reachDiff[h][u][s],
                                    c.strokeStyle = "rgba(225, 85, 85)",
                                    c.lineWidth = 3;
                                    for (var g = 0; g < p.length; g++)
                                        r = p[g],
                                        d(o[r]._model.x)
                                }
                                var y = e.getDatasetMeta(0).data[n.kyokumenIdx()]._model.x
                                  , b = e.chartArea.top / 2;
                                e.ctx.drawImage(q, y - b / 2, e.chartArea.top / 2, b, e.chartArea.top / 2);
                                var k = t.newDiff.reachAt[h][u];
                                if (-1 != k && a.getShowEndPred()) {
                                    var v = e.scales["x-axis-0"];
                                    y = v.getPixelForValue(void 0, k),
                                    b = v.getPixelForValue(void 0, o.length - 1) - y,
                                    e.ctx.fillStyle = "rgba(80, 80, 80, 0.6)",
                                    e.ctx.fillRect(y, l.top, b, l.height)
                                }
                            }
                        }]
                    })
                }, b = Object(i["b"])((function() {
                    return t.mobile ? {
                        width: "90%",
                        padding: "0px",
                        height: "60%",
                        textAlign: "center",
                        alignContent: "center"
                    } : {
                        padding: "0px",
                        height: "100%"
                    }
                }
                )), k = Object(i["b"])((function() {
                    return {
                        visibility: a.getShowEndPred() ? "visible" : "hidden"
                    }
                }
                )), v = Object(i["b"])((function() {
                    return t.mobile ? {
                        fontSize: "".concat(.03 * t.imgHeight, "px"),
                        width: "45%"
                    } : {
                        fontSize: "".concat(.02 * t.imgHeight, "px"),
                        width: "82%",
                        paddingTop: "0px",
                        paddingBottom: "0px"
                    }
                }
                )), w = Object(i["b"])((function() {
                    return t.mobile ? {
                        fontSize: "".concat(.04 * t.imgHeight, "px"),
                        textAlign: "right",
                        padding: "0px"
                    } : {
                        fontSize: "".concat(.025 * t.imgHeight, "px"),
                        textAlign: "right",
                        paddingTop: "0px"
                    }
                }
                )), _ = Object(i["b"])((function() {
                    return t.mobile ? {
                        height: "40%"
                    } : {
                        height: "100%"
                    }
                }
                )), x = function() {
                    u.endProbs = Object(P["a"])(Array(4).keys()).map((function(e) {
                        return f(u.chartDatasets[t.targetSeat][e][n.kyokuIdx()][n.kyokumenIdx()])
                    }
                    ))
                };
                Object(i["x"])((function() {
                    return [t.pred]
                }
                ), (function() {
                    var e = t.pred.length
                      , a = Object(P["a"])(Array(4).keys()).map((function(a) {
                        return Object(P["a"])(Array(e).keys()).map((function(e) {
                            return t.pred[e].map((function(t) {
                                return 100 * t.end_type[0][a] / 1e4
                            }
                            ))
                        }
                        ))
                    }
                    ))
                      , i = Object(P["a"])(Array(4).keys()).map((function(a) {
                        return Object(P["a"])(Array(e).keys()).map((function(e) {
                            return t.pred[e].map((function(t) {
                                return 100 * t.end_type[1][a] / 1e4
                            }
                            ))
                        }
                        ))
                    }
                    ))
                      , n = Object(P["a"])(Array(4).keys()).map((function(a) {
                        return Object(P["a"])(Array(e).keys()).map((function(e) {
                            return t.pred[e].map((function(t) {
                                return 100 * t.end_type[2][a] / 1e4
                            }
                            ))
                        }
                        ))
                    }
                    ))
                      , r = Object(P["a"])(Array(4).keys()).map((function(a) {
                        return Object(P["a"])(Array(e).keys()).map((function(e) {
                            return t.pred[e].map((function(t) {
                                return 100 * t.end_type[3][a] / 1e4
                            }
                            ))
                        }
                        ))
                    }
                    ));
                    u.chartLabel = Object(P["a"])(Array(t.pred.length).keys()).map((function(e) {
                        return Object(P["a"])(Array(t.pred[e].length).fill(""))
                    }
                    )),
                    u.chartDatasets = Object(P["a"])(Array(4).keys()).map((function(t) {
                        return [a[t], i[t], n[t], r[t]]
                    }
                    )),
                    y(),
                    x()
                }
                )),
                Object(i["x"])((function() {
                    return [a.getShowDiffBar()]
                }
                ), (function() {
                    r && r.update()
                }
                )),
                Object(i["x"])((function() {
                    return [a.getShowEndPred()]
                }
                ), (function() {
                    if (r) {
                        if (a.getShowEndPred())
                            for (var t = 0; t < r.data.datasets.length; t++)
                                r.data.datasets[t].borderColor = g[t],
                                r.data.datasets[t].backgroundColor = m[t];
                        else
                            for (var e = 0; e < r.data.datasets.length; e++)
                                r.data.datasets[e].borderColor = "rgba(0, 0, 0, 0)",
                                r.data.datasets[e].backgroundColor = "rgba(0, 0, 0, 0)";
                        r.update(),
                        x()
                    }
                }
                )),
                Object(i["x"])((function() {
                    return [n.kyokumenIdx(), a.getPlayerType(), a.getThreshold()]
                }
                ), (function() {
                    r.update(),
                    x()
                }
                )),
                Object(i["x"])((function() {
                    return [n.kyokuIdx(), t.targetSeat]
                }
                ), (function() {
                    if (r) {
                        var e;
                        r.data.labels.length = 0,
                        null === (e = r.data.labels) || void 0 === e || e.push.apply(e, Object(P["a"])(u.chartLabel[n.kyokuIdx()]));
                        for (var a = 0; a < r.data.datasets.length; a++) {
                            var i;
                            r.data.datasets[a].data.length = 0,
                            (i = r.data.datasets[a].data).push.apply(i, Object(P["a"])(u.chartDatasets[t.targetSeat][a][n.kyokuIdx()]))
                        }
                        r.update()
                    }
                    x()
                }
                ));
                var j = ["流局確率", "横移動確率", "放銃確率", "和了確率"];
                return Object(i["i"])((function() {
                    for (var t = [o, c, h, l], e = ["#737373", "#FFF176", "#E57373", "#81C784"], a = 0; a < t.length; a++) {
                        var i = t[a].value;
                        if (i instanceof HTMLCanvasElement) {
                            var n = i;
                            if (n) {
                                n.height = n.width = 50;
                                var r = n.getContext("2d");
                                r.fillStyle = e[a],
                                r.lineWidth = 5,
                                r.arc(25, 25, 25, 0, 2 * Math.PI),
                                r.closePath(),
                                r.fill()
                            }
                        }
                    }
                }
                )),
                {
                    state: u,
                    updateValue: d,
                    root: s,
                    circle0: o,
                    circle1: c,
                    circle2: h,
                    circle3: l,
                    labelStyle: v,
                    probStyle: w,
                    graphStyle: b,
                    probColStyle: _,
                    text: j,
                    parseShowStyle: f,
                    predStyle: k
                }
            }
        });
        Mt.render = Ft;
        var At = Mt
          , Wt = {
            key: 0,
            class: "columns is-mobile",
            style: {
                height: "100%"
            }
        }
          , Nt = {
            ref: "root",
            id: "rank",
            style: {
                width: "100%",
                height: "100%"
            }
        }
          , Lt = Object(i["f"])("div", {
            style: {
                height: "50%",
                position: "relative"
            }
        }, [Object(i["f"])("div", {
            style: {
                position: "absolute",
                bottom: "0px",
                right: "0px"
            },
            id: "rank_text"
        }, "期待順位")], -1)
          , Bt = {
            ref: "root",
            id: "rank",
            style: {
                width: "100%",
                height: "100%"
            }
        }
          , Vt = Object(i["f"])("div", {
            style: {
                height: "50%",
                position: "relative"
            }
        }, [Object(i["f"])("p", {
            style: {
                position: "absolute",
                bottom: "0px",
                width: "100%",
                left: "50%",
                transform: "translate(-50%, 0)"
            }
        }, "期待順位")], -1)
          , Gt = {
            style: {
                height: "50%"
            }
        };
        function Kt(t, e, a, n, r, s) {
            return t.mobile ? (Object(i["j"])(),
            Object(i["d"])(i["a"], {
                key: 1
            }, [Object(i["f"])("div", {
                class: "column is-2",
                style: t.graphStyle
            }, [Object(i["f"])("canvas", Bt, null, 512)], 4), Object(i["f"])("div", {
                class: "column is-3",
                style: t.labelStyle
            }, [Vt, Object(i["f"])("div", Gt, [Object(i["f"])("p", {
                style: t.rankStyle
            }, Object(i["s"])(t.state.expectedRank) + "位", 5)])], 4)], 64)) : (Object(i["j"])(),
            Object(i["d"])("div", Wt, [Object(i["f"])("div", {
                class: "column is-5",
                style: t.graphStyle
            }, [Object(i["f"])("canvas", Nt, null, 512)], 4), Object(i["f"])("div", {
                class: "column is-5",
                style: t.labelStyle
            }, [Lt, Object(i["f"])("div", {
                class: "rank_text",
                style: t.rankStyle
            }, Object(i["s"])(t.state.expectedRank) + "位", 5)], 4)]))
        }
        var qt = Object(i["g"])({
            name: "RankGraph",
            props: {
                pred: {
                    type: Array,
                    required: !0
                },
                targetSeat: {
                    type: Number,
                    required: !0
                },
                imgHeight: {
                    type: Number,
                    required: !0
                },
                mobile: {
                    type: Boolean,
                    required: !0
                }
            },
            setup: function(t) {
                var e, a = Object(i["p"])(null), n = Object(i["n"])({
                    checked: !1,
                    chartLabel: [],
                    chartDatasets: Array(4).fill(Array(4).fill(Array(4).fill([]))),
                    expectedRank: "- "
                }), r = Object(i["h"])(ht), s = Object(i["h"])(ut);
                if (!r || !s)
                    throw new Error("no settings");
                var o = function(t) {
                    return t.reduce((function(t, e, a, i) {
                        return t + e
                    }
                    ), 0)
                }
                  , c = function() {
                    var i, r = ["#ffffff", "#c992d3", "#a34cb3", "#9C27B0"], o = null === (i = a.value) || void 0 === i ? void 0 : i.getContext("2d");
                    e = new R.a(o,{
                        type: "bar",
                        data: {
                            labels: ["最終順位"],
                            datasets: Object(P["a"])(Array(4).keys()).map((function(e) {
                                return {
                                    label: "".concat(e + 1, "位"),
                                    backgroundColor: r[e],
                                    data: [n.chartDatasets[t.targetSeat][s.kyokuIdx()][s.kyokumenIdx()][e]],
                                    spanGaps: !0,
                                    pointRadius: 0
                                }
                            }
                            ))
                        },
                        options: {
                            animation: {
                                duration: 0
                            },
                            legend: {
                                display: !1
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            tooltips: {
                                enabled: !1
                            },
                            scales: {
                                yAxes: [{
                                    display: !1,
                                    stacked: !0,
                                    ticks: {
                                        max: 1,
                                        stepSize: .25,
                                        min: 0,
                                        reverse: !0
                                    },
                                    gridLines: {
                                        drawOnChartArea: !1
                                    }
                                }],
                                xAxes: [{
                                    stacked: !0,
                                    display: !1,
                                    gridLines: {
                                        drawOnChartArea: !1
                                    },
                                    position: "top"
                                }]
                            }
                        }
                    })
                }
                  , h = Object(i["b"])((function() {
                    return t.mobile ? {
                        height: "90%",
                        marginTop: "auto",
                        marginBottom: "auto",
                        paddingRight: 0,
                        visibility: r.getShowRankPred() ? "visible" : "hidden"
                    } : {
                        height: "90%",
                        padding: "0px",
                        marginRight: 0,
                        marginLeft: 0,
                        marginTop: "auto",
                        marginBottom: "auto",
                        visibility: r.getShowRankPred() ? "visible" : "hidden"
                    }
                }
                ))
                  , l = Object(i["b"])((function() {
                    return t.mobile ? {
                        fontSize: "".concat(.04 * t.imgHeight, "px"),
                        textAlign: "center",
                        paddingLeft: 0,
                        visibility: r.getShowRankPred() ? "visible" : "hidden"
                    } : {
                        fontSize: "".concat(.023 * t.imgHeight, "px"),
                        padding: "0px",
                        visibility: r.getShowRankPred() ? "visible" : "hidden"
                    }
                }
                ))
                  , u = Object(i["b"])((function() {
                    return t.mobile ? {
                        fontSize: "".concat(.06 * t.imgHeight, "px"),
                        padding: "0px",
                        visibility: r.getShowRankPred() ? "visible" : "hidden"
                    } : {
                        fontSize: "".concat(.03 * t.imgHeight, "px"),
                        padding: "0px",
                        visibility: r.getShowRankPred() ? "visible" : "hidden"
                    }
                }
                ))
                  , d = function() {
                    if (e) {
                        for (var a = n.chartDatasets[t.targetSeat][s.kyokuIdx()][s.kyokumenIdx()], i = 0; i < e.data.datasets.length; i++)
                            e.data.datasets[i].data.length = 0,
                            e.data.datasets[i].data.push(a[i]);
                        n.expectedRank = o(Object(P["a"])(Array(4).keys()).map((function(t) {
                            return a[t] * (1 + t)
                        }
                        ))).toFixed(2),
                        e.update()
                    }
                };
                return Object(i["x"])((function() {
                    return t.pred
                }
                ), (function() {
                    var e = t.pred.length;
                    n.chartDatasets = Object(P["a"])(Array(4).keys()).map((function(a) {
                        return Object(P["a"])(Array(e).keys()).map((function(e) {
                            return t.pred[e].map((function(t) {
                                return t.game_rank[a].map((function(t) {
                                    return t / 1e4
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    c(),
                    d()
                }
                )),
                Object(i["x"])((function() {
                    return [s.kyokuIdx(), s.kyokumenIdx(), t.targetSeat]
                }
                ), (function() {
                    d()
                }
                )),
                {
                    state: n,
                    root: a,
                    graphStyle: h,
                    labelStyle: l,
                    rankStyle: u
                }
            }
        });
        a("c147");
        qt.render = Kt;
        var Ut = qt
          , Jt = Object(i["z"])("data-v-1b569d25")
          , Xt = Jt((function(t, e, a, n, r, s) {
            return t.mobile ? (Object(i["j"])(),
            Object(i["d"])("div", {
                key: 1,
                ref: "hoge",
                style: {
                    width: "100%",
                    height: "100%"
                },
                onClick: e[2] || (e[2] = function() {
                    return t.flipPrioritizeReach && t.flipPrioritizeReach.apply(t, arguments)
                }
                )
            }, [Object(i["f"])("img", {
                ref: "commentImg",
                style: t.commentStyle
            }, null, 4)], 512)) : (Object(i["j"])(),
            Object(i["d"])("div", {
                key: 0,
                class: "columns is-multiline is-mobile",
                style: t.columnStyle,
                ref: "hoge",
                onClick: e[1] || (e[1] = function() {
                    return t.flipPrioritizeReach && t.flipPrioritizeReach.apply(t, arguments)
                }
                )
            }, [Object(i["f"])("img", {
                ref: "commentImg",
                class: "column is-12-tablet",
                id: "naga_comment",
                style: t.commentStyle
            }, null, 4), Object(i["f"])("img", {
                ref: "nagaImg",
                class: "column is-12-tablet",
                id: "naga_img",
                src: "/static/img/naga.png",
                style: t.nagaStyle
            }, null, 4)], 4))
        }
        ))
          , Yt = (a("25f0"),
        a("5530"))
          , Zt = function() {
            function t(e, a, i, n, r, s) {
                Object(I["a"])(this, t),
                this.canvas = document.createElement("canvas"),
                this.graphCanvas = document.createElement("canvas"),
                this.nagaType = 0,
                this.nagaTypeNum = i,
                this.showState = n,
                a ? (this.canvas.width = 2 * s,
                this.canvas.height = 2 * r,
                this.commentHaiH = .14 * this.canvas.width,
                this.commentHaiW = this.getHaiW(this.commentHaiH),
                this.commentFontSize = .35 * this.commentHaiH,
                this.dahaiCommentHaiH = .18 * this.canvas.width,
                this.dahaiCommentHaiW = this.getHaiW(this.dahaiCommentHaiH),
                this.dahaiCommentFontSize = .4 * this.dahaiCommentHaiH,
                this.reachCommentFontSize = .06 * this.canvas.width,
                this.kanCommentFontSize = .055 * this.canvas.width,
                this.flipFontSize = .03 * this.canvas.width,
                this.graphCanvasW = 450,
                this.graphCanvasH = 500,
                this.graphW = this.graphCanvasW,
                this.graphH = this.graphCanvasH,
                this.barHeight = .75 * this.graphH,
                this.haiW = 66,
                this.haiH = 90,
                this.graphHaiW = .17 * this.graphCanvasW,
                this.graphHaiH = this.getHaiH(this.graphHaiW),
                this.graphPastePos = [10, 10],
                this.startBarPos = .1 * this.graphW,
                this.graphFontSize = 50,
                this.graphLineTh = [8, 5]) : (this.canvas.width = t.comment_w,
                this.canvas.height = t.comment_h,
                this.commentHaiW = 66,
                this.commentHaiH = 90,
                this.commentFontSize = 35,
                this.dahaiCommentHaiH = this.dahaiCommentHaiW = this.dahaiCommentFontSize = -1,
                this.reachCommentFontSize = this.kanCommentFontSize = -1,
                this.flipFontSize = 25,
                this.graphCanvasW = 520,
                this.graphCanvasH = 270,
                this.graphW = .5 * this.graphCanvasW,
                this.graphH = 270,
                this.barHeight = .75 * this.graphH,
                this.haiW = 66,
                this.haiH = 90,
                this.graphHaiW = 44,
                this.graphHaiH = 60,
                this.graphPastePos = [20, 20],
                this.startBarPos = 20,
                this.graphFontSize = 22,
                this.graphLineTh = [5, 2.5]),
                this.graphCanvas.width = this.graphCanvasW,
                this.graphCanvas.height = this.graphCanvasH,
                this.ctx = this.safeContext(this.canvas),
                this.graphCtx = this.safeContext(this.graphCanvas),
                this.tmpImg = new Image,
                this.tmpHukidashi = new Image,
                this.tmpFlipHukidashi = new Image,
                this.hukidashi = e,
                this.mobile = a,
                this.initHukidashi(!1),
                this.initHukidashi(!0)
            }
            return Object(F["a"])(t, [{
                key: "getHaiH",
                value: function(t) {
                    return t / 66 * 90
                }
            }, {
                key: "getHaiW",
                value: function(t) {
                    return t / 90 * 66
                }
            }, {
                key: "safeContext",
                value: function(t) {
                    var e = t.getContext("2d");
                    if (null == e)
                        throw new Error("ctx is null");
                    return e
                }
            }, {
                key: "setGraphFont",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "kyokumen";
                    this.graphCtx.font = "".concat(t, "px '").concat(e, "'")
                }
            }, {
                key: "paste",
                value: function() {
                    this.hukidashi.src = this.canvas.toDataURL()
                }
            }, {
                key: "reset",
                value: function(t) {
                    this.ctx.clearRect(0, 0, 1e3, 1e3),
                    this.mobile ? this.tmpHukidashi.complete ? this.ctx.drawImage(t ? this.tmpFlipHukidashi : this.tmpHukidashi, 0, 0) : this.initHukidashi(t) : this.ctx.drawImage(t ? K : G, 0, 0)
                }
            }, {
                key: "drawMobileHukidashi",
                value: function(e, a, i, n, r) {
                    this.ctx.beginPath();
                    var s = t.corner_r;
                    this.ctx.moveTo(e + s, a),
                    this.ctx.lineTo(e + i - s, a),
                    this.ctx.arc(e + i - s, a + s, s, 1.5 * Math.PI, 0, !1),
                    this.ctx.lineTo(e + i, a + n - s),
                    this.ctx.arc(e + i - s, a + n - s, s, 0, .5 * Math.PI, !1),
                    this.ctx.lineTo(e + s, a + n),
                    this.ctx.arc(e + s, a + n - s, s, .5 * Math.PI, Math.PI, !1),
                    this.ctx.lineTo(e, a + s),
                    this.ctx.arc(e + s, a + s, s, Math.PI, 1.5 * Math.PI, !1),
                    this.ctx.closePath(),
                    this.ctx.fillStyle = r,
                    this.ctx.fill(),
                    this.ctx.fillStyle = "black";
                    var o = .2 * this.canvas.width;
                    this.ctx.drawImage(U, .2 * o, (this.canvas.height - o) / 2, o, o)
                }
            }, {
                key: "initHukidashi",
                value: function(t) {
                    if (this.ctx.clearRect(0, 0, 1e3, 1e3),
                    this.mobile) {
                        var e = 4;
                        t ? (this.drawMobileHukidashi(0, e, this.canvas.width - e, this.canvas.height - e, "gray"),
                        this.drawMobileHukidashi(e, 0, this.canvas.width - e, this.canvas.height - e, "white")) : this.drawMobileHukidashi(0, 0, this.canvas.width, this.canvas.height, "white")
                    }
                    (t ? this.tmpFlipHukidashi : this.tmpHukidashi).src = this.canvas.toDataURL()
                }
            }, {
                key: "getCommentStartX",
                value: function(t) {
                    return this.mobile ? .26 * this.canvas.width : (this.canvas.width - t) / 2
                }
            }, {
                key: "dahaiComment",
                value: function(t, e) {
                    var a;
                    this.reset(!1);
                    var i = t[W[e]];
                    this.ctx.font = "".concat(this.mobile ? this.dahaiCommentFontSize : this.commentFontSize, "px 'my_font'"),
                    a = i > .9 ? "を選びたい！" : i > .7 ? "がいいかも" : i > .5 ? "かな〜" : "かな？";
                    var n = this.ctx.measureText(a).width + this.commentHaiW
                      , r = this.getCommentStartX(n);
                    if (this.mobile)
                        this.ctx.drawImage(J[e], 0, 0, 66, 90, r, (this.canvas.height - this.dahaiCommentHaiH) / 2, this.dahaiCommentHaiW, this.dahaiCommentHaiH),
                        this.ctx.fillText(a, r + 1.1 * this.dahaiCommentHaiW, (this.canvas.height + this.dahaiCommentFontSize) / 2);
                    else {
                        var s = (this.canvas.height + this.commentFontSize) / 2.4;
                        this.ctx.drawImage(J[e], 0, 0, 66, 90, r, s - this.commentHaiW, this.commentHaiW, this.commentHaiH),
                        this.ctx.fillText(a, r + this.commentHaiW, s)
                    }
                    this.paste()
                }
            }, {
                key: "graphInit",
                value: function() {
                    this.graphCtx.clearRect(0, 0, 1e3, 1e3),
                    this.graphCtx.fillStyle = "rgba(230, 230, 230, 1)",
                    this.graphCtx.fillRect(0, 0, this.graphW, this.graphH),
                    this.graphCtx.fillStyle = "rgba(100, 100, 100, 1)",
                    this.graphCtx.fillRect(0, this.barHeight, this.graphW, this.graphLineTh[0]),
                    this.graphCtx.fillStyle = "rgba(120, 120, 120, 1)",
                    this.graphCtx.fillRect(0, this.barHeight / 2, this.graphW, this.graphLineTh[1])
                }
            }, {
                key: "setLazyLoad",
                value: function(t) {
                    var e = this;
                    this.tmpImg.onload = function() {
                        if (t === e.showState.kyokumenIdx()) {
                            if (e.mobile) {
                                var a = e.canvas.height - 2 * e.graphPastePos[1]
                                  , i = e.graphCanvasW / e.graphCanvasH * a;
                                e.ctx.drawImage(e.tmpImg, 0, 0, e.graphCanvasW, e.graphCanvasH, e.canvas.width - i - e.graphPastePos[0], e.graphPastePos[1], i, a)
                            } else
                                e.ctx.drawImage(e.tmpImg, e.graphPastePos[0], e.graphPastePos[1], e.graphCanvasW, e.graphCanvasH);
                            e.paste()
                        }
                    }
                    ,
                    this.tmpImg.src = this.graphCanvas.toDataURL()
                }
            }, {
                key: "reachGraphBuild",
                value: function(t, e, a, i) {
                    var n = t[this.nagaType]
                      , r = ["ダマ", "立直"]
                      , s = n >= .5 ? 1 : 0
                      , o = "".concat(r[s], n >= .9 ? "！" : "寄りかな");
                    if (this.mobile && (this.reset(i),
                    e)) {
                        this.ctx.font = "".concat(this.reachCommentFontSize, "px 'kyokumen'");
                        var c = this.getCommentStartX(this.ctx.measureText(o).width);
                        this.ctx.fillText(o, c, (this.canvas.height + this.reachCommentFontSize) / 2),
                        this.paste()
                    }
                    i && this.pasteFlipMsg("暗槓>"),
                    this.graphInit();
                    var h = 20
                      , l = this.mobile ? .2 * (this.canvas.width - this.startBarPos) : 40
                      , u = this.graphW - this.startBarPos - h - 2 * l;
                    this.setGraphFont(this.graphFontSize);
                    var d = t.map((function(t) {
                        return {
                            0: t
                        }
                    }
                    ));
                    this.drawGraph(d, [0], u, l, "rgba(200, 100, 100, 1)");
                    var p = this.startBarPos + l;
                    if (this.graphCtx.fillStyle = "rgba(10, 10, 10, 1)",
                    this.graphCtx.fillText("立", p + (u - this.graphFontSize) / 2, this.barHeight + this.graphFontSize + .2 * this.graphFontSize),
                    this.graphCtx.fillText("直", p + (u - this.graphFontSize) / 2, this.barHeight + 2 * this.graphFontSize + .2 * this.graphFontSize),
                    this.setGraphFont(this.commentFontSize),
                    e) {
                        p = this.graphW + 10;
                        var f = this.graphCanvasH / 2;
                        this.graphCtx.fillText(o, p, f)
                    }
                    this.setLazyLoad(a)
                }
            }, {
                key: "drawGraph",
                value: function(t, e, a, i, n) {
                    var r, s = this, o = 1, c = 1.7, h = a / c, l = (a - o * (this.nagaTypeNum - 1)) / (this.nagaTypeNum - 1 + c), u = Math.min(l, h), d = u * c, p = this.startBarPos;
                    e.forEach((function(e) {
                        p += i,
                        t.forEach((function(t, a) {
                            var i;
                            r = s.barHeight * (1 - t[e]),
                            a == s.nagaType ? (i = d,
                            s.graphCtx.fillStyle = n) : (i = u,
                            s.graphCtx.fillStyle = "rgba(200, 200, 200, 1)"),
                            s.graphCtx.fillRect(p, r, i, s.barHeight - r),
                            p += i + o
                        }
                        )),
                        p += i
                    }
                    ))
                }
            }, {
                key: "huroGraphBuild",
                value: function(e, a, i, n) {
                    var r = this;
                    this.graphInit();
                    var s = e[this.nagaType]
                      , o = e[this.nagaType]
                      , c = 20
                      , h = parseInt(A(o))
                      , l = ["スルー", "チー", "チー", "チー", "ポン", "カン"]
                      , u = [];
                    if (Object.keys(o).length > 3) {
                        var d, p = Object(Yt["a"])({}, o), f = {
                            0: p[0]
                        };
                        delete p[0];
                        for (var m = 0; m < 2; m++)
                            d = A(p),
                            u.push(parseInt(d)),
                            f[d] = p[d],
                            delete p[d];
                        s = f
                    } else
                        Object.keys(o).map((function(t) {
                            return parseInt(t)
                        }
                        )).forEach((function(t) {
                            0 != t && u.push(t)
                        }
                        ));
                    var g = Object.keys(s).length;
                    if (this.mobile && (this.reset(!1),
                    i)) {
                        if (0 != h && h <= 3) {
                            this.ctx.font = "".concat(this.commentFontSize, "px 'my_font'");
                            var y = parseInt(a[0])
                              , b = a[1]
                              , k = Object(H["a"])(t.chi_consume[h - 1][y - 1], 2)
                              , v = k[0]
                              , w = k[1]
                              , _ = this.getCommentStartX(-1);
                            if (s[h] >= .9) {
                                var x = "で".concat(l[h], "！")
                                  , j = (this.canvas.height - this.commentHaiH) / 2;
                                this.ctx.drawImage(J[v.toString() + b], 0, 0, 67, 90, _, j, this.commentHaiW, this.commentHaiH),
                                this.ctx.drawImage(J[w.toString() + b], 0, 0, 67, 90, _ + this.commentHaiW, j, this.commentHaiW, this.commentHaiH),
                                this.ctx.fillText(x, _ + 2 * this.commentHaiW, (this.canvas.height + this.commentFontSize) / 2)
                            } else {
                                var S = "".concat(l[h], "寄りかな")
                                  , O = this.canvas.height / 2 - this.commentHaiH;
                                this.ctx.drawImage(J[v.toString() + b], 0, 0, 67, 90, _, O, this.commentHaiW, this.commentHaiH),
                                this.ctx.drawImage(J[w.toString() + b], 0, 0, 67, 90, _ + this.commentHaiW, O, this.commentHaiW, this.commentHaiH),
                                this.ctx.fillText("で", _ + 2 * this.commentHaiW, O + 2 * this.commentFontSize),
                                this.ctx.fillText(S, _, this.canvas.height / 2 * 3 / 2)
                            }
                        } else {
                            var T = 1.13 * this.commentFontSize;
                            this.ctx.font = "".concat(T, "px 'my_font'");
                            var C = "".concat(l[h]) + (s[h] >= .9 ? "！" : "寄りかな")
                              , P = this.getCommentStartX(-1)
                              , z = (this.canvas.height + T) / 2;
                            this.ctx.fillText(C, P, z)
                        }
                        this.paste()
                    }
                    var I, F = this.startBarPos;
                    this.mobile ? (I = (this.canvas.width - this.startBarPos) / (g - 1),
                    I *= 2 == g ? .3 : .2) : I = [-1, 40, 20, 14, 11, 8][g - 1];
                    var D = (this.graphW - this.startBarPos - c) / (g - 1) - 2 * I;
                    this.setGraphFont(this.graphFontSize - 4);
                    var R = this.graphHaiW
                      , E = this.graphHaiH;
                    if (!this.mobile && g > 2) {
                        var M = D + 2 * I - 4;
                        R = 5 in o ? M / 3.5 : M / 3,
                        E = 1.5 * R
                    }
                    if (u.map((function(e) {
                        if (0 !== e) {
                            if (F += I,
                            r.graphCtx.fillStyle = "rgba(10, 10, 10, 1)",
                            e <= 3) {
                                var i = parseInt(a[0])
                                  , n = a[1]
                                  , s = Object(H["a"])(t.chi_consume[e - 1][i - 1], 2)
                                  , o = s[0]
                                  , c = s[1];
                                r.graphCtx.drawImage(J[o.toString() + n], 0, 0, 66, 90, F + D / 2 - R, r.barHeight + r.graphLineTh[0], R, E),
                                r.graphCtx.drawImage(J[c.toString() + n], 0, 0, 66, 90, F + D / 2, r.barHeight + r.graphLineTh[0], R, E)
                            } else if (4 == e) {
                                var h = J[a.slice(0, 2)];
                                r.graphCtx.drawImage(h, 0, 0, 66, 90, F + D / 2 - R, r.barHeight + r.graphLineTh[0], R, E),
                                r.graphCtx.drawImage(h, 0, 0, 66, 90, F + D / 2, r.barHeight + r.graphLineTh[0], R, E)
                            } else {
                                var l = J[a.slice(0, 2)];
                                r.graphCtx.drawImage(l, 0, 0, 66, 90, F + D / 2 - 1.5 * R, r.barHeight + r.graphLineTh[0], R, E),
                                r.graphCtx.drawImage(l, 0, 0, 66, 90, F + D / 2 - .5 * R, r.barHeight + r.graphLineTh[0], R, E),
                                r.graphCtx.drawImage(l, 0, 0, 66, 90, F + D / 2 + .5 * R, r.barHeight + r.graphLineTh[0], R, E)
                            }
                            F += D + I
                        }
                    }
                    )),
                    this.drawGraph(e, u, D, I, "rgba(100, 200, 200, 1)"),
                    this.graphCtx.fillStyle = "rgba(0, 0, 0, 1)",
                    this.setGraphFont(this.commentFontSize),
                    !this.mobile && i) {
                        F = this.graphW + 10;
                        var W = this.graphCanvasH / 2;
                        if (0 != h && h <= 3) {
                            W -= 20,
                            F = this.graphW + 20;
                            var N = parseInt(a[0])
                              , L = a[1]
                              , B = Object(H["a"])(t.chi_consume[h - 1][N - 1], 2)
                              , V = B[0]
                              , G = B[1];
                            this.graphCtx.drawImage(J[V.toString() + L], 0, 0, 66, 90, F, W - this.haiW, this.haiW, this.haiH),
                            this.graphCtx.drawImage(J[G.toString() + L], 0, 0, 66, 90, F + this.haiW, W - this.haiW, this.haiW, this.haiH),
                            this.graphCtx.fillText("使って", F + 2 * this.haiW, W),
                            W += 70
                        }
                        this.graphCtx.fillText("".concat(l[h]) + (s[h] >= .9 ? "！" : "寄りかな"), F, W)
                    }
                    this.setLazyLoad(n)
                }
            }, {
                key: "pasteFlipMsg",
                value: function(e) {
                    if (this.mobile) {
                        this.ctx.fillStyle = "black",
                        this.ctx.font = "".concat(this.flipFontSize, "px 'kyokumen'");
                        var a = .2 * this.canvas.width;
                        this.ctx.fillText(e, .2 * a + .5 * a - this.ctx.measureText(e).width / 2, 1.5 * a + 20)
                    } else
                        this.ctx.fillStyle = "black",
                        this.ctx.font = "".concat(this.flipFontSize, "px 'kyokumen'"),
                        this.ctx.fillText(e, .85 * t.comment_w, .78 * t.comment_h)
                }
            }, {
                key: "kanGraphBuild",
                value: function(t, e, a, i) {
                    var n = this;
                    this.graphInit();
                    var r = t[this.nagaType]
                      , s = Object.keys(r).length
                      , o = 20
                      , c = parseInt(A(r))
                      , h = ["スルー", "暗槓", "加槓"]
                      , l = "".concat(h[c]) + (r[c] >= .9 ? "！" : "寄りかな");
                    if (this.mobile && (this.reset(i),
                    e)) {
                        this.ctx.font = "".concat(this.kanCommentFontSize, "px 'my_font'");
                        var u = this.getCommentStartX(this.ctx.measureText(l).width);
                        this.ctx.fillText(l, u, (this.canvas.height + this.kanCommentFontSize) / 2),
                        this.paste()
                    }
                    i && this.pasteFlipMsg("立直>");
                    var d, p = this.startBarPos;
                    this.mobile ? (d = (this.canvas.width - this.startBarPos) / (s - 1),
                    d *= 2 == s ? .3 : .2) : d = [-1, 40, 20][s - 1];
                    var f = (this.graphW - this.startBarPos - o) / (s - 1) - 2 * d;
                    this.setGraphFont(this.graphFontSize),
                    Object.keys(r).map((function(t) {
                        var e = parseInt(t);
                        0 !== e && (p += d,
                        n.graphCtx.fillStyle = "rgba(10, 10, 10, 1)",
                        n.graphCtx.fillText(h[e][0], p + (f - n.graphFontSize) / 2, n.barHeight + n.graphFontSize + .2 * n.graphFontSize),
                        n.graphCtx.fillText(h[e][1], p + (f - n.graphFontSize) / 2, n.barHeight + 2 * n.graphFontSize + .2 * n.graphFontSize),
                        p += f + d)
                    }
                    ));
                    var m = [];
                    if (Object.keys(r).map((function(t) {
                        return parseInt(t)
                    }
                    )).forEach((function(t) {
                        0 != t && m.push(t)
                    }
                    )),
                    this.drawGraph(t, m, f, d, "rgba(100, 100, 200, 1)"),
                    this.graphCtx.fillStyle = "rgba(0, 0, 0, 1)",
                    this.setGraphFont(this.commentFontSize),
                    !this.mobile && e) {
                        p = this.graphW + 10;
                        var g = this.graphCanvasH / 2;
                        this.graphCtx.fillText(l, p, g)
                    }
                    this.setLazyLoad(a)
                }
            }]),
            t
        }();
        Zt.comment_w = 560,
        Zt.comment_h = 360,
        Zt.corner_r = 20,
        Zt.chi_consume = [[[2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]], [[-1, -1], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7, 9]], [[-1, -1], [-1, -1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8]]],
        Zt.actions = ["chi", "pon", "daiminkan", "ankan", "kakan"];
        var $t = Object(i["g"])({
            name: "CommentComponet",
            props: {
                targetSeat: {
                    type: Number,
                    required: !0
                },
                imgHeight: {
                    type: Number,
                    required: !0
                },
                mobile: {
                    type: Boolean,
                    required: !0
                },
                newDiff: {
                    type: Dt,
                    required: !0
                }
            },
            setup: function(t) {
                var e, a = Object(i["n"])({
                    styleObject: {
                        background: "#00000067",
                        border: "none",
                        color: "white"
                    }
                }), n = Object(i["h"])(ht), r = Object(i["h"])(ut);
                if (!n || !r)
                    throw new Error("no settings");
                var s, o = Object(i["p"])(null), c = Object(i["p"])(null), h = Object(i["p"])(null), l = Object(i["b"])((function() {
                    if (!t.mobile)
                        return {
                            height: t.imgHeight + "px"
                        }
                }
                )), u = Object(i["b"])((function() {
                    return {
                        height: t.mobile ? "100%" : "50%",
                        width: "auto"
                    }
                }
                )), d = Object(i["b"])((function() {
                    return {
                        height: t.mobile ? "100%" : "50%",
                        objectFit: "contain"
                    }
                }
                )), p = function() {
                    var a = r.kyokuIdx()
                      , i = r.kyokumenIdx();
                    if (e.reset(!1),
                    e.paste(),
                    n.getShowPred()) {
                        var o = s[a][i]
                          , c = o.info.msg
                          , h = t.targetSeat
                          , l = o.kan
                          , u = o.huro
                          , d = Object.keys(o).includes("reach")
                          , p = c.actor == t.targetSeat
                          , f = n.getPlayerType();
                        if (e.nagaType = n.getPlayerType(),
                        u && o.huro[t.targetSeat] && !p) {
                            var m = t.newDiff.huroDiff[h][a][f].includes(i);
                            e.huroGraphBuild(o.huro[t.targetSeat], c.pai, m, i)
                        } else if ((l || d) && p) {
                            var g = r.prioritizeReach();
                            if (l && d)
                                if (e.reset(!0),
                                g) {
                                    var y = t.newDiff.reachDiff[h][a][f].includes(i);
                                    e.reachGraphBuild(o.reach, y, i, !0)
                                } else {
                                    var b = t.newDiff.huroDiff[h][a][f].includes(i);
                                    e.kanGraphBuild(o.kan, b, i, !0)
                                }
                            else if (l) {
                                var k = t.newDiff.huroDiff[h][a][f].includes(i);
                                e.kanGraphBuild(o.kan, k, i, !1)
                            } else {
                                var v = t.newDiff.reachDiff[h][a][f].includes(i);
                                e.reachGraphBuild(o.reach, v, i, !1)
                            }
                        } else
                            t.newDiff.dahaiDiff[t.targetSeat][a][0][f].includes(i) ? e.dahaiComment(o.dahaiPred[f], o.info.msg.pred_dahai[f]) : (t.mobile ? e.reset(!1) : e.ctx.clearRect(0, 0, 1e3, 1e3),
                            e.paste())
                    } else
                        t.mobile ? e.reset(!1) : e.ctx.clearRect(0, 0, 1e3, 1e3),
                        e.paste()
                }, f = function(a) {
                    s = a;
                    var i = o.value;
                    if (null == i || !(i instanceof HTMLImageElement))
                        throw Error("commentImg is null");
                    var c = h.value;
                    if (null == c || !(c instanceof HTMLDivElement))
                        throw Error("div is null");
                    var l = n.getNagaTypeNum();
                    e = new Zt(i,t.mobile,l,r,c.clientHeight,c.clientWidth),
                    t.mobile ? e.reset(!1) : e.ctx.clearRect(0, 0, 1e3, 1e3),
                    e.paste(),
                    p()
                };
                Object(i["x"])((function() {
                    return [r.kyokuIdx(), r.kyokumenIdx(), t.targetSeat, n.getShowPred(), n.getPlayerType(), r.prioritizeReach()]
                }
                ), p);
                var m = function() {
                    var t = r.kyokuIdx()
                      , e = r.kyokumenIdx();
                    if (n.getShowPred()) {
                        var a = s[t][e]
                          , i = a.kan
                          , o = Object.keys(a).includes("reach");
                        i && o && r.flipPrioritizeReach()
                    }
                };
                return {
                    state: a,
                    setCommentObj: f,
                    commentImg: o,
                    nagaImg: c,
                    columnStyle: l,
                    commentStyle: u,
                    nagaStyle: d,
                    hoge: h,
                    flipPrioritizeReach: m
                }
            }
        });
        a("a234");
        $t.render = Xt,
        $t.__scopeId = "data-v-1b569d25";
        var Qt = $t;
        function te(t, e, a, n, r, s) {
            return Object(i["y"])((Object(i["j"])(),
            Object(i["d"])("select", {
                style: t.state.styleObject,
                "onUpdate:modelValue": e[1] || (e[1] = function(e) {
                    return t.state.selected = e
                }
                ),
                onChange: e[2] || (e[2] = function() {
                    return t.updateValue && t.updateValue.apply(t, arguments)
                }
                )
            }, [(Object(i["j"])(!0),
            Object(i["d"])(i["a"], null, Object(i["q"])(t.options, (function(e, a) {
                return Object(i["j"])(),
                Object(i["d"])("option", {
                    value: a,
                    key: a,
                    selected: t.isSelected(a)
                }, Object(i["s"])(e), 9, ["value", "selected"])
            }
            )), 128))], 36)), [[i["v"], t.state.selected]])
        }
        var ee = Object(i["g"])({
            name: "DisplayNameSelector",
            setup: function() {
                var t = Object(i["n"])({
                    selected: 0,
                    styleObject: {
                        color: "white",
                        width: "100%",
                        padding: 0
                    }
                })
                  , e = Object(i["h"])(ht);
                if (!e)
                    throw new Error("");
                var a = ["なし", "隠他", "隠全"]
                  , n = function(e) {
                    return e == t.selected
                }
                  , r = function(e) {
                    t.selected = e
                }
                  , s = function(t) {
                    if (null != t.target) {
                        var a = t.target;
                        e.setDisplayNameType(parseInt(a.value))
                    }
                };
                return {
                    state: t,
                    options: a,
                    updateValue: s,
                    isSelected: n,
                    select: r
                }
            }
        });
        ee.render = te;
        var ae = ee
          , ie = Object(i["z"])("data-v-5312d0ff");
        Object(i["m"])("data-v-5312d0ff");
        var ne = Object(i["f"])("p", {
            class: "dropdown-trigger"
        }, "表示選択", -1)
          , re = {
            class: "dropdown-menu",
            role: "menu",
            style: {
                "padding-top": "0",
                width: "100%",
                "min-width": "10px"
            }
        }
          , se = {
            class: "dropdown-content"
        }
          , oe = Object(i["f"])("path", {
            d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        }, null, -1)
          , ce = Object(i["f"])("path", {
            d: "M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"
        }, null, -1)
          , he = Object(i["f"])("path", {
            d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        }, null, -1)
          , le = {
            style: {
                width: "90%"
            }
        };
        Object(i["k"])();
        var ue = ie((function(t, e, a, n, r, s) {
            return Object(i["j"])(),
            Object(i["d"])("div", {
                class: ["column is-3 btn dropdown", t.kyokumenEditClass],
                ref: "kyokumenEdit",
                onClick: e[1] || (e[1] = function() {
                    return t.openDropdownMenu && t.openDropdownMenu.apply(t, arguments)
                }
                )
            }, [ne, Object(i["f"])("div", re, [Object(i["f"])("div", se, [(Object(i["j"])(!0),
            Object(i["d"])(i["a"], null, Object(i["q"])(t.labels, (function(e) {
                return Object(i["j"])(),
                Object(i["d"])(i["a"], {
                    key: e.l
                }, [Object(i["y"])(Object(i["f"])("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": function(a) {
                        return t.selected[e.l] = a
                    },
                    id: e.l,
                    name: e.l,
                    checked: "",
                    style: {
                        display: "none"
                    },
                    onChange: function(a) {
                        return t.setShowPred(e)
                    }
                }, null, 40, ["onUpdate:modelValue", "id", "name", "onChange"]), [[i["t"], t.selected[e.l]]]), Object(i["f"])("label", {
                    for: e.l,
                    class: "dropdown-item",
                    style: t.dropdownItemStyle
                }, [t.selected[e.l] ? (Object(i["j"])(),
                Object(i["d"])("svg", {
                    key: 0,
                    style: [{
                        float: "left"
                    }, t.svgStyle],
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    class: "bi bi-check-square",
                    viewBox: "0 0 16 16"
                }, [oe, ce], 4)) : (Object(i["j"])(),
                Object(i["d"])("svg", {
                    key: 1,
                    style: [{
                        float: "left"
                    }, t.svgStyle],
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    class: "bi bi-square",
                    viewBox: "0 0 16 16"
                }, [he], 4)), Object(i["f"])("span", le, Object(i["s"])(e.name), 1)], 12, ["for"])], 64)
            }
            )), 128))])])], 2)
        }
        ))
          , de = Object(i["g"])({
            name: "PredShowPatternSelector",
            props: {
                oneLine: {
                    type: Number,
                    required: !0
                },
                mobile: {
                    type: Boolean,
                    required: !0
                }
            },
            setup: function(t) {
                var e = Object(i["n"])({
                    styleObject: {
                        color: "white",
                        width: "100%",
                        padding: 0
                    }
                })
                  , a = Object(i["h"])(ht);
                if (!a)
                    throw new Error("");
                var n = Object(i["n"])({
                    "is-active": !1,
                    "is-up": t.mobile
                })
                  , r = Object(i["p"])({})
                  , s = [{
                    name: "打牌",
                    l: "A",
                    set: a.setShowPred,
                    get: a.getShowPred
                }, {
                    name: "指摘線",
                    l: "B",
                    set: a.setShowDiffBar,
                    get: a.getShowDiffBar
                }, {
                    name: "聴牌率",
                    l: "C",
                    set: a.setShowTenpaiPred,
                    get: a.getShowTenpaiPred
                }, {
                    name: "危険牌",
                    l: "D",
                    set: a.setShowDangerPred,
                    get: a.getShowDangerPred
                }, {
                    name: "終局",
                    l: "E",
                    set: a.setShowEndPred,
                    get: a.getShowEndPred
                }, {
                    name: "順位",
                    l: "F",
                    set: a.setShowRankPred,
                    get: a.getShowRankPred
                }]
                  , o = function(t) {
                    t.set(!t.get())
                }
                  , c = function(t) {
                    t.stopPropagation(),
                    n["is-active"] = !n["is-active"]
                }
                  , h = function() {
                    n["is-active"] = !1
                }
                  , l = [["全表示", rt.AllShow], ["指摘箇所のみ非表示", rt.PointingOutHide], ["打牌選択のみ非表示", rt.DahaiHide], ["全非表示", rt.AllHide]]
                  , u = Object(i["n"])({
                    textAlign: "center",
                    fontSize: "10px",
                    paddingRight: "1px",
                    paddingLeft: "1px",
                    display: "flex",
                    alignItems: "center"
                })
                  , d = Object(i["n"])({
                    width: "10px",
                    height: "10px"
                });
                Object(i["x"])((function() {
                    return t.oneLine
                }
                ), (function() {
                    u.fontSize = .5 * t.oneLine + "px",
                    d.width = d.height = .5 * t.oneLine + "px"
                }
                ));
                var p = Object(i["b"])((function() {
                    return {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "95%",
                        textAlign: "center",
                        alignContent: "center",
                        padding: "0"
                    }
                }
                ))
                  , f = function() {
                    r.value && s.forEach((function(t) {
                        r.value[t.l] = t.get()
                    }
                    ))
                };
                return Object(i["i"])((function() {
                    document.addEventListener("click", h)
                }
                )),
                {
                    state: e,
                    options: l,
                    dropdownItemStyle: u,
                    openDropdownMenu: c,
                    kyokumenEditClass: n,
                    tagStyle: p,
                    selected: r,
                    labels: s,
                    svgStyle: d,
                    setShowPred: o,
                    updateState: f
                }
            }
        });
        a("5cef");
        de.render = ue,
        de.__scopeId = "data-v-5312d0ff";
        var pe = de;
        function fe(t, e, a, n, r, s) {
            return Object(i["y"])((Object(i["j"])(),
            Object(i["d"])("select", {
                style: t.state.styleObject,
                "onUpdate:modelValue": e[1] || (e[1] = function(e) {
                    return t.state.selected = e
                }
                ),
                onChange: e[2] || (e[2] = function() {
                    return t.updateValue && t.updateValue.apply(t, arguments)
                }
                ),
                disabled: t.disabled
            }, [(Object(i["j"])(!0),
            Object(i["d"])(i["a"], null, Object(i["q"])(t.values, (function(e) {
                return Object(i["j"])(),
                Object(i["d"])("option", {
                    value: e,
                    key: e
                }, Object(i["s"])(t.nagaTypes[e]), 9, ["value"])
            }
            )), 128))], 44, ["disabled"])), [[i["v"], t.state.selected]])
        }
        var me = Object(i["g"])({
            name: "NagaShowTypeSelector",
            setup: function() {
                var t = Object(i["n"])({
                    selected: 0,
                    styleObject: {
                        color: "white",
                        padding: 0
                    }
                })
                  , e = Object(i["h"])(ht);
                if (!e)
                    throw new Error("");
                var a = e.nagaTypes
                  , n = e.getNagaTypeNum()
                  , r = 1 === n ? [0] : Object.keys(a).map((function(t) {
                    return parseInt(t)
                }
                ))
                  , s = 1 == n
                  , o = function() {
                    return t.selected
                }
                  , c = function(e) {
                    t.selected = e
                }
                  , h = function(t) {
                    if (null != t.target) {
                        var a = t.target;
                        e.setPlayerType(parseInt(a.value))
                    }
                };
                return {
                    state: t,
                    updateValue: h,
                    select: c,
                    getSelected: o,
                    disabled: s,
                    nagaTypes: a,
                    values: r
                }
            }
        });
        me.render = fe;
        var ge = me
          , ye = (a("a15b"),
        function(t, e, a, i, n) {
            var r = t[0]
              , s = r.info.msg
              , o = s.scores
              , c = s.tehais.map((function(t) {
                return t.map((function(t) {
                    return N[t]
                }
                ))
            }
            ))
              , h = [[], [], [], []]
              , l = [[], [], [], []]
              , u = s.bakaze
              , d = [4 * ["E", "S", "W"].indexOf(u) + s.kyoku - 1, s.honba, s.kyotaku]
              , p = [N[s.dora_marker]]
              , f = []
              , m = !1
              , g = {}
              , y = 0
              , b = 0
              , k = 70;
            t.slice(1, e + 1).forEach((function(t) {
                var e = t.info.msg;
                switch (e.type) {
                case "tsumo":
                    l[e.actor].push(N[e.pai]),
                    k -= 1;
                    break;
                case "dahai":
                    var a = e.tsumogiri ? 60 : N[e.pai];
                    m ? h[e.actor].push("r" + a) : h[e.actor].push(a);
                    break;
                case "chi":
                    l[e.actor].push("c" + N[e.pai] + N[e.consumed[0]] + N[e.consumed[1]]);
                    break;
                case "pon":
                    var i = E[e.actor][e.target]
                      , n = e.consumed.map((function(t) {
                        return N[t]
                    }
                    ));
                    n.splice(3 - i, 0, "p" + N[e.pai]),
                    l[e.actor].push(n.join(""));
                    var r = e.pai.slice(0, 2);
                    g[r] = 3 - i;
                    break;
                case "daiminkan":
                    var s = e.consumed.map((function(t) {
                        return N[t]
                    }
                    ))
                      , o = 1 == E[e.actor][e.target] ? 2 : 3 - E[e.actor][e.target];
                    s.splice(o, 0, "m" + N[e.pai]),
                    l[e.actor].push(s.join("")),
                    h[e.actor].push(0),
                    y += 1;
                    break;
                case "ankan":
                    var c = e.consumed.map((function(t) {
                        return N[t]
                    }
                    ));
                    c.splice(3, 1, "a" + c[3]),
                    h[e.actor].push(c.join("")),
                    y += 1;
                    break;
                case "kakan":
                    var u = e.consumed.map((function(t) {
                        return N[t]
                    }
                    ));
                    u.splice(g[e.pai.slice(0, 2)], 0, "k" + N[e.pai]),
                    h[e.actor].push(u.join("")),
                    y += 1;
                    break;
                case "dora":
                    p.push(N[e.dora_marker]);
                    break;
                case "reach":
                    m = !0;
                    break;
                case "reach_accepted":
                    m = !1,
                    b += 1;
                    break;
                default:
                    break
                }
            }
            ));
            for (var v = [d, o, p, f], w = 0; w < 4; w++)
                v.push(c[w]),
                v.push(l[w]),
                v.push(h[w]);
            if (n || e + 1 == t.length)
                if ("ryukyoku" == s.end_msgs[0].type)
                    0 == k ? s.end_msgs[0].deltas.filter((function(t) {
                        return t > 4e3
                    }
                    )).length ? v.push(["流し満貫", s.end_msgs[0].deltas]) : v.push(["流局", s.end_msgs[0].deltas]) : 4 == b ? v.push(["四家立直"]) : 4 == y ? v.push(["四槓散了"]) : 4 == h.filter((function(t) {
                        return 1 == t.length
                    }
                    )).length ? v.push(["四風連打"]) : v.push(["三家和了"]);
                else
                    for (var _ = 0; _ < s.end_msgs.length; _++) {
                        var x = s.end_msgs[_]
                          , j = x.actor == x.target ? 0 : 1
                          , S = s.oya == x.actor ? at.oya : at.ko
                          , O = s.oya == x.actor ? it.oya : it.ko
                          , T = 0 == x.hora_rank ? S[x.fan][x.hu][j] : O[x.hora_rank][j];
                        x.uradora_markers.forEach((function(t) {
                            f.push(N[tt(t)])
                        }
                        )),
                        v.push(["和了", s.end_msgs[0].deltas, [x.actor, x.target, x.actor, T]])
                    }
            else
                v.push(["流局", [0, 0, 0, 0]]);
            var C = {
                title: ["", ""],
                name: i,
                rule: {
                    disp: 0 == a ? "鳳南喰赤" : "鳳東喰赤",
                    aka: 1
                },
                log: [v]
            };
            return "https://tenhou.net/6/#json=" + encodeURIComponent(JSON.stringify(C)).replaceAll("%2C", ",")
        }
        )
          , be = Object(i["g"])({
            name: "Main",
            components: {
                KyokumenImage: pt,
                SideButton: gt,
                ViewSelector: kt,
                ThresholdRadio: xt,
                EndGraph: At,
                RankGraph: Ut,
                CommentComponent: Qt,
                DisplayNameSelector: ae,
                PredShowPatternSelectorVue: pe,
                NagaShowTypeSelectorVue: ge
            },
            setup: function() {
                var t, e = 743, a = Object(i["n"])({
                    lineAtIndex: [0],
                    targetSeat: 0,
                    names: [],
                    dan: [],
                    rate: [],
                    pred: [],
                    showPred: !1,
                    haiHide: !1,
                    darkColor: !1,
                    mobileComment: !1,
                    windowH: window.innerHeight,
                    windowW: window.innerWidth,
                    imgHeight: window.innerHeight < window.innerWidth ? Math.min(.75 * window.innerHeight, 700) : Math.min(9 * window.innerWidth / 15, 700),
                    mobile: window.innerWidth < e,
                    vh: .01 * window.innerHeight,
                    vw: 0,
                    size: 0,
                    containerW: 0,
                    baseSize: 0,
                    oneLine: 0,
                    commentHeight: 0,
                    controlHeight: 0
                }), n = Object(i["p"])(null), r = Object(i["p"])(null), s = Object(i["p"])(null), o = Object(i["p"])(null), c = Object(i["p"])(null), h = Object(i["p"])(null), l = Object(i["p"])(null), u = Object(i["p"])(null), d = function() {
                    try {
                        return Object.keys(nagaTypes).length
                    } catch (t) {
                        return 1
                    }
                }, p = function() {
                    try {
                        return "undefined" !== typeof gameType ? gameType : 0
                    } catch (t) {
                        return 0
                    }
                }, f = function() {
                    try {
                        var t = "v".concat(nagaVersion[0], ".").concat(nagaVersion[1])
                          , e = Object(P["a"])(Array(Object.keys(nagaTypes).length).keys()).map((function(t) {
                            return nagaTypes[t]
                        }
                        ));
                        return [t, e]
                    } catch (r) {
                        console.log("old_version"),
                        Et(pred)
                    }
                    try {
                        var a, i = {
                            0: ["ω", "γ", "ニシキ"],
                            1: ["ν", "σ"]
                        }, n = "v".concat(nagaVersion[0], ".").concat(nagaVersion[1]);
                        return a = 4 == nagaVersion.length ? [nagaVersion[3]] : [i[p()][nagaVersion[2]]],
                        [n, a]
                    } catch (r) {
                        console.log("no version")
                    }
                    return ["v1.2", ["ω"]]
                }, m = f(), g = Object(H["a"])(m, 2), y = g[0], b = g[1];
                try {
                    t = nagaTypes
                } catch (Ot) {
                    t = {
                        0: b[0]
                    }
                }
                var k, v = d(), w = new Dt(v), _ = 60, x = ct(t);
                Object(i["l"])(ht, x);
                var j = pred.map((function(t) {
                    return t.length - 1
                }
                ))
                  , S = pred.map((function(t) {
                    return t[0].end_num
                }
                ))
                  , O = lt(j, S, v);
                Object(i["l"])(ut, O);
                var T = Object(i["n"])({
                    height: "".concat(15 * a.vh, "px")
                })
                  , C = Object(i["n"])({
                    textAlign: "center",
                    height: "".concat(.345 * a.imgHeight, "px")
                })
                  , z = Object(i["n"])({
                    height: "".concat(.05 * a.imgHeight, "px"),
                    marginTop: "0px"
                })
                  , I = Object(i["n"])({
                    width: a.mobile ? "100%" : "1200px",
                    height: ""
                })
                  , F = Object(i["n"])({
                    height: "100px"
                })
                  , D = Object(i["n"])({
                    height: "100px",
                    width: "100%"
                })
                  , R = Object(i["n"])({
                    fontSize: "10px"
                })
                  , E = Object(i["n"])({
                    textAlign: "center",
                    fontSize: "10px",
                    paddingRight: "0px",
                    paddingLeft: "0px"
                })
                  , M = function() {
                    a.windowH = window.innerHeight,
                    a.windowW = window.innerWidth;
                    var t = 0;
                    if (c.value && c.value instanceof HTMLDivElement) {
                        var i = c.value;
                        t = i.clientWidth
                    }
                    var n = a.mobile;
                    if (a.windowW < e) {
                        a.mobile = !0;
                        var r = .01 * a.windowH;
                        a.windowW;
                        a.imgHeight = Math.min(t, 50 * r),
                        a.vh = r,
                        T.height = 15 * r + "px",
                        C.height = 15 * r + "px",
                        a.oneLine = 5 * r,
                        z.height = a.oneLine + "px",
                        z.marginTop = "-0.75rem",
                        F.height = Math.min(t, 50 * r) + "px",
                        R.fontSize = .4 * a.oneLine + "px"
                    } else {
                        var s;
                        s = window.innerHeight / 3 < window.innerWidth / 4 ? window.innerHeight / 3 : window.innerWidth / 4,
                        a.baseSize = s,
                        a.mobile = !1;
                        var o = 4 * s - 64
                          , h = 3 * s - 64;
                        I.width = o + "px",
                        I.height = h + "px";
                        var l = .85 * h;
                        F.height = l + "px",
                        D.height = .15 * h + "px",
                        a.controlHeight = .55 * l,
                        a.commentHeight = .4 * l;
                        var u = .14 * a.controlHeight * .55;
                        a.oneLine = u,
                        C.height = 4 * u * 2 + "px",
                        z.height = u + "px",
                        z.marginTop = "-0.75rem",
                        a.imgHeight = l,
                        R.fontSize = .4 * u + "px",
                        E.fontSize = .5 * u + "px"
                    }
                    n != a.mobile && location.reload()
                }
                  , A = function() {
                    a.names = et(a.targetSeat, k, x.getDisplayNameType())
                }
                  , W = "https://twitter.com/share?text=NAGA解析レポート&hashtags=NAGA解析&url=".concat(window.location.href)
                  , N = Object(i["b"])((function() {
                    return a.mobile ? {
                        height: "95%",
                        textAlign: "center",
                        alignContent: "center",
                        fontSize: "".concat(.05 * a.imgHeight, "px"),
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0"
                    } : {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "95%",
                        textAlign: "center",
                        alignContent: "center",
                        padding: "0",
                        fontSize: "".concat(.02 * a.imgHeight, "px")
                    }
                }
                ))
                  , L = Object(i["b"])((function() {
                    return a.mobile ? {
                        paddingTop: "1rem"
                    } : {}
                }
                ))
                  , B = Object(i["b"])((function() {
                    return a.mobile ? {
                        height: "95%",
                        textAlign: "center",
                        alignContent: "center",
                        fontFamily: "my_font",
                        fontSize: "16px"
                    } : {
                        height: "95%",
                        textAlign: "center",
                        alignContent: "center",
                        fontFamily: "my_font",
                        fontSize: "".concat(.02 * a.imgHeight, "px")
                    }
                }
                ))
                  , V = {
                    height: "95%",
                    textAlign: "center",
                    alignContent: "center"
                }
                  , G = [[], [], [], []]
                  , K = function(t) {
                    t.length > 0 ? O.setKyokumen(t[0]) : O.showEndNum() != O.getEndNum() ? O.setKyokumenMax() : O.kyokumenInc()
                }
                  , q = function(t) {
                    O.unsetEndState(),
                    t.length > 0 ? O.setKyokumen(t[t.length - 1]) : 0 != O.kyokumenIdx() ? O.setKyokumen(0) : O.kyokumenDec()
                }
                  , U = function() {
                    var t = w.myTurn[a.targetSeat][O.kyokuIdx()].filter((function(t) {
                        return t > O.kyokumenIdx()
                    }
                    ));
                    K(t)
                }
                  , J = function() {
                    var t = w.myTurn[a.targetSeat][O.kyokuIdx()].filter((function(t) {
                        return t < O.kyokumenIdx()
                    }
                    ));
                    q(t)
                }
                  , X = function() {
                    var t = G[a.targetSeat][O.kyokuIdx()].filter((function(t) {
                        return t > O.kyokumenIdx()
                    }
                    ));
                    K(t)
                }
                  , Y = function() {
                    var t = G[a.targetSeat][O.kyokuIdx()].filter((function(t) {
                        return t < O.kyokumenIdx()
                    }
                    ));
                    q(t)
                }
                  , Z = function() {
                    return a.mobile ? [["< 前局", O.kyokuDec], ["< 前", O.kyokumenDec], ["次 >", O.kyokumenInc], ["次局 >", O.kyokuInc], ["< 前違", Y], ["< 前自", J], ["次自 >", U], ["次違 >", X]] : [["< 前局", O.kyokuDec], ["次局 >", O.kyokuInc], ["< 前自", J], ["次自 >", U], ["< 前違", Y], ["次違 >", X], ["< 前", O.kyokumenDec], ["次 >", O.kyokumenInc]]
                }
                  , $ = function(t) {
                    a.targetSeat = t,
                    A()
                }
                  , Q = function(t) {
                    t.deltaY < 0 ? O.kyokumenDec() : O.kyokumenInc()
                }
                  , tt = function() {
                    G = w.diffList(x.getThreshold(), x.getPlayerType())
                };
                Object(i["x"])((function() {
                    return [x.getPlayerType(), x.getThreshold()]
                }
                ), (function() {
                    tt()
                }
                ));
                var at = new URL(window.location.href);
                history.replaceState("", "", at.pathname);
                var it = at.searchParams
                  , nt = Number(it.get("tw"))
                  , rt = Number(it.get("ts"))
                  , st = Number(it.get("tv"))
                  , ot = it.get("rank");
                if (null != ot) {
                    var dt = Number(ot);
                    if (0 <= dt && dt <= 3) {
                        var pt = pred[pred.length - 1][0].info.msg.end_msgs;
                        $(pt[pt.length - 1].rank2seat[dt])
                    }
                } else
                    $(0 <= nt && nt <= 3 ? nt : 0);
                rt && rt > 0 && rt < pred.length && O.setKyoku(rt),
                st && st > 0 && st < pred[O.kyokuIdx()].length && O.setKyokumen(st);
                var ft = function() {
                    localStorage.setItem("settings", JSON.stringify({
                        hide: a.haiHide,
                        displayType: x.getDisplayNameType(),
                        dark: a.darkColor,
                        showPred: x.getShowPred(),
                        showDiffBar: x.getShowDiffBar(),
                        showTenpaiPred: x.getShowTenpaiPred(),
                        showDangerPred: x.getShowDangerPred(),
                        showRankPred: x.getShowRankPred(),
                        showEndPred: x.getShowEndPred()
                    }))
                };
                Object(i["x"])((function() {
                    var t = x.monitoringList();
                    return t.push(a.haiHide),
                    t
                }
                ), ft);
                var mt = function() {
                    a.darkColor ? document.body.style.background = "radial-gradient(circle at 40% 20%,#4a4a4a 10%,#292929 50%,#3e3e3e 150%)" : document.body.style.background = "radial-gradient(circle at 40% 20%, rgb(0, 111, 176) 10%, #04326f 50%, #02234d 150%)"
                };
                Object(i["x"])((function() {
                    return [x.getDisplayNameType()]
                }
                ), (function() {
                    A(),
                    ft()
                }
                )),
                Object(i["x"])((function() {
                    return [a.darkColor]
                }
                ), (function() {
                    mt(),
                    ft()
                }
                ));
                var gt = function() {
                    var t = localStorage.getItem("settings");
                    if (t) {
                        var e, i = JSON.parse(t);
                        if (a.haiHide = i.hide,
                        a.darkColor = i.dark,
                        "number" == typeof i.displayType)
                            x.setDisplayNameType(i.displayType),
                            null === (e = h.value) || void 0 === e || e.select(i.displayType);
                        "boolean" == typeof i.showPred && x.setShowPred(i.showPred),
                        "boolean" == typeof i.showDiffBar && x.setShowDiffBar(i.showDiffBar),
                        "boolean" == typeof i.showTenpaiPred && x.setShowTenpaiPred(i.showTenpaiPred),
                        "boolean" == typeof i.showDangerPred && x.setShowDangerPred(i.showDangerPred),
                        "boolean" == typeof i.showRankPred && x.setShowRankPred(i.showRankPred),
                        "boolean" == typeof i.showEndPred && x.setShowEndPred(i.showEndPred),
                        A()
                    }
                    mt()
                }
                  , yt = function(t) {
                    t.target.blur()
                }
                  , bt = !1
                  , kt = /^20[0-9]{8}gm-[a-f0-9]{4}-[0-9]{4}-[a-zA-Z0-9]{8}$/g;
                try {
                    bt = !(haihuId && "none" != haihuId && haihuId.match(kt))
                } catch (Ot) {
                    bt = !0,
                    console.log("no haihuId")
                }
                var vt = function(t) {
                    var e, i = O.kyokuIdx(), n = et(a.targetSeat, playerInfo.name, x.getDisplayNameType());
                    e = t ? bt ? ye(pred[i], j[i], p(), n, !0) : "https://tenhou.net/6/?log=".concat(haihuId, "&tw=").concat(a.targetSeat, "&ts=").concat(i) : ye(pred[i], O.kyokumenIdx(), p(), n, !1),
                    window.open(e, "_blank")
                }
                  , wt = function() {
                    var t = O.kyokuIdx()
                      , e = pred[t][0].info.msg
                      , i = {
                        E: 0,
                        S: 1,
                        W: 2
                    }[e.bakaze]
                      , n = 4 * i + e.kyoku - 1
                      , r = "/naga_report/kyoku_bop/?kyoku_info=".concat(a.targetSeat, ",").concat(n, ",").concat(e.honba, ",").concat(e.kyotaku, ",").concat(e.scores[0] / 100, ",").concat(e.scores[1] / 100, ",").concat(e.scores[2] / 100, ",").concat(e.scores[3] / 100);
                    window.open(r, "_blank")
                }
                  , _t = Object(i["n"])({
                    "is-active": !1
                })
                  , xt = function(t) {
                    t.stopPropagation(),
                    _t["is-active"] = !_t["is-active"]
                }
                  , jt = function() {
                    _t["is-active"] = !1
                }
                  , St = function() {
                    if (navigator.clipboard) {
                        var t = location.href + "?tw=".concat(a.targetSeat, "&ts=").concat(O.kyokuIdx(), "&tv=").concat(O.kyokumenIdx());
                        navigator.clipboard.writeText(t).then((function() {
                            return console.log("クリップボードにコピーしました")
                        }
                        ), (function() {
                            return console.log("クリップボードにコピーできませんでした")
                        }
                        ))
                    }
                };
                return Object(i["i"])((function() {
                    var e, i;
                    window.addEventListener("resize", M),
                    M(),
                    k = playerInfo.name,
                    a.names = playerInfo.name,
                    a.dan = playerInfo.dan,
                    a.rate = playerInfo.rate,
                    Rt(pred, v),
                    a.pred = pred,
                    w.diffBuild(pred),
                    tt(),
                    null === (e = o.value) || void 0 === e || e.setCommentObj(a.pred),
                    null === (i = r.value) || void 0 === i || i.createRender(a.targetSeat, v, a.names, a.dan, a.rate.map((function(t) {
                        return Math.floor(t)
                    }
                    )), a.pred, playerInfo.umaoka, w.result),
                    gt(),
                    l.value && l.value.updateState();
                    var n = document.createElement("script");
                    n.src = "https://platform.twitter.com/widgets.js",
                    document.body.appendChild(n),
                    w.diffShow(t),
                    document.addEventListener("click", jt)
                }
                )),
                {
                    state: a,
                    section: n,
                    footerH: _,
                    headline: r,
                    setTargetSeat: $,
                    onWheel: Q,
                    comment: o,
                    buttonStyle: C,
                    tagStyle: N,
                    selectStyle: B,
                    radioStyle: V,
                    labelStyle: z,
                    order: Z,
                    containerStyle: I,
                    sectionStyle: L,
                    kyokumenImageDiv: s,
                    containerDiv: c,
                    uiDivStyle: T,
                    twitterUrl: W,
                    kyokumenDivStyle: F,
                    blurEl: yt,
                    version: y,
                    displayNameSelectorElm: h,
                    predShowPatternSelectorVueElm: l,
                    graphDivStyle: D,
                    versionStyle: R,
                    newDiff: w,
                    dropdownItemStyle: E,
                    kyokumenEdit: u,
                    openDropdownMenu: xt,
                    closeKyokumenEditDropdownMenu: jt,
                    kyokumenEditClass: _t,
                    openKyokumenEdit: vt,
                    copyURL: St,
                    openKyokuBOP: wt
                }
            }
        });
        a("2f50");
        be.render = C,
        be.__scopeId = "data-v-a485c774";
        var ke = be
          , ve = localStorage.getItem("settings");
        ve && JSON.parse(ve).dark && (document.body.style.background = "radial-gradient(circle at 40% 20%,#4a4a4a 10%,#292929 50%,#3e3e3e 150%)");
        var we = Object(i["g"])({
            name: "App",
            components: {
                Main: ke
            }
        });
        a("669f");
        we.render = n;
        var _e = we
          , xe = a("27d6")
          , je = a.n(xe);
        je.a.load({
            custom: {
                families: ["my_font", "kyokumen"]
            },
            active: function() {
                Promise.all(Y).then((function(t) {
                    Object(i["c"])(_e).mount("#app")
                }
                ))
            }
        })
    },
    fd64: function(t, e, a) {
        "use strict";
        a("693a")
    }
});
//# sourceMappingURL=index.js.map
