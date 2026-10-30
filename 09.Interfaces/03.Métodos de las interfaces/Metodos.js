"use strict";
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 123,
            zip: 'KY2 SUD',
            city: 'Ottawa',
        },
        getFullAddress(id) {
            return this.address?.city ?? 'Dirección no disponible';
        }
    };
    const client2 = {
        name: 'melissa',
        age: 30,
        address: {
            id: 123,
            zip: 'hola',
            city: 'Acapulco'
        },
        getFullAddress(id) {
            return this.address?.city ?? 'Dirección no disponible';
        }
    };
})();
//# sourceMappingURL=Metodos.js.map