



// Start the projection after 16 seconds by adding CSS background image to div
var light = document.getElementById("projectionContainer")

function delayProject () {
    setTimeout (function () {
        light.style.backgroundImage = "url('../images/projection.jpg')";
        }, 16000);}
delayProject ();




//Change the text on the projection
var slideshow= document.getElementById("heading");

function myFunction () {
    setTimeout (function() {
    var intro = "please contact";
    intro += "<br>";
    var str = "alicepowell@paperview.org";
    var emailAdd = str.link(href="mailto:alicepowell@paperview.org");
    slideshow.innerHTML = intro + emailAdd;
    slideshow.style.fontSize = "1.9vmin";
    slideshow.style.fontColor = "black";
    }, 23000);
}
myFunction ();

// Add credit link
var copyright = document.getElementById("creditLink");

function credit(id) {
    var aP = "Design and photographs by Alice Powell, January 2021";
    copyright.innerHTML=aP;
    copyright.style.border = "none";

};
