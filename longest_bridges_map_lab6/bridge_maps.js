//Your map should have an appropriate size, center location, and zoom level, to clearly show all five bridges.
let usCenterCoordinates = [39.83, -98.35]
let zoomLevel = 4 //1 = whole world to 20 = city blocks

let map = L.map('bridge-map').setView(usCenterCoordinates, zoomLevel)
//variable L created in Leaflet file in HTML  //'college-map' tells you where map is drawn (inside div with that name)

//mapbox, maps.stamen.com, openStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Use the dataset to draw a Leaflet map showing a marker for each of the five bridges with the longest spans in the USA.
//Put all the data into an array of objects
long_bridges =  [
    {"name": "Verrazano-Narrows Bridge", "location": "New York, New York", "span": 1298.4, "coordinates": [40.6066, -74.0447] },
    {"name": "Golden Gate Bridge", "location": "San Francisco and Marin, CA", "span": 1280.2, "coordinates": [37.8199, -122.4783] },
    {"name": "Mackinac Bridge", "location": "Mackinaw and St Ignace, MI", "span": 1158.0, "coordinates": [45.8174, -84.7278] },
    {"name": "George Washington Bridge", "location": "New York, NY and New Jersey, NJ", "span": 1067.0, "coordinates": [40.8517, -73.9527] },
    {"name": "Tacoma Narrows Bridge", "location": "Tacoma and Kitsap, WA", "span": 853.44, "coordinates": [47.2690, -122.5517] }
]

//loop over array to create the markers and popups
long_bridges.forEach(function(long_bridge){
    let markerText = `<b>${long_bridge.name}</b><br>Span: ${long_bridge.span}m` //Each marker should have a popup with the bridge's name and span length.

    let bridgeBasicIcon = L.icon({
        iconUrl: 'bridge.png',
        iconSize:     [40, 75], // size of the icon
        iconAnchor:   [9, 50], // point of the icon which will correspond to marker's location
        popupAnchor:  [-2, -60] // point from which the popup should open relative to the iconAnchor
    })


        L.marker(long_bridge.coordinates, {icon: bridgeBasicIcon}).addTo(map).bindPopup(markerText)
        //L.marker(long_bridge.coordinates).bindPopup(markerText).addTo(map)  //just regular markers
})



    // let longestBridgeIcon = L.icon.extend({
    //     options: {
    // iconSize:     [40, 75], // size of the icon
    // iconAnchor:   [9, 50], // point of the icon which will correspond to marker's location
    // popupAnchor:  [-2, -60] // point from which the popup should open relative to the iconAnchor
    //     }
    // })




