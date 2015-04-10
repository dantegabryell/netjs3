// Generated by CoffeeScript 1.9.1
var random;

random = require('../random_id');

describe('random', function() {
  return describe('#random_id', function() {
    it('should not be the same twice', function() {
      return random().should.not.equal(random());
    });
    return it('should be 16 digits', function() {
      return random().length.should.equal(16);
    });
  });
});
