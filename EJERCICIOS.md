# Cómo generar compendios de ejercicios (formato Compendio03)

Guía para crear ejercicios de repaso en cualquier sección del curso. El modelo a imitar es
[`08.Clases/00.Ejercicios/Compendio03.ts`](08.Clases/00.Ejercicios/Compendio03.ts): cada
ejercicio dice **qué hacer, paso a paso**, no solo qué características debe tener la solución.

**Precedencia:** si este archivo contradice a `00.Ejercicios/AGENTS.md` (por ejemplo, en
«no revelar el algoritmo paso a paso»), prevalece este archivo. El `AGENTS.md` de una
sección concreta, si existe, prevalece sobre ambos en los detalles de esa sección.

## 1. Problema que resuelve este formato

Un enunciado que enumera clases, tipos y reglas, pero no indica qué escribir primero, qué
después ni cuándo terminar, deja a la persona sin saber qué hacer. Cada ejercicio debe
poder resolverse leyendo únicamente su enunciado.

## 2. Estructura de un compendio

- Archivo `CompendioNN.ts` en `NN.Sección/00.Ejercicios/`, con **15 ejercicios** salvo que
  se pida otra cantidad.
- **Bloque A** (01–05): refuerza **una** subsección concreta, la más reciente.
- **Bloque B** (06–15): cada ejercicio integra varias subsecciones ya vistas.
- Si la petición no indica qué refuerza el bloque A ni qué integra el B, pregúntalo.
- Dificultad creciente dentro de cada bloque; un tema nuevo por ejercicio en el bloque A.

Alcance: un ejercicio solo exige lo visto en la sección y en las anteriores. Orden del curso:
`01.Bases` → `03.Tipos de datos` → `04.Funciones y Objetos` → `05.Objetos` → `06.tsconfig` →
`07.ES6 JS2015` → `08.Clases` → `09.Interfaces` → `10.Namespaces` → `11.Generics` → `12.Decorators`.
Dentro de una sección, el orden son sus subsecciones numeradas. Revisa los `.ts` y el
`Apunte` de lo que cubre el compendio antes de escribir.

## 3. Cabecera del archivo

Un comentario de bloque con:

1. Título y qué refuerzan los bloques A y B.
2. **Subsecciones**: lista de lo que se ejercita, una línea cada una.
3. **Cómo trabajar cada ejercicio**: lee SITUACIÓN → sigue QUÉ DEBES HACER en orden →
   copia COMPRUEBA y predice antes de ejecutar → prueba ESTO DEBE FALLAR una por una →
   responde EXPLICA.
4. **Vocabulario** de los enunciados (por ejemplo, «oculto = private», «visible = public»,
   «supón = no lo valides», «{llaves} = valor a sustituir»), si el tema lo necesita.
5. **Reglas comunes**: tipos obligatorios y sin `any`, qué va dentro de qué, convenciones de
   retorno (`true`/`false`, `undefined`, `[]`), consultas que no modifican, nombres de métodos
   que se conservan, y lo que está **prohibido** por no haberse visto.
6. Para el bloque B, un recuadro de **integración**: qué parte de cada ejercicio ejercita
   cada subsección.

## 4. Plantilla de ejercicio

```ts
// EJERCICIO NN — Título corto
/*
SITUACIÓN
  2–3 frases: qué se modela y qué papel tiene cada pieza.

QUÉ DEBES HACER
  1. Crea ... Declara en su constructor, en este orden: ...
  2. En X crea el método m(): público/protected, sin argumentos, devuelve T:
     a) primer paso;
     b) segundo paso, con el límite exacto («5 o menos / más de 5»);
     c) qué devuelve.
  3. Crea Y que extienda X. ...
  4. Fuera de las clases crea las instancias y ejecuta COMPRUEBA.

COMPRUEBA
  console.log(new Algo(...).metodo());   // resultado esperado

ESTO DEBE FALLAR
  // algo.metodoProtegido();  → es protected.

EXPLICA
  1–2 preguntas concretas ligadas a una decisión del ejercicio.
*/
(() => {
    // Tu solución.
})();
```

- Cada ejercicio va en su propia función autoinvocada para poder repetir nombres.
- Los comentarios no pueden contener `*/`.
- El espacio de solución contiene solo `// Tu solución.`

## 5. Cómo redactar «QUÉ DEBES HACER»

**Prueba de lectura:** lee solo esa sección, sin COMPRUEBA. ¿Sabes qué teclear en cada paso?
Si debes deducir algo, reescribe el paso.

- **Pasos numerados en orden de construcción** (base, sus datos, sus métodos; luego la
  derivada, sus métodos; al final instancias). Un paso = una acción: «Crea…», «En X crea…»,
  «Pasa… al padre con `super`», «Devuelve…».
- **Cada paso nombra todo**: clase, miembro, parámetros con tipo, retorno, visibilidad y de
  dónde sale cada dato. El orden de los argumentos del constructor es explícito.
- **Lógica en sub-pasos a), b), c)** con el orden de evaluación y cada borde con su valor.
- **Qué NO hacer** cuando haya tentación evidente: copiar una validación del padre, restar
  tú si lo hace el padre, guardar un dato derivado, devolver una colección interna.
- **Rechazos definidos** (`false`, `undefined`, `[]`) y el estado que queda tras rechazar.
- **Supuestos** («supón entero ≥ 0») separados de lo que el método debe validar.
- **Formatos de texto exactos**, con `{llaves}` para los valores.
- **Sin verbos vagos** (maneja, gestiona, procesa) ni «los datos correctos».
- **Una regla, una vez:** no repartas una regla entre tabla, pasos y pruebas; escríbela en el
  paso que la implementa.
- Si un nombre pedido puede chocar con otro (p. ej. un array privado con el mismo nombre que un
  método público), avísalo en el paso.

## 6. COMPRUEBA y ESTO DEBE FALLAR

- **COMPRUEBA** son líneas `console.log` copiables, con el resultado después de `//`.
  Si varias llamadas dependen del estado previo, van en orden y se indica el estado cuando
  cambie. Si una prueba exige instancia nueva, se ve en el código.
- Incluye al menos un caso límite por regla: bordes inclusivos y exclusivos, vacío, repetidos,
  y el estado tras un rechazo.
- En ejercicios de integración, añade una **segunda instancia** y comprueba que no comparte
  estado con la primera.
- **ESTO DEBE FALLAR**: líneas comentadas que TypeScript debe rechazar (acceso a `private`,
  `protected`, asignar a `readonly`, instanciar lo no instanciable…). Se descomentan de una en
  una, se comprueba el error y se vuelven a comentar.

## 7. Variedad y diseño

- Cada ejercicio requiere lógica real: decisiones, validaciones, cálculos, recorridos,
  búsquedas, acumulación o cambios de estado. No basta con reproducir un ejemplo.
- Varía dominios y mecánicas (tramos de precio, estado con rechazos, colecciones, agrupación,
  intervalos, coordinación entre dos objetos…). No cambies solo nombres y datos.
- Evita dependencias externas y temas de secciones posteriores.

## 8. Conservar el trabajo del alumno

- **Nunca modifiques el código que el alumno escribió** dentro de las funciones de solución,
  ni lo corrijas, aunque tenga errores. Edita solo los comentarios de enunciado.
- Si detectas errores en sus soluciones, señálalos en la respuesta.
- No incluyas soluciones en el compendio. Respeta la numeración y el contenido existentes.

## 9. Verificación obligatoria antes de entregar

1. **Referencia temporal**: escribe una solución por ejercicio en el directorio temporal de la
   sesión (nunca en el repo), siguiendo literalmente los pasos, y ejecuta todas las líneas de
   COMPRUEBA. Los resultados deben coincidir con el enunciado.
2. **Casos límite**: cada condición tiene una prueba que dependa de ella (`<=` frente a `<`,
   orden de reglas, estado tras un rechazo).
3. **ESTO DEBE FALLAR**: confirma que cada línea falla de verdad al compilar.
4. **Alcance**: la referencia usa solo lo permitido por la sección y por la cabecera.
5. **Compilación**, desde la raíz de este proyecto:

```bash
./node_modules/.bin/tsc --noEmit --strict --ignoreConfig --exactOptionalPropertyTypes --noUncheckedIndexedAccess --target es2022 'NN.Sección/00.Ejercicios/CompendioNN.ts'
```

   Si el error está en código del alumno, repórtalo; no lo corrijas.
6. **Lectura final**: aplica la prueba de lectura a cada ejercicio y busca contradicciones
   entre cabecera, pasos y COMPRUEBA.

## 10. Respuesta final

Enlaza los archivos modificados, resume qué contiene cada bloque, indica qué verificaste y qué
errores encontraste en el código del alumno (sin haberlos tocado).
