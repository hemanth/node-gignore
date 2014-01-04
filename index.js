var $ = require('request');
var fs = require('fs');
module.exports = function(path, type) {
  path = path || ".";
  $('http://gitignore.io/api/' + type).
  pipe(fs.createWriteStream(path+"/.gitignore"));
}
