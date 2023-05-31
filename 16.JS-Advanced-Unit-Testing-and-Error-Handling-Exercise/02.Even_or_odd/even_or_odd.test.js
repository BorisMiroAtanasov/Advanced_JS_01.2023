const {expect} = require ('chai');

const {isOddOrEven} = require('./even_or_odd');

describe('even or odd test', function(){
    it('returns undefined , input is string', () =>{
        let input = 5
        expect(isOddOrEven(input)).to.be.undefined
    })
})


