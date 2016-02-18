// Uppercase first letters of every word in an string
upperCaseFirstLetters("something to uppercase");
upperCaseFirstLetters("output");
upperCaseFirstLetters("   hello there   ");
upperCaseFirstLetters("allie daudt");

function upperCaseFirstLetters(aStr) {
  var cleaned = aStr.trim(); // trim in case of whitespaces
  var words = cleaned.split(" "); // removing space
  var output = []; // empty array for later
  // loop through the array to access every string
  for (var i = 0; i < words.length; i++) {
    // every word from the array
    var word = words[i];
    // uppercase the first char of each array index
    // concatenate remain of string
    var upperCased = word.charAt(0).toUpperCase() + word.slice(1);
    // add each string to the end of the array
    output.push(upperCased);
  }
  return output.join(" "); // adding space back
}
