
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
    
    const rows = Array.from(document.querySelectorAll("table tr")); // Изваждаме всички редове от таблицата и ги правим на масив 
    let sum = 0;                                                    // Правим си променлива да събираме сумата 

    for (let i = 1; i < rows.length - 1; i++) {                     // Минаваме по редовете като махаме първия и последния 
        sum += Number(rows[i].lastElementChild.textContent);
        // Намираме на всеки ред последното дете и взимаме съдържанието като го правим на число и го добавяме към сумата        
    }

    document.getElementById("sum").textContent = sum;   // Променяме съдържанието на id sum с получената сума 
}

*/