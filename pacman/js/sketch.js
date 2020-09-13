var fps = 10;
var pac;
var tiles = [];
var fps =10;
var maps;
var ghosts =[];
var xChange = 20;
var yChange = 0;
var speed = 20;
var fruits= [];
var run = true;

function preload(){
    mapData = loadJSON("./assets_pacman-map.json");
}

function setup(){
    createCanvas(560, 560);
    frameRate(fps);
    pac = new Pac( 0, 20);
    ghosts.push(new Ghost(360, 100,0));
    ghosts.push(new Ghost(0, 540,1));
    ghosts.push(new Ghost(520,540,2));
    maps = mapData["layers"][0]["data"];
    for (let i = 0;i<maps.length;i++){
        yy = floor(i/28);
        xx = i%28;
        if (maps[i] != 7 && maps[i] != 8 && maps[i] != 9 && maps[i] != 6){
            tiles.push(new Tile(xx*20, yy*20));
        }else{
            fruits.push(new Fruit(xx*20,yy*20));
        }
    }
    

}

function draw(){
    background(0);
    
    // show the wall
    for (let i=0;i<tiles.length;i++){
        tiles[i].show();
    }

    //show fruits
    for (let i=0;i<fruits.length;i++){
        fruits[i].show();
    }

    if (run){        
        

        // key pressed
        if (keyIsDown(LEFT_ARROW)) { 
            xChange =  -speed;
            yChange = 0;
            pac.direction = 1;
        } 
        if (keyIsDown(RIGHT_ARROW)) { 
            xChange =  speed;
            yChange = 0;
            pac.direction = 0;
        } 
        if (keyIsDown(UP_ARROW)) { 
            xChange = 0;
            yChange = -speed;
            pac.direction = 2;
        } 
        if (keyIsDown(DOWN_ARROW)) {
            xChange = 0;
            yChange = speed;
            pac.direction = 3;
        }
        pac.update(xChange, yChange);
        
        
        if (pac.hit(maps)==false){
            pac.set(pac.x - xChange, pac.y - yChange);
        }
        pac.show();
        if (pac.defeats(ghosts) == true) run=false;
        if (pac.eat(maps)== true){
            fruitRemoveIndex = pac.eatFruit(fruits);
            if (fruitRemoveIndex != -1)  fruits.splice(fruitRemoveIndex,1);
        }
        

        //show ghosts
        for (let i=0;i<ghosts.length;i++){
            
            // check on the right road 
            while (true){
                a = ghosts[i].x;
                b = ghosts[i].y;
                ghosts[i].update();
                if (ghosts[i].hit(maps)==false){
                    t = random([0,1,2,3]);
                    ghosts[i].set(a,b,t);
                }else {
                    ghosts[i].time ++;
                    break;
                }
            } 
            ghosts[i].show();       
        }
    }
}