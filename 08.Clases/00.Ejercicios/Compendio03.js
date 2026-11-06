"use strict";
/*
COMPENDIO 03 — CLASES
Ejercicios 01–05: refuerzo de 04.Extense (extends, super, protected).
Ejercicios 06–15: cada uno integra las subsecciones 01 a 04.

SUBSECCIONES
  01 Definición ........ clase, new, this, propiedades opcionales y readonly
  02 Forma corta ....... propiedades declaradas dentro del constructor
  03 Métodos ........... propiedades private, métodos públicos, static (opcional)
  04 Extense ........... extends, super(...), super.metodo(), protected

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN: te dice qué se está modelando.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta.
  3. Escribe las instrucciones de COMPRUEBA con console.log. Cada línea trae
     el resultado esperado después de //. Antes de ejecutar, predice qué saldrá.
  4. Si hay líneas en ESTO DEBE FALLAR, pruébalas una por una: descomenta, comprueba
     que TypeScript marca error y vuelve a comentarla.
  5. Responde EXPLICA en un comentario bajo tu solución.

VOCABULARIO DE LOS ENUNCIADOS
  «oculto» = private · «visible» = public · «solo jerarquía» = protected.
  «Declarar en el constructor» = poner public/private/protected delante del parámetro.
  «Supón» = el dato ya es válido; no lo compruebes.
  {llaves} en un texto = valor que sustituyes; las llaves no se escriben.

REGLAS
  - Cada ejercicio va dentro de su función (() => { ... })(); son independientes.
  - Pon tipos a propiedades, parámetros y retornos. No uses any.
  - Todo va dentro de las clases pedidas; no hay funciones sueltas.
  - Una subclase pasa a super(...) los datos del padre y NO los redeclara.
  - Un método que modifica y devuelve boolean: true si acepta, false si rechaza.
    Si rechaza, no cambia nada y no lanza errores.
  - Un método que consulta no modifica nada. Imprimir no sustituye a devolver.
  - Puedes usar nombres en inglés (nombre/name); los nombres de MÉTODOS se conservan.
  - Un array oculto no puede llamarse igual que un método de la misma clase.
  - No uses get/set, abstract, interfaces ni genéricos. Sí puedes usar type, arrays
    y funciones. Métodos private: permitidos, nunca obligatorios.
  - No hay soluciones incluidas.
*/
// BLOQUE A — EXTENSE: EJERCICIOS 01 AL 05
// EJERCICIO 01 — Persona y participante
/*
SITUACIÓN
  Un club inscribe personas en actividades. Los menores de edad necesitan tutor.
  La decisión «¿es mayor de edad?» pertenece a Persona; Participante solo la usa.

QUÉ DEBES HACER
  1. Crea la clase Persona. Declara en su constructor dos datos, en este orden:
     nombre (string, visible) y edad (number, oculta; supón entero >= 0).
  2. En Persona crea el método esMayor(). No recibe nada y devuelve boolean:
     true si la edad es 18 o más; false si es menor.
  3. Crea la clase Participante que extienda Persona. Su constructor recibe
     nombre, edad y actividad (string, visible). Pasa nombre y edad al padre con
     super(...) y guarda solo actividad.
  4. En Participante crea el método inscripcion(). No recibe nada y devuelve string:
     a) llama a this.esMayor();
     b) si da true, devuelve '{nombre}: {actividad}';
     c) si da false, devuelve '{nombre}: requiere tutor'.
     No compares la edad aquí ni intentes leerla: está oculta en Persona.
  5. Fuera de las clases crea dos participantes y ejecuta las líneas de COMPRUEBA.

COMPRUEBA
  const ana = new Participante('Ana', 18, 'Ajedrez');
  const luis = new Participante('Luis', 17, 'Teatro');
  console.log(ana.esMayor());      // true
  console.log(ana.inscripcion());  // 'Ana: Ajedrez'
  console.log(luis.esMayor());     // false
  console.log(luis.inscripcion()); // 'Luis: requiere tutor'

ESTO DEBE FALLAR
  // console.log(ana.edad);  → edad es private.

EXPLICA
  ¿Cómo sabe Participante si la persona es mayor sin leer la edad?
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
    // const participant1 = new Participante('Ana', 18, 'Ajderez')
    // const participant2 = new Participante('Diego', 12, 'Natación')
    // console.log(participant1.esMayor());     // true
    // console.log(participant1.inscripcion()); // Ana: Ajderez
    // console.log(participant2.esMayor());     // false
    // console.log(participant2.inscripcion()); // Diego: requiere tutor
})();
// EJERCICIO 02 — Un encabezado protegido
/*
SITUACIÓN
  Una biblioteca imprime fichas de documentos. Todo documento tiene un encabezado
  con título y autor; un informe agrega a ese encabezado si es breve o extenso.
  El encabezado no debe poder pedirse desde fuera, pero el informe sí lo reutiliza.

QUÉ DEBES HACER
  1. Crea la clase Documento. Declara en su constructor, en este orden:
     titulo (string, visible) y autor (string, visible).

  2. En Documento crea el método encabezado(). No recibe nada y devuelve string:
     '{titulo} - {autor}'. Márcalo protected.

  3. Crea la clase Informe que extienda Documento. Su constructor recibe titulo,
     autor y paginas (number, visible; supón entero >= 0). Pasa titulo y autor al
     padre con super(...) y guarda solo paginas.

  4. En Informe crea el método ficha(). No recibe nada, es público y devuelve string:
     a) obtén el encabezado con super.encabezado();
     b) calcula la extensión: 'Breve' si paginas es 5 o menos; 'Extenso' si es más de 5;
     c) devuelve '{encabezado} | {extensión}'.
     La extensión se calcula dentro de ficha(); no es una propiedad.
  5. Fuera de las clases crea tres informes y ejecuta COMPRUEBA.

COMPRUEBA
  console.log(new Informe('TS', 'Ana', 5).ficha());   // 'TS - Ana | Breve'
  console.log(new Informe('Web', 'Luis', 6).ficha()); // 'Web - Luis | Extenso'
  console.log(new Informe('TS', 'Ana', 0).ficha());   // 'TS - Ana | Breve'

ESTO DEBE FALLAR
  // new Informe('TS', 'Ana', 5).encabezado();  → encabezado es protected.

EXPLICA
  ¿Por qué protected permite que Informe use encabezado() sin que sea público?
*/
(() => {
    // Ejercicio 2
    class Documento {
        title;
        autor;
        constructor(title, autor) {
            this.title = title;
            this.autor = autor;
        }
        Encabezado() {
            return `${this.title} - ${this.autor}`;
        }
    }
    class Informe extends Documento {
        pages;
        constructor(title, autor, pages) {
            super(title, autor);
            this.pages = pages;
        }
        counterPages() {
            return this.pages >= 0;
        }
        ficha() {
            if (this.pages > 5) {
                return `${super.Encabezado()} | Extenso`;
            }
            else {
                return `${super.Encabezado()} | Breve`;
            }
        }
    }
    console.log(new Informe('TS', 'Ana', 5).ficha()); // 'TS - Ana | Breve'
    console.log(new Informe('Web', 'Luis', 6).ficha()); // 'Web - Luis | Extenso'
    console.log(new Informe('TS', 'Ana', 0).ficha()); // 'TS - Ana | Breve'
})();
// EJERCICIO 03 — Costo de un envío asegurado
/*
SITUACIÓN
  Una paquetería cobra un costo base que depende del peso. Si el cliente asegura
  el envío, se suma un seguro. El envío normal es la clase base; el asegurado la
  amplía y reutiliza su costo base sin copiar la fórmula del peso.

QUÉ DEBES HACER
  1. Crea la clase Envio. Declara en su constructor, en este orden:
     destino (string, visible) y pesoKg (number, oculto; supón que es mayor que 0).
  2. En Envio crea el método costoBase(). No recibe nada y devuelve number:
     30 más 10 por cada kilo. Márcalo protected.
  3. Crea la clase EnvioAsegurado que extienda Envio. Su constructor recibe destino,
     pesoKg y valorDeclarado (number, oculto; supón >= 0). Pasa destino y pesoKg al
     padre con super(...) y guarda solo valorDeclarado.
  4. En EnvioAsegurado crea el método total(). No recibe nada, es público y
     devuelve number:
     a) obtén el costo base con super.costoBase();
     b) calcula el seguro: 5 si valorDeclarado es 500 o menos; si es mayor, el 2%
        del valor declarado COMPLETO (no solo del excedente);
     c) devuelve costo base + seguro. Se suma un solo seguro, nunca los dos.
  5. Fuera de las clases crea tres envíos y ejecuta COMPRUEBA.

COMPRUEBA (todos con destino 'Puebla' y 2 kg; el costo base es 50)
  console.log(new EnvioAsegurado('Puebla', 2, 0).total());    // 55
  console.log(new EnvioAsegurado('Puebla', 2, 500).total());  // 55
  console.log(new EnvioAsegurado('Puebla', 2, 1000).total()); // 70
  Llama total() dos veces sobre el mismo envío: debe dar el mismo número.

ESTO DEBE FALLAR
  // envio.costoBase();  → es protected.

EXPLICA
  Si el precio por kilo cambiara, ¿qué clase y qué método modificarías?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 04 — Reservas con dos especializaciones
/*
SITUACIÓN
  Un hotel cobra a un grupo según cuántas personas son. Hay dos tipos de reserva
  especial: con desayunos y con estacionamiento. Ambas parten del mismo cálculo de
  grupo, que vive solo en la clase base, y le suman cada una lo suyo.

QUÉ DEBES HACER
  1. Crea la clase Reserva. Declara en su constructor personas (number, oculto;
     supón entero > 0).
  2. En Reserva crea el método costoGrupo(). No recibe nada, devuelve number y es
     protected: si hay menos de 4 personas, 100 por persona; si hay 4 o más, 80 por
     persona (el descuento aplica a todo el grupo).
  3. Crea ReservaDesayuno que extienda Reserva. Su constructor recibe personas y
     desayunos (number, oculto; supón entero entre 0 y personas). Pasa personas al
     padre con super(...) y guarda solo desayunos.
  4. En ReservaDesayuno crea total(): público, sin argumentos, devuelve number.
     Es super.costoGrupo() más 25 por cada desayuno.
  5. Crea ReservaEstacionamiento que extienda Reserva. Su constructor recibe
     personas y requiereLugar (boolean, oculto). Pasa personas al padre y guarda
     solo requiereLugar.
  6. En ReservaEstacionamiento crea total(): público, sin argumentos, devuelve number.
     Es super.costoGrupo() más 40 si requiereLugar es true, o más 0 si es false.
  7. Ninguna subclase necesita conocer personas: el grupo se calcula solo en Reserva.

COMPRUEBA
  console.log(new ReservaDesayuno(3, 2).total());              // 350
  console.log(new ReservaDesayuno(4, 0).total());              // 320
  console.log(new ReservaEstacionamiento(4, true).total());    // 360
  console.log(new ReservaEstacionamiento(4, false).total());   // 320

ESTO DEBE FALLAR
  // reserva.costoGrupo();  → es protected.

EXPLICA
  ¿Por qué las dos subclases usan la misma implementación de costoGrupo()?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 05 — Capacidad heredada en una sesión
/*
SITUACIÓN
  Un museo ofrece sesiones con cupos limitados. La clase base sabe ocupar cupos
  (y valida que se pueda). Una sesión guiada agrega una regla extra: máximo 3
  personas por reserva. La subclase aplica solo su regla y deja el resto al padre.

QUÉ DEBES HACER
  1. Crea la clase Sesion. Declara en su constructor, en este orden: nombre (string,
     visible) y cupos (number, oculto; supón entero >= 0).
  2. En Sesion crea consultarCupos(): público, sin argumentos, devuelve los cupos
     que quedan (number).
  3. En Sesion crea ocupar(cantidad: number): boolean, protected. Rechaza (false, sin
     cambios) si cantidad no es un entero mayor que 0 o si supera los cupos que
     quedan. Si no, resta cantidad a los cupos y devuelve true.
  4. Crea SesionGuiada que extienda Sesion. Su constructor recibe nombre, cupos y
     guia (string, visible). Pasa nombre y cupos al padre y guarda solo guia.
  5. En SesionGuiada crea reservarGrupo(cantidad: number): boolean, público:
     a) si cantidad es mayor que 3, devuelve false sin llamar al padre;
     b) si no, devuelve el resultado de super.ocupar(cantidad).
     No repitas aquí las validaciones del padre.
  6. En SesionGuiada crea ficha(): público, sin argumentos, devuelve string:
     '{nombre} | Guía: {guia} | Cupos: {cupos}'. Obtén los cupos llamando a
     consultarCupos().

COMPRUEBA (una sola sesión: new SesionGuiada('Museo', 5, 'Ana'), en este orden)
  console.log(s.reservarGrupo(4));   // false  (más de 3 por reserva)
  console.log(s.consultarCupos());   // 5
  console.log(s.reservarGrupo(3));   // true
  console.log(s.consultarCupos());   // 2
  console.log(s.reservarGrupo(3));   // false  (solo quedan 2)
  console.log(s.reservarGrupo(0));   // false
  console.log(s.reservarGrupo(1.5)); // false
  console.log(s.reservarGrupo(2));   // true
  console.log(s.ficha());            // 'Museo | Guía: Ana | Cupos: 0'

ESTO DEBE FALLAR
  // s.ocupar(1);  → es protected.

EXPLICA
  ¿Qué regla protege cada clase y por qué no conviene copiarla en la otra?
*/
(() => {
    // Tu solución.
})();
// BLOQUE B — INTEGRACIÓN DE LAS SUBSECCIONES 01 A 04: EJERCICIOS 06 AL 15
/*
En cada ejercicio de este bloque:
  - 01: creas la clase base y la derivada, las instancias y usas this.
  - 02: declaras en el constructor los datos propios de cada clase.
  - 03: los datos internos son private y los expones con métodos públicos.
  - 04: la derivada usa extends, super(...) y super.metodo() sobre un método
        protected de la base, sin copiar su lógica.
  - Los arrays internos empiezan vacíos.
  - Al final creas una SEGUNDA instancia de la derivada y compruebas que no
    comparte estado con la primera.
*/
// EJERCICIO 06 — Compra con cupón
/*
SITUACIÓN
  Una tienda calcula el subtotal de una compra (con descuento por volumen). Una
  compra con cupón parte de ese subtotal y resta un descuento fijo.

QUÉ DEBES HACER
  1. Crea la clase Compra. Declara en su constructor, en este orden: nombre (string,
     visible), precio (number, oculto; supón > 0) y cantidad (number, oculto;
     supón entero > 0).
  2. En Compra crea subtotal(): protected, sin argumentos, devuelve number.
     Calcula precio por cantidad. Si cantidad es 5 o más, descuenta el 10% de
     TODO ese importe.
  3. Crea CompraConCupon que extienda Compra. Su constructor recibe nombre, precio,
     cantidad y cupon (boolean, oculto). Pasa los tres primeros al padre.
  4. En CompraConCupon crea total(): público, sin argumentos, devuelve number:
     a) obtén super.subtotal();
     b) si cupon es false, devuélvelo tal cual;
     c) si cupon es true, réstale 15; si el resultado fuera negativo, devuelve 0.

COMPRUEBA
  console.log(new CompraConCupon('Lápiz', 20, 4, false).total()); // 80
  console.log(new CompraConCupon('Lápiz', 20, 5, true).total());  // 75
  console.log(new CompraConCupon('Goma', 10, 1, true).total());   // 0
  Crea otra compra con valores distintos y comprueba que su total no cambia el de la anterior.

ESTO DEBE FALLAR
  // compra.subtotal();  // compra.precio;

EXPLICA
  ¿Qué cálculo hace cada clase? ¿Cómo colaboran constructor, datos ocultos,
  métodos públicos y herencia?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 07 — Batería con reserva
/*
SITUACIÓN
  Una batería se descarga con consumir(), que valida el monto. Una batería de
  emergencia protege una reserva mínima que nunca se gasta; solo agrega esa regla
  y deja el resto al padre.

QUÉ DEBES HACER
  1. Crea la clase Bateria. Declara en su constructor: nombre (string, visible) y
     carga (number, oculta; supón entre 0 y 100).
  2. En Bateria crea consultarCarga(): público, sin argumentos, devuelve la carga actual.
  3. En Bateria crea consumir(cantidad: number): boolean, protected. Devuelve false
     (sin cambios) si cantidad es 0 o negativa, o si supera la carga. Si no, resta
     cantidad a la carga y devuelve true.
  4. Crea BateriaEmergencia que extienda Bateria. Su constructor recibe nombre,
     carga y reserva (number, oculta; supón entre 0 y la carga inicial). Pasa nombre
     y carga al padre y guarda solo reserva.
  5. En BateriaEmergencia crea usar(cantidad: number): boolean, público:
     a) obtén la carga con consultarCarga();
     b) si carga menos cantidad quedaría por debajo de reserva, devuelve false;
     c) si no, devuelve super.consumir(cantidad).
     No restes tú: eso es trabajo de consumir. Tampoco compruebes si cantidad es positiva.

COMPRUEBA (b = new BateriaEmergencia('Radio', 50, 10), en este orden)
  console.log(b.usar(41), b.consultarCarga()); // false 50  (quedaría en 9)
  console.log(b.usar(40), b.consultarCarga()); // true 10
  console.log(b.usar(1),  b.consultarCarga()); // false 10
  console.log(b.usar(0),  b.consultarCarga()); // false 10  (lo rechaza el padre)
  console.log(b.usar(-5), b.consultarCarga()); // false 10
  Crea una segunda batería y comprueba que tiene su propia carga.

ESTO DEBE FALLAR
  // b.consumir(1);  // b.carga;

EXPLICA
  ¿Cómo lee la subclase la carga si la propiedad es privada?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 08 — Promedio ajustado
/*
SITUACIÓN
  Un profesor guarda notas. Para calificar, se descarta la nota más baja cuando
  hay tres o más. Las notas guardadas no deben alterarse al calcular.

QUÉ DEBES HACER
  1. Crea la clase Evaluacion. Declara en su constructor nombre (string, visible).
     Además crea un array oculto de notas (number[]), vacío al empezar.
  2. En Evaluacion crea agregar(nota: number): boolean. Acepta notas de 0 a 10
     inclusive (con decimales): la agrega al final y devuelve true. Si no, false.
  3. En Evaluacion crea cantidad(): devuelve cuántas notas hay.
  4. En Evaluacion crea datos(): number[], protected. Devuelve una COPIA del array
     (por ejemplo con [...]), no el array original.
  5. Crea EvaluacionAjustada que extienda Evaluacion. Su constructor recibe nombre
     y minimo (number, oculto; supón entre 0 y 10). Pasa nombre al padre.
  6. En EvaluacionAjustada crea promedio(): number | undefined, público:
     a) obtén las notas con super.datos();
     b) sin notas, devuelve undefined;
     c) con una o dos notas, devuelve el promedio de todas;
     d) con tres o más, quita UNA sola nota mínima (aunque se repita) y devuelve el
        promedio de las demás. Hazlo sobre la copia: no alteres las notas guardadas.
  7. En EvaluacionAjustada crea resultado(): string, público:
     a) si promedio() es undefined, devuelve 'Sin notas';
     b) si promedio es mayor o igual que minimo, 'Aprobado';
     c) en otro caso, 'Reprobado'.

COMPRUEBA (e = new EvaluacionAjustada('Ana', 7), en este orden)
  console.log(e.promedio(), e.resultado());   // undefined 'Sin notas'
  console.log(e.agregar(4), e.agregar(8), e.agregar(9)); // true true true
  console.log(e.agregar(11));                 // false
  console.log(e.promedio());                  // 8.5  (se quita el 4: (8+9)/2)
  console.log(e.cantidad());                  // 3    (el 4 sigue guardado)
  console.log(e.resultado());                 // 'Aprobado'
  Segunda instancia, mínimo 7, con notas 5, 5, 5: promedio() → 5; resultado() → 'Reprobado'.

ESTO DEBE FALLAR
  // e.datos();  // e.notas;

EXPLICA
  ¿Qué pasa si la nota mínima aparece dos veces? ¿Por qué datos() devuelve una copia?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 09 — Cupo y lista de espera
/*
SITUACIÓN
  Un taller tiene cupo limitado. Una versión con lista de espera guarda a quienes
  no caben, hasta un límite. Inscribir sigue siendo trabajo de la clase base.

QUÉ DEBES HACER
  1. Crea la clase Taller. Declara en su constructor nombre (string, visible) y cupo
     (number, oculto; supón entero > 0). Crea además un array oculto de nombres
     inscritos (string[]), vacío. Nómbralo distinto del método inscritos().
  2. En Taller crea registrar(nombre: string): boolean, protected. Devuelve false si
     el nombre ya está inscrito o si ya se llenó el cupo. Si no, lo agrega al final
     y devuelve true.
  3. En Taller crea inscritos(): string[], público. Devuelve una COPIA de la lista.
  4. Crea TallerConEspera que extienda Taller. Su constructor recibe nombre, cupo y
     limiteEspera (number, oculto; supón entero >= 0). Pasa nombre y cupo al padre.
     Crea además un array oculto para la espera (string[]), vacío.
  5. En TallerConEspera crea solicitar(nombre: string): boolean, público:
     a) si el nombre ya está inscrito (usa inscritos()) o ya está en espera, devuelve false;
     b) intenta super.registrar(nombre); si da true, devuelve true;
     c) si no hubo cupo y la espera aún tiene lugar (menos de limiteEspera), agrégalo
        al final de la espera y devuelve true;
     d) si la espera está llena, devuelve false.
  6. En TallerConEspera crea pendientes(): string[], público. Devuelve una COPIA de la espera.
  true en solicitar significa «quedó inscrito o entró a espera»: para distinguirlo
  consulta inscritos() y pendientes().

COMPRUEBA (t = new TallerConEspera('JS', 1, 2), en este orden)
  console.log(t.solicitar('Ana'));  // true   → inscritos ['Ana'], pendientes []
  console.log(t.solicitar('Luis')); // true   → pendientes ['Luis']
  console.log(t.solicitar('Luis')); // false  (ya está en espera)
  console.log(t.solicitar('Eva'));  // true   → pendientes ['Luis', 'Eva']
  console.log(t.solicitar('Sol'));  // false  (espera llena)
  console.log(t.inscritos(), t.pendientes()); // ['Ana'] ['Luis', 'Eva']
  Vacía una copia devuelta (copia.length = 0) y comprueba que el taller no cambió.

ESTO DEBE FALLAR
  // t.registrar('X');

EXPLICA
  ¿Por qué se revisan los duplicados antes de llamar a registrar()?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 10 — Selección con presupuesto
/*
SITUACIÓN
  Un catálogo guarda propuestas con costo. La versión limitada elige propuestas
  en orden mientras quepan en el presupuesto; si una no cabe, la salta y sigue.

QUÉ DEBES HACER
  1. Antes de las clases declara: type Propuesta = { codigo: string; costo: number }
  2. Crea la clase Catalogo. Declara en su constructor nombre (string, visible).
     Además crea un array oculto de propuestas (Propuesta[]), vacío.
  3. En Catalogo crea agregar(codigo: string, costo: number): boolean. Acepta si
     costo es mayor que 0 y el código no existe: la guarda al final y devuelve true.
     Si no, false.
  4. En Catalogo crea datos(): Propuesta[], protected. Devuelve un array NUEVO con
     copias de las propuestas, en el mismo orden.
  5. Crea CatalogoLimitado que extienda Catalogo. Su constructor recibe nombre y
     presupuesto (number, oculto; supón >= 0). Pasa nombre al padre.
  6. En CatalogoLimitado crea seleccionar(): string[], público:
     a) guarda el presupuesto en una variable local llamada restante;
     b) recorre super.datos() en orden;
     c) si el costo cabe en restante, agrega el código al resultado y réstalo de restante;
     d) si no cabe, sigue con la siguiente;
     e) devuelve los códigos elegidos ([] si no hubo).
     No cambies el presupuesto guardado: cada llamada empieza con el original.

COMPRUEBA (c = new CatalogoLimitado('Obras', 100), en este orden)
  console.log(c.seleccionar());                                   // []
  console.log(c.agregar('A', 70), c.agregar('B', 50), c.agregar('C', 30)); // true true true
  console.log(c.agregar('A', 5));  // false (código repetido)
  console.log(c.agregar('D', 0));  // false (costo no positivo)
  console.log(c.seleccionar());    // ['A', 'C']  (A deja 30; B no cabe; C sí)
  console.log(c.seleccionar());    // ['A', 'C']  (el presupuesto no se gastó)

ESTO DEBE FALLAR
  // c.datos();  // c.propuestas;

EXPLICA
  ¿Por qué rechazar B no impide seleccionar C?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 11 — La mayor racha
/*
SITUACIÓN
  Una app registra si una persona cumplió su actividad cada día. Se quiere saber
  la mayor racha de días cumplidos seguidos y si alcanza una meta.

QUÉ DEBES HACER
  1. Crea la clase Actividad. Declara en su constructor nombre (string, visible).
     Además crea un array oculto de registros (boolean[]), vacío.
  2. En Actividad crea registrar(cumplido: boolean): void. Agrega el valor al final.
     No devuelve nada.
  3. En Actividad crea datos(): boolean[], protected. Devuelve una COPIA del historial.
  4. Crea ActividadConMeta que extienda Actividad. Su constructor recibe nombre y
     meta (number, oculto; supón entero > 0). Pasa nombre al padre.
  5. En ActividadConMeta crea mejorRacha(): number, público:
     a) obtén el historial con super.datos();
     b) recórrelo contando los true seguidos; un false reinicia la cuenta a 0;
     c) devuelve la cuenta más alta que viste (0 si no hay registros).
  6. En ActividadConMeta crea cumplioMeta(): boolean, público: true si
     mejorRacha() es mayor o igual que meta.

COMPRUEBA (a = new ActividadConMeta('Correr', 3), en este orden)
  console.log(a.mejorRacha(), a.cumplioMeta()); // 0 false
  Registra con a.registrar(...): true, true, false, true, true, true, false, true
  console.log(a.mejorRacha(), a.cumplioMeta()); // 3 true
  a.registrar(false);
  console.log(a.mejorRacha(), a.cumplioMeta()); // 3 true  (un false final no borra la racha)
  Segunda instancia con meta 5 y el mismo historial: cumplioMeta() → false.

ESTO DEBE FALLAR
  // a.datos();  // a.registros;

EXPLICA
  ¿Por qué no basta con contar todos los true del historial?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 12 — Pedido sin descuentos parciales
/*
SITUACIÓN
  Un almacén guarda existencias. Un pedido se acepta completo o no se acepta:
  nunca debe quedar descontada solo una parte.

QUÉ DEBES HACER
  1. Antes de las clases declara: type Existencia = { codigo: string; cantidad: number }
  2. Crea la clase Almacen. Declara en su constructor nombre (string, visible).
     Además crea un array oculto de existencias (Existencia[]), vacío.
  3. En Almacen crea registrar(codigo: string, cantidad: number): boolean. Acepta si
     el código es nuevo y cantidad es un entero >= 0: la guarda y devuelve true.
     Si no, false.
  4. En Almacen crea stock(codigo: string): number | undefined. Devuelve la
     cantidad del código, o undefined si no existe. Ojo: stock 0 significa que existe
     pero está agotado; no es lo mismo que undefined.
  5. En Almacen crea descontar(codigo: string, cantidad: number): boolean, protected.
     Exige código existente, cantidad entera > 0 y stock suficiente. Si cumple,
     descuenta y devuelve true; si no, false.
  6. Crea AlmacenPedidos que extienda Almacen. Su constructor recibe nombre y
     maximo (number, oculto; supón entero > 0). Pasa nombre al padre.
  7. En AlmacenPedidos crea comprar(codigos: string[]): boolean, público. Cada
     aparición en el array es UNA unidad:
     a) si el array está vacío, devuelve false;
     b) si hay más unidades que maximo (se cuentan todas las apariciones), false;
     c) cuenta cuántas veces aparece cada código;
     d) con stock(), si algún código no existe o su stock no alcanza para TODAS sus
        apariciones, devuelve false. Todavía no descuentes nada;
     e) solo si todo se cumple, descuenta con super.descontar y devuelve true.
     No modifiques el array recibido.

COMPRUEBA (a = new AlmacenPedidos('Central', 4); a.registrar('A', 2); a.registrar('B', 1))
  console.log(a.comprar(['A','A','B','B']));       // false (B pide 2 y hay 1)
  console.log(a.stock('A'), a.stock('B'));         // 2 1   (nada cambió)
  console.log(a.comprar(['A','A','B']));           // true
  console.log(a.stock('A'), a.stock('B'));         // 0 0
  console.log(a.comprar([]));                      // false
  console.log(a.comprar(['X']));                   // false

ESTO DEBE FALLAR
  // a.descontar('A', 1);

EXPLICA
  ¿Por qué hay que contar las apariciones repetidas? ¿Qué pasaría si descontaras
  mientras validas?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 13 — Clasificación con desempates
/*
SITUACIÓN
  Un torneo registra marcas; una misma persona puede aparecer varias veces. Se
  suman sus puntos y se listan los que alcanzan un mínimo, de mayor a menor.

QUÉ DEBES HACER
  1. Antes de las clases declara: type Marca = { nombre: string; puntos: number }
  2. Crea la clase Torneo. Declara en su constructor titulo (string, visible).
     Además crea un array oculto de marcas (Marca[]), vacío.
  3. En Torneo crea registrar(nombre: string, puntos: number): boolean. Acepta si
     puntos es un entero >= 0: la guarda al final y devuelve true. Si no, false.
     Se permiten nombres repetidos.
  4. En Torneo crea datos(): Marca[], protected. Devuelve un array NUEVO con
     copias de las marcas, en el mismo orden.
  5. Crea TorneoClasificatorio que extienda Torneo. Su constructor recibe titulo y
     minimo (number, oculto; supón entero >= 0). Pasa titulo al padre.
  6. En TorneoClasificatorio crea clasificados(): string[], público:
     a) obtén las marcas con super.datos();
     b) agrupa por nombre y suma sus puntos; anota en qué posición apareció cada
        nombre por primera vez;
     c) quédate solo con quienes sumen minimo o más;
     d) ordena de mayor a menor suma; si empatan, va primero quien apareció antes;
     e) devuelve solo los nombres, sin puntos y sin repetir ([] si no hay).
     No reordenes las marcas guardadas.

COMPRUEBA (t = new TorneoClasificatorio('Liga', 10), en este orden)
  console.log(t.clasificados());   // []
  console.log(t.registrar('Ana', 6), t.registrar('Luis', 10),
              t.registrar('Ana', 4), t.registrar('Eva', 12)); // true true true true
  console.log(t.registrar('Sol', -1)); // false
  console.log(t.clasificados());   // ['Eva', 'Ana', 'Luis']  (Eva 12; Ana 10 y Luis 10: Ana apareció antes)
  console.log(t.clasificados());   // ['Eva', 'Ana', 'Luis']

ESTO DEBE FALLAR
  // t.datos();  // t.marcas;

EXPLICA
  ¿Qué dato guardas para poder desempatar y por qué?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 14 — Reservas sin traslapes
/*
SITUACIÓN
  Una sala se reserva por horas enteras de un día (0 a 24). Dos reservas no
  pueden solaparse; una puede empezar justo cuando termina otra. La versión
  limitada impone una duración máxima por reserva.

QUÉ DEBES HACER
  1. Antes de las clases declara: type Reserva = { codigo: string; inicio: number; fin: number }
  2. Crea la clase Agenda. Declara en su constructor nombre (string, visible).
     Además crea un array oculto de reservas (Reserva[]), vacío.
  3. En Agenda crea intentarReserva(codigo: string, inicio: number, fin: number):
     boolean, protected. Acepta solo si se cumple TODO:
     - inicio y fin son enteros con 0 <= inicio < fin <= 24;
     - el código no existe entre las reservas vigentes;
     - no se traslapa con ninguna reserva vigente. Dos intervalos se traslapan si
       cada uno empieza antes de que el otro termine (el fin NO cuenta como ocupado:
       compartir un extremo no es traslape).
     Si acepta, la guarda al final y devuelve true; si no, false.
  4. En Agenda crea cancelar(codigo: string): boolean. Si existe, elimina esa reserva
     (las demás conservan su orden) y devuelve true; si no, false. El código
     cancelado puede usarse otra vez.
  5. En Agenda crea listar(): string[]. Devuelve los códigos vigentes en orden de registro.
  6. Crea AgendaLimitada que extienda Agenda. Su constructor recibe nombre y
     maxHoras (number, oculto; supón entero entre 1 y 24). Pasa nombre al padre.
  7. En AgendaLimitada crea reservar(codigo: string, inicio: number, fin: number):
     boolean, público:
     a) si fin menos inicio supera maxHoras, devuelve false;
     b) si no, devuelve super.intentarReserva(codigo, inicio, fin).
     No repitas las demás validaciones.

COMPRUEBA (a = new AgendaLimitada('Sala', 3), en este orden)
  console.log(a.reservar('A', 9, 11));   // true
  console.log(a.reservar('B', 11, 13));  // true   (empieza donde termina A)
  console.log(a.reservar('C', 10, 12));  // false  (traslapa con A y con B)
  console.log(a.reservar('D', 14, 18));  // false  (4 horas > 3)
  console.log(a.reservar('E', 8, 8));    // false  (inicio no es menor que fin)
  console.log(a.listar());               // ['A', 'B']
  console.log(a.cancelar('A'));          // true
  console.log(a.reservar('C', 9, 11));   // true
  console.log(a.listar());               // ['B', 'C']
  console.log(a.cancelar('X'));          // false

ESTO DEBE FALLAR
  // a.intentarReserva('Z', 1, 2);

EXPLICA
  ¿Por qué compartir un extremo no es un traslape? ¿Por qué la hija no repite las
  validaciones de la base?
*/
(() => {
    // Tu solución.
})();
// EJERCICIO 15 — Transferencias con comisión
/*
SITUACIÓN
  Un banco permite transferir dinero entre cuentas con comisión y un límite
  acumulado de envíos. Si algo falla, ninguna de las dos cuentas debe cambiar.

QUÉ DEBES HACER
  1. Crea la clase Cuenta. Declara en su constructor titular (string, visible) y
     saldo (number, oculto; supón >= 0).
  2. En Cuenta crea consultarSaldo(): devuelve el saldo (number).
  3. En Cuenta crea depositar(monto: number): boolean. Si monto es mayor que 0, lo
     suma al saldo y devuelve true; si no, false.
  4. En Cuenta crea debitar(monto: number): boolean, protected. Si monto es mayor
     que 0 y el saldo alcanza, lo descuenta y devuelve true; si no, false.
  5. Crea CuentaTransferencias que extienda Cuenta. Su constructor recibe titular,
     saldo y limite (number, oculto; supón > 0). Pasa titular y saldo al padre.
     Crea además enviado (number, oculto) que empieza en 0 y NO se recibe en el
     constructor.
  6. En CuentaTransferencias crea consultarEnviado(): devuelve enviado.
  7. En CuentaTransferencias crea transferir(destino: Cuenta, monto: number): boolean,
     público:
     a) devuelve false si destino es this, si monto no es mayor que 0 o si
        enviado + monto superaría limite;
     b) calcula la comisión: 5 si monto < 100; 2% del monto si monto >= 100;
     c) intenta super.debitar(monto + comisión); si da false, devuelve false;
     d) solo entonces: destino.depositar(monto), suma monto a enviado y devuelve true.
     La comisión no llega al destino ni cuenta para el límite. No hay redondeo.
     No redefinas métodos de Cuenta.

COMPRUEBA (ana = new CuentaTransferencias('Ana', 300, 200); luis = new Cuenta('Luis', 0))
  console.log(ana.transferir(luis, 100));  // true
  // Ana 198 · Luis 100 · enviado 100    (comisión 2: Ana pierde 102)
  console.log(ana.transferir(luis, 110));  // false  (100 + 110 > 200); nada cambia
  console.log(ana.transferir(luis, 100));  // true
  // Ana 96 · Luis 200 · enviado 200
  console.log(ana.transferir(luis, 1));    // false  (200 + 1 > 200)
  const eva = new CuentaTransferencias('Eva', 10, 100);
  console.log(eva.transferir(luis, 10));   // false  (10 + comisión 5 > 10); Eva 10, Luis 200
  console.log(eva.transferir(eva, 5));     // false  (destino es ella misma)

ESTO DEBE FALLAR
  // ana.debitar(1);  // ana.saldo;

EXPLICA
  ¿Por qué no se acredita al destinatario antes de comprobar los rechazos?
  ¿Por qué la comisión sale del origen pero no llega al destino?
*/
(() => {
    // Tu solución.
})();
