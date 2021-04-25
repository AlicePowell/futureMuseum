


// Start the projection after 16 seconds by adding CSS background image to div
var light = document.getElementById("projectionContainer")
var beam = document.getElementById("lightbeam")
var plant1 = document.getElementById("galleryPlant")
var plant2 = document.getElementById("plantpotContainer")

function delayProject () {
    setTimeout (function () {
        beam.style.opacity = "1";
        light.style.backgroundImage = "url('../images/projection.jpeg')";
        plant1.style.opacity = "0.7";
        plant2.style.opacity = "0.7";
        }, 13800);}
delayProject ();


//Change the text on the projection
var slideshow= document.getElementById("heading");

var once = "alicepowell";
var twice = Math.pow(2,6);
var thrice = String.fromCharCode(twice);
var foise = "paperview.o";
var foisePlus = foise + "rg"
var fice = once + String.fromCharCode(twice) + foisePlus;
var putTogether = "please c" 
putTogether += "ontact: "
putTogether += "<br>";
putTogether += "<br>";
putTogether +=  "<a href=" + "mai" + "lto" + ":" 
+ fice + ">" + once + thrice + foisePlus + "</a>.";


function myFunction () {
    setTimeout (function() {
    slideshow.innerHTML = putTogether;
    slideshow.style.fontSize = "2.1vmin";
    slideshow.style.fontColor = "black";
    }, 17500);
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
        var aP = "&copy; Coding, design and images by Alice Powell, April 2021.";
    // var seurat = "Georges Seurat, 'Reclining Man (study for Bathing Place), conte drawing on paper, 1883. ";
        var turner = "J.M.W. Turner, 'The Rooftops of Venice, with the Campanile of San Marco and San Giorgio Maggiore at Sunrise', watercolour on paper, 1840.  Tate Collection."
        var leWitt = "Sol Lewitt, 'Drawing Series 1968 (Fours)', graphite wall drawing, 1968.";
        var bronze = "Grand Tour bronze, 19th Century.";
        var ethanol = "Ethanol molecule."
        var plant = "Areca palm, heavily & heavenly influenced by Marcel Broodthaers, 'Un Jardin d'Hiver', 1974."
        copyright.innerHTML=aP;
        copyright.style.border = "none";
        plusline2.innerHTML=ethanol;
        plusline2.style.border = "none";
        plusline3.innerHTML=turner;
        plusline3.style.border = "none";
        plusline4.innerHTML=leWitt;
        plusline4.style.border = "none";
        plusline5.innerHTML=bronze;
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
