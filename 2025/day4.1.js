const fs = require('node:fs');

fs.readFile('./input/day4', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var lines = data.split('\n')
  var sum = 0
  for (var y = 0; y < lines.length; y++) {
    var line = lines[y]
    for (var x = 0; x < line.length; x++) {
      if (line[x] != "@") {
        console.log('no roll, not counting')
        continue
      }
      var adjacent = 0;
      if (x > 0) {
        if (line[x-1] == "@") {
          adjacent++
        }
        if (y > 0) {
          if (lines[y-1][x-1] == "@") {
            adjacent++
          }
        }
      }
      if (y > 0) {
        if (lines[y-1][x] == "@") {
          adjacent++
        }
        if (x < line.length) {
          if (lines[y-1][x+1] == "@") {
            adjacent++
          }
        }
      }
      if (x < line.length) {
        if (line[x+1] == "@") {
          adjacent++
        }
        if (y < lines.length-1) {
          if (lines[y+1][x+1] == "@") {
            adjacent++
          }
        }
      }
      if (y < lines.length-1) {
        if (lines[y+1][x] == "@") {
          adjacent++
        }
        if (x > 0) {
          if (lines[y+1][x-1] == "@") {
            adjacent++
          }
        }
      }

      if (adjacent < 4) {
        console.log('pos x', x, 'y', y, 'is valid')
        sum++
      }
    }
  }

  console.log('The answer is: ' + sum)
});