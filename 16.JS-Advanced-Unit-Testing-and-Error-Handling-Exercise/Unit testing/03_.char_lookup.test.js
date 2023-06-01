const {expect, assert} = require ("chai")

const {lookupChar} = require ("./03_.char_lookup");

describe('Unit testing Cahr LookUp', function(){
    it('Returns undefined - first param is not string and second param is not a Number',()=>{
        let string = 5;
        let index = '5'
        expect(lookupChar(string,index)).to.be.undefined;
    });
    it('Returns undefined - first param is not string and second param is a Number',()=>{
        let string = 5;
        let index = 0
        expect(lookupChar(string,index)).to.be.undefined;
    });
    it('Returns undefined - first param is num and second param is a num',()=>{
        let string = 1;
        let index = 1
        expect(lookupChar(string,index)).to.be.undefined;
    });
    it('Returns Incorect index - first is a string and second param is a float num',()=>{
        let string = 'aaa';
        let index = 1.2;
        expect(lookupChar(string,index)).to.be.undefined;
    });
    it('Returns undefided - first is a string and second string',()=>{
        let string = 'aaa';
        let index = '2';
        expect(lookupChar(string,index)).to.be.undefined;
    });

    it('Returns Incorect index - first is a string and second param is not in range',()=>{
        let string = 'aaa';
        let index = 10;
        expect(lookupChar(string,index)).to.be.equal('Incorrect index');
    });
    it('Returns Incorect index - first is a string and second param is not in range negative num',()=>{
        let string = 'aaa';
        let index = -10;
        expect(lookupChar(string,index)).to.be.equal('Incorrect index');
    });
    it('Returns Incorect index - first is a string and second param equal to the string length',()=>{
        let string = 'aaa';
        let index = 3;
        expect(lookupChar(string,index)).to.be.equal('Incorrect index');
    });


    it('Returns undefined - first is a empty string and second param is  in range',()=>{
        let string = '';
        let index = 1;
        expect(lookupChar(string,index)).to.be.equal('Incorrect index');
    });

    it('Returns undefined - first is not corekt type and second param is  in range',()=>{
        let string = [1,1,1];
        let index = 1;
        expect(lookupChar(string,index)).to.be.undefined
    });

    it('Returns undefined - first is not corekt type and second param is  in range',()=>{
        let string = {aaa: 1};
        let index = 1;
        expect(lookupChar(string,index)).to.be.undefined;
    });


    
    it('Returns correct- first param is string , second param is num in range',()=>{
        let string = 'Hello'
        let index = 1;
        expect(lookupChar(string,index)).to.be.equal('e');
    });
    


})


