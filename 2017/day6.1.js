//var input = [0, 2, 7, 0];
var input = [2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14];
var seenInputs = [[]];
var inputLength = input.length;
var iterations = 0;

console.log("input length", inputLength);

while(true) {
  // check for seen inputs, and if so exit
  if (seenInputs.indexOf(input.join(",")) >= 0) {
    console.log("we've seen this before!");
    break;
  } else {
    seenInputs.push(input.join(","));    
  }
  var highestValue = Math.max(...input);
  console.log("highest value", highestValue);
  var highestIndex = input.indexOf(highestValue);
  console.log("index of highest", highestIndex);
  // clear original
  input[highestIndex] = 0;
  for (var i = 1; i <= highestValue; i++) {
    // redistribute
    // increment needs to be within bounds of 0 <= i < inputLength
    // var incrementRemainder = i % (inputLength);
    // console.log("incr remainder", incrementRemainder);
    var x = i + highestIndex;
    var currentIndex = x >= inputLength ?
      x % inputLength :
      x ;
    // var incrementor = i + highestIndex >= inputLength ? 
    //   incrementRemainder > highestIndex ?
    //     incrementRemainder - highestIndex :
    //     incrementRemainder * -1  // error: makes 2 into -2  
    //   : i ; // the first rounds
    //console.log("incrementor, i ", incrementor, i);
    // var currentIndex = highestIndex + incrementor;
    // var currentIndex = highestIndex + incrementor >= inputLength ?
    //  highestIndex - incrementor :  // once we've passed rbound, go around from zero, 2-2, 2-1 etc
    //  highestIndex + incrementor ; // the first steps are 2+1, 2+2 etc
    console.log(`adding 1 to ${input[currentIndex]}, found at ${currentIndex}`);
    input[currentIndex]++;
    //console.log(input);

  }
  // increase loop counter
  iterations++;
  //break;
}

console.log(`The results are in: ~~~ ${iterations} ~~~ redistribution rounds`);
console.log("ending array: ", input);