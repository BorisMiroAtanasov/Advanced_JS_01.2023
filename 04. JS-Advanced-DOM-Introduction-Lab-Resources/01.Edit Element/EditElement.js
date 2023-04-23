function editElement(element, match, replacer) {

    const pattern = new RegExp(match, "g")
    const text = element.textContent;

    const result  = text.replace(pattern, replacer);

    element.textContent = result;

   // console.log(text);
}


/* secon variant

function editElement(element, match, replacer) {

   
    const text = element.textContent;

    const result  = text.split(match).join(replacer)

    element.textContent = result;

   // console.log(text);
}


*/