
// NB This currently replaces in History the url with a new one, so cannot use back button
function myFunction() {
    setTimeout(function(){window.location="./mainPage/mainPage.html"}, 23000);
    }
myFunction ()
;

//Refresh page by just clicking
document.addEventListener("click", function(){
    window.location="./mainPage/mainPage.html"});

    
//Make a variable x the html of the current page
var x = location.href;
console.log(x);