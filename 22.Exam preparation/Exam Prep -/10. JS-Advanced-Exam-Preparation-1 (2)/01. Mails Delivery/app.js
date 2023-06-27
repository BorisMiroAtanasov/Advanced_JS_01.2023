function solve() {
    const rcipientInputElement = document.getElementById('recipientName');
    const titleInputElemet = document.getElementById('title');
    const massageInputElement = document.getElementById('message');
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    const listElement = document.querySelector('.list-mails');
    const listElementUl = document.getElementById('list');

    addBtn.addEventListener('click', (event) =>{
        event.preventDefault();

    if(!rcipientInputElement.value || titleInputElemet.value =='' || massageInputElement.value =='' ){
        return
    };

    let textAreaLi = document.createElement('li');
    let headTitle = document.createElement('h4');
    let headRecipient= document.createElement('h4');
    let massage = document.createElement('span');

    let listAction = document.createElement('div');
    listAction.setAttribute("id", "list-action")

    let sendBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    sendBtn.setAttribute("type", "submit");
    sendBtn.setAttribute("id", "send");
    sendBtn.textContent = 'Send';

    deleteBtn.setAttribute("type", "submit");
    deleteBtn.setAttribute("id", "delete");
    deleteBtn.textContent = 'Delete';


    listAction.appendChild(sendBtn);
    listAction.appendChild(deleteBtn);

    headTitle.textContent = `Title: ${titleInputElemet.value}`;
    headRecipient.textContent = `Recipient Name: ${rcipientInputElement.value}`;
    massage.textContent = massageInputElement.value;

    textAreaLi.appendChild(headTitle);
    textAreaLi.appendChild(headRecipient);
    textAreaLi.appendChild(massage);
    textAreaLi.appendChild(listAction);

    listElementUl.appendChild(textAreaLi)



    });

    resetBtn.addEventListener('click', (event) =>{
        event.preventDefault();

        rcipientInputElement.value = '';
        titleInputElemet.value = '';
        massageInputElement.value = '';
        
    })






}
solve()