function save(id) {
	if (typeof(Storage) !== "undefined") {
		localStorage.html = document.getElementById(id).innerHTML;
		localStorage.css = document.getElementById(id).innerHTML;
		localStorage.js = document.getElementById(id).innerHTML;
	} else {
		alert("Your browser can't save code.");
	}
}
