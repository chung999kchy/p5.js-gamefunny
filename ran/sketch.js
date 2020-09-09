var snakes = [];
var fruit;
var size =20;
var x_change = size;
var y_change = 0;
var run = true;
function setup(){
    createCanvas(600,600);
    snakes.push(new Snake(0,0));
    snakes.push(new Snake(20,0));
    fruit = new Fruit();
    frameRate(6);
}

function draw(){
    background(0);
    if(run){
        fruit.show();
        len = snakes.length;
        for (var i=0;i<snakes.length-1;i++){
            snakes[i].show();
        }
        snakes[snakes.length-1].show_head();

        if (keyIsDown(LEFT_ARROW)) {
            x_change = -size;
            y_change =0;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            x_change = size;
            y_change =0;
        }
        if (keyIsDown(UP_ARROW)) {
            y_change =-size;
            x_change =0;
        }
        if (keyIsDown(DOWN_ARROW)) {
            y_change = size;
            x_change = 0;
        }
        var xx =snakes[snakes.length-1].getX() + x_change;
        var yy =snakes[snakes.length-1].getY() + y_change;
        snakes.push(new Snake(xx,yy));
        if (snakes[snakes.length -1].loser()) run = false;
        if (!snakes[snakes.length -1].anroi(fruit)) {
            snakes.shift();
        }
        else{
            fruit = new Fruit();
        }
    }
}

