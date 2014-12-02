$(document).ready(function() {
    $.fn.slides = function (opts) {
        var allSlides = $(this).find('.slide'),
            currSlide = $(this).find('.containers .active'),
            slidePaginationTmp = ['<div class="center-menu slide-pagination"><ul class="menu-container">'],
            slidePaginations,
            intervalID = '',
            intervalTime = 3000,
            animTime = 800;

        for (var i = 0; i < allSlides.length; i++) {
            slidePaginationTmp.push('<li class="menu-item"></li>');
        };
        slidePaginationTmp.push('</ul></div>');
        $(this).append(slidePaginationTmp.join(''));
        slidePaginations = $(this).find('.slide-pagination li');

        currSlide = currSlide.length == 0 ? $(this).first('.slide') : currSlide;
        slidePaginations.removeClass('active');
        $(slidePaginations.get(currSlide.index())).addClass('active');

        var animTo = function (nextNode) {
            var tmpCurrNode = currSlide;

            tmpCurrNode.animate({
                opacity: 0,
            }, animTime, function() {
                tmpCurrNode.hide();
                tmpCurrNode.removeClass('active');
                nextNode.addClass('active');
            });

            nextNode.css({ display: "block", opacity: 0 }).animate({ opacity: 1 }, animTime);
            currSlide = nextNode;

            slidePaginations.removeClass('active');
            $(slidePaginations.get(currSlide.index())).addClass('active');
        };

        var initSlideBox = function () {
            clearInterval(intervalID);

            intervalID = setInterval(function(){
                var nextNode = currSlide.next('.slide');
                nextNode = nextNode.length == 0 ? $('.containers .slide').first() : nextNode;

                animTo(nextNode);
            }, intervalTime);
        };

        $(this).delegate('.slide-pagination li', 'click', function(event) {
            var index = $(this).index();
            
            animTo($(allSlides.get(index)));
            initSlideBox();
        });

        initSlideBox();
    };

    $('.slides').slides();
});