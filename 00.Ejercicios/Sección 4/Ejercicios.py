#Ejercicio 1 — Saludo reutilizable
'''
Dificultad: Básica

Crea una función que reciba el nombre de una persona y produzca un saludo que incluya dicho nombre.
Condiciones:
    Debe recibir exactamente un argumento.
    El argumento debe ser texto.
    Debe devolver texto.
    Utiliza una función tradicional.
Declara explícitamente el tipo del parámetro y del retorno.
Casos de prueba
    Diego → Hola Diego
    Melissa → Hola Melissa
    Tony → Hola Tony

Objetivo: parámetros obligatorios y tipo de retorno.
'''
def regards(nombre):
    return f'Hola, {nombre}'

message = regards('Diego')
print(message)

#Ejercicio 2 — Operación matemática
'''
Dificultad: Básica

Crea una función que reciba dos números y devuelva el resultado de multiplicarlos.

Condiciones
    Ambos argumentos son obligatorios.
    Ambos deben ser numéricos.
    El retorno debe ser numérico.
    Utiliza una función flecha.
    No utilices forma abreviada todavía.
    Casos de prueba
    5 y 4 → 20
    10 y 0 → 0
    2.5 y 4 → 10
    -3 y 5 → -15

Objetivo: comparar la sintaxis de una función tradicional con una función flecha.
'''