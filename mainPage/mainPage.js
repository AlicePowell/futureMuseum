



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
    var aP = "Coding, design and images by Alice Powell, March 2021. ";
    // var seurat = "Georges Seurat, 'Reclining Man (study for Bathing Place), conte drawing on paper, 1883. ";
    var turner = "  //  Joseph Mallord William Turner, 'The Rooftops of Venice, with the Campanile of San Marco and San Giorgio Maggiore at Sunrise', watercolour on paper, 1840.  From the sketchbook, 'Venice: In and around the Hotel Europa', Tate Collection.  "
    var leWitt = "  //  Sol Lewitt, 'Drawing Series 1968 (Fours)', graphite wall drawing, 1968. ";
    var bronze = "  //  Grand Tour bronze, 19th Century. ";
    var plant = "  //  Areca palm, heavily and heavenly influenced by Marcel Broodthaers, 'Un Jardin d'Hiver', 1974.  "
    var mix = aP;
    mix += "\n";
    mix += "\n";
    mix += turner;
    mix += leWitt;
    mix += bronze;
    mix += plant;
    copyright.innerHTML=mix;
    copyright.style.border = "none";
};