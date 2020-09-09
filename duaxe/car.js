function Car(){
    this.x = width/2;
    this.y = height*5/6;
    this.w = 40;
    this.h = 80;
    var img = loadImage("./car.jpg");
    this.show = function(){
       image(img,this.x-this.w/2, this.y-this.h/2, this.w, this.h);
    }

    this.update = function(){

    }

    this.left = function(){
        if (this.x > this.w){
            this.x -=20;
        }
    }

    this.right = function(){
        if (this.x <width - this.w){
            this.x += 20;
        }
    }

    this.up = function(){
        if (this.y > this.h){
            this.y -=20;
        }
    }

    this.down = function(){
        if (this.y < height-this.w){
            this.y +=20;
        }
    }
}