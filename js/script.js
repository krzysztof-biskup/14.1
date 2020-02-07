var elem = document.querySelector('.main-carousel');
var progressBar = document.querySelector('.progress-bar');
var buttonClickReset = document.querySelector('.button');
var templateSlide = document.getElementById('template-slide').innerHTML;
for (var i = 0; i < slajds.length; i++) {
  var generatedSlide = Mustache.render(templateSlide, slajds[i]);
  result.insertAdjacentHTML('beforeend', generatedSlide);
};
var flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false,
  freeScroll: true,
  cellSelector: '.carousel-cell'
});
flkty.on('scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
buttonClickReset.addEventListener('click', function() {
  flkty.select(0);
});
window.initMap = function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: slajds[0].coords});
  var flkty = new Flickity('.main-carousel');
  flkty.on( 'change', function( index ) {
    map.panTo(slajds[index].coords);
});
  for (let i = 0; i < slajds.length; i++) {
    var marker = new google.maps.Marker({position: slajds[i].coords, map: map});   
    marker.addListener('click', function() {
      flkty.select(i)
    });
  }
}
