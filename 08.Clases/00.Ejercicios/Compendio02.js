"use strict";
{ /*
## Bloque 2 — Controlar el acceso y ofrecer acciones

### 03. El precio deja de ser público

**Tema nuevo:** `private` y métodos públicos.

- Parte de la clase `Producto` del ejercicio 02. Conserva su constructor, su
  nombre público y su descripción pública opcional. Cambia únicamente el acceso
  de la propiedad `precio: number`: ahora debe ser privada.
- Declara **dentro de la clase `Producto`** estos dos métodos públicos de instancia:
  - `obtenerPrecio(): number`: no recibe argumentos y devuelve el precio actual
    del producto sobre el que se llama. Consultarlo no modifica ningún dato.
  - `cambiarPrecio(nuevoPrecio: number): boolean`: recibe el precio propuesto.
    Si es mayor o igual a `0`, sustituye el precio de ese producto y devuelve
    `true`. Si es negativo, devuelve `false` y conserva el precio anterior.
- Cambiar el precio de un producto no debe modificar otro producto.
- El constructor recibe un precio inicial mayor o igual a `0`; en este ejercicio
  no se pide validar el precio inicial ni lanzar errores.

**Comprueba sobre una misma instancia, en este orden:**

| Acción | Retorno esperado | Precio después de la acción |
| --- | --- | --- |
| Crear un producto con precio inicial `50` | Una instancia de `Producto` | `50` |
| Llamar a `obtenerPrecio()` | `50` | `50` |
| Llamar a `cambiarPrecio(60)` | `true` | `60` |
| Llamar a `cambiarPrecio(-1)` | `false` | `60` |
| Llamar a `cambiarPrecio(0)` | `true` | `0` |

Después de cada cambio, consulta el precio con `obtenerPrecio()`. Crea además
un segundo producto de precio `10` y comprueba que sigue en `10` tras las
operaciones sobre el primero. Leer o asignar directamente `precio` desde fuera
de `Producto` debe producir un error de TypeScript.

**Explica:** ¿qué regla protege el método? ¿`private` oculta el precio al imprimir
el objeto durante la ejecución de JavaScript?
*/
}
(() => {
    class Producto {
        name;
        price;
        description;
        constructor(name, price, description) {
            this.name = name;
            this.price = price;
            this.description = description;
        }
        obtenerPrecio() {
            return this.price;
        }
        cambiarPrecio(nuevoPrecio) {
            if (nuevoPrecio >= 0) {
                this.price = nuevoPrecio;
                return true;
            }
            return false;
        }
    }
    //Pruebas
    { /*
    const iPad : Producto = new Producto('iPad Pro', 999, 'Feel the future')
    console.log(iPad.obtenerPrecio())
    console.log(iPad.cambiarPrecio(2000))
    console.log(iPad)

    const iPhone : Producto = new Producto('iPhone Pro', 1999, 'Feel the future')
    console.log(iPhone.obtenerPrecio())
    console.log(iPhone.cambiarPrecio(5000))
    console.log(iPhone)
    */
    }
})();
// === EJERCICIO 04 ===
{ /*
### 04. La misma clase, con menos repetición

**Tema nuevo:** propiedades de parámetro en el constructor.

- Parte de la clase `Producto` del ejercicio 03. Declara sus propiedades
  `nombre` pública y `precio` privada mediante propiedades de parámetro.
- Conserva en `Producto` la propiedad pública `descripcion?: string` y los
  métodos públicos `obtenerPrecio()` y `cambiarPrecio()` con las mismas reglas.
- Añade a `Producto` la propiedad pública `readonly codigo: string`.
- Su constructor recibe, en este orden,
  `(nombre: string, precio: number, codigo: string, descripcion?: string)`.
  Cada instancia conserva su código inicial, que no puede reasignarse después.

**Comprueba:** todos los casos anteriores mantienen sus resultados; leer `codigo`
funciona y reasignarlo desde fuera produce error de tipos.

**Explica:**
¿qué declaraciones y asignaciones evita la forma corta?
R: Reduce el código, si nos vamos por el camino 'largo' entonces las declaraciones se hacen hasta tres veces: como props de la clase, props del constructor y al final como asignaciones dentro del constructor.

¿Un parámetro del constructor sin modificador se convierte por sí solo en una propiedad?
R: No, si no declaramos alguna de las palabras reservadas como 'public', la propiedad adquiere sentido solo en el constructor y no sirve como propiedad de clase al crear nuevas instancias
*/
}
(() => {
    class Producto {
        name;
        price;
        codigo;
        description;
        constructor(name, price, codigo, description) {
            this.name = name;
            this.price = price;
            this.codigo = codigo;
            this.description = description;
        }
        obtenerPrecio() {
            return this.price;
        }
        cambiarPrecio(nuevoPrecio) {
            if (nuevoPrecio >= 0) {
                nuevoPrecio = this.price;
                return true;
            }
            return false;
        }
    }
    //Pruebas
    const iPad = new Producto('iPad Pro', 999, 'Feel the future');
    console.log(iPad.obtenerPrecio());
    console.log(iPad.cambiarPrecio(2000));
    console.log(iPad);
    const iPhone = new Producto('iPhone Pro', 1999, 'Feel the future');
    console.log(iPhone.obtenerPrecio());
    console.log(iPhone.cambiarPrecio(5000));
    console.log(iPhone);
})();
// ### 05. Una operación interna reutilizable
{ /*

**Tema nuevo:** métodos privados.

- Crea la clase `Cuenta`, cuyo constructor no recibe argumentos. Cada cuenta
  tiene una propiedad privada `saldo: number`, inicialmente `0`.
- Declara dentro de `Cuenta` estos métodos públicos de instancia:
  - `consultarSaldo(): number`: devuelve su saldo actual sin modificarlo.
  - `depositar(monto: number): boolean`: si el monto es mayor que `0`, aumenta
    el saldo por ese monto y devuelve `true`; en otro caso devuelve `false`.
  - `retirar(monto: number): boolean`: si el monto es mayor que `0` y no supera
    el saldo, descuenta ese monto y devuelve `true`; en otro caso devuelve `false`.
- Declara en `Cuenta` el método privado `esMontoValido(monto: number): boolean`:
  devuelve `true` únicamente si el monto es mayor que `0`. Tanto `depositar`
  como `retirar` deben utilizar ese método para comprobar el monto.
- Ninguna operación rechazada modifica el saldo ni lanza un error.

**Comprueba, en orden:** depositar `100` → `true` y saldo `100`; retirar `30` →
`true` y saldo `70`; retirar `80`, depositar `0` y depositar `-5` → `false`
y saldo final `70`. Llamar al método privado desde fuera debe fallar al compilar.

**Explica:** ¿por qué conviene ofrecer operaciones en lugar de permitir que
cualquier código reasigne el saldo?
*/
}
