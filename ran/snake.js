function Snake(x_goc,y_goc){
    this.size = 20;
    this.x = x_goc;
    this.y = y_goc;

    this.show_head = function(){
        fill(0,0,234);
        square(this.x, this.y, this.size);
    }

    this.show = function(){
        fill(0,255,0);
        square(this.x, this.y, this.size);
    }
    
    this.update = function(x_change, y_change){
        this.x += x_change;
        this.y += y_change;
    }

    this.getX = function(){
        return this.x;
    }
    
    this.getY = function(){
        return this.y;
    }

    this.anroi = function(fruit){
        if (this.x == fruit.x && this.y == fruit.y) return true;
        else return false;
    }

    this.loser = function(){
        if (this.x < 0 || this.x > width || this.y <0 || this.y>height ){
            return true;
        }else return false;
    } 

}