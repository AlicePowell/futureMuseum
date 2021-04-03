


// Start the projection after 16 seconds by adding CSS background image to div
var light = document.getElementById("projectionContainer")

function delayProject () {
    setTimeout (function () {
        light.style.backgroundImage = "url('../images/projection.jpeg')";
        }, 13800);}
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
    slideshow.style.fontSize = "2.1vmin";
    slideshow.style.fontColor = "black";
    }, 19000);
}
myFunction ();

// Add credit link
var copyright = document.getElementById("creditLink");
var plusline2 = document.getElementById("line2");
var plusline3 = document.getElementById("line3");
var plusline4 = document.getElementById("line4");
var plusline5 = document.getElementById("line5");
var plusline6 = document.getElementById("line6");
var tally = 0;
var blank = "";


function credit(id) {
    if (tally == 0) {
        var aP = "Coding, design and images by Alice Powell, March 2021.";
    // var seurat = "Georges Seurat, 'Reclining Man (study for Bathing Place), conte drawing on paper, 1883. ";
        var turner = "J.M.W. Turner, 'The Rooftops of Venice, with the Campanile of San Marco and San Giorgio Maggiore at Sunrise', watercolour on paper, 1840.  Tate Collection."
        var leWitt = "Sol Lewitt, 'Drawing Series 1968 (Fours)', graphite wall drawing, 1968.";
        var bronze = "Grand Tour bronze, 19th Century.";
        var ethanol = "Ethanol molecule."
        var plant = "Areca palm, heavily & heavenly influenced by Marcel Broodthaers, 'Un Jardin d'Hiver', 1974."
        copyright.innerHTML=aP;
        copyright.style.border = "none";
        plusline2.innerHTML=turner;
        plusline2.style.border = "none";
        plusline3.innerHTML=leWitt;
        plusline3.style.border = "none";
        plusline4.innerHTML=bronze;
        plusline4.style.border = "none";
        plusline5.innerHTML=ethanol;
        plusline5.style.border = "none";
        plusline6.innerHTML=plant;
        plusline6.style.border = "none";
        tally = 1
        }
    else {
        var creditTitle = "C R E D I T S";
        copyright.innerHTML=creditTitle;
        plusline2.innerHTML=blank; 
        plusline3.innerHTML=blank; 
        plusline4.innerHTML=blank; 
        plusline5.innerHTML=blank; 
        plusline6.innerHTML=blank; 
        tally = 0
    }   
};

var links_close = document.getElementById("linxTab");
var addActualLink = document.getElementById("actualLink");
var addLogoin = document.getElementById("picture");
tally2 = 0;

function linx() {
    if (tally2 == 0) {
        //links_close.innerHTML = "C L O S E";
        addActualLink.setAttribute("href", "https://uk.linkedin.com/in/alice-powell-7a8b50203?trk=profile-badge");
        // addLogoin.setAttribute("src", "../images/linkedin_logo.png");
        addLogoin.style.height = "6vmin";
        addLogoin.style.backgroundImage = "url('../images/linkedin_logo.png')";
        tally2 = 1;      
    }
    else {
        //var linkTitle = "L I N K S"
        //links_close.innerHTML = linkTitle;
        // addLogoin.removeAttribute("src");
        addLogoin.style.height = "0%";
        addActualLink.removeAttribute("href");
        tally2 = 0;
    }
}
