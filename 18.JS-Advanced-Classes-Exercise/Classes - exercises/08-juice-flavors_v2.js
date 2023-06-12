function juiceFlavors(juiceArr){
  let juicesAmount = new Map();
  let bottles = new Map();
  for (let index = 0; index < juiceArr.length; index++) {
    let[juicesName, amount] = juiceArr[index].split(' => ');
    amount = Number(amount);
    
    
    
  }

}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);

console.log('...................');

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])