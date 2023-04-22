function circleArea(input){
    let type = typeof input;
    let result =0;


    if(type === 'number' ){

        result = (input** 2 * Math.PI).toFixed(2);
        
    }else{
        result = `We can not calculate the circle area, because we receive a ${type}.`
    }
    console.log(result);



}
circleArea(5);
circleArea('name');