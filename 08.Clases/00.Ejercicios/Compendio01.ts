{/*
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
*/}

(()=>{
    class Producto {
        public name: string;
        public price: number;

        constructor(name: string, price: number) {
            this.name = name;
            this.price = price;
        }
    }

    let cuaderno = new Producto('cuaderno', 50)
    let lapiz = new Producto('lapiz', 10)

    //Modificamos los valores:
    cuaderno.price = 60

    //console.log(cuaderno)
    //console.log(lapiz)

{/*
¿qué diferencia hay entre `Producto` y el cuaderno? 
R: Qué `Producto` es la clase, mientras que cuaderno es una instancia creada a partir de la clase.

¿Por qué `this.nombre = nombre` necesita distinguir dos nombres?
Por que '.nombre' es la propiedad de la instancia, y 'name' es el parámetro que recibe el constructor.

*/}

})();

{/*
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
*/}

(()=>{

    class Producto {
        public name: string;
        public price: number;
        public description?: string;

        constructor(name: string, price: number, description?:string){
            this.name = name;
            this.price = price;

            if (description !== undefined){
                this.description = description;
            }
        }
    }
    let desktop = new Producto('Desktop', 199, 'Good comodities, work faster')
    let notebook = new Producto('Notebook', 19)

    //console.log(desktop)

})();