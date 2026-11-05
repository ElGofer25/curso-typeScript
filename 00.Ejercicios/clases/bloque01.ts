/*
COMPENDIO DE EJERCICIOS — CLASES — BLOQUE 01

Alcance: secciones 01 a 08 del curso. Practica clases junto con tipos básicos,
arrays, tuplas, enum, uniones, funciones, parámetros opcionales y por defecto,
REST, alias de tipos, objetos, desestructuración y recorridos con for/of.
No necesitas interfaces, namespaces, módulos, genéricos, decoradores, APIs,
promesas ni librerías externas.

Instrucciones generales:
1. Resuelve cada ejercicio en el espacio indicado, dentro de su bloque {}.
2. Declara los tipos de propiedades, parámetros y retornos. No uses any.
3. Implementa las operaciones con lógica propia: condiciones, acumuladores,
   búsquedas y recorridos. No escribas directamente los resultados esperados.
4. Los casos de comprobación son llamadas que debes escribir y ejecutar con
   console.log. Incluyen resultados esperados, pero no soluciones.
5. Si una operación devuelve false por datos inválidos, no debe cambiar el estado.
6. Supón entradas numéricas finitas. Valida los rangos y la condición de entero
   cuando se indique. No se exige controlar NaN ni Infinity.
7. Los ejercicios son independientes. No reutilices clases de otros ejercicios.
8. En Inventario y Carrito, aplica trim() al código recibido en TODOS los
   métodos que lo usen, tanto al registrar como al consultar o modificar.
*/

// EJERCICIO 01 — Cuenta con saldo protegido
/*
Objetivo: constructor, propiedades privadas, métodos y decisiones.
1. Crea Cuenta con titular público y saldo privado. El constructor recibe
   titular y saldoInicial = 0; si el saldo inicial es negativo, guarda 0.
2. depositar(monto: number): boolean acepta únicamente montos mayores que 0.
3. retirar(monto: number): boolean exige monto > 0 y monto <= saldo.
4. consultarSaldo(): number devuelve el saldo sin permitir modificarlo fuera.
5. Crea dos cuentas y comprueba que operar una no cambia la otra.

Comprobación (en este orden):
- Ana comienza con 100; Luis comienza con -20: sus saldos son 100 y 0.
- Ana deposita 50: true; retira 120: true; retira 31: false.
- Ana deposita 0: false; retira -5: false.
- Saldos finales: Ana 30, Luis 0.
*/
{
    // Tu solución del ejercicio 01.
}

// EJERCICIO 02 — Alumno y promedio sin notas extremas
/*
Objetivo: forma corta del constructor, arrays, acumuladores y uniones.
1. Crea Alumno con nombre público mediante la forma corta del constructor y
   un array privado de notas que comienza vacío.
2. agregarNota(nota: number): boolean acepta notas entre 0 y 10, inclusive.
3. promedioAjustado(): number | undefined devuelve undefined si no hay notas.
   Con una o dos notas, promedia todas. Con tres o más, elimina del cálculo
   exactamente UNA nota mínima y UNA máxima, aunque haya valores repetidos.
   No borres ni reordenes las notas guardadas; calcula suma, mínimo y máximo.
4. resultado(minimo: number = 6): string devuelve 'Sin notas', 'Aprobado' o
   'Reprobado'. Aprueba si promedio >= minimo. Supón que el mínimo recibido
   está entre 0 y 10.
5. cantidadNotas(): number permite verificar que el cálculo no borra notas.

Comprobación:
- Sin notas: promedio undefined y resultado 'Sin notas'.
- Agrega 4, 8, 8, 10: promedio ajustado 8; cantidad 4; resultado 'Aprobado'.
- resultado(9): 'Reprobado'; agregarNota(11): false; cantidad sigue en 4.
- Otro alumno con 7, 7, 7: promedio ajustado 7; cantidad sigue en 3.
*/
{
    // Tu solución del ejercicio 02.
}

// EJERCICIO 03 — Inventario con reposición
/*
Objetivo: alias de objeto, encapsulación, búsqueda y parámetro por defecto.
1. Declara type Producto con codigo: string, nombre: string, stock: number y
   minimo: number. Crea Inventario con un array privado inicialmente vacío.
2. registrar(codigo: string, nombre: string, stock: number, minimo: number):
   boolean rechaza códigos repetidos, código o nombre vacíos tras trim(), y
   stock o mínimo que no sean enteros >= 0. Guarda código y nombre recortados.
   Compara los códigos recortados distinguiendo mayúsculas de minúsculas.
3. vender(codigo: string, cantidad: number = 1): boolean exige código existente,
   cantidad entera > 0 y existencias suficientes. Descuenta solo si cumple todo.
4. consultarStock(codigo: string): number | undefined devuelve las existencias.
5. pendientes(): string[] devuelve los códigos con stock < minimo, en orden
   de registro. No devuelvas el array privado ni los objetos almacenados.

Comprobación:
- Registra A/Lápiz/5/3 y B/Goma/2/2: true en ambos casos.
- Registrar otra vez A: false. Vender A, 3: true; stock de A: 2.
- Vender B sin cantidad: true; stock de B: 1; pendientes(): ['A', 'B'].
- Vender A, 3: false; vender X, 1: false; vender A, 0.5: false.
- Stock final de A: 2; consultarStock('X'): undefined.
*/
{
    // Tu solución del ejercicio 03.
}

// EJERCICIO 04 — Monedero y cambio exacto
/*
Objetivo: tuplas, método privado y decisiones encadenadas.
1. Crea Monedero con saldo privado, inicialmente 0. Trabaja solo con pesos enteros.
2. Usa un método privado esMontoValido(monto: number): boolean para comprobar
   que el monto es entero > 0. Reutilízalo al depositar y al retirar.
3. depositar(monto: number): boolean incrementa el saldo si el monto es válido.
4. retirar(monto: number): [number, number, number] | undefined devuelve las
   cantidades de monedas de [10, 5, 1] necesarias para entregar ese monto.
   Minimiza el número de monedas usando primero las de mayor denominación.
   Supón disponibilidad ilimitada de cada moneda, pero respeta el saldo.
   Si el monto es inválido o supera el saldo, devuelve undefined.
   Si tiene éxito, descuenta del saldo exactamente el monto retirado.
5. consultarSaldo(): number permite comprobar los descuentos.

Comprobación:
- Deposita 50: true. Retira 28: [2, 1, 3]; saldo 22.
- Retira 23: undefined; saldo 22. Retira 0: undefined; saldo 22.
- Deposita 2.5: false. Retira 22: [2, 0, 2]; saldo 0.
*/
{
    // Tu solución del ejercicio 04.
}

// EJERCICIO 05 — Termostato con getters y setters
/*
Objetivo: accesores, validación y estado derivado.
1. Crea Termostato con temperatura privada inicial de 20 grados Celsius.
2. Define getter y setter celsius. El setter solo acepta valores entre 16 y 30,
   inclusive; ante un valor fuera del rango conserva la temperatura anterior.
3. Define getter fahrenheit con la fórmula celsius * 9 / 5 + 32.
4. Define getter modo: string: 'Calefacción' si celsius < 20, 'Reposo' si está
   entre 20 y 24 inclusive, y 'Ventilación' si es mayor que 24.
5. ajustar(...cambios: number[]): number recibe incrementos positivos o negativos,
   los aplica uno a uno mediante el setter y devuelve los cambios aceptados.
   Un incremento 0 cuenta como aceptado si la temperatura resultante es válida.

Comprobación:
- Inicial: celsius 20, fahrenheit 68 y modo 'Reposo'.
- ajustar(3, 10, -5): acepta 2 cambios y termina en 18 ('Calefacción').
- Asignar celsius = 31 conserva 18; asignar celsius = 30 deja 30.
- A 30 grados: fahrenheit 86 y modo 'Ventilación'.
*/
{
    // Tu solución del ejercicio 05.
}

// EJERCICIO 06 — Entradas con numeración compartida
/*
Objetivo: enum, propiedades y métodos estáticos, estado por instancia.
1. Declara enum TipoEntrada con General y Estudiante. Crea Entrada con tipo
   público, id público y usado privado inicialmente false.
2. Usa un contador static privado: cada instancia recibe el siguiente id,
   comenzando en 1. El contador pertenece a Entrada y no se reinicia por objeto.
3. precio(): number devuelve 100 para General y 60 para Estudiante.
4. usar(): boolean devuelve true la primera vez y false las siguientes.
5. totalEmitidas(): number debe ser static y devolver cuántas se crearon.
6. Escribe una función totalRecaudado(entradas: Entrada[]): number que recorra
   el array y sume precios, estén o no usadas. Supón que no hay duplicados.

Comprobación (en una ejecución nueva):
- Crea General, Estudiante, General: ids 1, 2, 3 y totalEmitidas() igual a 3.
- Usa la primera dos veces: true y false. Las otras siguen disponibles.
- totalRecaudado con las tres: 260; con un array vacío: 0.
*/
{
    // Tu solución del ejercicio 06.
}

// EJERCICIO 07 — Envíos con herencia y recargos
/*
Objetivo: extends, super, protected y reutilización de cálculos.
1. Crea Envio con pesoKg protected y destino público, recibidos por constructor.
   Supón pesoKg > 0 y destino no vacío.
2. costoBase(): number debe ser protected y calcular 40 + pesoKg * 12.
3. costoTotal(): number debe ser público y devolver el costo base.
4. Crea EnvioExpress extends Envio. Su constructor recibe peso, destino y
   zonaRemota: boolean = false; llama a super para inicializar la base.
5. Su costoTotal() aplica 50% de recargo sobre el total del padre y después
   agrega 30 si la zona es remota. Invoca super.costoTotal() para reutilizarlo.
6. resumen(): string en la subclase devuelve destino, peso y total, con formato
   'Puebla | 2 kg | $126'. Usa el peso protegido heredado.

Comprobación:
- Envio de 2 kg a Puebla: 64.
- EnvioExpress de 2 kg a Puebla, sin zona remota: 96.
- EnvioExpress de 2 kg a Puebla, zona remota: 126 y el resumen indicado.
- Un array Envio[] con esos tres objetos debe sumar 286 al recorrerlo.
*/
{
    // Tu solución del ejercicio 07.
}

// EJERCICIO 08 — Nómina con una clase abstracta
/*
Objetivo: abstracción, implementación por subclase y recorridos con empates.
1. Crea abstract class Empleado con nombre público y método abstracto
   calcularPago(): number. No crees instancias directamente de Empleado.
2. EmpleadoFijo recibe nombre y sueldoMensual; su pago es el sueldo recibido.
3. EmpleadoPorHora recibe nombre, horas y tarifa. Hasta 40 horas se pagan a la
   tarifa normal; solo las horas que superen 40 se pagan al doble.
   Supón sueldos, horas y tarifas >= 0. Las horas pueden tener decimales.
4. Ambas subclases deben llamar a super(nombre) en su constructor.
5. Crea resumirNomina(empleados: Empleado[]): [number, string | undefined].
   Devuelve [total de pagos, nombre de quien más cobra]. Si empatan, conserva
   el primero del array; si está vacío, devuelve [0, undefined].
6. Desestructura la tupla devuelta en total y mejorPagado e imprime ambos.

Comprobación:
- Ana fija con 1000: 1000. Luis con 45 horas a 20: 1000.
- Eva con 10 horas a 30: 300; alguien con 0 horas: 0.
- Resumen de [Ana, Luis, Eva]: [2300, 'Ana']; array vacío: [0, undefined].
*/
{
    // Tu solución del ejercicio 08.
}

// EJERCICIO 09 — Cola compartida de turnos
/*
Objetivo: constructor privado, Singleton, arrays y contador persistente.
1. Crea Turnero con constructor privado, instancia static privada y método
   static obtenerInstancia(): Turnero que siempre devuelve el mismo objeto.
2. Declara type Turno con numero: number y nombre: string. Guarda los turnos
   pendientes en un array privado y el siguiente número en una propiedad privada.
3. emitir(nombre: string): number | undefined recorta el nombre con trim();
   si queda vacío devuelve undefined sin consumir número. Si es válido, guarda
   el turno y devuelve su número. Comienza en 1 y nunca reutilices números.
4. atender(): string | undefined retira el turno más antiguo y devuelve
   'Turno N: Nombre'. Si no hay pendientes, devuelve undefined.
5. pendientes(): number devuelve cuántos faltan por atender.

Comprobación (en una ejecución nueva):
- Dos llamadas a obtenerInstancia() dan referencias a y b: a === b es true.
- a.emitir(' Ana '): 1; b.emitir('   '): undefined; b.emitir('Luis'): 2.
- a.pendientes(): 2; b.atender(): 'Turno 1: Ana'; a.atender(): 'Turno 2: Luis'.
- Otra atención: undefined; pendientes(): 0; emitir('Eva'): 3.
*/
{
    // Tu solución del ejercicio 09.
}

// EJERCICIO 10 — Carrito con compras atómicas y descuentos
/*
Objetivo: integrar clases, objetos, búsqueda, acumulación y métodos privados.
1. Declara type Linea con codigo: string, precio: number y cantidad: number.
   Crea Carrito con líneas privadas inicialmente vacías.
2. agregar(codigo: string, precio: number, cantidad: number = 1): boolean exige
   código no vacío tras trim(), precio > 0 y cantidad entera > 0.
   Si el código ya existe, exige el mismo precio y acumula la cantidad.
   Si el precio difiere, rechaza toda la operación. Compara códigos recortados
   distinguiendo mayúsculas de minúsculas. Nunca crees dos líneas del mismo código.
3. quitar(codigo: string, cantidad: number = 1): boolean exige cantidad entera
   > 0, código existente y cantidad <= unidades de la línea. Descuenta unidades
   y elimina la línea si queda en 0. Si falla, no modifica nada.
4. subtotal(): number suma precio * cantidad de todas las líneas.
5. Implementa un método privado tasaDescuento(): number. Según el subtotal:
   menos de 500: 0%; desde 500 hasta menos de 1000: 10%; desde 1000: 15%.
6. total(conEnvio: boolean = true): number aplica el descuento al subtotal.
   Si hay productos y conEnvio es true, agrega 50 solo cuando el importe
   DESPUÉS del descuento sea menor que 800. Un carrito vacío siempre cuesta 0.
   No redondees resultados intermedios; usa enteros en los casos propuestos.

Comprobación (en este orden):
- Carrito vacío: subtotal 0 y total 0.
- Agrega A a 200, cantidad 2; luego A a 200, cantidad 1: ambas true.
- Subtotal 600; total(false) 540; total() 590.
- Agrega A a 250: false; quita A, 4: false; subtotal sigue en 600.
- Agrega B a 400: true; subtotal 1000; total() 850, sin cargo de envío.
- Quita A, 3: true; subtotal 400; total() 450.
- Quita B: true; subtotal y total vuelven a 0.
- Comprueba además los límites: un carrito con subtotal 500 tiene total 500
   con envío; uno con subtotal 900 tiene total 810 con envío.
*/
{
    // Tu solución del ejercicio 10.
}
