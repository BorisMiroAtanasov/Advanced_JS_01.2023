function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = JSON.parse(document.querySelector("#inputs textarea").value);
    let avgSalary = 0;
    let totalSalary = 0;
    let currentAvgSAlary = 0;
    let bestName = "";
    let outPut = {};

    for (const line of input) {
      let restaurantInfo = line.split(" - ");
      let restaurantName = restaurantInfo.shift();
      let workersData = restaurantInfo[0].split(', ');

      for ( worker of workersData){
         let [name, salary] = worker.split(' ');

         if (!outPut.hasOwnProperty(restaurantName)){
            outPut[restaurantName] = {}
         }
         if(outPut.hasOwnProperty(restaurantName)){
            outPut[restaurantName][name] = Number(salary);

         }

      }

    }

    let entries = Object.entries(outPut)
    for (let entry of entries){
      //console.log(entriy);
      let key = entry[0];
      let values = Object.values(entry[1]);
      
      
      for (let  salary of values) {
          totalSalary += salary;
       }
      avgSalary = totalSalary / values.length;
      if( avgSalary > currentAvgSAlary){
         currentAvgSAlary = avgSalary;
         bestName = key;
         totalSalary = 0;
      }
    }
    let result = Object.entries(outPut[bestName]).sort((a,b) => b[1] - a[1]);
    let print = ``;

    result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);
    document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currentAvgSAlary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;
    document.querySelector('#workers p').textContent = print;


   
  }
}
