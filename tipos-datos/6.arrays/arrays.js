"use strict";
(() => {
    //Definimos un array
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Hola']; // Tomará solo valores de tipo number y string
    // Intentamos agregar valores al array
    numbers.push(11);
    numbers.push('Hola');
    //Si agregamos un tipo de dato diferente, el compilador nos dará un error
    //numbers.push(true); // Esto nos dará un error
    //Para especificar los tipos de datos que puede contener un array, podemos usar la siguiente sintaxis
    let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Hola'];
})();
//# sourceMappingURL=arrays.js.map