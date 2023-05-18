function encodeAndDecodeMessages() {
   let encodeTextArea = Array.from(document.querySelectorAll('textarea'))[0]
   let dencodeTextArea = Array.from(document.querySelectorAll('textarea'))[1]


   let stringForEncode = encodeTextArea.value;
   arrayForEncode = stringForEncode.split('');
   let result =''
   let newStringArr = []


  // console.log(arrayForEncode);

   for (let i=0 ; i < arrayForEncode.length ; i++){
    let curent = stringForEncode.charCodeAt(i);
    result = curent + 1;
    newStringArr.push(result);


   }
   for(let i = 0 ; i<newStringArr.length ; i++ ){
    let currentLetter = newStringArr.fromCharCode(i)
    console.log(currentLetter);
   }


//    console.log(newStringArr);
//    let res = String.fromCharCode(newStringArr);
//    console.log(res);
   

   


}