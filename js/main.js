console.log('hello from main.js');

! function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("Navigo", [], n) : "object" == typeof exports ? exports.Navigo = n() : t.Navigo = n()
}(this, function() {
    return function(t) {
        function n(o) {
            if (e[o]) return e[o].exports;
            var i = e[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return t[o].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
        }
        var e = {};
        return n.m = t, n.c = e, n.p = "", n(0)
    }([function(t, n) {
        "use strict";

        function e(t) {
            if (Array.isArray(t)) {
                for (var n = 0, e = Array(t.length); n < t.length; n++) e[n] = t[n];
                return e
            }
            return Array.from(t)
        }

        function o(t) {
            return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        }

        function i(t) {
            return t instanceof RegExp ? t : t.replace(/\/+$/, "").replace(/^\/+/, "/")
        }

        function r(t, n) {
            return 0 === n.length ? null : t ? t.slice(1, t.length).reduce(function(t, e, o) {
                return null === t && (t = {}), t[n[o]] = e, t
            }, null) : null
        }

        function s(t) {
            var n, e = [];
            return n = t instanceof RegExp ? t : new RegExp(i(t).replace(u, function(t, n, o) {
                return e.push(o), d
            }).replace(h, f) + m), {
                regexp: n,
                paramNames: e
            }
        }

        function a(t) {
            var n = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
            return n.map(function(n) {
                var e = s(n.route),
                    o = e.regexp,
                    i = e.paramNames,
                    a = t.match(o),
                    c = r(a, i);
                return a ? {
                    match: a,
                    route: n,
                    params: c
                } : !1
            }).filter(function(t) {
                return t
            })
        }

        function c(t, n) {
            return a(t, n)[0] || !1
        }

        function l(t, n) {
            var e = a(t, n.filter(function(t) {
                    var n = i(t.route);
                    return "" !== n && "*" !== n
                })),
                o = i(t);
            return e.length > 0 ? e.map(function(n) {
                return i(t.substr(0, n.match.index))
            }).reduce(function(t, n) {
                return n.length < t.length ? n : t
            }, o) : o
        }

        function p(t, n) {
            this._routes = [], this.root = t || null, this._ok = !n && !("undefined" == typeof window || !window.history || !window.history.pushState), this._listen()
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var u = /([:*])(\w+)/g,
            h = /\*/g,
            d = "([^/]+)",
            f = "(?:.*)",
            m = "(?:/|$)";
        p.prototype = {
            helpers: {
                match: c,
                root: l,
                clean: i
            },
            navigate: function(t, n) {
                t = t || "", this._ok ? (history.pushState({}, "", (n ? "" : this._getRoot() + "/") + i(t)), this.resolve()) : "undefined" != typeof window && (window.location.href = window.location.href.replace(/#(.*)$/, "") + "#" + t)
            },
            on: function() {
                if (2 === arguments.length) this._add(arguments[0], arguments[1]);
                else if ("object" === o(arguments[0]))
                    for (var t in arguments[0]) this._add(t, arguments[0][t]);
                else "function" == typeof arguments[0] && this._add("", arguments[0]);
                this.resolve()
            },
            resolve: function(t) {
                var n, o = c(t || this._cLoc(), this._routes);
                return o ? (n = o.route.handler, o.route.route instanceof RegExp ? n.apply(void 0, e(o.match.slice(1, o.match.length))) : n(o.params), o) : !1
            },
            destroy: function() {
                this._routes = [], clearTimeout(this._listenningInterval), "undefined" != typeof window ? window.onpopstate = null : null
            },
            _add: function(t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                return this._routes.push({
                    route: t,
                    handler: n
                }), this._add
            },
            _getRoot: function() {
                return null !== this.root ? this.root : (this.root = l(this._cLoc(), this._routes), this.root)
            },
            _listen: function() {
                var t = this;
                this._ok ? window.onpopstate = function() {
                    t.resolve()
                } : ! function() {
                    var n = t._cLoc(),
                        e = void 0,
                        o = void 0;
                    (o = function() {
                        e = t._cLoc(), n !== e && (n = e, t.resolve()), t._listenningInterval = setTimeout(o, 200)
                    })()
                }()
            },
            _cLoc: function() {
                return "undefined" != typeof window ? window.location.href : ""
            }
        }, n["default"] = p, t.exports = n["default"]
    }])
}), window.onload = function() {
    app.init()
};
var app = function(t) {
    "use strict";
    t.win = window, t.height = t.win.innerHeight, t.width = t.win.innerWidth, t.scrollTop = $(t.win).scrollTop(), t.modules = [], t.lang = window.navigator.userLanguage || window.navigator.language, t.projectOpened = !1, t.isMobile = !1, t.init = function() {
        o(), e(), n(), $("body").css("opacity", 1), console.log(" ____    __  __  ____     ______  __  __     \n/\\  _`\\ /\\ \\/\\ \\/\\  _`\\  /\\  _  \\/\\ \\/\\ \\    \n\\ \\ \\L\\ \\ \\ \\ \\ \\ \\ \\L\\ \\\\ \\ \\L\\ \\ \\ `\\\\ \\   \n \\ \\ ,  /\\ \\ \\ \\ \\ \\  _ <'\\ \\  __ \\ \\ , ` \\  \n  \\ \\ \\\\ \\\\ \\ \\_\\ \\ \\ \\L\\ \\\\ \\ \\/\\ \\ \\ \\`\\ \\ \n   \\ \\_\\ \\_\\ \\_____\\ \\____/ \\ \\_\\ \\_\\ \\_\\ \\_\\\n    \\/_/\\/ /\\/_____/\\/___/   \\/_/\\/_/\\/_/\\/_/                "), console.log("\n   Interaction Design Studio | bonjour@ruban.io")
    };
    var n = function() {
            t.prefix = s()
        },
        e = function() {
            for (var n = t.modules.length, e = 0; n > e; e++) t[t.modules[e]].init()
        },
        o = function() {
            t.win.addEventListener("resize", function() {
                i()
            }), t.win.addEventListener("scroll", function(t) {
                r(t)
            })
        },
        i = function() {
            t.height = t.win.innerHeight, t.width = t.win.innerWidth, t.width < 850 && (t.isMobile = !0)
        },
        r = function() {
            t.scrollTop = $(t.win).scrollTop()
        };
    t.map = function(t, n, e, o, i) {
        return o + (t - n) * (i - o) / (e - n)
    }, t.scrollTo = function(n, e, o) {
        if (!(0 > o)) {
            var i = e - $(n).scrollTop(),
                r = i / o * 10;
            setTimeout(function() {
                $(n).scrollTop($(n).scrollTop() + r), $(n).scrollTop() !== e && t.scrollTo(n, e, o - 10)
            }, 10)
        }
    };
    var s = function() {
        var t, n, e = navigator.appName,
            o = navigator.userAgent,
            i = o.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        return i && null != (n = o.match(/version\/([\.\d]+)/i)) && (i[2] = n[1]), i = i ? [i[1], i[2]] : [e, navigator.appVersion, "-?"], i = i[0], "Chrome" == i && (t = "-webkit-"), "Firefox" == i && (t = "-Moz-"), "Safari" == i && (t = "-webkit-"), "MSIE" == i && (t = "-ms-"), t ? t : ""
    };
    return t.transformElem = function(t, n) {
        for (var e = ["webkitTransform", "MozTransform", "msTransform", "OTransform", "transform"], o = e.length, i = 0; o > i; i++) t.style[e[i]] = n
    }, t
}(app || {});
app.animation = function(t) {
        app.modules[app.modules.length] = "animation", t.init = function() {
            n()
        };
        var n = function() {};
        return t
    }(app.animation || {}), app.menu = function(t) {
        app.modules[app.modules.length] = "menu"; {
            var n = $("#menu");
            $("#view-main")
        }
        return t.init = function() {
            t.scrollMenu(), $(window).on("scroll", function() {
                t.scrollMenu()
            })
        }, t.scrollMenu = function() {
            var t = parseInt(n.css("height"));
            app.scrollTop > app.height - t ? n.addClass("in") : n.removeClass("in")
        }, t
    }(app.menu || {}), app.scrollAnimation = function(t) {
        app.modules[app.modules.length] = "scrollAnimation", t.init = function() {
            app.win.addEventListener("scroll", function() {
                n()
            })
        };
        var n = function() {
            $(".cont_animate").each(function() {
                var t = $(this).data("max"),
                    n = this.children[0].getBoundingClientRect().top,
                    e = app.map(n, -500, app.height, 1, t);
                app.transformElem(this.children[0], " translate3d(0px," + e + "px,0px)")
            })
        };
        return t
    }(app.scrollAnimation || {}), app.routing = function(t) {
        app.modules[app.modules.length] = "routing";
        var n = new Navigo(root = null, useHash = !0),
            e = $("#data-content");
        t.init = function() {
            n.on({
                "/projet/:id": function(t) {
                    $.post("projet.php", {
                        slug: t.id,
                        lang: app.lang
                    }, function(n) {
                        e.html(n), app.clickProject("#/projet/" + t.id), ga("send", "pageview", "#/projet/" + t.id)
                    })
                },
                "*": function() {
                    app.projectOpened && app.closeProject(), ga("send", "pageview", "#")
                }
            }), o()
        };
        var o = function() {
            $(".nav_btn").on("click", function(t) {
                var n = $($(t.target).data("target"));
                $("html, body").animate({
                    scrollTop: n.offset().top - 120
                }, 500)
            }), $(app.win).on("scroll", function() {})
        };
        return t
    }(app.routing || {}), app.animationProject = function(t) {
        app.modules[app.modules.length] = "animationProject";
        var n, e = $("#mask_slider"),
            o = $("#slider"),
            i = $("#grid");
        t.init = function() {
            s(), a(), p(), r()
        };
        var r = function() {
                $(window).on("resize", function() {
                    s(), a()
                })
            },
            s = function() {
                $(".blocks").each(function(t) {
                    var n = $(this),
                        e = n.offset().width,
                        o = e / 3,
                        i = t * (e + o);
                    n.css("left", i)
                })
            },
            a = function() {
                var t = (o[0].children, o[0].children.length),
                    n = $(o[0].children[0]).offset().width,
                    e = window.innerWidth,
                    r = n / 3,
                    s = e - n,
                    a = s + (t * n + (t - 1) * r),
                    c = window.innerHeight / e;
                c > 1 && (a += window.innerWidth * (c / 1.5)), o.css("width", a), i.css("height", a)
            },
            c = function(t) {
                {
                    var e = o[0].children[0];
                    i.offset().top, $(e).offset().width
                }
                n = l(t), o[0].style.transition = "all 0.4s", window.scrollTo(0, n), setTimeout(function() {
                    o[0].style.transition = "all 0s"
                }, 400)
            },
            l = function(t) {
                var n = o[0].children[0],
                    e = i.offset().top,
                    r = $(n).offset().width,
                    s = r / 3,
                    a = (s + r) * t;
                return e + a
            };
        app.clickProject = function(t) {
            var n = $('a[href="' + t + '"]'),
                e = n.data("id");
            app.projectOpened = !0;
            var o = n.find("h3");
            c(e), tl = new TimelineLite;
            tl.from(n, 0, {
                scale: .5,
                zIndex: 1
            }, "+=0.3"), tl.to(o, .2, {
                y: 100,
                autoAlpha: 0
            }), tl.to(n, .5, {
                scale: 1,
                zIndex: 10
            }, "-=0.2"), tl.to($("body"), 0, {
                overflow: "hidden",
                onComplete: function() {
                    window.scrollTo(0, l(e))
                }
            }), tl.to($("#view-project"), 0, {
                display: "block"
            }, "-=0.5"), tl.to($("#view-project"), 0, {
                scrollTop: 0
            }, "-=0.5"), tl.to($("#view-project"), .5, {
                y: 0
            }, "-=0.5"), tl.to($("#view-project"), 0, {
                overflowY: "scroll"
            })
        };
        var p = function() {
            window.addEventListener("scroll", function() {
                var t = $(window).scrollTop(),
                    n = t - $("#grid").offset().top;
                app.render = t > window.innerHeight + 100 ? !1 : !0;
                var t = i[0].getBoundingClientRect().top,
                    r = i[0].getBoundingClientRect().bottom;
                app.transformElem(o[0], "translate3d(" + -1 * n + "px,0px,0px)"), 1 > t && r > 0 ? r < window.innerHeight ? (e.css("position", "relative"), e.css("top", i[0].offsetHeight - window.innerHeight)) : (e.css("position", "fixed"), e.css("top", 0)) : e.css("position", "relative")
            }), app.closeProject = function() {
                tl.reverse(), app.projectOpened = !1, window.location.hash = "#", window.location.hash = "", window.scrollTo(0, n)
            }
        };
        return t
    }(app.animationProject || {}), app.scrollClose = function(t) {
        app.modules[app.modules.length] = "scrollClose";
        var n = $("#view-project"),
            e = $("#close"),
            o = $("#btn_close");
        t.init = function() {
            i(), r()
        };
        var i = function() {
                n.on("scroll", function() {
                    var t = e[0].getBoundingClientRect().top;
                    app.transformElem(o[0], "translate3d(0px," + t * -.5 + "px,0px)"), 100 > t && app.closeProject()
                })
            },
            r = function() {
                o.on("click", function() {
                    app.closeProject()
                })
            };
        return t
    }(app.scrollClose || {}), app.link = function(t) {
        app.modules[app.modules.length] = "link";
        var n = $(".links_menu");
        t.init = function() {
            e()
        };
        var e = function() {
            smoothScroll.init(), n.on("click", function(t) {
                t.preventDefault();
                var n = $(this).data("link"),
                    e = 0;
                app.projectOpened && (app.closeProject(), e = 500), setTimeout(function() {
                    switch (n) {
                        case "projet":
                            smoothScroll.animateScroll("#grid");
                            break;
                        case "studio":
                            smoothScroll.animateScroll("#main_title");
                            break;
                        case "contact":
                            smoothScroll.animateScroll("#bottom")
                    }
                }, e)
            })
        };
        return t
    }(app.link || {}), app.three = function(t) {
        app.modules[app.modules.length] = "three", app.render = !0;
        var n, e, o, i, r, s = new THREE.Raycaster,
            a = document.getElementById("container"),
            c = function(t) {
                t ? (physics_accuracy = 8, cloth_height = 74, cloth_width = 85, spacing = 5) : (physics_accuracy = 4, cloth_height = 26, cloth_width = 27, spacing = 15), mouse_influence = 30, gravity = 1200, flag = !1
            },
            l = {
                down: !1,
                button: 1,
                x: 0,
                y: 0,
                px: 0,
                py: 0
            },
            p = function() {
                n = new THREE.Scene, e = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1e6);
                var t = cloth_height * spacing,
                    i = cloth_width * spacing;
                e.position.set(i / 2, -t / 1.5, 300), e.lookAt(new THREE.Vector3(i / 2, -t / 1.5, 0)), h();
                var r = new THREE.PlaneGeometry(2e3, 2e3, 1, 1),
                    s = new THREE.Mesh(r, new THREE.MeshBasicMaterial({
                        visible: !1,
                        color: 0,
                        side: THREE.FrontSide
                    }));
                s.position.set(0, 0, 0), s.name = "hit", n.add(s), o = new THREE.WebGLRenderer({
                    antialias: !0
                }), o.setClearColor(16777215), o.setSize(window.innerWidth, window.innerHeight), a.appendChild(o.domElement), b()
            },
            u = function() {
                try {
                    var t = document.createElement("canvas");
                    console.log('in the create canvas area');
                    return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                } catch (n) {
                    return !1
                }
            },
            h = function() {
                var t = new THREE.PlaneGeometry(100, 100, cloth_width, cloth_height),
                    e = new THREE.TextureLoader;
                e.load("test.png", function(e) {
                    var o = new THREE.MeshBasicMaterial({
                            map: e,
                            transparent: !0,
                            side: THREE.DoubleSide,
                            depthWrite: !1
                        }),
                        i = performance.now(),
                        s = new THREE.Mesh(t, o);
                    s.name = "ruban", s.scale.set(1, -1, 1), n.add(s);
                    var a = performance.now();
                    a - i > .6 && (c(!1), r = new v, t = new THREE.PlaneGeometry(100, 100, cloth_width, cloth_height), s.geometry = t)
                })
            },
            d = function() {
                i = requestAnimationFrame(d), e.position.z = window.innerWidth > 580 ? 300 : 500;
                var t = n.getObjectByName("ruban");
                void 0 != t && (t.geometry.dynamic = !0, t.geometry.vertices = r.points, t.geometry.verticesNeedUpdate = !0, t.position.y = app.map(app.scrollTop, 0, app.height, 0, -100)), app.render && (r.update(), o.render(n, e))
            },
            f = function(t) {
                var o, i, r = new THREE.Vector2,
                    a = l,
                    c = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
                "undefined" != typeof t.touches ? (o = t.touches[0].clientX, i = t.touches[0].clientY - c) : (o = t.clientX, i = t.clientY + c), r.x = o / window.innerWidth * 2 - 1, r.y = 2 * -(i / window.innerHeight) + 1, s.setFromCamera(r, e);
                for (var p = s.intersectObjects(n.children), u = 0; u < p.length; u++) "hit" == p[u].object.name && (a.x = p[u].point.x, a.y = p[u].point.y);
                return l
            },
            m = function(t, n) {
                this.x = t, this.y = n, this.z = 0, this.px = t, this.py = n, this.pz = 0, this.vx = 0, this.vy = 0, this.vz = 0, this.pin_x = null, this.pin_y = null, this.pin_z = null, this.constraints = []
            };
        m.prototype.update = function(t) {
            if (l.down) {
                var n = this.x - l.x,
                    e = this.y - l.y,
                    o = Math.sqrt(n * n + e * e);
                1 == l.button && (mouse_influence > o && (this.px = this.x - 1.8 * (l.x - l.px), this.py = this.y - 1.8 * (l.y - l.py)), mouse_influence + 5 > o && this.add_force(0, 0, 50 * -o))
            }
            this.add_force(0, gravity, 0), flag || this.add_force(10, 1e3, 100), t *= t, nx = this.x + .99 * (this.x - this.px) + this.vx / 2 * t, ny = this.y + .99 * (this.y - this.py) + this.vy / 2 * t, nz = this.z + .99 * (this.z - this.pz) + this.vz / 2 * t, this.px = this.x, this.py = this.y, this.pz = this.z, this.x = nx, this.y = ny, this.z = nz, this.vz = this.vy = this.vx = 0
        }, m.prototype.resolve_constraints = function() {
            if (null != this.pin_x && null != this.pin_y && null != this.pin_z) return this.x = this.pin_x, this.y = this.pin_y, void(this.z = this.pin_z);
            for (var t = this.constraints.length; t--;) this.constraints[t].resolve()
        }, m.prototype.attach = function(t) {
            this.constraints.push(new g(this, t))
        }, m.prototype.remove_constraint = function(t) {
            for (var n = this.constraints.length; n--;) this.constraints[n] == t && this.constraints.splice(n, 1)
        }, m.prototype.add_force = function(t, n, e) {
            this.vx += t, this.vy += n, this.vz += e
        }, m.prototype.pin = function(t, n, e) {
            this.pin_x = t, this.pin_y = n, this.pin_z = e
        };
        var g = function(t, n) {
            this.p1 = t, this.p2 = n, this.length = spacing
        };
        g.prototype.resolve = function() {
            var t = this.p1.x - this.p2.x,
                n = this.p1.y - this.p2.y,
                e = this.p1.z - this.p2.z,
                o = Math.sqrt(t * t + n * n + e * e),
                i = (this.length - o) / o,
                r = t * i * .5,
                s = n * i * .5,
                a = e * i * .5;
            this.p1.x += r, this.p1.y += s, this.p1.z += a, this.p2.x -= r, this.p2.y -= s, this.p2.z -= a
        };
        var v = function() {
            this.points = [];
            for (var t = 0, n = 0; cloth_height >= n; n++)
                for (var e = 0; cloth_width >= e; e++) {
                    var o = new m(t + e * spacing, n * spacing);
                    0 != e && o.attach(this.points[this.points.length - 1]), 0 == n && o.pin(o.x, o.y, o.z), 0 != n && o.attach(this.points[e + (n - 1) * (cloth_width + 1)]), this.points.push(o)
                }
        };
        v.prototype.update = function() {
            for (var t = physics_accuracy; t--;)
                for (var n = this.points.length; n--;) this.points[n].resolve_constraints();
            for (t = this.points.length; t--;) this.points[t].update(.016)
        };
        var w = function() {
                a.addEventListener("mousedown", y, !1), a.addEventListener("mouseup", x, !1), a.addEventListener("mouseleave", x, !1), a.addEventListener("mousemove", E, !1), a.addEventListener("touchstart", y, !1), a.addEventListener("touchend", x, !1), a.addEventListener("touchmove", E, !1), window.addEventListener("resize", b, !1)
            },
            _ = function() {
                return u() ? (c(!0), r = new v, p(), setTimeout(function() {
                    flag = !0
                }, 100), d(), void w()) : void $("#alt_logo").css("display", "block")
            };
        t.init = function() {
            w(), _(), setTimeout(function() {
                flag = !0
            }, 200)
        };
        var y = function(t) {
                l.button = 1, l.px = l.x, l.py = l.y;
                var n = f(t);
                l.x = n.x, l.y = -n.y, l.down = !0, a.className = "grabbable"
            },
            x = function() {
                l.down = !1, a.className = ""
            },
            E = function(t) {
                l.px = l.x, l.py = l.y;
                var n = f(t);
                l.x = n.x, l.y = -n.y
            },
            b = function() {
                e.aspect = window.innerWidth / window.innerHeight, e.updateProjectionMatrix(), o.setSize(document.body.clientWidth, window.innerHeight)
            };
        return t
    }(app.three || {}),
    function(t, n) {
        "function" == typeof define && define.amd ? define([], n(t)) : "object" == typeof exports ? module.exports = n(t) : t.smoothScroll = n(t)
    }("undefined" != typeof global ? global : this.window || this.global, function(t) {
        "use strict";
        var n, e, o, i, r, s = {},
            a = "querySelector" in document && "addEventListener" in t && "onhashchange" in t,
            c = {
                selector: "[data-scroll]",
                selectorHeader: "[data-scroll-header]",
                speed: 500,
                easing: "easeInOutCubic",
                offset: 0,
                scrollOnLoad: !0,
                callback: function() {}
            },
            l = function() {
                var t = {},
                    n = !1,
                    e = 0,
                    o = arguments.length;
                "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (n = arguments[0], e++);
                for (var i = function(e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = n && "[object Object]" === Object.prototype.toString.call(e[o]) ? l(!0, t[o], e[o]) : e[o])
                    }; o > e; e++) {
                    var r = arguments[e];
                    i(r)
                }
                return t
            },
            p = function(t) {
                return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
            },
            u = function(t, n) {
                var e, o, i = n.charAt(0),
                    r = "classList" in document.documentElement;
                for ("[" === i && (n = n.substr(1, n.length - 2), e = n.split("="), e.length > 1 && (o = !0, e[1] = e[1].replace(/"/g, "").replace(/'/g, ""))); t && t !== document; t = t.parentNode) {
                    if ("." === i)
                        if (r) {
                            if (t.classList.contains(n.substr(1))) return t
                        } else if (new RegExp("(^|\\s)" + n.substr(1) + "(\\s|$)").test(t.className)) return t;
                    if ("#" === i && t.id === n.substr(1)) return t;
                    if ("[" === i && t.hasAttribute(e[0])) {
                        if (!o) return t;
                        if (t.getAttribute(e[0]) === e[1]) return t
                    }
                    if (t.tagName.toLowerCase() === n) return t
                }
                return null
            };
        s.escapeCharacters = function(t) {
            "#" === t.charAt(0) && (t = t.substr(1));
            for (var n, e = String(t), o = e.length, i = -1, r = "", s = e.charCodeAt(0); ++i < o;) n = e.charCodeAt(i), r += n >= 1 && 31 >= n || 127 == n || 0 === i && n >= 48 && 57 >= n || 1 === i && n >= 48 && 57 >= n && 45 === s ? "\\" + n.toString(16) + " " : n >= 128 || 45 === n || 95 === n || n >= 48 && 57 >= n || n >= 65 && 90 >= n || n >= 97 && 122 >= n ? e.charAt(i) : "\\" + e.charAt(i);
            return "#" + r
        };
        var h = function(t, n) {
                var e;
                return "easeInQuad" === t && (e = n * n), "easeOutQuad" === t && (e = n * (2 - n)), "easeInOutQuad" === t && (e = .5 > n ? 2 * n * n : -1 + (4 - 2 * n) * n), "easeInCubic" === t && (e = n * n * n), "easeOutCubic" === t && (e = --n * n * n + 1), "easeInOutCubic" === t && (e = .5 > n ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), "easeInQuart" === t && (e = n * n * n * n), "easeOutQuart" === t && (e = 1 - --n * n * n * n), "easeInOutQuart" === t && (e = .5 > n ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), "easeInQuint" === t && (e = n * n * n * n * n), "easeOutQuint" === t && (e = 1 + --n * n * n * n * n), "easeInOutQuint" === t && (e = .5 > n ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), e || n
            },
            d = function(t, n, e) {
                var o = 0;
                if (t.offsetParent)
                    do o += t.offsetTop, t = t.offsetParent; while (t);
                return o = o - n - e, o >= 0 ? o : 0
            },
            f = function() {
                return Math.max(t.document.body.scrollHeight, t.document.documentElement.scrollHeight, t.document.body.offsetHeight, t.document.documentElement.offsetHeight, t.document.body.clientHeight, t.document.documentElement.clientHeight)
            },
            m = function(t) {
                return t && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(t) : {}
            },
            g = function(t) {
                return null === t ? 0 : p(t) + t.offsetTop
            };
        s.animateScroll = function(n, e, r) {
            var s = m(e ? e.getAttribute("data-options") : null),
                a = l(a || c, r || {}, s),
                p = "[object Number]" === Object.prototype.toString.call(n) ? !0 : !1,
                u = p ? null : t.document.querySelector(n);
            if (p || u) {
                var v = t.pageYOffset;
                o || (o = t.document.querySelector(a.selectorHeader)), i || (i = g(o));
                var w, _, y, x = p ? n : d(u, i, parseInt(a.offset, 10)),
                    E = x - v,
                    b = f(),
                    T = 0,
                    $ = function(o, i, r) {
                        var s = t.pageYOffset;
                        (o == i || s == i || t.innerHeight + s >= b) && (clearInterval(r), u && u.focus(), a.callback(n, e))
                    },
                    j = function() {
                        T += 16, _ = T / parseInt(a.speed, 10), _ = _ > 1 ? 1 : _, y = v + E * h(a.easing, _), t.scrollTo(0, Math.floor(y)), $(y, x, w)
                    },
                    z = function() {
                        w = setInterval(j, 16)
                    };
                0 === t.pageYOffset && t.scrollTo(0, 0), z()
            }
        };
        var v = function() {
                var e = t.location.hash;
                if (r && (r.id = r.getAttribute("data-scroll-id"), r = null), e) {
                    e = s.escapeCharacters(e);
                    var o = document.querySelector(n.select + '[href*="' + e + '"]');
                    s.animateScroll(e, o, n)
                }
            },
            w = function(e) {
                var o = u(e.target, n.selector);
                if (o && o.hash) {
                    var i = s.escapeCharacters(o.hash);
                    if (i === (t.location.hash || "#top")) return void s.animateScroll(i, o, n);
                    r = document.querySelector(i), r && (r.setAttribute("data-scroll-id", r.id), r.id = "")
                }
            },
            _ = function() {
                e || (e = setTimeout(function() {
                    e = null, i = g(o)
                }, 66))
            };
        return s.destroy = function() {
            n && (document.removeEventListener("click", w, !1), t.removeEventListener("hashchange", v, !1), t.removeEventListener("resize", _, !1), n = null, e = null, o = null, i = null, r = null)
        }, s.init = function(e) {
            a && (s.destroy(), n = l(c, e || {}), o = t.document.querySelector(n.selectorHeader), i = g(o), document.addEventListener("click", w, !1), t.addEventListener("hashchange", v, !1), o && t.addEventListener("resize", _, !1), n.scrollOnLoad && (setTimeout(function() {
                window.scrollTo(0, 0)
            }, 1), v()))
        }, s
    });
//# sourceMappingURL=main.min.js.map
