$(function () {
	if(!$('.lazy-loading').hasClass('active')){
		$('.lazy-loading').addClass('active');
	}
	// ios vh fix
	var UserAgent = navigator.userAgent;
	const vh = window.innerHeight * 0.01;
	if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	} else {
		document.documentElement.style.setProperty('--vh', 'unset');
	}
	
	var $wrap = $('.wrap');
	var ui = {
		handleSelector(e) {
			var p = $(e.target).parent('.selector');
			$('.selector').not(p).removeClass('active');
			p.toggleClass('active');
			$('.subtab').removeClass('active');
		},
		handleSelectorGlobal(e) {
			if (!$(e.target).hasClass('selector__title')) {
				$('.selector').removeClass('active');
			}
		},
		handleSelectorItem(e) {
			$(e.target).parents('.selector').removeClass('active');
		},
		handleGnb(e) {
			$wrap.addClass('black');
			if($(e.target).parents('.gnb')) {
				$(e.target).addClass('active').siblings().removeClass('active')
			}
		},
		handleSnb(e) {
			$wrap.removeClass('black');
			$('.gnb>a').removeClass('active')
		},
		handleSnbToGnb() {
			$('.snb__wrap>.snb__item').each(function(index){
				$(this).mouseenter(function(){
					$('.gnb>a').eq(index).addClass('active').siblings().removeClass('active')
				})
			})
		},
		handleTitle(e) {
			var select = $(e.target).html();
			if($(e.target).attr('target') != '_blank') {
				$(e.target).parents('.selector__list').siblings('.selector__title').html(select);
			}
		},
		handleBreadCrumb() {
			var height = $('.top').height();
			if ($(window).scrollTop() > height) {
				$('.breadcrumb__box').addClass('fixed');
			} else {
				$('.breadcrumb__box').removeClass('fixed');
			}
		},
		subCoverIn(e) {
			var LazyLink = $(e.target).attr('href'),
				target = $(e.target).attr('target');
			$('.lazy-loading').removeClass('active');
			$('.header').addClass('lazy');
			e.preventDefault();
			setTimeout(function (){
				if(target === '_blank' || LazyLink === '#'){
					window.open(LazyLink, "_blank");
					$('.lazy-loading').addClass('active');
					$('.header').removeClass('lazy');
					$wrap.removeClass('black');
				} else {
					location.href= LazyLink;
				}
			}, 1200)
		},
		subCoverOut() {
			$('.lazy-loading').addClass('active');
			$('.header').removeClass('lazy');
		},
		top(e) {
			e.preventDefault();
			$('body,html').animate({
				scrollTop : 0
			},800,'easeInOutExpo');
		},
		topProgress() {
				if($('.wrap').hasClass('visible')) {
					innerHeight = null;
				} else {
					innerHeight = window.innerHeight;
				}
				const progress = document.querySelector('.progress__item--circle'),
					container = document.querySelector('.container');
				var docHeight = document.body.scrollHeight - innerHeight;
				let top = window.pageYOffset;
				let perCent = Math.ceil(top*100/docHeight);
				container.setAttribute('data-scroll', perCent);
				progress.style.strokeDashoffset = 308 - (perCent/100*308);
		},
		topFade() {
			var footer = $('.footer').offset().top;
			if ($(window).scrollTop() > 50) {
				if($(window).scrollTop() + $(window).height() > footer) {
					$('.btn-top').addClass('absolute');
				} else {
					$('.btn-top').addClass('opacity');
					$('.btn-top').fadeIn();
					$('.btn-top').removeClass('absolute');
				}
			} else {
				$('.btn-top').fadeOut();
			}
		},
		topTrans() {
			if($('.article').hasClass('diff') === true) {
				const different = $('.diff');
				if($(window).scrollTop() + $(window).height() > different.offset().top + 70 && $(window).scrollTop() + $(window).height() < different.next().offset().top - 10) {
					$('.btn-top').addClass('different');
				} else {
					$('.btn-top').removeClass('different');
				}
			}
		},
		isMode() {
			if (window.innerWidth < 769) {
				return 'mo'
			} else {
				return 'pc'
			}
		},
		moTab() {
			ui.isMode();
			if(ui.isMode() == 'mo') {
				$('.tab-title').html(ui.tabTitle())
				$('.tab').addClass('mo');
				$('.tab>a').click(function (){
					$('.tab-title').html(ui.tabTitle())
				})
			} else {
				$('.tab').removeClass('mo');
			}
		},
		tabTitle() {
			return tabTitle = $('.tab').find('a.active').html();
		},
		tabActive(e) {
			var p = $(e.target).parent('.tabbox');
			$('.tabbox').not(p).removeClass('active');
			p.toggleClass('active');
			$('.subtab').removeClass('active');
		},
		tabSelect(e) {
			if (!$(e.target).hasClass('tab-title')) {
				$('.tabbox').removeClass('active');
			}
		},
		tabSelectItem(e) {
			$(e.target).parents('.tabbox').removeClass('active');
		},
		bind : function() {
			$('.btn-top').bind('click',this.top);
			$('.selector__title').bind('click',this.handleSelector);
			$('.selector__item').bind('click',this.handleSelectorItem);
			$('.selector__item').bind('click',this.handleTitle);
			$(document).bind('click',this.handleSelectorGlobal);
			$('.gnb a').bind('mouseenter',this.handleGnb);
			$('.snb').bind('mouseleave',this.handleSnb);
			$('.snb').bind('mouseenter',this.handleSnbToGnb);
			$(window).bind('scroll',this.handleBreadCrumb);
			$('.header a').bind('click',this.subCoverIn);
			$('.breadcrumb a').bind('click',this.subCoverIn);
			$(window).bind('load', this.subCoverOut);
			$(window).bind('scroll', this.topTrans);
			$(window).bind('scroll', this.topProgress);
			$(window).bind('scroll', this.topFade);
			$(window).bind('load', this.moTab);
			$(window).bind('resize', this.moTab);
			$('.tab-title').bind('click', this.tabActive);
			$(document).bind('click',this.tabSelect);
			$('.tab>a').bind('click',this.tabSelectItem);
		}
	}
	var layer = {
		layer() {
			if($('.layer').hasClass('active')) {
				$('.layer').removeClass('active');
				layer.videoRemove();
			} else {
				$('.layer').addClass('active');
			}
			layer.scrollLock();
		},
		scrollLock() {
			if($('body').hasClass('scroll-lock')) {
				$('body').removeClass('scroll-lock')
			} else {
				$('body').addClass('scroll-lock')
			}
		},
		videoRemove() {
			if($('.layer__video>iframe').attr('src') != null) {
				$('.layer__video>iframe').attr('src', null)
			}
		},
		bind : function(){
			$('[data-layer]').bind('click', this.layer)
		}
	}
	var pageName = {
		makeName() {
			let pageFullUrl = window.location.pathname,
				PageLang = pageFullUrl.slice( ( (pageFullUrl.indexOf("/") - 1) + 2) ),
				PageFullName = PageLang.slice( ( (PageLang.indexOf("/") - 1) + 2) ),
				realName = PageFullName.substring(0, PageFullName.lastIndexOf('.'));
			$('.wrap').attr('data-page', realName);
		},
		bind : function(){
			$(window).bind('load', this.makeName)
		}
		
	}
	ui.bind();
	layer.bind();
	pageName.bind();

	/* Tab */
	$.fn.tab = function (e) {
		return this.each(function () {
			var target = $(this).attr('href');
			$(this).addClass('active').siblings().removeClass('active');
			$(target).addClass('active').siblings().removeClass('active');
		})
	}
	$('.tab a').click(function (e) {
		var url = $(this).attr('href');
		if(url.indexOf('#') !== -1){
			e.preventDefault();
		}
		history.pushState(null, null, url)
		$(this).tab('show');
		$('.lazy-loading').addClass('active');
		$('.header').removeClass('lazy');
		$('.aos-init').removeClass('aos-animate')
		AOS.init();
	})
	if(!$('.tab>a').hasClass('active')){
		$('.tab a:eq(0)').tab(); // Default Tab
	}
	var hash = location.hash;
	if (hash) {
		$('.tab a[href="' + hash + '"]').tab();
	}
	// tablewrap
	function fingerClickEvent() {
		$(this).find('.tablewrap__guide').addClass('hide');
	}
	$('.tablewrap').on('click', fingerClickEvent);
	$('.tablewrap').on('scroll', fingerClickEvent);

	// mo aos reset
	var aosReset = {
		isMode() {
			if (window.innerWidth < 1024) {
				return 'mo'
			} else {
				return 'pc'
			}
		},
		moAos() {
			if(aosReset.isMode() == 'mo') {
				$('[data-aos="fade-up"]').css('transition-delay','0s');
				$('[data-aos="fade"]').css('transition-delay','0s');
			} else {
				$('[data-aos="fade-up"]').css('transition-delay','');
				$('[data-aos="fade"]').css('transition-delay','');
			}
		},
		bind : function() {
			$(window).bind('load', this.moAos);
			$(window).bind('resize', this.moAos);
		}
	}
	aosReset.bind();
	var board = {
		isBoard() {
			if($('.board').length) {
				return true
			} else {
				return false;
			}
		},
		searchParam() {
			var url = window.location;
			var param = String(url)
				search = /=/;
			return search.test(param);
		},
		viewPage() {
			var url = window.location;
			var param = String(url)
				search = /view/;
			return search.test(param);
		},
		isScroll(){
			if(board.searchParam() == true && board.isBoard() == true && board.viewPage() == false) {
				var boardList = $('.breadcrumb').offset().top;
				$('body,html').animate({
					scrollTop : boardList
				},800,'easeInOutExpo');
			}
		},
		bind : function() {
			$(window).bind('load', board.isScroll)
			$(window).bind('load', board.searchParam)
		}
	}
	board.bind();
	var notBoard = {
		isIr() {
			if($('.ir').length) {
				return true
			} else {
				return false;
			}
		},
		searchParam() {
			var url = window.location;
			var param = String(url)
				search = /=/;
			return search.test(param);
		},
		isScroll(){
			if(notBoard.searchParam() == true && notBoard.isIr() == true) {
				var irTabList = $('.breadcrumb').offset().top;
				$('body,html').animate({
					scrollTop : irTabList
				},800,'easeInOutExpo');
			}
		},
		bind : function() {
			$(window).bind('load', notBoard.isScroll)
			$(window).bind('load', notBoard.searchParam)
		}
	}
	notBoard.bind();
})