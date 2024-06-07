const darkButton = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');
const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

darkButton.addEventListener('click', () => {
  if (darkButton.textContent === 'Darken') {
    overlay.style.display = 'block';
    darkButton.textContent = 'Lighten';
  } else {
    overlay.style.display = 'none';
    darkButton.textContent = 'Darken';
  }
});

thumbBar.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    displayedImg.src = e.target.src;
  }
});
