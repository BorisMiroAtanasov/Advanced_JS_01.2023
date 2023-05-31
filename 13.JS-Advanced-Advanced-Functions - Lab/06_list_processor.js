function listProcessor(array) {
    let newArray = [];
   
    for (const el of array) {
        let [command, string] = el.split(" ");

        if(command === 'add'){
             add(string)
        }else if(command === 'remove'){
             remove(string)

        }else if(command === 'print'){
            print(newArray)

        }
    }
    function add(str) {
        newArray.push(str)
    }

    function remove(strToRemove) {
      
        newArray = newArray.filter(el => el !== strToRemove)
    }

    function print(arr){
        console.log(arr.join(','));
    }
    

    return {
        add,
        remove,
        print,
    }
    

}


listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);

listProcessor(["add pesho", "add george", "add peter", "remove peter", "print",]);
