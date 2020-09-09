function MyShip() {
    this.w = 40;
    this.h = 40;
    this.x = width/2 -this.w/2;
    this.y = height - this.h;
    this.space = 30;
    var img= loadImage("./assetss/pixel_ship_yellow.png");
    this.linkImage ="./assetss/pixel_laser_yellow.png";
    this.show = function() { 
        image(img, this.x, this.y, this.w, this.h);
    }

    this.update = function(){
    }

    this.left = function(){
        if (this.x > this.space){
            this.x -= this.space;
        }
    }

    this.right = function(){
        if(this.x < width - this.space - this.w){
            this.x += this.space;
        }
    }

}