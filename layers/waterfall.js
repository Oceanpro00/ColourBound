// Global Variables
let backdrop;
let bridgeLayer;

// Colors


function setup()
{
	createCanvas(2000, 1000);
	bridgeLayer = createGraphics(2000, 1000);
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
	fill(222, 108, 144);      // localised coordinates adjusted to match bridge
	rect(880, 25, 240, 510, 20);

	fill(241, 145, 170);
	rect(880, 95, 20, 100, 10);
	rect(900, 125, 20, 40, 10);
	rect(920, 85, 20, 80, 10);
	rect(940, 105, 20, 30, 10);
	rect(960, 85, 20, 70, 10);
	rect(980, 125, 20, 30, 10);
	rect(1000, 125, 20, 40, 10);
	rect(1020, 85, 20, 80, 10);
	rect(1040, 115, 20, 30, 10);
	rect(1060, 95, 20, 70, 10);
	rect(1080, 135, 20, 30, 10);
	rect(1100, 105, 20, 80, 10);

	rect(880, 265, 20, 40, 10);
	rect(900, 235, 20, 100, 10);
	rect(920, 275, 20, 30, 10);
	rect(940, 265, 20, 90, 10);
	rect(960, 245, 20, 60, 10);
	rect(980, 265, 20, 80, 10);
	rect(1000, 295, 20, 50, 10);
	rect(1020, 275, 20, 40, 10);
	rect(1040, 255, 20, 50, 10);
	rect(1060, 285, 20, 60, 10);
	rect(1080, 245, 20, 70, 10);
	rect(1100, 275, 20, 40, 10);

	rect(880, 415, 20, 100, 10);
	rect(900, 435, 20, 40, 10);
	rect(920, 425, 20, 80, 10);
	rect(940, 435, 20, 30, 10);
	rect(960, 415, 20, 60, 10);
	rect(980, 425, 20, 80, 10);
	rect(1000, 435, 20, 50, 10);
	rect(1020, 425, 20, 40, 10);
	rect(1040, 445, 20, 30, 10);
	rect(1060, 425, 20, 70, 10);
	rect(1080, 425, 20, 30, 10);
	rect(1100, 435, 20, 80, 10);

	fill(222, 108, 144);
	rect(900, 105, 20, 40, 10);
	rect(960, 65, 20, 70, 10);
	rect(1060, 45, 20, 70, 10);
	rect(920, 255, 20, 30, 10);
	rect(980, 205, 20, 80, 10);
	rect(1060, 245, 20, 60, 10);
	rect(920, 365, 20, 80, 10);
	rect(1100, 255, 20, 40, 10);
	rect(940, 425, 20, 30, 10);
	rect(1080, 415, 20, 30, 10);
	rect(880, 365, 20, 100, 10);
}