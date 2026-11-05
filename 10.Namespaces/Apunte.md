# Sección 10: Namespaces

## ¿Qué son?

Un **namespace** agrupa funciones, variables o tipos relacionados bajo un nombre.
Sirve para organizar el código y evitar que sus nombres se mezclen con los de
otras partes del programa.

En esta sección, `Validations` reúne funciones de validación. Para utilizarlas,
escribes el nombre del namespace seguido de un punto y el miembro:

```ts
Validations.validateText('Fer'); // true
```

No necesitas crear una instancia con `new`: un namespace no es una clase.

## ¿Para qué sirve `export` dentro del namespace?

Permite acceder a un miembro desde fuera del bloque del namespace. Sin `export`,
ese miembro queda disponible únicamente dentro del bloque donde se declaró.

```ts
namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length <= 3;
  };
}

console.log(Validations.validateText('Fer')); // true
export {};
```

La función anterior equivale a la del archivo de práctica: devuelve `true` si
el texto tiene **hasta tres caracteres**, incluida una cadena vacía. Devuelve
`false` si tiene más de tres. El nombre «validar» no define la regla: la condición
escrita en la función determina qué se acepta.

## ¿Qué hace `validateNumber` en tu ejemplo?

Aunque su nombre diga «número», recibe un **`Date`** y comprueba si representa
una fecha válida:

- `myDate.valueOf()` devuelve su valor numérico en milisegundos; si la fecha
  es inválida, devuelve `NaN`.
- `isNaN(...)` detecta ese `NaN`. Tu función devuelve `false` si lo encuentra
  y `true` en caso contrario.

```ts
Validations.validateNumber(new Date('2026-01-15')); // true
Validations.validateNumber(new Date('fecha inválida')); // false
```

Un nombre como `validateDate` expresaría mejor su propósito. La función no
comprueba si una fecha es futura ni si cumple un formato específico.

## ¿Por qué aparece `export {}` fuera del namespace?

Con la configuración actual del curso, TypeScript rechaza namespaces en archivos
considerados scripts globales. **`export {}` marca el archivo como módulo** y
resuelve ese error sin exportar ningún miembro.

Los dos usos de `export` tienen alcances diferentes:

| Sintaxis | Efecto |
| --- | --- |
| `export const validateText` dentro de `Validations` | Permite usar `Validations.validateText` fuera del bloque. |
| `export {}` fuera de `Validations` | Marca el archivo como módulo; no exporta `Validations` a otros archivos. |

En este archivo, el namespace sigue siendo local al módulo. Para compartirlo
con otro archivo necesitarías exportarlo explícitamente e importarlo allí.
Consulta la [documentación de módulos de TypeScript](https://www.typescriptlang.org/docs/handbook/2/modules.html).

## Webpack

**Webpack es una herramienta que reúne módulos y sus dependencias para generar
archivos que se pueden cargar en el navegador.** Con la configuración adecuada,
también puede procesar TypeScript y otros recursos.

El namespace organiza miembros bajo un nombre; Webpack prepara archivos y
dependencias para ejecutar la aplicación. **No necesitas Webpack para practicar
el ejemplo de esta sección.** Consulta sus [conceptos básicos](https://webpack.js.org/concepts/).

Para organizar aplicaciones nuevas, TypeScript recomienda módulos con
`import` y `export`. Aprender namespaces te permite comprender esta otra forma
de agrupar código, que también aparece en declaraciones de tipos.
Consulta [namespaces y módulos](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html).


## Imports y Exports

**Los módulos permiten dividir una aplicación en archivos con responsabilidades
claras y compartir únicamente lo necesario.** Cada módulo tiene su propio ámbito:
sus nombres no se convierten automáticamente en variables globales.

- `export` expone una declaración para que otros archivos puedan utilizarla.
- `import` permite usar lo exportado por otro módulo.
- La ruta indica de qué módulo proviene; `./` parte de la carpeta del archivo
  que importa y `../` sube una carpeta.

### Importar por nombre y usar alias

Una exportación nombrada se importa entre llaves:

```ts
import { Hero } from './Classes/Hero';
```

Si el nombre ya se usa en el archivo, un alias evita el conflicto:

```ts
import { Hero as Superhero } from './Classes/Hero';

const heroe = new Superhero('Ironman', 2, 45);
```

`as` cambia el nombre local de la importación; no modifica la clase original.

### Agrupar las exportaciones al importar

```ts
import * as HeroClasses from './Classes/Hero';

const heroe = new HeroClasses.Hero('Ironman', 2, 45);
```

`* as` reúne las exportaciones del módulo bajo un nombre. No permite acceder a
declaraciones sin exportar ni crea un bloque `namespace` de TypeScript.
Así puedes tener una variable local llamada `Hero` y acceder a la clase mediante
`HeroClasses.Hero` sin conflicto.

Estas formas son alternativas: elige la que haga más clara cada dependencia.
Referencia: [módulos de TypeScript](https://www.typescriptlang.org/docs/handbook/2/modules.html).

## Export y Default

**La exportación nombrada identifica un miembro; la exportación por defecto
designa el valor principal del módulo.** Un módulo puede tener varias exportaciones
nombradas y como máximo una por defecto. Ambas pueden coexistir.

| Forma | Exportación | Importación |
| --- | --- | --- |
| Nombrada | `export class Hero {}` | `import { Hero } from './Classes/Hero';` |
| Por defecto | `export default powers;` | `import powers from './data/powers';` |

En una importación nombrada debes respetar el nombre exportado o renombrarlo
con `as`. En una importación por defecto eliges libremente el nombre local,
sin llaves:

```ts
import listaDePoderes from './data/powers';
```

`default` puede exportar una clase, función, arreglo u otro valor. No significa
que se exporte todo el archivo ni que se haga una copia del valor.
Una interfaz usada para tipar un arreglo tampoco se exporta automáticamente
al exportar ese arreglo.

Referencia: [exportaciones de JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export).
