// Uppercase first letters of every word in an string
upperCaseFirstLetters("something to uppercase");
upperCaseFirstLetters("output");
upperCaseFirstLetters("   hello there   ");
upperCaseFirstLetters("allie daudt");

function upperCaseFirstLetters(aStr) {
  var cleaned = aStr.trim();
  var words = cleaned.split(" ");
  var output = [];

  words.forEach(function(word) {
    var upperCased = word.charAt(0).toUpperCase() + word.slice(1);
    output.push(upperCased);
  })
  return output.join(" ");
  }
