const { expect } = require(`chai`);
const bookSelection = require(`./solution`);

describe("Tests of bookSelection", function() {
    describe("isGenreSuitable", function() {
        it("Return not suitable for kids under 12 years old", () =>{
            expect(bookSelection.isGenreSuitable("Thriller" ,11)).to.equal(`Books with Thriller genre are not suitable for kids at 11 age`)
            expect(bookSelection.isGenreSuitable("Horror" ,11)).to.equal(`Books with Horror genre are not suitable for kids at 11 age`)
            expect(bookSelection.isGenreSuitable("Horror" ,12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`)
        });
        it("Return not suitable for kids under 12 years old", () =>{
            expect(bookSelection.isGenreSuitable("Comedi" ,11)).to.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Fantastic" ,14)).to.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Horror" ,14)).to.equal(`Those books are suitable`)
        });
     });

     describe("isItAffordable", function() {
        it("Can't afford the book", () =>{
            expect(bookSelection.isItAffordable(2 ,1)).to.equal(`You don't have enough money`)
            expect(bookSelection.isItAffordable(2 ,1.5)).to.equal(`You don't have enough money`)
            
        });
        it("Can  afford the book", () =>{
            expect(bookSelection.isItAffordable(1 ,2)).to.equal(`Book bought. You have 1$ left`)
            expect(bookSelection.isItAffordable(2 ,2.5)).to.equal(`Book bought. You have 0.5$ left`)
            
        });
        it("Returns Invalid input, first param is not number", () =>{
            expect(()=>bookSelection.isItAffordable('1' ,2)).to.throw(`Invalid input`)
            
        });
        it("Returns Invalid input, second param is not number", () =>{
            expect(()=>bookSelection.isItAffordable(1 ,'2')).to.throw(`Invalid input`)
            
        });
        it("Returns Invalid input, first and second params are not numbers", () =>{
            expect(()=>bookSelection.isItAffordable('1' ,'2')).to.throw(`Invalid input`)
        });
        
     });


     describe("suitableTitles", function() {
        it("Returns invalid input first param is not array", () =>{
            expect(()=>bookSelection.suitableTitles(1 ,'a')).to.throw(`Invalid input`)
           
        });
        it("Returns invalid input second param is not string", () =>{
            expect(()=>bookSelection.suitableTitles(['a','b'] ,1)).to.throw(`Invalid input`)
           
        });
        it("Returns invalid input first and second params  are not correct", () =>{
            expect(()=>bookSelection.suitableTitles(1 ,1)).to.throw(`Invalid input`)
           
        });
        it("Correct output data", () =>{
            let input = [
                {title: "The Da Vinci Code", genre: "Thriller"},
                {title: "The Da Vinci Code1", genre: "Thriller"}
            ];
            let result = ["The Da Vinci Code", "The Da Vinci Code1"]
            expect(bookSelection.suitableTitles(input, 'Thriller').join(', ')).to.equal(result.join(', '))
           
        });
       
        
     });

  
    
});