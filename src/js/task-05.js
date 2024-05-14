const inputRef = document.querySelector('#name-input');

const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', changeInput);
function changeInput(evt) {
  if (evt.currentTarget.value) {
    outputRef.textContent = evt.currentTarget.value;
    return;
  }
  outputRef.textContent = 'Anonymous';
}
