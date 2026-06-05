// Declaring Global Variables - Variables
var planet_Bob;

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
    createCanvas(500, 500);

    // initializing Variables
    planet_Bob = 10;

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
    orange_Star(0, 0);

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
