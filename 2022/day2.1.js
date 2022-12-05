var fs = require('fs');
var input = fs.readFileSync('./input2.txt').toString();
var inputFormatted = input.split('\n').map(i => i.split(' '));

var totalScore = 0;
inputFormatted.forEach(current => {
    if (current[1] == 'X') {
        totalScore += 1;
        if (current[0] == 'A') {
            totalScore += 3;
            console.log('Draw')
        }
        if (current[0] == 'C') {
            totalScore += 6;
            console.log('Win')
        }
    }
    else if (current[1] == 'Y') {
        totalScore += 2;
        if (current[0] == 'B') {
            totalScore += 3;
            console.log('Draw')
        }
        if (current[0] == 'A') {
            totalScore += 6;
            console.log('Win')
        }
    }
    else if (current[1] == 'Z') {
        totalScore += 3;
        if (current[0] == 'C') {
            totalScore += 3;
            console.log('Draw')
        }
        if (current[0] == 'B') {
            totalScore += 6;
            console.log('Win')
        }
    }
});

console.log(totalScore);
