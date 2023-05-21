function focused() {
    const parent = document.querySelector('div');

    parent.addEventListener('focusin',onFocus);
    parent.addEventListener('focusout',onBlure);

    function onFocus(event) {
        event.target.parentElement.classList.add('focused');
        

    }

    function onBlure(event) {
        event.target.parentElement.classList.remove('focused');
        

    }






}
