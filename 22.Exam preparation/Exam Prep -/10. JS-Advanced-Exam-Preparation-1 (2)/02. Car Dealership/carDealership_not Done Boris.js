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
      return `New car added: ${model} - ${horsepower} HP - ${mileage} km - ${price}$`;
    }
  }

  sellCar(model, desiredMileage) {
    let found = this.availableCars.find((x) => x.model == model);
    let soldPrice;

    //console.log(found);
    if (!found) {
      throw new Error(`${model} was not found!`);
    }
    if (found) {
      let diferrence = Number(found.mileage) - Number(desiredMileage);
      //console.log(diferrence);
      if (diferrence <= 0) {
        soldPrice = found.price;
        found = {
          model:found.model,
          horsepower:found.horsepower,
          soldPrice,
          mileage:found.mileage,
        };
        this.soldCars.push(found);
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
      } else if (diferrence >= 0 && diferrence <= 40000) {
        soldPrice = Number(found.price)* 0.95;
        found = {
            model:found.model,
            horsepower:found.horsepower,
            soldPrice,
            mileage:found.mileage,
        };
        this.soldCars.push(found);
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
      } else if (diferrence > 40000) {
        soldPrice =Number(found.price)  * 0.9;
        found = {
            model:found.model,
            horsepower:found.horsepower,
            soldPrice,
            mileage:found.mileage,
        };
        this.soldCars.push(found);
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
      }
    }
  }

  currentCar (){
    if(this.availableCars.length = 0){
        return `There are no available cars`
    }
    
    return this.availableCars.forEach(el => `-Available cars:\n---${el.model} - ${el.horsepower} HP - ${e.mileage.toFixed(2)} km - ${el.price.toFixed(2)}$`)

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
