var split = require('split');
var through2 = require('through2');
process.stdin
    .pipe(split())
    .pipe(through2(function (line, _, next) {
        console.dir(line.toString());
        next();
    }));
