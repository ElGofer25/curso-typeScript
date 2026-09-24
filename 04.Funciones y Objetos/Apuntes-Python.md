# SECCIÓN 4 EN PYTHON: FUNCIONES

## 1. Funciones básicas

Las funciones se declaran con `def`. Los dos puntos abren el bloque y la
indentación define su cuerpo:

```python
def sumar(a: int, b: int) -> int:
    return a + b
```

`a: int` y `b: int` describen los parámetros; `-> int` describe el retorno.

## 2. Argumentos obligatorios y valores predeterminados

Los parámetros son obligatorios si no tienen un valor predeterminado:

```python
def nombre_completo(nombre: str, apellido: str) -> str:
    return f"{nombre} {apellido}"
```

Un valor predeterminado permite omitir el argumento:

```python
def saludar(nombre: str, idioma: str = "español") -> str:
    return f"{nombre}: {idioma}"
```

Los parámetros obligatorios deben colocarse antes de los que tienen valores
predeterminados.

## 3. Valores opcionales

Una anotación opcional indica que un dato puede ser `str` o `None`:

```python
def mostrar_apodo(nombre: str, apodo: str | None = None) -> str:
    return f"{nombre}: {apodo or 'Sin apodo'}"
```

La unión de tipos y el valor predeterminado cumplen funciones distintas:

- `str | None` indica qué valores acepta el parámetro.
- `= None` permite omitirlo durante la llamada.

## 4. Cantidad variable de argumentos

`*args` agrupa los argumentos posicionales adicionales en una tupla:

```python
def formar_nombre(nombre: str, *partes: str) -> str:
    return " ".join((nombre, *partes))
```

`**kwargs` agrupa argumentos con nombre dentro de un diccionario:

```python
def mostrar_datos(**datos: str) -> None:
    print(datos)
```

`*args` y `**kwargs` son los equivalentes conceptuales de recibir una cantidad
variable de argumentos.

## 5. Funciones como valores

En Python las funciones son valores de primera clase: pueden almacenarse en
variables, enviarse como argumentos y devolverse desde otras funciones.

```python
from collections.abc import Callable

Operacion = Callable[[int, int], int]

def multiplicar(a: int, b: int) -> int:
    return a * b

operacion: Operacion = multiplicar
resultado = operacion(4, 5)
```

`Callable[[int, int], int]` describe una función que recibe dos enteros y devuelve
un entero.

## 6. Funciones lambda

Una `lambda` representa una función pequeña formada por una sola expresión:

```python
sumar = lambda a, b: a + b
```

Para lógica extensa o reutilizable se prefiere `def`, ya que ofrece mejor
legibilidad y admite varias instrucciones.

## Resumen

- `def` declara funciones y `return` devuelve un resultado.
- Las anotaciones documentan parámetros y retorno.
- Los valores predeterminados permiten omitir argumentos.
- `*args` produce una tupla y `**kwargs` produce un diccionario.
- `Callable` describe la firma de una función.
- `lambda` es apropiada para expresiones breves.
