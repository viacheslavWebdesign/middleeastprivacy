(function($){
   
// Disable :hover on touch devices
function hasTouch() {
      return 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) {
      try {
         for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                  if (!styleSheet.rules[ri].selectorText) continue;

                  if (styleSheet.rules[ri].selectorText.match(':hover')) {
                     styleSheet.deleteRule(ri);
                  }
            }
         }
      } catch (ex) {}
}

// Fixed header on scroll
$(window).scroll(function() {    
      if ($(window).scrollTop() > 100) {
            $(".header").addClass("header_invisible");
      } else {
            $(".header").removeClass("header_invisible");
      }
    if ($(window).scrollTop() > 200) {
        $(".header").addClass("header_fixed");
    } else {
        $(".header").removeClass("header_fixed");
    }
});

// Open/close menu
$(document).on("click", ".header__toggler", function(){
      $(".header").toggleClass("header_active");
      $(".custom-body").toggleClass("custom-body_noscroll");
});

// Glow effect
if($(window).width() > 1200){
      const blob = document.getElementById("blob");

      window.onpointermove = event => { 
      const { clientX, clientY } = event;
      
      blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" });
      }       
}

// Clients slider
if ($('.clients__slider').length > 0) {
      const swiper = new Swiper('.clients__slider', {
            slidesPerView: "2",
            spaceBetween: 40,
            loop: true,
            speed: 3000,
            autoplay: {
                  delay: 1000,
                  disableOnInteraction: false,
            },
            breakpoints: {
                  768: {
                        spaceBetween: 30,
                        slidesPerView: "3",
                  },
                  992: {
                        spaceBetween: 30,
                        slidesPerView: "4",
                  },
                  1200: {
                        spaceBetween: 30,
                        slidesPerView: "5",
                  },
                  1600: {
                        spaceBetween: 30,
                        slidesPerView: "6",
                  }
            }
      });
}

// Solutions slider
if ($('.solutions__slider').length > 0 && $(window).width() <= 992){
      var swiper2 = new Swiper(".solutions__slider", {
            spaceBetween: 10,
            slidesPerView: 'auto',
            freeMode: true,
            pagination: {
                  el: ".solutions__pagination",
            },
      });
}

// Reviews slider
if ($('.reviews__slider').length > 0){
      var swiper2 = new Swiper(".reviews__slider", {
            spaceBetween: 10,
            slidesPerView: 'auto',
            freeMode: true,
            loop: true,
            navigation: {
                  nextEl: ".reviews__arrow_next",
                  prevEl: ".reviews__arrow_prev",
            },
            pagination: {
                  el: ".reviews__pagination",
            },
            breakpoints: {
                  576: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                        freeMode: {
                              enabled: true,
                              sticky: false,
                        },
                  },
                  992: {
                        freeMode: false,
                        spaceBetween: 20,
                        slidesPerView: 3,
                  },
            },
      });
}


// Insights slider
if ($('.insights__slider').length > 0){
      var swiper2 = new Swiper(".insights__slider", {
            spaceBetween: 10,
            slidesPerView: 'auto',
            freeMode: true,
            loop: true,
            navigation: {
                  nextEl: ".insights__arrow_next",
                  prevEl: ".insights__arrow_prev",
            },
            pagination: {
                  el: ".insights__pagination",
            },
            breakpoints: {
                  576: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                        freeMode: {
                              enabled: true,
                              sticky: false,
                        },
                  },
                  992: {
                        freeMode: false,
                        spaceBetween: 20,
                        slidesPerView: 3,
                  },
            },
      });
}

// Form validation
$("#requestForm").validate({
      rules: {
        requestName: "required",
        requestSurname: "required",
        requestCompany: "required",
        requestSubject: "required",
        requestEmail: {
          required: true,
          email: true
        }
      },
      messages: {
        requestName: "please fill in the fields",
        requestSurname: "please fill in the fields",
        requestCompany: "please fill in the fields",
        requestSubject: "please fill in the fields",
        email: {
          required: "please fill in the fields",
          email: "please fill in the fields"
        }
      }
    });

})(jQuery);