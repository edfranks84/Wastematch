
/*!
  Paper Collapse v0.4.0

  Collapsible paper cards.

  Made with love by bbo - ©2015 Alexander Rühle
  MIT License http://opensource.org/licenses/MIT
 */

(function() {
  (function($) {
    'use strict';
    $.fn.paperCollapse = function(options) {
      var settings;
      settings = $.extend({}, $.fn.paperCollapse.defaults, options);
      $(this).find('.dash-tile__title').add(settings.closeHandler).click(function() {
        if ($(this).closest('.dash-tile').hasClass('active')) {
          settings.onHide.call(this);
          $(this).closest('.dash-tile').removeClass('active');
          $(this).closest('.dash-tile').find('.dash-tile__content').slideUp(settings.animationDuration, settings.onHideComplete);
        } else {
          settings.onShow.call(this);
          $(this).closest('.dash-tile').addClass('active');
          $(this).closest('.dash-tile').find('.dash-tile__content').slideDown(settings.animationDuration, settings.onShowComplete);
        }
      });
      return this;
    };
    $.fn.paperCollapse.defaults = {
      animationDuration: 400,
      easing: 'swing',
      closeHandler: '.collapse-card__close_handler',
      onShow: function() {},
      onHide: function() {},
      onShowComplete: function() {},
      onHideComplete: function() {}
    };
  })(jQuery);

}).call(this);
