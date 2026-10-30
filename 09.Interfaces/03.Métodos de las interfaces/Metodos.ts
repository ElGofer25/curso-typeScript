(()=>{
  
  
  interface Client {
        name: string,
        age?: number,
        address?: Address
        getFullAddress( id: string):string;
    }

    interface Address {
            id: number,
            zip: string,
            city: string,
    }

    const client: Client ={
        name: 'Fernando',
        age: 25,
        address: {
            id:123,
            zip: 'KY2 SUD',
            city: 'Ottawa',
        },
        getFullAddress( id:string ){
            return this.address?.city ?? 'Dirección no disponible';
        }
    }
    const client2 : Client ={
        name: 'melissa',
        age: 30,
        address: {
            id: 123,
            zip: 'hola',
            city: 'Acapulco'
        },
        getFullAddress( id:string ){
            return this.address?.city ?? 'Dirección no disponible';
        }
    }
})();
