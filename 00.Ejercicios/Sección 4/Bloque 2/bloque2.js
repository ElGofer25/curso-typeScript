"use strict";
(() => {
    let myTuple = ['Diego', 23, false];
})();
(() => {
    const functE3 = (data) => {
        return `${data}`;
    };
    const values = functE3([5, 4]);
})();
(() => {
    function myArray(numeros) {
        return numeros;
    }
    console.log(typeof myArray);
})();
(() => {
    function thisO(name, pais = 'Mexico') {
        return `${name} ${pais}`;
    }
    const nombre = thisO('Diego');
    const otroNombre = thisO('Diego', 'Japon');
})();
(() => {
    function thisO(name, apodo) {
        return `${name} ${apodo || 'Sin apodo'}`;
    }
    const prueba1 = thisO('Diego', 'Gofer');
    const prueba2 = thisO('Diego');
})();
(() => {
    function thisO(name, ...restArgs) {
        return `${name} ${restArgs.join('')}`;
    }
    const prueba1 = thisO('Diego');
    const prueba0 = thisO('Diego', 'cHAVEZ');
    const prueba2 = thisO('Diego', 'cHAVEZ', 'GARCIA');
})();
(() => {
    function first(text) {
        return `${text}`;
    }
    function second(numero) {
        return numero;
    }
    let myvar;
})();
//# sourceMappingURL=bloque2.js.map