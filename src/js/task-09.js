const changeColorBtnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const textRef = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', clickBtnHandler);

function clickBtnHandler() {
  textRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
