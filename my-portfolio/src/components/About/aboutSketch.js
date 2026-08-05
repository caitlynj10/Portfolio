export default function sketch(onButtonPress){
    return function(p){
    let pressStart;
    let selectedOption = 0;
    let gitIM;
    let linkedIM;
    let emailIM;
    let qmIM;
    let profPic;
    let contactOpen = false;
    //0 = enter site; 1 = learn more

    p.setup = async () =>{
        p.createCanvas(window.innerWidth, window.innerHeight);
        pressStart  = await p.loadFont('/fonts/PressStart2P.ttf');
        pressStart  = await p.loadFont('/fonts/PressStart2P.ttf');
        gitIM = await p.loadImage("/icons/Github.png");
        linkedIM = await p.loadImage("/icons/Linkedin.png");
        emailIM = await p.loadImage("/icons/Email.png");
        qmIM = await p.loadImage("/icons/QM.png");
        profPic = await p.loadImage("/icons/ProfPic.jpg");
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
        drawProfText();
        drawProfPicture();
        drawProfBio();
        drawMenu();
        drawArrows();
        if(contactOpen){
            drawContactInfo();
        }
        
       

        p.pop();
    };



    p.keyPressed = () => {
        console.log('key pressed', p.key);
        if(p.keyCode == 40){
            selectedOption = 1;
        }

        if(p.keyCode === 38){
            selectedOption = 0;
        }

        if (p.keyCode === 13) {

            if(selectedOption === 0){
                onButtonPress("SPONGEBOB_GAME");
            }


            if(selectedOption === 1){
                onButtonPress("SUDOKU");
            }

        }


    };

    function drawBackground(){
        //Outline
        p.background(74, 8, 39);
        
        //Background
        p.fill(130, 17, 66);
        p.rect(10,10,1480,780);

    }

    function drawScreen(){
        //Inner Screen
        p.fill(250, 125, 182);
        p.stroke(74, 13, 52);
        p.strokeWeight(4);
        p.rect(150,50,1200,700,50);
        p.fill(255, 255, 255);
        p.noStroke();
        p.rect(210,110,1080,580,50);

    }


    function drawProfText(){

        p.noStroke();

        p.textAlign(p.CENTER, p.CENTER);
        p.textFont(pressStart);
        p.fill(0,0,0);
        p.textSize(40);
        p.text("ABOUT ME", 750, 85);
        
        p.textAlign(p.LEFT, p.CENTER);
        p.textFont(pressStart);
        p.textSize(16);
        p.fill(250, 125, 182);
        p.text("NAME:", 640, 140);
        p.textAlign(p.LEFT, p.CENTER);
        p.fill(0);
        p.text("Caitlyn Jones", 750, 140);

        p.fill(250, 125, 182);
        p.text("DEGREE:", 640, 180);    
        p.fill(0);
        p.text("BS in CS and Applied Math", 775, 180);

        p.fill(250, 125, 182);
        p.text("BASED IN:", 640, 220);
        p.fill(0);
        p.text("??????", 800, 220);

        p.textAlign(p.LEFT, p.CENTER);
        p.fill(250, 125, 182);
        p.text("AGE:", 640, 260);
        p.fill(0);
        p.text("22", 725, 260);

        p.textAlign(p.LEFT, p.CENTER);
        p.fill(250, 125, 182);
        p.text("SIGN:", 640, 300);
        p.fill(0);
        p.text("Libra", 740, 300);

        p.textAlign(p.LEFT, p.CENTER);
        p.fill(250, 125, 182);
        p.text("DREAM JOB:", 640, 340);
        p.fill(0);
        p.text("Web and Game Developer", 825, 340);

        p.textAlign(p.CENTER, p.CENTER);
        p.textFont(pressStart);
        p.fill(0,0,0);
        p.textSize(10);
        p.text("Power",90,750);

    }

    function drawProfPicture(){
        p.image(profPic,230,130, 360, 540);
    }

    function drawProfBio(){
        //Bio
        p.stroke(0);
        p.strokeWeight(3);
        p.line(630,370,1270,370);
        p.strokeWeight(0);
        p.textAlign(p.LEFT, p.CENTER);
        p.textFont(pressStart);
        p.textSize(12);
        p.fill(0,0,0);
        p.text("Welcome to my portfolio!",640,400);
        p.text("I created this to showcase", 640, 425);
        p.text("my two passions: web and", 640,450);
        p.text("game design. Learn about", 640, 475);
        p.text("what makes me ME through", 640, 500);
        p.text("this experience. Play a", 640, 525);
        p.text("few games, explore past", 640, 550);
        p.text("projects, and learn about", 640, 575);
        p.text("my experiences and skills", 640, 600);
        p.text("as you enter the gamified", 640, 625);
        p.text("world of Caitlyn Jones.", 640, 650);
    }

    function drawMenu(){
        p.textAlign(p.LEFT,p.CENTER);
        p.fill(130, 17, 66); 
        p.textSize(20);
        p.text("EXPLORE SITE", 1000, 450);
        p.text("PLAY GAMES", 1000, 500);
        p.textSize(10);
        p. text("KRABBY PATTY CATCHER", 1020, 530);
        p.text("SUDOKU", 1020, 550);

    }
    function drawArrows(){
        p.fill(255, 69, 201);
        p.stroke(0);
        p.strokeWeight(1);
        if(selectedOption === 0){
            p.triangle(1005,525,1015,530,1005,535);
        }
        else{
            p.triangle(1005,545,1015,550,1005,555);

        }
       
        
        
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

        p.stroke(0,0,0);
        p.line(1400,50,1450,50);
        p.line(1400,60,1450,60);
        p.line(1400,70,1450,70);

        p.noFill();
        p.stroke(0,0,0);
        p.ellipse(735,770,20,20);
        p.ellipse(735,770,10,10);
        p.ellipse(765,770,20,20);
        p.fill(0);
        p.ellipse(765,770,10,10);

        p.image(qmIM, 1285,755,30,30);
    }

    function drawContactInfo(){
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
        p.text("/caitlyn-jones1022", 1195, 655);
        p.text("caitlyn.jones1022@gmail.com", 1195, 700);

    }
    p.mousePressed = () => {
        let scaleX = p.width / 1500;
        let scaleY = p.height / 800;
        let scaleFactor = Math.min(scaleX, scaleY);

        let offsetX = (p.width - 1500 * scaleFactor) / 2;
        let offsetY = (p.height - 800 * scaleFactor) / 2;

        let mx = (p.mouseX - offsetX) / scaleFactor;
        let my = (p.mouseY - offsetY) / scaleFactor;

        if(mx > 1285 && mx < 1315 && my > 755 && my < 785){
            contactOpen = !contactOpen;
        }

    };

    p.windowResized = () =>{
        p.resizeCanvas(window.innerWidth, window.innerHeight);

    };
}
}