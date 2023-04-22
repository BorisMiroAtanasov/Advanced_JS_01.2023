function squarOfStars(num){
    
   

    for (let i = 1 ; i <= num ; i++){
        let result = '';
      
        for (let j = 1 ; j <= num ; j++){
            result += '* ';
          
        }
        console.log(result);
    }
   // console.log(result);




}
squarOfStars(1);
squarOfStars(2);
 squarOfStars(5);
squarOfStars(7);