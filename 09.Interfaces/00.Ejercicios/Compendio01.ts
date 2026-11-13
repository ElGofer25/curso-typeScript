/*
COMPENDIO 01 — INTERFACES
50 ejercicios con dificultad creciente. Cada tramo empieza con una subsección y va
sumando las anteriores y los conocimientos de secciones previas del curso.

SUBSECCIONES QUE SE EJERCITAN
  01 Interfaces básicas ...... interface, propiedades obligatorias y opcionales, arrays,
                               tipado estructural, propiedades sobrantes, ?? y undefined
  02 Interfaces complejas .... una interface dentro de otra, objeto opcional, ?. y ??
  03 Métodos en interfaces ... métodos con parámetros y retorno, this, métodos y funciones
                               opcionales (?.()), void frente a string
  04 Interfaces en clases .... class ... implements (una o varias), miembros públicos
  05 Interfaces de funciones . firma de llamada: interface con (a: T): R

PROGRESIÓN
  Ejercicios   Tema principal                          Se suma
  01–08        01 Interfaces básicas                   arrays, Record, for...of, for...in
  09–15        02 Interfaces complejas                 01 + objetos anidados y opcionales
  16–23        03 Métodos en interfaces                01 y 02 + this y callbacks
  24–31        04 Interfaces en clases                 01 a 03 + clases (08): private, extends
  32–38        05 Interfaces de funciones              parámetros opcionales, por defecto y rest
  39–50        Integración de 01 a 05                  enum, tuplas, get/set, abstract, static,
                                                       private constructor, readonly, uniones

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN: te dice qué se está modelando.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta.
  3. Copia las líneas de COMPRUEBA dentro de la función del ejercicio, después de tu
     solución. Antes de ejecutar, predice qué saldrá: el resultado esperado está
     después de //.
  4. Si hay líneas en ESTO DEBE FALLAR, pruébalas una por una: descomenta, comprueba
     que TypeScript marca error y vuelve a comentarla.
  5. Responde EXPLICA en un comentario bajo tu solución.

VOCABULARIO DE LOS ENUNCIADOS
  «contrato» = interface · «obligatorio» = sin ? · «opcional» = con ?.
  «Supón» = el dato ya es válido; no lo compruebes.
  «Rechaza» = devuelve false (o undefined, según el paso) y no cambia nada.
  «Recorre» = usa for...of, salvo que el paso diga for...in o un for clásico.
  {llaves} en un texto = valor que sustituyes; las llaves no se escriben.
  En COMPRUEBA, un resultado entre comillas simples es un texto: console.log lo imprime
  sin las comillas. Los arrays y los objetos se escriben como los muestra Node.

REGLAS COMUNES
  - Cada ejercicio va dentro de su función (() => { ... })(); son independientes, así que
    puedes repetir nombres. Los contratos, las clases y las funciones que pide el
    enunciado se declaran dentro de esa función, con los nombres exactos indicados.
  - Los contratos se declaran con interface. Pon tipos a parámetros y retornos.
    No uses any, as ni el operador ! (aserción de no nulo).
  - El proyecto compila con strict, exactOptionalPropertyTypes y noUncheckedIndexedAccess:
    una propiedad opcional se omite, no se le asigna undefined; y leer lista[i] o
    registro[clave] puede dar undefined, así que debes tratarlo.
  - Una función que consulta no modifica sus argumentos. Imprimir no sustituye a devolver.
  - Una operación que cambia datos y devuelve boolean: true si acepta; false si rechaza,
    y entonces no cambia nada ni lanza errores.
  - Puedes usar los métodos habituales de arrays y textos (push, join, includes, slice,
    trim, toFixed...). Si un paso nombra un método (splice, shift, indexOf, split,
    padStart, Number.isInteger, Object.hasOwn...), úsalo.
  - Los resultados de COMPRUEBA suponen que ejecutas las líneas en el orden en que están
    escritas, dentro de la misma función.
  - PROHIBIDO por no haberse visto: interface que extienda a otra interface, firmas de
    índice dentro de una interface ([clave: string]: ...), readonly dentro de una
    interface, genéricos propios (<T>), namespaces, import y export, async y Promise,
    try y catch, decoradores y declarar dos veces la misma interface.
  - No hay soluciones incluidas.
*/

// TRAMO 1 — 01 INTERFACES BÁSICAS: EJERCICIOS 01 AL 08

// !EJERCICIO 01 — Resumen de un producto
/*
SITUACIÓN
  Una papelería muestra sus productos en una lista. Cada producto tiene nombre,
  precio, etiquetas y, a veces, una descripción.

QUÉ DEBES HACER
  1. Crea la interface Producto con: nombre (string), precio (number),
     etiquetas (string[]) y descripcion (string, opcional).
  2. Crea la función resumen(p: Producto): string:
     a) empieza con '{nombre}: {precio}';
     b) si etiquetas tiene al menos un elemento, agrega ' [{etiquetas}]' con las
        etiquetas unidas por ', ' (usa join); si está vacía, no agregues nada;
     c) agrega ' | ' y la descripción; si el producto no tiene descripción, agrega
        'Sin descripción' (usa ??);
     d) devuelve el texto completo.
  3. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const cuaderno: Producto = { nombre: 'Cuaderno', precio: 45, etiquetas: ['Papelería', 'Escuela'] };
  const lapiz: Producto = { nombre: 'Lápiz', precio: 5, etiquetas: [], descripcion: 'HB' };
  const goma: Producto = { nombre: 'Goma', precio: 8, etiquetas: [], descripcion: '' };
  console.log(resumen(cuaderno)); // 'Cuaderno: 45 [Papelería, Escuela] | Sin descripción'
  console.log(resumen(lapiz));    // 'Lápiz: 5 | HB'
  console.log(resumen(goma));     // 'Goma: 8 | '

ESTO DEBE FALLAR
  // const malo1: Producto = { nombre: 'Regla', precio: '12', etiquetas: [] };  → precio debe ser number.
  // const malo2: Producto = { nombre: 'Regla', precio: 12 };  → falta etiquetas, que es obligatoria.
  // const malo3: Producto = { nombre: 'Regla', precio: 12, etiquetas: [], descripcion: undefined };  → una propiedad opcional se omite; no se le asigna undefined.

EXPLICA
  ¿Por qué la goma muestra una descripción vacía y no 'Sin descripción'?
  ¿Qué cambiaría en el paso c) si usaras el operador || en lugar de ??
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 02 — Total de una línea de compra
/*
SITUACIÓN
  Una tienda calcula el total de cada línea de una compra. Hay descuento automático
  por cantidad, pero el vendedor puede fijar un descuento manual que lo sustituye,
  incluso si ese descuento manual es 0.

QUÉ DEBES HACER
  1. Crea la interface Linea con: producto (string), cantidad (number),
     precioUnitario (number) y descuentoManual (number, opcional).
  2. Crea la función totalLinea(l: Linea): number. Supón cantidad entero > 0,
     precioUnitario > 0 y descuentoManual entre 0 y 100:
     a) calcula subtotal = cantidad * precioUnitario;
     b) calcula el porcentaje: si existe descuentoManual, úsalo (aunque sea 0);
        si no existe, usa 10 cuando cantidad es 10 o más, 5 cuando es 5 o más
        (y menos de 10), y 0 cuando es menos de 5;
     c) devuelve subtotal - subtotal * porcentaje / 100.
  3. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const l4: Linea = { producto: 'Pluma', cantidad: 4, precioUnitario: 100 };
  const l5: Linea = { producto: 'Pluma', cantidad: 5, precioUnitario: 100 };
  const l10: Linea = { producto: 'Pluma', cantidad: 10, precioUnitario: 100 };
  const lCero: Linea = { producto: 'Pluma', cantidad: 10, precioUnitario: 100, descuentoManual: 0 };
  const lMitad: Linea = { producto: 'Pluma', cantidad: 2, precioUnitario: 100, descuentoManual: 50 };
  console.log(totalLinea(l4));     // 400
  console.log(totalLinea(l5));     // 475
  console.log(totalLinea(l10));    // 900
  console.log(totalLinea(lCero));  // 1000
  console.log(totalLinea(lMitad)); // 100

ESTO DEBE FALLAR
  // totalLinea({ producto: 'Pluma', cantidad: 1, precioUnitario: 10, descuento: 5 });  → un literal no puede traer la propiedad sobrante descuento.
  // const dm: number = lMitad.descuentoManual;  → la propiedad opcional puede ser undefined.

EXPLICA
  ¿Por qué lCero da 1000 y no 900? ¿Qué operador te obliga a respetar ese 0?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 03 — Carga de un camión
/*
SITUACIÓN
  Un camión admite una carga máxima. Los artículos solo necesitan tener nombre y
  peso; pueden venir de otros sistemas con más datos. Se carga en orden y se avisa
  cuál artículo hace que se pase el límite.

QUÉ DEBES HACER
  1. Crea la interface Medible con: nombre (string) y pesoKg (number).
  2. Crea la función cargaTotal(items: Medible[], limite: number): string:
     a) empieza con suma = 0;
     b) recorre items; en cada uno suma su pesoKg; si la suma pasa de limite (más
        que limite; igual al límite todavía cabe), devuelve 'Excede: {nombre}' con
        el nombre de ese artículo y termina;
     c) si el recorrido termina sin pasarse, devuelve 'Total: {suma}'.
  3. Ejecuta las líneas de COMPRUEBA. Las constantes caja y saco no declaran ningún
     tipo: se aceptan porque tienen los miembros de Medible.

COMPRUEBA
  const caja = { nombre: 'Caja', pesoKg: 8, color: 'rojo' };
  const saco = { nombre: 'Saco', pesoKg: 5, origen: 'Perú' };
  console.log(cargaTotal([caja, saco], 13)); // 'Total: 13'
  console.log(cargaTotal([caja, saco], 12)); // 'Excede: Saco'
  console.log(cargaTotal([caja], 7));        // 'Excede: Caja'
  console.log(cargaTotal([], 10));           // 'Total: 0'

ESTO DEBE FALLAR
  // cargaTotal([{ nombre: 'Bolsa', pesoKg: 2, color: 'azul' }], 10);  → el literal escrito directamente trae la propiedad sobrante color.
  // cargaTotal([{ nombre: 'Bolsa' }], 10);  → falta pesoKg.

EXPLICA
  ¿Por qué caja se acepta aunque tenga color, pero el literal con color no?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 04 — Aprobados de un grupo
/*
SITUACIÓN
  Un profesor guarda las notas de cada estudiante y quiere saber el promedio de
  cada uno y quiénes alcanzan una nota mínima. Algunos estudiantes aún no tienen notas.

QUÉ DEBES HACER
  1. Crea la interface Estudiante con: nombre (string), notas (number[]) y
     correo (string, opcional).
  2. Crea la función promedio(e: Estudiante): number: devuelve la suma de las notas
     dividida entre la cantidad de notas; si no hay notas, devuelve 0.
  3. Crea la función aprobados(lista: Estudiante[], minimo: number): string[]:
     a) crea una lista vacía de nombres;
     b) recorre lista; si el estudiante no tiene notas, pasa al siguiente (nunca
        aprueba, ni siquiera con minimo 0);
     c) si promedio(estudiante) es mayor o igual que minimo, agrega su nombre;
     d) devuelve la lista de nombres, en el orden original.
  4. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const ana: Estudiante = { nombre: 'Ana', notas: [8, 10] };
  const luis: Estudiante = { nombre: 'Luis', notas: [7, 8], correo: 'luis@mail.com' };
  const eva: Estudiante = { nombre: 'Eva', notas: [] };
  const lista: Estudiante[] = [ana, luis, eva];
  console.log(promedio(ana));          // 9
  console.log(promedio(luis));         // 7.5
  console.log(promedio(eva));          // 0
  console.log(aprobados(lista, 8));    // [ 'Ana' ]
  console.log(aprobados(lista, 7.5));  // [ 'Ana', 'Luis' ]
  console.log(aprobados(lista, 0));    // [ 'Ana', 'Luis' ]
  console.log(aprobados([], 5));       // []

ESTO DEBE FALLAR
  // const x = new Estudiante();  → una interface solo es un tipo; no se puede usar con new.
  // console.log(lista[0].nombre);  → lista[0] puede ser undefined (noUncheckedIndexedAccess).

EXPLICA
  ¿Por qué no existe new Estudiante() si Estudiante describe objetos? ¿Qué debes hacer
  para leer lista[0] con seguridad?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 05 — Choques de reservas
/*
SITUACIÓN
  Una oficina reserva salas por horas. Dos reservas chocan si son de la misma sala
  y sus horarios se solapan; si una termina justo cuando empieza la otra, no chocan.

QUÉ DEBES HACER
  1. Crea la interface Reserva con: sala (string), horaInicio (number),
     horaFin (number) y responsable (string, opcional). Supón horaInicio < horaFin.
  2. Crea la función etiqueta(r: Reserva): string que devuelve
     '{sala} {horaInicio}-{horaFin} ({responsable})'; si no hay responsable, escribe
     'sin responsable' dentro del paréntesis (usa ??).
  3. Crea la función choca(a: Reserva, b: Reserva): boolean: true solo si ambas
     tienen la misma sala Y a.horaInicio < b.horaFin Y b.horaInicio < a.horaFin.
  4. Crea la función buscarConflicto(nueva: Reserva, existentes: Reserva[]):
     string | undefined: recorre existentes en orden; con la primera que choque
     con nueva devuelve su etiqueta(...) y termina; si ninguna choca, devuelve undefined.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const r1: Reserva = { sala: 'A', horaInicio: 9, horaFin: 11, responsable: 'Ana' };
  const r2: Reserva = { sala: 'A', horaInicio: 11, horaFin: 12 };
  const r3: Reserva = { sala: 'A', horaInicio: 10, horaFin: 12 };
  const r4: Reserva = { sala: 'B', horaInicio: 10, horaFin: 12 };
  console.log(choca(r1, r2));  // false  (r1 termina cuando empieza r2)
  console.log(choca(r1, r3));  // true
  console.log(choca(r1, r4));  // false  (otra sala)
  console.log(choca(r3, r3));  // true
  console.log(etiqueta(r2));   // 'A 11-12 (sin responsable)'
  console.log(buscarConflicto(r3, [r4, r1, r2])); // 'A 9-11 (Ana)'
  console.log(buscarConflicto(r2, [r1, r4]));     // undefined

ESTO DEBE FALLAR
  // const malo: Reserva = { sala: 'A', horaInicio: 9, horaFin: 10, responsable: undefined };  → con exactOptionalPropertyTypes no se asigna undefined.
  // const quien: string = r2.responsable;  → responsable puede ser undefined.

EXPLICA
  ¿Por qué choca(r1, r2) es false si las reservas se tocan en la hora 11? ¿Qué operador
  cambiarías si quisieras que se tocaran y sí chocaran?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 06 — Tareas pendientes
/*
SITUACIÓN
  Una aplicación de tareas resume lo que falta por hacer: cuántas tareas siguen
  pendientes, cuál es la más urgente y cuántas notas tienen en total.

QUÉ DEBES HACER
  1. Crea la interface Tarea con: titulo (string), prioridad (number; un número
     mayor es más urgente), hecha (boolean) y notas (string[], opcional).
  2. Crea la función resumenPendientes(tareas: Tarea[]): string:
     a) crea pendientes = 0, totalNotas = 0 y urgente (guardará la tarea pendiente
        más urgente; al inicio, undefined);
     b) recorre tareas; ignora las que tengan hecha en true;
     c) en cada pendiente suma 1 a pendientes; suma la cantidad de elementos de
        notas a totalNotas (si no tiene notas, suma 0); y reemplaza urgente solo si
        todavía es undefined o si su prioridad es mayor (no igual) que la de urgente;
     d) si pendientes es 0, devuelve 'Sin pendientes';
     e) si no, devuelve '{pendientes} pendientes; urgente: {titulo}; notas: {totalNotas}'
        con el titulo de la tarea guardada en urgente.
  3. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const t1: Tarea = { titulo: 'Comprar', prioridad: 2, hecha: false, notas: ['leche', 'pan'] };
  const t2: Tarea = { titulo: 'Pagar', prioridad: 5, hecha: false };
  const t3: Tarea = { titulo: 'Llamar', prioridad: 5, hecha: false, notas: ['tarde'] };
  const t4: Tarea = { titulo: 'Lavar', prioridad: 9, hecha: true, notas: ['x'] };
  console.log(resumenPendientes([t1, t2, t3, t4])); // '3 pendientes; urgente: Pagar; notas: 3'
  console.log(resumenPendientes([t4]));             // 'Sin pendientes'
  console.log(resumenPendientes([]));               // 'Sin pendientes'
  console.log(resumenPendientes([t3, t2]));         // '2 pendientes; urgente: Llamar; notas: 1'

ESTO DEBE FALLAR
  // t2.notas.push('nueva');  → notas es opcional y puede ser undefined.
  // const malo: Tarea = { titulo: 'X', prioridad: 1, hecha: 'no' };  → hecha debe ser boolean.

EXPLICA
  ¿Por qué gana Pagar y no Llamar entre dos tareas con prioridad 5? ¿Qué pasa con t4,
  que tiene la prioridad más alta?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 07 — Inventario de ferretería
/*
SITUACIÓN
  Una ferretería guarda sus artículos en una lista. Se pueden agregar artículos
  nuevos, retirar unidades y calcular cuánto vale todo lo almacenado. Las operaciones
  inválidas se rechazan sin tocar el inventario.

QUÉ DEBES HACER
  1. Crea la interface Articulo con: codigo (string), nombre (string), stock (number)
     y precio (number).
  2. Crea la función agregar(inventario: Articulo[], a: Articulo): boolean. Rechaza
     (false, sin agregar) si ya hay un artículo con el mismo codigo, si precio es 0
     o menos, o si stock es menor que 0 (un stock de 0 sí se acepta). Si no, agrega
     a al final de inventario y devuelve true.
  3. Crea la función retirar(inventario: Articulo[], codigo: string, cantidad: number):
     boolean:
     a) busca con for...of el artículo con ese codigo; si no existe, devuelve false;
     b) rechaza (false) si cantidad es 0 o menos, o si cantidad es mayor que su stock
        (retirar justo todo el stock sí se acepta);
     c) si no, resta cantidad a su stock y devuelve true.
  4. Crea la función valorTotal(inventario: Articulo[]): number: suma stock * precio
     de todos los artículos.
  5. Ejecuta las líneas de COMPRUEBA, en este orden y sobre el mismo inventario.

COMPRUEBA
  const inv: Articulo[] = [];
  console.log(agregar(inv, { codigo: 'A1', nombre: 'Tornillo', stock: 10, precio: 2 })); // true
  console.log(agregar(inv, { codigo: 'A1', nombre: 'Otro', stock: 1, precio: 1 }));      // false  (código repetido)
  console.log(agregar(inv, { codigo: 'B1', nombre: 'Tuerca', stock: 5, precio: 0 }));    // false  (precio 0)
  console.log(agregar(inv, { codigo: 'B3', nombre: 'Lija', stock: -1, precio: 1 }));     // false  (stock negativo)
  console.log(agregar(inv, { codigo: 'B2', nombre: 'Clavo', stock: 0, precio: 3 }));     // true   (stock 0 es válido)
  console.log(agregar(inv, { codigo: 'C1', nombre: 'Taladro', stock: 4, precio: 5 }));   // true
  console.log(valorTotal(inv));        // 40
  console.log(retirar(inv, 'A1', 3));  // true
  console.log(retirar(inv, 'A1', 8));  // false  (solo quedan 7)
  console.log(retirar(inv, 'Z9', 1));  // false  (no existe)
  console.log(retirar(inv, 'C1', 0));  // false
  console.log(retirar(inv, 'C1', 4));  // true   (justo todo el stock)
  console.log(valorTotal(inv));        // 14
  console.log(inv.length);             // 3

ESTO DEBE FALLAR
  // agregar(inv, { codigo: 'D1', nombre: 'Arandela', stock: 1 });  → falta precio.
  // inv.push('A1');  → un texto no es un Articulo.

EXPLICA
  ¿Qué comprobaciones haces antes de modificar algo, y por qué ese orden evita que un
  rechazo deje el inventario a medias?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 08 — Promedios por materia
/*
SITUACIÓN
  Una escuela guarda calificaciones sueltas (alumno, materia y nota) y quiere el
  promedio de cada materia y saber cuál es la mejor. Los resultados se guardan en un
  objeto cuyas claves son los nombres de las materias.

QUÉ DEBES HACER
  1. Crea la interface Calificacion con: alumno (string), materia (string) y
     nota (number).
  2. Crea la función promediosPorMateria(cals: Calificacion[]): Record<string, number>:
     a) crea sumas y cuentas, ambos de tipo Record<string, number> y vacíos ({});
     b) recorre cals con for...of; en cada calificación suma la nota en
        sumas[materia] y suma 1 en cuentas[materia]; como una lectura puede ser
        undefined, usa (sumas[materia] ?? 0) y (cuentas[materia] ?? 0) al sumar;
     c) crea resultado, de tipo Record<string, number> y vacío;
     d) recorre sumas con for...in; para cada materia guarda en
        resultado[materia] el valor (sumas[materia] ?? 0) / (cuentas[materia] ?? 1);
     e) devuelve resultado.
  3. Crea la función mejorMateria(promedios: Record<string, number>): string:
     recorre promedios con for...in y devuelve el nombre de la materia con mayor
     promedio; si hay empate, la primera que aparezca en el recorrido; si el objeto
     está vacío, devuelve 'Ninguna'.
  4. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const datos: Calificacion[] = [
      { alumno: 'Ana', materia: 'Mate', nota: 8 },
      { alumno: 'Luis', materia: 'Mate', nota: 10 },
      { alumno: 'Ana', materia: 'Historia', nota: 7 },
      { alumno: 'Luis', materia: 'Historia', nota: 9 },
      { alumno: 'Ana', materia: 'Arte', nota: 9 },
  ];
  console.log(promediosPorMateria(datos));                  // { Mate: 9, Historia: 8, Arte: 9 }
  console.log(mejorMateria(promediosPorMateria(datos)));    // 'Mate'  (empata con Arte; gana la primera)
  console.log(promediosPorMateria([]));                     // {}
  console.log(mejorMateria({}));                            // 'Ninguna'

ESTO DEBE FALLAR
  // const p = promediosPorMateria(datos); p.Mate = 'alto';  → los valores son number.
  // const c: Calificacion = { alumno: 'Ana', materia: 'Mate' };  → falta nota.

EXPLICA
  ¿Por qué hace falta ?? al leer sumas[materia]? ¿Qué valor tiene sumas[materia] la
  primera vez que aparece una materia?
*/
(() => {
    // Tu solución.
})();

// TRAMO 2 — 02 INTERFACES COMPLEJAS (objetos dentro de objetos): EJERCICIOS 09 AL 15

// !EJERCICIO 09 — Etiqueta de envío
/*
SITUACIÓN
  Una tienda en línea envía paquetes a sus clientes. La dirección del cliente es
  opcional: quien no la tiene recoge en tienda. Cuando existe, es un objeto con ciudad
  y código postal.

QUÉ DEBES HACER
  1. Crea la interface Direccion con: ciudad (string) y codigoPostal (string).
  2. Crea la interface Cliente con: nombre (string) y direccion (Direccion, opcional).
  3. Crea la función ciudadDe(c: Cliente): string que devuelve la ciudad del cliente;
     si no tiene dirección, devuelve 'Ciudad no registrada'. Usa ?. y ??.
  4. Crea la función etiquetaEnvio(c: Cliente): string:
     a) si el cliente no tiene dirección, devuelve '{nombre}: sin envío';
     b) si el codigoPostal no tiene exactamente 5 caracteres, devuelve
        '{nombre}: CP inválido';
     c) si no, devuelve '{nombre} - {ciudad} ({codigoPostal})'.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const ana: Cliente = { nombre: 'Ana', direccion: { ciudad: 'Puebla', codigoPostal: '72000' } };
  const luis: Cliente = { nombre: 'Luis' };
  const eva: Cliente = { nombre: 'Eva', direccion: { ciudad: '', codigoPostal: '7200' } };
  const sol: Cliente = { nombre: 'Sol', direccion: { ciudad: 'Cholula', codigoPostal: '720000' } };
  console.log(ciudadDe(ana));       // 'Puebla'
  console.log(ciudadDe(luis));      // 'Ciudad no registrada'
  console.log(ciudadDe(eva));       // ''
  console.log(etiquetaEnvio(ana));  // 'Ana - Puebla (72000)'
  console.log(etiquetaEnvio(luis)); // 'Luis: sin envío'
  console.log(etiquetaEnvio(eva));  // 'Eva: CP inválido'
  console.log(etiquetaEnvio(sol));  // 'Sol: CP inválido'  (6 caracteres tampoco es válido)

ESTO DEBE FALLAR
  // const malo: Cliente = { nombre: 'Sol', direccion: { ciudad: 'Cholula' } };  → que direccion sea opcional no vuelve opcional codigoPostal: falta.
  // console.log(luis.direccion.ciudad);  → direccion puede ser undefined.

EXPLICA
  ¿Por qué ciudadDe(eva) devuelve un texto vacío y no 'Ciudad no registrada'?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 10 — Ubicación de la casa matriz
/*
SITUACIÓN
  Un directorio de empresas guarda, si se conoce, la ubicación geográfica de la casa
  matriz. Hay tres niveles de objetos, y cualquiera de los dos últimos puede faltar.

QUÉ DEBES HACER
  1. Crea la interface Coordenada con: lat (number) y lng (number).
  2. Crea la interface Sucursal con: nombre (string) y ubicacion (Coordenada, opcional).
  3. Crea la interface Empresa con: razon (string) y matriz (Sucursal, opcional).
  4. Crea la función ubicacionMatriz(e: Empresa): string:
     a) obtén la ubicación con e.matriz?.ubicacion;
     b) si es undefined, devuelve 'Sin ubicación';
     c) si no, devuelve '{lat},{lng}'.
  5. Crea la función hemisferio(e: Empresa): string:
     a) obtén la latitud con e.matriz?.ubicacion?.lat;
     b) si es undefined, devuelve 'Desconocido';
     c) si es mayor que 0, devuelve 'Norte'; si es menor que 0, 'Sur'; si es 0, 'Ecuador'.
     No uses || para comprobar que existe: la latitud 0 sí existe.
  6. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const e1: Empresa = { razon: 'Alfa', matriz: { nombre: 'Central', ubicacion: { lat: 19.4, lng: -99.1 } } };
  const e2: Empresa = { razon: 'Beta', matriz: { nombre: 'Austral', ubicacion: { lat: -33.4, lng: -70.6 } } };
  const e3: Empresa = { razon: 'Gama', matriz: { nombre: 'Línea', ubicacion: { lat: 0, lng: 10 } } };
  const e4: Empresa = { razon: 'Delta', matriz: { nombre: 'Sin GPS' } };
  const e5: Empresa = { razon: 'Épsilon' };
  console.log(ubicacionMatriz(e1)); // '19.4,-99.1'
  console.log(ubicacionMatriz(e3)); // '0,10'
  console.log(ubicacionMatriz(e4)); // 'Sin ubicación'
  console.log(ubicacionMatriz(e5)); // 'Sin ubicación'
  console.log(hemisferio(e1));      // 'Norte'
  console.log(hemisferio(e2));      // 'Sur'
  console.log(hemisferio(e3));      // 'Ecuador'
  console.log(hemisferio(e4));      // 'Desconocido'
  console.log(hemisferio(e5));      // 'Desconocido'

ESTO DEBE FALLAR
  // const malo: Empresa = { razon: 'Z', matriz: { nombre: 'M', ubicacion: { lat: 1 } } };  → falta lng en el nivel más profundo.
  // console.log(e1.matriz.nombre);  → matriz puede ser undefined.

EXPLICA
  ¿Qué devuelve e5.matriz?.ubicacion?.lat y por qué no lanza error aunque no exista matriz?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 11 — Recibo de un pedido con envío
/*
SITUACIÓN
  Un pedido contiene una lista de artículos y, si el cliente quiere envío a domicilio,
  una dirección. El costo de envío depende de si hay dirección, del total y de la ciudad.

QUÉ DEBES HACER
  1. Crea la interface Direccion con: ciudad (string) y codigoPostal (string).
  2. Crea la interface Articulo con: nombre (string), cantidad (number) y
     precio (number).
  3. Crea la interface Pedido con: cliente (string), direccion (Direccion, opcional)
     y articulos (Articulo[]).
  4. Crea la función totalPedido(p: Pedido): number: suma cantidad * precio de cada
     artículo (recorre con for...of); un pedido sin artículos suma 0.
  5. Crea la función costoEnvio(p: Pedido): number, evaluando en este orden:
     a) si no hay dirección, devuelve 0;
     b) si totalPedido(p) es 500 o más, devuelve 0;
     c) si la ciudad es exactamente 'Puebla', devuelve 50;
     d) en cualquier otro caso, devuelve 90.
  6. Crea la función recibo(p: Pedido): string que devuelve
     '{cliente}: {total} + {envío} = {total más envío}'.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const p1: Pedido = { cliente: 'Ana', direccion: { ciudad: 'Puebla', codigoPostal: '72000' }, articulos: [{ nombre: 'Lámpara', cantidad: 2, precio: 120 }] };
  const p2: Pedido = { cliente: 'Luis', direccion: { ciudad: 'Oaxaca', codigoPostal: '68000' }, articulos: [{ nombre: 'Mesa', cantidad: 1, precio: 500 }] };
  const p3: Pedido = { cliente: 'Eva', direccion: { ciudad: 'Oaxaca', codigoPostal: '68000' }, articulos: [{ nombre: 'Silla', cantidad: 3, precio: 100 }] };
  const p4: Pedido = { cliente: 'Sol', articulos: [{ nombre: 'Libro', cantidad: 1, precio: 80 }] };
  const p5: Pedido = { cliente: 'Ivo', direccion: { ciudad: 'Puebla', codigoPostal: '72100' }, articulos: [] };
  console.log(recibo(p1)); // 'Ana: 240 + 50 = 290'
  console.log(recibo(p2)); // 'Luis: 500 + 0 = 500'
  console.log(recibo(p3)); // 'Eva: 300 + 90 = 390'
  console.log(recibo(p4)); // 'Sol: 80 + 0 = 80'
  console.log(recibo(p5)); // 'Ivo: 0 + 50 = 50'

ESTO DEBE FALLAR
  // const malo1: Pedido = { cliente: 'X', articulos: [{ nombre: 'Y', cantidad: 1 }] };  → al artículo le falta precio.
  // const malo2: Pedido = { cliente: 'X', articulos: [], direccion: 'Puebla' };  → direccion debe ser un objeto Direccion, no un texto.

EXPLICA
  ¿Qué decide que p2 pague 0 de envío aunque su dirección sea de otra ciudad? ¿Y p4?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 12 — Clientes agrupados por ciudad
/*
SITUACIÓN
  Una empresa de mensajería agrupa a sus clientes por ciudad para planear rutas. Los
  clientes sin dirección no pertenecen a ninguna ruta y se listan aparte.

QUÉ DEBES HACER
  1. Crea la interface Direccion con: ciudad (string) y codigoPostal (string).
  2. Crea la interface Cliente con: nombre (string) y direccion (Direccion, opcional).
  3. Crea la función agruparNombres(clientes: Cliente[]): Record<string, string[]>:
     a) crea grupos, de tipo Record<string, string[]> y vacío ({});
     b) recorre clientes con for...of; toma la ciudad con c.direccion?.ciudad; si es
        undefined, pasa al siguiente cliente;
     c) toma nombres = grupos[ciudad]; si es undefined, asígnale un arreglo vacío y
        guárdalo en grupos[ciudad];
     d) agrega el nombre del cliente a nombres;
     e) devuelve grupos.
  4. Crea la función sinDireccion(clientes: Cliente[]): string[]: devuelve los
     nombres de los clientes que no tienen dirección, en el orden original.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const lista: Cliente[] = [
      { nombre: 'Ana', direccion: { ciudad: 'Puebla', codigoPostal: '72000' } },
      { nombre: 'Luis' },
      { nombre: 'Eva', direccion: { ciudad: 'Oaxaca', codigoPostal: '68000' } },
      { nombre: 'Ivo', direccion: { ciudad: 'Puebla', codigoPostal: '72100' } },
      { nombre: 'Sol' },
  ];
  console.log(agruparNombres(lista)); // { Puebla: [ 'Ana', 'Ivo' ], Oaxaca: [ 'Eva' ] }
  console.log(sinDireccion(lista));   // [ 'Luis', 'Sol' ]
  console.log(agruparNombres([]));    // {}
  console.log(sinDireccion([]));      // []

ESTO DEBE FALLAR
  // const g = agruparNombres(lista); g.Puebla.push('Zoe');  → g.Puebla puede ser undefined (noUncheckedIndexedAccess).
  // const malo: Cliente[] = [{ nombre: 'Ana', direccion: { ciudad: 'Puebla', codigoPostal: 72000 } }];  → codigoPostal debe ser texto.

EXPLICA
  ¿Para qué sirve el paso c)? ¿Qué pasaría con grupos[ciudad].push(...) la primera vez
  que aparece una ciudad?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 13 — Préstamos en una biblioteca
/*
SITUACIÓN
  Una biblioteca tiene estantes, cada estante tiene libros y cada libro puede estar
  prestado. Se quiere un reporte de los préstamos según los días que les quedan.

QUÉ DEBES HACER
  1. Crea la interface Prestamo con: socio (string) y diasRestantes (number; puede
     ser negativo si el préstamo ya venció).
  2. Crea la interface Libro con: titulo (string), paginas (number) y
     prestamo (Prestamo, opcional).
  3. Crea la interface Estante con: rotulo (string) y libros (Libro[]).
  4. Crea la interface Biblioteca con: nombre (string) y estantes (Estante[]).
  5. Crea la función reporte(b: Biblioteca): string[]:
     a) crea una lista vacía de textos;
     b) recorre los estantes y, dentro, los libros (dos for...of anidados);
     c) si el libro no tiene prestamo, pasa al siguiente;
     d) si diasRestantes es menor que 0, agrega '{titulo}: vencido hace {días} días',
        con los días en positivo (por ejemplo, -3 se escribe 3);
     e) si diasRestantes es 0, agrega '{titulo}: vence hoy';
     f) si es mayor que 0, agrega '{titulo}: {socio}, {diasRestantes} días';
     g) devuelve la lista, en el orden en que aparecen los libros.
  6. Crea la función disponibles(b: Biblioteca): number: cuenta los libros que no
     tienen prestamo en toda la biblioteca.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const bib: Biblioteca = {
      nombre: 'Central',
      estantes: [
          { rotulo: 'A', libros: [
              { titulo: 'Dune', paginas: 600, prestamo: { socio: 'Ana', diasRestantes: 5 } },
              { titulo: 'Emma', paginas: 300 },
          ] },
          { rotulo: 'B', libros: [] },
          { rotulo: 'C', libros: [
              { titulo: 'Ulises', paginas: 900, prestamo: { socio: 'Luis', diasRestantes: -3 } },
              { titulo: 'Heidi', paginas: 200, prestamo: { socio: 'Eva', diasRestantes: 0 } },
          ] },
      ],
  };
  const vacia: Biblioteca = { nombre: 'Vacía', estantes: [] };
  console.log(reporte(bib).join(' | ')); // 'Dune: Ana, 5 días | Ulises: vencido hace 3 días | Heidi: vence hoy'
  console.log(disponibles(bib));         // 1
  console.log(reporte(vacia).length);    // 0
  console.log(disponibles(vacia));       // 0

ESTO DEBE FALLAR
  // const malo1: Libro = { titulo: 'X', paginas: 1, prestamo: { socio: 'Ana' } };  → al préstamo le falta diasRestantes.
  // const malo2: Estante = { rotulo: 'D' };  → falta libros.

EXPLICA
  ¿Por qué el estante B no produce ninguna línea ni da error al recorrerlo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 14 — Crear un cliente con dirección opcional
/*
SITUACIÓN
  Un formulario de registro recibe el nombre del cliente y, si el cliente quiere
  envíos, su ciudad y código postal. Solo si llegan ambos datos completos se crea la
  dirección; en otro caso el cliente se crea sin la propiedad direccion.

QUÉ DEBES HACER
  1. Crea la interface Direccion con: ciudad (string) y codigoPostal (string).
  2. Crea la interface Cliente con: nombre (string) y direccion (Direccion, opcional).
  3. Crea la función crearCliente(nombre: string, ciudad?: string,
     codigoPostal?: string): Cliente:
     a) si ciudad y codigoPostal se enviaron (no son undefined) y ninguno de los dos
        es un texto vacío, devuelve { nombre, direccion: { ciudad, codigoPostal } };
     b) en cualquier otro caso, devuelve { nombre } sin la propiedad direccion. No
        escribas direccion: undefined: con exactOptionalPropertyTypes no se permite.
  4. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(crearCliente('Ana', 'Puebla', '72000').direccion?.codigoPostal); // '72000'
  console.log(crearCliente('Luis'));                // { nombre: 'Luis' }
  console.log(crearCliente('Eva', 'Oaxaca'));       // { nombre: 'Eva' }
  console.log(crearCliente('Ivo', '', '68000'));    // { nombre: 'Ivo' }
  console.log(crearCliente('Sol', 'Cholula', ''));  // { nombre: 'Sol' }
  console.log(Object.hasOwn(crearCliente('Luis'), 'direccion'));            // false
  console.log(Object.hasOwn(crearCliente('Ana', 'Puebla', '72000'), 'direccion')); // true

ESTO DEBE FALLAR
  // const c: Cliente = crearCliente('Ana'); c.direccion = { ciudad: 'Puebla' };  → a la dirección le falta codigoPostal.
  // crearCliente('Ana', 'Puebla', 72000);  → codigoPostal debe ser texto.
  // crearCliente();  → nombre es obligatorio.

EXPLICA
  ¿Por qué Object.hasOwn(crearCliente('Luis'), 'direccion') es false? ¿Qué sería true si
  hubieras escrito direccion: undefined?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 15 — Validar un cliente completo
/*
SITUACIÓN
  Antes de guardar un cliente se revisa toda su estructura, incluida la dirección si
  existe. En lugar de detenerse en el primer problema, se reúnen todos los errores.

QUÉ DEBES HACER
  1. Crea la interface Direccion con: ciudad (string) y codigoPostal (string).
  2. Crea la interface Cliente con: nombre (string), edad (number, opcional) y
     direccion (Direccion, opcional).
  3. Crea la función validarCliente(c: Cliente): string[]. Crea una lista vacía de
     errores y agrega textos en este orden:
     a) si nombre tiene 0 caracteres, agrega 'Falta nombre';
     b) si edad existe y es menor que 0 o mayor que 120, agrega 'Edad fuera de rango'
        (0 y 120 son válidas; una edad que no existe no es un error);
     c) si hay dirección y su ciudad tiene 0 caracteres, agrega 'Falta ciudad';
     d) si hay dirección y su codigoPostal no tiene exactamente 5 caracteres, agrega
        'CP inválido' (solo se revisa la longitud);
     e) devuelve la lista (vacía si no hubo errores).
  4. Crea la función resumenValidacion(clientes: Cliente[]): string que devuelve
     '{válidos} válidos, {inválidos} con errores', donde un cliente es válido si
     validarCliente devuelve una lista vacía.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const ok1: Cliente = { nombre: 'Ana', edad: 0, direccion: { ciudad: 'Puebla', codigoPostal: '72000' } };
  const ok2: Cliente = { nombre: 'Sol', edad: 120 };
  const mal1: Cliente = { nombre: '', edad: 130, direccion: { ciudad: '', codigoPostal: '12' } };
  const mal2: Cliente = { nombre: 'Luis', edad: -1 };
  console.log(validarCliente(ok1).length);   // 0
  console.log(validarCliente(ok2).length);   // 0
  console.log(validarCliente(mal1).join(', ')); // 'Falta nombre, Edad fuera de rango, Falta ciudad, CP inválido'
  console.log(validarCliente(mal2).join(', ')); // 'Edad fuera de rango'
  console.log(validarCliente({ nombre: 'Eva' }).length); // 0
  console.log(validarCliente({ nombre: 'Eva', direccion: { ciudad: 'Oaxaca', codigoPostal: '680000' } }).join(', ')); // 'CP inválido'
  console.log(resumenValidacion([ok1, mal1, mal2, ok2])); // '2 válidos, 2 con errores'
  console.log(resumenValidacion([]));                     // '0 válidos, 0 con errores'

ESTO DEBE FALLAR
  // const malo1: Cliente = { nombre: 'Ana', edad: '30' };  → edad debe ser number.
  // validarCliente({ nombre: 'Ana', direccion: { ciudad: 'X', codigoPostal: '12345', pais: 'MX' } });  → el literal anidado trae la propiedad sobrante pais.

EXPLICA
  ¿Por qué una edad de 0 no cuenta como error pero -1 sí? ¿Qué pasaría con el cliente
  sin edad?
*/
(() => {
    // Tu solución.
})();

// TRAMO 3 — 03 MÉTODOS EN LAS INTERFACES: EJERCICIOS 16 AL 23

// !EJERCICIO 16 — Rectángulos con métodos
/*
SITUACIÓN
  Un programa de geometría trabaja con rectángulos. El contrato no solo pide el ancho
  y el alto: también exige que el objeto sepa calcular su propia área y su perímetro.

QUÉ DEBES HACER
  1. Crea la interface Rectangulo con: ancho (number), alto (number), el método
     area() (sin parámetros, devuelve number) y el método perimetro() (sin
     parámetros, devuelve number).
  2. Crea la función crearRectangulo(ancho: number, alto: number): Rectangulo que
     devuelve un objeto con esos dos datos y los dos métodos. Supón ancho y alto > 0.
     Dentro de los métodos usa this.ancho y this.alto:
     a) area() devuelve ancho * alto;
     b) perimetro() devuelve 2 * (ancho + alto).
  3. Crea la función mayor(a: Rectangulo, b: Rectangulo): string que compara sus
     áreas: devuelve 'Primero' si el área de a es mayor, 'Segundo' si es menor y
     'Empate' si son iguales.
  4. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const r1 = crearRectangulo(3, 4);
  const r2 = crearRectangulo(2, 6);
  const r3 = crearRectangulo(5, 1);
  console.log(r1.area());        // 12
  console.log(r1.perimetro());   // 14
  console.log(mayor(r1, r3));    // 'Primero'
  console.log(mayor(r3, r1));    // 'Segundo'
  console.log(mayor(r1, r2));    // 'Empate'
  r1.ancho = 10;
  console.log(r1.area());        // 40
  console.log(r2.area());        // 12

ESTO DEBE FALLAR
  // const malo: Rectangulo = { ancho: 1, alto: 2, area() { return 2; } };  → falta el método perimetro.
  // r1.area(5);  → area() no recibe argumentos.
  // const texto: string = r1.area();  → area() devuelve number, no string.

EXPLICA
  ¿Por qué r1.area() cambia a 40 después de r1.ancho = 10 si no volviste a crear el objeto?
  ¿A qué objeto apunta this en r2.area()?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 17 — Cuenta bancaria como objeto
/*
SITUACIÓN
  Un banco modela cada cuenta como un objeto que guarda su saldo y ofrece operaciones.
  Cada cuenta es independiente y las operaciones inválidas se rechazan sin cambiar el saldo.

QUÉ DEBES HACER
  1. Crea la interface Cuenta con: titular (string), saldo (number), el método
     depositar(monto: number): boolean, el método retirar(monto: number): boolean y
     el método resumen(): string.
  2. Crea la función crearCuenta(titular: string, saldoInicial: number): Cuenta
     (supón saldoInicial >= 0) que devuelve un objeto con esos datos y los tres
     métodos, usando this.saldo y this.titular:
     a) depositar rechaza (false) si monto es 0 o menos; si no, suma monto al saldo
        y devuelve true;
     b) retirar rechaza (false) si monto es 0 o menos, o si monto es mayor que el
        saldo (retirar justo todo el saldo sí se acepta); si no, resta monto y
        devuelve true;
     c) resumen devuelve '{titular}: {saldo}'.
  3. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const a = crearCuenta('Ana', 100);
  const b = crearCuenta('Luis', 0);
  console.log(a.depositar(50));   // true
  console.log(a.saldo);           // 150
  console.log(a.depositar(0));    // false
  console.log(a.depositar(-5));   // false
  console.log(a.retirar(200));    // false
  console.log(a.retirar(0));      // false
  console.log(a.saldo);           // 150
  console.log(a.retirar(150));    // true
  console.log(a.saldo);           // 0
  console.log(a.retirar(1));      // false
  console.log(b.resumen());       // 'Luis: 0'
  console.log(a.resumen());       // 'Ana: 0'

ESTO DEBE FALLAR
  // a.depositar('50');  → monto debe ser number.
  // const sinMetodos: Cuenta = { titular: 'X', saldo: 0 };  → faltan depositar, retirar y resumen.

EXPLICA
  ¿Qué representa this en retirar cuando llamas a.retirar(...) y qué representa cuando
  llamas b.retirar(...)?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 18 — Notificador con aviso opcional
/*
SITUACIÓN
  Una aplicación envía mensajes por distintos canales. Todo canal sabe enviar; algunos
  además quieren enterarse cuando se envía algo, y otros no. Ese aviso es opcional.

QUÉ DEBES HACER
  1. Crea la interface Notificador con: destino (string), el método
     enviar(mensaje: string): string y el método opcional
     alEnviar?(mensaje: string): void.
  2. Crea la función notificar(n: Notificador, mensaje: string): string:
     a) si mensaje tiene 0 caracteres, devuelve 'Vacío' sin llamar a ningún método
        de n;
     b) llama a n.enviar(mensaje) y guarda el texto que devuelve;
     c) llama a n.alEnviar?.(mensaje) (solo se ejecuta si el método existe);
     d) devuelve el texto guardado en b).
  3. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const registro: string[] = [];
  const correo: Notificador = {
      destino: 'ana@mail.com',
      enviar(mensaje: string): string { return `Correo a ${this.destino}: ${mensaje}`; },
      alEnviar(mensaje: string): void { registro.push(mensaje); },
  };
  const sms: Notificador = {
      destino: '5551234567',
      enviar(mensaje: string): string { return `SMS a ${this.destino}: ${mensaje}`; },
  };
  console.log(notificar(correo, 'Hola'));  // 'Correo a ana@mail.com: Hola'
  console.log(notificar(sms, 'Hola'));     // 'SMS a 5551234567: Hola'
  console.log(notificar(correo, ''));      // 'Vacío'
  console.log(registro.length);            // 1
  console.log(notificar(correo, 'Adiós')); // 'Correo a ana@mail.com: Adiós'
  console.log(registro.join(','));         // 'Hola,Adiós'

ESTO DEBE FALLAR
  // const malo: Notificador = { destino: 'x', enviar(mensaje: string): number { return 1; } };  → enviar debe devolver string.
  // sms.alEnviar('Hola');  → alEnviar es opcional: puede ser undefined y no se puede llamar sin ?.().

EXPLICA
  ¿Qué ocurre con notificar(sms, 'Hola') en el paso c)? ¿Por qué no da error si sms no
  tiene alEnviar?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 19 — Sensores con función de lectura
/*
SITUACIÓN
  Una planta revisa sensores. Cada sensor guarda una función para leer su valor y,
  si lo desea, otra función de alarma que se ejecuta cuando la lectura es demasiado alta.

QUÉ DEBES HACER
  1. Crea la interface Sensor con: nombre (string), leer (propiedad de tipo función
     sin parámetros que devuelve number: leer: () => number) y alarma (propiedad
     opcional de tipo función que recibe valor: number y no devuelve nada:
     alarma?: (valor: number) => void).
  2. Crea la función revisar(sensores: Sensor[], umbral: number): string[]:
     a) crea una lista vacía de textos;
     b) recorre sensores; en cada uno llama una sola vez a leer() y guarda el valor;
     c) si el valor es mayor que umbral (igual al umbral no cuenta), llama a
        alarma?.(valor) del sensor y agrega '{nombre}: {valor} ALTO';
     d) si no, agrega '{nombre}: {valor}';
     e) devuelve la lista.
  3. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const avisos: number[] = [];
  const caldera: Sensor = { nombre: 'Caldera', leer: () => 90, alarma: (valor: number) => { avisos.push(valor); } };
  const tanque: Sensor = { nombre: 'Tanque', leer: () => 70 };
  const tubo: Sensor = { nombre: 'Tubo', leer: () => 100, alarma: (valor: number) => { avisos.push(valor); } };
  console.log(revisar([caldera, tanque, tubo], 80).join(' | ')); // 'Caldera: 90 ALTO | Tanque: 70 | Tubo: 100 ALTO'
  console.log(avisos.join(','));                                 // '90,100'
  console.log(revisar([caldera, tubo], 90).join(' | '));         // 'Caldera: 90 | Tubo: 100 ALTO'
  console.log(avisos.join(','));                                 // '90,100,100'
  console.log(revisar([], 10).length);                           // 0

ESTO DEBE FALLAR
  // const malo: Sensor = { nombre: 'X', leer: () => 'caliente' };  → leer debe devolver number.
  // tanque.alarma(5);  → alarma es opcional y puede ser undefined.

EXPLICA
  ¿Por qué tanque puede omitir alarma pero no leer? ¿Qué pasa en revisar() cuando un
  sensor sin alarma supera el umbral?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 20 — Clientes que conocen su dirección
/*
SITUACIÓN
  Cada cliente es un objeto con su nombre, una dirección opcional y dos operaciones: dar
  su dirección completa con un prefijo y decir si vive en la misma ciudad que otro cliente.

QUÉ DEBES HACER
  1. Crea la interface Direccion con: ciudad (string) y codigoPostal (string).
  2. Crea la interface Cliente con: nombre (string), direccion (Direccion, opcional),
     el método getFullAddress(prefijo: string): string y el método
     mismaCiudad(otro: Cliente): boolean.
  3. Crea la función crearCliente(nombre: string, direccion?: Direccion): Cliente:
     a) crea una constante c de tipo Cliente con nombre y los dos métodos, sin la
        propiedad direccion;
     b) getFullAddress usa this.direccion: si no existe, devuelve
        '{prefijo}: sin dirección'; si existe, '{prefijo}: {ciudad}, {codigoPostal}';
     c) mismaCiudad compara this.direccion?.ciudad con otro.direccion?.ciudad y
        devuelve true solo si la primera NO es undefined y las dos son iguales (===);
     d) antes de devolver c: si direccion no es undefined, asígnala con
        c.direccion = direccion; si es undefined, no asignes nada;
     e) devuelve c.
  4. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const ana = crearCliente('Ana', { ciudad: 'Puebla', codigoPostal: '72000' });
  const luis = crearCliente('Luis', { ciudad: 'Puebla', codigoPostal: '72100' });
  const eva = crearCliente('Eva', { ciudad: 'Oaxaca', codigoPostal: '68000' });
  const sol = crearCliente('Sol');
  const ivo = crearCliente('Ivo');
  console.log(ana.getFullAddress('Envío')); // 'Envío: Puebla, 72000'
  console.log(sol.getFullAddress('Envío')); // 'Envío: sin dirección'
  console.log(ana.mismaCiudad(luis));       // true
  console.log(ana.mismaCiudad(eva));        // false
  console.log(sol.mismaCiudad(ivo));        // false  (ninguno tiene dirección)
  console.log(sol.mismaCiudad(ana));        // false
  console.log(ana.mismaCiudad(ana));        // true
  console.log(Object.hasOwn(sol, 'direccion')); // false

ESTO DEBE FALLAR
  // const malo: Cliente = { nombre: 'X', getFullAddress(prefijo: string) { return prefijo; } };  → falta el método mismaCiudad.
  // ana.mismaCiudad('Puebla');  → el argumento debe ser un Cliente, no un texto.

EXPLICA
  ¿Por qué sol.mismaCiudad(ivo) es false si ambos tienen la ciudad undefined?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 21 — Impresora con páginas
/*
SITUACIÓN
  Un sistema imprime textos con una impresora. La impresora solo promete imprimir; no
  devuelve nada. El sistema agrupa los textos en páginas y escribe una línea separadora
  entre página y página, nunca al final.

QUÉ DEBES HACER
  1. Crea la interface Impresora con el método imprimir(texto: string): void.
  2. Crea la función paginar(impresora: Impresora, textos: string[],
     maxPorPagina: number): number (supón maxPorPagina entero > 0):
     a) crea llamadas = 0 y posicion = 0;
     b) recorre textos; en cada uno suma 1 a posicion, llama a
        impresora.imprimir(texto) y suma 1 a llamadas;
     c) justo después, si posicion es múltiplo de maxPorPagina (posicion % maxPorPagina
        es 0) Y todavía quedan textos por imprimir (posicion < textos.length), llama a
        impresora.imprimir('--- página {n} ---') con n = posicion / maxPorPagina y
        suma 1 a llamadas;
     d) devuelve llamadas (cuenta también los separadores).
  3. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const salida: string[] = [];
  const consola: Impresora = { imprimir(texto: string): void { salida.push(texto); } };
  console.log(paginar(consola, ['a', 'b', 'c', 'd', 'e'], 2)); // 7
  console.log(salida.join('|'));  // 'a|b|--- página 1 ---|c|d|--- página 2 ---|e'
  salida.length = 0;   // vacía la lista salida para la siguiente prueba
  console.log(paginar(consola, ['a', 'b', 'c', 'd'], 2));      // 5
  console.log(salida.join('|'));  // 'a|b|--- página 1 ---|c|d'
  salida.length = 0;   // vacía la lista salida otra vez
  console.log(paginar(consola, [], 3));                        // 0
  console.log(salida.length);     // 0
  console.log(paginar(consola, ['x', 'y'], 5));                // 2

ESTO DEBE FALLAR
  // const mala: Impresora = { imprimir(texto: number): void {} };  → el parámetro debe ser string.
  // const resultado: string = consola.imprimir('a');  → imprimir devuelve void: no hay un texto que guardar.

EXPLICA
  ¿Por qué no se imprime un separador después de 'd' cuando son cuatro textos con
  máximo 2? ¿Qué te dice void sobre lo que puedes hacer con el resultado de imprimir?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 22 — Cola de atención
/*
SITUACIÓN
  Un consultorio atiende por turno de llegada. La cola es un objeto con su capacidad,
  la lista de personas esperando y operaciones para agregar, atender y ver quién sigue.

QUÉ DEBES HACER
  1. Crea la interface Cola con: capacidad (number), elementos (string[]), el método
     agregar(nombre: string): boolean, el método atender(): string | undefined y el
     método siguiente(): string | undefined.
  2. Crea la función crearCola(capacidad: number): Cola (supón capacidad entero > 0)
     que devuelve un objeto con elementos vacío ([]) y los tres métodos, usando
     this.elementos y this.capacidad:
     a) agregar rechaza (false) si nombre tiene 0 caracteres, si ya está en elementos
        (usa includes) o si elementos ya tiene capacidad personas; si no, agrega el
        nombre al final (push) y devuelve true;
     b) atender quita el primer elemento con shift() y lo devuelve; si no hay,
        devuelve undefined;
     c) siguiente devuelve el primer elemento sin quitarlo (elementos[0]); si no hay,
        devuelve undefined.
  3. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const c = crearCola(2);
  console.log(c.agregar('Ana'));    // true
  console.log(c.agregar('Ana'));    // false  (repetido)
  console.log(c.agregar(''));       // false
  console.log(c.agregar('Luis'));   // true
  console.log(c.agregar('Eva'));    // false  (cola llena)
  console.log(c.elementos.length);  // 2
  console.log(c.siguiente());       // 'Ana'
  console.log(c.atender());         // 'Ana'
  console.log(c.elementos.join(',')); // 'Luis'
  console.log(c.agregar('Eva'));    // true   (volvió a haber lugar)
  console.log(c.atender());         // 'Luis'
  console.log(c.atender());         // 'Eva'
  console.log(c.atender());         // undefined
  console.log(c.siguiente());       // undefined
  const d = crearCola(1);
  console.log(d.agregar('Zoe'));    // true
  console.log(c.elementos.length);  // 0  (c no comparte lista con d)

ESTO DEBE FALLAR
  // const mala: Cola = { capacidad: 1, elementos: [], agregar(nombre: string): boolean { return true; } };  → faltan atender y siguiente.
  // c.agregar(5);  → nombre debe ser string.

EXPLICA
  ¿Por qué atender() y siguiente() devuelven string | undefined y no solo string?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 23 — Carrito con aviso de cambios
/*
SITUACIÓN
  Un carrito de compras guarda artículos y avisa a quien lo desee cada vez que cambia su
  total. El aviso es una función opcional que otra parte del programa puede asignar después.

QUÉ DEBES HACER
  1. Crea la interface Articulo con: nombre (string), precio (number) y cantidad (number).
  2. Crea la interface Carrito con: articulos (Articulo[]), el método
     agregar(nombre: string, precio: number, cantidad: number): boolean, el método
     quitar(nombre: string): boolean, el método total(): number y la propiedad
     opcional alCambiar de tipo función (alCambiar?: (total: number) => void).
  3. Crea la función crearCarrito(): Carrito que devuelve un objeto con articulos
     vacío ([]) y los tres métodos (sin la propiedad alCambiar):
     a) total() suma precio * cantidad de todos los artículos (for...of);
     b) agregar rechaza (false) si precio es 0 o menos, o si cantidad es 0 o menos;
     c) si no rechaza, busca con for...of un artículo con ese nombre: si existe, suma
        cantidad a su cantidad (su precio no cambia); si no existe, agrega un artículo
        nuevo con nombre, precio y cantidad;
     d) tras agregar, llama a this.alCambiar?.(this.total()) y devuelve true;
     e) quitar busca con for...of el artículo con ese nombre; si no existe, devuelve
        false; si existe, obtén su posición con this.articulos.indexOf(articulo),
        elimínalo con this.articulos.splice(posicion, 1), llama a
        this.alCambiar?.(this.total()) y devuelve true.
  4. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const carrito = crearCarrito();
  const avisos: number[] = [];
  console.log(carrito.agregar('Pan', 10, 2));    // true
  console.log(carrito.total());                  // 20
  carrito.alCambiar = (total: number) => { avisos.push(total); };
  console.log(carrito.agregar('Leche', 20, 1));  // true
  console.log(carrito.agregar('Pan', 99, 1));    // true  (suma al Pan; su precio sigue siendo 10)
  console.log(carrito.total());                  // 50
  console.log(carrito.agregar('Sal', 0, 1));     // false
  console.log(carrito.agregar('Sal', 5, 0));     // false
  console.log(carrito.quitar('Leche'));          // true
  console.log(carrito.quitar('Leche'));          // false
  console.log(carrito.total());                  // 30
  console.log(avisos.join(','));                 // '40,50,30'
  console.log(carrito.articulos.length);         // 1

ESTO DEBE FALLAR
  // carrito.alCambiar = (total: string) => {};  → la función debe recibir un number.
  // crearCarrito().alCambiar(10);  → alCambiar es opcional: un carrito recién creado no la tiene y no se puede llamar sin ?.().

EXPLICA
  ¿Por qué los rechazos no producen avisos? ¿Por qué el aviso '40' no se registró
  al agregar el primer Pan?
*/
(() => {
    // Tu solución.
})();

// TRAMO 4 — 04 INTERFACES EN CLASES (implements): EJERCICIOS 24 AL 31

// !EJERCICIO 24 — Categoría describible
/*
SITUACIÓN
  Una tienda describe sus categorías con un texto. El contrato Describible dice qué
  operación debe ofrecer cualquier cosa que se pueda describir; la clase Categoria
  lo cumple con implements.

QUÉ DEBES HACER
  1. Crea la interface Describible con el método describir(): string.
  2. Crea la clase Categoria que declare implements Describible. Declara en su
     constructor, en este orden: nombre (string, visible) y productos (number,
     visible; supón entero >= 0).
  3. En Categoria crea el método público describir(): string:
     a) si productos es 0, devuelve 'Categoría {nombre}: vacía';
     b) si es 1, devuelve 'Categoría {nombre}: 1 producto';
     c) si es mayor que 1, devuelve 'Categoría {nombre}: {productos} productos'.
  4. Fuera de la clase ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(new Categoria('Lácteos', 0).describir()); // 'Categoría Lácteos: vacía'
  console.log(new Categoria('Pan', 1).describir());     // 'Categoría Pan: 1 producto'
  console.log(new Categoria('Frutas', 12).describir()); // 'Categoría Frutas: 12 productos'
  const d: Describible = new Categoria('Pan', 3);
  console.log(d.describir());                           // 'Categoría Pan: 3 productos'

ESTO DEBE FALLAR
  // class Mala implements Describible { }  → falta describir().
  // class Mala2 implements Describible { private describir(): string { return ''; } }  → el miembro que cumple el contrato debe ser público.
  // console.log(d.nombre);  → d tiene tipo Describible, que no declara nombre.

EXPLICA
  ¿Qué comprueba implements y qué cosas NO hace por ti? ¿Por qué d.nombre falla si el
  objeto sí tiene nombre?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 25 — Empleados que cobran
/*
SITUACIÓN
  Una empresa paga a sus empleados por hora, con las horas extra al doble. Dos contratos
  separados describen lo que un empleado ofrece: identificarse y calcular su pago. La
  clase Empleado cumple los dos a la vez.

QUÉ DEBES HACER
  1. Crea la interface Identificable con: id (number) y nombre (string).
  2. Crea la interface Pagable con el método calcularPago(): number.
  3. Crea la clase Empleado que declare implements Identificable, Pagable. Declara
     en su constructor, en este orden: id (number, visible), nombre (string, visible),
     horas (number, oculta; supón >= 0) y tarifa (number, oculta; supón entero par > 0).
  4. En Empleado crea el método público calcularPago(): number:
     a) si horas es 40 o menos, devuelve horas * tarifa;
     b) si es más de 40, devuelve 40 * tarifa más las horas que pasan de 40 pagadas al
        doble de la tarifa.
  5. Crea la función etiquetar(x: Identificable): string que devuelve '#{id} {nombre}'.
  6. Crea la función nomina(lista: Pagable[]): number que suma el calcularPago()
     de todos los elementos (0 si la lista está vacía).
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const e1 = new Empleado(1, 'Ana', 40, 10);
  const e2 = new Empleado(2, 'Luis', 45, 10);
  const e3 = new Empleado(3, 'Eva', 0, 10);
  console.log(e1.calcularPago());                          // 400
  console.log(e2.calcularPago());                          // 500
  console.log(e3.calcularPago());                          // 0
  console.log(new Empleado(4, 'Zoe', 41, 10).calcularPago()); // 420
  console.log(etiquetar(e2));                              // '#2 Luis'
  console.log(nomina([e1, e2, e3]));                       // 900
  console.log(nomina([]));                                 // 0

ESTO DEBE FALLAR
  // console.log(e1.horas);  → horas es private.
  // etiquetar({ nombre: 'Sin id' });  → a Identificable le falta id.

EXPLICA
  ¿Por qué etiquetar(e2) acepta un Empleado si Empleado no se llama Identificable?
  ¿Qué ventaja tiene nomina(lista: Pagable[]) frente a recibir Empleado[]?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 26 — Figuras con áreas distintas
/*
SITUACIÓN
  Un programa de dibujo guarda figuras de distintos tipos en una sola lista. Cada tipo
  calcula su área a su manera, pero todos cumplen el mismo contrato, así que el
  programa puede recorrerlos sin saber de qué clase es cada uno.

QUÉ DEBES HACER
  1. Crea la interface Figura con: nombre (string) y el método area(): number.
  2. Crea la clase Cuadrado que declare implements Figura. Su constructor declara
     lado (number, visible). Declara también la propiedad pública nombre (string)
     con el valor fijo 'Cuadrado'. Su método público area() devuelve lado * lado.
  3. Crea la clase Rectangulo que declare implements Figura. Su constructor declara
     ancho y alto (number, visibles, en ese orden). Su propiedad pública nombre vale
     'Rectangulo'. Su método público area() devuelve ancho * alto.
  4. Crea la clase Triangulo que declare implements Figura. Su constructor declara
     base y altura (number, visibles, en ese orden). Su propiedad pública nombre vale
     'Triangulo'. Su método público area() devuelve base * altura / 2.
  5. Crea la función mayorArea(figuras: Figura[]): string: devuelve
     '{nombre} ({área})' de la figura con mayor área; si hay empate, la primera de
     la lista; si la lista está vacía, devuelve 'Sin figuras'.
  6. Crea la función areaTotal(figuras: Figura[]): number que suma las áreas (0 si
     está vacía).
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const fs: Figura[] = [new Cuadrado(3), new Rectangulo(2, 5), new Triangulo(6, 4)];
  console.log(mayorArea(fs));                                    // 'Triangulo (12)'
  console.log(areaTotal(fs));                                    // 31
  console.log(mayorArea([new Cuadrado(2), new Rectangulo(1, 4)])); // 'Cuadrado (4)'
  console.log(mayorArea([]));                                    // 'Sin figuras'
  console.log(areaTotal([]));                                    // 0

ESTO DEBE FALLAR
  // const malo: Figura[] = [new Cuadrado(1), 'círculo'];  → un texto no cumple Figura.
  // class Circulo implements Figura { nombre: string = 'Circulo'; }  → falta area().

EXPLICA
  ¿Por qué mayorArea no necesita saber si recibe Cuadrado, Rectangulo o Triangulo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 27 — Asientos de una sala
/*
SITUACIÓN
  Un cine controla qué asientos de una sala están ocupados. El contrato Reservable
  describe lo que se puede hacer con los asientos; la clase Sala guarda el estado de
  forma interna y no lo deja a la vista.

QUÉ DEBES HACER
  1. Crea la interface Reservable con: el método reservar(asiento: number): boolean,
     el método liberar(asiento: number): boolean y el método disponibles(): number[].
  2. Crea la clase Sala que declare implements Reservable. Declara en su constructor
     total (number, oculto; supón entero > 0). Declara también la propiedad oculta
     ocupados de tipo boolean[], inicializada con [].
  3. En el constructor, con un for clásico (for (let i = 0; i < total; i++)), agrega
     false a ocupados una vez por cada asiento. El asiento número n (de 1 a total)
     corresponde a la posición n - 1.
  4. En Sala crea el método público reservar(asiento: number): boolean: rechaza
     (false) si asiento no es un entero entre 1 y total (incluidos) o si ya está
     ocupado (ocupados[asiento - 1] vale true); si no, lo marca como true y devuelve true.
  5. En Sala crea el método público liberar(asiento: number): boolean: rechaza
     (false) si asiento no es un entero entre 1 y total o si no estaba ocupado; si
     no, lo marca como false y devuelve true. Para comprobar un entero usa
     Number.isInteger(asiento).
  6. En Sala crea el método público disponibles(): number[]: devuelve los números de
     los asientos libres, de menor a mayor.
  7. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const sala = new Sala(4);
  console.log(sala.reservar(2));      // true
  console.log(sala.reservar(2));      // false  (ya ocupado)
  console.log(sala.reservar(0));      // false
  console.log(sala.reservar(5));      // false
  console.log(sala.reservar(1.5));    // false
  console.log(sala.reservar(4));      // true
  console.log(sala.disponibles().join(',')); // '1,3'
  console.log(sala.liberar(3));       // false  (no estaba ocupado)
  console.log(sala.liberar(9));       // false
  console.log(sala.liberar(2));       // true
  console.log(sala.disponibles().join(',')); // '1,2,3'
  console.log(new Sala(1).disponibles().join(',')); // '1'

ESTO DEBE FALLAR
  // console.log(sala.ocupados);  → ocupados es private.
  // class Mala implements Reservable { reservar(asiento: number): boolean { return true; } }  → faltan liberar y disponibles.

EXPLICA
  ¿Por qué sala.reservar(1.5) es false aunque 1.5 esté entre 1 y 4? ¿Qué ventaja tiene
  que ocupados sea privado?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 28 — Camión de carga
/*
SITUACIÓN
  Una flota tiene vehículos con placa. Los camiones, además, aceptan carga hasta su
  capacidad: cumplen el contrato Cargable y heredan de Vehiculo. Un contrato dice qué
  ofrece una clase; la herencia le da lo que ya hace otra.

QUÉ DEBES HACER
  1. Crea la interface Cargable con: el método cargar(kg: number): boolean y el
     método cargaActual(): number.
  2. Crea la clase Vehiculo. Declara en su constructor placa (string, visible). En
     Vehiculo crea el método describir(): string, protected, que devuelve
     'Vehículo {placa}'.
  3. Crea la clase Camion que extienda Vehiculo y declare implements Cargable. Su
     constructor recibe placa (string) y capacidadKg (number, oculta; supón > 0).
     Pasa placa al padre con super(...). Declara también la propiedad oculta kilos
     (number) con el valor inicial 0.
  4. En Camion crea el método público cargar(kg: number): boolean: rechaza (false)
     si kg es 0 o menos, o si kilos + kg supera capacidadKg (llegar justo a la
     capacidad sí se acepta); si no, suma kg a kilos y devuelve true.
  5. En Camion crea el método público cargaActual(): number que devuelve kilos.
  6. En Camion crea el método público ficha(): string que devuelve
     '{descripción} | carga {kilos}/{capacidadKg}', obteniendo la descripción con
     super.describir().
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const c = new Camion('ABC-1', 100);
  console.log(c.cargar(60));      // true
  console.log(c.cargar(40));      // true   (llega justo a 100)
  console.log(c.cargar(1));       // false
  console.log(c.cargar(0));       // false
  console.log(c.cargaActual());   // 100
  console.log(c.ficha());         // 'Vehículo ABC-1 | carga 100/100'
  const c2 = new Camion('XYZ-9', 50);
  const carga: Cargable = c2;
  console.log(carga.cargar(10));  // true
  console.log(carga.cargaActual()); // 10
  console.log(c2.ficha());        // 'Vehículo XYZ-9 | carga 10/50'
  console.log(c.cargaActual());   // 100  (c y c2 no comparten carga)

ESTO DEBE FALLAR
  // c.describir();  → describir es protected.
  // carga.ficha();  → carga tiene tipo Cargable, que no declara ficha.
  // c.kilos = 5;  → kilos es private.

EXPLICA
  ¿Qué aporta extends y qué aporta implements en Camion? ¿Por qué carga.ficha() falla si
  el objeto es un Camion?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 29 — Estrategias de descuento
/*
SITUACIÓN
  Una tienda aplica distintos tipos de descuento a un precio. Todos cumplen el contrato
  Descuento, de modo que una función puede combinarlos o compararlos sin conocer los
  detalles de cada tipo.

QUÉ DEBES HACER
  1. Crea la interface Descuento con el método aplicar(precio: number): number, que
     devuelve el precio ya rebajado.
  2. Crea la clase DescuentoPorcentaje que declare implements Descuento. Su
     constructor declara porcentaje (number, oculto; supón entre 0 y 100). Su método
     público aplicar devuelve precio - precio * porcentaje / 100.
  3. Crea la clase DescuentoFijo que declare implements Descuento. Su constructor
     declara monto (number, oculto; supón >= 0). Su método público aplicar devuelve
     precio - monto, pero nunca menos de 0.
  4. Crea la clase DescuentoPorCompra que declare implements Descuento. Su constructor
     declara minimo y porcentaje (number, ocultos, en ese orden). Su método público
     aplicar: si precio es mayor o igual que minimo, devuelve precio - precio *
     porcentaje / 100; si es menor, devuelve precio sin cambios.
  5. Crea la función mejorPrecio(precio: number, descuentos: Descuento[]): number:
     aplica cada descuento por separado al precio original y devuelve el resultado
     más bajo; si la lista está vacía, devuelve precio.
  6. Crea la función enCadena(precio: number, descuentos: Descuento[]): number:
     aplica los descuentos en orden, cada uno sobre el resultado del anterior, y
     devuelve el resultado final; sin descuentos, devuelve precio.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const p10 = new DescuentoPorcentaje(10);
  const f50 = new DescuentoFijo(50);
  const compra = new DescuentoPorCompra(300, 20);
  console.log(p10.aplicar(200));                      // 180
  console.log(new DescuentoFijo(500).aplicar(200));   // 0
  console.log(compra.aplicar(200));                   // 200  (no llega al mínimo)
  console.log(compra.aplicar(300));                   // 240  (llegar al mínimo sí cuenta)
  console.log(mejorPrecio(200, [p10, f50, compra]));  // 150
  console.log(mejorPrecio(200, []));                  // 200
  console.log(enCadena(200, [p10, f50]));             // 130
  console.log(enCadena(200, [f50, p10]));             // 135
  console.log(enCadena(400, [compra]));               // 320
  console.log(enCadena(200, []));                     // 200

ESTO DEBE FALLAR
  // console.log(p10.porcentaje);  → porcentaje es private.
  // mejorPrecio(200, [new DescuentoFijo(5), 10]);  → un number no cumple Descuento.

EXPLICA
  ¿Por qué enCadena(200, [p10, f50]) y enCadena(200, [f50, p10]) dan resultados distintos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 30 — Registro en memoria
/*
SITUACIÓN
  Un programa guarda valores numéricos por nombre. El contrato Registro no dice dónde
  se guardan: una clase los guarda en un objeto y, en las pruebas, otro objeto
  cualquiera hace de registro falso. Una función carga muchos pares de una vez.

QUÉ DEBES HACER
  1. Crea la interface Registro con: el método guardar(clave: string, valor: number):
     boolean y el método leer(clave: string): number | undefined.
  2. Crea la clase RegistroMemoria que declare implements Registro. Declara la
     propiedad oculta datos de tipo Record<string, number>, inicializada con {}.
  3. En RegistroMemoria crea el método público guardar(clave: string, valor: number):
     boolean: rechaza (false) si clave tiene 0 caracteres o si valor es negativo
     (0 es válido); si no, guarda datos[clave] = valor (si la clave ya existía, la
     sobrescribe) y devuelve true.
  4. En RegistroMemoria crea el método público leer(clave: string): number |
     undefined: si Object.hasOwn(this.datos, clave) es true, devuelve this.datos[clave];
     si no, devuelve undefined.
  5. Crea la función cargarVarios(destino: Registro, pares: [string, number][]): number:
     recorre pares con for...of, desestructurando cada par como [clave, valor];
     llama a destino.guardar(clave, valor) y cuenta cuántas veces devolvió true; devuelve
     esa cuenta.
  6. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const reg = new RegistroMemoria();
  console.log(cargarVarios(reg, [['a', 1], ['', 5], ['b', -1], ['c', 0], ['a', 7]])); // 3
  console.log(reg.leer('a'));          // 7
  console.log(reg.leer('c'));          // 0
  console.log(reg.leer('b'));          // undefined
  console.log(reg.leer('toString'));   // undefined
  console.log(reg.guardar('toString', 5)); // true
  console.log(reg.leer('toString'));   // 5
  const contador = { guardadas: 0 };
  const falso: Registro = {
      guardar(clave: string, valor: number): boolean { contador.guardadas += 1; return valor > 10; },
      leer(clave: string): number | undefined { return undefined; },
  };
  console.log(cargarVarios(falso, [['x', 5], ['y', 50], ['z', 11]])); // 2
  console.log(contador.guardadas);     // 3

ESTO DEBE FALLAR
  // const par: [string, number] = ['a'];  → la tupla necesita dos elementos.
  // cargarVarios(reg, [['a', 'uno']]);  → el segundo elemento de cada par debe ser number.

EXPLICA
  ¿Por qué reg.leer('toString') es undefined si todos los objetos tienen un toString?
  ¿Qué demuestra cargarVarios(falso, ...) sobre para qué sirve la interface Registro?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 31 — Franquicia de sucursales
/*
SITUACIÓN
  Una franquicia describe sus sucursales; una sucursal sabe su ciudad si tiene dirección.
  Tanto las sucursales como las franquicias cumplen Describible, así que una franquicia
  puede contener sucursales y también otras franquicias.

QUÉ DEBES HACER
  1. Crea la interface Direccion con: ciudad (string) y codigoPostal (string).
  2. Crea la interface Describible con el método describir(): string.
  3. Crea la clase Sucursal que declare implements Describible. Su constructor declara
     nombre (string, visible) y direccion (Direccion, opcional, visible). Su método
     público describir devuelve '{nombre} ({ciudad})', o '{nombre} (sin dirección)'
     si no tiene dirección (usa ?. y ??).
  4. Crea la clase Franquicia que declare implements Describible. Su constructor
     declara marca (string, visible). Declara también la propiedad oculta partes de
     tipo Describible[], inicializada con [].
  5. En Franquicia crea el método público agregar(parte: Describible): boolean:
     rechaza (false) si esa misma parte ya está en partes (usa includes); si no, la
     agrega al final y devuelve true.
  6. En Franquicia crea el método público describir(): string:
     a) si partes está vacía, devuelve '{marca}: sin sucursales';
     b) si no, devuelve '{marca}: ' seguido de las descripciones de todas las partes
        (llama a describir() de cada una) unidas por '; '.
  7. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const s1 = new Sucursal('Centro', { ciudad: 'Puebla', codigoPostal: '72000' });
  const s2 = new Sucursal('Norte');
  const f = new Franquicia('Café');
  console.log(f.describir());   // 'Café: sin sucursales'
  console.log(f.agregar(s1));   // true
  console.log(f.agregar(s2));   // true
  console.log(f.agregar(s1));   // false  (ya estaba)
  console.log(f.describir());   // 'Café: Centro (Puebla); Norte (sin dirección)'
  const grupo = new Franquicia('Grupo');
  console.log(grupo.agregar(f));                      // true
  console.log(grupo.agregar(new Sucursal('Sur')));    // true
  console.log(grupo.describir()); // 'Grupo: Café: Centro (Puebla); Norte (sin dirección); Sur (sin dirección)'

ESTO DEBE FALLAR
  // console.log(f.partes);  → partes es private.
  // f.agregar('Centro');  → un texto no cumple Describible.

EXPLICA
  ¿Por qué grupo.agregar(f) funciona si f es una Franquicia y no una Sucursal? ¿Quién
  decide el texto de cada parte?
*/
(() => {
    // Tu solución.
})();

// TRAMO 5 — 05 INTERFACES PARA FUNCIONES (firma de llamada): EJERCICIOS 32 AL 38

// !EJERCICIO 32 — Validadores de texto
/*
SITUACIÓN
  Un formulario valida campos de texto. Un validador es cualquier función que recibe un
  texto y responde true o false; una interface con firma de llamada da nombre a ese tipo.

QUÉ DEBES HACER
  1. Crea la interface Validador con la firma de llamada (valor: string): boolean.
  2. Crea la función auxiliar esDigito(c: string): boolean que devuelve true si
     c >= '0' y c <= '9' (supón que c es un solo carácter o un texto vacío; el texto
     vacío da false).
  3. Crea la constante esCodigoPostal de tipo Validador: devuelve true solo si el
     texto tiene exactamente 5 caracteres y todos son dígitos (recorre el texto con
     for...of y usa esDigito).
  4. Crea la función auxiliar esMayuscula(c: string): boolean que devuelve true si
     c >= 'A' y c <= 'Z' (mismas suposiciones que en el paso 2).
  5. Crea la constante esPlaca de tipo Validador: devuelve true solo si el texto tiene
     el formato LLL-DDD, es decir: exactamente 7 caracteres; los 3 primeros son
     mayúsculas; el cuarto es '-'; los 3 últimos son dígitos. Obtén cada carácter con
     valor.charAt(posicion).
  6. Crea la función validarTodos(valores: string[], validador: Validador): number
     que devuelve cuántos valores pasan el validador.
  7. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(esCodigoPostal('72000'));  // true
  console.log(esCodigoPostal('7200'));   // false
  console.log(esCodigoPostal('720000')); // false
  console.log(esCodigoPostal('72a00'));  // false
  console.log(esCodigoPostal(''));       // false
  console.log(esPlaca('ABC-123'));       // true
  console.log(esPlaca('abc-123'));       // false
  console.log(esPlaca('ABC123'));        // false
  console.log(esPlaca('AB1-123'));       // false
  console.log(esPlaca('ABC-12x'));       // false
  console.log(validarTodos(['72000', 'abcde', '00000'], esCodigoPostal)); // 2
  console.log(validarTodos([], esPlaca));                                 // 0

ESTO DEBE FALLAR
  // const malo1: Validador = (valor: number) => true;  → el parámetro debe ser string.
  // const malo2: Validador = (valor: string) => valor.length;  → debe devolver boolean, no number.
  // esPlaca(123);  → el argumento debe ser string.

EXPLICA
  ¿Qué garantiza el tipo Validador y qué no garantiza? ¿Cuántos validadores distintos
  puedes tener con la misma interface?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 33 — Operaciones intercambiables
/*
SITUACIÓN
  Una calculadora tiene operaciones que reciben dos números y devuelven uno. Todas
  cumplen el mismo contrato, así que una función puede aplicar cualquiera de ellas a una
  lista de valores.

QUÉ DEBES HACER
  1. Crea la interface Operacion con la firma de llamada (a: number, b: number): number.
  2. Crea cuatro constantes de tipo Operacion: sumar (a + b), restar (a - b),
     multiplicar (a * b) y dividir (a / b; si b es 0, devuelve 0).
  3. Crea la función aplicar(op: Operacion, valores: number[], inicial: number): number:
     a) crea acumulado igual a inicial;
     b) recorre valores; en cada uno, acumulado pasa a ser op(acumulado, valor);
     c) devuelve acumulado (si valores está vacío, es inicial).
  4. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(aplicar(sumar, [1, 2, 3], 0));          // 6
  console.log(aplicar(multiplicar, [2, 3, 4], 1));    // 24
  console.log(aplicar(restar, [1, 2], 10));           // 7
  console.log(aplicar(dividir, [2, 0, 5], 100));      // 0
  console.log(aplicar(sumar, [], 7));                 // 7
  const falsa: Operacion = (a, b) => 10;
  console.log(aplicar(falsa, [1, 1], 0));             // 10

ESTO DEBE FALLAR
  // const malo1: Operacion = (a: string, b: string) => 1;  → los parámetros deben ser number.
  // const malo2: Operacion = (a: number, b: number) => 'x';  → debe devolver number.
  // sumar(1);  → faltan argumentos: son dos obligatorios.

EXPLICA
  ¿Por qué falsa cumple Operacion aunque no sume nada? ¿Qué comprueba el contrato y qué
  tienes que comprobar tú?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 34 — Reglas de elegibilidad
/*
SITUACIÓN
  Un banco decide si una persona es elegible para una tarjeta. Cada regla es una
  función que mira la edad y el ingreso y dice si se cumple. Las reglas se guardan en
  una lista, y se puede saber si se cumplen todas o cuál es la primera que falla.

QUÉ DEBES HACER
  1. Crea la interface Regla con la firma de llamada (edad: number, ingreso: number):
     boolean.
  2. Crea tres constantes de tipo Regla: mayorDeEdad (edad >= 18), ingresoMinimo
     (ingreso >= 3000) y edadMaxima (edad <= 65).
  3. Crea la función cumpleTodas(reglas: Regla[], edad: number, ingreso: number):
     boolean: devuelve true si todas las reglas devuelven true; con una lista vacía
     devuelve true.
  4. Crea la función primeraQueFalla(reglas: Regla[], edad: number, ingreso: number):
     number: devuelve la posición (empezando en 0) de la primera regla que devuelve
     false; si ninguna falla, devuelve -1. Puedes recorrer con un for clásico.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const reglas: Regla[] = [mayorDeEdad, ingresoMinimo, edadMaxima];
  console.log(cumpleTodas(reglas, 30, 5000));   // true
  console.log(cumpleTodas(reglas, 18, 3000));   // true   (los límites se aceptan)
  console.log(cumpleTodas(reglas, 65, 3000));   // true
  console.log(cumpleTodas(reglas, 17, 5000));   // false
  console.log(primeraQueFalla(reglas, 17, 1000)); // 0
  console.log(primeraQueFalla(reglas, 30, 2999)); // 1
  console.log(primeraQueFalla(reglas, 66, 5000)); // 2
  console.log(primeraQueFalla(reglas, 30, 5000)); // -1
  console.log(cumpleTodas([], 1, 1));           // true
  console.log(primeraQueFalla([], 1, 1));       // -1

ESTO DEBE FALLAR
  // const mala: Regla = (edad: number, ingreso: number, pais: string) => true;  → exige un tercer parámetro que la interface no tiene.
  // mayorDeEdad(30);  → faltan argumentos.
  // const lista: Regla[] = [mayorDeEdad, 'ingreso'];  → un texto no es una Regla.

EXPLICA
  ¿Qué devuelve primeraQueFalla cuando hay dos reglas que fallan: la primera o la
  última? ¿Por qué cumpleTodas([], ...) es true?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 35 — Cadena de transformaciones de texto
/*
SITUACIÓN
  Un editor limpia textos aplicando pasos en cierto orden. Cada paso es una función que
  recibe un texto y devuelve otro. El orden de los pasos cambia el resultado.

QUÉ DEBES HACER
  1. Crea la interface Transformador con la firma de llamada (texto: string): string.
  2. Crea tres constantes de tipo Transformador:
     a) recortar: quita los espacios del inicio y del final (trim);
     b) mayusculas: pasa el texto a mayúsculas (toUpperCase);
     c) abreviar: si el texto tiene más de 8 caracteres, devuelve sus primeros 8
        (slice(0, 8)) seguidos de '...'; si tiene 8 o menos, lo devuelve igual.
  3. Crea la función pipeline(texto: string, pasos: Transformador[]): string: aplica
     los pasos en el orden de la lista, cada uno sobre el resultado del anterior, y
     devuelve el resultado final (sin pasos, devuelve texto).
  4. Crea la función contarCambios(texto: string, pasos: Transformador[]): number:
     aplica los pasos igual que pipeline y cuenta cuántos pasos dejaron un texto
     distinto del que recibieron.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(pipeline('  hola mundo  ', [recortar, mayusculas, abreviar])); // 'HOLA MUN...'
  console.log(pipeline('  ab ', [abreviar, recortar]));                      // 'ab'
  console.log(pipeline('  abcdefghi', [abreviar, recortar]));               // 'abcdef...'
  console.log(pipeline('  abcdefghi', [recortar, abreviar]));               // 'abcdefgh...'
  console.log(pipeline('12345678', [abreviar]));                            // '12345678'
  console.log(pipeline('x', []));                                           // 'x'
  console.log(contarCambios('  hola  ', [recortar, mayusculas, abreviar])); // 2
  console.log(contarCambios('HOLA', [recortar, mayusculas]));               // 0

ESTO DEBE FALLAR
  // const malo: Transformador = (texto: string) => texto.length;  → debe devolver string.
  // pipeline('x', [recortar, 5]);  → un number no es un Transformador.

EXPLICA
  ¿Por qué los dos pipeline sobre '  abcdefghi' dan resultados distintos con los mismos
  pasos? ¿Por qué mayusculas no cuenta como cambio en contarCambios('HOLA', ...)?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 36 — Formateadores con parámetros opcionales
/*
SITUACIÓN
  Una tienda muestra precios con moneda y decimales que casi siempre son los mismos, y
  también suma o promedia una cantidad variable de números. Las firmas de llamada pueden
  tener parámetros opcionales y rest.

QUÉ DEBES HACER
  1. Crea la interface Formateador con la firma de llamada
     (valor: number, moneda?: string, decimales?: number): string.
  2. Crea la constante formatear de tipo Formateador. Su función declara moneda con
     valor por defecto '$' y decimales con valor por defecto 2, y devuelve la moneda
     seguida del valor con esos decimales (valor.toFixed(decimales)).
  3. Crea la interface Agregador con la firma de llamada (...numeros: number[]): number.
  4. Crea la constante sumarTodos de tipo Agregador: devuelve la suma de todos los
     números recibidos (0 si no recibe ninguno).
  5. Crea la constante promediar de tipo Agregador: devuelve la suma dividida entre
     la cantidad de números; si no recibe ninguno, devuelve 0.
  6. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(formatear(5));                  // '$5.00'
  console.log(formatear(5.678, '€'));         // '€5.68'
  console.log(formatear(5.678, undefined, 0)); // '$6'
  console.log(formatear(1234.5, 'MXN ', 1));  // 'MXN 1234.5'
  console.log(sumarTodos());                  // 0
  console.log(sumarTodos(1, 2, 3));           // 6
  console.log(promediar());                   // 0
  console.log(promediar(2, 4, 9));            // 5

ESTO DEBE FALLAR
  // formatear('5');  → valor debe ser number.
  // formatear(5, '$', '2');  → decimales debe ser number.
  // sumarTodos(1, 'dos');  → los argumentos rest deben ser number.
  // const malo: Agregador = (a: string) => 1;  → el parámetro rest debe ser number.

EXPLICA
  ¿Qué recibe formatear cuando escribes formatear(5.678, undefined, 0) y por qué
  la moneda sigue siendo '$'? ¿Qué arreglo recibe promediar al llamar promediar(2, 4, 9)?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 37 — Manejadores de eventos
/*
SITUACIÓN
  Un sistema emite eventos y varios manejadores reaccionan a cada uno. Un manejador es
  una función que recibe un evento y no devuelve nada. Los eventos de prioridad 0 o
  menor se descartan.

QUÉ DEBES HACER
  1. Crea la interface Evento con: tipo (string) y prioridad (number).
  2. Crea la interface Manejador con la firma de llamada (evento: Evento): void.
  3. Crea la función emitir(eventos: Evento[], manejadores: Manejador[]): number:
     a) crea llamadas = 0;
     b) recorre eventos; si la prioridad del evento es 0 o menor, pasa al siguiente;
     c) por cada manejador de la lista, en orden, llámalo con el evento y suma 1 a
        llamadas (aunque el manejador no haga nada con ese evento);
     d) devuelve llamadas.
  4. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const log: string[] = [];
  const registrar: Manejador = (e: Evento) => { log.push(e.tipo); };
  const urgentes: Manejador = (e: Evento) => { if (e.prioridad >= 5) log.push('!' + e.tipo); };
  const evs: Evento[] = [
      { tipo: 'login', prioridad: 1 },
      { tipo: 'error', prioridad: 5 },
      { tipo: 'ping', prioridad: 0 },
  ];
  console.log(emitir(evs, [registrar, urgentes]));  // 4
  console.log(log.join(','));                       // 'login,error,!error'
  console.log(emitir(evs, []));                     // 0
  console.log(emitir([], [registrar]));             // 0
  console.log(emitir([{ tipo: 'x', prioridad: -1 }], [registrar])); // 0

ESTO DEBE FALLAR
  // const malo: Manejador = (e: string) => {};  → el parámetro debe ser un Evento.
  // emitir([{ tipo: 'x' }], [registrar]);  → al evento le falta prioridad.

EXPLICA
  ¿Por qué emitir devuelve 4 con dos manejadores y solo dos eventos válidos? ¿Qué papel
  tiene void en el tipo Manejador?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 38 — Ordenar con un comparador
/*
SITUACIÓN
  Un torneo ordena a sus jugadores de distintas formas. En lugar de escribir un
  algoritmo para cada orden, se escribe uno solo que recibe un comparador: una función que
  dice cuál de dos jugadores va primero.

QUÉ DEBES HACER
  1. Crea la interface Jugador con: nombre (string) y puntos (number).
  2. Crea la interface Comparador con la firma de llamada (a: Jugador, b: Jugador):
     number. Convención: devuelve un número negativo si a va antes que b, positivo si
     a va después, y 0 si son equivalentes.
  3. Crea tres constantes de tipo Comparador:
     a) porPuntos: devuelve b.puntos - a.puntos (más puntos primero);
     b) porNombre: devuelve -1 si a.nombre < b.nombre, 1 si a.nombre > b.nombre y 0
        si son iguales;
     c) porPuntosYNombre: calcula porPuntos(a, b); si es distinto de 0, lo devuelve;
        si es 0, devuelve porNombre(a, b).
  4. Crea la función ordenar(jugadores: Jugador[], comparar: Comparador): Jugador[]:
     a) crea resultado, una lista vacía de Jugador;
     b) recorre jugadores con for...of; para cada jugador crea posicion igual a
        resultado.length;
     c) mientras posicion sea mayor que 0: toma previo = resultado[posicion - 1]; si
        previo es undefined o comparar(previo, jugador) es 0 o menos, termina el
        mientras (break); si no, resta 1 a posicion;
     d) inserta el jugador en esa posición con resultado.splice(posicion, 0, jugador);
     e) devuelve resultado. La lista original no se modifica.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const js: Jugador[] = [
      { nombre: 'Luis', puntos: 5 },
      { nombre: 'Ana', puntos: 9 },
      { nombre: 'Eva', puntos: 5 },
      { nombre: 'Bruno', puntos: 9 },
      { nombre: 'Zoe', puntos: 10 },
  ];
  const nombres = (lista: Jugador[]): string => {
      const r: string[] = [];
      for (const j of lista) r.push(j.nombre);
      return r.join(' ');
  };
  console.log(nombres(ordenar(js, porPuntos)));         // 'Zoe Ana Bruno Luis Eva'
  console.log(nombres(ordenar(js, porNombre)));         // 'Ana Bruno Eva Luis Zoe'
  console.log(nombres(ordenar(js, porPuntosYNombre)));  // 'Zoe Ana Bruno Eva Luis'
  console.log(nombres(js));                             // 'Luis Ana Eva Bruno Zoe'
  console.log(ordenar([], porNombre).length);           // 0

ESTO DEBE FALLAR
  // ordenar(js, (a: Jugador, b: Jugador) => 'primero');  → el comparador debe devolver number.
  // const malo: Comparador = (a: number, b: number) => a - b;  → los parámetros deben ser Jugador.
  // ordenar(js);  → falta el comparador.

EXPLICA
  ¿Por qué en porPuntos Ana queda antes que Bruno y Luis antes que Eva? (¿qué pasa cuando
  comparar devuelve 0?) ¿Cómo cambia el orden final al cambiar solo el comparador?
*/
(() => {
    // Tu solución.
})();

// TRAMO 6 — INTEGRACIÓN DE LAS SUBSECCIONES 01 A 05 Y DE LAS SECCIONES ANTERIORES: EJERCICIOS 39 AL 50

// !EJERCICIO 39 — Catálogo con criterios y precio con impuesto
/*
SITUACIÓN
  Un catálogo tiene artículos con una categoría opcional. Cada categoría trae su
  porcentaje de impuesto; los artículos sin categoría pagan 16. Los criterios de
  búsqueda son funciones que se pasan a una función que filtra.

QUÉ DEBES HACER
  1. Crea la interface Categoria con: nombre (string) e ivaPct (number).
  2. Crea la interface Articulo con: nombre (string), precio (number) y
     categoria (Categoria, opcional).
  3. Crea la interface Criterio con la firma de llamada (articulo: Articulo): boolean.
  4. Crea la función precioConIva(a: Articulo): number: devuelve
     a.precio + a.precio * porcentaje / 100, donde porcentaje es el ivaPct de su
     categoría, o 16 si no tiene categoría (usa ?. y ??; un ivaPct de 0 es válido).
  5. Crea tres constantes de tipo Criterio: caro (precio de 100 o más), sinCategoria
     (no tiene categoría) y esAlimento (su categoría existe y se llama 'Alimentos').
  6. Crea la función filtrar(articulos: Articulo[], criterio: Criterio): Articulo[]
     que devuelve, en el orden original, los artículos para los que criterio da true.
  7. Crea la función resumenFiltro(articulos: Articulo[], criterio: Criterio): string
     que devuelve '{n} artículos, total {suma}', donde n es cuántos pasan el criterio
     y suma es la suma de precioConIva de esos artículos (siempre se escribe
     «artículos», aunque sea 1).
  8. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const alimentos: Categoria = { nombre: 'Alimentos', ivaPct: 0 };
  const electronica: Categoria = { nombre: 'Electrónica', ivaPct: 16 };
  const a1: Articulo = { nombre: 'Pan', precio: 20, categoria: alimentos };
  const a2: Articulo = { nombre: 'Radio', precio: 200, categoria: electronica };
  const a3: Articulo = { nombre: 'Cable', precio: 50 };
  const a4: Articulo = { nombre: 'Queso', precio: 120, categoria: alimentos };
  const todos: Articulo[] = [a1, a2, a3, a4];
  console.log(precioConIva(a1));  // 20
  console.log(precioConIva(a2));  // 232
  console.log(precioConIva(a3));  // 58
  console.log(caro({ nombre: 'Justo', precio: 100 })); // true
  console.log(caro({ nombre: 'Casi', precio: 99 }));   // false
  console.log(filtrar(todos, caro).length);   // 2
  console.log(resumenFiltro(todos, caro));        // '2 artículos, total 352'
  console.log(resumenFiltro(todos, esAlimento));  // '2 artículos, total 140'
  console.log(resumenFiltro(todos, sinCategoria)); // '1 artículos, total 58'
  console.log(resumenFiltro([], caro));           // '0 artículos, total 0'

ESTO DEBE FALLAR
  // const malo: Articulo = { nombre: 'X', precio: 1, categoria: { nombre: 'Y' } };  → a la categoría le falta ivaPct.
  // filtrar(todos, 'caro');  → un texto no es un Criterio.

EXPLICA
  ¿Por qué el pan (ivaPct 0) no paga 16? ¿Qué operador evita que el 0 se confunda con
  «no tiene categoría»?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 40 — Hotel con habitaciones
/*
SITUACIÓN
  Un hotel guarda sus habitaciones; cada una puede tener un huésped o estar libre (null).
  El hotel es un objeto con operaciones para registrar, liberar y consultar la ocupación
  y los ingresos estimados.

QUÉ DEBES HACER
  1. Crea la interface Huesped con: nombre (string) y noches (number).
  2. Crea la interface Habitacion con: numero (number) y huesped (Huesped | null;
     obligatoria: una habitación libre tiene null).
  3. Crea la interface Hotel con: habitaciones (Habitacion[]), el método
     registrar(numero: number, huesped: Huesped): boolean, el método
     liberar(numero: number): boolean, el método ocupacion(): string y el método
     ingresos(tarifa: number): number.
  4. Crea la función crearHotel(numeros: number[]): Hotel que devuelve un objeto cuyas
     habitaciones son una por cada número de la lista (creadas con for...of y push), todas
     con huesped null, y cuyos cuatro métodos usan this.habitaciones:
     a) registrar busca la habitación con ese numero; rechaza (false) si no existe, si
        ya tiene huésped o si huesped.noches es 0 o menos; si no, le asigna el huésped
        y devuelve true;
     b) liberar rechaza (false) si la habitación no existe o ya está libre; si no, le
        asigna null y devuelve true;
     c) ocupacion devuelve '{ocupadas}/{total}';
     d) ingresos devuelve la suma de noches * tarifa de los huéspedes actuales.
  5. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const h = crearHotel([101, 102, 103]);
  console.log(h.registrar(101, { nombre: 'Ana', noches: 3 }));  // true
  console.log(h.registrar(101, { nombre: 'Luis', noches: 1 })); // false  (ocupada)
  console.log(h.registrar(999, { nombre: 'Eva', noches: 1 }));  // false  (no existe)
  console.log(h.registrar(102, { nombre: 'Eva', noches: 0 }));  // false
  console.log(h.registrar(102, { nombre: 'Eva', noches: 2 }));  // true
  console.log(h.ocupacion());       // '2/3'
  console.log(h.ingresos(100));     // 500
  console.log(h.liberar(101));      // true
  console.log(h.liberar(101));      // false  (ya estaba libre)
  console.log(h.liberar(555));      // false
  console.log(h.ocupacion());       // '1/3'
  console.log(h.ingresos(100));     // 200
  console.log(crearHotel([]).ocupacion());   // '0/0'
  console.log(crearHotel([7]).ocupacion());  // '0/1'

ESTO DEBE FALLAR
  // h.registrar(103, { nombre: 'Zoe' });  → al huésped le falta noches.
  // const malo: Habitacion = { numero: 1 };  → huesped es obligatoria, aunque admita null.
  // console.log(h.habitaciones[0].numero);  → habitaciones[0] puede ser undefined.

EXPLICA
  ¿Qué diferencia hay entre una propiedad opcional (huesped?: Huesped) y una que admite
  null (huesped: Huesped | null)? ¿Por qué aquí se eligió null?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 41 — Observadores de eventos
/*
SITUACIÓN
  Un servicio publica eventos y varios observadores reaccionan: una bitácora los guarda y
  una alarma se activa tras cierta cantidad de errores. Todos cumplen el contrato
  Observador, así que el servicio no necesita conocer sus clases.

QUÉ DEBES HACER
  1. Crea la interface Observador con el método notificar(evento: string): void.
  2. Crea la clase Bitacora que declare implements Observador. Declara la propiedad
     oculta lineas de tipo string[], inicializada con []. Crea los métodos públicos:
     a) notificar(evento: string): void, que agrega el evento al final de lineas;
     b) cantidad(): number, que devuelve cuántos eventos se guardaron;
     c) ultima(): string | undefined, que devuelve el último evento guardado o
        undefined si no hay ninguno.
  3. Crea la clase Alarma que declare implements Observador. Declara en su constructor
     limite (number, oculto; supón entero > 0). Declara la propiedad oculta errores
     (number) con valor inicial 0. Crea los métodos públicos:
     a) notificar(evento: string): void: si el evento contiene el texto 'ERROR'
        (usa includes), suma 1 a errores;
     b) activada(): boolean: true si errores es mayor o igual que limite.
  4. Crea la clase Servicio. Declara la propiedad oculta observadores de tipo
     Observador[], inicializada con []. Crea los métodos públicos:
     a) suscribir(o: Observador): boolean: rechaza (false) si ese mismo objeto ya está
        en observadores (usa includes); si no, lo agrega y devuelve true;
     b) publicar(evento: string): number: si evento tiene 0 caracteres, devuelve 0 sin
        notificar a nadie; si no, llama a notificar(evento) de cada observador, en el
        orden de suscripción, y devuelve cuántos observadores notificó.
  5. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const bit = new Bitacora();
  const alarma = new Alarma(2);
  const s = new Servicio();
  console.log(s.suscribir(bit));         // true
  console.log(s.suscribir(alarma));      // true
  console.log(s.suscribir(bit));         // false  (ya estaba)
  console.log(s.publicar('inicio'));     // 2
  console.log(s.publicar('ERROR disco')); // 2
  console.log(alarma.activada());        // false
  console.log(s.publicar(''));           // 0
  console.log(s.publicar('ERROR red'));  // 2
  console.log(alarma.activada());        // true
  console.log(bit.cantidad());           // 3
  console.log(bit.ultima());             // 'ERROR red'
  console.log(new Bitacora().ultima());  // undefined
  console.log(new Servicio().publicar('x')); // 0

ESTO DEBE FALLAR
  // s.suscribir('bitacora');  → un texto no cumple Observador.
  // console.log(alarma.errores);  → errores es private.
  // class Mala implements Observador { }  → falta notificar.

EXPLICA
  ¿Por qué publicar('') no cambia ni la bitácora ni la alarma? ¿Qué ventaja da que
  Servicio dependa de Observador y no de Bitacora o Alarma?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 42 — Calculadora con operaciones registradas
/*
SITUACIÓN
  Una calculadora permite registrar operaciones con un nombre y ejecutarlas después por
  ese nombre. Guarda un historial de lo que ejecutó. Cada operación cumple la interface
  Operacion.

QUÉ DEBES HACER
  1. Crea la interface Operacion con la firma de llamada (a: number, b: number): number.
  2. Crea la clase Calculadora. Declara las propiedades ocultas operaciones, de tipo
     Record<string, Operacion> inicializada con {}, e historial, de tipo string[]
     inicializada con [].
  3. En Calculadora crea el método público registrar(nombre: string, op: Operacion):
     boolean: rechaza (false) si nombre tiene 0 caracteres o si ya hay una operación
     con ese nombre (comprueba con Object.hasOwn); si no, la guarda en
     operaciones[nombre] y devuelve true.
  4. En Calculadora crea el método público ejecutar(nombre: string, a: number,
     b: number): number | undefined:
     a) si no hay una operación registrada con ese nombre (Object.hasOwn), devuelve
        undefined sin tocar el historial;
     b) si la hay, calcula op(a, b), agrega al final del historial el texto
        '{nombre}({a}, {b}) = {resultado}' y devuelve el resultado.
  5. En Calculadora crea el método público ultimo(): string | undefined, que devuelve
     la última entrada del historial o undefined si está vacío, y el método público
     cantidad(): number, que devuelve cuántas entradas tiene el historial.
  6. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const calc = new Calculadora();
  console.log(calc.registrar('sumar', (a, b) => a + b));    // true
  console.log(calc.registrar('sumar', (a, b) => a * b));    // false  (nombre repetido)
  console.log(calc.registrar('', (a, b) => a - b));         // false
  console.log(calc.registrar('restar', (a, b) => a - b));   // true
  console.log(calc.ejecutar('sumar', 2, 3));                // 5
  console.log(calc.ejecutar('restar', 10, 4));              // 6
  console.log(calc.ejecutar('dividir', 1, 2));              // undefined
  console.log(calc.ejecutar('toString', 1, 2));             // undefined
  console.log(calc.ultimo());                               // 'restar(10, 4) = 6'
  console.log(calc.cantidad());                             // 2
  console.log(new Calculadora().ultimo());                  // undefined

ESTO DEBE FALLAR
  // calc.registrar('x', (a: string, b: string) => 1);  → la operación debe recibir y devolver number.
  // console.log(calc.operaciones);  → operaciones es private.
  // calc.ejecutar('sumar', '2', 3);  → a debe ser number.

EXPLICA
  ¿Por qué (a, b) => a + b no necesita anotar los tipos al pasarla a registrar? ¿Por qué
  calc.ejecutar('toString', 1, 2) es undefined?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 43 — Alertas con niveles (enum)
/*
SITUACIÓN
  Un sistema de monitoreo clasifica sus alertas en tres niveles de gravedad. Se calcula
  un puntaje de las alertas sin atender, se busca la más grave y se permite escalar una
  alerta al siguiente nivel.

QUÉ DEBES HACER
  1. Crea el enum Nivel con tres miembros y estos valores: Bajo = 1, Medio = 5, Alto = 10.
  2. Crea la interface Alerta con: mensaje (string), nivel (Nivel) y atendida
     (boolean, opcional; si falta, la alerta cuenta como no atendida).
  3. Crea la interface Filtro con la firma de llamada (alerta: Alerta): boolean.
  4. Crea la función nombreNivel(n: Nivel): string que devuelve 'Bajo', 'Medio' o 'Alto'
     según el nivel (usa if).
  5. Crea la función puntaje(alertas: Alerta[]): number: suma el valor numérico del
     nivel de cada alerta cuya propiedad atendida no sea true.
  6. Crea la función masGrave(alertas: Alerta[]): Alerta | undefined: devuelve la
     alerta no atendida con el nivel de mayor valor (si hay empate, la primera de la
     lista); si no hay alertas sin atender, devuelve undefined.
  7. Crea la función escalar(a: Alerta): Alerta que devuelve una alerta nueva con el
     mismo mensaje y el nivel siguiente (Bajo pasa a Medio, Medio pasa a Alto y Alto
     se queda en Alto). Si a tiene la propiedad atendida (no es undefined), la
     alerta nueva también la tiene con el mismo valor; si no, la nueva no la tiene.
     No modifiques a.
  8. Crea la función describir(alertas: Alerta[], filtro: Filtro): string que devuelve,
     unidas por ' | ', las alertas que cumplen el filtro con el formato
     '{nombreNivel}:{mensaje}', en el orden original.
  9. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const disco: Alerta = { mensaje: 'Disco lleno', nivel: Nivel.Medio };
  const cpu: Alerta = { mensaje: 'CPU', nivel: Nivel.Alto, atendida: true };
  const red: Alerta = { mensaje: 'Red lenta', nivel: Nivel.Bajo };
  const memoria: Alerta = { mensaje: 'Memoria', nivel: Nivel.Alto };
  const backup: Alerta = { mensaje: 'Backup', nivel: Nivel.Medio, atendida: false };
  const todas: Alerta[] = [disco, cpu, red, memoria, backup];
  const esAlto: Filtro = (a) => a.nivel === Nivel.Alto;
  console.log(puntaje(todas));                 // 21
  console.log(masGrave(todas)?.mensaje);       // 'Memoria'
  console.log(masGrave([cpu]));                // undefined
  console.log(masGrave([]));                   // undefined
  console.log(nombreNivel(Nivel.Alto));        // 'Alto'
  console.log(escalar(red).nivel);             // 5
  console.log(escalar(memoria).nivel);         // 10
  console.log(escalar(backup).atendida);       // false
  console.log(Object.hasOwn(escalar(red), 'atendida')); // false
  console.log(red.nivel);                      // 1
  console.log(describir(todas, esAlto));       // 'Alto:CPU | Alto:Memoria'

ESTO DEBE FALLAR
  // const malo: Alerta = { mensaje: 'X', nivel: 'alto' };  → nivel debe ser un valor del enum Nivel.
  // nombreNivel(3);  → 3 no es un miembro del enum Nivel.
  // const sinNivel: Alerta = { mensaje: 'X' };  → falta nivel.

EXPLICA
  ¿Por qué escalar(red) no cambia red? ¿Por qué hace falta preguntar si a.atendida es
  undefined antes de copiarla?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 44 — Horarios de una ruta (tuplas)
/*
SITUACIÓN
  Una línea de autobús tiene paradas, y para cada una se anotan los minutos que tarda en
  llegar desde la parada anterior. Cada parada es una tupla [nombre, minutos]. Se calculan
  la duración total, los horarios de paso y la parada con el tramo más largo.

QUÉ DEBES HACER
  1. Crea la interface Ruta con: nombre (string) y paradas ([string, number][]; en
     cada tupla, el texto es el nombre de la parada y el número son los minutos desde la
     parada anterior; la primera parada lleva 0).
  2. Crea la función duracionTotal(r: Ruta): number: recorre r.paradas con for...of,
     desestructurando cada una como [, minutos] (la coma salta el nombre), y devuelve la
     suma de los minutos.
  3. Crea la función horarios(r: Ruta, salida: number): string[]. salida son los minutos
     desde la medianoche (supón entre 0 y 1439; el recorrido no pasa de medianoche):
     a) crea reloj igual a salida y una lista vacía de textos;
     b) recorre r.paradas desestructurando cada una como [parada, minutos]; suma
        minutos a reloj;
     c) calcula horas = (reloj - reloj % 60) / 60 y mins = reloj % 60;
     d) agrega '{parada} {horas}:{mins}', donde mins siempre tiene dos dígitos
        (conviértelo a texto con una plantilla `${mins}` y usa padStart(2, '0'));
        las horas no llevan cero a la izquierda;
     e) devuelve la lista.
  4. Crea la función paradaMasLarga(r: Ruta): string: devuelve el nombre de la parada
     con más minutos (si hay empate, la primera); si la ruta no tiene paradas,
     devuelve 'Sin paradas'.
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const ruta: Ruta = { nombre: 'Centro', paradas: [['Terminal', 0], ['Plaza', 12], ['Hospital', 5], ['Estadio', 30]] };
  const vacia: Ruta = { nombre: 'Vacía', paradas: [] };
  const empate: Ruta = { nombre: 'Empate', paradas: [['A', 0], ['B', 10], ['C', 10]] };
  console.log(duracionTotal(ruta));                   // 47
  console.log(horarios(ruta, 480).join(' | '));       // 'Terminal 8:00 | Plaza 8:12 | Hospital 8:17 | Estadio 8:47'
  console.log(horarios(ruta, 545).join(' | '));       // 'Terminal 9:05 | Plaza 9:17 | Hospital 9:22 | Estadio 9:52'
  console.log(paradaMasLarga(ruta));                  // 'Estadio'
  console.log(paradaMasLarga(empate));                // 'B'  (empatan B y C; gana la primera)
  console.log(duracionTotal(vacia));                  // 0
  console.log(horarios(vacia, 0).length);             // 0
  console.log(paradaMasLarga(vacia));                 // 'Sin paradas'

ESTO DEBE FALLAR
  // const malo1: Ruta = { nombre: 'X', paradas: [['A', 'cero']] };  → el segundo elemento de la tupla debe ser number.
  // const malo2: Ruta = { nombre: 'X', paradas: [['A']] };  → la tupla debe tener dos elementos.
  // const primera: [string, number] = ruta.paradas[0];  → paradas[0] puede ser undefined.

EXPLICA
  ¿Qué diferencia hay entre [string, number][] y (string | number)[]? ¿Para qué sirve la
  coma en [, minutos]?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 45 — Termómetro con getters y setters
/*
SITUACIÓN
  Un termómetro guarda la temperatura en Celsius, pero se puede leer y cambiar también en
  Fahrenheit. El contrato Temperatura pide ambas propiedades; la clase las cumple con
  getters y setters, y rechaza temperaturas imposibles.

QUÉ DEBES HACER
  1. Crea la interface Temperatura con: celsius (number) y fahrenheit (number).
  2. Crea la clase Termometro que declare implements Temperatura. Declara en su
     constructor _celsius (number, oculto; el nombre empieza con guion bajo para no
     chocar con el getter celsius); supón un valor inicial >= -273.
  3. En Termometro crea el getter celsius, que devuelve _celsius, y el setter celsius
     (valor: number): si valor es menor que -273, no cambia nada; si no, guarda valor
     en _celsius.
  4. En Termometro crea el getter fahrenheit, que devuelve celsius * 9 / 5 + 32, y el
     setter fahrenheit (valor: number), que convierte con (valor - 32) * 5 / 9 y
     asigna el resultado a this.celsius (así se aplica la misma validación).
  5. En Termometro crea el getter categoria (sin setter), de tipo string: 'Frío' si
     celsius es menor que 15; 'Templado' si es 15 o más y 25 o menos; 'Cálido' si es
     mayor que 25.
  6. Crea la función describir(t: Temperatura): string que devuelve
     '{celsius} °C = {fahrenheit} °F'.
  7. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const t = new Termometro(100);
  console.log(t.fahrenheit);   // 212
  t.celsius = 0;
  console.log(t.fahrenheit);   // 32
  console.log(t.categoria);    // 'Frío'
  t.fahrenheit = 50;
  console.log(t.celsius);      // 10
  t.celsius = -300;
  console.log(t.celsius);      // 10  (se rechazó)
  t.fahrenheit = -1000;
  console.log(t.celsius);      // 10  (también se rechazó)
  t.celsius = -273;
  console.log(t.celsius);      // -273  (el límite se acepta)
  t.celsius = 15;
  console.log(t.categoria);    // 'Templado'
  t.celsius = 25;
  console.log(t.categoria);    // 'Templado'
  console.log(describir(t));   // '25 °C = 77 °F'
  t.celsius = 26;
  console.log(t.categoria);    // 'Cálido'
  const t2 = new Termometro(0);
  console.log(t2.celsius);     // 0
  console.log(t.celsius);      // 26  (t y t2 no comparten temperatura)
  console.log(describir({ celsius: 0, fahrenheit: 32 })); // '0 °C = 32 °F'

ESTO DEBE FALLAR
  // t.categoria = 'Cálido';  → categoria solo tiene getter: no se puede asignar.
  // console.log(t._celsius);  → _celsius es private.
  // const malo: Temperatura = { celsius: 1 };  → falta fahrenheit.

EXPLICA
  ¿Por qué Termometro cumple Temperatura si fahrenheit no es una propiedad guardada?
  ¿Qué pasaría si el setter de fahrenheit guardara directamente en _celsius?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 46 — Nómina con clase abstracta
/*
SITUACIÓN
  Una empresa paga a tres tipos de trabajador, cada uno con su fórmula. La clase abstracta
  Trabajador fija lo común (nombre y ficha) y obliga a cada tipo a implementar
  calcularPago; el contrato Pagable permite sumar la nómina sin conocer los tipos.

QUÉ DEBES HACER
  1. Crea la interface Pagable con el método calcularPago(): number.
  2. Crea la clase abstracta Trabajador que declare implements Pagable. Declara en su
     constructor nombre (string, visible). Declara el método abstracto público
     calcularPago(): number (sin cuerpo).
  3. En Trabajador crea el método público ficha(): string que devuelve
     '{nombre}: {calcularPago()}'.
  4. Crea la clase Asalariado que extienda Trabajador. Su constructor recibe nombre y
     sueldo (number, oculto; supón >= 0). Su calcularPago() devuelve el sueldo menos
     una retención del 10% del sueldo cuando el sueldo es mayor que 10000 (con
     10000 o menos no hay retención).
  5. Crea la clase PorHoras que extienda Trabajador. Su constructor recibe nombre,
     horas y tarifa (number, ocultos, en ese orden). Su calcularPago() devuelve
     horas * tarifa.
  6. Crea la clase Comisionista que extienda Trabajador. Su constructor recibe nombre,
     base y ventas (number, ocultos, en ese orden). Su calcularPago() devuelve base más
     el 5% de las ventas.
  7. Crea la función nominaTotal(lista: Pagable[]): number que suma los pagos (0 si la
     lista está vacía).
  8. Crea la función quienCobraMas(lista: Trabajador[]): string que devuelve el nombre
     del trabajador con mayor pago (si hay empate, el primero); con la lista vacía
     devuelve 'Nadie'.
  9. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const a = new Asalariado('Ana', 12000);
  const b = new Asalariado('Beto', 10000);
  const c = new PorHoras('Cris', 100, 50);
  const d = new Comisionista('Dora', 4000, 20000);
  console.log(a.calcularPago());                    // 10800
  console.log(b.calcularPago());                    // 10000
  console.log(c.calcularPago());                    // 5000
  console.log(d.calcularPago());                    // 5000
  console.log(a.ficha());                           // 'Ana: 10800'
  console.log(nominaTotal([a, b, c, d]));           // 30800
  console.log(nominaTotal([]));                     // 0
  console.log(quienCobraMas([c, d]));               // 'Cris'
  console.log(quienCobraMas([c, d, a, b]));         // 'Ana'
  console.log(quienCobraMas([]));                   // 'Nadie'

ESTO DEBE FALLAR
  // new Trabajador('X');  → Trabajador es abstracta: no se puede instanciar.
  // class Incompleta extends Trabajador { }  → falta implementar calcularPago().
  // console.log(a.sueldo);  → sueldo es private.

EXPLICA
  ¿Por qué nominaTotal acepta un arreglo con Asalariado, PorHoras y Comisionista a la
  vez? ¿Qué obliga la clase abstracta que no obligaría una clase normal?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 47 — Ajustes compartidos (Singleton)
/*
SITUACIÓN
  Una aplicación tiene un único objeto de ajustes que todo el programa comparte. La clase
  impide crear más de uno, cumple el contrato Configuracion y cuenta, con un dato
  estático, cuántas lecturas se han hecho en total.

QUÉ DEBES HACER
  1. Crea la interface Configuracion con: el método leer(clave: string): string |
     undefined y el método escribir(clave: string, valor: string): boolean.
  2. Crea la clase Ajustes que declare implements Configuracion. Declara:
     a) la propiedad estática oculta instancia, de tipo Ajustes | undefined, sin valor
        inicial;
     b) la propiedad estática oculta lecturas (number) con valor inicial 0;
     c) la propiedad oculta valores, de tipo Record<string, string>, inicializada con {};
     d) un constructor oculto (private constructor) sin parámetros y con cuerpo vacío.
  3. En Ajustes crea el método estático público obtener(): Ajustes: si
     Ajustes.instancia es undefined, la crea con new Ajustes(); devuelve siempre
     Ajustes.instancia.
  4. En Ajustes crea el método estático público totalLecturas(): number que devuelve
     Ajustes.lecturas.
  5. En Ajustes crea el método público escribir(clave: string, valor: string): boolean:
     rechaza (false) si clave tiene 0 caracteres; si no, guarda valores[clave] = valor
     (sobrescribe si existía) y devuelve true.
  6. En Ajustes crea el método público leer(clave: string): string | undefined: suma 1
     a Ajustes.lecturas en cada llamada (exista o no la clave); si
     Object.hasOwn(this.valores, clave) es true devuelve this.valores[clave]; si no,
     devuelve undefined.
  7. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const a = Ajustes.obtener();
  const b = Ajustes.obtener();
  console.log(a === b);                    // true
  console.log(a.escribir('tema', 'oscuro')); // true
  console.log(a.escribir('', 'x'));        // false
  console.log(b.leer('tema'));             // 'oscuro'
  console.log(b.leer('idioma'));           // undefined
  console.log(Ajustes.totalLecturas());    // 2
  const cfg: Configuracion = Ajustes.obtener();
  console.log(cfg.leer('tema'));           // 'oscuro'
  console.log(Ajustes.totalLecturas());    // 3

ESTO DEBE FALLAR
  // new Ajustes();  → el constructor es private.
  // Ajustes.instancia = undefined;  → instancia es private.
  // Ajustes.lecturas = 0;  → lecturas es private.
  // a.totalLecturas();  → totalLecturas es estático: se llama con Ajustes.totalLecturas().

EXPLICA
  ¿Por qué a === b es true? ¿Qué cambiaría en tu código si quisieras que cada new Ajustes()
  creara un objeto independiente?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 48 — Almacén con códigos automáticos
/*
SITUACIÓN
  Una bodega crea productos con un código único e inmutable, generado con un contador
  compartido por toda la clase. El almacén cumple un contrato de inventario y su reporte
  lista solo los productos con existencias.

QUÉ DEBES HACER
  1. Crea la clase Producto. Declara:
     a) la propiedad estática oculta siguiente (number) con valor inicial 1;
     b) la propiedad pública de solo lectura codigo (string), sin valor inicial;
     c) un constructor que recibe nombre (string, visible).
  2. En el constructor de Producto asigna a this.codigo el texto 'P-' seguido del valor
     de Producto.siguiente con tres dígitos (conviértelo a texto con una plantilla
     `${Producto.siguiente}` y usa padStart(3, '0')); después suma 1 a
     Producto.siguiente.
  3. Crea la interface Inventariable con: el método existencias(codigo: string): number,
     el método ingresar(producto: Producto, cantidad: number): boolean y el método
     sacar(codigo: string, cantidad: number): boolean.
  4. Crea la clase Almacen que declare implements Inventariable. Declara la propiedad
     oculta stock, de tipo Record<string, number>, inicializada con {}.
  5. En Almacen crea el método público existencias(codigo: string): number: devuelve
     las existencias de ese código, o 0 si no hay registro (comprueba con
     Object.hasOwn).
  6. En Almacen crea el método público ingresar(producto: Producto, cantidad: number):
     boolean: rechaza (false) si cantidad es 0 o menos; si no, suma cantidad a las
     existencias de producto.codigo y devuelve true.
  7. En Almacen crea el método público sacar(codigo: string, cantidad: number):
     boolean: rechaza (false) si cantidad es 0 o menos o si es mayor que las
     existencias de ese código (sacar justo todas sí se acepta); si no, las resta y
     devuelve true. Un producto con 0 existencias sigue registrado.
  8. En Almacen crea el método público reporte(): string[]: recorre stock con for...in y
     devuelve '{codigo}: {cantidad}' solo para los códigos con cantidad mayor que 0,
     en el orden del recorrido.
  9. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const tuerca = new Producto('Tuerca');
  const clavo = new Producto('Clavo');
  console.log(tuerca.codigo);              // 'P-001'
  console.log(clavo.codigo);               // 'P-002'
  const alm = new Almacen();
  console.log(alm.ingresar(tuerca, 10));   // true
  console.log(alm.ingresar(clavo, 0));     // false
  console.log(alm.ingresar(clavo, 4));     // true
  console.log(alm.ingresar(tuerca, 5));    // true
  console.log(alm.existencias('P-001'));   // 15
  console.log(alm.sacar('P-001', 10));     // true
  console.log(alm.sacar('P-002', 5));      // false  (solo hay 4)
  console.log(alm.existencias('P-009'));   // 0
  console.log(alm.existencias('toString')); // 0
  console.log(alm.reporte().join(' | '));  // 'P-001: 5 | P-002: 4'
  console.log(alm.sacar('P-002', 4));      // true
  console.log(alm.reporte().join(' | '));  // 'P-001: 5'
  console.log(new Almacen().reporte().length); // 0
  console.log(new Producto('Arandela').codigo); // 'P-003'

ESTO DEBE FALLAR
  // tuerca.codigo = 'P-999';  → codigo es readonly.
  // Producto.siguiente = 1;  → siguiente es private.
  // console.log(alm.stock);  → stock es private.
  // alm.ingresar('P-001', 1);  → ingresar espera un Producto, no un texto.

EXPLICA
  ¿Por qué los códigos siguen aumentando aunque crees productos en distintos lugares?
  ¿Qué impide readonly y qué no impide?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 49 — Normalizar contactos
/*
SITUACIÓN
  Un importador recibe contactos de tres formas: un texto con nombres separados por comas,
  una lista de textos o un contacto ya armado. Todo se convierte a una lista de Contacto,
  sin vacíos ni repetidos, y se muestra con un formato que puede cambiarse.

QUÉ DEBES HACER
  1. Crea la interface Contacto con: nombre (string) y telefono (string, opcional).
  2. Crea la interface Formato con la firma de llamada (contacto: Contacto,
     indice: number): string.
  3. Crea la función normalizar(entrada: string | string[] | Contacto): Contacto[]:
     a) si typeof entrada es 'string', obtén los nombres con entrada.split(',');
     b) si no, si Array.isArray(entrada) es true, los nombres son los elementos de esa
        lista;
     c) en los casos a) y b): recorre los nombres, recorta cada uno con trim(),
        descarta los que queden vacíos y los que ya hayas agregado (mismo texto
        exacto), y agrega un objeto { nombre } por cada uno, conservando el orden;
     d) en cualquier otro caso, entrada ya es un Contacto: devuelve una lista con
        solo ese contacto;
     e) devuelve la lista de contactos.
  4. Crea la función describirTodos(lista: Contacto[], formato?: Formato): string[]
     que devuelve un texto por contacto, en orden:
     a) si se envió formato, el texto es formato(contacto, indice), con indice
        empezando en 0;
     b) si no se envió, el texto es '{indice + 1}. {nombre} ({telefono})', y si no hay
        teléfono, se escribe 'sin teléfono' dentro del paréntesis (usa ??).
  5. Ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  console.log(describirTodos(normalizar('Ana, Luis,, Ana , Eva')).join(' | ')); // '1. Ana (sin teléfono) | 2. Luis (sin teléfono) | 3. Eva (sin teléfono)'
  console.log(describirTodos(normalizar(['  Zoe ', 'Zoe', ''])).join(' | '));  // '1. Zoe (sin teléfono)'
  console.log(describirTodos(normalizar({ nombre: 'Ivo', telefono: '5551234' })).join(' | ')); // '1. Ivo (5551234)'
  console.log(normalizar('').length);    // 0
  console.log(normalizar([]).length);    // 0
  const inicial: Formato = (c, i) => `${i}:${c.nombre.charAt(0)}`;
  console.log(describirTodos(normalizar('Ana,Luis'), inicial).join(' '));      // '0:A 1:L'

ESTO DEBE FALLAR
  // normalizar(123);  → un number no es string, string[] ni Contacto.
  // normalizar({ telefono: '1' });  → al Contacto le falta nombre.
  // describirTodos([], 'x');  → formato debe ser una función Formato.

EXPLICA
  ¿Por qué dentro del último caso TypeScript sabe que entrada es un Contacto? ¿Qué pasa
  con los nombres repetidos que tienen espacios distintos, como 'Ana' y ' Ana '?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 50 — Tienda de pedidos
/*
SITUACIÓN
  Una tienda crea pedidos validándolos con una lista de reglas, los hace avanzar de
  estado, calcula totales con descuentos intercambiables y resume cuántos pedidos hay en
  cada estado. Integra interfaces de datos, de métodos, de funciones y de clases, junto con
  enum, static, Record y opcionales.

QUÉ DEBES HACER
  1. Crea el enum Estado con tres miembros, sin valores explícitos: Pendiente, Pagado
     y Enviado.
  2. Crea las interfaces de datos:
     a) Direccion con ciudad (string) y codigoPostal (string);
     b) Cliente con nombre (string) y direccion (Direccion, opcional);
     c) Linea con producto (string), cantidad (number) y precio (number);
     d) Pedido con id (number), cliente (Cliente), lineas (Linea[]) y estado (Estado).
  3. Crea la interface Descuento con el método aplicar(total: number): number.
  4. Crea la interface Regla con la firma de llamada (cliente: Cliente, lineas: Linea[]):
     string | undefined. Devuelve un texto con el motivo del rechazo, o undefined si
     la regla se cumple.
  5. Crea la clase CuponPorcentaje que declare implements Descuento. Su constructor
     declara porcentaje (number, oculto; supón entre 0 y 100). Su método público
     aplicar devuelve total - total * porcentaje / 100.
  6. Crea la clase CuponFijo que declare implements Descuento. Su constructor declara
     monto (number, oculto; supón >= 0). Su método público aplicar devuelve total -
     monto, pero nunca menos de 0.
  7. Crea tres constantes de tipo Regla:
     a) sinLineas: devuelve 'Pedido vacío' si lineas tiene 0 elementos; si no,
        undefined;
     b) sinDireccion: devuelve 'Falta dirección' si el cliente no tiene direccion; si
        no, undefined;
     c) cantidadInvalida: recorre lineas y devuelve 'Cantidad inválida' si alguna
        tiene cantidad 0 o menos; si ninguna, undefined.
  8. Crea la función nombreEstado(e: Estado): string que devuelve 'Pendiente', 'Pagado'
     o 'Enviado' según el estado (usa if).
  9. Crea la clase Tienda. Declara:
     a) la propiedad estática oculta siguienteId (number) con valor inicial 1;
     b) la propiedad oculta pedidos, de tipo Pedido[], inicializada con [];
     c) un constructor que declara reglas (Regla[], oculto).
  10. En Tienda crea el método público crearPedido(cliente: Cliente, lineas: Linea[]):
      string:
      a) recorre this.reglas en orden; llama a cada regla con cliente y lineas; con
         la primera que devuelva un texto, devuelve ese texto y no crea nada;
      b) si todas devuelven undefined, crea un Pedido con id igual a
         Tienda.siguienteId, el cliente, las líneas y estado Estado.Pendiente; lo agrega
         a pedidos; suma 1 a Tienda.siguienteId;
      c) devuelve 'Pedido {id} creado'.
  11. En Tienda crea el método público avanzar(id: number): boolean: busca el pedido con
      ese id; rechaza (false) si no existe o si su estado ya es Enviado; si es
      Pendiente pasa a Pagado, y si es Pagado pasa a Enviado; devuelve true.
  12. En Tienda crea el método público total(id: number, descuento?: Descuento):
      number | undefined: devuelve undefined si no existe el pedido; si existe, suma
      cantidad * precio de sus líneas; si se envió descuento, devuelve
      descuento.aplicar(suma); si no, devuelve suma.
  13. En Tienda crea el método público resumen(): Record<string, number>: crea el
      objeto { Pendiente: 0, Pagado: 0, Enviado: 0 } (de tipo Record<string, number>);
      recorre pedidos y, por cada uno, suma 1 en la clave nombreEstado(pedido.estado)
      (como una lectura puede ser undefined, usa (resultado[clave] ?? 0) + 1);
      devuelve el objeto.
  14. Ejecuta las líneas de COMPRUEBA, en este orden.

COMPRUEBA
  const tienda = new Tienda([sinLineas, sinDireccion, cantidadInvalida]);
  const ana: Cliente = { nombre: 'Ana', direccion: { ciudad: 'Puebla', codigoPostal: '72000' } };
  const luis: Cliente = { nombre: 'Luis' };
  const lamparas: Linea[] = [
      { producto: 'Lámpara', cantidad: 2, precio: 120 },
      { producto: 'Foco', cantidad: 3, precio: 10 },
  ];
  console.log(tienda.crearPedido(luis, []));        // 'Pedido vacío'
  console.log(tienda.crearPedido(ana, []));         // 'Pedido vacío'
  console.log(tienda.crearPedido(luis, lamparas));  // 'Falta dirección'
  console.log(tienda.crearPedido(ana, [{ producto: 'Foco', cantidad: 0, precio: 10 }])); // 'Cantidad inválida'
  console.log(tienda.crearPedido(ana, lamparas));   // 'Pedido 1 creado'
  console.log(tienda.crearPedido(ana, [{ producto: 'Taza', cantidad: 1, precio: 80 }])); // 'Pedido 2 creado'
  console.log(tienda.total(1));                     // 270
  console.log(tienda.total(1, new CuponPorcentaje(10))); // 243
  console.log(tienda.total(2, new CuponFijo(100))); // 0
  console.log(tienda.total(99));                    // undefined
  console.log(tienda.avanzar(1));                   // true  (Pendiente pasa a Pagado)
  console.log(tienda.avanzar(1));                   // true  (Pagado pasa a Enviado)
  console.log(tienda.avanzar(1));                   // false  (ya está Enviado)
  console.log(tienda.avanzar(99));                  // false
  console.log(tienda.resumen());                    // { Pendiente: 1, Pagado: 0, Enviado: 1 }
  const otra = new Tienda([]);
  console.log(otra.crearPedido(luis, []));          // 'Pedido 3 creado'
  console.log(otra.resumen());                      // { Pendiente: 1, Pagado: 0, Enviado: 0 }
  console.log(tienda.resumen());                    // { Pendiente: 1, Pagado: 0, Enviado: 1 }

ESTO DEBE FALLAR
  // new CuponFijo('10');  → monto debe ser number.
  // console.log(tienda.pedidos);  → pedidos es private.
  // Tienda.siguienteId = 1;  → siguienteId es private.
  // const malo: Pedido = { id: 1, cliente: luis, lineas: [], estado: 'Pendiente' };  → estado debe ser un valor del enum Estado.
  // tienda.crearPedido(ana);  → falta el argumento lineas.

EXPLICA
  ¿Por qué otra.crearPedido(luis, []) crea el pedido 3 y no el 1? ¿Qué cambia entre tienda
  y otra, y qué comparten?
*/
(() => {
    // Tu solución.
})();
