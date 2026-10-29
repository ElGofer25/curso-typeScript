(()=>{
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger Llamado');
        }
        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super(name, realName);
            console.log('Constructor Xmen Llamado');
        }
        get FullName(){
            return `${this.name} - ${this.realName}`;
        }

        set FullName(name: string){
            if(name.length < 3){
                throw new Error('El nombre debe ser de al menos 3 caracteres');
            }
            this.name = name;
        }

        getFullNameFromXmen(){
            console.log( super.getFullName());
        }
    } 
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // wolverine.getFullNameFromXmen();
    console.log(wolverine.FullName);


})();