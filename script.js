$(document).ready(function () {

$('.button').mouseenter(function () {
    
    $(this).stop().fadeTo('fast', 0.75);
});
    
$('.button').mouseleave(function () {
    $(this).stop().fadeTo('fast', 1);
});
    
$('.button').click(function () {
    $(this).hide();
});


});