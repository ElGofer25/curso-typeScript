(( )=>{
    //Como le decimos a una clase que implemente la definición de una intefaz. Para ello podemos usar implement

    interface Xmen {
        name: string,
        realName: string,
        mutantPower(id: number):string;
    }

    interface Human{
        age: number,
    }

    class Mutant implements Xmen, Human{
        public age: number;
        public name: string;
        public realName: string;

        //Hay que inicializar las propiedades
        constructor(age: number, name: string, realName: string) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }

        mutantPower(id: number){
            return this.name + '' + this.realName;
        }
    }

})();
