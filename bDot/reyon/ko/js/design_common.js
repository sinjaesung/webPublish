"use strict";

var winSc;
var winW;
var winH;
var $window = $(window);
var power4 = "power4.out";
var slow =  'Expo.easeOut'



$(document).ready(function(){

  var winW = $(window).width();
  var winH = $(window).height();

	layout();
	all_menu();
	aboutUs();
	
	if ( $('.wrap').hasClass('sub') )
	{
		locationJs();
		progressbar();
		loca_s();
		prd_over();
		b_over();
	  tabui();
	  prd_over();
	  faqevent();
	  visibleShow();
	  scrollEv();
	  customScroll();
	  prd_search_c();
	  ir_list();
	  gnb_resize();


	 

	}
	//
	function gnb_resize(){
	$(window).on('scroll',function(){
		var windowWidth = $(window).width();
		var scrll_l = $(this).scrollLeft();
		//console.log(windowWidth);

		if(windowWidth < 1590){

			$('.location').css('left', 0 - scrll_l);
		}else{

			$('.location').css('left', 0 );	
		}
	});
	
}

	// prd search
	function prd_search_c(){
		$('.search_tab_box li').click(function(){
			$('.search_tab_box li.on').removeClass('on');
			$(this).addClass('on');
		});

		$('.search_tab_depth02 ul li').click(function(){
		
			if( $(this).hasClass('on') == true	){
				$(this).removeClass('on');

			}else{
				$('.search_tab_depth02 ul li.on').removeClass('on');
				$(this).addClass('on');
			}	

		});

		$('.search_tab_depth03 ul li').click(function(){

			if( $(this).hasClass('on') == true	){
				$(this).removeClass('on');

			}else{
				$('.search_tab_depth03 ul li.on').removeClass('on');
				$(this).addClass('on');
			}	
			

		})

	}

	// 커스텀 스크롤
	function customScroll(){
		 $('.custom_scroll').mCustomScrollbar({
        theme: "dark",

      });
	}
	
	// motion eve
	function visibleShow(){

		$('.motion').each(function(){
			var windowOneViewHeight = $(window).height() / 1000;
			var top_of_object = $(this).offset().top + ( (windowOneViewHeight * 10)); // no also add the item height, only the offset top is needed
			var bottom_of_object = $(this).offset().top + ($(this).outerHeight() - (windowOneViewHeight * 10));
			var top_of_window = $(window).scrollTop();
			var bottom_of_window = $(window).scrollTop() + $(window).height();  

			if(bottom_of_object < top_of_window) {

				//console.log("위로올림2")
				//$(this).removeClass("active");
	
			}
			else if (top_of_object > bottom_of_window){
				//console.log("위로올림1")
				//$(this).removeClass("active");

			}   
			else if(bottom_of_object > top_of_window && top_of_object < bottom_of_window){
				$(this).addClass("active");


			}
		});
	}
	function scrollEv() {


	  var $jsScrSec = $(".js-scr-sec"); 
	  //js-scr-sec - 패럴럭스 효과 시작 박스 / 하위 js-scr-box 와 셋트

	  winSc =  $window.scrollTop();
	  function scrollEvent() {
	    $window.scroll(function () {
	        winSc = $(this).scrollTop();

	        scrollMotion(winSc);

	        var currentPercentage = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
					var currentPercentage_ = currentPercentage+'%';
					TweenMax.to('.page_progress_bar', .4, {width : currentPercentage_, ease:power4 });

	        //function.js included.
	        visibleShow()

/*
	        $(".pall_bg").each(function () {
	            var offset = $(this).offset();
	            var offsetTop = offset.top;
	            var _this_h = $(this).innerHeight();
	            var _calcPs = (winSc - offsetTop) / _this_h * 50;
	            var _calcRsPs = _calcPs + 50;

	            TweenMax.to($(this), 0, 
	              { "background-position-y" : _calcRsPs + "%",
	                ease: Expo.ease
	              }
	            ); 

	        });
*/

	    });

	    $jsScrSec.each(function(){
	        var _thisR = $(this);
	        var secTop = _thisR.offset().top;
	        var secInner = secTop - (winH / 2) - 250;
	        scrInnerStep.push([_thisR,secInner]);
	    });


	    function scrollMotion(_winSc) {

	        $.each(scrInnerStep, function (i, v) {
	            if (_winSc >= v[1]) {
	                if (v[0].motion === undefined) {
	                    TweenMax.staggerTo(v[0].find(".js-scr-box"), 1.4, {
	                        y: 0, opacity: 1, ease: slow, className:'+=js-motion-end'
	                    }, 0.6);
	                    v[0].motion = true;
	                }
	            }
	        });
	    }
	    scrollMotion(winSc)

	  }
	  
	  scrollEvent();

	}
	// body not scroll
	function scrollDisable(){
	    $('html, body').addClass('hidden');
	}
	function scrollAble(){
	    $('html, body').removeClass('hidden');
	}
	// all mune

	function all_menu(){
		$('.gnb_all > a').click(function(){
			$('#fp-nav').hide();
			var win_h = $(window).height();
			$('.dimed_all_menu').height(win_h)
			if( $('.all_depth').height() > 1 ){
				TweenMax.to('.all_depth', .4, {height: 0, ease:power4});
			}

			if( $('.header').hasClass('all_menu') ){
				
			}else{
				$('.header').addClass('all_menu');
				TweenMax.to('.dimed_all_menu', .4, {opacity: '1',/* height: win_h,*/ display: 'block', ease:power4});
				scrollDisable();
			}
		});
		$('.dimed_all_menu .dimed_close a').click(function(){
			$('#fp-nav').show();
			$('.header.all_menu').removeClass('all_menu');
			TweenMax.to('.dimed_all_menu', .4, {opacity: '',/* height: win_h,*/ display: 'none', ease:power4});
			scrollAble();
		});

	}

	// location scroll
	function loca_s(){
		var loca_tp = $('.location').offset().top;
		var loca_h = $('.location').outerHeight()
		$(window).scroll(function(){
		
			var win_tp = $(document).scrollTop();
			var loca_ab_tp = win_tp - loca_h;

			if(win_tp > loca_tp ){
				$('.location').addClass('fixed');
				

			}else{
				$('.location').removeClass('fixed');
			
			}


		});

	}

	// board list
	function b_over(){
		$('.prd_noti_list ul li').mouseenter(function(){
			$(this).addClass('on');
		});
		$('.prd_noti_list ul li').mouseleave(function(){
			$(this).removeClass('on');
		});


	}
	// prd list
	function prd_over(){
		$('.prd_list > ul > li').mouseenter(function(){
			$(this).addClass('on');
		
		});
		$('.prd_list > ul > li').mouseleave(function(){
			$(this).removeClass('on');
		
		});

	}	

	// tab
	function tabui(){
		var $tab = $('.tab');
		$tab.find('li').click(function(){
			//console.log('click');
			if( $(this).hasClass('active') ){
					
			}else{
				$(this).parents('.tab').find('li').removeClass('active');
				$(this).addClass('active');
			}

			if( $tab.next('.tab_content').is(':visible') == true ){
				var tab_idx = $(this).index();
				$('.tab_content > div').hide();
				$('.tab_content > div').eq(tab_idx).show();
			}
		});
	}

	// gnb
	function layout(){
		var $header = $('.header');
		var $gnb = $header.find('.gnb');
		var $gnb_li = $gnb.find('li'); 
/*
		$gnb_li.find('a').mouseenter(function(){
			
	
			
			$('.header_par').removeClass('type_off');

			if( $('.header').hasClass('all_menu') ){

			}else{
				TweenMax.to('.all_depth', .4, {height: 407, ease:power4});
			}

		});
		$('.all_depth').mouseleave(function(){
			TweenMax.to('.all_depth', .4, {height: 0, ease:power4});

			TweenMax.to('.header_par', .1, {background: '', delay:0.5,});
			if( $('.wrap').hasClass('main') == 1 ){
				setTimeout(function(){
						$('.header_par').addClass('type_off');	
				},500);
			}
				

			

		});   
		*/
		$gnb_li.find('a').mouseenter(function(){

			$('.header_par').removeClass('type_off');
			$('.depth_02').slideDown('fast');
			$('.header').addClass('on');
		});
		$header.mouseleave(function(){
			$('.depth_02').hide();
			$('.header').removeClass('on');
			if( $('.wrap').hasClass('main') == 1 ){
				$('.header_par').addClass('type_off');	
			
			}

		})
	}
	// grogressbar
	function progressbar(){
		$(window).on('scroll', function(){
		
		
		});
	}


	// faq event
	function faqevent(){
		$('.faq_list ul li').click(function(){
			var faq_hidden = $(this).find('.faq_hidden');
			var qa_hidden_dv = $(this).find('.faq_hidden > div');
			var qa_hidden_he = $(this).find('.faq_hidden > div').outerHeight();

			if( $(this).hasClass('on') ){
				TweenMax.to(faq_hidden, .4, {height: 0, opacity: 0, marginTop: 0, paddingTop: 0,  ease:power4});
				$(this).removeClass('on');
			}else{
				$(this).addClass('on');
				TweenMax.to(faq_hidden, .4, {height: qa_hidden_he, opacity: 1, marginTop: 40, paddingTop: 40, borderWidth: 1,  ease:power4});

			}
		

		});

	}

	//
	function ir_list(){
		$('.ir_list li').mouseenter(function(){

			$(this).addClass('on')
		});
		$('.ir_list li').mouseleave(function(){

			$(this).removeClass('on')
		});

	}

	// sub location
	function locationJs() {
	  var $selectPcBtn = $(".selepcbtn");
	  


	  $selectPcBtn.click(function (e){
	  	//console.log('click');
			e.stopPropagation();
			var _pcseleBtn = $(this);
			var _selectPcWrap = _pcseleBtn.parent(".opt.pc");
			var _pcselectLst = $(this).siblings(".optul");
			var _pcselectLength = _pcselectLst.children("li").length;
			var _pcselectHeight = 30 * _pcselectLength + 24;

			//_selectPcWrap.addClass('active');
			
		
		if (  _selectPcWrap.hasClass("active") == 1 ) {
			//console.log('cloes');
		  //close


		  TweenMax.to( _pcselectLst, 0.3, 
			{ height: 0, padding: "",  
			border: "0", ease: Expo.ease, onComplete: pcseleCls }
		  );

		  function pcseleCls() {
			_pcseleBtn.parent(".opt.pc").removeClass("active");
		  }

		} else {

		  //open
		  _pcseleBtn.parent(".opt.pc").addClass("active");

		  TweenMax.to( _pcselectLst, 0.3, 
			{ delay: 0.2, height: _pcselectHeight, padding: "12px 16px", ease: Expo.ease}
		  );

		}

	  });

	  //셀렉트를 제외한 영역 클릭시 닫기 이벤트
	  $("body").click(function () {

		TweenMax.to( $(".optul"), 0.3, 
		  { height: 0, padding: "",  
		  border: "0", ease: Expo.ease, onComplete: pcseleClsWhole }
		);        
		function pcseleClsWhole() {
		  $(".opt.pc").removeClass("active");
		}        
	  });





	  var $selectPcArray = $("ul.optul li");

	  $selectPcArray.click(function (){
		var _thisTxt = $(this).text();
		var _thisDataVal = $(this).data("value");

		var _chgtarget = $(this).parent(".optul").siblings("button.selepcbtn"); 
		var _rstSelect = $(this).parent(".optul").parent(".opt.pc");
		var _closeSelect = $(this).parent(".optul");

		//클릭 시
		// 배열에서 버튼으로 str값 이동
		_chgtarget.text( _thisTxt) 

		// 배열에서 버튼으로 data-value값 이동
		_chgtarget.attr("data-value", _thisDataVal) 

		TweenMax.to( _closeSelect, 0.3, 
		  { height: 0, padding: "",  
		  border: "0", ease: Expo.ease, onComplete: pcseleRst}
		);

		function pcseleRst() {
		  _rstSelect.removeClass("active");
		}

	  });


	}


	// main_about_us
	function aboutUs(){
		$('.section02_inbox > .desc + .about_ul ul li').mouseenter(function(){
			$(this).addClass('on');

		});
		$('.section02_inbox > .desc + .about_ul ul li').mouseleave(function(){
			$(this).removeClass('on');
		});
	}
	function newsFirst(){
		$('.news_ul ul li.news_first').mouseenter(function(){
			$(this).addClass('on');

		});

	}


});

var scrInnerStep = []; //각 페이지의 js-scr-sec 위치 저장
