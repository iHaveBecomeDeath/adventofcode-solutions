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
      var singleclicks = clicks % 100;
      var hundreds = (clicks - singleclicks) / 100;
      var previousPosition = currentPosition;
      console.log('hundreds', hundreds, 'singles', singleclicks, 'current', currentPosition)
      if (hundreds > 0) {
        console.log('passing zero', hundreds, 'times');
        sum += hundreds;
      }
      if (direction == 'R') {
        currentPosition += singleclicks;
        if (currentPosition > 99) {
          currentPosition -= 100;
          if (currentPosition != 0 && previousPosition != 0) {
            console.log('passed 0')
            sum++;
          }
        }
      } else {
        currentPosition -= singleclicks;
        if (currentPosition < 0) {
          currentPosition += 100; 
          if (currentPosition != 0 && previousPosition != 0) {
            console.log('passed 0')
            sum++;
          }
        }
      } 
      if (currentPosition == 0) {
        console.log('at 0')
        sum++;
      }
  }

  console.log('The answer is: ' + sum);
});