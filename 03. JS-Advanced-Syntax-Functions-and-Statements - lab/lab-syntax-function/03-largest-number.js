function largestNumber(first, second , third){

    


    if (first > second &&  first > third){
        console.log(`The largest number is ${first}.`);

    } else if ( second > first &&  second > third){
        console.log(`The largest number is ${second}.`);
    } else{

        console.log(`The largest number is ${third}.`);

    }



}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);