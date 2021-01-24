class Block {
    constructor(x,y){
        var options={
           restitution: 0.4
        }
this.width=30;
this.height=40;
        this.body=Bodies.rectangle(x,y,30,40,options);
        World.add(world,this.body)
    }
    display(){
        var pos= this.body.position;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rect(0,0,this.width,this.height);
        pop();
    }
}