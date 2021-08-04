class Snowman{
    constructor(x, y, width, height) {
        var options = {
          isStatic:false,
            // 'restitution':2.5,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp");
      
       
        World.add(world, this.body);
      }
      display(){
       
        if(this.body.speed<10){
        //   imageMode(CENTER);
        //  image(this.image,this.body.position.x,this.body.position.y);
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
       }
       else{
         World.remove(world,this.body);
         push();
         this.Visiblity=this.Visiblity-5;
         tint(255, this.Visiblity);
         pop();
       }



      }
     
}





