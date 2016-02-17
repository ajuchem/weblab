 /* ADDING CLASSES DYNAMICALLY WITH JQUERY
    TO WORK WITH TRANSITIONS AND TRANSFORMS */

$(function () {
    var block = $('.block');
    $('.button1').on('click', function() {
        block.toggleClass('rounded');

    });

    $('.button2').on('click', function() {
        block.toggleClass('moved');

    })
});