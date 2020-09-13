function Ghost(xx, yy,c){
    this.w =20;
    this.x = xx;
    this.y = yy;
    this.t =0;
    this.score = 100;
    this.time = 0;
    this.color=c; 

    var ghostBlink1 = loadImage("./images/blinky_1.png");
    var ghostBlink2 = loadImage("./images/blinky_2.png");
    var ghostInky1 = loadImage("./images/inky_1.png");
    var ghostInky2 = loadImage("./images/inky_2.png");
    var ghostPinky1 = loadImage("./images/pinky_1.png");
    var ghostPinky2 = loadImage("./images/pinky_2.png");

    this.show = function(){
        if (frameCount % 2){
            if (this.color == 0) image(ghostBlink1,this.x, this.y, this.w, this.w); 
            if (this.color == 1) image(ghostInky1,this.x, this.y, this.w, this.w); 
            if (this.color == 2) image(ghostPinky1,this.x, this.y, this.w, this.w); 
        }else{
            if (this.color == 0) image(ghostBlink2, this.x, this.y, this.w, this.w); 
            if (this.color == 1) image(ghostInky2, this.x, this.y, this.w, this.w); 
            if (this.color == 2) image(ghostPinky2, this.x, this.y, this.w, this.w); 
        }
    }

    this.update = function(){
        if (this.time % 3==0){
            this.t = random([0,1,2,3]);
        }
        a = this.x;
        b = this.y;
        if (this.t==0) this.x += this.w;
        else if (this.t==1) this.x -= this.w;
        else if (this.t==2) this.y += this.w;
        else this.y -= this.w;
    }

    this.hit = function(maps){
        if (this.x <0 || this.x >=width || this.y <0 || this.y >= height) return false;
        xx =this.x / 20;
        yy =this.y / 20;
        t= maps[yy*28+xx];
        if (this.score == t ) return false;
        if (t != 6 && t!=7 && t!=8 && t!=9) return false;
        return true;
    }

    this.set = function(xx, yy, tt){
        this.x = xx;
        this.y = yy;
        this.t = tt;
    }
}