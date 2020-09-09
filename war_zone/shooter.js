function Shooter(myShip){
    this.w =30;
    this.h =30;
    this.x = myShip.x+ myShip.w/2 - this.w/2;
    this.y = myShip.y;
    this.space = 10;
    this.linkImage=myShip.linkImage;
    
    var img =loadImage(this.linkImage);
    this.show = function(){
        image(img, this.x, this.y,this.w, this.h);
    }

    this.update = function(){
        this.y -= this.space;
    }

    this.update_war = function(){
        this.y += this.space;
    }

    this.offscreen = function(){
        if (this.y <0 || this.y> height) return true;
        return false;
    }

    this.hit = function(myShip){
        let xx =Math.abs(this.x - myShip.x);
        let yy =Math.abs(this.y-myShip.y);
        if (xx<this.w && yy<this.h) return true;
        return false;
    }
    
}