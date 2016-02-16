// ADDING CLASSES DYNAMICALLY WITH JQUERY

$(function () {
    var block = $('.block');
    $('.button1').on('click', function() {
        block.toggleClass('rounded');

    })
})