
export default function sketch(onButtonPress, onLoaded){
    //import java.awt.Font;
    return function(p){
    let pressStart;
    let arial;
    let selectedOption = 0;
    let gitIM;
    let linkedIM;
    let emailIM;
    let qmIM;
    let contactOpen = false;
    let garamond;
    let times;
    let SK;
    let SB;
    let java;
    let js;
    let python;
    let html;
    let css;
    let r;
    let processing;
    let rStudio;
    let react;
    let twine;
    let spyder;
    let vite;
    let p5;
    let githubFull;
    let google;
    let microsoft;
    let menuOption = 0; //0 = experience, 1 = games, 2 = projects, 3 = skills


    p.setup = async () =>{
    
        p.createCanvas(window.innerWidth, window.innerHeight);
        try{
            pressStart  = await p.loadFont('/fonts/PressStart2P.ttf');
            arial = await p.loadFont('/fonts/ARIAL.TTF');
            garamond = await p.loadFont('/fonts/Garamond.ttf');
            times = await p.loadFont('/fonts/times.ttf');
            gitIM = await p.loadImage("/icons/Github.png");
            linkedIM = await p.loadImage("/icons/Linkedin.png");
            emailIM = await p.loadImage("/icons/Email.png");
            qmIM = await p.loadImage("/icons/QM.png");

            SK = await p.loadImage("/pictures/Sudoku.png");
            SB = await p.loadImage("/pictures/SpongeBob.png");

            java = await p.loadImage("/pictures/Java.png");
            js = await p.loadImage("/pictures/JS.png");
            python = await p.loadImage("/pictures/python.png");
            html = await p.loadImage("/pictures/html.png");
            css = await p.loadImage("/pictures/css.png");
            r = await p.loadImage("/pictures/r.png");
            processing = await p.loadImage("/pictures/processing.png");
            rStudio = await p.loadImage("/pictures/r studio.png");
            react = await p.loadImage("/pictures/react.png");
            twine = await p.loadImage("/pictures/twine.png");
            spyder = await p.loadImage("/pictures/spyder.png");
            vite = await p.loadImage("/pictures/vite.png");
            p5 = await p.loadImage("/pictures/p5.png");
            githubFull = await p.loadImage("/pictures/githubFull.png");
            google = await p.loadImage("/pictures/google.png");
            microsoft = await p.loadImage("/pictures/microsoft.png");

        }catch(error){
            console.error("Error loading assets in sketch: ", error);
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
        drawControls();
        drawScreen();
       
        if(menuOption == 0){
            drawExperience();
        }
        else if(menuOption == 1){
            drawGames();
        }
        else if(menuOption == 2){
            drawProjects();
        }
        else if(menuOption == 3){
            drawSkills();
        }
        if(contactOpen){
            drawContactInfo();
        }
       

        p.pop();
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

        p.noStroke();
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

    function drawScreen(){
        //Inner Screen
        if(menuOption == 0){
            p.fill(255);
        }
        else if(menuOption == 3){
            p.fill(255);
        }
        else if(menuOption == 1){
            p.fill(0);
        }
        else if(menuOption == 2){
            p.fill(255, 240, 249);
        }
        p.stroke(74, 13, 52);
        p.strokeWeight(4);
        p.rect(150,50,1200,700,50);  
        

    }

    function drawExperience(){
        let scaleX = p.width / 1500;
        let scaleY = p.height / 800;
        let scaleFactor = Math.min(scaleX, scaleY);

        let offsetX = (p.width - 1500 * scaleFactor) / 2;
        let offsetY = (p.height - 800 * scaleFactor) / 2;

        let mx = (p.mouseX - offsetX) / scaleFactor;
        let my = (p.mouseY - offsetY) / scaleFactor;

        p.textAlign(p.CENTER,p.CENTER);
        p.textFont(pressStart);
        p.textSize(25);
        p.fill(207, 14, 165);
        p.noStroke();
        p.text("EXPERIENCE", 325,100);
        p.fill(0);
        p.text("GAMES", 625,100);
        if(mx> 560 && mx< 685 && my> 85 && my< 110){
            p.fill(207,14,165);
            p.text("GAMES", 625, 100);
        }
        p.fill(0);;
        p.text("PROJECTS", 925,100);
        if(mx> 822 && mx< 1020 && my> 85 && my< 110){
            p.fill(207,14,165);
            p.text("PROJECTS", 925, 100);
        }
        p.fill(0);
        p.text("SKILLS", 1225,100);
        if(mx> 1150 && mx< 1300 && my> 85 && my< 110){
            p.fill(207, 14, 165);
            p.text("SKILLS", 1225,100);
        }
        p.fill(0);
        p.stroke(0);
        p.strokeWeight(2);
        p.line(180,130,1320,130);
        p.stroke(207, 14, 165);
        p.strokeWeight(4);
        p.line(180,130,480,130);
        p.textAlign(p.LEFT, p.CENTER);
        p.textFont(times);
        p.textSize(15);
        p.noStroke();
        p.textStyle(p.BOLD);
        p.text("Lead Software Engineer", 200,170);
        p.textStyle(p.ITALIC);
        p.text("Enjoyment Department", 200, 190);
        p.textStyle(p.NORMAL);
        p.text("\u2022 Built the React + Vite frontend for a nightlife discovery web app, including an interactive Mapbox interface, real-time event/venue filtering, and curated verified event browsing", 210, 215);
        p.text("\u2022 Integrated Firebase (Auth + Firestore), Stripe subscriptions, and Resend email automation to deploy a mobile-first PWA on Vercel with personalized user features", 210, 240);

        p.textStyle(p.BOLD);
        p.text("Volleyball Coach", 200,280);
        p.textStyle(p.ITALIC);
        p.text("Beaver Country Day School; Lionheart Volleyball Club", 200, 300);
        p.textStyle(p.NORMAL);
        p.text("\u2022 Coached and mentored beginner athletes, improving fundamental skills, teamwork, and confidence in competitive play", 210, 325);
        p.text("\u2022 Fostered an inclusive and supportive environment that encouraged collaboration and personal growth", 210, 350); 

        p.textStyle(p.BOLD);
        p.text("Qualitative & Quantitative Insights Externship", 200,390);
        p.textStyle(p.ITALIC);
        p.text("Extern, Beats by Dre", 200, 410);
        p.textStyle(p.NORMAL);
        p.text("\u2022 Conducted qualitative and quantitative research to uncover customer insights related to trends, behaviors, and preferences for Beats audio devices", 210, 435);
        p.text("\u2022 Used various AI platforms to synthesize insights and present findings in a detailed visual presentation", 210, 460);

        p.textStyle(p.BOLD);
        p.text("Computer Science Tutor", 200,500);
        p.textStyle(p.ITALIC);
        p.text("Brandeis University", 200, 520);
        p.textStyle(p.NORMAL);
        p.text("\u2022 Taught students introductory Python and Java concepts and problem-solving techniques with guided practice and coding exercises", 210, 545);
        p.text("\u2022 Contributed to the academic growth and development of new Computer Science majors by assisting with assignments and building student confidence in programming ", 210, 570);

            
        p.textStyle(p.BOLD);
        p.text("Vice President of External Affairs, Executive Board ", 200,610);
        p.textStyle(p.ITALIC);
        p.text("Sigma Delta Tau, Delta Gamma Chapter", 200, 630);
        p.textStyle(p.NORMAL);
        p.text("\u2022 Led the planning and coordination of external events and partnerships for the chapter.", 210, 655);
        p.text("\u2022 Managed budgets and allocated funds to support organizational engagement and outreach initiatives.", 210, 680);

            
        p.textAlign(p.RIGHT, p.CENTER);
        p.textFont(garamond);
        p.text("May 2026-Present", 1300,170);
        p.text("August 2023-August 2026", 1300, 280);
        p.text("February 2026-May 2026", 1300,390);
        p.text("September 2025-May 2026", 1300, 500);
        p.text("January 2023-June 2024", 1300, 610);

    
    }

    function drawGames(){
        let scaleX = p.width / 1500;
        let scaleY = p.height / 800;
        let scaleFactor = Math.min(scaleX, scaleY);

        let offsetX = (p.width - 1500 * scaleFactor) / 2;
        let offsetY = (p.height - 800 * scaleFactor) / 2;

        let mx = (p.mouseX - offsetX) / scaleFactor;
        let my = (p.mouseY - offsetY) / scaleFactor;

        p.textAlign(p.CENTER,p.CENTER);
        p.textFont(pressStart);
        p.textSize(25);
        p.fill(207, 14, 165);
        p.noStroke();
        p.text("GAMES", 625,100);
        p.fill(255);  
        p.text("EXPERIENCE", 325,100);
        if(mx> 200 && mx< 450 && my> 85 && my< 110){
            p.fill(207, 14, 165);
            p.text("EXPERIENCE", 325,100);

        }
        p.fill(255);
        p.text("PROJECTS", 925,100);
        if(mx> 822 && mx< 1020 && my> 85 && my< 110){
            p.fill(207,14,165);
            p.text("PROJECTS", 925, 100);
        }
        p.fill(255);
        p.text("SKILLS", 1225,100);
        if(mx> 1150 && mx< 1300 && my> 85 && my< 110){
            p.fill(207, 14, 165);
            p.text("SKILLS", 1225,100);
        }
        p.fill(255);
        p.stroke(255);
        p.strokeWeight(2);
        p.line(180,130,1320,130);
        p.stroke(207, 14, 165);
        p.strokeWeight(4);
        p.line(480,130,750,130);
        p.stroke(0);
        p.strokeWeight(4);
        p.rect(200,150,500,300);
        p.rect(800,150,500,300);
        p.image(SK,200,150,500,300);
        p.image(SB,800,150,500,300);
        p.textAlign(p.LEFT,p.CENTER);
        p.textSize(25);
        p.text("SUDOKU", 200, 480);
        if(mx> 200 && mx< 350 && my> 460 && my< 520){
            p.fill(207, 14, 165);
            p.text("SUDOKU", 200, 480);
        }
        p.fill(255);
        p.text("KRABBY PATTY CATCHER", 800,480);
        if(mx> 800 && my< 1300 && my> 460 && my< 520){
            p.fill(207, 14, 165);
            p.text("KRABBY PATTY CATCHER", 800,480);
        }
        p.fill(255);
        p.textSize(10);
        p.text("My favorite game to play in my free time!", 200, 510);
        p.text("Collect the falling krabby patties!", 800, 510);
        p.textSize(20);
        p.text("More coming soon!", 600,625);

    }

    function drawProjects(){
        let scaleX = p.width / 1500;
        let scaleY = p.height / 800;
        let scaleFactor = Math.min(scaleX, scaleY);

        let offsetX = (p.width - 1500 * scaleFactor) / 2;
        let offsetY = (p.height - 800 * scaleFactor) / 2;

        let mx = (p.mouseX - offsetX) / scaleFactor;
        let my = (p.mouseY - offsetY) / scaleFactor;

        p.textAlign(p.CENTER,p.CENTER);
        p.textFont(pressStart);
        p.textSize(25);
        p.fill(207, 14, 165);
        p.noStroke();
        p.text("PROJECTS", 925,100);
        p.fill(0);
        p.text("GAMES", 625,100);
        if(mx> 560 && mx< 685 && my> 85 && my< 110){
            p.fill(207,14,165);
            p.text("GAMES", 625, 100);
        }
        p.fill(0);
        p.text("EXPERIENCE", 325,100);
        if(mx> 200 && mx< 450 && my> 85 && my< 110){
            p.fill(207, 14, 165);
            p.text("EXPERIENCE", 325,100);
        }
        p.fill(0);
        p.text("SKILLS", 1225,100);
        if(mx> 1150 && mx< 1300 && my> 85 && my< 110){
            p.fill(207, 14, 165);
            p.text("SKILLS", 1225,100);
        }
        p.fill(0);
        p.stroke(0);
        p.strokeWeight(2);
        p.line(180,130,1320,130);
        p.stroke(207, 14, 165);
        p.strokeWeight(4);
        p.line(750,130,1100,130);

        p.stroke(207, 14, 165);
        p.strokeWeight(1);
        p.line(210,220, 530, 220);
        p.line(210,550, 530, 550);
        p.line(590,220, 910, 220);
        p.line(590,525, 910, 525);
        p.line(970,220, 1290, 220);
        p.line(970,525, 1290, 525);


        p.noStroke();
        p.textAlign(p.LEFT,p.CENTER);
        p.textFont(times);
        p.textSize(40);
        p.fill(0);
        p.text("Portfolio", 210,170);
        p.textSize(20);
        p.fill(133, 133, 133);
        p.text("Personal Project", 210, 200);
        p.textSize(25);
        p.fill(0);
        p.text("Online portfolio showcasing my \nfrontend and game development \nskills, featuring games and \nprojects", 210, 290);
        p.fill(207, 14, 165);
        p.textSize(15);
        p.text("TOOLS: React, p5.js", 210, 385);
        p.text("LANGUAGES: JavaScript, CSS, HTML, Processing", 210, 405);


        p.textSize(40);
        p.fill(0);
        p.text("Smart Pantry", 590,170);
        p.textSize(20);
        p.fill(133, 133, 133);
        p.text("Capstone for Software Engineering", 590, 200);
        p.textSize(25);
        p.fill(0);
        p.text("Created an interactive grocery \ntracking web app that manages \npantry inventory and helps to \nreduce food waste", 590, 290);
        p.fill(207, 14, 165);
        p.textSize(15);
        p.text("TOOLS: React + Vite", 590, 385);
        p.text("LANGUAGES: JavaScript, CSS, HTM", 590, 405);


        p.textSize(40);
        p.fill(0);
        p.text("AI Horror Story", 970,170);
        p.textSize(20);
        p.fill(133, 133, 133);
        p.text("Digital Games and Gaming Culture", 970, 200);
        p.textSize(25);
        p.fill(0);
        p.text("Interactive horror walkthrough \ngame that serves as a social \ncommentary on the dangers \nof AI", 970, 290);
        p.fill(207, 14, 165);
        p.textSize(15);
        p.text("TOOLS: Twine", 970, 385);
        p.text("LANGUAGES: CSS", 970, 405);

        p.textAlign(p.LEFT,p.CENTER);
        p.textSize(40);
        p.fill(0);
        p.text("Oscars Predication", 210,475);
        p.text("Algorithm", 210, 505);
        p.textSize(20);
        p.fill(133,133,133);
        p.text("Statistical Modeling", 210, 535);
        p.textSize(22);
        p.fill(0);
        p.text("Derived a generalized p.linear model \nand used a stepwise prediction \nalgorithm to correctly predict \nthe 2025 Best Picture winner", 210, 605);
        p.fill(207, 14, 165);
        p.textSize(15);
        p.text("TOOLS: RStudio", 210, 690);
        p.text("LANGUAGES: R", 210, 710);
        
        p.textAlign(p.LEFT,p.CENTER);
        p.textSize(40);
        p.fill(0);
        p.text("Receipe Book", 590,475);
        p.textSize(20);
        p.fill(133,133,133);
        p.text("Fundamentals of Software Engineering", 590, 505);
        p.textSize(25);
        p.fill(0);
        p.text("Web based receipe book that \nallows users to search, save, and \ncreate receipes all in one place", 590, 595);
        p.fill(207, 14, 165);
        p.textSize(15);
        p.text("TOOLS: React + Vite", 590, 690);
        p.text("LANGUAGES: JavaScript, CSS, HTML", 590, 710);

        p.textAlign(p.LEFT,p.CENTER);
        p.textSize(40);
        p.fill(0);
        p.text("Diagnosis Predictor", 970,475);
        p.textSize(20);
        p.fill(133, 133, 133);
        p.text("Numerical Methods and Big Data", 970, 505);
        p.textSize(22);
        p.fill(0);
        p.text("Given a dataset of various medical \nsymptoms, my group and I used \nregression with clustering to predict \npatients' medical diagnosis", 970, 600);
        p.fill(207, 14, 165);
        p.textSize(15);
        p.text("TOOLS: Spyder", 970, 700);
        p.text("LANGUAGES: Python", 970, 720);



    }

    function drawSkills(){
        let scaleX = p.width / 1500;
        let scaleY = p.height / 800;
        let scaleFactor = Math.min(scaleX, scaleY);

        let offsetX = (p.width - 1500 * scaleFactor) / 2;
        let offsetY = (p.height - 800 * scaleFactor) / 2;

        let mx = (p.mouseX - offsetX) / scaleFactor;
        let my = (p.mouseY - offsetY) / scaleFactor;

        p.textAlign(p.CENTER,p.CENTER);
        p.textFont(pressStart);
        p.textSize(25);
        p.fill(207, 14, 165);
        p.noStroke();
        p.text("SKILLS", 1225,100);
        p.fill(0);
        p.text("GAMES", 625,100);
        if(mx> 560 && mx< 685 && my> 85 && my< 110){
            p.fill(207,14,165);
            p.text("GAMES", 625, 100);
        }
        p.fill(0);
        p.text("EXPERIENCE", 325,100);
        if(mx> 200 && mx< 450 && my> 85 && my< 110){
            p.fill(207, 14, 165);
            p.text("EXPERIENCE", 325,100);
        }
        p.fill(0);
        p.text("PROJECTS", 925,100);
        if(mx> 822 && mx< 1020 && my> 85 && my< 110){
            p.fill(207,14,165);
            p.text("PROJECTS", 925, 100);
        }
        p.fill(0);
        p.stroke(0);
        p.strokeWeight(2);
        p.line(180,130,1320,130);
        p.stroke(207, 14, 165);
        p.strokeWeight(4);
        p.line(1100,130,1320,130);
        
        p.image(java,220,165,250,126);
        p.image(js,220,306,250,126);
        p.image(python, 220, 447, 250, 126);
        p.image(html, 220, 588, 250, 126);
        p.image(css, 490, 165, 250, 126);
        p.image(r, 490,306,250,126);
        p.image(processing, 490, 447, 250, 126);
        p.image(githubFull, 490, 588, 250, 126);
        p.image(react, 760, 165, 250, 126);
        p.image(vite, 760, 306, 250, 126);
        p.image(p5, 760, 447, 250, 126);
        p.image(rStudio, 760, 588, 250, 126);
        p.image(twine, 1030, 165, 250, 126);
        p.image(spyder, 1030, 306, 250, 126);
        p.image(microsoft, 1030, 447, 250, 126);
        p.image(google, 1030, 588, 250, 126);

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

        if(mx> 200 && mx< 450 && my> 85 && my< 110){
            menuOption = 0;

        }

        if(mx> 560 && mx< 685 && my> 85 && my< 110){
            menuOption = 1;

        }
    
        if(mx> 822 && mx< 1020 && my> 85 && my< 110){
            menuOption = 2;
        }

        if(mx> 1150 && mx< 1300 && my> 85 && my< 110){
            menuOption = 3;
        }

        if(mx>40 && mx<60 && my > 740 && my< 760){
            onButtonPress("POWER_OFF");
        }

        if(mx> 200 && mx< 350 && my> 460 && my< 520){
            onButtonPress("SUDOKU");
        }
  
        if(mx> 800 && my< 1300 && my> 460 && my< 520){
            onButtonPress("SPONGEBOB_GAME");
        }

    };

    p.windowResized = () =>{
        p.resizeCanvas(window.innerWidth, window.innerHeight);

    };





    }
}