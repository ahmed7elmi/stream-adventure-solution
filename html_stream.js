const trumpet = require('trumpet');
const through = require('through2');

// through2 functions
function write(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

let tr = trumpet();

tr.selectAll('.loud', function (span) {
  let th = through(write, end);
  let stream = span.createStream();
  stream.pipe(th).pipe(stream);
});


// ref solution --> but this do it for the first selection only:

// let loud = tr.select('.loud').createStream();
//   loud.pipe(through(function (buf, _, next) {
//       this.push(buf.toString().toUpperCase());
//       next();
//   })).pipe(loud);


process.stdin.pipe(tr).pipe(process.stdout);
