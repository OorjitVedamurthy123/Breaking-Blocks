class Hold{
    constructor(bodyA,pointB){
       var options = {
           bodyA : bodyA,
           pointB : pointB,
           stiffness:0.04,
           length:5
           
       }
       this.pointB = pointB
       this.hold = Constrained.create(options);
       World.add(world,this.hold);
       
    }
   

      fly(){
          this.hold.bodyA = null;
      }  

    
    display(){
        if(this.hold.bodyA){
        var pointA = this.hold.bodyA.position;
        var pointB = this.pointB
        strokeWeight(2);
        stroke("white");
     line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    
    }
    
}