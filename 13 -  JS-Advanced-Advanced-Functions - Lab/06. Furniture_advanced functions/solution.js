function solve() {
  const [input, outupt] = Array.from(document.querySelectorAll("textarea"));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
  const tbody = document.querySelector("tbody");

  generateBtn.addEventListener("click", generate);

  function generate() {
    const data = JSON.parse(input.value);

    for (const item of data) {
      const row = createRow(item);
      tbody.appendChild(row);
    }
  }
  function createRow(item) {
    const row = document.createElement("tr");

    
    
    

    row.appendChild(createCol(createImg(item.img)));
    row.appendChild(createCol(createPara(item.name)));
    row.appendChild(createCol(createPara(item.price)));
    row.appendChild(createCol(createPara(item.decFactor)));
    row.appendChild(createCol(createCheck()));

    return row;
  }

  function createCol(content) {
    const col = document.createElement("td");
    col.scope = "col";
    
    col.appendChild(content);
    return col;
  }

  function createPara(content){
    const p = document.createElement("p");
    p.textContent = content;

    return p;

  }

  function createImg(src){
    const img = document.createElement("img");
    img.src = src;
    return img;

  }

  function createCheck(){
    const check = document.createElement("input");
    check.type = 'checkbox';
    return check;

  }
}
