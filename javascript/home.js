const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let SIZE = 18;
if (w < 1030) {
    SIZE = 10;
} else if (w < 613) {
    SIZE = 5;
}
let screenWidth = SIZE * 51;
const positionK = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 4 }, { x: 4, y: 1 }, { x: 4, y: 5 }];
const positionE = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 1 }, { x: 2, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 1 }, { x: 3, y: 3 }, { x: 3, y: 5 }, { x: 4, y: 1 }, { x: 4, y: 3 }, { x: 4, y: 5 }];
const positionN = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }];
const positionY = [{ x: 1, y: 1 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 1 }, { x: 2, y: 3 }, { x: 3, y: 1 }, { x: 3, y: 3 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }];
const positionSpace = [];
const positionL = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }];
const positionA = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 3 }, { x: 3, y: 5 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }];
const positionM = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }];
const letters = [{ name: "K", position: positionK }, { name: "E", position: positionE }, { name: "N1", position: positionN }, { name: "N2", position: positionN }, { name: "Y", position: positionY }, { name: "Space", position: positionSpace }, { name: "L", position: positionL }, { name: "A", position: positionA }, { name: "M", position: positionM }];

//position (x,y) coordinates on cartesian plane
function moveToPosition(blockId, position) {
    let xDistance = position.x * SIZE;
    let yDistance = position.y * SIZE;
    $("#" + blockId)
        .velocity({ backgroundColor: "#4CAF50" })
        .velocity({ left: xDistance, bottom: yDistance }, { duration: 2000 })
        .velocity({ border: "none" });
}

//positions -filled parts of a letter
function printLetter(letterName, positions) {
    for (var x = 0; x < positions.length; x++) {
        var blockId = "block" + letterName + x.toString();
        $(".block-board").append("<div id='" + blockId + "'' class='block " + letterName + "'></div>");
        $("#" + blockId).velocity({ height: SIZE, width: SIZE }, { duration: 0, delay: 1500 });
        moveToPosition(blockId, positions[x]);
    }
}
// var app = angular.module('portfolio', []);
var app = angular.module('portfolio', []).config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow all domains.
        'https://**',
        'http://**'
    ]);
});
app.controller('MainController', function($scope) {
    $scope.stories = [
    	{
            title: "Dicer",
            info: "This device displays randomized results of two dices. It is built on hardware circuitry.",
            image: "https://lh3.googleusercontent.com/GclwJXo8PS-kRvdDaA27byKQB8_fL0G0mNLROZq-7U8knE0P7AwZsdgdI5-hL5-dm1AL2vL8pmw=s919-no",
        	linkAlias: "Demo Link",
        	iframe: "https://www.youtube.com/embed/BEQjbvQRbj4"
        },{
            title: "Visualizr",
            info: "This device visualizes the volume of the user's voice using a microphone. It is built on hardware circuitry.",
            image: "https://lh3.googleusercontent.com/UinwXCj47k3LdLrWJRtkomQkHyWIxuHF56IX5Pn023r4lck9vvXb-rn6nJKGo5xEZFWeKt5wdiE=s919-no",
    		linkAlias: "Demo Link",
        	iframe: "https://www.youtube.com/embed/x55SE9bxCiM"
        },{
            title: "Bidlet",
            info: "A bidding platform for sublets that is a material design based web app using angularjs.",
            image: "./res/bidlet.png",
            linkAlias: "DevPost Link",
            link: "https://devpost.com/software/bidlet"
        },{
            title: "Groovement",
            info: "A redesigned dance platform for Alzheimer's patients to improve the cognitive and physical healthness.",
            image: "./res/groovement.png"
        }];
    $(document).ready(function() {
        $(".button-collapse").sideNav();
        $('.carousel').carousel();
        $(".block-board").velocity({ width: screenWidth });
        let ufoXCoord = w / 2 - 80;
        $(".ufo").velocity({ left: ufoXCoord, top: 180 }, { duration: 2500, delay: 0, easing: "easeOutCirc" });
        letters.forEach((letter, index) => {
            const letterSpacing = index * 5;
            let letterPosition = letter.position.map(coordinate => {
                let newCoordinate = {};
                newCoordinate.x = coordinate.x + letterSpacing;
                newCoordinate.y = coordinate.y;
                return newCoordinate;
            });
            printLetter(letter.name, letterPosition);
        });
        $(".title").velocity("fadeIn", { display: "block", duration: 1500, delay: 4000 });
        $(".view-more").velocity("fadeIn", { display: "inline-block", duration: 1500, delay: 4500 });
        $(".rocket").velocity({ translateX: 1000, translateY: -1000 }, { duration: 5000, delay: 1500, easing: "easeInSine" });
    });
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
