
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
    });
});