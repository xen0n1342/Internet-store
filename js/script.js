$(document).ready(function($){
    $('.banner-section__slider').slick({
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1200,
        responsive: [
            {
              breakpoint: 968,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
 
        ]
    });

    $('.products__slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="products__slider-btn products__slider-btnprev"><img src="icons/left-black.svg"></button>',
        nextArrow: '<button type="button" class="products__slider-btn products__slider-btnnext"><img src="icons/right-black.svg"></button>',
        responsive: [
        {
            breakpoint: 1301,
            settings: {
                arrows : false,        
                dots: true    
            }
        },
        {
            breakpoint: 1201,
            settings: {
                arrows : false,  
                dots: true,  
                slidesToShow: 3, 
            }
        },
        {
            breakpoint: 870,
            settings: {
                arrows : false,  
                dots: true,
                slidesToShow: 2, 
                enterPadding: '60px',
            }
        },
        {
            breakpoint: 590,
            settings: {
                arrows : false,  
                dots: true,
                slidesToShow: 1, 
            }
        }
    ]
    });

    function tabs(tabs, tab, content, tab_active, content_active, container){
        $(tabs).on('click', (tab), function() {
            $(this)
              .addClass(tab_active).siblings().removeClass(tab_active)
              .closest(container).find(content).removeClass(content_active).eq($(this).index()).addClass(content_active).fadeIn(200);
              $('.products__slider').slick('setPosition');
        });
    }

    tabs('ul.search__tabs', '.search__tab','div.search__content', 'search__tab_active', 'search__content_active', 'div.container' );
    tabs('ul.products__tabs', '.products__tab','div.products__content', 'products__tab_active', 'products__content_active', 'div.container' );
    tabs('ul.catalog__tabs', '.catalog__tab','div.catalog__content', 'catalog__tab_active', 'catalog__content_active', 'div.container' );
    tabs('ul.card__tabs', '.card__tab','div.card__content', 'card__tab_active', 'card__content_active', 'div.container' );
    tabs('ul.info__tabs', '.info__tab','div.info__content', 'info__tab_active', 'info__content_active', 'div.container' );

    $('.products__item-favorite').on('click', function(){
        $($(this)).toggleClass('products__item-favorite_active');
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
        $('.products__itemWrapper').removeClass('products__itemWrapper_list');
    });

    $('.catalog__filter__btn-line').on('click', function(){
        $(this).addClass('catalog__filter__button_active');
        $('.catalog__filter__btn-grid').removeClass('catalog__filter__button_active');
        $('.products__itemWrapper').addClass('products__itemWrapper_list');
    });

    $('.hamburger').on('click', function(){
        $('.header__menu__mobile').toggleClass('header__menu__mobile_active');
        $('.hamburger').toggleClass('hamburger_active');
    });

    $(".rate-yo").rateYo({
        ratedFill: "#1C62CD",
        normalFill: "#C4C4C4",
        starWidth: "23px",
        spacing: "7px"
    });
    $('.footer__top_drop').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('footer__top_drop_active');
    });
    $('.catalog__wrapper__aside__btn').on('click', function(){
        $(this).next().slideToggle();
    });
    $('.catalog__list__btn').on('click', function(){
        $(this).next().slideToggle();
    });
});
