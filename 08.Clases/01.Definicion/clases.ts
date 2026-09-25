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