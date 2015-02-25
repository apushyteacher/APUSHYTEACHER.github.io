/*global $*/
/*jslint sloppy:true, browser: true, white: true*/
$("h1.page-title").text("My code runs!");
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX});
});
$(window).on('mousemove', function (e) {
    $('img.logo').css({left: e.pageX,
                       top: e.pageY});
});
$(window).on('click', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    $('.logo').toggleClass('rotated');
});
var x = $(window).width() / 2;
var y = $(window).height() / 2;
var theta = 0;
var vtheta = Math.PI / 180;
var r = 60;
setInterval(function () {
    $('.logo').css({
        'left': x + r * Math.cos(theta),
        'top': y + r * Math.sin(theta)
    });
    theta = theta + vtheta;
}, 20);
