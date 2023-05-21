function deleteByEmail() {
    //read input value
    let query = document.querySelector("input[name ='email']").value;


    //get all rows
    const rows = document.querySelectorAll('#customers tbody tr');

    let rowsArray = Array.from(rows);
    let del = false;

    //iterate rows and compaer contents to input
    //console.log(rowsArray);

    for (let row of rowsArray) {
        const col = row.children[1];

        if(col.textContent == query){
            //remove matching rows
            row.remove()
           del = true;
        }
        
        
    }
    document.getElementById('result').textContent = del ? 'Delete' : 'Not found.'


    



}






/* from prezentation

function deleteByEmail() {
    let input = document.querySelector("input[name ='email']").value;
   //let email = document.getElementsByName("email")[0].value

 

    const tableRows= Array.from(document.querySelectorAll('tbody tr td'))
   

    for (const td of tableRows) {
        if( td.textContent === input) {
          //  let match = td.textContent;
            let rowForDel = td.parentNode;
            rowForDel.parentNode.removeChild(rowForDel);
            document.getElementById('result').textContent = 'Delete'
            return;
            
        }
        document.getElementById('result').textContent = 'Not found.'

        
    }

}


/*const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// Expected output: 12

*/