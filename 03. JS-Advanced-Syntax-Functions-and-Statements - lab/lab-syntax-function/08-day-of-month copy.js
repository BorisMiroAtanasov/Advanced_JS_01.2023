function daysInMonth(month, year) {
    let daysInMonth = new Date(year, month, 0).getDate();

    console.log(daysInMonth);

}
daysInMonth(2, 2021);