class Ball{
    constructor(x,y,radius){
        var options = {
            'restitiution':0.8,
            'friction':0.1,
            'density':1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
      //  this.image = loadImage("polygon.png");
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;   

        fill(176, 219, 83);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
       //  imageMode(CENTER);
        //image(this.image, pos.x,pos.y,70, 70);
    }
}