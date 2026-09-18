
//Ejercicio 1: Ficha básica de un vehículo — Fácil
/*
Representa mediante variables independientes: marca, año, precio, disponibilidad y si es eléctrico.
Condiciones: no declares explícitamente ningún tipo; después, en comentarios, 
indica qué tipo consideras que TypeScript infirió para cada variable. No uses any.
*/
(()=>{
    const marca = 'Chevrolet'; // Inferirá tipo string
    const año = 2009; // Inferirá tipo number
    const precio = 300000; // Inferirá tipo number
    const disponibilidad = true; // Inferirá tipo boolean
    const isElectric = true; // Inferirá tipo boolean
})();


//Ejercicio 2: Tipado explícito de una cuenta — Fácil
/*
Representa mediante variables independientes: nombre de usuario, edad, saldo disponible, cuenta verificada y país.
Condiciones: esta vez todos los tipos deben escribirse explícitamente. Solo puedes utilizar string, number y boolean. 
No uses inferencia para los tipos solicitados.
*/
(()=>{

    let userName : string = 'diegofer';
    let edad : number = 23;
    let avaliableBalance : number = 250.00;
    let verifiedAccount : boolean = true;
    let country : string = 'America';


})();


//Ejercicio 3: Diseño de variables — Fácil–Medio
/*
Para cada uno de estos datos decide qué tipo utilizarías y justifica brevemente tu decisión: 
    porcentaje de batería --> Number: El porcentaje es en escala de 0 a 100.
    nombre completo --> String: Se trata de una cadena de text
    conexión activa/inactiva --> Booleano: El estado corresponde solo a dos valores, o está activo o no lo está
    cantidad de intentos --> Number: La cantidad de intentos es una sumatoria ordenada y secuencial
    mensaje de error --> String: El mensaje de error pese a tener numeros, se puede asimilar como una cadena textos. 
                                Si fuese al revés, no sería posible agregar un mensaje (suponiendo que sea un mensaje http)
    precio con decimales. --> Se trata de un number. TS relaciona int o float en un solo tipo, number.
Condición: no escribas código; quiero evaluar únicamente tu criterio de tipado.
*/


//Ejercicio 4: Colecciones homogéneas — Fácil
/*
Declara por separado una colección para: 
    siete calificaciones, cinco países, seis estados de disponibilidad y diez precios.

Condiciones:
    todas deben ser arrays tipados; cada array debe aceptar únicamente un tipo de dato; 
    no uses any, tuplas ni métodos de arrays.
*/

(() => {
    let grades : (number)[] = [ 7.5, 8.9, 9, 10, 5, 5, 0];
    let countries : (string)[] = ['México', 'USA', 'Sri Lanka', 'Alemania', 'Japón'];
    let isAvaliable : (boolean)[] = [true, true, false, true, false, false, false];
    let prices : (number)[] = [230, 23, 332, 111, 123, 435, 456, 6676, 5677, 3232];
})();

//Ejercicio 5: Estructuras de posición fija — Fácil–Medio
/*
Representa mediante tuplas: 
    una resolución de pantalla formada por ancho y alto; 
    un usuario formado por nombre, edad y estado activo; un color RGB; 
    y una coordenada tridimensional X, Y, Z.
Condiciones: 
    utiliza exclusivamente tuplas; respeta exactamente el número y orden de elementos indicado; no uses any.
*/
(()=>{
    const screen : [number, number] = [234, 459];
    let user : [string, number, boolean] = ['Damiano Estrada', 23, true];
    let colorRGB : [number, number, number] = [0, 12, 0];
    let coordinate : [number, number, number] = [-12, 23, -90]
})();



//Ejercicio 6: Array o tupla — Medio
/*
Decide cuál utilizarías en cada situación y justifica basándote en la naturaleza de los datos, 
no en la cantidad de veces que tendrías que escribir un tipo: 
    historial de precios de una acción --> Array, el precio fluctua mucho y dado el compartamiento de los arrays, es el que conviene más.
    fecha formada por día, mes y año --> Tuple, unicamente son tres campos. Si lo que queremos es setear el orden entonces conviene más la tupla. 
    lista de correos electrónicos ---> Array, no sabemos la cantidad de emails recibidos. Dada esta premisa, conviene más un arreglo 
    dimensiones de una caja —largo, ancho y alto- --> Tuple, solo tres datos, no ocupamos añadir más valores o campos
    puntuaciones de todos los jugadores de una partida ---> Array, las puntuaciones serán, seguramente, numbers. Lo que no sabemos es cuantos jugadores habrá. 
    latitud y longitud de una ubicación --> Tuple, son solo dos valores de tipo number.
Objetivo: quiero comprobar si ya distingues entre colección de elementos y estructura fija 
con significado por posición.
*/


//Ejercicio 7: Array de tuplas — Medio
/*Necesitas almacenar cinco coordenadas bidimensionales. Cada coordenada tiene exactamente una posición X y una posición Y, pero la cantidad de coordenadas almacenadas puede crecer posteriormente.
Condiciones: utiliza conjuntamente arrays y tuplas. No uses objetos ni any. No necesitas recorrer ni modificar la colección.
Objetivo: combinar dos conceptos que ya conoces sin introducir lógica nueva.
*/
(()=>{
    type Coordenada = [latitud: number, altitud: number];
    let tupleInArray : Coordenada[] = [];
})();

//Ejercicio 8: Estados mediante enum — Fácil–Medio
/*Un proceso de descarga solo puede encontrarse en los estados: pendiente, descargando, pausado, completado y error. 
Representa estos estados con un enum y asigna a cada miembro un valor textual en inglés.
Después explica en dos o tres líneas qué ventaja aporta esta estructura frente a escribir esos textos manualmente en distintas partes de un programa.
Condiciones: no uses objetos ni condicionales.
*/
(()=>{
    enum statusDownload{
        pending = 'pending',
        downloading = 'downloading',
        paused = 'paused',
        completed = 'completed',
        error = 'error'
    }
})();

//Ejercicio 9: Dos enums diferentes — Medio
/*
Define un enum para niveles de prioridad con los valores baja, media, alta y crítica. Define otro para roles de usuario con administrador, 
editor y lector.
Después declara una variable correspondiente a cada categoría utilizando los enums creados.
Objetivo: comprobar que distingues el enum como tipo de las variables que posteriormente pueden utilizar ese tipo.
*/
(()=>{
    enum Priority{
        low = 'Low',
        medium = 'Medium',
        high = 'High',
        critic = 'Critic',
    }

    enum UserRoles{
        admin = 'Admin',
        editor = 'Editor',
        reader = 'Only Read'

    }

    let prior : Priority = Priority.low;
    let roles : UserRoles = UserRoles.admin;




})();

//Ejercicio 10: null o undefined — Medio
/*Para cada situación decide cuál representa mejor la ausencia del valor y justifica tu respuesta: 
    un segundo apellido que el usuario declaró explícitamente que no tiene; 
    una variable que todavía no ha sido inicializada; 
    una imagen buscada en la base de datos y cuya inexistencia quedó confirmada; 
    un resultado que todavía no ha sido calculado;
    una fecha de eliminación que se estableció deliberadamente como inexistente.
Condición: no escribas código. Me interesa la diferencia semántica.
*/
(()=>{
        {/*


    un segundo apellido que el usuario declaró explícitamente que no tiene; 
            R: Null. Aunque la condición deja un sesgo enorme y falta de puntualidad, null define se adapta mejor a esta situación
                Entiendo el enunciado como: Se asigna un capo para almacenar el apellido, pero se deja vacío porque no existe.
    
    una variable que todavía no ha sido inicializada; 
            R: Undefined. El campo se deja intencionalmente 'vacío' pero no necesariamente significa que nunca se usará o que
                el valor no exista.

    una imagen buscada en la base de datos y cuya inexistencia quedó confirmada; 
            R: Null. El mismo enunciado dice que se confirmó que no existe la imagen

    un resultado que todavía no ha sido calculado;
            R: Undefined. La propiedad existe, pero aun no se le asigna valor

    una fecha de eliminación que se estableció deliberadamente como inexistente.
            R: Null. La palabra clave es 'inexistente'
            

        */}
})();

//Ejercicio 11: Uso responsable de any — Medio
/*
Decide si utilizarías any en cada situación según los tipos que conoces actualmente: 
    edad obtenida de un formulario; contenido recibido de una fuente cuyo formato todavía no conoces; 
    precio de un producto; dato temporal que puede cambiar de estructura durante una prueba; 
    estado verdadero/falso de una conexión.
Justifica cada elección.
Importante: evalúalo únicamente con los temas que ya has estudiado. No te exigiré tipos que todavía no conoces.
*/
(()=>{

{/*
    
    edad obtenida de un formulario;
        R: No, no usaría any. La edad es un número entero que se puede representar como 'number'.

    contenido recibido de una fuente cuyo formato todavía no conoces; 
        R: Si usaría any. Si tipamos la respuesta esperada entonces nos deja expuestos a errores y a un sesgo enorme
            Limitando así nuestra capacidad de lectura en gran medida 

    precio de un producto; 
        R: No, no usaría any. Sabemos que el precio de un producto es un dato de tipo number.

    dato temporal que puede cambiar de estructura durante una prueba; 
        R: Si usaría Any. Si la estructura es mutable entonces no es necesario tipar
    
    estado verdadero/falso de una conexión.
        R: No usaría any. Claramente se trata de un boolean
    
    
*/}

})();


//Ejercicio 12: void o never — Medio
/*
Clasifica cada operación conceptualmente: 
    una función termina normalmente y no retorna ningún valor; 
    una función imprime un mensaje en consola, termina normalmente y no retorna ningún valor; 
    una función siempre lanza un error antes de poder terminar normalmente; 
    una función permanece ejecutándose indefinidamente y nunca alcanza su final; 
    una función realiza una operación pero deliberadamente no devuelve ningún dato al código que la llamó.
Importante: aquí he separado explícitamente imprimir/realizar una acción de retornar un valor para eliminar la ambigüedad del ejercicio anterior.
*/
(()=>{
{/*
    Las instrucciones no son para nada específicas, mencionaste 'cada operación'. Eso no me dice nada.

    una función termina normalmente y no retorna ningún valor;
    R: Se trata de un void

    una función imprime un mensaje en consola, termina normalmente y no retorna ningún valor; 
    R:

    una función siempre lanza un error antes de poder terminar normalmente; 
    R: Undefined

    una función permanece ejecutándose indefinidamente y nunca alcanza su final; 
    R: never

    una función realiza una operación pero deliberadamente no devuelve ningún dato al código que la llamó.    
    R: 
*/}
})();

//Ejercicio 13: Corrección de modelado — Medio
/*
Te presentan estas decisiones de diseño. Indica si estás de acuerdo o no y justifica: 

    usar una tupla para guardar una cantidad indefinida de nombres; 
    R: No, ¿Cómo vas a tipar N cantidad de datos?; Es mejor un array.
    
    usar un array para RGB porque sus tres componentes son números; 
    R: No, usaría una tupla. Al delimitar bien el RGB se reduce la cantidad de errores, da más precisión
    
    usar any para una edad porque así se evitan errores de compilación; 
    R: No mames jajaj, any no da un panorama eficiente para evitar errores. Es mejor declarar 'number'.

    usar null cuando el programa determinó explícitamente que un dato no existe; 
    R: Estoy de acuerdo. Null se usa cuando un campo intencionalmente se asigno sin valor.

    usar never en una operación que termina normalmente pero no retorna información; 
    R: No, never no se usa para casos así. El never se usa cuando hay errores, la operación nunca termina o  entra en un ciclo infinito.

    utilizar un enum para representar un conjunto cerrado de estados conocidos.
    R: Si, estoy de acuerdo. Se trata de varios estados que se pueden definir en conjunto

Condición: no escribas código.
*/



// Ejercicio 14: Modelado combinado — Medio
/*
Representa un pequeño conjunto de información de una aplicación utilizando únicamente los temas actuales: 
    una lista de nombres de usuarios; 
    una coordenada actual X/Y; 
    un conjunto cerrado de estados de conexión —desconectado, conectando y conectado—; 
    el estado actual de conexión; 
    un mensaje de error que inicialmente no existe de manera explícita; 
    y un dato externo cuyo formato todavía desconoces.

Condiciones: cada elemento debe utilizar el tipo o estructura que consideres más apropiado. Puedes usar inferencia cuando tenga sentido. No uses objetos, interfaces, funciones, condicionales, ciclos ni conceptos que todavía no hemos visto.
*/
(()=>{
// Lista de nombres de usuarios
    const UsersList : (string)[] = [ 'Diego', 'Damian', 'Sergio'];
    let coordinate : [number, number] = [12, -3];
    enum Status{
        off = 'Desconectado',
        on = 'Conectado'
    };
    let statusConect : boolean = true;
    function callOrsted(): void{}
    let dataUnknown : any = [];

})();