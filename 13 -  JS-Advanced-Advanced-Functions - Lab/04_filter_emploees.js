function filterEmploees(data, criteria) {
  let dataArr = JSON.parse(data);
  let counter = 0;

  let [criteriaKey, crit] = criteria.split("-");
  //console.log(criteriaForMAtch);
  if (crit === "all") {
    dataArr.map(x => print(x))
  }else{
    for (const el of dataArr) {
        if(el[criteriaKey] === crit){
            print(el)

        }
        
    }



  }

  

  function print(el) {
    console.log(`${counter++}. ${el.first_name} ${el.last_name} - ${el.email}`);
  }
}

filterEmploees(
    `[{
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      },  
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }]`, 
    'gender-Male')