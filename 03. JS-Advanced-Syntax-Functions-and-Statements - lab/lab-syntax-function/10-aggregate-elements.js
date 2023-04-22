function aggregateElements(array){

    let sum = 0
    let inversValue = 0;
    let concatenate= '';

    for (let i = 0 ; i < array.length ; i++){
        let current = Number(array[i]);
        sum +=current;
        inversValue += (1 / current)
        concatenate += array[i]

    }
    console.log(sum);
    console.log(inversValue);
    console.log(concatenate);

}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
