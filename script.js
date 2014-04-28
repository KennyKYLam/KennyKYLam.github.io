$(document).ready(function () {

$('.button').mouseenter(function () {
    
    $('.button').stop().fadeTo('fast', 0.75);
});
    
$('.button').mouseleave(function () {
    $('.button').stop().fadeTo('fast', 1);
});
    
$('.button').click(function () {
    $('.button').hide();
});


});