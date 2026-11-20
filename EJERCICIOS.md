# Cómo generar compendios de ejercicios (estructura del curso de JavaScript)

Guía para crear ejercicios de repaso en cualquier sección del curso. La estructura es la del
`Repaso01.js` del curso de JavaScript (`../curso-javascript/00.Ejercicios/Repaso/`) y su guía
`../curso-javascript/00.Ejercicios/AGENTS.md`, adaptada a TypeScript. El modelo en este curso es
[`08.Clases/00.Ejercicios/Compendio01.ts`](08.Clases/00.Ejercicios/Compendio01.ts).
Cada ejercicio dice **qué hacer, paso a paso**, no solo qué características debe tener la solución.

**Precedencia:** si este archivo contradice a `00.Ejercicios/AGENTS.md` (por ejemplo, en
«no revelar el algoritmo paso a paso»), prevalece este archivo. El `AGENTS.md` de una
sección concreta, si existe, prevalece sobre ambos en los detalles de esa sección.

## 1. Problema que resuelve este formato

Un enunciado que solo dice «se tiene una clase…» y esconde las reglas en una lista de pasos
no plantea un problema. Cada ejercicio debe poder resolverse leyendo únicamente su enunciado:
la SITUACIÓN cuenta el problema completo, con todas sus reglas y valores (**qué se quiere y por
qué**); las RESTRICCIONES delimitan datos, herramientas y prohibiciones; y QUÉ DEBES HACER es
solo el contrato de lo que debe existir (nombres, tipos, visibilidad). **El cómo lo decide el
alumno.**

## 2. Estructura de un compendio

- Archivo `CompendioNN.ts` en `NN.Sección/00.Ejercicios/`, con **50 ejercicios** salvo que
  se pida otra cantidad.
- Los ejercicios se agrupan en **bloques** (A, B, C…) de dificultad creciente. Cada bloque
  refuerza **un** tema de la sección y recupera los anteriores; los últimos bloques integran
  varias subsecciones y conocimientos de secciones previas.
- Un tema nuevo por bloque; una idea principal por ejercicio.

Alcance: un ejercicio solo exige lo visto en la sección y en las anteriores. Orden del curso:
`01.Bases` → `03.Tipos de datos` → `04.Funciones y Objetos` → `05.Objetos` → `06.tsconfig` →
`07.ES6 JS2015` → `08.Clases` → `09.Interfaces` → `10.Namespaces` → `11.Generics` → `12.Decorators`.
Dentro de una sección, el orden son sus subsecciones numeradas. Revisa los `.ts` y el
`Apunte` de lo que cubre el compendio antes de escribir. Si el apunte es incorrecto, usa el
comportamiento correcto y repórtalo.

## 3. Estructura del archivo

1. **Cabecera** (comentario de bloque).
2. **Bloques** con un separador visible, de menor a mayor dificultad:

```ts
// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE A — EJERCICIOS 01 AL 06: 01 DEFINICIÓN DE UNA CLASE
// Una o dos líneas: qué tema entrena el bloque.
// ═══════════════════════════════════════════════════════════════════════════
```

3. **Ejercicios** con la plantilla de la sección 4.

### Cabecera: lo que debe incluir

1. Título y una frase: cómo escala la dificultad.
2. **Subsecciones ejercitadas** y **secciones previas** que también se usan, una línea cada una.
3. **Organización**: una línea por bloque con su rango de ejercicios, su tema y con qué se combina.
4. **Cómo trabajar cada ejercicio** (siete pasos): leer SITUACIÓN y RESTRICCIONES → seguir
   QUÉ DEBES HACER → escribir la solución bajo `// TU SOLUCIÓN` → predecir a mano COMPRUEBA →
   ejecutar y comparar → probar ESTO DEBE FALLAR (y, si algo falla, tabla de seguimiento, no
   cambios al azar) → responder EXPLICA.
5. **RESTRICCIONES (en cada ejercicio)**: una línea que explica Datos (qué se puede esperar) /
   Usa (qué herramientas emplear) / No uses (qué está prohibido).
6. **Vocabulario** de los enunciados (por ejemplo, «oculto = private», «visible = public»,
   «supón = no lo valides», «{llaves} = valor a sustituir»), si el tema lo necesita.
7. **Reglas comunes**: tipos obligatorios y sin `any`, qué va dentro de qué, convenciones de
   retorno (`true`/`false`, `undefined`, `[]`), consultas que no modifican, nombres que se
   conservan.
8. **Prohibido** por no haberse visto, y desde qué ejercicio se permite cada tema.
9. Un recuadro de **integración** para los bloques finales: qué ejercita cada subsección.
10. «No hay soluciones incluidas.»

## 4. Plantilla de ejercicio

```ts
// !EJERCICIO NN — Título corto
/*
SITUACIÓN
  El problema contado en su propio ámbito (tienda, banco, juego…), sin decir «se tiene una
  clase…». Incluye todas las reglas con sus valores exactos (umbrales, fórmulas, formatos de
  texto, qué se rechaza y qué queda tras un rechazo, desempates) y qué se pide consultar o
  calcular. Define cualquier término que se use.

  Ejemplo: un caso resuelto con datos concretos que cubra todo lo que se pide.

  Idea: la técnica o concepto que entrena el ejercicio y la trampa más común.

RESTRICCIONES
  Datos:
  - qué entradas se pueden esperar: rangos, vacío, repetidos, enteros...
  Usa:
  - las herramientas del curso que debes emplear.
  No uses:
  - lo que aún no se ha visto o está prohibido en este ejercicio.

QUÉ DEBES HACER
  1. Crea la clase X con las propiedades ... Su constructor recibe, en este orden: ...
  2. En X crea los métodos públicos m(a: T): U y n(): V; y el protegido p(): W.
  3. Crea Y que extienda X. Su constructor recibe ... y pasa ... al padre.
  4. Fuera de las clases, crea f(lista: X[]): U.
  5. Ejecuta las líneas de COMPRUEBA en el orden en que aparecen y compara con lo esperado.

COMPRUEBA
  console.log(new Algo(...).metodo());   // resultado esperado   (caso que cubre)

ESTO DEBE FALLAR
  // algo.metodoProtegido();  → es protected.

EXPLICA
  1 pregunta concreta ligada a una decisión del ejercicio.
*/
(() => {
    // TU SOLUCIÓN
})();
```

- El marcador de inicio es exactamente `// !EJERCICIO NN — Título`. No lo cambies: el editor
  del alumno lo usa para distinguir los ejercicios.
- Cada ejercicio va en su propia función autoinvocada para poder repetir nombres.
- Los comentarios no pueden contener `*/`.
- El espacio de solución contiene solo `// TU SOLUCIÓN`.
- **ESTO DEBE FALLAR** es la adaptación a TypeScript de los «casos límite» de JavaScript: son
  líneas que el compilador debe rechazar (acceso a `private`/`protected`, asignar a `readonly`,
  instanciar lo no instanciable…). En JavaScript no existe esa sección.
- No hay bloque de «pruebas automáticas»: las clases y funciones viven dentro de la función de
  cada ejercicio y no son accesibles desde fuera. La comprobación es COMPRUEBA + ESTO DEBE FALLAR.

### QUÉ DEBES HACER

- **Es un contrato, no una receta.** Dice qué debe existir: clases, propiedades, métodos, con su
  nombre, tipo, visibilidad (visible/oculto/solo jerarquía/solo lectura), parámetros con tipo y
  valor de retorno, y el orden de los argumentos del constructor. No explica el algoritmo ni
  repite reglas de la SITUACIÓN.
- **Pasos numerados en orden de construcción** (base, sus datos, sus métodos; luego la derivada;
  luego las funciones sueltas). El último paso siempre es ejecutar COMPRUEBA, indicando si el
  orden de las líneas importa.
- **Qué NO hacer** solo cuando haya una tentación evidente y no esté ya en RESTRICCIONES.
- Si un nombre pedido puede chocar con otro (p. ej. un array privado con el mismo nombre que un
  método público), avísalo en el paso.
- **Sin verbos vagos** (maneja, gestiona, procesa) ni «los datos correctos».

### COMPRUEBA y ESTO DEBE FALLAR

- **COMPRUEBA** son líneas `console.log` copiables, con el resultado después de `//` y, cuando
  cubre un borde, el caso entre paréntesis. Las líneas de preparación (`const a = …`) van antes.
  Si varias llamadas dependen del estado previo, van en orden y se indica el estado cuando cambie.
- Incluye al menos un caso límite por regla: bordes inclusivos y exclusivos, vacío, repetidos
  y el estado tras un rechazo.
- En ejercicios de integración, añade una **segunda instancia** y comprueba que no comparte
  estado con la primera.
- **ESTO DEBE FALLAR**: líneas comentadas con el motivo tras `→`. Se descomentan de una en
  una, se comprueba el error y se vuelven a comentar.
- **EXPLICA**: una pregunta concreta ligada a una decisión del ejercicio.

## 6. Variedad y diseño

- Cada ejercicio requiere lógica real: decisiones, validaciones, cálculos, recorridos,
  búsquedas, acumulación o cambios de estado. No basta con reproducir un ejemplo.
- Varía dominios y mecánicas (tramos de precio, estado con rechazos, colecciones, agrupación,
  intervalos, coordinación entre dos objetos…). No cambies solo nombres y datos.
- Evita dependencias externas y temas de secciones posteriores.
- Usa enteros en cálculos con porcentajes; evita decimales binarios en los resultados esperados.

## 7. Conservar el trabajo del alumno

- **Nunca modifiques el código que el alumno escribió** dentro de las funciones de solución,
  ni lo corrijas, aunque tenga errores. Tampoco cambies el marcador `// Tu solución.` que haya
  quedado dentro de una función ya resuelta. Edita solo los comentarios de enunciado.
- Si detectas errores en sus soluciones, señálalos en la respuesta.
- No incluyas soluciones en el compendio. Respeta la numeración y el contenido existentes.

## 8. Verificación obligatoria antes de entregar

1. **Referencia temporal**: escribe una solución por ejercicio en el directorio temporal de la
   sesión (nunca en el repo), siguiendo la SITUACIÓN y el contrato de QUÉ DEBES HACER, y ejecuta todas las líneas de
   COMPRUEBA. Los resultados deben coincidir con el enunciado, incluidos los de **Ejemplo**.
2. **Casos límite**: cada condición tiene una prueba que dependa de ella (`<=` frente a `<`,
   orden de reglas, estado tras un rechazo). Si introduces el error típico en la referencia,
   alguna línea de COMPRUEBA debe revelarlo.
3. **ESTO DEBE FALLAR**: confirma que cada línea falla de verdad al compilar.
4. **Aritmética**: revisa a mano los ejemplos con cálculo.
5. **Alcance**: la referencia usa solo lo permitido por la sección, por el bloque y por `No uses`.
6. **Compilación**, desde la raíz de este proyecto:

```bash
./node_modules/.bin/tsc --noEmit --strict --ignoreConfig --exactOptionalPropertyTypes --noUncheckedIndexedAccess --target es2022 'NN.Sección/00.Ejercicios/CompendioNN.ts'
```

   Si el error está en código del alumno, repórtalo; no lo corrijas.
7. **Lectura final**: aplica la prueba de lectura a cada ejercicio y busca contradicciones
   entre cabecera, SITUACIÓN, RESTRICCIONES, pasos y COMPRUEBA.

## 9. Respuesta final

Enlaza los archivos modificados, resume qué contiene cada bloque, indica qué verificaste y qué
errores encontraste en el código del alumno (sin haberlos tocado).
