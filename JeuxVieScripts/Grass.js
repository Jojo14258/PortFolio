
    
class Grass extends Cell {
  
    color = [58, 171, 31]
    multiplyCount = 0;

    multiply() {
        const emptyCells = this.getEmptyNeighbourCells();

        if (emptyCells.length == 0) return;

        const {x, y} = getRandArray(emptyCells);

        grid[y][x] = new Grass (x, y);
    }

    step () {
        this.multiplyCount++;
        if (this.multiplyCount%6 == 0){
            this.multiply();
            }
        }
    constructor(x,y){
        super(x, y)
    }
}