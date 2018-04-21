const http = require('http');
const through = require('through2');

let server = http.createServer(requestHandler);
server.listen(process.argv[2]);

function requestHandler(req, res) {
  let transformStream = through(write, end);
  if (req.method === 'POST') {
    req.pipe(transformStream).pipe(res);
  } else {
    res.end('SEND ME A POST');
  }
}

function write(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}
