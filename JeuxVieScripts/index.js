// Code di-dessous:
//taille en pixels
const canvasSize = 700;
//Nombre case par ligne/ colonne
const gridSize = 80;
//taille case
const cellSize = canvasSize/gridSize
const grid = Array.from({length: gridSize}, () => {
    return Array.from({ lenght:gridSize }, () => null);
});

function getRandArray(arr) {
    return arr[Math.floor(random(arr.length))];
}

function spawnCells(Type, quantity) {
    for (let i = 0; i < quantity; i++){
        const x = Math.round(random(gridSize - 1));
        const y = Math.round(random(gridSize - 1));
        grid[y][x] = new Type(x, y);
    }
}
function GroupedRock() {
    const xx = Math.round(random(gridSize - 1));
    const yy = Math.round(random(gridSize - 1));
    grid[yy][xx] = new Rock(xx, yy);

    let lastRock = grid[yy][xx];

    for (let i = 0; i<6; i++){
        const emptyCells = lastRock.getEmptyNeighbourCells();
        if (emptyCells.length == 0) return;
        const {x, y} = getRandArray(emptyCells);
        grid[y][x] = new Rock (x, y);
        lastRock = grid[y][x]
    }
}
function setup() {
    noStroke();
    createCanvas(canvasSize, canvasSize);
    background('#acacac');
    frameRate(5);

    spawnCells(Grass, 40);
    spawnCells(GrassEater, 12);
    spawnCells(bomb, 6);
    spawnCells(PoisonedGrass, 2);
    

    for (let i = 0; i < 4; i++){
        GroupedRock()
    }
}

function draw() {
    background('#acacac');
    for (const line of grid){
        for (const cell of line){
            if (cell) {
                cell.step();
                fill (cell.color);
                rect (cell.x*cellSize, cell.y*cellSize, cellSize)
            }
        }
    }
}