function attachGradientEvents() {
    const gradiaent = document.getElementById('gradient');
    gradiaent.addEventListener('mousemove', onClick);
    gradiaent.addEventListener('mouseout', gradientOut);


    function onClick(event){
        const x = event.offsetX;
        const percent = Math.floor(x /300 * 100);

        document.getElementById('result').textContent = percent + '%';

    
    }

    function gradientOut(event){
        document.getElementById('result').textContent = '';


    }


}