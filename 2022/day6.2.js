var fs = require('fs');
var input = fs.readFileSync('./input6.txt').toString().split('');

for (var i = 13; i < input.length - 1; i++) {
    if (new Set(input.slice(i - 13, i + 1)).size === 14){
        console.log('Number of chars processed: ', i + 1);
        break;
    }
}
