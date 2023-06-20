class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = Number(spaceAvailable);
    this.plants = [];
    this.storage = [];
  }
  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < Number(spaceRequired)) {
      throw new Error(`Not enough space in the garden.`);
    }
    let newPlant = {
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    };
    if (!this.plants.some((x) => x.plantName == plantName)) {
      this.plants.push(newPlant);
      this.spaceAvailable -= spaceRequired;
      return `The ${plantName} has been successfully planted in the garden.`;
    }
  }

  ripenPlant(plantName, quantity){

    if(!this.plants.some((x) => x.plantName == plantName)){//може да има грешка
      throw new Error(`There is no ${plantName} in the garden.`)
    }
    let currentPlant = this.plants.find(x => x.plantName == plantName)
    if(currentPlant.ripe == true){
      throw new Error(`The ${plantName} is already ripe.`)
    }
    if(Number(quantity) <= 0){
      throw new Error(`The quantity cannot be zero or negative.`)
    }
    currentPlant.ripe = true;
    currentPlant.quantity += Number(quantity)

    if(currentPlant.quantity = 1 ){
      return `${quantity} ${plantName} has successfully ripened.`
    }else if (currentPlant.quantity > 1 ){
      return `${quantity} ${plantName}s have successfully ripened.`
    }

    /* опция тернарен оператор
    let returnMSG = quantity === 1 ?
      `${quantity} ${plantName} has successfully ripened.` :
      `${quantity} ${plantName}s have successfully ripened.`


*/
  }
}

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("olive", 50));


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));

