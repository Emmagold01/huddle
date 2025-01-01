// Select elements
const darkModeHeader = document.querySelector('body');
const darkModeButton = document.querySelector('.dark');
const logoImage = document.querySelector('.logo img');

function toggleDarkMode() {
  darkModeHeader.classList.toggle('body2');

  if (darkModeHeader.classList.contains('body2')) {
    logoImage.src = 'images/logo2.svg';
  } else {
    logoImage.src = 'images/logo.svg';
  }
}

// Attach the function to the button click event
darkModeButton.addEventListener('click', toggleDarkMode);
