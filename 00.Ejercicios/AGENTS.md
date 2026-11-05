# Instrucciones para generar ejercicios

Estas instrucciones aplican a los ejercicios de esta carpeta y sus subcarpetas.
El usuario indicará el tema o la sección del curso cuando solicite un bloque nuevo.
Sus instrucciones específicas tienen prioridad sobre estos valores por defecto.

## Alcance y preparación

- Antes de redactar, revisa los apuntes y ejemplos del repositorio correspondientes
  al tema solicitado y a las secciones anteriores. Usa el orden real del curso
  para determinar qué conocimientos ya se han visto.
- Centra los ejercicios en el tema indicado e integra conocimientos de secciones
  anteriores. No exijas temas de secciones posteriores, aunque existan en el
  repositorio o el usuario tenga abiertos archivos de esas secciones.
- Genera diez ejercicios por bloque, salvo que el usuario pida otra cantidad.
- Organiza una progresión de dificultad: comienza con problemas acotados y
  termina con problemas que combinen varios conocimientos permitidos.

## Diseño de los ejercicios

- Cada ejercicio debe requerir lógica de programación: decisiones, validaciones,
  cálculos, búsquedas, recorridos, acumulación o cambios de estado, según el tema.
  No basta con copiar sintaxis, declarar estructuras o reproducir un ejemplo.
- Usa problemas variados y concretos. Evita repetir el mismo problema cambiando
  únicamente nombres o datos.
- Escribe en español con instrucciones puntuales, específicas y claras.
- Incluye en cada ejercicio:
  1. Número, título y objetivo de aprendizaje.
  2. Requisitos numerados que definan qué implementar.
  3. Entradas, tipos y salidas o retornos esperados, cuando corresponda.
  4. Reglas de validación, límites y comportamiento ante entradas inválidas.
  5. Casos de comprobación con datos concretos y resultados esperados.
  6. Un espacio identificado para que el usuario escriba su solución.
- Define los detalles que puedan producir interpretaciones distintas: límites
  inclusivos o exclusivos, orden de operaciones, empates, duplicados, colecciones
  vacías y conservación del estado cuando una operación falla, según corresponda.
- Explicita las suposiciones sobre las entradas. No agregues validaciones ajenas
  al objetivo si basta con delimitar claramente los datos admitidos.
- Incluye casos normales y casos límite o inválidos pertinentes. Si las llamadas
  dependen del estado previo, indica el orden de ejecución.
- Proporciona resultados para que el usuario pueda comprobar su trabajo, sin
  incluir soluciones completas ni revelar paso a paso el algoritmo, salvo que
  lo solicite expresamente.
- Evita dependencias externas, servicios o herramientas adicionales si no forman
  parte del tema solicitado o de los conocimientos previos del curso.

## Ubicación y formato

- Guarda el bloque en la ruta indicada por el usuario dentro de `00.Ejercicios`.
- Revisa la estructura existente antes de crear archivos. Si el usuario tiene
  preparado un archivo para ese bloque, úsalo sin borrar soluciones o contenido
  ajeno a la solicitud.
- Si no se indica una ruta exacta, sigue la organización y numeración existentes
  para el tema; crea el siguiente bloque disponible sin sobrescribir anteriores.
- En archivos TypeScript, presenta los enunciados como comentarios y deja espacios
  separados para resolverlos. El contenido añadido no debe introducir errores de
  sintaxis ni exigir conceptos posteriores solo para organizar el archivo.
- Incluye al principio el alcance del bloque y las instrucciones comunes, evitando
  repetirlas innecesariamente en cada ejercicio.

## Revisión obligatoria antes de terminar

Una vez escrito el compendio, vuelve a leer el archivo guardado y comprueba:

1. Que contiene exactamente la cantidad solicitada, con numeración consistente.
2. Que todos los ejercicios se centran en el tema indicado, requieren lógica y
   solo exigen conocimientos del tema o de secciones anteriores.
3. Que las instrucciones, tipos, validaciones y resultados son coherentes y no
   dejan decisiones esenciales sin definir.
4. Que los resultados esperados son correctos; recalcula los ejemplos y revisa
   las secuencias que modifican estado.
5. Que la dificultad progresa, los problemas son variados y cada uno tiene espacio
   para su solución.
6. Que se respetó la ruta solicitada y se conservó el trabajo existente del usuario.

Si detectas incumplimientos, corrígelos y revisa de nuevo las partes afectadas
antes de dar el trabajo por terminado. En la respuesta final, enlaza el archivo
creado o actualizado y resume brevemente lo agregado y lo verificado.
