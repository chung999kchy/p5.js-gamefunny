var myShip ;
var warShip =[];
var shooter = [];
var fps = 10;
var shooter_war =[];
var run = true;
var score=0;
var imageFire;
var bg, sound_eat, sound_end, music;

function preload(){
    bg = loadImage("./assetss/background-black.png");
    sound_eat = loadSound("./Pew_Pew.mp3");
    sound_end = loadSound("./Crowd Boo.mp3");
    music =loadSound("./cuchillthoi.mp3");
    imageFire = loadImage("./assetss/pngegg.png");
}

function setup(){
    createCanvas(600, 400);
    frameRate(fps);
    
    myShip = new MyShip();
    warShip.push(new WarShip());
    music.setVolume(0.3);
    music.loop();

}

function draw(){
    background(bg);
    if(run){

        myShip.show();

        if (frameCount % 5 ==0){
            warShip.push(new WarShip());
        }

        if (frameCount %3 ==0){
            shooter.push(new Shooter(myShip));
        }

        for (let i=0; i<shooter.length; i++){
            shooter[i].show();
            shooter[i].update();
            for(let j=0;j<warShip.length;j++){
                if (shooter[i].hit(warShip[j])){
                    score ++;
                    sound_eat.play();
                    image(imageFire, warShip[j].x, warShip[j].y, warShip[j].w, warShip[j].h);
                    warShip.splice(j,1);
                    shooter.splice(i,1);
                    
                }
            }
        }
        for (let i=0; i<warShip.length;i++){
            warShip[i].show();
            warShip[i].update();
            if(frameCount % 15 ==0){
                shooter_war.push(new Shooter(warShip[i]));
            }

            if(warShip[i].hit(myShip)){
                sound_end.play();
                run =false;
            }
            if (warShip[i].offscreen()){
                warShip.splice(i,1);
            }
        }
        for (let i=0;i<shooter_war.length;i++){
            shooter_war[i].show();
            shooter_war[i].update_war();

            if (shooter_war[i].hit(myShip)){
                sound_end.play();
                run=false;
            }
            if (shooter_war[i].offscreen()){
                shooter_war.splice(i,1);
            }
        }
    }
    if (!run){
        music.stop();
    }

    fill(255,0,0);
	textAlign(LEFT)
	text("score = " + score, 20, 20)
}

function keyPressed(){
    if (keyCode == LEFT_ARROW){
        myShip.left();
    }else if(keyCode == RIGHT_ARROW){
        myShip.right();
    }
}