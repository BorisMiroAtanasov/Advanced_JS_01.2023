function solve() {
    const textAreas = document.querySelectorAll('textarea');
    let inputArea = textAreas[0].value;
    let outPutArea = textAreas[1].value;
    const tableRow = document.querySelectorAll('.table tbody tr')
    //console.log(tableRow);
  
    const buttons = document.querySelectorAll('button');
  
    let generateBtn = buttons[0];
    let buyBtn = buttons[1];
  
    generateBtn.addEventListener('click', generate);
  
    function generate() {
      //current = JSON.stringify(inputArea);
      current = JSON.parse(inputArea);
      // console.log(current);
      current.forEach(element => {
        let currentTd = document.createElement('td');
        let newParagraph = document.createElement('p');
        
        
  
        for (const key in element) {
          newParagraph.textContent = element[key]
         // currentTd.appendChild(newParagraph)
         //console.log(newParagraph.textContent);
        //currentTd.appendChild(newParagraph)
        console.log(currentTd);
  
  
  
        }
  
  
      });
  
  
    }
  
  
  
  }
  
  
  
  
  
  
  
  
  
  
  
  