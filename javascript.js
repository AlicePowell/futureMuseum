
// NB This currently replaces in History the url with a new one, so cannot use back button
function myFunction() {
    setTimeout(function(){location.href="./mainPage/mainPage.html"}, 23500);
    }
myFunction ()
;

//document.getElementById("btn").addEventListener("click",
//    function () {
//        document.window.location.href = "./mainPage/mainPage.html" });


//Refresh page by just clicking
document.addEventListener("click", function(){
   location.href="./mainPage/mainPage.html"});

//Make a variable x the html of the current page
var x = location.href;
console.log(x);