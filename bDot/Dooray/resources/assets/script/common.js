$(function() {
    var ww = window.innerWidth;
    // header : gnb
    var $wrap = $('#wrap');
    $('.gnb').on('mouseenter', function() {
        if ($wrap.hasClass('white')) {
            $wrap.addClass('hover');
        }
    })
    $('.gnb').on('mouseleave', function() {
        if ($wrap.hasClass('white')) {
            $wrap.removeClass('hover');
        }
    })
    // header : language
    $('.btn-language').click(function() {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    })
    // header : sitemap
    $('#btnMenu').on('click', function() {
        $('#sitemap').addClass('active');
        $('body').addClass('modal-open');
    })
    $('#sitemapClose').on('click', function() {
        $('#sitemap').removeClass('active');
        $('body').removeClass('modal-open');
    })
    $('.sitemap__menu').on('click', function() {
        var $sitemapLnb = $(this).next(), $sitemapGnb = $(this).parent();
        $sitemapGnb.addClass('active').siblings().removeClass('active');
    })
    if (ww < 1366) {
        var $sitemapGnb = $('.sitemap__menu').parent();
        $sitemapGnb.removeClass('active');
    }
    function handleSiteMapGlobal(e) {
        if (!$(e.target).hasClass('sitemap__menu')) {
            var $sitemapGnb = $('.sitemap__menu').parent();
            $sitemapGnb.removeClass('active');
        }
    }
    // $(document).on('click', handleSiteMapGlobal);
    // sub : location
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop(),
            $header = $('.header'), $gnb = $('.gnb'), $topNav = $('.top__nav');

        if ($('.content').length !== 0) {
            var contentTop = $('.content').offset().top;
            if ($topNav.length !== 0) {
                if (scrollTop >= contentTop - 150) {
                    $topNav.addClass('fixed');
                    $header.addClass('on');
                    $gnb.addClass('hide');
                } else {
                    $topNav.removeClass('fixed');
                    $header.removeClass('on');
                    $gnb.removeClass('hide');
                }
            }
        }
    });
    // sub : category
    $('.category__button').click(function() {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    })
    $('.category__list > li').click(function(e) {
        var index = $(this).index(),
            indexContent = $(this).text();
        $('.category__button').text(indexContent);
        $('.category__button').removeClass('active');
        $('.category__list').removeClass('active');
    })
    function handleSelectorGlobal(e) {
        if (!$(e.target).hasClass('category__button')) {
            $('.category__button').removeClass('active');
            $('.category__list').removeClass('active');
        }
    }
    $(document).on('click', handleSelectorGlobal);
    // 더 보기 버튼
    $('#btnDetail').click(function() {
        var chkLangauge = $(this).parents('html').attr('lang');

        if ($('.hidecontents').hasClass('active')) {
            $(this).removeClass('active');
            if (chkLangauge === 'en') {
                $(this).html('<span>More</span>');
            } else if (chkLangauge === 'ja') {
                $(this).html('<span>もっと見る</span>');
            } else {
                $(this).html('<span>더 보기</span>');
            }
            $('.hidecontents').removeClass('active');
        } else {
            $(this).addClass('active');
            if (chkLangauge === 'en') {
                $(this).html('<span>Fold</span>');
            } else if (chkLangauge === 'ja') {
                $(this).html('<span>閉じる</span>');
            } else {
                $(this).html('<span>접기</span>');
            }
            $('.hidecontents').addClass('active');
        }
    })
    // email popup
    var $sitemap = $('#sitemap');
    $('#closePopup').on('click', function() {
        $('#emailPopup').removeClass('active');
        if (!$sitemap.hasClass('active')) {
            $('body').removeClass('modal-open');
        }  
    })
    $('#emailPopupBtn').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#emailPopup').addClass('active');
        $('body').addClass('modal-open');
    })
    $('#btnEmailPopup').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#emailPopup').addClass('active');
        $('body').addClass('modal-open');
    })
    // MAIN POPUP
	var modal = {
		todayClose : function() {
			modal.setCookie('todayPopup','Y',1);
			modal.closeModal();
		},
		getCookie : function(name) {
			var nameOfCookie = name + "=";
			var x = 0;
			while ( x <= document.cookie.length ) {
				var y = (x+nameOfCookie.length);

				if ( document.cookie.substring( x, y ) == nameOfCookie ) {
					if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
						endOfCookie = document.cookie.length;

					return unescape( document.cookie.substring( y, endOfCookie ) );
				}
				x = document.cookie.indexOf( " ", x ) + 1;
				if ( x == 0 )
					break;
			}
			return "";
		},
		setCookie : function(name, value, expiredays) {
			var todayDate = new Date();
			todayDate.setDate( todayDate.getDate() + expiredays );
			document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
		},
		openModal : function() {
			$('body').addClass('modal-open');
			$('.main-popup').fadeIn();
		},
		closeModal : function() {
            if ( $('#todaypopup').is(':checked')) {
                modal.setCookie('todayPopup','Y',1);
            }
			$('body').removeClass('modal-open');
			$('.main-popup').fadeOut();
		},
		chkModal :function() {
			var popupExist = $('body').find('.main-popup').length;
			if (popupExist !== 0) {
				if (modal.getCookie("todayPopup") != "Y" && $('.header').hasClass('header--main')) {
					modal.openModal();
				}
			}
		},
		bind: function () {
			$('#popupclose').on('click',modal.closeModal);
		},
		init : function () {
			modal.chkModal();
		}
	}
	modal.bind();
	modal.init();
});