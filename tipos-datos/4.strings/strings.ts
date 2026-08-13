(()=>{

    const hola: string = "Hola mundo";
    const linternavered: string = "Linterna verde";
    const batman: string = 'Batman';

    console.log( hola.toLocaleUpperCase() );
    console.log( `I'm ${batman}` );

    console.log( batman[10]?.toLocaleUpperCase() || 'No esta definido' );

})()