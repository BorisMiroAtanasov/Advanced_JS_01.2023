function addItem() {
  let newItemText = document.getElementById("newItemText").value;
  let newItemValue = document.getElementById("newItemValue").value;

  let option = document.createElement("option");
  option.text = newItemText;
  option.value = newItemValue;

  let menu = document.getElementById("menu");

  if(newItemText !== '' && newItemValue !== ''){
    menu.appendChild(option);
  }
  

 document.getElementById("newItemText").value = '';
  document.getElementById("newItemValue").value = '';



}


// function addItem() {
//   let newItemText = document.getElementById("newItemText").value;
//   let newItemValue = document.getElementById("newItemValue").value;

//   let newElement = document.createElement("option");

//   const menu = document.getElementById("menu");
  

   

//     newElement.textContent = `${newItemText}`;
//          menu.appendChild(newElement);

  

//   // console.log(newItemText.value + ' ' + newItemValue.value );
// }
