(()=>{

    //Podemso definirle propiedades a la clase, pero no podemos definirle un tipo a la clase
    class Avenger {
        name;
        power;
        constructor(name = 'Unknown', power = 0){
            this.name = name;
            this.power = power;
        }
    }

    
    class FlyingAvenger extends Avenger {
        flying;
        constructor(){
            super()
            this.fliying = true;
        }
    }
    
    const hulk = new Avenger('Hulk', 100);
    const thor = new Avenger('Thor', 150);
    const ironMan = new FlyingAvenger('Iron Man', 120);

    console.log(hulk)

})();