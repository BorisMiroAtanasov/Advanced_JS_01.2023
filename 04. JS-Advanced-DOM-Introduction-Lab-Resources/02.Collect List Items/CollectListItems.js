// function extractText() {
//     const text = document.getElementById('items').textContent

//     const textArea = document.getElementById('result');
//     textArea.value = text


    
// }



function extractText() {
    const text = document.getElementById('items');
    const resultArr  = Array.from(text.children) ;

   let newResultArr = resultArr
    .map( li => li.textContent)
    .join('\n');

    let textArea = document.getElementById('result');
    textArea.value = newResultArr

   

    
}