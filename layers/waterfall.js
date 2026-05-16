// Global Variables
let bridgeLayer;
// colors
// Yellow
let yellowLight;
let yellowMain;
let yellowDark;

// Orange
let orangeLight;
let orangeMain;
let orangedark;

// Pastel Pink
let pinkLight;
let pinkMain;
let pinkDark;

// Purple
let purpleLight;
let purpleMain;
let purpleDark;

// Teal
let tealLight;
let tealMain;
let tealDark;

// Support Colours
let warmCream;
let paperCream;
let outlineDark;
let navyDark;


function setup()
{
	createCanvas(2000, 1000);
	
	// colors
	// Yellow
	yellowLight = color(255, 226, 119);
	yellowMain = color(242, 205, 92);
	yellowDark = color(202, 159, 42);

	// Orange
	orangeLight = color(255, 183, 102);
	orangeMain = color(255, 128, 64);
	orangeDark = color(204, 74, 32);

	// Pink
	pinkLight = color(235, 107, 161);
	pinkMain = color(217, 65, 121);
	pinkDark = color(165, 38, 88);

	// Purple
	purpleLight = color(152, 119, 194)
	purpleMain = color(123, 91, 176)
	purpleDark = color(94, 66, 148)

	// Teal Blue
	tealLight = color(82, 184, 184);
	tealMain = color(35, 135, 154);
	tealDark = color(18, 86, 112);

	// Supporting Colors
	warmCream = color(250, 238, 221)
	paperCream = color(247, 237, 228)
	outlineDark = color(76, 58, 102)
	navyDark = color(1, 6, 38)

}

function draw()
{
	// background(132, 208, 207); 

    // Waterfall
    waterfall();

	// helpful mouse pointer brought in from sleuth
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX, mouseY);
	pop();
}

function waterfall(){
	// Setup
	noStroke();

	// Waterfall
	fill(orangeMain);      // localised coordinates adjusted to match bridge
	rect(880, 425, 240, 510, 20);

	fill(orangeLight);
	rect(880, 495, 20, 100, 10);
	rect(900, 525, 20, 40, 10);
	rect(920, 485, 20, 80, 10);
	rect(940, 505, 20, 30, 10);
	rect(960, 485, 20, 70, 10);
	rect(980, 525, 20, 30, 10);
	rect(1000, 525, 20, 40, 10);
	rect(1020, 485, 20, 80, 10);
	rect(1040, 515, 20, 30, 10);
	rect(1060, 495, 20, 70, 10);
	rect(1080, 535, 20, 30, 10);
	rect(1100, 505, 20, 80, 10);

	rect(880, 665, 20, 40, 10);
	rect(900, 635, 20, 100, 10);
	rect(920, 675, 20, 30, 10);
	rect(940, 665, 20, 90, 10);
	rect(960, 645, 20, 60, 10);
	rect(980, 665, 20, 80, 10);
	rect(1000, 695, 20, 50, 10);
	rect(1020, 675, 20, 40, 10);
	rect(1040, 655, 20, 50, 10);
	rect(1060, 685, 20, 60, 10);
	rect(1080, 645, 20, 70, 10);
	rect(1100, 675, 20, 40, 10);

	rect(880, 815, 20, 100, 10);
	rect(900, 835, 20, 40, 10);
	rect(920, 825, 20, 80, 10);
	rect(940, 835, 20, 30, 10);
	rect(960, 815, 20, 60, 10);
	rect(980, 825, 20, 80, 10);
	rect(1000, 835, 20, 50, 10);
	rect(1020, 825, 20, 40, 10);
	rect(1040, 845, 20, 30, 10);
	rect(1060, 825, 20, 70, 10);
	rect(1080, 825, 20, 30, 10);
	rect(1100, 835, 20, 80, 10);

	fill(orangeMain);
	rect(900, 505, 20, 40, 10);
	rect(960, 465, 20, 70, 10);
	rect(1060, 445, 20, 70, 10);
	rect(920, 655, 20, 30, 10);
	rect(980, 605, 20, 80, 10);
	rect(1060, 645, 20, 60, 10);
	rect(920, 765, 20, 80, 10);
	rect(1100, 655, 20, 40, 10);
	rect(940, 825, 20, 30, 10);
	rect(1080, 815, 20, 30, 10);
	rect(880, 765, 20, 100, 10);
}