mapboxgl.accessToken = "pk.eyJ1IjoiZ3BibWlrZSIsImEiOiJjajQwNGZybzgwMDM1MndwbHpqcHRmbnQyIn0.YORNVupiyDJPBa8Bed0jzg";

var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: [-95.27, 29.78], // starting position [lng, lat]
  zoom: 10, // starting zoom
  preserveDrawingBuffer: true
});

const mapContainer = document.getElementById("map");
const options = document.getElementById("options");

options.addEventListener("submit", function(event) {
  event.preventDefault();

  const width = event.target.width.value;
  const height = event.target.height.value;

  mapContainer.style.width = `${width}px`;
  mapContainer.style.height = `${height}px`;

  map.resize();
});
