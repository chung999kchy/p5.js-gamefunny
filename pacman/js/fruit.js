function Fruit(xx, yy){
    this.x = xx;
    this.y = yy;
    this.w = 10;
    var cherry = loadImage("./images/cherry.png");

    this.show = () =>{
        image(cherry, this.x+5, this.y+5, this.w, this.w);
    } 

}