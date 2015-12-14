var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8').trim();

var lines = input.split(/\s+/);

var vowels = 'aeiou'.split('');

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

var blacklist = [
  'ab',
  'cd',
  'pq',
  'xy'
];

var regexp = {
  vowels: new RegExp('[' + vowels.join('') + ']', 'g'),
  double: new RegExp('(' + alphabet.map(function (char) {
    return char + char;
  }).join(')|(') + ')', 'g'),
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
