var trumpet = require('trumpet');
var tr = trumpet();

tr.pipe(process.stdout);

tr.selectAll('.b span', function (span) {
    span.createWriteStream().end('Fuck yeah');
});


// .createWriteStream().end('toz')

var fs = require('fs');
fs.createReadStream(__dirname + '/html/read_all.html').pipe(tr);
