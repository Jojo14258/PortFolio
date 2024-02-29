class Cell {
    x; 
    y;

    color = [0, 0, 0];

    lastStep = 0;
    lastFrame = 0;

    getNeighbourCells (){
        const neighbours = [];

        for (let y = -1; y <= 1; y++){
            for (let x = -1; x <= 1; x++){
                if (x == 0 && y == 0) continue;
                neighbours.push({
                    x: this.x + x,
                    y: this.y + y,
                });
            }
        }

        return neighbours;
    }

    getValidNeighbourCells() {
        const neighbours = this.getNeighbourCells();

        return neighbours.filter(({x, y}) =>  {
            if (y < 0 || y >= gridSize) return false;
            if (x < 0 || x >= gridSize) return false;
            return true;
        });
    }

    getEmptyNeighbourCells() {
        const neighbours = this.getValidNeighbourCells();

        return neighbours.filter(({ x, y}) =>{
            return grid[y][x] == null;

        })
    }

    die() {
        grid[this.y][this.x] = null;
    }

    moveTo({x, y}){
        grid[this.y][this.x] = null;
        this.y = y;
        this.x = x;
        grid[y][x] = this;
    }

    step() {
        if (this.lastFrame == frameCount) return false;
        this.lastFrame = frameCount;
        return true;
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}