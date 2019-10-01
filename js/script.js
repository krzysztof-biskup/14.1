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

// Initialize and add the map
window.initMap = function initMap() {
  // The location of Uluru
  var uluru = {lat: 49.628167, lng: 20.703000};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

