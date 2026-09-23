"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Rudeus', 'Notos', 'Greyrat', 'Quagmire');
})();
//# sourceMappingURL=Paramrest.js.map