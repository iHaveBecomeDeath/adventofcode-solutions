var input = `104,83,142,123,87,48,102,159,122,69,127,151,147,64,152,90,117,132,63,109,27,47,7,52,59,11,161,12,148,155,129,10,135,17,153,96,3,93,82,55,34,65,89,126,19,72,20,38,103,146,14,105,53,77,120,39,46,24,139,95,140,33,21,84,56,1,32,31,28,4,73,128,49,18,62,81,66,121,54,160,158,138,94,43,2,114,111,110,78,13,99,108,141,40,25,154,26,35,88,76,145`;

var diffsOne = 0, diffsThree = 1;
var sortedInput = [0].concat(input.split(',')).sort((a,b) => a - b);

for (var i = 0; i < sortedInput.length-1; i++) {
    var lowNum = sortedInput[i], highNum = sortedInput[i+1];
    if (highNum - lowNum == 1){
        console.log('found diff of 1 between', highNum, lowNum);
        diffsOne++;
    } else if (highNum - lowNum == 3) {
        console.log('found diff of 3 between', highNum, lowNum);
        diffsThree++;
    }
}

console.log('result: ', diffsOne, diffsThree, 'becomes', diffsOne * diffsThree);