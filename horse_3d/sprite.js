class Sprite {
    constructor(speed, x, y, animation){
        this.animation = animation;
        this.speed = speed;
        this.len = this.animation.length;
        this.index =0;
        this.x =x;
        this.y =y;
        this.w = this.animation[0].width;
    }

    show() {
        let index = floor(this.index) % this.len;
        image(this.animation[index], this.x,this.y, 100, 100);
    }

    animate() {
        this.index += this.speed;
        this.x += this.speed*5;

        if (this.x > width) this.x = -this.w;
    }
}