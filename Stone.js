class Stone{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            stiffness: 0.04,
            length: 2
        }
        this.stone = loadImage('stone.png/PluckingMangoes');
        
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
    }

    display(){
        image(this.stone,200,20);  
        
        }
    }
    