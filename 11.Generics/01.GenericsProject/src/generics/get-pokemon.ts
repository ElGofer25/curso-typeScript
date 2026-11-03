import axios from "axios";


//Cómo parámetro, declaramos el parámetro que esperamos recibir
export const getPokemon = async( pokemonId: number )=>{
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    console.log(resp)
}

