var nav = $("#headerNav");
var navToggle = $("#navToggle");

navToggle.on("click", function(event) {
    event.preventDefault();
    
    nav.toggleClass("show");
});

/* Scroll */
$( "a.header-nav__link" ).click(function( event ) {
    event.preventDefault();
    $("html, body").animate(
        {
            scrollTop: $(
                $(this).attr("href")
            ).offset().top - 20
        }, 400);
});