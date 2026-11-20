/*
COMPENDIO 01 — CLASES (sección 08 completa)
50 ejercicios con dificultad creciente. Los primeros refuerzan un solo tema de la
sección; cada bloque siguiente añade un tema nuevo y recupera los anteriores; los
últimos integran todo lo permitido, incluidos conocimientos de las secciones previas.

SUBSECCIONES EJERCITADAS (08.Clases)
  01 Definición ........ class, new, this, constructor, public/private, propiedades
                         opcionales (?) y readonly
  02 Formas cortas ..... propiedades de parámetro: public/private/protected/readonly
                         delante de un parámetro del constructor
  03 Métodos ........... métodos públicos y privados, propiedades y métodos static
  04 Extense ........... extends, super(...), super.metodo(), protected
     (05.Herencia está vacía: se ejercita el mismo tema que 04)
  06 gets&sets ......... get y set
  07 Clases abstractas . abstract class y métodos abstract
  08 Constructor ....... constructor private y patrón Singleton

SECCIONES PREVIAS QUE TAMBIÉN SE USAN
  03 Tipos de datos: string, number, boolean, arrays, tuplas, enum, never,
     null/undefined, uniones con |
  04 Funciones: parámetros opcionales, por defecto y rest, tipos función
  05 Objetos: type, métodos de objetos, uniones
  07 ES6: const/let, for...of, for...in, desestructuración, typeof, Array.isArray,
     Object.hasOwn y Record<string, number>

ORGANIZACIÓN
  Bloque A · Ejercicios 01–06 .... 01 Definición (tipos básicos, funciones, for...of)
  Bloque B · Ejercicios 07–11 .... 02 Formas cortas (01, tuplas, enum, Record, rest/defecto)
  Bloque C · Ejercicios 12–19 .... 03 Métodos públicos y privados (01–02, arrays, Record, tuplas, rest)
  Bloque D · Ejercicios 20–24 .... 03 static (01–03)
  Bloque E · Ejercicios 25–31 .... 04 extends, super y protected (01–03)
  Bloque F · Ejercicios 32–37 .... 06 get y set (01–04, never, tuplas)
  Bloque G · Ejercicios 38–42 .... 07 Clases abstractas (01–06)
  Bloque H · Ejercicios 43–45 .... 08 Constructor privado y Singleton (01–07)
  Bloque I · Ejercicios 46–50 .... Integración final (todo lo anterior)

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN y RESTRICCIONES: te dicen qué se modela, un ejemplo resuelto, la idea
     que se entrena, qué datos esperar y con qué herramientas puedes (y no puedes) resolverlo.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta que
     se puede teclear sin deducir nada.
  3. Escribe tu solución debajo de «// Tu solución.» de ese ejercicio, al nivel del archivo
     (sin envolverla en una función), con los nombres exactos que pide el enunciado: las
     pruebas automáticas del final los usan, así que no son opcionales. Tus propias
     variables internas y parámetros pueden llamarse como prefieras.
  4. Antes de ejecutar, predice a mano el resultado de cada línea de COMPRUEBA (haz una
     tabla de seguimiento: variable por variable, paso por paso).
  5. Ejecuta el archivo: node --experimental-transform-types Compendio01.ts
     Cada ejercicio muestra ✔ (pasa), ✘ con lo obtenido y lo esperado (falla) o …
     pendiente (aún no existe tu código). Las líneas de COMPRUEBA siguen sirviendo para
     ver los valores: copia las que quieras debajo de tu solución y compáralas con //.
  6. Prueba ESTO DEBE FALLAR una por una: descomenta la línea, comprueba que TypeScript
     marca error y vuelve a comentarla. Si una comprobación falla, NO cambies código al
     azar: haz la tabla de seguimiento con el caso que falló.
  7. Responde EXPLICA en un comentario bajo tu solución.

RESTRICCIONES (en cada ejercicio)
  Datos ..... qué entradas puedes esperar (rangos, vacío, repetidos...).
  Usa ....... las herramientas del curso que debes emplear.
  No uses ... lo que está prohibido en ESE ejercicio (lo que aún no se ha visto).

VOCABULARIO DE LOS ENUNCIADOS
  «oculto» = private · «visible» = public · «solo jerarquía» = protected
  «solo lectura» = readonly · «de clase» = static.
  «Declarar en el constructor» = poner public/private/protected/readonly delante del
  parámetro del constructor (propiedad de parámetro).
  «Supón» = el dato ya es válido; no lo compruebes.
  «Rechaza» = el método devuelve false, undefined o [] según se indique y no cambia
  el estado de nada.
  «Copia» = un array nuevo con los mismos elementos; no se devuelve el array interno.
  {llaves} en un texto = valor que sustituyes; las llaves no se escriben.
  Entero = número cuyo resto al dividirlo entre 1 es 0 (n % 1 === 0).
  En los resultados esperados, un texto aparece entre comillas ('Ana') y los arrays y
  objetos con el formato de Node ([ 'a', 'b' ], { a: 1 }). console.log muestra el
  texto sin comillas cuando es un solo valor; las comillas solo indican que es string.

REGLAS COMUNES
  - Cada ejercicio va dentro de su función (() => { ... })(); son independientes y
    pueden repetir nombres de clases.
  - Pon tipo a las propiedades, los parámetros y los retornos. No uses any.
  - Conserva exactamente los nombres de clases, métodos y propiedades que se piden.
  - Un método que modifica y devuelve boolean devuelve true si acepta y false si
    rechaza. Si rechaza, no cambia nada y no lanza errores, salvo que se indique.
  - Un método que consulta no modifica nada. Imprimir no sustituye a devolver.
  - Un array u objeto oculto no puede llamarse igual que un método de la misma clase.
  - Los recorridos se pueden hacer con for, while, for...of y for...in. Si conoces
    métodos de arrays (push, join, etc.) puedes usarlos, pero ninguno es obligatorio.
  - Usa solo los operadores aritméticos y de comparación habituales: ningún ejercicio
    exige Math ni otras funciones de biblioteca.
  - Fuera de las clases solo se escriben las funciones que el ejercicio pide, las
    instancias y las líneas de COMPRUEBA.
  - Las líneas que lanzan un Error en ejecución (ejercicio 35) se descomentan al
    final, de una en una: cada una detiene el programa.

PROHIBIDO (no se ha visto en el curso)
  interfaces, implements, genéricos propios (<T>), decoradores, namespaces,
  import/export, Map, Set, instanceof, try/catch, async, la palabra override,
  campos con #, accesores static, abstract en propiedades o accesores, any.
  Una subclase no redefine con el mismo nombre un método concreto de su padre:
  solo añade métodos nuevos o implementa los métodos abstract.
  Un ejercicio solo usa lo que su bloque y los anteriores permiten: static no se usa
  antes del ejercicio 20, extends no antes del 25, get/set no antes del 32,
  abstract no antes del 38 y el constructor private no antes del 43.

INTEGRACIÓN
  Cada bloque añade un tema y repasa los anteriores. Los ejercicios 46–50 combinan
  clases abstractas, herencia, static, accesores, constructor privado, colecciones,
  enum, tuplas, Record y funciones como parámetro.

No hay soluciones incluidas.
*/
// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE A — EJERCICIOS 01 AL 06: 01 DEFINICIÓN DE UNA CLASE
// Propiedades declaradas en la clase y asignadas en el constructor con this.
// Todavía no hay métodos: la lógica vive en el constructor y en funciones sueltas.
// ═══════════════════════════════════════════════════════════════════════════
// !EJERCICIO 01 — Termómetro de pared
/*
SITUACIÓN
  Una tienda de clima vende termómetros de pared. Cada termómetro se fabrica con la
  temperatura en grados Celsius y queda con tres datos visibles: esa temperatura (celsius),
  su equivalente en Fahrenheit (celsius * 9 / 5 + 32) y un estado que la describe: 'helado'
  si celsius es 0 o menos, 'caluroso' si es 30 o más y 'templado' en cualquier otro caso.
  Los tres datos se fijan al fabricarlo.

  La tienda también necesita saber, dada una lista de termómetros y un estado, cuántos
  termómetros de la lista tienen ese estado (0 si la lista está vacía).

  Ejemplo: new Termometro(25) guarda celsius 25, fahrenheit 77 y estado 'templado'. Con la
    lista [new Termometro(0), new Termometro(25), new Termometro(30)], contarEstado(lista,
    'templado') devuelve 1 (solo el de 25), contarEstado(lista, 'helado') devuelve 1 y con
    una lista vacía cualquier estado da 0.

  Idea: un constructor que calcula datos derivados con if / else if / else, y una función
    externa que usa la clase como tipo: Termometro[] significa «un array donde cada elemento
    es un Termometro», así que dentro del for...of cada elemento tiene .estado. El contador
    se declara antes del bucle. Trampa: los bordes (0 o menos es 'helado'; 30 o más es
    'caluroso').

RESTRICCIONES
  Datos:
  - celsius: número entero (puede ser negativo o 0).
  - La lista puede estar vacía; estado es cualquier texto.
  Usa:
  - class, new, this y propiedades visibles.
  - if / else if / else en el constructor.
  - for...of para recorrer la lista.
  No uses:
  - propiedades de parámetro, métodos de clase, static, extends, get/set, abstract.
  - Modificar los termómetros de la lista.

QUÉ DEBES HACER
  1. Crea la clase Termometro con las propiedades visibles celsius (number), fahrenheit
     (number) y estado (string). Su constructor recibe celsius (number).
  2. Fuera de la clase, crea contarEstado(lista: Termometro[], estado: string): number.
  3. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const t1 = new Termometro(0);
  const t2 = new Termometro(25);
  const t3 = new Termometro(30);
  const t4 = new Termometro(-40);
  console.log(t1.fahrenheit, t1.estado);  // 32 'helado'
  console.log(t2.fahrenheit, t2.estado);  // 77 'templado'
  console.log(t3.estado, t4.fahrenheit);  // 'caluroso' -40
  const lista: Termometro[] = [t1, t2, t3, t4, new Termometro(1), new Termometro(29)];
  console.log(contarEstado(lista, 'templado'));  // 3
  console.log(contarEstado(lista, 'helado'), contarEstado(lista, 'caluroso'));  // 2 1
  console.log(contarEstado([], 'helado'));  // 0

ESTO DEBE FALLAR
  // const sinDato = new Termometro();  → falta el argumento celsius.
  // t1.estado = 5;  → estado es string.
  // console.log(t1.humedad);  → la propiedad no existe en la clase.

EXPLICA
  ¿Qué valor tendrá t1.estado si después haces t1.celsius = 40? ¿Por qué?
*/
// Tu solución.
class Termometro {
    celsius;
    fahrenheit;
    estado;
    constructor(celsius) {
        this.celsius = celsius;
        this.fahrenheit = celsius * 9 / 5 + 32;
        this.estado = celsius <= 0 ? 'helado'
            : celsius >= 30 ? 'caluroso'
                : 'templado';
    }
}
function contarEstado(lista, estado) {
    let contador = 0;
    // Con una lista vacía, el for...of no itera y la función devuelve contador, que vale 0.
    for (const termometro of lista) {
        if (termometro.estado === estado) {
            contador += 1;
        }
    }
    return contador;
}
// !EJERCICIO 02 — Etiquetas con código fijo
/*
SITUACIÓN
  Un almacén imprime etiquetas para sus productos. Cada etiqueta se crea con un prefijo
  (texto), un número y una descripción. Su código se arma una sola vez, al crearla, con el
  formato prefijo-número, donde el número siempre lleva tres dígitos: de 1 a 9 se rellena
  con dos ceros a la izquierda, de 10 a 99 con uno y de 100 a 999 con ninguno. Así, 'ROP' y
  7 dan 'ROP-007'; 42 da 'ROP-042' y 105 da 'ROP-105'. El código nunca cambia después; la
  descripción sí puede corregirse.

  El almacén necesita además dos consultas sobre una lista de etiquetas. La primera, dado un
  código, devuelve la primera etiqueta de la lista que tenga ese código, o undefined si
  ninguna lo tiene. La segunda cuenta cuántas etiquetas repiten un código que ya había
  aparecido antes en la lista: la primera aparición de un código no cuenta y las siguientes
  sí (0 en una lista vacía).

  Ejemplo: new Etiqueta('ROP', 7, 'Camisa') guarda el código 'ROP-007'; con 42 sería
    'ROP-042' y con 105, 'ZAP-105'. En la lista [ROP-007, ROP-042, ZAP-105, ROP-007],
    buscarEtiqueta(lista, 'ZAP-105') devuelve la tercera etiqueta, buscarEtiqueta(lista,
    'XXX-001') devuelve undefined y repetidos(lista) devuelve 1 (la segunda aparición de
    'ROP-007').

  Idea: una propiedad readonly se asigna una sola vez, en el constructor. La trampa está en
    rellenar con ceros según el tamaño del número.

RESTRICCIONES
  Datos:
  - numero: entero entre 1 y 999.
  - prefijo y descripcion: cualquier texto (pueden ser '').
  - La lista puede estar vacía y tener códigos repetidos.
  Usa:
  - readonly para el código.
  - Una variable local con los ceros de relleno.
  - for...of y un array local con los códigos ya vistos.
  No uses:
  - propiedades de parámetro, métodos de clase, static, extends, get/set, abstract.
  - Modificar las etiquetas de la lista.

QUÉ DEBES HACER
  1. Crea la clase Etiqueta con las propiedades visibles codigo (string, de solo lectura) y
     descripcion (string). Su constructor recibe, en este orden, prefijo (string), numero
     (number) y descripcion (string).
  2. Fuera de la clase, crea buscarEtiqueta(lista: Etiqueta[], codigo: string): Etiqueta |
     undefined.
  3. Fuera de la clase, crea repetidos(lista: Etiqueta[]): number.
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

EXPLICA
  ¿Qué diferencia hay entre poder leer codigo y poder reasignarlo? ¿Por qué
  descripcion sí se pudo cambiar?
*/
class Etiqueta {
    codigo;
    descripcion;
    constructor(prefijo, numero, descripcion) {
        let relleno = '';
        if (numero < 10) {
            relleno = '00';
        }
        else if (numero < 100) {
            relleno = '0';
        }
        else {
            relleno = '';
        }
        this.codigo = prefijo + '-' + relleno + numero;
        this.descripcion = descripcion;
    }
}
function buscarEtiqueta(lista, codigo) {
    for (const etiqueta of lista) {
        if (etiqueta.codigo === codigo) {
            return etiqueta;
        }
    }
    return undefined;
}
function repetidos(lista) {
    const vistos = [];
    let contador = 0;
    for (const etiqueta of lista) {
        if (vistos.includes(etiqueta.codigo)) {
            contador += 1;
        }
        else {
            vistos.push(etiqueta.codigo);
        }
    }
    return contador;
}
// !EJERCICIO 03 — Contactos con teléfono opcional
/*
SITUACIÓN
  Una agenda guarda contactos con su nombre y, solo si lo tienen, su teléfono. Un contacto
  no tiene teléfono cuando se crea sin él, con undefined o con el texto vacío '': en esos
  casos el contacto no guarda la propiedad teléfono.

  La agenda ofrece tres consultas. Describir un contacto da el texto 'nombre: teléfono' si
  tiene teléfono y 'nombre: sin teléfono' si no. Dada una lista de contactos, se piden los
  nombres (en el orden de la lista) de los que sí tienen teléfono, [] si ninguno; y el
  primer contacto de la lista que no tiene teléfono, o undefined si todos tienen.

  Ejemplo: new Contacto('Beto') no tiene teléfono; describir(beto) devuelve 'Beto: sin
    teléfono'. Con 'Carla' y '' ocurre lo mismo. Con new Contacto('Ana', '555'), describir
    devuelve 'Ana: 555'. En la lista [ana, beto], conTelefono(lista) devuelve ['Ana'] y
    primerSinTelefono(lista) devuelve a Beto.

  Idea: una propiedad opcional (?) solo se asigna cuando hay dato. Trampa: con
    exactOptionalPropertyTypes no se asigna undefined a una propiedad con ?.

RESTRICCIONES
  Datos:
  - nombre: cualquier texto.
  - telefono: puede faltar, ser undefined o ser ''.
  - La lista puede estar vacía.
  Usa:
  - Una propiedad opcional (?).
  - Comparación con undefined.
  - for...of y arrays.
  No uses:
  - propiedades de parámetro, métodos de clase, static, extends, get/set, abstract.
  - Modificar los contactos de la lista.

QUÉ DEBES HACER
  1. Crea la clase Contacto con las propiedades visibles nombre (string) y telefono (string,
     opcional). Su constructor recibe nombre (string) y telefono (string, opcional).
  2. Fuera de la clase, crea describir(c: Contacto): string.
  3. Fuera de la clase, crea conTelefono(lista: Contacto[]): string[].
  4. Fuera de la clase, crea primerSinTelefono(lista: Contacto[]): Contacto | undefined.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const a = new Contacto('Ana', '555-1010');
  const b = new Contacto('Beto');
  const c = new Contacto('Carla', '');
  console.log(describir(a));  // 'Ana: 555-1010'
  console.log(describir(b));  // 'Beto: sin teléfono'
  console.log(describir(c));  // 'Carla: sin teléfono'
  console.log(b.telefono, c.telefono);  // undefined undefined
  console.log(conTelefono([a, b, c, new Contacto('Dani', '555-2020')]));  // [ 'Ana', 'Dani' ]
  console.log(conTelefono([]));  // []
  console.log(primerSinTelefono([a, b, c])?.nombre);  // 'Beto'
  console.log(primerSinTelefono([a]));  // undefined

ESTO DEBE FALLAR
  // const largo: number = a.telefono.length;  → telefono puede ser undefined.
  // const sinNombre = new Contacto();  → nombre es obligatorio.

EXPLICA
  ¿Por qué hay que comprobar que telefono no sea undefined antes de usarlo? ¿Qué
  indica el ? en la declaración de la propiedad?
*/
// Tu solución.
// !EJERCICIO 04 — Candado con pin oculto
/*
SITUACIÓN
  Un gimnasio registra los candados de sus casilleros. Cada candado se crea con una etiqueta
  y un pin (texto). El pin es secreto: no debe poder leerse desde fuera; la etiqueta sí es
  visible. Al crearse, el candado clasifica la seguridad de su pin y deja visible ese nivel,
  que se decide en este orden: 'débil' si el pin tiene menos de 4 caracteres; 'débil' si
  todos los caracteres del pin son iguales entre sí (por ejemplo '1111'); 'fuerte' si no, y
  el pin tiene 6 caracteres o más; 'media' en cualquier otro caso.

  El gimnasio quiere saber, dada una lista de candados y un nivel, cuántos candados de la
  lista tienen ese nivel (0 si no hay ninguno).

  Ejemplo: new Candado('Gym 6', '111111') es 'débil' aunque tenga 6 caracteres, porque todos
    son iguales; '123456' sí es 'fuerte'. '1234' es 'media' (4 caracteres, no todos
    iguales). Con los candados de pin '111111', '123456' y '1234' en una lista,
    contarNivel(lista, 'débil') devuelve 1 y contarNivel(lista, 'fuerte') devuelve 1.

  Idea: el orden de las reglas decide el resultado: se evalúa de la más restrictiva a la
    menos restrictiva.

RESTRICCIONES
  Datos:
  - pin: texto de al menos 1 carácter.
  - etiqueta y nivel: cualquier texto.
  - La lista puede estar vacía.
  Usa:
  - private para el pin.
  - for...of y charAt(0) para comprobar si todos los caracteres son iguales.
  - for...of para recorrer la lista.
  No uses:
  - propiedades de parámetro, métodos de clase, static, extends, get/set, abstract.
  - Modificar los candados de la lista.

QUÉ DEBES HACER
  1. Crea la clase Candado con las propiedades pin (string, oculta), etiqueta (string,
     visible) y nivel (string, visible). Su constructor recibe, en este orden, etiqueta
     (string) y pin (string).
  2. Fuera de la clase, crea contarNivel(lista: Candado[], nivel: string): number.
  3. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const c1 = new Candado('Gym 1', '12');
  const c2 = new Candado('Gym 2', '1111');
  const c3 = new Candado('Gym 3', '1234');
  const c4 = new Candado('Gym 4', '12345');
  const c5 = new Candado('Gym 5', '123456');
  const c6 = new Candado('Gym 6', '111111');
  const c7 = new Candado('Gym 7', '1213');
  console.log(c1.nivel, c2.nivel, c3.nivel);  // 'débil' 'débil' 'media'
  console.log(c4.nivel, c5.nivel, c6.nivel);  // 'media' 'fuerte' 'débil'
  console.log(c7.nivel, c7.etiqueta);  // 'media' 'Gym 7'
  const lista: Candado[] = [c1, c2, c3, c4, c5, c6, c7];
  console.log(contarNivel(lista, 'débil'), contarNivel(lista, 'media'), contarNivel(lista, 'fuerte'));  // 3 3 1
  console.log(contarNivel([], 'media'));  // 0

ESTO DEBE FALLAR
  // console.log(c1.pin);  → pin es private.
  // c3.pin = '0000';  → pin es private.

EXPLICA
  ¿Por qué el candado 6 es 'débil' aunque tenga 6 caracteres? ¿Qué regla lo decide
  y por qué importa el orden en que evalúas a), b) y c)?
*/
// Tu solución.
// !EJERCICIO 05 — Tarifa de estacionamiento
/*
SITUACIÓN
  Un estacionamiento cobra por hora. Cada vehículo se registra con su placa, su tipo
  ('moto', 'auto' o 'camion') y las horas que estuvo. Al registrarse, el vehículo calcula su
  tarifa por hora (10 si es moto, 20 si es auto, 35 si es camion) y su total: horas por
  tarifa. Si estuvo más de 8 horas (8 exactas no cuentan), al total se le descuenta su
  quinta parte.

  El estacionamiento necesita, dada una lista de vehículos, la recaudación (la suma de los
  totales; 0 si la lista está vacía) y el vehículo con mayor total: si dos tienen el mismo
  total gana el que aparece antes en la lista, y si la lista está vacía no hay ninguno
  (undefined).

  Ejemplo: new Vehiculo('A-3', 'auto', 9) cobra 9 * 20 = 180 y, como pasa de 8 horas,
    descuenta la quinta parte: total 144. Con [ese auto, new Vehiculo('M-1', 'moto', 2)] (la
    moto cobra 2 * 10 = 20), recaudacion devuelve 164 y masCaro devuelve el auto.

  Idea: calcular en el constructor valores derivados a partir de varios datos. Trampa: 8
    horas exactas no tienen descuento y 9 sí.

RESTRICCIONES
  Datos:
  - tipo: solo 'moto', 'auto' o 'camion'.
  - horas: entero >= 1.
  - La lista puede estar vacía.
  Usa:
  - if / else if en el constructor.
  - for...of con un acumulador para la suma.
  - Una comparación con el mayor encontrado hasta el momento.
  No uses:
  - propiedades de parámetro, métodos de clase, static, extends, get/set, abstract.
  - Modificar los vehículos de la lista.

QUÉ DEBES HACER
  1. Crea la clase Vehiculo con las propiedades visibles placa (string), tipo (string),
     horas (number), tarifa (number) y total (number). Su constructor recibe, en este orden,
     placa, tipo y horas.
  2. Fuera de la clase, crea recaudacion(lista: Vehiculo[]): number.
  3. Fuera de la clase, crea masCaro(lista: Vehiculo[]): Vehiculo | undefined.
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const v1 = new Vehiculo('M-1', 'moto', 3);
  const v2 = new Vehiculo('A-2', 'auto', 8);
  const v3 = new Vehiculo('A-3', 'auto', 9);
  const v4 = new Vehiculo('C-4', 'camion', 10);
  const v5 = new Vehiculo('C-5', 'camion', 2);
  console.log(v1.total, v2.total);  // 30 160
  console.log(v3.total, v4.total, v5.total);  // 144 280 70
  console.log(recaudacion([v1, v2, v3, v4, v5]));  // 684
  console.log(recaudacion([]));  // 0
  console.log(masCaro([v1, v2, v3, v4, v5])?.placa);  // 'C-4'
  const v6 = new Vehiculo('C-6', 'camion', 4);
  const v7 = new Vehiculo('A-7', 'auto', 7);
  console.log(masCaro([v7, v6])?.placa);  // 'A-7'
  console.log(masCaro([]));  // undefined

ESTO DEBE FALLAR
  // const sinHoras = new Vehiculo('M-1', 'moto');  → falta el argumento horas.
  // v1.total = 'gratis';  → total es number.

EXPLICA
  ¿Por qué 8 horas no tienen descuento y 9 sí? ¿Qué tendrías que hacer para que
  total refleje un cambio posterior de v1.horas?
*/
// Tu solución.
// !EJERCICIO 06 — Cadena de eslabones
/*
SITUACIÓN
  Una cadena de montaje enlaza estaciones. Cada eslabón tiene un nombre y, si no es el
  primero, conoce al eslabón anterior (su previo). El primer eslabón de la cadena no tiene
  previo.

  Se piden tres consultas que parten de un eslabón y retroceden por la cadena hasta el
  primero: cuántos eslabones tiene la cadena (contando el propio, mínimo 1); la lista de
  nombres, empezando por el eslabón dado y siguiendo previo tras previo; y el primer eslabón
  de la cadena, el que no tiene previo (si el eslabón dado no tiene previo, es él mismo).

  Ejemplo: c apunta a b y b apunta a a: recorrido(c) devuelve [ 'C', 'B', 'A' ]. Aquí a =
    new Eslabon('A'), b = new Eslabon('B', a) y c = new Eslabon('C', b); longitud(c)
    devuelve 3 y raiz(c) devuelve a. Con a solo: longitud(a) es 1, recorrido(a) es ['A'] y
    raiz(a) es a.

  Idea: una clase puede ser el tipo de una de sus propias propiedades; se avanza de eslabón
    en eslabón con un while hasta que previo sea undefined.

RESTRICCIONES
  Datos:
  - nombre: cualquier texto.
  - Las cadenas no tienen ciclos.
  Usa:
  - Una propiedad opcional cuyo tipo es la propia clase.
  - while para avanzar de eslabón en eslabón.
  No uses:
  - propiedades de parámetro, métodos de clase, static, extends, get/set, abstract.
  - Modificar los eslabones.

QUÉ DEBES HACER
  1. Crea la clase Eslabon con las propiedades visibles nombre (string) y previo (Eslabon,
     opcional). Su constructor recibe nombre (string) y previo (Eslabon, opcional).
  2. Fuera de la clase, crea longitud(e: Eslabon): number.
  3. Fuera de la clase, crea recorrido(e: Eslabon): string[].
  4. Fuera de la clase, crea raiz(e: Eslabon): Eslabon.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const a = new Eslabon('A');
  const b = new Eslabon('B', a);
  const c = new Eslabon('C', b);
  const d = new Eslabon('D', b);
  console.log(longitud(a), longitud(c), longitud(d));  // 1 3 3
  console.log(recorrido(c));  // [ 'C', 'B', 'A' ]
  console.log(recorrido(d));  // [ 'D', 'B', 'A' ]
  console.log(raiz(d).nombre);  // 'A'
  console.log(raiz(a) === a);  // true
  console.log(c.previo === b, a.previo);  // true undefined
  console.log(d.previo === c.previo);  // true

ESTO DEBE FALLAR
  // const mal = new Eslabon('X', 'A');  → previo debe ser un Eslabon, no un string.
  // console.log(a.previo.nombre);  → previo puede ser undefined.

EXPLICA
  ¿c y d comparten el mismo eslabón previo o cada uno tiene una copia? ¿Cómo lo
  muestra la última línea de COMPRUEBA?
*/
// Tu solución.
// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE B — EJERCICIOS 07 AL 11: 02 FORMAS CORTAS DE ASIGNAR PROPIEDADES
// Propiedades de parámetro (public, private, readonly delante del parámetro del
// constructor) combinadas con lo del bloque A.
// ═══════════════════════════════════════════════════════════════════════════
// !EJERCICIO 07 — Precio de una entrada de cine
/*
SITUACIÓN
  Un cine vende entradas. Cada entrada se crea con la película, la edad del espectador y el
  número de sala. Al crearse calcula su precio: 40 si la edad es 12 o menos; 50 si no, y la
  edad es 65 o más; 80 en cualquier otro caso. Si la sala es la 3 (sala VIP) se suman 30 al
  precio ya calculado. La sala de una entrada nunca cambia.

  El cine necesita, dada una lista de entradas, la recaudación (la suma de los precios; 0 si
  la lista está vacía) y cuántas entradas son de una sala dada.

  Ejemplo: new Entrada('Cars', 10, 3): a los 10 años el precio base es 40 y, por ser sala
    VIP (3), se suman 30: precio 70. Con [esa entrada, new Entrada('Cars', 30, 1)] (precio
    80), recaudacionEntradas devuelve 150 y entradasDeSala(lista, 3) devuelve 1.

  Idea: propiedades de parámetro (sala, de solo lectura) combinadas con una propiedad
    declarada aparte (precio), calculada en el cuerpo del constructor.

RESTRICCIONES
  Datos:
  - edad: entero >= 0.
  - sala: número entero.
  - La lista puede estar vacía.
  Usa:
  - Propiedades de parámetro (public y readonly) en el constructor.
  - if / else if / else en el cuerpo del constructor.
  - for...of para recorrer la lista.
  No uses:
  - métodos de clase, static, extends, get/set, abstract.
  - Modificar las entradas de la lista.

QUÉ DEBES HACER
  1. Crea la clase Entrada con una propiedad visible declarada aparte, precio (number), y un
     constructor con tres propiedades de parámetro, en este orden: pelicula (string,
     visible), edad (number, visible) y sala (number, visible y de solo lectura).
  2. Fuera de la clase, crea recaudacionEntradas(lista: Entrada[]): number.
  3. Fuera de la clase, crea entradasDeSala(lista: Entrada[], sala: number): number.
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const e1 = new Entrada('Dune', 12, 1);
  const e2 = new Entrada('Dune', 13, 1);
  const e3 = new Entrada('Dune', 64, 2);
  const e4 = new Entrada('Dune', 65, 2);
  const e5 = new Entrada('Gala', 30, 3);
  const e6 = new Entrada('Gala', 8, 3);
  console.log(e1.precio, e2.precio, e3.precio);  // 40 80 80
  console.log(e4.precio, e5.precio, e6.precio);  // 50 110 70
  console.log(e5.pelicula, e5.edad, e5.sala);  // 'Gala' 30 3
  const lista: Entrada[] = [e1, e2, e3, e4, e5, e6];
  console.log(recaudacionEntradas(lista));  // 430
  console.log(recaudacionEntradas([]));  // 0
  console.log(entradasDeSala(lista, 3), entradasDeSala(lista, 9));  // 2 0

ESTO DEBE FALLAR
  // e5.sala = 1;  → sala es de solo lectura.
  // e1.precio = 'gratis';  → precio es number.

EXPLICA
  ¿Qué líneas habrías tenido que escribir para guardar sala si no usaras propiedad
  de parámetro? ¿Por qué precio no se declaró en el constructor?
*/
// Tu solución.
// !EJERCICIO 08 — Totales por cliente
/*
SITUACIÓN
  Un restaurante registra pedidos. Cada pedido tiene el cliente, el monto, una propina (0 si
  no se indica) y una nota opcional; todos esos datos son visibles. Al final del día se
  quiere saber cuánto gastó cada cliente: la suma de monto más propina de todos sus pedidos.
  Ese resultado es un objeto que asocia el nombre de cada cliente con su total.

  Con ese objeto se pide el cliente que más gastó. Si dos clientes empatan, gana el que
  aparece primero en el objeto (el primero que pidió); si el objeto está vacío no hay
  ninguno (undefined).

  Ejemplo: Ana pide 100 con propina 20 y luego 50 sin propina: totalesPorCliente da { Ana:
    170 }. Si Beto pide 120, totalesPorCliente da { Ana: 170, Beto: 120 } y mejorCliente de
    ese objeto devuelve 'Ana'.

  Idea: un parámetro con valor por defecto dentro de una propiedad de parámetro; un Record
    se acumula con ??. Trampa: un empate lo gana el primero insertado.

RESTRICCIONES
  Datos:
  - monto y propina: números >= 0.
  - nota: puede faltar.
  - La lista de pedidos y el objeto de totales pueden estar vacíos.
  Usa:
  - Propiedades de parámetro (public), con valor por defecto y opcional.
  - Record<string, number> y ?? (también al leer totales[clave], que con
    noUncheckedIndexedAccess puede ser undefined).
  - for...of para los pedidos; for...in con Object.hasOwn para el objeto.
  No uses:
  - métodos de clase, static, extends, get/set, abstract.
  - Modificar los pedidos ni el objeto de totales recibido.

QUÉ DEBES HACER
  1. Crea la clase Pedido con un constructor de cuatro propiedades de parámetro visibles, en
     este orden: cliente (string), monto (number), propina (number, con valor por defecto 0)
     y nota (string, opcional). El cuerpo del constructor queda vacío.
  2. Fuera de la clase, crea totalesPorCliente(pedidos: Pedido[]): Record<string, number>.
  3. Fuera de la clase, crea mejorCliente(totales: Record<string, number>): string |
     undefined.
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const p1 = new Pedido('Ana', 100);
  const p2 = new Pedido('Luis', 50, 10);
  const p3 = new Pedido('Ana', 80, 20, 'sin cebolla');
  const p4 = new Pedido('Luis', 40);
  const p5 = new Pedido('Rosa', 150);
  console.log(p1.propina, p1.nota);  // 0 undefined
  console.log(p3.propina, p3.nota);  // 20 'sin cebolla'
  console.log(new Pedido('Mia', 30, undefined, 'x').propina);  // 0
  const totales = totalesPorCliente([p1, p2, p3, p4, p5]);
  console.log(totales);  // { Ana: 200, Luis: 100, Rosa: 150 }
  console.log(mejorCliente(totales));  // 'Ana'
  console.log(mejorCliente(totalesPorCliente([new Pedido('Zoe', 100), new Pedido('Abe', 100)])));  // 'Zoe'
  console.log(totalesPorCliente([]));  // {}
  console.log(mejorCliente({}));  // undefined

ESTO DEBE FALLAR
  // const sinMonto = new Pedido('Ana');  → falta el argumento monto.
  // const mal = new Pedido('Ana', 10, '5');  → propina debe ser number.

EXPLICA
  ¿Qué valor recibe propina cuando se pasa undefined en su posición? ¿Por qué en
  mejorCliente un empate lo gana quien se insertó primero?
*/
// Tu solución.
// !EJERCICIO 09 — Estación meteorológica
/*
SITUACIÓN
  Una estación meteorológica se crea con su nombre y una lista de temperaturas medidas. No
  conserva la lista: solo guarda un resumen visible con la cantidad de mediciones, la
  temperatura máxima, la mínima y el promedio (la suma entre la cantidad, sin redondear). Si
  la lista está vacía, máximo, mínimo y promedio valen 0. Las temperaturas pueden ser
  negativas.

  Se pide, dada una lista de estaciones y un límite, los nombres (en orden) de las
  estaciones cuya temperatura máxima es el límite o más.

  Ejemplo: new Estacion('Norte', [10, 20, 30]) guarda cantidad 3, maximo 30, minimo 10 y
    promedio 20; la lista no queda guardada. Con otra estación new Estacion('Sur', [5, 8])
    (maximo 8), conAlerta([norte, sur], 25) devuelve ['Norte'].

  Idea: un parámetro del constructor sin modificador es solo un parámetro, no una propiedad.
    Trampa: arrancar maximo en 0 falla con temperaturas negativas; por eso se usa la bandera
    primero.

RESTRICCIONES
  Datos:
  - muestras: puede estar vacío y tener números negativos.
  - La lista de estaciones puede estar vacía.
  Usa:
  - El nombre como propiedad de parámetro; muestras como parámetro sin modificador.
  - for...of con una bandera booleana que marca la primera muestra.
  - for...of para recorrer la lista de estaciones.
  No uses:
  - métodos de clase, static, extends, get/set, abstract.
  - Math.max, Math.min ni guardar la lista de muestras en la clase.
  - Modificar las estaciones de la lista.

QUÉ DEBES HACER
  1. Crea la clase Estacion con las propiedades visibles cantidad, maximo, minimo y promedio
     (todas number). Su constructor recibe, en este orden, nombre (string, propiedad de
     parámetro visible) y muestras (number[], sin modificador).
  2. Fuera de la clase, crea conAlerta(lista: Estacion[], limite: number): string[].
  3. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const es1 = new Estacion('Norte', [10, 20, 30]);
  const es2 = new Estacion('Sur', [5]);
  const es3 = new Estacion('Vacía', []);
  const es4 = new Estacion('Mixta', [-3, 4, -8, 6]);
  const es5 = new Estacion('Fría', [-5, -2, -9, -4]);
  console.log(es1.cantidad, es1.maximo, es1.minimo, es1.promedio);  // 3 30 10 20
  console.log(es2.cantidad, es2.maximo, es2.minimo, es2.promedio);  // 1 5 5 5
  console.log(es3.cantidad, es3.maximo, es3.minimo, es3.promedio);  // 0 0 0 0
  console.log(es4.cantidad, es4.maximo, es4.minimo, es4.promedio);  // 4 6 -8 -0.25
  console.log(es5.cantidad, es5.maximo, es5.minimo, es5.promedio);  // 4 -2 -9 -5
  console.log(es1.nombre);  // 'Norte'
  console.log(conAlerta([es1, es2, es3, es4, es5], 6));  // [ 'Norte', 'Mixta' ]
  console.log(conAlerta([es5], 0));  // []

ESTO DEBE FALLAR
  // console.log(es1.muestras);  → muestras es solo un parámetro: no es una propiedad.
  // es1.promedio = '20';  → promedio es number.

EXPLICA
  ¿Por qué muestras no existe como propiedad? ¿Qué saldría en es5.maximo si
  empezaras maximo en 0 en lugar de usar primero?
*/
// Tu solución.
// !EJERCICIO 10 — Rutas con coordenadas
/*
SITUACIÓN
  Una app de reparto guarda rutas entre dos puntos de una cuadrícula; cada punto es una
  pareja [x, y]. Cada ruta tiene un nombre, un origen y un destino que no se pueden
  reasignar. Al crearse calcula su distancia en cuadras: lo que se avanza en x más lo que se
  avanza en y, siempre como número positivo (no importa el sentido). También indica si es
  redonda: true cuando origen y destino tienen las dos coordenadas iguales y false en otro
  caso.

  Se piden dos consultas sobre una lista de rutas: la de mayor distancia (si hay empate, la
  que aparece antes; si la lista está vacía, undefined) y los nombres, en orden, de las
  rutas cuya distancia es menor o igual a un máximo dado.

  Ejemplo: new Ruta('R', [1, 2], [4, 6]): dx = 3 y dy = 4, así que distancia es 7 y redonda
    es false. Con otra ruta new Ruta('S', [0, 0], [1, 1]) (distancia 2), masLarga([r, s])
    devuelve R y rutasCortas([r, s], 5) devuelve ['S'].

  Idea: tuplas [number, number] guardadas como readonly; el valor absoluto se obtiene sin
    Math. Trampa: readonly impide reasignar origen, no cambiar origen[0].

RESTRICCIONES
  Datos:
  - Cada punto es una pareja de números; las coordenadas pueden ser negativas.
  - La lista de rutas puede estar vacía.
  Usa:
  - Tuplas [number, number].
  - Propiedades de parámetro visibles y de solo lectura.
  - if para obtener el valor absoluto.
  No uses:
  - métodos de clase, static, extends, get/set, abstract.
  - Math.abs.
  - Modificar las rutas de la lista.

QUÉ DEBES HACER
  1. Crea la clase Ruta con las propiedades visibles distancia (number) y redonda (boolean),
     y un constructor con tres propiedades de parámetro visibles y de solo lectura, en este
     orden: nombre (string), origen ([number, number]) y destino ([number, number]).
  2. Fuera de la clase, crea masLarga(rutas: Ruta[]): Ruta | undefined.
  3. Fuera de la clase, crea rutasCortas(rutas: Ruta[], maximo: number): string[].
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const r1 = new Ruta('Casa-Trabajo', [0, 0], [3, 4]);
  const r2 = new Ruta('Gym', [5, 5], [2, 9]);
  const r3 = new Ruta('Paseo', [1, 1], [1, 1]);
  const r4 = new Ruta('Larga', [-2, -3], [4, 3]);
  console.log(r1.distancia, r2.distancia, r3.distancia, r4.distancia);  // 7 7 0 12
  console.log(r3.redonda, r1.redonda);  // true false
  console.log(masLarga([r1, r2, r3, r4])?.nombre);  // 'Larga'
  console.log(masLarga([r1, r2])?.nombre);  // 'Casa-Trabajo'
  console.log(masLarga([]));  // undefined
  console.log(rutasCortas([r1, r2, r3, r4], 7));  // [ 'Casa-Trabajo', 'Gym', 'Paseo' ]
  console.log(rutasCortas([r1, r2, r3, r4], 6));  // [ 'Paseo' ]
  console.log(rutasCortas([], 6));  // []
  r1.origen[0] = 9;
  console.log(r1.origen);  // [ 9, 0 ]

ESTO DEBE FALLAR
  // r1.origen = [1, 1];  → origen es de solo lectura.
  // const mala = new Ruta('X', [1], [2, 3]);  → origen debe tener exactamente dos números.

EXPLICA
  ¿Por qué r1.origen[0] = 9 no da error aunque origen sea de solo lectura? ¿Qué
  impide exactamente readonly?
*/
// Tu solución.
// !EJERCICIO 11 — Costo de paquetes por prioridad
/*
SITUACIÓN
  Una mensajería calcula el costo de cada paquete según su peso y su prioridad, que puede
  ser Baja, Media o Alta; si no se indica, es Baja. El costo se calcula al crear el paquete:
  10 por cada kilo; más 30 si la prioridad es Media o 80 si es Alta; más 50 si el peso es
  mayor que 20 kilos (20 exactos no cuentan). El destino de un paquete no cambia.

  Se piden dos consultas sobre una lista de paquetes. La primera es un resumen: cuántos
  paquetes hay de prioridad Baja, de Media y de Alta, en ese orden. La segunda es el costo
  total: la suma de los costos de todos los paquetes o, si se indica una prioridad, solo de
  los paquetes de esa prioridad (0 si no hay ninguno).

  Ejemplo: new Paquete('Lima', 25, Prioridad.Alta): 25 * 10 = 250, más 80 por Alta y 50 por
    pasar de 20 kilos: costo 380. Con [ese paquete, new Paquete('Cusco', 2)] (costo 20,
    prioridad Baja), resumen devuelve [1, 0, 1], costoTotal(lista) devuelve 400 y
    costoTotal(lista, Prioridad.Alta) devuelve 380.

  Idea: un enum y un parámetro opcional que puede valer 0. Trampa: Prioridad.Baja vale 0,
    así que preguntar if (prioridad) la descartaría; se compara con undefined.

RESTRICCIONES
  Datos:
  - peso: entero >= 1.
  - prioridad: puede omitirse (entonces es Baja).
  - La lista puede estar vacía.
  Usa:
  - enum Prioridad { Baja, Media, Alta } declarado dentro de tu función, antes de la clase.
  - Propiedades de parámetro, una de ellas con valor por defecto.
  - Una tupla [number, number, number] como retorno y un parámetro opcional comparado con
    undefined (Prioridad.Baja vale 0: no preguntes «si hay valor»).
  No uses:
  - métodos de clase, static, extends, get/set, abstract.
  - Modificar los paquetes de la lista.

QUÉ DEBES HACER
  1. Dentro de tu función, antes de la clase, declara: enum Prioridad { Baja, Media, Alta }
  2. Crea la clase Paquete con la propiedad visible costo (number) y un constructor con tres
     propiedades de parámetro, en este orden: destino (string, visible y de solo lectura),
     peso (number, visible) y prioridad (Prioridad, visible, con valor por defecto
     Prioridad.Baja).
  3. Fuera de la clase, crea resumen(lista: Paquete[]): [number, number, number].
  4. Fuera de la clase, crea costoTotal(lista: Paquete[], prioridad?: Prioridad): number.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const p1 = new Paquete('Lima', 5);
  const p2 = new Paquete('Lima', 5, Prioridad.Media);
  const p3 = new Paquete('Quito', 5, Prioridad.Alta);
  const p4 = new Paquete('Cusco', 20, Prioridad.Alta);
  const p5 = new Paquete('Cusco', 21);
  const p6 = new Paquete('Cusco', 21, Prioridad.Alta);
  console.log(p1.costo, p2.costo, p3.costo);  // 50 80 130
  console.log(p4.costo, p5.costo, p6.costo);  // 280 260 340
  console.log(Prioridad.Alta, p1.prioridad);  // 2 0
  const lista: Paquete[] = [p1, p2, p3, p4, p5, p6];
  console.log(resumen(lista));  // [ 2, 1, 3 ]
  console.log(resumen([]));  // [ 0, 0, 0 ]
  console.log(costoTotal(lista));  // 1140
  console.log(costoTotal(lista, Prioridad.Alta));  // 750
  console.log(costoTotal(lista, Prioridad.Baja));  // 310
  console.log(costoTotal([], Prioridad.Media));  // 0

ESTO DEBE FALLAR
  // const mal = new Paquete('Lima', 5, 'Alta');  → prioridad debe ser un valor del enum.
  // p1.destino = 'Cusco';  → destino es de solo lectura.

EXPLICA
  ¿Qué pasaría en costoTotal si preguntaras «if (prioridad)» en lugar de comparar
  con undefined? ¿Con qué valor numérico se corresponde Prioridad.Baja?
*/
// Tu solución.
// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE C — EJERCICIOS 12 AL 19: 03 MÉTODOS PÚBLICOS Y PRIVADOS
// Estado oculto (private) que solo cambia mediante métodos públicos; métodos
// privados de apoyo. Se combina con 01 y 02, arrays, tuplas, Record y rest.
// ═══════════════════════════════════════════════════════════════════════════
// !EJERCICIO 12 — Podómetro diario
/*
SITUACIÓN
  Un podómetro acumula los pasos del día, que empiezan en 0. Cada vez que se le informa una
  lectura, la acepta o la rechaza. Una lectura se rechaza si no es un número entero, si es
  menor que 1 o mayor que 2000 (1 y 2000 sí valen), o si sumada a los pasos acumulados
  superaría 20000 (20000 exactos sí se aceptan). Si se acepta, se suma a los pasos; un
  rechazo no modifica nada. Cada lectura informa con true si se aceptó y false si se
  rechazó. Nadie fuera del podómetro puede cambiar el contador.

  También se puede consultar el total de pasos acumulados y si ya se alcanzó una meta, es
  decir, si los pasos son iguales o mayores que ella.

  Ejemplo: Con pasos en 0, registrar(1500) devuelve true y total() da 1500; registrar(2500)
    devuelve false y total() sigue en 1500. Después de registrar 1500, metaCumplida(1500)
    devuelve true y metaCumplida(2000) devuelve false.

  Idea: estado private que solo cambia mediante un método público que valida en orden. Un
    rechazo no modifica nada.

RESTRICCIONES
  Datos:
  - cantidad: cualquier número (puede no ser entero o ser negativo).
  - meta: cualquier número.
  Usa:
  - Una propiedad private para los pasos.
  - Métodos públicos y if.
  No uses:
  - static, extends, get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Podometro con la propiedad oculta pasos (number), con valor inicial 0.
  2. En Podometro crea los métodos públicos registrar(cantidad: number): boolean, total():
     number y metaCumplida(meta: number): boolean.
  3. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const p = new Podometro();
  console.log(p.registrar(1500), p.total());  // true 1500
  console.log(p.registrar(0), p.registrar(2001), p.registrar(1.5));  // false false false
  console.log(p.total());  // 1500
  console.log(p.registrar(2000), p.total());  // true 3500
  for (let i = 0; i < 8; i++) { p.registrar(2000); }
  console.log(p.total());  // 19500
  console.log(p.registrar(501), p.total());  // false 19500
  console.log(p.registrar(500), p.total());  // true 20000
  console.log(p.registrar(1), p.total());  // false 20000
  console.log(p.metaCumplida(10000), p.metaCumplida(20000), p.metaCumplida(20001));  // true true false
  const q = new Podometro();
  console.log(q.registrar(1), q.registrar(-5), q.total());  // true false 1

ESTO DEBE FALLAR
  // console.log(p.pasos);  → pasos es private.
  // p.pasos = 0;  → pasos es private.
  // p.registrar('500');  → cantidad debe ser number.

EXPLICA
  ¿Por qué total() devuelve el valor en lugar de imprimirlo? ¿Qué garantiza que
  pasos nunca supere 20000?
*/
// Tu solución.
// !EJERCICIO 13 — Ascensor con límites
/*
SITUACIÓN
  Un ascensor se mueve entre el piso 0 y el último piso, que se indica al crearlo y no
  cambia. Empieza en el piso 0 y recuerda en qué piso está y cuántos pisos ha recorrido en
  total; ambos datos son privados. Un viaje a un destino se rechaza si el destino es menor
  que 0 o mayor que el último piso, o si es el mismo piso en que ya está. Si se acepta, el
  recorrido total aumenta con la distancia entre el piso actual y el destino (siempre
  positiva) y el ascensor queda en el destino. Cada viaje informa con true si se hizo y
  false si se rechazó.

  También se pueden pedir varios destinos seguidos: cada uno, en orden, se intenta como un
  viaje normal y se informa cuántos se aceptaron. Se pueden consultar el piso actual y los
  pisos recorridos.

  Ejemplo: Con ultimoPiso 10: irA(4) devuelve true (recorrido 4); luego irA(1) devuelve true
    (recorrido 4 + 3 = 7) y irA(1) otra vez devuelve false. En otro ascensor con ultimoPiso
    10, llamar([3, 3, 11, 5]) devuelve 2: acepta el 3 y el 5; rechaza el segundo 3 (ya está
    en ese piso) y el 11 (no existe).

  Idea: un método público reutiliza a otro (llamar usa irA) en lugar de repetir sus reglas.
    Trampa: la distancia recorrida siempre es positiva.

RESTRICCIONES
  Datos:
  - ultimoPiso: entero >= 1.
  - destino: número entero.
  - La lista de destinos puede estar vacía.
  Usa:
  - readonly y private en una propiedad de parámetro del constructor.
  - Un método que reutiliza a otro con this (en lugar de repetir sus reglas).
  - for...of para recorrer los destinos.
  No uses:
  - static, extends, get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Ascensor con un constructor que declara ultimoPiso (number, oculto y de
     solo lectura) y con dos propiedades ocultas, piso y recorrido (number), ambas con valor
     inicial 0.
  2. En Ascensor crea los métodos públicos irA(destino: number): boolean, llamar(destinos:
     number[]): number, pisoActual(): number y pisosRecorridos(): number.
  3. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const a = new Ascensor(10);
  console.log(a.irA(4), a.pisoActual());  // true 4
  console.log(a.irA(4), a.irA(11), a.irA(-1));  // false false false
  console.log(a.pisoActual(), a.pisosRecorridos());  // 4 4
  console.log(a.irA(0), a.pisosRecorridos());  // true 8
  console.log(a.irA(10), a.pisosRecorridos());  // true 18
  console.log(a.llamar([3, 3, 12, 7, 7, 1]));  // 3
  console.log(a.pisoActual(), a.pisosRecorridos());  // 1 35
  const b = new Ascensor(2);
  console.log(b.irA(2), b.irA(3), b.pisoActual());  // true false 2
  console.log(a.pisoActual());  // 1

ESTO DEBE FALLAR
  // console.log(a.piso);  → piso es private.
  // console.log(a.ultimoPiso);  → ultimoPiso es private.
  // a.irA();  → falta el argumento destino.

EXPLICA
  ¿Por qué llamar() no repite las reglas de irA? ¿Qué piso y qué recorrido quedan
  tras un destino rechazado?
*/
// Tu solución.
// !EJERCICIO 14 — Cajero con billetes limitados
/*
SITUACIÓN
  Un cajero guarda billetes de 100, 50 y 20; cuántos hay de cada uno se indica al crearlo y
  es privado. Para entregar un monto usa primero billetes de 100, luego de 50 y por último
  de 20, tomando de cada denominación todos los que pueda sin pasarse del monto restante ni
  de los que tiene. Si con eso no llega exactamente al monto, no entrega nada y su stock
  queda igual y responde 'imposible'. Si llega, resta de su stock los billetes entregados y
  responde con el texto '{n100}x100 {n50}x50 {n20}x20', con las cantidades usadas de cada
  billete (por ejemplo '1x100 1x50 1x20').

  También informa cuánto dinero tiene en total: 100 por cada billete de 100, 50 por cada uno
  de 50 y 20 por cada uno de 20.

  Ejemplo: con stock [1, 2, 3] (billetes de 100, 50 y 20): retirar(170) entrega '1x100 1x50
    1x20'; retirar(30) devuelve 'imposible' y el stock no cambia. Tras el primer retiro el
    stock queda [0, 1, 2] y disponible() devuelve 90 (50 + 2 * 20).

  Idea: separar el cálculo (calcular, privado y sin efectos) de la acción (retirar, que sí
    modifica). Así un monto imposible no deja el cajero a medias.

RESTRICCIONES
  Datos:
  - monto: entero >= 1.
  - stock: tres números con la cantidad de billetes de 100, de 50 y de 20, en ese orden.
  Usa:
  - Un método private (calcular) que hace la cuenta sin modificar el stock y devuelve las
    cantidades usadas, o undefined si no se puede.
  - Una tupla [number, number, number] y while.
  No uses:
  - static, extends, get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Cajero con un constructor que declara stock ([number, number, number],
     oculto).
  2. En Cajero crea el método privado calcular(monto: number): [number, number, number] |
     undefined.
  3. En Cajero crea los métodos públicos retirar(monto: number): string y disponible():
     number.
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const c = new Cajero([2, 1, 5]);
  console.log(c.disponible());  // 350
  console.log(c.retirar(270));  // '2x100 1x50 1x20'
  console.log(c.disponible());  // 80
  console.log(c.retirar(60));  // '0x100 0x50 3x20'
  console.log(c.disponible());  // 20
  console.log(c.retirar(40));  // 'imposible'
  console.log(c.disponible());  // 20
  console.log(c.retirar(20));  // '0x100 0x50 1x20'
  console.log(c.retirar(20));  // 'imposible'
  console.log(new Cajero([5, 5, 5]).retirar(30));  // 'imposible'
  console.log(new Cajero([0, 3, 0]).retirar(100));  // '0x100 2x50 0x20'
  console.log(new Cajero([1, 1, 1]).retirar(50));  // '0x100 1x50 0x20'

ESTO DEBE FALLAR
  // c.calcular(100);  → calcular es private.
  // console.log(c.stock);  → stock es private.
  // c.retirar('100');  → monto debe ser number.

EXPLICA
  ¿Por qué calcular no modifica el stock y retirar sí? ¿Qué ventaja tiene separarlos
  para no dejar el cajero a medias cuando el monto es imposible?
*/
// Tu solución.
// !EJERCICIO 15 — Lista de reproducción
/*
SITUACIÓN
  Una playlist guarda títulos de canciones sin repetir, en el orden en que se agregan.
  Agregar un título se rechaza si es el texto vacío '' o si ya existe uno exactamente igual
  (se distinguen mayúsculas y minúsculas); si no, se añade al final. Eliminar un título se
  rechaza si no existe; si existe, sale de la lista y los demás conservan su orden. Cada
  operación informa con true si se realizó y false si se rechazó.

  También se pueden consultar los títulos (como una copia: quien la recibe no puede alterar
  la lista interna), cuántos hay y el título con más caracteres (si hay empate, el que
  aparece primero; si no hay títulos, undefined).

  Ejemplo: Tras agregar('Sol') y agregar('Luna'), agregar('Sol') devuelve false y cantidad()
    sigue siendo 2. Con 'Sol' y 'Luna' guardadas, masLargo() devuelve 'Luna';
    eliminar('Sol') devuelve true y titulos() da ['Luna'].

  Idea: el array interno nunca sale de la clase: titulos() devuelve una copia. Trampa: el
    array oculto no puede llamarse titulos.

RESTRICCIONES
  Datos:
  - titulo: cualquier texto; las mayúsculas y las minúsculas cuentan como distintas.
  Usa:
  - Un array private (no lo llames titulos: ese es el nombre de un método).
  - Métodos públicos y un array nuevo al eliminar y para la copia.
  No uses:
  - static, extends, get/set, abstract.
  - Devolver el array interno.

QUÉ DEBES HACER
  1. Crea la clase Playlist con un array oculto canciones (string[]), vacío.
  2. En Playlist crea los métodos públicos agregar(titulo: string): boolean,
     eliminar(titulo: string): boolean, titulos(): string[], cantidad(): number y
     masLargo(): string | undefined.
  3. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const p = new Playlist();
  console.log(p.agregar('Alba'), p.agregar('Brisa'), p.agregar('Alba'));  // true true false
  console.log(p.agregar(''), p.agregar('alba'));  // false true
  console.log(p.titulos());  // [ 'Alba', 'Brisa', 'alba' ]
  const copia = p.titulos();
  copia.push('Intruso');
  console.log(p.cantidad());  // 3
  console.log(p.eliminar('Brisa'), p.eliminar('Brisa'));  // true false
  console.log(p.titulos());  // [ 'Alba', 'alba' ]
  console.log(p.masLargo());  // 'Alba'
  p.agregar('Amanecer');
  console.log(p.masLargo());  // 'Amanecer'
  console.log(new Playlist().masLargo());  // undefined
  const q = new Playlist();
  console.log(q.cantidad());  // 0

ESTO DEBE FALLAR
  // console.log(p.canciones);  → canciones es private.
  // p.agregar(5);  → titulo debe ser string.

EXPLICA
  ¿Por qué titulos() devuelve una copia? ¿Qué pasaría con p.cantidad() si devolviera
  el array interno y alguien le hiciera push?
*/
// Tu solución.
// !EJERCICIO 16 — Despensa por producto
/*
SITUACIÓN
  Una despensa lleva la cuenta de unidades por producto. Guardar un producto suma unidades a
  las que ya hay (si no existía, parte de 0); se rechaza si el nombre es '' o si la cantidad
  no es un entero mayor que 0. Sacar unidades se rechaza si la cantidad no es un entero
  mayor que 0, si el producto nunca existió o si hay menos unidades que las pedidas; si no,
  se restan. Un producto que llega a 0 unidades sigue existiendo en el registro. Cada
  operación informa con true si se realizó y false si se rechazó.

  También se pueden consultar las unidades de un producto (0 si nunca existió), los
  productos agotados (los que tienen 0 unidades, en el orden en que se registraron por
  primera vez) y el total de unidades de todos los productos.

  Ejemplo: Tras guardar('arroz', 5) y sacar('arroz', 5), unidades('arroz') es 0 y 'arroz'
    aparece en agotados(); 'sal', que nunca existió, no aparece. Si además se
    guarda('frijol', 3), total() devuelve 3.

  Idea: un Record oculto con ?? para acumular y Object.hasOwn para distinguir un producto
    agotado de uno inexistente.

RESTRICCIONES
  Datos:
  - producto: cualquier texto.
  - cantidad: cualquier número.
  Usa:
  - Un Record<string, number> private y ?? para acumular.
  - for...in con Object.hasOwn, para distinguir un producto agotado de uno inexistente.
  No uses:
  - static, extends, get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Despensa con un objeto oculto existencias (Record<string, number>),
     vacío.
  2. En Despensa crea los métodos públicos guardar(producto: string, cantidad: number):
     boolean, sacar(producto: string, cantidad: number): boolean, unidades(producto:
     string): number, agotados(): string[] y total(): number.
  3. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const d = new Despensa();
  console.log(d.guardar('arroz', 5), d.guardar('arroz', 3));  // true true
  console.log(d.guardar('frijol', 0), d.guardar('', 2), d.guardar('sal', 1.5));  // false false false
  console.log(d.unidades('arroz'), d.unidades('frijol'));  // 8 0
  console.log(d.sacar('arroz', 8), d.unidades('arroz'));  // true 0
  console.log(d.sacar('arroz', 1), d.sacar('sal', 1));  // false false
  d.guardar('sal', 2);
  d.guardar('azúcar', 4);
  console.log(d.agotados());  // [ 'arroz' ]
  console.log(d.sacar('sal', 2));  // true
  console.log(d.agotados());  // [ 'arroz', 'sal' ]
  console.log(d.sacar('azúcar', 5), d.sacar('azúcar', 0), d.unidades('azúcar'));  // false false 4
  console.log(d.total());  // 4
  console.log(new Despensa().agotados());  // []

ESTO DEBE FALLAR
  // console.log(d.existencias);  → existencias es private.
  // d.guardar('arroz');  → falta el argumento cantidad.
  // d.unidades(5);  → producto debe ser string.

EXPLICA
  ¿Cómo distingues un producto agotado de uno que nunca existió? ¿Por qué un
  rechazo en sacar no cambia las unidades?
*/
// Tu solución.
// !EJERCICIO 17 — Cronómetro con formato
/*
SITUACIÓN
  Un cronómetro acumula segundos, que empiezan en 0, y los muestra como
  horas:minutos:segundos. Se le pueden sumar segundos (se rechaza si no es un entero o es
  negativo; 0 se acepta) y restar segundos (se rechaza si no es un entero, es negativo o es
  mayor que los segundos acumulados). Cada operación informa con true si se realizó y false
  si se rechazó.

  El texto se forma así: las horas van sin ceros a la izquierda y los minutos y los segundos
  siempre con dos dígitos (de 0 a 9 se les antepone un 0), separados por ':'. Por ejemplo,
  3725 segundos son 1 hora, 2 minutos y 5 segundos: '1:02:05'. Poner los dos dígitos es un
  detalle interno del cronómetro que nadie fuera de la clase usa.

  Ejemplo: Con segundos en 3725, formato() devuelve '1:02:05' (1 hora, 2 minutos, 5
    segundos). Si después restar(3700) devuelve true, formato() da '0:00:25'; y restar(100)
    devuelve false porque solo quedan 25 segundos.

  Idea: un método privado auxiliar (dosDigitos) que solo usa la propia clase. Trampa: restar
    más de los segundos acumulados se rechaza.

RESTRICCIONES
  Datos:
  - s: cualquier número.
  - dosDigitos recibe un entero de 0 a 99.
  Usa:
  - Una propiedad private y un método private (dosDigitos).
  - El operador % y divisiones calculadas sin Math.
  No uses:
  - static, extends, get/set, abstract.
  - Math.floor ni padStart.

QUÉ DEBES HACER
  1. Crea la clase Cronometro con la propiedad oculta segundos (number), con valor inicial
     0.
  2. En Cronometro crea el método privado dosDigitos(n: number): string.
  3. En Cronometro crea los métodos públicos sumar(s: number): boolean, restar(s: number):
     boolean y formato(): string.
  4. Fuera de la clase, crea la instancia y ejecuta COMPRUEBA en el orden dado.

COMPRUEBA
  const c = new Cronometro();
  console.log(c.formato());  // '0:00:00'
  console.log(c.sumar(75), c.formato());  // true '0:01:15'
  console.log(c.sumar(3909), c.formato());  // true '1:06:24'
  console.log(c.restar(4000), c.formato());  // false '1:06:24'
  console.log(c.sumar(-1), c.sumar(2.5), c.restar(-1));  // false false false
  console.log(c.restar(3984), c.formato());  // true '0:00:00'
  console.log(c.sumar(59), c.formato());  // true '0:00:59'
  console.log(c.sumar(1), c.formato());  // true '0:01:00'
  console.log(c.sumar(3540), c.formato());  // true '1:00:00'
  console.log(c.sumar(0), c.restar(0), c.formato());  // true true '1:00:00'

ESTO DEBE FALLAR
  // c.dosDigitos(5);  → dosDigitos es private.
  // console.log(c.segundos);  → segundos es private.
  // c.sumar('5');  → s debe ser number.

EXPLICA
  ¿Por qué dosDigitos es privado y no público? ¿Qué segundos quedan tras
  c.restar(4000) rechazado?
*/
// Tu solución.
// !EJERCICIO 18 — Duelo entre jugadores
/*
SITUACIÓN
  Dos jugadores se atacan por turnos. Cada jugador tiene un nombre (visible), una vida y una
  fuerza (privadas) y una vida máxima, igual a la vida con la que empezó. Su vida nunca baja
  de 0 ni supera la máxima, y está vivo mientras sea mayor que 0. Al recibir daño, el daño
  real es el daño recibido pero nunca más que su vida actual: se resta de la vida y se
  informa cuánto fue. Al atacar a un rival, si cualquiera de los dos está muerto no pasa
  nada y el daño es 0; si no, el rival recibe un daño igual a la fuerza del atacante. Al
  curarse se rechaza (false) si el jugador está muerto o si los puntos no son un entero
  mayor que 0; si no, recupera esos puntos sin pasar de su vida máxima (true).

  Un combate entre dos jugadores vivos se juega por rondas: el primero ataca al segundo y,
  si el segundo sigue vivo, contraataca; así hasta que uno cae. El combate informa el nombre
  del jugador que sigue vivo.

  Ejemplo: Un jugador con vida 20 recibe dano 50: el daño real es 20 y su vida queda en 0.
    Al curarse nunca supera su vidaMaxima. Con Ana (vida 30, fuerza 10) y Beto (vida 25,
    fuerza 8), pelear(ana, beto) devuelve 'Ana': Ana golpea 3 veces y la vida de Beto llega
    a 0 antes de que él la derribe.

  Idea: dos objetos que se coordinan (atacar llama a recibirDano del rival) y límites en
    ambos extremos de la vida.

RESTRICCIONES
  Datos:
  - vida y fuerza: enteros >= 1.
  - dano: entero >= 0; puntos: cualquier número.
  - Los dos jugadores de un combate empiezan vivos.
  Usa:
  - readonly y private.
  - Objetos como argumento (atacar recibe al rival) y while.
  No uses:
  - static, extends, get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Jugador con un constructor de propiedades de parámetro, en este orden:
     nombre (string, visible y de solo lectura), vida (number, oculta) y fuerza (number,
     oculta); y con una propiedad oculta y de solo lectura vidaMaxima (number), que el
     constructor guarda igual a la vida inicial.
  2. En Jugador crea los métodos públicos estaVivo(): boolean, vidaRestante(): number,
     recibirDano(dano: number): number, atacar(rival: Jugador): number y curar(puntos:
     number): boolean.
  3. Fuera de la clase, crea pelear(a: Jugador, b: Jugador): string.
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const ana = new Jugador('Ana', 30, 8);
  const beto = new Jugador('Beto', 20, 5);
  console.log(ana.atacar(beto), beto.vidaRestante());  // 8 12
  console.log(beto.recibirDano(50), beto.estaVivo());  // 12 false
  console.log(ana.atacar(beto));  // 0
  console.log(beto.atacar(ana), ana.vidaRestante());  // 0 30
  console.log(beto.curar(5));  // false
  console.log(ana.recibirDano(10), ana.vidaRestante());  // 10 20
  console.log(ana.curar(5), ana.vidaRestante());  // true 25
  console.log(ana.curar(100), ana.vidaRestante());  // true 30
  console.log(ana.curar(0), ana.curar(-3), ana.curar(1.5));  // false false false
  console.log(pelear(new Jugador('X', 20, 7), new Jugador('Y', 21, 5)));  // 'X'
  console.log(pelear(new Jugador('X', 20, 7), new Jugador('Y', 40, 9)));  // 'Y'

ESTO DEBE FALLAR
  // console.log(ana.vida);  → vida es private.
  // ana.nombre = 'Otra';  → nombre es de solo lectura.
  // const sinFuerza = new Jugador('A', 10);  → falta el argumento fuerza.

EXPLICA
  ¿Por qué recibirDano devuelve 12 y no 50 en el segundo caso? ¿Quién gana si ambos
  tienen la misma vida y la misma fuerza, y por qué?
*/
// Tu solución.
// !EJERCICIO 19 — Partida de boliche
/*
SITUACIÓN
  Una partida de boliche registra los pinos derribados en cada tiro. Un tiro es válido si es
  un entero entre 0 y 10 (ambos incluidos), y la partida admite como máximo 12 tiros. Se
  pueden registrar varios tiros en una sola llamada: se guardan en orden y, al primer valor
  que no es válido, o cuando ya hay 12 tiros guardados, se deja de registrar: ese valor y
  todos los siguientes se descartan. Se informa cuántos tiros se guardaron en esa llamada.

  También se consultan el total de pinos derribados, el mejor tiro (el mayor valor guardado;
  0 si no hay tiros) y cuántos tiros fueron limpios, es decir, de exactamente 10 pinos.

  Ejemplo: tirar(4, 11, 5) guarda solo el 4 y devuelve 1: el 11 no es válido y corta el
    registro, así que el 5 tampoco se guarda. Si luego se hace tirar(10, 7), se guardan
    ambos: total() da 21, mejorTiro() da 10 y limpios() da 1.

  Idea: un parámetro rest (...pinos) y un corte con break o return al primer valor inválido.

RESTRICCIONES
  Datos:
  - Cada valor: cualquier número.
  - Se puede llamar sin ningún tiro.
  Usa:
  - Un parámetro rest (...pinos) y un array private.
  - for...of con break o return.
  No uses:
  - static, extends, get/set, abstract.
  - Math.max.

QUÉ DEBES HACER
  1. Crea la clase Boliche con un array oculto tiros (number[]), vacío.
  2. En Boliche crea los métodos públicos tirar(...pinos: number[]): number, total():
     number, mejorTiro(): number y limpios(): number.
  3. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const b = new Boliche();
  console.log(b.tirar(3, 7, 10));  // 3
  console.log(b.tirar(4, 11, 5));  // 1
  console.log(b.tirar());  // 0
  console.log(b.total(), b.mejorTiro(), b.limpios());  // 24 10 1
  console.log(b.tirar(2.5, 1));  // 0
  console.log(b.tirar(0, 10, 10, 10, 10, 10, 10, 10));  // 8
  console.log(b.tirar(1));  // 0
  console.log(b.total(), b.mejorTiro(), b.limpios());  // 94 10 8
  const c = new Boliche();
  console.log(c.tirar(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1));  // 12
  console.log(c.total());  // 12
  const d = new Boliche();
  console.log(d.tirar(-1), d.tirar(10, 0), d.mejorTiro());  // 0 2 10
  console.log(new Boliche().mejorTiro());  // 0

ESTO DEBE FALLAR
  // console.log(b.tiros);  → tiros es private.
  // b.tirar([1, 2]);  → un parámetro rest number no acepta un array.
  // b.tirar('5');  → los pinos deben ser number.

EXPLICA
  ¿Qué guarda tirar(4, 11, 5): el 4, el 5 o ninguno? ¿Por qué?
*/
// Tu solución.
// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE D — EJERCICIOS 20 AL 24: 03 MIEMBROS STATIC
// Propiedades y métodos que pertenecen a la clase y no a cada instancia. Se usan
// con el nombre de la clase (Clase.miembro), nunca con una instancia.
// ═══════════════════════════════════════════════════════════════════════════
// !EJERCICIO 20 — Turnos numerados por tipo
/*
SITUACIÓN
  Un banco entrega turnos de dos tipos: los normales se numeran N-1, N-2, N-3... y los
  prioritarios P-1, P-2... Cada tipo lleva su propia cuenta, que empieza en 0 y sube de uno
  en uno cada vez que se emite un turno de ese tipo. Las cuentas pertenecen al banco (a la
  clase), no a un turno concreto; cada turno solo guarda su número, que no cambia.

  El banco también puede consultar cuántos turnos se han emitido de un tipo, cuántos en
  total y reiniciar ambas cuentas a 0.

  Ejemplo: new Ticket(false), new Ticket(true) y new Ticket(false) reciben 'N-1', 'P-1' y
    'N-2': cada tipo tiene su propia cuenta. Después, Ticket.emitidos(false) devuelve 2,
    Ticket.total() devuelve 3 y, tras Ticket.reiniciar(), Ticket.total() devuelve 0.

  Idea: propiedades static: pertenecen a la clase, no a cada instancia, y se usan con el
    nombre de la clase.

RESTRICCIONES
  Datos:
  - prioritario: booleano.
  Usa:
  - Propiedades y métodos static.
  - private para las cuentas y readonly para el número.
  No uses:
  - extends, get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Ticket con dos propiedades static ocultas, contadorN y contadorP
     (number), ambas con valor inicial 0, y con la propiedad de instancia numero (string,
     visible y de solo lectura). Su constructor recibe prioritario (boolean).
  2. En Ticket crea los métodos static y públicos emitidos(prioritarios: boolean): number,
     total(): number y reiniciar(): void.
  3. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const t1 = new Ticket(false);
  const t2 = new Ticket(true);
  const t3 = new Ticket(false);
  const t4 = new Ticket(false);
  const t5 = new Ticket(true);
  console.log(t1.numero, t2.numero, t3.numero);  // 'N-1' 'P-1' 'N-2'
  console.log(t4.numero, t5.numero);  // 'N-3' 'P-2'
  console.log(Ticket.emitidos(false), Ticket.emitidos(true), Ticket.total());  // 3 2 5
  Ticket.reiniciar();
  console.log(Ticket.total());  // 0
  console.log(new Ticket(true).numero);  // 'P-1'
  console.log(t4.numero);  // 'N-3'

ESTO DEBE FALLAR
  // t1.emitidos(false);  → emitidos es static: se llama con Ticket.emitidos(false).
  // console.log(Ticket.contadorN);  → contadorN es private.
  // t1.numero = 'N-9';  → numero es de solo lectura.

EXPLICA
  ¿Por qué los contadores son static y no de instancia? ¿Por qué t4.numero no cambia
  tras Ticket.reiniciar()?
*/
// Tu solución.
// !EJERCICIO 21 — Utilidades de calendario
/*
SITUACIÓN
  Un calendario ofrece cálculos de fechas que no dependen de ningún objeto, solo de los
  números que se le dan. Un año es bisiesto si es divisible entre 4, salvo los divisibles
  entre 100 que no lo sean también entre 400. Febrero tiene 29 días en año bisiesto y 28 si
  no; abril, junio, septiembre y noviembre (meses 4, 6, 9 y 11) tienen 30 días; los demás
  meses, 31. Una fecha es válida si el mes está entre 1 y 12 y el día entre 1 y los días de
  ese mes. El día del año de una fecha es la suma de los días de todos los meses anteriores
  más el día del mes (el 1 de marzo de 2023 es el día 60).

  Se piden cuatro cálculos: si un año es bisiesto, los días de un mes de un año, si una
  fecha es válida y el día del año de una fecha válida. La lista de los meses de 30 días es
  un dato público y de solo lectura del calendario.

  Ejemplo: Calendario.diasDelMes(2, 2024) devuelve 29 y Calendario.esBisiesto(1900) devuelve
    false. fechaValida(31, 4, 2024) devuelve false (abril tiene 30 días) y diaDelAnio(1, 3,
    2023) devuelve 60 (31 + 28 + 1).

  Idea: una clase como caja de utilidades: todo es static y no hace falta ninguna instancia.

RESTRICCIONES
  Datos:
  - anio: entero >= 1.
  - mes y dia: números enteros (fuera de rango en fechaValida; diasDelMes recibe un mes de 1
    a 12).
  - diaDelAnio recibe siempre una fecha válida.
  Usa:
  - static y static readonly.
  - for...of para recorrer los meses de 30 días y for para sumar los meses anteriores.
  No uses:
  - extends, get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Calendario con la propiedad static, pública y de solo lectura MESES_DE_30
     (number[]), con el valor [4, 6, 9, 11].
  2. En Calendario crea los métodos static esBisiesto(anio: number): boolean,
     diasDelMes(mes: number, anio: number): number, fechaValida(dia: number, mes: number,
     anio: number): boolean y diaDelAnio(dia: number, mes: number, anio: number): number.
  3. Ejecuta COMPRUEBA sin new: no se necesita ninguna instancia.

COMPRUEBA
  console.log(Calendario.esBisiesto(2024), Calendario.esBisiesto(1900));  // true false
  console.log(Calendario.esBisiesto(2000), Calendario.esBisiesto(2023));  // true false
  console.log(Calendario.diasDelMes(2, 2024), Calendario.diasDelMes(2, 2023));  // 29 28
  console.log(Calendario.diasDelMes(4, 2023), Calendario.diasDelMes(12, 2023));  // 30 31
  console.log(Calendario.fechaValida(29, 2, 2024), Calendario.fechaValida(29, 2, 2023));  // true false
  console.log(Calendario.fechaValida(31, 4, 2024), Calendario.fechaValida(30, 4, 2024));  // false true
  console.log(Calendario.fechaValida(0, 1, 2024), Calendario.fechaValida(15, 13, 2024), Calendario.fechaValida(15, 0, 2024));  // false false false
  console.log(Calendario.fechaValida(31, 12, 2023));  // true
  console.log(Calendario.diaDelAnio(1, 1, 2023), Calendario.diaDelAnio(1, 3, 2023), Calendario.diaDelAnio(1, 3, 2024));  // 1 60 61
  console.log(Calendario.diaDelAnio(31, 12, 2023), Calendario.diaDelAnio(31, 12, 2024));  // 365 366
  console.log(Calendario.MESES_DE_30);  // [ 4, 6, 9, 11 ]

ESTO DEBE FALLAR
  // new Calendario().esBisiesto(2024);  → esBisiesto es static: se llama con la clase.
  // Calendario.MESES_DE_30 = [1];  → MESES_DE_30 es de solo lectura.
  // Calendario.esBisiesto('2024');  → anio debe ser number.

EXPLICA
  ¿Por qué 1900 no es bisiesto y 2000 sí? ¿Por qué estos métodos no necesitan una
  instancia?
*/
// Tu solución.
// !EJERCICIO 22 — Rifa con números únicos
/*
SITUACIÓN
  Una rifa vende boletos numerados y cada número se vende una sola vez. Los números ya
  vendidos los recuerda la rifa (la clase), no cada boleto. Para emitir un boleto se pide un
  número: se rechaza (no se crea ningún boleto) si no es un entero, es menor que 1 o ya fue
  vendido; si no, el número queda registrado como vendido y se obtiene el boleto. Todos los
  boletos de la rifa se crean así.

  La rifa también indica el menor número libre entre 1 y un máximo dado (ambos incluidos;
  ninguno si todos están vendidos o el máximo es menor que 1) y cuántos números se han
  vendido.

  Ejemplo: Tras Boleto.emitir(1) y Boleto.emitir(2), siguienteLibre(5) devuelve 3 y
    emitir(2) otra vez devuelve undefined. Con esos dos boletos emitidos, vendidos()
    devuelve 2.

  Idea: un método static que controla la creación (emitir) con un array static compartido
    por todos los boletos.

RESTRICCIONES
  Datos:
  - numero y maximo: cualquier número.
  Usa:
  - Un array static private para los números vendidos.
  - Métodos static públicos y undefined como rechazo.
  No uses:
  - extends, get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Boleto con la propiedad static oculta asignados (number[]), vacía, y un
     constructor con una propiedad de parámetro numero (number, visible y de solo lectura) y
     cuerpo vacío.
  2. En Boleto crea los métodos static y públicos emitir(numero: number): Boleto |
     undefined, siguienteLibre(maximo: number): number | undefined y vendidos(): number. Los
     boletos se crean siempre con emitir.
  3. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  console.log(Boleto.emitir(5)?.numero);  // 5
  console.log(Boleto.emitir(5));  // undefined
  console.log(Boleto.emitir(0), Boleto.emitir(2.5), Boleto.emitir(-3));  // undefined undefined undefined
  Boleto.emitir(1);
  Boleto.emitir(2);
  console.log(Boleto.siguienteLibre(10));  // 3
  Boleto.emitir(3);
  Boleto.emitir(4);
  console.log(Boleto.siguienteLibre(5));  // undefined
  console.log(Boleto.siguienteLibre(6));  // 6
  console.log(Boleto.siguienteLibre(0));  // undefined
  console.log(Boleto.vendidos());  // 5

ESTO DEBE FALLAR
  // Boleto.asignados.push(9);  → asignados es private.
  // new Boleto(9).vendidos();  → vendidos es static: se llama con la clase.
  // console.log(Boleto.emitir(7).numero);  → emitir puede devolver undefined.

EXPLICA
  ¿Por qué emitir devuelve Boleto | undefined y no siempre un Boleto? ¿Qué ocurre
  con asignados cuando emitir rechaza un número?
*/
// Tu solución.
// !EJERCICIO 23 — Tasa de impuesto compartida
/*
SITUACIÓN
  Todas las facturas de un negocio aplican el mismo porcentaje de impuesto, que empieza en
  10. Ese porcentaje pertenece al negocio (a la clase): si cambia, cambia el total de todas
  las facturas, también de las ya creadas. El impuesto de un subtotal es subtotal * tasa /
  100 y el total de una factura es su subtotal más ese impuesto. La tasa solo puede
  cambiarse a un entero entre 0 y 50 (ambos incluidos); cualquier otro valor se rechaza y la
  tasa no cambia. Cambiar la tasa informa con true si se hizo y false si se rechazó. Cada
  factura recibe su subtotal al crearse y lo guarda como dato privado.

  Se piden tres cosas: calcular el impuesto de un subtotal sin necesidad de una factura,
  cambiar la tasa y obtener el total de una factura.

  Ejemplo: Con tasa 10 y subtotal 200, total() da 220; tras Factura.cambiarTasa(20) vuelve a
    dar 240 sin crear otra factura. Factura.cambiarTasa(80) devuelve false y la tasa se
    queda como estaba.

  Idea: un valor static compartido: al cambiarlo cambian todas las instancias, también las
    ya creadas.

RESTRICCIONES
  Datos:
  - subtotal: múltiplo de 100.
  - nueva: cualquier número.
  Usa:
  - Una propiedad static pública para la tasa.
  - Un método static y un método de instancia.
  No uses:
  - extends, get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Factura con la propiedad static y pública tasa (number), con valor
     inicial 10, y un constructor con una propiedad de parámetro subtotal (number, oculta).
  2. En Factura crea los métodos static y públicos impuesto(subtotal: number): number y
     cambiarTasa(nueva: number): boolean.
  3. En Factura crea el método público de instancia total(): number.
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const f1 = new Factura(200);
  const f2 = new Factura(100);
  console.log(f1.total(), f2.total());  // 220 110
  console.log(Factura.cambiarTasa(15), Factura.tasa);  // true 15
  console.log(f1.total(), f2.total());  // 230 115
  console.log(Factura.cambiarTasa(51), Factura.cambiarTasa(-1), Factura.cambiarTasa(10.5));  // false false false
  console.log(Factura.tasa);  // 15
  console.log(Factura.cambiarTasa(50), Factura.impuesto(300));  // true 150
  console.log(Factura.cambiarTasa(0), f1.total());  // true 200

ESTO DEBE FALLAR
  // console.log(f1.tasa);  → tasa es static: se lee con Factura.tasa.
  // f1.cambiarTasa(5);  → cambiarTasa es static.
  // Factura.tasa = 'alta';  → tasa es number.
  // console.log(f1.subtotal);  → subtotal es private.

EXPLICA
  ¿Por qué f1.total() cambia sin crear otra factura? ¿Dónde vive el valor de la tasa?
*/
// Tu solución.
// !EJERCICIO 24 — Salas de cine
/*
SITUACIÓN
  Un cine tiene varias salas, cada una con un nombre y una capacidad que no cambian. Cada
  sala lleva la cuenta de asientos vendidos (empieza en 0, es privada) y vende asientos: se
  rechaza si la cantidad no es un entero mayor que 0 o si es mayor que los asientos libres
  (igual a los libres sí se acepta); si no, se suma a los vendidos. Los asientos libres de
  una sala son su capacidad menos los vendidos. Vender informa con true si se hizo y false
  si se rechazó.

  El cine (la clase) conoce todas las salas creadas y responde preguntas globales: cuántas
  salas hay, la capacidad total, los asientos libres de todas, la primera sala con un nombre
  dado (o undefined) y la sala más llena. La más llena es la de mayor proporción vendidas /
  capacidad; para compararlas sin dividir, la sala A es más llena que la B si A.vendidas *
  B.capacidad es mayor que B.vendidas * A.capacidad. Si hay empate gana la creada antes; si
  no hay salas, undefined.

  Ejemplo: Sala A (capacidad 10, vendidas 5) y Sala B (capacidad 4, vendidas 3): B está más
    llena, porque 3 * 10 = 30 supera a 5 * 4 = 20. Con esas dos salas, numeroDeSalas()
    devuelve 2, capacidadTotal() devuelve 14 y libresTotal() devuelve 6 (5 + 1).

  Idea: la clase conoce todas las salas creadas (array static) y responde preguntas
    globales. Compara con multiplicaciones para no dividir.

RESTRICCIONES
  Datos:
  - capacidad: entero >= 1.
  - cantidad: cualquier número.
  Usa:
  - Un array static private con todas las salas, al que el constructor añade this.
  - for...of. Un método static de Sala sí puede leer vendidas de cualquier sala.
  No uses:
  - extends, get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Sala con la propiedad static oculta salas (Sala[]), vacía, la propiedad
     de instancia oculta vendidas (number), con valor inicial 0, y un constructor con dos
     propiedades de parámetro visibles y de solo lectura, en este orden: nombre (string) y
     capacidad (number). El cuerpo del constructor añade this a Sala.salas.
  2. En Sala crea los métodos públicos vender(cantidad: number): boolean y libres(): number.
  3. En Sala crea los métodos static y públicos numeroDeSalas(): number, capacidadTotal():
     number, libresTotal(): number, buscar(nombre: string): Sala | undefined y masLlena():
     Sala | undefined.
  4. Ejecuta COMPRUEBA en este orden (la primera línea va antes de crear las salas).

COMPRUEBA
  console.log(Sala.masLlena(), Sala.numeroDeSalas());  // undefined 0
  const s1 = new Sala('A', 100);
  const s2 = new Sala('B', 50);
  const s3 = new Sala('C', 200);
  console.log(Sala.numeroDeSalas(), Sala.capacidadTotal(), Sala.libresTotal());  // 3 350 350
  console.log(s1.vender(30), s2.vender(20), s3.vender(60));  // true true true
  console.log(Sala.masLlena()?.nombre);  // 'B'
  console.log(Sala.libresTotal());  // 240
  console.log(s2.vender(31), s2.vender(30), s2.libres());  // false true 0
  console.log(s1.vender(0), s1.vender(70), s1.libres());  // false true 0
  console.log(Sala.masLlena()?.nombre);  // 'A'
  console.log(Sala.buscar('C')?.capacidad, Sala.buscar('Z'));  // 200 undefined

ESTO DEBE FALLAR
  // console.log(Sala.salas);  → salas es private.
  // s1.libresTotal();  → libresTotal es static.
  // s1.capacidad = 5;  → capacidad es de solo lectura.

EXPLICA
  ¿Por qué al final gana la sala A si B también está llena? ¿Para qué sirve
  comparar con multiplicaciones en lugar de dividir?
*/
// Tu solución.
// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE E — EJERCICIOS 25 AL 31: 04 EXTENSE (extends, super y protected)
// Una subclase reutiliza a su padre: pasa sus datos con super(...), llama a sus
// métodos con super.metodo() y puede usar lo protected. Se combina con 01–03.
// ═══════════════════════════════════════════════════════════════════════════
// !EJERCICIO 25 — Tarifas de viaje
/*
SITUACIÓN
  Una app de taxis calcula tarifas. Todo viaje tiene un destino y una distancia en
  kilómetros; su tarifa base es 30 más 12 por cada kilómetro. Un viaje se describe con el
  texto '{destino} ({km} km)', por ejemplo 'Centro (4 km)'. Hay dos tipos de viaje que
  calculan su precio a partir de esa misma tarifa base: el nocturno duplica la base si la
  distancia es de 5 km o menos y le suma 100 si es mayor que 5; el del aeropuerto lleva
  además una cantidad de equipajes, suma 25 por cada uno a la base y tiene un tope: su
  precio nunca supera 500.

  Ejemplo: ViajeNocturno('Centro', 4): la base es 30 + 12 * 4 = 78; con 5 km o menos se
    duplica, así que precio() devuelve 156. Con ViajeAeropuerto('Terminal', 10, 3): la base
    es 30 + 12 * 10 = 150, más 25 * 3 = 75: precio() devuelve 225.

  Idea: la subclase reutiliza la lógica del padre con super.metodo() en lugar de copiar la
    fórmula; protected oculta el método fuera de la jerarquía.

RESTRICCIONES
  Datos:
  - km: entero >= 1.
  - equipajes: entero >= 0.
  Usa:
  - extends y super(...) para pasar datos al padre.
  - super.metodo() para reutilizar la tarifa base en lugar de copiar la fórmula.
  - protected para lo que solo debe verse dentro de la jerarquía.
  No uses:
  - get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Viaje con un constructor que declara destino (string, visible) y km
     (number, solo jerarquía).
  2. En Viaje crea el método protegido tarifaBase(): number y el método público
     descripcion(): string.
  3. Crea ViajeNocturno, que extiende Viaje. Su constructor recibe destino y km. Tiene el
     método público precio(): number.
  4. Crea ViajeAeropuerto, que extiende Viaje. Su constructor recibe destino, km y equipajes
     (number, visible). Tiene el método público precio(): number.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const n1 = new ViajeNocturno('Centro', 5);
  const n2 = new ViajeNocturno('Norte', 6);
  const a1 = new ViajeAeropuerto('Aeropuerto', 20, 2);
  const a2 = new ViajeAeropuerto('Aeropuerto', 30, 3);
  const a3 = new ViajeAeropuerto('Aeropuerto', 40, 4);
  console.log(n1.precio(), n2.precio());  // 180 202
  console.log(a1.precio(), a2.precio(), a3.precio());  // 320 465 500
  console.log(new ViajeAeropuerto('Aeropuerto', 35, 2).precio());  // 500
  console.log(new ViajeAeropuerto('Aeropuerto', 35, 3).precio());  // 500
  console.log(n1.descripcion());  // 'Centro (5 km)'
  console.log(a1.descripcion(), a1.equipajes);  // 'Aeropuerto (20 km)' 2
  console.log(new Viaje('Plaza', 3).descripcion());  // 'Plaza (3 km)'

ESTO DEBE FALLAR
  // n1.tarifaBase();  → tarifaBase es protected.
  // console.log(n1.km);  → km es protected.
  // new Viaje('Plaza', 3).precio();  → Viaje no tiene método precio.
  // const sinKm = new ViajeNocturno('Centro');  → falta el argumento km.

EXPLICA
  ¿Por qué precio() no repite la fórmula 30 + 12 * km? ¿Qué diferencia hay entre
  que km sea protected y que fuera private?
*/
// Tu solución.
// !EJERCICIO 26 — Tanque de riego
/*
SITUACIÓN
  Un tanque guarda litros de agua hasta una capacidad máxima, que es visible y no cambia.
  Los litros solo cambian de dos maneras internas: agregar y sacar. Agregar n litros se
  rechaza si n no es un entero mayor que 0 o si el nivel pasaría de la capacidad (llegar
  justo a la capacidad sí se acepta); sacar n litros se rechaza si n no es un entero mayor
  que 0 o si n es mayor que los litros que hay. Ambas informan con true si se hicieron y
  false si se rechazaron. Desde fuera del tanque solo se puede consultar el nivel.

  Un tanque de riego es un tanque que además gasta cierta cantidad de litros por minuto.
  Desde fuera solo se le puede recargar (agregar litros, con las mismas reglas) y regar
  durante unos minutos: se riega minuto a minuto mientras no se haya completado el tiempo
  pedido y queden litros para un minuto completo. Se informa cuántos minutos se alcanzó a
  regar.

  Ejemplo: Con litros 50 y litrosPorMinuto 20, regar(10) riega solo 2 minutos: quedan 10
    litros y no alcanzan para otro. En otro tanque con litros 50 y capacidad 60,
    recargar(20) devuelve false (50 + 20 pasa de 60) y recargar(10) devuelve true (el nivel
    queda en 60).

  Idea: los métodos protected son herramientas internas de la jerarquía; los públicos de la
    subclase los envuelven. Trampa: llegar justo a la capacidad sí se acepta.

RESTRICCIONES
  Datos:
  - litros: entre 0 y capacidad.
  - litrosPorMinuto: entero >= 1; minutos: entero >= 0.
  - n: cualquier número.
  Usa:
  - protected y super.metodo().
  - while.
  No uses:
  - get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Tanque con un constructor que declara litros (number, solo jerarquía) y
     capacidad (number, visible y de solo lectura), en ese orden.
  2. En Tanque crea el método público nivel(): number y los métodos protegidos agregar(n:
     number): boolean y sacar(n: number): boolean.
  3. Crea TanqueRiego, que extiende Tanque. Su constructor recibe litros, capacidad y
     litrosPorMinuto (number, oculto).
  4. En TanqueRiego crea los métodos públicos recargar(n: number): boolean y regar(minutos:
     number): number.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const t = new TanqueRiego(50, 100, 8);
  console.log(t.regar(3), t.nivel());  // 3 26
  console.log(t.regar(10), t.nivel());  // 3 2
  console.log(t.regar(1), t.nivel());  // 0 2
  console.log(t.regar(0));  // 0
  console.log(t.recargar(98), t.nivel());  // true 100
  console.log(t.recargar(1), t.recargar(0), t.recargar(1.5));  // false false false
  console.log(t.regar(12), t.nivel());  // 12 4
  console.log(t.capacidad);  // 100

ESTO DEBE FALLAR
  // t.agregar(5);  → agregar es protected.
  // console.log(t.litros);  → litros es protected.
  // t.capacidad = 10;  → capacidad es de solo lectura.

EXPLICA
  ¿Por qué regar(10) devuelve 3 y no 10? ¿Por qué agregar y sacar son protected y
  recargar y regar son públicos?
*/
// Tu solución.
// !EJERCICIO 27 — Rangos de un ejército
/*
SITUACIÓN
  Un ejército tiene tres rangos encadenados: el soldado, el capitán (un soldado con tropas a
  su cargo) y el general (un capitán con estrategias). Todos tienen un nombre y un nivel. La
  fuerza se calcula por capas: la del soldado es nivel * 10; la del capitán es la del
  soldado más tropas * 5; la del general es la del capitán más estrategias * 100, y se
  duplica si tiene 3 estrategias o más. Cada rango se presenta con un texto que amplía el
  del anterior: el soldado, '{nombre} (nivel {nivel})'; el capitán, ese mismo texto seguido
  de ' con {tropas} tropas'; el general, el del capitán seguido de ' y {estrategias}
  estrategias'.

  Ejemplo: General('Rex', 2, 4, 1): Soldado da 2 * 10 = 20; Capitan suma 4 * 5 = 20 (total 40); General
    suma 1 * 100 = 140. Con 1 estrategia no se duplica. presentarGeneral() de ese General
    devuelve 'Rex (nivel 2) con 4 tropas y 1 estrategias'. Con 3 estrategias la fuerza se
    duplica: (20 + 20 + 300) * 2 = 680.

  Idea: tres niveles de herencia: cada capa llama a la anterior con super para no repetir
    fórmulas.

RESTRICCIONES
  Datos:
  - nivel: entero >= 1.
  - tropas y estrategias: enteros >= 0.
  Usa:
  - extends en cadena (Capitan extiende Soldado y General extiende Capitan).
  - super.metodo() para reutilizar cada capa.
  - protected para las capas de fuerza.
  No uses:
  - get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Soldado con un constructor que declara nombre (string, visible) y nivel
     (number, solo jerarquía), el método protegido fuerzaSoldado(): number y el método
     público presentar(): string.
  2. Crea Capitan, que extiende Soldado. Su constructor recibe nombre, nivel y tropas
     (number, solo jerarquía). Tiene el método protegido fuerzaCapitan(): number y el
     público presentarCapitan(): string.
  3. Crea General, que extiende Capitan. Su constructor recibe nombre, nivel, tropas y
     estrategias (number, oculto). Tiene los métodos públicos fuerzaGeneral(): number y
     presentarGeneral(): string.
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const s = new Soldado('Tito', 1);
  const c = new Capitan('Cato', 2, 0);
  const g = new General('Aurelio', 4, 10, 2);
  const g2 = new General('Bruto', 4, 10, 3);
  console.log(s.presentar());  // 'Tito (nivel 1)'
  console.log(c.presentarCapitan());  // 'Cato (nivel 2) con 0 tropas'
  console.log(g.presentar());  // 'Aurelio (nivel 4)'
  console.log(g.presentarCapitan());  // 'Aurelio (nivel 4) con 10 tropas'
  console.log(g.presentarGeneral());  // 'Aurelio (nivel 4) con 10 tropas y 2 estrategias'
  console.log(g.fuerzaGeneral(), g2.fuerzaGeneral());  // 290 780
  console.log(new General('Cleo', 1, 0, 0).fuerzaGeneral());  // 10

ESTO DEBE FALLAR
  // g.fuerzaSoldado();  → fuerzaSoldado es protected.
  // c.fuerzaCapitan();  → fuerzaCapitan es protected.
  // s.presentarCapitan();  → Soldado no tiene presentarCapitan.
  // console.log(g.estrategias);  → estrategias es private.

EXPLICA
  ¿Por qué 2 estrategias no duplican la fuerza y 3 sí? ¿Qué cadena de llamadas
  super.* hace falta para que g.fuerzaGeneral() llegue hasta fuerzaSoldado?
*/
// Tu solución.
// !EJERCICIO 28 — Pases de museo
/*
SITUACIÓN
  Un museo vende pases de entrada. El boleto completo cuesta 200; un pase aplica un
  porcentaje de descuento sobre ese precio (precio = 200 * (100 - descuento) / 100) y es
  gratis si su precio es 0. Hay tres tipos de pase: el general no tiene descuento; el de
  estudiante tiene 30 %; el de jubilado tiene 100 % si el jubilado tiene 80 años o más y 50
  % si tiene menos. Todos los pases guardan el nombre del visitante.

  El museo necesita, dada una lista de pases, la recaudación total (la suma de los precios;
  0 si la lista está vacía) y los nombres, en orden, de los visitantes con pase gratis.

  Ejemplo: PaseEstudiante paga 200 * 70 / 100 = 140; PaseJubilado('Zoe', 85) recibe 100 de
    descuento y su pase es gratis. En la lista [PaseGeneral('Ana') (200),
    PaseEstudiante('Luis') (140), PaseJubilado('Zoe', 85) (0)], recaudar devuelve 340 y
    gratuitos devuelve ['Zoe'].

  Idea: cada subclase solo decide qué descuento enviar al padre con super(...); el cálculo
    del precio vive una sola vez, en la base.

RESTRICCIONES
  Datos:
  - descuento: entero de 0 a 100.
  - edad: entero >= 60.
  - La lista puede estar vacía.
  Usa:
  - extends y super(...): cada tipo solo decide qué descuento enviar al padre.
  - Un array de la clase base (Pase[]) para guardar pases de cualquier tipo.
  No uses:
  - get/set, abstract.
  - Modificar los pases de la lista.

QUÉ DEBES HACER
  1. Crea la clase Pase con un constructor que declara visitante (string, visible) y
     descuento (number, solo jerarquía), y los métodos públicos precio(): number y
     esGratis(): boolean.
  2. Crea PaseGeneral y PaseEstudiante, que extienden Pase. Cada constructor recibe
     visitante.
  3. Crea PaseJubilado, que extiende Pase. Su constructor recibe visitante y edad (number;
     es un parámetro normal, no una propiedad).
  4. Fuera de las clases, crea recaudar(pases: Pase[]): number y gratuitos(pases: Pase[]):
     string[].
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const p1 = new PaseGeneral('Ana');
  const p2 = new PaseEstudiante('Beto');
  const p3 = new PaseJubilado('Cora', 79);
  const p4 = new PaseJubilado('Dante', 80);
  console.log(p1.precio(), p2.precio(), p3.precio(), p4.precio());  // 200 140 100 0
  console.log(p3.esGratis(), p4.esGratis());  // false true
  console.log(new Pase('Eva', 10).precio());  // 180
  const lista: Pase[] = [p1, p2, p3, p4];
  console.log(recaudar(lista));  // 440
  console.log(gratuitos(lista));  // [ 'Dante' ]
  console.log(recaudar([]), gratuitos([p1]));  // 0 []

ESTO DEBE FALLAR
  // console.log(p2.descuento);  → descuento es protected.
  // const sinEdad = new PaseJubilado('Zoe');  → falta el argumento edad.
  // p2.visitante = 5;  → visitante es string.

EXPLICA
  ¿Cómo consigue cada subclase un precio distinto sin tener su propio método precio()?
  ¿Por qué el array lista puede tener tipo Pase[] aunque guarde otros tipos de pase?
*/
// Tu solución.
// !EJERCICIO 29 — Examen con mínimo para aprobar
/*
SITUACIÓN
  Un examen tiene un número fijo de preguntas y recibe las respuestas una por una, indicando
  si cada una es correcta. Se rechaza una respuesta si ya se respondieron todas las
  preguntas; si no, cuenta como respondida y, si es correcta, también como acierto. Informa
  con true si la aceptó y false si la rechazó. Se puede consultar cuántas preguntas faltan.
  El nombre del alumno es visible y no cambia.

  El examen final añade un porcentaje mínimo para aprobar y permite responder varias
  respuestas seguidas: cada una, en orden, se intenta como una respuesta normal y se informa
  cuántas se aceptaron. Solo se aprueba si ya se respondió todo y los aciertos cubren el
  mínimo: aciertos * 100 es mayor o igual que totalPreguntas * minimo (el borde es
  inclusivo). El resultado es 'pendiente' mientras falten respuestas; después, 'aprobado' o
  'reprobado'.

  Ejemplo: ExamenFinal('Ana', 5, 60) con 3 aciertos de 5: 3 * 100 = 300 y 5 * 60 = 300, así
    que aprobado() es true (el borde es inclusivo). Mientras falten preguntas por responder,
    resultado() devuelve 'pendiente'.

  Idea: una subclase delega en super.responder para respetar las reglas del padre; aprobado
    compara sin dividir.

RESTRICCIONES
  Datos:
  - totalPreguntas: entero >= 1.
  - minimo: entero de 1 a 100.
  - La lista de respuestas puede estar vacía.
  Usa:
  - protected y super.metodo().
  - for...of.
  No uses:
  - get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Examen con un constructor que declara alumno (string, visible y de solo
     lectura) y totalPreguntas (number, solo jerarquía), y con las propiedades protegidas
     respondidas y aciertos (number), ambas con valor inicial 0.
  2. En Examen crea los métodos públicos responder(correcta: boolean): boolean y faltan():
     number.
  3. Crea ExamenFinal, que extiende Examen. Su constructor recibe alumno, totalPreguntas y
     minimo (number, oculto).
  4. En ExamenFinal crea los métodos públicos responderVarias(respuestas: boolean[]):
     number, aprobado(): boolean y resultado(): string.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const e1 = new ExamenFinal('Ana', 5, 60);
  console.log(e1.resultado());  // 'pendiente'
  console.log(e1.responderVarias([true, true, true, false, false, true]));  // 5
  console.log(e1.resultado(), e1.responder(true), e1.faltan());  // 'aprobado' false 0
  const e2 = new ExamenFinal('Beto', 5, 60);
  console.log(e2.responderVarias([true, true, false, false, false]), e2.resultado());  // 5 'reprobado'
  const e3 = new ExamenFinal('Cris', 4, 75);
  console.log(e3.responderVarias([true, true]), e3.resultado(), e3.faltan());  // 2 'pendiente' 2
  console.log(e3.responderVarias([true, true, true]), e3.resultado());  // 2 'aprobado'
  const e4 = new ExamenFinal('Dina', 4, 25);
  console.log(e4.responderVarias([true]), e4.aprobado());  // 1 false
  console.log(e4.alumno);  // 'Dina'

ESTO DEBE FALLAR
  // console.log(e1.aciertos);  → aciertos es protected.
  // console.log(e1.totalPreguntas);  → totalPreguntas es protected.
  // e1.alumno = 'Otra';  → alumno es de solo lectura.

EXPLICA
  ¿Por qué e1 aprueba con exactamente 3 de 5 y un mínimo de 60? ¿Por qué e4 no está
  aprobado aunque su porcentaje ya alcance el mínimo?
*/
// Tu solución.
// !EJERCICIO 30 — Parqueadero con placas
/*
SITUACIÓN
  Un parqueadero tiene un número fijo de plazas, visible y que no cambia, y lleva la cuenta
  de las ocupadas, que empiezan en 0. Ocupar una plaza se rechaza si ya están todas
  ocupadas; liberar una se rechaza si no hay ninguna ocupada. Se pueden consultar las plazas
  disponibles (total menos ocupadas).

  Además, el parqueadero registra las placas de los vehículos que están dentro. Entrar con
  una placa se rechaza si la placa es '', si ya está dentro o si no hay plazas; solo se
  ocupa una plaza si pasaron las demás comprobaciones. Salir se rechaza si la placa no está
  dentro; si está, se libera su plaza y su placa deja de registrarse. Entrar y salir
  informan con true si se hicieron y false si se rechazaron. También se puede consultar si
  una placa está dentro y la lista de placas que están dentro, como una copia.

  Ejemplo: Parqueadero(2): entrar('AB-1') y entrar('CD-2') devuelven true; entrar('EF-3')
    devuelve false porque no hay plazas y entrar('AB-1') otra vez, por repetida. Después,
    salir('AB-1') devuelve true y entonces entrar('EF-3') sí devuelve true.

  Idea: el orden de las comprobaciones importa: ocupar() solo se llama si las validaciones
    anteriores pasaron.

RESTRICCIONES
  Datos:
  - total: entero >= 1.
  - placa: cualquier texto.
  Usa:
  - protected para ocupar y liberar, y super.metodo() para llamarlos.
  - Un array nuevo al quitar una placa.
  No uses:
  - get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Plazas con un constructor que declara total (number, visible y de solo
     lectura), la propiedad ocupadas (number, solo jerarquía) con valor inicial 0, el método
     público disponibles(): number y los métodos protegidos ocupar(): boolean y liberar():
     boolean.
  2. Crea Parqueadero, que extiende Plazas. Su constructor recibe total y lo pasa al padre.
     Declara un array oculto placas (string[]), vacío.
  3. En Parqueadero crea los métodos públicos entrar(placa: string): boolean, salir(placa:
     string): boolean, estaDentro(placa: string): boolean y placasDentro(): string[].
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const p = new Parqueadero(2);
  console.log(p.entrar('A1'), p.entrar('A1'), p.disponibles());  // true false 1
  console.log(p.entrar(''), p.disponibles());  // false 1
  console.log(p.entrar('B2'), p.entrar('C3'), p.disponibles());  // true false 0
  console.log(p.salir('Z9'), p.disponibles());  // false 0
  console.log(p.salir('A1'), p.disponibles());  // true 1
  console.log(p.placasDentro());  // [ 'B2' ]
  console.log(p.estaDentro('A1'), p.estaDentro('B2'));  // false true
  console.log(p.entrar('C3'), p.placasDentro());  // true [ 'B2', 'C3' ]
  const q = new Parqueadero(1);
  console.log(q.disponibles(), p.total, q.total);  // 1 2 1

ESTO DEBE FALLAR
  // p.ocupar();  → ocupar es protected.
  // console.log(p.ocupadas);  → ocupadas es protected.
  // p.total = 3;  → total es de solo lectura.

EXPLICA
  ¿Por qué entrar('') no deja una plaza ocupada? ¿Qué pasaría si llamaras a
  super.ocupar() antes de comprobar la placa repetida?
*/
// Tu solución.
// !EJERCICIO 31 — Guerrero y mago contra un jefe
/*
SITUACIÓN
  Un juego tiene personajes con nombre, vida, defensa y una vida máxima igual a la vida con
  la que empezaron. Un personaje está vivo mientras su vida sea mayor que 0. Al recibir un
  golpe, el daño real es el golpe menos la defensa (si queda negativo, es 0) y nunca más que
  la vida actual; se resta de la vida y se informa cuánto fue. Un personaje también puede
  recuperar vida: suma puntos sin pasar de su vida máxima e informa cuánto recuperó
  realmente; es una acción interna que solo usan los tipos de personaje, no se llama desde
  fuera.

  Hay dos tipos. El guerrero tiene fuerza: ataca a un rival golpeándolo con su fuerza (0 y
  sin efecto si el guerrero o el rival están muertos) y puede descansar para recuperar 5 de
  vida (0 si está muerto). El mago tiene maná: lanza un hechizo a un rival, que lo golpea
  con 20 y gasta 10 de maná (0 y sin efecto si el mago o el rival están muertos, o si le
  quedan menos de 10 de maná); su maná se puede consultar.

  Ejemplo: Guerrero con fuerza 12 contra un Personaje de defensa 5: atacar devuelve 7 de
    daño real y la vida del jefe baja 7. Un Mago con 15 de maná lanza un hechizo contra un
    jefe de defensa 5: devuelve 15 (20 - 5) y su maná queda en 5; un segundo hechizo
    devuelve 0 porque ya no le alcanza.

  Idea: una regla común en el padre (recibirGolpe) que usan dos subclases distintas sin
    repetirla; recuperar es protected.

RESTRICCIONES
  Datos:
  - Todos los datos son enteros >= 0; vida >= 1 y fuerza >= 1.
  Usa:
  - extends y super(...).
  - protected para recuperar; readonly para el nombre y la vida máxima.
  No uses:
  - get/set, abstract.

QUÉ DEBES HACER
  1. Crea la clase Personaje con un constructor que declara, en este orden, nombre (string,
     visible y de solo lectura), vida (number, solo jerarquía) y defensa (number, solo
     jerarquía). Declara además vidaMaxima (number, solo jerarquía y de solo lectura), que
     el cuerpo del constructor guarda igual a vida.
  2. En Personaje crea los métodos públicos estaVivo(): boolean, vidaRestante(): number y
     recibirGolpe(dano: number): number, y el método protegido recuperar(n: number): number.
  3. Crea Guerrero, que extiende Personaje. Su constructor recibe nombre, vida, defensa y
     fuerza (number, oculto). Tiene los métodos públicos atacar(rival: Personaje): number y
     descansar(): number.
  4. Crea Mago, que extiende Personaje. Su constructor recibe nombre, vida, defensa y mana
     (number, oculto). Tiene los métodos públicos manaRestante(): number y hechizo(rival:
     Personaje): number.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const g = new Guerrero('Gor', 50, 3, 12);
  const m = new Mago('Mia', 30, 0, 25);
  const jefe = new Personaje('Jefe', 100, 5);
  console.log(g.atacar(jefe), jefe.vidaRestante());  // 7 93
  console.log(m.hechizo(jefe), m.manaRestante());  // 15 15
  console.log(m.hechizo(jefe), m.manaRestante());  // 15 5
  console.log(m.hechizo(jefe), m.manaRestante(), jefe.vidaRestante());  // 0 5 63
  console.log(g.atacar(m), m.vidaRestante());  // 12 18
  console.log(m.recibirGolpe(2), m.vidaRestante());  // 2 16
  console.log(g.recibirGolpe(3), g.vidaRestante());  // 0 50
  console.log(g.descansar());  // 0
  console.log(g.recibirGolpe(13), g.vidaRestante());  // 10 40
  console.log(g.descansar(), g.vidaRestante());  // 5 45
  console.log(g.descansar(), g.descansar(), g.vidaRestante());  // 5 0 50
  console.log(jefe.recibirGolpe(500), jefe.estaVivo());  // 63 false
  const m2 = new Mago('Zed', 30, 0, 50);
  console.log(g.atacar(jefe), m2.hechizo(jefe), m2.manaRestante());  // 0 0 50

ESTO DEBE FALLAR
  // console.log(g.vida);  → vida es protected.
  // g.recuperar(5);  → recuperar es protected.
  // console.log(m.mana);  → mana es private.
  // console.log(jefe.defensa);  → defensa es protected.

EXPLICA
  ¿Por qué recuperar es protected y no público? ¿Por qué Guerrero y Mago no repiten la
  regla de la defensa?
*/
// Tu solución.
// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE F — EJERCICIOS 32 AL 37: 06 GETS Y SETS
// get calcula o devuelve un valor al leer una propiedad; set valida o transforma
// el valor al asignarla. Se usan sin paréntesis. Se combinan con 01–04.
// ═══════════════════════════════════════════════════════════════════════════
// !EJERCICIO 32 — Brillo de pantalla
/*
SITUACIÓN
  Una pantalla tiene un nivel de brillo entre 0 y 100, que empieza en 50. El brillo se lee y
  se asigna como una propiedad normal (pantalla.nivel = 80), aunque por detrás haya una
  validación: si se asigna un valor menor que 0, queda en 0; si es mayor que 100, queda en
  100; y la asignación nunca lanza un error. La pantalla también describe su brillo con una
  etiqueta que se puede leer pero no asignar: 'oscuro' si el nivel es menor que 30, 'medio'
  si es menor que 70 y 'brillante' en cualquier otro caso.

  Ejemplo: Con nivel = 150, _nivel guarda 100 y etiqueta es 'brillante'; con nivel = -5
    guarda 0 y etiqueta es 'oscuro'. Una pantalla recién creada tiene nivel 50 y etiqueta
    'medio'.

  Idea: un setter que ajusta el valor en lugar de rechazarlo, y un getter sin setter (solo
    lectura). Se usan sin paréntesis.

RESTRICCIONES
  Datos:
  - valor: número entero cualquiera.
  Usa:
  - get y set con el mismo nombre y una propiedad privada con guion bajo.
  - Un getter sin setter para la etiqueta.
  No uses:
  - abstract, constructor private.

QUÉ DEBES HACER
  1. Crea la clase Pantalla con la propiedad oculta _nivel (number), con valor inicial 50.
  2. En Pantalla crea el getter nivel (number) y el setter nivel(valor: number).
  3. En Pantalla crea el getter etiqueta (string), sin setter.
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const p = new Pantalla();
  console.log(p.nivel, p.etiqueta);  // 50 'medio'
  p.nivel = 20;
  console.log(p.nivel, p.etiqueta);  // 20 'oscuro'
  p.nivel = 30;
  console.log(p.nivel, p.etiqueta);  // 30 'medio'
  p.nivel = 69;
  console.log(p.nivel, p.etiqueta);  // 69 'medio'
  p.nivel = 70;
  console.log(p.nivel, p.etiqueta);  // 70 'brillante'
  p.nivel = 150;
  console.log(p.nivel);  // 100
  p.nivel = -5;
  console.log(p.nivel, p.etiqueta);  // 0 'oscuro'
  const q = new Pantalla();
  console.log(q.nivel);  // 50

ESTO DEBE FALLAR
  // p.etiqueta = 'oscuro';  → etiqueta solo tiene getter.
  // console.log(p._nivel);  → _nivel es private.
  // p.nivel = '80';  → el setter recibe number.

EXPLICA
  ¿Por qué el dato guardado se llama _nivel y no nivel? ¿Qué pasaría si dentro del
  setter escribieras this.nivel = valor?
*/
// Tu solución.
// !EJERCICIO 33 — Progreso de una lista de tareas
/*
SITUACIÓN
  Una lista de tareas separa las tareas pendientes de las hechas. Agregar una tarea se
  rechaza si el título es '' o si ya existe (pendiente o hecha); si no, queda al final de
  las pendientes. Completar una tarea se rechaza si no está pendiente; si lo está, pasa al
  final de las hechas. Ambas operaciones informan con true si se hicieron y false si se
  rechazaron.

  Tres datos se leen como propiedades (lista.progreso) porque se calculan al leerlos y no se
  guardan: las tareas que faltan (una copia de las pendientes, en orden), el progreso
  (porcentaje de tareas hechas: hechas * 100 / total, sin redondear; 0 si no hay ninguna
  tarea) y si la lista está terminada (hay al menos una tarea y ninguna queda pendiente).

  Ejemplo: Con 4 tareas, 1 completada: progreso vale 25 y faltantes devuelve las 3
    pendientes. Si se agregan 'A', 'B', 'C' y 'D' y se completa 'A', progreso vale 25,
    faltantes devuelve ['B', 'C', 'D'] y terminada es false.

  Idea: valores derivados que se calculan al leerlos con get en lugar de guardarse. Trampa:
    sin tareas el progreso es 0, no un error de división.

RESTRICCIONES
  Datos:
  - titulo: cualquier texto; las mayúsculas y las minúsculas cuentan como distintas.
  Usa:
  - get para los valores derivados.
  - Arrays private y un array nuevo al sacar una tarea de las pendientes.
  No uses:
  - abstract, constructor private.

QUÉ DEBES HACER
  1. Crea la clase ListaTareas con dos arrays ocultos, pendientes y hechas (string[]), ambos
     vacíos.
  2. En ListaTareas crea los métodos públicos agregar(titulo: string): boolean y
     completar(titulo: string): boolean.
  3. En ListaTareas crea los getters faltantes (string[]), progreso (number) y terminada
     (boolean).
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const l = new ListaTareas();
  console.log(l.progreso, l.terminada);  // 0 false
  console.log(l.agregar('a'), l.agregar('b'), l.agregar('a'), l.agregar(''));  // true true false false
  l.agregar('c');
  l.agregar('d');
  console.log(l.completar('b'), l.completar('b'), l.completar('zzz'));  // true false false
  console.log(l.progreso, l.faltantes);  // 25 [ 'a', 'c', 'd' ]
  l.completar('a');
  l.completar('c');
  l.completar('d');
  console.log(l.progreso, l.terminada);  // 100 true
  console.log(l.agregar('b'), l.agregar('e'));  // false true
  console.log(l.progreso, l.terminada);  // 80 false
  const copia = l.faltantes;
  copia.push('intruso');
  console.log(l.faltantes.length);  // 1

ESTO DEBE FALLAR
  // l.progreso = 50;  → progreso solo tiene getter.
  // l.terminada = true;  → terminada solo tiene getter.
  // console.log(l.pendientes);  → pendientes es private.

EXPLICA
  ¿Por qué progreso no es una propiedad guardada con su propio valor? ¿Qué problema
  tendría guardarlo?
*/
// Tu solución.
// !EJERCICIO 34 — Apodo validado
/*
SITUACIÓN
  Un perfil de jugador guarda un apodo que se asigna como propiedad (perfil.apodo =
  'Diego7'). El apodo inicial es 'Anónimo'. Un apodo nuevo se ignora, sin error, si es igual
  al actual, si tiene menos de 3 o más de 12 caracteres (3 y 12 sí valen) o si contiene
  algún carácter que no sea una letra de la a a la z (mayúscula o minúscula, sin acentos) ni
  un dígito de 0 a 9. Si pasa todas las reglas, se guarda. El perfil cuenta cuántas veces
  cambió realmente el apodo (empieza en 0), dato que se puede leer pero no asignar.

  Ejemplo: apodo = 'ab' se ignora (2 caracteres); apodo = 'Diego7' se acepta y cambios pasa
    a 1; asignar 'Diego7' otra vez no cuenta. Un perfil recién creado tiene apodo 'Anónimo'
    y cambios 0.

  Idea: un setter que ignora lo inválido sin lanzar errores y un getter de solo lectura que
    lleva la cuenta de cambios.

RESTRICCIONES
  Datos:
  - valor: cualquier texto.
  Usa:
  - get y set.
  - for...of y comparaciones de caracteres con >= y <= ('a', 'z', 'A', 'Z', '0' y '9').
  - Un getter sin setter para el número de cambios.
  No uses:
  - abstract, constructor private.
  - Expresiones regulares.

QUÉ DEBES HACER
  1. Crea la clase PerfilJugador con las propiedades ocultas _apodo (string), con valor
     inicial 'Anónimo', y _cambios (number), con valor inicial 0.
  2. En PerfilJugador crea el getter apodo (string) y el setter apodo(valor: string).
  3. En PerfilJugador crea el getter cambios (number), sin setter.
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const p = new PerfilJugador();
  console.log(p.apodo, p.cambios);  // 'Anónimo' 0
  p.apodo = 'Neo';
  console.log(p.apodo, p.cambios);  // 'Neo' 1
  p.apodo = 'ab';
  p.apodo = 'Trinity_99';
  p.apodo = 'a b';
  p.apodo = 'Morfeo2024Mat';
  console.log(p.apodo, p.cambios);  // 'Neo' 1
  p.apodo = 'Morfeo2024Ma';
  console.log(p.apodo, p.cambios);  // 'Morfeo2024Ma' 2
  p.apodo = 'Morfeo2024Ma';
  console.log(p.cambios);  // 2
  p.apodo = 'ABC';
  p.apodo = 'x9z';
  console.log(p.apodo, p.cambios);  // 'x9z' 4

ESTO DEBE FALLAR
  // p.cambios = 3;  → cambios solo tiene getter.
  // p.apodo = 5;  → el setter recibe string.
  // console.log(p._apodo);  → _apodo es private.

EXPLICA
  ¿Por qué el setter ignora el apodo repetido en lugar de contarlo como cambio?
  ¿Qué apodos de 12 y de 13 caracteres acepta y rechaza, y por qué?
*/
// Tu solución.
// !EJERCICIO 35 — Equipaje con errores
/*
SITUACIÓN
  Una aerolínea pesa maletas. El peso se asigna como propiedad (maleta.peso = 20) y empieza
  en 0. Un peso imposible no se ignora: asignar un peso negativo lanza Error('Peso
  negativo') y asignar más de 23 kg lanza Error('Excede 23 kg') (23 se acepta); en ambos
  casos el peso conserva su valor anterior. El peso se puede leer. Además se leen el exceso
  (0 si el peso es 15 kg o menos; si no, el peso menos 15) y el cobro por exceso (10 por
  cada kilo de exceso); ambos se calculan al leerlos y no se pueden asignar.

  Ejemplo: Con peso = 20, exceso es 5 y cobro es 50; peso = 30 lanza Error('Excede 23 kg') y
    peso conserva su valor anterior. Con peso = -1 el setter lanza Error('Peso negativo').

  Idea: un setter que lanza un Error mediante un método privado con retorno never. Trampa:
    23 kg se acepta.

RESTRICCIONES
  Datos:
  - valor: número entero.
  Usa:
  - get y set.
  - Un método private cuyo retorno es never (fallar), que lanza el error con throw new
    Error.
  No uses:
  - abstract, constructor private.

QUÉ DEBES HACER
  1. Crea la clase Maleta con la propiedad oculta _peso (number), con valor inicial 0.
  2. En Maleta crea el método privado fallar(mensaje: string): never.
  3. En Maleta crea el getter peso (number) y el setter peso(valor: number).
  4. En Maleta crea los getters exceso (number) y cobro (number), sin setter.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const m = new Maleta();
  console.log(m.peso, m.exceso, m.cobro);  // 0 0 0
  m.peso = 15;
  console.log(m.exceso, m.cobro);  // 0 0
  m.peso = 18;
  console.log(m.exceso, m.cobro);  // 3 30
  m.peso = 23;
  console.log(m.peso, m.exceso, m.cobro);  // 23 8 80
  // Al final, una por una (cada línea detiene el programa con un Error; vuelve a comentarla):
  // m.peso = 24;  → lanza Error: Excede 23 kg
  // m.peso = -1;  → lanza Error: Peso negativo

ESTO DEBE FALLAR
  // m.exceso = 5;  → exceso solo tiene getter.
  // console.log(m._peso);  → _peso es private.
  // m.fallar('x');  → fallar es private.
  // m.peso = '10';  → el setter recibe number.

EXPLICA
  ¿Por qué fallar devuelve never y no void? ¿Qué valor conserva peso cuando el setter
  lanza el Error?
*/
// Tu solución.
// !EJERCICIO 36 — Termostato con objetivo limitado
/*
SITUACIÓN
  Un termostato base conoce un rango de temperaturas permitido, de un mínimo a un máximo, y
  sabe ajustar un valor a ese rango: si es menor que el mínimo da el mínimo, si es mayor que
  el máximo da el máximo y si no, el mismo valor. El termostato inteligente tiene además una
  temperatura actual (la del sensor, que se puede actualizar) y una temperatura objetivo que
  empieza igual a la actual. El objetivo se asigna como propiedad (termostato.objetivo = 40)
  y siempre queda dentro del rango permitido: se guarda el valor ya ajustado. También tiene
  un modo que se lee pero no se asigna y se calcula al leerlo: 'calentando' si la
  temperatura actual es menor que el objetivo - 1; 'enfriando' si es mayor que el objetivo +
  1; 'reposo' en cualquier otro caso.

  Ejemplo: TermostatoInteligente(16, 28, 20): objetivo = 40 guarda 28, el máximo permitido
    por el padre. Con actual 20 y objetivo 28, modo es 'calentando'; con actual 20 y
    objetivo 20, 'reposo'.

  Idea: un setter de la subclase que delega la regla de rango en un método protected del
    padre con super.metodo(). El modo se calcula al leerlo.

RESTRICCIONES
  Datos:
  - minimo < maximo; actual entre minimo y maximo.
  - valor y nueva: cualquier número.
  Usa:
  - extends y super(...).
  - protected y super.metodo() para ajustar el valor.
  - get y set.
  No uses:
  - abstract, constructor private.

QUÉ DEBES HACER
  1. Crea la clase Termostato con un constructor que declara minimo (number, solo jerarquía)
     y maximo (number, solo jerarquía), y el método protegido ajustar(valor: number):
     number.
  2. Crea TermostatoInteligente, que extiende Termostato. Su constructor recibe minimo,
     maximo y actual (number, oculto). Declara la propiedad oculta _objetivo (number), que
     el cuerpo del constructor guarda igual a actual.
  3. En TermostatoInteligente crea el getter objetivo (number), el setter objetivo(valor:
     number) y el getter modo (string), este último sin setter.
  4. En TermostatoInteligente crea el método público sensar(nueva: number): void.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const t = new TermostatoInteligente(16, 28, 20);
  console.log(t.objetivo, t.modo);  // 20 'reposo'
  t.objetivo = 25;
  console.log(t.objetivo, t.modo);  // 25 'calentando'
  t.objetivo = 40;
  console.log(t.objetivo);  // 28
  t.objetivo = 10;
  console.log(t.objetivo, t.modo);  // 16 'enfriando'
  t.objetivo = 21;
  console.log(t.objetivo, t.modo);  // 21 'reposo'
  t.objetivo = 22;
  console.log(t.objetivo, t.modo);  // 22 'calentando'
  t.sensar(25);
  console.log(t.modo);  // 'enfriando'
  t.sensar(23);
  console.log(t.modo);  // 'reposo'

ESTO DEBE FALLAR
  // t.ajustar(5);  → ajustar es protected.
  // console.log(t.minimo);  → minimo es protected.
  // t.modo = 'reposo';  → modo solo tiene getter.
  // console.log(t.actual);  → actual es private.

EXPLICA
  ¿Por qué con actual 20 y objetivo 21 el modo es 'reposo' y con objetivo 22 es
  'calentando'? ¿Qué clase decide el rango permitido y cuál el modo?
*/
// Tu solución.
// !EJERCICIO 37 — Hoja de horas con pago calculado
/*
SITUACIÓN
  Una hoja de horas guarda las horas trabajadas cada día como parejas [día, horas].
  Registrar un día se rechaza si las horas no son un entero entre 1 y 12 (ambos incluidos) o
  si ese día ya está registrado; si no, se añade al final. Registrar informa con true si se
  hizo y false si se rechazó. Las horas de un día que pasan de 8 son horas extra.

  Se leen como propiedades porque se calculan al leerlas: cuántos días hay registrados, el
  total de horas, el total de horas extra, las horas normales (total menos extras) y el
  pago, que es normales * tarifa + extras * tarifa * 2 (las extra se pagan al doble). La
  tarifa por hora empieza en 100 y se cambia como propiedad (hoja.tarifa = 120); un valor
  que no sea un entero mayor que 0 se ignora, sin error.

  Ejemplo: Con 8 h y 10 h: total 18, extras 2, normales 16; con tarifa 100, pago = 16 * 100
    + 2 * 100 * 2 = 2000. Un día de 8 horas no genera extras: con solo ese día, total es 8,
    extras 0 y pago 800.

  Idea: varios getters derivados de una lista de tuplas [dia, horas]; el setter de tarifa
    solo acepta valores válidos.

RESTRICCIONES
  Datos:
  - horas y valor de tarifa: cualquier número.
  - dia: cualquier texto.
  Usa:
  - Tuplas [string, number].
  - get y set; un método private para las horas extra de un día.
  - for...of.
  No uses:
  - abstract, constructor private.

QUÉ DEBES HACER
  1. Crea la clase HojaDeHoras con la propiedad oculta registros ([string, number][]),
     vacía, y la propiedad oculta _tarifa (number), con valor inicial 100.
  2. En HojaDeHoras crea el método privado horasExtra(horas: number): number y el método
     público registrar(dia: string, horas: number): boolean.
  3. En HojaDeHoras crea los getters dias, total, extras, normales y pago (todos number y
     sin setter).
  4. En HojaDeHoras crea el getter tarifa (number) y el setter tarifa(valor: number).
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const h = new HojaDeHoras();
  console.log(h.registrar('lun', 8), h.registrar('mar', 10), h.registrar('mie', 12));  // true true true
  console.log(h.registrar('lun', 5), h.registrar('jue', 0), h.registrar('jue', 13), h.registrar('vie', 7.5));  // false false false false
  h.registrar('vie', 1);
  console.log(h.dias, h.total, h.extras, h.normales);  // 4 31 6 25
  console.log(h.pago);  // 3700
  h.tarifa = 150;
  console.log(h.tarifa, h.pago);  // 150 5550
  h.tarifa = 0;
  h.tarifa = -5;
  h.tarifa = 99.5;
  console.log(h.tarifa);  // 150
  console.log(new HojaDeHoras().pago);  // 0

ESTO DEBE FALLAR
  // h.pago = 1;  → pago solo tiene getter.
  // h.total = 5;  → total solo tiene getter.
  // console.log(h.registros);  → registros es private.
  // h.horasExtra(9);  → horasExtra es private.

EXPLICA
  ¿Por qué total, extras y pago son getters en lugar de datos guardados? ¿Qué pasa
  con h.pago cuando se registra un día nuevo?
*/
// Tu solución.
// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE G — EJERCICIOS 38 AL 42: 07 CLASES ABSTRACTAS
// Una clase abstract es una base común que no se puede instanciar. Sus métodos
// abstract no tienen cuerpo y cada subclase concreta debe implementarlos. Se
// combina con herencia, accesores, colecciones y todo lo anterior.
// ═══════════════════════════════════════════════════════════════════════════
// !EJERCICIO 38 — Promociones de panadería
/*
SITUACIÓN
  Una panadería aplica promociones. Todas calculan el total de una compra igual: cantidad
  por precio, menos el descuento de la promoción; si el descuento es igual o mayor que ese
  bruto, el total es 0. Lo que cambia es el descuento. Hay tres promociones: la de
  porcentaje, con descuento cantidad * precio * porcentaje / 100; la de tres por dos, en la
  que cada grupo completo de 3 unidades regala una, con gratis = (cantidad - cantidad % 3) /
  3 y descuento gratis * precio; y la de descuento fijo, que descuenta siempre un monto
  fijo. Toda promoción tiene un nombre.

  Se pide, dada una lista de promociones, una cantidad y un precio, el nombre de la
  promoción que deja el menor total; si hay empate, la que aparece antes en la lista; si la
  lista está vacía, undefined.

  Ejemplo: TresPorDos con 7 unidades a 10: gratis = (7 - 1) / 3 = 2, descuento 20 y total()
    devuelve 70 - 20 = 50. Con 7 unidades a 10: un PorcentajePromo del 10% deja 63, un
    DescuentoFijo de 15 deja 55 y la TresPorDos deja 50, así que mejorPromo devuelve el
    nombre de la TresPorDos.

  Idea: una clase abstract define el esqueleto (total) y obliga a cada subclase a
    implementar solo lo que cambia (descuento).

RESTRICCIONES
  Datos:
  - cantidad y precio: enteros >= 0.
  - porcentaje: entero de 0 a 100.
  - La lista puede estar vacía.
  Usa:
  - Una clase abstract con un método abstract (el descuento) y un método con cuerpo que lo
    usa (el total).
  - extends y super(...).
  - Un array de la clase base (Promocion[]).
  No uses:
  - constructor private, Singleton.
  - Modificar las promociones de la lista.

QUÉ DEBES HACER
  1. Crea la clase abstracta Promocion con un constructor que declara nombre (string,
     visible y de solo lectura), el método abstracto descuento(cantidad: number, precio:
     number): number y el método público, con cuerpo, total(cantidad: number, precio:
     number): number.
  2. Crea PorcentajePromo, que extiende Promocion. Su constructor recibe nombre y porcentaje
     (number, oculto).
  3. Crea TresPorDos, que extiende Promocion. Su constructor recibe nombre.
  4. Crea DescuentoFijo, que extiende Promocion. Su constructor recibe nombre y monto
     (number, oculto).
  5. Fuera de las clases, crea mejorPromo(promos: Promocion[], cantidad: number, precio:
     number): string | undefined.
  6. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const pct = new PorcentajePromo('20%', 20);
  const tres = new TresPorDos('3x2');
  const fijo = new DescuentoFijo('-30', 30);
  const grande = new DescuentoFijo('-300', 300);
  console.log(pct.nombre, pct.total(4, 50));  // '20%' 160
  console.log(tres.total(7, 50), tres.total(3, 50), tres.total(2, 50), tres.total(0, 50));  // 250 100 100 0
  console.log(fijo.total(4, 50), fijo.total(1, 50));  // 170 20
  console.log(grande.total(4, 50), grande.total(6, 50));  // 0 0
  console.log(mejorPromo([pct, tres, fijo], 4, 50));  // '3x2'
  const pct60 = new PorcentajePromo('60%', 60);
  console.log(mejorPromo([pct60, fijo], 1, 50), mejorPromo([fijo, pct60], 1, 50));  // '60%' '-30'
  console.log(mejorPromo([], 1, 50));  // undefined

ESTO DEBE FALLAR
  // const mala = new Promocion('x');  → Promocion es abstracta.
  // class Incompleta extends Promocion {}  → no implementa descuento.
  // pct.nombre = 'otra';  → nombre es de solo lectura.
  // console.log(pct.porcentaje);  → porcentaje es private.

EXPLICA
  ¿Por qué total() está escrito una sola vez en Promocion y no en cada subclase? ¿Qué
  obliga a cada subclase a definir descuento?
*/
// Tu solución.
// !EJERCICIO 39 — Sensores con estado
/*
SITUACIÓN
  Una estación mide con sensores de tres tipos, todos con un nombre y todos se leen igual,
  pero cada uno produce sus valores a su manera. El sensor fijo siempre da el mismo valor.
  El sensor cíclico recorre su lista de valores en orden, uno por lectura, y al llegar al
  final vuelve al primero. El sensor acumulativo suma un paso en cada lectura y da el
  acumulado, que empieza en 0. Los dos últimos recuerdan su estado entre lecturas.

  Se pide, dada una lista de sensores y un número de veces, el promedio de todas las
  lecturas: se lee cada sensor, uno tras otro, esa cantidad de veces, y el promedio es la
  suma de todas las lecturas entre (cantidad de sensores * veces). Si no hay sensores o
  veces es 0 o menos, el promedio es 0.

  Ejemplo: SensorCiclico('C', [1, 2, 3]): sus lecturas sucesivas son 1, 2, 3 y otra vez 1.
    Con promedioLecturas([new SensorFijo('F', 10), new SensorCiclico('C', [1, 2, 3])], 3)
    las lecturas son 10, 10, 10 y 1, 2, 3: la suma es 36 entre 6 lecturas y el promedio es
    6.

  Idea: cada subclase implementa leer() a su manera y algunas recuerdan su estado entre
    lecturas.

RESTRICCIONES
  Datos:
  - valores del sensor cíclico: al menos 1 elemento.
  - veces: número entero.
  - La lista de sensores puede estar vacía.
  Usa:
  - Una clase abstract con un método abstract (leer).
  - extends y super(...); el estado de cada sensor como propiedad private.
  - for; ?? 0 al leer valores[posicion] (con noUncheckedIndexedAccess puede ser undefined).
  No uses:
  - constructor private, Singleton.

QUÉ DEBES HACER
  1. Crea la clase abstracta Sensor con un constructor que declara nombre (string, visible y
     de solo lectura) y el método abstracto leer(): number.
  2. Crea SensorFijo, que extiende Sensor. Su constructor recibe nombre y valor (number,
     oculto).
  3. Crea SensorCiclico, que extiende Sensor. Su constructor recibe nombre y valores
     (number[], oculto). Declara posicion (number, oculta) con valor inicial 0.
  4. Crea SensorAcumulativo, que extiende Sensor. Su constructor recibe nombre y paso
     (number, oculto). Declara acumulado (number, oculta) con valor inicial 0.
  5. Fuera de las clases, crea promedioLecturas(sensores: Sensor[], veces: number): number.
  6. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const f = new SensorFijo('F', 10);
  const c = new SensorCiclico('C', [1, 2, 3]);
  const a = new SensorAcumulativo('A', 5);
  console.log(c.leer(), c.leer(), c.leer(), c.leer());  // 1 2 3 1
  console.log(a.leer(), a.leer(), a.leer());  // 5 10 15
  console.log(f.leer(), f.nombre);  // 10 'F'
  const s: Sensor[] = [new SensorFijo('F', 10), new SensorCiclico('C', [1, 2, 3]), new SensorAcumulativo('A', 6)];
  console.log(promedioLecturas(s, 3));  // 8
  console.log(promedioLecturas(s, 3));  // 14
  console.log(promedioLecturas(s, 0), promedioLecturas([], 5));  // 0 0

ESTO DEBE FALLAR
  // const x = new Sensor('X');  → Sensor es abstracta.
  // f.nombre = 'Z';  → nombre es de solo lectura.
  // console.log(c.valores);  → valores es private.

EXPLICA
  ¿Por qué la segunda llamada a promedioLecturas da 14 y no 8? ¿Qué sensores
  recuerdan su estado y cuáles no?
*/
// Tu solución.
// !EJERCICIO 40 — Cajas para empacar
/*
SITUACIÓN
  Una bodega empaca unidades en recipientes. Todo recipiente tiene un nombre y una capacidad
  (las unidades que caben); las unidades se reparten llenando un recipiente tras otro hasta
  guardarlas todas. Los recipientes necesarios para unas unidades son los que hay que llenar
  para cubrirlas (0 si no hay unidades), y el sobrante es el espacio libre que queda:
  recipientes necesarios * capacidad - unidades. Hay tres recipientes: la caja chica, de
  capacidad 12 y nombre 'Caja chica'; la caja grande, de capacidad 30 y nombre 'Caja
  grande'; y la bandeja, de nombre 'Bandeja' y capacidad filas * columnas.

  Se pide, dada una lista de recipientes y unas unidades, el que usa menos recipientes; si
  empatan, el de menor sobrante; si siguen empatados, el que aparece antes en la lista; si
  la lista está vacía, undefined.

  Ejemplo: 30 unidades en CajaChica (capacidad 12): se necesitan 3 cajas y sobran 3 * 12 -
    30 = 6. Con 30 unidades, una CajaGrande (capacidad 30) necesita 1 caja y no sobra nada,
    así que mejorEmpaque([chica, grande], 30) devuelve la CajaGrande.

  Idea: un método de la clase abstract usa un método abstract (capacidad) que aún no sabe
    cuánto vale.

RESTRICCIONES
  Datos:
  - unidades: entero >= 0.
  - filas y columnas: enteros >= 1; la capacidad siempre es mayor que 0.
  - La lista puede estar vacía.
  Usa:
  - Una clase abstract con un método abstract (capacidad) que usan sus métodos con cuerpo.
  - extends y super(...).
  - while para repartir las unidades.
  No uses:
  - constructor private, Singleton.
  - Modificar la lista de recipientes.

QUÉ DEBES HACER
  1. Crea la clase abstracta Empaque con un constructor que declara nombre (string, visible
     y de solo lectura), el método abstracto capacidad(): number y los métodos públicos, con
     cuerpo, cajasNecesarias(unidades: number): number y sobrante(unidades: number): number.
  2. Crea CajaChica y CajaGrande, que extienden Empaque. Sus constructores no reciben nada.
  3. Crea Bandeja, que extiende Empaque. Su constructor recibe filas y columnas (number,
     ambos ocultos).
  4. Fuera de las clases, crea mejorEmpaque(opciones: Empaque[], unidades: number): Empaque
     | undefined.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const chica = new CajaChica();
  const grande = new CajaGrande();
  const band = new Bandeja(2, 5);
  const band34 = new Bandeja(3, 4);
  console.log(chica.cajasNecesarias(0), chica.cajasNecesarias(1), chica.cajasNecesarias(12));  // 0 1 1
  console.log(chica.cajasNecesarias(13), chica.cajasNecesarias(24), chica.cajasNecesarias(25));  // 2 2 3
  console.log(chica.sobrante(13), chica.sobrante(12), chica.sobrante(0));  // 11 0 0
  console.log(band.capacidad(), band.cajasNecesarias(25), band.sobrante(25));  // 10 3 5
  console.log(mejorEmpaque([chica, grande, band], 25)?.nombre);  // 'Caja grande'
  console.log(mejorEmpaque([chica, grande, band], 60)?.nombre);  // 'Caja grande'
  console.log(mejorEmpaque([chica, grande, band34], 12)?.nombre);  // 'Caja chica'
  console.log(mejorEmpaque([band34, chica], 12)?.nombre);  // 'Bandeja'
  console.log(mejorEmpaque([], 5));  // undefined

ESTO DEBE FALLAR
  // const e = new Empaque('x');  → Empaque es abstracta.
  // class Incompleto extends Empaque {}  → no implementa capacidad.
  // chica.nombre = 'Otra';  → nombre es de solo lectura.
  // console.log(band.filas);  → filas es private.

EXPLICA
  ¿Por qué cajasNecesarias funciona para cualquier subclase aunque Empaque no sepa su
  capacidad? ¿Por qué en el último caso gana la bandeja?
*/
// Tu solución.
// !EJERCICIO 41 — Nómina de una empresa
/*
SITUACIÓN
  Una empresa paga a tres tipos de empleados, todos con nombre y con un pago mensual
  calculado a su manera. El asalariado cobra un salario fijo. El empleado por horas cobra su
  tarifa por cada hora hasta 160; cada hora que pase de 160 se paga al doble de la tarifa.
  El comisionista cobra una base más el 5 % de la suma de sus ventas.

  La nómina guarda empleados de cualquier tipo y calcula usando solo el pago mensual de cada
  uno. Agregar un empleado se rechaza si ya hay otro con el mismo nombre; si no, se añade al
  final; informa con true si se hizo y false si se rechazó. Se piden el total que paga la
  nómina (la suma de los pagos mensuales), el nombre del empleado que más cobra (si hay
  empate, el que se agregó antes; undefined si no hay empleados) y los nombres, en orden, de
  quienes cobran estrictamente más que un monto dado ([] si ninguno).

  Ejemplo: PorHoras con tarifa 10 y 170 horas: 160 * 10 + 10 * 20 = 1800. Con un Asalariado
    de 1500 y el PorHoras anterior (1800) en la nómina, total() devuelve 3300, mayorPago()
    devuelve el nombre del PorHoras y conPagoMayorA(1600) devuelve solo ese nombre.

  Idea: una clase concreta (Nomina) que guarda empleados de cualquier tipo y usa solo lo
    común a todos (pagoMensual).

RESTRICCIONES
  Datos:
  - tarifa y horas: enteros >= 0.
  - Cada venta del comisionista es un múltiplo de 20.
  - La nómina puede estar vacía.
  Usa:
  - Una clase abstract con un método abstract (pagoMensual) y una clase concreta (Nomina)
    que guarda un array de la clase base.
  - extends y super(...).
  - for...of.
  No uses:
  - constructor private, Singleton.

QUÉ DEBES HACER
  1. Crea la clase abstracta Empleado con un constructor que declara nombre (string, visible
     y de solo lectura) y el método abstracto pagoMensual(): number.
  2. Crea Asalariado, que extiende Empleado. Su constructor recibe nombre y salario (number,
     oculto).
  3. Crea PorHoras, que extiende Empleado. Su constructor recibe nombre, tarifa y horas
     (number, ambos ocultos).
  4. Crea Comisionista, que extiende Empleado. Su constructor recibe nombre, base (number,
     oculto) y ventas (number[], oculto).
  5. Crea la clase concreta Nomina con un array oculto empleados (Empleado[]), vacío, y los
     métodos públicos agregar(e: Empleado): boolean, total(): number, mayorPago(): string |
     undefined y conPagoMayorA(monto: number): string[].
  6. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const n = new Nomina();
  const ana = new Asalariado('Ana', 3000);
  const beto = new PorHoras('Beto', 20, 170);
  const cris = new Comisionista('Cris', 1000, [200, 400, 100]);
  console.log(ana.pagoMensual(), beto.pagoMensual(), cris.pagoMensual());  // 3000 3600 1035
  console.log(new PorHoras('X', 20, 160).pagoMensual(), new PorHoras('Y', 20, 161).pagoMensual());  // 3200 3240
  console.log(new Comisionista('Z', 500, []).pagoMensual());  // 500
  console.log(n.agregar(ana), n.agregar(beto), n.agregar(cris));  // true true true
  console.log(n.agregar(new Asalariado('Ana', 1)));  // false
  console.log(n.total(), n.mayorPago());  // 7635 'Beto'
  console.log(n.conPagoMayorA(3000));  // [ 'Beto' ]
  console.log(n.conPagoMayorA(1034));  // [ 'Ana', 'Beto', 'Cris' ]
  console.log(n.conPagoMayorA(5000));  // []
  console.log(new Nomina().mayorPago(), new Nomina().total());  // undefined 0

ESTO DEBE FALLAR
  // const e = new Empleado('x');  → Empleado es abstracta.
  // console.log(n.empleados);  → empleados es private.
  // n.agregar('Ana');  → agregar espera un Empleado.
  // console.log(ana.salario);  → salario es private.

EXPLICA
  ¿Por qué Nomina puede guardar un array Empleado[] con tres tipos distintos? ¿Por
  qué conPagoMayorA(3000) no incluye a Ana?
*/
// Tu solución.
// !EJERCICIO 42 — Validadores de texto
/*
SITUACIÓN
  Un formulario valida textos con reglas distintas. Un texto vacío ('') nunca es válido para
  ningún validador; uno no vacío es válido si cumple la regla del validador concreto. La
  regla es un detalle interno: solo la ven el validador base y sus tipos. Hay tres reglas:
  solo dígitos, cuando todos los caracteres están entre '0' y '9'; longitud entre, cuando la
  longitud del texto es mayor o igual que un mínimo y menor o igual que un máximo (datos del
  validador); y correo, cuando el texto tiene exactamente un '@' y ni el primer ni el último
  carácter son '@'. Todo validador puede decir cuántos textos de una lista son válidos.

  Aparte se pide, dada una lista de validadores y un texto, cuántos validadores de la lista
  aceptan ese texto.

  Ejemplo: Correo.validar('a@b') es true; Correo.validar('@b') es false; validar('') es
    false para cualquier validador. SoloDigitos.contarValidos(['12', 'a1', '']) devuelve 1;
    cuantosAceptan([new SoloDigitos(), new Correo()], '123') también devuelve 1.

  Idea: un método abstract protected: la regla concreta es un detalle interno y la base
    decide lo común (el texto vacío nunca es válido).

RESTRICCIONES
  Datos:
  - valor: cualquier texto (puede ser '').
  - minimo y maximo: números.
  - Las listas pueden estar vacías.
  Usa:
  - Una clase abstract con un método abstract protected (regla) y métodos con cuerpo que lo
    usan.
  - extends y super().
  - for...of; charAt(0) y charAt(valor.length - 1) para el correo.
  No uses:
  - constructor private, Singleton.
  - Expresiones regulares.

QUÉ DEBES HACER
  1. Crea la clase abstracta Validador (sin constructor propio) con el método abstracto
     protegido regla(valor: string): boolean y los métodos públicos, con cuerpo,
     validar(valor: string): boolean y contarValidos(valores: string[]): number.
  2. Crea SoloDigitos, que extiende Validador.
  3. Crea LongitudEntre, que extiende Validador. Su constructor recibe minimo y maximo
     (number, ambos ocultos) y llama a super() sin argumentos.
  4. Crea Correo, que extiende Validador.
  5. Fuera de las clases, crea cuantosAceptan(validadores: Validador[], valor: string):
     number.
  6. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const d = new SoloDigitos();
  const l = new LongitudEntre(3, 5);
  const c = new Correo();
  console.log(d.validar('123'), d.validar('12a'), d.validar(''));  // true false false
  console.log(d.contarValidos(['1', '22', 'x', '', '3a']));  // 2
  console.log(l.validar('ab'), l.validar('abc'), l.validar('abcde'), l.validar('abcdef'));  // false true true false
  console.log(new LongitudEntre(0, 5).validar(''));  // false
  console.log(c.validar('a@b'), c.validar('@b'), c.validar('a@'), c.validar('a@@b'), c.validar('ab'));  // true false false false false
  const lista: Validador[] = [d, l, c];
  console.log(cuantosAceptan(lista, '123'), cuantosAceptan(lista, 'a@b.c'), cuantosAceptan(lista, ''));  // 2 2 0

ESTO DEBE FALLAR
  // const v = new Validador();  → Validador es abstracta.
  // d.regla('1');  → regla es protected.
  // class Incompleto extends Validador {}  → no implementa regla.
  // console.log(l.minimo);  → minimo es private.

EXPLICA
  ¿Por qué regla es protected y validar público? ¿Qué ventaja tiene que el texto vacío
  se rechace en un solo lugar?
*/
// Tu solución.
// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE H — EJERCICIOS 43 AL 45: 08 CONSTRUCTOR PRIVADO Y SINGLETON
// Un constructor private impide crear instancias con new desde fuera: la propia clase
// decide cuándo crearlas, normalmente mediante un método static. El patrón Singleton
// guarda una única instancia y devuelve siempre la misma. Se combina con 01–07.
// ═══════════════════════════════════════════════════════════════════════════
// !EJERCICIO 43 — Bitácora compartida
/*
SITUACIÓN
  Una aplicación necesita una única bitácora de mensajes que todos los módulos compartan:
  nadie puede crear otra con new, la bitácora se obtiene siempre de la clase y es siempre la
  misma. Anotar un mensaje se rechaza si es '' o si es igual al último mensaje guardado; si
  no, se añade al final. Anotar informa con true si se hizo y false si se rechazó.

  También se puede consultar cuántos mensajes hay; pedir los últimos n mensajes (una copia,
  del más antiguo al más reciente; [] si n es 0 o menos; todos si n es mayor o igual que el
  total); y vaciar la bitácora, que borra todos los mensajes e informa cuántos había.

  Ejemplo: Bitacora.obtener() === Bitacora.obtener() es true: siempre se devuelve la misma
    instancia; new Bitacora() fuera de la clase no compila. obtener().anotar('inicio')
    devuelve true; anotar('inicio') otra vez devuelve false (es igual al último mensaje) y
    total() sigue en 1.

  Idea: el patrón Singleton: constructor private + una propiedad static que guarda la única
    instancia.

RESTRICCIONES
  Datos:
  - mensaje: cualquier texto.
  - n: número entero.
  Usa:
  - Singleton: un constructor private y una propiedad static que guarda la única instancia.
  - Arrays de la clase.
  No uses:
  - interfaces, genéricos, instanceof, try/catch, Map, Set.

QUÉ DEBES HACER
  1. Crea la clase Bitacora con la propiedad static oculta instancia (Bitacora | undefined),
     sin valor inicial, un constructor privado sin parámetros y con cuerpo vacío, y un array
     oculto registros (string[]), vacío.
  2. En Bitacora crea el método static y público obtener(): Bitacora. La primera vez crea la
     instancia.
  3. En Bitacora crea los métodos públicos anotar(mensaje: string): boolean, total():
     number, ultimos(n: number): string[] y vaciar(): number.
  4. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const a = Bitacora.obtener();
  const b = Bitacora.obtener();
  console.log(a === b);  // true
  console.log(a.anotar('inicio'), b.anotar(''), b.anotar('inicio'));  // true false false
  console.log(b.anotar('lectura'), a.anotar('fin'), a.anotar('lectura'));  // true true true
  console.log(b.total());  // 4
  console.log(a.ultimos(2));  // [ 'fin', 'lectura' ]
  console.log(a.ultimos(10));  // [ 'inicio', 'lectura', 'fin', 'lectura' ]
  console.log(a.ultimos(0), a.ultimos(-1));  // [] []
  console.log(b.vaciar(), a.total());  // 4 0
  console.log(a.anotar('inicio'));  // true

ESTO DEBE FALLAR
  // const otra = new Bitacora();  → el constructor es private.
  // console.log(Bitacora.instancia);  → instancia es private.
  // class Otra extends Bitacora {}  → no se puede extender una clase con constructor private.
  // console.log(a.registros);  → registros es private.

EXPLICA
  ¿Por qué a === b es true? ¿Por qué la propiedad instancia debe ser private además de
  static?
*/
// Tu solución.
// !EJERCICIO 44 — Fracciones siempre simplificadas
/*
SITUACIÓN
  Una fracción nunca debe existir sin simplificar ni con denominador 0; por eso solo se crea
  con una operación de la clase que valida y simplifica antes: se rechaza (se obtiene
  undefined) si el numerador o el denominador no es entero o si el denominador es 0.
  Simplificar una fracción es dividir numerador y denominador entre su máximo común divisor
  y dejar el denominador positivo (si es negativo, se multiplican ambos por -1). El máximo
  común divisor se halla con el algoritmo de Euclides: a es el numerador sin signo y b es el
  denominador; mientras b no sea 0, resto es a % b, a pasa a ser b y b pasa a ser resto; el
  divisor es a.

  Una fracción puede sumarse con otra (el numerador es n1 * d2 + n2 * d1 y el denominador d1
  * d2, y el resultado se simplifica), compararse con otra (es mayor si numerador *
  otra.denominador es mayor que otra.numerador * denominador) y mostrarse como texto:
  '{numerador}' si el denominador es 1 y '{numerador}/{denominador}' en otro caso.

  Ejemplo: Fraccion.crear(2, 4) devuelve la fracción 1/2; crear(1, 0) devuelve undefined;
    1/2 + 1/3 da 5/6. texto() de 1/2 es '1/2' y el de crear(4, 2) es '2'; la fracción 1/2
    esMayorQue 1/3.

  Idea: un constructor private obliga a crear las instancias mediante métodos static que
    validan y simplifican antes.

RESTRICCIONES
  Datos:
  - Al crear: numerador y denominador pueden ser cualquier número.
  - simplificar recibe enteros con d distinto de 0.
  Usa:
  - Un constructor private y métodos static.
  - El algoritmo de Euclides con while.
  No uses:
  - interfaces, genéricos, instanceof, try/catch, Map, Set.
  - Math y recursión.

QUÉ DEBES HACER
  1. Crea la clase Fraccion con un constructor privado con dos propiedades de parámetro, en
     este orden: numerador y denominador (number, visibles y de solo lectura). El cuerpo
     queda vacío.
  2. En Fraccion crea el método static y privado simplificar(n: number, d: number):
     Fraccion.
  3. En Fraccion crea el método static y público crear(numerador: number, denominador:
     number): Fraccion | undefined.
  4. En Fraccion crea los métodos públicos sumar(otra: Fraccion): Fraccion, esMayorQue(otra:
     Fraccion): boolean y texto(): string.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen. «as Fraccion» solo le dice
     a TypeScript que esas fracciones sí se crearon.

COMPRUEBA
  console.log(Fraccion.crear(2, 4)?.texto(), Fraccion.crear(-3, -6)?.texto(), Fraccion.crear(3, -6)?.texto());  // '1/2' '1/2' '-1/2'
  console.log(Fraccion.crear(0, 5)?.texto(), Fraccion.crear(6, 3)?.texto(), Fraccion.crear(-4, 2)?.texto());  // '0' '2' '-2'
  console.log(Fraccion.crear(1, 0), Fraccion.crear(1.5, 2), Fraccion.crear(1, 2.5));  // undefined undefined undefined
  const medio = Fraccion.crear(1, 2) as Fraccion;
  const tercio = Fraccion.crear(1, 3) as Fraccion;
  const negMedio = Fraccion.crear(-1, 2) as Fraccion;
  const negDosTercios = Fraccion.crear(-2, 3) as Fraccion;
  console.log(medio.sumar(tercio).texto());  // '5/6'
  console.log(medio.sumar(medio).texto(), medio.sumar(negMedio).texto());  // '1' '0'
  console.log(medio.esMayorQue(tercio), tercio.esMayorQue(medio), medio.esMayorQue(medio));  // true false false
  console.log(negMedio.esMayorQue(negDosTercios));  // true
  console.log(medio.numerador, medio.denominador);  // 1 2

ESTO DEBE FALLAR
  // const f = new Fraccion(1, 2);  → el constructor es private.
  // medio.numerador = 5;  → numerador es de solo lectura.
  // Fraccion.simplificar(2, 4);  → simplificar es private.
  // Fraccion.crear(1, 2).texto();  → crear puede devolver undefined.

EXPLICA
  ¿Por qué crear devuelve Fraccion | undefined y sumar solo Fraccion? ¿Qué garantiza que
  ninguna fracción tenga denominador 0 o negativo?
*/
// Tu solución.
// !EJERCICIO 45 — Aforo compartido entre puertas
/*
SITUACIÓN
  Un estadio tiene varias puertas pero un único aforo: las personas que entran por cualquier
  puerta ocupan lugar para todas. El aforo es único y compartido (nadie crea otro) y guarda
  la capacidad máxima, que al crearse es 100, y cuántas personas hay dentro, que empieza en
  0. Configurar la capacidad se rechaza si no es un entero mayor que 0 o si ya hay gente
  dentro. Ingresar n personas se rechaza si n no es un entero mayor que 0 o si dentro + n
  pasaría de la capacidad (llegar justo a la capacidad sí se acepta); salir n personas se
  rechaza si n no es un entero mayor que 0 o si n es mayor que las que hay dentro. Cada
  operación informa con true si se hizo y false si se rechazó. También se pueden consultar
  los lugares libres (capacidad menos dentro).

  Cada puerta tiene un nombre y cuenta sus propias entradas y salidas, que empiezan en 0.
  Entrar o salir por una puerta pasa siempre por el aforo único: la puerta suma esas
  personas a lo suyo solo si el aforo las aceptó, e informa lo mismo que el aforo. La puerta
  se resume con el texto '{nombre}: entraron {entradas}, salieron {salidas}'.

  Ejemplo: Con aforo 100: Puerta 1 deja entrar 60; Puerta 2 intenta 50 y recibe false (60 +
    50 supera 100). El resumen() de la Puerta 1 es 'Puerta 1: entraron 60, salieron 0'.

  Idea: un Singleton compartido por instancias normales: todas las puertas consultan el
    mismo aforo mediante Aforo.obtener().

RESTRICCIONES
  Datos:
  - capacidad, n y personas: cualquier número.
  Usa:
  - Singleton: constructor private y propiedad static.
  - readonly; métodos de instancia (la puerta) y métodos static.
  No uses:
  - interfaces, genéricos, instanceof, try/catch, Map, Set.

QUÉ DEBES HACER
  1. Crea la clase Aforo con la propiedad static oculta unica (Aforo | undefined), sin valor
     inicial, un constructor privado con una propiedad de parámetro capacidad (number,
     oculta) y la propiedad oculta dentro (number), con valor inicial 0.
  2. En Aforo crea el método static y público obtener(): Aforo. La primera vez crea la
     instancia con new Aforo(100).
  3. En Aforo crea los métodos públicos configurar(capacidad: number): boolean, ingresar(n:
     number): boolean, salir(n: number): boolean y lugaresLibres(): number.
  4. Crea la clase Puerta (constructor público) con un constructor que declara nombre
     (string, visible y de solo lectura) y las propiedades ocultas entradas y salidas
     (number), ambas con valor inicial 0.
  5. En Puerta crea los métodos públicos entrar(personas: number): boolean, salir(personas:
     number): boolean y resumen(): string.
  6. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const aforo = Aforo.obtener();
  console.log(aforo === Aforo.obtener());  // true
  console.log(aforo.configurar(10), aforo.configurar(0), aforo.configurar(5.5));  // true false false
  const p1 = new Puerta('Norte');
  const p2 = new Puerta('Sur');
  console.log(p1.entrar(6), p2.entrar(5), p2.entrar(4));  // true false true
  console.log(aforo.lugaresLibres());  // 0
  console.log(aforo.configurar(20));  // false
  console.log(p2.entrar(0), p1.entrar(1));  // false false
  console.log(p1.salir(7), aforo.lugaresLibres());  // true 7
  console.log(p2.salir(4), p2.salir(3), aforo.lugaresLibres());  // false true 10
  console.log(aforo.configurar(20), aforo.lugaresLibres());  // true 20
  console.log(p1.resumen());  // 'Norte: entraron 6, salieron 7'
  console.log(p2.resumen());  // 'Sur: entraron 4, salieron 3'

ESTO DEBE FALLAR
  // const otro = new Aforo(5);  → el constructor es private.
  // console.log(Aforo.unica);  → unica es private.
  // console.log(aforo.dentro);  → dentro es private.
  // console.log(p1.entradas);  → entradas es private.

EXPLICA
  ¿Por qué p1 puede sacar a personas que entraron por p2? ¿Qué pasaría si Puerta
  creara su propio Aforo en lugar de usar Aforo.obtener()?
*/
// Tu solución.
// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE I — EJERCICIOS 46 AL 50: INTEGRACIÓN FINAL
// Cada ejercicio combina varios temas de la sección (clases abstractas, herencia,
// static, accesores, constructor privado, Singleton) con arrays, tuplas, enum, Record,
// uniones y funciones como parámetro de las secciones anteriores.
// ═══════════════════════════════════════════════════════════════════════════
// !EJERCICIO 46 — Comandas de un restaurante
/*
SITUACIÓN
  Un restaurante prepara tres tipos de platos, todos con nombre y precio, y cada uno con su
  tiempo de preparación: el aperitivo tarda 5 minutos; el plato fuerte, 15 más 3 por cada
  guarnición que lleve; el postre, 4 minutos si es frío y 10 si no. Cada comanda recibe un
  número único: 1 la primera comanda creada, 2 la segunda, y así; el restaurante (la clase)
  puede decir cuántas comandas se han emitido. Una comanda guarda hasta seis platos: agregar
  se rechaza si ya hay seis (se permite repetir el mismo plato) e informa con true si se
  hizo y false si se rechazó.

  La comanda calcula al leer su total (la suma de los precios de sus platos; 0 si no hay) y
  su tiempo total (0 si no hay platos; si no, el tiempo del plato más lento más 2 minutos
  por cada plato adicional, es decir, 2 * (cantidad de platos - 1)). También lista los
  nombres, en el orden de los platos, de los que cumplan una condición que se le pasa como
  función: una función que recibe un plato y devuelve true o false.

  Ejemplo: Comanda con un Aperitivo (5 min) y un PlatoFuerte con 2 guarniciones (21 min):
    tiempoTotal es 21 + 2 * (2 - 1) = 23. filtrar(p => p.precio > 100) devuelve los nombres
    de los platos que cuestan más de 100.

  Idea: integración: abstract, herencia, static, getters y una función como parámetro
    (filtrar).

RESTRICCIONES
  Datos:
  - guarniciones: entero >= 0.
  - Una comanda guarda como máximo 6 platos.
  Usa:
  - Una clase abstract con un método abstract (tiempo) y extends con super(...).
  - Una propiedad static para el contador y get para total y tiempoTotal.
  - Una función como parámetro (condicion).
  No uses:
  - interfaces, genéricos, instanceof, try/catch, Map, Set.

QUÉ DEBES HACER
  1. Crea la clase abstracta Plato con un constructor que declara nombre (string, visible y
     de solo lectura) y precio (number, visible y de solo lectura), y el método abstracto
     tiempo(): number.
  2. Crea Aperitivo, que extiende Plato. Su constructor recibe nombre y precio.
  3. Crea PlatoFuerte, que extiende Plato. Su constructor recibe nombre, precio y
     guarniciones (number, oculto).
  4. Crea Postre, que extiende Plato. Su constructor recibe nombre, precio y frio (boolean,
     oculto).
  5. Crea la clase Comanda con la propiedad static oculta contador (number), con valor
     inicial 0, el array oculto platos (Plato[]), vacío, y la propiedad numero (number,
     visible y de solo lectura). Su constructor no recibe nada: suma 1 a Comanda.contador y
     guarda ese valor en this.numero.
  6. En Comanda crea el método static y público emitidas(): number.
  7. En Comanda crea los métodos públicos agregar(p: Plato): boolean y filtrar(condicion:
     (p: Plato) => boolean): string[], y los getters total (number) y tiempoTotal (number).
  8. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const sopa = new Aperitivo('Sopa', 40);
  const pollo = new PlatoFuerte('Pollo', 120, 2);
  const helado = new Postre('Helado', 50, true);
  const pastel = new Postre('Pastel', 60, false);
  const c1 = new Comanda();
  console.log(c1.numero, c1.total, c1.tiempoTotal);  // 1 0 0
  console.log(c1.agregar(sopa), c1.agregar(pollo), c1.agregar(helado));  // true true true
  console.log(c1.total, c1.tiempoTotal);  // 210 25
  console.log(c1.agregar(pastel), c1.agregar(sopa), c1.agregar(sopa));  // true true true
  console.log(c1.agregar(helado), c1.total, c1.tiempoTotal);  // false 350 31
  console.log(c1.filtrar((p) => p.precio >= 60));  // [ 'Pollo', 'Pastel' ]
  console.log(c1.filtrar((p) => p.tiempo() <= 5));  // [ 'Sopa', 'Helado', 'Sopa', 'Sopa' ]
  const c2 = new Comanda();
  console.log(c2.numero, c2.total, Comanda.emitidas());  // 2 0 2

ESTO DEBE FALLAR
  // const x = new Plato('x', 1);  → Plato es abstracta.
  // c1.numero = 5;  → numero es de solo lectura.
  // c1.total = 1;  → total solo tiene getter.
  // console.log(c1.platos);  → platos es private.

EXPLICA
  ¿Por qué filtrar recibe una función en lugar de una lista fija de condiciones? ¿Qué
  muestra que el número de comanda no pertenece a una comanda concreta sino a la clase?
*/
// Tu solución.
// !EJERCICIO 47 — Sala de espera con triage
/*
SITUACIÓN
  Un hospital atiende a sus pacientes por gravedad (Leve = 1, Moderada = 2 o Grave = 3) y, a
  igual gravedad, por orden de llegada. Todo paciente tiene un nombre y una gravedad, y un
  tiempo de atención en minutos: el adulto tarda 10 por cada punto de gravedad; el niño, 8
  por cada punto de gravedad, más 5 si tiene menos de 3 años.

  La sala de espera guarda la fila de pacientes. Ingresar un paciente se rechaza si ya hay
  en la fila uno con el mismo nombre; si no, se añade al final y se cuenta como llegada (el
  hospital lleva el total de llegadas, que se puede consultar). Se puede ver quién sigue sin
  sacarlo: el paciente de mayor gravedad; si hay empate, el que está antes en la fila;
  undefined si la fila está vacía. Atender saca de la fila al que sigue y responde '{nombre}
  ({minutos} min)', o 'sala vacía' si no hay nadie. Se leen como propiedades cuántos
  pacientes están pendientes y la espera estimada (la suma de los minutos de todos los de la
  fila).

  Ejemplo: Un Adulto grave (30 min) y un Nino grave de 2 años (29 min): siguiente() devuelve
    al que llegó antes entre los dos graves. Si el Adulto grave 'Ana' llegó antes que el niño,
    atender() devuelve 'Ana (30 min)'.

  Idea: un enum numérico para comparar gravedades y un desempate por orden de llegada.

RESTRICCIONES
  Datos:
  - edad: entero >= 0.
  - Los nombres de los pacientes de la fila son únicos.
  Usa:
  - enum Gravedad declarado dentro de tu función, antes de las clases.
  - Una clase abstract con un método abstract (minutos) y extends con super(...).
  - Una propiedad static para las llegadas; get; un array nuevo al sacar un paciente.
  No uses:
  - interfaces, genéricos, instanceof, try/catch, Map, Set.

QUÉ DEBES HACER
  1. Dentro de tu función, antes de las clases, declara: enum Gravedad { Leve = 1, Moderada
     = 2, Grave = 3 }
  2. Crea la clase abstracta Paciente con un constructor que declara nombre (string, visible
     y de solo lectura) y gravedad (Gravedad, visible y de solo lectura), y el método
     abstracto minutos(): number.
  3. Crea Adulto, que extiende Paciente. Su constructor recibe nombre y gravedad.
  4. Crea Nino, que extiende Paciente. Su constructor recibe nombre, gravedad y edad
     (number, oculto).
  5. Crea la clase SalaEspera con un array oculto fila (Paciente[]), vacío, y la propiedad
     static oculta llegadas (number), con valor inicial 0.
  6. En SalaEspera crea los métodos públicos ingresar(p: Paciente): boolean, siguiente():
     Paciente | undefined y atender(): string, los getters pendientes (number) y
     esperaEstimada (number), y el método static y público totalLlegadas(): number.
  7. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const ana = new Adulto('Ana', Gravedad.Leve);
  const beto = new Nino('Beto', Gravedad.Grave, 2);
  const cora = new Adulto('Cora', Gravedad.Grave);
  const dani = new Nino('Dani', Gravedad.Moderada, 7);
  const s = new SalaEspera();
  console.log(s.siguiente(), s.pendientes, s.esperaEstimada, s.atender());  // undefined 0 0 'sala vacía'
  console.log(s.ingresar(ana), s.ingresar(beto), s.ingresar(cora), s.ingresar(dani));  // true true true true
  console.log(s.ingresar(new Adulto('Ana', Gravedad.Grave)));  // false
  console.log(s.pendientes, s.esperaEstimada);  // 4 85
  console.log(s.siguiente()?.nombre);  // 'Beto'
  console.log(s.atender(), s.atender());  // 'Beto (29 min)' 'Cora (30 min)'
  console.log(s.pendientes, s.esperaEstimada);  // 2 26
  console.log(s.atender(), s.atender(), s.atender());  // 'Dani (16 min)' 'Ana (10 min)' 'sala vacía'
  console.log(SalaEspera.totalLlegadas());  // 4
  const s2 = new SalaEspera();
  console.log(s2.ingresar(ana), s2.pendientes, SalaEspera.totalLlegadas());  // true 1 5

ESTO DEBE FALLAR
  // const x = new Paciente('x', Gravedad.Leve);  → Paciente es abstracta.
  // const y = new Adulto('Y', 'Leve');  → gravedad debe ser un valor del enum.
  // beto.gravedad = Gravedad.Leve;  → gravedad es de solo lectura.
  // s.pendientes = 3;  → pendientes solo tiene getter.
  // console.log(s.fila);  → fila es private.

EXPLICA
  ¿Por qué Beto se atiende antes que Cora si ambos son graves? ¿Por qué siguiente() no
  saca al paciente de la fila y atender() sí?
*/
// Tu solución.
// !EJERCICIO 48 — Pista de aterrizaje única
/*
SITUACIÓN
  Un aeropuerto tiene una sola pista, única y compartida (nadie crea otra). Las aeronaves
  piden turno para usarla: la primera aterriza y las demás esperan en una cola de hasta
  tres. Una aeronave tiene matrícula y pasajeros y se describe con el texto '{matricula} con
  {pasajeros} pasajeros'; cada tipo ocupa la pista un tiempo distinto: la avioneta, 5
  minutos; el helicóptero, 3; la aeronave comercial, 15 si lleva más de 150 pasajeros y 10
  si no.

  Pedir turno con una aeronave se resuelve en este orden: si ya es el ocupante o ya está en
  la cola, responde 'repetida'; si no hay ocupante, pasa a ser el ocupante y responde
  'aterrizando {matricula}'; si la cola ya tiene 3 aeronaves, responde 'cola llena'; si no,
  entra al final de la cola y responde 'en espera: posición {n}', con n la cantidad de
  aeronaves en la cola contando a esta. Liberar la pista deja pasar a la primera de la cola,
  que pasa a ser el ocupante (responde 'aterrizando {matricula}'); si la cola está vacía, la
  pista queda sin ocupante y responde 'pista libre'. También se pide la ocupación total: la
  suma de los minutos en pista del ocupante (si hay) y de todas las aeronaves de la cola.

  Ejemplo: La primera aeronave en solicitar() recibe 'aterrizando {matricula}' y la
    siguiente 'en espera: posición 1'. Si la cola ya tiene 3 aeronaves, solicitar devuelve
    'cola llena'.

  Idea: un Singleton con una cola de espera: el orden de las comprobaciones en solicitar
    decide la respuesta.

RESTRICCIONES
  Datos:
  - pasajeros: entero >= 0.
  - La cola admite como máximo 3 aeronaves.
  Usa:
  - Singleton: constructor private y propiedad static.
  - Una clase abstract con un método abstract (minutosEnPista) y extends con super(...).
  - Un array nuevo al sacar de la cola; === para comparar aeronaves.
  No uses:
  - interfaces, genéricos, instanceof, try/catch, Map, Set.

QUÉ DEBES HACER
  1. Crea la clase abstracta Aeronave con un constructor que declara matricula (string,
     visible y de solo lectura) y pasajeros (number, solo jerarquía), el método abstracto
     minutosEnPista(): number y el método público describir(): string.
  2. Crea Avioneta, Helicoptero y Comercial, que extienden Aeronave. Cada constructor recibe
     matricula y pasajeros.
  3. Crea la clase Pista con la propiedad static oculta unica (Pista | undefined), sin valor
     inicial, y un constructor privado sin parámetros y con cuerpo vacío. Declara además
     ocupante (Aeronave | undefined, oculto, sin valor inicial) y cola (Aeronave[], oculto),
     vacía.
  4. En Pista crea el método static y público obtener(): Pista.
  5. En Pista crea los métodos públicos solicitar(a: Aeronave): string, liberar(): string y
     ocupacionTotal(): number.
  6. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const pista = Pista.obtener();
  console.log(pista === Pista.obtener());  // true
  const a1 = new Avioneta('A-1', 2);
  const a2 = new Comercial('C-1', 180);
  const a3 = new Helicoptero('H-1', 1);
  const a4 = new Avioneta('A-2', 3);
  const a5 = new Avioneta('A-3', 3);
  const a6 = new Avioneta('A-4', 1);
  console.log(pista.solicitar(a1));  // 'aterrizando A-1'
  console.log(pista.solicitar(a1));  // 'repetida'
  console.log(pista.solicitar(a2), pista.solicitar(a3), pista.solicitar(a4));  // 'en espera: posición 1' 'en espera: posición 2' 'en espera: posición 3'
  console.log(pista.solicitar(a5), pista.solicitar(a2));  // 'cola llena' 'repetida'
  console.log(pista.ocupacionTotal());  // 28
  console.log(pista.liberar(), pista.liberar());  // 'aterrizando C-1' 'aterrizando H-1'
  console.log(pista.solicitar(a5));  // 'en espera: posición 2'
  console.log(pista.liberar(), pista.liberar());  // 'aterrizando A-2' 'aterrizando A-3'
  console.log(pista.liberar(), pista.liberar());  // 'pista libre' 'pista libre'
  console.log(pista.ocupacionTotal());  // 0
  console.log(pista.solicitar(a6), a6.describir());  // 'aterrizando A-4' 'A-4 con 1 pasajeros'

ESTO DEBE FALLAR
  // const p = new Pista();  → el constructor es private.
  // console.log(Pista.unica);  → unica es private.
  // const x = new Aeronave('X', 1);  → Aeronave es abstracta.
  // console.log(a1.pasajeros);  → pasajeros es protected.

EXPLICA
  ¿Por qué hace falta que Pista sea un Singleton para que todas las aeronaves compitan
  por el mismo turno? ¿Por qué a5 recibe 'cola llena' al principio y una posición después?
*/
// Tu solución.
// !EJERCICIO 49 — Mochila de aventurero
/*
SITUACIÓN
  Un juego tiene objetos de tres tipos, todos con nombre, tipo, peso y valor. El arma, de
  tipo 'arma', pesa sus kilos y vale su daño * 10; la poción, de tipo 'pocion', pesa su
  dosis y vale dosis * 15; el tesoro, de tipo 'tesoro', pesa sus kilos y vale su oro. Los
  objetos se guardan en una mochila con una capacidad de peso. Guardar un objeto se rechaza
  si su peso es mayor que el peso libre; si no, se añade al final; informa con true si se
  hizo y false si se rechazó. Soltar un objeto por nombre quita el primero con ese nombre y
  lo devuelve, o undefined si no existe.

  La mochila calcula al leer: el peso actual (la suma de los pesos de sus objetos), el peso
  libre (capacidad menos peso actual), el valor total y la capacidad. La capacidad se cambia
  como propiedad (mochila.capacidad = 30); un valor que sea 0 o menos, o menor que el peso
  actual (igual al peso actual sí vale), se ignora sin error. También cuenta cuántos objetos
  hay de cada tipo (un objeto que asocia cada tipo con su cantidad) y, a nivel de la clase,
  cuántas mochilas se han creado.

  Ejemplo: Mochila de capacidad 20 con una espada de 8 kg: pesoLibre es 12; guardar una
    armadura de 15 kg devuelve false. Con esa mochila, conteoPorTipo() devuelve { arma: 1 }
    y Mochila.creadas() devuelve 1.

  Idea: getters derivados, un setter con validación y un Record que agrupa por tipo; static
    cuenta las mochilas.

RESTRICCIONES
  Datos:
  - capacidad: entero >= 1.
  - Los nombres de los objetos pueden repetirse.
  Usa:
  - Una clase abstract con dos métodos abstract (peso y valor) y extends con super(...).
  - Una propiedad static para el contador; get y set.
  - Record<string, number> con ??; un array nuevo al soltar un objeto.
  No uses:
  - interfaces, genéricos, instanceof, try/catch, Map, Set.

QUÉ DEBES HACER
  1. Crea la clase abstracta Objeto con un constructor que declara nombre (string, visible y
     de solo lectura) y tipo (string, visible y de solo lectura), y los métodos abstractos
     peso(): number y valor(): number.
  2. Crea Arma, que extiende Objeto. Su constructor recibe nombre, kilos y danio (number,
     ambos ocultos) y pasa al padre el nombre y el tipo 'arma'.
  3. Crea Pocion, que extiende Objeto. Su constructor recibe nombre y dosis (number, oculto)
     y pasa al padre el nombre y el tipo 'pocion'.
  4. Crea Tesoro, que extiende Objeto. Su constructor recibe nombre, oro y kilos (number,
     ambos ocultos) y pasa al padre el nombre y el tipo 'tesoro'.
  5. Crea la clase Mochila con la propiedad static oculta contador (number), con valor
     inicial 0, un array oculto objetos (Objeto[]), vacío, y la propiedad oculta _capacidad
     (number). Su constructor recibe capacidad (number), la guarda en _capacidad y suma 1 a
     Mochila.contador.
  6. En Mochila crea el método static y público creadas(): number.
  7. En Mochila crea los getters capacidad, pesoActual, pesoLibre y valorTotal (todos
     number) y el setter capacidad(valor: number).
  8. En Mochila crea los métodos públicos guardar(o: Objeto): boolean, soltar(nombre:
     string): Objeto | undefined y conteoPorTipo(): Record<string, number>.
  9. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  const m = new Mochila(20);
  const espada = new Arma('Espada', 8, 5);
  const poc = new Pocion('Curación', 3);
  const gema = new Tesoro('Gema', 500, 1);
  const hacha = new Arma('Hacha', 10, 7);
  console.log(m.guardar(espada), m.guardar(poc), m.guardar(hacha), m.guardar(gema));  // true true false true
  console.log(m.pesoActual, m.pesoLibre, m.valorTotal);  // 12 8 595
  console.log(m.conteoPorTipo());  // { arma: 1, pocion: 1, tesoro: 1 }
  m.capacidad = 30;
  console.log(m.capacidad, m.pesoLibre);  // 30 18
  console.log(m.guardar(hacha), m.pesoLibre);  // true 8
  m.capacidad = 15;
  console.log(m.capacidad);  // 30
  m.capacidad = 22;
  console.log(m.capacidad, m.pesoLibre);  // 22 0
  m.capacidad = 0;
  console.log(m.capacidad);  // 22
  console.log(m.conteoPorTipo());  // { arma: 2, pocion: 1, tesoro: 1 }
  console.log(m.soltar('Espada')?.nombre, m.soltar('Nada'));  // 'Espada' undefined
  console.log(m.pesoActual, m.conteoPorTipo());  // 14 { pocion: 1, tesoro: 1, arma: 1 }
  const m2 = new Mochila(5);
  console.log(Mochila.creadas(), m2.pesoLibre);  // 2 5

ESTO DEBE FALLAR
  // const o = new Objeto('x', 'y');  → Objeto es abstracta.
  // m.pesoActual = 5;  → pesoActual solo tiene getter.
  // console.log(m.objetos);  → objetos es private.
  // console.log(Mochila.contador);  → contador es private.
  // console.log(espada.kilos);  → kilos es private.

EXPLICA
  ¿Por qué después de soltar la espada el orden de las claves es pocion, tesoro, arma?
  ¿Por qué m.capacidad = 22 sí se acepta cuando el peso actual es exactamente 22?
*/
// Tu solución.
// !EJERCICIO 50 — Inversores en un mercado único
/*
SITUACIÓN
  Un mercado único y compartido (nadie crea otro) publica precios de acciones, cada una
  identificada por un símbolo. Actualizar precios recibe varias parejas [símbolo, precio]:
  cada pareja con símbolo no vacío y precio entero mayor que 0 reemplaza el precio de ese
  símbolo; una pareja inválida se salta sin detener las demás; se informa cuántas se
  aceptaron. Se puede consultar el precio de un símbolo (undefined si no existe) y los
  símbolos publicados, en el orden en que se registraron por primera vez.

  Los inversores tienen nombre, efectivo y una cartera de acciones por símbolo. Operar con
  un símbolo se resuelve así: si el mercado no tiene precio para él, responde 'sin
  cotización'; si no, el inversor decide Comprar, Vender o Esperar. Comprar: si su efectivo
  es igual o mayor que el precio, lo gasta, suma 1 acción y responde 'compró {símbolo}'; si
  no, responde 'sin fondos'. Vender: si tiene al menos 1 acción de ese símbolo, cobra el
  precio, resta 1 acción y responde 'vendió {símbolo}'; si no, responde 'sin acciones'.
  Esperar: responde 'esperó'. Se consultan cuántas acciones tiene de un símbolo (0 si
  ninguna), su caja (el efectivo) y su patrimonio: efectivo más, por cada símbolo de su
  cartera, cantidad * precio actual del símbolo (o 0 si ya no tiene precio).

  Hay dos estilos. El cauteloso decide Comprar si el precio es 50 o menos, Vender si es 80 o
  más y Esperar en otro caso. El arriesgado recuerda el último precio visto de cada símbolo
  y decide Esperar si no lo había visto o no cambió, Comprar si subió y Vender si bajó;
  después de decidir, recuerda el precio nuevo.

  Ejemplo: Un Cauteloso con 100 de efectivo y la acción a 45: decidir devuelve Comprar,
    operar devuelve 'compró {símbolo}' y caja baja a 55. Su patrimonio sigue en 100: 55 de
    efectivo más 1 acción valorada en 45.

  Idea: dos estilos de inversor con reglas distintas, un mercado único (Singleton) y un enum
    con las decisiones; operar() no cambia.

RESTRICCIONES
  Datos:
  - precio: entero > 0.
  - efectivo: cualquier número; símbolo: texto.
  Usa:
  - enum Accion declarado dentro de tu función, antes de las clases.
  - Singleton: constructor private y propiedad static.
  - Una clase abstract con un método abstract protected (decidir) y extends con super(...).
  - Record<string, number>, ??, Object.hasOwn y for...in; un parámetro rest de tuplas
    [string, number].
  No uses:
  - interfaces, genéricos, instanceof, try/catch, Map, Set.

QUÉ DEBES HACER
  1. Dentro de tu función, antes de las clases, declara: enum Accion { Comprar, Vender,
     Esperar }
  2. Crea la clase Mercado con la propiedad static oculta unico (Mercado | undefined), sin
     valor inicial, un constructor privado sin parámetros y con cuerpo vacío, y un objeto
     oculto precios (Record<string, number>), vacío.
  3. En Mercado crea el método static y público obtener(): Mercado, los métodos públicos
     actualizar(...cambios: [string, number][]): number y precio(simbolo: string): number |
     undefined, y el getter simbolos (string[]).
  4. Crea la clase abstracta Inversor con un constructor que declara nombre (string, visible
     y de solo lectura) y efectivo (number, oculto), un objeto oculto acciones
     (Record<string, number>), vacío, y el método abstracto protegido decidir(simbolo:
     string, precio: number): Accion.
  5. En Inversor crea los métodos públicos operar(simbolo: string): string y
     accionesDe(simbolo: string): number, y los getters caja (number) y patrimonio (number).
  6. Crea Cauteloso, que extiende Inversor. Su constructor recibe nombre y efectivo.
  7. Crea Arriesgado, que extiende Inversor. Su constructor recibe nombre y efectivo.
     Declara un objeto oculto vistos (Record<string, number>), vacío.
  8. Ejecuta COMPRUEBA en este orden (las acciones y el mercado se comparten entre líneas).

COMPRUEBA
  const m = Mercado.obtener();
  console.log(m === Mercado.obtener());  // true
  console.log(m.actualizar(['ABC', 40], ['XYZ', 90], ['BAD', 0], ['', 10], ['QWE', 12.5]));  // 2
  console.log(m.precio('ABC'), m.precio('NOP'), m.simbolos);  // 40 undefined [ 'ABC', 'XYZ' ]
  const c = new Cauteloso('Carla', 100);
  console.log(c.operar('ABC'), c.operar('ABC'), c.operar('ABC'));  // 'compró ABC' 'compró ABC' 'sin fondos'
  console.log(c.operar('XYZ'), c.operar('NOP'));  // 'sin acciones' 'sin cotización'
  console.log(c.accionesDe('ABC'), c.caja, c.patrimonio);  // 2 20 100
  console.log(m.actualizar(['ABC', 85]));  // 1
  console.log(c.patrimonio);  // 190
  console.log(c.operar('ABC'), c.caja, c.accionesDe('ABC'));  // 'vendió ABC' 105 1
  const r = new Arriesgado('Raúl', 200);
  console.log(r.operar('ABC'));  // 'esperó'
  m.actualizar(['ABC', 90]);
  console.log(r.operar('ABC'), r.caja);  // 'compró ABC' 110
  m.actualizar(['ABC', 70]);
  console.log(r.operar('ABC'), r.caja);  // 'vendió ABC' 180
  console.log(r.operar('ABC'), r.operar('ABC'));  // 'esperó' 'esperó'
  const c2 = new Cauteloso('Ceci', 10);
  console.log(c2.operar('ABC'), c2.caja, c2.operar('QWE'));  // 'esperó' 10 'sin cotización'

ESTO DEBE FALLAR
  // const x = new Mercado();  → el constructor es private.
  // const y = new Inversor('y', 1);  → Inversor es abstracta.
  // c.decidir('ABC', 1);  → decidir es protected.
  // console.log(c.efectivo);  → efectivo es private.
  // c.patrimonio = 3;  → patrimonio solo tiene getter.
  // console.log(r.vistos);  → vistos es private.

EXPLICA
  ¿Por qué Carla y Raúl, con las mismas cotizaciones, toman decisiones distintas sin que
  operar() cambie? ¿Qué ventaja da que el mercado sea un único objeto compartido?
*/
// Tu solución.
// ═══════════════════════════════════════════════════════════════════════════
// PRUEBAS AUTOMÁTICAS — NO EDITAR DE AQUÍ HACIA ABAJO
// Ejecuta:  node --experimental-transform-types Compendio01.ts
// Los nombres de clases, propiedades y métodos del contrato (QUÉ DEBES HACER)
// deben escribirse exactamente igual, porque las pruebas los usan.
// ═══════════════════════════════════════════════════════════════════════════
function igual(obtenido, esperado) {
    const a = JSON.stringify(obtenido);
    const b = JSON.stringify(esperado);
    if (a !== b)
        throw new Error(`obtuviste ${a} pero se esperaba ${b}`);
}
function lanza(fn, texto) {
    try {
        fn();
    }
    catch (e) {
        if (texto !== undefined && !e.message.includes(texto)) {
            throw new Error(`el error dijo "${e.message}" y se esperaba que incluyera "${texto}"`);
        }
        return;
    }
    throw new Error('se esperaba que lanzara un error y no lo hizo');
}
function probar(numero, titulo, fn) {
    const id = String(numero).padStart(2, '0');
    try {
        fn();
        console.log(`✔ ${id} ${titulo}`);
    }
    catch (e) {
        if (e instanceof ReferenceError && /is not defined/.test(e.message)) {
            console.log(`… ${id} ${titulo} (pendiente)`);
        }
        else {
            console.log(`✘ ${id} ${titulo}: ${e.message}`);
        }
    }
}
probar(1, 'Termometro y contarEstado', () => {
    const t1 = new Termometro(0);
    igual([t1.celsius, t1.fahrenheit, t1.estado], [0, 32, 'helado']);
    igual([new Termometro(25).fahrenheit, new Termometro(25).estado], [77, 'templado']);
    igual(new Termometro(30).estado, 'caluroso');
    igual(new Termometro(29).estado, 'templado');
    igual(new Termometro(1).estado, 'templado');
    igual(new Termometro(-1).estado, 'helado');
    igual(new Termometro(-40).fahrenheit, -40);
    const lista = [t1, new Termometro(25), new Termometro(30), new Termometro(-40),
        new Termometro(1), new Termometro(29)];
    igual(contarEstado(lista, 'templado'), 3);
    igual(contarEstado(lista, 'helado'), 2);
    igual(contarEstado(lista, 'caluroso'), 1);
    igual(contarEstado([], 'helado'), 0);
    igual(contarEstado(lista, 'otro'), 0);
});
probar(2, 'Etiquetas con código fijo', () => {
    const e1 = new Etiqueta('ROP', 7, 'Camisa');
    const e2 = new Etiqueta('ROP', 42, 'Pantalón');
    const e3 = new Etiqueta('ZAP', 105, 'Bota');
    const e4 = new Etiqueta('ROP', 7, 'Camisa azul');
    igual([e1.codigo, e2.codigo, e3.codigo], ['ROP-007', 'ROP-042', 'ZAP-105']);
    igual([new Etiqueta('A', 9, '').codigo, new Etiqueta('A', 10, '').codigo], ['A-009', 'A-010']);
    igual([new Etiqueta('A', 99, '').codigo, new Etiqueta('A', 100, '').codigo], ['A-099', 'A-100']);
    igual([new Etiqueta('A', 1, '').codigo, new Etiqueta('', 999, '').codigo], ['A-001', '-999']);
    const lista = [e1, e2, e3, e4];
    Object.freeze(lista);
    lista.forEach((e) => Object.freeze(e));
    igual(buscarEtiqueta(lista, 'ROP-007')?.descripcion, 'Camisa');
    igual(buscarEtiqueta(lista, 'ZAP-105') === e3, true);
    igual(buscarEtiqueta(lista, 'XXX-001') === undefined, true);
    igual(buscarEtiqueta([], 'ROP-007') === undefined, true);
    igual(repetidos(lista), 1);
    igual(repetidos([e1, e1, e1]), 2);
    igual(repetidos([]), 0);
    igual(repetidos([e1, e2, e3]), 0);
    const e5 = new Etiqueta('ROP', 42, 'x');
    igual(repetidos([e1, e2, e4, e5, e3]), 2);
    const e6 = new Etiqueta('ROP', 7, 'Camisa');
    e6.descripcion = 'Camisa roja';
    igual([e6.descripcion, e6.codigo], ['Camisa roja', 'ROP-007']);
});
probar(3, 'Contactos con teléfono opcional', () => {
    const a = new Contacto('Ana', '555-1010');
    const b = new Contacto('Beto');
    const c = new Contacto('Carla', '');
    const u = new Contacto('Uma', undefined);
    igual(describir(a), 'Ana: 555-1010');
    igual(describir(b), 'Beto: sin teléfono');
    igual(describir(c), 'Carla: sin teléfono');
    igual(describir(u), 'Uma: sin teléfono');
    igual([b.telefono === undefined, c.telefono === undefined], [true, true]);
    igual(a.telefono, '555-1010');
    const d = new Contacto('Dani', '555-2020');
    const lista = [a, b, c, d];
    Object.freeze(lista);
    igual(conTelefono(lista), ['Ana', 'Dani']);
    igual(conTelefono([]), []);
    igual(conTelefono([b, c]), []);
    igual(primerSinTelefono(lista) === b, true);
    igual(primerSinTelefono([a, c])?.nombre, 'Carla');
    igual(primerSinTelefono([a]) === undefined, true);
    igual(primerSinTelefono([]) === undefined, true);
});
probar(4, 'Candado con pin oculto', () => {
    const c1 = new Candado('Gym 1', '12');
    const c2 = new Candado('Gym 2', '1111');
    const c3 = new Candado('Gym 3', '1234');
    const c4 = new Candado('Gym 4', '12345');
    const c5 = new Candado('Gym 5', '123456');
    const c6 = new Candado('Gym 6', '111111');
    const c7 = new Candado('Gym 7', '1213');
    igual([c1.nivel, c2.nivel, c3.nivel], ['débil', 'débil', 'media']);
    igual([c4.nivel, c5.nivel, c6.nivel], ['media', 'fuerte', 'débil']);
    igual([c7.nivel, c7.etiqueta], ['media', 'Gym 7']);
    igual(new Candado('x', '1').nivel, 'débil');
    igual(new Candado('x', '111').nivel, 'débil');
    igual(new Candado('x', 'aaaa').nivel, 'débil');
    igual(new Candado('x', 'aaaaaaaa').nivel, 'débil');
    igual(new Candado('x', '121212').nivel, 'fuerte');
    igual(new Candado('x', 'abcdefghij').nivel, 'fuerte');
    igual(new Candado('x', '1112').nivel, 'media');
    const lista = [c1, c2, c3, c4, c5, c6, c7];
    Object.freeze(lista);
    igual([contarNivel(lista, 'débil'), contarNivel(lista, 'media'), contarNivel(lista, 'fuerte')], [3, 3, 1]);
    igual(contarNivel(lista, 'otro'), 0);
    igual(contarNivel([], 'media'), 0);
});
probar(5, 'Tarifa de estacionamiento', () => {
    const v1 = new Vehiculo('M-1', 'moto', 3);
    const v2 = new Vehiculo('A-2', 'auto', 8);
    const v3 = new Vehiculo('A-3', 'auto', 9);
    const v4 = new Vehiculo('C-4', 'camion', 10);
    const v5 = new Vehiculo('C-5', 'camion', 2);
    igual([v1.total, v2.total], [30, 160]);
    igual([v3.total, v4.total, v5.total], [144, 280, 70]);
    igual([v1.tarifa, v2.tarifa, v5.tarifa], [10, 20, 35]);
    igual([v1.placa, v1.tipo, v1.horas], ['M-1', 'moto', 3]);
    igual(new Vehiculo('M-9', 'moto', 9).total, 72);
    igual(new Vehiculo('C-9', 'camion', 9).total, 252);
    igual(new Vehiculo('M-8', 'moto', 8).total, 80);
    igual(new Vehiculo('M-1', 'moto', 1).total, 10);
    const lista = [v1, v2, v3, v4, v5];
    Object.freeze(lista);
    igual(recaudacion(lista), 684);
    igual(recaudacion([]), 0);
    igual(masCaro(lista)?.placa, 'C-4');
    const v6 = new Vehiculo('C-6', 'camion', 4);
    const v7 = new Vehiculo('A-7', 'auto', 7);
    igual(masCaro([v7, v6])?.placa, 'A-7');
    igual(masCaro([v6, v7])?.placa, 'C-6');
    igual(masCaro([v1])?.placa, 'M-1');
    igual(masCaro([]) === undefined, true);
});
probar(6, 'Cadena de eslabones', () => {
    const a = new Eslabon('A');
    const b = new Eslabon('B', a);
    const c = new Eslabon('C', b);
    const d = new Eslabon('D', b);
    igual([longitud(a), longitud(c), longitud(d)], [1, 3, 3]);
    igual(longitud(b), 2);
    igual(recorrido(c), ['C', 'B', 'A']);
    igual(recorrido(d), ['D', 'B', 'A']);
    igual(recorrido(a), ['A']);
    igual(raiz(d).nombre, 'A');
    igual(raiz(d) === a, true);
    igual(raiz(a) === a, true);
    igual(raiz(c) === a, true);
    igual([c.previo === b, a.previo === undefined], [true, true]);
    igual(d.previo === c.previo, true);
    igual(c === d, false);
    const x = new Eslabon('X', undefined);
    igual([longitud(x), x.previo === undefined], [1, true]);
    const largo = new Eslabon('F', new Eslabon('E', new Eslabon('D2', c)));
    igual(longitud(largo), 6);
    igual(recorrido(largo), ['F', 'E', 'D2', 'C', 'B', 'A']);
});
probar(7, 'Precio de una entrada de cine', () => {
    const e1 = new Entrada('Dune', 12, 1);
    const e2 = new Entrada('Dune', 13, 1);
    const e3 = new Entrada('Dune', 64, 2);
    const e4 = new Entrada('Dune', 65, 2);
    const e5 = new Entrada('Gala', 30, 3);
    const e6 = new Entrada('Gala', 8, 3);
    igual([e1.precio, e2.precio, e3.precio], [40, 80, 80]);
    igual([e4.precio, e5.precio, e6.precio], [50, 110, 70]);
    igual([e5.pelicula, e5.edad, e5.sala], ['Gala', 30, 3]);
    igual(new Entrada('X', 0, 1).precio, 40);
    igual(new Entrada('X', 65, 3).precio, 80);
    igual(new Entrada('X', 12, 3).precio, 70);
    igual(new Entrada('X', 100, 4).precio, 50);
    const lista = [e1, e2, e3, e4, e5, e6];
    Object.freeze(lista);
    igual(recaudacionEntradas(lista), 430);
    igual(recaudacionEntradas([]), 0);
    igual([entradasDeSala(lista, 3), entradasDeSala(lista, 9)], [2, 0]);
    igual([entradasDeSala(lista, 1), entradasDeSala(lista, 2)], [2, 2]);
    igual(entradasDeSala([], 3), 0);
    e1.edad = 70;
    igual(e1.precio, 40);
});
probar(8, 'Totales por cliente', () => {
    const p1 = new Pedido('Ana', 100);
    const p2 = new Pedido('Luis', 50, 10);
    const p3 = new Pedido('Ana', 80, 20, 'sin cebolla');
    const p4 = new Pedido('Luis', 40);
    const p5 = new Pedido('Rosa', 150);
    igual([p1.propina, p1.nota === undefined], [0, true]);
    igual([p3.propina, p3.nota], [20, 'sin cebolla']);
    igual([p3.cliente, p3.monto], ['Ana', 80]);
    igual(new Pedido('Mia', 30, undefined, 'x').propina, 0);
    igual(new Pedido('Mia', 30, undefined, 'x').nota, 'x');
    const lista = [p1, p2, p3, p4, p5];
    Object.freeze(lista);
    const totales = totalesPorCliente(lista);
    igual(totales, { Ana: 200, Luis: 100, Rosa: 150 });
    igual(mejorCliente(totales), 'Ana');
    igual(totalesPorCliente([new Pedido('Ana', 100, 20), new Pedido('Ana', 50)]), { Ana: 170 });
    igual(mejorCliente(totalesPorCliente([new Pedido('Zoe', 100), new Pedido('Abe', 100)])), 'Zoe');
    igual(mejorCliente(totalesPorCliente([new Pedido('Abe', 100), new Pedido('Zoe', 100)])), 'Abe');
    igual(mejorCliente(totalesPorCliente([new Pedido('Abe', 100), new Pedido('Zoe', 101)])), 'Zoe');
    igual(totalesPorCliente([]), {});
    igual(mejorCliente({}) === undefined, true);
    igual(mejorCliente(Object.freeze({ A: 0 })), 'A');
    igual(mejorCliente(Object.freeze({ A: 5, B: 9 })), 'B');
});
probar(9, 'Estación meteorológica', () => {
    const es1 = new Estacion('Norte', [10, 20, 30]);
    const es2 = new Estacion('Sur', [5]);
    const es3 = new Estacion('Vacía', []);
    const es4 = new Estacion('Mixta', [-3, 4, -8, 6]);
    const es5 = new Estacion('Fría', [-5, -2, -9, -4]);
    igual([es1.cantidad, es1.maximo, es1.minimo, es1.promedio], [3, 30, 10, 20]);
    igual([es2.cantidad, es2.maximo, es2.minimo, es2.promedio], [1, 5, 5, 5]);
    igual([es3.cantidad, es3.maximo, es3.minimo, es3.promedio], [0, 0, 0, 0]);
    igual([es4.cantidad, es4.maximo, es4.minimo, es4.promedio], [4, 6, -8, -0.25]);
    igual([es5.cantidad, es5.maximo, es5.minimo, es5.promedio], [4, -2, -9, -5]);
    igual(es1.nombre, 'Norte');
    igual('muestras' in es1, false);
    const datos = [3, 4];
    const es6 = new Estacion('Imp', datos);
    igual([es6.promedio, es6.minimo, es6.maximo], [3.5, 3, 4]);
    igual(datos, [3, 4]);
    igual(new Estacion('Desc', [30, 10, 20]).minimo, 10);
    igual(new Estacion('Desc', [30, 10, 20]).maximo, 30);
    const lista = [es1, es2, es3, es4, es5];
    Object.freeze(lista);
    igual(conAlerta(lista, 6), ['Norte', 'Mixta']);
    igual(conAlerta(lista, 5), ['Norte', 'Sur', 'Mixta']);
    igual(conAlerta([es5], 0), []);
    igual(conAlerta([es3, es5], 0), ['Vacía']);
    igual(conAlerta([], 0), []);
});
probar(10, 'Rutas con coordenadas', () => {
    const r1 = new Ruta('Casa-Trabajo', [0, 0], [3, 4]);
    const r2 = new Ruta('Gym', [5, 5], [2, 9]);
    const r3 = new Ruta('Paseo', [1, 1], [1, 1]);
    const r4 = new Ruta('Larga', [-2, -3], [4, 3]);
    igual([r1.distancia, r2.distancia, r3.distancia, r4.distancia], [7, 7, 0, 12]);
    igual([r3.redonda, r1.redonda], [true, false]);
    igual(new Ruta('x', [1, 1], [1, 2]).redonda, false);
    igual(new Ruta('x', [1, 1], [2, 1]).redonda, false);
    igual(new Ruta('x', [4, 6], [1, 2]).distancia, 7);
    igual(new Ruta('x', [-5, -5], [-2, -9]).distancia, 7);
    igual([r2.nombre, r2.origen, r2.destino], ['Gym', [5, 5], [2, 9]]);
    const lista = [r1, r2, r3, r4];
    Object.freeze(lista);
    igual(masLarga(lista)?.nombre, 'Larga');
    igual(masLarga([r1, r2])?.nombre, 'Casa-Trabajo');
    igual(masLarga([r2, r1])?.nombre, 'Gym');
    igual(masLarga([]) === undefined, true);
    igual(rutasCortas(lista, 7), ['Casa-Trabajo', 'Gym', 'Paseo']);
    igual(rutasCortas(lista, 6), ['Paseo']);
    igual(rutasCortas(lista, 12), ['Casa-Trabajo', 'Gym', 'Paseo', 'Larga']);
    igual(rutasCortas([], 6), []);
    r1.origen[0] = 9;
    igual(r1.origen, [9, 0]);
});
probar(11, 'Costo de paquetes por prioridad', () => {
    const p1 = new Paquete('Lima', 5);
    const p2 = new Paquete('Lima', 5, Prioridad.Media);
    const p3 = new Paquete('Quito', 5, Prioridad.Alta);
    const p4 = new Paquete('Cusco', 20, Prioridad.Alta);
    const p5 = new Paquete('Cusco', 21);
    const p6 = new Paquete('Cusco', 21, Prioridad.Alta);
    igual([p1.costo, p2.costo, p3.costo], [50, 80, 130]);
    igual([p4.costo, p5.costo, p6.costo], [280, 260, 340]);
    igual([Prioridad.Alta, p1.prioridad], [2, 0]);
    igual([Prioridad.Baja, Prioridad.Media], [0, 1]);
    igual([p1.destino, p1.peso], ['Lima', 5]);
    igual(new Paquete('x', 1).costo, 10);
    igual(new Paquete('x', 20, Prioridad.Media).costo, 230);
    igual(new Paquete('x', 21, Prioridad.Media).costo, 290);
    igual(new Paquete('x', 3, Prioridad.Baja).prioridad, Prioridad.Baja);
    const lista = [p1, p2, p3, p4, p5, p6];
    Object.freeze(lista);
    igual(resumen(lista), [2, 1, 3]);
    igual(resumen([]), [0, 0, 0]);
    igual(resumen([p2, p2]), [0, 2, 0]);
    igual(costoTotal(lista), 1140);
    igual(costoTotal(lista, Prioridad.Alta), 750);
    igual(costoTotal(lista, Prioridad.Baja), 310);
    igual(costoTotal(lista, Prioridad.Media), 80);
    igual(costoTotal([], Prioridad.Media), 0);
    igual(costoTotal([p1], Prioridad.Alta), 0);
});
probar(12, 'Podómetro diario', () => {
    const p = new Podometro();
    igual([p.total(), p.metaCumplida(0), p.metaCumplida(1)], [0, true, false]);
    igual([p.registrar(1500), p.total()], [true, 1500]);
    igual([p.registrar(0), p.registrar(2001), p.registrar(1.5)], [false, false, false]);
    igual([p.registrar(NaN), p.registrar(Infinity), p.registrar(-1)], [false, false, false]);
    igual(p.total(), 1500);
    igual([p.registrar(2000), p.total()], [true, 3500]);
    for (let i = 0; i < 8; i++) {
        p.registrar(2000);
    }
    igual(p.total(), 19500);
    igual([p.registrar(501), p.total()], [false, 19500]);
    igual([p.registrar(500), p.total()], [true, 20000]);
    igual([p.registrar(1), p.total()], [false, 20000]);
    igual([p.metaCumplida(10000), p.metaCumplida(20000), p.metaCumplida(20001)], [true, true, false]);
    const q = new Podometro();
    igual([q.registrar(1), q.registrar(-5), q.total()], [true, false, 1]);
    igual(q.registrar(2000), true);
    igual(q.total(), 2001);
    igual(p.total(), 20000);
});
probar(13, 'Ascensor con límites', () => {
    const a = new Ascensor(10);
    igual([a.pisoActual(), a.pisosRecorridos()], [0, 0]);
    igual(a.irA(0), false);
    igual([a.irA(4), a.pisoActual()], [true, 4]);
    igual([a.irA(4), a.irA(11), a.irA(-1)], [false, false, false]);
    igual([a.pisoActual(), a.pisosRecorridos()], [4, 4]);
    igual([a.irA(0), a.pisosRecorridos()], [true, 8]);
    igual([a.irA(10), a.pisosRecorridos()], [true, 18]);
    igual(a.llamar([]), 0);
    igual(a.llamar([3, 3, 12, 7, 7, 1]), 3);
    igual([a.pisoActual(), a.pisosRecorridos()], [1, 35]);
    const b = new Ascensor(2);
    igual([b.irA(2), b.irA(3), b.pisoActual()], [true, false, 2]);
    igual(a.pisoActual(), 1);
    const c = new Ascensor(10);
    igual([c.irA(1), c.irA(10), c.irA(1)], [true, true, true]);
    igual(c.pisosRecorridos(), 19);
    igual(c.irA(11), false);
    igual([c.pisoActual(), c.pisosRecorridos()], [1, 19]);
});
probar(14, 'Cajero con billetes limitados', () => {
    const c = new Cajero([2, 1, 5]);
    igual(c.disponible(), 350);
    igual(c.retirar(270), '2x100 1x50 1x20');
    igual(c.disponible(), 80);
    igual(c.retirar(60), '0x100 0x50 3x20');
    igual(c.disponible(), 20);
    igual(c.retirar(40), 'imposible');
    igual(c.disponible(), 20);
    igual(c.retirar(20), '0x100 0x50 1x20');
    igual(c.retirar(20), 'imposible');
    igual(c.disponible(), 0);
    igual(new Cajero([5, 5, 5]).retirar(30), 'imposible');
    igual(new Cajero([0, 3, 0]).retirar(100), '0x100 2x50 0x20');
    igual(new Cajero([1, 1, 1]).retirar(50), '0x100 1x50 0x20');
    igual(new Cajero([1, 2, 3]).retirar(170), '1x100 1x50 1x20');
    const d = new Cajero([1, 2, 3]);
    igual(d.retirar(170), '1x100 1x50 1x20');
    igual(d.disponible(), 90);
    igual(d.retirar(30), 'imposible');
    igual(d.disponible(), 90);
    igual(new Cajero([0, 1, 5]).retirar(60), 'imposible');
    igual(new Cajero([1, 0, 0]).retirar(200), 'imposible');
    igual(new Cajero([3, 0, 0]).retirar(200), '2x100 0x50 0x20');
});
probar(15, 'Playlist', () => {
    const p = new Playlist();
    igual([p.agregar('Alba'), p.agregar('Brisa'), p.agregar('Alba')], [true, true, false]);
    igual([p.agregar(''), p.agregar('alba')], [false, true]);
    igual(p.titulos(), ['Alba', 'Brisa', 'alba']);
    const copia = p.titulos();
    copia.push('Intruso');
    igual(p.cantidad(), 3);
    igual(p.titulos(), ['Alba', 'Brisa', 'alba']);
    igual(p.titulos() === p.titulos(), false);
    igual([p.eliminar('Brisa'), p.eliminar('Brisa')], [true, false]);
    igual(p.eliminar('ALBA'), false);
    igual(p.titulos(), ['Alba', 'alba']);
    igual(p.masLargo(), 'Alba');
    p.agregar('Amanecer');
    igual(p.masLargo(), 'Amanecer');
    igual(new Playlist().masLargo() === undefined, true);
    igual(new Playlist().cantidad(), 0);
    const s = new Playlist();
    s.agregar('Sol');
    s.agregar('Luna');
    igual([s.agregar('Sol'), s.cantidad(), s.masLargo(), s.eliminar('Sol'), s.titulos()], [false, 2, 'Luna', true, ['Luna']]);
});
probar(16, 'Despensa', () => {
    const d = new Despensa();
    igual([d.guardar('arroz', 5), d.guardar('arroz', 3)], [true, true]);
    igual([d.guardar('frijol', 0), d.guardar('', 2), d.guardar('sal', 1.5)], [false, false, false]);
    igual([d.guardar('frijol', -2)], [false]);
    igual([d.unidades('arroz'), d.unidades('frijol')], [8, 0]);
    igual([d.sacar('arroz', 8), d.unidades('arroz')], [true, 0]);
    igual([d.sacar('arroz', 1), d.sacar('sal', 1)], [false, false]);
    d.guardar('sal', 2);
    d.guardar('azúcar', 4);
    igual(d.agotados(), ['arroz']);
    igual(d.sacar('sal', 2), true);
    igual(d.agotados(), ['arroz', 'sal']);
    igual([d.sacar('azúcar', 5), d.sacar('azúcar', 0), d.unidades('azúcar')], [false, false, 4]);
    igual([d.sacar('azúcar', 1.5), d.sacar('azúcar', -1), d.unidades('azúcar')], [false, false, 4]);
    igual(d.total(), 4);
    igual(d.guardar('arroz', 2), true);
    igual([d.agotados(), d.unidades('arroz'), d.total()], [['sal'], 2, 6]);
    igual(new Despensa().agotados(), []);
    igual(new Despensa().total(), 0);
    const e = new Despensa();
    e.guardar('arroz', 5);
    e.sacar('arroz', 5);
    e.guardar('frijol', 3);
    igual([e.agotados(), e.total(), e.unidades('sal')], [['arroz'], 3, 0]);
});
probar(17, 'Cronometro', () => {
    const c = new Cronometro();
    igual(c.formato(), '0:00:00');
    igual([c.sumar(75), c.formato()], [true, '0:01:15']);
    igual([c.sumar(3909), c.formato()], [true, '1:06:24']);
    igual([c.restar(4000), c.formato()], [false, '1:06:24']);
    igual([c.sumar(-1), c.sumar(2.5), c.restar(-1), c.restar(0.5)], [false, false, false, false]);
    igual(c.formato(), '1:06:24');
    igual([c.restar(3984), c.formato()], [true, '0:00:00']);
    igual([c.sumar(59), c.formato()], [true, '0:00:59']);
    igual([c.sumar(1), c.formato()], [true, '0:01:00']);
    igual([c.sumar(3540), c.formato()], [true, '1:00:00']);
    igual([c.sumar(0), c.restar(0), c.formato()], [true, true, '1:00:00']);
    const d = new Cronometro();
    d.sumar(3725);
    igual(d.formato(), '1:02:05');
    igual([d.restar(3700), d.formato(), d.restar(100), d.formato()], [true, '0:00:25', false, '0:00:25']);
    igual([d.restar(25), d.formato()], [true, '0:00:00']);
    const e = new Cronometro();
    e.sumar(360000 + 600 + 9);
    igual(e.formato(), '100:10:09');
});
probar(18, 'Jugador y pelear', () => {
    const ana = new Jugador('Ana', 30, 8);
    const beto = new Jugador('Beto', 20, 5);
    igual(ana.nombre, 'Ana');
    igual([ana.atacar(beto), beto.vidaRestante()], [8, 12]);
    igual([beto.recibirDano(50), beto.estaVivo()], [12, false]);
    igual(ana.atacar(beto), 0);
    igual([beto.atacar(ana), ana.vidaRestante()], [0, 30]);
    igual(beto.curar(5), false);
    igual(beto.vidaRestante(), 0);
    igual([ana.recibirDano(10), ana.vidaRestante()], [10, 20]);
    igual([ana.curar(5), ana.vidaRestante()], [true, 25]);
    igual([ana.curar(100), ana.vidaRestante()], [true, 30]);
    igual([ana.curar(0), ana.curar(-3), ana.curar(1.5), ana.vidaRestante()], [false, false, false, 30]);
    igual([ana.recibirDano(0), ana.vidaRestante()], [0, 30]);
    const debil = new Jugador('D', 5, 1);
    igual([ana.atacar(debil), debil.vidaRestante(), debil.estaVivo()], [5, 0, false]);
    igual(pelear(new Jugador('X', 20, 7), new Jugador('Y', 21, 5)), 'X');
    igual(pelear(new Jugador('X', 20, 7), new Jugador('Y', 40, 9)), 'Y');
    igual(pelear(new Jugador('Ana', 30, 10), new Jugador('Beto', 25, 8)), 'Ana');
    igual(pelear(new Jugador('P', 10, 3), new Jugador('Q', 10, 3)), 'P');
});
probar(19, 'Boliche', () => {
    const b = new Boliche();
    igual(b.tirar(3, 7, 10), 3);
    igual(b.tirar(4, 11, 5), 1);
    igual(b.tirar(), 0);
    igual([b.total(), b.mejorTiro(), b.limpios()], [24, 10, 1]);
    igual(b.tirar(2.5, 1), 0);
    igual(b.tirar(0, 10, 10, 10, 10, 10, 10, 10), 8);
    igual(b.tirar(1), 0);
    igual([b.total(), b.mejorTiro(), b.limpios()], [94, 10, 8]);
    const c = new Boliche();
    igual(c.tirar(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1), 12);
    igual(c.total(), 12);
    const d = new Boliche();
    igual([d.tirar(-1), d.tirar(10, 0), d.mejorTiro()], [0, 2, 10]);
    igual(new Boliche().mejorTiro(), 0);
    const e = new Boliche();
    igual([e.tirar(0, 10, NaN, 5), e.total(), e.tirar(5, 10, 3), e.total(), e.limpios()], [2, 10, 3, 28, 2]);
    const f = new Boliche();
    igual([f.tirar(0, 0), f.mejorTiro(), f.limpios(), f.total()], [2, 0, 0, 0]);
});
probar(20, 'Ticket', () => {
    Ticket.reiniciar();
    igual([Ticket.emitidos(false), Ticket.emitidos(true), Ticket.total()], [0, 0, 0]);
    const t1 = new Ticket(false);
    const t2 = new Ticket(true);
    const t3 = new Ticket(false);
    const t4 = new Ticket(false);
    const t5 = new Ticket(true);
    igual([t1.numero, t2.numero, t3.numero], ['N-1', 'P-1', 'N-2']);
    igual([t4.numero, t5.numero], ['N-3', 'P-2']);
    igual([Ticket.emitidos(false), Ticket.emitidos(true), Ticket.total()], [3, 2, 5]);
    Ticket.reiniciar();
    igual(Ticket.total(), 0);
    igual([Ticket.emitidos(false), Ticket.emitidos(true)], [0, 0]);
    igual(new Ticket(true).numero, 'P-1');
    igual(new Ticket(false).numero, 'N-1');
    igual(t4.numero, 'N-3');
    igual([Ticket.emitidos(false), Ticket.emitidos(true), Ticket.total()], [1, 1, 2]);
    Ticket.reiniciar();
});
probar(21, 'Calendario', () => {
    igual([Calendario.esBisiesto(2024), Calendario.esBisiesto(1900)], [true, false]);
    igual([Calendario.esBisiesto(2000), Calendario.esBisiesto(2023)], [true, false]);
    igual([Calendario.esBisiesto(2100), Calendario.esBisiesto(1600), Calendario.esBisiesto(1)], [false, true, false]);
    igual([Calendario.diasDelMes(2, 2024), Calendario.diasDelMes(2, 2023), Calendario.diasDelMes(2, 1900)], [29, 28, 28]);
    igual([Calendario.diasDelMes(4, 2023), Calendario.diasDelMes(12, 2023)], [30, 31]);
    const dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => Calendario.diasDelMes(m, 2023));
    igual(dias, [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    igual([Calendario.fechaValida(29, 2, 2024), Calendario.fechaValida(29, 2, 2023)], [true, false]);
    igual([Calendario.fechaValida(31, 4, 2024), Calendario.fechaValida(30, 4, 2024)], [false, true]);
    igual([Calendario.fechaValida(0, 1, 2024), Calendario.fechaValida(15, 13, 2024), Calendario.fechaValida(15, 0, 2024)], [false, false, false]);
    igual([Calendario.fechaValida(31, 12, 2023), Calendario.fechaValida(32, 1, 2023), Calendario.fechaValida(-1, 5, 2023), Calendario.fechaValida(1, 1, 2023)], [true, false, false, true]);
    igual([Calendario.diaDelAnio(1, 1, 2023), Calendario.diaDelAnio(1, 3, 2023), Calendario.diaDelAnio(1, 3, 2024)], [1, 60, 61]);
    igual([Calendario.diaDelAnio(31, 12, 2023), Calendario.diaDelAnio(31, 12, 2024), Calendario.diaDelAnio(15, 12, 2023)], [365, 366, 349]);
    igual(Calendario.MESES_DE_30, [4, 6, 9, 11]);
});
probar(22, 'Boleto', () => {
    igual(Boleto.vendidos(), 0);
    igual(Boleto.siguienteLibre(3), 1);
    igual(Boleto.emitir(5)?.numero, 5);
    igual(Boleto.emitir(5) === undefined, true);
    igual([Boleto.emitir(0) === undefined, Boleto.emitir(2.5) === undefined, Boleto.emitir(-3) === undefined], [true, true, true]);
    igual(Boleto.vendidos(), 1);
    igual(Boleto.emitir(1)?.numero, 1);
    igual(Boleto.emitir(2)?.numero, 2);
    igual(Boleto.siguienteLibre(10), 3);
    igual(Boleto.emitir(2) === undefined, true);
    Boleto.emitir(3);
    Boleto.emitir(4);
    igual(Boleto.siguienteLibre(5) === undefined, true);
    igual(Boleto.siguienteLibre(6), 6);
    igual(Boleto.siguienteLibre(0) === undefined, true);
    igual(Boleto.vendidos(), 5);
});
probar(23, 'Factura', () => {
    igual(Factura.tasa, 10);
    const f1 = new Factura(200);
    const f2 = new Factura(100);
    igual([f1.total(), f2.total()], [220, 110]);
    igual([Factura.cambiarTasa(15), Factura.tasa], [true, 15]);
    igual([f1.total(), f2.total()], [230, 115]);
    igual([Factura.cambiarTasa(51), Factura.cambiarTasa(-1), Factura.cambiarTasa(10.5)], [false, false, false]);
    igual(Factura.tasa, 15);
    igual([Factura.cambiarTasa(50), Factura.impuesto(300)], [true, 150]);
    igual([f1.total(), Factura.tasa], [300, 50]);
    igual([Factura.cambiarTasa(0), f1.total(), Factura.impuesto(500)], [true, 200, 0]);
    igual([Factura.cambiarTasa(80), Factura.tasa], [false, 0]);
    igual(new Factura(300).total(), 300);
    Factura.cambiarTasa(20);
    igual([new Factura(200).total(), f2.total()], [240, 120]);
    Factura.cambiarTasa(10);
});
probar(24, 'Sala', () => {
    igual([Sala.masLlena() === undefined, Sala.numeroDeSalas(), Sala.capacidadTotal(), Sala.libresTotal()], [true, 0, 0, 0]);
    const s1 = new Sala('A', 100);
    const s2 = new Sala('B', 50);
    const s3 = new Sala('C', 200);
    igual([s1.nombre, s1.capacidad, s1.libres()], ['A', 100, 100]);
    igual([Sala.numeroDeSalas(), Sala.capacidadTotal(), Sala.libresTotal()], [3, 350, 350]);
    igual(Sala.masLlena()?.nombre, 'A');
    igual([s1.vender(30), s2.vender(20), s3.vender(60)], [true, true, true]);
    igual(Sala.masLlena()?.nombre, 'B');
    igual(Sala.libresTotal(), 240);
    igual([s2.vender(31), s2.vender(30), s2.libres()], [false, true, 0]);
    igual([s1.vender(0), s1.vender(70), s1.libres()], [false, true, 0]);
    igual([s1.vender(-5), s1.vender(1.5), s3.vender(141), s3.libres()], [false, false, false, 140]);
    igual(Sala.masLlena()?.nombre, 'A');
    igual([Sala.buscar('C')?.capacidad, Sala.buscar('Z') === undefined], [200, true]);
    igual(Sala.libresTotal(), 140);
    new Sala('A', 10);
    igual([Sala.buscar('A')?.capacidad, Sala.numeroDeSalas(), Sala.capacidadTotal()], [100, 4, 360]);
});
probar(25, 'Viajes', () => {
    const n1 = new ViajeNocturno('Centro', 5);
    const n2 = new ViajeNocturno('Norte', 6);
    const a1 = new ViajeAeropuerto('Aeropuerto', 20, 2);
    const a2 = new ViajeAeropuerto('Aeropuerto', 30, 3);
    const a3 = new ViajeAeropuerto('Aeropuerto', 40, 4);
    igual([n1.precio(), n2.precio()], [180, 202]);
    igual([a1.precio(), a2.precio(), a3.precio()], [320, 465, 500]);
    igual(new ViajeAeropuerto('Aeropuerto', 35, 2).precio(), 500);
    igual(new ViajeAeropuerto('Aeropuerto', 35, 3).precio(), 500);
    igual(n1.descripcion(), 'Centro (5 km)');
    igual([a1.descripcion(), a1.equipajes], ['Aeropuerto (20 km)', 2]);
    igual(new Viaje('Plaza', 3).descripcion(), 'Plaza (3 km)');
    igual(new ViajeNocturno('Centro', 4).precio(), 156);
    igual(new ViajeAeropuerto('Terminal', 10, 3).precio(), 225);
    igual([new ViajeAeropuerto('T', 1, 0).precio(), new ViajeNocturno('X', 1).precio()], [42, 84]);
    igual(new ViajeAeropuerto('T', 35, 0).precio(), 450);
    igual(new ViajeNocturno('Lejos', 6).descripcion(), 'Lejos (6 km)');
});
probar(26, 'TanqueRiego', () => {
    const t = new TanqueRiego(50, 100, 8);
    igual([t.regar(3), t.nivel()], [3, 26]);
    igual([t.regar(10), t.nivel()], [3, 2]);
    igual([t.regar(1), t.nivel()], [0, 2]);
    igual(t.regar(0), 0);
    igual([t.recargar(98), t.nivel()], [true, 100]);
    igual([t.recargar(1), t.recargar(0), t.recargar(1.5), t.nivel()], [false, false, false, 100]);
    igual([t.regar(12), t.nivel()], [12, 4]);
    igual(t.capacidad, 100);
    const u = new TanqueRiego(50, 100, 20);
    igual([u.regar(10), u.nivel()], [2, 10]);
    const v = new TanqueRiego(50, 60, 5);
    igual([v.recargar(20), v.nivel(), v.recargar(10), v.nivel()], [false, 50, true, 60]);
    const w = new TanqueRiego(8, 10, 8);
    igual([w.regar(1), w.nivel(), w.regar(1)], [1, 0, 0]);
    igual([w.recargar(-3), w.recargar(10), w.nivel(), w.recargar(1)], [false, true, 10, false]);
});
probar(27, 'Rangos de un ejército', () => {
    const s = new Soldado('Tito', 1);
    const c = new Capitan('Cato', 2, 0);
    const g = new General('Aurelio', 4, 10, 2);
    const g2 = new General('Bruto', 4, 10, 3);
    igual(s.presentar(), 'Tito (nivel 1)');
    igual(c.presentarCapitan(), 'Cato (nivel 2) con 0 tropas');
    igual(g.presentar(), 'Aurelio (nivel 4)');
    igual(g.presentarCapitan(), 'Aurelio (nivel 4) con 10 tropas');
    igual(g.presentarGeneral(), 'Aurelio (nivel 4) con 10 tropas y 2 estrategias');
    igual([g.fuerzaGeneral(), g2.fuerzaGeneral()], [290, 780]);
    igual(new General('Cleo', 1, 0, 0).fuerzaGeneral(), 10);
    igual(new General('Rex', 2, 4, 1).fuerzaGeneral(), 140);
    igual(new General('Rex', 2, 4, 1).presentarGeneral(), 'Rex (nivel 2) con 4 tropas y 1 estrategias');
    igual(new General('Rex', 2, 4, 3).fuerzaGeneral(), 680);
    igual(g.nombre, 'Aurelio');
});
probar(28, 'Pases de museo', () => {
    const p1 = new PaseGeneral('Ana');
    const p2 = new PaseEstudiante('Beto');
    const p3 = new PaseJubilado('Cora', 79);
    const p4 = new PaseJubilado('Dante', 80);
    igual([p1.precio(), p2.precio(), p3.precio(), p4.precio()], [200, 140, 100, 0]);
    igual([p3.esGratis(), p4.esGratis()], [false, true]);
    igual(new Pase('Eva', 10).precio(), 180);
    const lista = [p1, p2, p3, p4];
    igual(recaudar(lista), 440);
    igual(gratuitos(lista), ['Dante']);
    igual([recaudar([]), gratuitos([p1])], [0, []]);
    igual(new Pase('X', 100).esGratis(), true);
    igual(new Pase('X', 0).esGratis(), false);
    igual(gratuitos([new PaseJubilado('Zoe', 85), p1, new PaseJubilado('Yan', 90)]), ['Zoe', 'Yan']);
    igual(recaudar([p1, new PaseEstudiante('Luis'), new PaseJubilado('Zoe', 85)]), 340);
    igual(lista.length, 4);
    igual(lista.map(p => p.visitante), ['Ana', 'Beto', 'Cora', 'Dante']);
});
probar(29, 'Examen con mínimo', () => {
    const e1 = new ExamenFinal('Ana', 5, 60);
    igual(e1.resultado(), 'pendiente');
    igual(e1.responderVarias([true, true, true, false, false, true]), 5);
    igual([e1.resultado(), e1.responder(true), e1.faltan()], ['aprobado', false, 0]);
    const e2 = new ExamenFinal('Beto', 5, 60);
    igual([e2.responderVarias([true, true, false, false, false]), e2.resultado()], [5, 'reprobado']);
    const e3 = new ExamenFinal('Cris', 4, 75);
    igual([e3.responderVarias([true, true]), e3.resultado(), e3.faltan()], [2, 'pendiente', 2]);
    igual([e3.responderVarias([true, true, true]), e3.resultado()], [2, 'aprobado']);
    const e4 = new ExamenFinal('Dina', 4, 25);
    igual([e4.responderVarias([true]), e4.aprobado()], [1, false]);
    igual(e4.alumno, 'Dina');
    // Examen base: rechaza al terminar
    const b = new Examen('Eli', 2);
    igual([b.responder(true), b.faltan(), b.responder(false), b.responder(true), b.faltan()], [true, 1, true, false, 0]);
    // vacío no cambia nada
    const e5 = new ExamenFinal('Fer', 2, 50);
    igual([e5.responderVarias([]), e5.faltan(), e5.resultado()], [0, 2, 'pendiente']);
    // justo por debajo del borde: 1 de 3 con mínimo 34 -> 100 < 102
    const e6 = new ExamenFinal('Gus', 3, 34);
    e6.responderVarias([true, false, false]);
    igual([e6.aprobado(), e6.resultado()], [false, 'reprobado']);
    // 100% con mínimo 100
    const e7 = new ExamenFinal('Hal', 2, 100);
    e7.responderVarias([true, true]);
    igual(e7.resultado(), 'aprobado');
});
probar(30, 'Parqueadero con placas', () => {
    const p = new Parqueadero(2);
    igual([p.entrar('A1'), p.entrar('A1'), p.disponibles()], [true, false, 1]);
    igual([p.entrar(''), p.disponibles()], [false, 1]);
    igual([p.entrar('B2'), p.entrar('C3'), p.disponibles()], [true, false, 0]);
    igual([p.salir('Z9'), p.disponibles()], [false, 0]);
    igual([p.salir('A1'), p.disponibles()], [true, 1]);
    igual(p.placasDentro(), ['B2']);
    igual([p.estaDentro('A1'), p.estaDentro('B2')], [false, true]);
    igual([p.entrar('C3'), p.placasDentro()], [true, ['B2', 'C3']]);
    const q = new Parqueadero(1);
    igual([q.disponibles(), p.total, q.total], [1, 2, 1]);
    // placa repetida con parqueadero lleno no consume ni altera nada
    igual([p.entrar('B2'), p.disponibles()], [false, 0]);
    // la copia no afecta al registro
    const copia = p.placasDentro();
    copia.push('XX');
    igual([p.placasDentro(), p.estaDentro('XX')], [['B2', 'C3'], false]);
    // salir dos veces
    igual([p.salir('B2'), p.salir('B2'), p.disponibles()], [true, false, 1]);
    // un parqueadero vacío no libera de más
    const r = new Parqueadero(1);
    igual([r.salir('A'), r.disponibles()], [false, 1]);
});
probar(31, 'Guerrero y mago contra un jefe', () => {
    const g = new Guerrero('Gor', 50, 3, 12);
    const m = new Mago('Mia', 30, 0, 25);
    const jefe = new Personaje('Jefe', 100, 5);
    igual([g.atacar(jefe), jefe.vidaRestante()], [7, 93]);
    igual([m.hechizo(jefe), m.manaRestante()], [15, 15]);
    igual([m.hechizo(jefe), m.manaRestante()], [15, 5]);
    igual([m.hechizo(jefe), m.manaRestante(), jefe.vidaRestante()], [0, 5, 63]);
    igual([g.atacar(m), m.vidaRestante()], [12, 18]);
    igual([m.recibirGolpe(2), m.vidaRestante()], [2, 16]);
    igual([g.recibirGolpe(3), g.vidaRestante()], [0, 50]);
    igual(g.descansar(), 0);
    igual([g.recibirGolpe(13), g.vidaRestante()], [10, 40]);
    igual([g.descansar(), g.vidaRestante()], [5, 45]);
    igual([g.descansar(), g.descansar(), g.vidaRestante()], [5, 0, 50]);
    igual([jefe.recibirGolpe(500), jefe.estaVivo()], [63, false]);
    const m2 = new Mago('Zed', 30, 0, 50);
    igual([g.atacar(jefe), m2.hechizo(jefe), m2.manaRestante()], [0, 0, 50]);
    // maná exacto 10 alcanza; atacante muerto no ataca
    const m3 = new Mago('Ivo', 5, 0, 10);
    const dummy = new Personaje('D', 100, 0);
    igual([m3.hechizo(dummy), m3.manaRestante(), dummy.vidaRestante()], [20, 0, 80]);
    const g2 = new Guerrero('Muerto', 4, 0, 10);
    g2.recibirGolpe(4);
    igual([g2.estaVivo(), g2.atacar(dummy), dummy.vidaRestante()], [false, 0, 80]);
    // golpe menor que la defensa -> 0
    igual([jefe.nombre, new Personaje('P', 10, 5).recibirGolpe(3)], ['Jefe', 0]);
});
probar(32, 'Brillo de pantalla', () => {
    const p = new Pantalla();
    igual([p.nivel, p.etiqueta], [50, 'medio']);
    p.nivel = 20;
    igual([p.nivel, p.etiqueta], [20, 'oscuro']);
    p.nivel = 30;
    igual([p.nivel, p.etiqueta], [30, 'medio']);
    p.nivel = 69;
    igual([p.nivel, p.etiqueta], [69, 'medio']);
    p.nivel = 70;
    igual([p.nivel, p.etiqueta], [70, 'brillante']);
    p.nivel = 150;
    igual([p.nivel, p.etiqueta], [100, 'brillante']);
    p.nivel = -5;
    igual([p.nivel, p.etiqueta], [0, 'oscuro']);
    const q = new Pantalla();
    igual(q.nivel, 50);
    p.nivel = 29;
    igual(p.etiqueta, 'oscuro');
    p.nivel = 100;
    igual(p.nivel, 100);
    p.nivel = 0;
    igual(p.nivel, 0);
    igual(q.nivel, 50);
});
probar(33, 'Progreso de lista de tareas', () => {
    const l = new ListaTareas();
    igual([l.progreso, l.terminada], [0, false]);
    igual([l.agregar('a'), l.agregar('b'), l.agregar('a'), l.agregar('')], [true, true, false, false]);
    l.agregar('c');
    l.agregar('d');
    igual([l.completar('b'), l.completar('b'), l.completar('zzz')], [true, false, false]);
    igual([l.progreso, l.faltantes], [25, ['a', 'c', 'd']]);
    l.completar('a');
    l.completar('c');
    l.completar('d');
    igual([l.progreso, l.terminada], [100, true]);
    igual([l.agregar('b'), l.agregar('e')], [false, true]);
    igual([l.progreso, l.terminada], [80, false]);
    const copia = l.faltantes;
    copia.push('intruso');
    igual(l.faltantes.length, 1);
    // mayúsculas y minúsculas distintas
    igual(l.agregar('A'), true);
    // sin redondear: 1 de 3
    const k = new ListaTareas();
    k.agregar('x');
    k.agregar('y');
    k.agregar('z');
    k.completar('x');
    igual(k.progreso, 100 / 3);
    // pendientes: orden conservado al completar la del medio
    k.completar('y');
    igual(k.faltantes, ['z']);
    // completar una ya hecha o inexistente
    igual(k.completar('x'), false);
});
probar(34, 'Apodo validado', () => {
    const p = new PerfilJugador();
    igual([p.apodo, p.cambios], ['Anónimo', 0]);
    p.apodo = 'Neo';
    igual([p.apodo, p.cambios], ['Neo', 1]);
    p.apodo = 'ab';
    p.apodo = 'Trinity_99';
    p.apodo = 'a b';
    p.apodo = 'Morfeo2024Mat';
    igual([p.apodo, p.cambios], ['Neo', 1]);
    p.apodo = 'Morfeo2024Ma';
    igual([p.apodo, p.cambios], ['Morfeo2024Ma', 2]);
    p.apodo = 'Morfeo2024Ma';
    igual(p.cambios, 2);
    p.apodo = 'ABC';
    p.apodo = 'x9z';
    igual([p.apodo, p.cambios], ['x9z', 4]);
    // otros caracteres inválidos: acentos, vacío, límites de rango
    p.apodo = 'Ñandú';
    p.apodo = '';
    p.apodo = 'abc@';
    p.apodo = 'abc{';
    p.apodo = 'abc[';
    p.apodo = 'abc:';
    p.apodo = 'abc/';
    igual([p.apodo, p.cambios], ['x9z', 4]);
    p.apodo = 'azAZ09';
    igual([p.apodo, p.cambios], ['azAZ09', 5]);
    // un perfil nuevo es independiente
    igual([new PerfilJugador().apodo, new PerfilJugador().cambios], ['Anónimo', 0]);
});
probar(35, 'Equipaje con errores', () => {
    const m = new Maleta();
    igual([m.peso, m.exceso, m.cobro], [0, 0, 0]);
    m.peso = 15;
    igual([m.exceso, m.cobro], [0, 0]);
    m.peso = 18;
    igual([m.exceso, m.cobro], [3, 30]);
    m.peso = 23;
    igual([m.peso, m.exceso, m.cobro], [23, 8, 80]);
    lanza(() => { m.peso = 24; }, 'Excede 23 kg');
    igual(m.peso, 23);
    lanza(() => { m.peso = -1; }, 'Peso negativo');
    igual(m.peso, 23);
    m.peso = 20;
    igual([m.exceso, m.cobro], [5, 50]);
    lanza(() => { m.peso = 30; }, 'Excede 23 kg');
    igual(m.peso, 20);
    m.peso = 0;
    igual([m.peso, m.exceso], [0, 0]);
    m.peso = 16;
    igual([m.exceso, m.cobro], [1, 10]);
});
probar(36, 'Termostato con objetivo limitado', () => {
    const t = new TermostatoInteligente(16, 28, 20);
    igual([t.objetivo, t.modo], [20, 'reposo']);
    t.objetivo = 25;
    igual([t.objetivo, t.modo], [25, 'calentando']);
    t.objetivo = 40;
    igual(t.objetivo, 28);
    t.objetivo = 10;
    igual([t.objetivo, t.modo], [16, 'enfriando']);
    t.objetivo = 21;
    igual([t.objetivo, t.modo], [21, 'reposo']);
    t.objetivo = 22;
    igual([t.objetivo, t.modo], [22, 'calentando']);
    t.sensar(25);
    igual(t.modo, 'enfriando');
    t.sensar(23);
    igual(t.modo, 'reposo');
    // límites exactos del rango: se aceptan tal cual
    t.objetivo = 16;
    igual(t.objetivo, 16);
    t.objetivo = 28;
    igual(t.objetivo, 28);
    // borde inferior del modo enfriando: actual 23, objetivo 22 -> reposo; objetivo 21 -> enfriando
    t.objetivo = 22;
    igual(t.modo, 'reposo');
    t.objetivo = 21;
    igual(t.modo, 'enfriando');
    // sensar no cambia el objetivo
    igual(t.objetivo, 21);
});
probar(37, 'Hoja de horas', () => {
    const h = new HojaDeHoras();
    igual([h.registrar('lun', 8), h.registrar('mar', 10), h.registrar('mie', 12)], [true, true, true]);
    igual([h.registrar('lun', 5), h.registrar('jue', 0), h.registrar('jue', 13), h.registrar('vie', 7.5)], [false, false, false, false]);
    h.registrar('vie', 1);
    igual([h.dias, h.total, h.extras, h.normales], [4, 31, 6, 25]);
    igual(h.pago, 3700);
    h.tarifa = 150;
    igual([h.tarifa, h.pago], [150, 5550]);
    h.tarifa = 0;
    h.tarifa = -5;
    h.tarifa = 99.5;
    igual(h.tarifa, 150);
    igual(new HojaDeHoras().pago, 0);
    // solo un día de 8 horas
    const u = new HojaDeHoras();
    u.registrar('x', 8);
    igual([u.total, u.extras, u.pago], [8, 0, 800]);
    // ejemplo 8 + 10
    const v = new HojaDeHoras();
    v.registrar('a', 8);
    v.registrar('b', 10);
    igual([v.total, v.extras, v.normales, v.pago], [18, 2, 16, 2000]);
    // pago se actualiza al registrar un día nuevo
    v.registrar('c', 9);
    igual([v.extras, v.pago], [3, 24 * 100 + 3 * 200]);
    // límites 1 y 12
    const w = new HojaDeHoras();
    igual([w.registrar('a', 1), w.registrar('b', 12), w.registrar('c', 12.0)], [true, true, true]);
    igual([w.registrar('d', -1), w.registrar('e', NaN)], [false, false]);
    // la tarifa inicial es 100
    igual(w.tarifa, 100);
});
probar(38, 'Promociones de panadería', () => {
    const pct = new PorcentajePromo('20%', 20);
    const tres = new TresPorDos('3x2');
    const fijo = new DescuentoFijo('-30', 30);
    const grande = new DescuentoFijo('-300', 300);
    igual([pct.nombre, pct.total(4, 50)], ['20%', 160]);
    igual([tres.total(7, 50), tres.total(3, 50), tres.total(2, 50), tres.total(0, 50)], [250, 100, 100, 0]);
    igual([fijo.total(4, 50), fijo.total(1, 50)], [170, 20]);
    igual([grande.total(4, 50), grande.total(6, 50)], [0, 0]);
    igual(mejorPromo([pct, tres, fijo], 4, 50), '3x2');
    const pct60 = new PorcentajePromo('60%', 60);
    igual([mejorPromo([pct60, fijo], 1, 50), mejorPromo([fijo, pct60], 1, 50)], ['60%', '-30']);
    igual(mejorPromo([], 1, 50) === undefined, true);
    // ejemplo del enunciado: 7 a 10
    const p10 = new PorcentajePromo('10%', 10);
    const f15 = new DescuentoFijo('-15', 15);
    igual([p10.total(7, 10), f15.total(7, 10), tres.total(7, 10)], [63, 55, 50]);
    igual(mejorPromo([p10, f15, tres], 7, 10), '3x2');
    // descuento igual al bruto -> 0 (no negativo)
    igual(new DescuentoFijo('eq', 50).total(1, 50), 0);
    igual(new PorcentajePromo('100%', 100).total(3, 10), 0);
    // lista de un elemento y lista no modificada
    const lista = [grande, pct];
    igual(mejorPromo(lista, 4, 50), '-300');
    igual(lista.map(p => p.nombre), ['-300', '20%']);
    igual(mejorPromo([pct], 1, 50), '20%');
});
probar(39, 'Sensores con estado', () => {
    const f = new SensorFijo('F', 10);
    const c = new SensorCiclico('C', [1, 2, 3]);
    const a = new SensorAcumulativo('A', 5);
    igual([c.leer(), c.leer(), c.leer(), c.leer()], [1, 2, 3, 1]);
    igual([a.leer(), a.leer(), a.leer()], [5, 10, 15]);
    igual([f.leer(), f.leer(), f.nombre], [10, 10, 'F']);
    igual(new SensorCiclico('U', [7]).leer(), 7);
    const u = new SensorCiclico('U', [7]);
    igual([u.leer(), u.leer(), u.leer()], [7, 7, 7]);
    const s = [new SensorFijo('F', 10), new SensorCiclico('C', [1, 2, 3]), new SensorAcumulativo('A', 6)];
    igual(promedioLecturas(s, 3), 8);
    igual(promedioLecturas(s, 3), 14);
    igual([promedioLecturas(s, 0), promedioLecturas(s, -2), promedioLecturas([], 5)], [0, 0, 0]);
    igual(promedioLecturas([new SensorFijo('F', 10), new SensorCiclico('C', [1, 2, 3])], 3), 6);
    igual(promedioLecturas([new SensorFijo('F', 3)], 1), 3);
    igual(promedioLecturas([new SensorAcumulativo('A', 2)], 4), 5);
});
probar(40, 'Cajas para empacar', () => {
    const chica = new CajaChica();
    const grande = new CajaGrande();
    const band = new Bandeja(2, 5);
    const band34 = new Bandeja(3, 4);
    igual([chica.cajasNecesarias(0), chica.cajasNecesarias(1), chica.cajasNecesarias(12)], [0, 1, 1]);
    igual([chica.cajasNecesarias(13), chica.cajasNecesarias(24), chica.cajasNecesarias(25)], [2, 2, 3]);
    igual([chica.sobrante(13), chica.sobrante(12), chica.sobrante(0)], [11, 0, 0]);
    igual([chica.nombre, grande.nombre, band.nombre], ['Caja chica', 'Caja grande', 'Bandeja']);
    igual([grande.capacidad(), grande.cajasNecesarias(31), grande.sobrante(31)], [30, 2, 29]);
    igual([band.capacidad(), band.cajasNecesarias(25), band.sobrante(25)], [10, 3, 5]);
    igual(mejorEmpaque([chica, grande, band], 25)?.nombre, 'Caja grande');
    igual(mejorEmpaque([chica, grande, band], 60)?.nombre, 'Caja grande');
    igual(mejorEmpaque([chica, grande, band34], 12)?.nombre, 'Caja chica');
    igual(mejorEmpaque([band34, chica], 12)?.nombre, 'Bandeja');
    igual(mejorEmpaque([chica, band], 10)?.nombre, 'Bandeja');
    igual(mejorEmpaque([grande, chica], 0)?.nombre, 'Caja grande');
    const lista = [chica, grande, band];
    mejorEmpaque(lista, 25);
    igual(lista.map((e) => e.nombre), ['Caja chica', 'Caja grande', 'Bandeja']);
    igual(mejorEmpaque([], 5), undefined);
});
probar(41, 'Nómina de una empresa', () => {
    const n = new Nomina();
    const ana = new Asalariado('Ana', 3000);
    const beto = new PorHoras('Beto', 20, 170);
    const cris = new Comisionista('Cris', 1000, [200, 400, 100]);
    igual([ana.pagoMensual(), beto.pagoMensual(), cris.pagoMensual()], [3000, 3600, 1035]);
    igual([new PorHoras('X', 20, 160).pagoMensual(), new PorHoras('Y', 20, 161).pagoMensual()], [3200, 3240]);
    igual([new PorHoras('Z', 10, 0).pagoMensual(), new PorHoras('W', 10, 170).pagoMensual()], [0, 1800]);
    igual(new Comisionista('Z', 500, []).pagoMensual(), 500);
    igual(ana.nombre, 'Ana');
    igual([n.agregar(ana), n.agregar(beto), n.agregar(cris)], [true, true, true]);
    igual(n.agregar(new Asalariado('Ana', 1)), false);
    igual([n.total(), n.mayorPago()], [7635, 'Beto']);
    igual(n.conPagoMayorA(3000), ['Beto']);
    igual(n.conPagoMayorA(1034), ['Ana', 'Beto', 'Cris']);
    igual(n.conPagoMayorA(5000), []);
    igual([new Nomina().mayorPago(), new Nomina().total()], [undefined, 0]);
    igual(new Nomina().conPagoMayorA(0), []);
    const t = new Nomina();
    t.agregar(new Asalariado('P', 100));
    t.agregar(new Asalariado('Q', 100));
    igual(t.mayorPago(), 'P');
    igual(t.conPagoMayorA(100), []);
});
probar(42, 'Validadores de texto', () => {
    const d = new SoloDigitos();
    const l = new LongitudEntre(3, 5);
    const c = new Correo();
    igual([d.validar('123'), d.validar('12a'), d.validar('')], [true, false, false]);
    igual([d.validar('0'), d.validar('9'), d.validar('1 2')], [true, true, false]);
    igual(d.contarValidos(['1', '22', 'x', '', '3a']), 2);
    igual(d.contarValidos([]), 0);
    igual([l.validar('ab'), l.validar('abc'), l.validar('abcde'), l.validar('abcdef')], [false, true, true, false]);
    igual(new LongitudEntre(0, 5).validar(''), false);
    igual(new LongitudEntre(1, 1).validar('x'), true);
    igual([c.validar('a@b'), c.validar('@b'), c.validar('a@'), c.validar('a@@b'), c.validar('ab')], [true, false, false, false, false]);
    igual([c.validar('@'), c.validar('a@b@c'), c.validar('ana@correo.com')], [false, false, true]);
    igual(c.contarValidos(['a@b', '', 'x']), 1);
    const lista = [d, l, c];
    igual([cuantosAceptan(lista, '123'), cuantosAceptan(lista, 'a@b.c'), cuantosAceptan(lista, '')], [2, 2, 0]);
    igual(cuantosAceptan([], 'abc'), 0);
});
probar(43, 'Bitácora compartida', () => {
    const a = Bitacora.obtener();
    const b = Bitacora.obtener();
    igual(a === b, true);
    igual([a.total(), a.ultimos(3), a.vaciar()], [0, [], 0]);
    igual([a.anotar('inicio'), b.anotar(''), b.anotar('inicio')], [true, false, false]);
    igual([b.anotar('lectura'), a.anotar('fin'), a.anotar('lectura')], [true, true, true]);
    igual(b.total(), 4);
    igual(a.ultimos(2), ['fin', 'lectura']);
    igual(a.ultimos(10), ['inicio', 'lectura', 'fin', 'lectura']);
    igual(a.ultimos(4), ['inicio', 'lectura', 'fin', 'lectura']);
    igual([a.ultimos(0), a.ultimos(-1)], [[], []]);
    const copia = a.ultimos(10);
    copia.push('intruso');
    copia[0] = 'otro';
    igual([a.total(), a.ultimos(10)], [4, ['inicio', 'lectura', 'fin', 'lectura']]);
    igual([b.vaciar(), a.total()], [4, 0]);
    igual(a.anotar('inicio'), true);
    igual([a.anotar('inicio'), a.total()], [false, 1]);
    igual([a.anotar('x'), a.ultimos(1)], [true, ['x']]);
    igual(Bitacora.obtener() === a, true);
});
probar(44, 'Fracciones simplificadas', () => {
    igual([Fraccion.crear(2, 4)?.texto(), Fraccion.crear(-3, -6)?.texto(), Fraccion.crear(3, -6)?.texto()], ['1/2', '1/2', '-1/2']);
    igual([Fraccion.crear(0, 5)?.texto(), Fraccion.crear(6, 3)?.texto(), Fraccion.crear(-4, 2)?.texto()], ['0', '2', '-2']);
    igual([Fraccion.crear(0, -5)?.texto(), Fraccion.crear(6, 4)?.texto(), Fraccion.crear(7, 3)?.texto()], ['0', '3/2', '7/3']);
    igual([Fraccion.crear(1, 0), Fraccion.crear(1.5, 2), Fraccion.crear(1, 2.5)], [undefined, undefined, undefined]);
    igual([Fraccion.crear(0, 0), Fraccion.crear(NaN, 1), Fraccion.crear(1, Infinity)], [undefined, undefined, undefined]);
    const medio = Fraccion.crear(1, 2);
    const tercio = Fraccion.crear(1, 3);
    const negMedio = Fraccion.crear(-1, 2);
    const negDosTercios = Fraccion.crear(-2, 3);
    igual(medio.sumar(tercio).texto(), '5/6');
    igual([medio.sumar(medio).texto(), medio.sumar(negMedio).texto()], ['1', '0']);
    igual(negMedio.sumar(Fraccion.crear(-1, 3)).texto(), '-5/6');
    igual([medio.esMayorQue(tercio), tercio.esMayorQue(medio), medio.esMayorQue(medio)], [true, false, false]);
    igual(negMedio.esMayorQue(negDosTercios), true);
    igual([medio.numerador, medio.denominador], [1, 2]);
    igual([Fraccion.crear(-3, -6).numerador, Fraccion.crear(3, -6).denominador], [1, 2]);
    igual([medio.numerador, medio.denominador, tercio.numerador], [1, 2, 1]);
});
probar(45, 'Aforo compartido', () => {
    const aforo = Aforo.obtener();
    igual(aforo === Aforo.obtener(), true);
    igual(aforo.lugaresLibres(), 100);
    igual([aforo.ingresar(101), aforo.ingresar(-1), aforo.ingresar(2.5), aforo.salir(1)], [false, false, false, false]);
    igual([aforo.ingresar(100), aforo.lugaresLibres(), aforo.ingresar(1)], [true, 0, false]);
    igual([aforo.salir(100), aforo.lugaresLibres()], [true, 100]);
    igual([aforo.configurar(10), aforo.configurar(0), aforo.configurar(5.5), aforo.configurar(-3)], [true, false, false, false]);
    const p1 = new Puerta('Norte');
    const p2 = new Puerta('Sur');
    igual(p1.resumen(), 'Norte: entraron 0, salieron 0');
    igual([p1.entrar(6), p2.entrar(5), p2.entrar(4)], [true, false, true]);
    igual(aforo.lugaresLibres(), 0);
    igual(aforo.configurar(20), false);
    igual([p2.entrar(0), p1.entrar(1)], [false, false]);
    igual([p1.salir(7), aforo.lugaresLibres()], [true, 7]);
    igual([p2.salir(4), p2.salir(3), aforo.lugaresLibres()], [false, true, 10]);
    igual([p1.salir(0), p1.salir(-2)], [false, false]);
    igual([aforo.configurar(20), aforo.lugaresLibres()], [true, 20]);
    igual(p1.resumen(), 'Norte: entraron 6, salieron 7');
    igual(p2.resumen(), 'Sur: entraron 4, salieron 3');
    igual(Aforo.obtener().lugaresLibres(), 20);
});
probar(46, 'Comandas de un restaurante', () => {
    const sopa = new Aperitivo('Sopa', 40);
    const pollo = new PlatoFuerte('Pollo', 120, 2);
    const helado = new Postre('Helado', 50, true);
    const pastel = new Postre('Pastel', 60, false);
    igual([sopa.tiempo(), pollo.tiempo(), new PlatoFuerte('Sin', 1, 0).tiempo(), helado.tiempo(), pastel.tiempo()], [5, 21, 15, 4, 10]);
    igual([sopa.nombre, sopa.precio], ['Sopa', 40]);
    const c1 = new Comanda();
    igual([c1.numero, c1.total, c1.tiempoTotal], [1, 0, 0]);
    igual([c1.agregar(sopa), c1.agregar(pollo), c1.agregar(helado)], [true, true, true]);
    igual([c1.total, c1.tiempoTotal], [210, 25]);
    igual([c1.agregar(pastel), c1.agregar(sopa), c1.agregar(sopa)], [true, true, true]);
    igual([c1.agregar(helado), c1.total, c1.tiempoTotal], [false, 350, 31]);
    igual(c1.filtrar((p) => p.precio >= 60), ['Pollo', 'Pastel']);
    igual(c1.filtrar((p) => p.tiempo() <= 5), ['Sopa', 'Helado', 'Sopa', 'Sopa']);
    igual(c1.filtrar(() => false), []);
    const c2 = new Comanda();
    igual([c2.numero, c2.total, Comanda.emitidas()], [2, 0, 2]);
    c2.agregar(sopa);
    igual([c2.total, c2.tiempoTotal, c2.numero], [40, 5, 2]);
    c2.agregar(pastel);
    igual([c2.total, c2.tiempoTotal], [100, 12]);
    igual([c1.numero, Comanda.emitidas()], [1, 2]);
});
probar(47, 'Sala de espera con triage', () => {
    const ana = new Adulto('Ana', Gravedad.Leve);
    const beto = new Nino('Beto', Gravedad.Grave, 2);
    const cora = new Adulto('Cora', Gravedad.Grave);
    const dani = new Nino('Dani', Gravedad.Moderada, 7);
    igual([ana.minutos(), beto.minutos(), cora.minutos(), dani.minutos()], [10, 29, 30, 16]);
    igual([new Nino('N', Gravedad.Leve, 3).minutos(), new Nino('N', Gravedad.Leve, 2).minutos(), new Nino('N', Gravedad.Leve, 0).minutos()], [8, 13, 13]);
    igual([beto.nombre, beto.gravedad], ['Beto', 3]);
    const s = new SalaEspera();
    igual([s.siguiente(), s.pendientes, s.esperaEstimada, s.atender()], [undefined, 0, 0, 'sala vacía']);
    igual([s.ingresar(ana), s.ingresar(beto), s.ingresar(cora), s.ingresar(dani)], [true, true, true, true]);
    igual(s.ingresar(new Adulto('Ana', Gravedad.Grave)), false);
    igual([s.pendientes, s.esperaEstimada], [4, 85]);
    igual(s.siguiente()?.nombre, 'Beto');
    igual([s.pendientes, s.siguiente()?.nombre], [4, 'Beto']);
    igual([s.atender(), s.atender()], ['Beto (29 min)', 'Cora (30 min)']);
    igual([s.pendientes, s.esperaEstimada], [2, 26]);
    igual(s.siguiente()?.nombre, 'Dani');
    igual([s.atender(), s.atender(), s.atender()], ['Dani (16 min)', 'Ana (10 min)', 'sala vacía']);
    igual(SalaEspera.totalLlegadas(), 4);
    const s2 = new SalaEspera();
    igual([s2.ingresar(ana), s2.pendientes, SalaEspera.totalLlegadas()], [true, 1, 5]);
    igual([s2.ingresar(new Adulto('Ana', Gravedad.Leve)), SalaEspera.totalLlegadas()], [false, 5]);
    s2.ingresar(new Adulto('X', Gravedad.Grave));
    s2.ingresar(new Adulto('Y', Gravedad.Grave));
    igual(s2.atender(), 'X (30 min)');
    igual(s2.ingresar(new Adulto('X', Gravedad.Leve)), true);
    igual([s2.atender(), s2.atender()], ['Y (30 min)', 'Ana (10 min)']);
});
probar(48, 'Pista de aterrizaje única', () => {
    const pista = Pista.obtener();
    igual(pista === Pista.obtener(), true);
    igual([pista.ocupacionTotal(), pista.liberar()], [0, 'pista libre']);
    const a1 = new Avioneta('A-1', 2);
    const a2 = new Comercial('C-1', 180);
    const a3 = new Helicoptero('H-1', 1);
    const a4 = new Avioneta('A-2', 3);
    const a5 = new Avioneta('A-3', 3);
    const a6 = new Avioneta('A-4', 1);
    igual(pista.solicitar(a1), 'aterrizando A-1');
    igual(pista.solicitar(a1), 'repetida');
    igual([pista.solicitar(a2), pista.solicitar(a3), pista.solicitar(a4)], ['en espera: posición 1', 'en espera: posición 2', 'en espera: posición 3']);
    igual([pista.solicitar(a5), pista.solicitar(a2)], ['cola llena', 'repetida']);
    igual([pista.solicitar(a1), pista.solicitar(a4)], ['repetida', 'repetida']);
    igual(pista.ocupacionTotal(), 28);
    igual([pista.liberar(), pista.liberar()], ['aterrizando C-1', 'aterrizando H-1']);
    igual(pista.solicitar(a5), 'en espera: posición 2');
    igual([pista.liberar(), pista.liberar()], ['aterrizando A-2', 'aterrizando A-3']);
    igual([pista.liberar(), pista.liberar()], ['pista libre', 'pista libre']);
    igual(pista.ocupacionTotal(), 0);
    igual([pista.solicitar(a6), a6.describir()], ['aterrizando A-4', 'A-4 con 1 pasajeros']);
    igual([pista.solicitar(a6), pista.ocupacionTotal()], ['repetida', 5]);
    igual([pista.solicitar(new Comercial('C-2', 150)), pista.ocupacionTotal()], ['en espera: posición 1', 15]);
    igual([pista.solicitar(new Comercial('C-3', 151)), pista.ocupacionTotal()], ['en espera: posición 2', 30]);
    igual([pista.liberar(), pista.ocupacionTotal()], ['aterrizando C-2', 25]);
    igual([pista.liberar(), pista.liberar(), pista.ocupacionTotal()], ['aterrizando C-3', 'pista libre', 0]);
});
probar(49, 'Mochila de aventurero', () => {
    const m = new Mochila(20);
    const espada = new Arma('Espada', 8, 5);
    const poc = new Pocion('Curación', 3);
    const gema = new Tesoro('Gema', 500, 1);
    const hacha = new Arma('Hacha', 10, 7);
    igual([espada.tipo, poc.tipo, gema.tipo, espada.nombre], ['arma', 'pocion', 'tesoro', 'Espada']);
    igual([espada.peso(), espada.valor(), poc.peso(), poc.valor(), gema.peso(), gema.valor()], [8, 50, 3, 45, 1, 500]);
    igual([m.pesoActual, m.pesoLibre, m.valorTotal, m.conteoPorTipo()], [0, 20, 0, {}]);
    igual([m.guardar(espada), m.guardar(poc), m.guardar(hacha), m.guardar(gema)], [true, true, false, true]);
    igual([m.pesoActual, m.pesoLibre, m.valorTotal], [12, 8, 595]);
    igual(m.conteoPorTipo(), { arma: 1, pocion: 1, tesoro: 1 });
    m.capacidad = 30;
    igual([m.capacidad, m.pesoLibre], [30, 18]);
    igual([m.guardar(hacha), m.pesoLibre], [true, 8]);
    m.capacidad = 15;
    igual(m.capacidad, 30);
    m.capacidad = 22;
    igual([m.capacidad, m.pesoLibre], [22, 0]);
    m.capacidad = 0;
    igual(m.capacidad, 22);
    m.capacidad = -5;
    igual(m.capacidad, 22);
    igual(m.conteoPorTipo(), { arma: 2, pocion: 1, tesoro: 1 });
    igual([m.soltar('Espada')?.nombre, m.soltar('Nada')], ['Espada', undefined]);
    igual([m.pesoActual, m.conteoPorTipo()], [14, { pocion: 1, tesoro: 1, arma: 1 }]);
    const m2 = new Mochila(5);
    igual([Mochila.creadas(), m2.pesoLibre], [2, 5]);
    igual([m2.guardar(new Pocion('Grande', 5.5)), m2.guardar(new Pocion('Justa', 5)), m2.pesoLibre], [false, true, 0]);
    const m3 = new Mochila(50);
    m3.guardar(new Arma('Igual', 1, 1));
    m3.guardar(new Arma('Igual', 2, 2));
    igual([m3.soltar('Igual')?.peso(), m3.pesoActual, m3.conteoPorTipo()], [1, 2, { arma: 1 }]);
    igual([m3.soltar('Igual')?.peso(), m3.soltar('Igual'), m3.conteoPorTipo()], [2, undefined, {}]);
    igual(Mochila.creadas(), 3);
});
probar(50, 'Inversores en un mercado único', () => {
    const m = Mercado.obtener();
    igual(m === Mercado.obtener(), true);
    igual([m.simbolos, m.precio('ABC'), m.actualizar()], [[], undefined, 0]);
    igual(m.actualizar(['ABC', 40], ['XYZ', 90], ['BAD', 0], ['', 10], ['QWE', 12.5], ['NEG', -4]), 2);
    igual([m.precio('ABC'), m.precio('NOP'), m.simbolos], [40, undefined, ['ABC', 'XYZ']]);
    igual([m.precio('BAD'), m.precio('QWE'), m.precio('')], [undefined, undefined, undefined]);
    const c = new Cauteloso('Carla', 100);
    igual(c.nombre, 'Carla');
    igual([c.operar('ABC'), c.operar('ABC'), c.operar('ABC')], ['compró ABC', 'compró ABC', 'sin fondos']);
    igual([c.operar('XYZ'), c.operar('NOP')], ['sin acciones', 'sin cotización']);
    igual([c.accionesDe('ABC'), c.caja, c.patrimonio, c.accionesDe('NOP')], [2, 20, 100, 0]);
    igual(m.actualizar(['ABC', 85]), 1);
    igual(c.patrimonio, 190);
    igual([c.operar('ABC'), c.caja, c.accionesDe('ABC')], ['vendió ABC', 105, 1]);
    const r = new Arriesgado('Raúl', 200);
    igual(r.operar('ABC'), 'esperó');
    m.actualizar(['ABC', 90]);
    igual([r.operar('ABC'), r.caja], ['compró ABC', 110]);
    m.actualizar(['ABC', 70]);
    igual([r.operar('ABC'), r.caja], ['vendió ABC', 180]);
    igual([r.operar('ABC'), r.operar('ABC')], ['esperó', 'esperó']);
    const c2 = new Cauteloso('Ceci', 10);
    igual([c2.operar('ABC'), c2.caja, c2.operar('QWE')], ['esperó', 10, 'sin cotización']);
    igual([m.actualizar(['NEW', 60], ['ABC', 70]), m.simbolos], [2, ['ABC', 'XYZ', 'NEW']]);
    m.actualizar(['P50', 50], ['P51', 51], ['P79', 79], ['P80', 80]);
    const rico = new Cauteloso('Rico', 1000);
    igual([rico.operar('P50'), rico.operar('P51'), rico.operar('P79'), rico.operar('P80')], ['compró P50', 'esperó', 'esperó', 'sin acciones']);
    const justo = new Cauteloso('Justo', 50);
    igual([justo.operar('P50'), justo.caja, justo.operar('P50')], ['compró P50', 0, 'sin fondos']);
    igual([rico.patrimonio, rico.caja], [1000, 950]);
    const r2 = new Arriesgado('Rita', 500);
    igual([r2.operar('P50'), r2.operar('P51'), r2.operar('P50')], ['esperó', 'esperó', 'esperó']);
    m.actualizar(['P50', 55]);
    igual([r2.operar('P50'), r2.operar('P51'), r2.caja], ['compró P50', 'esperó', 445]);
});
export {};
