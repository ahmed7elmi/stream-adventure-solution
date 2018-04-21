const through = require('through2');

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

var stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout);


// Here is the reference solution:
/*
var through = require('through2');
var tr = through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
});
process.stdin.pipe(tr).pipe(process.stdout)
*/
