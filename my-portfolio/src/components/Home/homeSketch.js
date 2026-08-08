export default function sketch(onButtonPress, onLoaded){
    return function(p){
    let pressStart;
    let selectedOption = 0;
    let gitIM;
    let linkedIM;
    let emailIM;
    let qmIM;
    let contactOpen = false;
    let arial;
    //0 = enter site; 1 = learn more

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
       

    };

    p.draw = () => {

        let scaleX = p.width / 1500;
        let scaleY = p.height / 800;

        let scaleFactor = Math.min(scaleX, scaleY);

        p.push();

        p.translate((p.width - 1500 * scaleFactor) / 2,(p.height - 800 * scaleFactor) / 2);

        p.scale(scaleFactor);

        drawBackground();
        drawScreen();
        drawGrid();
        drawText();
        drawControls();
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
        p.stroke(0);
        p.strokeWeight(2);
        p.fill(130, 17, 66);
        p.rect(10,10,1480,780);

    }

    function drawScreen(){
        //Inner Screen
        p.fill(250, 125, 182);
        p.stroke(74, 13, 52);
        p.strokeWeight(4);
        p.rect(150,50,1200,700,50);
        p.noFill();
        p.stroke(229, 170, 192);
        p.rect(210,110,1080,580,50);

    }

    function drawGrid(){
        //Grid Lines
        p.strokeWeight(1);
        p.stroke(229, 170, 192);
        p.line(200,52,200,748);
        p.line(300,52,300,748);
        p.line(400,52,400,748);
        p.line(500,52,500,748);
        p.line(600,52,600,748);
        p.line(700,52,700,748);
        p.line(800,52,800,748);
        p.line(900,52,900,748);
        p.line(1000,52,1000,748);
        p.line(1100,52,1100,748);
        p.line(1200,52,1200,748);
        p.line(1300,52,1300,748);

        p.line(152,100,1348,100);
        p.line(152,200,1348,200);
        p.line(152,300,1348,300);
        p.line(152,400,1348,400);
        p.line(152,500,1348,500);
        p.line(152,600,1348,600);
        p.line(152,700,1348,700);

    }

    function drawText(){

        p.noStroke();
        
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont(pressStart);
        p.fill(0,0,0);
        p.textSize(60);
        p.text("Caitlyn Jones", 750, 250);
        
        
        p.textFont(pressStart);
        p.fill(0,0,0);
        p.textSize(30);
        p.text("ENTER SITE", 750, 425);
        p.text("LEARN MORE", 750, 500);

        p.textFont(pressStart);
        p.fill(0,0,0);
        p.textSize(10);
        p.text("Power",90,750);

    }

    function drawArrows(){
        p.stroke(207, 27, 189);
        p.strokeWeight(4);
        p.fill(0);
        if(p.frameCount % 80 < 40){
            if(selectedOption === 0){
                p.triangle(560,415,580,425,560,435);
            }
            else{
                p.triangle(560,490,580,500,560,510);
            }

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
        p.fill(23, 23, 23);
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
    p.mousePressed = () => {
        let scaleX = p.width / 1500;
        let scaleY = p.height / 800;
        let scaleFactor = Math.min(scaleX, scaleY);

        let offsetX = (p.width - 1500 * scaleFactor) / 2;
        let offsetY = (p.height - 800 * scaleFactor) / 2;

        let mx = (p.mouseX - offsetX) / scaleFactor;
        let my = (p.mouseY - offsetY) / scaleFactor;

        if(mx > 1295 && mx < 1305 && my > 755 && my < 765){
            contactOpen = !contactOpen;
        }

        if(mx > 1295 && mx < 1305 && my > 775 && my < 785){
            onButtonPress("HOME");
        }
        
        if(contactOpen){
            if(mx>1145 && mx<1300 && my>590 && my<630){
                window.open("https://github.com/caitlynj10", "_blank", "noopener,noreferrer");            
            }

            else if(mx>1145 && mx<1375 && my>635 && my<675){
                window.open("https://www.linkedin.com/in/caitlyn-jones1022/", "_blank", "noopener,noreferrer");
            }

            else if(mx>1145 && mx<1470 && my>680 && my<720){
                window.open("https://mail.google.com/#compose", "_blank", "noopener,noreferrer");
            }
           
        }
        


    };

    p.windowResized = () =>{
        p.resizeCanvas(window.innerWidth, window.innerHeight);

    };
}
}