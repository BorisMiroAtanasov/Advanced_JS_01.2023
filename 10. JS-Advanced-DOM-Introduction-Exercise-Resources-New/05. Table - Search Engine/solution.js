function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputText = document.getElementById('searchField');
      //const data = Array.from(document.querySelectorAll('.container tr'));
      let rows = document.querySelectorAll('tbody tr');


      for (const row of rows) {
         row.classList.remove('select');
         if(inputText.value !== '' && row.innerHTML.includes(inputText.value)){
            row.className = 'select'
         }
         
      }
      inputText.value = '';
     

   }
}