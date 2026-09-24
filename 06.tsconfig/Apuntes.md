# SECCIÓN 6: TSCONFIG

## 1. ¿Qué es `tsconfig.json`?

`tsconfig.json` indica que una carpeta es un proyecto TypeScript y define cómo
debe trabajar el compilador. Se puede generar con:

```bash
tsc --init
```

TypeScript se transpila a JavaScript porque los navegadores y Node.js ejecutan
JavaScript, no los tipos de TypeScript. El compilador verifica los tipos y genera
los archivos que se ejecutarán.

## 2. Opciones principales del compilador

Las reglas de compilación se colocan dentro de `compilerOptions`:

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "nodenext",
    "strict": true,
    "removeComments": true
  }
}
```

- `target`: versión de JavaScript que se generará.
- `module`: sistema de módulos usado por el proyecto.
- `strict`: activa comprobaciones de tipos más rigurosas.
- `removeComments`: evita trasladar comentarios al JavaScript generado.

## 3. Archivos auxiliares y depuración

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true
  }
}
```

- `sourceMap` crea archivos `.js.map` para relacionar el JavaScript ejecutado con
  el TypeScript original y facilitar la depuración.
- `declaration` genera archivos `.d.ts` con las declaraciones de tipos.
- `declarationMap` permite navegar desde una declaración hasta su fuente.

Los `.d.ts` son especialmente útiles al publicar librerías; una aplicación
sencilla normalmente no necesita generarlos.

## 4. Entrada y salida del proyecto

`rootDir` indica dónde está el código fuente y `outDir` dónde se guardará el
resultado compilado:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

`include` y `exclude` son arreglos de patrones. `exclude` no se declara como un
objeto. Además, importar un archivo puede incorporarlo al proyecto aunque una
regla de exclusión coincida con su ruta.

## 5. Compilación automática

```bash
tsc
tsc --watch
```

`tsc` compila el proyecto una vez. `tsc --watch` permanece observando los
archivos y vuelve a compilar cuando detecta cambios.

## Resumen

- `tsconfig.json` centraliza la configuración del proyecto.
- `target` y `module` controlan el JavaScript generado.
- `strict` mejora la detección de errores de tipos.
- `sourceMap` ayuda a depurar TypeScript desde el código ejecutado.
- `rootDir`, `outDir`, `include` y `exclude` organizan la entrada y la salida.
- `removeComments` limpia los comentarios del resultado de compilación.
