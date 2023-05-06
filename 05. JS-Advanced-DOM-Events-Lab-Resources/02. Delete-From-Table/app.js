function deleteByEmail(){
    
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