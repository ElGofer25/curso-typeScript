(()=>{
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){}
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
        }
       
    } 
    const wolverine = new Xmen('Wolverine', 'Logan', true);


})();