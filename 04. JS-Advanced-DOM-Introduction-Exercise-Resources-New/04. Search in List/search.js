function search() {
  const serchText = document.getElementById("searchText").value;
  const towns = Array.from(document.querySelectorAll("#towns li"));
  const resultElement = document.getElementById("result");
  let count = 0;

  for (const town of towns) {
    if (town.textContent.includes(serchText)) {
      count++;
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
    }else{
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
      
    }

  }

  resultElement.textContent = `${count} matches found`;

}
