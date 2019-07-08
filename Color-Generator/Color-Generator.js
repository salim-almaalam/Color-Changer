var body = document.getElementById("bodyColor");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

//document.style.background = "red";

color1.addEventListener("input", function(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
})


color2.addEventListener("input", function(){
    body.style.background = 
    "linear-gradient(to right, " +
     color1.value + 
     ", " +
     color2.value +
     ")";
})