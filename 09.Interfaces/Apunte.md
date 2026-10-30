# SECCIÓN 9: INTERFACES EN TYPESCRIPT

## 01.Interfaces básicas

Una **interfaz** da nombre a un contrato: describe la estructura que debe
cumplir un valor. Permite reutilizar tipos, obtener autocompletado y detectar
propiedades faltantes o valores de tipos incorrectos antes de ejecutar.

```ts
interface Producto {
  nombre: string;
  precio: number;
  etiquetas: string[];
  descripcion?: string;
}

const cuaderno: Producto = {
  nombre: 'Cuaderno',
  precio: 45,
  etiquetas: ['Papelería']
};
```

Las propiedades son obligatorias salvo que lleven `?`. Si una propiedad opcional
está presente, debe respetar su tipo. `string[]` indica un array de textos;
`Producto[]` sería un array de objetos que cumplen la interfaz.

Al leer una propiedad opcional, su valor puede ser `undefined`. Puedes comprobar
su existencia o proporcionar una alternativa:

```ts
const descripcion = cuaderno.descripcion ?? 'Sin descripción';
```

Con `exactOptionalPropertyTypes: true`, como en este proyecto,
`descripcion?: string` permite omitir la propiedad, pero no asignarle
explícitamente `undefined`, salvo que también se incluya en su tipo.

**Cuándo usarla:** cuando varias variables o funciones comparten una estructura,
o cuando quieres dejar claro qué datos necesita una operación. Para un objeto
local sencillo, la inferencia de TypeScript puede bastar.

### Compatibilidad por estructura

Un valor cumple una interfaz si tiene los miembros requeridos con tipos
compatibles; no necesita haberse declarado explícitamente con ella. Esto se
llama **tipado estructural**.

En general, un objeto existente puede tener propiedades adicionales. En cambio,
un literal escrito directamente donde se espera la interfaz recibe una
comprobación de propiedades sobrantes, útil para detectar errores de escritura.

### Qué no hace una interfaz

Las interfaces se eliminan al generar JavaScript: no crean objetos ni validan
datos durante la ejecución. No puedes usar `new Producto()` ni
`instanceof Producto` si `Producto` solo es una interfaz. Los datos externos,
como respuestas de una API, necesitan validación si quieres comprobar su contenido.

No requieren una opción especial en `tsconfig.json`. `include` selecciona rutas
de archivos del proyecto; no activa las interfaces.

## 02.Interfaces complejas: objetos dentro de objetos

Una propiedad puede tener otra interfaz como tipo. Esto permite dividir una
estructura grande en partes comprensibles y reutilizables.

```ts
interface Direccion {
  ciudad: string;
  codigoPostal: string;
}

interface Cliente {
  nombre: string;
  direccion?: Direccion;
}

const cliente: Cliente = {
  nombre: 'Ana',
  direccion: {
    ciudad: 'Puebla',
    codigoPostal: '72000'
  }
};
```

`direccion` puede omitirse, pero, si existe, debe contener los miembros
obligatorios de `Direccion`. Que el objeto externo sea opcional no vuelve
opcionales sus propiedades internas.

```ts
const ciudad = cliente.direccion?.ciudad ?? 'Ciudad no registrada';
```

`?.` detiene el acceso y devuelve `undefined` si `direccion` es `null` o
`undefined`. `??` proporciona la alternativa en esos dos casos.

Puedes describir un objeto anidado directamente dentro de una interfaz.
Extraerlo a otra interfaz conviene cuando crece, se reutiliza o merece un nombre
propio; no es una obligación de TypeScript.

## 03.Métodos en las interfaces

Una interfaz puede declarar **qué operaciones debe ofrecer un objeto**, indicando
sus parámetros y su retorno. La implementación se escribe en el objeto o clase.

```ts
interface Etiquetable {
  nombre: string;
  crearEtiqueta(prefijo: string): string;
  alImprimir?: () => void;
}

const articulo: Etiquetable = {
  nombre: 'Cuaderno',
  crearEtiqueta(prefijo: string): string {
    return `${prefijo}: ${this.nombre}`;
  }
};

console.log(articulo.crearEtiqueta('Producto')); // "Producto: Cuaderno"
articulo.alImprimir?.();
```

`crearEtiqueta` es obligatorio. `alImprimir` es una propiedad opcional de tipo
función; `?.()` permite llamarla únicamente si existe. También puede declararse
un método opcional como `alImprimir?(): void`.

El retorno debe expresar cómo se utilizará el resultado: `string` permite
consumir un texto; `void` indica que quien llama no debe usar un valor de retorno.
En un contrato de callback, `void` puede aceptar una función que devuelva algo,
pero ese resultado se ignora desde el tipo del contrato.

Los métodos que usan `this` deben invocarse conservando el objeto receptor,
por ejemplo `articulo.crearEtiqueta('Producto')`. La interfaz no vincula `this`
automáticamente si extraes el método a una variable.

## 04.Interfaces en clases

`implements` exige que una clase cumpla uno o varios contratos. **Comprueba los
miembros de sus instancias, pero no crea propiedades ni implementa métodos.**

```ts
interface Identificable {
  nombre: string;
}

interface Describible {
  describir(): string;
}

class Categoria implements Identificable, Describible {
  public nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public describir(): string {
    return `Categoría: ${this.nombre}`;
  }
}
```

Los miembros que satisfacen el contrato deben ser accesibles públicamente.
Con `strict: true`, las propiedades obligatorias de la clase deben inicializarse,
por ejemplo al declararlas o dentro del constructor. La interfaz solo exige su
existencia y tipo; no les proporciona valores.

`implements` tampoco infiere por sí mismo los tipos de los parámetros de los
métodos de la clase: debes declararlos cuando corresponda.

**Cuándo usarlo:** cuando distintas clases necesitan ofrecer las mismas
operaciones, aunque cada una las resuelva de manera diferente. `implements`
comprueba contratos; `extends` permite heredar de una clase.

## 05.Interfaces para funciones

Una interfaz también puede describir una función completa mediante una
**firma de llamada**: parámetros entre paréntesis y tipo de retorno, sin nombre
de método.

```ts
interface Operacion {
  (a: number, b: number): number;
}

const sumar: Operacion = (x, y) => x + y;
const multiplicar: Operacion = (x, y) => x * y;
```

`sumar` y `multiplicar` son funciones, no objetos con un método llamado
`Operacion`. Sus parámetros se infieren como `number` por el contexto; no es
necesario repetir las anotaciones. Los nombres `x` e `y` pueden diferir de los
de la interfaz: importa la compatibilidad de la firma.

**Cuándo usarla:** para dar un tipo reutilizable a callbacks o a funciones que
pueden intercambiarse porque aceptan y devuelven los mismos tipos.

El contrato comprueba los tipos, no la lógica. Una función que siempre devuelve
`10` también cumple `Operacion`, aunque se llame `sumar`. Verificar que realmente
suma requiere revisar su implementación o probar su comportamiento.

Referencia: [Handbook de interfaces](https://www.typescriptlang.org/docs/handbook/interfaces).
