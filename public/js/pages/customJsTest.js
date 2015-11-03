var el = document.getElementsByClassName("test-div");

if (el && el.length > 0) {
	el = el[0];
	var text = document.createElement("p");
	text.innerHTML = "Hey I wrote this using javascript";
	el.appendChild(text);
} else {
	alert("Element does not exist");
}