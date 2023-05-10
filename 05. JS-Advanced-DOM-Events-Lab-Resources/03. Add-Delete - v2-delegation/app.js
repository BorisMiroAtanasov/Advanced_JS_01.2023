const textRows = document.getElementById('items');
textRows.addEventListener('click',onDelete);

function onDelete(event){
    if(event.target.tagName =='A'){
        event.target.parentElement.remove()
    }
    


}





function addItem() {
    const newText = document.getElementById('newItemText').value;

   
    let li = document.createElement("li");
    li.textContent = newText;

    const btnDelete = document.createElement('a');
    btnDelete.href = '#';
    btnDelete.textContent = '[Delete]';
   

    li.appendChild(btnDelete);


    textRows.appendChild(li);

    document.getElementById('newItemText').value = ''
}