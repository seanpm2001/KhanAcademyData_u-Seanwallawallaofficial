//Spin-Off Of Challenge: Your First Button 
//Made By seanwallawallaofficial
//Created June 9th 2017
//Finished June 9th 2017
//Published June 9th 2017
//Total Lines Of Code (With Blanks)::: 27
//Total Lines Of Code (Without Blanks)::: 24
//Total Blank Lines: 3
//Language: English + Javascript
//Estimated Memory: 0.02 Megabytes
//Enjoy :)

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
