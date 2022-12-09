var fs = require('fs');
var input = fs.readFileSync('./input9.txt').toString().split('\n');
var instructions = input.map(x => x.split(' '));
var visited = new Set();
var knots = Array.from(Array(10), _ => Array(2).fill(0));

function updateVisited(x, y) {
    visited.add(`${x},${y}`);
}

function moveTail(idx){
    var head = knots[idx-1];
    var diffX = Math.abs(head[0] - knots[idx][0]);
    var diffY = Math.abs(head[1] - knots[idx][1]);

    // move tail incrementally, update visited
    if (diffX == 1 && diffY > 1) {
        // diagonal vertical
        knots[idx][0] = head[0];
    } else if (diffX > 1 && diffY == 1) {
        // diagonal horizontal
        knots[idx][1] = head[1];
    }
    if (diffY > 1) {
        // vertical
        knots[idx][1] = knots[idx][1] < head[1] ? head[1] -1 : head[1] + 1; // if less, head[1]-1, if more head[1]+1
    } if (diffX > 1) {
        // horizontal
        knots[idx][0] = knots[idx][0] < head[0] ? head[0] -1 : head[0] + 1;
    }
    if (idx == 9) {
        updateVisited(knots[idx][0], knots[idx][1]);
    }
}

function moveHead(x, y){
    knots[0][0] += x;
    knots[0][1] += y;
    for (var i = 1; i < 10; i++) {
        moveTail(i);
    }
}

instructions.forEach(cur => {
    if (cur[0] == 'L') {
        for (var i = 1; i <= cur[1]; i++){
            moveHead(-1, 0);
        }
    }
    if (cur[0] == 'R') {
        for (var i = 1; i <= cur[1]; i++){
            moveHead(1, 0);
        }
    }
    if (cur[0] == 'U') {
        for (var i = 1; i <= cur[1]; i++){
            moveHead(0, 1);
        }
    }
    if (cur[0] == 'D') {
        for (var i = 1; i <= cur[1]; i++){
            moveHead(0, -1);
        }
    }
});

console.log('Number of visited spaces:', visited.size);
