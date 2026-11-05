import axios from "axios";
import { Pokemon } from "../Interfaces";


//Cómo parámetro, declaramos el parámetro que esperamos recibir
//Podemos expecificar el tipo de la data que vamos a recibir, en este caso es <Pokemon>; La respuesta también es de tipo pokemon: ):Promise<Pokemon> =>{
export const getPokemon = async( pokemonId: number ):Promise<Pokemon> =>{
    // const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    // console.log(resp.data.name)
    // return resp.data;
    return data;
}


