/*

The Game Project

1 - Background Scenery

Core Idea

The first level is currently planned to be a soft coastal meadow kinda inspired by my own internal
vision of the British or Irish seaside cliffs. It should feel calm, open, and beginner-friendly, 
almost like the start of a quiet journey. The player moves across (hopefully) natural looking 
platforms aiming to collect colors and reach a doorway/ending point.

colors:
// Lavender Vaporwave Palette (sourced from color.adobe.com and adapted into rgb)


*/

// Global Variables   // define the new drawable layers
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
	background(tealLight); 

	// Sky/ BG
	styled_background();

	// Bridge + Waterfall Scaled/ Multiplied
	push();

		// Transform
		scale(0.3335);
		translate(0, 1970);
	
		// Bridge
		bridge();     // updates the new layer
		image(bridgeLayer, 0, 0);     // shows the new layer
		// Waterfall
		waterfall();

	pop();

	push();

		// Transform
		scale(0.3335);
		translate(1999, 1970);
	
		// Bridge
		bridge();     // updates the new layer
		image(bridgeLayer, 0, 0);     // shows the new layer
		// Waterfall
		waterfall();

	pop();

	push();

		// Transform
		scale(0.3335);
		translate(3998, 1970);
	
		// Bridge
		bridge();     // updates the new layer
		image(bridgeLayer, 0, 0);     // shows the new layer
		// Waterfall
		waterfall();

	pop();

	// lake
	fill(orangeMain);
	rect(0, 950, 2000, 100);

	// helpful mouse pointer brought in from sleuth
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX, mouseY);
	pop();
}

function styled_background(){
	//setup
	noStroke();

	//Sun/ Moon
	fill(yellowLight);
	ellipse(1000, 350, 500, 500);

	// Sun/ Moon Rays
	noFill();
	stroke(yellowLight);
	strokeWeight(20);
	arc(1000, 350, 544, 544, radians(150), radians(200));
	arc(1000, 350, 544, 544, radians(210), radians(270));
	arc(1000, 350, 544, 544, radians(280), radians(310));
	arc(1000, 350, 544, 544, radians(320), radians(30));
	arc(1000, 350, 544, 544, radians(40), radians(140));

	strokeWeight(10);
	arc(1000, 350, 595, 595, radians(40), radians(140));
	arc(1000, 350, 595, 595, radians(150), radians(210));
	arc(1000, 350, 595, 595, radians(220), radians(240));
	arc(1000, 350, 595, 595, radians(250), radians(260));
	arc(1000, 350, 595, 595, radians(270), radians(320));
	arc(1000, 350, 595, 595, radians(330), radians(30));

	arc(1000, 350, 650, 650, radians(10), radians(70));
	arc(1000, 350, 650, 650, radians(80), radians(130));
	arc(1000, 350, 650, 650, radians(140), radians(200));
	arc(1000, 350, 650, 650, radians(210), radians(250));
	arc(1000, 350, 650, 650, radians(260), radians(310));
	arc(1000, 350, 650, 650, radians(320), radians(370));

	arc(1000, 350, 705, 705, radians(0), radians(50));
	arc(1000, 350, 705, 705, radians(60), radians(120));
	arc(1000, 350, 705, 705, radians(130), radians(190));
	arc(1000, 350, 705, 705, radians(200), radians(230));
	arc(1000, 350, 705, 705, radians(240), radians(300));
	arc(1000, 350, 705, 705, radians(310), radians(360));

	arc(1000, 350, 830, 830, radians(20), radians(80));
	arc(1000, 350, 830, 830, radians(90), radians(145));
	arc(1000, 350, 830, 830, radians(155), radians(215));
	arc(1000, 350, 830, 830, radians(225), radians(245));
	arc(1000, 350, 830, 830, radians(255), radians(315));
	arc(1000, 350, 830, 830, radians(325), radians(380));

	arc(1000, 350, 950, 950, radians(5), radians(55));
	arc(1000, 350, 950, 950, radians(65), radians(125));
	arc(1000, 350, 950, 950, radians(135), radians(185));
	arc(1000, 350, 950, 950, radians(195), radians(235));
	arc(1000, 350, 950, 950, radians(245), radians(295));
	arc(1000, 350, 950, 950, radians(305), radians(365));
		
	arc(1000, 350, 1050, 1050, radians(25), radians(75));
	arc(1000, 350, 1050, 1050, radians(85), radians(135));
	arc(1000, 350, 1050, 1050, radians(145), radians(205));
	arc(1000, 350, 1050, 1050, radians(215), radians(275));
	arc(1000, 350, 1050, 1050, radians(285), radians(325));
	arc(1000, 350, 1050, 1050, radians(335), radians(385));

	arc(1000, 350, 1200, 1200, radians(10), radians(70));
	arc(1000, 350, 1200, 1200, radians(80), radians(130));
	arc(1000, 350, 1200, 1200, radians(140), radians(200));
	arc(1000, 350, 1200, 1200, radians(210), radians(250));
	arc(1000, 350, 1200, 1200, radians(260), radians(310));
	arc(1000, 350, 1200, 1200, radians(320), radians(370));

	arc(1000, 350, 1400, 1400, radians(40), radians(140));
	arc(1000, 350, 1400, 1400, radians(150), radians(210));
	arc(1000, 350, 1400, 1400, radians(220), radians(240));
	arc(1000, 350, 1400, 1400, radians(250), radians(260));
	arc(1000, 350, 1400, 1400, radians(270), radians(320));
	arc(1000, 350, 1400, 1400, radians(330), radians(30));

	arc(1000, 350, 1650, 1650, radians(20), radians(80));
	arc(1000, 350, 1650, 1650, radians(90), radians(145));
	arc(1000, 350, 1650, 1650, radians(155), radians(215));
	arc(1000, 350, 1650, 1650, radians(225), radians(245));
	arc(1000, 350, 1650, 1650, radians(255), radians(315));
	arc(1000, 350, 1650, 1650, radians(325), radians(380));

	// moutains
	noStroke();
	fill(pinkMain);
	beginShape();
	vertex(0, 720);
	vertex(570, 450);
	vertex(790, 520);
	vertex(1250, 800);
	vertex(1850, 450);
	vertex(2000, 600);
	vertex(2000, 1000);
	vertex(0, 1000);
	endShape();

	fill(pinkDark);
	beginShape();
	vertex(0, 720);
	vertex(275, 590);
	vertex(650, 770);
	vertex(310, 574);
	vertex(387, 536);
	vertex(650, 670);
	vertex(418, 522);
	vertex(487, 490);
	vertex(1121, 830);
	vertex(675, 550);
	vertex(1180, 800);
	vertex(1250, 805);
	vertex(1370, 800);
	vertex(1480, 730);
	vertex(1570, 700);
	vertex(1710, 780);
	vertex(1595, 683);
	vertex(1735, 562);
	vertex(1806, 600);
	vertex(1759, 549);
	vertex(1863, 475);
	vertex(2000, 600);
	vertex(2000, 1000);
	vertex(0, 1000);
	endShape();

	fill(pinkLight);
	quad(570, 450, 790, 520, 1190, 763, 767, 530);
	quad(1250, 800, 1350, 765, 1755, 510, 1825, 463);

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
	bridgeLayer.fill(outlineDark);
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