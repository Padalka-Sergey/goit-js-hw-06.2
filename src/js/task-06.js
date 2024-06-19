const textInputRef = document.querySelector('#validation-input');
const dataLength = Number(textInputRef.dataset.length);

textInputRef.addEventListener('blur', addClass);

function addClass(event) {
  const symbolsLength = event.target.value.length;

  if (symbolsLength === dataLength) {
    textInputRef.classList.add('valid');
    return;
  }
  textInputRef.classList.add('invalid');
}

textInputRef.addEventListener('focus', removeClass);

function removeClass() {
  if (textInputRef.classList.contains('valid')) {
    textInputRef.classList.remove('valid');
    return;
  }

  if (textInputRef.classList.contains('invalid')) {
    textInputRef.classList.remove('invalid');
    return;
  }
}
