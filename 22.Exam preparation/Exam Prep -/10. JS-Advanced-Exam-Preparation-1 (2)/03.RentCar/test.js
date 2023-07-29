const { expect } = require(`chai`);
const rentCar = require(`./rentCar`);

describe("Tests rent a car", function () {
  describe("searchCar", () => {
    it("finds one car", () => {
      const shop = ["a", "b", "c"];
      const model = "a";
      const result = rentCar.searchCar(shop, model);
      expect(result).to.equal(`There is 1 car of model a in the catalog!`);
    });
    it("finds two cars", () => {
      const shop = ["a", "b", "a"];
      const model = "a";
      const result = rentCar.searchCar(shop, model);
      expect(result).to.equal(`There is 2 car of model a in the catalog!`);
    });
    it("invalid model", () => {
      expect(() => {
        rentCar.searchCar(["a", "b", "c"], 1);
      }).to.throw();
    });
    it("invalid shop(number)", () => {
      expect(() => {
        rentCar.searchCar(1, "a");
      }).to.throw();
    });
    it("invalid shop (string)", () => {
      expect(() => {
        rentCar.searchCar("abc", "a");
      }).to.throw();
    });

    it("car not found", () => {
      expect(() => {
        rentCar.searchCar(["a", "b", "c"], "d");
      }).to.throw();
    });
  });

  describe("calculatePriceOfCar", () => {
    it('Invalid model', ()=>{
        expect(() => {
            rentCar.calculatePriceOfCar(1,1);
          }).to.throw();

    })

    it('Invalid days', ()=>{
        expect(() => {
            rentCar.calculatePriceOfCar('Volkswagen','1');
          }).to.throw();
        
    })
    it('corecr price for model', ()=>{
        const result = rentCar.calculatePriceOfCar('Volkswagen', 2);
        expect(result).to.equal(`You choose Volkswagen and it will cost $40!`)
        
    })

    it('model not found', ()=>{
        expect(() => {
            rentCar.calculatePriceOfCar('a',1);
          }).to.throw();
        
    })
    
  });
  describe("check buget", () => {
    it('Invalid cost perDay', ()=>{
        expect(() => {
            rentCar.checkBudget('1',1,1);
          }).to.throw();
        
    })
    it('Invalid days', ()=>{
        expect(() => {
            rentCar.checkBudget(1,'1',1);
          }).to.throw();
        
    })
    it('Invalid budget', ()=>{
        expect(() => {
            rentCar.checkBudget(1,1,'1');
          }).to.throw();
        
    })
    it('Can afford', ()=>{
        const result = rentCar.checkBudget(1,1,1);
        expect(result).to.equal(`You rent a car!`)
        
    })
    it('Can afford 2', ()=>{
        const result = rentCar.checkBudget(10,3,45);
        expect(result).to.equal(`You rent a car!`)
        
    })
    it('Can not  afford', ()=>{
        const result = rentCar.checkBudget(1,2,1);
        expect(result).to.equal(`You need a bigger budget!`)
        
    })
   
    
  });
});
