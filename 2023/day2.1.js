const fs = require('node:fs');

fs.readFile('./input/day2', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var lines = data.split('\n');
  var games = lines.map(line => {
    var parts = line.split(':');
    return {
      id: parseInt(parts[0].substring(5, parts[0].length)),
      rounds: parts[1].split(';')
    }
  });
  console.log(games);

  var total = 0;
  games.forEach(game => {
    var rounds = game.rounds;
    var possible = true;
    // var totalRed = 0;
    // var totalGreen = 0;
    // var totalBlue = 0;
    rounds.forEach(round => {
      var stones = round.split(',');
      var redStones = stones.some(stone => stone.indexOf('red') > -1) 
        ? parseInt(stones.find(stone => stone.indexOf('red') > -1).split(' ').filter(el => el)[0])
        : 0;
      var greenStones = stones.some(stone => stone.indexOf('green') > -1)
        ? parseInt(stones.find(stone => stone.indexOf('green') > -1).split(' ').filter(el => el)[0])
        : 0;
      var blueStones = stones.some(stone => stone.indexOf('blue') > -1)
        ? parseInt(stones.find(stone => stone.indexOf('blue') > -1).split(' ').filter(el => el)[0])
        : 0;
        //console.log('stones', stones, 'red', redStones, 'green', greenStones, 'blue', blueStones);
        if (redStones > 12 || greenStones > 13 || blueStones > 14) {
          possible = false;
          //console.log('not possible', game.id, stones, redStones, greenStones, blueStones);
        }
    });
    if (possible) {
      total+= game.id;
    }
  });

  console.log('total sum of ids:', total);
});