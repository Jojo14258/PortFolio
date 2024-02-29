class GrassEater extends Cell {
    color = [255,165,0];
   
    hunger = 0;
    count = 0

    getGrassNeighbours() {
        const neighbours = this.getValidNeighbourCells();

        return neighbours.filter(({x, y}) => {
            return grid[y][x] instanceof Grass
         });
    }
    
    eat({x, y}) {
        const whatIsEaten = grid[y][x];
        this.hunger = 0;
        this.count++
        this.moveTo({x, y});
        if (whatIsEaten instanceof PoisonedGrass) return this.die();

    }
    multiplyGrassEater(){
        this.count = 0;
        const emptyCells = this.getEmptyNeighbourCells();

        if (emptyCells.length == 0) return;

        const {x, y} = getRandArray(emptyCells);

        grid[y][x] = new GrassEater(x, y);
        }


    step() {
        if (!super.step()) return;
        this.hunger++;
        if (this.hunger >= 30) return this.die();
        if (this.getGrassNeighbours().length > 0){
            console.log("MIAM");
            this.eat(getRandArray(this.getGrassNeighbours()));
        }
        if (this.count >= 5){
            this.multiplyGrassEater()
        } 
    }

    constructor(x, y) {
        super(x, y);
    }
}