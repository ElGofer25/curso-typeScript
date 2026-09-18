"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio');
    console.log('Hola Mundo');
    const error1 = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio');
    console.log('Hola Mundo');
})();
//# sourceMappingURL=never.js.map