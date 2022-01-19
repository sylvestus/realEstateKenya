$(document).ready(function() {
    $('#part1 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text1').removeClass('hide1');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text1').addClass('hide1');
    });
});