/* Centers scroll bar on image when in focus */
    function Scroll(obj) {
        console.log("hi")
        obj.scrollIntoView();

    }

/* Switches between late night hangout images from other album when moused over or focus */
document.querySelector("#latenight").addEventListener("mouseover", function () {
    document.querySelector("#latenight").src = "images/latenighthangout.jpg";
    document.querySelector("#latenighttext").innerHTML = "Torin, Vihaar, and I chilling on the neighborhood street";

});

document.querySelector("#latenight").addEventListener("mouseout", function () {
    document.querySelector("#latenight").src = "images/albumcoverhangout.jpg";
    document.querySelector("#latenighttext").innerHTML = "Late night bonfire at Mitch's";


});

document.querySelector("#latenight").addEventListener("focus", function () {
    document.querySelector("#latenight").src = "images/latenighthangout.jpg";
    document.querySelector("#latenighttext").innerHTML = "Torin, Vihaar, and I chilling on the neighborhood street";

});

document.querySelector("#latenight").addEventListener("blur", function () {
    document.querySelector("#latenight").src = "images/albumcoverhangout.jpg";
    document.querySelector("#latenighttext").innerHTML = "Late night bonfire at Mitch's";

});


/* Switches between ethan graduation party images from other album when moused over or focus */
document.querySelector("#ethan").addEventListener("mouseover", function () {
    document.querySelector("#ethan").src = "images/hottub.jpg";
    document.querySelector("#ethantext").innerHTML = "(left to right) Me, Vihaar, Torin, Ethan, Wu, Jonah, Zach W., and Zach K. at Ethan's grad party";
    
});

document.querySelector("#ethan").addEventListener("mouseout", function () {
    document.querySelector("#ethan").src = "images/ethangrad.jpg";
    document.querySelector("#ethantext").innerHTML = "Vihaar, Wu, Zach, and I wait for tacos";

});

document.querySelector("#ethan").addEventListener("focus", function () {
    document.querySelector("#ethan").src = "images/hottub.jpg";
    document.querySelector("#ethantext").innerHTML = "(left to right) Me, Vihaar, Torin, Ethan, Wu, Jonah, Zach W., and Zach K. at Ethan's grad party";

});

document.querySelector("#ethan").addEventListener("blur", function () {
    document.querySelector("#ethan").src = "images/ethangrad.jpg";
    document.querySelector("#ethantext").innerHTML = "Vihaar, Wu, Zach, and I wait for tacos";

});


/* Switches between building exploration images from other album when moused over or focus */
document.querySelector("#ghost").addEventListener("mouseover", function () {
    document.querySelector("#ghost").src = "images/ghostbusting2.jpg";
    document.querySelector("#ghosttext").innerHTML = "Exploring an abandoned building";
    
});

document.querySelector("#ghost").addEventListener("mouseout", function () {
    document.querySelector("#ghost").src = "images/ghostbusting.jpg";
    document.querySelector("#ghosttext").innerHTML = "Zach and Torin explore abandoned basement";

});

document.querySelector("#ghost").addEventListener("focus", function () {
    document.querySelector("#ghost").src = "images/ghostbusting2.jpg";
    document.querySelector("#ghosttext").innerHTML = "Exploring an abandoned building";

});

document.querySelector("#ghost").addEventListener("blur", function () {
    document.querySelector("#ghost").src = "images/ghostbusting.jpg";
    document.querySelector("#ghosttext").innerHTML = "Zach and Torin explore abandoned basement";

});




