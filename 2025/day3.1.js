const fs = require('node:fs');

fs.readFile('./input/day3', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var lines = data.split('\n')
  var sum = 0
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].split('')
    var sorted = Array.from(line).sort((a,b) => b-a)
    var highest = sorted[0]
    var posOfHighest = line.indexOf(highest)
    if (posOfHighest < (line.length-1)) {
      var nextHighest = line.splice(posOfHighest+1).sort((a,b)=> b-a)[0]
      console.log('found', highest, 'adding', nextHighest)
      sum += parseInt(`${highest}${nextHighest}`)
    } else {
      var nextHighest = sorted[1]
      var thirdHighest = line.splice(line.indexOf(nextHighest)+1).sort((a,b)=> b-a)[0]
      console.log('found', nextHighest, 'adding', thirdHighest)
      sum += parseInt(`${nextHighest}${thirdHighest}`)
    }
  }

  console.log('The answer is: ' + sum)
});