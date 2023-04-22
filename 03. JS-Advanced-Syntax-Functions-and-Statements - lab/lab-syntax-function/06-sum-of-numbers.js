function sumOfNumbers(first, second){
    let startNumber = Number(first);
    let endNumber = Number(second);

    let result = 0;

    for ( let i =startNumber ; i <= endNumber ; i++){
        result += Number(i)
    }
    console.log(result);
   

}
sumOfNumbers('1', '5' );
sumOfNumbers('-8', '20');
