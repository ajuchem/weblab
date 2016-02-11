
$(function(){

  var input = $('#guess'),
      btn = $('#guess_btn'),
      status = $('#guesses'),
      reset = $('#reset');


  var guesses = 0;
  var aNumber = getRandom();

  reset.on('click', function(){
    guesses = 0;
    aNumber = getRandom();
    input.val("");
    status.empty();
  });


  btn.on('click', function(){
    var value = parseInt(input.val());
    guesses += 1;

    // YOUR CODE HERE:
    // when game over call `tellUser(guesses, value, "turns to guess");
    // when too high `tellUser(value, "high");
    // when too low `tellUser(value, "low");

    if (value === aNumber) {
      tellUser(guesses, value, 'turns to guess');
    } else if (value > aNumber) {
      tellUser(value, 'high');
    } else if (value < aNumber) {
      tellUser(value, 'low');
    }


    // END OF YOUR CODE

    input.val("");

  });

  function tellUser(value, str, text){

    var li = $('<li class="list-group-item" />');

    if(!text){
      text = "is too";
    }

    li.html("<strong>"+ value + "</strong> "+ text + " <strong>" + str + "</strong>");
    status.prepend(li);
  }



  function getRandom(){
    return Math.floor(Math.random() * 100);
  }



});
