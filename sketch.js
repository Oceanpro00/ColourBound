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

// Declaring Global Variables - Variables
var sky_Spin;
var auburn_sky_alpha;
var night_sky_alpha;
var planet_Bob;
var black_hole_spin;
var light_black_hole_spin;
var habitable_cloud_spin;

// Declaring Global Variables - Objects
var star;
var sun_Spin;

// Declaring Global Variables - Arrays (essentially like a list in python - need it to create my stars)
var starArray = [];

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

	// initializing Variables
    sky_Spin = 0;
    auburn_sky_alpha = 0;
    night_sky_alpha = 0;
    planet_Bob = 10;
    black_hole_spin = 0;
    light_black_hole_spin = 0;
    habitable_cloud_spin = 0;

    // initializing Objects
    sun_Spin = {
        slow : 0,
        medium : 0,
        fast : 0
    }
	
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

	// stars
	star = {
        pos_x: 0,
        pos_y: 0,
        scaled: 1.0
    }
    for(let i = 0; i < 100; i++){     // populating the night sky extra
        starArray.push({
            star_x: random(-(width/2 + 200), width/2 + 200),    // pulling from week 5 hack it exercise
            star_y: random(200, height + 200),
            star_scaled: random()
        })
    }
    for(let i = 0; i < 100; i++){     
        starArray.push({
            star_x: random(-(width/2 + 200), width/2 + 200),
            star_y: random(-(height + 200), height + 200),
            star_scaled: random()
        })
    }
}

function draw()
{
	background(tealLight); 

	// Sky
	grand_Sky();

	// Sky/ BG ---> Mountainscape
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

function grand_Sky()
{
	// sky spin
    if(sky_Spin >= 360){
        sky_Spin = 0;
    }
    else{
        sky_Spin += 0.02;
    }

	// sky color Background     // pulling from week 5 hack it exercise
    if(sky_Spin >= 280)
    {
        night_sky_alpha = map(sky_Spin, 290, 320, 255, 0)
        auburn_sky_alpha = map(sky_Spin, 340, 360, 120, 0)
    }
    else
    {
        auburn_sky_alpha = map(sky_Spin, 70, 90, 0, 120)
        night_sky_alpha = map(sky_Spin, 110, 140, 0, 255)
    }
    fill(red(orangeMain), green(orangeMain), blue(orangeMain), auburn_sky_alpha);
    rect(0, 0, width, height);
    fill(red(navyDark), green(navyDark), blue(navyDark), night_sky_alpha);
    rect(0, 0, width, height);

	// sky
    push();
        translate(width/2, height);
        rotate(radians(sky_Spin))

        // stars
        for(let i = 0; i < 200; i++){
            stars(starArray[i].star_x, starArray[i].star_y, starArray[i].star_scaled);
        }

        // sun
        spinning_Sun(-500, -650, 1000);

        // moon
        moon(850, 400, 150, -45);

        // Orange Star
        orange_Star(1050, 100, 100);

        // Light Black Hole
        light_Black_Hole(500, 700, 280, 150);

        // Habitable Planet
        habitable_Planet(0, 700, 100);

        // Black Hole
        black_Hole(150, 1000, 80);

        // Regular Planet
        push();
        regular_Planet(550, 450, 100, purpleLight, purpleMain, purpleDark, 90);
        regular_Planet(800, -300, 120, pinkLight, pinkMain, pinkDark, 55);
        regular_Planet(600, -50, 80, tealLight, tealMain, tealDark, 80);
        regular_Planet(-380, 750, 100, yellowLight, yellowMain, yellowDark, 145);
        regular_Planet(-400, 450, 60, orangeLight, orangeMain, orangeDark, 130);
        pop();
        
    pop();

    // Planet Bob Animation
    if(frameCount % 180 == 0)    // runs every 3 seconds 
    {
        if(planet_Bob == 10)
        {
            planet_Bob = 0;
        }
        else
        {
            planet_Bob = 10;
        }
    }
}

function stars(input_x, input_y, input_size){
    star = {
        pos_x: 0,
        pos_y: 0,
        scaled: input_size
    }

    push();
        translate(input_x, input_y);
        stroke(255, 255, 255, random(20, 255));
        strokeWeight(2 * star.scaled)
        line(star.pos_x, 
            star.pos_y + 5 * star.scaled, 
            star.pos_x + 10 * star.scaled, 
            star.pos_y + 5 * star.scaled);
        line(star.pos_x + 5 * star.scaled, 
            star.pos_y, 
            star.pos_x + 5 * star.scaled, 
            star.pos_y + 10 * star.scaled);
    pop();
}

function spinning_Sun(input_x, input_y, size)
{
    push();
        translate(input_x, input_y);
        scale(size/1650);
        //Sun
        noStroke();
        fill(yellowLight);
        ellipse(0, 0, 500, 500);

        // Sun/ Moon Rays
        sun_Spin.slow += 0.0004
        sun_Spin.medium += 0.001
        sun_Spin.fast += 0.003
        noFill();
        stroke(yellowLight);
        strokeWeight(10);

        // Sun rays opacity
        var r = red(yellowLight);
        var g = green(yellowLight);
        var b = blue(yellowLight);

        push();
            strokeWeight(20);
            rotate(sun_Spin.medium);
            arc(0, 0, 544, 544, radians(150), radians(200));
            arc(0, 0, 544, 544, radians(210), radians(270));
            arc(0, 0, 544, 544, radians(280), radians(310));
            arc(0, 0, 544, 544, radians(320), radians(30));
            arc(0, 0, 544, 544, radians(40), radians(140));
        pop();

        push();
            stroke(r, g, b, 240);
            rotate(-sun_Spin.slow);
            arc(0, 0, 595, 595, radians(40), radians(140));
            arc(0, 0, 595, 595, radians(150), radians(210));
            arc(0, 0, 595, 595, radians(220), radians(240));
            arc(0, 0, 595, 595, radians(250), radians(260));
            arc(0, 0, 595, 595, radians(270), radians(320));
            arc(0, 0, 595, 595, radians(330), radians(30));
        pop();

        push();
            stroke(r, g, b, 220);
            rotate(-sun_Spin.fast);
            arc(0, 0, 650, 650, radians(10), radians(70));
            arc(0, 0, 650, 650, radians(80), radians(130));
            arc(0, 0, 650, 650, radians(140), radians(200));
            arc(0, 0, 650, 650, radians(210), radians(250));
            arc(0, 0, 650, 650, radians(260), radians(310));
            arc(0, 0, 650, 650, radians(320), radians(370));
        pop();

        push();
            stroke(r, g, b, 190);
            rotate(-sun_Spin.slow);
            arc(0, 0, 705, 705, radians(0), radians(50));
            arc(0, 0, 705, 705, radians(60), radians(120));
            arc(0, 0, 705, 705, radians(130), radians(190));
            arc(0, 0, 705, 705, radians(200), radians(230));
            arc(0, 0, 705, 705, radians(240), radians(300));
            arc(0, 0, 705, 705, radians(310), radians(360));
        pop();
        
        push();
            stroke(r, g, b, 150);
            rotate(sun_Spin.fast);
            arc(0, 0, 830, 830, radians(20), radians(80));
            arc(0, 0, 830, 830, radians(90), radians(145));
            arc(0, 0, 830, 830, radians(155), radians(215));
            arc(0, 0, 830, 830, radians(225), radians(245));
            arc(0, 0, 830, 830, radians(255), radians(315));
            arc(0, 0, 830, 830, radians(325), radians(380));
        pop();

        push();
            stroke(r, g, b, 100);
            rotate(-sun_Spin.medium);
            arc(0, 0, 950, 950, radians(5), radians(55));
            arc(0, 0, 950, 950, radians(65), radians(125));
            arc(0, 0, 950, 950, radians(135), radians(185));
            arc(0, 0, 950, 950, radians(195), radians(235));
            arc(0, 0, 950, 950, radians(245), radians(295));
            arc(0, 0, 950, 950, radians(305), radians(365));
        pop();
        
        push();
            stroke(r, g, b, 140);
            rotate(sun_Spin.slow);
            arc(0, 0, 1050, 1050, radians(25), radians(75));
            arc(0, 0, 1050, 1050, radians(85), radians(135));
            arc(0, 0, 1050, 1050, radians(145), radians(205));
            arc(0, 0, 1050, 1050, radians(215), radians(275));
            arc(0, 0, 1050, 1050, radians(285), radians(325));
            arc(0, 0, 1050, 1050, radians(335), radians(385));
        pop();

        push();
            stroke(r, g, b, 70);
            rotate(sun_Spin.fast);
            arc(0, 0, 1200, 1200, radians(10), radians(70));
            arc(0, 0, 1200, 1200, radians(80), radians(130));
            arc(0, 0, 1200, 1200, radians(140), radians(200));
            arc(0, 0, 1200, 1200, radians(210), radians(250));
            arc(0, 0, 1200, 1200, radians(260), radians(310));
            arc(0, 0, 1200, 1200, radians(320), radians(370));
        pop();

        push();
            stroke(r, g, b, 40);
            rotate(-sun_Spin.slow);
            arc(0, 0, 1400, 1400, radians(40), radians(140));
            arc(0, 0, 1400, 1400, radians(150), radians(210));
            arc(0, 0, 1400, 1400, radians(220), radians(240));
            arc(0, 0, 1400, 1400, radians(250), radians(260));
            arc(0, 0, 1400, 1400, radians(270), radians(320));
            arc(0, 0, 1400, 1400, radians(330), radians(30));
        pop();

        push();
            stroke(r, g, b, 20);
            rotate(-sun_Spin.fast);
            arc(0, 0, 1650, 1650, radians(20), radians(80));
            arc(0, 0, 1650, 1650, radians(90), radians(145));
            arc(0, 0, 1650, 1650, radians(155), radians(215));
            arc(0, 0, 1650, 1650, radians(225), radians(245));
            arc(0, 0, 1650, 1650, radians(255), radians(315));
            arc(0, 0, 1650, 1650, radians(325), radians(380));
        pop();

    pop();
}

function moon(input_x, input_y, size, deg)
{
    push();
        translate(input_x, input_y);
        scale(size/90);
        rotate(radians(deg));
        translate(0, planet_Bob/2);

        // planetary body
        noStroke();
        fill(201,201,201);
        ellipse(0, 0, 90, 90);
        push();
            fill(229,229,229);
            rotate(radians(300));
            ellipse(0, 0, 40, 90);
            arc(0, 0, 90, 90, radians(90), radians(270));
        pop();
        stroke(229,229,229);
        strokeWeight(1);
        ellipse(6, 0, 10, 10);
        ellipse(-9, 26, 20, 20);
        ellipse(-23, -20, 5, 5);
        ellipse(14, 24, 9, 9);
        ellipse(1, -10, 5, 5);
        ellipse(-14, 13, 7, 7);
        ellipse(26, -4, 8, 8);
    pop();
}

function black_Hole(input_x, input_y, size)
{
    push();
        translate(input_x, input_y);
        scale(size / 450);
        translate(0, planet_Bob);

        // spinning particles
        black_hole_spin += 0.05;

        // Black Hole Base
        fill(red(purpleDark), green(purpleDark), blue(purpleDark), 150);
        ellipse(0, 0, 450, 450);
        fill(paperCream);
        ellipse(0, 0, 400, 400);
        fill(pinkMain);
        ellipse(0, 0, 390, 390);

        // Black Hole Core
        push();
            beginClip();
                ellipse(0, 0, 380, 380);
            endClip();
            fill(navyDark);
            ellipse(0, 0, 380, 380);
            fill(0);
            ellipse(-40, 40, 380, 380);
            noFill();
            stroke(0);
            strokeWeight(30);
            ellipse(0, 0, 380, 380);
        pop();

        // Particles
        noFill();
        stroke(paperCream);
        strokeWeight(10);
        for(let i = 0; i <= 360; i += 20)
        {
            arc(0, 0, 430, 430, radians(0 + i + black_hole_spin), radians(1 + i + black_hole_spin));
        }
    pop();
}

function habitable_Planet(input_x, input_y, size)
{
    push();
        translate(input_x, input_y);
        scale(size/440)
        rotate(radians(180));
        translate(0, planet_Bob);
        push();

            // Base Shape
            beginClip();
                ellipse(0, 0, 400, 400)
            endClip()
            fill(tealDark);
            ellipse(0, 0, 400, 400);

            // Bright Stripes
            stroke(tealLight);
            strokeWeight(50);
            line(180, -100, 210, -100);
            line(185, -50, 210, -50);
            line(160, 0, 210, 0);
            line(100, 50, 210, 50);
            line(30, 100, 210, 100);
            line(-80, 150, 210, 150);
            line(-150, 200, 210, 200);

            line(-210, -200, 80, -200);
            line(-210, -150, 10, -150);
            line(-210, -100, -100, -100);
            line(-210, -50, -150, -50);
            line(-210, 0, -180, 0);
            line(-210, 5, -200, 50);
        pop();

        // Cloud Layer
        push();
            beginClip();
                ellipse(0, 0, 440, 440);
            endClip();

            if(frameCount % 25 == 0)
            {
                if(habitable_cloud_spin >= 500)
                {
                    habitable_cloud_spin = 0;
                }
                else
                {
                    habitable_cloud_spin += 4;
                }
            }

            stroke(paperCream);
            strokeWeight(50);

            line(-520 + habitable_cloud_spin, 25, -450 + habitable_cloud_spin, 25);
            line(-580 + habitable_cloud_spin, 50, -490 + habitable_cloud_spin, 50);
            line(-20 + habitable_cloud_spin, 25, 40 + habitable_cloud_spin, 25);
            line(-80 + habitable_cloud_spin, 50, 0 + habitable_cloud_spin, 50);

            line(-280 + habitable_cloud_spin, -125, -220 + habitable_cloud_spin, -125);
            line(-320 + habitable_cloud_spin, -100, -160 + habitable_cloud_spin, -100);
            line(-340 + habitable_cloud_spin, -75, -210 + habitable_cloud_spin, -75);
            line(220 + habitable_cloud_spin, -125, 280 + habitable_cloud_spin, -125);
            line(160 + habitable_cloud_spin, -100, 340 + habitable_cloud_spin, -100);
            line(180 + habitable_cloud_spin, -75, 290 + habitable_cloud_spin, -75);

            line(-440 + habitable_cloud_spin, 150, -410 + habitable_cloud_spin, 150);
            line(-470 + habitable_cloud_spin, 175, -400 + habitable_cloud_spin, 175);
            line(60 + habitable_cloud_spin, 150, 90 + habitable_cloud_spin, 150);
            line(30 + habitable_cloud_spin, 175, 100 + habitable_cloud_spin, 175);
        pop();

    pop();
}

function light_Black_Hole(input_x, input_y, size, deg)
{
    push();
        translate(input_x, input_y);
        scale(size / 500)
        rotate(radians(deg));
        translate(0, planet_Bob);
        rotate(radians(15));       // tilted bob

        // spinning rings
        light_black_hole_spin += 0.2

        // outer rings
        push();
            beginClip({invert : true});
                ellipse(0, 0, 300, 90);
            endClip();

            fill(red(tealLight), green(tealLight), blue(tealLight), 100)
            ellipse(0, 0, 450, 135);
            ellipse(0, 0, 550, 165);
            noFill();
            stroke(tealMain);
            strokeWeight(3);
            arc(0, 0, 450, 135, radians(10 + light_black_hole_spin), radians(75 + light_black_hole_spin))
            arc(0, 0, 450, 135, radians(130 + light_black_hole_spin), radians(150 + light_black_hole_spin))
            arc(0, 0, 450, 135, radians(170 + light_black_hole_spin), radians(190 + light_black_hole_spin))
            arc(0, 0, 450, 135, radians(240 + light_black_hole_spin), radians(330 + light_black_hole_spin))
            arc(0, 0, 550, 165, radians(45 + light_black_hole_spin), radians(135 + light_black_hole_spin))
            arc(0, 0, 550, 165, radians(150 + light_black_hole_spin), radians(205 + light_black_hole_spin))
            arc(0, 0, 550, 165, radians(260 + light_black_hole_spin), radians(300 + light_black_hole_spin))
            arc(0, 0, 550, 165, radians(340 + light_black_hole_spin), radians(10 + light_black_hole_spin))
        pop();

        // inner rings
        fill(red(pinkLight), green(pinkLight), blue(pinkLight), 100)
        ellipse(0, 0, 200, 60)
        ellipse(0, 0, 300, 90)
        noFill();
        stroke(pinkMain);
        strokeWeight(3);
        arc(0, 0, 200, 60, radians(10 + light_black_hole_spin), radians(75 + light_black_hole_spin))
        arc(0, 0, 200, 60, radians(130 + light_black_hole_spin), radians(150 + light_black_hole_spin))
        arc(0, 0, 200, 60, radians(170 + light_black_hole_spin), radians(190 + light_black_hole_spin))
        arc(0, 0, 200, 60, radians(240 + light_black_hole_spin), radians(330 + light_black_hole_spin))
        arc(0, 0, 300, 90, radians(45 + light_black_hole_spin), radians(135 + light_black_hole_spin))
        arc(0, 0, 300, 90, radians(150 + light_black_hole_spin), radians(205 + light_black_hole_spin))
        arc(0, 0, 300, 90, radians(260 + light_black_hole_spin), radians(300 + light_black_hole_spin))
        arc(0, 0, 300, 90, radians(340 + light_black_hole_spin), radians(10 + light_black_hole_spin))

        // core
        noStroke();
        fill(255);
        ellipse(0, 0, 100, 30);
        fill(255, 255, 255, 100)
        arc(0, 0, 100, 100, radians(180), radians(360));
    pop();
}

function orange_Star(input_x, input_y, size)
{
    push();
        translate(input_x, input_y);
        scale(size / 450);
        rotate(radians(90));
        translate(0, planet_Bob);      // this second translate makes sure bob is oriented correctly
        noStroke();

        // Base Planet
        push();
            beginClip();
                ellipse(0, 0, 300, 300);
            endClip();


            fill(orangeMain);
            rect(-(width/2), -(height/2), width, height);
            fill(orangeLight);
            ellipse(-30, -20, 300, 300);
            rotate(radians(45));
            fill(red(orangeMain), green(orangeMain), blue(orangeMain), 100);
            ellipse(-70, 0, 130, 180);
        pop();

        // Planet Hoop
        push();
            rotate(radians(-25));
            noFill();
            stroke(orangeDark);
            strokeWeight(16);
            arc(0, 0, 500, 140, radians(340), radians(200));
        pop();
    pop();

}

function regular_Planet(input_x, input_y, size, color_light, color_main, color_dark, deg)
{
    push();
        translate(input_x, input_y);
        scale(size/ 450);
        rotate(radians(deg));
        translate(0, planet_Bob);

        // Planetary Base
        beginClip();
            ellipse(0, 0, 450, 450);
        endClip();
        fill(color_dark)
        ellipse(0, 0, 450, 450);

        // planet lines
        rotate(radians(-45));
        stroke(color_main);
        strokeWeight(50);
        line(-200, -50, -200, -230);
        line(-150, -80, -150, -230);
        line(-100, 0, -100, -230);
        line(-50, 30, -50, -230);
        line(0, -50, 0, -230);
        line(50, 0, 50, -230);
        line(100, 30, 100, -230);
        line(150, -30, 150, -230);
        line(200, 0, 200, -230);

        stroke(color_dark);
        line(-150, -70, -150, 230);
        line(0, -50, 0, 230);
        line(50, -20, 50, 230);
        line(150, -50, 150, 230);

        stroke(color_main);
        line(100, 130, 100, 110);
        line(-100, 110, -100, 90);

        noFill();
        strokeWeight(30);
        stroke(color_light);
        ellipse(0, 0, 450, 450);
        
    pop();
}