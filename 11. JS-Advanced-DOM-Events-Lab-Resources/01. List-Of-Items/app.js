function addItem() {
   const newText = document.getElementById('newItemText').value;

   const textRows = document.getElementById('items');

   let li = document.createElement("li");
   li.textContent = newText

   textRows.appendChild(li);

   document.getElementById('newItemText').value = ''

}

//document.createElement()