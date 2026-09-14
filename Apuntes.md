### Es necesario generar el archivo .JS

Para indicarle a TS que lo genere, seguimos:
1. En la terminal, ubicate en la carpeta correspondiente
2. Ejecuta tsc app
    --> Este comando le dice a TS 'compilame este archivo'

Nos genera casí el mismo código.
Nosotros escribimos código en TS, después se traduce a JS. El código JS es usualmente el que se ejecuta en el navegador web.

Al crear el '.js' TS nos marcará error por la declaración de variables porque infiere que van a chocar. Ignoralo de momento.

---
# TSC CONFIG.JSON 

1. Abre la terminal, en bases.
2. Ejecuta: tsc --init
    --> Va a crearnos un archivo llamado 'tsconfig.json'

Ese archivo es la configuración de TypeScript.

# Genera el JS de los .ts 
En el caso de que tengamos muchos archivos .ts podemos crear sus respectivos .js al ejecutar en terminal 'tsc'.
--> Esto solo se puede si ya hemos creado el config

# WATCH MODE
Para evitar compilar cada que hacemos un cambio podemos reducir el proceso al ejecutar el 'modo observador' que detecta cualquier cambio y ejecuta la compilación en automático

--> tsc --watch ó tsc -w

En caso de que TS no esté instalado de forma global, puedes usar:
        npx tsc -w

---
### Sección 3: Tipos Básicos ###
Hay dos tipos de datos: primitivos y compuestos (objetos). Hay más, pero en esencia estos son los principales.

---> Primitivos
1. String
2. Number
3. Boolean: true, false, null o undefined
4. Symbol: sym = Symbol() | sym2= mSymbol('myProperty')

---> Compuestos
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


--- 
# Ventajas de TypeScript #
1. Nos permite crear nuevos tipos
2. Nos permite manejar interfaces
3. Da mucha flexibilidad
4. Detección de errores en tiempo real


# Inferir tipos y modo estricto

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

 
