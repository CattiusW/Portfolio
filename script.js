/// script.js
document.addEventListener("keydown", function (e) {
	if (e.key == "~" && e.ctrlKey) {
		let js = prompt("JS Here:");
        eval(js);
	}
});