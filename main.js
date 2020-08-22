// var userInput = $("");

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/" + userInput + "?page=1",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
        "x-rapidapi-key": "e77d61b001msh61fd82bab620063p10e040jsnde8da14f9bbc"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});


//  95cbd7d4b4mshb57f0e4ef6f7096p1b3e47jsn3987729cd66e


$(document).ready(function () {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "db13f0fa34msh3f267b9d5c647dap1d912bjsn17cd5582b5c0"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);

        var head5 = $(".card-body-1")
        var placeName = $("<h5>").text(response.Places[0].CityId);


        // console.log(location);pi
        head5.append(head5)


    });
});