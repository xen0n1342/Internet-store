(function($){
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
    tabs('ul.catalog__tabs', '.catalog__tab','.catalog__content', 'catalog__tab_active', 'catalog__content_active', 'div.catalog__wrapper' );

    $('.products__item__favorite').on('click', function(){
        $($(this)).toggleClass('products__item__favorite_active');
    });

    $(function() {
        $('.filter-style').styler();
    });

    $('.catalog__form__item__title__drop, .filter__extra').on('click', function(){
        $(this).toggleClass('catalog__form__item__title__drop_active');
        $(this).next().slideToggle(200);
    });

    $(".js-range-slider").ionRangeSlider({
        type: 'double',
        min: 100000,
        max: 500000,
    });

    $('.catalog__filter__btn-grid').on('click', function(){
        $(this).addClass('catalog__filter__button_active');
        $('.catalog__filter__btn-line').removeClass('catalog__filter__button_active');
        $('.products__slider-item__wrapper').removeClass('products__slider-item__wrapper_list');
    });

    $('.catalog__filter__btn-line').on('click', function(){
        $(this).addClass('catalog__filter__button_active');
        $('.catalog__filter__btn-grid').removeClass('catalog__filter__button_active');
        $('.products__slider-item__wrapper').addClass('products__slider-item__wrapper_list');
    });

})(jQuery);
