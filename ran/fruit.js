function Fruit(){
    this.size = 20;
    this.x = Math.floor(random(width/this.size)) * this.size;
    this.y =Math.floor(random(height/this.size)) * this.size;

    this.show = function(){
        fill(255,0,0);
        square(this.x, this.y, this.size);
    }

    this.update = function(){
    
    }
}