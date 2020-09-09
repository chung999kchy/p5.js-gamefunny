var car;
var carCan = [];
var run =true;
var score=0;
function setup(){
    var canvas= createCanvas(400,600);
    canvas.parent('sketch-div');
    car = new Car();
    carCan.push(new CarBar());
}

function draw(){

    background(255);
    
    car.show();
    if(frameCount % 40 ==0){
        carCan.push(new CarBar());
    }
    for (var i = 0; i<carCan.length;i++){
        carCan[i].show();
        carCan[i].update();
        if (carCan[i].hit(car)) {
           run =false;
        }

        if (carCan[i].offscreen()){
            score ++;
            carCan.splice(i,1);
        }

    }
    
    fill(255,0,0);
	textAlign(LEFT)
	text("score = " + score, 20, 20)
    
    if (run == false){
        noLoop();
    }
}
    


function keyPressed(){
    if(keyCode == LEFT_ARROW){
        car.left();
    }

    if (keyCode == RIGHT_ARROW){
        car.right();
    }

    if (keyCode == UP_ARROW){
        car.up();
    }

    if (keyCode == DOWN_ARROW){
        car.down();
    }
}

