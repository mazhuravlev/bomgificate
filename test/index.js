const bomg = require('bomgificate');
//const b = bomg('вася и вася');
const assert = require('assert');

describe('Bomg', function() {
  describe('Test', function() {
    it('test', function() {
      const b = bomg('вася и вася');
      assert.equal(b, 'БОМЖАСЯ и БОМЖАСЯ');
    });
  });
});