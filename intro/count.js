// Simple program to count how many "holes" in letters

var lookup = {};

['abdegopq4690ADOPQ', 'B8'].forEach(function(group, idx) {
  group.split('').forEach(function(char){
    lookup[char] = idx + 1;
  })
})

function countHoles(str) {  // str = 'Hello'
  var holeCount = 0;
  var letters = str.split('');  // ['h', 'e', 'l', 'l', 'o']

  letters.forEach(function(char){
    if(lookup[char]) {
      holeCount += lookup[char];
    }
  });
  return holeCount;
}
