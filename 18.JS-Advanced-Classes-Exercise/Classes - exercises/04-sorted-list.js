
let result = [];
class List {
    
    constructor(num){
        this.num = num;

    }
   
    static add(num){
       return  result.push(num)
                }



}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));