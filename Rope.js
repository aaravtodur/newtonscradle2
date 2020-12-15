class rope{
    constructor(bodyA, bodyB, xOffset) {
        this.xOffset = xOffset;
        //this.yOffset = yOffset;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.xOffset, y: 0}
        }
       // this.body2 = body2;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        //strokeWeight(2);

		strokeWeight(2);
		stroke(255);
	
		line(posA.x, posA.y, posB.x+this.xOffset, posB.y);
    }
}