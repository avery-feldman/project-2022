/* Switches between late night hangout images from other album when moused over or focus */
document.querySelector("#latenight").addEventListener("mouseover", function () {
    document.querySelector("#latenight").src = "images/latenighthangout.jpg"

});

document.querySelector("#latenight").addEventListener("mouseout", function () {
    document.querySelector("#latenight").src = "images/albumcoverhangout.jpg"


});

document.querySelector("#latenight").addEventListener("focus", function () {
    document.querySelector("#latenight").src = "images/latenighthangout.jpg"

});

document.querySelector("#latenight").addEventListener("blur", function () {
    document.querySelector("#latenight").src = "images/albumcoverhangout.jpg"

});


/* Switches between ethan graduation party images from other album when moused over or focus */
document.querySelector("#ethan").addEventListener("mouseover", function () {
    document.querySelector("#ethan").src = "images/hottub.jpg"

});

document.querySelector("#ethan").addEventListener("mouseout", function () {
    document.querySelector("#ethan").src = "images/ethangrad.jpg"


});

document.querySelector("#ethan").addEventListener("focus", function () {
    document.querySelector("#ethan").src = "images/hottub.jpg"

});

document.querySelector("#ethan").addEventListener("blur", function () {
    document.querySelector("#ethan").src = "images/ethangrad.jpg"

});


/* Switches between building exploration images from other album when moused over or focus */
document.querySelector("#ghost").addEventListener("mouseover", function () {
    document.querySelector("#ghost").src = "images/ghostbusting2.jpg"

});

document.querySelector("#ghost").addEventListener("mouseout", function () {
    document.querySelector("#ghost").src = "images/ghostbusting.jpg"


});

document.querySelector("#ghost").addEventListener("focus", function () {
    document.querySelector("#ghost").src = "images/ghostbusting2.jpg"

});

document.querySelector("#ghost").addEventListener("blur", function () {
    document.querySelector("#ghost").src = "images/ghostbusting.jpg"

});




