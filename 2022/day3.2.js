var fs = require('fs');
var input = fs.readFileSync('./input3.txt').toString();
var rucksacks = input.split('\n');
var totalPriorities = 0;

for (var i = 0; i < rucksacks.length; i += 3) {
    var match =
        Array.from(rucksacks[i])
            .filter(el => Array.from(rucksacks[i+1]).includes(el) && Array.from(rucksacks[i+2]).includes(el));

    if (match.length) {
        var asciiValue = match[0].charCodeAt(0);
        totalPriorities +=
            asciiValue > 90
                ? asciiValue - 96
                : asciiValue - 38;
    }
}

console.log('The sum of misplaced priorities is:', totalPriorities);
