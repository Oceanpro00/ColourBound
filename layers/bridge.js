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
	bridgeLayer = createGraphics(2000, 1000);     // creates another drawable layer (figuring it out)

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

	bridge();     // updates the new layer
	image(bridgeLayer, 0, 0);     // shows the new layer
	
	// helpful mouse pointer brought in from sleuth
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX, mouseY);
	pop();
}

function bridge(){
	// Setup
	bridgeLayer.noStroke();
	bridgeLayer.clear();

	// Streetlights
	streetlights();

	bridgeLayer.push()
		bridgeLayer.translate(-500, 0);
		streetlights();
	bridgeLayer.pop();

	bridgeLayer.push();
		bridgeLayer.translate(460, 0);
		streetlights();
	bridgeLayer.pop();

	bridgeLayer.push();
		bridgeLayer.translate(960, 0);
		streetlights();
	bridgeLayer.pop();

	// Bridge over waterfall
	bridgeLayer.noStroke();
	bridgeLayer.fill(tealMain);
	bridgeLayer.rect(884, 406, 45, 16, 5);
	bridgeLayer.rect(931, 406, 45, 16, 5);
	bridgeLayer.rect(978, 406, 45, 16, 5);
	bridgeLayer.rect(1025, 406, 45, 16, 5);
	bridgeLayer.rect(1072, 406, 45, 16, 5);


	// Background bridge scape
	bridgeLayer.fill(purpleLight);
	bridgeLayer.noStroke();
	bridgeLayer.rect(0, 430, 2000, 20);
	bridgeLayer.rect(795, 400, 110, 110, 55);
	bridgeLayer.rect(1095, 400, 110, 110, 55);

	bridgeLayer.fill(purpleMain);
	bridgeLayer.rect(0, 435, 900, 500);
	bridgeLayer.rect(800, 405, 100, 100, 50);
	bridgeLayer.rect(1100, 435, 900, 500);
	bridgeLayer.rect(1100, 405, 100, 100, 50);

	//Bricks
	bridgeLayer.fill(purpleLight);
	bridgeLayer.rect(150, 510, 40, 15, 5);
	bridgeLayer.rect(192, 510, 40, 15, 5);
	bridgeLayer.rect(171, 527, 40, 15, 5);

	bridgeLayer.rect(280, 685, 40, 15, 5);
	bridgeLayer.rect(322, 685, 40, 15, 5);
	bridgeLayer.rect(301, 702, 40, 15, 5);

	bridgeLayer.rect(419, 508, 40, 15, 5);
	bridgeLayer.rect(440, 525, 40, 15, 5);
	bridgeLayer.rect(398, 525, 40, 15, 5);

	bridgeLayer.rect(1330, 495, 40, 15, 5);
	bridgeLayer.rect(1372, 495, 40, 15, 5);
	bridgeLayer.rect(1351, 512, 40, 15, 5);

	bridgeLayer.rect(1690, 535, 40, 15, 5);
	bridgeLayer.rect(1669, 552, 40, 15, 5);
	bridgeLayer.rect(1711, 552, 40, 15, 5);

	bridgeLayer.rect(1779, 678, 40, 15, 5);
	bridgeLayer.rect(1821, 678, 40, 15, 5);
	bridgeLayer.rect(1800, 695, 40, 15, 5);

	// Was able to fix layer issue by splitting layers into their own functions
	//Arches
	bridgeLayer.erase();
	bridgeLayer.arc(0, 755, 350, 450, PI, 2*PI);
	bridgeLayer.arc(500, 755, 350, 450, PI, 2*PI);
	bridgeLayer.rect(0, 755, 675, 280);
	bridgeLayer.arc(2000, 755, 350, 450, PI, 2*PI);
	bridgeLayer.arc(1500, 755, 350, 450, PI, 2*PI);
	bridgeLayer.rect(1325, 755, 675, 280);
	bridgeLayer.noErase();

	// Collumns
	bridgeLayer.fill(purpleDark);
	bridgeLayer.rect(185, 755, 130, 20);
	bridgeLayer.rect(190, 775, 120, 20);
	bridgeLayer.rect(195, 795, 110, 140);
	bridgeLayer.rect(1685, 755, 130, 20);
	bridgeLayer.rect(1690, 775, 120, 20);
	bridgeLayer.rect(1695, 795, 110, 140);

	bridgeLayer.fill(purpleMain);
	bridgeLayer.rect(188, 758, 127, 17);
	bridgeLayer.rect(193, 778, 117, 17);
	bridgeLayer.rect(198, 798, 107, 137);
	bridgeLayer.rect(1688, 758, 127, 17);
	bridgeLayer.rect(1693, 778, 117, 17);
	bridgeLayer.rect(1698, 798, 107, 137);

	bridgeLayer.fill(purpleDark);
	bridgeLayer.rect(204, 802, 4, 127, 5);
	bridgeLayer.rect(214, 802, 4, 127, 5);
	bridgeLayer.rect(224, 802, 4, 127, 5);
	bridgeLayer.rect(234, 802, 4, 127, 5);
	bridgeLayer.rect(244, 802, 4, 127, 5);
	bridgeLayer.rect(254, 802, 4, 127, 5);
	bridgeLayer.rect(264, 802, 4, 127, 5);
	bridgeLayer.rect(274, 802, 4, 127, 5);
	bridgeLayer.rect(284, 802, 4, 127, 5);
	bridgeLayer.rect(294, 802, 4, 127, 5);
	bridgeLayer.rect(1704, 802, 4, 127, 5);
	bridgeLayer.rect(1714, 802, 4, 127, 5);
	bridgeLayer.rect(1724, 802, 4, 127, 5);
	bridgeLayer.rect(1734, 802, 4, 127, 5);
	bridgeLayer.rect(1744, 802, 4, 127, 5);
	bridgeLayer.rect(1754, 802, 4, 127, 5);
	bridgeLayer.rect(1764, 802, 4, 127, 5);
	bridgeLayer.rect(1774, 802, 4, 127, 5);
	bridgeLayer.rect(1784, 802, 4, 127, 5);
	bridgeLayer.rect(1794, 802, 4, 127, 5);
	
}

function streetlights(){
	// Streetlights 
	// Lamp Glow
	bridgeLayer.fill(255, 226, 119, 80);     // needed to use yellowLight's rgb code to be able to add the alpha
	bridgeLayer.noStroke();
	bridgeLayer.quad(717, 260, 737, 260, 790, 430, 664, 430);
	bridgeLayer.quad(803, 260, 823, 260, 876, 430, 750, 430);
	
	// had to re-add 400 to y on the bridge and break the (0,0) localization to work on the Streetlights
	bridgeLayer.fill(outlineDark);
	bridgeLayer.rect(750, 422, 40, 8, 1);
	bridgeLayer.rect(760, 350, 20, 80, 10);
	bridgeLayer.rect(766, 250, 8, 110, 10);

	// Lamp Head
	bridgeLayer.arc(727, 250, 20, 20, PI, 2*PI);
	bridgeLayer.arc(813, 250, 20, 20, PI, 2*PI);
	bridgeLayer.arc(727, 260, 50, 25, PI, 2*PI);
	bridgeLayer.arc(813, 260, 50, 25, PI, 2*PI);

	// Lamp Neck
	bridgeLayer.noFill();
	bridgeLayer.stroke(outlineDark);
	bridgeLayer.strokeWeight(8);
	bridgeLayer.arc(748, 250, 44, 60, radians(200), 2*PI);
	bridgeLayer.arc(792, 250, 44, 60, PI, radians(340));

	// Lamp bulb
	bridgeLayer.stroke(outlineDark);
	bridgeLayer.strokeWeight(2);
	bridgeLayer.fill(yellowMain);
	bridgeLayer.arc(727, 260, 20, 20, 2*PI, PI);
	bridgeLayer.arc(813, 260, 20, 20, 2*PI, PI);

}