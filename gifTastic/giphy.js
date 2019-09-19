//Array of ten cities
var cities = ["New York City", "Boston", "San Francisco", "Austin, Texas", "London, England", "Paris, France", "Tokyo, Japan", "Beijing, China", "Mumbai, India", "Sau Paulo, Brazil"];

//Event listener for buttons
$("button").on("click", function () {
    var city = $(this).attr("data-city");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        city + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    var gifID = $("<div>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var cityImage = $("<img>");
                    cityImage.attr("src", results[i].images.fixed_height.url);
                    cityImage.attr("data-still", results[i].images.fixed_height_still.url);
                    cityImage.attr("data-animate", results[i].images.fixed_height.url);
                    cityImage.attr("data-state")

                    gifID.append(p);
                    gifID.append(cityImage);

                    $("#gifsarehere").prepend(gifID);
                }
            }
        })
});

function addArraycity() {
    $("#gifsarehere").empty();

    for (var i = 0; i < cities.length; i++) {

        var c = $("<button>");

        c.addClass("city-btn");

        c.attr("data-city", cities[i]);

        c.text(cities[i]);

        $("#gifsarehere").append(c);

    }
}
$("#add-city").on("click", function (event) {
    event.preventDefault();
    var city = $("#city-input").val().trim();

    cities.push(city);

    addArraycity();
});
// var xhr = $.get(
// "http://api.giphy.com/v1/gifs/search?q=&api_key=U5i26FHejUhOGdZcKDziLwvbiAoodXJP&limit=10")
//     // print json.dumps(data, sort_keys=true, indent=4);
// xhr.done(function(response){console.log("got your data", response); });

// var jiff = response.

// for(i in jiffs){
//     s.
// }
