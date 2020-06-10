//Spin-Off Of Fish Tank By seanwallawalla official \\
//created june 8th 2017 
//finished june 8th 2017
//language: english + javascript
//lines of code (with blanks): 102
//lines of codes (without blanks): 83
//# of blank lines of code: 19

//Startup Variable Section (S.V.S)
background(0, 184, 240); // the background
getImage ("cute/StoneBlock"); // cant get image to work
image("cute/StoneBlock", 500, 500, 500, 500); // cant get image to work

// Purple Fish Part 1 \\
var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);

// Purple Fish Part 2 \\
noStroke();
fill(bodyColor);

// Purple Fish Part 3 \\
ellipse(centerX, centerY, bodyLength, bodyHeight);

// Purple Fish Part 4 \\
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// Purple Fish Part 5 \\
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

// Sand \\
fill(240, 223, 70);
rect(-80, 360, 500, 300, 50);

// Bubbles \\
fill(2, 0, 138);
ellipse(100, 320, 20, 20);
ellipse(100, 290, 20, 20);
ellipse(100, 260, 20, 20);
ellipse(130, 220, 20, 20);
ellipse(100, 190, 20, 20);

// Orange Fish Part 1
var centerX2 = 250;
var centerY2 = 250;
var bodyLength2 = 118;
var bodyHeight2 = 74;
var bodyColor2 = color(162, 0, 255);

// Orange Fish Part 2 \\
noStroke();
fill(237, 61, 12);

// Orange Fish Part 3 \\
ellipse(centerX2, centerY2, bodyLength2, bodyHeight2);

// Orange Fish Part 4 \\
var tailWidth = bodyLength2/4;
var tailHeight = bodyHeight2/2;
triangle(centerX2-bodyLength2/2, centerY2,
         centerX2-bodyLength2/2-tailWidth, centerY2-tailHeight,
         centerX2-bodyLength2/2-tailWidth, centerY2+tailHeight);
// Orange Fish Part 5 \\
fill(33, 33, 33);
ellipse(centerX2+bodyLength2/4, centerY2, bodyHeight2/5, bodyHeight2/5);


// Green Fish Part 1
var centerX3 = 130;
var centerY3 = 180;
var bodyLength3 = 118;
var bodyHeight3 = 74;
var bodyColor3 = color(162, 0, 255);

// Green Fish Part 2 \\
noStroke();
fill(14, 235, 95);

// Green Fish Part 3 \\
ellipse(centerX3, centerY3, bodyLength3, bodyHeight3);

// Green Fish Part 4 \\
var tailWidth = bodyLength3/4;
var tailHeight = bodyHeight3/2;
triangle(centerX3-bodyLength3/2, centerY3,
         centerX3-bodyLength3/2-tailWidth, centerY3-tailHeight,
         centerX3-bodyLength3/2-tailWidth, centerY3+tailHeight);
// Green Fish Part 5 \\
fill(33, 33, 33);
ellipse(centerX3+bodyLength3/4, centerY3, bodyHeight3/5, bodyHeight3/5);

// Pointer \\
ellipse(mouseX, mouseY, 20, 20);

