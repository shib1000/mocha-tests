// begin a test suite of one or more tests
const srcfunctions = require("../src/arithmatic-ops.js");
const expect = require('chai').expect;
describe('#Arithmatic Operations', function () {

  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  })
  describe('#multiplication()', function () {
    // test a functionality
    it('should mutiply two numbers', function () {
      // add an assertion
      expect(srcfunctions.multiply(1, 2)).to.equal(2);
    })

    it('should mutiply multiple numbers', function () {
      // add an assertion
      //expect(srcfunctions.multiply(1, 2, 3, 4, 5)).to.equal(120);
      expect(srcfunctions.multiply(1, 2, 3, 4, 5)).to.equal(121);
    })
  })

  describe('#Addition()', function () {
    // add a test hook
    beforeEach(function () {
      // ...some logic before each test is run
    })

    // test a functionality
    it('should add two numbers', function () {
      // add an assertion
      expect(srcfunctions.sum(1, 2)).to.equal(3);
    })

    it('should add multiple numbers', function () {
      // add an assertion
      expect(srcfunctions.sum(1, 2, 3, 4, 5)).to.equal(15);
    })

  })
})

