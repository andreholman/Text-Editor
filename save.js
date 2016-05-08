function save(id) {
	if (typeof(Storage) !== "undefined") {
		localStorage.html = document.getElementById(id);
	} else {
		alert("Your browser can't save code.");
	}
}