# SECCIÓN 7: ES6 / ECMASCRIPT 2015

## 1. ECMAScript y variables

ECMAScript es el estándar que define el lenguaje JavaScript. ES6, publicado en
2015, incorporó características como `let`, `const`, desestructuración, clases y
el ciclo `for...of`.

En código moderno se evita `var` porque tiene alcance de función y permite
redeclaraciones que pueden producir errores. Se recomienda:

- `const` cuando no se reasignará la variable.
- `let` cuando su valor tendrá que cambiar.

```ts
const hero = { name: 'Flash', age: 24 };
hero.age = 25; // Correcto

let active = true;
active = false; // Correcto
```

`const` impide reasignar la variable, pero no vuelve inmutable el contenido de un
objeto o array.

## 2. Desestructuración de objetos

La desestructuración extrae propiedades y las guarda en variables:

```ts
const avenger = {
  name: 'Ironman',
  power: 1500,
  active: true
};

const { name, power } = avenger;
```

También puede utilizarse directamente en los parámetros de una función. El
operador Rest reúne las propiedades restantes en un objeto nuevo:

```ts
type Avenger = typeof avenger;

const printAvenger = ({ name, ...rest }: Avenger): void => {
  console.log(name, rest);
};
```

Cuando Rest se utiliza al desestructurar un objeto, la variable que aparece
después de los tres puntos también se guarda como un objeto:

```ts
const user = {
  nombre: 'Bruce',
  edad: 35,
  pais: 'USA',
  correo: 'bruce@example.com',
  activo: true
};

const { nombre, correo, ...resto } = user;

console.log(nombre); // "Bruce"
console.log(correo); // "bruce@example.com"
console.log(resto);  // { edad: 35, pais: "USA", activo: true }
console.log(typeof resto); // "object"
```

En este ejemplo, `nombre` y `correo` se extraen en variables independientes.
`...resto` reúne automáticamente todas las propiedades que no se extrajeron y
crea con ellas un objeto nuevo. Es una copia superficial: si alguna propiedad
contiene otro objeto o array, ese valor interno conserva la misma referencia.

## 3. Desestructuración de arrays

En los arrays se utilizan corchetes y cada variable corresponde a una posición:

```ts
const heroes = ['Ironman', 'Spiderman', 'Hulk'];
const [first, second] = heroes;
```

Una coma permite saltar posiciones:

```ts
const [, spiderman] = heroes;
```

La desestructuración de objetos depende del nombre de la propiedad; la de arrays
depende del orden de los elementos.

## 4. Ciclo `for...of`

  `for...of` recorre directamente los valores de un iterable, como un array:

  ```ts
  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }
  ```
### ¿Qué es un `iterable`?

Un iterable es un valor cuyos `elementos se pueden recorrer uno por uno`, por ejemplo, usando for...of.
Los arrays y los strings son iterables:

      ```ts
      const lenguajes = ['TypeScript', 'Python', 'C#'];
      for (const lenguaje of lenguajes) {
          console.log(lenguaje);
      }
      // TypeScript
      // Python
      // C#
      ```
Un string permite recorrer sus caracteres:

      ```ts
      for (const letra of 'Hola') {
          console.log(letra);
      }
      // H
      // o
      // l
      // a
      ```
Un objeto común no es iterable por defecto, aunque tenga varias propiedades:

      ```ts
      const persona = {
          nombre: 'Diego',
          edad: 23
      };

      // Esto produce un error:
      // for (const elemento of persona) { ... }
      ```


No debe confundirse con `for...in`: este último recorre claves o índices, no los
valores directamente.

### Ciclo `for...in`

`for...in` recorre los nombres de las propiedades enumerables de un objeto.
En cada vuelta, la variable recibe una clave de tipo `string`, no su valor:

      ```ts
      const persona = { nombre: 'Diego', edad: 23, trabaja: true };

      for (const clave in persona) {
        console.log(clave);
      }
      // "nombre", "edad", "trabaja"
      ```

El nombre `clave` lo eliges tú: también podría ser `propiedad` o `key`.
Para obtener el valor se utilizan corchetes: `objeto[clave]`.

      ```ts
      const puntuaciones: Record<string, number> = {
        Diego: 90,
        Ana: 100,
        Luis: 85
      };

      for (const nombre in puntuaciones) {
        console.log(nombre, puntuaciones[nombre]);
      }
      // Diego 90
      // Ana 100
      // Luis 85
      ```

`Record<string, number>` describe un objeto con claves de tipo `string` y valores
de tipo `number`. `puntuaciones[nombre]` utiliza el contenido de la variable;
`puntuaciones.nombre` buscaría una propiedad llamada literalmente `"nombre"`.

En un objeto con propiedades específicas, como `persona`, TypeScript puede
rechazar `persona[clave]`: `clave` se considera `string` y necesita comprobarse
que corresponde a una de las propiedades del objeto. `for...in` no la convierte
automáticamente en una unión de sus claves.

El ciclo también puede recorrer propiedades enumerables heredadas. Para limitar
el recorrido a las propiedades del propio objeto, utiliza `Object.hasOwn()`
(disponible desde ES2022):

      ```ts
      for (const nombre in puntuaciones) {
        if (Object.hasOwn(puntuaciones, nombre)) {
          console.log(nombre, puntuaciones[nombre]);
        }
      }
      ```

### Diferencias entre `for...in` y `for...of`

      ```ts
      const lenguajes = ['TypeScript', 'Python', 'C#'];

      for (const indice in lenguajes) {
        console.log(indice); // "0", "1", "2": strings
      }

      for (const lenguaje of lenguajes) {
        console.log(lenguaje); // "TypeScript", "Python", "C#"
      }
      ```

| Característica | `for...in` | `for...of` |
| --- | --- | --- |
| Qué recibe en cada vuelta | Clave de una propiedad | Valor de un elemento |
| En un array | Índices como strings; también puede incluir otras propiedades enumerables | Elementos del array |
| Uso habitual | Recorrer propiedades de objetos | Recorrer arrays, strings y otros iterables |
| Objeto común | Funciona directamente | Necesita ser iterable; un objeto común no lo es |

Para recorrer los elementos de un array, utiliza normalmente `for...of`.
Recuerda: **`in` te da las claves; `of` te da los valores del iterable**.
Aunque se comparen en esta sección, `for...in` ya existía antes de ES6.

## 5. Operador `typeof`

`typeof` permite consultar el tipo de un valor durante la ejecución:

```ts
typeof 'Flash'; // "string"
typeof 24;      // "number"
typeof true;    // "boolean"
```

Es útil para estrechar una unión antes de operar con ella:

      ```ts
      function printValue(value: string | number): void {
        if (typeof value === 'string') {
          console.log(value.toUpperCase());
        }
      }
      ```

Los arrays y `null` requieren cuidado: `typeof` devuelve `"object"` para ambos.
También devuelve `"object"` para los objetos comunes, por lo que `typeof` por sí
solo no permite distinguir un array de un objeto común.

Para reconocer un array se utiliza **`Array.isArray(valor)`**: devuelve `true`
si el valor es un array y `false` si no lo es.

```ts
Array.isArray(['Diego', 'Mario']); // true
Array.isArray({ nombre: 'Diego' }); // false
Array.isArray(null); // false
```

## 6. Clases en ES6

Una clase es una plantilla para crear objetos con propiedades y métodos:

      ```ts
      class Hero {
        constructor(
          public name: string,
          public power: string
        ) {}

        describe(): string {
          return `${this.name}: ${this.power}`;
        }
      }

      const flash = new Hero('Flash', 'Super velocidad');
      ```
### ¿Qué es un `Constructor`?

Un constructor es un método especial de una clase que se ejecuta automáticamente al crear una instancia con new. Sirve para inicializar las propiedades del nuevo objeto.

En su declaración, los paréntesis y las llaves cumplen funciones distintas:

- **Paréntesis `()`**: declaran los parámetros, es decir, qué datos recibe.
- **Llaves `{}`**: delimitan su cuerpo, es decir, las instrucciones que ejecuta
  al crear la instancia y qué hace con los datos recibidos.

```ts
constructor(/* parámetros que recibe */) {
  // Instrucciones para inicializar el objeto.
}
```

Las llaves son necesarias aunque el cuerpo esté vacío: `constructor() {}` es
válido, pero no recibe parámetros ni contiene instrucciones explícitas.
En el ejemplo de `Hero`, los parámetros con `public` crean e inicializan
automáticamente las propiedades, por eso su cuerpo puede estar vacío.

`constructor` inicializa cada instancia, `this` hace referencia a la instancia
actual y `new` crea un objeto a partir de la clase.

## Resumen

- Se prefiere `const`; se utiliza `let` cuando habrá reasignación y se evita `var`.
- La desestructuración extrae valores de objetos y arrays.
- Rest (`...`) agrupa los valores restantes.
- `for...of` recorre valores de elementos iterables.
- `for...in` recorre claves de propiedades enumerables, incluidas las heredadas.
- `typeof` ayuda a comprobar tipos durante la ejecución.
- Las clases agrupan el estado y el comportamiento de los objetos.
