"use strict";
var winW, winH, winSc, htmlH, es_step = "Expo.ease",
    $window = $(window),
    $container = $("#container"),
    $subVisual = $container.find("#subVisual");
    
$window.load(function() {
    htmlH = $("body").outerHeight(!0), winSc = $(this).scrollTop(), 
    $window.on("resize", function() {
        winW = $(this).width(), winH = $(this).height()
    }), 
    $(this).trigger("resize"), $(window).scroll(function() {
        winSc = $(this).scrollTop()
    }), 
    main(), layout(), scrollBg(), locationJS(), object(), company(), ir()
});


var $selectCustom = $("#selectCustom"),
    $selectBtn = $selectCustom.find("button"),
    $termsOption = $selectCustom.find("ul"),
    _selectLength = 36 * $termsOption.find("li").length + 20;
$selectBtn.click(function() {
    var e = $(this);
    e.hasClass("active") ? (e.removeClass("active"), TweenMax.to($termsOption, .2, {
        height: 0,
        ease: es_step
    })) : (e.addClass("active"), TweenMax.to($termsOption, .2, {
        height: _selectLength,
        ease: es_step
    }))
}), $selectCustom.mouseleave(function() {
    $selectBtn.removeClass("active"), TweenMax.to($termsOption, .2, {
        height: 0,
        ease: es_step
    })
});

function ir() {
    var i = $("#stock_tab"),
        a = $(".stock_con_table > article");
    i.find("button").click(function() {
        var t = $(this);
        i.find("li").removeClass(), t.parent().addClass("active"), a.hide(), a.eq(t.parent().index()).show()
    })
}

function layout() {
    for (var n, e, a, s = $("#header"), t = $("#gnb"), i = $("#allNavBtn"), o = t.find(".depth1"), l = $("#gnbDimmed"), d = $("#navDimmed"), p = o.find("> li").length, h = $("#headerSiteMap"), c = $("#fp-nav"), f = !1, v = [], y = 0, g = p; y < g; y++) e = y, a = void 0, a = o.find("> li").eq(e), v.push(a.find(".depth2 li").length);
    o.find("> li").mouseenter(function() {
        var e, a = $(this),
            t = a.index();
        TweenMax.to(o.find(".depth2"), .3, {
            display: "none",
            opacity: 0
        }), TweenMax.to(a.find(".depth2"), .3, {
            display: "block",
            opacity: 1
        }), n = v[t] / 5 < 1 ? 380 : 624, !1 === f && (e = n, TweenMax.to(s, .3, {
            height: e,
            ease: es_step
        }), TweenMax.to(l, .3, {
            display: "block",
            opacity: .6,
            ease: es_step
        }), c.css({
            display: "none"
        }))
    }), t.mouseleave(function() {
        TweenMax.to(o.find(".depth2"), .3, {
            display: "none",
            opacity: 0
        }), TweenMax.to(s, .3, {
            height: 95,
            ease: es_step
        }), TweenMax.to(l, .3, {
            display: "none",
            opacity: 0,
            ease: es_step
        }), c.css({
            display: "block"
        })
    }), i.click(function() {
        var e = $(this);
        f = e.hasClass("active") ? (e.removeClass("active"), TweenMax.to(h, .3, {
            height: 0
        }), TweenMax.to(d, .3, {
            display: "none",
            opacity: 0,
            ease: es_step
        }), c.css({
            display: "block"
        }), !1) : (e.addClass("active"), TweenMax.to(h, .3, {
            height: 525
        }), TweenMax.to(d, .3, {
            display: "block",
            opacity: .6,
            ease: es_step
        }), c.css({
            display: "none"
        }), !0)
    });
    var u = $(".language_select");
    u.find("button").mouseenter(function() {
        $(this).parent().addClass("active"), TweenMax.to($(this).parent(), .2, {
            height: 150,
            ease: es_step
        })
    }), u.mouseleave(function() {
        TweenMax.to($(this), .2, {
            height: 53,
            ease: es_step,
            onComplete: function() {
                $(this.target).removeClass("active")
            }
        })
    });
    var w = $("#familySite"),
        x = w.find("button"),
        M = w.find("div").height() + 47;
    x.click(function() {
        TweenMax.isTweening(w) || (w.hasClass("on") ? (TweenMax.to(w, .2, {
            height: 47
        }), w.removeClass("on")) : (TweenMax.to(w, .2, {
            height: M
        }), w.addClass("on")))
    })
}

function locationJS() {
    var i = $("#subLocation"),
        e = $(".location_box"),
        n = $(".location_list > li");
    i.find("button").on("click", function() {
        event.preventDefault();
        var e = $(this),
            t = e.siblings(".under_depth").outerHeight();
        e.hasClass("active") ? TweenMax.isTweening(n) || (i.find("button").removeClass("active"), TweenMax.to($(this).parent(), .3, {
            height: 60,
            ease: es_step
        })) : (e.addClass("active"), TweenMax.to(n, .3, {
            height: 60,
            ease: es_step
        }), TweenMax.to($(this).parent(), .3, {
            height: t + 60,
            ease: es_step
        }))
    }), n.on("mouseleave", function() {
        TweenMax.isTweening(n) || (i.find("button").removeClass("active"), TweenMax.to($(".location_list > li"), .3, {
            height: 60,
            ease: es_step
        }))
    }), $(window).scroll(function() {
        96 < winSc ? e.addClass("active") : e.removeClass("active")
    })
}

function main() {
    var e = $("#mainVisual"),
        a = e.find(".visual_img li"),
        n = e.find(".visual_txt li"),
        t = a.length,
        s = e.find("#navBtn"),
        i = s.find(".prev_btn"),
        r = s.find(".next_btn"),
        o = {};
    Object.defineProperty(o, "number", {
        get: function() {
            return this.num || 0
        },
        set: function(e) {
            e %= t, this.num = e
        }
    }), r.click(function() {
        TweenMax.isTweening(a) || (o.number++, TweenMax.fromTo(a, 1.2, {
            zIndex: 0,
            right: "auto",
            left: 0
        }, {
            width: "0%",
            ease: Expo.easeOut
        }), TweenMax.fromTo(a.eq(o.number), 1, {
            zIndex: 1,
            left: "auto",
            right: 0
        }, {
            width: "100%",
            ease: Expo.easeOut
        }), TweenMax.to(n.find("h1,p,a"), 1, {
            x: -20,
            opacity: 0,
            display: "none",
            ease: Expo.easeOut
        }), TweenMax.fromTo(n.eq(o.number).find("h1,p,a"), 1, {
            x: 20
        }, {
            x: 0,
            opacity: 1,
            display: "block",
            ease: Expo.easeOut
        }))
    }), i.click(function() {
        TweenMax.isTweening(a) || (o.number--, TweenMax.fromTo(a, 1.2, {
            zIndex: 0,
            left: "auto",
            right: 0
        }, {
            width: "0%",
            ease: Expo.easeOut
        }), TweenMax.fromTo(a.eq(o.number), 1, {
            zIndex: 1,
            right: "auto",
            left: 0
        }, {
            width: "100%",
            ease: Expo.easeOut
        }), TweenMax.to(n.find("h1,p,a"), 1, {
            x: 20,
            opacity: 0,
            display: "none",
            ease: Expo.easeOut
        }), TweenMax.fromTo(n.eq(o.number).find("h1,p,a"), 1, {
            x: -20
        }, {
            x: 0,
            opacity: 1,
            display: "block",
            ease: Expo.easeOut
        }))
    })
}
var $businessSec = $("#section02"),
    $bgLine = $(".bg_line");
$businessSec.on("mousemove.parallax", function(e) {
    var a, n, t = $businessSec.width(),
        s = $businessSec.height();
    a = t / 2 - e.pageX, n = s / 2 - e.pageY, TweenMax.to($bgLine.find(".line01"), .2, {
        x: a / 40,
        y: n / 40
    }), TweenMax.to($bgLine.find(".line02"), .2, {
        x: a / 50,
        y: n / 50
    }), TweenMax.to($bgLine.find(".line03"), .2, {
        x: a / 60,
        y: n / 60
    })
});
var $careersSec = $("#section04"),
    $careersBox = $careersSec.find(".box_wrap"),
    $careersBox1 = $careersBox.find(".box01"),
    $careersBox2 = $careersBox.find(".box02"),
    $careersBox3 = $careersBox.find(".box03"),
    _careersWset01 = "53%",
    _careersWset02 = "47%";
$careersBox.find("article").mouseenter(function() {
    var e = $(this);
    e.hasClass("box01") ? (TweenMax.to($careersBox.find("article"), .3, {
        width: _careersWset02
    }), TweenMax.to(e, .29, {
        width: _careersWset01
    })) : e.hasClass("box02") ? (TweenMax.to($careersBox1, .3, {
        width: _careersWset02
    }), TweenMax.to($careersBox.find(".box03"), .3, {
        width: _careersWset01,
        height: _careersWset02
    }), TweenMax.to(e, .29, {
        width: _careersWset01,
        height: _careersWset01
    })) : e.hasClass("box03") && (TweenMax.to($careersBox1, .3, {
        width: _careersWset02
    }), TweenMax.to($careersBox2, .3, {
        width: _careersWset01,
        height: _careersWset02
    }), TweenMax.to(e, .29, {
        width: _careersWset01,
        height: _careersWset01
    }))
}).mouseleave(function() {
    TweenMax.to($careersBox1, .3, {
        width: "50%"
    }), TweenMax.to($careersBox2, .3, {
        width: "50%",
        height: "50%"
    }), TweenMax.to($careersBox3, .3, {
        width: "50%",
        height: "50%"
    })
});

function mypage() {
    var n = $("#myRecipeStep"),
        e = $(".my_recipe").find(".step_nav");
    e.find("button").click(function() {
        var i = $(this),
            t = i.index();
        e.find("button").removeClass("active"), i.addClass("active"), n.find("> article, > div").css({
            display: "none",
            opacity: 0
        }), TweenMax.to(n.find("> article, > div").eq(t), .2, {
            display: "block",
            opacity: 1
        })
    });
    var a = n.find(".follow_step"),
        c = a.find(".step_btn");
    c.find("button").click(function() {
        var i = $(this),
            t = i.parent().index();
        c.find("button").removeClass("active"), i.addClass("active"), a.find("> div").css({
            display: "none",
            opacity: 0
        }), TweenMax.to(a.find("> div").eq(t), .2, {
            display: "block",
            opacity: 1
        })
    }), $("button.follower_btn").click(function() {
        $(this).toggleClass("active")
    })
}

function object() {
    var e = $("#modalPopup"),
        o = $(".popup_open"),
        p = $(".popup_close"),
        n = e.find(".popup_wrap");

    function a() {
        $("html").removeClass("no_scroll"), n.hide()
    }
    o.click(function() {
        var o = $(this).attr("id").replace("OpenBtn", "");
        $("html").addClass("no_scroll"), $("#" + o).show(), TweenMax.to(e, .5, {
            opacity: 1,
            display: "block"
        }), TweenMax.fromTo($(".popup_container"), .5, {
            y: 50
        }, {
            y: 0,
            ease: es_step
        })
    }), p.on("click", function() {
        TweenMax.to(e, .3, {
            opacity: 0,
            display: "none",
            ease: es_step,
            onComplete: a
        })
    })
}

function recipe() {
    $(".accordion_list").find("button").click(function() {
        var t = $(this),
            e = (t.parent().height(), t.parent().siblings(".txt_wrap").innerHeight());
        t.parent().parent().hasClass("active") ? (t.parent().parent().removeClass("active"), TweenMax.to(t.parent().parent(), .3, {
            height: 91
        })) : (t.parent().parent().addClass("active"), TweenMax.to(t.parent().parent(), .5, {
            height: e + 91
        }))
    })
}

function scrollBg() {
    var o = $("#topBtn");
    $(window).scroll(function() {
        $(".pall_bg").each(function() {
            var o = $(this).offset().top,
                n = $(this).height(),
                i = (winSc - o) / n * 100;
            $(this).css({
                "background-position-y": -i.toFixed(2) + "%"
            })
        }), winSc > htmlH - 216 - winH ? o.addClass("fixed") : o.removeClass("fixed")
    }), o.click(function() {
        TweenMax.to($("html, body"), .3, {
            scrollTop: 0,
            ease: es_step
        })
    });
    var n = $(".js-scr-sec"),
        s = [];
    ! function() {
        function o(i) {
            $.each(s, function(o, n) {
                i >= n[1] && void 0 === n[0].motion && (n[0].addClass("js-motion-end"), TweenMax.staggerTo(n[0].find(".js-scr-box"), .8, {
                    y: 0,
                    opacity: 1,
                    ease: es_step
                }, .2), n[0].motion = !0)
            })
        }
        $window.scroll(function() {
            o(winSc)
        }), n.each(function() {
            var o = $(this),
                n = o.offset().top - winH / 2 - 350;
            s.push([o, n])
        }), o(winSc)
    }()
}