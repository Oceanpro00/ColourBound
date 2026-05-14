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

// Lavender
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

function setup()
{
	createCanvas(2000, 1000);
}

function draw()
{
	background(132, 208, 207); 
	noStroke();

	// Background bridge scape
	fill(152, 119, 194);
	rect(0, 395, 2000, 20);
	rect(795, 365, 110, 110, 55);
	rect(1095, 365, 110, 110, 55);
	
	fill(123, 91, 176);
	rect(0, 400, 900, 500);
	rect(800, 370, 100, 100, 50);
	rect(1100, 400, 900, 500);
	rect(1100, 370, 100, 100, 50);

	//Bricks
	fill(152, 119, 194);
	rect(150, 475, 40, 15, 5);
	rect(192, 475, 40, 15, 5);
	rect(171, 492, 40, 15, 5);

	rect(280, 650, 40, 15, 5);
	rect(322, 650, 40, 15, 5);
	rect(301, 667, 40, 15, 5);

	rect(419, 473, 40, 15, 5);
	rect(440, 490, 40, 15, 5);
	rect(398, 490, 40, 15, 5);

	rect(1330, 460, 40, 15, 5);
	rect(1372, 460, 40, 15, 5);
	rect(1351, 477, 40, 15, 5);

	rect(1690, 500, 40, 15, 5);
	rect(1669, 517, 40, 15, 5);
	rect(1711, 517, 40, 15, 5);

	rect(1779, 643, 40, 15, 5);
	rect(1821, 643, 40, 15, 5);
	rect(1800, 660, 40, 15, 5);

	//Arches
	fill(132, 208, 207);
	arc(0, 720, 350, 450, PI, 2*PI);
	arc(500, 720, 350, 450, PI, 2*PI);
	rect(0, 720, 675, 280);
	arc(2000, 720, 350, 450, PI, 2*PI);
	arc(1500, 720, 350, 450, PI, 2*PI);
	rect(1325, 720, 675, 280);

	

	// Waterfall
	fill(222, 108, 144);
	rect(880, 390, 240, 510, 20)

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

	


	// helpful mouse pointer brought in from sleuth
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX, mouseY);
	pop();
}
