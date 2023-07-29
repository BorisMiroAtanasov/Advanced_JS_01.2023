class Garden {
  constructor(spaceAvailable ){
    this.spaceAvailable = spaceAvailable,
    this.plants = [];
    this.storage = [];

  }
  addPlant (plantName, spaceRequired){
    let currentPlant = {
      plantName,
      spaceRequired,
      ripe:false,
      quantity: 0,
    }
    if(this.spaceAvailable >= currentPlant.spaceRequired){      //?
      this.plants.push(currentPlant)
      this.spaceAvailable -= Number(currentPlant.spaceRequired)
      return `The ${plantName} has been successfully planted in the garden.`
    }else{
      throw new Error (`Not enough space in the garden.`)

    }



  }

  ripenPlant(plantName, quantity){
    let foundPland = this.plants.find(p => p.plantName == plantName);

    if(!foundPland){
      throw new Error(`There is no ${plantName} in the garden.`)

    }
    if(foundPland.ripe == true){
      throw new Error(`The ${plantName} is already ripe.`)
    }
    if(quantity <= 0){
      throw new Error(`The quantity cannot be zero or negative.`)
    }

    foundPland.ripe = true;
    foundPland.quantity +=Number(quantity);

    if(foundPland.quantity == 1 ){
      return `${quantity} ${plantName} has successfully ripened.`
    }else if (foundPland.quantity > 1){
      return `${quantity} ${plantName}s have successfully ripened.`
    }


  }

  harvestPlant(plantName){
    let index = this.plants.findIndex(p => p.plantName == plantName);
    let match = this.plants[index];

    if(!match){
      throw new Error(`There is no ${plantName} in the garden.`)
    }
    if(match.ripe == false){
      throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
    }

    this.plants.splice(index,1); //this.plants = this.plants.filter((x) => x.plantName != plantName);
    this.storage.push({plantName, quantity:match.quantity});
    this.spaceAvailable += match.spaceRequired;
    return `The ${plantName} has been successfully harvested.`






  }

  generateReport(){
    let result=[]

    let sortedPlanst = this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName));
    // result.push();
    result.unshift(`Plants in the garden:` + sortedPlanst.map( x => ` ${x.plantName}`))

    result.unshift(`The garden has ${ this.spaceAvailable  } free space left.`)

    if(this.storage.length == 0){
      result.push(`Plants in storage: The storage is empty.`)
    }else{
      result.push(this.storage.map(x => `Plants in storage: ${x.plantName} (${x.quantity})`));
     
    }

    return result.join('\n')



  }

 
}



// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

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