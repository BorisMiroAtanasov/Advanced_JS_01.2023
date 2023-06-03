function validate() {
    const userName = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confurmPass = document.getElementById('confirm-password');
    let checkBox = document.getElementById('company');
    let subbmitBtn = document.getElementById('submit');


    let usernameRegexp = /^[A-Za-z0-9]{3,20}/gm;


    subbmitBtn.addEventListener('click',(event)=>{
        event.preventDefault();
       

      if(!usernameRegexp.test(userName.value)){
            userName.style.borderColor = "red"

      }else{
        userName.style.borderColor = "none"

      }
    

    })



    

  
}
