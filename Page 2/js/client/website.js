var Blackriver = Blackriver || {};

Blackriver.Website = (function (window, document, $, undefined) {

    var options = {
        scrollPosition: parseInt($(window).scrollTop()),
        windowWidth: parseInt($(window).width()),
        windowHeight: parseInt($(window).height()),
        scrollListener: {},
        resizeListener: {}
    };

    function init() {
    }

    // Return Options
    function getOptions() {
        return options;
    }

    // Scroll Listener Functions
    function addScrollListener(name, func) {
        options.scrollListener[name] = func;
    }

    function deleteScrollListener(name) {
        options.scrollListener.splice(name, 1);
    }

    // Resize Listener Functions
    function addResizeListener(name, func) {
        options.resizeListener[name] = func;
    }

    function deleteResizeListener(name) {
        options.resizeListener.splice(name, 1);
    }

    // Event Listeners Scroll
    $(window).scroll(function(e) {
        options.scrollPosition = parseInt($(window).scrollTop());
        $.each(options.scrollListener, function(name, func) {
            func(e, options.scrollPosition, options.windowWidth, options.windowHeight);
        });
    });

    // Event Listeners Resize
    $(window).resize(function(e) {
        options.windowWidth = parseInt($(window).width());
        options.windowHeight = parseInt($(window).height());
        $.each(options.resizeListener, function(name, func) {
            func(e, options.scrollPosition, options.windowWidth, options.windowHeight);
        });
    });

    // Init
    $(document).ready(function() {
        Blackriver.Website.init();
    });

    return {
        init: init,
        addScrollListener: addScrollListener,
        deleteScrollListener: deleteScrollListener,
        addResizeListener: addResizeListener,
        deleteResizeListener: deleteResizeListener,
        getOptions: getOptions
    };
})(window, document, jQuery);
