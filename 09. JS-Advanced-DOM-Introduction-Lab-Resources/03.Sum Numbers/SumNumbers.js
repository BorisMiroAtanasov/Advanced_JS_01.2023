function calc() {
    const firsNum = Number(document.getElementById('num1').value);
    const secondNum = Number(document.getElementById('num2').value);

    let result  = firsNum + secondNum
    const sum = document.getElementById('sum');

    sum.value = result;

// console.log(firsNum);
// console.log(secondNum);
// console.log(result);  
}
