"use strict";
(() => {
    function saludos(nombre) {
        return `Hola, ${nombre}`;
    }
    const name = saludos('Rudeus');
    const greetings = (name, message) => {
        return `Hola ${name} ${message}`;
    };
    const fullGreetings = greetings('Diego', 'Cómo estás?');
    console.log(fullGreetings);
})();
(() => {
    function productBy(a, b) {
        return a * b;
    }
    ;
    const numbers = productBy(5, 12);
    console.log(numbers);
    const otherFunct = (a, b) => (a * b);
    const otherNumbers = otherFunct(4, 4);
    console.log(otherNumbers);
})();
(() => {
    function myInput(input) {
        return input;
    }
    const typing = prompt(myInput('Escribe tu string: '));
    console.log(typeof typing);
    console.log(typing);
})();
(() => {
    function myFullName(name, middleName, lastName) {
        return `${name} ${middleName} ${lastName}`;
    }
    const stockName = myFullName('Diego', '', 'Chavez');
    console.log(stockName);
})();
(() => {
    function fullName(nombre, apellido) {
        return `${nombre} ${apellido || 'Empty apellido'}`;
    }
    const entireName = fullName('Diego', 'Fernando');
    console.log(entireName);
})();
(() => {
    function ejercicio7(mirName, favouriteLang) {
        return `${mirName} ${favouriteLang}`;
    }
    ;
    const languageDict = {
        english: 'Inglés',
        aleman: 'Aleman',
        español: 'Español',
    };
    const input = prompt('Type your name: ');
    const secondInpunt = prompt('Type your language: ');
})();
(() => {
    function makingUser(nombreOb, segundoNom, country = 'Mexico') {
        return `${nombreOb} ,${segundoNom || 'No tiene segundo nombre'} ,${country}`;
    }
    const name = makingUser('Diego');
    console.log({ name });
})();
(() => {
    function entireNombre(firstName, ...restArgs) {
        return `${firstName} ${restArgs.join(' ')}`;
    }
    const mapelle = entireNombre('Diego', 'Elgofer25');
    console.log(mapelle);
})();
(() => {
})();
(() => {
    const plusTwo = (a, b) => a + b;
    const addnumbers = plusTwo(5, 6);
})();
(() => {
    const regards = (regards) => staticReg;
    const staticReg = regards('Estoiasjabsdjhabsjdkbajskhbdjkabsdkajbsdkjabsdkjba');
})();
(() => {
    function primerFun(a, b) {
        return a + b;
    }
    const numeros = primerFun(3, 2);
    function segundaFun(greetings) {
        return `${greetings}`;
    }
    const saludar = segundaFun('Hola, programador');
    function terceraFun(text) {
        return 'THIS IS. MY TEXT LOLASJDNBAONDOSANODAIOSNDOASINDOAN';
    }
    let myFunction = [primerFun, segundaFun, terceraFun];
    console.log(myFunction);
})();
(() => {
    function firstFunct14(a, b) {
        return a + b;
    }
    function secondFunct14(a, b) {
        return a * b;
    }
    function thirdFunct14(nomr) {
        return `${nomr}`;
    }
    const asign = thirdFunct14('Diego');
    let myStock;
    myStock = firstFunct14;
    myStock = secondFunct14;
})();
(() => {
    let stockStrings;
    function myFirstFunct15(a, b) {
        return `${a} ${b}`;
    }
    ;
    function mySecodFunction15(a) {
        return `${a}`;
    }
    ;
    function myThirdFunct15(a) {
        return a;
    }
    stockStrings = myFirstFunct15;
    stockStrings = mySecodFunction15;
})();
(() => {
    function myFunc17(basePrice, quantity) {
        return basePrice * quantity;
    }
    function myFirstFunct17(a, b) {
        return `${a} ${b}`;
    }
    ;
    const prices = myFunc17(22, 12);
    let sotckFunc17;
    sotckFunc17 = myFunc17;
})();
(() => {
    const nombreFunct18 = (nombre, apellido) => {
        return `${nombre} ${apellido}`;
    };
    const fullname = nombreFunct18('Diego', 'Fernando');
    function nombreFunct19(nombre, apodo) {
        return `${nombre} ${apodo}`;
    }
    function nombreFunct20(nombre, pais = 'Mexico') {
        return `${nombre} ${pais}`;
    }
    function fullNameFunc20(nombre, ...restArgs) {
        return `${nombre} ${restArgs}`;
    }
})();
//# sourceMappingURL=Bloque1.js.map