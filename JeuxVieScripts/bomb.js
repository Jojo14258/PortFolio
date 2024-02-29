class bomb extends Cell {
  
    color = [0, 0, 0];
    time = 0;
    getNeighboursRanged(range) {
        let neighbours = [];

        for (let i = -range; i <= range; i++) {
            for (let j = -range; j <= range; j++) {
                neighbours.push({x:this.x + i, y: this.y + j})
            }
        }

        return neighbours
    }

    getValidNeighboursRanged(range){
        return this.getNeighboursRanged(range).filter(({x, y})=>  {
            if (y < 0 || y >= gridSize) return false;
            if (x < 0 || x >= gridSize) return false;
            return true;
        })
    }
    GetNearestGrassEater(){
        let bombers = []

        for (let i = 1; i < 10 && bombers.length == 0; i++){
            bombers = this.getValidNeighboursRanged(i).filter(({x, y}) => {
                return grid[y][x] instanceof GrassEater
            })
        }

        return bombers[0]
    }

    goNear({x, y}) {
        let newX = this.x;
        let newY = this.y;

        if (x > newX) newX++;
        if (x < newX) newX--;

        if (y > newY) newY++;
        if (y < newY) newY--;

        if (Math.abs(newX - x) <= 1 && Math.abs(newY - y) <= 1){
            
            this.explode(round(random(1, 4)));
            this.die();
        } else {
            this.moveTo({x: newX, y: newY})
        }
    }
   

    step() {
        if (!super.step()) return;


        if (this.GetNearestGrassEater()) {
            this.goNear(this.GetNearestGrassEater());
        }
    }

    explode(radius){
        for (let y = -radius; y <= radius; y++){
            for (let x = -radius; x <= radius; x++){
                    let newX = this.x + x;
                    let newY = this.y + y;

                    if (newX<0 || newY < 0) continue;
                    if (newX>= gridSize|| newY >= gridSize) continue;

                    grid[newY][newX] = new bombeffectground(newX, newY);
                    grid[this.x][this.y] = new bombeffectstone(this.x, this.y);
                    grid[this.x-1][this.y] = new bombeffectstone(this.x-1, this.y);
                    grid[this.x+1][this.y] = new bombeffectstone(this.x+1, this.y);
                    grid[this.x-1][this.y-1] = new bombeffectstone(this.x, this.y+1);
                    grid[this.x+1][this.y+1] = new bombeffectstone(this.x, this.y-1);

                    grid[this.x, this.y][this.x, this.y] = null
                    grid[this.x-1][this.y] = null;
                    grid[this.x+1][this.y] = null;
                    grid[this.x-1][this.y-1] = null;
                    grid[this.x+1][this.y+1] = null;

            }
            
        }
    }
    constructor(x, y) {
        super(x, y);
    }
}