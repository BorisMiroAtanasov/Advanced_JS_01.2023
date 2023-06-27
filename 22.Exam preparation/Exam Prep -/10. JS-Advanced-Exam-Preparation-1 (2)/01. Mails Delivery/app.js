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

    if(rcipientInputElement.value === '' || titleInputElemet ==='' || massageInputElement ==='' ){
        return
    };

    let textAreaLi = document.createElement('li');
    let headTitle = document.createElement('h4');
    let headRecipient= document.createElement('h4');
    let massage = document.createElement('span');

    let listAction = document.createElement('div');


    




    });




}
solve()