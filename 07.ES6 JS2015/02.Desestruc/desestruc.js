"use strict";
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activos: true,
        poder: 1500,
    };
    const printAvenger = ({ ironman, ...resto }) => {
        console.log(ironman, resto);
    };
    const avengersArr = ['Robert Downey Jr.', 'Tom Holland', 'Mark Ruffalo', 'Chris Hemsworth', 'Chris Evans'];
    const [, ironman,] = avengersArr;
    const [captain, ironmain,] = avengersArr;
    console.log({ ironman });
})();
//# sourceMappingURL=desestruc.js.map