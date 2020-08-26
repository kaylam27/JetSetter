$(document).ready(function () {

    $("#flight-num-search").on("click", function (event) {
        event.preventDefault();



        let flightNumberInput = $(".flight-num").val().trim();
        let flightNumber = flightNumberInput;
        // flight_number = 4118;
        console.log(flightNumber);


        $.ajax({
            url: 'http://api.aviationstack.com/v1/flights',
            data: {
                access_key: "dfce8a51049bbc31e85c27c5ae457256",
                // flight_number: 375
                flight_number: flightNumberInput

            }
        })
            .then(function (resp) {


                console.log(resp);
                var flightNumDisplay = $(".flight-info")


                var flightDate = $("<p>").text(resp.data[0].flight_date);
                var date = $("<h5>").text("Date")

                var flightArrLoc = $("<p>").text(resp.data[0].arrival.airport);
                var ArrAirP = $("<h5>").text("Arrival Airport")

                var flightDepLoc = $("<p>").text(resp.data[0].departure.airport);
                var DepAirP = $("<h5>").text("Departure Airport")

                var flightStatus = $("<p>").text(resp.data[0].flight_status);
                var FltStat = $("<h5>").text("Status")

                var flightTimeDep = $("<p>").text(resp.data[0].arrival.scheduled);
                var DepTime = $("<h5>").text("Departure Time")

                var flightTimeArr = $("<p>").text(resp.data[0].departure.scheduled);
                var ArrTime = $("<h5>").text("Arrival Time")

                flightNumDisplay.append(date, flightDate, ArrAirP, flightArrLoc, DepAirP, flightDepLoc, FltStat, flightStatus, DepTime, flightTimeDep, ArrTime, flightTimeArr)

            });

    });
});