/// script.js
document.addEventListener("keydown", function (e) {
	if (e.key == "~" && e.ctrlKey) {
		let js = prompt("JS Here:");
        eval(js);
	}
});
/// eruda.js
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.code === "KeyE") {
        if (!window.eruda) {
            let script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/eruda";
            script.onload = function () {
                eruda.init();
                console.log("Eruda console loaded.");
            };
            document.body.appendChild(script);
        } else {
            eruda.show();
        }
    }
});
