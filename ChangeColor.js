const colorBtn = document.querySelector('.colorButton');
const bodyBackground = document.querySelector('body');
const colors = ['yellow', 'blue', 'black', 'green', '#ff7c02'];


colorBtn.addEventListener('click', changeColor);

function changeColor() {
  let random = Math.floor(Math.random()*colors.length)
  bodyBackground.style.backgroundColor = colors[random];
}
