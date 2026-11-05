# SECCIÓN 8: CLASES EN TYPESCRIPT

## 01.Definición de una clase

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

El **constructor sirve para darle a cada objeto sus datos iniciales al crearlo**.
Se ejecuta automáticamente cuando usas `new`.

```ts
class Persona {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

const persona = new Persona('Ana');
```

Aquí, el constructor recibe `'Ana'` y lo guarda en `persona.nombre`, dejando
el objeto listo para usarse.

La asignación `this.nombre = nombre` **guarda el valor recibido en la propiedad
del objeto**:

```ts
constructor(nombre: string) {
  this.nombre = nombre;
  // destino    valor recibido como parámetro
}
```

- `this.nombre`: la propiedad de la instancia que estás creando.
- `nombre`: el parámetro que recibe el constructor.

Al ejecutar `new Persona('Ana')`, esa línea guarda `'Ana'` en la propiedad
`nombre` del nuevo objeto. **Recibir el parámetro no lo guarda automáticamente**:
esta asignación lo hace.

## 02.Propiedades públicas, privadas y opcionales

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

### Propiedades de solo lectura: `readonly`

**`readonly` impide reasignar una propiedad después de inicializarla.** Puedes
asignarle su valor al declararla o en el constructor de la clase que la declara.
Después puedes leerla, pero TypeScript rechaza que le asignes otro valor, incluso
desde un método normal de esa misma clase.

```ts
class Producto {
  public readonly codigo: string;

  constructor(codigo: string) {
    this.codigo = codigo;
  }
}

const producto = new Producto('IPAD-001');
const otroProducto = new Producto('IPHONE-001');

console.log(producto.codigo); // "IPAD-001"
console.log(otroProducto.codigo); // "IPHONE-001"
// producto.codigo = 'IPAD-002'; // Error de TypeScript: es de solo lectura.
```

Cada instancia tiene su propio código. **`public` controla desde dónde puedes
acceder; `readonly` impide reasignar.** No necesitas añadir un método para activar
la restricción: TypeScript la comprueba automáticamente. En un parámetro del
constructor, `readonly codigo: string` crea una propiedad pública; escribir
`public readonly codigo: string` hace explícito ese acceso.

La restricción se comprueba en TypeScript; por sí sola no bloquea cambios durante
la ejecución de JavaScript. Si la propiedad contiene un objeto o arreglo,
`readonly` impide reemplazar esa referencia, pero no modificar su contenido.

## 03.Forma corta de asignar propiedades

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

## 04.Métodos públicos y privados

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

## 05.Propiedades y métodos estáticos

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

## 06.Extense

La palabra clave correcta es **`extends`**: permite crear una subclase a partir de otra. En `extense.ts`, `Xmen extends Avenger` expresa que un `Xmen` es un
`Avenger`: reutiliza su comportamiento y añade la propiedad `isMutant`.
Úsala cuando exista esa relación «es un», no solo para compartir código.

```ts
class Avenger {
  constructor(public name: string, public realName: string) {}

  protected getFullName(): string {
    return `${this.name} ${this.realName}`;
  }
}

class Xmen extends Avenger {
  constructor(name: string, realName: string, public isMutant: boolean) {
    super(name, realName);
  }

  public getFullNameFromXmen(): void {
    console.log(super.getFullName());
  }
}

const wolverine = new Xmen('Wolverine', 'Logan', true);
wolverine.getFullNameFromXmen(); // "Wolverine Logan"
// wolverine.getFullName();     // Error: el método es protegido
```

Si la subclase declara un constructor, debe llamar a `super(...)` antes de usar
`this`: así ejecuta el constructor padre. Si no declara constructor, se utiliza
uno implícito que pasa los argumentos al padre. `super.getFullName()` llama al
método de la clase padre sobre la instancia actual.

La herencia conserva las restricciones de acceso:

| Modificador | Desde dónde se permite acceder | Caso de uso |
| --- | --- | --- |
| `public` (por defecto) | Clase, subclases y código externo | Datos y operaciones que los usuarios de la clase necesitan. |
| `protected` | Clase que lo declara y sus subclases | Lógica interna que las subclases necesitan reutilizar o adaptar. |
| `private` | Solo la clase que lo declara | Detalles internos que tampoco deben usar directamente las subclases. |

Aquí, `protected` permite que `Xmen` reutilice `getFullName()` sin ofrecer acceso
directo desde fuera. Si fuera `private`, `Xmen` no podría llamarlo; si fuera
`public`, también podría hacerlo `wolverine.getFullName()`. Estas restricciones
se comprueban en TypeScript; no proporcionan privacidad en tiempo de ejecución.

## 07.Getters y setters

Los accesores ejecutan lógica al leer o asignar una propiedad: un **getter**
(`get`) calcula o devuelve un valor; un **setter** (`set`) recibe un valor y puede validarlo antes de guardarlo. Se usan como propiedades, sin paréntesis.

```ts
class Heroe {
  private _name = 'Wolverine';

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    const name = value.trim();
    if (name.length < 3) {
      throw new Error('El nombre debe tener al menos 3 caracteres');
    }
    this._name = name;
  }
}

const heroe = new Heroe();
heroe.name = 'Logan';   // Ejecuta el setter
console.log(heroe.name); // Ejecuta el getter: "Logan"
```

Son útiles para validar cambios o exponer datos calculados, como un nombre
completo. Un getter sin setter permite leer, pero no asignar esa propiedad
desde TypeScript. El dato de respaldo debe ser distinto del accesor: asignar
`this.name` dentro de `set name` volvería a ejecutar el setter indefinidamente.
Si el respaldo fuera público, se podría modificar directamente y omitir la validación.

## 08.Clases abstractas

Una clase `abstract` define una base común para otras clases. Puede tener
constructor, propiedades y métodos con implementación, pero TypeScript impide
crear instancias de ella directamente. Sus subclases concretas sí se pueden instanciar.

```ts
abstract class Mutante {
  constructor(public name: string) {}

  abstract usarPoder(): string;

  presentarse(): string {
    return `Soy ${this.name}`;
  }
}

class Xmen extends Mutante {
  usarPoder(): string {
    return 'Regeneración';
  }
}

const logan = new Xmen('Logan');
console.log(logan.presentarse()); // "Soy Logan"
console.log(logan.usarPoder());   // "Regeneración"
// new Mutante('Logan');         // Error: la clase es abstracta
```

Un método marcado como `abstract` declara qué operación debe existir, sin
definir su cuerpo. Cada subclase concreta debe implementarlo. Marcar solo la
clase como abstracta no obliga a añadir métodos nuevos en las subclases.

Úsala cuando varias clases compartan estado o comportamiento y necesiten una
estructura común. También sirve como tipo: una variable `Mutante` puede recibir
un `Xmen`. Una clase sin la palabra clave `abstract` es concreta y sí admite `new`.

## 09.Constructor privado y Singleton

Un `private constructor` impide que el código externo cree instancias con `new`. La propia clase puede crearlas y ofrecer un método estático que controle su obtención. También impide extender la clase desde fuera.

El patrón **Singleton** utiliza ese control para crear una instancia una sola
vez y devolver siempre la misma:

```ts
class Apocalipsis {
  private static instance: Apocalipsis | undefined;

  private constructor(public name: string) {}

  static getInstance(): Apocalipsis {
    if (!Apocalipsis.instance) {
      Apocalipsis.instance = new Apocalipsis('Apocalipsis');
    }
    return Apocalipsis.instance;
  }
}

const primero = Apocalipsis.getInstance();
const segundo = Apocalipsis.getInstance();
console.log(primero === segundo); // true: son el mismo objeto
// new Apocalipsis('Otro');      // Error: el constructor es privado
```

El constructor privado por sí solo no crea un Singleton: la propiedad estática
guarda la instancia y el método evita crear otra. Esa propiedad debe ser privada
para que el código externo no la reemplace.

Puede servir para un servicio que deba compartirse dentro de una aplicación.
Como todos reciben el mismo objeto, cambiar sus propiedades afecta a todos sus
usuarios; conviene evitarlo cuando se necesitan instancias independientes o
aislamiento entre pruebas. `private` aplica estas restricciones en TypeScript,
no como una barrera de acceso durante la ejecución de JavaScript.

## Resumen

- Una clase agrupa datos y acciones; `new` crea una instancia y ejecuta el constructor.
- `public` permite acceso externo; `private` limita el acceso en TypeScript a la propia clase.
- `?` marca propiedades o parámetros opcionales, cuyos valores pueden ser `undefined`.
- Los modificadores en parámetros del constructor permiten declarar y asignar propiedades a la vez.
- Los métodos públicos ofrecen operaciones; los privados sirven de apoyo interno.
- Los miembros `static` pertenecen a la clase y se accede a ellos mediante su nombre.
- `extends` crea una subclase; `protected` permite compartir miembros internos con ella.
- Los getters y setters permiten calcular lecturas y validar asignaciones como propiedades.
- Una clase abstracta sirve de base; sus miembros abstractos exigen implementación en las subclases concretas.
- Un constructor privado controla la creación; un Singleton conserva y devuelve una misma instancia.
