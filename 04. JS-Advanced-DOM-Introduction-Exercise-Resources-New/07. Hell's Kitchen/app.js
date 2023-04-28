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
    for (let entriy of entries){
      console.log(entriy);


    }

    //console.log(input[1]);
  }
}
