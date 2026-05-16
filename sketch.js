/*

The Game Project

1 - Background Scenery

Core Idea

The first level is currently planned to be a soft coastal meadow kinda inspired by my own internal
vision of the British or Irish seaside cliffs. It should feel calm, open, and beginner-friendly, 
almost like the start of a quiet journey. The player moves across (hopefully) natural looking 
platforms aiming to collect colors and reach a doorway/ending point.

colors:
// Bubblegum Pink
pinkLight = (248, 184, 198)
pinkMain  = (241, 145, 170)
pinkDark  = (222, 108, 144)

// Apricot Yellow
apricotLight = (250, 225, 184)
apricotMain  = (247, 204, 142)
apricotDark  = (232, 171, 102)

// Lavender    // thinking this may be too similar to the deep plum...
lavenderLight = (217, 196, 240)
lavenderMain  = (190, 160, 228)
lavenderDark  = (151, 117, 206)

// Teal
tealLight = (182, 229, 227)
tealMain  = (132, 208, 207)
tealDark  = (78, 168, 174)

// Deep Plum
plumLight = (152, 119, 194)
plumMain  = (123, 91, 176)
plumDark  = (94, 66, 148)

// Support Colours
warmCream   = (250, 238, 221)
paperCream  = (247, 237, 228)
outlineDark = (76, 58, 102)
inkDark     = (52, 37, 79)

*/

// Global Variables   // define the new drawable layers
let backdrop;
let bridgeLayer;

// Colors


function setup()
{
	createCanvas(2000, 1000);
	bridgeLayer = createGraphics(2000, 1000);     // creates another drawable layer (figuring it out)
}

function draw()
{
	background(132, 208, 207); 

	styled_background();

	bridge();     // updates the new layer
	image(bridgeLayer, 0, 0);     // shows the new layer

	waterfall();
	


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
	fill(247, 204, 142);
	ellipse(1000, 350, 500, 500);

	// Sun/ Moon Rays
	noFill();
	stroke(247, 204, 142);
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
	fill(190, 160, 228);
	beginShape();
	vertex(0, 470);
	vertex(570, 200);
	vertex(790, 270);
	vertex(1250, 550);
	vertex(1850, 200);
	vertex(2000, 350);
	vertex(2000, 1000);
	vertex(0, 1000);
	endShape();

	fill(151, 117, 206);
	beginShape();
	vertex(0, 470);
	vertex(275, 340);
	vertex(650, 520);
	vertex(310, 324);
	vertex(387, 286);
	vertex(650, 420);
	vertex(418, 272);
	vertex(487, 240);
	vertex(1121, 580);
	vertex(675, 300);
	vertex(1180, 550);
	vertex(1250, 555);
	vertex(1370, 550);
	vertex(1480, 480);
	vertex(1570, 450);
	vertex(1710, 530);
	vertex(1595, 433);
	vertex(1735, 312);
	vertex(1806, 350);
	vertex(1759, 299);
	vertex(1863, 225);
	vertex(2000, 350);
	vertex(2000, 1000);
	vertex(0, 1000);
	endShape();

	fill(217, 196, 240);
	quad(570, 200, 790, 270, 1185, 512, 767, 280);
	quad(1250, 550, 1350, 530, 1755, 260, 1825, 213);

}


function bridge(){
	// Setup
	bridgeLayer.noStroke();

	// Background bridge scape
	bridgeLayer.fill(152, 119, 194);
	bridgeLayer.rect(0, 395, 2000, 20);
	bridgeLayer.rect(795, 365, 110, 110, 55);
	bridgeLayer.rect(1095, 365, 110, 110, 55);
	
	bridgeLayer.fill(123, 91, 176);
	bridgeLayer.rect(0, 400, 900, 500);
	bridgeLayer.rect(800, 370, 100, 100, 50);
	bridgeLayer.rect(1100, 400, 900, 500);
	bridgeLayer.rect(1100, 370, 100, 100, 50);

	//Bricks
	bridgeLayer.fill(152, 119, 194);
	bridgeLayer.rect(150, 475, 40, 15, 5);
	bridgeLayer.rect(192, 475, 40, 15, 5);
	bridgeLayer.rect(171, 492, 40, 15, 5);

	bridgeLayer.rect(280, 650, 40, 15, 5);
	bridgeLayer.rect(322, 650, 40, 15, 5);
	bridgeLayer.rect(301, 667, 40, 15, 5);

	bridgeLayer.rect(419, 473, 40, 15, 5);
	bridgeLayer.rect(440, 490, 40, 15, 5);
	bridgeLayer.rect(398, 490, 40, 15, 5);

	bridgeLayer.rect(1330, 460, 40, 15, 5);
	bridgeLayer.rect(1372, 460, 40, 15, 5);
	bridgeLayer.rect(1351, 477, 40, 15, 5);

	bridgeLayer.rect(1690, 500, 40, 15, 5);
	bridgeLayer.rect(1669, 517, 40, 15, 5);
	bridgeLayer.rect(1711, 517, 40, 15, 5);

	bridgeLayer.rect(1779, 643, 40, 15, 5);
	bridgeLayer.rect(1821, 643, 40, 15, 5);
	bridgeLayer.rect(1800, 660, 40, 15, 5);

	// Was able to fix layer issue by splitting layers into their own functions
	//Arches
	bridgeLayer.erase();
	bridgeLayer.arc(0, 720, 350, 450, PI, 2*PI);
	bridgeLayer.arc(500, 720, 350, 450, PI, 2*PI);
	bridgeLayer.rect(0, 720, 675, 280);
	bridgeLayer.arc(2000, 720, 350, 450, PI, 2*PI);
	bridgeLayer.arc(1500, 720, 350, 450, PI, 2*PI);
	bridgeLayer.rect(1325, 720, 675, 280);
	bridgeLayer.noErase();

	// Collumns
	bridgeLayer.fill(94, 66, 148);
	bridgeLayer.rect(185, 720, 130, 20);
	bridgeLayer.rect(190, 740, 120, 20);
	bridgeLayer.rect(195, 760, 110, 140);
	bridgeLayer.rect(1685, 720, 130, 20);
	bridgeLayer.rect(1690, 740, 120, 20);
	bridgeLayer.rect(1695, 760, 110, 140);

	bridgeLayer.fill(123, 91, 176);
	bridgeLayer.rect(188, 723, 127, 17);
	bridgeLayer.rect(193, 743, 117, 17);
	bridgeLayer.rect(198, 763, 107, 137);
	bridgeLayer.rect(1688, 723, 127, 17);
	bridgeLayer.rect(1693, 743, 117, 17);
	bridgeLayer.rect(1698, 763, 107, 137);

	bridgeLayer.fill(94, 66, 148);
	bridgeLayer.rect(204, 767, 4, 127, 5);
	bridgeLayer.rect(214, 767, 4, 127, 5);
	bridgeLayer.rect(224, 767, 4, 127, 5);
	bridgeLayer.rect(234, 767, 4, 127, 5);
	bridgeLayer.rect(244, 767, 4, 127, 5);
	bridgeLayer.rect(254, 767, 4, 127, 5);
	bridgeLayer.rect(264, 767, 4, 127, 5);
	bridgeLayer.rect(274, 767, 4, 127, 5);
	bridgeLayer.rect(284, 767, 4, 127, 5);
	bridgeLayer.rect(294, 767, 4, 127, 5);
	bridgeLayer.rect(1704, 767, 4, 127, 5);
	bridgeLayer.rect(1714, 767, 4, 127, 5);
	bridgeLayer.rect(1724, 767, 4, 127, 5);
	bridgeLayer.rect(1734, 767, 4, 127, 5);
	bridgeLayer.rect(1744, 767, 4, 127, 5);
	bridgeLayer.rect(1754, 767, 4, 127, 5);
	bridgeLayer.rect(1764, 767, 4, 127, 5);
	bridgeLayer.rect(1774, 767, 4, 127, 5);
	bridgeLayer.rect(1784, 767, 4, 127, 5);
	bridgeLayer.rect(1794, 767, 4, 127, 5);
}

function waterfall(){
	// Setup
	noStroke();

	// Waterfall
	fill(222, 108, 144);
	rect(880, 390, 240, 510, 20);

	fill(241, 145, 170);
	rect(880, 460, 20, 100, 10);
	rect(900, 490, 20, 40, 10);
	rect(920, 450, 20, 80, 10);
	rect(940, 470, 20, 30, 10);
	rect(960, 450, 20, 70, 10);
	rect(980, 490, 20, 30, 10);
	rect(1000, 490, 20, 40, 10);
	rect(1020, 450, 20, 80, 10);
	rect(1040, 480, 20, 30, 10);
	rect(1060, 460, 20, 70, 10);
	rect(1080, 500, 20, 30, 10);
	rect(1100, 470, 20, 80, 10);

	rect(880, 630, 20, 40, 10);
	rect(900, 600, 20, 100, 10);
	rect(920, 640, 20, 30, 10);
	rect(940, 630, 20, 90, 10);
	rect(960, 610, 20, 60, 10);
	rect(980, 630, 20, 80, 10);
	rect(1000, 660, 20, 50, 10);
	rect(1020, 640, 20, 40, 10);
	rect(1040, 620, 20, 50, 10);
	rect(1060, 650, 20, 60, 10);
	rect(1080, 610, 20, 70, 10);
	rect(1100, 640, 20, 40, 10);

	rect(880, 780, 20, 100, 10);
	rect(900, 800, 20, 40, 10);
	rect(920, 790, 20, 80, 10);
	rect(940, 800, 20, 30, 10);
	rect(960, 780, 20, 60, 10);
	rect(980, 790, 20, 80, 10);
	rect(1000, 800, 20, 50, 10);
	rect(1020, 790, 20, 40, 10);
	rect(1040, 810, 20, 30, 10);
	rect(1060, 790, 20, 70, 10);
	rect(1080, 790, 20, 30, 10);
	rect(1100, 800, 20, 80, 10);

	fill(222, 108, 144);
	rect(900, 470, 20, 40, 10);
	rect(960, 430, 20, 70, 10);
	rect(1060, 410, 20, 70, 10);
	rect(920, 620, 20, 30, 10);
	rect(980, 570, 20, 80, 10);
	rect(1060, 610, 20, 60, 10);
	rect(920, 730, 20, 80, 10);
	rect(1100, 620, 20, 40, 10);
	rect(940, 790, 20, 30, 10);
	rect(1080, 780, 20, 30, 10);
	rect(880, 730, 20, 100, 10);

	
	// lake
	rect(0, 900, 2000, 100);
}