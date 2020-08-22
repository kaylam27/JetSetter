
$(document).ready(function () {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://leopieters-iata-and-icao-v1.p.rapidapi.com/airplaneDatabase?numberRegistration=HB-JVE&key=your_api_key",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "leopieters-iata-and-icao-v1.p.rapidapi.com",
            "x-rapidapi-key": "db13f0fa34msh3f267b9d5c647dap1d912bjsn17cd5582b5c0"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});