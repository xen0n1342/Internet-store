$(document).ready(function(){
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        cssEase: 'linear',
        mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1200
    });

    $('.banner-section__slider-item').slick({
        dots: false,
        cssEase: 'linear',
        mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1200,
        arrows: false,
        fade: true,
    });

    $('.products__slider').slick({
        prevArrow: '<button type="button" class="products__slick-prev"><img src="icons/left-black.svg"></button>',
        nextArrow: '<button type="button" class="products__slick-next"><img src="icons/right-black.svg"></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1200,
    });
    

    function tabs(tabs, tab, content, tab_active, content_active, container){
        $(tabs).on('click', (tab), function() {
            $(this)
              .addClass(tab_active).siblings().removeClass(tab_active)
              .closest(container).find(content).removeClass(content_active).eq($(this).index()).addClass(content_active).fadeIn(200);
              $(".products__slider").slick('slickSetOption', 'adaptiveHeight', true, true);
        });
    }

    tabs('ul.search__tabs', '.search__tab','div.search__content', 'search__tab_active', 'search__content_active', 'div.container' );
    tabs('ul.products__tabs', '.products__tab','.products__content', 'products__tab_active', 'products__content_active', 'div.products__wrapper' );

    $('.products__item__favorite').on('click', function(){
        $($(this)).toggleClass('products__item__favorite_active');
    });
});