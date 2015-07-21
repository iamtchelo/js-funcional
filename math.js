var sum = function() {
  var result = 0;
  if (arguments.length) {
    Array.prototype.forEach.call(arguments, function(number) {
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
  if (arguments.length) {
    return Array.prototype.reduce.call(arguments, function(previous, current) {
      if (typeof previous !== 'number' || typeof current !== 'number') {
        throw new TypeError('Expected a number in previous and current :/');
      }

      var result = 0;
      for (var i = 0; i < previous; i++) {
        result += sum.call(null, current);
      }

      return result;
    });
  }
};
