import { should } from 'chai';
import { range } from 'lodash';
import { describe, it, beforeEach } from 'mocha';
import kDifference from './kDifference';

should();

describe('kDifference', function() {
  it('should return 0 for empty array', function() {
    kDifference([], 1).should.equal(0);
  });

  it('should return correct value for simple case', function() {
    kDifference([5, 2, 4, 3, 1], 1).should.equal(4);
  });

  it('should return correct value for case with double pairs', function() {
    kDifference([5, 5, 2, 4, 3, 1, 1], 2).should.equal(3);
  });

  it('should return correct value for big arrays', function() {
    const testArray = range(10).reduce((memo, val) => {
      for (var i = 0; i < 10000; i++) {
        memo.push(val);
      }
      return memo;
    }, []);
    kDifference(testArray, 1).should.equal(9);
  });

  it('should return correct value for big arrays with unique values', function() {
    const testArray = range(10000).reduce((memo, val) => {
      memo.push(10000 - val);
      return memo;
    }, []);
    kDifference(testArray, 1).should.equal(9999);
  });

  it('should throw value for non-positive integers', function() {
    (function() { kDifference([], -2) }).should.Throw(Error, 'k value provided is not a positive integer');
  });
});
