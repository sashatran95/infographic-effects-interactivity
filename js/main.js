var $section1 = $('.section1');
var $section2 = $('.section2');
var $section3 = $('.section3');

$section1.waypoint(function () {
  $section1.addClass('svg-pop-up');
}, {offset: '50%'});

$section2.waypoint(function () {
  $section2.addClass('svg-pop-up');
}, {offset: '50%'});

$section3.waypoint(function () {
  $section3.addClass('svg-pop-up');
}, {offset: '50%'});