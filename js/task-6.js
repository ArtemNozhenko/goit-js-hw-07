function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector('#boxes');
const numberInput = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  amount = numberInput.value;
  if (amount > 0 && amount <= 100) {
    let size = 30;
    for (let i = 1; i <= amount; i += 1) {
      const square = `<div style="width: ${size}px; height: ${size}px; background: ${getRandomHexColor()}"></div>`;
      box.insertAdjacentHTML('beforeend', square);
      size += 10;
    }
  }
  numberInput.value = '';
}

function destroyBoxes() {
  box.innerHTML = '';
}
