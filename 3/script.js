var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8').trim();

var map = {};

var x = 0;
var y = 0;

var dropPresent = function () {
  var key = x + '_' + y;
  map[key] = (map[key] || 0) + 1;
};

dropPresent();

input.split('').forEach(function (direction) {

  switch (direction) {

    // north (^)
    case '^':
      x -= 1;
      break;

    // south (v)
    case 'v':
      x += 1;
      break;

    // east (>)
    case '>':
      y += 1;
      break;

    // west (<)
    case '<':
      y -= 1;
      break;

  }

  dropPresent();

});

var count = Object.keys(map).length;

console.log(count);
