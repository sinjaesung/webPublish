var active_pop = "";
var focus_this = "";
var window_height = $(window).height();
var window_width = $(window).width();
var $dimmed = $(".popup_dimmed");
var $scroll_num = $(window).scrollTop();

$(document).ready(function(){


    var srchNum = 0;
    var siteNum = 0;
    var cmapNum = 0;
    var $header_dimd = $(".header_dimmed");
    var $srch = $("#search");
    var $cmap = $("#map_cc");
    var $site_map = $("#site_map");
    var $header_wrap = $(".header_wrap");
    var srch_page = $("#search").hasClass("srch_page");
    var $popup_dimd = $(".popup_dimmed");

    resizeFunction();

    if(!srch_page) {
        // 헤더 검색버튼 관련
        jQuery(".srch_Bt").on("click",function(){
            if ( srchNum == 0 ){
                $srch.addClass("zIndex").slideDown(300);
                $popup_dimd.fadeIn();

                $(".twoDepth_util").removeClass("active");
                $header_wrap.animate({height:93},300)
                $site_map.removeClass("zIndex").slideUp();
                $cmap.removeClass("zIndex").slideUp();

                srchNum = 1;
                siteNum = 0;
                cmapNum = 0;


            } else {
                $srch.slideUp();
                $popup_dimd.fadeOut();
                $srch.find("input").val('');
                srchNum = 0;
            }
            $header_dimd.fadeOut();
        })



        // 헤더 사이트맵 관련
        jQuery(".site_Bt").on("click", function () {
            if (siteNum == 0) {
                $site_map.addClass("zIndex").slideDown(300);
                $popup_dimd.fadeIn();

                $(".twoDepth_util").removeClass("active");
                $header_wrap.animate({height: 93}, 300);
                $srch.removeClass("zIndex").slideUp();
                $cmap.removeClass("zIndex").slideUp();

                $srch.find("input").val('');
                siteNum = 1;
                srchNum = 0;
                cmapNum = 0;

            } else {
                $site_map.slideUp();
                $popup_dimd.fadeOut();
                siteNum = 0;
            }
            $header_dimd.fadeOut();
        })
        $popup_dimd.on("click", function(){
            if ( !($popup_dimd.hasClass("active")) ){
                $srch.slideUp();
                $srch.find("input").val('');
                $site_map.slideUp();
                $popup_dimd.fadeOut();
                siteNum = 0;
                srchNum = 0;
               // cmapNum = 0;

            }
        })
    } else {
        jQuery(".site_Bt").on("click", function () {
            if (siteNum == 0) {
                $site_map.addClass("zIndex").slideDown(300);
                $popup_dimd.fadeIn();

                $header_wrap.animate({height: 93}, 300)
                siteNum = 1;
                srchNum = 0;
                cmapNum = 0;


            } else {
                $site_map.slideUp();
                $popup_dimd.fadeOut();
                siteNum = 0;

            }
            $header_dimd.fadeOut();
        })
        $popup_dimd.on("click", function(){
            if ( !($popup_dimd.hasClass("active")) ){
                $site_map.slideUp();
                $popup_dimd.fadeOut();
                siteNum = 0;
            }
        })
    }

        // 지도
        $(".map_Bt").on("click",function(){
			window.location ='../makita/contact.php';
			/*
            if ( cmapNum == 0 ){
                $cmap.addClass("zIndex").slideDown(300);
                $popup_dimd.fadeIn();

                $(".twoDepth_util").removeClass("active");
                $header_wrap.animate({height:93},300)
                $site_map.removeClass("zIndex").slideUp();
                $srch.removeClass("zIndex").slideUp();
                cmapNum = 1;
                siteNum = 0;
                srchNum = 0;

			$(".popup_dimmed").click(function() {
                $("#map_cc").slideUp();
                $popup_dimd.fadeOut();
				cmapNum = 0;
			
			});
            } else {
                $cmap.removeClass("zIndex").slideUp();
                $popup_dimd.fadeOut();
               //$srch.find("input").val('');
               cmapNum = 0;
            }
            $header_dimd.fadeOut(); */
        })


    // GNB Hover 관련
    jQuery("#gnb > ul > li").mouseenter(function(){
        if (  siteNum == 0 && srchNum == 0  &&	cmapNum == 0){
            $header_wrap.stop().animate({height:436},300, function(){
                $(".twoDepth_util").addClass("active");
            });
            $header_dimd.fadeIn();

        }
    })
    jQuery("#header").mouseleave(function(){
        $(".twoDepth_util").removeClass("active");
        $header_wrap.stop().animate({height:93},300);
        $header_dimd.fadeOut();
    })


    // location bar Hover 관련
    jQuery(".path_area").each(function(){
        jQuery(this).find("> button").mouseenter(function(){
            jQuery(this).addClass("hover").siblings("ul").stop().slideDown(300);
        })
        jQuery(this).mouseleave(function(){
            jQuery(this).find("> button").removeClass("hover");
            jQuery(this).find("ul").stop().slideUp(300);
        })
    })

    // 탭 버튼 영역 보더처리
    jQuery(".tabArea a.active").prev().addClass("brN");




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

    if ( $("#location").hasClass("etc_page") ){
        // product bar position 관련
        var bodyHeight = $("body").height() - 1347;
        if(jQuery(window).scrollTop() >= bodyHeight) { // 상품 바가 푸터에 도달했을 때
            jQuery("#product_bar").addClass("goal");
        } else if(jQuery(window).scrollTop() < bodyHeight) { // 상품 바가 푸터에서 떨어졌을 때
            jQuery("#product_bar").removeClass("goal");
        }
    }

})

jQuery(window).scroll(function(){
    // product bar position 관련
    var bodyHeight = $("body").height() - 1347;
    if(jQuery(window).scrollTop() >= bodyHeight) { // 상품 바가 푸터에 도달했을 때
        jQuery("#product_bar").addClass("goal");
    } else if(jQuery(window).scrollTop() < bodyHeight) { // 상품 바가 푸터에서 떨어졌을 때
        jQuery("#product_bar").removeClass("goal");
    }
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
    focus_this.focus();
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
            $(".bar_wrap_swipe .swiper-button-prev").css("display","block");
        } else {
            $(".bar_wrap_swipe .swiper-button-next").css("display","block");
            $(".bar_wrap_swipe .swiper-button-prev").css("display","block");
        }

        // 상품 바 (BODY 끝에 있어야 합니다)
		/*
        var mySwiper = new Swiper('.swiper-container',{
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
