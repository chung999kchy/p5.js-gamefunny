function CarBar(){
    this.w=40;
    this.h=60;
    this.x = random(this.w/2,width-this.w/2);
    this.y = -this.h;
    var img = loadImage("./carBar.jpg");

    this.show = function(){
        image(img, this.x, this.y, this.w, this.h);
    }

    this.update = function(){
        this.y += 5;
    }

    this.hit = function(car){
        var xx =Math.abs(this.x-car.x);
        var yy =Math.abs(this.y-car.y);
        if (xx<this.w && yy<this.h) return true;
        return false;
    }

    this.offscreen = function(){
        if (this.y>height+this.h/2) return true;
        return false;
    }

}