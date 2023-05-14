function attachEventsListeners() {

    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');

    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click',calulateDays );
    function calulateDays(event){
        //console.log(event.target);
        inputHours.value = Number(inputDays.value *24);
        inputMinutes.value = Number(inputDays.value * 24*60);
        inputSeconds.value = Number(inputDays.value *24*60*60);

    }
    hoursBtn.addEventListener('click',calulateHours );
    function calulateHours(){
        inputDays.value = Number(inputHours.value / 24);
        inputMinutes.value = Number(inputHours.value *60);
        inputSeconds.value = Number(inputHours.value *60*60);

    }

    minutesBtn.addEventListener('click',calulateMinutes );
    function calulateMinutes(){
        inputDays.value = Number(inputMinutes.value / 24 / 60);
        inputHours.value = Number(inputMinutes.value /60);
        inputSeconds.value = Number(inputMinutes.value *60);

    }

    secondsBtn.addEventListener('click',calulateSeconds );
    function calulateSeconds(){
        inputDays.value = Number(inputSeconds.value / 24 / 60 / 60);
        inputHours.value = Number(inputSeconds.value /60 /60);
        inputMinutes.value = Number(inputSeconds.value /60);

    }

   
    inputDays.value = '';
    inputHours.value = '';
    inputMinutes.value = '';
    inputSeconds.value = '';



}