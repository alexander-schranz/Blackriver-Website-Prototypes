var Blackriver = Blackriver || {};

Blackriver.Carousel = (function (window, document, $, undefined) {

    var options = {
        $carousels: $('.carousel'),
        $verticalCarousels:  $('.vertical-carousel')
    };

    function init() {
        $(options.$carousels).slick({
            arrows: false,
            autoplay: true
        });
        $(options.$verticalCarousels).slick({
            arrows: false,
            autoplay: true,
            vertical: true
        });
    }

    $(document).ready(function() {
        Blackriver.Carousel.init();
    });

    return {
        init: init
    };
})(window, document, jQuery);
