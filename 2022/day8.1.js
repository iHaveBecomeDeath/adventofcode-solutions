var fs = require('fs');
var input = fs.readFileSync('./input8.txt').toString().split('\n');
var grid = input.map(x => x.split(''));
var cols = [];
for (var i = 0; i < grid.length; i++) {
    cols.push(grid.map(g => g[i]))
}
var visibleCount = grid[0].length * 2 + (grid.length-2) * 2;

for (var i = 1; i < grid.length - 1; i++) {
    // rows, excluding first and last
    for (var j = 1; j < grid[i].length - 1; j++) {
        // columns, exluding first and last
        // for each tree, look up down left right
        var above = cols[j].filter((e, ix) => ix < i);
        if (above.every(a => a < grid[i][j])) {
            console.log('visible from above', i, j);
            visibleCount++;
            continue;
        }
        var below = cols[j].filter((e, ix) => ix > i);
        if (below.every(b => b < grid[i][j])) {
            console.log('visible from below', i, j);
            visibleCount++;
            continue;
        }
        var left = grid[i].filter((e, ix) => ix < j);
        if (left.every(l => l < grid[i][j])) {
            console.log('visible from left', i, j);
            visibleCount++;
            continue;
        }
        var right = grid[i].filter((e, ix) => ix > j);
        if (right.every(r => r < grid[i][j])) {
            console.log('visible from right', i, j);
            visibleCount++;
            continue;
        }
    }
}

console.log('Number of visible trees:', visibleCount);
