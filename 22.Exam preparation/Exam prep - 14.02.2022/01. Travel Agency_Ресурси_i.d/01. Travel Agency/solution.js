window.addEventListener('load', solution);

function solution() {
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const contineuBtn = document.getElementById('continueBTN');
  const block = document.getElementById('block');
  const preview = document.getElementById('infoPreview');


  submitBtn.disabled = false;
  editBtn.disabled = true;
  contineuBtn.disabled = true;

  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input')); //chaining from 'form' take all with type input
  const labelValue = Array.from(document.getElementById('form').querySelectorAll('label'));
  inputValues.pop();

  submitBtn.addEventListener('click', (ev) => {

    const fullName = inputValues[0];
    const email = inputValues[1];
    if (fullName.value !== '' && email.value !== '') {

      for (let i = 0; i < inputValues.length; i++) {

        const liElement = document.createElement('li');
        liElement.innerText = `${labelValue[i].innerText} ${inputValues[i].value}`;
        preview.appendChild(liElement);
      }

      for (const input of inputValues) {
        input.value = '';
        
      }
      ev.target.disabled = true;
      editBtn.disabled = false;
      contineuBtn.disabled = false;
      
    }
  })
  editBtn.addEventListener('click', (ev)=>{
    const listItems = Array.from(preview.childNodes);
    for ( let i = 0 ; i < inputValues.length ; i++){
      inputValues[i].value = listItems[i].textContent.split(': ')[1];
      listItems[i].remove();

    }
     submitBtn.disabled = false;
     editBtn.disabled = true;
     contineuBtn.disabled = true;

  })

  contineuBtn.addEventListener('click', (ev) =>{
    block.innerHTML = '';

    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!'

    block.appendChild(h3);

  })




}
