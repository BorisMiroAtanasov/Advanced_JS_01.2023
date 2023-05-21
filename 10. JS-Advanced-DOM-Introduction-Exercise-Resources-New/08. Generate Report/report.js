function generateReport(){
    const outPutElement = document.querySelector('#output');
    const result = [];
    const cheks = Array.from(document.querySelectorAll('thead tr th input'));
    const trs = Array.from(document.querySelectorAll('tbody tr'));

    trs.forEach(row =>{
        const current = {};
        Array.from(row.querySelectorAll('td')).forEach((x,i) => {
            if(cheks[i].checked){
                current[cheks[i].name] = x.textContent;

            }
           
        })
        result.push(current);
        

    })
    outPutElement.value = JSON.stringify(result)

}























/*
function generateReport() {
    let checkedList = Array.from(document.querySelectorAll('thead tr th input'));
    const outPutElement = document.getElementById('output');
    const allTr = Array.from(document.querySelectorAll('tbody tr'));
    const result = [];

    //console.log(checkedList);


    for (let i=0; i<allTr.length ; i++ ){

        let newResult = {};
        for (let j = 0 ; j< checkedList.length ; j++){
            if(checkedList[j].checked){
            newResult[checkedList[j].name] = allTr[i].children[j].textContent;
        
            }
        }

       
        result.push(newResult);
    }
    
    outPutElement.value = JSON.stringify(result)
 

} 
*/




/*
function generateReport() {
    const output = document.querySelector('#output')
    const info = document.querySelectorAll('tbody tr')
    const checkboxCheck = document.querySelectorAll('thead tr th input');
    let result = [];

    output.value = '';

    for (let i = 0; i < info.length; i++) {
        let newObject = {};
        for (let j = 0; j < checkboxCheck.length; j++) {
            if (checkboxCheck[j].checked) {
                newObject[checkboxCheck[j].name] = info[i].children[j].textContent;
            }
        }
        result.push(newObject);
    }

    output.value = JSON.stringify(result);
}

*/