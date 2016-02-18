$(document).ready(function(){

  var maxChars = 140;
  var inputBox = $('#textbox');
  var count = $('#count');

  inputBox.on('keyup', checkAndUpdateCount);

  checkAndUpdateCount();

  function checkAndUpdateCount(event){
    var currentText = inputBox.val();
    var remaining = maxChars - currentText.length;

    // count.text("update") will update count box
    // count.addClass('warn') will add a color warning via css.
    // we need to truncate text if needed and update inputBox.val(truncated_string);

    if (remaining > 20) {
      count.removeClass('warn');
    } else {
      count.addClass('warn'); // add red flag when less than 20 characters to go
    }

    if(remaining >= 0) {
      count.text(remaining); // character counter
    } else {
      count.text(0);
      var truncate = currentText.substring(0, maxChars-1); // truncate at 140
      inputBox.val(truncate);
    }

  }
});
