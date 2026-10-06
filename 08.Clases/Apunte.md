# SECCIÓN 8: CLASES EN TYPESCRIPT

## 1. Definición de una clase

Una clase define la estructura y el comportamiento de los objetos que se crean
a partir de ella. Agrupa propiedades (datos) y métodos (acciones). Es útil cuando
varios objetos necesitan las mismas reglas, pero cada uno conserva sus datos.

```ts
class Avenger {
  public name: string;
  public team: string;

  constructor(name: string, team: string) {
    this.name = name;
    this.team = team;
  }
}

const antman = new Avenger('Antman', 'Capitan America');
const ironman = new Avenger('Ironman', 'Ironman');

console.log(antman.name); // "Antman"
```

`new` crea un objeto llamado **instancia** y ejecuta el `constructor` para
inicializarlo. En el constructor, `this` representa la instancia que se está
creando: `this.name` es su propiedad y `name` es el parámetro recibido.

Las clases existen en JavaScript desde ES6. TypeScript añade comprobaciones de
tipos y modificadores como `public` y `private`.

## 2. Propiedades públicas, privadas y opcionales

Los modificadores de acceso controlan desde dónde se puede utilizar un miembro
(una propiedad o un método) en TypeScript:

- `public`: permite acceder desde dentro y fuera de la clase. Es el valor por defecto.
- `private`: permite acceder únicamente desde la clase que declara el miembro.

```ts
class Avenger {
  private name: string;
  public team: string;
  public realName?: string;

  constructor(name: string, team: string, realName?: string) {
    this.name = name;
    this.team = team;
    this.realName = realName;
  }
}

const antman = new Avenger('Antman', 'Capitan America');
console.log(antman.team);     // "Capitan America"
console.log(antman.realName); // undefined
// console.log(antman.name); // Error de TypeScript: es privada
```

El `?` indica que una propiedad o parámetro es opcional. Al leer `realName`, su
tipo es `string | undefined`. Declarar la propiedad opcional no hace opcional un
parámetro del constructor: ese parámetro también necesita `?` o un valor por defecto.

`private` restringe el acceso durante la comprobación de TypeScript; no oculta
el dato al ejecutar JavaScript ni al imprimir el objeto. JavaScript dispone de
campos `#nombre` para privacidad en tiempo de ejecución; son una sintaxis distinta.

## 3. Forma corta de asignar propiedades

Un parámetro del constructor con `public`, `private`, `protected` o `readonly`
se convierte en una propiedad y recibe automáticamente el argumento indicado.
Esta sintaxis se llama **propiedad de parámetro**.

```ts
class Avenger {
  constructor(
    private name: string,
    private team: string,
    public realName?: string
  ) {}
}

const antman = new Avenger('Antman', 'Capitan America', 'Scott Lang');
console.log(antman.realName); // "Scott Lang"
```

Por ejemplo, `private name: string` en el constructor equivale a declarar
`private name: string` en la clase y asignar `this.name = name` en el constructor.
Un parámetro sin esos modificadores es solo un parámetro: no crea una propiedad.

Como referencia, `protected` permite el acceso desde la clase y sus subclases;
`readonly` impide reasignar la propiedad fuera de su inicialización o del
constructor. `readonly` no vuelve inmutable el contenido de un objeto.

## 4. Métodos públicos y privados

Un método es una función definida dentro de una clase. Los métodos públicos
ofrecen acciones que se pueden invocar desde fuera; los privados organizan
operaciones internas que utiliza la propia clase.

```ts
class Avenger {
  constructor(
    private name: string,
    private team: string,
    public realName?: string
  ) {}

  private getIdentity(): string {
    return this.realName ?? 'Identidad desconocida';
  }

  public bio(): string {
    return `${this.name} (${this.getIdentity()}) es miembro de ${this.team}`;
  }
}

const antman = new Avenger('Antman', 'Capitan America', 'Scott Lang');
console.log(antman.bio());
// "Antman (Scott Lang) es miembro de Capitan America"

// antman.getIdentity(); // Error de TypeScript: el método es privado
```

En `antman.bio()`, `this` representa a `antman`. El método puede acceder a sus
propiedades y métodos privados porque está definido dentro de la misma clase.
Esto permite ofrecer una operación pública sin exigir acceso directo a sus datos internos.

El operador `??` utiliza el valor de la derecha cuando el de la izquierda es
`null` o `undefined`; aquí evita mostrar `undefined` si no se recibió `realName`.

## 5. Propiedades y métodos estáticos

Un miembro `static` pertenece a la clase, no a cada instancia. Se utiliza para
datos u operaciones asociados a la clase que no dependen de un objeto concreto.

```ts
class Avenger {
  public static averageAge: number = 35;

  public static getAvgAge(): number {
    return this.averageAge;
  }
}

console.log(Avenger.averageAge);  // 35
console.log(Avenger.getAvgAge()); // 35
```

Se accede con `Avenger.getAvgAge()`, no con `antman.getAvgAge()`. En esa llamada
estática, `this` representa a la clase `Avenger`; no a una instancia.

En el ejemplo de formas cortas, `averageAge: number = 35` es un parámetro normal.
La asignación `Avenger.averageAge = averageAge` dentro del constructor cambia el
valor de la clase cada vez que se crea una instancia. No guarda una edad por objeto
ni calcula un promedio automáticamente. `static` tampoco puede usarse como
modificador de un parámetro del constructor.

## Resumen

- Una clase agrupa datos y acciones; `new` crea una instancia y ejecuta el constructor.
- `public` permite acceso externo; `private` limita el acceso en TypeScript a la propia clase.
- `?` marca propiedades o parámetros opcionales, cuyos valores pueden ser `undefined`.
- Los modificadores en parámetros del constructor permiten declarar y asignar propiedades a la vez.
- Los métodos públicos ofrecen operaciones; los privados sirven de apoyo interno.
- Los miembros `static` pertenecen a la clase y se accede a ellos mediante su nombre.
