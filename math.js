var sum = function() {
  var result = 0;
  if (arguments.length) {
    Array.prototype.slice.call(arguments)
    .forEach(function(number, index) {
      if (typeof number !== 'number') {
        throw new TypeError('Expected a number :/');
      } else {
        result += number;
      }
    });
  }

  return result;
};

var multiplication = function() {
  return Array.prototype.slice.call(arguments)
  .reduce(function(previous, current) {
    if (typeof previous !== 'number' || typeof current !== 'number') {
      throw new TypeError('Expected a number in previous and current :/');
    }

    var result = 0;
    for (var i = 0; i < previous; i++) {
      result += sum.call(null, current);
    }
    return result;
  });
};
