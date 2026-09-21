"use strict";
(() => {
    const agregarNumber = (a, b) => {
        return a + b;
    };
    // Forma acortada
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo ha sido salvado';
    //Creamos una nueva variable sin ningún tipo
    { /*
    Podemos reducir los tipos aceptados por myFunction asignandole directamente el tipo Function, así:
        let myFunction: Function;
    */
    }
    let myFunction;
    // Ahora, si le damos directamente otro tipo de dato TS lo rechaza
    //! myFunction = 10;
    //! console.log(myFunction)// --> Esto dará 10
    myFunction = addNumbers;
    console.log(myFunction(1, 2)); // --> Esto dará 3
    myFunction = greet;
    console.log(myFunction('Alice')); // --> Esto dará "Hola Alice"
    myFunction = saveTheWorld;
    console.log(myFunction()); // --> Esto dará "El mundo ha sido salvado"
    // Y si queremos definir una función que solo acepte y reciba números?
    let myNewFunction;
    let myNewFunctionString;
})();
//# sourceMappingURL=Func-type.js.map