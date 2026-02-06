!function() {
    "use strict";
    var e = {
        669: function(e) {
            e.exports = jQuery
        }
    }
      , t = {};
    function n(o) {
        var i = t[o];
        if (void 0 !== i)
            return i.exports;
        var r = t[o] = {
            exports: {}
        };
        return e[o](r, r.exports, n),
        r.exports
    }
    !function() {
        var e = void 0
          , t = function(t, n, o) {
            var i;
            return function() {
                for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++)
                    a[s] = arguments[s];
                var c = t.bind.apply(t, [e].concat(a));
                i || (o && !i && c(),
                i = setTimeout((function() {
                    o || c(),
                    i = null
                }
                ), n))
            }
        };
        function o(e) {
            var t = document.querySelector(e);
            t && t.focus()
        }
        var i = function e(t, n) {
            for (var o in n)
                n[o] && n[o].constructor && n[o].constructor === Object ? (t[o] = t[o] || {},
                e(t[o], n[o])) : t[o] = n[o];
            return t
        }
          , r = function(e, t) {
            var n = {};
            for (var o in e)
                n[o] = t[o] || e[o];
            return n
        }
          , a = function(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }
          , s = function(e) {
            if (null == e)
                return !1;
            if ("boolean" == typeof e)
                return !0 === e;
            if ("string" == typeof e) {
                if ("" == e)
                    return !1;
                if ("true" == (e = e.replace(/^\s+|\s+$/g, "")).toLowerCase() || "yes" == e.toLowerCase())
                    return !0;
                e = (e = e.replace(/,/g, ".")).replace(/^\s*\-\s*/g, "-")
            }
            return !isNaN(e) && 0 != parseFloat(e)
        }
          , c = {
            duration: 250,
            easing: function(e, t, n, o) {
                return -n * (e /= o) * (e - 2) + t
            },
            display: "block"
        }
          , l = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            a(t) && (t = {
                duration: t
            });
            var n = r(c, t)
              , o = n.display;
            n.direction = 2,
            n.to = 0,
            n.startingHeight = e.scrollHeight,
            n.distanceHeight = -n.startingHeight,
            f(e, o),
            window.requestAnimationFrame((function(t) {
                return d(e, n, t)
            }
            ))
        }
          , u = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            a(t) && (t = {
                duration: t
            }),
            e.style.height = "0px";
            var n = r(c, t)
              , o = n.display;
            f(e, o),
            n.direction = 1,
            n.to = e.scrollHeight,
            n.startingHeight = 0,
            n.distanceHeight = n.to,
            window.requestAnimationFrame((function(t) {
                return d(e, n, t)
            }
            ))
        }
          , d = function e(t, n, o) {
            n.startTime || (n.startTime = o);
            var i = o - n.startTime
              , r = i < n.duration
              , a = n.easing(i, n.startingHeight, n.distanceHeight, n.duration);
            r ? (t.style.height = "".concat(a.toFixed(2), "px"),
            window.requestAnimationFrame((function(o) {
                return e(t, n, o)
            }
            ))) : (2 === n.direction && (t.style.display = "none"),
            1 === n.direction && (t.style.display = "flex" === n.display ? "flex" : "block"),
            p(t))
        }
          , f = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "block";
            e.style.display = "flex" === t ? "flex" : "block",
            e.style.overflow = "hidden",
            e.style.marginTop = "0",
            e.style.marginBottom = "0",
            e.style.paddingTop = "0",
            e.style.paddingBottom = "0"
        }
          , p = function(e) {
            e.style.height = null,
            e.style.overflow = null,
            e.style.marginTop = null,
            e.style.marginBottom = null,
            e.style.paddingTop = null,
            e.style.paddingBottom = null
        }
          , v = function(e, t) {
            if (!e)
                return t;
            var n = e.getAttribute("data-slider-autoplay")
              , o = e.getAttribute("data-slider-autoplay-delay");
            return "true" === n && (t.autoplay = {},
            t.autoplay.disableOnInteraction = !1,
            t.autoplay.delay = o ? parseInt(o) : 3e3),
            t
        }
          , m = function(e, t) {
            return e ? (t.preloadImages = !1,
            t.lazy = {},
            t.lazy.loadPrevNext = !0,
            t.loadOnTransitionStart = !0,
            t) : t
        }
          , y = function() {
            return !("undefined" == typeof window || !("ontouchstart"in window || window.DocumentTouch && "undefined" != typeof document && document instanceof window.DocumentTouch)) || !("undefined" == typeof navigator || !navigator.maxTouchPoints && !navigator.msMaxTouchPoints)
        }
          , b = function() {
            var e = y()
              , t = document.getElementsByTagName("html")[0];
            e ? (t.classList.remove("no-touch-device"),
            t.classList.add("touch-device")) : (t.classList.remove("touch-device"),
            t.classList.add("no-touch-device"))
        };
        function h(e) {
            return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            h(e)
        }
        function g(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, w(o.key), o)
            }
        }
        function w(e) {
            var t = function(e, t) {
                if ("object" != h(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != h(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == h(t) ? t : t + ""
        }
        var S = function() {
            return e = function e(t, n) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.defaults = {
                    element: ".l-nav",
                    item: ".c-nav__item",
                    active: "is-active",
                    trigger: "click"
                },
                this.isTouch = !1,
                this.isTouchDevice(),
                t.initialized ? (this.swiper = t,
                this.config = Object.assign({}, this.defaults, n || {}),
                this.selector = "".concat(this.config.element, " ").concat(this.config.item),
                this.items = document.querySelectorAll(this.selector),
                this.tabClicked = this.tabClick.bind(this),
                this.init()) : console.log("swiper not initialized")
            }
            ,
            (t = [{
                key: "init",
                value: function() {
                    this.swiperSlideChange(),
                    this.bindTabs()
                }
            }, {
                key: "bindTabs",
                value: function() {
                    var e = this;
                    e.items.forEach((function(t) {
                        t.addEventListener(e.config.trigger, e.tabClicked, {
                            passive: !0
                        }),
                        e.isTouch && "mouseover" === e.config.trigger && t.addEventListener("touchstart", e.tabClicked, {
                            passive: !0
                        })
                    }
                    ))
                }
            }, {
                key: "unbindTabs",
                value: function() {
                    var e = this;
                    e.items.forEach((function(t) {
                        t.removeEventListener(e.config.trigger, e.tabClicked),
                        e.isTouch && "mouseover" === e.config.trigger && t.removeEventListener("touchstart", e.tabClicked)
                    }
                    ))
                }
            }, {
                key: "tabClick",
                value: function(e) {
                    var t, n = this, o = e.currentTarget;
                    n.items.forEach((function(e, i) {
                        o === e && (t = i),
                        e.classList.remove(n.config.active)
                    }
                    )),
                    o.classList.add(n.config.active),
                    n.swiper.slideTo(t)
                }
            }, {
                key: "tabChange",
                value: function(e) {
                    var t = this
                      , n = t.items;
                    n.forEach((function(e) {
                        e.classList.remove(t.config.active)
                    }
                    )),
                    n.forEach((function(n, o) {
                        e === o && n.classList.add(t.config.active)
                    }
                    ))
                }
            }, {
                key: "isTouchDevice",
                value: function() {
                    y() && (this.isTouch = !0)
                }
            }, {
                key: "swiperSlideChange",
                value: function() {
                    var e = this;
                    e.swiper.on("slideChange", (function() {
                        var t = e.swiper.activeIndex;
                        e.tabChange(t)
                    }
                    ))
                }
            }]) && g(e.prototype, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, t
        }()
          , E = function(e, t, n, o) {
            var i, r, a, s;
            if (!e)
                return t;
            if (e.getAttribute("data-slider-navigation")) {
                t.navigation = {},
                n && void 0 !== o && (i = "".concat(n, "-next-").concat(o),
                r = "".concat(n, "-prev-").concat(o));
                var c = e.closest(".m-slider");
                c && (a = c.querySelector(".swiper-button-next"),
                s = c.querySelector(".swiper-button-prev")),
                a && i && (a.setAttribute("id", i),
                t.navigation.nextEl = "#".concat(i)),
                s && r && (s.setAttribute("id", r),
                t.navigation.prevEl = "#".concat(r))
            } else
                t.navigation = !1;
            return t
        }
          , L = function(e, t) {
            return e ? ("true" === e.getAttribute("data-slider-loop") && (t.loop = !0,
            t.centeredSlides = !0),
            t) : t
        };
        function k(e) {
            return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            k(e)
        }
        function j(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, _(o.key), o)
            }
        }
        function _(e) {
            var t = function(e, t) {
                if ("object" != k(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != k(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == k(t) ? t : t + ""
        }
        var A = function() {
            return e = function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.optionsDesktop = {},
                this.optionsMobile = {
                    slideClass: "js-dsbls-nav-item",
                    pagination: {
                        el: ".l-slider-nav__pagination",
                        clickable: !0
                    }
                },
                this.optionsNav = {
                    item: ".js-dsbls-nav-item",
                    active: "is-active",
                    trigger: "mouseover"
                },
                this.sliderNo = t.replace("js-slider-dsbls-", ""),
                this.sliderName = t,
                this.sliderMobileName = t.replace("js-slider-dsbls-", "js-slider-dsbls-m-"),
                this.sliderSel = "#" + this.sliderName,
                this.sliderMobileSel = "#" + this.sliderMobileName,
                this.optionsNav.element = this.sliderMobileSel,
                this.sliderElem = document.querySelector(this.sliderSel),
                this.sliderMobileElem = document.querySelector(this.sliderMobileSel),
                this.showMobile = s(this.sliderElem.getAttribute("data-slider-is-mobile")),
                this.isMobile = !1,
                this.isDesktop = !1,
                this.desktopInstance,
                this.mobileInstance,
                this.desktopTabs,
                this.init()
            }
            ,
            (n = [{
                key: "init",
                value: function() {
                    var e = this;
                    window.innerWidth < 1025 ? e.isMobile = !0 : e.isDesktop = !0,
                    e.parseOptions(),
                    e.isMobile && e.showMobile && e.createMobile(),
                    e.isDesktop && e.createDesktop(),
                    window.addEventListener("resize", (function() {
                        e.throttleResize()
                    }
                    )),
                    e.throttleResize = t((function() {
                        e.resizeSlider()
                    }
                    ), 350)
                }
            }, {
                key: "parseOptions",
                value: function() {
                    var e = this;
                    if (e.isMobile && e.showMobile) {
                        var t = e.sliderMobileName;
                        e.optionsMobile = L(e.sliderMobileElem, e.optionsMobile),
                        e.optionsMobile = v(e.sliderMobileElem, e.optionsMobile),
                        e.optionsMobile = m(e.sliderMobileElem, e.optionsMobile),
                        e.optionsMobile = E(e.sliderMobileElem, e.optionsMobile, t, e.sliderNo)
                    }
                    if (e.isDesktop) {
                        var n = e.sliderName;
                        e.optionsDesktop = L(e.sliderElem, e.optionsDesktop),
                        e.optionsDesktop = v(e.sliderElem, e.optionsDesktop),
                        e.optionsDesktop = m(e.sliderElem, e.optionsDesktop),
                        e.optionsDesktop = function(e, t) {
                            if (!e)
                                return t;
                            var n = e.getAttribute("data-slider-effect-transition");
                            switch (t.effect = {},
                            n) {
                            case "fade":
                                t.effect = "fade",
                                t.fadeEffect = {},
                                t.fadeEffect.crossFade = !0;
                                break;
                            case "cube":
                                t.effect = "cube";
                                break;
                            case "coverflow":
                                t.effect = "coverflow";
                                break;
                            case "cards":
                                t.effect = "cards";
                                break;
                            case "flip":
                                t.effect = "flip"
                            }
                            return t
                        }(e.sliderElem, e.optionsDesktop),
                        e.optionsDesktop = E(e.sliderElem, e.optionsDesktop, n, e.sliderNo)
                    }
                }
            }, {
                key: "createDesktop",
                value: function() {
                    var e = this;
                    e.desktopInstance = new Swiper(e.sliderSel,e.optionsDesktop),
                    e.desktopInstance.initialized && (e.desktopTabs = new S(e.desktopInstance,e.optionsNav))
                }
            }, {
                key: "createMobile",
                value: function() {
                    var e = this;
                    e.mobileInstance = new Swiper(e.sliderMobileSel,e.optionsMobile)
                }
            }, {
                key: "resizeSlider",
                value: function() {
                    var e = this;
                    window.innerWidth < 1025 ? e.isMobile || (void 0 !== e.desktopInstance && (e.desktopTabs.unbindTabs(),
                    e.desktopInstance.destroy(),
                    e.desktopInstance = void 0),
                    e.showMobile && e.createMobile(),
                    e.isDesktop = !1,
                    e.isMobile = !0) : e.isDesktop || (void 0 !== e.mobileInstance && (e.mobileInstance.destroy(),
                    e.mobileInstance = void 0),
                    e.createDesktop(),
                    e.isMobile = !1,
                    e.isDesktop = !0)
                }
            }]) && j(e.prototype, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, n
        }()
          , x = document.querySelectorAll(".js-slider-dsbls")
          , T = document.querySelectorAll(".js-slider-dsbls-m")
          , q = function(e, t) {
            if (!e)
                return t;
            var n = parseInt(e.getAttribute("data-slider-columns"))
              , o = parseInt(e.getAttribute("data-slider-columns-gap"));
            return n ? (t.slidesPerView = n,
            t.breakpoints = {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                576: {
                    slidesPerView: n > 3 ? 2 : 1,
                    spaceBetween: o > 20 ? 15 : 10
                },
                1024: {
                    slidesPerView: n,
                    spaceBetween: o > 30 ? 25 : 20
                },
                1440: {
                    slidesPerView: n,
                    spaceBetween: o || 20
                }
            }) : t.breakpoints = {
                320: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: o > 20 ? 15 : 10
                },
                1024: {
                    slidesPerView: "auto",
                    spaceBetween: o > 30 ? 25 : 20
                }
            },
            t
        }
          , C = "js-slider-simple"
          , P = document.querySelectorAll(".js-slider-simple")
          , O = "js-slider-advanced"
          , I = document.querySelectorAll(".js-slider-advanced")
          , D = n(669)
          , M = n(669)
          , N = function(e) {
            var t = new Date
              , n = setInterval((function() {
                var o = (new Date - t) / e.duration;
                o > 1 && (o = 1),
                e.progress = o;
                var i = e.delta(o);
                e.step(i),
                1 == o && (clearInterval(n),
                "function" == typeof e.complete && e.complete())
            }
            ), e.delay || 10)
        }
          , B = function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        };
        Math.easeInOutCubic = function(e, t, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
        }
        ;
        var V = function(e) {
            var t = void 0 !== e.element ? e.element : window
              , n = e.to
              , o = void 0 !== e.duration ? e.duration : 250
              , i = void 0 !== e.callback ? e.callback : null
              , r = void 0 !== e.easing ? e.easing : Math.easeInOutCubic
              , a = t !== window ? t.scrollTop : (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
              , s = n - a
              , c = 0;
            !function e() {
                c += 16;
                var l = o ? r(c, a, s, o) : n;
                t.scrollTo(0, l),
                c < o ? setTimeout(e, 16) : i && i()
            }()
        }
          , H = function(e, t, n, o) {
            return n * (e /= o) * e + t
        }
          , F = function(e, t, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
        };
        function z(e) {
            return z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            z(e)
        }
        function R(e) {
            return function(e) {
                if (Array.isArray(e))
                    return G(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return G(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? G(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function G(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function W(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Y(o.key), o)
            }
        }
        function Y(e) {
            var t = function(e, t) {
                if ("object" != z(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != z(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == z(t) ? t : t + ""
        }
        var $ = function() {
            return e = function e(t, n) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.wrapper = ".js-acc-wrapper",
                this.defaults = {
                    selectors: {
                        item: ".js-acc-item",
                        trigger: ".js-acc-button",
                        content: ".js-acc-content"
                    },
                    gallery: {
                        container: ".js-acc-gallery",
                        item: ".js-acc-media"
                    },
                    classes: {
                        active: "is-active",
                        focus: "focus",
                        display: "block"
                    },
                    animation: {
                        content: !0,
                        gallery: !1
                    },
                    attr: {
                        close: "data-close",
                        open: "data-expand",
                        gallery: "data-gallery",
                        startClosed: "data-start-closed",
                        animationContent: "data-animation",
                        animationGallery: "data-gallery-animation",
                        display: "data-acc-display",
                        scrollToView: "data-scroll-to-view"
                    },
                    opt: {
                        close: !1,
                        expand: !1,
                        hasGallery: !1,
                        startClosed: !1,
                        scrollToView: !1
                    },
                    aria: {
                        button: "header",
                        content: "content"
                    }
                },
                this.config = i(this.defaults, n),
                void 0 !== t && (this.wrapper = t),
                this.getAriaName(),
                this.selector = document.querySelector(this.wrapper),
                this.eventsListeners = {},
                this.parseOptions(),
                this.trigger = this.selector.querySelectorAll(this.config.selectors.trigger),
                this.items = this.selector.querySelectorAll(this.config.selectors.item),
                this.config.opt.hasGallery && (this.galleryItems = this.selector.querySelectorAll(this.config.gallery.item)),
                this.handlers = [],
                this.previousIndex = 0,
                this.currentIndex = 0,
                this.init()
            }
            ,
            t = [{
                key: "init",
                value: function() {
                    this.addAria(),
                    this.prepareForAnimation(),
                    this.accordionBindEvents()
                }
            }, {
                key: "on",
                value: function(e, t) {
                    var n = this;
                    "function" == typeof t && e.split(" ").forEach((function(e, o) {
                        n.eventsListeners[e] || (n.eventsListeners[e] = []),
                        n.eventsListeners[e].push(t)
                    }
                    ))
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var n = this;
                    n.eventsListeners && e.split(" ").forEach((function(e) {
                        void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((function(o, i) {
                            o === t && n.eventsListeners[e].splice(i, 1)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "emit",
                value: function() {
                    var e, t, n, o = this;
                    if (!o.eventsListeners)
                        return o;
                    for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                        r[a] = arguments[a];
                    "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0],
                    t = r.slice(1, r.length),
                    n = o) : (e = r[0].events,
                    t = r[0].data,
                    n = r[0].context || o),
                    t.unshift(n),
                    (Array.isArray(e) ? e : e.split(" ")).forEach((function(e) {
                        o.eventsListeners && o.eventsListeners[e] && o.eventsListeners[e].forEach((function(e) {
                            e.apply(n, t)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "accordionBindEvents",
                value: function() {
                    var e = this
                      , t = e.trigger;
                    e.addListenerFocus = e.addListenerFocus.bind(e),
                    e.addListenerBlur = e.addListenerBlur.bind(e),
                    e.addKeyListener = e.addKeyListener.bind(e),
                    e.on = e.on.bind(e),
                    e.off = e.off.bind(e),
                    e.emit = e.emit.bind(e),
                    t.forEach((function(t, n) {
                        var o = e.accordionNavClick.bind(e, n);
                        e.handlers.push(o),
                        t.addEventListener("click", o, {
                            passive: !0
                        }),
                        t.addEventListener("focus", e.addListenerFocus, {
                            passive: !0
                        }),
                        t.addEventListener("blur", e.addListenerBlur, {
                            passive: !0
                        })
                    }
                    )),
                    e.selector.addEventListener("keydown", e.addKeyListener, {
                        passive: !0
                    })
                }
            }, {
                key: "accordionUnbindEvents",
                value: function() {
                    var e = this;
                    e.trigger.forEach((function(t, n) {
                        var o = t.closest(e.config.selectors.item).querySelector(e.config.selectors.content);
                        e.config.aria.name && ("".concat(e.config.aria.name, "-").concat(e.config.aria.content, "-").concat(n),
                        "".concat(e.config.aria.name, "-").concat(e.config.aria.button, "-").concat(n)),
                        t.removeAttribute("aria-expanded", ""),
                        o.removeAttribute("aria-hidden", ""),
                        e.config.aria.name && (t.removeAttribute("aria-controls", ""),
                        t.removeAttribute("id", ""),
                        o.removeAttribute("id", ""),
                        o.removeAttribute("aria-labelledby", "")),
                        o.removeAttribute("role", ""),
                        t.removeEventListener("click", e.handlers[n]),
                        t.removeEventListener("focus", e.addListenerFocus),
                        t.removeEventListener("blur", e.addListenerBlur)
                    }
                    )),
                    e.selector.removeEventListener("keydown", e.addKeyListener),
                    e.removeStyles()
                }
            }, {
                key: "accordionNavClick",
                value: function(e, t) {
                    var n = t.currentTarget;
                    this.accordionContentchange(e, n, t)
                }
            }, {
                key: "accordionContentchange",
                value: function(e, t, n) {
                    var o = this
                      , i = t
                      , r = o.items
                      , a = i.closest(o.config.selectors.item)
                      , s = a.querySelector(o.config.selectors.content)
                      , c = "true" === i.getAttribute("aria-expanded") || !1;
                    a.classList.contains(o.config.classes.active) ? o.config.opt.close && (o.config.animation.content && l(s, {
                        display: o.config.classes.display
                    }),
                    a.classList.remove(o.config.classes.active),
                    i.setAttribute("aria-expanded", !c),
                    s.setAttribute("aria-hidden", c)) : (o.config.opt.expand ? (o.config.animation.content && u(s, {
                        display: o.config.classes.display
                    }),
                    a.classList.add(o.config.classes.active),
                    i.setAttribute("aria-expanded", !c),
                    s.setAttribute("aria-hidden", c)) : (r.forEach((function(e) {
                        var t = e.querySelector(o.config.selectors.content)
                          , n = e.querySelector(o.config.selectors.trigger);
                        o.config.animation.content && l(t, {
                            display: o.config.classes.display
                        }),
                        e.classList.remove(o.config.classes.active),
                        n.setAttribute("aria-expanded", c),
                        t.setAttribute("aria-hidden", !c)
                    }
                    )),
                    o.config.animation.content && u(s, {
                        display: o.config.classes.display
                    }),
                    a.classList.add(o.config.classes.active),
                    i.setAttribute("aria-expanded", !c),
                    s.setAttribute("aria-hidden", c)),
                    o.config.opt.hasGallery && o.accordionChangeGallery(e),
                    o.config.opt.scrollToView && o.currentIndex < e && o.scrollToAccordion(e)),
                    this.previousIndex = this.currentIndex,
                    this.currentIndex = e,
                    o.emit("accordionChange", n)
                }
            }, {
                key: "nextAccordion",
                value: function() {
                    var e = this
                      , t = e.currentIndex;
                    t === e.items.length - 1 ? t = 0 : t += 1;
                    var n = e.items[t];
                    e.accordionContentchange(t, n, null)
                }
            }, {
                key: "prevAccordion",
                value: function() {
                    var e = this
                      , t = e.currentIndex
                      , n = e.items.length;
                    0 === t ? t = n - 1 : t -= 1;
                    var o = e.items[t];
                    e.accordionContentchange(t, o, null)
                }
            }, {
                key: "accordionChangeGallery",
                value: function(e) {
                    var t = this
                      , n = R(t.galleryItems);
                    n.forEach((function(o) {
                        t.config.animation.gallery ? function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            void 0 === t.duration && (t.duration = 100),
                            N({
                                duration: t.duration,
                                delta: function(e) {
                                    return e = this.progress,
                                    B(e)
                                },
                                complete: t.complete,
                                step: function(t) {
                                    e.style.opacity = 1 - t
                                }
                            })
                        }(o, {
                            complete: function() {
                                o.classList.remove(t.config.classes.active);
                                var i = n[e];
                                !function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    void 0 === t.duration && (t.duration = 100),
                                    N({
                                        duration: t.duration,
                                        delta: function(e) {
                                            return e = this.progress,
                                            B(e)
                                        },
                                        complete: t.complete,
                                        step: function(t) {
                                            e.style.opacity = 0 + t
                                        }
                                    })
                                }(i, {
                                    duration: 50
                                }),
                                i.classList.add(t.config.classes.active)
                            }
                        }) : o.classList.remove(t.config.classes.active)
                    }
                    )),
                    t.config.animation.gallery || n[e].classList.add(t.config.classes.active)
                }
            }, {
                key: "prepareForAnimation",
                value: function() {
                    var e = this
                      , t = e.items
                      , n = !1;
                    if (e.config.animation.content && (t.forEach((function(t, o) {
                        var i = t.querySelector(e.config.selectors.content);
                        t.classList.contains(e.config.classes.active) ? (e.config.opt.startClosed || (i.style.display = e.config.classes.display),
                        n = !0) : i.style.display = "none"
                    }
                    )),
                    !n && !e.config.opt.startClosed)) {
                        var o = t[0].querySelector(e.config.selectors.content);
                        t[0].classList.add(e.config.classes.active),
                        o.style.display = e.config.classes.display
                    }
                }
            }, {
                key: "removeStyles",
                value: function() {
                    var e = this
                      , t = e.items;
                    e.config.animation.content && t.forEach((function(t, n) {
                        t.querySelector(e.config.selectors.content).style.display = ""
                    }
                    ))
                }
            }, {
                key: "parseOptions",
                value: function() {
                    var e = this
                      , t = s(e.selector.getAttribute(e.config.attr.close)) || e.config.opt.close;
                    t && (e.config.opt.close = !!t),
                    s(e.selector.getAttribute(e.config.attr.open)) || e.config.opt.expand ? (e.config.opt.expand = !0,
                    e.config.opt.close = !0) : e.config.opt.expand = !1,
                    (s(e.selector.getAttribute(e.config.attr.startClosed)) || e.config.opt.startClosed) && (e.config.opt.startClosed = !0,
                    e.config.opt.close = !0),
                    (s(e.selector.getAttribute(e.config.attr.gallery)) || e.config.opt.hasGallery) && (e.config.opt.hasGallery = !0,
                    e.config.opt.expand = !1,
                    e.config.opt.close = !1,
                    e.config.opt.startClosed = !1);
                    var n = e.selector.getAttribute(e.config.attr.animationContent);
                    n && (e.config.animation.content = "js" === n);
                    var o = e.selector.getAttribute(e.config.attr.animationGallery);
                    o && (e.config.animation.gallery = "js" === o);
                    var i = e.selector.getAttribute(e.config.attr.display) || e.config.classes.display;
                    e.config.classes.display = "flex" === i ? "flex" : "block",
                    (s(e.selector.getAttribute(e.config.attr.scrollToView)) || e.config.opt.scrollToView) && (e.config.opt.scrollToView = !0,
                    e.config.opt.expand = !1),
                    e.emit("optionsParsed")
                }
            }, {
                key: "isValidId",
                value: function(e) {
                    return /^[^\s]+$/.test(e)
                }
            }, {
                key: "getAriaName",
                value: function() {
                    var e = this.wrapper.slice(1);
                    this.isValidId(e) ? this.config.aria.name = e : this.config.aria.name = !1
                }
            }, {
                key: "addAria",
                value: function() {
                    var e = this;
                    e.trigger.forEach((function(t, n) {
                        var o, i, r = t.closest(e.config.selectors.item), a = r.querySelector(e.config.selectors.content);
                        e.config.aria.name && (o = "".concat(e.config.aria.name, "-").concat(e.config.aria.content, "-").concat(n),
                        i = "".concat(e.config.aria.name, "-").concat(e.config.aria.button, "-").concat(n)),
                        r.classList.contains(e.config.classes.active) ? (t.setAttribute("aria-expanded", !0),
                        a.setAttribute("aria-hidden", !1)) : (t.setAttribute("aria-expanded", !1),
                        a.setAttribute("aria-hidden", !0)),
                        e.config.aria.name && (t.setAttribute("aria-controls", o),
                        t.setAttribute("id", i),
                        a.setAttribute("id", o),
                        a.setAttribute("aria-labelledby", i)),
                        a.setAttribute("role", "region")
                    }
                    ))
                }
            }, {
                key: "addListenerFocus",
                value: function(e) {
                    e.target.classList.add(this.config.classes.focus)
                }
            }, {
                key: "addListenerBlur",
                value: function(e) {
                    e.target.classList.remove(this.config.classes.focus)
                }
            }, {
                key: "addKeyListener",
                value: function(e) {
                    var t = e.target
                      , n = e.which.toString()
                      , o = R(this.trigger)
                      , i = this.config.selectors.trigger.slice(1)
                      , r = e.ctrlKey && n.match(/33|34/);
                    if (t.classList.contains(i))
                        if (n.match(/38|40/) || r) {
                            var a = o.indexOf(t)
                              , s = n.match(/34|40/) ? 1 : -1
                              , c = o.length;
                            o[(a + c + s) % c].focus()
                        } else if (n.match(/35|36/))
                            switch (n) {
                            case "36":
                                o[0].focus();
                                break;
                            case "35":
                                o[o.length - 1].focus()
                            }
                }
            }, {
                key: "scrollToAccordion",
                value: function(e) {
                    var t = this.trigger[0].getBoundingClientRect()
                      , n = t.height * e
                      , o = window.pageYOffset || document.documentElement.scrollTop
                      , i = t.top + o + n - 80;
                    V({
                        to: i,
                        duration: 0,
                        easing: H
                    })
                }
            }],
            t && W(e.prototype, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, t
        }()
          , U = $
          , K = document.querySelectorAll(".js-acc-wrapper");
        function X(e) {
            return X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            X(e)
        }
        function J(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Q(o.key), o)
            }
        }
        function Q(e) {
            var t = function(e, t) {
                if ("object" != X(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != X(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == X(t) ? t : t + ""
        }
        var Z = function() {
            return e = function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.eventsListeners = {},
                this.currentIndex = 0,
                this.activeNav = null,
                this.activePanel = null
            }
            ,
            t = [{
                key: "bindFunctions",
                value: function() {
                    this.tabNavClick = this.tabNavClick.bind(this)
                }
            }, {
                key: "bindTabNavEvent",
                value: function() {
                    var e = this;
                    e.items.forEach((function(t) {
                        t.addEventListener("click", e.tabNavClick, {
                            passive: !0
                        })
                    }
                    ))
                }
            }, {
                key: "unbindTabNavEvent",
                value: function() {
                    var e = this;
                    e.items.forEach((function(t) {
                        t.removeEventListener("click", e.tabNavClick)
                    }
                    ))
                }
            }, {
                key: "tabNavClick",
                value: function(e) {
                    var t = this
                      , n = e.currentTarget;
                    t.activeNav = e.currentTarget;
                    var o = n.closest(t.config.wrapper).querySelectorAll(t.config.selectors.nav)
                      , i = t.getNavTabID(n);
                    t.clearActiveClass(o, "nav"),
                    t.setActiveClass(n, "nav"),
                    t.tabPanelChange(i)
                }
            }, {
                key: "tabPanelChange",
                value: function(e) {
                    var t = this;
                    if (void 0 !== e) {
                        var n = "".concat(t.config.data, "-").concat(e)
                          , o = document.querySelector("#".concat(n));
                        t.activePanel = o;
                        var i = o.closest(t.config.wrapper)
                          , r = i ? i.querySelectorAll(t.config.selectors.panel) : [];
                        void 0 !== o && (t.currentIndex = e,
                        t.clearActiveClass(r, "panel"),
                        t.setActiveClass(o, "panel"),
                        t.emit("tabsChange"))
                    }
                }
            }, {
                key: "getNavTabID",
                value: function(e) {
                    return e.getAttribute(this.config.data)
                }
            }, {
                key: "clearActiveClass",
                value: function(e, t) {
                    var n = this;
                    e.forEach((function(e) {
                        e.classList.remove(n.config.classes.active),
                        "panel" === t && e.setAttribute("aria-hidden", !0),
                        "nav" === t && e.setAttribute("aria-selected", !1)
                    }
                    ))
                }
            }, {
                key: "setActiveClass",
                value: function(e, t) {
                    e.classList.add(this.config.classes.active),
                    "panel" === t && e.setAttribute("aria-hidden", !1),
                    "nav" === t && e.setAttribute("aria-selected", !0)
                }
            }, {
                key: "setFirstActive",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = this
                      , n = t.items[e]
                      , o = n.closest(t.config.wrapper).querySelectorAll(t.config.selectors.nav)
                      , i = t.getNavTabID(n);
                    t.clearActiveClass(o, "nav"),
                    t.setActiveClass(n, "nav"),
                    t.tabPanelChange(i)
                }
            }, {
                key: "on",
                value: function(e, t) {
                    var n = this;
                    "function" == typeof t && e.split(" ").forEach((function(e, o) {
                        n.eventsListeners[e] || (n.eventsListeners[e] = []),
                        n.eventsListeners[e].push(t)
                    }
                    ))
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var n = this;
                    n.eventsListeners && e.split(" ").forEach((function(e) {
                        void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((function(o, i) {
                            o === t && n.eventsListeners[e].splice(i, 1)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "emit",
                value: function() {
                    var e, t, n, o = this;
                    if (!o.eventsListeners)
                        return o;
                    for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                        r[a] = arguments[a];
                    "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0],
                    t = r.slice(1, r.length),
                    n = o) : (e = r[0].events,
                    t = r[0].data,
                    n = r[0].context || o),
                    t.unshift(n),
                    (Array.isArray(e) ? e : e.split(" ")).forEach((function(e) {
                        o.eventsListeners && o.eventsListeners[e] && o.eventsListeners[e].forEach((function(e) {
                            e.apply(n, t)
                        }
                        ))
                    }
                    ))
                }
            }],
            t && J(e.prototype, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, t
        }()
          , ee = Z;
        function te(e) {
            return te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            te(e)
        }
        function ne(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, oe(o.key), o)
            }
        }
        function oe(e) {
            var t = function(e, t) {
                if ("object" != te(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != te(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == te(t) ? t : t + ""
        }
        function ie(e, t, n) {
            return t = se(t),
            function(e, t) {
                if (t && ("object" === te(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(e, re() ? Reflect.construct(t, n || [], se(e).constructor) : t.apply(e, n))
        }
        function re() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (e) {}
            return (re = function() {
                return !!e
            }
            )()
        }
        function ae() {
            return ae = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                var o = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = se(e)); )
                        ;
                    return e
                }(e, t);
                if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, t);
                    return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
                }
            }
            ,
            ae.apply(this, arguments)
        }
        function se(e) {
            return se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            se(e)
        }
        function ce(e, t) {
            return ce = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            ce(e, t)
        }
        var le = function(e) {
            function t(e) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (n = ie(this, t)).defaults = {
                    wrapper: ".js-tabs-wrapper",
                    selectors: {
                        nav: ".js-tabs-nav-item",
                        panel: ".js-tabs-panel"
                    },
                    classes: {
                        active: "is-active"
                    },
                    data: "data-tab"
                },
                n.config = i(n.defaults, e),
                n.selector = "".concat(n.config.wrapper, " ").concat(n.config.selectors.nav),
                n.items = document.querySelectorAll(n.selector),
                n.init(),
                n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && ce(e, t)
            }(t, e),
            n = t,
            (o = [{
                key: "init",
                value: function() {
                    ae(se(t.prototype), "bindFunctions", this).call(this),
                    ae(se(t.prototype), "bindTabNavEvent", this).call(this)
                }
            }]) && ne(n.prototype, o),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            n;
            var n, o
        }(ee)
          , ue = le;
        function de(e) {
            return de = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            de(e)
        }
        function fe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, pe(o.key), o)
            }
        }
        function pe(e) {
            var t = function(e, t) {
                if ("object" != de(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != de(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == de(t) ? t : t + ""
        }
        var ve = function() {
            return e = function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.tabaccID = "#js-tab-acc",
                this.tabaccSelector = ".js-tabs-to-acc-wrapper",
                this.tabaccItems = document.querySelectorAll(this.tabaccSelector),
                this.tabOptions = {
                    wrapper: ".js-tabs-wrapper",
                    selectors: {
                        nav: ".js-tabs-nav-item",
                        panel: ".js-tabs-panel"
                    }
                },
                this.accordionOptions = {
                    selectors: {
                        item: ".js-tabs-panel",
                        trigger: ".js-tabs-label",
                        content: ".js-ta-content"
                    },
                    opt: {
                        close: !0,
                        expand: !0
                    },
                    classes: {
                        display: "flex"
                    },
                    animation: {
                        content: !0
                    }
                },
                this.isMobile = !1,
                this.isDesktop = !1,
                this.accordionInstance,
                this.tabInstance,
                void 0 !== t && (this.tabaccID = t),
                this.init()
            }
            ,
            (n = [{
                key: "init",
                value: function() {
                    var e = this;
                    window.innerWidth < 1025 ? this.isMobile = !0 : this.isDesktop = !0,
                    e.isMobile && e.buildAccordion(),
                    e.isDesktop && e.buildTab(),
                    window.addEventListener("resize", (function() {
                        e.throttleScroll()
                    }
                    )),
                    this.throttleScroll = t((function() {
                        e.buildTabAccordion()
                    }
                    ), 150),
                    e.buildTabAccordion()
                }
            }, {
                key: "buildTabAccordion",
                value: function() {
                    var e = this;
                    window.innerWidth < 1025 ? e.isMobile || (void 0 !== e.tabInstance && (e.tabInstance.unbindTabNavEvent(),
                    e.tabInstance = void 0),
                    e.buildAccordion(),
                    e.isDesktop = !1,
                    e.isMobile = !0) : e.isDesktop || (void 0 !== e.accordionInstance && (e.accordionInstance.accordionUnbindEvents(),
                    e.accordionInstance = void 0),
                    e.buildTab(),
                    e.isMobile = !1,
                    e.isDesktop = !0)
                }
            }, {
                key: "buildAccordion",
                value: function() {
                    this.accordionInstance = new U(this.tabaccID,this.accordionOptions)
                }
            }, {
                key: "buildTab",
                value: function() {
                    this.tabOptions.wrapper = this.tabaccID,
                    this.tabInstance = new ue(this.tabOptions),
                    this.tabInstance.setFirstActive()
                }
            }]) && fe(e.prototype, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, n
        }()
          , me = document.querySelectorAll(".js-tabs-to-acc-wrapper")
          , ye = n(669);
        function be(e) {
            return be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            be(e)
        }
        function he(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, ge(o.key), o)
            }
        }
        function ge(e) {
            var t = function(e, t) {
                if ("object" != be(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != be(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == be(t) ? t : t + ""
        }
        var we = function() {
            return e = function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.cookie_name = "hide_box_cta_widget",
                this.cookie_duration = 30,
                this.widget_selector = ".js-close-box-cta-widget",
                this.box_selector = ".box-cta.-site-wide",
                this.init()
            }
            ,
            t = [{
                key: "init",
                value: function() {
                    var e, t = this;
                    this.get_cookie(this.cookie_name) ? this.hide_box() : this.show_box(),
                    null === (e = document.querySelector(this.widget_selector)) || void 0 === e || e.addEventListener("click", (function(e) {
                        e.preventDefault(),
                        t.set_cookie(t.cookie_name, "true", t.cookie_duration),
                        t.hide_box()
                    }
                    ))
                }
            }, {
                key: "hide_box",
                value: function() {
                    var e = document.querySelector(this.box_selector);
                    e && e.classList.add("hide-box-cta-widget")
                }
            }, {
                key: "show_box",
                value: function() {
                    var e = document.querySelector(this.box_selector);
                    e && e.classList.remove("hide-box-cta-widget")
                }
            }, {
                key: "set_cookie",
                value: function(e, t, n) {
                    var o = new Date;
                    o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3),
                    document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(o.toUTCString(), "; path=/")
                }
            }, {
                key: "get_cookie",
                value: function(e) {
                    var t = "; ".concat(document.cookie).split("; ".concat(e, "="));
                    return 2 === t.length ? t.pop().split(";").shift() : null
                }
            }],
            t && he(e.prototype, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, t
        }()
          , Se = we;
        function Ee(e) {
            return Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Ee(e)
        }
        function Le(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, je(o.key), o)
            }
        }
        function ke(e, t, n) {
            return (t = je(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function je(e) {
            var t = function(e, t) {
                if ("object" != Ee(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != Ee(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == Ee(t) ? t : t + ""
        }
        var _e = function() {
            return e = function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            ,
            t = [{
                key: "init",
                value: function() {
                    var e = this;
                    document.querySelectorAll(".c-popup").forEach((function(t) {
                        t.id && (e.popups.set(t.id, t),
                        e.bindPopupEvents(t))
                    }
                    )),
                    this.bindGlobalTriggers()
                }
            }, {
                key: "open",
                value: function(e) {
                    var t = this.popups.get(e);
                    t && !t.open && (this.lockScroll(),
                    t.showModal(),
                    this.activePopup = t,
                    this.handleVideoOpen(t))
                }
            }, {
                key: "close",
                value: function(e) {
                    var t = e ? this.popups.get(e) : this.activePopup;
                    t && t.open && (this.handleVideoClose(t),
                    t.close(),
                    this.unlockScroll(),
                    this.activePopup = null)
                }
            }, {
                key: "bindPopupEvents",
                value: function(e) {
                    var t = this
                      , n = e.querySelector(".c-popup__close");
                    null == n || n.addEventListener("click", (function() {
                        t.close(e.id)
                    }
                    )),
                    e.addEventListener("click", (function(n) {
                        var o = e.getBoundingClientRect();
                        (n.clientX < o.left || n.clientX > o.right || n.clientY < o.top || n.clientY > o.bottom) && t.close(e.id)
                    }
                    )),
                    e.addEventListener("close", (function() {
                        t.handleVideoClose(e),
                        t.unlockScroll(),
                        t.activePopup = null
                    }
                    ))
                }
            }, {
                key: "bindGlobalTriggers",
                value: function() {
                    var e = this;
                    document.addEventListener("click", (function(t) {
                        var n = t.target.closest("[data-popup-open]");
                        n && (t.preventDefault(),
                        t.stopPropagation(),
                        t.stopImmediatePropagation(),
                        e.open(n.dataset.popupOpen))
                    }
                    ))
                }
            }, {
                key: "handleVideoOpen",
                value: function(e) {
                    var t = this
                      , n = e.querySelector("video");
                    n && (!n.src && n.dataset.src && (n.src = n.dataset.src),
                    n.currentTime = 0,
                    n.play().catch((function() {}
                    )),
                    n.__popupEndBound || (n.addEventListener("ended", (function() {
                        t.close(e.id)
                    }
                    )),
                    n.__popupEndBound = !0),
                    this.handleVideoCTA(n, e))
                }
            }, {
                key: "handleVideoClose",
                value: function(e) {
                    var t = e.querySelector("video");
                    if (t) {
                        t.pause(),
                        t.currentTime = 0;
                        var n = e.querySelector(".c-popup__invideo-link");
                        n && n.classList.add("is-hidden")
                    }
                }
            }, {
                key: "handleVideoCTA",
                value: function(e, t) {
                    var n = t.querySelector(".c-popup__invideo-link");
                    if (n) {
                        var o = parseFloat(e.dataset.ctaBeforeEnd) || 6;
                        e.__ctaBound || (e.addEventListener("timeupdate", (function() {
                            if (e.duration) {
                                var t = e.duration - o
                                  , i = e.currentTime >= t;
                                n.classList.toggle("is-hidden", !i)
                            }
                        }
                        )),
                        e.__ctaBound = !0)
                    }
                }
            }, {
                key: "lockScroll",
                value: function() {
                    document.body.style.overflow = "hidden"
                }
            }, {
                key: "unlockScroll",
                value: function() {
                    document.body.style.overflow = ""
                }
            }],
            null && Le(e.prototype, null),
            t && Le(e, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, t
        }();
        ke(_e, "popups", new Map),
        ke(_e, "activePopup", null),
        ke(_e, "scrollY", 0);
        var Ae = _e
          , xe = n(669);
        function Te(e) {
            return Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Te(e)
        }
        function qe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Ce(o.key), o)
            }
        }
        function Ce(e) {
            var t = function(e, t) {
                if ("object" != Te(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != Te(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == Te(t) ? t : t + ""
        }
        var Pe = function() {
            return e = function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.cookie_name = "hide_klaviyo_popup",
                this.cookie_duration = 30,
                this.form_id = dsAjax.klaviyo_form,
                this.popup_id = "klaviyoFormPopup",
                this.formWrap = document.getElementById("klaviyoForm"),
                this.init()
            }
            ,
            t = [{
                key: "init",
                value: function() {
                    var e, t = this;
                    if (!this.get_cookie(this.cookie_name)) {
                        var n = !1
                          , o = window.scrollY;
                        window.addEventListener("scroll", (function() {
                            Math.abs(window.scrollY - o) < 20 || n || (n = !0,
                            setTimeout((function() {
                                t.formWrap.style.display = "block",
                                Ae.open(t.popup_id)
                            }
                            ), 5e3))
                        }
                        ), {
                            passive: !0
                        }),
                        null === (e = document.getElementById(this.popup_id)) || void 0 === e || e.addEventListener("close", (function() {
                            t.set_cookie(t.cookie_name, "true", t.cookie_duration)
                        }
                        )),
                        xe(document).on("gform_confirmation_loaded", (function(e, n) {
                            +n == +t.form_id && setTimeout((function() {
                                Ae.close(t.popup_id)
                            }
                            ), 3e3)
                        }
                        ))
                    }
                }
            }, {
                key: "set_cookie",
                value: function(e, t, n) {
                    var o = new Date;
                    o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3),
                    document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(o.toUTCString(), "; path=/")
                }
            }, {
                key: "get_cookie",
                value: function(e) {
                    var t = "; ".concat(document.cookie).split("; ".concat(e, "="));
                    return 2 === t.length ? t.pop().split(";").shift() : null
                }
            }],
            t && qe(e.prototype, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, t
        }()
          , Oe = Pe
          , Ie = n(669)
          , De = n(669)
          , Me = n(669);
        var Ne = n(669);
        var Be = n(669);
        var Ve = n(669)
          , He = n(669)
          , Fe = n(669);
        var ze = n(669)
          , Re = n(669);
        var Ge = n(669)
          , We = n(669);
        function Ye() {
            We(window).width() < 575 ? We(".temp-accordion .widgettitle").each((function() {
                We(this).on("touchstart", (function() {
                    We(this).hasClass("active") ? We(this).removeClass("active").next().removeClass("active") : (We(".widgettitle").removeClass("active").next().removeClass("active"),
                    We(this).addClass("active").next().addClass("active"))
                }
                ))
            }
            )) : We(".widgettitle").removeClass("active").next().removeClass("active")
        }
        var $e = n(669);
        var Ue = n(669)
          , Ke = n(669);
        function Xe(e) {
            return Xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Xe(e)
        }
        function Je(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        var Qe = n(669)
          , Ze = n(669);
        function et(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        var tt = function() {
            var e, t = document.querySelector(".ppc .vertical-tabs .m-tabs .l-tbnav");
            if (t)
                if (window.innerWidth < 1113)
                    t.style.removeProperty("height");
                else {
                    var n = document.querySelector(".ppc .vertical-tabs .l-tbnav")
                      , o = n && n.getAttribute("data-items-to-show")
                      , i = parseInt(o || "4", 10)
                      , r = (e = document.querySelectorAll(".ppc .vertical-tabs .l-tbnav__item"),
                    function(e) {
                        if (Array.isArray(e))
                            return et(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                            return Array.from(e)
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return et(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? et(e, t) : void 0
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).slice(0, i);
                    if (r.length) {
                        var a = r.reduce((function(e, t) {
                            var n = window.getComputedStyle(t);
                            return e + t.offsetHeight + parseInt(n.marginTop, 10) + parseInt(n.marginBottom, 10)
                        }
                        ), 0);
                        a > 0 && (t.style.height = "".concat(a + 1, "px"))
                    }
                }
        };
        function nt(e) {
            return nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            nt(e)
        }
        function ot(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, it(o.key), o)
            }
        }
        function it(e) {
            var t = function(e, t) {
                if ("object" != nt(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != nt(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == nt(t) ? t : t + ""
        }
        var rt = function() {
            return e = function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.config = {
                    selector: ".js-tabs-panel",
                    navigation: ".js-tabs-nav",
                    tabs: {
                        container: ".l-tabs__panel"
                    },
                    accordion: {
                        label: ".l-tabs__label",
                        content: ".l-tabs__content"
                    },
                    nav: {
                        item: ".c-tabs-nav__link"
                    }
                },
                this.selector = "".concat(this.config.navigation, " ").concat(this.config.nav.item),
                this.items = document.querySelectorAll(this.selector),
                this.keys = {
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    delete: 46,
                    enter: 13,
                    space: 32
                },
                this.keysDirection = {
                    37: -1,
                    38: -1,
                    39: 1,
                    40: 1
                },
                this.init()
            }
            ,
            (t = [{
                key: "init",
                value: function() {}
            }]) && ot(e.prototype, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, t
        }();
        function at(e) {
            return at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            at(e)
        }
        function st(e) {
            return function(e) {
                if (Array.isArray(e))
                    return ct(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return ct(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ct(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ct(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function lt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, ut(o.key), o)
            }
        }
        function ut(e) {
            var t = function(e, t) {
                if ("object" != at(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != at(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == at(t) ? t : t + ""
        }
        var dt = function() {
            return e = function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.scroll = {},
                this.selector = ".js-tabs-nav .c-tabs-nav__link",
                this.mobileSelector = ".js-tabs-panel .l-tabs__label",
                this.items = document.querySelectorAll(this.selector),
                this.itemsMobile = document.querySelectorAll(this.mobileSelector),
                this.aos = t,
                this.init()
            }
            ,
            (n = [{
                key: "init",
                value: function() {
                    var e = this;
                    e.bindChangeTab = this.changeTab.bind(this),
                    e.bindChangeSlide = this.changeSlide.bind(this),
                    e.bindScrollAccordion = this.scrollAccordion.bind(this),
                    e.bindResizeAccordion = this.resizeAccordion.bind(this),
                    st(e.items).forEach((function(t) {
                        t.addEventListener("click", e.bindChangeTab)
                    }
                    )),
                    st(e.itemsMobile).forEach((function(t) {
                        t.addEventListener("click", e.bindChangeSlide)
                    }
                    )),
                    window.addEventListener("resize", (function() {
                        n()
                    }
                    ));
                    var n = t((function() {
                        e.bindResizeAccordion()
                    }
                    ), 250);
                    t((function() {
                        e.bindScrollAccordion()
                    }
                    ), 150),
                    e.bindResizeAccordion()
                }
            }, {
                key: "changeTab",
                value: function(e) {
                    e.preventDefault();
                    var t = e.currentTarget
                      , n = t.getAttribute("aria-controls")
                      , o = (t.closest(".c-tabs-nav__item"),
                    t.closest(".js-tabs-nav").querySelectorAll(".c-tabs-nav__link"));
                    t.classList.contains("is-active") || (o.forEach((function(e, t) {
                        e.classList.remove("is-active"),
                        e.setAttribute("aria-selected", "false")
                    }
                    )),
                    t.classList.add("is-active"),
                    t.setAttribute("aria-selected", "true"));
                    var i = document.querySelectorAll(".js-tabs-panel .l-tabs__panel");
                    i.forEach((function(e, t) {
                        e.classList.remove("is-active", "is-current"),
                        e.setAttribute("aria-hidden", "true")
                    }
                    )),
                    i.forEach((function(e, t) {
                        e.getAttribute("id") === n && (e.classList.add("is-active", "is-current"),
                        e.setAttribute("aria-hidden", "false"))
                    }
                    ))
                }
            }, {
                key: "changeSlide",
                value: function(e) {
                    e.preventDefault();
                    var t = e.currentTarget.closest(".l-tabs__panel")
                      , n = t.querySelector(".l-tabs__content");
                    if (document.querySelectorAll(".js-tabs-panel .l-tabs__panel").forEach((function(e, n) {
                        e === t ? t.classList.contains("is-current") || t.classList.add("is-current") : e.classList.remove("is-current")
                    }
                    )),
                    t.classList.contains("is-active")) {
                        var o = n.offsetTop
                          , i = window.pageYOffset || document.documentElement.scrollTop
                          , r = n.offsetTop - 99;
                        i > o - 50 && V({
                            to: r,
                            duration: 200,
                            easing: F
                        }),
                        l(n),
                        t.classList.remove("is-active"),
                        t.classList.remove("is-current")
                    } else
                        u(n, {
                            display: "flex"
                        }),
                        t.classList.add("is-active")
                }
            }, {
                key: "scrollAccordion",
                value: function() {
                    window.innerWidth;
                    var e = []
                      , t = document.querySelectorAll(".js-tabs-panel .l-tabs__content");
                    t.forEach((function(t, n) {
                        var o, i, r, a, s, c, l;
                        t.closest(".l-tabs__panel").classList.contains("is-active") && (o = t,
                        i = window.scrollY || window.pageYOffset,
                        r = o.getBoundingClientRect().top + i,
                        a = i,
                        s = i + window.innerHeight,
                        c = r,
                        ((l = r + o.clientHeight) >= a && l <= s || c <= s && c >= a) && e.push(n))
                    }
                    )),
                    e.length > 0 && t.forEach((function(t, n) {
                        var o = t.closest(".l-tabs__panel");
                        e[0] === n ? o.classList.contains("is-current") || o.classList.add("is-current") : o.classList.remove("is-current")
                    }
                    ))
                }
            }, {
                key: "resizeAccordion",
                value: function() {
                    if (window.innerWidth > 1024) {
                        var e = document.querySelectorAll(".js-tabs-panel .l-tabs__content")
                          , t = 0;
                        e.forEach((function(e, n) {
                            var o = e.closest(".l-tabs__panel");
                            o.classList.contains("is-current") && (t = n),
                            o.classList.remove("is-active"),
                            e.style.display = ""
                        }
                        )),
                        e.length > 0 && e[t].closest(".l-tabs__panel").classList.add("is-active");
                        var n = document.querySelectorAll(".js-tabs-nav .c-tabs-nav__link");
                        n.forEach((function(e, t) {
                            e.classList.remove("is-active")
                        }
                        )),
                        n.length > 0 && n[t].classList.add("is-active"),
                        window.removeEventListener("scroll", this.bindScrollAccordion)
                    } else
                        window.addEventListener("scroll", this.bindScrollAccordion)
                }
            }]) && lt(e.prototype, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, n
        }();
        function ft(e) {
            return ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            ft(e)
        }
        function pt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, vt(o.key), o)
            }
        }
        function vt(e) {
            var t = function(e, t) {
                if ("object" != ft(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != ft(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == ft(t) ? t : t + ""
        }
        function mt(e, t, n) {
            return t = ht(t),
            function(e, t) {
                if (t && ("object" === ft(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(e, yt() ? Reflect.construct(t, n || [], ht(e).constructor) : t.apply(e, n))
        }
        function yt() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (e) {}
            return (yt = function() {
                return !!e
            }
            )()
        }
        function bt() {
            return bt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                var o = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ht(e)); )
                        ;
                    return e
                }(e, t);
                if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, t);
                    return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
                }
            }
            ,
            bt.apply(this, arguments)
        }
        function ht(e) {
            return ht = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            ht(e)
        }
        function gt(e, t) {
            return gt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            gt(e, t)
        }
        var wt = function(e) {
            function t(e) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (n = mt(this, t)).defaults = {
                    wrapper: ".js-tabsDrop-wrapper",
                    selectors: {
                        dropdown: ".js-tabs-dropdown",
                        panel: ".js-tabs-panel"
                    },
                    classes: {
                        active: "is-active"
                    },
                    data: "data-tab"
                },
                n.config = i(n.defaults, e),
                n.selectorDropdown = "".concat(n.config.wrapper, " ").concat(n.config.selectors.dropdown),
                n.itemsDropdown = document.querySelectorAll(n.selectorDropdown),
                n.init(),
                n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && gt(e, t)
            }(t, e),
            n = t,
            (o = [{
                key: "init",
                value: function() {
                    this.bindFunctions(),
                    this.bindTabsDropdownEvent()
                }
            }, {
                key: "bindFunctions",
                value: function() {
                    this.tabDropdownChange = this.tabDropdownChange.bind(this)
                }
            }, {
                key: "bindTabsDropdownEvent",
                value: function() {
                    var e = this;
                    e.itemsDropdown.forEach((function(t) {
                        t.addEventListener("change", e.tabDropdownChange)
                    }
                    ))
                }
            }, {
                key: "tabDropdownChange",
                value: function(e) {
                    for (var n = e.currentTarget, o = n.value, i = n.options.selectedIndex, r = 0; r < n.options.length; r += 1)
                        n.options[r].removeAttribute("selected");
                    n.options[i].setAttribute("selected", "selected"),
                    bt(ht(t.prototype), "tabPanelChange", this).call(this, o)
                }
            }, {
                key: "unbindTabsDropdownEvent",
                value: function() {
                    var e = this;
                    e.itemsDropdown.forEach((function(t) {
                        t.removeEventListener("change", e.tabDropdownChange)
                    }
                    ))
                }
            }]) && pt(n.prototype, o),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            n;
            var n, o
        }(ee)
          , St = wt;
        function Et(e) {
            return Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Et(e)
        }
        function Lt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, kt(o.key), o)
            }
        }
        function kt(e) {
            var t = function(e, t) {
                if ("object" != Et(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != Et(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == Et(t) ? t : t + ""
        }
        function jt(e, t, n) {
            return t = xt(t),
            function(e, t) {
                if (t && ("object" === Et(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(e, _t() ? Reflect.construct(t, n || [], xt(e).constructor) : t.apply(e, n))
        }
        function _t() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (e) {}
            return (_t = function() {
                return !!e
            }
            )()
        }
        function At() {
            return At = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                var o = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = xt(e)); )
                        ;
                    return e
                }(e, t);
                if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, t);
                    return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
                }
            }
            ,
            At.apply(this, arguments)
        }
        function xt(e) {
            return xt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            xt(e)
        }
        function Tt(e, t) {
            return Tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Tt(e, t)
        }
        var qt = function(e) {
            function t(e) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (n = jt(this, t)).defaults = {
                    wrapper: ".js-tabsTabDrop-wrapper",
                    selectors: {
                        nav: ".js-tabs-nav-item",
                        dropdown: ".js-tabs-dropdown",
                        panel: ".js-tabs-panel"
                    },
                    classes: {
                        active: "is-active"
                    },
                    data: "data-tab"
                },
                n.config = i(n.defaults, e),
                n.selectorTabs = "".concat(n.config.wrapper, " ").concat(n.config.selectors.nav),
                n.selectorDropdown = "".concat(n.config.wrapper, " ").concat(n.config.selectors.dropdown),
                n.items = document.querySelectorAll(n.selectorTabs),
                n.itemsDropdown = document.querySelectorAll(n.selectorDropdown),
                n.initTabsDropdown(),
                n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Tt(e, t)
            }(t, e),
            n = t,
            (o = [{
                key: "initTabsDropdown",
                value: function() {
                    this.bindFunctions(),
                    this.bindTabNavEv(),
                    this.bindTabsDropdownEvent()
                }
            }, {
                key: "bindFunctions",
                value: function() {
                    this.tabDropdownChange = this.tabDropdownChange.bind(this),
                    this.tabNavClick = this.tabNavClick.bind(this)
                }
            }, {
                key: "bindTabsDropdownEvent",
                value: function() {
                    var e = this;
                    e.itemsDropdown.forEach((function(t) {
                        t.addEventListener("change", e.tabDropdownChange)
                    }
                    ))
                }
            }, {
                key: "bindTabNavEv",
                value: function() {
                    var e = this;
                    e.items.forEach((function(t) {
                        t.addEventListener("click", e.tabNavClick, {
                            passive: !0
                        })
                    }
                    ))
                }
            }, {
                key: "tabNavClick",
                value: function(e) {
                    for (var n, o = this, i = e.currentTarget, r = At(xt(t.prototype), "getNavTabID", this).call(this, i), a = i.closest(o.config.wrapper).querySelector(o.config.selectors.dropdown), s = 0; s < a.options.length; s += 1)
                        a.options[s].value === r && (n = s);
                    o.updateTabNav(i, n),
                    o.updateDropdown(a, n),
                    At(xt(t.prototype), "tabPanelChange", this).call(this, r)
                }
            }, {
                key: "tabDropdownChange",
                value: function(e) {
                    var n = this
                      , o = e.currentTarget
                      , i = o.options.selectedIndex
                      , r = o.value
                      , a = document.querySelector("[".concat(n.config.data, "='").concat(r, "']"));
                    n.updateDropdown(o, i),
                    n.updateTabNav(a),
                    At(xt(t.prototype), "tabPanelChange", this).call(this, r)
                }
            }, {
                key: "updateDropdown",
                value: function(e, t) {
                    for (var n = e, o = t, i = 0; i < n.options.length; i += 1)
                        n.options[i].removeAttribute("selected");
                    n.options[o].setAttribute("selected", "selected"),
                    n.options.selectedIndex = o
                }
            }, {
                key: "updateTabNav",
                value: function(e, n) {
                    var o = this
                      , i = e;
                    o.activeNav = e;
                    var r = i.closest(o.config.wrapper).querySelectorAll(o.config.selectors.nav);
                    At(xt(t.prototype), "clearActiveClass", this).call(this, r, "nav"),
                    At(xt(t.prototype), "setActiveClass", this).call(this, i, "nav")
                }
            }, {
                key: "unbindTabsDropEvents",
                value: function() {
                    var e = this
                      , t = e.itemsDropdown;
                    e.items.forEach((function(t) {
                        t.removeEventListener("click", e.tabNavClick)
                    }
                    )),
                    t.forEach((function(t) {
                        t.removeEventListener("change", e.tabDropdownChange)
                    }
                    ))
                }
            }]) && Lt(n.prototype, o),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            n;
            var n, o
        }(ee)
          , Ct = qt;
        function Pt(e) {
            return Pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Pt(e)
        }
        function Ot(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function It(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Dt(o.key), o)
            }
        }
        function Dt(e) {
            var t = function(e, t) {
                if ("object" != Pt(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != Pt(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == Pt(t) ? t : t + ""
        }
        var Mt = function() {
            return e = function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.defaults = {
                    selector: ".js-video-init",
                    wrapper: "js-video-wrap",
                    overlay: ".js-video-overlay",
                    buttons: {
                        play: ".btn-play",
                        mute: ".btn-mute",
                        close: ".btn-close"
                    },
                    classes: {
                        pause: "is-pause",
                        playing: "is-playing",
                        sound: "is-sound",
                        mute: "is-muted",
                        parentPlay: "is-video-playing",
                        parentPause: "is-video-paused",
                        triggerAutoplay: "js-trigger-autoplay"
                    },
                    controls: !1
                },
                this.config = i(this.defaults, t),
                this.items = document.querySelectorAll(this.config.selector),
                this.init()
            }
            ,
            (t = [{
                key: "init",
                value: function() {
                    var e, t = this;
                    t.bindTogglePlay = this.togglePlay.bind(this),
                    t.bindToggleMute = this.toggleMute.bind(this),
                    t.bindEndedVideo = this.endedVideo.bind(this),
                    (e = t.items,
                    function(e) {
                        if (Array.isArray(e))
                            return Ot(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                            return Array.from(e)
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return Ot(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ot(e, t) : void 0
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).forEach((function(e) {
                        t.config.controls || (e.controls = !1);
                        var n = e.parentElement;
                        n.classList.add(t.config.wrapper);
                        var o = n.querySelector(t.config.buttons.play)
                          , i = n.querySelector(t.config.buttons.mute);
                        o && o.addEventListener("click", t.bindTogglePlay),
                        i && i.addEventListener("click", t.bindToggleMute),
                        e.addEventListener("ended", t.bindEndedVideo, !1),
                        e.classList.contains(t.config.classes.triggerAutoplay) && t.startPlay(e)
                    }
                    ))
                }
            }, {
                key: "endedVideo",
                value: function(e) {
                    var t = this
                      , n = e.currentTarget
                      , o = n.closest("." + t.config.wrapper)
                      , i = o.querySelector(t.config.buttons.play)
                      , r = o.querySelector(t.config.overlay);
                    n.pause(),
                    n.currentTime = 0,
                    i.classList.add(t.config.classes.pause),
                    i.classList.remove(t.config.classes.playing),
                    o.classList.remove(t.config.classes.parentPlay),
                    r && r.classList.add(t.config.classes.pause)
                }
            }, {
                key: "togglePlay",
                value: function(e) {
                    var t = this
                      , n = e.currentTarget
                      , o = n.closest("." + t.config.wrapper)
                      , i = o.querySelector(t.config.selector)
                      , r = o.querySelector(t.config.overlay);
                    i.paused || i.ended ? (n.classList.add(t.config.classes.playing),
                    o.classList.add(t.config.classes.parentPlay),
                    o.classList.remove(t.config.classes.parentPause),
                    n.classList.remove(t.config.classes.pause),
                    i.play(),
                    r && r.classList.remove(t.config.classes.pause)) : (n.classList.add(t.config.classes.pause),
                    o.classList.add(t.config.classes.parentPause),
                    o.classList.remove(t.config.classes.parentPlay),
                    n.classList.remove(t.config.classes.playing),
                    i.pause(),
                    r && r.classList.add(t.config.classes.pause))
                }
            }, {
                key: "toggleMute",
                value: function(e) {
                    var t = this
                      , n = e.currentTarget
                      , o = n.closest("." + t.config.wrapper).querySelector(t.config.selector);
                    o.muted = !o.muted,
                    o.muted ? (n.classList.add(t.config.classes.mute),
                    n.classList.remove(t.config.classes.sound)) : (n.classList.add(t.config.classes.sound),
                    n.classList.remove(t.config.classes.mute))
                }
            }, {
                key: "stopPlay",
                value: function(e) {
                    var t = this
                      , n = e
                      , o = n.parentElement.querySelector(t.config.buttons.play);
                    n.paused && n.ended || (o.classList.add(t.config.classes.pause),
                    o.classList.remove(t.config.classes.playing),
                    n.pause())
                }
            }, {
                key: "startPlay",
                value: function(e) {
                    var t = this
                      , n = e
                      , o = n.parentElement.querySelector(t.config.buttons.play);
                    (n.paused || n.ended) && (o.classList.add(t.config.classes.playing),
                    o.classList.remove(t.config.classes.pause),
                    n.play())
                }
            }]) && It(e.prototype, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, t
        }();
        function Nt(e) {
            return Nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Nt(e)
        }
        function Bt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function Vt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, Ht(o.key), o)
            }
        }
        function Ht(e) {
            var t = function(e, t) {
                if ("object" != Nt(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != Nt(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == Nt(t) ? t : t + ""
        }
        var Ft = function() {
            return e = function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.defaults = {
                    start: 0,
                    end: 100,
                    duration: 2e3,
                    delay: 10,
                    once: !0,
                    decimals: 0,
                    legacy: !0,
                    currency: !1,
                    currencysymbol: !1,
                    separator: !1,
                    separatorsymbol: ",",
                    selector: ".purecounter"
                },
                this.configOptions = Object.assign({}, this.defaults, t || {}),
                this.registerEventListeners()
            }
            ,
            t = [{
                key: "registerEventListeners",
                value: function() {
                    var e = this
                      , t = document.querySelectorAll(this.configOptions.selector);
                    if (this.intersectionListenerSupported()) {
                        var n = new IntersectionObserver(this.animateElements.bind(this),{
                            root: null,
                            rootMargin: "20px",
                            threshold: .5
                        });
                        t.forEach((function(e) {
                            n.observe(e)
                        }
                        ))
                    } else
                        window.addEventListener && (this.animateLegacy(t),
                        window.addEventListener("scroll", (function(n) {
                            e.animateLegacy(t)
                        }
                        ), {
                            passive: !0
                        }))
                }
            }, {
                key: "animateLegacy",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        !0 === t.parseConfig(e).legacy && t.elementIsInView(e) && t.animateElements([e])
                    }
                    ))
                }
            }, {
                key: "animateElements",
                value: function(e, t) {
                    var n = this;
                    e.forEach((function(e) {
                        var o = e.target || e
                          , i = n.parseConfig(o);
                        if (i.duration <= 0)
                            return o.innerHTML = n.formatNumber(i.end, i);
                        if (!t && !n.elementIsInView(e) || t && e.intersectionRatio < .5) {
                            var r = i.start > i.end ? i.end : i.start;
                            return o.innerHTML = n.formatNumber(r, i)
                        }
                        setTimeout((function() {
                            return n.startCounter(o, i)
                        }
                        ), i.delay)
                    }
                    ))
                }
            }, {
                key: "startCounter",
                value: function(e, t) {
                    var n = this
                      , o = (t.end - t.start) / (t.duration / t.delay)
                      , i = "inc";
                    t.start > t.end && (i = "dec",
                    o *= -1);
                    var r = this.parseValue(t.start);
                    e.innerHTML = this.formatNumber(r, t),
                    !0 === t.once && e.setAttribute("data-purecounter-duration", 0);
                    var a = setInterval((function() {
                        var s = n.nextNumber(r, o, i);
                        e.innerHTML = n.formatNumber(s, t),
                        ((r = s) >= t.end && "inc" == i || r <= t.end && "dec" == i) && (e.innerHTML = n.formatNumber(t.end, t),
                        clearInterval(a))
                    }
                    ), t.delay)
                }
            }, {
                key: "parseConfig",
                value: function(e) {
                    var t = this
                      , n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Bt(Object(n), !0).forEach((function(t) {
                                var o, i, r;
                                o = e,
                                i = t,
                                r = n[t],
                                (i = Ht(i))in o ? Object.defineProperty(o, i, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : o[i] = r
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bt(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({}, this.configOptions)
                      , o = [].filter.call(e.attributes, (function(e) {
                        return /^data-purecounter-/.test(e.name)
                    }
                    ))
                      , i = {};
                    return o.forEach((function(e) {
                        var n = e.name.replace("data-purecounter-", "").toLowerCase()
                          , o = "duration" == n ? parseInt(1e3 * t.parseValue(e.value)) : t.parseValue(e.value);
                        i[n] = o
                    }
                    )),
                    Object.assign(n, i)
                }
            }, {
                key: "nextNumber",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "inc";
                    return e = this.parseValue(e),
                    t = this.parseValue(t),
                    parseFloat("inc" === n ? e + t : e - t)
                }
            }, {
                key: "convertToCurrencySystem",
                value: function(e, t) {
                    var n = t.currencysymbol || ""
                      , o = t.decimals || 1;
                    return n + ((e = Math.abs(Number(e))) >= 1e12 ? "".concat((e / 1e12).toFixed(o), " T") : e >= 1e9 ? "".concat((e / 1e9).toFixed(o), " B") : e >= 1e6 ? "".concat((e / 1e6).toFixed(o), " M") : e >= 1e3 ? "".concat((e / 1e12).toFixed(o), " K") : e.toFixed(o))
                }
            }, {
                key: "applySeparator",
                value: function(e, t) {
                    return t.separator ? e.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,").replace(new RegExp(/,/gi,"gi"), t.separatorsymbol) : e.replace(new RegExp(/,/gi,"gi"), "")
                }
            }, {
                key: "formatNumber",
                value: function(e, t) {
                    var n = {
                        minimumFractionDigits: t.decimals,
                        maximumFractionDigits: t.decimals
                    };
                    return e = t.currency ? this.convertToCurrencySystem(e, t) : parseFloat(e),
                    this.applySeparator(e.toLocaleString(void 0, n), t)
                }
            }, {
                key: "parseValue",
                value: function(e) {
                    return /^[0-9]+\.[0-9]+$/.test(e) ? parseFloat(e) : /^[0-9]+$/.test(e) ? parseInt(e) : /^true|false/i.test(e) ? /^true/i.test(e) : e
                }
            }, {
                key: "elementIsInView",
                value: function(e) {
                    for (var t = e.offsetTop, n = e.offsetLeft, o = e.offsetWidth, i = e.offsetHeight; e.offsetParent; )
                        t += (e = e.offsetParent).offsetTop,
                        n += e.offsetLeft;
                    return t >= window.pageYOffset && n >= window.pageXOffset && t + i <= window.pageYOffset + window.innerHeight && n + o <= window.pageXOffset + window.innerWidth
                }
            }, {
                key: "intersectionListenerSupported",
                value: function() {
                    return "IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype
                }
            }],
            t && Vt(e.prototype, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e;
            var e, t
        }()
          , zt = Ft
          , Rt = 300
          , Gt = 600
          , Wt = ".gridder-show .l-slider-nav"
          , Yt = ".gridder-show .js-gridder-slider"
          , $t = "c-slider-nav";
        function Ut() {
            var e = document.querySelectorAll(".js-gridder");
            e.length && ("undefined" != typeof GridderExpander ? (e.forEach((function(e) {
                var t = parseInt(e.dataset.gridderScrollOffset || "80", 10)
                  , n = parseInt(e.dataset.gridderAnimationSpeed || "400", 10);
                new GridderExpander(e,{
                    scroll: !0,
                    scrollOffset: t,
                    scrollTo: "panel",
                    animationSpeed: n,
                    showNav: !0,
                    nextText: "",
                    prevText: "",
                    closeText: "Close",
                    open: function(e) {
                        var t = function() {
                            var e = document.querySelector(".currentGridder")
                              , t = new Swiper(Wt,{
                                direction: "vertical",
                                slidesPerView: "auto",
                                spaceBetween: 18,
                                freeMode: !0,
                                watchSlidesProgress: !0,
                                wrapperClass: $t
                            })
                              , n = new Swiper(Yt,{
                                effect: "fade",
                                thumbs: {
                                    swiper: t
                                }
                            });
                            return function() {
                                var e = document.querySelector(".gridder-show .swiping-img");
                                if (e) {
                                    var t = !0;
                                    e.addEventListener("wheel", (function() {
                                        t = !1
                                    }
                                    )),
                                    e.addEventListener("touchstart", (function() {
                                        t = !1
                                    }
                                    ));
                                    var n = e.querySelector("img");
                                    if (n) {
                                        var o = function() {
                                            if (t) {
                                                var o = n.offsetHeight - e.offsetHeight;
                                                if (!(o <= 0)) {
                                                    var i = null
                                                      , r = 2 * o;
                                                    requestAnimationFrame((function t(n) {
                                                        i || (i = n);
                                                        var a = n - i
                                                          , s = Math.min(a / r, 1);
                                                        e.scrollTop = o * s,
                                                        s < 1 ? requestAnimationFrame(t) : setTimeout((function() {
                                                            var t = null
                                                              , n = o;
                                                            function i(r) {
                                                                t || (t = r);
                                                                var a = r - t
                                                                  , s = Math.min(a / n, 1);
                                                                e.scrollTop = o * (1 - s),
                                                                s < 1 && requestAnimationFrame(i)
                                                            }
                                                            requestAnimationFrame(i)
                                                        }
                                                        ), Rt)
                                                    }
                                                    ))
                                                }
                                            }
                                        }
                                          , i = function() {
                                            setTimeout(o, Gt)
                                        };
                                        n.complete ? i() : n.addEventListener("load", i)
                                    }
                                }
                            }(),
                            e && (e._gridderSliders = {
                                nav: t,
                                main: n
                            }),
                            {
                                nav: t,
                                main: n
                            }
                        }();
                        e && (e._gridderSliders = t);
                        var n = document.querySelector(".gridder");
                        n && (n._lastGridderSliders = t)
                    },
                    close: function(e) {
                        var t = document.querySelector(".gridder");
                        if (t && t._lastGridderSliders) {
                            var n = t._lastGridderSliders
                              , o = n.nav
                              , i = n.main;
                            if (o && "function" == typeof o.destroy)
                                try {
                                    o.initialized && !o.destroyed && (o.destroy(!0, !0),
                                    console.log("✓ Destroyed nav slider"))
                                } catch (e) {
                                    console.error("Error destroying nav slider:", e)
                                }
                            if (i && "function" == typeof i.destroy)
                                try {
                                    i.initialized && !i.destroyed && (i.destroy(!0, !0),
                                    console.log("✓ Destroyed main slider"))
                                } catch (e) {
                                    console.error("Error destroying main slider:", e)
                                }
                            delete t._lastGridderSliders
                        }
                    }
                })
            }
            )),
            document.addEventListener("keydown", (function(e) {
                var t = document.querySelector(".currentGridder");
                if (t) {
                    var n = t.querySelector(".gridder-show");
                    if (n) {
                        if ("ArrowLeft" === e.key) {
                            var o, i = null === (o = n.previousElementSibling) || void 0 === o ? void 0 : o.previousElementSibling;
                            i && (i.click(),
                            e.preventDefault())
                        }
                        if ("ArrowRight" === e.key) {
                            var r = n.nextElementSibling;
                            r && (r.click(),
                            e.preventDefault())
                        }
                    }
                }
            }
            ))) : console.warn("GridderExpander not defined"))
        }
        var Kt = n(669)
          , Xt = n(669);
        document.addEventListener("DOMContentLoaded", (function() {
            var e, n, i, r, a, c, d, f, p, y, h, g, w, k, j, _;
            !function() {
                var e = window.innerWidth <= 1025;
                function t() {
                    var t = document.querySelector(".nav-main__wrap");
                    t && (t.style.height = e ? "".concat(window.innerHeight, "px") : "")
                }
                e && (window.addEventListener("resize", t),
                window.addEventListener("orientationchange", t),
                t())
            }(),
            function() {
                function e() {
                    var e = document.querySelectorAll(".result-sec .c-counter__text");
                    if (e && 0 !== e.length) {
                        var t = 0;
                        e.forEach((function(e) {
                            e.style.minHeight = "";
                            var n = e.offsetHeight;
                            n > t && (t = n)
                        }
                        )),
                        e.forEach((function(e) {
                            e.style.minHeight = t + "px"
                        }
                        ))
                    }
                }
                function t(e) {
                    requestAnimationFrame((function() {
                        requestAnimationFrame(e)
                    }
                    ))
                }
                var n;
                (n = window.matchMedia("(min-width: 1112px)")).matches && t(e),
                n.addEventListener("change", (function(n) {
                    n.matches ? t(e) : document.querySelectorAll(".result-sec .c-counter__text").forEach((function(e) {
                        e.style.minHeight = ""
                    }
                    ))
                }
                ))
            }(),
            function() {
                b();
                var e = t((function() {
                    b()
                }
                ), 300);
                window.addEventListener("resize", (function() {
                    e()
                }
                ))
            }(),
            e = function() {
                var e = document.querySelector("#ez-toc-container")
                  , t = document.querySelector("#singleProgressBar")
                  , n = document.querySelector(".site-footer .box-cta");
                if (n && (e || t)) {
                    var o = (e ? e.offsetHeight : 0) + (t ? t.offsetHeight : 0);
                    n.style.setProperty("--bottom-position", "".concat(o, "px"))
                }
            }
            ,
            n = function(t) {
                t && new ResizeObserver((function() {
                    e()
                }
                )).observe(t)
            }
            ,
            new MutationObserver((function() {
                e()
            }
            )).observe(document.body, {
                childList: !0,
                subtree: !0
            }),
            e(),
            n(document.querySelector("#ez-toc-container")),
            n(document.querySelector("#singleProgressBar")),
            function(e, n) {
                var o = document.querySelector(e)
                  , i = parseInt(2)
                  , r = t((function() {
                    window.pageYOffset > 10 + i ? o.classList.add(n) : window.pageYOffset < 10 - i && o.classList.remove(n)
                }
                ), 30);
                window.addEventListener("scroll", (function() {
                    r()
                }
                )),
                window.pageYOffset > 10 + i && o.classList.add(n)
            }(".site-header", "is-sticky"),
            function(e, t) {
                var n = document.querySelectorAll(e)
                  , i = document.querySelector("body")
                  , r = document.querySelector(".nav-main__wrap");
                n.forEach((function(e) {
                    e.addEventListener("click", (function(t) {
                        function n(t) {
                            var n = r.contains(t.target)
                              , o = e.contains(t.target);
                            n || o || a()
                        }
                        function a() {
                            e.classList.remove("is-active"),
                            i.classList.remove("nav-active"),
                            e.setAttribute("aria-expanded", "false"),
                            o(".js-toggleNav"),
                            document.removeEventListener("click", n)
                        }
                        t.preventDefault(),
                        "true" === e.getAttribute("aria-expanded") ? a() : (e.classList.add("is-active"),
                        i.classList.add("nav-active"),
                        e.setAttribute("aria-expanded", "true"),
                        o("#menu-header a"),
                        document.addEventListener("keydown", (function(e) {
                            var t = document.querySelectorAll('.nav-main__wrap a, .nav-main__wrap button, .nav-main__wrap input, .nav-main__wrap select, .nav-main__wrap textarea, .nav-main__wrap [tabindex]:not([tabindex="-1"])')
                              , n = (t = Array.prototype.slice.call(t))[0]
                              , o = t[t.length - 1];
                            "Tab" === e.key && (e.shiftKey ? document.activeElement === n && (e.preventDefault(),
                            o.focus()) : document.activeElement === o && (e.preventDefault(),
                            n.focus()))
                        }
                        )),
                        document.addEventListener("keydown", (function(e) {
                            if ("Escape" === e.key || "Esc" === e.key) {
                                var t = document.body;
                                t.classList.contains("nav-active") && (t.classList.remove("nav-active"),
                                document.querySelector(".js-toggleNav").classList.remove("is-active"),
                                document.querySelector(".js-toggleNav").setAttribute("aria-expanded", "false"),
                                o(".js-toggleNav"))
                            }
                        }
                        )),
                        document.addEventListener("click", n))
                    }
                    ))
                }
                ));
                var a = document.querySelectorAll(".js-menu-dropdown-toggle");
                a.forEach((function(e) {
                    e.addEventListener("click", (function() {
                        a.forEach((function(t) {
                            if (t !== e) {
                                var n = t.querySelector(".js-dropdown-menu-holder");
                                n && n.classList.contains("nav-active") && (n.classList.remove("nav-active"),
                                t.classList.remove("nav-active"))
                            }
                        }
                        ));
                        var t = e.querySelector(".js-dropdown-menu-holder");
                        t && (t.classList.contains("nav-active") ? (t.classList.remove("nav-active"),
                        e.classList.remove("nav-active")) : (t.classList.add("nav-active"),
                        e.classList.add("nav-active")))
                    }
                    ))
                }
                ))
            }(".js-toggleNav"),
            window.matchMedia("(max-width: 1024px)").matches && ((r = document.querySelector(".footer-nav")) && (i = r.querySelectorAll(".footer-nav .menu-item-has-children")),
            i && i.forEach((function(e, t) {
                var n = e.querySelector(".sub-menu");
                e.setAttribute("aria-expanded", "false"),
                l(n),
                e.firstElementChild.addEventListener("click", (function(t) {
                    t.preventDefault(),
                    t.target.tagName.toLowerCase(),
                    e.classList.contains("is-toggled") ? (l(n),
                    e.classList.remove("is-toggled"),
                    e.setAttribute("aria-expanded", "false")) : (i.forEach((function(e, t) {
                        var n = e.querySelector(".sub-menu");
                        e.classList.contains("is-toggled") && (l(n),
                        e.classList.remove("is-toggled"),
                        e.setAttribute("aria-expanded", "false"))
                    }
                    )),
                    e.classList.add("is-toggled"),
                    e.setAttribute("aria-expanded", "true"),
                    u(n))
                }
                ))
            }
            ))),
            new zt({
                selector: ".js-counter-number"
            }),
            new rt,
            Ut(),
            new Mt,
            function() {
                var e, t, n, o, i, r, a, c, l, u, d;
                e = [],
                x.forEach((function(t, n) {
                    var o = "js-slider-dsbls-" + n
                      , i = "js-slider-dsbls-m-" + n;
                    t.setAttribute("id", o),
                    T[n].setAttribute("id", i),
                    e[n] = new A(o)
                }
                )),
                l = [],
                u = [],
                d = window.innerWidth,
                P.forEach((function(e, t) {
                    l[t] = {
                        pagination: {
                            el: ".m-slider__pagination",
                            clickable: !0
                        }
                    };
                    var n = "".concat(C, "-").concat(t);
                    e.setAttribute("id", n),
                    l[t] = v(e, l[t]),
                    l[t] = m(e, l[t]),
                    l[t] = q(e, l[t]),
                    l[t] = E(e, l[t], C, t);
                    var o = e.getAttribute("data-no-mobile");
                    u[t] = new Swiper(e,l[t]),
                    o && d < 768 && u[t].destroy()
                }
                )),
                n = [],
                o = [],
                i = [],
                r = [],
                a = [],
                c = [],
                I.forEach((function(e, l) {
                    n[l] = {
                        centeredSlides: !0,
                        observer: !0,
                        observeParents: !0,
                        calculateHeight: !0,
                        pagination: {
                            el: ".m-slider__pagination",
                            clickable: !0
                        }
                    },
                    i[l] = {
                        item: ".js-nav__item",
                        active: "is-active",
                        trigger: "click"
                    },
                    e.classList.contains("js-before-after") ? c[l] = {
                        slidesPerView: "auto",
                        spaceBetween: 10,
                        centeredSlides: !0,
                        loop: !0,
                        slideToClickedSlide: !0,
                        observer: !0,
                        observeParents: !0
                    } : c[l] = {
                        spaceBetween: 10,
                        slidesPerView: "auto",
                        freeMode: !0,
                        threshold: 10,
                        watchSlidesProgress: !0,
                        wrapperClass: "c-slider-nav",
                        observer: !0,
                        observeParents: !0
                    };
                    var u = s(e.getAttribute("data-slider-thumbs"))
                      , d = "".concat(O, "-").concat(l);
                    e.setAttribute("id", d);
                    var f, p, y, b = e.closest(".m-slider");
                    if (b && (t = b.querySelector(".l-slider-nav")),
                    t)
                        if (u) {
                            var h = "js-slider-advanced-thumbs-" + l;
                            t.setAttribute("id", h),
                            f = "#" + h
                        } else {
                            var g = "js-slider-advanced-nav-" + l;
                            t.setAttribute("id", g),
                            i[l].element = "#" + g
                        }
                    if (n[l] = L(e, n[l]),
                    n[l] = v(e, n[l]),
                    n[l] = m(e, n[l]),
                    n[l] = q(e, n[l]),
                    n[l] = function(e, t) {
                        if (!e)
                            return t;
                        var n = e.getAttribute("data-initial-slide");
                        return n && (t.initialSlide = n),
                        t
                    }(e, n[l]),
                    n[l] = (p = e,
                    y = n[l],
                    p ? ("true" === p.getAttribute("data-slider-slide-to-clicked-slide") && (y.slideToClicedSlide = !0),
                    y) : y),
                    n[l] = E(e, n[l], O, l),
                    u && (a[l] = new Swiper(f,c[l]),
                    n[l].thumbs = {},
                    n[l].thumbs.swiper = a[l],
                    n[l].noSwipingSelector = ".l-slider-nav, .m-slider__pagination"),
                    o[l] = new Swiper(e,n[l]),
                    t && o[l].initialized) {
                        r[l] = new S(o[l],i[l]);
                        var w = o[l].el.querySelector(".js-slider-nav-underline");
                        w && r[l].swiper.on("slideChange", (function() {
                            w.style.transform = "translate3d(" + 100 * r[l].swiper.activeIndex + "%,0,0)"
                        }
                        ))
                    }
                }
                )),
                function() {
                    var e = D(".js-before-after");
                    if (e) {
                        var t = new IntersectionObserver((function(e, t) {
                            e.forEach((function(e) {
                                if (e.isIntersecting) {
                                    var n = document.querySelectorAll(".s-before-after .c-slider-nav__thumb").length
                                      , o = Math.round(n / 2 - 1)
                                      , i = new Swiper(".ba-thumbs",{
                                        spaceBetween: 10,
                                        slidesPerView: 3,
                                        freeMode: !0,
                                        watchSlidesProgress: !0,
                                        centeredSlides: !0,
                                        slideToClickedSlide: !0,
                                        allowTouchMove: !0,
                                        threshold: 30,
                                        breakpoints: {
                                            768: {
                                                slidesPerView: 5,
                                                spaceBetween: 10,
                                                freeMode: !0,
                                                watchSlidesProgress: !0,
                                                centeredSlides: !1,
                                                slideToClickedSlide: !0,
                                                allowTouchMove: !1,
                                                threshold: 30
                                            }
                                        }
                                    })
                                      , r = new Swiper(".ba-slider",{
                                        autoHeight: !0,
                                        autoplay: !1,
                                        navigation: {
                                            nextEl: ".ba-slider-next",
                                            prevEl: ".ba-slider-prev"
                                        },
                                        thumbs: {
                                            swiper: i
                                        }
                                    });
                                    setTimeout((function() {
                                        r.slideTo(o)
                                    }
                                    ), 1e3);
                                    var a = new Swiper(".cs-thumbs",{
                                        spaceBetween: 10,
                                        slidesPerView: 3,
                                        freeMode: !0,
                                        watchSlidesProgress: !0,
                                        centeredSlides: !0,
                                        slideToClickedSlide: !0,
                                        breakpoints: {
                                            768: {
                                                slidesPerView: 5,
                                                spaceBetween: 10,
                                                freeMode: !0,
                                                watchSlidesProgress: !0,
                                                centeredSlides: !1,
                                                slideToClickedSlide: !0
                                            }
                                        }
                                    });
                                    new Swiper(".cs-slider",{
                                        navigation: {
                                            nextEl: ".cs-slider-next",
                                            prevEl: ".cs-slider-prev"
                                        },
                                        thumbs: {
                                            swiper: a
                                        }
                                    }),
                                    t.unobserve(e.target)
                                }
                            }
                            ))
                        }
                        ),{
                            threshold: 0
                        });
                        e.each((function() {
                            t.observe(this)
                        }
                        ))
                    }
                    var n = D(".s-our-process");
                    n && (t = new IntersectionObserver((function(e, t) {
                        e.forEach((function(e) {
                            if (e.isIntersecting) {
                                var n = new Swiper(".js-process-thumbs ",{
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                    threshold: 20,
                                    slideToClickedSlide: !0,
                                    allowTouchMove: !1,
                                    navigation: {
                                        nextEl: ".pr-next",
                                        prevEl: ".pr-prev"
                                    },
                                    breakpoints: {
                                        768: {
                                            slidesPerView: "auto",
                                            allowTouchMove: !0,
                                            threshold: 100
                                        }
                                    }
                                });
                                n.on("slideChange", (function() {}
                                ));
                                var o = new Swiper(".js-process-slides",{
                                    slidesPerView: 1,
                                    autoHeight: !0,
                                    navigation: {
                                        nextEl: ".pr-next",
                                        prevEl: ".pr-prev"
                                    },
                                    thumbs: {
                                        swiper: n
                                    },
                                    on: {
                                        slideChange: function() {
                                            var e = document.querySelector(".jumper")
                                              , t = o.activeIndex
                                              , n = D(".js-process-thumbs .swiper-slide")[t]
                                              , i = n.offsetLeft
                                              , r = n.offsetWidth;
                                            e.style.left = "".concat(i + r / 2 - 45, "px"),
                                            e.classList.add("yoohoo"),
                                            setTimeout((function() {
                                                e.classList.remove("yoohoo")
                                            }
                                            ), 450)
                                        }
                                    }
                                });
                                document.querySelectorAll(".nav-jumper").forEach((function(e, t) {
                                    var n = e.querySelector(".jumper")
                                      , o = (e.querySelectorAll(".l-slider-nav .swiper-slide"),
                                    e.querySelector(".l-slider-nav .swiper-slide-thumb-active"))
                                      , i = o.offsetLeft
                                      , r = o.offsetWidth;
                                    n.style.left = "".concat(i + r / 2 - 45, "px")
                                }
                                )),
                                t.unobserve(e.target)
                            }
                        }
                        ))
                    }
                    ),{
                        threshold: 0
                    }),
                    n.each((function() {
                        t.observe(this)
                    }
                    ))),
                    D(".js-tabs-nav-item").click((function() {
                        D(".gridder-show").remove()
                    }
                    ))
                }(),
                function() {
                    if (document.querySelector(".js-slider-vertical")) {
                        var e = document.querySelectorAll(".js-slider-vertical .gallery-top .swiper-slide").length
                          , t = new Swiper(".gallery-top",{
                            spaceBetween: 0,
                            effect: "slide",
                            direction: "vertical",
                            centeredSlides: !0,
                            initialSlide: 1,
                            breakpoints: {
                                300: {
                                    slidesPerView: 1
                                },
                                1100: {
                                    slidesPerView: 1
                                },
                                1650: {
                                    slidesPerView: 1
                                }
                            },
                            speed: 1e3,
                            loop: !0,
                            loopedSlides: e,
                            loopAdditionalSlides: 2,
                            slideToClickedSlide: !0
                        })
                          , n = new Swiper(".gallery-bottom",{
                            initialSlide: 1,
                            centeredSlides: !0,
                            direction: "vertical",
                            loop: !0,
                            loopedSlides: e,
                            loopAdditionalSlides: 2,
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            }
                        });
                        t.controller.control = n,
                        n.controller.control = t
                    }
                }();
                var f = M(".js-slider-ind");
                if (f) {
                    var p = new IntersectionObserver((function(e, t) {
                        e.forEach((function(e) {
                            e.isIntersecting && (new Swiper(".js-slider-ind",{
                                slidesPerView: 5,
                                spaceBetween: 0,
                                loop: !1,
                                breakpoints: {
                                    575: {
                                        slidesPerView: 5,
                                        spaceBetween: 0,
                                        loop: !1,
                                        slideToClickedSlide: !0,
                                        threshold: 20
                                    }
                                }
                            }),
                            t.unobserve(e.target))
                        }
                        ))
                    }
                    ),{
                        threshold: 0
                    });
                    f.each((function() {
                        p.observe(this)
                    }
                    ))
                }
            }(),
            _ = [],
            K.forEach((function(e, t) {
                var n = "".concat("js-acc", "-").concat(t)
                  , o = "#".concat(n);
                e.setAttribute("id", n),
                _[t] = new U(o)
            }
            )),
            function(e) {
                e("#load_more_posts").on("click", (function(t) {
                    t.preventDefault();
                    var n = e("#load_more_posts")
                      , o = n.attr("data-paged")
                      , i = n.attr("data-total")
                      , r = n.attr("data-author")
                      , a = e("#posts_wrap")
                      , s = (e(".latest-cat.lower .more-wrap"),
                    {
                        action: "more_blog_posts",
                        nonce: ds.nonce,
                        currentPage: o,
                        author: r
                    });
                    e.ajax({
                        url: ds.ajax_url,
                        data: s,
                        type: "POST",
                        beforeSend: function(e) {
                            n.addClass("loading")
                        },
                        success: function(t) {
                            var o;
                            t ? (e(a).append(t.posts),
                            setTimeout((o = e(".l-latest-cat-item.loaded:not(done)"),
                            void e(o).each((function(t) {
                                var n = e(this);
                                setTimeout((function() {
                                    n.addClass("done")
                                }
                                ), 110 * t)
                            }
                            ))), 110),
                            n.attr("data-paged", t.paged),
                            n.removeClass("loading"),
                            t.paged == i && n.hide()) : n.hide()
                        }
                    })
                }
                ))
            }(Me),
            function(e) {
                var t, n = document.querySelectorAll(e);
                n.length > 0 && (n.forEach((function(e) {
                    ye(e).is(":hidden") && (e.autoplay = !e.autoplay)
                }
                )),
                n.forEach((function(e) {
                    var t = ye(e).parents(".js-video-section").find(".js-hero-video-cont")
                      , n = t.get(0)
                      , o = t.find(".btn-play").get(0)
                      , i = t.find(".btn-mute").get(0)
                      , r = t.find(".btn-control").get(0);
                    e.controls = !1,
                    e.addEventListener("ended", (function() {
                        this.pause(),
                        document.querySelector(".video-hidden").classList.remove("is-enabled"),
                        e.currentTime = 0,
                        o.classList.add("is-pause"),
                        o.classList.remove("is-playing")
                    }
                    ), !1),
                    e.addEventListener("timeupdate", (function() {
                        var e = parseInt(this.duration);
                        this.currentTime >= e - 1 && this.pause(),
                        console.log(e),
                        this.currentTime >= e - 3 ? n.querySelector(".invideo-link").classList.add("show") : n.querySelector(".invideo-link").classList.remove("show")
                    }
                    ), !1),
                    o.addEventListener("click", (function() {
                        e.paused || e.ended ? (o.classList.add("is-playing"),
                        o.classList.remove("is-pause"),
                        e.parentElement.classList.remove("is-ended"),
                        e.play()) : (o.classList.add("is-pause"),
                        o.classList.remove("is-playing"),
                        e.pause())
                    }
                    )),
                    i.addEventListener("click", (function() {
                        e.muted = !e.muted,
                        e.muted ? (i.classList.add("is-muted"),
                        i.classList.remove("is-sound")) : (i.classList.add("is-sound"),
                        i.classList.remove("is-muted"))
                    }
                    )),
                    r && r.addEventListener("click", (function() {
                        r && (e.controls = !e.controls,
                        e.controls ? (r.classList.add("is-muted"),
                        r.classList.remove("is-sound")) : (r.classList.add("is-sound"),
                        r.classList.remove("is-muted")))
                    }
                    ))
                }
                )),
                t = ".js-play-video",
                document.querySelectorAll(t).length > 0 && document.querySelectorAll(t).forEach((function(e) {
                    e.addEventListener("click", (function(t) {
                        t.stopPropagation();
                        var n = ye(t.target).parents(".js-video-section").find(".js-hero-video-cont");
                        n.addClass("is-enabled"),
                        document.body.classList.add("hide-scrollbar"),
                        n.animate({
                            opacity: 1
                        }, 500),
                        n.find(".videoPlayer .js-source1").prop("src", ye(e).data("video-url")),
                        n.find(".videoPlayer .js-source2").prop("src", ye(e).data("video-url"));
                        var o = n.find(".videoPlayer").get(0);
                        o.load(),
                        o.play()
                    }
                    ))
                }
                )),
                function(e) {
                    document.querySelectorAll(e).length > 0 && document.querySelectorAll(e).forEach((function(e) {
                        e.addEventListener("click", (function(e) {
                            e.stopPropagation();
                            var t = ye(e.target).parents(".js-video-section").find(".js-hero-video-cont");
                            t.removeClass("is-enabled"),
                            document.body.classList.remove("hide-scrollbar"),
                            t.animate({
                                opacity: 0
                            }, 500);
                            var n = t.find(".videoPlayer").get(0);
                            n.pause(),
                            n.currentTime = 0
                        }
                        ))
                    }
                    ))
                }(".js-stop-video"))
            }(".videoPlayer"),
            function() {
                var e = document.querySelectorAll(".js-tab-head");
                function t(t) {
                    e.forEach((function(e) {
                        e.classList.remove("is-active");
                        var t = e.querySelector(".c-block__text-wrap");
                        t && t.classList.add("-hidden")
                    }
                    )),
                    t.classList.add("is-active");
                    var n = t.querySelector(".c-block__text-wrap");
                    n && n.classList.remove("-hidden")
                }
                e.forEach((function(e) {
                    e.addEventListener("click", (function() {
                        t(e)
                    }
                    )),
                    e.addEventListener("keydown", (function(n) {
                        "Enter" === n.key && t(e)
                    }
                    ))
                }
                )),
                document.querySelectorAll(".full-block .c-btn").forEach((function(e) {
                    e.addEventListener("click", (function() {
                        var e = this.closest(".full-block")
                          , t = e.querySelector(".collapsable.read-more-text");
                        t.classList.toggle("-hidden"),
                        this.querySelector(".-text").textContent = t.classList.contains("-hidden") ? "Click To Read Full Article" : "Hide Article",
                        this.classList.toggle("-active"),
                        t.classList.contains("-hidden") && e.scrollIntoView({
                            behavior: "instant",
                            block: "start"
                        })
                    }
                    ))
                }
                ))
            }(),
            document.querySelectorAll(".read-more-wrapper").forEach((function(e) {
                var t = e.querySelector(".js-read-more-toggle")
                  , n = e.querySelector(".js-read-more-toggle-click")
                  , o = e.querySelector(".read-more-text")
                  , i = (e.classList.contains("is-active"),
                o ? o.scrollHeight : 0);
                e.classList.contains("is-active") && (o.style.maxHeight = "".concat(i, "px")),
                t ? t.addEventListener("mouseenter", (function() {
                    o && (Ie(".read-more-wrapper").removeClass("is-active"),
                    Ie(".read-more-text").css({
                        maxHeight: "0"
                    }),
                    e.classList.add("is-active"),
                    o.style.maxHeight = "".concat(i, "px"))
                }
                )) : n.addEventListener("click", (function() {
                    e.classList.contains("is-active") ? (o.style.maxHeight = 0,
                    e.classList.remove("is-active")) : (e.classList.add("is-active"),
                    o.style.maxHeight = "".concat(i, "px"))
                }
                ))
            }
            )),
            a = dsAjax,
            De("#load_more_projects").on("click", (function(e) {
                e.preventDefault();
                var t = De("#load_more_projects")
                  , n = t.attr("data-visible")
                  , o = t.attr("data-total")
                  , i = t.attr("data-load_more")
                  , r = t.attr("data-id")
                  , s = De("#project-list")
                  , c = {
                    action: "more_blog_projects",
                    id: r,
                    visible: n,
                    loadMore: i,
                    projectsJson: s.data("projects")
                };
                De.ajax({
                    url: a.admin_url,
                    data: c,
                    type: "POST",
                    beforeSend: function(e) {
                        t.addClass("loading")
                    },
                    success: function(e) {
                        e ? (De(s).append(e.output),
                        t.attr("data-visible", e.visible),
                        t.removeClass("loading"),
                        e.visible >= o && t.hide()) : t.hide()
                    }
                })
            }
            )),
            function(e) {
                var t = Ne(".js-other-case-studies")
                  , n = t.data("offset")
                  , o = Ne(".js-load-more-case-studies")
                  , i = Ne(".js-pagination-case-studies")
                  , r = t.data("perpage")
                  , a = (t.data("found-posts"),
                t.data("case-studies"))
                  , s = "loadmore-animated";
                o.on("click", (function(c) {
                    c.preventDefault(),
                    function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                          , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9
                          , c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        o.addClass("loading"),
                        Ne.ajax({
                            url: "".concat(e.admin_url, "?action=more_case_studies"),
                            method: "GET",
                            dataType: "json",
                            data: {
                                offset: n,
                                posts_per_page: r,
                                case_studies: a,
                                ajax: !0
                            },
                            success: function(e) {
                                Ne(".js-message-case-studies").html(null),
                                !1 !== e && (e.count,
                                c && t.html(null),
                                t.append(e.output).animate({
                                    opacity: 1
                                }, 200, (function() {
                                    Ne(".".concat(s)).animate({
                                        opacity: 1
                                    }, 200),
                                    Ne(".".concat(s)).each((function(e, t) {
                                        Ne(t).removeClass(".".concat(s));
                                        var n = Ne(".jsCaseStudiesLoadedMore");
                                        Ne(".jsMainCont").append(n.html()),
                                        n.remove()
                                    }
                                    ))
                                }
                                )),
                                o.removeClass("loading"),
                                (0 === e.count || e.count < r) && (o.hide(),
                                i.hide(),
                                t.removeClass("hidden"))),
                                !1 !== e && !1 !== e.output || (o.hide(),
                                i.hide(),
                                t.removeClass("hidden"))
                            }
                        })
                    }(n += t.data("perpage"), r)
                }
                ))
            }(dsAjax),
            function(e) {
                var t = document.querySelector(e)
                  , n = document.querySelector(".jsSearchForm")
                  , o = document.querySelector(".jsSearchProd")
                  , i = document.querySelector(".jsSearchBtn")
                  , r = Be(".jsAutoSearchParent");
                function a() {
                    n.classList.remove("is-active"),
                    t.setAttribute("aria-expanded", "false"),
                    r.removeClass("active"),
                    o.setAttribute("tabindex", "-1"),
                    i.setAttribute("tabindex", "-1")
                }
                t && (t.addEventListener("click", (function(e) {
                    e.preventDefault(),
                    "false" === t.getAttribute("aria-expanded") ? (n.classList.add("is-active"),
                    t.setAttribute("aria-expanded", "true"),
                    o.removeAttribute("tabindex"),
                    o.value = "",
                    i.removeAttribute("tabindex"),
                    Be(".jsSearchProd").focus()) : a()
                }
                )),
                o) && o.addEventListener("focus", (function(e) {
                    o.value = ""
                }
                )),
                document.addEventListener("click", (function(e) {
                    e.target.closest(".c-site-search") || t && "true" === t.getAttribute("aria-expanded") && a()
                }
                ), !1)
            }(".js-searchToggle"),
            (j = document.getElementById("backToTop")) && j.addEventListener("click", (function() {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
            }
            )),
            (k = document.getElementById("singleProgressBar")) && window.addEventListener("scroll", (function() {
                var e;
                e = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100,
                k.style.width = e + "%"
            }
            )),
            Ve("#js-toggleTrigger").click((function() {
                Ve("#js-toggleElement ").toggleClass("open"),
                Ve(this).toggleClass("is-active")
            }
            )),
            Ve("#js-toggleTrigger").mouseenter((function() {
                Ve("#js-toggleElement ").addClass("open"),
                Ve(this).addClass("is-active")
            }
            )),
            Ve("#js-toggleElement").mouseleave((function() {
                Ve(this).removeClass("open"),
                Ve("#js-toggleTrigger").removeClass("is-active")
            }
            )),
            c = document.querySelectorAll(".js-tbnav"),
            window.innerWidth > 1024 && c.length > 0 && c.forEach((function(e) {
                var t = e.querySelectorAll(".js-tabs-nav-item")
                  , n = e.querySelector(".js-tabs-nav-underline");
                t.forEach((function(e, t) {
                    e.addEventListener("click", (function() {
                        !function(e, t) {
                            e && t >= 0 && (e.style.transform = "translate3d(" + 100 * t + "%,0,0)")
                        }(n, t)
                    }
                    ))
                }
                ))
            }
            )),
            (d = He(".js-case-study-tabs")).length > 0 && d.each((function(e, t) {
                var n = He(this);
                n.find(".js-tabs-nav-item").on("click", (function(e) {
                    var t = He(this)
                      , o = t.attr("data-img-index")
                      , i = t.parents(".js-tab");
                    if (i.find(".js-img-tab[data-tab-index='".concat(o, "']")).length > 0) {
                        var r = i.find(".js-img-tab[data-tab-index='".concat(o, "']")).attr("data-src");
                        n.find(".l-tbnav-v1__img").animate({
                            opacity: 0
                        }, 200, (function() {
                            n.find(".js-left-img").attr("src", r),
                            n.find(".js-left-img").attr("data-src", r),
                            n.find(".l-tbnav-v1__img").animate({
                                opacity: 1
                            }, 200)
                        }
                        ))
                    }
                }
                ))
            }
            )),
            function(e, t) {
                var n = document.querySelector(e);
                if (document.querySelector(e),
                n) {
                    var o = document.querySelector(".s-before-after")
                      , i = o.querySelector(".ba-nav");
                    o.querySelectorAll(".ba-slider .swiper-slide").forEach((function(e, t) {
                        var n = e.querySelector(".l-testimonials ")
                          , o = e.querySelector("img").offsetHeight;
                        n.style.maxHeight = "".concat(o, "px")
                    }
                    )),
                    n.addEventListener("click", (function(e) {
                        e.preventDefault();
                        var t = o.querySelector(".ba-slider .swiper-slide").querySelector("img").offsetHeight
                          , n = o.querySelector(".ba-slider .swiper-wrapper");
                        o.classList.contains("ba-active") ? (o.classList.remove("ba-active"),
                        i.scrollIntoView({
                            block: "start"
                        }),
                        setTimeout((function() {
                            n.style.height = "auto"
                        }
                        ), 1200)) : (o.classList.add("ba-active"),
                        n.style.height = "".concat(t, "px"))
                    }
                    ))
                }
            }(".js-view-more"),
            function() {
                Fe(".ba-expander .c-qz-btn").each((function() {
                    Fe(this).click((function() {
                        !function(e) {
                            var t = document.querySelectorAll(".ba-single__project .ba-expander")
                              , n = e[0].dataset.url;
                            if (t.forEach((function(e) {
                                if (e.id === n) {
                                    var t = e.previousElementSibling;
                                    t.parentElement.parentElement.classList.add("on");
                                    var o = e.previousElementSibling.querySelector(".c-image__media").offsetHeight;
                                    t.style.maxHeight = o + "px",
                                    t.parentElement.classList.add("is-expanded"),
                                    e.querySelector(".c-btn").classList.add("on"),
                                    setTimeout((function() {
                                        t.previousElementSibling.parentElement.scrollIntoView({})
                                    }
                                    ), 10)
                                }
                            }
                            )),
                            e.hasClass("on"))
                                e.parent().prev().css("max-height", ""),
                                e.removeClass("on"),
                                e.parent().parent().removeClass("is-expanded"),
                                e.parent().prev().get(0).scrollIntoView();
                            else {
                                var o = e.parent().prev().find(".c-image__media").outerHeight();
                                e.parent().prev().css("max-height", o),
                                e.addClass("on"),
                                e.parent().parent().addClass("is-expanded")
                            }
                        }(Fe(this))
                    }
                    ))
                }
                ));
                var e = Fe(location).prop("hash").substr(1);
                Fe(".ba-single .js-tabs-panel").each((function() {
                    var t = Fe(this)
                      , n = t.find(".ba-single__project")
                      , o = t.attr("id")
                      , i = Fe(".ba-single .js-tabs-nav-item[aria-controls=" + o + "]");
                    e && function(e, t) {
                        e.removeClass("is-active"),
                        e.attr("aria-hidden", "false"),
                        t.removeClass("is-active"),
                        t.attr("aria-selected", "false")
                    }(t, i),
                    n.each((function() {
                        var n = this
                          , r = Fe(this).find(".ba-single__project-hash").attr("name");
                        e == r && (Fe(this).closest(".lm-col").addClass("on"),
                        Fe(this).closest(".lm-col").prevAll().addClass("on"),
                        o == Fe(this).find(".c-qz-btn").closest(".js-tabs-panel").attr("id") && (function(e, t) {
                            e.addClass("is-active"),
                            e.attr("aria-hidden", "ture"),
                            t.addClass("is-active"),
                            t.attr("aria-selected", "ture")
                        }(t, i),
                        setTimeout((function() {
                            Fe(n).find(".c-qz-btn").click()
                        }
                        ), 1500),
                        setTimeout((function() {
                            Fe(n).find(".c-image").css("max-height", "none")
                        }
                        ), 2100)))
                    }
                    ))
                }
                ));
                var t = document.querySelectorAll(".ba-toc__title");
                t && t.forEach((function(e) {
                    e.addEventListener("click", (function(t) {
                        e.classList.toggle("is-active")
                    }
                    ))
                }
                )),
                Fe(".lm-ba").each((function() {
                    Fe(this).click((function() {
                        console.log(Fe(".menu-outside").scrollTop()),
                        Fe(this).closest(".lm-col").next().addClass("on"),
                        Fe(this).closest(".c-btn__wrap").addClass("frrrc"),
                        Fe(".menu-outside").animate({
                            scrollTop: Fe(".menu-outside").scrollTop() + 200
                        }, 800)
                    }
                    ))
                }
                ))
            }(),
            Re(".hero .projects").length && setInterval((function() {
                var e = Re(".js-auto-loop-tabs.is-active")
                  , t = Re(".js-auto-loop-tabs.first");
                e.hasClass("last") ? t.click() : e.next().click()
            }
            ), 4e3),
            function() {
                if (null != document.querySelector(".js-location")) {
                    var e = document.querySelectorAll(".js-location-item");
                    e.forEach((function(t, n) {
                        t.addEventListener("click", (function() {
                            t.classList.toggle("active");
                            var o = t.querySelector(".js-location-item-content");
                            t.classList.contains("active") ? (o.style.height = "auto",
                            setTimeout((function() {
                                o.classList.add("active"),
                                o.style.opacity = "1"
                            }
                            ), 400)) : (o.style.height = "0px",
                            o.style.opacity = "0",
                            o.classList.remove("active")),
                            function(t) {
                                e.forEach((function(e, n) {
                                    if (t != n) {
                                        e.classList.remove("active");
                                        var o = e.querySelector(".js-location-item-content");
                                        o.style.height = "0px",
                                        o.style.opacity = "0",
                                        o.classList.remove("active")
                                    }
                                }
                                ))
                            }(n)
                        }
                        ))
                    }
                    ))
                }
            }(),
            (p = document.querySelector(".js-hero-raq .js-auto-expand .textarea")) && p.addEventListener("input", (function() {
                p.style.height = "50px",
                p.style.height = "".concat(p.scrollHeight + 10, "px")
            }
            )),
            Ge(".whitepaper").length && (Ge(".whitepaper .gform_button").wrap("<span class='wpcf7-submit c-btn -blue-grad -icon-spread'></span>"),
            Ge(".whitepaper .gform_footer .c-btn").append('<span class="c-btn__ico-v2"><svg class="icon icon-btn-arrow " aria-hidden="true" role="img"><use xlink:href="#lib-icon-arrow3"></use></svg></span>'),
            (f = document.getElementById("gform_wrapper_9")) && new MutationObserver((function(e) {
                Ge(".whitepaper .gform_button").wrap("<span class='wpcf7-submit c-btn -blue-grad -icon-spread'></span>"),
                Ge(".whitepaper .gform_footer .c-btn").append('<span class="c-btn__ico-v2"><svg class="icon icon-btn-arrow " aria-hidden="true" role="img"><use xlink:href="#lib-icon-arrow3"></use></svg></span>')
            }
            )).observe(f, {
                attributes: !0,
                attributeFilter: ["class"],
                childList: !0,
                characterData: !1
            })),
            Ge(".newsletter-form").length && (Ge(".newsletter-form .gform_button").wrap("<span class='wpcf7-submit c-btn -blue-grad -icon-spread'></span>"),
            (f = document.getElementById("gform_wrapper_6")) && new MutationObserver((function(e) {
                Ge(".newsletter-form .gform_button").wrap("<span class='wpcf7-submit c-btn -blue-grad -icon-spread'></span>")
            }
            )).observe(f, {
                attributes: !0,
                attributeFilter: ["class"],
                childList: !0,
                characterData: !1
            })),
            Ge(".dt-subscribe__bottom").length && (Ge(".dt-subscribe__bottom .gform_button").wrap("<span class='c-btn -primary-v3 -dark'></span>"),
            (f = document.getElementById("gform_wrapper_8")) && new MutationObserver((function(e) {
                Ge(".dt-subscribe__bottom .gform_button").wrap("<span class='c-btn -primary-v3 -dark'></span>")
            }
            )).observe(f, {
                attributes: !0,
                attributeFilter: ["class"],
                childList: !0,
                characterData: !1
            })),
            Ye(),
            (y = document.getElementById("menu-footer-menu-js")) && (y.addEventListener("click", (function(e) {
                if ("A" === e.target.tagName) {
                    e.preventDefault();
                    var t = e.target.getAttribute("data-mask-link");
                    window.location.href = t
                }
            }
            )),
            y.addEventListener("auxclick", (function(e) {
                if ("A" === e.target.tagName && 1 === e.button) {
                    e.preventDefault();
                    var t = e.target.getAttribute("data-mask-link");
                    window.open(t, "_blank")
                }
            }
            )),
            y.addEventListener("contextmenu", (function(e) {
                if ("A" === e.target.tagName) {
                    var t = e.target.getAttribute("data-mask-link");
                    window.open(t, "_blank")
                }
            }
            ))),
            function() {
                var e = document.querySelectorAll(".js-load-more-content")
                  , t = document.querySelectorAll(".js-load-more-solutions")
                  , n = document.querySelectorAll(".js-load-more-nav-item")
                  , o = document.querySelectorAll(".js-load-more-dropdown");
                function i(e, t) {
                    e.classList.remove("-show"),
                    t.querySelector(".js-load-more-txt").innerHTML = t.querySelector(".js-load-more-txt").dataset.label
                }
                e.forEach((function(e) {
                    var r = e.querySelectorAll(".l-team__item");
                    t.forEach((function(t) {
                        n.forEach((function(e) {
                            e.addEventListener("click", (function() {
                                r.forEach((function(e) {
                                    i(e, t)
                                }
                                ))
                            }
                            ))
                        }
                        )),
                        o.forEach((function(e) {
                            e.addEventListener("change", (function() {
                                r.forEach((function(e) {
                                    i(e, t)
                                }
                                ))
                            }
                            ))
                        }
                        )),
                        t.addEventListener("click", (function() {
                            r.forEach((function(n) {
                                !function(e, t, n) {
                                    e.classList.toggle("-show"),
                                    e.classList.contains("-show") ? (n.querySelector(".js-load-more-txt").innerHTML = "Hide Examples",
                                    n.classList.add("expanded")) : (t.scrollIntoView({
                                        behavior: "instant",
                                        block: "start"
                                    }),
                                    n.querySelector(".js-load-more-txt").innerHTML = n.querySelector(".js-load-more-txt").dataset.label,
                                    n.classList.remove("expanded"))
                                }(n, e, t)
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ))
            }(),
            (w = document.getElementById("conv-calc")) && w.addEventListener("submit", (function(e) {
                e.preventDefault(),
                function() {
                    var e = document.querySelector(".js-conv-calculator")
                      , t = document.querySelector(".js-conv-results")
                      , n = document.querySelector("#js-conv-field")
                      , o = document.querySelector("#js-visits-field")
                      , i = document.querySelector(".js-answer")
                      , r = document.querySelector(".js-good")
                      , a = document.querySelector(".js-bad")
                      , s = document.querySelector(".js-calc-again")
                      , c = Number((n.value / o.value * 100).toFixed(2));
                    switch (e.classList.add("hidden"),
                    t.classList.remove("hidden"),
                    i.innerHTML = "".concat(c, "%"),
                    Number(n.value) && Number(o.value) && (window.dataLayer = window.dataLayer || [],
                    window.dataLayer.push({
                        event: "conversion_calculator_form",
                        conversions: n.value,
                        visits: o.value
                    })),
                    !0) {
                    case c > 7:
                        r.classList.remove("hidden");
                        break;
                    case c < 7:
                        a.classList.remove("hidden");
                        break;
                    case 7 === c:
                        r.classList.remove("hidden"),
                        a.classList.remove("hidden")
                    }
                    s && s.addEventListener("click", (function() {
                        e.classList.remove("hidden"),
                        t.classList.add("hidden"),
                        r.classList.add("hidden"),
                        a.classList.add("hidden"),
                        n.value = "",
                        o.value = "",
                        c = 0
                    }
                    ))
                }()
            }
            )),
            $e(".bas-expander .c-qz-btn").each((function() {
                $e(this).click((function() {
                    if ($e(this).hasClass("on"))
                        $e(this).parent().prev().css("min-height", ""),
                        $e(this).removeClass("on");
                    else {
                        var e = $e(this).parent().prev().find(".c-image__media").outerHeight();
                        $e(this).parent().prev().css("min-height", e),
                        $e(this).addClass("on")
                    }
                }
                ))
            }
            )),
            function() {
                if (document.querySelector(".js-calc-widget")) {
                    var e = document.querySelector(".js-btn-page-increment")
                      , t = document.querySelector(".js-btn-page-decrement")
                      , n = document.getElementById("number-of-pages");
                    e.addEventListener("click", (function() {
                        "" === n.value ? n.value = 1 : n.value = parseInt(n.value) + 1
                    }
                    )),
                    t.addEventListener("click", (function() {
                        "" === n.value ? n.value = 1 : parseInt(n.value) > 1 && (n.value = parseInt(n.value) - 1)
                    }
                    ))
                }
            }(),
            function() {
                var e = document.querySelector(".calc-form");
                if (e) {
                    var t = function() {
                        document.querySelectorAll(".gfield--type-radio legend").forEach((function(e) {
                            var t = document.createElement("div");
                            t.classList.add("legend-wrap"),
                            e.parentNode.insertBefore(t, e),
                            t.appendChild(e)
                        }
                        ))
                    }
                      , n = function() {
                        var e = r.options[r.selectedIndex].innerText
                          , t = a.value
                          , n = s.value
                          , o = {};
                        c.forEach((function(e) {
                            var t = e.id
                              , n = e.querySelector("legend").textContent.trim().replace(/[^a-zA-Z0-9]+(.|$)/g, (function(e, t) {
                                return t ? t.toUpperCase() : ""
                            }
                            )).replace(/^./, (function(e) {
                                return e.toLowerCase()
                            }
                            ));
                            o[n] = l[t] || "No radio button checked"
                        }
                        )),
                        window.dataLayer = window.dataLayer || [],
                        window.dataLayer.push(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Je(Object(n), !0).forEach((function(t) {
                                    var o, i, r, a;
                                    o = e,
                                    i = t,
                                    r = n[t],
                                    a = function(e, t) {
                                        if ("object" != Xe(e) || !e)
                                            return e;
                                        var n = e[Symbol.toPrimitive];
                                        if (void 0 !== n) {
                                            var o = n.call(e, "string");
                                            if ("object" != Xe(o))
                                                return o;
                                            throw new TypeError("@@toPrimitive must return a primitive value.")
                                        }
                                        return String(e)
                                    }(i),
                                    (i = "symbol" == Xe(a) ? a : a + "")in o ? Object.defineProperty(o, i, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : o[i] = r
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }
                                ))
                            }
                            return e
                        }({
                            event: u,
                            websiteType: e,
                            landingPages: t,
                            hourlyRate: n
                        }, o))
                    };
                    Ue(document).on("gform_post_render", (function(e, n, o) {
                        2 == o ? (t(),
                        setTimeout((function() {
                            Ke(".gform_page[id$=_1]").addClass("on")
                        }
                        ), 1e3),
                        setTimeout((function() {
                            Ke(".gform_page[id$=_1]").addClass("on")
                        }
                        ), 100)) : 1 == o && (t(),
                        setTimeout((function() {
                            Ke(".gform_page[id$=_2]").addClass("on")
                        }
                        ), 600),
                        setTimeout((function() {
                            Ke(".gform_page[id$=_2]").addClass("on")
                        }
                        ), 100))
                    }
                    ));
                    var o = document.querySelector(".calc-form_wrapper .gform_page ").parentElement.children[1]
                      , i = o.querySelector(".gform_next_button")
                      , r = document.getElementById("input_12_15")
                      , a = document.getElementById("input_12_16")
                      , s = document.getElementById("input_12_10")
                      , c = o.querySelectorAll("fieldset")
                      , l = {};
                    c.forEach((function(e) {
                        !function(e) {
                            var t = document.getElementById(e);
                            t.querySelectorAll("input").forEach((function(n) {
                                var o = t.querySelector('input[type="radio"]:checked')
                                  , i = t.querySelector('label[for="'.concat(o.id, '"]')).textContent.trim();
                                l[e] = i,
                                n.addEventListener("change", (function(t) {
                                    var n = t.target.id
                                      , o = document.querySelector('label[for="'.concat(n, '"]')).textContent.trim();
                                    l[e] = o,
                                    console.log("Change in fieldset ".concat(e, ": ").concat(o))
                                }
                                ))
                            }
                            ))
                        }(e.id)
                    }
                    ));
                    var u = "";
                    i && i.addEventListener("click", (function() {
                        u = "website_calculator_form_step1",
                        n()
                    }
                    )),
                    Ue(document).on("gform_confirmation_loaded", (function(e, t) {
                        12 != t && 16 != t || (u = "website_calculator_form_finish",
                        n())
                    }
                    )),
                    e.querySelectorAll(".calc-custom-spin").forEach((function(e) {
                        var t = e.querySelector(".ginput_container_number")
                          , n = e.querySelector("input")
                          , o = document.createElement("span");
                        o.className = "spin-arrows up",
                        t.prepend(o);
                        var i = document.createElement("span");
                        i.className = "spin-arrows down",
                        t.append(i),
                        i.addEventListener("click", (function() {
                            var e = d(n.value) - 500
                              , t = f(e);
                            e > 100 * n.min ? n.value = t : n.value = f(100 * n.min);
                            var o = new Event("change");
                            n.dispatchEvent(o)
                        }
                        )),
                        o.addEventListener("click", (function() {
                            var e = d(n.value) + 500
                              , t = f(e);
                            e < 100 * n.max ? n.value = t : n.value = f(100 * n.max);
                            var o = new Event("change");
                            n.dispatchEvent(o)
                        }
                        )),
                        n.addEventListener("change", (function() {
                            var e = d(n.value);
                            if (e > 100 * n.max) {
                                n.value = f(100 * n.max);
                                var t = new Event("change");
                                n.dispatchEvent(t)
                            }
                            if (e < 100 * n.min) {
                                n.value = f(100 * n.min);
                                var o = new Event("change");
                                n.dispatchEvent(o)
                            }
                        }
                        ))
                    }
                    ));
                    var d = function(e) {
                        var t = e.replace(/[$\s]/g, "");
                        if (t.includes(",") && t.includes(".")) {
                            var n = t.indexOf(",")
                              , o = t.indexOf(".");
                            t = n < o ? t.replace(/,/g, "") : t.replace(/\./g, "").replace(",", ".")
                        } else
                            t.includes(",") && (t = t.lastIndexOf(",") > t.length - 4 ? t.replace(",", ".") : t.replace(/,/g, ""));
                        return Math.round(100 * parseFloat(t))
                    }
                      , f = function(e) {
                        return "$".concat((e / 100).toFixed(2))
                    }
                }
            }(),
            function() {
                var e = document.querySelector(".m-popup");
                if (e) {
                    var t = Ze('.m-popup [type="email"]')
                      , n = document.querySelector(".box-holder");
                    t.parent().prepend('<span class="c-form__ico"><svg class="icon " aria-hidden="true" role="img"><use xlink:href="#lib-icon-email"></use></svg></span>');
                    var o = document.querySelector(".popup-toggle");
                    e.classList.remove("off"),
                    o.classList.remove("off"),
                    o.addEventListener("click", (function() {
                        e.classList.toggle("on"),
                        o.classList.toggle("on"),
                        n && n.classList.toggle("other")
                    }
                    )),
                    document.querySelector(".popup-wrap .close").addEventListener("click", (function() {
                        e.classList.remove("on"),
                        o.classList.remove("on"),
                        n && n.classList.remove("other"),
                        localStorage.setItem("popupClosed", "true")
                    }
                    )),
                    localStorage.getItem("popupClosed") || setTimeout((function() {
                        e.classList.add("on"),
                        o.classList.add("on"),
                        n && n.classList.toggle("other")
                    }
                    ), 5e3);
                    var i = new IntersectionObserver((function(t, n) {
                        t.forEach((function(t) {
                            t.isIntersecting ? (o.classList.add("shift-up"),
                            e.classList.add("shift-up")) : (o.classList.remove("shift-up"),
                            e.classList.remove("shift-up"))
                        }
                        ))
                    }
                    ),{
                        root: null,
                        threshold: 0
                    })
                      , r = document.querySelector(".copy-privacy");
                    i.observe(r)
                }
                var a = !1
                  , s = !1;
                function c() {
                    a || setTimeout((function() {
                        var e;
                        a = !0,
                        (e = document.querySelector(".box-cta.-site-wide")) && e.classList.add("show")
                    }
                    ), 2e4)
                }
                window.addEventListener("scroll", (function() {
                    s || (s = !0,
                    c())
                }
                )),
                window.addEventListener("click", (function() {
                    s || (s = !0,
                    c())
                }
                ))
            }(),
            h = document.querySelectorAll(".home-hero .m-banner__content , .home-hero .-client-slides"),
            g = new IntersectionObserver((function(e) {
                e.forEach((function(e) {
                    e.isIntersecting ? e.target.classList.remove("paused") : e.target.classList.add("paused")
                }
                ))
            }
            ),{
                threshold: 0
            }),
            h.forEach((function(e) {
                return g.observe(e)
            }
            )),
            function() {
                var e = document.querySelector(".m-banner.hero24");
                if (e) {
                    var t = function() {
                        e.classList.add("is-playing"),
                        n()
                    }
                      , n = function() {
                        window.removeEventListener("scroll", t),
                        document.removeEventListener("mousemove", t),
                        document.removeEventListener("touchstart", t),
                        document.removeEventListener("keydown", t)
                    };
                    window.addEventListener("scroll", t, {
                        passive: !0
                    }),
                    document.addEventListener("mousemove", t, {
                        passive: !0
                    }),
                    document.addEventListener("touchstart", t, {
                        passive: !0
                    }),
                    document.addEventListener("keydown", t, {
                        passive: !0
                    })
                }
            }(),
            document.querySelectorAll(".nav-main__links > li  > a > .menu-item-title").forEach((function(e) {
                for (var t = e.textContent, n = "", o = 0; o < t.length; o++)
                    " " === t[o] ? n += '<span class="space">'.concat(t[o], "</span>") : n += "<span>".concat(t[o], "</span>");
                e.innerHTML = n;
                var i = e.cloneNode(!0);
                i.classList.add("double"),
                e.parentNode.insertBefore(i, e.nextSibling)
            }
            )),
            Kt("body").hasClass("home"),
            function() {
                var e = Qe(".js-slider-simple-c1");
                if (e.length) {
                    var t = new IntersectionObserver((function(e, t) {
                        e.forEach((function(e) {
                            e.isIntersecting && (new Swiper(".js-slider-simple-c1",{
                                slidesPerView: "auto",
                                loop: !0,
                                spaceBetween: 32,
                                autoplay: {
                                    delay: 1,
                                    disableOnInteraction: !1,
                                    waitForTransition: !0
                                },
                                speed: 8e3
                            }),
                            new Swiper(".js-slider-simple-c2",{
                                slidesPerView: "auto",
                                loop: !0,
                                spaceBetween: 32,
                                autoplay: {
                                    delay: 1,
                                    disableOnInteraction: !1,
                                    waitForTransition: !0
                                },
                                speed: 8e3
                            }))
                        }
                        ))
                    }
                    ),{
                        threshold: 0
                    });
                    e.each((function() {
                        t.observe(this)
                    }
                    ))
                }
            }(),
            new dt,
            new ue,
            new St,
            new Ct,
            me.forEach((function(e, t) {
                var n = "".concat("js-tab-acc", "-").concat(t)
                  , o = "#".concat(n);
                e.setAttribute("id", n),
                new ve(o)
            }
            )),
            function() {
                function e(e, t) {
                    e.forEach((function(e) {
                        e.isIntersecting ? (e.target.dataset.scroll = "in",
                        "true" === e.target.dataset.once && t.unobserve(e.target)) : e.target.dataset.scroll = "out"
                    }
                    ))
                }
                function t(t, n, o) {
                    var i = new IntersectionObserver(e,t);
                    document.querySelectorAll(n).forEach((function(e) {
                        e.dataset.once = o.toString(),
                        i.observe(e)
                    }
                    ))
                }
                t({
                    threshold: .1,
                    root: null
                }, ".in-view, .a-fade-trans, .s-text-box, .s-blog-section, .l-sign-up, .form-section__inner, .s-analysis, .s-services-custom, .services .l-dcbl, .s-team .bg-text", !0),
                t({
                    rootMargin: "0px 0px -600px 0px"
                }, ".in-cs", !0),
                t({
                    threshold: 0,
                    root: null
                }, ".in-view-r", !1)
            }(),
            function() {
                if (null != document.querySelector(".our-process24")) {
                    var e = document.querySelector(".scroller")
                      , t = document.querySelector(".scroller__inner")
                      , n = document.querySelectorAll(".scroll-slide")
                      , o = n[0].offsetWidth
                      , i = 0
                      , r = t.scrollWidth - e.clientWidth
                      , a = 0
                      , s = document.querySelector(".progress");
                    if ("ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
                        var c = function() {
                            var t = e.scrollLeft / r * 1200;
                            s.style.width = "".concat(t, "px")
                        }
                          , l = new IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                e.isIntersecting ? e.target.classList.add("active") : e.target.classList.remove("active")
                            }
                            ))
                        }
                        ),{
                            root: e,
                            threshold: .5
                        });
                        n.forEach((function(e) {
                            l.observe(e)
                        }
                        )),
                        e.addEventListener("scroll", c),
                        c()
                    } else
                        e.addEventListener("wheel", (function(c) {
                            var l = c.deltaY;
                            i += 70 * (l > 0 ? 1 : -1),
                            i = Math.max(0, Math.min(i, r)),
                            t.style.transform = "translateX(-".concat(i, "px)"),
                            0 !== i && i !== r && c.preventDefault();
                            var u = e.clientWidth / 10 * 3.5;
                            n.forEach((function(e, t) {
                                var n = t * o;
                                l > 0 && i + u >= n && a + u < n ? e.classList.add("active") : l < 0 && i + u <= n && a + u > n && e.classList.remove("active"),
                                s.style.right = "".concat(t < 1 ? 1.5 * o : -1 * (i - o / 1.2), "px")
                            }
                            )),
                            a = i
                        }
                        )),
                        n.forEach((function(c, l) {
                            c.addEventListener("click", (function() {
                                var c, u, d;
                                c = l,
                                u = e.clientWidth / 10 * 3.5,
                                d = c * o + o / 2 - u,
                                i = Math.max(0, Math.min(d, r)),
                                t.style.transform = "translateX(-".concat(i, "px)"),
                                s.style.right = "".concat(c < 1 ? 1.5 * o : -1 * (i - o / 1.2), "px"),
                                console.log(c),
                                n.forEach((function(e, t) {
                                    t <= c ? e.classList.add("active") : e.classList.remove("active")
                                }
                                )),
                                a = i
                            }
                            ))
                        }
                        ))
                }
            }(),
            function() {
                tt();
                var e = document.querySelector(".ppc .vertical-tabs");
                if (e) {
                    var t = function(e) {
                        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                        return function() {
                            for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                                i[r] = arguments[r];
                            clearTimeout(t),
                            t = setTimeout((function() {
                                return e.apply(void 0, i)
                            }
                            ), n)
                        }
                    }(tt, 150);
                    window.ResizeObserver ? new ResizeObserver(t).observe(e) : window.addEventListener("resize", t),
                    document.addEventListener("DOMContentLoaded", tt)
                }
            }(),
            new Se,
            new Oe,
            Ae.init(),
            window.matchMedia("(min-width: 1025px)").matches && (window.onload = function() {
                for (var e = document.getElementsByClassName("services-media"), t = function() {
                    var t = e[n].querySelector("video");
                    e[n].addEventListener("mouseover", (function(e) {
                        t.play()
                    }
                    )),
                    e[n].addEventListener("mouseout", (function(e) {
                        t.pause()
                    }
                    ))
                }, n = 0; n < e.length; n++)
                    t()
            }
            ,
            ze(".footer-nav > .menu-item").each((function() {
                ze(".footer-nav > .menu-item").hasClass("current-menu-parent") ? (ze(".footer-nav > .current-menu-parent").addClass("is-hover"),
                ze(".footer-nav").mouseleave((function() {
                    ze(".footer-nav > .current-menu-parent").addClass("is-hover")
                }
                ))) : (ze(".footer-nav > .menu-item:first-child").addClass("is-hover"),
                ze(".footer-nav").mouseleave((function() {
                    ze(".footer-nav > .menu-item:first-child").addClass("is-hover")
                }
                ))),
                ze(this).mouseenter((function() {
                    ze(this).addClass("is-hover")
                }
                )),
                ze(this).mouseleave((function() {
                    ze(".footer-nav > .menu-item").removeClass("is-hover")
                }
                ))
            }
            )));
            var N = document.querySelectorAll(".ai-button:not([disabled])")
              , B = window.location.href
              , V = encodeURIComponent("Summarize the key points of the following article for me: " + B)
              , H = {
                gpt: "https://chatgpt.com/?q=".concat(V),
                gemini: "https://gemini.google.com/app?q=".concat(V),
                copilot: "https://copilot.microsoft.com/?q=".concat(V),
                perplexity: "https://www.perplexity.ai/?q=".concat(V),
                grok: "https://x.com/i/grok?q=".concat(V),
                claude: "https://claude.ai/new?q=".concat(V)
            };
            if (N.forEach((function(e) {
                e.addEventListener("click", (function() {
                    var e = this.getAttribute("data-ai")
                      , t = H[e];
                    t && window.open(t, "_blank")
                }
                ))
            }
            )),
            Kt("body").hasClass("wp-singular") && document.querySelector(".yt-lazy")) {
                var F = document.querySelector(".yt-lazy")
                  , z = F.dataset.video
                  , R = "1" === F.dataset.autoplay ? "1" : "0"
                  , G = document.createElement("iframe");
                G.src = "https://www.youtube.com/embed/".concat(z, "?autoplay=").concat(R, "&rel=0&playsinline=1"),
                G.allow = "autoplay; encrypted-media",
                G.frameBorder = "0",
                G.loading = "lazy",
                G.style.width = "100%",
                G.style.height = "100%",
                F.innerHTML = "",
                F.appendChild(G)
            }
        }
        )),
        Kt(window).on("resize", (function() {
            Ye()
        }
        ));
        var Jt = new LazyLoad({
            elements_selector: ".lazy"
        });
        window.myLazyLoad = Jt,
        Xt.event.special.touchstart = {
            setup: function(e, t, n) {
                this.addEventListener("touchstart", n, {
                    passive: !t.includes("noPreventDefault")
                })
            }
        },
        Xt.event.special.touchmove = {
            setup: function(e, t, n) {
                this.addEventListener("touchmove", n, {
                    passive: !t.includes("noPreventDefault")
                })
            }
        },
        Xt.event.special.wheel = {
            setup: function(e, t, n) {
                this.addEventListener("wheel", n, {
                    passive: !0
                })
            }
        },
        Xt.event.special.mousewheel = {
            setup: function(e, t, n) {
                this.addEventListener("mousewheel", n, {
                    passive: !0
                })
            }
        },
        document.querySelectorAll(".js-tabs-nav-item").forEach((function(e) {
            e.addEventListener("keydown", (function(t) {
                13 === t.keyCode && e.click()
            }
            ))
        }
        )),
        document.querySelectorAll(".gridder-list.l-team__item").forEach((function(e) {
            e.addEventListener("keydown", (function(t) {
                13 === t.keyCode && e.click()
            }
            ))
        }
        ))
    }()
}();
\