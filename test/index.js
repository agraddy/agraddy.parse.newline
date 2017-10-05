var path = require('path');
process.chdir(path.dirname(__filename));
var tap = require('agraddy.test.tap')(__filename);

var mod = require('../');

tap.assert.deepEqual(mod('./fixtures/crlf.txt'), ['one', 'two', 'three'], 'Should be equal.');

tap.assert.deepEqual(mod('./fixtures/lf.txt'), ['one', 'two', 'three'], 'Should be equal.');

tap.assert.deepEqual(mod('one\r\ntwo\r\nthree'), ['one', 'two', 'three'], 'Should be equal.');

tap.assert.deepEqual(mod('one\ntwo\nthree'), ['one', 'two', 'three'], 'Should be equal.');


