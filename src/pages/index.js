import '../pages/index.css';

const homeButton = document.querySelector('.home-button');

window.addEventListener('scroll', () => {
  if (pageYOffset >= 200) {
    homeButton.classList.add('home-button_active');
  } else {
    homeButton.classList.remove('home-button_active');
  }
});
