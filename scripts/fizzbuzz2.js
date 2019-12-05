var firstDivisor = 3;
var secondDivisor = 5;



function welcome() {
	var welcomeMessage = document.getElementById("greeting");
	var fname = document.getElementById("fname");
	var minitial = document.getElementById("minitial");
	var lname = document.getElementById("lname");
	welcomeMessage.innerHTML = "Welcome to MariiaTravels, " + fname.value + " " + minitial.value + " " + lname.value + "!";
}


function loop() {
	
	var text = "";
	 for(i = 1; i <= 140; i++) {
		if ((i % 2 === 0) && !(i % 5 === 0)) {
			text += i + "  Go outside! - Hike!" + "<br />";
		
	}
	
		document.getElementById("list").innerHTML = text;
}
