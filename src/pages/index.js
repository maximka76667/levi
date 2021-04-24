import '../pages/index.css';

import { homeButton, progressBars, barsSettings } from '../utils/constants.js';

import '../utils/scroll.js';

window.addEventListener('scroll', () => {
  if (pageYOffset >= 200) {
    homeButton.classList.add('home-button_active');
  } else {
    homeButton.classList.remove('home-button_active');
  }
});

window.addEventListener('scroll', activateSkillBars);

function activateSkillBars() {
  if (pageYOffset >= 800) {
    for (let i = 0; i <= barsSettings.length - 1; i++) {
      progressBars[i].style.width = barsSettings[i];
    }
    window.removeEventListener('scroll', activateSkillBars);
  }
}

//slider

let offset = 0; // смещение от левого края

const sliderLine = document.querySelector('.portfolio__slider'); // "линия постов"

const postStyles = getComputedStyle(
  document.querySelector('.portfolio__container')
);

const postWidth = parseFloat(postStyles.width);

console.log(postWidth);

document.querySelector('#right').addEventListener('click', () => {
  offset += postWidth; //Перемещение на следующий элемент,как вариант можно брать не 1110,а ширину "постов" для адаптивности
  if (offset > postWidth * 2) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('#left').addEventListener('click', () => {
  offset -= postWidth;
  if (offset < 0) {
    offset = postWidth * 2;
  }
  sliderLine.style.left = -offset + 'px';
});

//slider
