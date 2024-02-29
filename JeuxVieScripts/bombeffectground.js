class bombeffectground extends Cell {
    color = [139,69,19];

   
   

    step() {
        if (!super.step()) return; 
    }

    constructor(x, y) {
        super(x, y);
    }
}