



// Start the projection after 16 seconds by adding CSS background image to div
var light = document.getElementById("projectionContainer")

function delayProject () {
    setTimeout (function () {
        light.style.backgroundImage = "url('../images/projection.jpeg')";
        }, 16000);}
delayProject ();




//Change the text on the projection
var slideshow= document.getElementById("heading");

function myFunction () {
    setTimeout (function() {
    var intro = "please contact:";
    intro += "<br>";
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
    var aP = "Design and photographs by Alice Powell, January 2021. ";
    var seurat = "Georges Seurat, 'Reclining Man (study for Bathing Place), conte drawing on paper, 1883. ";
    var leWitt = "Sol Lewitt, 'Drawing Series 1968 (Fours)', graphite wall drawing, 1968. ";
    var bronze = "Grand Tour bronze, 19th Century. ";
    var mix = aP;
    mix += "\n";
    mix += "\n";
    mix += leWitt;
    mix += seurat;
    mix += bronze;
    copyright.innerHTML=mix;
    copyright.style.border = "none";
};