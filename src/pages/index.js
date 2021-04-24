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

document.querySelector('#right').addEventListener('click', () => {
  offset += 1110; //Перемещение на следующий элемент,как вариант можно брать не 1110,а ширину "постов" для адаптивности
  if (offset > 2220) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('#left').addEventListener('click', () => {
  offset -= 1110;
  if (offset < 0) {
    offset = 2220;
  }
  sliderLine.style.left = -offset + 'px';
});

//slider
