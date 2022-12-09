var fs = require('fs');
var input = fs.readFileSync('./input9.txt').toString().split('\n');
var instructions = input.map(x => x.split(' '));
var visited = new Set();
var tail = [0, 0]; //x, y
var head = [0, 0]; //x, y

function updateVisited(x, y) {
    visited.add(`${x},${y}`);
}

function moveTail(){
    var diffX = Math.abs(head[0] - tail[0]);
    var diffY = Math.abs(head[1] - tail[1]);

    // move tail incrementally, update visited
    if (diffX == 1 && diffY > 1) {
        // diagonal vertical
        tail[0] = head[0];
    } else if (diffX > 1 && diffY == 1) {
        // diagonal horizontal
        tail[1] = head[1];
    }
    if (diffY > 1) {
        // vertical
        tail[1] = tail[1] < head[1] ? head[1] -1 : head[1] + 1; // if less, head[1]-1, if more head[1]+1
    } if (diffX > 1) {
        // horizontal
        tail[0] = tail[0] < head[0] ? head[0] -1 : head[0] + 1;
    }
    updateVisited(tail[0], tail[1]);
}

function moveHead(x, y){
    head[0] += x;
    head[1] += y;
    moveTail();
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
