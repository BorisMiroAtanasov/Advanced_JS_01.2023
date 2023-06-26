window.addEventListener("load", solve);

function solve() {
  const modelFild = document.getElementById("model");
  const yearFild = document.getElementById("year");
  const descriptionFild = document.getElementById("description");
  const priceFild = document.getElementById("price");
  const addBtn = document.getElementById("add");
  const furnitureListElement = document.getElementById("furniture-list");
  
  addBtn.addEventListener("click", addFurniture);

  function addFurniture(event) {
    event.preventDefault();

    let newRow = document.createElement("tr");
    let newTdModel = document.createElement("td");
    let newTdPrice = document.createElement("td");
    let actionCellElement = document.createElement("td");
    let moreInfoBtn = document.createElement("button");
    let buyBtn = document.createElement("button");
    let contentRow = document.createElement("tr");
    let yearTd = document.createElement("td");
    let description = document.createElement("td");

    let totalPriceEl = document.querySelector('.total-price')
    if (modelFild.value == "" || descriptionFild.value == "") {
      return;
    }
    if (yearFild.value <= 0 || priceFild.value <= 0) {
      return;
    }

    let priceOfProduct = Number(priceFild.value);
    newTdModel.textContent = modelFild.value;
    newTdPrice.textContent = priceOfProduct.toFixed(2);
    moreInfoBtn.textContent = "More Info";
    buyBtn.textContent = "Buy it";
    buyBtn.classList.add("buyBtn");
    moreInfoBtn.classList.add("moreBtn");

    
    // newRow.appendChild(moreInfoBtn);
    // newRow.appendChild(buyBtn);

   

    moreInfoBtn.addEventListener('click', (event) =>{
        if(event.currentTarget.textContent == 'More Info'){
            contentRow.style.display = "contents"
            event.currentTarget.textContent = 'Less Info'
        }else{
            contentRow.style.display = "none"
            event.currentTarget.textContent = 'More Info'

        }
    });
    buyBtn.addEventListener('click', (event) =>{
        let curentSum = Number(totalPriceEl.textContent);
        let totalPrice= curentSum+ Number(priceFild.value);
        totalPriceEl.textContent = totalPrice.toFixed(2);

        newRow.remove();
        contentRow.remove();
    })

    actionCellElement.appendChild(moreInfoBtn);
    actionCellElement.appendChild(buyBtn);

    newRow.classList.add('info');

    newRow.appendChild(newTdModel);
    newRow.appendChild(newTdPrice);
    newRow.appendChild(actionCellElement);

    yearTd.textContent = `Year: ${descriptionFild.value}`;
    description.setAttribute('colspan', 3);
    description.textContent = `Description: ${descriptionFild.value}`;



contentRow.classList.add('hide');
contentRow.style.display = 'none';

contentRow.appendChild(yearTd);
contentRow.appendChild(description);


furnitureListElement.appendChild(newRow);
furnitureListElement.appendChild(contentRow);





  }
}
