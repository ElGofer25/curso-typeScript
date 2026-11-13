export {};

/*
COMPENDIO 01 — GENÉRICOS, PROMESAS Y AXIOS (SECCIÓN 11)
50 ejercicios con dificultad creciente. Los primeros usan un solo tema de la sección;
los siguientes combinan cada vez más subsecciones y conocimientos de secciones previas
(funciones, objetos, ES6, clases, interfaces, módulos); los últimos integran todo.

SUBSECCIONES
  01 ¿Qué son los genéricos? ... una función genérica relaciona tipos; por qué no any
  02 Cómo leer <T> ............. función normal y flecha, inferencia y tipo explícito
  03 Genéricos con interfaces ... <Interfaz> en la llamada, T extends { length: number }
  04 Agrupar con index.ts ....... barrel, export type e import type
  05 Promesas, async y await .... Promise<T>, then, catch, finally, try/catch
  06 Axios ...................... axios.get<T>, response.data, imprimir no es retornar
                                 (SIMULADO: aquí no hay red ni librerías)

PROGRESIÓN
  Ejercicios   Qué se ejercita
  01–08        <T> en funciones, inferencia o tipo explícito, T extends { length: number }
  09–13        + interfaces y clases como tipo de T
  14–20        + callbacks, parámetros por defecto y rest, tuplas, enum, typeof, Record,
               getters y setters
  21–22        + barrel: export type e import type (se responden en comentarios)
  23–28        Promesas: new Promise, Promise.resolve/reject, async, Promise<T>
  29–34        async/await con try/catch, bucles con await, clases con métodos async
  35–39        then, catch y finally: encadenar, recuperar, propagar, orden de salida
  40–44        Axios simulado: { data: T, status: number }, response.data, status
  45–50        Integración: clases + interfaces + genéricos + promesas + Axios simulado

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN: te dice qué se está modelando.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta.
  3. Copia las instrucciones de COMPRUEBA bajo tu solución. Antes de ejecutar, predice
     qué saldrá. En los ejercicios con promesas, predice también el ORDEN de salida.
  4. Si hay líneas en ESTO DEBE FALLAR, pruébalas una por una: descomenta, comprueba
     que TypeScript marca error y vuelve a comentarla.
  5. Responde EXPLICA en un comentario bajo tu solución.

VOCABULARIO DE LOS ENUNCIADOS
  «lista» = array · «texto» = string · «imprimir» = console.log · «devolver» = return.
  «oculto» = private · «visible» = public · «solo jerarquía» = protected · «estática» = static.
  «cumplir una promesa» = llamar a resolve(valor) · «rechazarla» = llamar a reject(error).
  «supón» = el dato ya es válido; no lo compruebes.
  {llaves} en un texto = valor que sustituyes; las llaves no se escriben.
  En COMPRUEBA, lo que va tras // es lo que imprime console.log. Los textos aparecen
  entre comillas ('hola') pero la consola no las muestra; las listas y objetos sí se
  muestran como en la consola ([ 1, 2 ], { total: 3 }).
  «Salida, en este orden:» = las líneas que verás en la consola, tal cual y en ese orden.

REGLAS COMUNES
  - Cada ejercicio va dentro de su función (() => { ... })(); son independientes, por
    eso puedes repetir nombres. Escribe tus funciones, clases e interfaces dentro de ella.
  - Pon tipos a parámetros y retornos de tus funciones. No uses any, unknown ni
    aserciones con as.
  - Cada función genérica declara un solo parámetro de tipo (<T>). Ese T puede usarse en
    varios parámetros, en el retorno, en listas (T[]), en tuplas ([T, T]), en tipos de
    función ((valor: T) => T), en objetos ({ data: T }) y en Promise<T>.
  - T extends { ... } solo aparece con la forma que pide el enunciado.
  - Un tipo genérico solo se comprueba al compilar: <number> no convierte un valor ni
    valida datos al ejecutar.
  - Con noUncheckedIndexedAccess, lista[i] tiene tipo T | undefined. Una función que
    devuelve T | undefined puede devolverlo tal cual.
  - Una función que «devuelve una lista nueva» no modifica la lista que recibe.
  - Para fallar usa throw new Error('...') (dentro de async o de un manejador) o
    reject(new Error('...')). Los textos de error se escriben EXACTOS.
  - Toda promesa rechazada debe tener un .catch o un try/catch; si no, Node termina con
    un error. En COMPRUEBA ya está resuelto; en tus funciones, no dejes rechazos sueltos.
  - En un catch (error) o en un .catch(error => ...) no hace falta leer el error si el
    enunciado no lo pide; (error) del .catch tiene tipo any y permite error.message.
  - Si dejas activos varios ejercicios con promesas, sus salidas se mezclan en la
    consola. Comenta las líneas de COMPRUEBA de un ejercicio al pasar al siguiente.
  - Las promesas se «simulan»: Promise.resolve(valor), Promise.reject(error),
    new Promise<T>((resolve, reject) => { ... }) y, para esperar, setTimeout(fn, ms).
  - Axios se simula con un objeto { data: T, status: number } devuelto por una promesa.
  - Herramientas que puedes usar: for, for...of, for...in con Object.hasOwn, push, length,
    join, toFixed, toUpperCase, trim, Number, typeof, Array.isArray, ?. y ??.

PROHIBIDO (no se ha visto en el curso)
  - Parámetros de tipo múltiples (<T, U>), clases o interfaces genéricas, keyof,
    Partial, Pick y demás tipos de utilidad.
  - Promise.all, Promise.race, Promise.allSettled.
  - map, filter, reduce, find, includes, sort, Set, Map, spread (...lista) y
    operadores de propagación en llamadas o literales.
  - import y export dentro de los ejercicios (no se pueden poner dentro de una función):
    el barrel se responde con comentarios. Tampoco import axios real ni peticiones de red.
  - Decoradores y namespaces dentro de las funciones.

INTEGRACIÓN (qué ejercita cada bloque)
  Bloque 01–08 ... la lógica vive en la función genérica; el tipo solo la acompaña.
  Bloque 09–22 ... interfaces, clases y secciones previas se combinan con T.
  Bloque 23–44 ... Promise<T>, async/await, then/catch/finally y Axios simulado.
  Bloque 45–50 ... cada ejercicio mezcla genéricos + clases/interfaces + promesas.

No hay soluciones incluidas.
*/

// TRAMO 1 — <T> EN FUNCIONES (01–08)

// !EJERCICIO 01 — Identidad con contador
/*
SITUACIÓN
  Un almacén de datos devuelve cada valor sin modificarlo y cuenta cuántas veces se
  le ha consultado. Debe servir para números, textos y booleanos con una sola función.

QUÉ DEBES HACER
  1. Dentro de la función del ejercicio crea la variable llamadas (number) con valor 0.
  2. Crea la función normal registrar<T>(valor: T): T:
     a) suma 1 a llamadas;
     b) devuelve valor tal cual, sin modificarlo.
  3. Crea la función normal totalLlamadas(): number que devuelve llamadas.
  4. Ejecuta COMPRUEBA. No escribas <...> en las llamadas a registrar: deja que
     TypeScript infiera el tipo.

COMPRUEBA
  console.log(totalLlamadas());                  // 0
  console.log(registrar(3.14159).toFixed(2));    // '3.14'
  console.log(registrar('pilar').toUpperCase()); // 'PILAR'
  console.log(registrar(true));                  // true
  console.log(totalLlamadas());                  // 3

ESTO DEBE FALLAR
  // registrar(false).toFixed(2);       → T es boolean y boolean no tiene toFixed.
  // registrar<number>('3.14');         → '3.14' es string; <number> no lo convierte.
  // const n: number = registrar('7');  → el retorno es string, no number.

EXPLICA
  Si registrar usara any en lugar de <T>, ¿qué línea de ESTO DEBE FALLAR dejaría de
  marcar error y qué pasaría al ejecutarla?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 02 — Último elemento con función flecha
/*
SITUACIÓN
  Un reproductor necesita saber cuál fue el último elemento de una lista de cualquier
  tipo (canciones, números, textos). Una lista vacía no tiene último elemento.

QUÉ DEBES HACER
  1. Crea la función de flecha const ultimo = <T>(lista: T[]): T | undefined:
     a) si lista.length es 0, devuelve undefined;
     b) en otro caso devuelve el elemento de la posición lista.length - 1.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(ultimo([4, 8, 15]));                // 15
  console.log(ultimo(['a']));                     // 'a'
  console.log(ultimo([]));                        // undefined
  console.log(ultimo([10, 20, 30])?.toFixed(1));  // '30.0'
  console.log(ultimo<string>([])?.toUpperCase()); // undefined

ESTO DEBE FALLAR
  // ultimo([1, 2]).toFixed(0);   → el resultado puede ser undefined.
  // ultimo<string>([1, 2]);      → [1, 2] no es una lista de strings.

EXPLICA
  ¿Por qué el retorno es T | undefined y no solo T? ¿En qué lugar de la declaración va
  <T> en una función de flecha y en cuál en una función normal?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 03 — Saludo según la hora (inferencia o tipo explícito)
/*
SITUACIÓN
  Una app muestra un valor distinto según la hora del día. El valor puede ser un texto,
  un número u otro tipo; los tres valores candidatos siempre son del mismo tipo.

QUÉ DEBES HACER
  1. Crea la función normal elegirSegunHora<T>(hora: number, manana: T, tarde: T,
     noche: T): T. Supón que hora es un entero de 0 a 23:
     a) si hora es menor que 12, devuelve manana;
     b) si no, y hora es menor que 19, devuelve tarde;
     c) en cualquier otro caso devuelve noche.
  2. Ejecuta COMPRUEBA. Las cinco primeras llamadas se escriben sin <...>; las dos
     últimas llevan <string | number> escrito por ti.

COMPRUEBA
  console.log(elegirSegunHora(8, 'Buenos días', 'Buenas tardes', 'Buenas noches'));   // 'Buenos días'
  console.log(elegirSegunHora(12, 'Buenos días', 'Buenas tardes', 'Buenas noches'));  // 'Buenas tardes'
  console.log(elegirSegunHora(18, 'Buenos días', 'Buenas tardes', 'Buenas noches'));  // 'Buenas tardes'
  console.log(elegirSegunHora(19, 'Buenos días', 'Buenas tardes', 'Buenas noches'));  // 'Buenas noches'
  console.log(elegirSegunHora(11, 1, 2, 3));                                          // 1
  console.log(elegirSegunHora<string | number>(3, 'madrugada', 15, 0));               // 'madrugada'
  console.log(elegirSegunHora<string | number>(20, 'madrugada', 15, 0));              // 0

ESTO DEBE FALLAR
  // elegirSegunHora(8, 'hola', 5, 6);       → sin <...>, T no puede ser a la vez un texto y un número.
  // elegirSegunHora<string>(8, 'a', 'b', 3); → con <string>, el 3 no es un texto.

EXPLICA
  ¿Por qué la sexta línea de COMPRUEBA necesita <string | number> mientras que la
  quinta no necesita nada?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 04 — Posición de un elemento
/*
SITUACIÓN
  Un buscador debe decir en qué posición está un elemento dentro de una lista de
  cualquier tipo. La lista y el elemento buscado deben ser del mismo tipo.

QUÉ DEBES HACER
  1. Crea la función normal indiceDe<T>(lista: T[], buscado: T): number:
     a) recorre la lista con un for de índice, de la posición 0 a la última;
     b) si el elemento de esa posición es estrictamente igual (===) a buscado,
        devuelve esa posición de inmediato;
     c) si termina el recorrido sin encontrarlo, devuelve -1.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(indiceDe([5, 7, 5], 5));     // 0
  console.log(indiceDe([5, 7, 5], 7));     // 1
  console.log(indiceDe(['a', 'b'], 'b'));  // 1
  console.log(indiceDe([1, 2], 3));        // -1
  console.log(indiceDe([], 1));            // -1

ESTO DEBE FALLAR
  // indiceDe([1, 2, 3], 'a');         → buscado debe ser number porque la lista es de números.
  // indiceDe<number>(['a', 'b'], 1);  → la lista debe ser de números.

EXPLICA
  ¿Qué garantiza <T> entre los dos parámetros que no garantizaría escribir
  (lista: any[], buscado: any)?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 05 — Lista sin repetidos
/*
SITUACIÓN
  Una tienda recibe listas con valores repetidos (códigos, etiquetas, números) y
  necesita una lista nueva con cada valor una sola vez, sin alterar la original.

QUÉ DEBES HACER
  1. Crea la función de flecha const sinRepetidos = <T>(lista: T[]): T[]:
     a) crea una lista vacía resultado de tipo T[];
     b) recorre lista con for...of; para cada elemento recorre resultado con otro
        for...of y marca si algún guardado es === al elemento;
     c) si no estaba, haz resultado.push(elemento);
     d) devuelve resultado. Conserva el orden de la primera aparición.
     No uses Set ni includes, y no modifiques lista.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(sinRepetidos([3, 1, 3, 2, 1]));   // [ 3, 1, 2 ]
  console.log(sinRepetidos(['a', 'a']));        // [ 'a' ]
  console.log(sinRepetidos([]).length);         // 0
  const original = [1, 1, 2];
  const copia = sinRepetidos(original);
  console.log(original.length);                 // 3
  console.log(copia === original);              // false

ESTO DEBE FALLAR
  // const textos: string[] = sinRepetidos([1, 2]);  → el resultado es una lista de números.

EXPLICA
  ¿Por qué copia === original da false? ¿Qué tipo tiene el resultado si recibes una
  lista de textos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 06 — Rotar una lista
/*
SITUACIÓN
  Un carrusel de imágenes avanza moviendo al final los primeros elementos. El carrusel
  puede contener elementos de cualquier tipo.

QUÉ DEBES HACER
  1. Crea la función normal rotar<T>(lista: T[], posiciones: number): T[]. Supón que
     posiciones es un entero >= 0 (puede ser mayor que la longitud de la lista):
     a) si la lista está vacía, devuelve una lista vacía;
     b) calcula corte = posiciones % lista.length;
     c) crea dos listas vacías de tipo T[]: primeros y resto. Recorre lista con for...of
        y un contador que empieza en 0: si el contador es menor que corte, el elemento
        va a primeros; si no, va a resto. Suma 1 al contador en cada vuelta;
     d) crea resultado (T[]), añade con push todos los de resto y después todos los de
        primeros, y devuelve resultado.
     No modifiques lista.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(rotar([1, 2, 3, 4, 5], 2));   // [ 3, 4, 5, 1, 2 ]
  console.log(rotar([1, 2, 3], 3));         // [ 1, 2, 3 ]
  console.log(rotar([1, 2, 3], 7));         // [ 2, 3, 1 ]
  console.log(rotar(['a', 'b'], 0));        // [ 'a', 'b' ]
  console.log(rotar([], 4));                // []

ESTO DEBE FALLAR
  // const numeros: number[] = rotar(['a', 'b'], 1);  → rotar devuelve una lista de textos.

EXPLICA
  ¿Por qué rotar([1, 2, 3], 3) devuelve la lista igual que la original? ¿Qué papel
  tiene el operador % en el cálculo de corte?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 07 — El más largo (T extends { length: number })
/*
SITUACIÓN
  Un editor compara dos valores que tienen longitud (textos o listas) y se queda con
  el más largo. Los dos deben ser del mismo tipo.

QUÉ DEBES HACER
  1. Crea la función normal masLargo<T extends { length: number }>(a: T, b: T): T:
     a) si b.length es mayor que a.length, devuelve b;
     b) en cualquier otro caso (incluido el empate) devuelve a.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(masLargo('hola', 'sol'));       // 'hola'
  console.log(masLargo('ab', 'cd'));          // 'ab'
  console.log(masLargo('x', 'xyz'));          // 'xyz'
  console.log(masLargo([1, 2, 3], [9]));      // [ 1, 2, 3 ]
  console.log(masLargo([], [0]).length);      // 1
  console.log(masLargo('', '').length);       // 0

ESTO DEBE FALLAR
  // masLargo(5, 3);                              → number no tiene length.
  // masLargo('abc', [1, 2]);                     → a y b deben ser del mismo tipo T.
  // masLargo({ nombre: 'x' }, { nombre: 'y' });  → el objeto no tiene length.

EXPLICA
  ¿Crea extends una herencia entre clases en esta firma? ¿Por qué sin la restricción
  TypeScript rechazaría a.length dentro del cuerpo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 08 — Validar un rango de longitud
/*
SITUACIÓN
  Un formulario acepta un valor solo si su longitud está dentro de un rango. Sirve para
  textos (usuario, clave) y para listas (etiquetas). Si es válido se conserva con su
  tipo original; si no, no hay valor.

QUÉ DEBES HACER
  1. Crea la función normal validarLongitud<T extends { length: number }>(valor: T,
     minimo: number, maximo: number): T | undefined. Supón minimo <= maximo:
     a) si valor.length es menor que minimo, devuelve undefined;
     b) si valor.length es mayor que maximo, devuelve undefined;
     c) en otro caso devuelve valor. Los dos límites son inclusivos.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(validarLongitud('abcdefgh', 8, 12));              // 'abcdefgh'
  console.log(validarLongitud('abcdefg', 8, 12));               // undefined
  console.log(validarLongitud('abcdefghijkl', 8, 12));          // 'abcdefghijkl'
  console.log(validarLongitud('abcdefghijklm', 8, 12));         // undefined
  console.log(validarLongitud([1, 2, 3], 1, 3));                // [ 1, 2, 3 ]
  console.log(validarLongitud([], 1, 3));                       // undefined
  console.log(validarLongitud('secreto1', 8, 12)?.toUpperCase()); // 'SECRETO1'

ESTO DEBE FALLAR
  // validarLongitud(8, 1, 3);                         → number no tiene length.
  // validarLongitud('abc', 1, 3).toUpperCase();       → el resultado puede ser undefined.

EXPLICA
  ¿Por qué en la última línea de COMPRUEBA se puede usar toUpperCase() sobre el
  resultado? ¿Qué tipo habría si la función devolviera { length: number } en vez de T?
*/
(() => {
    // Tu solución.
})();

// TRAMO 2 — INTERFACES Y CLASES COMO TIPO DE T (09–13)

// !EJERCICIO 09 — Villano con nivel de peligro
/*
SITUACIÓN
  Una agencia recibe fichas de villanos y las clasifica según su peligro. Antes de
  clasificar, cada ficha pasa por una función genérica que la devuelve sin cambios
  y exige que cumpla la interfaz Villain.

QUÉ DEBES HACER
  1. Crea la interfaz Villain con tres propiedades: name (string), realName (string)
     y dangerLevel (number).
  2. Crea la función de flecha const pasar = <T>(valor: T): T => valor.
  3. Crea la función normal nivel(villano: Villain): string. Supón dangerLevel >= 0:
     a) si dangerLevel es 100 o más, devuelve 'Crítico';
     b) si no, y es 50 o más, devuelve 'Alto';
     c) en otro caso devuelve 'Bajo'.
  4. Ejecuta COMPRUEBA. Los objetos se declaran SIN anotar su tipo; la interfaz entra
     en la llamada a pasar con <Villain>.

COMPRUEBA
  const deadpool = { name: 'Deadpool', realName: 'Wade Wilson', dangerLevel: 130 };
  const thanos = { name: 'Thanos', realName: 'Thanos', dangerLevel: 100 };
  const joker = { name: 'Joker', realName: 'Desconocido', dangerLevel: 50 };
  const bane = { name: 'Bane', realName: 'Antonio Diego', dangerLevel: 49 };
  console.log(pasar<Villain>(deadpool).dangerLevel);  // 130
  console.log(nivel(pasar<Villain>(deadpool)));       // 'Crítico'
  console.log(nivel(pasar<Villain>(thanos)));         // 'Crítico'
  console.log(nivel(pasar<Villain>(joker)));          // 'Alto'
  console.log(nivel(pasar<Villain>(bane)));           // 'Bajo'

ESTO DEBE FALLAR
  // pasar<Villain>({ name: 'X', realName: 'Y' });                   → falta dangerLevel.
  // pasar<Villain>({ name: 'X', realName: 'Y', dangerLevel: '90' }); → dangerLevel debe ser number.
  // const v = new Villain();                                        → una interfaz solo existe como tipo.

EXPLICA
  ¿Añade <Villain> alguna propiedad al objeto o comprueba algo al ejecutar el programa?
  ¿Qué comprueba exactamente y cuándo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 10 — Hero y Villain: misma forma, mismo objeto
/*
SITUACIÓN
  Un torneo enfrenta a héroes y villanos. Las interfaces Hero y Villain tienen los
  mismos miembros, y una sola función debe decidir quién es más peligroso entre dos
  participantes del mismo tipo.

QUÉ DEBES HACER
  1. Crea la interfaz Hero con name (string), realName (string) y dangerLevel (number).
  2. Crea la interfaz Villain con exactamente los mismos tres miembros y tipos.
  3. Crea la función normal masPeligroso<T extends { dangerLevel: number }>(a: T, b: T): T:
     a) si b.dangerLevel es mayor que a.dangerLevel, devuelve b;
     b) en otro caso (incluido el empate) devuelve a.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const logan: Hero = { name: 'Logan', realName: 'James Howlett', dangerLevel: 90 };
  const joker: Villain = { name: 'Joker', realName: 'Desconocido', dangerLevel: 90 };
  const bane: Villain = { name: 'Bane', realName: 'Antonio', dangerLevel: 120 };
  console.log(masPeligroso(logan, joker).name);                 // 'Logan'
  console.log(masPeligroso(joker, logan).name);                 // 'Joker'
  console.log(masPeligroso(logan, bane).name);                  // 'Bane'
  console.log(masPeligroso<Villain>(logan, bane).realName);     // 'Antonio'

ESTO DEBE FALLAR
  // masPeligroso(logan, { name: 'Zed' });   → al segundo le faltan realName y dangerLevel.
  // masPeligroso(logan, 'texto');           → un texto no tiene dangerLevel.
  // masPeligroso<Hero>(logan, { name: 'Zed', realName: 'Z', dangerLevel: 1, poder: 'fuego' });  → propiedad sobrante en el literal.

EXPLICA
  ¿Por qué se puede pasar un Hero donde se espera Villain, si tienen nombres distintos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 11 — Buscar en el catálogo conservando el tipo completo
/*
SITUACIÓN
  Una papelería busca productos por nombre. La búsqueda debe funcionar con cualquier
  lista cuyos elementos tengan nombre, y debe devolver el elemento COMPLETO, no solo
  su nombre, para poder calcular después su precio final.

QUÉ DEBES HACER
  1. Crea la interfaz Producto con nombre (string), precio (number) y descuento
     (number, opcional; es un porcentaje de 0 a 100).
  2. Crea la función normal buscarPorNombre<T extends { nombre: string }>(lista: T[],
     nombre: string): T | undefined:
     a) recorre lista con for...of;
     b) devuelve el primer elemento cuyo nombre sea === al recibido;
     c) si no hay ninguno, devuelve undefined.
  3. Crea la función normal precioFinal(producto: Producto): number:
     a) toma el descuento del producto o 0 si no lo tiene, con ??;
     b) devuelve precio - precio * descuento / 100.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const catalogo: Producto[] = [
    { nombre: 'Cuaderno', precio: 45, descuento: 20 },
    { nombre: 'Lápiz', precio: 5 },
    { nombre: 'Cuaderno', precio: 99 },
  ];
  const cuaderno = buscarPorNombre(catalogo, 'Cuaderno');
  const lapiz = buscarPorNombre(catalogo, 'Lápiz');
  console.log(cuaderno?.precio);                                 // 45
  console.log(buscarPorNombre(catalogo, 'Regla'));               // undefined
  console.log(cuaderno === undefined ? 0 : precioFinal(cuaderno)); // 36
  console.log(lapiz === undefined ? 0 : precioFinal(lapiz));       // 5
  console.log(buscarPorNombre(catalogo, 'cuaderno'));            // undefined

ESTO DEBE FALLAR
  // cuaderno.precio;                     → cuaderno puede ser undefined.
  // buscarPorNombre([1, 2], 'x');        → los números no tienen nombre.
  // buscarPorNombre(catalogo, 5);        → nombre debe ser un texto.

EXPLICA
  ¿Por qué cuaderno?.precio compila si buscarPorNombre solo exige { nombre: string }?
  ¿Qué cambiaría si devolviera { nombre: string } | undefined?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 12 — Valor o respaldo (opcionales y ??)
/*
SITUACIÓN
  Una app lee una configuración donde algunos campos pueden faltar. Si el campo falta
  se usa un valor por defecto; si existe se respeta, aunque sea 0 o false.

QUÉ DEBES HACER
  1. Crea la interfaz Configuracion con tema (string), tamanoFuente (number, opcional)
     y ruidoActivo (boolean, opcional).
  2. Crea la función normal valorOPor<T>(valor: T | undefined, respaldo: T): T que
     devuelve valor ?? respaldo. No uses || (trata 0 y false como ausentes).
  3. Crea la función normal describir(config: Configuracion): string que devuelve
     '{tema}|{fuente}|{sonido}', donde:
     a) fuente es tamanoFuente o 14 si falta, usando valorOPor;
     b) sonido es 'ruido' si ruidoActivo (o true si falta, usando valorOPor) es true,
        y 'silencio' si es false.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const c1: Configuracion = { tema: 'oscuro', tamanoFuente: 0, ruidoActivo: false };
  const c2: Configuracion = { tema: 'claro' };
  console.log(valorOPor(c1.tamanoFuente, 14));    // 0
  console.log(valorOPor(c2.tamanoFuente, 14));    // 14
  console.log(valorOPor(c1.ruidoActivo, true));   // false
  console.log(valorOPor(undefined, 'sin tema'));  // 'sin tema'
  console.log(describir(c1));                     // 'oscuro|0|silencio'
  console.log(describir(c2));                     // 'claro|14|ruido'

ESTO DEBE FALLAR
  // valorOPor<number>('14', 14);              → '14' no es number.
  // valorOPor<number>(c2.ruidoActivo, 14);    → ruidoActivo es boolean | undefined, no number | undefined.

EXPLICA
  ¿Qué devolvería la primera línea de COMPRUEBA si usaras || en lugar de ??, y por qué?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 13 — El héroe más joven (clase que cumple una interfaz)
/*
SITUACIÓN
  Un equipo guarda héroes como objetos de una clase. Se quiere encontrar el más joven
  de cualquier lista de elementos con nombre y edad, y poder seguir usando sus métodos
  de clase sobre el resultado.

QUÉ DEBES HACER
  1. Crea la interfaz Identificable con nombre (string) y edad (number).
  2. Crea la clase Heroe que implemente Identificable. Declara en su constructor, en
     este orden: nombre (string, visible) y edad (number, visible).
  3. En Heroe crea el método presentarse(): string, sin argumentos, que devuelve
     'Soy {nombre} ({edad})'.
  4. Crea la función normal masJoven<T extends Identificable>(lista: T[]): T | undefined:
     a) crea elegido (T | undefined) con valor undefined;
     b) recorre lista con for...of: si elegido es undefined, o la edad del elemento es
        MENOR (<) que la de elegido, el elemento pasa a ser elegido;
     c) devuelve elegido. Con edades iguales se queda el que apareció primero.
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  const equipo = [new Heroe('Ana', 30), new Heroe('Luis', 22), new Heroe('Eva', 22)];
  console.log(masJoven(equipo)?.presentarse());          // 'Soy Luis (22)'
  console.log(masJoven([new Heroe('Zoe', 40)])?.nombre); // 'Zoe'
  console.log(masJoven<Heroe>([]));                      // undefined

ESTO DEBE FALLAR
  // const h: Heroe = masJoven(equipo);     → el resultado puede ser undefined.
  // masJoven(['Ana', 'Luis']);             → los textos no tienen nombre ni edad.
  // masJoven([{ nombre: 'Ana' }]);         → falta edad.

EXPLICA
  ¿Por qué se puede llamar a presentarse() sobre el resultado si masJoven solo exige
  Identificable? ¿Qué impediría llamarlo si la función devolviera Identificable?
*/
(() => {
    // Tu solución.
})();

// TRAMO 3 — GENÉRICOS + FUNCIONES, PARÁMETROS, TUPLAS, ENUM, TYPEOF, RECORD Y ACCESORES (14–20)

// !EJERCICIO 14 — Aplicar un paso varias veces
/*
SITUACIÓN
  Un juego aplica una transformación a un estado varias veces: duplicar una puntuación,
  alargar un texto, restar vidas. El estado puede ser de cualquier tipo, y la
  transformación recibe y devuelve ese mismo tipo.

QUÉ DEBES HACER
  1. Crea la función normal aplicarN<T>(valor: T, paso: (valor: T) => T,
     veces: number = 1): T. Supón veces entero:
     a) crea actual con el valor recibido;
     b) con un for de índice que empieza en 0 y sigue mientras sea menor que veces,
        asigna en cada vuelta actual = paso(actual);
     c) devuelve actual. Con veces 0 o negativo, el for no da ninguna vuelta y se
        devuelve valor sin llamar a paso.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(aplicarN(2, n => n * 2, 3));                                  // 16
  console.log(aplicarN('a', t => t + 'b'));                                 // 'ab'
  console.log(aplicarN(5, n => n + 1, 0));                                  // 5
  console.log(aplicarN('x', t => t + 'x', -2));                             // 'x'
  console.log(aplicarN<number>(1, n => n + 1, 4));                          // 5
  console.log(aplicarN({ vidas: 3 }, estado => ({ vidas: estado.vidas - 1 }), 2)); // { vidas: 1 }

ESTO DEBE FALLAR
  // aplicarN(2, texto => texto + 'x', 1);   → T es number y el paso devuelve un texto.
  // aplicarN('a', n => n * 2);              → n es un texto; no se puede multiplicar.

EXPLICA
  ¿Qué valor toma veces cuando llamas a aplicarN('a', t => t + 'b') y por qué?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 15 — Contar coincidencias con parámetros rest
/*
SITUACIÓN
  Una encuesta recibe respuestas sueltas y debe contar cuántas coinciden con una
  respuesta de referencia. Las respuestas pueden ser números, textos, booleanos u
  objetos, pero todas del mismo tipo que la referencia.

QUÉ DEBES HACER
  1. Crea la función normal contarIguales<T>(buscado: T, ...valores: T[]): number:
     a) crea n con valor 0;
     b) recorre valores con for...of y suma 1 a n por cada valor === buscado;
     c) devuelve n. Sin valores, devuelve 0.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  const punto = { x: 1 };
  console.log(contarIguales(3, 1, 3, 3, 2));              // 2
  console.log(contarIguales('a'));                        // 0
  console.log(contarIguales(true, true, false, true));    // 2
  console.log(contarIguales(0, 0, 0));                    // 2
  console.log(contarIguales(punto, punto, { x: 1 }, punto)); // 2

ESTO DEBE FALLAR
  // contarIguales(3, 'a');          → el valor 'a' no es number.
  // contarIguales<string>(3);       → 3 no es un texto.

EXPLICA
  En la última línea hay tres objetos con { x: 1 } pero solo cuentan 2: ¿qué compara ===
  cuando los valores son objetos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 16 — Dividir una lista en dos (tupla y desestructuración)
/*
SITUACIÓN
  Un paginador separa una lista en la parte que ya se mostró y la que falta. Devuelve
  las dos partes juntas, siempre como una pareja ordenada: primero lo mostrado y
  después lo pendiente.

QUÉ DEBES HACER
  1. Crea la función normal dividir<T>(lista: T[], posicion: number): [T[], T[]].
     Supón posicion entero:
     a) crea las listas vacías izquierda y derecha, ambas de tipo T[];
     b) recorre lista con for...of y un contador desde 0: si el contador es menor que
        posicion, el elemento va a izquierda; si no, a derecha. Suma 1 al contador en
        cada vuelta;
     c) devuelve la tupla [izquierda, derecha].
     Con posicion 0 o negativa, todo queda en derecha; con posicion mayor o igual que
     la longitud, todo queda en izquierda. No modifiques lista.
  2. Ejecuta COMPRUEBA. En ella recibes el resultado con desestructuración de arrays.

COMPRUEBA
  const [izq, der] = dividir([1, 2, 3, 4, 5], 2);
  console.log(izq);                       // [ 1, 2 ]
  console.log(der);                       // [ 3, 4, 5 ]
  const original = ['x', 'y'];
  const [vacia, todo] = dividir(original, 0);
  console.log(vacia.length);              // 0
  console.log(todo);                      // [ 'x', 'y' ]
  console.log(todo === original);         // false
  const [completa, sobra] = dividir(original, 5);
  console.log(completa);                  // [ 'x', 'y' ]
  console.log(sobra.length);              // 0
  console.log(dividir(original, -1)[0].length);  // 0

ESTO DEBE FALLAR
  // const [a, b, c] = dividir([1], 0);        → la tupla solo tiene 2 posiciones.
  // const unica: number[] = dividir([1, 2], 1);  → devuelve dos listas, no una lista de números.

EXPLICA
  ¿Qué diferencia hay entre devolver [T[], T[]] y devolver T[][] para quien llama a
  la función?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 17 — Recorrido circular con enum
/*
SITUACIÓN
  Un semáforo recorre sus luces en círculo, y un calendario recorre días de la semana.
  Una función genérica debe elegir el elemento de una posición aunque la posición se
  salga de la lista, dando la vuelta por cualquiera de los dos extremos.

QUÉ DEBES HACER
  1. Crea el enum Semaforo con tres miembros, en este orden: Rojo, Amarillo, Verde.
  2. Crea la función normal ciclar<T>(lista: T[], indice: number): T | undefined.
     Supón indice entero (puede ser negativo o mayor que la longitud):
     a) si la lista está vacía, devuelve undefined;
     b) calcula n = lista.length y posicion = ((indice % n) + n) % n;
     c) devuelve el elemento de esa posicion.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  const orden: Semaforo[] = [Semaforo.Verde, Semaforo.Amarillo, Semaforo.Rojo];
  console.log(ciclar(orden, 4) === Semaforo.Amarillo);   // true
  console.log(ciclar(orden, 3) === Semaforo.Verde);      // true
  console.log(ciclar(orden, -1) === Semaforo.Rojo);      // true
  console.log(ciclar(['a', 'b', 'c'], -4));              // 'c'
  console.log(ciclar<string>([], 2));                    // undefined

ESTO DEBE FALLAR
  // const luz: Semaforo = ciclar(orden, 1);   → el resultado puede ser undefined.
  // ciclar<Semaforo>(['rojo'], 0);            → un texto no es un Semaforo.

EXPLICA
  ¿Por qué ((indice % n) + n) % n funciona con índices negativos y indice % n solo no?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 18 — Describir según el tipo real (typeof y Array.isArray)
/*
SITUACIÓN
  Un depurador muestra cuántos elementos tiene un valor con longitud y de qué clase es:
  texto, lista u otro objeto con propiedad length.

QUÉ DEBES HACER
  1. Crea la función normal describirLongitud<T extends { length: number }>(valor: T):
     string:
     a) guarda n (number) con valor.length ANTES de comprobar el tipo (dentro de cada
        rama TypeScript reduce T y puede dejar de ofrecer length);
     b) si typeof valor es 'string', devuelve 'texto de {n} caracteres';
     c) si no, y Array.isArray(valor) es true, devuelve 'lista de {n} elementos';
     d) en otro caso devuelve 'objeto con length {n}'.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(describirLongitud('hola'));        // 'texto de 4 caracteres'
  console.log(describirLongitud(''));            // 'texto de 0 caracteres'
  console.log(describirLongitud([1, 2]));        // 'lista de 2 elementos'
  console.log(describirLongitud([]));            // 'lista de 0 elementos'
  console.log(describirLongitud({ length: 7 })); // 'objeto con length 7'

ESTO DEBE FALLAR
  // describirLongitud(42);                → number no tiene length.
  // describirLongitud({ largo: 3 });      → el objeto no tiene length.

EXPLICA
  ¿Por qué hace falta Array.isArray y no basta con typeof para distinguir una lista
  de un objeto?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 19 — Buscar la clave de un valor (Record y for...in)
/*
SITUACIÓN
  Un marcador guarda puntos por jugador en un objeto. Dado un valor, se quiere saber
  qué jugador lo tiene. El valor puede ser de cualquier tipo, igual que los valores
  guardados.

QUÉ DEBES HACER
  1. Crea la función normal buscarClave<T>(mapa: Record<string, T>, buscado: T):
     string | undefined:
     a) recorre mapa con for...in; en cada vuelta comprueba primero
        Object.hasOwn(mapa, clave);
     b) si es propia y mapa[clave] es === a buscado, devuelve clave de inmediato;
     c) si termina el recorrido, devuelve undefined.
     Las claves se recorren en el orden en que se escribieron.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  const puntos: Record<string, number> = { Ana: 90, Luis: 85, Eva: 90 };
  const estados: Record<string, boolean> = { a: false, b: true };
  console.log(buscarClave(puntos, 90));    // 'Ana'
  console.log(buscarClave(puntos, 85));    // 'Luis'
  console.log(buscarClave(puntos, 10));    // undefined
  console.log(buscarClave(estados, true)); // 'b'
  console.log(buscarClave({}, 1));         // undefined

ESTO DEBE FALLAR
  // buscarClave(puntos, 'noventa');                → los valores de puntos son number.
  // const clave: string = buscarClave(puntos, 90); → el resultado puede ser undefined.

EXPLICA
  ¿Qué devuelve el for...in en cada vuelta, el valor o la clave? ¿Para qué sirve
  comprobar Object.hasOwn?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 20 — Clave de acceso validada con un genérico
/*
SITUACIÓN
  Una cuenta guarda una clave que solo se acepta si mide entre 8 y 12 caracteres. La
  validación usa una función genérica; la clase nunca revela la clave, solo la oculta
  con asteriscos.

QUÉ DEBES HACER
  1. Crea la función normal validarLongitud<T extends { length: number }>(valor: T,
     minimo: number, maximo: number): T | undefined, igual que en el ejercicio 08
     (undefined si valor.length < minimo o > maximo; si no, valor).
  2. Crea la clase Cuenta. Declara en su constructor usuario (string, visible). Añade
     la propiedad oculta _clave (string) inicializada con ''.
  3. En Cuenta crea el setter clave(valor: string):
     a) llama a validarLongitud(valor, 8, 12);
     b) si el resultado es === undefined, lanza un error sin cambiar _clave:
        new Error('La clave debe tener entre 8 y 12 caracteres');
     c) en otro caso guarda valor en _clave (no recortes espacios).
  4. En Cuenta crea el getter claveOculta (devuelve string): un texto con un '*' por
     cada carácter de _clave. Construye el texto con un bucle; si no hay clave,
     devuelve ''.
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  const cuenta = new Cuenta('ana');
  console.log(cuenta.claveOculta.length);
  cuenta.clave = 'abcdefgh';
  console.log(cuenta.claveOculta);
  try { cuenta.clave = 'abcdefg'; } catch (error) { console.log('rechazada'); }
  console.log(cuenta.claveOculta);
  cuenta.clave = 'abcdefghijkl';
  console.log(cuenta.claveOculta);
  try { cuenta.clave = 'abcdefghijklm'; } catch (error) { console.log('rechazada'); }
  console.log(cuenta.claveOculta);
  const otra = new Cuenta('luis');
  console.log(otra.claveOculta.length);

  Salida, en este orden:
    0
    ********
    rechazada
    ********
    ************
    rechazada
    ************
    0

ESTO DEBE FALLAR
  // console.log(cuenta._clave);       → _clave es private.
  // cuenta.claveOculta = 'x';         → claveOculta solo tiene getter.
  // cuenta.clave = 12345678;          → clave debe ser un texto.

EXPLICA
  ¿Por qué el dato guardado se llama _clave y los accesores clave y claveOculta? ¿Qué
  pasaría si el setter asignara this.clave dentro de sí mismo?
*/
(() => {
    // Tu solución.
})();

// TRAMO 4 — BARREL: export type E import type (21–22)

// !EJERCICIO 21 — Un único punto de entrada para los tipos de la tienda
/*
SITUACIÓN
  Una tienda guarda sus interfaces en archivos separados dentro de una carpeta llamada
  Interfaces (Producto.ts y Cliente.ts). Quieres que el resto del proyecto las importe
  desde un solo lugar. Como todo va en un único archivo de práctica, escribirás los
  archivos del barrel como comentarios y usarás los tipos en código.

QUÉ DEBES HACER
  1. Dentro de la función crea la interfaz Producto con nombre (string) y precio
     (number), y la interfaz Cliente con nombre (string) y credito (number).
  2. Crea la función normal totalDe<T extends { precio: number }>(items: T[]): number
     que devuelve la suma de los precios (0 si la lista está vacía).
  3. Crea la función normal puedeComprar(cliente: Cliente, productos: Producto[]):
     boolean que devuelve true si totalDe(productos) es MENOR O IGUAL (<=) que
     cliente.credito, y false si es mayor.
  4. Bajo tu código escribe, como comentario, el contenido del archivo
     Interfaces/index.ts: una línea por interfaz, con la forma
     export type { Nombre } from './Archivo';
  5. Escribe también, como comentario, la línea de un archivo vecino a la carpeta
     Interfaces que importa ambas interfaces con import type.
  6. Ejecuta COMPRUEBA.

COMPRUEBA
  const ana: Cliente = { nombre: 'Ana', credito: 100 };
  const lapiz: Producto = { nombre: 'Lápiz', precio: 60 };
  const regla: Producto = { nombre: 'Regla', precio: 40 };
  const goma: Producto = { nombre: 'Goma', precio: 41 };
  console.log(totalDe([lapiz, regla]));          // 100
  console.log(puedeComprar(ana, [lapiz, regla])); // true
  console.log(puedeComprar(ana, [lapiz, goma]));  // false
  console.log(puedeComprar(ana, []));             // true

ESTO DEBE FALLAR
  // const p = new Producto();                          → Producto es una interfaz: solo existe como tipo.
  // const q: Producto = { nombre: 'Tijeras' };         → falta precio.
  // totalDe([{ nombre: 'Sin precio' }]);               → los elementos deben tener precio.

EXPLICA
  ¿Qué dos palabras indican en el barrel y en el consumidor que se comparten tipos y
  no valores? ¿Es obligatorio que el archivo se llame index.ts para que funcione?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 22 — Qué se exporta como tipo y qué como valor
/*
SITUACIÓN
  Una carpeta Heroes contiene una interfaz, una clase y una función. Debes decidir
  cuáles se comparten con export type (solo existen al compilar) y cuáles con export
  normal (existen al ejecutar), y escribir el barrel y dos consumidores distintos.

QUÉ DEBES HACER
  1. Dentro de la función crea la interfaz Hero con nombre (string) y nivel (number).
  2. Crea la clase Heroe que implemente Hero. Declara en su constructor, en este
     orden: nombre (string, visible) y nivel (number, visible).
  3. En Heroe crea el método rango(): string, sin argumentos. Supón nivel >= 0:
     a) si nivel es 8 o más, devuelve 'Leyenda';
     b) si no, y es 4 o más, devuelve 'Veterano';
     c) en otro caso devuelve 'Novato'.
  4. Crea la función normal crearHeroe(nombre: string, nivel: number): Heroe que
     devuelve una instancia nueva de Heroe.
  5. Crea la función normal mostrar(h: Hero): string que devuelve '{nombre} ({nivel})'.
  6. Bajo tu código escribe, como comentario, el contenido de Heroes/index.ts con tres
     exportaciones, cada una con la forma correcta: la interfaz Hero, la clase Heroe y
     la función crearHeroe (cada una desde su archivo, con el mismo nombre).
  7. Escribe, como comentario, la línea de importación de un archivo A que solo
     necesita el tipo Hero para anotar parámetros, y la de un archivo B que llama a
     crearHeroe y usa new Heroe(...).
  8. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(crearHeroe('Ana', 8).rango());       // 'Leyenda'
  console.log(crearHeroe('Luis', 7).rango());      // 'Veterano'
  console.log(crearHeroe('Eva', 4).rango());       // 'Veterano'
  console.log(crearHeroe('Zoe', 3).rango());       // 'Novato'
  console.log(mostrar(crearHeroe('Luis', 3)));     // 'Luis (3)'
  console.log(mostrar({ nombre: 'Max', nivel: 9 })); // 'Max (9)'

ESTO DEBE FALLAR
  // new Hero('x', 1);                       → Hero es una interfaz.
  // crearHeroe('x', 1).nivel = 'alto';      → nivel es number.
  // mostrar({ nombre: 'Max' });             → falta nivel.

EXPLICA
  ¿Qué falla si el archivo B importa Heroe con import type y luego escribe new Heroe(...)?
  ¿Por qué el archivo A puede usar import type para Hero?
*/
(() => {
    // Tu solución.
})();

// TRAMO 5 — PROMESAS Y Promise<T> (23–28)

// !EJERCICIO 23 — Una división que puede rechazarse
/*
SITUACIÓN
  Un servicio devuelve el resultado de dividir dos números, pero no de forma inmediata:
  entrega una promesa. Dividir entre cero es un error y la promesa debe rechazarse.

QUÉ DEBES HACER
  1. Crea la función normal dividirConPromesa(a: number, b: number): Promise<number>.
     Devuelve new Promise<number>((resolve, reject) => { ... }) y dentro:
     a) si b es 0, llama a reject(new Error('División entre cero'));
     b) en otro caso llama a resolve(a / b).
  2. Ejecuta COMPRUEBA. Fíjate en que 'fin del código síncrono' se imprime ANTES
     que los resultados de las promesas.

COMPRUEBA
  dividirConPromesa(10, 4).then(resultado => console.log(resultado));
  dividirConPromesa(1, 0).catch(error => console.log(error.message));
  dividirConPromesa(0, 5).then(resultado => console.log(resultado));
  console.log('fin del código síncrono');

  Salida, en este orden:
    fin del código síncrono
    2.5
    División entre cero
    0

ESTO DEBE FALLAR
  // const n: number = dividirConPromesa(1, 2);         → devuelve Promise<number>, no number.
  // dividirConPromesa(4, 2).then(r => r.toUpperCase()); → r es number.

EXPLICA
  ¿Por qué console.log('fin del código síncrono') sale primero aunque está escrito
  después? ¿Qué describe number dentro de Promise<number>?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 24 — Buscar un villano y entregarlo en una promesa
/*
SITUACIÓN
  Un archivo de villanos se consulta de forma asíncrona. Si el villano existe, la
  promesa se cumple con su ficha; si no, se rechaza con un mensaje.

QUÉ DEBES HACER
  1. Crea la interfaz Villain con name (string), realName (string) y dangerLevel (number).
  2. Crea la lista villanos (tipo Villain[]) con estos dos elementos, en este orden:
     { name: 'Deadpool', realName: 'Wade Wilson', dangerLevel: 130 } y
     { name: 'Joker', realName: 'Desconocido', dangerLevel: 50 }.
  3. Crea la función normal buscarVillano(nombre: string): Promise<Villain>:
     a) recorre villanos con for...of;
     b) si el name de uno es === nombre, devuelve Promise.resolve(ese villano);
     c) si termina sin encontrarlo, devuelve
        Promise.reject(new Error('No existe {nombre}')).
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  buscarVillano('Joker').then(villano => console.log(villano.dangerLevel));
  buscarVillano('joker').catch(error => console.log(error.message));
  buscarVillano('Deadpool').then(villano => console.log(villano.realName));

  Salida, en este orden:
    50
    No existe joker
    Wade Wilson

ESTO DEBE FALLAR
  // buscarVillano('Joker').then(villano => villano.poder);  → Villain no tiene poder.
  // const v: Villain = buscarVillano('Joker');              → devuelve Promise<Villain>, no Villain.

EXPLICA
  ¿Por qué 'joker' en minúsculas no se encuentra? ¿Qué tipo tiene el parámetro villano
  del .then y de dónde sale ese tipo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 25 — Una función async siempre devuelve una promesa
/*
SITUACIÓN
  Un programa de lealtad asigna un nivel según los puntos. La función está marcada
  async: aunque escribas return con un texto, quien llama recibe una promesa.

QUÉ DEBES HACER
  1. Crea la función async nivelDe(puntos: number): Promise<string>:
     a) si puntos es menor que 0, lanza new Error('Puntos negativos');
     b) si puntos es menor que 100, devuelve 'Bronce';
     c) si no, y puntos es menor que 500, devuelve 'Plata';
     d) en otro caso devuelve 'Oro'.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  nivelDe(99).then(nivel => console.log(nivel));
  nivelDe(100).then(nivel => console.log(nivel));
  nivelDe(499).then(nivel => console.log(nivel));
  nivelDe(500).then(nivel => console.log(nivel));
  nivelDe(-1).catch(error => console.log(error.message));
  console.log(typeof nivelDe(0));

  Salida, en este orden:
    object
    Bronce
    Plata
    Plata
    Oro
    Puntos negativos

ESTO DEBE FALLAR
  // const nivel: string = nivelDe(10);   → devuelve Promise<string>, no string.
  // nivelDe(10).toUpperCase();           → una promesa no tiene toUpperCase.

EXPLICA
  ¿Qué pasa con la promesa cuando una función async lanza un error con throw? ¿Por qué
  'object' es lo primero que se imprime?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 26 — Imprimir no es retornar
/*
SITUACIÓN
  Un marcador consulta los puntos de un jugador. Una versión los DEVUELVE y otra solo
  los IMPRIME; quien espera el resultado de la segunda recibe undefined.

QUÉ DEBES HACER
  1. Crea el objeto puntos (tipo Record<string, number>) con { Ana: 90, Luis: 85 }.
  2. Crea la función async puntosDe(jugador: string): Promise<number>:
     a) busca puntos[jugador];
     b) si es undefined, lanza new Error('Jugador desconocido');
     c) devuelve el valor.
  3. Crea la función async imprimirPuntos(jugador: string): Promise<void>:
     a) espera puntosDe(jugador) con await;
     b) imprime 'Puntos de {jugador}: {puntos}';
     c) NO tiene return con valor.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    const impreso = await imprimirPuntos('Ana');
    console.log(impreso);
    const devuelto = await puntosDe('Luis');
    console.log(devuelto);
    await imprimirPuntos('Zoe').catch(error => console.log(error.message));
  })();

  Salida, en este orden:
    Puntos de Ana: 90
    undefined
    85
    Jugador desconocido

ESTO DEBE FALLAR
  // imprimirPuntos('Ana').then(n => n.toFixed(1));        → el valor de Promise<void> no es un número.
  // const total: number = await puntosDe('Ana');          → solo es válido dentro de una función async.

EXPLICA
  ¿Por qué imprimirPuntos termina con undefined si imprime los puntos? ¿Qué línea
  tendrías que añadir para que la promesa se cumpla con ese número?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 27 — Esperar un valor con setTimeout
/*
SITUACIÓN
  Una pantalla de carga entrega un valor después de un tiempo. El tipo del valor
  depende de cada pantalla (texto, número, booleano) y la espera no bloquea el resto
  del programa.

QUÉ DEBES HACER
  1. Crea la función normal esperar<T>(valor: T, ms: number): Promise<T>. Devuelve
     new Promise<T>((resolve, reject) => { ... }) y dentro:
     a) si ms es menor que 0, llama a reject(new Error('Tiempo negativo'));
     b) en otro caso llama a setTimeout(() => resolve(valor), ms).
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  esperar('lento', 40).then(texto => console.log(texto.toUpperCase()));
  esperar(7, 10).then(numero => console.log(numero.toFixed(1)));
  esperar(true, 0).then(valor => console.log(valor));
  esperar('x', -5).catch(error => console.log(error.message));
  console.log('esperando');

  Salida, en este orden:
    esperando
    Tiempo negativo
    true
    7.0
    LENTO

ESTO DEBE FALLAR
  // esperar(7, 10).then(numero => numero.toUpperCase());  → numero es number.
  // esperar<string>(7, 10);                               → 7 no es un texto.

EXPLICA
  ¿Por qué 'Tiempo negativo' sale antes que 'true' si 'true' espera 0 milisegundos?
  ¿Por qué 'LENTO' sale al final aunque su línea es la primera?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 28 — Validar longitud en una promesa (T extends + Promise<T>)
/*
SITUACIÓN
  Un servicio valida que un valor con longitud (texto o lista) sea lo bastante largo y
  responde con una promesa. Si es válido se cumple con el mismo valor y su mismo tipo.

QUÉ DEBES HACER
  1. Crea la función normal validarLongitudAsync<T extends { length: number }>(valor: T,
     minimo: number): Promise<T>. Devuelve new Promise<T>((resolve, reject) => { ... }):
     a) si valor.length es menor que minimo, reject(new Error('Muy corto: {n} de
        {minimo}')), donde {n} es valor.length;
     b) en otro caso resolve(valor). Un valor con longitud igual a minimo es válido.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  validarLongitudAsync('secreto', 4).then(valor => console.log(valor.toUpperCase()));
  validarLongitudAsync([1, 2], 3).catch(error => console.log(error.message));
  validarLongitudAsync([1, 2, 3], 3).then(valor => console.log(valor.length));
  validarLongitudAsync('', 0).then(valor => console.log(valor.length));

  Salida, en este orden:
    SECRETO
    Muy corto: 2 de 3
    3
    0

ESTO DEBE FALLAR
  // validarLongitudAsync(5, 1);                                     → number no tiene length.
  // validarLongitudAsync('hola', 1).then(valor => valor.push(1));   → valor es un texto, no una lista.

EXPLICA
  ¿Por qué dentro del primer .then se puede usar toUpperCase()? ¿Qué tipo tendría
  valor si la promesa fuera Promise<{ length: number }>?
*/
(() => {
    // Tu solución.
})();

// TRAMO 6 — async/await CON try/catch, BUCLES Y CLASES (29–34)

// !EJERCICIO 29 — Cobrar con try/catch
/*
SITUACIÓN
  Un cajero cobra importes contra un saldo. El cobro devuelve una promesa: se cumple
  con el saldo restante o se rechaza. Otra función lo espera con await y convierte el
  resultado en un mensaje.

QUÉ DEBES HACER
  1. Crea la función normal cobrar(saldo: number, importe: number): Promise<number>.
     Devuelve new Promise<number>((resolve, reject) => { ... }) y dentro:
     a) si importe es 0 o menor, reject(new Error('Importe inválido'));
     b) si no, y importe es mayor que saldo, reject(new Error('Saldo insuficiente'));
     c) en otro caso resolve(saldo - importe).
  2. Crea la función async intentarCobro(saldo: number, importe: number):
     Promise<string>. Dentro, un try/catch:
     a) en el try espera cobrar(saldo, importe) con await y devuelve 'Saldo: {nuevo}';
     b) en el catch devuelve 'Rechazado', cualquiera que sea el error.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    console.log(await intentarCobro(100, 30));   // 'Saldo: 70'
    console.log(await intentarCobro(100, 100));  // 'Saldo: 0'
    console.log(await intentarCobro(100, 101));  // 'Rechazado'
    console.log(await intentarCobro(100, 0));    // 'Rechazado'
    console.log(await intentarCobro(0, 1));      // 'Rechazado'
  })();

ESTO DEBE FALLAR
  // const texto: string = intentarCobro(100, 5);   → devuelve Promise<string>.
  // cobrar(100, '5');                              → importe debe ser number.

EXPLICA
  ¿Por qué hace falta el await dentro del try para que el catch capture el rechazo de
  cobrar? ¿Qué pasaría si escribieras return cobrar(...) sin await dentro del try?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 30 — await secuencial frente a tareas arrancadas a la vez
/*
SITUACIÓN
  Dos tareas tardan distinto. Si esperas cada una antes de arrancar la siguiente, se
  ejecutan una tras otra. Si arrancas las dos y esperas después, se solapan.

QUÉ DEBES HACER
  1. Crea la función normal esperar(ms: number): Promise<void> que devuelve
     new Promise<void>(resolve => { setTimeout(resolve, ms); }).
  2. Crea la función async tarea(nombre: string, ms: number): Promise<string>:
     a) espera esperar(ms) con await;
     b) imprime 'fin {nombre}';
     c) devuelve nombre.
  3. Ejecuta COMPRUEBA. Predice el orden completo antes de ejecutarlo.

COMPRUEBA
  (async () => {
    await tarea('A', 40);
    await tarea('B', 10);
    console.log('secuencial listo');
    const c = tarea('C', 40);
    const d = tarea('D', 10);
    console.log('arrancadas');
    console.log(await c);
    console.log(await d);
  })();
  console.log('principal terminó');

  Salida, en este orden:
    principal terminó
    fin A
    fin B
    secuencial listo
    arrancadas
    fin D
    fin C
    C
    D

ESTO DEBE FALLAR
  // const texto: string = tarea('X', 1);   → devuelve Promise<string>.
  // esperar('10');                         → ms debe ser number.

EXPLICA
  ¿Por qué 'fin D' sale antes que 'fin C' aunque D se arrancó después? ¿Por qué
  'principal terminó' sale primero de todo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 31 — Biblioteca con métodos async
/*
SITUACIÓN
  Una biblioteca presta libros. Buscar y prestar son operaciones asíncronas; un libro
  prestado no puede prestarse de nuevo hasta que se devuelva. Cada biblioteca tiene
  sus propios libros.

QUÉ DEBES HACER
  1. Crea la interfaz Libro con id (number), titulo (string) y prestado (boolean).
  2. Crea la clase Biblioteca con una propiedad oculta libros (Libro[]) inicializada
     con estos dos libros, en este orden:
     { id: 1, titulo: 'Dune', prestado: false } y
     { id: 2, titulo: 'Emma', prestado: false }.
  3. En Biblioteca crea el método async buscar(id: number): Promise<Libro>:
     a) recorre libros con for...of y devuelve el libro cuyo id sea === id;
     b) si no hay ninguno, lanza new Error('Libro {id} no existe').
  4. En Biblioteca crea el método async prestar(id: number): Promise<string>:
     a) obtén el libro con await this.buscar(id);
     b) si el libro ya está prestado, lanza new Error('Ya prestado');
     c) márcalo como prestado y devuelve 'Prestado: {titulo}'.
  5. En Biblioteca crea el método async devolver(id: number): Promise<boolean>:
     a) obtén el libro con await this.buscar(id);
     b) si estaba prestado, márcalo como no prestado y devuelve true;
     c) si no estaba prestado, devuelve false sin cambiar nada.
  6. Ejecuta COMPRUEBA. Incluye una segunda biblioteca para comprobar que no comparte
     libros con la primera.

COMPRUEBA
  (async () => {
    const sala = new Biblioteca();
    console.log(await sala.prestar(1));                                  // 'Prestado: Dune'
    await sala.prestar(1).catch(error => console.log(error.message));    // 'Ya prestado'
    console.log(await sala.devolver(2));                                 // false
    console.log(await sala.devolver(1));                                 // true
    console.log(await sala.prestar(1));                                  // 'Prestado: Dune'
    await sala.prestar(9).catch(error => console.log(error.message));    // 'Libro 9 no existe'
    const otra = new Biblioteca();
    console.log(await otra.prestar(1));                                  // 'Prestado: Dune'
  })();

ESTO DEBE FALLAR
  // new Biblioteca().libros;                     → libros es private.
  // const libro: Libro = new Biblioteca().buscar(1);  → buscar devuelve Promise<Libro>.
  // new Biblioteca().buscar('1');                → id debe ser number.

EXPLICA
  ¿Por qué otra.prestar(1) funciona aunque sala ya prestó el libro 1? ¿Qué devuelve
  buscar si lanzas un error con throw dentro de un método async?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 32 — El primer intento que funciona
/*
SITUACIÓN
  Un cliente prueba varias fuentes de datos en orden y se queda con la primera que
  responde. Las fuentes siguientes no se consultan. Si todas fallan, el resultado es
  un error. Las fuentes devuelven cualquier tipo de dato, pero todas el mismo.

QUÉ DEBES HACER
  1. Crea la función async primeroQueFunciona<T>(operaciones: (() => Promise<T>)[]):
     Promise<T>:
     a) recorre operaciones con for...of, en orden;
     b) dentro de cada vuelta abre un try: devuelve await operacion(), con await
        escrito en esa misma línea;
     c) en el catch no hagas nada: pasa a la siguiente operación;
     d) si el recorrido termina sin éxito (incluida una lista vacía), lanza
        new Error('Todas fallaron').
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  let llamadasTercero = 0;
  const falla = (): Promise<string> => Promise.reject(new Error('falla'));
  const segundo = (): Promise<string> => Promise.resolve('segundo');
  const tercero = (): Promise<string> => {
    llamadasTercero += 1;
    return Promise.resolve('tercero');
  };
  (async () => {
    console.log(await primeroQueFunciona([falla, segundo, tercero]));   // 'segundo'
    console.log(llamadasTercero);                                      // 0
    console.log(await primeroQueFunciona([tercero]));                  // 'tercero'
    console.log(llamadasTercero);                                      // 1
    await primeroQueFunciona([falla, falla]).catch(error => console.log(error.message));        // 'Todas fallaron'
    await primeroQueFunciona<string>([]).catch(error => console.log(error.message));            // 'Todas fallaron'
  })();

ESTO DEBE FALLAR
  // primeroQueFunciona([() => 5, () => Promise.resolve('a')]);   → las operaciones deben devolver promesas del mismo tipo.
  // primeroQueFunciona([falla, 'x']);                            → 'x' no es una función.

EXPLICA
  ¿Por qué el await va dentro del try, en el return? ¿Qué ocurriría si escribieras
  return operacion() sin await dentro del try?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 33 — Sumar precios consultados uno por uno
/*
SITUACIÓN
  Un carrito consulta el precio de cada producto en un servicio remoto. Algunos
  productos no tienen precio (la consulta falla): se anotan como fallidos y el resto se
  suma. La función de consulta llega como argumento.

QUÉ DEBES HACER
  1. Crea la interfaz Resumen con total (number) y fallidos (number[]).
  2. Crea la función async sumarPrecios(ids: number[], consultar: (id: number) =>
     Promise<number>): Promise<Resumen>:
     a) crea total (number) con 0 y fallidos (number[]) vacía;
     b) recorre ids con for...of, en orden. En cada vuelta, un try/catch:
        - en el try suma a total el valor de await consultar(id);
        - en el catch añade id a fallidos;
     c) devuelve { total, fallidos }.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  const consultar = (id: number): Promise<number> =>
    id > 3 ? Promise.reject(new Error('sin precio')) : Promise.resolve(id * 10);
  (async () => {
    console.log(await sumarPrecios([1, 2, 3], consultar));      // { total: 60, fallidos: [] }
    console.log(await sumarPrecios([1, 4, 2, 5], consultar));   // { total: 30, fallidos: [ 4, 5 ] }
    console.log(await sumarPrecios([], consultar));             // { total: 0, fallidos: [] }
    console.log(await sumarPrecios([9], consultar));            // { total: 0, fallidos: [ 9 ] }
  })();

ESTO DEBE FALLAR
  // sumarPrecios([1], id => id * 10);            → consultar debe devolver una promesa, no un número.
  // const r: Resumen = { total: 1 };             → falta fallidos.

EXPLICA
  ¿Por qué un id fallido no detiene el recorrido? ¿Qué cambiaría si no hubiera try/catch
  dentro del bucle?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 34 — Cargar una sola vez y recordar el valor
/*
SITUACIÓN
  Un cargador consulta un dato costoso la primera vez y recuerda el resultado para las
  demás. Si la primera consulta falla, NO se recuerda nada y la siguiente vuelve a
  intentarlo. El dato puede ser de cualquier tipo.

QUÉ DEBES HACER
  1. Crea la función normal crearCargador<T>(cargar: () => Promise<T>):
     () => Promise<T>. Dentro:
     a) crea la variable guardado con el tipo { valor: T } | undefined y valor inicial
        undefined (el objeto distingue «aún no cargado» de «cargó undefined»);
     b) devuelve una función async (sin parámetros) que:
        - si guardado no es undefined, devuelve guardado.valor sin llamar a cargar;
        - si es undefined, espera cargar() con await, guarda { valor: resultado } en
          guardado y devuelve resultado;
        - si cargar() falla, deja guardado sin cambiar y deja pasar el error.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  let veces = 0;
  const traerNombre = crearCargador(async () => {
    veces += 1;
    return 'Pilar';
  });
  let fallos = 0;
  const inestable = crearCargador(async (): Promise<number> => {
    fallos += 1;
    if (fallos < 2) {
      throw new Error('falló');
    }
    return 42;
  });
  (async () => {
    console.log(await traerNombre());       // 'Pilar'
    console.log(await traerNombre());       // 'Pilar'
    console.log(veces);                     // 1
    await inestable().catch(error => console.log(error.message));   // 'falló'
    console.log(await inestable());         // 42
    console.log(await inestable());         // 42
    console.log(fallos);                    // 2
  })();

ESTO DEBE FALLAR
  // const n: number = crearCargador(async () => 'texto');        → devuelve una función, no un número.
  // crearCargador(async () => 'a')().then(v => v.toFixed(1));    → el valor es un texto.

EXPLICA
  ¿Por qué se guarda { valor: T } y no simplemente T | undefined? ¿Qué dato marcaría
  'ya cargado' erróneamente si usaras T | undefined?
*/
(() => {
    // Tu solución.
})();

// TRAMO 7 — then, catch Y finally (35–39)

// !EJERCICIO 35 — Cadena de .then sin async ni await
/*
SITUACIÓN
  Un pedido pasa por tres etapas encadenadas: descuento, impuesto y formato. Cada
  etapa recibe el resultado de la anterior. Se construye solo con .then, sin async
  ni await.

QUÉ DEBES HACER
  1. Crea la función normal procesarPedido(precioBase: number): Promise<string>.
     Devuelve esta cadena, empezando en Promise.resolve(precioBase):
     a) primer .then: si precio es 100 o más, devuelve precio * 0.9; si no, devuelve
        precio sin cambios;
     b) segundo .then: devuelve Promise.resolve(precio * 1.16) (una promesa; la cadena
        espera su valor);
     c) tercer .then: devuelve 'Total: {n}', donde {n} es el precio con 2 decimales
        usando toFixed(2).
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    console.log(await procesarPedido(100));    // 'Total: 104.40'
    console.log(await procesarPedido(99.99));  // 'Total: 115.99'
    console.log(await procesarPedido(50));     // 'Total: 58.00'
    console.log(await procesarPedido(200));    // 'Total: 208.80'
    console.log(await procesarPedido(0));      // 'Total: 0.00'
  })();

ESTO DEBE FALLAR
  // procesarPedido('100');                       → precioBase debe ser number.
  // const total: number = procesarPedido(10);    → devuelve Promise<string>.

EXPLICA
  El segundo .then devuelve una promesa, no un número: ¿por qué el tercer .then recibe
  igualmente un número? ¿Qué tipo tiene precio en cada .then?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 36 — catch que recupera y catch que propaga
/*
SITUACIÓN
  Un catch puede resolver el problema (la cadena sigue cumplida), anotarlo y devolver
  undefined, o anotarlo y volver a lanzarlo (la cadena sigue rechazada).

QUÉ DEBES HACER
  1. Crea la función normal conRespaldo(promesa: Promise<number>): Promise<number>
     que devuelve promesa.catch(...) cuyo manejador devuelve 0.
  2. Crea la función normal registrando(promesa: Promise<number>):
     Promise<number | undefined> que devuelve promesa.catch(...) cuyo manejador
     imprime 'error registrado' y devuelve undefined.
  3. Crea la función normal propagando(promesa: Promise<number>): Promise<number> que
     devuelve promesa.catch(...) cuyo manejador imprime 'error visto' y vuelve a
     lanzar el mismo error con throw.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const mal = (): Promise<number> => Promise.reject(new Error('fallo'));
  const bien = (): Promise<number> => Promise.resolve(7);
  (async () => {
    console.log(await conRespaldo(mal()));
    console.log(await conRespaldo(bien()));
    console.log(await registrando(mal()));
    console.log(await registrando(bien()));
    try {
      await propagando(mal());
      console.log('no debe llegar');
    } catch (error) {
      console.log('sigue rechazada');
    }
    console.log(await propagando(bien()));
  })();

  Salida, en este orden:
    0
    7
    error registrado
    undefined
    7
    error visto
    sigue rechazada
    7

ESTO DEBE FALLAR
  // const n: number = await registrando(bien());   → puede ser undefined (y await solo vale en async).
  // conRespaldo(5);                                 → el argumento debe ser una promesa.

EXPLICA
  ¿Qué diferencia hay entre un catch que termina normalmente y uno que vuelve a lanzar
  el error? ¿Por qué 'no debe llegar' no se imprime?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 37 — finally: indicador de carga
/*
SITUACIÓN
  Una pantalla muestra «cargando» mientras espera datos y debe apagarlo al terminar,
  tanto si la carga tuvo éxito como si falló. finally no recibe el resultado y no
  elimina el rechazo.

QUÉ DEBES HACER
  1. Dentro de la función crea la variable cargando (boolean) con valor false.
  2. Crea la función normal cargarDatos(fallar: boolean): Promise<string>:
     a) pon cargando en true;
     b) crea base con new Promise<string>((resolve, reject) => { ... }): si fallar
        es true, reject(new Error('sin conexión')); si no, resolve('datos');
     c) devuelve base.finally(() => { ... }) donde el manejador pone cargando en false.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    const primera = cargarDatos(false);
    console.log(cargando);                // true
    console.log(await primera);           // 'datos'
    console.log(cargando);                // false
    const segunda = cargarDatos(true);
    console.log(cargando);                // true
    await segunda.catch(error => console.log(error.message));   // 'sin conexión'
    console.log(cargando);                // false
  })();

ESTO DEBE FALLAR
  // cargarDatos(1);                       → fallar debe ser boolean.
  // const datos: string = cargarDatos(false);   → devuelve Promise<string>.

EXPLICA
  ¿Por qué la promesa de la segunda carga sigue rechazada aunque finally se ejecutó?
  ¿Recibe finally el valor 'datos'?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 38 — Dos consultas dependientes encadenadas
/*
SITUACIÓN
  Para resumir a un usuario hay que buscarlo y, con su id, buscar sus pedidos. La
  segunda consulta depende de la primera. Si el usuario no existe, el resumen indica
  que no existe.

QUÉ DEBES HACER
  1. Crea las interfaces Usuario con id (number) y nombre (string), y Pedido con id
     (number), usuarioId (number) y total (number).
  2. Crea las listas usuarios (Usuario[]) con { id: 1, nombre: 'Ana' },
     { id: 2, nombre: 'Luis' }, en este orden; y pedidos (Pedido[]) con
     { id: 1, usuarioId: 1, total: 50 }, { id: 2, usuarioId: 1, total: 30 },
     { id: 3, usuarioId: 3, total: 99 }.
  3. Crea la función normal buscarUsuario(id: number): Promise<Usuario>: recorre
     usuarios con for...of y devuelve Promise.resolve(el usuario con ese id); si no
     hay, devuelve Promise.reject(new Error('Usuario inexistente')).
  4. Crea la función normal buscarPedidos(usuarioId: number): Promise<Pedido[]> que
     devuelve Promise.resolve(lista) con una lista nueva con los pedidos cuyo
     usuarioId sea ===, en orden (lista vacía si no hay ninguno).
  5. Crea la función normal resumenDe(id: number): Promise<string>, solo con .then y
     .catch (sin async/await):
     a) buscarUsuario(id) seguido de .then(usuario => ...) que devuelve
        buscarPedidos(usuario.id).then(lista => ...);
     b) en el then interno, suma los total de lista con for...of y devuelve
        '{nombre}: {n} pedidos, total {suma}', donde {n} es lista.length;
     c) al final de la cadena, .catch(() => ...) que devuelve 'Usuario {id} no existe'.
  6. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    console.log(await resumenDe(1));   // 'Ana: 2 pedidos, total 80'
    console.log(await resumenDe(2));   // 'Luis: 0 pedidos, total 0'
    console.log(await resumenDe(9));   // 'Usuario 9 no existe'
  })();

ESTO DEBE FALLAR
  // resumenDe('1');                            → id debe ser number.
  // buscarUsuario(1).then(u => u.apellido);    → Usuario no tiene apellido.

EXPLICA
  ¿Por qué el then externo devuelve una promesa en lugar de un valor? ¿Qué más captaría
  el catch final además de 'Usuario inexistente'?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 39 — Orden de salida en then, catch y finally
/*
SITUACIÓN
  Cuando una cadena falla, se saltan los .then hasta el siguiente .catch; y .finally
  siempre corre al final. Construyes la cadena y predices en qué orden imprime en
  tres casos distintos.

QUÉ DEBES HACER
  1. Crea la función normal trazar(falloInicial: boolean, falloEnSegundo: boolean):
     Promise<string>. Devuelve esta cadena:
     a) base: new Promise<string>((resolve, reject) => { ... }) que, si falloInicial
        es true, hace reject(new Error('inicial')) y, si no, resolve('dato');
     b) primer .then(dato => ...): imprime 'then 1' y devuelve dato;
     c) segundo .then(dato => ...): imprime 'then 2'; si falloEnSegundo es true,
        lanza new Error('segundo'); si no, devuelve dato;
     d) .catch(error => ...): imprime 'catch' y devuelve 'recuperado';
     e) .finally(() => ...): imprime 'finally'.
  2. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    console.log(await trazar(false, false));
    console.log(await trazar(true, false));
    console.log(await trazar(false, true));
  })();

  Salida, en este orden:
    then 1
    then 2
    finally
    dato
    catch
    finally
    recuperado
    then 1
    then 2
    catch
    finally
    recuperado

ESTO DEBE FALLAR
  // trazar(true);                           → faltan argumentos.
  // const t: boolean = trazar(false, false);   → devuelve Promise<string>.

EXPLICA
  ¿Por qué con falloInicial true no se imprime 'then 1' ni 'then 2'? ¿Por qué el
  texto final es 'dato' en el primer caso y 'recuperado' en los otros?
*/
(() => {
    // Tu solución.
})();

// TRAMO 8 — AXIOS SIMULADO: { data: T, status: number } (40–44)

// !EJERCICIO 40 — Simular axios.get<T> y leer response.data
/*
SITUACIÓN
  axios.get<T>(url) devuelve una promesa que se cumple con una respuesta: un objeto con
  data (los datos, de tipo T) y status (el código HTTP). Aquí no hay red: simulas esa
  forma con una promesa propia y practicas leer response.data.

QUÉ DEBES HACER
  1. Crea la función normal simularGet<T>(datos: T, status: number = 200):
     Promise<{ data: T; status: number }> que devuelve
     Promise.resolve({ data: datos, status: status }).
  2. Crea la función async traerDatos<T>(peticion: Promise<{ data: T; status: number }>):
     Promise<T>:
     a) espera peticion con await y guarda la respuesta;
     b) si response.status es menor que 200 o mayor o igual que 300, lanza
        new Error('Estado {status}');
     c) devuelve response.data (no la respuesta completa).
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    console.log(await traerDatos(simularGet<string>('Pilar')));   // 'Pilar'
    console.log(await traerDatos(simularGet<number>(7, 299)));    // 7
    console.log(await traerDatos(simularGet<boolean>(false)));    // false
    await traerDatos(simularGet<number>(7, 300)).catch(error => console.log(error.message));  // 'Estado 300'
    await traerDatos(simularGet<number>(7, 199)).catch(error => console.log(error.message));  // 'Estado 199'
    const respuesta = await simularGet<string>('hola', 201);
    console.log(respuesta.status);                                // 201
  })();

ESTO DEBE FALLAR
  // simularGet<string>('a').then(respuesta => respuesta.datos);   → la propiedad se llama data.
  // const n: number = traerDatos(simularGet<number>(1));         → devuelve Promise<number>.
  // simularGet<number>('7');                                      → '7' no es number.

EXPLICA
  ¿Qué diferencia hay entre response y response.data? ¿Qué devuelve traerDatos y qué
  tipo tiene el valor que sale de await traerDatos(simularGet<string>('Pilar'))?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 41 — getPokemon con una interfaz y errores 404
/*
SITUACIÓN
  Una Pokédex local imita el comportamiento de axios: pedir un id que existe cumple la
  promesa con una respuesta; pedir uno que no existe la rechaza con el mensaje de
  error 404 que usa axios. Una función devuelve solo los datos tipados.

QUÉ DEBES HACER
  1. Crea la interfaz Pokemon con id (number), name (string) y weight (number).
  2. Crea la constante base (tipo Record<number, Pokemon>) con tres entradas:
     1: { id: 1, name: 'bulbasaur', weight: 69 },
     4: { id: 4, name: 'charmander', weight: 85 },
     7: { id: 7, name: 'squirtle', weight: 90 }.
  3. Crea simularGet<T> igual que en el ejercicio 40 (datos, status = 200).
  4. Crea la función normal pedirPokemon(id: number): Promise<{ data: Pokemon;
     status: number }>:
     a) busca base[id];
     b) si es undefined, devuelve
        Promise.reject(new Error('Request failed with status code 404'));
     c) si existe, devuelve simularGet<Pokemon>(ese pokemon).
  5. Crea la función de flecha async const getPokemon = async (pokemonId: number):
     Promise<Pokemon>: espera pedirPokemon(pokemonId), desestructura
     const { data } = ... y devuelve data.
  6. Crea la función normal nombreMayusculas(id: number): Promise<string> con
     .then y .catch: getPokemon(id).then(...) que devuelve el name en mayúsculas, y
     .catch(...) que devuelve 'DESCONOCIDO'.
  7. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    console.log((await getPokemon(4)).name);                           // 'charmander'
    console.log(await nombreMayusculas(7));                            // 'SQUIRTLE'
    console.log(await nombreMayusculas(99));                           // 'DESCONOCIDO'
    console.log(await getPokemon(1).then(pokemon => pokemon.id));      // 1
    await getPokemon(99).catch(error => console.log(error.message));   // 'Request failed with status code 404'
  })();

ESTO DEBE FALLAR
  // getPokemon(4).then(pokemon => pokemon.altura);   → Pokemon no tiene altura.
  // getPokemon('4');                                 → pokemonId debe ser number.
  // const base2: Record<number, Pokemon> = { 1: { id: 1, name: 'x' } };   → falta weight.

EXPLICA
  <Pokemon> en simularGet<Pokemon> no valida nada al ejecutar: ¿qué garantiza
  exactamente? ¿Qué recibe el .then de nombreMayusculas y de dónde sale ese valor?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 42 — Imprimir no es retornar (peso total)
/*
SITUACIÓN
  Un laboratorio suma el peso de varios pokémon consultados uno por uno. Una función
  DEVUELVE el total; otra solo lo IMPRIME y por eso su promesa se cumple con undefined.
  Los ids que no existen se omiten.

QUÉ DEBES HACER
  1. Crea de nuevo, igual que en el ejercicio 41: la interfaz Pokemon, la constante
     base, simularGet<T>, pedirPokemon y getPokemon.
  2. Crea la función async pesoTotal(ids: number[]): Promise<number>:
     a) crea total (number) con 0;
     b) recorre ids con for...of, en orden. En cada vuelta, un try/catch: en el try
        suma el weight de await getPokemon(id); en el catch no hagas nada;
     c) devuelve total.
  3. Crea la función async reportarPeso(ids: number[]): Promise<void>: espera
     pesoTotal(ids), imprime 'Peso total: {total}' y NO devuelve valor.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    console.log(await pesoTotal([1, 4]));
    console.log(await pesoTotal([1, 99, 7]));
    console.log(await pesoTotal([]));
    const resultado = await reportarPeso([1, 4, 7]);
    console.log(resultado);
  })();

  Salida, en este orden:
    154
    159
    0
    Peso total: 244
    undefined

ESTO DEBE FALLAR
  // pesoTotal(['1']);                              → ids debe ser una lista de números.
  // reportarPeso([1]).then(total => total + 1);    → el valor de Promise<void> no es un número.

EXPLICA
  ¿Qué cambiarías en reportarPeso para que su promesa se cumpla con el total? ¿Qué
  tipo de retorno pondrías?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 43 — Pokédex con caché (Singleton, getter y async)
/*
SITUACIÓN
  Una Pokédex compartida por toda la app guarda en memoria los pokémon ya consultados
  para no pedirlos otra vez. Cada petición al servidor simulado se cuenta, también si
  falla; los fallos no se guardan.

QUÉ DEBES HACER
  1. Crea de nuevo, igual que en el ejercicio 41: la interfaz Pokemon, la constante
     base, simularGet<T> y pedirPokemon.
  2. Crea la clase Pokedex con:
     a) una propiedad estática privada instancia (Pokedex | undefined), sin valor;
     b) una propiedad oculta guardados (Record<number, Pokemon>), vacía ({});
     c) una propiedad oculta _peticiones (number) con valor 0;
     d) un constructor privado sin parámetros.
  3. En Pokedex crea el método estático obtener(): Pokedex: si instancia es undefined,
     la crea con new Pokedex(); devuelve siempre la misma.
  4. En Pokedex crea el getter peticiones (devuelve number) que devuelve _peticiones.
  5. En Pokedex crea el método async buscar(id: number): Promise<Pokemon>:
     a) si guardados[id] no es undefined, lo devuelve sin pedir nada;
     b) si no, suma 1 a _peticiones, espera pedirPokemon(id), guarda data en
        guardados[id] y devuelve data. Si pedirPokemon falla, deja pasar el error y no
        guardes nada.
  6. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    const a = Pokedex.obtener();
    const b = Pokedex.obtener();
    console.log(a === b);                                                // true
    console.log((await a.buscar(4)).name);                               // 'charmander'
    console.log((await b.buscar(4)).name);                               // 'charmander'
    console.log(a.peticiones);                                           // 1
    await a.buscar(1);
    console.log(b.peticiones);                                           // 2
    await a.buscar(99).catch(error => console.log(error.message));       // 'Request failed with status code 404'
    console.log(a.peticiones);                                           // 3
    await b.buscar(99).catch(error => console.log(error.message));       // 'Request failed with status code 404'
    console.log(b.peticiones);                                           // 4
  })();

ESTO DEBE FALLAR
  // new Pokedex();                          → el constructor es private.
  // Pokedex.obtener().peticiones = 10;      → peticiones solo tiene getter.
  // Pokedex.instancia;                      → instancia es private.

EXPLICA
  ¿Por qué b ve las peticiones que hizo a? ¿Por qué buscar(99) cuenta dos peticiones
  seguidas y buscar(4) solo una?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 44 — Descargar todas las páginas
/*
SITUACIÓN
  Un servicio entrega una lista de elementos por páginas. Cada respuesta trae sus
  elementos y el número de la página siguiente (o null si es la última). Hay que
  recorrer las páginas en orden y juntar todos los elementos.

QUÉ DEBES HACER
  1. Crea la interfaz Pagina con elementos (string[]) y siguiente (number | null).
  2. Crea la constante paginas (tipo Record<number, Pagina>) con:
     1: { elementos: ['a', 'b'], siguiente: 2 },
     2: { elementos: ['c'], siguiente: 3 },
     3: { elementos: ['d', 'e'], siguiente: null }.
  3. Crea simularGet<T> igual que en el ejercicio 40.
  4. Crea la función normal pedirPagina(numero: number): Promise<{ data: Pagina;
     status: number }>: si paginas[numero] es undefined, devuelve
     Promise.reject(new Error('Página {numero} no existe')); si existe, devuelve
     simularGet<Pagina>(esa página).
  5. Crea la función async descargarTodo(inicio: number): Promise<string[]>. Supón
     que las páginas no forman un ciclo:
     a) crea todos (string[]) vacía y actual (number | null) con valor inicio;
     b) mientras actual no sea null: espera pedirPagina(actual), desestructura
        const { data } = ..., añade con push cada elemento de data.elementos y asigna
        data.siguiente a actual;
     c) devuelve todos. Si una página no existe, el error sale tal cual.
  6. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    console.log(await descargarTodo(1));   // [ 'a', 'b', 'c', 'd', 'e' ]
    console.log(await descargarTodo(2));   // [ 'c', 'd', 'e' ]
    console.log(await descargarTodo(3));   // [ 'd', 'e' ]
    await descargarTodo(9).catch(error => console.log(error.message));   // 'Página 9 no existe'
  })();

ESTO DEBE FALLAR
  // descargarTodo('1');                                       → inicio debe ser number.
  // const p: Pagina = { elementos: ['a'] };                   → falta siguiente.
  // pedirPagina(1).then(r => r.data.elementos.push(5));       → los elementos son textos.

EXPLICA
  ¿Por qué actual se declara como number | null y no solo number? ¿Qué cumple la
  promesa final cuando se empieza en la última página?
*/
(() => {
    // Tu solución.
})();

// TRAMO 9 — INTEGRACIÓN (45–50)

// !EJERCICIO 45 — Matrícula de cursos
/*
SITUACIÓN
  Una academia matricula alumnos en cursos con cupo limitado. Buscar un curso es
  asíncrono y debe funcionar con cualquier lista de elementos con id. Cada matrícula
  lleva la cuenta de sus intentos y tiene sus propios cursos.

QUÉ DEBES HACER
  1. Crea la interfaz Curso con id (number), titulo (string) y cupo (number).
  2. Crea la función normal buscarPorId<T extends { id: number }>(lista: T[], id: number):
     Promise<T>: recorre lista con for...of y devuelve Promise.resolve(el primer
     elemento con ese id); si no hay, devuelve
     Promise.reject(new Error('No existe el id {id}')).
  3. Crea la clase Matricula. Declara en su constructor cursos (Curso[], oculto).
     Añade la propiedad oculta _intentos (number) con valor 0.
  4. En Matricula crea el getter intentos (devuelve number) que devuelve _intentos.
  5. En Matricula crea el método async inscribir(idCurso: number, alumno: string):
     Promise<string>:
     a) suma 1 a _intentos (antes de cualquier otra cosa);
     b) obtén el curso con await buscarPorId(this.cursos, idCurso);
     c) si el cupo del curso es 0, lanza new Error('Sin cupo');
     d) resta 1 al cupo y devuelve 'Inscrito: {alumno} en {titulo}'.
  6. En Matricula crea el método async cupoDe(idCurso: number): Promise<number> que
     devuelve el cupo del curso (no cuenta como intento).
  7. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    const mat = new Matricula([
      { id: 1, titulo: 'TypeScript', cupo: 2 },
      { id: 2, titulo: 'Node', cupo: 0 },
    ]);
    console.log(await mat.inscribir(1, 'Ana'));                                // 'Inscrito: Ana en TypeScript'
    console.log(await mat.cupoDe(1));                                          // 1
    console.log(await mat.inscribir(1, 'Luis'));                               // 'Inscrito: Luis en TypeScript'
    await mat.inscribir(1, 'Eva').catch(error => console.log(error.message));  // 'Sin cupo'
    await mat.inscribir(2, 'Eva').catch(error => console.log(error.message));  // 'Sin cupo'
    await mat.inscribir(7, 'Eva').catch(error => console.log(error.message));  // 'No existe el id 7'
    console.log(mat.intentos);                                                 // 5
    const otra = new Matricula([{ id: 1, titulo: 'TypeScript', cupo: 1 }]);
    console.log(await otra.cupoDe(1));                                         // 1
    console.log(otra.intentos);                                                // 0
  })();

ESTO DEBE FALLAR
  // new Matricula([]).cursos;                  → cursos es private.
  // new Matricula([]).intentos = 3;            → intentos solo tiene getter.
  // buscarPorId(['a', 'b'], 1);                → los textos no tienen id.

EXPLICA
  ¿Por qué buscarPorId devuelve el curso con su tipo completo (Curso) y no solo
  { id: number }? ¿Por qué otra empieza con 0 intentos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 46 — Informes con clase abstracta
/*
SITUACIÓN
  Cada informe obtiene sus datos de forma asíncrona y todos se presentan igual: título
  y promedio, o un mensaje si no hay datos o la obtención falla. La parte común vive en
  una clase abstracta; cada informe concreto solo dice de dónde salen sus datos. Se
  cuenta cuántos informes se generaron, tengan éxito o no.

QUÉ DEBES HACER
  1. Crea la función normal entregar<T>(valor: T): Promise<T> que devuelve
     Promise.resolve(valor).
  2. Crea la función normal fallarCon<T>(mensaje: string): Promise<T> que devuelve
     Promise.reject(new Error(mensaje)).
  3. Crea la clase abstracta Reporte con:
     a) una propiedad estática pública generados (number) con valor 0;
     b) un constructor que declara titulo (string, solo jerarquía);
     c) el método abstracto obtenerDatos(): Promise<number[]> (solo jerarquía).
  4. En Reporte crea el método async generar(): Promise<string>. Usa un try/catch/
     finally:
     a) en el try espera this.obtenerDatos(); si la lista está vacía, devuelve
        '{titulo}: sin datos'; si no, calcula el promedio con un for...of y devuelve
        '{titulo}: promedio {n}', con n a 1 decimal usando toFixed(1);
     b) en el catch devuelve '{titulo}: error';
     c) en el finally suma 1 a Reporte.generados.
  5. Crea tres clases que extiendan Reporte (cada una con un constructor sin
     parámetros que pasa su título a super):
     a) ReporteVentas, título 'Ventas': obtenerDatos devuelve entregar([10, 20, 25]);
     b) ReporteVacio, título 'Vacío': devuelve entregar<number[]>([]);
     c) ReporteRoto, título 'Roto': devuelve fallarCon<number[]>('sin conexión').
  6. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    console.log(await new ReporteVentas().generar());   // 'Ventas: promedio 18.3'
    console.log(Reporte.generados);                     // 1
    console.log(await new ReporteVacio().generar());    // 'Vacío: sin datos'
    console.log(await new ReporteRoto().generar());     // 'Roto: error'
    console.log(Reporte.generados);                     // 3
  })();

ESTO DEBE FALLAR
  // new Reporte('x');                          → Reporte es abstracta.
  // new ReporteVentas().obtenerDatos();        → obtenerDatos es protected.
  // new ReporteVentas().titulo;                → titulo es protected.

EXPLICA
  ¿Por qué fallarCon<number[]>('x') necesita el tipo escrito y entregar([1, 2]) no?
  ¿Se suma a generados cuando el try devuelve con return antes del final?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 47 — Torneo de héroes con Axios simulado
/*
SITUACIÓN
  Un torneo trae héroes de un servicio simulado y decide quién gana por nivel de
  peligro. Si algún héroe no existe, el combate se cancela. La comparación es una
  función genérica reutilizable y los tipos se comparten desde un barrel.

QUÉ DEBES HACER
  1. Crea la interfaz Hero con name (string), realName (string) y dangerLevel (number).
  2. Crea la constante base (tipo Record<number, Hero>) con:
     1: { name: 'Logan', realName: 'James Howlett', dangerLevel: 90 },
     2: { name: 'Storm', realName: 'Ororo Munroe', dangerLevel: 120 },
     3: { name: 'Cíclope', realName: 'Scott Summers', dangerLevel: 90 }.
  3. Crea simularGet<T> igual que en el ejercicio 40 (datos, status = 200).
  4. Crea la función async traerHeroe(id: number): Promise<Hero>: si base[id] es
     undefined, lanza new Error('Request failed with status code 404'); si existe,
     espera simularGet<Hero>(ese héroe), desestructura const { data } = ... y
     devuelve data.
  5. Crea la función normal masPeligroso<T extends { dangerLevel: number }>(a: T,
     b: T): T que devuelve b si su dangerLevel es MAYOR que el de a; si no, a.
  6. Crea la función async pelea(idA: number, idB: number): Promise<string>:
     a) en un try, espera traerHeroe(idA) y después traerHeroe(idB);
     b) si los dos dangerLevel son iguales, devuelve 'Empate';
     c) si no, devuelve 'Gana {name}' con el name del resultado de masPeligroso;
     d) en el catch devuelve 'Combate cancelado'.
  7. Bajo tu código escribe, como comentario, la línea de Interfaces/index.ts que
     exporta Hero como tipo y la línea de un consumidor que lo importa.
  8. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    console.log(await pelea(1, 2));    // 'Gana Storm'
    console.log(await pelea(2, 1));    // 'Gana Storm'
    console.log(await pelea(1, 3));    // 'Empate'
    console.log(await pelea(1, 9));    // 'Combate cancelado'
    console.log(await pelea(9, 1));    // 'Combate cancelado'
    console.log((await traerHeroe(3)).realName);   // 'Scott Summers'
  })();

ESTO DEBE FALLAR
  // pelea(1);                                     → falta idB.
  // const h: Hero = traerHeroe(1);                → devuelve Promise<Hero>.
  // masPeligroso({ name: 'x' }, { name: 'y' });   → faltan dangerLevel.

EXPLICA
  ¿Por qué el empate se decide fuera de masPeligroso? ¿Por qué pelea(9, 1) también
  cancela si el héroe 1 sí existe?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 48 — Ejecutar tareas en orden y resumir estados
/*
SITUACIÓN
  Un procesador ejecuta tareas asíncronas una tras otra. Las que fallan se marcan y se
  omiten; las demás aportan su resultado. Después se resume cuántas salieron bien y
  cuántas mal. Las tareas devuelven cualquier tipo, pero todas el mismo.

QUÉ DEBES HACER
  1. Crea el enum Estado con dos miembros, en este orden: Completado y Fallido.
  2. Crea la función async ejecutarTodas<T>(tareas: (() => Promise<T>)[]):
     Promise<{ resultados: T[]; estados: Estado[] }>:
     a) crea resultados (T[]) y estados (Estado[]), ambas vacías;
     b) recorre tareas con for...of, en orden. En cada vuelta, un try/catch: en el
        try espera la tarea, añade el valor a resultados y Estado.Completado a
        estados; en el catch añade Estado.Fallido a estados;
     c) devuelve { resultados, estados }.
  3. Crea la función normal resumirEstados(estados: Estado[]): [number, number] que
     recorre estados con for...of y devuelve la tupla [completados, fallidos].
  4. Ejecuta COMPRUEBA. Recibe el resultado con desestructuración.

COMPRUEBA
  const tarea10 = (): Promise<number> => Promise.resolve(10);
  const tarea20 = (): Promise<number> => Promise.resolve(20);
  const rota = (): Promise<number> => Promise.reject(new Error('rota'));
  (async () => {
    const { resultados, estados } = await ejecutarTodas([tarea10, rota, tarea20]);
    console.log(resultados);                          // [ 10, 20 ]
    console.log(estados.length);                      // 3
    console.log(estados[1] === Estado.Fallido);       // true
    const [buenas, malas] = resumirEstados(estados);
    console.log(buenas);                              // 2
    console.log(malas);                               // 1
    const vacio = await ejecutarTodas<number>([]);
    console.log(vacio.resultados.length);             // 0
    console.log(resumirEstados(vacio.estados));       // [ 0, 0 ]
  })();

ESTO DEBE FALLAR
  // resumirEstados(['Completado']);                    → los textos no son Estado.
  // const [uno, dos, tres] = resumirEstados([]);       → la tupla solo tiene 2 posiciones.
  // ejecutarTodas([tarea10, () => Promise.resolve('x')]);   → todas las tareas deben devolver el mismo tipo.

EXPLICA
  ¿Por qué resultados puede ser más corta que estados? ¿Qué tipo tienen los valores
  de resultados cuando llamas con [tarea10, rota, tarea20]?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 49 — Sesión única con bloqueo tras fallos
/*
SITUACIÓN
  Una app tiene una sola sesión compartida. Iniciar sesión consulta un servidor
  simulado: con la clave correcta entrega un token; con una incorrecta responde 401.
  Tras 3 fallos seguidos la cuenta se bloquea y ya no se consulta al servidor.

QUÉ DEBES HACER
  1. Crea simularGet<T> igual que en el ejercicio 40 (datos, status = 200).
  2. Crea la constante claves (tipo Record<string, string>) con
     { ana: 'abc123', luis: 'xyz789' }.
  3. Crea la función normal pedirToken(usuario: string, clave: string):
     Promise<{ data: { token: string }; status: number }>: si claves[usuario] es
     === clave, devuelve simularGet<{ token: string }>({ token: 'token-{usuario}' });
     si no, devuelve Promise.reject(new Error('Request failed with status code 401')).
  4. Crea la clase Sesion con:
     a) una propiedad estática privada instancia (Sesion | undefined), sin valor;
     b) propiedades ocultas intentosFallidos (number, valor 0) y token (string |
        undefined, valor undefined);
     c) un constructor privado sin parámetros.
  5. En Sesion crea el método estático obtener(): Sesion que crea la instancia la
     primera vez y devuelve siempre la misma.
  6. En Sesion crea el getter activa (devuelve boolean): true si token no es undefined.
  7. En Sesion crea el método async iniciar(usuario: string, clave: string):
     Promise<string>:
     a) si intentosFallidos es 3 o más, lanza new Error('Cuenta bloqueada') sin
        llamar a pedirToken;
     b) en un try, espera pedirToken, guarda el token recibido en token, pon
        intentosFallidos en 0 y devuelve el token;
     c) en el catch suma 1 a intentosFallidos y vuelve a lanzar el mismo error con throw.
  8. En Sesion crea el método cerrar(): void que pone token en undefined.
  9. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    const s1 = Sesion.obtener();
    const s2 = Sesion.obtener();
    console.log(s1 === s2);                                                              // true
    console.log(s1.activa);                                                              // false
    await s1.iniciar('ana', 'mala').catch(error => console.log(error.message));          // 'Request failed with status code 401'
    await s1.iniciar('ana', 'mala').catch(error => console.log(error.message));          // 'Request failed with status code 401'
    console.log(await s2.iniciar('ana', 'abc123'));                                      // 'token-ana'
    console.log(s1.activa);                                                              // true
    s1.cerrar();
    console.log(s2.activa);                                                              // false
    await s1.iniciar('luis', 'x').catch(error => console.log(error.message));            // 'Request failed with status code 401'
    await s1.iniciar('luis', 'y').catch(error => console.log(error.message));            // 'Request failed with status code 401'
    await s1.iniciar('luis', 'z').catch(error => console.log(error.message));            // 'Request failed with status code 401'
    await s1.iniciar('luis', 'xyz789').catch(error => console.log(error.message));       // 'Cuenta bloqueada'
    console.log(s2.activa);                                                              // false
  })();

ESTO DEBE FALLAR
  // new Sesion();                         → el constructor es private.
  // Sesion.obtener().activa = true;       → activa solo tiene getter.
  // Sesion.instancia;                     → instancia es private.

EXPLICA
  ¿Por qué tras dos fallos seguidos todavía se puede iniciar sesión y tras el tercero ya
  no? ¿Qué le pasa al contador de fallos cuando un inicio tiene éxito? ¿Por qué s2 ve el
  token que inició s1?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 50 — Carrito de compra con stock remoto
/*
SITUACIÓN
  Una tienda llena un carrito y, al confirmar, consulta el stock de cada línea en un
  servidor simulado. La confirmación devuelve una pareja [éxito, mensaje]. Cada carrito
  lleva la cuenta de sus confirmaciones y no comparte líneas con otros carritos.

QUÉ DEBES HACER
  1. Crea la interfaz Producto con id (number), nombre (string) y precio (number).
  2. Crea la lista catalogo (Producto[]) con, en este orden:
     { id: 1, nombre: 'Lápiz', precio: 5 }, { id: 2, nombre: 'Cuaderno', precio: 45 },
     { id: 3, nombre: 'Regla', precio: 12 }, { id: 4, nombre: 'Goma', precio: 3 }.
  3. Crea la constante stockServidor (tipo Record<number, number>) con
     { 1: 5, 2: 0, 3: 2 }. El producto 4 no existe en el servidor.
  4. Crea la función normal consultarStock(id: number): Promise<{ data: { stock:
     number }; status: number }>: si stockServidor[id] es undefined, devuelve
     Promise.reject(new Error('Request failed with status code 404')); si existe,
     devuelve Promise.resolve({ data: { stock: ese valor }, status: 200 }).
  5. Crea la función normal buscarPorId<T extends { id: number }>(lista: T[],
     id: number): T | undefined que devuelve el primer elemento con ese id, o
     undefined.
  6. Crea la clase Carrito con las propiedades ocultas lineas ([Producto, number][],
     vacía) y _confirmaciones (number, valor 0), y el getter lineasActuales (number)
     que devuelve lineas.length, y el getter confirmaciones (number).
  7. En Carrito crea el método agregar(id: number, cantidad: number = 1): boolean:
     a) si cantidad es 0 o menor, devuelve false;
     b) busca el producto con buscarPorId(catalogo, id); si no existe, devuelve false;
     c) si ya hay una línea con ese producto, suma cantidad a su cantidad; si no,
        añade con push la línea [producto, cantidad];
     d) devuelve true.
  8. En Carrito crea el método agregarVarios(...ids: number[]): number que llama a
     agregar(id) para cada id y devuelve cuántos se aceptaron.
  9. En Carrito crea el método async confirmar(): Promise<[boolean, string]>:
     a) suma 1 a _confirmaciones;
     b) si no hay líneas, devuelve [false, 'Carrito vacío'];
     c) crea total (number) con 0 y recorre lineas con for...of, desestructurando
        cada línea como [producto, cantidad]. En cada vuelta, un try/catch:
        - en el try espera consultarStock(producto.id); si data.stock es MENOR que
          cantidad, devuelve [false, 'Sin stock: {nombre}']; si no, suma
          precio * cantidad a total;
        - en el catch devuelve [false, 'Sin respuesta: {nombre}'];
     d) si terminó el recorrido, vacía lineas (asigna una lista nueva vacía) y
        devuelve [true, 'Total: {total}'].
     Si una línea falla, el carrito conserva sus líneas.
  10. Bajo tu código escribe, como comentario, la línea de Interfaces/index.ts que
      exporta Producto como tipo.
  11. Ejecuta COMPRUEBA.

COMPRUEBA
  (async () => {
    const carrito = new Carrito();
    console.log(carrito.agregar(1, 2));                  // true
    console.log(carrito.agregar(9));                     // false
    console.log(carrito.agregar(1, 0));                  // false
    console.log(carrito.agregarVarios(1, 3, 9, 4));      // 3
    console.log(carrito.lineasActuales);                 // 3
    console.log(await carrito.confirmar());              // [ false, 'Sin respuesta: Goma' ]
    console.log(carrito.lineasActuales);                 // 3
    const c2 = new Carrito();
    c2.agregarVarios(1, 3);
    console.log(await c2.confirmar());                   // [ true, 'Total: 17' ]
    console.log(c2.lineasActuales);                      // 0
    console.log(await c2.confirmar());                   // [ false, 'Carrito vacío' ]
    console.log(c2.confirmaciones);                      // 2
    const c3 = new Carrito();
    c3.agregar(3, 2);
    console.log(await c3.confirmar());                   // [ true, 'Total: 24' ]
    c3.agregar(3, 1);
    c3.agregar(3, 2);
    console.log(c3.lineasActuales);                      // 1
    console.log(await c3.confirmar());                   // [ false, 'Sin stock: Regla' ]
    const c4 = new Carrito();
    c4.agregar(2);
    console.log(await c4.confirmar());                   // [ false, 'Sin stock: Cuaderno' ]
    console.log(carrito.confirmaciones);                 // 1
  })();

ESTO DEBE FALLAR
  // new Carrito().lineas;                        → lineas es private.
  // new Carrito().confirmaciones = 5;            → confirmaciones solo tiene getter.
  // buscarPorId(['a'], 1);                       → los textos no tienen id.

EXPLICA
  ¿Por qué lineas guarda parejas [Producto, number] y no solo productos? ¿Por qué c3
  acepta una línea de Regla con cantidad 2 (stock 2), pero rechaza después 1 + 2?
*/
(() => {
    // Tu solución.
})();
