var fs = require('fs');

var input = fs.readFileSync('./input.json', 'utf-8').trim();

var matches = input.match(/([-+]?[0-9]*\.?[0-9]+)/g);

var total = 0;

matches.forEach(function (match) {

  total += parseFloat(match)

});

console.log(total);
