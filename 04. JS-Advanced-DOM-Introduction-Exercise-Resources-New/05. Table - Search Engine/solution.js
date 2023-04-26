function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputText = document.getElementById('searchField').value;
      //const data = Array.from(document.querySelectorAll('.container tr'));
      let rows = document.querySelectorAll('tbody tr');


      for (const row of rows) {
         row.classList.remove('select');
         if(inputText !== '' && row.innerHTML.includes(inputText)){
            row.className = 'select'
         }
         
      }
     

   }
}