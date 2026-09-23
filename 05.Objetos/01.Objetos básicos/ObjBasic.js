"use strict";
(() => {
    //El tipo se pone casí de inmediato
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super fuerza'],
        // getNombre(){
        //     return this.name;
        // }
    };
})();
//Métodos dentro de objetos
(() => {
    //Declaramos que getName no recibe ningun argumento con '()' u que retorna un string
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
})();
//# sourceMappingURL=ObjBasic.js.map