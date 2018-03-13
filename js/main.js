$(function() {
    "use strict";




    /* ==========================================================================
   Preload
   ========================================================================== */

    $(window).load(function() {

        $("#status").fadeOut();

        $("#preloader").delay(1000).fadeOut("slow");
    });


    /* ==========================================================================
   parallax scrolling
   ========================================================================== */

		if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        		if($(window).width()>992){skrollr.init({forceHeight:false})}$(window).on("resize",function(){if($(window).width()<=	992){skrollr.init().destroy()}});$(window).on("resize",function(){if($(window).width()>992){skrollr.init({forceHeight:false})}});
    }

    /* ==========================================================================
   Smooth Scroll
   ========================================================================== */

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                return false;
            }
        }
    });

    /* ==========================================================================
   ScrollTop Button
   ========================================================================== */


    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top a').fadeIn(200);
        } else {
            $('.scroll-top a').fadeOut(200);
        }
    });


    $('.scroll-top a').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });


    /* ==========================================================================
   sticky nav
   ========================================================================== */



    var menu = $('.navbar');

    var stickyNav = menu.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height()) {
            menu.addClass('stick');
        } else {
            menu.removeClass('stick');

        }
    });

	/* ==========================================================================
	   Collapse nav bar
	   ========================================================================== */
	$(".navbar-nav li a").on('click', function() {
	    $(".navbar-collapse").collapse('hide');
	});


});
