const {library} = require('./03-unit-testing');
const {expect, assert} = require('chai');



describe("Unit Test", function() {
    describe("Test calcPriceOfBook", function() {
        it("Returns Invalid input, first param is not a  string",() => {
            expect( ()=> library.calcPriceOfBook(1, 2)).to.throw('Invalid input');
        });
        it("Returns Invalid input, second param is not a  Number",() => {
            expect( ()=> library.calcPriceOfBook("bookName", "2")).to.throw('Invalid input');
        });
        it("Returns Invalid input, second param is not a integer",() => {
            expect( ()=> library.calcPriceOfBook("bookName", 2.1)).to.throw('Invalid input');
        });
        it("Returns Invalid input, first param in not a string second param is not a Number",() => {
            expect( ()=> library.calcPriceOfBook(1, '1')).to.throw('Invalid input');
        });
        it("Returns price of book , with discount, year less or equal 1980",() => {
            expect(library.calcPriceOfBook("War and Pice", 1979)).to.equal('Price of War and Pice is 10.00');
        });
        it("Returns price of book , with discount, year less or equal 1980",() => {
            expect(library.calcPriceOfBook("War and Pice", 1980)).to.equal('Price of War and Pice is 10.00');
        });
        it("Returns price of book ,  year after 1980",() => {
            expect(library.calcPriceOfBook("Harry Potter", 2001)).to.equal('Price of Harry Potter is 20.00');
        });
     });
     describe("Test findBook", function() {
        it("Returns No books, the array length is zero",() => {
            expect( ()=> library.findBook([], "Troy")).to.throw('No books currently available');
        });
        it("Returns found book",() => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal('We found the book you want.');
        });
        it("Returns book not  found ",() => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Harry Potter")).to.equal('The book you are looking for is not here!');
        });
        
     });

     describe("Test arrangeTheBooks", function() {
        it("Returns invalid input,because input is decimal number,",() => {
            expect( ()=> library.arrangeTheBooks(1.1)).to.throw('Invalid input');
        });
        it("Returns invalid input, the input is string",() => {
            expect( ()=> library.arrangeTheBooks('1.1')).to.throw('Invalid input');
        });
        it("Returns invalid input, the input is negativ number",() => {
            expect( ()=> library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });

        it("Returns all books are on the shelves",() => {
            expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
        });
        it("Returns all books are on the shelves",() => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it("Returns not enought space on the shelves ",() => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
       
        
     });
     
});