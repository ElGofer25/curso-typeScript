"use strict";
(() => {
    class Avenger {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        isMutant;
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
})();
//# sourceMappingURL=constructor.js.map