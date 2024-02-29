class Rock extends Cell {
    color = [128, 128, 128];

   
   

    step() {
        if (!super.step()) return; 
    }

    constructor(x, y) {
        super(x, y);
    }
}