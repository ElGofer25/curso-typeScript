# SECCIÓN 11: GENÉRICOS EN TYPESCRIPT

## 01.¿Qué son los genéricos?

Los **genéricos** permiten escribir código reutilizable que trabaja con distintos
tipos sin perder la información de cada uno. La idea es recibir un tipo como
parámetro y utilizarlo para relacionar partes de un contrato.

Por ejemplo: «esta función recibe un valor y devuelve un valor del mismo tipo».

```ts
function identidad<T>(valor: T): T {
  return valor;
}

identidad(3.141592).toFixed(2); // "3.14"
identidad('Pilar').toUpperCase(); // "PILAR"
// identidad(false).toFixed(2); // Error: boolean no tiene toFixed
```

Una sola implementación sirve para números, textos y otros valores. TypeScript
conserva el tipo del resultado y comprueba qué operaciones puedes hacer con él.
La firma garantiza el tipo de retorno; el cuerpo de esta función es lo que
hace que también devuelva exactamente el valor recibido.

### ¿Por qué no usar `any`?

```ts
function identidadSinTipo(valor: any): any {
  return valor;
}

identidadSinTipo('Pilar').toFixed(2);
// TypeScript lo permite, pero falla al ejecutarse.
```

`any` desactiva las comprobaciones sobre ese valor. Un genérico mantiene una
relación entre tipos: si entra un texto en `identidad`, sale un texto.

`unknown` también admite valores de distintos tipos, pero exige comprobarlos
antes de utilizarlos. Es útil para datos desconocidos; por sí solo no conserva
la relación de entrada y salida que expresa `<T>(valor: T): T`.

## 02.Cómo leer `<T>`

Los símbolos `<>` se llaman **corchetes angulares**, no llaves. En este contexto
contienen parámetros o argumentos de tipo.

```ts
function identidad<T>(valor: T): T {
  return valor;
}
```

| Parte | Significado |
| --- | --- |
| `<T>` | Declara un parámetro de tipo llamado `T`. |
| `valor: T` | El argumento debe ser compatible con ese tipo. |
| `: T` después de los paréntesis | El resultado debe respetar el mismo tipo. |

`T` es un nombre convencional, no una palabra reservada. También podrías usar
`Tipo`, `Elemento` u otro nombre que explique su propósito. Un parámetro normal
recibe un valor; un parámetro de tipo representa un tipo durante la comprobación
de TypeScript. Los parámetros de tipo se eliminan al generar JavaScript.

### Función normal y función de flecha

```ts
function genericFunction<T>(argument: T): T {
  return argument;
}

const genericArrowFunction = <T>(argument: T): T => {
  return argument;
};
```

Ambas expresan el mismo contrato genérico. En la función normal, `<T>` va después
del nombre; en la flecha, antes de los parámetros.

### Inferencia y tipo explícito

```ts
const texto = genericFunction('Pilar'); // Infiere el tipo a partir del argumento
const numero = genericFunction<number>(3.14); // Indicas el tipo explícitamente

// genericFunction<number>('3.14'); // Error: el argumento es un string
```

Normalmente puedes dejar que TypeScript infiera el tipo. Escribir `<number>`
expresa qué tipo debe aceptar esa llamada; **no convierte** el argumento a número.
Para convertir un valor necesitas una operación como `Number('3.14')`.

Referencia: [genéricos e inferencia de argumentos de tipo](https://www.typescriptlang.org/docs/handbook/2/generics.html).

## 03.Genéricos con interfaces

El tipo utilizado también puede describir un objeto:

```ts
interface Villain {
  name: string;
  realName: string;
  dangerLevel: number;
}

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Wilson',
  dangerLevel: 130
};

const resultado = genericArrowFunction<Villain>(deadpool);
console.log(resultado.dangerLevel); // 130
```

`<Villain>` exige un argumento compatible con la interfaz y hace que el retorno
se trate como `Villain`. No crea una instancia ni añade propiedades al objeto.
Si falta `dangerLevel` o contiene un texto, TypeScript señala el error.

Sin `<Villain>`, también se conservaría la estructura inferida de `deadpool`.
Indicar la interfaz sirve para expresar el contrato que quieres usar.

La compatibilidad depende de la estructura. Si dos interfaces tienen los mismos
miembros y tipos, como `Hero` y `Villain` en esta sección, sus nombres distintos
no impiden que un mismo objeto sea compatible con ambas.

### Qué puedes hacer dentro de una función genérica

Un `T` sin restricciones podría ser un número, un objeto o cualquier otro tipo.
Por eso no puedes asumir que tiene propiedades como `length`. Si necesitas una,
puedes exigirla con **`extends`**:

```ts
function mostrarLongitud<T extends { length: number }>(valor: T): T {
  console.log(valor.length);
  return valor;
}

mostrarLongitud('Hola'); // 4; conserva el tipo del texto
mostrarLongitud([10, 20]); // 2; conserva el tipo del arreglo
// mostrarLongitud(25); // Error: number no tiene length
```

Aquí `extends` expresa una restricción de tipos: no crea herencia entre clases.
Añade restricciones solo cuando la implementación las necesite.
Referencia: [restricciones en funciones genéricas](https://www.typescriptlang.org/docs/handbook/2/functions.html#constraints).

## 04.Agrupar exportaciones con `index.ts`

Un archivo `index.ts` puede reunir exportaciones de una carpeta. A este patrón
se le suele llamar **barrel**: ofrece un punto común desde el que importar.

```ts
// Interfaces/index.ts
export type { Hero } from './Hero';
export type { Villain } from './Villain';
```

```ts
// Desde un archivo situado junto a la carpeta Interfaces
import type { Hero, Villain } from './Interfaces';
```

`export type` e `import type` dejan claro que se comparten tipos, que no existen
al ejecutar JavaScript. Para clases o funciones que necesitas ejecutar se usan
exportaciones e importaciones de valores.

**`index` no es una palabra reservada ni se ejecuta automáticamente primero.**
Resolver una ruta de carpeta hacia su `index.ts` depende de las herramientas y
la configuración; funciona con la configuración de este proyecto. En otros
entornos puede requerirse una ruta explícita al archivo.

Además, un `src/index.ts` puede ser el punto de entrada porque una herramienta
lo configura así. Es un papel diferente al de agrupar exportaciones.
Referencia: [módulos de TypeScript](https://www.typescriptlang.org/docs/handbook/2/modules.html).

## 05.Promesas, `async` y `await`

Una **promesa** representa el resultado de una operación que puede completarse
más adelante. Puede estar pendiente, cumplirse con un valor o rechazarse con
un motivo de error.

`Promise<T>` es otro uso de genéricos: `T` indica el tipo del valor con el que
se cumple la promesa. `Promise<string>` entrega un texto; `Promise<Villain>`
entrega un objeto compatible con `Villain`. Ese parámetro no describe el error.

```ts
async function obtenerNombre(): Promise<string> {
  return 'Pilar';
}

const promesa = obtenerNombre(); // Promise<string>
```

Una función **`async` siempre devuelve una promesa**. Aunque escribas
`return 'Pilar'`, quien llama recibe una promesa que se cumple con ese texto.
Si se lanza un error dentro de la función, la promesa se rechaza.

Dentro de una función `async`, `await` espera el resultado de una promesa y
permite continuar con su valor. Si se rechaza, lanza el error en ese punto.
Suspende esa función mientras espera; no bloquea toda la aplicación.

```ts
async function mostrarNombre(): Promise<void> {
  try {
    const nombre = await obtenerNombre(); // string
    console.log(nombre.toUpperCase());
  } catch (error) {
    console.error('No se pudo obtener el nombre', error);
  }
}
```

### Métodos de las promesas

| Método | Para qué sirve |
| --- | --- |
| `.then(valor => ...)` | Procesa el valor cuando la promesa se cumple. |
| `.catch(error => ...)` | Maneja un rechazo de la cadena anterior. |
| `.finally(() => ...)` | Ejecuta una tarea al finalizar, tanto en éxito como en error; no recibe el resultado. |

Cada método devuelve una nueva promesa. El valor que retornas en un `.then()`
pasa al siguiente; si retornas otra promesa, la cadena espera su resultado.
Si un manejador lanza un error, ese rechazo puede manejarse en un `.catch()` posterior.

```ts
obtenerNombre()
  .then(nombre => nombre.toUpperCase())
  .then(nombre => console.log(nombre)) // "PILAR"
  .catch(error => console.error(error));
```

Un `.catch()` que termina normalmente deja la cadena cumplida con su retorno;
si no retorna nada, ese valor es `undefined`. Para propagar el error, debe volver
a lanzarlo. Del mismo modo, `.finally()` no elimina un rechazo por el simple
hecho de ejecutarse.

## 06.Axios: peticiones HTTP con tipos

**Axios es una biblioteca para realizar peticiones HTTP** desde el navegador o
Node.js. Devuelve promesas, por lo que puedes usarla con `.then()` o `await`.
`axios.get(url)` solicita un recurso mediante el método HTTP `GET`.
Referencia: [introducción a Axios](https://axios-http.com/docs/intro).

La respuesta incluye información de la petición y los datos del servidor:

| Propiedad | Contenido |
| --- | --- |
| `response.data` | Los datos enviados por el servidor. |
| `response.status` | El código de estado HTTP, por ejemplo `200`. |
| `response.headers` | Las cabeceras de la respuesta. |

**La respuesta completa y `response.data` son valores distintos.** Puedes devolver
uno u otro según lo que necesite quien llama.
Referencia: [estructura de la respuesta de Axios](https://axios-http.com/docs/res_schema).

### Unir genéricos, interfaces y promesas

El siguiente ejemplo amplía la práctica: declara los campos que vamos a utilizar,
tipa los datos esperados y los devuelve.

```ts
import axios from 'axios';

interface Pokemon {
  id: number;
  name: string;
}

async function getPokemon(pokemonId: number): Promise<Pokemon> {
  const response = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  return response.data;
}

getPokemon(4)
  .then(pokemon => console.log(pokemon.name))
  .catch(error => console.error('No se pudo obtener el Pokémon', error));
```

Lee la relación de tipos en este orden:

1. `pokemonId: number` describe el argumento que recibe la función.
2. `axios.get<Pokemon>` indica el tipo esperado para `response.data`.
3. `return response.data` entrega esos datos al código que llamó.
4. `Promise<Pokemon>` indica que la función los entrega de forma asíncrona.
5. El parámetro `pokemon` del `.then()` queda tipado como `Pokemon`.

No es necesario declarar todos los campos de una respuesta para describir los
que utilizas. Sin embargo, **el tipo declarado no valida los datos de la red**:
`<Pokemon>` no comprueba que el servidor realmente envíe `id` y `name`.
Si necesitas esa garantía durante la ejecución, debes validar la respuesta.

### Recordatorio clave: imprimir no es retornar

En la práctica actual, `getPokemon` imprime la respuesta, pero no tiene `return`.
Por eso TypeScript infiere `Promise<void>` y el `.then(resp => ...)` recibe
`undefined` cuando la función termina correctamente.

```ts
// Dentro de una función async:
console.log(response); // Muestra la respuesta; no la entrega a quien llamó.
return response.data;  // Hace que la promesa se cumpla con los datos.
```

`await` obtiene un resultado dentro de la función; **`return` decide qué resultado
sale de ella**. Usar `async` no devuelve automáticamente la última expresión.

## Repaso rápido

- **Genérico:** reutiliza una operación conservando relaciones entre tipos.
- **`<T>`:** declara un parámetro de tipo; TypeScript puede inferirlo al llamar.
- **`<Villain>` en una llamada:** exige ese contrato; no convierte ni valida datos al ejecutar.
- **`T extends ...`:** exige la estructura mínima que necesita la función.
- **`index.ts`:** puede reunir exportaciones; su nombre es una convención.
- **`Promise<T>`:** representa un resultado asíncrono cuyo valor será de tipo `T`.
- **`async` / `await`:** permiten trabajar con promesas con una secuencia clara.
- **Axios:** entrega una respuesta; sus datos están en `.data`.
- **`console.log` muestra; `return` entrega.** Sin retorno de valor, una función
  `async` termina correctamente con `undefined`.
