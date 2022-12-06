var fs = require('fs');
var input = fs.readFileSync('./input6.txt').toString().split('');

var answer = 0;

for (var i = 3; i < input.length - 1; i++) {
    var searchArray = [];
    searchArray.push(Array.from(input.slice(i - 2, i + 1))); // 123 diff mot 0
    searchArray.push(input.slice(i - 1, i + 1).concat(input[i - 3])); // 023 diff mot 1
    searchArray.push(input.slice(i - 3, i - 1).concat(input[i + 1])); // 013 diff mot 2
    searchArray.push(input.slice(i - 3, i)); // 012 diff mot 3

    if (
        !searchArray[0].includes(input[i-3])
        && !searchArray[1].includes(input[i-2])
        && !searchArray[2].includes(input[i-1])
        && !searchArray[3].includes(input[i])
    ) {
        answer = i + 1;
        break;
    }
}

console.log('Number of chars processed: ', answer);