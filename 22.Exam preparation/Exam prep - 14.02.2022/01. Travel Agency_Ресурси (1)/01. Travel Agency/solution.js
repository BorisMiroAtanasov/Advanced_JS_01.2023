window.addEventListener("load", solution);

function solution() {
  const fullName = document.getElementById(`fname`);
  const email = document.getElementById(`email`);
  const phoneNumber = document.getElementById(`phone`);
  const address = document.getElementById(`address`);
  const postCode = document.getElementById(`code`);
  const submitBtn = document.getElementById("submitBTN");
  const editBtn = document.getElementById("editBTN");
  const continueBtn = document.getElementById("continueBTN");
  const blockEl = document.getElementById('block')

  let inputValues = Array.from(
    document.getElementById("form").querySelectorAll("input")
  );
  //console.log(inputValues);

  submitBtn.disabled = false;
  editBtn.disabled = true;
  continueBtn.disabled = true;

  submitBtn.addEventListener("click", previewfunc);
  editBtn.addEventListener("click", editFunc);
  function previewfunc(event) {
    if (fullName.value !== "" && email.value !== "") {
      let previewFild = document.getElementById("infoPreview");
      let liFullNAme = document.createElement("li");
      liFullNAme.textContent = `Full Name: ${fullName.value}`;
      previewFild.appendChild(liFullNAme);

      let liEmail = document.createElement("li");
      liEmail.textContent = `Email: ${email.value}`;
      previewFild.appendChild(liEmail);

      let liPhoneNumber = document.createElement("li");
      liPhoneNumber.textContent = `Phone Number: ${phoneNumber.value}`;
      previewFild.appendChild(liPhoneNumber);

      let liAddress = document.createElement("li");
      liAddress.textContent = `Address: ${address.value}`;
      previewFild.appendChild(liAddress);

      let liPostCode = document.createElement("li");
      liPostCode.textContent = `Post Code: ${postCode.value}`;
      previewFild.appendChild(liPostCode);

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;

      fullName.value = "";
      email.value = "";
      phoneNumber.value = "";
      address.value = "";
      postCode.value = "";
    }
  }
  function editFunc(event) {
    const previewFild = document.getElementById("infoPreview");
    let prevArr = Array.from(previewFild.querySelectorAll("li"));
    for (let i = 0; i < prevArr.length; i++) {
      let [propName, currentValue] = prevArr[i].textContent.split(": ");
      //console.log(currentValue);
      inputValues[i].value = currentValue;
      prevArr[i].remove();

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
    }
  }

  continueBtn.addEventListener('click' ,(event)=>{
    blockEl.innerHTML = ''

    let newHead = document.createElement('h3');
    newHead.textContent = `Thank you for your reservation!`;

    blockEl.appendChild(newHead)



  })

}
