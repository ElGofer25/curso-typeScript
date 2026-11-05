(()=>{
    // Esto es una clase
    class Avenger {
        private name : string; // Private: Solo se puede acceder desde la clase
        public  team : string; // Public: Se puede acceder desde cualquier parte del código
        static averageAge : number = 35; // Static: Se puede acceder desde la clase, no desde la instancia
        realName ?: string; // Por defecto es public, es buena práctica definirlo explícitamente
    
        constructor(name: string, team: string, realName: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;  
    
    }}
    const antman : Avenger = new Avenger('Antman', 'Capitan America', 'Scott Lang');
    console.log(antman.realName); // No veremos el name porque es privado
    console.log(antman.team); // No veremos el team porque es público
    console.log(Avenger.averageAge); // Veremos la edad promedio porque es static



})();

// readonly: cada instancia conserva su código y permite consultarlo.
(() => {
    class Producto {
        public readonly codigo: string;

        constructor(codigo: string) {
            this.codigo = codigo;
        }
    }

    const producto = new Producto('IPAD-001');
    const otroProducto = new Producto('IPHONE-001');

    console.log(producto.codigo); // "IPAD-001": la propiedad es pública.
    console.log(otroProducto.codigo); // "IPHONE-001": cada objeto tiene su código.

    // Descomenta para comprobar el error de TypeScript y luego vuelve a comentar:
    // producto.codigo = 'IPAD-002'; // Error: codigo es de solo lectura.

    // No hace falta un método adicional para aplicar readonly.
    // Tampoco se permite reasignar codigo desde un método normal de Producto.
    // La restricción se comprueba en TypeScript, no durante la ejecución de JavaScript.
})();
