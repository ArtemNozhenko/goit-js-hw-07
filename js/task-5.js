function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const colorName = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', handleClick);

function handleClick() {
  const getRandom = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandom;
  colorName.textContent = getRandom;
}
