"use strict";
(() => {
    let developer = {
        name: 'Diego',
        age: 23,
        haveJob: true,
        knownLanguages: ['python', 'java', 'javascript']
    };
    console.log(developer.knownLanguages);
})();
(() => {
    const keyboard = {
        name: 'Keyboard',
        price: 99.99,
        isAvaliable: true,
        description: 'Get your own mechanical keyboard for a better experience typing',
    };
    const monitors = {
        name: 'Ultragear',
        price: 199.99,
        isAvaliable: false,
    };
})();
(() => {
    const myAccount = {
        owner: 'Diego',
        balance: 2300,
        isActive: true,
        consultarSaldo() {
            return `${this.owner} tiene un saldo de ${this.balance}`;
        }
    };
})();
(() => {
    const car = {
        brand: 'Toyota',
        year: 2026,
        isElectric: true,
    };
})();
(() => {
    let myVar;
    myVar = 'diego';
    myVar = {
        nombre: 'Fernando',
        poder: 'Regeneración',
        activo: true,
    };
})();
(() => {
    function myFunction(myVar) {
        if (typeof myVar === 'string') {
            return myVar.toUpperCase();
        }
        else if (typeof myVar === 'number') {
            return myVar * 2;
        }
        return 'Tipo desconocido';
    }
    let myVar;
    myVar = 'Diego';
})();
(() => {
    const myArray = [];
    myArray.push(22);
    myArray.unshift(21);
    myArray.splice(1, 0, 25);
    myArray[2] = "Sandia";
    myArray.splice(1, 1);
    console.log(myArray);
})();
(() => {
    const user = {
        nombre: 'Bruce',
        edad: 35,
        pais: 'USA',
        correo: 'bruce@example.com',
        activo: true,
    };
    const myUser = ({ nombre, pais, activo }) => {
        console.log(nombre, pais, activo);
    };
})();
(() => {
    const user = {
        nombre: 'Diego',
        correo: 'email@email.com',
        edad: 23,
        pais: 'Mexico',
        activo: true,
    };
    const name = user.nombre;
    const { nombre, correo, ...resto } = user;
    console.log(nombre);
    console.log(correo);
    console.log(resto);
})();
(() => {
    const myFunction = ({ name, price, isAvailable }) => {
        return `The product ${name} cost ${price} and is ${isAvailable} available`;
    };
    const monitor = {
        name: 'Monitor LG Ultragear',
        price: 3499,
        isAvailable: true,
    };
    const resultado = myFunction(monitor);
    console.log(resultado);
})();
(() => {
    const myLanguages = [
        'TypeScript',
        'Python',
        'Java',
        'C#',
        'C++',
    ];
    const [ts, , java, , cplus] = myLanguages;
    console.log(ts);
    console.log(java);
    console.log(cplus);
})();
(() => {
    const firstEmployee = {
        name: 'Laura',
        salary: 19500,
        active: false,
    };
    const secondEmployee = {
        name: 'Marco',
        salary: 22000,
        active: true,
    };
    const thirdEmployee = {
        name: 'Ana',
        salary: 18000,
        active: true,
    };
    const empleados = [firstEmployee, secondEmployee, thirdEmployee];
    for (const myeployee of empleados) {
        console.log(myeployee);
    }
})();
(() => {
    let myArray = ['Joshua', 'Mario', 'Diego', 'Raul'];
    for (const temporal of myArray) {
        console.log(temporal);
    }
    for (const temporal in myArray) {
        console.log(temporal);
    }
})();
(() => {
    function myFunction(value) {
        if (Array.isArray(value) === true) {
            console.log('Value is an Array', value);
        }
        else {
            console.log(value, 'is a', typeof value);
        }
    }
    let value = myFunction(['Diego', 23]);
})();
(() => {
    class myGame {
        title;
        price;
        isAvailable;
        constructor(title, price, isAvailable) {
            this.title = title;
            this.price = price;
            this.isAvailable = isAvailable;
        }
        gaming() {
            return `${this.title} kostet ${this.price} euro, aber ist ${this.isAvailable ? 'disponible' : 'no disponible'}`;
        }
    }
    let juego1 = new myGame('Elden Ring', 1200, true);
    let juego2 = new myGame('Hollow Knight', 300, true);
    let juego3 = new myGame('Game X', 950, false);
})();
(() => {
    class myCar {
        brand;
        model;
        currentSpeed;
        constructor(brand, model, currentSpeed) {
            this.brand = brand;
            this.model = model;
            this.currentSpeed = currentSpeed;
        }
        callData() {
            return `El carro ${this.brand} modelo ${this.model} tiene una velocidad de ${this.currentSpeed}`;
        }
    }
    let propsCar = new myCar('Toyota', 'Corolla', '230 Km/H');
    console.log(propsCar.callData());
})();
(() => {
    class myAccount {
        owner;
        balance;
        constructor(owner, balance) {
            this.owner = owner;
            this.balance = balance;
            this.owner = owner;
            this.balance = balance;
        }
        check() {
            return `The owner is ${this.owner} and its balance is ${this.balance}`;
        }
        deposit(amount) {
            this.balance += amount;
        }
    }
    let checkit = new myAccount('Peter', 5000);
    checkit.deposit(1200);
})();
(() => {
    class User {
        name;
        password;
        constructor(name, password) {
            this.name = name;
            this.password = password;
        }
        greeting() {
            return `Bienvenido ${this.name}`;
        }
        message() {
            return `Acceso permitido, ${this.greeting()}`;
        }
    }
    let myCredentials = new User('Diego', 'SoyDiego123');
})();
//# sourceMappingURL=bloque01.js.map