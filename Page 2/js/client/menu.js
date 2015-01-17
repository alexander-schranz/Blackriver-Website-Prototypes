var Blackriver = Blackriver || {};

Blackriver.Menu = (function (window, document, $, undefined) {

    var options = {
        $subMenuClickItems: $('.has-sub-menu'),
        subMenuItemSelector: '.main-sub-menu',
        $subMenuItems: $('.main-sub-menu'),
        subMenuItemOpenClass: 'opened',
        subMenuOpenClass: 'opened'
    };

    function init() {
        $(options.$subMenuClickItems).click(function() {
            if (this.tagName.toUpperCase() != 'A') { // open link when item is no folder
                var $next = $(this).parent().children(options.subMenuItemSelector);
                var $el = $(this);
                if ($next.hasClass(options.subMenuOpenClass)) {
                    closeAllMenus();
                    $el.removeClass(options.subMenuItemOpenClass);
                    $next.removeClass(options.subMenuOpenClass);
                } else  {
                    closeAllMenus();
                    $el.addClass(options.subMenuItemOpenClass);
                    $next.addClass(options.subMenuOpenClass);
                }
            }
        });
    }

    function closeAllMenus() {
        options.$subMenuClickItems.removeClass(options.subMenuItemOpenClass);
        options.$subMenuItems.removeClass(options.subMenuOpenClass);
    }

    $(document).ready(function() {
        Blackriver.Menu.init();
    });

    return {
        init: init
    };
})(window, document, jQuery);
