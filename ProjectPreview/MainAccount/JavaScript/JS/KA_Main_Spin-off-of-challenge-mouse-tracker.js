// the failed background \\
background(156, 144, 144);

// the ball part 1 \\
fill(58, 221, 230);

// the ball part 2 \\
draw = function() {
    background(255, 255, 255);
    ellipse(mouseX, mouseY, 12, 12); 
    var label = mouseX + " , " + mouseY;
    text(label, mouseX, mouseY);
};
