# Serie progresiva de 15 ejercicios (referencia)

> Movido desde `AGENTS.md`. Es el enunciado de una serie independiente de los Compendios.
> Para generar ejercicios nuevos consulta `AGENTS.md`.

## Bloque 1 — Crear objetos y entender sus datos

### 01. Dos productos independientes

**Tema nuevo:** clase, propiedades públicas, constructor, `this`, `new` e instancias.

- Declara la clase `Producto` con las propiedades públicas `nombre: string` y
  `precio: number`. Su constructor recibe `(nombre: string, precio: number)` y
  cada instancia conserva los valores recibidos.
- Declara las propiedades en el cuerpo de la clase y asígnalas en el constructor.
- Crea un cuaderno de precio `50` y un lápiz de precio `10`.
- Cambia el precio del cuaderno a `60` desde fuera de la clase.

**Comprueba:** los precios finales son `60` y `10`; el cambio afecta únicamente
al cuaderno. No añadas métodos todavía.

**Explica:** ¿qué diferencia hay entre `Producto` y el cuaderno? ¿Por qué
`this.nombre = nombre` necesita distinguir dos nombres?

### 02. Un dato que puede faltar

**Tema nuevo:** propiedades y parámetros opcionales. Conserva lo anterior.

- Parte de `Producto` del ejercicio 01. Añade a esa clase la propiedad pública
  `descripcion?: string`. Su constructor recibe
  `(nombre: string, precio: number, descripcion?: string)`.
- Crea un producto con descripción y otro sin ella.
- Muestra la descripción o el texto `Sin descripción` cuando no exista.
- Con `exactOptionalPropertyTypes`, evita asignar explícitamente `undefined` a
  una propiedad declarada con `?`: asígnala solo si recibiste una cadena.

**Comprueba:** el segundo producto muestra `Sin descripción`; el primero conserva
su texto. La lectura de una descripción ausente da `undefined`.

**Explica:** ¿hacer opcional la propiedad hace opcional automáticamente el
parámetro del constructor? ¿Qué tipo tiene la propiedad al leerla?

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

**Explica:** ¿qué declaraciones y asignaciones evita la forma corta? ¿Un parámetro
del constructor sin modificador se convierte por sí solo en una propiedad?

### 05. Una operación interna reutilizable

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

## Bloque 3 — Distinguir la clase de sus instancias

### 06. Contar productos creados

**Tema nuevo:** propiedades y métodos `static`.

- Parte de `Producto` del ejercicio 04 y conserva su constructor y sus métodos.
  Añade a esa clase la propiedad estática privada `totalCreados: number`, inicialmente `0`.
- Incrementa el contador una vez por ejecución del constructor.
- Declara en `Producto` el método público estático `obtenerTotalCreados(): number`,
  que devuelve el número de instancias creadas sin modificarlo.
- Mantén el precio como dato individual de cada instancia.

**Comprueba:** en una ejecución nueva, antes de crear productos el total es `0`;
después de crear tres es `3`. Cambiar un precio no cambia el contador.
Invocar `obtenerTotalCreados()` sobre una instancia debe dar error de tipos.

**Explica:** ¿por qué el contador es estático y el precio no? ¿Crear otra variable
que apunte a un producto existente incrementa el total?

## Bloque 4 — Reutilizar y especializar comportamiento

### 07. Un empleado también es una persona

**Tema nuevo:** `extends` y `super(...)`.

- Crea la clase `Persona` con la propiedad pública `nombre: string` y constructor
  `(nombre: string)`. Su método público de instancia `presentarse(): string`
  devuelve `Soy {nombre}`, sustituyendo `{nombre}` por el nombre de esa persona.
- Crea la clase `Empleado extends Persona` con la propiedad pública `puesto: string`.
- El constructor de `Empleado` recibe `(nombre: string, puesto: string)` e
  inicializa el nombre heredado mediante el constructor de `Persona`.
- Declara en `Empleado` el método público de instancia `describirTrabajo(): string`.
  Devuelve `{nombre} trabaja como {puesto}`; para Ana, programadora, el resultado
  exacto es `Ana trabaja como programadora`. Ninguno de los dos métodos modifica datos.

**Comprueba:** una instancia de `Empleado` puede usar ambos métodos.
No vuelvas a declarar `nombre` en la subclase.

**Explica:** ¿por qué debes llamar a `super(...)` antes de usar `this`?
¿Qué relación «es un» expresa esta herencia?

### 08. Compartir datos con la subclase

**Tema nuevo:** `protected` y llamadas a métodos del padre con `super`.

- Crea una nueva clase `Empleado`, independiente de la del ejercicio 07, con
  `nombre: string` público, `sueldoBase: number` protegido e `identificador: string`
  privado. Su constructor recibe `(nombre: string, sueldoBase: number, identificador: string)`.
- Declara en `Empleado` dos métodos públicos de instancia:
  `obtenerIdentificador(): string`, que devuelve su identificador, y
  `calcularPago(): number`, que devuelve su sueldo base sin modificarlo.
- Crea la clase `Vendedor extends Empleado` con la propiedad pública `comision: number`.
  Su constructor recibe `(nombre: string, sueldoBase: number, identificador: string, comision: number)`.
- Redefine en `Vendedor` el método público `calcularPago(): number`: devuelve
  el pago de la clase base más la comisión y debe reutilizar `super.calcularPago()`.
- Declara en `Vendedor` el método público `consultarSueldoBase(): number`, que
  devuelve directamente la propiedad protegida heredada, sin llamar a `calcularPago()`.
- Sueldo y comisión serán mayores o iguales a `0`; no se pide validarlos.
  Consultar cualquier dato o calcular el pago no modifica las propiedades.

**Comprueba:** un vendedor con identificador `V1`, sueldo base `1000` y comisión
`200` devuelve `1200` en `calcularPago()`, `1000` en `consultarSueldoBase()` y
`V1` en `obtenerIdentificador()`.
Leer el sueldo desde fuera da error; leer el identificador directamente desde
`Vendedor` también. Consultarlo mediante el método público sí funciona.

**Explica:** ¿desde dónde puede usarse cada modificador? ¿Qué cambiaría si
el sueldo fuera privado? ¿Qué implementación ejecuta `super.calcularPago()`?

## Bloque 5 — Controlar lecturas y asignaciones

### 09. Un nombre con validación

**Tema nuevo:** getters y setters.

- Crea la clase `Perfil` con la propiedad privada `_nombre: string`. Declara
  en esa clase el getter público `nombre: string`, que devuelve el nombre guardado,
  y el setter público `nombre`, que recibe un `string`. Su constructor recibe `(nombre: string)`.
- El setter elimina espacios en los extremos y exige al menos tres caracteres.
- Si el valor es inválido, lanza un `Error` antes de cambiar el respaldo.
- El constructor debe aplicar la misma validación al nombre inicial.
- Inicializa el respaldo para cumplir con la comprobación estricta de propiedades.

**Comprueba:** crear con `  Ana  ` permite leer `Ana`; asignar `  Luis  `
permite leer `Luis`. Intentar asignar `ab` lanza un error y conserva `Luis`.
Crear un perfil con `ab` también falla. Puedes usar `try/catch` para observar los errores.

**Explica:** ¿por qué se escribe `perfil.nombre` sin paréntesis? ¿Qué pasaría
si el setter asignara a `this.nombre` en lugar de a `this._nombre`?

### 10. Calcular sin guardar datos duplicados

**Tema nuevo:** getter sin setter. Combina accesores y herencia.

- Crea la clase `Rectangulo` con las propiedades privadas `_ancho: number` y
  `_alto: number`. Su constructor recibe `(ancho: number, alto: number)`.
- Declara en `Rectangulo` los getters y setters públicos `ancho` y `alto`, ambos
  de tipo `number`. Cada getter devuelve la dimensión correspondiente.
- Cada dimensión debe ser mayor que `0`. Un valor inicial inválido impide crear
  la instancia y lanza un `Error`. Una asignación inválida mediante un setter
  lanza un `Error` y deja ambas dimensiones sin cambios.
- Añade a `Rectangulo` el getter público `area: number`, sin setter, que devuelve
  el producto de las dimensiones actuales. No guardes el área como un dato adicional.
- Crea `RectanguloColoreado extends Rectangulo` con la propiedad pública `color: string`.
  Su constructor recibe `(ancho: number, alto: number, color: string)`.

**Comprueba:** un rectángulo coloreado de `4 × 3` tiene área `12`; al cambiar
el ancho a `5`, el área pasa a `15`. Asignar `alto = 0` lanza un error y conserva
el área anterior. Asignar a `area` da error de TypeScript.

**Explica:** ¿por qué calcular el área al leerla evita inconsistencias?
¿Qué comportamiento reutiliza la subclase?

## Bloque 6 — Definir una base común obligatoria

### 11. Cada figura calcula su área

**Tema nuevo:** clase abstracta y método abstracto.

- Declara la clase abstracta `Figura` con la propiedad pública `nombre: string`
  y constructor `(nombre: string)`.
- Declara en `Figura` el método público concreto `describir(): string`, que devuelve
  `Figura: {nombre}`, y el método público abstracto `calcularArea(): number`.
- Crea `Cuadrado extends Figura`: constructor `(lado: number)`, propiedad privada
  `lado: number` y nombre heredado `Cuadrado`. Su método público `calcularArea()`
  devuelve lado por lado.
- Crea `Triangulo extends Figura`: constructor `(base: number, altura: number)`,
  propiedades privadas `base: number` y `altura: number`, y nombre heredado
  `Triángulo`. Su método público `calcularArea()` devuelve base por altura entre dos.
- Las dimensiones recibidas serán positivas; no se pide validarlas. Ningún
  cálculo de área modifica los datos de la figura.

**Comprueba:** cuadrado de lado `4` → `16`; triángulo de base `6` y altura `3`
→ `9`. Ambas figuras reutilizan `describir()`.
Instanciar `Figura` o dejar una subclase concreta sin implementar el cálculo
debe producir error de tipos.

**Explica:** ¿qué aporta aquí una clase abstracta? ¿Puede tener constructor
y métodos con implementación?

### 12. Una colección, varios comportamientos

**Tema nuevo:** usar la clase abstracta como tipo.

- Conserva las tres clases del ejercicio 11. Fuera de ellas, crea un arreglo
  `Figura[]` con un cuadrado de lado `4` y un triángulo de base `6` y altura `3`,
  en ese orden.
- Recorre el arreglo para mostrar la descripción y el área de cada figura.
- Calcula la suma total de áreas llamando al mismo método en cada elemento.
- Crea `Circulo extends Figura` con constructor `(radio: number)`, propiedad
  privada `radio: number` y nombre heredado `Círculo`. Su método público
  `calcularArea(): number` devuelve `Math.PI * radio * radio`. El radio será positivo.
  Añade al final del arreglo un círculo de radio `1`.
- El recorrido y el cálculo del total deben funcionar sin añadir condiciones
  para identificar cada subclase.

**Comprueba:** las dos primeras áreas suman `25`; con un círculo de radio `1`,
el total es `25 + Math.PI` (aproximadamente `28.1416`).

**Explica:** ¿por qué una variable de tipo `Figura` puede contener un `Cuadrado`
aunque no puedas ejecutar `new Figura(...)`?

## Bloque 7 — Controlar la creación de instancias

### 13. Crear mediante un método de clase

**Tema nuevo:** constructor privado, todavía sin Singleton.

- Crea la clase `Sesion` con la propiedad pública `usuario: string` y constructor
  privado `(usuario: string)`, que conserva el usuario recibido.
- Declara dentro de `Sesion` el método público estático `crear(usuario: string): Sesion`.
- Ese método debe devolver una instancia nueva en cada llamada.

**Comprueba:** `Sesion.crear('Ana')` funciona; llamar a `new Sesion('Ana')`
desde fuera da error de tipos. Dos llamadas a `crear('Ana')` producen objetos
distintos: compararlos con `===` devuelve `false`.

**Explica:** ¿por qué la clase sí puede ejecutar su propio constructor privado?
¿Por qué esta implementación todavía no es un Singleton?

### 14. Compartir una única configuración

**Tema nuevo:** patrón Singleton. Combina constructor privado, estado estático y accesores.

- Crea `Configuracion` con constructor privado y una instancia estática privada
  de tipo `Configuracion | undefined`.
- El constructor privado de `Configuracion` no recibe argumentos. Declara dentro
  de esa clase el método público estático `obtenerInstancia(): Configuracion`: todas
  sus llamadas devuelven la misma instancia, creada durante la primera llamada.
- Añade a `Configuracion` la propiedad privada `_idioma: string`, inicialmente `es`,
  y el getter y setter públicos `idioma`, de tipo `string`. El getter devuelve
  el idioma actual; el setter cambia el idioma según la siguiente regla.
- Acepta únicamente `es` o `en`; cualquier otro texto lanza un error sin guardar cambios.

**Comprueba:** dos llamadas devuelven el mismo objeto (`===` es `true`).
Cambiar el idioma a `en` mediante la primera referencia hace que la segunda lea `en`.
Asignar `fr` falla y conserva `en`. El código externo no puede llamar al constructor
ni reemplazar la instancia estática.

**Explica:** ¿qué responsabilidad cumple cada miembro privado? ¿Por qué compartir
esta instancia puede dificultar que dos pruebas sean independientes?

## Bloque 8 — Integración final

### 15. Sistema de préstamos de una biblioteca

**Sin conceptos nuevos:** combina lo aprendido en una solución propia.

Construye las siguientes clases. Todos los métodos y accesores son de instancia
salvo los que se indican como estáticos. Los textos entre `{}` representan valores
de las propiedades, no caracteres que debas incluir en las fichas.

**Clase abstracta `Material`:**

- Constructor `(codigo: string, titulo: string, ubicacion?: string)`.
- Propiedades públicas `readonly codigo: string`, `titulo: string` y
  `ubicacion?: string`. Cada instancia conserva los argumentos recibidos.
- Estado privado de préstamo, inicialmente no prestado. Puedes elegir su nombre.
- Getter público `disponible: boolean`: devuelve `true` si no está prestado.
- Método público `prestar(): boolean`: si está disponible, lo marca como prestado
  y devuelve `true`; si ya está prestado, devuelve `false` sin cambios.
- Método público `devolver(): boolean`: si está prestado, lo marca como disponible
  y devuelve `true`; si ya está disponible, devuelve `false` sin cambios.
- Método público abstracto `diasPrestamo(): number`.
- Método protegido `crearEncabezado(): string`: devuelve `{codigo} - {titulo}`.
- Método público `ficha(): string`: reutiliza `crearEncabezado()` y devuelve
  `{codigo} - {titulo} | {ubicacion}`. Si falta la ubicación, utiliza exactamente
  `Sin ubicación` en su lugar.

**Clase `Libro extends Material`:**

- Constructor `(codigo: string, titulo: string, autor: string, ubicacion?: string)`.
- Propiedad pública `autor: string`, con el valor recibido.
- Método público `diasPrestamo(): number`: devuelve `14`.
- Redefine el método público `ficha(): string`: reutiliza `super.ficha()` y añade
  ` | Autor: {autor}` al final.

**Clase `Revista extends Material`:**

- Constructor `(codigo: string, titulo: string, edicion: number, ubicacion?: string)`.
- Propiedad pública `edicion: number`, con el valor recibido.
- Método público `diasPrestamo(): number`: devuelve `7`.
- Redefine el método público `ficha(): string`: reutiliza `super.ficha()` y añade
  ` | Edición: {edicion}` al final.

**Clase `PoliticaPrestamo` (Singleton):**

- Constructor privado sin argumentos y propiedad estática privada que conserva
  la única instancia.
- Método público estático `obtenerInstancia(): PoliticaPrestamo`: todas sus llamadas
  devuelven el mismo objeto, creado durante la primera llamada.
- Propiedad privada `_limite: number`, inicialmente `3`.
- Getter público `limite: number`: devuelve el límite actual.
- Setter público `limite`, que recibe un `number`: acepta únicamente enteros entre
  `1` y `5`, incluidos. Otro valor lanza un `Error` y conserva el límite anterior.
- El límite indica cuántos materiales puede tener prestados **cada biblioteca**
  simultáneamente. Cambiarlo no devuelve materiales ya prestados; si una biblioteca
  queda en el límite o por encima de él, no admite nuevos préstamos hasta tener cupo.

**Clase `Biblioteca`:**

- Constructor sin argumentos y propiedad privada `materiales: Material[]`, inicialmente vacía.
- Propiedad estática privada `totalCreadas: number`, inicialmente `0`. Cada nueva
  instancia incrementa ese total una vez.
- Método público estático `obtenerTotalCreadas(): number`: devuelve ese contador.
- Método privado `buscarPorCodigo(codigo: string): Material | undefined`: devuelve
  el material registrado con ese código o `undefined` si no existe.
- Método público `agregar(material: Material): boolean`: registra el objeto recibido
  al final del arreglo y devuelve `true`. Si ya existe ese código en esa biblioteca,
  devuelve `false` sin modificar el arreglo. Debe utilizar `buscarPorCodigo()`.
- Método público `prestar(codigo: string): boolean`: utiliza `buscarPorCodigo()`.
  Devuelve `false` si el material no existe, ya está prestado o la biblioteca tiene
  tantos materiales prestados como el límite actual de la política, o más.
  Si puede prestarlo, cambia su estado mediante el método del material y devuelve `true`.
- Método público `devolver(codigo: string): boolean`: utiliza `buscarPorCodigo()`.
  Devuelve `false` si el material no existe o ya está disponible. Si está prestado,
  cambia su estado mediante el método del material y devuelve `true`.
- Método público `listarDisponibles(): string[]`: devuelve las fichas de los
  materiales disponibles, en orden de registro; si no hay ninguno, devuelve `[]`.
  No modifica materiales ni su orden.
- Las operaciones rechazadas no cambian ningún material ni el arreglo.
  Rechazar un registro o préstamo devuelve `false`; no lanza un error.

Para estas pruebas, cada objeto `Material` se registra en una sola biblioteca y
las operaciones de préstamo se realizan a través de ella. Bibliotecas distintas
pueden registrar códigos iguales en objetos diferentes. Solo comparten la política;
sus colecciones y cupos son independientes. Los textos recibidos serán no vacíos
y las ediciones serán enteros positivos: no se pide validar esos datos ni llevar
fechas, usuarios o multas. Usa propiedades de parámetro al menos en una clase.

**Casos de aceptación, en orden:**

1. Crea dos bibliotecas en una ejecución nueva: el contador debe ser `2`.
2. Obtén la política dos veces: las referencias deben ser iguales. Configura
   el límite a `1` mediante una referencia y léelo mediante la otra.
3. Agrega a la primera biblioteca un libro `L1` y una revista `R1`: devuelve `true`
   en ambos casos. Agrega otro material con código `L1`: devuelve `false`.
4. Usa como libro `L1`, título `TypeScript`, autor `Ana` y sin ubicación; su ficha
   debe ser `L1 - TypeScript | Sin ubicación | Autor: Ana`. Usa como revista `R1`,
   título `Web`, edición `2` y ubicación `Estante A`; su ficha debe ser
   `R1 - Web | Estante A | Edición: 2`. Antes de prestar, `listarDisponibles()`
   devuelve esas dos cadenas en ese orden.
5. Presta `L1`: devuelve `true`. Intenta prestarlo otra vez: devuelve `false`.
6. Intenta prestar `R1`: devuelve `false` por el límite. Ahora solo `R1` está disponible.
7. Devuelve `L1`: devuelve `true`; devolverlo otra vez devuelve `false`.
8. Presta `R1`: ahora devuelve `true`. Consulta los días de ambos materiales:
   el libro devuelve `14` y la revista `7`.
9. Prestar o devolver un código inexistente devuelve `false`.
10. Asignar un límite de `0`, `6` o `1.5` lanza un error y conserva el valor `1`.
11. Agrega un libro distinto a la segunda biblioteca y préstalo: devuelve `true`,
    aunque la primera ya tenga su revista prestada. La segunda tiene su propio cupo.
12. Comprueba con TypeScript que no puedes instanciar `Material`, reasignar un código,
    modificar directamente el estado privado ni invocar el método protegido desde fuera.

**Explica antes de darlo por terminado:**

- ¿Qué datos pertenecen a cada objeto y cuáles a una clase?
- ¿Por qué el estado de préstamo es privado y el generador de ficha protegido?
- ¿Por qué `Material` es abstracta? ¿Dónde usaste sus subclases a través del tipo base?
- ¿Qué diferencia hay entre las dos bibliotecas y las dos referencias a la política?
- ¿En qué lugar se protege cada regla y cómo comprobaste que una operación rechazada
  no deja cambios parciales?

## Criterio para cerrar la sección

Marca cada punto solo cuando puedas demostrarlo con código:

- [ ] Creo instancias y explico el constructor y `this`.
- [ ] Distingo propiedades públicas, privadas, protegidas, opcionales y `readonly`.
- [ ] Uso la forma corta sin confundir parámetros con propiedades.
- [ ] Expongo acciones públicas y reutilizo métodos privados.
- [ ] Distingo miembros estáticos de datos de instancia.
- [ ] Uso `extends`, `super(...)` y `super.metodo()` con intención.
- [ ] Valido con setters y expongo valores calculados mediante getters.
- [ ] Implemento clases abstractas y uso la base como tipo.
- [ ] Distingo un constructor privado de un Singleton completo.
- [ ] Resuelvo los casos del proyecto final y explico mis decisiones sin copiar.

Si un punto cuesta, vuelve al primer ejercicio que lo introduce, cambia los
datos y resuélvelo otra vez sin mirar tu solución anterior.
