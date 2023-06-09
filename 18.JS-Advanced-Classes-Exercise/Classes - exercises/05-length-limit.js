let result = '';
class Stringer{
  
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
        let initialString  = this.innerString

    }
   
   
    decrease(value){
        if(value >= this.innerLength ){
            result = '' + '...';
        }else if(value  > 0 &&  this.innerLength > value){
            result = this.innerString.substring(0, (this.innerLength - value )) + '...'
        }else{
            result = this.innerString;
        }

    }

    increase(value){
        if(value >= result.length){
            result =   this.innerString
        }else if(value < result.length){
           
        }
        

    }

    toString(){

        // if(this.innerLength > result.length){
        //     return result = ``+'...';
        // }else{

        // }
      
return result
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

 test.increase(4); 
console.log(test.toString()); // Test