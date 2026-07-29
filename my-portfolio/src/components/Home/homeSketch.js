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

        //drawBackground();
        drawScreen();
        drawGrid();
        drawText();
        //drawControls();
        drawArrows();

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
        //p.fill(250, 125, 182);
        p.noFill();
        p.stroke(74, 13, 52);
        p.strokeWeight(4);
        p.rect(200,100,1100,600, 50);

    }

    function drawGrid(){
        //Grid Lines
        p.strokeWeight(1);
        p.stroke(229, 170, 192);
        p.line(300,102,300,698);
        p.line(400,102,400,698);
        p.line(500,102,500,698);
        p.line(600,102,600,698);
        p.line(700,102,700,698);
        p.line(800,102,800,698);
        p.line(900,102,900,698);
        p.line(1000,102,1000,698);
        p.line(1100,102,1100,698);
        p.line(1200,102,1200,698);
    
        p.line(202,200,1298,200);
        p.line(202,300,1298,300);
        p.line(202,400,1298,400);
        p.line(202,500,1298,500);
        p.line(202,600,1298,600);

    }

    function drawText(){

        p.noStroke();
        
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont(pressStart);
        p.fill(0,0,0);
        p.textSize(60);
        p.text("Caitlyn Jones", 750, 300);
        
        
        p.textFont(pressStart);
        p.fill(0,0,0);
        p.textSize(30);
        p.text("ENTER SITE", 750, 475);
        p.text("LEARN MORE", 750, 550);

        // p.textFont(pressStart);
        // p.fill(0,0,0);
        // p.textSize(10);
        // p.text("Power",90,750);

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