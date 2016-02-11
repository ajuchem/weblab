// $(function() {}) --> This is the same as line 9

/* Using a var would be faster compared to lines 11 and 12
var box = $('.box');
box.on('click', function() {
  alert('Awesome!');
}) */

$(document).ready(function() {

  var box = $('.box');

  box.on('click', function(event) {

    var elem = $(this);

    elem.animate({
      marginLeft: 900,
      backgroundColor: '#4D5B73'
    }, 3000, 'easeOutSine', function(){
      elem.css({
        'margin-left': 20,
        'background-color': '#f5e9d0'
      });
    });

  });

});
