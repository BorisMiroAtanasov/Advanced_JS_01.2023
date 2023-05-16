function encodeAndDecodeMessages() {
   let encodeTextArea = Array.from(document.querySelectorAll('textarea'))[0]
   let dencodeTextArea = Array.from(document.querySelectorAll('textarea'))[1]


   let stringForEncode = encodeTextArea.value;
   arrayForEncode = stringForEncode.split('');
   let result =''


  // console.log(arrayForEncode);

   for (let i=0 ; i < arrayForEncode.length ; i++){
    let curent = stringForEncode.charCodeAt(i);
    result = curent + 1 






    console.log(result);
   }

   


}