
function sumTable() {
    const table = document.querySelectorAll('tbody tr');
    const sum = document.getElementById('sum');


    let total = 0;

    for(let i=1 ; i< table.length ; i++){
        let cols = table[i].children;
        let price = cols[cols.length -1].textContent;

        total += Number(price);

    }
    sum.textContent = total;




}




/*
function sumTable() {
    const price = document.querySelectorAll('tbody tr');

    console.log(Array.from(price));

}

*/