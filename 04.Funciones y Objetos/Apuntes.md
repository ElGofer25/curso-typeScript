# SECCIÓN 4: FUNCIONES Y OBJETOS

## 1. FUNCIONES
````
Una función es un bloque de código reutilizable que realiza una tarea específica.

En TypeScript puede:

Recibir datos mediante parámetros.
Ejecutar una serie de instrucciones.
Devolver un resultado con return, o no devolver nada.

Ejemplo:

function sum(a: number, b: number): number {
  return a + b;
}


Cuando declaremos una función hay que específicar el tipo de dato de retorno:
    En este ejemplo no se declara aún el tipo de dato de retorno:
         function returnName(){

            return hero;
         }
    Aquí ya tenemos el tipo de dato de retorno:

        function returnName(): string{

        }


````
