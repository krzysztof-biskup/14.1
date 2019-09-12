var elem = document.querySelector('.main-carousel');

var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false,
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var buttonClickReset = document.querySelector('.button');
buttonClickReset.addEventListener( 'click', function( event ) {
  flkty.select(0);
});
