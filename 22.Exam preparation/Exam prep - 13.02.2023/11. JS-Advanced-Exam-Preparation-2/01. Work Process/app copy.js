function solve() {
  const fName = document.getElementById("fname");
  const lName = document.getElementById("lname");
  const email = document.getElementById("email");
  const birth = document.getElementById("birth");
  const position = document.getElementById("position");
  const salary = document.getElementById("salary");
  const tbody = document.getElementById("tbody");
  const addSalary = document.getElementById("sum");

  document.getElementById("add-worker").addEventListener("click", (e) => {
    e.preventDefault();

    if (  fName.value && lName.value && email.value && birth.value && position.value && salary.value) {
      //console.log("click");
      const tr = createElement('tr');
      createElement('td', `${fName.value}`, tr);
      createElement('td', `${lName.value}`, tr);
      createElement('td', `${email.value}`, tr);
      createElement('td', `${birth.value}`, tr);
      createElement('td', `${position.value}`, tr);
      createElement('td', `${salary.value}`, tr);
      const td =  createElement('td', '', tr);
      let fireBtn = createElement('button', 'Fired', td);
      fireBtn.setAttribute('class', 'fired');
      let editBtn = createElement('button', 'Edit', td);
      editBtn.setAttribute('class', 'edit');
      tbody.appendChild(tr);

      const currentSalary = Number(addSalary.textContent);
      addSalary.textContent = (Number(salary.value)+ currentSalary).toFixed(2);

      editBtn.addEventListener('click', (e) => addWorker(e,fName.value , lName.value, email.value , birth.value, position.value, salary.value ))



      clearInputFields();
      

  
    }
  });

  function addWorker(e, firsName, secondName, emailAdress,birthDate , currentPosition, currentSalary){

  }

 function createElement(type, content, parent){
    const element = document.createElement(type);
    element.textContent = content;
    if(parent){
        //parent.appendChild(element)
        parent.appendChild(element)
    }
    return element

  }

  function clearInputFields(){
    fName.value = '';
    lName.value = '';
    email.value = '';
    birth.value = '';
    position.value = '';
    salary.value = '';
  }

}
solve();
