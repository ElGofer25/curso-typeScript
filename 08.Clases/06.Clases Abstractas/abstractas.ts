(()=>{
    class Mutant{
        constructor(
            public name: string,
            public realName: string,
        ){}
    }
    //esto es una nueva instancia de la clase Mutant, que es una clase abstracta, por lo que no se puede instanciar directamente.
    // incluso podemos usar nuestras clases como si fueran tipos de datos
    const wolverine = new Mutant('Wolverine', 'Logan');


    // Las clases abstractas nos sirven para definir una estructura base para otras clases, pero no se pueden instanciar directamente.
    abstract class Mutante{
        constructor(
            public name: string,
            public realName: string,
        ){}
    }
   
   class Xmen extends Mutante{
        
   }
   
    const deadpool = new Xmen('Deadpool', 'Wade Wilson');


    //Qué otro uso tienen? Nos permiten extender clases abstractas y obligar a las subclases a implementar ciertos métodos o propiedades.
   class villain extends Mutante{}
    const magneto = new villain('Magneto', 'Erik Lehnsherr');
})();