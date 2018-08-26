
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#naV').affix({
        offset: {
            top: 50
        }
    })

})(jQuery); // End of use strict

(function (a) {
    var e = a(window);
    a(document);
    var g = a("body"),
        d = function (a, d) {
            return "undefined" === typeof a ? d : a
        };
    a(function () {
        c = function () {};
        c(0);
        e.on("resize", c);
        a("#backToTop").on("click", "a", function (b) {
            b.preventDefault();
            a("html, body").animate({
                scrollTop: 0
            }, 1200)
        })
    });
    e.on("load", function () {
        var c = function () {
            1 < e.scrollTop() ? g.addClass("isScrolling") : g.removeClass("isScrolling")
        };
        c();
        e.on("scroll", c);
    })
})(jQuery);

 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('#features').offset().top }, 'slow');
      return false;
    });
  });


new Vue({
  el: '#widgets',
  data: {
    slides: 3
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})