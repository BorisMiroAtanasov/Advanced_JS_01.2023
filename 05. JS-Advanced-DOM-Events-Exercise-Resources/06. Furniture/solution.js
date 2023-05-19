function solve() {
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  

  generateBtn.addEventListener('click',generate);
 // buyBtn.addEventListener('click',buy);

 function generate(){
  const input = JSON.parse(document.querySelector('textarea').value)
  input.forEach(element => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const img = document.createElement('img');
    img.src = element.img;
    td1.appendChild(img);
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    const p1 = document.createElement('p');
    p1.textContent = element.name;
    td2.appendChild(p1);
    tr.appendChild(td2)




    
  });
 }


  


}











