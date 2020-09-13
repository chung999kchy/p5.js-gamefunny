function Pac(xx, yy){
    this.x = xx;
    this.y = yy;
    this.w = 20;
    this.score = 1000;
    this.direction = 0;
    this.count = 2;

    var pac2d = loadImage('./images/pacman_2d.png');
    var pac3d = loadImage('./images/pacman_3d.png');
    var pac2u = loadImage('./images/pacman_2u.png');
    var pac3u = loadImage('./images/pacman_3u.png');
    var pac2l = loadImage('./images/pacman_2l.png');
    var pac3l = loadImage('./images/pacman_3l.png');
    var pac2r = loadImage('./images/pacman_2r.png');
    var pac3r = loadImage('./images/pacman_3r.png');

    this.show = () =>{
        if (frameCount % 2){
            if(this.direction ==0) image(pac2r,this.x, this.y, this.w, this.w);
            if(this.direction ==1) image(pac2l,this.x, this.y, this.w, this.w);
            if(this.direction ==2) image(pac2u,this.x, this.y, this.w, this.w);
            if(this.direction ==3) image(pac2d,this.x, this.y, this.w, this.w);
        }else{
            if(this.direction ==0) image(pac3r,this.x, this.y, this.w, this.w);
            if(this.direction ==1) image(pac3l,this.x, this.y, this.w, this.w);
            if(this.direction ==2) image(pac3u,this.x, this.y, this.w, this.w);
            if(this.direction ==3) image(pac3d,this.x, this.y, this.w, this.w);
        }        
    }

    this.update = (xx,yy) =>{
        this.x += xx;
        this.y += yy;
    }

    this.hit = function(maps){
        //margin 
        if (this.x <0 || this.x >=width || this.y <0 || this.y >= height) return false;
        //tile
        xx =this.x / 20;
        yy =this.y / 20;
        t= maps[yy*28+xx];
        if (t != 6 && t!=7 && t!=8 && t!=9) return false;
        return true;
    }
    this.set = function(xx, yy){
        this.x = xx;
        this.y = yy;
    }

    this.eat = (maps) => {
        xx =this.x / 20;
        yy =this.y / 20;
        t= maps[yy*28+xx];
        if (t != 6 && t!=7 && t!=8 && t!=9) return false;
        return true;
    }

    this.eatFruit = (fruits)=> {
        for (let i=0;i<fruits.length;i++){
            if (this.x == fruits[i].x && this.y == fruits[i].y) return i;
        }
        return Number(-1);
    } 

    this.defeats = (ghosts)=> {
        for (let i=0;i<ghosts.length;i++){
            if (ghosts[i].x == this.x && ghosts[i].y == this.y) return true;
        }
        return false;   
    }
}

