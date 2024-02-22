let metroBusTimes = //objects - loop, access by property
    { //object
        "stops": [
            {
                "stop_id": 17940,
                "latitude": 44.973,
                "longitude": -93.284325,
                "description": "Hennepin Ave & Minneapolis College"
            }
        ],
        "alerts": [],
        "departures": [ //array (loop over items or access by element, index)
            {
                "actual": true,
                "trip_id": "24559037-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "19 Min",
                "departure_time": 1708562889,
                "description": "Downtown / Via Xerxes",
                "route_id": "6",
                "route_short_name": "6",
                "direction_id": 0,
                "direction_text": "NB",
                "schedule_relationship": "Scheduled"
            },
            {
                "actual": true,
                "trip_id": "24559185-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "21 Min",
                "departure_time": 1708563022,
                "description": "Johnson St / Silver Lk Vlg / Via Penn",
                "route_id": "4",
                "route_short_name": "4",
                "direction_id": 0,
                "direction_text": "NB",
                "terminal": "B",
                "schedule_relationship": "Scheduled"
            },
            {
                "actual": false,
                "trip_id": "24559076-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "6:53",
                "departure_time": 1708563180,
                "description": "27Av-Univ / Via France",
                "route_id": "6",
                "route_short_name": "6",
                "direction_id": 0,
                "direction_text": "NB",
                "terminal": "U",
                "schedule_relationship": "Scheduled"
            },
            {
                "actual": false,
                "trip_id": "24559189-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "7:03",
                "departure_time": 1708563780,
                "description": "Johnson St / Silver Lk Vlg / Via Lyndale",
                "route_id": "4",
                "route_short_name": "4",
                "direction_id": 0,
                "direction_text": "NB",
                "terminal": "B",
                "schedule_relationship": "Scheduled"
            },
            {
                "actual": false,
                "trip_id": "24559041-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "7:08",
                "departure_time": 1708564080,
                "description": "Downtown / Via Xerxes",
                "route_id": "6",
                "route_short_name": "6",
                "direction_id": 0,
                "direction_text": "NB",
                "schedule_relationship": "Scheduled"
            },
            {
                "actual": false,
                "trip_id": "24559077-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "7:23",
                "departure_time": 1708564980,
                "description": "27Av-Univ / Via France",
                "route_id": "6",
                "route_short_name": "6",
                "direction_id": 0,
                "direction_text": "NB",
                "terminal": "U",
                "schedule_relationship": "Scheduled"
            },
            {
                "actual": false,
                "trip_id": "24559191-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "7:23",
                "departure_time": 1708564980,
                "description": "Johnson St / Silver Lk Vlg / Via Penn",
                "route_id": "4",
                "route_short_name": "4",
                "direction_id": 0,
                "direction_text": "NB",
                "terminal": "B",
                "schedule_relationship": "Scheduled"
            },
            {
                "actual": false,
                "trip_id": "24559042-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "7:38",
                "departure_time": 1708565880,
                "description": "Downtown / Via Xerxes",
                "route_id": "6",
                "route_short_name": "6",
                "direction_id": 0,
                "direction_text": "NB",
                "schedule_relationship": "Scheduled"
            },
            {
                "actual": false,
                "trip_id": "24559190-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "7:43",
                "departure_time": 1708566180,
                "description": "Downtown / Via Lyndale",
                "route_id": "4",
                "route_short_name": "4",
                "direction_id": 0,
                "direction_text": "NB",
                "schedule_relationship": "Scheduled"
            },
            {
                "actual": false,
                "trip_id": "24559078-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "7:53",
                "departure_time": 1708566780,
                "description": "27Av-Univ / Via France",
                "route_id": "6",
                "route_short_name": "6",
                "direction_id": 0,
                "direction_text": "NB",
                "terminal": "U",
                "schedule_relationship": "NoData"
            },
            {
                "actual": false,
                "trip_id": "24559193-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "8:03",
                "departure_time": 1708567380,
                "description": "Johnson St / Silver Lk Vlg / Via Penn",
                "route_id": "4",
                "route_short_name": "4",
                "direction_id": 0,
                "direction_text": "NB",
                "terminal": "B",
                "schedule_relationship": "Scheduled"
            },
            {
                "actual": false,
                "trip_id": "24559043-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "8:08",
                "departure_time": 1708567680,
                "description": "Downtown / Via Xerxes",
                "route_id": "6",
                "route_short_name": "6",
                "direction_id": 0,
                "direction_text": "NB",
                "schedule_relationship": "NoData"
            },
            {
                "actual": false,
                "trip_id": "24559075-DEC23-MVS-BUS-Weekday-01",
                "stop_id": 17940,
                "departure_text": "8:23",
                "departure_time": 1708568580,
                "description": "27Av-Univ / Via France",
                "route_id": "6",
                "route_short_name": "6",
                "direction_id": 0,
                "direction_text": "NB",
                "terminal": "U",
                "schedule_relationship": "NoData"
            }
        ]
    }


    let departuresArray = metroBusTimes.departures
    //console.log(departuresArray)

//loop - use the syntax for looping over an array
departuresArray.forEach( function( busObject) {
    //console.log(busObject)
    let departureTime = busObject.departure_text
    let routeID = busObject.route_id
    let description = busObject.description
    console.log(`${routeID}    ${description}    ${departureTime}`)
})