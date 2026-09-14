
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
Para envolver una función, sigue estos pasos:
1. Selecciona con: shift+opt+W, y con las teclas envuelve.
2. Suelta el comando y ahora pon los parentesis de forma normal

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

## STRINGS O CADENAS DE TEXTO
`````
Hay más de tres formas de declarar un string:
1. 'Batman' ó "Linterna's Verde" ---> Comillas simples y normales
2. `Heroce volcan negro` ---> Backticks
#


Podemos pedir ciertos caracteres de un stringx
    console.log( batman.charAt(0) ); --> Pide el primer caracter
    console.log( batman[1] ); --> Pide el segundo caracter
    console.log( batman[batman.length - 1] ); -->Pide el último caracter

En caso de que queramos una posición que no exista dentro del string:
    
    const batman: string = 'Batman';
    console.log( batman[10].toLocaleUpperCase ); --> Esto dará error
    
#Agregamos un 'null check' para que no reviente:
    console.log( batman[10]?.toLocaleUpperCase );

#Podemos agregar una condición dentro del console.log:
    console.log( batman[10]?.toLocaleUpperCase || 'No está definido' );
`````

### NULLCHECK

````
Dependiendo de donde se coloque puede significar varias cosas
````

### ANY

`````
Este tipo de dato hay que usarlo lo menos posible. Debido al modo estricto de TS puede que ni siquiera podamos usarlo
`````
