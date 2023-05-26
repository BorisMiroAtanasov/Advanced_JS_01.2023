function solve(arr, starIndex, endIndex){
if(Array.isArray(arr) == false){
    return NaN
}

if(starIndex < 0){
    starIndex = 0 
}

if(endIndex > arr.length-1){

    endIndex = arr.length -1
}

// console.log(arr 
//     .slice(starIndex, endIndex +1  )
//     .map(Number)
//     .reduce((acc, x) => acc+ x, 0)); 

     return arr 
        .slice(starIndex, endIndex +1  )
        .map(Number)
        .reduce((acc, x) => acc+ x, 0); 

}

solve([10, 20, 30, 40, 50, 60], 3, 300);
solve([10, 'twenty', 30, 40], 0, 2);
solve([], 1, 2);
