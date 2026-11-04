import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
    // .then( resp => console.log(resp) )
    // .catch( error => console.log(error))
    .then(pokemon => console.log(pokemon.sprites.front_default))
