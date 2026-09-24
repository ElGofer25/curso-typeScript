# SECCIÓN 1 EN PYTHON: BASES

## 1. Ejecución

Python ejecuta directamente archivos `.py`; no es necesario generar primero un
archivo JavaScript:

```bash
python3 app.py
```

## 2. Variables

Las variables se crean al asignarles un valor. Python determina su tipo durante
la ejecución:

```python
nombre = "Diego"
edad = 23
activo = True
```

Una variable puede recibir posteriormente otro tipo, aunque normalmente conviene
mantener un uso consistente:

```python
valor = 10
valor = "diez"  # Python lo permite
```

Python no tiene un equivalente directo de `const`. Por convención, las constantes
se escriben en mayúsculas:

```python
IVA = 16
```

La mayúscula comunica la intención, pero no impide modificar el valor.

## 3. Salida, comentarios e interpolación

```python
nombre = "Diego"
print(f"Hola, {nombre}")
```

`print()` muestra información y una *f-string* permite insertar expresiones con
`{}`. Los comentarios se escriben con `#`:

```python
# Este es un comentario.
```

La indentación forma parte de la sintaxis y delimita bloques como funciones y
condicionales.

## 4. Anotaciones de tipo

Python permite documentar los tipos esperados:

```python
nombre: str = "Diego"
edad: int = 23
```

Estas anotaciones ayudan al editor y a verificadores como `mypy`, pero Python no
las hace cumplir automáticamente durante la ejecución.

## Resumen

- Los archivos Python usan la extensión `.py`.
- Las variables se crean mediante asignación y tienen tipado dinámico.
- No existe `const`; las mayúsculas representan constantes por convención.
- `print()` muestra datos y las f-strings interpolan valores.
- La indentación delimita los bloques de código.
- Las anotaciones describen tipos, pero no los imponen por sí solas.
