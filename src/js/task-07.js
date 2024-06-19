const inputRef = document.querySelector('#font-size-control');
const textChangeRef = document.querySelector('#text');

inputRef.addEventListener('input', changeWord);

function changeWord(evt) {
  const { value } = evt.currentTarget;
  textChangeRef.style.fontSize = `${value}px`;
}
