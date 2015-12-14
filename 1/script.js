var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8').trim();

var up = (input.match(/\(/g) || []).length;
var down = (input.match(/\)/g) || []).length;

console.log(up - down);
