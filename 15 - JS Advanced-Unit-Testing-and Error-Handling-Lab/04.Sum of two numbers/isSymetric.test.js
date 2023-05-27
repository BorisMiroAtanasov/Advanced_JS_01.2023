const { expect } = require("chai");

const isSymmetric = require("./isSymetric");

describe("Symmetric checker", function () {
  it("return true for simmetric array", () => {
    const arr = [1, 2, 2, 1];
    expect(isSymmetric(arr)).to.be.true;
  });

  it("returns false for non symmetric array", () => {
    const arr = [1, 2, 3];
    expect(isSymmetric(arr)).to.be.false;
  });
  it("returns false for arrray argument ", () => {
    const data = 123;
    expect(isSymmetric(data)).to.be.false;
  });
});

// R.D.
// describe("Symmetry Checker", () => {                            // describe() Като първи параметър подаваме името на цялостния тест
//     // Като втори параметър е функцията
// it("Test 1: works with symmetric numeric array", () => {            // it() Като първи параметър подаваме името на самият тест, като втори е функцията
// expect(isSymmetric([1, 2, 2, 1])).to.be.true;           // Очакваме резултата от функцията isSymmetric с подаден параметър да върне true
// });
// });
