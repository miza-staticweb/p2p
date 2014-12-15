$(document).ready(function() {
    $('.biddetail-slide').slick({
        dots: false,
        infinite: false,
        variableWidth: true,
        slidesToScroll: 2,
        // arrows: false,
        prevArrow: '.biddetail-slide-prev .prev',
        nextArrow: '.biddetail-slide-next .next'
    });
});