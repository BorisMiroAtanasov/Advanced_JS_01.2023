function attachEventsListeners() {
    const inputDistance = document.getElementById('inputDistance');
    const outputDistance = document.getElementById('outputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');
   
    const convertBtn = document.getElementById('convert');


    convertBtn.addEventListener('click', convert);
    const data = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        m1: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    function convert(){
      if (inputUnits.value == 'm'){
        console.log(outputDistance.value = 1);
      }
    };

    

    

    


}