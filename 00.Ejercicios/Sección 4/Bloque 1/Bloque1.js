"use strict";
//Ejercicio 1 — Saludo reutilizable
/*

Dificultad: Básica

Crea una función que reciba el nombre de una persona y produzca un saludo que incluya dicho nombre.

Condiciones
Debe recibir exactamente un argumento.
El argumento debe ser texto.
Debe devolver texto.
Utiliza una función tradicional.
Declara explícitamente el tipo del parámetro y del retorno.
Casos de prueba
Diego → Hola Diego
Melissa → Hola Melissa
Tony → Hola Tony

Objetivo: parámetros obligatorios y tipo de retorno.
*/
(() => {
    // Función tradicional
    function saludos(nombre) {
        return `Hola, ${nombre}`;
    }
    const name = saludos('Rudeus');
    // Función de flecha
    const greetings = (name, message) => {
        return `Hola ${name} ${message}`;
    };
    const fullGreetings = greetings('Diego', 'Cómo estás?');
    console.log(fullGreetings);
})();
//Ejercicio 2 — Operación matemática
/*
Dificultad: Básica

Crea una función que reciba dos números y devuelva el resultado de multiplicarlos.

Condiciones
Ambos argumentos son obligatorios.
Ambos deben ser numéricos.
El retorno debe ser numérico.
Utiliza una función flecha.
No utilices forma abreviada todavía.
Casos de prueba
5 y 4 → 20
10 y 0 → 0
2.5 y 4 → 10
-3 y 5 → -15

Objetivo: comparar la sintaxis de una función tradicional con una función flecha.

Ejercicio 3 — Función sin retorno

Dificultad: Básica

Crea una función que reciba un mensaje de texto y lo muestre en consola.

Condiciones
Debe recibir exactamente un argumento.
Debe terminar normalmente.
No debe devolver información al código que la llamó.
Declara explícitamente su tipo de retorno.
Pregunta adicional

Explica por qué el tipo de retorno que elegiste es adecuado.

Objetivo: reforzar void.

Ejercicio 4 — Argumentos obligatorios

Dificultad: Básica

Crea una función que genere el nombre completo de una persona utilizando:

nombre;
primer apellido.

Ambos datos deben ser obligatorios.

Condiciones
Ambos parámetros deben ser texto.
La función debe retornar texto.
Respeta el orden de los parámetros.
Casos de prueba
Diego + Chávez → Diego Chávez
Tony + Stark → Tony Stark
Bruce + Wayne → Bruce Wayne
Preguntas
¿Qué debería ocurrir si llamas a la función solamente con el nombre?
¿Qué debería ocurrir si proporcionas un número como apellido?
¿Por qué importa el orden de los argumentos?

Objetivo: entender el contrato de una función.

Ejercicio 5 — Parámetro opcional

Dificultad: Fácil

Crea una función que reciba:

nombre obligatorio;
segundo nombre opcional.

Debe devolver ambos como un único texto.

Cuando no exista segundo nombre, el resultado debe indicar que no fue proporcionado.

Condiciones
No utilices parámetros por defecto.
Debes utilizar un parámetro opcional.
El parámetro opcional debe estar después del obligatorio.
El retorno debe ser texto.
Casos de prueba

Con segundo nombre:

Diego + Alejandro → debe incluir ambos.

Sin segundo nombre:

Diego → debe indicar que no existe segundo nombre.

Objetivo: familiarizarte con ? y con el hecho de que un argumento opcional puede ser undefined.

Ejercicio 6 — ¿Obligatorio u opcional?

Dificultad: Fácil

No necesitas programar.

Para cada situación, decide si el parámetro debería ser obligatorio u opcional y justifica tu respuesta.

Nombre de usuario al crear una cuenta.
Segundo apellido.
Correo electrónico necesario para iniciar sesión.
Número telefónico alternativo.
Nombre de un producto que se desea registrar.
Descripción adicional de un producto.

Objetivo: no limitarte a aprender la sintaxis de ?, sino entender cuándo tiene sentido utilizarla.

Ejercicio 7 — Parámetro por defecto

Dificultad: Fácil

Crea una función que reciba:

nombre de usuario;
idioma preferido.

El idioma debe tener un valor predeterminado.

Si solamente se proporciona el nombre, la función debe utilizar automáticamente ese idioma.

Condiciones
El nombre es obligatorio.
El idioma utiliza un parámetro por defecto.
No utilices un parámetro opcional para el idioma.
La función devuelve texto.
Casos
Solo nombre → utiliza el idioma predeterminado.
Nombre + otro idioma → utiliza el idioma proporcionado.
Pregunta

Explica por qué no necesitas colocar ? en el parámetro que ya tiene un valor por defecto.

Ejercicio 8 — Opcional y valor por defecto juntos

Dificultad: Fácil–Medio

Crea una función que construya información sobre un usuario mediante:

nombre obligatorio;
segundo nombre opcional;
país con valor predeterminado.

La función debe devolver una cadena con esos datos.

Condiciones
Respeta el orden apropiado de los parámetros.
No utilices objetos.
No utilices condicionales.
No utilices ciclos.
El segundo nombre debe ser realmente opcional.
El país debe utilizar un valor por defecto.
Casos a probar

Prueba una llamada:

proporcionando todos los datos;
omitiendo únicamente el país;
omitiendo segundo nombre y país.

Objetivo: diferenciar claramente parámetro opcional y parámetro por defecto.

Ejercicio 9 — Rest parameters

Dificultad: Medio

Crea una función que permita formar un nombre completo.

El primer nombre debe ser obligatorio, pero después debe poder recibir cero o más partes adicionales del nombre.

Ejemplos conceptuales:

un solo nombre;
nombre + apellido;
nombre + dos apellidos;
nombre + varios nombres y apellidos.
Condiciones
Debe existir exactamente un parámetro obligatorio antes del Rest.
Utiliza un Rest parameter para los demás textos.
El parámetro Rest debe ser el último.
El retorno debe ser texto.
Puedes utilizar join() para unir los elementos recibidos por Rest.
Preguntas
¿Qué tipo de estructura representa internamente el parámetro Rest?
¿Puede recibir cero argumentos adicionales?
¿Puede colocarse otro parámetro después del Rest?

Objetivo: entender qué ocurre con los argumentos variádicos.

Ejercicio 10 — ¿Rest o parámetro normal?

Dificultad: Medio

No necesitas escribir código.

Decide qué estrategia utilizarías en cada situación:

parámetros normales, parámetro opcional, parámetro por defecto o Rest.

Una suma que siempre recibe exactamente dos números.
Un nombre que puede tener o no segundo apellido.
Una lista de etiquetas cuya cantidad es desconocida.
Una configuración donde el idioma normalmente será español.
Una función que requiere nombre y contraseña obligatoriamente.
Una función que recibe un título y después cualquier cantidad de palabras adicionales.

Justifica cada respuesta.

Objetivo: elegir conscientemente qué tipo de parámetro necesitas.

Ejercicio 11 — Función flecha abreviada

Dificultad: Fácil

Crea una función flecha que reciba dos números y devuelva su suma.

Condiciones
Debe utilizar la forma abreviada.
No debe contener llaves.
No debe escribir explícitamente return.
Los parámetros deben estar tipados.
El retorno debe estar tipado.
Casos
5 y 8 → 13
-2 y 3 → 1
4.5 y 1.5 → 6
Pregunta

Explica por qué el valor se devuelve aunque no hayas escrito explícitamente return.

Ejercicio 12 — ¿Forma normal o abreviada?

Dificultad: Fácil–Medio

No escribas código.

Indica si cada función podría escribirse razonablemente mediante una función flecha abreviada.

Devuelve la suma de dos números.
Devuelve un saludo.
Ejecuta varias instrucciones antes de producir un resultado.
Devuelve directamente un texto fijo.
Realiza varias operaciones independientes antes de terminar.

No necesitas conocer todavía cómo implementar los casos complejos.

Lo importante es identificar cuándo una función contiene una sola expresión.

Ejercicio 13 — Variable que almacena funciones

Dificultad: Medio

Crea tres funciones independientes:

una que opere con dos números;
una que genere un saludo;
una que devuelva un texto fijo sin necesitar argumentos.

Después declara una variable utilizando el tipo general Function y asígnale, una por una, las tres funciones.

Condiciones
La variable solamente debe poder almacenar funciones.
No utilices todavía una firma específica.
Intenta asignar también un número a esa variable y observa qué informa TypeScript.
Preguntas
¿Por qué Function permite almacenar las tres funciones aunque sean muy diferentes?
¿Qué información no está controlando TypeScript al utilizar simplemente Function?

Objetivo: entender el problema del tipo general Function.

Ejercicio 14 — Firma numérica

Dificultad: Medio

Tienes varias funciones diferentes.

Necesitas declarar una variable que solo pueda almacenar funciones que:

reciban exactamente dos números;
produzcan un número.

Después intenta asignarle:

una función que suma dos números;
una función que multiplica dos números;
una función que recibe un string;
una función sin argumentos que devuelve texto.
Condiciones
No utilices el tipo general Function.
Debes declarar una firma específica.
Antes de ejecutar el código, predice qué asignaciones aceptará TypeScript.
Objetivo

Entender que una firma funciona como un contrato para funciones.

Ejercicio 15 — Firma textual

Dificultad: Medio

Declara una variable destinada exclusivamente a almacenar funciones que:

reciban dos textos;
devuelvan un texto.

Crea al menos dos funciones compatibles con dicha firma y una incompatible.

Condiciones
La incompatibilidad debe deberse al tipo de parámetros o al tipo de retorno.
No utilices Function.
Explica por qué TypeScript acepta unas y rechaza la otra.

Objetivo: reforzar que una firma controla entrada y salida.

Ejercicio 16 — Analizando firmas

Dificultad: Medio

No escribas código.

Imagina estas cuatro funciones:

Función A

recibe dos números;
devuelve un número.

Función B

recibe dos números;
devuelve texto.

Función C

recibe dos textos;
devuelve texto.

Función D

recibe dos números;
devuelve un número.

Se tiene una variable cuya firma exige:

dos números de entrada;
un número de salida.

Responde:

¿Qué funciones pueden almacenarse en esa variable?
¿Cuáles no?
Para cada rechazo, explica exactamente qué parte del contrato se incumple.

Objetivo: comprobar comprensión antes de depender del compilador.

Ejercicio 17 — Diseña el contrato

Dificultad: Medio

Necesitas una variable que pueda almacenar una función destinada a calcular precios.

La función siempre debe:

recibir un precio base;
recibir una cantidad;
devolver un número.

Tu tarea es:

crear dos funciones compatibles;
crear una función incompatible;
declarar una variable con la firma adecuada;
probar las asignaciones.
Restricciones
No utilices objetos.
No utilices condicionales.
No utilices ciclos.
No utilices Function.
Solo utiliza funciones, parámetros, operadores básicos y tipos que ya estudiaste.
Ejercicio 18 — Integración final

Dificultad: Medio

Construye un pequeño conjunto de funciones relacionadas con usuarios.

Necesitarás:

una función que reciba dos partes obligatorias de un nombre;
una función que reciba un nombre y una parte adicional opcional;
una función que reciba un nombre y un país con valor predeterminado;
una función que reciba un nombre y cualquier cantidad de apellidos mediante Rest;
una función flecha abreviada;
una variable con tipo Function;
una variable con una firma específica para funciones de texto.
Condiciones
No utilices objetos.
No utilices if, switch ni operadores ternarios.
No utilices for, while ni otros ciclos.
No utilices clases.
No utilices interfaces.
No utilices generics.
Todas las funciones deben declarar apropiadamente sus parámetros y retornos.

Objetivo: integrar exclusivamente los conceptos de tu sección de funciones.


*/ 
//# sourceMappingURL=Bloque1.js.map