
// y si requiero de un objeto igual?
//Métodos dentro de objetos
(()=>{
   //Que pasa si un parámetro cambia de tipo? Creamos tipos personalizados
    //Type es propio de typescript, y se usa para darle reglas a un objeto
    type Hero ={
        name : string;
        age?: number;
        powers: string[];
        getName: () => string;
    }

    let flash: Hero = {
        name : 'Barry Allen',
        age : 24,
        powers : ['Super velocidad', 'Viajar en el tiempo'],
        getName(){
            return this.name;
        }
    }

    let flaSuperman: Hero= {
        name : 'Barry Allen',
        age : 24,
        powers : ['Super velocidad', 'Viajar en el tiempo'],
        getName(){
            return this.name;
        }
    }

    
})();