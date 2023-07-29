const {expect} = require ('chai');
const companyAdministration = require ('./companyAdministration')

describe("Tests of Commpany Administration", function() {
    describe("hiringEmployee", () =>{

        it("Return 'not hired' for diferrent position ", () => {
            expect(()=> companyAdministration.hiringEmployee('Pesho', 'Shop Asistant', 5)).to.throw(`We are not looking for workers for this position.`);
        });

        it("Return 'hired' position 'Programmer', enougt experience ", () => {
            expect(companyAdministration.hiringEmployee('George', 'Programmer', 3)).to.equal(`George was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 5)).to.equal(`Ivan was successfully hired for the position Programmer.`);
        });

        it("Return 'not hired' position 'Programmer', not  enougt experience ", () => {
            expect(companyAdministration.hiringEmployee('George', 'Programmer', 2)).to.equal(`George is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 1)).to.equal(`Ivan is not approved for this position.`);
           
        });

        
     });

     describe("calculateSalary", () =>{

        it("Invalid input -negative number ", () => {
            expect(()=> companyAdministration.calculateSalary(-5)).to.throw(`Invalid hours`);
        });
        it("Invalid input - not a number", () => {
            expect(()=> companyAdministration.calculateSalary('1')).to.throw(`Invalid hours`);
        });
        it("Correct input salary without bonus", () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
        });
        it("Correct input salary without bonus", () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });
        it("Correct input salary with bonus", () => {
            expect(companyAdministration.calculateSalary(170)).to.equal(3550);
        });
        


        
     });

     describe("firedEmployee", () =>{

        it("Invalid input - first param is not an Array ", () => {
            expect(()=> companyAdministration.firedEmployee({}, 1)).to.throw(`Invalid input`);
            expect(()=> companyAdministration.firedEmployee([], 1)).to.throw(`Invalid input`);
            expect(()=> companyAdministration.firedEmployee(1, 1)).to.throw(`Invalid input`);
            expect(()=> companyAdministration.firedEmployee('1', 1)).to.throw(`Invalid input`);
        });
        it("Invalid input - second param is not a Number ", () => {
            expect(()=> companyAdministration.firedEmployee(["Petar", "Ivan", "George"], '1')).to.throw(`Invalid input`);
            expect(()=> companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw(`Invalid input`);
            expect(()=> companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1.1)).to.throw(`Invalid input`);
        });

        it("Invalid input - second param is not a Number ", () => {
            expect(()=> companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3 )).to.throw(`Invalid input`);
        });
        it("Invalid input - first and second param are invalid", () => {
            expect(()=> companyAdministration.firedEmployee(1 , '1')).to.throw(`Invalid input`);
        });

        it("Correct output", () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"] , 1)).to.equal(["Petar", "George"].join(', '));
        });
        


        
     });

});