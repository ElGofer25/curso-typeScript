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

No debe confundirse con `for...in`: este último recorre claves o índices, no los
valores directamente.

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
Para reconocer un array se utiliza `Array.isArray()`.

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

`constructor` inicializa cada instancia, `this` hace referencia a la instancia
actual y `new` crea un objeto a partir de la clase.

## Resumen

- Se prefiere `const`; se utiliza `let` cuando habrá reasignación y se evita `var`.
- La desestructuración extrae valores de objetos y arrays.
- Rest (`...`) agrupa los valores restantes.
- `for...of` recorre valores de elementos iterables.
- `typeof` ayuda a comprobar tipos durante la ejecución.
- Las clases agrupan el estado y el comportamiento de los objetos.
