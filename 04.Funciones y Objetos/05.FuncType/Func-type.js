"use strict";
(() => {
    const agregarNumber = (a, b) => {
        return a + b;
    };
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo ha sido salvado';
    {
    }
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Alice'));
    myFunction = saveTheWorld;
    console.log(myFunction());
    let myNewFunction;
    let myNewFunctionString;
})();
//# sourceMappingURL=Func-type.js.map