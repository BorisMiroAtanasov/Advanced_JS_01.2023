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

    if(currentPlant.quantity === 1 ){
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
  harvestPlant(plantName){
    let currentPlant = this.plants.find(x => x.plantName == plantName);

    if(!currentPlant){
      throw new Error(`There is no ${plantName} in the garden.`)
    }
    if(currentPlant.ripe == false){
      throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
    }

    let index = this.plants.indexOf(currentPlant);
    this.storage.push({
      plantName: currentPlant.plantName,
      quantity: currentPlant.quantity,

    });
    this.plants.splice(1,index);                  // this.plants.filter( x => x.plantName !== plantName)
    this.spaceAvailable += Number(currentPlant.spaceRequired) 
   
    return `The ${plantName} has been successfully harvested.`

  }

  generateReport(){
    let result = []
    let resultStorage = []
     this.storage.forEach(x => resultStorage.push(`${x.plantName} (${x.quantity})`))
     this.plants
    .sort((a,b) => a.plantName.localeCompare(b.plantName))
    .forEach(x => result.push(x.plantName));
    let storageFinalResult = this.storage.length === 0 ? `Plants in storage: The storage is empty.` : `Plants in storage: ${resultStorage.join(', ')}`


// return this.storage
    return `The garden has ${ this.spaceAvailable } free space left.\nPlants in the garden: ${result.join(', ')}\n${storageFinalResult}`

  
  }


}

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("olive", 50));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));



// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());