$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        var $target = $('html, body');
        $target.animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000);
    });

    
    $('#up').on('click', function () {
        var $target = $('html, body');
        $target.animate({
            scrollTop: $target.scrollTop = 0
        }, 500);
    });

    function scrollToTop(scrollDuration) {
        const scrollHeight = window.scrollY,
            scrollStep = Math.PI / (scrollDuration / 15),
            cosParameter = scrollHeight / 2;
        var scrollCount = 0,
            scrollMargin,
            scrollInterval = setInterval(function () {
                if (window.scrollY != 0) {
                    scrollCount = scrollCount + 1;
                    scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                    window.scrollTo(0, (scrollHeight - scrollMargin));
                }
                else clearInterval(scrollInterval);
            }, 15);
    }

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});