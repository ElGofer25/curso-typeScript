/*
Perfecto. Voy a mantener exactamente el flujo que hemos venido usando: sin soluciones, sin pseudocódigo y sin fragmentos de implementación que te adelanten la respuesta. Los ejercicios solo utilizarán los temas que enumeraste, más funciones, condicionales, operadores y arrays básicos como apoyo.
La dificultad aumenta dentro de cada sección y termina con problemas que combinan varios conceptos.
*/

//! Compendio de TypeScript — Objetos, ES6 y Clases
//! Sección 5 — Objetos
//! Ejercicio 1 — Perfil de desarrollador
/*
Tipo: Implementación
Dificultad: Fácil
Representa un desarrollador mediante un objeto con los siguientes datos:
    - nombre;
    - edad;
    - trabaja actualmente;
    - lenguajes de programación conocidos.
Datos iniciales
    - Nombre: Diego
    - Edad: 23
    - Trabaja actualmente: verdadero
    - Lenguajes: TypeScript, Python y C#
Requisitos
    - Todas las propiedades deben estar tipadas.
    - Los lenguajes deben almacenarse en un array de strings.
    - No utilices any.
    - No utilices clases.
Resultado esperado
El objeto debe aceptar correctamente los datos indicados y rechazar valores incompatibles con sus tipos.
*/
(()=>{
        let developer : {
            name: string, age : number, haveJob: boolean, knownLanguages: string[]} = {
        name: 'Diego',
        age: 23,
        haveJob: true,
        knownLanguages : ['python', 'java', 'javascript' ]

    }
    console.log(developer.knownLanguages)
})();

//! Ejercicio 2 — Producto con información opcional
/*
Tipo: Implementación
Dificultad: Fácil
Define la estructura reutilizable de un producto.
Cada producto tendrá:
    - nombre obligatorio;
    - precio obligatorio;
    - disponible obligatorio;
    - descripción opcional;
    - etiquetas opcionales.
Datos iniciales
Producto A:
    - nombre: Keyboard
    - precio: 1200
    - disponible: verdadero
    - descripción: Mechanical keyboard
    - etiquetas: gaming, mechanical
Producto B:
    - nombre: Mouse
    - precio: 650
    - disponible: verdadero
Requisitos
    - Utiliza un alias con type.
    - Ambos productos deben utilizar el mismo tipo.
    - Las etiquetas deben ser un array de strings.
    - El segundo producto debe ser válido aunque no incluya las propiedades opcionales.
Resultado esperado
Ambos objetos deben ser aceptados por TypeScript.
*/
(()=>{
    
    
    type productos = {name: string, price: number, isAvaliable : boolean, description ?: string, tags ?: string[]};

    const keyboard : productos = {
        name : 'Keyboard',
        price : 99.99,
        isAvaliable : true,
        description : 'Get your own mechanical keyboard for a better experience typing',
    }

    const monitors : productos = {
        name : 'Ultragear',
        price : 199.99,
        isAvaliable : false,
    }



})();
//! Ejercicio 3 — Método dentro de un objeto
/*
Tipo: Implementación
Dificultad: Fácil–Medio
Representa una cuenta bancaria con:
- propietario;
- saldo;
- cuenta activa;
- un método para consultar el saldo.
El método debe producir un texto que incluya el nombre del propietario y su saldo actual.
Datos iniciales
- Propietario: Tony
- Saldo: 8500
- Cuenta activa: verdadero
Requisitos
- Declara el tipo del parámetro si utilizas alguno.
- Declara explícitamente el tipo de retorno del método.
- El método debe acceder a las propiedades mediante this.
- No dupliques manualmente los valores del propietario o del saldo dentro del método.
Resultado esperado
Al utilizar el método debe obtenerse conceptualmente:
Tony tiene un saldo de 8500
*/

(()=>{
    type Account = {owner:string, balance:number, isActive:boolean, consultarSaldo():string};
    const myAccount : Account = {
        owner : 'Diego',
        balance : 2300,
        isActive : true,
        consultarSaldo() : string{ //Método
            return `${this.owner} tiene un saldo de ${this.balance}`
        }
    };
})();



//! Ejercicio 4 — Reasignación válida e inválida
/*
Tipo: Predicción
Dificultad: Medio
Tienes un tipo que representa un automóvil con:
- marca: string;
- año: number;
- eléctrico: boolean.
Una variable ha sido declarada utilizando ese tipo.

Analiza las siguientes operaciones y determina cuáles deberían ser aceptadas por TypeScript:
1. Reemplazar el objeto por otro automóvil que tenga las mismas tres propiedades con tipos correctos.
    R: Si lo acepta typescrip. TS peta si hay variación entre los tipos detectados.

2. Reemplazarlo por un objeto que no tenga la propiedad año.
    R: Peta, debemos de matchear con las propiedades del tipo, en caso contrario, TS avisa la 'omisión' de uno de las propiedades/atributos.

3. Cambiar únicamente el valor de eléctrico.
    R: Si se cambia por otro booleano, no peta. Si se cambia por otro que no sea booleano, peta.

4. Cambiar año por un string.
    R: Si se cambia desde el type, no pasa nada. Pero si se declara un valor distinto al del tipe, peta.

5. Agregar una propiedad que no forma parte del tipo durante una nueva asignación.
    R: Peta, TS avisa que el objeto debe declarar solo propiedades que se encuentran dentro del objeto.

Requisito
Justifica cada respuesta basándote en la estructura declarada.
*/
(()=>{
    type car = {brand : string, year : number, isElectric : boolean };
    const car : car = {
        brand: 'Toyota',
        year: 2026,
        isElectric: true,
        //rinSize: 15, --> Peta
    }





})();
//! Ejercicio 5 — Unión de tipos
/*
Tipo: Implementación
Dificultad: Medio
Crea un tipo Hero que contenga:
- nombre;
- poder;
- activo.
Después trabaja con una variable que pueda contener:
- un string;
- un number;
- un Hero.
Requisitos
- Utiliza una unión de tipos.
- Asigna en diferentes momentos un valor de cada uno de los tres tipos permitidos.
- No utilices any.
Resultado esperado
TypeScript debe aceptar los tres tipos declarados y rechazar tipos fuera de la unión.
*/

(()=>{
    type Hero = {nombre: string, poder: string, activo: boolean};
    let myVar : string | number | Hero;
    //myVar = ['fernando', 23, ['diego', 'regeneración', true]]; // Peta 
    

    myVar = 'diego';
    //Un hero debe de ser un objeto con props nombradas.
    myVar = {
        nombre : 'Fernando',
        poder : 'Regeneración',
        activo : true,
    }
})();

//! Ejercicio 6 — Trabajar con una unión de forma segura
/*
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
*/
(()=>{
  
    function myFunction(myVar : number|string): (string | number){
        if (typeof myVar === 'string'){
            return myVar.toUpperCase()
        } else if (typeof myVar === 'number'){
            return myVar * 2;
        }
        return 'Tipo desconocido'; //Se pone este return para que TS infiera que abarcamos todos los casos
    }
    let myVar : (string | number);
    myVar = 'Diego'
})();


//! Sección 7 — ES6 / ECMAScript 2015
//! Ejercicio 7 — var, let o const
/*
Tipo: Predicción y análisis
Dificultad: Fácil
Para cada situación decide cuál de las tres declaraciones utilizarías y explica por qué:

1. Una constante matemática cuyo valor nunca cambiará.
R: Usaría const, porque no se reasignará el valor.

2. Un contador cuyo valor cambiará durante la ejecución.
R: Usaría let, porque el valor tendrá que cambiar

3. Una variable que debe existir únicamente dentro de un bloque.
R: Usaría const para que su valor sea inmutable

4. Una referencia a un array cuyo contenido cambiará, pero que nunca será reemplazado por otro array.
R: Usaría let tipado.

5. Una referencia a un objeto que conservará siempre la misma instancia.
R: Usaría const, para mantener su valor

¿Se supone que var era una asignación de una versión pasada del ecmascript no? Entonces

Requisito
Diferencia claramente entre:
- cambiar el contenido;
- reasignar la variable.
*/

//! Ejercicio 8 — const y mutación
/*
Tipo: Predicción
Dificultad: Fácil–Medio
Se tiene un array almacenado mediante const.
Analiza qué debería ocurrir al intentar:
1. agregar otro elemento;
2. modificar un elemento existente;
3. eliminar un elemento;
4. reemplazar completamente el array por otro.
Después realiza el mismo análisis con un objeto declarado mediante const.
Objetivo
Explicar por qué const no significa necesariamente que el contenido sea inmutable.
*/
(()=>{
    
    const myArray : (number|string)[] = [];

    myArray.push(22);       // Agrega al final
    myArray.unshift(21);    // Agrega al inicio
    
    // Posición 1, eliminar 0 elementos e insertar "25"
    // array.splice(posicion, cantidadAEliminar, elementoNuevo);
    myArray.splice(1, 0, 25);

    // Remplazar un valor directamente
    myArray[2] = "Sandia";

    // Eliminar un elemento de una posición específica
    // Elimina 1 elemento desde la posición 1
    myArray.splice(1, 1)

    console.log(myArray);


})();


//! Ejercicio 9 — Desestructuración de objetos
/*
Tipo: Implementación
Dificultad: Fácil–Medio

Tienes un objeto de usuario con:
    - nombre;
    - edad;
    - país;
    - correo;
    - activo.

Obtén mediante desestructuración:
    - nombre;
    - país;
    - activo.

Requisitos
    - No accedas individualmente a esas tres propiedades después de la desestructuración.
    - Las propiedades restantes deben permanecer disponibles en el objeto original.
    - No utilices clases.

Datos iniciales:
        - nombre: Bruce
        - edad: 35
        - país: USA
        - correo: bruce@example.com
        - activo: verdadero
*/
(()=>{
    //definimos la estructura del objeto con un type:
    type Users ={
        nombre: string,
        edad: number,
        pais: string,
        correo: string,
        activo: boolean,

    }

    //Declaramos los valores del objeto
    const user: Users  = {
        nombre: 'Bruce',
        edad: 35,
        pais: 'USA',
        correo: 'bruce@example.com',
        activo: true,
    }
    //Ahora desestructuramos el objeto en los parámetros de la función
    const myUser = ({nombre, pais, activo} : Users) =>{
        console.log(nombre, pais, activo)
    }


})();

//! Ejercicio 10 — Rest con propiedades de un objeto
/*
Tipo: Implementación
Dificultad: Medio
Utiliza el mismo tipo de usuario del ejercicio anterior.
Separa:
    - nombre;
    - correo;
y reúne todas las demás propiedades utilizando Rest.
Resultado esperado

Debes terminar conceptualmente con:
    - una variable para el nombre;
    - una variable para el correo;
    - otra estructura con edad, país y activo.

Requisitos
    - Utiliza desestructuración.
    - Utiliza Rest.
    - No reconstruyas manualmente el objeto con las propiedades restantes.
*/
(()=>{
     //definimos la estructura del objeto con un type:
    type Users ={
        nombre: string,
        edad: number,
        pais: string,
        correo: string,
        activo: boolean,

    }
    //Declaramos el objeto:
    const user: Users ={
        nombre: 'Diego',
        correo: 'email@email.com',
        edad: 23,
        pais: 'Mexico',
        activo: true,
    }
    //Accedemos al calor de la propiedad nombre:
    const name = user.nombre;

    // Desestructuramos en tres constantes:
    const {nombre, correo, ...resto} = user;
    console.log(nombre)
    console.log(correo)
    console.log(resto)
})();

//! Ejercicio 11 — Desestructuración de parámetros
/*
Tipo: Implementación
Dificultad: Medio
Crea una función que reciba un producto formado por:
    - nombre;
    - precio;
    - disponible.
La función debe devolver un texto que incluya el nombre y el precio.

Requisitos
    - El parámetro debe desestructurarse directamente.
    - Debe existir un tipo reutilizable para el producto.
    - No accedas al producto mediante una variable intermedia para después extraer sus propiedades.
Datos iniciales
    - nombre: Monitor
    - precio: 4800
    - disponible: verdadero
Resultado esperado
Debe producirse un texto que incluya:
Monitor — 4800
*/
(()=>{
    //Declaramos la estructura del objeto medianete un type
    type product = {
        name: string, 
        price: number, 
        isAvailable: boolean,
    };

    const myFunction = ({name, price, isAvailable}: product): string =>{
        return `The product ${name} cost ${price} and is ${isAvailable} available`;
    };
    
    // Definimos el objeto del producto
    const monitor : product ={
        name: 'Monitor LG Ultragear',
        price: 3499,
        isAvailable: true,
    };

    //Declaramos una variable y le damos el objeto, siguiendo el retorno de la función
    const resultado = myFunction(monitor);
    console.log(resultado);

})();

//! Ejercicio 12 — Desestructuración de arrays
/*
Tipo: Implementación
Dificultad: Fácil–Medio
Tienes el siguiente orden conceptual de lenguajes:
1. TypeScript
2. Python
3. Java
4. C#
5. C++
Mediante desestructuración obtén únicamente:
- el primero;
- el tercero;
- el quinto.
Requisitos
- No utilices índices manuales para obtener los tres resultados.
- Omite deliberadamente las posiciones que no necesitas.
Resultado esperado
Debes obtener:
- TypeScript
- Java
- C++
*/

(()=>{
    const myLanguages: string[] = [
        'TypeScript',
        'Python',
        'Java',
        'C#',
        'C++',
    ]
    const [ts, , java, , cplus] = myLanguages;
    console.log(ts);    // TypeScript
    console.log(java);  // Java
    console.log(cplus); // C++

})();


//! Ejercicio 13 — for...of
/*
Tipo: Implementación
Dificultad: Medio
Tienes una lista de empleados. Cada empleado contiene:
    - nombre;
    - salario;
    - activo.
Recorre todos los empleados y muestra el nombre de cada uno.
Datos iniciales
    - Ana, 18000, activa
    - Marco, 22000, activo
    - Laura, 19500, inactiva

Requisitos
    - Utiliza for...of.
    - No utilices for...in.
    - No utilices métodos de recorrido como sustitución.
    - Utiliza un array de objetos tipados.
Resultado esperado
Deben mostrarse los tres nombres.
*/
(()=>{
    type employee = {
        name: string,
        salary: number,
        active: boolean,
    };
    const firstEmployee : employee = {
        name: 'Laura', 
        salary: 19500,
        active: false,
    };
    const secondEmployee: employee = {
        name: 'Marco',
        salary: 22000, 
        active: true,
    };
    const thirdEmployee: employee = {
        name: 'Ana',
        salary: 18000,
        active: true,
    }
    const empleados: employee[] = [firstEmployee, secondEmployee, thirdEmployee];

    for(const myeployee of empleados){
        console.log(myeployee)
    }

})();
//! Ejercicio 14 — for...of vs for...in
/*
Tipo: Predicción
Dificultad: Medio
Tienes un array con tres nombres.

{Comentario: Te toca regaño, ni si quiera he visto el tema 'for ...in'}

Sin ejecutar inicialmente el código, responde:
1. ¿Qué concepto obtendrías al recorrerlo con for...of?
R: Los nombres que viven en ese array

2. ¿Qué concepto obtendrías al recorrerlo con for...in?
R: Los indices correspondientes a cada valor del array

3. ¿Cuál utilizarías para obtener directamente los nombres?
R: Utilizaría for of

4. ¿Cuál utilizarías si te interesaran las posiciones o claves?
R: Utilizaría for in

Después comprueba tus respuestas ejecutando ambos recorridos.
*/
(()=>{
    let myArray : string[] = ['Joshua', 'Mario', 'Diego', 'Raul']
    
    //Esto recorre los valores del array, y los imprime
    for(const temporal of myArray){
        console.log(temporal)
    }

    //Esto recorre las posiciones del array, retorna los indices
    for (const temporal in myArray){
        console.log(temporal)
    }

})();

//! Ejercicio 15 — Las trampas de typeof
/*
Tipo: Predicción
Dificultad: Medio
Predice qué categoría reportará typeof para:
1. un string;
2. un number;
3. un boolean;
4. un objeto normal;
5. null;
6. un array.
Después responde:
- ¿por qué typeof por sí solo no basta para diferenciar correctamente un array de un objeto normal?
R: Porque para ambos casos retorna 'object'
- ¿qué herramienta utilizarías para confirmar específicamente que un valor es un array?
R: Podemos usar el método Array.isArray(value) para poder verificar si la estructura es o no un array.

Requisito
No utilices temas externos a typeof y Array.isArray().
*/
(()=>{
    function myFunction(value:any) : void{
         if (Array.isArray(value) === true){
            //Podemos simplificar: Array.isArray(value) --> Esto ya da true o false
            console.log('Value is an Array', value)
         } else {
            console.log(value, 'is a', typeof value)
         }
    }

    //Mi intento, está mal: let myVar = function(['Diego', 243, ])
    let value = myFunction(['Diego', 23])
})();

//! Sección 8 — Clases
//! Ejercicio 16 — Primera clase
/*
Tipo: Implementación
Dificultad: Fácil
Crea una clase que represente un videojuego.
Cada instancia debe tener:
    - título;
    - precio;
    - disponible.
Datos iniciales
Crea tres instancias:
    - Elden Ring, 1200, disponible
    - Hollow Knight, 300, disponible
    - Game X, 950, no disponible
Requisitos
    - Declara las propiedades con sus tipos.
    - Inicialízalas mediante el constructor.
    - Utiliza new.
    - Cada instancia debe conservar sus propios datos.
*/
(()=>{
    class myGame {
        constructor (
            
        ){}
    }
})();
//! Ejercicio 17 — Métodos y this
/*
Tipo: Implementación
Dificultad: Fácil–Medio
Amplía conceptualmente una clase de automóvil con:
- marca;
- modelo;
- velocidad actual.
Agrega un método público que devuelva un texto con la marca, modelo y velocidad actual.
Requisitos
- El método debe utilizar this.
- Debe declarar su tipo de retorno.
- Los datos deben venir de la instancia.
- No dupliques valores dentro del método.
*/

//! Ejercicio 18 — Público y privado
/*
Tipo: Implementación
Dificultad: Medio
Crea una clase que represente una cuenta bancaria.
Debe contener:
- propietario público;
- saldo privado.
Debe permitir:
- consultar el saldo mediante un método público;
- incrementar el saldo mediante un método público.
Requisitos
- El saldo no debe poder consultarse directamente desde fuera de la clase.
- El método público debe ser el responsable de acceder a la propiedad privada.
- No utilices getters ni setters.
Datos iniciales
- propietario: Peter
- saldo inicial: 5000
*/

//! Ejercicio 19 — Método privado
/*
Tipo: Implementación
Dificultad: Medio
Crea una clase para representar un usuario.
Debe tener:
- nombre público;
- contraseña privada;
- un método público que devuelva un mensaje de acceso;
- un método privado que construya una parte de dicho mensaje.
Requisitos
- El método privado debe utilizarse desde el método público.
- No debe poder ejecutarse directamente desde una instancia externa.
- Utiliza correctamente this.
Objetivo
Distinguir acceso interno y externo.
*/

//! Ejercicio 20 — Parámetros opcionales y valores predeterminados
/*
Tipo: Implementación
Dificultad: Medio
Crea una clase que represente un dispositivo.
Cada dispositivo tiene:
- nombre obligatorio;
- marca obligatoria;
- descripción opcional;
- activo con valor predeterminado true.
Requisitos
- La descripción debe poder omitirse.
- El estado debe poder omitirse y asumir true.
- El usuario también debe poder proporcionar explícitamente false.
Casos
Crea:
1. un dispositivo con todos los valores;
2. uno sin descripción;
3. uno utilizando el estado predeterminado.
*/

//! Ejercicio 21 — Constructor abreviado
/*
Tipo: Corrección y reescritura
Dificultad: Medio
Imagina una clase que actualmente:
- declara tres propiedades;
- recibe las mismas tres propiedades en el constructor;
- asigna manualmente cada parámetro a this.
Las propiedades son:
- nombre público;
- edad pública;
- identificador privado.
Tarea
Reescribe conceptualmente la clase utilizando la forma corta de propiedades de parámetros.
Requisitos
- No declares dos veces las mismas propiedades.
- Identifica cuál parámetro del constructor se convierte también en propiedad.
- Explica por qué un parámetro normal del constructor no necesariamente se convierte en miembro de la instancia.
*/

//! Ejercicio 22 — static
/*
Tipo: Implementación y predicción
Dificultad: Medio
Crea una clase que represente usuarios y mantenga un contador compartido de cuántas instancias se han creado.
Requisitos
- El contador debe ser static.
- Cada construcción de una instancia debe modificarlo.
- Crea tres usuarios.
- Consulta el contador desde la clase.
Preguntas
1. ¿El contador pertenece a cada usuario individual?
2. ¿Deberías acceder al contador mediante una instancia?
3. Después de crear tres instancias, ¿qué valor esperas?
*/

//! Ejercicio 23 — Efecto de modificar un static
/*
Tipo: Predicción
Dificultad: Medio–Difícil
Una clase tiene una propiedad estática inicialmente igual a 0.
El constructor incrementa esa propiedad cada vez que se crea una instancia.
Predice su valor:
- antes de crear objetos;
- después de la primera instancia;
- después de la segunda;
- después de crear cinco instancias en total.
Después explica por qué todas las instancias afectan el mismo valor.
*/

//! Ejercicio 24 — ??
/*
Tipo: Implementación
Dificultad: Medio
Crea una clase que represente un perfil.
Tiene:
- nombre obligatorio;
- apodo opcional.
Un método debe devolver:
- el apodo cuando exista;
- el nombre cuando el apodo esté ausente.
Requisitos
- Utiliza ??.
- No utilices if.
- No utilices operador ternario.
Casos esperados
Nombre Diego + apodo Gofer → Gofer
Nombre Diego sin apodo → Diego
*/

//! Ejercicio 25 — readonly
/*
Tipo: Predicción y corrección
Dificultad: Medio
Una clase representa un empleado.
Tiene:
- identificador;
- nombre;
- salario.
El identificador no debe poder cambiar después de la creación de la instancia.
Tareas
1. Decide qué propiedad debe ser readonly.
2. Crea una instancia.
3. Predice qué sucede al modificar el nombre.
4. Predice qué sucede al modificar el salario.
5. Predice qué sucede al intentar modificar el identificador.
Objetivo
Distinguir entre una propiedad normal y una propiedad que solo puede establecerse durante su inicialización.
*/

//! Ejercicios combinados
//! Ejercicio 26 — Equipo de héroes
/*
Tipo: Implementación
Dificultad: Medio
Define un tipo reutilizable para héroes con:
- nombre;
- poder;
- nivel;
- activo;
- habilidades como array de strings.
Crea un array con al menos tres héroes.
Requisitos
- Utiliza type.
- Recorre el array mediante for...of.
- Utiliza desestructuración para obtener nombre y nivel durante el procesamiento.
- No utilices clases en este ejercicio.
Resultado esperado
Debe mostrarse el nombre y nivel de cada héroe.
*/

//! Ejercicio 27 — Valor desconocido controlado
/*
Tipo: Implementación
Dificultad: Medio
Crea una función que pueda recibir:
- un string;
- un number;
- un array de strings.
El resultado debe depender del tipo recibido:
- string → devolver el propio texto;
- number → devolver el doble;
- array → devolver un texto indicando que se recibió una colección.
Requisitos
- Utiliza una unión.
- Utiliza typeof cuando corresponda.
- Utiliza Array.isArray() cuando corresponda.
- No utilices any.
Casos
- TypeScript
- 10
- TypeScript, Python, Java dentro de un array
*/

//! Ejercicio 28 — Inventario mediante clase
/*
Tipo: Implementación
Dificultad: Medio–Difícil
Crea una clase Product.
Cada producto tiene:
- identificador inmutable;
- nombre público;
- precio público;
- stock privado;
- descripción opcional.
Además:
- debe existir un contador estático de productos creados;
- debe existir un método público para consultar el stock;
- debe existir un método privado utilizado por algún método público;
- el constructor debe aprovechar la forma abreviada cuando tenga sentido.
Datos iniciales
Crea tres productos diferentes.
Requisitos
Utiliza únicamente:
- constructor;
- public;
- private;
- readonly;
- static;
- parámetros opcionales;
- métodos;
- this.
No introduzcas herencia.
*/

//! Ejercicio 29 — Encuentra los errores
/*
Tipo: Corrección
Dificultad: Medio–Difícil
Se intenta diseñar una clase de usuario con estas reglas:
- el ID debe ser inmutable;
- el nombre debe ser público;
- la contraseña debe ser privada;
- existe un contador común para todos los usuarios;
- el contador debe aumentar por cada nueva instancia.
Sin embargo, el diseño realizado presenta los siguientes problemas:
1. el contador fue creado como propiedad normal de instancia;
2. la contraseña quedó pública;
3. el ID puede reasignarse;
4. el constructor recibe el nombre pero no lo guarda como propiedad;
5. se intenta consultar una propiedad privada directamente desde fuera.
Tarea
Escribe una versión corregida que cumpla exactamente las cinco reglas.
Requisito
Justifica cada cambio.
*/

//! Ejercicio 30 — Sistema de jugadores
/*
Tipo: Integración final
Dificultad: Difícil dentro de los temas vistos
Diseña una clase que represente jugadores de un videojuego.
Cada jugador debe tener:
- ID inmutable;
- nombre público;
- nivel público;
- estado activo;
- habilidades como array de strings;
- apodo opcional;
- puntuación privada.
Además:
- debe existir un contador estático de jugadores creados;
- debe existir un método público que muestre la identidad del jugador;
- dicho método utilizará el apodo si existe y, de lo contrario, el nombre;
- debe existir un método público que permita consultar la puntuación;
- al menos un método privado debe ser utilizado desde un método público.
Después crea un array con varias instancias y recórrelo utilizando for...of.
Durante el recorrido:
- obtén datos de cada instancia;
- muestra información de cada jugador.
Condiciones
No utilices:
- interfaces;
- herencia;
- genéricos;
- clases abstractas;
- decoradores;
- asincronía;
- DOM;
- librerías externas.
*/
