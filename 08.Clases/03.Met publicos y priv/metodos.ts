(()=>{
    // Esto es una clase
    class Avenger {
        static averageAge: number = 35;
            static getAvgAge(){ //Este es un método estático, se puede acceder desde la clase, no desde la instancia
                return this.averageAge;
            } 

        constructor(private name: string, private team: string, public realName?: string) {}

        // Método público: Se puede acceder desde cualquier parte del código
        public bio(){
            return `${this.name} (${this.realName}) es miembro del equipo ${this.team}`;
        }
    }
    const antman : Avenger = new Avenger('Antman', 'Capitan America', 'Scott Lang');
    console.log(antman);

    console.log(antman.bio());
    // Si queremos acceder a un método estático, debemos hacerlo desde la clase, no desde la instancia
    console.log(Avenger.getAvgAge()); // Nota que usamos Avenger.getAvgAge() y no antman.getAvgAge()



})();