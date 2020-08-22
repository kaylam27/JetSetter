var userInput = git

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/90210?page=1",
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