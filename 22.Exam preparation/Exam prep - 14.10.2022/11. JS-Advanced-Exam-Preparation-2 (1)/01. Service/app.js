window.addEventListener("load", solve);

function solve(){
    const productType = document.getElementById('type-product');
    const description = document.getElementById('description');
    const clientName = document.getElementById('client-name');
    const clientPhone = document.getElementById('client-phone');
    //const sendBtn = document.querySelector('input[type="submit"]');
    const sendBtn = document.getElementsByTagName('button')[0];
    const rereceivedOrders = document.getElementById('received-orders')
    const completedOrders = document.getElementById('completed-orders')
    

    sendBtn.addEventListener('click', (event)=> {
        event.preventDefault();
        if(description.value && clientName.value && clientPhone.value){
            addClient( description.value, clientName.value, clientPhone.value, productType.value, rereceivedOrders )
            clearInputFields()
        }
        
        //console.log(productType.value);


    });
    function finishBtnProcess(e,currentDescription, currentClientName, currentClientPhone, product){
        e.preventDefault();
        
       e.target.parentNode.remove();
       // console.log( e.target.parentNode);
        description.value = currentDescription;
        clientName.value = currentClientName;
        clientPhone.value = currentClientPhone
        productType.value = product;

        addClient( currentDescription, currentClientName, currentClientPhone, product,completedOrders)
        completedOrders.querySelectorAll('button')[1].remove()
        completedOrders.querySelectorAll('button')[1].remove();

        const clearBtn = completedOrders.querySelector('button')
        //console.log(clearBtn);
        clearBtn.addEventListener('click', (e)=> {
           
            e.target.parentNode.lastElementChild.remove();
           // e.stopImmediatePropagation()
        })
        
        


    }

    function addClient( currentDescription, currentClientName, currentClientPhone, product,rereceivedOrders){
       const div = createElement('div', '', rereceivedOrders );
       div.setAttribute('class', 'container');
        createElement('h2', `Product type for repair: ${product}`, div);
        createElement('h3', `Client information: ${currentClientName}, ${currentClientPhone}`, div);
        createElement('h4', `Description of the problem: ${currentDescription}`, div);
        let startBtn = createElement('button', 'Start repair', div);
        startBtn.setAttribute('class', 'start-btn');
        let finishBtn = createElement('button', 'Finish repair', div);
        finishBtn.setAttribute('class', 'finish-btn');


        finishBtn.addEventListener('click', (e)=> finishBtnProcess(e,currentDescription, currentClientName, currentClientPhone, product) )


       
       //startBtn.disabled = 'true'
      

    }

    function createElement(type, content , parent){
        const element = document.createElement(type);
        element.textContent = content;
        if(parent){
            parent.appendChild(element)
        }
        return element
    }


    function clearInputFields(){
       
        description.value = '';
        clientName.value = '';
        clientPhone.value = '';
      
      }

   

    
}


