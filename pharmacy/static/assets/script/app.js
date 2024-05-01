let videoCircle = document.querySelector('.video-layer');
$('.hm-banner').on('mousemove scroll', function (e) {
    let posLeft = (e.pageX - videoCircle.offsetWidth / 2) / 9;
    let posTop = (e.pageY - videoCircle.offsetHeight / 2) / 9;
    videoCircle.style.left = posLeft + 'px';
    videoCircle.style.top = posTop + 'px';
});

$('.hm-banner').on('mouseleave', function (e) {
    videoCircle.style.left = 0 + 'px';
    videoCircle.style.top = 0 + 'px';
});



/**
 * ------------------------------------------------------------
 * Preloader
 * ------------------------------------------------------------
 */
$('body').css('overflow', 'hidden');
$(window).on('load', function () {
    $('.preloader-progressbar .progress-bar').css('width', '100%');
    setTimeout(function () {
        $('.preloader').delay(700).fadeOut('slow');
        $('body').css('overflow', 'auto');
    });
});



/**
 * ------------------------------------------------------------
 * DOM Ready
 * ------------------------------------------------------------
 */
$(function () {

    setTimeout(() => {
        $('.hm-banner__video').addClass('animate');
    }, 1000)
    setTimeout(() => {
        $('.hm-banner').addClass('animate');
    }, 2000);

    /**
     * ---------------------------------------------------
     * Search Toggler
     * ---------------------------------------------------
     */
    $('.search-toggler').on('click', function () {
        $('.search-panel').addClass('search-panel__open');
        $('body').addClass('overflow-hidden');
    });
    $('.search-panel__close').on('click', function () {
        $('.search-panel').removeClass('search-panel__open');
        $('body').removeClass('overflow-hidden');
    })
    /**
    * ---------------------------------------------------
    * Scroll Animation
    * ---------------------------------------------------
    */
    // $('.animate').scrolla({
    //     // default
    //     mobile: true, // disable animation on mobiles
    //     once: true, // only once animation play on scroll
    //     animateCssVersion: 4 // used animate.css version (3 or 4)
    // });

    /**
     * ---------------------------------------------------
     * Menu Toggler - Mobile Menu
     * ---------------------------------------------------
     */
    let toggler = document.querySelector('.js-menu-toggler');
    let mainMenu = document.querySelector('.offcanvas-menu');
    let menuClose = document.querySelector('.js-menu-close');
    let bodyEl = document.querySelector('body');
    toggler.addEventListener('click', function () {
        mainMenu.classList.add('menu-open');
        bodyEl.classList.add('overflow-hidden');
    })
    menuClose.addEventListener('click', function () {
        mainMenu.classList.remove('menu-open');
        bodyEl.classList.remove('overflow-hidden');
    })

    /**
     * ---------------------------------------------------
     * Menu Links - Mobile Menu
     * ---------------------------------------------------
     */
    $(".dropdown-link").on("click", function () {
        $(this).parent().toggleClass("active"),
            $(this).next().toggleClass("is-active");
        var currentTitle = $(this).text();
        $(this).next().find(".offcanvas-menu__header span").html(currentTitle)
    });

    $(".btn-previous-link").on("click", function () {
        $(this).closest(".offcanvas-menu__dropmenu").removeClass("is-active");
    });

    /**
     * ---------------------------------------------------
     * Megamenu
     * ---------------------------------------------------
     */
    $('.megamenu-link').on('mouseenter', function () {
        $(this).addClass('active');
        $(this).find('.megameu-block').addClass('megamenu--open').animate({ duration: 1000 })
        // $(this).find('.megameu-block__container').animate({ height: '100%', duration: 2000 })
    });
    $('.megamenu-link').on('mouseleave', function () {
        $(this).removeClass('active');
        $(this).find('.megameu-block').removeClass('megamenu--open').animate({ duration: 1000 })
    })


    /**
     * ---------------------------------------------------
     * Brand Logo - carousel
     * ---------------------------------------------------
     */
    var swiperBrandLogo = new Swiper(".brand-logo-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        effect: "fade",
    });
    /**
     * ---------------------------------------------------
     *Swiper Bathroom Space - carousel
     * ---------------------------------------------------
     */
    var swiperbathroomSpace = new Swiper(".carousel-bathroom-space", {
        pagination: {
            el: ".swiper-paginations-block",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        parallax: true,
        speed: 500,
        autoplay: {
            delay: 2000
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            576: {
                slidesPerView: 2.5,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        }
    });

    /**
     * ---------------------------------------------------
     * Kitchen Space
     * ---------------------------------------------------
     */
    const carouselKitchenSpace = new Swiper('.carousel-kitchen-space', {
        loop: true,
        speed: 1000,
        autoplay: {
            enabled: true,
            delay: 1500
        },
        breakpoints: {
            0: {
                slidesPerView: 1.8,
                spaceBetween: 14
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            992: {
                slidesPerView: 3.5,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 25,
            }
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /**
     * ---------------------------------------------------
     * Our Projects - Carousel
     * ---------------------------------------------------
     */
    const carouselOurProjects = new Swiper('.carousel-project-space', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000
        },
        breakpoints: {
            0: {
                slidesPerView: 1.8,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            640: {
                slidesPerView: 2.5,
                spaceBetween: 25,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 25,
            }
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /**
     * ---------------------------------------------------
     * Testimonials
     * ---------------------------------------------------
     */
    const carouselTestimonials = new Swiper('.testimonial-carousel', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /**
     * ---------------------------------------------------
     * Filter Panel
     * ---------------------------------------------------
     */
    $('.filter-toggler').on('click', function () {
        $('.filter-panel').addClass('filter-panel--open');
        $('body').addClass('overflow-hidden');
        setTimeout(() => {
            $('.filter-blocks').addClass('opacity-in');
        }, 100);
    });
    $('.filter-panel__close').on('click', function () {
        $('.filter-blocks').removeClass('opacity-in');
        setTimeout(() => {
            $('.filter-panel').removeClass('filter-panel--open');
        }, 100);
        $('body').removeClass('overflow-hidden');
    });
    /**
     * ---------------------------------------------------
     * Floating Label
     * ---------------------------------------------------
     */
    $('.floating-label').on('focus', function () {
        $(this).parent().addClass('active');
    });
    $('.floating-label').on('blur', function () {
        if ($(this).val() != '') {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });
    /**
     * ---------------------------------------------------
     * Title Margin
     * ---------------------------------------------------
     */
    function containerSpacer() {
        let containerWidth = $('.container').innerWidth();
        let screenWidth = $(window).innerWidth();
        let containerMargin = (screenWidth - containerWidth) / 2;
        let marginSpace = document.querySelectorAll('.paragraph-block__header ');
        marginSpace.forEach((item) => {
            item.style.setProperty('--marginSpace', `${containerMargin}px`);
        });
    }
    function searchPanelMargin() {
        let searchMarginSpace = document.querySelector('.search-panel');
        let offsetMargin = document.querySelector('.navbar-top').offsetHeight;

        searchMarginSpace.style.setProperty('--searchTopSpace', `${offsetMargin}px`);
    }
    function stickyHeader() {
        let scrollPos = $(window).scrollTop();
        let headerHeight = $('header').height();
        if (scrollPos > headerHeight) {
            $('.navbar-main').addClass('sticky-header');

        } else {
            $('.navbar-main').removeClass('sticky-header');

        }

    }

    $(window).on('load resize', function () {
        containerSpacer();
        searchPanelMargin();
    });
    $(window).on('scroll load', function () {
        stickyHeader();
    });

    /**
     * ----------------------------------------------------------
     * Inputfield Switcher
     * ----------------------------------------------------------
     */
    $('#phoneInput,#phoneInputProfile').letteringInput({});


    /**
     * ----------------------------------------------------------
     * Video on Hover
     * ----------------------------------------------------------
     */
    let sectionVideo = $('.hm-video video');
    $('.hm-video').on('mouseenter', function () {
        $(sectionVideo).get(0).play();

    });
    $('.hm-video').on('mouseleave', function () {
        $(sectionVideo).get(0).pause();
        // setTimeout(function () {
        //     $(sectionVideo).get(0).currentTime = 0
        // }, 1000)
    });

    /**
     * ----------------------------------------------------------
     * Filter Results
     * ----------------------------------------------------------
     */
    // // Checkbox
    // $('.filter-blocks .form-check-input-check').each(function () {
    //     if ($(this).prop("checked") == true) {
    //         let resultLabel = $(this).closest('.form-check').find('label').text();
    //         let resultNode = document.createElement('div');
    //         resultNode.classList.add("result-badge-check");
    //         resultNode.textContent = resultLabel;
    //         $('.filter-blocks-result__body').append(resultNode)
    //     }
    // });
    // // Radio Button
    // $('.filter-blocks .form-check-input-radio').each(function () {
    //     if ($(this).prop("checked") == true) {
    //         let resultLabel = $(this).closest('.form-check').find('label').text();
    //         let resultNode = document.createElement('div');
    //         resultNode.classList.add("result-badge-radio");
    //         resultNode.textContent = resultLabel;
    //         $('.filter-blocks-result__body').append(resultNode)
    //     }
    // });
    // // Checkbox
    // $('.filter-blocks .form-check-input-check').on('change', function () {
    //     let resultLabel = $(this).closest('.form-check').find('label').text();
    //     let resultNode = document.createElement('div');
    //     resultNode.classList.add("result-badge-check");
    //     resultNode.textContent = resultLabel;
    //     $('.filter-blocks-result__body').append(resultNode)
    // });
    // // Radio Button
    // $('.filter-blocks .form-check-input-radio').on('change', function () {
    //     $('.filter-blocks-result__body .result-badge-radio').remove()
    //     let resultLabel = $(this).closest('.form-check').find('label').text();
    //     let resultNode = document.createElement('div');
    //     resultNode.classList.add("result-badge-radio");
    //     resultNode.textContent = resultLabel;
    //     $('.filter-blocks-result__body').append(resultNode)
    // });

});


/**
 * ---------------------------------------------------
 * Suggestion on Search
 * ---------------------------------------------------
 */

$(function () {
    let searchSuggestionLength = $('.search-ul-list li').length;
    if (searchSuggestionLength > 1) {
        $('.search-ul-list').css('display', 'block')
    } else {
        $('.search-ul-list').css('display', 'none')
    }
});

$('.search-ul-list').on('DOMSubtreeModified', function (event) {
    let searchSuggestionLength = $('.search-ul-list li').length;
    if (searchSuggestionLength > 0) {
        $('.search-ul-list').css('display', 'block')
    } else {
        $('.search-ul-list').css('display', 'none')
    }
});




function fitViewport() {
    let navbarHeight = $('header').height();
    let viewportFrameHeight = $(window).height();
    let minViewportHeight = viewportFrameHeight - navbarHeight;
    $('.hm-banner__container').css('--viewportHeight', `${minViewportHeight}px`);
}
$(window).on('load resize', function () {
    fitViewport()
});



// let clipMaskImage = document.querySelectorAll('.imageClipMask');
// const clipMaskObserver = new IntersectionObserver(function (entries) {
//     entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('active')
//         } else {
//             entry.target.classList.remove('active')
//         }
//     });
// });
// // start observing
// clipMaskImage.forEach((images) => {
//     clipMaskObserver.observe(images);
// })
