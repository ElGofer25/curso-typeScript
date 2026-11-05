"use strict";
(() => {
    class Mutant {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    const wolverine = new Mutant('Wolverine', 'Logan');
    class Mutante {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
    }
    const deadpool = new Xmen('Deadpool', 'Wade Wilson');
    class villain extends Mutante {
    }
    const magneto = new villain('Magneto', 'Erik Lehnsherr');
})();
//# sourceMappingURL=abstractas.js.map