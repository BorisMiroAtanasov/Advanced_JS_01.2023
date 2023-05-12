function create(words) {
   const divContent = document.getElementById('content');
 
   for (const el of words) {
      let div =  document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = el;
      paragraph.style.display = 'none'
    
      div.appendChild(paragraph);
       divContent.appendChild(div)
     
      
   }
   divContent.addEventListener('click',onClick)

   function onClick(ev){
      ev.target.children[0].style.display = ''


   }

   

}