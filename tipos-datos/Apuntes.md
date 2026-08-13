
# Sección 3: Tipos Básicos
Hay dos tipos de datos: primitivos y compuestos (objetos). Hay más, pero en esencia estos son los principales.

## ---> Primitivos
1. String
2. Number
3. Boolean: true, false, null o undefined
4. Symbol: sym = Symbol() | sym2= mSymbol('myProperty')

## ---> Compuestos
1. Objetos literales: también puede ser llamado como diccionario. Este tipo agrupa los datos en pares.
            person = {
                name: 'Diego',
                age: 23 
            }

2. Clases
        class Person {      --> El inconveniente aquí es que
            name;               no sabemos como luce el nombre ni la edad
            age;
        }

3. Funciones
4. Arreglos



## Ventajas de TypeScript
1. Nos permite crear nuevos tipos
2. Nos permite manejar interfaces
3. Da mucha flexibilidad
4. Detección de errores en tiempo real


## Inferir tipos y modo estricto

const a: 10; Los dos puntos infieren el tipo de dato
Typescript infiere de forma automática el tipo de dato

-> const a = 3; Esta variable nunca podrá cambiar su valor porque
                nosotros estamos indicando que su valor siempre
                será constante

--> let b = 4; Esta variable si podrá cambiar su valor

Lo recomendable es darle a typescript de forma directa el tipo de dato en lugar de permitirle inferir el tipo de dato
por ejemplo:

        const a: number = 10;
        let b: number = 12;

        Otro caso: 
            const c: number;
            let d;              ---> Esto arrojará un 'any' (significa cualquier cosa)
                                    perdemos control y d podrá tomar cualquier valor
                                    Lo podemos resolver dandole el tipo de dato
            c = 3.141516;
            d = {}              ---> 'd' igual a un array

En Javascript esto está bien:
        funcion sayHello( msg){
            console.log(msg);
        }

Pero en Typescript arrojara un warning porque no estamos infiriendo el tipo de dato de msg. Aunque no está mal, podemos cambiarlo en la configuración, dentro del .ts

Es una buena práctica asignar el tipo de dato, así le decimos a la función que dato recibe y que dato arroja.

## === BOOLEANOS ===

### === TIP PARA ENVOLVER ===:
```
Para crear la función auto-invocada y envolverla en paréntesis
presiona estos tres: W+shift+option
Esto envuelve la función en el parentesis sin necesidad de borrar o mover

```
## DATOS BOOLEANOS

```
Typescript puede asignar cuatro valores de datos al tipo bool:
    1. True
    2. False
    3. Undefined
    4. Null

Además, recuerda que es buena práctica ahorrarle tiempo a TS en el sentido de que le facilites las cosas. Por ejemplo:

        let isSuperman: boolean = true;
        let isBatman: boolean = false;

        Esto es una buena práctica porque no dejamos que TS infiera por sí mismo el tipo de dato asignado a cada variable, sino que nosotros mismos declaramos en un inicio el tipo de dato.
```

### TIP:
````
Para poder imprimir el nombre de la variable más su valor, envolvemos el parámetro asignado al log entre llaves:
            
            console.log({isSuperman, isBatman});
    
    Esa línea ahora imprime:

            isBatman: false
            isSuperman: true
````

## NUMBERS
````
NaN ---> es considerado como un número en typescript pero no es un número como  
         lo conocemos, si no que puede ser '55A'


````

