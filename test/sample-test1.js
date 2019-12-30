// begin a test suite of one or more tests
const srcfunctions = require("../src/string-ops.js");
const expect = require('chai').expect;
describe('#String Operations()', function () {
  describe('#String reversal', function () {
    // add a test hook
    beforeEach(function () {
      // ...some logic before each test is run
    })

    // test a functionality
    it('Reverse a String', function () {
      // add an assertion
      expect(srcfunctions.reverse("hello")).to.equal("olleh");
    })

    it('Reverse a Phrase', function () {
      // add an assertion
      //expect(srcfunctions.reverse("hello sam")).to.equal("mas olleh");
      expect(srcfunctions.reverse("hello sam")).to.equal("mas olleh ");

    })
  })

  describe('#String Length', function () {
    // add a test hook
    beforeEach(function () {
      // ...some logic before each test is run
    })

    // test a functionality
    it('Length of a String', function () {
      // add an assertion
      expect(srcfunctions.length("hello")).to.equal(5);
    })

    it('Length of a Phrase', function () {
      // add an assertion
      expect(srcfunctions.length("hello sam")).to.equal(9);
    })
  })

})
