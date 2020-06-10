//Animal Attack Spin-off By seanwallawallaofficial \\
//Please Give Credit                                \\
//Created June 5th 2017                              \\
//Finished June ?th 2017                              \\
//Total Lines Of Code (with blanks) = 86               \\
//Total Lines Of Code (without blanks) = 75             \\
//Total Blank Lines = 11                                 \\
//Language: English + Javascript                          \\
//New Info Here                                            \\
//New Info Here                                             \\
//New Info Here                                              \\
//New Info Here                                               \\
//New Info Here                                                \\
//New Info Here                                                 \\
//New Info Here                                                  \\
//New Info Here                                                   \\
//New Info Here                                                    \\
//New Info Here                                                     \\
//New Info Here                                                      \\
//New Info Here                                                       \\
//New Info Here                                                        \\
//New Info Here                                                         \\
//New Info Here                                                          \\
//New Info Here                                                           \\
//New Info Here                                                            \\
//New Info Here                                                             \\
//New Info Here                                                              \\
//New Info Here                                                               \\
//New Info Here                                                                \\
//New Info Here                                                                 \\
//New Info Here                                                                  \\
//New Info Here                                                                   \\
//New Info Here                                                                    \\
//New Info Here                                                                     \\
//New Info Here                                                                      \\
//New Info Here                                                                       \\
//New Info Here                                                                        \\
//New Info Here                                                                         \\
//New Info Here                                                                          \\
//New Info Here                                                                           \\
//Code Memory Size 0.01 MegaBytes                                                          \\
//Enjoy (:):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):)

// Startup Variable Section (S.V.S) \\
var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;
var eyeW = 20;
var eyeH = eyeW/1;
var eyeX = 190;
var eyeY = 140;
var x =-200;
var y =300;

// The Background \\
draw = function() {
    background(70, 169, 171);
    fill(240, 209, 36);
    
    // The Hill \\
     fill(120, 156, 124);
    rect(x, y, 600, 500, 500);
   
    // The Bear \\
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, bodyH, 47); // face?
    fill(156, 120, 120);
    
    // The Bears Face \\
    ellipse(eyeX, eyeY, eyeW,20); // left eye
    ellipse(eyeX, eyeY,-20, eyeH); // right eye
    fill(207, 192, 192);

    // The Setting Sun \\
    ellipse(x, y, 50, 50);
    fill(191, 80, 32);
    
    // The Cloudy Sky \\
    image(image, x, y, 50, 50);
    
    // The Mountains \\
    image(image, x, y, 50, 50);

};
