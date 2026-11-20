/*
COMPENDIO 01 — FUNCIONES Y OBJETOS
Ejercicios 01–50, de menor a mayor dificultad. Los primeros refuerzan UNA sola
subsección de la sección 04; después se combinan las subsecciones entre sí y con
lo visto en 01.Bases y 03.Tipos de datos, hasta integrar todo en los últimos.

SUBSECCIONES EJERCITADAS
  04/01 Funciones básicas ...... function y flecha, tipo de retorno, void, never
  04/02 Argumentos ............. obligatorios y opcionales (?)
  04/03 Parámetros por defecto . '= valor' y pasar undefined para conservarlo
  04/04 Parámetros rest ........ ...nombre: tipo[] siempre al final
  04/05 Tipo función ........... forma acortada, Function y firmas (x: T) => R
  01 Bases ..................... const, let, objeto literal con tipos inferidos
  03 Tipos de datos ............ number, string, boolean, arrays, tuplas, enum,
                                 void, never, null/undefined, uniones con |

PROGRESIÓN
  01–06  Una sola subsección: funciones básicas
  07–12  Una sola subsección: argumentos obligatorios y opcionales
  13–18  Una sola subsección: parámetros por defecto
  19–24  Una sola subsección: parámetros rest
  25–30  Una sola subsección: tipo función
  31–38  Dos o tres subsecciones de la 04 a la vez, más tipos de la sección 03
  39–45  Tres o más subsecciones con tuplas, arrays, enum y estado compartido
  46–50  Integración: todo lo permitido en un mismo problema

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN: te dice qué se está resolviendo.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta.
  3. Escribe las líneas de COMPRUEBA con console.log. Cada línea trae el resultado
     esperado después de //. Antes de ejecutar, predice qué saldrá.
  4. Si hay líneas en ESTO DEBE FALLAR, pruébalas una por una: descomenta, comprueba
     que TypeScript marca error y vuelve a comentarla.
  5. Responde EXPLICA en un comentario bajo tu solución.

VOCABULARIO DE LOS ENUNCIADOS
  «supón» = el dato ya es válido; no lo compruebes.
  «firma» = el tipo de una función: (x: number, y: number) => number.
  «forma acortada» = flecha de una sola expresión, sin llaves ni return.
  «bandera» = variable boolean que cambia de false a true al encontrar algo.
  {llaves} en un texto = valor que sustituyes; las llaves no se escriben.
  Los resultados de texto se escriben entre comillas ('...') para distinguirlos de
  los números; console.log los muestra sin comillas cuando es un texto suelto.

REGLAS COMUNES
  - Cada ejercicio va dentro de su función (() => { ... })(); son independientes,
    por eso los nombres se pueden repetir entre ejercicios.
  - Escribe el tipo de cada parámetro y el tipo de retorno de cada función que crees
    (incluido void y never). Solo se infiere el parámetro de una flecha que pasas
    directamente como argumento, p. ej. valores.forEach((v) => { ... }).
  - No uses any, as ni el operador ! para «callar» a TypeScript.
  - Un método o función que consulta no modifica nada; imprimir no sustituye a
    devolver. Los nombres de funciones, parámetros y variables que pide el enunciado
    se conservan tal cual.
  - Rechazo = devolver el valor que indica el enunciado (false, null, '' o []) sin
    cambiar ningún dato. Solo lanzan error las funciones que lo dicen.
  - Sin soluciones incluidas: aquí solo hay enunciados.

HERRAMIENTAS PERMITIDAS (lo visto en las secciones 01, 03 y 04)
  - if / else if / else; comparaciones; &&, || y !; + - * / %; +=, -=, ++.
  - Textos: plantillas con `${...}`, .length, charAt(i), [i], toLocaleUpperCase(),
    toFixed(n) y el operador ?. con ||.
  - Arrays: [], push(...), length, [i], join(texto) y forEach.
    valores.forEach((v) => { ... }) ejecuta el bloque una vez por cada elemento; las
    variables declaradas fuera del bloque se pueden modificar dentro.
  - typeof dentro de un if para distinguir un string de un number.
  - Una firma también puede ser el tipo de un parámetro o de un retorno, igual que
    en una variable: regla: (n: number) => boolean.

PROHIBIDO (no se ha visto todavía)
  for, while, switch, el operador ternario ? :, ??, recursión, desestructuración,
  spread (...) al llamar o en arrays, map/filter/reduce/find/includes/indexOf/slice/
  splice/pop/shift/sort/split, repeat, trim, Math, try/catch, clases, interfaces,
  type, genéricos, tipos de objeto escritos a mano, módulos y namespaces.

DOS AVISOS DE TYPESCRIPT QUE VERÁS CON forEach
  - Con un array, valores[0] puede ser undefined: compruébalo antes de usarlo.
  - Una bandera boolean que solo cambias dentro de forEach se consulta con
    if (bandera) o if (!bandera). No la compares con === true: TypeScript no ve los
    cambios hechos dentro del bloque y rechaza esa comparación.
*/

// TRAMO 1 — FUNCIONES BÁSICAS: EJERCICIOS 01 AL 06

// !EJERCICIO 01 — Tarifa de estacionamiento
/*
SITUACIÓN
  Un estacionamiento cobra por hora entera: las dos primeras horas salen más caras
  y, después, cada hora adicional baja de precio. Además hay un tope por día.

QUÉ DEBES HACER
  1. Crea con la palabra function la función tarifa. Recibe horas (number; supón
     entero >= 0) y devuelve number. Escribe el tipo de retorno.
  2. Dentro de tarifa, en este orden:
     a) calcula el costo: si horas es 2 o menos, 10 por cada hora; si es más de 2,
        20 por las dos primeras más 5 por cada hora después de la segunda;
     b) si el costo es mayor que 60, devuelve 60 (el tope);
     c) en otro caso devuelve el costo.
  3. Fuera de la función ejecuta COMPRUEBA.

COMPRUEBA
  console.log(tarifa(0));   // 0
  console.log(tarifa(2));   // 20
  console.log(tarifa(3));   // 25
  console.log(tarifa(9));   // 55
  console.log(tarifa(10));  // 60
  console.log(tarifa(11));  // 60

ESTO DEBE FALLAR
  // const texto: string = tarifa(3);  → tarifa devuelve number, no string.
  // tarifa('3');  → el argumento debe ser number.

EXPLICA
  ¿Qué devolvería tarifa(11) si olvidaras el paso b)? ¿Por qué tarifa(10) es 60 sin
  necesitar el tope?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 02 — Año bisiesto en forma acortada
/*
SITUACIÓN
  Un calendario debe saber si un año tiene 29 días en febrero. La regla mezcla tres
  divisibilidades y se puede escribir en una sola expresión.

QUÉ DEBES HACER
  1. Crea con const la función flecha esBisiesto. Recibe anio (number; supón entero
     > 0) y devuelve boolean. Escríbela en forma acortada: sin llaves y sin return.
  2. La expresión debe dar true cuando se cumplen las dos condiciones:
     a) anio es divisible entre 4 (anio % 4 === 0);
     b) anio NO es divisible entre 100, o sí lo es entre 400.
     Usa paréntesis para agrupar la parte b).
  3. Fuera de la función ejecuta COMPRUEBA.

COMPRUEBA
  console.log(esBisiesto(2024));  // true
  console.log(esBisiesto(2023));  // false
  console.log(esBisiesto(1900));  // false
  console.log(esBisiesto(2000));  // true
  console.log(esBisiesto(2100));  // false
  console.log(esBisiesto(4));     // true

ESTO DEBE FALLAR
  // const r: number = esBisiesto(2024);  → devuelve boolean, no number.
  // esBisiesto('2024');  → el argumento debe ser number.

EXPLICA
  ¿Por qué 1900 no es bisiesto aunque sea divisible entre 4? ¿Qué parte de la
  expresión lo decide?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 03 — Billetera con una función void
/*
SITUACIÓN
  Una billetera guarda un saldo en una variable. Retirar dinero modifica ese saldo
  pero no devuelve nada: solo consultarlo permite ver el resultado.

QUÉ DEBES HACER
  1. Dentro de la función autoinvocada crea con let la variable saldo (number) con
     valor inicial 100.
  2. Crea la función retirar(monto: number): void. No devuelve ningún valor. Dentro:
     a) si monto es 0 o negativo, no hace nada;
     b) si monto es mayor que saldo, no hace nada;
     c) en otro caso resta monto a saldo.
  3. Crea la función consultarSaldo(): number, que devuelve saldo.
  4. Ejecuta COMPRUEBA en el orden indicado; el saldo cambia entre líneas.

COMPRUEBA
  console.log(consultarSaldo());  // 100
  retirar(30);
  console.log(consultarSaldo());  // 70
  retirar(100);
  console.log(consultarSaldo());  // 70  (rechazado: 100 > 70)
  retirar(-5);
  console.log(consultarSaldo());  // 70
  retirar(70);
  console.log(consultarSaldo());  // 0   (retirar todo el saldo es válido)
  console.log(retirar(10));       // undefined

ESTO DEBE FALLAR
  // const resultado: number = retirar(10);  → retirar devuelve void, no number.
  // saldo = 'cien';  → saldo es number.

EXPLICA
  ¿Cómo sabes desde fuera si un retiro fue aceptado, si retirar no devuelve nada?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 04 — Semáforo
/*
SITUACIÓN
  Un semáforo cambia de luz en un ciclo fijo. Un valor desconocido se considera que
  el semáforo está apagado.

QUÉ DEBES HACER
  1. Crea la función siguienteLuz(actual: string): string. Compara el texto
     exactamente (mayúsculas y minúsculas importan):
     a) 'verde' devuelve 'amarillo';
     b) 'amarillo' devuelve 'rojo';
     c) 'rojo' devuelve 'verde';
     d) cualquier otro texto, incluido '', devuelve 'apagado'.
  2. Ejecuta COMPRUEBA. La última línea usa typeof sobre la función sin llamarla.

COMPRUEBA
  console.log(siguienteLuz('verde'));                  // 'amarillo'
  console.log(siguienteLuz('amarillo'));               // 'rojo'
  console.log(siguienteLuz('rojo'));                   // 'verde'
  console.log(siguienteLuz('Verde'));                  // 'apagado'
  console.log(siguienteLuz(''));                       // 'apagado'
  console.log(siguienteLuz(siguienteLuz('verde')));    // 'rojo'
  console.log(typeof siguienteLuz);                    // 'function'

ESTO DEBE FALLAR
  // siguienteLuz(1);  → el argumento debe ser string.
  // const n: number = siguienteLuz('rojo');  → devuelve string, no number.

EXPLICA
  ¿Qué diferencia hay entre console.log(siguienteLuz) y
  console.log(siguienteLuz('rojo'))? ¿Qué muestra cada una?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 05 — División con función never
/*
SITUACIÓN
  Una calculadora no puede dividir entre cero. En lugar de devolver un valor
  engañoso, debe detener el programa con un error. La función que lanza el error
  nunca termina con normalidad, y TypeScript lo expresa con el tipo never.

QUÉ DEBES HACER
  1. Crea la función fallar(mensaje: string): never. Su único contenido es lanzar
     un error con el mensaje recibido: throw new Error(mensaje);
  2. Crea la función dividir(a: number, b: number): number. Dentro:
     a) si b es 0, devuelve fallar('Division por cero') escribiendo
        return fallar(...);
     b) en otro caso devuelve a / b.
  3. Ejecuta COMPRUEBA. La última línea está comentada: descomenta, ejecuta, observa
     el error en consola y vuelve a comentarla.

COMPRUEBA
  console.log(dividir(10, 4));   // 2.5
  console.log(dividir(0, 5));    // 0
  console.log(dividir(-9, 3));   // -3
  // console.log(dividir(1, 0)); // lanza Error: 'Division por cero'

ESTO DEBE FALLAR
  // function mal(): never { return 1; }  → un never no puede devolver un valor.
  // function peor(): never { }  → un never no puede terminar con normalidad.

EXPLICA
  ¿Por qué return fallar(...) es válido en una función que devuelve number? ¿En qué
  se diferencia never de void?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 06 — Clasificar triángulos con dos funciones
/*
SITUACIÓN
  Con tres longitudes no siempre se puede formar un triángulo. Primero se decide si
  existe y, solo si existe, se clasifica. Cada decisión vive en su propia función.

QUÉ DEBES HACER
  1. Crea la función esTriangulo(a: number, b: number, c: number): boolean. Supón
     lados mayores que 0. Devuelve true solo si cada lado es MENOR que la suma de los
     otros dos: a < b + c, b < a + c y c < a + b.
  2. Crea la función tipoTriangulo(a: number, b: number, c: number): string. Dentro,
     en este orden:
     a) si esTriangulo(a, b, c) es false, devuelve 'invalido' (llama a esTriangulo;
        no repitas sus comparaciones);
     b) si los tres lados son iguales, devuelve 'equilatero';
     c) si al menos dos lados son iguales (cualquier pareja), devuelve 'isosceles';
     d) en otro caso devuelve 'escaleno'.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(esTriangulo(2, 3, 4));       // true
  console.log(tipoTriangulo(3, 4, 5));     // 'escaleno'
  console.log(tipoTriangulo(2, 2, 3));     // 'isosceles'
  console.log(tipoTriangulo(2, 3, 2));     // 'isosceles'
  console.log(tipoTriangulo(2, 2, 2));     // 'equilatero'
  console.log(tipoTriangulo(1, 2, 3));     // 'invalido'
  console.log(tipoTriangulo(5, 5, 10));    // 'invalido'
  console.log(tipoTriangulo(3, 1, 2));     // 'invalido'
  console.log(tipoTriangulo(1, 3, 2));     // 'invalido'

ESTO DEBE FALLAR
  // const ok: string = esTriangulo(2, 3, 4);  → devuelve boolean, no string.
  // tipoTriangulo(3, 4);  → faltan argumentos: los tres lados son obligatorios.

EXPLICA
  ¿Por qué (5, 5, 10) es 'invalido' aunque tenga dos lados iguales? ¿Qué pasaría si
  el paso a) se hiciera después del paso c)?
*/
(() => {
    // Tu solución.
})();

// TRAMO 2 — ARGUMENTOS OBLIGATORIOS Y OPCIONALES: EJERCICIOS 07 AL 12

// !EJERCICIO 07 — Promedio ponderado con todos los argumentos obligatorios
/*
SITUACIÓN
  Un profesor combina dos notas con pesos distintos. Sin los cuatro datos el cálculo
  no tiene sentido, así que todos los parámetros son obligatorios.

QUÉ DEBES HACER
  1. Crea la función promedioPonderado(nota1: number, peso1: number, nota2: number,
     peso2: number): number. Supón pesos >= 0. Ningún parámetro es opcional.
  2. Dentro, en este orden:
     a) calcula pesoTotal = peso1 + peso2;
     b) si pesoTotal es 0, devuelve 0 (así evitas dividir entre cero);
     c) devuelve (nota1 * peso1 + nota2 * peso2) / pesoTotal.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(promedioPonderado(8, 2, 10, 3));  // 9.2
  console.log(promedioPonderado(10, 1, 0, 1));  // 5
  console.log(promedioPonderado(7, 0, 9, 0));   // 0
  console.log(promedioPonderado(6, 0, 9, 4));   // 9
  console.log(promedioPonderado(5, 3, 5, 3));   // 5

ESTO DEBE FALLAR
  // promedioPonderado(8, 2, 10);  → faltan argumentos: el cuarto es obligatorio.
  // promedioPonderado(8, 2, 10, 3, 1);  → sobra un argumento.

EXPLICA
  ¿Por qué TypeScript rechaza las dos llamadas? ¿Qué devuelve la función cuando los
  dos pesos son 0 y por qué se decidió así?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 08 — Saludo con apellido opcional
/*
SITUACIÓN
  Un formulario siempre recibe el nombre, pero el apellido puede no venir o venir
  vacío. En ambos casos significa lo mismo: no hay apellido.

QUÉ DEBES HACER
  1. Crea la función saludo(nombre: string, apellido?: string): string. El signo ?
     va después del nombre del parámetro y apellido va después del obligatorio.
  2. Dentro, en este orden:
     a) si apellido es undefined o es '' (texto vacío), devuelve 'Hola, {nombre}';
     b) en otro caso devuelve 'Hola, {nombre} {apellido}'.
     Puedes resolver a) con apellido || '' (recuerda qué valores convierte el ||).
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(saludo('Ana', 'Paz'));  // 'Hola, Ana Paz'
  console.log(saludo('Ana'));         // 'Hola, Ana'
  console.log(saludo('Ana', ''));     // 'Hola, Ana'

ESTO DEBE FALLAR
  // saludo();  → nombre es obligatorio.
  // saludo('Ana', 5);  → apellido, si se envía, debe ser string.

EXPLICA
  ¿Qué valor tiene apellido dentro de la función cuando llamas saludo('Ana')? ¿Por
  qué el parámetro opcional va después del obligatorio?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 09 — Precio con cupón opcional y tope
/*
SITUACIÓN
  Una tienda aplica un cupón de descuento (un porcentaje) solo si el cliente lo
  presenta. El descuento nunca puede ser negativo ni superar el 50 %.

QUÉ DEBES HACER
  1. Crea la función descuento(precio: number, cupon?: number): number. Supón precio
     >= 0. cupon es un porcentaje.
  2. Dentro, en este orden:
     a) si cupon es undefined, devuelve precio sin cambios;
     b) si cupon es menor que 0, trátalo como 0;
     c) si cupon es mayor que 50, trátalo como 50;
     d) devuelve precio - precio * cupon / 100.
     Para b) y c) usa una variable local (let porcentaje: number = cupon) en lugar de
     modificar el parámetro.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(descuento(200));       // 200
  console.log(descuento(200, 25));   // 150
  console.log(descuento(200, 80));   // 100
  console.log(descuento(200, -5));   // 200
  console.log(descuento(200, 50));   // 100
  console.log(descuento(200, 0));    // 200
  console.log(descuento(80, 10));    // 72

ESTO DEBE FALLAR
  // descuento();  → precio es obligatorio.
  // descuento(200, '25');  → cupon, si se envía, debe ser number.

EXPLICA
  ¿Por qué en este ejercicio dan el mismo resultado no enviar cupon y enviar 0?
  ¿Qué tipo tiene cupon dentro de la función antes de comprobar si es undefined?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 10 — Iniciales con apellido opcional
/*
SITUACIÓN
  Un carné muestra las iniciales de una persona: la del nombre y, si existe, la del
  apellido. Cada inicial va en mayúscula y seguida de un punto.

QUÉ DEBES HACER
  1. Crea la función iniciales(nombre: string, apellido?: string): string. Supón
     nombre con al menos una letra.
  2. Dentro, en este orden:
     a) inicialNombre = nombre.charAt(0).toLocaleUpperCase();
     b) inicialApellido = (apellido || '').charAt(0).toLocaleUpperCase();
        (charAt(0) sobre un texto vacío devuelve '');
     c) si inicialApellido es '', devuelve '{inicialNombre}.';
     d) en otro caso devuelve '{inicialNombre}.{inicialApellido}.'.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(iniciales('ana', 'paz'));       // 'A.P.'
  console.log(iniciales('luis'));             // 'L.'
  console.log(iniciales('ana', ''));          // 'A.'
  console.log(iniciales('Zoe', 'van der'));   // 'Z.V.'
  console.log(iniciales('eva', 'x'));         // 'E.X.'

ESTO DEBE FALLAR
  // iniciales('ana', undefined, 'x');  → solo admite dos argumentos.
  // iniciales(5);  → nombre debe ser string.

EXPLICA
  ¿Qué evita (apellido || '') en el paso b)? ¿Qué devolvería charAt(0) si no
  existiera ese texto de respaldo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 11 — Nota mínima opcional (0 es un valor válido)
/*
SITUACIÓN
  Un examen se aprueba con 60 o más, pero algunos cursos fijan otro mínimo. Un mínimo
  de 0 es legítimo (todos aprueban), y no debe confundirse con «no enviaron mínimo».

QUÉ DEBES HACER
  1. Crea la función clasificar(nota: number, minimo?: number): string.
  2. Dentro, en este orden:
     a) si nota es menor que 0 o mayor que 100, devuelve 'invalida';
     b) crea let umbral: number = 60;
     c) si minimo NO es undefined, asigna minimo a umbral. No uses minimo || 60: con
        minimo igual a 0 ese || devolvería 60;
     d) si nota es mayor o igual que umbral, devuelve 'aprobado'; si no, 'reprobado'.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(clasificar(60));        // 'aprobado'
  console.log(clasificar(59));        // 'reprobado'
  console.log(clasificar(70, 75));    // 'reprobado'
  console.log(clasificar(75, 75));    // 'aprobado'
  console.log(clasificar(0, 0));      // 'aprobado'
  console.log(clasificar(0));         // 'reprobado'
  console.log(clasificar(100));       // 'aprobado'
  console.log(clasificar(101));       // 'invalida'
  console.log(clasificar(-1, 0));     // 'invalida'

ESTO DEBE FALLAR
  // clasificar();  → nota es obligatoria.
  // clasificar(70, null);  → minimo admite number o undefined, no null.

EXPLICA
  ¿Qué habría devuelto clasificar(0, 0) con minimo || 60 y por qué? ¿En qué se
  parece este caso a «lastName || 'No last name'» de los apuntes y en qué no?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 12 — Reserva de hotel con dos opcionales
/*
SITUACIÓN
  Un hotel cobra por noche. Desde el tercer huésped se paga un extra, y el desayuno
  y el estacionamiento son opcionales: si no se envían, no se contratan.

QUÉ DEBES HACER
  1. Crea la función reservar(huespedes: number, noches: number, desayuno?: boolean,
     parking?: boolean): number. Supón huespedes y noches enteros >= 1.
  2. Dentro, en este orden, con let costo: number:
     a) costo empieza en noches * 40;
     b) si huespedes es mayor que 2, suma (huespedes - 2) * noches * 10;
     c) si desayuno es true, suma huespedes * noches * 5;
     d) si parking es true, suma noches * 8;
     e) devuelve costo.
     undefined y false significan lo mismo: no se contrata.
  3. Ejecuta COMPRUEBA. En la 4.ª línea se envía undefined para saltar desayuno.

COMPRUEBA
  console.log(reservar(2, 3));                     // 120
  console.log(reservar(4, 2));                     // 120
  console.log(reservar(2, 1, true));               // 50
  console.log(reservar(3, 2, undefined, true));    // 116
  console.log(reservar(2, 2, false, true));        // 96
  console.log(reservar(1, 1));                     // 40
  console.log(reservar(5, 1, true, true));         // 103

ESTO DEBE FALLAR
  // reservar(2, 3, 'si');  → desayuno, si se envía, debe ser boolean.
  // function mal(a?: number, b: number): number { return b; }  → un parámetro
  //   obligatorio no puede ir después de uno opcional.

EXPLICA
  ¿Por qué reservar(3, 2, undefined, true) es válido? ¿Por qué mal() no compila?
*/
(() => {
    // Tu solución.
})();

// TRAMO 3 — PARÁMETROS POR DEFECTO: EJERCICIOS 13 AL 18

// !EJERCICIO 13 — Recargo con porcentaje por defecto
/*
SITUACIÓN
  Un pago atrasado lleva un recargo del 10 % salvo que se indique otro porcentaje.
  Un porcentaje de 0 es válido y significa «sin recargo».

QUÉ DEBES HACER
  1. Crea la función recargo(monto: number, porcentaje: number = 10): number. Supón
     monto >= 0 y porcentaje >= 0.
  2. Devuelve monto + monto * porcentaje / 100.
  3. Ejecuta COMPRUEBA. La 4.ª línea envía undefined de forma explícita.

COMPRUEBA
  console.log(recargo(200));              // 220
  console.log(recargo(200, 25));          // 250
  console.log(recargo(200, 0));           // 200
  console.log(recargo(200, undefined));   // 220
  console.log(recargo(50, 100));          // 100

ESTO DEBE FALLAR
  // recargo();  → monto es obligatorio.
  // recargo(200, '25');  → porcentaje debe ser number.

EXPLICA
  ¿Por qué no hace falta escribir ? en porcentaje? ¿Qué valor recibe porcentaje en
  recargo(200, undefined) y en recargo(200, 0)?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 14 — Formato de precio con símbolo y decimales por defecto
/*
SITUACIÓN
  Una tienda muestra precios como '$5.00'. El símbolo y la cantidad de decimales
  tienen valores habituales, pero se pueden cambiar. Los negativos llevan el signo
  antes del símbolo.

QUÉ DEBES HACER
  1. Crea la función formatoPrecio(valor: number, simbolo: string = '$',
     decimales: number = 2): string. Supón decimales entero entre 0 y 4.
  2. Dentro, en este orden:
     a) signo: '-' si valor es menor que 0 y '' en otro caso;
     b) absoluto: let absoluto: number = valor; si valor es menor que 0, asigna
        valor * -1;
     c) devuelve '{signo}{simbolo}{absoluto con los decimales indicados}'. Para fijar
        decimales usa absoluto.toFixed(decimales), que devuelve un string.
  3. Ejecuta COMPRUEBA. En la 4.ª línea se envía undefined para conservar el símbolo.

COMPRUEBA
  console.log(formatoPrecio(5));                    // '$5.00'
  console.log(formatoPrecio(5, 'EUR ', 0));         // 'EUR 5'
  console.log(formatoPrecio(-5));                   // '-$5.00'
  console.log(formatoPrecio(3, undefined, 1));      // '$3.0'
  console.log(formatoPrecio(0));                    // '$0.00'
  console.log(formatoPrecio(-2.5, 'S/', 1));        // '-S/2.5'
  console.log(formatoPrecio(1234.5));               // '$1234.50'

ESTO DEBE FALLAR
  // formatoPrecio(5, 2);  → simbolo debe ser string.
  // formatoPrecio('5');  → valor debe ser number.

EXPLICA
  ¿Cómo conservas el símbolo por defecto y cambias solo los decimales? ¿Por qué se
  usa el valor absoluto antes de toFixed?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 15 — Nombre completo: un opcional y un valor por defecto juntos
/*
SITUACIÓN
  Un sistema muestra nombres completos. El apellido es opcional y, si falta, se
  muestra 'Sin apellido'. Un tercer parámetro, con valor por defecto, decide si el
  resultado se pasa a mayúsculas.

QUÉ DEBES HACER
  1. Crea la función nombreCompleto(nombre: string, apellido?: string,
     mayusculas: boolean = false): string.
  2. Dentro, en este orden:
     a) texto = el nombre, un espacio y el apellido; si apellido es undefined o '' (texto
        vacío), en su lugar va 'Sin apellido' (apellido || 'Sin apellido');
     b) si mayusculas es true, asigna a texto texto.toLocaleUpperCase();
     c) devuelve texto.
     Declara texto con let.
  3. Ejecuta COMPRUEBA. Las líneas 4 y 5 envían undefined para saltar apellido.

COMPRUEBA
  console.log(nombreCompleto('Tony'));                       // 'Tony Sin apellido'
  console.log(nombreCompleto('Tony', 'Stark'));              // 'Tony Stark'
  console.log(nombreCompleto('Tony', 'Stark', true));        // 'TONY STARK'
  console.log(nombreCompleto('Tony', undefined, true));      // 'TONY SIN APELLIDO'
  console.log(nombreCompleto('Tony', undefined, false));     // 'Tony Sin apellido'
  console.log(nombreCompleto('Tony', ''));                   // 'Tony Sin apellido'

ESTO DEBE FALLAR
  // nombreCompleto('Tony', 'Stark', 'si');  → mayusculas debe ser boolean.
  // nombreCompleto();  → nombre es obligatorio.

EXPLICA
  ¿Por qué hay que enviar undefined en la 4.ª línea? ¿Qué valor toma mayusculas
  cuando no se envía?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 16 — Costo de envío con reglas y valores por defecto
/*
SITUACIÓN
  Una paquetería cobra según la zona, el peso y si el envío es exprés. Lo más
  común es un envío normal a la zona 1, así que esos valores van por defecto.

QUÉ DEBES HACER
  1. Crea la función envio(peso: number, expres: boolean = false, zona: number = 1):
     number. Supón peso > 0 y zona entero >= 1.
  2. Dentro, en este orden, con let costo: number:
     a) costo empieza en 10 * zona;
     b) si peso es MAYOR que 5 (5 exacto no cuenta), suma (peso - 5) * 2;
     c) si expres es true, multiplica el costo acumulado por 2 (incluye el recargo
        por peso del paso b);
     d) devuelve costo.
  3. Ejecuta COMPRUEBA. La línea 6 envía undefined para conservar expres y cambiar
     solo zona.

COMPRUEBA
  console.log(envio(4));                    // 10
  console.log(envio(5));                    // 10
  console.log(envio(8));                    // 16
  console.log(envio(8, true));              // 32
  console.log(envio(3, false, 3));          // 30
  console.log(envio(8, undefined, 2));      // 26
  console.log(envio(7, true, 2));           // 48

ESTO DEBE FALLAR
  // envio(4, 'si');  → expres debe ser boolean.
  // envio(4, false, '2');  → zona debe ser number.

EXPLICA
  ¿Cuántos argumentos mínimos exige envio? ¿Por qué envio(8, 2) no compila y
  envio(8, undefined, 2) sí?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 17 — Contar valores sobre un límite
/*
SITUACIÓN
  Un sensor entrega una lista de lecturas. Se quiere saber cuántas superan un
  límite; por defecto el límite es 0 y la comparación es estricta (mayor que), pero
  se puede pedir que el límite también cuente (mayor o igual).

QUÉ DEBES HACER
  1. Crea la función contarSobre(valores: number[], limite: number = 0,
     inclusivo: boolean = false): number.
  2. Dentro, en este orden:
     a) crea let contador: number = 0;
     b) recorre valores con forEach: si inclusivo es true cuenta el valor cuando es
        mayor o igual que limite; si es false, cuando es mayor que limite;
     c) devuelve contador.
  3. Ejecuta COMPRUEBA; su primera línea crea el array lecturas que usan las demás.

COMPRUEBA
  const lecturas: number[] = [5, 0, -3, 8, 0];
  console.log(contarSobre(lecturas));                  // 2
  console.log(contarSobre(lecturas, undefined, true)); // 4
  console.log(contarSobre(lecturas, 5));               // 1
  console.log(contarSobre(lecturas, 5, true));         // 2
  console.log(contarSobre([], 3));                     // 0
  console.log(contarSobre([-1, -2], -2));              // 1
  console.log(contarSobre([-1, -2], -2, true));        // 2

ESTO DEBE FALLAR
  // contarSobre(5);  → valores debe ser un array de number.
  // contarSobre(lecturas, 'cinco');  → limite debe ser number.

EXPLICA
  ¿Por qué contarSobre(lecturas) da 2 y contarSobre(lecturas, undefined, true) da 4?
  ¿Qué cuenta contarSobre([-1, -2], -2) y por qué cambia el resultado con true?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 18 — Precio de entrada con enum y día por defecto
/*
SITUACIÓN
  Un cine cobra 50 de entrada. Niños (menores de 12) y adultos mayores (65 o más)
  pagan 25. Sábado y domingo se suman 20. Si no se indica el día, se asume lunes.

QUÉ DEBES HACER
  1. Crea el enum Dia con valores numéricos explícitos: Lunes = 1, Martes = 2,
     Miercoles = 3, Jueves = 4, Viernes = 5, Sabado = 6, Domingo = 7.
  2. Crea la función precioEntrada(edad: number, dia: Dia = Dia.Lunes): number.
     Supón edad entero >= 0. Dentro, en este orden, con let precio: number:
     a) precio empieza en 50;
     b) si edad es menor que 12 o es 65 o más, asigna 25;
     c) si dia es mayor o igual que Dia.Sabado, suma 20;
     d) devuelve precio.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(precioEntrada(30));                  // 50
  console.log(precioEntrada(30, Dia.Sabado));      // 70
  console.log(precioEntrada(10, Dia.Domingo));     // 45
  console.log(precioEntrada(65, Dia.Viernes));     // 25
  console.log(precioEntrada(11));                  // 25
  console.log(precioEntrada(12));                  // 50
  console.log(precioEntrada(64, Dia.Sabado));      // 70

ESTO DEBE FALLAR
  // precioEntrada(30, 'sabado');  → dia debe ser un valor de Dia.
  // precioEntrada(30, 9);  → 9 no es un valor del enum Dia.

EXPLICA
  ¿Por qué funciona la comparación dia >= Dia.Sabado? ¿Qué valor toma dia en
  precioEntrada(30)?
*/
(() => {
    // Tu solución.
})();

// TRAMO 4 — PARÁMETROS REST: EJERCICIOS 19 AL 24

// !EJERCICIO 19 — Promedio de notas válidas
/*
SITUACIÓN
  Un profesor ingresa una cantidad variable de notas, pero algunas pueden venir mal
  escritas. Solo cuentan las notas entre 0 y 10 (ambos incluidos).

QUÉ DEBES HACER
  1. Crea la función promedio(...notas: number[]): number. El parámetro rest recibe
     todos los argumentos en un array llamado notas.
  2. Dentro, en este orden:
     a) crea let suma: number = 0 y let validas: number = 0;
     b) recorre notas con forEach: si la nota es mayor o igual que 0 y menor o igual
        que 10, súmala a suma y suma 1 a validas;
     c) si validas es 0, devuelve 0;
     d) devuelve suma / validas.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(promedio(8, 10, 6));       // 8
  console.log(promedio(7, 11, -1, 9));   // 8
  console.log(promedio());               // 0
  console.log(promedio(11));             // 0
  console.log(promedio(0, 10));          // 5
  console.log(promedio(10));             // 10

ESTO DEBE FALLAR
  // promedio([8, 9]);  → cada argumento debe ser number; un array no lo es.
  // promedio('8');  → los argumentos deben ser number.

EXPLICA
  ¿Qué contiene notas en promedio() y qué evita el paso c)? ¿Por qué 0 y 10 se
  aceptan?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 20 — Unir partes con un separador
/*
SITUACIÓN
  Se arma una dirección o un nombre a partir de partes sueltas. Las partes vacías
  se descartan para que no queden separadores de más.

QUÉ DEBES HACER
  1. Crea la función unir(separador: string, ...partes: string[]): string. Solo
     partes es rest; separador es un parámetro normal y va antes.
  2. Dentro, en este orden:
     a) crea const validas: string[] = [];
     b) recorre partes con forEach y agrega a validas, con push, cada parte que no
        sea '' (texto vacío);
     c) devuelve validas.join(separador).
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(unir('-', 'a', 'b', 'c'));      // 'a-b-c'
  console.log(unir(' ', 'Ana', '', 'Paz'));   // 'Ana Paz'
  console.log(unir(','));                     // ''
  console.log(unir('-', '', ''));             // ''
  console.log(unir('+', 'x'));                // 'x'
  console.log(unir('', 'a', 'b'));            // 'ab'

ESTO DEBE FALLAR
  // unir(1, 'a');  → separador debe ser string.
  // unir('-', 'a', 2);  → las partes deben ser string.

EXPLICA
  ¿Por qué separador no puede ir después de ...partes? ¿Cuántos elementos tiene
  partes en la llamada unir(',')?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 21 — Resumen con mínimo y máximo (devuelve una tupla)
/*
SITUACIÓN
  Un análisis recibe cualquier cantidad de números y devuelve tres datos juntos: cuántos
  llegaron, el menor y el mayor. Si no llega ninguno, los tres datos son 0.

QUÉ DEBES HACER
  1. Crea la función resumen(...valores: number[]): [number, number, number]. Devuelve
     una tupla en este orden: [cantidad, minimo, maximo].
  2. Dentro, en este orden:
     a) const primero = valores[0]; (su tipo es number | undefined);
     b) si primero es undefined, devuelve [0, 0, 0];
     c) crea let minimo: number = primero y let maximo: number = primero;
     d) recorre valores con forEach: si un valor es menor que minimo, asígnalo a
        minimo; si es mayor que maximo, asígnalo a maximo;
     e) devuelve [valores.length, minimo, maximo].
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(resumen(7, 3, 9, 5));   // [ 4, 3, 9 ]
  console.log(resumen(6));            // [ 1, 6, 6 ]
  console.log(resumen());             // [ 0, 0, 0 ]
  console.log(resumen(-1, -5));       // [ 2, -5, -1 ]
  console.log(resumen(2, 2, 2));      // [ 3, 2, 2 ]

ESTO DEBE FALLAR
  // const r: [number, number] = resumen(1);  → resumen devuelve una tupla de tres.
  // resumen('a');  → los argumentos deben ser number.

EXPLICA
  ¿Por qué hay que comprobar primero === undefined antes de crear minimo? ¿Por qué
  no sirve empezar con let minimo = 0?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 22 — Ruta con escalas
/*
SITUACIÓN
  Un viaje tiene un origen, un destino y cualquier cantidad de escalas intermedias.
  Una escala vacía, o igual al origen o al destino, no se muestra.

QUÉ DEBES HACER
  1. Crea la función armarRuta(origen: string, destino: string, ...escalas: string[]):
     string.
  2. Dentro, en este orden:
     a) crea const tramos: string[] = [origen];
     b) recorre escalas con forEach y agrega a tramos, con push, cada escala que no
        sea '' ni igual a origen ni igual a destino. Las demás escalas se conservan en
        el orden recibido, aunque se repitan entre sí;
     c) agrega destino al final de tramos;
     d) devuelve tramos.join(' > ').
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(armarRuta('Lima', 'Cusco'));                                 // 'Lima > Cusco'
  console.log(armarRuta('Lima', 'Cusco', 'Arequipa', 'Puno'));             // 'Lima > Arequipa > Puno > Cusco'
  console.log(armarRuta('Lima', 'Cusco', 'Lima', '', 'Cusco', 'Ica'));     // 'Lima > Ica > Cusco'
  console.log(armarRuta('A', 'B', 'C', 'C'));                              // 'A > C > C > B'

ESTO DEBE FALLAR
  // armarRuta('Lima');  → destino es obligatorio.
  // armarRuta('Lima', 'Cusco', 5);  → las escalas deben ser string.

EXPLICA
  ¿Cuántos parámetros normales hay antes del rest y por qué importa el orden?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 23 — Cobro en caja con productos variables
/*
SITUACIÓN
  Una caja recibe lo que paga el cliente y el precio de cada producto, que puede ser
  cualquier cantidad. Responde si alcanza, cuánto falta o cuánto es el cambio.

QUÉ DEBES HACER
  1. Crea la función cobrar(pago: number, ...precios: number[]): string. Supón pago
     >= 0 y precios > 0.
  2. Dentro, en este orden:
     a) si no llegó ningún precio (precios.length es 0), devuelve 'Sin productos';
     b) calcula total sumando los precios con forEach;
     c) si pago es menor que total, devuelve 'Faltan {total - pago}';
     d) en otro caso devuelve 'Cambio {pago - total}'.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(cobrar(50, 10, 15, 5));   // 'Cambio 20'
  console.log(cobrar(30, 10, 15, 6));   // 'Faltan 1'
  console.log(cobrar(20, 20));          // 'Cambio 0'
  console.log(cobrar(100));             // 'Sin productos'
  console.log(cobrar(0, 5));            // 'Faltan 5'
  console.log(cobrar(0));               // 'Sin productos'

ESTO DEBE FALLAR
  // cobrar();  → pago es obligatorio.
  // cobrar(50, '10');  → los precios deben ser number.

EXPLICA
  ¿Qué primer argumento recibe pago y cuáles recibe precios en
  cobrar(50, 10, 15, 5)? ¿Por qué cobrar(20, 20) devuelve 'Cambio 0' y no 'Faltan 0'?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 24 — Producto más vendido (rest de tuplas)
/*
SITUACIÓN
  Cada venta es una pareja [producto, cantidad]. Se reciben las ventas que sean, con
  el mismo producto repetido varias veces, y se quiere el producto con más unidades.

QUÉ DEBES HACER
  1. Crea la función registrarVentas(...ventas: [string, number][]): string. Cada
     argumento es una tupla [string, number].
  2. Dentro, en este orden:
     a) crea const totales: [string, number][] = [];
     b) recorre ventas con forEach. Si la cantidad (posición 1) es 0 o negativa, ignora
        la venta. Si no: crea let encontrado: boolean = false; recorre totales con
        otro forEach y, si algún total tiene el mismo producto (posición 0), suma la
        cantidad a su posición 1 y pon encontrado en true; si al terminar ese recorrido
        encontrado sigue en false, agrega la venta con push([producto, cantidad]);
     c) si totales está vacío, devuelve 'Sin ventas';
     d) busca el total con mayor cantidad. En un empate gana el que apareció primero
        (solo reemplazas al mejor cuando otro es ESTRICTAMENTE mayor);
     e) devuelve '{producto}: {cantidad}'.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(registrarVentas(['pan', 3], ['leche', 2], ['pan', 4]));          // 'pan: 7'
  console.log(registrarVentas(['te', 5], ['cafe', 5]));                        // 'te: 5'
  console.log(registrarVentas(['pan', 0], ['sal', -2]));                       // 'Sin ventas'
  console.log(registrarVentas());                                              // 'Sin ventas'
  console.log(registrarVentas(['a', 1], ['b', 2], ['a', 1], ['b', 1]));        // 'b: 3'
  console.log(registrarVentas(['a', 2], ['b', 1], ['b', 1]));                  // 'a: 2'

ESTO DEBE FALLAR
  // registrarVentas(['pan', '3']);  → la cantidad debe ser number.
  // registrarVentas(['pan']);  → cada venta es una tupla de dos elementos.

EXPLICA
  ¿Qué papel cumple la bandera encontrado? ¿Por qué la última línea devuelve 'a: 2'
  aunque 'b' también suma 2?
*/
(() => {
    // Tu solución.
})();

// TRAMO 5 — TIPO FUNCIÓN: EJERCICIOS 25 AL 30

// !EJERCICIO 25 — Una variable que guarda operaciones
/*
SITUACIÓN
  Una calculadora guarda en una sola variable la operación activa. La variable solo
  puede almacenar funciones que reciban dos números y devuelvan un número.

QUÉ DEBES HACER
  1. Crea tres funciones flecha en forma acortada, cada una con (x: number,
     y: number) y retorno number: suma, resta y producto.
  2. Crea la función flecha maximo con llaves: (x: number, y: number): number. Dentro,
     con if, devuelve el mayor de los dos (si son iguales, devuelve cualquiera).
  3. Crea let operacion: (x: number, y: number) => number; sin valor inicial.
  4. Ejecuta COMPRUEBA: asigna una función a operacion y llámala. Las asignaciones
     forman parte de las líneas de COMPRUEBA.

COMPRUEBA
  operacion = suma;
  console.log(operacion(8, 3));    // 11
  operacion = resta;
  console.log(operacion(8, 3));    // 5
  operacion = producto;
  console.log(operacion(8, 3));    // 24
  operacion = maximo;
  console.log(operacion(8, 3));    // 8
  console.log(operacion(2, 9));    // 9
  console.log(operacion(4, 4));    // 4

ESTO DEBE FALLAR
  // operacion = (nombre: string): string => nombre;  → recibe string y devuelve string.
  // operacion = () => 'listo';  → devuelve string, no number.
  // operacion(1);  → la firma exige dos argumentos.

EXPLICA
  ¿Qué dice la firma (x: number, y: number) => number sobre las funciones que
  acepta? ¿Qué aporta eso frente al tipo Function?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 26 — Elegir un saludo con el tipo Function
/*
SITUACIÓN
  Según la hora del día se saluda de una forma. Una función decide cuál saludo usar y
  devuelve la función correspondiente; el resultado se guarda en una variable de tipo
  Function.

QUÉ DEBES HACER
  1. Crea tres funciones flecha, cada una con (nombre: string): string:
     buenosDias → 'Buenos dias, {nombre}'; buenasTardes → 'Buenas tardes, {nombre}';
     buenasNoches → 'Buenas noches, {nombre}'.
  2. Crea la función elegirSaludo(hora: number): Function. Supón hora entero entre 0
     y 23. Dentro, en este orden:
     a) si hora es menor que 6, devuelve buenasNoches;
     b) si hora es menor que 12, devuelve buenosDias;
     c) si hora es menor que 19, devuelve buenasTardes;
     d) en otro caso devuelve buenasNoches.
     Devuelves la función SIN llamarla (sin paréntesis).
  3. Crea let accion: Function; y ejecuta COMPRUEBA: asigna elegirSaludo(...) a accion
     y llama accion('Ana').

COMPRUEBA
  let accion: Function;
  accion = elegirSaludo(5);
  console.log(accion('Ana'));   // 'Buenas noches, Ana'
  accion = elegirSaludo(6);
  console.log(accion('Ana'));   // 'Buenos dias, Ana'
  accion = elegirSaludo(12);
  console.log(accion('Ana'));   // 'Buenas tardes, Ana'
  accion = elegirSaludo(18);
  console.log(accion('Ana'));   // 'Buenas tardes, Ana'
  accion = elegirSaludo(19);
  console.log(accion('Ana'));   // 'Buenas noches, Ana'

ESTO DEBE FALLAR
  // accion = 10;  → 10 no es una función.
  // accion = 'hola';  → un string no es una función.

EXPLICA
  ¿Qué información sobre accion no conoce TypeScript por ser de tipo Function?
  ¿Qué diferencia hay entre devolver buenosDias y devolver buenosDias('Ana')?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 27 — Contar con una regla recibida como parámetro
/*
SITUACIÓN
  Una función recorre una lista y cuenta los elementos que cumplan una condición. La
  condición no está fija: llega como una función en el segundo parámetro.

QUÉ DEBES HACER
  1. Crea la función contarSi(valores: number[], regla: (n: number) => boolean):
     number. El tipo de regla es una firma: recibe un number y devuelve boolean.
  2. Dentro: crea let contador: number = 0; recorre valores con forEach; por cada
     valor llama regla(valor) y, si da true, suma 1 a contador; devuelve contador.
  3. Ejecuta COMPRUEBA. Las reglas se escriben como flechas directamente en la llamada
     y, en la última línea, como una función guardada en una constante.

COMPRUEBA
  console.log(contarSi([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0));   // 3
  console.log(contarSi([1, 2, 3, 4, 5, 6], (n) => n > 4));         // 2
  console.log(contarSi([], (n) => n > 0));                         // 0
  const esNegativo = (n: number): boolean => n < 0;
  console.log(contarSi([-1, 0, 3, -7], esNegativo));               // 2

ESTO DEBE FALLAR
  // contarSi([1, 2], (n: string) => true);  → la regla debe recibir un number.
  // contarSi([1, 2], (n) => n * 2);  → la regla debe devolver boolean, no number.

EXPLICA
  ¿Cómo sabe TypeScript que n es number en (n) => n > 4? ¿Qué cambia entre las tres
  primeras líneas de COMPRUEBA aunque contarSi sea la misma?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 28 — Calculadora con tabla de operaciones
/*
SITUACIÓN
  Una calculadora guarda sus operaciones en una tabla de parejas [nombre, función] y
  las busca por nombre. Una operación desconocida o una división entre cero no tienen
  resultado y devuelven null.

QUÉ DEBES HACER
  1. Crea cuatro funciones flecha en forma acortada, cada una con (x: number,
     y: number) y retorno number: suma, resta, mult y div (x / y).
  2. Crea const operaciones: [string, (x: number, y: number) => number][] con cuatro
     parejas: ['suma', suma], ['resta', resta], ['mult', mult], ['div', div].
  3. Crea la función calcular(nombre: string, x: number, y: number): number | null.
     Dentro, en este orden:
     a) si nombre es 'div' e y es 0, devuelve null;
     b) crea let resultado: number | null = null;
     c) recorre operaciones con forEach; si la posición 0 de la pareja es igual a
        nombre, asigna a resultado la llamada a la función de la posición 1 con x e y;
     d) devuelve resultado (sigue siendo null si el nombre no existe).
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(calcular('suma', 4, 3));    // 7
  console.log(calcular('resta', 4, 3));   // 1
  console.log(calcular('mult', 4, 3));    // 12
  console.log(calcular('div', 12, 4));    // 3
  console.log(calcular('div', 1, 0));     // null
  console.log(calcular('pot', 2, 3));     // null
  console.log(calcular('resta', 3, 4));   // -1
  console.log(calcular('div', 0, 5));     // 0

ESTO DEBE FALLAR
  // operaciones.push(['pot', (x: string) => x]);  → la función debe recibir y
  //   devolver number.
  // calcular('suma', 1);  → y es obligatorio.

EXPLICA
  ¿Por qué resultado se declara como number | null? ¿Qué obtiene un llamador que
  escribe const r: number = calcular('suma', 1, 2);?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 29 — Convertir temperaturas eligiendo una función
/*
SITUACIÓN
  Una función convierte grados Celsius a otra escala. Según la letra de la escala
  guarda en una variable la función conversora adecuada y luego la usa.

QUÉ DEBES HACER
  1. Crea dos funciones flecha en forma acortada, cada una con (c: number): number:
     aFahrenheit (c * 9 / 5 + 32) y aKelvin (c + 273).
  2. Crea la función describir(grados: number, escala: string): string. Dentro, en este
     orden:
     a) declara let conversor: (c: number) => number; sin valor inicial;
     b) si escala es 'F', asigna aFahrenheit; si es 'K', asigna aKelvin; en otro caso
        devuelve 'escala desconocida' (comparación exacta; 'f' no es 'F');
     c) devuelve '{conversor(grados)}{escala}'.
     TypeScript exige que conversor tenga valor en cada camino que llega al paso c).
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(describir(100, 'F'));   // '212F'
  console.log(describir(0, 'F'));     // '32F'
  console.log(describir(0, 'K'));     // '273K'
  console.log(describir(25, 'F'));    // '77F'
  console.log(describir(-40, 'F'));   // '-40F'
  console.log(describir(10, 'X'));    // 'escala desconocida'
  console.log(describir(10, 'f'));    // 'escala desconocida'

ESTO DEBE FALLAR
  // let otra: (c: number) => number = (texto: string): string => texto;  → la firma
  //   no coincide con la función asignada.
  // aKelvin('20');  → aKelvin recibe un number.

EXPLICA
  ¿Qué error daría TypeScript si en el paso b) olvidaras el else final? ¿Por qué
  conversor puede guardar tanto aFahrenheit como aKelvin?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 30 — Elegir la tarifa por peso (una función devuelve otra)
/*
SITUACIÓN
  Un servicio de mensajería tiene tres fórmulas de tarifa según el peso del paquete.
  Una función elige la fórmula y otra la aplica. El tipo de la función elegida se
  escribe como firma en el retorno.

QUÉ DEBES HACER
  1. Crea tres funciones flecha en forma acortada, cada una con (kg: number): number:
     tarifaLiviana → kg * 5; tarifaMedia → 10 + kg * 3;
     tarifaPesada → 45 + (kg - 10) * 2.
  2. Crea la función elegirTarifa(peso: number): (kg: number) => number. Supón peso >
     0. Devuelve la función SIN llamarla:
     a) si peso es 2 o menos, tarifaLiviana;
     b) si peso es 10 o menos, tarifaMedia;
     c) en otro caso tarifaPesada.
  3. Crea la función costoEnvio(peso: number): number que obtiene la tarifa con
     elegirTarifa(peso), la guarda en una constante y devuelve el resultado de llamarla
     con peso.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(costoEnvio(1));                        // 5
  console.log(costoEnvio(2));                        // 10
  console.log(costoEnvio(3));                        // 19
  console.log(costoEnvio(10));                       // 40
  console.log(costoEnvio(11));                       // 47
  console.log(costoEnvio(0.5));                      // 2.5
  console.log(elegirTarifa(5) === tarifaMedia);      // true

ESTO DEBE FALLAR
  // const t: (kg: number) => string = tarifaMedia;  → tarifaMedia devuelve number.
  // elegirTarifa('3');  → peso debe ser number.

EXPLICA
  ¿Por qué la última línea de COMPRUEBA da true? ¿Qué cambiaría si escribieras
  return tarifaMedia(peso) en lugar de return tarifaMedia?
*/
(() => {
    // Tu solución.
})();

// TRAMO 6 — COMBINAN VARIAS SUBSECCIONES: EJERCICIOS 31 AL 38

// !EJERCICIO 31 — Rangos con tupla por defecto y rango opcional
/*
SITUACIÓN
  Una función decide si un número está dentro de un rango [mínimo, máximo]; si no
  se indica rango, usa [0, 100]. Otra cuenta cuántos valores de una lista están en
  el rango, y su rango puede no enviarse.

QUÉ DEBES HACER
  1. Crea la función dentroDeRango(valor: number, rango: [number, number] = [0, 100]):
     boolean. El valor por defecto es una tupla. Dentro, en este orden:
     a) si rango[0] es mayor que rango[1] (rango invertido), devuelve false;
     b) devuelve true solo si valor es mayor o igual que rango[0] y menor o igual que
        rango[1] (ambos extremos incluidos).
  2. Crea la función contarEnRango(valores: number[], rango?: [number, number]):
     number. Recorre valores con forEach y cuenta los que cumplan
     dentroDeRango(valor, rango). Pasa rango tal cual, sin if: cuando rango es
     undefined, el valor por defecto de dentroDeRango se activa solo.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(dentroDeRango(50));                // true
  console.log(dentroDeRango(100));               // true
  console.log(dentroDeRango(101));               // false
  console.log(dentroDeRango(0));                 // true
  console.log(dentroDeRango(-1));                // false
  console.log(dentroDeRango(5, [10, 20]));       // false
  console.log(dentroDeRango(10, [10, 20]));      // true
  console.log(dentroDeRango(20, [10, 20]));      // true
  console.log(dentroDeRango(21, [10, 20]));      // false
  console.log(dentroDeRango(15, [20, 10]));      // false
  console.log(dentroDeRango(5, [5, 5]));         // true
  console.log(contarEnRango([5, 50, 100, 150, -1]));        // 3
  console.log(contarEnRango([5, 50, 100], [10, 60]));       // 1
  console.log(contarEnRango([], [0, 1]));                   // 0
  console.log(contarEnRango([10, 20], [20, 10]));           // 0

ESTO DEBE FALLAR
  // dentroDeRango(5, [1, 2, 3]);  → la tupla tiene exactamente dos elementos.
  // dentroDeRango(5, [1]);  → faltan elementos en la tupla.

EXPLICA
  ¿Qué recibe rango dentro de dentroDeRango cuando contarEnRango le pasa undefined?
  ¿Por qué no hace falta un if en contarEnRango?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 32 — Día del año con un calendario
/*
SITUACIÓN
  Se quiere saber qué número de día del año es una fecha (1 de enero = 1). Hay que
  conocer cuántos días tiene cada mes, incluido febrero en años bisiestos, y rechazar
  las fechas imposibles devolviendo null.

QUÉ DEBES HACER
  1. Crea la flecha esBisiesto(anio: number): boolean en forma acortada: true si el año
     es divisible entre 4 y (no lo es entre 100 o sí lo es entre 400).
  2. Crea la función diasDelMes(mes: number, anio: number): number | null. Supón mes y
     anio enteros. Dentro, en este orden:
     a) crea const dias: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
     b) const base = dias[mes - 1]; (su tipo es number | undefined);
     c) si base es undefined (mes 0, 13, negativo...), devuelve null;
     d) si mes es 2 y esBisiesto(anio) es true, devuelve 29;
     e) devuelve base.
  3. Crea la función diaDelAnio(dia: number, mes: number, anio: number): number |
     null. Supón enteros. Dentro, en este orden:
     a) const maximo = diasDelMes(mes, anio);
     b) si maximo es null, o dia es menor que 1, o dia es mayor que maximo, devuelve
        null;
     c) crea let total: number = 0 y const meses: number[] = [1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, 12];
     d) recorre meses con forEach: si el número de mes es menor que mes, obtén
        diasDelMes(m, anio) en una constante y, si no es null, súmala a total;
     e) devuelve total + dia.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(diasDelMes(2, 2024));          // 29
  console.log(diasDelMes(2, 2023));          // 28
  console.log(diasDelMes(2, 1900));          // 28
  console.log(diasDelMes(2, 2000));          // 29
  console.log(diasDelMes(4, 2023));          // 30
  console.log(diasDelMes(12, 2023));         // 31
  console.log(diasDelMes(0, 2023));          // null
  console.log(diasDelMes(13, 2023));         // null
  console.log(diaDelAnio(1, 1, 2023));       // 1
  console.log(diaDelAnio(1, 3, 2024));       // 61
  console.log(diaDelAnio(1, 3, 2023));       // 60
  console.log(diaDelAnio(31, 12, 2023));     // 365
  console.log(diaDelAnio(31, 12, 2024));     // 366
  console.log(diaDelAnio(30, 2, 2024));      // null
  console.log(diaDelAnio(29, 2, 2023));      // null
  console.log(diaDelAnio(15, 13, 2023));     // null
  console.log(diaDelAnio(0, 5, 2023));       // null

ESTO DEBE FALLAR
  // const n: number = diasDelMes(2, 2024);  → el resultado puede ser null.
  // diasDelMes(2);  → anio es obligatorio.

EXPLICA
  ¿Por qué dias[mes - 1] puede ser undefined y qué hace el paso c) con eso? ¿Por qué
  diaDelAnio debe comprobar también que diasDelMes no sea null al sumar?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 33 — Canalizar un valor por una cadena de pasos
/*
SITUACIÓN
  Un valor inicial pasa por una cantidad variable de pasos; cada paso es una función
  que transforma el valor. Si un paso deja el valor negativo, se detiene la cadena y
  ese negativo es el resultado.

QUÉ DEBES HACER
  1. Crea la función canalizar(valor: number, ...pasos: ((n: number) => number)[]):
     number. El rest es un array de funciones: los paréntesis extra en
     ((n: number) => number)[] indican «array de funciones».
  2. Dentro, en este orden:
     a) crea let actual: number = valor y let detenido: boolean = false;
     b) recorre pasos con forEach: si detenido es false (escribe if (!detenido)),
        asigna a actual el resultado de llamar al paso con actual; y si actual quedó
        menor que 0, pon detenido en true;
     c) devuelve actual.
     El valor inicial no se revisa: solo importa lo que dejan los pasos.
  3. Ejecuta COMPRUEBA. Cada paso se escribe como flecha directamente en la llamada.

COMPRUEBA
  console.log(canalizar(4, (n) => n + 1, (n) => n * 3));        // 15
  console.log(canalizar(5));                                    // 5
  console.log(canalizar(2, (n) => n - 5, (n) => n * 100));      // -3
  console.log(canalizar(10, (n) => n - 10, (n) => n + 7));      // 7
  console.log(canalizar(-4, (n) => n + 1));                     // -3

ESTO DEBE FALLAR
  // canalizar(1, (n: string) => 1);  → cada paso debe recibir un number.
  // canalizar(1, 2);  → cada paso debe ser una función, no un número.

EXPLICA
  ¿Por qué canalizar(10, (n) => n - 10, (n) => n + 7) da 7 y no 0? ¿Qué contiene
  pasos en canalizar(5)?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 34 — Alertas con enum, valor por defecto y rest
/*
SITUACIÓN
  Un sistema recibe niveles de alerta (un enum) en cantidad variable y resume cuál fue
  el peor y cuántos igualan o superan un umbral. Si no se indica umbral, es Medio.

QUÉ DEBES HACER
  1. Crea el enum Nivel con valores numéricos explícitos: Bajo = 1, Medio = 2,
     Alto = 3, Critico = 4.
  2. Crea la función nombreNivel(nivel: Nivel): string que devuelve 'Bajo', 'Medio',
     'Alto' o 'Critico' según el nivel (con if / else if; el último caso puede ir
     sin condición).
  3. Crea la función resumenAlertas(umbral: Nivel = Nivel.Medio, ...niveles: Nivel[]):
     string. Dentro, en este orden:
     a) const primero = niveles[0]; (su tipo es Nivel | undefined);
     b) si primero es undefined, devuelve 'sin alertas';
     c) crea let peor: Nivel = primero y let sobre: number = 0;
     d) recorre niveles con forEach: si un nivel es mayor que peor, asígnalo a peor;
        si es mayor o igual que umbral, suma 1 a sobre;
     e) devuelve 'peor: {nombreNivel(peor)} | sobre umbral: {sobre}'.
  4. Ejecuta COMPRUEBA. En las líneas con undefined se conserva el umbral por defecto.

COMPRUEBA
  console.log(resumenAlertas(Nivel.Medio, Nivel.Bajo, Nivel.Alto, Nivel.Medio));
  // 'peor: Alto | sobre umbral: 2'
  console.log(resumenAlertas(Nivel.Critico, Nivel.Bajo));
  // 'peor: Bajo | sobre umbral: 0'
  console.log(resumenAlertas(Nivel.Bajo));
  // 'sin alertas'
  console.log(resumenAlertas(undefined, Nivel.Medio, Nivel.Critico));
  // 'peor: Critico | sobre umbral: 2'
  console.log(resumenAlertas(undefined, Nivel.Bajo));
  // 'peor: Bajo | sobre umbral: 0'
  console.log(resumenAlertas());
  // 'sin alertas'

ESTO DEBE FALLAR
  // resumenAlertas(Nivel.Alto, 7);  → 7 no es un valor del enum Nivel.
  // resumenAlertas('alto');  → umbral debe ser un valor de Nivel.

EXPLICA
  ¿Por qué en resumenAlertas(Nivel.Bajo) el Nivel.Bajo es el umbral y no un nivel
  recibido? ¿Qué papel cumple primero === undefined?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 35 — Ticket con opcional, valor por defecto y rest
/*
SITUACIÓN
  Un ticket recibe el cliente, una propina opcional (porcentaje), la moneda (con valor
  por defecto) y una cantidad variable de importes. Une los tres tipos de parámetro
  en una sola función y respeta el orden que exige TypeScript.

QUÉ DEBES HACER
  1. Crea la función armarTicket(cliente: string, propina?: number,
     moneda: string = 'USD', ...items: number[]): string. Supón importes >= 0.
  2. Dentro, en este orden:
     a) calcula subtotal sumando items con forEach;
     b) crea let total: number = subtotal; si propina NO es undefined y es mayor que 0,
        asigna a total subtotal + subtotal * propina / 100 (una propina 0 o negativa
        no cambia nada);
     c) crea la palabra: 'item' si items.length es exactamente 1; 'items' si no;
     d) devuelve '{cliente} | {cantidad} {palabra} | {total} {moneda}', donde cantidad es
        items.length y total se escribe con 2 decimales (total.toFixed(2)).
  3. Ejecuta COMPRUEBA. Cuando se salta propina o moneda se envía undefined.

COMPRUEBA
  console.log(armarTicket('Ana', undefined, undefined, 10, 20));  // 'Ana | 2 items | 30.00 USD'
  console.log(armarTicket('Ana', 10, 'EUR', 10, 20));             // 'Ana | 2 items | 33.00 EUR'
  console.log(armarTicket('Luis'));                               // 'Luis | 0 items | 0.00 USD'
  console.log(armarTicket('Luis', 15, 'MXN', 8));                 // 'Luis | 1 item | 9.20 MXN'
  console.log(armarTicket('Eva', 0, 'USD', 5));                   // 'Eva | 1 item | 5.00 USD'
  console.log(armarTicket('Eva', -10, undefined, 100));           // 'Eva | 1 item | 100.00 USD'

ESTO DEBE FALLAR
  // armarTicket('Ana', 10, 5);  → moneda debe ser string.
  // const f = (...partes: string[], fin: string): string => fin;  → un parámetro rest
  //   debe ser el último.
  // armarTicket();  → cliente es obligatorio.

EXPLICA
  ¿Por qué el orden de parámetros es: obligatorio, opcional, valor por defecto y
  rest? ¿Qué recibe moneda en armarTicket('Luis')?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 36 — Validar un entero y rechazar con una función never
/*
SITUACIÓN
  Un formulario acepta enteros dentro de un rango (por defecto de 0 a 100). Si el valor
  no cumple, el programa se detiene con un error claro. La función que detiene el
  programa se guarda en una constante con firma explícita.

QUÉ DEBES HACER
  1. Crea const rechazar: (motivo: string) => never = (motivo: string): never => { ... }
     cuyo cuerpo lanza throw new Error(motivo);
  2. Crea la función validarEntero(valor: number, min: number = 0, max: number = 100):
     number. Dentro, en este orden:
     a) si valor % 1 es distinto de 0 (no es entero), devuelve
        rechazar('{valor} no es entero') con return;
     b) si valor es menor que min o mayor que max, devuelve
        rechazar('{valor} fuera de [{min}, {max}]') con return;
     c) devuelve valor.
  3. Ejecuta COMPRUEBA. Las últimas tres líneas lanzan un error: descomenta una,
     ejecuta, lee el mensaje y vuelve a comentarla.

COMPRUEBA
  console.log(validarEntero(50));           // 50
  console.log(validarEntero(0));            // 0
  console.log(validarEntero(100));          // 100
  console.log(validarEntero(7, 5, 10));     // 7
  console.log(validarEntero(10, 5, 10));    // 10
  console.log(validarEntero(5, 5, 10));     // 5
  // console.log(validarEntero(101));       // lanza Error: '101 fuera de [0, 100]'
  // console.log(validarEntero(2.5));       // lanza Error: '2.5 no es entero'
  // console.log(validarEntero(4, 5, 10));  // lanza Error: '4 fuera de [5, 10]'

ESTO DEBE FALLAR
  // rechazar(5);  → motivo debe ser string.
  // const imposible: never = validarEntero(5);  → un number no cabe en never.
  // const r: (motivo: number) => never = rechazar;  → la firma no coincide: rechazar
  //   recibe string.

EXPLICA
  ¿Por qué validarEntero(10, 5, 10) y validarEntero(5, 5, 10) son válidos? ¿Qué
  sentido tiene que rechazar devuelva never y no void?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 37 — Normalizar valores que pueden ser texto o número
/*
SITUACIÓN
  Un reporte recibe datos mezclados: unos son números y otros son textos. Los números se
  muestran con una cantidad fija de decimales y los textos en mayúsculas. Para saber
  de qué tipo es un dato se usa typeof.

QUÉ DEBES HACER
  1. Crea la función normalizar(valor: string | number, decimales: number = 0):
     string. Supón decimales entero entre 0 y 4. Dentro:
     a) si typeof valor === 'number', devuelve valor.toFixed(decimales); dentro de
        ese if TypeScript sabe que valor es number;
     b) en otro caso devuelve valor.toLocaleUpperCase() (aquí valor es string).
  2. Crea la función normalizarTodo(...valores: (string | number)[]): string. Dentro:
     crea const salida: string[] = []; recorre valores con forEach y agrega a salida,
     con push, normalizar(valor) de cada uno; devuelve salida.join(',').
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(normalizar(3.14159, 2));    // '3.14'
  console.log(normalizar(7));             // '7'
  console.log(normalizar('ana'));         // 'ANA'
  console.log(normalizar('ana', 3));      // 'ANA'
  console.log(normalizar(2.5, 1));        // '2.5'
  console.log(normalizar(0, 2));          // '0.00'
  console.log(normalizarTodo('a', 2, 'b'));   // 'A,2,B'
  console.log(normalizarTodo());              // ''
  console.log(normalizarTodo(1.2, 'x'));      // '1,X'

ESTO DEBE FALLAR
  // normalizar(true);  → valor debe ser string o number.
  // normalizar(5).toFixed(2);  → normalizar devuelve string, que no tiene toFixed.
  // normalizarTodo([1, 2]);  → cada valor debe ser string o number, no un array.

EXPLICA
  ¿Por qué no se puede llamar a valor.toFixed directamente sin comprobar typeof?
  ¿Qué decimales se aplican a normalizarTodo(1.2, 'x') y por qué?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 38 — Repartir jugadores en dos equipos
/*
SITUACIÓN
  Los nombres llegan en el orden de inscripción y se reparten de forma alternada: el 1.º
  al equipo A, el 2.º al B, el 3.º al A, etc. Se descartan los nombres vacíos y los
  repetidos. El resultado es una tupla con dos arrays.

QUÉ DEBES HACER
  1. Crea la función repartir(...jugadores: string[]): [string[], string[]]. El primer
     array de la tupla es el equipo A y el segundo el equipo B.
  2. Dentro, en este orden:
     a) crea const equipoA: string[] = [], const equipoB: string[] = [] y
        let turnoA: boolean = true;
     b) recorre jugadores con forEach. Descarta el nombre si es '' o si ya está en
        alguno de los dos equipos (compruébalo recorriendo ambos con forEach y una
        bandera). Si no se descarta: si turnoA es true, agrégalo a equipoA; si no, a
        equipoB; y cambia turnoA al valor contrario;
     c) devuelve [equipoA, equipoB].
     Los arrays se crean dentro de la función en cada llamada: no los guardes fuera.
  3. Crea la función diferencia(equipos: [string[], string[]]): number que devuelve
     cuántos jugadores tiene de más el equipo más grande (0 si empatan). No uses
     Math: compara las longitudes con if.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(repartir('Ana', 'Luis', 'Eva', 'Tom', 'Ana'));
  // [ [ 'Ana', 'Eva' ], [ 'Luis', 'Tom' ] ]
  console.log(repartir());                          // [ [], [] ]
  console.log(repartir('', 'Zoe'));                 // [ [ 'Zoe' ], [] ]
  console.log(repartir('a', 'b', 'a', 'c'));        // [ [ 'a', 'c' ], [ 'b' ] ]
  console.log(diferencia(repartir('a', 'b', 'c'))); // 1
  console.log(diferencia(repartir('a', 'b')));      // 0
  console.log(diferencia(repartir()));              // 0

ESTO DEBE FALLAR
  // const e: string[] = repartir('a');  → devuelve una tupla de dos arrays.
  // repartir(1, 2);  → los nombres deben ser string.
  // diferencia(['a', 'b']);  → debe ser una tupla de dos arrays de string.

EXPLICA
  ¿Por qué un nombre descartado no cambia el turno? ¿Qué pasaría si equipoA y
  equipoB se declararan fuera de repartir?
*/
(() => {
    // Tu solución.
})();

// TRAMO 7 — TRES O MÁS SUBSECCIONES, TUPLAS, ENUM Y ESTADO: EJERCICIOS 39 AL 45

// !EJERCICIO 39 — Cajero que entrega billetes
/*
SITUACIÓN
  Un cajero recibe un monto y las denominaciones de billetes disponibles, de mayor a
  menor. Entrega primero los billetes grandes. Si con ese reparto no se logra el monto
  exacto, el retiro no es posible.

QUÉ DEBES HACER
  1. Crea la función desglosar(monto: number, ...billetes: number[]): [number, number][]
     | null. Supón monto entero >= 0 y billetes enteros > 0, ordenados de mayor a menor
     y sin repetidos. Cada elemento del resultado es una tupla [billete, cantidad].
  2. Dentro, en este orden:
     a) crea let resto: number = monto y const resultado: [number, number][] = [];
     b) recorre billetes con forEach. Para cada billete calcula
        cantidad = (resto - resto % billete) / billete (cuántos caben, como entero); si
        cantidad es mayor que 0, agrega [billete, cantidad] a resultado con push y resta
        cantidad * billete a resto;
     c) si resto es mayor que 0, devuelve null (no retrocedas ni pruebes otras
        combinaciones: el reparto de mayor a menor es el único intento);
     d) devuelve resultado.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(desglosar(380, 100, 50, 20, 10));
  // [ [ 100, 3 ], [ 50, 1 ], [ 20, 1 ], [ 10, 1 ] ]
  console.log(desglosar(70, 50, 20));      // [ [ 50, 1 ], [ 20, 1 ] ]
  console.log(desglosar(30, 50, 20));      // null
  console.log(desglosar(0, 50));           // []
  console.log(desglosar(45, 20, 10));      // null
  console.log(desglosar(100));             // null
  console.log(desglosar(0));               // []
  console.log(desglosar(60, 50, 20));      // null

ESTO DEBE FALLAR
  // const r: [number, number][] = desglosar(10, 5);  → el resultado puede ser null.
  // desglosar('10');  → monto debe ser number.

EXPLICA
  ¿Por qué desglosar(60, 50, 20) da null aunque 3 billetes de 20 sumen 60? ¿Por qué
  desglosar(0) devuelve [] y no null?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 40 — Boletín con mínimo por defecto y notas en tuplas
/*
SITUACIÓN
  Un boletín recibe el nombre del alumno, la nota mínima para aprobar (por defecto 6) y
  parejas [materia, nota]. Resume las notas, el promedio y cuántas materias aprobó.

QUÉ DEBES HACER
  1. Crea la función boletin(alumno: string, minimo: number = 6,
     ...notas: [string, number][]): string.
  2. Dentro, en este orden:
     a) si no llegó ninguna nota, devuelve '{alumno}: sin notas';
     b) crea const detalle: string[] = [], let suma: number = 0 y let aprobadas:
        number = 0;
     c) recorre notas con forEach: agrega a detalle '{materia} {nota}' (posición 0 y
        posición 1 de la pareja), suma la nota a suma y, si la nota es mayor o igual
        que minimo, suma 1 a aprobadas;
     d) devuelve '{alumno}: {detalle unido con ', '} | promedio {promedio con 2
        decimales} | aprobadas {aprobadas}/{cantidad de notas}'. El promedio es suma
        entre la cantidad de notas; usa toFixed(2).
  3. Ejecuta COMPRUEBA. Las líneas que usan el mínimo por defecto envían undefined.

COMPRUEBA
  console.log(boletin('Ana', undefined, ['Mate', 8], ['Fisica', 5]));
  // 'Ana: Mate 8, Fisica 5 | promedio 6.50 | aprobadas 1/2'
  console.log(boletin('Luis', 5, ['Mate', 5], ['Arte', 4]));
  // 'Luis: Mate 5, Arte 4 | promedio 4.50 | aprobadas 1/2'
  console.log(boletin('Eva'));
  // 'Eva: sin notas'
  console.log(boletin('Tom', 10, ['Mate', 10]));
  // 'Tom: Mate 10 | promedio 10.00 | aprobadas 1/1'
  console.log(boletin('Zoe', 6, ['Mate', 5.99]));
  // 'Zoe: Mate 5.99 | promedio 5.99 | aprobadas 0/1'
  console.log(boletin('Leo', undefined, ['Arte', 6]));
  // 'Leo: Arte 6 | promedio 6.00 | aprobadas 1/1'

ESTO DEBE FALLAR
  // boletin('Ana', 6, ['Mate']);  → cada nota es una tupla de dos elementos.
  // boletin('Ana', 6, ['Mate', '8']);  → la nota debe ser number.
  // boletin('Ana', ['Mate', 8]);  → el segundo argumento es minimo (number), no una nota.

EXPLICA
  ¿Por qué en la primera línea hace falta undefined para conservar el 6? ¿Qué comprueban
  las líneas de 'Zoe' (5.99) y 'Leo' (6) sobre el borde del mínimo?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 41 — Almacén con enum de movimientos
/*
SITUACIÓN
  Un almacén registra entradas y salidas de productos. Las salidas no pueden superar
  las existencias. Cada movimiento se acepta o se rechaza; si se rechaza, nada cambia.

QUÉ DEBES HACER
  1. Crea el enum Movimiento con Entrada = 1 y Salida = 2.
  2. Crea const almacen: [string, number][] = []; (cada pareja es [producto, cantidad]).
  3. Crea la función registrar(tipo: Movimiento, producto: string, cantidad: number = 1):
     boolean. Supón cantidad entero. Dentro, en este orden:
     a) si cantidad es 0 o negativa, o si producto es '' (vacío), devuelve false;
     b) crea let aceptado: boolean = false y let encontrado: boolean = false;
     c) recorre almacen con forEach. Para la pareja cuyo producto (posición 0) coincide,
        pon encontrado en true; si tipo es Movimiento.Entrada, suma cantidad a su posición
        1 y pon aceptado en true; si es Movimiento.Salida y la posición 1 es mayor o
        igual que cantidad, réstale cantidad y pon aceptado en true;
     d) si encontrado es false y tipo es Movimiento.Entrada, agrega [producto, cantidad]
        con push y pon aceptado en true;
     e) devuelve aceptado. Un producto en 0 existencias sigue en el almacén.
  4. Crea la función existencias(producto: string): number: cantidad del producto, o
     0 si no existe.
  5. Crea la función reporte(): string: '{producto}={cantidad}' de cada pareja unidas
     con ', ' y, si el almacén está vacío, 'vacio'.
  6. Ejecuta COMPRUEBA en orden; el almacén cambia entre líneas.

COMPRUEBA
  console.log(reporte());                                       // 'vacio'
  console.log(registrar(Movimiento.Entrada, 'pan', 10));        // true
  console.log(existencias('pan'));                              // 10
  console.log(registrar(Movimiento.Salida, 'pan', 4));          // true
  console.log(existencias('pan'));                              // 6
  console.log(registrar(Movimiento.Salida, 'pan', 7));          // false
  console.log(existencias('pan'));                              // 6
  console.log(registrar(Movimiento.Salida, 'pan', 6));          // true
  console.log(existencias('pan'));                              // 0
  console.log(registrar(Movimiento.Salida, 'sal'));             // false
  console.log(registrar(Movimiento.Entrada, 'sal'));            // true
  console.log(registrar(Movimiento.Entrada, 'sal', 4));         // true
  console.log(existencias('sal'));                              // 5
  console.log(registrar(Movimiento.Entrada, '', 3));            // false
  console.log(registrar(Movimiento.Entrada, 'te', 0));          // false
  console.log(registrar(Movimiento.Entrada, 'te', -2));         // false
  console.log(existencias('te'));                               // 0
  console.log(reporte());                                       // 'pan=0, sal=5'

ESTO DEBE FALLAR
  // registrar('Entrada', 'pan', 1);  → tipo debe ser un valor de Movimiento.
  // registrar(Movimiento.Entrada);  → producto es obligatorio.
  // registrar(3, 'pan');  → 3 no es un valor del enum Movimiento.

EXPLICA
  ¿Por qué una salida de un producto inexistente se rechaza y una entrada lo crea?
  ¿Qué devuelve registrar(Movimiento.Salida, 'pan', 1) cuando pan está en 0 y por qué?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 42 — Racha más larga de resultados
/*
SITUACIÓN
  Un equipo registra partido a partido si ganó (true) o perdió (false). Se busca la
  racha consecutiva más larga, de victorias o de derrotas. Solo cuenta si alcanza una
  longitud mínima, que por defecto es 1.

QUÉ DEBES HACER
  1. Crea la función mayorRacha(minimo: number = 1, ...resultados: boolean[]):
     [boolean, number] | null. Devuelve [valor, largo] de la mayor racha.
  2. Dentro, en este orden:
     a) const primero = resultados[0]; (su tipo es boolean | undefined);
     b) si primero es undefined, devuelve null;
     c) crea let valorActual: boolean = primero, let largoActual: number = 0,
        let mejorValor: boolean = primero y let mejorLargo: number = 0;
     d) recorre resultados con forEach: si el resultado es igual a valorActual, suma 1 a
        largoActual; si no, asigna el resultado a valorActual y deja largoActual en 1.
        Después, si largoActual es ESTRICTAMENTE mayor que mejorLargo, asigna
        largoActual a mejorLargo y valorActual a mejorValor (en un empate gana la
        primera racha);
     e) si mejorLargo es menor que minimo, devuelve null;
     f) devuelve [mejorValor, mejorLargo].
  3. Ejecuta COMPRUEBA. En las líneas con undefined se conserva el mínimo por defecto.

COMPRUEBA
  console.log(mayorRacha(undefined, true, true, false, false, false, true));
  // [ false, 3 ]
  console.log(mayorRacha(4, true, true, false, false, false, true));
  // null
  console.log(mayorRacha(3, true, true, false, false, false, true));
  // [ false, 3 ]
  console.log(mayorRacha());                                       // null
  console.log(mayorRacha(undefined, true));                        // [ true, 1 ]
  console.log(mayorRacha(undefined, true, false, true, false));    // [ true, 1 ]
  console.log(mayorRacha(2, true, false));                         // null
  console.log(mayorRacha(2, false, false, true, true));            // [ false, 2 ]

ESTO DEBE FALLAR
  // mayorRacha(2, 1, 0);  → los resultados deben ser boolean.
  // mayorRacha(true, false);  → el primer argumento es minimo (number).
  // const r: [boolean, number] = mayorRacha(1, true);  → el resultado puede ser null.

EXPLICA
  ¿Por qué mayorRacha(3, ...) devuelve la racha de 3 y mayorRacha(4, ...) devuelve null?
  ¿Qué pasaría con el empate de mayorRacha(undefined, true, false, true, false) si
  usaras >= en vez de >?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 43 — Impuesto por tramos con tabla por defecto
/*
SITUACIÓN
  Un impuesto se calcula por tramos: cada tramo es una pareja [tope, porcentaje]. La
  parte del ingreso que cae dentro de un tramo paga el porcentaje de ese tramo. Lo que
  supera el último tope paga el porcentaje del último tramo. Si no se envía tabla, se
  usa una por defecto.

QUÉ DEBES HACER
  1. Crea const tramosBase: [number, number][] = [[1000, 0], [3000, 10], [6000, 20]];
  2. Crea la función impuesto(ingreso: number, tramos: [number, number][] = tramosBase):
     number. Supón ingreso >= 0, tramos con al menos un elemento y topes crecientes.
     Dentro, en este orden:
     a) crea let total: number = 0, let inicio: number = 0 y let ultimaTasa: number = 0;
     b) recorre tramos con forEach. Para cada tramo, tope es la posición 0 y tasa la 1.
        Si ingreso es mayor que inicio: calcula hasta = tope, pero si ingreso es menor
        que tope, hasta = ingreso; suma a total (hasta - inicio) * tasa / 100. Al final
        del bloque (se cumpla o no la condición) asigna tope a inicio y tasa a
        ultimaTasa;
     c) si ingreso es mayor que inicio (supera el último tope), suma a total
        (ingreso - inicio) * ultimaTasa / 100;
     d) devuelve total.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(impuesto(500));      // 0
  console.log(impuesto(1000));     // 0
  console.log(impuesto(2000));     // 100
  console.log(impuesto(3000));     // 200
  console.log(impuesto(4000));     // 400
  console.log(impuesto(6000));     // 800
  console.log(impuesto(7000));     // 1000
  console.log(impuesto(0));        // 0
  console.log(impuesto(100, [[50, 10], [100, 50]]));   // 30
  console.log(impuesto(120, [[50, 10], [100, 50]]));   // 40

ESTO DEBE FALLAR
  // impuesto(2000, [1000, 10]);  → cada tramo es una tupla [number, number].
  // impuesto('2000');  → ingreso debe ser number.
  // tramosBase.push([9000]);  → la tupla debe tener dos elementos.

EXPLICA
  ¿Por qué impuesto(3000) vale 200 y no 300? ¿Qué papel cumple la variable inicio en el
  recorrido?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 44 — Reglas de validación con nombres omitibles
/*
SITUACIÓN
  Un pedido debe cumplir reglas de importe. Cada regla es una pareja [nombre, función
  que dice si se cumple]. Se evalúan todas y se devuelven los nombres de las que
  fallan, saltando las que el llamador pida omitir.

QUÉ DEBES HACER
  1. Crea const reglas: [string, (total: number) => boolean][] con tres parejas:
     ['minimo', (total) => total >= 10], ['maximo', (total) => total <= 500] y
     ['multiplo5', (total) => total % 5 === 0].
  2. Crea la función evaluar(total: number, ...omitir: string[]): string[]. Dentro, en
     este orden:
     a) crea const fallidas: string[] = [];
     b) recorre reglas con forEach. Para cada regla: crea let omitida: boolean = false;
        recorre omitir con otro forEach y, si algún nombre es igual al de la regla
        (posición 0), pon omitida en true; si omitida es false y la función de la regla
        (posición 1) llamada con total da false, agrega el nombre a fallidas con push;
     c) devuelve fallidas (un array nuevo en cada llamada).
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(evaluar(12));                           // [ 'multiplo5' ]
  console.log(evaluar(7));                            // [ 'minimo', 'multiplo5' ]
  console.log(evaluar(600, 'maximo'));                // []
  console.log(evaluar(8, 'minimo', 'multiplo5'));     // []
  console.log(evaluar(1000));                         // [ 'maximo' ]
  console.log(evaluar(10));                           // []
  console.log(evaluar(500));                          // []
  console.log(evaluar(501));                          // [ 'maximo', 'multiplo5' ]
  console.log(evaluar(7, 'zzz'));                     // [ 'minimo', 'multiplo5' ]
  console.log(evaluar(7).length);                     // 2

ESTO DEBE FALLAR
  // reglas.push(['extra', 5]);  → la segunda posición debe ser una función.
  // evaluar('12');  → total debe ser number.
  // const f: number = evaluar(12);  → evaluar devuelve un array de string.

EXPLICA
  ¿Por qué evaluar(7) da el mismo resultado la 2.ª vez que lo llamas? ¿Qué ocurre con un
  nombre a omitir que no existe en la tabla?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 45 — Fila de turnos con estado compartido
/*
SITUACIÓN
  Una oficina registra a quienes llegan y atiende en orden de llegada. Los datos viven en
  dos variables compartidas por todas las funciones: la lista de llegadas y cuántas
  personas ya fueron atendidas.

QUÉ DEBES HACER
  1. Crea const cola: string[] = []; y let atendidos: number = 0;. En cola están todos los
     que han llegado, en orden. Los primeros `atendidos` elementos ya fueron atendidos;
     los demás esperan.
  2. Crea la función llegar(...nombres: string[]): number. Recorre nombres con forEach:
     ignora el nombre si es '' o si ya está esperando (si coincide con algún elemento de
     cola en una posición mayor o igual que atendidos; para saber la posición lleva un
     contador let posicion: number = 0 que aumenta en cada elemento recorrido); si no,
     agrégalo a cola con push. Devuelve cuántas personas esperan (cola.length -
     atendidos).
  3. Crea la función atender(cantidad: number = 1): string. Dentro, en este orden:
     a) crea const esperando: number = cola.length - atendidos;
     b) si esperando es 0 o cantidad es 0 o negativa, devuelve 'nadie';
     c) crea let n: number = esperando; si cantidad es menor que esperando, asigna
        cantidad a n;
     d) crea const salida: string[] = [] y recorre cola con forEach y un contador de
        posición: agrega a salida los nombres en posiciones de atendidos a
        atendidos + n - 1;
     e) suma n a atendidos y devuelve salida.join(', ').
  4. Ejecuta COMPRUEBA en orden; el estado cambia entre líneas.

COMPRUEBA
  console.log(llegar('Ana', 'Luis', ''));   // 2
  console.log(llegar('Ana', 'Eva'));        // 3
  console.log(atender());                   // 'Ana'
  console.log(llegar('Ana'));               // 3
  console.log(atender(2));                  // 'Luis, Eva'
  console.log(atender(0));                  // 'nadie'
  console.log(atender(5));                  // 'Ana'
  console.log(atender());                   // 'nadie'
  console.log(llegar());                    // 0

ESTO DEBE FALLAR
  // llegar(1);  → los nombres deben ser string.
  // atender('2');  → cantidad debe ser number.
  // const x: number = atender();  → atender devuelve string.

EXPLICA
  ¿Por qué en la línea 4 'Ana' vuelve a entrar a la cola, y en la línea 2 no? ¿Qué
  representa atendidos en cada momento?
*/
(() => {
    // Tu solución.
})();

// TRAMO 8 — INTEGRACIÓN TOTAL: EJERCICIOS 46 AL 50

// !EJERCICIO 46 — Precio final de un carrito
/*
SITUACIÓN
  Una tienda calcula el precio final de una línea de compra. Hay tres categorías con IVA
  distinto, un descuento por cantidad automático y un cupón opcional de monto fijo. Los
  datos inválidos no tienen precio y devuelven null.

QUÉ DEBES HACER
  1. Crea el enum Categoria con Comida = 1, Ropa = 2 y Tecnologia = 3.
  2. Crea la función precioFinal(precio: number, categoria: Categoria,
     cantidad: number = 1, cupon?: number): number | null. Dentro, en este orden:
     a) si precio es 0 o negativo, o cantidad es 0 o negativa, devuelve null;
     b) crea let base: number = precio * cantidad;
     c) si cantidad es 10 o más, resta a base el 10 % de base (base * 10 / 100);
     d) si cupon NO es undefined y es mayor que 0, resta cupon a base; si base queda
        negativa, déjala en 0;
     e) crea let tasa: number con el IVA de la categoría: Comida 0, Ropa 10,
        Tecnologia 20;
     f) devuelve base + base * tasa / 100.
  3. Ejecuta COMPRUEBA. En las líneas con undefined se conserva cantidad = 1.

COMPRUEBA
  console.log(precioFinal(100, Categoria.Comida));                 // 100
  console.log(precioFinal(100, Categoria.Ropa, 2));                // 220
  console.log(precioFinal(50, Categoria.Tecnologia, 10));          // 540
  console.log(precioFinal(100, Categoria.Ropa, 1, 30));            // 77
  console.log(precioFinal(100, Categoria.Comida, 1, 500));         // 0
  console.log(precioFinal(0, Categoria.Ropa));                     // null
  console.log(precioFinal(10, Categoria.Ropa, 0));                 // null
  console.log(precioFinal(100, Categoria.Tecnologia, undefined, 20));  // 96
  console.log(precioFinal(100, Categoria.Comida, 10));             // 900
  console.log(precioFinal(100, Categoria.Comida, 10, 50));         // 850
  console.log(precioFinal(100, Categoria.Comida, 1, 0));           // 100
  console.log(precioFinal(100, Categoria.Comida, 1, -20));         // 100

ESTO DEBE FALLAR
  // precioFinal(100, 'Ropa');  → categoria debe ser un valor de Categoria.
  // precioFinal(100);  → categoria es obligatoria.
  // const p: number = precioFinal(100, Categoria.Ropa);  → el resultado puede ser null.

EXPLICA
  ¿Por qué el cupón se resta antes de calcular el IVA? ¿Por qué precioFinal(100,
  Categoria.Comida, 10) vale 900 y no 1000?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 47 — Calculadora con historial
/*
SITUACIÓN
  Una calculadora busca cada operación por nombre en una tabla, la ejecuta y anota en un
  historial solo las operaciones realizadas. Se puede consultar las últimas anotaciones.

QUÉ DEBES HACER
  1. Crea cuatro funciones flecha en forma acortada, cada una con (x: number,
     y: number): number: suma, resta, mult y div (x / y).
  2. Crea const operaciones: [string, (x: number, y: number) => number][] con las
     parejas ['suma', suma], ['resta', resta], ['mult', mult], ['div', div]; y
     const registro: string[] = [];
  3. Crea la función ejecutar(nombre: string, x: number, y: number): number | null.
     Dentro, en este orden:
     a) si nombre es 'div' e y es 0, devuelve null;
     b) crea let resultado: number | null = null y let ejecutada: boolean = false;
     c) recorre operaciones con forEach: si el nombre coincide, asigna a resultado la
        llamada a la función de la pareja con x e y, y pon ejecutada en true;
     d) si ejecutada es true, agrega a registro (push) el texto '{x} {nombre} {y} =
        {resultado}'; si es false, no agregues nada;
     e) devuelve resultado.
  4. Crea la función ultimos(cantidad: number = 3): string. Dentro, en este orden:
     a) si cantidad es 0 o negativa, devuelve '';
     b) crea let inicio: number = registro.length - cantidad; si inicio es menor que 0,
        asigna 0;
     c) crea const elegidos: string[] = [] y recorre registro con forEach llevando un
        contador de posición: agrega a elegidos las anotaciones en posición >= inicio;
     d) devuelve elegidos.join(' ; ').
  5. Ejecuta COMPRUEBA en orden; el historial cambia entre líneas.

COMPRUEBA
  console.log(ultimos());                   // ''
  console.log(ejecutar('suma', 2, 3));      // 5
  console.log(ejecutar('mult', 4, 5));      // 20
  console.log(ejecutar('div', 1, 0));       // null
  console.log(ejecutar('pot', 2, 3));       // null
  console.log(ejecutar('div', 9, 3));       // 3
  console.log(ejecutar('resta', 1, 4));     // -3
  console.log(ultimos());                   // '4 mult 5 = 20 ; 9 div 3 = 3 ; 1 resta 4 = -3'
  console.log(ultimos(1));                  // '1 resta 4 = -3'
  console.log(ultimos(10));                 // '2 suma 3 = 5 ; 4 mult 5 = 20 ; 9 div 3 = 3 ; 1 resta 4 = -3'
  console.log(ultimos(0));                  // ''
  console.log(registro.length);             // 4

ESTO DEBE FALLAR
  // ejecutar('suma', 1);  → y es obligatorio.
  // ultimos('2');  → cantidad debe ser number.
  // registro.push(5);  → el historial es un array de string.

EXPLICA
  ¿Por qué 'pot' y la división entre cero no aparecen en el historial? ¿Qué devuelve
  ultimos(10) cuando hay menos de 10 anotaciones?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 48 — Cajero con estados
/*
SITUACIÓN
  Un cajero tiene tres estados: cerrado, abierto y bloqueado. Se abre con un PIN; tres
  errores seguidos lo bloquean para siempre. Solo abierto permite retirar. Su estado
  vive en un objeto literal compartido por las funciones.

QUÉ DEBES HACER
  1. Crea el enum Estado con Cerrado = 0, Abierto = 1 y Bloqueado = 2.
  2. Crea const PIN: number = 1234; y el objeto
     const cajero = { estado: Estado.Cerrado, intentos: 0, saldo: 500 };
  3. Crea la función nombreEstado(): string que devuelve, según cajero.estado,
     'cerrado', 'abierto' o 'bloqueado'.
  4. Crea la función ingresarPin(pin: number): string. Dentro, en este orden:
     a) si el cajero está bloqueado, devuelve nombreEstado() sin cambiar nada;
     b) si pin es igual a PIN, pon el estado en Abierto, intentos en 0 y devuelve
        nombreEstado();
     c) si no coincide, pon el estado en Cerrado y suma 1 a intentos; si intentos llegó
        a 3 o más, pon el estado en Bloqueado;
     d) devuelve nombreEstado().
  5. Crea la función retirar(monto: number): number | null. Devuelve null, sin cambiar
     nada, si el cajero no está abierto, si monto es 0 o negativo o si monto es mayor
     que el saldo. Si no, resta monto al saldo y devuelve el saldo que queda.
  6. Crea la función cerrar(): void. Si el cajero está abierto, pasa a Cerrado; en
     cualquier otro estado no hace nada.
  7. Ejecuta COMPRUEBA en orden; el estado cambia entre líneas.

COMPRUEBA
  console.log(retirar(100));            // null
  console.log(ingresarPin(1111));       // 'cerrado'
  console.log(ingresarPin(2222));       // 'cerrado'
  console.log(ingresarPin(1234));       // 'abierto'
  console.log(retirar(100));            // 400
  console.log(retirar(0));              // null
  console.log(retirar(500));            // null
  console.log(retirar(400));            // 0
  cerrar();
  console.log(nombreEstado());          // 'cerrado'
  console.log(retirar(1));              // null
  console.log(ingresarPin(1));          // 'cerrado'
  console.log(ingresarPin(2));          // 'cerrado'
  console.log(ingresarPin(3));          // 'bloqueado'
  console.log(ingresarPin(1234));       // 'bloqueado'
  cerrar();
  console.log(nombreEstado());          // 'bloqueado'
  console.log(retirar(1));              // null

ESTO DEBE FALLAR
  // cajero.estado = 'abierto';  → estado es un valor de Estado, no un string.
  // cajero.saldo = '100';  → saldo es number.
  // cajero.pin;  → el objeto no tiene la propiedad pin.

EXPLICA
  ¿Qué línea de COMPRUEBA demuestra que intentos se reinicia al acertar el PIN? ¿Por qué
  el cajero bloqueado no se abre ni con el PIN correcto?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 49 — Tabla de posiciones de un torneo
/*
SITUACIÓN
  Cada partido es una tupla [local, golesLocal, visitante, golesVisitante]. Gana 3 puntos
  quien marca más, empatan con 1 punto cada uno y quien pierde recibe 0. La tabla lista
  a los equipos por orden de aparición.

QUÉ DEBES HACER
  1. Crea la función tabla(partidos: [string, number, string, number][]): [string, number][].
     Cada elemento del resultado es una tupla [equipo, puntos].
  2. Dentro de tabla, en este orden:
     a) crea const filas: [string, number][] = [];
     b) dentro de tabla crea la función sumar(equipo: string, puntos: number): void:
        crea let hallada: boolean = false; recorre filas con forEach y, si la posición 0
        coincide con equipo, suma puntos a su posición 1 y pon hallada en true; si al
        terminar hallada es false, agrega [equipo, puntos] a filas con push (así un
        equipo que pierde también aparece, con 0);
     c) recorre partidos con forEach: si golesLocal es mayor que golesVisitante,
        sumar(local, 3) y sumar(visitante, 0); si es menor, sumar(local, 0) y
        sumar(visitante, 3); si son iguales, sumar(local, 1) y sumar(visitante, 1);
     d) devuelve filas.
  3. Crea la función lider(partidos: [string, number, string, number][]): string. Obtén
     la tabla con tabla(partidos); si está vacía, devuelve 'sin partidos'; si no, busca
     la fila con más puntos (en empate gana la que aparece primero) y devuelve
     '{equipo} ({puntos})'.
  4. Ejecuta COMPRUEBA. La jornada es la misma en las primeras líneas.

COMPRUEBA
  const jornada: [string, number, string, number][] = [
      ['Rojos', 2, 'Azules', 1],
      ['Verdes', 0, 'Rojos', 0],
      ['Azules', 3, 'Verdes', 0],
  ];
  console.log(tabla(jornada));     // [ [ 'Rojos', 4 ], [ 'Azules', 3 ], [ 'Verdes', 1 ] ]
  console.log(lider(jornada));     // 'Rojos (4)'
  console.log(tabla(jornada).length);                    // 3
  console.log(tabla([]));                                // []
  console.log(lider([]));                                // 'sin partidos'
  console.log(lider([['A', 1, 'B', 1]]));                // 'A (1)'
  console.log(tabla([['A', 0, 'B', 2]]));                // [ [ 'A', 0 ], [ 'B', 3 ] ]

ESTO DEBE FALLAR
  // tabla([['A', 1, 'B']]);  → cada partido tiene cuatro elementos.
  // tabla([['A', '1', 'B', 2]]);  → los goles deben ser number.
  // const n: number = lider(jornada);  → lider devuelve string.

EXPLICA
  ¿Por qué tabla(jornada) da el mismo resultado cada vez que se llama? ¿Por qué sumar
  se llama también con 0 puntos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 50 — Cobro de pedidos en una cafetería
/*
SITUACIÓN
  Una cafetería cobra pedidos con bebidas del menú. El precio depende del tamaño; una
  promoción opcional (una función) puede cambiar el subtotal; una bebida desconocida o
  una mesa inválida detienen el cobro con un error.

QUÉ DEBES HACER
  1. Crea el enum Tamano con Chico = 1, Mediano = 2 y Grande = 3.
  2. Crea const menu: [string, number][] con las parejas ['espresso', 20], ['latte', 30]
     y ['te', 15] (precio de un tamaño Chico).
  3. Crea const rechazar: (motivo: string) => never = (motivo: string): never => { ... }
     que lanza throw new Error(motivo);
  4. Crea la función flecha extraTamano(tamano: Tamano): number con llaves: devuelve 0
     para Chico, 5 para Mediano y 10 para Grande (con if).
  5. Crea la función precioBase(bebida: string): number. Dentro: crea let precio: number
     = 0 y let hallada: boolean = false; recorre menu con forEach y, si el nombre
     coincide, asigna su precio (posición 1) a precio y pon hallada en true; si hallada
     es false, devuelve rechazar('Bebida desconocida: {bebida}') con return; devuelve
     precio.
  6. Crea la función cobrarPedido(mesa: number, tamano: Tamano = Tamano.Mediano,
     promo?: (subtotal: number) => number, ...bebidas: string[]): string. Dentro, en
     este orden:
     a) si mesa es menor que 1, devuelve rechazar('Mesa invalida: {mesa}') con return;
     b) si no llegó ninguna bebida, devuelve 'Mesa {mesa}: sin pedido';
     c) crea let subtotal: number = 0 y suma, por cada bebida, precioBase(bebida) más
        extraTamano(tamano);
     d) crea let total: number = subtotal; si promo NO es undefined, asigna a total
        promo(subtotal); si total queda negativo, déjalo en 0;
     e) crea la palabra: 'bebida' si hay exactamente 1; 'bebidas' si no;
     f) devuelve 'Mesa {mesa}: {cantidad} {palabra} | {total con 2 decimales}'. Usa
        total.toFixed(2).
  7. Ejecuta COMPRUEBA. Las últimas dos líneas lanzan un error: descomenta una, ejecuta,
     lee el mensaje y vuelve a comentarla.

COMPRUEBA
  console.log(cobrarPedido(1, undefined, undefined, 'espresso', 'latte'));
  // 'Mesa 1: 2 bebidas | 60.00'
  console.log(cobrarPedido(2, Tamano.Chico, undefined, 'te'));
  // 'Mesa 2: 1 bebida | 15.00'
  console.log(cobrarPedido(3, Tamano.Grande, (s) => s - 10, 'latte', 'latte'));
  // 'Mesa 3: 2 bebidas | 70.00'
  console.log(cobrarPedido(4, undefined, (s) => s - 100, 'te'));
  // 'Mesa 4: 1 bebida | 0.00'
  console.log(cobrarPedido(5));
  // 'Mesa 5: sin pedido'
  console.log(cobrarPedido(6, Tamano.Chico, (s) => s * 90 / 100, 'espresso', 'te'));
  // 'Mesa 6: 2 bebidas | 31.50'
  // console.log(cobrarPedido(0));
  // lanza Error: 'Mesa invalida: 0'
  // console.log(cobrarPedido(1, undefined, undefined, 'cafe'));
  // lanza Error: 'Bebida desconocida: cafe'

ESTO DEBE FALLAR
  // cobrarPedido(1, 'Grande');  → tamano debe ser un valor de Tamano.
  // cobrarPedido(1, Tamano.Chico, 10);  → promo debe ser una función, no un número.
  // rechazar(1);  → motivo debe ser string.

EXPLICA
  ¿Por qué cobrarPedido(5) devuelve texto en lugar de lanzar error? ¿En qué orden se
  evalúan la mesa inválida y la lista vacía, y qué lo demuestra?
*/
(() => {
    // Tu solución.
})();
