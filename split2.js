const split = require('split');
const through = require('through2');

var odd = true;

function write(buffer, encoding, next) {
  if (odd) {
    this.push(buffer.toString().toLowerCase() + '\n');
  } else {
    this.push(buffer.toString().toUpperCase() + '\n');
  }
  odd = !odd; // reverse

  next();
}

function end(done) {
  done();
}

var stream = through(write, end);

process.stdin
        .pipe(split())
        .pipe(stream)
        .pipe(process.stdout);
