const fs = require('node:fs');

fs.readFile('./input/day2', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var lines = data.split(',')
  var sum = 0
  var regex = /^(\d+?)\1+$/g
  for (var i = 0; i < lines.length; i++) {
      var ids = lines[i].split('-');
      for (var id = parseInt(ids[0]); id <= parseInt(ids[1]); id++) {
        var matches = id.toString().match(regex);
        if (matches) {
          sum += parseInt(id);
          console.log(id, 'match')
        }
      }
  }

  console.log('The answer is: ' + sum)
});