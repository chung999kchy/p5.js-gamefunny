function WarShip(){
    this.w = 30;
    this.h = 30;
    this.x = random(width- this.w);
    this.y = -this.h;
    this.r = random([0,1,2]);
    this.space = 10;
    this.linkImage ;

    var img, image_shoot;
    if (this.r ==0){
        img = loadImage("./assetss/pixel_ship_blue_small.png");
        this.linkImage = "./assetss/pixel_laser_blue.png";
    }else if (this.r ==1){
        img = loadImage("./assetss/pixel_ship_green_small.png");
        this.linkImage = "./assetss/pixel_laser_green.png";
    }else{
        img = loadImage("./assetss/pixel_ship_red_small.png");
        this.linkImage = "./assetss/pixel_laser_red.png";
    }

    this.show = function(){
        image(img, this.x, this.y, this.w, this.h);
    }

    this.update = function(){
        this.y += this.space;
    }

    this.offscreen = function(){
        if(this.y > height){
            return true;
        }return false;
    }  
    
    this.hit = function(myShip){
        let xx =Math.abs(this.x - myShip.x);
        let yy =Math.abs(this.y - myShip.y);
        if (xx<this.w && yy<this.h) return true;
        return false;
    }

}