

var map = L.map('map').setView([40.730, -73.947344], 13);

L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

var marker = L.marker([40.708051, -73.899450]).addTo(map);
marker.bindPopup("My apartment").openPopup();

var wmarker = L.marker([40.748052, -73.983822]).addTo(map);
wmarker.bindPopup("My work").openPopup();