function attachGradientEvents() {
    const gradiaent = document.getElementById('gradient');
    gradiaent.addEventListener('click', onClick);


    function onClick(event){
        const x = event.offsetX;
        const percent = Math.floor(x /300 * 100);

        document.getElementById('result').textContent = percent + '%';

        

    }
}