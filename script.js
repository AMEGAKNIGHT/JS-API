let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 56.84330448478572, lng: 60.64565091048714},
    scrollwheel: true,
    zoom: 15,
  });
  
}