"use strict";
(() => {
    function makingUser(nombreOb, segundoNom, country = 'Mexico') {
        return `${nombreOb} ,${segundoNom || 'No tiene segundo nombre'} ,${country}`;
    }
    const name = makingUser('Diego');
    console.log({ name });
})();
//# sourceMappingURL=Pruebas.js.map