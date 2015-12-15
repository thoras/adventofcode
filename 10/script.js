var input = '3113322113';
var rounds = 40;
// Part Two
// var rounds = 50;

for (var i = 0; i < rounds; i++) {

  var matches = input.match(/(\d)\1*/g);

  var cache = '';

  matches.forEach(function (match) {

    var times = match.length;
    var char = match[0];

    cache += times + char;

  });

  input = cache;

}

console.log(input.length);
