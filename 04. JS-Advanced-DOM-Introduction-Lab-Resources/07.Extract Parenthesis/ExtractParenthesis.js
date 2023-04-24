/*
function extract(content) {

    let param = document.getElementById(content);

    let pattern = /\(([^)]+)\)/g;

    let result = [];

    let maches = param.textContent.matchAll(pattern);

for (const match of maches) {
    result.push(match[1])

    
}
return result.join('; ')
    

}
*/

 /*
  function extract(elementId) {
  let para = document.getElementById(elementId).textContent;
  let pattern = /\(([^)]+)\)/g;
  let result = [];

  let match = pattern.exec(para);
  while(match) {
    result.push(match[1]);
    match = pattern.exec(para);
  }

  return result.join('; ');
}
*/


function extract(content) {
    let contentElement = document.getElementById(content)
    let pattern = /\(([^)]+)\)/g;
    let result = [];
  
    let matches = contentElement.textContent.matchAll(pattern)
  for (const match of matches) {
    result.push(match[1]);
     
  }
  
    return result.join('; ');
  }

  
