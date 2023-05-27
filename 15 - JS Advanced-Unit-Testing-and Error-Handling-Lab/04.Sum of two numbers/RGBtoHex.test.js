const {expect} = require ('chai');

const rgbToHexColor = require('./RGBtoHex');


describe('RGBtoHex function', function(){
    it ('returns color - black', ()=>{
        expect(rgbToHexColor(0,0,0)).to.be.equal("#000000");
    });
    it ('returns color - wite', ()=>{
        expect(rgbToHexColor(255,255,255)).to.be.equal("#FFFFFF");
    });
    it ('returns color - radnom', ()=>{
        expect(rgbToHexColor(104, 104, 169)).to.be.equal("#6868A9");
    });

    it ('returns color - radnom', ()=>{
        expect(rgbToHexColor(104, 104, 169)).to.be.equal("#6868A9");
    });

    it ('returns undefined, misiing param', ()=>{
        expect(rgbToHexColor(0,0)).to.be.undefined
        expect(rgbToHexColor(0)).to.be.undefined
        expect(rgbToHexColor()).to.be.undefined

    });
    it ('returns undefined, out of range', ()=>{
        expect(rgbToHexColor(0,0, 256)).to.be.undefined
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined

    });
    it ('returns undefined, out of range below zero , negativ Number', ()=>{
        expect(rgbToHexColor(-1,0, 0)).to.be.undefined
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined

    });
    it ('returns undefined, for float arguments', ()=>{
        expect(rgbToHexColor(0.1,0, 0)).to.be.undefined
        expect(rgbToHexColor(1, 1.1, 1)).to.be.undefined
        expect(rgbToHexColor(2, 2, 2.2)).to.be.undefined

    });
    it ('returns undefined, for String arguments', ()=>{
        expect(rgbToHexColor("1",0, 0)).to.be.undefined
        expect(rgbToHexColor(1, "1", 1)).to.be.undefined
        expect(rgbToHexColor(1, 1, "1")).to.be.undefined

    });



})