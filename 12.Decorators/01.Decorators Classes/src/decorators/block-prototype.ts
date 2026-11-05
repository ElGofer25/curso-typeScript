// Esto es un ejemplo de un decorador

function printToConsole(constructor: Function){
    console.log(constructor);
}

const printToConsoleConditional = (print : boolean = false) : Function => {
    if( print ){
        return printToConsole;
    } else {
        return () => {};
    }
}

//Ejemplo de un decorador para bloquear una clase (que no se pueda instanciar o expandir)
const blockPrototype = function(constructor: Function){
    //Usamos una característica de ES6 para congelar el prototipo de la clase y que no se pueda modificar
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


//Colocamos el decorador en la clase para que se ejecute cuando se instancie la clase
//Para probarlo, podemos cambiar el valor de la propiedad publicApi y veremos que no se puede modificar
@blockPrototype
@printToConsoleConditional(true)
export class Pokemon{
    public publicApi: string = 'https://pokeapi.co';
    constructor(
        public name:string,
    ){}
}