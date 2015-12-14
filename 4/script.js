var md5 = require('md5');

var secret = 'yzbqklnj';

var i = 0;

while (true) {

  var input = secret + i;
  var hash = md5(input);

  if (/^[0]{5}/.test(hash)) {
    console.log(i);
    break;
  }

  i++;

}
