$(document).ready(function () {
    $("#zip-code-search").on("click", function () {

        var userInput = $("#user-input").val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/" + userInput + "?page=1",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
                "x-rapidapi-key": "95cbd7d4b4mshb57f0e4ef6f7096p1b3e47jsn3987729cd66e"
            }
        }

        $.ajax(settings).done(function (response) {
            var results = response.result.data;
            console.log(response);

            $(".restaurant-info").empty();
            for (var i = 0; i < 5; i++) {
                var restName = $('<h5>');
                restName.addClass(".rest-name");
                restName.text(results[i].restaurant_name);
                $(".restaurant-info").append(restName);

                var restAddress = $('<p>');
                restAddress.addClass(".rest-add");
                restAddress.text(results[i].address.street);
                $(".restaurant-info").append(restAddress);

                var restPhone = $('<p>');
                restPhone.addClass(".rest-phone");
                restPhone.text(results[i].restaurant_phone);
                $(".restaurant-info").append(restPhone);
            }
        });
    });
});
//  95cbd7d4b4mshb57f0e4ef6f7096p1b3e47jsn3987729cd66e

