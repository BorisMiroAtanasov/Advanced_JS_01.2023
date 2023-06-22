const {expect, assert} = require ("chai")
const {bookSelection, isGenreSuitable, isItAffordable, suitableTitles} = require ('./03-book-selection');

describe("Tests Book Selection", function() {
     describe("Test isGenreSuitable", function() {
 
         it("Return not suitable for kids under 12 years old", () => {
            expect(bookSelection.isGenreSuitable("Thriller", 11)).to.equal(`Books with Thriller genre are not suitable for kids at 11 age`)
            expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`)
         });
         it("Return  suitable for kids under 12 years old", () => {
            expect(bookSelection.isGenreSuitable("Comedi", 11)).to.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("fantasy", 12)).to.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Thriller", 18)).to.equal(`Those books are suitable`)
         });

      });

      describe("Testing isItAffordable", function() {
 
         it("Returns not enough money", () => {
            expect(bookSelection.isItAffordable(2, 1)).to.equal(`You don't have enough money`);
         });
         it("Returns you bougth a book", () => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal(`Book bought. You have 1$ left`);
            expect(bookSelection.isItAffordable(1, 1)).to.equal(`Book bought. You have 0$ left`);
         });
         it("Returns error , not valid input", () => {
           expect(()=> bookSelection.isItAffordable("1", 2)).to.throw('Invalid input');
           expect(()=> bookSelection.isItAffordable(1, "2")).to.throw('Invalid input');
           expect(()=> bookSelection.isItAffordable("1", "2")).to.throw('Invalid input');
         });
         

      });
      describe("Testing suitableTitles", function() {
 
         it("Returns Invalid input, first param is not array", () => {
            expect(()=> bookSelection.suitableTitles("1", "Comedy")).to.throw('Invalid input');
         });
         it("Returns Invalid input, second param is not a string", () => {
            expect(()=> bookSelection.suitableTitles([], 1)).to.throw('Invalid input');
         });
         it("Returns Invalid input, first and second param are invalid inputs", () => {
            expect(()=> bookSelection.suitableTitles(1, 1)).to.throw('Invalid input');
         });
         it("Returns ganre", () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller").join(', ')).to.equal(["The Da Vinci Code"].join(', '));
         });
        
         

      });
 
   
     
 });