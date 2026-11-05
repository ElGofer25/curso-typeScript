import { printObject, genericFunction, genericArrowFunction } from "../generics/generics";
import { Villain } from "../Interfaces";



{/*
const name: string = 'Pilar';

console.log( genericFunction(3.141592).toFixed(2))

// console.log( genericFunction('Pilar').toFixed(2)) --> Error: Property 'toFixed' does not exist on type 'string'.
console.log( genericFunction(name).toUpperCase())

 // console.log( genericFunction(false).toFixed(2))--> Error: Property 'toFixed' does not exist on type 'boolean'.
console.log( genericArrowFunction(new Date().getDate()))    
    
*/}

const deadpool = {
    name: 'Deadpool',
    realName: 'Winston',
    dangerLevel: 130
}
console.log( genericArrowFunction<Villain>(deadpool).dangerLevel)
