function cars(inputArr){
    let outPutArr = [];

    for (const el of inputArr) {
        let [command, objName, action , property] = el.split(' ');

        if(command ==='create'){
            let obj={}
    
            

            create(objName, property)
        } else if(command ==='create'){
            print(outPutArr);
        }

        
        

    }

    function create(objName, action, property){
       
        obj[name] = objName;

        
        


    }
    function inherit(){

    }

    function print(outPutArr){
        for (const el of outPutArr) {
            console.log(el);
        }



    }

    return{
        create,
        print,
    }

   

}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])