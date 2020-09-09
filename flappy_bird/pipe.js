function Pipe(){
    this.top =random(3*height/7);
    this.bottom = random(3*height/7     );
    this.linkImage="./image/pipe.jpg";
    this.linkImage2="./image/pipe2.jpg";
    this.x =width;
    this.w = 30;
    this.speed  = 1 ;
    var img =loadImage(this.linkImage);
    var img2 =loadImage(this.linkImage2);

    this.hit = function(bird){
        if (bird.y <this.top || bird.y > height - this.bottom){
            if (bird.x > this.x && bird.x < this.x + this.w){
                return true;
            }
        }
        return false;
    }

    this.show = function(){
        image(img,this.x,0,this.w,this.top);
        image(img2,this.x, height-this.bottom, this.w, this.bottom)
    }

    this.update = function(){
        this.x -= this.speed;
    }

    this.offscreen = function(){
        if (this.x < -this.w){
            return true;
        }else {
            return false;
        }
    }
}