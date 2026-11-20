/*
COMPENDIO 01 — OBJETOS
50 ejercicios con dificultad creciente. Cada tramo añade un tema nuevo de la
sección 05 y lo combina con lo ya visto (secciones 01, 03, 04 y 05).

SUBSECCIONES EJERCITADAS
  01 Objetos básicos ... tipo de objeto escrito en línea, reasignar con la misma forma,
                         métodos, this, propiedades y métodos opcionales (?)
  02 Tipos ............. type para reutilizar la forma de un objeto
  03 Múltiples tipos ... uniones con |, comprobar con typeof y con null

PROGRESIÓN
  Ejercicios 01–05 ... objeto con tipo en línea, métodos y this (solo subsección 01)
  Ejercicios 06–10 ... propiedades y métodos opcionales (?), funciones que reciben objetos y
                       objetos que cambian de estado
  Ejercicios 11–20 ... type: formas reutilizables, arrays de objetos, objetos dentro de objetos
  Ejercicios 21–30 ... uniones (string | number, X | null, listas mixtas) combinadas con type
  Ejercicios 31–40 ... parámetros opcionales, por defecto y rest, tipos función, enum, tuplas
  Ejercicios 41–50 ... sistemas completos que integran todo lo anterior

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN: te dice qué se está modelando.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta.
  3. Escribe las instrucciones de COMPRUEBA con console.log. Cada línea trae el
     resultado esperado después de //. Antes de ejecutar, predice qué saldrá.
  4. Si hay líneas en ESTO DEBE FALLAR, pruébalas una por una: descomenta, comprueba
     que TypeScript marca error y vuelve a comentarla.
  5. Responde EXPLICA en un comentario bajo tu solución.

VOCABULARIO DE LOS ENUNCIADOS
  «propiedad» = dato de un objeto · «método» = función guardada en un objeto que se
  llama con objeto.metodo() y usa this para leer o cambiar sus propiedades.
  «opcional» = propiedad o parámetro con ? · «omitir» una propiedad opcional = no
  escribirla en el objeto (no escribas ': undefined').
  «firma» = tipo de una función: (a: number, b: string) => boolean.
  «supón» = el dato ya es válido; no lo compruebes.
  «rechazar» = devolver false (o null, según el ejercicio) y no cambiar nada.
  «recorrer» = usar forEach. Dentro de un forEach, return solo sale de esa vuelta;
  no detiene el recorrido.
  {llaves} en un texto = valor que sustituyes; las llaves no se escriben.
  Los textos entre comillas simples se escriben exactamente igual, con sus espacios.
  «comprobar un tipo» = usar typeof o comparar con null / undefined.

REGLAS COMUNES
  - Cada ejercicio va dentro de su función (() => { ... })(); son independientes y
    pueden repetir nombres.
  - Pon tipo a variables, parámetros y retornos. No uses any, as ni el operador !.
  - Los nombres de tipos, propiedades, métodos, funciones y constantes que da el
    enunciado se escriben exactamente igual: COMPRUEBA los usa.
  - Dentro de un método, las propiedades del propio objeto se leen y se cambian con
    this. No escribas el nombre de la constante que guarda al objeto.
  - Un método o función que modifica y devuelve boolean: true si acepta; false si
    rechaza, y entonces no cambia nada.
  - Una consulta no modifica nada. Imprimir no sustituye a devolver.
  - Acumula en variables locales (let) declaradas antes del recorrido.
  - Un type ya declarado se usa como tipo de una propiedad o de un array
    (Producto[]), igual que string o number.
  - Un número con decimales se muestra con .toFixed(2), que devuelve string.
  - Una propiedad opcional puede no existir: antes de leerla, comprueba que no es
    undefined. No uses || para esa comprobación si 0 o '' son valores válidos.
  - Para llamar a un método opcional usa objeto.metodo?.() o comprueba antes que existe.
  - Se pueden usar: if / else if / else, && || !, operadores aritméticos y de
    comparación, plantillas con `...`, typeof, === null, === undefined, ?.,
    .length, .charAt(n), .toLocaleUpperCase(), .push, .join, .forEach, .toFixed.
  - De secciones anteriores: parámetros opcionales, por defecto y rest, tipos
    función, arrays, tuplas, enum numéricos, void y uniones con null.

PROHIBIDO POR NO HABERSE VISTO
  clases, new, interfaces, genéricos, readonly, enum con texto, tipos literales de
  texto ('a' | 'b'), desestructuración, spread (... fuera de un parámetro rest),
  for / while / for-of / for-in, map / filter / reduce / find / includes / sort /
  splice / slice / indexOf, Math.*, Object.*, Number() / parseInt, try / catch /
  throw, operador ternario (a ? b : c), switch, import / export, namespaces,
  funciones que devuelven funciones, get / set, delete.
  No hay soluciones incluidas.
*/

// TRAMO 1 — OBJETOS BÁSICOS, MÉTODOS Y this: EJERCICIOS 01 AL 05

// !EJERCICIO 01 — Vida de un jugador
/*
SITUACIÓN
  Un videojuego guarda la ficha de un jugador en un objeto. Cada golpe le resta
  vida, la vida nunca baja de 0 y un jugador derrotado ya no recibe más golpes.

QUÉ DEBES HACER
  1. Declara con let la variable jugador. Escribe su tipo en línea:
     { nombre: string; vida: number; inventario: string[] }.
  2. Asígnale el objeto { nombre: 'Kira', vida: 100, inventario: ['espada'] }.
  3. Declara const golpes: number[] = [30, 60, 20, 5].
  4. Recorre golpes con forEach. En cada vuelta, con el golpe recibido:
     a) si jugador.vida es 0, no hagas nada más en esta vuelta;
     b) resta el golpe a jugador.vida;
     c) si jugador.vida quedó menor que 0, déjala en 0;
     d) si jugador.vida es 0, agrega 'derrotado' al final de jugador.inventario.
  5. Fuera del forEach ejecuta COMPRUEBA.

COMPRUEBA
  console.log(jugador.vida);              // 0
  console.log(jugador.inventario);        // [ 'espada', 'derrotado' ]
  console.log(jugador.inventario.length); // 2

ESTO DEBE FALLAR
  // jugador.mana = 10;                          → el tipo no tiene la propiedad mana.
  // jugador.vida = '70';                        → vida es number.
  // jugador = { nombre: 'Kira', vida: 5 };      → falta la propiedad inventario.

EXPLICA
  Si jugador se declarara con const, ¿podrías seguir haciendo el paso 4? ¿Y podrías
  asignarle un objeto nuevo completo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 02 — Reasignar un objeto con la misma forma
/*
SITUACIÓN
  Un sensor guarda sus lecturas en un objeto. Después de calcular el promedio, el
  objeto se reemplaza por otro que conserva solo las lecturas superiores al promedio.

QUÉ DEBES HACER
  1. Declara con let la variable lectura. Escribe su tipo en línea:
     { sensor: string; valores: number[] }.
  2. Asígnale el objeto { sensor: 'T1', valores: [18, 21, 22, 23] }.
  3. Declara let suma: number = 0 y recorre lectura.valores con forEach sumando
     cada valor a suma.
  4. Declara const promedio: number = suma / lectura.valores.length (supón que
     valores nunca está vacío).
  5. Declara const altos: number[] = [] y recorre lectura.valores con forEach:
     agrega a altos cada valor estrictamente mayor que promedio.
  6. Reasigna lectura con un objeto nuevo: sensor 'T1-altos' y valores altos.
  7. Fuera de los recorridos ejecuta COMPRUEBA.

COMPRUEBA
  console.log(promedio);                 // 21
  console.log(lectura.sensor);           // 'T1-altos'
  console.log(lectura.valores);          // [ 22, 23 ]
  console.log(lectura.valores.length);   // 2

ESTO DEBE FALLAR
  // lectura = { sensor: 'T2' };                             → falta valores.
  // lectura = { sensor: 'T2', valores: '1,2' };             → valores debe ser number[].
  // lectura = { sensor: 'T2', valores: [1], unidad: 'C' };  → unidad no existe en el tipo.

EXPLICA
  ¿Qué propiedades debe tener sí o sí el objeto nuevo del paso 6 y por qué?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 03 — Nivel de una cuenta
/*
SITUACIÓN
  Un banco clasifica cada cuenta según su saldo. El objeto sabe calcular su propio
  nivel y también presentarse con un resumen que reutiliza ese cálculo.

QUÉ DEBES HACER
  1. Declara con const la constante cuenta. Escribe su tipo en línea:
     { titular: string; saldo: number; nivel: () => string; resumen: () => string }.
  2. Asígnale un objeto con titular 'Tony' y saldo 5000, y dos métodos escritos en
     forma corta (nivel() { ... }). Supón saldo >= 0.
  3. El método nivel() no recibe nada y devuelve string. Evalúa en este orden:
     a) si this.saldo es 0, devuelve 'Sin fondos';
     b) si es menor que 1000, devuelve 'Básico';
     c) si es menor que 5000, devuelve 'Plata';
     d) en cualquier otro caso, devuelve 'Oro'.
  4. El método resumen() no recibe nada y devuelve string:
     '{titular} - {nivel}: {saldo}'. Obtén el nivel llamando a this.nivel(); no
     repitas las comparaciones.
  5. Ejecuta COMPRUEBA en orden: cada línea cambia el saldo antes de consultar.

COMPRUEBA
  console.log(cuenta.resumen());   // 'Tony - Oro: 5000'
  cuenta.saldo = 4999;
  console.log(cuenta.nivel());     // 'Plata'
  cuenta.saldo = 1000;
  console.log(cuenta.nivel());     // 'Plata'
  cuenta.saldo = 999;
  console.log(cuenta.nivel());     // 'Básico'
  cuenta.saldo = 0;
  console.log(cuenta.resumen());   // 'Tony - Sin fondos: 0'

ESTO DEBE FALLAR
  // cuenta.saldo = '100';     → saldo es number.
  // cuenta.nivel(10);         → nivel() no recibe argumentos.
  // cuenta.nivel = 5;         → nivel es una función, no un number.

EXPLICA
  En resumen(), ¿por qué se escribe this.nivel() y no cuenta.nivel()?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 04 — Cajero con límite diario
/*
SITUACIÓN
  Un cajero permite retirar dinero sin pasar del saldo ni del límite diario. Cada
  retiro aceptado modifica el objeto; un retiro rechazado no cambia nada.

QUÉ DEBES HACER
  1. Declara con const la constante cajero. Escribe su tipo en línea:
     { saldo: number; limiteDiario: number; retirado: number;
       disponible: () => number; retirar: (monto: number) => boolean }.
  2. Asígnale un objeto con saldo 500, limiteDiario 300, retirado 0 y los dos
     métodos escritos en forma corta.
  3. El método disponible() no recibe nada y devuelve number: lo máximo que se
     puede retirar ahora. Es el menor entre this.saldo y
     (this.limiteDiario - this.retirado). Decide cuál es menor con if; no modifica nada.
  4. El método retirar(monto) recibe monto (number, entero) y devuelve boolean:
     a) si monto es 0 o menor, devuelve false;
     b) si monto es mayor que this.disponible(), devuelve false;
     c) si no, resta monto a this.saldo, suma monto a this.retirado y devuelve true.
  5. Ejecuta COMPRUEBA en orden; el estado de cada línea depende de las anteriores.

COMPRUEBA
  console.log(cajero.disponible());   // 300
  console.log(cajero.retirar(0));     // false
  console.log(cajero.retirar(200));   // true
  console.log(cajero.disponible());   // 100
  console.log(cajero.retirar(101));   // false
  console.log(cajero.retirar(100));   // true
  console.log(cajero.saldo);          // 200
  console.log(cajero.retirado);       // 300
  console.log(cajero.disponible());   // 0
  console.log(cajero.retirar(1));     // false
  cajero.retirado = 0;
  cajero.saldo = 50;
  console.log(cajero.disponible());   // 50
  console.log(cajero.retirar(51));    // false
  console.log(cajero.saldo);          // 50

ESTO DEBE FALLAR
  // cajero.retirar();           → falta el argumento monto.
  // cajero.retirar('50');       → monto debe ser number.
  // cajero.disponible = 100;    → disponible es una función, no un number.

EXPLICA
  ¿Qué dos propiedades cambian cuando se acepta un retiro y cuáles cambian cuando
  se rechaza?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 05 — Termostato
/*
SITUACIÓN
  Un termostato acerca la temperatura actual a la temperatura objetivo, un grado
  por cada llamada. Su acción se guarda como una propiedad cuyo valor es una función.

QUÉ DEBES HACER
  1. Declara con const la constante termostato. Escribe su tipo en línea:
     { actual: number; objetivo: number; paso: () => string }.
  2. Asígnale un objeto con actual 18, objetivo 20 y paso. Escribe paso como
     propiedad con valor función: paso: function (): string { ... }
     (no uses la forma corta del método).
  3. La función paso no recibe nada y devuelve string. Evalúa en este orden:
     a) si this.actual es menor que this.objetivo: suma 1 a this.actual y devuelve 'sube';
     b) si this.actual es mayor que this.objetivo: resta 1 a this.actual y devuelve 'baja';
     c) si son iguales, no cambia nada y devuelve 'estable'.
  4. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  console.log(termostato.paso());     // 'sube'
  console.log(termostato.paso());     // 'sube'
  console.log(termostato.paso());     // 'estable'
  console.log(termostato.actual);     // 20
  termostato.objetivo = 15;
  console.log(termostato.paso());     // 'baja'
  console.log(termostato.actual);     // 19
  termostato.objetivo = 19;
  console.log(termostato.paso());     // 'estable'

ESTO DEBE FALLAR
  // termostato.paso = 'sube';     → paso es una función, no un string.
  // termostato.actual = true;     → actual es number.
  // termostato.paso(1);           → paso no recibe argumentos.

EXPLICA
  ¿A qué objeto apunta this dentro de paso cuando escribes termostato.paso()?
*/
(() => {
    // Tu solución.
})();

// TRAMO 2 — OPCIONALES (?) Y OBJETOS CON ESTADO: EJERCICIOS 06 AL 10

// !EJERCICIO 06 — Mejor medio de contacto
/*
SITUACIÓN
  Una agenda guarda contactos con teléfono y correo, pero ambos son opcionales.
  Una función decide cuál es el mejor medio para localizar a cada persona.

QUÉ DEBES HACER
  1. Crea la función mejorMedio. Recibe contacto, con tipo en línea
     { nombre: string; telefono?: string; email?: string }, y devuelve string.
  2. Dentro de mejorMedio evalúa en este orden:
     a) si contacto.telefono existe y tiene 7 o más caracteres (.length),
        devuelve '{nombre}: tel {telefono}';
     b) si no, y contacto.email existe, devuelve '{nombre}: mail {email}';
     c) si no, devuelve '{nombre}: sin contacto'.
     Un teléfono con menos de 7 caracteres no sirve: pasa al paso b).
  3. Ejecuta COMPRUEBA. Los objetos se escriben directamente como argumento.

COMPRUEBA
  console.log(mejorMedio({ nombre: 'Ana', telefono: '5551234', email: 'ana@mail.com' }));   // 'Ana: tel 5551234'
  console.log(mejorMedio({ nombre: 'Luis', telefono: '12345', email: 'luis@mail.com' }));   // 'Luis: mail luis@mail.com'
  console.log(mejorMedio({ nombre: 'Eva', email: 'eva@mail.com' }));                        // 'Eva: mail eva@mail.com'
  console.log(mejorMedio({ nombre: 'Omar', telefono: '123' }));                             // 'Omar: sin contacto'
  console.log(mejorMedio({ nombre: 'Zoe' }));                                               // 'Zoe: sin contacto'
  console.log(mejorMedio({ nombre: 'Max', telefono: '1234567' }));                          // 'Max: tel 1234567'

ESTO DEBE FALLAR
  // mejorMedio({ telefono: '5551234' });                    → falta nombre.
  // mejorMedio({ nombre: 'Ana', telefono: 5551234 });       → telefono debe ser string.
  // mejorMedio({ nombre: 'Ana', direccion: 'Calle 1' });    → direccion no existe en el tipo.

EXPLICA
  ¿Por qué no puedes escribir contacto.telefono.length sin comprobar antes que
  telefono existe?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 07 — Robots con reporte opcional
/*
SITUACIÓN
  Algunos robots traen un método de reporte propio y otros no. Una función pide el
  reporte solo cuando existe.

QUÉ DEBES HACER
  1. Declara con const la constante r1 con este tipo en línea:
     { nombre: string; bateria: number; reporte?: () => string }.
  2. Asígnale nombre 'R1', bateria 15 y un método reporte() en forma corta. Sin
     recibir nada y devolviendo string, reporte() evalúa:
     a) si this.bateria es menor que 20, devuelve '{nombre}: batería crítica ({bateria}%)';
     b) si no, devuelve '{nombre}: ok ({bateria}%)'.
  3. Declara con const la constante r2 con el mismo tipo del paso 1, con nombre
     'R2' y bateria 80. Omite reporte.
  4. Crea la función estadoRobot. Recibe r, con el mismo tipo en línea del paso 1,
     y devuelve string:
     a) si r.reporte existe, devuelve el resultado de llamarlo;
     b) si no, devuelve '{nombre}: sin reporte'.
  5. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  console.log(estadoRobot(r1));   // 'R1: batería crítica (15%)'
  r1.bateria = 20;
  console.log(estadoRobot(r1));   // 'R1: ok (20%)'
  console.log(estadoRobot(r2));   // 'R2: sin reporte'
  console.log(r2.reporte?.());    // undefined

ESTO DEBE FALLAR
  // r1.reporte();                   → reporte es opcional: podría no existir.
  // r1.reporte = 'texto';           → reporte debe ser una función () => string.
  // r2.bateria = '100';             → bateria es number.

EXPLICA
  ¿Qué devuelve r2.reporte?.() y por qué no lanza un error aunque reporte no exista?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 08 — Carrito con descuento
/*
SITUACIÓN
  Un carrito guarda nombres y precios en dos listas paralelas. Aplica un 10% de
  descuento cuando el total llega a 100 o más.

QUÉ DEBES HACER
  1. Declara con const la constante carrito. Escribe su tipo en línea:
     { items: string[]; precios: number[];
       agregar: (nombre: string, precio: number) => boolean;
       total: () => number }.
  2. Asígnale un objeto con items y precios vacíos ([]) y los dos métodos en forma corta.
  3. El método agregar(nombre, precio) devuelve boolean:
     a) si precio es 0 o menor, devuelve false;
     b) si nombre tiene 0 caracteres (.length), devuelve false;
     c) si no, agrega nombre al final de this.items y precio al final de
        this.precios, y devuelve true.
  4. El método total() no recibe nada y devuelve number:
     a) suma todos los precios de this.precios con un forEach y una variable local;
     b) si la suma es 100 o más, devuelve suma - suma / 10;
     c) si no, devuelve la suma.
     No guardes el total en ninguna propiedad.
  5. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  console.log(carrito.agregar('pan', 40));     // true
  console.log(carrito.agregar('leche', 59));   // true
  console.log(carrito.total());                // 99
  console.log(carrito.agregar('', 10));        // false
  console.log(carrito.agregar('sal', 0));      // false
  console.log(carrito.agregar('sal', 1));      // true
  console.log(carrito.total());                // 90
  console.log(carrito.items);                  // [ 'pan', 'leche', 'sal' ]
  console.log(carrito.precios.length);         // 3

ESTO DEBE FALLAR
  // carrito.agregar('pan');           → falta el argumento precio.
  // carrito.total = 90;               → total es una función, no un number.
  // carrito.items.push(5);            → items es string[].

EXPLICA
  ¿Por qué conviene que total() calcule la suma cada vez en lugar de guardarla en
  una propiedad?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 09 — Curar a un paciente
/*
SITUACIÓN
  Un hospital de juego cura a sus pacientes con una función. La función modifica el
  objeto que recibe y devuelve cuánta vida se recuperó realmente.

QUÉ DEBES HACER
  1. Crea la función curar. Recibe paciente, con tipo en línea
     { nombre: string; vida: number; vidaMax: number }, y cantidad (number).
     Devuelve number.
  2. Dentro de curar:
     a) si cantidad es 0 o menor, devuelve 0 sin cambiar nada;
     b) guarda en const anterior: number la vida actual, paciente.vida;
     c) suma cantidad a paciente.vida;
     d) si paciente.vida quedó mayor que paciente.vidaMax, déjala en paciente.vidaMax;
     e) devuelve paciente.vida - anterior.
  3. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const p1 = { nombre: 'Lia', vida: 40, vidaMax: 100 };
  console.log(curar(p1, 30));    // 30
  console.log(p1.vida);          // 70
  console.log(curar(p1, 50));    // 30
  console.log(p1.vida);          // 100
  console.log(curar(p1, 10));    // 0
  console.log(curar(p1, -5));    // 0
  console.log(p1.vida);          // 100
  const p2 = { nombre: 'Noa', vida: 5, vidaMax: 20 };
  console.log(p2.vida);          // 5

ESTO DEBE FALLAR
  // curar(p1);                                              → falta cantidad.
  // curar({ nombre: 'Max', vida: 1 }, 5);                   → falta vidaMax.
  // p1 = { nombre: 'Lia', vida: 1, vidaMax: 2 };            → p1 es const: no se reasigna.

EXPLICA
  p1 es const. ¿Por qué curar puede cambiar p1.vida pero la línea p1 = { ... } falla?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 10 — Bodega con reposición
/*
SITUACIÓN
  Una bodega controla el stock de un producto. Registra salidas, avisa cuándo hay
  que reponer y deja una nota con la última salida; la nota no existe hasta que
  haya una salida.

QUÉ DEBES HACER
  1. Declara con const la constante bodega. Escribe su tipo en línea:
     { producto: string; stock: number; minimo: number; historial: string[];
       ultimaNota?: string;
       registrarSalida: (cantidad: number) => boolean;
       necesitaReposicion: () => boolean;
       resumen: () => string }.
  2. Asígnale un objeto con producto 'Tornillos', stock 50, minimo 20, historial
     vacío, los tres métodos en forma corta y sin ultimaNota (omítela).
  3. El método registrarSalida(cantidad) devuelve boolean:
     a) si cantidad es 0 o menor, devuelve false;
     b) si cantidad es mayor que this.stock, devuelve false;
     c) si no, resta cantidad a this.stock, agrega 'salida {cantidad}' al final de
        this.historial, guarda en this.ultimaNota el texto 'salida de {cantidad}'
        y devuelve true.
  4. El método necesitaReposicion() devuelve true si this.stock es menor o igual que
     this.minimo; si no, false.
  5. El método resumen() devuelve string:
     a) empieza con '{producto}: {stock}';
     b) agrega ' (reponer)' si this.necesitaReposicion() es true, o ' (ok)' si es false;
     c) si this.ultimaNota existe, agrega al final ' - {ultimaNota}'.
  6. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  console.log(bodega.resumen());              // 'Tornillos: 50 (ok)'
  console.log(bodega.registrarSalida(30));    // true
  console.log(bodega.resumen());              // 'Tornillos: 20 (reponer) - salida de 30'
  console.log(bodega.necesitaReposicion());   // true
  console.log(bodega.registrarSalida(21));    // false
  console.log(bodega.registrarSalida(0));     // false
  console.log(bodega.registrarSalida(20));    // true
  console.log(bodega.stock);                  // 0
  console.log(bodega.historial);              // [ 'salida 30', 'salida 20' ]
  console.log(bodega.resumen());              // 'Tornillos: 0 (reponer) - salida de 20'

ESTO DEBE FALLAR
  // bodega.ultimaNota = 5;            → ultimaNota es string.
  // bodega.registrarSalida();         → falta cantidad.
  // bodega.historial = 'ninguna';     → historial es string[].

EXPLICA
  ¿Por qué resumen() debe comprobar que ultimaNota existe antes de usarla?
*/
(() => {
    // Tu solución.
})();

// TRAMO 3 — TIPOS PERSONALIZADOS CON type: EJERCICIOS 11 AL 20

// !EJERCICIO 11 — Cotizar con presupuesto
/*
SITUACIÓN
  Una tienda guarda su catálogo como una lista de productos. Dado un presupuesto,
  una función elige, en el orden del catálogo, los productos que todavía caben.

QUÉ DEBES HACER
  1. Crea el tipo Producto con type: { nombre: string; precio: number;
     descripcion?: string }. Supón precio >= 0.
  2. Crea la función cotizar. Recibe lista (Producto[]) y presupuesto (number).
     Devuelve string[].
  3. Dentro de cotizar:
     a) declara let gastado: number = 0 y const elegidos: string[] = [];
     b) recorre lista con forEach, en orden;
     c) en cada producto, si gastado + precio es menor o igual que presupuesto:
        suma precio a gastado y agrega a elegidos el nombre del producto; si el
        producto tiene descripcion, el texto es '{nombre} ({descripcion})';
     d) si no cabe, sigue con el siguiente producto: uno que no cabe no detiene
        la búsqueda;
     e) devuelve elegidos.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const tienda: Producto[] = [
      { nombre: 'Teclado', precio: 50, descripcion: 'mecánico' },
      { nombre: 'Mouse', precio: 30 },
      { nombre: 'Monitor', precio: 120 },
      { nombre: 'Cable', precio: 10 },
  ];
  console.log(cotizar(tienda, 100));   // [ 'Teclado (mecánico)', 'Mouse', 'Cable' ]
  console.log(cotizar(tienda, 89));    // [ 'Teclado (mecánico)', 'Mouse' ]
  console.log(cotizar(tienda, 210));   // [ 'Teclado (mecánico)', 'Mouse', 'Monitor', 'Cable' ]
  console.log(cotizar(tienda, 9));     // []
  console.log(cotizar([], 100));       // []

ESTO DEBE FALLAR
  // const a: Producto = { nombre: 'Silla' };                  → falta precio.
  // const b: Producto = { nombre: 'Silla', precio: '40' };    → precio debe ser number.
  // const c = Producto;                                       → Producto es un tipo, no un valor.

EXPLICA
  ¿Por qué Mouse puede omitir descripcion pero no nombre ni precio?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 12 — Libros con género
/*
SITUACIÓN
  Una biblioteca crea libros con una función que reutiliza siempre el mismo tipo.
  Cada libro sabe resumirse a sí mismo y puede tener cero, uno o varios géneros.

QUÉ DEBES HACER
  1. Crea el tipo Libro con type: { titulo: string; paginas: number;
     generos: string[]; resumen: () => string }.
  2. Crea la función crearLibro. Recibe titulo (string), paginas (number) y
     ...generos (parámetro rest de string[]). Devuelve Libro.
  3. crearLibro devuelve un objeto con titulo, paginas, generos y un método
     resumen() en forma corta. resumen() no recibe nada y devuelve string:
     a) si this.generos tiene 0 elementos, devuelve '{titulo} ({paginas} págs.): sin género';
     b) si no, devuelve '{titulo} ({paginas} págs.): {géneros unidos con ", "}'
        (usa join(', ')).
  4. Crea la función librosDelGenero. Recibe libros (Libro[]) y genero (string).
     Devuelve string[]:
     a) declara const titulos: string[] = [];
     b) recorre libros con forEach y, dentro, recorre libro.generos con otro forEach;
     c) si un género es igual (===) a genero, agrega el título del libro a titulos
        (supón que un libro no repite géneros);
     d) devuelve titulos.
  5. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const l1 = crearLibro('Dune', 600, 'ficción', 'aventura');
  const l2 = crearLibro('Clean Code', 450, 'técnico');
  const l3 = crearLibro('Notas', 90);
  console.log(l1.resumen());                                   // 'Dune (600 págs.): ficción, aventura'
  console.log(l3.resumen());                                   // 'Notas (90 págs.): sin género'
  console.log(librosDelGenero([l1, l2, l3], 'aventura'));      // [ 'Dune' ]
  console.log(librosDelGenero([l1, l2, l3], 'técnico'));       // [ 'Clean Code' ]
  console.log(librosDelGenero([l1, l2, l3], 'poesía'));        // []
  l2.generos.push('ficción');
  console.log(librosDelGenero([l1, l2, l3], 'ficción'));       // [ 'Dune', 'Clean Code' ]
  console.log(l1.generos.length);                              // 2

ESTO DEBE FALLAR
  // l1.resumen = 'texto';                                          → resumen es una función.
  // const l4: Libro = { titulo: 'X', paginas: 10, generos: [] };   → falta resumen.
  // crearLibro('X');                                               → falta paginas.

EXPLICA
  ¿Por qué l1 y l2 no comparten la lista de géneros aunque ambos salgan de crearLibro?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 13 — Nómina con bonificación
/*
SITUACIÓN
  Una empresa calcula cuánto paga en total. Solo cobran los empleados activos y
  recibe un 10% extra quien domina varias habilidades sin ganar ya demasiado.

QUÉ DEBES HACER
  1. Crea el tipo Empleado con type: { nombre: string; salario: number;
     activo: boolean; habilidades: string[] }.
  2. Crea la función nomina. Recibe empleados (Empleado[]) y devuelve number.
  3. Dentro de nomina:
     a) declara let total: number = 0 y recorre empleados con forEach;
     b) si el empleado no está activo, no suma nada;
     c) si está activo, calcula su pago: empieza en salario; si habilidades tiene 3 o
        más elementos Y salario es menor que 5000, suma salario / 10 al pago;
     d) suma el pago a total;
     e) devuelve total.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const equipo: Empleado[] = [
      { nombre: 'Ana', salario: 3000, activo: true, habilidades: ['a', 'b', 'c'] },
      { nombre: 'Luis', salario: 4000, activo: true, habilidades: ['a', 'b'] },
      { nombre: 'Eva', salario: 4000, activo: false, habilidades: ['a', 'b', 'c', 'd'] },
      { nombre: 'Max', salario: 5000, activo: true, habilidades: ['a', 'b', 'c'] },
      { nombre: 'Zoe', salario: 4990, activo: true, habilidades: ['a', 'b', 'c', 'd'] },
  ];
  console.log(nomina(equipo));   // 17789
  console.log(nomina([]));       // 0

ESTO DEBE FALLAR
  // const e: Empleado = { nombre: 'X', salario: 1, activo: 'si', habilidades: [] };  → activo debe ser boolean.
  // equipo[0] = 'Ana';                                                               → el array es Empleado[].
  // nomina([{ nombre: 'X' }]);                                                       → faltan propiedades de Empleado.

EXPLICA
  ¿Qué parte de la condición del paso 3c deja a Luis y a Max sin bonificación aunque
  estén activos, mientras que Ana la recibe?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 14 — Transferencia entre cuentas
/*
SITUACIÓN
  Dos cuentas del mismo tipo intercambian dinero. Si la cuenta de origen no puede
  retirar, la de destino no debe recibir nada.

QUÉ DEBES HACER
  1. Crea el tipo Cuenta con type: { titular: string; saldo: number;
     depositar: (monto: number) => boolean; retirar: (monto: number) => boolean }.
  2. Crea la función crearCuenta. Recibe titular (string) y saldo (number; supón
     >= 0). Devuelve Cuenta: un objeto con esos dos datos y dos métodos en forma corta:
     a) depositar(monto): si monto es 0 o menor, devuelve false; si no, suma monto
        a this.saldo y devuelve true;
     b) retirar(monto): si monto es 0 o menor, o mayor que this.saldo, devuelve
        false; si no, resta monto a this.saldo y devuelve true.
  3. Crea la función transferir. Recibe origen (Cuenta), destino (Cuenta) y monto
     (number). Devuelve string. Evalúa en este orden:
     a) si origen y destino son el mismo objeto (origen === destino), devuelve 'misma cuenta';
     b) llama a origen.retirar(monto); si devuelve false, devuelve 'rechazada';
     c) llama a destino.depositar(monto) y devuelve 'ok'.
  4. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const ana = crearCuenta('Ana', 100);
  const beto = crearCuenta('Beto', 20);
  console.log(transferir(ana, beto, 30));    // 'ok'
  console.log(ana.saldo);                    // 70
  console.log(beto.saldo);                   // 50
  console.log(transferir(ana, beto, 71));    // 'rechazada'
  console.log(ana.saldo);                    // 70
  console.log(beto.saldo);                   // 50
  console.log(transferir(ana, beto, 70));    // 'ok'
  console.log(ana.saldo);                    // 0
  console.log(beto.saldo);                   // 120
  console.log(transferir(beto, beto, 10));   // 'misma cuenta'
  console.log(beto.saldo);                   // 120
  console.log(transferir(beto, ana, 0));     // 'rechazada'

ESTO DEBE FALLAR
  // ana.saldo = '10';                    → saldo es number.
  // transferir(ana, 'Beto', 5);          → destino debe ser una Cuenta.
  // const c: Cuenta = { titular: 'C', saldo: 0 };   → faltan depositar y retirar.

EXPLICA
  En la transferencia rechazada de 71, ¿por qué beto sigue con 50?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 15 — Tareas urgentes
/*
SITUACIÓN
  Una agenda marca como urgentes las tareas vencidas, las que vencen pronto y las
  de prioridad alta. El vencimiento y la nota son opcionales.

QUÉ DEBES HACER
  1. Crea el tipo Tarea con type: { titulo: string; prioridad: number;
     nota?: string; vencimiento?: number }. El vencimiento es un número de día
     (el día 0 existe y es válido).
  2. Crea la función urgentes. Recibe tareas (Tarea[]) y hoy (number). Devuelve string[].
  3. Dentro de urgentes declara const lineas: string[] = [] y recorre tareas con
     forEach. En cada tarea declara let texto: string = '' y evalúa en este orden:
     a) si tiene vencimiento y vencimiento es menor que hoy: texto = '{titulo} (vencida)';
     b) si no, si tiene vencimiento y vencimiento - hoy es 2 o menos:
        texto = '{titulo} (vence pronto)';
     c) si no, si prioridad es 4 o más: texto = '{titulo} (prioridad {prioridad})';
     d) si texto sigue vacío, la tarea no es urgente: termina esta vuelta con return;
     e) si no, y la tarea tiene nota, agrega al final ' - {nota}';
     f) agrega texto a lineas.
     «Tiene vencimiento» significa que no es undefined; el día 0 sí cuenta.
  4. Devuelve lineas.
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  const tareas: Tarea[] = [
      { titulo: 'Informe', prioridad: 2, vencimiento: 9 },
      { titulo: 'Correo', prioridad: 1, vencimiento: 12, nota: 'responder' },
      { titulo: 'Compras', prioridad: 1, vencimiento: 13 },
      { titulo: 'Plan', prioridad: 5 },
      { titulo: 'Idea', prioridad: 3, nota: 'luego' },
      { titulo: 'Archivo', prioridad: 1, vencimiento: 0 },
      { titulo: 'Deploy', prioridad: 4, vencimiento: 20, nota: 'viernes' },
  ];
  console.log(urgentes(tareas, 10).join(' | '));   // 'Informe (vencida) | Correo (vence pronto) - responder | Plan (prioridad 5) | Archivo (vencida) | Deploy (prioridad 4) - viernes'
  console.log(urgentes(tareas, 10).length);        // 5
  console.log(urgentes(tareas, 11).length);        // 6
  console.log(urgentes([], 10).length);            // 0

ESTO DEBE FALLAR
  // const a: Tarea = { titulo: 'X', prioridad: 1, vencimiento: '12' };   → vencimiento debe ser number.
  // urgentes(tareas);                                                    → falta hoy.
  // const b: Tarea = { prioridad: 2 };                                   → falta titulo.

EXPLICA
  ¿Qué tarea quedaría mal clasificada si «tiene vencimiento» se comprobara con
  if (tarea.vencimiento) en lugar de compararlo con undefined?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 16 — Rectángulos y puntos
/*
SITUACIÓN
  Un editor de planos guarda rectángulos cuya esquina inferior izquierda es un
  punto. Calcula áreas, qué puntos quedan dentro y qué rectángulos se superponen.

QUÉ DEBES HACER
  1. Crea el tipo Punto con type: { x: number; y: number }.
  2. Crea el tipo Rectangulo con type: { nombre: string; esquina: Punto;
     ancho: number; alto: number }. Supón ancho y alto > 0.
  3. Crea la función area(r: Rectangulo): number: ancho por alto.
  4. Crea la función contiene(r: Rectangulo, p: Punto): boolean. Devuelve true si
     p.x está entre r.esquina.x y r.esquina.x + r.ancho Y p.y está entre r.esquina.y
     y r.esquina.y + r.alto. Los bordes cuentan como dentro (límites inclusivos).
  5. Crea la función puntosDentro(r: Rectangulo, puntos: Punto[]): number. Recorre
     puntos con forEach, cuenta los que cumplen contiene(r, punto) y devuelve la cuenta.
  6. Crea la función solapan(a: Rectangulo, b: Rectangulo): boolean. Devuelve true
     solo si se superponen en x Y en y. Hay superposición en un eje cuando el
     inicio de cada uno es menor que el fin del otro (límites exclusivos: si solo
     se tocan en el borde, no se superponen).
  7. Ejecuta COMPRUEBA.

COMPRUEBA
  const r1: Rectangulo = { nombre: 'A', esquina: { x: 0, y: 0 }, ancho: 4, alto: 3 };
  const r2: Rectangulo = { nombre: 'B', esquina: { x: 4, y: 0 }, ancho: 2, alto: 2 };
  const r3: Rectangulo = { nombre: 'C', esquina: { x: 3, y: 2 }, ancho: 3, alto: 3 };
  console.log(area(r1));                                                          // 12
  console.log(contiene(r1, { x: 4, y: 3 }));                                      // true
  console.log(contiene(r1, { x: 5, y: 1 }));                                      // false
  console.log(contiene(r1, { x: -1, y: 0 }));                                     // false
  console.log(puntosDentro(r1, [{ x: 0, y: 0 }, { x: 2, y: 2 }, { x: 5, y: 5 }, { x: 4, y: 4 }]));   // 2
  console.log(solapan(r1, r2));                                                   // false
  console.log(solapan(r1, r3));                                                   // true
  console.log(solapan(r2, r3));                                                   // false

ESTO DEBE FALLAR
  // const p: Punto = { x: 1 };                                                    → falta y.
  // r1.esquina = { x: 1, y: 'a' };                                                → y debe ser number.
  // const q: Rectangulo = { nombre: 'Z', esquina: 5, ancho: 1, alto: 1 };         → esquina debe ser un Punto.

EXPLICA
  r1 y r2 comparten el borde x = 4. ¿Por qué solapan(r1, r2) da false pero
  contiene(r1, { x: 4, y: 3 }) da true?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 17 — Reservas sin choques
/*
SITUACIÓN
  Una sala de reuniones acepta reservas por horas. Una reserva nueva se rechaza si
  su horario no es válido o si choca con otra de la misma sala.

QUÉ DEBES HACER
  1. Crea el tipo Reserva con type: { sala: string; inicio: number; fin: number }.
  2. Crea la función puedeReservar. Recibe existentes (Reserva[]) y nueva (Reserva).
     Devuelve boolean. No modifica nada:
     a) si nueva.inicio es mayor o igual que nueva.fin, devuelve false;
     b) recorre existentes con forEach; una reserva choca si es de la misma sala Y
        nueva.inicio < existente.fin Y existente.inicio < nueva.fin (si solo se
        tocan en una hora, no chocan);
     c) devuelve false si alguna choca; true si ninguna.
  3. Crea la función reservar. Recibe existentes y nueva (mismos tipos). Devuelve
     boolean: si puedeReservar lo permite, agrega nueva al final de existentes y
     devuelve true; si no, no cambia nada y devuelve false.
  4. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const agenda: Reserva[] = [];
  console.log(reservar(agenda, { sala: 'A', inicio: 9, fin: 11 }));    // true
  console.log(reservar(agenda, { sala: 'A', inicio: 10, fin: 12 }));   // false
  console.log(reservar(agenda, { sala: 'A', inicio: 11, fin: 12 }));   // true
  console.log(reservar(agenda, { sala: 'B', inicio: 9, fin: 12 }));    // true
  console.log(reservar(agenda, { sala: 'A', inicio: 8, fin: 9 }));     // true
  console.log(reservar(agenda, { sala: 'A', inicio: 7, fin: 13 }));    // false
  console.log(reservar(agenda, { sala: 'B', inicio: 12, fin: 12 }));   // false
  console.log(agenda.length);                                          // 4

ESTO DEBE FALLAR
  // reservar(agenda, { sala: 'A', inicio: 9 });          → falta fin.
  // const r: Reserva = { sala: 7, inicio: 1, fin: 2 };   → sala debe ser string.
  // agenda.push('A 9-11');                               → agenda es Reserva[].

EXPLICA
  ¿Por qué se rechaza la reserva de 7 a 13 aunque su inicio y su fin no caen dentro
  de ninguna reserva existente?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 18 — Alumno con promedio y estado
/*
SITUACIÓN
  Cada alumno acumula notas de 0 a 100. El objeto calcula su promedio y su estado
  académico a partir de las notas que tiene en ese momento.

QUÉ DEBES HACER
  1. Crea el tipo Alumno con type: { nombre: string; notas: number[];
     registrar: (nota: number) => boolean; promedio: () => number;
     estado: () => string }.
  2. Crea la función crearAlumno. Recibe nombre (string) y devuelve Alumno: un
     objeto con ese nombre, notas vacía y tres métodos en forma corta:
     a) registrar(nota): si nota es menor que 0 o mayor que 100, devuelve false; si
        no, la agrega al final de this.notas y devuelve true;
     b) promedio(): si this.notas está vacía, devuelve 0; si no, devuelve la suma de
        las notas (con forEach y una variable local) dividida entre this.notas.length;
     c) estado(): evalúa en este orden: si no hay notas, 'Sin notas'; si
        this.promedio() es 60 o más, 'Aprobado'; si es 40 o más, 'Recuperación';
        si no, 'Reprobado'.
  3. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const luz = crearAlumno('Luz');
  console.log(luz.estado());       // 'Sin notas'
  console.log(luz.promedio());     // 0
  console.log(luz.registrar(101)); // false
  console.log(luz.registrar(-1));  // false
  console.log(luz.registrar(70));  // true
  console.log(luz.registrar(50));  // true
  console.log(luz.promedio());     // 60
  console.log(luz.estado());       // 'Aprobado'
  console.log(luz.registrar(0));   // true
  console.log(luz.estado());       // 'Recuperación'
  console.log(luz.registrar(0));   // true
  console.log(luz.estado());       // 'Reprobado'
  console.log(luz.notas.length);   // 4
  const beto = crearAlumno('Beto');
  console.log(beto.notas.length);  // 0

ESTO DEBE FALLAR
  // luz.registrar('70');                              → nota debe ser number.
  // luz.estado = 'Aprobado';                          → estado es una función.
  // const x: Alumno = { nombre: 'X', notas: [] };     → faltan los tres métodos.

EXPLICA
  En COMPRUEBA, el promedio 60 es 'Aprobado' y el 40 es 'Recuperación'. ¿Qué
  operador de comparación hace que cada límite pertenezca al estado superior?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 19 — Ajustes con valores por defecto
/*
SITUACIÓN
  Un dispositivo recibe ajustes parciales y completa con valores por defecto los
  que faltan. Un valor 0 o false sí es un ajuste válido y no debe reemplazarse.

QUÉ DEBES HACER
  1. Crea el tipo Ajustes con type: { volumen?: number; brillo?: number;
     modoNoche?: boolean }.
  2. Crea la función resumenAjustes. Recibe a (Ajustes) y devuelve string.
  3. Dentro de resumenAjustes:
     a) declara let volumen: number = 50, let brillo: number = 70 y
        let noche: boolean = false;
     b) si a.volumen no es undefined, guarda su valor en volumen; haz lo mismo
        con brillo y con modoNoche (en noche);
     c) si noche es true y brillo es mayor que 30, deja brillo en 30;
     d) devuelve 'vol {volumen}, brillo {brillo}, noche {sí|no}': escribe 'sí' si
        noche es true y 'no' si es false (decídelo con if).
     No uses || para elegir el valor: con 0 daría el valor por defecto.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(resumenAjustes({}));                                 // 'vol 50, brillo 70, noche no'
  console.log(resumenAjustes({ volumen: 0 }));                     // 'vol 0, brillo 70, noche no'
  console.log(resumenAjustes({ brillo: 0, modoNoche: true }));     // 'vol 50, brillo 0, noche sí'
  console.log(resumenAjustes({ modoNoche: true }));                // 'vol 50, brillo 30, noche sí'
  console.log(resumenAjustes({ modoNoche: false, brillo: 100 }));  // 'vol 50, brillo 100, noche no'
  console.log(resumenAjustes({ modoNoche: true, brillo: 30 }));    // 'vol 50, brillo 30, noche sí'

ESTO DEBE FALLAR
  // resumenAjustes({ volumen: '10' });          → volumen debe ser number.
  // resumenAjustes({ sonido: 5 });              → sonido no existe en Ajustes.
  // const a: Ajustes = { modoNoche: 1 };        → modoNoche debe ser boolean.

EXPLICA
  ¿Qué resultado equivocado daría a.volumen || 50 cuando el volumen es 0?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 20 — Pedido con envío
/*
SITUACIÓN
  Una tienda en línea arma pedidos con líneas de producto. El pedido calcula el
  subtotal, el envío (gratis desde cierto monto) y el total, y describe sus líneas.

QUÉ DEBES HACER
  1. Crea el tipo Linea con type: { producto: string; precio: number;
     cantidad: number; nota?: string }.
  2. Crea el tipo Pedido con type: { cliente: string; lineas: Linea[];
     agregar: (producto: string, precio: number, cantidad: number, nota?: string) => boolean;
     subtotal: () => number; envio: () => number; total: () => number;
     detalle: () => string[] }.
  3. Crea la función crearPedido. Recibe cliente (string) y devuelve Pedido: un
     objeto con cliente, lineas vacía y cinco métodos en forma corta:
     a) agregar(producto, precio, cantidad, nota?): si precio o cantidad son 0 o
        menores, devuelve false. Si no, crea const linea: Linea con producto,
        precio y cantidad (sin nota); solo si nota no es undefined, asígnala
        después con linea.nota = nota; agrega linea a this.lineas y devuelve true;
     b) subtotal(): suma precio * cantidad de cada línea (forEach y variable local);
     c) envio(): 0 si this.subtotal() es 0 (pedido vacío); 0 si this.subtotal() es
        200 o más; 30 en cualquier otro caso;
     d) total(): this.subtotal() + this.envio();
     e) detalle(): devuelve un string[] con una entrada por línea,
        '{cantidad} x {producto} = {precio * cantidad}'; si la línea tiene nota,
        agrega al final ' ({nota})'.
  4. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const p = crearPedido('Ana');
  console.log(p.envio());                                  // 0
  console.log(p.agregar('Lápiz', 10, 3));                  // true
  console.log(p.envio());                                  // 30
  console.log(p.total());                                  // 60
  console.log(p.agregar('Cuaderno', 45, 0));               // false
  console.log(p.agregar('Mochila', 150, 1, 'azul'));       // true
  console.log(p.total());                                  // 210
  console.log(p.agregar('Goma', 5, 4));                    // true
  console.log(p.subtotal());                               // 200
  console.log(p.envio());                                  // 0
  console.log(p.detalle().join(' | '));                    // '3 x Lápiz = 30 | 1 x Mochila = 150 (azul) | 4 x Goma = 20'
  console.log(p.lineas.length);                            // 3
  console.log(crearPedido('Beto').subtotal());             // 0

ESTO DEBE FALLAR
  // p.agregar('X', 1);                                          → faltan cantidad (y los demás argumentos obligatorios).
  // p.envio = 30;                                               → envio es una función.
  // const l: Linea = { producto: 'X', precio: 1 };              → falta cantidad.

EXPLICA
  ¿Por qué la línea se crea sin nota y la nota se asigna solo si existe, en lugar de
  escribir { producto, precio, cantidad, nota } directamente?
*/
(() => {
    // Tu solución.
})();

// TRAMO 4 — MÚLTIPLES TIPOS CON |: EJERCICIOS 21 AL 30

// !EJERCICIO 21 — Puntaje con texto o número
/*
SITUACIÓN
  Un concurso recibe puntajes de dos formas: un número de puntos o el nombre de una
  medalla. Una función convierte cualquiera de las dos a puntos válidos.

QUÉ DEBES HACER
  1. Crea la función puntos. Recibe valor (string | number) y devuelve number.
  2. Dentro de puntos, usa typeof para saber qué recibiste:
     a) si valor es number: si es menor que 0 devuelve 0; si es mayor que 100
        devuelve 100; si no, devuelve valor;
     b) si valor es string: pásalo a mayúsculas con toLocaleUpperCase() y compáralo:
        'ORO' devuelve 100; 'PLATA' devuelve 60; 'BRONCE' devuelve 30; cualquier
        otro texto (también el vacío) devuelve 0.
  3. Crea la función total. Recibe entradas ((string | number)[]) y devuelve
     number: recorre entradas con forEach, suma puntos(entrada) de cada una y
     devuelve la suma.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(puntos(-5));                                // 0
  console.log(puntos(0));                                 // 0
  console.log(puntos(100));                               // 100
  console.log(puntos(101));                               // 100
  console.log(puntos(77));                                // 77
  console.log(puntos('Oro'));                             // 100
  console.log(puntos('PLATA'));                           // 60
  console.log(puntos('bronce'));                          // 30
  console.log(puntos('madera'));                          // 0
  console.log(puntos(''));                                // 0
  console.log(total([50, 'oro', -3, 'x', 'Plata']));      // 210
  console.log(total([]));                                 // 0

ESTO DEBE FALLAR
  // puntos(true);                  → boolean no pertenece a string | number.
  // total([50, true]);             → true no pertenece a (string | number).
  // puntos();                      → falta valor.

EXPLICA
  Dentro de puntos, ¿por qué no puedes escribir valor.toLocaleUpperCase() antes de
  comprobar con typeof?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 22 — Teléfonos que pueden faltar
/*
SITUACIÓN
  En una agenda algunos contactos no tienen teléfono: su valor es null a propósito.
  Buscar un contacto puede devolver un teléfono o null, y quien llama debe tratar
  los dos casos.

QUÉ DEBES HACER
  1. Crea el tipo Contacto con type: { nombre: string; telefono: string | null }.
  2. Crea la función telefonoDe. Recibe agenda (Contacto[]) y nombre (string).
     Devuelve string | null:
     a) declara let resultado: string | null = null y let encontrado: boolean = false;
     b) recorre agenda con forEach; en el primer contacto cuyo nombre sea igual
        (===) a nombre, marca encontrado como true y guarda su telefono en
        resultado (aunque sea null); ignora los contactos siguientes con ese nombre;
     c) devuelve resultado.
  3. Crea la función llamar. Recibe agenda (Contacto[]) y nombre (string).
     Devuelve string:
     a) guarda en const tel el resultado de telefonoDe(agenda, nombre);
     b) si tel es null, devuelve 'No se puede llamar a {nombre}';
     c) si no, devuelve 'Llamando a {nombre}: {tel}'.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const agenda: Contacto[] = [
      { nombre: 'Ana', telefono: '555-1' },
      { nombre: 'Luis', telefono: null },
      { nombre: 'Ana', telefono: '555-9' },
  ];
  console.log(telefonoDe(agenda, 'Ana'));    // '555-1'
  console.log(telefonoDe(agenda, 'Luis'));   // null
  console.log(telefonoDe(agenda, 'Eva'));    // null
  console.log(llamar(agenda, 'Ana'));        // 'Llamando a Ana: 555-1'
  console.log(llamar(agenda, 'Luis'));       // 'No se puede llamar a Luis'
  console.log(llamar(agenda, 'Eva'));        // 'No se puede llamar a Eva'
  console.log(llamar([], 'Ana'));            // 'No se puede llamar a Ana'

ESTO DEBE FALLAR
  // const a: Contacto = { nombre: 'X' };                          → telefono es obligatorio (puede valer null, pero debe escribirse).
  // const b: Contacto = { nombre: 'X', telefono: undefined };     → undefined no es string | null.
  // const t: string = telefonoDe(agenda, 'Ana');                  → string | null no cabe en string.

EXPLICA
  ¿Qué dos situaciones distintas hacen que telefonoDe devuelva null, y por qué a
  llamar le basta con comprobar null para tratar las dos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 23 — Documentos con revisión pendiente
/*
SITUACIÓN
  Cada documento está aprobado (true), rechazado (false) o sin revisar (null).
  Un veredicto, una vez dado, no se puede cambiar.

QUÉ DEBES HACER
  1. Crea el tipo Documento con type: { titulo: string; aprobado: boolean | null }.
  2. Crea la función balance. Recibe docs (Documento[]) y devuelve string.
     Recorre docs con forEach y cuenta con tres variables locales los que tienen
     aprobado true, los que tienen false y los que tienen null. Devuelve
     'aprobados {a}, rechazados {r}, pendientes {p}'.
  3. Crea la función revisar. Recibe doc (Documento) y aprobar (boolean). Devuelve
     boolean: si doc.aprobado es null, guarda aprobar en doc.aprobado y devuelve
     true; si ya tiene veredicto (true o false), no cambia nada y devuelve false.
  4. Crea la función listoParaPublicar. Recibe docs (Documento[]) y devuelve
     boolean: true solo si docs tiene al menos un documento y todos tienen aprobado
     igual a true. Una lista vacía devuelve false.
  5. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const dA: Documento = { titulo: 'A', aprobado: true };
  const dB: Documento = { titulo: 'B', aprobado: null };
  const dC: Documento = { titulo: 'C', aprobado: false };
  const dD: Documento = { titulo: 'D', aprobado: null };
  const docs: Documento[] = [dA, dB, dC, dD];
  console.log(balance(docs));                    // 'aprobados 1, rechazados 1, pendientes 2'
  console.log(listoParaPublicar(docs));          // false
  console.log(revisar(dA, false));               // false
  console.log(dA.aprobado);                      // true
  console.log(revisar(dB, true));                // true
  console.log(revisar(dD, false));               // true
  console.log(balance(docs));                    // 'aprobados 2, rechazados 2, pendientes 0'
  console.log(listoParaPublicar([dA, dB]));      // true
  console.log(listoParaPublicar([dA, dC]));      // false
  console.log(listoParaPublicar([]));            // false

ESTO DEBE FALLAR
  // const a: Documento = { titulo: 'X', aprobado: 'si' };           → aprobado debe ser boolean | null.
  // const b: Documento = { titulo: 'X', aprobado: undefined };      → undefined no es boolean | null.
  // revisar(dA);                                                    → falta aprobar.

EXPLICA
  ¿Por qué un documento rechazado (false) no cuenta como pendiente aunque false y
  null sean «valores vacíos» para un if?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 24 — Presentar un nombre o un héroe
/*
SITUACIÓN
  Una lista de participantes mezcla simples nombres con fichas completas de héroes.
  Una función presenta a cualquiera de los dos y debe distinguir qué recibió.

QUÉ DEBES HACER
  1. Crea el tipo Heroe con type: { nombre: string; edad?: number; poderes: string[] }.
  2. Declara con let la variable participante, de tipo string | Heroe, con el valor
     'sombra'.
  3. Crea la función presentar. Recibe h (string | Heroe) y devuelve string:
     a) si typeof h es 'object', es un Heroe. El texto es '{nombre} ({cantidad})',
        donde {cantidad} es 'sin poderes' si h.poderes tiene 0 elementos, '1 poder'
        si tiene 1 y '{n} poderes' si tiene más. Luego, si h.edad existe, agrega al
        final ', {edad} años' (la edad 0 también cuenta);
     b) si no, es un string: devuélvelo en mayúsculas (toLocaleUpperCase()).
  4. Crea la función listarPresentaciones. Recibe lista ((string | Heroe)[]) y
     devuelve string[]: presentar de cada elemento, en el mismo orden (forEach y push).
  5. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  console.log(presentar(participante));      // 'SOMBRA'
  participante = { nombre: 'Ana', poderes: ['vuelo'] };
  console.log(presentar(participante));      // 'Ana (1 poder)'
  console.log(participante.poderes.length);  // 1
  console.log(presentar('flash'));           // 'FLASH'
  console.log(presentar({ nombre: 'Barry', edad: 24, poderes: ['velocidad', 'tiempo'] }));   // 'Barry (2 poderes), 24 años'
  console.log(presentar({ nombre: 'Bruce', poderes: [] }));                                  // 'Bruce (sin poderes)'
  console.log(presentar({ nombre: 'Diana', edad: 0, poderes: [] }));                         // 'Diana (sin poderes), 0 años'
  console.log(listarPresentaciones(['a', { nombre: 'B', poderes: ['x'] }]).join(' | '));     // 'A | B (1 poder)'

ESTO DEBE FALLAR
  // presentar(5);                      → number no pertenece a string | Heroe.
  // presentar({ nombre: 'X' });        → falta poderes.
  // participante = 7;                  → number no pertenece a string | Heroe.

EXPLICA
  Después de participante = { nombre: 'Ana', ... }, ¿por qué TypeScript te deja leer
  participante.poderes, si la variable fue declarada como string | Heroe?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 25 — Lista mixta de datos
/*
SITUACIÓN
  Un formulario devuelve una lista donde cada dato puede ser un número o un texto.
  Una función separa los números, que suma, de los textos, que conserva, y cuenta
  los datos inservibles.

QUÉ DEBES HACER
  1. Crea la función analizar. Recibe lista ((number | string)[]) y devuelve un objeto
     con este tipo en línea: { suma: number; textos: string[]; ignorados: number }.
  2. Dentro de analizar declara let suma: number = 0, const textos: string[] = []
     y let ignorados: number = 0. Recorre lista con forEach y, con typeof, decide
     por cada dato:
     a) number: si es menor que 0, cuenta 1 en ignorados; si no, súmalo a suma
        (el 0 se suma);
     b) string: si tiene 0 caracteres, cuenta 1 en ignorados; si no, agrégalo a
        textos.
  3. Devuelve un objeto con suma, textos e ignorados.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const r = analizar([5, 'a', -2, '', 10, 'b', 0]);
  console.log(r.suma);                      // 15
  console.log(r.textos.join(','));          // 'a,b'
  console.log(r.ignorados);                 // 2
  console.log(analizar([]).suma);           // 0
  console.log(analizar([]).textos.length);  // 0
  console.log(analizar(['x']).ignorados);   // 0

ESTO DEBE FALLAR
  // analizar([true]);          → boolean no pertenece a number | string.
  // analizar([5, null]);       → null no pertenece a number | string.
  // r.suma = 'x';              → suma es number.

EXPLICA
  ¿Qué valor habría salido en ignorados en COMPRUEBA si el 0 se ignorara en lugar
  de sumarse?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 26 — Pagos con referencia mixta
/*
SITUACIÓN
  Los pagos de una tienda traen una referencia que unas veces es un número y otras
  un texto. Hay que formatearlos, totalizar por cliente y detectar referencias
  repetidas.

QUÉ DEBES HACER
  1. Crea el tipo Pago con type: { cliente: string; monto: number;
     referencia: string | number }.
  2. Crea la función formatearPago. Recibe p (Pago) y devuelve string
     '{cliente}: {monto con .toFixed(2)} ({ref})', donde {ref} se decide así:
     a) si la referencia es number: 'SIN-REF' si vale 0; si no, 'REF-{numero}';
     b) si es string: 'SIN-REF' si tiene 0 caracteres; si no, 'REF-' seguido del
        texto en mayúsculas (toLocaleUpperCase()).
  3. Crea la función totalPorCliente. Recibe pagos (Pago[]) y cliente (string).
     Devuelve number: la suma de los montos de los pagos de ese cliente (0 si no
     tiene ninguno).
  4. Crea la función referenciasRepetidas. Recibe pagos (Pago[]) y devuelve number:
     la cantidad de pagos cuya referencia es igual (===) a la de algún pago
     anterior de la lista. Declara const vistas: (string | number)[] = []. Por
     cada pago: recorre vistas con otro forEach para saber si ya estaba; si estaba,
     cuenta 1; después agrega su referencia a vistas. El texto '77' y el número 77
     son referencias distintas; 'ab1' y 'AB1' también (distingue mayúsculas).
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(formatearPago({ cliente: 'Ana', monto: 10, referencia: 'ab1' }));    // 'Ana: 10.00 (REF-AB1)'
  console.log(formatearPago({ cliente: 'Luis', monto: 25.5, referencia: 77 }));    // 'Luis: 25.50 (REF-77)'
  console.log(formatearPago({ cliente: 'Eva', monto: 8, referencia: '' }));        // 'Eva: 8.00 (SIN-REF)'
  console.log(formatearPago({ cliente: 'Eva', monto: 1, referencia: 0 }));         // 'Eva: 1.00 (SIN-REF)'
  const pagos: Pago[] = [
      { cliente: 'Ana', monto: 10, referencia: 'ab1' },
      { cliente: 'Luis', monto: 25.5, referencia: 77 },
      { cliente: 'Ana', monto: 4.25, referencia: 'ab1' },
      { cliente: 'Eva', monto: 8, referencia: '' },
      { cliente: 'Ana', monto: 3, referencia: 77 },
      { cliente: 'Eva', monto: 1, referencia: '77' },
  ];
  console.log(totalPorCliente(pagos, 'Ana'));    // 17.25
  console.log(totalPorCliente(pagos, 'Eva'));    // 9
  console.log(totalPorCliente(pagos, 'Zoe'));    // 0
  console.log(referenciasRepetidas(pagos));      // 2
  console.log(referenciasRepetidas([]));         // 0

ESTO DEBE FALLAR
  // const a: Pago = { cliente: 'X', monto: 1, referencia: true };       → referencia debe ser string | number.
  // const b: Pago = { cliente: 'X', monto: 1 };                         → falta referencia.
  // formatearPago({ cliente: 'X', monto: '1', referencia: 1 });         → monto debe ser number.

EXPLICA
  ¿Por qué en la lista de COMPRUEBA el pago de Eva con referencia '77' no cuenta como
  repetido del pago de Luis con referencia 77?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 27 — Errores como resultado
/*
SITUACIÓN
  Una calculadora no lanza errores: cuando no puede operar, devuelve un texto que
  explica el problema. Quien la usa debe distinguir un número de un mensaje.

QUÉ DEBES HACER
  1. Crea el tipo Operacion con type: { op: string; a: number; b: number }.
  2. Crea la función calcular. Recibe operacion (string), a (number) y b (number).
     Devuelve number | string. Evalúa en este orden:
     a) '+' devuelve a + b; '-' devuelve a - b; '*' devuelve a * b;
     b) '/' con b igual a 0 devuelve 'división entre cero'; '/' con otro b
        devuelve a / b;
     c) cualquier otro texto de operación devuelve 'operación inválida'.
  3. Crea la función resumenCalculos. Recibe resultados ((number | string)[]) y
     devuelve string. Recorre resultados con forEach, con typeof: cuenta los
     number en ok y los suma en total; cuenta los string en errores. Devuelve
     'ok {ok}, errores {errores}, suma {total}'.
  4. Crea la función ejecutar. Recibe operaciones (Operacion[]) y devuelve string:
     calcula cada operación con calcular (usa sus propiedades op, a y b), guarda los
     resultados en un array y devuelve resumenCalculos de ese array.
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(calcular('+', 2, 3));    // 5
  console.log(calcular('-', 2, 5));    // -3
  console.log(calcular('*', 0, 9));    // 0
  console.log(calcular('/', 7, 2));    // 3.5
  console.log(calcular('/', 7, 0));    // 'división entre cero'
  console.log(calcular('%', 1, 1));    // 'operación inválida'
  const ops: Operacion[] = [
      { op: '+', a: 1, b: 2 },
      { op: '/', a: 1, b: 0 },
      { op: 'x', a: 1, b: 1 },
      { op: '*', a: 3, b: 4 },
  ];
  console.log(ejecutar(ops));          // 'ok 2, errores 2, suma 15'
  console.log(ejecutar([]));           // 'ok 0, errores 0, suma 0'

ESTO DEBE FALLAR
  // const r: number = calcular('+', 1, 2);       → number | string no cabe en number.
  // const t: string = calcular('/', 1, 0);       → number | string no cabe en string.
  // calcular('+', 1);                            → falta b.

EXPLICA
  ¿Por qué calcular('+', 1, 2) sigue teniendo tipo number | string aunque con esos
  argumentos siempre devuelva un número?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 28 — Préstamo de libros
/*
SITUACIÓN
  Una biblioteca presta libros. Buscar un título puede no encontrarlo (null) y un
  libro prestado recuerda a quién se lo prestó (null cuando está disponible).

QUÉ DEBES HACER
  1. Crea el tipo Libro con type: { titulo: string; disponible: boolean;
     prestadoA: string | null }.
  2. Crea la función buscarLibro. Recibe libros (Libro[]) y titulo (string).
     Devuelve Libro | null: el primer libro cuyo título sea igual (===) a titulo,
     o null si no hay ninguno. Usa una variable local let encontrado: Libro | null = null
     y un forEach que solo la asigne si todavía es null.
  3. Crea la función prestar. Recibe libros (Libro[]), titulo (string) y socio
     (string). Devuelve string. Busca con buscarLibro y evalúa en este orden:
     a) si no hay libro, devuelve 'No existe: {titulo}';
     b) si disponible es false, devuelve '{titulo} ya está prestado a {prestadoA}';
     c) si no, pone disponible en false, guarda socio en prestadoA y devuelve
        '{titulo} prestado a {socio}'.
  4. Crea la función devolver. Recibe libros (Libro[]) y titulo (string). Devuelve
     boolean: false si el libro no existe o ya está disponible; si no, pone
     disponible en true, prestadoA en null y devuelve true.
  5. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const l1: Libro = { titulo: 'Dune', disponible: true, prestadoA: null };
  const l2: Libro = { titulo: 'Emma', disponible: true, prestadoA: null };
  const biblioteca: Libro[] = [l1, l2];
  console.log(buscarLibro(biblioteca, 'Emma')?.titulo);    // 'Emma'
  console.log(buscarLibro(biblioteca, 'Zzz'));             // null
  console.log(prestar(biblioteca, 'Dune', 'Ana'));         // 'Dune prestado a Ana'
  console.log(prestar(biblioteca, 'Dune', 'Luis'));        // 'Dune ya está prestado a Ana'
  console.log(prestar(biblioteca, 'Zzz', 'Luis'));         // 'No existe: Zzz'
  console.log(devolver(biblioteca, 'Dune'));               // true
  console.log(devolver(biblioteca, 'Dune'));               // false
  console.log(devolver(biblioteca, 'Zzz'));                // false
  console.log(l1.prestadoA);                               // null
  console.log(prestar(biblioteca, 'Dune', 'Luis'));        // 'Dune prestado a Luis'
  console.log(l1.disponible);                              // false

ESTO DEBE FALLAR
  // const a: Libro = { titulo: 'X', disponible: true };       → falta prestadoA.
  // l1.prestadoA = 5;                                         → prestadoA es string | null.
  // buscarLibro(biblioteca, 'Dune').titulo;                   → el resultado puede ser null.

EXPLICA
  ¿Qué comprueba buscarLibro(biblioteca, 'Emma')?.titulo y por qué con 'Zzz' no
  lanza un error?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 29 — Temporizador
/*
SITUACIÓN
  Un temporizador está detenido o en marcha. Su propiedad restante guarda los
  segundos que faltan, o null cuando no está en marcha.

QUÉ DEBES HACER
  1. Crea el tipo Temporizador con type: { restante: number | null;
     iniciar: (segundos: number) => boolean; tick: () => string;
     estado: () => string }.
  2. Declara con const la constante temporizador de tipo Temporizador, con restante
     null y tres métodos en forma corta:
     a) iniciar(segundos): si segundos es 0 o menor, o si this.restante no es null
        (ya está en marcha), devuelve false; si no, guarda segundos en
        this.restante y devuelve true;
     b) tick(): si this.restante es null, devuelve 'detenido'. Si no, resta 1 a
        this.restante; si queda en 0, lo pone en null y devuelve '¡fin!'; si no,
        devuelve 'quedan {restante}';
     c) estado(): si this.restante es null, devuelve 'detenido'; si no,
        'en marcha: {restante}'.
  3. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  console.log(temporizador.estado());     // 'detenido'
  console.log(temporizador.tick());       // 'detenido'
  console.log(temporizador.iniciar(0));   // false
  console.log(temporizador.iniciar(2));   // true
  console.log(temporizador.iniciar(5));   // false
  console.log(temporizador.estado());     // 'en marcha: 2'
  console.log(temporizador.tick());       // 'quedan 1'
  console.log(temporizador.tick());       // '¡fin!'
  console.log(temporizador.estado());     // 'detenido'
  console.log(temporizador.restante);     // null
  console.log(temporizador.iniciar(1));   // true
  console.log(temporizador.tick());       // '¡fin!'

ESTO DEBE FALLAR
  // temporizador.restante = 'diez';       → restante es number | null.
  // temporizador.iniciar();               → falta segundos.
  // temporizador.restante - 1;            → restante puede ser null: no se resta sin comprobar.

EXPLICA
  ¿Por qué tick() puede restar 1 a this.restante solo después de comprobar que no
  es null?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 30 — Validar un formulario
/*
SITUACIÓN
  Un formulario guarda campos cuyo valor puede ser texto, número o null (vacío). Una
  función valida todos los campos y deja anotado el error de cada uno.

QUÉ DEBES HACER
  1. Crea el tipo Campo con type: { nombre: string; valor: string | number | null;
     obligatorio: boolean; error?: string }.
  2. Crea la función validar. Recibe campos (Campo[]) y devuelve number: la
     cantidad de campos con error. Declara let errores: number = 0 y recorre
     campos con forEach. Por cada campo evalúa en este orden y se queda con la
     primera regla que se cumpla:
     a) si valor es null, o es un string de 0 caracteres: si obligatorio es true,
        asigna campo.error = 'requerido' y cuenta 1 en errores; si no, el campo
        está bien; en ambos casos termina esta vuelta con return;
     b) si valor es string con más de 10 caracteres: error 'texto largo';
     c) si valor es number menor que 0: error 'no negativo';
     d) en cualquier otro caso, el campo está bien (el número 0 es válido).
     En b) y c) también cuenta 1 en errores.
  3. Crea la función mensajes. Recibe campos (Campo[]) y devuelve string[]: una
     entrada '{nombre}: {error}' por cada campo que tenga error, en orden.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const campos: Campo[] = [
      { nombre: 'usuario', valor: 'ana', obligatorio: true },
      { nombre: 'clave', valor: '', obligatorio: true },
      { nombre: 'bio', valor: 'una biografía larguísima', obligatorio: false },
      { nombre: 'edad', valor: -4, obligatorio: true },
      { nombre: 'apodo', valor: null, obligatorio: false },
      { nombre: 'pais', valor: null, obligatorio: true },
      { nombre: 'cp', valor: 0, obligatorio: true },
      { nombre: 'nombre', valor: '1234567890', obligatorio: true },
  ];
  console.log(validar(campos));                     // 4
  console.log(mensajes(campos).join(' | '));        // 'clave: requerido | bio: texto largo | edad: no negativo | pais: requerido'
  console.log(mensajes([]).length);                 // 0

ESTO DEBE FALLAR
  // const a: Campo = { nombre: 'x', valor: true, obligatorio: false };       → valor debe ser string | number | null.
  // const b: Campo = { nombre: 'x', obligatorio: false };                    → falta valor.
  // const c: Campo = { nombre: 'x', valor: 1, obligatorio: false, error: 5 };   → error debe ser string.

EXPLICA
  ¿Por qué el campo cp con valor 0 y el campo nombre con exactamente 10 caracteres no
  generan error?
*/
(() => {
    // Tu solución.
})();

// TRAMO 5 — OBJETOS CON FUNCIONES, enum, TUPLAS Y UNIONES: EJERCICIOS 31 AL 40

// !EJERCICIO 31 — Fábrica de jugadores
/*
SITUACIÓN
  Un juego crea jugadores con una función que completa los datos que faltan con
  valores por defecto. Si los datos no son válidos, no crea ningún jugador.

QUÉ DEBES HACER
  1. Crea el tipo Jugador con type: { nombre: string; vida: number; equipo: string }.
  2. Crea la función crearJugador. Recibe nombre (string), vida (number, con valor
     por defecto 100) y equipo (string, con valor por defecto 'Sin equipo').
     Devuelve Jugador | null.
  3. Dentro de crearJugador evalúa en este orden:
     a) si nombre tiene 0 caracteres, devuelve null;
     b) si vida es 0 o menor, devuelve null;
     c) si vida es mayor que 200, úsala como 200;
     d) devuelve un objeto Jugador con nombre, la vida resultante y equipo.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(crearJugador('Kira'));                   // { nombre: 'Kira', vida: 100, equipo: 'Sin equipo' }
  console.log(crearJugador('Zed', undefined, 'Rojo')); // { nombre: 'Zed', vida: 100, equipo: 'Rojo' }
  console.log(crearJugador('Max', 250));               // { nombre: 'Max', vida: 200, equipo: 'Sin equipo' }
  console.log(crearJugador('Lia', 200, 'Azul'));       // { nombre: 'Lia', vida: 200, equipo: 'Azul' }
  console.log(crearJugador('', 50));                   // null
  console.log(crearJugador('Neo', 0));                 // null

ESTO DEBE FALLAR
  // crearJugador();                                  → falta nombre.
  // crearJugador('A', '50');                         → vida debe ser number.
  // const j: Jugador = crearJugador('A');            → el resultado puede ser null.

EXPLICA
  En la segunda línea de COMPRUEBA, ¿para qué se escribe undefined en la posición de
  vida?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 32 — Ventas con cantidad variable de montos
/*
SITUACIÓN
  Un vendedor registra cuántas ventas quiera en una sola llamada. Solo cuentan los
  montos positivos. Después se busca la mejor venta del grupo, si existe alguna.

QUÉ DEBES HACER
  1. Crea el tipo Venta con type: { vendedor: string; montos: number[]; total: number }.
  2. Crea la función registrarVenta. Recibe vendedor (string) y ...montos (rest de
     number[]). Devuelve Venta:
     a) declara const validos: number[] = [] y let total: number = 0;
     b) recorre montos con forEach: los mayores que 0 se agregan a validos y se
        suman a total; los demás se ignoran;
     c) devuelve un objeto Venta con vendedor, validos como montos y total.
  3. Crea la función mejorVenta. Recibe ...ventas (rest de Venta[]) y devuelve
     Venta | null: la de mayor total; si dos empatan, gana la que viene primero;
     si no se recibe ninguna, devuelve null. Usa let mejor: Venta | null = null y
     un forEach.
  4. Crea la función resumenVenta. Recibe v (Venta | null) y devuelve string:
     si v es null, 'Sin ventas'; si no, '{vendedor}: {cantidad de montos} ventas, total {total}'.
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  const v1 = registrarVenta('Ana', 10, -5, 20, 0);
  const v2 = registrarVenta('Luis');
  const v3 = registrarVenta('Eva', 15, 15);
  console.log(v1.montos);                              // [ 10, 20 ]
  console.log(v2.total);                               // 0
  console.log(v2.montos.length);                       // 0
  console.log(mejorVenta(v1, v2, v3)?.vendedor);       // 'Ana'
  console.log(mejorVenta(v2, v3)?.vendedor);           // 'Eva'
  console.log(mejorVenta());                           // null
  console.log(resumenVenta(mejorVenta(v1, v3)));       // 'Ana: 2 ventas, total 30'
  console.log(resumenVenta(mejorVenta()));             // 'Sin ventas'
  console.log(resumenVenta(v2));                       // 'Luis: 0 ventas, total 0'

ESTO DEBE FALLAR
  // registrarVenta();                    → falta vendedor.
  // registrarVenta('Ana', '10');         → los montos deben ser number.
  // resumenVenta(undefined);             → resumenVenta acepta Venta | null, no undefined.

EXPLICA
  En mejorVenta(v1, v2, v3), v1 y v3 tienen el mismo total. ¿Qué parte de la
  comparación hace que gane v1?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 33 — Reglas para una clave
/*
SITUACIÓN
  Una página valida claves con una lista de reglas. Cada regla es un objeto con un
  nombre y una función que decide si la clave la cumple.

QUÉ DEBES HACER
  1. Crea el tipo Regla con type: { nombre: string; cumple: (clave: string) => boolean }.
  2. Declara const reglas: Regla[] con tres reglas, en este orden. Cada cumple es
     una función de flecha que recibe clave (string):
     a) nombre 'longitud': cumple si clave.length es 8 o más;
     b) nombre 'termina en dígito': cumple si el último carácter,
        clave.charAt(clave.length - 1), es mayor o igual que '0' y menor o igual
        que '9' (compara los textos con >= y <=);
     c) nombre 'primer y último distintos': cumple si clave.charAt(0) es distinto
        (!==) de clave.charAt(clave.length - 1).
  3. Crea la función evaluarClave. Recibe clave (string) y lista (Regla[]).
     Devuelve string[]: los nombres de las reglas que la clave NO cumple, en el
     orden de la lista (forEach y push).
  4. Crea la función esValida. Recibe clave (string) y lista (Regla[]). Devuelve
     boolean: true si evaluarClave no devuelve ningún nombre.
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(evaluarClave('abcdefg1', reglas));     // []
  console.log(evaluarClave('abc', reglas));          // [ 'longitud', 'termina en dígito' ]
  console.log(evaluarClave('1abcdefg1', reglas));    // [ 'primer y último distintos' ]
  console.log(evaluarClave('', reglas));             // [ 'longitud', 'termina en dígito', 'primer y último distintos' ]
  console.log(evaluarClave('abc', []));              // []
  console.log(esValida('abcdefg1', reglas));         // true
  console.log(esValida('abc', reglas));              // false

ESTO DEBE FALLAR
  // const a: Regla = { nombre: 'x', cumple: (n: number) => n > 1 };    → cumple debe recibir un string.
  // const b: Regla = { nombre: 'x', cumple: true };                    → cumple debe ser una función.
  // evaluarClave('abc');                                               → falta lista.

EXPLICA
  ¿Qué reglas incumple la clave vacía '' y por qué incumple la tercera?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 34 — Lecturas con criterio como argumento
/*
SITUACIÓN
  Un registro de sensor guarda lecturas. Sus métodos reciben como argumento la
  función que decide qué lecturas cuentan, de modo que el mismo registro sirve para
  distintos criterios.

QUÉ DEBES HACER
  1. Crea el tipo Criterio con type, como una firma de función:
     (valor: number) => boolean.
  2. Crea el tipo Registro con type: { sensor: string; lecturas: number[];
     contar: (criterio: Criterio) => number;
     sumar: (criterio: Criterio) => number;
     reporte: (esAlerta: Criterio) => string }.
  3. Crea la función crearRegistro. Recibe sensor (string) y ...lecturas (rest de
     number[]). Devuelve Registro: un objeto con sensor, lecturas y tres métodos
     en forma corta:
     a) contar(criterio): cuántas lecturas cumplen criterio (forEach);
     b) sumar(criterio): la suma de las lecturas que cumplen criterio;
     c) reporte(esAlerta): si this.contar(esAlerta) es 0, devuelve
        '{sensor}: sin alertas'; si no, '{sensor}: {n} alertas de {total}', donde
        {n} es esa cuenta y {total} es this.lecturas.length.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const r = crearRegistro('T1', 20, 35, 41, 18, 40);
  const caliente: Criterio = (valor: number) => valor >= 40;
  console.log(r.contar(caliente));                   // 2
  console.log(r.sumar(caliente));                    // 81
  console.log(r.contar((v: number) => v % 2 === 0)); // 3
  console.log(r.contar((v: number) => v < 0));       // 0
  console.log(r.reporte(caliente));                  // 'T1: 2 alertas de 5'
  console.log(r.reporte((v: number) => v > 100));    // 'T1: sin alertas'
  console.log(crearRegistro('T2').reporte(caliente));// 'T2: sin alertas'
  console.log(crearRegistro('T2').sumar(caliente));  // 0

ESTO DEBE FALLAR
  // r.contar();                                       → falta criterio.
  // r.contar(40);                                     → criterio debe ser una función.
  // r.contar((v: string) => v === 'a');               → la función debe recibir un number.

EXPLICA
  ¿Qué ventaja tiene que contar reciba el criterio en lugar de tener la condición
  escrita dentro del método?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 35 — Incidentes por nivel
/*
SITUACIÓN
  Un sistema de soporte clasifica incidentes en tres niveles de gravedad. Cuenta
  cuántos hay de cada nivel, encuentra el más grave y permite escalar un incidente.

QUÉ DEBES HACER
  1. Crea el enum Nivel con tres miembros, en este orden y sin valores explícitos:
     Bajo, Medio, Alto (valen 0, 1 y 2).
  2. Crea el tipo Incidente con type: { id: number; nivel: Nivel; descripcion: string }.
  3. Crea la función contarPorNivel. Recibe lista (Incidente[]) y devuelve un objeto
     con tipo en línea { bajo: number; medio: number; alto: number }: recorre
     lista con forEach y cuenta cuántos hay de cada nivel.
  4. Crea la función masGrave. Recibe lista (Incidente[]) y devuelve Nivel | null:
     el nivel más alto presente (compara con > como números); null si la lista
     está vacía. Usa let mayor: Nivel | null = null. Ojo: Nivel.Bajo vale 0, y un
     if lo trata como falso: no uses if (mayor) ni mayor || null para saber si
     hay un valor; compara mayor con null.
  5. Crea la función escalar. Recibe i (Incidente) y devuelve boolean: si su nivel
     es Bajo, lo cambia a Medio y devuelve true; si es Medio, lo cambia a Alto y
     devuelve true; si ya es Alto, no cambia nada y devuelve false. Decídelo con
     if / else if (no sumes 1 al nivel).
  6. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const i1: Incidente = { id: 1, nivel: Nivel.Medio, descripcion: 'lento' };
  const i2: Incidente = { id: 2, nivel: Nivel.Bajo, descripcion: 'typo' };
  const i3: Incidente = { id: 3, nivel: Nivel.Medio, descripcion: 'caída parcial' };
  const lista: Incidente[] = [i1, i2, i3];
  console.log(contarPorNivel(lista));              // { bajo: 1, medio: 2, alto: 0 }
  console.log(masGrave(lista) === Nivel.Medio);    // true
  console.log(masGrave([]));                       // null
  console.log(masGrave([{ id: 9, nivel: Nivel.Bajo, descripcion: 'x' }]) === Nivel.Bajo);   // true
  console.log(escalar(i2));                        // true
  console.log(i2.nivel === Nivel.Medio);           // true
  console.log(escalar(i2));                        // true
  console.log(i2.nivel === Nivel.Alto);            // true
  console.log(escalar(i2));                        // false
  console.log(contarPorNivel(lista));              // { bajo: 0, medio: 2, alto: 1 }
  console.log(masGrave(lista) === Nivel.Alto);     // true

ESTO DEBE FALLAR
  // const x: Incidente = { id: 1, nivel: 'Alto', descripcion: 'x' };    → nivel debe ser un miembro de Nivel.
  // const y = Nivel.Critico;                                            → Nivel no tiene el miembro Critico.
  // escalar(5);                                                         → escalar recibe un Incidente.

EXPLICA
  ¿Qué devolvería masGrave para una lista con un único incidente de nivel Bajo si
  terminara con return mayor || null?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 36 — Ruta con paradas
/*
SITUACIÓN
  Una ruta guarda sus paradas como parejas [x, y] en una cuadrícula. No admite la
  misma parada dos veces seguidas y calcula su recorrido total contando solo
  movimientos horizontales y verticales.

QUÉ DEBES HACER
  1. Crea el tipo Parada con type, como una tupla: [number, number] (posición 0 = x,
     posición 1 = y).
  2. Crea el tipo Ruta con type: { nombre: string; paradas: Parada[];
     agregar: (x: number, y: number) => boolean; distancia: () => number }.
  3. Crea la función diferencia(a: number, b: number): number: la distancia entre a
     y b sin signo (el resultado nunca es negativo). Decídelo con if.
  4. Crea la función crearRuta. Recibe nombre (string) y devuelve Ruta: un objeto
     con nombre, paradas vacía y dos métodos en forma corta:
     a) agregar(x, y): obtén la última parada con
        this.paradas[this.paradas.length - 1] (si la lista está vacía no hay
        última: esa posición es undefined); si existe y sus dos coordenadas son
        iguales a x e y, devuelve false; si no, agrega [x, y] al final y devuelve true;
     b) distancia(): declara let total: number = 0 y let anterior: Parada | null = null;
        recorre this.paradas con forEach: si anterior no es null, suma a total
        diferencia en x más diferencia en y entre anterior y la parada actual; en
        cada vuelta guarda la parada actual en anterior; devuelve total.
  5. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const ruta = crearRuta('Norte');
  console.log(ruta.distancia());        // 0
  console.log(ruta.agregar(0, 0));      // true
  console.log(ruta.agregar(0, 0));      // false
  console.log(ruta.agregar(0, 2));      // true
  console.log(ruta.agregar(3, 4));      // true
  console.log(ruta.agregar(1, 4));      // true
  console.log(ruta.agregar(1, 4));      // false
  console.log(ruta.agregar(0, 0));      // true
  console.log(ruta.distancia());        // 14
  console.log(ruta.paradas.length);     // 5
  console.log(diferencia(3, 8));        // 5
  console.log(diferencia(8, 3));        // 5
  console.log(diferencia(2, 2));        // 0

ESTO DEBE FALLAR
  // ruta.paradas.push([1, 2, 3]);         → una Parada tiene exactamente dos números.
  // ruta.paradas.push(['a', 1]);          → la primera posición debe ser number.
  // ruta.agregar(1);                      → falta y.

EXPLICA
  ¿Por qué la ruta acepta (0, 0) al final de la secuencia de COMPRUEBA, si esa
  parada ya existía, mientras que rechaza (0, 0) justo después de la primera?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 37 — Bus de mensajes
/*
SITUACIÓN
  Un bus de mensajes reparte cada mensaje a quienes se suscribieron. Una suscripción
  puede filtrar por un carácter inicial; sin filtro, recibe todo.

QUÉ DEBES HACER
  1. Crea el tipo Oyente con type, como firma de función: (mensaje: string) => void.
  2. Crea el tipo Suscripcion con type: { oyente: Oyente; prefijo?: string }.
  3. Crea el tipo Bus con type: { suscripciones: Suscripcion[];
     suscribir: (oyente: Oyente, prefijo?: string) => number;
     emitir: (mensaje: string) => number }.
  4. Crea la función crearBus. No recibe nada y devuelve Bus: un objeto con
     suscripciones vacía y dos métodos en forma corta:
     a) suscribir(oyente, prefijo?): crea const s: Suscripcion con solo oyente;
        si prefijo no es undefined, asígnalo después con s.prefijo = prefijo;
        agrega s a this.suscripciones y devuelve la cantidad total de
        suscripciones;
     b) emitir(mensaje): recorre this.suscripciones con forEach. Una suscripción
        recibe el mensaje si no tiene prefijo, o si mensaje.charAt(0) es igual
        (===) a su prefijo (un mensaje vacío no coincide con ningún prefijo).
        Llama al oyente con el mensaje y cuenta 1. Devuelve cuántos oyentes se
        llamaron.
  5. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const recibidos: string[] = [];
  const bus = crearBus();
  console.log(bus.suscribir((m: string) => { recibidos.push('A:' + m); }));         // 1
  console.log(bus.suscribir((m: string) => { recibidos.push('B:' + m); }, '!'));    // 2
  console.log(bus.emitir('hola'));        // 1
  console.log(bus.emitir('!alerta'));     // 2
  console.log(bus.emitir(''));            // 1
  console.log(recibidos.join(','));       // 'A:hola,A:!alerta,B:!alerta,A:'
  console.log(bus.suscripciones.length);  // 2
  const otro = crearBus();
  console.log(otro.emitir('x'));          // 0

ESTO DEBE FALLAR
  // bus.suscribir('hola');                      → oyente debe ser una función.
  // bus.emitir();                               → falta mensaje.
  // const s: Suscripcion = { prefijo: '!' };    → falta oyente.

EXPLICA
  ¿Por qué el mensaje vacío solo llega al oyente sin prefijo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 38 — Ciclo de vida de un pedido
/*
SITUACIÓN
  Un pedido avanza por estados fijos y puede cancelarse mientras no termine. Cada
  cambio queda anotado en un historial con nombres legibles.

QUÉ DEBES HACER
  1. Crea el enum Estado con cuatro miembros, en este orden y sin valores
     explícitos: Pendiente, EnCurso, Terminado, Cancelado.
  2. Crea la función nombreEstado(e: Estado): string. Con if / else if devuelve:
     'pendiente', 'en curso', 'terminado' o 'cancelado' según e.
  3. Crea el tipo Pedido con type: { id: number; estado: Estado; historial: string[];
     avanzar: () => boolean; cancelar: () => boolean }.
  4. Crea la función crearPedido. Recibe id (number) y devuelve Pedido: un objeto
     con ese id, estado Pendiente, historial vacío y dos métodos en forma corta.
     Cada cambio aceptado agrega al historial el texto
     '{id}: {nombre del estado anterior} -> {nombre del estado nuevo}' (usa
     nombreEstado):
     a) avanzar(): de Pendiente pasa a EnCurso, de EnCurso pasa a Terminado y
        devuelve true; si está en Terminado o Cancelado, no cambia nada y
        devuelve false;
     b) cancelar(): si está en Pendiente o EnCurso, pasa a Cancelado y devuelve
        true; si no, no cambia nada y devuelve false.
  5. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const p = crearPedido(7);
  console.log(nombreEstado(p.estado));   // 'pendiente'
  console.log(p.avanzar());              // true
  console.log(p.avanzar());              // true
  console.log(p.avanzar());              // false
  console.log(nombreEstado(p.estado));   // 'terminado'
  console.log(p.cancelar());             // false
  console.log(p.historial.join(' ; '));  // '7: pendiente -> en curso ; 7: en curso -> terminado'
  const q = crearPedido(8);
  console.log(q.cancelar());             // true
  console.log(q.avanzar());              // false
  console.log(q.cancelar());             // false
  console.log(q.estado === Estado.Cancelado);   // true
  console.log(q.historial.join(' ; '));  // '8: pendiente -> cancelado'
  const r = crearPedido(9);
  console.log(r.avanzar());              // true
  console.log(r.cancelar());             // true
  console.log(r.historial.join(' ; '));  // '9: pendiente -> en curso ; 9: en curso -> cancelado'

ESTO DEBE FALLAR
  // p.estado = 'terminado';        → estado debe ser un miembro de Estado.
  // p.estado = Estado.Perdido;     → Estado no tiene el miembro Perdido.
  // nombreEstado('pendiente');     → nombreEstado recibe un Estado.

EXPLICA
  ¿Por qué cancelar() en el pedido p, que ya estaba Terminado, no agrega nada al
  historial?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 39 — Estadísticas con datos variables
/*
SITUACIÓN
  Una función calcula mínimo, máximo y promedio de cuantos datos reciba, y otra los
  presenta con los decimales que se pidan. Con cero datos no hay estadísticas.

QUÉ DEBES HACER
  1. Crea el tipo Resumen con type: { titulo: string; n: number; min: number;
     max: number; promedio: number }.
  2. Crea la función estadisticas. Recibe titulo (string) y ...datos (rest de
     number[]). Devuelve Resumen | null:
     a) si datos está vacío (length 0), devuelve null;
     b) declara let min: number = 0, let max: number = 0, let suma: number = 0 y
        let primero: boolean = true;
     c) recorre datos con forEach: en el primer dato, min y max toman su valor;
        en los siguientes, min baja si el dato es menor y max sube si es mayor;
        en todos, el dato se suma a suma. Cambia primero a false después de usar el
        primer dato (los negativos deben funcionar: no empieces min ni max en un
        valor fijo que no sea el primer dato);
     d) devuelve un objeto Resumen con titulo, n igual a datos.length, min, max y
        promedio igual a suma / datos.length.
  3. Crea la función describir. Recibe r (Resumen | null) y decimales (number, con
     valor por defecto 2). Devuelve string: si r es null, 'sin datos'; si no,
     '{titulo}: n={n} min={min} max={max} prom={promedio con toFixed(decimales)}'.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(estadisticas('Notas'));                  // null
  console.log(estadisticas('Notas', 7));               // { titulo: 'Notas', n: 1, min: 7, max: 7, promedio: 7 }
  console.log(estadisticas('N', -5, -3));              // { titulo: 'N', n: 2, min: -5, max: -3, promedio: -4 }
  console.log(estadisticas('T', 4, -2, 9, 1));         // { titulo: 'T', n: 4, min: -2, max: 9, promedio: 3 }
  console.log(describir(estadisticas('T', 4, -2, 9, 1)));      // 'T: n=4 min=-2 max=9 prom=3.00'
  console.log(describir(estadisticas('T', 1, 2, 2), 1));       // 'T: n=3 min=1 max=2 prom=1.7'
  console.log(describir(estadisticas('T', 1, 2, 2), 0));       // 'T: n=3 min=1 max=2 prom=2'
  console.log(describir(estadisticas('X')));                   // 'sin datos'

ESTO DEBE FALLAR
  // estadisticas();                              → falta titulo.
  // estadisticas('T', '1');                      → los datos deben ser number.
  // const r: Resumen = estadisticas('T', 1);     → el resultado puede ser null.

EXPLICA
  ¿Qué resultado equivocado daría estadisticas('N', -5, -3) si max empezara
  siempre en 0?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 40 — Reservas de salas con estado
/*
SITUACIÓN
  Un sistema reserva salas por horas. Cada reserva guarda su horario como una pareja
  [inicio, fin] y un estado. Reservar devuelve la reserva creada o un texto con el
  motivo del rechazo; las reservas canceladas ya no ocupan la sala.

QUÉ DEBES HACER
  1. Crea el enum Estado con tres miembros, en este orden y sin valores explícitos:
     Pendiente, Confirmada, Cancelada.
  2. Crea el tipo Reserva con type: { sala: string; horario: [number, number];
     estado: Estado }.
  3. Crea la función reservar. Recibe reservas (Reserva[]), sala (string), inicio
     (number) y fin (number). Devuelve Reserva | string. Evalúa en este orden:
     a) si inicio es mayor o igual que fin, devuelve 'horario inválido';
     b) recorre reservas con forEach: una reserva ocupa el horario si es de la
        misma sala, su estado no es Cancelada, y inicio < r.horario[1] y
        r.horario[0] < fin (si solo se tocan en una hora, no chocan). Si alguna
        ocupa el horario, devuelve 'sala ocupada';
     c) si no, crea una Reserva con sala, horario [inicio, fin] y estado Pendiente,
        la agrega al final de reservas y la devuelve.
  4. Crea la función confirmar(r: Reserva): boolean: si su estado es Pendiente, lo
     cambia a Confirmada y devuelve true; si no, no cambia nada y devuelve false.
  5. Crea la función cancelar(r: Reserva): boolean: si su estado no es Cancelada, lo
     cambia a Cancelada y devuelve true; si ya estaba Cancelada, devuelve false.
  6. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const reservas: Reserva[] = [];
  const primera = reservar(reservas, 'A', 9, 11);
  console.log(reservar(reservas, 'A', 10, 12));          // 'sala ocupada'
  console.log(reservar(reservas, 'A', 12, 12));          // 'horario inválido'
  console.log(typeof reservar(reservas, 'A', 11, 12));   // 'object'
  console.log(typeof reservar(reservas, 'B', 9, 12));    // 'object'
  console.log(reservas.length);                          // 3
  if (typeof primera !== 'string') {
      console.log(confirmar(primera));                   // true
      console.log(confirmar(primera));                   // false
      console.log(cancelar(primera));                    // true
      console.log(cancelar(primera));                    // false
      console.log(confirmar(primera));                   // false
  }
  console.log(typeof reservar(reservas, 'A', 10, 11));   // 'object'
  console.log(reservas.length);                          // 4

ESTO DEBE FALLAR
  // reservar(reservas, 'A', 9);                                                 → falta fin.
  // const x: Reserva = { sala: 'A', horario: [9, 11, 12], estado: Estado.Pendiente };   → horario tiene exactamente dos números.
  // primera.horario;                                                            → primera puede ser un string: hay que comprobar antes.

EXPLICA
  ¿Por qué la última reserva de A de 10 a 11 sí se acepta, si al principio había una
  de 9 a 11?
*/
(() => {
    // Tu solución.
})();

// TRAMO 6 — INTEGRACIÓN: EJERCICIOS 41 AL 50

// !EJERCICIO 41 — Banco con varias cuentas
/*
SITUACIÓN
  Un banco guarda cuentas y permite abrirlas, buscarlas y transferir dinero entre
  ellas. Buscar y abrir pueden no dar resultado (null); transferir explica el motivo
  de cada rechazo con un texto.

QUÉ DEBES HACER
  1. Crea el tipo Cuenta con type: { titular: string; saldo: number;
     depositar: (monto: number) => boolean; retirar: (monto: number) => boolean }.
  2. Crea el tipo Banco con type: { cuentas: Cuenta[];
     abrir: (titular: string, saldoInicial?: number) => Cuenta | null;
     buscar: (titular: string) => Cuenta | null;
     transferir: (de: string, a: string, monto: number) => string;
     total: () => number }.
  3. Crea la función crearCuenta(titular: string, saldo: number): Cuenta, con los
     métodos en forma corta:
     a) depositar(monto): si monto es 0 o menor devuelve false; si no, lo suma a
        this.saldo y devuelve true;
     b) retirar(monto): si monto es 0 o menor, o mayor que this.saldo, devuelve false;
        si no, lo resta de this.saldo y devuelve true.
  4. Crea la función crearBanco. No recibe nada y devuelve Banco: un objeto con
     cuentas vacía y cuatro métodos en forma corta:
     a) buscar(titular): la primera cuenta con ese titular, o null (variable local
        let encontrada: Cuenta | null = null y un forEach);
     b) abrir(titular, saldoInicial): el parámetro saldoInicial tiene valor por
        defecto 0 (escribe saldoInicial: number = 0 en el método). Devuelve null si
        titular tiene 0 caracteres, si saldoInicial es menor que 0 o si ya existe
        una cuenta con ese titular (usa this.buscar). Si no, crea la cuenta con
        crearCuenta, la agrega a this.cuentas y la devuelve;
     c) transferir(de, a, monto): evalúa en este orden y devuelve el texto de la
        primera regla que se cumpla: si no existe la cuenta de, 'origen inexistente';
        si no existe la cuenta a, 'destino inexistente'; si de es igual a a,
        'misma cuenta'; si monto es 0 o menor, 'monto inválido'; si origen.retirar(monto)
        devuelve false, 'saldo insuficiente'. Si ninguna se cumple, deposita monto en
        el destino y devuelve 'ok';
     d) total(): la suma de los saldos de todas las cuentas.
  5. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const banco = crearBanco();
  console.log(banco.abrir('Ana', 100)?.saldo);            // 100
  console.log(banco.abrir('Beto')?.saldo);                // 0
  console.log(banco.abrir('Ana', 5));                     // null
  console.log(banco.abrir('', 5));                        // null
  console.log(banco.abrir('Cris', -1));                   // null
  console.log(banco.cuentas.length);                      // 2
  console.log(banco.transferir('Ana', 'Beto', 40));       // 'ok'
  console.log(banco.transferir('Ana', 'Zed', 1));         // 'destino inexistente'
  console.log(banco.transferir('Zed', 'Ana', 1));         // 'origen inexistente'
  console.log(banco.transferir('Ana', 'Ana', 1));         // 'misma cuenta'
  console.log(banco.transferir('Ana', 'Beto', 0));        // 'monto inválido'
  console.log(banco.transferir('Ana', 'Beto', 61));       // 'saldo insuficiente'
  console.log(banco.transferir('Ana', 'Beto', 60));       // 'ok'
  console.log(banco.buscar('Ana')?.saldo);                // 0
  console.log(banco.buscar('Beto')?.saldo);               // 100
  console.log(banco.buscar('Zed'));                       // null
  console.log(banco.total());                             // 100
  const otro = crearBanco();
  console.log(otro.cuentas.length);                       // 0
  console.log(otro.total());                              // 0

ESTO DEBE FALLAR
  // banco.abrir();                          → falta titular.
  // banco.buscar('Ana').saldo;              → buscar puede devolver null.
  // banco.total = 5;                        → total es una función.

EXPLICA
  En la transferencia de 61, ¿por qué las dos cuentas conservan su saldo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 42 — Almacén con caducidades
/*
SITUACIÓN
  Un almacén de alimentos revisa su inventario cada día. Cada categoría avisa con
  una anticipación distinta antes de caducar, y algunos productos (como la sal) no
  caducan.

QUÉ DEBES HACER
  1. Crea el enum Categoria con tres miembros, en este orden y sin valores
     explícitos: Lacteo, Fruta, Seco.
  2. Crea el tipo Item con type: { nombre: string; categoria: Categoria;
     stock: number; caduca?: number }. caduca es un número de día.
  3. Crea la función umbral(c: Categoria): number: los días de anticipación del
     aviso: 7 para Lacteo, 3 para Fruta, 30 para Seco.
  4. Crea la función revisar. Recibe items (Item[]) y hoy (number). Devuelve
     string[]. Declara const resultado: string[] = [] y recorre items con forEach.
     Por cada item arma un const avisos: string[] = [] y:
     a) si el item tiene caduca y caduca es menor que hoy, agrega 'caducado';
     b) si no, si tiene caduca y caduca - hoy es menor o igual que
        umbral(item.categoria), agrega 'por caducar';
     c) si stock es 5 o menos, agrega 'poco stock' (siempre después de los
        avisos de caducidad);
     d) si avisos no está vacío, agrega a resultado el texto
        '{nombre}: {avisos unidos con ", "}';
     e) al terminar el recorrido, devuelve resultado.
  5. Crea la función stockPorCategoria. Recibe items (Item[]) y devuelve la tupla
     [number, number, number] con los totales de stock de [Lacteo, Fruta, Seco],
     en ese orden. Empieza en [0, 0, 0] y, con if / else if según item.categoria,
     suma el stock a la posición que corresponde (0, 1 o 2).
  6. Ejecuta COMPRUEBA.

COMPRUEBA
  const items: Item[] = [
      { nombre: 'Leche', categoria: Categoria.Lacteo, stock: 20, caduca: 15 },
      { nombre: 'Yogur', categoria: Categoria.Lacteo, stock: 3, caduca: 9 },
      { nombre: 'Manzana', categoria: Categoria.Fruta, stock: 50, caduca: 14 },
      { nombre: 'Pera', categoria: Categoria.Fruta, stock: 6, caduca: 13 },
      { nombre: 'Arroz', categoria: Categoria.Seco, stock: 5 },
      { nombre: 'Lentejas', categoria: Categoria.Seco, stock: 100, caduca: 40 },
      { nombre: 'Sal', categoria: Categoria.Seco, stock: 80 },
  ];
  console.log(revisar(items, 10).join(' | '));   // 'Leche: por caducar | Yogur: caducado, poco stock | Pera: por caducar | Arroz: poco stock | Lentejas: por caducar'
  console.log(revisar([], 10).length);           // 0
  console.log(stockPorCategoria(items));         // [ 23, 56, 185 ]
  console.log(umbral(Categoria.Fruta));          // 3

ESTO DEBE FALLAR
  // const a: Item = { nombre: 'X', categoria: 'Lacteo', stock: 1 };    → categoria debe ser un miembro de Categoria.
  // const t: [number, number, number] = [1, 2];                        → la tupla necesita tres números.
  // umbral('Fruta');                                                   → umbral recibe una Categoria.

EXPLICA
  Los dos casos límite de esta lista son Pera (faltan 3 días con umbral 3) y
  Lentejas (faltan 30 con umbral 30). ¿Qué operador de comparación los incluye?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 43 — Líder de un torneo
/*
SITUACIÓN
  Un torneo de fútbol registra partidos y decide el líder con desempates: puntos,
  luego diferencia de goles, luego goles a favor y, si todo empata, el primero de
  la lista.

QUÉ DEBES HACER
  1. Crea el tipo Equipo con type: { nombre: string; puntos: number;
     golesFavor: number; golesContra: number }.
  2. Crea la función crearEquipo(nombre: string): Equipo, con los tres números en 0.
  3. Crea la función diferencia(e: Equipo): number: golesFavor menos golesContra.
  4. Crea la función registrarPartido. Recibe a (Equipo), b (Equipo), golesA
     (number) y golesB (number). Devuelve boolean:
     a) si a y b son el mismo objeto (a === b), o si golesA o golesB son menores
        que 0, devuelve false sin cambiar nada;
     b) suma los goles: golesA a a.golesFavor y a b.golesContra; golesB a
        b.golesFavor y a a.golesContra;
     c) si golesA > golesB, a suma 3 puntos; si golesB > golesA, b suma 3 puntos;
        si son iguales, cada uno suma 1;
     d) devuelve true.
  5. Crea la función lider. Recibe equipos (Equipo[]) y devuelve Equipo | null.
     Usa let mejor: Equipo | null = null y un forEach. Un equipo reemplaza a
     mejor solo si es mejor estrictamente, comparando en este orden: más puntos;
     si empatan, mayor diferencia(e); si empatan, más golesFavor; si todo
     empata, no lo reemplaza. Con lista vacía devuelve null.
  6. Crea la función resumen(e: Equipo): string: '{nombre}: {puntos} pts, dif {dif}',
     donde {dif} lleva '+' delante si es mayor que 0 (+3), no lleva signo si es 0
     y lleva el '-' propio del número si es negativo (-2).
  7. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const aguilas = crearEquipo('Águilas');
  const leones = crearEquipo('Leones');
  const osos = crearEquipo('Osos');
  console.log(lider([]));                                    // null
  console.log(lider([aguilas, leones, osos])?.nombre);       // 'Águilas'
  console.log(registrarPartido(aguilas, leones, 2, 1));      // true
  console.log(registrarPartido(leones, osos, 1, 1));         // true
  console.log(registrarPartido(osos, aguilas, 3, 0));        // true
  console.log(registrarPartido(osos, osos, 1, 1));           // false
  console.log(registrarPartido(osos, leones, -1, 0));        // false
  console.log(resumen(aguilas));                             // 'Águilas: 3 pts, dif -2'
  console.log(resumen(leones));                              // 'Leones: 1 pts, dif -1'
  console.log(resumen(osos));                                // 'Osos: 4 pts, dif +3'
  console.log(lider([aguilas, leones, osos])?.nombre);       // 'Osos'
  const x = crearEquipo('X');
  const y = crearEquipo('Y');
  registrarPartido(x, y, 1, 1);
  console.log(lider([x, y])?.nombre);                        // 'X'
  console.log(lider([y, x])?.nombre);                        // 'Y'
  const z = crearEquipo('Z');
  const w = crearEquipo('W');
  registrarPartido(z, crearEquipo('t1'), 2, 1);
  registrarPartido(w, crearEquipo('t2'), 5, 1);
  console.log(lider([z, w])?.nombre);                        // 'W'
  const u = crearEquipo('U');
  const v = crearEquipo('V');
  registrarPartido(u, crearEquipo('t3'), 3, 2);
  registrarPartido(v, crearEquipo('t4'), 2, 1);
  console.log(lider([v, u])?.nombre);                        // 'U'

ESTO DEBE FALLAR
  // registrarPartido(aguilas, leones, 1);                  → falta golesB.
  // const e: Equipo = { nombre: 'X', puntos: 0 };          → faltan golesFavor y golesContra.
  // lider(aguilas);                                        → lider recibe una lista.

EXPLICA
  En lider([x, y]) y lider([y, x]), x e y empatan en todo. ¿Por qué el resultado
  depende del orden y qué parte de la regla del paso 5 lo produce?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 44 — Máquina expendedora
/*
SITUACIÓN
  Una máquina acepta monedas, vende productos por código y devuelve el cambio con las
  monedas de mayor valor posibles. Cada intento de compra responde con un texto.

QUÉ DEBES HACER
  1. Crea el tipo Ranura con type: { codigo: string; producto: string;
     precio: number; cantidad: number }.
  2. Crea el tipo Maquina con type: { ranuras: Ranura[]; credito: number;
     insertar: (moneda: number) => boolean; comprar: (codigo: string) => string;
     devolver: () => [number, number][] }.
  3. Crea la función crearMaquina. No recibe nada y devuelve Maquina: un objeto con
     credito 0, estas tres ranuras en este orden y tres métodos en forma corta:
     { codigo: 'A1', producto: 'Galleta', precio: 7, cantidad: 2 },
     { codigo: 'B2', producto: 'Jugo', precio: 12, cantidad: 1 },
     { codigo: 'C3', producto: 'Chicle', precio: 3, cantidad: 0 }.
     a) insertar(moneda): solo acepta monedas de 1, 2, 5 o 10; las suma a
        this.credito y devuelve true; con cualquier otro valor devuelve false;
     b) comprar(codigo): busca la ranura con ese código y evalúa en este orden:
        si no existe, 'código inválido'; si su cantidad es 0, 'agotado'; si
        this.credito es menor que su precio, 'faltan {precio - credito}'. Si
        ninguna se cumple, resta 1 a su cantidad, resta el precio a this.credito
        y devuelve 'entregado: {producto}';
     c) devolver(): devuelve el cambio como lista de parejas [valor, cantidad], en
        orden de mayor a menor valor, usando solo los valores 10, 5, 2 y 1 y
        omitiendo las parejas con cantidad 0. Por cada valor (forEach sobre
        [10, 5, 2, 1]): cantidad = (restante - restante % valor) / valor; resta
        cantidad * valor a restante. Después deja this.credito en 0. Con crédito 0
        devuelve [].
  4. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const m = crearMaquina();
  console.log(m.insertar(3));       // false
  console.log(m.insertar(5));       // true
  console.log(m.insertar(2));       // true
  console.log(m.credito);           // 7
  console.log(m.comprar('Z9'));     // 'código inválido'
  console.log(m.comprar('C3'));     // 'agotado'
  console.log(m.comprar('B2'));     // 'faltan 5'
  console.log(m.comprar('A1'));     // 'entregado: Galleta'
  console.log(m.credito);           // 0
  console.log(m.insertar(10));      // true
  console.log(m.insertar(10));      // true
  console.log(m.insertar(5));       // true
  console.log(m.comprar('B2'));     // 'entregado: Jugo'
  console.log(m.comprar('B2'));     // 'agotado'
  console.log(m.devolver());        // [ [ 10, 1 ], [ 2, 1 ], [ 1, 1 ] ]
  console.log(m.credito);           // 0
  console.log(m.devolver());        // []
  m.insertar(5);
  m.insertar(1);
  console.log(m.devolver());        // [ [ 5, 1 ], [ 1, 1 ] ]
  console.log(crearMaquina().ranuras.length);   // 3

ESTO DEBE FALLAR
  // m.insertar();                                    → falta moneda.
  // m.comprar(5);                                    → codigo debe ser string.
  // const r: Ranura = { codigo: 'X', producto: 'Y', precio: 1 };   → falta cantidad.

EXPLICA
  El cambio de 13 sale como [10, 1], [2, 1], [1, 1]. ¿Por qué no aparece la pareja
  [5, 0]?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 45 — Materia con evaluaciones ponderadas
/*
SITUACIÓN
  Una materia se compone de evaluaciones con un peso (en porcentaje, sumando 100).
  Algunas ya tienen nota y otras siguen pendientes (null). El estado depende de lo
  acumulado y de lo que todavía se puede ganar.

QUÉ DEBES HACER
  1. Crea el tipo Evaluacion con type: { nombre: string; peso: number;
     nota: number | null }. nota va de 0 a 100; null significa pendiente.
  2. Crea el tipo Materia con type: { nombre: string; evaluaciones: Evaluacion[];
     registrar: (nombre: string, nota: number) => boolean;
     acumulado: () => number; pendiente: () => number; estado: () => string }.
  3. Crea la función crearMateria. Recibe nombre (string) y ...evaluaciones (rest
     de Evaluacion[]). Devuelve Materia: un objeto con nombre, evaluaciones y
     cuatro métodos en forma corta:
     a) registrar(nombre, nota): devuelve false si nota es menor que 0 o mayor
        que 100, si no existe una evaluación con ese nombre o si esa evaluación
        ya tiene nota (no se reescribe). Si no, guarda la nota y devuelve true;
     b) acumulado(): la suma de nota * peso / 100 de las evaluaciones que ya
        tienen nota (la nota 0 también cuenta como nota);
     c) pendiente(): la suma de los peso de las evaluaciones cuya nota es null;
     d) estado(): evalúa en este orden: si this.pendiente() es 100, 'Sin notas';
        si this.acumulado() es 60 o más, 'Aprobada'; si this.acumulado() +
        this.pendiente() es 60 o más, 'En juego'; si no, 'Perdida'.
  4. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const mat = crearMateria('Cálculo',
      { nombre: 'P1', peso: 30, nota: null },
      { nombre: 'P2', peso: 30, nota: null },
      { nombre: 'Final', peso: 40, nota: null });
  console.log(mat.estado());               // 'Sin notas'
  console.log(mat.pendiente());            // 100
  console.log(mat.acumulado());            // 0
  console.log(mat.registrar('P1', 50));    // true
  console.log(mat.registrar('P1', 90));    // false
  console.log(mat.registrar('P9', 90));    // false
  console.log(mat.registrar('P2', 101));   // false
  console.log(mat.registrar('P2', -1));    // false
  console.log(mat.acumulado());            // 15
  console.log(mat.pendiente());            // 70
  console.log(mat.estado());               // 'En juego'
  console.log(mat.registrar('P2', 10));    // true
  console.log(mat.acumulado());            // 18
  console.log(mat.estado());               // 'Perdida'
  const logica = crearMateria('Lógica', { nombre: 'A', peso: 60, nota: null }, { nombre: 'B', peso: 40, nota: null });
  console.log(logica.registrar('A', 100)); // true
  console.log(logica.estado());            // 'Aprobada'
  const arte = crearMateria('Arte', { nombre: 'A', peso: 40, nota: null }, { nombre: 'B', peso: 60, nota: null });
  console.log(arte.registrar('A', 0));     // true
  console.log(arte.estado());              // 'En juego'
  console.log(arte.registrar('B', 99));    // true
  console.log(arte.estado());              // 'Perdida'

ESTO DEBE FALLAR
  // mat.registrar('P1');                                   → falta nota.
  // const e: Evaluacion = { nombre: 'X', peso: 10 };       → falta nota (aunque pueda valer null).
  // crearMateria('X', 5);                                  → los demás argumentos deben ser Evaluacion.

EXPLICA
  En la materia Arte, ¿por qué la nota 0 en A no deja el estado en 'Sin notas' y qué
  suma exacta de acumulado y pendiente mantiene 'En juego'?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 46 — Escenas de dispositivos
/*
SITUACIÓN
  Una casa inteligente aplica escenas a sus dispositivos. Cada escena es una lista de
  pasos, y cada paso es un objeto con una descripción y una función que modifica un
  dispositivo y dice si realmente hizo algo.

QUÉ DEBES HACER
  1. Crea el tipo Dispositivo con type: { nombre: string; encendido: boolean;
     brillo?: number }.
  2. Crea el tipo Paso con type: { descripcion: string;
     aplicar: (d: Dispositivo) => boolean }.
  3. Crea el tipo Escena con type: { nombre: string; pasos: Paso[];
     ejecutar: (dispositivos: Dispositivo[]) => string[] }.
  4. Declara const encender: Paso con descripcion 'encender'. Su aplicar(d): si d
     ya está encendido, devuelve false; si no, lo enciende y devuelve true.
  5. Declara const atenuar: Paso con descripcion 'atenuar'. Su aplicar(d): si d
     está apagado, o no tiene brillo, o su brillo es 20 o menos, devuelve false;
     si no, resta 20 a su brillo y devuelve true.
  6. Crea la función crearEscena. Recibe nombre (string) y ...pasos (rest de
     Paso[]). Devuelve Escena: un objeto con nombre, pasos y el método ejecutar
     en forma corta. ejecutar(dispositivos) recorre this.pasos con forEach y, por
     cada paso, recorre dispositivos con otro forEach. Si paso.aplicar(dispositivo)
     devuelve true, agrega a un string[] el texto '{descripcion}: {nombre del
     dispositivo}'. Devuelve ese string[].
  7. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const lampara: Dispositivo = { nombre: 'lámpara', encendido: false, brillo: 50 };
  const radio: Dispositivo = { nombre: 'radio', encendido: false };
  const foco: Dispositivo = { nombre: 'foco', encendido: true, brillo: 20 };
  const dispositivos: Dispositivo[] = [lampara, radio, foco];
  const noche = crearEscena('noche', encender, atenuar);
  console.log(noche.ejecutar(dispositivos).join(' | '));   // 'encender: lámpara | encender: radio | atenuar: lámpara'
  console.log(lampara.brillo);                             // 30
  console.log(radio.encendido);                            // true
  console.log(noche.ejecutar(dispositivos).join(' | '));   // 'atenuar: lámpara'
  console.log(lampara.brillo);                             // 10
  console.log(noche.ejecutar(dispositivos).length);        // 0
  console.log(foco.brillo);                                // 20
  console.log(crearEscena('vacía').ejecutar(dispositivos).length);   // 0

ESTO DEBE FALLAR
  // const p: Paso = { descripcion: 'x', aplicar: (d: string) => true };   → aplicar debe recibir un Dispositivo.
  // noche.ejecutar(lampara);                                              → ejecutar recibe una lista de Dispositivo.
  // lampara.brillo = 'alto';                                              → brillo es number.

EXPLICA
  La radio no tiene brillo. ¿Cómo evita atenuar.aplicar un error al recibirla y qué
  devuelve para ella?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 47 — Parqueadero con tarifas
/*
SITUACIÓN
  Un parqueadero con cupo limitado registra entradas y salidas por minuto. Al salir,
  cobra según el tiempo que estuvo el vehículo. Un vehículo no puede entrar dos veces
  sin haber salido.

QUÉ DEBES HACER
  1. Crea el tipo Ticket con type: { placa: string; entrada: number; salida?: number }.
     Los tiempos son minutos desde el inicio del día.
  2. Crea el tipo Parqueadero con type: { capacidad: number; tickets: Ticket[];
     ocupados: () => number; entrar: (placa: string, minuto: number) => boolean;
     salir: (placa: string, minuto: number) => number | null }.
  3. Crea la función crearParqueadero. Recibe capacidad (number, con valor por
     defecto 3) y devuelve Parqueadero: un objeto con capacidad, tickets vacía y
     tres métodos en forma corta. Un ticket «abierto» es el que no tiene salida:
     a) ocupados(): la cantidad de tickets abiertos;
     b) entrar(placa, minuto): devuelve false si this.ocupados() es igual o mayor
        que this.capacidad, o si ya hay un ticket abierto con esa placa. Si no,
        agrega un Ticket con placa y entrada igual a minuto, y devuelve true;
     c) salir(placa, minuto): busca el ticket abierto con esa placa; devuelve null
        si no existe o si minuto es menor que su entrada (y no cambia nada). Si no,
        guarda minuto en su salida y devuelve la tarifa, calculada con
        d = minuto - entrada: d de 15 o menos cuesta 0; de 16 a 60 cuesta 10; de 61
        a 180 cuesta 25; más de 180 cuesta 40.
  4. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const p = crearParqueadero(2);
  console.log(p.entrar('AAA', 0));      // true
  console.log(p.entrar('AAA', 5));      // false
  console.log(p.entrar('BBB', 10));     // true
  console.log(p.entrar('CCC', 11));     // false
  console.log(p.ocupados());            // 2
  console.log(p.salir('ZZZ', 20));      // null
  console.log(p.salir('AAA', 15));      // 0
  console.log(p.ocupados());            // 1
  console.log(p.entrar('CCC', 20));     // true
  console.log(p.salir('BBB', 70));      // 10
  console.log(p.salir('CCC', 81));      // 25
  console.log(p.entrar('AAA', 100));    // true
  console.log(p.salir('AAA', 99));      // null
  console.log(p.ocupados());            // 1
  console.log(p.salir('AAA', 280));     // 25
  console.log(p.entrar('AAA', 300));    // true
  console.log(p.salir('AAA', 481));     // 40
  console.log(p.tickets.length);        // 5
  console.log(crearParqueadero().capacidad);   // 3

ESTO DEBE FALLAR
  // p.entrar('AAA');                         → falta minuto.
  // const t: Ticket = { placa: 'A' };        → falta entrada.
  // const f: number = p.salir('AAA', 5);     → salir puede devolver null.

EXPLICA
  Las salidas con 15, 60 y 180 minutos de estancia son los límites de cada tarifa.
  ¿A qué tarifa pertenece cada uno y qué operador de comparación lo decide?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 48 — Cola de impresión con prioridades
/*
SITUACIÓN
  Una impresora recibe trabajos con prioridad. Imprime siempre el pendiente de mayor
  prioridad; si dos tienen la misma, el que llegó primero. Los trabajos impresos no
  se borran: se marcan como hechos.

QUÉ DEBES HACER
  1. Crea el enum Prioridad con tres miembros, en este orden y sin valores
     explícitos: Baja, Normal, Alta.
  2. Crea el tipo Trabajo con type: { id: number; paginas: number;
     prioridad: Prioridad; hecho: boolean }.
  3. Crea el tipo Impresora con type: { cola: Trabajo[];
     encolar: (paginas: number, prioridad?: Prioridad) => Trabajo | null;
     siguiente: () => Trabajo | null; pendientes: () => number;
     paginasPendientes: () => number }.
  4. Crea la función crearImpresora. No recibe nada y devuelve Impresora: un objeto
     con cola vacía y cuatro métodos en forma corta:
     a) encolar(paginas, prioridad): el parámetro prioridad tiene valor por
        defecto Prioridad.Normal (escribe prioridad: Prioridad = Prioridad.Normal).
        Si paginas es 0 o menor, devuelve null. Si no, crea un Trabajo con id igual
        a this.cola.length + 1, paginas, prioridad y hecho false; lo agrega a
        this.cola y lo devuelve;
     b) siguiente(): entre los trabajos con hecho false, elige el de mayor
        prioridad (compara con >; con empate, se queda el primero que encontró).
        Lo marca como hecho y lo devuelve. Si no hay ninguno, devuelve null. Usa
        let elegido: Trabajo | null = null y un forEach;
     c) pendientes(): la cantidad de trabajos con hecho false;
     d) paginasPendientes(): la suma de paginas de los trabajos con hecho false.
  5. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const imp = crearImpresora();
  console.log(imp.encolar(10)?.id);                     // 1
  console.log(imp.encolar(5, Prioridad.Alta)?.id);      // 2
  console.log(imp.encolar(0));                          // null
  console.log(imp.encolar(3, Prioridad.Baja)?.id);      // 3
  console.log(imp.encolar(7, Prioridad.Alta)?.id);      // 4
  console.log(imp.encolar(2)?.id);                      // 5
  console.log(imp.pendientes());                        // 5
  console.log(imp.paginasPendientes());                 // 27
  console.log(imp.siguiente()?.id);                     // 2
  console.log(imp.siguiente()?.id);                     // 4
  console.log(imp.siguiente()?.id);                     // 1
  console.log(imp.siguiente()?.id);                     // 5
  console.log(imp.pendientes());                        // 1
  console.log(imp.siguiente()?.id);                     // 3
  console.log(imp.siguiente());                         // null
  console.log(imp.paginasPendientes());                 // 0
  console.log(imp.cola.length);                         // 5

ESTO DEBE FALLAR
  // imp.encolar('10');                                → paginas debe ser number.
  // imp.encolar(5, 'Alta');                           → prioridad debe ser un miembro de Prioridad.
  // imp.siguiente().id;                               → siguiente puede devolver null.

EXPLICA
  El trabajo 3 se encola con Prioridad.Baja, que vale 0. ¿Qué orden de impresión
  saldría si encolar usara prioridad || Prioridad.Normal para el valor por defecto?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 49 — Facturas con descuento por tramos
/*
SITUACIÓN
  Un comercio factura una cantidad variable de líneas. El descuento depende del
  subtotal y el impuesto tiene un valor por defecto que se puede cambiar, incluso a 0.
  Si algo está mal, la función devuelve un texto en lugar de la factura.

QUÉ DEBES HACER
  1. Crea el tipo Linea con type: { producto: string; precio: number;
     cantidad: number; nota?: string }.
  2. Crea el tipo Factura con type: { cliente: string; lineas: Linea[];
     subtotal: number; descuento: number; impuesto: number; total: number }.
  3. Crea la función facturar. Recibe cliente (string), tasaImpuesto (number, con
     valor por defecto 16, en porcentaje) y ...lineas (rest de Linea[]). Devuelve
     Factura | string. Evalúa en este orden:
     a) si no se recibió ninguna línea, devuelve 'factura vacía';
     b) si alguna línea tiene precio o cantidad de 0 o menos, devuelve
        'línea inválida: {producto}' con el producto de la primera línea inválida
        (recorre en orden; aunque forEach no se detenga, no cambies el resultado
        una vez encontrada);
     c) calcula subtotal: suma de precio * cantidad;
     d) calcula descuento: si subtotal es menor que 100, 0; si es menor que 500,
        subtotal * 5 / 100; si no, subtotal * 10 / 100;
     e) calcula impuesto: (subtotal - descuento) * tasaImpuesto / 100;
     f) total es subtotal - descuento + impuesto;
     g) devuelve un objeto Factura con cliente, lineas, subtotal, descuento,
        impuesto y total.
  4. Crea la función formatear. Recibe f (Factura | string) y devuelve string: si
     f es string, lo devuelve tal cual; si no, devuelve
     '{cliente}: subtotal {s}, desc {d}, imp {i}, total {t}' en una sola línea,
     donde {s}, {d}, {i} y {t} son el subtotal, el descuento, el impuesto y el
     total escritos con toFixed(2).
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  const lapiz: Linea = { producto: 'Lápiz', precio: 10, cantidad: 3 };
  const mesa: Linea = { producto: 'Mesa', precio: 100, cantidad: 1 };
  const silla: Linea = { producto: 'Silla', precio: 99, cantidad: 5, nota: 'rojas' };
  const taza: Linea = { producto: 'Taza', precio: 99, cantidad: 1 };
  const goma: Linea = { producto: 'Goma', precio: 5, cantidad: 1 };
  const pluma: Linea = { producto: 'Pluma', precio: 0, cantidad: 2 };
  const sinCantidad: Linea = { producto: 'B', precio: 5, cantidad: 0 };
  console.log(formatear(facturar('Ana')));                         // 'factura vacía'
  console.log(formatear(facturar('Ana', undefined, lapiz)));       // 'Ana: subtotal 30.00, desc 0.00, imp 4.80, total 34.80'
  console.log(formatear(facturar('Beto', 10, mesa)));              // 'Beto: subtotal 100.00, desc 5.00, imp 9.50, total 104.50'
  console.log(formatear(facturar('Cris', 0, silla, goma)));        // 'Cris: subtotal 500.00, desc 50.00, imp 0.00, total 450.00'
  console.log(formatear(facturar('Fer', 0, taza)));                // 'Fer: subtotal 99.00, desc 0.00, imp 0.00, total 99.00'
  console.log(formatear(facturar('Dani', 16, pluma)));             // 'línea inválida: Pluma'
  console.log(formatear(facturar('Eva', 16, goma, sinCantidad, pluma)));   // 'línea inválida: B'
  const f = facturar('Gus', 0, { producto: 'Z', precio: 50, cantidad: 2 });
  if (typeof f !== 'string') {
      console.log(f.lineas.length);   // 1
      console.log(f.total);           // 95
  }

ESTO DEBE FALLAR
  // facturar();                                               → falta cliente.
  // facturar('Ana', '16');                                    → tasaImpuesto debe ser number.
  // facturar('Ana', 16, { producto: 'X', precio: 1 });        → la línea no tiene cantidad.
  // const g: Factura = facturar('Ana');                       → el resultado puede ser un string.

EXPLICA
  facturar('Fer', 0, ...) usa tasaImpuesto 0. ¿Por qué el valor por defecto de 16
  no se aplica en ese caso y sí en facturar('Ana', undefined, ...)?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 50 — Clínica con triaje
/*
SITUACIÓN
  Una clínica clasifica a cada paciente por gravedad según sus signos vitales y su
  edad, y atiende primero a los más graves. Un paciente pendiente no puede ingresar
  dos veces; las alergias son opcionales y sirven para verificar medicamentos.

QUÉ DEBES HACER
  1. Crea el enum Gravedad con tres miembros, en este orden y sin valores
     explícitos: Leve, Moderada, Critica.
  2. Crea el tipo Signos con type, como tupla: [number, number] (posición 0 =
     pulso, posición 1 = temperatura).
  3. Crea el tipo Paciente con type: { nombre: string; edad: number; signos: Signos;
     alergias?: string[]; gravedad: Gravedad; atendido: boolean }.
  4. Crea la función clasificar(signos: Signos, edad: number): Gravedad. Evalúa en
     este orden y devuelve la primera que se cumpla:
     a) Critica si el pulso es menor que 40, o mayor que 140, o la temperatura
        es 40 o más;
     b) Moderada si el pulso es menor que 50, o mayor que 110, o la temperatura
        es 38 o más;
     c) Moderada si la edad es menor que 5 o es 80 o más, Y además la temperatura
        es 37.5 o más;
     d) Leve en cualquier otro caso.
  5. Crea el tipo Clinica con type: { pacientes: Paciente[];
     ingresar: (nombre: string, edad: number, pulso: number, temperatura: number,
     ...alergias: string[]) => Paciente | null;
     siguiente: () => Paciente | null; resumen: () => string }.
  6. Crea la función crearClinica. No recibe nada y devuelve Clinica: un objeto con
     pacientes vacía y tres métodos en forma corta:
     a) ingresar(nombre, edad, pulso, temperatura, ...alergias): devuelve null si
        nombre tiene 0 caracteres, si edad es menor que 0, o si ya hay en
        this.pacientes un paciente con ese nombre que no ha sido atendido. Si no,
        crea el Paciente: signos [pulso, temperatura], gravedad calculada con
        clasificar, atendido false y, solo si se recibió al menos una alergia,
        la propiedad alergias con ese array (asígnala después de crear el
        objeto). Lo agrega a this.pacientes y lo devuelve;
     b) siguiente(): entre los pacientes no atendidos, elige el de mayor gravedad
        (compara con >; con empate, el primero que ingresó). Lo marca como
        atendido y lo devuelve; si no hay ninguno, devuelve null;
     c) resumen(): cuenta los pacientes no atendidos en total y por gravedad y
        devuelve '{n} pendientes: {c} críticos, {m} moderados, {l} leves'.
  7. Crea la función alerta(p: Paciente, medicamento: string): boolean. Devuelve
     false si p tiene alergias y alguna es igual (===) a medicamento; en
     cualquier otro caso, true (sin alergias registradas, todo medicamento es
     seguro).
  8. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  console.log(clasificar([72, 36.5], 30) === Gravedad.Leve);      // true
  console.log(clasificar([39, 36], 30) === Gravedad.Critica);     // true
  console.log(clasificar([141, 36], 30) === Gravedad.Critica);    // true
  console.log(clasificar([72, 40], 30) === Gravedad.Critica);     // true
  console.log(clasificar([40, 36], 30) === Gravedad.Moderada);    // true
  console.log(clasificar([110, 37], 30) === Gravedad.Leve);       // true
  console.log(clasificar([111, 37], 30) === Gravedad.Moderada);   // true
  console.log(clasificar([72, 38], 30) === Gravedad.Moderada);    // true
  console.log(clasificar([72, 37.5], 4) === Gravedad.Moderada);   // true
  console.log(clasificar([72, 37.5], 5) === Gravedad.Leve);       // true
  console.log(clasificar([72, 37.5], 80) === Gravedad.Moderada);  // true
  console.log(clasificar([72, 37.5], 79) === Gravedad.Leve);      // true
  console.log(clasificar([72, 37.4], 80) === Gravedad.Leve);      // true
  const c = crearClinica();
  const ana = c.ingresar('Ana', 30, 72, 36.5);
  const beto = c.ingresar('Beto', 82, 95, 38.2, 'penicilina', 'aspirina');
  console.log(c.ingresar('Cris', 4, 60, 37.6)?.nombre);   // 'Cris'
  console.log(c.ingresar('Dani', 55, 150, 36)?.nombre);   // 'Dani'
  console.log(c.ingresar('Ana', 31, 70, 36));             // null
  console.log(c.ingresar('', 20, 70, 36));                // null
  console.log(c.ingresar('Eva', -1, 70, 36));             // null
  console.log(c.resumen());             // '4 pendientes: 1 críticos, 2 moderados, 1 leves'
  console.log(c.siguiente()?.nombre);   // 'Dani'
  console.log(c.siguiente()?.nombre);   // 'Beto'
  console.log(c.siguiente()?.nombre);   // 'Cris'
  console.log(c.resumen());             // '1 pendientes: 0 críticos, 0 moderados, 1 leves'
  console.log(c.siguiente()?.nombre);   // 'Ana'
  console.log(c.siguiente());           // null
  console.log(c.resumen());             // '0 pendientes: 0 críticos, 0 moderados, 0 leves'
  console.log(c.ingresar('Ana', 31, 70, 36)?.edad);   // 31
  console.log(c.pacientes.length);      // 5
  if (ana !== null && beto !== null) {
      console.log(alerta(ana, 'aspirina'));     // true
      console.log(alerta(beto, 'aspirina'));    // false
      console.log(alerta(beto, 'ibuprofeno'));  // true
  }

ESTO DEBE FALLAR
  // clasificar([72], 30);                                      → una Signos tiene exactamente dos números.
  // clasificar([72, 36], '30');                                → edad debe ser number.
  // const p: Paciente = { nombre: 'X', edad: 1, signos: [1, 2], atendido: false };   → falta gravedad.
  // const g: Gravedad = null;                                  → null no es un miembro de Gravedad.
  // c.siguiente().nombre;                                      → siguiente puede devolver null.

EXPLICA
  Un paciente de 4 años, pulso 150 y temperatura 38 cumple las reglas a), b) y c).
  ¿Qué gravedad le toca y por qué importa el orden en que se evalúan las reglas?
*/
(() => {
    // Tu solución.
})();
