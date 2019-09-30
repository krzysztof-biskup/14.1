var elem = document.querySelector('.main-carousel');
var progressBar = document.querySelector('.progress-bar');
var buttonClickReset = document.querySelector('.button');

var templateSlide = document.getElementById('template-slide').innerHTML;

for (var i = 0; i < slajds.length; i++) {
var generatedSlide = Mustache.render(templateSlide, slajds[i]);

result.insertAdjacentHTML('beforeend', generatedSlide);
};

var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false
});

flkty.on('scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

buttonClickReset.addEventListener('click', function() {
  flkty.select(0);
});

