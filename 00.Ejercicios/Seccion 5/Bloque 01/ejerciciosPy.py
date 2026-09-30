#! Ejercicio 6 — Trabajar con una unión de forma segura
'''
Tipo: Implementación
Dificultad: Medio
Crea una función que reciba un valor que puede ser:
- string;
- number.
Debe regresar:
- el texto en mayúsculas cuando recibe un string;
- el doble del valor cuando recibe un number.
Requisitos
- Utiliza una unión de tipos.
- Comprueba el tipo antes de ejecutar una operación específica.
- Utiliza typeof.
- No uses any.
Casos esperados
- hello → HELLO
- 20 → 40
- typescript → TYPESCRIPT
- -5 → -10
'''

def my_function(my_var : str | float) -> str | float:
    if  type(my_var ) == str:
       return my_var .upper()
    elif type(my_var ) == float:
        return my_var  * 2
    else:
        return TypeError('Solo se permite string o flotante')

my_var = 23.8
print(my_function(my_var))