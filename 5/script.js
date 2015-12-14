var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8').trim();

var lines = input.split(/\s+/);

var blacklist = [
  'ab',
  'cd',
  'pq',
  'xy'
];

var regexp = {
  vowels: new RegExp('[aeiou]', 'g'),
  double: new RegExp('([a-z])\\1', 'g'),
  blacklist: new RegExp('(' + blacklist.join(')|(') + ')', 'g')
};

var nice = [];

lines.forEach(function (line) {

  var stats = {
    vowels: (line.match(regexp.vowels) || []).length,
    double: (line.match(regexp.double) || []).length,
    blacklist: (line.match(regexp.blacklist) || []).length
  }

  if (stats.vowels > 2 && stats.double > 0 && stats.blacklist === 0) {
    nice.push(line);
  }

});

console.log(nice.length);
