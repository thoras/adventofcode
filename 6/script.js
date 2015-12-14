var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8').trim();

var lines = input.split('\n');

var grid = {};

lines.forEach(function (line) {

  var data = line.match(/^([\w\s]+?) (\d+),(\d+) through (\d+),(\d+)$/);

  var match = data.shift();
  var command = data.shift();

  var x1 = parseInt(data.shift(), 10);
  var y1 = parseInt(data.shift(), 10);
  var x2 = parseInt(data.shift(), 10);
  var y2 = parseInt(data.shift(), 10);

  for (var x = x1; x <= x2; x++) {

    for (var y = y1; y <= y2; y++) {

      grid[x + '_' + y] = grid[x + '_' + y] || 0;

      switch (command) {
        case 'turn on':
          grid[x + '_' + y] = 1;
          break;
        case 'turn off':
          grid[x + '_' + y] = 0;
          break;
        case 'toggle':
          grid[x + '_' + y] = 1 >> grid[x + '_' + y];
          break;
      }

    }

  }

});

var total = 0;

Object.keys(grid).forEach(function (item) {
  total += grid[item];
});

console.log(total);
