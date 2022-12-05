var fs = require('fs');
var input = fs.readFileSync('./input2.txt').toString();
var inputFormatted = input.split('\n').map(i => i.split(' '));

var totalScore = 0;
inputFormatted.forEach(current => {
    if (current[1] == 'X') {
        // should lose
        totalScore += 0;
        if (current[0] == 'A') {
            totalScore += 3;
        }
        if (current[0] == 'B') {
            totalScore += 1;
        }
        if (current[0] == 'C') {
            totalScore += 2;
        }
    }
    else if (current[1] == 'Y') {
        // should draw
        totalScore += 3;
        if (current[0] == 'A') {
            totalScore += 1;
        }
        if (current[0] == 'B') {
            totalScore += 2;
        }
        if (current[0] == 'C') {
            totalScore += 3;
        }
    }
    else if (current[1] == 'Z') {
        // should win
        totalScore += 6;
        if (current[0] == 'A') {
            totalScore += 2;
        }
        if (current[0] == 'B') {
            totalScore += 3;
        }
        if (current[0] == 'C') {
            totalScore += 1;
        }
    }
});

console.log(totalScore);
