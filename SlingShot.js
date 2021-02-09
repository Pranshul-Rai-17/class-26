class SlingShot {
    constructor(body1,point2) {
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness:0.04,
            length : 10
        }
        this.pointB = point2;

        this.Slingshot = Constraint.create(options);
        World.add(world,this.Slingshot);
}
display(){
 var pointA = this.Slingshot.bodyA.position;
 var pointB = this.pointB;
 strokeWeight(6);  
 line(pointA.x , pointA.y , pointB.x , pointB.y);
}
fly(){
    this.Slingshot.bodyA= null;

}








}      

