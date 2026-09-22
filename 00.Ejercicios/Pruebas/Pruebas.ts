(()=>{
    function makingUser(nombreOb: string, segundoNom?: string, country : string = 'Mexico') : string {
        return `${nombreOb} ,${segundoNom || 'No tiene segundo nombre'} ,${country}`
    }

    const name = makingUser('Diego')
    console.log({name})
})();