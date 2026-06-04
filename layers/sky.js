// Declaring Global Variables - Variables
var sky_Spin;

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
	createCanvas(2000, 2000);

    // initializing Variables
    sky_Spin = 0;

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
    for(let i = 0; i < 70; i++){
        starArray.push({
            star_x: random(-(width/2), width/2),
            star_y: random(100, height/2),    // pulling from week 5 hack it exercise
            star_scaled: random()
        })
    }
    for(let i = 0; i < 70; i++){     // populating the night sky extra
        starArray.push({
            star_x: random(-(width/2), width/2),
            star_y: random(-(height/2), height/2),
            star_scaled: random()
        })
    }
}

function draw()
{
	background(tealLight); 

    // sky     // pulling from week 5 hack it exercise
    push();
        // sky spin
        // if(sky_Spin >= 360){
        //     sky_Spin = 0;
        // }
        // else{
        //     sky_Spin += 0.03;
        // }

        translate(width/2, height/2);
        rotate(radians(sky_Spin))
        
        // sun
        spinning_Sun(-300, -400, 1000);

        // stars
        for(let i = 0; i < 140; i++){
            stars(starArray[i].star_x, starArray[i].star_y, starArray[i].star_scaled);
        }

        // moon
        noStroke();
        fill(201,201,201);
        ellipse(232, 332, 90, 90);
        push();
            fill(229,229,229);
            translate(232, 332);
            rotate(radians(300));
            ellipse(0, 0, 40, 90);
            arc(0, 0, 90, 90, radians(90), radians(270));
        pop();
        stroke(229,229,229);
        strokeWeight(1);
        ellipse(238, 332, 10, 10);
        ellipse(223, 358, 20, 20);
        ellipse(209, 312, 5, 5);
        ellipse(246, 356, 9, 9);
        ellipse(233, 322, 5, 5);
        ellipse(218, 345, 7, 7);
        ellipse(258, 328, 8, 8);
    pop();

    // helpful mouse pointer brought in from sleuth
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX, mouseY);
	pop();
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