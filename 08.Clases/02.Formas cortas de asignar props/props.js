"use strict";
(() => {
    class Avenger {
        name;
        team;
        realName;
        static averageAge = 35;
        constructor(name, team, realName, averageAge = 35) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.averageAge = averageAge;
        }
    }
    const antman = new Avenger('Antman', 'Capitan America', 'Scott Lang');
})();
//# sourceMappingURL=props.js.map