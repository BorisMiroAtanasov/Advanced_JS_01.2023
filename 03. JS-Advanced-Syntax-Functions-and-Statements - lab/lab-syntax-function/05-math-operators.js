function solve(a,b,operator){

    const operators = {
        '+' : (a,b) => a + b,
        '-' : (a,b) => a - b,
        '*' : (a,b) => a * b,
        '/' : (a,b) => a / b,
        '%' : (a,b) => a % b,
        '**' : (a,b) => a ** b,
    }

    console.log(operators[operator](a,b));



}
solve(5, 6, '+');
solve(3, 5.5, '*');