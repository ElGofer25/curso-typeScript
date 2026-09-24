# Compendio 5 — Primera lógica

#! Ejercicio 1 — ¿Es mayor de edad?
"""
Dificultad: Fácil

Crea una función que reciba una edad y devuelva un booleano indicando si la
persona tiene al menos 18 años.

Condiciones
    Recibe exactamente un número.
    Devuelve exactamente un booleano.
    No conviertas manualmente el resultado a texto.
    No uses listas.

Pruebas
    18 → verdadero.
    17 → falso.
    25 → verdadero.

Objetivo: empezar a usar expresiones lógicas dentro de funciones.


"""
def myFunction(age):
    return age >= 18

validate = myFunction(13)
print(validate)

#! Ejercicio 2 — Número dentro de un rango
"""
Dificultad: Fácil

Crea una función que reciba un número y determine si se encuentra entre 10 y
20, incluyendo ambos extremos.

Condiciones
    El retorno debe ser booleano.
    No uses listas.
    No uses más de una función.

Pruebas
    10 → verdadero.
    15 → verdadero.
    20 → verdadero.
    9 → falso.
    21 → falso.

Objetivo: pensar en cómo comprobar dos condiciones simultáneamente.
"""
def excercise_two(numero):
    return 10 > numero < 20

otro_numero = excercise_two(13)
print(otro_numero)



#! Ejercicio 3 — Acceso permitido
"""
Dificultad: Fácil

Una persona puede acceder únicamente cuando se cumplen simultáneamente estas
dos condiciones:

    tiene 18 años o más;
    su cuenta está activa.

Crea una función que reciba la edad y el estado de la cuenta y devuelva un
booleano.

Condiciones
    No devuelvas textos como "Sí" o "No".
    El resultado debe ser booleano.

Pruebas
    23 y activa → verdadero.
    23 e inactiva → falso.
    16 y activa → falso.


"""

#! Ejercicio 4 — Número par
"""
Dificultad: Fácil

Crea una función que determine si un número es par.

Condiciones
    Recibe un número.
    Devuelve un booleano.
    No utilices strings.
    No uses listas.
    No necesitas recorrer nada.

Pruebas
    8 → verdadero.
    7 → falso.
    0 → verdadero.
    -4 → verdadero.

Objetivo: combinar una operación matemática con una comparación.
"""
def excercise_four(numero):
    return (numero%2 == 0)

impar_par = myFunction(10)
print('El numero es par?:', impar_par)

#! Ejercicio 5 — Precio total
"""
Dificultad: Fácil

Crea una función que reciba el precio unitario de un producto y la cantidad
comprada. Debe devolver el precio total.

Condiciones
    Ambos parámetros son obligatorios y numéricos.
    El retorno debe ser numérico.
    No uses listas ni parámetros opcionales.

Pruebas
    Precio 25, cantidad 4 → 100.
    Precio 12.5, cantidad 2 → 25.

Objetivo: empezar a tratar una función como una pequeña unidad de lógica.


"""

#! Ejercicio 6 — Precio con impuesto
"""
Dificultad: Fácil–Medio

Crea una función que reciba un precio y un porcentaje de impuesto. El
porcentaje debe tener como valor predeterminado exactamente 16. La función
debe devolver el precio final después de agregar dicho porcentaje.

Condiciones
    El retorno debe ser numérico.
    Si no se proporciona porcentaje, debe utilizarse 16.
    No uses listas.

Pruebas
    100 sin especificar impuesto → 116.
    100 con impuesto 8 → 108.
    250 con impuesto 10 → 275.

Objetivo: plantear la operación matemática necesaria para calcular el precio
final.


"""

#! Ejercicio 7 — Mayor de dos números
"""
Dificultad: Fácil–Medio

Crea una función que reciba dos números y devuelva el mayor. Si ambos son
iguales, debe devolver cualquiera de ellos porque representan el mismo valor.

Condiciones
    No uses herramientas que calculen automáticamente máximos.
    No uses listas.
    No ordenes nada.

Pruebas
    8 y 3 → 8.
    -2 y 5 → 5.
    7 y 7 → 7.

Objetivo: empezar a tomar decisiones según los datos recibidos.


"""

#! Ejercicio 8 — Estado de temperatura
"""
Dificultad: Medio

Crea una función que reciba una temperatura y devuelva exactamente uno de
estos textos:

    "Frío";
    "Templado";
    "Caliente".

Reglas
    Menos de 15 → "Frío".
    Desde 15 hasta 25 inclusive → "Templado".
    Más de 25 → "Caliente".

Condiciones
    No uses listas.
    No uses diccionarios.
    Todos los caminos posibles deben producir un string.

Pruebas
    10 → Frío.
    15 → Templado.
    25 → Templado.
    26 → Caliente.


"""

#! Ejercicio 9 — Resultado de examen
"""
Dificultad: Medio

Crea una función que reciba una calificación de 0 a 100 y devuelva un
booleano indicando si el alumno aprobó. Se aprueba a partir de 70.

Después crea otra función independiente que reciba nombre y calificación y
devuelva una tupla formada por:

    nombre;
    calificación;
    resultado de aprobación.

Condiciones
    La segunda función debe aprovechar la primera para obtener el resultado.
    No dupliques la comparación de aprobación.
    No uses diccionarios.

Objetivo: empezar a hacer que una función utilice otra función.


"""

#! Ejercicio 10 — Coordenada dentro de una zona
"""
Dificultad: Medio

Una coordenada contiene X y Y. Crea una función que reciba una tupla de
coordenadas y determine si el punto se encuentra dentro de una zona válida.

Un punto es válido únicamente cuando X está entre 0 y 100 inclusive y Y está
entre 0 y 100 inclusive.

Condiciones
    Recibe una sola tupla.
    Devuelve un booleano.
    No uses diccionarios ni listas adicionales.

Pruebas
    50, 50 → verdadero.
    0, 100 → verdadero.
    -1, 50 → falso.
    30, 101 → falso.


"""

#! Ejercicio 11 — Compra válida
"""
Dificultad: Medio

Crea una función que reciba precio unitario, cantidad y saldo disponible. Debe
determinar si el saldo alcanza para realizar toda la compra.

Condiciones
    El retorno debe ser booleano.
    Debes calcular primero conceptualmente el costo total a partir de precio y
    cantidad.
    No uses listas.
    No uses valores predeterminados.

Pruebas
    Precio 20, cantidad 3, saldo 100 → verdadero.
    Precio 50, cantidad 3, saldo 100 → falso.
    Precio 25, cantidad 4, saldo 100 → verdadero.


"""

#! Ejercicio 12 — Contrato para validaciones
"""
Dificultad: Medio

Crea dos funciones diferentes que reciban un número y produzcan un booleano:

    una debe comprobar si el número es positivo;
    otra debe comprobar si es mayor o igual a 100.

Después declara una variable con una anotación Callable que permita almacenar
cualquiera de esas dos funciones y prueba ambas asignaciones.

Condiciones
    La firma debe describir explícitamente el parámetro y el retorno.
    No uses listas ni diccionarios.

Objetivo: combinar la lógica que acabamos de empezar con las anotaciones de
funciones.

"""
