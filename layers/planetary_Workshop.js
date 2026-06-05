// Declaring Global Variables - Variables
var planet_Bob;
var black_hole_spin;
var light_black_hole_spin;
var habitable_cloud_spin;

// Declaring Global Variables - Objects


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
    createCanvas(700, 700);

    // initializing Variables
    planet_Bob = 10;
    black_hole_spin = 0;
    light_black_hole_spin = 0;
    habitable_cloud_spin = 0;

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
    background(0, 0, 0);
    translate(width/2, height/2);

    // Orange Star
    // orange_Star(0, 0, 500);

    // Light Black Hole
    // light_Black_Hole(0, 0, 500);

    // Habitable Planet
    // habitable_Planet(0, 0, 500);

    // Black Hole
    // black_Hole(0, 0, 550);

    // Regular Planet
    regular_Planet(-150, -150, 150, purpleLight, purpleMain, purpleDark);
    regular_Planet(-150, 150, 150, pinkLight, pinkMain, pinkDark);
    regular_Planet(150, -150, 150, tealLight, tealMain, tealDark);
    regular_Planet(150, 150, 150, yellowLight, yellowMain, yellowDark);

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
    
    // helpful mouse pointer brought in from sleuth
	push();
        translate(-width/2, -height/2);
		fill(0);
		noStroke();
		text((mouseX-width/2) + "," + (mouseY-height/2), mouseX, mouseY);
	pop();
}

function regular_Planet(input_x, input_y, size, color_light, color_main, color_dark)
{
    push();
        translate(input_x, input_y + planet_Bob);
        scale(size/ 450);

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

function black_Hole(input_x, input_y, size)
{
    push();
        translate(input_x, input_y);
        scale(size / 450);

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
        translate(input_x, input_y + planet_Bob);
        scale(size/440)
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

function light_Black_Hole(input_x, input_y, size)
{
    push();
        translate(input_x, input_y + planet_Bob);
        scale(size / 500)
        rotate(radians(15));

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
        translate(input_x, input_y + planet_Bob);
        scale(size / 450)
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
