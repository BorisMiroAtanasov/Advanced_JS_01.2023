function colorize() {

    const colorized = document.querySelectorAll('table tr');
    let index = 0;
    for (const row of colorized) {
        index++;
        if(index % 2 == 0){
            row.style.background = 'teal'
        }
    }

    //colorized.style.background = 'teal'


    
  
}











/* Not working

function colorize() {

    const colorized = document.querySelector('table tr:nth-child(even)');
    colorized.style.background = 'teal'

  
}
*/