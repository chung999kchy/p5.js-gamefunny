function Tile(xx, yy){
    this.w = 20;
    this.x = xx;
    this.y = yy;

    this.show = function(){
        fill(0,0,234);
        square(this.x, this.y, this.w);
    }

    
}