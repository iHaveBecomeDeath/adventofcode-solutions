var fs = require('fs');
var input = fs.readFileSync('./input8.txt').toString().split('\n');
var grid = input.map(x => x.split(''));
var highestVisibleScore = 0;

for (var i = 0; i < grid.length ; i++) {
    for (var j = 0; j < grid[i].length; j++) {
        // for each tree, look up down left right
        // multiply number of visible trees in each direction
        var score = [0, 0, 0, 0];
        var current = grid[i][j];
        for (var u = i - 1; u >= 0; u--) {
            score[0]++;
            if (grid[u][j] >= current) {
                break;
            }
        }
        for (var d = i + 1; d < grid.length; d++) {
            score[1]++;
            if (grid[d][j] >= current) {
                break;
            }
        }
        for (var l = j - 1; l >= 0; l--) {
            score[2]++;
            if (grid[i][l] >= current) {
                break;
            }
        }
        for (var r = j + 1; r < grid[i].length; r++) {
            score[3]++;
            if (grid[i][r] >= current) {
                break;
            }
        }
        var totalScore = score.reduce((a, b) => a * b);
        highestVisibleScore = highestVisibleScore < totalScore ? totalScore : highestVisibleScore;
    }
}

console.log('Highest score count:', highestVisibleScore);
