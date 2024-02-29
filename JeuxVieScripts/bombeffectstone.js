class bombeffectstone extends Cell {
    color = ["#928e85"];

   
   

    step() {
        if (!super.step()) return; 
    }

    constructor(x, y) {
        super(x, y);
    }
}
