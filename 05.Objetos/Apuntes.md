# SECCIÓN 5: OBJETOS

## 1. Objetos básicos

Un objeto agrupa datos relacionados mediante propiedades. En TypeScript podemos
declarar directamente la forma que debe tener:

```ts
let flash: {
    name: string;
    age: number;
    powers: string[];
} = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo']
};
```

El tipado define un contrato: deben existir las propiedades obligatorias y sus
valores deben coincidir con los tipos indicados. Al reasignar el objeto se debe
respetar la misma estructura.

## 2. Métodos y propiedades opcionales

Los objetos también pueden almacenar funciones, llamadas métodos. Su firma
indica los parámetros que reciben y el tipo que devuelven:

```ts
let hero: {
    name: string;
    getName?: () => string;
} = {
    name: 'Clark Kent',
    getName() {
        return this.name;
    }
};
```

En `getName?: () => string`:

    - `?` indica que la propiedad es opcional.
    - `()` indica que no recibe argumentos.
    - `string` es su tipo de retorno.
    - `this.name` accede a otra propiedad del mismo objeto.

## 3. Tipos personalizados

Cuando varios objetos comparten la misma estructura, conviene crear un alias con
`type` para evitar repetir el contrato:

```ts
type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName: () => string;
};

const flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super velocidad'],
    getName() {
        return this.name;
    }
};
```

`type` solamente existe durante la comprobación de TypeScript; no crea un objeto
ni aparece en el JavaScript generado. En este ejemplo, `age` es opcional, pero
`name`, `powers` y `getName` son obligatorios.

## 4. Múltiples tipos

Una unión permite que una variable acepte valores de varios tipos. Se escribe con
el operador `|`:

```ts
let myVar: string | number | Hero = 'Diego';

myVar = 23;
myVar = flash;
```

La variable solo puede recibir alguno de los tipos declarados. Antes de usar
propiedades específicas es necesario comprobar qué tipo contiene actualmente:

```ts
if (typeof myVar === 'object') {
    console.log(myVar.name);
}
```

Los paréntesis en `(string | number | Hero)` son válidos, pero en este caso no
son necesarios porque `string | number | Hero` significa lo mismo.

## Resumen

- El tipo de un objeto describe sus propiedades, métodos y tipos de datos.
- `?` convierte una propiedad en opcional.
- Una firma como `() => string` describe un método sin argumentos que devuelve texto.
- `type` permite reutilizar una estructura en varios objetos.
- `|` crea una unión de tipos y limita los valores permitidos.
