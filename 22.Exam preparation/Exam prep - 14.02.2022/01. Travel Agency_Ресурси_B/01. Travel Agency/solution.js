window.addEventListener('load', solution);

function solution() {

    const fnameInput = document.getElementById('fname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const numberCodeInput = document.getElementById('code');
    const submitBtn = document.getElementById('submitBTN');
    const infoPreview = document.getElementById('infoPreview');
    const editBTN = document.getElementById('editBTN');
    const continueBTN = document.getElementById('continueBTN');
    const blockEl = document.getElementById('block')

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(fnameInput.value && emailInput.value){
            addPasinger(e, fnameInput.value, emailInput.value, phoneInput.value , addressInput.value, numberCodeInput.value );
           // clearInputFields()
           
        }

    });
      
    
    
    function addPasinger(e, fname, email, phone, address, numberCode){
        const ul = createElement('ul');
        createElement('li',`Full Name: ${fname}`, ul);
        createElement('li',`Email: ${email}`, ul);
        createElement('li',`Phone Number: ${phone}`, ul);
        createElement('li',`Address: ${address}`, ul);
        createElement('li',`Postal Code: ${numberCode}`, ul);
        infoPreview.appendChild(ul);
        submitBtn.disabled = true;
        editBTN.disabled = false
        continueBTN.disabled = false;

        editBTN.addEventListener('click', (e) => editInfo(e,fname, email, phone, address, numberCode));
        continueBTN.addEventListener('click', (e) => continueFunc(e))
        

        function editInfo(e,fname, email, phone, address, numberCode){
            e.target.parentNode.parentNode.firstElementChild.remove();
               
            fnameInput.value = fname;
            emailInput.value = email;
            phoneInput.value = phone;
            addressInput.value = address;
            numberCodeInput.value = numberCode;
    
            submitBtn.disabled = false;
            editBTN.disabled = true
           continueBTN.disabled = true;
    
          
    
        }
    }

    function continueFunc(e){
        blockEl.innerHTML = '';

        let h3= document.createElement('h3');
        h3.textContent = `Thank you for your reservation!`
        blockEl.appendChild(h3)

      

    }


    function createElement(type, content, parent){
        let element = document.createElement(type);
        element.textContent = content;
        if(parent){
            parent.appendChild(element)
        }
        return element
    }

    function clearInputFields(){
        fnameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        addressInput.value = '';
        numberCodeInput.value = '';
      
      }
 
//addPasinger(e, fnameInput.value, emailInput.value, phoneInput, address, number )



}
