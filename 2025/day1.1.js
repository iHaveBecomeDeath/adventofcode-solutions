const fs = require('node:fs');

fs.readFile('./input/day1', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var lines = data.split('\n')

  var currentPosition = 50;
  var sum = 0
  for (var i = 0; i < lines.length; i++) {
      var line = lines[i]
      var direction = line[0];
      var clicks = parseInt(line.slice(1));
      if (direction == 'R') {
        currentPosition += clicks;
        while (currentPosition > 99) {
          currentPosition -= 100;
        }
      } else {
        currentPosition -= clicks;
        while (currentPosition < 0) {
          currentPosition += 100;
        }
      }
      console.log(direction, clicks, currentPosition)
      if (currentPosition == 0) {
        sum++;
      }
  }

  console.log('The answer is: ' + sum);
});