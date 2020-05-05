class Ball extends BaseClass{
  
    constructor(x,y){
      var options ={
        isStatic : true
      }
     
      super(x,y,40,40,options);
      
      
      
    }
    display(){
     //this.body.position.x = mouseX;
     //this.body.position.y = mouseY;
  
     strokeWeight(3);
     stroke("blue");
     fill("red");
      super.display();
    }
    
  }