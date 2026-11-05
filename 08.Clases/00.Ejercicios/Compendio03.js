"use strict";
/*
COMPENDIO 03 — CLASES
01–05: ejercicios centrados en 04.Extense.
06–15: cada ejercicio integra las cuatro primeras subsecciones, con lógica
progresiva; no se repasan subsecciones por separado.

REGLAS COMUNES
- Resuelve cada problema en su función inmediata. Los ejercicios son independientes.
- Declara tipos de propiedades, parámetros y retornos; no uses any.
- Declara cada método y propiedad DENTRO de la clase indicada. Los métodos son
  públicos de instancia salvo indicación protected. No se piden funciones sueltas.
- Los argumentos de constructor se reciben en el orden escrito y son obligatorios
  salvo indicación contraria. «Supón» significa que el dato ya es válido: no lo valides.
- Puedes conservar nombres equivalentes en inglés (nombre/name, edad/age,
  esMayor/isOlder); adapta todas las llamadas y conserva tipos y comportamiento.
- Cada subclase pasa a super(...) los argumentos del padre y guarda solo sus datos
  nuevos. No vuelvas a declarar las propiedades heredadas.
- Cada combinación distinta de argumentos de constructor en las pruebas requiere
  una instancia nueva. Las operaciones sobre una misma instancia se ejecutan en orden.
  true/50 significa «retorno true y estado posterior 50».
- No necesitas modificar propiedades desde fuera para resolver los ejercicios.
- Elige nombres para las colecciones privadas distintos de los métodos que las
  consultan; por ejemplo, el array de inscritos no debe llamarse inscritos si
  ya existe el método inscritos(). Las firmas de métodos sí deben conservarse.
- Los números son finitos y los textos no vacíos, con comparación exacta y sensible
  a mayúsculas. Solo valida las reglas expresamente indicadas.
- Una operación booleana que modifica datos devuelve true al aceptar y false al
  rechazar. Ante rechazo no cambia ningún dato ni lanza errores.
- Las consultas no modifican datos. Imprimir no sustituye devolver un resultado.
- Ejecuta las comprobaciones en orden, prediciendo primero los resultados.
- Prueba accesos prohibidos por separado y deja esas instrucciones comentadas.
- No uses métodos privados, accesores, clases abstractas, interfaces, genéricos,
  decoradores ni librerías externas. Puedes usar tipos, objetos, arrays y funciones
  de las secciones anteriores. No se incluyen soluciones.
- Los textos entre {llaves} representan valores a sustituir.

INTEGRACIÓN OBLIGATORIA EN CADA PROBLEMA DEL 06 AL 15
1. Define las clases base y derivada indicadas, crea instancias y utiliza this.
2. Usa la forma corta del constructor para los datos recibidos que sean propiedades
   propias de cada clase; no redeclares propiedades heredadas en la subclase.
3. Conserva privados los datos indicados y ofrece los métodos públicos solicitados.
4. Usa extends, super(...) y super.metodo() para reutilizar la operación protected
   indicada sin duplicar su lógica. Los arrays internos comienzan vacíos.
5. Crea una segunda instancia derivada y comprueba que mantiene estado independiente.
6. Explica cómo colaboran constructor, encapsulación, métodos públicos y herencia.
No es obligatorio usar todas las características de cada subsección, como static,
pero sí combinar las cuatro subsecciones en cada solución.
*/
// BLOQUE A — EXTENSE: EXACTAMENTE 5 EJERCICIOS
// EJERCICIO 01 — Persona y participante
/*
Objetivo: usar un método público heredado para decidir el texto de una inscripción.

1. Dentro de Persona:
   - Declara nombre público de tipo string y edad privada de tipo number.
   - Su constructor recibe (nombre: string, edad: number) y guarda ambos valores.
     Supón edad entera >= 0; no necesitas validar el constructor.
   - Declara el método público esMayor(): boolean, sin argumentos. Devuelve true
     cuando la edad guardada sea al menos 18, y false cuando sea menor.
     No cambia la edad ni devuelve un texto.
2. Declara Participante extends Persona:
   - Añade actividad pública de tipo string.
   - Su constructor recibe (nombre: string, edad: number, actividad: string).
     Pasa nombre y edad al constructor de Persona mediante super(...), y guarda
     actividad en la subclase. No declares otra propiedad nombre ni edad.
3. Dentro de Participante, declara el método público inscripcion(): string,
   sin argumentos. Llama a esMayor() sobre ese mismo participante:
   - Si devuelve true, retorna '{nombre}: {actividad}'.
   - Si devuelve false, retorna '{nombre}: requiere tutor'.
   Sustituye los valores entre llaves por los datos del participante. No repitas
   la comparación de edad aquí: esa decisión ya pertenece a esMayor().
   No accedas directamente a la edad privada desde Participante.
4. Fuera de las clases, dentro del espacio de solución, crea dos participantes.
   No necesitas crear una Persona aparte ni pasar argumentos a sus métodos.

Comprueba:
- Participante('Ana', 18, 'Ajedrez'): esMayor() → true;
  inscripcion() → 'Ana: Ajedrez'.
- Participante('Luis', 17, 'Teatro'): esMayor() → false;
  inscripcion() → 'Luis: requiere tutor'.
- Repetir las consultas no cambia datos.
Explica: ¿cómo conoce Participante la mayoría de edad sin leer edad directamente?
*/
(() => {
    // Tu solución.
    class Persona {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        esMayor() {
            return this.age >= 18;
        }
    }
    class Participante extends Persona {
        activity;
        constructor(name, age, activity) {
            super(name, age);
            this.activity = activity;
        }
        inscripcion() {
            if (this.esMayor()) {
                return `${this.name}: ${this.activity}`;
            }
            else {
                return `${this.name}: requiere tutor`;
            }
        }
    }
    const participant1 = new Participante('Ana', 18, 'Ajderez');
    const participant2 = new Participante('Diego', 12, 'Natación');
    console.log(participant1.esMayor()); // true
    console.log(participant1.inscripcion()); // Ana: Ajderez
    console.log(participant2.esMayor()); // false
    console.log(participant2.inscripcion()); // Diego: requiere tutor
})();
// EJERCICIO 02 — Un encabezado protegido
/*
Objetivo: reutilizar un método protected mediante super.metodo().
1. Crea Documento con titulo y autor públicos. Constructor (titulo: string,
   autor: string). encabezado(): string es protected y devuelve '{titulo} - {autor}'.
2. Crea Informe extends Documento con paginas públicas, enteras >= 0.
   Constructor (titulo: string, autor: string, paginas: number); llama a super.
3. ficha(): string en Informe llama a super.encabezado() y agrega ' | {extension}',
   donde extension es 'Breve' hasta 5 páginas inclusive o 'Extenso' con más de 5.
Precisiones:
La etiqueta extension se calcula dentro de Informe.ficha(); no es una propiedad.
Documento.encabezado() solo construye el título y autor; no decide la extensión.

Comprueba: TS/Ana/5 → 'TS - Ana | Breve'; Web/Luis/6 → 'Web - Luis | Extenso';
TS/Ana/0 → 'TS - Ana | Breve'. Llamar encabezado() desde fuera debe dar error de tipos.
Explica: ¿por qué protected permite esta reutilización sin hacer público el método?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 03 — Costo de un envío asegurado
/*
Objetivo: separar el cálculo heredado de la lógica propia de la subclase.
1. Crea Envio con destino público y pesoKg privado. Constructor (destino: string,
   pesoKg: number); supón pesoKg > 0. costoBase(): number es protected y devuelve
   30 + pesoKg * 10, sin modificar datos.
2. Crea EnvioAsegurado extends Envio con valorDeclarado privado, supuesto >= 0.
   Constructor (destino: string, pesoKg: number, valorDeclarado: number).
3. total(): number es público en la subclase y reutiliza super.costoBase().
   Suma un seguro de 5 si valorDeclarado <= 500; con un valor mayor suma el 2%
   de TODO el valor declarado. No copies el cálculo del peso en la subclase.
Precisiones:
En EnvioAsegurado, pasa destino y pesoKg a super(...). total() suma al costo
base exactamente uno de los dos seguros; no suma ambos ni cambia valorDeclarado.

Comprueba para 2 kg: valor 0 → 55; valor 500 → 55; valor 1000 → 70.
Repetir total() conserva los resultados. El código externo no puede llamar costoBase().
Explica: ¿qué parte cambiarías si se modificara el precio por kilogramo?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 04 — Reservas con dos especializaciones
/*
Objetivo: dos subclases reutilizan una misma operación protegida.
1. Crea Reserva con personas privadas, enteras > 0. Constructor (personas: number).
   costoGrupo(): number es protected: 100 por persona con menos de 4 personas;
   desde 4 personas, 80 por persona. El descuento abarca a todo el grupo.
2. Crea ReservaDesayuno extends Reserva. Constructor (personas: number,
   desayunos: number); guarda desayunos privados. Supón desayunos enteros entre
   0 y personas inclusive. total(): number devuelve super.costoGrupo() +
   25 por desayuno. No necesitas acceder al número de personas en la subclase.
3. Crea ReservaEstacionamiento extends Reserva. Constructor (personas: number,
   requiereLugar: boolean); guarda requiereLugar privado. total(): number
   reutiliza super.costoGrupo() y suma 40 si requiereLugar, o 0 en caso contrario.
Precisiones:
Ambas subclases pasan personas al constructor de Reserva con super(...).
Los desayunos y el estacionamiento se suman después del cálculo del grupo.

Comprueba: ReservaDesayuno(3, 2) → 350; ReservaDesayuno(4, 0) → 320;
ReservaEstacionamiento(4, true) → 360; con (4, false) → 320.
Explica: ¿por qué ambas subclases llaman a la misma implementación de costoGrupo()?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 05 — Capacidad heredada en una sesión
/*
Objetivo: reutilizar desde una subclase una operación protected que cambia estado.
1. Crea Sesion con nombre público y cupos privados. Constructor (nombre: string,
   cupos: number); supón cupos enteros >= 0.
2. ocupar(cantidad: number): boolean es protected. Valida aquí que cantidad sea
   entera > 0 y no supere los cupos; si cumple, descuenta y devuelve true; si no,
   devuelve false sin cambios. consultarCupos(): number es público y devuelve cupos.
3. Crea SesionGuiada extends Sesion con guia público. Constructor (nombre: string,
   cupos: number, guia: string); inicializa el padre con super.
4. reservarGrupo(cantidad: number): boolean es público en SesionGuiada. Aplica
   solamente la regla adicional de máximo 3 personas por reserva; si no la supera,
   delega en super.ocupar(cantidad) y devuelve su resultado. No repitas las
   validaciones del padre ni vuelvas a declarar cupos en la subclase.
5. ficha(): string devuelve '{nombre} | Guía: {guia} | Cupos: {disponibles}',
   consultando el método público heredado para obtener los cupos restantes.
Precisiones:
disponibles representa el retorno de consultarCupos() sobre esta sesión.
No necesitas guardar otra propiedad con los cupos ni modificarla en la subclase.

Comprueba con ('Museo', 5, 'Ana'): reservarGrupo(4) → false/5 cupos;
reservarGrupo(3) → true/2; reservarGrupo(3) → false/2; reservarGrupo(0) → false/2;
reservarGrupo(1.5) → false/2; reservarGrupo(2) → true/0. Ficha final:
'Museo | Guía: Ana | Cupos: 0'. Ocupar cupos desde fuera debe dar error de tipos.
Explica: ¿qué regla protege cada clase y por qué no debes duplicarlas?
*/
(() => {
    // Tu solución.
})();
// BLOQUE B — INTEGRACIÓN DE LAS CUATRO SUBSECCIONES: EXACTAMENTE 10 EJERCICIOS
// EJERCICIO 06 — Compra con cupón
/*
Objetivo: integrar las cuatro subsecciones con cálculos por tramos.
1. Compra: constructor (nombre: string, precio: number, cantidad: number).
   nombre público; precio y cantidad privados. Supón precio > 0 y cantidad entera > 0.
   subtotal(): number es protected: precio por cantidad, con descuento del 10%
   sobre todo el importe si cantidad >= 5.
2. CompraConCupon extends Compra: constructor (nombre: string, precio: number,
   cantidad: number, cupon: boolean), cupón privado. total(): number reutiliza
   super.subtotal(), resta 15 si hay cupón y evita que el total sea negativo.
Precisiones:
Si cupon es false, total() devuelve el subtotal ya descontado sin restar 15.
Si es true y al restar 15 queda un número negativo, devuelve exactamente 0.

Comprueba: precio 20/cantidad 4/sin cupón → 80; precio 20/cantidad 5/con cupón
→ 75; precio 10/cantidad 1/con cupón → 0. Repetir total conserva resultados.
Explica: ¿qué cálculo pertenece a cada clase?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 07 — Batería con reserva
/*
Objetivo: integrar las cuatro subsecciones con validación y estado.
1. Bateria: constructor (nombre: string, carga: number), nombre público y carga
   privada, supuesta entre 0 y 100. consultarCarga(): number devuelve la carga.
   consumir(cantidad: number): boolean es protected: exige cantidad > 0 y carga
   suficiente; si acepta, descuenta.
2. BateriaEmergencia extends Bateria: constructor (nombre: string, carga: number,
   reserva: number), reserva privada supuesta entre 0 y carga inicial inclusive.
   usar(cantidad: number): boolean exige que la carga resultante no quede por
   debajo de reserva y delega en super.consumir. No dupliques las reglas del padre.
Precisiones:
Antes de consumir, consulta consultarCarga() y evalúa si carga-cantidad queda
por debajo de reserva. Si ocurre, devuelve false; si no, devuelve el resultado de
super.consumir(cantidad). No descuentes antes de llamar al padre ni repitas su
validación de monto positivo. La reserva es un mínimo que no se consume.

Comprueba con ('Radio',50,10): usar(41) → false/50; usar(40) → true/10;
usar(1), usar(0), usar(-5) → false y carga sigue en 10.
Explica: ¿cómo consultas la carga sin acceder a la propiedad privada?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 08 — Promedio ajustado
/*
Objetivo: integrar las cuatro subsecciones con suma, mínimo y casos vacíos.
1. Evaluacion: constructor (nombre: string), nombre público y notas privadas
   en number[]. agregar(nota: number): boolean acepta y guarda de 0 a 10 inclusive.
   datos(): number[] es protected y devuelve copia de las notas.
   cantidad(): number devuelve cuántas notas hay.
2. EvaluacionAjustada extends Evaluacion: constructor (nombre: string,
   minimo: number), mínimo privado supuesto entre 0 y 10 inclusive.
   promedio(): number | undefined usa super.datos(): vacío → undefined;
   una o dos notas → promedio de todas; desde tres → descarta exactamente UNA
   mínima y promedia el resto sin modificar las notas almacenadas.
   resultado(): string devuelve 'Sin notas', 'Aprobado' si promedio >= minimo,
   o 'Reprobado' en otro caso.
Precisiones:
En resultado(), comprueba primero si promedio() devuelve undefined. Las notas
admiten decimales. Descartar una mínima afecta solo al cálculo, no al array.

Comprueba con mínimo 7: vacío → undefined/'Sin notas'; agrega 4,8,9 → true;
agregar(11) → false; promedio 8.5, cantidad 3, resultado 'Aprobado'.
Otro alumno con 5,5,5 tiene promedio 5 y resultado 'Reprobado'.
Explica: ¿qué pasa si la nota mínima se repite?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 09 — Cupo y lista de espera
/*
Objetivo: integrar las cuatro subsecciones con búsquedas y dos colecciones.
1. Taller: constructor (nombre: string, cupo: number), nombre público y cupo
   privado entero > 0; inscritos privados en string[]. registrar(nombre: string):
   boolean es protected: rechaza repetidos o cupo lleno; si acepta agrega al final.
   inscritos(): string[] devuelve una copia de los nombres inscritos.
2. TallerConEspera extends Taller: constructor (nombre: string, cupo: number,
   limiteEspera: number), límite privado entero >= 0 y espera privada en string[].
   solicitar(nombre: string): boolean rechaza nombres ya inscritos o en espera.
   Luego intenta super.registrar; si acepta, devuelve true. Si falla por cupo,
   agrega al final de espera si tiene espacio y devuelve true; sin espacio, false.
   pendientes(): string[] devuelve copia de espera. No implementes cancelaciones.
Precisiones:
Consulta inscritos() para comprobar la inscripción sin leer la colección privada
del padre. true de solicitar indica inscripción O entrada a espera; consulta las
listas para distinguirlo. No se piden promociones de espera ni cancelaciones.

Comprueba con cupo 1 y espera 2: Ana → true/inscrita; Luis → true/en espera;
Luis otra vez → false; Eva → true/en espera; Sol → false.
inscritos() → ['Ana']; pendientes() → ['Luis','Eva']. Vaciar las copias no cambia datos.
Explica: ¿por qué verificas duplicados antes de registrar?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 10 — Selección con presupuesto
/*
Objetivo: integrar las cuatro subsecciones con selección sucesiva.
1. Declara type Propuesta con codigo: string y costo: number. Catalogo:
   constructor (nombre: string), nombre público y propuestas privadas.
   agregar(codigo: string, costo: number): boolean acepta costo > 0 y código nuevo,
   guardando al final. datos(): Propuesta[] es protected y devuelve copias de los
   objetos en un array nuevo, en orden de registro.
2. CatalogoLimitado extends Catalogo: constructor (nombre: string,
   presupuesto: number), presupuesto privado supuesto >= 0.
   seleccionar(): string[] recorre super.datos() en orden: incluye cada propuesta
   que quepa en el presupuesto restante y descuenta su costo del restante LOCAL;
   salta las que no caben y continúa. No busca la combinación óptima ni cambia
   el presupuesto almacenado. Si no hay seleccionadas devuelve [].
Precisiones:
Cada llamada a seleccionar() comienza con el presupuesto original. costo es el
precio completo de una propuesta, que se selecciona como máximo una vez por llamada.

Comprueba con presupuesto 100: vacío → []; agrega A/70,B/50,C/30 → true;
A/5 → false; D/0 → false. seleccionar() dos veces → ['A','C'].
Explica: ¿por qué el rechazo de B no impide seleccionar C?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 11 — La mayor racha
/*
Objetivo: integrar las cuatro subsecciones con recorridos y estado consecutivo.
1. Actividad: constructor (nombre: string), nombre público y registros privados
   en boolean[]. registrar(cumplido: boolean): void guarda un registro por llamada.
   datos(): boolean[] es protected y devuelve una copia en orden de registro.
2. ActividadConMeta extends Actividad: constructor (nombre: string, meta: number),
   meta privada entera > 0. mejorRacha(): number usa super.datos() para calcular
   la mayor cantidad de true consecutivos; vacío → 0. cumplioMeta(): boolean
   indica si la mejor racha alcanza meta.
Precisiones:
Para añadir el último false usa registrar(false). registrar devuelve void;
los resultados 3/true corresponden a mejorRacha() y cumplioMeta(), respectivamente.

Comprueba con meta 3: vacío → 0/false; registra true,true,false,true,true,true,
false,true → 3/true; registrar(false) después conserva 3/true.
Explica: ¿por qué no basta contar todos los true?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 12 — Pedido sin descuentos parciales
/*
Objetivo: integrar las cuatro subsecciones con agrupación y validación completa.
1. Declara type Existencia con codigo: string y cantidad: number. Almacen:
   constructor (nombre: string), nombre público y existencias privadas.
   registrar(codigo: string, cantidad: number): boolean acepta código nuevo y
   cantidad entera >= 0. stock(codigo: string): number | undefined consulta el stock.
   descontar(codigo: string, cantidad: number): boolean es protected: exige código
   existente, cantidad entera > 0 y stock suficiente; si acepta descuenta.
2. AlmacenPedidos extends Almacen: constructor (nombre: string, maximo: number),
   máximo privado entero > 0. comprar(codigos: string[]): boolean interpreta cada
   aparición como una unidad. Rechaza vacío, más de maximo unidades, códigos
   desconocidos o stock insuficiente para TODAS las apariciones juntas.
   Valida el pedido completo mediante stock antes de hacer cualquier descuento;
   solo si todo cumple, descuenta mediante super.descontar. No cambies el argumento.
Precisiones:
registrar guarda la nueva existencia con su cantidad inicial. stock devuelve
undefined si no existe el código; stock 0 significa que sí existe, pero está agotado.
maximo cuenta unidades totales del pedido, no códigos distintos. Si todo se acepta,
comprar devuelve true; no se piden precios ni descuentos monetarios.

Comprueba con máximo 4: registra A/2 y B/1; comprar(['A','A','B','B']) → false,
stock sigue A=2/B=1; comprar(['A','A','B']) → true, ambos stocks 0;
comprar([]) y comprar(['X']) → false.
Explica: ¿por qué es necesario contar las apariciones repetidas?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 13 — Clasificación con desempates
/*
Objetivo: integrar las cuatro subsecciones con agrupación y comparación múltiple.
1. Declara type Marca con nombre: string y puntos: number. Torneo: constructor
   (titulo: string), título público y marcas privadas. registrar(nombre: string,
   puntos: number): boolean acepta puntos enteros >= 0, guarda al final y permite
   nombres repetidos. datos(): Marca[] es protected y devuelve copias de los
   objetos en un array nuevo, conservando orden.
2. TorneoClasificatorio extends Torneo: constructor (titulo: string,
   minimo: number), mínimo privado entero >= 0. clasificados(): string[] usa
   super.datos(), agrupa por nombre y suma los puntos de cada participante.
   Incluye solo sumas >= minimo, ordenadas de mayor a menor suma. En empate,
   conserva primero a quien apareció antes por primera vez. Sin elegibles → [].
Precisiones:
Cada nombre aparece UNA sola vez en la salida. Los puntos acumulados sirven
para filtrar y ordenar; no se incluyen en el string[] devuelto.
No reordenes las marcas almacenadas al construir la clasificación.

Comprueba con mínimo 10: vacío → []; registra Ana/6,Luis/10,Ana/4,Eva/12;
Sol/-1 → false. clasificados() dos veces → ['Eva','Ana','Luis'].
Explica: ¿qué información conservas para desempatar?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 14 — Reservas sin traslapes
/*
Objetivo: integrar las cuatro subsecciones con intervalos y cancelación.
1. Declara type Reserva con codigo: string, inicio: number y fin: number.
   Agenda: constructor (nombre: string), nombre público y reservas privadas.
   intentarReserva(codigo: string, inicio: number, fin: number): boolean es
   protected: exige horas enteras con 0 <= inicio < fin <= 24, código no repetido
   y ningún traslape con reservas vigentes. El intervalo incluye inicio y excluye
   fin: una reserva puede empezar justo al terminar otra. Si acepta guarda al final.
   cancelar(codigo: string): boolean elimina la reserva si existe; si no, false.
   listar(): string[] devuelve códigos vigentes en orden de registro.
2. AgendaLimitada extends Agenda: constructor (nombre: string, maxHoras: number),
   máximo privado entero entre 1 y 24 inclusive. reservar(codigo: string,
   inicio: number, fin: number): boolean exige fin-inicio <= maxHoras y delega
   las demás validaciones en super.intentarReserva; no las dupliques.
Precisiones:
cancelar elimina la reserva completa, devuelve true y conserva el orden de las
demás. El código cancelado puede usarse otra vez. El conflicto se comprueba contra
todas las reservas vigentes, sin depender del orden en que se registraron.

Comprueba con máximo 3: A/9/11 → true; B/11/13 → true; C/10/12 → false;
D/14/18 → false; E/8/8 → false; listar() → ['A','B']; cancelar('A') → true;
C/9/11 → true; listar() → ['B','C']; cancelar('X') → false.
Explica: ¿por qué compartir un extremo no implica traslape?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 15 — Transferencias con comisión
/*
Objetivo: integrar las cuatro subsecciones con cambios coordinados entre objetos.
1. Cuenta: constructor (titular: string, saldo: number), titular público y saldo
   privado supuesto >= 0. consultarSaldo(): number devuelve el saldo.
   depositar(monto: number): boolean acepta monto > 0 y lo suma.
   debitar(monto: number): boolean es protected: exige monto > 0 y saldo suficiente;
   solo si acepta descuenta.
2. CuentaTransferencias extends Cuenta: constructor (titular: string, saldo: number,
   limite: number), límite privado supuesto > 0 y enviado privado inicialmente 0.
   transferir(destino: Cuenta, monto: number): boolean rechaza destino igual a this,
   monto <= 0 o enviado+monto > limite. Comisión: 5 si monto < 100; 2% del monto
   si monto >= 100. Si super.debitar acepta monto MÁS comisión, deposita exactamente
   monto en destino, acumula monto en enviado y devuelve true. La comisión no se
   abona a destino ni consume límite. No hay reinicio de límite.
   consultarEnviado(): number devuelve enviado. Ante rechazo ambas cuentas y enviado
   conservan su estado. Usa solo estas clases sin redefinir sus métodos.
Precisiones:
Las operaciones son secuenciales, sin concurrencia. No se pide redondear los
montos ni la comisión. Al probar independencia, una transferencia aceptada SÍ
cambia la cuenta destino; una cuenta ajena a la operación debe conservar su estado.

Comprueba con origen Ana/300/límite 200 y destino Luis/0: transferir 100 → true,
Ana=198/Luis=100/enviado=100; transferir 110 → false sin cambios; transferir 100
→ true, Ana=96/Luis=200/enviado=200; transferir 1 → false sin cambios.
Otra cuenta Eva/10/límite 100 intenta transferir 10 a Luis → false por comisión;
Eva sigue en 10 y Luis en 200. Transferirse a sí misma → false.
Explica: ¿por qué no debes acreditar al destinatario antes de verificar los rechazos?
*/
(() => {
    // Tu solución.
})();
