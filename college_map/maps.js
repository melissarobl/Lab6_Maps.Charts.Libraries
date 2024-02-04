let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9 //1 = whole world to 20 = city blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)
//variable L created in Leaflet file in HTML  //'college-map' tells you where map is drawn (inside div with that name)

//mapbox, maps.stamen.com, openStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

campuses.forEach(function(collegeCampus){
    let markerText = `<b>${collegeCampus.name}</b><br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)  //loop creating each marker
})

// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//         .bindPopup('Minneapolis College<br><a href ="https://minneapolis.edu">Website</a>')
//         .addTo(map)
//
// let stPaulCoordinates = [44.9483, -93.1099]
// let stpMarker = L.marker(stPaulCoordinates)
//         .bindPopup('St. Paul College<br><a href ="https://www.saintpaul.edu">Website</a>')
//         .addTo(map)
//
// let NormandaleCoordinates = [44.8297, -93.3312]
// let normandaleMarker = L.marker(NormandaleCoordinates)
//     .bindPopup('Normandale Community College<br><a href ="https://www.normandale.edu">Website</a>')
//     .addTo(map)

let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 30000,
    fillOpacity: 0.1
})
        .bindPopup('Twin Cities Metro Area')
        .addTo(map)