let counterValue = 0;

const valueRef = document.querySelector('#value');

const decrementREf = document.querySelector('[data-action="decrement"]');
decrementREf.addEventListener('click', handleClickDecrement);
function handleClickDecrement() {
  counterValue -= 1;
  changeTextContent();
}

const incrementREf = document.querySelector('[data-action="increment"]');
incrementREf.addEventListener('click', handleClickIncrement);
function handleClickIncrement() {
  counterValue += 1;
  changeTextContent();
}

function changeTextContent() {
  valueRef.textContent = counterValue;
}
