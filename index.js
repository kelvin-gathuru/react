// $("body").hide(300).show(1000);



$(".francisca-btn").click(function() {
    $(".context").html("I’m very picky about the company I work for. For me, culture, growth and career progression are important. ReactHQ helped me to find a company that was a perfect match.");

})

$(".sade-btn").click(function() {
    $(".context").html("I am very intrigued by the standards that has been set.ReactHQ eased my search and found the qualities i have been searching for.");

})

$(".ahmed-btn").click(function() {
    $(".context").html("I for sure have been able to hire the very best of the best talents from ReactHQ.I personally Regard them as the best Hub for acquiring talents.");

})


window.addEventListener("scroll", reveal)

function reveal() {
    var reveals = document.querySelectorAll(".section");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("animate");
        }

    }

}



var typed = new Typed(".auto-input", {
    strings: ["Designers", "Technical Talents", ],
    typeSpeed: 120,
    backSpeed: 120,
     loop: true
});

$(".typed-cursor").css("visibility", "hidden");
