"use strict";
(() => {
    //De esta forma evitamos que el compilador nos de un error al 
    // asignar un valor de tipo diferente a la variable
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    //Esto da el caracter en la posición 0 de la cadena
    console.log(avenger.charAt(0));
    avenger = 150.2323;
    console.log(avenger.toFixed(2)); // Esto limita el número de decimales a 2, en este caso 150.23
})();
//# sourceMappingURL=any.js.map