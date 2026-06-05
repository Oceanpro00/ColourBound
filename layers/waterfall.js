// Global Variables - Objects
var waterfall_speeds;

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

	// Initializing Objects
	waterfall_speeds = {
		low : -220,
		med : 100,
		fast : 420,
		splashes: 1,
		splash_count : 0
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

}

function draw()
{
	background(132, 208, 207); 

    // Waterfall
    waterfall();

	// helpful mouse pointer brought in from sleuth
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX, mouseY);
	pop();
}

function waterfall(){
	// Setup
	noStroke();

	// Waterfall Speeds
	waterfall_speeds.low += 1.2;
	waterfall_speeds.med += 2;
	waterfall_speeds.fast += 3.2;

	if(waterfall_speeds.low > 1300)
	{
		waterfall_speeds.low = -220;
	}

	if(waterfall_speeds.med > 1300)
	{
		waterfall_speeds.med = -220;
	}

	if(waterfall_speeds.fast > 1300)
	{
		waterfall_speeds.fast = -220;
	}

	// Waterfall
	push();
		beginClip();
			rect(880, 425, 240, 510, 20);
		endClip();
		fill(orangeMain);      // localised coordinates adjusted to match bridge
		rect(880, 425, 240, 510, 20);


		translate(0, -300);

		fill(orangeLight);
        for(let i = 0; i <= 4; i++)
        {
            var y_offset = -(i * 180);
            rect(880, 495 + waterfall_speeds.med + y_offset, 20, 100, 10);
            rect(900, 525 + waterfall_speeds.fast + y_offset, 20, 40, 10);
            rect(920, 485 + waterfall_speeds.low + y_offset, 20, 80, 10);
            rect(940, 505 + waterfall_speeds.fast + y_offset, 20, 30, 10);
            rect(960, 485 + waterfall_speeds.med + y_offset, 20, 70, 10);
            rect(980, 525 + waterfall_speeds.low + y_offset, 20, 30, 10);
            rect(1000, 525 + waterfall_speeds.fast + y_offset, 20, 40, 10);
            rect(1020, 485 + waterfall_speeds.med + y_offset, 20, 80, 10);
            rect(1040, 515 + waterfall_speeds.low + y_offset, 20, 30, 10);
            rect(1060, 495 + waterfall_speeds.fast + y_offset, 20, 70, 10);
            rect(1080, 535 + waterfall_speeds.med + y_offset, 20, 30, 10);
            rect(1100, 505 + waterfall_speeds.low + y_offset, 20, 80, 10);

            rect(880, 665 + waterfall_speeds.fast + y_offset, 20, 40, 10);
            rect(900, 635 + waterfall_speeds.low + y_offset, 20, 100, 10);
            rect(920, 675 + waterfall_speeds.med + y_offset, 20, 30, 10);
            rect(940, 665 + waterfall_speeds.fast + y_offset, 20, 90, 10);
            rect(960, 645 + waterfall_speeds.low + y_offset, 20, 60, 10);
            rect(980, 665 + waterfall_speeds.med + y_offset, 20, 80, 10);
            rect(1000, 695 + waterfall_speeds.fast + y_offset, 20, 50, 10);
            rect(1020, 675 + waterfall_speeds.low + y_offset, 20, 40, 10);
            rect(1040, 655 + waterfall_speeds.med + y_offset, 20, 50, 10);
            rect(1060, 685 + waterfall_speeds.fast + y_offset, 20, 60, 10);
            rect(1080, 645 + waterfall_speeds.low + y_offset, 20, 70, 10);
            rect(1100, 675 + waterfall_speeds.med + y_offset, 20, 40, 10);

            rect(880, 815 + waterfall_speeds.low + y_offset, 20, 100, 10);
            rect(900, 835 + waterfall_speeds.med + y_offset, 20, 40, 10);
            rect(920, 825 + waterfall_speeds.fast + y_offset, 20, 80, 10);
            rect(940, 835 + waterfall_speeds.low + y_offset, 20, 30, 10);
            rect(960, 815 + waterfall_speeds.med + y_offset, 20, 60, 10);
            rect(980, 825 + waterfall_speeds.fast + y_offset, 20, 80, 10);
            rect(1000, 835 + waterfall_speeds.low + y_offset, 20, 50, 10);
            rect(1020, 825 + waterfall_speeds.med + y_offset, 20, 40, 10);
            rect(1040, 845 + waterfall_speeds.fast + y_offset, 20, 30, 10);
            rect(1060, 825 + waterfall_speeds.low + y_offset, 20, 70, 10);
            rect(1080, 825 + waterfall_speeds.med + y_offset, 20, 30, 10);
            rect(1100, 835 + waterfall_speeds.fast + y_offset, 20, 80, 10);

            rect(900, 505 + waterfall_speeds.fast + y_offset, 20, 40, 10);
            rect(960, 465 + waterfall_speeds.low + y_offset, 20, 70, 10);
            rect(1060, 445 + waterfall_speeds.med + y_offset, 20, 70, 10);
            rect(920, 655 + waterfall_speeds.fast + y_offset, 20, 30, 10);
            rect(980, 605 + waterfall_speeds.low + y_offset, 20, 80, 10);
            rect(1060, 645 + waterfall_speeds.med + y_offset, 20, 60, 10);
            rect(920, 765 + waterfall_speeds.fast + y_offset, 20, 80, 10);
            rect(1100, 655 + waterfall_speeds.low + y_offset, 20, 40, 10);
            rect(940, 825 + waterfall_speeds.med + y_offset, 20, 30, 10);
            rect(1080, 815 + waterfall_speeds.fast + y_offset, 20, 30, 10);
            rect(880, 765 + waterfall_speeds.low + y_offset, 20, 100, 10);
        }
	pop();

	// splashes
	waterfall_speeds.splash_count += waterfall_speeds.splashes
	
	if(waterfall_speeds.splash_count >= 20)
	{
		waterfall_speeds.splashes = - abs(waterfall_speeds.splashes)
	}
	else if(waterfall_speeds.splash_count <= 0){
		waterfall_speeds.splashes = abs(waterfall_speeds.splashes)
	}

	fill(paperCream);
	ellipse(880, 900 - waterfall_speeds.splash_count, 100, 100);
	ellipse(960, 900 - waterfall_speeds.splash_count, 100, 100);
	ellipse(1040, 900 - waterfall_speeds.splash_count, 100, 100);
	ellipse(1120, 900 - waterfall_speeds.splash_count, 100, 100);
	ellipse(920, 920 - waterfall_speeds.splash_count, 100, 100);
	ellipse(1000, 920 - waterfall_speeds.splash_count, 100, 100);
	ellipse(1080, 920 - waterfall_speeds.splash_count, 100, 100);

	fill(orangeLight);
	ellipse(880, 900 + waterfall_speeds.splash_count/2, 100, 100);
	ellipse(960, 900 + waterfall_speeds.splash_count/2, 100, 100);
	ellipse(1040, 900 + waterfall_speeds.splash_count/2, 100, 100);
	ellipse(1120, 900 + waterfall_speeds.splash_count/2, 100, 100);
	ellipse(920, 920 + waterfall_speeds.splash_count/2, 100, 100);
	ellipse(1000, 920 + waterfall_speeds.splash_count/2, 100, 100);
	ellipse(1080, 920 + waterfall_speeds.splash_count/2, 100, 100);
}