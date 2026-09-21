(()=>{
    //Qué pasa si le damos a la variable más argumentos de los que la función puede recibir?
    //Para eso usamos el operador rest '...' y lo tipamos
    // algo así: ...restArgs: string[]
    // Para agregar el resto de argumentos usamos el método join de los arreglos, esto porque
    // restArgs es un arreglo de strings

    const fullName = (firstName: string, ...restArgs : string[]): string =>{
        return `${ firstName } ${ restArgs.join( ' ' )}`
    }
    const superman = fullName('Rudeus', 'Notos', 'Greyrat', 'Quagmire');

})();