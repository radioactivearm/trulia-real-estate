// leaflet map lives here

// var mapWidth = d3.select('#map').property('offsetWidth');
// var mapHeight = 3 * mapWidth / 4;
// d3.select('#map').attr('width', mapWidth).attr('height', mapHeight);

var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
});

var myMap = L.map("map", {
    center: [40.7608, -111.8910],
    // center: [37.09, -95.71],
    zoom: 4,
    layers: [lightmap]
});

lightmap.addTo(myMap);