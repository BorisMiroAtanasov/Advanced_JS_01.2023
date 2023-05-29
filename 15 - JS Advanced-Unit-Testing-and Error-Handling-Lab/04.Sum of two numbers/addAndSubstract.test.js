const { expect } = require("chai");
const createCalkulator = require("./addAndSubstract");

describe("Test calculator", function () {
  let calc = null;
  beforeEach(() => {
    calc = createCalkulator();
  });
  it("returns zero", () => {
    expect(calc.get()).to.equal(0);
  });
//   it("has correct structure", () => {          // можем да проверим типа но по принцип не трябва да се прави - Виктор Костадинов

//     expect(typeof calc).to.equal('object');
//     expect(calc).to.has.ownProperty('add');
//     expect(calc).to.has.ownProperty('subtract');
//     expect(calc).to.has.ownProperty('get');
//   });


  describe('Number arguments', ()=>{
   
      it("can add number", () => {
        calc.add(1);
        expect(calc.get()).to.equal(1);
      });
      it("can add number", () => {
        calc.add(1);
        calc.add(1);
        expect(calc.get()).to.equal(2);
      });
      it("can subtract number", () => {  
        calc.subtract(1);
        expect(calc.get()).to.equal(-1);
      });
      it("can add and subtract number", () => {
        calc.add(2);
        calc.subtract(1);
        expect(calc.get()).to.equal(1);
      });

  });

  describe('string arguments', ()=>{
    it('can add numbers as strings', ()=>{
        calc.add('1');
        expect(calc.get()).to.equal(1);
    });
    it('can subtracts numbers as strings', ()=>{
        calc.subtract('1');
        expect(calc.get()).to.equal(-1);
    });
  });
  describe('Test overLoading', ()=>{
    it('overloading 1', ()=>{
        calc.add('2');
        expect(calc.get()).to.equal(2);
    });
    it('overloading 2', ()=>{
        calc.add('2');
        calc.add('2');
        expect(calc.get()).to.equal(4);
    });
    it('overloading 3', ()=>{
        calc.add('1');
        calc.add('2');
        calc.add('3');
        expect(calc.get()).to.equal(6);
    });
    it('overloading 4', ()=>{
        calc.add(1);
        calc.add(2);
        calc.add(3);
        calc.subtract(4);
        expect(calc.get()).to.equal(2);
    });
  });

  
});
