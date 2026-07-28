PFont pressStart; 

void setup(){
    size(1500, 800);
    //Outline 
    background(74, 8, 39);
    
    //Background
    fill(130, 17, 66);
    rect(10,10,1480,780);

    //Inner Screen
    fill(250, 125, 182);
    stroke(74, 13, 52);
    strokeWeight(4);
    rect(200,100,1100,600, 50);
   

    //Grid Lines
    strokeWeight(1);
    stroke(229, 170, 192);
    line(300,102,300,698);
    line(400,102,400,698);
    line(500,102,500,698);
    line(600,102,600,698);
    line(700,102,700,698);
    line(800,102,800,698);
    line(900,102,900,698);
    line(1000,102,1000,698);
    line(1100,102,1100,698);
    line(1200,102,1200,698);
   
    line(202,200,1298,200);
    line(202,300,1298,300);
    line(202,400,1298,400);
    line(202,500,1298,500);
    line(202,600,1298,600);

    
    textAlign(CENTER, CENTER);
    pressStart = createFont("Press Start 2P", 60);
    textFont(pressStart);
    fill(0,0,0);
    text("Caitlyn Jones", 750, 300);
    
    pressStart = createFont("Press Start 2P", 30);
    textFont(pressStart);
    fill(0,0,0);
    text("ENTER SITE", 750, 475);
    text("LEARN MORE", 750, 550);

    //Controls
    
    
    stroke(0,0,0);

    // circle(87.5,550,75);
    // fill(23, 23, 23);
    // circle(87.5,550,60);
    // fill(0,0,0);
    // circle(87.5,550,50);

    fill(0,0,0);
    rect(80,525,25,75);
    rect(55,550,75,25);

    noFill();
    strokeWeight(2);
    ellipse(92.5,562.5,100,100);

    fill(0,0,0);
    noStroke();
    ellipse(1405,200,30,30);
    ellipse(1405,250,30,30);
    ellipse(1430,225,30,30);
    ellipse(1380,225,30,30);

    noFill();
    stroke(0,0,0);
    ellipse(1405,225,100,100);

    
    
    noFill();
    ellipse(1405,550,120,120);
    fill(23, 23, 23);
    ellipse(1405,550,100,100);
    fill(0,0,0);
    ellipse(1405,550,80,80);

    noFill();
    ellipse(92.5,200,120,120);
    fill(23, 23, 23);
    ellipse(92.5,200,100,100);
    fill(0,0,0);
    ellipse(92.5,200,80,80);

    noStroke();
    fill(23, 23, 23);
    ellipse(50,750,20,20);

    stroke(0,0,0);
    line(1400,50,1450,50);
    line(1400,60,1450,60);
    line(1400,70,1450,70);

    
    pressStart = createFont("Press Start 2P", 10);
    textFont(pressStart);
    fill(0,0,0);
    text("Power",90,750);
   
}