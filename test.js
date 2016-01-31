var test = require('tap').test;
var exec = require('child_process').exec;

test('are-we-flow-yet - half', function(t) {
  exec('./are-we-flow-yet test/half', function(err, stdout, stderr) {
    var out = (function() {/*
flow files 1
non flow files 1
------------------
test/half/one.js
*/}).toString().split('\n').slice(1, -1).join('\n');
    t.equal(stdout.trim(), out);
    t.equal(err.code, 1);
    t.end();
  });
});

test('are-we-flow-yet - all', function(t) {
  exec('./are-we-flow-yet test/all', function(err, stdout, stderr) {
    var out = (function() {/*
flow files 1
non flow files 0
*/}).toString().split('\n').slice(1, -1).join('\n');
    t.equal(stdout.trim(), out);
    t.equal(err, null);
    t.end();
  });
});
