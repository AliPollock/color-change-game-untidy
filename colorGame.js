let numbSquares = 6;
let colors = generateRandomColors(numbSquares);
let colorDisplay = document.getElementById("selectedColor");
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easyButton");
let hardButton = document.querySelector("#hardButton");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
	colors = generateRandomColors(numbSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
});

easyButton.addEventListener("click", function () {
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numbSquares = 3;
	colors = generateRandomColors(numbSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function () {
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numbSquares = 6;
	colors = generateRandomColors(numbSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

for (i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function () {
		let clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "guess again";
		}
	});
}

function changeColors(color) {
	for (i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(nums) {
	let arr = [];
	for (var i = 0; i < nums; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	let randRed = Math.floor(Math.random() * 256);
	let randGreen = Math.floor(Math.random() * 256);
	let randBlue = Math.floor(Math.random() * 256);
	return "rgb(" + randRed + ", " + randGreen + ", " + randBlue + ")";
}
