class CarDealership {
  constructor(name, availableCars, soldCars, totalIncome) {
    this.name = "";
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    let car = {
      model,
      horsepower,
      price,
      mileage,
    };

    if (model == "") {
      throw new Error("Invalid input!");
    } else if (horsepower < 0 || Number.isInteger(Number.horsepower)) {
      throw new Error("Invalid input!");
    } else if (price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    } else {
      this.availableCars.push(car);
      return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
  }
  sellCar (model, desiredMileage){
    const index = this.availableCars.findIndex(c => c.model == model);
    const match = this.availableCars[index]

    if(match == undefined){
      throw new Error('{model} was not found!')
    }

    const matchDelta = match.mileage - desiredMileage;
    const sold = {
      model: match.model,
      horsepower: match.horsepower,

    }
    if(matchDelta <= 0){
      sold.soldPrice = match.price

    }else if(matchDelta <= 4000){
      sold.soldPrice = match.price *0.95;
    }else{
      sold.soldPrice = match.price *0.90;

    }
    this.soldCars.push(sold);
    this.availableCars.splice(index,1);

    this.totalIncome += sold.soldPrice
    return `${model} was sold for ${sold.soldPrice.toFixed(2)}$`



  }
  currentCar (){
    if(this.availableCars.length == 0){
      return `There are no available cars`
    }

    const result = this.availableCars.map(c =>`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`)
    result.unshift(`-Available cars:`);
    
    return result.join('\n')

  }

  salesReport (criteria){
    if(criteria == "horsepower"){
      this.soldCars.sort((a,b) => b.horsepower - a.horsepower )
      
    }else if (criteria == "model"){
      this.soldCars.sort((a,b) => a.model.localCompare(b.model))
    }else{
      throw new Error('Invalid criteria!')
    }

    const result = this.soldCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
    result.unshift(`-${this.soldCars.length} cars sold:`);
    result.unshift(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);

    return result.join('\n')
  }

  

 
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

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


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));