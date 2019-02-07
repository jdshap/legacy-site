const imagesPath = './resources/gd/';
const graphics = document.getElementsByClassName("graphics")[0];
var files = [
	{ 	name: "Blade Logo", 
		year: "2018", 
		path: "Blade2.png" 
	},
	{ 	name: "Blade Logo", 
		year: "2017", 
		path: "BladeVector.png" 
	},
	{ name: "Blade Logo 3D Model", 
		year: "2018", 
		path: "Blade v1.png" 
	},
	{ name: "Eye Logo", 
		year: "2018", 
		path: "Artboard 1.png" 
	},
	{ name: "Abstract Gem", 
		year: "2017", 
		path: "Core.png" 
	},
	{ 	name: "Bloomsburg Honors Logo", 
		year: "2017", 
		path: "BloomShirt.png" 
	},
	{ 	name: "Bloomsburg Husky Pattern", 
		year: "2017", 
		path: "BloomBottle.png" 
	},
	{ 	name: "Gamecube Boxart Infographic", 
		year: "2017", 
		path: "GCNlib.png"
	},
	{ 	name: "Animated Icosahedron", 
		year: "2017", 
		path: "icos.gif" 
	},
	{ 	name: "Pertussis Clipart", 
		year: "2017", 
		path: "Pertussis.png" 
	},
	{ 	name: "Astalos Art", 
		year: "2018", 
		path: "RaizexCharged.png" 
	}
];

files.forEach(function(file) {
	graphics.innerHTML += `<div class="graphics__image">
		<img src="./resources/gd/${file.path}" height="300">
		<div class="graphics__info">
			<h4>${file.name} | ${file.year}</h4>
		</div>
	</div>`;
});