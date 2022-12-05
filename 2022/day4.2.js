var fs = require('fs');
var input = fs.readFileSync('./input4.txt').toString();
var assignments = input.split('\n').map(i => i.split(','));
var result = 0;

assignments.forEach(a => {
    var firstValues = a[0].split('-').map(v => parseInt(v));
    var secondValues = a[1].split('-').map(v => parseInt(v));
    var firstRange = [...Array(firstValues[1] - firstValues[0] + 1).keys()].map(x => x + firstValues[0]);
    var secondRange = [...Array(secondValues[1] - secondValues[0] + 1).keys()].map(x => x + secondValues[0]);

    if(firstRange.some(x => secondRange.includes(x) || secondRange.some(y => firstRange.includes(y)))) {
        result++;
    }
});

console.log('The total number of partially overlapped schedules is:', result);
