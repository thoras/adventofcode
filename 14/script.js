var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8').trim();

var lines = input.split('\n');

var time = 2503;

var reindeers = [];

lines.forEach(function (line) {

  var data = line.match(/^(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds\.$/);

  var match = data.shift();

  var name = data.shift();
  var speed = parseInt(data.shift(), 10);
  var duration = parseInt(data.shift(), 10);
  var rest = parseInt(data.shift(), 10);

  var distance = 0;
  var traveled = 0;

  do {

    if ((time - traveled) > duration) {
      distance += speed * duration;
      traveled += duration;
    } else {
      distance += speed * (time - traveled);
      traveled += (time - traveled);
    }

    if ((time - traveled) > rest) {
      traveled += rest;
    } else {
      traveled += (time - traveled);
    }

  } while (traveled < time);

  reindeers.push({
    name: name,
    distance: distance
  });

});

reindeers.sort(function (a, b) {
  if (a.distance === b.distance) {
    return 0;
  } else if (a.distance > b.distance) {
    return 1;
  } else {
    return -1;
  }
});

var furthest = reindeers.pop();

console.log(furthest.distance);
