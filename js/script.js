(function() {

const photos = document.querySelectorAll('.photo');
const text = document.querySelector('.bros-in');

text.style.opacity = 0;

photos.forEach(photo => {
  photo.addEventListener('mouseenter', ({ target }) => {
    text.style.opacity = 1;
    text.innerHTML = `Bros in <span>${target.getAttribute('data-year')}</span>`;
  });

  photo.addEventListener('mouseleave', () => {
    text.style.opacity = 0;
  });
});

})();
