"use strict";
(() => {
    class Avenger {
        name;
        team;
        realName;
        static averageAge = 35;
        static getAvgAge() {
            return this.averageAge;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.realName}) es miembro del equipo ${this.team}`;
        }
    }
    const antman = new Avenger('Antman', 'Capitan America', 'Scott Lang');
    console.log(antman);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=metodos.js.map