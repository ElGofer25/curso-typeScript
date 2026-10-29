"use strict";
(() => {
    const persona = {
        nombre: 'Diego',
        edad: 23,
        trabaja: true,
    };
    for (const clave in persona) {
        console.log(clave);
    }
    const puntuaciones = {
        Diego: 90,
        Ana: 100,
        Luis: 85,
    };
    for (const nombre in puntuaciones) {
        console.log(nombre, puntuaciones[nombre]);
    }
    for (const nombre in puntuaciones) {
        if (Object.hasOwn(puntuaciones, nombre)) {
            console.log(nombre, puntuaciones[nombre]);
        }
    }
    const lenguajes = ['TypeScript', 'Python', 'C#'];
    for (const indice in lenguajes) {
        console.log(indice);
    }
    for (const lenguaje of lenguajes) {
        console.log(lenguaje);
    }
})();
//# sourceMappingURL=For-in.js.map