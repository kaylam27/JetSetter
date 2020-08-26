

$("button").on("click", function () {

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
        // getRestInfo(0, '#restaurants', '#address', '#phone')
        // function getRestInfo(x,rest,address,phone){
        for(var i = 0; i<5;i++){
            $('#restaurants').text(results[i].restaurant_name);
            $('#address').text(results[i].address.street);
            $('#phone').text(results[i].restaurant_phone);
            console.log(results[i]);
            console.log(i);
        }
    });
});


//  95cbd7d4b4mshb57f0e4ef6f7096p1b3e47jsn3987729cd66e


