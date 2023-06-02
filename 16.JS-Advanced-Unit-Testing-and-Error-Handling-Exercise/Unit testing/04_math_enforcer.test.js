const {expect, assert} = require ("chai")

const {mathEnforcer} = require ("./04_math_enforcer");

describe('Test of mathEnforcer', function(){
    describe('test addFive method', function(){
        it('returns undefined , pram is not a number',()=>{
            expect(mathEnforcer.addFive('1')).to.be.undefined;
        });
        it('returns correct answer - add five to  the number input',()=>{
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
        });
    });
    describe('test subtract method', function(){
        it('returns undefined, the param is not a number',() =>{
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        });
        it('returns correct answer, the param is number',() =>{
            expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
        });

    });

    describe('test sum method', function(){

    });
});
