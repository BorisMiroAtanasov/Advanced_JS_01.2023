function toggle() {
    const btn = document.querySelector('.button');
    let hidenText = document.getElementById('extra');

    if(  btn.textContent === 'More'){
        btn.textContent = 'Less';

        hidenText.style.display = 'block'


    } else if (btn.textContent === 'Less'){
        btn.textContent = 'More';

        hidenText.style.display = 'none'

    }

    
    

    //console.log(hidenText);

}