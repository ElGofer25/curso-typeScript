//! Compendio 4 — TypeScript acumulativo

//! Ejercicio 2 — Datos fijos de usuario
/*

Dificultad: Básica

Representa mediante una tupla exactamente estos datos y en este orden:

nombre;
edad;
cuenta activa.

Utiliza los valores que quieras.

Condiciones
La estructura debe aceptar exactamente tres posiciones.
Los tipos deben estar declarados explícitamente.
No utilices array normal.
No utilices any.
*/
(()=>{
    let myTuple : [string, number, boolean] = ['Diego', 23, false];

})();

//! Ejercicio 3 — Función con una tupla
/*

Dificultad: Fácil

Crea una función que reciba una coordenada bidimensional y devuelva un texto mostrando sus dos valores.

La coordenada siempre contiene:

X numérica;
Y numérica.
Condiciones
El parámetro debe ser una tupla.
La función recibe un solo argumento.
El retorno es string.
No utilices objetos.
No utilices condicionales.

Objetivo: combinar funciones y tuplas sin introducir lógica nueva.
*/
(()=>{
    const functE3= (data:[number, number]):string => {
        return `${data}`
    }
    const values = functE3([5, 4])
})();
//! Ejercicio 4 — Lista de precios
/*

Dificultad: Fácil

Declara un array que contenga exactamente cinco precios.

Después crea una función que reciba un array de números y lo devuelva sin modificarlo.

Condiciones
El array debe estar tipado.
La función debe declarar explícitamente el tipo del parámetro.
La función debe declarar explícitamente el tipo de retorno.
No utilices métodos de array.
No recorras el array.
No utilices any.
*/
(()=>{
    //Se tiene que declarar el tipo de retorno como number[] porque devuelves un arreglo, no un solo numero.
    function myArray(numeros:number[]):number[]{
        return numeros
    }
    console.log(typeof myArray)

})();
//! Ejercicio 5 — Usuario con país predeterminado
/*

Dificultad: Fácil

Crea una función que reciba:

nombre obligatorio;
país.

El país debe tener exactamente este valor predeterminado:

"México"

La función debe devolver ambos datos como texto.

Pruebas obligatorias

Realiza dos llamadas:

una proporcionando solamente el nombre;
otra proporcionando nombre y "Japón".
Condiciones
El país debe ser un parámetro por defecto.
No utilices ?.
No utilices condicionales.
*/
(()=>{
    function thisO(name:string, pais:string='Mexico'):string{
        return `${name} ${pais}`
    }
    const nombre = thisO('Diego');
    const otroNombre = thisO('Diego', 'Japon')
})();

//! Ejercicio 6 — Apodo opcional
/*

Dificultad: Fácil

Crea una función que reciba:

    nombre obligatorio;
    apodo opcional.

Debe devolver ambos como texto.

Cuando no se proporcione el apodo, debe aparecer exactamente:

"Sin apodo"

Condiciones
El apodo debe utilizar ?.
No utilices un parámetro por defecto para el apodo.
Puedes utilizar ||.
No utilices if ni operador ternario.
Pruebas
Diego + Gofer
Diego sin apodo
*/
(()=>{
    function thisO(name:string, apodo?:string):string{
        return `${name} ${apodo || 'Sin apodo'}`
    }
    const prueba1 = thisO('Diego', 'Gofer')
    const prueba2 = thisO('Diego')
})();
//! Ejercicio 7 — Nombre variable
/*

Dificultad: Fácil–Medio

Crea una función para construir nombres.

Debe recibir:

un primer nombre obligatorio;
cero o más partes adicionales del nombre.

Las partes adicionales deben unirse utilizando un espacio.

Condiciones
    Utiliza Rest.
    El Rest debe contener strings.
    El Rest debe ser el último parámetro.
    Puedes utilizar join().
    El retorno debe ser string.
Pruebas

Realiza llamadas con:

solo un nombre;
nombre + un apellido;
nombre + dos apellidos.
*/
(()=>{
    function thisO(name:string, ...restArgs:string[]):string{
        return `${name} ${restArgs.join( '' )}`
    }
    const prueba1 = thisO('Diego')
    const prueba0 = thisO('Diego', 'cHAVEZ')
    const prueba2 = thisO('Diego', 'cHAVEZ', 'GARCIA')
})();




//! Ejercicio 11 — Contrato textual
/*

Dificultad: Medio

Crea dos funciones:

Función A

recibe un string;
devuelve un string.

Función B

recibe un number;
devuelve un number.

Declara una variable cuya firma requiera:

un parámetro string;
retorno string.
Condiciones
Prueba ambas asignaciones.
No utilices Function.
No cambies las funciones para hacerlas compatibles.
Explica por qué una es aceptada y la otra no.
*/
(()=>{
    function first(text:string):string{
        return `${text}`
    }
    function second(numero:number):number{
        return numero
    }
    let myvar : (param1:string) => string;

})();

