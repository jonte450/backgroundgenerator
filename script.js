var css = document.querySelector("h3");
var random_button = document.getElementById("random");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function generateContent(){
body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}	

function generateRandomColor(){
 var hex = "0123456789ABCDEF";
 var color = "#";
 var index = 0;
 while(index < 6){
 	color += hex[Math.floor(Math.random() * 16)];
 	index = index + 1;
 }
 return color;
}

function set_random_color(){
     color1.value = generateRandomColor();
     color2.value = generateRandomColor();
     generateContent();	
}

function setGradient() {
	generateContent();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random_button.addEventListener('click',set_random_color);
window.addEventListener('DOMContentLoaded',generateContent);