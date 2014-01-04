var gignore = require('../index');
var fs = require('fs');
var assert = require('assert');
gignore("/tmp","node");
assert.ok(fs.existsSync('/tmp/.gitignore'),"Failed to create gitignore");
fs.unlink("/tmp/.gitignore");
