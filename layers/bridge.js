// Global Variables
let backdrop;
let bridgeLayer;

function setup()
{
	createCanvas(2000, 1000);
	bridgeLayer = createGraphics(2000, 1000);
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

	// Background bridge main rects shapes
	bridgeLayer.fill(purpleLight);
	bridgeLayer.rect(0, 30, 2000, 20);
	bridgeLayer.rect(795, 0, 110, 110, 55);
	bridgeLayer.rect(1095, 0, 110, 110, 55);
	
	bridgeLayer.fill(purpleMain);
	bridgeLayer.rect(0, 35, 900, 500);
	bridgeLayer.rect(800, 5, 100, 100, 50);
	bridgeLayer.rect(1100, 35, 900, 500);
	bridgeLayer.rect(1100, 5, 100, 100, 50);

	//Bricks
	bridgeLayer.fill(purpleLight);
	bridgeLayer.rect(150, 110, 40, 15, 5);
	bridgeLayer.rect(192, 110, 40, 15, 5);
	bridgeLayer.rect(171, 127, 40, 15, 5);

	bridgeLayer.rect(280, 285, 40, 15, 5);
	bridgeLayer.rect(322, 285, 40, 15, 5);
	bridgeLayer.rect(301, 302, 40, 15, 5);

	bridgeLayer.rect(419, 108, 40, 15, 5);
	bridgeLayer.rect(440, 125, 40, 15, 5);
	bridgeLayer.rect(398, 125, 40, 15, 5);

	bridgeLayer.rect(1330, 95, 40, 15, 5);
	bridgeLayer.rect(1372, 95, 40, 15, 5);
	bridgeLayer.rect(1351, 112, 40, 15, 5);

	bridgeLayer.rect(1690, 135, 40, 15, 5);
	bridgeLayer.rect(1669, 152, 40, 15, 5);
	bridgeLayer.rect(1711, 152, 40, 15, 5);

	bridgeLayer.rect(1779, 278, 40, 15, 5);
	bridgeLayer.rect(1821, 278, 40, 15, 5);
	bridgeLayer.rect(1800, 295, 40, 15, 5);

	// Was able to fix layer issue by splitting layers into their own functions
	//Arches
	bridgeLayer.erase();
	bridgeLayer.arc(0, 355, 350, 450, PI, 2*PI);
	bridgeLayer.arc(500, 355, 350, 450, PI, 2*PI);
	bridgeLayer.rect(0, 355, 675, 280);
	bridgeLayer.arc(2000, 355, 350, 450, PI, 2*PI);
	bridgeLayer.arc(1500, 355, 350, 450, PI, 2*PI);
	bridgeLayer.rect(1325, 355, 675, 280);
	bridgeLayer.noErase();

	// Collumns
	bridgeLayer.fill(purpleDark);
	bridgeLayer.rect(185, 355, 130, 20);
	bridgeLayer.rect(190, 375, 120, 20);
	bridgeLayer.rect(195, 395, 110, 140);
	bridgeLayer.rect(1685, 355, 130, 20);
	bridgeLayer.rect(1690, 375, 120, 20);
	bridgeLayer.rect(1695, 395, 110, 140);

	bridgeLayer.fill(purpleMain);
	bridgeLayer.rect(188, 358, 127, 17);
	bridgeLayer.rect(193, 378, 117, 17);
	bridgeLayer.rect(198, 398, 107, 137);
	bridgeLayer.rect(1688, 358, 127, 17);
	bridgeLayer.rect(1693, 378, 117, 17);
	bridgeLayer.rect(1698, 398, 107, 137);

	bridgeLayer.fill(purpleDark);
	bridgeLayer.rect(204, 402, 4, 127, 5);
	bridgeLayer.rect(214, 402, 4, 127, 5);
	bridgeLayer.rect(224, 402, 4, 127, 5);
	bridgeLayer.rect(234, 402, 4, 127, 5);
	bridgeLayer.rect(244, 402, 4, 127, 5);
	bridgeLayer.rect(254, 402, 4, 127, 5);
	bridgeLayer.rect(264, 402, 4, 127, 5);
	bridgeLayer.rect(274, 402, 4, 127, 5);
	bridgeLayer.rect(284, 402, 4, 127, 5);
	bridgeLayer.rect(294, 402, 4, 127, 5);
	bridgeLayer.rect(1704, 402, 4, 127, 5);
	bridgeLayer.rect(1714, 402, 4, 127, 5);
	bridgeLayer.rect(1724, 402, 4, 127, 5);
	bridgeLayer.rect(1734, 402, 4, 127, 5);
	bridgeLayer.rect(1744, 402, 4, 127, 5);
	bridgeLayer.rect(1754, 402, 4, 127, 5);
	bridgeLayer.rect(1764, 402, 4, 127, 5);
	bridgeLayer.rect(1774, 402, 4, 127, 5);
	bridgeLayer.rect(1784, 402, 4, 127, 5);
	bridgeLayer.rect(1794, 402, 4, 127, 5);
	
}