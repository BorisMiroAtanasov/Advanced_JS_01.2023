function solve() {
  const rcipientInputElement = document.getElementById("recipientName");
  const titleInputElemet = document.getElementById("title");
  const massageInputElement = document.getElementById("message");
  const addBtn = document.getElementById("add");
  const resetBtn = document.getElementById("reset");
  const listElement = document.querySelector(".list-mails");
  const listElementUl = document.getElementById("list");

  addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (
      !rcipientInputElement.value ||
      titleInputElemet.value == "" ||
      massageInputElement.value == ""
    ) {
      return;
    }

    let textAreaLi = document.createElement("li");
    let headTitle = document.createElement("h4");
    let headRecipient = document.createElement("h4");
    let massage = document.createElement("span");

    let listAction = document.createElement("div");
    listAction.setAttribute("id", "list-action");

    let sendBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    sendBtn.setAttribute("type", "submit");
    sendBtn.setAttribute("id", "send");
    sendBtn.textContent = "Send";

    deleteBtn.setAttribute("type", "submit");
    deleteBtn.setAttribute("id", "delete");
    deleteBtn.textContent = "Delete";

    listAction.appendChild(sendBtn);
    listAction.appendChild(deleteBtn);

    headTitle.textContent = `Title: ${titleInputElemet.value}`;
    headRecipient.textContent = `Recipient Name: ${rcipientInputElement.value}`;
    massage.textContent = massageInputElement.value;

    textAreaLi.appendChild(headTitle);
    textAreaLi.appendChild(headRecipient);
    textAreaLi.appendChild(massage);
    textAreaLi.appendChild(listAction);

    listElementUl.appendChild(textAreaLi);

    let sendMailsUl = document.querySelector(".sent-list");
    let sendMailLi = document.createElement("li");
    //console.log(sendMailsUl);
    let spanName = document.createElement("span");
    let spanTitle = document.createElement("span");

    let listActionDiv = document.createElement("div");
    listActionDiv.setAttribute("class", "btn");

    let deleteBtninDiv = document.createElement("button");
    deleteBtninDiv.setAttribute("type", "submit");
    deleteBtninDiv.textContent = "Delete";

    

    sendBtn.addEventListener("click", (event) => {
      let clickedMail = event.currentTarget.parentNode.parentNode;
      // console.log(clickedMail);

      let currentMail = clickedMail.parentNode;
      let elementsOfMail = Array.from(currentMail.firstElementChild.childNodes);
      // let currentTitle = ;

      spanName.textContent = `To: ${
        elementsOfMail[1].textContent.split(": ")[1]
      }`;
      spanTitle.textContent = `Title: ${
        elementsOfMail[1].textContent.split(": ")[1]
      }`;

      listActionDiv.appendChild(deleteBtninDiv);

      sendMailLi.appendChild(spanName);
      sendMailLi.appendChild(spanTitle);
      sendMailLi.appendChild(listActionDiv);

      sendMailsUl.appendChild(sendMailLi);
      textAreaLi.remove();
    });
    let ulInDeleteList = document.querySelector('.delete-list')
    let liInDeletelist = document.createElement('li');

    deleteBtninDiv.addEventListener('click' , (event) =>{
        let clickedMail = event.currentTarget.parentNode.parentNode;

        let spanForName = document.createElement('span')
        let spanForTitle = document.createElement('span')

        let currentMail = clickedMail.parentNode;
        let elementsOfMail = Array.from(currentMail.firstElementChild.childNodes);

        spanForName.textContent = `To: ${
            elementsOfMail[1].textContent.split(": ")[1]
          }`;

          spanForTitle.textContent=`Title: ${
            elementsOfMail[1].textContent.split(": ")[1]
          }`;


        liInDeletelist.appendChild(spanForName);
        liInDeletelist.appendChild(spanForTitle);
        ulInDeleteList.appendChild(liInDeletelist);

        sendMailLi.remove();
    })
    


    deleteBtn.addEventListener('click', (event)=>{
        let clickedMail = event.currentTarget.parentNode.parentNode;

        let spanForName = document.createElement('span')
        let spanForTitle = document.createElement('span')

        let currentMail = clickedMail.parentNode;
        let elementsOfMail = Array.from(currentMail.firstElementChild.childNodes);

        spanForName.textContent = `To: ${
            elementsOfMail[1].textContent.split(": ")[1]
          }`;

          spanForTitle.textContent=`Title: ${
            elementsOfMail[1].textContent.split(": ")[1]
          }`;


        liInDeletelist.appendChild(spanForName);
        liInDeletelist.appendChild(spanForTitle);
        ulInDeleteList.appendChild(liInDeletelist);

        textAreaLi.remove();



    })


  });

  resetBtn.addEventListener("click", (event) => {
    event.preventDefault();

    rcipientInputElement.value = "";
    titleInputElemet.value = "";
    massageInputElement.value = "";
  });
}
solve();
