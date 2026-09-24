"use strict";
(() => {
    class Avenger {
        name;
        team;
        static averageAge = 35;
        realName;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    const antman = new Avenger('Antman', 'Capitan America', 'Scott Lang');
    console.log(antman.realName);
    console.log(antman.team);
    console.log(Avenger.averageAge);
})();
//# sourceMappingURL=clases.js.map