(()=>{
    const fullName = ( firstName : string , lastName ?: string ) : string =>{
      {/*/ // Si el firstName no viene
        if (!firstName ) {
            throw new Error('Nombre requerido')
      }*/}
        
        return `${ firstName } ${lastName || 'No last name'}`;
    }
    // Al poner el signo de interrogación le decimos a TS que el lastName es opcional
    // esto dará un undefined, por eso ponemos el  || 'No last name'
    const name = fullName( 'Tony');
    console.log({name})

})();