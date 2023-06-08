let result = '';
class Stringer{
  
    constructor(string, lengthProperty){
        this.string = string;
        this.lengthProperty = lengthProperty;

    }
   
    decrease(){
        if(this.lengthProperty >= this.string.length ){
            result = '' + '...';
        }else if(this.lengthProperty >0 && this.lengthProperty < this.string.length){

        }

    }

    increase(){

    }

    toString(){
       return this.string

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