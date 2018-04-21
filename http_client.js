const request = require('request');

let url = 'http://localhost:8099';
let r = request.post(url);
process.stdin.pipe(r).pipe(process.stdout);
