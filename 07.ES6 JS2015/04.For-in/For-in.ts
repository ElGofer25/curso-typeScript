(()=>{
    //! For-in — Recorrer las claves de un objeto
    // En cada vuelta recibimos el nombre de una propiedad, no su valor.
    // For-in ya existía antes de ES6; aquí lo comparamos con for-of.
    const persona = {
        nombre: 'Diego',
        edad: 23,
        trabaja: true,
    };

    for (const clave in persona) {
        console.log(clave);
    }
    // Resultado: 'nombre', 'edad', 'trabaja'.
    // La variable clave es un string y su nombre lo elegimos nosotros.

    //! Acceder al valor mediante corchetes
    // Record<string, number>: claves de tipo string y valores de tipo number.
    const puntuaciones: Record<string, number> = {
        Diego: 90,
        Ana: 100,
        Luis: 85,
    };

    for (const nombre in puntuaciones) {
        console.log(nombre, puntuaciones[nombre]);
    }
    // Resultado: Diego 90, Ana 100, Luis 85.
    // puntuaciones[nombre] busca la clave que contiene la variable nombre.
    // puntuaciones.nombre buscaría una propiedad llamada literalmente 'nombre'.
    // Con noUncheckedIndexedAccess, una lectura por clave puede incluir undefined.

    //! Claves y tipado en objetos con propiedades específicas
    // persona[clave] puede dar error: TypeScript ve clave como string,
    // pero persona solo permite 'nombre', 'edad' y 'trabaja'.
    // For-in no comprueba automáticamente que un string sea una clave del tipo.

    //! Propiedades propias y heredadas
    // For-in recorre propiedades enumerables, incluidas las heredadas.
    // Object.hasOwn (ES2022) comprueba que la propiedad pertenece al propio objeto.
    for (const nombre in puntuaciones) {
        if (Object.hasOwn(puntuaciones, nombre)) {
            console.log(nombre, puntuaciones[nombre]);
        }
    }

    //! Diferencias con for-of
    const lenguajes: string[] = ['TypeScript', 'Python', 'C#'];

    for (const indice in lenguajes) {
        console.log(indice);
    }
    // Resultado: '0', '1', '2'. Los índices se reciben como strings.
    // Si el array tuviera otras propiedades enumerables, también se recorrerían.

    for (const lenguaje of lenguajes) {
        console.log(lenguaje);
    }
    // Resultado: 'TypeScript', 'Python', 'C#'. Recibimos los elementos.

    // For-in: uso habitual para las claves de propiedades de un objeto.
    // For-of: uso habitual para los valores de arrays, strings y otros iterables.
    // Un objeto común como persona no se puede recorrer directamente con for-of,
    // porque no es iterable. Para los elementos de un array, preferimos for-of.
})();
