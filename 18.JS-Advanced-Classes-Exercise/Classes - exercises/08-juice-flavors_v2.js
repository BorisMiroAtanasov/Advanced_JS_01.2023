function juiceFlavors(juiceArr){
  let juicesAmount = new Map();
  let juiceBottles = new Map();
  for (let index = 0; index < juiceArr.length; index++) {
    let[juicesName, amount] = juiceArr[index].split(' => ');
    amount = Number(amount);

    if(!juicesAmount.has(juicesName)){
        juicesAmount.set(juicesName,0)
    }
    let totalAmout = juicesAmount.get(juicesName) + amount;
    if(totalAmout >= 1000) {
        if(!juiceBottles.has(juicesName)){
            juiceBottles.set(juicesName,0)

    }
    let newBottles = Math.trunc(totalAmout / 1000);
    let totalBottles = juiceBottles.get(juicesName) + newBottles;
    juiceBottles.set(juicesName,totalBottles)

  }
  juicesAmount.set(juicesName,(totalAmout % 1000))

}
return [...juiceBottles].map(([key, value]) => `${key} => ${value}`).join('\n')
}

console.log(juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']));

console.log('...................');

console.log(juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']))