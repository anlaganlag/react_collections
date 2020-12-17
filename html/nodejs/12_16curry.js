var curry = require('lodash/curry');

var match = curry(function(pattern, str) {
  return str.match(pattern);
});

var replace = curry(function(pattern, replacement, str) {
  return str.replace(pattern, replacement);
});

var filter = curry(function(f, list) {
  return list.filter(f);
});

var map = curry(function(f, list) {
  return list.map(f);
});


console.log(match(/\s+/g, 'hello   world'))