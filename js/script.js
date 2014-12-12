(function() {

var photos = document.querySelectorAll('.photo');
var text   = document.querySelector('.bros-in');
text.style.opacity = 0;

for (var i = 0; i < photos.length; i++) {
  photos[i].addEventListener('mouseenter', function() {
    text.style.opacity = 1;
    text.innerHTML = "Bros in <span>"+this.getAttribute('data-year')+"</span>";
  });
  photos[i].addEventListener('mouseleave', function() {
    text.style.opacity = 0;
  })
}

})();