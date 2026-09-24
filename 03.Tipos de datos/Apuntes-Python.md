# SECCIÓN 3 EN PYTHON: TIPOS DE DATOS

## 1. Tipos básicos e inferencia

Python determina el tipo a partir del valor asignado:

```python
nombre = "Diego"       # str
edad = 23              # int
altura = 1.75          # float
activo = True          # bool
sin_valor = None       # None
```

Puede consultarse durante la ejecución con `type()`:

```python
print(type(edad))  # <class 'int'>
```

## 2. Números, booleanos y strings

Python distingue principalmente entre enteros (`int`) y decimales (`float`). Los
booleanos son `True` y `False`, con mayúscula inicial.

```python
cantidad: int = 10
precio: float = 25.50
disponible: bool = True
mensaje: str = "Producto disponible"
```

Los strings permiten indexación y longitudes mediante `len()`:

```python
heroe = "Batman"
primera = heroe[0]
ultima = heroe[-1]
longitud = len(heroe)
```

Acceder a una posición inexistente produce `IndexError`; Python no utiliza el
operador `?.` de TypeScript.

## 3. Listas y tuplas

Una lista es una colección ordenada y modificable:

```python
edades: list[int] = [20, 25, 30]
edades.append(35)
```

Una tupla también conserva el orden, pero no puede modificarse después de su
creación:

```python
usuario: tuple[str, int] = ("Diego", 23)
coordenada: tuple[float, float] = (19.43, -99.13)
```

La tupla es apropiada para estructuras fijas; la lista, para colecciones que
pueden crecer o cambiar.

## 4. Ausencia de valor

Python utiliza `None` para representar intencionalmente la ausencia de valor. No
existe un valor separado equivalente a `undefined`:

```python
from typing import Optional

apodo: Optional[str] = None
```

En Python 3.10 o posterior también puede escribirse:

```python
apodo: str | None = None
```

Debe comprobarse con `is None` o `is not None`.

## 5. `Any`, uniones y enumeraciones

`Any` desactiva gran parte de la comprobación estática y debe usarse con
moderación:

```python
from typing import Any

dato: Any = 10
dato = "texto"
```

Una unión permite declarar varios tipos posibles:

```python
identificador: str | int = 25
```

Las enumeraciones se crean heredando de `Enum`:

```python
from enum import Enum

class Estado(Enum):
    PENDIENTE = "PENDING"
    PAGADO = "PAID"
```

## 6. `None` y funciones que no regresan

Una función que termina sin devolver información se anota con `None`:

```python
def mostrar(mensaje: str) -> None:
    print(mensaje)
```

Una función que nunca termina normalmente puede anotarse con `NoReturn`:

```python
from typing import NoReturn

def detener(mensaje: str) -> NoReturn:
    raise RuntimeError(mensaje)
```

## Resumen

- `str`, `int`, `float`, `bool` y `None` son tipos fundamentales.
- Las listas son modificables; las tuplas representan secuencias fijas.
- Python usa `None`, pero no tiene `null` y `undefined` como valores separados.
- `Any` reduce la seguridad del análisis estático.
- `|` expresa uniones y `Enum` define conjuntos de valores semánticos.
- `-> None` significa que la función termina sin devolver información.
