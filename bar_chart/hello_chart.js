let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: { //this is an object
        labels: ['Coke', 'Pepsi', 'Sprite', 'Either', 'Neither'],  //labels for each bar
        datasets: [ {
            label: 'Number of votes',
            data: [18, 14, 7, 10, 8],
            backgroundColor: ['yellow', 'green', 'orange', 'purple', 'brown' ]
        } ]
    },
    //goes after data attribute
    options: {
        scales: {
            yAxes: [{  //array contains objects
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})