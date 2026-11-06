((()=>{
    class Apocalipsis {

        static intance: Apocalipsis;
        private constructor(public name: string){

        }
        static callApocalipsis(): Apocalipsis{
            if(!Apocalipsis.intance){ //Si no existe una instancia de Apocalipsis, se crea una nueva instancia
                Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis... El único');
            }
            return Apocalipsis.intance;
        }
        changeName(newName: string): void{
            this.name = newName;
        }
    }


    const apocalipsis = Apocalipsis.callApocalipsis();
    apocalipsis.changeName('Soy Apocalipsis... El único y poderoso');
    console.log(apocalipsis);

}))();