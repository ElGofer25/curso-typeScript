//Ejercicio 10 — void y never
{/*
Clasifica conceptualmente cada situación como void o never:

Una operación termina normalmente pero no devuelve ningún dato.
R: Void


Una operación siempre provoca un error y nunca termina normalmente.
R: Never

Una operación únicamente muestra información y termina.
R: Never. Aquí la situación es algo imprecisa, pero como menciona que si muestra información, no puede ser void.

Una operación entra en un proceso que nunca finaliza.
R: Never

No necesitas implementar las funciones.

Objetivo: entender la diferencia entre "no devuelve un valor" y "nunca llega a devolver".    
    
*/}



//Ejercicio 9 — null vs undefined
{/*

Indica cuál concepto representa mejor cada situación:

Una variable todavía no ha recibido ningún valor.
R: Undefined

El sistema buscó una fotografía de perfil y determinó explícitamente que el usuario no tiene una.
R: null

Un dato existe en el programa, pero todavía no fue inicializado.
R: Undefined


Una fecha de cancelación se establece explícitamente como inexistente.
R: Null

No necesitas escribir código.

Objetivo: distinguir semánticamente null y undefined.

*/}




//Ejercicio 8 — any

/*Tienes los siguientes tipos de información:

edad de un usuario;
R: Aquí, el tipo de dato que retorna siempre será un número entero. Nunca un string, nunca un bool
Bajo ese concepto, un any no conviene puesto que si tenemos la certeza del tipo de dato

respuesta proveniente de una fuente cuyo contenido todavía desconoces;
R: Aquí si conviene declarar any, si tipamos la variable o arreglao o cualquier otra estructura de dato, entonces el dato que recibimos tendrá una alta probabilidad de rebote.

nombre de un producto;
R: No usaría any, se trata de un string.


estado activo/inactivo;
R: No usaría any, el estado se puede representar con un bool.


dato temporal cuyo formato todavía no conoces.
R: Usaría any. No sabemos el formato, si tipamos la estructura de dato caemos en un gran sesgo.

Decide en cuáles sería razonable utilizar any y en cuáles no.

Justifica cada decisión.

Objetivo: entender que any existe, pero que no debe utilizarse simplemente para evitar errores de TypeScript.*/





//Ejercicio 7 — Enum

/*Un pedido puede encontrarse únicamente en uno de estos estados:

        ç

Crea una representación utilizando enum.

Después explica por qué utilizar un enum podría ser preferible a escribir manualmente esos textos cada vez.

Condiciones:

        No utilices objetos.
        No utilices condicionales.
        No necesitas implementar ninguna lógica para cambiar de estado.*/

(()=>{


   {/*
    Considero que, si está la posibilidad de reciclar código pues, hay que hacerlo.
    De hecho esta idea se fundamenta en los principios de la POO, ahorrar código también es
    ahorrar tiempo.
    */} 
    enum Status{
        pendiente = 'PENDING',
        pagado = 'PAID',
        enviado = 'SENT',
        entregado = 'DELIVERED',
        cancelado = 'CANCELED',
    }
    console.log(Status.cancelado)

})();





//Ejercicio 6 — Array o tupla

/*Para cada caso, decide si utilizarías array o tupla y justifica tu respuesta:

Lista de precios de 100 productos.
R: Requiere de un array. Si usamos tuplas tendriamos que definir el tipo de dato 100 veces. lo que es ilógico tratandose de un mismo tipo de dato. El array es la mejor opción.

Coordenadas X, Y y Z.
R: En este caso, es mejor un array. Podemos definir solamente 'numer' para los tres valores. Por el contrario, si escogemos 'tuple', tenemos que definir tres veces el tipo 'number'.
# Error, es mejor la tupla.

Lista de nombres de estudiantes.
R: El mismo caso que las situaciones pasadas. Conviene un array, la cantidad de datos no esta definida, por lo que conviene más un array que reciba strings. Como la situación menciona que se trata solo de nombres no pasa nada.


Datos RGB de un color.
R: El formato usa solamente una tercia de números. A diferencia de un array, si considero que debería de usarce una tupla, pues se restringe a solo ingresar numeros, evitando así el ingreso de otro tipo de dato.


Lista de temperaturas registradas durante un mes.
R: Aquí usaria un array tipado

    const temp : (number)[] = [];

    No me agrada la idea de usar una tupla porque habría que declarar el tipo number 30 veces.

Nombre, edad y estado de actividad de un usuario.
R; Aquí usaría una tupla. Al tener tres campos tipados correspondientes a los datos que se esperan recibir, se reducen en gran medida los errores.

Aquí no importa escribir código. Quiero comprobar que entiendes la diferencia conceptual.*/



//Ejercicio 5 — Tuplas

/*Representa los siguientes datos mediante tuplas:

coordenada: posición X y posición Y;
usuario: nombre y edad;
producto: nombre, precio y disponibilidad;
resultado de examen: nombre del alumno, calificación y aprobado/reprobado.

Condiciones:

Respeta exactamente el orden indicado.
Cada posición debe tener un tipo definido.
No utilices arrays normales cuando la estructura sea fija.

Objetivo: distinguir cuándo una tupla tiene más sentido que un array.*/

//Coordenada
const coordinate : [number, number] = [-12, 4];

//USUARIO
const userNam : [string, number] = ['Diego', 23]

//producto
const things : [string, number, boolean] = ['Diego', 25, true]

// resultado de examen
const grades : [string, number, boolean] = ['Diego', 100, true]


//Ejercicio 4 — Arrays

/*Representa por separado:

una lista de cinco edades;
una lista de cinco nombres;
una lista de valores que indiquen si cinco usuarios están activos.

Condiciones:

Cada array debe contener un único tipo de dato.
No utilices any.
No necesitas recorrer los arrays ni utilizar métodos.

Objetivo: acostumbrarte a la declaración y estructura de arrays tipados.*/
const ages : (number)[] = [12, 13, 11, 21, 23]
const names : (string)[] = ['Diego', 'Melissa', 'Estefania', 'Mario', 'Sara']
const isActive : (boolean)[]= [true, false, false, false, true]



//Ejercicio 3 — ¿TypeScript lo permite?
/*Para cada situación, indica si TypeScript debería aceptarla o producir un error y explica por qué.

Una variable comienza almacenando el número 25 y posteriormente intenta almacenar un texto.
R: Si se puede pero todo depende de como se declare inicialmente. Por ejemplo:
        const number ---> No permite que su valor cambie, se mantiene siempre igual
        let number   ---> En este caso si puede cambiar:
                let number = 10
                    number = 'Diego'

    La comparativa por si sola entre let y const nos permite deducir que let si permite cambiar el tipo de dato almacenado.
    Pero, si previamente tipamos el valor que recibe la variable:
            let number: number = 10
            number = 'diego'
    Esto ya da error porque le estamos diciendo a typescript que el valor de number será de tipo number.

Una variable comienza almacenando true y después recibe false.
R:  Si, es posible. Tanto true como false son booleanos, entonces, si la variable cambia de valor
    ya sea que este tipada o no, TS no peta porque el valor es del mismo tipo


Una variable de texto cambia de "México" a "Japón".
R:  Si, es posible. Es el mismo caso que la situación anterior pero enfocado en un tipo de dato string


Una variable numérica cambia de 10 a 10.5.
R:  Si, es posible. Aquí sucede algo interesante, y es que Typescript abarca int y float en un solo tipo, number. Es decir, si tipamos nuestra variable como:

        let number: number = 12

    Esta variable aun prodría recibir un dato del tipo float

Una variable declarada como any cambia de número a texto.
R: Si, es posible. Any básicamente significa 'cualquiera', lo que le indica a TS que esa variable puede recibir cualquier tipo de dato.


Comentario:

Pese a que, hasta cierto punto es posible jugar con el tipado de TS, lo más recomendable es no dejar que TS asuma los tipos de datos. Es decir, hay que jugar como si fuese de tipado estricto, aunque en algunas declaraciones lo sea.



No necesitas escribir un programa completo.

Objetivo: entender qué significa que TypeScript sea tipado.*/




// Ejercicio 2: Tipado explícito
const userName : string = 'Diego';
const age : number = 23;
const numPlayers: number = 120;
const isFree: boolean = true;
const reviews: number = 12.5



// Ejercicio 1: Inferir datos
const nombre = 'Diego'; // El compilador infiere que es de tipo string
const edad = 25;        // El compilador infiere que es de tipo number
const altura = 1.75;    // El compilador infiere que es de tipo number
const tieneLicencia = true; // El compilador infiere que es de tipo boolean
const ciudad = "Madrid";   // El compilador infiere que es de tipo string

console.log(`Nombre: ${nombre}, Edad: ${edad}, Altura: ${altura}, Tiene licencia: ${tieneLicencia}, Ciudad: ${ciudad}`);