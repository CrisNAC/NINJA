class Ninja{
    constructor(name){
        this.name=name;
        this.salud=100;
        this.velocidad=3;
        this.fuerza=3;
    }

    sayName(){
        console.log("Nombre del ninja: "+` ${this.name}`);
    }
    
    showStats() {
        console.log(`Nombre: ${this.name} Salud: ${this.salud} Velicidad: ${this.velocidad} Fuerza: ${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();