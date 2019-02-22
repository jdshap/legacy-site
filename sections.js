activateSection(0);
	
function activateSection(n) {
	var headers = document.getElementsByClassName("section-bar__header");
	var sections = ["projects", "graphics", "widgets"];
	var i;
	
	for(i = 0; i < headers.length; i++) {
		headers[i].classList.remove("section-bar__header--active");
	}
	headers[n].classList.add("section-bar__header--active");
	
	for(i = 0; i < sections.length; i++) {
		document.getElementsByClassName(sections[i])[0].style.display = "none";
	}
	document.getElementsByClassName(sections[n])[0].style.display = "flex";
}