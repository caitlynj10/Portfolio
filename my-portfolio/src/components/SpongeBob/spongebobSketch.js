export default function sketch(onButtonPress, onLoaded){
    return function(p){
    let pressStart;
    let arial;
    let selectedOption = 0;
    let gitIM;
    let linkedIM;
    let emailIM;
    let qmIM;
    let contactOpen = false;
    let controlsOpen = false;

    let x;
    let y;
    let fillRed = 0;
    let fillGreen = 0;
    let fillBlue = 0;
    let penRed = 0;
    let penGreen = 0;
    let penBlue = 0;
    let size = 50;
    let wid = 50;
    let hei = 50;
    let lineWidth = 1;
    let dx = 0;
    let dy = 0;
    let velocity = 0;
    let direction = 0;
    let course = 0;
    let gameWidth = 1200;
    let score = 0;
    let level = 1;
    

    p.setup = async () =>{
        p.createCanvas(window.innerWidth, window.innerHeight);
        try{
            pressStart  = await p.loadFont('/fonts/PressStart2P.ttf');
            arial = await p.loadFont('/fonts/ARIAL.TTF');
            gitIM = await p.loadImage("/icons/Github.png");
            linkedIM = await p.loadImage("/icons/Linkedin.png");
            emailIM = await p.loadImage("/icons/Email.png");
            qmIM = await p.loadImage("/icons/QM.png");
        }catch(error){
            console.error("Error loading assets in sketch:", error);
        }finally{
            if(onLoaded){
                onLoaded();
            }
        }
        setupSpongeBob();
    
    };

    p.draw = () => {

        let scaleX = p.width / 1500;
        let scaleY = p.height / 800;

        let scaleFactor = Math.min(scaleX, scaleY);

        p.push();

        p.translate((p.width - 1500 * scaleFactor) / 2,(p.height - 800 * scaleFactor) / 2);

        p.scale(scaleFactor);

        drawBackground();
        drawControls();
        drawScreen();
        p.push();
        p.drawingContext.beginPath();
        p.drawingContext.rect(150,50,1200,700);
        p.drawingContext.clip();
        drawSpongeBob();
        p.pop();
        
    
        if(contactOpen){
            drawContactInfo();
        }
        if(controlsOpen){
            drawControlsMenu();
        }
    

        p.pop();
    };

    p.windowResized = () =>{
        p.resizeCanvas(window.innerWidth, window.innerHeight);

    };

    function drawBackground(){
        //Outline
        p.background(74, 8, 39);
        
        //Background
        p.stroke(0);
        p.strokeWeight(2);
        p.fill(130, 17, 66);
        p.rect(10,10,1480,780);

    }

    function drawScreen(){
        //Inner Screen
        p.noFill();
        p.stroke(0);
        p.strokeWeight(8);
        p.rect(150,50,1200,700);
    }

    function drawControls(){    
        //Controls
        p.stroke(0,0,0);

        p.fill(0,0,0);
        p.rect(60,525,25,75);
        p.rect(35,550,75,25);

        p.noFill();
        p.strokeWeight(2);
        p.circle(72.5,562.5, 100);

        p.fill(0,0,0);
        p.noStroke();
        p.circle(1425,275,30);
        p.circle(1425,325,30);
        p.circle(1450,300,30);
        p.circle(1400,300,30);

        p.noFill();
        p.stroke(0,0,0);
        p.circle(1425,300,100);

        p.stroke(176, 176, 176);
        p.strokeWeight(3);
        p.line(72.5,535, 72.5, 545);
        p.line(72.5, 580, 72.5, 590);
        p.line(45, 562.5, 55, 562.5);
        p.line(90, 562.5, 100, 562.5);
        p.stroke(0);

        p.textAlign(p.CENTER,p.CENTER);
        p.fill(176, 176, 176);
        p.textFont(arial);
        p.textSize(20);
        p.text("X", 1425, 275);
        p.text("A", 1450,300);
        p.text("Y", 1400, 300);
        p.text("B", 1425, 325);
        
        p.noFill();
        p.circle(1425,550,90);
        p.fill(23, 23, 23);
        p.circle(1425,550,70);
        p.fill(0,0,0);
        p.circle(1425,550,50);

        p.noFill();
        p.circle(77.5,200,90);
        p.fill(23, 23, 23);
        p.circle(77.5,200,70);
        p.fill(0,0,0);
        p.circle(77.5,200,50);


        p.noStroke();
        p.fill(255,0,0);
        p.circle(50,750,20);


        p.noFill();
        p.stroke(0,0,0);
        p.ellipse(735,770,20,20);
        p.ellipse(735,770,10,10);
        p.ellipse(765,770,20,20);
        p.fill(0);
        p.ellipse(765,770,10,10);

        p.fill(250, 125, 182);
        p.ellipse(1300,760,10,10);
        p.ellipse(1300,780,10,10);

        p.ellipse(1300,760,8,8);
        p.ellipse(1300,780,8,8);
        p.textAlign(p.LEFT,p.CENTER);
        p.textSize(12);
        p.textFont(pressStart);
        p.fill(0);
        p.strokeWeight(0);
        p.text("Contact", 1310, 760);
        p.text("Home", 1310, 780);
        
        p.stroke(0,0,0);
        p.image(qmIM,1450,20, 30,30);

        p.strokeWeight(0);
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont(pressStart);
        p.fill(0,0,0);
        p.textSize(10);
        p.text("Power",90,750);
    }

    function drawContactInfo(){
        let scaleX = p.width / 1500;
        let scaleY = p.height / 800;
        let scaleFactor = Math.min(scaleX, scaleY);

        let offsetX = (p.width - 1500 * scaleFactor) / 2;
        let offsetY = (p.height - 800 * scaleFactor) / 2;

        let mx = (p.mouseX - offsetX) / scaleFactor;
        let my = (p.mouseY - offsetY) / scaleFactor;

        p.stroke(0);
        p.strokeWeight(4);
        p.fill(255,255,255);
        p.rect(1125,580,350,150, 30);
        p.noStroke();
        p.triangle(1270,720,1300,750,1330,720);
        p.stroke(0);
        p.line(1280,730,1300,750);
        p.line(1300,750,1320,730);


        p.image(gitIM, 1145, 590, 40,40);
        p.image(linkedIM, 1145, 635, 40,40);
        p.image(emailIM, 1145, 680, 40,40);

        p.strokeWeight(0);
        p.textAlign(p.LEFT,p.CENTER);
        p.textFont(pressStart);
        p.textSize(10);
        p.fill(0,0,0);
        p.text("@caitlynj10", 1195, 610);
        if(mx>1145 && mx<1300 && my>590 && my<630){
            p.fill(219, 0, 148);
            p.text("@caitlynj10", 1195, 610);
        }
        p.fill(0,0,0);

        p.text("/caitlyn-jones1022", 1195, 655);
        if(mx>1145 && mx<1375 && my>635 && my<675){
            p.fill(219, 0, 148);
            p.text("/caitlyn-jones1022", 1195, 655);
        }
        p.fill(0,0,0);

        p.text("caitlyn.jones1022@gmail.com", 1195, 700);
        if(mx>1145 && mx<1470 && my>680 && my<720){
            p.fill(219, 0, 148);
            p.text("caitlyn.jones1022@gmail.com", 1195, 700);
        }
        p.fill(0,0,0);

    }

    
    function drawControlsMenu(){
        
        p.fill(0, 0, 0, 180);
        p.noStroke();
        p.rect(0, 0, 1500, 800);
        

        // Pop-up Card Container
        p.fill(255, 255, 255);
        p.stroke(74, 13, 52);
        p.strokeWeight(5);
        p.rect(450, 200, 600, 400, 30);

        // Title
        p.noStroke();
        p.fill(130, 17, 66);
        p.textAlign(p.LEFT, p.CENTER);
        p.textFont(pressStart);
        p.textSize(26);
        p.text("HOW TO NAVIGATE", 550, 240);

        // Divider Line
        p.stroke(130, 17, 66);
        p.strokeWeight(3);
        p.line(452, 260, 1048, 260);

        p.circle(575,320,40);
        p.circle(575,380,40);
        p.circle(575,440,40);
        p.circle(575,500,40);
        
        p.textAlign(p.CENTER,p.CENTER);
        p.fill(0);
        p.textFont(arial);
        p.textSize(20);
        p.text("X", 575, 320);
        p.text("A", 575,380);
        p.text("Y", 575, 440);
        p.text("B", 575, 500);

        p.textAlign(p.LEFT,p.CENTER);
        p.fill(0);
        p.noStroke();
        p.textFont(pressStart);
        p.text("About", 610, 320);
        p.text("Home", 610, 380);
        p.text("Krabby Patty Catcher", 610, 440);
        p.text("Sudoku", 610, 500);


        

    }

    
    function getScaledMouseX() {
        let scaleX = p.width / 1500;
        let scaleY = p.height / 800;
        let scaleFactor = Math.min(scaleX, scaleY);
        let offsetX = (p.width - 1500 * scaleFactor) / 2;
        return (p.mouseX - offsetX) / scaleFactor;
    }

    function getScaledMouseY() {
        let scaleX = p.width / 1500;
        let scaleY = p.height / 800;
        let scaleFactor = Math.min(scaleX, scaleY);
        let offsetY = (p.height - 800 * scaleFactor) / 2;
        return (p.mouseY - offsetY) / scaleFactor;
    }
    p.keyPressed = () =>{
        if (p.keyCode === 88){ //X
            onButtonPress("ABOUT");
        }

        if (p.keyCode === 65){ //A
            onButtonPress("HOME");
        }

        if (p.keyCode === 89){ //Y
            onButtonPress("SPONGEBOB_GAME");
        }

        if (p.keyCode === 66){ //B
            onButtonPress("SUDOKU");
        }

    };
    
    p.mousePressed = () => {
        let mx = getScaledMouseX();
        let my = getScaledMouseY();

        if(mx > 1295 && mx < 1305 && my > 755 && my < 765){
            contactOpen = !contactOpen;
        }

        if(mx > 1295 && mx < 1305 && my > 775 && my < 785){
            onButtonPress("HOME");
        }

        if(mx>1410 && mx<1440 && my>260 && my<290){ //X
            onButtonPress("ABOUT");
        }

        if(mx>1435 && mx<1465 && my>285 && my<315){ //A
            onButtonPress("HOME");
        }

        if(mx>1385 && mx<1415 && my>285 && my<315){ //Y
            onButtonPress("SPONGEBOB_GAME");
        }

        if(mx>1410 && mx<1440 && my>310 && my<340){ //B
            onButtonPress("SUDOKU");
        }

        if(mx>1450 && mx<1480 && my>20 && my<50){
            controlsOpen = !controlsOpen;

        }

        mousePressedSpongeBob();

        if(contactOpen){
            if(mx>1145 && mx<1300 && my>590 && my<630){
                window.open("https://github.com/caitlynj10", "_blank", "noopener,noreferrer");            
            }

            if(mx>1145 && mx<1375 && my>635 && my<675){
                window.open("https://www.linkedin.com/in/caitlyn-jones1022/", "_blank", "noopener,noreferrer");
            }

            if(mx>1145 && mx<1470 && my>680 && my<720){
                window.open("https://mail.google.com/#compose", "_blank", "noopener,noreferrer");
            }
        }
        if(mx>40 && mx<60 && my > 740 && my< 760){
            onButtonPress("POWER_OFF");
        }

    };

    //Game Actor
    class Actor {
        
        
        constructor(x,y) {
            this.x = x;
            this.y = y;
            this.fillRed = fillRed;
            this.fillGreen = fillGreen;
            this.fillBlue = fillBlue;
            this.penRed = penRed;
            this.penGreen = penGreen;
            this.penBlue = penBlue;
            this.size = size;
            this.wid = wid;
            this.hei = hei;
            this.lineWidth = lineWidth;
            this.dx = 0;
            this.dy = 0;
            this.velocity = 0;
            this.direction = 0;
            this.course = 0;
        }
        
        setColor(r,g,b) {
            this.fillRed = r;
            this.fillGreen = g;
            this.fillBlue = b;
        }
        
        setPenColor(r,g,b) {
            this.penRed = r;
            this.penGreen = g;
            this.penBlue = b;
        }
        
        setPenWidth(w) {
            this.lineWidth = w;
        }
        
        move() {
            this.computeVector();
            this.x += this.dx;
            this.y += this.dy;
        }
        
        forward() {
            this.dx = this.velocity*cos(p.radians(this.direction));
            this.dy = this.velocity*sin(p.radians(this.direction));
            this.x += this.dx;
            this.y += this.dy;
        }
        
        goTo(xPos, yPos) {
            this.x = xPos;
            this.y = yPos;
        }
        
        bounceEdge() {
            if (this.x < 0 || this.x > gameWidth) {
            this.course = this.course + (90-this.course)*2;
            }
            if (this.y < 0 || this.y > p.height) {
            this.course = this.course + (0-this.course)*2;
            }
        }
        
        distanceTo(a) {
            let xDistance = this.x-a.x;
            let yDistance = this.y-a.y;
            let sum = p.pow(xDistance, 2) + p.pow(yDistance, 2);
            let distance = p.pow(sum, 0.5);
            return distance;
        }
        
        isTouching(a) {
            let distance = this.distanceTo(a);
            if (distance < p.abs(size + a.size)) {
            return true;
            }
            else {
            return false;
            }
        }
        
        bounceActor(a) {
            if (this.isTouching(a)) {
            this.course = this.course + (a.course - this.course)*2;
            }

        }
        
        setDX(xVel) {
            this.dx = xVel;
        }
        
        setDY(yVel) {
            this.dy = yVel;
        }
        
        computeVector() {
            this.dx = this.velocity * p.cos(p.radians(this.course));
            this.dy = this.velocity * p.sin(p.radians(this.course));
        }
        
        turn(t) {
            this.direction += t;
        }
        
        left(t) {
            turn(t*-1);
        }
        
        right(t) {
            turn(t);
        }
        
        drawRect() {
            p.fill(this.fillRed, this.fillGreen, this.fillBlue);
            p.stroke(this.penRed, this.penGreen, this.penBlue);
            p.strokeWeight(this.lineWidth);
            p.rect(this.x, this.y, this.wid, this.hei);
        }
        
        drawEllipse() {
            p.fill(this.fillRed, this.fillGreen, this.fillBlue);
            p.stroke(this.penRed, this.penGreen, this.penBlue);
            p.strokeWeight(this.lineWidth);
            p.ellipse(this.x, this.y, this.wid, this.hei);
        }
        
        drawSquare() {
            this.drawPolygon(4);
        }
        
        drawPolygon(sides) {
            // Calculate the vertices
            let points = new float[sides][2];
            let a = 360/sides;
            for (let p = 0; p < sides; p++) {
            let angle = this.direction + (p*a);
                points[p][0] = this.x + this.size*p.cos(p.radians(angle));
                points[p][1] = this.y + this.size*p.sin(p.radians(angle));
            }
            
            // Draw Shape
            p.fill(this.fillRed, this.fillGreen, this.fillBlue);
            p.stroke(this.penRed, this.penGreen, this.penBlue);
            p.strokeWeight(this.lineWidth);
            p.beginShape();
            for (let v = 0; v < sides; v++) {
                p.vertex(points[v][0], points[v][1]);
            }
            p.endShape(CLOSE);
        } // end drawPolygon
        
        
        drawLine() {
            let x2 = this.x + this.size*cos(p.radians(this.direction));
            let y2 = this.y + this.size*sin(p.radians(this.direction));
            p.stroke(this.penRed, this.penGreen,this.penBlue);
            p.strokeWeight(this.lineWidth);
            p.line(this.x, this.y, x2, y2);
        } // end drawLine

        passRight() {
            if (this.x > gameWidth) {
            this.x = 0;
            } // end if
        
        } // end passRight

        passLeft() {
            if (this.x < 0) {
            this.x = gameWidth ;
            } // end if
        } // end passLeft

         // end passBottom
        
    }

    //Keys
    class ArrowMover extends Actor {

        constructor(x,y) {
            super(x, y);
        }

        keyListener() {
            if (keyPressed) {
                if (key == CODED) {
                    if (keyCode == 39) {
                        this.course = 0;
                        this.velocity = 5;
                        this.move();
                    }
                    if (keyCode == 37) {
                        this.course = 180;
                        this.velocity = 5;
                        this.move();
                    }
                    if (keyCode == UP) {
                        this.course = 270;
                        this.velocity = 5;
                        this.move();
                    }
                    if (keyCode == DOWN) {
                        this.course = 90;
                        this.velocity = 5;
                        this.move();
                    }
                }
            }
        }

        act() {
            drawRect();
            keyListener();
        }
    }

    //Krabby Patty
    class KrabbyPatties extends Actor {
        constructor() {
            super(0,0);
            this.x = p.random(0, gameWidth-50);        // start at p.random x
            this.y = -50;                     // start above the screen
            //size = (int)p.random(10, 10);    // p.random size
            this.velocity = pattieSpeed;      // use current game speed
            this.course = 90;
        }
        distanceTo(a) {
            let xDistance = this.x-a.x-153;
            let yDistance = this.y-a.y-75;
            let sum = p.pow(xDistance, 2) + p.pow(yDistance, 2);
            let distance = p.pow(sum, 0.5);
            return distance;
        }
        
        isTouching(a) {
            let distance = this.distanceTo(a);
            if (distance < p.abs(size + a.size)) {
                return true;
            }
            else {
                return false;
            }
        }

        

        drawKrabbyPatties () {
            p.fill(222, 155, 74); // Light Brown 
            p.rect(this.x, this.y, 50, 10); // top bun
            p.fill(11, 126, 10); // Green
            p.rect(this.x, this.y+10, 50, 5); // lettuce
            p.fill(224, 18, 22); // Red
            p.rect(this.x, this.y+15, 50, 5); // tomato
            p.fill(255, 200, 80); // Orange
            p.rect(this.x, this.y+20, 50, 5); // cheese
            p.fill(100, 70, 4); // Dark Brown
            p.rect(this.x, this.y+25, 50, 7); // meat
            p.fill(222, 155, 74); // Light Brown
            p.rect(this.x, this.y+32, 50, 10); // bottom bun
            p.arc(this.x+25, this.y, 50, 30,p.PI, p.TWO_PI);
        }   
        
        levelUp(){
            mySpongeBob.score = mySpongeBob.score + 1; // increase score
            if(mySpongeBob.score > 0 && mySpongeBob.score % 15 == 0){
                mySpongeBob.level = mySpongeBob.level + 1; 
                pattieSpeed += 1; // increase global speed
                
                // Update all current patties to the new speed
                for (let i = 0; i < rain.length; i++) {
                    rain[i].velocity = pattieSpeed;
                }
                // Add a new patty to the game
                rain.push(new KrabbyPatties());
            }
        }
        act() {
            this.drawKrabbyPatties();
            if (this.isTouching(mySpongeBob)) {
                this.y = -20;
                this.x = p.random(0, gameWidth-50);
                this.size = p.random(6, 6);
                this.levelUp();
            } // end if
            this.move();
            if (this.y > p.height) {
                this.y = -20;
                this.x = p.random(0, gameWidth-50);
                this.size = p.random(6, 6);
            }
        }
    }   

    //SpongeBob
    class SpongeBob extends Actor {
        constructor(x,y){
            super(x,y);
            this.score = 0;
            this.level = 1;
            this.course = 0;
        }
       

        drawSpongebobBody() {
            p.stroke(79, 175, 53);
            p.fill(238, 242, 34); // Yellow
            p.quad(this.x, this.y, this.x+120, this.y, this.x+105, this.y+100, this.x+15, this.y+100); // head
            p.stroke(0, 0, 0);
            p.fill(250, 250, 250); // White
            p.ellipse(this.x+42.5, this.y+37.5, 40, 40); 
            p.ellipse(this.x+82, this.y+37.5, 40, 40); // outer layer eye
            p.fill(29, 240, 234); // Blue
            p.ellipse(this.x+46, this.y+37.5, 20, 20);
            p.ellipse(this.x+80, this.y+37.5, 20, 20); // middle layer eye
            p.fill(0, 0, 0); // Black
            p.ellipse(this.x+46, this.y+37.5, 10, 10);
            p.ellipse(this.x+80, this.y+37.5, 10, 10); // inner layer eye
            p.strokeWeight(2);
            p.line(this.x+32, this.y+7, this.x+36, this.y+17);
            p.line(this.x+42.5,this.y+6, this.x+42.5, this.y+17);
            p.line(this.x+53, this.y+7, this.x+49, this.y+17);
            p.line(this.x+71.5, this.y+7, this.x+75.5, this.y+17);
            p.line(this.x+82, this.y+6, this.x+82, this.y+17);
            p.line(this.x+92.5, this.y+7, this.x+88.5, this.y+17); // eyelashes
            p.fill(250, 250, 250); // White
            p.rect(this.x+18, this.y+100, 85, 12.5);
            p.triangle(this.x+8, this.y+60, this.x-5, this.y+85, this.x+13, this.y+90);
            p.triangle(this.x+112.5, this.y+60, this.x+125, this.y+85, this.x+107, this.y+90); 
            p.triangle(this.x+30, this.y+100, this.x+55, this.y+100, this.x+50, this.y+110.5); 
            p.triangle(this.x+65, this.y+100, this.x+90, this.y+100, this.x+73, this.y+110.5); // shirt
            p.fill(185, 102, 51); // Brown
            p.rect(this.x+18, this.y+112.5, 85, 15);
            p.rect(this.x+30, this.y+127, 21.25, 10);
            p.rect(this.x+70, this.y+127, 21.25, 10); // shorts
            p.strokeWeight(5);
            p.stroke(238, 242, 34); // Yellow
            p.line(this.x+6, this.y+90, this.x-2, this.y+120); // arm
            p.strokeWeight(20);
            p.point(this.x-2, this.y+120); // hand
            p.strokeWeight(2);
            p.stroke(250, 0, 0);
            p.fill(250, 250, 250); // White
            p.ellipse(this.x+62.5, this.y-25, 20, 50);
            p.noStroke();
            p.fill(8, 110, 118); // Blue
            p.ellipse(this.x+75, this.y-12.5, 50, 25);
            p.fill(250, 0, 0); // Red
            p.quad(this.x+55, this.y+100, this.x+67, this.y+100, this.x+64, this.y+108, this.x+58, this.y+108); 
            p.rect(this.x+58, this.y+108, 6, 6);
            p.triangle(this.x+58, this.y+114, this.x+64, this.y+114, this.x+61, this.y+120); // tie
            p.strokeWeight(5);
            p.stroke(0, 0, 0); // Black
            p.line(this.x, this.y+120, this.x-22, this.y+100);
            p.fill(126, 126, 126);
            p.quad(this.x-62, this.y+80, this.x-42, this.y+60, this.x-12, this.y+90, this.x-32, this.y+110); // spatula 
            p.stroke(238, 242, 34); // Yellow
            p.line(this.x+114, this.y+90, this.x+118, this.y+110);
            p.line(this.x+118, this.y+110, this.x+143, this.y+85); // arm
            p.strokeWeight(20);
            p.point(this.x+143, this.y+85); // hand
            p.strokeWeight(3);
            p.stroke(0, 0, 0);
            p.fill(250, 250, 250); // White
            p.ellipse(this.x+153, this.y+75, 60, 30); 
            p.ellipse(this.x+153, this.y+75, 30, 15); // plate
            p.strokeWeight(0);
            p.fill(238, 242, 34); // Yellow
            p.rect(this.x+37, this.y+138.5, 6.5, 15);
            p.rect(this.x+77, this.y+138.5, 6.5, 15); // legs
            p.fill(250, 250, 250); // White
            p.rect(this.x+37, this.y+152, 6.5, 22); 
            p.rect(this.x+77, this.y+152, 6.5, 22); 
            p.stroke(110, 170, 252); // Blue
            p.strokeWeight(3);
            p.line(this.x+38, this.y+156, this.x+42, this.y+156);
            p.line(this.x+78, this.y+156, this.x+82, this.y+156);
            p.stroke(237, 77, 77); // Red
            p.line(this.x+38, this.y+161, this.x+42, this.y+161);
            p.line(this.x+78, this.y+161, this.x+82, this.y+161); // socks
            p.stroke(0, 0, 0); // Black
            p.fill(0, 0, 0); // Black
            p.ellipse(this.x+37, this.y+174, 13, 7);
            p.ellipse(this.x+77, this.y+174, 13, 7); // shoes
            p.strokeWeight(2);
            p.fill(238, 242, 34);
            p.ellipse(this.x+78, this.y+55, 45, 12); // nose
            p.fill(95, 26, 26); // Red
            p.arc(this.x+62.5, this.y+68, 58, 50, 0,p.PI);
            p.line(this.x+33.5, this.y+68, this.x+91.5, this.y+68); // mouth
            p.fill(250, 250, 250); // White
            p.rect(this.x+45.5, this.y+68, 15, 12); 
            p.rect(this.x+64.5, this.y+68, 15, 12); // teeth
            p.fill(250, 103, 218); //p.PInk
            p.arc(this.x+62.5,this.y+91, 25, 15,p.PI, p.TWO_PI);
            p.fill(0, 0, 0);
            
        }

        keyListener() {
            
            if(p.keyIsDown(p.RIGHT_ARROW)){
                this.course = 0;
                this.velocity = 20;
                this.move();
            }
            if(p.keyIsDown(p.LEFT_ARROW)){
                this.course = 180;
                this.velocity = 20;
                this.move();
            }
        }

        act() {
            this.drawSpongebobBody();  
            this.keyListener();
            this.x = p.constrain(this.x, -100, gameWidth - 185);
        }
    }

    //SpongeBob Game
    let mySpongeBob;
    let rain = [];
    let pattieSpeed = 8;
    let gameStarted = false;
    function setupSpongeBob(){
        rain.push(new KrabbyPatties());
        mySpongeBob = new SpongeBob(400, 500);
        
    }

    function startGame(){
        //background(146, 242, 245);
    
        let yStart = 0;
        let yEnd = 800;
        
        let topColor = p.color(146, 242, 245);
        let bottomColor = p.color(33, 207, 91);

        for (let i = yStart; i <= yEnd; i++) {
            let inter = p.map(i, yStart, yEnd, 0, .5);
            let c = p.lerpColor(topColor, bottomColor, inter);
            p.stroke(c);
            p.line(0, i, gameWidth, i);
        }
        p.stroke(0,0,0);
        

        p.stroke(255, 0, 0);
        p.strokeWeight(5);
        drawEvenFlower(); 

        p.push();
        p.translate(75, 550);
        p.scale(0.50);
        p.stroke(255, 0, 162);
        p.strokeWeight(6);
        drawEvenFlower();
        p.pop();

        p.push();
        p.translate(600, 100);
        p.scale(0.45);
        p.stroke(255, 128, 0);
        p.strokeWeight(10);
        drawEvenFlower();
        p.pop();

        p.push();
        p.translate(400, 25);
        p.scale(0.55);
        p.stroke(251, 125, 255);
        p.strokeWeight(3);
        drawOddFlower1();
        p.pop();

    

        p.push();
        p.translate(50, 50);
        p.scale(0.25);
        p.stroke(120, 78, 173);
        p.strokeWeight(6);
        drawOddFlower1();
        p.pop();

        p.push();
        p.translate(900, 350);
        p.scale(0.50);
        p.stroke(163, 83, 41);
        p.strokeWeight(6);
        drawOddFlower1();
        p.pop();


        p.push();
        p.translate(340, 250);
        p.scale(0.30);
        p.stroke(0, 148, 50);
        p.strokeWeight(6);
        drawOddFlower2();
        p.pop();

        p.push();
        p.translate(800, -70);
        p.stroke(33, 143, 255);
        p.strokeWeight(4);
        drawOddFlower2();
        p.pop();

        p.push();
        p.translate(780,340);
        p.scale(0.30);
        p.stroke(207, 78, 132);
        p.strokeWeight(8);
        drawOddFlower2();
        p.pop();
        


        p.push();
        p.translate(550, 250);
        p.scale(0.60);
        p.stroke(86, 181, 0);
        p.strokeWeight(6);
        drawOddFlower3();
        p.pop();
        
        p.push();
        p.translate(750,515);
        p.scale(0.50);
        p.stroke(183, 0, 196);
        p.strokeWeight(4);
        drawOddFlower3();
        p.pop();

        p.push();
        p.translate(60, 375);
        p.scale(0.40);
        p.stroke(119, 0, 255);
        p.strokeWeight(4);
        drawOddFlower3();
        p.pop();

    
        p.push();
        p.translate(950, 525);
        p.scale(0.60);
        p.stroke(0, 196, 154);
        p.strokeWeight(6);
        drawOddFlower4();
        p.pop();

        
        p.push();
        p.translate(200, 400);
        p.scale(0.50);
        p.stroke(255, 251, 0);
        p.strokeWeight(6);
        drawOddFlower4();
        p.pop();
        

        p.push();
        p.translate(350, 350);
        p.stroke(255, 107, 199);
        p.strokeWeight(6);
        drawOddFlower4();
        p.pop();

        


        p.fill(238, 242, 34);
        p.stroke(0);
        p.rect(gameWidth/2-100, 350, 200, 100, 28);
        p.fill(0);
        p.strokeWeight(0);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(16);
        p.textFont(pressStart);
        p.text("Start Game", gameWidth/2, 400);

        p.textAlign(p.CENTER,p.CENTER);
        p.textFont(pressStart);
        p.textSize(32);
        p.text("Krabby Patty Catcher", gameWidth/2, 50);

    }

    function mousePressedSpongeBob(){

        let mx = (getScaledMouseX()-150);
        let my = (getScaledMouseY()-50)/.875;

        if(!gameStarted){
            if(mx > gameWidth/2-100 && mx < gameWidth/2+100 && my > 350 && my < 450){
                gameStarted = true;
            }
        }
        if(gameStarted){
            if(mx > 0 && mx < 80 && my > 0 && my < 40){
                gameStarted = false;
                mySpongeBob.score = 0;
                mySpongeBob.level = 1;
                pattieSpeed = 8;
                rain.length = 0;
                rain.push(new KrabbyPatties());
            }
        }
    }

    function drawSpongeBob(){
    
        p.push();
        p.translate(150,50);
        p.scale(1,.875);

        let mx = (getScaledMouseX() - 150);
        let my = (getScaledMouseY()-50)/.875;
        
        if (!gameStarted) {
            startGame();
        }
        else{
            let yStart = 0;
            let yEnd = 800;
            let topColor = p.color(146, 242, 245);
            let bottomColor = p.color(33, 207, 91);

            for (let i = yStart; i <= yEnd; i++) {
                let inter = p.map(i, yStart, yEnd, 0, .5);
                let c = p.lerpColor(topColor, bottomColor, inter);
                p.stroke(c);
                p.line(0, i, gameWidth, i);
            }
        
            p.fill(255, 229, 161);
            p.stroke(255, 229, 161);
            p.rect(0,650,1200,150);
            drawSand();
            p.noStroke();
            p.arc(50, 675, 100, 100,p.PI, p.TWO_PI);
            p.arc(300, 665, 150, 100,p.PI, p.TWO_PI);
            p.arc(550, 675, 100, 75,p.PI, p.TWO_PI);
            p.arc(750, 650, 100, 100,p.PI, p.TWO_PI);
            p.arc(1100, 665, 150, 100,p.PI, p.TWO_PI);
            p.arc(900, 675, 100, 75,p.PI, p.TWO_PI);
            
            drawSeaweed();  
            drawFlowersBG();
            
            //Bubbles 
            p.strokeWeight(2);
            drawBubbles();

            p.stroke(0,0,0);
    
            for (let i = 0; i < rain.length; i++) {
                rain[i].act();
            }
            
            
            mySpongeBob.act();
            p.textAlign(p.CENTER, p.CENTER); // Align text to center
            p.textSize(10);
            p.fill(0);
            p.strokeWeight(0);
            p.text("Back", 40, 20);
            if(mx > 0 && mx < 80 && my > 0 && my < 40){
                p.fill(255, 0, 0);
                p.text("Back", 40, 20);
            }
            p.textSize(16); // Set Text Size  
            p.fill(0, 0, 0); // Text color black
            p.strokeWeight(1); 
            p.text("Score: ", gameWidth-200, 20); // Print "Score" on canvas
            p.text(mySpongeBob.score, gameWidth-120, 20); // Print player's score
            p.textSize(40); // Set Text Size
            p.text("Level ", gameWidth/2-20, 25);
            p.text(mySpongeBob.level, gameWidth/2 + 100, 25);
        }
            
        p.pop();
        
    }


    function drawSeaweed(){
        p.stroke(25, 166, 25);
        p.randomSeed(99); // Locks the p.random pattern so the seaweed never moves
    
        
        // Generates 150 unique, static strands across 0 to 1200 width
        for (let i = 0; i < 300; i++) {
            let x1 = p.random(10, 1200);
            let y1 = p.random(675, 700);
            let x2 = x1 + p.random(-10, 10); // Slight angle tilt
            let y2 = p.random(600, 645);
            
            p.line(x1, y1, x2, y2);
        }

        p.randomSeed(Date.now());
    }

    function drawBubbles(){
        //Red Bubble
        p.stroke(255, 38, 38);
        p.noFill();
        p.ellipse(50, 400, 50, 50);
        p.arc(52, 395, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(700, 100, 50,50);
        p.arc(702, 95, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(400, 200, 30, 30);
        p.arc(402, 197, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(650, 500, 30, 30);
        p.arc(652, 497, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(800, 400, 50, 50);
        p.arc(802, 395, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(1025, 350, 50,50);
        p.arc(1027, 345, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        
        
        //Blue Bubble
        p.stroke(38, 132, 255);
        p.noFill();
        p.ellipse(100, 100, 50, 50);
        p.arc(102, 95, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(600, 400, 50,50);
        p.arc(602, 395, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(400, 400, 30, 30);
        p.arc(402, 397, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(750, 200, 30, 30);
        p.arc(752, 197, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(900, 450, 50, 50);
        p.arc(897, 445, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(1050, 200, 50,50);
        p.arc(1047, 195, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        
        //Green Bubble
        p.stroke(0, 217, 12);
        p.noFill();
        p.ellipse(200, 300, 50, 50);
        p.arc(202, 295, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(500, 100, 50,50);
        p.arc(502, 95, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(50, 250, 30, 30);
        p.arc(52, 247, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(80, 500, 30,30);
        p.arc(82, 497, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(950, 575, 30, 30);
        p.arc(952, 572, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(1000, 100, 30, 30);
        p.arc(1002, 97, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        //Orange Bubble
        p.stroke(255, 161, 26);
        p.noFill();
        p.ellipse(300, 200, 70, 70);
        p.arc(303, 193, 35, 35,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(700, 550, 70,70);
        p.arc(703, 543, 35, 35,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(150, 475, 30, 30);
        p.arc(152, 472, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(400, 500, 30,30);
        p.arc(402, 497, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(1150, 375, 30, 30);
        p.arc(1147, 372, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(925, 250, 30, 30);
        p.arc(927, 247, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        //Yellow Bubble
        p.stroke(253, 255, 59);
        p.noFill();
        p.ellipse(20, 355, 30, 30);
        p.arc(22, 352, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(200, 550, 50, 50);
        p.arc(202, 545, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(350, 80, 50, 50);
        p.arc(352, 75, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(625, 300, 30, 30);
        p.arc(627, 297, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(865, 115, 50, 50);
        p.arc(867, 110, 25, 25,p.PI+p.HALF_PI, p.TWO_PI);
        p.ellipse(1075, 315, 30, 30);
        p.arc(1077, 312, 15, 15,p.PI+p.HALF_PI, p.TWO_PI);
        

    }

    function drawSand(){
        p.randomSeed(42);
        p.stroke(0,0,0);
        p.strokeWeight(2);
        for (let i = 0; i < 500; i++) {
            p.point(p.random(0, 1200), p.random(650, 800));
        }

        p.randomSeed(Date.now());
    

    }

    function drawEvenFlower(){
        //Flowers
        p.noFill();
        

        //Petal
        p.beginShape();
        p.splineVertex(180,  200);
        p.splineVertex(180,  200);
        p.splineVertex(160,  100);
        p.splineVertex(240,  100);
        p.splineVertex(220, 200);
        p.splineVertex(220, 200);
        p.endShape();

        //Curve
        p.beginShape();
        p.splineVertex(180, 200);
        p.splineVertex(180, 200);
        p.splineVertex(190, 230);
        p.splineVertex(185, 240);
        p.splineVertex(167.32986, 227.18182);
        p.splineVertex(167.32986, 227.18182);
        p.endShape();

        //Petal
        p.push();
        p.translate(180, 200);
        p.rotate(p.radians(-65));
        p.beginShape();
        p.splineVertex(-70,   0);  
        p.splineVertex(-70,   0);
        p.splineVertex(-90,  -100);  
        p.splineVertex( -10,  -100);  
        p.splineVertex( -30,   0);  
        p.splineVertex( -30,   0);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(150.41328, 263.44284);
        p.splineVertex(150.41328, 263.44284);
        p.splineVertex(170,  266);
        p.splineVertex(180,  275);
        p.splineVertex(162.68, 287.23);
        p.splineVertex(162.68, 287.23);
        p.endShape();
        
        //Petal
        p.push();
        p.translate(220, 200);
        p.rotate(p.radians(-130));
        p.beginShape();
        p.splineVertex(-70,   -100);  
        p.splineVertex(-70,   -100);
        p.splineVertex(-90,  -200); 
        p.splineVertex( -10,  -200);  
        p.splineVertex( -30,   -100);  
        p.splineVertex( -30,   -100);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(188.39, 317.90);
        p.splineVertex(188.39, 317.90);
        p.splineVertex(195,  310.90);
        p.splineVertex(205,  310.90);
        p.splineVertex(211.61, 317.90);
        p.splineVertex(211.61, 317.90);
        p.endShape();

        //Petal
        p.push();
        p.translate(180, 200);
        p.scale(-1,1);
        p.rotate(p.radians(-130));
        p.beginShape();
        p.splineVertex(-70,   -100);  
        p.splineVertex(-70,   -100);
        p.splineVertex(-90,  -200);  
        p.splineVertex( -10,  -200);  
        p.splineVertex( -30,   -100);  
        p.splineVertex( -30,   -100);
        p.endShape();
        p.pop();
    
        
        //Curve
        p.beginShape();
        p.splineVertex(237.32, 287.23);
        p.splineVertex(237.32, 287.23);
        p.splineVertex(225,  275);
        p.splineVertex(230,  266);
        p.splineVertex(249.58, 263.44);
        p.splineVertex(249.58, 263.44);
        p.endShape();


        //Petal
        p.push();
        p.translate(220, 200);
        p.scale(-1,1);
        p.rotate(p.radians(-65));
        p.beginShape();
        p.splineVertex(-70,   0);  
        p.splineVertex(-70,   0);
        p.splineVertex(-90,  -100);  
        p.splineVertex( -10,  -100);  
        p.splineVertex( -30,   0);  
        p.splineVertex( -30,   0);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(220, 200);
        p.splineVertex(220, 200);
        p.splineVertex(210, 230);
        p.splineVertex(215, 240);
        p.splineVertex(233.32986, 227.18182);
        p.splineVertex(233.32986, 227.18182);
        p.endShape();

        //Inner Circle
        p.ellipse(200, 265, 30, 20);
    }
    function drawOddFlower1(){
        //Flowers
        p.noFill();
        

        //Petal
        p.beginShape();
        p.splineVertex(180,  200);
        p.splineVertex(180,  200);
        p.splineVertex(110,  100);
        p.splineVertex(240,  100);
        p.splineVertex(220, 200);
        p.splineVertex(220, 200);
        p.endShape();

        //Curve
        p.beginShape();
        p.splineVertex(180, 200);
        p.splineVertex(180, 200);
        p.splineVertex(190, 230);
        p.splineVertex(185, 240);
        p.splineVertex(167.32986, 227.18182);
        p.splineVertex(167.32986, 227.18182);
        p.endShape();

        //Petal
        p.push();
        p.translate(180, 200);
        p.rotate(p.radians(-65));
        p.beginShape();
        p.splineVertex(-70,   0);  
        p.splineVertex(-70,   0);
        p.splineVertex(-110,  -100);  
        p.splineVertex( -10,  -100);  
        p.splineVertex( -30,   0);  
        p.splineVertex( -30,   0);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(150.41328, 263.44284);
        p.splineVertex(150.41328, 263.44284);
        p.splineVertex(170,  266);
        p.splineVertex(180,  275);
        p.splineVertex(162.68, 287.23);
        p.splineVertex(162.68, 287.23);
        p.endShape();
        
        //Petal
        p.push();
        p.translate(220, 200);
        p.rotate(p.radians(-130));
        p.beginShape();
        p.splineVertex(-70,   -100);  
        p.splineVertex(-70,   -100);
        p.splineVertex(-130,  -200); 
        p.splineVertex( -0,  -200);  
        p.splineVertex( -30,   -100);  
        p.splineVertex( -30,   -100);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(188.39, 317.90);
        p.splineVertex(188.39, 317.90);
        p.splineVertex(195,  310.90);
        p.splineVertex(205,  310.90);
        p.splineVertex(211.61, 317.90);
        p.splineVertex(211.61, 317.90);
        p.endShape();

        //Petal
        p.push();
        p.translate(180, 200);
        p.scale(-1,1);
        p.rotate(p.radians(-130));
        p.beginShape();
        p.splineVertex(-70,   -100);  
        p.splineVertex(-70,   -100);
        p.splineVertex(-90,  -190);  
        p.splineVertex( 10,  -200);  
        p.splineVertex( -30,   -100);  
        p.splineVertex( -30,   -100);
        p.endShape();
        p.pop();
    
        
        //Curve
        p.beginShape();
        p.splineVertex(237.32, 287.23);
        p.splineVertex(237.32, 287.23);
        p.splineVertex(225,  275);
        p.splineVertex(230,  266);
        p.splineVertex(249.58, 263.44);
        p.splineVertex(249.58, 263.44);
        p.endShape();


        //Petal
        p.push();
        p.translate(220, 200);
        p.scale(-1,1);
        p.rotate(p.radians(-65));
        p.beginShape();
        p.splineVertex(-70,   0);  
        p.splineVertex(-70,   0);
        p.splineVertex(-120,  -100);  
        p.splineVertex( -10,  -100);  
        p.splineVertex( -30,   0);  
        p.splineVertex( -30,   0);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(220, 200);
        p.splineVertex(220, 200);
        p.splineVertex(210, 230);
        p.splineVertex(215, 240);
        p.splineVertex(233.32986, 227.18182);
        p.splineVertex(233.32986, 227.18182);
        p.endShape();

        //Inner Circle
        p.ellipse(200, 265, 30, 20);
    }
    function drawOddFlower2(){
        //Flowers
        p.noFill();
        

        //Petal
        p.beginShape();
        p.splineVertex(180,  200);
        p.splineVertex(180,  200);
        p.splineVertex(160,  100);
        p.splineVertex(230,  100);
        p.splineVertex(220, 200);
        p.splineVertex(220, 200);
        p.endShape();

        //Curve
        p.beginShape();
        p.splineVertex(180, 200);
        p.splineVertex(180, 200);
        p.splineVertex(190, 230);
        p.splineVertex(185, 240);
        p.splineVertex(167.32986, 227.18182);
        p.splineVertex(167.32986, 227.18182);
        p.endShape();

        //Petal
        p.push();
        p.translate(180, 200);
        p.rotate(p.radians(-65));
        p.beginShape();
        p.splineVertex(-70,   0);  
        p.splineVertex(-70,   0);
        p.splineVertex(-90,  -100);  
        p.splineVertex( 20,  -100);  
        p.splineVertex( -30,   0);  
        p.splineVertex( -30,   0);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(150.41328, 263.44284);
        p.splineVertex(150.41328, 263.44284);
        p.splineVertex(170,  266);
        p.splineVertex(180,  275);
        p.splineVertex(162.68, 287.23);
        p.splineVertex(162.68, 287.23);
        p.endShape();
        
        //Petal
        p.push();
        p.translate(220, 200);
        p.rotate(p.radians(-130));
        p.beginShape();
        p.splineVertex(-70,   -100);  
        p.splineVertex(-70,   -100);
        p.splineVertex(-90,  -200); 
        p.splineVertex( -10,  -180);  
        p.splineVertex( -30,   -100);  
        p.splineVertex( -30,   -100);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(188.39, 317.90);
        p.splineVertex(188.39, 317.90);
        p.splineVertex(195,  310.90);
        p.splineVertex(205,  310.90);
        p.splineVertex(211.61, 317.90);
        p.splineVertex(211.61, 317.90);
        p.endShape();

        //Petal
        p.push();
        p.translate(180, 200);
        p.scale(-1,1);
        p.rotate(p.radians(-130));
        p.beginShape();
        p.splineVertex(-70,   -100);  
        p.splineVertex(-70,   -100);
        p.splineVertex(-90,  -200);  
        p.splineVertex( 0,  -200);  
        p.splineVertex( -30,   -100);  
        p.splineVertex( -30,   -100);
        p.endShape();
        p.pop();
    
        
        //Curve
        p.beginShape();
        p.splineVertex(237.32, 287.23);
        p.splineVertex(237.32, 287.23);
        p.splineVertex(225,  275);
        p.splineVertex(230,  266);
        p.splineVertex(249.58, 263.44);
        p.splineVertex(249.58, 263.44);
        p.endShape();


        //Petal
        p.push();
        p.translate(220, 200);
        p.scale(-1,1);
        p.rotate(p.radians(-65));
        p.beginShape();
        p.splineVertex(-70,   0);  
        p.splineVertex(-70,   0);
        p.splineVertex(-100,  -100);  
        p.splineVertex( -10,  -100);  
        p.splineVertex( -30,   0);  
        p.splineVertex( -30,   0);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(220, 200);
        p.splineVertex(220, 200);
        p.splineVertex(210, 230);
        p.splineVertex(215, 240);
        p.splineVertex(233.32986, 227.18182);
        p.splineVertex(233.32986, 227.18182);
        p.endShape();

        //Inner Circle
        p.ellipse(200, 265, 30, 20);
    }
   
    function drawOddFlower3(){
        //Flowers
        p.noFill();
        

        //Petal
        p.beginShape();
        p.splineVertex(180,  200);
        p.splineVertex(180,  200);
        p.splineVertex(160,  125);
        p.splineVertex(240,  100);
        p.splineVertex(220, 200);
        p.splineVertex(220, 200);
        p.endShape();

        //Curve
        p.beginShape();
        p.splineVertex(180, 200);
        p.splineVertex(180, 200);
        p.splineVertex(190, 230);
        p.splineVertex(185, 240);
        p.splineVertex(167.32986, 227.18182);
        p.splineVertex(167.32986, 227.18182);
        p.endShape();

        //Petal
        p.push();
        p.translate(180, 200);
        p.rotate(p.radians(-65));
        p.beginShape();
        p.splineVertex(-70,   0);  
        p.splineVertex(-70,   0);
        p.splineVertex(-90,  -100);  
        p.splineVertex( 10,  -100);  
        p.splineVertex( -30,   0);  
        p.splineVertex( -30,   0);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(150.41328, 263.44284);
        p.splineVertex(150.41328, 263.44284);
        p.splineVertex(170,  266);
        p.splineVertex(180,  275);
        p.splineVertex(162.68, 287.23);
        p.splineVertex(162.68, 287.23);
        p.endShape();
        
        //Petal
        p.push();
        p.translate(220, 200);
        p.rotate(p.radians(-130));
        p.beginShape();
        p.splineVertex(-70,   -100);  
        p.splineVertex(-70,   -100);
        p.splineVertex(-40,  -200); 
        p.splineVertex( 20,  -200);  
        p.splineVertex( -30,   -100);  
        p.splineVertex( -30,   -100);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(188.39, 317.90);
        p.splineVertex(188.39, 317.90);
        p.splineVertex(195,  310.90);
        p.splineVertex(205,  310.90);
        p.splineVertex(211.61, 317.90);
        p.splineVertex(211.61, 317.90);
        p.endShape();

        //Petal
        p.push();
        p.translate(180, 200);
        p.scale(-1,1);
        p.rotate(p.radians(-130));
        p.beginShape();
        p.splineVertex(-70,   -100);  
        p.splineVertex(-70,   -100);
        p.splineVertex(-120,  -200);  
        p.splineVertex( -30,  -200);  
        p.splineVertex( -30,   -100);  
        p.splineVertex( -30,   -100);
        p.endShape();
        p.pop();
    
        
        //Curve
        p.beginShape();
        p.splineVertex(237.32, 287.23);
        p.splineVertex(237.32, 287.23);
        p.splineVertex(225,  275);
        p.splineVertex(230,  266);
        p.splineVertex(249.58, 263.44);
        p.splineVertex(249.58, 263.44);
        p.endShape();


        //Petal
        p.push();
        p.translate(220, 200);
        p.scale(-1,1);
        p.rotate(p.radians(-65));
        p.beginShape();
        p.splineVertex(-70,   0);  
        p.splineVertex(-70,   0);
        p.splineVertex(-90,  -100);  
        p.splineVertex( -10,  -100);  
        p.splineVertex( -30,   0);  
        p.splineVertex( -30,   0);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(220, 200);
        p.splineVertex(220, 200);
        p.splineVertex(210, 230);
        p.splineVertex(215, 240);
        p.splineVertex(233.32986, 227.18182);
        p.splineVertex(233.32986, 227.18182);
        p.endShape();

        //Inner Circle
        p.ellipse(200, 265, 30, 20);
    }
    function drawOddFlower4(){
        //Flowers
        p.noFill();
        

        //Petal
        p.beginShape();
        p.splineVertex(180,  200);
        p.splineVertex(180,  200);
        p.splineVertex(160,  100);
        p.splineVertex(240,  125);
        p.splineVertex(220, 200);
        p.splineVertex(220, 200);
        p.endShape();

        //Curve
        p.beginShape();
        p.splineVertex(180, 200);
        p.splineVertex(180, 200);
        p.splineVertex(190, 230);
        p.splineVertex(185, 240);
        p.splineVertex(167.32986, 227.18182);
        p.splineVertex(167.32986, 227.18182);
        p.endShape();

        //Petal
        p.push();
        p.translate(180, 200);
        p.rotate(p.radians(-65));
        p.beginShape();
        p.splineVertex(-70,   0);  
        p.splineVertex(-70,   0);
        p.splineVertex(-90,  -100);  
        p.splineVertex( 30,  -120);  
        p.splineVertex( -30,   0);  
        p.splineVertex( -30,   0);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(150.41328, 263.44284);
        p.splineVertex(150.41328, 263.44284);
        p.splineVertex(170,  266);
        p.splineVertex(180,  275);
        p.splineVertex(162.68, 287.23);
        p.splineVertex(162.68, 287.23);
        p.endShape();
        
        //Petal
        p.push();
        p.translate(220, 200);
        p.rotate(p.radians(-130));
        p.beginShape();
        p.splineVertex(-70,   -100);  
        p.splineVertex(-70,   -100);
        p.splineVertex(-130,  -200); 
        p.splineVertex( -10,  -200);  
        p.splineVertex( -30,   -100);  
        p.splineVertex( -30,   -100);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(188.39, 317.90);
        p.splineVertex(188.39, 317.90);
        p.splineVertex(195,  310.90);
        p.splineVertex(205,  310.90);
        p.splineVertex(211.61, 317.90);
        p.splineVertex(211.61, 317.90);
        p.endShape();

        //Petal
        p.push();
        p.translate(180, 200);
        p.scale(-1,1);
        p.rotate(p.radians(-130));
        p.beginShape();
        p.splineVertex(-70,   -100);  
        p.splineVertex(-70,   -100);
        p.splineVertex(-90,  -200);  
        p.splineVertex( -10,  -200);  
        p.splineVertex( -30,   -100);  
        p.splineVertex( -30,   -100);
        p.endShape();
        p.pop();
    
        
        //Curve
        p.beginShape();
        p.splineVertex(237.32, 287.23);
        p.splineVertex(237.32, 287.23);
        p.splineVertex(225,  275);
        p.splineVertex(230,  266);
        p.splineVertex(249.58, 263.44);
        p.splineVertex(249.58, 263.44);
        p.endShape();


        //Petal
        p.push();
        p.translate(220, 200);
        p.scale(-1,1);
        p.rotate(p.radians(-65));
        p.beginShape();
        p.splineVertex(-70,   0);  
        p.splineVertex(-70,   0);
        p.splineVertex(-90,  -80);  
        p.splineVertex( -10,  -100);  
        p.splineVertex( -30,   0);  
        p.splineVertex( -30,   0);
        p.endShape();
        p.pop();

        //Curve
        p.beginShape();
        p.splineVertex(220, 200);
        p.splineVertex(220, 200);
        p.splineVertex(210, 230);
        p.splineVertex(215, 240);
        p.splineVertex(233.32986, 227.18182);
        p.splineVertex(233.32986, 227.18182);
        p.endShape();

        //Inner Circle
        p.ellipse(200, 265, 30, 20);
    }

    function drawFlowersBG(){
        p.push();
        p.translate(200, 250);
        p.strokeWeight(4);
        p.stroke(255, 128, 236);
        p.scale(0.40);
        drawEvenFlower();
        p.pop();

        p.push();
        p.translate(1100, 60);
        p.strokeWeight(4);
        p.stroke(197, 84, 255);
        p.scale(0.20);
        drawEvenFlower();
        p.pop();

        p.push();
        p.translate(100, 100);
        p.strokeWeight(4);
        p.stroke(255, 128, 236);
        p.scale(0.20);
        drawOddFlower1();
        p.pop();

        p.push();
        p.translate(500, 500);
        p.strokeWeight(4);
        p.stroke(197, 84, 255);
        p.scale(0.30);
        drawOddFlower1();
        p.pop();

        p.push();
        p.translate(300, 500);
        p.strokeWeight(4);
        p.stroke(255, 128, 236);
        p.scale(0.20);
        drawOddFlower2();
        p.pop();

        p.push();
        p.translate(850, 100);
        p.strokeWeight(4);
        p.stroke(197, 84, 255);
        p.scale(0.30);
        drawOddFlower2();
        p.pop();

        p.push();
        p.translate(450, 200);
        p.strokeWeight(4);
        p.stroke(197, 84, 255);
        p.scale(0.20);
        drawOddFlower3();
        p.pop();

        p.push();
        p.translate(1000, 400);
        p.stroke(255, 128, 236);
        p.scale(0.50);
        p.strokeWeight(4);
        drawOddFlower3();
        p.pop();

        p.push();
        p.translate(850, 500);
        p.stroke(197, 84, 255);
        p.scale(0.20);
        p.strokeWeight(4);
        drawOddFlower4();
        p.pop();
        

        p.push();
        p.translate(650, 200);
        p.stroke(255, 128, 236);
        p.scale(0.40);
        p.strokeWeight(4);
        drawOddFlower4();
        p.pop();

    }



    }
}