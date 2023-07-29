class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar (model, horsepower, price, mileage){

    if(!this.#validateModel(model) 
    || !this.#validateHoresepower(horsepower) 
    || !this.#validatePriceAndMileage(price) 
    || !this.#validatePriceAndMileage(mileage)){
     throw new TypeError (`Invalid input!`)
    }
    this.availableCars.push({
      model,
      horsepower,
      price,
      mileage,
    });
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    
    
  }
  
  #validateModel(value){
    return typeof value == 'string' && value != '';

  }
  #validateHoresepower(value){
    Number.isInteger(value) && value >=0
  }
  #validatePriceAndMileage(value){
    return typeof value == 'number' && value >= 0;

  }
 
  
}

let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.sellCar("Toyota Corolla", 230000));
// console.log(dealership.sellCar("Mercedes C63", 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());
