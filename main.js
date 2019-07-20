// INPUTS
window.addEventListener("keydown", keydown, false);
window.addEventListener();

function keydown(event) {
    console.log(event.keyCode)
	document.querySelector("#result").innerHTML = "KeyCode: " + event.keyCode
}