var input = `104,83,142,123,87,48,102,159,122,69,127,151,147,64,152,90,117,132,63,109,27,47,7,52,59,11,161,12,148,155,129,10,135,17,153,96,3,93,82,55,34,65,89,126,19,72,20,38,103,146,14,105,53,77,120,39,46,24,139,95,140,33,21,84,56,1,32,31,28,4,73,128,49,18,62,81,66,121,54,160,158,138,94,43,2,114,111,110,78,13,99,108,141,40,25,154,26,35,88,76,145`;
var array = input.split(',');
var highestNum = Math.max(...array);
var sortedInput = [0].concat(array).concat([1*highestNum+3]).sort((a,b) => a - b);

// this recursive brute force approach was interesting, but took a very long time to run
// so it is only included for posterity. I calculated the solution by hand once I 
// had the clue to each consecutive range and the amount of branches. Then I coded a solution.

// var possiblePaths = {};

// for (var i = 0; i < sortedInput.length-1; i++) {
//     possiblePaths[i] = {paths : []};
//     for (var j = i+1; j < sortedInput.length; j++){
//         var lowNum = sortedInput[i], highNum = sortedInput[j];
//         if (highNum - lowNum <=3) {
//             possiblePaths[i].paths.push(
//                 {
//                     low: 1* lowNum,
//                     high: 1* highNum
//                 }
//             );
//         }
//     }
// }
// function GetPathCount(targets, end) {
//     var count = 0;
//     // if (count % 10000 == 0){
//     //     console.log(' current count', count);
//     //     console.log(' current targets', targets);
//     // }
//     for (var key in targets.paths){
//         // console.log(targets.paths[key].high)
//         if (targets.paths[key].high === end) {
//             count++;
//             //console.log('found end at', targets.paths[key], ' current count', count)
//         } else {
//             //console.log('getting path for ', possiblePaths[targets.paths[key].high])
//             count+= GetPathCount(possiblePaths[targets.paths[key].high], end);
//         }
//     }
//     return count;
// }

// var foundPaths = GetPathCount(possiblePaths[0], 1*highestNum+3);
var foundPaths = 1;

var oneCount = 0;
for (var i = 0; i < sortedInput.length; i++){
    if (sortedInput[i+1] - sortedInput[i] == 1) {
        oneCount++;
    } else {
        if (oneCount == 2) {
            foundPaths *= 2;
        } else if (oneCount == 3) {
            foundPaths *= 4;
        } else if (oneCount == 4) {
            foundPaths *= 7;
        }
        oneCount = 0;
    }
}

console.log(foundPaths, 'possible paths found');