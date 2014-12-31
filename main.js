$(document).ready(function () {
    for (var i = 0; i < 100; i++) {
        makeDiv();
    };
});
///Scroll Smoothly
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//Animation by velocityjs to move stars

var isWebkit = /Webkit/i.test(navigator.userAgent),
    isChrome = /Chrome/i.test(navigator.userAgent),
    isMobile = !!("ontouchstart" in window),
    isAndroid = /Android/i.test(navigator.userAgent),
    isIE = document.documentMode;

/* Randomly generate an integer between two numbers. */
function r(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Override the default easing type with something a bit more jazzy. */
$.Velocity.defaults.easing = "easeInOutsine";

/*******************
        Dot Creation
    *******************/

/* Differentiate dot counts based on roughly-guestimated device and browser capabilities. */
var dotsCount,
    dotsHtml = "",
    $count = $("#count"),
    $dots;

if (window.location.hash) {
    dotsCount = window.location.hash.slice(1);
} else {
    dotsCount = isMobile ? (isAndroid ? 40 : 60) : (isChrome ? 175 : 125);
}

for (var i = 0; i < dotsCount; i++) {
    dotsHtml += "<div class='dot'></div>";
}

$dots = $(dotsHtml);

$count.html(dotsCount);

var $container = $("#container"),
    $browserWidthNotice = $("#browserWidthNotice");

var screenWidth = $(HTMLBodyElement).width(), //window.screen.availWidth,
    screenHeight = window.screen.availHeight * 2.5,
    chromeHeight = screenHeight - (document.documentElement.clientHeight || screenHeight);

var translateZMin = -725,
    translateZMax = 600;

var containerAnimationMap = {
    perspective: [215, 50], //215
    opacity: [0.90, 0.55]
};

/* IE10+ produce odd glitching issues when you rotateZ on a parent element subjected to 3D transforms. */
if (!isIE) {
    containerAnimationMap.rotateZ = [5, 0];
}

/* Ensure the user is full-screened; this demo's translations are relative to screen width, not window width. */
if ((document.documentElement.clientWidth / screenWidth) < 0.80) {
    $browserWidthNotice.show();
}

/*****************
        Animation
    *****************/

/* Animate the dots' container. */
$container
    .css("perspective-origin", screenWidth / 2 + "px " + ((screenHeight * 0.45) - chromeHeight) + "px")
    .velocity(containerAnimationMap, {
        duration: 800,
        loop: 1,
        delay: 0
    });

/* Special visual enhancement for WebKit browsers, which are faster at box-shadow manipulation. */
if (isWebkit) {
    $dots.css("boxShadow", "0px 0px 4px 0px #4bc2f1");
}

/* Animate the dots. */
$dots
    .velocity({
        translateX: [

    function () {
                return "+=" + r(-screenWidth / 2.5, screenWidth / 2.5)
                    },
    function () {
                return r(0, screenWidth)
                    }
   ],
        translateY: [

    function () {
                return "+=" + r(-screenHeight / 0.5, screenHeight / 0.5)
                    },
    function () {
                return r(0, screenHeight)
                    }
   ],
        translateZ: [

    function () {
                return "+=" + r(translateZMin, translateZMax)
                    },
    function () {
                return r(translateZMin, translateZMax)
                    }
   ],
        opacity: [

    function () {
                return Math.random()
                    },
    function () {
                return Math.random() + 0.1
                    }
   ]
    }, {
        duration: 6000
    })
/*.velocity("reverse", {
                easing: "easeOutQuad"
            })
            */
.velocity({
    opacity: 0
}, {
    visibility: "hidden"
})
    .appendTo($container);

//Show topnavbar

$(window).scroll(function () {
    var position = $(document).scrollTop();
    console.log(position);
    if (position >= 700) {
        $(".topnavbar").fadeIn();
        console.log("show");
    } else {
        $(".topnavbar").hide();
        console.log("hide");
    }
});



function makeDiv() {
    var divsize = Math.random() * (10 - 1) + 1;
    var color = '#2196F3';
    var staropacity = (Math.random() * (5 - 1) + 1) / 10;
    $newdiv = $('<div/>').css({
        'width': divsize + 'px',
        'height': divsize + 'px',
        'border-radius': '50%',
        'z-index': '50',
        'opacity': staropacity,
        'background-color': color
    });

    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(".jumbotron").height() - divsize)).toFixed();

    $newdiv.css({
        'position': 'absolute',
        'left': posx + 'px',
        'top': posy + 'px',
    }).appendTo('.jumbotron').fadeIn(100);
}