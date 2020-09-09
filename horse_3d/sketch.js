let spritesheet;
let spritedata;
let animation = []; 
let horses =[];

function preload(){
    spritedata = loadJSON("./horse/horse.json");
    spritesheet = loadImage("./horse/horse.png");
}

function setup(){
    createCanvas(640, 660);
    let frames = spritedata.frames;
    for (let i=0;i<frames.length; i++){
        let pos= frames[i].position;
        let img= spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }
    for (let i=0; i<5; i++){
        horses[i] = new Sprite(random(0.1, 1), 0, 100*i, animation);
        
    }
}
function draw(){
    background(255);
    //image(animation[frameCount % animation.length], 0, 0);
    for (let horse of horses){
        horse.show();
        horse.animate();

    }
}