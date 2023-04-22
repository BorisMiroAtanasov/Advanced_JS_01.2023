function dayOfMonth(month, year){
    let days = new Date(year,month ,0).getDate();
    

    console.log(days);

}
dayOfMonth(1, 2012);
dayOfMonth(2, 2021);


// console.log(getDaysInMonth(1, 2012)