function Bird(){
    this.y =height/2;
    this.x = 64;
    this.score = 0;
    this.gravity = 0.1;
    this.lift =-6;
    this.velocity= 0;
    this.linkImage = "./image/bird.png";
    var imgBird = loadImage(this.linkImage);
    
    this.show =function(){
        image(imgBird,this.x, this.y, 40,40);
    }

    this.up = function(){
        this.velocity += this.lift;  
    }
 
    this.update = function(){
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > height-40){
            this.y =height-40;
            this.velocity =0;
        }
        if (this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
        
    }
    this.upScore = function(){
        this.score ++;
        console.log(this.score);  
    }

}