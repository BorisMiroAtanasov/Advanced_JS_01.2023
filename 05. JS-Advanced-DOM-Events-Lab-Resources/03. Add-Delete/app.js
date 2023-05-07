function addItem() {
    const newText = document.getElementById('newItemText').value;

    const textRows = document.getElementById('items');

    let li = document.createElement("li");
    li.textContent = newText;

    const btnDelete = document.createElement('a');
    btnDelete.href = '#';
    btnDelete.textContent = '[Delete]';
    btnDelete.addEventListener('click', () => li.remove());
    li.appendChild(btnDelete);




    textRows.appendChild(li);

    document.getElementById('newItemText').value = ''
}