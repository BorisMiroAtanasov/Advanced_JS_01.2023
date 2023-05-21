function solve() {
    const input = document.getElementById('input');
    let result = document.getElementById('result');

    const firstOption = document.createElement('option');
    const secondOption = document.createElement('option');

    firstOption.value = 'binary';
    secondOption.value = 'hexadecimal';

    firstOption.textContent = 'Binary'
    secondOption.innerHTML = 'Hexadecimal'

    const menuToElement = document.getElementById('selectMenuTo');
    menuToElement.appendChild(firstOption);
    menuToElement.appendChild(secondOption);

    const btn = document.getElementsByTagName('button')[0];
    //console.log('btn clicked');
    btn.addEventListener('click', () =>{
        if(menuToElement.value === 'binary') {
            result.value = Number(input.value).toString(2)
        }else if (menuToElement.value === 'hexadecimal'){
            result.value = Number(input.value).toString(16).toUpperCase();


        }

    });

   





    


}