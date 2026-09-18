

// Nunca va a cambiar el valor de una constante
const a: number = 10;

//Puede cambiar a otro valor de tipo number
let b: number = 20;


// Si no inferimos el tipo de dato, TypeScript lo infiere automáticamente
let d;  // d es de tipo any, puede ser cualquier tipo
d = 30; // d es de tipo any, puede ser cualquier tipo
d = 'Hola'; // d ahora es de tipo string
d = true; // d ahora es de tipo boolean


function sayHello( msg: string){
    console.log(msg);
}


 // Función anonima autoinvocada
(() => {
    const z : number = 30;
    console.log(z);



})() //En este último par de parentesis se invoca la función inmediatamente después de ser definida.