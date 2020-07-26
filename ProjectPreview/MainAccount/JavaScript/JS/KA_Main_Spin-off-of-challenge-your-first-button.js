//Spin-Off Of Challenge: Your First Button 
//Made By seanwallawallaofficial
//created june 9th 2017
//finished june 10th 2017
//total lines of code (with blanks)::: 27
//total lines of code (without blanks)::: 24
//total blank lines: 3
//language: english + javascript
//estimated memory: 0.02 Megabytes
//enjoy :)

//Startup Script Section (S.S.S)
draw = function() {
    fill(0, 255, 64); 
    if (mouseIsPressed && mouseY < 200 ) {
       
        fill(245, 40, 17);  
    }
    fill(0, 255, 68); // start color
    rect(0, 0, 400, 200);  // the button

    // The buttons text
    fill(0, 0, 0);
    textSize(30);
    text("Press me!", 145, 115);
};
