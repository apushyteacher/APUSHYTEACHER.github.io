/*global $*/
/*jslint sloppy:true, browser: true, white: true*/

var rotate = 0;

$(window).on('click', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    rotate += 45;
    $('.logo').css({transform: "rotate(" + rotate + "deg)"}); 
});
