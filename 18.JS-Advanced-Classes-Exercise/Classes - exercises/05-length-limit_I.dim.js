let result = "";
class Stringer {

  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
    let initialString = innerString;
    let initialLength = innerLength
    
  }

  decrease(value) {
    this.innerLength -= value;
    if (this.innerLength <= 0) {
        this.innerLength = 0;
    }
  }
  increase(value) {
    this.innerLength += value;
  }
toString(){
    
    if(this.innerLength <= 0 ){
        return '...'
    }else if(this.innerLength > 0 && this.innerLength < initialLength ){
        let curentValue =  initialLength - this.innerLength 
        return this.innerString.substring(0,curentValue)
    }else if(this.innerLength > initialLength ){
        return initialString
    }

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
