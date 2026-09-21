# SECCIÓN 4: FUNCIONES Y OBJETOS

## 1. FUNCIONES
````
Una función es un bloque de código reutilizable que realiza una tarea específica.

En TypeScript puede:

    Recibir datos mediante parámetros.
    Ejecutar una serie de instrucciones.
    Devolver un resultado con return, o no devolver nada.

Ejemplo:

    function sum(a: number, b: number): number {
    return a + b;
    }


Cuando declaremos una función hay que específicar el tipo de dato de retorno:
    En este ejemplo no se declara aún el tipo de dato de retorno:
         function returnName(){

            return hero;
         }
    Aquí ya tenemos el tipo de dato de retorno:

        function returnName(): string{

        }
````

## 2. Argumentos

### Argumentos Obligatorios
````
    Por defecto, los parámetros de una función son obligatorios. Al llamar a la función debemos enviar todos los argumentos que se hayan definido.

        const fullName = (firstName: string, lastName: string): string => {
            return `${firstName} ${lastName}`;
        }

        const name = fullName('Tony', 'Stark');

    Si llamamos a fullName('Tony'), TypeScript mostrará un error porque falta el argumento lastName.
````

### Argumentos opcionales:
````
    Para indicar que un parámetro no es obligatorio se añade el signo ? después
    de su nombre.

        const fullName = (firstName: string, lastName?: string): string => {
            return `${firstName} ${lastName || 'No last name'}`;
        }

        const name = fullName('Tony');

    Cuando no enviamos lastName, su valor es undefined. Por eso podemos utilizar
    || para devolver un valor alternativo.

    Los parámetros opcionales deben colocarse después de los parámetros
    obligatorios.

````

## 3.Parámetros por defecto:
````
    Podemos asignar un valor por defecto a un parámetro utilizando el signo =.
    Si no enviamos ese argumento al llamar a la función, TypeScript utilizará
    automáticamente el valor indicado.

        const fullName = (
            firstName: string,
            lastName?: string,
            upper: boolean = false
        ): string => {
            return `${firstName} ${lastName || 'No last name'}`;
        }

        const name = fullName('Tony');

    En este ejemplo, upper recibe el valor false porque no se ha enviado el
    tercer argumento. También podemos sustituir su valor al llamar a la función:

        const name = fullName('Tony', 'Stark', true);

    Un parámetro con valor por defecto se comporta como opcional al llamar a la
    función, por lo que no es necesario añadirle el signo ?.

    Si queremos conservar el valor por defecto y enviar un argumento posterior,
    podemos pasar undefined en su posición.
````
## 4.Argumentos Rest
````
    Los parámetros Rest permiten que una función reciba una cantidad variable
    de argumentos. Para declararlos utilizamos tres puntos (...) delante del
    nombre del parámetro.

        const fullName = (
            firstName: string,
            ...restArgs: string[]
        ): string => {
            return `${firstName} ${restArgs.join(' ')}`;
        }

        const superman = fullName(
            'Rudeus',
            'Notos',
            'Greyrat',
            'Quagmire'
        );

    En este ejemplo, firstName recibe 'Rudeus'. Los demás argumentos se guardan
    dentro de restArgs como un arreglo de strings:

        ['Notos', 'Greyrat', 'Quagmire']

    Como restArgs es un arreglo, podemos utilizar métodos de los arreglos. El
    método join(' ') une sus elementos en un solo string, separados por espacios.

    Un parámetro Rest puede recibir cero o más argumentos y siempre debe ocupar
    la última posición en la lista de parámetros de la función.

````

## 5.Tipo función
````
Si una función de flecha solo tiene una línea (y su retorno lo permite) podemos 'abreviar' o reducir aún más la función. Por ejemplo:

    --> Forma tradicional:

    const addNumber = (a : number, b : number) => {
        return a+b;
    }

    --> Forma acortada:

    const addNumber = (a : number, b : number) => a + b;
    const greet = ( name : string ) => `Hola ${ name }`;
    const saveTheWorld = () => 'El mundo ha sido salvado';


Una función también puede guardarse dentro de una variable. Podemos indicar que
la variable acepta funciones utilizando el tipo Function:

    let myFunction: Function;

    myFunction = addNumber;
    myFunction = greet;
    myFunction = saveTheWorld;

Con este tipo, TypeScript impide asignar valores que no sean funciones:

    myFunction = 10; // Error: 10 no es una función

Sin embargo, Function es un tipo muy general: no especifica cuántos parámetros
recibe la función, los tipos de esos parámetros ni el tipo que devuelve.

Para tener un tipado más preciso debemos escribir la firma de la función:

    let myNewFunction: (x: number, y: number) => number;

Esta firma indica que myNewFunction solamente puede almacenar una función que:

    1. Reciba dos parámetros de tipo number.
    2. Devuelva un valor de tipo number.

Por ejemplo:

    myNewFunction = addNumber;    // Correcto
    myNewFunction = greet;        // Error
    myNewFunction = saveTheWorld; // Error

También podemos definir una firma para funciones que trabajen con strings:

    let myNewFunctionString: (x: string, y: string) => string;

En un tipo función, la flecha => separa los parámetros del tipo de retorno:

    (parámetros) => tipoDeRetorno

Los nombres x e y sirven para describir los parámetros. Para comprobar si una
función es compatible, TypeScript tiene en cuenta principalmente sus tipos y el
tipo de retorno.

````
