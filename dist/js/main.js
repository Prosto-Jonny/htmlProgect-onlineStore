$(function(){
    
    $('.banner-section__slider').slick({
        dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="icons/arrow-left.svg" alt="left"></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="icons/arrow-right.svg" alt="right"></button>',
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
        
    });


    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="icons/arrow-black-left.svg" alt="left"></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="icons/arrow-black-right.svg" alt="right"></button>',
    });

//Фильтры

    $('.filter-style').styler();

    $('.filter__item-drop').on('click', function (){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

        // Initialize a new plugin instance for all
    // e.g. $('input[type="range"]') elements.
    $("#input_id").ionRangeSlider({
        type: "double",
        min: 100000, 
        max: 500000,
    });

    $('.catalog__filters_btngrid').on('click', function() {
        $(this).addClass('catalog__filters_button--active');
        $('.catalog__filters_btnline').removeClass('catalog__filters_button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });
    $('.catalog__filters_btnline').on('click', function() {
        $(this).addClass('catalog__filters_button--active');
        $('.catalog__filters_btngrid').removeClass('catalog__filters_button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    // звёздный рейтинг
    $(".rate-yo").rateYo({
        ratedFill: "#1C62CD"
    });
});



