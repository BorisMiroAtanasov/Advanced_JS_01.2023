function solve() {
  let text = document.getElementById("text").value;
  let naming = document.getElementById("naming-convention").value;
  let result = "";
  let resultContainer = document.getElementById("result");

  if (naming == "Camel Case") {
    for (let i = 0; i < text.length; i++) {
      if (text[i] == " ") {
        result += text[i + 1].toUpperCase();
        i++;
      } else {
        result += text[i].toLowerCase();
      }
    }

    // console.log(text);
  } else if (naming == "Pascal Case") {
    result += text[0].toUpperCase();
    for (let i = 1; i < text.length; i++) {
      
      if (text[i] == " ") {
        result += (text[i + 1].toUpperCase());
        i++;
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else {
    result = "Error!";
  }
  resultContainer.textContent = result;
}
