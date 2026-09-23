"use strict";
// y si requiero de un objeto igual?
//Métodos dentro de objetos
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
    let flaSuperman = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
})();
//# sourceMappingURL=TiposPersonalizados.js.map