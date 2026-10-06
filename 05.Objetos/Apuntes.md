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
valores deben coincidir con los tipos indicados. Al reasignar el objeto se debe respetar la misma estructura.

## 2. Métodos y propiedades opcionales

Dentro de un objeto podemos definir propiedades y métodos:

- Las **propiedades** almacenan datos.
- Los **métodos** son funciones asociadas al objeto y representan acciones.

```ts
const account = {
    owner: 'Tony',       // Propiedad
    balance: 8500,       // Propiedad

    checkBalance(): string { // Método
        return `${this.owner} tiene un saldo de ${this.balance}`;
    }
};
```

Una función independiente no es un método:

```ts
function greet(): string {
    return 'Hola';
}
```

Cuando la función pertenece a un objeto y se invoca a través de él, se considera
un método:

```ts
account.checkBalance();
```

También se puede guardar una función como el valor de una propiedad. Al
ejecutarla a través del objeto, se comporta como un método:

```ts
const person = {
    greet: function (): string {
        return 'Hola';
    }
};

person.greet();
```

### Uso de `this`

`this` no es un método. Es una palabra clave que, en este caso, hace referencia
al objeto que está ejecutando el método. Permite usar sus propiedades sin
escribir directamente el nombre del objeto:

```ts
const account = {
    owner: 'Tony',
    balance: 8500,

    checkBalance(): string {
        return `${this.owner} tiene un saldo de ${this.balance}`;
    }
};

console.log(account.checkBalance());
// Tony tiene un saldo de 8500
```

Cuando se ejecuta `account.checkBalance()`, ocurre conceptualmente lo siguiente:

```text
this              → account
this.owner        → account.owner   → 'Tony'
this.balance      → account.balance → 8500
```

Una forma sencilla de recordarlo es:

> `this` significa "este objeto que está ejecutando el método".

`this` puede utilizarse en cualquier parte del método, no solamente en su
retorno. También puede modificar las propiedades del objeto:

```ts
const account = {
    balance: 100,

    deposit(amount: number): void {
        this.balance = this.balance + amount;
    }
};

account.deposit(50);
console.log(account.balance); // 150
```

El objeto situado antes del punto determina normalmente a qué objeto hace
referencia `this`:

```ts
object.method();
// `this` será `object` dentro de `method`.
```

La firma de un método indica los parámetros que recibe y el tipo que devuelve:

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

La estructura general para declarar propiedades dentro de un `type` es:

```ts
type TypeName = {
    property: DataType;
};
```

Por ejemplo, podemos definir el contrato de un desarrollador y usarlo después
para declarar diferentes objetos:

```ts
type Developer = {
    name: string;
    age: number;
    currentlyWorking: boolean;
    languages: string[];
};

const developer: Developer = {
    name: 'Diego',
    age: 23,
    currentlyWorking: true,
    languages: ['TypeScript', 'Python', 'C#']
};
```

`Developer` funciona como un contrato: el objeto debe incluir todas sus
propiedades obligatorias y cada valor debe tener el tipo indicado. Una propiedad
puede hacerse opcional colocando `?` después de su nombre:

```ts
type Product = {
    name: string;
    price: number;
    description?: string;
};

const keyboard: Product = {
    name: 'Keyboard',
    price: 1200
};
```

En este caso, omitir `description` es válido porque es una propiedad opcional.

## 4. Múltiples tipos

Una unión permite que una variable acepte valores de varios tipos. Se escribe con
el operador `|`:

```ts
let myVar: string | number | Hero = 'Diego';

myVar = 23;
myVar = flash;
```

> **Nota:** no es obligatorio asignar un valor al declarar la variable. Se puede
> indicar primero su unión de tipos y asignarle después, en distintos momentos,
> un valor de cualquiera de los tipos permitidos.

```ts
let value: string | number | Hero;

value = 'Diego'; // string
value = 23;      // number
value = flash;   // Hero
```

Estas asignaciones no almacenan los tres valores al mismo tiempo. Cada nueva
asignación reemplaza el valor anterior. Tampoco se está declarando un array:
la variable contiene un único valor en cada momento, pero ese valor puede
pertenecer a cualquiera de los tipos de la unión.

```ts
value = true;
// Error: boolean no pertenece a string | number | Hero.
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
- Los datos de un objeto son propiedades; sus funciones son métodos.
- `this` representa al objeto que ejecuta el método y permite acceder a sus propiedades.
- `?` convierte una propiedad en opcional.
- Una firma como `() => string` describe un método sin argumentos que devuelve texto.
- `type` permite reutilizar una estructura en varios objetos.
- `|` crea una unión de tipos y limita los valores permitidos.
