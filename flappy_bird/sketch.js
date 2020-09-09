var bird;
var pipes =[];
var run =true;

function setup (){
    createCanvas(600, 400);
    bird = new Bird();
    pipes.push(new Pipe());
    bg = loadImage("./image/bg_5.png");
}
function draw(){
    if(run){
        background(bg);
        bird.update();
        bird.show();

        if (frameCount % 100==0){
            pipes.push(new Pipe());  
        }

        for (var i=pipes.length -1; i>=0;i--){
            pipes[i].show();
            pipes[i].update();
            if (pipes[i].hit(bird)){
                run = false;
            }

            if (pipes[i].offscreen()){
                pipes.splice(i,1);   
            }

            if (pipes[i].x == bird.x-2  ){
                bird.upScore();
                continue;
            }
        }
        //document.write(bird.score);
                
    }    
}

function keyPressed(){
    if (key ==' '){
        bird.up();   
    }
}