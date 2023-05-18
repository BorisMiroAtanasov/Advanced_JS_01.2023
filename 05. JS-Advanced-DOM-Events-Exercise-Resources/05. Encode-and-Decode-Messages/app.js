function encodeAndDecodeMessages() {
  let encodeTextArea = Array.from(document.querySelectorAll("textarea"))[0];
  let dencodeTextArea = Array.from(document.querySelectorAll("textarea"))[1];
  const encodeBtn = Array.from(document.querySelectorAll("button"))[0];
  const decodeBtn = Array.from(document.querySelectorAll("button"))[1];

  encodeBtn.addEventListener("click", encode);
  decodeBtn.addEventListener("click", decode);

  function encode() {
    let stringForEncode = encodeTextArea.value;
    arrayForEncode = stringForEncode.split("");
    let result = "";
    let newStringArr = [];

    for (let i = 0; i < arrayForEncode.length; i++) {
      let curent = stringForEncode.charCodeAt(i);
      result = curent + 1;
      newStringArr.push(result);
    }
    let decodeMasage = "";
    for (let i = 0; i < newStringArr.length; i++) {
      let currentLetter = String.fromCharCode(newStringArr[i]);

      decodeMasage += currentLetter;
    }

    encodeTextArea.value = "";
    dencodeTextArea.value = decodeMasage;
  }

  function decode(){
    let stringForDecode = dencodeTextArea.value;
    arrayForDecode = stringForDecode.split("");
    let result = "";
    let newStringArr = [];

    for (let i = 0; i < arrayForDecode.length; i++) {
      let curent = stringForDecode.charCodeAt(i);
      result = curent - 1;
      newStringArr.push(result);
    }
    let decodeMasageNew = "";
    for (let i = 0; i < newStringArr.length; i++) {
      let currentLetter = String.fromCharCode(newStringArr[i]);

      decodeMasageNew += currentLetter;
    }

    encodeTextArea.value = "";
    dencodeTextArea.value = decodeMasageNew;

  }





}
