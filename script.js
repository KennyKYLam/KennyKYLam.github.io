$(document).ready(function () {
    $('#home').css('display', 'block');

$('.button').mouseenter(function () {
    
    $(this).stop().fadeTo('fast', 0.75);
});
    
$('.button').mouseleave(function () {
    
    $(this).stop().fadeTo('fast', 1);
});
    
$('#workButton').click(function () {
    if($('#work').css('display') === 'none')
    {
        $('#workButton').css('opacity', '0.75');
        $('.section').css('display', 'none');
        $('#work').css('display', 'block');
        
    }
    else
    {
        $('#workButton').stop().fadeTo('fast', '1');
        $('#work').css('display', 'none');
    }
});

$('#volunteeringButton').click(function () {
    if($('#volunteering').css('display') === 'none')
    {
        $('#volunteeringButton').css('opacity', '0.75');
        $('.section').css('display', 'none');
        $('#volunteering').css('display', 'block');
        
    }
    else
    {
        $('#volunteeringButton').stop().fadeTo('fast', '1');
        $('#volunteering').css('display', 'none');
    }
});

    
    $('#activitiesButton').click(function () {
    if($('#activities').css('display') === 'none')
    {
        $('#activitiesButton').css('opacity', '0.75');
        $('.section').css('display', 'none');
        $('#activities').css('display', 'block');
        

    }
    else
    {
        $('#activitiesButton').stop().fadeTo('fast', '1');
        $('#activities').css('display', 'none');
    }
});

    
    $('#educationButton').click(function () {
    if($('#education').css('display') === 'none')
    {
        $('#educationButton').css('opacity', '0.75');
        $('.section').css('display', 'none');
        $('#education').css('display', 'block');
        
    }
    else
    {
        $('#educationButton').stop().fadeTo('fast', '1');
        $('#education').css('display', 'none');
    }
});

    
    $('#summaryButton').click(function () {
    if($('#summary').css('display') === 'none')
    {
        $('#summaryButton').css('opacity', '0.75');
        $('.section').css('display', 'none');
        $('#summary').css('display', 'block');
        
    }
    else
    {
        $('#summaryButton').stop().fadeTo('fast', '1');
        $('#summary').css('display', 'none');
    }
});

});
