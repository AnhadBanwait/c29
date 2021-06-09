class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.s1=loadImage("sprites/sling1.png");
        this.s2=loadImage("sprites/sling2.png");
        this.s3=loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.s1,225,25);
        image(this.s2,195,25)
    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,0)
            if(pointA.x<240){
            strokeWeight(4);
            line(pointA.x-25, pointA.y, pointB.x-5, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+25, pointB.y);
            image(this.s3,pointA.x-28,pointA.y-5,10,20)}
            else{
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x-5, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+25, pointB.y);
                image(this.s3,pointA.x+28,pointA.y-5,10,20)  
            }
        }
    }
    
}