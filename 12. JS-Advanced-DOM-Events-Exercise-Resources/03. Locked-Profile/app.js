function lockedProfile(){
     Array.from(document.querySelectorAll('.profile button'))
     .forEach(button => button.addEventListener('click', onClick));





     function onClick (event){
       let profil = event.target.parentElement; 
      let isActiv = profil.querySelector('input[value="unlock"]').checked;
      if(isActiv){
        let info = Array.from(profil.querySelectorAll('div'))
        .find(p => p.id.includes("HiddenFields"))


        if(event.target.textContent === 'Show more'){
            event.target.textContent ='Hide it';
            info.style.display = 'block';

        }else{
            event.target.textContent ='Show more';
            info.style.display = 'none';

        }
      }
     }

}



/*function lockedProfile() {
    let divProfile = Array.from(document.querySelectorAll('.profile'));


    for (const element of divProfile) {
        let prfileElements = (Array.from(element.children));
        for (const curentElement of prfileElements) {
            if (curentElement.value == 'lock' && curentElement.checked == true) {
                let buttons = (curentElement.parentElement.querySelectorAll('button'));

                
            }
        }


    }
}
*/











/*
function lockedProfile() {
    let button = (document.querySelectorAll('button'))

    let parentDiv = document.getElementById('container');


    parentDiv.addEventListener('click', onClick);

    function onClick(event) {

        let divProfile = event.target.parentElement;
        // console.log(divProfile);
        let ratio = Array.from(divProfile.querySelectorAll('input[type="radio"]'));
       // console.log(ratio);

        for (const poperty of ratio) {

            if (poperty.value == 'unlock' && poperty.checked == true){
                console.log('yes');

            }
            
                            
            
        }



    }
}

*/