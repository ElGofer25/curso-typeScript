(()=>{
    // las interfaces de ts no tienen traducción a JS
    //Cómo hago otra interfaz que me ayude a controlar otros objetos?
    interface Client {
        name: string,
        age?: number,
        address?: Address
        /*
        Cuando la interfaz aumenta de nivel, no es recomendable que anidemos así
        address?: {
            id: number,
            zip: string,
            city: string,
        }
        */
    }

    //Lo recomendable sería generar otra interfaz, que sea llamada por la principal
    interface Address {
            id: number,
            zip: string,
            city: string,
    }

    const client ={
        name: 'Fernando',
        age: 25,
        //Un objeto dentro de otro objeto
        address: {
            id:123,
            zip: 'KY2 SUD',
            city: 'Ottawa',
        }
    }
    const client2 : Client ={
        name: 'melissa',
        age: 30,
        address: {
            id: 123,
            zip: 'hola',
            city: 'Acapulco'
        }
    }
})();