// Select elements
const darkModeHeader = document.querySelector('body');
const darkModeButton = document.querySelector('.dark');
const logoImage = document.querySelector('.logo img');
const paragraph = document.querySelectorAll('p');

function toggleDarkMode() {
  darkModeHeader.classList.toggle('body2');

  if (darkModeHeader.classList.contains('body2')) {
    logoImage.src = 'images/logo2.svg';
    paragraph.forEach((p) => (p.style.color = '#9e9fa1'));
  } else {
    logoImage.src = 'images/logo.svg';
    paragraph.forEach((p) => (p.style.color = '##3e414c'));
  }
}

// Attach the function to the button click event
darkModeButton.addEventListener('click', toggleDarkMode);
