# SECCIÓN 5 EN PYTHON: OBJETOS

## 1. Diccionarios

El equivalente más cercano a un objeto literal de JavaScript es un diccionario.
Almacena pares de clave y valor:

```python
heroe = {
    "name": "Barry Allen",
    "age": 24,
    "powers": ["Super velocidad", "Viajar en el tiempo"],
}

print(heroe["name"])
```

Las claves se consultan con corchetes. `get()` permite indicar un valor
alternativo cuando una clave no existe:

```python
apodo = heroe.get("nickname", "Sin apodo")
```

## 2. Diccionarios tipados

`TypedDict` describe la estructura esperada de un diccionario para herramientas
de análisis estático:

```python
from typing import NotRequired, TypedDict

class Hero(TypedDict):
    name: str
    age: NotRequired[int]
    powers: list[str]

flash: Hero = {
    "name": "Barry Allen",
    "powers": ["Super velocidad"],
}
```

`NotRequired` marca una clave que puede omitirse. `TypedDict` no crea una clase de
objetos durante la ejecución; el valor sigue siendo un diccionario normal.

## 3. Clases y métodos

Una clase crea objetos con estado y comportamiento propios:

```python
class Hero:
    def __init__(self, name: str, age: int) -> None:
        self.name = name
        self.age = age

    def get_name(self) -> str:
        return self.name

flash = Hero("Barry Allen", 24)
```

`__init__` inicializa la instancia y `self` representa el objeto actual. Los
métodos de instancia reciben `self` como primer parámetro.

## 4. Dataclasses

Una `dataclass` reduce el código necesario para clases dedicadas principalmente a
almacenar datos:

```python
from dataclasses import dataclass, field

@dataclass
class Hero:
    name: str
    age: int | None = None
    powers: list[str] = field(default_factory=list)
```

`default_factory=list` crea una lista independiente para cada instancia y evita
compartir accidentalmente una lista modificable entre objetos.

## 5. Alias y uniones de tipos

Un alias da un nombre reutilizable a un tipo:

```python
type Identifier = str | int  # Python 3.12+
```

En versiones anteriores puede usarse una asignación de alias:

```python
Identifier = str | int
```

Antes de realizar una operación específica puede comprobarse el tipo con
`isinstance()`:

```python
identifier: str | int = "A-25"

if isinstance(identifier, str):
    print(identifier.upper())
```

## Resumen

- Los diccionarios almacenan datos mediante claves y valores.
- `TypedDict` documenta la estructura de un diccionario.
- Las clases modelan objetos con atributos y métodos.
- `self` representa la instancia actual.
- `dataclass` simplifica las clases orientadas a datos.
- Los alias y las uniones permiten reutilizar y combinar anotaciones de tipo.
