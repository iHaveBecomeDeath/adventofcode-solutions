var input = [2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14];
var seenInputs = [[]];
var inputLength = input.length;
var iterations = 0;

while(true) {
  if (seenInputs.indexOf(input.join(",")) >= 0) {
    break;
  } else {
    seenInputs.push(input.join(","));    
  }

  var highestValue = Math.max(...input);
  var highestIndex = input.indexOf(highestValue);
  input[highestIndex] = 0;

  for (var i = 1; i <= highestValue; i++) {
    var increment = i + highestIndex;
    var currentIndex = increment >= inputLength ?
      increment % inputLength :
      increment ;
    input[currentIndex]++;
  }
  iterations++;
}

console.log(`The results are in: ~~~ ${iterations} ~~~ redistribution rounds`);
