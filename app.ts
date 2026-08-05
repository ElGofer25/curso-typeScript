
//  Al darle 'const' a una variable, esta no puede ser reasignada, 
// pero si puede ser modificada si es un objeto o un array.
const msg = "Hello, TypeScript ";

//  Al darle 'let' a una variable, esta puede ser 
// reasignada y modificada.
let msf = "Hola de nuevo"
msf = 'Fernando'; 
//msf = 123; --> Esto da error porque TypeScript infiere 
// que msf es de tipo string.
console.log(msg + msf);

const hero = {
    name: 'Ironman',
    age: 45,
    powers: ['Volar', 'Inteligencia', 'Fuerza']
};
console.log(hero);