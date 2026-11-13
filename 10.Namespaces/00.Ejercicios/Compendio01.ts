/*
COMPENDIO 01 — NAMESPACES Y MÓDULOS
50 ejercicios de repaso de la sección 10, de menos a más difícil.
Ejercicios 01–16: solo namespaces (con lo aprendido en secciones anteriores).
Ejercicios 17–24: módulos (import, export, alias, * as, default), con clases y namespaces exportados.
Ejercicios 25–34: namespaces combinados con clases, interfaces, tuplas, get/set, static...
Ejercicios 35–50: módulos + namespaces + clases e interfaces, hasta integrarlo todo.

SUBSECCIONES
  01 Introducción ...... namespace, export de miembros, acceso Namespace.miembro,
                         miembros sin export, export {} (archivo como módulo)
  02 Imports y exports . export / import por nombre, alias con as, import * as,
                         export default, import de un namespace exportado

TABLA DE PROGRESIÓN
  01–08  Namespace básico: export, miembros privados, estado interno, tipos exportados
  09–16  Namespace con lógica: Date, tuplas, enum, typeof, funciones como valores, bucles
  17–24  Módulos: import por nombre, alias, * as, default, clases y namespaces exportados
  25–34  Namespaces + clases (extends, abstract, get/set, static) e interfaces (implements)
  35–42  Módulos que importan módulos, default + nombrados, enum, singleton, namespaces
  43–50  Integración: módulos + namespaces + clases + interfaces + enum en un solo problema

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN: te dice qué se está modelando.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta.
  3. Escribe las instrucciones de COMPRUEBA con console.log. Cada línea trae
     el resultado esperado después de //. Antes de ejecutar, predice qué saldrá.
     Los textos se muestran entre comillas simples; tu consola los imprimirá sin ellas.
  4. Si hay líneas en ESTO DEBE FALLAR, pruébalas una por una: descomenta, comprueba
     que TypeScript marca error y vuelve a comentarla.
  5. Responde EXPLICA en un comentario bajo tu solución.

DÓNDE ESCRIBIR CADA COSA
  - Un namespace solo puede declararse a nivel de módulo, NO dentro de la función
    autoinvocada. Por eso, cuando un ejercicio pide un namespace, escríbelo en el hueco
    «Tu solución: nivel superior», justo ENCIMA de la función autoinvocada. Lo mismo vale
    para un enum que el namespace necesite (ejercicio 12). El nombre es único por ejercicio
    (Ej07Inventario, Ej12Salas...).
  - Las pruebas de COMPRUEBA, las clases y las funciones auxiliares sueltas van DENTRO
    de la función autoinvocada, en el hueco «// Tu solución.».
  - Los ejercicios 17 al 24 y 35 al 50 usan archivos auxiliares. Créalos en la carpeta
    10.Namespaces/00.Ejercicios/modulos/ con el nombre exacto que indica cada enunciado.
    Las líneas import que aparecen en el enunciado se escriben en la ZONA DE IMPORTS
    (justo debajo de este comentario), nunca dentro de una función. Mientras no las
    escribas, el archivo compila igual: los import están solo como texto en los enunciados.
  - Comando de compilación (desde la raíz del curso, sin generar archivos):
    ./node_modules/.bin/tsc --noEmit --strict --ignoreConfig --exactOptionalPropertyTypes --noUncheckedIndexedAccess --target es2022 '10.Namespaces/00.Ejercicios/Compendio01.ts'
    Para ejecutar, compila a una carpeta aparte (por ejemplo con --module commonjs --outDir)
    y corre el .js resultante con node. Si tu editor marca error en un import (TS1295) por la
    configuración del proyecto, guíate por el resultado del comando anterior.

VOCABULARIO DE LOS ENUNCIADOS
  «exportado» = declarado con export dentro del namespace o del módulo.
  «privado del namespace / del módulo» = declarado sin export; solo se usa por su nombre,
    sin prefijo, dentro del mismo bloque o archivo.
  «supón» = el dato ya es válido; no lo compruebes.
  «oculto» = private · «visible» = public · «solo jerarquía» = protected.
  {llaves} en un texto = valor que sustituyes; las llaves no se escriben.
  «toFixed(2)» = el número como texto con 2 decimales.
  «null / undefined / []» = el valor de rechazo que se indica en cada paso.

REGLAS COMUNES
  - Cada ejercicio va dentro de su función (() => { ... })(); son independientes.
    Lo que va a nivel superior lleva el nombre EjNN... para no chocar con otros ejercicios.
  - Pon tipos a propiedades, parámetros y retornos. No uses any.
  - Dentro de un namespace, un miembro llama a otro por su nombre, sin escribir el
    namespace delante. Fuera del namespace siempre se escribe Namespace.miembro.
  - Un namespace no se instancia (sin new). Un tipo exportado de un namespace se usa
    fuera como Namespace.Tipo.
  - Los módulos auxiliares exportan valores (constantes, funciones, clases, enum,
    namespaces). No exportes type ni interface sueltos desde un módulo; sí pueden ir
    dentro de un namespace exportado.
  - Un import es de solo lectura: no se reasigna el nombre importado.
  - Cada alias de import empieza por el número del ejercicio (ej17..., Ej22...), así
    no se repite ningún nombre.
  - Un método que modifica y devuelve boolean: true si acepta, false si rechaza.
    Si rechaza, no cambia nada y no lanza errores.
  - Una función que consulta no modifica nada. Imprimir no sustituye a devolver.
  - Si una función debe devolver una copia o un arreglo nuevo, no devuelvas el arreglo
    interno.
  - Los resultados de COMPRUEBA ya consideran el estado que dejan las líneas anteriores:
    ejecútalas en el orden en que aparecen.

PROHIBIDO POR NO HABERSE VISTO
  - Webpack, genéricos (<T>, Array<T>, Record, Map, Set, Promise), decoradores, import type,
    export =, declare, import() dinámico, /// reference, namespaces anidados dentro de
    otros namespaces del mismo ejercicio o con el mismo nombre repetido.
  - Métodos de arreglos distintos de push, join y length (nada de map, filter, reduce,
    sort, find, includes, indexOf, slice, splice). Tampoco split, padStart, Math, Number(),
    parseInt, expresiones regulares, switch ni try/catch. Para recorrer usa for...of,
    for clásico, o for...in. Para ordenar o buscar, escribe tú el bucle.
  - Sí puedes usar: if/else, ternario, while/for, template strings, operadores (% incluido),
    ?. y ??, typeof, isNaN, toFixed, toUpperCase, toLowerCase, charAt, length, Date,
    desestructuración, parámetros opcionales, por defecto y rest, type, interface, enum,
    tuplas, clases (extends, abstract, get/set, static, private constructor, implements).
  - No hay soluciones incluidas.
*/

// ZONA DE IMPORTS: escribe aquí, cuando un ejercicio lo pida, sus líneas import.

export {};

// ===========================================================================
// TRAMO 1 — NAMESPACE BÁSICO: EJERCICIOS 01 AL 08
// ===========================================================================

// !EJERCICIO 01 — Reglas para una clave
/*
SITUACIÓN
  Un formulario de registro valida claves. Las reglas se agrupan en un namespace
  para que sus nombres (validar, fuerza) no se mezclen con los del resto del programa.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej01Clave.
  2. Dentro, con export, crea la constante validar (función flecha). Recibe
     clave (string) y devuelve boolean: true si la clave tiene de 6 a 12
     caracteres, ambos extremos incluidos; false en cualquier otro caso.
  3. Con export crea la constante fuerza (función flecha). Recibe clave (string) y
     devuelve string:
     a) llama a validar(clave) SIN escribir el nombre del namespace; si da false,
        devuelve 'inválida';
     b) si la longitud es 6 o 7, devuelve 'débil';
     c) si la longitud es de 8 a 10, devuelve 'media';
     d) si la longitud es 11 o 12, devuelve 'fuerte'.
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  console.log(Ej01Clave.validar('12345'));         // false
  console.log(Ej01Clave.validar('123456'));        // true
  console.log(Ej01Clave.validar('123456789012'));  // true
  console.log(Ej01Clave.validar('1234567890123')); // false
  console.log(Ej01Clave.validar(''));              // false
  console.log(Ej01Clave.fuerza('abc'));            // 'inválida'
  console.log(Ej01Clave.fuerza('abcdef'));         // 'débil'
  console.log(Ej01Clave.fuerza('abcdefg'));        // 'débil'
  console.log(Ej01Clave.fuerza('abcdefgh'));       // 'media'
  console.log(Ej01Clave.fuerza('abcdefghij'));     // 'media'
  console.log(Ej01Clave.fuerza('abcdefghijk'));    // 'fuerte'
  console.log(Ej01Clave.fuerza('abcdefghijklm'));  // 'inválida'

ESTO DEBE FALLAR
  // const k = new Ej01Clave();  → un namespace no es una clase, no se instancia.
  // Ej01Clave.validar(123456);  → validar recibe un string, no un number.
  // Ej01Clave.fuerza();         → falta el argumento clave.

EXPLICA
  ¿Por qué dentro del namespace escribes validar(clave) y fuera Ej01Clave.validar(clave)?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 02 — Un redondeo que no se ve desde fuera
/*
SITUACIÓN
  Una tienda calcula el precio con descuento. La regla «el descuento nunca es
  menor que 0 % ni mayor que 50 %» es un detalle interno: el resto del programa
  solo debe poder pedir precios y ahorros.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej02Descuentos.
  2. Dentro, SIN export, crea la constante limitar (función flecha). Recibe
     porcentaje (number) y devuelve number:
     a) si porcentaje es menor que 0, devuelve 0;
     b) si es mayor que 50, devuelve 50;
     c) en otro caso, devuelve el mismo porcentaje.
  3. Con export crea precioFinal. Recibe precio (number; supón >= 0) y porcentaje
     (number) y devuelve string:
     a) obtén p = limitar(porcentaje);
     b) calcula precio * (100 - p) / 100;
     c) devuelve ese resultado con toFixed(2).
  4. Con export crea ahorro. Recibe los mismos dos parámetros y devuelve string:
     precio * limitar(porcentaje) / 100, con toFixed(2). No llames a precioFinal.
  5. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  console.log(Ej02Descuentos.precioFinal(200, 10));  // '180.00'
  console.log(Ej02Descuentos.precioFinal(200, 0));   // '200.00'
  console.log(Ej02Descuentos.precioFinal(200, -5));  // '200.00'
  console.log(Ej02Descuentos.precioFinal(200, 50));  // '100.00'
  console.log(Ej02Descuentos.precioFinal(200, 80));  // '100.00'
  console.log(Ej02Descuentos.precioFinal(19.99, 21)); // '15.79'
  console.log(Ej02Descuentos.ahorro(200, 80));       // '100.00'
  console.log(Ej02Descuentos.ahorro(19.99, 21));     // '4.20'
  console.log(Ej02Descuentos.ahorro(50, -10));       // '0.00'

ESTO DEBE FALLAR
  // Ej02Descuentos.limitar(10);  → limitar no tiene export.
  // const n: number = Ej02Descuentos.precioFinal(200, 10);  → devuelve string.
  // Ej02Descuentos.ahorro(200);  → falta el argumento porcentaje.

EXPLICA
  ¿Qué ganas al dejar limitar sin export? ¿Qué podría romper alguien si fuera exportada?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 03 — Una caja con saldo interno
/*
SITUACIÓN
  Una caja registradora guarda un saldo y admite hasta un límite. El saldo vive
  dentro del namespace: se consulta y se cambia solo mediante sus funciones.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej03Caja.
  2. Dentro, SIN export, declara con let la variable saldo (number) con valor 0.
  3. Con export declara con const la constante LIMITE (number) con valor 100.
  4. Con export crea depositar. Recibe monto (number) y devuelve boolean:
     a) si monto es 0 o menor, devuelve false;
     b) si saldo + monto es mayor que LIMITE, devuelve false (llegar justo a LIMITE
        sí se acepta);
     c) en otro caso suma monto al saldo y devuelve true.
  5. Con export crea retirar. Recibe monto (number) y devuelve boolean:
     a) si monto es 0 o menor, devuelve false;
     b) si monto es mayor que saldo, devuelve false;
     c) en otro caso resta monto del saldo y devuelve true.
  6. Con export crea consultar. No recibe nada y devuelve number: el saldo.
  7. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  console.log(Ej03Caja.consultar());   // 0
  console.log(Ej03Caja.depositar(60));  // true
  console.log(Ej03Caja.depositar(40));  // true
  console.log(Ej03Caja.depositar(1));   // false
  console.log(Ej03Caja.consultar());   // 100
  console.log(Ej03Caja.retirar(150));   // false
  console.log(Ej03Caja.retirar(30));    // true
  console.log(Ej03Caja.retirar(0));     // false
  console.log(Ej03Caja.consultar());   // 70
  console.log(Ej03Caja.depositar(-5));  // false
  console.log(Ej03Caja.depositar(30));  // true
  console.log(Ej03Caja.consultar());   // 100
  console.log(Ej03Caja.LIMITE);         // 100

ESTO DEBE FALLAR
  // console.log(Ej03Caja.saldo);  → saldo no tiene export.
  // Ej03Caja.LIMITE = 200;        → LIMITE es const.
  // Ej03Caja.depositar('50');     → monto es number.

EXPLICA
  El namespace no se instancia: ¿dónde se conserva el saldo entre una llamada y otra?
  ¿Por qué nadie de fuera puede dejarlo en 1000?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 04 — Fechas válidas y días entre dos fechas
/*
SITUACIÓN
  Un sistema de reservas recibe objetos Date. Si el texto de origen era inválido,
  el Date existe pero su valor numérico es NaN. Un namespace reúne las
  comprobaciones y los cálculos con fechas.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej04Fechas.
  2. Con export crea esValida. Recibe fecha (Date) y devuelve boolean: false si
     isNaN(fecha.valueOf()) es true; true en caso contrario.
  3. Con export crea diasEntre. Recibe a (Date) y b (Date) y devuelve number.
     Supón fechas 'AAAA-MM-DD' sin hora, así la división es exacta:
     a) si alguna de las dos no es válida (usa esValida sin prefijo), devuelve -1;
     b) calcula b.valueOf() - a.valueOf(); si el resultado es negativo, cámbiale
        el signo (multiplícalo por -1);
     c) devuelve ese valor dividido entre 86400000 (milisegundos de un día).
  4. Con export crea antesDe. Recibe a y b (Date) y devuelve boolean: true solo si
     las dos son válidas y a es estrictamente anterior a b; false en cualquier otro
     caso.
  5. Dentro de la función autoinvocada crea las tres fechas de COMPRUEBA y ejecútala.

COMPRUEBA
  const a = new Date('2026-01-01');
  const b = new Date('2026-01-10');
  const mala = new Date('no es fecha');
  console.log(Ej04Fechas.esValida(a));            // true
  console.log(Ej04Fechas.esValida(mala));         // false
  console.log(Ej04Fechas.diasEntre(a, b));        // 9
  console.log(Ej04Fechas.diasEntre(b, a));        // 9
  console.log(Ej04Fechas.diasEntre(a, a));        // 0
  console.log(Ej04Fechas.diasEntre(a, mala));     // -1
  console.log(Ej04Fechas.diasEntre(new Date('2026-12-31'), new Date('2027-01-01'))); // 1
  console.log(Ej04Fechas.antesDe(a, b));          // true
  console.log(Ej04Fechas.antesDe(b, a));          // false
  console.log(Ej04Fechas.antesDe(a, a));          // false
  console.log(Ej04Fechas.antesDe(mala, b));       // false

ESTO DEBE FALLAR
  // Ej04Fechas.diasEntre('2026-01-01', '2026-01-10');  → recibe Date, no string.
  // const d: string = Ej04Fechas.diasEntre(a, b);      → devuelve number.
  // Ej04Fechas.esValida();                             → falta el argumento fecha.

EXPLICA
  ¿Por qué diasEntre usa -1 para «fecha inválida» y no 0? ¿Qué problema habría con 0?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 05 — Dos namespaces con miembros del mismo nombre
/*
SITUACIÓN
  Un programa de viajes convierte kilómetros a millas y millas a kilómetros. Ambas
  conversiones se llaman igual (convertir) y usan una constante llamada FACTOR.
  Cada una vive en su propio namespace y por eso no chocan.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej05Metrico y, debajo
     de él, el namespace Ej05Imperial.
  2. En Ej05Metrico, con export, declara con const FACTOR (number) con valor 0.621371.
  3. En Ej05Metrico, con export, crea convertir. Recibe km (number) y devuelve string:
     km * FACTOR con toFixed(2), seguido de ' mi'. Ejemplo de formato: '6.21 mi'.
  4. En Ej05Metrico, con export, crea rutaEnMillas. Recibe tramos (number[], en km)
     y devuelve string: suma los tramos con for...of y devuelve convertir(total).
     Si no hay tramos, el resultado es el de convertir(0).
  5. En Ej05Imperial, con export, declara con const FACTOR (number) con valor 1.609344.
  6. En Ej05Imperial, con export, crea convertir. Recibe millas (number) y devuelve
     string: millas * FACTOR con toFixed(2), seguido de ' km'.
  7. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  console.log(Ej05Metrico.convertir(10));              // '6.21 mi'
  console.log(Ej05Metrico.convertir(0));               // '0.00 mi'
  console.log(Ej05Imperial.convertir(10));             // '16.09 km'
  console.log(Ej05Metrico.FACTOR);                     // 0.621371
  console.log(Ej05Imperial.FACTOR);                    // 1.609344
  console.log(Ej05Metrico.rutaEnMillas([5, 5.5, 4.5])); // '9.32 mi'
  console.log(Ej05Metrico.rutaEnMillas([]));           // '0.00 mi'

ESTO DEBE FALLAR
  // convertir(5);                  → convertir no existe fuera de un namespace; falta el prefijo.
  // Ej05Metrico.FACTOR = 1;        → FACTOR es const.
  // Ej05Metrico.convertir('10');   → km es number.

EXPLICA
  Si no hubiera namespaces, ¿qué pasaría al declarar dos funciones convertir en el mismo
  nivel del archivo?
*/
// Tu solución: nivel superior (los namespaces van aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 06 — Un historial que no entrega su arreglo
/*
SITUACIÓN
  Una aplicación guarda las últimas búsquedas del usuario, sin repetidos. El arreglo
  vive oculto dentro del namespace; quien consulta recibe copias, nunca el original.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej06Historial.
  2. Dentro, SIN export, declara con const el arreglo entradas (string[]), vacío.
  3. Con export crea agregar. Recibe texto (string) y devuelve boolean:
     a) si texto es '' (cadena vacía), devuelve false;
     b) recorre entradas con for...of; si alguna es exactamente igual a texto,
        devuelve false;
     c) en otro caso añade texto al final con push y devuelve true.
  4. Con export crea total. No recibe nada y devuelve number: cuántas entradas hay.
  5. Con export crea ultima. No recibe nada y devuelve string | undefined: la última
     entrada, o undefined si no hay ninguna (usa entradas[entradas.length - 1]).
  6. Con export crea todas. No recibe nada y devuelve string[]: un arreglo NUEVO con
     las mismas entradas (créalo vacío y copia cada entrada con for...of y push).
     No devuelvas entradas.
  7. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  console.log(Ej06Historial.ultima());                // undefined
  console.log(Ej06Historial.total());                 // 0
  console.log(Ej06Historial.agregar('a'));            // true
  console.log(Ej06Historial.agregar('b'));            // true
  console.log(Ej06Historial.agregar('a'));            // false
  console.log(Ej06Historial.agregar(''));             // false
  console.log(Ej06Historial.total());                 // 2
  console.log(Ej06Historial.ultima());                // 'b'
  const copia = Ej06Historial.todas();
  copia.push('zzz');
  console.log(copia.length);                          // 3
  console.log(Ej06Historial.total());                 // 2
  console.log(Ej06Historial.todas().join(','));       // 'a,b'
  console.log(copia === Ej06Historial.todas());       // false

ESTO DEBE FALLAR
  // Ej06Historial.entradas.push('x');  → entradas no tiene export.
  // Ej06Historial.agregar(5);          → texto es string.
  // const u: string = Ej06Historial.ultima();  → puede ser undefined.

EXPLICA
  ¿Qué podría hacer quien recibe el arreglo interno de entradas? ¿Cómo lo evita todas()?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 07 — Tipos dentro de un namespace
/*
SITUACIÓN
  Un almacén calcula el valor de su inventario y avisa de los productos que se
  acaban. Los tipos Producto y Alerta pertenecen al namespace, igual que las
  funciones que los usan.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej07Inventario.
  2. Dentro, con export, crea el type Producto: objeto con nombre (string),
     precio (number) y cantidad (number).
  3. Con export crea la interface Alerta: nombre (string) y motivo (string).
  4. Con export crea valorTotal. Recibe lista (Producto[]) y devuelve number: la suma
     de precio * cantidad de cada producto (for...of). Lista vacía: 0.
  5. Con export crea alertas. Recibe lista (Producto[]) y minimo (number, valor por
     defecto 3) y devuelve Alerta[]. Recorre la lista en orden y, para cada producto:
     a) si cantidad es 0, añade { nombre, motivo: 'Agotado' };
     b) si no, si cantidad es MENOR que minimo, añade { nombre, motivo: 'Quedan {cantidad}' };
     c) en otro caso no añade nada.
     Devuelve el arreglo de alertas (vacío si no hay ninguna).
  6. Dentro de la función autoinvocada crea la lista de COMPRUEBA y ejecútala. El tipo
     de la lista se escribe Ej07Inventario.Producto[].

COMPRUEBA
  const lista: Ej07Inventario.Producto[] = [
      { nombre: 'Lápiz', precio: 2, cantidad: 10 },
      { nombre: 'Cuaderno', precio: 5, cantidad: 2 },
      { nombre: 'Regla', precio: 3, cantidad: 0 },
      { nombre: 'Goma', precio: 1, cantidad: 3 },
  ];
  console.log(Ej07Inventario.valorTotal(lista));            // 33
  console.log(Ej07Inventario.valorTotal([]));               // 0
  console.log(Ej07Inventario.alertas(lista).length);        // 2
  console.log(Ej07Inventario.alertas(lista)[0]?.motivo);    // 'Quedan 2'
  console.log(Ej07Inventario.alertas(lista)[1]?.motivo);    // 'Agotado'
  console.log(Ej07Inventario.alertas(lista)[1]?.nombre);    // 'Regla'
  console.log(Ej07Inventario.alertas(lista, 4).length);     // 3
  console.log(Ej07Inventario.alertas(lista, 0).length);     // 1
  console.log(Ej07Inventario.alertas([]).length);           // 0

ESTO DEBE FALLAR
  // const p: Ej07Inventario.Producto = { nombre: 'Tiza', precio: 1 };  → falta cantidad.
  // const q: Producto = { nombre: 'Tiza', precio: 1, cantidad: 1 };    → falta el prefijo del namespace.
  // const a: Ej07Inventario.Alerta = { nombre: 'x', motivo: 5 };       → motivo es string.

EXPLICA
  ¿Por qué fuera del namespace el tipo se escribe Ej07Inventario.Producto y no Producto?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 08 — Parámetros opcionales, por defecto y rest en un namespace
/*
SITUACIÓN
  Una utilidad de textos agrupa tres funciones para armar nombres, listas y etiquetas.
  Cada una usa una forma distinta de recibir argumentos.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej08Texto.
  2. Con export crea formatear. Recibe nombre (string), apellido (string, opcional) y
     mayus (boolean, valor por defecto false) y devuelve string:
     a) si apellido es undefined o '' usa el texto 'Sin apellido' en su lugar;
     b) arma '{nombre} {apellido}';
     c) si mayus es true devuelve ese texto en mayúsculas; si no, tal cual.
  3. Con export crea unir. Recibe separador (string) y ...partes (string[], parámetro
     rest) y devuelve string: crea un arreglo vacío, recorre partes con for...of y
     añade con push solo las que no son '' ; devuelve ese arreglo unido con join(separador).
  4. Con export crea etiqueta. Recibe texto (string) y prefijo (string, valor por
     defecto '#') y devuelve string: '' si texto es ''; si no, prefijo seguido de
     texto en minúsculas.
  5. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  console.log(Ej08Texto.formatear('Ana', 'Pérez'));        // 'Ana Pérez'
  console.log(Ej08Texto.formatear('Ana'));                 // 'Ana Sin apellido'
  console.log(Ej08Texto.formatear('Ana', ''));             // 'Ana Sin apellido'
  console.log(Ej08Texto.formatear('Ana', 'Pérez', true));  // 'ANA PÉREZ'
  console.log(Ej08Texto.formatear('Ana', undefined, true)); // 'ANA SIN APELLIDO'
  console.log(Ej08Texto.unir('-', 'a', '', 'b', 'c'));     // 'a-b-c'
  console.log(Ej08Texto.unir('-'));                        // ''
  console.log(Ej08Texto.unir(', ', '', ''));               // ''
  console.log(Ej08Texto.etiqueta('TypeScript'));           // '#typescript'
  console.log(Ej08Texto.etiqueta('TS', '@'));              // '@ts'
  console.log(Ej08Texto.etiqueta(''));                     // ''

ESTO DEBE FALLAR
  // Ej08Texto.formatear();                  → nombre es obligatorio.
  // Ej08Texto.unir('-', 1, 2);              → las partes son string.
  // Ej08Texto.formatear('Ana', 'P', 'si');  → mayus es boolean.

EXPLICA
  ¿Qué valor recibe apellido cuando llamas formatear('Ana')? ¿Y mayus?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// ===========================================================================
// TRAMO 2 — NAMESPACE CON LÓGICA Y TIPOS PREVIOS: EJERCICIOS 09 AL 16
// ===========================================================================

// !EJERCICIO 09 — Reservas de hotel con fechas
/*
SITUACIÓN
  Un hotel recibe fecha de entrada y de salida como objetos Date. Un namespace decide
  si el rango es utilizable, cuántas noches son y cuánto cuesta. Si una fecha es
  inválida, su valueOf() es NaN.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej09Reservas.
  2. Dentro, SIN export, crea valida. Recibe fecha (Date) y devuelve boolean: false si
     isNaN(fecha.valueOf()); true en caso contrario.
  3. Con export crea noches. Recibe entrada y salida (Date) y devuelve number | null.
     Supón fechas 'AAAA-MM-DD' sin hora:
     a) si alguna fecha no es válida, devuelve null;
     b) si salida NO es posterior a entrada (igual o anterior), devuelve null;
     c) devuelve (salida.valueOf() - entrada.valueOf()) / 86400000.
  4. Con export crea estado. Recibe entrada y salida (Date) y devuelve string, en este orden:
     a) si alguna fecha no es válida, 'Fecha inválida';
     b) si salida es anterior a entrada, 'Salida antes de la entrada';
     c) si son la misma fecha, 'Mismo día';
     d) en otro caso llama a noches(entrada, salida): si da 1, devuelve '1 noche'; si da
        otro número n, devuelve '{n} noches'.
  5. Con export crea total. Recibe entrada, salida (Date) y tarifa (number, precio por
     noche; supón entero >= 0) y devuelve number | null:
     a) si noches(...) es null, devuelve null;
     b) calcula noches * tarifa;
     c) si las noches son 7 o más, el resultado es ese valor * 9 / 10 (10 % de descuento
        sobre todo el total); si no, el valor sin cambios.
  6. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  const d1 = new Date('2026-03-01');
  const d4 = new Date('2026-03-04');
  const d2 = new Date('2026-03-02');
  const d7 = new Date('2026-03-07');
  const d8 = new Date('2026-03-08');
  const mala = new Date('x');
  console.log(Ej09Reservas.noches(d1, d4));        // 3
  console.log(Ej09Reservas.noches(d1, d1));        // null
  console.log(Ej09Reservas.noches(d4, d1));        // null
  console.log(Ej09Reservas.noches(mala, d1));      // null
  console.log(Ej09Reservas.estado(d1, d2));        // '1 noche'
  console.log(Ej09Reservas.estado(d1, d4));        // '3 noches'
  console.log(Ej09Reservas.estado(d1, d1));        // 'Mismo día'
  console.log(Ej09Reservas.estado(d4, d1));        // 'Salida antes de la entrada'
  console.log(Ej09Reservas.estado(d1, mala));      // 'Fecha inválida'
  console.log(Ej09Reservas.total(d1, d4, 100));    // 300
  console.log(Ej09Reservas.total(d1, d7, 100));    // 600
  console.log(Ej09Reservas.total(d1, d8, 100));    // 630
  console.log(Ej09Reservas.total(d4, d1, 100));    // null
  console.log(Ej09Reservas.total(mala, d1, 100));  // null

ESTO DEBE FALLAR
  // Ej09Reservas.valida(d1);               → valida no tiene export.
  // const n: number = Ej09Reservas.noches(d1, d4);  → puede devolver null.
  // Ej09Reservas.total(d1, d4);            → falta la tarifa.

EXPLICA
  ¿Por qué noches devuelve null y no 0 cuando el rango es inválido? ¿Qué confundiría el 0?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 10 — Puntos en un plano con tuplas
/*
SITUACIÓN
  Un mapa guarda puntos como pares [x, y]. Un namespace calcula distancias, ubica
  puntos en cuadrantes y encuentra el más cercano al origen [0, 0].

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej10Plano.
  2. Dentro, con export, crea el type Punto: tupla [number, number] (x en la posición 0,
     y en la posición 1).
  3. SIN export crea abs. Recibe n (number) y devuelve number: -n si n es negativo; n en
     otro caso.
  4. Con export crea distancia. Recibe a y b (Punto) y devuelve number: la distancia
     Manhattan, es decir abs(a[0] - b[0]) + abs(a[1] - b[1]).
  5. Con export crea cuadrante. Recibe p (Punto) y devuelve string, comprobando en este orden:
     a) x e y son 0: 'Origen';
     b) y es 0: 'Eje X';
     c) x es 0: 'Eje Y';
     d) x > 0 e y > 0: 'I';  x < 0 e y > 0: 'II';  x < 0 e y < 0: 'III';  x > 0 e y < 0: 'IV'.
  6. Con export crea masCercano. Recibe lista (Punto[]) y devuelve Punto | undefined: el
     punto con menor distancia al origen [0, 0]; si hay empate gana el que aparece primero;
     lista vacía: undefined. Recorre con for...of y guarda el mejor encontrado.
  7. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  console.log(Ej10Plano.distancia([0, 0], [3, 4]));        // 7
  console.log(Ej10Plano.distancia([-1, -1], [2, 3]));      // 7
  console.log(Ej10Plano.distancia([2, 2], [2, 2]));        // 0
  console.log(Ej10Plano.cuadrante([0, 0]));                // 'Origen'
  console.log(Ej10Plano.cuadrante([5, 0]));                // 'Eje X'
  console.log(Ej10Plano.cuadrante([0, -2]));               // 'Eje Y'
  console.log(Ej10Plano.cuadrante([1, 1]));                // 'I'
  console.log(Ej10Plano.cuadrante([-1, 1]));               // 'II'
  console.log(Ej10Plano.cuadrante([-1, -1]));              // 'III'
  console.log(Ej10Plano.cuadrante([1, -1]));               // 'IV'
  console.log(Ej10Plano.masCercano([[5, 5], [-1, 2], [3, 0], [0, 3]])); // [ -1, 2 ]
  console.log(Ej10Plano.masCercano([[1, 1]]));             // [ 1, 1 ]
  console.log(Ej10Plano.masCercano([]));                   // undefined

ESTO DEBE FALLAR
  // const p: Ej10Plano.Punto = [1, 2, 3];       → la tupla tiene exactamente 2 posiciones.
  // Ej10Plano.distancia([1, 2], [3, 'a']);      → la segunda posición es number.
  // Ej10Plano.abs(-1);                          → abs no tiene export.

EXPLICA
  ¿Qué ventaja tiene Punto como tupla frente a number[]? ¿Qué cambia si la lista llega vacía?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 11 — Boletín de notas
/*
SITUACIÓN
  Un colegio guarda calificaciones como objetos { materia, nota }. Un namespace calcula
  el promedio, las materias aprobadas y la mejor materia, y arma un resumen.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej11Boletin.
  2. Dentro, con export, crea el type Calificacion: objeto con materia (string) y
     nota (number).
  3. Con export crea promedio. Recibe lista (Calificacion[]) y devuelve number | null:
     null si la lista está vacía; si no, la suma de las notas dividida entre la cantidad
     de calificaciones. Recorre con for...of desestructurando { nota }.
  4. Con export crea aprobadas. Recibe lista (Calificacion[]) y minimo (number, valor
     por defecto 5) y devuelve string[]: las materias cuya nota sea MAYOR O IGUAL que
     minimo, en el orden de la lista.
  5. Con export crea mejor. Recibe lista (Calificacion[]) y devuelve string: la materia con
     la nota más alta; si hay empate gana la primera; lista vacía: 'Sin notas'.
  6. Con export crea resumen. Recibe lista (Calificacion[]) y devuelve string:
     a) si promedio(lista) es null, devuelve 'Sin notas';
     b) si no, devuelve 'Promedio {p} | Mejor: {m} | Aprobadas: {n}', donde p es el
        promedio con toFixed(1), m es mejor(lista) y n es la cantidad de materias de
        aprobadas(lista) con su mínimo por defecto.
  7. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  const lista: Ej11Boletin.Calificacion[] = [
      { materia: 'Mate', nota: 8 },
      { materia: 'Lengua', nota: 5 },
      { materia: 'Historia', nota: 4 },
      { materia: 'Arte', nota: 9 },
      { materia: 'Música', nota: 6 },
  ];
  const empate: Ej11Boletin.Calificacion[] = [
      { materia: 'Mate', nota: 7 },
      { materia: 'Arte', nota: 7 },
  ];
  console.log(Ej11Boletin.promedio(lista));             // 6.4
  console.log(Ej11Boletin.promedio([]));                // null
  console.log(Ej11Boletin.aprobadas(lista).join(','));  // 'Mate,Lengua,Arte,Música'
  console.log(Ej11Boletin.aprobadas(lista, 8).join(',')); // 'Mate,Arte'
  console.log(Ej11Boletin.aprobadas(lista, 10).length); // 0
  console.log(Ej11Boletin.mejor(lista));                // 'Arte'
  console.log(Ej11Boletin.mejor(empate));               // 'Mate'
  console.log(Ej11Boletin.mejor([]));                   // 'Sin notas'
  console.log(Ej11Boletin.resumen(lista));              // 'Promedio 6.4 | Mejor: Arte | Aprobadas: 4'
  console.log(Ej11Boletin.resumen([]));                 // 'Sin notas'

ESTO DEBE FALLAR
  // Ej11Boletin.promedio([{ materia: 'Mate' }]);   → falta la propiedad nota.
  // const p: number = Ej11Boletin.promedio(lista); → puede devolver null.
  // Ej11Boletin.aprobadas(lista, '5');             → minimo es number.

EXPLICA
  ¿Por qué aprobadas(lista) incluye la nota 5 pero aprobadas(lista, 8) incluye la nota 8?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 12 — Salas con estados (enum)
/*
SITUACIÓN
  Un coworking tiene salas que pueden estar libres, ocupadas o en mantenimiento. Un
  namespace guarda las salas y solo permite los cambios de estado válidos.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el enum Ej12Estado con estos valores:
     Libre = 0, Ocupada = 1, Mantenimiento = 2. Debajo, declara el namespace Ej12Salas.
  2. Dentro del namespace, SIN export, declara:
     a) el type Sala: objeto con nombre (string) y estado (Ej12Estado);
     b) con const el arreglo salas (Sala[]), vacío;
     c) la función buscar. Recibe nombre (string) y devuelve Sala | undefined: recorre
        salas con for...of y devuelve la que tenga ese nombre; si no hay, undefined.
  3. Con export crea crear. Recibe nombre (string) y devuelve boolean: false si ya existe
     una sala con ese nombre; si no, la añade con estado Ej12Estado.Libre y devuelve true.
  4. Con export crea ocupar. Recibe nombre (string) y devuelve boolean: true solo si la sala
     existe y está Libre (pasa a Ocupada); en cualquier otro caso false y sin cambios.
  5. Con export crea liberar: true solo si la sala existe y está Ocupada (pasa a Libre).
  6. Con export crea mantenimiento: true solo si la sala existe y está Libre (pasa a
     Mantenimiento).
  7. Con export crea reparar: true solo si la sala existe y está en Mantenimiento (pasa a Libre).
  8. Con export crea resumen. No recibe nada y devuelve string:
     'Libres: {a} | Ocupadas: {b} | Mantenimiento: {c}' con las cantidades de cada estado.
  9. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  console.log(Ej12Salas.resumen());              // 'Libres: 0 | Ocupadas: 0 | Mantenimiento: 0'
  console.log(Ej12Salas.crear('A'));             // true
  console.log(Ej12Salas.crear('B'));             // true
  console.log(Ej12Salas.crear('A'));             // false
  console.log(Ej12Salas.crear('C'));             // true
  console.log(Ej12Salas.ocupar('A'));            // true
  console.log(Ej12Salas.ocupar('A'));            // false
  console.log(Ej12Salas.mantenimiento('A'));     // false
  console.log(Ej12Salas.mantenimiento('B'));     // true
  console.log(Ej12Salas.ocupar('B'));            // false
  console.log(Ej12Salas.ocupar('Z'));            // false
  console.log(Ej12Salas.resumen());              // 'Libres: 1 | Ocupadas: 1 | Mantenimiento: 1'
  console.log(Ej12Salas.liberar('B'));           // false
  console.log(Ej12Salas.reparar('B'));           // true
  console.log(Ej12Salas.liberar('A'));           // true
  console.log(Ej12Salas.liberar('A'));           // false
  console.log(Ej12Salas.resumen());              // 'Libres: 3 | Ocupadas: 0 | Mantenimiento: 0'
  console.log(Ej12Estado.Mantenimiento);         // 2

ESTO DEBE FALLAR
  // Ej12Salas.salas;           → salas no tiene export.
  // Ej12Salas.buscar('A');     → buscar no tiene export.
  // const e: Ej12Estado = 'Libre';   → un enum numérico no acepta texto.

EXPLICA
  ¿Por qué ocupar('B') da false cuando B está en mantenimiento? ¿Qué estado queda en B?
*/
// Tu solución: nivel superior (el enum y el namespace van aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 13 — Describir valores según su tipo
/*
SITUACIÓN
  Un importador de datos recibe valores sueltos que pueden ser texto, número, booleano o
  nulos. Un namespace los describe con typeof y cuenta cuántos hay de cada tipo.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej13Tipos.
  2. Dentro, con export, crea el type Valor: string | number | boolean | null.
  3. Con export crea describir. Recibe valor (Valor) y devuelve string, comprobando en este orden:
     a) si valor es null: 'vacío';
     b) si typeof valor es 'string': si es '' devuelve 'texto vacío'; si no,
        'texto de largo {n}' (n = su length);
     c) si typeof valor es 'number': si isNaN(valor), 'no es un número'; si no, si
        valor % 1 es distinto de 0, 'decimal'; si no (es entero), 'entero negativo' si
        valor < 0, 'cero' si valor es 0 y 'entero positivo' si valor > 0;
     d) en otro caso es boolean: 'verdadero' si es true, 'falso' si es false.
  4. Con export crea contarTipos. Recibe valores (Valor[]) y devuelve string:
     'textos: {a}, números: {b}, booleanos: {c}, vacíos: {d}'. Recorre con for...of y cuenta
     con typeof y null (un NaN cuenta como número).
  5. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  console.log(Ej13Tipos.describir(null));    // 'vacío'
  console.log(Ej13Tipos.describir(''));      // 'texto vacío'
  console.log(Ej13Tipos.describir('hola'));  // 'texto de largo 4'
  console.log(Ej13Tipos.describir(0));       // 'cero'
  console.log(Ej13Tipos.describir(-7));      // 'entero negativo'
  console.log(Ej13Tipos.describir(12));      // 'entero positivo'
  console.log(Ej13Tipos.describir(3.5));     // 'decimal'
  console.log(Ej13Tipos.describir(-0.5));    // 'decimal'
  console.log(Ej13Tipos.describir(NaN));     // 'no es un número'
  console.log(Ej13Tipos.describir(true));    // 'verdadero'
  console.log(Ej13Tipos.describir(false));   // 'falso'
  console.log(Ej13Tipos.contarTipos(['a', 1, true, null, 'b', 2.5, false])); // 'textos: 2, números: 2, booleanos: 2, vacíos: 1'
  console.log(Ej13Tipos.contarTipos([NaN, null, null]));  // 'textos: 0, números: 1, booleanos: 0, vacíos: 2'
  console.log(Ej13Tipos.contarTipos([]));    // 'textos: 0, números: 0, booleanos: 0, vacíos: 0'

ESTO DEBE FALLAR
  // Ej13Tipos.describir(undefined);        → undefined no pertenece a Valor.
  // Ej13Tipos.describir([1]);              → un arreglo no pertenece a Valor.
  // const v: Ej13Tipos.Valor = {};         → un objeto no pertenece a Valor.

EXPLICA
  ¿Por qué hay que comprobar null antes de typeof? ¿Qué valor tiene typeof NaN?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 14 — Reglas de formulario como funciones
/*
SITUACIÓN
  Un formulario valida un texto con varias reglas. Cada regla es una función que recibe
  el texto y dice si cumple. Un namespace define el tipo de regla, algunas reglas y
  una función que lista las que fallan.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej14Reglas.
  2. Dentro, con export, crea el type Regla: función que recibe texto (string) y devuelve boolean.
  3. Con export crea el type ReglaNombrada: objeto con nombre (string) y cumple (Regla).
  4. Con export crea la constante noVacia, de tipo Regla: true si el texto tiene al menos 1 carácter.
  5. Con export crea la constante sinEspacios, de tipo Regla: false si algún carácter del
     texto es ' ' (un espacio; recorre el texto con for...of); true si no hay ninguno.
  6. Con export crea la función maximo. Recibe limite (number) y devuelve una Regla: una
     función que da true si el texto tiene limite caracteres o menos.
  7. Con export crea fallidas. Recibe texto (string) y reglas (ReglaNombrada[]) y devuelve
     string[]: los nombres de las reglas cuyo cumple(texto) da false, en el orden del arreglo.
  8. Dentro de la función autoinvocada ejecuta COMPRUEBA (la primera línea crea el arreglo
     de reglas).

COMPRUEBA
  const reglas: Ej14Reglas.ReglaNombrada[] = [
      { nombre: 'noVacia', cumple: Ej14Reglas.noVacia },
      { nombre: 'sinEspacios', cumple: Ej14Reglas.sinEspacios },
      { nombre: 'max5', cumple: Ej14Reglas.maximo(5) },
  ];
  console.log(Ej14Reglas.fallidas('hola', reglas).length);       // 0
  console.log(Ej14Reglas.fallidas('abcde', reglas).length);      // 0
  console.log(Ej14Reglas.fallidas('', reglas).join(','));        // 'noVacia'
  console.log(Ej14Reglas.fallidas('ab cd', reglas).join(','));   // 'sinEspacios'
  console.log(Ej14Reglas.fallidas('abc def', reglas).join(',')); // 'sinEspacios,max5'
  console.log(Ej14Reglas.fallidas('abcdef', reglas).join(','));  // 'max5'
  console.log(Ej14Reglas.fallidas('hola', []).length);           // 0
  console.log(Ej14Reglas.noVacia(''));                           // false
  console.log(Ej14Reglas.maximo(0)(''));                         // true
  console.log(Ej14Reglas.maximo(0)('a'));                        // false

ESTO DEBE FALLAR
  // const r: Ej14Reglas.Regla = (n: number) => true;   → una Regla recibe string.
  // Ej14Reglas.noVacia(5);                              → el texto es string.
  // Ej14Reglas.maximo('5');                             → limite es number.

EXPLICA
  ¿Qué devuelve maximo(5): un boolean o una función? ¿Cómo se usa después?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 15 — Intérprete de comandos
/*
SITUACIÓN
  Una consola recibe líneas de texto como 'eco hola mundo'. Un namespace separa la línea en
  palabras (sin usar split) y ejecuta el comando que indica la primera palabra.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej15Consola.
  2. Con export crea palabras. Recibe linea (string) y devuelve string[]. Recorre linea
     carácter a carácter con for...of y guarda las letras en un texto acumulado:
     a) si el carácter es ' ' y el acumulado no está vacío, añade el acumulado al arreglo
        y vacíalo;
     b) si el carácter es ' ' y el acumulado está vacío, no hagas nada;
     c) si no es ' ', añádelo al acumulado;
     d) al terminar el recorrido, si el acumulado no está vacío, añádelo al arreglo.
     Devuelve el arreglo (varios espacios seguidos no generan palabras vacías).
  3. Con export crea interpretar. Recibe linea (string) y devuelve string:
     a) obtén p = palabras(linea); si p no tiene elementos, devuelve 'Línea vacía';
     b) comando = p[0] ?? '' ; resto = arreglo nuevo con las palabras desde la posición 1
        (bucle for clásico y push);
     c) si comando es 'eco', devuelve las palabras del resto unidas con ' '; si el resto
        está vacío devuelve '(nada)';
     d) si es 'invertir', devuelve las palabras del resto en orden inverso, unidas con ' '
        (si el resto está vacío, '(nada)');
     e) si es 'contar', devuelve 'palabras: {n}', con n la cantidad de palabras del resto;
     f) si es 'mayus', devuelve las palabras del resto unidas con ' ' en mayúsculas
        (si el resto está vacío, '(nada)');
     g) en cualquier otro caso, devuelve 'Comando desconocido: {comando}'. La comparación
        distingue mayúsculas y minúsculas.
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  console.log(Ej15Consola.palabras('  hola   mundo ').join('|')); // 'hola|mundo'
  console.log(Ej15Consola.palabras('uno').join('|'));            // 'uno'
  console.log(Ej15Consola.palabras('').length);                  // 0
  console.log(Ej15Consola.palabras('   ').length);               // 0
  console.log(Ej15Consola.interpretar('eco hola mundo'));        // 'hola mundo'
  console.log(Ej15Consola.interpretar('eco'));                   // '(nada)'
  console.log(Ej15Consola.interpretar('invertir a b c'));        // 'c b a'
  console.log(Ej15Consola.interpretar('invertir'));              // '(nada)'
  console.log(Ej15Consola.interpretar('contar x  y z'));         // 'palabras: 3'
  console.log(Ej15Consola.interpretar('contar'));                // 'palabras: 0'
  console.log(Ej15Consola.interpretar('mayus ts es genial'));    // 'TS ES GENIAL'
  console.log(Ej15Consola.interpretar('Eco hola'));              // 'Comando desconocido: Eco'
  console.log(Ej15Consola.interpretar('   '));                   // 'Línea vacía'
  console.log(Ej15Consola.interpretar(''));                      // 'Línea vacía'

ESTO DEBE FALLAR
  // Ej15Consola.palabras(5);                    → linea es string.
  // const p: string = Ej15Consola.palabras('a b');   → devuelve string[].
  // Ej15Consola.interpretar('a', 'b');          → recibe un solo argumento.

EXPLICA
  ¿Por qué p[0] puede ser undefined para TypeScript aunque hayas comprobado que p no está vacío?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 16 — Ranking con orden propio
/*
SITUACIÓN
  Un torneo guarda marcas como tuplas [nombre, puntos]. Un namespace las ordena sin tocar
  el arreglo original (sin usar sort), calcula posiciones y arma el podio.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej16Ranking.
  2. Dentro, con export, crea el type Marca: tupla [string, number] (nombre, puntos).
  3. Con export crea ordenar. Recibe marcas (Marca[]) y devuelve Marca[]:
     a) crea un arreglo nuevo copia y llénalo con las marcas (for...of y push);
     b) ordena copia con un bucle burbuja: repite pasadas; en cada pasada recorre las
        posiciones i desde 0 hasta length - 2, toma x = copia[i] e y = copia[i + 1]
        (si alguna es undefined, sigue con la siguiente posición) y, si y debe ir antes
        que x, intercámbialas con una variable temporal; termina cuando una pasada
        completa no intercambió nada;
     c) «y va antes que x» si y tiene MÁS puntos que x; o si tienen los mismos puntos y el
        nombre de y es menor que el de x (comparación con <);
     d) devuelve copia. El arreglo original no cambia.
  4. Con export crea posicion. Recibe marcas (Marca[]) y nombre (string) y devuelve number:
     el puesto (empezando en 1) del nombre en el arreglo ordenado; 0 si no aparece.
  5. Con export crea podio. Recibe marcas (Marca[]) y devuelve string:
     a) si no hay marcas, 'Sin marcas';
     b) toma las primeras 3 marcas del orden (o las que haya si son menos) y arma, en orden,
        'ORO: {nombre} ({puntos})', 'PLATA: {nombre} ({puntos})', 'BRONCE: {nombre} ({puntos})';
     c) devuelve esos textos unidos con ' | '.
  6. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  const marcas: Ej16Ranking.Marca[] = [['Luz', 50], ['Ana', 70], ['Bruno', 50], ['Carla', 90]];
  console.log(Ej16Ranking.ordenar(marcas)[0]?.[0]);   // 'Carla'
  console.log(Ej16Ranking.ordenar(marcas)[3]?.[0]);   // 'Luz'
  console.log(marcas[0]?.[0]);                        // 'Luz'
  console.log(Ej16Ranking.posicion(marcas, 'Carla')); // 1
  console.log(Ej16Ranking.posicion(marcas, 'Ana'));   // 2
  console.log(Ej16Ranking.posicion(marcas, 'Bruno')); // 3
  console.log(Ej16Ranking.posicion(marcas, 'Luz'));   // 4
  console.log(Ej16Ranking.posicion(marcas, 'Zoe'));   // 0
  console.log(Ej16Ranking.podio(marcas));             // 'ORO: Carla (90) | PLATA: Ana (70) | BRONCE: Bruno (50)'
  console.log(Ej16Ranking.podio([['Solo', 5]]));      // 'ORO: Solo (5)'
  console.log(Ej16Ranking.podio([['B', 1], ['A', 1]])); // 'ORO: A (1) | PLATA: B (1)'
  console.log(Ej16Ranking.podio([]));                 // 'Sin marcas'

ESTO DEBE FALLAR
  // const m: Ej16Ranking.Marca = ['Ana'];                → la tupla necesita 2 elementos.
  // Ej16Ranking.ordenar([['Ana', '9']]);                 → los puntos son number.
  // Ej16Ranking.posicion(marcas);                        → falta el nombre.

EXPLICA
  ¿Por qué ordenar trabaja sobre una copia? ¿Qué pasaría con marcas si ordenara el original?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// ===========================================================================
// TRAMO 3 — MÓDULOS: EJERCICIOS 17 AL 24
// Cada ejercicio crea un archivo en 10.Namespaces/00.Ejercicios/modulos/ y lo importa.
// ===========================================================================

// !EJERCICIO 17 — Importar por nombre
/*
SITUACIÓN
  Una tienda en línea calcula impuestos en un módulo aparte. El módulo decide qué se
  comparte (export) y qué es un detalle interno que nadie de fuera puede usar.

QUÉ DEBES HACER
  1. Crea el archivo modulos/ej17-impuestos.ts. Dentro:
     a) SIN export, la constante redondear (función flecha): recibe n (number) y devuelve
        string: n con toFixed(2);
     b) con export, la constante IVA (number) con valor 21 (es un porcentaje);
     c) con export, la función conIva: recibe precio (number) y devuelve string: precio
        más precio * IVA / 100, redondeado con redondear;
     d) con export, la función soloIva: recibe precio (number) y devuelve string: solo
        el IVA (precio * IVA / 100), redondeado con redondear;
     e) con export, la función desglose: recibe precios (number[]) y devuelve string:
        suma los precios con for...of (base) y devuelve
        'Base {base} | IVA {iva} | Total {total}', con los tres números redondeados con redondear
        (iva = base * IVA / 100; total = base + iva).
  2. En la ZONA DE IMPORTS del archivo Compendio01.ts escribe esta línea:
     import { IVA as ej17Iva, conIva as ej17ConIva, soloIva as ej17SoloIva, desglose as ej17Desglose } from './modulos/ej17-impuestos';
  3. Dentro de la función autoinvocada ejecuta COMPRUEBA usando los alias.

COMPRUEBA
  console.log(ej17Iva);                       // 21
  console.log(ej17ConIva(100));               // '121.00'
  console.log(ej17ConIva(19.99));             // '24.19'
  console.log(ej17SoloIva(50));               // '10.50'
  console.log(ej17Desglose([100, 50]));       // 'Base 150.00 | IVA 31.50 | Total 181.50'
  console.log(ej17Desglose([]));              // 'Base 0.00 | IVA 0.00 | Total 0.00'

ESTO DEBE FALLAR
  // ej17Iva = 10;               → un nombre importado es de solo lectura.
  // ej17Redondear(5);           → redondear no tiene export, no se importó y no existe aquí.
  // ej17ConIva('100');          → precio es number.

EXPLICA
  ¿Qué parte de ej17-impuestos.ts decide que redondear sea invisible desde fuera?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 18 — Alias para dos exportaciones con el mismo nombre
/*
SITUACIÓN
  Una aplicación saluda de dos maneras: formal e informal. Cada estilo vive en su módulo
  y las dos funciones se llaman saludar. Al importarlas, un alias evita que se confundan.

QUÉ DEBES HACER
  1. Crea modulos/ej18-formal.ts. Dentro, con export:
     a) la constante TRATO (string) con valor 'usted';
     b) la función saludar: recibe nombre (string) y hora (number; supón entero de 0 a 23)
        y devuelve string: si hora < 12, 'Buenos días, {nombre}'; si no, si hora < 20,
        'Buenas tardes, {nombre}'; en otro caso 'Buenas noches, {nombre}'.
  2. Crea modulos/ej18-informal.ts. Dentro, con export:
     a) la constante TRATO (string) con valor 'tú';
     b) la función saludar con los mismos parámetros: si hora < 6, 'Aún es de madrugada, {nombre}';
        si no, si hora < 12, 'Buen día, {nombre}'; si no, si hora < 20, 'Hola {nombre}';
        en otro caso 'Qué tal la noche, {nombre}'.
  3. En la ZONA DE IMPORTS de Compendio01.ts escribe estas líneas:
     import { saludar as ej18Formal, TRATO as ej18TratoFormal } from './modulos/ej18-formal';
     import { saludar as ej18Informal, TRATO as ej18TratoInformal } from './modulos/ej18-informal';
  4. Dentro de la función autoinvocada crea la función saludo. Recibe formal (boolean),
     nombre (string) y hora (number) y devuelve string: si formal es true, el resultado de
     ej18Formal(nombre, hora); si es false, el de ej18Informal(nombre, hora).
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(saludo(true, 'Ana', 11));    // 'Buenos días, Ana'
  console.log(saludo(true, 'Ana', 12));    // 'Buenas tardes, Ana'
  console.log(saludo(true, 'Ana', 19));    // 'Buenas tardes, Ana'
  console.log(saludo(true, 'Ana', 20));    // 'Buenas noches, Ana'
  console.log(saludo(false, 'Ana', 5));    // 'Aún es de madrugada, Ana'
  console.log(saludo(false, 'Ana', 6));    // 'Buen día, Ana'
  console.log(saludo(false, 'Ana', 12));   // 'Hola Ana'
  console.log(saludo(false, 'Ana', 20));   // 'Qué tal la noche, Ana'
  console.log(ej18TratoFormal);            // 'usted'
  console.log(ej18TratoInformal);          // 'tú'

ESTO DEBE FALLAR
  // ej18Formal('Ana');                 → falta el argumento hora.
  // ej18Formal = ej18Informal;         → un nombre importado no se reasigna.
  // saludo(true, 'Ana');               → falta el argumento hora.

EXPLICA
  Si importaras las dos como { saludar } sin alias, ¿qué problema habría?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 19 — Importar todo un módulo con * as
/*
SITUACIÓN
  Un módulo de estadística ofrece varias funciones sobre listas de números. En lugar de
  importar cada una por separado, el archivo las reúne bajo un solo nombre con * as.

QUÉ DEBES HACER
  1. Crea modulos/ej19-estadistica.ts. Dentro:
     a) SIN export, la función esVacio: recibe numeros (number[]) y devuelve boolean:
        true si no tiene elementos;
     b) con export, sumar: recibe numeros (number[]) y devuelve number: la suma (0 si no hay);
     c) con export, promedio: devuelve number | null: null si esVacio; si no, sumar / cantidad;
     d) con export, maximo: devuelve number | undefined: el mayor, o undefined si esVacio
        (recorre con for...of);
     e) con export, minimo: devuelve number | undefined: el menor, o undefined si esVacio;
     f) con export, rango: devuelve number | null: null si esVacio; si no, maximo - minimo
        (como maximo y minimo pueden ser undefined, usa ?? 0 al restar);
     g) con export, contarMayores: recibe numeros (number[]) y umbral (number) y devuelve
        number: cuántos números son MAYORES que umbral (estrictamente).
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import * as Ej19Est from './modulos/ej19-estadistica';
  3. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  const datos = [4, 8, 15, 16, 23, 42];
  console.log(Ej19Est.sumar(datos));              // 108
  console.log(Ej19Est.promedio(datos));           // 18
  console.log(Ej19Est.maximo(datos));             // 42
  console.log(Ej19Est.minimo(datos));             // 4
  console.log(Ej19Est.rango(datos));              // 38
  console.log(Ej19Est.contarMayores(datos, 15));  // 3
  console.log(Ej19Est.contarMayores(datos, 42));  // 0
  console.log(Ej19Est.sumar([]));                 // 0
  console.log(Ej19Est.promedio([]));              // null
  console.log(Ej19Est.maximo([]));                // undefined
  console.log(Ej19Est.rango([]));                 // null
  console.log(Ej19Est.rango([7]));                // 0
  console.log(Ej19Est.minimo([-3, -9]));          // -9

ESTO DEBE FALLAR
  // Ej19Est.esVacio(datos);                  → esVacio no tiene export.
  // Ej19Est.sumar = Ej19Est.maximo;          → lo importado con * as es de solo lectura.
  // const e = new Ej19Est();                 → * as no crea una clase ni se instancia.
  // const n: number = Ej19Est.promedio(datos);   → puede devolver null.

EXPLICA
  ¿Qué ventaja tiene Ej19Est.sumar(...) frente a importar sumar suelto? ¿Qué desventaja?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 20 — Un catálogo como export default
/*
SITUACIÓN
  Un módulo guarda el catálogo de una tienda y lo entrega como su valor principal con
  export default. Quien lo importa le da el nombre que prefiera.

QUÉ DEBES HACER
  1. Crea modulos/ej20-catalogo.ts. Dentro:
     a) SIN export, la interface Producto: codigo (string), nombre (string), precio (number);
     b) SIN export, con const, el arreglo catalogo (Producto[]) con estos 4 productos, en este
        orden: { codigo: 'A1', nombre: 'Teclado', precio: 25 }, { codigo: 'B2', nombre: 'Ratón',
        precio: 12 }, { codigo: 'C3', nombre: 'Monitor', precio: 150 }, { codigo: 'D4',
        nombre: 'Cable', precio: 5 };
     c) al final, export default catalogo; (la interface NO se exporta).
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe (sin llaves):
     import ej20Productos from './modulos/ej20-catalogo';
  3. Dentro de la función autoinvocada crea tres funciones que usan ej20Productos con for...of:
     a) buscar: recibe codigo (string) y devuelve string: '{nombre}: {precio}' del producto con
        ese código, o 'No existe' si no hay ninguno;
     b) masBarato: no recibe nada y devuelve string: el nombre del producto de menor precio
        (si hay empate, el primero);
     c) presupuesto: recibe codigos (string[]) y devuelve number | null: la suma de los
        precios de esos códigos; si algún código no existe devuelve null (sin sumar parcial);
        con la lista vacía devuelve 0.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(ej20Productos.length);              // 4
  console.log(buscar('A1'));                      // 'Teclado: 25'
  console.log(buscar('C3'));                      // 'Monitor: 150'
  console.log(buscar('Z9'));                      // 'No existe'
  console.log(buscar(''));                        // 'No existe'
  console.log(masBarato());                       // 'Cable'
  console.log(presupuesto(['A1', 'C3']));         // 175
  console.log(presupuesto(['A1', 'X']));          // null
  console.log(presupuesto([]));                   // 0

ESTO DEBE FALLAR
  // ej20Productos.push({ codigo: 'E5', nombre: 'Cámara' });   → falta precio.
  // const primero: string = ej20Productos[0].nombre;          → [0] puede ser undefined (noUncheckedIndexedAccess).
  // buscar(1);                                                → codigo es string.

EXPLICA
  ¿Por qué en el import no hay llaves ni el nombre catalogo? ¿Qué pasa con la interface
  Producto al exportar el arreglo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 21 — Exportación por defecto y nombrada en el mismo módulo
/*
SITUACIÓN
  Un módulo de turnos entrega como valor principal la función que calcula el turno
  siguiente, y además comparte por nombre una constante y un formateador.

QUÉ DEBES HACER
  1. Crea modulos/ej21-turnos.ts. Dentro:
     a) con export, la constante LIMITE (number) con valor 5;
     b) SIN export, la función cero: recibe n (number) y devuelve string: si n < 10,
        '0' seguido de n; si no, n como texto (usa una template string);
     c) con export, la función etiqueta: recibe numero (number) y devuelve string:
        'T-' seguido de cero(numero);
     d) la función siguiente con export default function: recibe actual (number; supón
        entero >= 0) y devuelve number: 1 si actual es LIMITE o más; si no, actual + 1.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe (el default va sin llaves y los
     nombrados entre llaves, en la misma línea):
     import ej21Siguiente, { LIMITE as ej21Limite, etiqueta as ej21Etiqueta } from './modulos/ej21-turnos';
  3. Dentro de la función autoinvocada crea la función secuencia. Recibe inicio (number) y
     cuantos (number; supón entero >= 0) y devuelve string[]: cuantos etiquetas, una por
     cada turno que sigue a inicio. El primero es ej21Siguiente(inicio); cada siguiente
     parte del anterior. Cada turno se convierte con ej21Etiqueta.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(ej21Limite);                      // 5
  console.log(ej21Siguiente(0));                // 1
  console.log(ej21Siguiente(4));                // 5
  console.log(ej21Siguiente(5));                // 1
  console.log(ej21Siguiente(9));                // 1
  console.log(ej21Etiqueta(7));                 // 'T-07'
  console.log(ej21Etiqueta(12));                // 'T-12'
  console.log(ej21Etiqueta(0));                 // 'T-00'
  console.log(secuencia(3, 5).join(' '));       // 'T-04 T-05 T-01 T-02 T-03'
  console.log(secuencia(0, 0).length);          // 0

ESTO DEBE FALLAR
  // ej21Siguiente = ej21Etiqueta;       → un nombre importado no se reasigna.
  // ej21Etiqueta('7');                  → numero es number.
  // ej21Limite = 10;                    → un nombre importado no se reasigna.

EXPLICA
  ¿Cómo distingues en la línea import cuál es la exportación por defecto y cuáles son
  las nombradas?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 22 — Una clase exportada y el estado propio del módulo
/*
SITUACIÓN
  Un módulo ofrece contadores de visitas con un tope. Además, lleva la cuenta de cuántos
  contadores se han creado: ese número es del módulo, no de cada contador, y nadie
  puede cambiarlo desde fuera.

QUÉ DEBES HACER
  1. Crea modulos/ej22-contador.ts. Dentro:
     a) SIN export, con let, la variable creados (number) con valor 0;
     b) con export, la clase ContadorVisitas. Su constructor declara limite (number, oculto;
        supón entero >= 1). Además tiene la propiedad cuenta (number, oculta) que empieza en 0.
        En el cuerpo del constructor suma 1 a creados;
     c) en ContadorVisitas, el método registrar(): sin argumentos, devuelve boolean: false si
        cuenta ya es igual o mayor que limite; si no, suma 1 a cuenta y devuelve true;
     d) en ContadorVisitas, el método restantes(): sin argumentos, devuelve number: limite - cuenta;
     e) con export, la función instanciasCreadas: sin argumentos, devuelve number: creados.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import { ContadorVisitas as Ej22Contador, instanciasCreadas as ej22Creadas } from './modulos/ej22-contador';
  3. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  console.log(ej22Creadas());              // 0
  const sala = new Ej22Contador(2);
  const patio = new Ej22Contador(1);
  console.log(ej22Creadas());              // 2
  console.log(sala.registrar());           // true
  console.log(sala.registrar());           // true
  console.log(sala.registrar());           // false
  console.log(sala.restantes());           // 0
  console.log(patio.restantes());          // 1
  console.log(patio.registrar());          // true
  console.log(patio.registrar());          // false
  const extra = new Ej22Contador(3);
  console.log(ej22Creadas());              // 3
  console.log(extra.restantes());          // 3

ESTO DEBE FALLAR
  // sala.cuenta;                 → cuenta es private.
  // sala.limite = 5;             → limite es private.
  // new Ej22Contador();          → falta el argumento limite.
  // creados;                     → creados no tiene export, no existe aquí.

EXPLICA
  ¿Por qué creados sigue contando aunque haya varios objetos ContadorVisitas? ¿Qué pasaría si
  fuera una propiedad normal de la clase?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 23 — Importar un namespace desde otro archivo
/*
SITUACIÓN
  Un módulo valida códigos de empleado con formato 'AA-999' (dos letras mayúsculas, un
  guion y tres dígitos). Las reglas viven en un namespace exportado, para poder usarlas
  desde otro archivo.

QUÉ DEBES HACER
  1. Crea modulos/ej23-codigos.ts. Dentro, con export, el namespace Ej23Codigos. Dentro del
     namespace:
     a) SIN export, esLetra: recibe c (string) y devuelve boolean: true si c >= 'A' y
        c <= 'Z' (comparación de textos);
     b) SIN export, esDigito: recibe c (string) y devuelve boolean: true si c >= '0' y
        c <= '9';
     c) con export, esValido: recibe codigo (string) y devuelve boolean: true solo si
        codigo.length es 6, las posiciones 0 y 1 son letras mayúsculas (charAt), la posición 2
        es '-' y las posiciones 3, 4 y 5 son dígitos;
     d) con export, motivo: recibe codigo (string) y devuelve string, comprobando en este orden:
        'Longitud incorrecta' si length es distinto de 6; 'Las dos primeras deben ser letras
        mayúsculas'; 'Falta el guion' si la posición 2 no es '-'; 'Los tres últimos deben ser
        dígitos'; y 'Código válido' si todo está bien.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import { Ej23Codigos as ej23Cod } from './modulos/ej23-codigos';
  3. Dentro de la función autoinvocada crea la función clasificar. Recibe codigos (string[]) y
     devuelve string: 'Válidos: {a} | Inválidos: {b}', contando con ej23Cod.esValido.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(ej23Cod.esValido('AB-123'));     // true
  console.log(ej23Cod.esValido('ZZ-000'));     // true
  console.log(ej23Cod.esValido('ab-123'));     // false
  console.log(ej23Cod.esValido('AB123'));      // false
  console.log(ej23Cod.esValido('AB-12'));      // false
  console.log(ej23Cod.esValido('AB-12A'));     // false
  console.log(ej23Cod.esValido('A1-123'));     // false
  console.log(ej23Cod.esValido('AB_123'));     // false
  console.log(ej23Cod.motivo('AB-123'));       // 'Código válido'
  console.log(ej23Cod.motivo('AB-12'));        // 'Longitud incorrecta'
  console.log(ej23Cod.motivo('1B-123'));       // 'Las dos primeras deben ser letras mayúsculas'
  console.log(ej23Cod.motivo('ABC123'));       // 'Falta el guion'
  console.log(ej23Cod.motivo('AB-1X3'));       // 'Los tres últimos deben ser dígitos'
  console.log(clasificar(['AB-123', 'xx-111', 'CD-999', 'CD-99'])); // 'Válidos: 2 | Inválidos: 2'
  console.log(clasificar([]));                 // 'Válidos: 0 | Inválidos: 0'

ESTO DEBE FALLAR
  // ej23Cod.esDigito('1');          → esDigito no tiene export dentro del namespace.
  // new ej23Cod();                  → un namespace no se instancia.
  // ej23Cod.esValido(123456);       → codigo es string.

EXPLICA
  Hay dos export distintos en ese archivo: uno delante de namespace y otros dentro. ¿Qué
  permite cada uno?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 24 — Un módulo con clases abstractas y * as
/*
SITUACIÓN
  Un módulo de geometría define una figura abstracta y dos figuras concretas, más dos
  funciones que trabajan con listas de figuras. Se importa todo junto con * as.

QUÉ DEBES HACER
  1. Crea modulos/ej24-figuras.ts. Dentro, con export:
     a) la clase abstracta Figura. Su constructor declara nombre (string, visible). Tiene el
        método abstracto area(): sin argumentos, devuelve number; y el método describir():
        sin argumentos, devuelve string: '{nombre}: {area}' con el área con toFixed(2);
     b) la clase Circulo que extiende Figura. Su constructor recibe radio (number, oculto;
        supón > 0), pasa 'Círculo' al padre con super y define area() como 3.14159 * radio * radio;
     c) la clase Rectangulo que extiende Figura. Su constructor recibe base y altura (number,
        ocultos; supón > 0), pasa 'Rectángulo' al padre y define area() como base * altura;
     d) la función mayorArea: recibe figuras (Figura[]) y devuelve Figura | undefined: la de
        mayor área (si hay empate, la primera); undefined si la lista está vacía;
     e) la función areaTotal: recibe figuras (Figura[]) y devuelve number: la suma de áreas
        (0 si está vacía).
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import * as Ej24Fig from './modulos/ej24-figuras';
  3. Dentro de la función autoinvocada ejecuta COMPRUEBA (las clases se usan como Ej24Fig.Circulo
     y Ej24Fig.Rectangulo).

COMPRUEBA
  const c = new Ej24Fig.Circulo(2);
  const r = new Ej24Fig.Rectangulo(3, 4);
  const otro = new Ej24Fig.Rectangulo(2, 6);
  console.log(c.describir());                         // 'Círculo: 12.57'
  console.log(r.describir());                         // 'Rectángulo: 12.00'
  console.log(Ej24Fig.areaTotal([c, r]).toFixed(2));  // '24.57'
  console.log(Ej24Fig.areaTotal([]));                 // 0
  console.log(Ej24Fig.mayorArea([c, r])?.nombre);     // 'Círculo'
  console.log(Ej24Fig.mayorArea([r, otro]) === r);    // true
  console.log(Ej24Fig.mayorArea([]));                 // undefined

ESTO DEBE FALLAR
  // new Ej24Fig.Figura('x');                      → Figura es abstracta.
  // c.radio;                                      → radio es private.
  // const f: Ej24Fig.Figura = new Ej24Fig.Rectangulo(1);   → falta el argumento altura.

EXPLICA
  ¿Por qué mayorArea acepta círculos y rectángulos en la misma lista si ninguno es de tipo Figura exacto?
*/
(() => {
    // Tu solución.
})();

// ===========================================================================
// TRAMO 4 — NAMESPACES + CLASES E INTERFACES: EJERCICIOS 25 AL 34
// Los namespaces siguen a nivel superior; las clases se declaran dentro de la función
// autoinvocada y usan los namespaces por su nombre.
// ===========================================================================

// !EJERCICIO 25 — Dos namespaces que colaboran
/*
SITUACIÓN
  Una tienda cobra el envío según el peso y lo regala si la compra es grande. La tabla de
  envíos es un namespace; los pedidos son otro, que usa al primero por su nombre.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara primero el namespace Ej25Tarifas y debajo
     el namespace Ej25Pedidos.
  2. En Ej25Tarifas, con export, declara con const GRATIS_DESDE (number) con valor 100.
  3. En Ej25Tarifas, con export, crea envio. Recibe kilos (number; supón entero >= 1) y
     devuelve number: 5 si kilos es 1 o menos; si no, 12 si kilos es 5 o menos; si no, 30
     si kilos es 20 o menos; si no, 30 más 2 por cada kilo por encima de 20.
  4. En Ej25Pedidos, con export, crea el type Linea: producto (string), precio (number),
     kilos (number; peso de una unidad) y unidades (number).
  5. En Ej25Pedidos, con export, crea subtotal. Recibe lineas (Linea[]) y devuelve number: la
     suma de precio * unidades de cada línea.
  6. En Ej25Pedidos, con export, crea peso. Recibe lineas (Linea[]) y devuelve number: la
     suma de kilos * unidades.
  7. En Ej25Pedidos, con export, crea costoEnvio. Recibe lineas (Linea[]) y devuelve number:
     a) si no hay líneas, 0;
     b) si subtotal(lineas) es IGUAL O MAYOR que Ej25Tarifas.GRATIS_DESDE, 0;
     c) en otro caso, Ej25Tarifas.envio(peso(lineas)).
  8. En Ej25Pedidos, con export, crea total. Recibe lineas (Linea[]) y devuelve number:
     subtotal más costoEnvio.
  9. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  const libros: Ej25Pedidos.Linea[] = [
      { producto: 'Libro', precio: 20, kilos: 1, unidades: 2 },
  ];
  const gimnasio: Ej25Pedidos.Linea[] = [
      { producto: 'Mancuerna', precio: 30, kilos: 10, unidades: 2 },
      { producto: 'Banda', precio: 5, kilos: 1, unidades: 3 },
  ];
  const monitor: Ej25Pedidos.Linea[] = [
      { producto: 'Monitor', precio: 100, kilos: 6, unidades: 1 },
  ];
  console.log(Ej25Tarifas.GRATIS_DESDE);        // 100
  console.log(Ej25Tarifas.envio(1));            // 5
  console.log(Ej25Tarifas.envio(2));            // 12
  console.log(Ej25Tarifas.envio(5));            // 12
  console.log(Ej25Tarifas.envio(6));            // 30
  console.log(Ej25Tarifas.envio(20));           // 30
  console.log(Ej25Tarifas.envio(21));           // 32
  console.log(Ej25Pedidos.subtotal(libros));    // 40
  console.log(Ej25Pedidos.peso(libros));        // 2
  console.log(Ej25Pedidos.costoEnvio(libros));  // 12
  console.log(Ej25Pedidos.total(libros));       // 52
  console.log(Ej25Pedidos.subtotal(gimnasio));  // 75
  console.log(Ej25Pedidos.peso(gimnasio));      // 23
  console.log(Ej25Pedidos.total(gimnasio));     // 111
  console.log(Ej25Pedidos.costoEnvio(monitor)); // 0
  console.log(Ej25Pedidos.total(monitor));      // 100
  console.log(Ej25Pedidos.total([]));           // 0

ESTO DEBE FALLAR
  // Ej25Tarifas.GRATIS_DESDE = 50;                       → GRATIS_DESDE es const.
  // Ej25Pedidos.costoEnvio(Ej25Tarifas.envio(3));        → costoEnvio recibe Linea[], no un number.
  // const x: Ej25Pedidos.Linea = { producto: 'a', precio: 1 };   → faltan kilos y unidades.

EXPLICA
  ¿Por qué costoEnvio puede usar Ej25Tarifas.envio si son dos namespaces distintos? ¿Qué
  habría que escribir para llamar a subtotal dentro de Ej25Pedidos?
*/
// Tu solución: nivel superior (los dos namespaces van aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 26 — Calculadora con una interfaz de función
/*
SITUACIÓN
  Una calculadora aplica operaciones representadas como funciones. Una interface describe
  la forma de una operación y un namespace reúne las operaciones y las encadena.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej26Calc.
  2. Dentro, con export, crea la interface Operacion: una función que recibe a (number) y
     b (number) y devuelve number | null.
  3. Con export crea el type Paso: tupla [string, number] (símbolo y valor).
  4. Con export crea cuatro constantes de tipo Operacion: sumar (a + b), restar (a - b),
     multiplicar (a * b) y dividir (a / b; si b es 0 devuelve null).
  5. Con export crea aplicar. Recibe simbolo (string), a (number) y b (number) y devuelve
     number | null: con if/else, '+' usa sumar, '-' usa restar, '*' usa multiplicar, '/' usa
     dividir; cualquier otro símbolo devuelve null.
  6. Con export crea encadenar. Recibe inicio (number) y pasos (Paso[]) y devuelve number | null:
     a) empieza con acumulado = inicio;
     b) para cada paso, en orden, calcula aplicar(simbolo, acumulado, valor); si da null,
        devuelve null de inmediato; si no, ese resultado es el nuevo acumulado;
     c) devuelve el acumulado. Sin pasos devuelve inicio.
  7. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  console.log(Ej26Calc.aplicar('+', 2, 3));        // 5
  console.log(Ej26Calc.aplicar('-', 2, 3));        // -1
  console.log(Ej26Calc.aplicar('*', 4, 3));        // 12
  console.log(Ej26Calc.aplicar('/', 9, 3));        // 3
  console.log(Ej26Calc.aplicar('/', 1, 0));        // null
  console.log(Ej26Calc.aplicar('%', 1, 2));        // null
  console.log(Ej26Calc.encadenar(10, [['+', 5], ['*', 2], ['-', 6]])); // 24
  console.log(Ej26Calc.encadenar(100, [['/', 4], ['/', 5]]));          // 5
  console.log(Ej26Calc.encadenar(10, [['/', 0], ['+', 1]]));           // null
  console.log(Ej26Calc.encadenar(1, [['x', 2]]));                      // null
  console.log(Ej26Calc.encadenar(7, []));                              // 7

ESTO DEBE FALLAR
  // Ej26Calc.sumar(1);                                           → faltan argumentos.
  // const op: Ej26Calc.Operacion = (a: string, b: string) => 1;  → una Operacion recibe numbers.
  // const r: number = Ej26Calc.dividir(4, 2);                    → puede ser null.

EXPLICA
  ¿Por qué dividir debe devolver number | null y no solo number? ¿Qué obliga a hacer eso a
  quien llama?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 27 — Cuentas creadas por una fábrica del namespace
/*
SITUACIÓN
  Un banco crea cuentas desde un namespace. Cada cuenta es un objeto con saldo propio y
  métodos, descrito por una interface. El namespace también transfiere dinero entre dos cuentas.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej27Banco.
  2. Dentro, con export, crea la interface Cuenta con: titular (string), saldo (number),
     depositar(monto: number): boolean, retirar(monto: number): boolean y resumen(): string.
  3. Con export crea crear. Recibe titular (string) y saldoInicial (number, valor por defecto 0;
     supón >= 0) y devuelve Cuenta: un objeto literal con titular, saldo (saldoInicial) y estos
     métodos, que usan this.saldo:
     a) depositar(monto): false si monto es 0 o menor; si no suma monto y devuelve true;
     b) retirar(monto): false si monto es 0 o menor o mayor que el saldo; si no resta y
        devuelve true;
     c) resumen(): '{titular}: {saldo}'.
  4. Con export crea transferir. Recibe origen (Cuenta), destino (Cuenta) y monto (number) y
     devuelve boolean: intenta origen.retirar(monto); si da false, devuelve false sin tocar
     destino; si da true, hace destino.depositar(monto) y devuelve true.
  5. Con export crea total. Recibe cuentas (Cuenta[]) y devuelve number: la suma de saldos.
  6. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const a = Ej27Banco.crear('Ana', 100);
  const b = Ej27Banco.crear('Luis');
  console.log(a.resumen());                     // 'Ana: 100'
  console.log(b.resumen());                     // 'Luis: 0'
  console.log(a.retirar(150));                  // false
  console.log(a.retirar(100));                  // true
  console.log(a.saldo);                         // 0
  console.log(a.depositar(0));                  // false
  console.log(a.depositar(40));                 // true
  console.log(b.saldo);                         // 0
  console.log(Ej27Banco.transferir(a, b, 50));  // false
  console.log(Ej27Banco.transferir(a, b, 40));  // true
  console.log(a.saldo);                         // 0
  console.log(b.saldo);                         // 40
  console.log(Ej27Banco.transferir(a, b, 0));   // false
  console.log(Ej27Banco.total([a, b]));         // 40
  console.log(Ej27Banco.total([]));             // 0

ESTO DEBE FALLAR
  // a.saldo = 'mucho';                                          → saldo es number.
  // const c: Ej27Banco.Cuenta = { titular: 'X', saldo: 0 };      → faltan los métodos.
  // Ej27Banco.transferir(a, b);                                  → falta el monto.

EXPLICA
  a y b se crean con la misma función: ¿por qué el saldo de una no cambia el de la otra?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 28 — Factura con una clase y un namespace de formato
/*
SITUACIÓN
  Una factura acumula líneas y aplica descuento por volumen. El texto del resumen usa
  un namespace de formato (dinero y porcentajes) que no sabe nada de facturas.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej28Formato. Dentro, con export:
     a) moneda: recibe n (number) y devuelve string: '$' seguido de n con toFixed(2);
     b) porcentaje: recibe fraccion (number, por ejemplo 0.05) y devuelve string:
        (fraccion * 100).toFixed(0) seguido de '%'.
  2. Dentro de la función autoinvocada crea el type Linea: descripcion (string), precio (number)
     y cantidad (number).
  3. Crea la clase Factura. Su constructor declara cliente (string, visible). Además tiene la
     propiedad lineas (Linea[], oculta), que empieza vacía.
  4. En Factura crea agregar(descripcion: string, precio: number, cantidad: number): boolean:
     a) false si precio es 0 o menor;
     b) false si cantidad es menor que 1 o si cantidad % 1 es distinto de 0 (no es entera);
     c) en otro caso añade la línea y devuelve true.
  5. En Factura crea subtotal(): sin argumentos, devuelve number: suma de precio * cantidad.
  6. En Factura crea tasaDescuento(): sin argumentos, oculto (private), devuelve number:
     0.1 si el subtotal es 500 o más; si no, 0.05 si es 200 o más; si no, 0.
  7. En Factura crea total(): sin argumentos, devuelve number: subtotal menos subtotal por tasa
     de descuento.
  8. En Factura crea resumen(): sin argumentos, devuelve string:
     '{cliente}: {n} líneas | Subtotal {moneda(subtotal)} | Descuento {porcentaje(tasa)} | Total {moneda(total)}'
     usando Ej28Formato.moneda y Ej28Formato.porcentaje; n es la cantidad de líneas.
  9. Fuera de la clase ejecuta COMPRUEBA en este orden.

COMPRUEBA
  console.log(Ej28Formato.moneda(5));           // '$5.00'
  console.log(Ej28Formato.porcentaje(0.05));    // '5%'
  const f = new Factura('Ana');
  console.log(f.agregar('Teclado', 100, 2));    // true
  console.log(f.agregar('Cable', 0, 1));        // false
  console.log(f.agregar('Cable', 5, 0));        // false
  console.log(f.agregar('Cable', 5, 1.5));      // false
  console.log(f.subtotal());                    // 200
  console.log(f.resumen());                     // 'Ana: 1 líneas | Subtotal $200.00 | Descuento 5% | Total $190.00'
  console.log(f.agregar('Mouse', 50, 1));       // true
  console.log(f.total());                       // 237.5
  console.log(f.agregar('Monitor', 250, 1));    // true
  console.log(f.resumen());                     // 'Ana: 3 líneas | Subtotal $500.00 | Descuento 10% | Total $450.00'
  const g = new Factura('Luis');
  console.log(g.resumen());                     // 'Luis: 0 líneas | Subtotal $0.00 | Descuento 0% | Total $0.00'
  console.log(g.agregar('Libro', 199, 1));      // true
  console.log(g.resumen());                     // 'Luis: 1 líneas | Subtotal $199.00 | Descuento 0% | Total $199.00'

ESTO DEBE FALLAR
  // f.lineas;                      → lineas es private.
  // f.tasaDescuento();             → tasaDescuento es private.
  // Ej28Formato.moneda('5');       → n es number.

EXPLICA
  ¿Por qué moneda y porcentaje están en un namespace y no dentro de Factura?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 29 — Clases que implementan la interfaz de un namespace
/*
SITUACIÓN
  Un club comprueba si una persona puede entrar con varias políticas. El namespace
  define qué es una política (una interface) y evalúa una lista; cada política concreta
  es una clase que cumple esa interface.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej29Acceso. Dentro, con export:
     a) la interface Politica: nombre (string) y permite(edad: number): boolean;
     b) rechazadas: recibe politicas (Politica[]) y edad (number) y devuelve string[]: los nombres
        de las políticas cuyo permite(edad) da false, en orden;
     c) veredicto: recibe politicas (Politica[]) y edad (number) y devuelve string:
        'Permitido' si rechazadas(...) está vacía; si no, 'Rechazado por: {nombres unidos con ", "}'.
  2. Dentro de la función autoinvocada crea la clase EdadMinima, que implementa
     Ej29Acceso.Politica. Su constructor declara minima (number, oculto) y asigna a la propiedad
     nombre (string, visible) el texto 'EdadMinima({minima})'. permite(edad): true si edad >= minima.
  3. Crea la clase EdadMaxima, que implementa Ej29Acceso.Politica. Su constructor declara
     maxima (number, oculto) y asigna a nombre 'EdadMaxima({maxima})'. permite(edad): true si
     edad <= maxima.
  4. Crea la clase NoEnLista, que implementa Ej29Acceso.Politica. Su constructor declara
     prohibidas (number[], oculto) y nombre vale siempre 'NoEnLista'. permite(edad): false si
     edad aparece en prohibidas (for...of); true si no.
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  const reglas: Ej29Acceso.Politica[] = [new EdadMinima(18), new EdadMaxima(65), new NoEnLista([40, 41])];
  console.log(Ej29Acceso.rechazadas(reglas, 30).length);       // 0
  console.log(Ej29Acceso.rechazadas(reglas, 18).length);       // 0
  console.log(Ej29Acceso.rechazadas(reglas, 65).length);       // 0
  console.log(Ej29Acceso.rechazadas(reglas, 17).join('|'));    // 'EdadMinima(18)'
  console.log(Ej29Acceso.rechazadas(reglas, 66).join('|'));    // 'EdadMaxima(65)'
  console.log(Ej29Acceso.rechazadas(reglas, 40).join('|'));    // 'NoEnLista'
  console.log(Ej29Acceso.veredicto(reglas, 30));               // 'Permitido'
  console.log(Ej29Acceso.veredicto(reglas, 10));               // 'Rechazado por: EdadMinima(18)'
  console.log(Ej29Acceso.veredicto([new EdadMinima(50), new EdadMaxima(40)], 45)); // 'Rechazado por: EdadMinima(50), EdadMaxima(40)'
  console.log(Ej29Acceso.veredicto([], 5));                    // 'Permitido'

ESTO DEBE FALLAR
  // new EdadMinima();                                              → falta minima.
  // new EdadMinima(18).minima;                                     → minima es private.
  // class Mala implements Ej29Acceso.Politica { public nombre: string = 'x'; }   → falta permite.

EXPLICA
  ¿Qué obliga implements a cada clase? ¿Por qué rechazadas puede recibir los tres tipos de
  política en el mismo arreglo?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 30 — Intentos de acceso con bloqueo por usuario
/*
SITUACIÓN
  Un sistema de acceso lleva cuántos intentos fallidos seguidos tiene cada usuario. El
  estado vive oculto en el namespace; tres fallos seguidos bloquean al usuario hasta que
  alguien lo desbloquee.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej30Sesion.
  2. Dentro, SIN export, declara:
     a) el type Cuenta: usuario (string), clave (string) y fallos (number);
     b) con const MAX (number) con valor 3;
     c) con const el arreglo cuentas (Cuenta[]) con estas dos cuentas: { usuario: 'ana',
        clave: 'x1', fallos: 0 } y { usuario: 'luis', clave: 'y2', fallos: 0 };
     d) la función buscar: recibe usuario (string) y devuelve Cuenta | undefined (for...of).
  3. Con export crea intentar. Recibe usuario (string) y clave (string) y devuelve string,
     comprobando en este orden:
     a) si la cuenta no existe, 'Usuario desconocido';
     b) si sus fallos ya son MAX o más, 'Usuario bloqueado' (aunque la clave sea correcta);
     c) si la clave es correcta, pone fallos en 0 y devuelve 'Acceso concedido';
     d) si es incorrecta, suma 1 a fallos; si fallos llega a MAX devuelve 'Usuario bloqueado'; si no,
        'Clave incorrecta ({fallos}/3)'.
  4. Con export crea desbloquear. Recibe usuario (string) y devuelve boolean: true solo si la
     cuenta existe y está bloqueada (fallos MAX o más), poniendo sus fallos en 0; false en otro caso.
  5. Con export crea fallos. Recibe usuario (string) y devuelve number: los fallos de esa cuenta,
     o -1 si no existe.
  6. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  console.log(Ej30Sesion.intentar('ana', 'no'));    // 'Clave incorrecta (1/3)'
  console.log(Ej30Sesion.intentar('ana', 'no'));    // 'Clave incorrecta (2/3)'
  console.log(Ej30Sesion.intentar('ana', 'x1'));    // 'Acceso concedido'
  console.log(Ej30Sesion.fallos('ana'));            // 0
  console.log(Ej30Sesion.intentar('ana', 'a'));     // 'Clave incorrecta (1/3)'
  console.log(Ej30Sesion.intentar('ana', 'b'));     // 'Clave incorrecta (2/3)'
  console.log(Ej30Sesion.intentar('ana', 'c'));     // 'Usuario bloqueado'
  console.log(Ej30Sesion.intentar('ana', 'x1'));    // 'Usuario bloqueado'
  console.log(Ej30Sesion.fallos('ana'));            // 3
  console.log(Ej30Sesion.intentar('luis', 'y2'));   // 'Acceso concedido'
  console.log(Ej30Sesion.intentar('zoe', 'q'));     // 'Usuario desconocido'
  console.log(Ej30Sesion.fallos('zoe'));            // -1
  console.log(Ej30Sesion.desbloquear('luis'));      // false
  console.log(Ej30Sesion.desbloquear('zoe'));       // false
  console.log(Ej30Sesion.desbloquear('ana'));       // true
  console.log(Ej30Sesion.desbloquear('ana'));       // false
  console.log(Ej30Sesion.intentar('ana', 'x1'));    // 'Acceso concedido'

ESTO DEBE FALLAR
  // Ej30Sesion.cuentas;                → cuentas no tiene export.
  // Ej30Sesion.MAX;                    → MAX no tiene export.
  // Ej30Sesion.intentar('ana');        → falta la clave.

EXPLICA
  ¿Por qué el intento 3 fallido devuelve 'Usuario bloqueado' en lugar de 'Clave incorrecta (3/3)'?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 31 — Nómina con clase abstracta e interfaz
/*
SITUACIÓN
  Una empresa tiene empleados con tres formas de pago. Una clase abstracta fija qué debe
  saber hacer todo empleado; un namespace define la interfaz «pagable» y calcula totales
  sobre una lista de ellos.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej31Nomina. Dentro, con export:
     a) la interface Pagable: nombre (string) y pagoMensual(): number;
     b) totalMensual: recibe lista (Pagable[]) y devuelve number: la suma de pagoMensual() de cada uno;
     c) masCostoso: recibe lista (Pagable[]) y devuelve string: el nombre del de mayor pagoMensual()
        (si hay empate, el primero); 'Nadie' si la lista está vacía;
     d) costoMayorA: recibe lista (Pagable[]) y tope (number) y devuelve string[]: los nombres de
        quienes cobran MÁS que tope (estrictamente), en orden.
  2. Dentro de la función autoinvocada crea la clase abstracta Empleado. Su constructor declara
     nombre (string, visible). Tiene el método abstracto pagoMensual(): sin argumentos, number.
  3. Crea Asalariado, que extiende Empleado e implementa Ej31Nomina.Pagable. Su constructor recibe
     nombre y sueldo (number, oculto). Pasa nombre al padre. pagoMensual() devuelve sueldo.
  4. Crea PorHoras, que extiende Empleado e implementa Ej31Nomina.Pagable. Su constructor recibe
     nombre, tarifa (number, oculto) y horas (number, oculto). pagoMensual(): si horas <= 160,
     tarifa * horas; si no, tarifa * 160 más (horas - 160) * tarifa * 1.5.
  5. Crea Comisionista, que extiende Empleado e implementa Ej31Nomina.Pagable. Su constructor recibe
     nombre, base (number, oculto) y ventas (number, oculto). pagoMensual(): base + ventas / 10.
  6. Ejecuta COMPRUEBA.

COMPRUEBA
  const equipo: Ej31Nomina.Pagable[] = [
      new Asalariado('Ana', 3000),
      new PorHoras('Luis', 20, 160),
      new PorHoras('Marta', 20, 170),
      new Comisionista('Raúl', 1000, 5000),
  ];
  console.log(equipo[1]?.pagoMensual());                // 3200
  console.log(equipo[2]?.pagoMensual());                // 3500
  console.log(equipo[3]?.pagoMensual());                // 1500
  console.log(new PorHoras('X', 20, 161).pagoMensual()); // 3230
  console.log(Ej31Nomina.totalMensual(equipo));         // 11200
  console.log(Ej31Nomina.masCostoso(equipo));           // 'Marta'
  console.log(Ej31Nomina.costoMayorA(equipo, 3000).join(',')); // 'Luis,Marta'
  console.log(Ej31Nomina.costoMayorA(equipo, 5000).length);    // 0
  console.log(Ej31Nomina.masCostoso([new Asalariado('A', 100), new Asalariado('B', 100)])); // 'A'
  console.log(Ej31Nomina.masCostoso([]));               // 'Nadie'
  console.log(Ej31Nomina.totalMensual([]));             // 0

ESTO DEBE FALLAR
  // new Empleado('x');                    → Empleado es abstracta.
  // new Asalariado('Ana');                → falta sueldo.
  // new Asalariado('Ana', 1).sueldo;      → sueldo es private.

EXPLICA
  ¿Qué aporta la clase abstracta y qué aporta la interface? ¿Por qué totalMensual no
  necesita conocer las clases concretas?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 32 — Termostato con get/set y un namespace de rangos
/*
SITUACIÓN
  Un termostato guarda una temperatura objetivo que debe permanecer dentro de un rango.
  Los cálculos de rango y la categoría de la temperatura están en un namespace reutilizable.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej32Rango. Dentro, con export:
     a) limitar: recibe valor, minimo y maximo (number) y devuelve number: minimo si valor es
        menor que minimo; maximo si es mayor que maximo; si no, valor;
     b) dentro: recibe los mismos tres parámetros y devuelve boolean: true si valor está entre
        minimo y maximo, ambos incluidos;
     c) categoria: recibe temp (number) y devuelve string: 'Frío' si temp es menor que 16; si
        no, 'Templado' si es menor que 24; en otro caso 'Calor'.
  2. Dentro de la función autoinvocada crea la clase Termostato. Su constructor recibe
     minimo (number, oculto), maximo (number, oculto) y objetivo (number; sin visibilidad en el
     constructor). Tiene la propiedad _objetivo (number, oculta), que en el constructor se
     inicializa con Ej32Rango.limitar(objetivo, minimo, maximo).
  3. En Termostato crea el getter objetivo, que devuelve _objetivo.
  4. En Termostato crea el setter objetivo(valor: number): si Ej32Rango.dentro(valor, minimo,
     maximo) es true, guarda valor en _objetivo; si es false, no cambia nada y no lanza error.
  5. En Termostato crea ajustar(delta: number): void: _objetivo pasa a ser
     Ej32Rango.limitar(_objetivo + delta, minimo, maximo).
  6. En Termostato crea estado(): sin argumentos, devuelve string: '{objetivo}° {categoria}',
     con la categoría de Ej32Rango.categoria(objetivo).
  7. Ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const t = new Termostato(10, 30, 50);
  console.log(t.objetivo);                // 30
  console.log(t.estado());                // '30° Calor'
  t.objetivo = 5;
  console.log(t.objetivo);                // 30
  t.objetivo = 20;
  console.log(t.objetivo);                // 20
  console.log(t.estado());                // '20° Templado'
  t.ajustar(-8);
  console.log(t.estado());                // '12° Frío'
  t.ajustar(-8);
  console.log(t.objetivo);                // 10
  t.ajustar(100);
  console.log(t.objetivo);                // 30
  t.objetivo = 10;
  console.log(t.objetivo);                // 10
  console.log(new Termostato(10, 30, -5).objetivo); // 10
  console.log(Ej32Rango.categoria(15));   // 'Frío'
  console.log(Ej32Rango.categoria(16));   // 'Templado'
  console.log(Ej32Rango.categoria(23));   // 'Templado'
  console.log(Ej32Rango.categoria(24));   // 'Calor'

ESTO DEBE FALLAR
  // t._objetivo;              → _objetivo es private.
  // t.objetivo = '20';        → el setter recibe number.
  // t.minimo;                 → minimo es private.

EXPLICA
  ¿Qué diferencia hay entre asignar t.objetivo = 5 (setter) y llamar t.ajustar(-25)?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 33 — Identificadores con static, readonly y un namespace
/*
SITUACIÓN
  Usuarios y pedidos reciben un identificador único al crearse ('USR-001', 'PED-001'). Un
  namespace lleva la cuenta por prefijo; las clases lo usan al construirse y una de ellas
  cuenta cuántos objetos existen.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej33Ids. Dentro:
     a) SIN export, el type Contador: prefijo (string) y ultimo (number);
     b) SIN export, con const, el arreglo contadores (Contador[]), vacío;
     c) con export, siguiente: recibe prefijo (string) y devuelve string: busca el contador de ese
        prefijo (for...of); si no existe, lo crea con ultimo 0 y lo añade; suma 1 a ultimo y devuelve
        '{prefijo}-{n}', donde n tiene al menos 3 dígitos: '00' delante si n < 10, '0' delante si
        n < 100, y n tal cual si es 100 o más;
     d) con export, reiniciar: recibe prefijo (string) y devuelve boolean: si existe su contador, pone
        ultimo en 0 y devuelve true; si no existe, false;
     e) con export, emitidos: sin argumentos, devuelve number: la suma de los ultimo de todos los
        contadores.
  2. Dentro de la función autoinvocada crea la clase Usuario. Tiene la propiedad estática total
     (number) con valor 0; su constructor declara nombre (string, visible); tiene la propiedad
     id (string, visible, readonly). En el constructor: id = Ej33Ids.siguiente('USR') y
     Usuario.total aumenta en 1.
  3. Crea la clase Pedido. Su constructor declara cliente (Usuario, visible, readonly); tiene la
     propiedad id (string, visible, readonly) que en el constructor recibe Ej33Ids.siguiente('PED').
  4. Ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const a = new Usuario('Ana');
  const b = new Usuario('Luis');
  console.log(a.id);                       // 'USR-001'
  console.log(b.id);                       // 'USR-002'
  const p = new Pedido(a);
  console.log(p.id);                       // 'PED-001'
  console.log(p.cliente.nombre);           // 'Ana'
  console.log(Usuario.total);              // 2
  console.log(Ej33Ids.emitidos());         // 3
  console.log(Ej33Ids.reiniciar('USR'));   // true
  console.log(Ej33Ids.reiniciar('XYZ'));   // false
  console.log(new Usuario('Zoe').id);      // 'USR-001'
  console.log(Usuario.total);              // 3
  console.log(Ej33Ids.emitidos());         // 2
  for (let i = 0; i < 8; i++) { Ej33Ids.siguiente('K'); }
  console.log(Ej33Ids.siguiente('K'));     // 'K-009'
  console.log(Ej33Ids.siguiente('K'));     // 'K-010'
  for (let i = 0; i < 88; i++) { Ej33Ids.siguiente('K'); }
  console.log(Ej33Ids.siguiente('K'));     // 'K-099'
  console.log(Ej33Ids.siguiente('K'));     // 'K-100'
  console.log(Ej33Ids.siguiente('K'));     // 'K-101'

ESTO DEBE FALLAR
  // a.id = 'X';                     → id es readonly.
  // a.total;                        → total es estático: se lee como Usuario.total.
  // Ej33Ids.contadores;             → contadores no tiene export.
  // p.cliente = b;                  → cliente es readonly.

EXPLICA
  ¿Qué diferencia hay entre el contador por prefijo del namespace y Usuario.total?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 34 — Agenda de citas sin solapamientos
/*
SITUACIÓN
  Una agenda acepta citas con hora de inicio y fin, y rechaza las que se solapan con otra.
  Las horas se guardan como tuplas [hora, minutos]. Un namespace sabe convertir y comparar
  horas; la clase Agenda lleva las citas ordenadas.

QUÉ DEBES HACER
  1. Encima de la función autoinvocada declara el namespace Ej34Horas. Dentro, con export:
     a) el type Hora: tupla [number, number] (hora y minutos);
     b) aMinutos: recibe h (Hora) y devuelve number: h[0] * 60 + h[1];
     c) deMinutos: recibe m (number; supón entero >= 0) y devuelve Hora: [(m - m % 60) / 60, m % 60];
     d) formatear: recibe h (Hora) y devuelve string 'HH:MM', con un 0 delante de la hora y de los
        minutos cuando sean menores que 10 (por ejemplo '09:05');
     e) solapan: recibe ini1, fin1, ini2, fin2 (todos Hora) y devuelve boolean: true si los
        intervalos [ini1, fin1) y [ini2, fin2) se pisan, es decir, si ini1 es menor que fin2 en minutos
        Y ini2 es menor que fin1 en minutos. Si uno termina justo cuando el otro empieza, NO se solapan.
  2. Dentro de la función autoinvocada crea el type Cita: titulo (string), inicio (Ej34Horas.Hora) y
     fin (Ej34Horas.Hora).
  3. Crea la clase Agenda con la propiedad citas (Cita[], oculta), que empieza vacía.
  4. En Agenda crea agendar(titulo: string, inicio: Ej34Horas.Hora, fin: Ej34Horas.Hora): boolean:
     a) false si fin no es posterior a inicio en minutos (igual o anterior);
     b) false si solapa con alguna cita ya guardada (usa Ej34Horas.solapan);
     c) en otro caso inserta la cita para que citas siga ordenada por hora de inicio (busca la
        primera posición cuya cita empiece después de la nueva y colócala delante; si no hay,
        al final) y devuelve true.
  5. En Agenda crea listar(): sin argumentos, devuelve string[]: una cadena por cita, en orden,
     '{inicio}-{fin} {titulo}' con las horas formateadas ('09:00-10:00 Desayuno').
  6. En Agenda crea proximoHueco(duracion: number, desde: Ej34Horas.Hora, hasta: Ej34Horas.Hora):
     Ej34Horas.Hora | undefined (supón duracion >= 1). Es el primer momento a partir de desde en que
     cabe una cita de esa duración terminando como máximo en hasta:
     a) empieza con candidato = Ej34Horas.aMinutos(desde);
     b) recorre las citas en orden; para cada una, con ci su inicio y cf su fin en minutos:
        si cf es menor o igual que candidato, sigue con la siguiente;
        si candidato + duracion es menor o igual que ci, termina el recorrido (ahí cabe);
        en otro caso, candidato pasa a valer cf;
     c) al terminar, si candidato + duracion es menor o igual que aMinutos(hasta), devuelve
        Ej34Horas.deMinutos(candidato); si no, devuelve undefined.
  7. Ejecuta COMPRUEBA en este orden.

COMPRUEBA
  console.log(Ej34Horas.aMinutos([2, 30]));                 // 150
  console.log(Ej34Horas.deMinutos(75));                     // [ 1, 15 ]
  console.log(Ej34Horas.formatear([9, 5]));                 // '09:05'
  console.log(Ej34Horas.formatear([14, 30]));               // '14:30'
  console.log(Ej34Horas.solapan([9, 0], [10, 0], [10, 0], [11, 0]));  // false
  console.log(Ej34Horas.solapan([9, 0], [10, 0], [9, 30], [11, 0]));  // true
  console.log(Ej34Horas.solapan([9, 0], [12, 0], [10, 0], [11, 0]));  // true
  console.log(Ej34Horas.solapan([9, 0], [10, 0], [8, 0], [9, 0]));    // false
  const ag = new Agenda();
  console.log(ag.agendar('Reunión', [10, 0], [11, 0]));     // true
  console.log(ag.agendar('Café', [11, 0], [11, 30]));       // true
  console.log(ag.agendar('Choque', [10, 30], [11, 15]));    // false
  console.log(ag.agendar('Vacía', [12, 0], [12, 0]));       // false
  console.log(ag.agendar('Al revés', [13, 0], [12, 0]));    // false
  console.log(ag.agendar('Desayuno', [8, 0], [9, 0]));      // true
  console.log(ag.listar().join(' | '));                     // '08:00-09:00 Desayuno | 10:00-11:00 Reunión | 11:00-11:30 Café'
  console.log(ag.proximoHueco(60, [8, 0], [18, 0]));        // [ 9, 0 ]
  console.log(ag.proximoHueco(90, [8, 0], [18, 0]));        // [ 11, 30 ]
  console.log(ag.proximoHueco(90, [8, 0], [12, 0]));        // undefined
  console.log(ag.proximoHueco(30, [12, 0], [12, 30]));      // [ 12, 0 ]
  console.log(ag.proximoHueco(30, [12, 0], [12, 29]));      // undefined
  console.log(new Agenda().listar().length);                // 0

ESTO DEBE FALLAR
  // ag.citas;                                   → citas es private.
  // ag.agendar('X', [10, 0]);                   → falta fin.
  // const h: Ej34Horas.Hora = [10];             → la tupla necesita 2 elementos.
  // Ej34Horas.solapan([1, 0], [2, 0], [1, 0]);  → faltan argumentos.

EXPLICA
  ¿Por qué 11:00-11:30 sí cabe después de 10:00-11:00? ¿Qué cambiaría en solapan si el borde se contara
  como choque?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// ===========================================================================
// TRAMO 5 — MÓDULOS + NAMESPACES + CLASES: EJERCICIOS 35 AL 42
// Los módulos auxiliares ahora combinan varias piezas y, a veces, se importan entre sí.
// ===========================================================================

// !EJERCICIO 35 — Un módulo que importa a otro módulo
/*
SITUACIÓN
  Una biblioteca presta libros durante 14 días y cobra multa por cada día de retraso.
  El cálculo de días vive en un namespace de un módulo; la clase Prestamo, en otro
  módulo, importa ese namespace.

QUÉ DEBES HACER
  1. Crea modulos/ej35-fechas.ts. Dentro, con export, el namespace Ej35Fechas con:
     a) esValida: recibe fecha (Date) y devuelve boolean: false si su valueOf() es NaN;
     b) diasEntre: recibe desde y hasta (Date) y devuelve number: (hasta.valueOf() -
        desde.valueOf()) / 86400000. Puede ser negativo. Supón fechas válidas y sin hora.
  2. Crea modulos/ej35-prestamo.ts. En la primera línea de ESE archivo importa el namespace
     del primer módulo, con la ruta './ej35-fechas' (misma carpeta, sin extensión) y sin alias.
     Dentro, con export:
     a) la constante PLAZO_DIAS (number) con valor 14;
     b) la clase Prestamo. Su constructor declara libro (string, visible, readonly) y
        desde (Date, oculto);
     c) en Prestamo, el método devolver(fecha: Date): string, comprobando en este orden:
        'Fecha inválida' si la fecha no es válida; calcula dias = Ej35Fechas.diasEntre(desde, fecha);
        'Devolución anterior al préstamo' si dias es negativo; 'Devuelto a tiempo' si dias es
        PLAZO_DIAS o menos; en otro caso retraso = dias - PLAZO_DIAS y devuelve
        'Retraso de {retraso} días: multa {retraso * 0.5 con toFixed(2)}'.
        devolver no modifica el préstamo.
  3. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import { Prestamo as Ej35Prestamo, PLAZO_DIAS as ej35Plazo } from './modulos/ej35-prestamo';
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  const p = new Ej35Prestamo('Dune', new Date('2026-03-01'));
  console.log(ej35Plazo);                                  // 14
  console.log(p.libro);                                    // 'Dune'
  console.log(p.devolver(new Date('2026-03-01')));         // 'Devuelto a tiempo'
  console.log(p.devolver(new Date('2026-03-15')));         // 'Devuelto a tiempo'
  console.log(p.devolver(new Date('2026-03-16')));         // 'Retraso de 1 días: multa 0.50'
  console.log(p.devolver(new Date('2026-03-21')));         // 'Retraso de 6 días: multa 3.00'
  console.log(p.devolver(new Date('2026-02-28')));         // 'Devolución anterior al préstamo'
  console.log(p.devolver(new Date('x')));                  // 'Fecha inválida'

ESTO DEBE FALLAR
  // p.libro = 'Otro';                  → libro es readonly.
  // p.desde;                           → desde es private.
  // new Ej35Prestamo('Dune');          → falta desde.

EXPLICA
  ¿Por qué Compendio01.ts no necesita importar ej35-fechas.ts para usar Prestamo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 36 — Clase como export default y función nombrada
/*
SITUACIÓN
  Un módulo representa libros de una biblioteca. La clase Libro es el valor principal del
  módulo (export default); además comparte por nombre dos funciones que resumen una lista.

QUÉ DEBES HACER
  1. Crea modulos/ej36-libro.ts. Dentro:
     a) con export default, la clase Libro. Su constructor declara titulo (string, visible,
        readonly). Tiene la propiedad prestado (boolean, oculta) que empieza en false;
     b) en Libro, prestar(): sin argumentos, devuelve boolean: false si ya está prestado; si no,
        lo marca prestado y devuelve true;
     c) en Libro, devolver(): sin argumentos, devuelve boolean: false si no estaba prestado; si no,
        lo marca disponible y devuelve true;
     d) en Libro, el getter disponible, que devuelve boolean: true si NO está prestado;
     e) con export, la función resumen: recibe libros (Libro[]) y devuelve string:
        'Disponibles: {a} | Prestados: {b}';
     f) con export, la función disponibles: recibe libros (Libro[]) y devuelve string[]: los títulos
        de los libros disponibles, en orden.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import Ej36Libro, { resumen as ej36Resumen, disponibles as ej36Disponibles } from './modulos/ej36-libro';
  3. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const a = new Ej36Libro('Dune');
  const b = new Ej36Libro('Emma');
  const lista = [a, b];
  console.log(a.disponible);                    // true
  console.log(a.prestar());                     // true
  console.log(a.prestar());                     // false
  console.log(a.disponible);                    // false
  console.log(ej36Resumen(lista));              // 'Disponibles: 1 | Prestados: 1'
  console.log(ej36Disponibles(lista).join(',')); // 'Emma'
  console.log(a.devolver());                    // true
  console.log(a.devolver());                    // false
  console.log(b.devolver());                    // false
  console.log(ej36Resumen(lista));              // 'Disponibles: 2 | Prestados: 0'
  console.log(ej36Resumen([]));                 // 'Disponibles: 0 | Prestados: 0'
  console.log(ej36Disponibles([]).length);      // 0

ESTO DEBE FALLAR
  // a.prestado;                 → prestado es private.
  // a.disponible = false;       → un getter sin setter es de solo lectura.
  // a.titulo = 'X';             → titulo es readonly.
  // ej36Resumen(a);             → recibe un arreglo de libros, no un libro.

EXPLICA
  ¿Qué nombre tiene la clase dentro de ej36-libro.ts y qué nombre usa Compendio01.ts? ¿Por qué
  pueden ser distintos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 37 — Un enum exportado y tareas ordenadas
/*
SITUACIÓN
  Un gestor de tareas define las prioridades en un enum exportado y ofrece una clase y
  varias funciones que las usan. La lista se ordena sin modificar la original.

QUÉ DEBES HACER
  1. Crea modulos/ej37-tareas.ts. Dentro, con export:
     a) el enum Prioridad con Baja = 1, Media = 2, Alta = 3;
     b) la clase Tarea. Su constructor declara titulo (string, visible, readonly), prioridad
        (Prioridad, visible) y hecha (boolean, oculta, valor por defecto false);
     c) en Tarea, completar(): sin argumentos, devuelve boolean: false si ya está hecha; si no, la marca
        hecha y devuelve true;
     d) en Tarea, el getter pendiente, que devuelve boolean: true si NO está hecha;
     e) la función ordenar: recibe tareas (Tarea[]) y devuelve Tarea[]: un arreglo NUEVO ordenado por
        prioridad de mayor a menor; las de igual prioridad conservan su orden original. Hazlo por
        inserción: recorre las tareas en orden y coloca cada una antes de la primera tarea ya
        colocada que tenga prioridad MENOR; si no hay, al final;
     f) la función titulos: recibe tareas (Tarea[]) y devuelve string: los títulos unidos con ', ';
     g) la función pendientesAltas: recibe tareas (Tarea[]) y devuelve string[]: los títulos de las
        tareas con prioridad Alta que estén pendientes, en orden;
     h) la función subir: recibe tarea (Tarea) y devuelve boolean: false si su prioridad ya es Alta; si
        no, sube un nivel (Baja pasa a Media y Media a Alta) y devuelve true.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import { Prioridad as Ej37Prioridad, Tarea as Ej37Tarea, ordenar as ej37Ordenar, titulos as ej37Titulos, pendientesAltas as ej37Altas, subir as ej37Subir } from './modulos/ej37-tareas';
  3. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const t1 = new Ej37Tarea('Pagar', Ej37Prioridad.Media);
  const t2 = new Ej37Tarea('Correo', Ej37Prioridad.Baja);
  const t3 = new Ej37Tarea('Informe', Ej37Prioridad.Alta);
  const t4 = new Ej37Tarea('Backup', Ej37Prioridad.Media);
  const t5 = new Ej37Tarea('Llamar', Ej37Prioridad.Alta);
  const todas = [t1, t2, t3, t4, t5];
  console.log(ej37Titulos(ej37Ordenar(todas)));    // 'Informe, Llamar, Pagar, Backup, Correo'
  console.log(ej37Titulos(todas));                 // 'Pagar, Correo, Informe, Backup, Llamar'
  console.log(ej37Altas(todas).join(','));         // 'Informe,Llamar'
  console.log(t3.completar());                     // true
  console.log(t3.completar());                     // false
  console.log(t3.pendiente);                       // false
  console.log(ej37Altas(todas).join(','));         // 'Llamar'
  console.log(ej37Subir(t2));                      // true
  console.log(t2.prioridad);                       // 2
  console.log(ej37Subir(t2));                      // true
  console.log(ej37Subir(t2));                      // false
  console.log(t2.prioridad === Ej37Prioridad.Alta); // true
  console.log(ej37Ordenar([]).length);             // 0
  console.log(ej37Titulos([]));                    // ''

ESTO DEBE FALLAR
  // Ej37Prioridad.Alta = 5;                  → los miembros de un enum son de solo lectura.
  // new Ej37Tarea('x');                      → falta prioridad.
  // t1.hecha;                                → hecha es private.
  // const p: Ej37Prioridad = 'Alta';         → un enum numérico no acepta texto.

EXPLICA
  ¿Por qué ordenar debe devolver un arreglo nuevo? ¿Qué se pierde si ordenara el que recibe?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 38 — Un namespace exportado con una interfaz, implementada en otro archivo
/*
SITUACIÓN
  Un módulo define cómo se cobra comisión por un método de pago: una interface dentro de
  un namespace exportado, y funciones para comparar métodos. Cada método concreto es una clase que
  se escribe en Compendio01.ts e implementa esa interface.

QUÉ DEBES HACER
  1. Crea modulos/ej38-pagos.ts. Dentro, con export, el namespace Ej38Pagos con, y todo con export:
     a) la interface Metodo: nombre (string) y comision(monto: number): number;
     b) neto: recibe metodo (Metodo) y monto (number) y devuelve number: monto menos
        metodo.comision(monto);
     c) mejor: recibe metodos (Metodo[]) y monto (number) y devuelve Metodo | undefined: el de
        menor comisión para ese monto (si hay empate, el primero); undefined si la lista está vacía;
     d) descripcion: recibe metodo (Metodo) y monto (number) y devuelve string:
        '{nombre}: comisión {c} | neto {n}', con comisión y neto con toFixed(2).
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import { Ej38Pagos as ej38P } from './modulos/ej38-pagos';
  3. Dentro de la función autoinvocada crea tres clases, cada una con implements ej38P.Metodo y la
     propiedad nombre (string, visible) con el valor que se indica; ninguna recibe datos en el
     constructor:
     a) Tarjeta, nombre 'Tarjeta'; comision(monto): monto * 3 / 100 más 0.30;
     b) Transferencia, nombre 'Transferencia'; comision(monto): 1 si monto < 1000; 0 si es 1000 o más;
     c) Efectivo, nombre 'Efectivo'; comision(monto): 0.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const tarjeta = new Tarjeta();
  const transf = new Transferencia();
  const efectivo = new Efectivo();
  console.log(tarjeta.comision(100));                          // 3.3
  console.log(ej38P.descripcion(tarjeta, 100));                // 'Tarjeta: comisión 3.30 | neto 96.70'
  console.log(ej38P.descripcion(transf, 100));                 // 'Transferencia: comisión 1.00 | neto 99.00'
  console.log(ej38P.descripcion(transf, 1000));                // 'Transferencia: comisión 0.00 | neto 1000.00'
  console.log(ej38P.neto(efectivo, 50));                       // 50
  console.log(ej38P.mejor([tarjeta, transf, efectivo], 100)?.nombre);  // 'Efectivo'
  console.log(ej38P.mejor([tarjeta, transf], 100)?.nombre);    // 'Transferencia'
  console.log(ej38P.mejor([tarjeta, transf], 2000)?.nombre);   // 'Transferencia'
  console.log(ej38P.mejor([transf, new Transferencia()], 100) === transf); // true
  console.log(ej38P.mejor([], 100));                           // undefined

ESTO DEBE FALLAR
  // class Mala implements ej38P.Metodo { public nombre: string = 'x'; }   → falta comision.
  // new ej38P.Metodo();                                                    → una interface no se instancia.
  // ej38P.neto(tarjeta);                                                   → falta monto.

EXPLICA
  ¿Por qué las clases pueden estar en Compendio01.ts y las funciones que las usan en el módulo, sin
  que el módulo las conozca?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 39 — Un singleton en un módulo
/*
SITUACIÓN
  Una aplicación necesita un único registro de eventos compartido por todo el programa.
  Un módulo exporta una clase con constructor oculto: solo se obtiene la instancia
  con un método estático.

QUÉ DEBES HACER
  1. Crea modulos/ej39-bitacora.ts. Dentro, con export, la clase Bitacora:
     a) una propiedad estática oculta unica, de tipo Bitacora | undefined, inicializada en undefined;
     b) un constructor oculto (private), sin parámetros;
     c) una propiedad lineas (string[], oculta) que empieza vacía;
     d) el método estático obtener(): sin argumentos, devuelve Bitacora: si unica es undefined, crea la
        instancia y la guarda; devuelve unica;
     e) registrar(mensaje: string, esError: boolean = false): boolean: false si mensaje es ''; si no,
        añade '[ERROR] {mensaje}' (si esError es true) o '[INFO] {mensaje}' (si es false) y devuelve true;
     f) total(): sin argumentos, devuelve number: cuántas líneas hay;
     g) contarErrores(): sin argumentos, devuelve number: cuántas líneas empiezan por '[ERROR]'
        (compara los primeros 7 caracteres con charAt o con un bucle);
     h) ultimas(cantidad: number): string[] (supón entero >= 0): un arreglo nuevo con las últimas
        cantidad líneas en orden cronológico; si hay menos líneas, todas;
     i) limpiar(): sin argumentos, devuelve void: deja lineas vacío.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import { Bitacora as Ej39Bitacora } from './modulos/ej39-bitacora';
  3. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const b1 = Ej39Bitacora.obtener();
  const b2 = Ej39Bitacora.obtener();
  console.log(b1 === b2);                         // true
  console.log(b1.registrar('Inicio'));            // true
  console.log(b2.registrar('Disco lleno', true)); // true
  console.log(b1.registrar(''));                  // false
  console.log(b1.registrar('Fin'));               // true
  console.log(b2.total());                        // 3
  console.log(b1.contarErrores());                // 1
  console.log(b1.ultimas(2).join(' / '));         // '[ERROR] Disco lleno / [INFO] Fin'
  console.log(b1.ultimas(10).length);             // 3
  console.log(b1.ultimas(0).length);              // 0
  b2.limpiar();
  console.log(b1.total());                        // 0
  console.log(b1.ultimas(1).length);              // 0

ESTO DEBE FALLAR
  // new Ej39Bitacora();            → el constructor es private.
  // b1.lineas;                     → lineas es private.
  // Ej39Bitacora.unica;            → unica es private.
  // b1.registrar();                → falta mensaje.

EXPLICA
  ¿Por qué b1 y b2 comparten las líneas? ¿Qué tendría que pasar para tener dos bitácoras distintas?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 40 — Hotel: enum, namespace y clase en un mismo módulo
/*
SITUACIÓN
  Un hotel cobra por tipo de habitación y temporada, con descuento por estancias largas.
  Todo vive en un módulo: un enum, un namespace de tarifas y la clase Reserva. Se importa
  con * as y se accede a cada pieza por su nombre.

QUÉ DEBES HACER
  1. Crea modulos/ej40-hotel.ts. Dentro, con export:
     a) el enum Tipo con Simple = 1, Doble = 2, Suite = 3;
     b) el namespace Ej40Tarifas con:
        - SIN export, base: recibe tipo (Tipo) y devuelve number: 80 si es Simple, 120 si es Doble,
          200 si es Suite;
        - con export, precioNoche: recibe tipo (Tipo) y temporadaAlta (boolean) y devuelve number:
          base(tipo); si temporadaAlta es true, base(tipo) * 125 / 100;
        - con export, descuentoPorNoches: recibe noches (number) y devuelve number (un porcentaje):
          15 si noches es 14 o más; si no, 10 si es 7 o más; si no, 0;
     c) la clase Reserva. Su constructor declara huesped (string, visible), tipo (Tipo, oculto), noches
        (number, oculto; supón entero >= 1) y temporadaAlta (boolean, oculto, valor por defecto false);
     d) en Reserva, total(): sin argumentos, devuelve number:
        Ej40Tarifas.precioNoche(tipo, temporadaAlta) * noches * (100 - descuento) / 100, con el
        descuento de Ej40Tarifas.descuentoPorNoches(noches);
     e) en Reserva, resumen(): sin argumentos, devuelve string: '{huesped}: {noches} noches | {total}'
        con el total con toFixed(2).
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import * as Ej40Hotel from './modulos/ej40-hotel';
  3. Dentro de la función autoinvocada ejecuta COMPRUEBA (las piezas se usan como Ej40Hotel.Tipo,
     Ej40Hotel.Ej40Tarifas y Ej40Hotel.Reserva).

COMPRUEBA
  const T = Ej40Hotel.Tipo;
  console.log(Ej40Hotel.Ej40Tarifas.precioNoche(T.Simple, false));  // 80
  console.log(Ej40Hotel.Ej40Tarifas.precioNoche(T.Doble, true));    // 150
  console.log(Ej40Hotel.Ej40Tarifas.precioNoche(T.Suite, true));    // 250
  console.log(Ej40Hotel.Ej40Tarifas.descuentoPorNoches(6));         // 0
  console.log(Ej40Hotel.Ej40Tarifas.descuentoPorNoches(7));         // 10
  console.log(Ej40Hotel.Ej40Tarifas.descuentoPorNoches(13));        // 10
  console.log(Ej40Hotel.Ej40Tarifas.descuentoPorNoches(14));        // 15
  console.log(new Ej40Hotel.Reserva('Ana', T.Doble, 3).total());    // 360
  console.log(new Ej40Hotel.Reserva('Ana', T.Doble, 3).resumen());  // 'Ana: 3 noches | 360.00'
  console.log(new Ej40Hotel.Reserva('Luis', T.Suite, 7, true).resumen()); // 'Luis: 7 noches | 1575.00'
  console.log(new Ej40Hotel.Reserva('Eva', T.Simple, 14).resumen());      // 'Eva: 14 noches | 952.00'

ESTO DEBE FALLAR
  // Ej40Hotel.Ej40Tarifas.base(T.Simple);                  → base no tiene export dentro del namespace.
  // new Ej40Hotel.Reserva('Ana', 'Doble', 3);              → el tipo debe ser un miembro del enum Tipo.
  // new Ej40Hotel.Reserva('Ana', T.Doble, 3).noches;       → noches es private.
  // T.Suite = 9;                                           → los miembros de un enum son de solo lectura.

EXPLICA
  ¿Cuántos niveles de punto hay en Ej40Hotel.Ej40Tarifas.precioNoche y qué representa cada uno?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 41 — Dos tiendas con nombres repetidos
/*
SITUACIÓN
  Dos tiendas tienen módulos con las mismas exportaciones (nombre, precioFinal y un valor
  por defecto con su stock). Los alias permiten usarlas juntas para decidir dónde comprar.

QUÉ DEBES HACER
  1. Crea modulos/ej41-tienda-norte.ts. Dentro:
     a) con export, la constante nombre (string) con valor 'Norte';
     b) con export, la función precioFinal: recibe base (number) y devuelve number: base + 10;
     c) SIN export, con const, el arreglo stock ({ producto: string; cantidad: number }[]) con, en este
        orden: { producto: 'Mesa', cantidad: 3 }, { producto: 'Silla', cantidad: 0 },
        { producto: 'Lámpara', cantidad: 8 };
     d) al final, export default stock;
  2. Crea modulos/ej41-tienda-sur.ts con las mismas tres exportaciones, pero:
     nombre vale 'Sur'; precioFinal devuelve base * 105 / 100; y stock tiene { producto: 'Mesa',
     cantidad: 0 }, { producto: 'Silla', cantidad: 10 }, { producto: 'Lámpara', cantidad: 8 }.
  3. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import ej41StockNorte, { nombre as ej41NombreNorte, precioFinal as ej41PrecioNorte } from './modulos/ej41-tienda-norte';
     import ej41StockSur, { nombre as ej41NombreSur, precioFinal as ej41PrecioSur } from './modulos/ej41-tienda-sur';
  4. Dentro de la función autoinvocada crea:
     a) existencias: recibe stock ({ producto: string; cantidad: number }[]) y producto (string) y
        devuelve number: la cantidad de ese producto, o 0 si no aparece;
     b) mejorOferta: recibe producto (string) y base (number) y devuelve string, en este orden:
        - si ninguna de las dos tiendas tiene existencias de ese producto (1 o más), 'Sin stock';
        - si solo una tiene, '{nombre de esa tienda} ({su precioFinal(base)})';
        - si ambas tienen, la de menor precioFinal(base); si empatan, la tienda Norte; el texto es
          '{nombre} ({precio})'.
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(ej41NombreNorte);                      // 'Norte'
  console.log(ej41NombreSur);                        // 'Sur'
  console.log(ej41PrecioNorte(100));                 // 110
  console.log(ej41PrecioSur(100));                   // 105
  console.log(existencias(ej41StockNorte, 'Mesa'));  // 3
  console.log(existencias(ej41StockNorte, 'Silla')); // 0
  console.log(existencias(ej41StockSur, 'Sofá'));    // 0
  console.log(mejorOferta('Lámpara', 100));          // 'Sur (105)'
  console.log(mejorOferta('Lámpara', 200));          // 'Norte (210)'
  console.log(mejorOferta('Lámpara', 400));          // 'Norte (410)'
  console.log(mejorOferta('Mesa', 100));             // 'Norte (110)'
  console.log(mejorOferta('Silla', 100));            // 'Sur (105)'
  console.log(mejorOferta('Sofá', 100));             // 'Sin stock'

ESTO DEBE FALLAR
  // ej41NombreNorte = 'X';                           → un nombre importado no se reasigna.
  // ej41StockNorte.push({ producto: 'Sofá' });       → falta cantidad.
  // ej41PrecioSur();                                 → falta base.
  // const s: number = ej41StockSur[0].cantidad;      → [0] puede ser undefined.

EXPLICA
  Los dos módulos exportan nombre y precioFinal. ¿Qué evita que choquen en Compendio01.ts?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 42 — Una clase de un módulo usada por un namespace local
/*
SITUACIÓN
  Un módulo define el perfil de un usuario con edad y correo que se validan al asignarse.
  En Compendio01.ts, un namespace resume una lista de perfiles usando esa clase como tipo.

QUÉ DEBES HACER
  1. Crea modulos/ej42-perfil.ts. Dentro:
     a) SIN export, la función esEmail: recibe texto (string) y devuelve boolean: true solo si
        contiene exactamente un '@' y ese '@' no es el primero ni el último carácter (recorre con
        for...of contando los '@', y comprueba el primer y el último carácter con charAt);
     b) con export, la clase Perfil. Su constructor recibe usuario (string, visible, readonly), edad
        (number) y email (string), estos dos últimos sin visibilidad en el constructor. Tiene las
        propiedades _edad (number, oculta) con valor inicial 0 y _email (string, oculta) con valor
        inicial 'sin email'. En el cuerpo del constructor asigna this.edad = edad y
        this.email = email (así pasan por los setters);
     c) getter y setter edad: el getter devuelve _edad; el setter guarda el valor solo si es un entero
        (valor % 1 es 0) entre 0 y 120, ambos incluidos; si no, no cambia nada;
     d) getter y setter email: el getter devuelve _email; el setter guarda el valor solo si
        esEmail(valor) es true; si no, no cambia nada;
     e) getter mayor, que devuelve boolean: true si _edad es 18 o más.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import { Perfil as Ej42Perfil } from './modulos/ej42-perfil';
  3. Encima de la función autoinvocada declara el namespace Ej42Informe. Dentro, con export, y usando
     Ej42Perfil como tipo:
     a) resumen: recibe perfiles (Ej42Perfil[]) y devuelve string:
        'Total: {n} | Mayores: {m} | Sin email: {k}' (m: perfiles con mayor true; k: perfiles cuyo
        email es 'sin email');
     b) mayorEdad: recibe perfiles (Ej42Perfil[]) y devuelve string: el usuario del de mayor edad (si
        hay empate, el primero); 'Nadie' si la lista está vacía;
     c) sinEmail: recibe perfiles (Ej42Perfil[]) y devuelve string[]: los usuarios cuyo email es
        'sin email', en orden.
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const a = new Ej42Perfil('ana', 30, 'ana@mail.com');
  const b = new Ej42Perfil('luis', 17, 'luis#mail');
  const c = new Ej42Perfil('zoe', 200, 'zoe@x.org');
  console.log(a.edad);                         // 30
  console.log(a.email);                        // 'ana@mail.com'
  console.log(b.email);                        // 'sin email'
  console.log(b.mayor);                        // false
  console.log(c.edad);                         // 0
  console.log(c.email);                        // 'zoe@x.org'
  b.edad = 18;
  console.log(b.mayor);                        // true
  b.edad = 17.5;
  b.edad = -1;
  console.log(b.edad);                         // 18
  b.edad = 120;
  b.edad = 121;
  console.log(b.edad);                         // 120
  b.email = 'x@';
  b.email = '@x';
  b.email = 'a@@b';
  console.log(b.email);                        // 'sin email'
  b.email = 'luis@mail.com';
  console.log(b.email);                        // 'luis@mail.com'
  const d = new Ej42Perfil('max', 40, 'malo');
  console.log(Ej42Informe.resumen([a, b, c]));      // 'Total: 3 | Mayores: 2 | Sin email: 0'
  console.log(Ej42Informe.resumen([a, b, c, d]));   // 'Total: 4 | Mayores: 3 | Sin email: 1'
  console.log(Ej42Informe.resumen([]));             // 'Total: 0 | Mayores: 0 | Sin email: 0'
  console.log(Ej42Informe.mayorEdad([a, b, c]));    // 'luis'
  console.log(Ej42Informe.mayorEdad([a, new Ej42Perfil('otro', 30, 'o@o')])); // 'ana'
  console.log(Ej42Informe.mayorEdad([]));           // 'Nadie'
  console.log(Ej42Informe.sinEmail([a, d]).join(',')); // 'max'

ESTO DEBE FALLAR
  // a.usuario = 'x';          → usuario es readonly.
  // a.mayor = true;           → mayor es un getter sin setter.
  // a._edad;                  → _edad es private.
  // a.edad = '30';            → el setter recibe number.

EXPLICA
  ¿Por qué el namespace puede usar Ej42Perfil como tipo si lo importaste con un alias?
  ¿Qué valor queda en c.edad cuando el constructor recibe 200?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// ===========================================================================
// TRAMO 6 — INTEGRACIÓN: EJERCICIOS 43 AL 50
// Cada problema mezcla módulos, namespaces, clases, interfaces y enum. Lee con calma
// qué va en el archivo auxiliar y qué va en Compendio01.ts.
// ===========================================================================

// !EJERCICIO 43 — Biblioteca: materiales de un módulo y préstamos en un namespace
/*
SITUACIÓN
  Una biblioteca presta libros y revistas con plazos y multas distintos. Los materiales
  son clases de un módulo; los préstamos activos viven en un namespace de Compendio01.ts
  que lleva el registro y calcula multas.

QUÉ DEBES HACER
  1. Crea modulos/ej43-material.ts. Dentro, con export:
     a) la clase abstracta Material. Su constructor declara titulo (string, visible, readonly). Tiene
        el método abstracto diasPrestamo(): sin argumentos, devuelve number; y el método
        multaPorDia(): sin argumentos, devuelve number: 1;
     b) la clase Libro, que extiende Material. Su constructor recibe titulo y lo pasa al padre con
        super. diasPrestamo() devuelve 14;
     c) la clase Revista, que extiende Material. Su constructor recibe titulo y lo pasa al padre.
        diasPrestamo() devuelve 7; multaPorDia() devuelve super.multaPorDia() * 2.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import { Material as Ej43Material, Libro as Ej43Libro, Revista as Ej43Revista } from './modulos/ej43-material';
  3. Encima de la función autoinvocada declara el namespace Ej43Biblioteca. Dentro:
     a) SIN export, el type Prestamo: socio (string) y material (Ej43Material);
     b) SIN export, con let, el arreglo activos (Prestamo[]), vacío;
     c) con export, prestar: recibe socio (string) y material (Ej43Material) y devuelve boolean:
        false si el mismo objeto material ya está en activos (compara con ===); false si socio ya
        tiene 3 préstamos activos; en otro caso añade el préstamo y devuelve true;
     d) con export, devolver: recibe material (Ej43Material) y diasUsados (number; supón entero >= 0)
        y devuelve string: si el material no está en activos, 'No estaba prestado'; si está, lo
        quita de activos (arma un arreglo nuevo con los demás préstamos y asígnalo a activos) y calcula
        retraso = diasUsados - material.diasPrestamo(): si retraso es 0 o menor, '{titulo}: devuelto
        a tiempo'; si no, '{titulo}: multa {retraso * material.multaPorDia()}';
     e) con export, prestadosPor: recibe socio (string) y devuelve string[]: los títulos de sus
        préstamos activos, en orden;
     f) con export, enCirculacion: sin argumentos, devuelve number: cuántos préstamos activos hay.
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const dune = new Ej43Libro('Dune');
  const emma = new Ej43Libro('Emma');
  const ulises = new Ej43Libro('Ulises');
  const hobbit = new Ej43Libro('Hobbit');
  const wired = new Ej43Revista('Wired');
  console.log(dune.diasPrestamo());                  // 14
  console.log(wired.diasPrestamo());                 // 7
  console.log(dune.multaPorDia());                   // 1
  console.log(wired.multaPorDia());                  // 2
  console.log(Ej43Biblioteca.prestar('Ana', dune));  // true
  console.log(Ej43Biblioteca.prestar('Luis', dune)); // false
  console.log(Ej43Biblioteca.prestar('Ana', emma));  // true
  console.log(Ej43Biblioteca.prestar('Ana', wired)); // true
  console.log(Ej43Biblioteca.prestar('Ana', ulises)); // false
  console.log(Ej43Biblioteca.prestar('Luis', ulises)); // true
  console.log(Ej43Biblioteca.enCirculacion());       // 4
  console.log(Ej43Biblioteca.prestadosPor('Ana').join(',')); // 'Dune,Emma,Wired'
  console.log(Ej43Biblioteca.prestadosPor('Zoe').length);    // 0
  console.log(Ej43Biblioteca.devolver(dune, 14));    // 'Dune: devuelto a tiempo'
  console.log(Ej43Biblioteca.devolver(dune, 14));    // 'No estaba prestado'
  console.log(Ej43Biblioteca.devolver(emma, 20));    // 'Emma: multa 6'
  console.log(Ej43Biblioteca.devolver(wired, 11));   // 'Wired: multa 8'
  console.log(Ej43Biblioteca.prestar('Ana', hobbit)); // true
  console.log(Ej43Biblioteca.enCirculacion());       // 2

ESTO DEBE FALLAR
  // new Ej43Material('x');                 → Material es abstracta.
  // Ej43Biblioteca.activos;                → activos no tiene export.
  // dune.titulo = 'x';                     → titulo es readonly.
  // Ej43Biblioteca.prestar(dune);          → falta material.

EXPLICA
  ¿Qué ventaja tiene que prestar acepte un Ej43Material y no un Ej43Libro? ¿Qué devuelve
  super.multaPorDia() en Revista y por qué no se escribe un 1 directamente?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 44 — Parking: vehículos en un módulo y cobro en un namespace
/*
SITUACIÓN
  Un estacionamiento cobra por hora según el tipo de vehículo. Los vehículos son clases de un
  módulo (una abstracta como valor principal); el namespace del parking lleva quién está dentro
  y calcula el cobro al salir.

QUÉ DEBES HACER
  1. Crea modulos/ej44-vehiculos.ts. Dentro:
     a) con export default, la clase abstracta Vehiculo. Su constructor declara placa (string,
        visible, readonly). Tiene el método abstracto tarifaHora(): sin argumentos, devuelve number;
     b) con export, la clase Auto, que extiende Vehiculo; recibe placa y la pasa al padre;
        tarifaHora() devuelve 10;
     c) con export, la clase Moto, igual que Auto, con tarifaHora() = 5;
     d) con export, la clase Camion, que extiende Vehiculo; su constructor recibe placa y ejes (number,
        oculto; supón entero >= 2); tarifaHora() devuelve 10 + 5 * ejes.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import Ej44Vehiculo, { Auto as Ej44Auto, Moto as Ej44Moto, Camion as Ej44Camion } from './modulos/ej44-vehiculos';
  3. Encima de la función autoinvocada declara el namespace Ej44Parking. Dentro:
     a) SIN export, el type Ingreso: vehiculo (Ej44Vehiculo) y entrada (number, minuto de entrada);
     b) SIN export, con let, el arreglo dentro (Ingreso[]), vacío;
     c) con export, entrar: recibe vehiculo (Ej44Vehiculo) y minuto (number) y devuelve boolean: false si
        ya hay dentro un vehículo con la misma placa; si no, lo añade y devuelve true;
     d) con export, salir: recibe placa (string) y minuto (number; supón >= minuto de entrada) y
        devuelve number | undefined: undefined si no hay dentro un vehículo con esa placa; si lo hay, lo
        quita de dentro (arreglo nuevo con los demás, asignado a dentro) y calcula
        minutos = minuto - entrada:
        - si minutos es 15 o menos, devuelve 0;
        - si no, resto = minutos % 60 y horas = (minutos - resto) / 60, más 1 si resto es mayor que 0;
        - las horas cobradas son como máximo 8 (si horas es mayor que 8, usa 8);
        - devuelve horas cobradas * vehiculo.tarifaHora();
     e) con export, ocupados: sin argumentos, devuelve string[]: las placas de quienes están dentro,
        en orden de entrada;
     f) con export, libres: recibe capacidad (number) y devuelve number: capacidad menos los que están dentro.
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const auto = new Ej44Auto('AAA');
  const moto = new Ej44Moto('MMM');
  const camion = new Ej44Camion('CCC', 3);
  console.log(Ej44Parking.entrar(auto, 0));        // true
  console.log(Ej44Parking.entrar(moto, 10));       // true
  console.log(Ej44Parking.entrar(new Ej44Auto('AAA'), 20)); // false
  console.log(Ej44Parking.entrar(camion, 30));     // true
  console.log(Ej44Parking.ocupados().join(','));   // 'AAA,MMM,CCC'
  console.log(Ej44Parking.libres(5));              // 2
  console.log(Ej44Parking.salir('MMM', 25));       // 0
  console.log(Ej44Parking.salir('MMM', 40));       // undefined
  console.log(Ej44Parking.salir('AAA', 61));       // 20
  console.log(Ej44Parking.salir('CCC', 90));       // 25
  console.log(Ej44Parking.ocupados().length);      // 0
  console.log(Ej44Parking.entrar(auto, 100));      // true
  console.log(Ej44Parking.salir('AAA', 116));      // 10
  console.log(Ej44Parking.entrar(camion, 0));      // true
  console.log(Ej44Parking.salir('CCC', 600));      // 200
  console.log(Ej44Parking.entrar(moto, 0));        // true
  console.log(Ej44Parking.salir('MMM', 481));      // 40
  console.log(Ej44Parking.libres(5));              // 5

ESTO DEBE FALLAR
  // new Ej44Vehiculo('X');                 → Vehiculo es abstracta.
  // Ej44Parking.dentro;                    → dentro no tiene export.
  // auto.placa = 'B';                      → placa es readonly.
  // Ej44Parking.entrar(auto);              → falta minuto.

EXPLICA
  ¿Por qué 15 minutos cuesta 0 y 16 minutos cuesta una hora entera? ¿Por qué salir sigue
  funcionando con cualquier tipo de vehículo?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 45 — Liga: equipos de un módulo y tabla en un namespace
/*
SITUACIÓN
  Una liga registra partidos entre equipos. La clase Equipo (en un módulo) acumula sus
  resultados; el namespace de Compendio01.ts inscribe equipos, registra partidos y arma
  la tabla de posiciones.

QUÉ DEBES HACER
  1. Crea modulos/ej45-equipo.ts. Dentro, con export, la clase Equipo:
     a) su constructor declara nombre (string, visible, readonly);
     b) propiedades ocultas, todas number y con valor inicial 0: ganados, empatados, golesFavor y
        golesContra;
     c) registrar(favor: number, contra: number): void (supón enteros >= 0): suma favor a golesFavor y
        contra a golesContra; y suma 1 a ganados si favor > contra, a empatados si son iguales, y no
        suma a ganados ni a empatados si favor < contra;
     d) getter puntos: 3 por cada ganado más 1 por cada empatado;
     e) getter diferencia: golesFavor menos golesContra.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import { Equipo as Ej45Equipo } from './modulos/ej45-equipo';
  3. Encima de la función autoinvocada declara el namespace Ej45Liga. Dentro:
     a) SIN export, con const, el arreglo equipos (Ej45Equipo[]), vacío;
     b) SIN export, buscar: recibe nombre (string) y devuelve Ej45Equipo | undefined;
     c) SIN export, conSigno: recibe n (number) y devuelve string: '+{n}' si n es mayor que 0; en otro
        caso n como texto ('0' o '-3');
     d) con export, inscribir: recibe nombre (string) y devuelve boolean: false si ya existe un equipo con
        ese nombre; si no, lo crea con new Ej45Equipo(nombre), lo añade y devuelve true;
     e) con export, jugar: recibe local (string), visitante (string), golesLocal (number) y
        golesVisitante (number) y devuelve boolean: false si alguno de los dos nombres no está inscrito o si
        local y visitante son el mismo nombre; si no, registra el partido en los dos equipos
        (local.registrar(golesLocal, golesVisitante) y visitante.registrar(golesVisitante, golesLocal)) y
        devuelve true;
     f) con export, tabla: sin argumentos, devuelve string[]: copia los equipos a un arreglo nuevo y
        ordénalos (bucle burbuja, como en el ejercicio 16): un equipo va antes que otro si tiene más puntos;
        o los mismos puntos y mayor diferencia; o los mismos puntos y la misma diferencia y un nombre
        menor (comparación con <). Devuelve una cadena por equipo:
        '{posición}. {nombre} {puntos} pts (dif {conSigno(diferencia)})', con posición desde 1.
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  console.log(Ej45Liga.inscribir('Lobos'));                  // true
  console.log(Ej45Liga.inscribir('Águilas'));                // true
  console.log(Ej45Liga.inscribir('Toros'));                  // true
  console.log(Ej45Liga.inscribir('Lobos'));                  // false
  console.log(Ej45Liga.jugar('Lobos', 'Águilas', 2, 0));     // true
  console.log(Ej45Liga.jugar('Toros', 'Lobos', 1, 1));       // true
  console.log(Ej45Liga.jugar('Toros', 'Toros', 1, 0));       // false
  console.log(Ej45Liga.jugar('Toros', 'Zorros', 1, 0));      // false
  console.log(Ej45Liga.jugar('Águilas', 'Toros', 3, 0));     // true
  console.log(Ej45Liga.tabla().join(' | '));                 // '1. Lobos 4 pts (dif +2) | 2. Águilas 3 pts (dif +1) | 3. Toros 1 pts (dif -3)'
  console.log(Ej45Liga.inscribir('Zorros'));                 // true
  console.log(Ej45Liga.inscribir('Alces'));                  // true
  console.log(Ej45Liga.jugar('Zorros', 'Alces', 0, 0));      // true
  console.log(Ej45Liga.tabla().join(' | '));                 // '1. Lobos 4 pts (dif +2) | 2. Águilas 3 pts (dif +1) | 3. Alces 1 pts (dif 0) | 4. Zorros 1 pts (dif 0) | 5. Toros 1 pts (dif -3)'
  const x = new Ej45Equipo('X');
  console.log(x.puntos);                                     // 0
  x.registrar(1, 0);
  console.log(x.puntos);                                     // 3
  console.log(x.diferencia);                                 // 1

ESTO DEBE FALLAR
  // Ej45Liga.equipos;                       → equipos no tiene export.
  // x.puntos = 5;                           → puntos es un getter sin setter.
  // x.ganados;                              → ganados es private.
  // Ej45Liga.jugar('A', 'B', 1);            → falta golesVisitante.

EXPLICA
  ¿Por qué Toros queda último con 1 punto y Alces/Zorros por encima con 1 punto? ¿Qué criterio
  desempata entre Alces y Zorros?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 46 — Restaurante: carta por defecto, categorías en un enum y pedido en un namespace
/*
SITUACIÓN
  Un restaurante guarda su carta como valor principal de un módulo y las categorías en un enum
  exportado. Un namespace de Compendio01.ts cotiza pedidos y da 15 % de descuento cuando el pedido
  forma un menú completo (al menos una entrada, un plato y un postre).

QUÉ DEBES HACER
  1. Crea modulos/ej46-menu.ts. Dentro:
     a) con export, el enum Categoria con Entrada = 1, Plato = 2, Postre = 3, Bebida = 4;
     b) SIN export, la interface Item: nombre (string), categoria (Categoria), precio (number);
     c) SIN export, con const, el arreglo carta (Item[]) con estos 7 ítems, en este orden:
        Ensalada (Entrada, 6), Sopa (Entrada, 5), Pasta (Plato, 12), Filete (Plato, 18),
        Flan (Postre, 4), Helado (Postre, 3), Agua (Bebida, 2). Cada uno con sus tres propiedades;
     d) al final, export default carta;
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import ej46Carta, { Categoria as Ej46Categoria } from './modulos/ej46-menu';
  3. Encima de la función autoinvocada declara el namespace Ej46Pedido. Dentro, con export:
     a) la interface Linea: nombre (string) y cantidad (number);
     b) precioDe: recibe nombre (string) y devuelve number | null: el precio del ítem de la carta con
        ese nombre, o null si no existe;
     c) categoriaDe: recibe nombre (string) y devuelve Ej46Categoria | undefined: la categoría del ítem, o
        undefined si no existe;
     d) cotizar: recibe lineas (Linea[]) y devuelve string, en este orden:
        - recorre las líneas; si una tiene un nombre que no está en la carta, o una cantidad menor que 1,
          devuelve 'Pedido inválido: {nombre}' con la PRIMERA línea inválida;
        - subtotal = suma de precio * cantidad;
        - hay menú si el pedido contiene al menos un ítem de cada categoría Entrada, Plato y Postre;
        - total = subtotal * 85 / 100 si hay menú; si no, subtotal;
        - devuelve 'Subtotal {s} | Menú {sí o no} | Total {t}', con s y t con toFixed(2); el texto del menú es
          'sí' o 'no'.
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA.

COMPRUEBA
  console.log(ej46Carta.length);                  // 7
  console.log(Ej46Categoria.Postre);              // 3
  console.log(Ej46Pedido.precioDe('Pasta'));      // 12
  console.log(Ej46Pedido.precioDe('Pizza'));      // null
  console.log(Ej46Pedido.categoriaDe('Flan'));    // 3
  console.log(Ej46Pedido.categoriaDe('Pizza'));   // undefined
  console.log(Ej46Pedido.cotizar([{ nombre: 'Pasta', cantidad: 2 }]));  // 'Subtotal 24.00 | Menú no | Total 24.00'
  console.log(Ej46Pedido.cotizar([{ nombre: 'Sopa', cantidad: 1 }, { nombre: 'Filete', cantidad: 1 }, { nombre: 'Flan', cantidad: 1 }])); // 'Subtotal 27.00 | Menú sí | Total 22.95'
  console.log(Ej46Pedido.cotizar([{ nombre: 'Sopa', cantidad: 1 }, { nombre: 'Pasta', cantidad: 1 }]));  // 'Subtotal 17.00 | Menú no | Total 17.00'
  console.log(Ej46Pedido.cotizar([{ nombre: 'Ensalada', cantidad: 2 }, { nombre: 'Pasta', cantidad: 2 }, { nombre: 'Helado', cantidad: 2 }, { nombre: 'Agua', cantidad: 2 }])); // 'Subtotal 46.00 | Menú sí | Total 39.10'
  console.log(Ej46Pedido.cotizar([{ nombre: 'Pizza', cantidad: 1 }, { nombre: 'Sopa', cantidad: 1 }])); // 'Pedido inválido: Pizza'
  console.log(Ej46Pedido.cotizar([{ nombre: 'Sopa', cantidad: 0 }]));   // 'Pedido inválido: Sopa'
  console.log(Ej46Pedido.cotizar([]));                                   // 'Subtotal 0.00 | Menú no | Total 0.00'

ESTO DEBE FALLAR
  // const p: number = ej46Carta[0].precio;                    → [0] puede ser undefined.
  // Ej46Categoria.Plato = 9;                                  → los miembros de un enum son de solo lectura.
  // Ej46Pedido.cotizar([{ nombre: 'Sopa' }]);                 → falta cantidad.
  // const c: Ej46Categoria = 'Postre';                        → un enum numérico no acepta texto.

EXPLICA
  ¿Por qué no hace falta exportar la interface Item para que ej46Carta tenga tipo? ¿Qué devuelve
  categoriaDe para un nombre que no está en la carta?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 47 — Almacén singleton y reposición automática
/*
SITUACIÓN
  Un almacén único guarda existencias por código. Es un singleton de un módulo. Un namespace de
  Compendio01.ts decide qué reponer según reglas de mínimo y tamaño de lote, consultando al mismo
  almacén.

QUÉ DEBES HACER
  1. Crea modulos/ej47-almacen.ts. Dentro, con export, la clase Almacen:
     a) propiedad estática oculta unica, de tipo Almacen | undefined, inicializada en undefined;
     b) constructor oculto (private), sin parámetros;
     c) propiedad oculta items: arreglo de objetos { sku: string; cantidad: number }, vacío;
     d) método estático instancia(): devuelve Almacen: crea y guarda la única si no existe; la devuelve;
     e) ingresar(sku: string, cantidad: number): boolean: false si cantidad es menor que 1 o no es un
        entero (cantidad % 1 distinto de 0); si el sku ya existe, le suma la cantidad; si no, lo añade;
        devuelve true;
     f) retirar(sku: string, cantidad: number): boolean: false si cantidad es menor que 1 (o no es un
        entero), si el sku no existe o si hay menos existencias que cantidad; si no, resta y devuelve true;
     g) stock(sku: string): number: las existencias del sku, o 0 si no existe;
     h) getter referencias: devuelve number: cuántos skus tienen existencias mayores que 0.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import { Almacen as Ej47Almacen } from './modulos/ej47-almacen';
  3. Encima de la función autoinvocada declara el namespace Ej47Reposicion. Dentro, con export:
     a) la interface Regla: sku (string), minimo (number) y lote (number; supón >= 1);
     b) pendientes: recibe reglas (Regla[]) y devuelve string[]. Para cada regla, en orden, con
        s = Ej47Almacen.instancia().stock(sku): si s es MENOR que minimo, calcula cuántos lotes hacen falta
        para que s + lotes * lote llegue al menos a minimo (empieza en 1 y suma lotes con un bucle) y añade
        '{sku}: pedir {lotes * lote}'; si s es igual o mayor que minimo, no añade nada;
     c) aplicar: recibe reglas (Regla[]) y devuelve number: calcula las cantidades igual que pendientes
        y las ingresa en el almacén con ingresar; devuelve cuántas referencias repuso. Para no repetir la
        cuenta, haz que pendientes y aplicar usen una función auxiliar SIN export, faltante(regla: Regla),
        que devuelve number: lo que hay que pedir (0 si no hace falta).
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const a = Ej47Almacen.instancia();
  const b = Ej47Almacen.instancia();
  console.log(a === b);                       // true
  console.log(a.ingresar('T-1', 3));          // true
  console.log(b.ingresar('T-2', 10));         // true
  console.log(a.ingresar('T-3', 0));          // false
  console.log(a.ingresar('T-3', 1.5));        // false
  console.log(b.stock('T-1'));                // 3
  console.log(a.stock('XXX'));                // 0
  console.log(a.retirar('T-2', 11));          // false
  console.log(a.retirar('T-2', 4));           // true
  console.log(a.retirar('Q', 1));             // false
  console.log(a.retirar('T-2', 0));           // false
  console.log(a.stock('T-2'));                // 6
  console.log(a.referencias);                 // 2
  const reglas: Ej47Reposicion.Regla[] = [
      { sku: 'T-1', minimo: 10, lote: 4 },
      { sku: 'T-2', minimo: 6, lote: 5 },
      { sku: 'T-9', minimo: 5, lote: 5 },
  ];
  console.log(Ej47Reposicion.pendientes(reglas).join(' | '));  // 'T-1: pedir 8 | T-9: pedir 5'
  console.log(Ej47Reposicion.aplicar(reglas));                 // 2
  console.log(a.stock('T-1'));                // 11
  console.log(b.stock('T-9'));                // 5
  console.log(a.referencias);                 // 3
  console.log(Ej47Reposicion.pendientes(reglas).length);       // 0
  console.log(Ej47Reposicion.pendientes([]).length);           // 0

ESTO DEBE FALLAR
  // new Ej47Almacen();                           → el constructor es private.
  // a.items;                                     → items es private.
  // a.referencias = 5;                           → referencias es un getter sin setter.
  // Ej47Reposicion.pendientes([{ sku: 'x', minimo: 1 }]);  → falta lote.

EXPLICA
  ¿Por qué T-2 no aparece en pendientes si tiene 6 y el mínimo es 6? ¿Por qué el namespace ve las
  mismas existencias que a y b?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 48 — Tickets de soporte: estados en un enum y asignación en un namespace
/*
SITUACIÓN
  Un servicio de soporte tiene tickets con un ciclo de vida (abierto, en curso, resuelto o
  cancelado). La clase Ticket y su enum viven en un módulo; un namespace de Compendio01.ts reparte
  los tickets abiertos entre agentes según su carga.

QUÉ DEBES HACER
  1. Crea modulos/ej48-tickets.ts. Dentro, con export:
     a) el enum Estado con Abierto = 0, EnCurso = 1, Resuelto = 2, Cancelado = 3;
     b) la clase Ticket. Su constructor declara id (number, visible, readonly), asunto (string, visible,
        readonly) y urgencia (number de 1 a 3, visible, readonly). Tiene la propiedad _estado (Estado,
        oculta) con valor inicial Estado.Abierto;
     c) getter estado: devuelve _estado;
     d) avanzar(): sin argumentos, devuelve boolean: Abierto pasa a EnCurso y EnCurso pasa a Resuelto, ambos
        devuelven true; si está Resuelto o Cancelado, devuelve false y no cambia nada;
     e) cancelar(): sin argumentos, devuelve boolean: true si estaba Abierto o EnCurso (pasa a Cancelado);
        false en otro caso.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import { Estado as Ej48Estado, Ticket as Ej48Ticket } from './modulos/ej48-tickets';
  3. Encima de la función autoinvocada declara el namespace Ej48Soporte. Dentro, con export:
     a) la interface Agente: nombre (string), capacidad (number) y tickets (Ej48Ticket[]);
     b) cargaActual: recibe agente (Agente) y devuelve number: cuántos de sus tickets están Abierto o EnCurso;
     c) asignar: recibe ticket (Ej48Ticket) y agentes (Agente[]) y devuelve string, en este orden:
        - si el estado del ticket no es Abierto, 'Ticket {id} no está abierto';
        - considera solo los agentes con cargaActual menor que su capacidad; si no hay ninguno,
          'Sin cupo para {id}';
        - elige entre ellos el de menor cargaActual (si hay empate, el primero de la lista);
        - añade el ticket a los tickets del agente elegido, llama a ticket.avanzar() (queda EnCurso) y devuelve
          '{id} -> {nombre del agente}';
     d) urgentesSinAtender: recibe tickets (Ej48Ticket[]) y devuelve number[]: los id de los tickets Abierto con
        urgencia 3, en orden.
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const t1 = new Ej48Ticket(1, 'Login', 3);
  const t2 = new Ej48Ticket(2, 'Factura', 1);
  const t3 = new Ej48Ticket(3, 'Correo', 2);
  const t4 = new Ej48Ticket(4, 'Backup', 3);
  const ana: Ej48Soporte.Agente = { nombre: 'Ana', capacidad: 2, tickets: [] };
  const luis: Ej48Soporte.Agente = { nombre: 'Luis', capacidad: 1, tickets: [] };
  console.log(t1.estado);                                      // 0
  console.log(Ej48Soporte.urgentesSinAtender([t1, t2, t3, t4]).join(','));  // '1,4'
  console.log(Ej48Soporte.asignar(t1, [ana, luis]));           // '1 -> Ana'
  console.log(t1.estado);                                      // 1
  console.log(Ej48Soporte.asignar(t1, [ana, luis]));           // 'Ticket 1 no está abierto'
  console.log(Ej48Soporte.asignar(t2, [ana, luis]));           // '2 -> Luis'
  console.log(Ej48Soporte.asignar(t3, [ana, luis]));           // '3 -> Ana'
  console.log(Ej48Soporte.asignar(t4, [ana, luis]));           // 'Sin cupo para 4'
  console.log(t4.estado);                                      // 0
  console.log(Ej48Soporte.cargaActual(ana));                   // 2
  console.log(t1.avanzar());                                   // true
  console.log(Ej48Soporte.cargaActual(ana));                   // 1
  console.log(Ej48Soporte.asignar(t4, [ana, luis]));           // '4 -> Ana'
  console.log(Ej48Soporte.urgentesSinAtender([t1, t2, t3, t4]).length); // 0
  console.log(t3.cancelar());                                  // true
  console.log(t3.cancelar());                                  // false
  console.log(t3.avanzar());                                   // false
  console.log(t3.estado === Ej48Estado.Cancelado);             // true
  console.log(Ej48Soporte.cargaActual(ana));                   // 1
  console.log(t2.avanzar());                                   // true
  console.log(t2.avanzar());                                   // false

ESTO DEBE FALLAR
  // t1.estado = Ej48Estado.Resuelto;           → estado es un getter sin setter.
  // t1._estado;                                → _estado es private.
  // t1.id = 9;                                 → id es readonly.
  // new Ej48Ticket(1, 'x');                    → falta urgencia.
  // Ej48Soporte.asignar(t1);                   → faltan los agentes.

EXPLICA
  ¿Por qué cargaActual de Ana baja cuando t1 pasa a Resuelto? ¿Qué impide que alguien cambie el estado
  de un ticket sin pasar por avanzar o cancelar?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 49 — Plan de estudios: catálogo por defecto, alumno en un módulo y consultas en un namespace
/*
SITUACIÓN
  Una universidad tiene cursos con créditos y cursos previos. El catálogo es el valor principal de un
  módulo, que también define la clase Alumno (aprueba cursos si cumple los previos). Un namespace de
  Compendio01.ts consulta qué puede cursar un alumno y cuánto avanzó.

QUÉ DEBES HACER
  1. Crea modulos/ej49-cursos.ts. Dentro:
     a) SIN export, la interface Curso: codigo (string), creditos (number), previos (string[]);
     b) SIN export, con const, el arreglo cursos (Curso[]) con estos 6 cursos, en este orden:
        MAT1 (6 créditos, previos []), PRO1 (6, []), PRO2 (5, ['PRO1']), EST1 (4, ['MAT1']),
        DAT1 (6, ['PRO2', 'EST1']), TES1 (8, ['DAT1', 'PRO2']);
     c) con export, la clase Alumno. Su constructor declara nombre (string, visible, readonly). Tiene la
        propiedad aprobados (string[], oculta), vacía;
     d) en Alumno, aprobar(codigo: string): boolean: false si el código no existe en cursos, si ya está
        aprobado o si algún previo del curso no está en aprobados; si no, lo añade y devuelve true;
     e) en Alumno, creditos(): sin argumentos, devuelve number: la suma de créditos de sus cursos aprobados;
     f) en Alumno, lista(): sin argumentos, devuelve string[]: una copia de los códigos aprobados, en el
        orden en que se aprobaron;
     g) al final, export default cursos;
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import ej49Cursos, { Alumno as Ej49Alumno } from './modulos/ej49-cursos';
  3. Encima de la función autoinvocada declara el namespace Ej49Plan. Dentro, con export:
     a) disponibles: recibe alumno (Ej49Alumno) y devuelve string[]: los códigos de ej49Cursos, en el orden
        del catálogo, que el alumno NO ha aprobado y cuyos previos están todos aprobados;
     b) faltanPara: recibe codigo (string) y alumno (Ej49Alumno) y devuelve string[] | null: null si el
        código no existe en el catálogo; si existe, los previos directos que el alumno aún no aprobó, en el
        orden de sus previos (puede ser un arreglo vacío);
     c) avance: recibe alumno (Ej49Alumno) y devuelve string: '{c} de {t} créditos ({p}%)', donde c son los
        créditos del alumno, t la suma de créditos de todo el catálogo y p = c * 100 / t con toFixed(0).
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const ana = new Ej49Alumno('Ana');
  console.log(Ej49Plan.disponibles(ana).join(','));      // 'MAT1,PRO1'
  console.log(ana.aprobar('PRO2'));                       // false
  console.log(ana.aprobar('XXX'));                        // false
  console.log(ana.aprobar('PRO1'));                       // true
  console.log(ana.aprobar('PRO1'));                       // false
  console.log(Ej49Plan.disponibles(ana).join(','));      // 'MAT1,PRO2'
  console.log(Ej49Plan.faltanPara('DAT1', ana)?.join(',')); // 'PRO2,EST1'
  console.log(ana.aprobar('PRO2'));                       // true
  console.log(ana.aprobar('MAT1'));                       // true
  console.log(ana.aprobar('EST1'));                       // true
  console.log(Ej49Plan.faltanPara('DAT1', ana)?.length);  // 0
  console.log(Ej49Plan.faltanPara('MAT1', ana)?.length);  // 0
  console.log(Ej49Plan.faltanPara('ZZZ', ana));           // null
  console.log(Ej49Plan.disponibles(ana).join(','));      // 'DAT1'
  console.log(ana.creditos());                            // 21
  console.log(Ej49Plan.avance(ana));                      // '21 de 35 créditos (60%)'
  ana.lista().push('ZZZ');
  console.log(ana.lista().length);                        // 4
  const luis = new Ej49Alumno('Luis');
  console.log(Ej49Plan.avance(luis));                     // '0 de 35 créditos (0%)'
  console.log(luis.lista().length);                       // 0
  console.log(ana.aprobar('DAT1'));                       // true
  console.log(ana.aprobar('TES1'));                       // true
  console.log(Ej49Plan.avance(ana));                      // '35 de 35 créditos (100%)'
  console.log(Ej49Plan.disponibles(ana).length);          // 0
  console.log(ej49Cursos.length);                         // 6

ESTO DEBE FALLAR
  // ana.aprobados;                                       → aprobados es private.
  // ana.nombre = 'X';                                    → nombre es readonly.
  // ej49Cursos.push({ codigo: 'X', creditos: 1 });       → falta previos.
  // Ej49Plan.faltanPara('DAT1');                         → falta el alumno.

EXPLICA
  ¿Por qué lista() devuelve una copia? ¿En qué se diferencia faltanPara('ZZZ', ana) de
  faltanPara('MAT1', ana)?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();

// !EJERCICIO 50 — Coworking: todo junto
/*
SITUACIÓN
  Un coworking alquila escritorios y salas por turnos. Un módulo reúne el enum de turnos, un
  namespace de tarifas, una clase abstracta de espacios con dos tipos concretos y una recepción
  única (singleton) que impide reservas que chocan. En Compendio01.ts, un namespace factura a
  un cliente un lote de pedidos.

QUÉ DEBES HACER
  1. Crea modulos/ej50-espacios.ts. Dentro:
     a) con export, el enum Turno con Manana = 1, Tarde = 2, Completo = 3;
     b) con export, el namespace Ej50Tarifas con, ambos con export:
        - porTurno: recibe turno (Turno) y devuelve number: 20 si es Manana, 20 si es Tarde, 30 si es Completo;
        - descuento: recibe cantidad (number) y devuelve number (un porcentaje): 20 si cantidad es 5 o más;
          si no, 10 si es 3 o más; si no, 0;
     c) con export default, la clase abstracta Espacio. Su constructor declara codigo (string, visible,
        readonly) y capacidad (number, solo jerarquía). Tiene la propiedad estática creados (number) con
        valor 0, que aumenta en 1 cada vez que se construye un espacio (en el cuerpo del constructor de
        Espacio); el getter plazas, que devuelve capacidad; el método abstracto recargo(): sin argumentos,
        devuelve number (un porcentaje); y el método precio(turno: Turno): number, que devuelve
        Ej50Tarifas.porTurno(turno) * (100 + this.recargo()) / 100;
     d) con export, la clase Escritorio, que extiende Espacio. Su constructor recibe codigo y pasa codigo y 1
        al padre. recargo() devuelve 0;
     e) con export, la clase SalaReunion, que extiende Espacio. Su constructor recibe codigo y capacidad y los
        pasa al padre. recargo() devuelve 50;
     f) con export, la clase Recepcion, singleton: propiedad estática oculta unica (Recepcion | undefined,
        inicializada en undefined); constructor oculto sin parámetros; propiedad oculta reservas, arreglo de
        objetos { espacio: string; turno: Turno; cliente: string }, vacío; método estático obtener() que
        crea y devuelve la única instancia;
     g) en Recepcion, reservar(espacio: Espacio, turno: Turno, cliente: string): boolean: dos turnos
        chocan si son iguales o si alguno de los dos es Completo; devuelve false si ya hay una reserva del
        mismo código de espacio con un turno que choca; si no, añade la reserva y devuelve true;
     h) en Recepcion, reservasDe(cliente: string): number: cuántas reservas tiene ese cliente;
     i) en Recepcion, liberar(espacio: Espacio, turno: Turno): boolean: si existe una reserva de ese espacio
        con exactamente ese turno, la quita (arreglo nuevo con las demás) y devuelve true; si no, false.
  2. En la ZONA DE IMPORTS de Compendio01.ts escribe:
     import Ej50Espacio, { Turno as Ej50Turno, Ej50Tarifas, Escritorio as Ej50Escritorio, SalaReunion as Ej50Sala, Recepcion as Ej50Recepcion } from './modulos/ej50-espacios';
  3. Encima de la función autoinvocada declara el namespace Ej50Cobro. Dentro, con export:
     a) la interface Pedido: cliente (string), espacio (Ej50Espacio) y turno (Ej50Turno);
     b) facturar: recibe cliente (string) y pedidos (Pedido[]) y devuelve string. Recorre los pedidos en
        orden y solo considera los de ese cliente: para cada uno llama a
        Ej50Recepcion.obtener().reservar(espacio, turno, cliente); si da true cuenta una aceptada y suma
        espacio.precio(turno) al subtotal; si da false cuenta una rechazada. Al final calcula el
        descuento con Ej50Tarifas.descuento(aceptadas), total = subtotal * (100 - descuento) / 100 y
        devuelve '{cliente}: {aceptadas} reservas | rechazadas {rechazadas} | total {total}', con el total
        con toFixed(2).
  4. Dentro de la función autoinvocada ejecuta COMPRUEBA en este orden.

COMPRUEBA
  const e1 = new Ej50Escritorio('E1');
  const e2 = new Ej50Escritorio('E2');
  const e3 = new Ej50Escritorio('E3');
  const e4 = new Ej50Escritorio('E4');
  const sala = new Ej50Sala('S1', 8);
  const T = Ej50Turno;
  console.log(Ej50Espacio.creados);                   // 5
  console.log(e1.plazas);                             // 1
  console.log(sala.plazas);                           // 8
  console.log(e1.precio(T.Manana));                   // 20
  console.log(e1.precio(T.Completo));                 // 30
  console.log(sala.precio(T.Tarde));                  // 30
  console.log(sala.precio(T.Completo));               // 45
  console.log(Ej50Tarifas.descuento(2));              // 0
  console.log(Ej50Tarifas.descuento(3));              // 10
  console.log(Ej50Tarifas.descuento(4));              // 10
  console.log(Ej50Tarifas.descuento(5));              // 20
  const rec = Ej50Recepcion.obtener();
  console.log(rec === Ej50Recepcion.obtener());       // true
  console.log(rec.reservar(e1, T.Manana, 'Ana'));     // true
  console.log(rec.reservar(e1, T.Manana, 'Luis'));    // false
  console.log(rec.reservar(e1, T.Completo, 'Luis'));  // false
  console.log(rec.reservar(e1, T.Tarde, 'Luis'));     // true
  console.log(rec.reservar(e2, T.Completo, 'Luis'));  // true
  console.log(rec.reservar(e2, T.Tarde, 'Ana'));      // false
  console.log(rec.reservasDe('Luis'));                // 2
  console.log(rec.reservasDe('Ana'));                 // 1
  console.log(rec.liberar(e2, T.Completo));           // true
  console.log(rec.liberar(e2, T.Completo));           // false
  console.log(rec.reservar(e2, T.Tarde, 'Ana'));      // true
  console.log(rec.reservasDe('Ana'));                 // 2
  const pedidos: Ej50Cobro.Pedido[] = [
      { cliente: 'Eva', espacio: sala, turno: T.Manana },
      { cliente: 'Eva', espacio: sala, turno: T.Tarde },
      { cliente: 'Eva', espacio: sala, turno: T.Manana },
      { cliente: 'Eva', espacio: e3, turno: T.Completo },
      { cliente: 'Eva', espacio: e4, turno: T.Manana },
      { cliente: 'Otro', espacio: e4, turno: T.Tarde },
  ];
  console.log(Ej50Cobro.facturar('Eva', pedidos));    // 'Eva: 4 reservas | rechazadas 1 | total 99.00'
  console.log(rec.reservasDe('Eva'));                 // 4
  console.log(rec.reservasDe('Otro'));                // 0
  console.log(Ej50Cobro.facturar('Otro', pedidos));   // 'Otro: 1 reservas | rechazadas 0 | total 20.00'
  console.log(Ej50Cobro.facturar('Zoe', pedidos));    // 'Zoe: 0 reservas | rechazadas 0 | total 0.00'

ESTO DEBE FALLAR
  // new Ej50Espacio('X', 1);                  → Espacio es abstracta.
  // new Ej50Recepcion();                      → el constructor es private.
  // e1.capacidad;                             → capacidad es protected.
  // e1.plazas = 3;                            → plazas es un getter sin setter.
  // Ej50Tarifas.porTurno('Tarde');            → un Turno es un miembro del enum, no un texto.
  // rec.reservar(e1, T.Manana);               → falta cliente.

EXPLICA
  ¿Por qué rec.reservar(e2, T.Tarde, 'Ana') da false antes de liberar y true después? ¿Qué
  parte del enunciado hace que 'Otro' pueda reservar e4 por la tarde aunque 'Eva' lo tenga por la mañana?
*/
// Tu solución: nivel superior (el namespace va aquí, encima de la función).
(() => {
    // Tu solución.
})();
