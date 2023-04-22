function largestNumber(first, second , third){
    let result = third

    
    if (first > second &&  first > third){
        result = first;

       

    } else if ( second > first &&  second > third){
         result = second;
    }

    
    console.log(`The largest number is ${result}.`);



}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);