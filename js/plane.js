class Plane {
    constructor(){
        this.x= width/2
        this.y=600
        this.width=300
        this.height=200
        this.image=loadImage("images/plane.png")
        //this.velocityY=3;
    }
    display(){
    image(this.image, this.x, this.y, this.width, this.height);
    }
    
    handlePlaneMovement(){
        if(keyDown(LEFT_ARROW)){
            this.x=this.x-15;
        }
        if(keyDown(RIGHT_ARROW)){
            this.x=this.x+15;
        }
    }
}