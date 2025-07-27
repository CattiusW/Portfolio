/// script.js
document.addEventListener("keydown", function (e) {
	if (e.key == "~" && e.ctrlKey) {
		let js = prompt("JS Here:");
		if (js == eruda) {
            let script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/eruda";
            script.onload = function () {
                eruda.init();
                console.log("Eruda console loaded.");
            };
            document.body.appendChild(script);
        }else{
        	eval(js);
		}
	}
});
