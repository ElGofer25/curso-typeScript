"use strict";
(() => {
    //El incoveniente de hacerlo es que no podemos declarar un argumento obligatorio 
    // después de uno opcional.
    //En este caso estamos indicando que upper es opcional, su valor por defecto es 'false'
    // Es decir, si no lo mandamos, será false
    const fullName = (firstName, lastName, upper = false) => {
        { /*/ // Si el firstName no viene
          if (!firstName ) {
              throw new Error('Nombre requerido')
        }*/
        }
        return `${firstName} ${lastName || 'No last name'}`;
    };
    // Al poner el signo de interrogación le decimos a TS que el lastName es opcional
    // esto dará un undefined, por eso ponemos el  || 'No last name'
    const name = fullName('Tony');
    console.log({ name });
})();
//# sourceMappingURL=parametros.js.map