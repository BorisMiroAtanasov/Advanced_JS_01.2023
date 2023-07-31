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
      addEmploee(e,fName.value , lName.value ,email.value , birth.value , position.value , salary.value)

    
      clearInputFields();
    
    }
  });

  function addEmploee(e,fName, lName, email,birth, position,salary){
    const tr = createElement('tr');
      createElement('td', `${fName}`, tr);
      createElement('td', `${lName}`, tr);
      createElement('td', `${email}`, tr);
      createElement('td', `${birth}`, tr);
      createElement('td', `${position}`, tr);
      createElement('td', `${salary}`, tr);
      const td =  createElement('td', '', tr);
      let fireBtn = createElement('button', 'Fired', td);
      fireBtn.setAttribute('class', 'fired');
      let editBtn = createElement('button', 'Edit', td);
      editBtn.setAttribute('class', 'edit');
      tbody.appendChild(tr);

      const currentSalary = Number(addSalary.textContent);
      addSalary.textContent = (Number(salary)+ currentSalary).toFixed(2);
      editBtn.addEventListener('click', (e) => editWorker(e,fName, lName, email , birth, position, salary ));
      fireBtn.addEventListener('click', (e)=> fireEmploee(e, salary))


  }

  function fireEmploee(e, salary){
e.preventDefault();
e.target.parentNode.parentNode.remove()
reduceSalarySalarySum(salary)
    
  }

  function editWorker(e, firsName, secondName, emailAdress,birthDate , currentPosition, currentSalary){
    e.preventDefault();
    e.target.parentNode.parentNode.remove();
    fName.value = firsName;
    lName.value = secondName;
    email.value = emailAdress;
    birth.value = birthDate;
    position.value = currentPosition;
    salary.value = currentSalary;

    reduceSalarySalarySum(currentSalary)
    
  }
  
  function reduceSalarySalarySum(salary) {
    const sumSalary = Number(addSalary.textContent);
    addSalary.textContent = Math.abs(Number(salary) - sumSalary).toFixed(2);
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
