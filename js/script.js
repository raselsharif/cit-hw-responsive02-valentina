sal();
$(function () {

  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    // ================= fix nav ================
    if (scroll > 50) {
      $("#nav").addClass("fixNav");
      $(".fixNav").fadeIn(500);
    } else {

      $("#nav").removeClass("fixNav");
      $(".fixNav").fadeOut(500);
    }
    // =============== back to top ===============

    if (scroll > 300) {
      $(".goToTop").fadeIn(500);
    } else {

      $(".goToTop").fadeOut(500);
      $(".goToTop").css("visibility", "visible");
    }

  })
  $(".goToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500)
  })

  // ==================== pre loader ===============
  $(window).on("load", function () {
    $(".preLoader").delay(2500).fadeOut(500);
    $("html, body").animate({ scrollTop: 0 }, 500);
  })
// ============ after click on menu scroll smooth ==============
var $root = $('html, body');

$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, function () {
        window.location.hash = href;
    });

    return false;
});
  // ========== count down ==========
  $("#days")
    .countdown("2024/02/14", function (event) {
      $(this).text(
        event.strftime('%D')
        // event.strftime('%D days %H:%M:%S')
      );
    });
  $("#hours")
    .countdown("2024/02/14", function (event) {
      $(this).text(
        event.strftime('%H')
        // event.strftime('%D days %H:%M:%S')
      );
    });
  $("#mins")
    .countdown("2024/02/14", function (event) {
      $(this).text(
        event.strftime('%M')
        // event.strftime('%D days %H:%M:%S')
      );
    });
  $("#sects")
    .countdown("2024/02/14", function (event) {
      $(this).text(
        event.strftime('%S')
        // event.strftime('%D days %H:%M:%S')
      );
    });

  const swiper = new Swiper('.swiper', {
    speed: 800,
    spaceBetween: 100,
    allowSlideNext: true,
    allowSlidePrev: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    allowTouchMove: true,
    autoplay: {
      delay: 1000,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.btnOne',
      prevEl: '.btnTwo',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }

  });
});

// ======= aos Animation ========
AOS.init();

// ====== sal Animation ======


