# Guía para generar ejercicios de clases (sección 08)

Este archivo indica cómo crear, revisar o ampliar ejercicios en `00.Ejercicios`.
Complementa el `AGENTS.md` de la raíz del curso: aquel regula los apuntes; este, los ejercicios.
La serie progresiva anterior de 15 ejercicios está en `SERIE-PROGRESIVA.md`.

## 1. Qué hay en esta carpeta

| Archivo | Contenido |
| --- | --- |
| `CompendioNN.ts` | Un compendio de 15 ejercicios de repaso, solo con enunciados y el código del alumno. |
| `CompendioNN.js` | Salida compilada. No se edita ni se genera a propósito. |
| `SERIE-PROGRESIVA.md` | Serie independiente de 15 ejercicios, un concepto nuevo por ejercicio. |

Estructura estándar de un compendio: **Bloque A** (ejercicios 01–05) refuerza **una**
subsección concreta; **Bloque B** (06–15) integra varias subsecciones en cada problema.
Antes de generar uno, pregunta qué subsección refuerza el bloque A y cuáles integra el B
si la petición no lo dice.

Subsecciones de `08.Clases` (carpetas, no el número del `Apunte.md`):
`01.Definicion` · `02.Formas cortas de asignar props` · `03.Met publicos y priv` ·
`04.Extense` · `05.gets&sets` · `06.Clases Abstractas` · `07.Constructor`.

## 2. Antes de escribir

1. Lee los `.ts` de las subsecciones que se van a reforzar y la parte correspondiente de
   `../Apunte.md`. Los ejercicios solo pueden exigir lo que esas subsecciones enseñan.
2. Lee los compendios existentes: no repitas dominios (Persona, Cuenta, Producto…) ni
   estructuras ya usadas; varía el contexto y el tipo de lógica.
3. **Nunca modifiques el código que el alumno haya escrito** dentro de las funciones
   `(() => { ... })()`, ni lo corrijas aunque tenga errores. Edita solo los comentarios de
   enunciado. Si detectas errores en su solución, señálalos en la respuesta, no en el archivo.
4. No incluyas soluciones en los archivos. Cada función de ejercicio nueva contiene solo
   `// Tu solución.`

## 3. Alcance permitido por subsección

El ejercicio no puede exigir nada de una subsección posterior a las que refuerza.

| Hasta la subsección | Se puede exigir |
| --- | --- |
| 01 | clase, `new`, `this`, propiedades públicas, opcionales (`?`) y `readonly` |
| 02 | además, propiedades de parámetro (`public`/`private` en el constructor) |
| 03 | además, propiedades privadas, métodos públicos, `static`, métodos privados opcionales |
| 04 | además, `extends`, `super(...)`, `super.metodo()`, `protected` |
| 05 | además, `get`/`set` |
| 06 | además, `abstract` |
| 07 | además, constructor `private` y Singleton |

Siempre disponibles: `type`, objetos, arrays, funciones y control de flujo básico.
Prohibidos en esta sección: interfaces, genéricos, decoradores, librerías y bases de datos.
Si un ejercicio no debe usar algo posterior (p. ej. accesores en el compendio 03), dilo en las
reglas comunes.

## 4. Plantilla del archivo

1. **Cabecera**: título, qué refuerzan los bloques A y B, lista de subsecciones, cómo
   trabajar cada ejercicio, vocabulario (oculto/visible/solo jerarquía) y reglas comunes.
   Para el bloque B, un recuadro que diga qué parte de cada ejercicio ejercita cada subsección.
2. **Ejercicios** con esta forma exacta:

```ts
// EJERCICIO NN — Título corto
/*
SITUACIÓN         2–3 frases: qué se modela y por qué cada clase tiene su papel.
QUÉ DEBES HACER   pasos numerados, en el orden en que se programa (ver sección 5).
COMPRUEBA         líneas console.log listas para copiar, con el resultado tras //.
ESTO DEBE FALLAR  líneas comentadas que TypeScript debe rechazar.
EXPLICA           1–2 preguntas concretas ligadas a una decisión del ejercicio.
*/
(() => {
    // Tu solución.
})();
```

Los comentarios no pueden contener `*/`. Cada ejercicio va en su propia función anónima
autoinvocada, para poder repetir nombres de clases entre ejercicios.

## 5. Cómo redactar «QUÉ DEBES HACER»

El criterio central: **un estudiante que solo tiene el enunciado debe saber qué escribir
primero, qué después y cuándo terminó.** Un enunciado que es una ficha técnica (tabla de
miembros y firmas) pero no dice qué hacer es incorrecto.

- **Pasos en orden de construcción**: primero la clase base y sus datos, luego sus
  métodos, luego la derivada, luego sus métodos, al final las instancias. Un paso = una
  acción («Crea…», «En X crea…», «Pasa… al padre»).
- **Cada paso nombra todo lo necesario**: clase, miembro, parámetros con tipo, retorno,
  visibilidad y de dónde sale cada dato. Los datos del constructor se enumeran en orden.
- **Lógica de un método en pasos a), b), c)**, con el orden de evaluación y cada
  límite con su valor: «5 o menos / más de 5», nunca «pocas páginas».
- **Qué NO hacer** cuando haya tentación evidente: no copiar una validación del padre, no
  restar tú si lo hace el padre, no guardar un dato derivado, no devolver el array interno.
- **Rechazos definidos**: `false`, `undefined` o `[]`; qué estado queda tras el rechazo.
- **Supuestos** («supón entero >= 0») separados de lo que el método debe validar.
- **Formatos de texto exactos** con `{llaves}`; números y reglas con su valor.
- **COMPRUEBA ejecutable**: cada línea es un `console.log` con el valor esperado. En una
  secuencia sobre la misma instancia, el orden de las líneas es el orden de ejecución y se
  indica el estado cuando cambie. Si una prueba exige instancia nueva, se ve en el código.
- **Segunda instancia** en los ejercicios de integración, para comprobar estado independiente.
- Sin verbos vagos (maneja, gestiona, procesa) ni frases como «los datos correctos».
- Prohibido repartir una regla entre tabla, reglas y pruebas: cada regla se escribe una
  sola vez, dentro del paso que la implementa.
- Si un array oculto coincide con un método público de la misma clase, avísalo en el paso.

**Prueba de lectura**: antes de entregar, lee solo QUÉ DEBES HACER de un ejercicio, sin las
pruebas. ¿Sabes qué teclear en cada paso? Si debes deducir algo, reescribe ese paso.

## 6. Dificultad y variedad

- Progresión: dentro de cada bloque, de menos a más condiciones, colecciones y clases.
- Bloque A: comienza con lo mínimo del concepto, incluye un caso donde `super.metodo()`
  evite duplicar lógica y otro con dos subclases o con un método `protected` que cambia estado.
- Bloque B: cubre variedad de lógica: tramos, estado con rechazo, colecciones, búsquedas,
  agrupación, intervalos y coordinación entre dos objetos.
- Una idea nueva por ejercicio; una regla de negocio por método.

## 7. Verificación obligatoria

Antes de entregar, comprueba cada ejercicio generado:

1. **Solución de referencia temporal**: escríbela en el directorio temporal de la sesión,
   nunca en `00.Ejercicios`. Ejecuta todas las filas de PRUEBAS y confirma que los
   resultados coinciden con el enunciado.
2. **Casos límite**: en cada condición, que haya al menos una prueba que dependa de ella
   (`<=` frente a `<`, orden de reglas, estado tras un rechazo).
3. **Errores de tipos**: confirma que cada línea de ERRORES DE TIPOS falla de verdad.
4. **Alcance**: la solución de referencia usa solo lo permitido por la sección 3.
5. **Compilación del archivo entregado**, desde la raíz del curso (`curso-typescript`):

```bash
./node_modules/.bin/tsc --noEmit --strict --ignoreConfig --exactOptionalPropertyTypes --noUncheckedIndexedAccess --target es2022 '08.Clases/00.Ejercicios/Compendio03.ts'
```

   Si hay un error en el código del alumno, repórtalo; no lo corrijas.
6. **Lectura final**: vuelve a leer el archivo completo, aplica la prueba de lectura de la
   sección 5 a cada ejercicio y busca contradicciones entre reglas comunes, pasos y
   COMPRUEBA.

## 8. Respuesta final

Enlaza los archivos modificados. Resume qué cambió, qué verificaste y qué errores del
código del alumno encontraste (sin haberlos tocado).
