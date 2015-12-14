var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8').trim();

var lines = input.split(/\s+/);

var total = 0;

lines.forEach(function (line) {

  var data = line.split('x');

  var length = data.shift();
  var width = data.shift();
  var height = data.shift();

  var surfaces = [
    2 * length * width,
    2 * width * height,
    2 * height * length,
  ];

  var surface = surfaces.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);

  var slack = Math.min.apply(null, surfaces) / 2;

  total += surface + slack;

});

console.log(total);
