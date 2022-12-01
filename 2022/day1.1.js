var fs = require('fs');
var input = fs.readFileSync('./input1.txt').toString();
var inputFormatted = input.split('\n\n').map(i => i.split('\n'));

var totals = inputFormatted.map(i => i.reduce((total, current) => total + parseInt(current), 0));

var highest = totals.reduce((max, current) => Math.max(max, current));

console.log('The highest number is:', highest);
