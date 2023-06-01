const {expect} = require ('chai');

const {isOddOrEven} = require('./02_even_or_odd');

describe('even or odd test', function(){
   

    it("returns even", () =>{
        let input = 'dasa'
        //expect(isOddOrEven(input)).to.equal('odd')
        expect(isOddOrEven(input)).to.equal('even')
    });

    it("returns odd", () =>{
        let input = 'dasad'
        //expect(isOddOrEven(input)).to.equal('odd')
        expect(isOddOrEven(input)).to.equal('odd')
    });

    it("returns undefiend", () =>{
        let input = 5
        //expect(isOddOrEven(input)).to.equal('odd')
        expect(isOddOrEven(input)).to.be.undefined
    });


})




