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
    {/*Xmen hereda de Avenger, es decir, Xmen es una subclase de Avenger 
    y dispone de todas las propiedades y métodos de Avenger, incluidas las restricciones de acceso (public, private, protected)*/}
    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            //Es obligatorio llamar al constructor de la clase padre (Avenger) desde la subclase (Xmen) 
            //usando la palabra clave super. Esto asegura que las propiedades y métodos heredados se inicialicen correctamente.
            super(name, realName);
            console.log('Constructor Xmen Llamado');
        }
        getFullNameFromXmen(){
            //Accedemos al método protegido getFullName() de la clase padre (Avenger) desde la subclase (Xmen) 
            // usando la palabra clave super. Esto nos permite reutilizar la lógica de la clase padre sin duplicar código.
            console.log( super.getFullName());
        }
    } 
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.getFullNameFromXmen();


})();