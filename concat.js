const concat = require('concat-stream');

concatStream = concat(goData);

process.stdin.pipe(concatStream);


function goData (data) {
  console.log(data.toString().split('').reverse().join(''));
}
