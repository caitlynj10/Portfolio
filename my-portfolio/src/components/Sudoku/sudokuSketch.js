
class SudokuGame{

    createBoard(){
        let board = Array.from({ length: 9 }, () => Array(9).fill(0));
        this.checkValidBoard(board);
    
        return board;
    }

    checkValidBoard(board){
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] == 0) { 
                    let nums = [];
                    for (let k = nums.length - 1; k > 0; k--) {
                        let r = Math.floor(Math.random() * (k + 1));
                        [nums[k], nums[r]] = [nums[r], nums[k]];
                    }
                    for (let num of nums) {
                        if (this.checkRows(num, board, i) && this.checkColumns(num, board, j) && this.checkSquare(num, board, i, j)) {
                            board[i][j] = num;
                            if (this.checkValidBoard(board)) { 
                                return true;
                            }
                            board[i][j] = 0; 
                        }
                    }
                    return false; 
                }
            }
        }

        return true;
    }

   printBoard(board){  
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                console.log(board[i][j] + " ");
            }
            console.log();   
        }

    }

    checkRows(rowVal, board, row) {
        for(let i = 0; i<9; i++){
            if(board[row][i] == rowVal){
                return false;
            }
        }
        return true;
    }

    checkColumns(colVal, board, col){
        for(let j = 0; j<9; j++){
            if(board[j][col] == colVal){
                return false;
            }
        }
        return true;
    }
    
    checkSquare(num, board, row, col){
        let startRow = row - (row % 3);
        let startCol = col - (col % 3);
        for(let i = startRow; i < startRow + 3; i++){
            for(let j = startCol; j < startCol + 3; j++){
                if(board[i][j] == num){
                    return false;
                }
            }
                
        }

        return true;
    }

    easyBoard(board){
        for(let i = 0; i < board.length; i++){
            let removeNums = Math.floor(Math.random() * 2) + 3;
            this.removeFromRow(board, i, removeNums);
        }
    
    }

    mediumBoard(board){
        for(let i = 0; i < board.length; i++){
            let removeNums = Math.floor(Math.random() * 2) + 4;
            this.removeFromRow(board, i, removeNums);
        }
    

    }

    hardBoard(board){
        for(let i = 0; i < board.length; i++){
            let removeNums = Math.floor(Math.random() * 2) + 5;
            this.removeFromRow(board, i, removeNums);
        }
    

    }

    removeFromRow(board, row, countVals){
        let removedVals = 0;
        while(removedVals < countVals){
            let col = Math.floor(Math.random() * 9);
            if(board[row][col] != 0){
                board[row][col] = 0;
                removedVals++;
            }
        }

    }
        
    
    puzzleBoard(board){
        
        for(let i = 0; i < board.length; i+=6){
            for(let j = 0; j < board[i].length; j+=6){
                board[i][j] = 0;
            }
        }
        return board;


    }

    copyBoard(a, b){
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                a[r][c] = b[r][c];
            }
        }
    }

    completedBoard(empty, complete){
        for(let i = 0; i < empty.length; i++){
            for(let j = 0; j < empty[i].length; j++){
                if(empty[i][j] != complete[i][j]){
                    return false;
                }
            }
        }
        return true;
    }

    countOnes(board, solution){
        let count = 0;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] == 1 && board[i][j] == solution[i][j]){
                    count++;
                }
            }
        }
        return count;
    }

    countTwos(board, solution){
        let count = 0;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] == 2 && board[i][j] == solution[i][j]){
                    count++;

                }
            }
        }
        return count;
    }

    countThrees(board, solution){
        let count = 0;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] == 3 && board[i][j] == solution[i][j]){
                    count++;
                }
            }
        }
        return count;
    }

    countFours(board, solution){
        let count = 0;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] == 4 && board[i][j] == solution[i][j]){
                    count++;
                }
            }
        }
        return count;
    }

    countFives(board, solution){
        let count = 0;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] == 5 && board[i][j] == solution[i][j]){
                    count++;
                }
            }
        }
        return count;
    }

    countSixes(board, solution){
        let count = 0;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] == 6 && board[i][j] == solution[i][j]){
                    count++;
                }
            }
        }
        return count;
    }

    countSevens(board, solution){
        let count = 0;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] == 7 && board[i][j] == solution[i][j]){
                    count++;
                }
            }
        }
        return count;
    }

    countEights(board, solution){
        let count = 0;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] == 8 && board[i][j] == solution[i][j]){
                    count++;
                }
            }
        }
        return count;
    }

    countNines(board, solution){
        let count = 0;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] == 9 && board[i][j] == solution[i][j]){
                    count++;
                }
            }
        }
        return count;
    }


    allNums(nums){
        if(nums != 9){
            return false;
        }
        return true;
    }
    
    



}
export default function sketch(onButtonPress){
    return function(p){
    let pressStart;
    let selectedOption = 0;
    let gitIM;
    let linkedIM;
    let emailIM;
    let qmIM;
    let contactOpen = false;

    let engine;
    let displayBoard;
    let fullBoard;
    let cellSize = 70;

    let selectedRow = -1;
    let selectedCol = -1;
    let selectedNumber = 0;
    let sWidth = 630;
    let sHeight = 690;
    let gameStarted = false;
    let gameWon = false;
    let difficulty = "";
    let errors = 0;
    let garamond;
    let startTime;
    let elapsedTime;
    let seconds;
    let gameTime;

    //0 = enter site; 1 = learn more

    p.setup = async () =>{
        p.createCanvas(window.innerWidth, window.innerHeight);
        pressStart  = await p.loadFont('/fonts/PressStart2P.ttf');
        pressStart  = await p.loadFont('/fonts/PressStart2P.ttf');
        gitIM = await p.loadImage("/icons/Github.png");
        linkedIM = await p.loadImage("/icons/Linkedin.png");
        emailIM = await p.loadImage("/icons/Email.png");
        qmIM = await p.loadImage("/icons/QM.png");
        
        setupSudoku();
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
      
        if(contactOpen){
            drawContactInfo();
        }

        
        drawSudoku();

       

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

    p.windowResized = () =>{
        p.resizeCanvas(window.innerWidth, window.innerHeight);

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
        p.fill(255, 229, 240);
        p.stroke(74, 13, 52);
        p.strokeWeight(4);
        p.rect(150,50,1200,700,50);
       

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

        p.strokeWeight(0);
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont(pressStart);
        p.fill(0,0,0);
        p.textSize(10);
        p.text("Power",90,750);
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
    function setupSudoku() {
        // 9 cells * 60px
        engine = new SudokuGame();
        
        fullBoard = engine.createBoard();
        displayBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
        difficulty = "Easy";
        
        engine.copyBoard(displayBoard, fullBoard);
        engine.easyBoard(displayBoard);
        startTime = millis();
        elapsedTime = 0;
        garamond = createFont("Garamond", 128);

        
    }

    function drawSudoku() {
        pushMatrix();
        pushStyle();
        translate(435,50);
        
        if(!gameStarted){
            startGame();
        }
        else{
            
            if(engine.completedBoard(displayBoard, fullBoard)){
            gameWon = true;
            }
            
            textAlign(CENTER,CENTER);
            textFont(garamond);
            //background(255, 229, 240);
            let sx = mouseX - 435;
            let sy = mouseY - 50;
            textSize(20);

            noFill();
            stroke(201, 149, 0);
            rect(-200,300,100,50, 28);
            textAlign(CENTER,CENTER);
            textSize(20);
            text("Hint", -150, 325);
            if(sx > -200 && sx < -100 && sy > 300 && sy < 350){
            fill(255, 218, 112);
            rect(-200,300,100,50, 28);
            fill(0);
            text("Hint", -150, 325);
            }

            noFill();
            stroke(255, 0, 0);
            rect(-210,400,120,50, 28);
            textAlign(CENTER,CENTER);
            textSize(20);
            text("End Game", -150, 425);
            if(sx > -210 && sx < -90 && sy > 400 && sy < 450){
            fill(255, 110, 110);
            rect(-210,400,120,50, 28);
            fill(0);
            text("End Game", -150, 425);
            }



            textSize(40);
            fill(0);
            if(!gameWon){
            elapsedTime = (millis() - startTime) / 1000;
            }

            let minutes = elapsedTime / 60;
            let seconds = elapsedTime % 60;

            text("Time: " + nf(minutes, 2) + ":" + nf(seconds, 2), 750, 100);
            
            text("Errors: ", 720, 150);
            fill(255, 0, 0);
            text(errors, 800, 150);
            



            textAlign(CENTER,CENTER);
            textSize(40);
            if(difficulty.equals("Easy")){
            fill(12,140,0);
            text(difficulty, sWidth/2, 25);
            }
            if(difficulty.equals("Medium")){
            fill(224, 123, 0);
            text(difficulty, sWidth/2, 25);
            }
            if(difficulty.equals("Hard")){
            fill(255, 0, 0);
            text(difficulty, sWidth/2, 25);
            }
            
            
            highlightSelected();
            drawGrid();
            drawNumbers();
            displayNumbers();

            

            if(gameWon){
            gameEnded();
            }
        }

        

        popStyle();  
        popMatrix();
    
    }
    
    function startGame(){
        let sx = mouseX - 435;
        let sy = mouseY - 50;

        //background(255, 229, 240);
        stroke(0);
        strokeWeight(2);

        textFont(garamond);
        textAlign(CENTER, TOP);
        textSize(70);
        text("Play Sudoku", sWidth/2, 40);
        
        fill(255, 176, 214);
        rect(sWidth/2 - 150, 220, 300, 100, 28);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(40);
        text("Start Game", sWidth/2, 270);

        if(sx > sWidth/2 - 150 && sx < sWidth/2 + 150 && sy > 220 && sy < 320){
            fill(255, 87, 162);
            rect(sWidth/2 - 150, 220, 300, 100, 28);
            fill(0);
            textAlign(CENTER, CENTER);
            textSize(40);
            text("Start Game", sWidth/2, 270);
        }

        if(difficulty.equals("Easy")){
            fill(255, 87, 162);
        }
        else{
            fill(255, 176, 214);
        }
        rect(sWidth/2 - 260, 430, 140, 70, 28);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(30);
        text("Easy", sWidth/2 - 190, 465);

        if(difficulty.equals("Medium")){
            fill(255, 87, 162);
        }
        else{
            fill(255, 176, 214);
        }
        rect(sWidth/2 - 70, 430, 140, 70, 28);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(30);
        text("Medium", sWidth/2, 465);

        if(difficulty.equals("Hard")){
            fill(255, 87, 162);
        }
        else{
            fill(255, 176, 214);
        }
        rect(sWidth/2 + 120, 430, 140, 70, 28);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(30);
        text("Hard", sWidth/2 + 190, 465);
        
    }

    
    function gameEnded(){
        textFont(garamond);
        stroke(0, 110, 0);
        strokeWeight(4);
        fill(140, 255, 140);
        rect(sWidth/2 - 200, 195, 400, 300, 20);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill(255, 0, 0);
        text("Puzzle Complete!", sWidth/2, 260);

        fill(0);
        textAlign(CENTER, CENTER);
        textSize(20);
        text("Total Errors: " + errors, sWidth/2, 320);
        
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(30);
        text("Press Enter to Play Again", sWidth/2, 450);
    }

    

    function setGameDifficulty(board){
        let sx = mouseX - 435;
        let sy = mouseY - 50;
        
        if(sx > sWidth/2 - 260 && sx < sWidth/2 - 120 && sy > 430 && sy < 500){
            engine.copyBoard(board, fullBoard);
            difficulty = "Easy";
            engine.easyBoard(board);
        }
        else if(sx > sWidth/2 - 70 && sx < sWidth/2 + 70 && sy > 430 && sy < 500){
            engine.copyBoard(board, fullBoard);
            difficulty = "Medium";
            engine.mediumBoard(board);
        }
        else if(sx > sWidth/2 + 120 && sx < sWidth/2 + 260 && sy > 430 && sy < 500){
            engine.copyBoard(board, fullBoard);
            difficulty = "Hard";
            engine.hardBoard(board);
        }
    
    }

    function drawGrid() {
        stroke(0);
        for (let i = 0; i <= 9; i++) {
            if (i % 3 == 0) {
            strokeWeight(4);
            } else {
            strokeWeight(1);
            }
            line(i * cellSize, 50, i * cellSize, 680);
            line(0, i * cellSize + 50, sWidth, i * cellSize + 50);
        }
    }

    
    function drawNumbers() {
        textAlign(CENTER, CENTER);
        textSize(32);
        
        
        
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
            let value = displayBoard[row][col];
            if (value != 0) {
                if(value != fullBoard[row][col]){
                fill(255, 48, 48);
                }
                else{
                fill(0);
                }
                text(value, col * cellSize + cellSize/2, row * cellSize + cellSize/2 + 50);
            }
            }
        }
    }


    function displayNumbers(){
        textAlign(CENTER, CENTER);
        textSize(32);
        fill(0);

        let displayX = 650;
        let displayY = 250;
        let buttonSize = 70;
        let gap = 10;

        let sx = mouseX - 435;
        let sy = mouseY - 50;
        for (let i = 1; i <= 9; i++) {
            let row = (i - 1) / 3;
            let col = (i - 1) % 3;

            let x = displayX + col * (buttonSize + gap);
            let y = displayY + row * (buttonSize + gap);
            let isHovering = sx > x && sx < x + buttonSize && sy > y && sy < y + buttonSize;
            if(mousePressed && isHovering){
            fill(255, 227, 200);
            noStroke();
            rect(x, y, buttonSize, buttonSize,12);
            }
            
            fill(0); 
            text(i, x + buttonSize/2, y + buttonSize/2);
            noFill();   
            stroke(0);
            strokeWeight(2);
            rect(x,y, buttonSize, buttonSize, 12);
        }
        colorNumbers();
        
    }

    
    function colorNumbers() {
        let startX = 650;
        let startY = 250;

        let buttonSize = 70;
        let gap = 10;

        for (let i = 1; i <= 9; i++) {

            let completed = false;

            switch(i) {
            case 1: completed = engine.allNums(engine.countOnes(displayBoard, fullBoard)); break;
            case 2: completed = engine.allNums(engine.countTwos(displayBoard, fullBoard)); break;
            case 3: completed = engine.allNums(engine.countThrees(displayBoard, fullBoard)); break;
            case 4: completed = engine.allNums(engine.countFours(displayBoard, fullBoard)); break;
            case 5: completed = engine.allNums(engine.countFives(displayBoard, fullBoard)); break;
            case 6: completed = engine.allNums(engine.countSixes(displayBoard, fullBoard)); break;
            case 7: completed = engine.allNums(engine.countSevens(displayBoard, fullBoard)); break;
            case 8: completed = engine.allNums(engine.countEights(displayBoard, fullBoard)); break;
            case 9: completed = engine.allNums(engine.countNines(displayBoard, fullBoard)); break;
            }

            if (completed) {

            let row = (i - 1) / 3;
            let col = (i - 1) % 3;

            let x = startX + col * (buttonSize + gap);
            let y = startY + row * (buttonSize + gap);

            fill(186);
            stroke(0);
            strokeWeight(2);
            rect(x, y, buttonSize, buttonSize, 12);

            fill(0);
            text(i, x + buttonSize/2, y + buttonSize/2);
            }
        }
    }
    function mousePressedSudoku() {

        let sx = mouseX - 435;
        let sy = mouseY - 50;


        if(!gameStarted){
            setGameDifficulty(displayBoard);

            if(sx > sWidth/2 - 150 && sx < sWidth/2 + 150 && sy > 240 && sy < 340){
            gameStarted = true;
            startTime = millis();
            elapsedTime = 0;
            }
        }
        if(sx > -200 && sx < -100 && sy > 300 && sy < 350){
            giveHint();
        }

        if(sx > -210 && sx < -90 && sy > 400 && sy < 450){
            gameWon = false;
            gameStarted = false;
            selectedRow = -1;
            selectedCol = -1;
            errors = 0;
            fullBoard = engine.createBoard();
            engine.copyBoard(displayBoard, fullBoard);
            difficulty = "Easy";
            engine.easyBoard(displayBoard);
            startTime = millis();
            elapsedTime = 0;
        }

        if (sx >= 0 && sx < sWidth && sy >= 50 && sy < 680) {
            let r = (int)(sy - 50) / cellSize;
            let c = (int)(sx / cellSize);
        
            if (r >= 0 && r < 9 && c >= 0 && c < 9) {
            if(displayBoard[r][c] == 0 || displayBoard[r][c] != fullBoard[r][c]){
                if (r == selectedRow && c == selectedCol) {
                selectedRow = -1;
                selectedCol = -1;
                } 
                else {
                selectedRow = r;
                selectedCol = c;
                selectedNumber = 0;
                }
            }

            else if (displayBoard[r][c] != 0) {
                if(displayBoard[r][c] == fullBoard[r][c]){
                if (selectedNumber == displayBoard[r][c]) {
                selectedNumber = 0;
                }
                else{
                    selectedNumber = displayBoard[r][c];
                }

                }
                
                selectedRow = -1;
                selectedCol = -1;
            }
            
            }
        } 


        else{
            
            let displayX = 650;
            let displayY = 250;
            let buttonSize = 70;
            let gap = 10;

            if(sx >= displayX && sx < displayX + buttonSize * 3 + gap *2 &&
            sy >= displayY && sy < displayY + buttonSize * 3 + gap *2){

            let row = (int)((sy - displayY) / (buttonSize + gap));
            let col = (int)((sx - displayX) / (buttonSize + gap));

            let clicked = row * 3 + col + 1;
            
            if(selectedRow != -1 && selectedCol != -1){
                
                if(displayBoard[selectedRow][selectedCol] == clicked && displayBoard[selectedRow][selectedCol] != fullBoard[selectedRow][selectedCol]){
                displayBoard[selectedRow][selectedCol] = 0;
                }
                else{
                displayBoard[selectedRow][selectedCol] = clicked;
                if (fullBoard[selectedRow][selectedCol] == clicked) {
                    selectedNumber = clicked;
                    selectedRow = -1;
                    selectedCol = -1;
                    
                    
                }
                else{
                    errors++;
                }

                }
                
            }
            
            }
        
        }
    }

    function giveHint(){
        if(selectedRow != -1 && selectedCol != -1){
            displayBoard[selectedRow][selectedCol] = fullBoard[selectedRow][selectedCol];
            selectedRow = -1;
            selectedCol = -1;
        }

    }

    function keyPressed(){
        if(gameWon && key == ENTER){
            gameWon = false;
            gameStarted = false;
            selectedRow = -1;
            selectedCol = -1;
            errors = 0;
            startTime = millis();
            elapsedTime = 0;
            fullBoard = engine.createBoard();
            engine.copyBoard(displayBoard, fullBoard);
            difficulty = "Easy";
            engine.easyBoard(displayBoard);

        }

        if((key == BACKSPACE || key == DELETE) && selectedRow != -1 && selectedCol != -1){
            if(displayBoard[selectedRow][selectedCol] != 0 && displayBoard[selectedRow][selectedCol] != fullBoard[selectedRow][selectedCol]){
            displayBoard[selectedRow][selectedCol] = 0;
            return;
            }

        }
        if (key >= '1' && key <= '9') {
            selectedNumber = key - '0';
            if(selectedRow != -1 && selectedCol != -1){
            if(displayBoard[selectedRow][selectedCol] == selectedNumber && displayBoard[selectedRow][selectedCol] != fullBoard[selectedRow][selectedCol]){
                displayBoard[selectedRow][selectedCol] = 0;
            }
            else{
                displayBoard[selectedRow][selectedCol] = selectedNumber;
                if (fullBoard[selectedRow][selectedCol] == selectedNumber) {
                selectedRow = -1;
                selectedCol = -1;
                
                
                }
                else {
                errors++;
                }

            }
            }
        }
    }

    function highlightSelected() {
        if (selectedRow != -1 && selectedCol != -1) {
            let val = displayBoard[selectedRow][selectedCol];
            if(val != 0 && val != fullBoard[selectedRow][selectedCol]){
            fill(196, 196, 196);    
            }
            else{
            fill(255, 31, 143);

            }
            
            
            noStroke();
            rect(selectedCol*cellSize, selectedRow * cellSize + 50, cellSize, cellSize);
        }
        
        else if (selectedNumber > 0) {
            
            for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (displayBoard[r][c] == selectedNumber && displayBoard[r][c] == fullBoard[r][c]) {
                fill(255, 31, 143);
                noStroke();
                rect(c * cellSize, r * cellSize + 50, cellSize, cellSize);
                }
            }
            }
        }
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

        mousePressedSudoku();
        

    };


   
}
}