document.querySelector("button").addEventListener("click", function() {

    document.querySelector("button").style.boxShadow = "inset 0 0 20px orange";

    setTimeout(function() {
        document.querySelector("button").style.boxShadow = "none";
    }, 100);

});