function validate() {
  let inputField = document
    .getElementById("email")
    .addEventListener("change", onChange);

  //let pattern = /^(?<name>[a-z]+)@(?<domain>[a-z]+)\.(?<extension>[a-z]+)+$/gm;

  let pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

  function onChange(event) {
    if (pattern.test(event.target.value)) {
      event.target.classList.remove("error");
    } else {
      event.target.classList.add("error");
    }
  }
}
