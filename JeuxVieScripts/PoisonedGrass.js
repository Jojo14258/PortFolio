
class PoisonedGrass extends Grass {
  
    color = [144, 238, 144]
    multiplyCount = 0;

    multiply() {
        const emptyCells = this.getEmptyNeighbourCells();

        if (emptyCells.length == 0) return;

        const {x, y} = getRandArray(emptyCells);

        grid[y][x] = new PoisonedGrass (x, y);
    }

    step () {
        this.duration++
        this.multiplyCount++;
        if (this.multiplyCount%9 == 0){
            this.multiply();
            }
        }
    constructor(x,y){
        super(x, y)
    }
}