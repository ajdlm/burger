$(document).on("click", ".eatBurger", function (event) {
    var id = $(this).parent().data("id");

    // FIX THE PUT HERE OR ELSWHERE; IT ISN'T WORKING
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: { devoured: 1 }
    }).then(
        function () {
            console.log("Changed devoured to true.");

            location.reload();
        }
    );
});

$(document).on("click", ".burgerSubmit", function (event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burgerInput").val().trim(),
        devoured: 0
    }
    $.ajax("api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("Created new burger.");

            location.reload();
        }
    );
})