export default function sketch(onButtonPress){
    return function(p){
    let pressStart;
    let selectedOption = 0;
    //0 = enter site; 1 = learn more

    p.setup = async () =>{
        p.createCanvas(window.innerWidth, window.innerHeight);
        pressStart  = await p.loadFont('/fonts/PressStart2P.ttf');
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
        
       

        p.pop();
    };

    // p.mousePressed = () =>{
    //     if(p.dist(p.mouseX, p.mouseY, 1405, 200) < 30){
    //         onButtonPress("A");
    //     }

    // };

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
                onButtonPress("ENTER_SITE");
            }


            if(selectedOption === 1){
                onButtonPress("LEARN_MORE");
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
        p.rect(200,100,1100,600,50);
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
        p.text("ABOUT ME", 750, 60);
        
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
        p.fill(163, 163, 163);
        p.stroke(0,0,0);
        p.rect(210,110,400,580,50);
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
        p.text("EXPLORE SITE", 1025, 450);
        p.text("PLAY GAMES", 1025, 500);
        p.text("CONTACT ME", 1025, 550);

    }
    function drawArrows(){
        p.stroke(207, 27, 189);
        if(selectedOption === 0){
            p.triangle(560,465,580,475,560,485);
        }
        else{
            p.triangle(560,540,580,550,560,560);
        }
        
    }

    function drawControls(){    
        //Controls
        p.stroke(0,0,0);

        p.fill(0,0,0);
        p.rect(80,525,25,75);
        p.rect(55,550,75,25);

        p.noFill();
        p.strokeWeight(2);
        p.ellipse(92.5,562.5,100,100);

        p.fill(0,0,0);
        p.noStroke();
        p.ellipse(1405,200,30,30);
        p.ellipse(1405,250,30,30);
        p.ellipse(1430,225,30,30);
        p.ellipse(1380,225,30,30);

        p.noFill();
        p.stroke(0,0,0);
        p.ellipse(1405,225,100,100);

        
        
        p.noFill();
        p.ellipse(1405,550,120,120);
        p.fill(23, 23, 23);
        p.ellipse(1405,550,100,100);
        p.fill(0,0,0);
        p.ellipse(1405,550,80,80);

        p.noFill();
        p.ellipse(92.5,200,120,120);
        p.fill(23, 23, 23);
        p.ellipse(92.5,200,100,100);
        p.fill(0,0,0);
        p.ellipse(92.5,200,80,80);

        p.noStroke();
        p.fill(23, 23, 23);
        p.ellipse(50,750,20,20);

        p.stroke(0,0,0);
        p.line(1400,50,1450,50);
        p.line(1400,60,1450,60);
        p.line(1400,70,1450,70);

    }

    p.windowResized = () =>{
        p.resizeCanvas(window.innerWidth, window.innerHeight);

    };
}
}