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
        return numero >= 10 && numero <= 20;
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
        return price + (price * taxes / 100);
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
    function myFunction(temperature) {
        return temperature < 15
            ? 'Frío'
            : temperature <= 25
                ? 'Templado'
                : 'Caliente';
    }
    let myVar = myFunction(10);
    myVar = myFunction(15);
    myVar = myFunction(26);
})();
(() => {
    function myFunction(grades) {
        return grades >= 70;
    }
    function myOtherFunction(name, grades) {
        const status = myFunction(grades);
        return [name, grades, status];
    }
})();
(() => {
    function myFunction(coordinate) {
        const x = coordinate[0];
        const y = coordinate[1];
        return (x >= 0 && x <= 100) && (y >= 0 && y <= 100);
    }
    let myVar = myFunction([12, 12]);
})();
(() => {
})();
(() => {
    const myFunction = (number) => {
        return number > 0;
    };
    const myOtherFunction = (number) => {
        return number >= 100;
    };
    let myVar;
    myVar = myFunction;
    myVar = myOtherFunction;
})();
//# sourceMappingURL=Bloque3.js.map