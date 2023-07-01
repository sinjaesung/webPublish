var sw;
var sh;
var active_pop = "";
var focus_this = "";
var window_height = $(window).height();
var window_width = $(window).width();
var $dimmed = $(".popup_dimmed");
var $scroll_num = $(window).scrollTop();

$(document).ready(function(){
    var dim_status = "close";
    var es_step = "Expo.ease";
    var $header_wrap = $(".header_wrap");
    var siteNum = 0;

    resizeFunction();
    $(window).on("load",function(e){
        $(this).on("resize",function(e){
            sw=$(this).width();
            sh=$(this).height();
            $("#main_area").height(sh-174);
            $("#wrap").height(sh);
        });
        $(this).trigger("resize");
    });

    var $sec = $("#main_area").find("section");
    var $bullet = $(".right_bullet").find("button");
    var moving_state = "stop";
    var sec_length = $sec.length;
    var current = "0";
    var duration = 0.5;
    $sec.on('mousewheel',function(e){
        var wheelDelta = e.originalEvent.wheelDelta;
        if(moving_state == "stop"){
            if(wheelDelta > 0){
                if(current>0){
                    moving_state = "slide";
                    up_slide(current--,current);
                }
                TweenMax.to($("#container"),0.3,{top:0,ease:es_step})
                TweenMax.to($("#footer"),0.3,{top:0,ease:es_step});
                $("#product_bar").removeClass("goal");
            } else {
                if(current<sec_length-1){
                    moving_state = "slide";
                    down_slide(current++,current);
                } else if(current==sec_length-1){
                    TweenMax.to($("#container"),0.3,{top:-340,ease:es_step});
                    TweenMax.to($("#footer"),0.3,{top:-340,ease:es_step});
                    $("#product_bar").addClass("goal");
                }
            }
        }
        return false;
    });

    // $("#main_area")[0].addEventListener("mousewheel", scr);
    // function scr(e){
    //     if (e.wheelDelta === undefined) {
    //         var wheel_scroll = e.originalEvent.wheelDelta;
    //     } else {
    //         var wheel_scroll = event.wheelDelta;
    //     }
    //     if(moving_state === "stop"){
    //         if(wheel_scroll  >= 120){
    //             if(current>0){
    //                 up_slide(current--,current);
    //             }
    //             TweenMax.to($("#container"),0.3,{top:0,ease:es_step});
    //             TweenMax.to($("#footer"),0.3,{top:0,ease:es_step});
    //             $("#product_bar").removeClass("goal");
    //         } else if(wheel_scroll  <= -120){
    //             if(current<sec_length-1){
    //
    //                 down_slide(current++,current);
    //             } else if(current==sec_length-1){
    //                 TweenMax.to($("#container"),0.3,{top:-277,ease:es_step});
    //                 TweenMax.to($("#footer"),0.3,{top:-277,ease:es_step});
    //                 $("#product_bar").addClass("goal");
    //             }
    //             return false;
    //         }
    //     }
    // }

    // GNB Hover 관련
    jQuery("#gnb > ul > li").mouseenter(function(){
        if (  siteNum == 0 && srchNum == 0 ){
            $header_wrap.stop().animate({height:436},300, function(){
                $(".twoDepth_util").addClass("active");
            });
            //$header_dimd.fadeIn();
        }
    })
    jQuery("#header").mouseleave(function(){
        $(".twoDepth_util").removeClass("active");
        $header_wrap.stop().animate({height:93},300);
       // $header_dimd.fadeOut();
    })

    $bullet.on("click", function(){
        var $this = $(this);
        var this_idx = $this.index();

        if ( current > this_idx ){
            up_slide(current,this_idx);
            current = this_idx;

        } else {
            down_slide(current,this_idx);
            current = this_idx;
        }
        $("#product_bar").removeClass("goal");
    })

    function up_slide(current,next){
        TweenMax.to($sec.eq(current),duration,{top:"100%","z-index":10,ease:es_step});
        TweenMax.fromTo($sec.eq(next),duration,{top:"-100%","z-index":20},{top:0,onComplete:end,ease:es_step});

        $bullet.eq(current).removeClass("on");
        $bullet.eq(next).addClass("on");
    }
    function down_slide(current,next){
        TweenMax.to($sec.eq(current),duration,{top:"-100%","z-index":10,ease:es_step});
        TweenMax.fromTo($sec.eq(next),duration,{top:"100%","z-index":20},{top:0,onComplete:end,ease:es_step});

        $bullet.eq(current).removeClass("on");
        $bullet.eq(next).addClass("on");
    }

    function up_slide_f(current,next){
        TweenMax.to($sec.eq(current),duration,{top:"100%","z-index":10,ease:es_step});
        TweenMax.fromTo($sec.eq(next),duration,{top:"-100%","z-index":20},{top:277,onComplete:end,ease:es_step});

        $bullet.eq(current).removeClass("on");
        $bullet.eq(next).addClass("on");
    }
    function down_slide_f(current,next){
        TweenMax.to($sec.eq(current),duration,{top:"-100%","z-index":10,ease:es_step});
        TweenMax.fromTo($sec.eq(next),duration,{top:"100%","z-index":20},{top:277,onComplete:end,ease:es_step});

        $bullet.eq(current).removeClass("on");
        $bullet.eq(next).addClass("on");
    }
    function end(){
        moving_state = "stop";
    }


    //메인 비쥬얼 롤링
    var visual_current = 0;
    var $main_visual = $(".fir_sec");
    var $visual_arti = $main_visual.find("article");
    var $visual_indi = $main_visual.find(".visual_indi");
    var visual_leng = $visual_arti.length;

    var arr = [];
    $visual_arti.each(function(){
        arr.push("<button>");
    });
    $visual_indi.append(arr.join(""));
    $visual_indi.find("button").eq(0).addClass("on");

    $main_visual.find(".visual_btn .left").click(function(){
        visual_current--;
        visual_rol(visual_current);
    });
    $main_visual.find(".visual_btn .right").click(function(){
        visual_current++;
        visual_rol(visual_current);
    });
    $visual_indi.find("button").click(function(){
        var cnt_btn = $(this).index();
        visual_current=cnt_btn;
        visual_rol(cnt_btn);
    });
    function visual_rol(visual_current) {
        visual_current = visual_current%visual_leng;
        TweenMax.to($visual_arti, 0.5, {opacity:0, display:"none", ease: es_step});
        TweenMax.to($visual_arti.eq(visual_current), 0.2, {opacity: 1, display:"block", ease: es_step});
        $visual_indi.find("button").removeClass("on");
        $visual_indi.find("button").eq(visual_current).addClass("on");
    }

    setInterval(function(){
        $(".visual_btn .right").trigger('click');
    }, 10000);



    // 레이어팝업 관련
    $(".popup_btn").on("click", function(e){
		console.log("action")
        e.preventDefault();
        active_pop = $($(this).attr("href"));
        focus_this = $(this);
        locateLayerPopup();
        openLayerPopup();
		$("#news_letter").show();
    })
    $(".popup_close").on("click", function(){
        closeLayerPopup();
		$("#news_letter").hide();

    })
    // esc로 레이어팝업 닫기 (편의성)
    $(document).keydown(function(e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            closeLayerPopup();
        }
    });

})


function openLayerPopup(){
    $("html, body").css("overflowY","hidden");
    $dimmed = $(".popup_dimmed");
    active_pop.addClass("active").attr("tabIndex",0).focus();
    $dimmed.fadeIn().addClass("active");

    $(window).on("resize", function(){
        window_height = $(window).height();
        window_width = $(window).width();
        $scroll_num = $(window).scrollTop();
		

        active_pop.css({
            top: window_height / 2 - active_pop.outerHeight() / 2 + $scroll_num,
            left: window_width / 2 - active_pop.outerWidth() / 2
        })
    })
}
function closeLayerPopup(){
    $("html, body").css("overflowY","visible");
    $(".popup").removeClass("active").find("input").val('');
    $dimmed.fadeOut().removeClass("active");
    //focus_this.focus();
}
function locateLayerPopup(){
    window_height = $(window).height();
    window_width = $(window).width();
    $scroll_num = $(window).scrollTop();

    active_pop.css({
        top: window_height / 2 - active_pop.outerHeight() / 2 + $scroll_num,
        left: window_width / 2 - active_pop.outerWidth() / 2
    })
}

function resizeFunction(){
    $(window).on("resize", function(){
        if ($(window).width() > 1320){
            $("#header").removeClass("resize");
            $("#location").removeClass("resize");
            $(".header_wrap").removeClass("resize");
            $(".bar_wrap_swipe").removeClass("resize");
        } else {
            $("#header").addClass("resize");
            $("#location").addClass("resize");
            $(".header_wrap").addClass("resize");
            $(".bar_wrap_swipe").addClass("resize");
        }

        if ($(window).width() > 1530){
            $(".bar_wrap_swipe .swiper-button-next").css("display","block");
            $(".bar_wrap_swipe .swiper-button-next").css("display","block");
        } else {
            $(".bar_wrap_swipe .swiper-button-next").css("display","block");
            $(".bar_wrap_swipe .swiper-button-prev").css("display","block");
        }

        // 상품 바 (BODY 끝에 있어야 합니다)
        /*var mySwiper = new Swiper('.swiper-container',{
            slidesPerView: 12,
            spaceBetween: 0,
            loop: false,
            slidesPerGroup: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
			breakpoints: {
				1600: {
					slidesPerView: 14,
					spaceBetween: 0,
				},
				1500: {
					slidesPerView: 13,
					spaceBetween: 0,
				},
				1400: {
					slidesPerView: 14,
					spaceBetween: 0,
				},
				1300: {
					slidesPerView: 13,
					spaceBetween: 0,
				},
				1200: {
					slidesPerView: 12,
					spaceBetween: 0,
				},
				1150: {
					slidesPerView: 10,
					spaceBetween: 0,
				}
			}

        });*/
    })
    $(window).trigger("resize");
}

$(document).ready(function(){
    $(".popup_close").on("click", function(){
        $("body").css({
            position: "relative",
            width: "100%"
        })
        $(".popup").removeClass("active").find("input").val('');
        $("html, body").css("overflowY","visible");
        $(".popup_dimmed").fadeOut().removeClass("active");
        return false;
    })
})