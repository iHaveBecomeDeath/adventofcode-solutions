var fs = require('fs');
var input = fs.readFileSync('./input1.txt').toString();
var inputFormatted = input.split('\n\n').map(i => i.split('\n'));

var totals = inputFormatted.map(i => i.reduce((total, current) => total + parseInt(current), 0));

totals.sort((a, b) => b - a);

console.log('The highest three are:', totals[0], totals[1], totals[2]);
console.log('And their total is:', totals[0] + totals[1] + totals[2]);
