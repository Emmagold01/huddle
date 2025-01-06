// Select elements
const darkModeHeader = document.querySelector('body');
const darkModeButton = document.querySelector('.dark');
const navbar = document.querySelector('.navbar');
const logoImage = document.querySelector('.logo img');
const paragraph = document.querySelectorAll('p');

function toggleDarkMode() {
  darkModeHeader.classList.toggle('body2');

  if (darkModeHeader.classList.contains('body2')) {
    darkModeButton.textContent = 'Light Mode';
    logoImage.src = 'images/logo2.svg';
    paragraph.forEach((p) => (p.style.color = '#9e9fa1'));
  } else {
    darkModeButton.textContent = 'Dark Mode';
    logoImage.src = 'images/logo.svg';
    paragraph.forEach((p) => (p.style.color = '##3e414c'));
  }
}

// Attach the function to the button click event
darkModeButton.addEventListener('click', toggleDarkMode);
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('navbar2');
  } else {
    navbar.classList.remove('navbar2');
  }

  if (darkModeHeader.classList.contains('body2') && window.scrollY > 30) {
    navbar.classList.add('navbar3');
  } else {
    navbar.classList.remove('navbar3');
  }
});
