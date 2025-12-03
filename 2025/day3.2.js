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
    var result = Array()
    var curIndex = 0
    for (var j = 0; j < 12; j++) {
      var remains = line.slice(curIndex, line.length-(11-j))
      var sortedRemains = Array.from(remains).sort((a,b) => b-a)
      console.log('at', curIndex, 'found', sortedRemains[0], 'new index', line.indexOf(sortedRemains[0], curIndex)+1)
      result.push(sortedRemains[0])
      curIndex = line.indexOf(sortedRemains[0], curIndex)+1
    }
    sum += parseInt(result.join(''))    
  }

  console.log('The answer is: ' + sum)
});