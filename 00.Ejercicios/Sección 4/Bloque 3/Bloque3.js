"use strict";
(() => {
    function myFunction(age) {
        return age >= 18;
    }
    const validateAge = myFunction(13);
    console.log(validateAge);
})();
(() => {
    function myFunction(numero) {
        return (10 > numero && numero < 20);
    }
    ;
    const myNumber = myFunction(12);
    console.log(myNumber);
})();
(() => {
    function myFunction(age, isActive) {
        return (age >= 18 && isActive == true);
    }
    let data = myFunction(13, false);
    data = myFunction(21, true);
    data = myFunction(12, true);
})();
(() => {
    function myFunction(numero) {
        return (numero % 2 == 0);
    }
    ;
    const impar = myFunction(11);
    const par = myFunction(12);
})();
(() => {
    function myFunction(price, quantity) {
        return price * quantity;
    }
    let tryValues = myFunction(12, 3);
    tryValues = myFunction(12.5, 4);
})();
(() => {
    function myFunction(price, taxes = 16) {
        return price + taxes;
    }
    let test = myFunction(22);
    test = myFunction(22, 12);
})();
(() => {
    function myFunction(a, b) {
        return a === b ? a : a > b ? a : b;
    }
    let values = myFunction(3, 4);
})();
(() => {
})();
(() => {
})();
//# sourceMappingURL=Bloque3.js.map