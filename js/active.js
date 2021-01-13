

(function ($) {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // :: 2.0 NAVIGATION MENU ACTIVE CODE
    jQuery(function ($) {
        'use strict';

        // RESPONSIVE NAVIGATION
        function navResponsive() {

            let navbar = $('.navbar .items');
            let menu = $('#menu .items');

            menu.html('');
            navbar.clone().appendTo(menu);

            $('.menu .fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
        }

        navResponsive();

        $(window).on('resize', function () {
            navResponsive();
        })

        // PREVENT DROPDOWN
        $('.menu .dropdown-menu').each(function () {
            var children = $(this).children('.dropdown').length;
            $(this).addClass('children-' + children);
        })

        $('.menu .nav-item.dropdown').each(function () {
            var children = $(this).children('.nav-link');
            children.addClass('prevent');
        })

        $(document).on('click', '#menu .nav-item .nav-link', function (e) {

            if ($(this).hasClass('prevent')) {
                e.preventDefault();
            }

            var nav_link = $(this);

            nav_link.next().toggleClass('show');

            if (nav_link.hasClass('smooth-anchor')) {
                $('#menu').modal('hide');
            }
        })
    });

    // :: 3.0 STICKY HEADER ACTIVE CODE
    $window.on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.navbar').addClass('navbar-sticky');
            $('.navbar .navbar-nav.action .btn').addClass('btn-bordered');
            $('.navbar .navbar-nav.action .btn').removeClass('btn-bordered-white');
        } else {
            $('.navbar').removeClass('navbar-sticky');
            $('.navbar .navbar-nav.action .btn').removeClass('btn-bordered');
            $('.navbar .navbar-nav.action .btn').addClass('btn-bordered-white');
        }
    });

    $window.on('scroll', function () {
        $('.navbar-sticky').toggleClass('hide', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
    });

    // :: 4.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

}(jQuery));