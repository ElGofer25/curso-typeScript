/*
COMPENDIO 01 — ES6 / JS2015
50 ejercicios con dificultad creciente. Los primeros usan un solo tema de la
sección 07; los siguientes combinan cada vez más subsecciones y conocimientos de
las secciones anteriores; los últimos integran todo lo permitido.

SUBSECCIONES EJERCITADAS (07.ES6 JS2015)
  01 Variables let ..... let, const, ámbito de bloque; const impide reasignar
                         pero no impide modificar el contenido de un objeto o array
  02 Desestruc ......... objetos, arrays, saltar posiciones, Rest, en parámetros
  03 For-of ............ recorrer los valores de arrays y strings
  04 For-in ............ recorrer claves; Record<string, T>; Object.hasOwn
  Apunte ............... typeof, Array.isArray y clases básicas (constructor,
                         parámetros public, métodos, this, new e instancias)

Conocimientos previos que se combinan: tipos básicos, arrays, tuplas, enum,
null y undefined (03); funciones con parámetros opcionales, por defecto, Rest y
tipo función (04); objetos, métodos con this, type, propiedades opcionales y
uniones (05); y las opciones strict, noUncheckedIndexedAccess y
exactOptionalPropertyTypes con las que compila el proyecto (06).

PROGRESIÓN
  Ejercicios   Tema principal
  01–06        Variables: let, const, bloques, const con objetos y arrays
  07–13        Desestructuración de objetos: básica, opcionales, Rest, parámetros
  14–19        Desestructuración de arrays y tuplas; objeto con array dentro
  20–25        for-of: arrays, strings, arrays de objetos, enum
  26–31        for-in: claves, Record, Object.hasOwn, índices; for-in con for-of
  32–37        Combinaciones de la sección: for-of con desestructuración,
               typeof, Array.isArray, uniones, Record con uniones
  38–44        Sección 07 con funciones, tuplas, enum, this, opcionales y
               tipo función (secciones 03 a 05)
  45–50        Integración final, con clases básicas y todo lo anterior

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN: te dice qué se está modelando.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta.
  3. Copia las líneas de COMPRUEBA debajo de tu solución, dentro de la misma
     función. Cada línea trae el resultado esperado después de //. Antes de
     ejecutar, predice qué saldrá.
  4. Si hay líneas en ESTO DEBE FALLAR, pruébalas una por una: descomenta,
     comprueba que TypeScript marca error y vuelve a comentarla.
  5. Responde EXPLICA en un comentario bajo tu solución.

VOCABULARIO DE LOS ENUNCIADOS
  «supón» = el dato ya es válido; no lo compruebes.
  «rechaza» = devuelve false (o el valor de rechazo indicado) y no cambia nada.
  {llaves} en un texto = valor que sustituyes; las llaves no se escriben.
  «el estado» = las variables o propiedades que sobreviven entre una llamada y otra.
  Los resultados de COMPRUEBA se escriben como los muestra console.log con
  console.log(valor): los textos con comillas simples, los arrays entre corchetes.

REGLAS COMUNES
  - Cada ejercicio va dentro de su función (() => { ... })(); son independientes
    y pueden repetir nombres.
  - Pon tipos a propiedades, parámetros y retornos. No uses any.
  - Las funciones se escriben como const nombre = (a: tipo): tipo => { ... };
    con el nombre y la firma que indica cada paso.
  - Usa const por defecto y let solo cuando vayas a reasignar. No uses var.
  - Un método o función que consulta no modifica nada. Imprimir no sustituye
    a devolver.
  - El proyecto compila con noUncheckedIndexedAccess: leer un elemento de un
    array con corchetes, o un valor de un Record con una clave, da el tipo del
    valor o undefined. Comprueba undefined antes de operar con él.
  - Ciclos: en los ejercicios 01–19 no hay ciclos; for-of se usa desde el 20 y
    for-in desde el 26. Para repetir, usa solo esos dos.

PROHIBIDO (no se ha visto en el curso hasta esta sección)
  - Métodos de arrays: map, filter, reduce, find, some, every, includes, indexOf,
    sort, slice, splice, pop, shift, concat. Sí se permiten push, join y length.
  - Métodos de string: split, trim, toLowerCase, padStart, repeat. Sí se permiten
    length, charAt, corchetes, toUpperCase y toFixed (en números).
  - Object.keys, Object.values, Object.entries, Math, JSON y el operador ??.
    Sí se permiten Object.hasOwn, typeof, Array.isArray, ?. , || , && y !.
  - Spread (...) en llamadas o literales. Rest solo en parámetros y desestructuración.
  - Desestructuración con renombrado, valores por defecto o anidada.
  - while, for clásico y switch.
  - interface y genéricos propios. Record<string, T> sí se permite con cualquier T.
  - En clases (ejercicios 45–50): nada de private, protected, extends, static,
    readonly, get/set ni abstract. Todas las propiedades son públicas.
  - namespace, import y export.

No hay soluciones incluidas.
*/

// TRAMO 1 — VARIABLES: let, const Y ÁMBITO DE BLOQUE (EJERCICIOS 01 AL 06)

// !EJERCICIO 01 — Saldo de una cuenta
/*
SITUACIÓN
  Una cuenta guarda el nombre de su titular, que nunca cambia, y un saldo que
  sube y baja con cada movimiento.

QUÉ DEBES HACER
  1. Declara const titular: string = 'Marta' y let saldo: number = 100.
  2. Crea const depositar = (monto: number): boolean:
     a) si monto es 0 o menor, devuelve false sin tocar el saldo;
     b) si no, suma monto a saldo y devuelve true.
  3. Crea const retirar = (monto: number): boolean:
     a) si monto es 0 o menor, o es mayor que el saldo, devuelve false sin
        tocar el saldo (retirar exactamente el saldo sí es válido);
     b) si no, resta monto a saldo y devuelve true.
  4. Crea const consultar = (): string que devuelve '{titular}: {saldo}'.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(consultar());   // 'Marta: 100'
  console.log(depositar(50)); // true
  console.log(consultar());   // 'Marta: 150'
  console.log(retirar(200));  // false
  console.log(consultar());   // 'Marta: 150'
  console.log(retirar(150));  // true
  console.log(consultar());   // 'Marta: 0'
  console.log(retirar(0));    // false
  console.log(depositar(-5)); // false
  console.log(depositar(0));  // false

ESTO DEBE FALLAR
  // titular = 'Ana';  → titular es const: no se puede reasignar.
  // const saldo: number = 5;  → saldo ya está declarada en este mismo bloque.

EXPLICA
  ¿Por qué saldo es let y titular es const?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 02 — Rango de lecturas
/*
SITUACIÓN
  Un sensor entrega tres lecturas. Se calcula la diferencia entre la mayor y la
  menor, y con ella se etiqueta el nivel de variación. Los límites son
  constantes del problema, no variables.

QUÉ DEBES HACER
  1. Declara const UMBRAL: number = 10 y const UMBRAL_CRITICO: number = 30.
  2. Crea const reporte = (a: number, b: number, c: number): string:
     a) declara let mayor: number = a y let menor: number = a;
     b) compara b y luego c con mayor; si alguna es más grande, reasigna mayor;
     c) compara b y luego c con menor; si alguna es más pequeña, reasigna menor;
     d) declara const rango: number = mayor - menor;
     e) declara let nivel: string = 'estable';
     f) si rango es mayor que UMBRAL, abre un bloque: dentro declara
        const grave: boolean = rango > UMBRAL_CRITICO; si grave es true,
        nivel pasa a 'crítico'; si no, pasa a 'variable';
     g) devuelve '{nivel} ({rango})'.
  3. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(reporte(10, 12, 11)); // 'estable (2)'
  console.log(reporte(5, 15, 10));  // 'estable (10)'
  console.log(reporte(5, 16, 10));  // 'variable (11)'
  console.log(reporte(0, 30, 10));  // 'variable (30)'
  console.log(reporte(0, 31, 10));  // 'crítico (31)'
  console.log(reporte(31, 0, 10));  // 'crítico (31)'

ESTO DEBE FALLAR
  // UMBRAL = 15;  → UMBRAL es const.
  // console.log(grave);  → grave solo existe dentro del bloque y de la función.

EXPLICA
  ¿Por qué grave se declara dentro del bloque del if y no al principio de la función?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 03 — Carrito con cupón
/*
SITUACIÓN
  Un carrito de compras es un objeto que se declara una sola vez, pero cuyos
  datos cambian a medida que se agregan artículos. Un cupón del 10 % se puede
  usar una sola vez.

QUÉ DEBES HACER
  1. Crea type Carrito = { articulos: number; total: number; cupon: boolean }.
  2. Declara const carrito: Carrito = { articulos: 0, total: 0, cupon: false }.
  3. Crea const agregar = (precio: number, cantidad: number): boolean:
     a) rechaza (false) si precio es 0 o menor, si cantidad es 0 o menor, o si
        cantidad no es un número entero (cantidad % 1 es distinto de 0);
     b) si no, suma cantidad a carrito.articulos, suma precio por cantidad a
        carrito.total y devuelve true.
  4. Crea const aplicarCupon = (): boolean:
     a) rechaza (false) si el cupón ya se usó o si el total es menor que 100
        (con total 100 exacto sí se acepta);
     b) si no, resta al total su 10 % (total / 10), marca carrito.cupon como
        true y devuelve true.
  5. Crea const resumen = (): string que devuelve
     '{articulos} artículos, total {total}'.
  6. Ejecuta las líneas de COMPRUEBA, en orden.

COMPRUEBA
  console.log(agregar(50, 1));    // true
  console.log(aplicarCupon());    // false  (el total es 50)
  console.log(agregar(25, 2));    // true   (el total pasa a 100)
  console.log(aplicarCupon());    // true   (el total pasa a 90)
  console.log(agregar(10, 0));    // false
  console.log(agregar(10, 1.5));  // false
  console.log(agregar(0, 1));     // false
  console.log(aplicarCupon());    // false  (el cupón ya se usó)
  console.log(resumen());         // '3 artículos, total 90'

ESTO DEBE FALLAR
  // carrito = { articulos: 1, total: 1, cupon: false };  → const no se reasigna.
  // carrito.total = 'gratis';  → total es number.

EXPLICA
  ¿Por qué puedes cambiar carrito.total aunque carrito sea const?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 04 — Tarifa de estacionamiento por tramos
/*
SITUACIÓN
  Un estacionamiento cobra por horas en tres tramos y tiene un tope diario.
  Se calcula con dos variables que cambian: las horas que quedan por cobrar y
  el costo acumulado.

QUÉ DEBES HACER
  1. Crea const costoEstacionamiento = (horas: number): number. Supón un
     entero >= 0.
  2. Dentro declara let restantes: number = horas, let costo: number = 0 y
     let tramo: number (sin valor inicial).
  3. Primer tramo (hasta 2 horas, a 20 cada una): si restantes es mayor que 2,
     tramo vale 2; si no, tramo vale restantes. Suma tramo * 20 a costo y resta
     tramo a restantes.
  4. Segundo tramo (hasta 3 horas, a 15 cada una): si restantes es mayor que 3,
     tramo vale 3; si no, tramo vale restantes. Suma tramo * 15 a costo y resta
     tramo a restantes.
  5. Tercer tramo: las horas que aún queden se cobran a 10 cada una.
  6. Tope: si costo es mayor que 120, costo pasa a valer 120. Devuelve costo.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(costoEstacionamiento(0));  // 0
  console.log(costoEstacionamiento(1));  // 20
  console.log(costoEstacionamiento(2));  // 40
  console.log(costoEstacionamiento(3));  // 55
  console.log(costoEstacionamiento(5));  // 85
  console.log(costoEstacionamiento(6));  // 95
  console.log(costoEstacionamiento(8));  // 115
  console.log(costoEstacionamiento(9));  // 120
  console.log(costoEstacionamiento(12)); // 120

ESTO DEBE FALLAR
  // costoEstacionamiento('3');  → horas es number, no string.
  // costoEstacionamiento(2, 3);  → la función recibe un solo argumento.

EXPLICA
  ¿Por qué restantes, costo y tramo deben ser let y no const?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 05 — Entradas de cine
/*
SITUACIÓN
  Una taquilla vende entradas con precio de socio o general. Los niños y los
  adultos mayores pagan la mitad del subtotal. Cada rama del cálculo guarda su
  propio precio en una constante local de su bloque.

QUÉ DEBES HACER
  1. Crea const total = (edad: number, socio: boolean, cantidad: number): number.
     Supón enteros >= 0 en edad y cantidad.
  2. Declara let subtotal: number = 0.
  3. Si socio es true, abre un bloque: declara const precio: number = 50 y
     asigna a subtotal precio * cantidad. Si no, en su propio bloque declara
     otra const precio: number = 80 y asigna precio * cantidad.
  4. Rebaja: si edad es menor que 12 o es 65 o más, abre un bloque: declara
     const rebaja: number = subtotal / 2 y resta rebaja a subtotal.
  5. Devuelve subtotal.
  6. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(total(30, true, 2));  // 100
  console.log(total(30, false, 2)); // 160
  console.log(total(11, true, 2));  // 50
  console.log(total(12, true, 2));  // 100
  console.log(total(65, false, 1)); // 40
  console.log(total(64, false, 1)); // 80
  console.log(total(5, false, 0));  // 0

ESTO DEBE FALLAR
  // console.log(precio);  → precio solo existe dentro de su bloque.
  // total(30, 'si', 2);  → socio es boolean.

EXPLICA
  ¿Por qué pueden existir dos const precio en la misma función sin chocar?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 06 — Cola de impresión
/*
SITUACIÓN
  Una impresora acepta trabajos hasta llegar a un límite de páginas. La cola es
  un array declarado con const: no se vuelve a asignar, pero crece con push.
  El contador de páginas sí cambia, así que es let.

QUÉ DEBES HACER
  1. Declara const LIMITE: number = 50, const cola: string[] = [] y
     let paginas: number = 0.
  2. Crea const enviar = (nombre: string, n: number): boolean. Supón n entero.
     a) rechaza (false) si n es 0 o menor, o si paginas + n supera LIMITE
        (llegar a 50 exacto sí es válido);
     b) si no, agrega nombre a cola con push, suma n a paginas y devuelve true.
  3. Crea const pendientes = (): number con la cantidad de trabajos en la cola.
  4. Crea const paginasEnCola = (): number con las páginas acumuladas.
  5. Crea const resumen = (): string: 'vacía' si no hay trabajos; si los hay,
     los nombres unidos con join(', ').
  6. Ejecuta las líneas de COMPRUEBA, en orden.

COMPRUEBA
  console.log(resumen());            // 'vacía'
  console.log(enviar('a.pdf', 30));  // true
  console.log(enviar('b.pdf', 25));  // false  (30 + 25 supera 50)
  console.log(enviar('c.pdf', 20));  // true   (llega a 50 exacto)
  console.log(enviar('d.pdf', 0));   // false
  console.log(enviar('e.pdf', 1));   // false  (51 supera 50)
  console.log(pendientes());         // 2
  console.log(paginasEnCola());      // 50
  console.log(resumen());            // 'a.pdf, c.pdf'

ESTO DEBE FALLAR
  // cola = [];  → const no se reasigna, aunque el array sí se pueda modificar.
  // cola.push(5);  → cola es string[]: no admite números.

EXPLICA
  ¿Por qué cola.push(...) es válido con const, pero cola = [] no lo es?
*/
(() => {
    // Tu solución.
})();

// TRAMO 2 — DESESTRUCTURACIÓN DE OBJETOS (EJERCICIOS 07 AL 13)

// !EJERCICIO 07 — Etiqueta de producto
/*
SITUACIÓN
  Una tienda imprime una etiqueta por producto. Para no repetir «p.» en cada
  dato, la función extrae primero las propiedades que necesita en variables.

QUÉ DEBES HACER
  1. Crea type Producto = { nombre: string; precio: number; stock: number;
     activo: boolean }.
  2. Crea const etiqueta = (p: Producto): string.
  3. Dentro, extrae con desestructuración las cuatro propiedades en una sola
     línea: const { nombre, precio, stock, activo } = p. Desde aquí no escribas
     «p.» otra vez.
  4. Decide en este orden:
     a) si activo es false, devuelve '{nombre}: no disponible';
     b) si stock es 0, devuelve '{nombre}: agotado';
     c) si no, devuelve '{nombre}: ${precio} ({stock} en stock)'.
        El signo $ va como texto literal delante del precio.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const lapiz: Producto = { nombre: 'Lápiz', precio: 5, stock: 100, activo: true };
  console.log(etiqueta(lapiz)); // 'Lápiz: $5 (100 en stock)'
  console.log(etiqueta({ nombre: 'Cuaderno', precio: 30, stock: 0, activo: true })); // 'Cuaderno: agotado'
  console.log(etiqueta({ nombre: 'Goma', precio: 3, stock: 10, activo: false })); // 'Goma: no disponible'
  console.log(etiqueta({ nombre: 'Goma', precio: 3, stock: 0, activo: false })); // 'Goma: no disponible'

ESTO DEBE FALLAR
  // const { color } = lapiz;  → Producto no tiene la propiedad color.
  // etiqueta({ nombre: 'Lápiz', precio: 5, stock: 100 });  → falta la propiedad activo.

EXPLICA
  ¿Importa el orden en que escribes las propiedades dentro de las llaves?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 08 — Monto pendiente de una factura
/*
SITUACIÓN
  Una factura trae subtotal, un descuento en porcentaje y un cargo de envío.
  Si ya está pagada no se debe nada; si no, se calcula lo que falta pagar.

QUÉ DEBES HACER
  1. Crea type Factura = { subtotal: number; descuentoPct: number; envio: number;
     pagada: boolean }.
  2. Crea const montoPendiente = (f: Factura): number.
  3. Extrae las cuatro propiedades de f con desestructuración.
  4. Si pagada es true, devuelve 0.
  5. Si no:
     a) calcula const descuento: number = subtotal * descuentoPct / 100;
     b) devuelve subtotal - descuento + envio. El envío no se descuenta.
  6. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const f1: Factura = { subtotal: 200, descuentoPct: 10, envio: 30, pagada: false };
  console.log(montoPendiente(f1)); // 210
  console.log(montoPendiente({ subtotal: 200, descuentoPct: 10, envio: 30, pagada: true })); // 0
  console.log(montoPendiente({ subtotal: 100, descuentoPct: 0, envio: 0, pagada: false })); // 100
  console.log(montoPendiente({ subtotal: 50, descuentoPct: 100, envio: 20, pagada: false })); // 20

ESTO DEBE FALLAR
  // const { total } = f1;  → Factura no tiene la propiedad total.
  // montoPendiente({ subtotal: 100, descuentoPct: 0, envio: 0 });  → falta pagada.

EXPLICA
  ¿Qué ventaja tiene extraer las propiedades al inicio frente a escribir f.subtotal
  en cada cálculo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 09 — Medio de contacto preferido
/*
SITUACIÓN
  Un contacto siempre tiene nombre, pero teléfono y correo son opcionales. Se
  prefiere el teléfono; si no hay, el correo. Un texto vacío cuenta como ausente.

QUÉ DEBES HACER
  1. Crea type Contacto = { nombre: string; telefono?: string; correo?: string }.
  2. Crea const medioDeContacto = (c: Contacto): string.
  3. Extrae nombre, telefono y correo de c con desestructuración. Las dos
     últimas pueden valer undefined.
  4. Decide en este orden:
     a) si telefono no es undefined y no es '', devuelve
        '{nombre} por teléfono {telefono}';
     b) si correo no es undefined y no es '', devuelve
        '{nombre} por correo {correo}';
     c) si no, devuelve '{nombre}: sin contacto'.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(medioDeContacto({ nombre: 'Ana', telefono: '555-1', correo: 'a@x.mx' })); // 'Ana por teléfono 555-1'
  console.log(medioDeContacto({ nombre: 'Luis', correo: 'l@x.mx' })); // 'Luis por correo l@x.mx'
  console.log(medioDeContacto({ nombre: 'Eva', telefono: '', correo: 'e@x.mx' })); // 'Eva por correo e@x.mx'
  console.log(medioDeContacto({ nombre: 'Zoe', telefono: '', correo: '' })); // 'Zoe: sin contacto'
  console.log(medioDeContacto({ nombre: 'Max' })); // 'Max: sin contacto'

ESTO DEBE FALLAR
  // const c: Contacto = { nombre: 'Ana', telefono: undefined };  → una propiedad opcional se omite; con exactOptionalPropertyTypes no se asigna undefined.
  // medioDeContacto({ telefono: '555-1' });  → falta nombre, que es obligatorio.

EXPLICA
  ¿Cuál es la diferencia entre omitir telefono y escribir telefono: ''?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 10 — Pedido sin identificador interno
/*
SITUACIÓN
  Un pedido interno tiene un id que no debe mostrarse al cliente. Se separa el
  id y se reúne el resto de los datos en un objeto nuevo, al que se le puede
  aplicar un recargo sin alterar el pedido original.

QUÉ DEBES HACER
  1. Crea type Pedido = { id: number; cliente: string; total: number;
     urgente: boolean } y type PedidoPublico = { cliente: string; total: number;
     urgente: boolean }.
  2. Crea const publicar = (p: Pedido): PedidoPublico.
  3. Extrae id y reúne el resto con Rest: const { id, ...resto } = p. Aunque id
     no se use después, no la borres: es la forma de dejarla fuera de resto.
  4. Si resto.urgente es true, asigna a resto.total su valor más 20 (recargo
     por urgencia).
  5. Devuelve resto.
  6. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const original: Pedido = { id: 7, cliente: 'Ana', total: 120, urgente: true };
  const pub = publicar(original);
  console.log(pub); // { cliente: 'Ana', total: 140, urgente: true }
  console.log(original.total); // 120
  console.log(publicar({ id: 8, cliente: 'Luis', total: 50, urgente: false }).total); // 50

ESTO DEBE FALLAR
  // console.log(pub.id);  → PedidoPublico no tiene id.
  // const copia: Pedido = pub;  → a pub le falta id.

EXPLICA
  ¿Por qué original.total sigue valiendo 120 si resto.total cambió?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 11 — Perfil de usuario por categoría de edad
/*
SITUACIÓN
  Un perfil se muestra con nombre y correo; el resto de los datos se reúne en
  un objeto para decidir el estado y la categoría del usuario.

QUÉ DEBES HACER
  1. Crea type Usuario = { nombre: string; edad: number; pais: string;
     correo: string; activo: boolean }.
  2. Crea const describir = (u: Usuario): string.
  3. Extrae nombre y correo en variables y reúne el resto con Rest:
     const { nombre, correo, ...resto } = u. Desde aquí usa resto.edad,
     resto.pais y resto.activo.
  4. Si resto.activo es false, devuelve '{nombre}: inactivo'.
  5. Declara let categoria: string y asígnale: 'senior' si resto.edad es 65 o
     más; 'adulto' si es 18 o más; 'menor' en cualquier otro caso.
  6. Devuelve '{nombre} <{correo}> {pais} {categoria}', con pais tomado de resto.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const bruce: Usuario = { nombre: 'Bruce', edad: 35, pais: 'USA', correo: 'bruce@example.com', activo: true };
  console.log(describir(bruce)); // 'Bruce <bruce@example.com> USA adulto'
  console.log(describir({ nombre: 'Abel', edad: 65, pais: 'MX', correo: 'a@x.mx', activo: true })); // 'Abel <a@x.mx> MX senior'
  console.log(describir({ nombre: 'Abel', edad: 64, pais: 'MX', correo: 'a@x.mx', activo: true })); // 'Abel <a@x.mx> MX adulto'
  console.log(describir({ nombre: 'Ivo', edad: 18, pais: 'ES', correo: 'i@x.es', activo: true })); // 'Ivo <i@x.es> ES adulto'
  console.log(describir({ nombre: 'Ivo', edad: 17, pais: 'ES', correo: 'i@x.es', activo: true })); // 'Ivo <i@x.es> ES menor'
  console.log(describir({ nombre: 'Eva', edad: 40, pais: 'AR', correo: 'e@x.ar', activo: false })); // 'Eva: inactivo'

ESTO DEBE FALLAR
  // const { nombre, ...otros } = bruce; console.log(otros.nombre);  → nombre ya se extrajo: no está en el resto.
  // describir({ nombre: 'Ana', edad: 30, pais: 'MX', correo: 'a@x.mx' });  → falta activo.

EXPLICA
  ¿Qué propiedades contiene resto y por qué nombre ya no está en él?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 12 — Latas de pintura
/*
SITUACIÓN
  Se pinta una pared con varias manos. Cada lata cubre 20 metros cuadrados y
  solo se venden latas completas. La función recibe el objeto de la pared y lo
  desestructura directamente en su parámetro.

QUÉ DEBES HACER
  1. Crea type Pared = { ancho: number; alto: number; manos: number }.
     Supón enteros >= 0.
  2. Crea const latasDePintura = ({ ancho, alto, manos }: Pared): number. Las
     propiedades se extraen en la lista de parámetros, no dentro del cuerpo.
  3. Declara const area: number = ancho * alto * manos.
  4. Calcula las latas completas sin Math: let latas: number =
     (area - area % 20) / 20.
  5. Si area % 20 es mayor que 0, suma 1 a latas (una lata más para el resto).
  6. Devuelve latas.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(latasDePintura({ ancho: 4, alto: 5, manos: 2 })); // 2
  console.log(latasDePintura({ ancho: 4, alto: 5, manos: 1 })); // 1
  console.log(latasDePintura({ ancho: 3, alto: 7, manos: 1 })); // 2
  console.log(latasDePintura({ ancho: 4, alto: 5, manos: 0 })); // 0

ESTO DEBE FALLAR
  // latasDePintura(4, 5, 2);  → la función recibe un solo objeto, no tres números.
  // latasDePintura({ ancho: 4, alto: 5 });  → falta manos.

EXPLICA
  ¿Qué cambia en la llamada a la función por desestructurar en el parámetro?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 13 — Próxima revisión de un vehículo
/*
SITUACIÓN
  Un taller programa la revisión de un vehículo cada cierto número de
  kilómetros. La placa identifica el vehículo; el resto de sus datos decide el
  intervalo. La función extrae la placa y reúne el resto con Rest en el parámetro.

QUÉ DEBES HACER
  1. Crea type Vehiculo = { placa: string; anio: number; km: number;
     electrico: boolean }.
  2. Crea const proximaRevision = ({ placa, ...datos }: Vehiculo): string. Rest
     en el parámetro: datos reúne anio, km y electrico.
  3. Si datos.anio es menor que 2010, devuelve '{placa}: fuera de programa'.
  4. Declara let intervalo: number = 10000. Si datos.electrico es true,
     intervalo pasa a valer 20000.
  5. Calcula const proxima: number = datos.km - datos.km % intervalo + intervalo
     (el siguiente múltiplo del intervalo; si km ya es múltiplo, es el siguiente).
  6. Devuelve '{placa}: próxima revisión a los {proxima} km'.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const auto: Vehiculo = { placa: 'ABC', anio: 2015, km: 25000, electrico: false };
  console.log(proximaRevision(auto)); // 'ABC: próxima revisión a los 30000 km'
  console.log(proximaRevision({ placa: 'ABC', anio: 2015, km: 30000, electrico: false })); // 'ABC: próxima revisión a los 40000 km'
  console.log(proximaRevision({ placa: 'EV1', anio: 2020, km: 25000, electrico: true })); // 'EV1: próxima revisión a los 40000 km'
  console.log(proximaRevision({ placa: 'EV1', anio: 2020, km: 19999, electrico: true })); // 'EV1: próxima revisión a los 20000 km'
  console.log(proximaRevision({ placa: 'NEW', anio: 2024, km: 0, electrico: false })); // 'NEW: próxima revisión a los 10000 km'
  console.log(proximaRevision({ placa: 'OLD', anio: 2009, km: 5000, electrico: false })); // 'OLD: fuera de programa'
  console.log(proximaRevision({ placa: 'OLD', anio: 2010, km: 5000, electrico: false })); // 'OLD: próxima revisión a los 10000 km'

ESTO DEBE FALLAR
  // proximaRevision('ABC');  → la función recibe un objeto Vehiculo.
  // const { placa, ...datos } = auto; console.log(datos.placa);  → placa no está en datos.

EXPLICA
  ¿Qué contiene datos y qué ocurre con la placa dentro de la función?
*/
(() => {
    // Tu solución.
})();

// TRAMO 3 — DESESTRUCTURACIÓN DE ARRAYS Y TUPLAS (EJERCICIOS 14 AL 19)

// !EJERCICIO 14 — Podio de una carrera
/*
SITUACIÓN
  Una carrera recibe los nombres de los corredores en orden de llegada, pero
  pueden ser pocos. Se anuncian los tres primeros que existan.

QUÉ DEBES HACER
  1. Crea const podio = (nombres: string[]): string.
  2. Extrae las tres primeras posiciones con desestructuración de array:
     const [oro, plata, bronce] = nombres. Cada una puede ser undefined.
  3. Si oro es undefined, devuelve 'sin participantes'.
  4. Declara let texto: string = 'Oro: {oro}'.
  5. Si plata no es undefined, agrega a texto ', Plata: {plata}'.
  6. Si bronce no es undefined, agrega a texto ', Bronce: {bronce}'.
  7. Devuelve texto.
  8. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const lista: string[] = ['a', 'b'];
  console.log(podio(['Ana', 'Luis', 'Eva', 'Zoe'])); // 'Oro: Ana, Plata: Luis, Bronce: Eva'
  console.log(podio(['Ana', 'Luis'])); // 'Oro: Ana, Plata: Luis'
  console.log(podio(['Ana'])); // 'Oro: Ana'
  console.log(podio([])); // 'sin participantes'

ESTO DEBE FALLAR
  // const [primero] = lista; console.log(primero.length);  → primero puede ser undefined.
  // podio([1, 2, 3]);  → la función recibe string[], no números.

EXPLICA
  ¿Por qué oro, plata y bronce pueden valer undefined aunque el array sea de strings?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 15 — Cambio de temperatura entre dos momentos
/*
SITUACIÓN
  Un termómetro entrega seis lecturas por día, en este orden: madrugada,
  amanecer, mañana, mediodía, tarde y noche. Solo interesan la de la mañana
  (posición 2) y la de la tarde (posición 4).

QUÉ DEBES HACER
  1. Crea const cambioTarde = (lecturas: number[]): string.
  2. Extrae solo esas dos posiciones saltando las demás con comas:
     const [, , manana, , tarde] = lecturas.
  3. Si manana o tarde es undefined, devuelve 'datos incompletos'.
  4. Si tarde es mayor que manana, devuelve 'sube {diferencia}'.
  5. Si tarde es menor que manana, devuelve 'baja {diferencia}'. La diferencia
     es siempre positiva.
  6. Si son iguales, devuelve 'igual'.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const lecturas: number[] = [10, 12, 15, 20, 25, 18];
  console.log(cambioTarde(lecturas)); // 'sube 10'
  console.log(cambioTarde([10, 12, 25, 20, 15, 18])); // 'baja 10'
  console.log(cambioTarde([1, 2, 5, 0, 5, 0])); // 'igual'
  console.log(cambioTarde([1, 2, 5])); // 'datos incompletos'
  console.log(cambioTarde([])); // 'datos incompletos'

ESTO DEBE FALLAR
  // const [, , m, , t] = lecturas; console.log(t - m);  → m y t pueden ser undefined.
  // cambioTarde(10, 12, 15);  → la función recibe un solo array.

EXPLICA
  ¿Qué papel cumplen las comas vacías dentro de los corchetes?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 16 — Reparto de una cuenta
/*
SITUACIÓN
  Una cuenta se reparte entre varias personas con montos enteros. Una función
  calcula la cuota y el sobrante y los devuelve juntos como una tupla; otra
  función los recibe con desestructuración.

QUÉ DEBES HACER
  1. Crea const repartir = (monto: number, personas: number): [number, number].
     Supón monto entero >= 0.
     a) si personas es 0 o menor, devuelve [0, monto];
     b) si no, calcula const sobrante: number = monto % personas y
        const cuota: number = (monto - sobrante) / personas, y devuelve
        [cuota, sobrante].
  2. Crea const mensaje = (monto: number, personas: number): string:
     a) obtén el resultado con const [cuota, sobrante] = repartir(monto, personas);
     b) si cuota es 0, devuelve 'monto insuficiente';
     c) si sobrante es 0, devuelve '{cuota} cada uno';
     d) si no, devuelve '{cuota} cada uno y sobran {sobrante}'.
  3. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(repartir(100, 3)); // [ 33, 1 ]
  console.log(repartir(5, 0)); // [ 0, 5 ]
  console.log(mensaje(100, 3)); // '33 cada uno y sobran 1'
  console.log(mensaje(90, 3)); // '30 cada uno'
  console.log(mensaje(2, 5)); // 'monto insuficiente'
  console.log(mensaje(5, 0)); // 'monto insuficiente'

ESTO DEBE FALLAR
  // const [a, b, c] = repartir(10, 2);  → la tupla tiene solo dos posiciones.
  // const resultado: number = repartir(10, 2);  → devuelve una tupla, no un number.

EXPLICA
  ¿Qué ventaja tiene devolver una tupla frente a devolver solo la cuota?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 17 — Pasos entre dos coordenadas
/*
SITUACIÓN
  Un robot se mueve en una cuadrícula solo en horizontal y en vertical. Cada
  punto es una tupla [x, y]. Se cuentan los pasos necesarios para ir de un
  punto a otro.

QUÉ DEBES HACER
  1. Crea type Punto = [number, number].
  2. Crea const describirRuta = (inicio: Punto, fin: Punto): string.
  3. Extrae las coordenadas: const [x1, y1] = inicio y const [x2, y2] = fin.
  4. Declara let pasosX: number = x2 - x1 y let pasosY: number = y2 - y1. Si
     alguno es negativo, cámbiale el signo (pasosX = -pasosX). Sin Math.
  5. Si pasosX y pasosY son ambos 0, devuelve 'ya estás ahí'.
  6. Si no, devuelve '{pasosX + pasosY} pasos ({pasosX} en X, {pasosY} en Y)'.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(describirRuta([0, 0], [3, 4])); // '7 pasos (3 en X, 4 en Y)'
  console.log(describirRuta([5, 5], [2, 9])); // '7 pasos (3 en X, 4 en Y)'
  console.log(describirRuta([1, 1], [1, 1])); // 'ya estás ahí'
  console.log(describirRuta([2, 3], [2, 0])); // '3 pasos (0 en X, 3 en Y)'

ESTO DEBE FALLAR
  // describirRuta([0, 0], [3]);  → Punto necesita exactamente dos números.
  // describirRuta([0, 0, 0], [1, 1]);  → Punto no admite tres posiciones.

EXPLICA
  ¿Por qué se cambia el signo en lugar de restar en el otro orden?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 18 — Estado de un artículo del inventario
/*
SITUACIÓN
  Un inventario guarda cada artículo como una tupla [nombre, cantidad,
  perecedero]. Según esos tres datos se decide si está bien, hay que reponerlo
  o hay exceso.

QUÉ DEBES HACER
  1. Crea type Registro = [string, number, boolean].
  2. Crea const estado = (r: Registro): string. Supón cantidad entero >= 0.
  3. Extrae los tres datos: const [nombre, cantidad, perecedero] = r.
  4. Decide en este orden:
     a) si cantidad es 0, devuelve '{nombre}: sin existencias';
     b) si perecedero es true y cantidad es mayor que 20, devuelve
        '{nombre}: exceso perecedero';
     c) si cantidad es menor que 5, devuelve '{nombre}: reponer';
     d) si no, devuelve '{nombre}: ok'.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const r: Registro = ['Pan', 1, true];
  console.log(estado(['Leche', 30, true])); // 'Leche: exceso perecedero'
  console.log(estado(['Leche', 20, true])); // 'Leche: ok'
  console.log(estado(['Leche', 3, true])); // 'Leche: reponer'
  console.log(estado(['Clavos', 30, false])); // 'Clavos: ok'
  console.log(estado(['Clavos', 4, false])); // 'Clavos: reponer'
  console.log(estado(['Clavos', 5, false])); // 'Clavos: ok'
  console.log(estado(['Pan', 0, true])); // 'Pan: sin existencias'
  console.log(estado(r)); // 'Pan: reponer'

ESTO DEBE FALLAR
  // const [a, b, c, d] = r;  → la tupla Registro no tiene cuarta posición.
  // estado(['Pan', true, 1]);  → el orden de los tipos es string, number, boolean.

EXPLICA
  ¿Por qué aquí nombre, cantidad y perecedero tienen tipo exacto y no string | undefined?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 19 — Costo de envío por volumen
/*
SITUACIÓN
  Un paquete es un objeto que incluye sus medidas como una tupla [largo, ancho,
  alto]. Se extraen las propiedades del objeto y luego las posiciones de la
  tupla para calcular el volumen y el cobro.

QUÉ DEBES HACER
  1. Crea type Paquete = { nombre: string; medidas: [number, number, number];
     fragil: boolean }.
  2. Crea const cobro = (p: Paquete): number.
  3. Extrae medidas y fragil del objeto: const { medidas, fragil } = p.
  4. Extrae la tupla en un segundo paso: const [largo, ancho, alto] = medidas.
  5. Calcula const volumen: number = largo * ancho * alto.
  6. Declara let tarifa: number. Asígnale 50 si volumen es 1000 o menos; 120 si
     es más de 1000 y hasta 8000 inclusive; 300 si es más de 8000.
  7. Si fragil es true, suma 30 a tarifa. Devuelve tarifa.
  8. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const caja: Paquete = { nombre: 'Caja', medidas: [10, 10, 10], fragil: false };
  console.log(cobro(caja)); // 50
  console.log(cobro({ nombre: 'Caja', medidas: [10, 10, 11], fragil: false })); // 120
  console.log(cobro({ nombre: 'Caja', medidas: [20, 20, 20], fragil: false })); // 120
  console.log(cobro({ nombre: 'Caja', medidas: [20, 20, 21], fragil: false })); // 300
  console.log(cobro({ nombre: 'Vidrio', medidas: [10, 10, 10], fragil: true })); // 80

ESTO DEBE FALLAR
  // cobro({ nombre: 'Caja', medidas: [10, 10], fragil: false });  → medidas necesita tres números.
  // const [largo, ancho, alto, extra] = caja.medidas;  → la tupla no tiene cuarta posición.

EXPLICA
  ¿Por qué se hacen dos desestructuraciones en lugar de una sola?
*/
(() => {
    // Tu solución.
})();

// TRAMO 4 — for-of: VALORES DE ARRAYS Y STRINGS (EJERCICIOS 20 AL 25)

// !EJERCICIO 20 — Montos válidos de una caja
/*
SITUACIÓN
  Una caja registra montos de cobros. Solo se aceptan montos de 1 a 1000
  (ambos inclusive); los demás se descartan como sospechosos.

QUÉ DEBES HACER
  1. Crea const resumenMontos = (montos: number[]): string.
  2. Declara let suma: number = 0 y let descartados: number = 0.
  3. Recorre montos con for (const monto of montos). En cada vuelta:
     a) si monto está entre 1 y 1000, ambos inclusive, súmalo a suma;
     b) si no, suma 1 a descartados.
  4. Devuelve '{suma} ({descartados} descartados)'.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(resumenMontos([10, -5, 1000, 1001, 0, 20])); // '1030 (3 descartados)'
  console.log(resumenMontos([1])); // '1 (0 descartados)'
  console.log(resumenMontos([])); // '0 (0 descartados)'

ESTO DEBE FALLAR
  // resumenMontos('10, 20');  → la función recibe number[], no un string.
  // for (const m of 10) { }  → un número no es iterable.

EXPLICA
  ¿Qué recibe la variable monto en cada vuelta: un índice o un valor?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 21 — Letras de un texto
/*
SITUACIÓN
  Se analiza un texto para contar sus vocales, sus consonantes y los demás
  caracteres. Un string se puede recorrer carácter por carácter con for-of.

QUÉ DEBES HACER
  1. Crea const analizar = (texto: string): string. Supón que el texto solo
     tiene letras de la A a la Z sin tildes, espacios, dígitos y signos.
  2. Declara tres contadores let: vocales, consonantes y otros, todos en 0.
  3. Recorre texto con for (const letra of texto). En cada vuelta:
     a) declara const mayuscula: string = letra.toUpperCase();
     b) si mayuscula es 'A', 'E', 'I', 'O' o 'U', suma 1 a vocales;
     c) si no, si mayuscula está entre 'A' y 'Z' (mayuscula >= 'A' y
        mayuscula <= 'Z'), suma 1 a consonantes;
     d) en cualquier otro caso, suma 1 a otros.
  4. Devuelve '{vocales} vocales, {consonantes} consonantes, {otros} otros'.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(analizar('Hola Mundo')); // '4 vocales, 5 consonantes, 1 otros'
  console.log(analizar('')); // '0 vocales, 0 consonantes, 0 otros'
  console.log(analizar('a1!')); // '1 vocales, 0 consonantes, 2 otros'
  console.log(analizar('Zz Aa')); // '2 vocales, 2 consonantes, 1 otros'
  console.log(analizar('aEiOu')); // '5 vocales, 0 consonantes, 0 otros'

ESTO DEBE FALLAR
  // for (const letra of 'abc') { letra = 'x'; }  → la variable del ciclo es const.
  // analizar(123);  → la función recibe un string.

EXPLICA
  ¿Por qué se pasa la letra a mayúscula antes de compararla?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 22 — Ticket de compra
/*
SITUACIÓN
  Un ticket recibe líneas de compra (producto, precio y cantidad). Se calcula
  el total y se indica qué línea tuvo el mayor subtotal.

QUÉ DEBES HACER
  1. Crea type Linea = { producto: string; precio: number; cantidad: number }.
  2. Crea const ticket = (lineas: Linea[]): string. Supón precio y cantidad
     mayores que 0.
  3. Si lineas está vacío (lineas.length es 0), devuelve 'Sin líneas'.
  4. Declara let total: number = 0, let mayorSubtotal: number = 0 y
     let mayorProducto: string = ''.
  5. Recorre lineas con for (const linea of lineas). En cada vuelta:
     a) calcula const subtotal: number = linea.precio * linea.cantidad;
     b) súmalo a total;
     c) si subtotal es estrictamente mayor que mayorSubtotal, actualiza
        mayorSubtotal y mayorProducto (en un empate gana la primera línea).
  6. Devuelve 'Total: {total} | Mayor: {mayorProducto}'.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(ticket([{ producto: 'pan', precio: 10, cantidad: 3 }, { producto: 'leche', precio: 20, cantidad: 2 }, { producto: 'sal', precio: 5, cantidad: 8 }])); // 'Total: 110 | Mayor: leche'
  console.log(ticket([{ producto: 'sal', precio: 5, cantidad: 8 }, { producto: 'leche', precio: 20, cantidad: 2 }])); // 'Total: 80 | Mayor: sal'
  console.log(ticket([{ producto: 'agua', precio: 12, cantidad: 1 }])); // 'Total: 12 | Mayor: agua'
  console.log(ticket([])); // 'Sin líneas'

ESTO DEBE FALLAR
  // ticket([{ producto: 'pan', precio: 10 }]);  → falta cantidad.
  // ticket([['pan', 10, 3]]);  → cada elemento debe ser un objeto Linea, no un array.

EXPLICA
  ¿Qué cambiaría en el resultado del segundo caso si usaras >= en lugar de >?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 23 — Racha de victorias
/*
SITUACIÓN
  Un registro de partidos es un texto donde cada letra es un resultado: 'V' es
  victoria y cualquier otra letra es una derrota. Se busca la racha más larga
  de victorias seguidas.

QUÉ DEBES HACER
  1. Crea const rachaMasLarga = (registro: string): number.
  2. Declara let actual: number = 0 y let mejor: number = 0.
  3. Recorre registro con for (const resultado of registro). En cada vuelta:
     a) si resultado es 'V', suma 1 a actual y, si actual supera a mejor,
        asigna actual a mejor;
     b) si no, actual vuelve a 0.
  4. Devuelve mejor.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(rachaMasLarga('VVDVVVD')); // 3
  console.log(rachaMasLarga('VDV')); // 1
  console.log(rachaMasLarga('VVVV')); // 4
  console.log(rachaMasLarga('DDD')); // 0
  console.log(rachaMasLarga('')); // 0
  console.log(rachaMasLarga('VVDVV')); // 2

ESTO DEBE FALLAR
  // rachaMasLarga(['V', 'D']);  → la función recibe un string, no un array.
  // const largo: string = rachaMasLarga('VV');  → devuelve number.

EXPLICA
  ¿Por qué actual vuelve a 0 y mejor no?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 24 — Mayor valor y su posición
/*
SITUACIÓN
  Un array de mediciones puede traer números negativos. Se busca el mayor y
  la posición donde aparece por primera vez. for-of no entrega el índice, así
  que la posición se lleva con un contador propio.

QUÉ DEBES HACER
  1. Crea const mayorConPosicion = (valores: number[]): string.
  2. Declara let mejor: number | undefined = undefined, let posicionMejor:
     number = -1 y let posicion: number = 0. Que mejor parta de undefined, no
     de 0, es lo que hace correcto el caso de solo negativos.
  3. Recorre valores con for (const valor of valores). En cada vuelta:
     a) si mejor es undefined o valor es estrictamente mayor que mejor,
        asigna valor a mejor y posicion a posicionMejor;
     b) suma 1 a posicion (siempre, al final de la vuelta).
  4. Si mejor es undefined, devuelve 'sin datos'.
  5. Si no, devuelve '{mejor} en la posición {posicionMejor}'.
  6. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(mayorConPosicion([3, 9, 2, 9])); // '9 en la posición 1'
  console.log(mayorConPosicion([-4, -7])); // '-4 en la posición 0'
  console.log(mayorConPosicion([1, 2, 3])); // '3 en la posición 2'
  console.log(mayorConPosicion([5])); // '5 en la posición 0'
  console.log(mayorConPosicion([])); // 'sin datos'

ESTO DEBE FALLAR
  // const m: number = mayorConPosicion([1]);  → devuelve string.
  // mayorConPosicion(1, 2, 3);  → recibe un solo array, no tres números.

EXPLICA
  ¿Qué resultado darían los números negativos si mejor partiera de 0?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 25 — Votación con enum
/*
SITUACIÓN
  Una asamblea vota con tres opciones. Para que el resultado cuente se necesita
  quórum: al menos 3 votos en total, contando las abstenciones. Después se
  compara a favor y en contra.

QUÉ DEBES HACER
  1. Dentro de la función del ejercicio crea enum Opcion { Si = 1, No = 2,
     Abstencion = 3 }.
  2. Crea const resultado = (votos: Opcion[]): string.
  3. Declara tres contadores let: si, no y abst, todos en 0.
  4. Recorre votos con for (const voto of votos). Si voto es Opcion.Si suma 1 a
     si; si es Opcion.No suma 1 a no; si es Opcion.Abstencion suma 1 a abst.
  5. Declara let decision: string. Asígnale:
     a) 'sin quórum' si votos.length es menor que 3;
     b) si no, 'aprobado' si si es mayor que no, 'rechazado' si si es menor que
        no, y 'empate' si son iguales.
  6. Devuelve '{decision} ({si}-{no}-{abst})'.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(resultado([Opcion.Si, Opcion.Si, Opcion.No])); // 'aprobado (2-1-0)'
  console.log(resultado([Opcion.Si, Opcion.No])); // 'sin quórum (1-1-0)'
  console.log(resultado([Opcion.Si, Opcion.No, Opcion.Abstencion])); // 'empate (1-1-1)'
  console.log(resultado([Opcion.No, Opcion.No, Opcion.Abstencion, Opcion.Si])); // 'rechazado (1-2-1)'
  console.log(resultado([Opcion.Abstencion, Opcion.Abstencion, Opcion.Abstencion])); // 'empate (0-0-3)'
  console.log(resultado([])); // 'sin quórum (0-0-0)'

ESTO DEBE FALLAR
  // resultado(['Si', 'No']);  → los elementos deben ser Opcion, no strings.
  // const v: Opcion = 'Si';  → un string no es un valor del enum.

EXPLICA
  ¿Qué ventaja tiene Opcion.Si frente a escribir el número 1 en los votos?
*/
(() => {
    // Tu solución.
})();

// TRAMO 5 — for-in: CLAVES, Record Y Object.hasOwn (EJERCICIOS 26 AL 31)

// !EJERCICIO 26 — Aprobados y reprobados
/*
SITUACIÓN
  Las notas de un grupo se guardan en un objeto cuyas claves son los nombres
  de los alumnos y cuyos valores son las notas. Aprueba quien tiene 60 o más.

QUÉ DEBES HACER
  1. Crea const resumenNotas = (notas: Record<string, number>): string.
  2. Declara const aprobados: string[] = [] y let reprobados: number = 0.
  3. Recorre las claves con for (const alumno in notas). En cada vuelta:
     a) obtén const nota = notas[alumno]; su tipo es number | undefined;
     b) si nota no es undefined y es 60 o más, agrega alumno a aprobados con push;
     c) si nota no es undefined y es menor que 60, suma 1 a reprobados.
  4. Declara let lista: string. Si aprobados está vacío, lista es 'ninguno';
     si no, es aprobados.join(', ').
  5. Devuelve 'Aprobados: {lista} | Reprobados: {reprobados}'.
  6. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const notas: Record<string, number> = { Ana: 90, Luis: 59, Eva: 60 };
  console.log(resumenNotas(notas)); // 'Aprobados: Ana, Eva | Reprobados: 1'
  console.log(resumenNotas({ Zoe: 10 })); // 'Aprobados: ninguno | Reprobados: 1'
  console.log(resumenNotas({})); // 'Aprobados: ninguno | Reprobados: 0'

ESTO DEBE FALLAR
  // resumenNotas({ Ana: 'A' });  → los valores deben ser number.
  // for (const alumno in notas) { console.log(notas[alumno].toFixed(1)); }  → notas[alumno] puede ser undefined.

EXPLICA
  ¿Qué recibe alumno en cada vuelta y cómo se obtiene la nota?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 27 — Productos por reponer
/*
SITUACIÓN
  Un almacén tiene un objeto de existencias mínimas y otro con las existencias
  actuales. Un producto ausente del segundo objeto no tiene existencias; uno
  con 0 sí está registrado. Se arma el pedido de reposición.

QUÉ DEBES HACER
  1. Crea const reposicion = (minimos: Record<string, number>, actual:
     Record<string, number>): string[].
  2. Declara const pedidos: string[] = [].
  3. Recorre las claves de minimos con for (const producto in minimos). En cada
     vuelta, solo si Object.hasOwn(minimos, producto) es true:
     a) obtén const minimo = minimos[producto] (number | undefined) y trabaja
        solo si no es undefined;
     b) si Object.hasOwn(actual, producto) es false, agrega a pedidos
        '{producto}: {minimo}' (se pide el mínimo completo);
     c) si es true, obtén const existencia = actual[producto]; si no es
        undefined y es menor que minimo, agrega '{producto}: {minimo - existencia}'.
        Si es igual o mayor, no se pide nada.
  4. Devuelve pedidos.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const minimos: Record<string, number> = { tornillos: 50, tuercas: 30, clavos: 20 };
  console.log(reposicion(minimos, { tornillos: 50, tuercas: 12 })); // [ 'tuercas: 18', 'clavos: 20' ]
  console.log(reposicion(minimos, { tornillos: 0, tuercas: 30, clavos: 25 })); // [ 'tornillos: 50' ]
  console.log(reposicion(minimos, {})); // [ 'tornillos: 50', 'tuercas: 30', 'clavos: 20' ]
  console.log(reposicion({}, { tornillos: 5 })); // []

ESTO DEBE FALLAR
  // Object.hasOwn(minimos);  → falta el segundo argumento: la clave.
  // reposicion({ tornillos: 'muchos' }, {});  → los valores deben ser number.

EXPLICA
  ¿Qué error cometerías con tornillos: 0 si comprobaras si el valor existe con if (actual[producto])?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 28 — Permisos activos
/*
SITUACIÓN
  Los permisos de un usuario se guardan en un objeto de claves libres con
  valores true o false. Se listan los activos y se consulta uno concreto.

QUÉ DEBES HACER
  1. Crea const permisosActivos = (permisos: Record<string, boolean>): string.
  2. Declara const activos: string[] = []. Recorre las claves con
     for (const accion in permisos) y, si permisos[accion] es true, agrega
     accion a activos.
  3. Devuelve 'ninguno' si activos está vacío; si no, activos.join(', ').
  4. Crea const tienePermiso = (permisos: Record<string, boolean>, accion:
     string): boolean: devuelve true solo si Object.hasOwn(permisos, accion)
     es true y permisos[accion] es true; en cualquier otro caso, false.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const permisos: Record<string, boolean> = { leer: true, escribir: false, borrar: true };
  const ajustes = { modo: 'oscuro', tamano: 12 };
  console.log(permisosActivos(permisos)); // 'leer, borrar'
  console.log(permisosActivos({ leer: false })); // 'ninguno'
  console.log(permisosActivos({})); // 'ninguno'
  console.log(tienePermiso(permisos, 'leer')); // true
  console.log(tienePermiso(permisos, 'escribir')); // false
  console.log(tienePermiso(permisos, 'crear')); // false

ESTO DEBE FALLAR
  // for (const clave in ajustes) { console.log(ajustes[clave]); }  → ajustes tiene propiedades concretas y clave es un string cualquiera.
  // permisosActivos({ leer: 1 });  → los valores deben ser boolean.

EXPLICA
  ¿Por qué permisos[accion] funciona con Record<string, boolean> pero ajustes[clave] no?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 29 — Posiciones de un nombre en una lista
/*
SITUACIÓN
  Se busca en qué posiciones aparece un nombre dentro de una lista. Con for-in
  sobre un array, la variable recibe cada índice, pero como un string.

QUÉ DEBES HACER
  1. Crea const posiciones = (lista: string[], buscado: string): string.
  2. Declara const encontradas: string[] = [].
  3. Recorre con for (const indice in lista). En cada vuelta, si
     lista[indice] es igual a buscado, agrega indice (tal como llega, un
     string) a encontradas.
  4. Si encontradas está vacío, devuelve 'ausente'.
  5. Si no, devuelve 'posiciones: {encontradas unidas con join(', ')}'.
  6. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const nombres: string[] = ['ana', 'luis', 'ana'];
  console.log(posiciones(nombres, 'ana')); // 'posiciones: 0, 2'
  console.log(posiciones(nombres, 'luis')); // 'posiciones: 1'
  console.log(posiciones(nombres, 'zoe')); // 'ausente'
  console.log(posiciones([], 'ana')); // 'ausente'

ESTO DEBE FALLAR
  // for (const indice in nombres) { const n: number = indice; }  → indice es un string, no un number.
  // for (const x in 5) { }  → for-in necesita un objeto o un array a la derecha.

EXPLICA
  ¿Por qué el índice llega como string y qué recibirías con for-of sobre la misma lista?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 30 — Letra más frecuente
/*
SITUACIÓN
  Se cuenta cuántas veces aparece cada letra de un texto. Primero se recorren
  los valores (for-of) y se acumulan en un objeto de conteos; después se
  recorren las claves (for-in) para elegir la letra que más aparece.

QUÉ DEBES HACER
  1. Crea const masFrecuente = (texto: string): string. Supón un texto sin
     dígitos.
  2. Declara const frecuencias: Record<string, number> = {}.
  3. Recorre texto con for (const letra of texto). En cada vuelta:
     frecuencias[letra] = (frecuencias[letra] || 0) + 1.
  4. Declara let mejorLetra: string = '' y let mejorVeces: number = 0.
  5. Recorre frecuencias con for (const letra in frecuencias). En cada vuelta,
     obtén const veces = frecuencias[letra]; si no es undefined y es
     estrictamente mayor que mejorVeces, actualiza mejorLetra y mejorVeces
     (en un empate gana la letra que apareció primero en el texto).
  6. Si mejorVeces es 0, devuelve 'vacío'; si no, '{mejorLetra}: {mejorVeces}'.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(masFrecuente('banana')); // 'a: 3'
  console.log(masFrecuente('abab')); // 'a: 2'
  console.log(masFrecuente('baab')); // 'b: 2'
  console.log(masFrecuente('x')); // 'x: 1'
  console.log(masFrecuente('')); // 'vacío'

ESTO DEBE FALLAR
  // masFrecuente(['a', 'b']);  → la función recibe un string.
  // const r: number = masFrecuente('aab');  → devuelve string.

EXPLICA
  ¿Por qué for-of se usa en el texto y for-in en el objeto de conteos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 31 — Reporte de ventas con bono
/*
SITUACIÓN
  Una lista de ventas trae varias ventas del mismo vendedor. Se suman por
  vendedor y se arma un reporte donde quien llega a 1000 recibe un bono.

QUÉ DEBES HACER
  1. Crea type Venta = { vendedor: string; monto: number }.
  2. Crea const reporte = (ventas: Venta[]): string[].
  3. Declara const totales: Record<string, number> = {}. Recorre ventas con
     for (const venta of ventas) y acumula:
     totales[venta.vendedor] = (totales[venta.vendedor] || 0) + venta.monto.
  4. Declara const lineas: string[] = []. Recorre totales con
     for (const vendedor in totales). En cada vuelta, obtén
     const total = totales[vendedor]; si no es undefined:
     a) si total es 1000 o más, agrega '{vendedor}: {total} (bono)';
     b) si no, agrega '{vendedor}: {total}'.
  5. Devuelve lineas (el orden es el de la primera aparición de cada vendedor).
  6. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const ventas: Venta[] = [{ vendedor: 'Ana', monto: 600 }, { vendedor: 'Luis', monto: 400 }, { vendedor: 'Ana', monto: 400 }, { vendedor: 'Eva', monto: 999 }];
  console.log(reporte(ventas)); // [ 'Ana: 1000 (bono)', 'Luis: 400', 'Eva: 999' ]
  console.log(reporte([{ vendedor: 'Zoe', monto: 5 }])); // [ 'Zoe: 5' ]
  console.log(reporte([])); // []

ESTO DEBE FALLAR
  // reporte([{ vendedor: 'Ana', monto: '600' }]);  → monto debe ser number.
  // for (const venta in ventas) { console.log(venta.monto); }  → con for-in, venta es el índice (string), no la venta.

EXPLICA
  ¿Por qué hacen falta dos recorridos y qué sucede con el orden de las claves?
*/
(() => {
    // Tu solución.
})();

// TRAMO 6 — COMBINACIONES DE LA SECCIÓN: for-of CON DESESTRUCTURACIÓN, typeof Y Array.isArray (EJERCICIOS 32 AL 37)

// !EJERCICIO 32 — Mejor alumno con notas válidas
/*
SITUACIÓN
  Una lista de alumnos puede traer notas fuera del rango 0–100 por errores de
  captura. Se busca el mejor alumno entre las notas válidas, desestructurando
  cada objeto directamente en el for-of.

QUÉ DEBES HACER
  1. Crea type Alumno = { nombre: string; nota: number }.
  2. Crea const mejorAlumno = (alumnos: Alumno[]): string.
  3. Declara let mejor: string = '' y let mejorNota: number = -1.
  4. Recorre con for (const { nombre, nota } of alumnos): la desestructuración
     va dentro de los paréntesis del for-of. En cada vuelta, si nota está entre
     0 y 100 (ambos inclusive) y es estrictamente mayor que mejorNota,
     actualiza mejorNota y mejor (en un empate gana el primero).
  5. Si mejorNota sigue en -1, devuelve 'sin notas válidas'.
  6. Si no, devuelve '{mejor}: {mejorNota}'.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const grupo: Alumno[] = [{ nombre: 'Ana', nota: 80 }, { nombre: 'Luis', nota: 95 }, { nombre: 'Eva', nota: 95 }, { nombre: 'Zoe', nota: 120 }];
  console.log(mejorAlumno(grupo)); // 'Luis: 95'
  console.log(mejorAlumno([{ nombre: 'Ana', nota: -1 }, { nombre: 'Luis', nota: 101 }])); // 'sin notas válidas'
  console.log(mejorAlumno([{ nombre: 'Ana', nota: 0 }])); // 'Ana: 0'
  console.log(mejorAlumno([{ nombre: 'Ana', nota: 100 }])); // 'Ana: 100'
  console.log(mejorAlumno([])); // 'sin notas válidas'

ESTO DEBE FALLAR
  // for (const { nombre, edad } of grupo) { }  → Alumno no tiene la propiedad edad.
  // mejorAlumno({ nombre: 'Ana', nota: 90 });  → la función recibe un array de alumnos.

EXPLICA
  ¿Qué evita la desestructuración en el for-of frente a escribir alumno.nombre y alumno.nota?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 33 — Surtir pedidos contra un stock
/*
SITUACIÓN
  Los pedidos llegan como tuplas [producto, cantidad]. Se surten contra un
  objeto de existencias que se modifica: se descuenta lo surtido y se reportan
  los pedidos que no se pudieron cumplir.

QUÉ DEBES HACER
  1. Crea const surtir = (pedidos: [string, number][], stock:
     Record<string, number>): string[]. Supón cantidades enteras > 0.
  2. Declara const problemas: string[] = [].
  3. Recorre con for (const [producto, cantidad] of pedidos). En cada vuelta,
     obtén const disponible = stock[producto] (number | undefined):
     a) si disponible es undefined, agrega '{producto}: no existe' a problemas;
     b) si no, si cantidad es mayor que disponible, agrega
        '{producto}: faltan {cantidad - disponible}' y no cambies el stock;
     c) si no, asigna a stock[producto] disponible - cantidad.
  4. Devuelve problemas.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const stock: Record<string, number> = { tornillos: 10, tuercas: 5 };
  console.log(surtir([['tornillos', 4], ['tuercas', 6], ['clavos', 1], ['tornillos', 6], ['tornillos', 1]], stock)); // [ 'tuercas: faltan 1', 'clavos: no existe', 'tornillos: faltan 1' ]
  console.log(stock.tornillos); // 0
  console.log(stock.tuercas); // 5
  console.log(surtir([], stock)); // []

ESTO DEBE FALLAR
  // surtir([['tornillos', '4']], stock);  → la cantidad debe ser number.
  // surtir([['tornillos']], stock);  → cada pedido necesita producto y cantidad.

EXPLICA
  ¿Por qué stock cambia fuera de la función aunque no la devuelvas?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 34 — Resumen de datos mezclados
/*
SITUACIÓN
  Un array trae datos de tres tipos mezclados: números, textos y booleanos.
  Cada tipo se procesa de forma distinta; typeof decide qué hacer con cada uno.

QUÉ DEBES HACER
  1. Crea const resumenMixto = (valores: (string | number | boolean)[]): string.
  2. Declara let sumaNumeros: number = 0, let letras: number = 0 y
     let verdaderos: number = 0.
  3. Recorre valores con for (const valor of valores). En cada vuelta, usa typeof:
     a) si es 'number', súmalo a sumaNumeros;
     b) si es 'string', suma su longitud (valor.length) a letras;
     c) si es 'boolean' y vale true, suma 1 a verdaderos.
  4. Devuelve 'números: {sumaNumeros}, letras: {letras}, verdaderos: {verdaderos}'.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const mezcla: (string | number | boolean)[] = [10, 'hola', true, 5, false, 'ab'];
  console.log(resumenMixto(mezcla)); // 'números: 15, letras: 6, verdaderos: 1'
  console.log(resumenMixto([true, true, true])); // 'números: 0, letras: 0, verdaderos: 3'
  console.log(resumenMixto(['', 0, false])); // 'números: 0, letras: 0, verdaderos: 0'
  console.log(resumenMixto([])); // 'números: 0, letras: 0, verdaderos: 0'

ESTO DEBE FALLAR
  // resumenMixto([1, 'a', null]);  → null no pertenece a string | number | boolean.
  // for (const v of mezcla) { console.log(v.toFixed(1)); }  → v puede ser string o boolean: toFixed solo existe en number.

EXPLICA
  ¿Por qué dentro de if (typeof valor === 'string') ya puedes usar valor.length?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 35 — Valores que pueden ser listas o nulos
/*
SITUACIÓN
  Un dato puede ser un número, una lista de números o null (ausente). Una
  función lo clasifica y otra suma todo lo que haya. typeof no distingue un
  array ni null de un objeto: ahí se usan === null y Array.isArray.

QUÉ DEBES HACER
  1. Crea type Dato = number | number[] | null.
  2. Crea const clasificar = (valor: Dato): string:
     a) si valor es null, devuelve 'nulo' (compruébalo primero);
     b) si Array.isArray(valor) es true: devuelve 'lista vacía' si no tiene
        elementos, o 'lista de {cantidad}' si tiene;
     c) en cualquier otro caso, devuelve 'número'.
  3. Crea const total = (valores: Dato[]): number. Declara let suma: number = 0 y
     recorre valores con for (const valor of valores):
     a) si valor es null, no hagas nada;
     b) si es un array, recórrelo con otro for-of y suma cada número;
     c) si no, suma valor.
     Devuelve suma.
  4. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(clasificar(null)); // 'nulo'
  console.log(clasificar([])); // 'lista vacía'
  console.log(clasificar([4, 5])); // 'lista de 2'
  console.log(clasificar(0)); // 'número'
  console.log(total([1, [2, 3], null, [], 4])); // 10
  console.log(total([null, null])); // 0
  console.log(total([])); // 0

ESTO DEBE FALLAR
  // clasificar('5');  → un string no pertenece a Dato.
  // const largo = (v: Dato): number => v.length;  → v puede ser number o null: no tiene length.

EXPLICA
  ¿Por qué se comprueba null antes que Array.isArray, y por qué typeof valor === 'object' no basta?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 36 — Duelo de equipos con participantes distintos
/*
SITUACIÓN
  Dos equipos se enfrentan. Cada participante es un número (su fuerza directa),
  un texto (su fuerza es su longitud) o un héroe (su fuerza es su poder). Gana
  el equipo con la suma de fuerzas mayor.

QUÉ DEBES HACER
  1. Crea type Heroe = { nombre: string; poder: number } y
     type Participante = number | string | Heroe.
  2. Crea const fuerza = (e: Participante): number:
     a) si typeof e es 'number', devuelve e;
     b) si typeof e es 'string', devuelve e.length;
     c) en cualquier otro caso e es un Heroe: extrae const { poder } = e y
        devuélvelo.
  3. Crea const duelo = (a: Participante[], b: Participante[]): string.
     Con dos for-of suma las fuerzas de a en let fuerzaA: number = 0 y las de b
     en let fuerzaB: number = 0, usando fuerza(...).
  4. Devuelve 'gana A ({fuerzaA} a {fuerzaB})' si fuerzaA es mayor;
     'gana B ({fuerzaA} a {fuerzaB})' si fuerzaB es mayor; y
     'empate ({fuerzaA} a {fuerzaB})' si son iguales.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const thor: Heroe = { nombre: 'Thor', poder: 50 };
  const hulk: Heroe = { nombre: 'Hulk', poder: 20 };
  console.log(fuerza(thor)); // 50
  console.log(fuerza('hola')); // 4
  console.log(duelo([10, 'ab', thor], [40, 'hola', hulk])); // 'gana B (62 a 64)'
  console.log(duelo([40, 'hola', hulk], [10, 'ab', thor])); // 'gana A (64 a 62)'
  console.log(duelo([5], [5])); // 'empate (5 a 5)'
  console.log(duelo([], ['abc'])); // 'gana B (0 a 3)'

ESTO DEBE FALLAR
  // fuerza(true);  → boolean no pertenece a Participante.
  // const f = (e: Participante): number => e.poder;  → poder no existe en number ni en string.

EXPLICA
  ¿Qué tipo tiene e en cada rama de la función fuerza?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 37 — Validación de una configuración
/*
SITUACIÓN
  Una configuración es un objeto de claves libres cuyos valores son números o
  textos. Se revisa que ningún número sea negativo y que ningún texto esté
  vacío, y se devuelve la lista de errores.

QUÉ DEBES HACER
  1. Crea const validar = (config: Record<string, string | number>): string[].
  2. Declara const errores: string[] = [].
  3. Recorre las claves con for (const clave in config). En cada vuelta, obtén
     const valor = config[clave] (string | number | undefined) y, con typeof:
     a) si valor es un number menor que 0, agrega '{clave}: negativo';
     b) si no, si valor es un string igual a '', agrega '{clave}: vacío'.
     El 0 es válido.
  4. Devuelve errores.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const config: Record<string, string | number> = { puerto: 8080, host: '', timeout: -1, modo: 'dev' };
  console.log(validar(config)); // [ 'host: vacío', 'timeout: negativo' ]
  console.log(validar({ reintentos: 0, nombre: 'x' })); // []
  console.log(validar({})); // []

ESTO DEBE FALLAR
  // validar({ activo: true });  → boolean no pertenece a string | number.
  // for (const clave in config) { if (config[clave] < 0) { } }  → config[clave] puede ser string o undefined.

EXPLICA
  ¿Qué valores puede tener valor en cada vuelta y cómo se descartan los que no interesan?
*/
(() => {
    // Tu solución.
})();

// TRAMO 7 — LA SECCIÓN 07 CON FUNCIONES, TUPLAS, ENUM, this Y OPCIONALES (EJERCICIOS 38 AL 44)

// !EJERCICIO 38 — Avisos programados
/*
SITUACIÓN
  Una función prepara un aviso por cada nombre y devuelve las funciones sin
  ejecutarlas. Cada aviso recuerda su propio nombre y todos comparten un
  contador de avisos enviados. Cada llamada a la función creadora tiene su
  propio contador.

QUÉ DEBES HACER
  1. Crea const crearAvisos = (nombres: string[]): (() => string)[]. El tipo de
     retorno es un array de funciones sin argumentos que devuelven string.
  2. Dentro declara let enviados: number = 0 y const avisos: (() => string)[] = [].
  3. Recorre nombres con for (const nombre of nombres). En cada vuelta, agrega
     con push una función (): string => { ... } que:
     a) suma 1 a enviados;
     b) devuelve 'Aviso {enviados} para {nombre}'.
  4. Devuelve avisos sin ejecutar ninguna función.
  5. Crea const ejecutarAvisos = (avisos: (() => string)[]): string[]: recorre
     avisos con for-of, llama a cada función y guarda sus textos en un array
     que devuelves.
  6. Ejecuta las líneas de COMPRUEBA, en orden.

COMPRUEBA
  const avisos = crearAvisos(['Ana', 'Luis', 'Eva']);
  console.log(ejecutarAvisos(avisos)); // [ 'Aviso 1 para Ana', 'Aviso 2 para Luis', 'Aviso 3 para Eva' ]
  console.log(ejecutarAvisos(avisos)); // [ 'Aviso 4 para Ana', 'Aviso 5 para Luis', 'Aviso 6 para Eva' ]
  console.log(ejecutarAvisos(crearAvisos(['Zoe']))); // [ 'Aviso 1 para Zoe' ]
  console.log(ejecutarAvisos([])); // []

ESTO DEBE FALLAR
  // ejecutarAvisos([1, 2]);  → los elementos deben ser funciones () => string.
  // crearAvisos('Ana');  → la función recibe un array de strings.

EXPLICA
  ¿Por qué cada aviso conserva su nombre aunque se creen dentro del mismo ciclo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 39 — Cotización con descuento y cargos
/*
SITUACIÓN
  Una cotización parte de un precio base. El descuento en porcentaje es
  opcional (por defecto 0) y se pueden sumar los cargos extra que se quiera:
  ninguno, uno o varios.

QUÉ DEBES HACER
  1. Crea const cotizar = (base: number, descuentoPct: number = 0,
     ...cargos: number[]): number.
  2. Declara let total: number = base - base * descuentoPct / 100.
  3. Recorre cargos con for (const cargo of cargos): suma el cargo a total solo
     si es mayor que 0; los cargos de 0 o negativos se ignoran.
  4. Devuelve total.
  5. Ejecuta las líneas de COMPRUEBA. Para pasar cargos sin descuento, el
     segundo argumento es undefined.

COMPRUEBA
  console.log(cotizar(200)); // 200
  console.log(cotizar(200, 10)); // 180
  console.log(cotizar(200, undefined, 5, 10)); // 215
  console.log(cotizar(200, 50, 10, -3, 20)); // 130
  console.log(cotizar(100, 100)); // 0

ESTO DEBE FALLAR
  // cotizar();  → base es obligatorio.
  // cotizar(100, 5, 'extra');  → los cargos deben ser number.

EXPLICA
  ¿Por qué se pasa undefined en el tercer caso en lugar de omitir el segundo argumento?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 40 — Siguiente paciente en urgencias
/*
SITUACIÓN
  Urgencias atiende primero al paciente con mayor puntaje. El puntaje parte de
  su prioridad (un enum) y suma 3 si es un niño menor de 5 años o un adulto de
  65 o más. La edad es opcional: si falta, no hay bonificación.

QUÉ DEBES HACER
  1. Dentro de la función del ejercicio crea enum Prioridad { Baja = 1,
     Media = 5, Alta = 10 } y
     type Paciente = { nombre: string; prioridad: Prioridad; edad?: number }.
  2. Crea const siguiente = (pacientes: Paciente[]): string.
  3. Declara let elegido: string = '' y let mejor: number = -1.
  4. Recorre con for (const { nombre, prioridad, edad } of pacientes). En cada
     vuelta:
     a) declara let puntaje: number = prioridad;
     b) si edad no es undefined y (edad es menor que 5 o es 65 o más), suma 3 a
        puntaje;
     c) si puntaje es estrictamente mayor que mejor, actualiza mejor y elegido
        (en un empate gana el primero).
  5. Si mejor sigue en -1, devuelve 'sin pacientes'; si no, '{elegido} ({mejor})'.
  6. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(siguiente([{ nombre: 'Ana', prioridad: Prioridad.Media }, { nombre: 'Luis', prioridad: Prioridad.Baja, edad: 70 }])); // 'Ana (5)'
  console.log(siguiente([{ nombre: 'Ana', prioridad: Prioridad.Baja, edad: 70 }, { nombre: 'Luis', prioridad: Prioridad.Media }])); // 'Luis (5)'
  console.log(siguiente([{ nombre: 'Ana', prioridad: Prioridad.Media, edad: 65 }, { nombre: 'Luis', prioridad: Prioridad.Alta }])); // 'Luis (10)'
  console.log(siguiente([{ nombre: 'Ana', prioridad: Prioridad.Media, edad: 65 }])); // 'Ana (8)'
  console.log(siguiente([{ nombre: 'Ana', prioridad: Prioridad.Media, edad: 4 }])); // 'Ana (8)'
  console.log(siguiente([{ nombre: 'Ana', prioridad: Prioridad.Media }, { nombre: 'Luis', prioridad: Prioridad.Media }])); // 'Ana (5)'
  console.log(siguiente([{ nombre: 'Ana', prioridad: Prioridad.Media, edad: 5 }])); // 'Ana (5)'
  console.log(siguiente([{ nombre: 'Ana', prioridad: Prioridad.Media, edad: 64 }])); // 'Ana (5)'
  console.log(siguiente([{ nombre: 'Ana', prioridad: Prioridad.Media, edad: 0 }])); // 'Ana (8)'
  console.log(siguiente([])); // 'sin pacientes'

ESTO DEBE FALLAR
  // siguiente([{ nombre: 'Ana', prioridad: 'alta' }]);  → prioridad debe ser un valor de Prioridad.
  // const p: Paciente = { nombre: 'Ana', prioridad: Prioridad.Alta, edad: undefined };  → con exactOptionalPropertyTypes, una propiedad opcional se omite en lugar de asignarle undefined.

EXPLICA
  ¿Por qué hace falta comprobar que edad no es undefined antes de compararla?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 41 — Almacén con estado propio
/*
SITUACIÓN
  Un almacén es un objeto con sus existencias y métodos que usan this para
  trabajar con ellas. Una función fábrica crea almacenes independientes.

QUÉ DEBES HACER
  1. Crea type Almacen = { stock: Record<string, number>; agregar:
     (producto: string, cantidad: number) => boolean; total: () => number;
     mayor: () => string }.
  2. Crea const crearAlmacen = (): Almacen que devuelve un objeto literal con
     stock vacío ({}) y estos tres métodos, todos con this.stock:
     a) agregar(producto: string, cantidad: number): boolean: rechaza (false) si
        cantidad es 0 o menor o no es entera (cantidad % 1 distinto de 0); si no,
        suma cantidad al producto (this.stock[producto] || 0, más cantidad) y
        devuelve true;
     b) total(): number: recorre this.stock con for-in y suma todas las
        cantidades (ignora los undefined);
     c) mayor(): string: con for-in busca el producto con más cantidad (en un
        empate gana el primero registrado); devuelve '{producto}: {cantidad}', o
        'vacío' si no hay productos.
  3. Ejecuta las líneas de COMPRUEBA, en orden.

COMPRUEBA
  const a = crearAlmacen();
  console.log(a.mayor()); // 'vacío'
  console.log(a.agregar('tornillos', 10)); // true
  console.log(a.agregar('tuercas', 15)); // true
  console.log(a.agregar('tornillos', 5)); // true
  console.log(a.agregar('clavos', 0)); // false
  console.log(a.agregar('clavos', 2.5)); // false
  console.log(a.total()); // 30
  console.log(a.mayor()); // 'tornillos: 15'
  const b = crearAlmacen();
  console.log(b.total()); // 0

ESTO DEBE FALLAR
  // a.agregar('clavos');  → falta cantidad.
  // a.total = 5;  → total es una función, no un number.

EXPLICA
  ¿Por qué a y b no comparten existencias aunque se creen con la misma función?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 42 — Calculadora por símbolo
/*
SITUACIÓN
  Una calculadora guarda sus operaciones en un objeto cuyas claves son los
  símbolos y cuyos valores son funciones. Una expresión llega como una tupla
  [número, símbolo, número].

QUÉ DEBES HACER
  1. Crea type Operacion = (a: number, b: number) => number.
  2. Declara const operaciones: Record<string, Operacion> con cuatro entradas,
     en este orden, cada una una función flecha con parámetros a y b tipados:
     '+' suma, '-' resta, '*' multiplica y '/' divide.
  3. Crea const calcular = (expresion: [number, string, number]): string:
     a) extrae const [a, simbolo, b] = expresion;
     b) obtén const operacion = operaciones[simbolo] (Operacion | undefined);
        si es undefined, devuelve 'operación desconocida';
     c) si simbolo es '/' y b es 0, devuelve 'división entre cero';
     d) si no, devuelve el resultado de operacion(a, b) convertido a texto con
        una plantilla: `${...}`.
  4. Crea const listarOperaciones = (): string: recorre operaciones con for-in,
     reúne las claves en un array con push y devuelve las claves unidas con
     join(', ').
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(calcular([6, '+', 4])); // '10'
  console.log(calcular([6, '-', 9])); // '-3'
  console.log(calcular([6, '*', 7])); // '42'
  console.log(calcular([6, '/', 4])); // '1.5'
  console.log(calcular([6, '/', 0])); // 'división entre cero'
  console.log(calcular([6, '^', 2])); // 'operación desconocida'
  console.log(calcular([0, '/', 5])); // '0'
  console.log(listarOperaciones()); // '+, -, *, /'

ESTO DEBE FALLAR
  // calcular([6, '+']);  → la tupla necesita tres elementos.
  // operaciones['+'] = (a: string, b: string): string => a + b;  → no cumple el tipo Operacion.

EXPLICA
  ¿Por qué hay que comprobar si operacion es undefined antes de llamarla?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 43 — Líder de un torneo
/*
SITUACIÓN
  Los partidos se registran como tuplas [local, golesLocal, visitante,
  golesVisitante]. El ganador suma 3 puntos, en un empate cada equipo suma 1 y
  el perdedor suma 0 (pero debe quedar registrado con sus puntos). Se busca al
  líder.

QUÉ DEBES HACER
  1. Crea type Partido = [string, number, string, number].
  2. Crea const lider = (partidos: Partido[]): string.
  3. Declara const puntos: Record<string, number> = {}.
  4. Recorre con for (const [local, golesLocal, visitante, golesVisitante] of
     partidos). En cada vuelta:
     a) declara let pl: number = 0 y let pv: number = 0;
     b) si golesLocal es mayor que golesVisitante, pl pasa a 3; si es menor, pv
        pasa a 3; si son iguales, ambos pasan a 1;
     c) acumula en puntos[local] sumando pl y en puntos[visitante] sumando pv,
        con (puntos[x] || 0) + lo que corresponda. Así cada equipo queda
        registrado aunque sume 0.
  5. Declara let mejor: string = '' y let mejorPuntos: number = -1. Recorre
     puntos con for-in: si el valor no es undefined y es estrictamente mayor que
     mejorPuntos, actualiza ambos (en un empate gana el equipo registrado antes).
  6. Si mejor es '', devuelve 'sin partidos'; si no, 'Líder: {mejor} ({mejorPuntos})'.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(lider([['A', 2, 'B', 1], ['B', 0, 'C', 0], ['C', 1, 'A', 3]])); // 'Líder: A (6)'
  console.log(lider([['A', 1, 'B', 1]])); // 'Líder: A (1)'
  console.log(lider([['A', 0, 'B', 2]])); // 'Líder: B (3)'
  console.log(lider([['A', 0, 'B', 1], ['B', 0, 'C', 1]])); // 'Líder: B (3)'
  console.log(lider([])); // 'sin partidos'

ESTO DEBE FALLAR
  // lider([['A', 2, 'B']]);  → Partido necesita cuatro elementos.
  // lider([['A', '2', 'B', 1]]);  → los goles deben ser number.

EXPLICA
  ¿Por qué un equipo que solo pierde debe aparecer en puntos con valor 0?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 44 — Resumen de un formulario
/*
SITUACIÓN
  Un formulario guarda sus campos en un objeto de claves libres. Cada valor
  puede ser texto, número, booleano, lista de textos o null. Cada tipo se
  muestra de forma distinta.

QUÉ DEBES HACER
  1. Crea type Dato = string | number | boolean | string[] | null.
  2. Crea const resumirFormulario = (campos: Record<string, Dato>): string[].
  3. Declara const lineas: string[] = [].
  4. Recorre las claves con for (const clave in campos). En cada vuelta, obtén
     const valor = campos[clave] y decide en este orden, agregando a lineas:
     a) si valor es undefined o null: '{clave}: sin dato';
     b) si Array.isArray(valor): '{clave}: {valor.length} opciones';
     c) si typeof valor es 'string': '{clave}: sin dato' si es '', o
        '{clave}: {valor}' si no;
     d) si typeof valor es 'number': '{clave}: {valor.toFixed(2)}';
     e) si no, es un boolean: '{clave}: sí' si es true o '{clave}: no' si es false.
  5. Devuelve lineas.
  6. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(resumirFormulario({ nombre: 'Ana', edad: 30, notas: '', acepta: true })); // [ 'nombre: Ana', 'edad: 30.00', 'notas: sin dato', 'acepta: sí' ]
  console.log(resumirFormulario({ intereses: ['a', 'b'], extra: null, cupon: false })); // [ 'intereses: 2 opciones', 'extra: sin dato', 'cupon: no' ]
  console.log(resumirFormulario({ peso: 70.456 })); // [ 'peso: 70.46' ]
  console.log(resumirFormulario({ vacia: [] })); // [ 'vacia: 0 opciones' ]
  console.log(resumirFormulario({})); // []

ESTO DEBE FALLAR
  // resumirFormulario({ fecha: { dia: 1 } });  → un objeto no pertenece a Dato.
  // const x: Dato = undefined;  → undefined no pertenece a Dato.

EXPLICA
  ¿Por qué Array.isArray va antes de typeof, y qué pasaría con null si usaras solo typeof valor === 'object'?
*/
(() => {
    // Tu solución.
})();

// TRAMO 8 — INTEGRACIÓN FINAL: CLASES BÁSICAS Y TODO LO ANTERIOR (EJERCICIOS 45 AL 50)
/*
En este tramo se usan clases como las del Apunte de la sección 07: class,
constructor con parámetros public, propiedades, métodos, this, new e instancias.
Todas las propiedades son públicas y no hay herencia. En los ejercicios con
clase, COMPRUEBA incluye una segunda instancia para ver que no comparte estado
con la primera. El ejercicio 49 no usa clases.
*/

// !EJERCICIO 45 — Termostato con lecturas
/*
SITUACIÓN
  Un termostato registra temperaturas de una ubicación y avisa cuántas
  superaron un límite. Solo acepta lecturas entre -50 y 60 grados.

QUÉ DEBES HACER
  1. Crea la clase Termostato. Su constructor recibe, en este orden,
     ubicacion (string, public) y limite (number, public). Declara además la
     propiedad lecturas: number[] = [] (empieza vacía).
  2. En Termostato crea registrar(temperatura: number): boolean:
     a) rechaza (false, sin guardar) si temperatura es menor que -50 o mayor
        que 60 (los dos extremos sí son válidos);
     b) si no, la agrega a this.lecturas con push y devuelve true.
  3. En Termostato crea resumen(): string:
     a) si no hay lecturas, devuelve '{ubicacion}: sin lecturas';
     b) si hay, recorre this.lecturas con for-of acumulando la suma y cuántas
        lecturas son estrictamente mayores que this.limite;
     c) calcula el promedio (suma / cantidad de lecturas) y devuelve
        '{ubicacion}: {n} lecturas, promedio {promedio con toFixed(1)}, {alertas} sobre el límite'.
  4. Fuera de la clase crea las instancias y ejecuta COMPRUEBA, en orden.

COMPRUEBA
  const sala = new Termostato('Sala', 25);
  console.log(sala.resumen()); // 'Sala: sin lecturas'
  console.log(sala.registrar(20)); // true
  console.log(sala.registrar(22)); // true
  console.log(sala.registrar(25)); // true
  console.log(sala.registrar(33)); // true
  console.log(sala.resumen()); // 'Sala: 4 lecturas, promedio 25.0, 1 sobre el límite'
  console.log(sala.registrar(61)); // false
  console.log(sala.registrar(-51)); // false
  console.log(sala.resumen()); // 'Sala: 4 lecturas, promedio 25.0, 1 sobre el límite'
  console.log(sala.registrar(60)); // true
  console.log(sala.registrar(-50)); // true
  console.log(sala.resumen()); // 'Sala: 6 lecturas, promedio 18.3, 2 sobre el límite'
  console.log(new Termostato('Patio', 30).resumen()); // 'Patio: sin lecturas'

ESTO DEBE FALLAR
  // sala.registrar('20');  → temperatura es number.
  // new Termostato('Sala');  → falta el límite.

EXPLICA
  ¿Por qué la segunda instancia no ve las lecturas de sala?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 46 — Ranking de puntos con tope
/*
SITUACIÓN
  Un ranking acumula puntos por jugador en un objeto de claves libres. Ningún
  jugador puede pasar de 100 puntos. Se consulta al líder y la tabla completa.

QUÉ DEBES HACER
  1. Crea la clase Ranking sin parámetros en el constructor. Declara la
     propiedad puntos: Record<string, number> = {}.
  2. En Ranking crea sumar(nombre: string, pts: number): boolean:
     a) rechaza (false, sin cambios) si pts es 0 o menor, o si no es entero
        (pts % 1 distinto de 0);
     b) calcula el total nuevo: (this.puntos[nombre] || 0) más pts; si supera
        100, rechaza (false, sin cambios); con 100 exacto sí se acepta;
     c) si no, guarda el total en this.puntos[nombre] y devuelve true.
  3. En Ranking crea lider(): string: con for-in sobre this.puntos busca el
     mayor total (en un empate gana el primero registrado). Devuelve
     '{nombre}: {total}', o 'sin jugadores' si no hay ninguno.
  4. En Ranking crea tabla(): string[]: con for-in devuelve un array de
     '{nombre}: {total}' en el orden en que se registraron.
  5. Fuera de la clase crea las instancias y ejecuta COMPRUEBA, en orden.

COMPRUEBA
  const r = new Ranking();
  console.log(r.lider()); // 'sin jugadores'
  console.log(r.sumar('Ana', 60)); // true
  console.log(r.sumar('Luis', 60)); // true
  console.log(r.lider()); // 'Ana: 60'
  console.log(r.sumar('Ana', 41)); // false
  console.log(r.sumar('Ana', 40)); // true
  console.log(r.sumar('Eva', 0)); // false
  console.log(r.sumar('Eva', 2.5)); // false
  console.log(r.lider()); // 'Ana: 100'
  console.log(r.tabla()); // [ 'Ana: 100', 'Luis: 60' ]
  const r2 = new Ranking();
  console.log(r2.sumar('Zoe', 1)); // true
  console.log(r2.tabla()); // [ 'Zoe: 1' ]
  console.log(r.tabla()); // [ 'Ana: 100', 'Luis: 60' ]

ESTO DEBE FALLAR
  // r.sumar('Ana');  → falta pts.
  // r.puntos = 5;  → puntos es un Record<string, number>, no un number.

EXPLICA
  ¿Por qué el rechazo por pasar de 100 no debe dejar a Ana con 101 puntos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 47 — Agenda de citas con horas ocupadas
/*
SITUACIÓN
  Una agenda atiende de 8 a 17 horas, una cita por hora. Cada cita se guarda
  como tupla [nombre, hora]. Se pueden consultar las horas libres y la primera
  disponible.

QUÉ DEBES HACER
  1. Antes de la clase declara const HORARIO: number[] =
     [8, 9, 10, 11, 12, 13, 14, 15, 16, 17].
  2. Crea la clase Agenda sin parámetros en el constructor. Declara la
     propiedad citas: [string, number][] = [].
  3. En Agenda crea agregar(nombre: string, hora: number): boolean:
     a) rechaza (false) si hora no es un entero entre 8 y 17, ambos incluidos
        (hora % 1 distinto de 0 también se rechaza);
     b) recorre this.citas con for (const [, horaCita] of this.citas): si
        alguna horaCita es igual a hora, rechaza (false);
     c) si no, agrega [nombre, hora] con push y devuelve true.
  4. En Agenda crea libres(): number[]: recorre HORARIO con for-of y devuelve
     un array con las horas que no aparecen en ninguna cita (usa un for-of
     anidado sobre this.citas).
  5. En Agenda crea siguienteLibre(): string: obtén libres() y, con
     const [primera] = ..., devuelve '{primera}:00' o, si primera es undefined,
     'sin horas libres'.
  6. Fuera de la clase crea las instancias y ejecuta COMPRUEBA, en orden.

COMPRUEBA
  const a = new Agenda();
  console.log(a.agregar('Ana', 8)); // true
  console.log(a.agregar('Luis', 8)); // false
  console.log(a.agregar('Eva', 7)); // false
  console.log(a.agregar('Zoe', 18)); // false
  console.log(a.agregar('Zoe', 17)); // true
  console.log(a.agregar('Max', 9.5)); // false
  console.log(a.agregar('Max', 9)); // true
  console.log(a.libres().join(', ')); // '10, 11, 12, 13, 14, 15, 16'
  console.log(a.siguienteLibre()); // '10:00'
  console.log(new Agenda().siguienteLibre()); // '8:00'
  const llena = new Agenda();
  for (const h of HORARIO) { llena.agregar('X', h); }
  console.log(llena.siguienteLibre()); // 'sin horas libres'
  console.log(llena.libres()); // []

ESTO DEBE FALLAR
  // a.agregar(8, 'Ana');  → los argumentos van en orden: nombre (string) y hora (number).
  // a.citas.push(['Ana']);  → cada cita es una tupla de dos elementos.

EXPLICA
  ¿Por qué un rechazo por hora ocupada no debe agregar la cita?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 48 — Carrito que acepta dos formas de artículo
/*
SITUACIÓN
  Un carrito recibe artículos de dos formas: solo el nombre (cantidad 1) o una
  tupla [nombre, cantidad]. Guarda las cantidades por nombre en un objeto de
  claves libres.

QUÉ DEBES HACER
  1. Crea la clase CarritoCompras sin parámetros en el constructor. Declara la
     propiedad items: Record<string, number> = {}.
  2. En CarritoCompras crea agregar(item: string | [string, number]): boolean:
     a) declara let nombre: string y let cantidad: number (sin valor inicial);
     b) si typeof item es 'string', asigna item a nombre y 1 a cantidad;
     c) si no, item es la tupla: extrae const [n, c] = item con
        desestructuración de array y asigna n a nombre y c a cantidad;
     d) rechaza (false, sin cambios) si nombre es '' o si cantidad es 0 o menor
        o no es entera (cantidad % 1 distinto de 0);
     e) si no, suma cantidad a this.items[nombre] ((this.items[nombre] || 0) más
        cantidad) y devuelve true.
  3. En CarritoCompras crea cantidadTotal(): number: suma con for-in todas las
     cantidades (ignora undefined).
  4. En CarritoCompras crea descripcion(): string: con for-in arma un array con
     '{nombre} x{cantidad}' y devuelve los elementos unidos con join(', ');
     si no hay artículos, devuelve 'vacío'.
  5. Fuera de la clase crea las instancias y ejecuta COMPRUEBA, en orden.

COMPRUEBA
  const c = new CarritoCompras();
  console.log(c.descripcion()); // 'vacío'
  console.log(c.agregar('pan')); // true
  console.log(c.agregar(['leche', 3])); // true
  console.log(c.agregar(['pan', 2])); // true
  console.log(c.agregar(['sal', 0])); // false
  console.log(c.agregar(['sal', 1.5])); // false
  console.log(c.agregar('')); // false
  console.log(c.agregar(['', 2])); // false
  console.log(c.cantidadTotal()); // 6
  console.log(c.descripcion()); // 'pan x3, leche x3'
  const d = new CarritoCompras();
  console.log(d.cantidadTotal()); // 0

ESTO DEBE FALLAR
  // c.agregar(5);  → solo se aceptan un string o una tupla [string, number].
  // c.agregar(['pan', '2']);  → la cantidad de la tupla debe ser number.

EXPLICA
  ¿Para qué sirve typeof item === 'string' dentro de agregar?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 49 — Reporte escolar por promedio
/*
SITUACIÓN
  Un registro escolar es una lista de tuplas [alumno, materia, nota]. Las notas
  fuera de 0–100 son errores de captura y se ignoran. Con las válidas se
  calcula el promedio de cada alumno y se le asigna un estado.

QUÉ DEBES HACER
  1. Dentro de la función del ejercicio crea
     enum Estado { Reprobado, Aprobado, Honor } y
     type Registro = [string, string, number].
  2. Crea const estadoDe = (promedio: number): Estado: devuelve Estado.Honor si
     promedio es 90 o más; Estado.Aprobado si es 60 o más; Estado.Reprobado en
     cualquier otro caso.
  3. Crea const reporteEscolar = (registros: Registro[]): string[]:
     a) declara const notas: Record<string, number[]> = {};
     b) recorre registros con for (const [alumno, , nota] of registros); si
        nota es menor que 0 o mayor que 100, la ignoras; si no, obtén
        const lista = notas[alumno]: si es undefined, asigna notas[alumno] =
        [nota]; si no, agrega nota a lista con push;
     c) declara const lineas: string[] = []; recorre notas con
        for (const alumno in notas): obtén const lista = notas[alumno]; si no
        es undefined, suma sus notas con un for-of, calcula el promedio (suma /
        lista.length) y declara let texto: string con 'honor' si
        estadoDe(promedio) es Estado.Honor, 'aprobado' si es Estado.Aprobado o
        'reprobado' si es Estado.Reprobado;
     d) agrega a lineas '{alumno}: {promedio con toFixed(1)} {texto}' y devuelve
        lineas. Un alumno sin ninguna nota válida no aparece.
  4. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const registros: Registro[] = [['Ana', 'Mat', 90], ['Luis', 'Mat', 50], ['Ana', 'Fis', 100], ['Luis', 'Fis', 70], ['Eva', 'Mat', 59], ['Eva', 'Fis', 60], ['Zoe', 'Mat', 120], ['Zoe', 'Fis', -1], ['Max', 'Mat', 90], ['Max', 'Fis', 90]];
  console.log(reporteEscolar(registros).join(' | ')); // 'Ana: 95.0 honor | Luis: 60.0 aprobado | Eva: 59.5 reprobado | Max: 90.0 honor'
  console.log(reporteEscolar([['Zoe', 'Mat', 101]])); // []
  console.log(reporteEscolar([['Ivo', 'Mat', 0]])); // [ 'Ivo: 0.0 reprobado' ]
  console.log(reporteEscolar([])); // []
  console.log(estadoDe(89.9) === Estado.Aprobado); // true

ESTO DEBE FALLAR
  // reporteEscolar([['Ana', 90, 'Mat']]);  → el orden de los tipos es string, string, number.
  // const e: Estado = 'Honor';  → un string no es un valor del enum.

EXPLICA
  ¿Por qué un alumno sin notas válidas no debe aparecer con promedio 0?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 50 — Cafetería con pedidos, extras y clientes
/*
SITUACIÓN
  Una cafetería cobra pedidos con precio base según el producto, un incremento
  por tamaño y un cargo por cada extra. Acumula lo que gasta cada cliente y
  puede cobrar varios pedidos de una vez. Es el ejercicio que integra todo: let
  y const, desestructuración, for-of, for-in, typeof, tuplas, enum, opcionales,
  Rest y clases.

QUÉ DEBES HACER
  1. Dentro de la función del ejercicio crea enum Tamano { Chico = 1,
     Mediano = 2, Grande = 3 } y
     type Pedido = { cliente: string; producto: string; tamano: Tamano;
     extras?: string[] }.
  2. Crea la clase Cafeteria. Su constructor recibe, en este orden, nombre
     (string, public) y precios (Record<string, number>, public). Declara además
     ventas: Record<string, number> = {}.
  3. En Cafeteria crea cobrar(pedido: Pedido): number | string:
     a) extrae con desestructuración const { cliente, producto, tamano,
        extras } = pedido;
     b) obtén const base = this.precios[producto]; si es undefined, devuelve
        '{producto}: no existe' sin registrar nada;
     c) declara let total: number = base; si tamano es Tamano.Mediano suma 10;
        si es Tamano.Grande suma 20;
     d) si extras no es undefined, recórrelos con for-of y suma 5 por cada
        extra que no sea '';
     e) suma total a this.ventas[cliente] ((this.ventas[cliente] || 0) más
        total) y devuelve total.
  4. En Cafeteria crea cobrarVarios(...pedidos: Pedido[]): number: recorre
     pedidos con for-of, llama a this.cobrar(pedido) y, solo si typeof del
     resultado es 'number', lo suma. Devuelve la suma.
  5. En Cafeteria crea mejorCliente(): string: con for-in busca el cliente con
     mayor total (en un empate gana el primero registrado) y devuelve
     '{cliente}: {total}', o 'sin ventas' si no hay ninguno.
  6. Fuera de la clase crea las instancias y ejecuta COMPRUEBA, en orden.

COMPRUEBA
  const c = new Cafeteria('Aroma', { cafe: 30, te: 25 });
  console.log(c.cobrar({ cliente: 'Ana', producto: 'cafe', tamano: Tamano.Chico })); // 30
  console.log(c.cobrar({ cliente: 'Ana', producto: 'cafe', tamano: Tamano.Grande, extras: ['leche', 'canela'] })); // 60
  console.log(c.cobrar({ cliente: 'Luis', producto: 'te', tamano: Tamano.Mediano, extras: [] })); // 35
  console.log(c.cobrar({ cliente: 'Luis', producto: 'pizza', tamano: Tamano.Chico })); // 'pizza: no existe'
  console.log(c.cobrar({ cliente: 'Luis', producto: 'te', tamano: Tamano.Chico, extras: ['', 'miel'] })); // 30
  console.log(c.mejorCliente()); // 'Ana: 90'
  console.log(c.cobrarVarios({ cliente: 'Eva', producto: 'cafe', tamano: Tamano.Chico }, { cliente: 'Eva', producto: 'pizza', tamano: Tamano.Chico }, { cliente: 'Eva', producto: 'te', tamano: Tamano.Grande })); // 75
  console.log(c.mejorCliente()); // 'Ana: 90'
  console.log(c.cobrarVarios()); // 0
  const otra = new Cafeteria('Brisa', { cafe: 40 });
  console.log(otra.mejorCliente()); // 'sin ventas'
  console.log(otra.cobrar({ cliente: 'Zoe', producto: 'cafe', tamano: Tamano.Chico })); // 40
  console.log(otra.cobrar({ cliente: 'Max', producto: 'cafe', tamano: Tamano.Chico })); // 40
  console.log(otra.mejorCliente()); // 'Zoe: 40'
  console.log(c.mejorCliente()); // 'Ana: 90'

ESTO DEBE FALLAR
  // c.cobrar({ cliente: 'Ana', producto: 'cafe', tamano: 'Chico' });  → tamano debe ser un valor de Tamano.
  // c.cobrarVarios([]);  → cobrarVarios recibe pedidos sueltos, no un array.

EXPLICA
  ¿Por qué cobrar devuelve number | string y qué hace cobrarVarios con cada tipo?
*/
(() => {
    // Tu solución.
})();
