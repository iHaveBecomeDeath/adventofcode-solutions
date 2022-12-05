var fs = require('fs');
var input = fs.readFileSync('./input3.txt').toString();
var rucksacks = input.split('\n');
var totalPriorities = 0;

rucksacks.forEach(r => {
    var midway = Math.ceil(r.length / 2);

    var match = Array.from(r.slice(0, midway)).filter(el => Array.from(r.slice(-midway)).includes(el));

    if (match.length) {
        // console.log('found match', match[0], match[0].charCodeAt(0));
        var asciiValue = match[0].charCodeAt(0);
        totalPriorities +=
            asciiValue > 90
                ? asciiValue - 96
                : asciiValue - 38;
    }
});


console.log('The sum of misplaced priorities is:', totalPriorities);
