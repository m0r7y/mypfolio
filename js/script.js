$(function(){
    $('#skills li').mouseenter(function () {
        $(this).css('opacity', 1);
    })
    $('#skills li').mouseleave(function () {
        $(this).css('opacity', 0.5);
    })
});