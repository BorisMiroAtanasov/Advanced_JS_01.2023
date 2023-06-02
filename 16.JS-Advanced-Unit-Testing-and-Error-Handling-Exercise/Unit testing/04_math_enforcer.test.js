const {expect, assert} = require ("chai")

const {mathEnforcer} = require ("./04_math_enforcer");

describe('Test of mathEnforcer', function(){
    describe('test addFive method', function(){
        it('returns undefined with non-number input',()=>{
            expect(mathEnforcer.addFive('1')).to.be.undefined;
        });
    });
});
