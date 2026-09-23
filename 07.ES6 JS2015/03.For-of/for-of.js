"use strict";
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    };
    const captainAmerica = {
        name: 'Captain America',
        weapon: 'Shield',
    };
    const hulk = {
        name: 'Hulk',
        weapon: 'Gamma Rays',
    };
    const anvergers = [ironman, captainAmerica, hulk];
    for (const avenger of anvergers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
//# sourceMappingURL=for-of.js.map