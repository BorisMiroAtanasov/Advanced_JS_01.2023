function juiceFlavors(array){
    let result = new Map();

    for (const inputJuice of array) {
        let [juiceName, quantity] = inputJuice.split(' => ');
        quantity = Number(quantity)

         if(result.has(juiceName)){
            let current = Number(result.get(juiceName))
            current += quantity
            result.set(juiceName, current);

        }else{
            result.set(juiceName, quantity);

        }

        
        
    }
    function bottles(juice, q){

        if((q / 1000 )> 1){
            let current =Math.floor(q / 1000)
            console.log(`${juice} => ${current}`)
        }else{
            return q


        }

    }
   
result.forEach((el,x) => bottles(x, el));

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