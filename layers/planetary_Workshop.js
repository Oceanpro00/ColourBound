// Declaring Global Variables - Variables
var planet_Bob;
var black_hole_spin;

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
    black_hole_spin = 0

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
    // orange_Star(0, 0);

    // Light Black Hole
    // light_Black_Hole(0, 0);

    // Planet Bob Animation
    if(frameCount % 180 == 0)    // runs every 3 seconds 
        {
            if(planet_Bob == 10)
            {
                planet_Bob = 0
            }
            else
            {
                planet_Bob = 10
            }
        }
}

function light_Black_Hole(input_x, input_y)
{
    push();
        translate(input_x, input_y + planet_Bob);
        rotate(radians(15));

        // spinning rings
        black_hole_spin += 0.2

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
            arc(0, 0, 450, 135, radians(10 + black_hole_spin), radians(75 + black_hole_spin))
            arc(0, 0, 450, 135, radians(130 + black_hole_spin), radians(150 + black_hole_spin))
            arc(0, 0, 450, 135, radians(170 + black_hole_spin), radians(190 + black_hole_spin))
            arc(0, 0, 450, 135, radians(240 + black_hole_spin), radians(330 + black_hole_spin))
            arc(0, 0, 550, 165, radians(45 + black_hole_spin), radians(135 + black_hole_spin))
            arc(0, 0, 550, 165, radians(150 + black_hole_spin), radians(205 + black_hole_spin))
            arc(0, 0, 550, 165, radians(260 + black_hole_spin), radians(300 + black_hole_spin))
            arc(0, 0, 550, 165, radians(340 + black_hole_spin), radians(10 + black_hole_spin))
        pop();

        // inner rings
        fill(red(pinkLight), green(pinkLight), blue(pinkLight), 100)
        ellipse(0, 0, 200, 60)
        ellipse(0, 0, 300, 90)
        noFill();
        stroke(pinkMain);
        strokeWeight(3);
        arc(0, 0, 200, 60, radians(10 + black_hole_spin), radians(75 + black_hole_spin))
        arc(0, 0, 200, 60, radians(130 + black_hole_spin), radians(150 + black_hole_spin))
        arc(0, 0, 200, 60, radians(170 + black_hole_spin), radians(190 + black_hole_spin))
        arc(0, 0, 200, 60, radians(240 + black_hole_spin), radians(330 + black_hole_spin))
        arc(0, 0, 300, 90, radians(45 + black_hole_spin), radians(135 + black_hole_spin))
        arc(0, 0, 300, 90, radians(150 + black_hole_spin), radians(205 + black_hole_spin))
        arc(0, 0, 300, 90, radians(260 + black_hole_spin), radians(300 + black_hole_spin))
        arc(0, 0, 300, 90, radians(340 + black_hole_spin), radians(10 + black_hole_spin))

        // core
        noStroke();
        fill(255);
        ellipse(0, 0, 100, 30);
        fill(255, 255, 255, 100)
        arc(0, 0, 100, 100, radians(180), radians(360));
    pop();
}

function orange_Star(input_x, input_y)
{
    push();
        translate(input_x, input_y + planet_Bob);
        noStroke();

        // Planet
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
        
        push();
            rotate(radians(-25));
            noFill();
            stroke(orangeDark);
            strokeWeight(16);
            arc(0, 0, 500, 140, radians(340), radians(200));
        pop();
    pop();

}
