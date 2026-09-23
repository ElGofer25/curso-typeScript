(()=>{
//{ Definimos un type para definir la estructura de un objeto, esto nos permite tener una mejor lectura del código y nos ayuda a evitar errores de tipado}
    type Avenger = {
        nick: string,
        ironman: string,
        vision: string,
        activos: boolean,
        poder: number,
    }

    const avengers : Avenger={
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activos: true,
        poder: 1500,
    }
    // const {poder, vision} = avengers
    // console.log(poder.toFixed(2), vision.toUpperCase())
    // Esto es una opción pero complica bastante la lectura del código, por lo que es mejor usar interfaces para definir la estructura de los objetos
    // {const printAvenger = (avengers:{
    //     nick: string,
    //     ironman: string,
    //     vision: string,
    //     activos: boolean,
    //     poder: number,
    // }) =>{
    // }}

    //Podemos desestructurar el objeto directamente en los parámetros de la función, esto nos permite tener una mejor lectura del código y nos ayuda a evitar errores de tipado
    const printAvenger = ( {ironman, ...resto} : Avenger) =>{
    
        console.log(ironman, resto)
    }
    // printAvenger(avengers);

    //Cómo tomar un valor  un valor de un arreglo:
    const avengersArr = ['Robert Downey Jr.', 'Tom Holland', 'Mark Ruffalo', 'Chris Hemsworth', 'Chris Evans'];

    //Ponemos llaves porque es un arreglo, no queremos el primero, pero si el segundo, por lo que ponemos una coma para saltarnos el primero y luego ponemos el nombre de la variable que queremos tomar del arreglo
    const [, ironman, ] = avengersArr;
    const [captain, ironmain, ] = avengersArr; 
    console.log({ ironman })

})();
