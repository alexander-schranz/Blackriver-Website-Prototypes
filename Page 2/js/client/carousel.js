var Blackriver = Blackriver || {};

Blackriver.Carousel = (function (window, document, $, undefined) {

    var options = {
        $carousels: $('.carousel'),
        $verticalCarousels:  $('.vertical-carousel'),
        $header:  $('.header')
    };

    function init() {
        options.$carousels.slick({
            arrows: false,
            autoplay: true
        });
        options.$verticalCarousels.slick({
            arrows: false,
            autoplay: true,
            vertical: true
        });
        options.$header.height(Blackriver.Website.getOptions().windowHeight * 0.75 - 50);

        Blackriver.Website.addResizeListener('header-slider', function(e, scrollPosition, windowWidth, windowHeight) {
            options.$header.height(windowHeight * 0.75 - 50);
        });
    }

    $(document).ready(function() {
        Blackriver.Carousel.init();
    });

    return {
        init: init
    };
})(window, document, jQuery);