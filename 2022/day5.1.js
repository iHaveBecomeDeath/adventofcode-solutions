var fs = require('fs');
var input = fs.readFileSync('./input5.txt').toString().split('\n\n');
var rows = input[0].split('\n');
var numberOfRows = parseInt(rows.pop().replace(' ', '').slice(-1));

var stacks = Array.apply(null, Array(numberOfRows)).map((el, ix) => {
    var x = [];
    console.log('Working on', el, 'at', ix)
    var startingPoint = 0 + ix * 4;
    for (i = 0; i < numberOfRows-1; i++){
        if (rows[i].length >= startingPoint) {
            console.log('Row', rows[i])
            console.log('indx', startingPoint)
            var foundString = rows[i].substring(startingPoint + 1, startingPoint + 2);
            if (foundString != ' ') {
                x.push(foundString);
            }
        }
    }
    return x;
});
var instructions = input[1].split('\n').map(i => i.split(' '));

console.log(stacks);
instructions.forEach(currentItem => {
    for (var i = 0; i < currentItem[1]; i++) {
        var fromStack = parseInt(currentItem[3])-1;
        var toStack = parseInt(currentItem[5])-1;
        stacks[toStack].unshift(stacks[fromStack].shift());
    }
});

var answer = stacks.map(s => s.length ? s[0] : '');
console.log('The answer is: ', answer.join(''));