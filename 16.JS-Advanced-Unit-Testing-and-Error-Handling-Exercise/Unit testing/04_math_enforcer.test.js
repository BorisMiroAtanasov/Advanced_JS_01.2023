const { expect, assert } = require("chai");

const { mathEnforcer } = require("./04_math_enforcer");

describe("Test of mathEnforcer", function () {
  describe("test addFive method", function () {
    it("returns undefined , pram is not a number", () => {
      expect(mathEnforcer.addFive("1")).to.be.undefined;
    });

    it("returns undefined , pram is an array", () => {
      expect(mathEnforcer.addFive([])).to.be.undefined;
    });
    it("returns undefined , pram is an object", () => {
      expect(mathEnforcer.addFive({})).to.be.undefined;
    });
    it("returns undefined , pram is an undefined", () => {
      expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });
    it("returns undefined , pram is an undefined", () => {
      expect(mathEnforcer.addFive(null)).to.be.undefined;
    });
    it("returns correct answer - add five to  the number input", () => {
      expect(mathEnforcer.addFive(1)).to.be.equal(6);
    });
    it("returns correct answer - add five to a negative number input", () => {
      expect(mathEnforcer.addFive(-1)).to.be.equal(4);
    });
   it("returns correct answer - add five float number input", () => {
      expect(mathEnforcer.addFive(1.1)).to.be.equal(6.1);
    });
    it("returns correct answer - add five float negative number input", () => {
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
      });
      it("returns correct answer -1 - add five float negative number input", () => {
        expect(mathEnforcer.addFive(-6)).to.be.equal(-1);
      });
  });
  describe("test subtract method", function () {
    it("returns undefined, the param is not a number", () => {
      expect(mathEnforcer.subtractTen("1")).to.be.undefined;
    });
    it("returns undefined, the param is an array", () => {
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
    });
    it("returns undefined, the param is an array", () => {
      expect(mathEnforcer.subtractTen(null)).to.be.undefined;
    });
    it("returns undefined, the param is object", () => {
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });
    it("returns undefined, the param is an undefined", () => {
      expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });
    
    it("returns correct answer, the param is number", () => {
      expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
    });
    it("returns correct answer, the param is a negative number", () => {
      expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11);
    });
    it("returns correct answer, the param is float number", () => {
      expect(mathEnforcer.subtractTen(1.1)).to.be.equal(-8.9);
    });
    it("returns correct answer, the param is float number", () => {
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
      });
  });

  describe("test sum method", function () {
    it("returns undefined one of param is not a number", () => {
      expect(mathEnforcer.sum("1", 1)).to.be.undefined;
      expect(mathEnforcer.sum(1, "1")).to.be.undefined;
      expect(mathEnforcer.sum("1", "1")).to.be.undefined;
      expect(mathEnforcer.sum(null, null)).to.be.undefined;
    });

    it("returns undefined one of params are arrays ", () => {
      expect(mathEnforcer.sum(1, [])).to.be.undefined;
    });
    it("returns undefined one of params are object", () => {
      expect(mathEnforcer.sum({},1)).to.be.undefined;
    });
    it("returns undefined one of params are undefined", () => {
      expect(mathEnforcer.sum(1, undefined)).to.be.undefined;
    });
    it("returns undefined one of params is string , secon num", () => {
        expect(mathEnforcer.sum('1', 1)).to.be.undefined;
      });
      it("returns undefined one of params is num , secon num", () => {
        expect(mathEnforcer.sum(1, '1')).to.be.undefined;
      });
    it("returns coorrect answer , the two of the params are numbers", () => {
      expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
    });
    it("returns coorrect answer , the two of the params are numbers one is floating number", () => {
      expect(mathEnforcer.sum(1, 1.5)).to.be.equal(2.5);
    });
    it("returns coorrect answer , the two of the params are negative numbers one is floating number", () => {
      expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2);
    });
    it("returns coorrect answer 0 , the two of the params are negative numbers one is floating number", () => {
        expect(mathEnforcer.sum(0, 0)).to.be.equal(0);
      });
      it("returns coorrect answer 5 , the two of the params are negative numbers one is floating number", () => {
        expect(mathEnforcer.sum(10, -5)).to.be.equal(5);
      });
  });
});
