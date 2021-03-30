class Tree{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            stiffness: 0.04,
            length: 10
        }
        this.sling = loadImage('tree.png/PluckingMangoes');
        
        this.tree = Constraint.create(options);
        World.add(world, this.tree);
    }

    display(){
        image(this.tree,200,20);  
        
        }
    }
    
