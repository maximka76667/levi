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
