/*
COMPENDIO 01 — CLASES (sección 08 completa)
50 ejercicios con dificultad creciente. Los primeros refuerzan un solo tema de la
sección; cada tramo siguiente añade un tema nuevo y recupera los anteriores; los
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

PROGRESIÓN
  Ejercicios   Tema nuevo                        Se combina con
  01–06        01 Definición                     tipos básicos, funciones, for...of
  07–11        02 Formas cortas                  01, tuplas, enum, Record, rest/defecto
  12–19        03 Métodos públicos y privados    01–02, arrays, Record, tuplas, rest
  20–24        03 static                         01–03
  25–31        04 extends, super y protected     01–03
  32–37        06 get y set                      01–04, never, tuplas
  38–42        07 Clases abstractas              01–06
  43–45        08 Constructor privado, Singleton 01–07
  46–50        Integración final                 todo lo anterior

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN: te dice qué se está modelando.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta.
  3. Copia las líneas de COMPRUEBA y, antes de ejecutar, predice qué saldrá. El
     resultado esperado va después de //.
  4. Prueba ESTO DEBE FALLAR una por una: descomenta la línea, comprueba que
     TypeScript marca error y vuelve a comentarla.
  5. Responde EXPLICA en un comentario bajo tu solución.

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
  Un ejercicio solo usa lo que su tramo y los anteriores permiten: static no se usa
  antes del ejercicio 20, extends no antes del 25, get/set no antes del 32,
  abstract no antes del 38 y el constructor private no antes del 43.

INTEGRACIÓN
  Cada tramo añade un tema y repasa los anteriores. Los ejercicios 46–50 combinan
  clases abstractas, herencia, static, accesores, constructor privado, colecciones,
  enum, tuplas, Record y funciones como parámetro.

No hay soluciones incluidas.
*/

// ============================================================================
// TRAMO 1 — EJERCICIOS 01 AL 06: 01 DEFINICIÓN DE UNA CLASE
// Propiedades declaradas en la clase y asignadas en el constructor con this.
// Todavía no hay métodos: la lógica vive en el constructor y en funciones sueltas.
// ============================================================================

// !EJERCICIO 01 — Termómetro de pared
/*
SITUACIÓN
  Un termómetro guarda la temperatura en Celsius al crearse y, en ese mismo
  momento, calcula su equivalente en Fahrenheit y un estado.

QUÉ DEBES HACER
  1. Crea la clase Termometro. Dentro de la clase, arriba del constructor, declara
     tres propiedades visibles: celsius (number), fahrenheit (number) y estado (string).
  2. Crea el constructor. Recibe celsius (number; supón entero). Dentro, con this:
     a) guarda celsius en this.celsius;
     b) guarda en this.fahrenheit el resultado de celsius * 9 / 5 + 32;
     c) guarda en this.estado: 'helado' si celsius es 0 o menos; 'caluroso' si es
        30 o más; 'templado' en cualquier otro caso.
  3. Fuera de la clase crea la función contarEstado(lista: Termometro[], estado: string): number.
     Recorre la lista con for...of y devuelve cuántos termómetros tienen ese estado.
  4. Fuera de la clase crea las instancias y ejecuta las líneas de COMPRUEBA.

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
(() => {
    // Tu solución.
    class Termometro{
      //celsius (number), fahrenheit (number) y estado (string).
      public celsius : number;
      public fahrenheit: number;
      public state: string;
      constructor( celsius: number){
         this.celsius =  celsius;
         this.fahrenheit = celsius*9/5+32;
      //    guarda en this.estado: 'helado' si celsius es 0 o menos; 'caluroso' si es
      //   30 o más; 'templado' en cualquier otro caso.
         if(celsius <= 0){
            this.state = 'Helado';
         } else if (celsius >= 30) {
            this.state = 'caluroso';
        } else {
            this.state = 'templado';
        }
      }
    }
    function contarEstado(lista: Termometro[], estado: string):number{

      return contador
    }
})();

// !EJERCICIO 02 — Etiquetas con código fijo
/*
SITUACIÓN
  Un almacén imprime etiquetas. El código de una etiqueta se arma al crearla y
  nunca debe cambiar; la descripción sí puede corregirse.

QUÉ DEBES HACER
  1. Crea la clase Etiqueta. Declara dos propiedades visibles: codigo (string,
     de solo lectura) y descripcion (string).
  2. Crea el constructor. Recibe, en este orden: prefijo (string), numero (number;
     supón entero entre 1 y 999) y descripcion (string). Dentro:
     a) crea una variable local ceros: '00' si numero es menor que 10; '0' si es
        menor que 100; '' en cualquier otro caso;
     b) guarda en this.codigo el texto '{prefijo}-{ceros}{numero}';
     c) guarda descripcion en this.descripcion.
  3. Fuera de la clase crea buscarEtiqueta(lista: Etiqueta[], codigo: string): Etiqueta | undefined.
     Recorre con for...of y devuelve la primera etiqueta con ese código; undefined
     si ninguna lo tiene.
  4. Fuera de la clase crea repetidos(lista: Etiqueta[]): number. Cuenta cuántas
     etiquetas tienen un código que ya apareció antes en la lista (la primera
     aparición no cuenta). Apoya la cuenta en un array local de códigos vistos.
  5. Crea las instancias y ejecuta COMPRUEBA.

COMPRUEBA
  const e1 = new Etiqueta('ROP', 7, 'Camisa');
  const e2 = new Etiqueta('ROP', 42, 'Pantalón');
  const e3 = new Etiqueta('ZAP', 105, 'Bota');
  const e4 = new Etiqueta('ROP', 7, 'Camisa azul');
  console.log(e1.codigo, e2.codigo, e3.codigo);  // 'ROP-007' 'ROP-042' 'ZAP-105'
  console.log(new Etiqueta('A', 9, '').codigo, new Etiqueta('A', 10, '').codigo);  // 'A-009' 'A-010'
  console.log(new Etiqueta('A', 99, '').codigo, new Etiqueta('A', 100, '').codigo);  // 'A-099' 'A-100'
  const lista: Etiqueta[] = [e1, e2, e3, e4];
  console.log(buscarEtiqueta(lista, 'ROP-007')?.descripcion);  // 'Camisa'
  console.log(buscarEtiqueta(lista, 'XXX-001'));  // undefined
  console.log(repetidos(lista));  // 1
  console.log(repetidos([e1, e1, e1]));  // 2
  console.log(repetidos([]));  // 0
  e1.descripcion = 'Camisa roja';
  console.log(e1.descripcion);  // 'Camisa roja'

ESTO DEBE FALLAR
  // e1.codigo = 'OTRO';  → codigo es de solo lectura.
  // const mala = new Etiqueta('ROP', '7', 'x');  → numero debe ser number.

EXPLICA
  ¿Qué diferencia hay entre poder leer codigo y poder reasignarlo? ¿Por qué
  descripcion sí se pudo cambiar?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 03 — Contactos con teléfono opcional
/*
SITUACIÓN
  Una agenda guarda contactos. Algunos no tienen teléfono, así que esa propiedad
  puede no existir.

QUÉ DEBES HACER
  1. Crea la clase Contacto. Declara dos propiedades visibles: nombre (string) y
     telefono (string, opcional: escribe ? después del nombre).
  2. Crea el constructor. Recibe nombre (string) y telefono (string, opcional).
     Dentro: guarda nombre; guarda telefono solo si no es undefined y no es el
     texto vacío ''. En caso contrario, no asignes telefono.
  3. Fuera de la clase crea describir(c: Contacto): string. Devuelve
     '{nombre}: {telefono}' si c.telefono no es undefined; si es undefined,
     '{nombre}: sin teléfono'.
  4. Fuera de la clase crea conTelefono(lista: Contacto[]): string[]. Devuelve, en el
     orden de la lista, los nombres de los contactos que sí tienen teléfono
     ([] si ninguno).
  5. Fuera de la clase crea primerSinTelefono(lista: Contacto[]): Contacto | undefined.
     Devuelve el primer contacto sin teléfono, o undefined.
  6. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 04 — Candado con pin oculto
/*
SITUACIÓN
  Un gimnasio registra candados para sus casilleros. El pin no debe poder leerse
  desde fuera, pero el candado clasifica su propia seguridad al crearse.

QUÉ DEBES HACER
  1. Crea la clase Candado. Declara tres propiedades: pin (string, oculta),
     etiqueta (string, visible) y nivel (string, visible).
  2. Crea el constructor. Recibe, en este orden: etiqueta (string) y pin (string;
     supón que tiene al menos 1 carácter). Dentro, guarda ambos y calcula nivel
     evaluando en este orden:
     a) si pin tiene menos de 4 caracteres, nivel es 'débil';
     b) si todos los caracteres del pin son iguales al primero, nivel es 'débil'
        (recorre el pin con for...of y compáralo con pin.charAt(0));
     c) si no, y el pin tiene 6 caracteres o más, nivel es 'fuerte';
     d) en cualquier otro caso, nivel es 'media'.
  3. Fuera de la clase crea contarNivel(lista: Candado[], nivel: string): number.
     Recorre la lista y devuelve cuántos candados tienen ese nivel.
  4. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 05 — Tarifa de estacionamiento
/*
SITUACIÓN
  Un estacionamiento cobra por hora según el tipo de vehículo. Cada vehículo
  calcula su tarifa y su total al registrarse; después se suma la recaudación.

QUÉ DEBES HACER
  1. Crea la clase Vehiculo. Declara cinco propiedades visibles: placa (string),
     tipo (string), horas (number), tarifa (number) y total (number).
  2. Crea el constructor. Recibe, en este orden: placa (string), tipo (string; supón
     que es 'moto', 'auto' o 'camion') y horas (number; supón entero >= 1). Dentro:
     a) guarda placa, tipo y horas;
     b) guarda en tarifa el precio por hora: 10 si es 'moto', 20 si es 'auto', 35
        si es 'camion';
     c) calcula total como horas * tarifa;
     d) si horas es mayor que 8 (8 exactas no cuentan), descuenta la quinta parte:
        total pasa a ser total - total / 5;
     e) guarda total.
  3. Fuera de la clase crea recaudacion(lista: Vehiculo[]): number: la suma de los
     totales (0 si la lista está vacía).
  4. Fuera de la clase crea masCaro(lista: Vehiculo[]): Vehiculo | undefined. Devuelve
     el vehículo con mayor total; si hay empate gana el que aparece antes;
     undefined si la lista está vacía.
  5. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 06 — Cadena de eslabones
/*
SITUACIÓN
  Una cadena de montaje enlaza estaciones. Cada eslabón conoce al anterior (si lo
  hay), así que una clase puede usarse como el tipo de una de sus propias propiedades.

QUÉ DEBES HACER
  1. Crea la clase Eslabon. Declara dos propiedades visibles: nombre (string) y
     previo (de tipo Eslabon, opcional).
  2. Crea el constructor. Recibe nombre (string) y previo (Eslabon, opcional).
     Dentro: guarda nombre; guarda previo solo si no es undefined.
  3. Fuera de la clase crea longitud(e: Eslabon): number. Con un while, cuenta e y
     todos sus previos hasta llegar a uno sin previo.
  4. Fuera de la clase crea recorrido(e: Eslabon): string[]. Devuelve los nombres
     empezando por e y siguiendo previo tras previo hasta el primero.
  5. Fuera de la clase crea raiz(e: Eslabon): Eslabon. Devuelve el último eslabón de
     la cadena (el que no tiene previo). Si e no tiene previo, devuelve e.
  6. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// ============================================================================
// TRAMO 2 — EJERCICIOS 07 AL 11: 02 FORMAS CORTAS DE ASIGNAR PROPIEDADES
// Propiedades de parámetro (public, private, readonly delante del parámetro del
// constructor) combinadas con lo del tramo 1.
// ============================================================================

// !EJERCICIO 07 — Precio de una entrada de cine
/*
SITUACIÓN
  Un cine vende entradas. El precio depende de la edad y de la sala; cada entrada
  lo calcula al crearse. La sala nunca cambia.

QUÉ DEBES HACER
  1. Crea la clase Entrada. Dentro de la clase declara una propiedad visible: precio (number).
  2. Crea el constructor con tres propiedades de parámetro, en este orden:
     pelicula (string, visible), edad (number, visible; supón entero >= 0) y
     sala (number, visible y de solo lectura).
  3. En el cuerpo del constructor calcula this.precio evaluando en este orden:
     a) si edad es 12 o menos, precio es 40;
     b) si no, y edad es 65 o más, precio es 50;
     c) en cualquier otro caso, precio es 80;
     d) después, si sala es 3 (sala VIP), suma 30 al precio ya calculado.
  4. Fuera de la clase crea recaudacion(lista: Entrada[]): number: la suma de los
     precios (0 si la lista está vacía).
  5. Fuera de la clase crea entradasDeSala(lista: Entrada[], sala: number): number:
     cuántas entradas son de esa sala.
  6. Crea las instancias y ejecuta COMPRUEBA.

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
  console.log(recaudacion(lista));  // 430
  console.log(recaudacion([]));  // 0
  console.log(entradasDeSala(lista, 3), entradasDeSala(lista, 9));  // 2 0

ESTO DEBE FALLAR
  // e5.sala = 1;  → sala es de solo lectura.
  // e1.precio = 'gratis';  → precio es number.

EXPLICA
  ¿Qué líneas habrías tenido que escribir para guardar sala si no usaras propiedad
  de parámetro? ¿Por qué precio no se declaró en el constructor?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 08 — Totales por cliente
/*
SITUACIÓN
  Un restaurante registra pedidos. Algunos llevan propina y nota; otros no. Al final
  del día se suma lo que gastó cada cliente y se busca al mejor.

QUÉ DEBES HACER
  1. Crea la clase Pedido con un constructor de cuatro propiedades de parámetro, en
     este orden: cliente (string, visible), monto (number, visible), propina (number,
     visible, con valor por defecto 0) y nota (string, visible y opcional con ?).
     El cuerpo del constructor queda vacío.
  2. Fuera de la clase crea totalesPorCliente(pedidos: Pedido[]): Record<string, number>.
     Crea un objeto vacío de ese tipo y recorre los pedidos con for...of: a la clave
     cliente le suma monto + propina (si la clave aún no existe, parte de 0 con ??).
     Devuelve el objeto.
  3. Fuera de la clase crea mejorCliente(totales: Record<string, number>): string | undefined.
     Recórrelo con for...in usando Object.hasOwn. Devuelve el cliente con el total
     mayor; si hay empate, el que se insertó primero; undefined si el objeto está vacío.
     (Con noUncheckedIndexedAccess, totales[clave] puede ser undefined: usa ?? 0.)
  4. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 09 — Estación meteorológica
/*
SITUACIÓN
  Una estación recibe una lista de temperaturas al crearse. Guarda su nombre y el
  resumen de la lista, pero no la lista misma.

QUÉ DEBES HACER
  1. Crea la clase Estacion. Dentro de la clase declara cuatro propiedades visibles
     de tipo number: cantidad, maximo, minimo y promedio.
  2. Crea el constructor con dos parámetros, en este orden: nombre (string, propiedad
     de parámetro visible) y muestras (number[], SIN modificador: es solo un parámetro).
  3. En el cuerpo del constructor:
     a) guarda en this.cantidad la longitud de muestras;
     b) si cantidad es 0, pon maximo, minimo y promedio en 0 y no hagas nada más
        (usa un if/else);
     c) si no, recorre muestras con for...of acumulando la suma. Usa una variable
        booleana primero (empieza en true): en la primera vuelta maximo y minimo
        toman ese valor y primero pasa a false; en las demás, actualízalos si el
        valor es mayor o menor;
     d) guarda en promedio la suma entre cantidad, sin redondear.
  4. Fuera de la clase crea conAlerta(lista: Estacion[], limite: number): string[]:
     los nombres, en orden, de las estaciones cuyo maximo sea limite o más.
  5. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 10 — Rutas con coordenadas
/*
SITUACIÓN
  Una app de reparto guarda rutas entre dos puntos de una cuadrícula. Cada punto es
  una pareja [x, y]. La distancia se mide en cuadras: lo que se avanza en x más lo
  que se avanza en y, siempre como número positivo.

QUÉ DEBES HACER
  1. Crea la clase Ruta. Dentro de la clase declara dos propiedades visibles:
     distancia (number) y redonda (boolean).
  2. Crea el constructor con tres propiedades de parámetro visibles y de solo lectura,
     en este orden: nombre (string), origen ([number, number]) y destino ([number, number]).
  3. En el cuerpo del constructor:
     a) calcula dx como destino[0] - origen[0] y dy como destino[1] - origen[1];
     b) si dx es negativo, multiplícalo por -1; haz lo mismo con dy;
     c) guarda en this.distancia la suma de dx y dy;
     d) guarda en this.redonda true si origen y destino tienen las dos coordenadas
        iguales; false en otro caso.
  4. Fuera de la clase crea masLarga(rutas: Ruta[]): Ruta | undefined: la de mayor
     distancia; si hay empate, la que aparece antes; undefined si la lista está vacía.
  5. Fuera de la clase crea rutasCortas(rutas: Ruta[], maximo: number): string[]: los
     nombres, en orden, de las rutas con distancia menor o igual a maximo.
  6. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 11 — Costo de paquetes por prioridad
/*
SITUACIÓN
  Una mensajería calcula el costo de cada paquete según su peso y su prioridad.
  La prioridad es un enum; si no se indica, es la más baja.

QUÉ DEBES HACER
  1. Dentro de tu función, antes de la clase, declara: enum Prioridad { Baja, Media, Alta }
  2. Crea la clase Paquete. Dentro de la clase declara una propiedad visible: costo (number).
  3. Crea el constructor con tres propiedades de parámetro, en este orden: destino
     (string, visible y de solo lectura), peso (number, visible; supón entero >= 1)
     y prioridad (Prioridad, visible, con valor por defecto Prioridad.Baja).
  4. En el cuerpo del constructor calcula this.costo en este orden:
     a) parte de peso * 10;
     b) si prioridad es Media, suma 30; si es Alta, suma 80;
     c) si peso es mayor que 20 (20 exactos no cuentan), suma además 50.
  5. Fuera de la clase crea resumen(lista: Paquete[]): [number, number, number]. Es una
     tupla con cuántos paquetes hay de prioridad Baja, Media y Alta, en ese orden.
  6. Fuera de la clase crea costoTotal(lista: Paquete[], prioridad?: Prioridad): number.
     Si se recibe prioridad, suma solo los costos de esa prioridad; si no, suma todos.
     Cuidado: Prioridad.Baja vale 0; pregunta por undefined, no por «si hay valor».
  7. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// ============================================================================
// TRAMO 3 — EJERCICIOS 12 AL 19: 03 MÉTODOS PÚBLICOS Y PRIVADOS
// Estado oculto (private) que solo cambia mediante métodos públicos; métodos
// privados de apoyo. Se combina con 01 y 02, arrays, tuplas, Record y rest.
// ============================================================================

// !EJERCICIO 12 — Podómetro diario
/*
SITUACIÓN
  Un podómetro acumula los pasos del día. Solo acepta lecturas razonables y nunca
  deja pasar de un tope diario. Nadie fuera de la clase puede cambiar el contador.

QUÉ DEBES HACER
  1. Crea la clase Podometro. Declara una propiedad oculta pasos (number) que
     empieza en 0.
  2. En Podometro crea registrar(cantidad: number): boolean, público. Evalúa en este orden:
     a) rechaza (false) si cantidad no es entero;
     b) rechaza si cantidad es menor que 1 o mayor que 2000 (1 y 2000 sí se aceptan);
     c) rechaza si pasos + cantidad supera 20000 (20000 exactos sí se aceptan);
     d) si pasa todo, suma cantidad a pasos y devuelve true.
  3. En Podometro crea total(): number, público. Devuelve pasos.
  4. En Podometro crea metaCumplida(meta: number): boolean, público. Devuelve true
     si pasos es igual o mayor que meta.
  5. Fuera de la clase crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 13 — Ascensor con límites
/*
SITUACIÓN
  Un ascensor se mueve entre el piso 0 y el último piso. Recuerda en qué piso está
  y cuántos pisos ha recorrido en total.

QUÉ DEBES HACER
  1. Crea la clase Ascensor. Declara en su constructor ultimoPiso (number, oculto y
     de solo lectura; supón entero >= 1). Además declara dos propiedades ocultas que
     empiezan en 0: piso (number) y recorrido (number).
  2. En Ascensor crea irA(destino: number): boolean, público (supón destino entero):
     a) rechaza (false) si destino es menor que 0 o mayor que ultimoPiso;
     b) rechaza si destino es igual al piso actual;
     c) suma a recorrido la distancia entre destino y piso, siempre positiva;
     d) guarda destino como nuevo piso y devuelve true.
  3. En Ascensor crea llamar(destinos: number[]): number, público. Recorre destinos
     en orden con for...of; para cada uno llama a this.irA. Devuelve cuántos aceptó.
  4. En Ascensor crea pisoActual(): number y pisosRecorridos(): number, públicos.
     Devuelven piso y recorrido.
  5. Fuera de la clase crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 14 — Cajero con billetes limitados
/*
SITUACIÓN
  Un cajero guarda billetes de 100, 50 y 20. Para entregar un monto toma primero los
  billetes grandes. Si no puede completar el monto exacto, no entrega nada y su
  stock queda igual.

QUÉ DEBES HACER
  1. Crea la clase Cajero. Declara en su constructor stock ([number, number, number],
     oculto): cuántos billetes hay de 100, de 50 y de 20, en ese orden.
  2. En Cajero crea calcular(monto: number): [number, number, number] | undefined,
     privado (supón monto entero >= 1). No modifica el stock:
     a) crea restante igual a monto y usados igual a [0, 0, 0];
     b) mientras restante sea 100 o más y usados[0] sea menor que stock[0], resta 100
        a restante y suma 1 a usados[0];
     c) repite lo mismo con 50 (usados[1], stock[1]) y después con 20 (usados[2], stock[2]);
     d) si restante no es 0, devuelve undefined; si es 0, devuelve usados.
  3. En Cajero crea retirar(monto: number): string, público:
     a) llama a this.calcular(monto);
     b) si devuelve undefined, devuelve 'imposible' sin tocar el stock;
     c) si no, resta de stock cada cantidad usada y devuelve '{n100}x100 {n50}x50 {n20}x20'
        con las cantidades usadas de cada billete.
  4. En Cajero crea disponible(): number, público. Devuelve el dinero total del
     stock: 100 por cada billete de 100, 50 por cada de 50 y 20 por cada de 20.
  5. Fuera de la clase crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 15 — Lista de reproducción
/*
SITUACIÓN
  Una playlist guarda títulos sin repetir. Quien la usa puede agregar, eliminar y
  consultar, pero nunca debe poder modificar la lista interna sin pasar por la clase.

QUÉ DEBES HACER
  1. Crea la clase Playlist. Declara un array oculto canciones (string[]), vacío.
     No lo llames titulos: ese será el nombre de un método.
  2. En Playlist crea agregar(titulo: string): boolean, público. Rechaza (false) si
     titulo es '' o si ya existe uno exactamente igual (mayúsculas y minúsculas se
     distinguen). Si no, lo añade al final y devuelve true.
  3. En Playlist crea eliminar(titulo: string): boolean, público. Rechaza si el título
     no existe. Si existe, crea un array nuevo con los demás títulos en el mismo orden,
     reemplaza canciones por él y devuelve true.
  4. En Playlist crea titulos(): string[], público. Devuelve una copia de canciones
     (un array nuevo con los mismos títulos, no el array interno).
  5. En Playlist crea cantidad(): number, público.
  6. En Playlist crea masLargo(): string | undefined, público. Devuelve el título con
     más caracteres; si hay empate, el que aparece primero; undefined si no hay títulos.
  7. Fuera de la clase crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 16 — Despensa por producto
/*
SITUACIÓN
  Una despensa lleva la cuenta de unidades por producto. Un producto agotado sigue
  apareciendo en el registro con 0 unidades.

QUÉ DEBES HACER
  1. Crea la clase Despensa. Declara un objeto oculto existencias (Record<string, number>),
     vacío.
  2. En Despensa crea guardar(producto: string, cantidad: number): boolean, público.
     Rechaza (false) si producto es '' o si cantidad no es un entero mayor que 0. Si
     no, suma cantidad a las unidades del producto (si no existe, parte de 0 con ??)
     y devuelve true.
  3. En Despensa crea sacar(producto: string, cantidad: number): boolean, público.
     Rechaza si cantidad no es un entero mayor que 0, si el producto no existe
     (compruébalo con Object.hasOwn) o si hay menos unidades que cantidad. Si no,
     resta cantidad y devuelve true. Aunque queden 0 unidades, el producto sigue existiendo.
  4. En Despensa crea unidades(producto: string): number, público. Devuelve sus
     unidades, o 0 si el producto no existe.
  5. En Despensa crea agotados(): string[], público. Recorre existencias con for...in
     (con Object.hasOwn) y devuelve, en orden de inserción, los productos con 0 unidades.
  6. En Despensa crea total(): number, público. Devuelve la suma de las unidades de
     todos los productos.
  7. Fuera de la clase crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 17 — Cronómetro con formato
/*
SITUACIÓN
  Un cronómetro guarda segundos y los muestra como horas:minutos:segundos. El
  formato de dos dígitos es un detalle interno de la clase.

QUÉ DEBES HACER
  1. Crea la clase Cronometro. Declara una propiedad oculta segundos (number) que
     empieza en 0.
  2. En Cronometro crea dosDigitos(n: number): string, privado (supón entero de 0 a
     99). Si n es menor que 10, devuelve '0' seguido de n; si no, devuelve n como texto.
  3. En Cronometro crea sumar(s: number): boolean, público. Rechaza (false) si s no es
     entero o es negativo (0 se acepta). Si no, suma s a segundos y devuelve true.
  4. En Cronometro crea restar(s: number): boolean, público. Rechaza si s no es entero,
     es negativo o es mayor que segundos. Si no, resta s y devuelve true.
  5. En Cronometro crea formato(): string, público:
     a) resto es segundos % 3600;
     b) horas es (segundos - resto) / 3600;
     c) minutos es (resto - resto % 60) / 60 y segs es resto % 60;
     d) devuelve '{horas}:{mm}:{ss}', donde horas va sin ceros y mm y ss pasan por dosDigitos.
  6. Fuera de la clase crea la instancia y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 18 — Duelo entre jugadores
/*
SITUACIÓN
  Dos jugadores se atacan por turnos. La vida de cada uno es privada: solo cambia al
  recibir daño o al curarse, y nunca baja de 0 ni supera su máximo.

QUÉ DEBES HACER
  1. Crea la clase Jugador. Declara en su constructor, en este orden: nombre
     (string, visible y de solo lectura), vida (number, oculta; supón entero >= 1) y
     fuerza (number, oculta; supón entero >= 1). Declara además una propiedad
     oculta y de solo lectura vidaMaxima (number) y en el cuerpo del constructor
     guárdala igual a la vida inicial.
  2. En Jugador crea estaVivo(): boolean, público: true si vida es mayor que 0.
  3. En Jugador crea vidaRestante(): number, público. Devuelve vida.
  4. En Jugador crea recibirDano(dano: number): number, público (supón entero >= 0).
     El daño real es dano, pero nunca más que la vida actual. Resta el daño real a
     vida y devuelve el daño real.
  5. En Jugador crea atacar(rival: Jugador): number, público. Si este jugador o el
     rival no están vivos, devuelve 0 y no cambia nada. Si no, devuelve el resultado
     de rival.recibirDano(this.fuerza).
  6. En Jugador crea curar(puntos: number): boolean, público. Rechaza (false) si el
     jugador no está vivo o si puntos no es un entero mayor que 0. Si no, suma
     puntos a vida sin pasar de vidaMaxima y devuelve true.
  7. Fuera de la clase crea pelear(a: Jugador, b: Jugador): string. Supón que ambos
     empiezan vivos. Mientras los dos estén vivos: a ataca a b; si b sigue vivo, b
     ataca a a. Al terminar, devuelve el nombre del que sigue vivo.
  8. Crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 19 — Partida de boliche
/*
SITUACIÓN
  Una partida de boliche registra los pinos derribados en cada tiro. Una llamada puede
  traer varios tiros seguidos; al primer valor inválido se corta el registro.

QUÉ DEBES HACER
  1. Crea la clase Boliche. Declara un array oculto tiros (number[]), vacío.
  2. En Boliche crea tirar(...pinos: number[]): number, público (parámetro rest). Recorre
     pinos en orden; para cada valor:
     a) si ya hay 12 tiros guardados, deja de registrar;
     b) si el valor no es entero o no está entre 0 y 10 (ambos incluidos), deja de
        registrar;
     c) si no, lo guarda en tiros y cuenta uno.
     «Deja de registrar» significa que ese valor y los siguientes no se guardan (usa
     break o return). Devuelve cuántos tiros guardó en esta llamada.
  3. En Boliche crea total(): number, público: la suma de los pinos de todos los tiros.
  4. En Boliche crea mejorTiro(): number, público: el mayor valor guardado (0 si no hay tiros).
  5. En Boliche crea limpios(): number, público: cuántos tiros valen exactamente 10.
  6. Fuera de la clase crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// ============================================================================
// TRAMO 4 — EJERCICIOS 20 AL 24: 03 MIEMBROS STATIC
// Propiedades y métodos que pertenecen a la clase y no a cada instancia. Se usan
// con el nombre de la clase (Clase.miembro), nunca con una instancia.
// ============================================================================

// !EJERCICIO 20 — Turnos numerados por tipo
/*
SITUACIÓN
  Un banco entrega turnos. Los normales se numeran N-1, N-2... y los prioritarios
  P-1, P-2..., cada tipo con su propia cuenta. Las cuentas pertenecen a la clase,
  no a un turno concreto.

QUÉ DEBES HACER
  1. Crea la clase Ticket. Declara dos propiedades de clase (static) ocultas:
     contadorN y contadorP (number), cada una con valor inicial 0. Declara también
     numero (string, visible y de solo lectura) como propiedad de instancia.
  2. Crea el constructor. Recibe prioritario (boolean). Dentro:
     a) si prioritario es true, suma 1 a Ticket.contadorP y guarda en this.numero
        el texto 'P-{contadorP}';
     b) si es false, suma 1 a Ticket.contadorN y guarda 'N-{contadorN}'.
  3. En Ticket crea emitidos(prioritarios: boolean): number, static y público.
     Devuelve contadorP si prioritarios es true, o contadorN si es false.
  4. En Ticket crea total(): number, static y público: la suma de ambos contadores.
  5. En Ticket crea reiniciar(): void, static y público: pone ambos contadores en 0.
  6. Fuera de la clase crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 21 — Utilidades de calendario
/*
SITUACIÓN
  Un calendario ofrece cálculos de fechas que no dependen de ningún objeto: basta la
  clase. Por eso todo es static.

QUÉ DEBES HACER
  1. Crea la clase Calendario. Declara una propiedad static pública y de solo
     lectura MESES_DE_30 (number[]) con el valor [4, 6, 9, 11].
  2. En Calendario crea esBisiesto(anio: number): boolean, static (supón entero >= 1):
     true si anio es divisible entre 4 y, además, no es divisible entre 100 o sí es
     divisible entre 400; false en otro caso.
  3. En Calendario crea diasDelMes(mes: number, anio: number): number, static (supón
     mes de 1 a 12). Evalúa en este orden:
     a) si mes es 2: 29 si el año es bisiesto, 28 si no (llama a this.esBisiesto);
     b) si mes aparece en MESES_DE_30 (recórrelo con for...of): 30;
     c) en cualquier otro caso: 31.
  4. En Calendario crea fechaValida(dia: number, mes: number, anio: number): boolean,
     static (supón enteros). Devuelve false si mes es menor que 1 o mayor que 12; false
     si dia es menor que 1 o mayor que los días de ese mes; true en otro caso.
  5. En Calendario crea diaDelAnio(dia: number, mes: number, anio: number): number,
     static (supón una fecha válida). Suma los días de todos los meses anteriores a mes
     (con un for desde 1 hasta mes - 1) más dia.
  6. Ejecuta las líneas de COMPRUEBA. No se necesita ninguna instancia.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 22 — Rifa con números únicos
/*
SITUACIÓN
  Una rifa vende boletos con número único. La lista de números ya vendidos es de la
  clase: la comparten todos los boletos. Para crear un boleto se usa un método static
  que antes comprueba que el número esté libre.

QUÉ DEBES HACER
  1. Crea la clase Boleto. Declara una propiedad static oculta asignados (number[]),
     vacía. Declara en su constructor numero (number, visible y de solo lectura).
     El constructor tiene el cuerpo vacío.
  2. En Boleto crea emitir(numero: number): Boleto | undefined, static y público.
     Rechaza (devuelve undefined) si numero no es entero, es menor que 1 o ya está en
     asignados. Si no, lo añade a asignados y devuelve new Boleto(numero).
     (Para crear boletos de la rifa usa siempre emitir.)
  3. En Boleto crea siguienteLibre(maximo: number): number | undefined, static y público.
     Devuelve el menor número entre 1 y maximo (ambos incluidos) que no esté en
     asignados; undefined si todos están tomados o maximo es menor que 1.
  4. En Boleto crea vendidos(): number, static y público: cuántos números hay en asignados.
  5. Ejecuta las líneas de COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 23 — Tasa de impuesto compartida
/*
SITUACIÓN
  Todas las facturas aplican el mismo porcentaje de impuesto. Ese porcentaje es de la
  clase: si cambia, cambia el total de todas las facturas, también las ya creadas.

QUÉ DEBES HACER
  1. Crea la clase Factura. Declara una propiedad static pública tasa (number) con
     valor inicial 10 (es un porcentaje). Declara en su constructor subtotal (number,
     oculto; supón un múltiplo de 100).
  2. En Factura crea impuesto(subtotal: number): number, static y público. Devuelve
     subtotal * this.tasa / 100.
  3. En Factura crea cambiarTasa(nueva: number): boolean, static y público. Rechaza
     (false) si nueva no es entero o no está entre 0 y 50 (ambos incluidos). Si no,
     guarda nueva en tasa y devuelve true.
  4. En Factura crea total(): number, público (de instancia). Devuelve subtotal más
     Factura.impuesto(subtotal).
  5. Fuera de la clase crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 24 — Salas de cine
/*
SITUACIÓN
  Un cine tiene varias salas. Cada sala vende sus asientos; la clase conoce todas las
  salas creadas y puede responder preguntas globales (capacidad total, la más llena).

QUÉ DEBES HACER
  1. Crea la clase Sala. Declara una propiedad static oculta salas (Sala[]), vacía, y
     una propiedad de instancia oculta vendidas (number) que empieza en 0.
  2. Crea el constructor con dos propiedades de parámetro visibles y de solo lectura,
     en este orden: nombre (string) y capacidad (number; supón entero >= 1). En el
     cuerpo, añade this a Sala.salas.
  3. En Sala crea vender(cantidad: number): boolean, público. Rechaza (false) si
     cantidad no es un entero mayor que 0 o si es mayor que libres() (igual a libres
     sí se acepta). Si no, suma cantidad a vendidas y devuelve true.
  4. En Sala crea libres(): number, público: capacidad menos vendidas.
  5. En Sala crea estos métodos static y públicos:
     a) numeroDeSalas(): number;
     b) capacidadTotal(): number: suma de las capacidades de todas las salas;
     c) libresTotal(): number: suma de los asientos libres de todas las salas;
     d) buscar(nombre: string): Sala | undefined: la primera sala con ese nombre;
     e) masLlena(): Sala | undefined: la de mayor ocupación. Compara sin dividir: A es
        más llena que B si A.vendidas * B.capacidad es mayor que B.vendidas * A.capacidad.
        Un método static de Sala sí puede leer vendidas de cualquier sala. Si hay empate,
        gana la creada antes; undefined si no hay salas.
  6. Ejecuta COMPRUEBA, en este orden (la primera línea va antes de crear las salas).

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
(() => {
    // Tu solución.
})();

// ============================================================================
// TRAMO 5 — EJERCICIOS 25 AL 31: 04 EXTENSE (extends, super y protected)
// Una subclase reutiliza a su padre: pasa sus datos con super(...), llama a sus
// métodos con super.metodo() y puede usar lo protected. Se combina con 01–03.
// ============================================================================

// !EJERCICIO 25 — Tarifas de viaje
/*
SITUACIÓN
  Una app de taxis calcula una tarifa base por kilómetro. Los viajes nocturnos y los
  del aeropuerto la ajustan de formas distintas, pero ambos parten de la misma base.

QUÉ DEBES HACER
  1. Crea la clase Viaje. Declara en su constructor, en este orden: destino (string,
     visible) y km (number, solo jerarquía; supón entero >= 1).
  2. En Viaje crea tarifaBase(): number, protected. Devuelve 30 + 12 * km.
  3. En Viaje crea descripcion(): string, público. Devuelve '{destino} ({km} km)'.
  4. Crea ViajeNocturno que extienda Viaje. Su constructor recibe destino y km y los
     pasa al padre con super(...).
  5. En ViajeNocturno crea precio(): number, público:
     a) obtén la base con super.tarifaBase();
     b) si km es 5 o menos, devuelve el doble de la base;
     c) si km es mayor que 5, devuelve la base más 100.
  6. Crea ViajeAeropuerto que extienda Viaje. Su constructor recibe destino, km y
     equipajes (number, visible; supón entero >= 0). Pasa destino y km al padre.
  7. En ViajeAeropuerto crea precio(): number, público:
     a) calcula super.tarifaBase() + 25 * equipajes;
     b) si ese total supera 500, devuelve 500; si no, devuelve el total.
  8. Fuera de las clases crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 26 — Tanque de riego
/*
SITUACIÓN
  Un tanque guarda litros hasta su capacidad. Un tanque de riego los usa por minutos.
  Cambiar el nivel directamente es cosa interna: desde fuera solo se recarga o se riega.

QUÉ DEBES HACER
  1. Crea la clase Tanque. Declara en su constructor, en este orden: litros (number,
     solo jerarquía) y capacidad (number, visible y de solo lectura). Supón litros
     entre 0 y capacidad.
  2. En Tanque crea nivel(): number, público. Devuelve litros.
  3. En Tanque crea agregar(n: number): boolean, protected. Rechaza (false) si n no es
     un entero mayor que 0 o si litros + n superaría capacidad (llegar justo a la
     capacidad sí se acepta). Si no, suma n a litros y devuelve true.
  4. En Tanque crea sacar(n: number): boolean, protected. Rechaza si n no es un entero
     mayor que 0 o si n es mayor que litros. Si no, resta n a litros y devuelve true.
  5. Crea TanqueRiego que extienda Tanque. Su constructor recibe litros, capacidad y
     litrosPorMinuto (number, oculto; supón entero >= 1). Pasa litros y capacidad al padre.
  6. En TanqueRiego crea recargar(n: number): boolean, público. Devuelve el resultado
     de super.agregar(n).
  7. En TanqueRiego crea regar(minutos: number): number, público (supón entero >= 0).
     Crea regados igual a 0. Mientras regados sea menor que minutos y
     super.sacar(this.litrosPorMinuto) devuelva true, suma 1 a regados. Devuelve regados.
  8. Fuera de las clases crea la instancia y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 27 — Rangos de un ejército
/*
SITUACIÓN
  Un ejército tiene tres rangos encadenados: un Capitán es un Soldado con tropas, y un
  General es un Capitán con estrategias. La fuerza se calcula por capas, cada rango
  aprovechando la capa del anterior.

QUÉ DEBES HACER
  1. Crea la clase Soldado. Declara en su constructor nombre (string, visible) y
     nivel (number, solo jerarquía; supón entero >= 1).
  2. En Soldado crea fuerzaSoldado(): number, protected: nivel * 10.
  3. En Soldado crea presentar(): string, público: '{nombre} (nivel {nivel})'.
  4. Crea Capitan que extienda Soldado. Su constructor recibe nombre, nivel y tropas
     (number, solo jerarquía; supón entero >= 0). Pasa nombre y nivel al padre.
  5. En Capitan crea fuerzaCapitan(): number, protected: super.fuerzaSoldado() + tropas * 5.
  6. En Capitan crea presentarCapitan(): string, público: el texto de super.presentar()
     seguido de ' con {tropas} tropas'.
  7. Crea General que extienda Capitan. Su constructor recibe nombre, nivel, tropas y
     estrategias (number, oculto; supón entero >= 0). Pasa nombre, nivel y tropas al padre.
  8. En General crea fuerzaGeneral(): number, público:
     a) calcula super.fuerzaCapitan() + estrategias * 100;
     b) si estrategias es 3 o más, devuelve el doble de ese valor; si no, el valor.
  9. En General crea presentarGeneral(): string, público: el texto de
     super.presentarCapitan() seguido de ' y {estrategias} estrategias'.
  10. Fuera de las clases crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 28 — Pases de museo
/*
SITUACIÓN
  Un museo vende pases con distintos descuentos. La clase base calcula el precio con el
  porcentaje que recibe; cada tipo de pase solo decide qué porcentaje enviar al padre.

QUÉ DEBES HACER
  1. Crea la clase Pase. Declara en su constructor, en este orden: visitante (string,
     visible) y descuento (number, solo jerarquía; porcentaje entero de 0 a 100).
  2. En Pase crea precio(): number, público. Devuelve 200 * (100 - descuento) / 100.
  3. En Pase crea esGratis(): boolean, público: true si precio() devuelve 0.
  4. Crea PaseGeneral que extienda Pase. Su constructor recibe visitante y pasa al padre
     visitante y un descuento de 0.
  5. Crea PaseEstudiante que extienda Pase. Su constructor recibe visitante y pasa al
     padre visitante y un descuento de 30.
  6. Crea PaseJubilado que extienda Pase. Su constructor recibe visitante y edad
     (number; es un parámetro normal, no una propiedad; supón entero >= 60). Pasa al
     padre visitante y un descuento de 100 si edad es 80 o más, o de 50 si es menor.
  7. Fuera de las clases crea recaudar(pases: Pase[]): number: la suma de los precios
     (0 si la lista está vacía).
  8. Fuera de las clases crea gratuitos(pases: Pase[]): string[]: los nombres, en
     orden, de los visitantes cuyo pase es gratis.
  9. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 29 — Examen con mínimo para aprobar
/*
SITUACIÓN
  Un examen recibe respuestas una por una y cuenta los aciertos. El examen final añade
  un porcentaje mínimo para aprobar y solo da resultado cuando se respondió todo.

QUÉ DEBES HACER
  1. Crea la clase Examen. Declara en su constructor, en este orden: alumno (string,
     visible y de solo lectura) y totalPreguntas (number, solo jerarquía; supón
     entero >= 1). Declara además dos propiedades protected, respondidas y aciertos
     (number), ambas con valor inicial 0.
  2. En Examen crea responder(correcta: boolean): boolean, público. Rechaza (false) si
     respondidas ya es igual a totalPreguntas. Si no, suma 1 a respondidas, suma 1 a
     aciertos solo si correcta es true y devuelve true.
  3. En Examen crea faltan(): number, público: totalPreguntas menos respondidas.
  4. Crea ExamenFinal que extienda Examen. Su constructor recibe alumno,
     totalPreguntas y minimo (number, oculto; porcentaje entero de 1 a 100). Pasa
     alumno y totalPreguntas al padre.
  5. En ExamenFinal crea responderVarias(respuestas: boolean[]): number, público.
     Recorre respuestas en orden; para cada una llama a super.responder(r). Devuelve
     cuántas aceptó el padre.
  6. En ExamenFinal crea aprobado(): boolean, público: false si respondidas es menor
     que totalPreguntas; si no, true cuando aciertos * 100 sea mayor o igual que
     totalPreguntas * minimo.
  7. En ExamenFinal crea resultado(): string, público: 'pendiente' si respondidas es
     menor que totalPreguntas; si no, 'aprobado' cuando this.aprobado() sea true y
     'reprobado' cuando sea false.
  8. Fuera de las clases crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 30 — Parqueadero con placas
/*
SITUACIÓN
  Una clase base lleva la cuenta de plazas ocupadas. El parqueadero añade la lista de
  placas que están dentro y decide cuándo ocupar o liberar una plaza.

QUÉ DEBES HACER
  1. Crea la clase Plazas. Declara en su constructor total (number, visible y de solo
     lectura; supón entero >= 1). Declara además ocupadas (number, solo jerarquía) con
     valor inicial 0.
  2. En Plazas crea disponibles(): number, público: total menos ocupadas.
  3. En Plazas crea ocupar(): boolean, protected. Rechaza (false) si ocupadas es igual
     a total. Si no, suma 1 a ocupadas y devuelve true.
  4. En Plazas crea liberar(): boolean, protected. Rechaza si ocupadas es 0. Si no, resta
     1 a ocupadas y devuelve true.
  5. Crea Parqueadero que extienda Plazas. Su constructor recibe total y lo pasa al
     padre. Declara en Parqueadero un array oculto placas (string[]), vacío.
  6. En Parqueadero crea entrar(placa: string): boolean, público. Evalúa en este orden:
     a) rechaza si placa es '';
     b) rechaza si la placa ya está en placas;
     c) rechaza si super.ocupar() devuelve false (solo se llama si a) y b) pasaron);
     d) si no, añade placa y devuelve true.
  7. En Parqueadero crea salir(placa: string): boolean, público. Rechaza si la placa no
     está. Si está, llama a super.liberar(), deja en placas un array nuevo sin esa placa
     y devuelve true.
  8. En Parqueadero crea estaDentro(placa: string): boolean, público.
  9. En Parqueadero crea placasDentro(): string[], público: una copia de placas.
  10. Fuera de las clases crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 31 — Guerrero y mago contra un jefe
/*
SITUACIÓN
  Todo personaje recibe golpes con la misma regla: la defensa resta daño. Un guerrero
  ataca con su fuerza y recupera vida al descansar; un mago gasta maná en hechizos.

QUÉ DEBES HACER
  1. Crea la clase Personaje. Declara en su constructor, en este orden: nombre (string,
     visible y de solo lectura), vida (number, solo jerarquía) y defensa (number, solo
     jerarquía). Supón enteros >= 0 y vida >= 1. Declara además vidaMaxima (number, solo
     jerarquía y de solo lectura) y en el cuerpo del constructor guárdala igual a vida.
  2. En Personaje crea estaVivo(): boolean y vidaRestante(): number, públicos. Devuelven
     si vida es mayor que 0 y el valor de vida.
  3. En Personaje crea recibirGolpe(dano: number): number, público (supón entero >= 0):
     a) el daño real es dano menos defensa; si da negativo, es 0;
     b) si el daño real es mayor que vida, es igual a vida;
     c) resta el daño real a vida y devuélvelo.
  4. En Personaje crea recuperar(n: number): number, protected (supón entero >= 0). Suma
     n a vida sin pasar de vidaMaxima y devuelve cuánto se sumó realmente.
  5. Crea Guerrero que extienda Personaje. Su constructor recibe nombre, vida, defensa y
     fuerza (number, oculto; supón entero >= 1). Pasa los tres primeros al padre.
  6. En Guerrero crea atacar(rival: Personaje): number, público. Si el guerrero o el
     rival no están vivos, devuelve 0. Si no, devuelve rival.recibirGolpe(this.fuerza).
  7. En Guerrero crea descansar(): number, público. Si el guerrero no está vivo,
     devuelve 0. Si no, devuelve super.recuperar(5).
  8. Crea Mago que extienda Personaje. Su constructor recibe nombre, vida, defensa y mana
     (number, oculto; supón entero >= 0). Pasa los tres primeros al padre.
  9. En Mago crea manaRestante(): number, público. Devuelve mana.
  10. En Mago crea hechizo(rival: Personaje): number, público. Si el mago o el rival no
      están vivos, o si mana es menor que 10, devuelve 0 y no cambia nada. Si no, resta
      10 a mana y devuelve rival.recibirGolpe(20).
  11. Fuera de las clases crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// ============================================================================
// TRAMO 6 — EJERCICIOS 32 AL 37: 06 GETS Y SETS
// get calcula o devuelve un valor al leer una propiedad; set valida o transforma
// el valor al asignarla. Se usan sin paréntesis. Se combinan con 01–04.
// ============================================================================

// !EJERCICIO 32 — Brillo de pantalla
/*
SITUACIÓN
  Una pantalla tiene un nivel de brillo entre 0 y 100. Quien lo asigna puede
  equivocarse: el valor se ajusta al rango en lugar de rechazarse. Además la
  pantalla describe su brillo con una etiqueta que no se puede asignar.

QUÉ DEBES HACER
  1. Crea la clase Pantalla. Declara una propiedad oculta _nivel (number) con valor
     inicial 50.
  2. En Pantalla crea el getter nivel, que devuelve number: el valor de _nivel.
  3. En Pantalla crea el setter nivel(valor: number) (supón entero), con el mismo
     nombre que el getter. Evalúa en este orden:
     a) si valor es menor que 0, guarda 0 en _nivel;
     b) si valor es mayor que 100, guarda 100;
     c) en otro caso, guarda valor.
     El setter no lanza errores.
  4. En Pantalla crea el getter etiqueta, que devuelve string, sin setter: 'oscuro'
     si nivel es menor que 30; 'medio' si es menor que 70; 'brillante' en otro caso.
  5. Fuera de la clase crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 33 — Progreso de una lista de tareas
/*
SITUACIÓN
  Una lista de tareas separa las pendientes de las hechas. El progreso, las tareas
  que faltan y si todo terminó se calculan al leerlos: no se guardan.

QUÉ DEBES HACER
  1. Crea la clase ListaTareas. Declara dos arrays ocultos, pendientes y hechas
     (string[]), ambos vacíos.
  2. En ListaTareas crea agregar(titulo: string): boolean, público. Rechaza (false) si
     titulo es '', o si ya está en pendientes o en hechas. Si no, lo añade al final de
     pendientes y devuelve true.
  3. En ListaTareas crea completar(titulo: string): boolean, público. Rechaza si el título
     no está en pendientes. Si está, deja en pendientes un array nuevo sin él, lo añade
     al final de hechas y devuelve true.
  4. En ListaTareas crea el getter faltantes, que devuelve string[]: una copia de pendientes.
  5. En ListaTareas crea el getter progreso, que devuelve number: 0 si no hay ninguna
     tarea; si no, hechas * 100 / total, donde total son las tareas pendientes más las
     hechas. No redondees.
  6. En ListaTareas crea el getter terminada, que devuelve boolean: true si hay al menos
     una tarea y no queda ninguna pendiente.
  7. Fuera de la clase crea la instancia y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 34 — Apodo validado
/*
SITUACIÓN
  Un perfil de jugador guarda un apodo. El setter solo acepta apodos válidos; los
  inválidos se ignoran sin error. El perfil cuenta cuántas veces cambió realmente.

QUÉ DEBES HACER
  1. Crea la clase PerfilJugador. Declara dos propiedades ocultas: _apodo (string) con
     valor inicial 'Anónimo' y _cambios (number) con valor inicial 0.
  2. En PerfilJugador crea el getter apodo, que devuelve string.
  3. En PerfilJugador crea el setter apodo(valor: string). Ignora el valor (no cambia
     nada ni lanza error) si ocurre cualquiera de estas cosas:
     a) valor es igual al apodo actual;
     b) valor tiene menos de 3 o más de 12 caracteres (3 y 12 sí valen);
     c) algún carácter de valor no es una letra sin acento de la a a la z (mayúscula o
        minúscula) ni un dígito de 0 a 9. Recórrelo con for...of y compara cada
        carácter con 'a', 'z', 'A', 'Z', '0' y '9' usando >= y <=.
     Si el valor pasa todo, guárdalo en _apodo y suma 1 a _cambios.
  4. En PerfilJugador crea el getter cambios, que devuelve number y no tiene setter.
  5. Fuera de la clase crea la instancia y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 35 — Equipaje con errores
/*
SITUACIÓN
  Una aerolínea pesa maletas. Un peso imposible no se ignora: el setter lanza un Error.
  Para eso usa un método privado cuyo retorno es never (nunca termina con normalidad).

QUÉ DEBES HACER
  1. Crea la clase Maleta. Declara una propiedad oculta _peso (number) con valor
     inicial 0.
  2. En Maleta crea fallar(mensaje: string): never, privado. Su cuerpo es
     throw new Error(mensaje).
  3. En Maleta crea el getter peso, que devuelve number.
  4. En Maleta crea el setter peso(valor: number) (supón entero). Evalúa en este orden:
     a) si valor es menor que 0, llama a this.fallar('Peso negativo');
     b) si valor es mayor que 23, llama a this.fallar('Excede 23 kg') (23 se acepta);
     c) si no, guarda valor en _peso.
  5. En Maleta crea el getter exceso, que devuelve number y no tiene setter: 0 si peso
     es 15 o menos; si no, peso menos 15.
  6. En Maleta crea el getter cobro, que devuelve number: exceso * 10.
  7. Fuera de la clase crea la instancia y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 36 — Termostato con objetivo limitado
/*
SITUACIÓN
  Un termostato base conoce un rango de temperaturas permitido. El termostato
  inteligente añade una temperatura objetivo que siempre queda dentro de ese rango, y
  un modo que se calcula comparando la temperatura actual con el objetivo.

QUÉ DEBES HACER
  1. Crea la clase Termostato. Declara en su constructor, en este orden: minimo
     (number, solo jerarquía) y maximo (number, solo jerarquía). Supón minimo < maximo.
  2. En Termostato crea ajustar(valor: number): number, protected. Devuelve minimo si
     valor es menor que minimo; maximo si es mayor que maximo; si no, devuelve valor.
  3. Crea TermostatoInteligente que extienda Termostato. Su constructor recibe minimo,
     maximo y actual (number, oculto; supón un valor entre minimo y maximo). Pasa minimo
     y maximo al padre. Declara además una propiedad oculta _objetivo (number) y, en el
     cuerpo del constructor, guárdala igual a actual.
  4. En TermostatoInteligente crea el getter objetivo, que devuelve number.
  5. En TermostatoInteligente crea el setter objetivo(valor: number). Guarda en
     _objetivo el resultado de super.ajustar(valor).
  6. En TermostatoInteligente crea el getter modo, que devuelve string y no tiene setter:
     a) 'calentando' si actual es menor que _objetivo - 1;
     b) 'enfriando' si actual es mayor que _objetivo + 1;
     c) 'reposo' en cualquier otro caso.
  7. En TermostatoInteligente crea sensar(nueva: number): void, público. Guarda nueva en actual.
  8. Fuera de las clases crea la instancia y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 37 — Hoja de horas con pago calculado
/*
SITUACIÓN
  Una hoja de horas guarda las horas trabajadas por día como parejas [día, horas].
  Los totales, las horas extra y el pago se calculan al leerlos. La tarifa se puede
  cambiar, pero solo por un valor válido.

QUÉ DEBES HACER
  1. Crea la clase HojaDeHoras. Declara una propiedad oculta registros, un array de
     tuplas [string, number] (tipo [string, number][]), vacío, y una propiedad oculta
     _tarifa (number) con valor inicial 100.
  2. En HojaDeHoras crea horasExtra(horas: number): number, privado: horas menos 8 si
     horas es mayor que 8; 0 en otro caso.
  3. En HojaDeHoras crea registrar(dia: string, horas: number): boolean, público.
     Evalúa en este orden:
     a) rechaza (false) si horas no es entero o no está entre 1 y 12 (ambos incluidos);
     b) rechaza si dia ya existe en registros (compara con el primer elemento de cada tupla);
     c) si no, añade la tupla [dia, horas] al final y devuelve true.
  4. En HojaDeHoras crea estos getters, todos sin setter y que devuelven number:
     a) dias: cuántos registros hay;
     b) total: la suma de las horas de todos los registros;
     c) extras: la suma de this.horasExtra(horas) de cada registro;
     d) normales: total menos extras.
  5. En HojaDeHoras crea el getter tarifa (devuelve number) y el setter tarifa(valor:
     number). El setter ignora el valor, sin error, si no es entero o si es 0 o menos.
  6. En HojaDeHoras crea el getter pago, que devuelve number y no tiene setter:
     normales * tarifa + extras * tarifa * 2.
  7. Fuera de la clase crea la instancia y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// ============================================================================
// TRAMO 7 — EJERCICIOS 38 AL 42: 07 CLASES ABSTRACTAS
// Una clase abstract es una base común que no se puede instanciar. Sus métodos
// abstract no tienen cuerpo y cada subclase concreta debe implementarlos. Se
// combina con herencia, accesores, colecciones y todo lo anterior.
// ============================================================================

// !EJERCICIO 38 — Promociones de panadería
/*
SITUACIÓN
  Una panadería aplica promociones distintas. Todas calculan el total igual (cantidad
  por precio menos el descuento, sin bajar de 0), pero cada una decide su descuento a
  su manera.

QUÉ DEBES HACER
  1. Crea la clase abstracta Promocion. Declara en su constructor nombre (string,
     visible y de solo lectura).
  2. En Promocion declara el método abstracto descuento(cantidad: number, precio:
     number): number. No lleva cuerpo.
  3. En Promocion crea total(cantidad: number, precio: number): number, público y con
     cuerpo (supón enteros >= 0):
     a) calcula bruto como cantidad * precio;
     b) calcula d con this.descuento(cantidad, precio);
     c) si d es mayor o igual que bruto devuelve 0; si no, devuelve bruto - d.
  4. Crea PorcentajePromo que extienda Promocion. Su constructor recibe nombre y
     porcentaje (number, oculto; entero de 0 a 100). Pasa nombre al padre. Su descuento
     es cantidad * precio * porcentaje / 100.
  5. Crea TresPorDos que extienda Promocion. Su constructor recibe nombre y lo pasa al
     padre. Su descuento: gratis es (cantidad - cantidad % 3) / 3 y devuelve
     gratis * precio.
  6. Crea DescuentoFijo que extienda Promocion. Su constructor recibe nombre y monto
     (number, oculto). Pasa nombre al padre. Su descuento devuelve monto.
  7. Fuera de las clases crea mejorPromo(promos: Promocion[], cantidad: number, precio:
     number): string | undefined. Devuelve el nombre de la promoción con el menor total;
     si hay empate, la que aparece antes; undefined si la lista está vacía.
  8. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 39 — Sensores con estado
/*
SITUACIÓN
  Una estación mide con sensores de varios tipos. Todos se leen igual (leer()), pero cada
  tipo produce sus valores a su manera y algunos recuerdan su estado entre lecturas.

QUÉ DEBES HACER
  1. Crea la clase abstracta Sensor. Declara en su constructor nombre (string, visible
     y de solo lectura).
  2. En Sensor declara el método abstracto leer(): number.
  3. Crea SensorFijo que extienda Sensor. Su constructor recibe nombre y valor (number,
     oculto). Pasa nombre al padre. Su leer() devuelve valor.
  4. Crea SensorCiclico que extienda Sensor. Su constructor recibe nombre y valores
     (number[], oculto; supón al menos un elemento). Pasa nombre al padre. Declara
     posicion (number, oculta) con valor inicial 0. Su leer():
     a) toma valores[posicion] (con ?? 0 para el tipo);
     b) suma 1 a posicion y, si llega a la longitud de valores, la vuelve a 0;
     c) devuelve el valor tomado en a).
  5. Crea SensorAcumulativo que extienda Sensor. Su constructor recibe nombre y paso
     (number, oculto). Pasa nombre al padre. Declara acumulado (number, oculta) con valor
     inicial 0. Su leer() suma paso a acumulado y devuelve acumulado.
  6. Fuera de las clases crea promedioLecturas(sensores: Sensor[], veces: number): number.
     Si no hay sensores o veces es 0 o menos, devuelve 0. Si no, lee cada sensor
     «veces» veces (sensor por sensor), suma todas las lecturas y devuelve esa suma
     entre (cantidad de sensores * veces).
  7. Crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 40 — Cajas para empacar
/*
SITUACIÓN
  Una bodega empaca unidades en distintos recipientes. Todos calculan cuántos
  recipientes hacen falta y cuánto espacio sobra igual; solo cambia la capacidad de cada uno.

QUÉ DEBES HACER
  1. Crea la clase abstracta Empaque. Declara en su constructor nombre (string, visible
     y de solo lectura).
  2. En Empaque declara el método abstracto capacidad(): number.
  3. En Empaque crea cajasNecesarias(unidades: number): number, público y con cuerpo
     (supón entero >= 0 y capacidad() mayor que 0):
     a) crea cajas igual a 0 y restante igual a unidades;
     b) mientras restante sea mayor que 0, resta this.capacidad() a restante y suma
        1 a cajas;
     c) devuelve cajas.
  4. En Empaque crea sobrante(unidades: number): number, público: cajasNecesarias(unidades)
     * capacidad() - unidades.
  5. Crea CajaChica que extienda Empaque. Su constructor no recibe nada y pasa el texto
     'Caja chica' al padre. Su capacidad() devuelve 12.
  6. Crea CajaGrande que extienda Empaque. Su constructor no recibe nada y pasa 'Caja grande'
     al padre. Su capacidad() devuelve 30.
  7. Crea Bandeja que extienda Empaque. Su constructor recibe filas y columnas (number,
     ambos ocultos; supón enteros >= 1) y pasa 'Bandeja' al padre. Su capacidad()
     devuelve filas * columnas.
  8. Fuera de las clases crea mejorEmpaque(opciones: Empaque[], unidades: number): Empaque |
     undefined. Devuelve la opción con menos cajasNecesarias; si empatan, la de menor
     sobrante; si siguen empatadas, la que aparece antes; undefined si la lista está vacía.
  9. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 41 — Nómina de una empresa
/*
SITUACIÓN
  Una empresa paga a tres tipos de empleados con fórmulas distintas. La nómina guarda
  empleados de cualquier tipo y calcula totales usando solo lo que todos tienen en común.

QUÉ DEBES HACER
  1. Crea la clase abstracta Empleado. Declara en su constructor nombre (string,
     visible y de solo lectura).
  2. En Empleado declara el método abstracto pagoMensual(): number.
  3. Crea Asalariado que extienda Empleado. Su constructor recibe nombre y salario
     (number, oculto). Pasa nombre al padre. Su pagoMensual() devuelve salario.
  4. Crea PorHoras que extienda Empleado. Su constructor recibe nombre, tarifa y horas
     (number, ambos ocultos; supón enteros >= 0). Pasa nombre al padre. Su pagoMensual(): si horas es 160 o
     menos, horas * tarifa; si es mayor, 160 * tarifa más el doble de tarifa por cada
     hora que pase de 160.
  5. Crea Comisionista que extienda Empleado. Su constructor recibe nombre, base
     (number, oculto) y ventas (number[], oculto; supón cada venta múltiplo de 20). Pasa
     nombre al padre. Su pagoMensual() devuelve base más la suma de las ventas * 5 / 100.
  6. Crea la clase concreta Nomina. Declara un array oculto empleados (Empleado[]), vacío.
  7. En Nomina crea agregar(e: Empleado): boolean, público. Rechaza (false) si ya hay un
     empleado con el mismo nombre. Si no, lo añade al final y devuelve true.
  8. En Nomina crea total(): number, público: la suma de todos los pagoMensual().
  9. En Nomina crea mayorPago(): string | undefined, público: el nombre del empleado con el
     mayor pagoMensual(); si hay empate, el que se agregó antes; undefined si no hay empleados.
  10. En Nomina crea conPagoMayorA(monto: number): string[], público: los nombres, en
      orden, de quienes cobran estrictamente más que monto ([] si ninguno).
  11. Fuera de las clases crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 42 — Validadores de texto
/*
SITUACIÓN
  Un formulario valida textos con reglas distintas. La base decide que un texto vacío
  nunca es válido y llama a la regla concreta; la regla concreta es un detalle interno
  que solo ven la base y sus subclases.

QUÉ DEBES HACER
  1. Crea la clase abstracta Validador (sin constructor propio).
  2. En Validador declara el método abstracto regla(valor: string): boolean, protected.
     No lleva cuerpo.
  3. En Validador crea validar(valor: string): boolean, público y con cuerpo: true si
     valor no es '' y this.regla(valor) devuelve true; false en otro caso.
  4. En Validador crea contarValidos(valores: string[]): number, público: cuántos
     textos del array pasan this.validar.
  5. Crea SoloDigitos que extienda Validador. Su regla devuelve true si todos los
     caracteres del texto están entre '0' y '9' (recórrelo con for...of).
  6. Crea LongitudEntre que extienda Validador. Su constructor recibe minimo y maximo
     (number, ambos ocultos) y llama a super() sin argumentos. Su regla devuelve true si la longitud del texto es mayor o
     igual que minimo y menor o igual que maximo.
  7. Crea Correo que extienda Validador. Su regla devuelve true si el texto tiene
     exactamente un '@' y ni el primer carácter ni el último son '@' (usa charAt(0) y
     charAt(valor.length - 1)).
  8. Fuera de las clases crea cuantosAceptan(validadores: Validador[], valor: string):
     number: cuántos validadores de la lista devuelven true con validar(valor).
  9. Crea las instancias y ejecuta COMPRUEBA.

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
(() => {
    // Tu solución.
})();

// ============================================================================
// TRAMO 8 — EJERCICIOS 43 AL 45: 08 CONSTRUCTOR PRIVADO Y SINGLETON
// Un constructor private impide crear instancias con new desde fuera: la propia clase
// decide cuándo crearlas, normalmente mediante un método static. El patrón Singleton
// guarda una única instancia y devuelve siempre la misma. Se combina con 01–07.
// ============================================================================

// !EJERCICIO 43 — Bitácora compartida
/*
SITUACIÓN
  Una aplicación necesita una única bitácora de mensajes que todos los módulos
  compartan. Nadie debe poder crear otra bitácora con new.

QUÉ DEBES HACER
  1. Crea la clase Bitacora. Declara una propiedad static oculta instancia, de tipo
     Bitacora | undefined, sin valor inicial. Declara un constructor privado sin
     parámetros y con cuerpo vacío. Declara también un array oculto registros
     (string[]), vacío.
  2. En Bitacora crea obtener(): Bitacora, static y público: si instancia es undefined,
     créala con new Bitacora() y guárdala; devuelve instancia.
  3. En Bitacora crea anotar(mensaje: string): boolean, público. Rechaza (false) si
     mensaje es '' o si es igual al último mensaje guardado. Si no, lo añade al final
     y devuelve true.
  4. En Bitacora crea total(): number, público: cuántos mensajes hay.
  5. En Bitacora crea ultimos(n: number): string[], público (supón n entero). Devuelve
     una copia de los últimos n mensajes, del más antiguo al más reciente. Si n es 0 o
     menos devuelve []; si n es mayor o igual que el total, devuelve todos.
  6. En Bitacora crea vaciar(): number, público: borra todos los mensajes y devuelve
     cuántos había.
  7. Ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 44 — Fracciones siempre simplificadas
/*
SITUACIÓN
  Una fracción nunca debe existir sin simplificar ni con denominador 0. Por eso su
  constructor es privado: solo se crean fracciones mediante métodos de la clase, que
  validan y simplifican antes de construirlas.

QUÉ DEBES HACER
  1. Crea la clase Fraccion. Declara un constructor privado con dos propiedades de
     parámetro, en este orden: numerador y denominador (number, visibles y de solo
     lectura). El cuerpo queda vacío.
  2. En Fraccion crea simplificar(n: number, d: number): Fraccion, static y privado
     (supón enteros y d distinto de 0):
     a) si d es negativo, multiplica n y d por -1;
     b) calcula el máximo común divisor con el algoritmo de Euclides: a es el valor
        positivo de n (si n es negativo, -n) y b es d; mientras b no sea 0, calcula
        resto como a % b, pasa b a a y resto a b; el divisor es a;
     c) devuelve new Fraccion(n / divisor, d / divisor).
  3. En Fraccion crea crear(numerador: number, denominador: number): Fraccion | undefined,
     static y público. Rechaza (undefined) si alguno no es entero o si denominador es 0.
     Si no, devuelve el resultado de Fraccion.simplificar con esos valores.
  4. En Fraccion crea sumar(otra: Fraccion): Fraccion, público. Devuelve
     Fraccion.simplificar(n1 * d2 + n2 * d1, d1 * d2), donde n1 y d1 son los de esta
     fracción y n2 y d2 los de otra.
  5. En Fraccion crea esMayorQue(otra: Fraccion): boolean, público: true si
     numerador * otra.denominador es mayor que otra.numerador * denominador.
  6. En Fraccion crea texto(): string, público: '{numerador}' si el denominador es 1;
     en otro caso '{numerador}/{denominador}'.
  7. Ejecuta COMPRUEBA, en este orden. «as Fraccion» solo le dice a TypeScript que
     esas fracciones sí se crearon.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 45 — Aforo compartido entre puertas
/*
SITUACIÓN
  Un estadio tiene varias puertas, pero un único aforo: las personas que entran por una
  puerta ocupan lugar para todas. El aforo es un Singleton; las puertas son instancias
  normales que lo consultan.

QUÉ DEBES HACER
  1. Crea la clase Aforo. Declara una propiedad static oculta unica, de tipo
     Aforo | undefined, sin valor inicial. Declara un constructor privado con una
     propiedad de parámetro: capacidad (number, oculta). Declara además dentro (number,
     oculta) con valor inicial 0.
  2. En Aforo crea obtener(): Aforo, static y público: si unica es undefined, créala con
     new Aforo(100) y guárdala; devuelve unica.
  3. En Aforo crea configurar(capacidad: number): boolean, público. Rechaza (false) si
     capacidad no es un entero mayor que 0 o si dentro no es 0. Si no, la guarda y
     devuelve true.
  4. En Aforo crea ingresar(n: number): boolean, público. Rechaza si n no es un entero
     mayor que 0 o si dentro + n superaría capacidad (llegar justo a capacidad sí se
     acepta). Si no, suma n a dentro y devuelve true.
  5. En Aforo crea salir(n: number): boolean, público. Rechaza si n no es un entero mayor
     que 0 o si n es mayor que dentro. Si no, resta n a dentro y devuelve true.
  6. En Aforo crea lugaresLibres(): number, público: capacidad menos dentro.
  7. Crea la clase Puerta (constructor público). Declara en su constructor nombre
     (string, visible y de solo lectura). Declara además entradas y salidas (number,
     ocultas), ambas con valor inicial 0.
  8. En Puerta crea entrar(personas: number): boolean, público. Llama a
     Aforo.obtener().ingresar(personas); si lo acepta, suma personas a entradas. Devuelve
     lo que devolvió el aforo.
  9. En Puerta crea salir(personas: number): boolean, público. Igual que entrar, pero con
     Aforo.obtener().salir(personas) y la propiedad salidas.
  10. En Puerta crea resumen(): string, público: '{nombre}: entraron {entradas}, salieron
      {salidas}'.
  11. Fuera de las clases ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// ============================================================================
// TRAMO 9 — EJERCICIOS 46 AL 50: INTEGRACIÓN FINAL
// Cada ejercicio combina varios temas de la sección (clases abstractas, herencia,
// static, accesores, constructor privado, Singleton) con arrays, tuplas, enum, Record,
// uniones y funciones como parámetro de las secciones anteriores.
// ============================================================================

// !EJERCICIO 46 — Comandas de un restaurante
/*
SITUACIÓN
  Un restaurante prepara tres tipos de platos con tiempos distintos. Cada comanda
  recibe un número único, guarda hasta seis platos y calcula su precio y su tiempo.
  Una comanda también puede listar los platos que cumplan una condición que se le pase.

QUÉ DEBES HACER
  1. Crea la clase abstracta Plato. Declara en su constructor, en este orden: nombre
     (string, visible y de solo lectura) y precio (number, visible y de solo lectura).
     Declara el método abstracto tiempo(): number.
  2. Crea Aperitivo que extienda Plato. Su constructor recibe nombre y precio y los pasa
     al padre. Su tiempo() devuelve 5.
  3. Crea PlatoFuerte que extienda Plato. Su constructor recibe nombre, precio y
     guarniciones (number, oculto; supón entero >= 0). Su tiempo() devuelve
     15 + 3 * guarniciones.
  4. Crea Postre que extienda Plato. Su constructor recibe nombre, precio y frio
     (boolean, oculto). Su tiempo() devuelve 4 si frio es true, o 10 si es false.
  5. Crea la clase Comanda. Declara una propiedad static oculta contador (number) con
     valor inicial 0, una propiedad oculta platos (Plato[]), vacía, y numero (number,
     visible y de solo lectura). Su constructor no recibe nada: suma 1 a Comanda.contador
     y guarda ese valor en this.numero.
  6. En Comanda crea emitidas(): number, static y público: devuelve contador.
  7. En Comanda crea agregar(p: Plato): boolean, público. Rechaza (false) si ya hay 6
     platos. Si no, lo añade al final y devuelve true. Se permite repetir el mismo plato.
  8. En Comanda crea el getter total, que devuelve number: la suma de los precios de los
     platos (0 si no hay).
  9. En Comanda crea el getter tiempoTotal, que devuelve number: 0 si no hay platos; si
     no, el tiempo() del plato más lento más 2 minutos por cada plato adicional (es decir,
     2 * (cantidad de platos - 1)).
  10. En Comanda crea filtrar(condicion: (p: Plato) => boolean): string[], público.
      Recorre los platos en orden y devuelve los nombres de los que cumplen condicion.
  11. Fuera de las clases crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 47 — Sala de espera con triage
/*
SITUACIÓN
  Un hospital atiende por gravedad y, a igual gravedad, por orden de llegada. Cada tipo
  de paciente calcula su tiempo de atención a su manera. La gravedad es un enum.

QUÉ DEBES HACER
  1. Dentro de tu función, antes de las clases, declara:
     enum Gravedad { Leve = 1, Moderada = 2, Grave = 3 }
  2. Crea la clase abstracta Paciente. Declara en su constructor, en este orden: nombre
     (string, visible y de solo lectura) y gravedad (Gravedad, visible y de solo lectura).
     Declara el método abstracto minutos(): number.
  3. Crea Adulto que extienda Paciente. Su constructor recibe nombre y gravedad y los pasa
     al padre. Su minutos() devuelve 10 * gravedad.
  4. Crea Nino que extienda Paciente. Su constructor recibe nombre, gravedad y edad
     (number, oculto; supón entero >= 0). Su minutos() devuelve 8 * gravedad, más 5 si
     edad es menor que 3.
  5. Crea la clase SalaEspera. Declara un array oculto fila (Paciente[]), vacío, y una
     propiedad static oculta llegadas (number) con valor inicial 0.
  6. En SalaEspera crea ingresar(p: Paciente): boolean, público. Rechaza (false) si ya hay
     en la fila un paciente con el mismo nombre. Si no, lo añade al final, suma 1 a
     SalaEspera.llegadas y devuelve true.
  7. En SalaEspera crea los getters pendientes (number: cuántos hay en la fila) y
     esperaEstimada (number: la suma de minutos() de todos los pacientes de la fila).
  8. En SalaEspera crea siguiente(): Paciente | undefined, público. Devuelve el paciente de
     mayor gravedad; si hay empate, el que está antes en la fila; undefined si la fila está
     vacía. No lo saca de la fila.
  9. En SalaEspera crea atender(): string, público. Si la fila está vacía, devuelve
     'sala vacía'. Si no, saca de la fila al paciente que devuelve this.siguiente()
     (deja en fila un array nuevo sin él) y devuelve '{nombre} ({minutos} min)'.
  10. En SalaEspera crea totalLlegadas(): number, static y público: devuelve llegadas.
  11. Fuera de las clases crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 48 — Pista de aterrizaje única
/*
SITUACIÓN
  Un aeropuerto tiene una sola pista, un Singleton. Las aeronaves piden turno: la
  primera aterriza, las demás esperan en una cola de hasta tres. Cada tipo de aeronave
  ocupa la pista un tiempo distinto.

QUÉ DEBES HACER
  1. Crea la clase abstracta Aeronave. Declara en su constructor, en este orden:
     matricula (string, visible y de solo lectura) y pasajeros (number, solo jerarquía).
     Declara el método abstracto minutosEnPista(): number.
  2. En Aeronave crea describir(): string, público: '{matricula} con {pasajeros} pasajeros'.
  3. Crea Avioneta que extienda Aeronave. Su constructor recibe matricula y pasajeros y los
     pasa al padre. Su minutosEnPista() devuelve 5.
  4. Crea Helicoptero que extienda Aeronave, con el mismo constructor. Su minutosEnPista()
     devuelve 3.
  5. Crea Comercial que extienda Aeronave, con el mismo constructor. Su minutosEnPista()
     devuelve 15 si pasajeros es mayor que 150, o 10 si no.
  6. Crea la clase Pista. Declara una propiedad static oculta unica (Pista | undefined),
     sin valor inicial, y un constructor privado sin parámetros y con cuerpo vacío.
     Declara además ocupante (Aeronave | undefined, oculto, sin valor inicial) y cola
     (Aeronave[], oculto), vacía.
  7. En Pista crea obtener(): Pista, static y público: si unica es undefined, créala con
     new Pista() y guárdala; devuelve unica.
  8. En Pista crea solicitar(a: Aeronave): string, público. Evalúa en este orden:
     a) si a es el ocupante o ya está en la cola (compara con ===), devuelve 'repetida';
     b) si no hay ocupante, a pasa a ser el ocupante y devuelve 'aterrizando {matricula}';
     c) si la cola ya tiene 3 aeronaves, devuelve 'cola llena';
     d) si no, añade a al final de la cola y devuelve 'en espera: posición {n}', donde n es
        la cantidad de aeronaves en la cola después de añadirla.
  9. En Pista crea liberar(): string, público. Si la cola tiene aeronaves, la primera sale
     de la cola (deja un array nuevo con las demás), pasa a ser el ocupante y se devuelve
     'aterrizando {matricula}'. Si la cola está vacía, ocupante pasa a ser undefined y se
     devuelve 'pista libre'.
  10. En Pista crea ocupacionTotal(): number, público: la suma de minutosEnPista() del ocupante
      (si hay) y de todas las aeronaves de la cola.
  11. Fuera de las clases crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 49 — Mochila de aventurero
/*
SITUACIÓN
  Un juego tiene objetos de varios tipos que se guardan en una mochila con capacidad de
  peso. La mochila calcula sus totales al leerlos, deja cambiar su capacidad solo a valores
  válidos y lleva la cuenta de cuántas mochilas existen.

QUÉ DEBES HACER
  1. Crea la clase abstracta Objeto. Declara en su constructor, en este orden: nombre
     (string, visible y de solo lectura) y tipo (string, visible y de solo lectura).
     Declara los métodos abstractos peso(): number y valor(): number.
  2. Crea Arma que extienda Objeto. Su constructor recibe nombre, kilos y danio (number,
     ambos ocultos) y pasa al padre el nombre y el tipo 'arma'. Su peso() devuelve kilos
     y su valor() devuelve danio * 10.
  3. Crea Pocion que extienda Objeto. Su constructor recibe nombre y dosis (number,
     oculto) y pasa al padre el nombre y el tipo 'pocion'. Su peso() devuelve dosis y su
     valor() devuelve dosis * 15.
  4. Crea Tesoro que extienda Objeto. Su constructor recibe nombre, oro y kilos (number,
     ambos ocultos) y pasa al padre el nombre y el tipo 'tesoro'. Su peso() devuelve kilos
     y su valor() devuelve oro.
  5. Crea la clase Mochila. Declara una propiedad static oculta contador (number) con
     valor inicial 0, un array oculto objetos (Objeto[]), vacío, y una propiedad oculta
     _capacidad (number). Su constructor recibe capacidad (number; supón entero >= 1):
     la guarda en _capacidad y suma 1 a Mochila.contador.
  6. En Mochila crea creadas(): number, static y público: devuelve contador.
  7. En Mochila crea los getters, todos de tipo number: capacidad (devuelve _capacidad),
     pesoActual (suma de peso() de los objetos), pesoLibre (capacidad menos pesoActual) y
     valorTotal (suma de valor() de los objetos).
  8. En Mochila crea el setter capacidad(valor: number). Ignora el valor, sin error, si
     es 0 o menos o si es menor que pesoActual (igual a pesoActual sí se acepta). Si no,
     lo guarda en _capacidad.
  9. En Mochila crea guardar(o: Objeto): boolean, público. Rechaza (false) si o.peso()
     es mayor que pesoLibre. Si no, lo añade al final y devuelve true.
  10. En Mochila crea soltar(nombre: string): Objeto | undefined, público. Quita el
      primer objeto con ese nombre (deja un array nuevo sin él) y lo devuelve;
      undefined si no existe ninguno.
  11. En Mochila crea conteoPorTipo(): Record<string, number>, público. Recorre los
      objetos en orden y cuenta cuántos hay de cada tipo (si la clave aún no existe,
      parte de 0 con ??). Devuelve el objeto.
  12. Fuera de las clases crea las instancias y ejecuta COMPRUEBA, en este orden.

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
(() => {
    // Tu solución.
})();

// !EJERCICIO 50 — Inversores en un mercado único
/*
SITUACIÓN
  Un mercado único (Singleton) publica precios de acciones. Los inversores, de dos
  estilos, deciden qué hacer con cada acción siguiendo reglas distintas; la base se
  encarga de ejecutar la decisión. El patrimonio se calcula al leerlo.

QUÉ DEBES HACER
  1. Dentro de tu función, antes de las clases, declara: enum Accion { Comprar, Vender, Esperar }
  2. Crea la clase Mercado. Declara una propiedad static oculta unico (Mercado | undefined),
     sin valor inicial; un constructor privado sin parámetros y con cuerpo vacío; y un
     objeto oculto precios (Record<string, number>), vacío.
  3. En Mercado crea obtener(): Mercado, static y público: si unico es undefined, créalo
     con new Mercado() y guárdalo; devuelve unico.
  4. En Mercado crea actualizar(...cambios: [string, number][]): number, público. Para cada
     pareja [simbolo, precio]: si simbolo no es '' y precio es un entero mayor que 0, guarda
     el precio en precios[simbolo] (reemplaza el anterior) y cuéntala. Una pareja inválida
     se salta y no detiene las demás. Devuelve cuántas se aceptaron.
  5. En Mercado crea precio(simbolo: string): number | undefined, público. Devuelve el
     precio, o undefined si el símbolo no existe (comprueba con Object.hasOwn).
  6. En Mercado crea el getter simbolos, que devuelve string[]: los símbolos en orden de
     inserción (recorre precios con for...in y Object.hasOwn).
  7. Crea la clase abstracta Inversor. Declara en su constructor, en este orden: nombre
     (string, visible y de solo lectura) y efectivo (number, oculto). Declara además un
     objeto oculto acciones (Record<string, number>), vacío. Declara el método abstracto
     decidir(simbolo: string, precio: number): Accion, protected.
  8. En Inversor crea operar(simbolo: string): string, público:
     a) obtén el precio con Mercado.obtener().precio(simbolo); si es undefined, devuelve
        'sin cotización';
     b) llama a this.decidir(simbolo, precio);
     c) si es Accion.Comprar: si efectivo es mayor o igual que precio, resta precio a
        efectivo, suma 1 a las acciones de ese símbolo (parte de 0 con ??) y devuelve
        'compró {simbolo}'; si no alcanza, devuelve 'sin fondos';
     d) si es Accion.Vender: si el inversor tiene al menos 1 acción de ese símbolo, suma
        precio a efectivo, resta 1 a esas acciones y devuelve 'vendió {simbolo}'; si no
        tiene, devuelve 'sin acciones';
     e) si es Accion.Esperar, devuelve 'esperó'.
  9. En Inversor crea accionesDe(simbolo: string): number, público (0 si no tiene), y los
     getters caja (devuelve efectivo) y patrimonio (efectivo más, por cada símbolo en
     acciones, cantidad * Mercado.obtener().precio(símbolo), o 0 si ya no tiene precio).
  10. Crea Cauteloso que extienda Inversor. Su constructor recibe nombre y efectivo y los
      pasa al padre. Su decidir devuelve Comprar si precio es 50 o menos, Vender si es 80
      o más, y Esperar en otro caso.
  11. Crea Arriesgado que extienda Inversor. Su constructor recibe nombre y efectivo y los
      pasa al padre. Declara un objeto oculto vistos (Record<string, number>), vacío. Su
      decidir:
      a) lee previo como vistos[simbolo];
      b) guarda precio en vistos[simbolo];
      c) devuelve Esperar si previo es undefined o es igual a precio, Comprar si precio es
         mayor que previo y Vender si es menor.
  12. Ejecuta COMPRUEBA, en este orden (las acciones y el mercado se comparten entre líneas).

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
(() => {
    // Tu solución.
})();
