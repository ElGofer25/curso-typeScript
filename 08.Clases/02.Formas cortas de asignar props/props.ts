(()=>{
    // Esto es una clase
    class Avenger {
        //private name : string = ""; // Private: Solo se puede acceder desde la clase
        //public  team : string = ""; // Public: Se puede acceder desde cualquier parte del código
        static averageAge : number = 35; // Static: Se puede acceder desde la clase, no desde la instancia
        //realName ?: string; // Por defecto es public, es buena práctica definirlo explícitamente
    
        // La primer linea dentro de la clase ya no es necesaria, podemos definir las propiedades directamente en el constructor
        constructor(
            private name: string, 
            private team: string, 
            public realName?: string,
            averageAge: number = 35,
        ) {
            Avenger.averageAge = averageAge; // No podemos mandar la static como argumento a menos que la definamos como propiedad de la clase 
         // No podemos mandar la static como argumento a menos que 
    
    }}
    const antman : Avenger = new Avenger('Antman', 'Capitan America', 'Scott Lang');




})();