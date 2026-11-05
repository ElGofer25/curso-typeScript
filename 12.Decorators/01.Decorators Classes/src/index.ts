import { Pokemon } from "./decorators/pokemon-classes";


const charmander = new Pokemon('Charmander');

//Recuerda que el as any es para evitar que ts me marque error al intentar agregar una propiedad que no existe en la clase, ya que ts es un lenguaje tipado y no permite agregar propiedades a objetos que no están definidas en su tipo
(Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander);