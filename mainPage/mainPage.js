
//var fade = document.getElementById("secondaryContainer");
//fade.classList.add("fade-out")

//document.className += 'fade-out';

//function myFunction() {
//    fade.classList.remove('fade-out');
//    };

 //   myFunction()


var slideshow= document.getElementById("heading")

function myFunction () {
    setTimeout (function() {
    slideshow.innerHTML = "please contact: alice.powell@newemail.com";
    slideshow.style.fontSize = "1.9vmin";}, 20000);
}

myFunction ();