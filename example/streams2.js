var gutter = require('../');
var through2 = require('through2');
var stream = through2();
stream.push('a');
stream.push('b');
stream.push('c');

var out = gutter({
    name : 'greetings',
    version : [1,2,3],
    greetings : stream,
    beep : 'boop'
});
out.pipe(process.stdout);

setTimeout(function () {
    stream.push('d');
    stream.push(null);
}, 10);