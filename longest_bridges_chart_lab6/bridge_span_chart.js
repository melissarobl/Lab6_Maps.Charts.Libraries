long_bridges =  [
    {"name": "Verrazano-Narrows Bridge", "location": "New York, New York", "span": 1298.4, "coordinates": [40.6066, -74.0447] },
    {"name": "Golden Gate Bridge", "location": "San Francisco and Marin, CA", "span": 1280.2, "coordinates": [37.8199, -122.4783] },
    {"name": "Mackinac Bridge", "location": "Mackinaw and St Ignace, MI", "span": 1158.0, "coordinates": [45.8174, -84.7278] },
    {"name": "George Washington Bridge", "location": "New York, NY and New Jersey, NJ", "span": 1067.0, "coordinates": [40.8517, -73.9527] },
    {"name": "Tacoma Narrows Bridge", "location": "Tacoma and Kitsap, WA", "span": 853.44, "coordinates": [47.2690, -122.5517] }
]

/* Get chart canvas and contex  */
let chartCanvas = document.querySelector('#bridges-doughnut-chart')
let ctx = chartCanvas.getContext('2d')


// create chart object
let bridgeSpanChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [], //no data entered yet
                backgroundColor: []

            }
        ],
        labels: []
    },
    options: {} //options object. fill thing in here later
})


let chartColors = [ 'maroon', 'mediumseagreen', 'steelblue', 'darkmagenta', 'rosybrown', 'goldenrod', 'hotpink', 'teal', 'midnightblue', 'palevioletred']


function addBridgeToChart(name, span) {  // name will be added to labels, span will be added to data (numbers)


    // add bridge and span info to chart
    bridgeSpanChart.data.labels.push(name)
    bridgeSpanChart.data.datasets[0].data.push(span)

    let colorCount = bridgeSpanChart.data.datasets[0].backgroundColor.length //how many colors we have used so far
    let color = chartColors[ colorCount % chartColors.length ] //dividing

    console.log(colorCount, color)
    bridgeSpanChart.data.datasets[0].backgroundColor.push(color)  //push new color onto array

    bridgeSpanChart.update()
}

    // call function to update chart
long_bridges.forEach(function (bridge) {  //loop through long bridges array
    addBridgeToChart(bridge.name, bridge.span) //for each loop add the bridge name and bridge span to the chart
})


